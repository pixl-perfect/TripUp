// Runs a Claude Design component file (.dc.html) inside React.
// The file is parsed once; its markup is compiled to render functions and its
// logic class (class Component extends DCLogic) gets a React base class.
import React, { useEffect } from 'react';

const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
const WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
const VOID = new Set(['input', 'img', 'br', 'hr', 'meta', 'link', 'source']);
const EVENTS = ['onClick', 'onChange', 'onInput', 'onBlur', 'onFocus', 'onKeyDown', 'onKeyUp', 'onSubmit', 'onScroll',
  'onPointerDown', 'onPointerUp', 'onPointerMove', 'onPointerCancel', 'onMouseEnter', 'onMouseLeave', 'onDoubleClick'];
const ATTR = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', inputmode: 'inputMode', autofocus: 'autoFocus',
  readonly: 'readOnly', maxlength: 'maxLength', autocomplete: 'autoComplete', spellcheck: 'spellCheck', enterkeyhint: 'enterKeyHint' };
EVENTS.forEach((e) => { ATTR[e.toLowerCase()] = e; });

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function lookup(path, scope) {
  if (path === 'true') return true;
  if (path === 'false') return false;
  if (path === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
  if (/^(['"]).*\1$/.test(path)) return path.slice(1, -1);
  let v = scope;
  for (const k of path.split('.')) { if (v == null) return undefined; v = v[k]; }
  return v;
}

// "x" → string, "{{a.b}}" → raw value, "a {{b}} c" → string
function value(text) {
  const whole = text.match(WHOLE);
  if (whole) { const p = whole[1]; return (s) => lookup(p, s); }
  if (!text.includes('{{')) return () => text;
  return (s) => text.replace(HOLE, (_, p) => { const v = lookup(p, s); return v == null || v === false ? '' : String(v); });
}

function styleObject(css) {
  const out = {};
  let depth = 0, start = 0;
  const parts = [];
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === '(') depth++; else if (c === ')') depth--;
    else if (c === ';' && depth === 0) { parts.push(css.slice(start, i)); start = i + 1; }
  }
  parts.push(css.slice(start));
  for (const part of parts) {
    const i = part.indexOf(':');
    if (i < 0) continue;
    const prop = part.slice(0, i).trim(), val = part.slice(i + 1).trim();
    if (!prop || val === '') continue;
    const key = prop.startsWith('--') ? prop : camel(prop.startsWith('-') ? prop.slice(1).replace(/^[a-z]/, (c) => c.toUpperCase()) : prop);
    out[key] = val;
  }
  return out;
}

function compileChildren(node) {
  const fns = [];
  node.childNodes.forEach((c) => { const f = compile(c); if (f) fns.push(f); });
  return (s) => fns.map((f) => f(s));
}

function compileAttrs(el, rename) {
  const attrs = [];
  for (const a of el.attributes) {
    if (a.name.startsWith('hint-')) continue;
    attrs.push([rename(a.name), a.name === 'style' ? 'style' : null, value(a.value)]);
  }
  return (s) => {
    const props = {};
    for (const [name, kind, get] of attrs) {
      let v = get(s);
      if (kind === 'style') v = typeof v === 'string' ? styleObject(v) : v;
      if (v === undefined) continue;
      props[name] = v;
    }
    return props;
  };
}

function htmlName(n) {
  if (ATTR[n]) return ATTR[n];
  if (n.startsWith('aria-') || n.startsWith('data-')) return n;
  return n.includes('-') ? camel(n) : n;
}
function importName(n) {
  if (n === 'class') return 'className';
  return n.startsWith('aria-') || n.startsWith('data-') ? n : camel(n);
}

function compile(node) {
  if (node.nodeType === 3) {
    const t = node.nodeValue;
    if (!t.trim() && t.includes('\n')) return null;
    const get = value(t);
    return (s) => { const v = get(s); return v == null || v === false || v === true ? null : v; };
  }
  if (node.nodeType !== 1) return null;
  const tag = node.tagName.toLowerCase();
  if (tag === 'helmet' || tag === 'script' || tag === 'style') return null;
  const kids = compileChildren(node);

  if (tag === 'sc-if') {
    const cond = value(node.getAttribute('value') || '');
    return (s) => (cond(s) ? React.createElement(React.Fragment, null, ...kids(s)) : null);
  }
  if (tag === 'sc-for') {
    const list = value(node.getAttribute('list') || '');
    const as = node.getAttribute('as') || 'item';
    return (s) => (list(s) || []).map((item, i) => {
      const inner = Object.create(s);
      inner[as] = item; inner.$index = i;
      const key = item && (item.key ?? item.id);
      return React.createElement(React.Fragment, { key: key != null ? key + ':' + i : i }, ...kids(inner));
    });
  }
  if (tag === 'x-import') {
    const path = node.getAttribute('component-from-global-scope');
    node.removeAttribute('component-from-global-scope');
    const props = compileAttrs(node, importName);
    return (s) => {
      const C = path.split('.').reduce((o, k) => o && o[k], window);
      return C ? React.createElement(C, props(s), ...kids(s)) : null;
    };
  }
  const props = compileAttrs(node, htmlName);
  const svgTag = node.namespaceURI === 'http://www.w3.org/2000/svg' ? node.tagName : tag;
  if (VOID.has(tag)) return (s) => React.createElement(svgTag, props(s));
  return (s) => React.createElement(svgTag, props(s), ...kids(s));
}

function StateSpy({ state, vals, onState }) {
  useEffect(() => { onState && onState(state, vals); }, [state, onState]);
  return null;
}

// Parse a .dc.html source into a React component class.
export function loadDesignComponent(source) {
  const doc = new DOMParser().parseFromString(source, 'text/html');
  const root = doc.querySelector('x-dc');
  const template = compileChildren(root);
  const code = doc.querySelector('script[data-dc-script]').textContent;

  class DCLogic extends React.Component {
    render() {
      const vals = this.renderVals();
      return React.createElement(React.Fragment, null, ...template(vals),
        React.createElement(StateSpy, { state: this.state, vals, onState: this.props.onState }));
    }
  }
  // The design's own logic: plain classic JS from the design file.
  // eslint-disable-next-line no-new-func
  return new Function('DCLogic', 'React', code + '\n;return Component;')(DCLogic, React);
}

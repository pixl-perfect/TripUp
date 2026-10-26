/* @ds-bundle: {"format": 4, "namespace": "TripUp", "components": [{"name": "Icon"}, {"name": "Button"}, {"name": "Chip"}, {"name": "IconButton"}, {"name": "Avatar"}, {"name": "StatusBar"}, {"name": "HomeIndicator"}, {"name": "SheetGrabber"}, {"name": "SegmentItem"}, {"name": "TextField"}, {"name": "TripCard"}, {"name": "ItineraryItem"}, {"name": "PollOption"}, {"name": "PersonRow"}, {"name": "TransferRow"}, {"name": "ActionChip"}, {"name": "NotificationBanner"}, {"name": "Toast"}]} */
(function () {
  var React = window.React, h = React.createElement;
  var ICONS = {"album": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M11 3v8l3-3 3 3V3\"/>", "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/>", "calendar": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/>", "camera": "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>", "check": "<path d=\"M20 6 9 17l-5-5\"/>", "chevron-left": "<path d=\"m15 18-6-6 6-6\"/>", "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/>", "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>", "euro": "<path d=\"M4 10h12\"/><path d=\"M4 14h9\"/><path d=\"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2\"/>", "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/>", "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>", "location": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"/>", "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>", "map": "<path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\"/><path d=\"M15 5.764v15\"/><path d=\"M9 3.236v15\"/>", "more": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/>", "plus": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>", "poll": "<path d=\"M4 6h10\"/><path d=\"M4 12h16\"/><path d=\"M4 18h7\"/>", "receipt": "<path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"/><path d=\"M12 17.5v-11\"/>", "scan": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M7 12h10\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>", "send": "<path d=\"m22 2-7 20-4-9-9-4Z\"/><path d=\"M22 2 11 13\"/>", "settle": "<path d=\"M8 3 4 7l4 4\"/><path d=\"M4 7h16\"/><path d=\"m16 21 4-4-4-4\"/><path d=\"M20 17H4\"/>", "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"15\"/>", "tram": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"/><path d=\"M4 11h16\"/><path d=\"M12 3v8\"/><path d=\"m8 19-2 3\"/><path d=\"m18 22-2-3\"/>", "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>", "utensils": "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"/><path d=\"M7 2v20\"/><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"/>", "x": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>"};
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function rest(p, keys) { var o = {}; for (var k in p) if (keys.indexOf(k) < 0) o[k] = p[k]; return o; }

  /* Icon: 24px grid, 2px stroke, currentColor (icon/* in Figma) */
  function Icon(p) {
    var size = p.size || 24, body = ICONS[p.name];
    if (!body) return null;
    return h('svg', Object.assign({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': p.label ? undefined : true,
      role: p.label ? 'img' : undefined, 'aria-label': p.label, className: cx('tu-icon', p.className),
      style: p.color ? { color: p.color } : undefined, dangerouslySetInnerHTML: { __html: body } }));
  }
  Icon.names = Object.keys(ICONS);

  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'L';
    return h('button', Object.assign({ type: 'button' }, rest(p, ['variant', 'size', 'icon', 'className', 'children']), {
      className: cx('tu-btn', 'tu-btn--' + variant, 'tu-btn--' + size, p.className) }),
      p.icon ? h(Icon, { name: p.icon, size: size === 'L' ? 20 : 18 }) : null, p.children);
  }

  function Chip(p) {
    return h('span', Object.assign({}, rest(p, ['tone', 'icon', 'className', 'children']), { className: cx('tu-chip', 'tu-chip--' + (p.tone || 'default'), p.className) }),
      p.icon ? h(Icon, { name: p.icon, size: 16 }) : null, p.children);
  }

  function IconButton(p) {
    return h('button', Object.assign({ type: 'button', 'aria-label': p.label }, rest(p, ['variant', 'icon', 'label', 'className']), {
      className: cx('tu-iconbtn', 'tu-iconbtn--' + (p.variant || 'glass'), p.className) }), h(Icon, { name: p.icon || 'plus', size: 20 }));
  }

  function Avatar(p) {
    var size = p.size || 'M';
    return h('span', { className: cx('tu-avatar', 'tu-avatar--' + size, p.className), title: p.name,
      style: { background: p.color || 'var(--person-ari)' } }, p.initials || (p.name ? p.name.slice(0, 2) : ''));
  }

  function AvatarStack(list, size, overlap) {
    return h('span', { className: 'tu-avatars', style: { gap: overlap + 'px' } },
      (list || []).map(function (a, i) { return h(Avatar, Object.assign({ key: i, size: size }, a)); }));
  }

  function StatusBar(p) {
    var onImage = p.mode === 'onImage';
    return h('div', { className: cx('tu-statusbar', onImage && 'tu-statusbar--image', p.className) },
      h('span', { className: 'tu-statusbar__time' }, p.time || '9:41'),
      h('svg', { className: 'tu-statusbar__icons', width: 70, height: 15, viewBox: '0 0 70 15', 'aria-hidden': true },
        h('rect', { x: 0, y: 8, width: 3, height: 4, rx: 1 }), h('rect', { x: 5, y: 5.5, width: 3, height: 6.5, rx: 1 }),
        h('rect', { x: 10, y: 3, width: 3, height: 9, rx: 1 }), h('rect', { x: 15, y: 0.5, width: 3, height: 11.5, rx: 1 }),
        h('path', { d: 'M24.9 5.9A9.4 9.4 0 0 1 38.1 5.9M27.7 8.8A5.4 5.4 0 0 1 35.3 8.8', style: { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round' } }),
        h('path', { d: 'M29.5 11.2A2.9 2.9 0 0 1 33.5 11.2L31.5 13.4Z' }),
        h('rect', { x: 45.5, y: 1.5, width: 24, height: 11, rx: 3.5, fill: 'none', stroke: 'currentColor', strokeWidth: 1, opacity: 0.9 }),
        h('rect', { x: 48, y: 3, width: 19, height: 8, rx: 2 })));
  }

  function HomeIndicator(p) { return h('div', { className: cx('tu-homeindicator', p.className) }, h('span')); }
  function SheetGrabber(p) { return h('div', { className: cx('tu-grabber', p.className) }, h('span')); }

  function SegmentItem(p) {
    return h('button', Object.assign({ type: 'button', role: 'tab', 'aria-selected': !!p.selected }, rest(p, ['selected', 'className', 'children']), {
      className: cx('tu-segment', p.selected && 'tu-segment--on', p.className) }), p.children);
  }

  function TextField(p) {
    return h('label', { className: cx('tu-field', p.focused && 'tu-field--focused', p.className) },
      p.icon === null ? null : h(Icon, { name: p.icon || 'search', size: 18 }),
      h('input', Object.assign({ type: 'text' }, rest(p, ['icon', 'focused', 'className']))));
  }

  function TripCard(p) {
    return h('div', { className: cx('tu-tripcard', p.className), onClick: p.onClick, role: p.onClick ? 'button' : undefined },
      h('div', { className: 'tu-photo', style: p.photo ? { backgroundImage: 'url(' + p.photo + ')' } : undefined }),
      h('div', { className: 'tu-tripcard__text' },
        h('div', { className: 'tu-tripcard__title' }, p.title),
        h('div', { className: 'tu-tripcard__sub' }, p.subtitle),
        h('div', { className: 'tu-tripcard__meta' }, p.chip ? h(Chip, { tone: p.chipTone || 'accent' }, p.chip) : null, AvatarStack(p.people, 'S', -6))),
      h(Icon, { name: 'chevron-right', size: 20, className: 'tu-chevron' }));
  }

  var ITIN_ICON = { done: 'clock', now: 'map-pin', planned: 'calendar', undecided: 'utensils' };
  function ItineraryItem(p) {
    var state = p.state || 'planned';
    return h('div', { className: cx('tu-itin', 'tu-itin--' + state, p.className) },
      h('span', { className: 'tu-itin__time' }, p.time),
      h('div', { className: 'tu-itin__card' },
        h('span', { className: 'tu-tile' }, h(Icon, { name: p.icon || ITIN_ICON[state], size: 18 })),
        h('div', { className: 'tu-itin__text' }, h('div', { className: 'tu-itin__title' }, p.title), h('div', { className: 'tu-itin__sub' }, p.subtitle)),
        state === 'undecided' && p.chip ? h(Chip, { tone: 'poll' }, p.chip) : null));
  }

  function PollOption(p) {
    var pct = Math.max(0, Math.min(100, p.percent || 0));
    return h('div', { className: cx('tu-poll', p.leading && 'tu-poll--leading', p.className), onClick: p.onClick, role: p.onClick ? 'button' : undefined },
      h('div', { className: 'tu-poll__top' }, h('span', { className: 'tu-poll__name' }, p.name),
        p.leading ? h(Chip, { tone: 'poll' }, p.leadingLabel || 'Leading') : null, h('span', { className: 'tu-poll__count' }, p.votes)),
      h('div', { className: 'tu-poll__track' }, h('div', { className: 'tu-poll__fill', style: { width: pct + '%' } })),
      p.voters ? h('div', { className: 'tu-poll__voters' }, p.voters) : null);
  }

  function PersonRow(p) {
    return h('div', { className: cx('tu-person', p.added && 'tu-person--added', p.className) },
      h(Avatar, { size: 'L', initials: p.initials, name: p.name, color: p.color }),
      h('div', { className: 'tu-row__text' }, h('div', { className: 'tu-row__title' }, p.name), h('div', { className: 'tu-row__sub' }, p.subtitle)),
      p.added ? h('span', { className: 'tu-added' }, h(Icon, { name: 'check', size: 16 }), 'Added')
        : h(Button, { variant: 'secondary', size: 'M', onClick: p.onAdd }, p.addLabel || 'Add'));
  }

  function TransferRow(p) {
    var paid = p.status === 'paid';
    return h('div', { className: cx('tu-transfer', p.className) },
      AvatarStack(p.people, 'M', -8),
      h('div', { className: 'tu-row__text' }, h('div', { className: 'tu-row__title' }, p.title), h('div', { className: 'tu-row__sub' }, p.subtitle)),
      h('div', { className: 'tu-transfer__right' }, h('span', { className: 'tu-transfer__amount' }, p.amount),
        h(Chip, { tone: paid ? 'success' : 'warning' }, paid ? 'Paid' : 'Pending')));
  }

  function ActionChip(p) {
    return h('button', Object.assign({ type: 'button', 'aria-pressed': !!p.active }, rest(p, ['active', 'icon', 'className', 'children']), {
      className: cx('tu-action', p.active && 'tu-action--active', p.className) }), h(Icon, { name: p.icon || 'poll', size: 18 }), p.children);
  }

  function NotificationBanner(p) {
    return h('div', { className: cx('tu-banner', p.className), role: 'status' },
      h('span', { className: 'tu-banner__app', style: { color: '#ffffff' } }, p.appLetter || h(Icon, { name: 'map-pin', size: 22 })),
      h('div', { className: 'tu-banner__text' },
        h('div', { className: 'tu-banner__top' }, h('span', { className: 'tu-banner__title' }, p.title), h('span', { className: 'tu-banner__time' }, p.time || 'now')),
        h('div', { className: 'tu-banner__body' }, p.children)));
  }

  function Toast(p) {
    return h('div', { className: cx('tu-toast', p.className), role: 'status' },
      h('span', { className: 'tu-toast__check' }, h(Icon, { name: 'check', size: 14 })), p.children);
  }

  window.TripUp = { Icon: Icon, Button: Button, Chip: Chip, IconButton: IconButton, Avatar: Avatar, StatusBar: StatusBar,
    HomeIndicator: HomeIndicator, SheetGrabber: SheetGrabber, SegmentItem: SegmentItem, TextField: TextField, TripCard: TripCard,
    ItineraryItem: ItineraryItem, PollOption: PollOption, PersonRow: PersonRow, TransferRow: TransferRow, ActionChip: ActionChip,
    NotificationBanner: NotificationBanner, Toast: Toast };
})();

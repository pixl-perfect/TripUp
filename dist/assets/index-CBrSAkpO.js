(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tl={exports:{}},oo={},nl={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),gp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),wp=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),Ep=Symbol.for("react.memo"),Pp=Symbol.for("react.lazy"),Br=Symbol.iterator;function Mp(e){return e===null||typeof e!="object"?null:(e=Br&&e[Br]||e["@@iterator"],typeof e=="function"?e:null)}var al={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ol=Object.assign,sl={};function ln(e,t,n){this.props=e,this.context=t,this.refs=sl,this.updater=n||al}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rl(){}rl.prototype=ln.prototype;function Vs(e,t,n){this.props=e,this.context=t,this.refs=sl,this.updater=n||al}var Ys=Vs.prototype=new rl;Ys.constructor=Vs;ol(Ys,ln.prototype);Ys.isPureReactComponent=!0;var Fr=Array.isArray,il=Object.prototype.hasOwnProperty,$s={current:null},ll={key:!0,ref:!0,__self:!0,__source:!0};function cl(e,t,n){var a,o={},s=null,r=null;if(t!=null)for(a in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(s=""+t.key),t)il.call(t,a)&&!ll.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(a in i=e.defaultProps,i)o[a]===void 0&&(o[a]=i[a]);return{$$typeof:Kn,type:e,key:s,ref:r,props:o,_owner:$s.current}}function Np(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function Ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hr=/\/+/g;function To(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ap(""+e.key):t.toString(36)}function ba(e,t,n,a,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Kn:case gp:r=!0}}if(r)return r=e,o=o(r),e=a===""?"."+To(r,0):a,Fr(o)?(n="",e!=null&&(n=e.replace(Hr,"$&/")+"/"),ba(o,t,n,"",function(p){return p})):o!=null&&(qs(o)&&(o=Np(o,n+(!o.key||r&&r.key===o.key?"":(""+o.key).replace(Hr,"$&/")+"/")+e)),t.push(o)),1;if(r=0,a=a===""?".":a+":",Fr(e))for(var i=0;i<e.length;i++){s=e[i];var l=a+To(s,i);r+=ba(s,t,n,l,o)}else if(l=Mp(e),typeof l=="function")for(e=l.call(e),i=0;!(s=e.next()).done;)s=s.value,l=a+To(s,i++),r+=ba(s,t,n,l,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function na(e,t,n){if(e==null)return e;var a=[],o=0;return ba(e,a,"","",function(s){return t.call(n,s,o++)}),a}function zp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},wa={transition:null},jp={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:wa,ReactCurrentOwner:$s};function pl(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:na,forEach:function(e,t,n){na(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return na(e,function(){t++}),t},toArray:function(e){return na(e,function(t){return t})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=ln;j.Fragment=vp;j.Profiler=wp;j.PureComponent=Vs;j.StrictMode=bp;j.Suspense=Cp;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;j.act=pl;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=ol({},e.props),o=e.key,s=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,r=$s.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)il.call(t,l)&&!ll.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&i!==void 0?i[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){i=Array(l);for(var p=0;p<l;p++)i[p]=arguments[p+2];a.children=i}return{$$typeof:Kn,type:e.type,key:o,ref:s,props:a,_owner:r}};j.createContext=function(e){return e={$$typeof:Sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kp,_context:e},e.Consumer=e};j.createElement=cl;j.createFactory=function(e){var t=cl.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Tp,render:e}};j.isValidElement=qs;j.lazy=function(e){return{$$typeof:Pp,_payload:{_status:-1,_result:e},_init:zp}};j.memo=function(e,t){return{$$typeof:Ep,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=wa.transition;wa.transition={};try{e()}finally{wa.transition=t}};j.unstable_act=pl;j.useCallback=function(e,t){return ce.current.useCallback(e,t)};j.useContext=function(e){return ce.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};j.useEffect=function(e,t){return ce.current.useEffect(e,t)};j.useId=function(){return ce.current.useId()};j.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ce.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};j.useRef=function(e){return ce.current.useRef(e)};j.useState=function(e){return ce.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ce.current.useTransition()};j.version="18.3.1";nl.exports=j;var K=nl.exports;const ye=yp(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=K,Lp=Symbol.for("react.element"),Ip=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,Dp=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Up={key:!0,ref:!0,__self:!0,__source:!0};function dl(e,t,n){var a,o={},s=null,r=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(r=t.ref);for(a in t)_p.call(t,a)&&!Up.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:Lp,type:e,key:s,ref:r,props:o,_owner:Dp.current}}oo.Fragment=Ip;oo.jsx=dl;oo.jsxs=dl;tl.exports=oo;var N=tl.exports,ul={exports:{}},we={},fl={exports:{}},ml={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var z=T.length;T.push(A);e:for(;0<z;){var Y=z-1>>>1,X=T[Y];if(0<o(X,A))T[Y]=A,T[z]=X,z=Y;else break e}}function n(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var A=T[0],z=T.pop();if(z!==A){T[0]=z;e:for(var Y=0,X=T.length,ea=X>>>1;Y<ea;){var vt=2*(Y+1)-1,So=T[vt],bt=vt+1,ta=T[bt];if(0>o(So,z))bt<X&&0>o(ta,So)?(T[Y]=ta,T[bt]=z,Y=bt):(T[Y]=So,T[vt]=z,Y=vt);else if(bt<X&&0>o(ta,z))T[Y]=ta,T[bt]=z,Y=bt;else break e}}return A}function o(T,A){var z=T.sortIndex-A.sortIndex;return z!==0?z:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,i=r.now();e.unstable_now=function(){return r.now()-i}}var l=[],p=[],x=1,h=null,m=3,b=!1,v=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(T){for(var A=n(p);A!==null;){if(A.callback===null)a(p);else if(A.startTime<=T)a(p),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(p)}}function y(T){if(w=!1,u(T),!v)if(n(l)!==null)v=!0,wo(k);else{var A=n(p);A!==null&&ko(y,A.startTime-T)}}function k(T,A){v=!1,w&&(w=!1,d(M),M=-1),b=!0;var z=m;try{for(u(A),h=n(l);h!==null&&(!(h.expirationTime>A)||T&&!W());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,m=h.priorityLevel;var X=Y(h.expirationTime<=A);A=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(l)&&a(l),u(A)}else a(l);h=n(l)}if(h!==null)var ea=!0;else{var vt=n(p);vt!==null&&ko(y,vt.startTime-A),ea=!1}return ea}finally{h=null,m=z,b=!1}}var C=!1,E=null,M=-1,f=5,P=-1;function W(){return!(e.unstable_now()-P<f)}function Ne(){if(E!==null){var T=e.unstable_now();P=T;var A=!0;try{A=E(!0,T)}finally{A?gt():(C=!1,E=null)}}else C=!1}var gt;if(typeof c=="function")gt=function(){c(Ne)};else if(typeof MessageChannel<"u"){var Rr=new MessageChannel,xp=Rr.port2;Rr.port1.onmessage=Ne,gt=function(){xp.postMessage(null)}}else gt=function(){L(Ne,0)};function wo(T){E=T,C||(C=!0,gt())}function ko(T,A){M=L(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,wo(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var z=m;m=A;try{return T()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=m;m=T;try{return A()}finally{m=z}},e.unstable_scheduleCallback=function(T,A,z){var Y=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,T={id:x++,callback:A,priorityLevel:T,startTime:z,expirationTime:X,sortIndex:-1},z>Y?(T.sortIndex=z,t(p,T),n(l)===null&&T===n(p)&&(w?(d(M),M=-1):w=!0,ko(y,z-Y))):(T.sortIndex=X,t(l,T),v||b||(v=!0,wo(k))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var A=m;return function(){var z=m;m=A;try{return T.apply(this,arguments)}finally{m=z}}}})(ml);fl.exports=ml;var Rp=fl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=K,be=Rp;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hl=new Set,jn={};function Ot(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(jn[e]=t,e=0;e<t.length;e++)hl.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,Fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wr={},Vr={};function Hp(e){return Go.call(Vr,e)?!0:Go.call(Wr,e)?!1:Fp.test(e)?Vr[e]=!0:(Wr[e]=!0,!1)}function Wp(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vp(e,t,n,a){if(t===null||typeof t>"u"||Wp(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,a,o,s,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=r}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qs,Ks);ne[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qs,Ks);ne[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qs,Ks);ne[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gs(e,t,n,a){var o=ne.hasOwnProperty(t)?ne[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vp(t,n,o,a)&&(n=null),a||o===null?Hp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var Xe=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),_t=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),xl=Symbol.for("react.provider"),yl=Symbol.for("react.context"),Js=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),Zs=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),gl=Symbol.for("react.offscreen"),Yr=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Yr&&e[Yr]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Co;function vn(e){if(Co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Co=t&&t[1]||""}return`
`+Co+e}var Eo=!1;function Po(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var a=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){a=p}e.call(t.prototype)}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),s=a.stack.split(`
`),r=o.length-1,i=s.length-1;1<=r&&0<=i&&o[r]!==s[i];)i--;for(;1<=r&&0<=i;r--,i--)if(o[r]!==s[i]){if(r!==1||i!==1)do if(r--,i--,0>i||o[r]!==s[i]){var l=`
`+o[r].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=r&&0<=i);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Yp(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=Po(e.type,!1),e;case 11:return e=Po(e.type.render,!1),e;case 1:return e=Po(e.type,!0),e;default:return""}}function es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case _t:return"Portal";case Xo:return"Profiler";case Xs:return"StrictMode";case Jo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yl:return(e.displayName||"Context")+".Consumer";case xl:return(e._context.displayName||"Context")+".Provider";case Js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zs:return t=e.displayName||null,t!==null?t:es(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return es(e(t))}catch{}}return null}function $p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return es(t);case 8:return t===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qp(e){var t=vl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oa(e){e._valueTracker||(e._valueTracker=qp(e))}function bl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=vl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ts(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $r(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wl(e,t){t=t.checked,t!=null&&Gs(e,"checked",t,!1)}function ns(e,t){wl(e,t);var n=ft(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||Oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function Qt(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(bn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function kl(e,t){var n=ft(t.value),a=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Kr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,Tl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qp=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function Cl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function El(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=Cl(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var Kp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(Kp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cs=null,Kt=null,Gt=null;function Gr(e){if(e=Jn(e)){if(typeof cs!="function")throw Error(g(280));var t=e.stateNode;t&&(t=co(t),cs(e.stateNode,e.type,t))}}function Pl(e){Kt?Gt?Gt.push(e):Gt=[e]:Kt=e}function Ml(){if(Kt){var e=Kt,t=Gt;if(Gt=Kt=null,Gr(e),t)for(e=0;e<t.length;e++)Gr(t[e])}}function Nl(e,t){return e(t)}function Al(){}var Mo=!1;function zl(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return Nl(e,t,n)}finally{Mo=!1,(Kt!==null||Gt!==null)&&(Al(),Ml())}}function Ln(e,t){var n=e.stateNode;if(n===null)return null;var a=co(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var ps=!1;if(qe)try{var un={};Object.defineProperty(un,"passive",{get:function(){ps=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{ps=!1}function Gp(e,t,n,a,o,s,r,i,l){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var Tn=!1,La=null,Ia=!1,ds=null,Xp={onError:function(e){Tn=!0,La=e}};function Jp(e,t,n,a,o,s,r,i,l){Tn=!1,La=null,Gp.apply(Xp,arguments)}function Zp(e,t,n,a,o,s,r,i,l){if(Jp.apply(this,arguments),Tn){if(Tn){var p=La;Tn=!1,La=null}else throw Error(g(198));Ia||(Ia=!0,ds=p)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xr(e){if(Lt(e)!==e)throw Error(g(188))}function ed(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return Xr(o),e;if(s===a)return Xr(o),t;s=s.sibling}throw Error(g(188))}if(n.return!==a.return)n=o,a=s;else{for(var r=!1,i=o.child;i;){if(i===n){r=!0,n=o,a=s;break}if(i===a){r=!0,a=o,n=s;break}i=i.sibling}if(!r){for(i=s.child;i;){if(i===n){r=!0,n=s,a=o;break}if(i===a){r=!0,a=s,n=o;break}i=i.sibling}if(!r)throw Error(g(189))}}if(n.alternate!==a)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Ol(e){return e=ed(e),e!==null?Ll(e):null}function Ll(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ll(e);if(t!==null)return t;e=e.sibling}return null}var Il=be.unstable_scheduleCallback,Jr=be.unstable_cancelCallback,td=be.unstable_shouldYield,nd=be.unstable_requestPaint,$=be.unstable_now,ad=be.unstable_getCurrentPriorityLevel,tr=be.unstable_ImmediatePriority,_l=be.unstable_UserBlockingPriority,_a=be.unstable_NormalPriority,od=be.unstable_LowPriority,Dl=be.unstable_IdlePriority,so=null,Be=null;function sd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:ld,rd=Math.log,id=Math.LN2;function ld(e){return e>>>=0,e===0?32:31-(rd(e)/id|0)|0}var ra=64,ia=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes,r=n&268435455;if(r!==0){var i=r&~o;i!==0?a=wn(i):(s&=r,s!==0&&(a=wn(s)))}else r=n&~o,r!==0?a=wn(r):s!==0&&(a=wn(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&o)&&(o=a&-a,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Le(t),o=1<<n,a|=e[n],t&=~o;return a}function cd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var r=31-Le(s),i=1<<r,l=o[r];l===-1?(!(i&n)||i&a)&&(o[r]=cd(i,t)):l<=t&&(e.expiredLanes|=i),s&=~i}}function us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ul(){var e=ra;return ra<<=1,!(ra&4194240)&&(ra=64),e}function No(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function dd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Le(n),s=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~s}}function nr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Le(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var I=0;function Rl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bl,ar,Fl,Hl,Wl,fs=!1,la=[],st=null,rt=null,it=null,In=new Map,_n=new Map,tt=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zr(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function fn(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Jn(t),t!==null&&ar(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fd(e,t,n,a,o){switch(t){case"focusin":return st=fn(st,e,t,n,a,o),!0;case"dragenter":return rt=fn(rt,e,t,n,a,o),!0;case"mouseover":return it=fn(it,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return In.set(s,fn(In.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,_n.set(s,fn(_n.get(s)||null,e,t,n,a,o)),!0}return!1}function Vl(e){var t=St(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=jl(n),t!==null){e.blockedOn=t,Wl(e.priority,function(){Fl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ms(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ls=a,n.target.dispatchEvent(a),ls=null}else return t=Jn(n),t!==null&&ar(t),e.blockedOn=n,!1;t.shift()}return!0}function ei(e,t,n){ka(e)&&n.delete(t)}function md(){fs=!1,st!==null&&ka(st)&&(st=null),rt!==null&&ka(rt)&&(rt=null),it!==null&&ka(it)&&(it=null),In.forEach(ei),_n.forEach(ei)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fs||(fs=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,md)))}function Dn(e){function t(o){return mn(o,e)}if(0<la.length){mn(la[0],e);for(var n=1;n<la.length;n++){var a=la[n];a.blockedOn===e&&(a.blockedOn=null)}}for(st!==null&&mn(st,e),rt!==null&&mn(rt,e),it!==null&&mn(it,e),In.forEach(t),_n.forEach(t),n=0;n<tt.length;n++)a=tt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Vl(n),n.blockedOn===null&&tt.shift()}var Xt=Xe.ReactCurrentBatchConfig,Ua=!0;function hd(e,t,n,a){var o=I,s=Xt.transition;Xt.transition=null;try{I=1,or(e,t,n,a)}finally{I=o,Xt.transition=s}}function xd(e,t,n,a){var o=I,s=Xt.transition;Xt.transition=null;try{I=4,or(e,t,n,a)}finally{I=o,Xt.transition=s}}function or(e,t,n,a){if(Ua){var o=ms(e,t,n,a);if(o===null)Ro(e,t,a,Ra,n),Zr(e,a);else if(fd(o,e,t,n,a))a.stopPropagation();else if(Zr(e,a),t&4&&-1<ud.indexOf(e)){for(;o!==null;){var s=Jn(o);if(s!==null&&Bl(s),s=ms(e,t,n,a),s===null&&Ro(e,t,a,Ra,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else Ro(e,t,a,null,n)}}var Ra=null;function ms(e,t,n,a){if(Ra=null,e=er(a),e=St(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function Yl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case tr:return 1;case _l:return 4;case _a:case od:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var at=null,sr=null,Sa=null;function $l(){if(Sa)return Sa;var e,t=sr,n=t.length,a,o="value"in at?at.value:at.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===o[s-a];a++);return Sa=o.slice(e,1<a?1-a:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function ti(){return!1}function ke(e){function t(n,a,o,s,r){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:ti,this.isPropagationStopped=ti,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=ke(cn),Xn=H({},cn,{view:0,detail:0}),yd=ke(Xn),Ao,zo,hn,ro=H({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Ao=e.screenX-hn.screenX,zo=e.screenY-hn.screenY):zo=Ao=0,hn=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:zo}}),ni=ke(ro),gd=H({},ro,{dataTransfer:0}),vd=ke(gd),bd=H({},Xn,{relatedTarget:0}),jo=ke(bd),wd=H({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=ke(wd),Sd=H({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Td=ke(Sd),Cd=H({},cn,{data:0}),ai=ke(Cd),Ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Md[e])?!!t[e]:!1}function ir(){return Nd}var Ad=H({},Xn,{key:function(e){if(e.key){var t=Ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=ke(Ad),jd=H({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oi=ke(jd),Od=H({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),Ld=ke(Od),Id=H({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=ke(Id),Dd=H({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=ke(Dd),Rd=[9,13,27,32],lr=qe&&"CompositionEvent"in window,Cn=null;qe&&"documentMode"in document&&(Cn=document.documentMode);var Bd=qe&&"TextEvent"in window&&!Cn,ql=qe&&(!lr||Cn&&8<Cn&&11>=Cn),si=" ",ri=!1;function Ql(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Fd(e,t){switch(e){case"compositionend":return Kl(t);case"keypress":return t.which!==32?null:(ri=!0,si);case"textInput":return e=t.data,e===si&&ri?null:e;default:return null}}function Hd(e,t){if(Ut)return e==="compositionend"||!lr&&Ql(e,t)?(e=$l(),Sa=sr=at=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ql&&t.locale!=="ko"?null:t.data;default:return null}}var Wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wd[e.type]:t==="textarea"}function Gl(e,t,n,a){Pl(a),t=Ba(t,"onChange"),0<t.length&&(n=new rr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var En=null,Un=null;function Vd(e){ic(e,0)}function io(e){var t=Ft(e);if(bl(t))return e}function Yd(e,t){if(e==="change")return t}var Xl=!1;if(qe){var Oo;if(qe){var Lo="oninput"in document;if(!Lo){var li=document.createElement("div");li.setAttribute("oninput","return;"),Lo=typeof li.oninput=="function"}Oo=Lo}else Oo=!1;Xl=Oo&&(!document.documentMode||9<document.documentMode)}function ci(){En&&(En.detachEvent("onpropertychange",Jl),Un=En=null)}function Jl(e){if(e.propertyName==="value"&&io(Un)){var t=[];Gl(t,Un,e,er(e)),zl(Vd,t)}}function $d(e,t,n){e==="focusin"?(ci(),En=t,Un=n,En.attachEvent("onpropertychange",Jl)):e==="focusout"&&ci()}function qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(Un)}function Qd(e,t){if(e==="click")return io(t)}function Kd(e,t){if(e==="input"||e==="change")return io(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Gd;function Rn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Go.call(t,o)||!_e(e[o],t[o]))return!1}return!0}function pi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function di(e,t){var n=pi(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pi(n)}}function Zl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oa(e.document)}return t}function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xd(e){var t=ec(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zl(n.ownerDocument.documentElement,n)){if(a!==null&&cr(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(a.start,o);a=a.end===void 0?s:Math.min(a.end,o),!e.extend&&s>a&&(o=a,a=s,s=o),o=di(n,s);var r=di(n,a);o&&r&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=qe&&"documentMode"in document&&11>=document.documentMode,Rt=null,hs=null,Pn=null,xs=!1;function ui(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xs||Rt==null||Rt!==Oa(a)||(a=Rt,"selectionStart"in a&&cr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pn&&Rn(Pn,a)||(Pn=a,a=Ba(hs,"onSelect"),0<a.length&&(t=new rr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Rt)))}function pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Io={},tc={};qe&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function lo(e){if(Io[e])return Io[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return Io[e]=t[n];return e}var nc=lo("animationend"),ac=lo("animationiteration"),oc=lo("animationstart"),sc=lo("transitionend"),rc=new Map,fi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){rc.set(e,t),Ot(t,[e])}for(var _o=0;_o<fi.length;_o++){var Do=fi[_o],Zd=Do.toLowerCase(),eu=Do[0].toUpperCase()+Do.slice(1);ht(Zd,"on"+eu)}ht(nc,"onAnimationEnd");ht(ac,"onAnimationIteration");ht(oc,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(sc,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tu=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function mi(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Zp(a,t,void 0,e),e.currentTarget=null}function ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var r=a.length-1;0<=r;r--){var i=a[r],l=i.instance,p=i.currentTarget;if(i=i.listener,l!==s&&o.isPropagationStopped())break e;mi(o,i,p),s=l}else for(r=0;r<a.length;r++){if(i=a[r],l=i.instance,p=i.currentTarget,i=i.listener,l!==s&&o.isPropagationStopped())break e;mi(o,i,p),s=l}}}if(Ia)throw e=ds,Ia=!1,ds=null,e}function D(e,t){var n=t[ws];n===void 0&&(n=t[ws]=new Set);var a=e+"__bubble";n.has(a)||(lc(t,e,2,!1),n.add(a))}function Uo(e,t,n){var a=0;t&&(a|=4),lc(n,e,a,t)}var da="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[da]){e[da]=!0,hl.forEach(function(n){n!=="selectionchange"&&(tu.has(n)||Uo(n,!1,e),Uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[da]||(t[da]=!0,Uo("selectionchange",!1,t))}}function lc(e,t,n,a){switch(Yl(t)){case 1:var o=hd;break;case 4:o=xd;break;default:o=or}n=o.bind(null,t,n,e),o=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ro(e,t,n,a,o){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var i=a.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(r===4)for(r=a.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;r=r.return}for(;i!==null;){if(r=St(i),r===null)return;if(l=r.tag,l===5||l===6){a=s=r;continue e}i=i.parentNode}}a=a.return}zl(function(){var p=s,x=er(n),h=[];e:{var m=rc.get(e);if(m!==void 0){var b=rr,v=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":b=zd;break;case"focusin":v="focus",b=jo;break;case"focusout":v="blur",b=jo;break;case"beforeblur":case"afterblur":b=jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ld;break;case nc:case ac:case oc:b=kd;break;case sc:b=_d;break;case"scroll":b=yd;break;case"wheel":b=Ud;break;case"copy":case"cut":case"paste":b=Td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=oi}var w=(t&4)!==0,L=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var c=p,u;c!==null;){u=c;var y=u.stateNode;if(u.tag===5&&y!==null&&(u=y,d!==null&&(y=Ln(c,d),y!=null&&w.push(Fn(c,y,u)))),L)break;c=c.return}0<w.length&&(m=new b(m,v,null,n,x),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==ls&&(v=n.relatedTarget||n.fromElement)&&(St(v)||v[Qe]))break e;if((b||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=p,v=v?St(v):null,v!==null&&(L=Lt(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=p),b!==v)){if(w=ni,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=oi,y="onPointerLeave",d="onPointerEnter",c="pointer"),L=b==null?m:Ft(b),u=v==null?m:Ft(v),m=new w(y,c+"leave",b,n,x),m.target=L,m.relatedTarget=u,y=null,St(x)===p&&(w=new w(d,c+"enter",v,n,x),w.target=u,w.relatedTarget=L,y=w),L=y,b&&v)t:{for(w=b,d=v,c=0,u=w;u;u=It(u))c++;for(u=0,y=d;y;y=It(y))u++;for(;0<c-u;)w=It(w),c--;for(;0<u-c;)d=It(d),u--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=It(w),d=It(d)}w=null}else w=null;b!==null&&hi(h,m,b,w,!1),v!==null&&L!==null&&hi(h,L,v,w,!0)}}e:{if(m=p?Ft(p):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var k=Yd;else if(ii(m))if(Xl)k=Kd;else{k=qd;var C=$d}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Qd);if(k&&(k=k(e,p))){Gl(h,k,n,x);break e}C&&C(e,m,p),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&as(m,"number",m.value)}switch(C=p?Ft(p):window,e){case"focusin":(ii(C)||C.contentEditable==="true")&&(Rt=C,hs=p,Pn=null);break;case"focusout":Pn=hs=Rt=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,ui(h,n,x);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":ui(h,n,x)}var E;if(lr)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Ut?Ql(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(ql&&n.locale!=="ko"&&(Ut||M!=="onCompositionStart"?M==="onCompositionEnd"&&Ut&&(E=$l()):(at=x,sr="value"in at?at.value:at.textContent,Ut=!0)),C=Ba(p,M),0<C.length&&(M=new ai(M,e,null,n,x),h.push({event:M,listeners:C}),E?M.data=E:(E=Kl(n),E!==null&&(M.data=E)))),(E=Bd?Fd(e,n):Hd(e,n))&&(p=Ba(p,"onBeforeInput"),0<p.length&&(x=new ai("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:p}),x.data=E))}ic(h,t)})}function Fn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ba(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Ln(e,n),s!=null&&a.unshift(Fn(e,s,o)),s=Ln(e,t),s!=null&&a.push(Fn(e,s,o))),e=e.return}return a}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hi(e,t,n,a,o){for(var s=t._reactName,r=[];n!==null&&n!==a;){var i=n,l=i.alternate,p=i.stateNode;if(l!==null&&l===a)break;i.tag===5&&p!==null&&(i=p,o?(l=Ln(n,s),l!=null&&r.unshift(Fn(n,l,i))):o||(l=Ln(n,s),l!=null&&r.push(Fn(n,l,i)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var nu=/\r\n?/g,au=/\u0000|\uFFFD/g;function xi(e){return(typeof e=="string"?e:""+e).replace(nu,`
`).replace(au,"")}function ua(e,t,n){if(t=xi(t),xi(e)!==t&&n)throw Error(g(425))}function Fa(){}var ys=null,gs=null;function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bs=typeof setTimeout=="function"?setTimeout:void 0,ou=typeof clearTimeout=="function"?clearTimeout:void 0,yi=typeof Promise=="function"?Promise:void 0,su=typeof queueMicrotask=="function"?queueMicrotask:typeof yi<"u"?function(e){return yi.resolve(null).then(e).catch(ru)}:bs;function ru(e){setTimeout(function(){throw e})}function Bo(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),Dn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);Dn(t)}function lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),Re="__reactFiber$"+pn,Hn="__reactProps$"+pn,Qe="__reactContainer$"+pn,ws="__reactEvents$"+pn,iu="__reactListeners$"+pn,lu="__reactHandles$"+pn;function St(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gi(e);e!==null;){if(n=e[Re])return n;e=gi(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Re]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function co(e){return e[Hn]||null}var ks=[],Ht=-1;function xt(e){return{current:e}}function U(e){0>Ht||(e.current=ks[Ht],ks[Ht]=null,Ht--)}function _(e,t){Ht++,ks[Ht]=e.current,e.current=t}var mt={},re=xt(mt),fe=xt(!1),Mt=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function Ha(){U(fe),U(re)}function vi(e,t,n){if(re.current!==mt)throw Error(g(168));_(re,t),_(fe,n)}function cc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(g(108,$p(e)||"Unknown",o));return H({},n,a)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Mt=re.current,_(re,e),_(fe,fe.current),!0}function bi(e,t,n){var a=e.stateNode;if(!a)throw Error(g(169));n?(e=cc(e,t,Mt),a.__reactInternalMemoizedMergedChildContext=e,U(fe),U(re),_(re,e)):U(fe),_(fe,n)}var We=null,po=!1,Fo=!1;function pc(e){We===null?We=[e]:We.push(e)}function cu(e){po=!0,pc(e)}function yt(){if(!Fo&&We!==null){Fo=!0;var e=0,t=I;try{var n=We;for(I=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}We=null,po=!1}catch(o){throw We!==null&&(We=We.slice(e+1)),Il(tr,yt),o}finally{I=t,Fo=!1}}return null}var Wt=[],Vt=0,Va=null,Ya=0,Se=[],Te=0,Nt=null,Ve=1,Ye="";function wt(e,t){Wt[Vt++]=Ya,Wt[Vt++]=Va,Va=e,Ya=t}function dc(e,t,n){Se[Te++]=Ve,Se[Te++]=Ye,Se[Te++]=Nt,Nt=e;var a=Ve;e=Ye;var o=32-Le(a)-1;a&=~(1<<o),n+=1;var s=32-Le(t)+o;if(30<s){var r=o-o%5;s=(a&(1<<r)-1).toString(32),a>>=r,o-=r,Ve=1<<32-Le(t)+o|n<<o|a,Ye=s+e}else Ve=1<<s|n<<o|a,Ye=e}function pr(e){e.return!==null&&(wt(e,1),dc(e,1,0))}function dr(e){for(;e===Va;)Va=Wt[--Vt],Wt[Vt]=null,Ya=Wt[--Vt],Wt[Vt]=null;for(;e===Nt;)Nt=Se[--Te],Se[Te]=null,Ye=Se[--Te],Se[Te]=null,Ve=Se[--Te],Se[Te]=null}var ve=null,ge=null,R=!1,Oe=null;function uc(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:Ve,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function Ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(R){var t=ge;if(t){var n=t;if(!wi(e,t)){if(Ss(e))throw Error(g(418));t=lt(n.nextSibling);var a=ve;t&&wi(e,t)?uc(a,n):(e.flags=e.flags&-4097|2,R=!1,ve=e)}}else{if(Ss(e))throw Error(g(418));e.flags=e.flags&-4097|2,R=!1,ve=e}}}function ki(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fa(e){if(e!==ve)return!1;if(!R)return ki(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vs(e.type,e.memoizedProps)),t&&(t=ge)){if(Ss(e))throw fc(),Error(g(418));for(;t;)uc(e,t),t=lt(t.nextSibling)}if(ki(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?lt(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=ge;e;)e=lt(e.nextSibling)}function nn(){ge=ve=null,R=!1}function ur(e){Oe===null?Oe=[e]:Oe.push(e)}var pu=Xe.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var a=n.stateNode}if(!a)throw Error(g(147,e));var o=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(r){var i=o.refs;r===null?delete i[s]:i[s]=r},t._stringRef=s,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function ma(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Si(e){var t=e._init;return t(e._payload)}function mc(e){function t(d,c){if(e){var u=d.deletions;u===null?(d.deletions=[c],d.flags|=16):u.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function a(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=ut(d,c),d.index=0,d.sibling=null,d}function s(d,c,u){return d.index=u,e?(u=d.alternate,u!==null?(u=u.index,u<c?(d.flags|=2,c):u):(d.flags|=2,c)):(d.flags|=1048576,c)}function r(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,c,u,y){return c===null||c.tag!==6?(c=Qo(u,d.mode,y),c.return=d,c):(c=o(c,u),c.return=d,c)}function l(d,c,u,y){var k=u.type;return k===Dt?x(d,c,u.props.children,y,u.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Si(k)===c.type)?(y=o(c,u.props),y.ref=xn(d,c,u),y.return=d,y):(y=za(u.type,u.key,u.props,null,d.mode,y),y.ref=xn(d,c,u),y.return=d,y)}function p(d,c,u,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==u.containerInfo||c.stateNode.implementation!==u.implementation?(c=Ko(u,d.mode,y),c.return=d,c):(c=o(c,u.children||[]),c.return=d,c)}function x(d,c,u,y,k){return c===null||c.tag!==7?(c=Pt(u,d.mode,y,k),c.return=d,c):(c=o(c,u),c.return=d,c)}function h(d,c,u){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qo(""+c,d.mode,u),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case aa:return u=za(c.type,c.key,c.props,null,d.mode,u),u.ref=xn(d,null,c),u.return=d,u;case _t:return c=Ko(c,d.mode,u),c.return=d,c;case Ze:var y=c._init;return h(d,y(c._payload),u)}if(bn(c)||dn(c))return c=Pt(c,d.mode,u,null),c.return=d,c;ma(d,c)}return null}function m(d,c,u,y){var k=c!==null?c.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return k!==null?null:i(d,c,""+u,y);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case aa:return u.key===k?l(d,c,u,y):null;case _t:return u.key===k?p(d,c,u,y):null;case Ze:return k=u._init,m(d,c,k(u._payload),y)}if(bn(u)||dn(u))return k!==null?null:x(d,c,u,y,null);ma(d,u)}return null}function b(d,c,u,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(u)||null,i(c,d,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case aa:return d=d.get(y.key===null?u:y.key)||null,l(c,d,y,k);case _t:return d=d.get(y.key===null?u:y.key)||null,p(c,d,y,k);case Ze:var C=y._init;return b(d,c,u,C(y._payload),k)}if(bn(y)||dn(y))return d=d.get(u)||null,x(c,d,y,k,null);ma(c,y)}return null}function v(d,c,u,y){for(var k=null,C=null,E=c,M=c=0,f=null;E!==null&&M<u.length;M++){E.index>M?(f=E,E=null):f=E.sibling;var P=m(d,E,u[M],y);if(P===null){E===null&&(E=f);break}e&&E&&P.alternate===null&&t(d,E),c=s(P,c,M),C===null?k=P:C.sibling=P,C=P,E=f}if(M===u.length)return n(d,E),R&&wt(d,M),k;if(E===null){for(;M<u.length;M++)E=h(d,u[M],y),E!==null&&(c=s(E,c,M),C===null?k=E:C.sibling=E,C=E);return R&&wt(d,M),k}for(E=a(d,E);M<u.length;M++)f=b(E,d,M,u[M],y),f!==null&&(e&&f.alternate!==null&&E.delete(f.key===null?M:f.key),c=s(f,c,M),C===null?k=f:C.sibling=f,C=f);return e&&E.forEach(function(W){return t(d,W)}),R&&wt(d,M),k}function w(d,c,u,y){var k=dn(u);if(typeof k!="function")throw Error(g(150));if(u=k.call(u),u==null)throw Error(g(151));for(var C=k=null,E=c,M=c=0,f=null,P=u.next();E!==null&&!P.done;M++,P=u.next()){E.index>M?(f=E,E=null):f=E.sibling;var W=m(d,E,P.value,y);if(W===null){E===null&&(E=f);break}e&&E&&W.alternate===null&&t(d,E),c=s(W,c,M),C===null?k=W:C.sibling=W,C=W,E=f}if(P.done)return n(d,E),R&&wt(d,M),k;if(E===null){for(;!P.done;M++,P=u.next())P=h(d,P.value,y),P!==null&&(c=s(P,c,M),C===null?k=P:C.sibling=P,C=P);return R&&wt(d,M),k}for(E=a(d,E);!P.done;M++,P=u.next())P=b(E,d,M,P.value,y),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?M:P.key),c=s(P,c,M),C===null?k=P:C.sibling=P,C=P);return e&&E.forEach(function(Ne){return t(d,Ne)}),R&&wt(d,M),k}function L(d,c,u,y){if(typeof u=="object"&&u!==null&&u.type===Dt&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case aa:e:{for(var k=u.key,C=c;C!==null;){if(C.key===k){if(k=u.type,k===Dt){if(C.tag===7){n(d,C.sibling),c=o(C,u.props.children),c.return=d,d=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Si(k)===C.type){n(d,C.sibling),c=o(C,u.props),c.ref=xn(d,C,u),c.return=d,d=c;break e}n(d,C);break}else t(d,C);C=C.sibling}u.type===Dt?(c=Pt(u.props.children,d.mode,y,u.key),c.return=d,d=c):(y=za(u.type,u.key,u.props,null,d.mode,y),y.ref=xn(d,c,u),y.return=d,d=y)}return r(d);case _t:e:{for(C=u.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(d,c.sibling),c=o(c,u.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ko(u,d.mode,y),c.return=d,d=c}return r(d);case Ze:return C=u._init,L(d,c,C(u._payload),y)}if(bn(u))return v(d,c,u,y);if(dn(u))return w(d,c,u,y);ma(d,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,u),c.return=d,d=c):(n(d,c),c=Qo(u,d.mode,y),c.return=d,d=c),r(d)):n(d,c)}return L}var an=mc(!0),hc=mc(!1),$a=xt(null),qa=null,Yt=null,fr=null;function mr(){fr=Yt=qa=null}function hr(e){var t=$a.current;U($a),e._currentValue=t}function Cs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){qa=e,fr=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(fr!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(qa===null)throw Error(g(308));Yt=e,qa.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Tt=null;function xr(e){Tt===null?Tt=[e]:Tt.push(e)}function xc(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,xr(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ke(e,a)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,O&2){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Ke(e,n)}return o=a.interleaved,o===null?(t.next=t,xr(a)):(t.next=o.next,o.next=t),a.interleaved=t,Ke(e,n)}function Ca(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nr(e,n)}}function Ti(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qa(e,t,n,a){var o=e.updateQueue;et=!1;var s=o.firstBaseUpdate,r=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var l=i,p=l.next;l.next=null,r===null?s=p:r.next=p,r=l;var x=e.alternate;x!==null&&(x=x.updateQueue,i=x.lastBaseUpdate,i!==r&&(i===null?x.firstBaseUpdate=p:i.next=p,x.lastBaseUpdate=l))}if(s!==null){var h=o.baseState;r=0,x=p=l=null,i=s;do{var m=i.lane,b=i.eventTime;if((a&m)===m){x!==null&&(x=x.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var v=e,w=i;switch(m=t,b=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(b,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(b,h,m):v,m==null)break e;h=H({},h,m);break e;case 2:et=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[i]:m.push(i))}else b={eventTime:b,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},x===null?(p=x=b,l=h):x=x.next=b,r|=m;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;m=i,i=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(x===null&&(l=h),o.baseState=l,o.firstBaseUpdate=p,o.lastBaseUpdate=x,t=o.shared.interleaved,t!==null){o=t;do r|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);zt|=r,e.lanes=r,e.memoizedState=h}}function Ci(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(g(191,o));o.call(a)}}}var Zn={},Fe=xt(Zn),Wn=xt(Zn),Vn=xt(Zn);function Ct(e){if(e===Zn)throw Error(g(174));return e}function gr(e,t){switch(_(Vn,t),_(Wn,e),_(Fe,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ss(t,e)}U(Fe),_(Fe,t)}function on(){U(Fe),U(Wn),U(Vn)}function gc(e){Ct(Vn.current);var t=Ct(Fe.current),n=ss(t,e.type);t!==n&&(_(Wn,e),_(Fe,n))}function vr(e){Wn.current===e&&(U(Fe),U(Wn))}var B=xt(0);function Ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function br(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var Ea=Xe.ReactCurrentDispatcher,Wo=Xe.ReactCurrentBatchConfig,At=0,F=null,Q=null,J=null,Ga=!1,Mn=!1,Yn=0,du=0;function ae(){throw Error(g(321))}function wr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function kr(e,t,n,a,o,s){if(At=s,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?hu:xu,e=n(a,o),Mn){s=0;do{if(Mn=!1,Yn=0,25<=s)throw Error(g(301));s+=1,J=Q=null,t.updateQueue=null,Ea.current=yu,e=n(a,o)}while(Mn)}if(Ea.current=Xa,t=Q!==null&&Q.next!==null,At=0,J=Q=F=null,Ga=!1,t)throw Error(g(300));return e}function Sr(){var e=Yn!==0;return Yn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?F.memoizedState=J=e:J=J.next=e,J}function Me(){if(Q===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=J===null?F.memoizedState:J.next;if(t!==null)J=t,Q=e;else{if(e===null)throw Error(g(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?F.memoizedState=J=e:J=J.next=e}return J}function $n(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Me(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var a=Q,o=a.baseQueue,s=n.pending;if(s!==null){if(o!==null){var r=o.next;o.next=s.next,s.next=r}a.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,a=a.baseState;var i=r=null,l=null,p=s;do{var x=p.lane;if((At&x)===x)l!==null&&(l=l.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),a=p.hasEagerState?p.eagerState:e(a,p.action);else{var h={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};l===null?(i=l=h,r=a):l=l.next=h,F.lanes|=x,zt|=x}p=p.next}while(p!==null&&p!==s);l===null?r=a:l.next=i,_e(a,t.memoizedState)||(ue=!0),t.memoizedState=a,t.baseState=r,t.baseQueue=l,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do s=o.lane,F.lanes|=s,zt|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=Me(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var r=o=o.next;do s=e(s,r.action),r=r.next;while(r!==o);_e(s,t.memoizedState)||(ue=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function vc(){}function bc(e,t){var n=F,a=Me(),o=t(),s=!_e(a.memoizedState,o);if(s&&(a.memoizedState=o,ue=!0),a=a.queue,Tr(Sc.bind(null,n,a,e),[e]),a.getSnapshot!==t||s||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,qn(9,kc.bind(null,n,a,o,t),void 0,null),Z===null)throw Error(g(349));At&30||wc(n,t,o)}return o}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,a){t.value=n,t.getSnapshot=a,Tc(t)&&Cc(e)}function Sc(e,t,n){return n(function(){Tc(t)&&Cc(e)})}function Tc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function Cc(e){var t=Ke(e,1);t!==null&&Ie(t,e,1,-1)}function Ei(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=mu.bind(null,F,e),[t.memoizedState,e]}function qn(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Ec(){return Me().memoizedState}function Pa(e,t,n,a){var o=Ue();F.flags|=e,o.memoizedState=qn(1|t,n,void 0,a===void 0?null:a)}function uo(e,t,n,a){var o=Me();a=a===void 0?null:a;var s=void 0;if(Q!==null){var r=Q.memoizedState;if(s=r.destroy,a!==null&&wr(a,r.deps)){o.memoizedState=qn(t,n,s,a);return}}F.flags|=e,o.memoizedState=qn(1|t,n,s,a)}function Pi(e,t){return Pa(8390656,8,e,t)}function Tr(e,t){return uo(2048,8,e,t)}function Pc(e,t){return uo(4,2,e,t)}function Mc(e,t){return uo(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,Nc.bind(null,t,e),n)}function Cr(){}function zc(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&wr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function jc(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&wr(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Oc(e,t,n){return At&21?(_e(n,t)||(n=Ul(),F.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n)}function uu(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var a=Wo.transition;Wo.transition={};try{e(!1),t()}finally{I=n,Wo.transition=a}}function Lc(){return Me().memoizedState}function fu(e,t,n){var a=dt(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Ic(e))_c(t,n);else if(n=xc(e,t,n,a),n!==null){var o=le();Ie(n,e,a,o),Dc(n,t,a)}}function mu(e,t,n){var a=dt(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ic(e))_c(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,i=s(r,n);if(o.hasEagerState=!0,o.eagerState=i,_e(i,r)){var l=t.interleaved;l===null?(o.next=o,xr(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=xc(e,t,o,a),n!==null&&(o=le(),Ie(n,e,a,o),Dc(n,t,a))}}function Ic(e){var t=e.alternate;return e===F||t!==null&&t===F}function _c(e,t){Mn=Ga=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nr(e,n)}}var Xa={readContext:Pe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},hu={readContext:Pe,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Pi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Ue();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=fu.bind(null,F,e),[a.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Ei,useDebugValue:Cr,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Ei(!1),t=e[0];return e=uu.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=F,o=Ue();if(R){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Z===null)throw Error(g(349));At&30||wc(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Pi(Sc.bind(null,a,s,e),[e]),a.flags|=2048,qn(9,kc.bind(null,a,s,n,t),void 0,null),n},useId:function(){var e=Ue(),t=Z.identifierPrefix;if(R){var n=Ye,a=Ve;n=(a&~(1<<32-Le(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=du++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xu={readContext:Pe,useCallback:zc,useContext:Pe,useEffect:Tr,useImperativeHandle:Ac,useInsertionEffect:Pc,useLayoutEffect:Mc,useMemo:jc,useReducer:Vo,useRef:Ec,useState:function(){return Vo($n)},useDebugValue:Cr,useDeferredValue:function(e){var t=Me();return Oc(t,Q.memoizedState,e)},useTransition:function(){var e=Vo($n)[0],t=Me().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:bc,useId:Lc,unstable_isNewReconciler:!1},yu={readContext:Pe,useCallback:zc,useContext:Pe,useEffect:Tr,useImperativeHandle:Ac,useInsertionEffect:Pc,useLayoutEffect:Mc,useMemo:jc,useReducer:Yo,useRef:Ec,useState:function(){return Yo($n)},useDebugValue:Cr,useDeferredValue:function(e){var t=Me();return Q===null?t.memoizedState=e:Oc(t,Q.memoizedState,e)},useTransition:function(){var e=Yo($n)[0],t=Me().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:bc,useId:Lc,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Es(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=le(),o=dt(e),s=$e(a,o);s.payload=t,n!=null&&(s.callback=n),t=ct(e,s,o),t!==null&&(Ie(t,e,o,a),Ca(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=le(),o=dt(e),s=$e(a,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ct(e,s,o),t!==null&&(Ie(t,e,o,a),Ca(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),a=dt(e),o=$e(n,a);o.tag=2,t!=null&&(o.callback=t),t=ct(e,o,a),t!==null&&(Ie(t,e,a,n),Ca(t,e,a))}};function Mi(e,t,n,a,o,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,r):t.prototype&&t.prototype.isPureReactComponent?!Rn(n,a)||!Rn(o,s):!0}function Uc(e,t,n){var a=!1,o=mt,s=t.contextType;return typeof s=="object"&&s!==null?s=Pe(s):(o=me(t)?Mt:re.current,a=t.contextTypes,s=(a=a!=null)?tn(e,o):mt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ni(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Ps(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},yr(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=Pe(s):(s=me(t)?Mt:re.current,o.context=tn(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Es(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fo.enqueueReplaceState(o,o.state,null),Qa(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",a=t;do n+=Yp(a),a=a.return;while(a);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function $o(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gu=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Za||(Za=!0,Us=a),Ms(e,t)},n}function Bc(e,t,n){n=$e(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){Ms(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ms(e,t),typeof a!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function Ai(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new gu;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=ju.bind(null,e,t,n),t.then(e,e))}function zi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ji(e,t,n,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var vu=Xe.ReactCurrentOwner,ue=!1;function ie(e,t,n,a){t.child=e===null?hc(t,null,n,a):an(t,e.child,n,a)}function Oi(e,t,n,a,o){n=n.render;var s=t.ref;return Jt(t,o),a=kr(e,t,n,a,s,o),n=Sr(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(R&&n&&pr(t),t.flags|=1,ie(e,t,a,o),t.child)}function Li(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Or(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Fc(e,t,s,a,o)):(e=za(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(r,a)&&e.ref===t.ref)return Ge(e,t,o)}return t.flags|=1,e=ut(s,a),e.ref=t.ref,e.return=t,t.child=e}function Fc(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(Rn(s,a)&&e.ref===t.ref)if(ue=!1,t.pendingProps=a=s,(e.lanes&o)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,Ge(e,t,o)}return Ns(e,t,n,a,o)}function Hc(e,t,n){var a=t.pendingProps,o=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(qt,xe),xe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:n,_(qt,xe),xe|=a}else s!==null?(a=s.baseLanes|n,t.memoizedState=null):a=n,_(qt,xe),xe|=a;return ie(e,t,o,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,n,a,o){var s=me(n)?Mt:re.current;return s=tn(t,s),Jt(t,o),n=kr(e,t,n,a,s,o),a=Sr(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(R&&a&&pr(t),t.flags|=1,ie(e,t,n,o),t.child)}function Ii(e,t,n,a,o){if(me(n)){var s=!0;Wa(t)}else s=!1;if(Jt(t,o),t.stateNode===null)Ma(e,t),Uc(t,n,a),Ps(t,n,a,o),a=!0;else if(e===null){var r=t.stateNode,i=t.memoizedProps;r.props=i;var l=r.context,p=n.contextType;typeof p=="object"&&p!==null?p=Pe(p):(p=me(n)?Mt:re.current,p=tn(t,p));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof r.getSnapshotBeforeUpdate=="function";h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==a||l!==p)&&Ni(t,r,a,p),et=!1;var m=t.memoizedState;r.state=m,Qa(t,a,r,o),l=t.memoizedState,i!==a||m!==l||fe.current||et?(typeof x=="function"&&(Es(t,n,x,a),l=t.memoizedState),(i=et||Mi(t,n,i,a,m,l,p))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=l),r.props=a,r.state=l,r.context=p,a=i):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,yc(e,t),i=t.memoizedProps,p=t.type===t.elementType?i:ze(t.type,i),r.props=p,h=t.pendingProps,m=r.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pe(l):(l=me(n)?Mt:re.current,l=tn(t,l));var b=n.getDerivedStateFromProps;(x=typeof b=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(i!==h||m!==l)&&Ni(t,r,a,l),et=!1,m=t.memoizedState,r.state=m,Qa(t,a,r,o);var v=t.memoizedState;i!==h||m!==v||fe.current||et?(typeof b=="function"&&(Es(t,n,b,a),v=t.memoizedState),(p=et||Mi(t,n,p,a,m,v,l)||!1)?(x||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,v,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,v,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),r.props=a,r.state=v,r.context=l,a=p):(typeof r.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return As(e,t,n,a,s,o)}function As(e,t,n,a,o,s){Wc(e,t);var r=(t.flags&128)!==0;if(!a&&!r)return o&&bi(t,n,!1),Ge(e,t,s);a=t.stateNode,vu.current=t;var i=r&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&r?(t.child=an(t,e.child,null,s),t.child=an(t,null,i,s)):ie(e,t,i,s),t.memoizedState=a.state,o&&bi(t,n,!0),t.child}function Vc(e){var t=e.stateNode;t.pendingContext?vi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vi(e,t.context,!1),gr(e,t.containerInfo)}function _i(e,t,n,a,o){return nn(),ur(o),t.flags|=256,ie(e,t,n,a),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,n){var a=t.pendingProps,o=B.current,s=!1,r=(t.flags&128)!==0,i;if((i=r)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_(B,o&1),e===null)return Ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=a.children,e=a.fallback,s?(a=t.mode,s=t.child,r={mode:"hidden",children:r},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=r):s=xo(r,a,0,null),e=Pt(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=js(n),t.memoizedState=zs,e):Er(t,r));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return bu(e,t,r,a,i,o,n);if(s){s=a.fallback,r=t.mode,o=e.child,i=o.sibling;var l={mode:"hidden",children:a.children};return!(r&1)&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=l,t.deletions=null):(a=ut(o,l),a.subtreeFlags=o.subtreeFlags&14680064),i!==null?s=ut(i,s):(s=Pt(s,r,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,r=e.child.memoizedState,r=r===null?js(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},s.memoizedState=r,s.childLanes=e.childLanes&~n,t.memoizedState=zs,a}return s=e.child,e=s.sibling,a=ut(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Er(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ha(e,t,n,a){return a!==null&&ur(a),an(t,e.child,null,n),e=Er(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bu(e,t,n,a,o,s,r){if(n)return t.flags&256?(t.flags&=-257,a=$o(Error(g(422))),ha(e,t,r,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,o=t.mode,a=xo({mode:"visible",children:a.children},o,0,null),s=Pt(s,o,r,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&an(t,e.child,null,r),t.child.memoizedState=js(r),t.memoizedState=zs,s);if(!(t.mode&1))return ha(e,t,r,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var i=a.dgst;return a=i,s=Error(g(419)),a=$o(s,a,void 0),ha(e,t,r,a)}if(i=(r&e.childLanes)!==0,ue||i){if(a=Z,a!==null){switch(r&-r){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|r)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ke(e,o),Ie(a,e,o,-1))}return jr(),a=$o(Error(g(421))),ha(e,t,r,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ou.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,ge=lt(o.nextSibling),ve=t,R=!0,Oe=null,e!==null&&(Se[Te++]=Ve,Se[Te++]=Ye,Se[Te++]=Nt,Ve=e.id,Ye=e.overflow,Nt=t),t=Er(t,a.children),t.flags|=4096,t)}function Di(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Cs(e.return,t,n)}function qo(e,t,n,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=o)}function $c(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;if(ie(e,t,a.children,n),a=B.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Di(e,n,t);else if(e.tag===19)Di(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(_(B,a),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ka(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qo(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ka(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qo(t,!0,n,null,s);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ma(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wu(e,t,n){switch(t.tag){case 3:Vc(t),nn();break;case 5:gc(t);break;case 1:me(t.type)&&Wa(t);break;case 4:gr(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;_($a,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(_(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Yc(e,t,n):(_(B,B.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);_(B,B.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return $c(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(B,B.current),a)break;return null;case 22:case 23:return t.lanes=0,Hc(e,t,n)}return Ge(e,t,n)}var qc,Os,Qc,Kc;qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Os=function(){};Qc=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,Ct(Fe.current);var s=null;switch(n){case"input":o=ts(e,o),a=ts(e,a),s=[];break;case"select":o=H({},o,{value:void 0}),a=H({},a,{value:void 0}),s=[];break;case"textarea":o=os(e,o),a=os(e,a),s=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Fa)}rs(n,a);var r;n=null;for(p in o)if(!a.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var i=o[p];for(r in i)i.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(jn.hasOwnProperty(p)?s||(s=[]):(s=s||[]).push(p,null));for(p in a){var l=a[p];if(i=o!=null?o[p]:void 0,a.hasOwnProperty(p)&&l!==i&&(l!=null||i!=null))if(p==="style")if(i){for(r in i)!i.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in l)l.hasOwnProperty(r)&&i[r]!==l[r]&&(n||(n={}),n[r]=l[r])}else n||(s||(s=[]),s.push(p,n)),n=l;else p==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(s=s||[]).push(p,l)):p==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(p,""+l):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(jn.hasOwnProperty(p)?(l!=null&&p==="onScroll"&&D("scroll",e),s||i===l||(s=[])):(s=s||[]).push(p,l))}n&&(s=s||[]).push("style",n);var p=s;(t.updateQueue=p)&&(t.flags|=4)}};Kc=function(e,t,n,a){n!==a&&(t.flags|=4)};function yn(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ku(e,t,n){var a=t.pendingProps;switch(dr(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&Ha(),oe(t),null;case 3:return a=t.stateNode,on(),U(fe),U(re),br(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Fs(Oe),Oe=null))),Os(e,t),oe(t),null;case 5:vr(t);var o=Ct(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Qc(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(g(166));return oe(t),null}if(e=Ct(Fe.current),fa(t)){a=t.stateNode,n=t.type;var s=t.memoizedProps;switch(a[Re]=t,a[Hn]=s,e=(t.mode&1)!==0,n){case"dialog":D("cancel",a),D("close",a);break;case"iframe":case"object":case"embed":D("load",a);break;case"video":case"audio":for(o=0;o<kn.length;o++)D(kn[o],a);break;case"source":D("error",a);break;case"img":case"image":case"link":D("error",a),D("load",a);break;case"details":D("toggle",a);break;case"input":$r(a,s),D("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},D("invalid",a);break;case"textarea":Qr(a,s),D("invalid",a)}rs(n,s),o=null;for(var r in s)if(s.hasOwnProperty(r)){var i=s[r];r==="children"?typeof i=="string"?a.textContent!==i&&(s.suppressHydrationWarning!==!0&&ua(a.textContent,i,e),o=["children",i]):typeof i=="number"&&a.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&ua(a.textContent,i,e),o=["children",""+i]):jn.hasOwnProperty(r)&&i!=null&&r==="onScroll"&&D("scroll",a)}switch(n){case"input":oa(a),qr(a,s,!0);break;case"textarea":oa(a),Kr(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Fa)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{r=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=r.createElement(n,{is:a.is}):(e=r.createElement(n),n==="select"&&(r=e,a.multiple?r.multiple=!0:a.size&&(r.size=a.size))):e=r.createElementNS(e,n),e[Re]=t,e[Hn]=a,qc(e,t,!1,!1),t.stateNode=e;e:{switch(r=is(n,a),n){case"dialog":D("cancel",e),D("close",e),o=a;break;case"iframe":case"object":case"embed":D("load",e),o=a;break;case"video":case"audio":for(o=0;o<kn.length;o++)D(kn[o],e);o=a;break;case"source":D("error",e),o=a;break;case"img":case"image":case"link":D("error",e),D("load",e),o=a;break;case"details":D("toggle",e),o=a;break;case"input":$r(e,a),o=ts(e,a),D("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=H({},a,{value:void 0}),D("invalid",e);break;case"textarea":Qr(e,a),o=os(e,a),D("invalid",e);break;default:o=a}rs(n,o),i=o;for(s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="style"?El(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tl(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&On(e,l):typeof l=="number"&&On(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jn.hasOwnProperty(s)?l!=null&&s==="onScroll"&&D("scroll",e):l!=null&&Gs(e,s,l,r))}switch(n){case"input":oa(e),qr(e,a,!1);break;case"textarea":oa(e),Kr(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ft(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?Qt(e,!!a.multiple,s,!1):a.defaultValue!=null&&Qt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fa)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Kc(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(g(166));if(n=Ct(Vn.current),Ct(Fe.current),fa(t)){if(a=t.stateNode,n=t.memoizedProps,a[Re]=t,(s=a.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:ua(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(a.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Re]=t,t.stateNode=a}return oe(t),null;case 13:if(U(B),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&ge!==null&&t.mode&1&&!(t.flags&128))fc(),nn(),t.flags|=98560,s=!1;else if(s=fa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(g(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(g(317));s[Re]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Oe!==null&&(Fs(Oe),Oe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?G===0&&(G=3):jr())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return on(),Os(e,t),e===null&&Bn(t.stateNode.containerInfo),oe(t),null;case 10:return hr(t.type._context),oe(t),null;case 17:return me(t.type)&&Ha(),oe(t),null;case 19:if(U(B),s=t.memoizedState,s===null)return oe(t),null;if(a=(t.flags&128)!==0,r=s.rendering,r===null)if(a)yn(s,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Ka(e),r!==null){for(t.flags|=128,yn(s,!1),a=r.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)s=n,e=a,s.flags&=14680066,r=s.alternate,r===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,s.type=r.type,e=r.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&$()>rn&&(t.flags|=128,a=!0,yn(s,!1),t.lanes=4194304)}else{if(!a)if(e=Ka(r),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!R)return oe(t),null}else 2*$()-s.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,a=!0,yn(s,!1),t.lanes=4194304);s.isBackwards?(r.sibling=t.child,t.child=r):(n=s.last,n!==null?n.sibling=r:t.child=r,s.last=r)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=$(),t.sibling=null,n=B.current,_(B,a?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return zr(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function Su(e,t){switch(dr(t),t.tag){case 1:return me(t.type)&&Ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),U(fe),U(re),br(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vr(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return on(),null;case 10:return hr(t.type._context),null;case 22:case 23:return zr(),null;case 24:return null;default:return null}}var xa=!1,se=!1,Tu=typeof WeakSet=="function"?WeakSet:Set,S=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){V(e,t,a)}else n.current=null}function Ls(e,t,n){try{n()}catch(a){V(e,t,a)}}var Ui=!1;function Cu(e,t){if(ys=Ua,e=ec(),cr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,i=-1,l=-1,p=0,x=0,h=e,m=null;t:for(;;){for(var b;h!==n||o!==0&&h.nodeType!==3||(i=r+o),h!==s||a!==0&&h.nodeType!==3||(l=r+a),h.nodeType===3&&(r+=h.nodeValue.length),(b=h.firstChild)!==null;)m=h,h=b;for(;;){if(h===e)break t;if(m===n&&++p===o&&(i=r),m===s&&++x===a&&(l=r),(b=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=b}n=i===-1||l===-1?null:{start:i,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},Ua=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,L=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:ze(t.type,w),L);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var u=t.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=Ui,Ui=!1,v}function Nn(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Ls(t,n,s)}o=o.next}while(o!==a)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gc(e){var t=e.alternate;t!==null&&(e.alternate=null,Gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Re],delete t[Hn],delete t[ws],delete t[iu],delete t[lu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function Ri(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fa));else if(a!==4&&(e=e.child,e!==null))for(_s(e,t,n),e=e.sibling;e!==null;)_s(e,t,n),e=e.sibling}function Ds(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Ds(e,t,n),e=e.sibling;e!==null;)Ds(e,t,n),e=e.sibling}var ee=null,je=!1;function Je(e,t,n){for(n=n.child;n!==null;)Jc(e,t,n),n=n.sibling}function Jc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:se||$t(n,t);case 6:var a=ee,o=je;ee=null,Je(e,t,n),ee=a,je=o,ee!==null&&(je?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(je?(e=ee,n=n.stateNode,e.nodeType===8?Bo(e.parentNode,n):e.nodeType===1&&Bo(e,n),Dn(e)):Bo(ee,n.stateNode));break;case 4:a=ee,o=je,ee=n.stateNode.containerInfo,je=!0,Je(e,t,n),ee=a,je=o;break;case 0:case 11:case 14:case 15:if(!se&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var s=o,r=s.destroy;s=s.tag,r!==void 0&&(s&2||s&4)&&Ls(n,t,r),o=o.next}while(o!==a)}Je(e,t,n);break;case 1:if(!se&&($t(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(i){V(n,t,i)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(se=(a=se)||n.memoizedState!==null,Je(e,t,n),se=a):Je(e,t,n);break;default:Je(e,t,n)}}function Bi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tu),t.forEach(function(a){var o=Lu.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var s=e,r=t,i=r;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,je=!1;break e;case 3:ee=i.stateNode.containerInfo,je=!0;break e;case 4:ee=i.stateNode.containerInfo,je=!0;break e}i=i.return}if(ee===null)throw Error(g(160));Jc(s,r,o),ee=null,je=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(p){V(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zc(t,e),t=t.sibling}function Zc(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),De(e),a&4){try{Nn(3,e,e.return),mo(3,e)}catch(w){V(e,e.return,w)}try{Nn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Ae(t,e),De(e),a&512&&n!==null&&$t(n,n.return);break;case 5:if(Ae(t,e),De(e),a&512&&n!==null&&$t(n,n.return),e.flags&32){var o=e.stateNode;try{On(o,"")}catch(w){V(e,e.return,w)}}if(a&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,r=n!==null?n.memoizedProps:s,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&wl(o,s),is(i,r);var p=is(i,s);for(r=0;r<l.length;r+=2){var x=l[r],h=l[r+1];x==="style"?El(o,h):x==="dangerouslySetInnerHTML"?Tl(o,h):x==="children"?On(o,h):Gs(o,x,h,p)}switch(i){case"input":ns(o,s);break;case"textarea":kl(o,s);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?Qt(o,!!s.multiple,b,!1):m!==!!s.multiple&&(s.defaultValue!=null?Qt(o,!!s.multiple,s.defaultValue,!0):Qt(o,!!s.multiple,s.multiple?[]:"",!1))}o[Hn]=s}catch(w){V(e,e.return,w)}}break;case 6:if(Ae(t,e),De(e),a&4){if(e.stateNode===null)throw Error(g(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(w){V(e,e.return,w)}}break;case 3:if(Ae(t,e),De(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Ae(t,e),De(e);break;case 13:Ae(t,e),De(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Nr=$())),a&4&&Bi(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(se=(p=se)||x,Ae(t,e),se=p):Ae(t,e),De(e),a&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(S=e,x=e.child;x!==null;){for(h=S=x;S!==null;){switch(m=S,b=m.child,m.tag){case 0:case 11:case 14:case 15:Nn(4,m,m.return);break;case 1:$t(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){a=m,n=m.return;try{t=a,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){V(a,n,w)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){Hi(h);continue}}b!==null?(b.return=m,S=b):Hi(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{o=h.stateNode,p?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=h.stateNode,l=h.memoizedProps.style,r=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=Cl("display",r))}catch(w){V(e,e.return,w)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=p?"":h.memoizedProps}catch(w){V(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(t,e),De(e),a&4&&Bi(e);break;case 21:break;default:Ae(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var a=n;break e}n=n.return}throw Error(g(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(On(o,""),a.flags&=-33);var s=Ri(e);Ds(e,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,i=Ri(e);_s(e,i,r);break;default:throw Error(g(161))}}catch(l){V(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eu(e,t,n){S=e,ep(e)}function ep(e,t,n){for(var a=(e.mode&1)!==0;S!==null;){var o=S,s=o.child;if(o.tag===22&&a){var r=o.memoizedState!==null||xa;if(!r){var i=o.alternate,l=i!==null&&i.memoizedState!==null||se;i=xa;var p=se;if(xa=r,(se=l)&&!p)for(S=o;S!==null;)r=S,l=r.child,r.tag===22&&r.memoizedState!==null?Wi(o):l!==null?(l.return=r,S=l):Wi(o);for(;s!==null;)S=s,ep(s),s=s.sibling;S=o,xa=i,se=p}Fi(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,S=s):Fi(e)}}function Fi(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||mo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!se)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ci(t,s,a);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ci(t,r,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&Dn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}se||t.flags&512&&Is(t)}catch(m){V(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Hi(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Wi(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(l){V(t,n,l)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(l){V(t,o,l)}}var s=t.return;try{Is(t)}catch(l){V(t,s,l)}break;case 5:var r=t.return;try{Is(t)}catch(l){V(t,r,l)}}}catch(l){V(t,t.return,l)}if(t===e){S=null;break}var i=t.sibling;if(i!==null){i.return=t.return,S=i;break}S=t.return}}var Pu=Math.ceil,Ja=Xe.ReactCurrentDispatcher,Pr=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,O=0,Z=null,q=null,te=0,xe=0,qt=xt(0),G=0,Qn=null,zt=0,ho=0,Mr=0,An=null,de=null,Nr=0,rn=1/0,He=null,Za=!1,Us=null,pt=null,ya=!1,ot=null,eo=0,zn=0,Rs=null,Na=-1,Aa=0;function le(){return O&6?$():Na!==-1?Na:Na=$()}function dt(e){return e.mode&1?O&2&&te!==0?te&-te:pu.transition!==null?(Aa===0&&(Aa=Ul()),Aa):(e=I,e!==0||(e=window.event,e=e===void 0?16:Yl(e.type)),e):1}function Ie(e,t,n,a){if(50<zn)throw zn=0,Rs=null,Error(g(185));Gn(e,n,a),(!(O&2)||e!==Z)&&(e===Z&&(!(O&2)&&(ho|=n),G===4&&nt(e,te)),he(e,a),n===1&&O===0&&!(t.mode&1)&&(rn=$()+500,po&&yt()))}function he(e,t){var n=e.callbackNode;pd(e,t);var a=Da(e,e===Z?te:0);if(a===0)n!==null&&Jr(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&Jr(n),t===1)e.tag===0?cu(Vi.bind(null,e)):pc(Vi.bind(null,e)),su(function(){!(O&6)&&yt()}),n=null;else{switch(Rl(a)){case 1:n=tr;break;case 4:n=_l;break;case 16:n=_a;break;case 536870912:n=Dl;break;default:n=_a}n=lp(n,tp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tp(e,t){if(Na=-1,Aa=0,O&6)throw Error(g(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var a=Da(e,e===Z?te:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=to(e,a);else{t=a;var o=O;O|=2;var s=ap();(Z!==e||te!==t)&&(He=null,rn=$()+500,Et(e,t));do try{Au();break}catch(i){np(e,i)}while(!0);mr(),Ja.current=s,O=o,q!==null?t=0:(Z=null,te=0,t=G)}if(t!==0){if(t===2&&(o=us(e),o!==0&&(a=o,t=Bs(e,o))),t===1)throw n=Qn,Et(e,0),nt(e,a),he(e,$()),n;if(t===6)nt(e,a);else{if(o=e.current.alternate,!(a&30)&&!Mu(o)&&(t=to(e,a),t===2&&(s=us(e),s!==0&&(a=s,t=Bs(e,s))),t===1))throw n=Qn,Et(e,0),nt(e,a),he(e,$()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(g(345));case 2:kt(e,de,He);break;case 3:if(nt(e,a),(a&130023424)===a&&(t=Nr+500-$(),10<t)){if(Da(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=bs(kt.bind(null,e,de,He),t);break}kt(e,de,He);break;case 4:if(nt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var r=31-Le(a);s=1<<r,r=t[r],r>o&&(o=r),a&=~s}if(a=o,a=$()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Pu(a/1960))-a,10<a){e.timeoutHandle=bs(kt.bind(null,e,de,He),a);break}kt(e,de,He);break;case 5:kt(e,de,He);break;default:throw Error(g(329))}}}return he(e,$()),e.callbackNode===n?tp.bind(null,e):null}function Bs(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=to(e,t),e!==2&&(t=de,de=n,t!==null&&Fs(t)),e}function Fs(e){de===null?de=e:de.push.apply(de,e)}function Mu(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!_e(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Mr,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),a=1<<n;e[n]=-1,t&=~a}}function Vi(e){if(O&6)throw Error(g(327));Zt();var t=Da(e,0);if(!(t&1))return he(e,$()),null;var n=to(e,t);if(e.tag!==0&&n===2){var a=us(e);a!==0&&(t=a,n=Bs(e,a))}if(n===1)throw n=Qn,Et(e,0),nt(e,t),he(e,$()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,He),he(e,$()),null}function Ar(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(rn=$()+500,po&&yt())}}function jt(e){ot!==null&&ot.tag===0&&!(O&6)&&Zt();var t=O;O|=1;var n=Ee.transition,a=I;try{if(Ee.transition=null,I=1,e)return e()}finally{I=a,Ee.transition=n,O=t,!(O&6)&&yt()}}function zr(){xe=qt.current,U(qt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ou(n)),q!==null)for(n=q.return;n!==null;){var a=n;switch(dr(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ha();break;case 3:on(),U(fe),U(re),br();break;case 5:vr(a);break;case 4:on();break;case 13:U(B);break;case 19:U(B);break;case 10:hr(a.type._context);break;case 22:case 23:zr()}n=n.return}if(Z=e,q=e=ut(e.current,null),te=xe=t,G=0,Qn=null,Mr=ho=zt=0,de=An=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,s=n.pending;if(s!==null){var r=s.next;s.next=o,a.next=r}n.pending=a}Tt=null}return e}function np(e,t){do{var n=q;try{if(mr(),Ea.current=Xa,Ga){for(var a=F.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}Ga=!1}if(At=0,J=Q=F=null,Mn=!1,Yn=0,Pr.current=null,n===null||n.return===null){G=1,Qn=t,q=null;break}e:{var s=e,r=n.return,i=n,l=t;if(t=te,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var p=l,x=i,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var b=zi(r);if(b!==null){b.flags&=-257,ji(b,r,i,s,t),b.mode&1&&Ai(s,p,t),t=b,l=p;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Ai(s,p,t),jr();break e}l=Error(g(426))}}else if(R&&i.mode&1){var L=zi(r);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ji(L,r,i,s,t),ur(sn(l,i));break e}}s=l=sn(l,i),G!==4&&(G=2),An===null?An=[s]:An.push(s),s=r;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=Rc(s,l,t);Ti(s,d);break e;case 1:i=l;var c=s.type,u=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(pt===null||!pt.has(u)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Bc(s,i,t);Ti(s,y);break e}}s=s.return}while(s!==null)}sp(n)}catch(k){t=k,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ap(){var e=Ja.current;return Ja.current=Xa,e===null?Xa:e}function jr(){(G===0||G===3||G===2)&&(G=4),Z===null||!(zt&268435455)&&!(ho&268435455)||nt(Z,te)}function to(e,t){var n=O;O|=2;var a=ap();(Z!==e||te!==t)&&(He=null,Et(e,t));do try{Nu();break}catch(o){np(e,o)}while(!0);if(mr(),O=n,Ja.current=a,q!==null)throw Error(g(261));return Z=null,te=0,G}function Nu(){for(;q!==null;)op(q)}function Au(){for(;q!==null&&!td();)op(q)}function op(e){var t=ip(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?sp(e):q=t,Pr.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Su(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,q=null;return}}else if(n=ku(n,t,xe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);G===0&&(G=5)}function kt(e,t,n){var a=I,o=Ee.transition;try{Ee.transition=null,I=1,zu(e,t,n,a)}finally{Ee.transition=o,I=a}return null}function zu(e,t,n,a){do Zt();while(ot!==null);if(O&6)throw Error(g(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(dd(e,s),e===Z&&(q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,lp(_a,function(){return Zt(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ee.transition,Ee.transition=null;var r=I;I=1;var i=O;O|=4,Pr.current=null,Cu(e,n),Zc(n,e),Xd(gs),Ua=!!ys,gs=ys=null,e.current=n,Eu(n),nd(),O=i,I=r,Ee.transition=s}else e.current=n;if(ya&&(ya=!1,ot=e,eo=o),s=e.pendingLanes,s===0&&(pt=null),sd(n.stateNode),he(e,$()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(Za)throw Za=!1,e=Us,Us=null,e;return eo&1&&e.tag!==0&&Zt(),s=e.pendingLanes,s&1?e===Rs?zn++:(zn=0,Rs=e):zn=0,yt(),null}function Zt(){if(ot!==null){var e=Rl(eo),t=Ee.transition,n=I;try{if(Ee.transition=null,I=16>e?16:e,ot===null)var a=!1;else{if(e=ot,ot=null,eo=0,O&6)throw Error(g(331));var o=O;for(O|=4,S=e.current;S!==null;){var s=S,r=s.child;if(S.flags&16){var i=s.deletions;if(i!==null){for(var l=0;l<i.length;l++){var p=i[l];for(S=p;S!==null;){var x=S;switch(x.tag){case 0:case 11:case 15:Nn(8,x,s)}var h=x.child;if(h!==null)h.return=x,S=h;else for(;S!==null;){x=S;var m=x.sibling,b=x.return;if(Gc(x),x===p){S=null;break}if(m!==null){m.return=b,S=m;break}S=b}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}S=s}}if(s.subtreeFlags&2064&&r!==null)r.return=s,S=r;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Nn(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,S=d;break e}S=s.return}}var c=e.current;for(S=c;S!==null;){r=S;var u=r.child;if(r.subtreeFlags&2064&&u!==null)u.return=r,S=u;else e:for(r=c;S!==null;){if(i=S,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:mo(9,i)}}catch(k){V(i,i.return,k)}if(i===r){S=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,S=y;break e}S=i.return}}if(O=o,yt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(so,e)}catch{}a=!0}return a}finally{I=n,Ee.transition=t}}return!1}function Yi(e,t,n){t=sn(n,t),t=Rc(e,t,1),e=ct(e,t,1),t=le(),e!==null&&(Gn(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)Yi(e,e,n);else for(;t!==null;){if(t.tag===3){Yi(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pt===null||!pt.has(a))){e=sn(n,e),e=Bc(t,e,1),t=ct(t,e,1),e=le(),t!==null&&(Gn(t,1,e),he(t,e));break}}t=t.return}}function ju(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(G===4||G===3&&(te&130023424)===te&&500>$()-Nr?Et(e,0):Mr|=n),he(e,t)}function rp(e,t){t===0&&(e.mode&1?(t=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):t=1);var n=le();e=Ke(e,t),e!==null&&(Gn(e,t,n),he(e,n))}function Ou(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rp(e,n)}function Lu(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(g(314))}a!==null&&a.delete(t),rp(e,n)}var ip;ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ue=!1,wu(e,t,n);ue=!!(e.flags&131072)}else ue=!1,R&&t.flags&1048576&&dc(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ma(e,t),e=t.pendingProps;var o=tn(t,re.current);Jt(t,n),o=kr(null,t,a,e,o,n);var s=Sr();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(a)?(s=!0,Wa(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,yr(t),o.updater=fo,t.stateNode=o,o._reactInternals=t,Ps(t,a,e,n),t=As(null,t,a,!0,s,n)):(t.tag=0,R&&s&&pr(t),ie(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Ma(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=_u(a),e=ze(a,e),o){case 0:t=Ns(null,t,a,e,n);break e;case 1:t=Ii(null,t,a,e,n);break e;case 11:t=Oi(null,t,a,e,n);break e;case 14:t=Li(null,t,a,ze(a.type,e),n);break e}throw Error(g(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ze(a,o),Ns(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ze(a,o),Ii(e,t,a,o,n);case 3:e:{if(Vc(t),e===null)throw Error(g(387));a=t.pendingProps,s=t.memoizedState,o=s.element,yc(e,t),Qa(t,a,null,n);var r=t.memoizedState;if(a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=sn(Error(g(423)),t),t=_i(e,t,a,n,o);break e}else if(a!==o){o=sn(Error(g(424)),t),t=_i(e,t,a,n,o);break e}else for(ge=lt(t.stateNode.containerInfo.firstChild),ve=t,R=!0,Oe=null,n=hc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),a===o){t=Ge(e,t,n);break e}ie(e,t,a,n)}t=t.child}return t;case 5:return gc(t),e===null&&Ts(t),a=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,r=o.children,vs(a,o)?r=null:s!==null&&vs(a,s)&&(t.flags|=32),Wc(e,t),ie(e,t,r,n),t.child;case 6:return e===null&&Ts(t),null;case 13:return Yc(e,t,n);case 4:return gr(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=an(t,null,a,n):ie(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ze(a,o),Oi(e,t,a,o,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,s=t.memoizedProps,r=o.value,_($a,a._currentValue),a._currentValue=r,s!==null)if(_e(s.value,r)){if(s.children===o.children&&!fe.current){t=Ge(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){r=s.child;for(var l=i.firstContext;l!==null;){if(l.context===a){if(s.tag===1){l=$e(-1,n&-n),l.tag=2;var p=s.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?l.next=l:(l.next=x.next,x.next=l),p.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cs(s.return,n,t),i.lanes|=n;break}l=l.next}}else if(s.tag===10)r=s.type===t.type?null:s.child;else if(s.tag===18){if(r=s.return,r===null)throw Error(g(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Cs(r,n,t),r=s.sibling}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===t){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,Jt(t,n),o=Pe(o),a=a(o),t.flags|=1,ie(e,t,a,n),t.child;case 14:return a=t.type,o=ze(a,t.pendingProps),o=ze(a.type,o),Li(e,t,a,o,n);case 15:return Fc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:ze(a,o),Ma(e,t),t.tag=1,me(a)?(e=!0,Wa(t)):e=!1,Jt(t,n),Uc(t,a,o),Ps(t,a,o,n),As(null,t,a,!0,e,n);case 19:return $c(e,t,n);case 22:return Hc(e,t,n)}throw Error(g(156,t.tag))};function lp(e,t){return Il(e,t)}function Iu(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,a){return new Iu(e,t,n,a)}function Or(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _u(e){if(typeof e=="function")return Or(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Js)return 11;if(e===Zs)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function za(e,t,n,a,o,s){var r=2;if(a=e,typeof e=="function")Or(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Dt:return Pt(n.children,o,s,t);case Xs:r=8,o|=8;break;case Xo:return e=Ce(12,n,t,o|2),e.elementType=Xo,e.lanes=s,e;case Jo:return e=Ce(13,n,t,o),e.elementType=Jo,e.lanes=s,e;case Zo:return e=Ce(19,n,t,o),e.elementType=Zo,e.lanes=s,e;case gl:return xo(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xl:r=10;break e;case yl:r=9;break e;case Js:r=11;break e;case Zs:r=14;break e;case Ze:r=16,a=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Ce(r,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function Pt(e,t,n,a){return e=Ce(7,e,a,t),e.lanes=n,e}function xo(e,t,n,a){return e=Ce(22,e,a,t),e.elementType=gl,e.lanes=n,e.stateNode={isHidden:!1},e}function Qo(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Ko(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Du(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Lr(e,t,n,a,o,s,r,i,l){return e=new Du(e,t,n,i,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ce(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yr(s),e}function Uu(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function cp(e){if(!e)return mt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(me(n))return cc(e,n,t)}return t}function pp(e,t,n,a,o,s,r,i,l){return e=Lr(n,a,!0,e,o,s,r,i,l),e.context=cp(null),n=e.current,a=le(),o=dt(n),s=$e(a,o),s.callback=t??null,ct(n,s,o),e.current.lanes=o,Gn(e,o,a),he(e,a),e}function yo(e,t,n,a){var o=t.current,s=le(),r=dt(o);return n=cp(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(s,r),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ct(o,t,r),e!==null&&(Ie(e,o,r,s),Ca(e,o,r)),r}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $i(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ir(e,t){$i(e,t),(e=e.alternate)&&$i(e,t)}function Ru(){return null}var dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function _r(e){this._internalRoot=e}go.prototype.render=_r.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));yo(e,t,null,null)};go.prototype.unmount=_r.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jt(function(){yo(null,e,null,null)}),t[Qe]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Vl(e)}};function Dr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qi(){}function Bu(e,t,n,a,o){if(o){if(typeof a=="function"){var s=a;a=function(){var p=no(r);s.call(p)}}var r=pp(t,a,e,0,null,!1,!1,"",qi);return e._reactRootContainer=r,e[Qe]=r.current,Bn(e.nodeType===8?e.parentNode:e),jt(),r}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var i=a;a=function(){var p=no(l);i.call(p)}}var l=Lr(e,0,!1,null,null,!1,!1,"",qi);return e._reactRootContainer=l,e[Qe]=l.current,Bn(e.nodeType===8?e.parentNode:e),jt(function(){yo(t,l,n,a)}),l}function bo(e,t,n,a,o){var s=n._reactRootContainer;if(s){var r=s;if(typeof o=="function"){var i=o;o=function(){var l=no(r);i.call(l)}}yo(t,r,e,o)}else r=Bu(n,t,e,o,a);return no(r)}Bl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(nr(t,n|1),he(t,$()),!(O&6)&&(rn=$()+500,yt()))}break;case 13:jt(function(){var a=Ke(e,1);if(a!==null){var o=le();Ie(a,e,1,o)}}),Ir(e,1)}};ar=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=le();Ie(t,e,134217728,n)}Ir(e,134217728)}};Fl=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var a=le();Ie(n,e,t,a)}Ir(e,t)}};Hl=function(){return I};Wl=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};cs=function(e,t,n){switch(t){case"input":if(ns(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=co(a);if(!o)throw Error(g(90));bl(a),ns(a,o)}}}break;case"textarea":kl(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Nl=Ar;Al=jt;var Fu={usingClientEntryPoint:!1,Events:[Jn,Ft,co,Pl,Ml,Ar]},gn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hu={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ol(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Ru,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{so=ga.inject(Hu),Be=ga}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fu;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dr(t))throw Error(g(200));return Uu(e,t,null,n)};we.createRoot=function(e,t){if(!Dr(e))throw Error(g(299));var n=!1,a="",o=dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Lr(e,1,!1,null,null,n,!1,a,o),e[Qe]=t.current,Bn(e.nodeType===8?e.parentNode:e),new _r(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ol(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return jt(e)};we.hydrate=function(e,t,n){if(!vo(t))throw Error(g(200));return bo(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Dr(e))throw Error(g(405));var a=n!=null&&n.hydratedSources||null,o=!1,s="",r=dp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=pp(t,null,e,1,n??null,o,!1,s,r),e[Qe]=t.current,Bn(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new go(t)};we.render=function(e,t,n){if(!vo(t))throw Error(g(200));return bo(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!vo(e))throw Error(g(40));return e._reactRootContainer?(jt(function(){bo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Ar;we.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!vo(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return bo(e,t,n,!1,a)};we.version="18.3.1-next-f1338f8080-20240426";function up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(up)}catch(e){console.error(e)}}up(),ul.exports=we;var Wu=ul.exports,fp,Qi=Wu;fp=Qi.createRoot,Qi.hydrateRoot;window.React=ye;(function(){var e=window.React,t=e.createElement,n={album:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 3v8l3-3 3 3V3"/>',bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',copy:'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',euro:'<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/>',image:'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',location:'<polygon points="3 11 22 2 13 21 11 13 3 11"/>',"map-pin":'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',map:'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',more:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',poll:'<path d="M4 6h10"/><path d="M4 12h16"/><path d="M4 18h7"/>',receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',settle:'<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',tram:'<rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'};function a(){return Array.prototype.filter.call(arguments,Boolean).join(" ")}function o(f,P){var W={};for(var Ne in f)P.indexOf(Ne)<0&&(W[Ne]=f[Ne]);return W}function s(f){var P=f.size||24,W=n[f.name];return W?t("svg",Object.assign({width:P,height:P,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":f.label?void 0:!0,role:f.label?"img":void 0,"aria-label":f.label,className:a("tu-icon",f.className),style:f.color?{color:f.color}:void 0,dangerouslySetInnerHTML:{__html:W}})):null}s.names=Object.keys(n);function r(f){var P=f.variant||"primary",W=f.size||"L";return t("button",Object.assign({type:"button"},o(f,["variant","size","icon","className","children"]),{className:a("tu-btn","tu-btn--"+P,"tu-btn--"+W,f.className)}),f.icon?t(s,{name:f.icon,size:W==="L"?20:18}):null,f.children)}function i(f){return t("span",Object.assign({},o(f,["tone","icon","className","children"]),{className:a("tu-chip","tu-chip--"+(f.tone||"default"),f.className)}),f.icon?t(s,{name:f.icon,size:16}):null,f.children)}function l(f){return t("button",Object.assign({type:"button","aria-label":f.label},o(f,["variant","icon","label","className"]),{className:a("tu-iconbtn","tu-iconbtn--"+(f.variant||"glass"),f.className)}),t(s,{name:f.icon||"plus",size:20}))}function p(f){var P=f.size||"M";return t("span",{className:a("tu-avatar","tu-avatar--"+P,f.className),title:f.name,style:{background:f.color||"var(--person-ari)"}},f.initials||(f.name?f.name.slice(0,2):""))}function x(f,P,W){return t("span",{className:"tu-avatars",style:{gap:W+"px"}},(f||[]).map(function(Ne,gt){return t(p,Object.assign({key:gt,size:P},Ne))}))}function h(f){var P=f.mode==="onImage";return t("div",{className:a("tu-statusbar",P&&"tu-statusbar--image",f.className)},t("span",{className:"tu-statusbar__time"},f.time||"9:41"),t("svg",{className:"tu-statusbar__icons",width:70,height:15,viewBox:"0 0 70 15","aria-hidden":!0},t("rect",{x:0,y:8,width:3,height:4,rx:1}),t("rect",{x:5,y:5.5,width:3,height:6.5,rx:1}),t("rect",{x:10,y:3,width:3,height:9,rx:1}),t("rect",{x:15,y:.5,width:3,height:11.5,rx:1}),t("path",{d:"M24.9 5.9A9.4 9.4 0 0 1 38.1 5.9M27.7 8.8A5.4 5.4 0 0 1 35.3 8.8",style:{fill:"none",stroke:"currentColor",strokeWidth:2.2,strokeLinecap:"round"}}),t("path",{d:"M29.5 11.2A2.9 2.9 0 0 1 33.5 11.2L31.5 13.4Z"}),t("rect",{x:45.5,y:1.5,width:24,height:11,rx:3.5,fill:"none",stroke:"currentColor",strokeWidth:1,opacity:.9}),t("rect",{x:48,y:3,width:19,height:8,rx:2})))}function m(f){return t("div",{className:a("tu-homeindicator",f.className)},t("span"))}function b(f){return t("div",{className:a("tu-grabber",f.className)},t("span"))}function v(f){return t("button",Object.assign({type:"button",role:"tab","aria-selected":!!f.selected},o(f,["selected","className","children"]),{className:a("tu-segment",f.selected&&"tu-segment--on",f.className)}),f.children)}function w(f){return t("label",{className:a("tu-field",f.focused&&"tu-field--focused",f.className)},f.icon===null?null:t(s,{name:f.icon||"search",size:18}),t("input",Object.assign({type:"text"},o(f,["icon","focused","className"]))))}function L(f){return t("div",{className:a("tu-tripcard",f.className),onClick:f.onClick,role:f.onClick?"button":void 0},t("div",{className:"tu-photo",style:f.photo?{backgroundImage:"url("+f.photo+")"}:void 0}),t("div",{className:"tu-tripcard__text"},t("div",{className:"tu-tripcard__title"},f.title),t("div",{className:"tu-tripcard__sub"},f.subtitle),t("div",{className:"tu-tripcard__meta"},f.chip?t(i,{tone:f.chipTone||"accent"},f.chip):null,x(f.people,"S",-6))),t(s,{name:"chevron-right",size:20,className:"tu-chevron"}))}var d={done:"clock",now:"map-pin",planned:"calendar",undecided:"utensils"};function c(f){var P=f.state||"planned";return t("div",{className:a("tu-itin","tu-itin--"+P,f.className)},t("span",{className:"tu-itin__time"},f.time),t("div",{className:"tu-itin__card"},t("span",{className:"tu-tile"},t(s,{name:f.icon||d[P],size:18})),t("div",{className:"tu-itin__text"},t("div",{className:"tu-itin__title"},f.title),t("div",{className:"tu-itin__sub"},f.subtitle)),P==="undecided"&&f.chip?t(i,{tone:"poll"},f.chip):null))}function u(f){var P=Math.max(0,Math.min(100,f.percent||0));return t("div",{className:a("tu-poll",f.leading&&"tu-poll--leading",f.className),onClick:f.onClick,role:f.onClick?"button":void 0},t("div",{className:"tu-poll__top"},t("span",{className:"tu-poll__name"},f.name),f.leading?t(i,{tone:"poll"},f.leadingLabel||"Leading"):null,t("span",{className:"tu-poll__count"},f.votes)),t("div",{className:"tu-poll__track"},t("div",{className:"tu-poll__fill",style:{width:P+"%"}})),f.voters?t("div",{className:"tu-poll__voters"},f.voters):null)}function y(f){return t("div",{className:a("tu-person",f.added&&"tu-person--added",f.className)},t(p,{size:"L",initials:f.initials,name:f.name,color:f.color}),t("div",{className:"tu-row__text"},t("div",{className:"tu-row__title"},f.name),t("div",{className:"tu-row__sub"},f.subtitle)),f.added?t("span",{className:"tu-added"},t(s,{name:"check",size:16}),"Added"):t(r,{variant:"secondary",size:"M",onClick:f.onAdd},f.addLabel||"Add"))}function k(f){var P=f.status==="paid";return t("div",{className:a("tu-transfer",f.className)},x(f.people,"M",-8),t("div",{className:"tu-row__text"},t("div",{className:"tu-row__title"},f.title),t("div",{className:"tu-row__sub"},f.subtitle)),t("div",{className:"tu-transfer__right"},t("span",{className:"tu-transfer__amount"},f.amount),t(i,{tone:P?"success":"warning"},P?"Paid":"Pending")))}function C(f){return t("button",Object.assign({type:"button","aria-pressed":!!f.active},o(f,["active","icon","className","children"]),{className:a("tu-action",f.active&&"tu-action--active",f.className)}),t(s,{name:f.icon||"poll",size:18}),f.children)}function E(f){return t("div",{className:a("tu-banner",f.className),role:"status"},t("span",{className:"tu-banner__app",style:{color:"#ffffff"}},f.appLetter||t(s,{name:"map-pin",size:22})),t("div",{className:"tu-banner__text"},t("div",{className:"tu-banner__top"},t("span",{className:"tu-banner__title"},f.title),t("span",{className:"tu-banner__time"},f.time||"now")),t("div",{className:"tu-banner__body"},f.children)))}function M(f){return t("div",{className:a("tu-toast",f.className),role:"status"},t("span",{className:"tu-toast__check"},t(s,{name:"check",size:14})),f.children)}window.TripUp={Icon:s,Button:r,Chip:i,IconButton:l,Avatar:p,StatusBar:h,HomeIndicator:m,SheetGrabber:b,SegmentItem:v,TextField:w,TripCard:L,ItineraryItem:c,PollOption:u,PersonRow:y,TransferRow:k,ActionChip:C,NotificationBanner:E,Toast:M}})();const Vu="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js",Yu=/^[\w-]+\.[\w-]+\.[\w-]+$/;let va=null,mp=!1;const Hs=new Set;async function Ki(){const e=await fetch("/api/mapkit-token",{cache:"no-store"}),t=e.ok?(await e.text()).trim():"";return Yu.test(t)?t:null}function $u(){return va||(va=(async()=>{if(!await Ki())return null;await new Promise((t,n)=>{const a=document.createElement("script");a.src=Vu,a.crossOrigin="anonymous",a.onload=t,a.onerror=n,document.head.appendChild(a)});const{mapkit:e}=window;return e.init({authorizationCallback:t=>Ki().then(n=>n&&t(n))}),e.addEventListener("error",()=>{mp=!0,Hs.forEach(t=>t())}),e})().catch(()=>null),va)}const Gi=e=>(e+180)/360,Xi=e=>.5-Math.log(Math.tan(Math.PI/4+e*Math.PI/360))/(2*Math.PI),qu=40075016686e-3,Qu={europe:{anchors:[[51.5072,-.1276,155,176],[40.4168,-3.7038,91.5,389],[52.52,13.405,316.5,150],[41.9028,12.4964,331,357.5],[48.8566,2.3522,184.5,228],[59.9139,10.7522,268.5,18.5]]},lisbon:{anchors:[[38.7139,-9.1335,194,316],[38.7142,-9.1411,84,311],[38.7209,-9.1356,163,204],[38.711,-9.1278,274,366],[38.7158,-9.1408,101,265]]},maya:{at:[38.7118,-9.1302,125,43],mpp:2.5},me:{at:[38.7163,-9.1316,158,44],mpp:2.5}};function Ku(e,t,n){let a,o,s;if(e.at){const[r,i,l,p]=e.at;a=qu*Math.cos(r*Math.PI/180)/e.mpp,o=Gi(i)-l/a,s=Xi(r)-p/a}else{const r=e.anchors.map(([v,w,L,d])=>({u:Gi(w),v:Xi(v),x:L,y:d})),i=v=>r.reduce((w,L)=>w+L[v],0)/r.length,[l,p,x,h]=["u","v","x","y"].map(i);let m=0,b=0;r.forEach(v=>{m+=(v.u-l)*(v.x-x)+(v.v-p)*(v.y-h),b+=(v.u-l)**2+(v.v-p)**2}),a=m/b,o=l-x/a,s=p-h/a}return[o,s,t/a,n/a]}function Gu({view:e,theme:t,width:n,height:a,children:o}){const s=K.useRef(null),r=K.useRef(null),[i,l]=K.useState(!1);K.useEffect(()=>{let x=!0;const h=()=>{l(!1)};return Hs.add(h),$u().then(m=>{if(!x||!m||mp||!s.current)return;const b=new m.Map(s.current,{isScrollEnabled:!1,isZoomEnabled:!1,isRotationEnabled:!1,showsCompass:m.FeatureVisibility.Hidden,showsScale:m.FeatureVisibility.Hidden,showsZoomControl:!1,showsMapTypeControl:!1,showsUserLocationControl:!1}),v=Ku(Qu[e],s.current.clientWidth,s.current.clientHeight);b.visibleMapRect=new m.MapRect(...v),r.current=b,l(!0)}),()=>{x=!1,Hs.delete(h),r.current&&(r.current.destroy(),r.current=null)}},[e]),K.useEffect(()=>{const x=r.current,h=window.mapkit;x&&h&&(x.colorScheme=t==="light"?h.Map.ColorSchemes.Light:h.Map.ColorSchemes.Dark)},[t,i]);const p={position:"absolute",left:0,top:0,width:n||"100%",height:a||"100%"};return N.jsxs("div",{style:p,children:[o,N.jsx("div",{ref:s,"aria-hidden":"true",style:{position:"absolute",inset:0,pointerEvents:"none",visibility:i?"visible":"hidden"}})]})}window.TripUpMaps={AppleMap:Gu};const Xu=/\{\{\s*([^}]+?)\s*\}\}/g,Ju=/^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/,Zu=new Set(["input","img","br","hr","meta","link","source"]),ef=["onClick","onChange","onInput","onBlur","onFocus","onKeyDown","onKeyUp","onSubmit","onScroll","onPointerDown","onPointerUp","onPointerMove","onPointerCancel","onMouseEnter","onMouseLeave","onDoubleClick"],Ws={class:"className",for:"htmlFor",tabindex:"tabIndex",inputmode:"inputMode",autofocus:"autoFocus",readonly:"readOnly",maxlength:"maxLength",autocomplete:"autoComplete",spellcheck:"spellCheck",enterkeyhint:"enterKeyHint"};ef.forEach(e=>{Ws[e.toLowerCase()]=e});const Ur=e=>e.replace(/-([a-z])/g,(t,n)=>n.toUpperCase());function Ji(e,t){if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(/^-?\d+(\.\d+)?$/.test(e))return Number(e);if(/^(['"]).*\1$/.test(e))return e.slice(1,-1);let n=t;for(const a of e.split(".")){if(n==null)return;n=n[a]}return n}function ja(e){const t=e.match(Ju);if(t){const n=t[1];return a=>Ji(n,a)}return e.includes("{{")?n=>e.replace(Xu,(a,o)=>{const s=Ji(o,n);return s==null||s===!1?"":String(s)}):()=>e}function tf(e){const t={};let n=0,a=0;const o=[];for(let s=0;s<e.length;s++){const r=e[s];r==="("?n++:r===")"?n--:r===";"&&n===0&&(o.push(e.slice(a,s)),a=s+1)}o.push(e.slice(a));for(const s of o){const r=s.indexOf(":");if(r<0)continue;const i=s.slice(0,r).trim(),l=s.slice(r+1).trim();if(!i||l==="")continue;const p=i.startsWith("--")?i:Ur(i.startsWith("-")?i.slice(1).replace(/^[a-z]/,x=>x.toUpperCase()):i);t[p]=l}return t}function hp(e){const t=[];return e.childNodes.forEach(n=>{const a=of(n);a&&t.push(a)}),n=>t.map(a=>a(n))}function Zi(e,t){const n=[];for(const a of e.attributes)a.name.startsWith("hint-")||n.push([t(a.name),a.name==="style"?"style":null,ja(a.value)]);return a=>{const o={};for(const[s,r,i]of n){let l=i(a);r==="style"&&(l=typeof l=="string"?tf(l):l),l!==void 0&&(o[s]=l)}return o}}function nf(e){return Ws[e]?Ws[e]:e.startsWith("aria-")||e.startsWith("data-")?e:e.includes("-")?Ur(e):e}function af(e){return e==="class"?"className":e.startsWith("aria-")||e.startsWith("data-")?e:Ur(e)}function of(e){if(e.nodeType===3){const s=e.nodeValue;if(!s.trim()&&s.includes(`
`))return null;const r=ja(s);return i=>{const l=r(i);return l==null||l===!1||l===!0?null:l}}if(e.nodeType!==1)return null;const t=e.tagName.toLowerCase();if(t==="helmet"||t==="script"||t==="style")return null;const n=hp(e);if(t==="sc-if"){const s=ja(e.getAttribute("value")||"");return r=>s(r)?ye.createElement(ye.Fragment,null,...n(r)):null}if(t==="sc-for"){const s=ja(e.getAttribute("list")||""),r=e.getAttribute("as")||"item";return i=>(s(i)||[]).map((l,p)=>{const x=Object.create(i);x[r]=l,x.$index=p;const h=l&&(l.key??l.id);return ye.createElement(ye.Fragment,{key:h!=null?h+":"+p:p},...n(x))})}if(t==="x-import"){const s=e.getAttribute("component-from-global-scope");e.removeAttribute("component-from-global-scope");const r=Zi(e,af);return i=>{const l=s.split(".").reduce((p,x)=>p&&p[x],window);return l?ye.createElement(l,r(i),...n(i)):null}}const a=Zi(e,nf),o=e.namespaceURI==="http://www.w3.org/2000/svg"?e.tagName:t;return Zu.has(t)?s=>ye.createElement(o,a(s)):s=>ye.createElement(o,a(s),...n(s))}function sf({state:e,vals:t,onState:n}){return K.useEffect(()=>{n&&n(e,t)},[e,n]),null}function rf(e){const t=new DOMParser().parseFromString(e,"text/html"),n=t.querySelector("x-dc"),a=hp(n),o=t.querySelector("script[data-dc-script]").textContent;class s extends ye.Component{render(){const i=this.renderVals();return ye.createElement(ye.Fragment,null,...a(i),ye.createElement(sf,{state:this.state,vals:i,onState:this.props.onState}))}}return new Function("DCLogic","React",o+`
;return Component;`)(s,ye)}const lf=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>TripUp prototype</title>
<script src="./support.js"><\/script>
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="ds/tripup/components/bundle.css">
<script src="ds/tripup/components/bundle.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Mona+Sans:wght@600;700&amp;display=swap">
<style>
body{margin:0}
a{color:var(--accent-text)}a:hover{color:var(--accent-primary)}
</style>
</helmet>
<div data-theme="{{theme}}" style="position: relative; width: 393px; height: 852px; overflow: hidden; background: var(--bg-canvas); color: var(--text-primary); font-family: var(--font-ui); -webkit-font-smoothing: antialiased">

<!-- ============ 01 HOME ============ -->
<sc-if value="{{is.home}}" hint-placeholder-val="{{true}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0; width: 393px; height: 560px; overflow: hidden">
    <x-import component-from-global-scope="TripUpMaps.AppleMap" view="europe" theme="{{theme}}"><img src="/design/6589fb83ce2bd15b4874efc9a5fce456.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover; display: block"></x-import>
    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,15,26,.55) 0%, rgba(10,15,26,0) 38%, rgba(10,15,26,.2) 100%)"></div>
    <div style="position: absolute; left: -20px; top: 335px; width: 150px; height: 150px; border-radius: 50%; background: radial-gradient(circle, rgba(255,107,74,.45) 0%, rgba(255,107,74,0) 70%)"></div>
  </div>
  <div style="position: absolute; inset: 0; z-index: 3; background: var(--bg-canvas); opacity: {{home.dim}}; pointer-events: none; transition: {{home.dimTrans}}"></div>
  <button class="tu-press" aria-label="Roskilde Festival, July" onClick="{{act.otherTrip}}" style="position: absolute; left: 213px; top: 78px; width: 98px; display: flex; flex-direction: column; align-items: center; gap: 6px">
    <img src="/design/a5341dcdc5bacb7a56bd75d60a77dbd2.jpg" alt="" style="width: 52px; height: 52px; border-radius: 16px; object-fit: cover; border: 2.5px solid #ffffff; box-sizing: border-box">
    <span class="t-caption" style="padding: 5px 10px; border-radius: 999px; background: var(--bg-glass); box-shadow: inset 0 0 0 1px var(--border-subtle); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); color: var(--text-primary); white-space: nowrap">Roskilde · Jul</span>
  </button>
  <button class="tu-press" aria-label="Berlin weekend, March" onClick="{{act.otherTrip}}" style="position: absolute; left: 274px; top: 144px; width: 87px; display: flex; flex-direction: column; align-items: center; gap: 6px">
    <img src="/design/447171a9186d91cf1b5d8297ea7b198e.jpg" alt="" style="width: 52px; height: 52px; border-radius: 16px; object-fit: cover; border: 2.5px solid #ffffff; box-sizing: border-box">
    <span class="t-caption" style="padding: 5px 10px; border-radius: 999px; background: var(--bg-glass); box-shadow: inset 0 0 0 1px var(--border-subtle); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); color: var(--text-primary); white-space: nowrap">Berlin · Mar</span>
  </button>
  <button class="tu-press" aria-label="Ski week in Val Thorens, February" onClick="{{act.otherTrip}}" style="position: absolute; left: 189px; top: 266px; width: 121px; display: flex; flex-direction: column; align-items: center; gap: 6px">
    <img src="/design/ad143f9d84c2c14e5ba1ff62ac0015a1.jpg" alt="" style="width: 52px; height: 52px; border-radius: 16px; object-fit: cover; border: 2.5px solid #ffffff; box-sizing: border-box">
    <span class="t-caption" style="padding: 5px 10px; border-radius: 999px; background: var(--bg-glass); box-shadow: inset 0 0 0 1px var(--border-subtle); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); color: var(--text-primary); white-space: nowrap">Val Thorens · Feb</span>
  </button>
  <button class="tu-press" aria-label="Lisbon long weekend, happening now" onClick="{{act.openTrip}}" style="position: absolute; left: 8px; top: 374px; width: 94px; display: flex; flex-direction: column; align-items: center; gap: 6px">
    <img src="/design/c367701906c489000f28144d6101ef21.jpg" alt="" style="width: 72px; height: 72px; border-radius: 20px; object-fit: cover; border: 3px solid var(--accent-primary); box-sizing: border-box; box-shadow: var(--elevation-floating)">
    <span class="t-caption" style="padding: 5px 10px; border-radius: 999px; background: var(--accent-primary); color: var(--text-on-accent); white-space: nowrap; font-weight: 600">Lisbon · Now</span>
  </button>
  <div style="position: absolute; left: 20px; top: 60px">
    <x-import component-from-global-scope="TripUp.Avatar" size="L" initials="AC" name="Ari" color="var(--person-ari)"></x-import>
  </div>
  <button class="tu-press" onClick="{{act.search}}" style="position: absolute; left: 70px; top: 58px; width: 248px; height: 44px; box-sizing: border-box; padding: 0 15px; display: flex; align-items: center; gap: 8px; border-radius: 999px; background: var(--bg-glass); box-shadow: inset 0 0 0 1px var(--border-subtle); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); color: var(--icon-secondary)">
    <x-import component-from-global-scope="TripUp.Icon" name="search" size="{{n.s18}}"></x-import>
    <span class="t-body-m" style="color: var(--text-secondary)">Search trips &amp; places</span>
  </button>
  <div style="position: absolute; left: 333px; top: 60px">
    <x-import component-from-global-scope="TripUp.IconButton" variant="accent" icon="plus" label="Start a new trip" on-click="{{act.newTrip}}"></x-import>
  </div>

  <div style="position: absolute; left: 0; top: {{home.top}}; width: 393px; bottom: 0; z-index: 4; box-sizing: border-box; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 16px; background: var(--bg-canvas); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet); transition: {{home.trans}}">
    <div role="button" tabindex="0" aria-label="{{home.handleAria}}" aria-expanded="{{home.expanded}}" onPointerDown="{{act.dragStart}}" onPointerMove="{{act.dragMove}}" onPointerUp="{{act.dragEnd}}" onPointerCancel="{{act.dragEnd}}" onKeyDown="{{act.handleKey}}" style="flex: none; display: flex; flex-direction: column; gap: 16px; margin: -8px -20px 0; padding: 8px 20px 0; touch-action: none; cursor: grab; user-select: none">
      <div style="margin: 0 -20px; pointer-events: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
      <div style="display: flex; justify-content: space-between; align-items: flex-end; pointer-events: none">
        <h1 class="t-display-m" style="color: var(--text-primary)">Your trips</h1>
        <span class="t-caption" style="color: var(--text-tertiary)">{{home.count}}</span>
      </div>
    </div>
    <div style="display: flex; gap: 8px; align-items: center; flex: none" role="group" aria-label="Filter trips">
      <sc-for list="{{home.filters}}" as="f" hint-placeholder-count="3">
        <button class="tu-press" aria-pressed="{{f.on}}" onClick="{{f.pick}}" style="border-radius: 999px">
          <x-import component-from-global-scope="TripUp.Chip" tone="{{f.tone}}">{{f.label}}</x-import>
        </button>
      </sc-for>
    </div>
    <div class="tu-scroll" style="flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 16px; margin: 0 -20px; padding: 0 20px 4px">
      <sc-for list="{{home.trips}}" as="t" hint-placeholder-count="2">
        <x-import component-from-global-scope="TripUp.TripCard" title="{{t.title}}" subtitle="{{t.sub}}" chip="{{t.chip}}" chip-tone="{{t.tone}}" people="{{t.people}}" photo="{{t.photo}}" on-click="{{t.open}}" style="cursor: pointer"></x-import>
      </sc-for>
      <sc-if value="{{home.empty}}" hint-placeholder-val="{{false}}">
        <p class="t-body-s" style="margin: 0; padding: 24px 0; text-align: center; color: var(--text-secondary)">No trips in 2025. Time to plan one?</p>
      </sc-if>
      <sc-if value="{{home.showPast}}" hint-placeholder-val="{{false}}">
        <span class="t-label tu-fade" style="color: var(--text-tertiary); padding-top: 4px">Past trips</span>
        <sc-for list="{{home.past}}" as="t" hint-placeholder-count="2">
          <div class="tu-fadeup"><x-import component-from-global-scope="TripUp.TripCard" title="{{t.title}}" subtitle="{{t.sub}}" chip="{{t.chip}}" chip-tone="{{t.tone}}" people="{{t.people}}" photo="{{t.photo}}" on-click="{{t.open}}"></x-import></div>
        </sc-for>
      </sc-if>
      <button class="tu-press" onClick="{{act.newTrip}}" style="flex: none; height: 52px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 20px; box-shadow: inset 0 0 0 1px var(--border-strong); color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s18}}"></x-import>
        <span class="t-body-m-strong" style="color: var(--text-secondary)">Plan a new trip</span>
      </button>
    </div>
  </div>
  <div style="position: absolute; left: 0; top: 0; pointer-events: none"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}" mode="onImage"></x-import></div>
</div>
</sc-if>

<!-- ============ 02 TRIP OVERVIEW / 07 ITINERARY UPDATED ============ -->
<sc-if value="{{is.trip}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0; width: 393px; height: 290px; overflow: hidden">
    <img src="/design/c367701906c489000f28144d6101ef21.jpg" alt="Lisbon rooftops in Alfama" style="width: 100%; height: 100%; object-fit: cover; display: block">
    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,15,26,.1) 0%, var(--bg-canvas) 100%)"></div>
  </div>
  <div style="position: absolute; left: 0; top: 0; pointer-events: none"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}" mode="onImage"></x-import></div>
  <div style="position: absolute; left: 20px; top: 56px"><x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="chevron-left" label="Back to home" on-click="{{act.goHome}}"></x-import></div>
  <div style="position: absolute; left: 285px; top: 56px"><x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="share" label="Share trip" on-click="{{act.share}}"></x-import></div>
  <div style="position: absolute; left: 333px; top: 56px"><x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="more" label="More options" on-click="{{act.more}}"></x-import></div>
  <div style="position: absolute; left: 20px; top: 176px; width: 353px; display: flex; flex-direction: column; gap: 6px">
    <span class="t-label" style="color: var(--accent-text)">Day 4 of 4</span>
    <h1 class="t-display-l" style="color: var(--text-primary)">Lisbon long weekend</h1>
    <span class="t-body-s" style="color: var(--text-primary)">22–25 Oct · Casa in Graça</span>
  </div>

  <div class="tu-scroll" style="position: absolute; left: 0; top: 288px; width: 393px; bottom: 0; box-sizing: border-box; padding: 8px 20px 0; display: flex; flex-direction: column; gap: 15px">
    <div style="display: flex; align-items: center; gap: 10px; flex: none">
      <div style="display: flex; align-items: center">
        <sc-for list="{{trip.avatars}}" as="p" hint-placeholder-count="5">
          <span style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="M" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
        </sc-for>
      </div>
      <button class="tu-press" aria-label="Add people" onClick="{{act.openAddPeople}}" style="width: 34px; height: 34px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box; background: var(--bg-elevated); border: 2px dotted var(--accent-primary); color: var(--icon-primary)">
        <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s20}}"></x-import>
      </button>
      <span style="flex: 1"></span>
      <span class="t-body-s" style="color: var(--text-secondary)">{{trip.going}}</span>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
      <span class="t-label" style="color: var(--text-tertiary)">Today · Sun 25 Oct</span>
      <button class="tu-press t-body-s-strong" onClick="{{act.fullItinerary}}" style="color: var(--accent-text)">Full itinerary</button>
    </div>

    <div class="tu-scroll tu-today" style="flex: 1; min-height: 0; margin: -4px -20px 0; padding: 4px 20px 24px; display: flex; flex-direction: column; gap: 8px; -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 18px, #000 calc(100% - 28px), transparent 100%); mask-image: linear-gradient(180deg, transparent 0, #000 18px, #000 calc(100% - 28px), transparent 100%)">
      <sc-for list="{{trip.list}}" as="it" hint-placeholder-count="3">
        <sc-if value="{{it.isDinner}}" hint-placeholder-val="{{false}}">
          <div class="tu-spring" data-now="{{it.isNow}}" style="display: flex; gap: 12px; align-items: center; flex: none">
            <span class="t-body-s-strong" style="width: 40px; flex: none; color: var(--text-secondary)">{{it.time}}</span>
            <div style="position: relative; flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 12px; padding: 12px; border-radius: 14px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
              <button class="tu-press" onClick="{{it.open}}" aria-label="Details for {{it.title}}" style="display: flex; gap: 12px; align-items: center">
                <sc-if value="{{it.hasImg}}" hint-placeholder-val="{{true}}"><img src="{{trip.winImg}}" alt="" style="width: 56px; height: 56px; border-radius: 10px; object-fit: cover; flex: none"></sc-if>
                <sc-if value="{{it.noImg}}" hint-placeholder-val="{{false}}"><span style="width: 56px; height: 56px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="{{it.icon}}" size="{{n.s26}}"></x-import></span></sc-if>
                <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
                  <span class="t-body-m-strong" style="color: var(--text-primary)">{{it.title}}</span>
                  <span class="t-body-s" style="color: var(--text-secondary)">{{it.subtitle}}</span>
                </span>
              </button>
              <div style="display: flex; gap: 8px">
                <x-import component-from-global-scope="TripUp.Button" variant="secondary" size="M" on-click="{{act.directions}}" style="flex: 1">Directions · 12 min</x-import>
                <x-import component-from-global-scope="TripUp.Button" variant="primary" size="M" on-click="{{act.openScan}}" style="flex: 1">Add expense</x-import>
              </div>
            </div>
          </div>
        </sc-if>
        <sc-if value="{{it.plain}}" hint-placeholder-val="{{true}}">
          <div data-now="{{it.isNow}}" style="flex: none">
            <button class="tu-press tu-row" onClick="{{it.open}}" aria-label="Details for {{it.title}}" style="display: block; width: 100%">
              <x-import component-from-global-scope="TripUp.ItineraryItem" state="{{it.state}}" time="{{it.time}}" title="{{it.title}}" subtitle="{{it.subtitle}}" icon="{{it.icon}}"></x-import>
            </button>
          </div>
        </sc-if>
      </sc-for>
      <button class="tu-press" onClick="{{act.openAddToday}}" style="flex: none; height: 48px; margin-left: 52px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 14px; box-shadow: inset 0 0 0 1px var(--border-strong); color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s16}}"></x-import>
        <span class="t-body-s-strong" style="color: var(--text-secondary)">Add to today</span>
      </button>
    </div>

    <div aria-hidden="true" style="height: 84px; flex: none"></div>
  </div>
</div>
</sc-if>

<!-- ============ 04 TRIP CHAT / 06 LIVE POLL ============ -->
<sc-if value="{{is.chat}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 0; top: 54px; width: 393px; box-sizing: border-box; padding: 4px 20px 12px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-canvas); z-index: 2">
    <div style="display: flex; align-items: center; gap: 10px; min-height: 40px">
      <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="chevron-left" label="Back to trip overview" on-click="{{act.openTrip}}"></x-import>
      <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; text-align: center">
        <h1 class="t-title-m" style="color: var(--text-primary)">Chat</h1>
        <span class="t-caption" style="color: var(--text-secondary)">Lisbon long weekend · {{chat.membersLabel}}</span>
      </div>
      <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="map" label="Open the live map" on-click="{{act.liveMap}}"></x-import>
    </div>
  </div>

  <div class="tu-edge tu-scroll" style="position: absolute; left: 0; top: 112px; width: 393px; height: 580px; display: flex; flex-direction: column-reverse">
    <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px 16px">
      <div style="display: flex; justify-content: center; padding-top: 4px"><span class="t-label" style="color: var(--text-tertiary)">Yesterday</span></div>
      <div style="display: flex; justify-content: center">
        <span class="t-caption" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--bg-muted); color: var(--text-secondary)">
          <x-import component-from-global-scope="TripUp.Icon" name="receipt" size="{{n.s14}}"></x-import>Lea added Tuk-tuk tour Alfama · €75.00
        </span>
      </div>
      <div style="display: flex; gap: 8px; align-items: flex-end">
        <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="LM" name="Lea" color="var(--person-lea)"></x-import>
        <div style="display: flex; flex-direction: column; gap: 6px; max-width: 285px">
          <span class="t-caption" style="color: var(--text-tertiary)">Lea · 21:41</span>
          <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 20px 6px; background: var(--bg-muted); color: var(--text-primary)">Tuk-tuk is in expenses, €15 each. Off to fado now</span>
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: flex-end">
        <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="NL" name="Nic" color="var(--person-nic)"></x-import>
        <div style="display: flex; flex-direction: column; gap: 6px; max-width: 285px">
          <span class="t-caption" style="color: var(--text-tertiary)">Nic · 23:58</span>
          <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 20px 6px; background: var(--bg-muted); color: var(--text-primary)">Fado night in Alfama was unreal. Same again next trip?</span>
        </div>
      </div>
      <div style="display: flex; justify-content: center; padding-top: 4px"><span class="t-label" style="color: var(--text-tertiary)">Today · Sun 25 Oct</span></div>
      <div style="display: flex; gap: 8px; align-items: flex-end">
        <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="MO" name="Maya" color="var(--person-maya)"></x-import>
        <div style="display: flex; flex-direction: column; gap: 6px; max-width: 285px">
          <span class="t-caption" style="color: var(--text-tertiary)">Maya · 09:05</span>
          <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 20px 6px; background: var(--bg-muted); color: var(--text-primary)">Breakfast at the house at 9:30. Then LX Factory?</span>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end">
        <span class="t-body-m" style="max-width: 285px; padding: 10px 15px; border-radius: 20px 20px 6px 20px; background: var(--accent-primary); color: var(--text-on-accent)">Yes! Lunch at Time Out Market after</span>
      </div>
      <div style="display: flex; justify-content: center">
        <span class="t-caption" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--bg-muted); color: var(--text-secondary)">
          <x-import component-from-global-scope="TripUp.Icon" name="image" size="{{n.s14}}"></x-import>Jonas added a photo from Time Out Market · 13:20
        </span>
      </div>
      <div style="display: flex; gap: 8px; align-items: flex-end">
        <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="JW" name="Jonas" color="var(--person-jonas)"></x-import>
        <div style="display: flex; flex-direction: column; gap: 6px; width: 238px">
          <span class="t-caption" style="color: var(--text-tertiary)">Jonas · 18:20</span>
          <div style="display: flex; gap: 6px">
            <img src="/design/b1385b7806a76e0e57b7cf2053d22e34.jpg" alt="Group selfie at LX Factory" style="width: 116px; height: 104px; border-radius: 16px; object-fit: cover">
            <img src="/design/98fc37af2fd9166ef75676c8b0c19621.jpg" alt="Drinks at sunset" style="width: 116px; height: 104px; border-radius: 16px; object-fit: cover">
          </div>
          <span style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px 6px 8px; border-radius: 999px; background: var(--bg-muted); color: var(--icon-secondary)">
            <x-import component-from-global-scope="TripUp.Icon" name="album" size="{{n.s14}}"></x-import>
            <span class="t-caption" style="color: var(--text-secondary)">Saved to album · Day 4</span>
          </span>
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: flex-end">
        <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="MO" name="Maya" color="var(--person-maya)"></x-import>
        <div style="display: flex; flex-direction: column; gap: 6px; width: 250px">
          <span class="t-caption" style="color: var(--text-tertiary)">Maya · 18:31</span>
          <button class="tu-press tu-row" onClick="{{act.mapMaya}}" aria-label="Open Maya's live location on the map" style="display: block; width: 100%; border-radius: 16px; overflow: hidden; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
            <div style="position: relative; height: 86px; overflow: hidden">
              <x-import component-from-global-scope="TripUpMaps.AppleMap" view="maya" theme="{{theme}}"><img src="/design/lisbon-live-map.webp" alt="" style="position: absolute; left: -175px; top: -1011px; width: 786px; height: auto; max-width: none"></x-import>
              <span style="position: absolute; left: 107px; top: 25px; width: 36px; height: 36px; border-radius: 50%; background: var(--accent-soft)"></span>
              <span style="position: absolute; left: 118px; top: 36px; width: 14px; height: 14px; box-sizing: border-box; border-radius: 50%; background: var(--accent-primary); border: 2px solid #ffffff"></span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; color: var(--status-success-text)">
              <x-import component-from-global-scope="TripUp.Icon" name="location" size="{{n.s16}}"></x-import>
              <div style="display: flex; flex-direction: column">
                <span class="t-body-s-strong" style="color: var(--text-primary)">Live location</span>
                <span class="t-caption" style="color: var(--text-secondary)">8 min away · sharing for 1 h</span>
              </div>
              <span style="margin-left: auto; display: inline-flex; color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import></span>
            </div>
          </button>
        </div>
      </div>
      <div style="display: flex; gap: 8px; align-items: flex-end">
        <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="LM" name="Lea" color="var(--person-lea)"></x-import>
        <div style="display: flex; flex-direction: column; gap: 6px; max-width: 285px">
          <span class="t-caption" style="color: var(--text-tertiary)">Lea · 18:36</span>
          <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 20px 6px; background: var(--bg-muted); color: var(--text-primary)">Anyone have a dinner idea? Starving</span>
        </div>
      </div>
      <sc-if value="{{chat.renMsg}}" hint-placeholder-val="{{true}}">
        <div class="tu-fade" style="display: flex; justify-content: center">
          <span class="t-caption" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--bg-muted); color: var(--text-secondary)">
            <x-import component-from-global-scope="TripUp.Icon" name="users" size="{{n.s14}}"></x-import>You added Ren to the trip · 18:38
          </span>
        </div>
        <div class="tu-fade" style="display: flex; gap: 8px; align-items: flex-end">
          <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="RT" name="Ren" color="var(--person-ren)"></x-import>
          <div style="display: flex; flex-direction: column; gap: 6px; max-width: 285px">
            <span class="t-caption" style="color: var(--text-tertiary)">Ren · 18:39</span>
            <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 20px 6px; background: var(--bg-muted); color: var(--text-primary)">Hi all! Thanks for having me</span>
          </div>
        </div>
      </sc-if>
      <div style="display: flex; justify-content: flex-end">
        <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 6px 20px; background: var(--accent-primary); color: var(--text-on-accent)">On it, making a poll</span>
      </div>

      <sc-if value="{{poll.exists}}" hint-placeholder-val="{{false}}">
        <div class="tu-pop" style="display: flex; flex-direction: column; gap: 12px; padding: 16px; border-radius: 20px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
          <button class="tu-press" onClick="{{act.openPollSheet}}" aria-label="Open poll details" style="display: flex; flex-direction: column; gap: 12px">
            <span style="display: flex; justify-content: space-between; align-items: center; width: 100%">
              <span style="display: inline-flex; align-items: center; gap: 6px; color: var(--poll-primary)">
                <x-import component-from-global-scope="TripUp.Icon" name="poll" size="{{n.s16}}"></x-import>
                <span class="t-caption" style="color: var(--text-secondary)">Poll by Ari</span>
              </span>
              <span style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; background: {{poll.status.bg}}">
                <span style="width: 7px; height: 7px; border-radius: 50%; background: {{poll.status.dot}}"></span>
                <span class="t-caption" style="color: {{poll.status.color}}">{{poll.status.text}}</span>
              </span>
            </span>
            <span class="t-title-l" style="color: var(--text-primary)">{{poll.question}}</span>
            <span style="display: flex; align-items: center; gap: 8px; width: 100%">
              <span style="display: inline-flex; align-items: center">
                <sc-for list="{{poll.voterStack}}" as="p" hint-placeholder-count="5">
                  <span style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="S" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
                </sc-for>
              </span>
              <span class="t-body-s" style="flex: 1; color: var(--text-secondary)">{{poll.votedText}}</span>
            </span>
          </button>
          <sc-for list="{{poll.options}}" as="o" hint-placeholder-count="3">
            <button class="tu-press tu-row" onClick="{{o.vote}}" aria-pressed="{{o.mine}}" aria-label="{{o.aria}}" style="display: flex; flex-direction: column; gap: 10px; padding: 14px; border-radius: 16px; background: {{o.bg}}; box-shadow: {{o.ring}}; width: 100%; box-sizing: border-box">
              <span style="display: flex; align-items: center; gap: 8px; min-height: 24px; width: 100%">
                <span class="t-body-m-strong" style="flex: 1; min-width: 0; color: var(--text-primary)">{{o.name}}</span>
                <sc-if value="{{o.mine}}" hint-placeholder-val="{{false}}"><span class="tu-checkpop" style="display: inline-flex; color: var(--poll-primary)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s16}}"></x-import></span></sc-if>
                <span style="display: inline-flex; align-items: center">
                  <sc-for list="{{o.voters}}" as="p" hint-placeholder-count="2">
                    <span class="tu-join" style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="S" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
                  </sc-for>
                </span>
                <sc-if value="{{o.showCount}}" hint-placeholder-val="{{false}}"><span class="t-numeric-m" style="color: var(--text-primary)">{{o.count}}</span></sc-if>
              </span>
              <span style="display: block; height: 6px; border-radius: 999px; background: var(--bg-muted); overflow: hidden; width: 100%">
                <span class="tu-bar" style="display: block; height: 100%; width: {{o.pct}}; border-radius: 999px; background: var(--poll-primary)"></span>
              </span>
            </button>
          </sc-for>
        </div>
      </sc-if>

      <sc-if value="{{chat.leaMsg}}" hint-placeholder-val="{{false}}">
        <div class="tu-fade" style="display: flex; gap: 8px; align-items: flex-end">
          <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="LM" name="Lea" color="var(--person-lea)"></x-import>
          <div style="display: flex; flex-direction: column; gap: 6px; max-width: 285px">
            <span class="t-caption" style="color: var(--text-tertiary)">Lea · 18:52</span>
            <span class="t-body-m" style="padding: 10px 15px; border-radius: 20px 20px 20px 6px; background: var(--bg-muted); color: var(--text-primary)">Taberna!! Been wanting to go</span>
          </div>
        </div>
      </sc-if>
      <sc-if value="{{chat.decidedMsg}}" hint-placeholder-val="{{false}}">
        <div class="tu-fade" style="display: flex; justify-content: center">
          <span class="t-caption" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--status-success-soft); color: var(--status-success-text)">
            <x-import component-from-global-scope="TripUp.Icon" name="calendar" size="{{n.s14}}"></x-import>{{chat.decidedText}}
          </span>
        </div>
      </sc-if>
      <sc-for list="{{chat.msgs}}" as="m" hint-placeholder-count="0">
        <sc-if value="{{m.isText}}" hint-placeholder-val="{{true}}">
          <div class="tu-fade" style="display: flex; justify-content: flex-end">
            <span class="t-body-m" style="max-width: 285px; padding: 10px 15px; border-radius: 20px 20px 6px 20px; background: var(--accent-primary); color: var(--text-on-accent)">{{m.text}}</span>
          </div>
        </sc-if>
        <sc-if value="{{m.isLoc}}" hint-placeholder-val="{{false}}">
          <div class="tu-spring" style="display: flex; justify-content: flex-end">
            <button class="tu-press tu-row" onClick="{{act.liveMap}}" aria-label="Open your live location on the map" style="display: block; width: 250px; border-radius: 16px 16px 6px 16px; overflow: hidden; background: var(--accent-primary)">
              <div style="position: relative; height: 86px; overflow: hidden">
                <x-import component-from-global-scope="TripUpMaps.AppleMap" view="me" theme="{{theme}}"><img src="/design/lisbon-live-map.webp" alt="" style="position: absolute; left: -382px; top: -686px; width: 786px; height: auto; max-width: none"></x-import>
                <span class="tu-live" style="position: absolute; left: 150px; top: 36px; width: 16px; height: 16px; box-sizing: border-box; border-radius: 50%; background: var(--person-ari); border: 2px solid #ffffff"></span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; color: var(--text-on-accent)">
                <x-import component-from-global-scope="TripUp.Icon" name="location" size="{{n.s16}}"></x-import>
                <div style="display: flex; flex-direction: column">
                  <span class="t-body-s-strong" style="color: var(--text-on-accent)">Your live location</span>
                  <span class="t-caption" style="color: var(--text-on-accent); opacity: .75">{{m.locSub}}</span>
                </div>
                <span style="margin-left: auto; display: inline-flex; color: var(--text-on-accent)"><x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import></span>
              </div>
            </button>
          </div>
        </sc-if>
      </sc-for>
    </div>
  </div>

  <div class="tu-hscroll" role="toolbar" aria-label="Quick actions" style="position: absolute; left: 0; top: 700px; width: 393px; box-sizing: border-box; padding: 0 20px; display: flex; gap: 8px">
    <x-import component-from-global-scope="TripUp.ActionChip" icon="poll" on-click="{{act.openNewPoll}}">Poll</x-import>
    <x-import component-from-global-scope="TripUp.ActionChip" icon="camera" on-click="{{act.photo}}">Photo</x-import>
    <x-import component-from-global-scope="TripUp.ActionChip" icon="location" on-click="{{act.shareLocation}}">Location</x-import>
    <button type="button" class="tu-action" aria-pressed="false" onClick="{{act.openExpense}}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display: block; flex: none"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>Expense</button>
  </div>
  <div style="position: absolute; left: 20px; top: 752px; width: 353px; height: 48px; box-sizing: border-box; padding: 0 4px 0 18px; display: flex; align-items: center; gap: 8px; border-radius: 999px; background: var(--bg-muted)">
    <label for="tu-composer" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Message the group</label>
    <input id="tu-composer" class="tu-input" placeholder="Message the group" value="{{chat.draft}}" onChange="{{act.onDraft}}" onKeyDown="{{act.onDraftKey}}">
    <x-import component-from-global-scope="TripUp.IconButton" variant="accent" icon="send" label="Send message" on-click="{{act.sendMsg}}"></x-import>
  </div>
</div>
</sc-if>

<!-- ============ 06a LOCK SCREEN (Nic's phone) ============ -->
<sc-if value="{{is.lock}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0; background: linear-gradient(180deg, #291f33 0%, #121424 55%, #0a0f1a 100%); color: #f7f6f2">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}" mode="onImage"></x-import></div>
  <div style="position: absolute; left: 0; right: 0; top: 84px; display: flex; flex-direction: column; align-items: center">
    <span class="t-body-m-strong" style="opacity: .8">Sunday 25 October</span>
    <span style="font-family: var(--font-display); font-size: 88px; line-height: 96px; font-weight: 700; letter-spacing: -2px">{{clock}}</span>
    <span class="t-caption" style="margin-top: 8px; padding: 4px 10px; border-radius: 999px; background: rgba(255,255,255,.1)">Nic's phone</span>
  </div>
  <div class="tu-pop" style="position: absolute; left: 16px; top: 300px; width: 361px; display: flex; flex-direction: column; gap: 10px">
    <div style="display: flex; flex-direction: column; gap: 6px; padding: 14px; border-radius: 22px; background: rgba(28,36,54,.86); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); box-shadow: inset 0 0 0 1px rgba(255,255,255,.08)">
      <div style="display: flex; align-items: center; gap: 8px">
        <span style="width: 29px; height: 29px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff9e73, #f25a3a); color: #0b0f1a"><x-import component-from-global-scope="TripUp.Icon" name="map-pin" size="{{n.s18}}"></x-import></span>
        <span class="t-label" style="flex: 1; color: #9097a6">TripUp</span>
        <span class="t-caption" style="color: #8993a7">now</span>
      </div>
      <span class="t-body-m-strong">Ari started a poll</span>
      <span class="t-body-s" style="color: #9097a6">{{lock.body}}</span>
    </div>
    <div style="display: flex; flex-direction: column; border-radius: 22px; overflow: hidden; background: rgba(28,36,54,.86); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); box-shadow: inset 0 0 0 1px rgba(255,255,255,.08)">
      <sc-for list="{{lock.actions}}" as="a" hint-placeholder-count="3">
        <button class="tu-press" onClick="{{a.vote}}" style="display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-top: {{a.border}}; color: #9097a6">
          <span class="t-body-m" style="flex: 1; color: #f7f6f2">{{a.label}}</span>
          <x-import component-from-global-scope="TripUp.Icon" name="poll" size="{{n.s18}}"></x-import>
        </button>
      </sc-for>
      <button class="tu-press" onClick="{{act.lockOpen}}" style="display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-top: 1px solid rgba(255,255,255,.08); color: #fe7657">
        <span class="t-body-m" style="flex: 1">Open poll in TripUp</span>
        <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s18}}"></x-import>
      </button>
    </div>
  </div>
</div>
</sc-if>

<!-- ============ 08 ADD EXPENSE ============ -->
<sc-if value="{{is.expense}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 0; top: 58px; width: 393px; bottom: 34px; box-sizing: border-box; padding: 4px 20px 0; display: flex; flex-direction: column; gap: 10px">
    <div style="position: relative; height: 40px; display: flex; align-items: center; justify-content: space-between; flex: none">
      <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="x" label="Discard and go back" on-click="{{act.discardExpense}}"></x-import>
      <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; pointer-events: none">
        <h1 class="t-title-m" style="color: var(--text-primary)">Add expense</h1>
        <span class="t-caption" style="color: var(--text-secondary); white-space: nowrap">{{exp.place}}</span>
      </div>
      <span style="width: 40px; flex: none"></span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 4px 0; flex: none">
      <span class="t-numeric-xl" style="color: var(--text-primary)">€258.00</span>
      <div style="display: flex; gap: 8px; align-items: center">
        <button class="tu-press" onClick="{{act.openWhoPaid}}" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px 6px 6px; border-radius: 999px; background: var(--bg-muted); color: var(--icon-secondary)">
          <x-import component-from-global-scope="TripUp.Avatar" size="S" initials="{{exp.payerI}}" color="{{exp.payerC}}"></x-import>
          <span class="t-body-s-strong" style="color: var(--text-primary)">{{exp.paidBy}}</span>
          <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s14}}"></x-import>
        </button>
        <button class="tu-press" onClick="{{act.openScan}}" aria-label="Scan the receipt again" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px 6px 10px; border-radius: 999px; background: var(--status-success-soft); color: var(--status-success-text)">
          <x-import component-from-global-scope="TripUp.Icon" name="scan" size="{{n.s14}}"></x-import>
          <span class="t-body-s-strong">Receipt scanned</span>
        </button>
      </div>
    </div>
    <div role="tablist" aria-label="Split mode" style="display: flex; gap: 4px; padding: 4px; border-radius: 14px; background: var(--bg-muted); flex: none">
      <x-import component-from-global-scope="TripUp.SegmentItem" selected="{{exp.equal}}" on-click="{{act.splitEqual}}">Equally</x-import>
      <x-import component-from-global-scope="TripUp.SegmentItem" selected="{{exp.byItem}}" on-click="{{act.splitItem}}">By item</x-import>
    </div>
    <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 8px">
      <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
        <span class="t-label" style="color: var(--text-tertiary)">From your receipt</span>
        <span class="t-caption" style="color: var(--text-tertiary)">{{exp.hint}}</span>
      </div>
      <div class="tu-receipt" style="position: relative; flex: 1; min-height: 0">
        <div class="tu-scroll {{exp.stagger}}" style="position: absolute; inset: 0; padding-bottom: 12px; box-sizing: border-box">
          <sc-for list="{{exp.items}}" as="it" hint-placeholder-count="5">
            <button class="tu-press tu-row" onClick="{{it.open}}" style="display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; padding: 11px 14px; border-top: {{it.border}}">
              <span class="t-body-s-strong" style="width: 32px; height: 32px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: {{it.qtyBg}}; color: {{it.qtyColor}}">{{it.qty}}</span>
              <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
                <span class="t-body-m-strong" style="color: var(--text-primary)">{{it.name}}</span>
                <span class="t-caption" style="color: {{it.capColor}}">{{it.caption}}</span>
              </span>
              <span class="t-numeric-m" style="color: var(--text-primary)">{{it.amount}}</span>
            </button>
          </sc-for>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; padding: 15px; border-radius: 16px; background: var(--bg-muted); flex: none" aria-live="polite">
      <sc-for list="{{exp.groups}}" as="g" hint-placeholder-count="2">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="display: inline-flex; align-items: center">
            <sc-for list="{{g.avatars}}" as="p" hint-placeholder-count="4">
              <span style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="S" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
            </sc-for>
          </span>
          <span class="t-body-s-strong" style="color: var(--text-primary)">{{g.label}}</span>
        </div>
      </sc-for>
    </div>
    <div style="padding-bottom: 6px; flex: none">
      <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.saveExpense}}">Save expense</x-import>
    </div>
  </div>
</div>
</sc-if>

<!-- ============ 09 EXPENSES ============ -->
<sc-if value="{{is.expenses}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 0; top: 58px; width: 393px; bottom: 0; box-sizing: border-box; padding: 4px 20px 0; display: flex; flex-direction: column; gap: 10px">
    <div style="display: flex; align-items: center; justify-content: space-between; flex: none">
      <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="chevron-left" label="Back to trip overview" on-click="{{act.openTrip}}"></x-import>
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center">
        <h1 class="t-title-m" style="color: var(--text-primary)">Expenses</h1>
        <span class="t-caption" style="color: var(--text-secondary)">{{exps.spentLabel}}</span>
      </div>
      <x-import component-from-global-scope="TripUp.IconButton" variant="accent" icon="plus" label="Add expense" on-click="{{act.openExpense}}"></x-import>
    </div>
    <div class="tu-pop" style="position: relative; margin-top: 10px; overflow: hidden; display: flex; flex-direction: column; gap: 4px; padding: 16px 20px; border-radius: 20px; background: linear-gradient(135deg, rgba(255,107,74,.42) 0%, rgba(194,71,122,.3) 55%, rgba(110,92,240,.42) 100%), url(/design/c367701906c489000f28144d6101ef21.jpg) center 40% / cover no-repeat; box-shadow: var(--elevation-floating); color: #f7f6f2; flex: none">
      <div style="position: absolute; inset: 0; background: rgba(11,15,26,.5)"></div>
      <span class="t-body-m" style="position: relative">{{exps.balLabel}}</span>
      <div style="position: relative; display: flex; align-items: center; gap: 12px">
        <span class="t-numeric-xl" style="flex: 1; min-width: 0">{{exps.balValue}}</span>
        <sc-if value="{{exps.owes}}" hint-placeholder-val="{{true}}">
          <x-import component-from-global-scope="TripUp.Button" variant="primary" size="M" on-click="{{act.openSettle}}">Settle up</x-import>
        </sc-if>
      </div>
      <sc-if value="{{exps.saved}}" hint-placeholder-val="{{true}}">
        <span class="t-caption" style="position: relative; align-self: flex-start; padding: 4px 10px; border-radius: 999px; background: rgba(255,255,255,.14)">Before this expense you owed €169.60</span>
      </sc-if>
    </div>
    <div class="tu-edge tu-scroll" style="flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 16px; padding: 6px 0 40px">
      <sc-for list="{{exps.days}}" as="d" hint-placeholder-count="3">
        <div style="display: flex; flex-direction: column; gap: 8px">
          <span class="t-label" style="color: var(--text-tertiary)">{{d.day}}</span>
          <div style="border-radius: 20px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
            <sc-for list="{{d.rows}}" as="r" hint-placeholder-count="1">
              <button class="tu-press tu-row {{r.cls}}" onClick="{{r.open}}" aria-label="{{r.aria}}" style="width: 100%; display: flex; align-items: center; gap: 12px; padding: 12px 10px 12px 14px; border-top: {{r.border}}">
                <span style="width: 40px; height: 40px; flex: none; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="{{r.icon}}" size="{{n.s20}}"></x-import></span>
                <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
                  <span class="t-body-m-strong" style="color: var(--text-primary)">{{r.title}}</span>
                  <span class="t-body-s" style="color: var(--text-secondary)">{{r.sub}}</span>
                </span>
                <span style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px">
                  <span class="t-caption" style="color: {{r.lblColor}}">{{r.lbl}}</span>
                  <span class="t-body-m-strong" style="color: var(--text-primary)">{{r.amt}}</span>
                </span>
                <span style="display: inline-flex; color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import></span>
              </button>
            </sc-for>
          </div>
        </div>
      </sc-for>
    </div>
  </div>
</div>
</sc-if>

<!-- ============ 10 ALL SQUARED UP ============ -->
<sc-if value="{{is.squared}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0; overflow: hidden">
  <div aria-hidden="true" style="position: absolute; left: 0; top: 0; width: 393px; height: 520px; background: url(/design/c367701906c489000f28144d6101ef21.jpg) center top / cover no-repeat; opacity: .32; -webkit-mask-image: linear-gradient(180deg, #000 0%, rgba(0,0,0,.6) 45%, transparent 100%); mask-image: linear-gradient(180deg, #000 0%, rgba(0,0,0,.6) 45%, transparent 100%)"></div>
  <div style="position: absolute; left: -64px; top: -60px; width: 520px; height: 520px; border-radius: 50%; background: radial-gradient(circle, rgba(46,196,182,.35) 0%, rgba(139,124,246,.12) 45%, rgba(139,124,246,0) 70%)"></div>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 60px; top: 120px; width: 8px; height: 14px; border-radius: 2px; background: var(--accent-primary); transform: rotate(-24deg)"></span>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 320px; top: 96px; width: 8px; height: 14px; border-radius: 2px; background: var(--status-warning); transform: rotate(18deg)"></span>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 96px; top: 250px; width: 8px; height: 14px; border-radius: 2px; background: var(--poll-primary); transform: rotate(40deg)"></span>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 300px; top: 236px; width: 8px; height: 14px; border-radius: 2px; background: #00c8b3; transform: rotate(-35deg)"></span>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 40px; top: 330px; width: 8px; height: 14px; border-radius: 2px; background: var(--status-warning); transform: rotate(12deg)"></span>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 350px; top: 320px; width: 8px; height: 14px; border-radius: 2px; background: var(--accent-primary); transform: rotate(-12deg)"></span>
  <span class="tu-confetti" aria-hidden="true" style="position: absolute; left: 180px; top: 80px; width: 8px; height: 14px; border-radius: 2px; background: var(--poll-primary); transform: rotate(28deg)"></span>
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 333px; top: 62px; z-index: 2"><x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="x" label="Close and go back to the trip" on-click="{{act.openTrip}}"></x-import></div>
  <div style="position: absolute; left: 0; top: 110px; width: 393px; bottom: 0; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; align-items: center; gap: 20px">
    <div class="tu-badge" style="width: 112px; height: 112px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--status-success-soft)">
      <span class="tu-ripple" style="width: 80px; height: 80px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--status-success); color: var(--text-on-accent); box-shadow: 0 12px 32px rgba(46,196,182,.35)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s40}}"></x-import></span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center">
      <h1 class="t-display-l" style="color: var(--text-primary)">All squared up!</h1>
      <p class="t-body-m" style="margin: 0; color: var(--text-secondary)">Everyone's paid. Lisbon is officially settled.</p>
    </div>
    <div style="display: flex; align-items: center; gap: 8px">
      <span style="display: inline-flex; align-items: center">
        <sc-for list="{{sq.avatars}}" as="p" hint-placeholder-count="6">
          <span style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="M" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
        </sc-for>
      </span>
      <span class="t-body-s" style="color: var(--text-secondary)">{{sq.notified}}</span>
    </div>
    <div style="display: flex; gap: 8px; width: 100%">
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 15px 8px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
        <span class="t-numeric-m" style="color: var(--text-primary)">{{sq.spent}}</span>
        <span class="t-caption" style="color: var(--text-secondary)">spent</span>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 15px 8px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
        <span class="t-numeric-m" style="color: var(--text-primary)">{{sq.payments}}</span>
        <span class="t-caption" style="color: var(--text-secondary)">payments</span>
      </div>
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 15px 8px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
        <span class="t-numeric-m" style="color: var(--text-primary)">4 days</span>
        <span class="t-caption" style="color: var(--text-secondary)">together</span>
      </div>
    </div>
    <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 12px; padding: 12px; border-radius: 20px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
      <div style="display: flex; gap: 6px">
        <img src="/design/b1385b7806a76e0e57b7cf2053d22e34.jpg" alt="Group selfie" style="flex: 1; min-width: 0; height: 96px; border-radius: 12px; object-fit: cover">
        <img src="/design/98fc37af2fd9166ef75676c8b0c19621.jpg" alt="Drinks at sunset" style="flex: 1; min-width: 0; height: 96px; border-radius: 12px; object-fit: cover">
        <img src="/design/98a51e49375369e298b8a0295e21b222.jpg" alt="Beach day" style="flex: 1; min-width: 0; height: 96px; border-radius: 12px; object-fit: cover">
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <div style="flex: 1; display: flex; flex-direction: column; gap: 2px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">Your Lisbon recap</span>
          <span class="t-caption" style="color: var(--text-secondary)">52 photos · 14 places · 4 days</span>
        </div>
        <x-import component-from-global-scope="TripUp.Button" variant="secondary" size="M" on-click="{{act.shareRecap}}">Share</x-import>
      </div>
    </div>
    <div style="flex: 1"></div>
    <div style="width: 100%"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.openTrip}}">Back to trip</x-import></div>
  </div>
</div>
</sc-if>

<!-- ============ SEARCH ============ -->
<sc-if value="{{is.search}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 0; top: 58px; width: 393px; bottom: 0; box-sizing: border-box; padding: 4px 20px 0; display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 8px; flex: none">
      <div style="flex: 1; min-width: 0"><x-import component-from-global-scope="TripUp.TextField" placeholder="Search trips, places, plans" aria-label="Search trips, places, plans and expenses" value="{{sr.q}}" on-change="{{act.onSearch}}" auto-focus="{{yes}}" focused="{{yes}}"></x-import></div>
      <x-import component-from-global-scope="TripUp.Button" variant="ghost" size="M" on-click="{{act.goHome}}">Cancel</x-import>
    </div>
    <sc-if value="{{sr.empty}}" hint-placeholder-val="{{true}}">
      <div class="tu-fade" style="display: flex; flex-direction: column; gap: 10px; flex: none">
        <span class="t-label" style="color: var(--text-tertiary)">Recent</span>
        <div style="display: flex; flex-wrap: wrap; gap: 8px">
          <sc-for list="{{sr.recent}}" as="r" hint-placeholder-count="4">
            <button class="tu-press" onClick="{{r.pick}}" style="border-radius: 999px"><x-import component-from-global-scope="TripUp.Chip" tone="default" icon="clock">{{r.label}}</x-import></button>
          </sc-for>
        </div>
      </div>
    </sc-if>
    <div class="tu-edge tu-scroll tu-stagger" style="flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 16px; padding-bottom: 40px">
      <sc-for list="{{sr.groups}}" as="g" hint-placeholder-count="2">
        <div style="display: flex; flex-direction: column; gap: 8px">
          <span class="t-label" style="color: var(--text-tertiary)">{{g.label}}</span>
          <div style="border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
            <sc-for list="{{g.rows}}" as="r" hint-placeholder-count="2">
              <button class="tu-press tu-row" onClick="{{r.open}}" style="display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; padding: 12px 14px; border-top: {{r.border}}; color: var(--icon-secondary)">
                <span style="width: 36px; height: 36px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted)"><x-import component-from-global-scope="TripUp.Icon" name="{{r.icon}}" size="{{n.s18}}"></x-import></span>
                <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
                  <span class="t-body-m-strong" style="color: var(--text-primary)">{{r.title}}</span>
                  <span class="t-body-s" style="color: var(--text-secondary)">{{r.sub}}</span>
                </span>
                <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import>
              </button>
            </sc-for>
          </div>
        </div>
      </sc-for>
      <sc-if value="{{sr.none}}" hint-placeholder-val="{{false}}">
        <p class="t-body-s" style="margin: 0; padding: 24px 0; text-align: center; color: var(--text-secondary)">{{sr.noneText}}</p>
      </sc-if>
    </div>
  </div>
</div>
</sc-if>

<!-- ============ FULL ITINERARY ============ -->
<sc-if value="{{is.itin}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 0; top: 58px; width: 393px; bottom: 0; box-sizing: border-box; padding: 4px 20px 0; display: flex; flex-direction: column; gap: 14px">
    <div style="display: flex; align-items: center; gap: 10px; flex: none">
      <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="chevron-left" label="Back to trip overview" on-click="{{act.openTrip}}"></x-import>
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center">
        <h1 class="t-title-m" style="color: var(--text-primary)">Itinerary</h1>
        <span class="t-caption" style="color: var(--text-secondary)">Lisbon long weekend · 22–25 Oct</span>
      </div>
      <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="map" label="Open the live map" on-click="{{act.liveMap}}"></x-import>
    </div>
    <div style="display: flex; gap: 8px; flex: none" role="tablist" aria-label="Day">
      <sc-for list="{{itv.days}}" as="d" hint-placeholder-count="4">
        <button class="tu-press" role="tab" aria-selected="{{d.on}}" onClick="{{d.pick}}" style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 0; border-radius: 14px; background: {{d.bg}}">
          <span class="t-caption" style="color: {{d.c1}}">{{d.lbl}}</span>
          <span class="t-numeric-m" style="color: {{d.c2}}">{{d.d}}</span>
        </button>
      </sc-for>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
      <span class="t-label" style="color: var(--text-tertiary)">{{itv.label}}</span>
      <span style="display: flex; align-items: center; gap: 12px">
        <span class="t-caption" style="color: var(--text-tertiary)">{{itv.count}}</span>
        <button class="tu-press t-body-s-strong" aria-pressed="{{itv.editing}}" onClick="{{act.toggleItinEdit}}" style="height: 28px; padding: 0 12px; border-radius: 999px; background: {{itv.editBg}}; color: {{itv.editColor}}">{{itv.editLabel}}</button>
      </span>
    </div>
    <sc-if value="{{itv.editing}}" hint-placeholder-val="{{false}}">
      <span class="t-caption tu-fade" style="flex: none; margin-top: -6px; color: var(--text-secondary)">{{itv.editHint}}</span>
      <div class="tu-edge tu-scroll" style="flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 8px; padding-bottom: 40px">
        <sc-for list="{{itv.items}}" as="it" hint-placeholder-count="5">
          <div class="tu-erow {{it.dragCls}}" style="transform: translateY({{it.dy}}px)">
            <div class="tu-itin tu-itin--{{it.state}}">
              <span class="tu-itin__time">{{it.time}}</span>
              <div class="tu-itin__card" style="padding: 8px 4px 8px 12px; gap: 10px">
                <button class="tu-press tu-minus" onClick="{{it.remove}}" aria-label="Remove {{it.title}}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 12h12"></path></svg></button>
                <input class="tu-input tu-rename" value="{{it.title}}" placeholder="{{it.orig}}" aria-label="Rename {{it.orig}}" onChange="{{it.rename}}" onBlur="{{act.cleanRename}}">
                <sc-if value="{{it.canDrag}}" hint-placeholder-val="{{true}}">
                  <span class="tu-grip" role="button" aria-label="Drag to move {{it.title}}" onPointerDown="{{it.dragStart}}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01"></path></svg></span>
                </sc-if>
                <sc-if value="{{it.locked}}" hint-placeholder-val="{{false}}">
                  <span class="tu-grip" title="Done activities stay where they happened" style="cursor: default; opacity: .45"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s16}}"></x-import></span>
                </sc-if>
              </div>
            </div>
          </div>
        </sc-for>
      </div>
    </sc-if>
    <sc-if value="{{itv.notEditing}}" hint-placeholder-val="{{true}}">
    <div class="tu-scroll tu-stagger" style="flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 8px; padding-bottom: 40px">
      <sc-for list="{{itv.items}}" as="it" hint-placeholder-count="5">
        <button class="tu-press tu-row" onClick="{{it.tap}}" style="display: block; width: 100%">
          <x-import component-from-global-scope="TripUp.ItineraryItem" state="{{it.state}}" time="{{it.time}}" title="{{it.title}}" subtitle="{{it.subtitle}}" icon="{{it.icon}}"></x-import>
        </button>
      </sc-for>
      <button class="tu-press" onClick="{{act.openAddActivity}}" style="flex: none; height: 48px; margin-left: 52px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 14px; box-shadow: inset 0 0 0 1px var(--border-strong); color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s16}}"></x-import>
        <span class="t-body-s-strong" style="color: var(--text-secondary)">{{itv.addTitle}}</span>
      </button>
    </div>
    </sc-if>
  </div>
</div>
</sc-if>

<!-- ============ LIVE MAP ============ -->
<sc-if value="{{is.map}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0; background: var(--map-land)">
  <x-import component-from-global-scope="TripUpMaps.AppleMap" view="lisbon" theme="{{theme}}" width="393px" height="520px"><div style="position: absolute; inset: 0; overflow: hidden"><img src="/design/lisbon-live-map.webp" alt="Map of central Lisbon" style="position: absolute; left: 0; top: -143px; width: 393px; height: auto; display: block"></div></x-import>
  <div style="position: absolute; left: 270px; top: 222px; z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 4px; transform: translate(-50%, -100%)">
    <span style="width: 36px; height: 36px; border-radius: 50% 50% 50% 4px; transform: rotate(-45deg); display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); box-shadow: var(--elevation-floating)"><span style="transform: rotate(45deg); display: inline-flex; color: var(--text-on-accent)"><x-import component-from-global-scope="TripUp.Icon" name="map-pin" size="{{n.s18}}"></x-import></span></span>
  </div>
  <span class="t-caption" style="position: absolute; left: 270px; top: 228px; z-index: 3; transform: translateX(-50%); padding: 3px 8px; border-radius: 999px; background: var(--bg-glass); backdrop-filter: blur(24px); color: var(--text-primary); white-space: nowrap">Casa in Graça</span>
  <sc-for list="{{mp.placePins}}" as="p" hint-placeholder-count="1">
    <div class="tu-join" style="position: absolute; left: {{p.x}}; top: {{p.y}}; z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 4px; translate: -50% -50%">
      <span style="width: 30px; height: 30px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: {{p.bg}}; color: #0b0f1a; box-shadow: var(--elevation-floating)"><x-import component-from-global-scope="TripUp.Icon" name="utensils" size="{{n.s16}}"></x-import></span>
      <span class="t-caption" style="padding: 3px 8px; border-radius: 999px; background: var(--bg-glass); backdrop-filter: blur(24px); color: var(--text-primary); white-space: nowrap">{{p.name}}</span>
    </div>
  </sc-for>
  <sc-for list="{{mp.people}}" as="p" hint-placeholder-count="4">
    <button class="tu-press" onClick="{{p.pick}}" aria-label="{{p.name}}, {{p.away}}" aria-pressed="{{p.sel}}" style="position: absolute; left: {{p.x}}; top: {{p.y}}; z-index: {{p.z}}; margin: -20px 0 0 -20px; border-radius: 50%">
      <span class="tu-live" style="display: inline-flex; border-radius: 50%; transform: {{p.scale}}; transition: transform .3s cubic-bezier(.34,1.45,.55,1)"><x-import component-from-global-scope="TripUp.Avatar" size="L" initials="{{p.i}}" name="{{p.name}}" color="{{p.c}}"></x-import></span>
    </button>
  </sc-for>
  <sc-if value="{{mp.showYou}}" hint-placeholder-val="{{false}}">
    <div class="tu-join" style="position: absolute; left: 270px; top: 274px; z-index: 5; margin: -12px 0 0 -12px">
      <span class="tu-live" style="display: block; width: 24px; height: 24px; box-sizing: border-box; border-radius: 50%; background: var(--accent-primary); border: 3px solid #ffffff; box-shadow: var(--elevation-floating)"></span>
    </div>
  </sc-if>
  <div aria-hidden="true" style="position: absolute; left: 0; top: 0; width: 393px; height: 140px; z-index: 7; pointer-events: none; background: linear-gradient(180deg, var(--bg-canvas) 0%, var(--bg-canvas) 45%, transparent 100%)"></div>
  <div style="position: absolute; left: 0; top: 0; z-index: 8; pointer-events: none"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div style="position: absolute; left: 20px; top: 62px; width: 353px; z-index: 8; display: flex; align-items: center; gap: 10px">
    <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="chevron-left" label="Back" on-click="{{act.mapBack}}"></x-import>
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center">
      <h1 class="t-title-m" style="color: var(--text-primary)">Live map</h1>
      <span class="t-caption" style="display: inline-flex; align-items: center; gap: 6px; color: var(--text-secondary)"><span class="tu-live" style="width: 6px; height: 6px; border-radius: 50%; background: var(--status-success)"></span>Lisbon long weekend · {{mp.count}}</span>
    </div>
    <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="location" label="Center on the house" on-click="{{act.recenter}}"></x-import>
  </div>

  <div style="position: absolute; left: 0; top: 470px; width: 393px; bottom: 0; z-index: 9; box-sizing: border-box; padding: 8px 20px 34px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
    <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
    <div style="display: flex; justify-content: space-between; align-items: flex-end; flex: none">
      <h2 class="t-title-m" style="color: var(--text-primary)">Who's sharing</h2>
      <span class="t-caption" style="color: var(--text-tertiary)">Updated just now</span>
    </div>
    <div class="tu-scroll" style="flex: 1; min-height: 0; display: flex; flex-direction: column; margin: 0 -8px; padding: 6px 0 28px; -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 36px), transparent 100%); mask-image: linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 36px), transparent 100%)">
      <div style="display: flex; align-items: center; gap: 12px; padding: 10px 8px; border-radius: 14px">
        <x-import component-from-global-scope="TripUp.Avatar" size="L" initials="AC" name="Ari" color="var(--person-ari)"></x-import>
        <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">Share my location</span>
          <span class="t-body-s" style="color: var(--text-secondary)">For 1 h · only this trip sees it</span>
        </span>
        <button class="tu-press" role="switch" aria-checked="{{mp.sharing.on}}" aria-label="Share my location" onClick="{{mp.sharing.flip}}" style="width: 51px; height: 31px; flex: none; border-radius: 999px; padding: 2px; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-start; --tx: {{mp.sharing.tx}}; background: {{mp.sharing.bg}}; transition: background .2s">
          <span class="tu-knob" style="width: 27px; height: 27px; border-radius: 50%; background: #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,.25)"></span>
        </button>
      </div>
      <sc-for list="{{mp.people}}" as="p" hint-placeholder-count="4">
        <button class="tu-press tu-row" onClick="{{p.pick}}" aria-pressed="{{p.sel}}" style="display: flex; align-items: center; gap: 12px; padding: 10px 8px; border-radius: 14px; background: {{p.rowBg}}; border-top: {{p.border}}">
          <x-import component-from-global-scope="TripUp.Avatar" size="L" initials="{{p.i}}" name="{{p.name}}" color="{{p.c}}"></x-import>
          <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
            <span class="t-body-m-strong" style="color: var(--text-primary)">{{p.name}}</span>
            <span class="t-body-s" style="color: var(--text-secondary)">{{p.where}}</span>
          </span>
          <span class="t-body-s-strong" style="color: var(--status-success-text)">{{p.away}}</span>
        </button>
      </sc-for>
    </div>
  </div>
</div>
</sc-if>

<!-- ============ SCAN RECEIPT ============ -->
<sc-if value="{{is.scan}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0; background: radial-gradient(120% 80% at 50% 40%, #1a2236 0%, #05070c 70%); color: #f7f6f2">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}" mode="onImage"></x-import></div>
  <div style="position: absolute; left: 20px; right: 20px; top: 56px; display: flex; align-items: center; gap: 10px">
    <x-import component-from-global-scope="TripUp.IconButton" variant="glass" icon="x" label="Close the scanner" on-click="{{act.closeScan}}"></x-import>
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center">
      <span class="t-title-m">Scan receipt</span>
      <span class="t-caption" style="color: rgba(247,246,242,.7)">{{scan.place}}</span>
    </div>
    <span style="width: 40px"></span>
  </div>
  <div style="position: absolute; left: 46px; top: 140px; width: 301px; height: 470px">
    <div class="tu-receipt" style="position: absolute; left: 26px; top: 22px; width: 250px; box-sizing: border-box; padding: 16px 14px 18px; background: #f4f1ea; color: #22252d; border-radius: 4px; box-shadow: 0 24px 60px rgba(0,0,0,.55); transform: rotate(-2.5deg); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9.5px; line-height: 15px">
      <div style="text-align: center; font-weight: 700; font-size: 11px; letter-spacing: .5px">TABERNA DA RUA DAS FLORES</div>
      <div style="text-align: center; color: #6b6e76">Rua das Flores 103 · Lisboa</div>
      <div style="text-align: center; color: #6b6e76">25/10/2026 · 21:58 · Mesa 4</div>
      <div style="border-top: 1px dashed #9a9ca3; margin: 8px 0 4px"></div>
      <div class="tu-rlines">
        <sc-for list="{{scan.lines}}" as="l" hint-placeholder-count="12">
          <div class="{{scan.lineCls}}" style="display: flex; justify-content: space-between; gap: 8px; padding: 0 3px; border-radius: 2px"><span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{l.text}}</span><span>{{l.amt}}</span></div>
        </sc-for>
      </div>
      <div style="border-top: 1px dashed #9a9ca3; margin: 4px 0 6px"></div>
      <div class="{{scan.lineCls}}" style="display: flex; justify-content: space-between; font-weight: 700; font-size: 11px; padding: 0 3px"><span>TOTAL</span><span>€258.00</span></div>
      <div style="text-align: center; color: #6b6e76; margin-top: 6px">Obrigado · IVA incluído</div>
    </div>
    <span style="position: absolute; left: 0; top: 0; width: 34px; height: 34px; border-left: 3px solid {{scan.corner}}; border-top: 3px solid {{scan.corner}}; border-radius: 14px 0 0 0; transition: border-color .3s"></span>
    <span style="position: absolute; right: 0; top: 0; width: 34px; height: 34px; border-right: 3px solid {{scan.corner}}; border-top: 3px solid {{scan.corner}}; border-radius: 0 14px 0 0; transition: border-color .3s"></span>
    <span style="position: absolute; left: 0; bottom: 0; width: 34px; height: 34px; border-left: 3px solid {{scan.corner}}; border-bottom: 3px solid {{scan.corner}}; border-radius: 0 0 0 14px; transition: border-color .3s"></span>
    <span style="position: absolute; right: 0; bottom: 0; width: 34px; height: 34px; border-right: 3px solid {{scan.corner}}; border-bottom: 3px solid {{scan.corner}}; border-radius: 0 0 14px 0; transition: border-color .3s"></span>
    <sc-if value="{{scan.reading}}" hint-placeholder-val="{{false}}">
      <span class="tu-scanline" aria-hidden="true"></span>
    </sc-if>
  </div>
  <div aria-live="polite" style="position: absolute; left: 0; right: 0; top: 630px; display: flex; justify-content: center">
    <span class="t-body-s-strong" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 999px; background: {{scan.hintBg}}; color: {{scan.hintColor}}; transition: background .3s, color .3s; backdrop-filter: blur(24px)">
      <sc-if value="{{scan.done}}" hint-placeholder-val="{{false}}"><span class="tu-checkpop" style="display: inline-flex"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s16}}"></x-import></span></sc-if>{{scan.hint}}
    </span>
  </div>
  <div style="position: absolute; left: 0; right: 0; top: 700px; display: flex; align-items: center; justify-content: space-between; padding: 0 36px">
    <button class="tu-press t-body-s-strong" onClick="{{act.scanManual}}" style="width: 80px; color: #f7f6f2">Type it in</button>
    <button class="tu-press" onClick="{{act.shutter}}" aria-label="Capture receipt" style="width: 72px; height: 72px; border-radius: 50%; box-sizing: border-box; border: 4px solid #ffffff; display: flex; align-items: center; justify-content: center">
      <span style="width: 56px; height: 56px; border-radius: 50%; background: #ffffff"></span>
    </button>
    <button class="tu-press" onClick="{{act.gallery}}" aria-label="Pick a photo" style="width: 80px; display: flex; justify-content: flex-end; color: #f7f6f2"><x-import component-from-global-scope="TripUp.Icon" name="image" size="{{n.s26}}"></x-import></button>
  </div>
</div>
</sc-if>

<!-- ============ MANUAL EXPENSE ============ -->
<sc-if value="{{is.manual}}" hint-placeholder-val="{{false}}">
<div class="tu-screen {{anim}}" style="position: absolute; inset: 0">
  <div style="position: absolute; left: 0; top: 0"><x-import component-from-global-scope="TripUp.StatusBar" time="{{clock}}"></x-import></div>
  <div class="tu-edge tu-scroll" style="position: absolute; left: 0; top: 58px; width: 393px; bottom: 0; box-sizing: border-box; padding: 4px 20px 40px; display: flex; flex-direction: column; gap: 16px">
    <div style="position: relative; height: 40px; display: flex; align-items: center; justify-content: space-between; flex: none">
      <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="x" label="Discard" on-click="{{act.closeManual}}"></x-import>
      <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; pointer-events: none">
        <h1 class="t-title-m" style="color: var(--text-primary)">{{man.heading}}</h1>
        <span class="t-caption" style="color: var(--text-secondary)">Lisbon long weekend</span>
      </div>
      <x-import component-from-global-scope="TripUp.Button" variant="ghost" size="M" on-click="{{act.saveManual}}">Save</x-import>
    </div>
    <label style="display: flex; align-items: baseline; justify-content: center; gap: 2px; padding: 8px 0; flex: none">
      <span class="t-numeric-xl" style="color: var(--text-tertiary)">€</span>
      <input class="tu-amount-xl" inputmode="decimal" placeholder="0.00" aria-label="Amount" value="{{man.amt}}" onChange="{{act.onMAmt}}" autoFocus="{{yes}}" style="width: {{man.amtW}}; text-align: left">
    </label>
    <label class="tu-field" style="height: 56px; flex: none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display: block; flex: none"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg><input type="text" placeholder="What was it for?" aria-label="What was it for?" value="{{man.title}}" onChange="{{act.onMTitle}}"></label>
    <span class="t-label" style="color: var(--text-tertiary); flex: none">Category</span>
    <div class="tu-hscroll" style="display: flex; gap: 8px; margin: 0 -20px; padding: 0 20px; flex: none" role="group" aria-label="Category">
      <sc-for list="{{man.cats}}" as="c" hint-placeholder-count="6">
        <button class="tu-press" aria-pressed="{{c.on}}" onClick="{{c.pick}}" style="border-radius: 999px; flex: none"><x-import component-from-global-scope="TripUp.Chip" tone="{{c.tone}}" icon="{{c.icon}}">{{c.label}}</x-import></button>
      </sc-for>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
      <span class="t-label" style="color: var(--text-tertiary)">Paid by</span>
      <span class="t-caption" style="color: var(--text-tertiary)">Add everyone who paid</span>
    </div>
    <div style="display: flex; justify-content: space-between; flex: none" role="group" aria-label="Paid by">
      <sc-for list="{{man.payers}}" as="p" hint-placeholder-count="6">
        <button class="tu-press" role="checkbox" aria-checked="{{p.on}}" onClick="{{p.pick}}" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; width: 52px">
          <span style="display: inline-flex; border-radius: 50%; box-shadow: {{p.ring}}; transition: box-shadow .25s"><x-import component-from-global-scope="TripUp.Avatar" size="L" initials="{{p.i}}" name="{{p.name}}" color="{{p.c}}"></x-import></span>
          <sc-if value="{{p.on}}" hint-placeholder-val="{{false}}"><span class="tu-checkpop" style="position: absolute; left: 32px; top: -2px; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent); box-shadow: 0 0 0 2px var(--bg-canvas)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s14}}"></x-import></span></sc-if>
          <span class="t-caption" style="color: {{p.nameColor}}">{{p.name}}</span>
        </button>
      </sc-for>
    </div>
    <sc-if value="{{man.multi}}" hint-placeholder-val="{{false}}">
      <div class="tu-fadeup" style="padding: 0 14px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
        <sc-for list="{{man.payRows}}" as="r" hint-placeholder-count="2">
          <label style="display: flex; align-items: center; gap: 12px; padding: 10px 0; border-top: {{r.border}}">
            <x-import component-from-global-scope="TripUp.Avatar" size="M" initials="{{r.i}}" name="{{r.name}}" color="{{r.c}}"></x-import>
            <span class="t-body-m-strong" style="flex: 1; color: var(--text-primary)">{{r.name}}</span>
            <span style="width: 104px; display: flex; align-items: baseline; gap: 2px; padding: 6px 10px; box-sizing: border-box; border-radius: 10px; background: var(--bg-muted)">
              <span class="t-numeric-m" style="color: var(--text-tertiary)">€</span>
              <input class="tu-amount" inputmode="decimal" placeholder="0.00" aria-label="Amount paid by {{r.name}}" value="{{r.v}}" onChange="{{r.onAmt}}">
            </span>
          </label>
        </sc-for>
      </div>
      <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; flex: none; margin-top: -4px">
        <span class="t-body-s" style="color: {{man.covColor}}">{{man.covLabel}}</span>
        <button class="tu-press t-body-s-strong" onClick="{{act.mSplitPaid}}" style="color: var(--accent-text)">Split evenly</button>
      </div>
    </sc-if>
    <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
      <span class="t-label" style="color: var(--text-tertiary)">Split between</span>
      <button class="tu-press t-body-s-strong" onClick="{{act.mAll}}" style="color: var(--accent-text)">Select all</button>
    </div>
    <div style="display: flex; justify-content: space-between; flex: none" role="group" aria-label="Split between">
      <sc-for list="{{man.among}}" as="p" hint-placeholder-count="6">
        <button class="tu-press" role="checkbox" aria-checked="{{p.on}}" onClick="{{p.pick}}" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; width: 52px">
          <span class="tu-fadeop" style="display: inline-flex; opacity: {{p.op}}"><x-import component-from-global-scope="TripUp.Avatar" size="L" initials="{{p.i}}" name="{{p.name}}" color="{{p.c}}"></x-import></span>
          <sc-if value="{{p.on}}" hint-placeholder-val="{{true}}"><span class="tu-checkpop" style="position: absolute; left: 32px; top: -2px; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent); box-shadow: 0 0 0 2px var(--bg-canvas)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s14}}"></x-import></span></sc-if>
          <span class="t-caption" style="color: var(--text-secondary)">{{p.name}}</span>
        </button>
      </sc-for>
    </div>
    <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; background: var(--accent-soft); flex: none">
      <span class="t-body-s" style="color: var(--text-primary)">{{man.summary}}</span>
      <span class="t-body-s-strong" style="color: var(--accent-text); white-space: nowrap">{{man.each}}</span>
    </div>
    <div style="flex: none; padding-top: 8px"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" disabled="{{man.cantSave}}" on-click="{{act.saveManual}}">{{man.cta}}</x-import></div>
    <sc-if value="{{man.editing}}" hint-placeholder-val="{{false}}">
      <div style="flex: none; display: flex; justify-content: center; margin-top: -8px"><button class="tu-press t-body-s-strong" onClick="{{act.deleteExpense}}" style="height: 40px; padding: 0 16px; color: var(--status-danger)">Delete expense</button></div>
    </sc-if>
  </div>
</div>
</sc-if>

<!-- ============ LIVE ACTIVITY (Dynamic Island) ============ -->
<sc-if value="{{island.show}}" hint-placeholder-val="{{false}}">
  <sc-if value="{{island.open}}" hint-placeholder-val="{{true}}">
    <div class="tu-island" role="region" aria-label="Poll live activity" style="position: absolute; left: 11px; top: 11px; width: 371px; z-index: 25; box-sizing: border-box; padding: 10px 20px 20px; display: flex; flex-direction: column; gap: 12px; border-radius: 44px; background: #000000; color: #f7f6f2; box-shadow: 0 12px 32px rgba(0,0,0,.4)">
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0 4px; height: 39px">
        <span style="width: 29px; height: 29px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #ff9e73, #f25a3a); color: #0b0f1a"><x-import component-from-global-scope="TripUp.Icon" name="map-pin" size="{{n.s18}}"></x-import></span>
        <button class="tu-press" onClick="{{act.islandToggle}}" aria-label="Collapse live activity" style="display: inline-flex; align-items: center; gap: 6px; color: #2ec4b6">
          <span style="width: 7px; height: 7px; border-radius: 50%; background: #2ec4b6"></span>
          <span class="t-label">{{island.closes}}</span>
        </button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 2px">
        <span class="t-body-m-strong" style="color: #e6e6e6">{{poll.question}}</span>
        <span class="t-caption" style="color: #b3b3b3">{{island.sub}}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 13px">
        <div style="flex: 1; display: flex; gap: 2px; height: 8px; border-radius: 4px; overflow: hidden">
          <sc-for list="{{island.segs}}" as="g" hint-placeholder-count="3">
            <span class="tu-bar" style="flex: {{g.grow}} 1 0px; background: {{g.bg}}"></span>
          </sc-for>
        </div>
        <button class="tu-press t-caption" onClick="{{act.openChatPoll}}" style="padding: 8px 18px; border-radius: 999px; background: var(--accent-primary); color: #0b0f1a; font-weight: 600">Vote</button>
      </div>
    </div>
  </sc-if>
  <sc-if value="{{island.closed}}" hint-placeholder-val="{{false}}">
    <button class="tu-press tu-pill" onClick="{{act.islandToggle}}" aria-label="Expand poll live activity" style="position: absolute; left: 126px; top: 11px; width: 141px; height: 37px; z-index: 25; box-sizing: border-box; padding: 0 12px; display: flex; align-items: center; justify-content: space-between; border-radius: 999px; background: #000000; color: #2ec4b6">
      <x-import component-from-global-scope="TripUp.Icon" name="poll" size="{{n.s16}}"></x-import>
      <span class="t-caption" style="color: #f7f6f2">{{island.count}}</span>
    </button>
  </sc-if>
</sc-if>

<!-- ============ SHEETS ============ -->
<!-- Global trip nav -->
<sc-if value="{{gnav.show}}" hint-placeholder-val="{{false}}">
  <nav aria-label="Trip" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 20; display: flex; padding: 28px 20px 26px; background: {{gnav.fade}}; pointer-events: none">
    <div style="flex: 1; display: flex; padding: 4px 6px; border-radius: 999px; background: var(--bg-elevated); box-shadow: 0 10px 28px rgba(0,0,0,.28), 0 2px 6px rgba(0,0,0,.12), inset 0 0 0 1px var(--border-subtle); pointer-events: auto">
        <button class="tu-press tu-tab" onClick="{{act.openChat}}" aria-label="{{trip.chatAria}}" aria-current="{{gnav.chatCur}}" style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 0; color: {{gnav.chat}}">
          <span style="position: relative; display: inline-flex"><x-import component-from-global-scope="TripUp.Icon" name="send" size="{{n.s20}}"></x-import><sc-if value="{{trip.hasUnread}}" hint-placeholder-val="{{true}}"><span class="tu-badge" aria-hidden="true" style="position: absolute; left: 12px; top: -6px; min-width: 18px; height: 18px; box-sizing: border-box; padding: 0 5px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent); font-family: var(--font-ui); font-size: 11px; line-height: 14px; font-weight: 700; box-shadow: 0 0 0 2px var(--bg-canvas)">{{trip.unread}}</span></sc-if></span>
          <span class="t-caption" style="color: {{gnav.chatL}}">Chat</span>
        </button>
        <button class="tu-press tu-tab" onClick="{{act.openExpenses}}" aria-label="Expenses" aria-current="{{gnav.expCur}}" style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 0; color: {{gnav.exp}}">
          <span style="position: relative; display: inline-flex"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display: block"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg></span>
          <span class="t-caption" style="color: {{gnav.expL}}">Expenses</span>
        </button>
        <button class="tu-press tu-tab" onClick="{{act.photos}}" aria-label="Album" style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 0; color: var(--icon-secondary)">
          <span style="position: relative; display: inline-flex"><x-import component-from-global-scope="TripUp.Icon" name="image" size="{{n.s20}}"></x-import></span>
          <span class="t-caption" style="color: var(--text-secondary)">Album</span>
        </button>
        <button class="tu-press tu-tab" onClick="{{act.liveMap}}" aria-label="Map" aria-current="{{gnav.mapCur}}" style="flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 0; color: {{gnav.map}}">
          <span style="position: relative; display: inline-flex"><x-import component-from-global-scope="TripUp.Icon" name="map" size="{{n.s20}}"></x-import></span>
          <span class="t-caption" style="color: {{gnav.mapL}}">Map</span>
        </button>
    </div>
  </nav>
</sc-if>

<sc-if value="{{sh.any}}" hint-placeholder-val="{{false}}">
  <button class="tu-press tu-fade tu-noscale {{closing}}" aria-label="Close sheet" onClick="{{act.closeSheet}}" style="position: absolute; inset: 0; z-index: 30; background: var(--bg-overlay); cursor: default; border-radius: 0"></button>
</sc-if>

<!-- 03 Add people -->
<sc-if value="{{sh.addPeople}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Add people" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 16px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center">
    <h2 class="t-title-l" style="color: var(--text-primary)">Add people</h2>
    <x-import component-from-global-scope="TripUp.Button" variant="ghost" size="M" on-click="{{act.apDone}}">Done</x-import>
  </div>
  <x-import component-from-global-scope="TripUp.TextField" placeholder="Search name or phone number" aria-label="Search contacts by name or phone number" value="{{ap.q}}" on-change="{{act.onContactQ}}"></x-import>
  <div style="display: flex; align-items: center; gap: 12px; padding: 15px; border-radius: 20px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
    <span style="width: 40px; height: 40px; flex: none; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-soft); color: var(--accent-text)"><x-import component-from-global-scope="TripUp.Icon" name="link" size="{{n.s18}}"></x-import></span>
    <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
      <span class="t-body-m-strong" style="color: var(--text-primary)">Share invite link</span>
      <span class="t-body-s" style="color: var(--text-secondary)">Opens straight into the trip. No sign-up needed.</span>
    </div>
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="copy" label="Copy invite link" on-click="{{act.copyLink}}"></x-import>
  </div>
  <span class="t-label" style="color: var(--text-tertiary)">Suggested · friends of the group</span>
  <div style="display: flex; flex-direction: column; gap: 4px">
    <sc-for list="{{ap.people}}" as="c" hint-placeholder-count="3">
      <x-import component-from-global-scope="TripUp.PersonRow" name="{{c.full}}" subtitle="{{c.sub}}" initials="{{c.i}}" color="{{c.c}}" added="{{c.added}}" on-add="{{c.add}}"></x-import>
    </sc-for>
    <sc-if value="{{ap.none}}" hint-placeholder-val="{{false}}">
      <p class="t-body-s" style="margin: 0; padding: 12px; color: var(--text-secondary)">No one matches that. Share the invite link instead.</p>
    </sc-if>
  </div>
  <sc-if value="{{ap.late}}" hint-placeholder-val="{{true}}">
    <div class="tu-fade" style="display: flex; gap: 10px; padding: 12px; border-radius: 14px; background: var(--bg-muted); color: var(--icon-secondary)">
      <x-import component-from-global-scope="TripUp.Icon" name="clock" size="{{n.s18}}"></x-import>
      <span class="t-body-s" style="flex: 1; color: var(--text-secondary)">{{ap.lateText}}</span>
    </div>
  </sc-if>
</div>
</sc-if>

<!-- 05 New poll -->
<sc-if value="{{sh.newPoll}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet" role="dialog" aria-label="New poll" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; height: 796px; box-sizing: border-box; display: flex; flex-direction: column; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div class="tu-edge tu-scroll" style="flex: 1; min-height: 0; box-sizing: border-box; padding: 8px 20px 24px; display: flex; flex-direction: column; gap: 12px">
    <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
      <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="x" label="Close without sending" on-click="{{act.closeSheet}}"></x-import>
      <h2 class="t-title-m" style="color: var(--text-primary)">New poll</h2>
      <span style="width: 40px"></span>
    </div>
    <div style="display: flex; gap: 8px; flex: none" role="group" aria-label="Poll template">
      <sc-for list="{{np.tpls}}" as="t" hint-placeholder-count="4">
        <button class="tu-press" aria-pressed="{{t.on}}" onClick="{{t.pick}}" style="border-radius: 999px"><x-import component-from-global-scope="TripUp.Chip" tone="{{t.tone}}">{{t.label}}</x-import></button>
      </sc-for>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px; flex: none">
      <span class="t-label" style="color: var(--text-tertiary)">Question</span>
      <x-import component-from-global-scope="TripUp.TextField" icon="poll" placeholder="Ask the group something" aria-label="Question" value="{{np.question}}" on-change="{{act.onQuestion}}"></x-import>
    </div>
    <span class="t-label" style="color: var(--text-tertiary); flex: none">Options</span>
    <sc-for list="{{np.opts}}" as="o" hint-placeholder-count="3">
      <div class="tu-fade" style="display: flex; align-items: center; gap: 12px; padding: 14px 10px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
        <span style="width: 36px; height: 36px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: {{o.tileBg}}; color: {{o.tileColor}}"><x-import component-from-global-scope="TripUp.Icon" name="{{o.icon}}" size="{{n.s18}}"></x-import></span>
        <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">{{o.name}}</span>
        </span>
        <button class="tu-press" aria-label="{{o.aria}}" onClick="{{o.remove}}" style="width: 32px; height: 32px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="x" size="{{n.s18}}"></x-import></button>
      </div>
    </sc-for>
    <sc-if value="{{np.isPlace}}" hint-placeholder-val="{{true}}">
      <button class="tu-press" onClick="{{act.openAddOption}}" style="flex: none; height: 44px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 16px; box-shadow: inset 0 0 0 1px var(--border-strong); color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s16}}"></x-import>
        <span class="t-body-s-strong" style="color: var(--text-secondary)">Add option</span>
      </button>
    </sc-if>
    <sc-if value="{{np.isText}}" hint-placeholder-val="{{false}}">
      <div class="tu-fade" style="display: flex; align-items: center; gap: 8px; flex: none">
        <div style="flex: 1; min-width: 0"><x-import component-from-global-scope="TripUp.TextField" icon="plus" placeholder="{{np.textPh}}" aria-label="New option" value="{{np.newOpt}}" on-change="{{act.onNewOpt}}" on-key-down="{{act.onNewOptKey}}"></x-import></div>
        <x-import component-from-global-scope="TripUp.Button" variant="secondary" size="M" disabled="{{np.cantAddOpt}}" on-click="{{act.addTextOpt}}">Add</x-import>
      </div>
    </sc-if>
    <sc-if value="{{np.noOpts}}" hint-placeholder-val="{{false}}">
      <p class="t-body-s" style="margin: 0; color: var(--text-secondary); flex: none">Add at least two options for the group to pick from.</p>
    </sc-if>
    <div style="display: flex; flex-direction: column; padding: 4px 15px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
      <button class="tu-press" onClick="{{act.openPollCloses}}" style="display: flex; align-items: center; gap: 10px; padding: 12px 0; color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="clock" size="{{n.s18}}"></x-import>
        <span class="t-body-m" style="flex: 1; color: var(--text-primary)">Ends</span>
        <span class="t-body-s" style="color: var(--text-secondary)">{{np.closes}}</span>
        <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import>
      </button>
      <sc-if value="{{np.isPlace}}" hint-placeholder-val="{{true}}">
      <div style="height: 1px; background: var(--border-subtle)"></div>
      <div style="display: flex; align-items: center; gap: 10px; padding: 12px 0; color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="calendar" size="{{n.s18}}"></x-import>
        <span style="flex: 1; display: flex; flex-direction: column">
          <span class="t-body-m" style="color: var(--text-primary)">Add winner to itinerary</span>
          <span class="t-caption" style="color: var(--text-secondary)">Dinner · 20:30</span>
        </span>
        <button class="tu-press" role="switch" aria-checked="{{tg.addItin.on}}" aria-label="Add winner to itinerary" onClick="{{tg.addItin.flip}}" style="width: 51px; height: 31px; flex: none; border-radius: 999px; padding: 2px; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-start; --tx: {{tg.addItin.tx}}; background: {{tg.addItin.bg}}; transition: background .2s">
          <span class="tu-knob" style="width: 27px; height: 27px; border-radius: 50%; background: #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,.25)"></span>
        </button>
      </div>
      </sc-if>
    </div>
  </div>
  <div style="flex: none; padding: 12px 20px 40px; background: linear-gradient(180deg, transparent, var(--fade-sheet) 30%)">
    <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" icon="send" disabled="{{np.cantSend}}" on-click="{{act.sendPoll}}">{{np.sendLabel}}</x-import>
  </div>
</div>
</sc-if>

<!-- 05a Add a place -->
<sc-if value="{{sh.addOption}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Add a place" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="x" label="Close" on-click="{{act.backToNewPoll}}"></x-import>
    <h2 class="t-title-m" style="color: var(--text-primary)">Add a place</h2>
    <span style="width: 40px"></span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px; flex: none">
    <div style="flex: 1; min-width: 0"><x-import component-from-global-scope="TripUp.TextField" placeholder="Search places" aria-label="Search places on Apple Maps" value="{{ao.q}}" on-change="{{act.onPlaceQ}}"></x-import></div>
  </div>
  <div style="padding: 0 16px; border-radius: 16px; background: var(--bg-elevated); flex: none">
    <div class="t-body-m" style="padding: 14px 0; color: var(--text-primary)">{{ao.queryLabel}}</div>
    <button class="tu-press" onClick="{{act.nearMe}}" style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 0; border-top: 1px solid var(--border-subtle); color: var(--icon-secondary)">
      <span style="width: 32px; height: 32px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted)"><x-import component-from-global-scope="TripUp.Icon" name="location" size="{{n.s16}}"></x-import></span>
      <span class="t-body-m" style="color: var(--text-primary)">Search near current location</span>
    </button>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; flex: none">
    <h3 class="t-title-m" style="color: var(--text-secondary)">Search results</h3>
    <span class="t-body-s-strong" style="color: var(--status-success-text)" aria-live="polite">{{ao.addedLabel}}</span>
  </div>
  <div style="padding: 0 14px 0 16px; border-radius: 16px; background: var(--bg-elevated); flex: none">
    <sc-for list="{{ao.results}}" as="r" hint-placeholder-count="5">
      <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-top: {{r.border}}">
        <span style="width: 32px; height: 32px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent)"><x-import component-from-global-scope="TripUp.Icon" name="map-pin" size="{{n.s16}}"></x-import></span>
        <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">{{r.name}}</span>
          <span class="t-body-s" style="display: flex; align-items: center; gap: 4px; color: var(--text-secondary)" aria-label="{{r.ratingAria}}"><span style="color: var(--status-warning)" aria-hidden="true">★</span><span class="t-body-s-strong" style="color: var(--text-primary)">{{r.rating}}</span><span>{{r.meta}}</span></span>
          <span class="t-body-s" style="color: var(--text-secondary)">{{r.sub}}</span>
          <span style="display: flex; gap: 6px; margin-top: 6px">
            <sc-for list="{{r.photos}}" as="ph" hint-placeholder-count="3">
              <img src="{{ph.src}}" alt="{{ph.alt}}" style="width: 70px; height: 52px; border-radius: 10px; object-fit: cover; flex: none; background: var(--bg-muted)">
            </sc-for>
          </span>
          <span class="t-caption" style="color: var(--text-tertiary)">Photos and ratings from Apple Maps</span>
        </span>
        <x-import component-from-global-scope="TripUp.IconButton" variant="{{r.variant}}" icon="{{r.icon}}" label="{{r.aria}}" on-click="{{r.toggle}}"></x-import>
      </div>
    </sc-for>
    <sc-if value="{{ao.none}}" hint-placeholder-val="{{false}}">
      <p class="t-body-s" style="margin: 0; padding: 16px 0; color: var(--text-secondary)">Nothing nearby with that name.</p>
    </sc-if>
  </div>
  <div style="flex: none"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.backToNewPoll}}">{{ao.doneLabel}}</x-import></div>
</div>
</sc-if>

<!-- 05b When does it end? -->
<sc-if value="{{sh.pollCloses}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="When does it end?" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="chevron-left" label="Back to New poll" on-click="{{act.backToNewPoll}}"></x-import>
    <h2 class="t-title-m" style="color: var(--text-primary)">When does it end?</h2>
    <span style="width: 40px"></span>
  </div>
  <span class="t-label" style="color: var(--text-tertiary); flex: none">Ends when</span>
  <div role="radiogroup" aria-label="End rule" style="padding: 0 16px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <sc-for list="{{pc.rules}}" as="r" hint-placeholder-count="3">
      <button class="tu-press" role="radio" aria-checked="{{r.on}}" onClick="{{r.pick}}" style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 0; border-top: {{r.border}}">
        <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
          <span class="t-body-m" style="color: var(--text-primary)">{{r.title}}</span>
          <span class="t-caption" style="color: var(--text-secondary)">{{r.sub}}</span>
        </span>
        <span style="width: 24px; height: 24px; flex: none; box-sizing: border-box; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: inset 0 0 0 2px {{r.ring}}">
          <sc-if value="{{r.on}}" hint-placeholder-val="{{false}}"><span style="width: 12px; height: 12px; border-radius: 50%; background: var(--accent-primary)"></span></sc-if>
        </span>
      </button>
    </sc-for>
  </div>
  <sc-if value="{{pc.hasDeadline}}" hint-placeholder-val="{{true}}">
  <span class="t-label" style="color: var(--text-tertiary); padding-top: 4px; flex: none">Deadline</span>
  <div style="display: flex; gap: 8px; flex: none" role="group" aria-label="Quick deadlines">
    <sc-for list="{{pc.chips}}" as="c" hint-placeholder-count="4">
      <button class="tu-press" aria-pressed="{{c.on}}" onClick="{{c.pick}}" style="border-radius: 999px"><x-import component-from-global-scope="TripUp.Chip" tone="{{c.tone}}">{{c.label}}</x-import></button>
    </sc-for>
  </div>
  <button class="tu-press" onClick="{{act.openCustom}}" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px {{pc.customRing}}; color: var(--icon-secondary); flex: none">
    <x-import component-from-global-scope="TripUp.Icon" name="calendar" size="{{n.s18}}"></x-import>
    <span style="flex: 1; display: flex; flex-direction: column; gap: 1px">
      <span class="t-body-m" style="color: var(--text-primary)">{{pc.when}}</span>
      <span class="t-caption" style="color: var(--text-secondary)">{{pc.whenSub}}</span>
    </span>
    <span class="t-body-s" style="color: var(--accent-text)">Edit</span>
    <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import>
  </button>
  </sc-if>
  <span class="t-label" style="color: var(--text-tertiary); flex: none">Voting</span>
  <div style="padding: 0 16px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0">
      <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
        <span class="t-body-m" style="color: var(--text-primary)">Can change vote</span>
        <span class="t-caption" style="color: var(--text-secondary)">Until the poll ends</span>
      </span>
      <button class="tu-press" role="switch" aria-checked="{{tg.canChange.on}}" aria-label="Can change vote" onClick="{{tg.canChange.flip}}" style="width: 51px; height: 31px; flex: none; border-radius: 999px; padding: 2px; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-start; --tx: {{tg.canChange.tx}}; background: {{tg.canChange.bg}}; transition: background .2s">
        <span class="tu-knob" style="width: 27px; height: 27px; border-radius: 50%; background: #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,.25)"></span>
      </button>
    </div>
    <div style="height: 1px; background: var(--border-subtle)"></div>
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0">
      <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
        <span class="t-body-m" style="color: var(--text-primary)">Show who voted what</span>
        <span class="t-caption" style="color: var(--text-secondary)">Everyone sees the names</span>
      </span>
      <button class="tu-press" role="switch" aria-checked="{{tg.showWho.on}}" aria-label="Show who voted what" onClick="{{tg.showWho.flip}}" style="width: 51px; height: 31px; flex: none; border-radius: 999px; padding: 2px; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-start; --tx: {{tg.showWho.tx}}; background: {{tg.showWho.bg}}; transition: background .2s">
        <span class="tu-knob" style="width: 27px; height: 27px; border-radius: 50%; background: #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,.25)"></span>
      </button>
    </div>
    <div style="height: 1px; background: var(--border-subtle)"></div>
    <button class="tu-press" onClick="{{act.tieBreak}}" style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 0; color: var(--icon-secondary)">
      <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
        <span class="t-body-m" style="color: var(--text-primary)">Tie-break</span>
        <span class="t-caption" style="color: var(--text-secondary)">If two places get the same votes</span>
      </span>
      <span class="t-body-s" style="color: var(--text-secondary)">You decide</span>
      <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import>
    </button>
  </div>
  <div style="flex: none"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.backToNewPoll}}">Save</x-import></div>
</div>
</sc-if>

<!-- 05c Custom deadline -->
<sc-if value="{{sh.customDeadline}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet" role="dialog" aria-label="Custom deadline" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center">
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="chevron-left" label="Back to end settings" on-click="{{act.openPollCloses}}"></x-import>
    <h2 class="t-title-m" style="color: var(--text-primary)">Custom deadline</h2>
    <span style="width: 40px"></span>
  </div>
  <span class="t-label" style="color: var(--text-tertiary)">Day</span>
  <div style="display: flex; gap: 8px" role="group" aria-label="Day">
    <sc-for list="{{cd.days}}" as="d" hint-placeholder-count="5">
      <button class="tu-press" aria-pressed="{{d.on}}" disabled="{{d.off}}" onClick="{{d.pick}}" style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 0; border-radius: 14px; background: {{d.bg}}">
        <span class="t-caption" style="color: {{d.c1}}">{{d.lbl}}</span>
        <span class="t-numeric-m" style="color: {{d.c2}}">{{d.d}}</span>
      </button>
    </sc-for>
  </div>
  <span class="t-label" style="color: var(--text-tertiary)">Time</span>
  <div style="position: relative; display: flex; justify-content: center; align-items: center; gap: 24px; padding: 8px 0; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
    <span style="position: absolute; left: 16px; right: 16px; top: 64px; height: 44px; border-radius: 10px; background: var(--bg-muted)"></span>
    <div style="position: relative; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 6px" role="group" aria-label="Hour">
      <sc-for list="{{cd.hours}}" as="h" hint-placeholder-count="5">
        <button class="tu-press {{h.cls}}" onClick="{{h.pick}}" aria-label="{{h.aria}}" style="opacity: {{h.op}}; color: var(--text-primary); min-height: 22px">{{h.v}}</button>
      </sc-for>
    </div>
    <span class="t-numeric-l" style="position: relative; color: var(--text-primary)">:</span>
    <div style="position: relative; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 6px" role="group" aria-label="Minutes">
      <sc-for list="{{cd.mins}}" as="m" hint-placeholder-count="5">
        <button class="tu-press {{m.cls}}" onClick="{{m.pick}}" aria-label="{{m.aria}}" style="opacity: {{m.op}}; color: var(--text-primary); min-height: 22px">{{m.v}}</button>
      </sc-for>
    </div>
  </div>
  <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; border-radius: 14px; background: {{cd.resBg}}">
    <span class="t-body-s-strong" style="color: var(--text-primary)">{{cd.result}}</span>
    <span class="t-body-s-strong" style="color: {{cd.resColor}}">{{cd.inLabel}}</span>
  </div>
  <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" disabled="{{cd.past}}" on-click="{{act.setDeadline}}">Set deadline</x-import>
</div>
</sc-if>

<!-- 06b Poll details -->
<sc-if value="{{sh.pollDetails}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Poll details" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
    <span style="display: inline-flex; align-items: center; gap: 6px; color: var(--poll-primary)">
      <x-import component-from-global-scope="TripUp.Icon" name="poll" size="{{n.s16}}"></x-import>
      <span class="t-caption" style="color: var(--text-secondary)">Poll by Ari</span>
    </span>
    <span style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; background: {{poll.status.bg}}">
      <span style="width: 7px; height: 7px; border-radius: 50%; background: {{poll.status.dot}}"></span>
      <span class="t-caption" style="color: {{poll.status.color}}">{{poll.status.liveText}}</span>
    </span>
  </div>
  <h2 class="t-title-l" style="color: var(--text-primary); flex: none">{{poll.question}}</h2>
  <div style="display: flex; align-items: center; gap: 8px; flex: none">
    <span style="display: inline-flex; align-items: center">
      <sc-for list="{{poll.voterStack}}" as="p" hint-placeholder-count="5">
        <span style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="S" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
      </sc-for>
    </span>
    <span class="t-body-s" style="flex: 1; color: var(--text-secondary)" aria-live="polite">{{poll.votedText}}</span>
  </div>
  <sc-for list="{{poll.options}}" as="o" hint-placeholder-count="3">
    <button class="tu-press tu-row" onClick="{{o.vote}}" aria-pressed="{{o.mine}}" aria-label="{{o.aria}}" style="display: flex; flex-direction: column; gap: 10px; padding: 14px; border-radius: 16px; background: {{o.bg}}; box-shadow: {{o.ring}}; width: 100%; box-sizing: border-box; flex: none">
      <span style="display: flex; align-items: center; gap: 8px; min-height: 24px; width: 100%">
        <span class="t-body-m-strong" style="flex: 1; min-width: 0; color: var(--text-primary)">{{o.name}}</span>
        <sc-if value="{{o.mine}}" hint-placeholder-val="{{false}}"><span class="tu-checkpop" style="display: inline-flex; color: var(--poll-primary)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s16}}"></x-import></span></sc-if>
        <span style="display: inline-flex; align-items: center">
          <sc-for list="{{o.voters}}" as="p" hint-placeholder-count="2">
            <span class="tu-join" style="display: inline-flex; margin-left: {{p.ml}}"><x-import component-from-global-scope="TripUp.Avatar" size="S" initials="{{p.i}}" name="{{p.n}}" color="{{p.c}}"></x-import></span>
          </sc-for>
        </span>
        <sc-if value="{{o.showCount}}" hint-placeholder-val="{{false}}"><span class="t-numeric-m" style="color: var(--text-primary)">{{o.count}}</span></sc-if>
      </span>
      <span style="display: block; height: 6px; border-radius: 999px; background: var(--bg-muted); overflow: hidden; width: 100%">
        <span class="tu-bar" style="display: block; height: 100%; width: {{o.pct}}; border-radius: 999px; background: var(--poll-primary)"></span>
      </span>
    </button>
  </sc-for>
  <sc-if value="{{pd.hasWaiting}}" hint-placeholder-val="{{true}}">
    <div style="display: flex; align-items: center; gap: 12px; padding: 10px 10px 10px 12px; border-radius: 16px; background: var(--status-warning-soft); flex: none">
      <x-import component-from-global-scope="TripUp.Avatar" size="M" initials="{{pd.wI}}" name="{{pd.wName}}" color="{{pd.wC}}"></x-import>
      <span style="flex: 1; display: flex; flex-direction: column; gap: 1px">
        <span class="t-body-m-strong" style="color: var(--text-primary)">{{pd.wTitle}}</span>
        <span class="t-caption" style="color: var(--text-secondary)">Last seen 12 min ago</span>
      </span>
      <x-import component-from-global-scope="TripUp.Button" variant="secondary" size="M" on-click="{{act.nudge}}">Nudge</x-import>
    </div>
  </sc-if>
  <div style="display: flex; align-items: center; gap: 8px; padding: 4px 0; flex: none">
    <span class="t-body-s" style="flex: 1; text-align: center; color: var(--text-secondary)">{{pd.yourVote}}</span>
  </div>
  <div style="flex: none"><x-import component-from-global-scope="TripUp.Button" variant="secondary" size="L" on-click="{{act.closePollNow}}">End poll now</x-import></div>
  <p class="t-caption" style="margin: 0; text-align: center; color: var(--text-tertiary); flex: none">{{pd.caption}}</p>
</div>
</sc-if>

<!-- 06c Poll closed -->
<sc-if value="{{sh.pollClosed}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Poll ended" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 8px 0; text-align: center; flex: none">
    <span class="tu-pop" style="width: 52px; height: 52px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--status-success); color: var(--text-on-accent)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s26}}"></x-import></span>
    <span class="t-label" style="color: var(--status-success-text)">{{pcl.label}}</span>
    <h2 class="t-title-l" style="color: var(--text-primary)">{{pcl.winName}}</h2>
    <span class="t-body-s" style="color: var(--text-secondary)">{{pcl.sub}}</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 16px; padding: 14px 16px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <sc-for list="{{pcl.results}}" as="r" hint-placeholder-count="3">
      <div style="display: flex; flex-direction: column; gap: 6px">
        <div style="display: flex; align-items: center; gap: 8px">
          <span class="{{r.nameCls}}" style="flex: 1; color: var(--text-primary)">{{r.name}}</span>
          <span class="t-body-s-strong" style="color: {{r.cntColor}}">{{r.votes}}</span>
        </div>
        <span style="display: block; height: 6px; border-radius: 999px; background: var(--bg-muted); overflow: hidden">
          <span class="tu-bar" style="display: block; height: 100%; width: {{r.pct}}; border-radius: 999px; background: {{r.fill}}"></span>
        </span>
        <span class="t-caption" style="color: var(--text-tertiary)">{{r.who}}</span>
      </div>
    </sc-for>
  </div>
  <sc-if value="{{pcl.added}}" hint-placeholder-val="{{true}}">
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; background: var(--status-success-soft); flex: none">
      <span style="width: 36px; height: 36px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--status-success-text)"><x-import component-from-global-scope="TripUp.Icon" name="calendar" size="{{n.s18}}"></x-import></span>
      <span style="flex: 1; display: flex; flex-direction: column; gap: 1px">
        <span class="t-body-m-strong" style="color: var(--text-primary)">Added to tonight's plan</span>
        <span class="t-caption" style="color: var(--text-secondary)">{{pcl.addedSub}}</span>
      </span>
    </div>
  </sc-if>
  <div style="flex: none"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.seeItinerary}}">See itinerary</x-import></div>
  <div style="flex: none; display: flex; justify-content: center"><x-import component-from-global-scope="TripUp.Button" variant="ghost" size="M" on-click="{{act.directions}}">Get directions</x-import></div>
</div>
</sc-if>

<!-- 08b Who's sharing -->
<sc-if value="{{sh.whoSharing}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Who's sharing" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 4px 0; flex: none">
    <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
      <h2 class="t-title-m" style="color: var(--text-primary)">{{ws.name}}</h2>
      <span class="t-body-s" style="color: var(--text-secondary)">{{ws.qty}} from your receipt</span>
    </span>
    <span class="t-numeric-m" style="color: var(--text-primary)">{{ws.amount}}</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; flex: none">
    <span class="t-label" style="color: var(--text-tertiary)">Who's sharing this?</span>
    <button class="tu-press t-body-s-strong" onClick="{{act.selectAll}}" style="color: var(--accent-text)">Select all</button>
  </div>
  <div style="border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <sc-for list="{{ws.rows}}" as="r" hint-placeholder-count="6">
      <button class="tu-press" role="checkbox" aria-checked="{{r.on}}" onClick="{{r.toggle}}" style="display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; padding: 10px 14px; border-top: {{r.border}}">
        <span style="width: 26px; height: 26px; flex: none; box-sizing: border-box; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; background: {{r.boxBg}}; box-shadow: {{r.boxRing}}; color: var(--text-on-accent); transition: background-color .2s, box-shadow .2s">
          <sc-if value="{{r.on}}" hint-placeholder-val="{{true}}"><span class="tu-checkpop" style="display: inline-flex"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s16}}"></x-import></span></sc-if>
        </span>
        <span class="tu-fadeop" style="display: inline-flex; opacity: {{r.op}}"><x-import component-from-global-scope="TripUp.Avatar" size="M" initials="{{r.i}}" name="{{r.name}}" color="{{r.c}}"></x-import></span>
        <span style="flex: 1; display: flex; flex-direction: column">
          <span class="t-body-m-strong" style="color: {{r.nameColor}}">{{r.name}}</span>
          <sc-if value="{{r.hasSub}}" hint-placeholder-val="{{false}}"><span class="t-caption" style="color: var(--text-tertiary)">{{r.sub}}</span></sc-if>
        </span>
        <span class="t-body-s-strong" style="color: {{r.amtColor}}">{{r.amt}}</span>
      </button>
    </sc-for>
  </div>
  <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; background: var(--accent-soft); flex: none">
    <span class="t-body-s" style="color: var(--text-primary)">{{ws.summary}}</span>
    <span class="t-body-s-strong" style="color: var(--accent-text); white-space: nowrap">{{ws.each}}</span>
  </div>
  <div style="flex: none"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.closeSheet}}">Done</x-import></div>
</div>
</sc-if>

<!-- 08c Who paid -->
<sc-if value="{{sh.whoPaid}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Who paid" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 4px 0; flex: none">
    <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
      <h2 class="t-title-m" style="color: var(--text-primary)">Who paid?</h2>
      <span class="t-body-s" style="color: var(--text-secondary)">Pick everyone who chipped in and enter what they paid</span>
    </span>
    <span class="t-numeric-m" style="color: var(--text-primary)">€258.00</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0; flex: none">
    <span class="t-label" style="color: var(--text-tertiary)">Paid by</span>
    <button class="tu-press t-body-s-strong" onClick="{{act.splitEvenly}}" style="color: var(--accent-text)">Split evenly</button>
  </div>
  <div style="border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <sc-for list="{{wp.rows}}" as="r" hint-placeholder-count="6">
      <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-top: {{r.border}}; min-height: 33px">
        <button class="tu-press" role="checkbox" aria-checked="{{r.on}}" aria-label="{{r.aria}}" onClick="{{r.toggle}}" style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0">
          <span style="width: 26px; height: 26px; flex: none; box-sizing: border-box; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; background: {{r.boxBg}}; box-shadow: {{r.boxRing}}; color: var(--text-on-accent); transition: background-color .2s, box-shadow .2s">
            <sc-if value="{{r.on}}" hint-placeholder-val="{{true}}"><span class="tu-checkpop" style="display: inline-flex"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s16}}"></x-import></span></sc-if>
          </span>
          <span class="tu-fadeop" style="display: inline-flex; opacity: {{r.op}}"><x-import component-from-global-scope="TripUp.Avatar" size="M" initials="{{r.i}}" name="{{r.name}}" color="{{r.c}}"></x-import></span>
          <span class="t-body-m-strong" style="flex: 1; color: {{r.nameColor}}">{{r.name}}</span>
        </button>
        <sc-if value="{{r.on}}" hint-placeholder-val="{{true}}">
          <label style="width: 104px; height: 36px; flex: none; box-sizing: border-box; padding: 0 12px; display: flex; align-items: center; gap: 2px; border-radius: 10px; background: var(--bg-muted); box-shadow: inset 0 0 0 1px var(--border-subtle)">
            <span class="t-numeric-m" style="color: var(--text-secondary)">€</span>
            <input class="tu-amount" inputmode="decimal" aria-label="{{r.amtAria}}" value="{{r.val}}" onChange="{{r.onAmt}}">
          </label>
        </sc-if>
      </div>
    </sc-for>
  </div>
  <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; background: {{wp.covBg}}; flex: none">
    <span class="t-body-s" style="color: var(--text-primary)">{{wp.left}}</span>
    <span class="t-body-s-strong" style="color: {{wp.covColor}}">{{wp.cov}}</span>
  </div>
  <div style="flex: none"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.donePaid}}">Done</x-import></div>
</div>
</sc-if>

<!-- 09b Settle up -->
<sc-if value="{{sh.settle}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="Settle up" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0; flex: none">
    <h2 class="t-title-m" style="color: var(--text-primary)">Settle up</h2>
    <span class="t-body-s" style="color: var(--text-secondary)">{{st.smart}}</span>
  </div>
  <sc-for list="{{st.groups}}" as="g" hint-placeholder-count="2">
    <div style="display: flex; flex-direction: column; gap: 8px; flex: none">
      <div style="display: flex; justify-content: space-between; align-items: center">
        <span class="t-label" style="color: var(--text-tertiary)">{{g.label}}</span>
        <span class="t-body-s-strong" style="color: {{g.color}}">{{g.total}}</span>
      </div>
      <div class="{{g.cls}}" style="display: flex; flex-direction: column; gap: 6px" aria-live="polite">
        <sc-for list="{{g.rows}}" as="t" hint-placeholder-count="2">
          <sc-if value="{{t.canPay}}" hint-placeholder-val="{{false}}">
            <button class="tu-press tu-row" onClick="{{t.pay}}" aria-label="Pay {{t.amount}} to {{t.toName}}" style="display: block; width: 100%">
              <x-import component-from-global-scope="TripUp.TransferRow" title="{{t.title}}" subtitle="{{t.sub}}" amount="{{t.amount}}" status="{{t.status}}" people="{{t.people}}"></x-import>
            </button>
          </sc-if>
          <sc-if value="{{t.noPay}}" hint-placeholder-val="{{true}}">
            <x-import component-from-global-scope="TripUp.TransferRow" title="{{t.title}}" subtitle="{{t.sub}}" amount="{{t.amount}}" status="{{t.status}}" people="{{t.people}}"></x-import>
          </sc-if>
        </sc-for>
      </div>
    </div>
  </sc-for>
  <div style="display: flex; flex-direction: column; gap: 8px; padding: 4px 0; flex: none">
    <sc-if value="{{st.hasPrimary}}" hint-placeholder-val="{{true}}">
      <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.settlePrimary}}">{{st.primary}}</x-import>
    </sc-if>
    <x-import component-from-global-scope="TripUp.Button" variant="secondary" size="L" on-click="{{act.markPaid}}">Mark as paid</x-import>
  </div>
</div>
</sc-if>

<!-- Pay a friend -->
<sc-if value="{{sh.pay}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet" role="dialog" aria-label="Pay {{pay.name}}" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 14px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <sc-if value="{{pay.review}}" hint-placeholder-val="{{true}}">
    <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
      <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="chevron-left" label="Back to settle up" on-click="{{act.payBack}}"></x-import>
      <h2 class="t-title-m" style="color: var(--text-primary)">Pay {{pay.name}}</h2>
      <span style="width: 40px"></span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 4px 0; flex: none; text-align: center">
      <div style="display: flex; align-items: center; gap: 10px">
        <x-import component-from-global-scope="TripUp.Avatar" size="XL" initials="{{pay.fromI}}" name="You" color="{{pay.fromC}}"></x-import>
        <span style="width: 32px; height: 32px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import></span>
        <x-import component-from-global-scope="TripUp.Avatar" size="XL" initials="{{pay.toI}}" name="{{pay.name}}" color="{{pay.toC}}"></x-import>
      </div>
      <span class="t-numeric-xl" style="color: var(--text-primary); margin-top: 4px">{{pay.amount}}</span>
      <span class="t-body-s" style="color: var(--text-secondary)">{{pay.covers}}</span>
    </div>
    <span class="t-label" style="color: var(--text-tertiary); flex: none">Pay with</span>
    <button class="tu-press" onClick="{{act.openPayMethod}}" style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
      <sc-if value="{{pay.methodLogo}}" hint-placeholder-val="{{true}}"><img src="{{pay.method.logo}}" alt="" style="width: 44px; height: 28px; flex: none; display: block; object-fit: contain"></sc-if>
      <sc-if value="{{pay.methodNoLogo}}" hint-placeholder-val="{{false}}"><span class="tu-tile" style="width: 44px; background: var(--accent-soft); color: var(--accent-text)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="{{pay.method.d}}"></path></svg></span></sc-if>
      <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px">
        <span class="t-body-m-strong" style="color: var(--text-primary)">{{pay.method.title}}</span>
        <span class="t-caption" style="color: var(--text-secondary)">{{pay.method.sub}}</span>
      </span>
      <span class="t-body-s" style="color: var(--accent-text)">Change</span>
    </button>
    <label class="tu-field" style="flex: none">
      <x-import component-from-global-scope="TripUp.Icon" name="send" size="{{n.s18}}"></x-import>
      <input type="text" placeholder="{{pay.notePh}}" aria-label="Note" value="{{pay.note}}" onChange="{{act.onPayNote}}">
    </label>
    <span style="display: flex; align-items: center; gap: 6px; color: var(--text-tertiary); flex: none"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4"></path></svg><span class="t-caption">{{pay.lands}}</span></span>
    <div style="display: flex; flex-direction: column; gap: 4px; flex: none">
      <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.payNow}}">{{pay.cta}}</x-import>
      <div style="display: flex; justify-content: center"><x-import component-from-global-scope="TripUp.Button" variant="ghost" size="M" on-click="{{act.payElsewhere}}">Paid another way? Mark as paid</x-import></div>
    </div>
  </sc-if>
  <sc-if value="{{pay.confirm}}" hint-placeholder-val="{{false}}">
    <div class="tu-swap" role="status" style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 0 56px; text-align: center; flex: none">
      <span class="tu-face tu-face-ring" style="width: 88px; height: 88px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-soft); color: var(--accent-text)"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M12 9v3"></path></svg></span>
      <span class="t-title-m" style="color: var(--text-primary); margin-top: 8px">Confirm with Face ID</span>
      <span class="t-body-s" style="color: var(--text-secondary)">{{pay.amount}} to {{pay.name}} · {{pay.method.title}}</span>
    </div>
  </sc-if>
  <sc-if value="{{pay.sending}}" hint-placeholder-val="{{false}}">
    <div class="tu-swap" role="status" style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 0 56px; text-align: center; flex: none">
      <span class="tu-spin" style="width: 72px; height: 72px; box-sizing: border-box; border-radius: 50%; border: 5px solid var(--bg-muted); border-top-color: var(--accent-primary)"></span>
      <span class="t-title-m" style="color: var(--text-primary); margin-top: 16px">Sending {{pay.amount}}</span>
      <span class="t-body-s" style="color: var(--text-secondary)">To {{pay.name}} · {{pay.method.title}}</span>
    </div>
  </sc-if>
  <sc-if value="{{pay.done}}" hint-placeholder-val="{{false}}">
    <div class="tu-swap" role="status" style="display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 0 0; text-align: center; flex: none">
      <span class="tu-ripple tu-checkpop" style="width: 72px; height: 72px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--status-success); color: var(--text-on-accent); box-shadow: 0 12px 32px rgba(46,196,182,.35)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s40}}"></x-import></span>
      <span class="t-label" style="color: var(--status-success-text); margin-top: 14px">Payment sent</span>
      <span class="t-numeric-xl" style="color: var(--text-primary)">{{pay.amount}}</span>
      <span class="t-body-s" style="color: var(--text-secondary)">to {{pay.name}} · {{pay.notified}}</span>
    </div>
    <div class="tu-receipt" style="padding: 0 16px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
      <sc-for list="{{pay.receipt}}" as="r" hint-placeholder-count="4">
        <div style="display: flex; justify-content: space-between; gap: 12px; padding: 11px 0; border-top: {{r.border}}">
          <span class="t-body-s" style="color: var(--text-secondary)">{{r.k}}</span>
          <span class="t-body-s-strong" style="color: var(--text-primary); text-align: right">{{r.v}}</span>
        </div>
      </sc-for>
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px; flex: none">
      <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" on-click="{{act.payBack}}">Done</x-import>
      <div style="display: flex; justify-content: center"><x-import component-from-global-scope="TripUp.Button" variant="ghost" size="M" icon="share" on-click="{{act.shareReceipt}}">Share receipt</x-import></div>
    </div>
  </sc-if>
</div>
</sc-if>

<!-- Pay with -->
<sc-if value="{{sh.payMethod}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet" role="dialog" aria-label="Pay with" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="chevron-left" label="Back to payment" on-click="{{act.backToPay}}"></x-import>
    <h2 class="t-title-m" style="color: var(--text-primary)">Pay with</h2>
    <span style="width: 40px"></span>
  </div>
  <div role="radiogroup" aria-label="Payment method" style="padding: 0 14px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <sc-for list="{{pm.list}}" as="m" hint-placeholder-count="4">
      <button class="tu-press" role="radio" aria-checked="{{m.on}}" onClick="{{m.pick}}" style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 0; border-top: {{m.border}}">
        <sc-if value="{{m.hasLogo}}" hint-placeholder-val="{{true}}"><img src="{{m.logo}}" alt="" style="width: 44px; height: 28px; flex: none; display: block; object-fit: contain"></sc-if>
        <sc-if value="{{m.noLogo}}" hint-placeholder-val="{{false}}"><span class="tu-tile" style="width: 44px; background: {{m.tileBg}}; color: {{m.tileC}}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="{{m.d}}"></path></svg></span></sc-if>
        <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">{{m.title}}</span>
          <span class="t-caption" style="color: var(--text-secondary)">{{m.sub}}</span>
        </span>
        <span style="width: 24px; height: 24px; flex: none; box-sizing: border-box; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: inset 0 0 0 2px {{m.ring}}">
          <sc-if value="{{m.on}}" hint-placeholder-val="{{false}}"><span class="tu-checkpop" style="width: 12px; height: 12px; border-radius: 50%; background: var(--accent-primary)"></span></sc-if>
        </span>
      </button>
    </sc-for>
  </div>
  <button class="tu-press" onClick="{{act.addPayMethod}}" style="flex: none; height: 48px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 14px; box-shadow: inset 0 0 0 1px var(--border-strong); color: var(--icon-secondary)">
    <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s16}}"></x-import>
    <span class="t-body-s-strong" style="color: var(--text-secondary)">Add a card or account</span>
  </button>
  <span class="t-caption" style="text-align: center; color: var(--text-tertiary); flex: none">Payments go through your bank or wallet. TripUp never stores card numbers.</span>
</div>
</sc-if>

<!-- New trip -->
<sc-if value="{{sh.newTrip}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="New trip" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="x" label="Close" on-click="{{act.closeSheet}}"></x-import>
    <h2 class="t-title-m" style="color: var(--text-primary)">New trip</h2>
    <span style="width: 40px"></span>
  </div>
  <label class="tu-field" style="height: 56px; flex: none"><input type="text" placeholder="Trip name (optional)" aria-label="Trip name" value="{{ntv.name}}" onChange="{{act.onTripName}}"></label>
  <span class="t-label" style="color: var(--text-tertiary); flex: none">Where to?</span>
  <label class="tu-field" style="flex: none">
    <x-import component-from-global-scope="TripUp.Icon" name="search" size="{{n.s18}}"></x-import>
    <input type="text" placeholder="Search a city or place" aria-label="Search destination" value="{{ntv.q}}" onChange="{{act.onDestQ}}">
    <sc-if value="{{ntv.hasQ}}" hint-placeholder-val="{{false}}">
      <button class="tu-press" aria-label="Clear destination" onClick="{{act.clearDest}}" style="width: 24px; height: 24px; flex: none; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--icon-secondary)"><x-import component-from-global-scope="TripUp.Icon" name="x" size="{{n.s14}}"></x-import></button>
    </sc-if>
  </label>
  <sc-if value="{{ntv.showResults}}" hint-placeholder-val="{{true}}">
    <div class="tu-fade" style="display: flex; flex-direction: column; gap: 6px; flex: none">
      <div role="listbox" aria-label="Destinations" style="padding: 0 14px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
        <sc-for list="{{ntv.results}}" as="d" hint-placeholder-count="4">
          <button class="tu-press" role="option" aria-selected="false" onClick="{{d.pick}}" style="display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px 0; border-top: {{d.border}}">
            <span class="tu-tile"><x-import component-from-global-scope="TripUp.Icon" name="map-pin" size="{{n.s18}}"></x-import></span>
            <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px">
              <span class="t-body-m-strong" style="color: var(--text-primary)">{{d.name}}</span>
              <span class="t-caption" style="color: var(--text-secondary)">{{d.sub}}</span>
            </span>
          </button>
        </sc-for>
        <sc-if value="{{ntv.noResults}}" hint-placeholder-val="{{false}}">
          <span class="t-body-s" style="display: block; padding: 14px 0; color: var(--text-secondary)">No places match “{{ntv.q}}”</span>
        </sc-if>
      </div>
    </div>
  </sc-if>
  <sc-if value="{{ntv.hasDest}}" hint-placeholder-val="{{false}}">
    <div class="tu-pop" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 16px; background: var(--accent-soft); box-shadow: inset 0 0 0 1.5px var(--accent-primary); flex: none">
      <span class="tu-tile" style="background: var(--accent-primary); color: var(--text-on-accent)"><x-import component-from-global-scope="TripUp.Icon" name="map-pin" size="{{n.s18}}"></x-import></span>
      <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px">
        <span class="t-body-m-strong" style="color: var(--text-primary)">{{ntv.destName}}</span>
        <span class="t-caption" style="color: var(--text-secondary)">{{ntv.destSub}}</span>
      </span>
      <span class="tu-checkpop" style="width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s14}}"></x-import></span>
    </div>
  </sc-if>
  <span class="t-label" style="color: var(--text-tertiary); flex: none">When</span>
  <div style="padding: 10px 10px 8px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); flex: none">
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 0 2px 6px">
      <button class="tu-press" aria-label="Previous month" disabled="{{ntv.cal.noPrev}}" onClick="{{act.calPrev}}" style="width: 32px; height: 32px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--icon-primary)"><x-import component-from-global-scope="TripUp.Icon" name="chevron-left" size="{{n.s16}}"></x-import></button>
      <span class="t-body-m-strong" aria-live="polite" style="color: var(--text-primary)">{{ntv.cal.month}}</span>
      <button class="tu-press" aria-label="Next month" disabled="{{ntv.cal.noNext}}" onClick="{{act.calNext}}" style="width: 32px; height: 32px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--bg-muted); color: var(--icon-primary)"><x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import></button>
    </div>
    <div role="grid" aria-label="Pick trip dates" style="display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); row-gap: 2px">
      <sc-for list="{{ntv.cal.dow}}" as="w" hint-placeholder-count="7">
        <span class="t-caption" style="text-align: center; padding: 2px 0 6px; color: var(--text-tertiary)">{{w.l}}</span>
      </sc-for>
      <sc-for list="{{ntv.cal.cells}}" as="c" hint-placeholder-count="35">
        <div style="height: 40px; display: flex; align-items: center; justify-content: center; background: {{c.band}}">
          <sc-if value="{{c.isDay}}" hint-placeholder-val="{{true}}">
            <button class="tu-press" disabled="{{c.off}}" onClick="{{c.pick}}" aria-label="{{c.aria}}" aria-pressed="{{c.on}}" style="width: 38px; height: 38px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: {{c.bg}}; color: {{c.color}}; box-shadow: {{c.ring}}; text-align: center"><span class="t-body-s-strong">{{c.n}}</span></button>
          </sc-if>
        </div>
      </sc-for>
    </div>
  </div>
  <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px; background: {{ntv.whenBg}}; flex: none">
    <span style="display: flex; flex-direction: column; gap: 1px">
      <span class="t-body-s-strong" style="color: var(--text-primary)">{{ntv.whenLabel}}</span>
      <span class="t-caption" style="color: var(--text-secondary)">{{ntv.whenSub}}</span>
    </span>
    <sc-if value="{{ntv.hasRange}}" hint-placeholder-val="{{false}}">
      <button class="tu-press t-body-s-strong" onClick="{{act.clearDates}}" style="color: var(--accent-text)">Clear</button>
    </sc-if>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; flex: none">
    <span class="t-label" style="color: var(--text-tertiary)">Who's coming</span>
    <span class="t-caption" style="color: var(--text-tertiary)">{{ntv.whoCount}}</span>
  </div>
  <div class="tu-hscroll" style="display: flex; gap: 14px; flex: none; margin: 0 -20px; padding: 2px 20px" role="group" aria-label="Invite friends">
    <sc-for list="{{ntv.who}}" as="p" hint-placeholder-count="4">
      <button class="tu-press" role="checkbox" aria-checked="{{p.on}}" onClick="{{p.pick}}" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; width: 48px">
        <span class="tu-fadeop" style="display: inline-flex; opacity: {{p.op}}"><x-import component-from-global-scope="TripUp.Avatar" size="L" initials="{{p.i}}" name="{{p.name}}" color="{{p.c}}"></x-import></span>
        <sc-if value="{{p.on}}" hint-placeholder-val="{{true}}"><span class="tu-checkpop" style="position: absolute; left: 30px; top: -2px; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent); box-shadow: 0 0 0 2px var(--bg-surface)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s14}}"></x-import></span></sc-if>
        <span class="t-caption" style="color: var(--text-secondary)">{{p.name}}</span>
      </button>
    </sc-for>
    <button class="tu-press" onClick="{{act.ntAddMember}}" aria-label="Add member" style="display: flex; flex-direction: column; align-items: center; gap: 6px; width: 48px">
      <span style="width: 40px; height: 40px; box-sizing: border-box; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; box-shadow: inset 0 0 0 1.5px var(--accent-primary); color: var(--accent-text)"><x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s20}}"></x-import></span>
      <span class="t-caption" style="color: var(--accent-text)">Add</span>
    </button>
  </div>
  <div style="flex: none; padding-top: 4px"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" icon="plus" disabled="{{ntv.cantCreate}}" on-click="{{act.createTrip}}">{{ntv.cta}}</x-import></div>
</div>
</sc-if>

<!-- Add expense: choose how -->
<sc-if value="{{sh.expenseChoice}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet" role="dialog" aria-label="Add expense" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; flex-direction: column; gap: 2px; padding: 4px 0">
    <h2 class="t-title-l" style="color: var(--text-primary)">Add expense</h2>
    <span class="t-body-s" style="color: var(--text-secondary)">Lisbon long weekend · split with the group</span>
  </div>
  <div style="border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
    <sc-for list="{{ec.rows}}" as="r" hint-placeholder-count="2">
      <button class="tu-press tu-row" onClick="{{r.go}}" style="display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; padding: 14px; border-top: {{r.border}}; color: var(--icon-secondary)">
        <span style="width: 40px; height: 40px; flex: none; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-soft); color: var(--accent-text)"><x-import component-from-global-scope="TripUp.Icon" name="{{r.icon}}" size="{{n.s20}}"></x-import></span>
        <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">{{r.title}}</span>
          <span class="t-body-s" style="color: var(--text-secondary)">{{r.sub}}</span>
        </span>
        <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import>
      </button>
    </sc-for>
  </div>
</div>
</sc-if>

<!-- Add activity -->
<sc-if value="{{sh.addActivity}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet" role="dialog" aria-label="{{itv.addTitle}}" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; justify-content: space-between; align-items: center">
    <x-import component-from-global-scope="TripUp.IconButton" variant="solid" icon="x" label="Close" on-click="{{act.closeSheet}}"></x-import>
    <h2 class="t-title-m" style="color: var(--text-primary)">{{itv.addTitle}}</h2>
    <span style="width: 40px"></span>
  </div>
  <x-import component-from-global-scope="TripUp.TextField" icon="calendar" placeholder="What's the plan?" aria-label="Activity name" value="{{aa.name}}" on-change="{{act.onActName}}" auto-focus="{{yes}}"></x-import>
  <sc-if value="{{yes}}" hint-placeholder-val="{{true}}">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <span class="t-label" style="color: var(--text-tertiary)">Day</span>
      <div style="display: flex; gap: 8px" role="group" aria-label="Day">
        <sc-for list="{{aa.days}}" as="d" hint-placeholder-count="4">
          <button class="tu-press" aria-pressed="{{d.on}}" onClick="{{d.pick}}" style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 0; border-radius: 14px; background: {{d.bg}}">
            <span class="t-caption" style="color: {{d.c1}}">{{d.lbl}}</span>
            <span class="t-numeric-m" style="color: {{d.c2}}">{{d.d}}</span>
          </button>
        </sc-for>
      </div>
      <div style="position: relative; display: flex; justify-content: center; align-items: center; gap: 24px; padding: 8px 0; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
        <span style="position: absolute; left: 16px; right: 16px; top: 64px; height: 44px; border-radius: 10px; background: var(--bg-muted)"></span>
        <div style="position: relative; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 6px" role="group" aria-label="Hour">
          <sc-for list="{{aa.hours}}" as="h" hint-placeholder-count="5">
            <button class="tu-press {{h.cls}}" onClick="{{h.pick}}" aria-label="{{h.aria}}" style="opacity: {{h.op}}; color: var(--text-primary); min-height: 22px; transition: opacity .2s">{{h.v}}</button>
          </sc-for>
        </div>
        <span class="t-numeric-l" style="position: relative; color: var(--text-primary)">:</span>
        <div style="position: relative; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 6px" role="group" aria-label="Minutes">
          <sc-for list="{{aa.mins}}" as="m" hint-placeholder-count="5">
            <button class="tu-press {{m.cls}}" onClick="{{m.pick}}" aria-label="{{m.aria}}" style="opacity: {{m.op}}; color: var(--text-primary); min-height: 22px; transition: opacity .2s">{{m.v}}</button>
          </sc-for>
        </div>
      </div>
      <div aria-live="polite" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; border-radius: 14px; background: var(--status-success-soft)">
        <span class="t-body-s-strong" style="color: var(--text-primary)">{{aa.when}}</span>
        <span class="t-body-s-strong" style="color: var(--status-success-text)">{{aa.whenSub}}</span>
      </div>
    </div>
  </sc-if>
  <p class="t-caption" style="margin: 0; color: var(--text-tertiary)">Everyone in the trip sees it in the itinerary right away.</p>
  <x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" disabled="{{aa.cantAdd}}" on-click="{{act.addActivity}}">Add to itinerary</x-import>
</div>
</sc-if>

<!-- Activity details -->
<sc-if value="{{sh.activity}}" hint-placeholder-val="{{false}}">
<div class="{{sheetAnim}} {{closing}} tu-sheet tu-scroll" role="dialog" aria-label="{{av.title}}" style="position: absolute; left: 0; right: 0; bottom: 0; z-index: 31; max-height: 796px; box-sizing: border-box; padding: 8px 20px 40px; display: flex; flex-direction: column; gap: 12px; background: var(--bg-surface); border-radius: 28px 28px 0 0; box-shadow: var(--elevation-sheet)">
  <div style="margin: 0 -20px; flex: none"><x-import component-from-global-scope="TripUp.SheetGrabber"></x-import></div>
  <div style="display: flex; align-items: center; gap: 12px; flex: none">
    <span style="width: 44px; height: 44px; flex: none; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-soft); color: var(--accent-text)"><x-import component-from-global-scope="TripUp.Icon" name="{{av.icon}}" size="{{n.s20}}"></x-import></span>
    <span style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px">
      <h2 class="t-title-m" style="color: var(--text-primary)">{{av.title}}</h2>
      <span class="t-body-s" style="color: var(--text-secondary)">{{av.subtitle}}</span>
    </span>
    <x-import component-from-global-scope="TripUp.Chip" tone="{{av.stateTone}}">{{av.stateLabel}}</x-import>
  </div>

  <span class="t-label" style="color: var(--text-tertiary); flex: none; padding-top: 4px">Date &amp; time</span>
  <button class="tu-press" onClick="{{act.actTogglePicker}}" aria-expanded="{{av.picker}}" style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); color: var(--icon-secondary); flex: none">
    <x-import component-from-global-scope="TripUp.Icon" name="calendar" size="{{n.s18}}"></x-import>
    <span class="t-body-m" style="flex: 1; color: var(--text-primary)">{{av.when}}</span>
    <span class="t-body-s-strong" style="color: var(--accent-text)">{{av.pickerLabel}}</span>
  </button>
  <sc-if value="{{av.picker}}" hint-placeholder-val="{{false}}">
    <div class="tu-fadeup" style="display: flex; flex-direction: column; gap: 10px; flex: none">
      <div style="display: flex; gap: 8px" role="group" aria-label="Day">
        <sc-for list="{{av.days}}" as="d" hint-placeholder-count="4">
          <button class="tu-press" aria-pressed="{{d.on}}" onClick="{{d.pick}}" style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 0; border-radius: 14px; background: {{d.bg}}">
            <span class="t-caption" style="color: {{d.c1}}">{{d.lbl}}</span>
            <span class="t-numeric-m" style="color: {{d.c2}}">{{d.d}}</span>
          </button>
        </sc-for>
      </div>
      <div style="position: relative; display: flex; justify-content: center; align-items: center; gap: 24px; padding: 8px 0; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle)">
        <span style="position: absolute; left: 16px; right: 16px; top: 64px; height: 44px; border-radius: 10px; background: var(--bg-muted)"></span>
        <div style="position: relative; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 6px" role="group" aria-label="Hour">
          <sc-for list="{{av.hours}}" as="h" hint-placeholder-count="5">
            <button class="tu-press {{h.cls}}" onClick="{{h.pick}}" aria-label="{{h.aria}}" style="opacity: {{h.op}}; color: var(--text-primary); min-height: 22px">{{h.v}}</button>
          </sc-for>
        </div>
        <span class="t-numeric-l" style="position: relative; color: var(--text-primary)">:</span>
        <div style="position: relative; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 6px" role="group" aria-label="Minutes">
          <sc-for list="{{av.mins}}" as="m" hint-placeholder-count="5">
            <button class="tu-press {{m.cls}}" onClick="{{m.pick}}" aria-label="{{m.aria}}" style="opacity: {{m.op}}; color: var(--text-primary); min-height: 22px">{{m.v}}</button>
          </sc-for>
        </div>
      </div>
    </div>
  </sc-if>

  <div style="display: flex; justify-content: space-between; align-items: center; flex: none; padding-top: 4px">
    <span class="t-label" style="color: var(--text-tertiary)">Who's in</span>
    <span class="t-caption" style="color: var(--text-tertiary)">{{av.going}}</span>
  </div>
  <div style="display: flex; justify-content: space-between; flex: none" role="group" aria-label="Participants">
    <sc-for list="{{av.people}}" as="p" hint-placeholder-count="6">
      <button class="tu-press" role="checkbox" aria-checked="{{p.on}}" onClick="{{p.pick}}" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; width: 52px">
        <span class="tu-fadeop" style="display: inline-flex; opacity: {{p.op}}"><x-import component-from-global-scope="TripUp.Avatar" size="L" initials="{{p.i}}" name="{{p.name}}" color="{{p.c}}"></x-import></span>
        <sc-if value="{{p.on}}" hint-placeholder-val="{{true}}"><span class="tu-checkpop" style="position: absolute; left: 32px; top: -2px; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: var(--accent-primary); color: var(--text-on-accent); box-shadow: 0 0 0 2px var(--bg-surface)"><x-import component-from-global-scope="TripUp.Icon" name="check" size="{{n.s14}}"></x-import></span></sc-if>
        <span class="t-caption" style="color: var(--text-secondary)">{{p.name}}</span>
      </button>
    </sc-for>
  </div>

  <span class="t-label" style="color: var(--text-tertiary); flex: none; padding-top: 4px">Expenses</span>
  <sc-if value="{{av.showExp}}" hint-placeholder-val="{{true}}">
    <sc-if value="{{av.hasExp}}" hint-placeholder-val="{{false}}">
      <button class="tu-press tu-row" onClick="{{act.actSeeExpense}}" style="display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 16px; background: var(--bg-elevated); box-shadow: inset 0 0 0 1px var(--border-subtle); color: var(--icon-secondary); flex: none">
        <span style="width: 36px; height: 36px; flex: none; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--status-success-soft); color: var(--status-success-text)"><x-import component-from-global-scope="TripUp.Icon" name="euro" size="{{n.s18}}"></x-import></span>
        <span style="flex: 1; display: flex; flex-direction: column; gap: 2px">
          <span class="t-body-m-strong" style="color: var(--text-primary)">{{av.expLabel}}</span>
          <span class="t-body-s" style="color: var(--text-secondary)">Logged · see it in Expenses</span>
        </span>
        <x-import component-from-global-scope="TripUp.Icon" name="chevron-right" size="{{n.s16}}"></x-import>
      </button>
    </sc-if>
    <sc-if value="{{av.noExp}}" hint-placeholder-val="{{true}}">
      <button class="tu-press" onClick="{{act.actAddExpense}}" style="flex: none; height: 48px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 14px; box-shadow: inset 0 0 0 1px var(--border-strong); color: var(--icon-secondary)">
        <x-import component-from-global-scope="TripUp.Icon" name="plus" size="{{n.s16}}"></x-import>
        <span class="t-body-s-strong" style="color: var(--text-secondary)">Add an expense for this</span>
      </button>
    </sc-if>
  </sc-if>

  <div style="flex: none; padding-top: 8px"><x-import component-from-global-scope="TripUp.Button" variant="primary" size="L" disabled="{{av.cantSave}}" on-click="{{act.actSave}}">Save changes</x-import></div>
</div>
</sc-if>

<!-- Toast -->
<sc-if value="{{toast.show}}" hint-placeholder-val="{{false}}">
  <div class="tu-toastin" role="status" style="position: absolute; left: 0; right: 0; top: 110px; z-index: 60; display: flex; justify-content: center; align-items: center; gap: 8px; pointer-events: none">
    <x-import component-from-global-scope="TripUp.Toast">{{toast.text}}</x-import>
    <sc-if value="{{toast.hasUndo}}" hint-placeholder-val="{{false}}">
      <button class="tu-press t-body-s-strong" onClick="{{toast.undo}}" style="pointer-events: auto; height: 44px; padding: 0 18px; border-radius: 999px; background: var(--accent-primary); color: var(--text-on-accent)">Undo</button>
    </sc-if>
  </div>
</sc-if>

<div style="position: absolute; left: 0; bottom: 0; z-index: 70; pointer-events: none"><x-import component-from-global-scope="TripUp.HomeIndicator"></x-import></div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"start":{"editor":"enum","options":["home","search","newTrip","trip","addPeople","itinFull","map","chat","newPoll","addOption","pollCloses","customDeadline","livePoll","lock","pollDetails","pollClosed","island","itinerary","expenseChoice","scan","expense","whoSharing","whoPaid","manual","expenses","settle","pay","payDone","squared"],"default":"home","section":"Prototype"},"theme":{"editor":"enum","options":["dark","light"],"default":"dark","section":"Prototype"},"$preview":{"width":393,"height":852}}'>
const IMG = {
  lisbon: '/design/c367701906c489000f28144d6101ef21.jpg',
  ramiro: '/design/46424298ed6c2e31c2f365d09a9b2637.jpg',
  taberna: '/design/a50e04b9b8f47c1455d5beae86e8ffaa.jpg',
  saobento: '/design/761aaf94d38acd0392a23be133421b83.jpg',
  berlin: '/design/447171a9186d91cf1b5d8297ea7b198e.jpg',
  roskilde: '/design/a5341dcdc5bacb7a56bd75d60a77dbd2.jpg',
  valthorens: '/design/ad143f9d84c2c14e5ba1ff62ac0015a1.jpg'
};
const P = {
  ari: { name: 'Ari', i: 'AC', c: 'var(--person-ari)' },
  nic: { name: 'Nic', i: 'NL', c: 'var(--person-nic)' },
  maya: { name: 'Maya', i: 'MO', c: 'var(--person-maya)' },
  jonas: { name: 'Jonas', i: 'JW', c: 'var(--person-jonas)' },
  lea: { name: 'Lea', i: 'LM', c: 'var(--person-lea)' },
  ren: { name: 'Ren', i: 'RT', c: 'var(--person-ren)' },
  sofia: { name: 'Sofia', i: 'SR', c: 'var(--neutral-450)' },
  tom: { name: 'Tom', i: 'TH', c: 'var(--neutral-300)' }
};
const CORE = ['ari', 'nic', 'maya', 'jonas', 'lea'];
const ALL = ['ari', 'nic', 'maya', 'jonas', 'lea', 'ren'];
const CONTACTS = [
  { id: 'ren', full: 'Ren Tanaka', sub: 'Friend of Lea & Jonas' },
  { id: 'sofia', full: 'Sofia Ramos', sub: 'Friend of Maya' },
  { id: 'tom', full: 'Tom Hale', sub: 'In your contacts' }
];
const PLACES = {
  eurico: { name: 'O Velho Eurico', sub: '0.8 km · Largo de São Cristóvão 3', img: IMG.taberna, rating: '4.7', reviews: '1.9k', price: '€€', vibe: 'Tasca', photos: ['taberna', 'drinks', 'selfie'] },
  ze: { name: 'Zé da Mouraria', sub: '0.9 km · Rua João do Outeiro 24', img: IMG.ramiro, rating: '4.3', reviews: '2.4k', price: '€', vibe: 'Home cooking', photos: ['ramiro', 'selfie', 'beach'] },
  ramiro: { name: 'Cervejaria Ramiro', sub: '1.4 km · Av. Almirante Reis 1', img: IMG.ramiro, rating: '4.6', reviews: '12.8k', price: '€€', vibe: 'Seafood', photos: ['ramiro', 'drinks', 'beach'] },
  taberna: { name: 'Taberna da Rua das Flores', sub: '2.1 km · Rua das Flores 103', img: IMG.taberna, rating: '4.5', reviews: '3.1k', price: '€€', vibe: 'Small plates', photos: ['taberna', 'drinks', 'selfie'] },
  saobento: { name: 'Café de São Bento', sub: '3.0 km · Rua de São Bento 212', img: IMG.saobento, rating: '4.4', reviews: '4.6k', price: '€€€', vibe: 'Steakhouse', photos: ['saobento', 'drinks', 'beach'] }
};
const PHOTO = { taberna: IMG.taberna, ramiro: IMG.ramiro, saobento: IMG.saobento, drinks: '/design/98fc37af2fd9166ef75676c8b0c19621.jpg', selfie: '/design/b1385b7806a76e0e57b7cf2053d22e34.jpg', beach: '/design/98a51e49375369e298b8a0295e21b222.jpg' };
const SEARCH = ['eurico', 'ze', 'ramiro', 'taberna', 'saobento'];
const ITEMS = [
  { id: 'water', name: 'Still water 1.5L', q: 2, amt: 600 },
  { id: 'coke', name: 'Coca-Cola', q: 2, amt: 500 },
  { id: 'orange', name: 'Orange soda', q: 1, amt: 300 },
  { id: 'red', name: 'Red wine · Douro', q: 1, amt: 2900 },
  { id: 'white', name: 'White wine · Alvarinho', q: 1, amt: 2900 },
  { id: 'bread', name: 'Bread, butter & olives', q: 6, amt: 1200 },
  { id: 'croq', name: 'Alheira croquettes', q: 2, amt: 1400 },
  { id: 'clams', name: 'Clams Bulhão Pato', q: 2, amt: 3600 },
  { id: 'octo', name: 'Grilled octopus', q: 2, amt: 5200 },
  { id: 'bac', name: 'Bacalhau à Brás', q: 2, amt: 3800 },
  { id: 'pica', name: 'Pork pica-pau', q: 1, amt: 1600 },
  { id: 'nata', name: 'Pastel de nata', q: 6, amt: 1800 }
];
const TOTAL = 25800;
const SPENT_BEFORE = 111050;
const BEFORE = { ari: -16960, nic: -20360, maya: 67790, jonas: -15760, lea: -14710, ren: 0 };
const PAYMETA = {
  'ren>maya': { m: 'Apple Pay', t: '23:42' },
  'nic>maya': { m: 'Bank transfer', t: '23:44' },
  'jonas>maya': { m: 'Debit card', t: '23:47' },
  'lea>maya': { m: 'Bank transfer', t: '23:49' },
  'ari>maya': { m: 'Apple Pay', t: '23:51' }
};
const PAYORDER = Object.keys(PAYMETA);
const PAYMETHODS = [
  { id: 'applepay', title: 'Apple Pay', logo: '/design/87ea8c2bcdcbcaf2d70bd07518115381.svg', sub: 'Visa •• 4821 · instant', d: 'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4' },
  { id: 'mobilepay', title: 'MobilePay', logo: '/design/854fbb53c9d7bf0b43555439a2f00239.svg', sub: '+45 •• •• 18 · instant', d: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01' },
  { id: 'card', title: 'Debit card', sub: 'Mastercard •• 0937', d: 'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM2 10h20' },
  { id: 'bank', title: 'Bank transfer', sub: 'Instant SEPA · under a minute', d: 'M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l9 5H3z' }
];
const PAYTO = { maya: 'IBAN •• 4410', ari: 'IBAN •• 2208', nic: 'IBAN •• 7731', jonas: 'IBAN •• 0596', lea: 'IBAN •• 3184', ren: 'IBAN •• 6620' };
const NOW = 18 * 60 + 40;
const DINNER = 20 * 60 + 30;
const DAYS = [
  { lbl: 'Today', d: 25 }, { lbl: 'Mon', d: 26 }, { lbl: 'Tue', d: 27 },
  { lbl: 'Wed', d: 28 }, { lbl: 'Thu', d: 29 }
];
const TPL = { 'Place': 'Where should we eat tonight?', 'Time': 'What time works for dinner?', 'Yes No': 'Should we book a table?', 'Custom': '' };
const HIST = [
  { day: 'Sat 24 Oct', rows: [{ key: 'h-tuk', cat: 'activity', amt0: 7500, payer0: 'lea', icon: 'map', title: 'Tuk-tuk tour Alfama', sub: 'Lea paid €75.00', lbl: 'You owe', owe: true, amt: '€15.00' }] },
  { day: 'Fri 23 Oct', rows: [
    { key: 'h-groc', cat: 'groceries', amt0: 6450, payer0: 'jonas', icon: 'receipt', title: 'Pingo Doce groceries', sub: 'Jonas paid €64.50', lbl: 'You owe', owe: true, amt: '€12.90' },
    { key: 'h-sintra', cat: 'transport', amt0: 5250, payer0: 'ari', icon: 'tram', title: 'Sintra train tickets', sub: 'You paid €52.50', lbl: 'You lent', owe: false, amt: '€42.00' }] },
  { day: 'Thu 22 Oct', rows: [
    { key: 'h-pasteis', cat: 'food', amt0: 1850, payer0: 'nic', icon: 'utensils', title: 'Pastéis de Belém', sub: 'Nic paid €18.50', lbl: 'You owe', owe: true, amt: '€3.70' },
    { key: 'h-casa', cat: 'stay', amt0: 90000, payer0: 'maya', icon: 'map-pin', title: 'Casa in Graça (3 nights)', sub: 'Maya paid €900.00', lbl: 'You owe', owe: true, amt: '€180.00' }] }
];

function histOrig(r) { return { key: r.key, title: r.title, cat: r.cat, icon: r.icon, amt: r.amt0, payer: r.payer0, paid: { [r.payer0]: r.amt0 }, among: CORE.slice() }; }
function expEffect(e) { const o = {}; const pd = e.paid || { [e.payer]: e.amt }; Object.keys(pd).forEach(id => { o[id] = (o[id] || 0) + pd[id]; }); e.among.forEach(id => { o[id] = (o[id] || 0) - e.amt / e.among.length; }); return o; }
const OPTS = {
  t1930: { name: '19:30', sub: '', icon: 'clock' },
  t2030: { name: '20:30', sub: '', icon: 'clock' },
  t2100: { name: '21:00', sub: '', icon: 'clock' },
  yes: { name: 'Yes', sub: 'Book a table for the group', icon: 'check' },
  no: { name: 'No', sub: 'Walk in and wing it', icon: 'x' }
};
const TPL_OPTS = { 'Place': ['ramiro', 'taberna', 'saobento'], 'Time': ['t1930', 't2030', 't2100'], 'Yes No': ['yes', 'no'], 'Custom': [] };
const DESTS = [
  { id: 'porto', name: 'Porto', sub: 'Portugal' }, { id: 'bcn', name: 'Barcelona', sub: 'Spain' },
  { id: 'cph', name: 'Copenhagen', sub: 'Denmark' }, { id: 'ams', name: 'Amsterdam', sub: 'Netherlands' }
];
const LOCS = [
  { id: 'porto', name: 'Porto', sub: 'Portugal' }, { id: 'bcn', name: 'Barcelona', sub: 'Catalonia, Spain' },
  { id: 'cph', name: 'Copenhagen', sub: 'Denmark' }, { id: 'ams', name: 'Amsterdam', sub: 'Netherlands' },
  { id: 'paris', name: 'Paris', sub: 'Île-de-France, France' }, { id: 'rome', name: 'Rome', sub: 'Lazio, Italy' },
  { id: 'berlin', name: 'Berlin', sub: 'Germany' }, { id: 'prague', name: 'Prague', sub: 'Czechia' },
  { id: 'vienna', name: 'Vienna', sub: 'Austria' }, { id: 'madrid', name: 'Madrid', sub: 'Spain' },
  { id: 'seville', name: 'Seville', sub: 'Andalusia, Spain' }, { id: 'london', name: 'London', sub: 'United Kingdom' },
  { id: 'aarhus', name: 'Aarhus', sub: 'Denmark' }, { id: 'bergen', name: 'Bergen', sub: 'Norway' },
  { id: 'naples', name: 'Naples', sub: 'Campania, Italy' }, { id: 'athens', name: 'Athens', sub: 'Greece' },
  { id: 'edinburgh', name: 'Edinburgh', sub: 'Scotland, UK' }, { id: 'budapest', name: 'Budapest', sub: 'Hungary' },
  { id: 'sintra', name: 'Sintra', sub: 'Lisbon, Portugal' }, { id: 'madeira', name: 'Funchal, Madeira', sub: 'Portugal' }
];
const POPULAR = ['porto', 'bcn', 'cph', 'ams'];
const TODAY_ISO = '2026-10-25';
const MONS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WDS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function iso(y, m, d) { const t = new Date(Date.UTC(y, m, d)); return t.getUTCFullYear() + '-' + String(t.getUTCMonth() + 1).padStart(2, '0') + '-' + String(t.getUTCDate()).padStart(2, '0'); }
function dOf(s) { const a = s.split('-').map(Number); return new Date(Date.UTC(a[0], a[1] - 1, a[2])); }
function fmtD(s) { const t = dOf(s); return WDS[t.getUTCDay()] + ' ' + t.getUTCDate() + ' ' + MONS[t.getUTCMonth()]; }
function dBetween(a, b) { return Math.round((dOf(b) - dOf(a)) / 86400000); }
const WHENS = [
  { id: 'next', label: 'Next weekend', dates: '30 Oct–1 Nov', sub: 'in 5 days' },
  { id: 'two', label: 'In 2 weeks', dates: '6–8 Nov', sub: 'in 12 days' },
  { id: 'dec', label: 'Before Christmas', dates: '11–13 Dec', sub: 'in 47 days' }
];
const ITIN = [
  { lbl: 'Thu', d: 22, name: 'Thu 22 Oct', items: [['14:00', 'Check in at Casa in Graça', 'map-pin', null], ['16:30', 'Pastéis de Belém', 'utensils', 'Nic paid €18.50'], ['20:00', 'Dinner at the house', 'utensils', null]] },
  { lbl: 'Fri', d: 23, name: 'Fri 23 Oct', items: [['09:15', 'Train to Sintra', 'tram', 'You paid €52.50'], ['11:00', 'Pena Palace', 'map', null], ['19:00', 'Groceries + cook at home', 'receipt', 'Jonas paid €64.50']] },
  { lbl: 'Sat', d: 24, name: 'Sat 24 Oct', items: [['10:30', 'Tuk-tuk tour of Alfama', 'map', 'Lea paid €75.00'], ['15:00', 'Miradouro da Senhora do Monte', 'map', null], ['21:00', 'Fado night in Alfama', 'calendar', null]] },
  { lbl: 'Sun', d: 25, name: 'Sun 25 Oct', items: [] }
];
const TODAY_DONE = [['09:30', 'Breakfast at the house', 'utensils'], ['10:30', 'LX Factory', 'map'], ['13:00', 'Lunch at Time Out Market', 'utensils'], ['15:00', 'Belém Tower', 'check']];
const CATS = [
  { id: 'food', label: 'Food', icon: 'utensils' }, { id: 'drinks', label: 'Drinks', icon: 'utensils' },
  { id: 'transport', label: 'Transport', icon: 'tram' }, { id: 'activity', label: 'Activity', icon: 'map' },
  { id: 'stay', label: 'Stay', icon: 'map-pin' }, { id: 'groceries', label: 'Groceries', icon: 'receipt' },
  { id: 'other', label: 'Other', icon: 'more' }
];
const MAPPEOPLE = [
  { id: 'maya', x: 150, y: 384, where: 'Chiado', away: '1.3 km' },
  { id: 'nic', x: 200, y: 160, where: 'Intendente', away: '600 m' },
  { id: 'jonas', x: 318, y: 196, where: 'Graça', away: '350 m' },
  { id: 'lea', x: 322, y: 268, where: 'Graça', away: '450 m' }
];
const PLACEPOS = { taberna: { x: 100, y: 398 }, ramiro: { x: 163, y: 204 }, saobento: { x: 66, y: 250 }, eurico: { x: 157, y: 282 }, ze: { x: 140, y: 248 } };
const SPLACES = [
  { name: 'Taberna da Rua das Flores', sub: 'Chiado · in tonight’s poll' }, { name: 'Cervejaria Ramiro', sub: 'Intendente · in tonight’s poll' },
  { name: 'Café de São Bento', sub: 'São Bento · in tonight’s poll' }, { name: 'Belém Tower', sub: 'Belém · visited today' },
  { name: 'LX Factory', sub: 'Alcântara · visited today' }, { name: 'Pena Palace', sub: 'Sintra · Fri 23 Oct' }
];
const HOME_MAX = 470, HOME_MIN = 108;

function opt(s, id) {
  if (PLACES[id]) return { name: PLACES[id].name, sub: PLACES[id].sub, icon: 'map-pin', img: PLACES[id].img, place: true };
  const o = OPTS[id] || (s.custom && s.custom[id]) || { name: String(id), sub: '' };
  return Object.assign({ icon: 'poll', img: IMG.taberna, place: false }, o);
}
function eur(c) {
  const v = Math.abs(Math.round(c));
  const s = (v / 100).toFixed(2).split('.');
  return '€' + s[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',') + '.' + s[1];
}
function hm(m) { m = ((m % 1440) + 1440) % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
function join(a) { if (a.length <= 1) return a.join(''); return a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
function nm(id, you) { return id === 'ari' ? (you || 'You') : P[id].name; }
function dur(d) {
  if (d <= 0) return 'now';
  const days = Math.floor(d / 1440), h = Math.floor((d % 1440) / 60), m = d % 60;
  if (days) return days + ' d' + (h ? ' ' + h + ' h' : '');
  return [h ? h + ' h' : '', m ? m + ' min' : ''].filter(Boolean).join(' ');
}
function stack(ids, max) {
  const show = max && ids.length > max ? ids.slice(0, max - 1) : ids;
  const out = show.map((id, k) => ({ key: id, i: P[id].i, c: P[id].c, n: P[id].name, ml: k ? '-4px' : '0px' }));
  const more = ids.length - show.length;
  if (more > 0) out.push({ key: 'more', i: '+' + more, c: 'var(--neutral-300)', n: more + ' more', ml: '-4px' });
  return out;
}
function avatarProps(ids, max) {
  const show = max && ids.length > max ? ids.slice(0, max - 1) : ids;
  const out = show.map(id => ({ initials: P[id].i, color: P[id].c, name: P[id].name }));
  const more = ids.length - show.length;
  if (more > 0) out.push({ initials: '+' + more, color: 'var(--neutral-300)', name: more + ' more' });
  return out;
}
function cents(str) { const v = parseFloat(String(str == null ? '' : str).replace(',', '.')); return isNaN(v) ? 0 : Math.round(v * 100); }
function paidBy(e) { const ids = Object.keys(e.paid || { [e.payer]: 1 }); return ids.length > 2 ? nm(ids[0]) + ' + ' + (ids.length - 1) + ' others' : join(ids.map(id => nm(id))); }
// Time of day in the Lisbon story, shown in the status bar and on receipts
function storyClock(s) {
  if (s.screen === 'squared') return '23:52';
  if (s.saved && (s.sheet === 'pay' || s.sheet === 'payMethod')) return '23:51';
  if (s.saved && s.sheet === 'settle') return '23:49';
  if (s.saved || ['expense', 'scan', 'manual'].includes(s.screen)) return '22:40';
  if (s.poll === 'closed') return '19:05';
  if (s.poll === 'live') return '18:52';
  return '18:40';
}
function line(k) { return k ? '1px solid var(--border-subtle)' : '0'; }

function preset(start) {
  const s = {
    screen: 'home', sheet: null, filter: 'Upcoming', added: { ren: false, sofia: false, tom: false }, contactQ: '', unread: 3,
    poll: 'none', tpl: 'Place', question: TPL.Place, opts: ['ramiro', 'taberna', 'saobento'], placeQ: 'Restaurants',
    rule: 'all', chip: 'Custom', day: 0, hh: 19, mm: 45, addItin: true, canChange: true, showWho: true,
    votes: {}, leaMsg: false, msgs: [], draft: '', winner: null, closedHow: '', decided: false,
    split: 'item', excl: {}, editItem: 'red', payers: { maya: '258.00' }, saved: false, paid: {},
    toast: null, islandOpen: true, anim: 'tu-swap', sheetAnim: '', closing: '',
    pollKind: 'Place', custom: {}, newOpt: '', homeTop: HOME_MAX, dragging: false,
    newTrips: [], nt: { name: '', q: '', dest: null, from: null, to: null, cal: 0, who: ['nic', 'maya', 'jonas', 'lea'] },
    actSel: null, actDraft: null, actEdits: {}, actExp: {}, linkAct: null,
    q: '', itinDay: 3, itinAdds: {}, actName: '', actTime: '22:00', actCustom: true, actDay: 3, actH: 22, actM: 30, sharing: false, mapSel: null,
    manual: [], m: { amt: '', title: '', cat: 'food', payer: 'ari', among: null }, scanPhase: 'aim', justScanned: false,
    removed: {}, histEdits: {}, editKey: null, editSrc: null, itinEdit: false, itinDrag: null, payKey: null, payStep: 'review', payMethod: 'applepay', payNote: ''
  };
  if (start && start !== 'home' && start !== 'trip') s.added.ren = true;
  const live = () => { s.poll = 'live'; s.votes = { ari: 'taberna', maya: 'ramiro', jonas: 'ramiro', lea: 'taberna', ren: 'taberna' }; s.leaMsg = true; s.unread = 0; };
  const closed = () => { live(); s.poll = 'closed'; s.votes.nic = 'saobento'; s.winner = 'taberna'; s.decided = true; s.closedHow = 'Everyone voted'; s.unread = 2; };
  const wine = () => { s.excl = { red: ['nic', 'ren'], white: ['nic', 'ren'] }; };
  switch (start) {
    case 'trip': s.screen = 'trip'; break;
    case 'addPeople': s.screen = 'trip'; s.sheet = 'addPeople'; break;
    case 'chat': s.screen = 'chat'; s.unread = 0; break;
    case 'newPoll': s.screen = 'chat'; s.unread = 0; s.sheet = 'newPoll'; break;
    case 'addOption': s.screen = 'chat'; s.unread = 0; s.sheet = 'addOption'; break;
    case 'pollCloses': s.screen = 'chat'; s.unread = 0; s.sheet = 'pollCloses'; break;
    case 'customDeadline': s.screen = 'chat'; s.unread = 0; s.sheet = 'customDeadline'; break;
    case 'livePoll': live(); s.screen = 'chat'; break;
    case 'lock': live(); s.screen = 'lock'; break;
    case 'pollDetails': live(); s.screen = 'chat'; s.sheet = 'pollDetails'; break;
    case 'island': live(); s.screen = 'trip'; break;
    case 'pollClosed': closed(); s.screen = 'chat'; s.unread = 0; s.sheet = 'pollClosed'; break;
    case 'itinerary': closed(); s.screen = 'trip'; s.toast = { text: "Dinner's decided · added to 20:30" }; break;
    case 'expense': closed(); s.screen = 'expense'; break;
    case 'whoSharing': closed(); wine(); s.screen = 'expense'; s.sheet = 'whoSharing'; break;
    case 'whoPaid': closed(); wine(); s.screen = 'expense'; s.sheet = 'whoPaid'; s.payers = { maya: '200.00', lea: '58.00' }; break;
    case 'expenses': closed(); wine(); s.saved = true; s.screen = 'expenses'; break;
    case 'settle': closed(); wine(); s.saved = true; s.screen = 'expenses'; s.sheet = 'settle'; s.paid = { 'nic>maya': PAYMETA['nic>maya'] }; break;
    case 'pay': closed(); s.screen = 'expenses'; s.sheet = 'pay'; s.payKey = 'ari>maya'; s.payStep = 'review'; break;
    case 'payDone': closed(); s.screen = 'expenses'; s.sheet = 'pay'; s.payKey = 'ari>maya'; s.payStep = 'done'; s.paid = { 'ari>maya': { m: 'Apple Pay', t: 'just now' } }; break;
    case 'squared': closed(); wine(); s.saved = true; s.screen = 'squared'; s.paid = Object.assign({}, PAYMETA); break;
    case 'search': s.screen = 'search'; s.q = 'Lis'; break;
    case 'newTrip': s.sheet = 'newTrip'; s.nt.dest = 'porto'; s.nt.q = 'Porto'; s.nt.from = '2026-10-30'; s.nt.to = '2026-11-01'; break;
    case 'itinFull': s.screen = 'itin'; break;
    case 'map': live(); s.screen = 'map'; break;
    case 'scan': closed(); s.screen = 'scan'; s.scanPhase = 'reading'; break;
    case 'manual': closed(); wine(); s.saved = true; s.screen = 'manual'; s.m = { amt: '24.00', title: 'Taxi home', cat: 'transport', payer: 'ari', among: null }; break;
    case 'expenseChoice': closed(); s.screen = 'expenses'; s.sheet = 'expenseChoice'; break;
  }
  return s;
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = preset(props.start || 'home');
    this.timers = []; this._needCenter = true;
    this.payRunning = false;
    this.squaredPending = false;
  }
  componentDidUpdate(prev) {
    if (prev.start !== this.props.start) { this.clear(); this.setState(preset(this.props.start || 'home')); }
  }
  componentDidMount() {
    // Started mid-poll (a guide jump): Nic still votes on his own
    const s = this.state;
    if (s.poll === 'live' && !s.votes.nic) this.later(6000, () => { if (!this.state.votes.nic) this.castVote('nic', this.state.opts.includes('saobento') ? 'saobento' : this.state.opts[this.state.opts.length - 1]); });
  }
  componentWillUnmount() { this.clear(); }
  later(ms, fn) { const t = setTimeout(() => { this.timers = this.timers.filter(x => x !== t); fn(); }, ms); this.timers.push(t); }
  clear() { this.timers.forEach(clearTimeout); this.timers = []; this.payRunning = false; this.squaredPending = false; clearTimeout(this.toastT); }
  toast(text, ms, undo) { clearTimeout(this.toastT); this.setState({ toast: { text, undo: undo || null } }); this.toastT = setTimeout(() => this.setState({ toast: null }), ms || 2400); }
  motion(from, to) {
    if (from === to) return 'tu-swap';
    if (to === 'squared') return 'tu-zoom';
    if (to === 'lock' || from === 'lock') return 'tu-fadeup';
    const D = { home: 0, search: 1, trip: 1, chat: 1, itin: 2, map: 2, expenses: 2, scan: 3, manual: 3, expense: 4, squared: 5 };
    if (D[from] === D[to]) return 'tu-swap';
    return D[to] > D[from] ? 'tu-fwd' : 'tu-back';
  }
  go(screen, extra) { this.idrag = null; if (screen === 'map' && this.state.screen !== 'map') extra = Object.assign({ mapFrom: this.state.screen }, extra || {}); if (screen === 'trip') this._needCenter = true; this.setState(s => Object.assign({ screen, sheet: null, closing: '', sheetAnim: '', itinEdit: false, itinDrag: null, anim: this.motion(s.screen, screen) }, extra || {})); }
  sheet(name, extra) { this.setState(s => Object.assign({ sheet: name, closing: '', sheetAnim: s.sheet && name && s.sheet !== name ? 'tu-sheet-swap' : '' }, extra || {})); }
  closeSheetAnimated() {
    if (!this.state.sheet || this.state.closing) return;
    this.setState({ closing: 'tu-closing' });
    setTimeout(() => this.setState({ sheet: null, closing: '', sheetAnim: '' }), 230);
  }
  members(s) { return s.added.ren ? ALL : CORE; }

  deadline(s) {
    if (s.chip === '30 min') return NOW + 30;
    if (s.chip === '1 hour') return NOW + 60;
    if (s.chip === '3 hours') return NOW + 180;
    return s.day * 1440 + s.hh * 60 + s.mm;
  }
  dlLabel(s) { const d = this.deadline(s); const day = Math.floor(d / 1440); return (day ? DAYS[day].lbl + ' ' : '') + hm(d); }

  sharers(s, item) { const mem = this.members(s); const ex = s.excl[item] || []; const w = mem.filter(id => !ex.includes(id)); return w.length ? w : mem; }
  shares(s) {
    const mem = this.members(s); const sh = {}; ALL.forEach(id => { sh[id] = 0; });
    if (s.split === 'equal') { mem.forEach(id => { sh[id] = TOTAL / mem.length; }); return sh; }
    ITEMS.forEach(it => { const w = this.sharers(s, it.id); w.forEach(id => { sh[id] += it.amt / w.length; }); });
    return sh;
  }
  payersC(s) { const o = {}; Object.keys(s.payers).forEach(id => { o[id] = cents(s.payers[id]); }); return o; }
  balances(s) {
    const b = Object.assign({}, BEFORE);
    if (s.saved) { const sh = this.shares(s), pay = this.payersC(s); ALL.forEach(id => { b[id] += (pay[id] || 0) - sh[id]; }); }
    (s.manual || []).forEach(e => { const pd = e.paid || { [e.payer]: e.amt }; Object.keys(pd).forEach(id => { b[id] += pd[id]; }); e.among.forEach(id => { b[id] -= e.amt / e.among.length; }); });
    const he = s.histEdits || {};
    HIST.forEach(d => d.rows.forEach(r => { const ed = he[r.key]; if (!ed) return;
      const o = expEffect(histOrig(r)); Object.keys(o).forEach(id => { b[id] = (b[id] || 0) - o[id]; });
      if (!ed.deleted) { const n = expEffect(ed); Object.keys(n).forEach(id => { b[id] = (b[id] || 0) + n[id]; }); } }));
    Object.keys(b).forEach(k => { b[k] = Math.round(b[k]); });
    return b;
  }
  transfers(s) {
    const b = this.balances(s); const cr = [], db = [];
    Object.keys(b).forEach(id => { if (b[id] > 0) cr.push({ id, a: b[id] }); else if (b[id] < 0) db.push({ id, a: -b[id] }); });
    const out = []; let guard = 0;
    while (cr.length && db.length && guard++ < 20) {
      cr.sort((x, y) => y.a - x.a); db.sort((x, y) => y.a - x.a);
      const c = cr[0], d = db[0]; const x = Math.min(c.a, d.a);
      if (x >= 1) out.push({ from: d.id, to: c.id, amt: x, key: d.id + '>' + c.id });
      c.a -= x; d.a -= x;
      if (c.a < 1) cr.shift(); if (d.a < 1) db.shift();
    }
    return out;
  }

  pollInfo(s) {
    const el = this.members(s); const counts = {}; s.opts.forEach(o => { counts[o] = 0; });
    Object.keys(s.votes).forEach(u => { if (counts[s.votes[u]] != null && el.includes(u)) counts[s.votes[u]]++; });
    return { el, counts, voted: el.filter(id => s.votes[id]), waiting: el.filter(id => !s.votes[id]) };
  }
  castVote(u, o) {
    this.setState(s => {
      if (s.poll !== 'live') return null;
      const opt = s.opts.includes(o) ? o : s.opts[s.opts.length - 1];
      return { votes: Object.assign({}, s.votes, { [u]: opt }), leaMsg: s.leaMsg || (u === 'lea' && opt === 'taberna') };
    }, () => this.checkClose());
  }
  checkClose() {
    const s = this.state;
    if (s.poll !== 'live' || s.rule !== 'all') return;
    if (!this.pollInfo(s).waiting.length) this.later(800, () => this.closePoll('Everyone voted'));
  }
  closePoll(how) {
    const s = this.state; if (s.poll !== 'live') return;
    const { counts } = this.pollInfo(s);
    let max = -1; s.opts.forEach(o => { if (counts[o] > max) max = counts[o]; });
    const top = s.opts.filter(o => counts[o] === max);
    const win = top.includes(s.votes.ari) ? s.votes.ari : top[0];
    this.clear();
    const inChat = s.screen === 'chat' || s.screen === 'lock';
    this.setState({ poll: 'closed', winner: win, decided: s.addItin && s.pollKind === 'Place', closedHow: how, sheet: 'pollClosed', islandOpen: false, toast: null,
      screen: s.screen === 'lock' ? 'chat' : s.screen, unread: inChat ? 0 : 2, sheetAnim: '', closing: '', anim: s.screen === 'lock' ? 'tu-fadeup' : s.anim });
  }
  sendPoll() {
    const s = this.state;
    if (s.opts.length < 2) { this.toast('Add at least two options'); return; }
    this.clear();
    this.setState({ poll: 'live', votes: {}, leaMsg: false, winner: null, decided: false, sheet: null, screen: 'chat', islandOpen: true, unread: 0, pollKind: s.tpl });
    const o = s.opts; const isPlace = s.tpl === 'Place';
    const steps = isPlace ? [['maya', 'ramiro'], ['jonas', 'ramiro'], ['lea', 'taberna']] : [['maya', o[0]], ['jonas', o[1 % o.length]], ['lea', o[0]]];
    if (s.added.ren) steps.push(['ren', isPlace ? 'taberna' : o[o.length > 2 ? 2 : 0]]);
    steps.forEach((st, k) => this.later(1900 * (k + 1), () => this.castVote(st[0], st[1])));
    // Nic votes last, on his own; skipped if he already voted (nudge or his lock screen)
    const nicPick = isPlace && o.includes('saobento') ? 'saobento' : o[o.length - 1];
    this.later(1900 * (steps.length + 1) + 1500, () => { if (!this.state.votes.nic) this.castVote('nic', nicPick); });
    this.later(250, () => this.toast('Poll sent · ' + this.members(s).length + ' people notified'));
  }
  vote(o) {
    const s = this.state;
    if (s.poll === 'closed') { this.sheet('pollClosed'); return; }
    if (s.poll !== 'live') return;
    if (s.votes.ari && s.votes.ari !== o && !s.canChange) { this.toast('Vote changes are off for this poll'); return; }
    this.castVote('ari', o);
  }
  nudge() {
    const s = this.state;
    const w = this.pollInfo(s).waiting.filter(id => id !== 'ari');
    if (!w.length) { this.toast('Everyone else has voted'); return; }
    this.toast('Nudged ' + join(w.map(id => P[id].name)));
    w.forEach((id, k) => this.later(2600 + k * 900, () => this.castVote(id, id === 'nic' && s.opts.includes('saobento') ? 'saobento' : s.opts[s.opts.length - 1])));
  }
  addTextOpt() {
    const s = this.state; const name = (s.newOpt || '').trim();
    if (!name) return;
    if (s.opts.length >= 6) { this.toast('Polls can have up to 6 options'); return; }
    const id = 'c' + Date.now();
    const def = { name, sub: s.tpl === 'Time' ? '' : 'Added by you', icon: s.tpl === 'Time' ? 'clock' : 'poll' };
    this.setState({ custom: Object.assign({}, s.custom, { [id]: def }), opts: s.opts.concat([id]), newOpt: '' });
  }

  dragStart(e) {
    const el = e.currentTarget; const r = el.getBoundingClientRect();
    const scale = el.offsetHeight ? r.height / el.offsetHeight : 1;
    this.drag = { y0: e.clientY, top0: this.state.homeTop, moved: false, scale: scale || 1 };
    try { el.setPointerCapture(e.pointerId); } catch (x) {}
    this.setState({ dragging: true });
  }
  dragMove(e) {
    if (!this.drag) return;
    const dy = (e.clientY - this.drag.y0) / this.drag.scale;
    if (Math.abs(dy) > 4) this.drag.moved = true;
    this.setState({ homeTop: Math.max(HOME_MIN, Math.min(HOME_MAX, this.drag.top0 + dy)) });
  }
  dragEnd() {
    if (!this.drag) return;
    const d = this.drag; this.drag = null;
    let top = this.state.homeTop;
    if (!d.moved) top = d.top0 >= HOME_MAX ? HOME_MIN : HOME_MAX;
    else { const vel = top - d.top0; top = Math.abs(vel) > 60 ? (vel < 0 ? HOME_MIN : HOME_MAX) : (top < (HOME_MIN + HOME_MAX) / 2 ? HOME_MIN : HOME_MAX); }
    this.setState({ homeTop: top, dragging: false });
  }

  startScan() {
    const token = (this.scanToken = (this.scanToken || 0) + 1);
    this.go('scan', { scanPhase: 'aim', justScanned: false });
    this.later(1500, () => this.scanRead(token));
  }
  scanRead(token) {
    const ok = () => this.scanToken === token && this.state.screen === 'scan';
    if (!ok() || this.state.scanPhase !== 'aim') return;
    this.setState({ scanPhase: 'reading' });
    this.later(2300, () => {
      if (!ok()) return;
      this.setState({ scanPhase: 'done' });
      this.later(900, () => { if (!ok()) return; this.go('expense', { justScanned: true }); this.toast('12 items read from the receipt'); });
    });
  }
  editExpense(e, src) {
    const pd = e.paid || { [e.payer]: e.amt }; const ids = Object.keys(pd); const pamt = {};
    ids.forEach(id => { pamt[id] = (pd[id] / 100).toFixed(2); });
    this.go('manual', { editKey: e.key, editSrc: src, linkAct: null,
      m: { amt: (e.amt / 100).toFixed(2), title: e.title, cat: e.cat || 'other', payer: ids[0], payers: ids, pamt, among: e.among.slice() } });
  }
  setM(patch) { this.setState(st => ({ m: Object.assign({}, st.m, patch) })); }
  toggleMPayer(id) {
    const s = this.state; const mm = s.m; const cur = (mm.payers || [mm.payer || 'ari']).slice(); const k = cur.indexOf(id);
    if (k >= 0) { if (cur.length === 1) { this.toast('Someone has to have paid'); return; } cur.splice(k, 1); } else cur.push(id);
    const total = cents(mm.amt); const pamt = Object.assign({}, mm.pamt);
    if (cur.length > 1 && k < 0) { const base = Math.floor(total / cur.length); cur.forEach((p, j) => { pamt[p] = total ? ((base + (j === 0 ? total - base * cur.length : 0)) / 100).toFixed(2) : ''; }); }
    if (k >= 0) delete pamt[id];
    this.setM({ payers: cur, payer: cur[0], pamt });
  }
  setDraft(patch) { this.setState(st => ({ actDraft: Object.assign({}, st.actDraft, patch) })); }
  acts(s) {
    const mem = this.members(s);
    const list = [];
    ITIN.slice(0, 3).forEach((d, k) => d.items.forEach(([t, ti, ic, ex], i) => list.push({ id: 'd' + k + '-' + i, day: k, time: t, title: ti, icon: ic, exp: ex })));
    TODAY_DONE.forEach(([t, ti, ic], i) => list.push({ id: 't-' + i, day: 3, time: t, title: ti, icon: ic }));
    list.push({ id: 't-now', day: 3, time: '17:30', title: 'Back to the house', icon: 'map-pin', sub: 'getting ready', now: true });
    if (s.decided) { const w = PLACES[s.winner] || PLACES.taberna; list.push({ id: 't-dinner', day: 3, time: '20:30', title: w.name, icon: 'utensils', sub: 'Dinner · Picked by poll', dinner: true, exp: s.saved ? join(Object.keys(s.payers).map(id => nm(id))) + ' paid ' + eur(TOTAL) : null }); }
    list.push({ id: 't-drinks', day: 3, time: '23:00', title: 'Drinks in Bairro Alto', icon: 'calendar', sub: 'Planned by Lea' });
    Object.keys(s.itinAdds).forEach(day => (s.itinAdds[day] || []).forEach((a, i) => list.push({ id: 'a-' + day + '-' + i, day: +day, time: a.time, title: a.title, icon: 'calendar', sub: 'Added by you' })));
    return list.filter(a => !(s.removed || {})[a.id]).map(a => {
      const e = s.actEdits[a.id];
      const o = Object.assign({}, a, e ? { day: e.day, time: e.time } : {});
      o.orig = a.title; if (e && e.title != null) o.title = e.title;
      o.who = e && e.who ? e.who.filter(id => mem.includes(id)) : mem;
      if (s.actExp[a.id]) o.exp = s.actExp[a.id];
      o.state = o.day < 3 ? 'done' : (o.now && o.time === '17:30' ? 'now' : (o.time < '17:30' ? 'done' : 'planned'));
      return o;
    }).sort((x, y) => x.day - y.day || x.time.localeCompare(y.time));
  }
  removeAct(a) {
    const name = a.title || a.orig;
    this.setState(st => ({ removed: Object.assign({}, st.removed, { [a.id]: true }) }));
    this.toast('Removed ' + name, 3600, () => this.setState(st => { const r = Object.assign({}, st.removed); delete r[a.id]; return { removed: r, toast: null }; }));
  }
  renameAct(a, v) {
    this.setState(st => ({ actEdits: Object.assign({}, st.actEdits, { [a.id]: Object.assign({ day: a.day, time: a.time }, st.actEdits[a.id], { title: v }) }) }));
  }
  cleanRename() {
    const ed = this.state.actEdits; let dirty = false; const out = {};
    Object.keys(ed).forEach(k => { const e = Object.assign({}, ed[k]); if (e.title != null && !String(e.title).trim()) { delete e.title; dirty = true; } out[k] = e; });
    if (dirty) this.setState({ actEdits: out });
  }
  itinDragStart(e, a) {
    const row = e.currentTarget.closest('.tu-erow'); if (!row) return;
    const r = row.getBoundingClientRect(); const scale = row.offsetHeight ? r.height / row.offsetHeight : 1;
    this.idrag = { id: a.id, y0: e.clientY, scale: scale || 1, rowH: row.offsetHeight + 8 };
    e.preventDefault();
    this._im = (ev) => this.itinDragMove(ev); this._iu = () => this.itinDragEnd();
    window.addEventListener('pointermove', this._im); window.addEventListener('pointerup', this._iu); window.addEventListener('pointercancel', this._iu);
    this.setState({ itinDrag: { id: a.id, dy: 0 } });
  }
  itinDragMove(e) {
    const d = this.idrag; if (!d) return;
    let dy = (e.clientY - d.y0) / d.scale;
    const s = this.state; const day = this.acts(s).filter(x => x.day === s.itinDay);
    const i = day.findIndex(x => x.id === d.id); if (i < 0) return;
    const movable = (x) => x && (s.itinDay < 3 || x.state === 'planned');
    const nb = dy > d.rowH / 2 ? day[i + 1] : (dy < -d.rowH / 2 ? day[i - 1] : null);
    if (nb && movable(nb)) {
      const me = day[i]; const ed = Object.assign({}, s.actEdits);
      ed[me.id] = Object.assign({ day: me.day, time: me.time }, ed[me.id], { time: nb.time });
      ed[nb.id] = Object.assign({ day: nb.day, time: nb.time }, ed[nb.id], { time: me.time });
      const step = dy > 0 ? d.rowH : -d.rowH; d.y0 += step * d.scale; dy -= step;
      this.setState({ actEdits: ed, itinDrag: { id: d.id, dy } });
      return;
    }
    if (nb === null || !movable(nb)) dy = Math.max(-d.rowH * 0.45, Math.min(d.rowH * 0.45, dy));
    this.setState({ itinDrag: { id: d.id, dy } });
  }
  itinDragEnd() {
    if (this._im) { window.removeEventListener('pointermove', this._im); window.removeEventListener('pointerup', this._iu); window.removeEventListener('pointercancel', this._iu); this._im = null; }
    if (!this.idrag) return; this.idrag = null; this.setState({ itinDrag: null });
  }
  openPay(key) { this.payTok = (this.payTok || 0) + 1; this.sheet('pay', { payKey: key, payStep: 'review', payNote: '' }); }
  payNow() {
    const tok = this.payTok = (this.payTok || 0) + 1;
    const ok = () => tok === this.payTok && this.state.sheet === 'pay';
    this.setState({ payStep: 'confirm' });
    this.later(1500, () => {
      if (!ok()) return; this.setState({ payStep: 'sending' });
      this.later(1600, () => {
        if (!ok()) return; const s = this.state; const m = PAYMETHODS.find(x => x.id === s.payMethod) || PAYMETHODS[0];
        this.setState({ payStep: 'done', paid: Object.assign({}, s.paid, { [s.payKey]: { m: m.title, t: 'just now' } }) });
      });
    });
  }
  backToSettle() { this.payTok = (this.payTok || 0) + 1; this.sheet('settle'); this.later(60, () => { this.startPay(); this.checkAllPaid(); }); }
  openAct(a) {
    const [h, m] = a.time.split(':').map(Number);
    this.sheet('activity', { actSel: a.id, actDraft: { day: a.day, h, m: m - (m % 15), who: a.who.slice(), picker: false } });
  }
  lockVote(o) {
    this.setState(s => ({ votes: Object.assign({}, s.votes, { nic: o }), screen: 'chat', sheet: null, unread: 0, anim: 'tu-fadeup' }), () => {
      this.toast('Nic voted from the lock screen');
      this.checkClose();
    });
  }

  toggleSharer(id) {
    const s = this.state; const it = s.editItem; const ex = (s.excl[it] || []).slice(); const k = ex.indexOf(id);
    if (k >= 0) ex.splice(k, 1);
    else { if (this.members(s).length - ex.length <= 1) { this.toast('At least one person has to share this'); return; } ex.push(id); }
    this.setState({ excl: Object.assign({}, s.excl, { [it]: ex }) });
  }
  togglePayer(id) {
    const s = this.state; const p = Object.assign({}, s.payers);
    if (p[id] != null) { if (Object.keys(p).length === 1) { this.toast('Someone has to have paid'); return; } delete p[id]; }
    else { const sum = Object.values(this.payersC(s)).reduce((a, b) => a + b, 0); p[id] = (Math.max(0, TOTAL - sum) / 100).toFixed(2); }
    this.setState({ payers: p });
  }
  splitEvenly() {
    const ids = Object.keys(this.state.payers); const base = Math.floor(TOTAL / ids.length); const p = {};
    ids.forEach((id, k) => { p[id] = ((base + (k === 0 ? TOTAL - base * ids.length : 0)) / 100).toFixed(2); });
    this.setState({ payers: p });
  }

  ord(k) { const i = PAYORDER.indexOf(k); return i < 0 ? 99 : i; }
  openSettle() { this.sheet('settle'); this.startPay(); }
  startPay() {
    if (this.payRunning) return; this.payRunning = true;
    const tick = () => {
      const s = this.state;
      if (s.sheet !== 'settle') { this.payRunning = false; return; }
      const pend = this.transfers(s).filter(t => !s.paid[t.key] && t.from !== 'ari').sort((a, b) => this.ord(a.key) - this.ord(b.key));
      if (!pend.length) { this.payRunning = false; this.checkAllPaid(); return; }
      const t = pend[0];
      this.setState({ paid: Object.assign({}, s.paid, { [t.key]: PAYMETA[t.key] || { m: 'Bank transfer', t: 'now' } }) }, () => this.checkAllPaid());
      this.later(2600, tick);
    };
    this.later(2600, tick);
  }
  checkAllPaid() {
    const s = this.state; if (s.screen === 'squared' || this.squaredPending || s.sheet === 'pay' || s.sheet === 'payMethod') return;
    const tr = this.transfers(s);
    if (tr.length && tr.every(t => s.paid[t.key])) { this.squaredPending = true; this.later(1300, () => { this.squaredPending = false; this.go('squared'); }); }
  }
  markPaid() {
    const s = this.state; const p = Object.assign({}, s.paid); let n = 0;
    this.transfers(s).forEach(t => { if (!p[t.key] && (t.to === 'ari' || t.from === 'ari')) { p[t.key] = { m: 'Marked as paid', t: 'now' }; n++; } });
    if (!n) { this.toast('Nothing of yours left to mark'); return; }
    this.setState({ paid: p }, () => this.checkAllPaid());
  }

  renderVals() {
    const s = this.state;
    const mem = this.members(s);
    const extras = ['sofia', 'tom'].filter(id => s.added[id]);
    const pi = this.pollInfo(s);
    const dl = this.dlLabel(s);
    const dlMin = this.deadline(s);
    const winId = s.winner || 'taberna';
    const win = PLACES[winId] || PLACES.taberna;
    const winOpt = opt(s, winId);
    const sh = this.shares(s);
    const pay = this.payersC(s);
    const bal = this.balances(s);
    const myBal = bal.ari;
    const tr = this.transfers(s);
    const hasNew = s.saved || s.manual.length > 0;
    const allPaid = hasNew && tr.length > 0 && tr.every(t => s.paid[t.key]);
    const manualSum = s.manual.reduce((a, e) => a + e.amt, 0);
    const spent = SPENT_BEFORE + (s.saved ? TOTAL : 0) + manualSum;
    const soon = (txt) => () => this.toast(txt);

    const lis = { key: 'lis', title: 'Lisbon long weekend', sub: '22–25 Oct · Day 4 of 4', chip: 'Happening now', tone: 'accent', people: avatarProps(mem.concat(extras), 4), photo: IMG.lisbon, open: () => this.go('trip') };
    const ski = { key: 'ski', title: 'Ski week · Val Thorens', sub: '13–20 Feb 2027 · in 111 days', chip: '2 open polls', tone: 'poll', people: avatarProps(['ari', 'jonas', 'lea', 'nic', 'sofia'], 4), photo: IMG.valthorens, open: soon('Only the Lisbon trip is in this prototype') };
    const ros = { key: 'ros', title: 'Roskilde Festival', sub: '27 Jun–4 Jul 2026 · €1,284 spent', chip: 'Settled', tone: 'success', people: avatarProps(['ari', 'nic', 'maya', 'jonas'], 4), photo: IMG.roskilde, open: soon('Only the Lisbon trip is in this prototype') };
    const ber = { key: 'ber', title: 'Berlin weekend', sub: '13–15 Mar 2026 · €612 spent', chip: 'Settled', tone: 'success', people: avatarProps(['ari', 'lea', 'maya'], 4), photo: IMG.berlin, open: soon('Only the Lisbon trip is in this prototype') };
    const newCards = s.newTrips.map(t => ({ key: t.id, title: t.title, sub: t.sub, chip: 'Planning', tone: 'default', people: avatarProps(t.who, 4), photo: '', open: soon(t.title + ' is in planning · invites sent') }));
    const TRIPS = { 'Upcoming': newCards.concat([lis, ski]), '2026': newCards.concat([lis, ros, ber]), '2025': [] };
    const expanded = s.homeTop < (HOME_MIN + HOME_MAX) / 2;
    const prog = (HOME_MAX - s.homeTop) / (HOME_MAX - HOME_MIN);
    const home = {
      filters: ['Upcoming', '2026', '2025'].map(f => ({ label: f, on: s.filter === f, tone: s.filter === f ? 'selected' : 'default', pick: () => this.setState({ filter: f }) })),
      trips: TRIPS[s.filter], empty: TRIPS[s.filter].length === 0,
      top: s.homeTop + 'px', trans: s.dragging ? 'none' : 'top .45s cubic-bezier(.16,1,.3,1)',
      dim: String(Math.round(prog * 70) / 100), dimTrans: s.dragging ? 'none' : 'opacity .45s ease',
      expanded, showPast: expanded && s.filter === 'Upcoming', past: [ros, ber],
      handleAria: expanded ? 'Collapse your trips' : 'Expand your trips',
      count: (4 + s.newTrips.length) + ' trips · ' + new Set(['Portugal', 'France', 'Denmark', 'Germany'].concat(s.newTrips.map(t => t.country))).size + ' countries'
    };

    const going = mem.length + extras.length;
    const balTile = allPaid
      ? { label: 'All settled', value: '€0.00', color: 'var(--status-success-text)', tileBg: 'var(--status-success-soft)' }
      : myBal < 0
        ? { label: 'You owe', value: eur(myBal), color: 'var(--status-danger)', tileBg: 'var(--status-danger-soft)' }
        : { label: "You're owed", value: eur(myBal), color: 'var(--status-success-text)', tileBg: 'var(--status-success-soft)' };
    const live = s.poll === 'live';
    const trip = {
      avatars: stack(mem.concat(extras)), going: going + ' going', unread: s.unread, hasUnread: s.unread > 0,
      showDone: !s.decided, decided: s.decided, undecided: !s.decided,
      dinnerSub: live ? 'Poll open · ' + pi.voted.length + ' of ' + pi.el.length + ' voted' : (s.poll === 'closed' ? win.name + ' won the poll' : 'Not decided yet'),
      dinnerChip: live ? 'See poll' : (s.poll === 'closed' ? 'See result' : 'Start a poll'),
      dinnerAria: live ? 'Dinner at 20:30, poll open. See poll' : 'Dinner at 20:30, not decided yet. Start a poll',
      winName: win.name, winImg: win.img, bal: balTile, sharing: (s.sharing ? 5 : 4) + ' sharing',
      chatSub: s.unread > 0 ? s.unread + ' new' : 'All read', chatColor: s.unread > 0 ? 'var(--accent-text)' : 'var(--text-primary)',
      chatAria: s.unread > 0 ? 'Chat, ' + s.unread + ' unread messages' : 'Chat'
    };
    trip.avatars = stack(mem.concat(extras), 7);
    trip.adds = (s.itinAdds[3] || []).slice().sort((a, b) => a.time.localeCompare(b.time)).map((a, k) => ({ key: k + a.title, time: a.time, title: a.title }));

    const options = s.opts.map(o => {
      const c = pi.counts[o] || 0; const mine = s.votes.ari === o;
      const voters = pi.el.filter(u => s.votes[u] === o);
      return {
        key: o, name: opt(s, o).name, count: c, mine, pct: Math.round(c / Math.max(1, pi.el.length) * 100) + '%',
        voters: s.showWho ? stack(voters) : [], showCount: !s.showWho,
        bg: mine ? 'var(--poll-soft)' : 'var(--bg-elevated)',
        ring: mine ? 'inset 0 0 0 1.5px var(--poll-primary)' : 'inset 0 0 0 1px var(--border-subtle)',
        vote: () => this.vote(o),
        aria: opt(s, o).name + ', ' + c + (c === 1 ? ' vote' : ' votes') + (mine ? ', your vote' : '')
      };
    });
    const waitNames = pi.waiting.map(id => nm(id, 'you'));
    const status = s.poll === 'closed'
      ? { text: 'Ended', liveText: 'Ended', bg: 'var(--bg-muted)', dot: 'var(--icon-secondary)', color: 'var(--text-secondary)' }
      : { text: s.rule === 'manual' ? 'Open' : 'Open · ends ' + dl, liveText: s.rule === 'manual' ? 'Open' : 'Open · ends ' + dl, bg: 'var(--status-success-soft)', dot: 'var(--status-success)', color: 'var(--status-success-text)' };
    const poll = {
      exists: s.poll !== 'none', question: s.question || 'Where should we eat tonight?', status, options,
      voterStack: stack(pi.voted),
      votedText: pi.voted.length + ' of ' + pi.el.length + ' voted' + (pi.waiting.length ? ' · waiting for ' + join(waitNames) : ' · everyone voted')
    };

    const chat = {
      membersLabel: mem.length + ' members', renMsg: s.added.ren, leaMsg: s.leaMsg,
      decidedMsg: s.poll === 'closed', decidedText: s.decided ? "Dinner's decided · " + win.name + ' at 20:30' : 'Poll ended · ' + winOpt.name + ' won',
      msgs: s.msgs.map((t, k) => ({ key: k, text: typeof t === 'string' ? t : '', isText: typeof t === 'string', isLoc: !!(t && t.loc), locSub: s.sharing ? 'Graça · sharing for 1 h' : 'Stopped sharing' })), draft: s.draft, pollActive: s.poll === 'none'
    };

    const lock = {
      body: (s.question || 'Where should we eat tonight?') + ' Pick one to vote. Ends ' + dl + '.',
      actions: s.opts.map((o, k) => ({ label: 'Vote: ' + opt(s, o).name, border: k ? '1px solid rgba(255,255,255,.08)' : '0', vote: () => this.lockVote(o) }))
    };

    const segs = s.opts.filter(o => pi.counts[o] > 0).map(o => ({ grow: pi.counts[o], bg: 'var(--poll-primary)' }));
    if (pi.waiting.length) segs.push({ grow: pi.waiting.length, bg: 'rgba(255,255,255,.16)' });
    const islandShow = live && ['trip', 'home', 'expenses', 'expense', 'itin', 'search'].includes(s.screen) && !s.sheet;
    const island = {
      show: islandShow, open: s.islandOpen, closed: !s.islandOpen,
      closes: s.rule === 'manual' ? 'Open' : 'Ends ' + dl,
      sub: 'Ari’s poll · ' + pi.voted.length + ' of ' + pi.el.length + ' voted' + (pi.waiting.length ? ' · waiting for ' + join(waitNames) : ''),
      segs, count: pi.voted.length + ' of ' + pi.el.length
    };

    const toggle = (key) => ({ on: !!s[key], tx: s[key] ? '20px' : '0px', bg: s[key] ? 'var(--accent-primary)' : 'var(--border-strong)', flip: () => this.setState({ [key]: !s[key] }) });
    const tg = { addItin: toggle('addItin'), canChange: toggle('canChange'), showWho: toggle('showWho') };
    const np = {
      tpls: Object.keys(TPL).map(t => ({ label: t, on: s.tpl === t, tone: s.tpl === t ? 'selected' : 'default', pick: () => this.setState({ tpl: t, question: TPL[t], opts: TPL_OPTS[t].slice(), newOpt: '' }) })),
      isPlace: s.tpl === 'Place', isText: s.tpl === 'Time' || s.tpl === 'Custom', noOpts: s.opts.length < 2 && s.tpl !== 'Place',
      textPh: s.tpl === 'Time' ? 'Add a time, e.g. 21:30' : 'Add an option', newOpt: s.newOpt, cantAddOpt: !(s.newOpt || '').trim(),
      question: s.question,
      opts: s.opts.map(o => ({ key: o, name: opt(s, o).name, sub: opt(s, o).sub, icon: opt(s, o).icon, isPlace: opt(s, o).place, notPlace: !opt(s, o).place, img: opt(s, o).img,
        tileBg: 'var(--poll-soft)', tileColor: 'var(--poll-primary)',
        aria: 'Remove ' + opt(s, o).name, remove: () => this.setState(st => ({ opts: st.opts.filter(x => x !== o) })) })),
      closes: s.rule === 'all' ? 'All ' + mem.length + ' vote or ' + dl : (s.rule === 'deadline' ? 'At ' + dl : 'When you end it'),
      sendLabel: 'Send to group · ' + mem.length + ' people', cantSend: s.opts.length < 2
    };

    const q = (s.placeQ || '').trim().toLowerCase();
    const res = SEARCH.filter(id => !q || 'restaurants'.indexOf(q) === 0 || q.indexOf('rest') === 0 || PLACES[id].name.toLowerCase().indexOf(q) >= 0);
    const ao = {
      q: s.placeQ, queryLabel: '“' + (s.placeQ || 'Restaurants') + '” near Casa in Graça',
      addedLabel: s.opts.length + ' added', none: res.length === 0,
      doneLabel: 'Done',
      results: res.map((id, k) => {
        const on = s.opts.includes(id);
        const pl = PLACES[id];
        return { key: id, name: pl.name, sub: pl.sub, img: pl.img, border: line(k), variant: on ? 'accent' : 'solid', icon: on ? 'check' : 'plus',
          rating: pl.rating, meta: '(' + pl.reviews + ') · ' + pl.price + ' · ' + pl.vibe, ratingAria: 'Rated ' + pl.rating + ' from ' + pl.reviews + ' reviews, ' + pl.vibe,
          photos: pl.photos.map((p, j) => ({ key: j, src: PHOTO[p], alt: pl.name + ' photo ' + (j + 1) })),
          aria: on ? 'Remove ' + PLACES[id].name : 'Add ' + PLACES[id].name,
          toggle: () => this.setState(st => ({ opts: st.opts.includes(id) ? st.opts.filter(x => x !== id) : st.opts.concat([id]).slice(0, 6) })) };
      })
    };

    const RULES = [
      { key: 'all', title: 'Everyone has voted, or at the deadline', sub: 'Whichever comes first' },
      { key: 'deadline', title: 'At the deadline', sub: 'Late voters can still join in' },
      { key: 'manual', title: 'When I end it', sub: 'You end it by hand' }
    ];
    const dday = Math.floor(dlMin / 1440);
    const beforeDinner = dday === 0 && dlMin < DINNER ? ' · ' + dur(DINNER - dlMin) + ' before dinner' : '';
    const inTxt = dur(dlMin - NOW);
    const pc = {
      hasDeadline: s.rule !== 'manual',
      rules: RULES.map((r, k) => ({ key: r.key, title: r.title, sub: r.sub, on: s.rule === r.key, ring: s.rule === r.key ? 'var(--accent-primary)' : 'var(--border-strong)', border: line(k), pick: () => this.setState({ rule: r.key }) })),
      chips: ['30 min', '1 hour', '3 hours', 'Custom'].map(c => ({ label: c, on: s.chip === c, tone: s.chip === c ? 'selected' : 'default', pick: () => this.setState({ chip: c }) })),
      when: (dday ? DAYS[dday].lbl + ' ' + DAYS[dday].d : 'Today') + ' · ' + hm(dlMin),
      whenSub: (inTxt === 'now' ? 'Now' : 'In ' + inTxt) + beforeDinner,
      customRing: s.chip === 'Custom' ? 'var(--accent-primary)' : 'var(--border-subtle)'
    };

    const past = s.day === 0 && (s.hh * 60 + s.mm) <= NOW;
    const hours = [-2, -1, 0, 1, 2].map(d => { const v = (s.hh + d + 24) % 24; return { key: d, v: String(v).padStart(2, '0'), cls: d === 0 ? 't-numeric-l' : 't-numeric-m', op: d === 0 ? 1 : (Math.abs(d) === 1 ? 0.55 : 0.25), aria: v + ' hours', pick: () => this.setState({ hh: v, chip: 'Custom' }) }; });
    const mins = [-2, -1, 0, 1, 2].map(d => { const v = (s.mm + d * 5 + 60) % 60; return { key: d, v: String(v).padStart(2, '0'), cls: d === 0 ? 't-numeric-l' : 't-numeric-m', op: d === 0 ? 1 : (Math.abs(d) === 1 ? 0.55 : 0.25), aria: v + ' minutes', pick: () => this.setState({ mm: v, chip: 'Custom' }) }; });
    const cdMin = s.day * 1440 + s.hh * 60 + s.mm;
    const cd = {
      days: DAYS.map((d, k) => ({ key: k, lbl: d.lbl, d: d.d, on: s.day === k, off: !!d.off, bg: s.day === k ? 'var(--accent-primary)' : 'var(--bg-muted)', c1: s.day === k ? 'var(--text-on-accent)' : 'var(--text-secondary)', c2: s.day === k ? 'var(--text-on-accent)' : 'var(--text-primary)', pick: () => this.setState({ day: k, chip: 'Custom' }) })),
      hours, mins, past,
      result: past ? 'That time has already passed' : 'Ends ' + (s.day ? DAYS[s.day].lbl + ' ' + DAYS[s.day].d : 'today') + ' at ' + hm(cdMin),
      inLabel: past ? 'Pick a later time' : 'in ' + dur(cdMin - NOW),
      resBg: past ? 'var(--status-warning-soft)' : 'var(--status-success-soft)',
      resColor: past ? 'var(--status-warning)' : 'var(--status-success-text)'
    };

    const others = pi.waiting.filter(id => id !== 'ari');
    const w0 = others[0];
    const pd = {
      hasWaiting: live && !!w0, wI: w0 ? P[w0].i : '', wC: w0 ? P[w0].c : '', wName: w0 ? P[w0].name : '',
      wTitle: others.length > 1 ? 'Waiting for ' + join(others.map(id => P[id].name)) : 'Waiting for ' + (w0 ? P[w0].name : ''),
      yourVote: s.votes.ari ? 'You voted ' + opt(s, s.votes.ari).name : "You haven't voted yet",
      changeLabel: s.votes.ari ? 'Change vote' : 'Vote above',
      caption: s.rule === 'manual' ? 'Stays open until you end it' :
        (pi.waiting.length ? 'Ends by itself when everyone votes, or at ' + dl : 'Ends at ' + dl)
    };

    const results = s.opts.map(o => ({ o, c: pi.counts[o] || 0 })).sort((a, b) => b.c - a.c).map(r => {
      const won = r.o === winId;
      const who = pi.el.filter(u => s.votes[u] === r.o).map(u => nm(u));
      return { key: r.o, name: opt(s, r.o).name, votes: r.c + (r.c === 1 ? ' vote' : ' votes'), pct: Math.round(r.c / Math.max(1, pi.el.length) * 100) + '%',
        fill: won ? 'var(--status-success)' : 'var(--border-strong)', cntColor: won ? 'var(--status-success-text)' : 'var(--text-secondary)',
        nameCls: won ? 't-body-m-strong' : 't-body-m', who: who.length ? join(who) : 'No votes' };
    });
    const pcl = {
      winName: winOpt.name, results, added: s.decided, label: s.pollKind === 'Place' ? "Dinner's decided" : 'Poll ended',
      sub: s.closedHow === 'Everyone voted' ? 'Everyone voted · ended at 19:04' : 'Ended by you · 19:04',
      addedSub: 'Dinner · 20:30 · 12 min by tram · all ' + mem.length + ' notified'
    };

    const cq = (s.contactQ || '').trim().toLowerCase();
    const forNew = s.apCtx === 'newTrip';
    const people = CONTACTS.filter(c => !cq || c.full.toLowerCase().indexOf(cq) >= 0).map(c => ({
      key: c.id, full: c.full, sub: c.sub, i: P[c.id].i, c: P[c.id].c, added: forNew ? s.nt.who.includes(c.id) : !!s.added[c.id],
      add: () => this.setState(st => forNew ? { nt: Object.assign({}, st.nt, { who: st.nt.who.includes(c.id) ? st.nt.who : st.nt.who.concat([c.id]) }) } : { added: Object.assign({}, st.added, { [c.id]: true }) })
    }));
    const lateIds = forNew ? [] : CONTACTS.map(c => c.id).filter(id => s.added[id]);
    const ap = {
      q: s.contactQ, people, none: people.length === 0, late: lateIds.length > 0,
      lateText: join(lateIds.map(id => P[id].name)) + (lateIds.length > 1 ? ' join' : ' joins') + ' from tonight. They are excluded from previous expense settlements.'
    };

    const payerIds = Object.keys(s.payers);
    const items = ITEMS.map((it, k) => {
      const w = this.sharers(s, it.id); const full = w.length === mem.length || s.split === 'equal';
      const each = s.split === 'equal' ? it.amt / mem.length : it.amt / w.length;
      const out = mem.filter(id => !w.includes(id));
      return { key: it.id, name: it.name, qty: it.q + '×', amount: eur(it.amt), border: line(k),
        caption: full ? 'Everyone · ' + eur(each) + ' each' : join(out.map(id => nm(id))) + ' left out · ' + eur(each) + ' each',
        qtyBg: full ? 'var(--bg-muted)' : 'var(--accent-soft)', qtyColor: full ? 'var(--text-secondary)' : 'var(--accent-text)',
        capColor: full ? 'var(--text-secondary)' : 'var(--accent-text)',
        open: () => this.setState({ split: 'item', editItem: it.id, sheet: 'whoSharing' }) };
    });
    const groupsMap = {};
    mem.forEach(id => { const v = Math.round(sh[id]); (groupsMap[v] = groupsMap[v] || []).push(id); });
    const groups = Object.keys(groupsMap).map(Number).sort((a, b) => b - a).map(v => ({ key: v, avatars: stack(groupsMap[v]), label: eur(v) + (groupsMap[v].length > 1 ? ' each' : '') }));
    const exp = {
      place: s.decided || s.poll === 'closed' ? win.name : 'Taberna da Rua das Flores',
      paidBy: payerIds.length === 1 ? (payerIds[0] === 'ari' ? 'Paid by you' : 'Paid by ' + P[payerIds[0]].name) : payerIds.length + ' people paid',
      payerI: P[payerIds[0]].i, payerC: P[payerIds[0]].c,
      equal: s.split === 'equal', byItem: s.split === 'item',
      hint: s.split === 'item' ? "Tap an item to change who's in" : 'Split equally between ' + mem.length,
      items, groups, stagger: s.justScanned ? 'tu-stagger' : ''
    };

    const ei = ITEMS.find(x => x.id === s.editItem) || ITEMS[3];
    const ew = this.sharers(s, ei.id); const eOut = mem.filter(id => !ew.includes(id));
    const ws = {
      name: ei.name, qty: ei.q + '×', amount: eur(ei.amt),
      rows: mem.map((id, k) => {
        const on = ew.includes(id);
        return { key: id, on, i: P[id].i, c: P[id].c, name: nm(id), border: line(k),
          hasSub: id === 'ari' && pay.ari > 0, sub: 'Paid the bill', amt: on ? eur(ei.amt / ew.length) : '€0.00',
          boxBg: on ? 'var(--accent-primary)' : 'transparent', boxRing: on ? 'none' : 'inset 0 0 0 2px var(--border-strong)',
          op: on ? 1 : 0.35, nameColor: on ? 'var(--text-primary)' : 'var(--text-secondary)', amtColor: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
          toggle: () => this.toggleSharer(id) };
      }),
      summary: ew.length + ' of ' + mem.length + ' sharing' + (eOut.length ? ' · ' + join(eOut.map(id => nm(id))) + ' left out' : ''),
      each: eur(ei.amt / ew.length) + ' each'
    };

    const paidSum = Object.values(pay).reduce((a, b) => a + b, 0);
    const wp = {
      rows: mem.map((id, k) => {
        const on = s.payers[id] != null;
        return { key: id, on, i: P[id].i, c: P[id].c, name: nm(id), border: line(k), val: s.payers[id] || '',
          aria: (on ? 'Remove ' : 'Add ') + nm(id) + ' as a payer', amtAria: 'Amount ' + nm(id) + ' paid',
          boxBg: on ? 'var(--accent-primary)' : 'transparent', boxRing: on ? 'none' : 'inset 0 0 0 2px var(--border-strong)',
          op: on ? 1 : 0.35, nameColor: on ? 'var(--text-primary)' : 'var(--text-secondary)',
          toggle: () => this.togglePayer(id),
          onAmt: (e) => { const v = e.target.value.replace(/[^0-9.,]/g, ''); this.setState(st => ({ payers: Object.assign({}, st.payers, { [id]: v }) })); } };
      }),
      left: payerIds.length + (payerIds.length === 1 ? ' person paid' : ' people paid'),
      cov: paidSum === TOTAL ? 'Adds up to ' + eur(TOTAL) : (paidSum < TOTAL ? eur(TOTAL - paidSum) + ' still to cover' : eur(paidSum - TOTAL) + ' too much'),
      covBg: paidSum === TOTAL ? 'var(--status-success-soft)' : 'var(--status-warning-soft)',
      covColor: paidSum === TOTAL ? 'var(--status-success-text)' : 'var(--status-warning)'
    };

    const net = (pay.ari || 0) - sh.ari;
    const days = [];
    const expRow = (e, src, icon) => {
      const pd = e.paid || { [e.payer]: e.amt };
      const mine = (pd.ari || 0) - (e.among.includes('ari') ? e.amt / e.among.length : 0);
      const cat = CATS.find(c => c.id === e.cat) || CATS[0];
      return { icon: icon || cat.icon, title: e.title, sub: paidBy(e) + ' paid ' + eur(e.amt),
        lbl: Math.abs(mine) < 1 ? 'Not involved' : (mine > 0 ? 'You lent' : 'You owe'), owe: mine < 0, amt: eur(mine),
        aria: 'Edit ' + e.title, open: () => this.editExpense(e, src) };
    };
    const todayRows = s.manual.slice().reverse().map(e => expRow(e, 'manual'));
    if (s.saved) todayRows.push({
      icon: 'utensils', title: exp.place,
      sub: (payerIds.length === 1 && payerIds[0] === 'ari' ? 'You paid ' : join(payerIds.map(id => nm(id))) + ' paid ') + eur(TOTAL),
      lbl: net >= 0 ? 'You lent' : 'You owe', owe: net < 0, amt: eur(net), aria: 'Edit ' + exp.place, open: () => this.go('expense') });
    if (todayRows.length) days.push({ key: 'today', day: 'Sun 25 Oct · Today', rows: todayRows });
    const hEd = s.histEdits || {};
    HIST.forEach(d => { const rows = d.rows.filter(r => !(hEd[r.key] && hEd[r.key].deleted)).map(r => hEd[r.key] ? expRow(hEd[r.key], 'hist') : expRow(histOrig(r), 'hist', r.icon));
      if (rows.length) days.push({ day: d.day, rows }); });
    const exps = {
      saved: s.saved, spentLabel: 'Lisbon long weekend · ' + eur(spent) + ' spent',
      owes: !allPaid && myBal < 0, balLabel: allPaid ? 'All settled' : (myBal < 0 ? 'You owe' : "You're owed"), balValue: allPaid ? '€0.00' : eur(myBal),
      days: days.map((d) => ({ key: d.key || d.day, day: d.day, rows: d.rows.map((r, j) => Object.assign({}, r, {
        key: j, border: line(j), lblColor: r.owe ? 'var(--status-danger)' : 'var(--status-success-text)', cls: d.key === 'today' ? 'tu-pop' : '' })) }))
    };

    const row = (t) => {
      const p = s.paid[t.key];
      const canPay = t.from === 'ari' && !p;
      return { key: t.key, title: nm(t.from) + ' → ' + nm(t.to), sub: p ? p.m + ' · ' + p.t : (canPay ? 'Tap to pay in the app' : 'Waiting'), amount: eur(t.amt), status: p ? 'paid' : 'pending', people: avatarProps([t.from, t.to]), canPay, noPay: !canPay, toName: nm(t.to), pay: () => this.openPay(t.key) };
    };
    const toYou = tr.filter(t => t.to === 'ari'), fromYou = tr.filter(t => t.from === 'ari'), rest = tr.filter(t => t.to !== 'ari' && t.from !== 'ari');
    const groupsSt = [];
    if (toYou.length) groupsSt.push({ key: 'to', cls: 'tu-mine', label: 'Owed to you', total: eur(toYou.reduce((a, t) => a + t.amt, 0)), color: 'var(--status-success-text)', rows: toYou.map(row) });
    if (fromYou.length) groupsSt.push({ key: 'from', cls: 'tu-mine', label: 'You owe', total: eur(fromYou.reduce((a, t) => a + t.amt, 0)), color: 'var(--status-danger)', rows: fromYou.map(row) });
    if (rest.length) groupsSt.push({ key: 'rest', cls: '', label: 'Rest of the group', total: '', color: 'var(--text-secondary)', rows: rest.map(row) });
    const pendToYou = toYou.filter(t => !s.paid[t.key]);
    const pendFromYou = fromYou.filter(t => !s.paid[t.key]);
    const st = {
      smart: 'Smart settle is on: combined into ' + tr.length + ' payments', groups: groupsSt,
      hasPrimary: pendToYou.length > 0 || pendFromYou.length > 0,
      primary: pendFromYou.length ? 'Pay ' + nm(pendFromYou[0].to) + ' ' + eur(pendFromYou[0].amt) : 'Remind ' + join(pendToYou.map(t => nm(t.from)))
    };

    const payT = s.payKey ? (tr.find(t => t.key === s.payKey) || { from: s.payKey.split('>')[0], to: s.payKey.split('>')[1], amt: 0, key: s.payKey }) : null;
    const pmSel = PAYMETHODS.find(m => m.id === s.payMethod) || PAYMETHODS[0];
    const payNote = (s.payNote || '').trim();
    const payv = payT && P[payT.to] ? {
      review: s.payStep === 'review', confirm: s.payStep === 'confirm', sending: s.payStep === 'sending', done: s.payStep === 'done',
      name: nm(payT.to), toI: P[payT.to].i, toC: P[payT.to].c, fromI: P.ari.i, fromC: P.ari.c,
      amount: eur(payT.amt), cta: 'Pay ' + eur(payT.amt), method: pmSel, methodLogo: !!pmSel.logo, methodNoLogo: !pmSel.logo, note: s.payNote || '', notePh: 'Add a note for ' + nm(payT.to),
      covers: 'Settles what you owe ' + nm(payT.to) + ' for Lisbon long weekend',
      lands: 'Goes straight to ' + nm(payT.to) + '’s bank · ' + PAYTO[payT.to], notified: nm(payT.to) + '’s been notified',
      receipt: [['Paid with', pmSel.title + ' · ' + pmSel.sub.split(' · ')[0]], ['To', nm(payT.to) + ' · ' + PAYTO[payT.to]], ['When', 'Sun 25 Oct · ' + storyClock(s)], ['Reference', 'TU-LIS-' + (payT.amt % 9973 + 1000)]]
        .concat(payNote ? [['Note', payNote]] : []).map((r, j) => ({ key: r[0], k: r[0], v: r[1], border: line(j) }))
    } : { method: pmSel, receipt: [] };
    const pm = { list: PAYMETHODS.map((m, k) => { const on = s.payMethod === m.id; return { key: m.id, title: m.title, sub: m.sub, d: m.d, logo: m.logo || '', hasLogo: !!m.logo, noLogo: !m.logo, on, border: line(k),
      ring: on ? 'var(--accent-primary)' : 'var(--border-strong)', tileBg: on ? 'var(--accent-soft)' : 'var(--bg-muted)', tileC: on ? 'var(--accent-text)' : 'var(--icon-secondary)',
      pick: () => this.sheet('pay', { payMethod: m.id }) }; }) };

    const sq = { avatars: stack(mem), notified: 'All ' + mem.length + ' notified', spent: eur(spent), payments: String(tr.length || 5) };

    // Search
    const qq = (s.q || '').trim().toLowerCase();
    const hit = (t) => !qq || t.toLowerCase().indexOf(qq) >= 0;
    const srGroups = [];
    if (qq) {
      const tripsR = newCards.concat([lis, ski, ros, ber]).filter(t => hit(t.title + ' ' + t.sub)).map(t => ({ icon: 'map-pin', title: t.title, sub: t.sub, open: t.open }));
      const placesR = SPLACES.filter(p => hit(p.name + ' ' + p.sub)).map(p => ({ icon: 'utensils', title: p.name, sub: p.sub, open: () => this.go('map') }));
      const plansR = [];
      ITIN.forEach((d, k) => d.items.forEach(it => { if (hit(it[1])) plansR.push({ icon: it[2], title: it[1], sub: d.name + ' · ' + it[0], open: () => this.go('itin', { itinDay: k }) }); }));
      TODAY_DONE.forEach(it => { if (hit(it[1])) plansR.push({ icon: it[2], title: it[1], sub: 'Today · ' + it[0], open: () => this.go('itin', { itinDay: 3 }) }); });
      if (hit('Drinks in Bairro Alto')) plansR.push({ icon: 'calendar', title: 'Drinks in Bairro Alto', sub: 'Today · 23:00', open: () => this.go('itin', { itinDay: 3 }) });
      const expR = [];
      HIST.forEach(d => d.rows.forEach(r => { if (hit(r.title)) expR.push({ icon: 'euro', title: r.title, sub: r.sub + ' · ' + d.day, open: () => this.go('expenses') }); }));
      if (s.saved && hit(exp.place)) expR.unshift({ icon: 'euro', title: exp.place, sub: join(Object.keys(s.payers).map(id => nm(id))) + ' paid ' + eur(TOTAL) + ' · Today', open: () => this.go('expenses') });
      [['Trips', tripsR], ['Places', placesR], ['Plans', plansR], ['Expenses', expR]].forEach(([label, rows]) => {
        if (rows.length) srGroups.push({ key: label, label, rows: rows.slice(0, 5).map((r, k) => Object.assign({ key: k, border: line(k) }, r)) });
      });
    }
    const sr = {
      q: s.q, empty: !qq, none: !!qq && !srGroups.length, noneText: 'Nothing matches “' + (s.q || '').trim() + '”. Try a city, a place or an expense.',
      groups: srGroups, recent: ['Taberna', 'Sintra', 'Ski week', 'Groceries'].map(r => ({ key: r, label: r, pick: () => this.setState({ q: r }) }))
    };

    // New trip
    const nt = s.nt; const ntDest = LOCS.find(d => d.id === nt.dest);
    const ntTitle = (nt.name || '').trim() || (ntDest ? ntDest.name.split(',')[0] + ' trip' : '');
    const qn = (nt.q || '').trim().toLowerCase();
    const ntRes = (() => {
      if (ntDest || !qn) return { show: false, list: [], label: '' };
      const hits = qn ? LOCS.filter(l => (l.name + ' ' + l.sub).toLowerCase().indexOf(qn) >= 0).slice(0, 5) : POPULAR.map(id => LOCS.find(l => l.id === id));
      return { show: true, label: qn ? 'Places' : 'Popular with your friends', list: hits.map((l, k) => ({ key: l.id, name: l.name, sub: l.sub, border: line(k),
        pick: () => this.setState(st => ({ nt: Object.assign({}, st.nt, { dest: l.id, q: l.name }) })) })) };
    })();
    const calM = (nt.cal || 0) + 9; const calY = 2026 + Math.floor(calM / 12); const calMo = calM % 12;
    const firstDow = (new Date(Date.UTC(calY, calMo, 1)).getUTCDay() + 6) % 7; const nDays = new Date(Date.UTC(calY, calMo + 1, 0)).getUTCDate();
    const rTo = nt.to || nt.from;
    const cells = [];
    for (let i = 0; i < firstDow; i++) cells.push({ key: 'b' + i, isDay: false, band: 'transparent' });
    for (let d = 1; d <= nDays; d++) {
      const id = iso(calY, calMo, d); const off = id < TODAY_ISO; const isS = id === nt.from, isE = !!nt.to && id === nt.to;
      const inR = !!(nt.from && nt.to && id > nt.from && id < nt.to); const edge = isS || isE; const span = !!(nt.from && nt.to && nt.to !== nt.from);
      const band = inR ? 'var(--accent-soft)' : (span && isS ? 'linear-gradient(90deg, transparent 50%, var(--accent-soft) 50%)' : (span && isE ? 'linear-gradient(90deg, var(--accent-soft) 50%, transparent 50%)' : 'transparent'));
      cells.push({ key: id, isDay: true, n: d, off, on: edge || inR, band,
        bg: edge ? 'var(--accent-primary)' : 'transparent', color: edge ? 'var(--text-on-accent)' : (off ? 'var(--text-tertiary)' : 'var(--text-primary)'),
        ring: id === TODAY_ISO && !edge ? 'inset 0 0 0 1.5px var(--border-strong)' : 'none',
        aria: fmtD(id) + (isS ? ', start' : '') + (isE ? ', end' : '') + (id === TODAY_ISO ? ', today' : ''),
        pick: () => this.setState(st => { const n = st.nt; let from = n.from, to = n.to;
          if (!from || to || id < from) { from = id; to = null; } else { to = id; }
          return { nt: Object.assign({}, n, { from, to }) }; }) });
    }
    while (cells.length % 7) cells.push({ key: 'e' + cells.length, isDay: false, band: 'transparent' });
    const ntCal = { month: MONTHS[calMo] + ' ' + calY, noPrev: !(nt.cal > 0), noNext: (nt.cal || 0) >= 8,
      dow: ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((l, k) => ({ key: k, l })), cells };
    const nDaysTrip = nt.from ? dBetween(nt.from, rTo) + 1 : 0; const away = nt.from ? dBetween(TODAY_ISO, nt.from) : 0;
    const ntDates = nt.from ? (rTo === nt.from ? fmtD(nt.from) : fmtD(nt.from) + ' – ' + fmtD(rTo)) : '';
    const ntWhenL = nt.from ? ntDates : 'Pick your dates';
    const ntWhenS = nt.from ? (nDaysTrip + (nDaysTrip === 1 ? ' day' : ' days') + ' · ' + (away === 0 ? 'starts today' : 'in ' + away + (away === 1 ? ' day' : ' days')) + (nt.to ? '' : ' · tap an end date')) : 'Tap a start date, then an end date';
    const ntv = {
      name: nt.name,
      q: nt.q || '', hasQ: !!(nt.q || ''), hasDest: !!ntDest, destName: ntDest ? ntDest.name : '', destSub: ntDest ? ntDest.sub : '',
      showResults: ntRes.show, results: ntRes.list, noResults: ntRes.show && !ntRes.list.length, resLabel: ntRes.label,
      cal: ntCal, whenLabel: ntWhenL, whenSub: ntWhenS, hasRange: !!nt.from, whenBg: nt.from ? 'var(--accent-soft)' : 'var(--bg-muted)',
      who: mem.filter(id => id !== 'ari').concat(nt.who.filter(id => !mem.includes(id))).map(id => { const on = nt.who.includes(id); return { key: id, i: P[id].i, c: P[id].c, name: P[id].name, on,
        op: on ? 1 : 0.35, pick: () => this.setState(st => ({ nt: Object.assign({}, st.nt, { who: on ? st.nt.who.filter(x => x !== id) : st.nt.who.concat([id]) }) })) }; }),
      whoCount: nt.who.length ? nt.who.length + ' invited' : 'Just you for now',
      cantCreate: !ntDest || !nt.from, cta: ntTitle ? 'Create ' + ntTitle : 'Create trip'
    };

    // Full itinerary
    const di = s.itinDay;
    const allActs = this.acts(s);
    const actSub = (a) => {
      const going = a.who.length < mem.length ? ' · ' + a.who.length + ' going' : '';
      if (a.state === 'done') return 'Done' + (a.exp ? ' · ' + a.exp : '') + going;
      if (a.state === 'now') return 'Now · ' + (a.sub || 'happening') + going;
      return (a.sub || 'Planned') + going;
    };
    const toItem = (a) => ({ key: a.id, id: a.id, state: a.state, time: a.time, title: a.title, subtitle: actSub(a),
      icon: a.state === 'done' ? 'check' : a.icon, isDinner: !!a.dinner && a.state !== 'done', plain: !(a.dinner && a.state !== 'done'),
      open: () => this.openAct(a), tap: () => this.openAct(a), remove: () => this.removeAct(a) });
    const itItems = allActs.filter(a => a.day === di).map(toItem);
    const todayActs = allActs.filter(a => a.day === 3);
    const doneToday = todayActs.filter(a => a.state === 'done');
    const nowAct = todayActs.find(a => a.state === 'now') || todayActs.find(a => a.state === 'planned') || todayActs[todayActs.length - 1];
    const nextUp = todayActs.find(a => a.state === 'planned');
    trip.list = todayActs.map(a => { const it = Object.assign(toItem(a), { isNow: !!nowAct && a.id === nowAct.id ? 'yes' : 'no' });
      const up = !!nextUp && a.id === nextUp.id;
      it.isDinner = up; it.plain = !up; it.hasImg = false; it.noImg = up; if (up && a.dinner) it.icon = 'map-pin';
      if (up) { const going = a.who.length < mem.length ? ' · ' + a.who.length + ' going' : ''; const sb = a.dinner ? 'Picked by poll' : (a.sub || 'Planned'); it.subtitle = 'Up next · ' + sb.charAt(0).toUpperCase() + sb.slice(1) + going; }
      return it; });
    if (s.screen === 'trip' && this._needCenter) {
      this._needCenter = false;
      setTimeout(() => { try { const c = document.querySelector('.tu-today'); const el = c && c.querySelector('[data-now="yes"]');
        if (c && el) c.scrollTop = Math.max(0, el.offsetTop - c.offsetTop - (c.clientHeight - el.offsetHeight) / 2); } catch (x) {} }, 40);
    }

    // Activity details
    const sel = s.actSel ? allActs.find(a => a.id === s.actSel) : null;
    const dr = s.actDraft || { day: 3, h: 22, m: 0, who: mem, picker: false };
    const av = sel ? {
      title: sel.title, icon: sel.icon, subtitle: actSub(sel),
      stateLabel: sel.state === 'done' ? 'Done' : (sel.state === 'now' ? 'Happening now' : 'Planned'),
      stateTone: sel.state === 'done' ? 'success' : (sel.state === 'now' ? 'accent' : 'default'),
      when: (dr.day === 3 ? 'Today' : ITIN[dr.day].name) + ' · ' + hm(dr.h * 60 + dr.m),
      picker: !!dr.picker, pickerLabel: dr.picker ? 'Done' : 'Edit',
      days: ITIN.map((d, k) => { const on = dr.day === k; return { key: k, lbl: k === 3 ? 'Today' : d.lbl, d: d.d, on,
        bg: on ? 'var(--accent-primary)' : 'var(--bg-muted)', c1: on ? 'var(--text-on-accent)' : 'var(--text-secondary)', c2: on ? 'var(--text-on-accent)' : 'var(--text-primary)',
        pick: () => this.setDraft({ day: k }) }; }),
      hours: [-2, -1, 0, 1, 2].map(d => { const v = (dr.h + d + 24) % 24; return { key: d, v: String(v).padStart(2, '0'), cls: d === 0 ? 't-numeric-l' : 't-numeric-m', op: d === 0 ? 1 : (Math.abs(d) === 1 ? 0.55 : 0.25), aria: v + ' hours', pick: () => this.setDraft({ h: v }) }; }),
      mins: [-2, -1, 0, 1, 2].map(d => { const v = (dr.m + d * 15 + 60) % 60; return { key: d, v: String(v).padStart(2, '0'), cls: d === 0 ? 't-numeric-l' : 't-numeric-m', op: d === 0 ? 1 : (Math.abs(d) === 1 ? 0.55 : 0.25), aria: v + ' minutes', pick: () => this.setDraft({ m: v }) }; }),
      people: mem.map(id => { const on = dr.who.includes(id); return { key: id, i: P[id].i, c: P[id].c, name: nm(id), on, op: on ? 1 : 0.35,
        pick: () => this.setDraft({ who: on ? dr.who.filter(x => x !== id) : dr.who.concat([id]) }) }; }),
      going: dr.who.length + ' of ' + mem.length + ' going',
      showExp: true, hasExp: !!sel.exp, expLabel: sel.exp || '', noExp: !sel.exp,
      planned: sel.state === 'planned', cantSave: !dr.who.length
    } : { title: '', people: [], days: [], hours: [], mins: [] };
    const itv = {
      days: ITIN.map((d, k) => ({ key: k, lbl: k === 3 ? 'Today' : d.lbl, d: d.d, on: di === k,
        bg: di === k ? 'var(--accent-primary)' : 'var(--bg-muted)', c1: di === k ? 'var(--text-on-accent)' : 'var(--text-secondary)', c2: di === k ? 'var(--text-on-accent)' : 'var(--text-primary)',
        pick: () => this.setState({ itinDay: k }) })),
      items: allActs.filter(a => a.day === di).map(a => { const it = toItem(a); const dragging = s.itinDrag && s.itinDrag.id === a.id; const canDrag = di < 3 || a.state === 'planned';
        return Object.assign(it, { orig: a.orig, title: a.title, canDrag, locked: !canDrag, dy: dragging ? s.itinDrag.dy : 0, dragCls: dragging ? 'tu-dragging' : '',
          rename: (e) => this.renameAct(a, e.target.value), dragStart: (e) => this.itinDragStart(e, a) }); }),
      editing: !!s.itinEdit, notEditing: !s.itinEdit, editLabel: s.itinEdit ? 'Done' : 'Edit',
      editBg: s.itinEdit ? 'var(--accent-primary)' : 'var(--bg-muted)', editColor: s.itinEdit ? 'var(--text-on-accent)' : 'var(--text-primary)',
      editHint: di < 3 ? 'Drag to reorder, tap a name to rename' : 'Drag planned plans to reorder, tap a name to rename',
      label: (di === 3 ? 'Today · ' : '') + ITIN[di].name, count: itItems.length + (itItems.length === 1 ? ' plan' : ' plans'),
      addTitle: 'Add to ' + (di === 3 ? 'today' : ITIN[di].name)
    };
    const aa = {
      name: s.actName, cantAdd: !(s.actName || '').trim(),
      times: ['19:00', '21:00', '22:00', '23:30'].map(t => { const on = !s.actCustom && s.actTime === t; return { key: t, label: t, on, tone: on ? 'selected' : 'default', pick: () => this.setState({ actTime: t, actCustom: false }) }; }),
      custom: !!s.actCustom, customTone: s.actCustom ? 'selected' : 'default',
      days: ITIN.map((d, k) => { const on = s.actDay === k; return { key: k, lbl: k === 3 ? 'Today' : d.lbl, d: d.d, on,
        bg: on ? 'var(--accent-primary)' : 'var(--bg-muted)', c1: on ? 'var(--text-on-accent)' : 'var(--text-secondary)', c2: on ? 'var(--text-on-accent)' : 'var(--text-primary)',
        pick: () => this.setState({ actDay: k }) }; }),
      hours: [-2, -1, 0, 1, 2].map(d => { const v = (s.actH + d + 24) % 24; return { key: d, v: String(v).padStart(2, '0'), cls: d === 0 ? 't-numeric-l' : 't-numeric-m', op: d === 0 ? 1 : (Math.abs(d) === 1 ? 0.55 : 0.25), aria: v + ' hours', pick: () => this.setState({ actH: v }) }; }),
      mins: [-2, -1, 0, 1, 2].map(d => { const v = (s.actM + d * 15 + 60) % 60; return { key: d, v: String(v).padStart(2, '0'), cls: d === 0 ? 't-numeric-l' : 't-numeric-m', op: d === 0 ? 1 : (Math.abs(d) === 1 ? 0.55 : 0.25), aria: v + ' minutes', pick: () => this.setState({ actM: v }) }; }),
      when: (s.actDay === 3 ? 'Today' : ITIN[s.actDay].name) + ' · ' + hm(s.actH * 60 + s.actM),
      whenSub: s.actDay < 3 ? 'Logged as done' : ((s.actH * 60 + s.actM) > 17 * 60 + 30 ? 'in ' + dur(s.actH * 60 + s.actM - (17 * 60 + 30)) : 'Earlier today')
    };

    // Live map
    const placePins = [];
    if (live) s.opts.filter(o => PLACEPOS[o]).forEach(o => placePins.push({ key: o, x: PLACEPOS[o].x + 'px', y: PLACEPOS[o].y + 'px', name: PLACES[o].name, bg: 'var(--poll-primary)' }));
    else if (s.decided && PLACEPOS[winId]) placePins.push({ key: winId, x: PLACEPOS[winId].x + 'px', y: PLACEPOS[winId].y + 'px', name: win.name + ' · 20:30', bg: 'var(--poll-primary)' });
    const mp = {
      count: (s.sharing ? 5 : 4) + ' sharing', showYou: s.sharing, sharing: toggle('sharing'), placePins,
      pinsLabel: live ? 'Tonight’s poll options' : (s.decided ? 'Dinner tonight' : ''),
      people: MAPPEOPLE.map((p, k) => { const sel = s.mapSel === p.id; return { key: p.id, i: P[p.id].i, c: P[p.id].c, name: P[p.id].name, x: p.x + 'px', y: p.y + 'px',
        where: p.where, away: p.away, sel, scale: sel ? 'scale(1.25)' : 'none', z: sel ? '6' : '4', rowBg: sel ? 'var(--accent-soft)' : 'transparent', border: line(k),
        pick: () => this.setState({ mapSel: sel ? null : p.id }) }; })
    };

    // Scan
    const ph = s.scanPhase;
    const scan = {
      reading: ph === 'reading', done: ph === 'done', lineCls: ph === 'reading' || ph === 'done' ? 'tu-hl' : '',
      hint: ph === 'aim' ? 'Fit the whole receipt in the frame' : (ph === 'reading' ? 'Reading items…' : '12 items found · €258.00'),
      corner: ph === 'done' ? 'var(--status-success)' : '#ffffff', hintBg: ph === 'done' ? 'var(--status-success)' : 'rgba(255,255,255,.14)', hintColor: ph === 'done' ? '#0b0f1a' : '#f7f6f2',
      lines: ITEMS.map(it => ({ key: it.id, text: it.q + 'x ' + it.name.toUpperCase(), amt: (it.amt / 100).toFixed(2) })),
      place: s.decided ? win.name : 'Taberna da Rua das Flores'
    };

    // Manual expense
    const mm = s.m; const mAmt = cents(mm.amt); const among = mm.among || mem;
    const mPayers = (mm.payers || [mm.payer || 'ari']).filter(id => mem.includes(id));
    const mPaid = {}; if (mPayers.length === 1) mPaid[mPayers[0]] = mAmt; else mPayers.forEach(id => { mPaid[id] = cents((mm.pamt || {})[id]); });
    const mPaidSum = Object.values(mPaid).reduce((a, b) => a + b, 0);
    const man = {
      amt: mm.amt, title: mm.title, amtW: (Math.max(4, String(mm.amt || '0.00').length) * 0.6 + 0.15).toFixed(2) + 'em',
      cats: CATS.map(c => ({ key: c.id, label: c.label, icon: c.icon, on: mm.cat === c.id, tone: mm.cat === c.id ? 'selected' : 'default', pick: () => this.setM({ cat: c.id }) })),
      payers: mem.map(id => { const on = mPayers.includes(id); return { key: id, i: P[id].i, c: P[id].c, name: nm(id), on,
        ring: on ? '0 0 0 2px var(--bg-canvas), 0 0 0 4px var(--accent-primary)' : 'none', nameColor: on ? 'var(--text-primary)' : 'var(--text-secondary)', pick: () => this.toggleMPayer(id) }; }),
      multi: mPayers.length > 1,
      payRows: mPayers.map((id, k) => ({ key: id, i: P[id].i, c: P[id].c, name: nm(id), border: line(k), v: (mm.pamt || {})[id] || '',
        onAmt: (e) => { const v = e.target.value.replace(/[^0-9.,]/g, ''); this.setState(st => ({ m: Object.assign({}, st.m, { pamt: Object.assign({}, st.m.pamt, { [id]: v }) }) })); } })),
      covLabel: !mAmt ? 'Enter the total first' : (mPaidSum === mAmt ? eur(mAmt) + ' covered' : (mPaidSum < mAmt ? eur(mAmt - mPaidSum) + ' left to assign' : eur(mPaidSum - mAmt) + ' too much')),
      covColor: mAmt && mPaidSum === mAmt ? 'var(--status-success-text)' : 'var(--status-danger)',
      among: mem.map(id => { const on = among.includes(id); return { key: id, i: P[id].i, c: P[id].c, name: nm(id), on, op: on ? 1 : 0.35,
        pick: () => this.setM({ among: on ? among.filter(x => x !== id) : among.concat([id]) }) }; }),
      summary: among.length + ' of ' + mem.length + ' sharing' + (among.length < mem.length ? ' · ' + join(mem.filter(id => !among.includes(id)).map(id => nm(id))) + ' left out' : ''),
      each: mAmt && among.length ? eur(mAmt / among.length) + ' each' : '€0.00 each',
      cantSave: !mAmt || !among.length || mPaidSum !== mAmt,
      editing: !!s.editKey, heading: s.editKey ? 'Edit expense' : 'New expense', cta: s.editKey ? 'Save changes' : 'Save expense'
    };

    // Add expense choice
    const ec = { rows: [] };
    ec.rows.push({ key: 'scan', icon: 'scan', title: 'Scan a receipt', sub: 'We read the items so you can split by item', go: () => this.startScan() });
    ec.rows.push({ key: 'manual', icon: 'euro', title: 'Enter manually', sub: 'Type an amount and pick who’s in', go: () => this.go('manual', { editKey: null, m: { amt: '', title: '', cat: 'food', payer: 'ari', among: null } }) });
    ec.rows.forEach((r, k) => { r.border = line(k); });

    const sheets = ['addPeople', 'newPoll', 'addOption', 'pollCloses', 'customDeadline', 'pollDetails', 'pollClosed', 'whoSharing', 'whoPaid', 'settle', 'pay', 'payMethod', 'newTrip', 'expenseChoice', 'addActivity', 'activity'];
    const shf = { any: !!s.sheet }; sheets.forEach(k => { shf[k] = s.sheet === k; });

    const act = {
      goHome: () => this.go('home'),
      openTrip: () => this.go('trip'),
      mapBack: () => this.go(s.mapFrom && s.mapFrom !== 'map' ? s.mapFrom : 'trip'),
      openChat: () => this.go('chat', { unread: 0 }),
      openChatPoll: () => this.go('chat', { unread: 0, sheet: 'pollDetails' }),
      otherTrip: soon('Only the Lisbon trip is in this prototype'),
      search: () => this.go('search', { q: '' }),
      onSearch: (e) => this.setState({ q: e.target.value }),
      newTrip: () => this.sheet('newTrip', { nt: { name: '', q: '', dest: null, from: null, to: null, cal: 0, who: ['nic', 'maya', 'jonas', 'lea'] } }),
      onDestQ: (e) => { const v = e.target.value; this.setState(st => ({ nt: Object.assign({}, st.nt, { q: v, dest: null }) })); },
      clearDest: (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState(st => ({ nt: Object.assign({}, st.nt, { q: '', dest: null }) })); },
      calPrev: () => this.setState(st => ({ nt: Object.assign({}, st.nt, { cal: Math.max(0, (st.nt.cal || 0) - 1) }) })),
      calNext: () => this.setState(st => ({ nt: Object.assign({}, st.nt, { cal: Math.min(8, (st.nt.cal || 0) + 1) }) })),
      clearDates: () => this.setState(st => ({ nt: Object.assign({}, st.nt, { from: null, to: null }) })),
      onTripName: (e) => { const v = e.target.value; this.setState(st => ({ nt: Object.assign({}, st.nt, { name: v }) })); },
      createTrip: () => {
        if (ntv.cantCreate) { this.toast(ntDest ? 'Pick your dates first' : 'Search for where you’re going first'); return; }
        const t = { id: 'nt' + Date.now(), country: ntDest.sub.split(', ').pop(), title: ntTitle, sub: ntDates + ' · ' + (away === 0 ? 'today' : 'in ' + away + ' days'), who: ['ari'].concat(nt.who) };
        this.setState({ newTrips: [t].concat(s.newTrips), filter: 'Upcoming', closing: 'tu-closing' });
        setTimeout(() => this.setState({ sheet: null, closing: '' }), 230);
        this.toast(ntTitle + ' created · ' + (nt.who.length ? nt.who.length + ' invites sent' : 'invite friends later'), 3000);
      },
      dragStart: (e) => this.dragStart(e), dragMove: (e) => this.dragMove(e), dragEnd: () => this.dragEnd(),
      handleKey: (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); this.setState({ homeTop: e.key === 'ArrowDown' ? HOME_MAX : (e.key === 'ArrowUp' ? HOME_MIN : (expanded ? HOME_MAX : HOME_MIN)) }); } },
      openAddActivity: () => this.sheet('addActivity', { actName: '', actTime: '22:00', actCustom: true, actDay: s.itinDay, actH: 22, actM: 30 }),
      actTogglePicker: () => this.setDraft({ picker: !dr.picker }),
      actSave: () => {
        if (!sel) return;
        if (!dr.who.length) { this.toast('At least one person has to go'); return; }
        const time = hm(dr.h * 60 + dr.m);
        this.setState({ actEdits: Object.assign({}, s.actEdits, { [sel.id]: Object.assign({}, s.actEdits[sel.id], { day: dr.day, time, who: dr.who.slice() }) }), closing: 'tu-closing' });
        setTimeout(() => this.setState({ sheet: null, closing: '' }), 230);
        this.toast('Updated · ' + (dr.day === 3 ? 'Today' : ITIN[dr.day].name) + ' · ' + time);
      },
      actAddExpense: () => {
        if (!sel) return;
        if (sel.dinner) { this.startScan(); return; }
        const cat = sel.icon === 'tram' ? 'transport' : (sel.icon === 'utensils' ? 'food' : 'activity');
        this.go('manual', { editKey: null, linkAct: sel.id, m: { amt: '', title: sel.title, cat, payer: 'ari', among: dr.who.slice() } });
      },
      actSeeExpense: () => this.go('expenses'),
      openAddToday: () => this.sheet('addActivity', { actName: '', actTime: '22:00', itinDay: 3, actCustom: true, actDay: 3, actH: 22, actM: 30 }),
      actCustom: () => this.setState({ actCustom: !s.actCustom, actDay: s.actCustom ? s.actDay : (s.actDay == null ? di : s.actDay) }),
      onActName: (e) => this.setState({ actName: e.target.value }),
      addActivity: () => {
        const name = (s.actName || '').trim(); if (!name) return;
        const day = s.actCustom ? s.actDay : di;
        const time = s.actCustom ? hm(s.actH * 60 + s.actM) : s.actTime;
        const list = (s.itinAdds[day] || []).concat([{ title: name, time }]);
        this.setState({ itinAdds: Object.assign({}, s.itinAdds, { [day]: list }), itinDay: day, closing: 'tu-closing' });
        setTimeout(() => this.setState({ sheet: null, closing: '' }), 230);
        this.toast('Added to ' + (day === 3 ? 'today' : ITIN[day].name) + ' · ' + time);
      },
      recenter: soon('Centered on Casa in Graça'),
      openScan: () => this.startScan(),
      shutter: () => this.scanRead(this.scanToken),
      closeScan: () => this.go(s.saved ? 'expenses' : 'trip'),
      scanManual: () => this.go('manual', { editKey: null, m: { amt: '', title: '', cat: 'food', payer: 'ari', among: null } }),
      gallery: soon('Photo library is coming soon'),
      onMAmt: (e) => this.setM({ amt: e.target.value.replace(/[^0-9.,]/g, '') }),
      onMTitle: (e) => this.setM({ title: e.target.value }),
      mAll: () => this.setM({ among: mem.slice() }),
      mSplitPaid: () => { if (!mAmt) { this.toast('Enter the total first'); return; } const base = Math.floor(mAmt / mPayers.length); const p = {};
        mPayers.forEach((id, k) => { p[id] = ((base + (k === 0 ? mAmt - base * mPayers.length : 0)) / 100).toFixed(2); }); this.setM({ pamt: p }); },
      closeManual: () => this.go(s.editKey || s.saved || s.manual.length ? 'expenses' : 'trip', { editKey: null }),
      deleteExpense: () => {
        const k = s.editKey; if (!k) return; const t = (mm.title || '').trim() || 'Expense';
        if (s.editSrc === 'hist') this.go('expenses', { editKey: null, paid: {}, histEdits: Object.assign({}, s.histEdits, { [k]: { deleted: true } }) });
        else this.go('expenses', { editKey: null, paid: {}, manual: s.manual.filter(e => e.key !== k) });
        this.toast(t + ' deleted');
      },
      saveManual: () => {
        if (man.cantSave) { this.toast(!mAmt ? 'Enter an amount first' : (!among.length ? 'Pick at least one person' : 'Amounts paid need to add up to ' + eur(mAmt))); return; }
        const cat = CATS.find(c => c.id === mm.cat) || CATS[0];
        const e = { key: s.editKey || ('m' + Date.now()), title: (mm.title || '').trim() || cat.label, cat: mm.cat, amt: mAmt, payer: mPayers[0], paid: Object.assign({}, mPaid), among: among.slice() };
        const mine = (mPaid.ari || 0) - (e.among.includes('ari') ? e.amt / e.among.length : 0);
        if (s.editKey) {
          if (s.editSrc === 'hist') this.go('expenses', { editKey: null, paid: {}, histEdits: Object.assign({}, s.histEdits, { [e.key]: e }) });
          else this.go('expenses', { editKey: null, paid: {}, manual: s.manual.map(x => x.key === e.key ? e : x) });
          this.toast('Saved · ' + (Math.abs(mine) < 1 ? 'you’re not in it' : (mine > 0 ? 'you lent ' : 'you owe ') + eur(mine)), 3000);
          return;
        }
        this.go('expenses', { manual: s.manual.concat([e]), paid: {}, linkAct: null,
          actExp: s.linkAct ? Object.assign({}, s.actExp, { [s.linkAct]: paidBy(e) + ' paid ' + eur(e.amt) }) : s.actExp });
        this.toast(e.title + ' added · ' + (Math.abs(mine) < 1 ? 'you’re not in it' : (mine > 0 ? 'you lent ' : 'you owe ') + eur(mine)), 3000);
      },
      share: soon('Trip link copied'),
      more: soon('More options are coming soon'),
      fullItinerary: () => this.go('itin', { itinDay: 3 }),
      toggleItinEdit: () => { if (s.itinEdit) this.cleanRename(); this.setState({ itinEdit: !s.itinEdit, itinDrag: null }); },
      cleanRename: () => this.cleanRename(),

      photos: soon('The shared album is coming soon'),
      liveMap: () => this.go('map'),
      mapMaya: () => this.go('map', { mapSel: 'maya' }),
      photo: soon('The camera is coming soon'),
      shareLocation: () => { if (s.sharing && s.msgs.some(m => m && m.loc)) { this.toast('You’re already sharing your location'); return; } this.setState({ sharing: true, msgs: s.msgs.concat([{ loc: true }]) }); this.toast('Sharing your live location for 1 h'); },
      directions: soon('Opening directions in Maps · 12 min by tram'),
      copyLink: soon('Invite link copied'),
      tieBreak: soon('Tie-break: you decide as the poll creator'),
      nearMe: soon('Searching near your current location'),
      shareRecap: soon('Recap shared with the group'),
      openAddPeople: () => this.sheet('addPeople', { apCtx: 'trip', contactQ: '' }),
      ntAddMember: () => this.sheet('addPeople', { apCtx: 'newTrip', contactQ: '' }),
      apDone: () => { if (s.apCtx === 'newTrip') this.sheet('newTrip', { apCtx: 'trip' }); else this.closeSheetAnimated(); },
      closeSheet: () => this.closeSheetAnimated(),
      onContactQ: (e) => this.setState({ contactQ: e.target.value }),
      openExpenses: () => this.go('expenses'),
      noop: () => {},
      openExpense: () => this.sheet('expenseChoice'),
      onNewOpt: (e) => this.setState({ newOpt: e.target.value }),
      onNewOptKey: (e) => { if (e.key === 'Enter') this.addTextOpt(); },
      addTextOpt: () => this.addTextOpt(),
      dinnerTap: () => { if (s.poll === 'live') this.go('chat', { unread: 0, sheet: 'pollDetails' }); else if (s.poll === 'closed') this.go('chat', { unread: 0, sheet: 'pollClosed' }); else this.go('chat', { unread: 0, sheet: 'newPoll' }); },
      openNewPoll: () => { if (s.poll === 'live') this.sheet('pollDetails'); else this.sheet('newPoll', { poll: s.poll === 'closed' ? 'none' : s.poll, votes: s.poll === 'closed' ? {} : s.votes }); },
      openPollSheet: () => this.sheet(s.poll === 'closed' ? 'pollClosed' : 'pollDetails'),
      openAddOption: () => this.sheet('addOption'),
      openPollCloses: () => this.sheet('pollCloses'),
      openCustom: () => this.sheet('customDeadline', { chip: 'Custom' }),
      backToNewPoll: () => this.sheet('newPoll'),
      setDeadline: () => this.sheet('pollCloses', { chip: 'Custom' }),
      onQuestion: (e) => this.setState({ question: e.target.value }),
      onPlaceQ: (e) => this.setState({ placeQ: e.target.value }),
      clearPlaceQ: () => this.setState({ placeQ: '' }),
      sendPoll: () => this.sendPoll(),
      nudge: () => this.nudge(),
      openLock: () => this.go('lock'),
      changeVote: () => this.toast(s.canChange ? 'Tap another option to change your vote' : 'Vote changes are off for this poll'),
      closePollNow: () => this.closePoll('Closed by you'),
      seeItinerary: () => { this.go('trip', { unread: 2 }); this.toast("Dinner's decided · added to 20:30", 3600); },
      lockOpen: () => this.go('chat', { unread: 0, sheet: 'pollDetails' }),
      islandToggle: () => this.setState({ islandOpen: !s.islandOpen }),
      onDraft: (e) => this.setState({ draft: e.target.value }),
      onDraftKey: (e) => { if (e.key === 'Enter') { const t = (s.draft || '').trim(); if (t) this.setState({ msgs: s.msgs.concat([t]), draft: '' }); } },
      sendMsg: () => { const t = (s.draft || '').trim(); if (t) this.setState({ msgs: s.msgs.concat([t]), draft: '' }); },
      discardExpense: () => this.go('trip'),
      saveExpense: () => { if (paidSum !== TOTAL) { this.sheet('whoPaid'); this.toast('Amounts need to add up to ' + eur(TOTAL)); return; } this.go('expenses', { saved: true, paid: {} }); },
      splitEqual: () => this.setState({ split: 'equal' }),
      splitItem: () => this.setState({ split: 'item' }),
      openWhoPaid: () => this.sheet('whoPaid'),
      selectAll: () => this.setState({ excl: Object.assign({}, s.excl, { [s.editItem]: [] }) }),
      splitEvenly: () => this.splitEvenly(),
      donePaid: () => { if (paidSum !== TOTAL) { this.toast('Amounts need to add up to ' + eur(TOTAL)); return; } this.closeSheetAnimated(); },
      openSettle: () => this.openSettle(),
      settlePrimary: () => {
        if (pendFromYou.length) this.openPay(pendFromYou[0].key);
        else this.toast('Reminder sent to ' + join(pendToYou.map(t => nm(t.from))));
      },
      markPaid: () => this.markPaid(),
      payNow: () => this.payNow(),
      payBack: () => this.backToSettle(),
      openPayMethod: () => this.sheet('payMethod'),
      backToPay: () => this.sheet('pay'),
      onPayNote: (e) => this.setState({ payNote: e.target.value }),
      addPayMethod: () => this.toast('Adding cards opens your wallet settings'),
      shareReceipt: () => this.toast('Receipt copied'),
      payElsewhere: () => { if (!s.payKey) return; this.setState({ paid: Object.assign({}, s.paid, { [s.payKey]: { m: 'Marked as paid', t: 'just now' } }) }); this.toast('Marked as paid · ' + (payT ? nm(payT.to) : '') + ' was notified'); this.backToSettle(); }
    };

    return {
      theme: this.props.theme === 'light' ? 'light' : 'dark', clock: storyClock(s),
      anim: s.anim || '', sheetAnim: s.sheetAnim || '', closing: s.closing || '',
      yes: true, no: false,
      n: { s14: 14, s16: 16, s18: 18, s20: 20, s26: 26, s40: 40 },
      is: { search: s.screen === 'search', itin: s.screen === 'itin', map: s.screen === 'map', scan: s.screen === 'scan', manual: s.screen === 'manual', home: s.screen === 'home', trip: s.screen === 'trip', chat: s.screen === 'chat', lock: s.screen === 'lock', expense: s.screen === 'expense', expenses: s.screen === 'expenses', squared: s.screen === 'squared' },
      sh: shf, toast: { show: !!s.toast, text: s.toast ? s.toast.text : '', hasUndo: !!(s.toast && s.toast.undo), undo: s.toast && s.toast.undo ? () => { clearTimeout(this.toastT); s.toast.undo(); } : () => {} },
      home, trip, poll, chat, lock, island, tg, np, ao, pc, cd, pd, pcl, ap, exp, ws, wp, exps, st, sq, act,
      sr, ntv, itv, aa, mp, scan, man, ec, av, pay: payv, pm, gnav: (() => {
        const sc = s.screen; const on = (k) => sc === k; const col = (k) => on(k) ? 'var(--accent-text)' : 'var(--icon-secondary)'; const lab = (k) => on(k) ? 'var(--accent-text)' : 'var(--text-secondary)';
        return { show: sc === 'trip', fade: sc === 'map' ? 'none' : 'linear-gradient(180deg, transparent 0%, var(--fade) 55%, var(--fade) 100%)',
          trip: (on('trip') || on('itin')) ? 'var(--accent-text)' : 'var(--icon-secondary)', tripL: (on('trip') || on('itin')) ? 'var(--accent-text)' : 'var(--text-secondary)', tripCur: (on('trip') || on('itin')) ? 'page' : 'false',
          chat: col('chat'), exp: col('expenses'), map: col('map'), chatL: lab('chat'), expL: lab('expenses'), mapL: lab('map'),
          chatCur: on('chat') ? 'page' : 'false', expCur: on('expenses') ? 'page' : 'false', mapCur: on('map') ? 'page' : 'false' };
      })()
    };
  }
}
<\/script>
</body>
</html>
`,cf=rf(lf),pf=393,df=852,ao=[{n:1,start:"home",title:"Open TripUp",body:"Ari lands on Home: every trip is a pin on the map. Tap Lisbon."},{n:2,start:"trip",title:"Add Ren to the trip",body:"Tap + next to the avatars, then Add on Ren."},{n:3,start:"chat",title:"Start a dinner poll",body:"In Chat, tap Poll. Three nearby places are pre-filled. Send it."},{n:4,start:"livePoll",title:"Votes come in live",body:"Tap your pick. The others vote in real time and the lead changes hands."},{n:5,start:"itinerary",title:"Winner lands in the itinerary",body:"When the last vote is in, Dinner fills itself. Tap See itinerary."},{n:6,start:"expense",title:"Log the bill",body:"Maya paid at the restaurant. Add the bill from the dinner card, split by item and take Nic and Ren off the wine."},{n:7,start:"settle",title:"Settle up payments",body:"Everyone owes Maya now. The others pay live; then pay your share with Apple Pay and Face ID."},{n:8,start:"squared",title:"All squared up",body:"Your payment is the last one in. Everyone gets the same confirmation, plus a recap to share."}];function uf(e){return e?e.screen==="squared"?8:["settle","pay","payMethod"].includes(e.sheet)||e.saved&&e.screen==="expenses"?7:["expense","scan","manual","expenses"].includes(e.screen)||["whoSharing","whoPaid","expenseChoice"].includes(e.sheet)?6:e.poll==="closed"?5:e.poll==="live"?4:e.screen==="chat"||["newPoll","addOption","pollCloses","customDeadline"].includes(e.sheet)?3:e.screen!=="home"&&e.screen!=="search"?2:1:1}function ff({run:e,start:t,onState:n}){const a=K.useRef(null),[o,s]=K.useState(1);return K.useLayoutEffect(()=>{const r=a.current,i=()=>s(Math.min(r.clientWidth/pf,r.clientHeight/df));i();const l=new ResizeObserver(i);return l.observe(r),()=>l.disconnect()},[]),N.jsx("div",{className:"phone","data-theme":"dark",children:N.jsx("div",{className:"phone__screen",ref:a,children:N.jsx("div",{className:"phone__fit",style:{transform:`translate(-50%, -50%) scale(${o})`},children:N.jsx(cf,{start:t,theme:"dark",onState:n},e)})})})}function mf({step:e,onJump:t,onReset:n}){const[a,o]=K.useState("guided"),s=a==="guided";return N.jsxs("aside",{className:"panel",children:[N.jsxs("div",{className:"panel__brand",children:[N.jsx("span",{className:"applogo",children:N.jsx(hf,{})}),N.jsxs("div",{children:[N.jsx("div",{className:"panel__name",children:"TripUp"}),N.jsx("div",{className:"panel__sub",children:"Coded prototype · iPhone 15 · 393 × 852"})]})]}),N.jsxs("div",{className:"modes",role:"group","aria-label":"Demo mode",children:[N.jsx("button",{type:"button","aria-pressed":s,onClick:()=>o("guided"),children:"Guided demo"}),N.jsx("button",{type:"button","aria-pressed":!s,onClick:()=>o("free"),children:"Free mode"})]}),s?N.jsx("p",{className:"panel__intro",children:"It's the last night of a group trip to Lisbon. Ari sorts out dinner, the bill and settling up. Follow the steps, or jump to one."}):N.jsx("p",{className:"panel__intro",children:"It's the last night of a group trip to Lisbon. Tap around and explore the app however you like."}),s&&N.jsxs("ol",{className:"steps",children:[ao.map(r=>N.jsx("li",{className:r.n===e?"is-now":r.n<e?"is-done":"",children:N.jsxs("button",{type:"button",onClick:()=>t(r),children:[N.jsx("span",{className:"steps__n",children:r.n<e?N.jsx(el,{}):r.n}),N.jsxs("span",{className:"steps__text",children:[N.jsx("span",{className:"steps__title",children:r.title}),r.n===e&&N.jsx("span",{className:"steps__body",children:r.body})]})]})},r.n)),e>ao.length&&N.jsx("li",{className:"is-now",children:N.jsxs("div",{className:"steps__item",children:[N.jsx("span",{className:"steps__n",children:N.jsx(el,{})}),N.jsxs("span",{className:"steps__text",children:[N.jsx("span",{className:"steps__title",children:"Congrats, you're done!"}),N.jsx("span",{className:"steps__body",children:"Feel free to explore the rest of the app."})]})]})})]}),N.jsx("div",{className:"panel__actions",children:N.jsx("button",{type:"button",className:"pbtn",onClick:n,children:"Restart"})}),N.jsx("p",{className:"panel__foot",children:"Mock data, simulated real time. Other people's votes and payments arrive on a timer."})]})}function hf(){return N.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[N.jsx("path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}),N.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}function el(){return N.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:N.jsx("path",{d:"M20 6 9 17l-5-5"})})}function xf(){const[e,t]=K.useState(0),[n,a]=K.useState("home"),[o,s]=K.useState(1),[r,i]=K.useState("home"),l=ao.length,p=K.useCallback(h=>{i(h.screen),s(m=>m>=l&&h.screen!=="squared"?l+1:Math.max(m,uf(h)))},[l]),x=h=>{a(h.start),s(h.n),t(m=>m+1)};return K.useEffect(()=>{if(o!==l||r!=="squared")return;const h=setTimeout(()=>s(l+1),4e3);return()=>clearTimeout(h)},[o,r,l]),N.jsxs("div",{className:"stage",children:[N.jsx(ff,{run:e,start:n,onState:p}),N.jsx(mf,{step:o,onJump:x,onReset:()=>x(ao[0])})]})}fp(document.getElementById("root")).render(N.jsx(xf,{}));

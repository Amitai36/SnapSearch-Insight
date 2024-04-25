/*! For license information please see 8ec7475f19f8979dfaae.js.LICENSE.txt */
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4004],{65223:(t,n,e)=>{function r(t){return"l"===t?"m":"s"}async function o(t){await(function(t){return"function"==typeof t.componentOnReady}(t)?t.componentOnReady():new Promise((t=>requestAnimationFrame((()=>t())))))}e.d(n,{c:()=>o,g:()=>r})},2696:(t,n,e)=>{e.d(n,{C:()=>I,a:()=>x,b:()=>P,c:()=>k,d:()=>G,e:()=>F,f:()=>j,g:()=>B,h:()=>b,i:()=>V,j:()=>E,k:()=>N,l:()=>p,m:()=>R,n:()=>C,o:()=>U,q:()=>O,r:()=>z,t:()=>X,u:()=>Y});var r=e(44120),o=(e(64032),["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"]),i=o.join(","),u="undefined"==typeof Element,a=u?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!u&&Element.prototype.getRootNode?function(t){var n;return null==t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null==t?void 0:t.ownerDocument},c=function t(n,e){var r;void 0===e&&(e=!0);var o=null==n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},f=function(t,n,e){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return n&&a.call(t,i)&&r.unshift(t),r.filter(e)},d=function t(n,e,r){for(var o=[],u=Array.from(n);u.length;){var l=u.shift();if(!c(l,!1))if("SLOT"===l.tagName){var f=l.assignedElements(),d=t(f.length?f:l.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:l,candidates:d})}else{a.call(l,i)&&r.filter(l)&&(e||!n.includes(l))&&o.push(l);var s=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),p=!c(s,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(s&&p){var h=t(!0===s?l.children:s.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scopeParent:l,candidates:h})}else u.unshift.apply(u,l.children)}}return o},s=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},p=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&!s(t)?0:t.tabIndex},h=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},m=function(t){return"INPUT"===t.tagName},y=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},g=function(t,n){return!(n.disabled||c(n)||function(t){return m(t)&&"hidden"===t.type}(n)||function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=a.call(t,"details>summary:first-of-type")?t.parentElement:t;if(a.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return y(t)}else{if("function"==typeof r){for(var i=t;t;){var u=t.parentElement,c=l(t);if(u&&!u.shadowRoot&&!0===r(u))return y(t);t=t.assignedSlot?t.assignedSlot:u||c===t.ownerDocument?u:c.host}t=i}if(function(t){var n,e,r,o,i=t&&l(t),u=null===(n=i)||void 0===n?void 0:n.host,a=!1;if(i&&i!==t)for(a=!!(null!==(e=u)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(u)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!a&&u;){var c,f,d;a=!(null===(f=u=null===(c=i=l(u))||void 0===c?void 0:c.host)||void 0===f||null===(d=f.ownerDocument)||void 0===d||!d.contains(u))}return a}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1}(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!a.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},v=function(t,n){return!(function(t){return function(t){return m(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||l(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)}(n)||p(n)<0||!g(t,n))},S=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},w=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,u=i?n.scopeParent:n,a=function(t,n){var e=p(t);return e<0&&n&&!s(t)?0:e}(u,i),l=i?t(n.candidates):u;0===a?i?e.push.apply(e,l):e.push(u):r.push({documentOrder:o,tabIndex:a,item:n,isScope:i,content:l})})),r.sort(h).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},b=function(t,n){var e;return e=(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:v.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:S}):f(t,n.includeContainer,v.bind(null,n)),w(e)},E=function(t,n){return(n=n||{}).getShadowRoot?d([t],n.includeContainer,{filter:g.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):f(t,n.includeContainer,g.bind(null,n))},N=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==a.call(t,i)&&v(n,t)},A=o.concat("iframe").join(","),R=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==a.call(t,A)&&g(n,t)};const C={getShadowRoot:!0};function I(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function x(t){const n=k(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function T(t){return t.getRootNode()}function D(t){return t.host||null}function O(t,{selector:n,id:e}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=T(r),i=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,u=D(o);return i||(u?t(u):null)}(t)}function k(t,n){return function t(e){return e?e.closest(n)||t(D(T(e))):null}(t)}function q(t,n){return L(t,n)}function L(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return L(r instanceof ShadowRoot?r.host:r,n)}function P(t,n){return!!q(n,(n=>n===t||void 0))}async function F(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function j(t){(function(t){if(t)return b(t,C)[0]??t})(t)?.focus()}const $=":not([slot])";function B(t,n,e){n&&!Array.isArray(n)&&"string"!=typeof n&&(e=n,n=null);const r=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:$;return e?.all?function(t,n,e){let r=n===$?M(t,$):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=e?.matches?r.filter((t=>t?.matches(e.matches))):r;const o=e?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=n===$?M(t,$)[0]||null:t.querySelector(n);r=e&&!1===e.direct||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function M(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function U(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}function X(t){return Boolean(t).toString()}function z(t){return G(t)||function(t){return!!function(t){return function(t){return t.target.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function G(t){return!!function(t){return t.target.assignedElements({flatten:!0})}(t).length}function V(t){return!(!t.isPrimary||0!==t.button)}function Y(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}},44120:(t,n,e)=>{e.d(n,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}]);
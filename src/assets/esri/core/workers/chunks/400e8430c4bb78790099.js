"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7148,8528],{44728:(t,e,r)=>{r.d(e,{c:()=>c});var i,o,s=r(46988),n=r(53648),l=r(53368);function a(t){return(0,n.qk)((0,l.Wu)(t),0,255)}function h(t,e,r){return t=Number(t),isNaN(t)?r:t<e?e:t>r?r:t}function u(t,e){const r=t.toString(16).padStart(2,"0");return e?r.substring(0,1):r}class p{static blendColors(t,e,r,i=new p){return i.r=Math.round(t.r+(e.r-t.r)*r),i.g=Math.round(t.g+(e.g-t.g)*r),i.b=Math.round(t.b+(e.b-t.b)*r),i.a=t.a+(e.a-t.a)*r,i._sanitize()}static fromRgb(t,e){const r=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(r){const t=r[2].split(/\s*,\s*/),i=r[1];if("rgb"===i&&3===t.length||"rgba"===i&&4===t.length){const r=t[0];if("%"===r.charAt(r.length-1)){const r=t.map((t=>2.56*parseFloat(t)));return 4===t.length&&(r[3]=parseFloat(t[3])),p.fromArray(r,e)}return p.fromArray(t.map((t=>parseFloat(t))),e)}if("hsl"===i&&3===t.length||"hsla"===i&&4===t.length)return p.fromArray((0,s.ec)(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),e)}return null}static fromHex(t,e=new p){if("#"!==t[0]||isNaN(Number(`0x${t.substring(1)}`)))return null;switch(t.length){case 4:case 5:{const r=parseInt(t.substring(1,2),16),i=parseInt(t.substring(2,3),16),o=parseInt(t.substring(3,4),16),s=5===t.length?15:parseInt(t.substring(4),16);return p.fromArray([r+16*r,i+16*i,o+16*o,(s+16*s)/255],e)}case 7:case 9:{const r=parseInt(t.substring(1,3),16),i=parseInt(t.substring(3,5),16),o=parseInt(t.substring(5,7),16),s=7===t.length?255:parseInt(t.substring(7),16);return p.fromArray([r,i,o,s/255],e)}default:return null}}static fromArray(t,e=new p){return e._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(e.a)&&(e.a=1),e._sanitize()}static fromString(t,e){const r=(0,s.kv)(t)?(0,s.SQ)(t):null;return r&&p.fromArray(r,e)||p.fromRgb(t,e)||p.fromHex(t,e)}static fromJSON(t){return null!=t?new p([t[0],t[1],t[2],(t[3]??255)/255]):void 0}static toUnitRGB(t){return null!=t?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return null!=t?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){return"string"==typeof t?p.fromString(t,this):Array.isArray(t)?p.fromArray(t,this):(this._set(t.r??0,t.g??0,t.b??0,t.a??1),t instanceof p||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(t){const e=t?.capitalize??!1,r=t?.digits??6,i=3===r||4===r,o=4===r||8===r,s=`#${u(this.r,i)}${u(this.g,i)}${u(this.b,i)}${o?u(Math.round(255*this.a),i):""}`;return e?s.toUpperCase():s}toCss(t=!1){const e=this.r+", "+this.g+", "+this.b;return t?`rgba(${e}, ${this.a})`:`rgb(${e})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=p.AlphaMode.ALWAYS){const e=a(this.r),r=a(this.g),i=a(this.b);return t===p.AlphaMode.ALWAYS||1!==this.a?[e,r,i,a(255*this.a)]:[e,r,i]}clone(){return new p(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(t){return null!=t&&t.r===this.r&&t.g===this.g&&t.b===this.b&&t.a===this.a}_sanitize(){return this.r=Math.round(h(this.r,0,255)),this.g=Math.round(h(this.g,0,255)),this.b=Math.round(h(this.b,0,255)),this.a=h(this.a,0,1),this}_set(t,e,r,i){this.r=t,this.g=e,this.b=r,this.a=i}}p.prototype.declaredClass="esri.Color",(o=(i=p||(p={})).AlphaMode||(i.AlphaMode={}))[o.ALWAYS=0]="ALWAYS",o[o.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const c=p},25228:(t,e,r)=>{r.d(e,{c:()=>m});var i,o=r(41948),s=r(40504),n=r(94360),l=r(1580),a=(r(9456),r(66360),r(72052),r(33600)),h=r(12552),u=r(18996),p=r(28484);let c=i=class extends s.am{static get allTime(){return d}static get empty(){return y}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=t.start?.getTime()??t.start,o=t.end?.getTime()??t.end;return e===i&&r===o}expandTo(t,e=p.OX){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,n.aU)(r,t,e));let o=this.end;if(o){const r=(0,n.aU)(o,t,e);o=o.getTime()===r.getTime()?r:(0,n.g1)(r,1,t,e)}return new i({start:r,end:o})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return i.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,o=t.start?.getTime()??-1/0,s=t.end?.getTime()??1/0;let n,l;if(o>=e&&o<=r?n=o:e>=o&&e<=s&&(n=e),r>=o&&r<=s?l=r:s>=e&&s<=r&&(l=s),null!=n&&null!=l&&!isNaN(n)&&!isNaN(l)){const t=new i;return t.start=n===-1/0?null:new Date(n),t.end=l===1/0?null:new Date(l),t}return i.empty}offset(t,e,r=p.OX){if(this.isEmpty||this.isAllTime)return this.clone();const o=new i,{start:s,end:l}=this;return null!=s&&(o.start=(0,n.g1)(s,t,e,r)),null!=l&&(o.end=(0,n.g1)(l,t,e,r)),o}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return d.clone();const e=null!=this.start&&null!=t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=null!=this.end&&null!=t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new i({start:e,end:r})}};(0,o._)([(0,l.qq)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,o._)([(0,a.E)("end")],c.prototype,"readEnd",null),(0,o._)([(0,u.G)("end")],c.prototype,"writeEnd",null),(0,o._)([(0,l.qq)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,o._)([(0,l.qq)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,o._)([(0,l.qq)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,o._)([(0,a.E)("start")],c.prototype,"readStart",null),(0,o._)([(0,u.G)("start")],c.prototype,"writeStart",null),c=i=(0,o._)([(0,h.c)("esri.TimeExtent")],c);const d=new c,y=new c({start:void 0,end:void 0}),m=c},8528:(t,e,r)=>{r.d(e,{c:()=>i,g:()=>o});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}},3856:(t,e,r)=>{r.d(e,{m:()=>p,q:()=>u});var i=r(41948),o=r(43780),s=(r(9456),r(62088)),n=(r(66360),r(70680)),l=r(71448),a=r(20916),h=r(12552);const u=t=>{let e=class extends t{clone(){const t=(0,a.m6)(this);(0,n.EN)(t,"unable to clone instance of non-accessor class");const e=t.metadata,r=t.store,i={},o=new Map;for(const t in e){const n=e[t],a=r?.originOf(t),h=n.clonable;if(n.readOnly||!1===h||a!==l.sT.USER&&a!==l.sT.DEFAULTS&&a!==l.sT.WEB_MAP&&a!==l.sT.WEB_SCENE)continue;const u=this[t];let p=null;p="function"==typeof h?h(u):"reference"===h?u:(0,s.gx)(u),null!=u&&null==p||(a===l.sT.DEFAULTS?o.set(t,p):i[t]=p)}const h=new(0,Object.getPrototypeOf(this).constructor)(i);if(o.size){const t=(0,a.m6)(h)?.store;if(t)for(const[e,r]of o)t.set(e,r,l.sT.DEFAULTS)}return h}};return e=(0,i._)([(0,h.c)("esri.core.Clonable")],e),e};let p=class extends(u(o.c)){};p=(0,i._)([(0,h.c)("esri.core.Clonable")],p)},57896:(t,e,r)=>{r.d(e,{Eq:()=>c,KG:()=>f,_8:()=>g,_I:()=>h,aE:()=>a,du:()=>m,on:()=>p}),r(40196),r(2952);var i=r(60976),o=r(38912),s=r(70680),n=r(10860),l=r(37176);function a(t,e,r={}){return u(t,e,r,d)}function h(t,e,r={}){return u(t,e,r,y)}function u(t,e,r={},i){let o=null;const n=r.once?(t,r)=>{i(t)&&((0,s.oR)(o),e(t,r))}:(t,r)=>{i(t)&&e(t,r)};if(o=(0,l.M9)(t,n,r.sync,r.equals),r.initial){const e=t();n(e,e)}return o}function p(t,e,r,n={}){let l=null,h=null,u=null;function p(){l&&h&&(h.remove(),n.onListenerRemove?.(l),l=null,h=null)}function c(t){n.once&&n.once&&(0,s.oR)(u),r(t)}const d=a(t,((t,r)=>{p(),(0,i.sh)(t)&&(l=t,h=(0,i.on)(t,e,c),n.onListenerAdd?.(t))}),{sync:n.sync,initial:!0});return u=(0,o.uU)((()=>{d.remove(),p()})),u}function c(t,e){return function(t,e,r){if((0,n.wv)(r))return Promise.reject((0,n.Uh)());const i=t();if(e?.(i))return Promise.resolve(i);let l=null;function a(){l=(0,s.oR)(l)}return new Promise(((i,s)=>{l=(0,o.Ip)([(0,n.wD)(r,(()=>{a(),s((0,n.Uh)())})),u(t,(t=>{a(),i(t)}),{sync:!1,once:!0},e??d)])}))}(t,y,e)}function d(t){return!0}function y(t){return!!t}r(41168);const m={sync:!0},g={initial:!0},f={sync:!0,initial:!0}},31376:(t,e,r)=>{r.d(e,{c:()=>h});var i=r(41948),o=r(1580),s=(r(9456),r(66360),r(72052),r(12552)),n=r(7432),l=r(71996);let a=class extends l.c{constructor(t){super(t),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline&&this.outline.hash()}`}};(0,i._)([(0,o.qq)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":n.c}},json:{default:null,write:!0}})],a.prototype,"outline",void 0),(0,i._)([(0,o.qq)({type:["simple-fill","picture-fill"],readOnly:!0})],a.prototype,"type",void 0),a=(0,i._)([(0,s.c)("esri.symbols.FillSymbol")],a);const h=a},73771:(t,e,r)=>{r.d(e,{c:()=>c});var i,o=r(41948),s=r(40504),n=r(50144),l=r(1580),a=r(33392),h=(r(72052),r(9456),r(12552)),u=r(39056);let p=i=class extends s.am{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(t){return(0,n.Qz)(t)}clone(){return new i({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};(0,o._)([(0,l.qq)({type:u.Up,json:{default:"none",write:!0}})],p.prototype,"decoration",void 0),(0,o._)([(0,l.qq)({type:String,json:{write:!0}})],p.prototype,"family",void 0),(0,o._)([(0,l.qq)({type:Number,json:{write:{overridePolicy:(t,e,r)=>({enabled:!r||!r.textSymbol3D})}}})],p.prototype,"size",void 0),(0,o._)([(0,a.W)("size")],p.prototype,"castSize",null),(0,o._)([(0,l.qq)({type:u.Go,json:{default:"normal",write:!0}})],p.prototype,"style",void 0),(0,o._)([(0,l.qq)({type:u.Ge,json:{default:"normal",write:!0}})],p.prototype,"weight",void 0),p=i=(0,o._)([(0,h.c)("esri.symbols.Font")],p);const c=p},74483:(t,e,r)=>{r.d(e,{c:()=>h});var i=r(41948),o=r(50144),s=r(1580),n=(r(9456),r(66360),r(72052),r(12552)),l=r(71996);let a=class extends l.c{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};(0,i._)([(0,s.qq)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],a.prototype,"angle",void 0),(0,i._)([(0,s.qq)({type:["simple-marker","picture-marker"],readOnly:!0})],a.prototype,"type",void 0),(0,i._)([(0,s.qq)({type:Number,cast:o.Qz,json:{write:!0}})],a.prototype,"xoffset",void 0),(0,i._)([(0,s.qq)({type:Number,cast:o.Qz,json:{write:!0}})],a.prototype,"yoffset",void 0),(0,i._)([(0,s.qq)({type:Number,cast:t=>"auto"===t?t:(0,o.Qz)(t),json:{write:!0}})],a.prototype,"size",void 0),a=(0,i._)([(0,n.c)("esri.symbols.MarkerSymbol")],a);const h=a},47472:(t,e,r)=>{r.d(e,{c:()=>m});var i,o=r(41948),s=r(44728),n=r(14628),l=r(62088),a=r(1580),h=(r(9456),r(66360),r(9968)),u=r(12552),p=r(31376),c=r(7432);const d=new n.O({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let y=i=class extends p.c{constructor(...t){super(...t),this.color=new s.c([0,0,0,.25]),this.outline=new c.c,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(t,e,r){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.style=t),e&&(i.outline=e),r&&(i.color=r),i}clone(){return new i({color:(0,l.ct)(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};(0,o._)([(0,a.qq)()],y.prototype,"color",void 0),(0,o._)([(0,a.qq)()],y.prototype,"outline",void 0),(0,o._)([(0,h.G)({esriSFS:"simple-fill"},{readOnly:!0})],y.prototype,"type",void 0),(0,o._)([(0,a.qq)({type:d.apiValues,json:{read:d.read,write:d.write}})],y.prototype,"style",void 0),y=i=(0,o._)([(0,u.c)("esri.symbols.SimpleFillSymbol")],y);const m=y},7432:(t,e,r)=>{r.d(e,{c:()=>L});var i=r(41948),o=r(14628),s=r(62088),n=r(50144),l=r(1580),a=(r(9456),r(66360),r(9968)),h=r(12552),u=(r(72052),r(71996));let p=class extends u.c{constructor(t){super(t),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};(0,i._)([(0,a.G)({esriSLS:"simple-line"},{readOnly:!0})],p.prototype,"type",void 0),(0,i._)([(0,l.qq)({type:Number,cast:n.Qz,json:{write:!0}})],p.prototype,"width",void 0),p=(0,i._)([(0,h.c)("esri.symbols.LineSymbol")],p);const c=p;var d,y=r(44728),m=r(40504),g=r(33600),f=r(18996),b=r(97556);let S=d=class extends m.am{constructor(t){super(t),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(t,e,r,i){e[r]="web-map"===i?.origin?"arrow":t}set color(t){this._set("color",t)}readColor(t){return null!=t?.[0]?[t[0],t[1],t[2],t[3]/255]:t}writeColor(t,e,r,i){"web-map"===i?.origin||(e[r]=t)}clone(){return new d({color:(0,s.ct)(this.color),placement:this.placement,style:this.style})}hash(){return`${this.placement}.${this.color?.hash()}.${this.style}`}};(0,i._)([(0,l.qq)({type:["begin","end","begin-end"],json:{write:!0}})],S.prototype,"placement",void 0),(0,i._)([(0,a.G)({"line-marker":"line-marker"},{readOnly:!0}),(0,l.qq)({json:{origins:{"web-map":{write:!1}}}})],S.prototype,"type",void 0),(0,i._)([(0,l.qq)({type:b.U})],S.prototype,"style",void 0),(0,i._)([(0,f.G)("style")],S.prototype,"writeStyle",null),(0,i._)([(0,l.qq)({type:y.c,value:null,json:{write:{allowNull:!0}}})],S.prototype,"color",null),(0,i._)([(0,g.E)("color")],S.prototype,"readColor",null),(0,i._)([(0,f.G)("color")],S.prototype,"writeColor",null),S=d=(0,i._)([(0,h.c)("esri.symbols.LineSymbolMarker")],S);const w=S;var q;const _=new o.O({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});let v=q=class extends c{constructor(...t){super(...t),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(t,e,r,i,o,s){if(t&&"string"!=typeof t)return t;const l={};return null!=t&&(l.style=t),null!=e&&(l.color=e),null!=r&&(l.width=(0,n.Qz)(r)),null!=i&&(l.cap=i),null!=o&&(l.join=o),null!=s&&(l.miterLimit=(0,n.Qz)(s)),l}clone(){return new q({color:(0,s.ct)(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:this.marker?.clone()})}hash(){return`${super.hash()}.${this.color?.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${this.marker?.hash()}`}};(0,i._)([(0,a.G)({esriSLS:"simple-line"},{readOnly:!0})],v.prototype,"type",void 0),(0,i._)([(0,l.qq)({type:_.apiValues,json:{read:_.read,write:_.write}})],v.prototype,"style",void 0),(0,i._)([(0,l.qq)({type:["butt","round","square"],json:{write:{overridePolicy:(t,e,r)=>({enabled:"round"!==t&&null==r?.origin})}}})],v.prototype,"cap",void 0),(0,i._)([(0,l.qq)({type:["miter","round","bevel"],json:{write:{overridePolicy:(t,e,r)=>({enabled:"round"!==t&&null==r?.origin})}}})],v.prototype,"join",void 0),(0,i._)([(0,l.qq)({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":w}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],v.prototype,"marker",void 0),(0,i._)([(0,l.qq)({type:Number,json:{read:!1,write:!1}})],v.prototype,"miterLimit",void 0),v=q=(0,i._)([(0,h.c)("esri.symbols.SimpleLineSymbol")],v);const L=v},49736:(t,e,r)=>{r.d(e,{c:()=>f});var i,o=r(41948),s=r(44728),n=r(14628),l=r(62088),a=r(50144),h=r(1580),u=(r(9456),r(66360),r(9968)),p=r(12552),c=r(18996),d=r(74483),y=r(7432);const m=new n.O({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let g=i=class extends d.c{constructor(...t){super(...t),this.color=new s.c([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new y.c}normalizeCtorArgs(t,e,r,i){if(t&&"string"!=typeof t)return t;const o={};return t&&(o.style=t),null!=e&&(o.size=(0,a.Qz)(e)),r&&(o.outline=r),i&&(o.color=i),o}writeColor(t,e){t&&"x"!==this.style&&"cross"!==this.style&&(e.color=t.toJSON()),null===t&&(e.color=null)}set path(t){this.style="path",this._set("path",t)}clone(){return new i({angle:this.angle,color:(0,l.ct)(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`}};(0,o._)([(0,h.qq)()],g.prototype,"color",void 0),(0,o._)([(0,c.G)("color")],g.prototype,"writeColor",null),(0,o._)([(0,u.G)({esriSMS:"simple-marker"},{readOnly:!0})],g.prototype,"type",void 0),(0,o._)([(0,h.qq)()],g.prototype,"size",void 0),(0,o._)([(0,h.qq)({type:m.apiValues,json:{read:m.read,write:m.write}})],g.prototype,"style",void 0),(0,o._)([(0,h.qq)({type:String,json:{write:!0}})],g.prototype,"path",null),(0,o._)([(0,h.qq)({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":y.c}},json:{default:null,write:!0}})],g.prototype,"outline",void 0),g=i=(0,o._)([(0,p.c)("esri.symbols.SimpleMarkerSymbol")],g);const f=g},71996:(t,e,r)=>{r.d(e,{c:()=>d});var i=r(41948),o=r(44728),s=r(14628),n=r(40504),l=r(1580),a=(r(9456),r(66360),r(72052),r(33600)),h=r(12552);const u=new s.O({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"});let p=0,c=class extends n.am{constructor(t){super(t),this.id="sym"+p++,this.type=null,this.color=new o.c([0,0,0,1])}readColor(t){return null!=t?.[0]?[t[0],t[1],t[2],t[3]/255]:t}async collectRequiredFields(t,e){}hash(){return JSON.stringify(this.toJSON())}clone(){}};(0,i._)([(0,l.qq)({type:u.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:u.write}}})],c.prototype,"type",void 0),(0,i._)([(0,l.qq)({type:o.c,json:{write:{allowNull:!0}}})],c.prototype,"color",void 0),(0,i._)([(0,a.E)("color")],c.prototype,"readColor",null),c=(0,i._)([(0,h.c)("esri.symbols.Symbol")],c);const d=c},28652:(t,e,r)=>{r.d(e,{c:()=>f});var i,o=r(41948),s=r(44728),n=r(62088),l=r(50144),a=r(1580),h=r(33392),u=r(9968),p=r(12552),c=r(18996),d=r(73771),y=r(71996),m=r(39056);let g=i=class extends y.c{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new d.c,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(t,e,r){if(t&&"string"!=typeof t)return t;const i={};return t&&(i.text=t),e&&(i.font=e),r&&(i.color=r),i}writeLineWidth(t,e,r,i){i&&"string"!=typeof i?i.origin:e[r]=t}castLineWidth(t){return(0,l.Qz)(t)}writeLineHeight(t,e,r,i){i&&"string"!=typeof i?i.origin:e[r]=t}clone(){return new i({angle:this.angle,backgroundColor:(0,n.ct)(this.backgroundColor),borderLineColor:(0,n.ct)(this.borderLineColor),borderLineSize:this.borderLineSize,color:(0,n.ct)(this.color),font:this.font&&this.font.clone(),haloColor:(0,n.ct)(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${this.backgroundColor?.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color?.hash()}.${this.font&&this.font.hash()}.${this.haloColor?.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};(0,o._)([(0,a.qq)({type:s.c,json:{write:!0}})],g.prototype,"backgroundColor",void 0),(0,o._)([(0,a.qq)({type:s.c,json:{write:!0}})],g.prototype,"borderLineColor",void 0),(0,o._)([(0,a.qq)({type:Number,json:{write:!0},cast:l.Qz})],g.prototype,"borderLineSize",void 0),(0,o._)([(0,a.qq)({type:d.c,json:{write:!0}})],g.prototype,"font",void 0),(0,o._)([(0,a.qq)({...m.qK,json:{write:!0}})],g.prototype,"horizontalAlignment",void 0),(0,o._)([(0,a.qq)({type:Boolean,json:{write:!0}})],g.prototype,"kerning",void 0),(0,o._)([(0,a.qq)({type:s.c,json:{write:!0}})],g.prototype,"haloColor",void 0),(0,o._)([(0,a.qq)({type:Number,cast:l.Qz,json:{write:!0}})],g.prototype,"haloSize",void 0),(0,o._)([(0,a.qq)({type:Boolean,json:{write:!0}})],g.prototype,"rightToLeft",void 0),(0,o._)([(0,a.qq)({type:Boolean,json:{write:!0}})],g.prototype,"rotated",void 0),(0,o._)([(0,a.qq)({type:String,json:{write:!0}})],g.prototype,"text",void 0),(0,o._)([(0,u.G)({esriTS:"text"},{readOnly:!0})],g.prototype,"type",void 0),(0,o._)([(0,a.qq)({...m.sB,json:{write:!0}})],g.prototype,"verticalAlignment",void 0),(0,o._)([(0,a.qq)({type:Number,cast:l.Qz,json:{write:!0}})],g.prototype,"xoffset",void 0),(0,o._)([(0,a.qq)({type:Number,cast:l.Qz,json:{write:!0}})],g.prototype,"yoffset",void 0),(0,o._)([(0,a.qq)({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],g.prototype,"angle",void 0),(0,o._)([(0,a.qq)({type:Number,json:{write:!0}})],g.prototype,"width",void 0),(0,o._)([(0,a.qq)({type:Number})],g.prototype,"lineWidth",void 0),(0,o._)([(0,c.G)("lineWidth")],g.prototype,"writeLineWidth",null),(0,o._)([(0,h.W)("lineWidth")],g.prototype,"castLineWidth",null),(0,o._)([(0,a.qq)(m.KO)],g.prototype,"lineHeight",void 0),(0,o._)([(0,c.G)("lineHeight")],g.prototype,"writeLineHeight",null),g=i=(0,o._)([(0,p.c)("esri.symbols.TextSymbol")],g);const f=g},97556:(t,e,r)=>{r.d(e,{U:()=>o,w:()=>i});const i=["begin","end","begin-end"],o=["arrow","circle","square","diamond","cross","x"]},39056:(t,e,r)=>{r.d(e,{C0:()=>p,Ge:()=>l,Go:()=>n,KO:()=>a,Up:()=>s,qK:()=>h,sB:()=>u});var i=r(53648),o=r(53368);const s=["none","underline","line-through"],n=["normal","italic","oblique"],l=["normal","lighter","bold","bolder"],a={type:Number,cast:t=>{const e=(0,o.Oe)(t);return 0===e?1:(0,i.qk)(e,.1,4)},nonNullable:!0},h={type:["left","right","center"],nonNullable:!0},u={type:["baseline","top","middle","bottom"],nonNullable:!0},p=8}}]);
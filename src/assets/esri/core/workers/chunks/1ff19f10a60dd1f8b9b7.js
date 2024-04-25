"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2176,8528],{8528:(e,n,t)=>{t.d(n,{c:()=>i,g:()=>r});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},81792:(e,n,t)=>{t.d(n,{A:()=>S,B:()=>T,C:()=>D,D:()=>A,E:()=>C,F:()=>L,G:()=>j,H:()=>I,I:()=>V,J:()=>_,K:()=>k,L:()=>H,M:()=>q,N:()=>B,a:()=>c,b:()=>u,c:()=>s,d:()=>a,e:()=>o,f:()=>f,g:()=>X,h:()=>l,i:()=>h,j:()=>G,k:()=>O,l:()=>v,m:()=>y,n:()=>w,o:()=>g,p:()=>M,q:()=>P,r:()=>m,s:()=>x,t:()=>p,u:()=>R,v:()=>b,w:()=>d,x:()=>Z,y:()=>z,z:()=>E});var i=t(10984),r=t(3452);function o(e){return i.G.extendedSpatialReferenceInfo(e)}function s(e,n,t){return i.G.clip(r.O,e,n,t)}function c(e,n,t){return i.G.cut(r.O,e,n,t)}function u(e,n,t){return i.G.contains(r.O,e,n,t)}function a(e,n,t){return i.G.crosses(r.O,e,n,t)}function f(e,n,t,o){return i.G.distance(r.O,e,n,t,o)}function l(e,n,t){return i.G.equals(r.O,e,n,t)}function h(e,n,t){return i.G.intersects(r.O,e,n,t)}function p(e,n,t){return i.G.touches(r.O,e,n,t)}function d(e,n,t){return i.G.within(r.O,e,n,t)}function G(e,n,t){return i.G.disjoint(r.O,e,n,t)}function g(e,n,t){return i.G.overlaps(r.O,e,n,t)}function m(e,n,t,o){return i.G.relate(r.O,e,n,t,o)}function O(e,n){return i.G.isSimple(r.O,e,n)}function x(e,n){return i.G.simplify(r.O,e,n)}function v(e,n,t=!1){return i.G.convexHull(r.O,e,n,t)}function y(e,n,t){return i.G.difference(r.O,e,n,t)}function w(e,n,t){return i.G.symmetricDifference(r.O,e,n,t)}function M(e,n,t){return i.G.intersect(r.O,e,n,t)}function R(e,n,t=null){return i.G.union(r.O,e,n,t)}function P(e,n,t,o,s,c,u){return i.G.offset(r.O,e,n,t,o,s,c,u)}function b(e,n,t,o,s=!1){return i.G.buffer(r.O,e,n,t,o,s)}function Z(e,n,t,o,s,c,u){return i.G.geodesicBuffer(r.O,e,n,t,o,s,c,u)}function z(e,n,t,o=!0){return i.G.nearestCoordinate(r.O,e,n,t,o)}function E(e,n,t){return i.G.nearestVertex(r.O,e,n,t)}function S(e,n,t,o,s){return i.G.nearestVertices(r.O,e,n,t,o,s)}function T(e,n,t,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const o=i.G.rotate(n,t,r);return o.spatialReference=e,o}function D(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(n,t);return r.spatialReference=e,r}function A(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(n,t);return r.spatialReference=e,r}function C(e,n,t,o,s){return i.G.generalize(r.O,e,n,t,o,s)}function L(e,n,t,o){return i.G.densify(r.O,e,n,t,o)}function j(e,n,t,o,s=0){return i.G.geodesicDensify(r.O,e,n,t,o,s)}function I(e,n,t){return i.G.planarArea(r.O,e,n,t)}function V(e,n,t){return i.G.planarLength(r.O,e,n,t)}function _(e,n,t,o){return i.G.geodesicArea(r.O,e,n,t,o)}function k(e,n,t,o){return i.G.geodesicLength(r.O,e,n,t,o)}function H(e,n,t){return null==n||null==t?[]:i.G.intersectLinesToPoints(r.O,e,n,t)}function q(e,n){i.G.changeDefaultSpatialReferenceTolerance(e,n)}function B(e){i.G.clearDefaultSpatialReferenceTolerance(e)}const X=Object.freeze(Object.defineProperty({__proto__:null,buffer:b,changeDefaultSpatialReferenceTolerance:q,clearDefaultSpatialReferenceTolerance:B,clip:s,contains:u,convexHull:v,crosses:a,cut:c,densify:L,difference:y,disjoint:G,distance:f,equals:l,extendedSpatialReferenceInfo:o,flipHorizontal:D,flipVertical:A,generalize:C,geodesicArea:_,geodesicBuffer:Z,geodesicDensify:j,geodesicLength:k,intersect:M,intersectLinesToPoints:H,intersects:h,isSimple:O,nearestCoordinate:z,nearestVertex:E,nearestVertices:S,offset:P,overlaps:g,planarArea:I,planarLength:V,relate:m,rotate:T,simplify:x,symmetricDifference:w,touches:p,union:R,within:d},Symbol.toStringTag,{value:"Module"}))},3452:(e,n,t)=>{t.d(n,{O:()=>i});const i={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const i=new r(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(i.z=e.getPointZ(n)),s&&(i.m=e.getPointM(n)),i},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const i=e.hasZ(n),r=e.hasM(n),o=new u(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(i){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(r){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class r{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,i){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class s{constructor(e,n,t,i){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class c{constructor(e,n,t,i){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class u{constructor(e,n,t,i,r){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},78264:(e,n,t)=>{t.r(n),t.d(n,{executeGEOperation:()=>r});var i=t(81792);function r(e){return(0,i.g[e.operation])(...e.parameters)}}}]);
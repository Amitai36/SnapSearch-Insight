"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2704,324],{81792:(e,n,t)=>{t.d(n,{A:()=>E,B:()=>T,C:()=>A,D:()=>L,E:()=>b,F:()=>C,G:()=>V,H:()=>H,I:()=>I,J:()=>j,K:()=>k,L:()=>q,M:()=>B,N:()=>_,a:()=>c,b:()=>a,c:()=>s,d:()=>u,e:()=>o,f:()=>l,g:()=>J,h:()=>f,i:()=>h,j:()=>g,k:()=>x,l:()=>v,m:()=>y,n:()=>M,o:()=>m,p:()=>R,q:()=>z,r:()=>G,s:()=>O,t:()=>p,u:()=>w,v:()=>S,w:()=>d,x:()=>D,y:()=>P,z:()=>Z});var i=t(10984),r=t(3452);function o(e){return i.G.extendedSpatialReferenceInfo(e)}function s(e,n,t){return i.G.clip(r.O,e,n,t)}function c(e,n,t){return i.G.cut(r.O,e,n,t)}function a(e,n,t){return i.G.contains(r.O,e,n,t)}function u(e,n,t){return i.G.crosses(r.O,e,n,t)}function l(e,n,t,o){return i.G.distance(r.O,e,n,t,o)}function f(e,n,t){return i.G.equals(r.O,e,n,t)}function h(e,n,t){return i.G.intersects(r.O,e,n,t)}function p(e,n,t){return i.G.touches(r.O,e,n,t)}function d(e,n,t){return i.G.within(r.O,e,n,t)}function g(e,n,t){return i.G.disjoint(r.O,e,n,t)}function m(e,n,t){return i.G.overlaps(r.O,e,n,t)}function G(e,n,t,o){return i.G.relate(r.O,e,n,t,o)}function x(e,n){return i.G.isSimple(r.O,e,n)}function O(e,n){return i.G.simplify(r.O,e,n)}function v(e,n,t=!1){return i.G.convexHull(r.O,e,n,t)}function y(e,n,t){return i.G.difference(r.O,e,n,t)}function M(e,n,t){return i.G.symmetricDifference(r.O,e,n,t)}function R(e,n,t){return i.G.intersect(r.O,e,n,t)}function w(e,n,t=null){return i.G.union(r.O,e,n,t)}function z(e,n,t,o,s,c,a){return i.G.offset(r.O,e,n,t,o,s,c,a)}function S(e,n,t,o,s=!1){return i.G.buffer(r.O,e,n,t,o,s)}function D(e,n,t,o,s,c,a){return i.G.geodesicBuffer(r.O,e,n,t,o,s,c,a)}function P(e,n,t,o=!0){return i.G.nearestCoordinate(r.O,e,n,t,o)}function Z(e,n,t){return i.G.nearestVertex(r.O,e,n,t)}function E(e,n,t,o,s){return i.G.nearestVertices(r.O,e,n,t,o,s)}function T(e,n,t,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const o=i.G.rotate(n,t,r);return o.spatialReference=e,o}function A(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(n,t);return r.spatialReference=e,r}function L(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(n,t);return r.spatialReference=e,r}function b(e,n,t,o,s){return i.G.generalize(r.O,e,n,t,o,s)}function C(e,n,t,o){return i.G.densify(r.O,e,n,t,o)}function V(e,n,t,o,s=0){return i.G.geodesicDensify(r.O,e,n,t,o,s)}function H(e,n,t){return i.G.planarArea(r.O,e,n,t)}function I(e,n,t){return i.G.planarLength(r.O,e,n,t)}function j(e,n,t,o){return i.G.geodesicArea(r.O,e,n,t,o)}function k(e,n,t,o){return i.G.geodesicLength(r.O,e,n,t,o)}function q(e,n,t){return null==n||null==t?[]:i.G.intersectLinesToPoints(r.O,e,n,t)}function B(e,n){i.G.changeDefaultSpatialReferenceTolerance(e,n)}function _(e){i.G.clearDefaultSpatialReferenceTolerance(e)}const J=Object.freeze(Object.defineProperty({__proto__:null,buffer:S,changeDefaultSpatialReferenceTolerance:B,clearDefaultSpatialReferenceTolerance:_,clip:s,contains:a,convexHull:v,crosses:u,cut:c,densify:C,difference:y,disjoint:g,distance:l,equals:f,extendedSpatialReferenceInfo:o,flipHorizontal:A,flipVertical:L,generalize:b,geodesicArea:j,geodesicBuffer:D,geodesicDensify:V,geodesicLength:k,intersect:R,intersectLinesToPoints:q,intersects:h,isSimple:x,nearestCoordinate:P,nearestVertex:Z,nearestVertices:E,offset:z,overlaps:m,planarArea:H,planarLength:I,relate:G,rotate:T,simplify:O,symmetricDifference:M,touches:p,union:w,within:d},Symbol.toStringTag,{value:"Module"}))},3452:(e,n,t)=>{t.d(n,{O:()=>i});const i={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const i=new r(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(i.z=e.getPointZ(n)),s&&(i.m=e.getPointM(n)),i},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const i=e.hasZ(n),r=e.hasM(n),o=new a(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(i){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(r){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class r{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,i){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class s{constructor(e,n,t,i){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class c{constructor(e,n,t,i){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class a{constructor(e,n,t,i,r){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},82704:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>i.v,changeDefaultSpatialReferenceTolerance:()=>i.M,clearDefaultSpatialReferenceTolerance:()=>i.N,clip:()=>i.c,contains:()=>i.b,convexHull:()=>i.l,crosses:()=>i.d,cut:()=>i.a,densify:()=>i.F,difference:()=>i.m,disjoint:()=>i.j,distance:()=>i.f,equals:()=>i.h,extendedSpatialReferenceInfo:()=>i.e,flipHorizontal:()=>i.C,flipVertical:()=>i.D,generalize:()=>i.E,geodesicArea:()=>i.J,geodesicBuffer:()=>i.x,geodesicDensify:()=>i.G,geodesicLength:()=>i.K,intersect:()=>i.p,intersectLinesToPoints:()=>i.L,intersects:()=>i.i,isSimple:()=>i.k,nearestCoordinate:()=>i.y,nearestVertex:()=>i.z,nearestVertices:()=>i.A,offset:()=>i.q,overlaps:()=>i.o,planarArea:()=>i.H,planarLength:()=>i.I,relate:()=>i.r,rotate:()=>i.B,simplify:()=>i.s,symmetricDifference:()=>i.n,touches:()=>i.t,union:()=>i.u,within:()=>i.w}),t(10984),t(3452);var i=t(81792)}}]);
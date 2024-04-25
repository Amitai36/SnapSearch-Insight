"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1308],{34888:(e,t,s)=>{s.d(t,{ED:()=>o,_M:()=>r});class r{constructor(e=null,t={},s,r){this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new r(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new r(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function o(e){return!!e.geometry?.coords?.length}},90412:(e,t,s)=>{s.d(t,{c:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},85152:(e,t,s)=>{s.d(t,{c:()=>r});class r{constructor(e=[],t=[],s=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=s}static fromRect(e){const[t,s,o,n]=e,i=o-t,c=n-s;return new r([5],[t,s,i,0,0,c,-i,0,0,-c])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const r=this.lengths[s];for(let s=0;s<r;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=r}}deltaDecode(){const e=this.clone(),{coords:t,lengths:s}=e;let r=0;for(const e of s){for(let s=1;s<e;s++)t[2*(r+s)]+=t[2*(r+s)-2],t[2*(r+s)+1]+=t[2*(r+s)-1];r+=e}return e}clone(e){if(0===this.lengths.length)return new r([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),s=this.coords.slice(0,t);return e?(e.set(s),new r(this.lengths,e,this.hasIndeterminateRingOrder)):new r(Array.from(this.lengths),Array.from(s),this.hasIndeterminateRingOrder)}}},57006:(e,t,s)=>{s.r(t),s.d(t,{createConnection:()=>q});var r=s(41948),o=(s(60708),s(2600)),n=s(20744),i=s(66360),c=s(10860),a=s(28176),h=(s(9456),s(72052),s(12552)),l=s(1580),u=s(37924),d=s(77860);let g=class extends d.c.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new n.c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,r._)([(0,l.qq)({readOnly:!0})],g.prototype,"connectionError",null),g=(0,r._)([(0,h.c)("esri.layers.support.StreamConnection")],g);const f=g;var y,m;(m=y||(y={}))[m.CONNECTING=0]="CONNECTING",m[m.OPEN=1]="OPEN",m[m.CLOSING=2]="CLOSING",m[m.CLOSED=3]="CLOSED";let p=class extends f{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,u.O)(t,r,s),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,s=0){try{if(this.destroyed)return;const t=(0,a.UP)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(r){const o=t/1e3;return this._config.maxReconnectionAttempts&&s>=this._config.maxReconnectionAttempts?(i.c.getLogger(this).error(new n.c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(i.c.getLogger(this).error(new n.c("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,r)),await(0,c.iV)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),s+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(e){return void i.c.getLogger(this).error(new n.c("websocket-connection","Failed to parse message, invalid JSON",{error:e}))}}}_createWebSocket(e){return new Promise(((t,s)=>{const r=new WebSocket(e);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=e=>this._onClose(e),r.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(r),t(r)},r.onclose=e=>{r.onopen=r.onclose=null,s(e)}}))}async _handshake(e=1e4){const t=this._websocket;if(null==t)return;const s=(0,c.qG)(),r=t.onmessage,{filter:o,outFields:a,spatialReference:h}=this._config;return s.timeout(e),t.onmessage=e=>{let c=null;try{c=JSON.parse(e.data)}catch(e){}c&&"object"==typeof c||(i.c.getLogger(this).error(new n.c("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),s.reject(),this.destroy()),c.spatialReference?.wkid!==h?.wkid&&(i.c.getLogger(this).error(new n.c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${h.wkid}`,e.data)),s.reject(),this.destroy()),"json"!==c.format&&(i.c.getLogger(this).error(new n.c("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),s.reject(),this.destroy()),o&&c.filter!==o&&i.c.getLogger(this).error(new n.c("websocket-connection","Tried to set filter, but server doesn't support it")),a&&c.outFields!==a&&i.c.getLogger(this).error(new n.c("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=r;for(const e of this._outstandingMessages)t.send(JSON.stringify(e));this._outstandingMessages=[],s.resolve()},t.send(JSON.stringify({filter:o,outFields:a,format:"json",spatialReference:{wkid:h.wkid}})),s.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),i.c.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&i.c.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,r._)([(0,l.qq)()],p.prototype,"connectionStatus",null),(0,r._)([(0,l.qq)()],p.prototype,"errorString",void 0),p=(0,r._)([(0,h.c)("esri.layers.graphics.sources.connections.WebSocketConnection")],p);var _=s(32848),w=s(95776),b=s(6704),S=s(56156);const k={maxQueryDepth:5,maxRecordCountFactor:3};let v=class extends p{constructor(e){super({...k,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||i.c.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:s,outFields:r}=this._config;this.destroyed||this._setFilter(s,r)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(t.geometry)}catch(e){return void i.c.getLogger(this).error(new n.c("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},s=(0,o.c)(e.path,{query:t,responseType:"json"}),r=(await s).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(e,t){const s=e[0],{urls:r,token:o}=s,n=this._inferWebSocketBaseUrl(r);return(0,a.UP)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return i.c.getLogger(this).error(new n.c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(null==s||null==e&&null==t)return;const r=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const a=(0,c.qG)();return s.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(i.c.getLogger(this).error(new n.c("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),a.reject(t.error)),this._setWebSocketJSONParseHandler(s),o=!0,a.resolve())},s.send(r),setTimeout((()=>{o||(this.destroyed||this._websocket!==s||i.c.getLogger(this).error(new n.c("geoevent-connection","Server timed out when setting filter")),a.reject())}),1e4),a.promise}_serializeFilter(e,t){const s={};if(null==e&&null==t)return s;if(e?.geometry)try{const t=(0,b.h4)(e.geometry);if("extent"!==t.type)throw new n.c(`Expected extent but found type ${t.type}`);s.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){i.c.getLogger(this).error(new n.c("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(s.where=e.where),null!=t&&(s.outFields=t.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,s=e.attributes[t],r=this._relatedFeatures.get(s);if(!r)return i.c.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:c}=r;for(const t in o)e.attributes[t]=o[t];return c&&(e.geometry=c),e.geometry||e.centroid||i.c.getLogger(this).error(new n.c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,s=this._queryRelatedFeatures(e),r=this._queryArchive(t);await s;const o=await r;if(!o)return;for(const e of o.features)this.onFeature(this._enrich(e))}catch(e){i.c.getLogger(this).error(new n.c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.all([s.e(5612),s.e(5156),s.e(2692),s.e(7988),s.e(9364),s.e(236),s.e(8976),s.e(9512),s.e(2664),s.e(6556),s.e(672),s.e(1004)]).then(s.bind(s,672))).default)({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,n=r.query.supportsPagination,i=r.query.supportsCentroid,c=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,h=o?a*c:a,l=new w.c;if(l.outFields=this._config.outFields??["*"],l.where=this._config.filter?.where??"1=1",l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=S.c.fromJSON(this._config.spatialReference),i&&(l.returnCentroid=!0),o&&(l.maxRecordCountFactor=c),n)return l.num=h,t.destroy(),this._queryPages(e,l);const u=await(0,_.EL)(e,l,this._config.sourceSpatialReference);return t.destroy(),u.data}async _queryPages(e,t,s=[],r=0){t.start=null!=t.num?r*t.num:null;const{data:o}=await(0,_.EL)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&r<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>s.push(e))),this._queryPages(e,t,s,r+1)):(s.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,s=e.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const e of s){const s=e.attributes[r];t.set(s,e)}this._relatedFeatures=t}};v=(0,r._)([(0,h.c)("esri.layers.graphics.sources.connections.GeoEventConnection")],v);const F=v;let C=class extends f{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:s,sourceSpatialReference:r}=e;this._featureZScaler=(0,u.O)(t,r,s)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function R(e,t){if(null==e&&null==t)return null;const s={};return null!=t&&(s.geometry=t),null!=e&&(s.where=e),s}function q(e,t,s,r,o,n,i,c,a){const h={source:e,sourceSpatialReference:t,spatialReference:s,geometryType:r,filter:R(o,n),maxReconnectionAttempts:i,maxReconnectionInterval:c,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new p(h):new F(h):new C(h)}(0,r._)([(0,l.qq)()],C.prototype,"connectionStatus",void 0),(0,r._)([(0,l.qq)()],C.prototype,"errorString",void 0),C=(0,r._)([(0,h.c)("esri.layers.support.ClientSideConnection")],C)},21012:(e,t,s)=>{s.d(t,{M:()=>o});var r=s(37924);function o(e,t,s){if(!s?.features||!s.hasZ)return;const o=(0,r.O)(s.geometryType,t,e.outSpatialReference);if(null!=o)for(const e of s.features)o(e.geometry)}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78dfd2c6"],{"4be4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("5019"),o=n("cd51"),i=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a="[DEFAULT]",s=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=a);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new o.Deferred;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=r.__assign({identifier:a,optional:!1},e),n=t.identifier,o=t.optional,i=this.normalizeInstanceIdentifier(n);try{var s=this.getOrInitializeService(i);if(!s){if(o)return null;throw Error("Service "+this.name+" is not available")}return s}catch(u){if(o)return null;throw u}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,c(e))try{this.getOrInitializeService(a)}catch(d){}try{for(var o=r.__values(this.instancesDeferred.entries()),i=o.next();!i.done;i=o.next()){var s=r.__read(i.value,2),u=s[0],f=s[1],l=this.normalizeInstanceIdentifier(u);try{var p=this.getOrInitializeService(l);f.resolve(p)}catch(d){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=a),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(r.__spread(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,u(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:a:e},e}();function u(e){return e===a?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new s(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=i,t.ComponentContainer=f,t.Provider=s},5019:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__createBinding",(function(){return p})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return v})),n.d(t,"__spread",(function(){return y})),n.d(t,"__spreadArrays",(function(){return b})),n.d(t,"__await",(function(){return g})),n.d(t,"__asyncGenerator",(function(){return m})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return S})),n.d(t,"__importStar",(function(){return O})),n.d(t,"__importDefault",(function(){return E})),n.d(t,"__classPrivateFieldGet",(function(){return k})),n.d(t,"__classPrivateFieldSet",(function(){return I}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function p(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=i.next()).done)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function m(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{u(o[e](t))}catch(n){l(i[0][3],n)}}function u(e){e.value instanceof g?Promise.resolve(e.value.v).then(c,f):l(i[0][2],e)}function c(e){s("next",e)}function f(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"===typeof h?h(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){t=e[n](t),o(r,i,t.done,t.value)}))}}function o(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function I(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},"7d28":function(e,t,n){"use strict";n.r(t),n.d(t,"registerInstallations",(function(){return Ne}));var r=n("c23d"),o=n.n(r),i=n("4be4");var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function s(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=i.next()).done)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a}function l(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e}var p,d=n("cd51"),h=n("9dbb"),v="@firebase/installations",y="0.4.17",b=1e4,g="w:"+y,m="FIS_v2",w="https://firebaseinstallations.googleapis.com/v1",_=36e5,S="installations",O="Installations",E=(p={},p["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',p["not-registered"]="Firebase Installation is not registered.",p["installation-not-found"]="Firebase Installation not found.",p["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',p["app-offline"]="Could not process request. Application offline.",p["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",p),k=new d["ErrorFactory"](S,O,E);function I(e){return e instanceof d["FirebaseError"]&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){var t=e.projectId;return w+"/projects/"+t+"/installations"}function P(e){return{token:e.token,requestStatus:2,expiresIn:x(e.expiresIn),creationTime:Date.now()}}function T(e,t){return s(this,void 0,void 0,(function(){var n,r;return u(this,(function(o){switch(o.label){case 0:return[4,t.json()];case 1:return n=o.sent(),r=n.error,[2,k.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function j(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function D(e,t){var n=t.refreshToken,r=j(e);return r.append("Authorization",N(n)),r}function A(e){return s(this,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return t=n.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function x(e){return Number(e.replace("s","000"))}function N(e){return m+" "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){var n=t.fid;return s(this,void 0,void 0,(function(){var t,r,o,i,a,s,c;return u(this,(function(u){switch(u.label){case 0:return t=C(e),r=j(e),o={fid:n,authVersion:m,appId:e.appId,sdkVersion:g},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,A((function(){return fetch(t,i)}))];case 1:return a=u.sent(),a.ok?[4,a.json()]:[3,3];case 2:return s=u.sent(),c={fid:s.fid||n,registrationStatus:2,refreshToken:s.refreshToken,authToken:P(s.authToken)},[2,c];case 3:return[4,T("Create Installation",a)];case 4:throw u.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){var t=btoa(String.fromCharCode.apply(String,l(e)));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B=/^[cdef][\w-]{21}$/,F="";function K(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var n=V(e);return B.test(n)?n:F}catch(r){return F}}function V(e){var t=L(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=new Map;function U(e,t){var n=H(e);G(n,t),$(n,t)}function q(e,t){Y();var n=H(e),r=W.get(n);r||(r=new Set,W.set(n,r)),r.add(t)}function z(e,t){var n=H(e),r=W.get(n);r&&(r.delete(t),0===r.size&&W.delete(n),X())}function G(e,t){var n,r,o=W.get(e);if(o)try{for(var i=c(o),a=i.next();!a.done;a=i.next()){var s=a.value;s(t)}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function $(e,t){var n=Y();n&&n.postMessage({key:e,fid:t}),X()}var J=null;function Y(){return!J&&"BroadcastChannel"in self&&(J=new BroadcastChannel("[Firebase] FID Change"),J.onmessage=function(e){G(e.data.key,e.data.fid)}),J}function X(){0===W.size&&J&&(J.close(),J=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z="firebase-installations-database",Q=1,ee="firebase-installations-store",te=null;function ne(){return te||(te=Object(h["openDb"])(Z,Q,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(ee)}}))),te}function re(e,t){return s(this,void 0,void 0,(function(){var n,r,o,i,a;return u(this,(function(s){switch(s.label){case 0:return n=H(e),[4,ne()];case 1:return r=s.sent(),o=r.transaction(ee,"readwrite"),i=o.objectStore(ee),[4,i.get(n)];case 2:return a=s.sent(),[4,i.put(t,n)];case 3:return s.sent(),[4,o.complete];case 4:return s.sent(),a&&a.fid===t.fid||U(e,t.fid),[2,t]}}))}))}function oe(e){return s(this,void 0,void 0,(function(){var t,n,r;return u(this,(function(o){switch(o.label){case 0:return t=H(e),[4,ne()];case 1:return n=o.sent(),r=n.transaction(ee,"readwrite"),[4,r.objectStore(ee).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function ie(e,t){return s(this,void 0,void 0,(function(){var n,r,o,i,a,s;return u(this,(function(u){switch(u.label){case 0:return n=H(e),[4,ne()];case 1:return r=u.sent(),o=r.transaction(ee,"readwrite"),i=o.objectStore(ee),[4,i.get(n)];case 2:return a=u.sent(),s=t(a),void 0!==s?[3,4]:[4,i.delete(n)];case 3:return u.sent(),[3,6];case 4:return[4,i.put(s,n)];case 5:u.sent(),u.label=6;case 6:return[4,o.complete];case 7:return u.sent(),!s||a&&a.fid===s.fid||U(e,s.fid),[2,s]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){return s(this,void 0,void 0,(function(){var t,n,r;return u(this,(function(o){switch(o.label){case 0:return[4,ie(e,(function(n){var r=se(n),o=ue(e,r);return t=o.registrationPromise,o.installationEntry}))];case 1:return n=o.sent(),n.fid!==F?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function se(e){var t=e||{fid:K(),registrationStatus:0};return pe(t)}function ue(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(k.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=ce(e,r);return{installationEntry:r,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:fe(e)}:{installationEntry:t}}function ce(e,t){return s(this,void 0,void 0,(function(){var n,r;return u(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,M(e,t)];case 1:return n=o.sent(),[2,re(e,n)];case 2:return r=o.sent(),I(r)&&409===r.serverCode?[4,oe(e)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,re(e,{fid:t.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw r;case 7:return[2]}}))}))}function fe(e){return s(this,void 0,void 0,(function(){var t,n,r,o;return u(this,(function(i){switch(i.label){case 0:return[4,le(e)];case 1:t=i.sent(),i.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,R(100)];case 3:return i.sent(),[4,le(e)];case 4:return t=i.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,ae(e)];case 6:return n=i.sent(),r=n.installationEntry,o=n.registrationPromise,o?[2,o]:[2,r];case 7:return[2,t]}}))}))}function le(e){return ie(e,(function(e){if(!e)throw k.create("installation-not-found");return pe(e)}))}function pe(e){return de(e)?{fid:e.fid,registrationStatus:0}:e}function de(e){return 1===e.registrationStatus&&e.registrationTime+b<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return s(this,void 0,void 0,(function(){var e,o,i,a,s,c,f,l;return u(this,(function(u){switch(u.label){case 0:return e=ve(n,t),o=D(n,t),i=r.getImmediate({optional:!0}),i&&o.append("x-firebase-client",i.getPlatformInfoString()),a={installation:{sdkVersion:g}},s={method:"POST",headers:o,body:JSON.stringify(a)},[4,A((function(){return fetch(e,s)}))];case 1:return c=u.sent(),c.ok?[4,c.json()]:[3,3];case 2:return f=u.sent(),l=P(f),[2,l];case 3:return[4,T("Generate Auth Token",c)];case 4:throw u.sent()}}))}))}function ve(e,t){var n=t.fid;return C(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t){return void 0===t&&(t=!1),s(this,void 0,void 0,(function(){var n,r,o,i;return u(this,(function(a){switch(a.label){case 0:return[4,ie(e.appConfig,(function(r){if(!we(r))throw k.create("not-registered");var o=r.authToken;if(!t&&_e(o))return r;if(1===o.requestStatus)return n=be(e,t),r;if(!navigator.onLine)throw k.create("app-offline");var i=Oe(r);return n=me(e,i),i}))];case 1:return r=a.sent(),n?[4,n]:[3,3];case 2:return i=a.sent(),[3,4];case 3:i=r.authToken,a.label=4;case 4:return o=i,[2,o]}}))}))}function be(e,t){return s(this,void 0,void 0,(function(){var n,r;return u(this,(function(o){switch(o.label){case 0:return[4,ge(e.appConfig)];case 1:n=o.sent(),o.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,R(100)];case 3:return o.sent(),[4,ge(e.appConfig)];case 4:return n=o.sent(),[3,2];case 5:return r=n.authToken,0===r.requestStatus?[2,ye(e,t)]:[2,r]}}))}))}function ge(e){return ie(e,(function(e){if(!we(e))throw k.create("not-registered");var t=e.authToken;return Ee(t)?a(a({},e),{authToken:{requestStatus:0}}):e}))}function me(e,t){return s(this,void 0,void 0,(function(){var n,r,o;return u(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,8]),[4,he(e,t)];case 1:return n=i.sent(),o=a(a({},t),{authToken:n}),[4,re(e.appConfig,o)];case 2:return i.sent(),[2,n];case 3:return r=i.sent(),!I(r)||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,oe(e.appConfig)];case 4:return i.sent(),[3,7];case 5:return o=a(a({},t),{authToken:{requestStatus:0}}),[4,re(e.appConfig,o)];case 6:i.sent(),i.label=7;case 7:throw r;case 8:return[2]}}))}))}function we(e){return void 0!==e&&2===e.registrationStatus}function _e(e){return 2===e.requestStatus&&!Se(e)}function Se(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_}function Oe(e){var t={requestStatus:1,requestTime:Date.now()};return a(a({},e),{authToken:t})}function Ee(e){return 1===e.requestStatus&&e.requestTime+b<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e){return s(this,void 0,void 0,(function(){var t,n,r;return u(this,(function(o){switch(o.label){case 0:return[4,ae(e.appConfig)];case 1:return t=o.sent(),n=t.installationEntry,r=t.registrationPromise,r?r.catch(console.error):ye(e).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){return void 0===t&&(t=!1),s(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return[4,Ce(e.appConfig)];case 1:return r.sent(),[4,ye(e,t)];case 2:return n=r.sent(),[2,n.token]}}))}))}function Ce(e){return s(this,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return[4,ae(e)];case 1:return t=n.sent().registrationPromise,t?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e,t){return s(this,void 0,void 0,(function(){var n,r,o,i;return u(this,(function(a){switch(a.label){case 0:return n=Te(e,t),r=D(e,t),o={method:"DELETE",headers:r},[4,A((function(){return fetch(n,o)}))];case 1:return i=a.sent(),i.ok?[3,3]:[4,T("Delete Installation",i)];case 2:throw a.sent();case 3:return[2]}}))}))}function Te(e,t){var n=t.fid;return C(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){return s(this,void 0,void 0,(function(){var t,n;return u(this,(function(r){switch(r.label){case 0:return t=e.appConfig,[4,ie(t,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(n=r.sent(),!n)return[3,6];if(1!==n.registrationStatus)return[3,2];throw k.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw k.create("app-offline");case 3:return[4,Pe(t,n)];case 4:return r.sent(),[4,oe(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,t){var n=e.appConfig;return q(n,t),function(){z(n,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){var t,n;if(!e||!e.options)throw xe("App Configuration");if(!e.name)throw xe("App Name");var r=["projectId","apiKey","appId"];try{for(var o=c(r),i=o.next();!i.done;i=o.next()){var a=i.value;if(!e.options[a])throw xe(a)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function xe(e){return k.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){var t="installations";e.INTERNAL.registerComponent(new i["Component"](t,(function(e){var t=e.getProvider("app").getImmediate(),n=Ae(t),r=e.getProvider("platform-logger"),o={appConfig:n,platformLoggerProvider:r},i={app:t,getId:function(){return ke(o)},getToken:function(e){return Ie(o,e)},delete:function(){return je(o)},onIdChange:function(e){return De(o,e)}};return i}),"PUBLIC")),e.registerVersion(v,y)}Ne(o.a)},8071:function(e,t,n){"use strict";n.r(t);n("7d28");var r=n("4be4"),o=n("cd51");var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function u(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=i.next()).done)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a}function f(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}var l,p,d=n("9dbb"),h=n("c23d"),v=n.n(h),y=(l={},l["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',l["only-available-in-window"]="This method is available in a Window context.",l["only-available-in-sw"]="This method is available in a service worker context.",l["permission-default"]="The notification permission was not granted and dismissed instead.",l["permission-blocked"]="The notification permission was not granted and blocked instead.",l["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",l["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",l["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",l["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",l["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",l["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",l["token-update-no-token"]="FCM returned no token when updating the user to push.",l["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",l["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",l["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",l["invalid-vapid-key"]="The public VAPID key must be a string.",l["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",l),b=new o["ErrorFactory"]("messaging","Messaging",y),g="/firebase-messaging-sw.js",m="/firebase-cloud-messaging-push-scope",w="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_="https://fcmregistrations.googleapis.com/v1",S="FCM_MSG",O="google.c.a.c_id",E="google.c.a.c_l",k="google.c.a.ts",I="google.c.a.e",C="FirebaseMessaging: ";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){var t=new Uint8Array(e),n=btoa(String.fromCharCode.apply(String,f(t)));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function T(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["PUSH_RECEIVED"]="push-received",e["NOTIFICATION_CLICKED"]="notification-clicked"})(p||(p={}));var j="fcm_token_details_db",D=5,A="fcm_token_object_Store";function x(e){return a(this,void 0,void 0,(function(){var t,n,r,o,i=this;return s(this,(function(u){switch(u.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=u.sent(),n=t.map((function(e){return e.name})),!n.includes(j))return[2,null];u.label=2;case 2:return r=null,[4,Object(d["openDb"])(j,D,(function(t){return a(i,void 0,void 0,(function(){var n,o,i,a;return s(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(A)?(n=t.transaction.objectStore(A),[4,n.index("fcmSenderId").get(e)]):[2];case 1:return o=s.sent(),[4,n.clear()];case 2:if(s.sent(),!o)return[2];if(2===t.oldVersion){if(i=o,!i.auth||!i.p256dh||!i.endpoint)return[2];r={token:i.fcmToken,createTime:null!==(a=i.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:i.auth,p256dh:i.p256dh,endpoint:i.endpoint,swScope:i.swScope,vapidKey:"string"===typeof i.vapidKey?i.vapidKey:P(i.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(i=o,r={token:i.fcmToken,createTime:i.createTime,subscriptionOptions:{auth:P(i.auth),p256dh:P(i.p256dh),endpoint:i.endpoint,swScope:i.swScope,vapidKey:P(i.vapidKey)}});return[2]}}))}))}))];case 3:return o=u.sent(),o.close(),[4,Object(d["deleteDb"])(j)];case 4:return u.sent(),[4,Object(d["deleteDb"])("fcm_vapid_details_db")];case 5:return u.sent(),[4,Object(d["deleteDb"])("undefined")];case 6:return u.sent(),[2,N(r)?r:null]}}))}))}function N(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M="firebase-messaging-database",R=1,L="firebase-messaging-store",B=null;function F(){return B||(B=Object(d["openDb"])(M,R,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(L)}}))),B}function K(e){return a(this,void 0,void 0,(function(){var t,n,r,o;return s(this,(function(i){switch(i.label){case 0:return t=W(e),[4,F()];case 1:return n=i.sent(),[4,n.transaction(L).objectStore(L).get(t)];case 2:return r=i.sent(),r?[2,r]:[3,3];case 3:return[4,x(e.appConfig.senderId)];case 4:return o=i.sent(),o?[4,V(e,o)]:[3,6];case 5:return i.sent(),[2,o];case 6:return[2]}}))}))}function V(e,t){return a(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(i){switch(i.label){case 0:return n=W(e),[4,F()];case 1:return r=i.sent(),o=r.transaction(L,"readwrite"),[4,o.objectStore(L).put(t,n)];case 2:return i.sent(),[4,o.complete];case 3:return i.sent(),[2,t]}}))}))}function H(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(o){switch(o.label){case 0:return t=W(e),[4,F()];case 1:return n=o.sent(),r=n.transaction(L,"readwrite"),[4,r.objectStore(L).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function W(e){var t=e.appConfig;return t.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return a(this,void 0,void 0,(function(){var n,r,o,i,a,u,c;return s(this,(function(s){switch(s.label){case 0:return[4,$(e)];case 1:n=s.sent(),r=J(t),o={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(G(e.appConfig),o)];case 3:return a=s.sent(),[4,a.json()];case 4:return i=s.sent(),[3,6];case 5:throw u=s.sent(),b.create("token-subscribe-failed",{errorInfo:u});case 6:if(i.error)throw c=i.error.message,b.create("token-subscribe-failed",{errorInfo:c});if(!i.token)throw b.create("token-subscribe-no-token");return[2,i.token]}}))}))}function q(e,t){return a(this,void 0,void 0,(function(){var n,r,o,i,a,u,c;return s(this,(function(s){switch(s.label){case 0:return[4,$(e)];case 1:n=s.sent(),r=J(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(G(e.appConfig)+"/"+t.token,o)];case 3:return a=s.sent(),[4,a.json()];case 4:return i=s.sent(),[3,6];case 5:throw u=s.sent(),b.create("token-update-failed",{errorInfo:u});case 6:if(i.error)throw c=i.error.message,b.create("token-update-failed",{errorInfo:c});if(!i.token)throw b.create("token-update-no-token");return[2,i.token]}}))}))}function z(e,t){return a(this,void 0,void 0,(function(){var n,r,o,i,a,u;return s(this,(function(s){switch(s.label){case 0:return[4,$(e)];case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(G(e.appConfig)+"/"+t,r)];case 3:return o=s.sent(),[4,o.json()];case 4:if(i=s.sent(),i.error)throw a=i.error.message,b.create("token-unsubscribe-failed",{errorInfo:a});return[3,6];case 5:throw u=s.sent(),b.create("token-unsubscribe-failed",{errorInfo:u});case 6:return[2]}}))}))}function G(e){var t=e.projectId;return _+"/projects/"+t+"/registrations"}function $(e){var t=e.appConfig,n=e.installations;return a(this,void 0,void 0,(function(){var e;return s(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function J(e){var t=e.p256dh,n=e.auth,r=e.endpoint,o=e.vapidKey,i={web:{endpoint:r,auth:n,p256dh:t}};return o!==w&&(i.web.applicationPubKey=o),i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y=6048e5;function X(e,t,n){return a(this,void 0,void 0,(function(){var r,o,i,a;return s(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw b.create("permission-blocked");return[4,te(t,n)];case 1:return r=s.sent(),[4,K(e)];case 2:return o=s.sent(),i={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:P(r.getKey("auth")),p256dh:P(r.getKey("p256dh"))},o?[3,3]:[2,ee(e,i)];case 3:if(ne(o.subscriptionOptions,i))return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,z(e,o.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,ee(e,i)];case 8:return Date.now()>=o.createTime+Y?[2,Q({token:o.token,createTime:Date.now(),subscriptionOptions:i},e,t)]:[2,o.token];case 9:return[2]}}))}))}function Z(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return[4,K(e)];case 1:return n=o.sent(),n?[4,z(e,n.token)]:[3,4];case 2:return o.sent(),[4,H(e)];case 3:o.sent(),o.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return r=o.sent(),r?[2,r.unsubscribe()]:[2,!0]}}))}))}function Q(e,t,n){return a(this,void 0,void 0,(function(){var r,o,a;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,5]),[4,q(t,e)];case 1:return r=s.sent(),o=i(i({},e),{token:r,createTime:Date.now()}),[4,V(t,o)];case 2:return s.sent(),[2,r];case 3:return a=s.sent(),[4,Z(t,n)];case 4:throw s.sent(),a;case 5:return[2]}}))}))}function ee(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return[4,U(e,t)];case 1:return n=o.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,V(e,r)];case 2:return o.sent(),[2,r.token]}}))}))}function te(e,t){return a(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return n=r.sent(),n?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:T(t)})]}}))}))}function ne(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){var t={from:e.from,collapseKey:e.collapse_key};return oe(t,e),ie(t,e),ae(t,e),t}function oe(e,t){if(t.notification){e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var r=t.notification.body;r&&(e.notification.body=r);var o=t.notification.image;o&&(e.notification.image=o)}}function ie(e,t){t.data&&(e.data=t.data)}function ae(e,t){if(t.fcmOptions){e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return"object"===typeof e&&!!e&&O in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!==typeof e)throw b.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return a(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,K(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null===n||void 0===n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:w,r.label=2;case 2:return[2,X(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Z(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw b.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw b.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw b.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw b.create("only-available-in-window")},e.prototype.onMessage=function(){throw b.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw b.create("only-available-in-window")},e.prototype.onPush=function(e){return a(this,void 0,void 0,(function(){var t,n,r,o;return s(this,(function(i){switch(i.label){case 0:return t=le(e),t?[4,ve()]:(console.debug(C+"failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return n=i.sent(),de(n)?[2,he(n,t)]:(r=!1,t.notification?[4,ye(fe(t))]:[3,3]);case 2:i.sent(),r=!0,i.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed||this.bgMessageHandler&&(o=re(t),"function"===typeof this.bgMessageHandler?this.bgMessageHandler(o):this.bgMessageHandler.next(o)),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return a(this,void 0,void 0,(function(){var r,o;return s(this,(function(i){switch(i.label){case 0:return r=e.newSubscription,r?[3,2]:[4,Z(this.firebaseDependencies,self.registration)];case 1:return i.sent(),[2];case 2:return[4,K(this.firebaseDependencies)];case 3:return o=i.sent(),[4,Z(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,X(this.firebaseDependencies,self.registration,null!==(n=null===(t=null===o||void 0===o?void 0:o.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:w)];case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return a(this,void 0,void 0,(function(){var r,o,i,a,u;return s(this,(function(s){switch(s.label){case 0:return r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[S],r?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),o=be(r),o?(i=new URL(o,self.location.href),a=new URL(self.location.origin),i.host!==a.host?[2]:[4,pe(i)]):[2]):[2];case 1:return u=s.sent(),u?[3,4]:[4,self.clients.openWindow(o)];case 2:return u=s.sent(),[4,ue(3e3)];case 3:return s.sent(),[3,6];case 4:return[4,u.focus()];case 5:u=s.sent(),s.label=6;case 6:return u?(r.messageType=p.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,u.postMessage(r)]):[2]}}))}))},e}();function fe(e){var t,n=i({},e.notification);return n.data=(t={},t[S]=e,t),n}function le(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}function pe(e){return a(this,void 0,void 0,(function(){var t,n,r,o,i,a,c;return s(this,(function(s){switch(s.label){case 0:return[4,ve()];case 1:t=s.sent();try{for(n=u(t),r=n.next();!r.done;r=n.next())if(o=r.value,i=new URL(o.url,self.location.href),e.host===i.host)return[2,o]}catch(f){a={error:f}}finally{try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(a)throw a.error}}return[2,null]}}))}))}function de(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}function he(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=p.PUSH_RECEIVED;try{for(var o=u(e),i=o.next();!i.done;i=o.next()){var a=i.value;a.postMessage(t)}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function ve(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function ye(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function be(e){var t,n,r,o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;return o||(se(e.data)?self.location.origin:null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return a(this,void 0,void 0,(function(){var t,n;return s(this,(function(r){switch(r.label){case 0:return t=e.data,t.isFirebaseMessaging?(this.onMessageCallback&&t.messageType===p.PUSH_RECEIVED&&("function"===typeof this.onMessageCallback?this.onMessageCallback(we(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),n=t.data,se(n)&&"1"===n[I]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return a(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw b.create("permission-blocked");return[4,this.updateVapidKey(null===e||void 0===e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null===e||void 0===e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,X(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return a(this,void 0,void 0,(function(){return s(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=w),[2]}))}))},e.prototype.updateSwReg=function(e){return a(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw b.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return a(this,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register(g,{scope:m})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),b.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return a(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,Z(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return a(this,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if(e=t.sent(),"granted"===e)return[2];throw"denied"===e?b.create("permission-blocked"):b.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw b.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw b.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw b.create("invalid-sw-registration");if(this.swRegistration)throw b.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw b.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw b.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return n=me(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r=o.sent(),r.logEvent(n,{message_id:t[O],message_name:t[E],message_time:t[k],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function me(e){switch(e){case p.NOTIFICATION_CLICKED:return"notification_open";case p.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}function we(e){return delete e.messageType,delete e.isFirebaseMessaging,e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){var t,n;if(!e||!e.options)throw Se("App Configuration Object");if(!e.name)throw Se("App Name");var r=["projectId","apiKey","appId","messagingSenderId"],o=e.options;try{for(var i=u(r),a=i.next();!a.done;a=i.next()){var s=a.value;if(!o[s])throw Se(s)}}catch(c){t={error:c}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:o.projectId,apiKey:o.apiKey,appId:o.appId,senderId:o.messagingSenderId}}function Se(e){return b.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe="messaging";function Ee(e){var t=e.getProvider("app").getImmediate(),n=_e(t),r=e.getProvider("installations").getImmediate(),o=e.getProvider("analytics-internal"),i={app:t,appConfig:n,installations:r,analyticsProvider:o};if(!Ie())throw b.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new ce(i):new ge(i)}var ke={isSupported:Ie};function Ie(){return self&&"ServiceWorkerGlobalScope"in self?Pe():Ce()}function Ce(){return"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function Pe(){return"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}v.a.INTERNAL.registerComponent(new r["Component"](Oe,Ee,"PUBLIC").setServiceProps(ke))},"9dbb":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var o,i=new Promise((function(i,a){o=e[t].apply(e,r),n(o).then(i,a)}));return i.request=o,i}function o(e,t,n){var o=r(e,t,n);return o.then((function(e){if(e)return new f(e,o.request)}))}function i(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})}))}function c(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function h(e){this._db=e}function v(e,t,n){var o=r(indexedDB,"open",[e,t]),i=o.request;return i&&(i.onupgradeneeded=function(e){n&&n(new d(i.result,e.oldVersion,i.transaction))}),o.then((function(e){return new h(e)}))}function y(e){return r(indexedDB,"deleteDatabase",[e])}i(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},i(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},i(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},i(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],o=this._store||this._index,i=o[e].apply(o,n.slice(0,-1));i.onsuccess=function(){r(i.result)}})}))})),[c,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(o){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():o(r)):o(r)}))}))})})),e.openDb=v,e.deleteDb=y,Object.defineProperty(e,"__esModule",{value:!0})}))},abfd:function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o;n.r(t),n.d(t,"LogLevel",(function(){return i})),n.d(t,"Logger",(function(){return l})),n.d(t,"setLogLevel",(function(){return p})),n.d(t,"setUserLogHandler",(function(){return d}));var i,a=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));var s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},u=i.INFO,c=(o={},o[i.DEBUG]="log",o[i.VERBOSE]="log",o[i.INFO]="info",o[i.WARN]="warn",o[i.ERROR]="error",o),f=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if(!(t<e.logLevel)){var i=(new Date).toISOString(),a=c[t];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[a].apply(console,r(["["+i+"]  "+e.name+":"],n))}},l=function(){function e(e){this.name=e,this._logLevel=u,this._logHandler=f,this._userLogHandler=null,a.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?s[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.DEBUG],e)),this._logHandler.apply(this,r([this,i.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.VERBOSE],e)),this._logHandler.apply(this,r([this,i.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.INFO],e)),this._logHandler.apply(this,r([this,i.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.WARN],e)),this._logHandler.apply(this,r([this,i.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.ERROR],e)),this._logHandler.apply(this,r([this,i.ERROR],e))},e}();function p(e){a.forEach((function(t){t.setLogLevel(e)}))}function d(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];var s=o.map((function(e){if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}},r=0,o=a;r<o.length;r++){var u=o[r];n(u)}}},c23d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i=n("df41"),a=n("cd51"),s=n("4be4"),u=n("abfd"),c=(r={},r["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$appName}",r["duplicate-app"]="Firebase App named '{$appName}' already exists",r["app-deleted"]="Firebase App named '{$appName}' already deleted",r["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",r["invalid-log-argument"]="First argument to `onLog` must be null or a function.",r),f=new a.ErrorFactory("app","Firebase",c),l="@firebase/app",p="0.6.11",d="@firebase/analytics",h="@firebase/auth",v="@firebase/database",y="@firebase/functions",b="@firebase/installations",g="@firebase/messaging",m="@firebase/performance",w="@firebase/remote-config",_="@firebase/storage",S="@firebase/firestore",O="firebase-wrapper",E="[DEFAULT]",k=(o={},o[l]="fire-core",o[d]="fire-analytics",o[h]="fire-auth",o[v]="fire-rtdb",o[y]="fire-fn",o[b]="fire-iid",o[g]="fire-fcm",o[m]="fire-perf",o[w]="fire-rc",o[_]="fire-gcs",o[S]="fire-fst",o["fire-js"]="fire-js",o[O]="fire-js-all",o),I=new u.Logger("@firebase/app"),C=function(){function e(e,t,n){var r,o,u=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a.deepCopy(e),this.container=new s.ComponentContainer(t.name),this._addComponent(new s.Component("app",(function(){return u}),"PUBLIC"));try{for(var c=i.__values(this.firebase_.INTERNAL.components.values()),f=c.next();!f.done;f=c.next()){var l=f.value;this._addComponent(l)}}catch(p){r={error:p}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(r)throw r.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t=E),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=E),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){I.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw f.create("app-deleted",{appName:this.name_})},e}();C.prototype.name&&C.prototype.options||C.prototype.delete||console.log("dc");var P="7.20.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){var t={},n=new Map,r={__esModule:!0,initializeApp:l,app:c,registerVersion:h,setLogLevel:u.setLogLevel,onLog:v,apps:null,SDK_VERSION:P,INTERNAL:{registerComponent:d,removeApp:o,components:n,useAsService:y}};function o(e){delete t[e]}function c(e){if(e=e||E,!a.contains(t,e))throw f.create("no-app",{appName:e});return t[e]}function l(n,o){if(void 0===o&&(o={}),"object"!==typeof o||null===o){var i=o;o={name:i}}var s=o;void 0===s.name&&(s.name=E);var u=s.name;if("string"!==typeof u||!u)throw f.create("bad-app-name",{appName:String(u)});if(a.contains(t,u))throw f.create("duplicate-app",{appName:u});var c=new e(n,s,r);return t[u]=c,c}function p(){return Object.keys(t).map((function(e){return t[e]}))}function d(o){var s,u,l=o.name;if(n.has(l))return I.debug("There were multiple attempts to register component "+l+"."),"PUBLIC"===o.type?r[l]:null;if(n.set(l,o),"PUBLIC"===o.type){var p=function(e){if(void 0===e&&(e=c()),"function"!==typeof e[l])throw f.create("invalid-app-argument",{appName:l});return e[l]()};void 0!==o.serviceProps&&a.deepExtend(p,o.serviceProps),r[l]=p,e.prototype[l]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this._getService.bind(this,l);return n.apply(this,o.multipleInstances?e:[])}}try{for(var d=i.__values(Object.keys(t)),h=d.next();!h.done;h=d.next()){var v=h.value;t[v]._addComponent(o)}}catch(y){s={error:y}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(s)throw s.error}}return"PUBLIC"===o.type?r[l]:null}function h(e,t,n){var r,o=null!==(r=k[e])&&void 0!==r?r:e;n&&(o+="-"+n);var i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){var u=['Unable to register library "'+o+'" with version "'+t+'":'];return i&&u.push('library name "'+o+'" contains illegal characters (whitespace or "/")'),i&&a&&u.push("and"),a&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void I.warn(u.join(" "))}d(new s.Component(o+"-version",(function(){return{library:o,version:t}}),"VERSION"))}function v(e,t){if(null!==e&&"function"!==typeof e)throw f.create("invalid-log-argument",{appName:name});u.setUserLogHandler(e,t)}function y(e,t){if("serverAuth"===t)return null;var n=t;return n}return r["default"]=r,Object.defineProperty(r,"apps",{get:p}),c["App"]=e,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){var e=T(C);function t(t){a.deepExtend(e,t)}return e.INTERNAL=i.__assign(i.__assign({},e.INTERNAL),{createFirebaseNamespace:j,extendNamespace:t,createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),e}var D=j(),A=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map((function(e){if(x(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){var t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e){return new A(e)}),"PRIVATE")),e.registerVersion(l,p,t),e.registerVersion("fire-js","")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(a.isBrowser()&&void 0!==self.firebase){I.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var M=self.firebase.SDK_VERSION;M&&M.indexOf("LITE")>=0&&I.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var R=D.initializeApp;D.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.isNode()&&I.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),R.apply(void 0,e)};var L=D;N(L),t.default=L,t.firebase=L},cd51:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n("fbb0"),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},u=function(e){var t=[],n=0,r=0;while(n<e.length){var o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){i=e[n++];var a=e[n++],s=e[n++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,s=a?e[o+1]:0,u=o+2<e.length,c=u?e[o+2]:0,f=i>>2,l=(3&i)<<4|s>>4,p=(15&s)<<2|c>>6,d=63&c;u||(d=64,a||(p=64)),r.push(n[f],n[l],n[p],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):u(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],o=0;o<e.length;){var i=n[e.charAt(o++)],a=o<e.length,s=a?n[e.charAt(o)]:0;++o;var u=o<e.length,c=u?n[e.charAt(o)]:64;++o;var f=o<e.length,l=f?n[e.charAt(o)]:64;if(++o,null==i||null==s||null==c||null==l)throw Error();var p=i<<2|s>>4;if(r.push(p),64!==c){var d=s<<4&240|c>>2;if(r.push(d),64!==l){var h=c<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},f=function(e){var t=s(e);return c.encodeByteArray(t,!0)},l=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e){return d(void 0,e)}function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=d(e[r],t[r]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function b(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function m(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function _(){return v().indexOf("Electron/")>=0}function S(){var e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return v().indexOf("MSAppHost/")>=0}function E(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function k(){return!b()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){return"indexedDB"in self&&null!=indexedDB}function C(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",o=window.indexedDB.open(r);o.onsuccess=function(){o.result.close(),n||window.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=function(){n=!1},o.onerror=function(){var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(i){t(i)}}))}function P(){return!(!navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T="FirebaseError",j=function(e){function t(n,r){var o=e.call(this,r)||this;return o.code=n,o.name=T,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,D.prototype.create),o}return r.__extends(t,e),t}(Error),D=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?A(i,r):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new j(o,s),c=0,f=Object.keys(r);c<f.length;c++){var l=f[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=r[l])}return u},e}();function A(e,t){return e.replace(x,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return JSON.parse(e)}function M(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R=function(e){var t={},n={},r={},o="";try{var i=e.split(".");t=N(l(i[0])||""),n=N(l(i[1])||""),o=i[2],r=n["d"]||{},delete n["d"]}catch(a){}return{header:t,claims:n,data:r,signature:o}},L=function(e){var t=R(e).claims,n=Math.floor((new Date).getTime()/1e3),r=0,o=0;return"object"===typeof t&&(t.hasOwnProperty("nbf")?r=t["nbf"]:t.hasOwnProperty("iat")&&(r=t["iat"]),o=t.hasOwnProperty("exp")?t["exp"]:r+86400),!!n&&!!r&&!!o&&n>=r&&n<=o},B=function(e){var t=R(e).claims;return"object"===typeof t&&t.hasOwnProperty("iat")?t["iat"]:null},F=function(e){var t=R(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},K=function(e){var t=R(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function W(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,o=Object.entries(e);r<o.length;r++){var i=o[r],a=i[0],s=i[1];n(a,s)}return t.length?"&"+t.join("&"):""}function z(e){var t={},n=e.replace(/^\?/,"").split("&");return n.forEach((function(e){if(e){var n=e.split("=");t[n[0]]=n[1]}})),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var o=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],u=this.chain_[1],c=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(i=f^u&(c^f),a=1518500249):(i=u^c^f,a=1859775393):r<60?(i=u&c|f&(u|c),a=2400959708):(i=u^c^f,a=3395469782);o=(s<<5|s>>>27)+i+l+a+n[r]&4294967295;l=f,f=c,c=4294967295&(u<<30|u>>>2),u=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,o=this.buf_,i=this.inbuf_;while(r<t){if(0===i)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(o[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}else while(r<t)if(o[i]=e[r],++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[n]>>o&255,++r;return e},e}();function $(e,t){var n=new J(e,t);return n.subscribe.bind(n)}var J=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=X(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Z),void 0===r.error&&(r.error=Z),void 0===r.complete&&(r.complete=Z);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}})),this.observers.push(r),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Y(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];Promise.resolve(!0).then((function(){e.apply(void 0,n)})).catch((function(e){t&&t(e)}))}}function X(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"===typeof e[o])return!0}return!1}function Z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q=function(e,t,n,r){var o;if(r<t?o="at least "+t:r>n&&(o=0===n?"none":"no more than "+n),o){var i=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+o+".";throw new Error(i)}};function ee(e,t,n){var r="";switch(t){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=r+" argument ",o}function te(e,t,n,r){if((!r||n)&&"string"!==typeof n)throw new Error(ee(e,t,r)+"must be a valid firebase namespace.")}function ne(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(ee(e,t,r)+"must be a valid function.")}function re(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(ee(e,t,r)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);if(o>=55296&&o<=56319){var a=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");var s=e.charCodeAt(r)-56320;o=65536+(a<<10)+s}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ie=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},ae=1e3,se=2,ue=144e5,ce=.5;function fe(e,t,n){void 0===t&&(t=ae),void 0===n&&(n=se);var r=t*Math.pow(n,e),o=Math.round(ce*r*(Math.random()-.5)*2);return Math.min(ue,r+o)}t.CONSTANTS=o,t.Deferred=h,t.ErrorFactory=D,t.FirebaseError=j,t.MAX_VALUE_MILLIS=ue,t.RANDOM_FACTOR=ce,t.Sha1=G,t.areCookiesEnabled=P,t.assert=i,t.assertionError=a,t.async=Y,t.base64=c,t.base64Decode=l,t.base64Encode=f,t.calculateBackoffMillis=fe,t.contains=V,t.createSubscribe=$,t.decode=R,t.deepCopy=p,t.deepExtend=d,t.errorPrefix=ee,t.getUA=v,t.isAdmin=K,t.isBrowser=g,t.isBrowserExtension=m,t.isElectron=_,t.isEmpty=W,t.isIE=S,t.isIndexedDBAvailable=I,t.isMobileCordova=y,t.isNode=b,t.isNodeSdk=E,t.isReactNative=w,t.isSafari=k,t.isUWP=O,t.isValidFormat=F,t.isValidTimestamp=L,t.issuedAtTime=B,t.jsonEval=N,t.map=U,t.querystring=q,t.querystringDecode=z,t.safeGet=H,t.stringLength=ie,t.stringToByteArray=oe,t.stringify=M,t.validateArgCount=Q,t.validateCallback=ne,t.validateContextObject=re,t.validateIndexedDBOpenable=C,t.validateNamespace=te}).call(this,n("c8ba"))},df41:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__createBinding",(function(){return p})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return v})),n.d(t,"__spread",(function(){return y})),n.d(t,"__spreadArrays",(function(){return b})),n.d(t,"__await",(function(){return g})),n.d(t,"__asyncGenerator",(function(){return m})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return S})),n.d(t,"__importStar",(function(){return O})),n.d(t,"__importDefault",(function(){return E})),n.d(t,"__classPrivateFieldGet",(function(){return k})),n.d(t,"__classPrivateFieldSet",(function(){return I}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function p(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=i.next()).done)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function m(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{u(o[e](t))}catch(n){l(i[0][3],n)}}function u(e){e.value instanceof g?Promise.resolve(e.value.v).then(c,f):l(i[0][2],e)}function c(e){s("next",e)}function f(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"===typeof h?h(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){t=e[n](t),o(r,i,t.done,t.value)}))}}function o(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function I(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},fbb0:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return s})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return l})),n.d(t,"__createBinding",(function(){return p})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return v})),n.d(t,"__spread",(function(){return y})),n.d(t,"__spreadArrays",(function(){return b})),n.d(t,"__await",(function(){return g})),n.d(t,"__asyncGenerator",(function(){return m})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return S})),n.d(t,"__importStar",(function(){return O})),n.d(t,"__importDefault",(function(){return E})),n.d(t,"__classPrivateFieldGet",(function(){return k})),n.d(t,"__classPrivateFieldSet",(function(){return I}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function p(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function d(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function h(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=i.next()).done)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function m(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{u(o[e](t))}catch(n){l(i[0][3],n)}}function u(e){e.value instanceof g?Promise.resolve(e.value.v).then(c,f):l(i[0][2],e)}function c(e){s("next",e)}function f(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"===typeof h?h(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){t=e[n](t),o(r,i,t.done,t.value)}))}}function o(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function I(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}}}]);
//# sourceMappingURL=chunk-78dfd2c6.5a919ae2.js.map
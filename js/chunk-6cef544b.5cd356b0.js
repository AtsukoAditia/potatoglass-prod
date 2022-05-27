(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cef544b"],{"1bda":function(t,e,r){"use strict";r("4a2d")},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}},"4a2d":function(t,e,r){},"716b":function(t,e,r){(function(e,r){t.exports=r()})(0,(function(){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=9)}([function(t,e,r){"use strict";e.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(t,e,r){"use strict";var n=r(2),a=r(5),o=r(0);e.a=function(t,e){if(e.value){var i=r.i(a.a)(o.a,e.value);if("INPUT"!==t.tagName.toLocaleUpperCase()){var c=t.getElementsByTagName("input");1!==c.length||(t=c[0])}t.oninput=function(){var e=t.value.length-t.selectionEnd;t.value=r.i(n.a)(t.value,i),e=Math.max(e,i.suffix.length),e=t.value.length-e,e=Math.max(e,i.prefix.length+1),r.i(n.b)(t,e),t.dispatchEvent(r.i(n.c)("change"))},t.onfocus=function(){r.i(n.b)(t,t.value.length-i.suffix.length)},t.oninput(),t.dispatchEvent(r.i(n.c)("input"))}}},function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;"number"==typeof t&&(t=t.toFixed(i(e.precision)));var r=t.indexOf("-")>=0?"-":"",n=o(t),a=u(n,e.precision),c=f(a).split("."),d=c[0],p=c[1];return d=s(d,e.thousands),e.prefix+r+l(d,p,e.decimal)+e.suffix}function a(t,e){var r=t.indexOf("-")>=0?-1:1,n=o(t),a=u(n,e);return parseFloat(a)*r}function o(t){return f(t).replace(/\D+/g,"")||"0"}function i(t){return c(0,t,20)}function c(t,e,r){return Math.max(t,Math.min(e,r))}function u(t,e){var r=Math.pow(10,e);return(parseFloat(t)/r).toFixed(i(e))}function s(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+e)}function l(t,e,r){return e?t+r+e:t}function f(t){return t?t.toString():""}function d(t,e){var r=function(){t.setSelectionRange(e,e)};t===document.activeElement&&(r(),setTimeout(r,1))}function p(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var v=r(0);r.d(e,"a",(function(){return n})),r.d(e,"d",(function(){return a})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return p}))},function(t,e,r){"use strict";function n(t,e){e&&Object.keys(e).map((function(t){c.a[t]=e[t]})),t.directive("money",i.a),t.component("money",o.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(6),o=r.n(a),i=r(1),c=r(0);r.d(e,"Money",(function(){return o.a})),r.d(e,"VMoney",(function(){return i.a})),r.d(e,"options",(function(){return c.a})),r.d(e,"VERSION",(function(){return u}));var u="0.8.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),a=r(0),o=r(2);e.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return a.a.precision}},decimal:{type:String,default:function(){return a.a.decimal}},thousands:{type:String,default:function(){return a.a.thousands}},prefix:{type:String,default:function(){return a.a.prefix}},suffix:{type:String,default:function(){return a.a.suffix}}},directives:{money:n.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(t,e){var n=r.i(o.a)(t,this.$props);n!==this.formattedValue&&(this.formattedValue=n)}}},methods:{change:function(t){this.$emit("input",this.masked?t.target.value:r.i(o.d)(t.target.value,this.precision))}}}},function(t,e,r){"use strict";e.a=function(t,e){return t=t||{},e=e||{},Object.keys(t).concat(Object.keys(e)).reduce((function(r,n){return r[n]=void 0===e[n]?t[n]:e[n],r}),{})}},function(t,e,r){var n=r(7)(r(4),r(8),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,r,n){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r),n){var u=c.computed||(c.computed={});Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}}))}return{esModule:a,exports:o,options:c}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:t.precision,decimal:t.decimal,thousands:t.thousands,prefix:t.prefix,suffix:t.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:t.formattedValue},on:{change:t.change}})},staticRenderFns:[]}},function(t,e,r){t.exports=r(3)}])}))},"931e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{md:"12"}},[r("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[r("ul",{staticClass:"nav nav-pills nav-fill mb-3"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link iq-waves-effect pr-4",attrs:{to:"/setting/informasi"}},[t._v(" Informasi ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link iq-waves-effect pr-4",attrs:{to:"/setting/penjualan"}},[t._v(" Penjualan ")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link iq-waves-effect pr-4",attrs:{to:"/setting/etalase"}},[t._v(" Etalase ")])],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("Promo & Voucher")])]),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link iq-waves-effect pr-4",attrs:{to:"/setting/template-chat"}},[t._v(" Pesan ")])],1)]),r("b-row",[r("b-col",{attrs:{md:"5"}},[r("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title "},[t._v("Buat Voucher Toko Anda")])]},proxy:!0},{key:"body",fn:function(){return[r("b-form",{on:{submit:t.sendVoucher}},[r("b-form-group",{staticClass:"row",attrs:{"label-cols-sm":"3",label:"Kode Voucher :","label-for":"kode_voucher"}},[r("b-form-input",t._b({staticClass:"form-control",attrs:{id:"kode_voucher",required:""},model:{value:t.voc.code,callback:function(e){t.$set(t.voc,"code",e)},expression:"voc.code"}},"b-form-input",t.money,!1))],1),r("b-form-group",{attrs:{label:"Tipe Diskon :","label-for":"discountType"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.ariaDescribeby;return[r("b-form-radio-group",{attrs:{id:"discountType","aria-describedby":n,name:"discountType",required:""},model:{value:t.voc.discount_type,callback:function(e){t.$set(t.voc,"discount_type",e)},expression:"voc.discount_type"}},[r("b-form-radio",{attrs:{value:"material"}},[t._v("Potongan Harga")]),r("b-form-radio",{attrs:{value:"ongkir"}},[t._v("Potongan Ongkir")])],1)]}}])}),r("b-form-row",[r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Tipe Potongan Voucher :","label-for":"typeValue"}},[r("b-form-select",{staticClass:"mb-3 form-control",attrs:{id:"typeValue",required:""},model:{value:t.voc.type_value,callback:function(e){t.$set(t.voc,"type_value",e)},expression:"voc.type_value"}},[r("b-form-select-option",{attrs:{value:"nominal"}},[t._v("Nominal Rupiah")]),r("b-form-select-option",{attrs:{value:"percentace"}},[t._v("Persentase Diskon")])],1)],1)],1),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"Jumlah Nominal :","label-for":"typeValue"}},["percentace"==t.voc.type_value?r("b-input-group",{attrs:{size:"md",append:"%"}},[r("money",t._b({staticClass:"form-control tarvol1",attrs:{id:"typeValue"},model:{value:t.voc.value,callback:function(e){t.$set(t.voc,"value",e)},expression:"voc.value"}},"money",t.money,!1))],1):t._e(),"nominal"==t.voc.type_value?r("b-input-group",{attrs:{size:"md",prepend:"Rp"}},[r("money",t._b({staticClass:"form-control disvol1",attrs:{id:"typeValue"},model:{value:t.voc.value,callback:function(e){t.$set(t.voc,"value",e)},expression:"voc.value"}},"money",t.money,!1))],1):t._e()],1)],1)],1),r("b-form-row",[r("b-col",{attrs:{md:"12"}},[r("label",{staticClass:"col-form-label"},[t._v("Periode Voucher")])]),r("b-col",{attrs:{md:"5"}},[r("label",{staticClass:"col-form-label"},[t._v("Tanggal Mulai :")]),r("b-form-input",{attrs:{id:"startDate",required:"",type:"date"},model:{value:t.voc.start,callback:function(e){t.$set(t.voc,"start",e)},expression:"voc.start"}})],1),r("b-col",{staticClass:"m-auto text-center",attrs:{md:"1"}},[t._v("—")]),r("b-col",{attrs:{md:"5"}},[r("label",{staticClass:"col-form-label"},[t._v("Tanggal Selesai :")]),r("b-form-input",{attrs:{id:"endDate",required:"",type:"date"},model:{value:t.voc.end,callback:function(e){t.$set(t.voc,"end",e)},expression:"voc.end"}})],1)],1),r("div",{staticClass:"mt-3"},[r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Buat Voucher")])],1)],1)]},proxy:!0}])})],1),r("b-col",{attrs:{md:"7"}},[r("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title "},[t._v("Daftar Voucher Aktif")])]},proxy:!0},{key:"body",fn:function(){return[r("b-table",{ref:"dTable",attrs:{"show-empty":"",stacked:"md",items:t.getVoucherList,fields:t.tblVoucher,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,responsive:""},scopedSlots:t._u([{key:"cell(no)",fn:function(e){return[r("span",{attrs:{"v-for":e}},[t._v(" "+t._s((t.currentPage-1)*t.perPage+(e.index+1))+" ")])]}},{key:"cell(date)",fn:function(e){return[r("span",[t._v(t._s(e.item.start))]),t._v(" - "),r("span",[t._v(t._s(e.item.end))])]}},{key:"cell(active)",fn:function(e){return[r("div",["1"==e.item.active?r("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Berhentikan kode voucher ini?"},on:{click:function(r){return t.statusVoucher(e.item.id)}}},[r("b-badge",{attrs:{variant:"success"}},[t._v("Voucher Aktif")])],1):r("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Aktifkan kode voucher ini?"},on:{click:function(r){return t.statusVoucher(e.item.id)}}},[r("b-badge",{attrs:{variant:"dark"}},[t._v("Tidak Aktif")])],1)])]}}])})]},proxy:!0}])})],1)],1)]},proxy:!0}])})],1)],1)],1)},a=[],o=(r("4de4"),r("d3b7"),r("bcae")),i=r("716b"),c=r("a5a4"),u={name:"SettingPromoVoc",components:{Money:i["Money"]},mounted:function(){o["d"].index()},computed:{},data:function(){return{money:{thousands:".",precision:0,masked:!1},voc:{code:"",discount_type:"",type_value:"nominal",value:0,start:"",end:""},tblVoucher:[{key:"no",label:"No."},{key:"code",label:"Kode Voucher"},{key:"type",label:"Tipe Voucher"},{key:"type_discount",label:"Tipe Diskon"},{key:"value",label:"Nominal"},{key:"date",label:"Mulai-Berakhir"},{key:"active",label:"Status"}],totalRows:"",currentPage:1,perPage:10,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[]}},methods:{getVoucherList:function(t){var e=this;o["d"].custLoader(!0);var r=(t.currentPage-1)*t.perPage;1===t.currentPage&&(r=0);var n=t.filter;return null!==n&&void 0!==n||(n=""),c["a"].material.getVoucher(r,t.perPage,n).then((function(t){var r=t.data;if(200===t.status){e.totalRows=r._meta.total;var n=r.data;return n||[]}t.data.errors.length>0&&e.$refs.form.setErrors(t.data.errors)})).catch((function(){o["d"].showSnackbar("error","Maaf, terjadi kesalahan pada sistem.")})).finally((function(){o["d"].custLoader(!1)}))},sendVoucher:function(t){var e=this;t.preventDefault(),o["d"].custLoader(!0),c["a"].material.setVoucher(this.voc).then((function(t){200===t.status&&(o["d"].showSnackbar("success","Voucher berhasil di buat."),e.$refs.dTable.refresh())})).catch((function(){o["d"].showSnackbar("error","Maaf, terjadi kesalahan pada sistem.")})).finally((function(){o["d"].custLoader(!1)}))},statusVoucher:function(t){var e=this;o["d"].custLoader(!0),c["a"].material.statusVoucher(t).then((function(t){200===t.status&&(o["d"].showSnackbar("success","Status berhasil di ubah"),e.$refs.dTable.refresh())})).catch((function(){o["d"].showSnackbar("error","Maaf, terjadi kesalahan pada sistem.")})).finally((function(){o["d"].custLoader(!1)}))}}},s=u,l=(r("1bda"),r("2877")),f=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=f.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=V(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",v="completed",h={};function m(){}function g(){}function y(){}var b={};b[o]=function(){return this};var P=Object.getPrototypeOf,_=P&&P(P(H([])));_&&_!==r&&n.call(_,o)&&(b=_);var k=y.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function V(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return S()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=M(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:d,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}function M(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,M(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function H(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=k.constructor=y,y.constructor=g,g.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},x(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(k),u(k,c,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=H,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:H(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},a5a4:function(t,e,r){"use strict";r("99af");var n=r("dde5"),a=r("358c");e["a"]={material:{add:function(t){return n["a"].post("/vendor/material",t)},addPHP:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/add"),t)},edit:function(t,e){return n["a"].put("/vendor/material/".concat(t),e)},editPHP:function(t,e){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/update/").concat(t),e)},delete:function(t){return n["a"].delete("/vendor/material/".concat(t))},deletePHP:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/delete/").concat(t))},get:function(t,e){return n["a"].get("/vendor/material?skip=".concat(t,"&limit=").concat(e))},getList:function(t,e,r,o,i){var c="";return""!==r&&(c+="&name_material_vendor=".concat(r)),""===o&&void 0===o||(c+="&material_id_vendor=".concat(o)),""===i&&void 0===i||(c+="&filter_etalase=".concat(i)),n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/list?skip=").concat(t,"&limit=").concat(e).concat(c))},getListPHP:function(t,e){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/list?skip=").concat(t,"&limit=").concat(e))},getRatingMaterial:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/ratting/").concat(t))},getRatingMax:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/ratting_list/max/").concat(t))},getRatingAvg:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/ratting_list/avg/").concat(t))},getRatingMin:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/ratting_list/min/").concat(t))},getMaster:function(t){return n["a"].get("/master-material?filter_name=".concat(t))},getMasterMatPHP:function(){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/master"))},getMasterPHP:function(t){var e="";return""!==t&&(e+="material_name=".concat(t)),n["a"].get("".concat(a["a"].urlAPIPHP,"/get_material?").concat(e))},getMaterialDaerah:function(t,e,r,o,i){return n["a"].get("".concat(a["a"].urlAPIPHP,"/get_material_daerah?skip=").concat(t,"&limit=").concat(e,"&idmat=").concat(r,"&idprov=").concat(o,"&idkab=").concat(i))},getDetail:function(t){return n["a"].get("/vendor/material?filter_mid=".concat(t))},getCategorybyType:function(t){return n["a"].get("/category/".concat(t))},addPrice:function(t){return n["a"].post("/vendor/material/price",t)},addPriceVP:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/discount"),t)},getDiscount:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/discount/").concat(t))},toggleVP:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/toggle_discount/").concat(t))},getAllPrice:function(){return n["a"].get("/vendor/material/price")},getPriceByID:function(t){return n["a"].get("/vendor/material/price/".concat(t))},deletePrice:function(t){return n["a"].delete("/vendor/material/price/".concat(t))},updatePrice:function(t,e){return n["a"].put("/vendor/material/price/".concat(t),e)},uploadImage:function(t){return Object(n["a"])({method:"post",url:"/vendor/material/image",data:t,headers:{"content-type":"multipart/form-data; boundary=".concat(t._boundary)}})},importStock:function(t){return n["a"].put("vendor/material/bulk",t)},importMaterial:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/MasterAct/import"),t)},importStockPHP:function(t){return n["a"].put("".concat(a["a"].urlAPIPHP,"/import_stock"),t)},addStock:function(t){return n["a"].put("vendor/material",t)},addStockFuture:function(t,e){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/stock_future/").concat(t),e)},updateStock:function(t){return n["a"].put("vendor/material",t)},toggleStatus:function(t){return n["a"].put("vendor/material/status",t)},toggleStatusPHP:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/status/").concat(t))},getDPGlobal:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/dp_global/").concat(t))},setDPGlobal:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/set_dp_global"),t)},setDPMaterial:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/set_dp_material"),t)},getCompetitor:function(t,e,r,o){return n["a"].get("".concat(a["a"].urlAPIPHP,"/get_competitor?id_vendor=").concat(t,"&filter_zona=").concat(e,"&filter_kab=").concat(r,"&filter_prov=").concat(o))},addOngkirMaterial:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Material/set_material_info"),t)},getOngkirMaterial:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Material/get_material_info/").concat(t))},postPenawaran:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/in_penawaran"),t)},setVoucher:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Discounts/voucher"),t)},getVoucher:function(t,e,r){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Discounts/list?limit=").concat(e,"&skip=").concat(t,"&filter_code=").concat(r))},statusVoucher:function(t){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Discounts/toggle/").concat(t))},getExportMaterial:function(){return n["a"].get("".concat(a["a"].urlAPIPHP,"/MasterAct/export_data_material"))},getMerkMaster:function(t,e,r){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Master/Category/list?type=").concat(r,"&limit=").concat(e,"&skip=").concat(t,"&status=1"))},getEtalase:function(){return n["a"].get("".concat(a["a"].urlAPIPHP,"/Vendor/Etalase/list"))},addEtalase:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Etalase/set"),t)},addMtrlEtalase:function(t,e){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Etalase/relation/").concat(t),e)},reorderEtalase:function(t){return n["a"].post("".concat(a["a"].urlAPIPHP,"/Vendor/Etalase/set"),t)}}}},dde5:function(t,e,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("d3b7"),r("bc3a")),o=r.n(a),i=r("358c"),c=function(){var t;function e(){return t||(t=this,t)}function r(t){localStorage.setItem("access_token",t.access_token),localStorage.setItem("refresh_token",t.refresh_token)}function n(){return localStorage.getItem("access_token")}function a(){return localStorage.getItem("refresh_token")}function o(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}return{getService:e,setToken:r,getAccessToken:n,getRefreshToken:a,clearToken:o}}(),u=c,s=u.getService(),l=i["a"].urlAPI+i["a"].verAPI,f=o.a.create({baseURL:l});f.interceptors.request.use((function(t){var e=s.getAccessToken();return e&&(t.headers["Authorization"]="Bearer "+e),t}),(function(t){Promise.reject(t)})),f.interceptors.response.use((function(t){return t}),function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.config,401!==e.response.status||r.url!==l+"/auth/anonymous"){t.next=4;break}return this.$router.push("/auth/sign-in1"),t.abrupt("return",Promise.reject(e));case 4:if(401!==e.response.status||r._retry){t.next=14;break}return r._retry=!0,n=s.getRefreshToken(),t.next=9,o.a.get(l+"/auth/anonymous",{refresh_token:n});case 9:if(a=t.sent,200!==a.status){t.next=14;break}return s.setToken(a.data.header["x-token"]),o.a.defaults.headers.common["Authorization"]="Bearer "+s.getAccessToken(),t.abrupt("return",o()(r));case 14:return t.abrupt("return",Promise.reject(e));case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}());e["a"]=f}}]);
//# sourceMappingURL=chunk-6cef544b.5cd356b0.js.map
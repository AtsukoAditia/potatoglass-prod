(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0902429a"],{"59b0":function(t,e,r){"use strict";r("c9fd")},c9fd:function(t,e,r){},cf4e:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[r("h4",{staticClass:"card-title"},[t._v("Daftar Material")])]},proxy:!0},{key:"headerAction",fn:function(){},proxy:!0},{key:"body",fn:function(){return[r("b-table",{ref:"dTable",attrs:{"show-empty":"",stacked:"md",items:t.getDataList,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"cell(no)",fn:function(e){return[r("span",{attrs:{"v-for":e}},[t._v(" "+t._s((t.currentPage-1)*t.perPage+(e.index+1))+" ")])]}},{key:"cell(photo_toko)",fn:function(e){return[r("a",{attrs:{href:t.assetUrl+"vendor/"+e.item.photo_toko,target:"_blank"}},[r("b-img",{staticClass:"imgTBL",attrs:{src:t.assetUrl+"vendor/"+e.item.photo_toko},on:{error:t.imgError}})],1)]}},{key:"cell(harga)",fn:function(e){return[r("span",[t._v("Rp "+t._s(t.separatorNum(e.item.harga)))])]}},{key:"cell(kota)",fn:function(e){return[r("span",[t._v(t._s(e.item.kota)+", "+t._s(e.item.provinsi))])]}}])}),r("b-col",{staticClass:"my-1",attrs:{sm:"12",md:"6"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]},proxy:!0}])})],1)],1)],1)},n=[],o=(r("4de4"),r("d3b7"),r("fb6a"),r("a15b"),r("ac1f"),r("5319"),r("25f0"),r("bcae")),s=r("22dc"),i={name:"MaterialVendor",mounted:function(){o["d"].index()},data:function(){return{fields:[{key:"no",label:"No.",sortable:!0,sortDirection:"asc"},{key:"photo_toko",label:"Foto Toko"},{key:"vendor_name",label:"Vendor"},{key:"harga",label:"Harga Material"},{key:"kota",label:"Kota"}],assetUrl:o["e"],totalRows:"",currentPage:1,perPage:10,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[]}},computed:{},components:{},beforeMount:function(){},methods:{getDataList:function(t){var e=this,r=(t.currentPage-1)*t.perPage;1===t.currentPage&&(r=0);var a=t.filter;return null===a&&(a=""),s["a"].report.materialVendor(this.$route.params.id,r,t.perPage).then((function(t){var r=t.data;if(200===t.status){e.totalRows=r._metadata.total;var a=r.result;return a||[]}t.data.errors.length>0&&e.$refs.form.setErrors(t.data.errors)})).finally((function(){e.loading=!1}))},handleFileUpload:function(){this.file=this.$refs.file.files[0]},imgError:function(t){t.target.src=o["c"]},capitalFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},joinArr:function(t){return t.join(",")},separatorNum:function(t){return"undefined"===typeof t||null===t||"null"===t?null:(t=parseFloat(t),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))}}},l=i,c=(r("59b0"),r("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0902429a.0991d9da.js.map
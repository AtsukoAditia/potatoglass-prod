(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-157681d8"],{2998:function(t,e,a){"use strict";a("f0b0")},b63b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{md:"12",sm:"12"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){},proxy:!0},{key:"body",fn:function(){return[a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"6"}},[a("label",{attrs:{for:"searchInput"}},[t._v("Pencarian")]),a("b-form-input",{attrs:{id:"searchInput",type:"search",size:"md",placeholder:"Ketik disini untuk mencari..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),a("b-col",{staticClass:"my-1 float-right",attrs:{md:"6"}},[a("label",{attrs:{for:"searchInput"}},[t._v("Filter")]),a("div",{staticClass:"d-block"},[a("b-button",{staticClass:"mr-1",attrs:{variant:"primary"},on:{click:function(e){return t.filterTrans(0)}}},[t._v("Semua")]),a("b-button",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:function(e){return t.filterTrans(1)}}},[t._v("Trans. Sendiri")]),a("b-button",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:function(e){return t.filterTrans(2)}}},[t._v("Trans. Gabungan")])],1)])],1),a("br"),a("b-table",{ref:"dTable",attrs:{items:t.getTransactionList,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(no)",fn:function(e){return[a("span",{attrs:{"v-for":e}},[t._v(" "+t._s((t.currentPage-1)*t.perPage+(e.index+1))+" ")])]}},{key:"cell(sub_total)",fn:function(e){return[t._v(" Rp "+t._s(t.separatorNum(e.item.sub_total))+" ")]}},{key:"cell(jumlah_item)",fn:function(e){return[t._v(" "+t._s(t.separatorNum(e.item.jumlah_item))+" ")]}},{key:"cell(order_time)",fn:function(e){return[t._v(" "+t._s(t._f("moment")(e.item.order_time))+" ")]}},{key:"cell(delivery_time)",fn:function(e){return[t._v(" "+t._s(t._f("moment")(e.item.delivery_time))+" ")]}},{key:"cell(note)",fn:function(e){return[a("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(a){return t.noteOrder(e.item,e.index,a.target)}}},[t._v(" Lihat ")])]}},{key:"cell(status_item_vendor)",fn:function(e){return[1==e.item.status_item_vendor?a("b-badge",{attrs:{variant:"warning"}},[t._v("Pesanan Masuk")]):t._e(),2==e.item.status_item_vendor?a("b-badge",{attrs:{variant:"primary"}},[t._v("Pesanan Diterima")]):t._e(),9==e.item.status_item_vendor?a("b-badge",{attrs:{variant:"info"}},[t._v("Pesanan Dalam Perjalanan")]):t._e(),10==e.item.status_item_vendor?a("b-badge",{attrs:{variant:"success"}},[t._v("Pesanan Berhasil")]):t._e(),11==e.item.status_item_vendor?a("b-badge",{attrs:{variant:"danger"}},[t._v("Pesanan Ditolak Vendor")]):t._e(),11==e.item.status_item_vendor?a("b-badge",{attrs:{variant:"secondary"}},[t._v("Pesanan Dibatalkan User")]):t._e()]}},{key:"cell(actions)",fn:function(t){return[a("router-link",{attrs:{to:{name:"booking.detail",params:{id:t.item.unique_order_item}}}},[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",value:"Lihat detail pesanan",expression:"'Lihat detail pesanan'",modifiers:{top:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"info"}},[a("div",{staticClass:"icon",attrs:{"data-icon":""}})])],1)]}}])}),a("b-col",{staticClass:"my-1",attrs:{sm:"12",md:"6"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]},proxy:!0}])})],1)],1),a("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetNoteOrder}},[a("div",{staticClass:"text-dark",domProps:{innerHTML:t._s(t.infoModal.content)}})])],1)},r=[],i=(a("d81d"),a("4de4"),a("d3b7"),a("ac1f"),a("5319"),a("25f0"),a("bcae")),s=a("b46c"),o=a("c1df"),l=a.n(o),c={name:"BookingHistory",props:{toMaterialAdd:{type:Object,default:function(){return{name:"material.addmaterial"}}}},mounted:function(){i["d"].index()},data:function(){return{fields:[{key:"no",label:"No.",sortable:!0,sortDirection:"asc"},{key:"material_name",label:"Nama Material"},{key:"customer_name",label:"Pembeli"},{key:"vendor_name",label:"Nama Vendor"},{key:"jumlah_item",label:"Qty"},{key:"sub_total",label:"Sub Total"},{key:"order_time",label:"Waktu Pesanan"},{key:"delivery_time",label:"Waktu Pengiriman"},{key:"note",label:"Catatan"},{key:"status_item_vendor",label:"Status"},{key:"actions",label:"Aksi"}],totalRows:"",currentPage:1,perPage:10,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""}}},filters:{moment:function(t){return l()(t).format("D MMMM YYYY")}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},methods:{getTransactionList:function(t){var e=this,a=(t.currentPage-1)*t.perPage;1===t.currentPage&&(a=0);var n=t.filter;return null===n&&(n=""),s["a"].order.getList(a,t.perPage,10).then((function(t){if(t.status){e.totalRows=t.data._metadata.total;var a=t.data.result;return a||[]}t.data.errors.length>0&&e.$refs.form.setErrors(t.data.errors)})).finally((function(){e.loading=!1}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},noteOrder:function(t,e,a){this.infoModal.title="Detail Catatan Pesanan",this.infoModal.content='<p>Catatan Pesanan: <span class="font-weight-bold">'+t.note_order+'</span><br>Catatan Pengiriman: <span class="font-weight-bold">'+t.note_delivery+"</span></p>",this.$root.$emit("bv::show::modal",this.infoModal.id,a)},resetNoteOrder:function(){this.infoModal.title="",this.infoModal.content=""},accOrder:function(t){var e=this,a=confirm("Terima order dari "+t.customer_name+"?");a&&s["a"].order.accept(t.unique_order_item).then((function(t){t.status&&(i["d"].showSnackbar("success","Order telah diterima."),e.$refs.dTable.refresh())})).finally((function(){e.loading=!1}))},rejectOrder:function(t){var e=this,a=confirm("Tolak order dengan ID "+t.customer_name+"?");a&&s["a"].order.reject(t.unique_order_item).then((function(t){t.status&&(i["d"].showSnackbar("success","Order telah ditolak."),e.$refs.dTable.refresh())})).finally((function(){e.loading=!1}))},separatorNum:function(t){return"undefined"===typeof t||null===t||"null"===t?null:(t=parseFloat(t),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))}}},u=c,d=(a("2998"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=f.exports},f0b0:function(t,e,a){}}]);
//# sourceMappingURL=chunk-157681d8.c4472e96.js.map
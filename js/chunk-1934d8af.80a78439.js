(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1934d8af"],{"3c0f":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{md:"12",sm:"12"}},[e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("List Material")])]},proxy:!0},{key:"body",fn:function(){return[e("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,filterIncludedFields:t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(a){t.sortBy=a},"update:sort-by":function(a){t.sortBy=a},"update:sortDesc":function(a){t.sortDesc=a},"update:sort-desc":function(a){t.sortDesc=a},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(status)",fn:function(a){return[e("div",[e("span",[t._v("Tampil : ")]),1==a.item.status["tampil"]?e("b-badge",{attrs:{variant:"success"}},[t._v("Ya")]):e("b-badge",{attrs:{variant:"dark"}},[t._v("Tidak")])],1),e("div",[e("span",[t._v("Gabungan : ")]),1==a.item.status["gabungan"]?e("b-badge",{attrs:{variant:"success"}},[t._v("Ya")]):e("b-badge",{attrs:{variant:"dark"}},[t._v("Tidak")])],1)]}},{key:"cell(actions)",fn:function(a){return[e("router-link",{attrs:{to:"wishlist/"+a.item["id"]}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",value:"Lihat Detail",expression:"'Lihat Detail'",modifiers:{top:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"info"}},[e("div",{staticClass:"icon",attrs:{"data-icon":""}})])],1),e("b-modal",{attrs:{id:"modalPenawaran",centered:"",title:"Form Penawaran Khusus","ok-title":"Kirim","cancel-title":"Batal",size:"xl"}},[e("b-container",[e("b-row",{staticClass:"mb-3"},[e("b-col",{attrs:{md:"4"}},[e("div",{staticClass:"d-block text-dark"},[t._v("Penawaran Invoice Nomor : ")])]),e("b-col",{staticClass:"mb-2",attrs:{md:"8"}},[e("b-form-input",{attrs:{type:"text",placeholder:"-",size:"sm"},model:{value:t.penawaranModal.invoiceNo,callback:function(a){t.$set(t.penawaranModal,"invoiceNo",a)},expression:"penawaranModal.invoiceNo"}})],1),e("b-col",{attrs:{md:"4"}},[e("div",{staticClass:"d-block text-dark"},[t._v("Kepada : ")])]),e("b-col",{staticClass:"mb-2",attrs:{md:"8"}},[e("b-form-input",{attrs:{type:"text",placeholder:"-",size:"sm"},model:{value:t.penawaranModal.invoiceTo,callback:function(a){t.$set(t.penawaranModal,"invoiceTo",a)},expression:"penawaranModal.invoiceTo"}})],1),e("b-col",{attrs:{md:"4"}},[e("div",{staticClass:"d-block text-dark"},[t._v("ID Proyek : ")])]),e("b-col",{staticClass:"mb-2",attrs:{md:"8"}},[e("b-form-input",{attrs:{type:"text",placeholder:"-",size:"sm"},model:{value:t.penawaranModal.proyekID,callback:function(a){t.$set(t.penawaranModal,"proyekID",a)},expression:"penawaranModal.proyekID"}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"12"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[e("thead",{staticClass:"bg-light"},[e("tr",{staticClass:"font-weight-bold"},[e("td",[t._v("Material")]),e("td",[t._v("Harga")]),e("td",[t._v("Diskon")]),e("td",[t._v("Harga Akhir/Unit")]),e("td",[t._v("Stock Ready")]),e("td",{staticStyle:{width:"105px"}},[t._v("-")])])]),e("tbody",[t._l(t.inputPenawaran,(function(a,n){return e("tr",{key:n,staticClass:"trtdMid"},[e("td",[e("div",{staticClass:"mlt-limitWidth"},[e("multiselect",{attrs:{options:t.materialSel,"close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:"Pilih material...",label:"name","track-by":"name","hide-selected":!0,"preselect-first":!0},model:{value:a.material,callback:function(e){t.$set(a,"material",e)},expression:"input.material"}})],1)]),e("td",[t._v("Rp 50.000")]),e("td",[e("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[e("b-input-group-text",[e("strong",[t._v("%")])])]},proxy:!0}],null,!0)},[e("b-form-input",{staticClass:"inputPercentModal bg-white",model:{value:a.diskon,callback:function(e){t.$set(a,"diskon",e)},expression:"input.diskon"}})],1)],1),e("td",[t._v("Rp 42.500")]),e("td",[t._v("1.212")]),e("td",[t.inputPenawaran.length>1?e("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.removeOffer(n)}}},[t._v("Hapus")]):t._e()],1)])})),e("tr",[e("td",{attrs:{colspan:"5"}}),e("td",[e("b-button",{staticClass:"float-right",attrs:{variant:"success"},on:{click:t.addOffer}},[t._v("Tambah")])],1)])],2)])])])],1),e("b-row",{staticClass:"mb-3"},[e("b-col",{attrs:{md:"4"}},[e("div",{staticClass:"d-block text-dark"},[t._v("Biaya Pengiriman : ")])]),e("b-col",{staticClass:"mb-2",attrs:{md:"8"}},[e("b-form-input",{attrs:{type:"text",placeholder:"-",size:"sm"},model:{value:t.penawaranModal.biaya_pengiriman,callback:function(a){t.$set(t.penawaranModal,"biaya_pengiriman",a)},expression:"penawaranModal.biaya_pengiriman"}})],1),e("b-col",{attrs:{md:"4"}},[e("div",{staticClass:"d-block text-dark"},[t._v("Syarat Harga : ")])]),e("b-col",{staticClass:"mb-2",attrs:{md:"8"}},[e("b-form-input",{attrs:{type:"text",placeholder:"-",size:"sm"},model:{value:t.penawaranModal.syarat_harga,callback:function(a){t.$set(t.penawaranModal,"syarat_harga",a)},expression:"penawaranModal.syarat_harga"}})],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless"},[e("thead",[e("tr",[e("td",[t._v("Pembayaran Termin")]),e("td",[t._v("Offer")]),e("td",[t._v("-")])])]),e("tbody",[e("tr",[e("td",[t._v("DP")]),e("td",[e("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[e("b-input-group-text",[e("strong",[t._v("%")])])]},proxy:!0}],null,!0)},[e("b-form-input",{staticClass:"inputPercentModal bg-white",model:{value:t.termin.dp,callback:function(a){t.$set(t.termin,"dp",a)},expression:"termin.dp"}})],1)],1),e("td")]),t._l(t.termin,(function(a,n){return e("tr",{key:n,staticClass:"trtdMid"},[e("td",[t._v(" Termin "+t._s(n+1)+" ")]),e("td",[e("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[e("b-input-group-text",[e("strong",[t._v("%")])])]},proxy:!0}],null,!0)},[e("b-form-input",{staticClass:"inputPercentModal bg-white",model:{value:a.diskon,callback:function(e){t.$set(a,"diskon",e)},expression:"input.diskon"}})],1)],1),e("td",[t.termin.length>1?e("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.removeTermin(n)}}},[t._v("Hapus")]):t._e()],1)])})),e("tr",[e("td",{attrs:{colspan:"2"}}),e("td",[e("b-button",{staticClass:"float-right",attrs:{variant:"success"},on:{click:t.addTermin}},[t._v("Tambah Termin")])],1)])],2)])])])],1)],1)],1)]}}])}),e("b-col",{staticClass:"my-1",attrs:{sm:"12",md:"6"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)]},proxy:!0}])})],1)],1)],1)},i=[],s=(e("d81d"),e("4de4"),e("a434"),e("bcae")),r={name:"Wishlist",props:{toMaterialAdd:{type:Object,default:function(){return{name:"material.addmaterial"}}}},mounted:function(){s["d"].index(),this.totalRows=this.items.length},data:function(){return{items:[{no:"1",id:"12",client_id:"#3338123",client:"Indorama University",pool:"Jakarta - 35Km",material:"Baja wf, Atap Genteng Baja, Ceker ayam, ...",date:"21/Sep/2020"}],fields:[{key:"no",label:"No.",sortable:!0,sortDirection:"asc"},{key:"client_id",label:"Client ID"},{key:"client",label:"Client / Kontraktor"},{key:"pool",label:"Pool (jarak)"},{key:"material",label:"Material"},{key:"date",label:"Tanggal"},{key:"actions",label:"Aksi"}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],penawaranModal:{invoiceNo:"",invoiceTo:"",proyekID:"",syarat_harga:"",biaya_pengiriman:""},inputPenawaran:[{material:"",id:"",harga:"",diskon:"",harga_akhir:"",stock:"",penawaran:""}],termin:[{dp:"",diskon:""}],infoModal:{id:"info-modal",title:"",content:""},materialSel:[{id:"001",name:"baja siku"},{id:"002",name:"baja canal c"},{id:"003",name:"baja wf"},{id:"004",name:"baja hb"},{id:"005",name:"baja c channel (gording)"},{id:"006",name:"ankur baja 12 -19 mm"},{id:"007",name:"baja cnp 200/80/7.5 untuk tangga"},{id:"008",name:"plat baja 6 - 12 mm"},{id:"009",name:"besi beton 6 mm - 25-ss"},{id:"010",name:"besi beton 6 mm - 20-ss"},{id:"011",name:"besi beton 8 mm - 25-ss"},{id:"012",name:"besi beton 8 mm - 20-ss"},{id:"013",name:"besi beton 8mm - 15-ss"},{id:"014",name:"besi beton 10 mm - 20-ss"},{id:"015",name:"besi beton 10 mm - 15-ss"},{id:"016",name:"besi beton 10mm - 10-ss"},{id:"017",name:"besi beton 8 mm - 20 / 8mm -16"},{id:"018",name:"besi beton 8mm - 20 / 10mm - 20"},{id:"019",name:"besi beton 8mm - 20 / 10mm - 15"},{id:"020",name:"besi beton 10mm - 20 / 10 mm - 16"},{id:"021",name:"besi beton 12mm - 15-ss"},{id:"022",name:"besi beton 4 dia 13"},{id:"023",name:"besi ulir d 17"}]}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},methods:{addOffer:function(){this.inputPenawaran.push({material:"",id:"",harga:"",diskon:"",harga_akhir:"",stock:"",penawaran:""})},removeOffer:function(t){this.inputPenawaran.splice(t,1)},addTermin:function(){this.termin.push({diskon:""})},removeTermin:function(t){this.termin.splice(t,1)},info:function(t,a,e){this.infoModal.title="Row index: ".concat(a),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,e)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},o=r,l=(e("6b79"),e("2877")),d=Object(l["a"])(o,n,i,!1,null,null,null);a["default"]=d.exports},4534:function(t,a,e){},"6b79":function(t,a,e){"use strict";e("4534")}}]);
//# sourceMappingURL=chunk-1934d8af.80a78439.js.map
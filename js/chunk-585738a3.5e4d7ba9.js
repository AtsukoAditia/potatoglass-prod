(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585738a3"],{"20be":function(a,t,e){},6787:function(a,t,e){"use strict";e("20be")},ae89:function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{md:"12",sm:"12"}},[e("iq-card",{scopedSlots:a._u([{key:"body",fn:function(){return[e("tab-nav",{staticClass:"nav-fill mb-3",attrs:{pills:!0,id:"pills-tab-1"}},[e("tab-nav-items",{attrs:{active:!0,id:"pills-vendor-tab-fill",href:"#pills-vendor-fill",ariaControls:"pills-vendor-fill",role:"tab",ariaSelected:!0,title:"Per Vendor"}}),e("tab-nav-items",{attrs:{active:!1,id:"pills-material-tab-fill",href:"#pills-material-fill",ariaControls:"pills-material-fill",role:"tab",ariaSelected:!1,title:"Per Material"}}),e("tab-nav-items",{attrs:{active:!1,id:"pills-proyek-tab-fill",href:"#pills-proyek-fill",ariaControls:"pills-proyek-fill",role:"tab",ariaSelected:!1,title:"Per Proyek"}}),e("tab-nav-items",{attrs:{active:!1,id:"pills-dimensi-tab-fill",href:"#pills-dimensi-fill",ariaControls:"pills-dimensi-fill",role:"tab",ariaSelected:!1,title:"Per Dimensi Material"}}),e("tab-nav-items",{attrs:{active:!1,id:"pills-transport-tab-fill",href:"#pills-transport-fill",ariaControls:"pills-transport-fill",role:"tab",ariaSelected:!1,title:"Per Transport"}})],1),e("tab-content",{staticClass:"mt-0",attrs:{id:"pills-tabContent-1"}},[e("tab-content-item",{attrs:{active:!0,id:"pills-vendor-fill","aria-labelled-by":"pills-vendor-tab-fill"}},[e("byVendor")],1),e("tab-content-item",{attrs:{active:!1,id:"pills-material-fill","aria-labelled-by":"pills-material-tab-fill"}},[e("byMaterial")],1),e("tab-content-item",{attrs:{active:!1,id:"pills-proyek-fill","aria-labelled-by":"pills-proyek-tab-fill"}},[e("byProject")],1),e("tab-content-item",{attrs:{active:!1,id:"pills-dimensi-fill","aria-labelled-by":"pills-dimensi-tab-fill"}},[e("byMaterialDimension")],1),e("tab-content-item",{attrs:{active:!1,id:"pills-transport-fill","aria-labelled-by":"pills-transport-tab-fill"}},[e("byTransport")],1)],1)]},proxy:!0}])})],1)],1)],1)},r=[],s=e("bcae"),d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",{staticClass:"mb-2"},[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{"label-for":"selCodeMaterial",label:"Pilih kode material:"}},[e("multiselect",{attrs:{options:a.kmaterialSel,"custom-label":a.idWithName,placeholder:"Pilih salah satu",label:"nama","track-by":"nama",id:"selCodeMaterial"},model:{value:a.vendor.material,callback:function(t){a.$set(a.vendor,"material",t)},expression:"vendor.material"}})],1)],1)],1),""!=a.vendor.material?e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Kategori di RAB")]),e("td",[a._v(": Material Penunjang")])]),e("tr",[e("td",[a._v("Fungsi Material")]),e("td",[a._v(": Element Utama")])]),e("tr",[e("td",[a._v("Kategori Bahan")]),e("td",[a._v(": Pasangan")])])])])]),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Pasangan di Bidang")]),e("td",[a._v(": Baja Struktur")])]),e("tr",[e("td",[a._v("Bahan Utama")]),e("td",[a._v(": Besi / Baja")])]),e("tr",[e("td",[a._v("Harga")]),e("td",[a._v(": Rp 100.000")])])])])]),e("hr"),e("b-col",{attrs:{md:"12"}},[e("b-table",{staticClass:"table-responsive",attrs:{responsive:"",striped:"",hover:"",fixed:"","show-empty":"",stacked:"lg",items:a.items,fields:a.fields},scopedSlots:a._u([{key:"cell(dat6)",fn:function(t){return[e("strong",[a._v(a._s(t.item.dat6))])]}},{key:"custom-foot",fn:function(){return[e("tr",[e("td",{staticStyle:{background:"rgb(236 236 236)"},attrs:{colspan:9}},[e("b",[a._v("Grand Total")])]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")])])]},proxy:!0}],null,!1,2075747998)})],1)],1):a._e()],1)},n=[],i=(e("99af"),{name:"byMaterial",data:function(){return{kmaterialSel:[{id:1,nama:"baja canal c"},{id:2,nama:"baja c channel (gording)"},{id:3,nama:"ankur baja 12 -19 mm"},{id:4,nama:"atap baja ringan"}],vendor:{material:""},trans:{vcode:""},fields:[{key:"dat1",label:"status pengambilan barang vendor"},{key:"dat2",label:"JM bs lewat di lokasi prj"},{key:"dat3",label:"kode pembayaran"},{key:"dat4",label:"kode order tgl kirim"},{key:"dat5",label:"nama perusahan project"},{key:"dat6",label:"Nama Material"},{key:"dat7",label:"volume belanja"},{key:"dat8",label:"satuan"},{key:"dat9",label:"harga satuan"},{key:"dat10",label:"total belanja perjenis"},{key:"dat11",label:"discount prestasi total sales"},{key:"dat12",label:"standar jasa transport per billing 5%"},{key:"dat13",label:"% discount transport gabungan menjadi :"},{key:"dat14",label:"jasa transport perjenis"},{key:"dat15",label:"total sales perjenis setelah discount "}],items:[{dat1:"1WV>P, 1 wilayah vendor direct to project",dat2:"5.2",dat3:"B/K-P88 tgl: 21/Mar",dat4:"P`88,tgl:26/Mar",dat5:"pt.atta askin",dat6:"Baja Wf",dat7:"41",dat8:"kg",dat9:"16,500",dat10:"676,500",dat11:"0.484375",dat12:"33825",dat13:"0.05",dat14:"17,441",dat15:"348,820"}]}},methods:{idWithName:function(a){var t=a.id,e=a.nama;return"".concat(t," — ").concat(e)}}}),o=i,b=e("2877"),c=Object(b["a"])(o,d,n,!1,null,null,null),m=c.exports,v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",{staticClass:"mb-2"},[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{"label-for":"selCodeMaterial",label:"Pilih kode material:"}},[e("multiselect",{attrs:{options:a.kmaterialSel,"custom-label":a.idWithName,placeholder:"Pilih salah satu",label:"nama","track-by":"nama",id:"selCodeMaterial"},model:{value:a.vendor.material,callback:function(t){a.$set(a.vendor,"material",t)},expression:"vendor.material"}})],1)],1)],1),""!=a.vendor.material?e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Kategori di RAB")]),e("td",[a._v(": Material Penunjang")])]),e("tr",[e("td",[a._v("Fungsi Material")]),e("td",[a._v(": Element Utama")])]),e("tr",[e("td",[a._v("Kategori Bahan")]),e("td",[a._v(": Pasangan")])])])])]),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Pasangan di Bidang")]),e("td",[a._v(": Baja Struktur")])]),e("tr",[e("td",[a._v("Bahan Utama")]),e("td",[a._v(": Besi / Baja")])]),e("tr",[e("td",[a._v("Harga")]),e("td",[a._v(": Rp 100.000")])])])])]),e("hr"),e("b-col",{attrs:{md:"12"}},[e("b-table",{staticClass:"table-responsive",attrs:{responsive:"",striped:"",hover:"",fixed:"","show-empty":"",stacked:"lg",items:a.items,fields:a.fields},scopedSlots:a._u([{key:"cell(dat6)",fn:function(t){return[e("strong",[a._v(a._s(t.item.dat6))])]}},{key:"custom-foot",fn:function(){return[e("tr",[e("td",{staticStyle:{background:"rgb(236 236 236)"},attrs:{colspan:9}},[e("b",[a._v("Grand Total")])]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")])])]},proxy:!0}],null,!1,2075747998)})],1)],1):a._e()],1)},p=[],u={name:"byMaterialDimension",data:function(){return{kmaterialSel:[{id:1,nama:"baja canal c"},{id:2,nama:"baja c channel (gording)"},{id:3,nama:"ankur baja 12 -19 mm"},{id:4,nama:"atap baja ringan"}],vendor:{material:""},trans:{vcode:""},fields:[{key:"dat1",label:"status pengambilan barang vendor"},{key:"dat2",label:"JM bs lewat di lokasi prj"},{key:"dat3",label:"kode pembayaran"},{key:"dat4",label:"kode order tgl kirim"},{key:"dat5",label:"nama perusahan project"},{key:"dat6",label:"Nama Material"},{key:"dat7",label:"volume belanja"},{key:"dat8",label:"satuan"},{key:"dat9",label:"harga satuan"},{key:"dat10",label:"total belanja perjenis"},{key:"dat11",label:"discount prestasi total sales"},{key:"dat12",label:"standar jasa transport per billing 5%"},{key:"dat13",label:"% discount transport gabungan menjadi :"},{key:"dat14",label:"jasa transport perjenis"},{key:"dat15",label:"total sales perjenis setelah discount "}],items:[{dat1:"1WV>P, 1 wilayah vendor direct to project",dat2:"5.2",dat3:"B/K-P88 tgl: 21/Mar",dat4:"P`88,tgl:26/Mar",dat5:"pt.atta askin",dat6:"Baja Wf",dat7:"41",dat8:"kg",dat9:"16,500",dat10:"676,500",dat11:"0.484375",dat12:"33825",dat13:"0.05",dat14:"17,441",dat15:"348,820"}]}},methods:{idWithName:function(a){var t=a.id,e=a.nama;return"".concat(t," — ").concat(e)}}},k=u,y=Object(b["a"])(k,v,p,!1,null,null,null),_=y.exports,f=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",{staticClass:"mb-2"},[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{"label-for":"selCodeVendor",label:"Pilih kode vendor:"}},[e("multiselect",{attrs:{options:a.vendorOption,"custom-label":a.codeWithName,placeholder:"Pilih kode vendor",label:"name","track-by":"name",id:"selCodeVendor"},model:{value:a.vendor.code,callback:function(t){a.$set(a.vendor,"code",t)},expression:"vendor.code"}})],1)],1)],1),""!=a.vendor.code?e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Kode Proyek")]),e("td",[a._v(": #121212")])]),e("tr",[e("td",[a._v("Nama Perusahaan")]),e("td",[a._v(": Pt Indorama Banten")])]),e("tr",[e("td",[a._v("Nama Pembeli")]),e("td",[a._v(": Sony - 089367825643")])]),e("tr",[e("td",[a._v("Alamat Perusahaan")]),e("td",[a._v(": Jl proyek material tanggerang, banten")])]),e("tr",[e("td",[a._v("Nama Penerima")]),e("td",[a._v(": Nyson Mandela - 08124242445")])])])])]),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Total Jumlah Barang")]),e("td",[a._v(": 2323 bgt, 213kg")])]),e("tr",[e("td",[a._v("Total Transaksi")]),e("td",[a._v(": Rp 140.000")])]),e("tr",[e("td",[a._v("Total Diskon")]),e("td",[a._v(": Rp 10.000")])]),e("tr",[e("td",[a._v("Setara Diskon")]),e("td",[a._v(": 1%")])]),e("tr",[e("td",[a._v("Diskon Transportasi")]),e("td",[a._v(": Gratis")])])])])]),e("hr"),e("b-col",{attrs:{md:"12"}},[e("b-table",{staticClass:"table-responsive",attrs:{responsive:"",striped:"",hover:"",fixed:"","show-empty":"",stacked:"lg",items:a.items,fields:a.fields},scopedSlots:a._u([{key:"custom-foot",fn:function(){return[e("tr",[e("td",{staticStyle:{background:"rgb(236 236 236)"},attrs:{colspan:9}},[e("b",[a._v("Grand Total")])]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")])])]},proxy:!0}],null,!1,1167084797)})],1)],1):a._e()],1)},g=[],h=(e("b0c0"),{name:"byProject",data:function(){return{vendorOption:[{code:"01",name:"PT. Vue.js"},{code:"02",name:"CV. Rails"},{code:"03",name:"TB. Sinatra"},{code:"04",name:"RM. Laravel"},{code:"05",name:"Yayasan Phoenix"}],vendor:{code:""},trans:{vcode:""},fields:[{key:"dat1",label:"status pengambilan barang vendor"},{key:"dat2",label:"JM bs lewat di lokasi prj"},{key:"dat3",label:"kode pembayaran"},{key:"dat4",label:"kode order tgl kirim"},{key:"dat5",label:"nama perusahan project"},{key:"dat6",label:"Nama Material"},{key:"dat7",label:"volume belanja"},{key:"dat8",label:"satuan"},{key:"dat9",label:"harga satuan"},{key:"dat10",label:"total belanja perjenis"},{key:"dat11",label:"discount prestasi total sales"},{key:"dat12",label:"standar jasa transport per billing 5%"},{key:"dat13",label:"% discount transport gabungan menjadi :"},{key:"dat14",label:"jasa transport perjenis"},{key:"dat15",label:"total sales perjenis setelah discount "}],items:[{dat1:"1WV>P, 1 wilayah vendor direct to project",dat2:"5.2",dat3:"B/K-P88 tgl: 21/Mar",dat4:"P`88,tgl:26/Mar",dat5:"pt.atta askin",dat6:"kawat las",dat7:"41",dat8:"kg",dat9:"16,500",dat10:"676,500",dat11:"0.484375",dat12:"33825",dat13:"0.05",dat14:"17,441",dat15:"348,820"}]}},methods:{codeWithName:function(a){var t=a.code,e=a.name;return"".concat(t," — ").concat(e)}}}),j=h,P=Object(b["a"])(j,f,g,!1,null,null,null),C=P.exports,M=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",{staticClass:"mb-2"},[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{"label-for":"selCodeMaterial",label:"Pilih kode material:"}},[e("multiselect",{attrs:{options:a.kmaterialSel,"custom-label":a.idWithName,placeholder:"Pilih salah satu",label:"nama","track-by":"nama",id:"selCodeMaterial"},model:{value:a.vendor.material,callback:function(t){a.$set(a.vendor,"material",t)},expression:"vendor.material"}})],1)],1)],1),""!=a.vendor.material?e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Kategori di RAB")]),e("td",[a._v(": Material Penunjang")])]),e("tr",[e("td",[a._v("Fungsi Material")]),e("td",[a._v(": Element Utama")])]),e("tr",[e("td",[a._v("Kategori Bahan")]),e("td",[a._v(": Pasangan")])])])])]),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Pasangan di Bidang")]),e("td",[a._v(": Baja Struktur")])]),e("tr",[e("td",[a._v("Bahan Utama")]),e("td",[a._v(": Besi / Baja")])]),e("tr",[e("td",[a._v("Harga")]),e("td",[a._v(": Rp 100.000")])])])])]),e("hr"),e("b-col",{attrs:{md:"12"}},[e("b-table",{staticClass:"table-responsive",attrs:{responsive:"",striped:"",hover:"",fixed:"","show-empty":"",stacked:"lg",items:a.items,fields:a.fields},scopedSlots:a._u([{key:"cell(dat6)",fn:function(t){return[e("strong",[a._v(a._s(t.item.dat6))])]}},{key:"custom-foot",fn:function(){return[e("tr",[e("td",{staticStyle:{background:"rgb(236 236 236)"},attrs:{colspan:9}},[e("b",[a._v("Grand Total")])]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")])])]},proxy:!0}],null,!1,2075747998)})],1)],1):a._e()],1)},B=[],w={name:"byTransport",data:function(){return{kmaterialSel:[{id:1,nama:"baja canal c"},{id:2,nama:"baja c channel (gording)"},{id:3,nama:"ankur baja 12 -19 mm"},{id:4,nama:"atap baja ringan"}],vendor:{material:""},trans:{vcode:""},fields:[{key:"dat1",label:"status pengambilan barang vendor"},{key:"dat2",label:"JM bs lewat di lokasi prj"},{key:"dat3",label:"kode pembayaran"},{key:"dat4",label:"kode order tgl kirim"},{key:"dat5",label:"nama perusahan project"},{key:"dat6",label:"Nama Material"},{key:"dat7",label:"volume belanja"},{key:"dat8",label:"satuan"},{key:"dat9",label:"harga satuan"},{key:"dat10",label:"total belanja perjenis"},{key:"dat11",label:"discount prestasi total sales"},{key:"dat12",label:"standar jasa transport per billing 5%"},{key:"dat13",label:"% discount transport gabungan menjadi :"},{key:"dat14",label:"jasa transport perjenis"},{key:"dat15",label:"total sales perjenis setelah discount "}],items:[{dat1:"1WV>P, 1 wilayah vendor direct to project",dat2:"5.2",dat3:"B/K-P88 tgl: 21/Mar",dat4:"P`88,tgl:26/Mar",dat5:"pt.atta askin",dat6:"Baja Wf",dat7:"41",dat8:"kg",dat9:"16,500",dat10:"676,500",dat11:"0.484375",dat12:"33825",dat13:"0.05",dat14:"17,441",dat15:"348,820"}]}},methods:{idWithName:function(a){var t=a.id,e=a.nama;return"".concat(t," — ").concat(e)}}},S=w,x=Object(b["a"])(S,M,B,!1,null,null,null),T=x.exports,N=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",{staticClass:"mb-2"},[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{"label-for":"selCodeVendor",label:"Pilih kode vendor:"}},[e("multiselect",{attrs:{options:a.vendorOption,"custom-label":a.codeWithName,placeholder:"Pilih kode vendor",label:"name","track-by":"name",id:"selCodeVendor"},model:{value:a.vendor.code,callback:function(t){a.$set(a.vendor,"code",t)},expression:"vendor.code"}})],1)],1)],1),""!=a.vendor.code?e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Kode Proyek")]),e("td",[a._v(": #121212")])]),e("tr",[e("td",[a._v("Nama Perusahaan")]),e("td",[a._v(": Pt Indorama Banten")])]),e("tr",[e("td",[a._v("Nama Pembeli")]),e("td",[a._v(": Sony - 089367825643")])]),e("tr",[e("td",[a._v("Alamat Perusahaan")]),e("td",[a._v(": Jl proyek material tanggerang, banten")])]),e("tr",[e("td",[a._v("Nama Penerima")]),e("td",[a._v(": Nyson Mandela - 08124242445")])])])])]),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-borderless table-sm"},[e("tr",[e("td",[a._v("Total Jumlah Barang")]),e("td",[a._v(": 2323 bgt, 213kg")])]),e("tr",[e("td",[a._v("Total Transaksi")]),e("td",[a._v(": Rp 140.000")])]),e("tr",[e("td",[a._v("Total Diskon")]),e("td",[a._v(": Rp 10.000")])]),e("tr",[e("td",[a._v("Setara Diskon")]),e("td",[a._v(": 1%")])]),e("tr",[e("td",[a._v("Diskon Transportasi")]),e("td",[a._v(": Gratis")])])])])]),e("hr"),e("b-col",{attrs:{md:"12"}},[e("b-table",{staticClass:"table-responsive",attrs:{responsive:"",striped:"",hover:"",fixed:"","show-empty":"",stacked:"lg",items:a.items,fields:a.fields},scopedSlots:a._u([{key:"cell(dat5)",fn:function(t){return[e("strong",[a._v(a._s(t.item.dat5))])]}},{key:"custom-foot",fn:function(){return[e("tr",[e("td",{staticStyle:{background:"rgb(236 236 236)"},attrs:{colspan:9}},[e("b",[a._v("Grand Total")])]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")]),e("td",[a._v(" - ")])])]},proxy:!0}],null,!1,3758125598)})],1)],1):a._e()],1)},W=[],V={name:"byVendor",data:function(){return{vendorOption:[{code:"01",name:"PT. Vue.js"},{code:"02",name:"CV. Rails"},{code:"03",name:"TB. Sinatra"},{code:"04",name:"RM. Laravel"},{code:"05",name:"Yayasan Phoenix"}],vendor:{code:""},trans:{vcode:""},fields:[{key:"dat1",label:"status pengambilan barang vendor"},{key:"dat2",label:"JM bs lewat di lokasi prj"},{key:"dat3",label:"kode pembayaran"},{key:"dat4",label:"kode order tgl kirim"},{key:"dat5",label:"nama perusahan project"},{key:"dat6",label:"Nama Material"},{key:"dat7",label:"volume belanja"},{key:"dat8",label:"satuan"},{key:"dat9",label:"harga satuan"},{key:"dat10",label:"total belanja perjenis"},{key:"dat11",label:"discount prestasi total sales"},{key:"dat12",label:"standar jasa transport per billing 5%"},{key:"dat13",label:"% discount transport gabungan menjadi :"},{key:"dat14",label:"jasa transport perjenis"},{key:"dat15",label:"total sales perjenis setelah discount "}],items:[{dat1:"1WV>P, 1 wilayah vendor direct to project",dat2:"5.2",dat3:"B/K-P88 tgl: 21/Mar",dat4:"P`88,tgl:26/Mar",dat5:"pt.atta askin",dat6:"kawat las",dat7:"41",dat8:"kg",dat9:"16,500",dat10:"676,500",dat11:"0.484375",dat12:"33825",dat13:"0.05",dat14:"17,441",dat15:"348,820"}]}},methods:{codeWithName:function(a){var t=a.code,e=a.name;return"".concat(t," — ").concat(e)}}},R=V,K=Object(b["a"])(R,N,W,!1,null,null,null),J=K.exports,$={name:"TransaksiSummary",components:{byMaterial:m,byMaterialDimension:_,byProject:C,byTransport:T,byVendor:J},props:{},mounted:function(){s["d"].index()},data:function(){return{}},computed:{},methods:{}},D=$,O=(e("6787"),Object(b["a"])(D,l,r,!1,null,null,null));t["default"]=O.exports}}]);
//# sourceMappingURL=chunk-585738a3.5e4d7ba9.js.map
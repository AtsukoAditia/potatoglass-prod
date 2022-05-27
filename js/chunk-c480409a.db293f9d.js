(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c480409a"],{6460:function(t,a,e){"use strict";e("a127")},"74fb":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{md:"12",sm:"12"}},[e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("List Data Contractor")])]},proxy:!0},{key:"body",fn:function(){return[e("b-row",{staticClass:"mb-2"},[e("b-col",{attrs:{md:"4"}},[e("b-form-group",[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Cari data disini"},model:{value:t.filter,callback:function(a){t.filter=a},expression:"filter"}}),e("b-input-group-append")],1)],1)],1),e("b-col",{staticClass:"md-8"},[e("router-link",{attrs:{to:t.toContractorAdd}},[e("b-button",{staticClass:"float-right",attrs:{variant:"primary"}},[e("i",{staticClass:"ri-bill-fill"}),t._v("Add Contractor")])],1)],1)],1),e("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.getcontractorList,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"cell(no)",fn:function(a){return[e("span",{attrs:{"v-for":a}},[t._v(" "+t._s((t.currentPage-1)*t.perPage+(a.index+1))+" ")])]}},{key:"cell(kota)",fn:function(a){return[t._v(" "+t._s(a.item.kota)+", "+t._s(a.item.provinsi)+" ")]}},{key:"cell(alamat)",fn:function(a){return[t._v(" "+t._s(a.item.alamat)+", "+t._s(a.item.kota)+", "+t._s(a.item.provinsi)+" - "+t._s(a.item.kode_pos)+" ")]}},{key:"cell(email)",fn:function(a){return[e("a",{attrs:{href:"to:"+a.item.email}},[t._v(t._s(a.item.email))])]}},{key:"cell(contact_person)",fn:function(a){return[e("a",{attrs:{href:"tel:"+a.item.phone}},[t._v(t._s(a.item.phone))]),t._v(" - "+t._s(a.item.contact_person)+" ")]}},{key:"cell(website)",fn:function(a){return[e("a",{attrs:{href:"http://"+a.item.website,target:"_blank"}},[t._v(t._s(a.item.website))])]}},{key:"cell(actions)",fn:function(a){return[e("div",{staticClass:"d-flex"},[e("router-link",{attrs:{to:"contractor/"+a.item.id}},[e("b-button",{staticClass:"mr-1",attrs:{type:"button",size:"sm",variant:"success"}},[e("div",{staticClass:"icon",attrs:{"data-icon":""}})])],1),e("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.deleteContractor(a.item.id)}}},[e("div",{staticClass:"icon",attrs:{"data-icon":""}})])],1)]}}])}),e("b-col",{staticClass:"my-1",attrs:{sm:"12",md:"6"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1),e("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[e("pre",[t._v(t._s(t.infoModal.content))])])]},proxy:!0}])})],1)],1)],1)},o=[],n=(e("d81d"),e("4de4"),e("d3b7"),e("bcae")),i=e("22dc"),s={name:"ContractorList",props:{toContractorAdd:{type:Object,default:function(){return{name:"contractor.addcontractor"}}}},mounted:function(){n["d"].index()},data:function(){return{fields:[{key:"no",label:"No.",sortable:!0,sortDirection:"asc"},{key:"nama_perusahaan",label:"Nama Contractor"},{key:"nama_lengkap",label:"Nama Contact Person"},{key:"email",label:"Email"},{key:"no_wa",label:"No. Whatsapp"},{key:"no_wa_dua",label:"No. Whatsapp (2)"},{key:"alamat_lengkap",label:"Alamat"},{key:"kode_pos",label:"Kode Pos"},{key:"website",label:"Website"},{key:"actions",label:"Actions"}],totalRows:"",currentPage:1,perPage:15,pageOptions:[5,10,15],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""}}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},methods:{info:function(t,a,e){this.infoModal.title="Row index: ".concat(a),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,e)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},deleteContractor:function(t){var a=this,e=confirm("Apakah data ini mau dihapus?");e&&i["a"].contractor.deleteContractor(t).then((function(t){t.status?(a.getcontractorList("kosong"),n["d"].showSnackbar("success","Success delete data")):t.data.errors.length>0&&(a.$refs.form.setErrors(t.data.errors),n["d"].showSnackbar("error","Maaf, "+t.data.errors))})).finally((function(){a.loading=!1}))},getDataContractorList:function(){var t=this;i["a"].contractor.getAllContractor(0,5).then((function(a){if(a.status){t.contractorList=a.data.result,t.totalRows=a.data._metadata.total;var e=t.contractorList;return e||[]}a.data.errors.length>0&&t.$refs.form.setErrors(a.data.errors)})).finally((function(){t.loading=!1}))},getcontractorList:function(t){var a=this,e=0,r=this.perPage;return"kosong"===t?(e=0,r=5):(r=t.perPage,e=(t.currentPage-1)*r),1===t.currentPage&&(e=0),i["a"].contractor.getAllContractor(e,r).then((function(t){if(t.status){a.contractorList=t.data.result,a.totalRows=t.data._metadata.total;var e=a.contractorList;return e||[]}t.data.errors.length>0&&a.$refs.form.setErrors(t.data.errors)})).finally((function(){a.loading=!1}))}}},l=s,c=(e("6460"),e("2877")),d=Object(c["a"])(l,r,o,!1,null,null,null);a["default"]=d.exports},a127:function(t,a,e){}}]);
//# sourceMappingURL=chunk-c480409a.db293f9d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c177a"],{"45be":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-container",{attrs:{fluid:""}},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(a){var r=a.handleSubmit;return[t("form",{on:{submit:function(a){return a.preventDefault(),r(e.onSubmit)}}},[t("b-row",[t("b-col",{attrs:{lg:"12"}},[t("iq-card",{attrs:{"body-class":"p-0"},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"iq-edit-list"},[t("tab-nav",{staticClass:"iq-edit-profile d-flex",attrs:{pills:!0}},[t("tab-nav-items",{staticClass:"col-md-6 p-0",attrs:{active:!0,href:"#info-perusahaan",title:"Info Perusahaan"}}),t("tab-nav-items",{staticClass:"col-md-6 p-0",attrs:{active:!1,href:"#lokasi-vendor",title:"Lokasi Vendor"}})],1)],1)]},proxy:!0}],null,!0)})],1),t("b-col",{attrs:{lg:"12"}},[t("div",{staticClass:"iq-edit-list-data"},[t("tab-content",{attrs:{id:"pills-tabContent-2"}},[t("tab-content-item",{attrs:{active:!0,id:"info-perusahaan"}},[t("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[e._v("Info Perusahaan")])]},proxy:!0},{key:"body",fn:function(){return[t("br"),t("b-row",{attrs:{"align-v":"center"}},[t("b-form-group",{staticClass:"col-md-12",attrs:{label:"Nama Vendor","label-for":"nperusahaan"}},[t("ValidationProvider",{attrs:{name:"Nama Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Nama Vendor"},model:{value:e.vendor.vendor_name,callback:function(a){e.$set(e.vendor,"vendor_name",a)},expression:"vendor.vendor_name"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Nama Contact Person Vendor","label-for":"cvendor"}},[t("ValidationProvider",{attrs:{name:"Contact Person Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Contact Person Vendor"},model:{value:e.vendor.contact_person,callback:function(a){e.$set(e.vendor,"contact_person",a)},expression:"vendor.contact_person"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Telpon Vendor","label-for":"tvendor"}},[t("ValidationProvider",{attrs:{name:"Telpon Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"tel",placeholder:"Telpon Vendor"},model:{value:e.vendor.phone,callback:function(a){e.$set(e.vendor,"phone",a)},expression:"vendor.phone"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Email Vendor","label-for":"evendor"}},[t("ValidationProvider",{attrs:{name:"Email Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"email",placeholder:"Email Vendor"},model:{value:e.vendor.email,callback:function(a){e.$set(e.vendor,"email",a)},expression:"vendor.email"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Website Vendor","label-for":"wvendor"}},[t("ValidationProvider",{attrs:{name:"Website Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Website Vendor"},model:{value:e.vendor.website,callback:function(a){e.$set(e.vendor,"website",a)},expression:"vendor.website"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"NPWP Vendor","label-for":"npwpvendor"}},[t("ValidationProvider",{attrs:{name:"NPWP Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"number",placeholder:"NPWP Vendor"},model:{value:e.vendor.npwp_vendor,callback:function(a){e.$set(e.vendor,"npwp_vendor",a)},expression:"vendor.npwp_vendor"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1)],1)]},proxy:!0}],null,!0)})],1),t("tab-content-item",{attrs:{active:!1,id:"lokasi-vendor"}},[t("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[e._v("Lokasi Vendor")])]},proxy:!0},{key:"body",fn:function(){return[t("b-row",{attrs:{"align-v":"center"}},[t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Alamat Vendor","label-for":"alvendor"}},[t("ValidationProvider",{attrs:{name:"Alamat Vendor",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Alamat Vendor"},model:{value:e.vendor.alamat,callback:function(a){e.$set(e.vendor,"alamat",a)},expression:"vendor.alamat"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Kota","label-for":"kotvendor"}},[t("ValidationProvider",{attrs:{name:"Kota",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Kota"},model:{value:e.vendor.kota,callback:function(a){e.$set(e.vendor,"kota",a)},expression:"vendor.kota"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Provinsi","label-for":"kotbagvendor"}},[t("ValidationProvider",{attrs:{name:"Provinsi",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Provinsi"},model:{value:e.vendor.provinsi,callback:function(a){e.$set(e.vendor,"provinsi",a)},expression:"vendor.provinsi"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Kode Pos","label-for":"kodpvendor"}},[t("ValidationProvider",{attrs:{name:"Kode Pos",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"number",placeholder:"Kode Pos"},model:{value:e.vendor.kode_pos,callback:function(a){e.$set(e.vendor,"kode_pos",a)},expression:"vendor.kode_pos"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Latitude","label-for":"lat"}},[t("ValidationProvider",{attrs:{name:"lat",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"-"},model:{value:e.vendor.address_lat,callback:function(a){e.$set(e.vendor,"address_lat",a)},expression:"vendor.address_lat"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1),t("b-form-group",{staticClass:"col-md-6",attrs:{label:"Longitude","label-for":"lng"}},[t("ValidationProvider",{attrs:{name:"Longitude",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("b-form-input",{class:r.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"-"},model:{value:e.vendor.address_long,callback:function(a){e.$set(e.vendor,"address_long",a)},expression:"vendor.address_long"}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(r[0]))])])]}}],null,!0)})],1)],1)]},proxy:!0}],null,!0)})],1)],1)],1)]),t("b-col",{attrs:{lg:"12"}},[[t("div",{staticClass:"iq-edit-list"},[t("b-button",{staticClass:"mb-3 float-right mr-1 btn-lg w-25",attrs:{variant:"primary",type:"submit"}},[t("i",{staticClass:"ri-bill-fill"}),e._v("Ubah Data Vendor")]),t("b-button",{staticClass:"mb-3 float-right mr-1 btn-lg w-25",attrs:{variant:"danger"}},[t("i",{staticClass:"ri-heart-fill"}),e._v("Batalkan")])],1)]],2)],1)],1)]}}])})],1)},n=[],o=t("5530"),s=(t("d3b7"),t("ac1f"),t("5319"),t("bcae")),l=t("22dc"),i=t("2f62"),d={name:"VendorAdd",mounted:function(){s["d"].index(),this.getDataVendor()},firestore:function(){return{}},computed:{},data:function(){return{vendor:{address_lat:"",address_long:"",alamat:"",banner:"/img/user-11.889f2489.png",contact_person:"",email:"",kode_pos:"",kota:"",logo:"/img/user-11.889f2489.png",master_type_id:9,npwp_vendor:"",phone:"",provinsi:"",vendor_name:"",website:""},selectOptionPool:"1",selPool:[{item:"1",name:"Sistem Hitung"},{item:"2",name:"Sistem Logistik"}],countries:[{value:"Canada",text:"Canada"},{value:"Niada",text:"Niada"},{value:"USA",text:"USA"},{value:"India",text:"India"},{value:"Africa",text:"Africa"}],states:[{value:"California",text:"California"},{value:"Florida",text:"Florida"},{value:"Georgia",text:"Georgia"},{value:"Connecticut",text:"Connecticut"},{value:"Louisiana",text:"Louisiana"}],options:[{value:null,text:"Please select an option"},{value:"Batu",text:"Ini Batu"},{value:"Bata",text:"Ini Bata"}]}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])({storeUserData:"Setting/authUserAction"})),{},{getDataVendor:function(){var e=this;l["a"].vendor.getDetailVendor(this.$route.params.id).then((function(a){e.vendor=a.data.result}))},onSubmit:function(){this.editVendorData()},prevImageLogo:function(e){var a=this,t=e.target;if(t.files&&t.files[0]){var r=new FileReader;r.onload=function(e){a.vendor.logo=e.target.result},r.readAsDataURL(t.files[0])}},prevImageBanner:function(e){var a=this,t=e.target;if(t.files&&t.files[0]){var r=new FileReader;r.onload=function(e){a.vendor.banner=e.target.result},r.readAsDataURL(t.files[0])}},editVendorData:function(){var e=this;this.vendor.address_lat=parseFloat(this.vendor.address_lat),this.vendor.address_long=parseFloat(this.vendor.address_long),l["a"].vendor.editVendor(this.$route.params.id,this.vendor).then((function(a){200===a.status?(s["d"].showSnackbar("success","Ubah data vendor berhasil."),e.$router.replace("/vendor")):a.data.errors.length>0&&(e.$refs.form.setErrors(a.data.errors),s["d"].showSnackbar("error","Terjadi kesalahan pada sistem."))})).finally((function(){e.loading=!1}))}})},c=d,u=t("2877"),v=Object(u["a"])(c,r,n,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c177a.123d971a.js.map
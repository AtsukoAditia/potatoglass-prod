(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94706e22"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"841c":function(t,e,s){"use strict";var a=s("d784"),i=s("825a"),r=s("1d80"),c=s("129f"),o=s("14c3");a("search",1,(function(t,e,s){return[function(e){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s):new RegExp(e)[t](String(s))},function(t){var a=s(e,t,this);if(a.done)return a.value;var r=i(t),n=String(this),l=r.lastIndex;c(l,0)||(r.lastIndex=0);var d=o(r,n);return c(r.lastIndex,l)||(r.lastIndex=l),null===d?-1:d.index}]}))},d618:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{lg:"3"}},[s("ProjectList",{attrs:{"project-list":t.projectList,"category-list":t.categoryList,"selected-category":t.selectedCategory,"selected-project":t.selectedProject}})],1),s("b-col",{attrs:{lg:"9"}},[s("TaskList",{attrs:{"task-list":t.taskList,project:t.selectedProject,category:t.selectedCategory}})],1)],1)],1)},i=[],r=s("5530"),c=s("bcae"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[s("div",{staticClass:"iq-todo-page"},[s("ul",{staticClass:"todo-task-list p-0 m-0"},t._l(t.filteredList,(function(e,a){return s("li",{key:a,class:e.val===t.selectedProject?"active":"",on:{click:function(s){return t.selectProject(e)}}},[s("b-link",{attrs:{href:"#"}},[s("i",{staticClass:"ri-stack-fill mr-2"}),t._v(t._s(e.project_name))]),s("ul",{staticClass:"sub-task mt-2 p-0",class:e.id===t.selectedProject.id?"show":"",attrs:{id:"todo-task"+a}},t._l(t.categoryList,(function(e,a){return s("li",{key:a,class:e.name===t.selectedCategory.name?"active":"",on:{click:function(s){return t.selectCategory(e)}}},[s("b-link",{attrs:{href:e.href}},[s("i",{staticClass:"ri-checkbox-blank-circle-fill",class:"text-"+e.color}),t._v(" "+t._s(e.name))])],1)})),0)],1)})),0)])]},proxy:!0}])})},n=[],l=(s("ac1f"),s("841c"),s("4de4"),s("caad"),s("2532"),{name:"ProjectList",props:["selectedProject","selectedCategory","projectList","categoryList"],data:function(){return{search:"",project:{id:0,project_name:""}}},methods:{selectProject:function(t){this.$store.dispatch("Ticket/selectedAction",{data:t,type:"project"}),this.search=""},selectCategory:function(t){this.$store.dispatch("Ticket/selectedAction",{data:t,type:"category"}),this.search=""}},computed:{filteredList:function(){var t=this;return this.projectList.filter((function(e){return e.project_name.toLowerCase().includes(t.search.toLowerCase())}))}},mounted:function(){}}),d=l,u=s("2877"),f=Object(u["a"])(d,o,n,!1,null,null,null),p=f.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-row",[s("b-col",{attrs:{sm:"12"}},[s("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",{staticClass:"todo-date d-flex mr-3"},[s("i",{class:"ri-calendar-2-line text-"+t.category.color+" mr-2"}),s("span",[t._v(t._s(t.project.project_name))])]),s("div",{staticClass:"todo-notification d-flex align-items-center"},[10!=t.userData.user.role?s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.add_task",modifiers:{add_task:!0}}],attrs:{variant:" iq-bg-primary iq-waves-effect",size:"lg"}},[t._v("Buat Tiket")]):t._e(),s("TaskForm",{attrs:{"new-id":t.taskList.length,category:t.categoryList,project:t.projectList}})],1)])]},proxy:!0}])}),s("iq-card",[s("b-form",{staticClass:"position-relative"},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-for":"search"}},[s("b-form-input",{staticClass:"todo-search bg-white",attrs:{placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),s("b-col",{attrs:{md:"12"}},[t.filteredList.length>0?s("iq-card",{attrs:{"body-class":"p-0"},scopedSlots:t._u([{key:"body",fn:function(){return[s("ul",{staticClass:"todo-task-lists m-0 p-0"},[t._l(t.filteredList,(function(e,a){return[!t.category.isHidden&&e.priority!==t.category.name||e.ticket_type!==t.project.val?t._e():s("li",{key:a,staticClass:"d-flex align-items-center p-3"},[s("div",{staticClass:"user-img img-fluid"}),s("div",{staticClass:"media-support-info ml-3"},[s("h5",{staticClass:"d-inline-block"},["0"==e.ticket_status?s("del",[s("b",[t._v("["+t._s("#00"+e.id)+"]")]),s("p",[t._v(t._s(e.ticket_title)+" for "+t._s(t.project.project_name))])]):[s("b",[t._v("["+t._s("#00"+e.id)+"]")]),s("p",[t._v(t._s(e.ticket_title)+" for "+t._s(t.project.project_name))])]],2),"3"===e.ticket_status?s("span",{staticClass:"badge badge-success ml-3 text-white"},[t._v("Ticket Approved")]):t._e(),"2"===e.ticket_status?s("span",{staticClass:"badge badge-danger ml-3 text-white"},[t._v("Ticket Rejected")]):t._e(),"1"===e.ticket_status?s("span",{staticClass:"badge badge-info ml-3 text-white"},[t._v("Ticket Open")]):t._e(),"4"===e.ticket_status?s("span",{staticClass:"badge badge-secondary ml-3 text-white"},[t._v("Ticket Closed")]):t._e()]),s("div",{staticClass:"iq-card-header-toolbar d-flex align-items-center"},[s("router-link",{attrs:{to:"ticket/"+e.id}},[s("b-button",{attrs:{variant:" iq-bg-primary iq-waves-effect",size:"lg"}},[t._v("Lihat")])],1)],1)])]}))],2)]},proxy:!0}],null,!1,673115886)}):[s("div",{staticClass:"text-center"},[s("svg",{staticClass:"hits-empty-state-image",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"138",height:"138"}},[s("defs",[s("linearGradient",{attrs:{id:"c",x1:"50%",x2:"50%",y1:"100%",y2:"0%"}},[s("stop",{attrs:{offset:"0%","stop-color":"#F5F5FA"}}),s("stop",{attrs:{offset:"100%","stop-color":"#FFF"}})],1),s("path",{attrs:{id:"b",d:"M68.71 114.25a45.54 45.54 0 1 1 0-91.08 45.54 45.54 0 0 1 0 91.08z"}}),s("filter",{attrs:{id:"a",width:"140.6%",height:"140.6%",x:"-20.3%",y:"-15.9%",filterUnits:"objectBoundingBox"}},[s("feOffset",{attrs:{dy:"4",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:"5.5"}}),s("feColorMatrix",{attrs:{in:"shadowBlurOuter1",result:"shadowMatrixOuter1",values:"0 0 0 0 0.145098039 0 0 0 0 0.17254902 0 0 0 0 0.380392157 0 0 0 0.15 0"}}),s("feOffset",{attrs:{dy:"2",in:"SourceAlpha",result:"shadowOffsetOuter2"}}),s("feGaussianBlur",{attrs:{in:"shadowOffsetOuter2",result:"shadowBlurOuter2",stdDeviation:"1.5"}}),s("feColorMatrix",{attrs:{in:"shadowBlurOuter2",result:"shadowMatrixOuter2",values:"0 0 0 0 0.364705882 0 0 0 0 0.392156863 0 0 0 0 0.580392157 0 0 0 0.2 0"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"shadowMatrixOuter2"}})],1)],1)],1),s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("circle",{attrs:{cx:"68.85",cy:"68.85",r:"68.85",fill:"#5468FF",opacity:".07"}}),s("circle",{attrs:{cx:"68.85",cy:"68.85",r:"52.95",fill:"#5468FF",opacity:".08"}}),s("use",{attrs:{fill:"#000",filter:"url(#a)","xlink:href":"#b"}}),s("use",{attrs:{fill:"url(#c)","xlink:href":"#b"}}),s("path",{attrs:{d:"M76.01 75.44c5-5 5.03-13.06.07-18.01a12.73 12.73 0 0 0-18 .07c-5 4.99-5.03 13.05-.07 18a12.73 12.73 0 0 0 18-.06zm2.5 2.5a16.28 16.28 0 0 1-23.02.09A16.29 16.29 0 0 1 55.57 55a16.28 16.28 0 0 1 23.03-.1 16.28 16.28 0 0 1-.08 23.04zm1.08-1.08l-2.15 2.16 8.6 8.6 2.16-2.15-8.6-8.6z",fill:"#5369FF"}})])]),s("p",{staticClass:"mt-2"},[t._v("Sorry, we can't find any matches to your query!")]),s("p",[t._v("Please try another query.")])])]],2)],1)},m=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{id:"add_task",centered:"",title:"Kirim Tiket kepada Admin",size:"lg"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("b-button",{staticClass:"iq-bg-primary",attrs:{variant:"none"},on:{click:function(e){return t.$bvModal.hide("add_task")}}},[t._v("Batal")]),s("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.saveTask(t.task)}}},[t._v("Kirim Tiket")])]},proxy:!0}])},[s("b-form",[s("b-form-group",{staticClass:"form-group",attrs:{label:"Judul Tiket","label-for":"task_tile"}},[s("b-form-input",{attrs:{name:"task_title",id:"task_tile",placeholder:""},model:{value:t.task.task_title,callback:function(e){t.$set(t.task,"task_title",e)},expression:"task.task_title"}})],1),s("b-form-group",{staticClass:"form-group",attrs:{label:"Isi Tiket","label-for":"task_desc"}},[s("wysiwyg",{model:{value:t.task.ticket_description,callback:function(e){t.$set(t.task,"ticket_description",e)},expression:"task.ticket_description"}})],1),s("b-form-group",{staticClass:"form-group",attrs:{label:"Tipe","label-for":"type"}},t._l(t.ticket_type,(function(e,a){return s("b-form-radio",{key:a,attrs:{inline:"",name:"type",value:e.id},model:{value:t.task.ticket_type,callback:function(e){t.$set(t.task,"ticket_type",e)},expression:"task.ticket_type"}},[t._v(t._s(e.label))])})),1)],1)],1)},_=[],b=(s("d81d"),s("b0c0"),s("a662")),y={name:"TaskForm",props:["newId","category","project"],data:function(){return{ticket_type:[],ticket_description:"",task_title:"",task:this.default()}},mounted:function(){var t=this;this.category.map((function(e){e.isHidden||t.ticket_priority.push({label:e.name,id:e.id})})),this.project.map((function(e){t.ticket_type.push({label:e.project_name,id:e.val})}))},computed:{},methods:{default:function(){return{id:this.newId,task_title:"",project_id:1,category_id:0,user_id:0,status:2,task_status:!1}},saveTask:function(t){var e=this,s={ticket_title:t.task_title,ticket_description:t.ticket_description,ticket_type:t.ticket_type};b["a"].newTicket(s).then((function(t){t.status&&(c["d"].showSnackbar("success","Membuat tiket berhasil..."),e.$bvModal.hide("add_task"),e.task=e.default(),b["a"].listTicket().then((function(t){t.status&&(e.$store.dispatch("Ticket/addTaskAction",t.data.result),location.reload())})).catch())})).catch()},nameKeydown:function(t){/^\W$/.test(t.key)&&t.preventDefault()}}},g=y,v=Object(u["a"])(g,h,_,!1,null,null,null),j=v.exports,w=s("2f62"),C={name:"TaskList",components:{TaskForm:j},props:["taskList","project","category"],mounted:function(){},computed:Object(r["a"])(Object(r["a"])({},Object(w["c"])({categoryList:"Ticket/categoryState",projectList:"Ticket/projectState",userData:"authModule/getUserData"})),{},{filteredList:function(){var t=this;return this.taskList.filter((function(e){return e.ticket_title.toLowerCase().includes(t.search.toLowerCase())}))}}),data:function(){return{search:""}},methods:{updateStatue:function(t){this.$store.dispatch("Ticket/updateStatusAction",t)}}},x=C,T=Object(u["a"])(x,k,m,!1,null,null,null),L=T.exports,S={projectState:function(t){return t.projectList},taskState:function(t){return t.taskList},categoryState:function(t){return t.categoryList},selectedProjectState:function(t){return t.selectedProject},selectedCategoryState:function(t){return t.selectedCategory}},O=(s("d3b7"),{addProjectAction:function(t,e){return new Promise((function(s,a){t.commit("addProjectCommit",e),s()}))},addTaskAction:function(t,e){return new Promise((function(s,a){t.commit("addTaskCommit",e),s()}))},selectedAction:function(t,e){return new Promise((function(s,a){t.commit("selectedCommit",e),s()}))},updateStatusAction:function(t,e){return new Promise((function(s,a){t.commit("updateStatusCommit",e),s()}))}}),P=(s("c740"),{addProjectCommit:function(t,e){t.projectList.push(e)},selectedCommit:function(t,e){switch(e.type){case"project":t.selectedProject=e.data;break;case"category":t.selectedCategory=e.data;break}},addTaskCommit:function(t,e){t.taskList=e},updateStatusCommit:function(t,e){var s=t.taskList.findIndex((function(t){return t.id===e.id}));e.task_status?e.task_status=!1:e.task_status=!0,t.taskList[s]=e}}),M={categoryList:[{id:4,name:"Semua Tiket",color:"success",isHidden:!0}],projectList:[{id:1,val:"support",project_name:"Support"},{id:2,val:"material",project_name:"Material"}],statusProject:[{id:4,status_name:"Ticket Closed"},{id:3,status_name:"Ticket Approved"},{id:2,status_name:"Ticket Rejected"},{id:1,status_name:"Ticket Open"}],taskList:[],selectedProject:{id:1,val:"support",project_name:"Support"},selectedCategory:{id:1,name:"Semua Tiket",color:"success",isHidden:!0}},$={namespaced:!0,state:M,getters:S,actions:O,mutations:P},A={name:"TicketListing",components:{ProjectList:p,TaskList:L},data:function(){return{taskList:[]}},beforeMount:function(){this.$store.registerModule("Ticket",$)},beforeDestroy:function(){this.$store.unregisterModule("Ticket")},mounted:function(){c["d"].index(),this.getTicketList()},computed:Object(r["a"])({},Object(w["c"])({projectList:"Ticket/projectState",categoryList:"Ticket/categoryState",selectedCategory:"Ticket/selectedCategoryState",selectedProject:"Ticket/selectedProjectState"})),methods:{getTicketList:function(){var t=this;b["a"].listTicketPHP().then((function(e){e.status&&(t.$store.dispatch("Ticket/addTaskAction",e.data.data),t.taskList=t.$store.getters["Ticket/taskState"])})).catch()}}},F=A,q=Object(u["a"])(F,a,i,!1,null,null,null);e["default"]=q.exports}}]);
//# sourceMappingURL=chunk-94706e22.682fcf46.js.map
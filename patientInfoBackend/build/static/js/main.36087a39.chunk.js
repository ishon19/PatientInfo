(this.webpackJsonppatientinfo=this.webpackJsonppatientinfo||[]).push([[0],{43:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),l=a(31),r=a.n(l),i=(a(43),a(44),a(13)),s=a(20),o=a.n(s),d="/patients",u={getPatients:function(){return o.a.get(d).then((function(e){return e.data}))},uploadPatientList:function(e){return o.a.post(d,e).then((function(e){return e.data}))},getPatientInfo:function(e){return o.a.get("".concat(d,"/").concat(e)).then((function(e){return e.data}))}},j=a(5),h=function(e){var t=e.fileChangeHandler,a=e.patientData,c=e.dataRenderHandler,l=e.showSpinner;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"homeContainer",children:[Object(n.jsx)("h2",{children:"Patient Details"}),l?Object(n.jsx)(j.d,{appearance:"primary",size:"medium"}):Object(n.jsx)(j.b,{shadow:"dark",children:a.length>0?c(a):Object(n.jsx)(j.c,{appearance:"alert",title:"Data not found",children:"Please upload a CSV/XLS file."})}),Object(n.jsx)("h2",{children:"Upload Patient List"}),Object(n.jsx)(j.b,{shadow:"dark",className:"w-100 h-100",children:Object(n.jsx)("input",{type:"file",onChange:t})})]})})},b=function(e){var t,a,c,l,r,i=e.patientDetail,s=e.backButtonHandler;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"homeContainer",children:Object(n.jsxs)(j.b,{className:"h-100",children:[Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Name"}),Object(n.jsx)("td",{children:null!==(t=null===i||void 0===i?void 0:i.name)&&void 0!==t?t:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Age"}),Object(n.jsx)("td",{children:null!==(a=null===i||void 0===i?void 0:i.age)&&void 0!==a?a:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Gender"}),Object(n.jsx)("td",{children:null!==(c=null===i||void 0===i?void 0:i.gender)&&void 0!==c?c:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Contact"}),Object(n.jsx)("td",{children:null!==(l=null===i||void 0===i?void 0:i.contact)&&void 0!==l?l:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Address"}),Object(n.jsx)("td",{children:null!==(r=null===i||void 0===i?void 0:i.address)&&void 0!==r?r:"--"})]})]})}),Object(n.jsx)(j.a,{appearance:"primary",onClick:s,children:"Go Back"})]})})})},m=function(e){var t=e.message,a=e.type;return null===t?null:Object(n.jsx)("div",{className:"mr-5 mb-8",children:Object(n.jsx)(j.f,{appearance:a,title:t})})},p=a(85),f=a(83),O=a(84),g=function(e){var t=e.title;return Object(n.jsx)(p.a,{position:"static",children:Object(n.jsx)(f.a,{children:Object(n.jsx)(O.a,{variant:"h5",children:t})})})},x=a(36),v=function(e){var t=e.data,a=e.fetchPatientDetail,c=[{name:"name",displayName:"Name",width:"40%",resizable:!0,separator:!0,tooltip:!0,translate:function(e){return{title:"".concat(e.name),name:e.name}},cellType:"AVATAR_WITH_TEXT"},{name:"age",displayName:"Age",width:150,resizable:!0,sorting:!1,cellType:"WITH_META_LIST"},{name:"gender",displayName:"Gender",width:150,resizable:!0,comparator:function(e,t){return e.gender.localeCompare(t.gender)},cellType:"STATUS_HINT",translate:function(e){return{title:e.gender,statusAppearance:"Female"===e.gender?"alert":"success"}},filters:[{label:"Male",value:"male"},{label:"Female",value:"female"}],onFilterChange:function(e,t){var a,n=Object(x.a)(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;if(e.gender.toLowerCase()===c)return!0}}catch(l){n.e(l)}finally{n.f()}return!1}},{name:"contact",displayName:"Contact",width:250,resizable:!0,align:"center",cellType:"WITH_META_LIST"},{name:"address",displayName:"Address",width:200,resizable:!0,cellType:"WITH_META_LIST"}];return Object(n.jsx)("div",{style:{height:"350px"},children:Object(n.jsx)(j.b,{className:"h-100",children:Object(n.jsx)(j.e,{loaderSchema:[{name:"name",displayName:"Name",width:"40%",resizable:!0,tooltip:!0,separator:!0,filters:[{label:"A-G",value:"a-g"},{label:"H-R",value:"h-r"},{label:"S-Z",value:"s-z"}],cellType:"AVATAR_WITH_TEXT"},{name:"age",displayName:"Age",width:250,resizable:!0,sorting:!1,cellType:"WITH_META_LIST"},{name:"gender",displayName:"Gender",width:180,resizable:!0,cellType:"STATUS_HINT",filters:[{label:"Male",value:"male"},{label:"Female",value:"female"}]},{name:"contact",displayName:"Contact",width:100,resizable:!0,align:"center",cellType:"ICON"},{name:"address",displayName:"Address",width:200,resizable:!0,cellType:"WITH_META_LIST"}],data:t,schema:c,withHeader:!0,headerOptions:{withSearch:!0},onSearch:function(e,t){return e.filter((function(e){return e.name.toLowerCase().match(t.toLowerCase())}))},withCheckbox:!0,onSelect:function(e,t,n,c){console.log("on-select:- rowIndex: ".concat(e," selected: ").concat(t," selectedList: ").concat(JSON.stringify(n)," selectAll: ").concat(c)),n.length&&a(n[0].id)},withPagination:!0,pageSize:5,onPageChange:function(e){return console.log("on-page-change:- ".concat(e))}})})})},T=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),o=s[0],d=s[1],j=Object(c.useState)(null),p=Object(i.a)(j,2),f=p[0],O=p[1],x=Object(c.useState)(null),T=Object(i.a)(x,2),y=T[0],w=T[1],N=Object(c.useState)(null),S=Object(i.a)(N,2),A=S[0],C=S[1],I=Object(c.useState)(!1),P=Object(i.a)(I,2),H=P[0],_=P[1],D=function(e,t){w(e),C(t),setTimeout((function(){w(null),C(null)}),1e3)},L=function(e){_(!0),u.getPatientInfo(e).then((function(e){O(e),d(!0),_(!1),D("Patient Details Fetched","success")})).catch((function(e){console.error(e),_(!1),D("Error Fetching Details from the server, Try again","alert")}))};return Object(c.useEffect)((function(){_(!0),u.getPatients().then((function(e){e&&(_(!1),l(e),D("Stored data loaded from database","success"))})).catch((function(e){_(!1),D("Error : ".concat(e.response.data.error),"alert")}))}),[]),Object(n.jsx)("div",{children:o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{title:"Patient Details"}),Object(n.jsx)(m,{message:y,type:A}),Object(n.jsx)(b,{patientDetail:f,backButtonHandler:function(){return d(!1)}})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{title:"Patient Info Application"}),Object(n.jsx)(m,{message:y,type:A}),Object(n.jsx)(h,{fileChangeHandler:function(e){console.log(e.target.files[0]);var t=e.target.files[0].name;if(t.toLowerCase().includes("csv")||t.toLowerCase().includes("xls")){l([]),_(!0);var a=new FormData;a.append("Data",e.target.files[0],t),u.uploadPatientList(a).then((function(t){console.log(t),u.getPatients().then((function(t){t&&(l(t),_(!1),D("Data Fetched from Database","success"),e.target.value=null)}))})).catch((function(t){console.error(t),_(!1),D("Error : ".concat(t.response.data.error),"alert"),e.target.value=null}))}else D("Please select xls or csv files only!","alert")},patientData:a,dataRenderHandler:function(e){return Object(n.jsx)(v,{data:e,fetchPatientDetail:L})},showSpinner:H})]})})};r.a.render(Object(n.jsx)(T,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.36087a39.chunk.js.map
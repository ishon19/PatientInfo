(this.webpackJsonppatientinfo=this.webpackJsonppatientinfo||[]).push([[0],{43:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),c=a(31),i=a.n(c),r=(a(43),a(44),a(13)),s=a(20),d=a.n(s),o="/patients",j={getPatients:function(){return d.a.get(o).then((function(e){return e.data}))},uploadPatientList:function(e){return d.a.post(o,e).then((function(e){return e.data}))},getPatientInfo:function(e){return d.a.get("".concat(o,"/").concat(e)).then((function(e){return e.data}))}},u=a(5),h=function(e){var t=e.fileChangeHandler,a=e.patientData,l=e.dataRenderHandler;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"homeContainer",children:[Object(n.jsx)("h2",{children:"Patient Details"}),Object(n.jsx)(u.b,{shadow:"dark",children:a.length>0?l(a):Object(n.jsx)(u.c,{appearance:"alert",title:"Data not found",children:"Please upload a CSV/XLS file."})}),Object(n.jsx)("h2",{children:"Upload Patient List"}),Object(n.jsx)(u.b,{shadow:"dark",className:"w-100 h-100",children:Object(n.jsx)("input",{type:"file",onChange:t})})]})})},b=function(e){var t,a,l,c,i,r=e.patientDetail,s=e.backButtonHandler;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"homeContainer",children:Object(n.jsxs)(u.b,{className:"h-100",children:[Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Name"}),Object(n.jsx)("td",{children:null!==(t=null===r||void 0===r?void 0:r.name)&&void 0!==t?t:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Age"}),Object(n.jsx)("td",{children:null!==(a=null===r||void 0===r?void 0:r.age)&&void 0!==a?a:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Gender"}),Object(n.jsx)("td",{children:null!==(l=null===r||void 0===r?void 0:r.gender)&&void 0!==l?l:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Contact"}),Object(n.jsx)("td",{children:null!==(c=null===r||void 0===r?void 0:r.contact)&&void 0!==c?c:"--"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"imp",children:"Address"}),Object(n.jsx)("td",{children:null!==(i=null===r||void 0===r?void 0:r.address)&&void 0!==i?i:"--"})]})]})}),Object(n.jsx)(u.a,{appearance:"primary",onClick:s,children:"Go Back"})]})})})},m=function(e){var t=e.message,a=e.type;return null===t?null:Object(n.jsx)("div",{className:"mr-5 mb-8",children:Object(n.jsx)(u.e,{appearance:a,title:t})})},p=a(85),f=a(83),O=a(84),g=function(e){var t=e.title;return Object(n.jsx)(p.a,{position:"static",children:Object(n.jsx)(f.a,{children:Object(n.jsx)(O.a,{variant:"h5",children:t})})})},x=a(36),v=function(e){var t=e.data,a=e.fetchPatientDetail,l=[{name:"name",displayName:"Name",width:"40%",resizable:!0,separator:!0,tooltip:!0,translate:function(e){return{title:"".concat(e.name),name:e.name}},cellType:"AVATAR_WITH_TEXT"},{name:"age",displayName:"Age",width:150,resizable:!0,sorting:!1,cellType:"WITH_META_LIST"},{name:"gender",displayName:"Gender",width:150,resizable:!0,comparator:function(e,t){return e.gender.localeCompare(t.gender)},cellType:"STATUS_HINT",translate:function(e){return{title:e.gender,statusAppearance:"Female"===e.gender?"alert":"success"}},filters:[{label:"Male",value:"male"},{label:"Female",value:"female"}],onFilterChange:function(e,t){var a,n=Object(x.a)(t);try{for(n.s();!(a=n.n()).done;){var l=a.value;if(e.gender.toLowerCase()===l)return!0}}catch(c){n.e(c)}finally{n.f()}return!1}},{name:"contact",displayName:"Contact",width:250,resizable:!0,align:"center",cellType:"WITH_META_LIST"},{name:"address",displayName:"Address",width:200,resizable:!0,cellType:"WITH_META_LIST"}];return Object(n.jsx)("div",{style:{height:"350px"},children:Object(n.jsx)(u.b,{className:"h-100",children:Object(n.jsx)(u.d,{loaderSchema:[{name:"name",displayName:"Name",width:"40%",resizable:!0,tooltip:!0,separator:!0,filters:[{label:"A-G",value:"a-g"},{label:"H-R",value:"h-r"},{label:"S-Z",value:"s-z"}],cellType:"AVATAR_WITH_TEXT"},{name:"age",displayName:"Age",width:250,resizable:!0,sorting:!1,cellType:"WITH_META_LIST"},{name:"gender",displayName:"Gender",width:180,resizable:!0,cellType:"STATUS_HINT",filters:[{label:"Male",value:"male"},{label:"Female",value:"female"}]},{name:"contact",displayName:"Contact",width:100,resizable:!0,align:"center",cellType:"ICON"},{name:"address",displayName:"Address",width:200,resizable:!0,cellType:"WITH_META_LIST"}],data:t,schema:l,withHeader:!0,headerOptions:{withSearch:!0},onSearch:function(e,t){return e.filter((function(e){return e.name.toLowerCase().match(t.toLowerCase())}))},withCheckbox:!0,onSelect:function(e,t,n,l){console.log("on-select:- rowIndex: ".concat(e," selected: ").concat(t," selectedList: ").concat(JSON.stringify(n)," selectAll: ").concat(l)),a(n[0].id)},withPagination:!0,pageSize:5,onPageChange:function(e){return console.log("on-page-change:- ".concat(e))}})})})},T=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(l.useState)(!1),s=Object(r.a)(i,2),d=s[0],o=s[1],u=Object(l.useState)(null),p=Object(r.a)(u,2),f=p[0],O=p[1],x=Object(l.useState)(null),T=Object(r.a)(x,2),y=T[0],N=T[1],w=Object(l.useState)(null),S=Object(r.a)(w,2),A=S[0],C=S[1],I=function(e,t){N(e),C(t),setTimeout((function(){N(null),C(null)}),1e3)},H=function(e){j.getPatientInfo(e).then((function(e){O(e),o(!0),I("Patient Details Fetched","success")})).catch((function(e){console.error(e),I("Error Fetching Details from the server, Try again","alert")}))};return Object(l.useEffect)((function(){j.getPatients().then((function(e){e&&(c(e),I("Stored data loaded from database","success"))}))}),[]),Object(n.jsx)("div",{children:d?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{title:"Patient Details"}),Object(n.jsx)(m,{message:y,type:A}),Object(n.jsx)(b,{patientDetail:f,backButtonHandler:function(){return o(!1)}})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{title:"Patient Info Application"}),Object(n.jsx)(m,{message:y,type:A}),Object(n.jsx)(h,{fileChangeHandler:function(e){c([]),console.log(e.target.files[0]);var t=e.target.files[0].name;if(t.toLowerCase().includes("csv")||t.toLowerCase().includes("xls")){var a=new FormData;a.append("Data",e.target.files[0],t),j.uploadPatientList(a).then((function(e){console.log(e),c(e),I("Data Fetched Successfully","success")})).catch((function(e){console.error(e),I("Error Fetching Details from the server, Try again","alert")}))}else I("Please select xls or csv files only!","alert")},patientData:a,dataRenderHandler:function(e){return Object(n.jsx)(v,{data:e,fetchPatientDetail:H})}})]})})};i.a.render(Object(n.jsx)(T,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2b9049a2.chunk.js.map
(this["webpackJsonpsearch-image-app"]=this["webpackJsonpsearch-image-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),s=n.n(r),a=n(2),i=n(0),u=function(){return Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"title-page",children:"Buscador de Imagenes"})})})})},l=function(e){var t=e.setBusqueda,n=Object(c.useState)(""),r=Object(a.a)(n,2),s=r[0],u=r[1];return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>1?(t([s]),u("")):alert("El valor es muy corto")},children:Object(i.jsx)("input",{type:"text",className:"search",value:s,onChange:function(e){u(e.target.value)}})})},j=n(3),o=function(e){e.id,e.description;var t=e.alt_description,n=e.url;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"cuadro-fotos",children:Object(i.jsx)("img",{src:n,alt:t})})})},d=n(5),b=n.n(d),p=n(7),O=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,c,r,s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.unsplash.com/search/photos/?client_id=RaPx5r9_SOatxb9_10Ki2sd9XsHj-HjOZE5SKXEFeUo&query=".concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,s=r.results,a=s.map((function(e){return{id:e.id,description:e.description,alt_description:e.alt_description,url:e.urls.small}})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=Object(c.useState)({results:[],loading:!0}),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){O(e).then((function(e){s({results:e,loading:!1})}))}),[e]),r},x=function(e){var t=e.search,n=h(t),c=n.results,r=n.loading,s=c.length,a=c.splice(2*s/3,s),u=c.splice(s/3,2*s/3),l=c.splice(0,s/3);return console.log(s),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:t}),r&&Object(i.jsx)("p",{children:"Loading"}),Object(i.jsx)("div",{className:"grid-gallery",children:l.map((function(e){return Object(i.jsx)(o,Object(j.a)({},e),e.id)}))}),Object(i.jsx)("div",{className:"grid-gallery",children:u.map((function(e){return Object(i.jsx)(o,Object(j.a)({},e),e.id)}))}),Object(i.jsx)("div",{className:"grid-gallery",children:a.map((function(e){return Object(i.jsx)(o,Object(j.a)({},e),e.id)}))})]})},f=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(l,{setBusqueda:r}),Object(i.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(i.jsx)(x,{search:e},e)}))})]})},m=(n(14),document.getElementById("root"));s.a.render(Object(i.jsx)(f,{}),m)}},[[15,1,2]]]);
//# sourceMappingURL=main.19ad307f.chunk.js.map
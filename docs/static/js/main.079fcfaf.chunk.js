(this["webpackJsonpsearch-image-app"]=this["webpackJsonpsearch-image-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),s=n.n(c),a=n(2),i=n(0),u=function(){return Object(i.jsx)("nav",{children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"title-page",children:"Buscador de Imagenes"})})})})},j=function(e){var t=e.setBusqueda,n=Object(r.useState)(""),c=Object(a.a)(n,2),s=c[0],u=c[1];return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>1?(t([s]),u("")):alert("El valor es muy corto")},children:Object(i.jsx)("input",{type:"text",className:"search",value:s,onChange:function(e){u(e.target.value)}})})},l=n(7),o=function(e){e.id,e.description;var t=e.alt_description,n=e.url;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"cuadro-fotos",children:Object(i.jsx)("img",{src:n,alt:t})})})},d=n(4),b=n.n(d),p=n(6),h=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,r,c,s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.unsplash.com/search/photos/?client_id=RaPx5r9_SOatxb9_10Ki2sd9XsHj-HjOZE5SKXEFeUo&query=".concat(t),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,s=c.results,a=s.map((function(e){return{id:e.id,description:e.description,alt_description:e.alt_description,url:e.urls.small}})),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=Object(r.useState)({results:[],loading:!0}),n=Object(a.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){h(e).then((function(e){s({results:e,loading:!1})}))}),[e]),c},f=function(e){var t=e.search,n=O(t),r=n.results,c=n.loading;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:t}),c&&Object(i.jsx)("p",{children:"Loading"}),Object(i.jsx)("div",{className:"grid-gallery",children:r.map((function(e){return Object(i.jsx)(o,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(j,{setBusqueda:c}),Object(i.jsx)("div",{className:"gallery",children:n.map((function(e){return Object(i.jsx)(f,{search:e},e)}))})]})},m=(n(14),document.getElementById("root"));s.a.render(Object(i.jsx)(x,{}),m)}},[[15,1,2]]]);
//# sourceMappingURL=main.079fcfaf.chunk.js.map
(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(22),n=c.n(a),s=c(7),i=c(2),j=(c(30),c(31),c(32),c(15)),b=c.n(j),r=c(3),l=function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(s.c,{to:"/",className:l,children:"Home"}),Object(r.jsx)(s.c,{to:"/tabs",className:l,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Error Page"})},x=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){var e=Object(i.r)().tabId,t=h.find((function(t){return t.id===e}));return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:h.map((function(e){var c=e.id,a=e.title;return Object(r.jsx)("li",{className:b()({"is-active":c===(null===t||void 0===t?void 0:t.id)}),"data-cy":"Tab",children:Object(r.jsx)(s.b,{to:"/tabs/".concat(c),children:a})},c)}))})}),t?Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:null===t||void 0===t?void 0:t.content}):Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:"Please select a tab"})]})},m=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(i.e,{children:[Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(d,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.c,{path:"tabs",children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(O,{})}),Object(r.jsx)(i.c,{path:":tabId",element:Object(r.jsx)(O,{})})]})]}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)(o,{})})]})})};n.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e306dd4b.chunk.js.map
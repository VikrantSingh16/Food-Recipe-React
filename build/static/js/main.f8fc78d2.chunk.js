(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{46:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(7),s=c.n(r),i=c(31),o=c.n(i),l=c(34),j=c(28),u=(c(46),c(10)),b=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsxs)("h3",{children:["Total Calories : ",Math.round(c)]}),Object(u.jsx)("h3",{style:{color:"#f50057"},children:"Recipe : "}),Object(u.jsx)("ul",{children:a.map((function(e){return Object(u.jsx)("li",{children:e.text})}))}),Object(u.jsx)("img",{src:n,alt:"Error"})]})},h=c(84),d=c(83);var p=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),i=s[0],p=s[1],O=Object(n.useState)(""),f=Object(j.a)(O,2),m=f[0],x=f[1];Object(n.useEffect)((function(){v()}),[m]);var v=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("8cc6daac","&app_key=").concat("27061963aec5409c52f083bba93a645d"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.hits),a(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("center",{children:[Object(u.jsx)("h1",{children:"Feel the best taste"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(i),p("")},className:"search-form",children:[Object(u.jsx)(d.a,{className:"search-bar",type:"text",value:i,onChange:function(e){p(e.target.value)},id:"standard-basic",label:"Wanna try something new?"}),Object(u.jsx)(h.a,{className:"btn",type:"submit",variant:"contained",color:"secondary",children:"Go"})]}),c.map((function(e){return Object(u.jsx)(b,{title:e.recipe.label,image:e.recipe.image,calories:e.recipe.calories,ingredients:e.recipe.ingredients})}))]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f8fc78d2.chunk.js.map
(this.webpackJsonpjimmiepetshop=this.webpackJsonpjimmiepetshop||[]).push([[12],{108:function(n,e,t){"use strict";var c,i,r,a,o=t(6),s=t(55),l=(t(1),t(7)),b=t(8),j="grey",d=Object(b.a)(c||(c=Object(l.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),u=b.b.div(i||(i=Object(l.a)(["\n  position: relative;\n  margin: 20px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),p=b.b.input(r||(r=Object(l.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 15px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"])),j,j,d),h=b.b.label(a||(a=Object(l.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"])),j,d),x=t(2),O=["handleChange","label"];e.a=function(n){var e=n.handleChange,t=n.label,c=Object(s.a)(n,O);return Object(x.jsxs)(u,{children:[Object(x.jsx)(p,Object(o.a)({onChange:e},c)),t?Object(x.jsx)(h,{className:c.value.length?"shrink":"",children:t}):null]})}},109:function(n,e,t){"use strict";t.d(e,"e",(function(){return r})),t.d(e,"f",(function(){return a})),t.d(e,"j",(function(){return o})),t.d(e,"b",(function(){return s})),t.d(e,"c",(function(){return l})),t.d(e,"i",(function(){return b})),t.d(e,"a",(function(){return j})),t.d(e,"h",(function(){return d})),t.d(e,"g",(function(){return u})),t.d(e,"d",(function(){return p}));var c=t(24),i=function(n){return n.shop},r=Object(c.a)([i],(function(n){return n.collections})),a=Object(c.a)([i],(function(n){return n.directory})),o=Object(c.a)([i],(function(n){return n.product})),s=Object(c.a)([i],(function(n){return n.isFetching})),l=Object(c.a)([i],(function(n){return!!n.collections})),b=Object(c.a)([i],(function(n){return n.message})),j=Object(c.a)([i],(function(n){return n.imageMessage})),d=Object(c.a)([r],(function(n){return n?n.filter((function(n){return n._id<9})):[]})),u=Object(c.a)([i],(function(n){return n.error})),p=Object(c.a)([i],(function(n){return n.errorReview}))},127:function(n,e,t){"use strict";t.r(e);var c,i,r,a,o,s,l,b,j,d,u,p,h,x,O,f,g,m=t(31),v=t(1),w=t(20),y=t(51),k=t(53),C=t(54),z=t(52),S=t(5),I=t.n(S),E=t(110),N=t(6),_=t(108),A=t(39),P=t(18),q=t(109),D=t(7),M=t(8),R=M.b.div(c||(c=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),F=M.b.div(i||(i=Object(D.a)(["\n  font-weight: 300;\n  font-size: 28px;\n  font-family: 'Arima Madurai', cursive;\n  margin-bottom: 20px;\n"]))),J=M.b.div(r||(r=Object(D.a)(["\n  display: flex;\n  gap: 20px;\n\n  .label {\n    font-size: 15px;\n    color: black;\n  }\n"]))),L=M.b.div(a||(a=Object(D.a)(["\n  display: flex;\n  gap: 30px;\n  margin-top: 25px;\n  span {\n    font-size: 15px;\n    color: black;\n  }\n\n  select {\n    width: 130px;\n    padding: 5px;\n    \n  }\n"]))),T=M.b.div(o||(o=Object(D.a)(["\n  margin-top: 25px;\n  display: flex;\n  font-size: 15px;\n  gap: 20px;\n  color: black;\n  span {\n    width: 50%;\n  }\n"]))),U=M.b.div(s||(s=Object(D.a)(["\n  display: flex;\n  gap: 20px;\n  input {\n    padding: 5px 7px;\n    width: 50%;\n    border: none;\n    border-bottom: 1px solid black;\n    &:focus{\n      outline: none;\n    }\n  }\n"]))),$=M.b.div(l||(l=Object(D.a)(["\n  margin: 25px 0 30px;\n  display: flex;\n  flex-direction: column;\n  span {\n    font-size: 15px;\n    color: black;\n  }\n  textarea {\n    padding: 5px;\n  }\n"]))),B=t(2),G=function(n){var e=n.product,t=n.close,c=Object(w.b)(),i=Object(w.c)(q.a),r=Object(v.useState)({name:"",price:0,image:"",brand:"",category:"",countInStock:0,description:""}),a=Object(m.a)(r,2),o=a[0],s=a[1],l=o.name,b=o.price,j=o.image,d=o.brand,u=o.category,p=o.countInStock,h=o.description;Object(v.useEffect)((function(){null!==e&&s(Object(N.a)({},e)),null!==i&&s(Object(N.a)(Object(N.a)({},o),{},{image:i}))}),[e,i]);var x=function(){var n=Object(E.a)(I.a.mark((function n(i){return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i.preventDefault(),t(),console.log(e._id),c(Object(P.q)({name:l,price:b,brand:d,category:u,countInStock:p,description:h},e._id));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),O=function(){var n=Object(E.a)(I.a.mark((function n(t){var i,r;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(i=t.target.files[0])&&((r=new FormData).append("image",i),r.append("product_id",e._id),c(Object(P.t)(r)));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(n){var e=n.target,t=e.name,c=e.value;s(Object(N.a)(Object(N.a)({},o),{},Object(z.a)({},t,c)))};return Object(B.jsxs)(R,{children:[Object(B.jsx)(F,{children:"Edit Product"}),Object(B.jsxs)("form",{onSubmit:x,children:[Object(B.jsx)(_.a,{type:"text",name:"name",value:l,onChange:f,label:"Name",required:!0}),Object(B.jsxs)(J,{children:[Object(B.jsx)("span",{className:"label",children:"Image"}),Object(B.jsx)("span",{name:"image",onChange:f,children:j})]}),Object(B.jsx)("input",{type:"file",id:"image-file",onChange:O}),Object(B.jsxs)(L,{children:[Object(B.jsx)("span",{className:"label",children:"Category"}),Object(B.jsx)("select",{name:"category",onChange:f,value:u,children:["clothes","collars","hats","furniture","toys"].map((function(n,e){return Object(B.jsx)("option",{value:n,children:n},e)}))})]}),Object(B.jsxs)(T,{children:[Object(B.jsx)("span",{children:"In Stock"}),Object(B.jsx)("span",{children:"Price"})]}),Object(B.jsxs)(U,{children:[Object(B.jsx)("input",{type:"number",name:"countInStock",onChange:f,value:p,required:!0}),Object(B.jsx)("input",{type:"number",name:"price",onChange:f,value:b,required:!0})]}),Object(B.jsxs)($,{children:[Object(B.jsx)("span",{children:"Description"}),Object(B.jsx)("textarea",{name:"description",onChange:f,value:h,rows:"5"})]}),Object(B.jsx)(A.a,{type:"submit",style:{width:"100%"},children:"Update Changes"})]})]})},H=t(43),K=t(117),Q=t(67),V=M.b.div(b||(b=Object(D.a)(["\n  padding: 120px 0 50px 0;\n  width: 100%;\n"]))),W=M.b.div(j||(j=Object(D.a)(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 30px auto;\n"]))),X=M.b.div(d||(d=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  span {\n    font-weight: 300;\n    font-size: 35px;\n    letter-spacing: .1rem;\n    font-family: 'Arima Madurai', cursive;\n  }\n"]))),Y=Object(M.b)(A.a)(u||(u=Object(D.a)(["\n\n"]))),Z=M.b.div(p||(p=Object(D.a)(["\n  background-color: #f6f4f1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding: 5px 15px;\n  font-weight: 600;\n"]))),nn=M.b.div(h||(h=Object(D.a)(["\n  width: 10%;\n\n  &:first-child{\n    width: 5%;\n  }\n  &:nth-child(2){\n    width: 15%;\n  }\n  &:nth-child(3){\n    width: 25%;\n  }\n  &:last-child{\n    width: 5%;\n  }\n"]))),en=M.b.div(x||(x=Object(D.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  font-size: 15px;\n  width: 100%;\n  align-items: center;\n  &:nth-child(even){\n    background-color: #EEEEEE;\n  }\n"]))),tn=M.b.div(O||(O=Object(D.a)(["\n  width: 10%;\n  &:first-child{\n    width: 5%;\n  }\n  &:nth-child(2){\n    width: 15%;\n    img {\n      width: 40%\n    }\n  }\n  &:nth-child(3){\n    width: 25%;\n  }\n  &:nth-child(4){\n    text-transform: capitalize;\n  }\n  &:last-child{\n    width: 5%;\n    display: flex;\n    align-items: center;\n    /* font-size: 12px;\n    letter-spacing: .1rem; */\n  }\n"]))),cn=Object(M.b)(K.a)(f||(f=Object(D.a)(["\n  color: rgb(192, 67, 43);\n  /* margin: 0 15px; */\n  width: 50%;\n  cursor: pointer;\n  \n  &:hover {\n    color: gray;\n  }\n"]))),rn=Object(M.b)(Q.b)(g||(g=Object(D.a)(["\n  /* margin: 0 15px; */\n  cursor: pointer;\n  color: gray;\n  width: 50%;\n  /* height: 10%; */\n  &:hover {\n    color: rgb(192, 67, 43);\n  }\n"])));e.default=function(){var n=Object(w.b)(),e=Object(v.useState)(!1),t=Object(m.a)(e,2),c=t[0],i=t[1],r=Object(v.useState)(null),a=Object(m.a)(r,2),o=a[0],s=a[1],l=Object(w.c)(q.j),b=Object(w.c)(q.i),j=Object(w.c)(q.e),d=Object(w.c)(q.c),u=Object(w.c)(q.g);Object(v.useEffect)((function(){n(Object(P.h)()),null!==b&&alert(b),null!==l&&p(l)}),[n,b,l]);var p=function(n){i(!0),s(n)},h=function(){i(!1)};return u?Object(B.jsx)(H.a,{error:u}):d&&null!==j?Object(B.jsxs)(V,{children:[Object(B.jsxs)(W,{children:[Object(B.jsxs)(X,{children:[Object(B.jsx)("span",{children:"Product List"}),Object(B.jsx)(Y,{onClick:function(){return n(Object(P.b)())},children:"+ New Product"})]}),Object(B.jsxs)(Z,{children:[Object(B.jsx)(nn,{children:"ID"}),Object(B.jsx)(nn,{children:"Image"}),Object(B.jsx)(nn,{children:"Name"}),Object(B.jsx)(nn,{children:"Category"}),Object(B.jsx)(nn,{children:"In Stock"}),Object(B.jsx)(nn,{children:"Price"}),Object(B.jsx)(nn,{children:"Rating"}),Object(B.jsx)(nn,{children:"Created At"}),Object(B.jsx)(nn,{})]}),j.map((function(e){return Object(B.jsxs)(en,{children:[Object(B.jsx)(tn,{children:e._id}),Object(B.jsx)(tn,{children:Object(B.jsx)("img",{src:e.image,alt:"item.name"})}),Object(B.jsx)(tn,{children:e.name}),Object(B.jsx)(tn,{children:e.category}),Object(B.jsx)(tn,{children:e.countInStock}),Object(B.jsxs)(tn,{children:["$",e.price]}),Object(B.jsx)(tn,{children:null===e.rating?"NaN":"".concat(e.rating,"/").concat(e.numReviews)}),Object(B.jsx)(tn,{children:e.createdAt.split("T")[0]}),Object(B.jsxs)(tn,{children:[Object(B.jsx)(cn,{onClick:function(){return p(e)}}),"|",Object(B.jsx)(rn,{onClick:function(){return function(e){window.confirm("Are you sure you wish to delete this item?")&&n(Object(P.e)(e._id))}(e)}})]})]},e._id)}))]}),Object(B.jsx)(k.a,{show:c,children:Object(B.jsx)(G,{product:o,close:h})}),c&&Object(B.jsx)(C.a,{click:h})]}):Object(B.jsx)(y.a,{})}}}]);
//# sourceMappingURL=12.528063cf.chunk.js.map
(this.webpackJsonpjimmiepetshop=this.webpackJsonpjimmiepetshop||[]).push([[6],{108:function(n,e,t){"use strict";var i,a,r,c,s=t(6),o=t(55),d=(t(1),t(7)),l=t(8),b="grey",j=Object(l.a)(i||(i=Object(d.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),x=l.b.div(a||(a=Object(d.a)(["\n  position: relative;\n  margin: 20px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),p=l.b.input(r||(r=Object(d.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 15px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"])),b,b,j),u=l.b.label(c||(c=Object(d.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"])),b,j),f=t(2),h=["handleChange","label"];e.a=function(n){var e=n.handleChange,t=n.label,i=Object(o.a)(n,h);return Object(f.jsxs)(x,{children:[Object(f.jsx)(p,Object(s.a)({onChange:e},i)),t?Object(f.jsx)(u,{className:i.value.length?"shrink":"",children:t}):null]})}},109:function(n,e,t){"use strict";t.d(e,"e",(function(){return r})),t.d(e,"f",(function(){return c})),t.d(e,"j",(function(){return s})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return d})),t.d(e,"i",(function(){return l})),t.d(e,"a",(function(){return b})),t.d(e,"h",(function(){return j})),t.d(e,"g",(function(){return x})),t.d(e,"d",(function(){return p}));var i=t(24),a=function(n){return n.shop},r=Object(i.a)([a],(function(n){return n.collections})),c=Object(i.a)([a],(function(n){return n.directory})),s=Object(i.a)([a],(function(n){return n.product})),o=Object(i.a)([a],(function(n){return n.isFetching})),d=Object(i.a)([a],(function(n){return!!n.collections})),l=Object(i.a)([a],(function(n){return n.message})),b=Object(i.a)([a],(function(n){return n.imageMessage})),j=Object(i.a)([r],(function(n){return n?n.filter((function(n){return n._id<9})):[]})),x=Object(i.a)([a],(function(n){return n.error})),p=Object(i.a)([a],(function(n){return n.errorReview}))},110:function(n,e,t){"use strict";function i(n,e,t,i,a,r,c){try{var s=n[r](c),o=s.value}catch(d){return void t(d)}s.done?e(o):Promise.resolve(o).then(i,a)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(a,r){var c=n.apply(e,t);function s(n){i(c,a,r,s,o,"next",n)}function o(n){i(c,a,r,s,o,"throw",n)}s(void 0)}))}}t.d(e,"a",(function(){return a}))},112:function(n,e,t){"use strict";t(1);var i,a=t(7),r=t(8).b.div(i||(i=Object(a.a)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n"]))),c=t(2);e.a=function(n){var e=n.value,t=n.large,i=void 0!==t&&t;return Object(c.jsx)(r,{children:i?Object(c.jsx)(c.Fragment,{children:Array(5).fill("").map((function(n,t){return Object(c.jsx)("i",{style:{color:"#D69E2E"},className:e-t>.5?"fas fa-star fa-md":e-t===.5?"fas fa-star-half-alt fa-md":"far fa-star fa-md"},t)}))}):Object(c.jsx)(c.Fragment,{children:Array(5).fill("").map((function(n,t){return Object(c.jsx)("i",{style:{color:"#D69E2E"},className:e-t>.5?"fas fa-star fa-xs":e-t===.5?"fas fa-star-half-alt fa-xs":"far fa-star fa-xs"},t)}))})})}},113:function(n,e,t){"use strict";t(1);var i,a=t(7),r=t(8).b.div(i||(i=Object(a.a)(["\n  color: #BB371A;\n  background-color: #FED9CA;\n  padding: 12px;\n  font-size:15px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  /* height: 30px; */\n  width: 400px;\n\n"]))),c=t(2);e.a=function(n){var e=n.error;return Object(c.jsxs)(r,{children:[Object(c.jsx)("i",{className:"fa fa-times-circle"}),e]})}},123:function(n,e,t){"use strict";t.r(e);var i,a,r,c,s,o,d,l,b,j,x,p,u,f,h,O,m,g,v,w,y,k,C,z,F,N,A,E,R,S,I,D=t(31),T=t(1),B=t(20),q=t(112),M=t(51),P=t(5),_=t.n(P),J=t(110),W=t(52),V=t(6),Y=t(39),$=t(108),G=t(18),H=t(7),K=t(8),L=K.b.div(i||(i=Object(H.a)(["\n  display: flex;\n  background-color: #f6f4f1;\n  align-items: center;\n  /* padding: 30px; */\n  flex-direction: column;\n  width: 30%;\n  height: 0;\n  overflow-y: hidden;\n  transition: height .3s ease-in-out;\n  \n  form {\n    width: 90%;\n    \n    & button {\n      margin: 20px auto 0;\n    }\n  }\n  &.active {\n    height: 400px; \n    \n  }\n\n  @media screen and (max-width: 1200px) {\n    width: 50%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),Q=K.b.div(a||(a=Object(H.a)(["\n  font-weight: 300;\n  font-size: 20px;\n  font-family: 'Arima Madurai', cursive;\n  margin: 30px 0 15px;\n"]))),U=K.b.div(r||(r=Object(H.a)(["\n  direction: rtl;\n  display: flex;\n  justify-content: center;\n\n    input[type=radio] {\n      display: none\n    }\n  \n    label {\n      color: #bbb;\n      font-size: 18px;\n      padding: 0;\n      cursor: pointer;\n      -webkit-transition: all .3s ease-in-out;\n      transition: all .3s ease-in-out\n    }\n  \n    label:hover,\n    label:hover ~ label,\n    input[type=radio]:checked ~ label {\n      color: #D69E2E\n    }\n"]))),X=K.b.div(c||(c=Object(H.a)(["\n  margin: 25px 0 10px;\n  display: flex;\n  flex-direction: column;\n  span {\n    font-size: 15px;\n    color: black;\n  }\n  textarea {\n    padding: 5px;\n  }\n"]))),Z=t(2),nn=function(n){var e=n.show,t=n.close,i=n.productId,a=Object(B.b)(),r=Object(T.useState)({rating:0,title:"",comment:""}),c=Object(D.a)(r,2),s=c[0],o=c[1],d=s.rating,l=s.title,b=s.comment,j=function(n){var e=n.target,t=e.name,i=e.value;o(Object(V.a)(Object(V.a)({},s),{},Object(W.a)({},t,i))),console.log(d)},x=function(){var n=Object(J.a)(_.a.mark((function n(e){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),d>0?(t(),a(Object(G.w)(i,{comment:b,title:l,rating:Number(d)}))):alert("Please choose a rating");case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(Z.jsxs)(L,{className:e?"active":"",children:[Object(Z.jsx)(Q,{children:"Write Your Review"}),Object(Z.jsxs)("form",{onSubmit:x,children:[Object(Z.jsxs)(U,{children:[Object(Z.jsx)("input",{id:"star-5",type:"radio",name:"rating",value:"5",onChange:j}),Object(Z.jsx)("label",{htmlFor:"star-5",title:"5 stars",children:Object(Z.jsx)("i",{className:"fas fa-star fa-md","aria-hidden":"true"})}),Object(Z.jsx)("input",{id:"star-4",type:"radio",name:"rating",value:"4",onChange:j}),Object(Z.jsx)("label",{htmlFor:"star-4",title:"4 stars",children:Object(Z.jsx)("i",{className:"fas fa-star fa-md","aria-hidden":"true"})}),Object(Z.jsx)("input",{id:"star-3",type:"radio",name:"rating",value:"3",onChange:j}),Object(Z.jsx)("label",{htmlFor:"star-3",title:"3 stars",children:Object(Z.jsx)("i",{className:"fas fa-star fa-md","aria-hidden":"true"})}),Object(Z.jsx)("input",{id:"star-2",type:"radio",name:"rating",value:"2",onChange:j}),Object(Z.jsx)("label",{htmlFor:"star-2",title:"2 stars",children:Object(Z.jsx)("i",{className:"fas fa-star fa-md","aria-hidden":"true"})}),Object(Z.jsx)("input",{id:"star-1",type:"radio",name:"rating",value:"1",onChange:j}),Object(Z.jsx)("label",{htmlFor:"star-1",title:"1 star",children:Object(Z.jsx)("i",{className:"fas fa-star fa-md","aria-hidden":"true"})})]}),Object(Z.jsx)($.a,{type:"text",name:"title",value:l,onChange:j,label:"Title",required:!0}),Object(Z.jsxs)(X,{children:[Object(Z.jsx)("span",{children:"Comment"}),Object(Z.jsx)("textarea",{name:"comment",onChange:j,value:b,rows:"3",required:!0})]}),Object(Z.jsx)(Y.a,{type:"submit",children:"Submit"})]})]})},en=t(113),tn=t(109),an=t(17),rn=t(116),cn=K.b.div(s||(s=Object(H.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n"]))),sn=K.b.div(o||(o=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  width: 95%;\n"]))),on=K.b.div(d||(d=Object(H.a)(["\n  font-weight: 300;\n  font-size: 28px;\n  font-family: 'Arima Madurai', cursive;\n  margin-bottom: 20px;\n"]))),dn=K.b.hr(l||(l=Object(H.a)(["\n  border-top: 1px solid lightgray;\n  width: 100%;\n  margin: 10px 0;\n"]))),ln=K.b.div(b||(b=Object(H.a)(["\n  display: flex;\n  width: 100%;\n  font-size: 15px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 20px;\n  @media screen and (max-width: 800px) {\n    font-size: 12px;\n  }\n"]))),bn=K.b.div(j||(j=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  /* border-right: 1px solid lightgray; */\n  .verified-buyer {\n    display: flex;\n    gap: 5px;\n    color: #3A6351;\n    font-weight: bold;\n  }\n  @media screen and (max-width: 800px) {\n    width: 25%;\n    .verified-buyer {\n      font-size: 10px;\n    }\n  }\n"]))),jn=Object(K.b)(rn.a)(x||(x=Object(H.a)(["\n  margin-top: 5px;\n"]))),xn=Object(K.b)(rn.c)(p||(p=Object(H.a)(["\n  margin-top: 5px;\n"]))),pn=Object(K.b)(rn.e)(u||(u=Object(H.a)(["\n  margin-top: 5px;\n"]))),un=K.b.div(f||(f=Object(H.a)(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px;\n  gap: 5px;\n  margin-bottom: 40px;\n  @media screen and (max-width: 800px) {\n    width: 100%;\n    padding: 0;\n    margin-bottom: 30px;\n  }\n"]))),fn=K.b.div(h||(h=Object(H.a)(["\n  width: 20%;\n  color: gray;\n  text-align: right; \n  \n  @media screen and (max-width: 800px) {\n    font-size: 10px;\n    width: 100%;\n    text-align: left;\n  }\n"]))),hn=K.b.div(O||(O=Object(H.a)(["\n  background-color: #f6f4f1;\n  display: flex;\n  padding: 5px;\n  gap: 5px;\n  cursor: pointer;\n  font-weight: 600;\n"]))),On=K.b.div(m||(m=Object(H.a)(["\n  display: flex;\n  width: 80%;\n  \n  @media screen and (max-width: 800px) {\n    width: 75%;\n    flex-direction: column-reverse;\n    padding: 0 15px;\n    gap: 5px;\n  }\n"]))),mn=function(n){var e=n.reviews,t=n.rating,i=n.numReviews,a=n.productId,r=Object(B.c)(an.a),c=Object(B.c)(tn.d),s=Object(B.c)(tn.i),o=Object(T.useState)(!1),d=Object(D.a)(o,2),l=d[0],b=d[1];Object(T.useEffect)((function(){s&&alert(s)}),[s]);return Object(Z.jsxs)(cn,{children:[Object(Z.jsx)(on,{children:"Customer Reviews"}),Object(Z.jsxs)(sn,{children:[e.length>0?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(q.a,{value:t,large:!0}),Object(Z.jsxs)("span",{children:["Based on ",i," reviews"]})]}):Object(Z.jsx)("span",{children:"There are no reviews yet"}),c&&Object(Z.jsx)(en.a,{error:c}),r&&Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(hn,{onClick:function(){return b(!l)},children:[l?Object(Z.jsx)(pn,{}):Object(Z.jsx)(xn,{}),Object(Z.jsx)("span",{children:"Write Review"})]}),Object(Z.jsx)(nn,{show:l,close:function(){b(!1)},productId:a}),Object(Z.jsx)(dn,{})]}),e.length>0&&e.map((function(n){return Object(Z.jsxs)(ln,{children:[Object(Z.jsxs)(bn,{children:[Object(Z.jsx)("span",{children:n.name}),Object(Z.jsxs)("span",{className:"verified-buyer",children:[Object(Z.jsx)(jn,{})," Verified Buyer"]})]}),Object(Z.jsxs)(On,{children:[Object(Z.jsxs)(un,{children:[Object(Z.jsx)(q.a,{value:n.rating}),Object(Z.jsx)("span",{children:Object(Z.jsx)("strong",{children:n.title})}),Object(Z.jsx)("span",{children:n.comment})]}),Object(Z.jsx)(fn,{children:n.createdAt.split("T")[0]})]})]},n._id)}))]})]})},gn=t(53),vn=t(54),wn=t(56),yn=t(43),kn=t(35),Cn=K.b.div(g||(g=Object(H.a)(["\n  padding: 100px 0 50px 0;\n  width: 100%;\n  @media screen and (max-width: 800px) {\n    padding-top: 80px;\n  }\n"]))),zn=K.b.div(v||(v=Object(H.a)(["\n  height: fit-content;\n  background-color: #f6f4f1;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n  width: 100%;\n  /* align-items: center; */\n  padding: 20px 0;\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    \n  }\n"]))),Fn=K.b.img(w||(w=Object(H.a)(["\n  width: 35%;\n  margin: auto 100px;\n  @media screen and (max-width: 800px) {\n    width: 80%;\n    margin: 20px auto;\n  }\n"]))),Nn=K.b.div(y||(y=Object(H.a)(["\n  margin: 70px 0;\n  width: 30%;\n  @media screen and (max-width: 800px) {\n    width: 100%;\n    margin: 0;\n    padding: 20px;\n  }\n"]))),An=K.b.div(k||(k=Object(H.a)(["\n  font-size: x-large;\n  font-weight: bold;\n"]))),En=K.b.div(C||(C=Object(H.a)(["\n  font-size: large;\n  padding: 10px 0;\n"]))),Rn=K.b.div(z||(z=Object(H.a)(["\n  font-size: medium;\n"]))),Sn=Object(K.b)(Y.a)(F||(F=Object(H.a)(["\n  width: 100%;\n  margin-top: 30px;\n"]))),In=K.b.div(N||(N=Object(H.a)(["\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid grey;\n  \n"]))),Dn=K.b.button(A||(A=Object(H.a)(["\n  width: 15px;\n  text-align: center;\n  border: none;\n  background-color: transparent;\n  \n"]))),Tn=K.b.input(E||(E=Object(H.a)(["\n  width: 50px;\n  border: none;\n  text-align: center;\n  background: transparent;\n"]))),Bn=K.b.div(R||(R=Object(H.a)(["\n  width: 30%;\n  background-color: white;\n  color: balck;\n  height: 50px;\n  font-size: 18px;\n  text-align: center;\n  padding-top: 12px;\n  font-weight: bold;\n"]))),qn=K.b.hr(S||(S=Object(H.a)(["\n  border-top: 2px solid lightgray;\n  margin: 20px 0;\n"]))),Mn=K.b.div(I||(I=Object(H.a)(["\n  display: flex;\n  gap: 5px;\n  span {\n    padding-top: 9px;\n    color: gray;\n    font-size: 13px;\n  }\n"])));e.default=function(n){var e=n.match.params.id,t=Object(B.c)(tn.j),i=Object(B.c)(tn.i),a=Object(B.c)(tn.b),r=Object(B.c)(tn.g),c=Object(B.b)(),s=Object(T.useState)(1),o=Object(D.a)(s,2),d=o[0],l=o[1],b=Object(T.useState)(!1),j=Object(D.a)(b,2),x=j[0],p=j[1];Object(T.useEffect)((function(){c(Object(G.n)({productId:e})),null!==i&&alert(i)}),[c,e,i]);var u=function(){p(!1)};return r?Object(Z.jsx)(yn.a,{error:r}):a||!t?Object(Z.jsx)(M.a,{}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(Cn,{children:[Object(Z.jsxs)(zn,{children:[Object(Z.jsx)(Fn,{src:t.image,alt:t.name}),Object(Z.jsxs)(Nn,{children:[Object(Z.jsx)(An,{children:t.name}),Object(Z.jsx)(En,{children:t.description}),Object(Z.jsxs)(Rn,{children:["$",t.price]}),Object(Z.jsxs)(Mn,{children:[Object(Z.jsx)(q.a,{value:t.rating}),Object(Z.jsxs)("span",{children:[t.numReviews," reviews"]})]}),Object(Z.jsx)(qn,{}),0===t.countInStock?Object(Z.jsx)(Bn,{children:"Out Of Stock"}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)(In,{children:[Object(Z.jsx)(Dn,{onClick:function(){1!==d&&l(d-1)},children:"\u276e"}),Object(Z.jsx)(Tn,{value:d,readOnly:!0}),Object(Z.jsx)(Dn,{onClick:function(){d!==t.countInStock&&l(d+1)},children:"\u276f"})]}),Object(Z.jsx)(Sn,{onClick:function(){c(Object(kn.a)({cartItemToAdd:t,quantity:d})),p(!0)},children:"ADD TO CART"})]})]})]}),Object(Z.jsx)(mn,{reviews:t.reviews,rating:t.rating,numReviews:t.numReviews,productId:t._id})]}),Object(Z.jsx)(gn.a,{show:x,children:Object(Z.jsx)(wn.a,{close:u})}),x&&Object(Z.jsx)(vn.a,{click:u})]})}}}]);
//# sourceMappingURL=6.70ddd690.chunk.js.map
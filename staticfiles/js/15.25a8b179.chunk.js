(this.webpackJsonpjimmiepetshop=this.webpackJsonpjimmiepetshop||[]).push([[15],{111:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return d})),t.d(e,"d",(function(){return r})),t.d(e,"b",(function(){return a}));var i=t(24),c=function(n){return n.order},s=Object(i.a)([c],(function(n){return n.order})),d=Object(i.a)([c],(function(n){return n.orderList})),r=Object(i.a)([c],(function(n){return n.message})),a=(Object(i.a)([c],(function(n){return n.loading})),Object(i.a)([c],(function(n){return n.error})))},128:function(n,e,t){"use strict";t.r(e);var i,c,s,d,r,a,j,b,p,l,h,o,x,O,m,u,f,g,w,v=t(1),y=t(20),A=t(111),P=t(51),T=t(43),z=t(29),D=t(118),S=t(7),$=t(8),N=t(27),k=$.b.div(i||(i=Object(S.a)(["\n  padding: 120px 0 50px 0;\n  width: 100%;\n"]))),M=$.b.div(c||(c=Object(S.a)(["\n  width: 100%;\n  min-height: 90vh;\n  display: flex;\n  gap: 70px;\n  justify-content: center;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n"]))),C=$.b.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  @media screen and (max-width: 1024px) {\n    width: 60%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]))),_=$.b.div(d||(d=Object(S.a)(["\n  font-weight: 300;\n  font-size: 35px;\n  letter-spacing: .1rem;\n  font-family: 'Arima Madurai', cursive;\n"]))),I=$.b.div(r||(r=Object(S.a)(["\n  background-color: #f6f4f1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 5px 15px;\n"]))),J=$.b.div(a||(a=Object(S.a)(["\n  width: 40%;\n  &:last-child {\n    width: 20%;\n  }\n"]))),L=$.b.div(j||(j=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  /* align-items: center; */\n  padding: 20px 15px;\n  font-size: 15px;\n  color: grey;\n"]))),q=$.b.div(b||(b=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  &:last-child {\n    width: 20%;\n    text-transform: capitalize;\n  }\n"]))),E=$.b.hr(p||(p=Object(S.a)(["\n  border-top: 2px solid lightgray;\n  margin: 20px 0;\n"]))),F=$.b.div(l||(l=Object(S.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 20px;\n  color: grey;\n"]))),B=$.b.div(h||(h=Object(S.a)(["\n  width: 15%;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),G=$.b.div(o||(o=Object(S.a)(["\n  width: 40%;\n"]))),H=$.b.div(x||(x=Object(S.a)(["\n  width: 20%;\n"]))),K=$.b.div(O||(O=Object(S.a)(["\n  width: 20%;\n  font-size: 15px;\n"]))),Q=Object($.b)(N.b)(m||(m=Object(S.a)(["\n  width: 5%;\n  color: grey;\n  &:hover{\n    color: rgb(192, 67, 43);\n  }\n"]))),R=$.b.div(u||(u=Object(S.a)(["\n  width: 20%;\n  background-color: #f6f4f1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  height: fit-content;\n  @media screen and (max-width: 1024px) {\n    width: 30%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),U=$.b.div(f||(f=Object(S.a)(["\n  font-weight: 300;\n  font-size: 28px;\n  font-family: 'Arima Madurai', cursive;\n  margin-bottom: 10px;\n"]))),V=$.b.div(g||(g=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n"]))),W=$.b.span(w||(w=Object(S.a)(["\n  font-size: large;\n"]))),X=t(2);e.default=function(n){var e=n.match.params.id,t=Object(y.b)(),i=Object(y.c)(A.b),c=Object(y.c)(A.a);return Object(v.useEffect)((function(){t(Object(z.n)(e))}),[t,e]),i?Object(X.jsx)(T.a,{error:i}):null===i&&null===c?Object(X.jsx)(P.a,{}):Object(X.jsx)(k,{children:Object(X.jsxs)(M,{children:[Object(X.jsxs)(C,{children:[Object(X.jsx)(_,{children:"Order Details"}),Object(X.jsxs)(I,{children:[Object(X.jsx)(J,{children:"Information"}),Object(X.jsx)(J,{children:"Shipping To"}),Object(X.jsx)(J,{children:"Payment Methods"})]}),Object(X.jsxs)(L,{children:[Object(X.jsxs)(q,{children:[Object(X.jsxs)("span",{children:["Date Ordered: ",c.createdAt.split("T")[0]]}),Object(X.jsxs)("span",{children:["Order Status: ",c.isDelivered?"Delivered ".concat(c.deliveredAt.split("T")[0]):"Processing"]}),Object(X.jsxs)("span",{children:["Order Number: ",c._id]})]}),Object(X.jsxs)(q,{children:[Object(X.jsxs)("span",{children:[c.shippingAddress.fName," ",c.shippingAddress.lName]}),Object(X.jsx)("span",{children:c.shippingAddress.phoneNumber}),c.shippingAddress.address2&&Object(X.jsx)("span",{children:c.shippingAddress.address2}),Object(X.jsx)("span",{children:c.shippingAddress.address1}),Object(X.jsxs)("span",{children:[c.shippingAddress.city," ",c.shippingAddress.province," ",c.shippingAddress.country," ",c.shippingAddress.postalCode]})]}),Object(X.jsxs)(q,{children:[Object(X.jsx)("span",{children:c.paymentMethod}),Object(X.jsxs)("span",{children:["Paid Status: ",c.isPaid?c.paidAt.split("T")[0]:"Not Paid / Problem with payment"]}),Object(X.jsxs)("span",{children:["Amount: $",c.totalPrice]})]})]}),Object(X.jsx)(E,{}),c.orderItems.map((function(n){return Object(X.jsxs)(F,{children:[Object(X.jsx)(B,{children:Object(X.jsx)("img",{src:n.image,alt:"item"})}),Object(X.jsx)(G,{children:n.name}),Object(X.jsxs)(H,{children:["x ",n.qty]}),Object(X.jsxs)(K,{children:["CAD$",n.price]}),Object(X.jsx)(Q,{to:"/product/".concat(n._id),children:Object(X.jsx)(D.a,{})})]},n._id)}))]}),Object(X.jsxs)(R,{children:[Object(X.jsx)(U,{children:"Payment Total"}),Object(X.jsxs)(V,{children:[Object(X.jsx)("span",{children:Object(X.jsx)("strong",{children:"Subtotal:"})}),Object(X.jsxs)("span",{children:["$",c.itemsPrice]})]}),Object(X.jsxs)(V,{children:[Object(X.jsx)("span",{children:Object(X.jsx)("strong",{children:"Tax(13%):"})}),Object(X.jsxs)("span",{children:["$",c.taxPrice]})]}),Object(X.jsxs)(V,{children:[Object(X.jsx)("span",{children:Object(X.jsx)("strong",{children:"Shipping:"})}),Object(X.jsx)("span",{children:0===c.shippingPrice?"Free Shipping":"$".concat(c.shippingPrice)})]}),Object(X.jsx)(E,{}),Object(X.jsxs)(V,{children:[Object(X.jsx)(W,{children:Object(X.jsx)("strong",{children:"TOTAL"})}),Object(X.jsxs)(W,{children:["CAD$",c.totalPrice]})]})]})]})})}}}]);
//# sourceMappingURL=15.25a8b179.chunk.js.map
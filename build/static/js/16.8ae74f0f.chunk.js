(this.webpackJsonpjimmiepetshop=this.webpackJsonpjimmiepetshop||[]).push([[16],{129:function(n,e,i){"use strict";i.r(e);var t,c,d,s,r,a,j,l=i(1),b=i(20),h=i(51),o=i(43),p=i(17),x=i(21),O=i(7),u=i(8),f=u.b.div(t||(t=Object(O.a)(["\n  padding: 120px 0 50px 0;\n  width: 100%;\n"]))),m=u.b.div(c||(c=Object(O.a)(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 30px auto;\n"]))),w=u.b.div(d||(d=Object(O.a)(["\n  font-weight: 300;\n  font-size: 35px;\n  letter-spacing: .1rem;\n  font-family: 'Arima Madurai', cursive;\n"]))),g=u.b.div(s||(s=Object(O.a)(["\n  background-color: #f6f4f1;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding: 5px 15px;\n  font-weight: 600;\n"]))),v=u.b.div(r||(r=Object(O.a)(["\n  width: 20%;\n\n  &:first-child{\n    width: 10%;\n  }\n  \n  &:nth-child(2){\n    width: 15%;\n  }\n\n  &:last-child{\n    width: 15%;\n  }\n"]))),y=u.b.div(a||(a=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  font-size: 15px;\n  width: 100%;\n  align-items: center;\n  &:nth-child(even){\n    background-color: #EEEEEE;\n  }\n"]))),A=u.b.div(j||(j=Object(O.a)(["\n  width: 20%;\n\n  &:first-child{\n    width: 10%;\n  }\n\n  &:nth-child(2){\n    width: 15%;\n  }\n\n  &:last-child{\n    width: 15%;\n  }\n  select {\n    background-color: black;\n    color: white;\n    width: 70px;\n    padding: 3px 5px;\n  }\n"]))),E=i(2);e.default=function(){var n=Object(b.b)(),e=Object(b.c)(p.c),i=Object(b.c)(p.d),t=Object(b.c)(p.b);Object(l.useEffect)((function(){n(Object(x.e)()),null!==i&&alert(i)}),[n,i]);return t?Object(E.jsx)(o.a,{error:t}):t||e?Object(E.jsx)(f,{children:Object(E.jsxs)(m,{children:[Object(E.jsx)(w,{children:"User List"}),Object(E.jsxs)(g,{children:[Object(E.jsx)(v,{children:"ID"}),Object(E.jsx)(v,{children:"Display Name"}),Object(E.jsx)(v,{children:"Email"}),Object(E.jsx)(v,{children:"Created At"}),Object(E.jsx)(v,{children:"Last Signin"}),Object(E.jsx)(v,{children:"Is Admin"})]}),e.map((function(e){return Object(E.jsxs)(y,{children:[Object(E.jsx)(A,{children:e._id}),Object(E.jsx)(A,{children:e.name}),Object(E.jsx)(A,{children:e.email}),Object(E.jsx)(A,{children:e.createdAt.split("T")[0]}),Object(E.jsx)(A,{children:e.lastLogin?e.lastLogin.split("T")[0]:"NaN"}),Object(E.jsx)(A,{children:Object(E.jsxs)("select",{name:"isAdmin",value:e.isAdmin,onChange:function(){return function(e){e.isAdmin?window.confirm("Are you sure you want to remove this user from admin ?")&&n(Object(x.b)(e._id,{isAdmin:!1})):window.confirm("Are you sure you want to make this user an admin ?")&&n(Object(x.b)(e._id,{isAdmin:!0}))}(e)},children:[Object(E.jsx)("option",{value:"true",children:"True"}),Object(E.jsx)("option",{value:"false",children:"False"})]})})]},e._id)}))]})}):Object(E.jsx)(h.a,{})}}}]);
//# sourceMappingURL=16.8ae74f0f.chunk.js.map
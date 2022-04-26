"use strict";(self.webpackChunklogin=self.webpackChunklogin||[]).push([[119],{1687:function(e,n,t){t.d(n,{C:function(){return u}});var r=t(5861),i=t(7757),s=t.n(i),o=t(4569),a=t.n(o),c=(t(4961),"https://ymissing.herokuapp.com/api"),u=function(){var e=(0,r.Z)(s().mark((function e(n,t,r){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a()({method:n,url:c+t,data:r});case 2:return i=e.sent,e.abrupt("return",i.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},8556:function(e,n,t){t.d(n,{dT:function(){return u},Z8:function(){return c},_C:function(){return l}});var r=t(5861),i=t(7757),s=t.n(i),o=t(1687),a={auth:(0,t(4942).Z)({login:{method:"POST",url:"/auth/login"},signup:{method:"POST",url:"/auth/signup"},forgot:{method:"POST",url:"/auth/forgot"},reset:{method:"POST",url:"/auth/reset"}},"signup",{method:"POST",url:"/auth/register"}),afterAuth:{markFound:{method:"GET",url:"/admin/found"},listFound:{method:"GET",url:"/admin/missing/found"}}},c=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.C)(a.auth.login.method,a.auth.login.url,n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.C)(a.auth.forgot.method,a.auth.forgot.url,n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.C)(a.auth.reset.method,a.auth.reset.url,n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1609:function(e,n,t){var r=t(9439),i=t(2791),s=t(2813),o=t(1358),a=t(7749),c=t(3020),u=t(5469),l=t(6871),d=(t(86),t(6030)),h=t(4947),f=t(184);n.Z=function(){var e=(0,d.I0)(),n=(0,d.v9)((function(e){return e.reducers})),t=(Object.keys(n).length,(0,i.useState)("")),p=(0,r.Z)(t,2),g=(p[0],p[1]),m=s.Z.Title,x=(0,l.s0)(),v=(0,l.s0)();(0,i.useEffect)((function(){var e=(new Date).getHours();g(e<12?"Morning":e<=18&&e>=12?"Afternoon":"Good Night")}),[]);var y=(0,f.jsx)("div",{children:(0,f.jsx)(o.Z,{type:"danger",onClick:function(){e((0,h.e)({})),v("/")},children:(0,f.jsx)("strong",{children:"Logout"})})}),Z=new Date,j=Z.getHours()+":"+Z.getMinutes()+":"+Z.getSeconds();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(a.Z,{className:"site-page-header",title:(0,f.jsxs)(m,{level:4,style:{color:"white",cursor:"pointer"},children:[" ",(0,f.jsxs)("strong",{onClick:function(){v("/")},children:[" ",(0,f.jsx)("u",{children:"Missing Child Finder"})," "]})]}),tags:(0,f.jsxs)("div",{style:{fontSize:15,color:"wheat"},children:[" ",j," "]}),extra:0===Object.keys(n).length?[(0,f.jsx)(o.Z,{type:"primary",onClick:function(){x("/signup")},children:"Sign Up"},"3"),(0,f.jsx)(o.Z,{onClick:function(){v("/")},children:"Login"},"2")]:[(0,f.jsxs)(c.Z,{content:y,children:[(0,f.jsx)(u.C,{src:"https://joeschmoe.io/api/v1/random"}),(0,f.jsxs)("strong",{className:"username",children:[" ",n.details.firstname," ",n.details.lastname,"  "]})]})]})})}},9119:function(e,n,t){t.r(n);var r=t(5861),i=t(9439),s=t(7757),o=t.n(s),a=t(2791),c=t(2813),u=t(3383),l=t(570),d=t(3099),h=t(166),f=t(1358),p=t(1333),g=t(6871),m=t(1609),x=(t(4569),t(1830)),v=t.n(x),y=t(6030),Z=t(4947),j=t(8556),w=t(184);n.default=function(){var e=(0,g.s0)(),n=(0,y.v9)((function(e){return e.reducers}));(0,a.useEffect)((function(){Object.keys(n).length>0&&e("/home")}),[]);var t=(0,y.I0)(),s=c.Z.Title,x=(0,a.useState)(!1),b=(0,i.Z)(x,2),k=b[0],C=b[1],O=(0,g.s0)(),S=(0,g.s0)(),P=function(){var n=(0,r.Z)(o().mark((function n(r){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return C(!0),n.next=3,(0,j.Z8)(r);case 3:i=n.sent,sessionStorage.setItem("MissingData",JSON.stringify([])),"error"===i.type?v().fire("Error",i.msg,"error"):(v().fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500,toast:"true"}),t((0,Z.e)(i)),e("/home")),C(!1);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m.Z,{}),(0,w.jsxs)(u.Z,{title:(0,w.jsx)(s,{level:3,style:{color:"#007373"},children:"Sign In"}),bordered:!0,style:{margin:"auto",marginTop:40},className:"card",children:[" ",(0,w.jsx)("br",{}),(0,w.jsx)(l.Z,{onFinish:P,children:(0,w.jsxs)(d.Z,{direction:"vertical",children:[(0,w.jsx)(l.Z.Item,{name:"email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,w.jsx)(h.Z,{placeholder:"Email Address",bordered:!0,allowClear:!0,size:"large",style:{padding:5,borderRadius:10,width:300}})}),(0,w.jsx)(l.Z.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:(0,w.jsx)(h.Z.Password,{placeholder:"Password",bordered:!0,size:"large",style:{padding:5,marginTop:2,borderRadius:10}})}),(0,w.jsx)(f.Z,{htmlType:"submit",type:"primary",className:"login-form-button",loading:k,children:"Login"}),(0,w.jsx)(f.Z,{type:"link",onClick:function(){S("/forgetpass")},children:"Forget Password?"}),(0,w.jsx)(p.Z,{}),"New User?"," ",(0,w.jsxs)(f.Z,{type:"link",onClick:function(){O("/signup")},children:[" ",(0,w.jsx)("strong",{children:"Sign Up"})," "]})]})})]})]})}},4947:function(e,n,t){t.d(n,{e:function(){return i}});var r=t(4871),i=function(e){return{type:r.x,payload:e}}},1333:function(e,n,t){var r=t(7462),i=t(4942),s=t(2791),o=t(1694),a=t.n(o),c=t(3785),u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t};n.Z=function(e){var n,t=s.useContext(c.E_),o=t.getPrefixCls,l=t.direction,d=e.prefixCls,h=e.type,f=void 0===h?"horizontal":h,p=e.orientation,g=void 0===p?"center":p,m=e.orientationMargin,x=e.className,v=e.children,y=e.dashed,Z=e.plain,j=u(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),w=o("divider",d),b=g.length>0?"-".concat(g):g,k=!!v,C="left"===g&&null!=m,O="right"===g&&null!=m,S=a()(w,"".concat(w,"-").concat(f),(n={},(0,i.Z)(n,"".concat(w,"-with-text"),k),(0,i.Z)(n,"".concat(w,"-with-text").concat(b),k),(0,i.Z)(n,"".concat(w,"-dashed"),!!y),(0,i.Z)(n,"".concat(w,"-plain"),!!Z),(0,i.Z)(n,"".concat(w,"-rtl"),"rtl"===l),(0,i.Z)(n,"".concat(w,"-no-default-orientation-margin-left"),C),(0,i.Z)(n,"".concat(w,"-no-default-orientation-margin-right"),O),n),x),P=(0,r.Z)((0,r.Z)({},C&&{marginLeft:m}),O&&{marginRight:m});return s.createElement("div",(0,r.Z)({className:S},j,{role:"separator"}),v&&s.createElement("span",{className:"".concat(w,"-inner-text"),style:P},v))}}}]);
//# sourceMappingURL=119.57634d1b.chunk.js.map
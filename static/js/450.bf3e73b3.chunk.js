"use strict";(self.webpackChunklogin=self.webpackChunklogin||[]).push([[450],{1687:function(e,n,t){t.d(n,{C:function(){return l}});var s=t(5861),r=t(7757),i=t.n(r),o=t(4569),c=t.n(o),a=(t(4961),"https://ymissing.herokuapp.com/api"),l=function(){var e=(0,s.Z)(i().mark((function e(n,t,s){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()({method:n,url:a+t,data:s});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t,s){return e.apply(this,arguments)}}()},1609:function(e,n,t){var s=t(9439),r=t(2791),i=t(2813),o=t(1358),c=t(7749),a=t(3020),l=t(5469),u=t(6871),d=(t(86),t(6030)),h=t(4947),x=t(184);n.Z=function(){var e=(0,d.I0)(),n=(0,d.v9)((function(e){return e.reducers})),t=(Object.keys(n).length,(0,r.useState)("")),j=(0,s.Z)(t,2),f=(j[0],j[1]),g=i.Z.Title,m=(0,u.s0)(),p=(0,u.s0)();(0,r.useEffect)((function(){var e=(new Date).getHours();f(e<12?"Morning":e<=18&&e>=12?"Afternoon":"Good Night")}),[]);var Z=(0,x.jsx)("div",{children:(0,x.jsx)(o.Z,{type:"danger",onClick:function(){e((0,h.e)({})),p("/")},children:(0,x.jsx)("strong",{children:"Logout"})})}),v=new Date,b=v.getHours()+":"+v.getMinutes()+":"+v.getSeconds();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c.Z,{className:"site-page-header",title:(0,x.jsxs)(g,{level:4,style:{color:"white",cursor:"pointer"},children:[" ",(0,x.jsxs)("strong",{onClick:function(){p("/")},children:[" ",(0,x.jsx)("u",{children:"Missing Child Finder"})," "]})]}),tags:(0,x.jsxs)("div",{style:{fontSize:15,color:"wheat"},children:[" ",b," "]}),extra:0===Object.keys(n).length?[(0,x.jsx)(o.Z,{type:"primary",onClick:function(){m("/signup")},children:"Sign Up"},"3"),(0,x.jsx)(o.Z,{onClick:function(){p("/")},children:"Login"},"2")]:[(0,x.jsxs)(a.Z,{content:Z,children:[(0,x.jsx)(l.C,{src:"https://joeschmoe.io/api/v1/random"}),(0,x.jsxs)("strong",{className:"username",children:[" ",n.details.firstname," ",n.details.lastname,"  "]})]})]})})}},6450:function(e,n,t){t.r(n);var s=t(5861),r=t(9439),i=t(7757),o=t.n(i),c=(t(4569),t(2791)),a=t(6030),l=t(2813),u=t(3383),d=t(6106),h=t(914),x=t(1358),j=t(2797),f=t(1609),g=t(1654),m=(t(1830),t(1687),t(6871)),p=t(184);n.default=function(){var e=(0,c.useState)(!0),n=(0,r.Z)(e,2),t=n[0],i=n[1],Z=l.Z.Title,v=u.Z.Meta,b=(0,c.useState)([]),y=(0,r.Z)(b,2),C=y[0],k=y[1],w=((0,a.v9)((function(e){return e.reducers})),(0,m.s0)()),F=function(){var e=(0,s.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(sessionStorage.getItem("MissingData")),k(n),i(!1),console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){F()}),[]);var S=function(){var e=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=C).pop(n),F(),w("/listmissing"),sessionStorage.setItem("MissingData",JSON.stringify(t));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)(f.Z,{}),(0,p.jsx)(j.Z,{children:t?"wait for a while, data is loading...":(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:"missinglisthead",children:"Missing Child List"})," ",(0,p.jsx)("hr",{}),(0,p.jsx)(d.Z,{justify:"start",children:C.map((function(e,n){return(0,p.jsx)(g.default,{className:"site-layout",style:{marginLeft:90},children:(0,p.jsxs)(h.Z,{span:6,children:[(0,p.jsxs)(u.Z,{hoverable:!0,style:{width:260,backgroundColor:"#CDE4ED",border:"1px solid red"},cover:(0,p.jsx)("img",{src:e.image,alt:"Photo",className:"missingCard"}),title:(0,p.jsx)(Z,{level:3,style:{color:"red",fontSize:40},children:e.status}),children:[(0,p.jsx)(v,{title:e.name,description:(0,p.jsxs)(p.Fragment,{children:[e.date," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Gender:"})," ",e.male," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Missing Place:"})," ",e.missing," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Missing Time:"})," ",e.Datetime," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Clothes Worn:"})," ",e.Worn," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Contact Person:"})," ",e.contact_person," ",(0,p.jsx)("br",{}),(0,p.jsx)("b",{children:"Contact No."})," ",e.contact_number]})})," ",(0,p.jsx)("br",{}),(0,p.jsx)(x.Z,{onClick:function(){return S(n)},type:"danger",children:"Delete"})]},n)," ",(0,p.jsx)("br",{})]})})}))})]})})]})}},2797:function(e,n,t){var s=t(586),r=t(9333),i=t(1333),o=t(1358),c=t(9529),a=t(9031),l=t(4571),u=t(6349),d=t(6030),h=t(6871),x=(t(2791),t(184)),j=s.Z.Content,f=(s.Z.Footer,s.Z.Sider);s.Z.Header;n.Z=function(e){var n=(0,h.s0)();(0,d.v9)((function(e){return e.reducers}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(s.Z,{hasSider:!0,children:[(0,x.jsxs)(f,{style:{overflow:"auto",height:"125vh",position:"fixed",left:0,top:80,bottom:0,backgroundColor:"#FFFFFF"},children:[(0,x.jsx)("div",{className:"logo"}),(0,x.jsxs)(r.Z,{onClick:function(e){n(e.key)},mode:"inline",defaultSelectedKeys:["1"],style:{fontSize:20,fontWeight:500,marginTop:20},children:[(0,x.jsx)(r.Z.Item,{icon:(0,x.jsx)(c.Z,{}),children:"Home"},"/home"),(0,x.jsx)(r.Z.Item,{icon:(0,x.jsx)(a.Z,{}),children:"Post Case"},"/postmissing"),(0,x.jsx)(r.Z.Item,{icon:(0,x.jsx)(l.Z,{}),children:"Find Cases"},"/listmissing"),(0,x.jsx)(r.Z.Item,{icon:(0,x.jsx)(a.Z,{}),children:"FAQ"},"/FAQ"),(0,x.jsx)(r.Z.Item,{icon:(0,x.jsx)(u.Z,{}),children:"About Us"},"/about"),(0,x.jsx)(r.Z.Item,{icon:(0,x.jsx)(u.Z,{}),children:"About Project"},"/aboutProject"),(0,x.jsx)(i.Z,{})]}),(0,x.jsx)(o.Z,{type:"danger",style:{marginLeft:45,marginTop:70},children:"Logout"})," ",(0,x.jsx)("br",{})]}),(0,x.jsx)(s.Z,{className:"site-layout",children:(0,x.jsx)(j,{style:{margin:"1px 40px 0",overflow:"initial"},children:(0,x.jsx)("div",{className:"site-layout-background",style:{padding:15,textAlign:"center"},children:e.children})})})]})})}},4947:function(e,n,t){t.d(n,{e:function(){return r}});var s=t(4871),r=function(e){return{type:s.x,payload:e}}}}]);
//# sourceMappingURL=450.bf3e73b3.chunk.js.map
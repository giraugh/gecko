(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{92:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,l,b,j,u,x,p,h,m,O,f,g,y,v,k,w,F,C,z,S,D,E,M,A,L,W,_,B,I,R,T,G,P,U,$,H,J,q,N,V,Y,K,Q,X=t(1),Z=t.n(X),nn=t(46),en=t.n(nn),tn=t(15),rn=t(5),an=t(8),cn=t(19),on=t(6),sn=t(2),dn=t(3),ln=dn.a.main(r||(r=Object(sn.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),bn=dn.a.div(a||(a=Object(sn.a)(["\n  margin: 15px;\n  background-color: ",";\n  border-radius: 10px;\n  padding: 20px;\n  box-sizing: border-box;\n  color: #FFF;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  transition: background-color .1s;\n"])),(function(n){return n.slideColor})),jn=dn.a.h1(c||(c=Object(sn.a)(["\n  margin: 0;\n  font-size: 2rem;\n  text-align: center;\n"]))),un=dn.a.p(i||(i=Object(sn.a)(["\n  text-align: center;\n"]))),xn=dn.a.img(o||(o=Object(sn.a)(["\n  width: 100px;\n  margin-bottom: 30px;\n"]))),pn=dn.a.div(s||(s=Object(sn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px 15px;\n"]))),hn=dn.a.button(d||(d=Object(sn.a)(["\n  border: 0;\n  height: 40px;\n  width: 80px;\n  border-radius: 10px;\n  background: #DDD;\n  cursor: pointer;\n\n  ","\n"])),(function(n){return n.disabled&&"\n    opacity: .3;\n    cursor: not-allowed;\n  "})),mn=t.p+"static/media/logo.4c7c7d8b.png",On=t.p+"static/media/arrow-left.8edfe59d.svg",fn=t.p+"static/media/arrow-right.f030f9db.svg",gn=t.p+"static/media/check.a6151888.svg",yn=t(0),vn=[{color:"#77B255",content:Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(xn,{src:mn,alt:""}),Object(yn.jsx)(jn,{children:"Welcome to Gecko"})]})},{color:"#762dad",content:Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(jn,{children:"Set a goal"}),Object(yn.jsx)(un,{children:"Make it SMART: Specific, Measurable, Attainable, Relevant, and Time-limited \ud83e\udde0"})]})},{color:"#1d86b3",content:Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(jn,{children:"Set an amount"}),Object(yn.jsx)(un,{children:"Pledge your own money and set the stakes to motivate you to complete your goal \ud83d\udcb8"})]})},{color:"#d97400",content:Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(jn,{children:"Select a charity"}),Object(yn.jsx)(un,{children:"If you don't reach your goal, your failure will make the world a better place \ud83c\udf0d"})]})},{color:"#b5004b",content:Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(jn,{children:"Finished?"}),Object(yn.jsx)(un,{children:"If a friend confirms you've completed the task, you get your money back \ud83d\udcb0"})]})},{color:"#00a9b5",content:Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(jn,{children:"Didn't finish in time?"}),Object(yn.jsx)(un,{children:"Your money will get donated to charity instead \ud83d\udc8c"})]})}],kn=function(){var n=Object(X.useState)(0),e=Object(on.a)(n,2),t=e[0],r=e[1],a=Object(rn.f)().push;return Object(yn.jsxs)(ln,{children:[Object(yn.jsx)(bn,{slideColor:vn[t].color,children:vn[t].content}),Object(yn.jsxs)(pn,{children:[Object(yn.jsx)(hn,{disabled:t<1,type:"button",onClick:function(){return r(t-1)},children:Object(yn.jsx)("img",{src:On,alt:""})}),Object(yn.jsx)(hn,{disabled:t>vn.length-1,type:"button",onClick:function(){return t<vn.length-1?r(t+1):a("/home")},children:Object(yn.jsx)("img",{src:t<vn.length-1?fn:gn,alt:""})})]})]})},wn=t(18),Fn=t.n(wn),Cn=t(9),zn=t(27),Sn=dn.a.div(l||(l=Object(sn.a)(["\n  margin: 20px 0;\n  display: flex;\n  flex-direction: column;\n"]))),Dn=dn.a.label(b||(b=Object(sn.a)(["\n  display: block;\n  padding-bottom: 4px;\n"]))),En=dn.a.input(j||(j=Object(sn.a)(["\n  font: inherit;\n  width: 100%;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 8px 12px;\n  box-sizing: border-box;\n"])),(function(n){return n.theme.text})),Mn=dn.a.textarea(u||(u=Object(sn.a)(["\n  font: inherit;\n  width: 100%;\n  flex: 1;\n  resize: none;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 8px 12px;\n  box-sizing: border-box;\n"])),(function(n){return n.theme.text})),An=function(n){var e=n.label,t=n.type,r=void 0===t?"text":t,a=n.id,c=n.name,i=n.register,o=n.wrapperStyle,s=Object(zn.a)(n,["label","type","id","name","register","wrapperStyle"]);return Object(yn.jsxs)(Sn,{style:o,children:[e&&Object(yn.jsx)(Dn,{htmlFor:a,children:e}),"textarea"===r?Object(yn.jsx)(Mn,Object(Cn.a)({id:a,name:c,ref:i},s)):Object(yn.jsx)(En,Object(Cn.a)({type:r,id:a,name:c,ref:i},s))]})},Ln=dn.a.div(x||(x=Object(sn.a)(["\n  margin: 20px 0;\n  display: flex;\n  flex-direction: column;\n"]))),Wn=dn.a.label(p||(p=Object(sn.a)(["\n  display: block;\n  padding-bottom: 4px;\n"]))),_n=dn.a.select(h||(h=Object(sn.a)(["\n  font: inherit;\n  width: 100%;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 8px 12px;\n  box-sizing: border-box;\n"])),(function(n){return n.theme.text})),Bn=function(n){var e=n.label,t=n.id,r=n.name,a=n.register,c=n.wrapperStyle,i=n.options,o=void 0===i?[]:i,s=Object(zn.a)(n,["label","id","name","register","wrapperStyle","options"]);return Object(yn.jsxs)(Ln,{style:c,children:[e&&Object(yn.jsx)(Wn,{htmlFor:t,children:e}),Object(yn.jsx)(_n,Object(Cn.a)(Object(Cn.a)({id:t,name:r,ref:a},s),{},{children:o.map((function(n,e){return Object(yn.jsx)("option",{value:n.value,children:n.label},e)}))}))]})},In=dn.a.button(m||(m=Object(sn.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  background: ",";\n  color: ",";\n  border: 0;\n  font: inherit;\n  padding: 12px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n"])),(function(n){return"secondary"===n.variant?"#DDD":n.theme.primary}),(function(n){return"secondary"===n.variant?"#000":"#FFF"})),Rn=function(n){return Object(yn.jsx)(In,Object(Cn.a)({},n))},Tn=dn.a.button(O||(O=Object(sn.a)(["\n  border: 0;\n  height: 40px;\n  width: 80px;\n  border-radius: 10px;\n  background: #DDD;\n  cursor: pointer;\n"]))),Gn=function(n){return Object(yn.jsx)("div",{children:Object(yn.jsx)(Tn,Object(Cn.a)(Object(Cn.a)({type:"button"},n),{},{children:Object(yn.jsx)("img",{src:On,alt:""})}))})},Pn=dn.a.div(f||(f=Object(sn.a)(["\n  margin: 6px 0;\n  display: flex;\n  align-items: center;\n"]))),Un=dn.a.img(g||(g=Object(sn.a)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n  object-fit: cover;\n"]))),$n=dn.a.div(y||(y=Object(sn.a)(["\n  margin-left: 22px;\n  font-size: 1.3rem;\n"]))),Hn=function(n){var e=n.image,t=n.name;return Object(yn.jsxs)(Pn,{children:[Object(yn.jsx)(Un,{src:e,alt:""}),Object(yn.jsx)($n,{children:t})]})},Jn=dn.a.main(v||(v=Object(sn.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 20px;\n  box-sizing: border-box;\n  background: #FAFAFA;\n"]))),qn=dn.a.h1(k||(k=Object(sn.a)(["\n  font-size: 3.7rem;\n  color: ",";\n  margin: 0;\n"])),(function(n){return n.theme.primary})),Nn=dn.a.span(w||(w=Object(sn.a)(["\n  font-size: 1.3rem;\n  color: ",";\n  font-weight: bold;\n"])),(function(n){return n.theme.primary})),Vn=dn.a.div(F||(F=Object(sn.a)(["\n  height: 200px;\n  width: 200px;\n  margin: 40px auto;\n  border-radius: 1000px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  & svg {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    transform: rotate(-90deg);\n  }\n"]))),Yn=dn.a.h2(C||(C=Object(sn.a)(["\n  margin: 0 0 8px;\n  font-size: 2.5rem;\n  text-decoration: underline;\n  text-decoration-color: ",";\n"])),(function(n){return n.theme.primary})),Kn=dn.a.p(z||(z=Object(sn.a)(["\n  margin: 8px 0;\n  font-size: 1.8rem;\n  font-weight: bold;\n"]))),Qn=dn.a.p(S||(S=Object(sn.a)(["\n  margin: 4px 0 30px;\n  font-size: 1.4rem;\n"]))),Xn=dn.a.div(D||(D=Object(sn.a)(["\n  background: #FFF;\n  padding: 16px;\n  margin-top: 10px;\n  border-radius: 10px;\n  box-shadow: 0 5px 10px 0 rgba(0,0,0,.2);\n"]))),Zn=t(4),ne=t.n(Zn),ee=t(7),te=t(47),re=t.n(te).a.create({baseURL:"".concat("https://gecko-backend-wrjnj7thaq-ts.a.run.app"),timeout:3e5,headers:{"Content-Type":"application/json"}}),ae=function(){var n=Object(ee.a)(ne.a.mark((function n(e){var t;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,re.get("/users?id=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.user);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ce=function(){var n=Object(ee.a)(ne.a.mark((function n(e){var t;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,re.get("/goals?id=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.goal);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),ie=function(){var n=Object(ee.a)(ne.a.mark((function n(e){var t;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,re.get("/goals/authored?id=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.goals);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),oe=function(){var n=Object(ee.a)(ne.a.mark((function n(e,t){var r;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,re.post("/goals/complete",{id:e,completed:t});case 2:return r=n.sent,n.abrupt("return",r.data.goal);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),se=function(n){var e,t=n.goal,r=Object(X.useState)(null),a=Object(on.a)(r,2),c=a[0],i=a[1];return Object(X.useEffect)((function(){ae(t.author).then(i)}),[t]),c?Object(yn.jsx)(Hn,{name:c.name,image:(e=c.email,"https://www.gravatar.com/avatar/".concat(Fn()(e),"?d=retro"))}):Object(yn.jsx)("div",{children:"Loading..."})},de=function(n){var e=n.match,t=Object(rn.f)().push,r=Object(an.f)(),a=e.params.id,c=Object(X.useState)(),i=Object(on.a)(c,2),o=i[0],s=i[1];if(Object(X.useEffect)((function(){ce(a).then((function(n){s(n)}))}),[ce,a]),!o)return Object(yn.jsx)("div",{children:"Loading..."});var d=(o.endDate-0)/(o.endDate-o.startDate);return Object(yn.jsxs)(Jn,{children:[Object(yn.jsx)(Gn,{onClick:function(){return t("/home")}}),Object(yn.jsxs)(Vn,{children:[Object(yn.jsxs)("svg",{width:220,height:220,children:[Object(yn.jsx)("circle",{stroke:"#EEE",strokeWidth:14,fill:"transparent",r:100,cx:110,cy:110}),Object(yn.jsx)("circle",{stroke:r.primary,strokeWidth:14,fill:"transparent",r:100,cx:110,cy:110,style:{strokeDasharray:"".concat(628," ").concat(628),strokeDashoffset:-628*d}})]}),Object(yn.jsxs)(qn,{children:["$",o.amount]}),Object(yn.jsx)(Nn,{children:"pledged"})]}),Object(yn.jsx)("div",{style:{flex:1}}),Object(yn.jsx)("button",{style:{opacity:0},onClick:function(){return t("/goal/".concat(a,"/approve"))},children:"\xa0"}),Object(yn.jsxs)(Xn,{children:[Object(yn.jsx)(Yn,{children:o.name}),Object(yn.jsx)(Kn,{children:"23 hours remaining"}),Object(yn.jsx)(Qn,{children:"Complete by: 12/03/2021"}),Object(yn.jsx)(se,{goal:o})]})]})},le=dn.a.main(E||(E=Object(sn.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 20px;\n  box-sizing: border-box;\n"]))),be=dn.a.h1(M||(M=Object(sn.a)(["\n  margin: 10px 0;\n  font-size: 2rem;\n"]))),je=dn.a.div(A||(A=Object(sn.a)(["\n  display: grid;\n  color: ",";\n  grid-template-columns: 1fr 3fr;\n  column-gap: 15px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  border: 2px solid ",";\n  padding: 7px;\n  background-color: white;\n /* box-shadow: 0px 2px 1px 0px #404040;*/\n\n  &:hover {\n    background-color: #EEE;\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.primary})),ue=dn.a.section(L||(L=Object(sn.a)(["\n  padding: 4px;\n  margin-bottom: 30px;\n"]))),xe=dn.a.img(W||(W=Object(sn.a)(["\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n"]))),pe=dn.a.section(_||(_=Object(sn.a)(["\n  font-size: 1.6rem;\n  text-align: center;\n  height: min-content;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),he=dn.a.span(B||(B=Object(sn.a)(["\n  display: block;\n  font-size: 2rem;\n  font-style: italic;\n"]))),me=dn.a.div(I||(I=Object(sn.a)(["\n  display: flex;\n\n  & > span:first-of-type {\n   font-weight: bold;\n  }\n\n  & > span:first-of-type:after {\n    margin-left: 4px;\n    content: '-';\n    font-weight: normal;\n  }\n\n  & > span {\n    margin-right: 3px;\n  }\n"]))),Oe=function(n,e){return n+e},fe=function(n){return"https://www.gravatar.com/avatar/".concat(Fn()(n),"?d=retro")},ge=function(n){var e=n.goal,t=e[n.avatarUserField],r=Object(X.useState)(void 0),a=Object(on.a)(r,2),c=(a[0],a[1]);Object(X.useEffect)((function(){ae(t).then(c)}),[c,t]);var i=e.endDate-Date.now(),o=Math.floor(i/6e4),s=Math.floor(o/60),d=Math.floor(s/24);return Object(yn.jsx)(tn.b,{to:"/goal/".concat(e.id),style:{textDecoration:"none"},children:Object(yn.jsxs)(je,{children:[Object(yn.jsx)("div",{children:Object(yn.jsx)(xe,{src:fe(e.id),alt:"profile"})}),Object(yn.jsxs)("div",{children:[Object(yn.jsx)("h3",{children:e.name}),Object(yn.jsxs)(me,{children:[Object(yn.jsxs)("span",{children:["$",e.amount]}),Object(yn.jsxs)("span",{children:[d>0?Object(yn.jsxs)(yn.Fragment,{children:[" ",d," days "]}):Object(yn.jsxs)(yn.Fragment,{children:[" ",s," hours "]})," remaining"]})]})]})]})})},ye=function(){Object(rn.f)().push;var n=Object(X.useState)(1),e=Object(on.a)(n,2),t=e[0],r=(e[1],Object(X.useState)()),a=Object(on.a)(r,2),c=a[0],i=a[1];return Object(X.useEffect)((function(){ie(t).then(i).catch((function(n){return console.warn(n)}))}),[t]),Object(yn.jsxs)(le,{children:[Object(yn.jsx)(be,{children:"Home"}),c?Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsxs)(pe,{children:[Object(yn.jsx)(he,{children:"Total Pledged"}),Object(yn.jsxs)("span",{children:["$",c?c.map((function(n){return n.amount})).reduce(Oe,0):0]})]}),Object(yn.jsx)(ue,{children:c.map((function(n){return Object(yn.jsx)(ge,{goal:n,avatarUserField:"author"},n.id)}))})]}):Object(yn.jsx)(yn.Fragment,{children:Object(yn.jsx)("h3",{})})]})},ve=t(49),ke=dn.a.form(R||(R=Object(sn.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 20px;\n  box-sizing: border-box;\n"]))),we=dn.a.h1(T||(T=Object(sn.a)(["\n  margin: 10px 0;\n  font-size: 2rem;\n  text-decoration: underline;\n  text-decoration-color: ",";\n"])),(function(n){return n.theme.primary})),Fe=dn.a.div(G||(G=Object(sn.a)(["\n  margin: 10px 0;\n  font-size: 1.3rem;\n  font-weight: bold;\n  letter-spacing: .2em;\n  text-align: center;\n"]))),Ce=dn.a.button(P||(P=Object(sn.a)(["\n  margin: 6px 0;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  padding: 12px 16px 16px;\n  border-radius: 10px;\n  border: 0;\n  background: #EEE;\n  box-shadow: inset 0 -4px 0 rgba(0,0,0,.3);\n"]))),ze=dn.a.div(U||(U=Object(sn.a)(["\n  margin: 6px 0;\n  display: flex;\n  align-items: center;\n  font-size: 1.5em;\n\n  & span {\n    margin-right: 16px;\n  }\n"]))),Se=[{id:1,name:"Burt Macklin",email:"burt@macklin.fbi",phone:5555555555},{id:2,name:"Ben Grant",email:"benjamin.grantgra0007@gmail.com",phone:5555555555}],De=function(){var n=Object(ve.a)({shouldUnregister:!1}),e=n.handleSubmit,t=n.register,r=n.setValue,a=Object(rn.f)().push,c=Object(X.useState)(0),i=Object(on.a)(c,2),o=i[0],s=i[1];return Object(yn.jsxs)(ke,{onSubmit:e((function(n){console.log(n),a("/goal/0")})),children:[0===o&&Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(Gn,{onClick:function(){return a("/home")}}),Object(yn.jsx)(we,{children:"What do you want to get done?"}),Object(yn.jsx)(An,{type:"text",id:"task_name",name:"task_name",register:t,placeholder:"Write your own..."}),Object(yn.jsx)(Rn,{type:"button",onClick:function(){return s(1)},children:"Let's do it"}),Object(yn.jsx)(Fe,{children:"OR"}),Object(yn.jsx)(Ce,{type:"button",onClick:function(){r("task_name","\ud83d\udcaa 30 Day Gym"),s(1)},children:"\ud83d\udcaa 30 Day Gym"}),Object(yn.jsx)(Ce,{type:"button",onClick:function(){r("task_name","\ud83c\udfc3\u200d\u2642\ufe0f Daily Run"),s(1)},children:"\ud83c\udfc3\u200d\u2642\ufe0f Daily Run"}),Object(yn.jsx)(Ce,{type:"button",onClick:function(){r("task_name","\ud83d\udcd6 Finish a book"),r("amount","20"),r("date","2021-03-12"),s(1)},children:"\ud83d\udcd6 Finish a book"}),Object(yn.jsx)(Ce,{type:"button",onClick:function(){r("task_name","\ud83c\udfb8 Learn a guitar solo"),s(1)},children:"\ud83c\udfb8 Learn a guitar solo"}),Object(yn.jsx)(Ce,{type:"button",onClick:function(){r("task_name","\ud83c\udf5d Make a home-cooked meal"),s(1)},children:"\ud83c\udf5d Make a home-cooked meal"}),Object(yn.jsx)(Ce,{type:"button",onClick:function(){r("task_name","\ud83e\uddee Submit maths assignment"),s(1)},children:"\ud83e\uddee Submit maths assignment"})]}),1===o&&Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(Gn,{onClick:function(){return s(0)}}),Object(yn.jsx)(we,{children:"Choose a friend to hold you accountable"}),Object(yn.jsx)("br",{}),Se.map((function(n){return Object(yn.jsx)("a",{href:"#",style:{textDecoration:"none",color:"inherit"},onClick:function(e){e.preventDefault(),r("person",n.id),s(2)},children:Object(yn.jsx)(Hn,{name:n.name,image:"https://www.gravatar.com/avatar/".concat(Fn()(n.email),"?d=retro")})},n.id)})),Object(yn.jsx)("br",{}),Object(yn.jsx)(An,{label:"Invite a friend",type:"phone",placeholder:"\ud83d\udcde Mobile number"}),Object(yn.jsx)(Rn,{type:"button",variant:"secondary",children:"Invite"})]}),2===o&&Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(Gn,{onClick:function(){return s(1)}}),Object(yn.jsx)(we,{children:"How much will you pledge?"}),Object(yn.jsxs)(ze,{children:[Object(yn.jsx)("span",{children:"$"}),Object(yn.jsx)(An,{type:"number",id:"amount",name:"amount",register:t,placeholder:"30",wrapperStyle:{flex:1}})]}),Object(yn.jsx)(we,{children:"Choose a charity"}),Object(yn.jsx)(Bn,{id:"charity",name:"charity",register:t,options:[{label:"Divide between all charities",value:""},{label:"More charities from api",value:0}]}),Object(yn.jsx)(Rn,{type:"button",onClick:function(){return s(3)},children:"Next"})]}),3===o&&Object(yn.jsxs)(yn.Fragment,{children:[Object(yn.jsx)(Gn,{onClick:function(){return s(2)}}),Object(yn.jsx)(we,{children:"Set your deadline"}),Object(yn.jsx)(An,{type:"date",id:"date",name:"date",register:t,style:{fontSize:"1.3em"}}),Object(yn.jsx)(Rn,{type:"submit",children:"Let's do it!"})]})]})},Ee=dn.a.main($||($=Object(sn.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 20px;\n  box-sizing: border-box;\n  background: #FAFAFA;\n"]))),Me=dn.a.div(H||(H=Object(sn.a)(["\n  height: 200px;\n  width: 200px;\n  margin: 40px auto;\n  border-radius: 1000px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  & > button {\n      background-color: ",";\n      color: white;\n      border: none;\n      border-radius: 50%;\n      width: 100%;\n      height: 100%;\n      font-size: 2.2rem;\n      font-weight: bold;\n      transition: .1s;\n      box-shadow: 0px 3px 3px 0px #025002;\n  }\n\n  & > button:active {\n      background-color: white;\n      color: ",";\n      border: ",";\n      box-shadow: inset 0px 3px 3px 1px #025002;\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.primary})),Ae=dn.a.h2(J||(J=Object(sn.a)(["\n  margin: 0 0 8px;\n  font-size: 2.3rem;\n  text-decoration: underline;\n  text-decoration-color: ",";\n  margin-top: 30px;\n  text-align: center;\n"])),(function(n){return n.theme.primary})),Le=dn.a.p(q||(q=Object(sn.a)(["\n  text-align: center;\n"]))),We=t(48),_e=function(n){var e=n.id,t=Object(X.useState)(),r=Object(on.a)(t,2),a=r[0],c=r[1];Object(X.useEffect)((function(){ae(e).then(c)}),[e]);return Object(yn.jsx)("span",{style:{fontWeight:"bold"},children:a?a.name:""})},Be=function(n){var e=n.match,t=Object(rn.f)().push,r=e.params.id,a=Object(X.useState)(),c=Object(on.a)(a,2),i=c[0],o=c[1],s=Object(X.useState)(!1),d=Object(on.a)(s,2),l=d[0],b=d[1];Object(X.useEffect)((function(){ce(r).then(o)}),[r]);var j={count:15,colors:["#cc3333","#4CAF50","#81C784"],calc:function(n,e){return Object(Cn.a)(Object(Cn.a)({},n),{},{x:(e+1)*(window.innerWidth/3)-50*(e+1),y:300+100*Math.random()-50+(2===e?-80:0)})}};return Object(yn.jsx)("div",{children:Object(yn.jsxs)(Ee,{children:[Object(yn.jsx)(Gn,{onClick:function(){return t("/goal/".concat(r))}}),Object(yn.jsxs)(Ae,{children:[" ",i?i.name:""," "]}),Object(yn.jsxs)(Le,{children:["Has ",i&&Object(yn.jsx)(_e,{id:i.author})," completed this task?"]}),Object(yn.jsx)(Me,{children:Object(yn.jsx)("button",{disabled:!1,onClick:function(){b(!0),i&&oe(r,!i.completed).then(o)},children:i&&i.completed?"Approved":"Approve!"})}),l&&Object(yn.jsx)(We.Fireworks,Object(Cn.a)({},j))]})})},Ie=dn.a.main(N||(N=Object(sn.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),Re=dn.a.div(V||(V=Object(sn.a)(["\n  margin: 15px;\n  background-color: ",";\n  border-radius: 10px;\n  padding: 20px;\n  box-sizing: border-box;\n  color: #FFF;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])),(function(n){return n.theme.primary})),Te=dn.a.h1(Y||(Y=Object(sn.a)(["\n  margin: 40px 0;\n  font-size: 3rem;\n  text-align: center;\n"]))),Ge=dn.a.img(K||(K=Object(sn.a)(["\n  width: 120px;\n"]))),Pe=dn.a.button(Q||(Q=Object(sn.a)(["\n  border: 0;\n  height: 60px;\n  width: 100%;\n  border-radius: 10px;\n  background: #FFF;\n  cursor: pointer;\n  font: inherit;\n  font-weight: bold;\n  font-size: 1.5em;\n  padding-bottom: 4px;\n  box-shadow: inset 0 -4px 0 #537d3b;\n"]))),Ue=function(){var n=Object(rn.f)().push;return Object(yn.jsx)(Ie,{children:Object(yn.jsxs)(Re,{children:[Object(yn.jsx)(Ge,{src:mn,alt:""}),Object(yn.jsx)(Te,{children:"Meet Gecko"}),Object(yn.jsx)(Pe,{type:"button",onClick:function(){return n("/new")},children:"Whoa!"})]})})},$e={background:"#FFFFFF",text:"#000000",primary:"#77B255"},He=function(){return Object(yn.jsx)(tn.a,{basename:"/gecko",children:Object(yn.jsxs)(an.c,{theme:$e,children:[Object(yn.jsx)(cn.a,{styles:function(n){return{html:{scrollBehaviour:"smooth"},body:{margin:0,fontFamily:"sans-serif"}}}}),Object(yn.jsxs)(rn.c,{children:[Object(yn.jsx)(rn.a,{path:"/",component:kn,exact:!0}),Object(yn.jsx)(rn.a,{path:"/whoa",component:Ue,exact:!0}),Object(yn.jsx)(rn.a,{path:"/home",component:ye,exact:!0}),Object(yn.jsx)(rn.a,{path:"/new",component:De,exact:!0}),Object(yn.jsx)(rn.a,{path:"/goal/:id",component:de,exact:!0}),Object(yn.jsx)(rn.a,{path:"/goal/:id/approve",component:Be})]})]})})},Je=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};en.a.render(Object(yn.jsx)(Z.a.StrictMode,{children:Object(yn.jsx)(He,{})}),document.getElementById("root")),Je()}},[[92,1,2]]]);
//# sourceMappingURL=main.a3ced94f.chunk.js.map
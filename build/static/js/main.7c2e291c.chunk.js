(this["webpackJsonpcc-recruit"]=this["webpackJsonpcc-recruit"]||[]).push([[0],{181:function(e,t,s){},182:function(e,t,s){},187:function(e,t,s){},188:function(e,t,s){},206:function(e,t,s){},230:function(e,t){},245:function(e,t,s){},251:function(e,t,s){},252:function(e,t,s){},255:function(e,t,s){},265:function(e,t){},267:function(e,t){},277:function(e,t){},279:function(e,t){},306:function(e,t){},307:function(e,t){},312:function(e,t){},314:function(e,t){},321:function(e,t){},340:function(e,t){},365:function(e,t,s){},366:function(e,t,s){},367:function(e,t,s){},368:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),a=s(34),n=s.n(a),r=(s(181),s(5)),l=(s(182),s(0)),o=(s(164),s(187),s(188),function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(4),n=Object(r.a)(a,2),o=n[0],d=n[1];Object(c.useEffect)((function(){setTimeout((function(){i(!0),d(0)}),200)}));var u={border:"".concat(o," solid white"),fontFamily:"Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif"};return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{class:"page-bg"}),Object(l.jsxs)("div",{class:"animation-wrapper",children:[Object(l.jsx)("div",{class:"particle particle-1"}),Object(l.jsx)("div",{class:"particle particle-2"}),Object(l.jsx)("div",{class:"particle particle-3"}),Object(l.jsx)("div",{class:"particle particle-4"})]}),Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)("div",{className:"w-screen flex justify-center",children:Object(l.jsx)("h1",{className:"typing relative top-52 font-bold text-5xl md:text-6xl lg:text-7xl",children:Object(l.jsx)("div",{style:u,className:"type-text",children:"CODING CLUB"})})}),Object(l.jsx)("div",{className:"w-screen flex justify-center",children:Object(l.jsx)("h1",{className:"typing relative top-60  text-2xl md:text-3xl lg:text-4xl",children:s?Object(l.jsx)("div",{className:"type-text",children:"BITS PILANI"}):null})})]})]})}),d=s(11),u=s.n(d),p=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(o,{})})},m=s(45),j=(s(206),s(165)),b=s.n(j),h=function(e){var t=Object(c.useState)(0),s=Object(r.a)(t,2),i=s[0],a=s[1],n=Object(c.useState)(null),o=Object(r.a)(n,2),d=o[0],p=o[1],j=Object(c.useState)((function(){var e=localStorage.getItem("savedOptions");return JSON.parse(e)||[]})),h=Object(r.a)(j,2),x=h[0],g=h[1],f=Object(c.useState)([]),v=Object(r.a)(f,2),O=v[0],N=v[1],w=Object(c.useState)(!1),y=Object(r.a)(w,2),S=y[0],k=y[1],C=Object(c.useState)(3600),I=Object(r.a)(C,2),T=I[0],L=I[1],_=Object(c.useState)(""),A=Object(r.a)(_,2),B=A[0],q=A[1],D=Object(c.useState)((function(){var e=localStorage.getItem("savedAnswer");return JSON.parse(e)||[]})),E=Object(r.a)(D,2),F=E[0],G=E[1];Object(c.useEffect)((function(){u()({url:"https://api.cc-recruitments.tech/exam-api/GetTime",method:"get",headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){L(parseInt(e.data.time,10)),setInterval((function(){L((function(e){return e-1}))}),1e3)})).catch((function(e){console.log(e)}))}),[]);var M=function(){k(!0);var t=[].concat(Object(m.a)(x),Object(m.a)(F));t=t.filter((function(e){return void 0!==e}));var s={method:"post",url:"https://api.cc-recruitments.tech/exam-api/PostAnswers",headers:{"content-type":"application/json","X-CSRFToken":e.person.csrf},data:t,withCredentials:!0};u()(s).then((function(e){})).catch((function(e){window.alert("Something went wrong, please try again"),console.log(e)}))},P=function(e){a(e)};Object(c.useEffect)((function(){N(x),localStorage.setItem("savedOptions",JSON.stringify(x))}),[x]),Object(c.useEffect)((function(){localStorage.setItem("savedAnswer",JSON.stringify(F))}),[F]),Object(c.useEffect)((function(){u()({url:"https://api.cc-recruitments.tech/exam-api/GetQuestions",method:"get",headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){Array.isArray(e.data)?p(e.data):console.log("error in fetching questions, please try again")})).catch((function(e){console.log(e)}))}),[]);var Q=Object(l.jsx)("div",{className:"text-center text-2xl mt-4 text-white",children:"Loading Questions..."});return null!==d&&(Q=Object(l.jsxs)("div",{className:"z-10 flex px-2 md:px-5 justify-center items-center ExamComp text-white",children:[S?Object(l.jsx)("div",{}):Object(l.jsxs)("div",{className:"flex flex-col",style:{flexShrink:"12",alignItems:"center",width:"100%"},children:[Object(l.jsxs)("div",{className:"master-ques",children:[Object(l.jsxs)("div",{className:"timer",children:[" Time left - ",Math.floor(T/60)," : ",T%60/10===0?"0 ".concat(T%60):T%60," "]}),Object(l.jsx)("div",{className:"question-nav",children:d.map((function(e){return Object(l.jsx)("div",{className:"question-nav-child",children:null==O[e.sno]&&null==F[e.sno]?Object(l.jsx)("div",{className:"opt1",children:Object(l.jsxs)("div",{onClick:function(){return P(e.sno)},className:"cursor-pointer ques-num",children:[" Q",e.sno+1]})}):Object(l.jsx)("div",{className:"opt2",children:Object(l.jsxs)("div",{onClick:function(){return P(e.sno)},className:"cursor-pointer ques-num",children:[" Q",e.sno+1]})})})}))}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"flex items-center mb-2 mt-2",children:[Object(l.jsx)("div",{className:"opt11"})," ",Object(l.jsx)("p",{children:"Unanswered"})]}),Object(l.jsxs)("div",{className:"flex items-center mb-2 mt-2",children:[Object(l.jsx)("div",{className:"opt12"})," ",Object(l.jsx)("p",{children:"Answered"})]})]})]}),Object(l.jsxs)("div",{className:0===d[i].hint_text.length?"resources hidehint":"resources",children:[Object(l.jsx)("p",{children:d[i].hint_text}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:d[i].hint_link,target:"_blank",className:"text-blue-500",children:""===d[i].hint_link?null:"Resource Link"})})]})]}),S?Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-3xl font-bold text-center text-white mt-10",children:"Thank you for your participation, we will get in touch with you soon."})}):Object(l.jsxs)("div",{className:"w-3/4 ques-panel",children:[Object(l.jsxs)("div",{className:"flex flex-col items-start w-full p-4 md:p-10",children:[Object(l.jsxs)("h4",{className:"mt-10 text-xl text-white font-bold",children:["Question ",i+1," of ",d.length]}),Object(l.jsxs)("div",{className:"mt-4 text-xl md:text-2xl text-white font-bold",children:[Object(l.jsx)("div",{className:"unselectable",children:b()(d[i].qtxt)}),"null"!==d[i]["question_file.url"]?Object(l.jsx)("div",{className:"optionDiv flex justify-around items-center m-2 p-4",children:Object(l.jsx)("img",{src:d[i]["question_file.url"]})}):null]})]}),Object(l.jsx)("div",{className:"flex flex-col w-full",children:d[i].is_blank?Object(l.jsx)("div",{className:"mb-3 pt-0",children:Object(l.jsx)("input",{type:"text",placeholder:"Enter your answer here...",className:"px-3 py-3 placeholder-blueGray-300 card text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-white",value:null!=F[i]?F[i].answertext:B,onChange:function(e){var t,s;q(e.target.value),t=e.target.value,s=d[i].id,G([F[i]={answertext:t,qid:s}]),G(Object(m.a)(F))}})}):d[i].options.map((function(e,t){return Object(l.jsxs)("div",{className:"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl",children:[Object(l.jsx)("input",{type:"radio",name:e.text,value:e.text,onChange:function(e){return function(e,t){g([x[i]={answer:e,qid:t}]),g(Object(m.a)(x))}(t,d[i].id)},checked:!!x[i]&&t===x[i].answer,className:"w-6 h-6 card bg-black"}),Object(l.jsx)("p",{className:"ml-6 text-white",children:e.text}),"null"!==e.file?Object(l.jsx)("div",{className:"optionDiv flex justify-around items-center m-2 p-4",children:Object(l.jsx)("img",{src:e.file,alt:"optionImage"})}):null]},t)}))}),Object(l.jsxs)("div",{className:"flex justify-between w-full mt-4 text-white mb-4",children:[Object(l.jsx)("button",{onClick:function(){var e=i-1;e>=0&&a(e),q(F[e].answertext?F[e].answertext:"")},className:"w-1/2 m-1 py-3 text-xl button bg-black rounded-lg",children:"Previous"}),Object(l.jsx)("button",{onClick:i+1===d.length?function(){window.confirm("Do you want to submit?")&&M()}:function(){var e=i+1;e<d.length&&a(e),q(F[e].answertext?F[e].answertext:"")},className:"w-1/2 m-1 ml-10 text-xl py-3 button bg-black rounded-lg",children:i+1===d.length?"Submit":"Next"})]})]})]})),Q},x=s(56),g=s(14),f=(s(245),function(e){var t;return Object(l.jsxs)("nav",{className:"flex justify-between items-center h-16 topbarr text-white relative shadow-sm",role:"navigation",children:[Object(l.jsxs)(g.b,{to:"/",className:"flex pl-8 items-center",children:[Object(l.jsx)("img",{style:{filter:"drop-shadow(0px 0px 15px rgba(255, 0, 0, 1))"},width:"50",height:"50",src:"/assets/logo.svg",className:"",alt:"logo"}),Object(l.jsx)("p",{className:"mt-0 ml-3 headline",style:{filter:"drop-shadow(5px 5px 10px rgba(255, 0, 0, 1))"},children:"CODING CLUB"})]}),Object(l.jsx)("div",{className:"px-4 cursor-pointer md:hidden",onClick:e.toggle,children:Object(l.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),Object(l.jsxs)("div",{className:"pr-8 md:block  hidden alignment",children:[Object(l.jsx)(g.b,(t={exact:!0,to:"/",activeClassName:"activeStyle"},Object(x.a)(t,"activeClassName","activeStyle"),Object(x.a)(t,"className","p-4"),Object(x.a)(t,"children","Home"),t)),Object(l.jsx)(g.b,{to:"/test",activeClassName:"activeStyle",className:"p-4",children:"Recruitment Test"}),e.loggedIn?Object(l.jsxs)("div",{children:[Object(l.jsx)(g.b,{to:"/preferences",activeClassName:"activeStyle",className:"p-4",children:"Profile"})," ",Object(l.jsx)(g.b,{to:"/",onClick:function(){if(e.loggedIn&&null!==e.person){u()({method:"get",url:"https://api.cc-recruitments.tech/user-api/LogoutView",withCredentials:!0}).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}))}window.alert("Logged out"),e.toggleLoggedIn(!1),e.toggleWantsIn(!1)},className:"p-4",children:" Logout "})]}):Object(l.jsx)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile+https%3A//www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//api.cc-recruitments.tech/rest-auth/google/callback/&client_id=754009890523-f8r6n04j7k09grmf1auf8c872a7j1nbm.apps.googleusercontent.com&hd=pilani.bits-pilani.ac.in",activeClassName:"activeStyle",className:"p-4",children:"Login"})]})]})}),v=s(24),O=s.n(v),N=(s(251),function(e){var t=Object(c.useState)(!1),s=Object(r.a)(t,2),i=s[0],a=s[1],n="p-10 mt-10 py-2 rounded-full bg-red-500 text-gray-100 focus:outline-none hover:bg-red-600";return e.loggedIn||(n+=" cursor-not-allowed opacity-50 disabledButton"),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"recruitmentDiv rounded-lg",children:i?Object(l.jsx)(h,{person:e.person}):Object(l.jsx)("div",{className:"flex flex-col items-center",children:Object(l.jsxs)(O.a,{top:!0,children:[Object(l.jsx)("div",{className:" flex justify-center items-center",children:Object(l.jsxs)("div",{className:" h-64 w-56 mt-24 flex flex-col justify-around items-center recruitment-card",children:[Object(l.jsx)("div",{className:"bg-red-600 h-24 w-24 rounded-full flex items-center justify-center recruitment-card-image"}),Object(l.jsx)("h3",{className:"text-white text-center p-2",children:e.loggedIn&&null!==e.person?Object(l.jsxs)(l.Fragment,{children:["Welcome ",e.person.name]}):Object(l.jsx)(l.Fragment,{children:"Please login to start the test"})})]})}),Object(l.jsx)("button",{className:n,onClick:function(){a(!i)},disabled:!e.loggedIn,children:"Start test"})]})})})})}),w=(s(252),s(84)),y=(s(253),s(254),s(168)),S=s.n(y),k=s(169),C=s.n(k);function I(e){var t=e.children;return Object(l.jsx)("div",{className:"project-hero",children:Object(l.jsx)("div",{className:"project-hero-body",children:t})})}function T(e){var t=e.ratio,s=e.src;return Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("div",{className:"image-inner-container",children:Object(l.jsx)("div",{className:"ratio",style:{paddingTop:100*t+"%"},children:Object(l.jsx)("div",{className:"ratio-inner",children:Object(l.jsx)("img",{src:s,alt:""})})})})})}var L=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"project-main",children:Object(l.jsx)(I,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:w.map((function(e,t){return Object(l.jsx)("div",{className:"column",children:Object(l.jsx)(O.a,{children:Object(l.jsx)(C.a,{className:"Tilt",options:{max:5,scale:1.05},children:Object(l.jsx)("div",{className:"Tilt-inner",children:Object(l.jsxs)("div",{className:"project-card",children:[Object(l.jsx)("div",{className:"project-card-title",children:Object(l.jsxs)("a",{id:e.id,children:[" ",e.title," "]})}),Object(l.jsx)("div",{className:"project-card-body",children:e.description}),Object(l.jsx)("div",{className:"project-card-techstack",children:e.techstack}),Object(l.jsx)(T,{ratio:1,src:e.image})]})})})})},e.id)}))})})})}),Object(l.jsx)("div",{className:"project-card-carousel",children:Object(l.jsx)(S.a,{autoplay:!0,autoplay_speed:2500,children:w.map((function(e,t){return Object(l.jsxs)("div",{className:"project-card-carousel-style",children:[Object(l.jsx)("h1",{style:{padding:"10px",fontSize:"3ch"},children:Object(l.jsxs)("a",{href:e.target,children:[" ",e.title," "]})}),Object(l.jsx)("div",{className:"project-card-text",children:e.description}),Object(l.jsx)("div",{style:{padding:"10px"},children:e.techstack}),Object(l.jsx)(T,{ratio:1,src:e.image})]})}))})})]})},_=s(7),A=(s(255),function(e){return Object(l.jsxs)("div",{className:e.isOpen?"grid grid-rows-4 text-center items-center bgdropdown text-white drop":"hidden text-white drop",onClick:e.toggle,children:[Object(l.jsx)(g.b,{to:"/",exact:!0,activeClassName:"activeStyled",className:"p-4",children:"Home"}),Object(l.jsx)(g.b,{to:"/test",activeClassName:"activeStyled",className:"p-4",children:"Recruitment Test"}),e.loggedIn?Object(l.jsxs)("div",{className:"mob-dd",children:[" ",Object(l.jsx)(g.b,{to:"/preferences",activeClassName:"activeStyled",className:"p-4",children:"Profile"}),Object(l.jsx)(g.b,{to:"/",onClick:function(){if(e.loggedIn&&null!==e.person){u()({method:"get",url:"https://api.cc-recruitments.tech/user-api/LogoutView",withCredentials:!0}).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}))}window.alert("Logged out"),e.toggleLoggedIn(!1),e.toggleWantsIn(!1)},className:"p-4",children:" Logout "})," "]}):Object(l.jsx)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile+https%3A//www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//api.cc-recruitments.tech/rest-auth/google/callback/&client_id=754009890523-f8r6n04j7k09grmf1auf8c872a7j1nbm.apps.googleusercontent.com&hd=pilani.bits-pilani.ac.in",activeClassName:"activeStyled",className:"p-4",children:"Login"})]})}),B=s(170),q=s(171),D=s(176),E=s(174),F=s(86);s(364),s(365),s(366);var G=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(O.a,{children:Object(l.jsx)("div",{className:"w-full flex items-center rounded-lg justify-center login mt-8 mb-10 p-4",children:Object(l.jsxs)("form",{className:"w-full md:w-1/3 bg-white rounded-lg login-form",children:[Object(l.jsx)("div",{className:"flex font-bold justify-center mt-2",children:Object(l.jsx)("img",{className:"h-20 w-20 login-image"})}),Object(l.jsx)("h2",{className:"text-xl text-center text-white mt-8",children:"You must be logged in to set/update your preferences."}),Object(l.jsx)("div",{className:"px-12 pb-10 "})]})})})})},M=function(e){Object(D.a)(s,e);var t=Object(E.a)(s);function s(e){var c;Object(B.a)(this,s),console.log(e),c=t.call(this,e);var i=null;return null!==e.preferences&&(i=[{name:c.depFullName(e.preferences.pr1),id:c.depid(e.preferences.pr1)},{name:c.depFullName(e.preferences.pr2),id:c.depid(e.preferences.pr2)},{name:c.depFullName(e.preferences.pr3),id:c.depid(e.preferences.pr3)},{name:c.depFullName(e.preferences.pr4),id:c.depid(e.preferences.pr4)},{name:c.depFullName(e.preferences.pr5),id:c.depid(e.preferences.pr5)},{name:c.depFullName(e.preferences.pr6),id:c.depid(e.preferences.pr6)},{name:c.depFullName(e.preferences.pr7),id:c.depid(e.preferences.pr7)}]),c.state={customer:{name:e.person?e.person.name:"",pr1:e.preferences?e.preferences.pr1:"ap",pr2:e.preferences?e.preferences.pr2:"fe",pr3:e.preferences?e.preferences.pr3:"be",pr4:e.preferences?e.preferences.pr4:"cp",pr5:e.preferences?e.preferences.pr5:"ui",pr6:e.preferences?e.preferences.pr6:"gd",pr7:e.preferences?e.preferences.pr7:"vi",github:e.preferences?e.preferences.github:"",bits_email:e.person?e.person.email:"",bits_id:e.person?e.person.email.substring(5,9):"",gender:"M",branch:e.preferences?e.preferences.branch:"A1",status:e.preferences?e.preferences.status:"PS",email:""},prlist:e.preferences?i:[{id:1,name:"App Development"},{id:2,name:"Frontend Development"},{id:3,name:"Backend Development"},{id:4,name:"Competitive Coding"},{id:5,name:"UI/UX Development"},{id:6,name:"Game Development"},{id:7,name:"Video Editing"}]},c}return Object(q.a)(s,[{key:"handleNameChanged",value:function(e){var t=this.state.customer;t.name=e.target.value,this.setState({customer:t})}},{key:"handleBitsEmailChanged",value:function(e){var t=this.state.customer;t.bits_email=e.target.value,this.setState({customer:t})}},{key:"handleEmailChanged",value:function(e){var t=this.state.customer;t.email=e.target.value,this.setState({customer:t})}},{key:"handleBitsIdChanged",value:function(e){var t=this.state.customer;t.bits_id=e.target.value,this.setState({customer:t})}},{key:"handleGenderChanged",value:function(e){var t=this.state.customer;t.gender=e.target.value,this.setState({customer:t})}},{key:"handleStatusChanged",value:function(e){var t=this.state.customer;t.status=e.target.value,this.setState({customer:t})}},{key:"handleBranchChanged",value:function(e){var t=this.state.customer;t.branch=e.target.value,this.setState({customer:t})}},{key:"handleGithubChanged",value:function(e){var t=this.state.customer;t.github=e.target.value,this.setState({customer:t})}},{key:"depName",value:function(e){return 1===e?"ap":2===e?"fe":3===e?"be":4===e?"cp":5===e?"ui":6===e?"gd":7===e?"vi":void 0}},{key:"depid",value:function(e){return"ap"===e?1:"fe"===e?2:"be"===e?3:"cp"===e?4:"ui"===e?5:"gd"===e?6:"vi"===e?7:void 0}},{key:"depFullName",value:function(e){return"ap"===e?"App Development":"fe"===e?"Frontend Development":"be"===e?"Backend Development":"cp"===e?"Competitive Coding":"ui"===e?"UI/UX Development":"gd"===e?"Game Development":"vi"===e?"Video Editing":void 0}},{key:"handleButtonClicked",value:function(e){if(e.preventDefault(),4!==this.state.customer.bits_id.length)window.alert("Please enter the last four digits from your BITS ID");else if(null!==this.props.person){var t={github:this.state.customer.github,bits_id:"2021".concat(this.state.customer.branch).concat(this.state.customer.status).concat(this.state.customer.bits_id,"P"),gender:"M",pr1:this.state.customer.pr1,pr2:this.state.customer.pr2,pr3:this.state.customer.pr3,pr4:this.state.customer.pr4,pr5:this.state.customer.pr5,pr6:this.state.customer.pr6,pr7:this.state.customer.pr7},s={method:"put",url:"https://api.cc-recruitments.tech/user-api/CandidateProfile/",headers:{"content-type":"application/json","X-CSRFToken":this.props.person.csrf},data:t,withCredentials:!0};u()(s).then((function(e){200===e.status&&window.alert("Profile updated successfully"),console.log(e)})).catch((function(e){window.alert("Something went wrong, please try again"),console.log(e)}))}else window.alert("Please login again")}},{key:"render",value:function(){var e=this;return this.props.loggedIn&&null!==this.props.person?Object(l.jsx)("div",{className:"w-full flex items-center justify-center mt-10 mb-10 p-4 md:p-8",children:Object(l.jsx)(O.a,{children:Object(l.jsxs)("form",{className:"reg-form",children:[Object(l.jsx)("h2",{className:"text-3xl text-bold text-center text-white py-5 mt-8",children:"Profile"}),Object(l.jsxs)("div",{className:"md:px-12 px-4 md:px-8` pb-10 text-white",children:[Object(l.jsx)("div",{className:"w-full mb-2 py-3",children:Object(l.jsxs)("div",{className:"flex items-center ",children:[Object(l.jsx)("i",{className:"ml-3 fill-current text-white text-xs z-10 fas fa-user "}),Object(l.jsx)("input",{type:"text",value:this.state.customer.name,disabled:!0,onChange:this.handleNameChanged.bind(this),placeholder:"Name",className:"-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-white focus:outline-none "})]})}),Object(l.jsx)("div",{className:"w-full mb-2 py-3",children:Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)("i",{className:"ml-3 fill-current text-white text-xs z-10 fas fa-lock"}),Object(l.jsx)("input",{type:"text",disabled:!0,value:this.state.customer.bits_email,onChange:this.handleBitsEmailChanged.bind(this),placeholder:"BITS Email",className:"-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-black-900 p-8 rounded px-3 py-2 border-black text-white focus:outline-none"})]})}),Object(l.jsx)("div",{className:"w-full mb-2 py-3",children:Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)("i",{className:"ml-3 fill-current text-white text-xs z-10 fas fa-user"}),Object(l.jsx)("input",{type:"text",value:this.state.customer.github,onChange:this.handleGithubChanged.bind(this),placeholder:"GitHub link (optional)",className:"-ml-2 px-8  bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black text-white focus:outline-none"})]})}),Object(l.jsxs)("div",{className:"ml-4 md:ml-0 mb-2 mt-6 text-sm md:text-base",children:[Object(l.jsx)("div",{className:"text-lg",children:"BITS ID"}),Object(l.jsxs)("div",{className:"flex items-center w-10/12",children:["2021",Object(l.jsx)("div",{className:"inline-flex",children:Object(l.jsxs)("select",{style:{background:"transparent",color:"white"},id:"branchSelect",value:this.state.customer.branch,onChange:function(t){var s=e.state.customer;s.branch=t.target.value,e.setState({customer:s})},className:"border-2 border-red-500 appearance-none rounded mx-1 p-1 md:mx-2 bg-black hover:border-gray-400",children:[Object(l.jsx)("option",{className:"bg-ccblack",value:"A1",children:"A1"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A2",children:"A2"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A3",children:"A3"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A4",children:"A4"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A5",children:"A5"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A7",children:"A7"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A8",children:"A8"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"A9",children:"A9"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"AA",children:"AA"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"AB",children:"AB"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"B1",children:"B1"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"B2",children:"B2"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"B3",children:"B3"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"B4",children:"B4"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"B5",children:"B5"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"D2",children:"D2"})]})}),Object(l.jsx)("div",{className:"inline-flex",children:Object(l.jsxs)("select",{style:{background:"transparent",color:"white"},id:"statusSelect",value:this.state.customer.status,onChange:function(t){var s=e.state.customer;s.status=t.target.value,e.setState({customer:s})},className:"border-2 border-red-500 appearance-none rounded mx-1 md:mx-2 p-1 bg-black hover:border-gray-400",children:[Object(l.jsx)("option",{className:"bg-ccblack",value:"PS",children:"PS"}),Object(l.jsx)("option",{className:"bg-ccblack",value:"TS",children:"TS"})]})}),Object(l.jsx)("div",{className:"special w-3/4",children:Object(l.jsx)("input",{disabled:!0,type:"text",value:this.state.customer.bits_id,onChange:this.handleBitsIdChanged.bind(this),placeholder:"FOUR DIGIT ID",maxLength:"4",style:{display:"inline-block",width:"100%"},className:"bg-transparent border-b-2 border-red-500 border-teal-600 bg-teal-400 p-2 rounded text-white focus:outline-none"})})," P"]})]}),Object(l.jsx)("div",{className:"ml-4 md:ml-0 `text-white mt-3 py-3",children:"Arrange in decreasing order of your preference (Draggable)"}),Object(l.jsx)("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center"},className:"text-white",children:Object(l.jsx)(F.b,{name:"list2",list:this.state.prlist,onListUpdate:function(t){e.setState({prlist:t});var s=e.state.customer;s.pr1=e.depName(t[0].id),s.pr2=e.depName(t[1].id),s.pr3=e.depName(t[2].id),s.pr4=e.depName(t[3].id),s.pr5=e.depName(t[4].id),s.pr6=e.depName(t[5].id),s.pr7=e.depName(t[6].id),e.setState({customer:s})},style:{width:"300px"},children:this.state.prlist.map((function(e,t){return Object(l.jsx)(F.a,{children:Object(l.jsx)("div",{className:"px-8 mt-2 mb-2 bg-transparent hover:border-gray-400 border-2 border-red-500 rounded px-3 py-2 text-white-700 focus:outline-none",style:{cursor:"pointer"},children:e.name})},"item-".concat(t))}))})}),Object(l.jsx)("button",{onClick:this.handleButtonClicked.bind(this),className:"w-full py-2 mt-5 rounded-full bg-red-500 text-gray-100 hover:bg-red-600 focus:outline-none",children:"Submit"})]})]})})}):Object(l.jsx)(G,{})}}]),s}(c.Component),P=s(173),Q=s.n(P),H=s(175),J=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(!1),n=Object(r.a)(a,2),o=n[0],d=n[1],m=Object(c.useState)(!0),j=Object(r.a)(m,2),b=j[0],h=j[1],x=Object(c.useState)(null),v=Object(r.a)(x,2),O=v[0],w=v[1],y=Object(c.useState)(!1),S=Object(r.a)(y,2),k=S[0],C=S[1],I=function(){C(!0)},T=function(e){d(e),!1===e&&i(null)},B=function(e){h(e)},q={url:"https://api.cc-recruitments.tech/user-api/getCSRF",method:"get",headers:{"Content-Type":"application/json"},withCredentials:!0};Object(c.useEffect)((function(){b&&u()(q).then((function(e){if(console.log(e),200===e.status){var t=new H.a,s={email:e.data.email,name:e.data.name,csrf:t.get("csrftoken"),testSubmitted:e.data.exam_given};i(s),d(!0),window.alert("Welcome "+e.data.name+"!")}})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){if(null!==s){var e={method:"get",url:"https://api.cc-recruitments.tech/user-api/CandidateProfile/",headers:{"content-type":"application/json","X-CSRFToken":s.csrf},withCredentials:!0};u()(e).then((function(e){if(200===e.status){var t={pr1:e.data.pr1,pr2:e.data.pr2,pr3:e.data.pr3,pr4:e.data.pr4,pr5:e.data.pr5,pr6:e.data.pr6,pr7:e.data.pr7,github:e.data.github,branch:e.data.bits_id.substring(4,6),status:e.data.bits_id.substring(6,8),id:e.data.bits_id.substring(8,12)};w(t)}})).catch((function(e){console.log(e)}))}}),[s]);var D=Object(c.useState)(!1),E=Object(r.a)(D,2),F=E[0],G=E[1],P=function(){G(!F)};return Object(c.useEffect)((function(){var e=function(){window.innerWidth>768&&F&&(G(!1),console.log("i resized"))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.a,{children:[Object(l.jsxs)(Q.a,{top:!0,children:[Object(l.jsx)(f,{toggle:P,loggedIn:o,toggleLoggedIn:T,person:s,toggleWantsIn:B}),Object(l.jsx)(A,{isOpen:F,toggle:P,loggedIn:o,toggleLoggedIn:T,person:s,toggleWantsIn:B})]}),Object(l.jsxs)(_.c,{children:[Object(l.jsx)(_.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(_.a,{path:"/preferences",render:function(){return Object(l.jsx)(M,{loggedIn:o,person:s,preferences:O})}}),Object(l.jsx)(_.a,{path:"/projects",component:L}),Object(l.jsx)(_.a,{path:"/test",render:function(){return Object(l.jsx)(N,{loggedIn:o,person:s,toggleStarted:I,testStarted:k})}})]})]})})};s(367);var R=function(e){return Object(l.jsxs)("div",{className:"relative z-10",children:[Object(l.jsxs)("div",{id:"spinnerdiv",children:[Object(l.jsx)("div",{id:"wrapD3Cube",children:Object(l.jsxs)("div",{id:"D3Cube",children:[Object(l.jsxs)("div",{id:"side1",children:[Object(l.jsx)("div",{id:"main1"}),Object(l.jsx)("div",{id:"sidediv1"})]}),Object(l.jsxs)("div",{id:"side2",children:[Object(l.jsx)("div",{id:"main2"}),Object(l.jsx)("div",{id:"sidediv2"})]}),Object(l.jsxs)("div",{id:"side3",children:[Object(l.jsx)("div",{id:"main3"}),Object(l.jsx)("div",{id:"sidediv3"})]}),Object(l.jsxs)("div",{id:"side4",children:[Object(l.jsx)("div",{id:"main4"}),Object(l.jsx)("div",{id:"sidediv4"})]}),Object(l.jsxs)("div",{id:"side5",children:[Object(l.jsx)("div",{id:"main5"}),Object(l.jsx)("div",{id:"sidediv5"})]}),Object(l.jsx)("div",{id:"side6"})]})}),Object(l.jsx)("p",{id:"spinner_txt",children:"CODING CLUB"})]})," "]})};var W=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(c.useEffect)((function(){setTimeout((function(){i(!0)}),1500)})),Object(l.jsx)("div",{style:{height:"100vh"},children:s?Object(l.jsx)(J,{}):Object(l.jsx)(R,{})})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,369)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root")),U()},84:function(e){e.exports=JSON.parse('[{"id":1,"title":"Ma","skills":"HTML CSS Git React","target":"#","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.","image":"https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"},{"id":2,"title":"Cham","skills":"HTML CSS Git React","target":"#","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.","image":"https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"},{"id":3,"title":"Mim","skills":"HTML CSS Git React","target":"#","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.","image":"https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"},{"id":4,"title":"Four","skills":"HTML CSS Git React","target":"#","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.","image":"https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"},{"id":5,"title":"Five","skills":"HTML CSS Git React","target":"#","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.","image":"https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"},{"id":6,"title":"Six","skills":"HTML CSS Git React","target":"#","description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.","image":"https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"}]')}},[[368,1,2]]]);
//# sourceMappingURL=main.7c2e291c.chunk.js.map
(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4d1c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("ffc1"),a("551c");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{attrs:{name:"header"}}),a("main",[a("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[a("router-view")],1)],1),a("router-view",{attrs:{name:"footer"}})],1)},i=[],r=a("7c76"),o={components:{FadeTransition:r["a"]}},l=o,c=a("2877"),d=Object(c["a"])(l,n,i,!1,null,null,null),u=d.exports,p=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header-global"},[a("base-nav",{staticClass:"navbar-main",attrs:{transparent:"",type:"",effect:"light",expand:""},scopedSlots:t._u([{key:"content-header",fn:function(t){var e=t.closeMenu;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 collapse-brand"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"img/brand/logo.png"}})])]),a("div",{staticClass:"col-6 collapse-close"},[a("close-button",{on:{click:e}})],1)])}}])},[a("router-link",{staticClass:"navbar-brand mr-lg-5",attrs:{slot:"brand",to:"/"},slot:"brand"},[a("img",{attrs:{src:"img/brand/logo.png",alt:"logo"}})]),a("ul",{staticClass:"navbar-nav navbar-nav-hover align-items-lg-center"},[a("a",{staticClass:"nav-link",attrs:{slot:"title",href:"#product",role:"button"},slot:"title"},[a("i",{staticClass:"fa fa-tablet d-lg-none"}),a("span",{staticClass:"nav-link-inner--text"},[t._v(" Product")])]),a("a",{staticClass:"nav-link",attrs:{slot:"title",href:"#features",role:"button"},slot:"title"},[a("i",{staticClass:"fa fa-cogs d-lg-none"}),a("span",{staticClass:"nav-link-inner--text"},[t._v("Features")])]),a("a",{staticClass:"nav-link",attrs:{slot:"title",href:"#team",role:"button"},slot:"title"},[a("i",{staticClass:"fa fa-users d-lg-none"}),a("span",{staticClass:"nav-link-inner--text"},[t._v("Team")])])])],1)],1)},g=[],h=function(){var t,e,a=this,s=a.$createElement,n=a._self._c||s;return n("nav",{staticClass:"navbar",class:[{"navbar-expand-lg":a.expand},(t={},t["navbar-"+a.effect]=a.effect,t),{"navbar-transparent":a.transparent},(e={},e["bg-"+a.type]=a.type,e),{rounded:a.round}]},[n("div",{staticClass:"container"},[a._t("container-pre"),a._t("brand",[n("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),a.onTitleClick(t)}}},[a._v("\n                "+a._s(a.title)+"\n            ")])]),n("navbar-toggle-button",{attrs:{toggled:a.toggled,target:a.contentId},nativeOn:{click:function(t){t.stopPropagation(),a.toggled=!a.toggled}}}),a._t("container-after"),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:a.closeMenu,expression:"closeMenu"}],staticClass:"collapse navbar-collapse",class:{show:a.toggled},attrs:{id:a.contentId}},[n("div",{staticClass:"navbar-collapse-header"},[a._t("content-header",null,{closeMenu:a.closeMenu})],2),a._t("default",null,{closeMenu:a.closeMenu})],2)],2)])},m=[],v=(a("6b54"),a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":t.target,"aria-controls":t.target,"aria-expanded":t.toggled,"aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}),b=[],y={props:{target:{type:[String,Number],description:"Button target element"},toggled:{type:Boolean,default:!1,description:"Whether button is toggled"}}},C=y,w=Object(c["a"])(C,v,b,!1,null,null,null),_=w.exports,x={name:"base-nav",components:{FadeTransition:r["a"],NavbarToggleButton:_},props:{type:{type:String,default:"primary",description:"Navbar type (e.g default, primary etc)"},title:{type:String,default:"",description:"Title of navbar"},contentId:{type:[String,Number],default:Math.random().toString(),description:"Explicit id for the menu. By default it's a generated random number"},effect:{type:String,default:"dark",description:"Effect of the navbar (light|dark)"},round:{type:Boolean,default:!1,description:"Whether nav has rounded corners"},transparent:{type:Boolean,default:!1,description:"Whether navbar is transparent"},expand:{type:Boolean,default:!1,description:"Whether navbar should contain `navbar-expand-lg` class"}},data:function(){return{toggled:!1}},methods:{onTitleClick:function(t){this.$emit("title-click",t)},closeMenu:function(){this.toggled=!1}}},k=x,S=Object(c["a"])(k,h,m,!1,null,null,null),O=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#"+t.target,"aria-controls":t.target,"aria-expanded":t.expanded,"aria-label":"Toggle navigation"},on:{click:t.handleClick}},[a("span"),a("span")])},B=[],$={name:"close-button",props:{target:{type:[String,Number],description:"Close button target element"},expanded:{type:Boolean,description:"Whether button is expanded (aria-expanded attribute)"}},methods:{handleClick:function(t){this.$emit("click",t)}}},E=$,A=Object(c["a"])(E,j,B,!1,null,null,null),I=A.exports,W={components:{BaseNav:O,CloseButton:I}},z=W,P=Object(c["a"])(z,f,g,!1,null,null,null),T=P.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer has-cards"},[a("div",{staticClass:"row align-items-center justify-content-md-between"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"copyright"},[t._v("\n        © "+t._s(t.year)+"\n        Created with help from \n        "),a("a",{attrs:{href:"https://www.creative-tim.com",target:"_blank",rel:"noopener"}},[t._v("Creative Tim")]),t._v("\n        &\n        "),a("a",{attrs:{href:"https://www.binarcode.com",target:"_blank",rel:"noopener"}},[t._v("Binar Code")])])])])])},D=[],N={name:"app-footer",data:function(){return{year:(new Date).getFullYear()}}},L=N,F=Object(c["a"])(L,M,D,!1,null,null,null),R=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"position-relative"},[a("section",{staticClass:"section-shaped my-0"},[t._m(0),a("div",{staticClass:"container shape-container d-flex"},[a("div",{staticClass:"col px-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[t._m(1),a("p",{staticClass:"lead  text-white"},[t._v("\n                Improve your communication skills and be more articulate with\n                real-time speech analysis and feedback system that uses\n                Artificial Intelligence to enhance your day to day\n                conversations.\n              ")]),a("div",{staticClass:"btn-wrapper"},[a("base-button",{staticClass:"mb-3 mb-sm-0",attrs:{tag:"a",href:"#waitlist",type:"white",icon:"fa fa-feed"}},[t._v("\n                  Join the Waitlist\n                ")])],1)])])])])])]),a("section",{staticClass:"section section-lg pt-lg-0 mt--200"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row row-grid"},[a("div",{staticClass:"col-lg-3"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",attrs:{name:"fa fa-microphone",type:"primary",rounded:""}}),a("h6",{staticClass:"text-primary text-uppercase"},[t._v("\n                  Daily seamless conversation recording\n                ")])],1)],1),a("div",{staticClass:"col-lg-3"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",attrs:{name:"fa fa-area-chart",type:"info",rounded:""}}),a("h6",{staticClass:"text-info text-uppercase "},[t._v("\n                  Distilled and clear analysis (Live & Delayed)\n                ")])],1)],1),a("div",{staticClass:"col-lg-3"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",attrs:{name:"fa fa-leanpub",type:"warning",rounded:""}}),a("h6",{staticClass:"text-warning text-uppercase"},[t._v("\n                  Scheduled and Spaced hassle free learning\n                ")])],1)],1),a("div",{staticClass:"col-lg-3"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",attrs:{name:"fa fa-trophy",type:"success",rounded:""}}),a("h6",{staticClass:"text-success text-uppercase"},[t._v("\n                  Show off your conversational skills\n                ")])],1)],1)])])])])]),a("section",{staticClass:"section section-lg",attrs:{id:"features"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row row-grid align-items-center"},[t._m(2),a("div",{staticClass:"col-md-6 order-md-1"},[a("div",{staticClass:"pr-md-5"},[a("icon",{staticClass:"mb-5",attrs:{name:"fa fa-cogs",size:"lg",type:"success",shadow:"",rounded:""}}),a("h3",[t._v("Intelligent and competent feedback")]),a("p",[t._v("\n              At its core Speech Schema is a Machine Learning based system\n              that provides users with concise and actionable feedback on\n              their day to day conversations.\n            ")]),a("ul",{staticClass:"list-unstyled mt-5"},[a("li",{staticClass:"py-2"},[a("div",{staticClass:"d-flex align-items-center"},[a("badge",{staticClass:"mr-3",staticStyle:{width:"19px",height:"19px"},attrs:{type:"success",icon:"fa fa-lock",circle:""}}),a("h6",{staticClass:"mb-0"},[t._v("\n                    On device analysis and learning protects users data.\n                  ")])],1)]),a("li",{staticClass:"py-2"},[a("div",{staticClass:"d-flex align-items-center"},[a("badge",{staticClass:"mr-3",staticStyle:{width:"19px",height:"19px"},attrs:{type:"success",icon:"fa fa-magic",circle:""}}),a("h6",{staticClass:"mb-0"},[t._v("\n                    An adverserial based approach maintains user compatibility\n                    and always challenges the user to improve.\n                  ")])],1)]),a("li",{staticClass:"py-2"},[a("div",{staticClass:"d-flex align-items-center"},[a("badge",{staticClass:"mr-3",staticStyle:{width:"19px",height:"19px"},attrs:{type:"success",icon:"fa fa-mobile",circle:""}}),a("h6",{staticClass:"mb-0"},[t._v("\n                    Background processing of voice enables the use to always\n                    remain handsfree.\n                  ")])],1)])])],1)])])])]),a("section",{staticClass:"section section section-shaped my-0 overflow-hidden"},[t._m(3),a("div",{staticClass:"container "},[a("div",{staticClass:"align-items-center"},[a("div",{staticClass:"d-flex px-3"},[a("div",[a("icon",{staticClass:"bg-gradient-white",attrs:{name:"ni ni-building",size:"lg",color:"primary",shadow:"",rounded:""}})],1),t._m(4)]),a("b-carousel",{attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#000000","img-width":"200","img-height":"200"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/1.png"}}),a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/2.png"}}),a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/3.png"}}),a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/4.png"}}),a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/5.png"}}),a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/6.png"}}),a("b-carousel-slide",{attrs:{"img-src":"img/wireframe/7.png"}})],1),a("section",{staticClass:"section section-lg pt-0"},[a("div",{staticClass:"container"},[a("card",{staticClass:"border-0",attrs:{gradient:"warning","no-body":"","shadow-size":"lg"}},[a("div",{staticClass:"p-5"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-8"},[a("h3",{staticClass:"text-white"},[t._v("\n                      “We all need people who will give us feedback. That’s\n                      how we improve.” – Bill Gates\n                    ")]),a("h5",{staticClass:"text-white"},[t._v("\n                      We believe there is a better way to provide feedback. An\n                      unbiased, always present personalized system that has\n                      your aspirations at the core of its heart.\n                    ")])]),a("div",{staticClass:"col-lg-3 ml-lg-auto"},[a("base-button",{attrs:{tag:"a",href:"#waitlist",type:"white",block:"",size:"lg",icon:"fa fa-feed"}},[t._v("\n                      Join the Waitlist\n                    ")])],1)])])])],1)])],1)])]),a("section",{staticClass:"section section-lg",attrs:{id:"team"}},[a("div",{staticClass:"container"},[t._m(5),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-lg-4 mb-5 mb-lg-0"},[a("div",{staticClass:"px-4"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"img/people/Chaitanya.jpg",expression:"'img/people/Chaitanya.jpg'"}],staticClass:"rounded-circle img-center img-fluid shadow shadow-lg--hover",staticStyle:{width:"200px"}}),a("div",{staticClass:"pt-4 text-center"},[t._m(6),a("div",{staticClass:"mt-3"},[a("base-button",{attrs:{tag:"a",href:"#",type:"warning",icon:"fa fa-twitter",rounded:"","icon-only":""}}),a("base-button",{attrs:{tag:"a",href:"#",type:"warning",icon:"fa fa-linkedin",rounded:"","icon-only":""}}),a("base-button",{attrs:{tag:"a",href:"#",type:"warning",icon:"fa fa-dribbble",rounded:"","icon-only":""}})],1)])])]),a("div",{staticClass:"col-md-6 col-lg-4 mb-5 mb-lg-0"},[a("div",{staticClass:"px-4"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"img/people/Dana.png",expression:"'img/people/Dana.png'"}],staticClass:"rounded-circle img-center img-fluid shadow shadow-lg--hover",staticStyle:{width:"200px"}}),a("div",{staticClass:"pt-4 text-center"},[t._m(7),a("div",{staticClass:"mt-3"},[a("base-button",{attrs:{tag:"a",href:"#",type:"primary",icon:"fa fa-twitter",rounded:"","icon-only":""}}),a("base-button",{attrs:{tag:"a",href:"#",type:"primary",icon:"fa fa-linkedin",rounded:"","icon-only":""}}),a("base-button",{attrs:{tag:"a",href:"#",type:"primary",icon:"fa fa-dribbble",rounded:"","icon-only":""}})],1)])])]),a("div",{staticClass:"col-md-6 col-lg-4 mb-5 mb-lg-0"},[a("div",{staticClass:"px-4"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"img/people/Sachin.png",expression:"'img/people/Sachin.png'"}],staticClass:"rounded-circle img-center img-fluid shadow shadow-lg--hover",staticStyle:{width:"200px"}}),a("div",{staticClass:"pt-4 text-center"},[t._m(8),a("div",{staticClass:"mt-3"},[a("base-button",{attrs:{tag:"a",href:"#",type:"success",icon:"fa fa-twitter",rounded:"","icon-only":""}}),a("base-button",{attrs:{tag:"a",href:"#",type:"success",icon:"fa fa-linkedin",rounded:"","icon-only":""}}),a("base-button",{attrs:{tag:"a",href:"#",type:"success",icon:"fa fa-dribbble",rounded:"","icon-only":""}})],1)])])])])])]),a("section",{staticClass:"section section-shaped my-0",attrs:{id:"waitlist"}},[a("div",{staticClass:"container pt-lg"},[a("section",{staticClass:"section section-lg  section-contact-us"},[a("div",{staticClass:"container "},[a("div",{staticClass:"row justify-content-center mt--300 "},[a("div",{staticClass:"col-lg-8 "},[a("card",{staticStyle:{overflow:"hidden"},attrs:{gradient:"primary",shadow:"","body-classes":"p-lg-5"}},[a("h4",{staticClass:"mb-1 text-white"},[t._v("Get ahead of the line")]),a("p",{staticClass:"mt-0 text-white"},[t._v("\n                  Join to stay informed about the product release coming later\n                  this year.\n                ")]),a("iframe",{staticClass:"iframer",attrs:{scrolling:"no",width:"640px",height:"700px",src:"https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAciPgKpUNjBKWlhLTFZKVzRXSVdLUE04Rk85UTA3Si4u&embed=true",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",msallowfullscreen:""}})])],1)])])])])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shape shape-style-2 shape-primary shape-skew"},[a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"display-3  text-white",attrs:{id:"product"}},[a("span",[t._v("A Realtime Speech Feedback System ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 order-md-2"},[a("img",{staticClass:"img-fluid floating",attrs:{src:"img/theme/promo-1.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shape shape-style-3 shape-default shape-skew",staticStyle:{"background-color":"#000000 !important"}},[a("span"),a("span"),a("span"),a("span"),a("span"),a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-4"},[a("h4",{staticClass:"display-3 text-white"},[t._v("\n              Modern Interface for the feedback system\n            ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center text-center mb-lg"},[a("div",{staticClass:"col-lg-8"},[a("h2",{staticClass:"display-3"},[t._v("The Amazing Team")]),a("p",{staticClass:"lead text"},[t._v("\n            Our team brings in a wide range of skills from the fields of\n            Biotechnology, Computer Science and Robotics with experience in\n            scaling startups.\n          ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"title"},[a("span",{staticClass:"d-block mb-1"},[t._v("Chaitanya Thammineni")]),a("small",{staticClass:"h6 text-muted"},[t._v("Fullstack and Machine Learning Engineer\n                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"title"},[a("span",{staticClass:"d-block mb-1"},[t._v("Dana Moukheiber")]),a("small",{staticClass:"h6 text-muted"},[t._v("Operations and Marketing Strategist")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"title"},[a("span",{staticClass:"d-block mb-1"},[t._v("Sachin Venugopal")]),a("small",{staticClass:"h6 text-muted"},[t._v("Fullstack Engineer and App Developer\n                ")])])}],q={name:"home",components:{},data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},K=q,U=(a("e9c9"),Object(c["a"])(K,J,V,!1,null,"0643677a",null)),G=U.exports;s["default"].use(p["a"]);var Q=new p["a"]({mode:"history",linkExactActiveClass:"active",routes:[{path:"/",name:"landing",components:{header:T,default:G,footer:R}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),Z=(a("4d1c"),a("d5a0"),a("a4d4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:["badge-"+t.type,t.rounded?"badge-pill":"",t.circle&&"badge-circle"]},[t._t("default",[t.icon?a("i",{class:t.icon}):t._e()])],2)}),H=[],X={name:"badge",props:{tag:{type:String,default:"span",description:"Html tag to use for the badge."},rounded:{type:Boolean,default:!1,description:"Whether badge is of pill type"},circle:{type:Boolean,default:!1,description:"Whether badge is circle"},icon:{type:String,default:"",description:"Icon name. Will be overwritten by slot if slot is used"},type:{type:String,default:"default",description:"Badge type (primary|info|danger|default|warning|success)"}}},Y=X,tt=Object(c["a"])(Y,Z,H,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"btn",class:t.classes,attrs:{type:"button"===t.tag?t.nativeType:""},on:{click:t.handleClick}},[t.$slots.icon||t.icon&&t.$slots.default?a("span",{staticClass:"btn-inner--icon"},[t._t("icon",[a("i",{class:t.icon})])],2):t._e(),t.$slots.default?t._e():a("i",{class:t.icon}),t.$slots.icon||t.icon&&t.$slots.default?a("span",{staticClass:"btn-inner--text"},[t._t("default",[t._v("\n        "+t._s(t.text)+"\n      ")])],2):t._e(),t.$slots.icon||t.icon?t._e():t._t("default")],2)},st=[],nt=a("ade3"),it={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var t=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(nt["a"])({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&t.push("btn-".concat(this.size)),t}},methods:{handleClick:function(t){this.$emit("click",t)}}},rt=it,ot=Object(c["a"])(rt,at,st,!1,null,null,null),lt=ot.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group",class:[{"input-group":t.hasIcon},{"has-danger":t.error},{focused:t.focused},{"input-group-alternative":t.alternative},{"has-label":t.label||t.$slots.label},{"has-success":!0===t.valid},{"has-danger":!1===t.valid}]},[t._t("label",[t.label?a("label",{class:t.labelClasses},[t._v("\n            "+t._s(t.label)+"\n            "),t.required?a("span",[t._v("*")]):t._e()]):t._e()]),t.addonLeftIcon||t.$slots.addonLeft?a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._t("addonLeft",[a("i",{class:t.addonLeftIcon})])],2)]):t._e(),t._t("default",[a("input",t._g(t._b({staticClass:"form-control",class:[{"is-valid":!0===t.valid},{"is-invalid":!1===t.valid},t.inputClasses],attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))],null,t.slotData),t.addonRightIcon||t.$slots.addonRight?a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._t("addonRight",[a("i",{class:t.addonRightIcon})])],2)]):t._e(),t._t("infoBlock"),t._t("helpBlock",[t.error?a("div",{staticClass:"text-danger invalid-feedback",class:{"mt-2":t.hasIcon},staticStyle:{display:"block"}},[t._v("\n            "+t._s(t.error)+"\n        ")]):t._e()])],2)},dt=[];a("8e6e"),a("ac6a"),a("cadf"),a("456d");function ut(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(a),!0).forEach((function(e){Object(nt["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ut(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ft={inheritAttrs:!1,name:"base-input",props:{required:{type:Boolean,description:"Whether input is required (adds an asterix *)"},valid:{type:Boolean,description:"Whether is valid",default:void 0},alternative:{type:Boolean,description:"Whether input is of alternative layout"},label:{type:String,description:"Input label (text before input)"},error:{type:String,description:"Input error (below input)"},labelClasses:{type:String,description:"Input label css classes"},inputClasses:{type:String,description:"Input css classes"},value:{type:[String,Number],description:"Input value"},addonRightIcon:{type:String,description:"Addon right icon"},addonLeftIcon:{type:String,description:"Addont left icon"}},data:function(){return{focused:!1}},computed:{listeners:function(){return pt(pt({},this.$listeners),{},{input:this.updateValue,focus:this.onFocus,blur:this.onBlur})},slotData:function(){return pt({focused:this.focused},this.listeners)},hasIcon:function(){var t=this.$slots,e=t.addonRight,a=t.addonLeft;return void 0!==e||void 0!==a||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}},methods:{updateValue:function(t){var e=t.target.value;this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}}},gt=ft,ht=Object(c["a"])(gt,ct,dt,!1,null,null,null),mt=ht.exports,vt=function(){var t,e,a,s=this,n=s.$createElement,i=s._self._c||n;return i("div",{staticClass:"card",class:[{"card-lift--hover":s.hover},{shadow:s.shadow},(t={},t["shadow-"+s.shadowSize]=s.shadowSize,t),(e={},e["bg-gradient-"+s.gradient]=s.gradient,e),(a={},a["bg-"+s.type]=s.type,a)]},[s.$slots.header?i("div",{staticClass:"card-header",class:s.headerClasses},[s._t("header")],2):s._e(),s.noBody?s._e():i("div",{staticClass:"card-body",class:s.bodyClasses},[s._t("default")],2),s.noBody?s._t("default"):s._e(),s.$slots.footer?i("div",{staticClass:"card-footer",class:s.footerClasses},[s._t("footer")],2):s._e()],2)},bt=[],yt={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},Ct=yt,wt=Object(c["a"])(Ct,vt,bt,!1,null,null,null),_t=wt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon icon-shape",class:[t.size&&"icon-"+t.size,t.type&&"icon-shape-"+t.type,t.gradient&&"bg-gradient-"+t.gradient,t.shadow&&"shadow",t.rounded&&"rounded-circle",t.color&&"text-"+t.color]},[t._t("default",[a("i",{class:t.name})])],2)},kt=[],St={name:"icon",props:{name:{type:String,default:"",description:"Icon name"},size:{type:String,default:"",description:"Icon size"},type:{type:String,default:"",description:"Icon type (primary, warning etc)"},gradient:{type:String,default:"",description:"Icon gradient type (primary, warning etc)"},color:{type:String,default:"",description:"Icon color (primary, warning etc)"},shadow:{type:Boolean,default:!1,description:"Whether icon has shadow"},rounded:{type:Boolean,default:!1,description:"Whether icon is rounded"}}},Ot=St,jt=Object(c["a"])(Ot,xt,kt,!1,null,null,null),Bt=jt.exports,$t={install:function(t){t.component(et.name,et),t.component(lt.name,lt),t.component(mt.name,mt),t.component(_t.name,_t),t.component(Bt.name,Bt)}},Et={bind:function(t,e,a){t.clickOutsideEvent=function(s){t==s.target||t.contains(s.target)||a.context[e.expression](s)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}},At={install:function(t){t.directive("click-outside",Et)}},It=At,Wt=a("caf9"),zt={install:function(t){t.use($t),t.use(It),t.use(Wt["a"])}},Pt=a("9483");Object(Pt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Tt=a("5f5b");
/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/s["default"].use(Tt["a"]),s["default"].config.productionTip=!1,s["default"].use(zt),new s["default"]({router:Q,render:function(t){return t(u)}}).$mount("#app")},7131:function(t,e,a){},a4d4:function(t,e,a){},d5a0:function(t,e,a){},e9c9:function(t,e,a){"use strict";var s=a("7131"),n=a.n(s);n.a}});
//# sourceMappingURL=app.cc51713d.js.map
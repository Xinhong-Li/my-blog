(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,h=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0ac01a":"0cfc7671","chunk-2d0b16bf":"c22b5994","chunk-2d0b59d4":"558f6514","chunk-2d0c119b":"9782259d","chunk-2d0cb71d":"4006a321","chunk-2d0cbede":"1243e43e","chunk-2d0cf113":"f26e56a6","chunk-2d0cfee0":"d2db3816","chunk-2d0d2b9e":"54a9b49e","chunk-2d0d67f2":"8f38470d","chunk-2d0db0b8":"09598d4c","chunk-2d0dd490":"c98daea7","chunk-2d0e62c7":"75dc6173","chunk-2d0e6676":"5ad58ba5","chunk-2d0e66b9":"ffe937f1","chunk-2d0e9b91":"2271310b","chunk-2d0f045c":"678dc00d","chunk-2d2088c9":"5679c358","chunk-2d208e98":"d2cf433a","chunk-2d209b6e":"6d9c299d","chunk-2d20f6e5":"458a6251","chunk-2d20fe0b":"73b8b9bd","chunk-2d2100b9":"1b5005fc","chunk-2d212fb8":"4a056256","chunk-2d213de4":"7751a664","chunk-2d216083":"107bb76e","chunk-2d21af72":"8d39fae8","chunk-2d21e5b3":"f42b1183","chunk-2d21eb37":"4e606f90","chunk-2d21ef96":"1439256b","chunk-2d221885":"6b1fbf59","chunk-2d222369":"57b7fac7","chunk-2d22255a":"9d0ee3a9","chunk-2d22669c":"656d678d","chunk-2d22c1ad":"1e1f286b","chunk-2d238055":"aa0dea16"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/blog/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e79":function(t,e,n){"use strict";var r=n("85c6"),o=n.n(r);o.a},"1d59":function(t,e,n){},"292a":function(t,e,n){},"29f7":function(t,e,n){"use strict";var r=n("aa18"),o=n.n(r);o.a},"2dfd":function(t,e,n){},"3fc2":function(t,e,n){"use strict";var r=n("aadf"),o=n.n(r);o.a},"4d30":function(t,e,n){},"53a3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={components:{}},s=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,o,a,!1,null,null,null),l=u.exports,d=n("9483");Object(d["a"])("".concat("/blog/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"page"})])}],v={},m=v,b=(n("b60c"),Object(c["a"])(m,f,p,!1,null,"953104de",null)),g=b.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("post-view",[n("main",{staticClass:"mark"},[n("h2",{staticClass:"doc-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"doc-info"},[n("div",{staticClass:"doc-info__span"},[n("i",{staticClass:"material-icons"},[t._v("create")]),n("span",[t._v(t._s(t.time))])]),n("div",{staticClass:"doc-info__span"},[n("i",{staticClass:"material-icons"},[t._v("visibility")]),n("span",[t._v(t._s(t.nhits))])]),n("div",{staticClass:"doc-tag"},[n("base-tag",{attrs:{items:t.tags}})],1)]),n("hr",{staticStyle:{margin:"0"}}),n("div",{staticClass:"mark",staticStyle:{margin:"0"},domProps:{innerHTML:t._s(t.html)}})])])},_=[],y=(n("d81d"),n("ac1f"),n("5319"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-container"},t._l(t.items,(function(e){return n("router-link",{key:e.to,staticClass:"tag-item",staticStyle:{color:"inherit"},attrs:{to:e.to}},[n("div",{staticClass:"tag-name"},[t._v(t._s(e.name))]),e.cnt?n("div",{staticClass:"tag-cnt"},[t._v(t._s(e.cnt))]):t._e()])})),1)}),w=[],C={props:{items:{type:Array,default:function(){return[{name:"algorithm",to:"/tag1",cnt:"10"},{name:"lecture-notes",to:"/tag2",cnt:"10"}]}}}},S=C,x=(n("fb5c"),Object(c["a"])(S,y,w,!1,null,"0c4c7bda",null)),O=x.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-view",[n("div",{staticClass:"doc-container"},[t._t("default"),n("nav",{staticClass:"mark"},[n("h4",{staticStyle:{"margin-bottom":".5rem"}},[t._v("Categories")]),n("base-nav",{attrs:{items:t.navCategories}}),n("h4",{staticStyle:{"margin-bottom":".8rem"}},[t._v("Tags")]),n("div",{staticClass:"base-tag-container"},[n("base-tag",{attrs:{items:t.navTags}})],1)],1),n("back-to-top-button")],2)])},T=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-layout",{attrs:{title:t.title,"nav-routes":t.navRoutes,routes:t.routes,result:t.searchResult,loading:t.loading,fullwidth:t.fullwidth},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[t._t("default")],2)},j=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hmf--dense",staticStyle:{background:"#fafafa"}},[n("transition",{attrs:{name:"fade"}},[n("material-loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{position:"fixed",bottom:"1rem",right:"1rem","z-index":"11"}})],1),n("header",{staticClass:"header--landscape"},[n("div",{staticClass:"header-row",staticStyle:{height:"3rem","align-items":"center"}},[n("span",[t._v(t._s(t.title))]),n("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{handler:function(){t.openSearch=!1},isActive:t.openSearch},expression:"{\n          handler: () => {\n            openSearch = false;\n          },\n          isActive: openSearch\n        }"}],staticClass:"right-start search-span"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],ref:"input",staticClass:"search-dropdown__input",class:{"search-dropdown__input-active":t.openSearch},attrs:{type:"text",spellcheck:"false",placeholder:"Search..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("div",{staticClass:"search-dropdown__container",style:{"--nslots":7}},[n("div",t._l(t.result,(function(e){return n("collapse-item",{key:e.name,attrs:{"box-height":e.children?2.5*e.children.length+"em":"0"},scopedSlots:t._u([{key:"item",fn:function(){return[n("div",{staticClass:"list-item"},[n("div",[t._v(t._s(e.name))])])]},proxy:!0},{key:"box",fn:function(){return t._l(e.children,(function(e){return n("div",{key:e.to,staticClass:"list-subitem"},[n("router-link",{staticClass:"base-link",attrs:{to:e.to}},[t._v(t._s(e.name))])],1)}))},proxy:!0}],null,!0)})})),1)]),t._l(t.routes,(function(e){return n("span",{key:e.name},[n("router-link",{staticClass:"base-link",attrs:{to:e.to}},[t._v(t._s(e.name))])],1)})),n("label",{staticClass:"search-span__trigger",on:{click:t.handleOpenSearch}},[n("i",{staticClass:"search-icon"})])],2)])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.openDropdown,expression:"openDropdown"}],staticClass:"hmf--fullscreen-trigger",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.openDropdown)?t._i(t.openDropdown,null)>-1:t.openDropdown},on:{change:function(e){var n=t.openDropdown,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&(t.openDropdown=n.concat([a])):i>-1&&(t.openDropdown=n.slice(0,i).concat(n.slice(i+1)))}else t.openDropdown=o}}}),n("header",{staticClass:"header--portrait",class:{"topbar--hidden":!t.showTopbar&&!t.openDropdown},staticStyle:{color:"rgba(0, 0, 0, .8)"}},[n("div",{staticClass:"header-row",staticStyle:{height:"3em","align-items":"center"}},[n("span",[t._v(t._s(t.title))]),n("label",{staticClass:"switch--arrow right-start"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.openDropdown,expression:"openDropdown"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.openDropdown)?t._i(t.openDropdown,null)>-1:t.openDropdown},on:{change:function(e){var n=t.openDropdown,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&(t.openDropdown=n.concat([a])):i>-1&&(t.openDropdown=n.slice(0,i).concat(n.slice(i+1)))}else t.openDropdown=o}}}),n("span")])]),n("div",{staticStyle:{height:"calc(100vh - 3rem)",display:"flex","flex-direction":"column","align-items":"center","overflow-y":"auto",padding:"0 1rem 0 1rem"}},[n("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{handler:function(){t.openSearchPortrait=!1},isActive:t.openSearchPortrait},expression:"{\n          handler: () => {\n            openSearchPortrait = false;\n          },\n          isActive: openSearchPortrait\n        }"}],staticClass:"search-span--portrait",class:{"search-span--portrait-active":t.openSearchPortrait},staticStyle:{"font-size":"1rem","margin-right":"0","--slot-height":"2.3em","--dropdown-height":"calc(100vh - 5.3rem)"},attrs:{spellcheck:"false"},on:{click:t.handleOpenSearchPortrait}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],ref:"inputPortrait",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("div",[n("div",t._l(t.result,(function(e){return n("collapse-item",{key:e.name,attrs:{"box-height":e.children?2.5*e.children.length+"em":"0"},scopedSlots:t._u([{key:"item",fn:function(){return[n("div",{staticClass:"list-item--portrait"},[n("div",[t._v(t._s(e.name))])])]},proxy:!0},{key:"box",fn:function(){return t._l(e.children,(function(e){return n("div",{key:e.to,staticClass:"list-subitem--portrait"},[n("router-link",{staticClass:"base-link",attrs:{to:e.to}},[t._v(t._s(e.name))])],1)}))},proxy:!0}],null,!0)})})),1)])]),n("base-nav",{staticStyle:{width:"calc(100% - 1em)","margin-top":"0.7rem"},attrs:{items:t.navRoutes}}),n("hr",{staticClass:"header-nav-hr"}),n("base-nav",{staticStyle:{width:"calc(100% - 1em)","margin-bottom":"2rem"},attrs:{items:t.routes}})],1)]),t.fullwidth?n("main",{staticStyle:{"max-width":"none"}},[t._t("default",[t._v(" The main page here ")])],2):t._e(),t.fullwidth?t._e():n("main",[t._t("default",[t._v(" The main page here ")])],2),n("footer",[n("base-footer",{scopedSlots:t._u([{key:"intro",fn:function(){return[t._v(" Designed and Built by Hongqin Li"),n("br"),t._v(" Powered by Light Minimalism ")]},proxy:!0},{key:"links",fn:function(){return[n("a",[t._v("F.A.Q")]),n("a",[t._v("Contact Us")]),n("a",[t._v("Join Us")])]},proxy:!0},{key:"copyright",fn:function(){return[t._v(" Copyright © 2020 Hongqin Li. All rights reserved. ")]},proxy:!0}])})],1)],1)},D=[],E=n("0f32"),B=n.n(E),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.items,(function(e){return n("collapse-item",{key:e.name,attrs:{"box-height":e.children?1.8*e.children.length+"em":"0"},scopedSlots:t._u([{key:"item",fn:function(r){var o=r.open;return[n("div",{staticClass:"list-item"},[n("div",{on:{click:function(n){e.to&&e.to!==t.$route.path&&t.$router.push(e.to)}}},[n("div",{staticClass:"list-item-anchor",class:{"list-item-anchor-active":o}},[e.children?n("i",{staticClass:"material-icons-round"},[t._v("keyboard_arrow_right")]):t._e()]),n("div",{staticClass:"single-line"},[t._v(t._s(e.name))])])])]}},{key:"box",fn:function(){return t._l(e.children,(function(e){return n("div",{key:e.to,staticClass:"list-subitem"},[n("div",{staticClass:"single-line",on:{click:function(n){e.to&&e.to!==t.$route.path&&t.$router.push(e.to)}}},[t._v(" "+t._s(e.name)+" ")])])}))},proxy:!0}],null,!0)})})),1)},I=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{on:{click:function(e){t.open=!t.open}}},[t._t("item",null,{open:t.open})],2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.open,expression:"open"}],staticClass:"trigger",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.open)?t._i(t.open,null)>-1:t.open},on:{change:function(e){var n=t.open,r=e.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&(t.open=n.concat([a])):i>-1&&(t.open=n.slice(0,i).concat(n.slice(i+1)))}else t.open=o}}}),n("div",{style:t.open?{height:""+t.boxHeight}:{height:"0"}},[n("div",[t._t("box")],2)])])},R=[],F={props:["boxHeight"],data:function(){return{open:!1}}},M=F,q=(n("7a19"),Object(c["a"])(M,L,R,!1,null,"811a99f8",null)),H=q.exports,U={props:{items:{type:Array,default:function(){return[{name:"Item with children",children:[{name:"subitem 1",to:"/"}]},{name:"Item without children and overflow",to:"/kk"}]}}},components:{CollapseItem:H}},J=U,z=(n("d684"),Object(c["a"])(J,N,I,!1,null,"23577119",null)),V=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"footer-row"},[n("div",{staticClass:"intro"},[t._t("intro",[t._v(" Designed and Built by Mr. Foo"),n("br"),t._v(" Powered by "),n("a",[t._v("Light Minimalism")])])],2),n("div",{staticClass:"link"},[t._t("links",[n("a",[t._v("F.A.Q")]),n("a",[t._v("Contact Us")]),n("a",[t._v("Join Us")])])],2)]),n("div",{staticClass:"footer-row"},[n("div",{staticClass:"intro"},[t._t("copyright",[t._v(" Copyright © 2020 Hongqin Li. All rights reserved. ")])],2)])])},W=[],Y={data:function(){return{}}},G=Y,K=(n("571b"),Object(c["a"])(G,Q,W,!1,null,"65422d40",null)),X=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader",style:{width:""+t.size}},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",class:{"path--colorful":t.colorful},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-miterlimit":"10","stroke-width":t.strokeWidth,stroke:t.color}})])])},tt=[],et=(n("a9e3"),{props:{strokeWidth:{type:Number,default:4},size:{type:String,default:"2em"},color:{type:String,default:"#333333"},colorful:{type:Boolean,default:!0}}}),nt=et,rt=(n("bbc0"),Object(c["a"])(nt,Z,tt,!1,null,"54d66f58",null)),ot=rt.exports,at=n("c28b"),it=n.n(at),st={directives:{clickOutside:it.a.directive},props:{fullwidth:{type:Boolean,default:!1},title:{type:String,default:""},navRoutes:{type:Array,default:function(){return[]}},routes:{type:Array,default:function(){return[{name:"课表",to:"/explore"},{name:"课程",to:"/explore"},{name:"登入",to:"/login"}]}},result:{type:Array,default:function(){return[{name:"To Explore",to:"",children:[{name:"sub",to:"/kk"}]}]}},loading:{type:Boolean,default:!1},value:{type:String,default:""},autohide:{type:Boolean,default:!1}},created:function(){this.tOnScroll=B()(this.onScroll,500)},watch:{$route:function(){this.openSearch=!1,this.openSearchPortrait=!1,this.openDropdown=!1},searchInput:function(t){this.$emit("input",t)}},mounted:function(){window.addEventListener("scroll",this.tOnScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.tOnScroll)},methods:{onScroll:function(){if(!this.openDropdown&&this.autohide){var t=window.pageYOffset;this.lastScrollPosition<t&&t>51?this.showTopbar=!1:this.showTopbar=!0,this.lastScrollPosition=t}},handleOpenSearch:function(){var t=this;this.openSearch=!0,setTimeout((function(){t.$refs.input.focus()}),1e3)},handleOpenSearchPortrait:function(){var t=this;this.openSearchPortrait=!0,setTimeout((function(){t.$refs.inputPortrait.focus()}),1e3)}},data:function(){return{openSearch:!1,openSearchPortrait:!1,openDropdown:!1,lastScrollPosition:0,showTopbar:!0,searchInput:""}},components:{MaterialLoader:ot,BaseNav:V,BaseFooter:X,CollapseItem:H}},ct=st,ut=(n("ef99"),Object(c["a"])(ct,$,D,!1,null,"788ef983",null)),lt=ut.exports,dt=n("b047"),ht=n.n(dt),ft=(n("d3b7"),{"/archives":function(){return n.e("chunk-2d0b59d4").then(n.t.bind(null,"1a3a",3))},"/categories":function(){return n.e("chunk-2d0cbede").then(n.t.bind(null,"4c81",3))},"/config":function(){return Promise.resolve().then(n.t.bind(null,"93c0",3))},"/tags":function(){return n.e("chunk-2d0cf113").then(n.t.bind(null,"61ac",3))},"/categories/greedy":function(){return n.e("chunk-2d213de4").then(n.t.bind(null,"af09",3))},"/categories/search":function(){return n.e("chunk-2d22255a").then(n.t.bind(null,"cdbe",3))},"/tags/data-structure":function(){return n.e("chunk-2d221885").then(n.t.bind(null,"cb6f",3))},"/tags/math":function(){return n.e("chunk-2d0e62c7").then(n.t.bind(null,"982d",3))},"/tags/machine-learning":function(){return n.e("chunk-2d21af72").then(n.t.bind(null,"be81",3))},"/tags/trick":function(){return n.e("chunk-2d0d67f2").then(n.t.bind(null,"7399",3))},"/tags/bfs":function(){return n.e("chunk-2d20f6e5").then(n.t.bind(null,"b430",3))},"/tags/probability":function(){return n.e("chunk-2d20fe0b").then(n.t.bind(null,"b601",3))},"/tags/operating-system":function(){return n.e("chunk-2d0ac01a").then(n.t.bind(null,"1863",3))},"/tags/graph":function(){return n.e("chunk-2d0e66b9").then(n.t.bind(null,"9958",3))},"/tags/greedy":function(){return n.e("chunk-2d0cfee0").then(n.t.bind(null,"668b",3))},"/tags/cpp":function(){return n.e("chunk-2d2100b9").then(n.t.bind(null,"b5e5",3))},"/tags/divide-and-conquer":function(){return n.e("chunk-2d238055").then(n.t.bind(null,"fe33",3))},"/tags/notes":function(){return n.e("chunk-2d209b6e").then(n.t.bind(null,"a9dd",3))},"/tags/dp":function(){return n.e("chunk-2d2088c9").then(n.t.bind(null,"a4ee",3))},"/tags/computer-network":function(){return n.e("chunk-2d208e98").then(n.t.bind(null,"a78d",3))},"/archives/2020":function(){return n.e("chunk-2d21ef96").then(n.t.bind(null,"d89e",3))},"/docs/test":function(){return n.e("chunk-2d0e9b91").then(n.t.bind(null,"8f6c",3))},"/docs/acm/search/hdu-1043":function(){return n.e("chunk-2d0e6676").then(n.t.bind(null,"9933",3))},"/docs/acm/search/hdu-3567":function(){return n.e("chunk-2d222369").then(n.t.bind(null,"ce3d",3))},"/docs/acm/greedy/luogu-P1324":function(){return n.e("chunk-2d0cb71d").then(n.t.bind(null,"4a60",3))},"/docs/course/alg-notes":function(){return n.e("chunk-2d22669c").then(n.t.bind(null,"e90b",3))},"/docs/course/algebra":function(){return n.e("chunk-2d21e5b3").then(n.t.bind(null,"d4e2",3))},"/docs/course/dsp":function(){return n.e("chunk-2d212fb8").then(n.t.bind(null,"ab78",3))},"/docs/course/oop-notes":function(){return n.e("chunk-2d0dd490").then(n.t.bind(null,"8178",3))},"/docs/course/probability":function(){return n.e("chunk-2d0f045c").then(n.t.bind(null,"9c51",3))},"/docs/course/segment-tree":function(){return n.e("chunk-2d216083").then(n.t.bind(null,"c176",3))},"/docs/course/graph":function(){return n.e("chunk-2d0b16bf").then(n.t.bind(null,"207b",3))},"/docs/course/prml":function(){return n.e("chunk-2d0c119b").then(n.t.bind(null,"4537",3))},"/docs/course/mathematical-analysis":function(){return n.e("chunk-2d0db0b8").then(n.t.bind(null,"6dd8",3))},"/docs/course/dp":function(){return n.e("chunk-2d22c1ad").then(n.t.bind(null,"f28c",3))},"/docs/course/os":function(){return n.e("chunk-2d21eb37").then(n.t.bind(null,"d74b",3))},"/docs/course/computer-network":function(){return n.e("chunk-2d0d2b9e").then(n.t.bind(null,"5a73",3))}});function pt(t){return ft[t]?new Promise((function(e,n){ft[t]().then((function(t){var n=t.default;return e(n)})).catch((function(t){return n(t)}))})):Promise.reject(new Error("".concat(t," not found.")))}var vt={get:pt},mt={created:function(){var t=this;this.dUpdateSearchResult=ht()(this.updateSearchResult,500),vt.get("/categories").then((function(e){t.navRoutes=e}))},props:["fullwidth"],data:function(){return{title:"Hongqin's Blog",routes:[{name:"Home",to:"/home"},{name:"Archives",to:"/archives"}],navRoutes:[],searchResult:[],loading:!1,input:""}},watch:{input:function(t){this.loading=!0,this.dUpdateSearchResult(t)}},methods:{updateSearchResult:function(t){console.log(t),this.loading=!1}},components:{BaseLayout:lt}},bt=mt,gt=Object(c["a"])(bt,A,j,!1,null,null,null),kt=gt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"scale"}},[t.showBtn?n("button",{staticClass:"back-to-top-btn",on:{click:t.scrollToTop}},[n("span",[t._v("↾")])]):t._e()])},yt=[],wt={created:function(){this.tOnScroll=B()(this.onScroll,500),this.tOnScroll()},mounted:function(){window.addEventListener("scroll",this.tOnScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.tOnScroll)},data:function(){return{showBtn:!0}},methods:{onScroll:function(){var t=window.pageYOffset;this.showBtn=t>51},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},Ct=wt,St=(n("29f7"),Object(c["a"])(Ct,_t,yt,!1,null,"706a559c",null)),xt=St.exports,Ot={created:function(){var t=this;vt.get("/categories").then((function(e){t.navCategories=e})),vt.get("/tags").then((function(e){t.navTags=e}))},data:function(){return{navCategories:[],navTags:[]}},components:{BaseView:kt,BaseNav:V,BaseTag:O,BackToTopButton:xt}},Pt=Ot,Tt=(n("73c8"),Object(c["a"])(Pt,P,T,!1,null,"f5f6fd22",null)),At=Tt.exports,jt=n("6591"),$t=n("3b2f"),Dt=n.n($t),Et=(n("be0f"),n("f654").strict),Bt={created:function(){this.refresh()},watch:{$route:function(t){console.log("route",t),this.refresh()}},data:function(){return{title:"",time:"",nhits:"",tags:[],html:""}},methods:{refresh:function(){var t=this;vt.get(this.$route.path).then((function(e){t.title=e["title"],t.time=e["updated_at"].split("T")[0],t.nhits=jt[t.$route.path]||"0";var n=e["html"],r=/<script type="math\/tex([\0-!#-\uFFFF]*)">([\s\S]*?)<\/script>/g;n=n.replace(r,(function(t,e,n){e&&Et("; mode=display"===e);var r=Dt.a.renderToString(n,{displayMode:"; mode=display"===e});return r})),t.html=n,t.tags=e["tags"].map((function(t){return{name:t,to:"/tags/".concat(t)}}))}))}},components:{BaseTag:O,PostView:At}},Nt=Bt,It=(n("0e79"),n("b2de"),Object(c["a"])(Nt,k,_,!1,null,"9ed3c9d2",null)),Lt=It.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("post-view",[n("main",{staticClass:"mark",staticStyle:{overflow:"visible"}},[n("h2",{staticClass:"doc-title"},[t._v(t._s(t.title))]),n("p",{staticClass:"doc-info"},[t._v(t._s(t.description))]),t._l(t.posts,(function(e){return n("div",{key:e.url,staticClass:"post-list-item full-width--portrait"},[n("span",{staticClass:"post-list-item__title"},[n("router-link",{attrs:{to:e.url}},[t._v(t._s(e.title))]),n("i",{staticClass:"material-icons-round"},[t._v("keyboard_arrow_right")])],1),n("p",[t._v(t._s(e.excerpt))]),n("div",{staticClass:"post-list-item__tag"},[n("base-tag",{attrs:{items:e.tags.map((function(t){return{name:t,to:"/tags/"+t}}))}}),n("span",[t._v(t._s(e.updated_at.split("T")[0]))])],1)])}))],2)])},Ft=[],Mt=(n("a4d3"),n("e01a"),n("b0c0"),{created:function(){this.refresh()},beforeRouteUpdate:function(t,e,n){n(),this.refresh()},data:function(){return{title:"",description:"",posts:[]}},methods:{refresh:function(){var t=this;vt.get(this.$route.path).then((function(e){t.title=e["name"],t.description=e["description"],t.posts=e["items"]}))}},components:{BaseTag:O,PostView:At}}),qt=Mt,Ht=(n("3fc2"),n("87d4"),Object(c["a"])(qt,Rt,Ft,!1,null,"2ce1c29e",null)),Ut=Ht.exports;r["a"].use(h["a"]);var Jt=[{path:"/docs/*",component:Lt},{path:"/dev/postlist",alias:["/tags/*","/categories/*"],component:Ut},{path:"*",component:g}],zt=new h["a"]({mode:"history",base:"/blog/",routes:Jt}),Vt=zt,Qt=n("2f62");r["a"].use(Qt["a"]);var Wt=new Qt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Yt=n("a584"),Gt=(n("2dfd"),n("93c0"));r["a"].config.productionTip=!1,r["a"].use(Yt["a"],{enabled:!0,config:{id:Gt["google-analytics"]["id"]}},Vt),new r["a"]({router:Vt,store:Wt,render:function(t){return t(l)}}).$mount("#app")},"571b":function(t,e,n){"use strict";var r=n("babb"),o=n.n(r);o.a},5944:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6591:function(t){t.exports=JSON.parse('{"/docs/acm/greedy/luogu-P1324":4,"/docs/acm/search/hdu-1043":10,"/docs/acm/search/hdu-3567":2,"/docs/course/alg-notes":2,"/docs/course/computer-network":1,"/docs/test":1,"/tags/bfs":10,"/tags/divide-and-conquer":2,"/tags/dp":1,"/tags/greedy":6,"/tags/machine-learning":1,"/tags/notes":3,"/tags/trick":1}')},"67d0":function(t,e,n){},"73c8":function(t,e,n){"use strict";var r=n("67d0"),o=n.n(r);o.a},"7a19":function(t,e,n){"use strict";var r=n("1d59"),o=n.n(r);o.a},"85c6":function(t,e,n){},"87d4":function(t,e,n){"use strict";var r=n("aeed"),o=n.n(r);o.a},"93c0":function(t){t.exports=JSON.parse('{"google-analytics":{"id":"UA-173075487-1","view-id":"224322910"}}')},"9c0c":function(t,e,n){},aa18:function(t,e,n){},aadf:function(t,e,n){},aeed:function(t,e,n){},b2de:function(t,e,n){"use strict";var r=n("4d30"),o=n.n(r);o.a},b60c:function(t,e,n){"use strict";var r=n("ee7b"),o=n.n(r);o.a},babb:function(t,e,n){},bbc0:function(t,e,n){"use strict";var r=n("d0d9"),o=n.n(r);o.a},d0d9:function(t,e,n){},d684:function(t,e,n){"use strict";var r=n("53a3"),o=n.n(r);o.a},ee7b:function(t,e,n){},ef99:function(t,e,n){"use strict";var r=n("5944"),o=n.n(r);o.a},fb5c:function(t,e,n){"use strict";var r=n("292a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.49986b33.js.map
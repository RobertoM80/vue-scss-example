(function(t){function e(e){for(var n,a,u=e[0],s=e[1],c=e[2],l=0,p=[];l<u.length;l++)a=u[l],r[a]&&p.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},i=[];function a(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d8ba5d25"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=n);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(t),i=function(e){s.onerror=s.onload=null,clearTimeout(c);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,o[1](a)}r[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-scss-example/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"289c":function(t,e,o){"use strict";var n=o("cb47"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("h1",[t._v("WELCOME")]),o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),o("router-view")],1)},i=[],a=(o("5c0b"),o("2877")),u={},s=Object(a["a"])(u,r,i,!1,null,null,null),c=s.exports,l=o("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"box box1 col-lg-3 col-md-6 px-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.")]),o("div",{staticClass:"box box2 col-lg-3 col-md-6 py-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.")]),o("div",{staticClass:"box box3 col-lg-3 col-md-6 px-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.")]),o("div",{staticClass:"box box4 col-lg-3 col-md-6 p-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat optio eaque praesentium suscipit unde deserunt, maiores fugiat tenetur. In corrupti nesciunt pariatur ipsam maxime. Laudantium vel commodi fugiat quod delectus.")])]),o("hr"),o("div",{staticClass:"cont d-flex flex-xs-row flex-sm-column flex-md-row flex-lg-column justify-content-between align-items-center w-100"},[o("div",{staticClass:"boxS"},[t._v("Random Box")]),o("div",{staticClass:"boxS"},[t._v("Random Box")]),o("div",{staticClass:"boxS"},[t._v("Random Box")]),o("div",{staticClass:"boxS"},[t._v("Random Box")]),o("div",{staticClass:"boxS"},[t._v("Random Box")]),o("div",{staticClass:"boxS"},[t._v("Random Box")]),o("div",{staticClass:"boxS"},[t._v("Random Box")])])])}],v={name:"HelloWorld",props:{msg:String}},b=v,x=(o("289c"),Object(a["a"])(b,m,f,!1,null,"78db4625",null)),g=x.exports,h={name:"home",components:{HelloWorld:g}},_=h,y=Object(a["a"])(_,d,p,!1,null,null,null),w=y.exports;n["a"].use(l["a"]);var C=new l["a"]({mode:"history",base:"/vue-scss-example/",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),j=o("2f62");n["a"].use(j["a"]);var S=new j["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:C,store:S,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5e27":function(t,e,o){},cb47:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ab5bcf31.js.map
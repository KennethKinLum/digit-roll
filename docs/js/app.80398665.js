(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return s.p+"js/"+({about:"about",demo:"demo"}[e]||e)+"."+{about:"1c0c8b8f",demo:"67916153"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={demo:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",demo:"demo"}[e]||e)+"."+{about:"31d6cfe0",demo:"b7adca0f"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f0d":function(e,t,n){"use strict";var r=n("2ab8"),a=n.n(r);a.a},"2ab8":function(e,t,n){},3576:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("a133"),n("ed0d"),n("f09c"),n("e117");var r=n("0261"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("9ca4")),u={},s=Object(i["a"])(u,a,o,!1,null,null,null),c=s.exports,l=(n("e18c"),n("3f11")),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],p={name:"Home"},m=p,h=Object(i["a"])(m,f,d,!1,null,null,null),g=h.exports;r["a"].use(l["a"]);var v=[{path:"/home",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/",name:"demo",component:function(){return n.e("demo").then(n.bind(null,"c0b3"))}}],b=new l["a"]({routes:v}),y=b,_=n("ae8c");r["a"].use(_["a"]);var w=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=(n("053b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"dr"},[e._l(e.valueFormat,(function(t,r){return[n("span",{key:r,staticClass:"dr-item"},[n("span",{class:[/\d+/.test(t)?"dr-spacer":"."==t?"dr-radix-mark":"dr-formatting-mark"]},[e._v(" "+e._s(t)+" ")]),/\d+/.test(t)?[n("span",{staticClass:"dr-scroll",style:{transform:"translateY("+10*-t+"%)",transitionDuration:e.getTime(e.duration),transitionDelay:e.getTime(e.delay),transitionTimingFunction:e.easing}},e._l(10,(function(t,r){return n("span",{key:r,staticClass:"dr-scroll-item"},[e._v(" "+e._s(r)+" ")])})),0)]:e._e()],2)]}))],2)}),E=[],O=(n("fe59"),n("086d"),n("77ad"),n("e50e"),n("513c"),n("b92a"),n("e35a"),n("1c2e"),n("0d7a"),n("08ba"),"(,ddd).dd"),j=/^\(?([^)]*)\)?(?:(.)(d+))?$/,x={name:"digit-roll",model:{prop:"value",event:"change"},props:{value:{type:Number,default:0},duration:{type:Number,default:1e3},delay:{type:Number,default:0},easing:{type:String,default:"linear"},format:{type:String,default:O},math:{type:String,default:"round"}},computed:{resetFormat:function(){var e=j.exec(this.format).slice(1);return{repeating:e[0],radix:e[1],precision:e[2].length}},valueFormat:function(){var e=this,t=!0,n=this.resetFormat.repeating,r=!1,a=[];return this.createRound(this.math)(this.value,this.resetFormat.precision).toString().split("").reverse().forEach((function(o){var i=!1;if("."==o)r=!0,a.unshift(o);else{if(r){i=!1;while(t){if(!n.length){if(i)throw new Error("Bad odometer format without digits");n=e.resetFormat.repeating,i=!0}var u=n[n.length-1];if(n=n.substring(0,n.length-1),"d"===u)break;a.unshift(u)}}a.unshift(o)}})),a}},data:function(){return{}},mounted:function(){},methods:{getTime:function(e){return e?"".concat(parseFloat(e/1e3),"s"):e},createRound:function(e){var t=Math[e];return function(e,n){if(n=null==n?0:Math.min(n,292),n&&e){var r=(String(e)+"e").split("e"),a=t(r[0]+"e"+(+r[1]+n));return r=(String(a)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}}},k=x,C=(n("1f0d"),Object(i["a"])(k,S,E,!1,null,"3a1cedab",null)),T=C.exports,P={install:function(e,t){for(var n in T.props)t[n]&&(T.props[n]["default"]=t[n]);e.component(T.name,T)}};r["a"].config.productionTip=!1,r["a"].use(P,{math:"floor",duration:2e3}),new r["a"]({router:y,store:w,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("3576"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.80398665.js.map
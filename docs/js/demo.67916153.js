(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo"],{"162f":function(t,e,n){},"1fb3":function(t,e,n){var a=n("1c8b"),r=n("d890"),i=n("4fda"),u=[].slice,o=/MSIE .\./.test(i),l=function(t){return function(e,n){var a=arguments.length>2,r=a?u.call(arguments,2):void 0;return t(a?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};a({global:!0,bind:!0,forced:o},{setTimeout:l(r.setTimeout),setInterval:l(r.setInterval)})},"20a5":function(t,e,n){"use strict";var a=n("1c8b"),r=n("3da3"),i=n("e1d9"),u=n("c7e6"),o=n("efe2"),l=1..toFixed,c=Math.floor,d=function(t,e,n){return 0===e?n:e%2===1?d(t,e-1,n*t):d(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},s=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));a({target:"Number",proto:!0,forced:s},{toFixed:function(t){var e,n,a,o,l=i(this),s=r(t),v=[0,0,0,0,0,0],m="",h="0",b=function(t,e){var n=-1,a=e;while(++n<6)a+=t*v[n],v[n]=a%1e7,a=c(a/1e7)},p=function(t){var e=6,n=0;while(--e>=0)n+=v[e],v[e]=c(n/t),n=n%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var n=String(v[t]);e=""===e?n:e+u.call("0",7-n.length)+n}return e};if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(e=f(l*d(2,69,1))-69,n=e<0?l*d(2,-e,1):l/d(2,e,1),n*=4503599627370496,e=52-e,e>0){b(0,n),a=s;while(a>=7)b(1e7,0),a-=7;b(d(10,a,1),0),a=e-1;while(a>=23)p(1<<23),a-=23;p(1<<a),b(1,1),p(2),h=w()}else b(0,n),b(1<<-e,0),h=w()+u.call("0",s);return s>0?(o=h.length,h=m+(o<=s?"0."+u.call("0",s-o)+h:h.slice(0,o-s)+"."+h.slice(o-s))):h=m+h,h}})},6771:function(t,e,n){"use strict";var a=n("162f"),r=n.n(a);r.a},c0b3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h3",[t._v("数字滚动 demo")]),n("div",[t._l(t.$data,(function(e,a){return[n("div",{key:a,staticClass:"demo-item"},[n("digit-roll",{attrs:{duration:t.$data[a].duration,delay:t.$data[a].delay},model:{value:t.$data[a].value,callback:function(e){t.$set(t.$data[a],"value",e)},expression:"$data[key].value"}}),n("span",{staticClass:"unit"},[t._v(" "+t._s(t.$data[a].unit)+" ")])],1)]}))],2)])},r=[],i=(n("513c"),n("20a5"),n("1fb3"),{name:"demo",data:function(){return{num1:{value:1,duration:200,delay:200},num2:{value:22,duration:400,delay:400},num3:{value:333,duration:600,delay:600},num4:{value:4444.444,duration:800,delay:200},num5:{value:55555.555,duration:1e3,unit:"个"},num6:{value:666666.666,duration:1200,unit:"人"},num7:{value:7777777,duration:1400,unit:"幢"},num8:{value:88888888,duration:1600,unit:"¥"}}},mounted:function(){var t=this;setInterval((function(){for(var e in t.$data){var n=Math.random(),a=Number((100*n).toFixed(2));n>.5?t.$data[e].value+=a:t.$data[e].value-=a}}),2e3)}}),u=i,o=(n("6771"),n("9ca4")),l=Object(o["a"])(u,a,r,!1,null,"484328ca",null);e["default"]=l.exports},c7e6:function(t,e,n){"use strict";var a=n("3da3"),r=n("2732");t.exports="".repeat||function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},e1d9:function(t,e,n){var a=n("2118");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}}}]);
//# sourceMappingURL=demo.67916153.js.map
/**
 * keen-slider 5.4.0
 * The HTML touch slider carousel with the most native feeling you will get.
 * https://keen-slider.io
 * Copyright 2020-2021 Eric Beyer <contact@ericbeyer.de>
 * License: MIT
 * Released on: 2021-02-02
 */

import{useRef as t,useState as n,useEffect as e}from"react";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||c(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(t){var n,e,r,i,a,c,f,s,l,h,p,b,m,g,y,w,O,M,j,S,A,x,k,E,P,T,D,C,L,I,X,Y,z=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},F="data-keen-slider-moves",H="data-keen-slider-v",V=[],q=null,W=!1,_=!1,N=0,R=[];function U(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.addEventListener(n,e,r),V.push([t,n,e,r])}function $(t){if(M&&j===K(t)&&ut()){var e=Z(t).x;if(!nt(t)&&E)return G(t);E&&(Wt(),S=e,n.setAttribute(F,!0),E=!1),t.cancelable&&t.preventDefault(),It(k(S-e,Bt)*(ft()?-1:1),t.timeStamp),S=e}}function B(t){M||!ut()||tt(t.target)||(M=!0,E=!0,j=K(t),nt(t),vt(),O=h,S=Z(t).x,It(0,t.timeStamp),ot("dragStart"))}function G(t){M&&j===K(t,!0)&&ut()&&(n.removeAttribute(F),M=!1,bt(),ot("dragEnd"))}function J(t){return t.changedTouches}function K(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=n?J(t):Q(t);return e?e[0]?e[0].identifier:"error":"default"}function Q(t){return t.targetTouches}function Z(t){var n=Q(t);return{x:lt()?n?n[0].screenY:t.pageY:n?n[0].screenX:t.pageX,timestamp:t.timeStamp}}function tt(t){return t.hasAttribute(w.preventEvent)}function nt(t){var n=Q(t);if(!n)return!0;var e=n[0],r=lt()?e.clientY:e.clientX,i=lt()?e.clientX:e.clientY,o=void 0!==A&&void 0!==x&&Math.abs(x-i)<=Math.abs(A-r);return A=r,x=i,o}function et(t){ut()&&M&&t.preventDefault()}function rt(){U(window,"orientationchange",Pt),U(window,"resize",(function(){return Et()})),U(n,"dragstart",(function(t){ut()&&t.preventDefault()})),U(n,"mousedown",B),U(w.cancelOnLeave?n:window,"mousemove",$),w.cancelOnLeave&&U(n,"mouseleave",G),U(window,"mouseup",G),U(n,"touchstart",B,{passive:!0}),U(n,"touchmove",$,{passive:!1}),U(n,"touchend",G,{passive:!0}),U(n,"touchcancel",G,{passive:!0}),U(window,"wheel",et,{passive:!1})}function it(){V.forEach((function(t){t[0].removeEventListener(t[1],t[2],t[3])})),V=[]}function ot(t){w[t]&&w[t](Bt)}function at(){return w.centered}function ut(){return void 0!==e?e:w.controls}function ct(){return w.loop&&r>1}function ft(){return w.rtl}function st(){return!w.loop&&w.rubberband}function lt(){return!!w.vertical}function dt(){P=window.requestAnimationFrame(ht)}function vt(){P&&(window.cancelAnimationFrame(P),P=null),T=null}function ht(t){T||(T=t);var n=t-T,e=pt(n);if(n>=C)return It(D-I,!1),Y?Y():void ot("afterChange");var r=Xt(e);if(0===r||ct()||st()||X){if(0!==r&&st()&&!X)return Ot();I+=e,It(e,!1),dt()}else It(e-r,!1)}function pt(t){return D*L(t/C)-I}function bt(){switch(ot("beforeChange"),w.mode){case"free":yt();break;case"free-snap":wt();break;case"snap":default:mt()}}function mt(){gt((1===f&&0!==p?O:h)+Math.sign(p))}function gt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(t){return 1+--t*t*t*t*t};Mt(Ht(t=Ft(t,r,i)),e,o,n)}function yt(){if(0===m)return!(!Xt(0)||ct())&&gt(h);var t=w.friction/Math.pow(Math.abs(m),-.5);Mt(Math.pow(m,2)/t*Math.sign(m),6*Math.abs(m/t),(function(t){return 1-Math.pow(1-t,5)}))}function wt(){if(0===m)return gt(h);var t=w.friction/Math.pow(Math.abs(m),-.5),n=Math.pow(m,2)/t*Math.sign(m),e=6*Math.abs(m/t),r=(N+n)/(c/f);Mt((-1===p?Math.floor(r):Math.ceil(r))*(c/f)-N,e,(function(t){return 1-Math.pow(1-t,5)}))}function Ot(){if(vt(),0===m)return gt(h,!0);var t=.04/Math.pow(Math.abs(m),-.5),n=Math.pow(m,2)/t*Math.sign(m),e=function(t){return--t*t*t+1},r=m;Mt(n,3*Math.abs(r/t),e,!0,(function(){Mt(Ht(Ft(h)),500,e,!0)}))}function Mt(t,n,e,r,i){vt(),D=t,I=0,C=n,L=e,X=r,Y=i,T=null,dt()}function jt(e){var r=d(t);r.length&&(n=r[0],Et(e),rt(),ot("mounted"))}function St(){var t,n=z.breakpoints||[];for(var e in n)window.matchMedia(e).matches&&(t=e);if(t===q)return!0;var r=(q=t)?n[q]:z;r.breakpoints&&q&&delete r.breakpoints,w=o(o(o({},$t),z),r),W=!0,l=null,ot("optionsChanged"),kt()}function At(t){return"function"==typeof t?t():v(t,1,Math.max(ct()?r-1:r,1))}function xt(){St(),_=!0,ot("created")}function kt(t,n){t&&(z=t),n&&(q=null),Tt(),jt(n)}function Et(t){var e=window.innerWidth;if(St()&&(e!==l||t)){l=e;var o=w.slides;"number"==typeof o?(a=null,r=o):(a=d(o,n),r=a?a.length:0);var u=w.dragSpeed;k="function"==typeof u?u:function(t){return t*u},c=lt()?n.offsetHeight:n.offsetWidth,f=At(w.slidesPerView),s=v(w.spacing,0,c/(f-1)-1),c+=s,i=at()?(c/2-c/f/2)/c:0,Ct();var p=!_||W&&w.resetSlide?w.initial:h;Ut(ct()?p:Yt(p)),lt()&&n.setAttribute(H,!0),W=!1}}function Pt(t){Et(),setTimeout(Et,500),setTimeout(Et,2e3)}function Tt(){it(),Lt(),n&&n.hasAttribute(H)&&n.removeAttribute(H),ot("destroyed")}function Dt(){a&&a.forEach((function(t,n){var e=g[n].distance*c-n*(c/f-s/f-s/f*(f-1)),r=lt()?0:e,i=lt()?e:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");t.style.transform=o,t.style["-webkit-transform"]=o}))}function Ct(){a&&a.forEach((function(t){var n="calc(".concat(100/f,"% - ").concat(s/f*(f-1),"px)");lt()?(t.style["min-height"]=n,t.style["max-height"]=n):(t.style["min-width"]=n,t.style["max-width"]=n)}))}function Lt(){if(a){var t=["transform","-webkit-transform"];t=[].concat(u(t),lt?["min-height","max-height"]:["min-width","max-width"]),a.forEach((function(n){t.forEach((function(t){n.style.removeProperty(t)}))}))}}function It(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();qt(t,e),n&&(t=Nt(t)),N+=t,_t()}function Xt(t){var n=c*(r-1*(at()?1:f))/f,e=N+t;return e>n?e-n:e<0?e:0}function Yt(t){return v(t,0,r-1-(at()?0:f-1))}function zt(){var t=Math.abs(y),n=N<0?1-t:t;return{direction:p,progressTrack:n,progressSlides:n*r/(r-1),positions:g,position:N,speed:m,relativeSlide:(h%r+r)%r,absoluteSlide:h,size:r,slidesPerView:f,widthOrHeight:c}}function Ft(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ct()?n?Vt(t,e):t:Yt(t)}function Ht(t){return-(-c/f*t+N)}function Vt(t,n){var e=(h%r+r)%r,i=e<(t=(t%r+r)%r)?-e-r+t:-(e-t),o=e>t?r-e+t:t-e,a=n?Math.abs(i)<=o?i:o:t<e?i:o;return h+a}function qt(t,n){clearTimeout(b);var e=Math.sign(t);if(e!==p&&Wt(),p=e,R.push({distance:t,time:n}),b=setTimeout((function(){R=[],m=0}),50),(R=R.slice(-6)).length<=1||0===p)return m=0;var r=R.slice(0,-1).reduce((function(t,n){return t+n.distance}),0),i=R[R.length-1].time,o=R[0].time;m=v(r/(i-o),-10,10)}function Wt(){R=[]}function _t(){y=ct()?N%(c*r/f)/(c*r/f):N/(c*r/f),Rt();for(var t=[],n=0;n<r;n++){var e=(1/r*n-(y<0&&ct()?y+1:y))*r/f+i;ct()&&(e+=e>(r-1)/f?-r/f:e<-r/f+1?r/f:0);var o=1/f,a=e+o,u=a<o?a/o:a>1?1-(a-1)*f/1:1;t.push({portion:u<0||u>1?0:u,distance:ft()?-1*e+1-o:e})}g=t,Dt(),ot("move")}function Nt(t){if(ct())return t;var n=Xt(t);if(!st())return t-n;if(0===n)return t;var e;return t*(e=n/c,(1-Math.abs(e))*(1-Math.abs(e)))}function Rt(){var t=Math.round(N/(c/f));t!==h&&(!ct()&&(t<0||t>r-1)||(h=t,ot("slideChanged")))}function Ut(t){ot("beforeChange"),It(Ht(t),!1),ot("afterChange")}var $t={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Bt={controls:function(t){e=t},destroy:Tt,refresh:function(t){kt(t,!0)},next:function(){gt(h+1,!0)},prev:function(){gt(h-1,!0)},moveToSlide:function(t,n){gt(t,!0,n)},moveToSlideRelative:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2?arguments[2]:void 0;gt(t,!0,e,!0,n)},resize:function(){Et(!0)},details:function(){return zt()},options:function(){var t=o({},w);return delete t.breakpoints,t}};return xt(),Bt}function l(t){return Array.prototype.slice.call(t)}function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof t?l(t()):"string"==typeof t?l(n.querySelectorAll(t)):t instanceof HTMLElement!=!1?[t]:t instanceof NodeList!=!1?t:[]}function v(t,n,e){return Math.min(Math.max(t,n),e)}function h(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t(),o=t();function u(t){return p(o.current,t)||(o.current=t),o.current}var c=n(null),f=a(c,2),l=f[0],d=f[1];return e((function(){var t=new s(i.current,o.current);return d(t),function(){t.destroy()}}),[u(r)]),[i,l]}Math.sign||(Math.sign=function(t){return(t>0)-(t<0)||+t});var p=function t(n,e){var r=Object.prototype.toString.call(n);if(r!==Object.prototype.toString.call(e))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var i="[object Array]"===r?n.length:Object.keys(n).length;if(i!==("[object Array]"===r?e.length:Object.keys(e).length))return!1;var o=function(n,e){var r=Object.prototype.toString.call(n);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!t(n,e))return!1}else{if(r!==Object.prototype.toString.call(e))return!1;if("[object Function]"===r){if(n.toString()!==e.toString())return!1}else if(n!==e)return!1}};if("[object Array]"===r){for(var a=0;a<i;a++)if(!1===o(n[a],e[a]))return!1}else for(var u in n)if(n.hasOwnProperty(u)&&!1===o(n[u],e[u]))return!1;return!0};export default s;export{h as useKeenSlider};
//# sourceMappingURL=react.esm.js.map

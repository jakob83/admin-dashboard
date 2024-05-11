(()=>{"use strict";var n,e,t,r,o,a,i,c,d,s,l,p,u,f,g={523:(n,e,t)=>{t.d(e,{A:()=>y});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(248),t.b),l=new URL(t(139),t.b),p=new URL(t(952),t.b),u=new URL(t(655),t.b),f=new URL(t(84),t.b),g=i()(o()),b=d()(s),x=d()(l),m=d()(p),h=d()(u),v=d()(f);g.push([n.id,`:root {\n    font-size: 16px;\n}\n\nbody,\np {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    height: 100vh;\n    grid-template: 1fr 4.5fr/ 1fr 5fr;\n}\n\nnav {\n    grid-column: 1;\n    grid-row: 1/3;\n    display: flex;\n    flex-direction: column;\n    background-color: #44403c;\n}\n\nnav .nav-btns,\nnav .nav-info-btns {\n    flex: 5;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n    align-items: center;\n    align-items: center;\n    padding: 0;\n}\n\nnav button:hover {\n    background-color: #d6d3d1;\n    color: #44403c;\n}\n\nnav button {\n    width: 50%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border: none;\n    background-color: rgba(0, 0, 0, 0);\n    color: #fafaf9;\n    font-size: 1rem;\n    text-align: start;\n    transition: all 0.25s;\n    border-radius: 5px;\n}\n\n\nheader {\n    grid-column: 2/-1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #fafaf9;\n    padding-bottom: 20px;\n}\n\nheader .row-1 {\n    margin-top: 3vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: 50px;\n\n}\n\n.row-1 p {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\nheader input {\n    flex: 3;\n}\n\nheader .header-btns {\n    flex: 2;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 20px;\n    margin-right: 3vw;\n}\n\nheader .row-2 {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 50px;\n\n}\n\n.greeting-container {\n    display: flex;\n    justify-content: flex-start;\n    gap: 50px;\n    flex: 4;\n}\n\n.row-2 .btns {\n    display: flex;\n    flex: 1 1;\n    align-items: center;\n    justify-content: space-between;\n    margin-right: 3vw;\n}\n\n.row-2 p {\n    font-size: 1.3rem;\n}\n\n\n\n\n.dashboard-header {\n    flex: 1;\n    display: flex;\n    font-size: 2.3rem;\n    align-items: flex-start;\n    margin-top: 3vh;\n}\n\nsvg {\n    width: 50px;\n}\n\n.profile {\n    border: none;\n    background-image: url(${b});\n    height: 40px;\n    width: 40px;\n    border-radius: 50px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.profile-big {\n    border: none;\n    background-image: url(${b});\n    height: 80px;\n    width: 80px;\n    border-radius: 50px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n\n.row-1 input {\n    padding: 10px 20px;\n    border: none;\n    background-color: rgb(236, 236, 236);\n    border-radius: 10px;\n    font-size: 1rem;\n    outline: none;\n\n}\n\n.search-svg {\n    width: 30px;\n    margin-right: 5px;\n}\n\n.row-1 .notification-btn {\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    transition: all 0.3s;\n}\n\n.notification-btn svg {\n    width: 40px;\n}\n\n.notification-btn:hover {\n    fill: brown;\n    transform: rotate(15deg)\n}\n\n.row-2 .btns button {\n    background-color: #44403c;\n    padding: 10px 20px;\n    color: #e7e5e4;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n\n\n.main-cont {\n    padding-left: 1vw;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 60px 1fr;\n    background-color: #d6d3d1;\n\n}\n\n.projects {\n    grid-column: 1;\n    grid-row: 2;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n    align-content: start;\n\n}\n\n\n.project {\n    background-color: #fafaf9;\n    height: 220px;\n    padding: 10px 10px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.project .buttons {\n    align-self: flex-end;\n}\n\n.project .buttons button {\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    transition: 0.25s;\n}\n\n.project .buttons button svg {\n    width: 25px;\n\n}\n\n.project .buttons button:hover {\n    fill: gray;\n}\n\n.news {\n    grid-row: 1/-1;\n    display: flex;\n    flex-direction: column;\n}\n\n.announcements {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 1vw;\n}\n\n.ann-text-cont {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background-color: #fafaf9;\n    padding: 1vw;\n    border-radius: 10px;\n}\n\n.announcements .text {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.announcements h4 {\n    margin: 0;\n    padding: 0;\n}\n\n.announcements .text:nth-child(2) {\n    border-bottom: 1px solid #44403c;\n    border-top: 1px solid #44403c;\n}\n\n.announcements p {\n    font-size: 0.8rem;\n}\n\n.trending {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 1vw;\n}\n\n.trend-acc-cont {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #fafaf9;\n    padding: 1vw;\n    border-radius: 10px;\n}\n\n.trend-acc-cont .account {\n    display: flex;\n    gap: 5%;\n}\n\n.profile.trend1 {\n    background-image: url(${x});\n}\n\n.profile.trend2 {\n    background-image: url(${m});\n}\n\n.profile.trend3 {\n    background-image: url(${h});\n}\n\n.profile.trend4 {\n    background-image: url(${v});\n}`,""]);const y=g},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},84:(n,e,t)=>{n.exports=t.p+"f151ab1e341795b371e8.jpg"},655:(n,e,t)=>{n.exports=t.p+"687cfdfdcf35d29b0a9e.png"},248:(n,e,t)=>{n.exports=t.p+"3a71a5297c2f163085a2.jpg"},139:(n,e,t)=>{n.exports=t.p+"41d37b3520644975d157.jpg"},952:(n,e,t)=>{n.exports=t.p+"c311e8fd1c29396e69dd.jpg"}},b={};function x(n){var e=b[n];if(void 0!==e)return e.exports;var t=b[n]={id:n,exports:{}};return g[n](t,t.exports,x),t.exports}x.m=g,x.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return x.d(e,{a:e}),e},x.d=(n,e)=>{for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),x.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;x.g.importScripts&&(n=x.g.location+"");var e=x.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=n})(),x.b=document.baseURI||self.location.href,x.nc=void 0,n=x(72),e=x.n(n),t=x(825),r=x.n(t),o=x(659),a=x.n(o),i=x(56),c=x.n(i),d=x(540),s=x.n(d),l=x(113),p=x.n(l),u=x(523),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals})();
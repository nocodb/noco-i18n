(function(e){function t(t){for(var a,c,i=t[0],l=t[1],u=t[2],d=0,s=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(s.length)s.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=n("cf05"),r=n.n(o),c=Object(a["e"])("img",{alt:"Vue logo",src:r.a},null,-1);function i(e,t,n,o,r,i){var l=Object(a["l"])("Landing");return Object(a["i"])(),Object(a["d"])(a["a"],null,[c,Object(a["h"])(l)],64)}var l=function(e){return Object(a["k"])("data-v-a7ee0d8c"),e=e(),Object(a["j"])(),e},u={class:"wrapper"},p=l((function(){return Object(a["e"])("h1",null,"Welcome to NocoDB i18n CSV Converter",-1)})),d=l((function(){return Object(a["e"])("h2",null,[Object(a["g"])(" For the guideline, please check out "),Object(a["e"])("a",{href:"https://github.com/nocodb/nocodb/tree/master/packages/noco-i18n#contribution-guide",target:"_blank",rel:"noopener"},"NocoDB i18n Contribution Guide"),Object(a["g"])(". ")],-1)})),s=l((function(){return Object(a["e"])("td",null,"Upload your CSV file",-1)})),v=l((function(){return Object(a["e"])("label",{for:"file"},[Object(a["e"])("span",null,"Select your CSV")],-1)})),f={key:0},b=l((function(){return Object(a["e"])("td",null,"Select the language you translated",-1)})),h={class:"select-wrapper"},g=Object(a["f"])('<option value="-" data-v-a7ee0d8c>Select the language</option><option value="en" data-v-a7ee0d8c>English</option><option value="fr" data-v-a7ee0d8c>Français</option><option value="de" data-v-a7ee0d8c>Deutsch</option><option value="es" data-v-a7ee0d8c>Española</option><option value="pt" data-v-a7ee0d8c>Português</option><option value="it_IT" data-v-a7ee0d8c>Italiano</option><option value="nl" data-v-a7ee0d8c>Nederlandse</option><option value="ja" data-v-a7ee0d8c>日本語</option><option value="ko" data-v-a7ee0d8c>한국인</option><option value="lv" data-v-a7ee0d8c>Latviešu</option><option value="ru" data-v-a7ee0d8c>Pусский</option><option value="id" data-v-a7ee0d8c>Bahasa Indonesia</option><option value="zh_CN" data-v-a7ee0d8c>大陆简体</option><option value="zh_HK" data-v-a7ee0d8c>香港繁體</option><option value="zh_TW" data-v-a7ee0d8c>臺灣正體</option><option value="sv" data-v-a7ee0d8c>Svenska</option><option value="da" data-v-a7ee0d8c>Dansk</option><option value="vi" data-v-a7ee0d8c>Tiếng Việt</option><option value="fi" data-v-a7ee0d8c>Norsk</option><option value="hr" data-v-a7ee0d8c>עִברִית</option><option value="iw" data-v-a7ee0d8c>Suomalainen</option><option value="no" data-v-a7ee0d8c>Українська</option><option value="th" data-v-a7ee0d8c>Hrvatski</option><option value="uk" data-v-a7ee0d8c>ไทย</option><option value="pl" data-v-a7ee0d8c>Polskie</option><option value="sl" data-v-a7ee0d8c>Slovenščina</option>',27),O=[g],m={key:0,class:"success-msg"};function j(e,t,n,o,r,c){return Object(a["i"])(),Object(a["d"])("div",u,[p,d,Object(a["e"])("table",null,[Object(a["e"])("tr",null,[s,Object(a["e"])("td",null,[Object(a["e"])("div",null,[Object(a["e"])("input",{type:"file",id:"file",ref:"csvFile",class:"file-input",onChange:t[0]||(t[0]=function(){return c.uploadFile&&c.uploadFile.apply(c,arguments)})},null,544),v])])]),r.completeStep1?(Object(a["i"])(),Object(a["d"])("tr",f,[b,Object(a["e"])("td",null,[Object(a["e"])("div",h,[Object(a["e"])("select",{onChange:t[1]||(t[1]=function(e){return c.changeItem(e)})},O,32)])])])):Object(a["c"])("",!0)]),r.completeStep2?(Object(a["i"])(),Object(a["d"])("h3",m,"The generated JSON file has been copied to your clipboard.")):Object(a["c"])("",!0)])}var y=n("1da1"),A=(n("96cf"),n("b635")),N=n("369b"),S={name:"Landing",props:{msg:String},data:function(){return{completeStep1:!1,completeStep2:!1,selectedLanguage:"-"}},methods:{changeItem:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.$refs.csvFile.files[0],a&&"text/csv"==a.type){n.next=7;break}throw t.completeStep2=!1,alert("No csv is selected"),new Error("No csv is selected");case 7:o=e.target.value,"-"!=o?(N.parse(a,{worker:!0,complete:function(e){A(e.data,o)}}),t.completeStep2=!0):t.completeStep2=!1;case 9:case"end":return n.stop()}}),n)})))()},uploadFile:function(){this.completeStep1=!0}}},V=(n("a533"),n("6b0d")),q=n.n(V);const w=q()(S,[["render",j],["__scopeId","data-v-a7ee0d8c"]]);var W=w,k={name:"App",components:{Landing:W}};n("dcb8");const x=q()(k,[["render",i]]);var P=x;Object(a["b"])(P).mount("#app")},8013:function(e,t,n){},a533:function(e,t,n){"use strict";n("8013")},b635:function(e,t,n){var a=n("278c").default,o=n("6374").default,r=n("c973").default;n("96cf"),n("ac1f"),n("1276"),n("4de4"),n("b64b"),n("4fad"),e.exports=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var r,c,i,l,u,p,d,s,v,f,b,h,g,O,m,j;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=function(e,t,n){for(var a=t.split("."),o=0,r=e;o<a.length;o++)o===a.length-1?r[a[o]]=n:r=r[a[o]]=r[a[o]]||{}},c=function(e,t){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style={position:"absolute",left:"-9999px"},document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),i(t)},i=function(e){var t=document.createElement("a");t.setAttribute("href","https://github.com/nocodb/nocodb/edit/master/packages/nc-gui/lang/".concat(e,".json")),t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),t.remove()},t.length){e.next=5;break}throw new Error("Empty csv");case 5:l={},u=Object.keys(t[0]).filter((function(e){return"String Key"!==e&&"String"!==e})),p=o(t);try{for(p.s();!(d=p.n()).done;){s=d.value,v=o(u);try{for(v.s();!(f=v.n()).done;)b=f.value,l[b]=l[b]||{},r(l[b],s[0],s[b])}catch(y){v.e(y)}finally{v.f()}}}catch(y){p.e(y)}finally{p.f()}h=0,g=Object.entries(l);case 10:if(!(h<g.length)){e.next=19;break}if(O=a(g[h],2),m=O[0],j=O[1],l[m]["String Key"]!=n){e.next=16;break}return delete l[m]["String Key"],c(JSON.stringify(j,null,2),n),e.abrupt("return");case 16:h++,e.next=10;break;case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},c82e:function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,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"},dcb8:function(e,t,n){"use strict";n("c82e")}});
//# sourceMappingURL=app.bb2f3bce.js.map
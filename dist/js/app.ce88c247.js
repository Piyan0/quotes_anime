(function(){"use strict";var e={815:function(e,o,t){var r=t(751),n=t(641),a=t(33),c=t(953),i=t(335),s=t(936);const l={bg_color:"#F4F4F4",card_color:"#FFFFFF",name_color:"#828280",text_color:"#000000",border_color:"#AAC3D9",outsidetext_color:"#000000"},u={bg_color:"#13161B",card_color:"#1C2431",name_color:"#828280",text_color:"#FFFFFF",border_color:"#2A314B",outsidetext_color:"#BEC6CC"};var d=(0,c.KR)(l);const f=0,v=1;var p=f;function g(){function e(){p==f?(d.value=u,p=v):(d.value=l,p=f)}return{current_color:d,update_color:e}}const _={class:"fol gap-1 jen alen"},m={class:"fow text-center my-2"},h={class:"f-18 flex-grow-1"},b={class:"fow justify-content-end my-2 px-2"},y={class:"fow gap-2 justify-content-end"};var k={__name:"card",props:["quotes_data","image","character_name"],emits:["anjay_mabar"],setup(e,{emit:o}){const t=e,{current_color:r,update_color:i}=g();var l={en:"English language",id:"Indonesian language"},u="id",d=(0,c.KR)(l[u]);function f(e=null){if(null!=e)return u=e,void(d.value=l[u]);u="id"==u?"en":"id",d.value=l[u]}return(0,n.sV)((()=>{l=t.quotes_data,f("id")})),(o,l)=>((0,n.uX)(),(0,n.CE)("div",{style:(0,a.Tr)([{"background-color":(0,c.R1)(r).card_color,color:(0,c.R1)(r).text_color,"border-bottom":`2px solid ${(0,c.R1)(r).border_color}`},{"max-width":"400px","min-width":"200px"}]),class:"gap-2 p-4 rounded-2"},[(0,n.Lk)("div",_,[(0,n.bF)((0,c.R1)(s.bt),{style:{width:"60px",height:"60px",border:"1px solid gray"},src:t.image,class:"rounded-1"},{loading:(0,n.k6)((()=>l[2]||(l[2]=[(0,n.Lk)("div",{style:{width:"60px",height:"60px"},class:"force-center"},[(0,n.Lk)("img",{width:"32",src:"res/load.svg",alt:""})],-1)]))),_:1},8,["src"]),(0,n.Lk)("p",{style:(0,a.Tr)({color:(0,c.R1)(r).name_color}),class:"f-8"},"Anime Quotes",4)]),(0,n.Lk)("div",m,[(0,n.Lk)("div",h,(0,a.v_)((0,c.R1)(d)),1)]),(0,n.Lk)("div",b,[(0,n.Lk)("p",{style:(0,a.Tr)({color:(0,c.R1)(r).name_color}),class:"f-12"},"- "+(0,a.v_)(e.character_name),5)]),l[3]||(l[3]=(0,n.Lk)("div",{class:"f-12 fow jen gap-1"},[(0,n.Lk)("img",{class:"love_active",width:"14px",src:"res/love.svg",alt:""}),(0,n.Lk)("p",{class:"fw-bold"},"999")],-1)),(0,n.Lk)("div",y,[(0,n.Lk)("img",{class:"dark",onClick:l[0]||(l[0]=e=>f()),width:"17",src:"res/language.svg",alt:""}),(0,n.Lk)("img",{class:"dark",onClick:l[1]||(l[1]=e=>(0,c.R1)(i)()),width:"17",src:"res/color_mode.svg",alt:""})])],4))}},w=t(262);const x=(0,w.A)(k,[["__scopeId","data-v-328b09e0"]]);var R=x;const j={class:"container alen jen"},F={style:{"min-height":"100vh"},class:"fol jen alen"};var L={__name:"App",setup(e){(0,c.KR)("res/icon.jpg"),(0,c.KR)("res/icon.jpg");const{current_color:o}=g();var t={character_name:(0,c.KR)("piyan"),quotes_idn:(0,c.KR)("bahasa indonesia"),quotes_en:(0,c.KR)("bahasa ingggris"),image:(0,c.KR)("https://www.dropbox.com/scl/fi/aczpfe9tmud5ehgtc3s42/zoro.jpg?rlkey=b9wu47bwdmydm0xk39nju4nsj&st=c0mvzxgf&raw=1")};async function r(){i.A.get("https://api-quotes-anime.vercel.app/").then((e=>{t.character_name.value=e.data.character_name,t.quotes_idn.value=e.data.quotes_idn,t.quotes_en.value=e.data.quotes_en,t.image.value=e.data.image_link}))}return(0,n.sV)((()=>r())),(e,r)=>((0,n.uX)(),(0,n.CE)("div",{style:(0,a.Tr)({"background-color":(0,c.R1)(o).bg_color}),class:"body"},[(0,n.Lk)("div",j,[(0,n.Lk)("div",F,[(0,n.bF)(R,{quotes_data:{en:(0,c.R1)(t).quotes_en,id:(0,c.R1)(t).quotes_idn},character_name:(0,c.R1)(t).character_name,image:(0,c.R1)(t).image.value},null,8,["quotes_data","character_name","image"]),(0,n.Lk)("p",{style:(0,a.Tr)({color:(0,c.R1)(o).outsidetext_color}),class:"f-8 my-3"},"Piyan Apriyanto@2025",4)])])],4))}};const q=L;var O=q;(0,r.Ef)(O).mount("#app")}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var a=o[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(o,r,n,a){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var l=n();void 0!==l&&(o=l)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,a,c=r[0],i=r[1],s=r[2],l=0;if(c.some((function(o){return 0!==e[o]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(s)var u=s(t)}for(o&&o(r);l<c.length;l++)a=c[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},r=self["webpackChunkQuotesAnime"]=self["webpackChunkQuotesAnime"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(815)}));r=t.O(r)})();
//# sourceMappingURL=app.ce88c247.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{7174:function(t,e,a){Promise.resolve().then(a.bind(a,5067))},5261:function(t,e,a){"use strict";a.r(e),a.d(e,{GlobalContextProvider:function(){return r},useGlobalContext:function(){return l}});var n=a(9268),s=a(6006);let o=(0,s.createContext)({data:"",setData:s.useState,takeCash:null,setTakeCash:s.useState,totalSumOfClick:0,setTotalSumOfClick:s.useState,stateBanknote:null,setStateBanknote:s.useState}),r=t=>{let{children:e}=t,[a,r]=(0,s.useState)(),[l,u]=(0,s.useState)(),[i,c]=(0,s.useState)(),[m,d]=(0,s.useState)(0),[f,_]=(0,s.useState)(""),[g,h]=(0,s.useState)([]);return(0,n.jsx)(o.Provider,{value:{data:a,setData:r,takeCash:l,setTakeCash:u,totalSumOfClick:m,setStateBanknote:h,setTotalSumOfClick:d,getCash:f,setGetCash:_,getMoney:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{banknote:1e3,amount:4,status:"ready"},{banknote:500,amount:4,status:"ready"},{banknote:100,amount:4,status:"ready"},{banknote:50,amount:4,status:"ready"},{banknote:20,amount:4,status:"ready"},{banknote:10,amount:4,status:"ready"}],a={},n=[],s=[];e.map(t=>s.push({banknote:t.banknote,amount:t.amount,status:t.status}));let o=t,r=0,l=Number(String(t).split("").pop());if(e.map(t=>{r+=t.banknote*t.amount}),0!=l)return console.log("Введите корретную сумму"),!1;if(r<t)return console.log("В банкомате недостаточно денег",r),alert("В банкомате недостаточно денег — ".concat(r,"$")),_(""),!1;if(s.map((t,e)=>{let s=t.amount;for(;o>=t.banknote;){if(0===s){t.status="Неисправен";break}o-=t.banknote,n.push(t.banknote),s-=1,a[t.banknote]=t.amount-s,0!==s||(t.status="Неисправен")}t.amount=s}),0===n.length){if(n!=t)return console.log("Нет таких банкнот"),alert("Нет таких банкнот"),console.log("Выходные данные --> ",e),n="Нехватает нужных банкнот. Выберите другую сумму";n.join(", "),s.map((t,e)=>{g[e].amount=t.amount,g[e].status=t.status})}else n.reduce(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t+e})!=t?(console.log("Нет таких банкнот"),console.log("Выходные данные --> ",e),n="Нехватает нужных банкнот. Выберите другую сумму"):(n.join(", "),s.map((t,e)=>{g.push([e].amount=t.amount),g.push([e].status=t.status)}));return u(a),a}},children:e})},l=()=>(0,s.useContext)(o)},5067:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var n=a(9268),s=a(9713),o=a.n(s),r=a(5846),l=a.n(r),u=a(6008),i=a(5260),c=a.n(i),m=t=>{let e=(0,u.usePathname)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:c().Navigate,children:t.navLinks.map(t=>{let a=e.split("/"),s=t.label.toLowerCase()===a[a.length-1];return(0,n.jsx)(l(),{href:t.href,className:s?c().active:"",children:t.label},t.label)})})})},d=a(5261);a(6006);var f=t=>{let{data:e,setData:a,takeCash:s,setTakeCash:o,totalSumOfClick:r,setTotalSumOfClick:l,getMoney:u,getCash:i,setGetCash:c}=(0,d.useGlobalContext)();return[1,2,3,4,5,6,7,8,9,"Enter",0,"Cancel"].map((e,a)=>"Enter"===e?(0,n.jsx)("button",{onClick:()=>{u(r),console.log(i),c("Got: ".concat(r,"$")),l("")},className:t.classes,style:{backgroundColor:"var(--greenButton)",color:"#fff",fontWeight:"normal"},"data-digit":e,children:e},a):"Cancel"===e?(0,n.jsx)("button",{onClick:()=>l(""),className:t.classes,style:{backgroundColor:"#efa43d",color:"#fff",fontWeight:"normal"},"data-digit":e,children:e},a):(0,n.jsx)("button",{onClick:t=>{0===r?l(t.target.dataset.digit):l(r+t.target.dataset.digit)},className:t.classes,"data-digit":e,children:e},a))};let _=[{label:"Cash",href:"/atm/cash"},{label:"Setup",href:"/atm/setup"},{label:"Back",href:"/atm"}];var g=t=>{let{children:e}=t;return(0,n.jsxs)("div",{className:o().Atm,children:[(0,n.jsxs)("div",{className:o().atmScreen,children:[(0,n.jsx)(m,{navLinks:_}),(0,n.jsx)("main",{children:e})]}),(0,n.jsxs)("div",{className:o().digits,children:[(0,n.jsx)(f,{classes:o().digit}),(0,n.jsx)("div",{className:o().moneyOut})]})]})}},9713:function(t){t.exports={Atm:"Atm_Atm__R4PpR",atmScreen:"Atm_atmScreen__Oh3J_",Navigate:"Atm_Navigate__OjmYC",digits:"Atm_digits__T4a2K",digit:"Atm_digit__9AiOS",moneyOut:"Atm_moneyOut__mR2WM"}},5260:function(t){t.exports={Navigate:"Navigation_Navigate__mAlYJ",active:"Navigation_active__560Sa"}},3177:function(t,e,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=a(6006),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,a){var n,o={},i=null,c=null;for(n in void 0!==a&&(i=""+a),void 0!==e.key&&(i=""+e.key),void 0!==e.ref&&(c=e.ref),e)r.call(e,n)&&!u.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===o[n]&&(o[n]=e[n]);return{$$typeof:s,type:t,key:i,ref:c,props:o,_owner:l.current}}e.Fragment=o,e.jsx=i,e.jsxs=i},9268:function(t,e,a){"use strict";t.exports=a(3177)},5846:function(t,e,a){t.exports=a(7477)},6008:function(t,e,a){t.exports=a(794)}},function(t){t.O(0,[477,253,769,744],function(){return t(t.s=7174)}),_N_E=t.O()}]);
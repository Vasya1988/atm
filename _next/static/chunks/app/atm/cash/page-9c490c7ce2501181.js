(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{842:function(t,e,n){Promise.resolve().then(n.bind(n,4562))},5261:function(t,e,n){"use strict";n.r(e),n.d(e,{GlobalContextProvider:function(){return o},useGlobalContext:function(){return u}});var a=n(9268),r=n(6006);let s=(0,r.createContext)({data:"",setData:r.useState,takeCash:null,setTakeCash:r.useState,totalSumOfClick:0,setTotalSumOfClick:r.useState,stateBanknote:null,setStateBanknote:r.useState}),o=t=>{let{children:e}=t,[n,o]=(0,r.useState)(),[u,l]=(0,r.useState)(),[c,i]=(0,r.useState)(),[m,d]=(0,r.useState)(0),[f,h]=(0,r.useState)(""),[p,_]=(0,r.useState)([]);return(0,a.jsx)(s.Provider,{value:{data:n,setData:o,takeCash:u,setTakeCash:l,totalSumOfClick:m,setStateBanknote:_,setTotalSumOfClick:d,getCash:f,setGetCash:h,getMoney:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[{banknote:1e3,amount:4,status:"ready"},{banknote:500,amount:4,status:"ready"},{banknote:100,amount:4,status:"ready"},{banknote:50,amount:4,status:"ready"},{banknote:20,amount:4,status:"ready"},{banknote:10,amount:4,status:"ready"}],n={},a=[],r=[];e.map(t=>r.push({banknote:t.banknote,amount:t.amount,status:t.status}));let s=t,o=0,u=Number(String(t).split("").pop());if(e.map(t=>{o+=t.banknote*t.amount}),0!=u)return console.log("Введите корретную сумму"),!1;if(o<t)return console.log("В банкомате недостаточно денег",o),alert("В банкомате недостаточно денег — ".concat(o,"$")),h(""),!1;if(r.map((t,e)=>{let r=t.amount;for(;s>=t.banknote;){if(0===r){t.status="Неисправен";break}s-=t.banknote,a.push(t.banknote),r-=1,n[t.banknote]=t.amount-r,0!==r||(t.status="Неисправен")}t.amount=r}),0===a.length){if(a!=t)return console.log("Нет таких банкнот"),alert("Нет таких банкнот"),console.log("Выходные данные --> ",e),a="Нехватает нужных банкнот. Выберите другую сумму";a.join(", "),r.map((t,e)=>{p[e].amount=t.amount,p[e].status=t.status})}else a.reduce(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t+e})!=t?(console.log("Нет таких банкнот"),console.log("Выходные данные --> ",e),a="Нехватает нужных банкнот. Выберите другую сумму"):(a.join(", "),r.map((t,e)=>{p.push([e].amount=t.amount),p.push([e].status=t.status)}));return l(n),n}},children:e})},u=()=>(0,r.useContext)(s)},4562:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var a=n(9268);n(6006);var r=n(3064),s=n.n(r),o=n(1143),u=n.n(o),l=t=>{let{sum:e,dataName:n,clickHandle:r}=t;return(0,a.jsx)("div",{onClick:r,"data-cash":n,className:u().CashButton,children:(0,a.jsx)("p",{children:e})})},c=n(3910),i=n.n(c),m=t=>{let{props:e,tag:n,text:r}=t,s=n||"h1";return(0,a.jsx)(s,{className:i().Title,children:r})},d=n(5261),f=t=>{let{takeCash:e,setTakeCash:n,totalSumOfClick:r,setTotalSumOfClick:o,getCash:u,setGetCash:c,getMoney:i,stateBanknote:f,setStateBanknote:h}=(0,d.useGlobalContext)(),p=""!=u&&null!=e?Object.keys(e).reverse().map(t=>(0,a.jsxs)("span",{"data-show":!0,children:[t,"$: ",e[t],(0,a.jsx)("br",{})]},t)):"",_=t=>{let e=t.currentTarget.dataset.cash;console.log(e),"Other sum"===e?(o(0),document.querySelector('[data-enter="enter"]').value=""):"Settings"===e?(o(0),document.querySelector('[data-enter="enter"]').value=""):(document.querySelector('[data-enter="enter"]').value="",o(Number(r)+Number(e)))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{tag:"h2",text:0!=r?r:""}),(0,a.jsxs)("div",{className:s().MainScreen,children:[(0,a.jsxs)("div",{className:s().Enter,children:[(0,a.jsx)("form",{style:{textAlign:"center"},onSubmit:t=>{t.preventDefault(),Number(t.target[0].value)?(i(t.target[0].value)&&(c("Got: ".concat(t.target[0].value,"$")),console.log(t.target[0].value)),t.target[0].value=""):(alert("Введите цифры"),t.target[0].value="",c(""))},children:(0,a.jsx)("input",{"data-enter":"enter",type:"text",placeholder:"Enter your sum",onChange:t=>o(t.target.value)})}),(0,a.jsxs)("span",{className:s().result,children:["".concat(u),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),p]})]}),["10$","20$","50$","100$","500$","1000$","Settings","Other sum"].map(t=>(0,a.jsx)(l,{clickHandle:_,dataName:t.replace("$",""),sum:"".concat(t)},t))]})]})}},3064:function(t){t.exports={MainScreen:"main_MainScreen__VvuVL",Enter:"main_Enter__kJCJs",result:"main_result__uSEtb"}},1143:function(t){t.exports={CashButton:"CashButton_CashButton__mZ3IF"}},3910:function(t){t.exports={Title:"Title_Title__Qdoc2"}},3177:function(t,e,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(6006),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var a,s={},c=null,i=null;for(a in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(i=e.ref),e)o.call(e,a)&&!l.hasOwnProperty(a)&&(s[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===s[a]&&(s[a]=e[a]);return{$$typeof:r,type:t,key:c,ref:i,props:s,_owner:u.current}}e.Fragment=s,e.jsx=c,e.jsxs=c},9268:function(t,e,n){"use strict";t.exports=n(3177)}},function(t){t.O(0,[253,769,744],function(){return t(t.s=842)}),_N_E=t.O()}]);
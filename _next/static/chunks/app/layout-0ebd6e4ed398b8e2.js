(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4097:function(t,e,n){Promise.resolve().then(n.bind(n,5261)),Promise.resolve().then(n.t.bind(n,424,23)),Promise.resolve().then(n.t.bind(n,7402,23)),Promise.resolve().then(n.t.bind(n,2074,23))},5261:function(t,e,n){"use strict";n.r(e),n.d(e,{GlobalContextProvider:function(){return s},useGlobalContext:function(){return u}});var a=n(9268),o=n(6006);let r=(0,o.createContext)({data:"",setData:o.useState,takeCash:null,setTakeCash:o.useState,totalSumOfClick:0,setTotalSumOfClick:o.useState,stateBanknote:null,setStateBanknote:o.useState}),s=t=>{let{children:e}=t,[n,s]=(0,o.useState)(),[u,l]=(0,o.useState)(),[i,m]=(0,o.useState)(),[c,f]=(0,o.useState)(0),[_,d]=(0,o.useState)(""),[h,k]=(0,o.useState)([{banknote:1e3,amount:Math.floor(20*Math.random(1)),status:"ready"},{banknote:500,amount:Math.floor(20*Math.random(1)),status:"ready"},{banknote:100,amount:Math.floor(20*Math.random(1)),status:"ready"},{banknote:50,amount:Math.floor(20*Math.random(1)),status:"ready"},{banknote:20,amount:Math.floor(20*Math.random(1)),status:"ready"},{banknote:10,amount:Math.floor(20*Math.random(1)),status:"ready"}]);return(0,a.jsx)(r.Provider,{value:{data:n,setData:s,takeCash:u,setTakeCash:l,totalSumOfClick:c,stateBanknote:h,setStateBanknote:k,setTotalSumOfClick:f,getCash:_,setGetCash:d,getMoney:(t,e)=>{let n={},a=[],o=[];e.map(t=>o.push({banknote:t.banknote,amount:t.amount,status:t.status}));let r=t,s=0,u=Number(String(t).split("").pop());if(e.map(t=>{s+=t.banknote*t.amount}),0!=u)return console.log("Введите корретную сумму"),!1;if(s<t)return console.log("В банкомате недостаточно денег",s),alert("В банкомате недостаточно денег — ".concat(s,"$")),d(""),!1;if(o.map((t,e)=>{let o=t.amount;for(;r>=t.banknote;){if(0===o){t.status="Неисправен";break}r-=t.banknote,a.push(t.banknote),o-=1,n[t.banknote]=t.amount-o,0!==o||(t.status="Неисправен")}t.amount=o}),0===a.length){if(a!=t)return console.log("Нет таких банкнот"),alert("Нет таких банкнот"),console.log("Выходные данные --> ",e),a="Нехватает нужных банкнот. Выберите другую сумму";a.join(", "),o.map((t,e)=>{h[e].amount=t.amount,h[e].status=t.status})}else a.reduce(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t+e})!=t?(console.log("Нет таких банкнот"),console.log("Выходные данные --> ",e),a="Нехватает нужных банкнот. Выберите другую сумму"):(a.join(", "),o.map((t,e)=>{h[e].amount=t.amount,h[e].status=t.status}));return l(n),n},buttonSumValue:["10$","20$","50$","100$","500$","1000$","Settings","Other sum"]},children:e})},u=()=>(0,o.useContext)(r)},7402:function(){},2074:function(t){t.exports={main:"page_main__ZVyhD",start:"page_start__YcFAK"}},424:function(t){t.exports={style:{fontFamily:"'__Inter_aa23dc', '__Inter_Fallback_aa23dc'",fontStyle:"normal"},className:"__className_aa23dc"}},3177:function(t,e,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(6006),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,n){var a,r={},i=null,m=null;for(a in void 0!==n&&(i=""+n),void 0!==e.key&&(i=""+e.key),void 0!==e.ref&&(m=e.ref),e)s.call(e,a)&&!l.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===r[a]&&(r[a]=e[a]);return{$$typeof:o,type:t,key:i,ref:m,props:r,_owner:u.current}}e.Fragment=r,e.jsx=i,e.jsxs=i},9268:function(t,e,n){"use strict";t.exports=n(3177)}},function(t){t.O(0,[253,769,744],function(){return t(t.s=4097)}),_N_E=t.O()}]);
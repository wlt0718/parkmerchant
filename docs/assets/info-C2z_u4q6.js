import{u as p,_ as h}from"./order-vO47mGas.js";import"./user-D3LG16ek.js";import{_ as v,u as f,o as e,f as o,j as s,F as _,A as m,q as k,h as y,B as d,t as c,p as g,l as j}from"./index-CjJM-_zo.js";const i=a=>(g("data-v-caf0e584"),a=a(),j(),a),x=i(()=>s("div",{class:"headeraaa"},[s("div",{class:"title"},"带客信息"),s("div",null,"导游：导游一"),s("div",null,"带客游玩批次：1003202406060001")],-1)),N=i(()=>s("div",{class:"tips"}," 详情： ",-1)),S={class:"list"},B=["onClick"],I={class:"header"},C={class:"status"},V={key:0},q={key:1},F={class:"body"},L=i(()=>s("img",{src:h,alt:""},null,-1)),O={class:"info"},b={class:"name"},w={class:"desc"},A={class:"desc"},D={class:"amt"},E={__name:"info",setup(a){const r=f(),l=p();function u(n){r.push({path:"/orderinfo",query:{id:n}})}return(n,R)=>(e(),o(_,null,[x,N,s("div",S,[(e(!0),o(_,null,m(k(l).list,t=>(e(),o("div",{key:t.id},[t.guide&&t.status==="0"?(e(),o("div",{key:0,class:"item",onClick:T=>u(t.id)},[s("div",I,[s("div",C,[y("订单状态： "),t.status==="0"?(e(),o("span",V,"已下单")):d("",!0),t.status==="1"?(e(),o("span",q,"已完成")):d("",!0)])]),s("div",F,[L,s("div",O,[s("div",b,c(t.projectName),1),s("div",w,"佣金：￥"+c(t.yongjin),1),s("div",A,"数量：x "+c(t.projectNum),1)]),s("div",D,[s("div",null,"￥"+c(t.jiesuan),1)])])],8,B)):d("",!0)]))),128))])],64))}},H=v(E,[["__scopeId","data-v-caf0e584"]]);export{H as default};
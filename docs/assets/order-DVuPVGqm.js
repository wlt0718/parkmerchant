import{_ as A,u as F,r as a,o as l,f as d,c as n,w as p,j as o,F as g,x as E,q as J,h as C,y as v,A as R,J as T,t as r,p as G,l as H}from"./index-C1ztbtdN.js";import"./index-DoAiOh0M.js";import{C as K,a as P,D as Q}from"./index-DL9AQ9-z.js";import{u as W,_ as X}from"./order-DNmxVkYj.js";import{O as Y}from"./index-Dor0KNKy.js";import{S as Z}from"./index-DLmktSL8.js";import{B as tt}from"./mount-component-DGqluWzw.js";import{a as ot}from"./function-call-zy-4T7lm.js";import"./index-X5Mnn1qc.js";import"./index-1d-ZCeBd.js";import"./on-popup-reopen-Br20eIOu.js";import"./use-route-BlmzrEbl.js";import"./use-placeholder-DsvmDsam.js";const V=c=>(G("data-v-7011a552"),c=c(),H(),c),et={class:"list"},st=["onClick"],at={class:"header"},nt={class:"status"},lt={key:0},it={key:1},dt={class:"body"},rt=V(()=>o("img",{src:X,alt:""},null,-1)),ct={class:"info"},ut={class:"name"},pt={class:"desc"},_t={class:"desc"},vt={class:"desc"},mt={class:"amt"},ft={class:"paymode"},ht=V(()=>o("div",{class:"tips"},"请选择该游客的支付方式",-1)),yt={__name:"order",setup(c){const m=W(),S=F(),f=a("a"),h=a("z"),y=a("date"),u=a(!1),w=a("");function D(s){u.value=!1;const e=s[0].getMonth()+1+"月"+s[0].getDate()+"日",i=s[1].getMonth()+1+"月"+s[1].getDate()+"日";w.value=e+"-"+i}const B=s=>{console.log(s),s==="custom"&&(u.value=!0)},N=a([{text:"今日",value:"date"},{text:"本周",value:"week"},{text:"本月",value:"month"},{text:`自定义时间${w.value}`,value:"custom"}]),j=[{text:"全部项目",value:"a"},{text:"项目二",value:"b"},{text:"项目三",value:"c"}],I=[{text:"全部状态",value:"z"},{text:"已下单",value:"x"},{text:"已完成",value:"c"}];function M(s){S.push({path:"/orderinfo",query:{id:s}})}const _=a(!1),x=a("0");function $(s){ot({title:"提示",message:"是否将该订单设置为已完成？"}).then(()=>{_.value=!0,x.value=s.id}).catch(()=>{})}function k(){_.value=!1,m.Set_list_status(x.value)}return(s,e)=>{const i=P,O=Q,U=Z,b=K,z=tt,L=Y;return l(),d(g,null,[n(U,null,{default:p(()=>[n(O,{"active-color":"#ee0a24"},{default:p(()=>[n(i,{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=t=>f.value=t),options:j},null,8,["modelValue"]),n(i,{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=t=>y.value=t),options:N.value,onChange:B},null,8,["modelValue","options"]),n(i,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t),options:I},null,8,["modelValue"])]),_:1})]),_:1}),n(b,{show:u.value,"onUpdate:show":e[3]||(e[3]=t=>u.value=t),type:"range",onConfirm:D,color:"#ee0a24","allow-same-day":"",position:"top"},null,8,["show"]),o("div",et,[(l(!0),d(g,null,E(J(m).list,t=>(l(),d("div",{class:"item",key:t.id,onClick:q=>M(t.id)},[o("div",at,[o("div",nt,[C("订单状态： "),t.status==="0"?(l(),d("span",lt,"已下单")):v("",!0),t.status==="1"?(l(),d("span",it,"已完成")):v("",!0)]),t.status==="0"?(l(),R(z,{key:0,type:"primary",size:"mini",color:"#5075ff",onClick:T(q=>$(t),["stop"])},{default:p(()=>[C("订单核销")]),_:2},1032,["onClick"])):v("",!0)]),o("div",dt,[rt,o("div",ct,[o("div",ut,r(t.projectName),1),o("div",pt,"价格：￥"+r(t.projectjiage)+"/ 位",1),o("div",_t,"下单人："+r(t.person),1),o("div",vt,"数量：x "+r(t.projectNum),1)]),o("div",mt,[o("div",null,"￥"+r(t.allAmount),1)])])],8,st))),128))]),n(L,{show:_.value},{default:p(()=>[o("div",ft,[ht,o("div",null,[o("div",{class:"pay-item",onClick:e[4]||(e[4]=t=>k("0"))},"现金支付"),o("div",{class:"pay-item",onClick:e[5]||(e[5]=t=>k("1"))},"信用卡支付")])])]),_:1},8,["show"])],64)}}},$t=A(yt,[["__scopeId","data-v-7011a552"]]);export{$t as default};

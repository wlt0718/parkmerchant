import{_ as v,y as u,o as d,e as c,h as s,c as m,f as p,l as t,s as _,t as o,F as y,p as f,j as g}from"./index-CC1Zzz6T.js";import{u as b,_ as k}from"./order-CNo6toW6.js";import{I as j}from"./index-BkBpIOlI.js";const i=a=>(f("data-v-add83958"),a=a(),g(),a),x={class:"header"},I={style:{"margin-left":"10px"}},N={key:0},S={key:1},T={class:"item"},V={class:"bodys"},B=i(()=>s("img",{src:k,alt:""},null,-1)),O={class:"info"},F={class:"info-head"},q={class:"name"},w={class:"info-num"},A={class:"desc"},C={class:"yh"},D=i(()=>s("div",{class:"label"},"总计",-1)),E={class:"amt"},L={class:"yh"},R=i(()=>s("div",{class:"label"},"订单号",-1)),z={class:"time"},G={class:"yh"},H=i(()=>s("div",{class:"label"},"下单人",-1)),J={class:"time"},K={class:"yh"},M=i(()=>s("div",{class:"label"},"下单时间",-1)),P={class:"time"},Q={key:0,class:"yh"},U=i(()=>s("div",{class:"label"},"完成时间",-1)),W={class:"time"},X={key:1,class:"yh"},Y=i(()=>s("div",{class:"label"},"项目佣金比例",-1)),Z={class:"time"},$={key:2,class:"yh"},ss=i(()=>s("div",{class:"label"},"项目佣金",-1)),es={class:"time"},ts={key:3,class:"yh"},os=i(()=>s("div",{class:"label"},"导游",-1)),is={class:"time"},ds={key:4,class:"yh"},cs=i(()=>s("div",{class:"label"},"需结算金额",-1)),_s={class:"time"},as={key:5,class:"yh"},ns=i(()=>s("div",{class:"label"},"带客游玩批次",-1)),ls={class:"time"},hs={__name:"orderinfo",setup(a){const l=b(),h=u().query.id,e=l.list.find(n=>n.id===h);return(n,vs)=>{const r=j;return d(),c(y,null,[s("div",x,[m(r,{name:"passed"}),s("span",I,[p("订单状态： "),t(e).status==="0"?(d(),c("span",N,"已下单")):_("",!0),t(e).status==="1"?(d(),c("span",S,"已完成")):_("",!0)])]),s("div",T,[s("div",V,[B,s("div",O,[s("div",F,[s("div",q,o(t(e).projectName),1)]),s("div",w,"价格：￥"+o(t(e).projectjiage)+" / 位",1),s("div",A,"数量：x "+o(t(e).projectNum),1)])]),s("div",C,[D,s("div",E,"￥"+o(t(e).allAmount),1)]),s("div",L,[R,s("div",z,o(t(e).ddh),1)]),s("div",G,[H,s("div",J,"￥"+o(t(e).person),1)]),s("div",K,[M,s("div",P,o(t(e).orderTime),1)]),t(e).successTime?(d(),c("div",Q,[U,s("div",W,o(t(e).successTime),1)])):_("",!0),t(e).guide?(d(),c("div",X,[Y,s("div",Z,o(t(e).bili)+" %",1)])):_("",!0),t(e).guide?(d(),c("div",$,[ss,s("div",es,"￥"+o(t(e).yongjin),1)])):_("",!0),t(e).guide?(d(),c("div",ts,[os,s("div",is,o(t(e).guide),1)])):_("",!0),t(e).guide?(d(),c("div",ds,[cs,s("div",_s,"￥"+o(t(e).jiesuan),1)])):_("",!0),t(e).guide?(d(),c("div",as,[ns,s("div",ls,"￥"+o(t(e).guideOrder),1)])):_("",!0)])],64)}}},ys=v(hs,[["__scopeId","data-v-add83958"]]);export{ys as default};

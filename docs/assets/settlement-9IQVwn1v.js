import{D as X,E as Y,d as ee,r as v,k as q,a as I,G as H,H as te,c as u,_ as oe,u as se,o as N,e as V,w as x,h as t,n as ne,I as ae,f as r,t as f,F as P,q as L,s as ie,p as le,j as ce}from"./index-BQrktSF6.js";import{C as ue}from"./index-3ix3U3-Q.js";import{C as re,a as de,D as me}from"./index-LUL_kkFh.js";import"./playlist-DFE42cLf.js";import{l as ve,o as pe,c as fe,n as he,q as _e,m as M,r as ge,s as xe,e as we,g as ke,h as be,v as G,j as R,x as Ce,y as ye,z as Ne,w as Ve}from"./index-BRxZgLsP.js";import{s as Se}from"./function-call-Dd0YiCLk.js";import{B as Ie}from"./mount-component-Cw9P0CrN.js";import{C as De}from"./index-Dsy1kCPL.js";import{P as Oe}from"./index-B147qKNQ.js";import"./use-route-COyv4N3Q.js";import"./on-popup-reopen-CRjnU_ou.js";import"./use-placeholder-CYJacQvx.js";function Ee(l,C){if(!ve||!window.IntersectionObserver)return;const _=new IntersectionObserver(s=>{C(s[0].intersectionRatio>0)},{root:document.body}),c=()=>{l.value&&_.observe(l.value)},y=()=>{l.value&&_.unobserve(l.value)};X(y),Y(y),pe(c)}const[Pe,Re]=fe("sticky"),je={zIndex:he,position:_e("top"),container:Object,offsetTop:M(0),offsetBottom:M(0)};var Be=ee({name:Pe,props:je,emits:["scroll","change"],setup(l,{emit:C,slots:_}){const c=v(),y=ge(c),s=q({fixed:!1,width:0,height:0,transform:0}),w=v(!1),d=I(()=>xe(l.position==="top"?l.offsetTop:l.offsetBottom)),B=I(()=>{if(w.value)return;const{fixed:o,height:k,width:m}=s;if(o)return{width:`${m}px`,height:`${k}px`}}),T=I(()=>{if(!s.fixed||w.value)return;const o=we(ke(l.zIndex),{width:`${s.width}px`,height:`${s.height}px`,[l.position]:`${d.value}px`});return s.transform&&(o.transform=`translate3d(0, ${s.transform}px, 0)`),o}),p=o=>C("scroll",{scrollTop:o,isFixed:s.fixed}),D=()=>{if(!c.value||G(c))return;const{container:o,position:k}=l,m=R(c),U=Ne(window);if(s.width=m.width,s.height=m.height,k==="top")if(o){const h=R(o),g=h.bottom-d.value-s.height;s.fixed=d.value>m.top&&h.bottom>0,s.transform=g<0?g:0}else s.fixed=d.value>m.top;else{const{clientHeight:h}=document.documentElement;if(o){const g=R(o),S=h-g.top-d.value-s.height;s.fixed=h-d.value<m.bottom&&h>g.top,s.transform=S<0?-S:0}else s.fixed=h-d.value<m.bottom}p(U)};return H(()=>s.fixed,o=>C("change",o)),be("scroll",D,{target:y,passive:!0}),Ee(c,D),H([Ce,ye],()=>{!c.value||G(c)||!s.fixed||(w.value=!0,te(()=>{const o=R(c);s.width=o.width,s.height=o.height,w.value=!1}))}),()=>{var o;return u("div",{ref:c,style:B.value},[u("div",{class:Re({fixed:s.fixed&&!w.value}),style:T.value},[(o=_.default)==null?void 0:o.call(_)])])}}});const Te=Ve(Be),j=l=>(le("data-v-1c5f016c"),l=l(),ce(),l),Ue={class:"store"},Ae={key:0,class:"store-item"},$e={class:"item-left"},Fe={class:"name"},ze={class:"red"},He={class:"right"},Le=j(()=>t("div",{style:{color:"#E6A23C"}},"未结算",-1)),Me={class:"btn"},Ge=j(()=>t("div",{class:"footer-box"},null,-1)),qe={class:"footer"},We={class:"footer-left"},Ze={class:"summary"},Je={class:"wei"},Ke={class:"red"},Qe={class:"amt"},Xe={class:"red"},Ye={class:"footer-btn"},et={class:"content"},tt={class:"head"},ot={class:"red"},st={class:"red"},nt=j(()=>t("div",{class:"tipsa"},"结算明细如下：",-1)),at={class:"list"},it=j(()=>t("div",{class:"list-item title"},[t("div",{class:"name"},"导游"),t("div",{class:"value"},"结算金额")],-1)),lt={class:"name"},ct={class:"value"},ut={class:"foot-btn"},rt={__name:"settlement",setup(l){const C=se(),_=v("1"),c=v("date"),y=[{text:"所有导游",value:"1"},{text:"导游一",value:"2"},{text:"导游二",value:"3"},{text:"导游三",value:"4"}],s=v([{text:"今日",value:"date"},{text:"本周",value:"week"},{text:"本月",value:"month"},{text:"自定义时间",value:"custom"}]),w=i=>{i==="custom"&&(d.value=!0)},d=v(!1),B=v("");function T(i){d.value=!1;const e=i[0].getMonth()+1+"月"+i[0].getDate()+"日",n=i[1].getMonth()+1+"月"+i[1].getDate()+"日";B.value=e+"-"+n}const p=v([{id:0,guideName:"王天真",num:20,amount:40,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100120240430001"},{id:1,guideName:"赵童童",num:20,amount:33,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100220240430001"},{id:2,guideName:"赵童童",num:20,amount:105,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100220240430002"},{id:3,guideName:"崔一",num:20,amount:19,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100320240430001"},{id:4,guideName:"王天真",num:20,amount:25,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100120240430002"},{id:5,guideName:"王天真",num:20,amount:10,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100120240430003"},{id:6,guideName:"崔一",num:20,amount:30,proportion:5,income:30,time:"2024年04月29日",status:0,pici:"100320240430002"}]);function D(){C.push({name:"info"})}const o=v([]),k=v(!1),m=v(!1);function U(i){const e=p.value.map(n=>n.id);o.value=i?e:[],m.value=!1}function h(i){const e=i.length;k.value=e===p.value.length&&e>0,m.value=e>0&&e<p.value.length}const g=I(()=>{const i=o.value.map(n=>p.value.find(b=>b.id===n).guideName),e=[];return i.forEach(n=>{e.indexOf(n)===-1&&e.push(n)}),e.length}),S=I(()=>{if(o.value.length===0)return"";const i=o.value.map(n=>p.value.find(b=>b.id===n));let e=0;return i.forEach(n=>{e=e+n.amount}),e}),O=v(!1),$=q({weiObj:{}});function W(){if(!o.value.length)return Se({title:"提示",message:"您还没有选择结算列表"}),!1;const i=o.value.map(n=>p.value.find(b=>b.id===n));let e={};i.forEach(n=>{e.hasOwnProperty(n.guideName)?e[n.guideName]=e[n.guideName]+n.amount:e[n.guideName]=0+n.amount}),$.weiObj=e,O.value=!0}function Z(){o.value.forEach(i=>{const e=p.value.findIndex(n=>n.id===i);p.value.splice(e,1)}),O.value=!1,o.value=[]}return(i,e)=>{const n=de,E=me,b=Te,J=re,F=ue,A=Ie,K=De,Q=Oe;return N(),V(P,null,[u(b,null,{default:x(()=>[u(E,null,{default:x(()=>[u(n,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=a=>_.value=a),options:y},null,8,["modelValue"]),u(n,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=a=>c.value=a),options:s.value,onChange:w},null,8,["modelValue","options"])]),_:1})]),_:1}),u(J,{show:d.value,"onUpdate:show":e[2]||(e[2]=a=>d.value=a),type:"range",onConfirm:T,"allow-same-day":"",position:"top"},null,8,["show"]),t("div",Ue,[u(K,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=a=>o.value=a),onChange:h},{default:x(()=>[(N(!0),V(P,null,L(p.value,a=>(N(),V(P,{key:a.id},[a.status===0?(N(),V("div",Ae,[u(F,{name:a.id,class:"checkbox"},null,8,["name"]),t("div",$e,[t("div",Fe,"导游："+f(a.guideName),1),t("div",null,"带客游玩批次："+f(a.pici),1),t("div",null,"时间："+f(a.time),1),t("div",null,[r("结算金额："),t("span",ze,"￥"+f(a.amount),1)])]),t("div",He,[Le,t("div",Me,[u(A,{color:"#5075FF",size:"mini",round:"",onClick:D,block:""},{default:x(()=>[r("查看详情")]),_:1})])])])):ie("",!0)],64))),128))]),_:1},8,["modelValue"])]),Ge,t("div",qe,[t("div",We,[u(F,{class:"checkall",modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=a=>k.value=a),indeterminate:m.value,onChange:U},{default:x(()=>[r("全选 ")]),_:1},8,["modelValue","indeterminate"]),ne(t("div",Ze,[t("div",Je,[r("已选：导游 "),t("span",Ke,f(g.value),1),r(" 位")]),t("div",Qe,[r("共计："),t("span",Xe,f(S.value),1),r("元")])],512),[[ae,o.value.length>0]])]),t("div",Ye,[u(A,{color:"#5075ff",onClick:W,round:"",block:""},{default:x(()=>[r("立即结算")]),_:1})])]),u(Q,{show:O.value,"onUpdate:show":e[5]||(e[5]=a=>O.value=a),closeable:"",position:"bottom",class:"popup",round:""},{default:x(()=>[t("div",et,[t("div",tt,[t("div",null,[r("结算导游总计： "),t("span",ot,f(g.value),1),r(" 位")]),t("div",null,[r("结算金额总计： "),t("span",st,f(S.value),1),r(" 元")]),nt]),t("div",at,[it,(N(!0),V(P,null,L($.weiObj,(a,z)=>(N(),V("div",{key:z,class:"list-item"},[t("div",lt,f(z),1),t("div",ct,f(a)+" 元",1)]))),128))])]),t("div",ut,[u(A,{color:"#5075ff",onClick:Z,round:"",block:""},{default:x(()=>[r("确认结算")]),_:1})])]),_:1},8,["show"])],64)}}},Ct=oe(rt,[["__scopeId","data-v-1c5f016c"]]);export{Ct as default};

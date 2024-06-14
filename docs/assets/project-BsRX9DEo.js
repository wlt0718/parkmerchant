import{d as $,r as C,k as O,a as D,c as f,_ as U,u as z,o as S,e as N,h as n,w as x,F as q,q as G,x as X,t as j,l as J,f as H,p as K,j as Q}from"./index-C_XFIidH.js";import{C as Y}from"./index-IHqms8iz.js";import{u as Z}from"./project-BulzZcBF.js";import{B as ee}from"./mount-component-Ay0WRrFy.js";import{C as te}from"./index-CLKA6jGp.js";import{c as oe,m as se,n as M,b as A,d as ae,f as ne,h as le,p as ce,j as ie,w as re}from"./index-BmvuxWIC.js";import{u as ue,a as de}from"./index-FE545Hyb.js";import{c as fe}from"./on-popup-reopen-Dqc3G_iO.js";import{a as he}from"./function-call-CfEvJhsG.js";import"./use-route-DPogibqX.js";import"./use-placeholder-QfrKmCF-.js";const[me,T]=oe("swipe-cell"),pe={name:se(""),disabled:Boolean,leftWidth:M,rightWidth:M,beforeClose:Function,stopPropagation:Boolean};var ve=$({name:me,props:pe,emits:["open","close","click"],setup(o,{emit:v,slots:c}){let u,g,i,d;const p=C(),w=C(),y=C(),l=O({offset:0,dragging:!1}),_=ue(),s=e=>e.value?le(e).width:0,t=D(()=>A(o.leftWidth)?+o.leftWidth:s(w)),h=D(()=>A(o.rightWidth)?+o.rightWidth:s(y)),k=e=>{l.offset=e==="left"?t.value:-h.value,u||(u=!0,v("open",{name:o.name,position:e}))},b=e=>{l.offset=0,u&&(u=!1,v("close",{name:o.name,position:e}))},E=e=>{const r=Math.abs(l.offset),m=.15,L=u?1-m:m,R=e==="left"?t.value:h.value;R&&r>R*L?k(e):b(e)},a=e=>{o.disabled||(i=l.offset,_.start(e))},P=e=>{if(o.disabled)return;const{deltaX:r}=_;_.move(e),_.isHorizontal()&&(g=!0,l.dragging=!0,(!u||r.value*i<0)&&ce(e,o.stopPropagation),l.offset=ie(r.value+i,-h.value,t.value))},B=()=>{l.dragging&&(l.dragging=!1,E(l.offset>0?"left":"right"),setTimeout(()=>{g=!1},0))},V=(e="outside")=>{d||(v("click",e),u&&!g&&(d=!0,fe(o.beforeClose,{args:[{name:o.name,position:e}],done:()=>{d=!1,b(e)},canceled:()=>d=!1,error:()=>d=!1})))},W=(e,r)=>m=>{r&&m.stopPropagation(),V(e)},I=(e,r)=>{const m=c[e];if(m)return f("div",{ref:r,class:T(e),onClick:W(e,!0)},[m()])};return de({open:k,close:b}),ae(p,()=>V("outside"),{eventName:"touchstart"}),ne("touchmove",P,{target:p}),()=>{var e;const r={transform:`translate3d(${l.offset}px, 0, 0)`,transitionDuration:l.dragging?"0s":".6s"};return f("div",{ref:p,class:T(),onClick:W("cell",g),onTouchstartPassive:a,onTouchend:B,onTouchcancel:B},[f("div",{class:T("wrapper"),style:r},[I("left",w),(e=c.default)==null?void 0:e.call(c),I("right",y)])])}}});const ge=re(ve),F=o=>(K("data-v-a1cb0781"),o=o(),Q(),o),_e={class:"page"},ke={class:"project-list"},Ce={class:"pitem"},be=F(()=>n("img",{src:"",alt:"",class:"item-left"},null,-1)),xe={class:"item-right"},we=F(()=>n("div",{class:"footer-box"},null,-1)),ye={class:"footer"},je={class:"footer-left"},Ee={class:"footer-btn"},Pe={__name:"project",setup(o){const v=z(),c=Z();function u(){v.push({path:"/addProject",query:{type:"0"}})}function g(s){v.push({path:"/addProject",query:{type:"1",id:s.id}})}const i=C([]),d=C(!1),p=C(!1);function w(s){const t=c.list.map(h=>h.id);i.value=s?t:[],p.value=!1}function y(s){const t=s.length;d.value=t===c.list.length,p.value=t>0&&t<c.list.length}function l(s){c.SET_list_del(s)}function _(){if(i.value.length){let s="";i.value.forEach(t=>{s=s+t.name+"、"}),he({title:"提示",confirmButtonColor:"#5075ff",message:"确认删除您选择的项目？"}).then(()=>{i.value.forEach(t=>{c.SET_list_del(t)})}).catch(()=>{})}}return(s,t)=>{const h=Y,k=ee,b=ge,E=te;return S(),N(q,null,[n("div",_e,[n("div",ke,[f(E,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),onChange:y},{default:x(()=>[(S(!0),N(q,null,G(J(c).list,a=>(S(),X(b,{class:"project-item",key:a.id},{right:x(()=>[f(k,{square:"",text:"修改",type:"warning",class:"delete-button",onClick:P=>g(a)},null,8,["onClick"]),f(k,{square:"",text:"删除",type:"danger",class:"delete-button",onClick:P=>l(a.id)},null,8,["onClick"])]),default:x(()=>[n("div",Ce,[f(h,{name:a.id,class:"checkbox"},null,8,["name"]),be,n("div",xe,[n("div",null,"项目名称："+j(a.name),1),n("div",null,"项目费用："+j(a.amount)+" 元",1),n("div",null,"佣金比例："+j(a.bili)+" %",1),n("div",null,"佣金："+j(a.yongjin)+" 元",1)])])]),_:2},1024))),128))]),_:1},8,["modelValue"])])]),we,n("div",ye,[n("div",je,[f(h,{class:"checkall",modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=a=>d.value=a),indeterminate:p.value,onChange:w},{default:x(()=>[H("全选 ")]),_:1},8,["modelValue","indeterminate"]),n("div",{class:"del",onClick:_},"批量删除")]),n("div",Ee,[f(k,{color:"#5075ff",onClick:u,round:"",block:""},{default:x(()=>[H("新增项目")]),_:1})])])],64)}}},Me=U(Pe,[["__scopeId","data-v-a1cb0781"]]);export{Me as default};
import{_ as k,r as g,a as C,o as c,e as l,h as a,F as n,q as v,c as r,w as b,t as m,s as x,f as N}from"./index-BRYTmIyP.js";import{C as T}from"./index-D2xUohRP.js";import{s as d,a as h}from"./function-call-CZcdVXZ-.js";import"./index-C0ureBDn.js";import"./index-4pUri2OV.js";import"./use-expose-N8why80i.js";import"./mount-component-DO70U7a7.js";import"./index-Caave46l.js";import"./constant-Co2M3aoe.js";import"./on-popup-reopen-ebgq6Xfv.js";import"./index-KzW-Uw1Q.js";import"./use-route-DOGmHK4u.js";import"./use-placeholder-js-WKF-8.js";import"./use-height-C0VXp5Jy.js";const V={class:"store"},B={key:0,class:"store-item"},y={class:"item-left"},E={class:"item-left-i"},w={class:"item-left-i"},D={class:"item-left-i"},L={class:"item-left-i"},U={class:"footer"},F={__name:"examineGuide",setup(G){const o=g([{id:0,guideName:"导游一",guideTeam:"靠谱导游团",mobile:"132 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:1,guideName:"导游1",guideTeam:"靠谱导游团",mobile:"152 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!0},{id:2,guideName:"导游2",guideTeam:"靠谱导游团",mobile:"132 ****** 55",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:3,guideName:"导游3",guideTeam:"全国游导游团",mobile:"132 ****** 43",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:4,guideName:"导游4",guideTeam:"全国游导游团",mobile:"162 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:5,guideName:"导游5",guideTeam:"全国游导游团",mobile:"112 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!1}]),u=C({get(){return o.value.every(s=>s.isCheck)},set(s){o.value.forEach(i=>{i.isCheck=s})}});function f(){const s=o.value.filter(e=>e.isCheck);if(!s.length)return d({title:"提示",message:"您还没有选择导游"}),!1;let i=[];s.forEach(e=>{i.push(e.guideName)}),h({title:"提示",message:"这将通过您所选中的导游的申请",confirmButtonText:"通过",cancelButtonText:"取消"}).then(()=>{o.value.forEach(e=>{e.isCheck&&(e.status=1)})}).catch(()=>{})}function p(){const s=o.value.filter(e=>e.isCheck);if(!s.length)return d({title:"提示",message:"您还没有选择导游"}),!1;let i=[];s.forEach(e=>{i.push(e.guideName)}),h({title:"提示",message:"这将拒绝您所选中的导游的申请!",confirmButtonText:"确认",cancelButtonText:"取消"}).then(()=>{o.value.forEach(e=>{e.isCheck&&(e.status=1)})}).catch(()=>{})}return(s,i)=>{const e=T;return c(),l(n,null,[a("div",V,[(c(!0),l(n,null,v(o.value,t=>(c(),l(n,{key:t.id},[t.status===0?(c(),l("div",B,[r(e,{modelValue:t.isCheck,"onUpdate:modelValue":_=>t.isCheck=_,name:t.id,class:"checkbox"},null,8,["modelValue","onUpdate:modelValue","name"]),a("div",y,[a("div",E,"导游名："+m(t.guideName),1),a("div",w,"所属导游团："+m(t.guideTeam),1),a("div",D,"联系方式："+m(t.mobile),1),a("div",L,"申请时间："+m(t.time),1)])])):x("",!0)],64))),128))]),a("div",U,[r(e,{class:"checkall",modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=t=>u.value=t)},{default:b(()=>[N("全选 ")]),_:1},8,["modelValue"]),a("button",{type:"button",class:"btn no",onClick:p},"拒绝"),a("button",{type:"button",class:"btn",onClick:f},"通过")])],64)}}},W=k(F,[["__scopeId","data-v-73289a92"]]);export{W as default};

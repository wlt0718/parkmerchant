import{_ as g,r as p,a as C,o as c,e as l,h as a,F as u,q as v,c as d,w as b,t as n,s as x,f as N}from"./index-DG-SZLNW.js";import{C as T}from"./index-jCkoKwRy.js";import{s as r,a as h}from"./function-call-DmXZH6KM.js";import"./index-CtaXffLF.js";import"./index-Canf-D0f.js";import"./index-Dw8Uwc1D.js";import"./on-popup-reopen-BnKz70ka.js";import"./mount-component-GUDVxjJh.js";import"./use-route-CswtbsoS.js";import"./use-placeholder-DEW25Phx.js";const V={class:"store"},B={key:0,class:"store-item"},y={class:"item-left"},E={class:"item-left-i"},w={class:"item-left-i"},D={class:"item-left-i"},L={class:"item-left-i"},U={class:"footer"},F={__name:"examineGuide",setup(G){const o=p([{id:0,guideName:"导游一",guideTeam:"靠谱导游团",mobile:"132 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:1,guideName:"导游1",guideTeam:"靠谱导游团",mobile:"152 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!0},{id:2,guideName:"导游2",guideTeam:"靠谱导游团",mobile:"132 ****** 55",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:3,guideName:"导游3",guideTeam:"全国游导游团",mobile:"132 ****** 43",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:4,guideName:"导游4",guideTeam:"全国游导游团",mobile:"162 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!1},{id:5,guideName:"导游5",guideTeam:"全国游导游团",mobile:"112 ****** 02",time:"2024年04月26日 12:22:30",status:0,isCheck:!1}]),m=C({get(){return o.value.every(s=>s.isCheck)},set(s){o.value.forEach(i=>{i.isCheck=s})}});function f(){const s=o.value.filter(e=>e.isCheck);if(!s.length)return r({title:"提示",message:"您还没有选择导游"}),!1;let i=[];s.forEach(e=>{i.push(e.guideName)}),h({title:"提示",message:"这将通过您所选中的导游的申请",confirmButtonText:"通过",cancelButtonText:"取消"}).then(()=>{o.value.forEach(e=>{e.isCheck&&(e.status=1)})}).catch(()=>{})}function _(){const s=o.value.filter(e=>e.isCheck);if(!s.length)return r({title:"提示",message:"您还没有选择导游"}),!1;let i=[];s.forEach(e=>{i.push(e.guideName)}),h({title:"提示",message:"这将拒绝您所选中的导游的申请!",confirmButtonText:"确认",cancelButtonText:"取消"}).then(()=>{o.value.forEach(e=>{e.isCheck&&(e.status=1)})}).catch(()=>{})}return(s,i)=>{const e=T;return c(),l(u,null,[a("div",V,[(c(!0),l(u,null,v(o.value,t=>(c(),l(u,{key:t.id},[t.status===0?(c(),l("div",B,[d(e,{modelValue:t.isCheck,"onUpdate:modelValue":k=>t.isCheck=k,name:t.id,class:"checkbox"},null,8,["modelValue","onUpdate:modelValue","name"]),a("div",y,[a("div",E,"导游名："+n(t.guideName),1),a("div",w,"所属导游团："+n(t.guideTeam),1),a("div",D,"联系方式："+n(t.mobile),1),a("div",L,"申请时间："+n(t.time),1)])])):x("",!0)],64))),128))]),a("div",U,[d(e,{class:"checkall",modelValue:m.value,"onUpdate:modelValue":i[0]||(i[0]=t=>m.value=t)},{default:b(()=>[N("全选 ")]),_:1},8,["modelValue"]),a("button",{type:"button",class:"btn no",onClick:_},"拒绝"),a("button",{type:"button",class:"btn",onClick:f},"通过")])],64)}}},O=g(F,[["__scopeId","data-v-73289a92"]]);export{O as default};

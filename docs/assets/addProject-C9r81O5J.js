import{_ as v,y,u as g,k as j,a as x,o as B,e as k,h as o,n as c,v as m,c as C,l as S,F as V,p as N,j as P}from"./index-DTUZ5YMJ.js";import{u as F}from"./project-Br_LyiHz.js";import{a as p}from"./function-call-D_1-uc-I.js";import{B as I}from"./mount-component-D3ecW5_w.js";import"./index-BXZPo5uS.js";import"./index-CD_Y-oLZ.js";import"./on-popup-reopen-F4esbpNj.js";import"./use-placeholder-gzt59in6.js";import"./use-route-dDhsCm_m.js";const l=i=>(N("data-v-063d3fbb"),i=i(),P(),i),U={class:"page"},w={class:"from"},E={class:"from-item"},M=l(()=>o("label",{for:"name",class:"from-label"},"项目名称",-1)),T={class:"from-item"},D=l(()=>o("label",{for:"amount",class:"from-label"},"项目费用",-1)),R=l(()=>o("div",{style:{"flex-shrink":"0"}},"元 / 位",-1)),q={class:"from-item"},z=l(()=>o("label",{for:"bili",class:"from-label"},"佣金比例",-1)),A=l(()=>o("div",{class:"sms"}," % ",-1)),G={class:"from-item yj"},H=l(()=>o("label",{for:"yongjin",class:"from-label"},"佣金（元）",-1)),J=l(()=>o("div",{class:"from-item"},[o("label",{for:"smsCode",class:"from-label"},"项目图片"),o("input",{id:"smsCode",class:"from-input",type:"tel",max:"6",placeholder:"请点击上传项目图片",readonly:""})],-1)),K=l(()=>o("div",{class:"footer-box"},null,-1)),L={class:"footer"},O={class:"footer-btn"},Q={__name:"addProject",setup(i){const f=y(),u=g(),a=F(),t=j({id:"",name:"",amount:null,bili:null}),{type:r="0",id:_=""}=f.query;if(document.title=r==="0"?"新增项目":"修改项目",r!=="0"){const e=a.list.find(s=>s.id===Number(_));t.id=e.id,t.name=e.name,t.amount=e.amount,t.bili=e.bili}const d=x(()=>t.amount&&t.bili?(Number(t.amount)*Number(t.bili)/100).toFixed(2):"");function b(){if(r==="0"){t.id=a.list[a.list.length-1].id+1;const e=t;e.yongjin=d.value,a.SET_list_add(e),p({title:"提示",confirmButtonColor:"#5075ff",message:"新增成功，是否返回到项目列表？"}).then(()=>{u.go(-1)}).catch(()=>{})}else{const e=t;e.yongjin=d.value,a.SET_list_change(e),p({title:"提示",confirmButtonColor:"#5075ff",message:"修改成功，是否返回到项目列表？"}).then(()=>{u.go(-1)}).catch(()=>{})}}return(e,s)=>{const h=I;return B(),k(V,null,[o("div",U,[o("div",w,[o("div",E,[M,c(o("input",{id:"name",class:"from-input",type:"tel",max:"11",placeholder:"请输入项目名称","onUpdate:modelValue":s[0]||(s[0]=n=>t.name=n)},null,512),[[m,t.name]])]),o("div",T,[D,c(o("input",{id:"amount",class:"from-input",type:"number",placeholder:"请输入项目费用","onUpdate:modelValue":s[1]||(s[1]=n=>t.amount=n)},null,512),[[m,t.amount]]),R]),o("div",q,[z,c(o("input",{id:"bili",class:"from-input",type:"number",placeholder:"请输入佣金比例","onUpdate:modelValue":s[2]||(s[2]=n=>t.bili=n)},null,512),[[m,t.bili]]),A]),o("div",G,[H,c(o("input",{id:"yongjin",class:"from-input",type:"number",placeholder:"自动生成","onUpdate:modelValue":s[3]||(s[3]=n=>d.value=n),readonly:"",style:{color:"#999999"}},null,512),[[m,d.value]])]),J])]),K,o("div",L,[o("div",O,[C(h,{color:"#5075ff",onClick:b,round:"",block:"",text:S(r)==="0"?"新增项目":"修改项目"},null,8,["text"])])])],64)}}},lo=v(Q,[["__scopeId","data-v-063d3fbb"]]);export{lo as default};
import{r as _,u as D}from"./use-route-dDhsCm_m.js";import{c as b,e as y,P as A,n as m,r as u,o as E,w as v,I as L,p as N}from"./index-CD_Y-oLZ.js";import{c as i,d as B,a as U,M as $,k as q}from"./index-DTUZ5YMJ.js";import{d as O}from"./on-popup-reopen-F4esbpNj.js";import{a as M}from"./index-BXZPo5uS.js";const[V,d]=b("loading"),j=Array(12).fill(null).map((e,n)=>i("i",{class:d("line",String(n+1))},null)),F=i("svg",{class:d("circular"),viewBox:"25 25 50 50"},[i("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),G={size:m,type:u("circular"),color:String,vertical:Boolean,textSize:m,textColor:String};var H=B({name:V,props:G,setup(e,{slots:n}){const t=U(()=>y({color:e.color},A(e.size))),r=()=>{const a=e.type==="spinner"?j:F;return i("span",{class:d("spinner",e.type),style:t.value},[n.icon?n.icon():a])},l=()=>{var a;if(n.default)return i("span",{class:d("text"),style:{fontSize:E(e.textSize),color:(a=e.textColor)!=null?a:e.color}},[n.default()])};return()=>{const{type:a,vertical:g}=e;return i("div",{class:d([a,{vertical:g}]),"aria-live":"polite","aria-busy":!0},[r(),l()])}}});const J=v(H),[K,s]=b("button"),Q=y({},_,{tag:u("button"),text:String,icon:String,type:u("default"),size:u("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:u("button"),loadingSize:m,loadingText:String,loadingType:String,iconPosition:u("left")});var W=B({name:K,props:Q,emits:["click"],setup(e,{emit:n,slots:t}){const r=D(),l=()=>t.loading?t.loading():i(J,{size:e.loadingSize,type:e.loadingType,class:s("loading")},null),a=()=>{if(e.loading)return l();if(t.icon)return i("div",{class:s("icon")},[t.icon()]);if(e.icon)return i(L,{name:e.icon,class:s("icon"),classPrefix:e.iconPrefix},null)},g=()=>{let o;if(e.loading?o=e.loadingText:o=t.default?t.default():e.text,o)return i("span",{class:s("text")},[o])},P=()=>{const{color:o,plain:f}=e;if(o){const c={color:f?o:"white"};return f||(c.background=o),o.includes("gradient")?c.border=0:c.borderColor=o,c}},z=o=>{e.loading?N(o):e.disabled||(n("click",o),r())};return()=>{const{tag:o,type:f,size:c,block:C,round:h,plain:k,square:I,loading:T,disabled:S,hairline:p,nativeType:w,iconPosition:x}=e,R=[s([f,c,{plain:k,block:C,round:h,square:I,loading:T,disabled:S,hairline:p}]),{[O]:p}];return i(o,{type:w,class:R,style:P(),disabled:S,onClick:z},{default:()=>[i("div",{class:s("content")},[x==="left"&&a(),g(),x==="right"&&a()])]})}}});const te=v(W);function oe(){const e=q({show:!1}),n=l=>{e.show=l},t=l=>{y(e,l,{transitionAppear:!0}),n(!0)},r=()=>n(!1);return M({open:t,close:r,toggle:n}),{open:t,close:r,state:e,toggle:n}}function ie(e){const n=$(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}export{te as B,J as L,ie as m,oe as u};
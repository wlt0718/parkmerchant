import{d as I,r as F,c as r,g as O,a as V,m as $,_ as E,b as N,o as R,e as M,w as _,F as j,f as P}from"./index-BQrktSF6.js";import{c as A,t as B,n as p,m as z,u as D,g as K,B as Y,w as k,e as Z,a as q,b as G,i as H,I as J}from"./index-BRxZgLsP.js";import{u as L}from"./use-placeholder-CYJacQvx.js";import{c as Q}from"./on-popup-reopen-CRjnU_ou.js";import{r as U,u as W}from"./use-route-COyv4N3Q.js";const[T,C]=A("tabbar"),X={route:Boolean,fixed:B,border:B,zIndex:p,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:z(0),safeAreaInsetBottom:{type:Boolean,default:null}},S=Symbol(T);var ee=I({name:T,props:X,emits:["change","update:modelValue"],setup(e,{emit:d,slots:n}){const s=F(),{linkChildren:l}=D(S),i=L(s,C),b=()=>{var t;return(t=e.safeAreaInsetBottom)!=null?t:e.fixed},o=()=>{var t;const{fixed:a,zIndex:c,border:m}=e;return r("div",{ref:s,role:"tablist",style:K(c),class:[C({fixed:a}),{[Y]:m,"van-safe-area-bottom":b()}]},[(t=n.default)==null?void 0:t.call(n)])};return l({props:e,setActive:(t,a)=>{Q(e.beforeChange,{args:[t],done(){d("update:modelValue",t),d("change",t),a()}})}}),()=>e.fixed&&e.placeholder?i(o):o()}});const te=k(ee),[ae,h]=A("tabbar-item"),ne=Z({},U,{dot:Boolean,icon:String,name:p,badge:p,badgeProps:Object,iconPrefix:String});var oe=I({name:ae,props:ne,emits:["click"],setup(e,{emit:d,slots:n}){const s=W(),l=O().proxy,{parent:i,index:b}=q(S);if(!i)return;const o=V(()=>{var a;const{route:c,modelValue:m}=i.props;if(c&&"$route"in l){const{$route:v}=l,{to:f}=e,u=H(f)?f:{path:f};return!!v.matched.find(g=>{const w="path"in u&&u.path===g.path,y="name"in u&&u.name===g.name;return w||y})}return((a=e.name)!=null?a:b.value)===m}),x=a=>{var c;o.value||i.setActive((c=e.name)!=null?c:b.value,s),d("click",a)},t=()=>{if(n.icon)return n.icon({active:o.value});if(e.icon)return r(J,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var a;const{dot:c,badge:m}=e,{activeColor:v,inactiveColor:f}=i.props,u=o.value?v:f;return r("div",{role:"tab",class:h({active:o.value}),style:{color:u},tabindex:0,"aria-selected":o.value,onClick:x},[r(G,$({dot:c,class:h("icon"),content:m},e.badgeProps),{default:t}),r("div",{class:h("text")},[(a=n.default)==null?void 0:a.call(n,{active:o.value})])])}}});const re=k(oe),ce={};function se(e,d){const n=N("router-view"),s=re,l=te;return R(),M(j,null,[r(n),r(l,{route:"",fixed:"","active-color":"#5075FF","inactive-color":"#AEBDF6","safe-area-inset-bottom":!0},{default:_(()=>[r(s,{icon:"home-o",replace:"",to:"/home"},{default:_(()=>[P("首页")]),_:1}),r(s,{icon:"search",replace:"",to:"/mine"},{default:_(()=>[P("我的")]),_:1})]),_:1})],64)}const fe=E(ce,[["render",se],["__scopeId","data-v-c7556032"]]);export{fe as default};
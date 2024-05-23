import{u as P,n as B,e as S,l as z,t as V,I as O,f as C,c as G,p as I,w}from"./index-Dx5oZIrL.js";import{a as D,e as E}from"./index.esm-Pm4_1N2A.js";import{u as R}from"./use-expose-BD6BJhaI.js";import{d as _,r as $,a as h,c as m,A as F,m as K}from"./index-Fxc2rSLZ.js";const y={name:P,disabled:Boolean,iconSize:B,modelValue:P,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var N=_({props:S({},y,{bem:z(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:V,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:r,slots:s}){const o=$(),c=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=h(()=>{if(e.parent&&e.bindGroup){const n=c("disabled")||e.disabled;if(e.role==="checkbox"){const u=c("modelValue").length,i=c("max"),b=i&&u>=+i;return n||b&&!e.checked}return n}return e.disabled}),f=h(()=>c("direction")),l=h(()=>{const n=e.checkedColor||c("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),d=h(()=>e.shape||c("shape")||"round"),k=n=>{const{target:u}=n,i=o.value,b=i===u||(i==null?void 0:i.contains(u));!a.value&&(b||!e.labelDisabled)&&r("toggle"),r("click",n)},v=()=>{var n,u;const{bem:i,checked:b,indeterminate:x}=e,g=e.iconSize||c("iconSize");return m("div",{ref:o,class:i("icon",[d.value,{disabled:a.value,checked:b,indeterminate:x}]),style:d.value!=="dot"?{fontSize:C(g)}:{width:C(g),height:C(g),borderColor:(n=l.value)==null?void 0:n.borderColor}},[s.icon?s.icon({checked:b,disabled:a.value}):d.value!=="dot"?m(O,{name:x?"minus":"success",style:l.value},null):m("div",{class:i("icon--dot__icon"),style:{backgroundColor:(u=l.value)==null?void 0:u.backgroundColor}},null)])},t=()=>{const{checked:n}=e;if(s.default)return m("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[s.default({checked:n,disabled:a.value})])};return()=>{const n=e.labelPosition==="left"?[t(),v()]:[v(),t()];return m("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},f.value]),tabindex:a.value?void 0:0,"aria-checked":e.checked,onClick:k},[n])}}});const[U,M]=G("checkbox-group"),j=Symbol(U),[q,A]=G("checkbox"),H=S({},y,{shape:String,bindGroup:V,indeterminate:{type:Boolean,default:null}});var L=_({name:q,props:H,emits:["change","update:modelValue"],setup(e,{emit:r,slots:s}){const{parent:o}=D(j),c=l=>{const{name:d}=e,{max:k,modelValue:v}=o.props,t=v.slice();if(l)!(k&&t.length>=+k)&&!t.includes(d)&&(t.push(d),e.bindGroup&&o.updateValue(t));else{const n=t.indexOf(d);n!==-1&&(t.splice(n,1),e.bindGroup&&o.updateValue(t))}},a=h(()=>o&&e.bindGroup?o.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),f=(l=!a.value)=>{o&&e.bindGroup?c(l):r("update:modelValue",l),e.indeterminate!==null&&r("change",l)};return F(()=>e.modelValue,l=>{e.indeterminate===null&&r("change",l)}),R({toggle:f,props:e,checked:a}),E(()=>e.modelValue),()=>m(N,K({bem:A,role:"checkbox",parent:o,checked:a.value,onToggle:f},e),I(s,["default","icon"]))}});const Q=w(L);export{Q as C};

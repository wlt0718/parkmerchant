import{c as V,f as q,n as Y,i as D,o as $,a as oe,d as ae,p as le,m as _,t as ce,l as fe,u as ve,s as he}from"./index-X5Mnn1qc.js";import{z as ge,e as S,d as J,r as w,a as p,$ as be,c as m,H as L,a0 as j,I as Q,m as Oe,N as W}from"./index-C1ztbtdN.js";import{u as Te,a as ie}from"./index-Dor0KNKy.js";import{L as pe}from"./index-1d-ZCeBd.js";import{H as X,e as ke}from"./on-popup-reopen-Br20eIOu.js";const[ye,O,Z]=V("picker"),se=e=>e.find(a=>!a.disabled)||e[0];function Ce(e,a){const o=e[0];if(o){if(Array.isArray(o))return"multiple";if(a.children in o)return"cascade"}return"default"}function B(e,a){a=q(a,0,e.length);for(let o=a;o<e.length;o++)if(!e[o].disabled)return o;for(let o=a-1;o>=0;o--)if(!e[o].disabled)return o;return 0}const ee=(e,a,o)=>a!==void 0&&!!e.find(s=>s[o.value]===a);function G(e,a,o){const s=e.findIndex(f=>f[o.value]===a),c=B(e,s);return e[c]}function xe(e,a,o){const s=[];let c={[a.children]:e},f=0;for(;c&&c[a.children];){const v=c[a.children],h=o.value[f];if(c=ge(h)?G(v,h,a):void 0,!c&&v.length){const u=se(v)[a.value];c=G(v,u,a)}f++,s.push(v)}return s}function Ee(e){const{transform:a}=window.getComputedStyle(e),o=a.slice(7,a.length-1).split(", ")[5];return Number(o)}function we(e){return S({text:"text",value:"value",children:"children"},e)}const te=200,ne=300,Se=15,[ue,z]=V("picker-column"),re=Symbol(ue);var Ie=J({name:ue,props:{value:Y,fields:D(Object),options:$(),readonly:Boolean,allowHtml:Boolean,optionHeight:D(Number),swipeDuration:D(Y),visibleOptionNum:D(Y)},emits:["change","clickOption","scrollInto"],setup(e,{emit:a,slots:o}){let s,c,f,v,h;const u=w(),g=w(),r=w(0),d=w(0),y=Te(),C=()=>e.options.length,M=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,k=i=>{let t=B(e.options,i);const n=-t*e.optionHeight,l=()=>{t>C()-1&&(t=B(e.options,i));const T=e.options[t][e.fields.value];T!==e.value&&a("change",T)};s&&n!==r.value?h=l:l(),r.value=n},b=()=>e.readonly||!e.options.length,A=i=>{s||b()||(h=null,d.value=te,k(i),a("clickOption",e.options[i]))},x=i=>q(Math.round(-i/e.optionHeight),0,C()-1),N=p(()=>x(r.value)),F=(i,t)=>{const n=Math.abs(i/t);i=r.value+n/.003*(i<0?-1:1);const l=x(i);d.value=+e.swipeDuration,k(l)},I=()=>{s=!1,d.value=0,h&&(h(),h=null)},K=i=>{if(!b()){if(y.start(i),s){const t=Ee(g.value);r.value=Math.min(0,t-M())}d.value=0,c=r.value,f=Date.now(),v=c,h=null}},U=i=>{if(b())return;y.move(i),y.isVertical()&&(s=!0,le(i,!0));const t=q(c+y.deltaY.value,-(C()*e.optionHeight),e.optionHeight),n=x(t);n!==N.value&&a("scrollInto",e.options[n]),r.value=t;const l=Date.now();l-f>ne&&(f=l,v=t)},P=()=>{if(b())return;const i=r.value-v,t=Date.now()-f;if(t<ne&&Math.abs(i)>Se){F(i,t);return}const l=x(r.value);d.value=te,k(l),setTimeout(()=>{s=!1},0)},E=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((t,n)=>{const l=t[e.fields.text],{disabled:T}=t,H=t[e.fields.value],me={role:"button",style:i,tabindex:T?-1:0,class:[z("item",{disabled:T,selected:H===e.value}),t.className],onClick:()=>A(n)},de={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:l};return m("li",me,[o.option?o.option(t,n):m("div",de,null)])})};return oe(re),ie({stopMomentum:I}),be(()=>{const i=s?Math.floor(-r.value/e.optionHeight):e.options.findIndex(l=>l[e.fields.value]===e.value),t=B(e.options,i),n=-t*e.optionHeight;s&&t<i&&I(),r.value=n}),ae("touchmove",U,{target:u}),()=>m("div",{ref:u,class:z(),onTouchstartPassive:K,onTouchend:P,onTouchcancel:P},[m("ul",{ref:g,style:{transform:`translate3d(0, ${r.value+M()}px, 0)`,transitionDuration:`${d.value}ms`,transitionProperty:d.value?"all":"none"},class:z("wrapper"),onTransitionend:I},[E()])])}});const[Pe]=V("picker-toolbar"),R={title:String,cancelButtonText:String,confirmButtonText:String},He=["cancel","confirm","title","toolbar"],Me=Object.keys(R);var Ne=J({name:Pe,props:R,emits:["confirm","cancel"],setup(e,{emit:a,slots:o}){const s=()=>{if(o.title)return o.title();if(e.title)return m("div",{class:[O("title"),"van-ellipsis"]},[e.title])},c=()=>a("cancel"),f=()=>a("confirm"),v=()=>{var u;const g=(u=e.cancelButtonText)!=null?u:Z("cancel");if(!(!o.cancel&&!g))return m("button",{type:"button",class:[O("cancel"),X],onClick:c},[o.cancel?o.cancel():g])},h=()=>{var u;const g=(u=e.confirmButtonText)!=null?u:Z("confirm");if(!(!o.confirm&&!g))return m("button",{type:"button",class:[O("confirm"),X],onClick:f},[o.confirm?o.confirm():g])};return()=>m("div",{class:O("toolbar")},[o.toolbar?o.toolbar():[v(),s(),h()]])}});const[De,Ue]=V("picker-group"),_e=Symbol(De);S({tabs:$(),activeTab:_(0),nextStepText:String,showToolbar:ce},R);const Be=S({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:_(44),showToolbar:ce,swipeDuration:_(1e3),visibleOptionNum:_(6)},R),$e=S({},Be,{columns:$(),modelValue:$(),toolbarPosition:fe("top"),columnsFieldNames:Object});var Ye=J({name:ye,props:$e,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:a,slots:o}){const s=w(),c=w(e.modelValue.slice(0)),{parent:f}=oe(_e),{children:v,linkChildren:h}=ve(re);h();const u=p(()=>we(e.columnsFieldNames)),g=p(()=>he(e.optionHeight)),r=p(()=>Ce(e.columns,u.value)),d=p(()=>{const{columns:t}=e;switch(r.value){case"multiple":return t;case"cascade":return xe(t,u.value,c);default:return[t]}}),y=p(()=>d.value.some(t=>t.length)),C=p(()=>d.value.map((t,n)=>G(t,c.value[n],u.value))),M=p(()=>d.value.map((t,n)=>t.findIndex(l=>l[u.value.value]===c.value[n]))),k=(t,n)=>{if(c.value[t]!==n){const l=c.value.slice(0);l[t]=n,c.value=l}},b=()=>({selectedValues:c.value.slice(0),selectedOptions:C.value,selectedIndexes:M.value}),A=(t,n)=>{k(n,t),r.value==="cascade"&&c.value.forEach((l,T)=>{const H=d.value[T];ee(H,l,u.value)||k(T,H.length?H[0][u.value.value]:void 0)}),W(()=>{a("change",S({columnIndex:n},b()))})},x=(t,n)=>{const l={columnIndex:n,currentOption:t};a("clickOption",S(b(),l)),a("scrollInto",l)},N=()=>{v.forEach(n=>n.stopMomentum());const t=b();return W(()=>{a("confirm",t)}),t},F=()=>a("cancel",b()),I=()=>d.value.map((t,n)=>m(Ie,{value:c.value[n],fields:u.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:l=>A(l,n),onClickOption:l=>x(l,n),onScrollInto:l=>{a("scrollInto",{currentOption:l,columnIndex:n})}},{option:o.option})),K=t=>{if(y.value){const n={height:`${g.value}px`},l={backgroundSize:`100% ${(t-g.value)/2}px`};return[m("div",{class:O("mask"),style:l},null),m("div",{class:[ke,O("frame")],style:n},null)]}},U=()=>{const t=g.value*+e.visibleOptionNum,n={height:`${t}px`};return m("div",{ref:s,class:O("columns"),style:n},[I(),K(t)])},P=()=>{if(e.showToolbar&&!f)return m(Ne,Oe(Q(e,Me),{onConfirm:N,onCancel:F}),Q(o,He))};L(d,t=>{t.forEach((n,l)=>{n.length&&!ee(n,c.value[l],u.value)&&k(l,se(n)[u.value.value])})},{immediate:!0});let E;return L(()=>e.modelValue,t=>{!j(t,c.value)&&!j(t,E)&&(c.value=t.slice(0),E=t.slice(0))},{deep:!0}),L(c,t=>{j(t,e.modelValue)||(E=t.slice(0),a("update:modelValue",E))},{immediate:!0}),ae("touchmove",le,{target:s}),ie({confirm:N,getSelectedOptions:()=>C.value}),()=>{var t,n;return m("div",{class:O()},[e.toolbarPosition==="top"?P():null,e.loading?m(pe,{class:O("loading")},null):null,(t=o["columns-top"])==null?void 0:t.call(o),U(),(n=o["columns-bottom"])==null?void 0:n.call(o),e.toolbarPosition==="bottom"?P():null])}}});export{Be as p,Ye as s};

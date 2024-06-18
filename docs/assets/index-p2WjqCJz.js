import{g as B,e as g,r as i,L as R,M as ee,H as z,d as N,c as m,a1 as Y,z as H,s as K,G as M,a as te,N as oe,S as ne,a2 as ae,a3 as se,V as le,F as ce,m as E}from"./index-CfVD-mOI.js";import{n as b,t as C,h as F,q as re,H as ie,p as X,c as $,d as j,g as ue,w as G,l as T,I as de}from"./index-DuD4eqLv.js";import{T as _,P as ve,c as fe,H as ye}from"./on-popup-reopen-o1SqY0qa.js";function me(e){const t=B();t&&g(t.proxy,e)}let he=2e3;const Ie=()=>++he,V={show:Boolean,zIndex:b,overlay:C,duration:b,teleport:[String,Object],lockScroll:C,lazyRender:C,beforeClose:Function,overlayStyle:Object,overlayClass:F,transitionAppear:Boolean,closeOnClickOverlay:C},De=Object.keys(V);function Oe(e,t){return e>t?"horizontal":t>e?"vertical":""}function Ce(){const e=i(0),t=i(0),o=i(0),r=i(0),n=i(0),l=i(0),a=i(""),c=i(!0),P=()=>a.value==="vertical",O=()=>a.value==="horizontal",u=()=>{o.value=0,r.value=0,n.value=0,l.value=0,a.value="",c.value=!0};return{move:d=>{const v=d.touches[0];o.value=(v.clientX<0?0:v.clientX)-e.value,r.value=v.clientY-t.value,n.value=Math.abs(o.value),l.value=Math.abs(r.value);const I=10;(!a.value||n.value<I&&l.value<I)&&(a.value=Oe(n.value,l.value)),c.value&&(n.value>_||l.value>_)&&(c.value=!1)},start:d=>{u(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:o,deltaY:r,offsetX:n,offsetY:l,direction:a,isVertical:P,isHorizontal:O,isTap:c}}let w=0;const D="van-overflow-hidden";function Pe(e,t){const o=Ce(),r="01",n="10",l=u=>{o.move(u);const h=o.deltaY.value>0?n:r,S=ie(u.target,e.value),{scrollHeight:d,offsetHeight:v,scrollTop:I}=S;let f="11";I===0?f=v>=d?"00":"01":I+v>=d&&(f="10"),f!=="11"&&o.isVertical()&&!(parseInt(f,2)&parseInt(h,2))&&X(u,!0)},a=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",l,{passive:!1}),w||document.body.classList.add(D),w++},c=()=>{w&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",l),w--,w||document.body.classList.remove(D))},P=()=>t()&&a(),O=()=>t()&&c();re(P),R(O),ee(O),z(t,u=>{u?a():c()})}function U(e){const t=i(!1);return z(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const p=()=>{var e;const{scopeId:t}=((e=B())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[we,Se]=$("overlay"),ke={show:Boolean,zIndex:b,duration:b,className:F,lockScroll:C,lazyRender:C,customStyle:Object};var be=N({name:we,props:ke,setup(e,{slots:t}){const o=i(),r=U(()=>e.show||!e.lazyRender),n=a=>{e.lockScroll&&X(a,!0)},l=r(()=>{var a;const c=g(ue(e.zIndex),e.customStyle);return H(e.duration)&&(c.animationDuration=`${e.duration}s`),K(m("div",{ref:o,style:c,class:[Se(),e.className]},[(a=t.default)==null?void 0:a.call(t)]),[[M,e.show]])});return j("touchmove",n,{target:o}),()=>m(Y,{name:"van-fade",appear:!0},{default:l})}});const xe=G(be),Te=g({},V,{round:Boolean,position:T("center"),closeIcon:T("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:T("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[ge,L]=$("popup");var ze=N({name:ge,inheritAttrs:!1,props:Te,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:r}){let n,l;const a=i(),c=i(),P=U(()=>e.show||!e.lazyRender),O=te(()=>{const s={zIndex:a.value};if(H(e.duration)){const y=e.position==="center"?"animationDuration":"transitionDuration";s[y]=`${e.duration}s`}return s}),u=()=>{n||(n=!0,a.value=e.zIndex!==void 0?+e.zIndex:Ie(),t("open"))},h=()=>{n&&fe(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},S=s=>{t("clickOverlay",s),e.closeOnClickOverlay&&h()},d=()=>{if(e.overlay)return m(xe,E({show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},p(),{onClick:S}),{default:r["overlay-content"]})},v=s=>{t("clickCloseIcon",s),h()},I=()=>{if(e.closeable)return m(de,{role:"button",tabindex:0,name:e.closeIcon,class:[L("close-icon",e.closeIconPosition),ye],classPrefix:e.iconPrefix,onClick:v},null)};let f;const Z=()=>{f&&clearTimeout(f),f=setTimeout(()=>{t("opened")})},q=()=>t("closed"),W=s=>t("keydown",s),J=P(()=>{var s;const{round:y,position:k,safeAreaInsetTop:x,safeAreaInsetBottom:Q}=e;return K(m("div",E({ref:c,style:O.value,role:"dialog",tabindex:0,class:[L({round:y,[k]:k}),{"van-safe-area-top":x,"van-safe-area-bottom":Q}],onKeydown:W},o,p()),[(s=r.default)==null?void 0:s.call(r),I()]),[[M,e.show]])}),A=()=>{const{position:s,transition:y,transitionAppear:k}=e,x=s==="center"?"van-fade":`van-popup-slide-${s}`;return m(Y,{name:y||x,appear:k,onAfterEnter:Z,onAfterLeave:q},{default:J})};return z(()=>e.show,s=>{s&&!n&&(u(),o.tabindex===0&&oe(()=>{var y;(y=c.value)==null||y.focus()})),!s&&n&&(n=!1,t("close"))}),me({popupRef:c}),Pe(c,()=>e.show&&e.lockScroll),j("popstate",()=>{e.closeOnPopstate&&(h(),l=!1)}),ne(()=>{e.show&&u()}),ae(()=>{l&&(t("update:show",!0),l=!1)}),R(()=>{e.show&&e.teleport&&(h(),l=!0)}),se(ve,()=>e.show),()=>e.teleport?m(le,{to:e.teleport},{default:()=>[d(),A()]}):m(ce,null,[d(),A()])}});const pe=G(ze);export{xe as O,pe as P,me as a,De as b,V as p,Ce as u};
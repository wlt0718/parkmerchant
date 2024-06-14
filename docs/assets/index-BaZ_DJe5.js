import{g as L,r as i,E as R,G as ee,D as g,d as N,c as m,N as K,n as Y,C as F,a as te,H as oe,K as ne,O as ae,P as se,T as le,F as ce,m as A}from"./index-CC1Zzz6T.js";import{e as z,n as S,t as C,k as H,y as re,Q as ie,p as M,c as X,f as $,g as ue,b as j,w as G,r as x,I as de}from"./index-BkBpIOlI.js";import{T as D,P as ve,c as fe,H as ye}from"./on-popup-reopen-DMvNuXXj.js";function me(e){const t=L();t&&z(t.proxy,e)}let he=2e3;const Ie=()=>++he,U={show:Boolean,zIndex:S,overlay:C,duration:S,teleport:[String,Object],lockScroll:C,lazyRender:C,beforeClose:Function,overlayStyle:Object,overlayClass:H,transitionAppear:Boolean,closeOnClickOverlay:C},_e=Object.keys(U);function Oe(e,t){return e>t?"horizontal":t>e?"vertical":""}function Ce(){const e=i(0),t=i(0),o=i(0),r=i(0),n=i(0),l=i(0),a=i(""),c=i(!0),P=()=>a.value==="vertical",O=()=>a.value==="horizontal",u=()=>{o.value=0,r.value=0,n.value=0,l.value=0,a.value="",c.value=!0};return{move:d=>{const v=d.touches[0];o.value=(v.clientX<0?0:v.clientX)-e.value,r.value=v.clientY-t.value,n.value=Math.abs(o.value),l.value=Math.abs(r.value);const I=10;(!a.value||n.value<I&&l.value<I)&&(a.value=Oe(n.value,l.value)),c.value&&(n.value>D||l.value>D)&&(c.value=!1)},start:d=>{u(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:o,deltaY:r,offsetX:n,offsetY:l,direction:a,isVertical:P,isHorizontal:O,isTap:c}}let k=0;const _="van-overflow-hidden";function Pe(e,t){const o=Ce(),r="01",n="10",l=u=>{o.move(u);const h=o.deltaY.value>0?n:r,w=ie(u.target,e.value),{scrollHeight:d,offsetHeight:v,scrollTop:I}=w;let f="11";I===0?f=v>=d?"00":"01":I+v>=d&&(f="10"),f!=="11"&&o.isVertical()&&!(parseInt(f,2)&parseInt(h,2))&&M(u,!0)},a=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",l,{passive:!1}),k||document.body.classList.add(_),k++},c=()=>{k&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",l),k--,k||document.body.classList.remove(_))},P=()=>t()&&a(),O=()=>t()&&c();re(P),R(O),ee(O),g(t,u=>{u?a():c()})}function V(e){const t=i(!1);return g(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const p=()=>{var e;const{scopeId:t}=((e=L())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[ke,we]=X("overlay"),be={show:Boolean,zIndex:S,duration:S,className:H,lockScroll:C,lazyRender:C,customStyle:Object};var Se=N({name:ke,props:be,setup(e,{slots:t}){const o=i(),r=V(()=>e.show||!e.lazyRender),n=a=>{e.lockScroll&&M(a,!0)},l=r(()=>{var a;const c=z(ue(e.zIndex),e.customStyle);return j(e.duration)&&(c.animationDuration=`${e.duration}s`),Y(m("div",{ref:o,style:c,class:[we(),e.className]},[(a=t.default)==null?void 0:a.call(t)]),[[F,e.show]])});return $("touchmove",n,{target:o}),()=>m(K,{name:"van-fade",appear:!0},{default:l})}});const Te=G(Se),xe=z({},U,{round:Boolean,position:x("center"),closeIcon:x("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:x("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[ge,B]=X("popup");var ze=N({name:ge,inheritAttrs:!1,props:xe,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:r}){let n,l;const a=i(),c=i(),P=V(()=>e.show||!e.lazyRender),O=te(()=>{const s={zIndex:a.value};if(j(e.duration)){const y=e.position==="center"?"animationDuration":"transitionDuration";s[y]=`${e.duration}s`}return s}),u=()=>{n||(n=!0,a.value=e.zIndex!==void 0?+e.zIndex:Ie(),t("open"))},h=()=>{n&&fe(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},w=s=>{t("clickOverlay",s),e.closeOnClickOverlay&&h()},d=()=>{if(e.overlay)return m(Te,A({show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},p(),{onClick:w}),{default:r["overlay-content"]})},v=s=>{t("clickCloseIcon",s),h()},I=()=>{if(e.closeable)return m(de,{role:"button",tabindex:0,name:e.closeIcon,class:[B("close-icon",e.closeIconPosition),ye],classPrefix:e.iconPrefix,onClick:v},null)};let f;const Z=()=>{f&&clearTimeout(f),f=setTimeout(()=>{t("opened")})},Q=()=>t("closed"),W=s=>t("keydown",s),q=P(()=>{var s;const{round:y,position:b,safeAreaInsetTop:T,safeAreaInsetBottom:J}=e;return Y(m("div",A({ref:c,style:O.value,role:"dialog",tabindex:0,class:[B({round:y,[b]:b}),{"van-safe-area-top":T,"van-safe-area-bottom":J}],onKeydown:W},o,p()),[(s=r.default)==null?void 0:s.call(r),I()]),[[F,e.show]])}),E=()=>{const{position:s,transition:y,transitionAppear:b}=e,T=s==="center"?"van-fade":`van-popup-slide-${s}`;return m(K,{name:y||T,appear:b,onAfterEnter:Z,onAfterLeave:Q},{default:q})};return g(()=>e.show,s=>{s&&!n&&(u(),o.tabindex===0&&oe(()=>{var y;(y=c.value)==null||y.focus()})),!s&&n&&(n=!1,t("close"))}),me({popupRef:c}),Pe(c,()=>e.show&&e.lockScroll),$("popstate",()=>{e.closeOnPopstate&&(h(),l=!1)}),ne(()=>{e.show&&u()}),ae(()=>{l&&(t("update:show",!0),l=!1)}),R(()=>{e.show&&e.teleport&&(h(),l=!0)}),se(ve,()=>e.show),()=>e.teleport?m(le,{to:e.teleport},{default:()=>[d(),E()]}):m(ce,null,[d(),E()])}});const pe=G(ze);export{pe as P,me as a,_e as b,U as p,Ce as u};

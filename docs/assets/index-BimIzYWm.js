import{x as R,y as T,c as $,n as B,r as H,m as p,z as O,A as z,e as C,g as D,f as E,C as w,h as u,D as N,E as A,F,w as V}from"./index-BmvuxWIC.js";import{G as _,H as j,d as G,r as g,k as L,a as v,D as b,I as M,c as y}from"./index-C_XFIidH.js";function U(o,f){if(!R||!window.IntersectionObserver)return;const r=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),s=()=>{o.value&&r.observe(o.value)},d=()=>{o.value&&r.unobserve(o.value)};_(d),j(d),T(s)}const[W,Z]=$("sticky"),q={zIndex:B,position:H("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)};var J=G({name:W,props:q,emits:["scroll","change"],setup(o,{emit:f,slots:r}){const s=g(),d=O(s),e=L({fixed:!1,width:0,height:0,transform:0}),c=g(!1),i=v(()=>z(o.position==="top"?o.offsetTop:o.offsetBottom)),S=v(()=>{if(c.value)return;const{fixed:t,height:h,width:n}=e;if(t)return{width:`${n}px`,height:`${h}px`}}),k=v(()=>{if(!e.fixed||c.value)return;const t=C(D(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),I=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),m=()=>{if(!s.value||w(s))return;const{container:t,position:h}=o,n=u(s),P=F(window);if(e.width=n.width,e.height=n.height,h==="top")if(t){const a=u(t),l=a.bottom-i.value-e.height;e.fixed=i.value>n.top&&a.bottom>0,e.transform=l<0?l:0}else e.fixed=i.value>n.top;else{const{clientHeight:a}=document.documentElement;if(t){const l=u(t),x=a-l.top-i.value-e.height;e.fixed=a-i.value<n.bottom&&a>l.top,e.transform=x<0?-x:0}else e.fixed=a-i.value<n.bottom}I(P)};return b(()=>e.fixed,t=>f("change",t)),E("scroll",m,{target:d,passive:!0}),U(s,m),b([N,A],()=>{!s.value||w(s)||!e.fixed||(c.value=!0,M(()=>{const t=u(s);e.width=t.width,e.height=t.height,c.value=!1}))}),()=>{var t;return y("div",{ref:s,style:S.value},[y("div",{class:Z({fixed:e.fixed&&!c.value}),style:k.value},[(t=r.default)==null?void 0:t.call(r)])])}}});const X=V(J);export{X as S};
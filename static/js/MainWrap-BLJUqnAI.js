import{_ as k}from"./index-M4BwUxJJ.js";import{b as v,c as B,y as I,L as C,o as c,e as r,f as a,x as S,F as b,l as x,E as T,u as _,q as w,m as M,t as E,j as R,k as V}from"./chunks/@vue-k1McLpBC.js";const W=s=>(R("data-v-8b7acfc7"),s=s(),V(),s),$={class:"Content"},z={key:0,class:"Directory"},D={class:"Box"},F=W(()=>a("div",{class:"Title"},"目录",-1)),L=["onClick"],N={__name:"MainWrap",props:{list:Array},setup(s){const i=s,o=v("Button-Type"),h=B(()=>{const e={top:0};return o.value&&i.list.findIndex(t=>t.id===o.value)!==-1&&(e.top=`${i.list.findIndex(t=>t.id===o.value)*28}px`),e}),y=e=>{if(!e.id||e.id===o.value)return;o.value=e.id;const t=document.getElementById(e.id);t&&t.scrollIntoView({behavior:"smooth"})};let d=null;const g=e=>{var t;(t=i.list)!=null&&t.length&&(d&&clearTimeout(d),d=setTimeout(()=>{const{top:l,bottom:u}=n.value.getBoundingClientRect();i.list.some(p=>{const f=document.getElementById(p.id);if(f){const{top:m}=f.getBoundingClientRect();if(m>=l&&m<u)return o.value=p.id,!0}return!1})},300))},n=v();return I(()=>{n.value&&(n.value.onscroll=g)}),C(()=>{n.value&&(n.value.onscroll=null)}),(e,t)=>(c(),r("div",{class:"MainWrap",ref_key:"wrapRef",ref:n},[a("div",$,[S(e.$slots,"default",{},void 0,!0)]),s.list&&s.list.length?(c(),r("div",z,[a("div",D,[F,a("ul",null,[(c(!0),r(b,null,x(s.list,l=>(c(),r("li",{class:M(l.id===_(o)?"is-active":""),onClick:u=>y(l)},E(l.label),11,L))),256)),a("div",{class:"Mark",style:T(_(h))},null,4)])])])):w("",!0)],512))}},A=k(N,[["__scopeId","data-v-8b7acfc7"]]);export{A as M};

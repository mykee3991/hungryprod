import{a5 as K,az as T,a3 as H,by as C,bz as fe,r as P,a as F,aZ as Q,l as v,o as ye,bA as qe,ab as k,bp as We,t as Xe,bB as Ze,bC as Je,av as M,m as N,c as R,g as _,e as U,f as c,b3 as ee,bx as Ye,bD as Qe,Y as ge,Z as et,aJ as D,aK as me,aL as be,b as Se,aM as he,aO as pe,aP as tt,aF as ke,aG as Ce,aR as at,a$ as nt,k as lt,aH as we,aT as Ie,aU as it,aV as Ae,d as Ve,aW as Pe,aX as Le,bE as st,b0 as rt,b1 as ut,F as ue,ae as oe,N as te,bt as ot,aE as ct,bs as dt,aI as vt,bF as ft,bG as G,bo as yt}from"./BJsC6Rx8.js";import{c as gt,V as ce,a as mt}from"./q4KORCR-.js";const ae=Symbol.for("vuetify:list");function Be(){const e=K(ae,{hasPrepend:T(!1),updateHasPrepend:()=>null}),i={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return H(ae,i),e}function Oe(){return K(ae,null)}const ne=e=>{const i={activate:t=>{let{id:a,value:l,activated:n}=t;return a=C(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;if(t!=null)for(const r of fe(t))n=i.activate({id:r,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return i},Me=e=>{const i=ne(e);return{activate:a=>{let{activated:l,id:n,...r}=a;n=C(n);const u=l.has(n)?new Set([n]):new Set;return i.activate({...r,id:n,activated:u})},in:(a,l,n)=>{let r=new Set;if(a!=null){const u=fe(a);u.length&&(r=i.in(u.slice(0,1),l,n))}return r},out:(a,l,n)=>i.out(a,l,n)}},bt=e=>{const i=ne(e);return{activate:a=>{let{id:l,activated:n,children:r,...u}=a;return l=C(l),r.has(l)?n:i.activate({id:l,activated:n,children:r,...u})},in:i.in,out:i.out}},St=e=>{const i=Me(e);return{activate:a=>{let{id:l,activated:n,children:r,...u}=a;return l=C(l),r.has(l)?n:i.activate({id:l,activated:n,children:r,...u})},in:i.in,out:i.out}},ht={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(i);let r=l.get(i);for(;r!=null;)n.add(r),r=l.get(r);return n}else return a.delete(i),a},select:()=>null},Fe={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){let n=l.get(i);for(a.add(i);n!=null&&n!==i;)a.add(n),n=l.get(n);return a}else a.delete(i);return a},select:()=>null},pt={open:Fe.open,select:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let r=l.get(i);for(;r!=null;)n.push(r),r=l.get(r);return new Set(n)}},le=e=>{const i={select:t=>{let{id:a,value:l,selected:n}=t;if(a=C(a),e&&!l){const r=Array.from(n.entries()).reduce((u,S)=>{let[f,g]=S;return g==="on"&&u.push(f),u},[]);if(r.length===1&&r[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{let n=new Map;for(const r of t||[])n=i.select({id:r,value:!0,selected:new Map(n),children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return i},xe=e=>{const i=le(e);return{select:a=>{let{selected:l,id:n,...r}=a;n=C(n);const u=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...r,id:n,selected:u})},in:(a,l,n)=>{let r=new Map;return a!=null&&a.length&&(r=i.in(a.slice(0,1),l,n)),r},out:(a,l,n)=>i.out(a,l,n)}},kt=e=>{const i=le(e);return{select:a=>{let{id:l,selected:n,children:r,...u}=a;return l=C(l),r.has(l)?n:i.select({id:l,selected:n,children:r,...u})},in:i.in,out:i.out}},Ct=e=>{const i=xe(e);return{select:a=>{let{id:l,selected:n,children:r,...u}=a;return l=C(l),r.has(l)?n:i.select({id:l,selected:n,children:r,...u})},in:i.in,out:i.out}},wt=e=>{const i={select:t=>{let{id:a,value:l,selected:n,children:r,parents:u}=t;a=C(a);const S=new Map(n),f=[a];for(;f.length;){const y=f.shift();n.set(C(y),l?"on":"off"),r.has(y)&&f.push(...r.get(y))}let g=C(u.get(a));for(;g;){const y=r.get(g),h=y.every(s=>n.get(C(s))==="on"),b=y.every(s=>!n.has(C(s))||n.get(C(s))==="off");n.set(g,h?"on":b?"off":"indeterminate"),g=C(u.get(g))}return e&&!l&&Array.from(n.entries()).reduce((h,b)=>{let[s,o]=b;return o==="on"&&h.push(s),h},[]).length===0?S:n},in:(t,a,l)=>{let n=new Map;for(const r of t||[])n=i.select({id:r,value:!0,selected:new Map(n),children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,r]of t.entries())r==="on"&&!a.has(n)&&l.push(n);return l}};return i},E=Symbol.for("vuetify:nested"),Te={id:T(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:P(!1),selectable:P(!1),opened:P(new Set),activated:P(new Set),selected:P(new Map),selectedValues:P([]),getPath:()=>[]}},It=F({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),At=e=>{let i=!1;const t=P(new Map),a=P(new Map),l=Q(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),n=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return bt(e.mandatory);case"single-leaf":return St(e.mandatory);case"independent":return ne(e.mandatory);case"single-independent":default:return Me(e.mandatory)}}),r=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ct(e.mandatory);case"leaf":return kt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":return xe(e.mandatory);case"classic":default:return wt(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return pt;case"single":return ht;case"multiple":default:return Fe}}),S=Q(e,"activated",e.activated,s=>n.value.in(s,t.value,a.value),s=>n.value.out(s,t.value,a.value)),f=Q(e,"selected",e.selected,s=>r.value.in(s,t.value,a.value),s=>r.value.out(s,t.value,a.value));ye(()=>{i=!0});function g(s){const o=[];let d=s;for(;d!=null;)o.unshift(d),d=a.value.get(d);return o}const y=qe("nested"),h=new Set,b={id:T(),root:{opened:l,activatable:k(e,"activatable"),selectable:k(e,"selectable"),activated:S,selected:f,selectedValues:v(()=>{const s=[];for(const[o,d]of f.value.entries())d==="on"&&s.push(o);return s}),register:(s,o,d)=>{if(h.has(s)){g(s).map(String).join(" -> "),g(o).concat(s).map(String).join(" -> ");return}else h.add(s);o&&s!==o&&a.value.set(s,o),d&&t.value.set(s,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],s])},unregister:s=>{if(i)return;h.delete(s),t.value.delete(s);const o=a.value.get(s);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(p=>p!==s))}a.value.delete(s)},open:(s,o,d)=>{y.emit("click:open",{id:s,value:o,path:g(s),event:d});const p=u.value.open({id:s,value:o,opened:new Set(l.value),children:t.value,parents:a.value,event:d});p&&(l.value=p)},openOnSelect:(s,o,d)=>{const p=u.value.select({id:s,value:o,selected:new Map(f.value),opened:new Set(l.value),children:t.value,parents:a.value,event:d});p&&(l.value=p)},select:(s,o,d)=>{y.emit("click:select",{id:s,value:o,path:g(s),event:d});const p=r.value.select({id:s,value:o,selected:new Map(f.value),children:t.value,parents:a.value,event:d});p&&(f.value=p),b.root.openOnSelect(s,o,d)},activate:(s,o,d)=>{if(!e.activatable)return b.root.select(s,!0,d);y.emit("click:activate",{id:s,value:o,path:g(s),event:d});const p=n.value.activate({id:s,value:o,activated:new Set(S.value),children:t.value,parents:a.value,event:d});p&&(S.value=p)},children:t,parents:a,getPath:g}};return H(E,b),b.root},_e=(e,i)=>{const t=K(E,Te),a=Symbol(We()),l=v(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(r,u)=>t.root.open(l.value,r,u),openOnSelect:(r,u)=>t.root.openOnSelect(l.value,r,u),isOpen:v(()=>t.root.opened.value.has(l.value)),parent:v(()=>t.root.parents.value.get(l.value)),activate:(r,u)=>t.root.activate(l.value,r,u),isActivated:v(()=>t.root.activated.value.has(C(l.value))),select:(r,u)=>t.root.select(l.value,r,u),isSelected:v(()=>t.root.selected.value.get(C(l.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),ye(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&H(E,n),n},Vt=()=>{const e=K(E,Te);H(E,{...e,isGroupActivator:!0})};function Pt(){const e=T(!1);return Xe(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ze(e)}}const Lt=Je({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Vt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Bt=F({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...R()},"VListGroup"),de=_()({name:"VListGroup",props:Bt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:l,id:n}=_e(k(e,"value"),!0),r=v(()=>`v-list-group--id-${String(n.value)}`),u=Oe(),{isBooted:S}=Pt();function f(b){b.stopPropagation(),l(!a.value,b)}const g=v(()=>({onClick:f,class:"v-list-group__header",id:r.value})),y=v(()=>a.value?e.collapseIcon:e.expandIcon),h=v(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return U(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&c(ee,{defaults:h.value},{default:()=>[c(Lt,null,{default:()=>[t.activator({props:g.value,isOpen:a.value})]})]}),c(Ye,{transition:{component:Qe},disabled:!S.value},{default:()=>{var b;return[ge(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":r.value},[(b=t.default)==null?void 0:b.call(t)]),[[et,a.value]])]}})]})),{isOpen:a}}}),Ot=F({opacity:[Number,String],...N(),...R()},"VListItemSubtitle"),Mt=_()({name:"VListItemSubtitle",props:Ot(),setup(e,i){let{slots:t}=i;return U(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ft=gt("v-list-item-title"),xt=F({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:D(),onClickOnce:D(),...me(),...N(),...be(),...Se(),...he(),...pe(),...tt(),...R(),...ke(),...Ce({variant:"text"})},"VListItem"),ve=_()({name:"VListItem",directives:{Ripple:at},props:xt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:l}=i;const n=nt(e,t),r=v(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:S,select:f,isOpen:g,isSelected:y,isIndeterminate:h,isGroupActivator:b,root:s,parent:o,openOnSelect:d,id:p}=_e(r,!1),I=Oe(),L=v(()=>{var m;return e.active!==!1&&(e.active||((m=n.isActive)==null?void 0:m.value)||(s.activatable.value?S.value:y.value))}),j=v(()=>e.link!==!1&&n.isLink.value),B=v(()=>!!I&&(s.selectable.value||s.activatable.value||e.value!=null)),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||B.value)),z=v(()=>e.rounded||e.nav),q=v(()=>e.color??e.activeColor),W=v(()=>({color:L.value?q.value??e.baseColor:e.baseColor,variant:e.variant}));lt(()=>{var m;return(m=n.isActive)==null?void 0:m.value},m=>{m&&o.value!=null&&s.open(o.value,!0),m&&d(m)},{immediate:!0});const{themeClasses:X}=we(e),{borderClasses:Z}=Ie(e),{colorClasses:O,colorStyles:w,variantClasses:x}=it(W),{densityClasses:De}=Ae(e),{dimensionStyles:Ee}=Ve(e),{elevationClasses:Ne}=Pe(e),{roundedClasses:Re}=Le(z),Ue=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=v(()=>({isActive:L.value,select:f,isOpen:g.value,isSelected:y.value,isIndeterminate:h.value}));function $e(m){var $;l("click",m),A.value&&(($=n.navigate)==null||$.call(n,m),!b&&(s.activatable.value?u(!S.value,m):(s.selectable.value||e.value!=null)&&f(!y.value,m)))}function Ke(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.target.dispatchEvent(new MouseEvent("click",m)))}return U(()=>{const m=j.value?"a":e.tag,$=a.title||e.title!=null,He=a.subtitle||e.subtitle!=null,ie=!!(e.appendAvatar||e.appendIcon),ze=!!(ie||a.append),se=!!(e.prependAvatar||e.prependIcon),Y=!!(se||a.prepend);return I==null||I.updateHasPrepend(Y),e.activeColor&&st("active-color",["color","base-color"]),ge(c(m,te({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},X.value,Z.value,O.value,De.value,Ne.value,Ue.value,Re.value,x.value,e.class],style:[w.value,Ee.value,e.style],tabindex:A.value?I?-2:0:void 0,"aria-selected":B.value?s.activatable.value?S.value:s.selectable.value?y.value:L.value:void 0,onClick:$e,onKeydown:A.value&&!j.value&&Ke},n.linkProps),{default:()=>{var re;return[ut(A.value||L.value,"v-list-item"),Y&&c("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?c(ee,{key:"prepend-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=a.prepend)==null?void 0:V.call(a,J.value)]}}):c(ue,null,[e.prependAvatar&&c(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[$&&c(Ft,{key:"title"},{default:()=>{var V;return[((V=a.title)==null?void 0:V.call(a,{title:e.title}))??e.title]}}),He&&c(Mt,{key:"subtitle"},{default:()=>{var V;return[((V=a.subtitle)==null?void 0:V.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(re=a.default)==null?void 0:re.call(a,J.value)]),ze&&c("div",{key:"append",class:"v-list-item__append"},[a.append?c(ee,{key:"append-defaults",disabled:!ie,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=a.append)==null?void 0:V.call(a,J.value)]}}):c(ue,null,[e.appendIcon&&c(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[rt("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:S,isGroupActivator:b,isSelected:y,list:I,select:f,root:s,id:p}}}),Tt=F({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...R()},"VListSubheader"),_t=_()({name:"VListSubheader",props:Tt(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:l}=ot(k(e,"color"));return U(()=>{const n=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var r;return[n&&c("div",{class:"v-list-subheader__text"},[((r=t.default)==null?void 0:r.call(t))??e.title])]}})}),{}}}),jt=F({items:Array,returnObject:Boolean},"VListChildren"),je=_()({name:"VListChildren",props:jt(),setup(e,i){let{slots:t}=i;return Be(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var h,b;let{children:r,props:u,type:S,raw:f}=n;if(S==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:u}))??c(mt,u,null);if(S==="subheader")return((b=t.subheader)==null?void 0:b.call(t,{props:u}))??c(_t,u,null);const g={subtitle:t.subtitle?s=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...s,item:f})}:void 0,prepend:t.prepend?s=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...s,item:f})}:void 0,append:t.append?s=>{var o;return(o=t.append)==null?void 0:o.call(t,{...s,item:f})}:void 0,title:t.title?s=>{var o;return(o=t.title)==null?void 0:o.call(t,{...s,item:f})}:void 0},y=de.filterProps(u);return r?c(de,te({value:u==null?void 0:u.value},y),{activator:s=>{let{props:o}=s;const d={...u,...o,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):c(ve,d,g)},default:()=>c(je,{items:r,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):c(ve,te(u,{value:e.returnObject?f:u.value}),g)}))}}}),Gt=F({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ct}},"list-items");function Dt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Et(e,i){const t=G(i,e.itemType,"item"),a=Dt(i)?i:G(i,e.itemTitle),l=G(i,e.itemValue,void 0),n=G(i,e.itemChildren),r=e.itemProps===!0?yt(i,["children"]):G(i,e.itemProps),u={title:a,value:l,...r};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?Ge(e,n):void 0,raw:i}}function Ge(e,i){const t=[];for(const a of i)t.push(Et(e,a));return t}function Nt(e){return{items:v(()=>Ge(e,e.items))}}const Rt=F({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:M,collapseIcon:M,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":D(),"onClick:select":D(),"onUpdate:opened":D(),...It({selectStrategy:"single-leaf",openStrategy:"list"}),...me(),...N(),...be(),...Se(),...he(),itemType:{type:String,default:"type"},...Gt(),...pe(),...R(),...ke(),...Ce({variant:"text"})},"VList"),Kt=_()({name:"VList",props:Rt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=Nt(e),{themeClasses:l}=we(e),{backgroundColorClasses:n,backgroundColorStyles:r}=dt(k(e,"bgColor")),{borderClasses:u}=Ie(e),{densityClasses:S}=Ae(e),{dimensionStyles:f}=Ve(e),{elevationClasses:g}=Pe(e),{roundedClasses:y}=Le(e),{children:h,open:b,parents:s,select:o,getPath:d}=At(e),p=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=k(e,"activeColor"),L=k(e,"baseColor"),j=k(e,"color");Be(),vt({VListGroup:{activeColor:I,baseColor:L,color:j,expandIcon:k(e,"expandIcon"),collapseIcon:k(e,"collapseIcon")},VListItem:{activeClass:k(e,"activeClass"),activeColor:I,baseColor:L,color:j,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),slim:k(e,"slim"),variant:k(e,"variant")}});const B=T(!1),A=P();function z(w){B.value=!0}function q(w){B.value=!1}function W(w){var x;!B.value&&!(w.relatedTarget&&((x=A.value)!=null&&x.contains(w.relatedTarget)))&&O()}function X(w){const x=w.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(x.tagName))){if(w.key==="ArrowDown")O("next");else if(w.key==="ArrowUp")O("prev");else if(w.key==="Home")O("first");else if(w.key==="End")O("last");else return;w.preventDefault()}}function Z(w){B.value=!0}function O(w){if(A.value)return ft(A.value,w)}return U(()=>c(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,u.value,S.value,g.value,p.value,y.value,e.class],style:[r.value,f.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:z,onFocusout:q,onFocus:W,onKeydown:X,onMousedown:Z},{default:()=>[c(je,{items:a.value,returnObject:e.returnObject},t)]})),{open:b,select:o,focus:O,children:h,parents:s,getPath:d}}});export{Kt as V,ve as a,Ft as b,_t as c,Mt as d};

import{g as o,m as v,aI as w,e as m,f as n,a as f,c as h,av as u,aL as x,F as p,ae as A,b3 as V,aK as G,b as K,aM as W,bT as X,bq as Y,c4 as $,aO as z,aP as J,aF as Q,aG as Z,aR as ee,aH as ae,aT as te,aU as ne,aV as de,d as ie,aW as le,bU as se,bv as ce,c5 as re,aX as ue,a$ as oe,l as P,Y as ve,b0 as me,V as ye,bV as be,b1 as ge,N as ke}from"./BJsC6Rx8.js";import{c as Ve,V as S}from"./q4KORCR-.js";import{V as fe}from"./Cn9Lf5-c.js";const Ce=o()({name:"VCardActions",props:v(),setup(e,d){let{slots:t}=d;return w({VBtn:{slim:!0,variant:"text"}}),m(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=f({opacity:[Number,String],...v(),...h()},"VCardSubtitle"),pe=o()({name:"VCardSubtitle",props:Ie(),setup(e,d){let{slots:t}=d;return m(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ae=Ve("v-card-title"),Pe=f({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...v(),...x()},"VCardItem"),Se=o()({name:"VCardItem",props:Pe(),setup(e,d){let{slots:t}=d;return m(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),y=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),b=!!(l||t.append),g=!!(e.title!=null||t.title),k=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[y&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(S,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[g&&n(Ae,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),k&&n(pe,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),b&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(S,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=f({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...G(),...v(),...x(),...K(),...W(),...X(),...Y(),...$(),...z(),...J(),...h(),...Q(),...Z({variant:"elevated"})},"VCard"),Be=o()({name:"VCard",directives:{Ripple:ee},props:he(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:y}=ae(e),{borderClasses:l}=te(e),{colorClasses:b,colorStyles:g,variantClasses:k}=ne(e),{densityClasses:s}=de(e),{dimensionStyles:i}=ie(e),{elevationClasses:T}=le(e),{loaderClasses:L}=se(e),{locationStyles:B}=ce(e),{positionClasses:D}=re(e),{roundedClasses:N}=ue(e),c=oe(e,t),_=P(()=>e.link!==!1&&c.isLink.value),r=P(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return m(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),M=!!(a.subtitle||e.subtitle!=null),O=F||M,E=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),U=!!(a.image||e.image),j=O||H||E,q=!!(a.text||e.text!=null);return ve(n(R,ke({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},y.value,l.value,b.value,s.value,T.value,L.value,D.value,N.value,k.value,e.class],style:[g.value,i.value,B.value,e.style],onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},c.linkProps),{default:()=>{var C;return[U&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&n(Se,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(fe,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(Ce,null,{default:a.actions}),ge(r.value,"v-card")]}}),[[me("ripple"),r.value&&e.ripple]])}),{}}});export{Be as V,Se as a,Ae as b};

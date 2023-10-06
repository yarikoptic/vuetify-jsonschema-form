import{m as $,a as D,u as R}from"./tag.ddf107cf.js";import{bg as Y,$ as E,Y as et,b2 as tt,g as nt,r as z,as as we,e as U,E as q,aC as at,ax as me,bh as st,aa as Be,Z as y,c as u,au as g,am as P,bi as G,at as Ie,bj as ge,aY as it,bk as lt,v,L as ot,T as he,a4 as M,aq as H,ab as V,ay as se,a8 as rt,a9 as Ve,af as ut,aA as ct,a7 as Ee,o as dt,a6 as vt,ag as ft,ba as mt,a2 as gt,a5 as te,bl as ht,bm as bt,bn as yt,ac as Ct,bd as pt,C as St,ap as Pe,a3 as _t,a1 as kt,bo as be,ai as Le,S as xt,b0 as wt,bp as ye,K as Bt,ae as It}from"./entry.bb0bdacd.js";const Te=["top","bottom"],Vt=["start","end","left","right"];function Et(e,t){let[a,n]=e.split(" ");return n||(n=Y(Te,a)?"start":Y(Vt,a)?"top":"center"),{side:Ce(a,t),align:Ce(n,t)}}function Ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function gn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function hn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function bn(e){return{side:e.align,align:e.side}}function yn(e){return Y(Te,e.side)?"y":"x"}function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return E()({name:a??et(tt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...$()},setup(n,i){let{slots:s}=i;return()=>{var l;return nt(n.tag,{class:[e,n.class],style:n.style},(l=s.default)==null?void 0:l.call(s))}}})}function Pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=z(),n=z();if(we){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(t==="content"?n.value=s[0].contentRect:n.value=s[0].target.getBoundingClientRect())});U(()=>{i.disconnect()}),q(a,(s,l)=>{l&&(i.unobserve(me(l)),n.value=void 0),s&&i.observe(me(s))},{flush:"post"})}return{resizeRef:a,contentRect:at(n)}}const Lt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Q=E(!1)({name:"VDefaultsProvider",props:Lt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:c}=st(e);return Be(n,{reset:s,root:l,scoped:c,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}}),Tt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function $t(e){return{dimensionStyles:u(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}const $e=y({border:[Boolean,Number,String]},"border");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:u(()=>{const n=G(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}function ie(e){return Ie(()=>{const t=[],a={};if(e.value.background)if(ge(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text){const n=it(e.value.background);if(n.a==null||n.a===1){const i=lt(n);a.color=i,a.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ge(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function X(e,t){const a=u(()=>({text:G(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{textColorClasses:n,textColorStyles:i}}function pe(e,t){const a=u(()=>({background:G(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const Ne=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ze(e){return{elevationClasses:u(()=>{const a=G(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const le=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:u(()=>{const n=G(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const Rt=[null,"default","comfortable","compact"],Oe=y({density:{type:String,default:"default",validator:e=>Rt.includes(e)}},"density");function Ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const Nt=["elevated","flat","tonal","outlined","text","plain"];function zt(e,t){return v(ot,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const De=y({color:String,variant:{type:String,default:"elevated",validator:e=>Nt.includes(e)}},"variant");function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=u(()=>{const{variant:s}=he(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=ie(u(()=>{const{variant:s,color:l}=he(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Ge=y({divided:Boolean,...$e(),...$(),...Oe(),...Ne(),...le(),...D(),...M(),...De()},"VBtnGroup"),Se=E()({name:"VBtnGroup",props:Ge(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=H(e),{densityClasses:i}=Ae(e),{borderClasses:s}=Re(e),{elevationClasses:l}=ze(e),{roundedClasses:c}=oe(e);Be({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),R(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,c.value,e.class],style:e.style},a))}}),At=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Dt=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function Gt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=se("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=rt();Ve(Symbol.for(`${t.description}:id`),i);const s=ut(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=V(e,"value"),c=u(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:c},n),U(()=>{s.unregister(i)});const o=u(()=>s.isSelected(i)),h=u(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return q(o,b=>{n.emit("group:selected",{value:b})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:b=>s.select(i,b),selectedClass:h,value:l,disabled:c,group:s}}function Mt(e,t){let a=!1;const n=ct([]),i=Ee(e,"modelValue",[],r=>r==null?[]:Me(n,ft(r)),r=>{const d=Ft(n,r);return e.multiple?d:d[0]}),s=se("useGroup");function l(r,d){const C=r,m=Symbol.for(`${t.description}:id`),S=mt(m,s==null?void 0:s.vnode).indexOf(d);S>-1?n.splice(S,0,C):n.push(C)}function c(r){if(a)return;o();const d=n.findIndex(C=>C.id===r);n.splice(d,1)}function o(){const r=n.find(d=>!d.disabled);r&&e.mandatory==="force"&&!i.value.length&&(i.value=[r.id])}dt(()=>{o()}),U(()=>{a=!0});function h(r,d){const C=n.find(m=>m.id===r);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const m=i.value.slice(),x=m.findIndex(f=>f===r),S=~x;if(d=d??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;x<0&&d?m.push(r):x>=0&&!d&&m.splice(x,1),i.value=m}else{const m=i.value.includes(r);if(e.mandatory&&m)return;i.value=d??!m?[r]:[]}}function b(r){if(e.multiple,i.value.length){const d=i.value[0],C=n.findIndex(S=>S.id===d);let m=(C+r)%n.length,x=n[m];for(;x.disabled&&m!==C;)m=(m+r)%n.length,x=n[m];if(x.disabled)return;i.value=[n[m].id]}else{const d=n.find(C=>!C.disabled);d&&(i.value=[d.id])}}const _={register:l,unregister:c,selected:i,select:h,disabled:V(e,"disabled"),prev:()=>b(n.length-1),next:()=>b(1),isSelected:r=>i.value.includes(r),selectedClass:u(()=>e.selectedClass),items:u(()=>n),getItemIndex:r=>Ht(n,r)};return Ve(t,_),_}function Ht(e,t){const a=Me(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Me(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>vt(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Ft(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const He=Symbol.for("vuetify:v-btn-toggle"),Wt=y({...Ge(),...At()},"VBtnToggle");E()({name:"VBtnToggle",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:c}=Mt(e,He);return R(()=>{const[o]=Se.filterProps(e);return v(Se,gt({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var h;return[(h=a.default)==null?void 0:h.call(a,{isSelected:n,next:i,prev:s,select:l,selected:c})]}})}),{next:i,prev:s,select:l}}});const Yt=["x-small","small","default","large","x-large"],re=y({size:{type:[String,Number],default:"default"}},"size");function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return Ie(()=>{let a,n;return Y(Yt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:g(e.size),height:g(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Xt=y({color:String,start:Boolean,end:Boolean,icon:te,...$(),...re(),...D({tag:"i"}),...M()},"VIcon"),Z=E()({name:"VIcon",props:Xt(),setup(e,t){let{attrs:a,slots:n}=t;const i=z(),{themeClasses:s}=H(e),{iconData:l}=ht(u(()=>i.value||e.icon)),{sizeClasses:c}=ue(e),{textColorClasses:o,textColorStyles:h}=X(V(e,"color"));return R(()=>{var _,r;const b=(_=n.default)==null?void 0:_.call(n);return b&&(i.value=(r=bt(b).filter(d=>d.type===yt&&d.children&&typeof d.children=="string")[0])==null?void 0:r.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,c.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},h.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[b]})}),{}}});function Fe(e,t){const a=z(),n=Ct(!1);if(pt){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);U(()=>{i.disconnect()}),q(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const jt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...$(),...re(),...D({tag:"div"}),...M()},"VProgressCircular"),Ut=E()({name:"VProgressCircular",props:jt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=z(),{themeClasses:l}=H(e),{sizeClasses:c,sizeStyles:o}=ue(e),{textColorClasses:h,textColorStyles:b}=X(V(e,"color")),{textColorClasses:_,textColorStyles:r}=X(V(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=Fe(),{resizeRef:m,contentRect:x}=Pt(),S=u(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=u(()=>Number(e.width)),p=u(()=>o.value?Number(e.size):x.value?x.value.width:Math.max(f.value,32)),I=u(()=>n/(1-f.value/p.value)*2),B=u(()=>f.value/p.value*I.value),N=u(()=>g((100-S.value)/100*i));return St(()=>{d.value=s.value,m.value=s.value}),R(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,h.value,e.class],style:[o.value,b.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[v("circle",{class:["v-progress-circular__underlay",_.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":N.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}});const _e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},We=y({location:String},"location");function Ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Pe();return{locationStyles:u(()=>{if(!e.location)return{};const{side:s,align:l}=Et(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function c(h){return a?a(h):0}const o={};return s!=="center"&&(t?o[_e[s]]=`calc(100% - ${c(s)}px)`:o[s]=0),l!=="center"?t?o[_e[l]]=`calc(100% - ${c(l)}px)`:o[l]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const qt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...$(),...We({location:"top"}),...le(),...D(),...M()},"VProgressLinear"),Kt=E()({name:"VProgressLinear",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ee(e,"modelValue"),{isRtl:i,rtlClasses:s}=Pe(),{themeClasses:l}=H(e),{locationStyles:c}=Ye(e),{textColorClasses:o,textColorStyles:h}=X(e,"color"),{backgroundColorClasses:b,backgroundColorStyles:_}=pe(u(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=pe(e,"color"),{roundedClasses:C}=oe(e),{intersectionRef:m,isIntersecting:x}=Fe(),S=u(()=>parseInt(e.max,10)),f=u(()=>parseInt(e.height,10)),p=u(()=>parseFloat(e.bufferValue)/S.value*100),I=u(()=>parseFloat(n.value)/S.value*100),B=u(()=>i.value!==e.reverse),N=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=u(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function K(k){if(!m.value)return;const{left:L,right:J,width:T}=m.value.getBoundingClientRect(),W=B.value?T-k.clientX+(J-T):k.clientX-L;n.value=Math.round(W/T*S.value)}return R(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?g(f.value):0,"--v-progress-linear-height":g(f.value),...c.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&K},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...h.value,[B.value?"left":"right"]:g(-f.value),borderTop:`${g(f.value/2)} dotted`,opacity:F.value,top:`calc(50% - ${g(f.value/4)})`,width:g(100-p.value,"%"),"--v-progress-linear-stream-to":g(f.value*(B.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",b.value],style:[_.value,{opacity:F.value,width:g(e.stream?p.value:100,"%")}]},null),v(_t,{name:N.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>v("div",{key:k,class:["v-progress-linear__indeterminate",k,r.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",r.value],style:[d.value,{width:g(I.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:I.value,buffer:p.value})])]})),{}}}),Jt=y({loading:[Boolean,String]},"loader");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function pn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Kt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Zt=["static","relative","fixed","absolute","sticky"],en=y({position:{type:String,validator:e=>Zt.includes(e)}},"position");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}function Sn(){var e,t;return(t=(e=se("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function nn(e,t){const a=kt("RouterLink"),n=u(()=>!!(e.href||e.to)),i=u(()=>(n==null?void 0:n.value)||be(t,"click")||be(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:V(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&u(()=>{var l,c;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(c=s.isActive)==null?void 0:c.value}),href:u(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const an=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ee=!1;function _n(e,t){let a=!1,n,i;we&&(Le(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,c,o)=>{ee?a?t(o):o():setTimeout(()=>a?t(o):o()),ee=!0}),i=e==null?void 0:e.afterEach(()=>{ee=!1})}),xt(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var c;(c=l.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function sn(e,t){q(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Le(()=>{t(!0)})},{immediate:!0})}const ne=Symbol("rippleStop"),ln=80;function ke(e,t){e.style.transform=t,e.style.webkitTransform=t}function ae(e){return e.constructor.name==="TouchEvent"}function Xe(e){return e.constructor.name==="KeyboardEvent"}const on=function(e,t){var _;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!Xe(e)){const r=t.getBoundingClientRect(),d=ae(e)?e.touches[e.touches.length-1]:e;n=d.clientX-r.left,i=d.clientY-r.top}let s=0,l=.3;(_=t._ripple)!=null&&_.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,h=a.center?c:`${n-s}px`,b=a.center?o:`${i-s}px`;return{radius:s,scale:l,x:h,y:b,centerX:c,centerY:o}},j={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:c,y:o,centerX:h,centerY:b}=on(e,t,a),_=`${s*2}px`;i.className="v-ripple__animation",i.style.width=_,i.style.height=_,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),ke(i,`translate(${c}, ${o}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),ke(i,`translate(${h}, ${b}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function je(e){return typeof e>"u"||!!e}function O(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ne])){if(e[ne]=!0,ae(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Xe(e),a._ripple.class&&(t.class=a._ripple.class),ae(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{j.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},ln)}else j.show(e,a,t)}}function xe(e){e[ne]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),j.hide(t)}}function Ue(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let A=!1;function qe(e){!A&&(e.keyCode===ye.enter||e.keyCode===ye.space)&&(A=!0,O(e))}function Ke(e){A=!1,w(e)}function Je(e){A&&(A=!1,w(e))}function Qe(e,t,a){const{value:n,modifiers:i}=t,s=je(n);if(s||j.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,wt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",xe,{passive:!0}),e.addEventListener("mousedown",xe);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Ue,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",O),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",qe),e.addEventListener("keyup",Ke),e.addEventListener("blur",Je),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&Ze(e)}function Ze(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Ue),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",qe),e.removeEventListener("keyup",Ke),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Je)}function rn(e,t){Qe(e,t,!1)}function un(e){delete e._ripple,Ze(e)}function cn(e,t){if(t.value===t.oldValue)return;const a=je(t.oldValue);Qe(e,t,a)}const dn={mounted:rn,unmounted:un,updated:cn},vn=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:te,appendIcon:te,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...$e(),...$(),...Oe(),...Tt(),...Ne(),...Dt(),...Jt(),...We(),...en(),...le(),...an(),...re(),...D({tag:"button"}),...M(),...De({variant:"elevated"})},"VBtn"),kn=E()({name:"VBtn",directives:{Ripple:dn},props:vn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=H(e),{borderClasses:s}=Re(e),{colorClasses:l,colorStyles:c,variantClasses:o}=Ot(e),{densityClasses:h}=Ae(e),{dimensionStyles:b}=$t(e),{elevationClasses:_}=ze(e),{loaderClasses:r}=Qt(e),{locationStyles:d}=Ye(e),{positionClasses:C}=tn(e),{roundedClasses:m}=oe(e),{sizeClasses:x,sizeStyles:S}=ue(e),f=Gt(e,e.symbol,!1),p=nn(e,a),I=u(()=>{var k;return e.active!==void 0?e.active:p.isLink.value?(k=p.isActive)==null?void 0:k.value:f==null?void 0:f.isSelected.value}),B=u(()=>(f==null?void 0:f.disabled.value)||e.disabled),N=u(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=u(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function K(k){var L;B.value||p.isLink.value&&(k.metaKey||k.ctrlKey||k.shiftKey||k.button!==0||a.target==="_blank")||((L=p.navigate)==null||L.call(p,k),f==null||f.toggle())}return sn(p,f==null?void 0:f.select),R(()=>{var ce,de;const k=p.isLink.value?"a":e.tag,L=!!(e.prependIcon||n.prepend),J=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),W=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((ce=p.isActive)==null?void 0:ce.value))||!f||((de=p.isActive)==null?void 0:de.value);return Bt(v(k,{type:k==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,W?l.value:void 0,h.value,_.value,r.value,C.value,m.value,x.value,o.value,e.class],style:[W?c.value:void 0,b.value,d.value,S.value,e.style],disabled:B.value||void 0,href:p.href.value,onClick:K,value:F.value},{default:()=>{var ve;return[zt(!0,"v-btn"),!e.icon&&L&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(Q,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(Z,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(Z,{key:"content-icon",icon:e.icon},null):v(Q,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var fe;return[((fe=n.default)==null?void 0:fe.call(n))??e.text]}})]),!e.icon&&J&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(Q,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(Z,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ve=n.loader)==null?void 0:ve.call(n))??v(Ut,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[It("ripple"),!B.value&&e.ripple,null]])}),{}}});export{bn as A,yn as B,Tt as C,$t as D,Sn as E,_n as F,Jt as G,Qt as H,Pt as I,We as J,en as K,pn as L,Ye as M,tn as N,Ut as O,vn as P,Cn as Q,dn as R,Ce as S,kn as V,Z as a,X as b,pe as c,At as d,De as e,Mt as f,$e as g,Ne as h,Dt as i,le as j,an as k,re as l,Oe as m,Re as n,Ot as o,ze as p,oe as q,ue as r,Gt as s,nn as t,Ae as u,zt as v,Q as w,Et as x,gn as y,hn as z};

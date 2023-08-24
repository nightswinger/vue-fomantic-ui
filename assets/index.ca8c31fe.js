const Cc=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const _ of d)if(_.type==="childList")for(const f of _.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(d){const _={};return d.integrity&&(_.integrity=d.integrity),d.referrerpolicy&&(_.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?_.credentials="include":d.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(d){if(d.ep)return;d.ep=!0;const _=l(d);fetch(d.href,_)}};Cc();function ln(t,s){const l=Object.create(null),o=t.split(",");for(let d=0;d<o.length;d++)l[o[d]]=!0;return s?d=>!!l[d.toLowerCase()]:d=>!!l[d]}const yc="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",wc=ln(yc),$c="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ac=ln($c);function Sr(t){return!!t||t===""}function fs(t){if(ae(t)){const s={};for(let l=0;l<t.length;l++){const o=t[l],d=He(o)?Tc(o):fs(o);if(d)for(const _ in d)s[_]=d[_]}return s}else{if(He(t))return t;if(je(t))return t}}const Sc=/;(?![^(]*\))/g,kc=/:(.+)/;function Tc(t){const s={};return t.split(Sc).forEach(l=>{if(l){const o=l.split(kc);o.length>1&&(s[o[0].trim()]=o[1].trim())}}),s}function hs(t){let s="";if(He(t))s=t;else if(ae(t))for(let l=0;l<t.length;l++){const o=hs(t[l]);o&&(s+=o+" ")}else if(je(t))for(const l in t)t[l]&&(s+=l+" ");return s.trim()}function xc(t){if(!t)return null;let{class:s,style:l}=t;return s&&!He(s)&&(t.class=hs(s)),l&&(t.style=fs(l)),t}function Ec(t,s){if(t.length!==s.length)return!1;let l=!0;for(let o=0;l&&o<t.length;o++)l=Ht(t[o],s[o]);return l}function Ht(t,s){if(t===s)return!0;let l=fa(t),o=fa(s);if(l||o)return l&&o?t.getTime()===s.getTime():!1;if(l=ae(t),o=ae(s),l||o)return l&&o?Ec(t,s):!1;if(l=je(t),o=je(s),l||o){if(!l||!o)return!1;const d=Object.keys(t).length,_=Object.keys(s).length;if(d!==_)return!1;for(const f in t){const m=t.hasOwnProperty(f),a=s.hasOwnProperty(f);if(m&&!a||!m&&a||!Ht(t[f],s[f]))return!1}}return String(t)===String(s)}function an(t,s){return t.findIndex(l=>Ht(l,s))}const xe=t=>t==null?"":ae(t)||je(t)&&(t.toString===Tr||!he(t.toString))?JSON.stringify(t,kr,2):String(t),kr=(t,s)=>s&&s.__v_isRef?kr(t,s.value):Ai(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((l,[o,d])=>(l[`${o} =>`]=d,l),{})}:mi(s)?{[`Set(${s.size})`]:[...s.values()]}:je(s)&&!ae(s)&&!xr(s)?String(s):s,ze={},$i=[],ht=()=>{},Bc=()=>!1,Rc=/^on[^a-z]/,ps=t=>Rc.test(t),Al=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Sl=(t,s)=>{const l=t.indexOf(s);l>-1&&t.splice(l,1)},zc=Object.prototype.hasOwnProperty,Ee=(t,s)=>zc.call(t,s),ae=Array.isArray,Ai=t=>on(t)==="[object Map]",mi=t=>on(t)==="[object Set]",fa=t=>t instanceof Date,he=t=>typeof t=="function",He=t=>typeof t=="string",kl=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",Tl=t=>je(t)&&he(t.then)&&he(t.catch),Tr=Object.prototype.toString,on=t=>Tr.call(t),Pc=t=>on(t).slice(8,-1),xr=t=>on(t)==="[object Object]",xl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ki=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),un=t=>{const s=Object.create(null);return l=>s[l]||(s[l]=t(l))},Mc=/-(\w)/g,rt=un(t=>t.replace(Mc,(s,l)=>l?l.toUpperCase():"")),Dc=/\B([A-Z])/g,Ct=un(t=>t.replace(Dc,"-$1").toLowerCase()),gs=un(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qi=un(t=>t?`on${gs(t)}`:""),as=(t,s)=>!Object.is(t,s),Si=(t,s)=>{for(let l=0;l<t.length;l++)t[l](s)},Os=(t,s,l)=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,value:l})},jt=t=>{const s=parseFloat(t);return isNaN(s)?t:s};let ha;const Fc=()=>ha||(ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bt;const ks=[];class El{constructor(s=!1){this.active=!0,this.effects=[],this.cleanups=[],!s&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(s){if(this.active)try{return this.on(),s()}finally{this.off()}}on(){this.active&&(ks.push(this),bt=this)}off(){this.active&&(ks.pop(),bt=ks[ks.length-1])}stop(s){if(this.active){if(this.effects.forEach(l=>l.stop()),this.cleanups.forEach(l=>l()),this.scopes&&this.scopes.forEach(l=>l.stop(!0)),this.parent&&!s){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function Ic(t){return new El(t)}function Er(t,s){s=s||bt,s&&s.active&&s.effects.push(t)}function Nc(){return bt}function Lc(t){bt&&bt.cleanups.push(t)}const Bl=t=>{const s=new Set(t);return s.w=0,s.n=0,s},Br=t=>(t.w&qt)>0,Rr=t=>(t.n&qt)>0,Vc=({deps:t})=>{if(t.length)for(let s=0;s<t.length;s++)t[s].w|=qt},Oc=t=>{const{deps:s}=t;if(s.length){let l=0;for(let o=0;o<s.length;o++){const d=s[o];Br(d)&&!Rr(d)?d.delete(t):s[l++]=d,d.w&=~qt,d.n&=~qt}s.length=l}},qn=new WeakMap;let Ji=0,qt=1;const Jn=30,gi=[];let ai;const oi=Symbol(""),Un=Symbol("");class bs{constructor(s,l=null,o){this.fn=s,this.scheduler=l,this.active=!0,this.deps=[],Er(this,o)}run(){if(!this.active)return this.fn();if(!gi.length||!gi.includes(this))try{return gi.push(ai=this),qc(),qt=1<<++Ji,Ji<=Jn?Vc(this):pa(this),this.fn()}finally{Ji<=Jn&&Oc(this),qt=1<<--Ji,Gt(),gi.pop();const s=gi.length;ai=s>0?gi[s-1]:void 0}}stop(){this.active&&(pa(this),this.onStop&&this.onStop(),this.active=!1)}}function pa(t){const{deps:s}=t;if(s.length){for(let l=0;l<s.length;l++)s[l].delete(t);s.length=0}}function Hc(t,s){t.effect&&(t=t.effect.fn);const l=new bs(t);s&&(Oe(l,s),s.scope&&Er(l,s.scope)),(!s||!s.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function jc(t){t.effect.stop()}let xi=!0;const Rl=[];function _i(){Rl.push(xi),xi=!1}function qc(){Rl.push(xi),xi=!0}function Gt(){const t=Rl.pop();xi=t===void 0?!0:t}function dt(t,s,l){if(!zr())return;let o=qn.get(t);o||qn.set(t,o=new Map);let d=o.get(l);d||o.set(l,d=Bl()),Pr(d)}function zr(){return xi&&ai!==void 0}function Pr(t,s){let l=!1;Ji<=Jn?Rr(t)||(t.n|=qt,l=!Br(t)):l=!t.has(ai),l&&(t.add(ai),ai.deps.push(t))}function Et(t,s,l,o,d,_){const f=qn.get(t);if(!f)return;let m=[];if(s==="clear")m=[...f.values()];else if(l==="length"&&ae(t))f.forEach((a,u)=>{(u==="length"||u>=o)&&m.push(a)});else switch(l!==void 0&&m.push(f.get(l)),s){case"add":ae(t)?xl(l)&&m.push(f.get("length")):(m.push(f.get(oi)),Ai(t)&&m.push(f.get(Un)));break;case"delete":ae(t)||(m.push(f.get(oi)),Ai(t)&&m.push(f.get(Un)));break;case"set":Ai(t)&&m.push(f.get(oi));break}if(m.length===1)m[0]&&Yn(m[0]);else{const a=[];for(const u of m)u&&a.push(...u);Yn(Bl(a))}}function Yn(t,s){for(const l of ae(t)?t:[...t])(l!==ai||l.allowRecurse)&&(l.scheduler?l.scheduler():l.run())}const Jc=ln("__proto__,__v_isRef,__isVue"),Mr=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(kl)),Uc=rn(),Yc=rn(!1,!0),Gc=rn(!0),Wc=rn(!0,!0),ga=Kc();function Kc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(s=>{t[s]=function(...l){const o=Ae(this);for(let _=0,f=this.length;_<f;_++)dt(o,"get",_+"");const d=o[s](...l);return d===-1||d===!1?o[s](...l.map(Ae)):d}}),["push","pop","shift","unshift","splice"].forEach(s=>{t[s]=function(...l){_i();const o=Ae(this)[s].apply(this,l);return Gt(),o}}),t}function rn(t=!1,s=!1){return function(o,d,_){if(d==="__v_isReactive")return!t;if(d==="__v_isReadonly")return t;if(d==="__v_isShallow")return s;if(d==="__v_raw"&&_===(t?s?Or:Vr:s?Lr:Nr).get(o))return o;const f=ae(o);if(!t&&f&&Ee(ga,d))return Reflect.get(ga,d,_);const m=Reflect.get(o,d,_);return(kl(d)?Mr.has(d):Jc(d))||(t||dt(o,"get",d),s)?m:qe(m)?!f||!xl(d)?m.value:m:je(m)?t?Pl(m):Bt(m):m}}const Qc=Dr(),Xc=Dr(!0);function Dr(t=!1){return function(l,o,d,_){let f=l[o];if(Ei(f)&&qe(f)&&!qe(d))return!1;if(!t&&!Ei(d)&&(Ml(d)||(d=Ae(d),f=Ae(f)),!ae(l)&&qe(f)&&!qe(d)))return f.value=d,!0;const m=ae(l)&&xl(o)?Number(o)<l.length:Ee(l,o),a=Reflect.set(l,o,d,_);return l===Ae(_)&&(m?as(d,f)&&Et(l,"set",o,d):Et(l,"add",o,d)),a}}function Zc(t,s){const l=Ee(t,s);t[s];const o=Reflect.deleteProperty(t,s);return o&&l&&Et(t,"delete",s,void 0),o}function em(t,s){const l=Reflect.has(t,s);return(!kl(s)||!Mr.has(s))&&dt(t,"has",s),l}function tm(t){return dt(t,"iterate",ae(t)?"length":oi),Reflect.ownKeys(t)}const Fr={get:Uc,set:Qc,deleteProperty:Zc,has:em,ownKeys:tm},Ir={get:Gc,set(t,s){return!0},deleteProperty(t,s){return!0}},im=Oe({},Fr,{get:Yc,set:Xc}),sm=Oe({},Ir,{get:Wc}),zl=t=>t,dn=t=>Reflect.getPrototypeOf(t);function Ts(t,s,l=!1,o=!1){t=t.__v_raw;const d=Ae(t),_=Ae(s);s!==_&&!l&&dt(d,"get",s),!l&&dt(d,"get",_);const{has:f}=dn(d),m=o?zl:l?Il:os;if(f.call(d,s))return m(t.get(s));if(f.call(d,_))return m(t.get(_));t!==d&&t.get(s)}function xs(t,s=!1){const l=this.__v_raw,o=Ae(l),d=Ae(t);return t!==d&&!s&&dt(o,"has",t),!s&&dt(o,"has",d),t===d?l.has(t):l.has(t)||l.has(d)}function Es(t,s=!1){return t=t.__v_raw,!s&&dt(Ae(t),"iterate",oi),Reflect.get(t,"size",t)}function ba(t){t=Ae(t);const s=Ae(this);return dn(s).has.call(s,t)||(s.add(t),Et(s,"add",t,t)),this}function va(t,s){s=Ae(s);const l=Ae(this),{has:o,get:d}=dn(l);let _=o.call(l,t);_||(t=Ae(t),_=o.call(l,t));const f=d.call(l,t);return l.set(t,s),_?as(s,f)&&Et(l,"set",t,s):Et(l,"add",t,s),this}function Ca(t){const s=Ae(this),{has:l,get:o}=dn(s);let d=l.call(s,t);d||(t=Ae(t),d=l.call(s,t)),o&&o.call(s,t);const _=s.delete(t);return d&&Et(s,"delete",t,void 0),_}function ya(){const t=Ae(this),s=t.size!==0,l=t.clear();return s&&Et(t,"clear",void 0,void 0),l}function Bs(t,s){return function(o,d){const _=this,f=_.__v_raw,m=Ae(f),a=s?zl:t?Il:os;return!t&&dt(m,"iterate",oi),f.forEach((u,h)=>o.call(d,a(u),a(h),_))}}function Rs(t,s,l){return function(...o){const d=this.__v_raw,_=Ae(d),f=Ai(_),m=t==="entries"||t===Symbol.iterator&&f,a=t==="keys"&&f,u=d[t](...o),h=l?zl:s?Il:os;return!s&&dt(_,"iterate",a?Un:oi),{next(){const{value:c,done:g}=u.next();return g?{value:c,done:g}:{value:m?[h(c[0]),h(c[1])]:h(c),done:g}},[Symbol.iterator](){return this}}}}function Pt(t){return function(...s){return t==="delete"?!1:this}}function nm(){const t={get(_){return Ts(this,_)},get size(){return Es(this)},has:xs,add:ba,set:va,delete:Ca,clear:ya,forEach:Bs(!1,!1)},s={get(_){return Ts(this,_,!1,!0)},get size(){return Es(this)},has:xs,add:ba,set:va,delete:Ca,clear:ya,forEach:Bs(!1,!0)},l={get(_){return Ts(this,_,!0)},get size(){return Es(this,!0)},has(_){return xs.call(this,_,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Bs(!0,!1)},o={get(_){return Ts(this,_,!0,!0)},get size(){return Es(this,!0)},has(_){return xs.call(this,_,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(_=>{t[_]=Rs(_,!1,!1),l[_]=Rs(_,!0,!1),s[_]=Rs(_,!1,!0),o[_]=Rs(_,!0,!0)}),[t,l,s,o]}const[lm,am,om,um]=nm();function cn(t,s){const l=s?t?um:om:t?am:lm;return(o,d,_)=>d==="__v_isReactive"?!t:d==="__v_isReadonly"?t:d==="__v_raw"?o:Reflect.get(Ee(l,d)&&d in o?l:o,d,_)}const rm={get:cn(!1,!1)},dm={get:cn(!1,!0)},cm={get:cn(!0,!1)},mm={get:cn(!0,!0)},Nr=new WeakMap,Lr=new WeakMap,Vr=new WeakMap,Or=new WeakMap;function _m(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fm(t){return t.__v_skip||!Object.isExtensible(t)?0:_m(Pc(t))}function Bt(t){return Ei(t)?t:mn(t,!1,Fr,rm,Nr)}function Hr(t){return mn(t,!1,im,dm,Lr)}function Pl(t){return mn(t,!0,Ir,cm,Vr)}function hm(t){return mn(t,!0,sm,mm,Or)}function mn(t,s,l,o,d){if(!je(t)||t.__v_raw&&!(s&&t.__v_isReactive))return t;const _=d.get(t);if(_)return _;const f=fm(t);if(f===0)return t;const m=new Proxy(t,f===2?o:l);return d.set(t,m),m}function ui(t){return Ei(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function Ei(t){return!!(t&&t.__v_isReadonly)}function Ml(t){return!!(t&&t.__v_isShallow)}function Dl(t){return ui(t)||Ei(t)}function Ae(t){const s=t&&t.__v_raw;return s?Ae(s):t}function Fl(t){return Os(t,"__v_skip",!0),t}const os=t=>je(t)?Bt(t):t,Il=t=>je(t)?Pl(t):t;function Nl(t){zr()&&(t=Ae(t),t.dep||(t.dep=Bl()),Pr(t.dep))}function _n(t,s){t=Ae(t),t.dep&&Yn(t.dep)}function qe(t){return Boolean(t&&t.__v_isRef===!0)}function L(t){return qr(t,!1)}function jr(t){return qr(t,!0)}function qr(t,s){return qe(t)?t:new pm(t,s)}class pm{constructor(s,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?s:Ae(s),this._value=l?s:os(s)}get value(){return Nl(this),this._value}set value(s){s=this.__v_isShallow?s:Ae(s),as(s,this._rawValue)&&(this._rawValue=s,this._value=this.__v_isShallow?s:os(s),_n(this))}}function gm(t){_n(t)}function ki(t){return qe(t)?t.value:t}const bm={get:(t,s,l)=>ki(Reflect.get(t,s,l)),set:(t,s,l,o)=>{const d=t[s];return qe(d)&&!qe(l)?(d.value=l,!0):Reflect.set(t,s,l,o)}};function Ll(t){return ui(t)?t:new Proxy(t,bm)}class vm{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=s(()=>Nl(this),()=>_n(this));this._get=l,this._set=o}get value(){return this._get()}set value(s){this._set(s)}}function Cm(t){return new vm(t)}function ym(t){const s=ae(t)?new Array(t.length):{};for(const l in t)s[l]=Hs(t,l);return s}class wm{constructor(s,l,o){this._object=s,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}}function Hs(t,s,l){const o=t[s];return qe(o)?o:new wm(t,s,l)}class $m{constructor(s,l,o,d){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new bs(s,()=>{this._dirty||(this._dirty=!0,_n(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!d,this.__v_isReadonly=o}get value(){const s=Ae(this);return Nl(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function Am(t,s,l=!1){let o,d;const _=he(t);return _?(o=t,d=ht):(o=t.get,d=t.set),new $m(o,d,_||!d,l)}Promise.resolve();const Xi=[];function Jr(t,...s){_i();const l=Xi.length?Xi[Xi.length-1].component:null,o=l&&l.appContext.config.warnHandler,d=Sm();if(o)yt(o,l,11,[t+s.join(""),l&&l.proxy,d.map(({vnode:_})=>`at <${Id(l,_.type)}>`).join(`
`),d]);else{const _=[`[Vue warn]: ${t}`,...s];d.length&&_.push(`
`,...km(d)),console.warn(..._)}Gt()}function Sm(){let t=Xi[Xi.length-1];if(!t)return[];const s=[];for(;t;){const l=s[0];l&&l.vnode===t?l.recurseCount++:s.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return s}function km(t){const s=[];return t.forEach((l,o)=>{s.push(...o===0?[]:[`
`],...Tm(l))}),s}function Tm({vnode:t,recurseCount:s}){const l=s>0?`... (${s} recursive calls)`:"",o=t.component?t.component.parent==null:!1,d=` at <${Id(t.component,t.type,o)}`,_=">"+l;return t.props?[d,...xm(t.props),_]:[d+_]}function xm(t){const s=[],l=Object.keys(t);return l.slice(0,3).forEach(o=>{s.push(...Ur(o,t[o]))}),l.length>3&&s.push(" ..."),s}function Ur(t,s,l){return He(s)?(s=JSON.stringify(s),l?s:[`${t}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?l?s:[`${t}=${s}`]:qe(s)?(s=Ur(t,Ae(s.value),!0),l?s:[`${t}=Ref<`,s,">"]):he(s)?[`${t}=fn${s.name?`<${s.name}>`:""}`]:(s=Ae(s),l?s:[`${t}=`,s])}function yt(t,s,l,o){let d;try{d=o?t(...o):t()}catch(_){fi(_,s,l)}return d}function ut(t,s,l,o){if(he(t)){const _=yt(t,s,l,o);return _&&Tl(_)&&_.catch(f=>{fi(f,s,l)}),_}const d=[];for(let _=0;_<t.length;_++)d.push(ut(t[_],s,l,o));return d}function fi(t,s,l,o=!0){const d=s?s.vnode:null;if(s){let _=s.parent;const f=s.proxy,m=l;for(;_;){const u=_.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,f,m)===!1)return}_=_.parent}const a=s.appContext.config.errorHandler;if(a){yt(a,null,10,[t,f,m]);return}}Em(t,l,d,o)}function Em(t,s,l,o=!0){console.error(t)}let js=!1,Gn=!1;const lt=[];let Tt=0;const Zi=[];let Ui=null,vi=0;const es=[];let It=null,Ci=0;const Yr=Promise.resolve();let Vl=null,Wn=null;function vs(t){const s=Vl||Yr;return t?s.then(this?t.bind(this):t):s}function Bm(t){let s=Tt+1,l=lt.length;for(;s<l;){const o=s+l>>>1;us(lt[o])<t?s=o+1:l=o}return s}function Ol(t){(!lt.length||!lt.includes(t,js&&t.allowRecurse?Tt+1:Tt))&&t!==Wn&&(t.id==null?lt.push(t):lt.splice(Bm(t.id),0,t),Gr())}function Gr(){!js&&!Gn&&(Gn=!0,Vl=Yr.then(Kr))}function Rm(t){const s=lt.indexOf(t);s>Tt&&lt.splice(s,1)}function Wr(t,s,l,o){ae(t)?l.push(...t):(!s||!s.includes(t,t.allowRecurse?o+1:o))&&l.push(t),Gr()}function zm(t){Wr(t,Ui,Zi,vi)}function Hl(t){Wr(t,It,es,Ci)}function jl(t,s=null){if(Zi.length){for(Wn=s,Ui=[...new Set(Zi)],Zi.length=0,vi=0;vi<Ui.length;vi++)Ui[vi]();Ui=null,vi=0,Wn=null,jl(t,s)}}function qs(t){if(es.length){const s=[...new Set(es)];if(es.length=0,It){It.push(...s);return}for(It=s,It.sort((l,o)=>us(l)-us(o)),Ci=0;Ci<It.length;Ci++)It[Ci]();It=null,Ci=0}}const us=t=>t.id==null?1/0:t.id;function Kr(t){Gn=!1,js=!0,jl(t),lt.sort((l,o)=>us(l)-us(o));const s=ht;try{for(Tt=0;Tt<lt.length;Tt++){const l=lt[Tt];l&&l.active!==!1&&yt(l,null,14)}}finally{Tt=0,lt.length=0,qs(),js=!1,Vl=null,(lt.length||Zi.length||es.length)&&Kr(t)}}let yi,zs=[];function Qr(t,s){var l,o;yi=t,yi?(yi.enabled=!0,zs.forEach(({event:d,args:_})=>yi.emit(d,..._)),zs=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((o=(l=window.navigator)===null||l===void 0?void 0:l.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(_=>{Qr(_,s)}),setTimeout(()=>{yi||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,zs=[])},3e3)):zs=[]}function Pm(t,s,...l){const o=t.vnode.props||ze;let d=l;const _=s.startsWith("update:"),f=_&&s.slice(7);if(f&&f in o){const h=`${f==="modelValue"?"model":f}Modifiers`,{number:c,trim:g}=o[h]||ze;g?d=l.map(v=>v.trim()):c&&(d=l.map(jt))}let m,a=o[m=Qi(s)]||o[m=Qi(rt(s))];!a&&_&&(a=o[m=Qi(Ct(s))]),a&&ut(a,t,6,d);const u=o[m+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[m])return;t.emitted[m]=!0,ut(u,t,6,d)}}function Xr(t,s,l=!1){const o=s.emitsCache,d=o.get(t);if(d!==void 0)return d;const _=t.emits;let f={},m=!1;if(!he(t)){const a=u=>{const h=Xr(u,s,!0);h&&(m=!0,Oe(f,h))};!l&&s.mixins.length&&s.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!_&&!m?(o.set(t,null),null):(ae(_)?_.forEach(a=>f[a]=null):Oe(f,_),o.set(t,f),f)}function ql(t,s){return!t||!ps(s)?!1:(s=s.slice(2).replace(/Once$/,""),Ee(t,s[0].toLowerCase()+s.slice(1))||Ee(t,Ct(s))||Ee(t,s))}let at=null,fn=null;function rs(t){const s=at;return at=t,fn=t&&t.type.__scopeId||null,s}function Cs(t){fn=t}function ys(){fn=null}const Mm=t=>i;function i(t,s=at,l){if(!s||t._n)return t;const o=(...d)=>{o._d&&el(-1);const _=rs(s),f=t(...d);return rs(_),o._d&&el(1),f};return o._n=!0,o._c=!0,o._d=!0,o}function Ls(t){const{type:s,vnode:l,proxy:o,withProxy:d,props:_,propsOptions:[f],slots:m,attrs:a,emit:u,render:h,renderCache:c,data:g,setupState:v,ctx:r,inheritAttrs:C}=t;let w,A;const p=rs(t);try{if(l.shapeFlag&4){const k=d||o;w=st(h.call(k,k,c,_,v,g,r)),A=a}else{const k=s;w=st(k.length>1?k(_,{attrs:a,slots:m,emit:u}):k(_,null)),A=s.props?a:Fm(a)}}catch(k){is.length=0,fi(k,t,1),w=e(Xe)}let $=w;if(A&&C!==!1){const k=Object.keys(A),{shapeFlag:x}=$;k.length&&x&7&&(f&&k.some(Al)&&(A=Im(A,f)),$=Jt($,A))}return l.dirs&&($.dirs=$.dirs?$.dirs.concat(l.dirs):l.dirs),l.transition&&($.transition=l.transition),w=$,rs(p),w}function Dm(t){let s;for(let l=0;l<t.length;l++){const o=t[l];if($t(o)){if(o.type!==Xe||o.children==="v-if"){if(s)return;s=o}}else return}return s}const Fm=t=>{let s;for(const l in t)(l==="class"||l==="style"||ps(l))&&((s||(s={}))[l]=t[l]);return s},Im=(t,s)=>{const l={};for(const o in t)(!Al(o)||!(o.slice(9)in s))&&(l[o]=t[o]);return l};function Nm(t,s,l){const{props:o,children:d,component:_}=t,{props:f,children:m,patchFlag:a}=s,u=_.emitsOptions;if(s.dirs||s.transition)return!0;if(l&&a>=0){if(a&1024)return!0;if(a&16)return o?wa(o,f,u):!!f;if(a&8){const h=s.dynamicProps;for(let c=0;c<h.length;c++){const g=h[c];if(f[g]!==o[g]&&!ql(u,g))return!0}}}else return(d||m)&&(!m||!m.$stable)?!0:o===f?!1:o?f?wa(o,f,u):!0:!!f;return!1}function wa(t,s,l){const o=Object.keys(s);if(o.length!==Object.keys(t).length)return!0;for(let d=0;d<o.length;d++){const _=o[d];if(s[_]!==t[_]&&!ql(l,_))return!0}return!1}function Jl({vnode:t,parent:s},l){for(;s&&s.subTree===t;)(t=s.vnode).el=l,s=s.parent}const Lm=t=>t.__isSuspense,Vm={name:"Suspense",__isSuspense:!0,process(t,s,l,o,d,_,f,m,a,u){t==null?Hm(s,l,o,d,_,f,m,a,u):jm(t,s,l,o,d,f,m,a,u)},hydrate:qm,create:Ul,normalize:Jm},Om=Vm;function ds(t,s){const l=t.props&&t.props[s];he(l)&&l()}function Hm(t,s,l,o,d,_,f,m,a){const{p:u,o:{createElement:h}}=a,c=h("div"),g=t.suspense=Ul(t,d,o,s,c,l,_,f,m,a);u(null,g.pendingBranch=t.ssContent,c,null,o,g,_,f),g.deps>0?(ds(t,"onPending"),ds(t,"onFallback"),u(null,t.ssFallback,s,l,o,null,_,f),Ti(g,t.ssFallback)):g.resolve()}function jm(t,s,l,o,d,_,f,m,{p:a,um:u,o:{createElement:h}}){const c=s.suspense=t.suspense;c.vnode=s,s.el=t.el;const g=s.ssContent,v=s.ssFallback,{activeBranch:r,pendingBranch:C,isInFallback:w,isHydrating:A}=c;if(C)c.pendingBranch=g,vt(g,C)?(a(C,g,c.hiddenContainer,null,d,c,_,f,m),c.deps<=0?c.resolve():w&&(a(r,v,l,o,d,null,_,f,m),Ti(c,v))):(c.pendingId++,A?(c.isHydrating=!1,c.activeBranch=C):u(C,d,c),c.deps=0,c.effects.length=0,c.hiddenContainer=h("div"),w?(a(null,g,c.hiddenContainer,null,d,c,_,f,m),c.deps<=0?c.resolve():(a(r,v,l,o,d,null,_,f,m),Ti(c,v))):r&&vt(g,r)?(a(r,g,l,o,d,c,_,f,m),c.resolve(!0)):(a(null,g,c.hiddenContainer,null,d,c,_,f,m),c.deps<=0&&c.resolve()));else if(r&&vt(g,r))a(r,g,l,o,d,c,_,f,m),Ti(c,g);else if(ds(s,"onPending"),c.pendingBranch=g,c.pendingId++,a(null,g,c.hiddenContainer,null,d,c,_,f,m),c.deps<=0)c.resolve();else{const{timeout:p,pendingId:$}=c;p>0?setTimeout(()=>{c.pendingId===$&&c.fallback(v)},p):p===0&&c.fallback(v)}}function Ul(t,s,l,o,d,_,f,m,a,u,h=!1){const{p:c,m:g,um:v,n:r,o:{parentNode:C,remove:w}}=u,A=jt(t.props&&t.props.timeout),p={vnode:t,parent:s,parentComponent:l,isSVG:f,container:o,hiddenContainer:d,anchor:_,deps:0,pendingId:0,timeout:typeof A=="number"?A:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:h,isUnmounted:!1,effects:[],resolve($=!1){const{vnode:k,activeBranch:x,pendingBranch:R,pendingId:z,effects:F,parentComponent:P,container:U}=p;if(p.isHydrating)p.isHydrating=!1;else if(!$){const ue=x&&R.transition&&R.transition.mode==="out-in";ue&&(x.transition.afterLeave=()=>{z===p.pendingId&&g(R,U,Ce,0)});let{anchor:Ce}=p;x&&(Ce=r(x),v(x,P,p,!0)),ue||g(R,U,Ce,0)}Ti(p,R),p.pendingBranch=null,p.isInFallback=!1;let Z=p.parent,N=!1;for(;Z;){if(Z.pendingBranch){Z.effects.push(...F),N=!0;break}Z=Z.parent}N||Hl(F),p.effects=[],ds(k,"onResolve")},fallback($){if(!p.pendingBranch)return;const{vnode:k,activeBranch:x,parentComponent:R,container:z,isSVG:F}=p;ds(k,"onFallback");const P=r(x),U=()=>{!p.isInFallback||(c(null,$,z,P,R,null,F,m,a),Ti(p,$))},Z=$.transition&&$.transition.mode==="out-in";Z&&(x.transition.afterLeave=U),p.isInFallback=!0,v(x,R,null,!0),Z||U()},move($,k,x){p.activeBranch&&g(p.activeBranch,$,k,x),p.container=$},next(){return p.activeBranch&&r(p.activeBranch)},registerDep($,k){const x=!!p.pendingBranch;x&&p.deps++;const R=$.vnode.el;$.asyncDep.catch(z=>{fi(z,$,0)}).then(z=>{if($.isUnmounted||p.isUnmounted||p.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:F}=$;sl($,z,!1),R&&(F.el=R);const P=!R&&$.subTree.el;k($,F,C(R||$.subTree.el),R?null:r($.subTree),p,f,a),P&&w(P),Jl($,F.el),x&&--p.deps===0&&p.resolve()})},unmount($,k){p.isUnmounted=!0,p.activeBranch&&v(p.activeBranch,l,$,k),p.pendingBranch&&v(p.pendingBranch,l,$,k)}};return p}function qm(t,s,l,o,d,_,f,m,a){const u=s.suspense=Ul(s,o,l,t.parentNode,document.createElement("div"),null,d,_,f,m,!0),h=a(t,u.pendingBranch=s.ssContent,l,u,_,f);return u.deps===0&&u.resolve(),h}function Jm(t){const{shapeFlag:s,children:l}=t,o=s&32;t.ssContent=$a(o?l.default:l),t.ssFallback=o?$a(l.fallback):e(Xe)}function $a(t){let s;if(he(t)){const l=zi&&t._c;l&&(t._d=!1,X()),t=t(),l&&(t._d=!0,s=wt,Sd())}return ae(t)&&(t=Dm(t)),t=st(t),s&&!t.dynamicChildren&&(t.dynamicChildren=s.filter(l=>l!==t)),t}function Zr(t,s){s&&s.pendingBranch?ae(t)?s.effects.push(...t):s.effects.push(t):Hl(t)}function Ti(t,s){t.activeBranch=s;const{vnode:l,parentComponent:o}=t,d=l.el=s.el;o&&o.subTree===l&&(o.vnode.el=d,Jl(o,d))}function We(t,s){if(Je){let l=Je.provides;const o=Je.parent&&Je.parent.provides;o===l&&(l=Je.provides=Object.create(o)),l[t]=s}}function Pe(t,s,l=!1){const o=Je||at;if(o){const d=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(d&&t in d)return d[t];if(arguments.length>1)return l&&he(s)?s.call(o.proxy):s}}function ed(t,s){return ws(t,null,s)}function td(t,s){return ws(t,null,{flush:"post"})}function Um(t,s){return ws(t,null,{flush:"sync"})}const Aa={};function tt(t,s,l){return ws(t,s,l)}function ws(t,s,{immediate:l,deep:o,flush:d,onTrack:_,onTrigger:f}=ze){const m=Je;let a,u=!1,h=!1;if(qe(t)?(a=()=>t.value,u=Ml(t)):ui(t)?(a=()=>t,o=!0):ae(t)?(h=!0,u=t.some(ui),a=()=>t.map(A=>{if(qe(A))return A.value;if(ui(A))return li(A);if(he(A))return yt(A,m,2)})):he(t)?s?a=()=>yt(t,m,2):a=()=>{if(!(m&&m.isUnmounted))return c&&c(),ut(t,m,3,[g])}:a=ht,s&&o){const A=a;a=()=>li(A())}let c,g=A=>{c=w.onStop=()=>{yt(A,m,4)}};if(Pi)return g=ht,s?l&&ut(s,m,3,[a(),h?[]:void 0,g]):a(),ht;let v=h?[]:Aa;const r=()=>{if(!!w.active)if(s){const A=w.run();(o||u||(h?A.some((p,$)=>as(p,v[$])):as(A,v)))&&(c&&c(),ut(s,m,3,[A,v===Aa?void 0:v,g]),v=A)}else w.run()};r.allowRecurse=!!s;let C;d==="sync"?C=r:d==="post"?C=()=>Ge(r,m&&m.suspense):C=()=>{!m||m.isMounted?zm(r):r()};const w=new bs(a,C);return s?l?r():v=w.run():d==="post"?Ge(w.run.bind(w),m&&m.suspense):w.run(),()=>{w.stop(),m&&m.scope&&Sl(m.scope.effects,w)}}function Ym(t,s,l){const o=this.proxy,d=He(t)?t.includes(".")?id(o,t):()=>o[t]:t.bind(o,o);let _;he(s)?_=s:(_=s.handler,l=s);const f=Je;Ut(this);const m=ws(d,_.bind(o),l);return f?Ut(f):Ot(),m}function id(t,s){const l=s.split(".");return()=>{let o=t;for(let d=0;d<l.length&&o;d++)o=o[l[d]];return o}}function li(t,s){if(!je(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),qe(t))li(t.value,s);else if(ae(t))for(let l=0;l<t.length;l++)li(t[l],s);else if(mi(t)||Ai(t))t.forEach(l=>{li(l,s)});else if(xr(t))for(const l in t)li(t[l],s);return t}function Yl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wt(()=>{t.isMounted=!0}),bn(()=>{t.isUnmounting=!0}),t}const mt=[Function,Array],Gm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},setup(t,{slots:s}){const l=Kt(),o=Yl();let d;return()=>{const _=s.default&&hn(s.default(),!0);if(!_||!_.length)return;const f=Ae(t),{mode:m}=f,a=_[0];if(o.isLeaving)return xn(a);const u=Sa(a);if(!u)return xn(a);const h=Bi(u,f,o,l);di(u,h);const c=l.subTree,g=c&&Sa(c);let v=!1;const{getTransitionKey:r}=u.type;if(r){const C=r();d===void 0?d=C:C!==d&&(d=C,v=!0)}if(g&&g.type!==Xe&&(!vt(u,g)||v)){const C=Bi(g,f,o,l);if(di(g,C),m==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,l.update()},xn(a);m==="in-out"&&u.type!==Xe&&(C.delayLeave=(w,A,p)=>{const $=sd(o,g);$[String(g.key)]=g,w._leaveCb=()=>{A(),w._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=p})}return a}}},Gl=Gm;function sd(t,s){const{leavingVNodes:l}=t;let o=l.get(s.type);return o||(o=Object.create(null),l.set(s.type,o)),o}function Bi(t,s,l,o){const{appear:d,mode:_,persisted:f=!1,onBeforeEnter:m,onEnter:a,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:c,onLeave:g,onAfterLeave:v,onLeaveCancelled:r,onBeforeAppear:C,onAppear:w,onAfterAppear:A,onAppearCancelled:p}=s,$=String(t.key),k=sd(l,t),x=(z,F)=>{z&&ut(z,o,9,F)},R={mode:_,persisted:f,beforeEnter(z){let F=m;if(!l.isMounted)if(d)F=C||m;else return;z._leaveCb&&z._leaveCb(!0);const P=k[$];P&&vt(t,P)&&P.el._leaveCb&&P.el._leaveCb(),x(F,[z])},enter(z){let F=a,P=u,U=h;if(!l.isMounted)if(d)F=w||a,P=A||u,U=p||h;else return;let Z=!1;const N=z._enterCb=ue=>{Z||(Z=!0,ue?x(U,[z]):x(P,[z]),R.delayedLeave&&R.delayedLeave(),z._enterCb=void 0)};F?(F(z,N),F.length<=1&&N()):N()},leave(z,F){const P=String(t.key);if(z._enterCb&&z._enterCb(!0),l.isUnmounting)return F();x(c,[z]);let U=!1;const Z=z._leaveCb=N=>{U||(U=!0,F(),N?x(r,[z]):x(v,[z]),z._leaveCb=void 0,k[P]===t&&delete k[P])};k[P]=t,g?(g(z,Z),g.length<=1&&Z()):Z()},clone(z){return Bi(z,s,l,o)}};return R}function xn(t){if($s(t))return t=Jt(t),t.children=null,t}function Sa(t){return $s(t)?t.children?t.children[0]:void 0:t}function di(t,s){t.shapeFlag&6&&t.component?di(t.component.subTree,s):t.shapeFlag&128?(t.ssContent.transition=s.clone(t.ssContent),t.ssFallback.transition=s.clone(t.ssFallback)):t.transition=s}function hn(t,s=!1){let l=[],o=0;for(let d=0;d<t.length;d++){const _=t[d];_.type===$e?(_.patchFlag&128&&o++,l=l.concat(hn(_.children,s))):(s||_.type!==Xe)&&l.push(_)}if(o>1)for(let d=0;d<l.length;d++)l[d].patchFlag=-2;return l}function E(t){return he(t)?{setup:t,name:t.name}:t}const cs=t=>!!t.type.__asyncLoader;function Wm(t){he(t)&&(t={loader:t});const{loader:s,loadingComponent:l,errorComponent:o,delay:d=200,timeout:_,suspensible:f=!0,onError:m}=t;let a=null,u,h=0;const c=()=>(h++,a=null,g()),g=()=>{let v;return a||(v=a=s().catch(r=>{if(r=r instanceof Error?r:new Error(String(r)),m)return new Promise((C,w)=>{m(r,()=>C(c()),()=>w(r),h+1)});throw r}).then(r=>v!==a&&a?a:(r&&(r.__esModule||r[Symbol.toStringTag]==="Module")&&(r=r.default),u=r,r)))};return E({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const v=Je;if(u)return()=>En(u,v);const r=p=>{a=null,fi(p,v,13,!o)};if(f&&v.suspense||Pi)return g().then(p=>()=>En(p,v)).catch(p=>(r(p),()=>o?e(o,{error:p}):null));const C=L(!1),w=L(),A=L(!!d);return d&&setTimeout(()=>{A.value=!1},d),_!=null&&setTimeout(()=>{if(!C.value&&!w.value){const p=new Error(`Async component timed out after ${_}ms.`);r(p),w.value=p}},_),g().then(()=>{C.value=!0,v.parent&&$s(v.parent.vnode)&&Ol(v.parent.update)}).catch(p=>{r(p),w.value=p}),()=>{if(C.value&&u)return En(u,v);if(w.value&&o)return e(o,{error:w.value});if(l&&!A.value)return e(l)}}})}function En(t,{vnode:{ref:s,props:l,children:o}}){const d=e(t,l,o);return d.ref=s,d}const $s=t=>t.type.__isKeepAlive,Km={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:s}){const l=Kt(),o=l.ctx;if(!o.renderer)return s.default;const d=new Map,_=new Set;let f=null;const m=l.suspense,{renderer:{p:a,m:u,um:h,o:{createElement:c}}}=o,g=c("div");o.activate=(p,$,k,x,R)=>{const z=p.component;u(p,$,k,0,m),a(z.vnode,p,$,k,z,m,x,p.slotScopeIds,R),Ge(()=>{z.isDeactivated=!1,z.a&&Si(z.a);const F=p.props&&p.props.onVnodeMounted;F&&et(F,z.parent,p)},m)},o.deactivate=p=>{const $=p.component;u(p,g,null,1,m),Ge(()=>{$.da&&Si($.da);const k=p.props&&p.props.onVnodeUnmounted;k&&et(k,$.parent,p),$.isDeactivated=!0},m)};function v(p){Bn(p),h(p,l,m,!0)}function r(p){d.forEach(($,k)=>{const x=Ws($.type);x&&(!p||!p(x))&&C(k)})}function C(p){const $=d.get(p);!f||$.type!==f.type?v($):f&&Bn(f),d.delete(p),_.delete(p)}tt(()=>[t.include,t.exclude],([p,$])=>{p&&r(k=>Yi(p,k)),$&&r(k=>!Yi($,k))},{flush:"post",deep:!0});let w=null;const A=()=>{w!=null&&d.set(w,Rn(l.subTree))};return Wt(A),gn(A),bn(()=>{d.forEach(p=>{const{subTree:$,suspense:k}=l,x=Rn($);if(p.type===x.type){Bn(x);const R=x.component.da;R&&Ge(R,k);return}v(p)})}),()=>{if(w=null,!s.default)return null;const p=s.default(),$=p[0];if(p.length>1)return f=null,p;if(!$t($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return f=null,$;let k=Rn($);const x=k.type,R=Ws(cs(k)?k.type.__asyncResolved||{}:x),{include:z,exclude:F,max:P}=t;if(z&&(!R||!Yi(z,R))||F&&R&&Yi(F,R))return f=k,$;const U=k.key==null?x:k.key,Z=d.get(U);return k.el&&(k=Jt(k),$.shapeFlag&128&&($.ssContent=k)),w=U,Z?(k.el=Z.el,k.component=Z.component,k.transition&&di(k,k.transition),k.shapeFlag|=512,_.delete(U),_.add(U)):(_.add(U),P&&_.size>parseInt(P,10)&&C(_.values().next().value)),k.shapeFlag|=256,f=k,$}}},Qm=Km;function Yi(t,s){return ae(t)?t.some(l=>Yi(l,s)):He(t)?t.split(",").includes(s):t.test?t.test(s):!1}function nd(t,s){ad(t,"a",s)}function ld(t,s){ad(t,"da",s)}function ad(t,s,l=Je){const o=t.__wdc||(t.__wdc=()=>{let d=l;for(;d;){if(d.isDeactivated)return;d=d.parent}return t()});if(pn(s,o,l),l){let d=l.parent;for(;d&&d.parent;)$s(d.parent.vnode)&&Xm(o,s,l,d),d=d.parent}}function Xm(t,s,l,o){const d=pn(s,t,o,!0);hi(()=>{Sl(o[s],d)},l)}function Bn(t){let s=t.shapeFlag;s&256&&(s-=256),s&512&&(s-=512),t.shapeFlag=s}function Rn(t){return t.shapeFlag&128?t.ssContent:t}function pn(t,s,l=Je,o=!1){if(l){const d=l[t]||(l[t]=[]),_=s.__weh||(s.__weh=(...f)=>{if(l.isUnmounted)return;_i(),Ut(l);const m=ut(s,l,t,f);return Ot(),Gt(),m});return o?d.unshift(_):d.push(_),_}}const Rt=t=>(s,l=Je)=>(!Pi||t==="sp")&&pn(t,s,l),od=Rt("bm"),Wt=Rt("m"),ud=Rt("bu"),gn=Rt("u"),bn=Rt("bum"),hi=Rt("um"),rd=Rt("sp"),dd=Rt("rtg"),cd=Rt("rtc");function md(t,s=Je){pn("ec",t,s)}let Kn=!0;function Zm(t){const s=fd(t),l=t.proxy,o=t.ctx;Kn=!1,s.beforeCreate&&ka(s.beforeCreate,t,"bc");const{data:d,computed:_,methods:f,watch:m,provide:a,inject:u,created:h,beforeMount:c,mounted:g,beforeUpdate:v,updated:r,activated:C,deactivated:w,beforeDestroy:A,beforeUnmount:p,destroyed:$,unmounted:k,render:x,renderTracked:R,renderTriggered:z,errorCaptured:F,serverPrefetch:P,expose:U,inheritAttrs:Z,components:N,directives:ue,filters:Ce}=s;if(u&&e_(u,o,null,t.appContext.config.unwrapInjectedRef),f)for(const re in f){const se=f[re];he(se)&&(o[re]=se.bind(l))}if(d){const re=d.call(l,l);je(re)&&(t.data=Bt(re))}if(Kn=!0,_)for(const re in _){const se=_[re],we=he(se)?se.bind(l,l):he(se.get)?se.get.bind(l,l):ht,Ne=!he(se)&&he(se.set)?se.set.bind(l):ht,Ye=D({get:we,set:Ne});Object.defineProperty(o,re,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Le=>Ye.value=Le})}if(m)for(const re in m)_d(m[re],o,l,re);if(a){const re=he(a)?a.call(l):a;Reflect.ownKeys(re).forEach(se=>{We(se,re[se])})}h&&ka(h,t,"c");function te(re,se){ae(se)?se.forEach(we=>re(we.bind(l))):se&&re(se.bind(l))}if(te(od,c),te(Wt,g),te(ud,v),te(gn,r),te(nd,C),te(ld,w),te(md,F),te(cd,R),te(dd,z),te(bn,p),te(hi,k),te(rd,P),ae(U))if(U.length){const re=t.exposed||(t.exposed={});U.forEach(se=>{Object.defineProperty(re,se,{get:()=>l[se],set:we=>l[se]=we})})}else t.exposed||(t.exposed={});x&&t.render===ht&&(t.render=x),Z!=null&&(t.inheritAttrs=Z),N&&(t.components=N),ue&&(t.directives=ue)}function e_(t,s,l=ht,o=!1){ae(t)&&(t=Qn(t));for(const d in t){const _=t[d];let f;je(_)?"default"in _?f=Pe(_.from||d,_.default,!0):f=Pe(_.from||d):f=Pe(_),qe(f)&&o?Object.defineProperty(s,d,{enumerable:!0,configurable:!0,get:()=>f.value,set:m=>f.value=m}):s[d]=f}}function ka(t,s,l){ut(ae(t)?t.map(o=>o.bind(s.proxy)):t.bind(s.proxy),s,l)}function _d(t,s,l,o){const d=o.includes(".")?id(l,o):()=>l[o];if(He(t)){const _=s[t];he(_)&&tt(d,_)}else if(he(t))tt(d,t.bind(l));else if(je(t))if(ae(t))t.forEach(_=>_d(_,s,l,o));else{const _=he(t.handler)?t.handler.bind(l):s[t.handler];he(_)&&tt(d,_,t)}}function fd(t){const s=t.type,{mixins:l,extends:o}=s,{mixins:d,optionsCache:_,config:{optionMergeStrategies:f}}=t.appContext,m=_.get(s);let a;return m?a=m:!d.length&&!l&&!o?a=s:(a={},d.length&&d.forEach(u=>Js(a,u,f,!0)),Js(a,s,f)),_.set(s,a),a}function Js(t,s,l,o=!1){const{mixins:d,extends:_}=s;_&&Js(t,_,l,!0),d&&d.forEach(f=>Js(t,f,l,!0));for(const f in s)if(!(o&&f==="expose")){const m=t_[f]||l&&l[f];t[f]=m?m(t[f],s[f]):s[f]}return t}const t_={data:Ta,props:ii,emits:ii,methods:ii,computed:ii,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:ii,directives:ii,watch:s_,provide:Ta,inject:i_};function Ta(t,s){return s?t?function(){return Oe(he(t)?t.call(this,this):t,he(s)?s.call(this,this):s)}:s:t}function i_(t,s){return ii(Qn(t),Qn(s))}function Qn(t){if(ae(t)){const s={};for(let l=0;l<t.length;l++)s[t[l]]=t[l];return s}return t}function Qe(t,s){return t?[...new Set([].concat(t,s))]:s}function ii(t,s){return t?Oe(Oe(Object.create(null),t),s):s}function s_(t,s){if(!t)return s;if(!s)return t;const l=Oe(Object.create(null),t);for(const o in s)l[o]=Qe(t[o],s[o]);return l}function n_(t,s,l,o=!1){const d={},_={};Os(_,yn,1),t.propsDefaults=Object.create(null),hd(t,s,d,_);for(const f in t.propsOptions[0])f in d||(d[f]=void 0);l?t.props=o?d:Hr(d):t.type.props?t.props=d:t.props=_,t.attrs=_}function l_(t,s,l,o){const{props:d,attrs:_,vnode:{patchFlag:f}}=t,m=Ae(d),[a]=t.propsOptions;let u=!1;if((o||f>0)&&!(f&16)){if(f&8){const h=t.vnode.dynamicProps;for(let c=0;c<h.length;c++){let g=h[c];const v=s[g];if(a)if(Ee(_,g))v!==_[g]&&(_[g]=v,u=!0);else{const r=rt(g);d[r]=Xn(a,m,r,v,t,!1)}else v!==_[g]&&(_[g]=v,u=!0)}}}else{hd(t,s,d,_)&&(u=!0);let h;for(const c in m)(!s||!Ee(s,c)&&((h=Ct(c))===c||!Ee(s,h)))&&(a?l&&(l[c]!==void 0||l[h]!==void 0)&&(d[c]=Xn(a,m,c,void 0,t,!0)):delete d[c]);if(_!==m)for(const c in _)(!s||!Ee(s,c)&&!0)&&(delete _[c],u=!0)}u&&Et(t,"set","$attrs")}function hd(t,s,l,o){const[d,_]=t.propsOptions;let f=!1,m;if(s)for(let a in s){if(Ki(a))continue;const u=s[a];let h;d&&Ee(d,h=rt(a))?!_||!_.includes(h)?l[h]=u:(m||(m={}))[h]=u:ql(t.emitsOptions,a)||(!(a in o)||u!==o[a])&&(o[a]=u,f=!0)}if(_){const a=Ae(l),u=m||ze;for(let h=0;h<_.length;h++){const c=_[h];l[c]=Xn(d,a,c,u[c],t,!Ee(u,c))}}return f}function Xn(t,s,l,o,d,_){const f=t[l];if(f!=null){const m=Ee(f,"default");if(m&&o===void 0){const a=f.default;if(f.type!==Function&&he(a)){const{propsDefaults:u}=d;l in u?o=u[l]:(Ut(d),o=u[l]=a.call(null,s),Ot())}else o=a}f[0]&&(_&&!m?o=!1:f[1]&&(o===""||o===Ct(l))&&(o=!0))}return o}function pd(t,s,l=!1){const o=s.propsCache,d=o.get(t);if(d)return d;const _=t.props,f={},m=[];let a=!1;if(!he(t)){const h=c=>{a=!0;const[g,v]=pd(c,s,!0);Oe(f,g),v&&m.push(...v)};!l&&s.mixins.length&&s.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!_&&!a)return o.set(t,$i),$i;if(ae(_))for(let h=0;h<_.length;h++){const c=rt(_[h]);xa(c)&&(f[c]=ze)}else if(_)for(const h in _){const c=rt(h);if(xa(c)){const g=_[h],v=f[c]=ae(g)||he(g)?{type:g}:g;if(v){const r=Ra(Boolean,v.type),C=Ra(String,v.type);v[0]=r>-1,v[1]=C<0||r<C,(r>-1||Ee(v,"default"))&&m.push(c)}}}const u=[f,m];return o.set(t,u),u}function xa(t){return t[0]!=="$"}function Ea(t){const s=t&&t.toString().match(/^\s*function (\w+)/);return s?s[1]:t===null?"null":""}function Ba(t,s){return Ea(t)===Ea(s)}function Ra(t,s){return ae(s)?s.findIndex(l=>Ba(l,t)):he(s)&&Ba(s,t)?0:-1}const gd=t=>t[0]==="_"||t==="$stable",Wl=t=>ae(t)?t.map(st):[st(t)],a_=(t,s,l)=>{const o=i((...d)=>Wl(s(...d)),l);return o._c=!1,o},bd=(t,s,l)=>{const o=t._ctx;for(const d in t){if(gd(d))continue;const _=t[d];if(he(_))s[d]=a_(d,_,o);else if(_!=null){const f=Wl(_);s[d]=()=>f}}},vd=(t,s)=>{const l=Wl(s);t.slots.default=()=>l},o_=(t,s)=>{if(t.vnode.shapeFlag&32){const l=s._;l?(t.slots=Ae(s),Os(s,"_",l)):bd(s,t.slots={})}else t.slots={},s&&vd(t,s);Os(t.slots,yn,1)},u_=(t,s,l)=>{const{vnode:o,slots:d}=t;let _=!0,f=ze;if(o.shapeFlag&32){const m=s._;m?l&&m===1?_=!1:(Oe(d,s),!l&&m===1&&delete d._):(_=!s.$stable,bd(s,d)),f=s}else s&&(vd(t,s),f={default:1});if(_)for(const m in d)!gd(m)&&!(m in f)&&delete d[m]};function vn(t,s){const l=at;if(l===null)return t;const o=l.proxy,d=t.dirs||(t.dirs=[]);for(let _=0;_<s.length;_++){let[f,m,a,u=ze]=s[_];he(f)&&(f={mounted:f,updated:f}),f.deep&&li(m),d.push({dir:f,instance:o,value:m,oldValue:void 0,arg:a,modifiers:u})}return t}function gt(t,s,l,o){const d=t.dirs,_=s&&s.dirs;for(let f=0;f<d.length;f++){const m=d[f];_&&(m.oldValue=_[f].value);let a=m.dir[o];a&&(_i(),ut(a,l,8,[t.el,m,t,s]),Gt())}}function Cd(){return{app:null,config:{isNativeTag:Bc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r_=0;function d_(t,s){return function(o,d=null){d!=null&&!je(d)&&(d=null);const _=Cd(),f=new Set;let m=!1;const a=_.app={_uid:r_++,_component:o,_props:d,_container:null,_context:_,_instance:null,version:Od,get config(){return _.config},set config(u){},use(u,...h){return f.has(u)||(u&&he(u.install)?(f.add(u),u.install(a,...h)):he(u)&&(f.add(u),u(a,...h))),a},mixin(u){return _.mixins.includes(u)||_.mixins.push(u),a},component(u,h){return h?(_.components[u]=h,a):_.components[u]},directive(u,h){return h?(_.directives[u]=h,a):_.directives[u]},mount(u,h,c){if(!m){const g=e(o,d);return g.appContext=_,h&&s?s(g,u):t(g,u,c),m=!0,a._container=u,u.__vue_app__=a,ta(g.component)||g.component.proxy}},unmount(){m&&(t(null,a._container),delete a._container.__vue_app__)},provide(u,h){return _.provides[u]=h,a}};return a}}function Us(t,s,l,o,d=!1){if(ae(t)){t.forEach((g,v)=>Us(g,s&&(ae(s)?s[v]:s),l,o,d));return}if(cs(o)&&!d)return;const _=o.shapeFlag&4?ta(o.component)||o.component.proxy:o.el,f=d?null:_,{i:m,r:a}=t,u=s&&s.r,h=m.refs===ze?m.refs={}:m.refs,c=m.setupState;if(u!=null&&u!==a&&(He(u)?(h[u]=null,Ee(c,u)&&(c[u]=null)):qe(u)&&(u.value=null)),he(a))yt(a,m,12,[f,h]);else{const g=He(a),v=qe(a);if(g||v){const r=()=>{if(t.f){const C=g?h[a]:a.value;d?ae(C)&&Sl(C,_):ae(C)?C.includes(_)||C.push(_):g?h[a]=[_]:(a.value=[_],t.k&&(h[t.k]=a.value))}else g?(h[a]=f,Ee(c,a)&&(c[a]=f)):qe(a)&&(a.value=f,t.k&&(h[t.k]=f))};f?(r.id=-1,Ge(r,l)):r()}}}let Mt=!1;const Ps=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",zn=t=>t.nodeType===8;function c_(t){const{mt:s,p:l,o:{patchProp:o,nextSibling:d,parentNode:_,remove:f,insert:m,createComment:a}}=t,u=(w,A)=>{if(!A.hasChildNodes()){l(null,w,A),qs();return}Mt=!1,h(A.firstChild,w,null,null,null),qs(),Mt&&console.error("Hydration completed but contains mismatches.")},h=(w,A,p,$,k,x=!1)=>{const R=zn(w)&&w.data==="[",z=()=>r(w,A,p,$,k,R),{type:F,ref:P,shapeFlag:U}=A,Z=w.nodeType;A.el=w;let N=null;switch(F){case Ri:Z!==3?N=z():(w.data!==A.children&&(Mt=!0,w.data=A.children),N=d(w));break;case Xe:Z!==8||R?N=z():N=d(w);break;case ri:if(Z!==1)N=z();else{N=w;const ue=!A.children.length;for(let Ce=0;Ce<A.staticCount;Ce++)ue&&(A.children+=N.outerHTML),Ce===A.staticCount-1&&(A.anchor=N),N=d(N);return N}break;case $e:R?N=v(w,A,p,$,k,x):N=z();break;default:if(U&1)Z!==1||A.type.toLowerCase()!==w.tagName.toLowerCase()?N=z():N=c(w,A,p,$,k,x);else if(U&6){A.slotScopeIds=k;const ue=_(w);if(s(A,ue,null,p,$,Ps(ue),x),N=R?C(w):d(w),cs(A)){let Ce;R?(Ce=e($e),Ce.anchor=N?N.previousSibling:ue.lastChild):Ce=w.nodeType===3?n(""):e("div"),Ce.el=w,A.component.subTree=Ce}}else U&64?Z!==8?N=z():N=A.type.hydrate(w,A,p,$,k,x,t,g):U&128&&(N=A.type.hydrate(w,A,p,$,Ps(_(w)),k,x,t,h))}return P!=null&&Us(P,null,$,A),N},c=(w,A,p,$,k,x)=>{x=x||!!A.dynamicChildren;const{type:R,props:z,patchFlag:F,shapeFlag:P,dirs:U}=A,Z=R==="input"&&U||R==="option";if(Z||F!==-1){if(U&&gt(A,null,p,"created"),z)if(Z||!x||F&48)for(const ue in z)(Z&&ue.endsWith("value")||ps(ue)&&!Ki(ue))&&o(w,ue,null,z[ue],!1,void 0,p);else z.onClick&&o(w,"onClick",null,z.onClick,!1,void 0,p);let N;if((N=z&&z.onVnodeBeforeMount)&&et(N,p,A),U&&gt(A,null,p,"beforeMount"),((N=z&&z.onVnodeMounted)||U)&&Zr(()=>{N&&et(N,p,A),U&&gt(A,null,p,"mounted")},$),P&16&&!(z&&(z.innerHTML||z.textContent))){let ue=g(w.firstChild,A,w,p,$,k,x);for(;ue;){Mt=!0;const Ce=ue;ue=ue.nextSibling,f(Ce)}}else P&8&&w.textContent!==A.children&&(Mt=!0,w.textContent=A.children)}return w.nextSibling},g=(w,A,p,$,k,x,R)=>{R=R||!!A.dynamicChildren;const z=A.children,F=z.length;for(let P=0;P<F;P++){const U=R?z[P]:z[P]=st(z[P]);if(w)w=h(w,U,$,k,x,R);else{if(U.type===Ri&&!U.children)continue;Mt=!0,l(null,U,p,null,$,k,Ps(p),x)}}return w},v=(w,A,p,$,k,x)=>{const{slotScopeIds:R}=A;R&&(k=k?k.concat(R):R);const z=_(w),F=g(d(w),A,z,p,$,k,x);return F&&zn(F)&&F.data==="]"?d(A.anchor=F):(Mt=!0,m(A.anchor=a("]"),z,F),F)},r=(w,A,p,$,k,x)=>{if(Mt=!0,A.el=null,x){const F=C(w);for(;;){const P=d(w);if(P&&P!==F)f(P);else break}}const R=d(w),z=_(w);return f(w),l(null,A,z,R,p,$,Ps(z),k),R},C=w=>{let A=0;for(;w;)if(w=d(w),w&&zn(w)&&(w.data==="["&&A++,w.data==="]")){if(A===0)return d(w);A--}return w};return[u,h]}const Ge=Zr;function yd(t){return $d(t)}function wd(t){return $d(t,c_)}function $d(t,s){const l=Fc();l.__VUE__=!0;const{insert:o,remove:d,patchProp:_,createElement:f,createText:m,createComment:a,setText:u,setElementText:h,parentNode:c,nextSibling:g,setScopeId:v=ht,cloneNode:r,insertStaticContent:C}=t,w=(T,B,M,H=null,O=null,K=null,ee=!1,G=null,Q=!!B.dynamicChildren)=>{if(T===B)return;T&&!vt(T,B)&&(H=ne(T),Ke(T,O,K,!0),T=null),B.patchFlag===-2&&(Q=!1,B.dynamicChildren=null);const{type:q,ref:de,shapeFlag:le}=B;switch(q){case Ri:A(T,B,M,H);break;case Xe:p(T,B,M,H);break;case ri:T==null&&$(B,M,H,ee);break;case $e:ue(T,B,M,H,O,K,ee,G,Q);break;default:le&1?R(T,B,M,H,O,K,ee,G,Q):le&6?Ce(T,B,M,H,O,K,ee,G,Q):(le&64||le&128)&&q.process(T,B,M,H,O,K,ee,G,Q,Re)}de!=null&&O&&Us(de,T&&T.ref,K,B||T,!B)},A=(T,B,M,H)=>{if(T==null)o(B.el=m(B.children),M,H);else{const O=B.el=T.el;B.children!==T.children&&u(O,B.children)}},p=(T,B,M,H)=>{T==null?o(B.el=a(B.children||""),M,H):B.el=T.el},$=(T,B,M,H)=>{[T.el,T.anchor]=C(T.children,B,M,H,T.el,T.anchor)},k=({el:T,anchor:B},M,H)=>{let O;for(;T&&T!==B;)O=g(T),o(T,M,H),T=O;o(B,M,H)},x=({el:T,anchor:B})=>{let M;for(;T&&T!==B;)M=g(T),d(T),T=M;d(B)},R=(T,B,M,H,O,K,ee,G,Q)=>{ee=ee||B.type==="svg",T==null?z(B,M,H,O,K,ee,G,Q):U(T,B,O,K,ee,G,Q)},z=(T,B,M,H,O,K,ee,G)=>{let Q,q;const{type:de,props:le,shapeFlag:ce,transition:pe,patchFlag:Te,dirs:Ve}=T;if(T.el&&r!==void 0&&Te===-1)Q=T.el=r(T.el);else{if(Q=T.el=f(T.type,K,le&&le.is,le),ce&8?h(Q,T.children):ce&16&&P(T.children,Q,null,H,O,K&&de!=="foreignObject",ee,G),Ve&&gt(T,null,H,"created"),le){for(const Ie in le)Ie!=="value"&&!Ki(Ie)&&_(Q,Ie,null,le[Ie],K,T.children,H,O,W);"value"in le&&_(Q,"value",null,le.value),(q=le.onVnodeBeforeMount)&&et(q,H,T)}F(Q,T,T.scopeId,ee,H)}Ve&&gt(T,null,H,"beforeMount");const Me=(!O||O&&!O.pendingBranch)&&pe&&!pe.persisted;Me&&pe.beforeEnter(Q),o(Q,B,M),((q=le&&le.onVnodeMounted)||Me||Ve)&&Ge(()=>{q&&et(q,H,T),Me&&pe.enter(Q),Ve&&gt(T,null,H,"mounted")},O)},F=(T,B,M,H,O)=>{if(M&&v(T,M),H)for(let K=0;K<H.length;K++)v(T,H[K]);if(O){let K=O.subTree;if(B===K){const ee=O.vnode;F(T,ee,ee.scopeId,ee.slotScopeIds,O.parent)}}},P=(T,B,M,H,O,K,ee,G,Q=0)=>{for(let q=Q;q<T.length;q++){const de=T[q]=G?Nt(T[q]):st(T[q]);w(null,de,B,M,H,O,K,ee,G)}},U=(T,B,M,H,O,K,ee)=>{const G=B.el=T.el;let{patchFlag:Q,dynamicChildren:q,dirs:de}=B;Q|=T.patchFlag&16;const le=T.props||ze,ce=B.props||ze;let pe;M&&Xt(M,!1),(pe=ce.onVnodeBeforeUpdate)&&et(pe,M,B,T),de&&gt(B,T,M,"beforeUpdate"),M&&Xt(M,!0);const Te=O&&B.type!=="foreignObject";if(q?Z(T.dynamicChildren,q,G,M,H,Te,K):ee||we(T,B,G,null,M,H,Te,K,!1),Q>0){if(Q&16)N(G,B,le,ce,M,H,O);else if(Q&2&&le.class!==ce.class&&_(G,"class",null,ce.class,O),Q&4&&_(G,"style",le.style,ce.style,O),Q&8){const Ve=B.dynamicProps;for(let Me=0;Me<Ve.length;Me++){const Ie=Ve[Me],ft=le[Ie],pi=ce[Ie];(pi!==ft||Ie==="value")&&_(G,Ie,ft,pi,O,T.children,M,H,W)}}Q&1&&T.children!==B.children&&h(G,B.children)}else!ee&&q==null&&N(G,B,le,ce,M,H,O);((pe=ce.onVnodeUpdated)||de)&&Ge(()=>{pe&&et(pe,M,B,T),de&&gt(B,T,M,"updated")},H)},Z=(T,B,M,H,O,K,ee)=>{for(let G=0;G<B.length;G++){const Q=T[G],q=B[G],de=Q.el&&(Q.type===$e||!vt(Q,q)||Q.shapeFlag&70)?c(Q.el):M;w(Q,q,de,null,H,O,K,ee,!0)}},N=(T,B,M,H,O,K,ee)=>{if(M!==H){for(const G in H){if(Ki(G))continue;const Q=H[G],q=M[G];Q!==q&&G!=="value"&&_(T,G,q,Q,ee,B.children,O,K,W)}if(M!==ze)for(const G in M)!Ki(G)&&!(G in H)&&_(T,G,M[G],null,ee,B.children,O,K,W);"value"in H&&_(T,"value",M.value,H.value)}},ue=(T,B,M,H,O,K,ee,G,Q)=>{const q=B.el=T?T.el:m(""),de=B.anchor=T?T.anchor:m("");let{patchFlag:le,dynamicChildren:ce,slotScopeIds:pe}=B;pe&&(G=G?G.concat(pe):pe),T==null?(o(q,M,H),o(de,M,H),P(B.children,M,de,O,K,ee,G,Q)):le>0&&le&64&&ce&&T.dynamicChildren?(Z(T.dynamicChildren,ce,M,O,K,ee,G),(B.key!=null||O&&B===O.subTree)&&Kl(T,B,!0)):we(T,B,M,de,O,K,ee,G,Q)},Ce=(T,B,M,H,O,K,ee,G,Q)=>{B.slotScopeIds=G,T==null?B.shapeFlag&512?O.ctx.activate(B,M,H,ee,Q):V(B,M,H,O,K,ee,Q):te(T,B,Q)},V=(T,B,M,H,O,K,ee)=>{const G=T.component=zd(T,H,O);if($s(T)&&(G.ctx.renderer=Re),Md(G),G.asyncDep){if(O&&O.registerDep(G,re),!T.el){const Q=G.subTree=e(Xe);p(null,Q,B,M)}return}re(G,T,B,M,O,K,ee)},te=(T,B,M)=>{const H=B.component=T.component;if(Nm(T,B,M))if(H.asyncDep&&!H.asyncResolved){se(H,B,M);return}else H.next=B,Rm(H.update),H.update();else B.component=T.component,B.el=T.el,H.vnode=B},re=(T,B,M,H,O,K,ee)=>{const G=()=>{if(T.isMounted){let{next:de,bu:le,u:ce,parent:pe,vnode:Te}=T,Ve=de,Me;Xt(T,!1),de?(de.el=Te.el,se(T,de,ee)):de=Te,le&&Si(le),(Me=de.props&&de.props.onVnodeBeforeUpdate)&&et(Me,pe,de,Te),Xt(T,!0);const Ie=Ls(T),ft=T.subTree;T.subTree=Ie,w(ft,Ie,c(ft.el),ne(ft),T,O,K),de.el=Ie.el,Ve===null&&Jl(T,Ie.el),ce&&Ge(ce,O),(Me=de.props&&de.props.onVnodeUpdated)&&Ge(()=>et(Me,pe,de,Te),O)}else{let de;const{el:le,props:ce}=B,{bm:pe,m:Te,parent:Ve}=T,Me=cs(B);if(Xt(T,!1),pe&&Si(pe),!Me&&(de=ce&&ce.onVnodeBeforeMount)&&et(de,Ve,B),Xt(T,!0),le&&be){const Ie=()=>{T.subTree=Ls(T),be(le,T.subTree,T,O,null)};Me?B.type.__asyncLoader().then(()=>!T.isUnmounted&&Ie()):Ie()}else{const Ie=T.subTree=Ls(T);w(null,Ie,M,H,T,O,K),B.el=Ie.el}if(Te&&Ge(Te,O),!Me&&(de=ce&&ce.onVnodeMounted)){const Ie=B;Ge(()=>et(de,Ve,Ie),O)}B.shapeFlag&256&&T.a&&Ge(T.a,O),T.isMounted=!0,B=M=H=null}},Q=T.effect=new bs(G,()=>Ol(T.update),T.scope),q=T.update=Q.run.bind(Q);q.id=T.uid,Xt(T,!0),q()},se=(T,B,M)=>{B.component=T;const H=T.vnode.props;T.vnode=B,T.next=null,l_(T,B.props,H,M),u_(T,B.children,M),_i(),jl(void 0,T.update),Gt()},we=(T,B,M,H,O,K,ee,G,Q=!1)=>{const q=T&&T.children,de=T?T.shapeFlag:0,le=B.children,{patchFlag:ce,shapeFlag:pe}=B;if(ce>0){if(ce&128){Ye(q,le,M,H,O,K,ee,G,Q);return}else if(ce&256){Ne(q,le,M,H,O,K,ee,G,Q);return}}pe&8?(de&16&&W(q,O,K),le!==q&&h(M,le)):de&16?pe&16?Ye(q,le,M,H,O,K,ee,G,Q):W(q,O,K,!0):(de&8&&h(M,""),pe&16&&P(le,M,H,O,K,ee,G,Q))},Ne=(T,B,M,H,O,K,ee,G,Q)=>{T=T||$i,B=B||$i;const q=T.length,de=B.length,le=Math.min(q,de);let ce;for(ce=0;ce<le;ce++){const pe=B[ce]=Q?Nt(B[ce]):st(B[ce]);w(T[ce],pe,M,null,O,K,ee,G,Q)}q>de?W(T,O,K,!0,!1,le):P(B,M,H,O,K,ee,G,Q,le)},Ye=(T,B,M,H,O,K,ee,G,Q)=>{let q=0;const de=B.length;let le=T.length-1,ce=de-1;for(;q<=le&&q<=ce;){const pe=T[q],Te=B[q]=Q?Nt(B[q]):st(B[q]);if(vt(pe,Te))w(pe,Te,M,null,O,K,ee,G,Q);else break;q++}for(;q<=le&&q<=ce;){const pe=T[le],Te=B[ce]=Q?Nt(B[ce]):st(B[ce]);if(vt(pe,Te))w(pe,Te,M,null,O,K,ee,G,Q);else break;le--,ce--}if(q>le){if(q<=ce){const pe=ce+1,Te=pe<de?B[pe].el:H;for(;q<=ce;)w(null,B[q]=Q?Nt(B[q]):st(B[q]),M,Te,O,K,ee,G,Q),q++}}else if(q>ce)for(;q<=le;)Ke(T[q],O,K,!0),q++;else{const pe=q,Te=q,Ve=new Map;for(q=Te;q<=ce;q++){const it=B[q]=Q?Nt(B[q]):st(B[q]);it.key!=null&&Ve.set(it.key,q)}let Me,Ie=0;const ft=ce-Te+1;let pi=!1,ca=0;const Vi=new Array(ft);for(q=0;q<ft;q++)Vi[q]=0;for(q=pe;q<=le;q++){const it=T[q];if(Ie>=ft){Ke(it,O,K,!0);continue}let pt;if(it.key!=null)pt=Ve.get(it.key);else for(Me=Te;Me<=ce;Me++)if(Vi[Me-Te]===0&&vt(it,B[Me])){pt=Me;break}pt===void 0?Ke(it,O,K,!0):(Vi[pt-Te]=q+1,pt>=ca?ca=pt:pi=!0,w(it,B[pt],M,null,O,K,ee,G,Q),Ie++)}const ma=pi?m_(Vi):$i;for(Me=ma.length-1,q=ft-1;q>=0;q--){const it=Te+q,pt=B[it],_a=it+1<de?B[it+1].el:H;Vi[q]===0?w(null,pt,M,_a,O,K,ee,G,Q):pi&&(Me<0||q!==ma[Me]?Le(pt,M,_a,2):Me--)}}},Le=(T,B,M,H,O=null)=>{const{el:K,type:ee,transition:G,children:Q,shapeFlag:q}=T;if(q&6){Le(T.component.subTree,B,M,H);return}if(q&128){T.suspense.move(B,M,H);return}if(q&64){ee.move(T,B,M,Re);return}if(ee===$e){o(K,B,M);for(let le=0;le<Q.length;le++)Le(Q[le],B,M,H);o(T.anchor,B,M);return}if(ee===ri){k(T,B,M);return}if(H!==2&&q&1&&G)if(H===0)G.beforeEnter(K),o(K,B,M),Ge(()=>G.enter(K),O);else{const{leave:le,delayLeave:ce,afterLeave:pe}=G,Te=()=>o(K,B,M),Ve=()=>{le(K,()=>{Te(),pe&&pe()})};ce?ce(K,Te,Ve):Ve()}else o(K,B,M)},Ke=(T,B,M,H=!1,O=!1)=>{const{type:K,props:ee,ref:G,children:Q,dynamicChildren:q,shapeFlag:de,patchFlag:le,dirs:ce}=T;if(G!=null&&Us(G,null,M,T,!0),de&256){B.ctx.deactivate(T);return}const pe=de&1&&ce,Te=!cs(T);let Ve;if(Te&&(Ve=ee&&ee.onVnodeBeforeUnmount)&&et(Ve,B,T),de&6)ie(T.component,M,H);else{if(de&128){T.suspense.unmount(M,H);return}pe&&gt(T,null,B,"beforeUnmount"),de&64?T.type.remove(T,B,M,O,Re,H):q&&(K!==$e||le>0&&le&64)?W(q,B,M,!1,!0):(K===$e&&le&384||!O&&de&16)&&W(Q,B,M),H&&Ze(T)}(Te&&(Ve=ee&&ee.onVnodeUnmounted)||pe)&&Ge(()=>{Ve&&et(Ve,B,T),pe&&gt(T,null,B,"unmounted")},M)},Ze=T=>{const{type:B,el:M,anchor:H,transition:O}=T;if(B===$e){I(M,H);return}if(B===ri){x(T);return}const K=()=>{d(M),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(T.shapeFlag&1&&O&&!O.persisted){const{leave:ee,delayLeave:G}=O,Q=()=>ee(M,K);G?G(T.el,K,Q):Q()}else K()},I=(T,B)=>{let M;for(;T!==B;)M=g(T),d(T),T=M;d(B)},ie=(T,B,M)=>{const{bum:H,scope:O,update:K,subTree:ee,um:G}=T;H&&Si(H),O.stop(),K&&(K.active=!1,Ke(ee,T,B,M)),G&&Ge(G,B),Ge(()=>{T.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},W=(T,B,M,H=!1,O=!1,K=0)=>{for(let ee=K;ee<T.length;ee++)Ke(T[ee],B,M,H,O)},ne=T=>T.shapeFlag&6?ne(T.component.subTree):T.shapeFlag&128?T.suspense.next():g(T.anchor||T.el),Be=(T,B,M)=>{T==null?B._vnode&&Ke(B._vnode,null,null,!0):w(B._vnode||null,T,B,null,null,null,M),qs(),B._vnode=T},Re={p:w,um:Ke,m:Le,r:Ze,mt:V,mc:P,pc:we,pbc:Z,n:ne,o:t};let ge,be;return s&&([ge,be]=s(Re)),{render:Be,hydrate:ge,createApp:d_(Be,ge)}}function Xt({effect:t,update:s},l){t.allowRecurse=s.allowRecurse=l}function Kl(t,s,l=!1){const o=t.children,d=s.children;if(ae(o)&&ae(d))for(let _=0;_<o.length;_++){const f=o[_];let m=d[_];m.shapeFlag&1&&!m.dynamicChildren&&((m.patchFlag<=0||m.patchFlag===32)&&(m=d[_]=Nt(d[_]),m.el=f.el),l||Kl(f,m))}}function m_(t){const s=t.slice(),l=[0];let o,d,_,f,m;const a=t.length;for(o=0;o<a;o++){const u=t[o];if(u!==0){if(d=l[l.length-1],t[d]<u){s[o]=d,l.push(o);continue}for(_=0,f=l.length-1;_<f;)m=_+f>>1,t[l[m]]<u?_=m+1:f=m;u<t[l[_]]&&(_>0&&(s[o]=l[_-1]),l[_]=o)}}for(_=l.length,f=l[_-1];_-- >0;)l[_]=f,f=s[f];return l}const __=t=>t.__isTeleport,ts=t=>t&&(t.disabled||t.disabled===""),za=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Zn=(t,s)=>{const l=t&&t.to;return He(l)?s?s(l):null:l},f_={__isTeleport:!0,process(t,s,l,o,d,_,f,m,a,u){const{mc:h,pc:c,pbc:g,o:{insert:v,querySelector:r,createText:C,createComment:w}}=u,A=ts(s.props);let{shapeFlag:p,children:$,dynamicChildren:k}=s;if(t==null){const x=s.el=C(""),R=s.anchor=C("");v(x,l,o),v(R,l,o);const z=s.target=Zn(s.props,r),F=s.targetAnchor=C("");z&&(v(F,z),f=f||za(z));const P=(U,Z)=>{p&16&&h($,U,Z,d,_,f,m,a)};A?P(l,R):z&&P(z,F)}else{s.el=t.el;const x=s.anchor=t.anchor,R=s.target=t.target,z=s.targetAnchor=t.targetAnchor,F=ts(t.props),P=F?l:R,U=F?x:z;if(f=f||za(R),k?(g(t.dynamicChildren,k,P,d,_,f,m),Kl(t,s,!0)):a||c(t,s,P,U,d,_,f,m,!1),A)F||Ms(s,l,x,u,1);else if((s.props&&s.props.to)!==(t.props&&t.props.to)){const Z=s.target=Zn(s.props,r);Z&&Ms(s,Z,null,u,0)}else F&&Ms(s,R,z,u,1)}},remove(t,s,l,o,{um:d,o:{remove:_}},f){const{shapeFlag:m,children:a,anchor:u,targetAnchor:h,target:c,props:g}=t;if(c&&_(h),(f||!ts(g))&&(_(u),m&16))for(let v=0;v<a.length;v++){const r=a[v];d(r,s,l,!0,!!r.dynamicChildren)}},move:Ms,hydrate:h_};function Ms(t,s,l,{o:{insert:o},m:d},_=2){_===0&&o(t.targetAnchor,s,l);const{el:f,anchor:m,shapeFlag:a,children:u,props:h}=t,c=_===2;if(c&&o(f,s,l),(!c||ts(h))&&a&16)for(let g=0;g<u.length;g++)d(u[g],s,l,2);c&&o(m,s,l)}function h_(t,s,l,o,d,_,{o:{nextSibling:f,parentNode:m,querySelector:a}},u){const h=s.target=Zn(s.props,a);if(h){const c=h._lpa||h.firstChild;s.shapeFlag&16&&(ts(s.props)?(s.anchor=u(f(t),s,m(t),l,o,d,_),s.targetAnchor=c):(s.anchor=f(t),s.targetAnchor=u(c,s,h,l,o,d,_)),h._lpa=s.targetAnchor&&f(s.targetAnchor))}return s.anchor&&f(s.anchor)}const Ql=f_,Xl="components",p_="directives";function b(t,s){return Zl(Xl,t,!0,s)||t}const Ad=Symbol();function g_(t){return He(t)?Zl(Xl,t,!1)||t:t||Ad}function Cn(t){return Zl(p_,t)}function Zl(t,s,l=!0,o=!1){const d=at||Je;if(d){const _=d.type;if(t===Xl){const m=Ws(_);if(m&&(m===s||m===rt(s)||m===gs(rt(s))))return _}const f=Pa(d[t]||_[t],s)||Pa(d.appContext[t],s);return!f&&o?_:f}}function Pa(t,s){return t&&(t[s]||t[rt(s)]||t[gs(rt(s))])}const $e=Symbol(void 0),Ri=Symbol(void 0),Xe=Symbol(void 0),ri=Symbol(void 0),is=[];let wt=null;function X(t=!1){is.push(wt=t?null:[])}function Sd(){is.pop(),wt=is[is.length-1]||null}let zi=1;function el(t){zi+=t}function kd(t){return t.dynamicChildren=zi>0?wt||$i:null,Sd(),zi>0&&wt&&wt.push(t),t}function oe(t,s,l,o,d,_){return kd(y(t,s,l,o,d,_,!0))}function Ue(t,s,l,o,d){return kd(e(t,s,l,o,d,!0))}function $t(t){return t?t.__v_isVNode===!0:!1}function vt(t,s){return t.type===s.type&&t.key===s.key}function b_(t){}const yn="__vInternal",Td=({key:t})=>t!=null?t:null,Vs=({ref:t,ref_key:s,ref_for:l})=>t!=null?He(t)||qe(t)||he(t)?{i:at,r:t,k:s,f:!!l}:t:null;function y(t,s=null,l=null,o=0,d=null,_=t===$e?0:1,f=!1,m=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:s,key:s&&Td(s),ref:s&&Vs(s),scopeId:fn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:_,patchFlag:o,dynamicProps:d,dynamicChildren:null,appContext:null};return m?(ea(a,l),_&128&&t.normalize(a)):l&&(a.shapeFlag|=He(l)?8:16),zi>0&&!f&&wt&&(a.patchFlag>0||_&6)&&a.patchFlag!==32&&wt.push(a),a}const e=v_;function v_(t,s=null,l=null,o=0,d=null,_=!1){if((!t||t===Ad)&&(t=Xe),$t(t)){const m=Jt(t,s,!0);return l&&ea(m,l),m}if(z_(t)&&(t=t.__vccOpts),s){s=xd(s);let{class:m,style:a}=s;m&&!He(m)&&(s.class=hs(m)),je(a)&&(Dl(a)&&!ae(a)&&(a=Oe({},a)),s.style=fs(a))}const f=He(t)?1:Lm(t)?128:__(t)?64:je(t)?4:he(t)?2:0;return y(t,s,l,o,d,f,_,!0)}function xd(t){return t?Dl(t)||yn in t?Oe({},t):t:null}function Jt(t,s,l=!1){const{props:o,ref:d,patchFlag:_,children:f}=t,m=s?As(o||{},s):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:m,key:m&&Td(m),ref:s&&s.ref?l&&d?ae(d)?d.concat(Vs(s)):[d,Vs(s)]:Vs(s):d,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:s&&t.type!==$e?_===-1?16:_|16:_,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jt(t.ssContent),ssFallback:t.ssFallback&&Jt(t.ssFallback),el:t.el,anchor:t.anchor}}function n(t=" ",s=0){return e(Ri,null,t,s)}function C_(t,s){const l=e(ri,null,t);return l.staticCount=s,l}function Ed(t="",s=!1){return s?(X(),Ue(Xe,null,t)):e(Xe,null,t)}function st(t){return t==null||typeof t=="boolean"?e(Xe):ae(t)?e($e,null,t.slice()):typeof t=="object"?Nt(t):e(Ri,null,String(t))}function Nt(t){return t.el===null||t.memo?t:Jt(t)}function ea(t,s){let l=0;const{shapeFlag:o}=t;if(s==null)s=null;else if(ae(s))l=16;else if(typeof s=="object")if(o&65){const d=s.default;d&&(d._c&&(d._d=!1),ea(t,d()),d._c&&(d._d=!0));return}else{l=32;const d=s._;!d&&!(yn in s)?s._ctx=at:d===3&&at&&(at.slots._===1?s._=1:(s._=2,t.patchFlag|=1024))}else he(s)?(s={default:s,_ctx:at},l=32):(s=String(s),o&64?(l=16,s=[n(s)]):l=8);t.children=s,t.shapeFlag|=l}function As(...t){const s={};for(let l=0;l<t.length;l++){const o=t[l];for(const d in o)if(d==="class")s.class!==o.class&&(s.class=hs([s.class,o.class]));else if(d==="style")s.style=fs([s.style,o.style]);else if(ps(d)){const _=s[d],f=o[d];f&&_!==f&&!(ae(_)&&_.includes(f))&&(s[d]=_?[].concat(_,f):f)}else d!==""&&(s[d]=o[d])}return s}function et(t,s,l,o=null){ut(t,s,7,[l,o])}function ot(t,s,l,o){let d;const _=l&&l[o];if(ae(t)||He(t)){d=new Array(t.length);for(let f=0,m=t.length;f<m;f++)d[f]=s(t[f],f,void 0,_&&_[f])}else if(typeof t=="number"){d=new Array(t);for(let f=0;f<t;f++)d[f]=s(f+1,f,void 0,_&&_[f])}else if(je(t))if(t[Symbol.iterator])d=Array.from(t,(f,m)=>s(f,m,void 0,_&&_[m]));else{const f=Object.keys(t);d=new Array(f.length);for(let m=0,a=f.length;m<a;m++){const u=f[m];d[m]=s(t[u],u,m,_&&_[m])}}else d=[];return l&&(l[o]=d),d}function y_(t,s){for(let l=0;l<s.length;l++){const o=s[l];if(ae(o))for(let d=0;d<o.length;d++)t[o[d].name]=o[d].fn;else o&&(t[o.name]=o.fn)}return t}function Bd(t,s,l={},o,d){if(at.isCE)return e("slot",s==="default"?null:{name:s},o&&o());let _=t[s];_&&_._c&&(_._d=!1),X();const f=_&&Rd(_(l)),m=Ue($e,{key:l.key||`_${s}`},f||(o?o():[]),f&&t._===1?64:-2);return!d&&m.scopeId&&(m.slotScopeIds=[m.scopeId+"-s"]),_&&_._c&&(_._d=!0),m}function Rd(t){return t.some(s=>$t(s)?!(s.type===Xe||s.type===$e&&!Rd(s.children)):!0)?t:null}function w_(t){const s={};for(const l in t)s[Qi(l)]=t[l];return s}const tl=t=>t?Pd(t)?ta(t)||t.proxy:tl(t.parent):null,Ys=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>fd(t),$forceUpdate:t=>()=>Ol(t.update),$nextTick:t=>vs.bind(t.proxy),$watch:t=>Ym.bind(t)}),il={get({_:t},s){const{ctx:l,setupState:o,data:d,props:_,accessCache:f,type:m,appContext:a}=t;let u;if(s[0]!=="$"){const v=f[s];if(v!==void 0)switch(v){case 1:return o[s];case 2:return d[s];case 4:return l[s];case 3:return _[s]}else{if(o!==ze&&Ee(o,s))return f[s]=1,o[s];if(d!==ze&&Ee(d,s))return f[s]=2,d[s];if((u=t.propsOptions[0])&&Ee(u,s))return f[s]=3,_[s];if(l!==ze&&Ee(l,s))return f[s]=4,l[s];Kn&&(f[s]=0)}}const h=Ys[s];let c,g;if(h)return s==="$attrs"&&dt(t,"get",s),h(t);if((c=m.__cssModules)&&(c=c[s]))return c;if(l!==ze&&Ee(l,s))return f[s]=4,l[s];if(g=a.config.globalProperties,Ee(g,s))return g[s]},set({_:t},s,l){const{data:o,setupState:d,ctx:_}=t;if(d!==ze&&Ee(d,s))d[s]=l;else if(o!==ze&&Ee(o,s))o[s]=l;else if(Ee(t.props,s))return!1;return s[0]==="$"&&s.slice(1)in t?!1:(_[s]=l,!0)},has({_:{data:t,setupState:s,accessCache:l,ctx:o,appContext:d,propsOptions:_}},f){let m;return!!l[f]||t!==ze&&Ee(t,f)||s!==ze&&Ee(s,f)||(m=_[0])&&Ee(m,f)||Ee(o,f)||Ee(Ys,f)||Ee(d.config.globalProperties,f)}},$_=Oe({},il,{get(t,s){if(s!==Symbol.unscopables)return il.get(t,s,t)},has(t,s){return s[0]!=="_"&&!wc(s)}}),A_=Cd();let S_=0;function zd(t,s,l){const o=t.type,d=(s?s.appContext:t.appContext)||A_,_={uid:S_++,vnode:t,type:o,parent:s,appContext:d,root:null,next:null,subTree:null,effect:null,update:null,scope:new El(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(d.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(o,d),emitsOptions:Xr(o,d),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:o.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return _.ctx={_},_.root=s?s.root:_,_.emit=Pm.bind(null,_),t.ce&&t.ce(_),_}let Je=null;const Kt=()=>Je||at,Ut=t=>{Je=t,t.scope.on()},Ot=()=>{Je&&Je.scope.off(),Je=null};function Pd(t){return t.vnode.shapeFlag&4}let Pi=!1;function Md(t,s=!1){Pi=s;const{props:l,children:o}=t.vnode,d=Pd(t);n_(t,l,d,s),o_(t,o);const _=d?k_(t,s):void 0;return Pi=!1,_}function k_(t,s){const l=t.type;t.accessCache=Object.create(null),t.proxy=Fl(new Proxy(t.ctx,il));const{setup:o}=l;if(o){const d=t.setupContext=o.length>1?Fd(t):null;Ut(t),_i();const _=yt(o,t,0,[t.props,d]);if(Gt(),Ot(),Tl(_)){if(_.then(Ot,Ot),s)return _.then(f=>{sl(t,f,s)}).catch(f=>{fi(f,t,0)});t.asyncDep=_}else sl(t,_,s)}else Dd(t,s)}function sl(t,s,l){he(s)?t.type.__ssrInlineRender?t.ssrRender=s:t.render=s:je(s)&&(t.setupState=Ll(s)),Dd(t,l)}let Gs,nl;function T_(t){Gs=t,nl=s=>{s.render._rc&&(s.withProxy=new Proxy(s.ctx,$_))}}const x_=()=>!Gs;function Dd(t,s,l){const o=t.type;if(!t.render){if(!s&&Gs&&!o.render){const d=o.template;if(d){const{isCustomElement:_,compilerOptions:f}=t.appContext.config,{delimiters:m,compilerOptions:a}=o,u=Oe(Oe({isCustomElement:_,delimiters:m},f),a);o.render=Gs(d,u)}}t.render=o.render||ht,nl&&nl(t)}Ut(t),_i(),Zm(t),Gt(),Ot()}function E_(t){return new Proxy(t.attrs,{get(s,l){return dt(t,"get","$attrs"),s[l]}})}function Fd(t){const s=o=>{t.exposed=o||{}};let l;return{get attrs(){return l||(l=E_(t))},slots:t.slots,emit:t.emit,expose:s}}function ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ll(Fl(t.exposed)),{get(s,l){if(l in s)return s[l];if(l in Ys)return Ys[l](t)}}))}const B_=/(?:^|[-_])(\w)/g,R_=t=>t.replace(B_,s=>s.toUpperCase()).replace(/[-_]/g,"");function Ws(t){return he(t)&&t.displayName||t.name}function Id(t,s,l=!1){let o=Ws(s);if(!o&&s.__file){const d=s.__file.match(/([^/\\]+)\.\w+$/);d&&(o=d[1])}if(!o&&t&&t.parent){const d=_=>{for(const f in _)if(_[f]===s)return f};o=d(t.components||t.parent.type.components)||d(t.appContext.components)}return o?R_(o):l?"App":"Anonymous"}function z_(t){return he(t)&&"__vccOpts"in t}const D=(t,s)=>Am(t,s,Pi);function P_(){return null}function M_(){return null}function D_(t){}function F_(t,s){return null}function I_(){return Nd().slots}function N_(){return Nd().attrs}function Nd(){const t=Kt();return t.setupContext||(t.setupContext=Fd(t))}function L_(t,s){const l=ae(t)?t.reduce((o,d)=>(o[d]={},o),{}):t;for(const o in s){const d=l[o];d?ae(d)||he(d)?l[o]={type:d,default:s[o]}:d.default=s[o]:d===null&&(l[o]={default:s[o]})}return l}function V_(t,s){const l={};for(const o in t)s.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>t[o]});return l}function O_(t){const s=Kt();let l=t();return Ot(),Tl(l)&&(l=l.catch(o=>{throw Ut(s),o})),[l,()=>Ut(s)]}function j(t,s,l){const o=arguments.length;return o===2?je(s)&&!ae(s)?$t(s)?e(t,null,[s]):e(t,s):e(t,null,s):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&$t(l)&&(l=[l]),e(t,s,l))}const Ld=Symbol(""),H_=()=>{{const t=Pe(Ld);return t||Jr("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function j_(){}function q_(t,s,l,o){const d=l[o];if(d&&Vd(d,t))return d;const _=s();return _.memo=t.slice(),l[o]=_}function Vd(t,s){const l=t.memo;if(l.length!=s.length)return!1;for(let o=0;o<l.length;o++)if(l[o]!==s[o])return!1;return zi>0&&wt&&wt.push(t),!0}const Od="3.2.29",J_={createComponentInstance:zd,setupComponent:Md,renderComponentRoot:Ls,setCurrentRenderingInstance:rs,isVNode:$t,normalizeVNode:st},U_=J_,Y_=null,G_=null,W_="http://www.w3.org/2000/svg",ni=typeof document!="undefined"?document:null,Ma=ni&&ni.createElement("template"),K_={insert:(t,s,l)=>{s.insertBefore(t,l||null)},remove:t=>{const s=t.parentNode;s&&s.removeChild(t)},createElement:(t,s,l,o)=>{const d=s?ni.createElementNS(W_,t):ni.createElement(t,l?{is:l}:void 0);return t==="select"&&o&&o.multiple!=null&&d.setAttribute("multiple",o.multiple),d},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,s)=>{t.nodeValue=s},setElementText:(t,s)=>{t.textContent=s},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,s){t.setAttribute(s,"")},cloneNode(t){const s=t.cloneNode(!0);return"_value"in t&&(s._value=t._value),s},insertStaticContent(t,s,l,o,d,_){const f=l?l.previousSibling:s.lastChild;if(d&&(d===_||d.nextSibling))for(;s.insertBefore(d.cloneNode(!0),l),!(d===_||!(d=d.nextSibling)););else{Ma.innerHTML=o?`<svg>${t}</svg>`:t;const m=Ma.content;if(o){const a=m.firstChild;for(;a.firstChild;)m.appendChild(a.firstChild);m.removeChild(a)}s.insertBefore(m,l)}return[f?f.nextSibling:s.firstChild,l?l.previousSibling:s.lastChild]}};function Q_(t,s,l){const o=t._vtc;o&&(s=(s?[s,...o]:[...o]).join(" ")),s==null?t.removeAttribute("class"):l?t.setAttribute("class",s):t.className=s}function X_(t,s,l){const o=t.style,d=He(l);if(l&&!d){for(const _ in l)ll(o,_,l[_]);if(s&&!He(s))for(const _ in s)l[_]==null&&ll(o,_,"")}else{const _=o.display;d?s!==l&&(o.cssText=l):s&&t.removeAttribute("style"),"_vod"in t&&(o.display=_)}}const Da=/\s*!important$/;function ll(t,s,l){if(ae(l))l.forEach(o=>ll(t,s,o));else if(s.startsWith("--"))t.setProperty(s,l);else{const o=Z_(t,s);Da.test(l)?t.setProperty(Ct(o),l.replace(Da,""),"important"):t[o]=l}}const Fa=["Webkit","Moz","ms"],Pn={};function Z_(t,s){const l=Pn[s];if(l)return l;let o=rt(s);if(o!=="filter"&&o in t)return Pn[s]=o;o=gs(o);for(let d=0;d<Fa.length;d++){const _=Fa[d]+o;if(_ in t)return Pn[s]=_}return s}const Ia="http://www.w3.org/1999/xlink";function ef(t,s,l,o,d){if(o&&s.startsWith("xlink:"))l==null?t.removeAttributeNS(Ia,s.slice(6,s.length)):t.setAttributeNS(Ia,s,l);else{const _=Ac(s);l==null||_&&!Sr(l)?t.removeAttribute(s):t.setAttribute(s,_?"":l)}}function tf(t,s,l,o,d,_,f){if(s==="innerHTML"||s==="textContent"){o&&f(o,d,_),t[s]=l==null?"":l;return}if(s==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=l;const m=l==null?"":l;(t.value!==m||t.tagName==="OPTION")&&(t.value=m),l==null&&t.removeAttribute(s);return}if(l===""||l==null){const m=typeof t[s];if(m==="boolean"){t[s]=Sr(l);return}else if(l==null&&m==="string"){t[s]="",t.removeAttribute(s);return}else if(m==="number"){try{t[s]=0}catch{}t.removeAttribute(s);return}}try{t[s]=l}catch{}}let Ks=Date.now,Hd=!1;if(typeof window!="undefined"){Ks()>document.createEvent("Event").timeStamp&&(Ks=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Hd=!!(t&&Number(t[1])<=53)}let al=0;const sf=Promise.resolve(),nf=()=>{al=0},lf=()=>al||(sf.then(nf),al=Ks());function xt(t,s,l,o){t.addEventListener(s,l,o)}function af(t,s,l,o){t.removeEventListener(s,l,o)}function of(t,s,l,o,d=null){const _=t._vei||(t._vei={}),f=_[s];if(o&&f)f.value=o;else{const[m,a]=uf(s);if(o){const u=_[s]=rf(o,d);xt(t,m,u,a)}else f&&(af(t,m,f,a),_[s]=void 0)}}const Na=/(?:Once|Passive|Capture)$/;function uf(t){let s;if(Na.test(t)){s={};let l;for(;l=t.match(Na);)t=t.slice(0,t.length-l[0].length),s[l[0].toLowerCase()]=!0}return[Ct(t.slice(2)),s]}function rf(t,s){const l=o=>{const d=o.timeStamp||Ks();(Hd||d>=l.attached-1)&&ut(df(o,l.value),s,5,[o])};return l.value=t,l.attached=lf(),l}function df(t,s){if(ae(s)){const l=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{l.call(t),t._stopped=!0},s.map(o=>d=>!d._stopped&&o&&o(d))}else return s}const La=/^on[a-z]/,cf=(t,s,l,o,d=!1,_,f,m,a)=>{s==="class"?Q_(t,o,d):s==="style"?X_(t,l,o):ps(s)?Al(s)||of(t,s,l,o,f):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):mf(t,s,o,d))?tf(t,s,o,_,f,m,a):(s==="true-value"?t._trueValue=o:s==="false-value"&&(t._falseValue=o),ef(t,s,o,d))};function mf(t,s,l,o){return o?!!(s==="innerHTML"||s==="textContent"||s in t&&La.test(s)&&he(l)):s==="spellcheck"||s==="draggable"||s==="form"||s==="list"&&t.tagName==="INPUT"||s==="type"&&t.tagName==="TEXTAREA"||La.test(s)&&He(l)?!1:s in t}function jd(t,s){const l=E(t);class o extends wn{constructor(_){super(l,_,s)}}return o.def=l,o}const _f=t=>jd(t,ic),ff=typeof HTMLElement!="undefined"?HTMLElement:class{};class wn extends ff{constructor(s,l={},o){super(),this._def=s,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,vs(()=>{this._connected||(ul(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);new MutationObserver(o=>{for(const d of o)this._setAttr(d.attributeName)}).observe(this,{attributes:!0});const s=o=>{const{props:d,styles:_}=o,f=!ae(d),m=d?f?Object.keys(d):d:[];let a;if(f)for(const u in this._props){const h=d[u];(h===Number||h&&h.type===Number)&&(this._props[u]=jt(this._props[u]),(a||(a=Object.create(null)))[u]=!0)}this._numberProps=a;for(const u of Object.keys(this))u[0]!=="_"&&this._setProp(u,this[u],!0,!1);for(const u of m.map(rt))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(h){this._setProp(u,h)}});this._applyStyles(_),this._update()},l=this._def.__asyncLoader;l?l().then(s):s(this._def)}_setAttr(s){let l=this.getAttribute(s);this._numberProps&&this._numberProps[s]&&(l=jt(l)),this._setProp(rt(s),l,!1)}_getProp(s){return this._props[s]}_setProp(s,l,o=!0,d=!0){l!==this._props[s]&&(this._props[s]=l,d&&this._instance&&this._update(),o&&(l===!0?this.setAttribute(Ct(s),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Ct(s),l+""):l||this.removeAttribute(Ct(s))))}_update(){ul(this._createVNode(),this.shadowRoot)}_createVNode(){const s=e(this._def,Oe({},this._props));return this._instance||(s.ce=l=>{this._instance=l,l.isCE=!0,l.emit=(d,..._)=>{this.dispatchEvent(new CustomEvent(d,{detail:_}))};let o=this;for(;o=o&&(o.parentNode||o.host);)if(o instanceof wn){l.parent=o._instance;break}}),s}_applyStyles(s){s&&s.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function hf(t="$style"){{const s=Kt();if(!s)return ze;const l=s.type.__cssModules;if(!l)return ze;const o=l[t];return o||ze}}function pf(t){const s=Kt();if(!s)return;const l=()=>ol(s.subTree,t(s.proxy));td(l),Wt(()=>{const o=new MutationObserver(l);o.observe(s.subTree.el.parentNode,{childList:!0}),hi(()=>o.disconnect())})}function ol(t,s){if(t.shapeFlag&128){const l=t.suspense;t=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{ol(l.activeBranch,s)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Va(t.el,s);else if(t.type===$e)t.children.forEach(l=>ol(l,s));else if(t.type===ri){let{el:l,anchor:o}=t;for(;l&&(Va(l,s),l!==o);)l=l.nextSibling}}function Va(t,s){if(t.nodeType===1){const l=t.style;for(const o in s)l.setProperty(`--${o}`,s[o])}}const Dt="transition",Oi="animation",ia=(t,{slots:s})=>j(Gl,Jd(t),s);ia.displayName="Transition";const qd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gf=ia.props=Oe({},Gl.props,qd),Zt=(t,s=[])=>{ae(t)?t.forEach(l=>l(...s)):t&&t(...s)},Oa=t=>t?ae(t)?t.some(s=>s.length>1):t.length>1:!1;function Jd(t){const s={};for(const N in t)N in qd||(s[N]=t[N]);if(t.css===!1)return s;const{name:l="v",type:o,duration:d,enterFromClass:_=`${l}-enter-from`,enterActiveClass:f=`${l}-enter-active`,enterToClass:m=`${l}-enter-to`,appearFromClass:a=_,appearActiveClass:u=f,appearToClass:h=m,leaveFromClass:c=`${l}-leave-from`,leaveActiveClass:g=`${l}-leave-active`,leaveToClass:v=`${l}-leave-to`}=t,r=bf(d),C=r&&r[0],w=r&&r[1],{onBeforeEnter:A,onEnter:p,onEnterCancelled:$,onLeave:k,onLeaveCancelled:x,onBeforeAppear:R=A,onAppear:z=p,onAppearCancelled:F=$}=s,P=(N,ue,Ce)=>{si(N,ue?h:m),si(N,ue?u:f),Ce&&Ce()},U=(N,ue)=>{si(N,v),si(N,g),ue&&ue()},Z=N=>(ue,Ce)=>{const V=N?z:p,te=()=>P(ue,N,Ce);Zt(V,[ue,te]),Ha(()=>{si(ue,N?a:_),St(ue,N?h:m),Oa(V)||ja(ue,o,C,te)})};return Oe(s,{onBeforeEnter(N){Zt(A,[N]),St(N,_),St(N,f)},onBeforeAppear(N){Zt(R,[N]),St(N,a),St(N,u)},onEnter:Z(!1),onAppear:Z(!0),onLeave(N,ue){const Ce=()=>U(N,ue);St(N,c),Yd(),St(N,g),Ha(()=>{si(N,c),St(N,v),Oa(k)||ja(N,o,w,Ce)}),Zt(k,[N,Ce])},onEnterCancelled(N){P(N,!1),Zt($,[N])},onAppearCancelled(N){P(N,!0),Zt(F,[N])},onLeaveCancelled(N){U(N),Zt(x,[N])}})}function bf(t){if(t==null)return null;if(je(t))return[Mn(t.enter),Mn(t.leave)];{const s=Mn(t);return[s,s]}}function Mn(t){return jt(t)}function St(t,s){s.split(/\s+/).forEach(l=>l&&t.classList.add(l)),(t._vtc||(t._vtc=new Set)).add(s)}function si(t,s){s.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:l}=t;l&&(l.delete(s),l.size||(t._vtc=void 0))}function Ha(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vf=0;function ja(t,s,l,o){const d=t._endId=++vf,_=()=>{d===t._endId&&o()};if(l)return setTimeout(_,l);const{type:f,timeout:m,propCount:a}=Ud(t,s);if(!f)return o();const u=f+"end";let h=0;const c=()=>{t.removeEventListener(u,g),_()},g=v=>{v.target===t&&++h>=a&&c()};setTimeout(()=>{h<a&&c()},m+1),t.addEventListener(u,g)}function Ud(t,s){const l=window.getComputedStyle(t),o=r=>(l[r]||"").split(", "),d=o(Dt+"Delay"),_=o(Dt+"Duration"),f=qa(d,_),m=o(Oi+"Delay"),a=o(Oi+"Duration"),u=qa(m,a);let h=null,c=0,g=0;s===Dt?f>0&&(h=Dt,c=f,g=_.length):s===Oi?u>0&&(h=Oi,c=u,g=a.length):(c=Math.max(f,u),h=c>0?f>u?Dt:Oi:null,g=h?h===Dt?_.length:a.length:0);const v=h===Dt&&/\b(transform|all)(,|$)/.test(l[Dt+"Property"]);return{type:h,timeout:c,propCount:g,hasTransform:v}}function qa(t,s){for(;t.length<s.length;)t=t.concat(t);return Math.max(...s.map((l,o)=>Ja(l)+Ja(t[o])))}function Ja(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Yd(){return document.body.offsetHeight}const Gd=new WeakMap,Wd=new WeakMap,Cf={name:"TransitionGroup",props:Oe({},gf,{tag:String,moveClass:String}),setup(t,{slots:s}){const l=Kt(),o=Yl();let d,_;return gn(()=>{if(!d.length)return;const f=t.moveClass||`${t.name||"v"}-move`;if(!Sf(d[0].el,l.vnode.el,f))return;d.forEach(wf),d.forEach($f);const m=d.filter(Af);Yd(),m.forEach(a=>{const u=a.el,h=u.style;St(u,f),h.transform=h.webkitTransform=h.transitionDuration="";const c=u._moveCb=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",c),u._moveCb=null,si(u,f))};u.addEventListener("transitionend",c)})}),()=>{const f=Ae(t),m=Jd(f);let a=f.tag||$e;d=_,_=s.default?hn(s.default()):[];for(let u=0;u<_.length;u++){const h=_[u];h.key!=null&&di(h,Bi(h,m,o,l))}if(d)for(let u=0;u<d.length;u++){const h=d[u];di(h,Bi(h,m,o,l)),Gd.set(h,h.el.getBoundingClientRect())}return e(a,null,_)}}},yf=Cf;function wf(t){const s=t.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function $f(t){Wd.set(t,t.el.getBoundingClientRect())}function Af(t){const s=Gd.get(t),l=Wd.get(t),o=s.left-l.left,d=s.top-l.top;if(o||d){const _=t.el.style;return _.transform=_.webkitTransform=`translate(${o}px,${d}px)`,_.transitionDuration="0s",t}}function Sf(t,s,l){const o=t.cloneNode();t._vtc&&t._vtc.forEach(f=>{f.split(/\s+/).forEach(m=>m&&o.classList.remove(m))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const d=s.nodeType===1?s:s.parentNode;d.appendChild(o);const{hasTransform:_}=Ud(o);return d.removeChild(o),_}const Yt=t=>{const s=t.props["onUpdate:modelValue"];return ae(s)?l=>Si(s,l):s};function kf(t){t.target.composing=!0}function Ua(t){const s=t.target;s.composing&&(s.composing=!1,Tf(s,"input"))}function Tf(t,s){const l=document.createEvent("HTMLEvents");l.initEvent(s,!0,!0),t.dispatchEvent(l)}const Qs={created(t,{modifiers:{lazy:s,trim:l,number:o}},d){t._assign=Yt(d);const _=o||d.props&&d.props.type==="number";xt(t,s?"change":"input",f=>{if(f.target.composing)return;let m=t.value;l?m=m.trim():_&&(m=jt(m)),t._assign(m)}),l&&xt(t,"change",()=>{t.value=t.value.trim()}),s||(xt(t,"compositionstart",kf),xt(t,"compositionend",Ua),xt(t,"change",Ua))},mounted(t,{value:s}){t.value=s==null?"":s},beforeUpdate(t,{value:s,modifiers:{lazy:l,trim:o,number:d}},_){if(t._assign=Yt(_),t.composing||document.activeElement===t&&(l||o&&t.value.trim()===s||(d||t.type==="number")&&jt(t.value)===s))return;const f=s==null?"":s;t.value!==f&&(t.value=f)}},sa={deep:!0,created(t,s,l){t._assign=Yt(l),xt(t,"change",()=>{const o=t._modelValue,d=Mi(t),_=t.checked,f=t._assign;if(ae(o)){const m=an(o,d),a=m!==-1;if(_&&!a)f(o.concat(d));else if(!_&&a){const u=[...o];u.splice(m,1),f(u)}}else if(mi(o)){const m=new Set(o);_?m.add(d):m.delete(d),f(m)}else f(Qd(t,_))})},mounted:Ya,beforeUpdate(t,s,l){t._assign=Yt(l),Ya(t,s,l)}};function Ya(t,{value:s,oldValue:l},o){t._modelValue=s,ae(s)?t.checked=an(s,o.props.value)>-1:mi(s)?t.checked=s.has(o.props.value):s!==l&&(t.checked=Ht(s,Qd(t,!0)))}const na={created(t,{value:s},l){t.checked=Ht(s,l.props.value),t._assign=Yt(l),xt(t,"change",()=>{t._assign(Mi(t))})},beforeUpdate(t,{value:s,oldValue:l},o){t._assign=Yt(o),s!==l&&(t.checked=Ht(s,o.props.value))}},Kd={deep:!0,created(t,{value:s,modifiers:{number:l}},o){const d=mi(s);xt(t,"change",()=>{const _=Array.prototype.filter.call(t.options,f=>f.selected).map(f=>l?jt(Mi(f)):Mi(f));t._assign(t.multiple?d?new Set(_):_:_[0])}),t._assign=Yt(o)},mounted(t,{value:s}){Ga(t,s)},beforeUpdate(t,s,l){t._assign=Yt(l)},updated(t,{value:s}){Ga(t,s)}};function Ga(t,s){const l=t.multiple;if(!(l&&!ae(s)&&!mi(s))){for(let o=0,d=t.options.length;o<d;o++){const _=t.options[o],f=Mi(_);if(l)ae(s)?_.selected=an(s,f)>-1:_.selected=s.has(f);else if(Ht(Mi(_),s)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!l&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mi(t){return"_value"in t?t._value:t.value}function Qd(t,s){const l=s?"_trueValue":"_falseValue";return l in t?t[l]:s}const xf={created(t,s,l){Ds(t,s,l,null,"created")},mounted(t,s,l){Ds(t,s,l,null,"mounted")},beforeUpdate(t,s,l,o){Ds(t,s,l,o,"beforeUpdate")},updated(t,s,l,o){Ds(t,s,l,o,"updated")}};function Ds(t,s,l,o,d){let _;switch(t.tagName){case"SELECT":_=Kd;break;case"TEXTAREA":_=Qs;break;default:switch(l.props&&l.props.type){case"checkbox":_=sa;break;case"radio":_=na;break;default:_=Qs}}const f=_[d];f&&f(t,s,l,o)}function Ef(){Qs.getSSRProps=({value:t})=>({value:t}),na.getSSRProps=({value:t},s)=>{if(s.props&&Ht(s.props.value,t))return{checked:!0}},sa.getSSRProps=({value:t},s)=>{if(ae(t)){if(s.props&&an(t,s.props.value)>-1)return{checked:!0}}else if(mi(t)){if(s.props&&t.has(s.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const Bf=["ctrl","shift","alt","meta"],Rf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,s)=>Bf.some(l=>t[`${l}Key`]&&!s.includes(l))},ct=(t,s)=>(l,...o)=>{for(let d=0;d<s.length;d++){const _=Rf[s[d]];if(_&&_(l,s))return}return t(l,...o)},zf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pf=(t,s)=>l=>{if(!("key"in l))return;const o=Ct(l.key);if(s.some(d=>d===o||zf[d]===o))return t(l)},Xd={beforeMount(t,{value:s},{transition:l}){t._vod=t.style.display==="none"?"":t.style.display,l&&s?l.beforeEnter(t):Hi(t,s)},mounted(t,{value:s},{transition:l}){l&&s&&l.enter(t)},updated(t,{value:s,oldValue:l},{transition:o}){!s!=!l&&(o?s?(o.beforeEnter(t),Hi(t,!0),o.enter(t)):o.leave(t,()=>{Hi(t,!1)}):Hi(t,s))},beforeUnmount(t,{value:s}){Hi(t,s)}};function Hi(t,s){t.style.display=s?t._vod:"none"}function Mf(){Xd.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Zd=Oe({patchProp:cf},K_);let ss,Wa=!1;function ec(){return ss||(ss=yd(Zd))}function tc(){return ss=Wa?ss:wd(Zd),Wa=!0,ss}const ul=(...t)=>{ec().render(...t)},ic=(...t)=>{tc().hydrate(...t)},sc=(...t)=>{const s=ec().createApp(...t),{mount:l}=s;return s.mount=o=>{const d=nc(o);if(!d)return;const _=s._component;!he(_)&&!_.render&&!_.template&&(_.template=d.innerHTML),d.innerHTML="";const f=l(d,!1,d instanceof SVGElement);return d instanceof Element&&(d.removeAttribute("v-cloak"),d.setAttribute("data-v-app","")),f},s},Df=(...t)=>{const s=tc().createApp(...t),{mount:l}=s;return s.mount=o=>{const d=nc(o);if(d)return l(d,!0,d instanceof SVGElement)},s};function nc(t){return He(t)?document.querySelector(t):t}let Ka=!1;const Ff=()=>{Ka||(Ka=!0,Ef(),Mf())},If=()=>{};var Nf=Object.freeze(Object.defineProperty({__proto__:null,compile:If,EffectScope:El,ReactiveEffect:bs,customRef:Cm,effect:Hc,effectScope:Ic,getCurrentScope:Nc,isProxy:Dl,isReactive:ui,isReadonly:Ei,isRef:qe,isShallow:Ml,markRaw:Fl,onScopeDispose:Lc,proxyRefs:Ll,reactive:Bt,readonly:Pl,ref:L,shallowReactive:Hr,shallowReadonly:hm,shallowRef:jr,stop:jc,toRaw:Ae,toRef:Hs,toRefs:ym,triggerRef:gm,unref:ki,camelize:rt,capitalize:gs,normalizeClass:hs,normalizeProps:xc,normalizeStyle:fs,toDisplayString:xe,toHandlerKey:Qi,BaseTransition:Gl,Comment:Xe,Fragment:$e,KeepAlive:Qm,Static:ri,Suspense:Om,Teleport:Ql,Text:Ri,callWithAsyncErrorHandling:ut,callWithErrorHandling:yt,cloneVNode:Jt,compatUtils:G_,computed:D,createBlock:Ue,createCommentVNode:Ed,createElementBlock:oe,createElementVNode:y,createHydrationRenderer:wd,createPropsRestProxy:V_,createRenderer:yd,createSlots:y_,createStaticVNode:C_,createTextVNode:n,createVNode:e,defineAsyncComponent:Wm,defineComponent:E,defineEmits:M_,defineExpose:D_,defineProps:P_,get devtools(){return yi},getCurrentInstance:Kt,getTransitionRawChildren:hn,guardReactiveProps:xd,h:j,handleError:fi,initCustomFormatter:j_,inject:Pe,isMemoSame:Vd,isRuntimeOnly:x_,isVNode:$t,mergeDefaults:L_,mergeProps:As,nextTick:vs,onActivated:nd,onBeforeMount:od,onBeforeUnmount:bn,onBeforeUpdate:ud,onDeactivated:ld,onErrorCaptured:md,onMounted:Wt,onRenderTracked:cd,onRenderTriggered:dd,onServerPrefetch:rd,onUnmounted:hi,onUpdated:gn,openBlock:X,popScopeId:ys,provide:We,pushScopeId:Cs,queuePostFlushCb:Hl,registerRuntimeCompiler:T_,renderList:ot,renderSlot:Bd,resolveComponent:b,resolveDirective:Cn,resolveDynamicComponent:g_,resolveFilter:Y_,resolveTransitionHooks:Bi,setBlockTracking:el,setDevtoolsHook:Qr,setTransitionHooks:di,ssrContextKey:Ld,ssrUtils:U_,toHandlers:w_,transformVNodeArgs:b_,useAttrs:N_,useSSRContext:H_,useSlots:I_,useTransitionState:Yl,version:Od,warn:Jr,watch:tt,watchEffect:ed,watchPostEffect:td,watchSyncEffect:Um,withAsyncContext:O_,withCtx:i,withDefaults:F_,withDirectives:vn,withMemo:q_,withScopeId:Mm,Transition:ia,TransitionGroup:yf,VueElement:wn,createApp:sc,createSSRApp:Df,defineCustomElement:jd,defineSSRCustomElement:_f,hydrate:ic,initDirectivesForSSR:Ff,render:ul,useCssModule:hf,useCssVars:pf,vModelCheckbox:sa,vModelDynamic:xf,vModelRadio:na,vModelSelect:Kd,vModelText:Qs,vShow:Xd,withKeys:Pf,withModifiers:ct},Symbol.toStringTag,{value:"Module"})),_e=(t,s)=>{const l=t.__vccOpts||t;for(const[o,d]of s)l[o]=d;return l};const Lf=E({name:"App"});function Vf(t,s,l,o,d,_){const f=b("router-view");return X(),Ue(f)}var Of=_e(Lf,[["render",Vf]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const lc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ni=t=>lc?Symbol(t):"_vr_"+t,Hf=Ni("rvlm"),Qa=Ni("rvd"),la=Ni("r"),aa=Ni("rl"),rl=Ni("rvl"),wi=typeof window!="undefined";function jf(t){return t.__esModule||lc&&t[Symbol.toStringTag]==="Module"}const De=Object.assign;function Dn(t,s){const l={};for(const o in s){const d=s[o];l[o]=Array.isArray(d)?d.map(t):t(d)}return l}const ns=()=>{},qf=/\/$/,Jf=t=>t.replace(qf,"");function Fn(t,s,l="/"){let o,d={},_="",f="";const m=s.indexOf("?"),a=s.indexOf("#",m>-1?m:0);return m>-1&&(o=s.slice(0,m),_=s.slice(m+1,a>-1?a:s.length),d=t(_)),a>-1&&(o=o||s.slice(0,a),f=s.slice(a,s.length)),o=Wf(o!=null?o:s,l),{fullPath:o+(_&&"?")+_+f,path:o,query:d,hash:f}}function Uf(t,s){const l=s.query?t(s.query):"";return s.path+(l&&"?")+l+(s.hash||"")}function Xa(t,s){return!s||!t.toLowerCase().startsWith(s.toLowerCase())?t:t.slice(s.length)||"/"}function Yf(t,s,l){const o=s.matched.length-1,d=l.matched.length-1;return o>-1&&o===d&&Di(s.matched[o],l.matched[d])&&ac(s.params,l.params)&&t(s.query)===t(l.query)&&s.hash===l.hash}function Di(t,s){return(t.aliasOf||t)===(s.aliasOf||s)}function ac(t,s){if(Object.keys(t).length!==Object.keys(s).length)return!1;for(const l in t)if(!Gf(t[l],s[l]))return!1;return!0}function Gf(t,s){return Array.isArray(t)?Za(t,s):Array.isArray(s)?Za(s,t):t===s}function Za(t,s){return Array.isArray(s)?t.length===s.length&&t.every((l,o)=>l===s[o]):t.length===1&&t[0]===s}function Wf(t,s){if(t.startsWith("/"))return t;if(!t)return s;const l=s.split("/"),o=t.split("/");let d=l.length-1,_,f;for(_=0;_<o.length;_++)if(f=o[_],!(d===1||f==="."))if(f==="..")d--;else break;return l.slice(0,d).join("/")+"/"+o.slice(_-(_===o.length?1:0)).join("/")}var ms;(function(t){t.pop="pop",t.push="push"})(ms||(ms={}));var ls;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ls||(ls={}));function Kf(t){if(!t)if(wi){const s=document.querySelector("base");t=s&&s.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jf(t)}const Qf=/^[^#]+#/;function Xf(t,s){return t.replace(Qf,"#")+s}function Zf(t,s){const l=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:s.behavior,left:o.left-l.left-(s.left||0),top:o.top-l.top-(s.top||0)}}const $n=()=>({left:window.pageXOffset,top:window.pageYOffset});function eh(t){let s;if("el"in t){const l=t.el,o=typeof l=="string"&&l.startsWith("#"),d=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!d)return;s=Zf(d,t)}else s=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function eo(t,s){return(history.state?history.state.position-s:-1)+t}const dl=new Map;function th(t,s){dl.set(t,s)}function ih(t){const s=dl.get(t);return dl.delete(t),s}let sh=()=>location.protocol+"//"+location.host;function oc(t,s){const{pathname:l,search:o,hash:d}=s,_=t.indexOf("#");if(_>-1){let m=d.includes(t.slice(_))?t.slice(_).length:1,a=d.slice(m);return a[0]!=="/"&&(a="/"+a),Xa(a,"")}return Xa(l,t)+o+d}function nh(t,s,l,o){let d=[],_=[],f=null;const m=({state:g})=>{const v=oc(t,location),r=l.value,C=s.value;let w=0;if(g){if(l.value=v,s.value=g,f&&f===r){f=null;return}w=C?g.position-C.position:0}else o(v);d.forEach(A=>{A(l.value,r,{delta:w,type:ms.pop,direction:w?w>0?ls.forward:ls.back:ls.unknown})})};function a(){f=l.value}function u(g){d.push(g);const v=()=>{const r=d.indexOf(g);r>-1&&d.splice(r,1)};return _.push(v),v}function h(){const{history:g}=window;!g.state||g.replaceState(De({},g.state,{scroll:$n()}),"")}function c(){for(const g of _)g();_=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",h),{pauseListeners:a,listen:u,destroy:c}}function to(t,s,l,o=!1,d=!1){return{back:t,current:s,forward:l,replaced:o,position:window.history.length,scroll:d?$n():null}}function lh(t){const{history:s,location:l}=window,o={value:oc(t,l)},d={value:s.state};d.value||_(o.value,{back:null,current:o.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function _(a,u,h){const c=t.indexOf("#"),g=c>-1?(l.host&&document.querySelector("base")?t:t.slice(c))+a:sh()+t+a;try{s[h?"replaceState":"pushState"](u,"",g),d.value=u}catch(v){console.error(v),l[h?"replace":"assign"](g)}}function f(a,u){const h=De({},s.state,to(d.value.back,a,d.value.forward,!0),u,{position:d.value.position});_(a,h,!0),o.value=a}function m(a,u){const h=De({},d.value,s.state,{forward:a,scroll:$n()});_(h.current,h,!0);const c=De({},to(o.value,a,null),{position:h.position+1},u);_(a,c,!1),o.value=a}return{location:o,state:d,push:m,replace:f}}function ah(t){t=Kf(t);const s=lh(t),l=nh(t,s.state,s.location,s.replace);function o(_,f=!0){f||l.pauseListeners(),history.go(_)}const d=De({location:"",base:t,go:o,createHref:Xf.bind(null,t)},s,l);return Object.defineProperty(d,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(d,"state",{enumerable:!0,get:()=>s.state.value}),d}function oh(t){return typeof t=="string"||t&&typeof t=="object"}function uc(t){return typeof t=="string"||typeof t=="symbol"}const Ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rc=Ni("nf");var io;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(io||(io={}));function Fi(t,s){return De(new Error,{type:t,[rc]:!0},s)}function ei(t,s){return t instanceof Error&&rc in t&&(s==null||!!(t.type&s))}const so="[^/]+?",uh={sensitive:!1,strict:!1,start:!0,end:!0},rh=/[.+*?^${}()[\]/\\]/g;function dh(t,s){const l=De({},uh,s),o=[];let d=l.start?"^":"";const _=[];for(const u of t){const h=u.length?[]:[90];l.strict&&!u.length&&(d+="/");for(let c=0;c<u.length;c++){const g=u[c];let v=40+(l.sensitive?.25:0);if(g.type===0)c||(d+="/"),d+=g.value.replace(rh,"\\$&"),v+=40;else if(g.type===1){const{value:r,repeatable:C,optional:w,regexp:A}=g;_.push({name:r,repeatable:C,optional:w});const p=A||so;if(p!==so){v+=10;try{new RegExp(`(${p})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${r}" (${p}): `+k.message)}}let $=C?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;c||($=w&&u.length<2?`(?:/${$})`:"/"+$),w&&($+="?"),d+=$,v+=20,w&&(v+=-8),C&&(v+=-20),p===".*"&&(v+=-50)}h.push(v)}o.push(h)}if(l.strict&&l.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}l.strict||(d+="/?"),l.end?d+="$":l.strict&&(d+="(?:/|$)");const f=new RegExp(d,l.sensitive?"":"i");function m(u){const h=u.match(f),c={};if(!h)return null;for(let g=1;g<h.length;g++){const v=h[g]||"",r=_[g-1];c[r.name]=v&&r.repeatable?v.split("/"):v}return c}function a(u){let h="",c=!1;for(const g of t){(!c||!h.endsWith("/"))&&(h+="/"),c=!1;for(const v of g)if(v.type===0)h+=v.value;else if(v.type===1){const{value:r,repeatable:C,optional:w}=v,A=r in u?u[r]:"";if(Array.isArray(A)&&!C)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const p=Array.isArray(A)?A.join("/"):A;if(!p)if(w)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):c=!0);else throw new Error(`Missing required param "${r}"`);h+=p}}return h}return{re:f,score:o,keys:_,parse:m,stringify:a}}function ch(t,s){let l=0;for(;l<t.length&&l<s.length;){const o=s[l]-t[l];if(o)return o;l++}return t.length<s.length?t.length===1&&t[0]===40+40?-1:1:t.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function mh(t,s){let l=0;const o=t.score,d=s.score;for(;l<o.length&&l<d.length;){const _=ch(o[l],d[l]);if(_)return _;l++}return d.length-o.length}const _h={type:0,value:""},fh=/[a-zA-Z0-9_]/;function hh(t){if(!t)return[[]];if(t==="/")return[[_h]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function s(v){throw new Error(`ERR (${l})/"${u}": ${v}`)}let l=0,o=l;const d=[];let _;function f(){_&&d.push(_),_=[]}let m=0,a,u="",h="";function c(){!u||(l===0?_.push({type:0,value:u}):l===1||l===2||l===3?(_.length>1&&(a==="*"||a==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),_.push({type:1,value:u,regexp:h,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):s("Invalid state to consume buffer"),u="")}function g(){u+=a}for(;m<t.length;){if(a=t[m++],a==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:a==="/"?(u&&c(),f()):a===":"?(c(),l=1):g();break;case 4:g(),l=o;break;case 1:a==="("?l=2:fh.test(a)?g():(c(),l=0,a!=="*"&&a!=="?"&&a!=="+"&&m--);break;case 2:a===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+a:l=3:h+=a;break;case 3:c(),l=0,a!=="*"&&a!=="?"&&a!=="+"&&m--,h="";break;default:s("Unknown state");break}}return l===2&&s(`Unfinished custom RegExp for param "${u}"`),c(),f(),d}function ph(t,s,l){const o=dh(hh(t.path),l),d=De(o,{record:t,parent:s,children:[],alias:[]});return s&&!d.record.aliasOf==!s.record.aliasOf&&s.children.push(d),d}function gh(t,s){const l=[],o=new Map;s=lo({strict:!1,end:!0,sensitive:!1},s);function d(h){return o.get(h)}function _(h,c,g){const v=!g,r=vh(h);r.aliasOf=g&&g.record;const C=lo(s,h),w=[r];if("alias"in h){const $=typeof h.alias=="string"?[h.alias]:h.alias;for(const k of $)w.push(De({},r,{components:g?g.record.components:r.components,path:k,aliasOf:g?g.record:r}))}let A,p;for(const $ of w){const{path:k}=$;if(c&&k[0]!=="/"){const x=c.record.path,R=x[x.length-1]==="/"?"":"/";$.path=c.record.path+(k&&R+k)}if(A=ph($,c,C),g?g.alias.push(A):(p=p||A,p!==A&&p.alias.push(A),v&&h.name&&!no(A)&&f(h.name)),"children"in r){const x=r.children;for(let R=0;R<x.length;R++)_(x[R],A,g&&g.children[R])}g=g||A,a(A)}return p?()=>{f(p)}:ns}function f(h){if(uc(h)){const c=o.get(h);c&&(o.delete(h),l.splice(l.indexOf(c),1),c.children.forEach(f),c.alias.forEach(f))}else{const c=l.indexOf(h);c>-1&&(l.splice(c,1),h.record.name&&o.delete(h.record.name),h.children.forEach(f),h.alias.forEach(f))}}function m(){return l}function a(h){let c=0;for(;c<l.length&&mh(h,l[c])>=0;)c++;l.splice(c,0,h),h.record.name&&!no(h)&&o.set(h.record.name,h)}function u(h,c){let g,v={},r,C;if("name"in h&&h.name){if(g=o.get(h.name),!g)throw Fi(1,{location:h});C=g.record.name,v=De(bh(c.params,g.keys.filter(p=>!p.optional).map(p=>p.name)),h.params),r=g.stringify(v)}else if("path"in h)r=h.path,g=l.find(p=>p.re.test(r)),g&&(v=g.parse(r),C=g.record.name);else{if(g=c.name?o.get(c.name):l.find(p=>p.re.test(c.path)),!g)throw Fi(1,{location:h,currentLocation:c});C=g.record.name,v=De({},c.params,h.params),r=g.stringify(v)}const w=[];let A=g;for(;A;)w.unshift(A.record),A=A.parent;return{name:C,path:r,params:v,matched:w,meta:yh(w)}}return t.forEach(h=>_(h)),{addRoute:_,resolve:u,removeRoute:f,getRoutes:m,getRecordMatcher:d}}function bh(t,s){const l={};for(const o of s)o in t&&(l[o]=t[o]);return l}function vh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ch(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Ch(t){const s={},l=t.props||!1;if("component"in t)s.default=l;else for(const o in t.components)s[o]=typeof l=="boolean"?l:l[o];return s}function no(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yh(t){return t.reduce((s,l)=>De(s,l.meta),{})}function lo(t,s){const l={};for(const o in t)l[o]=o in s?s[o]:t[o];return l}const dc=/#/g,wh=/&/g,$h=/\//g,Ah=/=/g,Sh=/\?/g,cc=/\+/g,kh=/%5B/g,Th=/%5D/g,mc=/%5E/g,xh=/%60/g,_c=/%7B/g,Eh=/%7C/g,fc=/%7D/g,Bh=/%20/g;function oa(t){return encodeURI(""+t).replace(Eh,"|").replace(kh,"[").replace(Th,"]")}function Rh(t){return oa(t).replace(_c,"{").replace(fc,"}").replace(mc,"^")}function cl(t){return oa(t).replace(cc,"%2B").replace(Bh,"+").replace(dc,"%23").replace(wh,"%26").replace(xh,"`").replace(_c,"{").replace(fc,"}").replace(mc,"^")}function zh(t){return cl(t).replace(Ah,"%3D")}function Ph(t){return oa(t).replace(dc,"%23").replace(Sh,"%3F")}function Mh(t){return t==null?"":Ph(t).replace($h,"%2F")}function Xs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dh(t){const s={};if(t===""||t==="?")return s;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let d=0;d<o.length;++d){const _=o[d].replace(cc," "),f=_.indexOf("="),m=Xs(f<0?_:_.slice(0,f)),a=f<0?null:Xs(_.slice(f+1));if(m in s){let u=s[m];Array.isArray(u)||(u=s[m]=[u]),u.push(a)}else s[m]=a}return s}function ao(t){let s="";for(let l in t){const o=t[l];if(l=zh(l),o==null){o!==void 0&&(s+=(s.length?"&":"")+l);continue}(Array.isArray(o)?o.map(_=>_&&cl(_)):[o&&cl(o)]).forEach(_=>{_!==void 0&&(s+=(s.length?"&":"")+l,_!=null&&(s+="="+_))})}return s}function Fh(t){const s={};for(const l in t){const o=t[l];o!==void 0&&(s[l]=Array.isArray(o)?o.map(d=>d==null?null:""+d):o==null?o:""+o)}return s}function ji(){let t=[];function s(o){return t.push(o),()=>{const d=t.indexOf(o);d>-1&&t.splice(d,1)}}function l(){t=[]}return{add:s,list:()=>t,reset:l}}function Lt(t,s,l,o,d){const _=o&&(o.enterCallbacks[d]=o.enterCallbacks[d]||[]);return()=>new Promise((f,m)=>{const a=c=>{c===!1?m(Fi(4,{from:l,to:s})):c instanceof Error?m(c):oh(c)?m(Fi(2,{from:s,to:c})):(_&&o.enterCallbacks[d]===_&&typeof c=="function"&&_.push(c),f())},u=t.call(o&&o.instances[d],s,l,a);let h=Promise.resolve(u);t.length<3&&(h=h.then(a)),h.catch(c=>m(c))})}function In(t,s,l,o){const d=[];for(const _ of t)for(const f in _.components){let m=_.components[f];if(!(s!=="beforeRouteEnter"&&!_.instances[f]))if(Ih(m)){const u=(m.__vccOpts||m)[s];u&&d.push(Lt(u,l,o,_,f))}else{let a=m();d.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${_.path}"`));const h=jf(u)?u.default:u;_.components[f]=h;const g=(h.__vccOpts||h)[s];return g&&Lt(g,l,o,_,f)()}))}}return d}function Ih(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oo(t){const s=Pe(la),l=Pe(aa),o=D(()=>s.resolve(ki(t.to))),d=D(()=>{const{matched:a}=o.value,{length:u}=a,h=a[u-1],c=l.matched;if(!h||!c.length)return-1;const g=c.findIndex(Di.bind(null,h));if(g>-1)return g;const v=uo(a[u-2]);return u>1&&uo(h)===v&&c[c.length-1].path!==v?c.findIndex(Di.bind(null,a[u-2])):g}),_=D(()=>d.value>-1&&Oh(l.params,o.value.params)),f=D(()=>d.value>-1&&d.value===l.matched.length-1&&ac(l.params,o.value.params));function m(a={}){return Vh(a)?s[ki(t.replace)?"replace":"push"](ki(t.to)).catch(ns):Promise.resolve()}return{route:o,href:D(()=>o.value.href),isActive:_,isExactActive:f,navigate:m}}const Nh=E({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oo,setup(t,{slots:s}){const l=Bt(oo(t)),{options:o}=Pe(la),d=D(()=>({[ro(t.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[ro(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const _=s.default&&s.default(l);return t.custom?_:j("a",{"aria-current":l.isExactActive?t.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:d.value},_)}}}),Lh=Nh;function Vh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const s=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return t.preventDefault&&t.preventDefault(),!0}}function Oh(t,s){for(const l in s){const o=s[l],d=t[l];if(typeof o=="string"){if(o!==d)return!1}else if(!Array.isArray(d)||d.length!==o.length||o.some((_,f)=>_!==d[f]))return!1}return!0}function uo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ro=(t,s,l)=>t!=null?t:s!=null?s:l,Hh=E({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:s,slots:l}){const o=Pe(rl),d=D(()=>t.route||o.value),_=Pe(Qa,0),f=D(()=>d.value.matched[_]);We(Qa,_+1),We(Hf,f),We(rl,d);const m=L();return tt(()=>[m.value,f.value,t.name],([a,u,h],[c,g,v])=>{u&&(u.instances[h]=a,g&&g!==u&&a&&a===c&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),a&&u&&(!g||!Di(u,g)||!c)&&(u.enterCallbacks[h]||[]).forEach(r=>r(a))},{flush:"post"}),()=>{const a=d.value,u=f.value,h=u&&u.components[t.name],c=t.name;if(!h)return co(l.default,{Component:h,route:a});const g=u.props[t.name],v=g?g===!0?a.params:typeof g=="function"?g(a):g:null,C=j(h,De({},v,s,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(u.instances[c]=null)},ref:m}));return co(l.default,{Component:C,route:a})||C}}});function co(t,s){if(!t)return null;const l=t(s);return l.length===1?l[0]:l}const jh=Hh;function qh(t){const s=gh(t.routes,t),l=t.parseQuery||Dh,o=t.stringifyQuery||ao,d=t.history,_=ji(),f=ji(),m=ji(),a=jr(Ft);let u=Ft;wi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Dn.bind(null,I=>""+I),c=Dn.bind(null,Mh),g=Dn.bind(null,Xs);function v(I,ie){let W,ne;return uc(I)?(W=s.getRecordMatcher(I),ne=ie):ne=I,s.addRoute(ne,W)}function r(I){const ie=s.getRecordMatcher(I);ie&&s.removeRoute(ie)}function C(){return s.getRoutes().map(I=>I.record)}function w(I){return!!s.getRecordMatcher(I)}function A(I,ie){if(ie=De({},ie||a.value),typeof I=="string"){const be=Fn(l,I,ie.path),T=s.resolve({path:be.path},ie),B=d.createHref(be.fullPath);return De(be,T,{params:g(T.params),hash:Xs(be.hash),redirectedFrom:void 0,href:B})}let W;if("path"in I)W=De({},I,{path:Fn(l,I.path,ie.path).path});else{const be=De({},I.params);for(const T in be)be[T]==null&&delete be[T];W=De({},I,{params:c(I.params)}),ie.params=c(ie.params)}const ne=s.resolve(W,ie),Be=I.hash||"";ne.params=h(g(ne.params));const Re=Uf(o,De({},I,{hash:Rh(Be),path:ne.path})),ge=d.createHref(Re);return De({fullPath:Re,hash:Be,query:o===ao?Fh(I.query):I.query||{}},ne,{redirectedFrom:void 0,href:ge})}function p(I){return typeof I=="string"?Fn(l,I,a.value.path):De({},I)}function $(I,ie){if(u!==I)return Fi(8,{from:ie,to:I})}function k(I){return z(I)}function x(I){return k(De(p(I),{replace:!0}))}function R(I){const ie=I.matched[I.matched.length-1];if(ie&&ie.redirect){const{redirect:W}=ie;let ne=typeof W=="function"?W(I):W;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=p(ne):{path:ne},ne.params={}),De({query:I.query,hash:I.hash,params:I.params},ne)}}function z(I,ie){const W=u=A(I),ne=a.value,Be=I.state,Re=I.force,ge=I.replace===!0,be=R(W);if(be)return z(De(p(be),{state:Be,force:Re,replace:ge}),ie||W);const T=W;T.redirectedFrom=ie;let B;return!Re&&Yf(o,ne,W)&&(B=Fi(16,{to:T,from:ne}),Ne(ne,ne,!0,!1)),(B?Promise.resolve(B):P(T,ne)).catch(M=>ei(M)?M:re(M,T,ne)).then(M=>{if(M){if(ei(M,2))return z(De(p(M.to),{state:Be,force:Re,replace:ge}),ie||T)}else M=Z(T,ne,!0,ge,Be);return U(T,ne,M),M})}function F(I,ie){const W=$(I,ie);return W?Promise.reject(W):Promise.resolve()}function P(I,ie){let W;const[ne,Be,Re]=Jh(I,ie);W=In(ne.reverse(),"beforeRouteLeave",I,ie);for(const be of ne)be.leaveGuards.forEach(T=>{W.push(Lt(T,I,ie))});const ge=F.bind(null,I,ie);return W.push(ge),bi(W).then(()=>{W=[];for(const be of _.list())W.push(Lt(be,I,ie));return W.push(ge),bi(W)}).then(()=>{W=In(Be,"beforeRouteUpdate",I,ie);for(const be of Be)be.updateGuards.forEach(T=>{W.push(Lt(T,I,ie))});return W.push(ge),bi(W)}).then(()=>{W=[];for(const be of I.matched)if(be.beforeEnter&&!ie.matched.includes(be))if(Array.isArray(be.beforeEnter))for(const T of be.beforeEnter)W.push(Lt(T,I,ie));else W.push(Lt(be.beforeEnter,I,ie));return W.push(ge),bi(W)}).then(()=>(I.matched.forEach(be=>be.enterCallbacks={}),W=In(Re,"beforeRouteEnter",I,ie),W.push(ge),bi(W))).then(()=>{W=[];for(const be of f.list())W.push(Lt(be,I,ie));return W.push(ge),bi(W)}).catch(be=>ei(be,8)?be:Promise.reject(be))}function U(I,ie,W){for(const ne of m.list())ne(I,ie,W)}function Z(I,ie,W,ne,Be){const Re=$(I,ie);if(Re)return Re;const ge=ie===Ft,be=wi?history.state:{};W&&(ne||ge?d.replace(I.fullPath,De({scroll:ge&&be&&be.scroll},Be)):d.push(I.fullPath,Be)),a.value=I,Ne(I,ie,W,ge),we()}let N;function ue(){N=d.listen((I,ie,W)=>{const ne=A(I),Be=R(ne);if(Be){z(De(Be,{replace:!0}),ne).catch(ns);return}u=ne;const Re=a.value;wi&&th(eo(Re.fullPath,W.delta),$n()),P(ne,Re).catch(ge=>ei(ge,12)?ge:ei(ge,2)?(z(ge.to,ne).then(be=>{ei(be,20)&&!W.delta&&W.type===ms.pop&&d.go(-1,!1)}).catch(ns),Promise.reject()):(W.delta&&d.go(-W.delta,!1),re(ge,ne,Re))).then(ge=>{ge=ge||Z(ne,Re,!1),ge&&(W.delta?d.go(-W.delta,!1):W.type===ms.pop&&ei(ge,20)&&d.go(-1,!1)),U(ne,Re,ge)}).catch(ns)})}let Ce=ji(),V=ji(),te;function re(I,ie,W){we(I);const ne=V.list();return ne.length?ne.forEach(Be=>Be(I,ie,W)):console.error(I),Promise.reject(I)}function se(){return te&&a.value!==Ft?Promise.resolve():new Promise((I,ie)=>{Ce.add([I,ie])})}function we(I){te||(te=!0,ue(),Ce.list().forEach(([ie,W])=>I?W(I):ie()),Ce.reset())}function Ne(I,ie,W,ne){const{scrollBehavior:Be}=t;if(!wi||!Be)return Promise.resolve();const Re=!W&&ih(eo(I.fullPath,0))||(ne||!W)&&history.state&&history.state.scroll||null;return vs().then(()=>Be(I,ie,Re)).then(ge=>ge&&eh(ge)).catch(ge=>re(ge,I,ie))}const Ye=I=>d.go(I);let Le;const Ke=new Set;return{currentRoute:a,addRoute:v,removeRoute:r,hasRoute:w,getRoutes:C,resolve:A,options:t,push:k,replace:x,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:_.add,beforeResolve:f.add,afterEach:m.add,onError:V.add,isReady:se,install(I){const ie=this;I.component("RouterLink",Lh),I.component("RouterView",jh),I.config.globalProperties.$router=ie,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ki(a)}),wi&&!Le&&a.value===Ft&&(Le=!0,k(d.location).catch(Be=>{}));const W={};for(const Be in Ft)W[Be]=D(()=>a.value[Be]);I.provide(la,ie),I.provide(aa,Bt(W)),I.provide(rl,a);const ne=I.unmount;Ke.add(I),I.unmount=function(){Ke.delete(I),Ke.size<1&&(u=Ft,N&&N(),a.value=Ft,Le=!1,te=!1),ne()}}}}function bi(t){return t.reduce((s,l)=>s.then(()=>l()),Promise.resolve())}function Jh(t,s){const l=[],o=[],d=[],_=Math.max(s.matched.length,t.matched.length);for(let f=0;f<_;f++){const m=s.matched[f];m&&(t.matched.find(u=>Di(u,m))?o.push(m):l.push(m));const a=t.matched[f];a&&(s.matched.find(u=>Di(u,a))||d.push(a))}return[l,o,d]}function Uh(){return Pe(aa)}const Yh=E({name:"Sidebar",setup(){const t=Uh();return{isActive:f=>t.path===f,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"}]}}}),hc=t=>(Cs("data-v-101414dd"),t=t(),ys(),t),Gh={class:"sidemenu"},Wh={style:{flex:"1","overflow-y":"scroll"}},Kh=hc(()=>y("strong",null," Fomantic UI Vue ",-1)),Qh=hc(()=>y("b",null,"Getting Started",-1));function Xh(t,s,l,o,d,_){const f=b("sui-menu-item"),m=b("sui-menu-header"),a=b("sui-menu-menu"),u=b("sui-menu");return X(),oe("div",Gh,[y("div",Wh,[e(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[e(f,{as:"div"},{default:i(()=>[Kh]),_:1}),e(f,{as:"router-link",to:"/"},{default:i(()=>[Qh]),_:1}),e(f,{as:"div"},{default:i(()=>[e(m,{content:"Elements"}),e(a,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.elements,h=>(X(),Ue(f,{key:h.name,name:h.name,to:h.path,active:t.isActive(h.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(m,{content:"Collections"}),e(a,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.collections,h=>(X(),Ue(f,{key:h.name,name:h.name,to:h.path,active:t.isActive(h.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(m,{content:"Views"}),e(a,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.views,h=>(X(),Ue(f,{key:h.name,name:h.name,to:h.path,active:t.isActive(h.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(m,{content:"Modules"}),e(a,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.modules,h=>(X(),Ue(f,{key:h.name,name:h.name,to:h.path,active:t.isActive(h.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})])])}var Zh=_e(Yh,[["render",Xh],["__scopeId","data-v-101414dd"]]);const ep=E({name:"Home",components:{Sidebar:Zh}}),tp={class:"article"};function ip(t,s,l,o,d,_){const f=b("sidebar"),m=b("router-view");return X(),oe("div",null,[e(f),y("div",tp,[e(m)])])}var sp=_e(ep,[["render",ip]]),mo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function np(t){if(t.__esModule)return t;var s=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(l){var o=Object.getOwnPropertyDescriptor(t,l);Object.defineProperty(s,l,o.get?o:{enumerable:!0,get:function(){return t[l]}})}),s}var lp=np(Nf),pc={exports:{}};(function(t){var s=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,_=0,f={},m={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function p($){return $ instanceof a?new a($.type,p($.content),$.alias):Array.isArray($)?$.map(p):$.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++_}),p.__id},clone:function p($,k){k=k||{};var x,R;switch(m.util.type($)){case"Object":if(R=m.util.objId($),k[R])return k[R];x={},k[R]=x;for(var z in $)$.hasOwnProperty(z)&&(x[z]=p($[z],k));return x;case"Array":return R=m.util.objId($),k[R]?k[R]:(x=[],k[R]=x,$.forEach(function(F,P){x[P]=p(F,k)}),x);default:return $}},getLanguage:function(p){for(;p;){var $=d.exec(p.className);if($)return $[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,$){p.className=p.className.replace(RegExp(d,"gi"),""),p.classList.add("language-"+$)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(x){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(p){var $=document.getElementsByTagName("script");for(var k in $)if($[k].src==p)return $[k]}return null}},isActive:function(p,$,k){for(var x="no-"+$;p;){var R=p.classList;if(R.contains($))return!0;if(R.contains(x))return!1;p=p.parentElement}return!!k}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(p,$){var k=m.util.clone(m.languages[p]);for(var x in $)k[x]=$[x];return k},insertBefore:function(p,$,k,x){x=x||m.languages;var R=x[p],z={};for(var F in R)if(R.hasOwnProperty(F)){if(F==$)for(var P in k)k.hasOwnProperty(P)&&(z[P]=k[P]);k.hasOwnProperty(F)||(z[F]=R[F])}var U=x[p];return x[p]=z,m.languages.DFS(m.languages,function(Z,N){N===U&&Z!=p&&(this[Z]=z)}),z},DFS:function p($,k,x,R){R=R||{};var z=m.util.objId;for(var F in $)if($.hasOwnProperty(F)){k.call($,F,$[F],x||F);var P=$[F],U=m.util.type(P);U==="Object"&&!R[z(P)]?(R[z(P)]=!0,p(P,k,null,R)):U==="Array"&&!R[z(P)]&&(R[z(P)]=!0,p(P,k,F,R))}}},plugins:{},highlightAll:function(p,$){m.highlightAllUnder(document,p,$)},highlightAllUnder:function(p,$,k){var x={callback:k,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};m.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),m.hooks.run("before-all-elements-highlight",x);for(var R=0,z;z=x.elements[R++];)m.highlightElement(z,$===!0,x.callback)},highlightElement:function(p,$,k){var x=m.util.getLanguage(p),R=m.languages[x];m.util.setLanguage(p,x);var z=p.parentElement;z&&z.nodeName.toLowerCase()==="pre"&&m.util.setLanguage(z,x);var F=p.textContent,P={element:p,language:x,grammar:R,code:F};function U(N){P.highlightedCode=N,m.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,m.hooks.run("after-highlight",P),m.hooks.run("complete",P),k&&k.call(P.element)}if(m.hooks.run("before-sanity-check",P),z=P.element.parentElement,z&&z.nodeName.toLowerCase()==="pre"&&!z.hasAttribute("tabindex")&&z.setAttribute("tabindex","0"),!P.code){m.hooks.run("complete",P),k&&k.call(P.element);return}if(m.hooks.run("before-highlight",P),!P.grammar){U(m.util.encode(P.code));return}if($&&o.Worker){var Z=new Worker(m.filename);Z.onmessage=function(N){U(N.data)},Z.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else U(m.highlight(P.code,P.grammar,P.language))},highlight:function(p,$,k){var x={code:p,grammar:$,language:k};if(m.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=m.tokenize(x.code,x.grammar),m.hooks.run("after-tokenize",x),a.stringify(m.util.encode(x.tokens),x.language)},tokenize:function(p,$){var k=$.rest;if(k){for(var x in k)$[x]=k[x];delete $.rest}var R=new c;return g(R,R.head,p),h(p,R,$,R.head,0),r(R)},hooks:{all:{},add:function(p,$){var k=m.hooks.all;k[p]=k[p]||[],k[p].push($)},run:function(p,$){var k=m.hooks.all[p];if(!(!k||!k.length))for(var x=0,R;R=k[x++];)R($)}},Token:a};o.Prism=m;function a(p,$,k,x){this.type=p,this.content=$,this.alias=k,this.length=(x||"").length|0}a.stringify=function p($,k){if(typeof $=="string")return $;if(Array.isArray($)){var x="";return $.forEach(function(U){x+=p(U,k)}),x}var R={type:$.type,content:p($.content,k),tag:"span",classes:["token",$.type],attributes:{},language:k},z=$.alias;z&&(Array.isArray(z)?Array.prototype.push.apply(R.classes,z):R.classes.push(z)),m.hooks.run("wrap",R);var F="";for(var P in R.attributes)F+=" "+P+'="'+(R.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+R.tag+' class="'+R.classes.join(" ")+'"'+F+">"+R.content+"</"+R.tag+">"};function u(p,$,k,x){p.lastIndex=$;var R=p.exec(k);if(R&&x&&R[1]){var z=R[1].length;R.index+=z,R[0]=R[0].slice(z)}return R}function h(p,$,k,x,R,z){for(var F in k)if(!(!k.hasOwnProperty(F)||!k[F])){var P=k[F];P=Array.isArray(P)?P:[P];for(var U=0;U<P.length;++U){if(z&&z.cause==F+","+U)return;var Z=P[U],N=Z.inside,ue=!!Z.lookbehind,Ce=!!Z.greedy,V=Z.alias;if(Ce&&!Z.pattern.global){var te=Z.pattern.toString().match(/[imsuy]*$/)[0];Z.pattern=RegExp(Z.pattern.source,te+"g")}for(var re=Z.pattern||Z,se=x.next,we=R;se!==$.tail&&!(z&&we>=z.reach);we+=se.value.length,se=se.next){var Ne=se.value;if($.length>p.length)return;if(!(Ne instanceof a)){var Ye=1,Le;if(Ce){if(Le=u(re,we,p,ue),!Le||Le.index>=p.length)break;var ie=Le.index,Ke=Le.index+Le[0].length,Ze=we;for(Ze+=se.value.length;ie>=Ze;)se=se.next,Ze+=se.value.length;if(Ze-=se.value.length,we=Ze,se.value instanceof a)continue;for(var I=se;I!==$.tail&&(Ze<Ke||typeof I.value=="string");I=I.next)Ye++,Ze+=I.value.length;Ye--,Ne=p.slice(we,Ze),Le.index-=we}else if(Le=u(re,0,Ne,ue),!Le)continue;var ie=Le.index,W=Le[0],ne=Ne.slice(0,ie),Be=Ne.slice(ie+W.length),Re=we+Ne.length;z&&Re>z.reach&&(z.reach=Re);var ge=se.prev;ne&&(ge=g($,ge,ne),we+=ne.length),v($,ge,Ye);var be=new a(F,N?m.tokenize(W,N):W,V,W);if(se=g($,ge,be),Be&&g($,se,Be),Ye>1){var T={cause:F+","+U,reach:Re};h(p,$,k,se.prev,we,T),z&&T.reach>z.reach&&(z.reach=T.reach)}}}}}}function c(){var p={value:null,prev:null,next:null},$={value:null,prev:p,next:null};p.next=$,this.head=p,this.tail=$,this.length=0}function g(p,$,k){var x=$.next,R={value:k,prev:$,next:x};return $.next=R,x.prev=R,p.length++,R}function v(p,$,k){for(var x=$.next,R=0;R<k&&x!==p.tail;R++)x=x.next;$.next=x,x.prev=$,p.length-=R}function r(p){for(var $=[],k=p.head.next;k!==p.tail;)$.push(k.value),k=k.next;return $}if(!o.document)return o.addEventListener&&(m.disableWorkerMessageHandler||o.addEventListener("message",function(p){var $=JSON.parse(p.data),k=$.language,x=$.code,R=$.immediateClose;o.postMessage(m.highlight(x,m.languages[k],k)),R&&o.close()},!1)),m;var C=m.util.currentScript();C&&(m.filename=C.src,C.hasAttribute("data-manual")&&(m.manual=!0));function w(){m.manual||m.highlightAll()}if(!m.manual){var A=document.readyState;A==="loading"||A==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",w):window.requestAnimationFrame?window.requestAnimationFrame(w):window.setTimeout(w,16)}return m}(s);t.exports&&(t.exports=l),typeof mo!="undefined"&&(mo.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(d,_){var f={};f["language-"+_]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[_]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var m={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};m["language-"+_]={pattern:/[\s\S]+/,inside:l.languages[_]};var a={};a[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:m},l.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,d){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:l.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var _=o.languages.markup;_&&(_.tag.addInlined("style","css"),_.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",d=function(C,w){return"\u2716 Error "+C+" while fetching file: "+w},_="\u2716 Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},m="data-src-status",a="loading",u="loaded",h="failed",c="pre[data-src]:not(["+m+'="'+u+'"]):not(['+m+'="'+a+'"])';function g(C,w,A){var p=new XMLHttpRequest;p.open("GET",C,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?w(p.responseText):p.status>=400?A(d(p.status,p.statusText)):A(_))},p.send(null)}function v(C){var w=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(w){var A=Number(w[1]),p=w[2],$=w[3];return p?$?[A,Number($)]:[A,void 0]:[A,A]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+c}),l.hooks.add("before-sanity-check",function(C){var w=C.element;if(w.matches(c)){C.code="",w.setAttribute(m,a);var A=w.appendChild(document.createElement("CODE"));A.textContent=o;var p=w.getAttribute("data-src"),$=C.language;if($==="none"){var k=(/\.(\w+)$/.exec(p)||[,"none"])[1];$=f[k]||k}l.util.setLanguage(A,$),l.util.setLanguage(w,$);var x=l.plugins.autoloader;x&&x.loadLanguages($),g(p,function(R){w.setAttribute(m,u);var z=v(w.getAttribute("data-range"));if(z){var F=R.split(/\r\n?|\n/g),P=z[0],U=z[1]==null?F.length:z[1];P<0&&(P+=F.length),P=Math.max(0,Math.min(P-1,F.length)),U<0&&(U+=F.length),U=Math.max(0,Math.min(U,F.length)),R=F.slice(P,U).join(`
`),w.hasAttribute("data-start")||w.setAttribute("data-start",String(P+1))}A.textContent=R,l.highlightElement(A)},function(R){w.setAttribute(m,h),A.textContent=R})}}),l.plugins.fileHighlight={highlight:function(w){for(var A=(w||document).querySelectorAll(c),p=0,$;$=A[p++];)l.highlightElement($)}};var r=!1;l.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(pc);function ap(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Fs=lp,Nn=ap(pc.exports),op=Fs.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(s,l){var o=l.slots,d=l.attrs,_=o&&o.default&&o.default()||[],f=s.code||_&&_.length?_[0].children:"",m=s.inline,a=s.language,u=Nn.languages[a],h="language-".concat(a);return function(){return m?Fs.h("code",{class:[h],innerHTML:Nn.highlight(f,u)}):Fs.h("pre",Object.assign({},d,{class:[d.class,h]}),[Fs.h("code",Object.assign({},d,{class:[d.class,h],innerHTML:Nn.highlight(f,u)}))])}}}),gc=op;const up=E({name:"DocPageHeader",props:{title:String,sub:String}}),rp={class:"intro"};function dp(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment");return X(),Ue(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",rp,[e(m,{as:"h1"},{default:i(()=>[n(xe(t.title)+" ",1),e(f,null,{default:i(()=>[n(xe(t.sub),1)]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}var Fe=_e(up,[["render",dp]]);const cp=E({name:"GettingStarted",components:{Prism:gc,DocPageHeader:Fe}}),An=t=>(Cs("data-v-4bf2e10a"),t=t(),ys(),t),mp=n("Install"),_p=An(()=>y("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),fp=n("via Package Manager"),hp=n(xe(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`)),pp=n("Usage"),gp=An(()=>y("p",null," You can import all components as Vue plugin. ",-1)),bp=An(()=>y("br",null,null,-1)),vp=An(()=>y("p",null," Or pick a component indivisually, add it to your components option. ",-1));function Cp(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("prism"),u=b("sui-container");return X(),oe("div",null,[e(f,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(u,{class:"main"},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[mp]),_:1}),_p,e(m,{as:"h3"},{default:i(()=>[fp]),_:1}),e(a,{language:"bash"},{default:i(()=>[hp]),_:1}),e(m,{as:"h2"},{default:i(()=>[pp]),_:1}),gp,e(a,{language:"js"},{default:i(()=>[n(xe(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),bp,vp,e(a,{language:"js"},{default:i(()=>[n(xe(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}var yp=_e(cp,[["render",Cp],["__scopeId","data-v-4bf2e10a"]]);const wp=E({name:"DocExample",components:{Prism:gc},props:{title:String,description:String,code:String},setup(){const t=L(!1);return{active:t,toggle:()=>t.value=!t.value}}}),$p={class:"example"};function Ap(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-grid-column"),u=b("sui-icon"),h=b("sui-grid-row"),c=b("prism"),g=b("sui-grid");return X(),oe("div",$p,[e(g,{columns:2},{default:i(()=>[e(h,null,{default:i(()=>[e(a,null,{default:i(()=>[e(m,{as:"h3"},{default:i(()=>[n(xe(t.title)+" ",1),e(f,null,{default:i(()=>[n(xe(t.description),1)]),_:1})]),_:1})]),_:1}),e(a,{textAlign:"right"},{default:i(()=>[e(u,{name:"code",color:"grey",onClick:t.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(a,{width:16},{default:i(()=>[Bd(t.$slots,"default")]),_:3}),t.active?(X(),Ue(a,{key:0,width:16},{default:i(()=>[e(c,{language:"markup"},{default:i(()=>[n(xe(t.code),1)]),_:1})]),_:1})):Ed("",!0)]),_:3})]),_:3})])}var ve=_e(wp,[["render",Ap]]),fe="/vue-fomantic-ui/images/wireframe/paragraph.png";const Sp=E({name:"ButtonDoc",components:{DocExample:ve},setup(){const t=L(!1);return{active:t,toggle:()=>t.value=!t.value,buttonExample:`<template>
  <sui-button>Follow</sui-button>
</template>`,emphasisExample:`<template>
  <div>
    <sui-button primary>Primary</sui-button>
    <sui-button secondary>Secondary</sui-button>
  </div>
</template>`,animatedExample:`<template>
  <div>
    <sui-button animated>
      <sui-button-content visible>Next</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="arrow right" />
      </sui-button-content>
    </sui-button>
    <sui-button animated="vertical">
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
      <sui-button-content hidden>Shop</sui-button-content>
    </sui-button>
    <sui-button animated="fade">
      <sui-button-content visible>
        Sign-up for a Pro account
      </sui-button-content>
      <sui-button-content hidden>$12.99 a month</sui-button-content>
    </sui-button>
  </div>
<template>`,labeledExample:`<sui-button labelPosition="right" as="div">
  <sui-button icon>
    <sui-icon name="heart" />
    Like
  </sui-button>
  <sui-label basic>2,048</sui-label>
</sui-button>
<sui-button labelPosition="left" as="div">
  <sui-label basic pointing="right">2,048</sui-label>
  <sui-button icon>
    <sui-icon name="heart" />
    Like
  </sui-button>
</sui-button>
<sui-button labelPosition="left" as="div">
  <sui-label basic>1,048</sui-label>
  <sui-button icon>
    <sui-icon name="fork" />
  </sui-button>
</sui-button>`,labeledExample2:`<sui-button labelPosition="right" as="div">
  <sui-button icon color="red">
    <sui-icon name="heart" />
    Like
  </sui-button>
  <sui-label basic pointing="left" color="red">
    1,048
  </sui-label>
</sui-button>
<sui-button labelPosition="right" as="div">
  <sui-button basic icon color="blue">
    <sui-icon name="fork" />
    Forks
  </sui-button>
  <sui-label basic pointing="left" color="blue">
    1,048
  </sui-label>
</sui-button>`,iconExample:`<template>
  <sui-button icon>
    <sui-icon name="cloud" />
  </sui-button>
</template>`,labeledIconExample:`<template>
  <div>
    <sui-button labeled icon>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button labeled="right" icon>
      <sui-icon name="right arrow" />
      Next
    </sui-button>
  <div>
</template>`,basicExample:`<template>
  <sui-button basic>
    <sui-icon name="user" />
    Add Friend
  </sui-button>
</template>`,basicExample2:`<template>
  <div>
    <sui-button basic primary>Primary</sui-button>
    <sui-button basic secondary>Secondary</sui-button>
    <sui-button basic positive>Positive</sui-button>
    <sui-button basic negative>Negative</sui-button>
  </div>
</template>`,basicExample3:`<template>
  <div>
    <sui-button basic color="red">Red</sui-button>
    <sui-button basic color="orange">Orange</sui-button>
    <sui-button basic color="yellow">Yellow</sui-button>
    <sui-button basic color="olive">Olive</sui-button>
    <sui-button basic color="green">Green</sui-button>
    <sui-button basic color="teal">Teal</sui-button>
    <sui-button basic color="blue">Blue</sui-button>
    <sui-button basic color="violet">Violet</sui-button>
    <sui-button basic color="purple">Purple</sui-button>
    <sui-button basic color="pink">Pink</sui-button>
    <sui-button basic color="brown">Brown</sui-button>
    <sui-button basic color="grey">Grey</sui-button>
    <sui-button basic color="black">Black</sui-button>
  </div>
</template>`,invertedExample:`<template>
  <sui-segment inverted>
    <sui-button inverted>Standard</sui-button>
    <sui-button inverted primary>Primary</sui-button>
    <sui-button inverted secondary>Secondary</sui-button>
    <sui-button inverted color="red">Red</sui-button>
    <sui-button inverted color="orange">Orange</sui-button>
    <sui-button inverted color="yellow">Yellow</sui-button>
    <sui-button inverted color="olive">Olive</sui-button>
    <sui-button inverted color="green">Green</sui-button>
    <sui-button inverted color="teal">Teal</sui-button>
    <sui-button inverted color="blue">Blue</sui-button>
    <sui-button inverted color="violet">Violet</sui-button>
    <sui-button inverted color="purple">Purple</sui-button>
    <sui-button inverted color="pink">Pink</sui-button>
    <sui-button inverted color="brown">Brown</sui-button>
    <sui-button inverted color="grey">Grey</sui-button>
    <sui-button inverted color="black">Black</sui-button>
  </sui-segment>
</template>`,invertedExample2:`<template>
  <sui-segment inverted>
    <sui-button inverted basic>Basic</sui-button>
    <sui-button inverted basic primary>Primary</sui-button>
    <sui-button inverted basic secondary>Secondary</sui-button>
    <sui-button inverted basic color="red">Basic Red</sui-button>
    <sui-button inverted basic color="orange">Basic Orange</sui-button>
    <sui-button inverted basic color="yellow">Basic Yellow</sui-button>
    <sui-button inverted basic color="olive">Basic Olive</sui-button>
    <sui-button inverted basic color="green">Basic Green</sui-button>
    <sui-button inverted basic color="teal">Basic Teal</sui-button>
    <sui-button inverted basic color="blue">Basic Blue</sui-button>
    <sui-button inverted basic color="violet">Basic Violet</sui-button>
    <sui-button inverted basic color="purple">Basic Purple</sui-button>
    <sui-button inverted basic color="pink">Basic Pink</sui-button>
    <sui-button inverted basic color="brown">Basic Brown</sui-button>
    <sui-button inverted basic color="grey">Basic Grey</sui-button>
    <sui-button inverted basic color="black">Basic Black</sui-button>
  </sui-segment>
</template>`,buttonsExample:`<template>
  <sui-button-group>
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,iconButtonsExample:`<template>
  <div>
    <sui-button-group icon>
      <sui-button><sui-icon name="align left" /></sui-button>
      <sui-button><sui-icon name="align center" /></sui-button>
      <sui-button><sui-icon name="align right" /></sui-button>
      <sui-button><sui-icon name="align justify" /></sui-button>
    </sui-button-group>
    <sui-button-group icon>
      <sui-button><sui-icon name="bold" /></sui-button>
      <sui-button><sui-icon name="underline" /></sui-button>
      <sui-button><sui-icon name="text width" /></sui-button>
    </sui-button-group>
  </div>
</template>`,conditionalsExample:`<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`,conditionalsExample2:`<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or" data-text="ou"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`,activeExample:`<template>
  <sui-button active>
    <sui-icon name="user" />
    Follow
  </sui-button>
</template>`,disabledExample:`<template>
  <sui-button disabled>
    <sui-icon name="user" />
    Followed
  </sui-button>
</template>`,loadingExample:`<template>
  <div>
    <sui-button loading>Loading</sui-button>
    <sui-button basic loading>Loading</sui-button>
    <sui-button primary loading>Loading</sui-button>
    <sui-button secondary loading>Loading</sui-button>
  </div>
</template>`,socialExample:`<template>
  <div>
    <sui-button facebook>
      <sui-icon name="facebook" />
      Facebook
    </sui-button>
    <sui-button twitter>
      <sui-icon name="twitter" />
      Twitter
    </sui-button>
    <sui-button vk>
      <sui-icon name="vk" />
      VK
    </sui-button>
    <sui-button linkedin>
      <sui-icon name="linkedin" />
      LinkedIn
    </sui-button>
    <sui-button instagram>
      <sui-icon name="instagram" />
      Instagram
    </sui-button>
    <sui-button youtube>
      <sui-icon name="youtube" />
      YouTube
    </sui-button>
  </div>
</template>`,sizeExample:`<template>
  <div>
    <sui-button size="mini">Mini</sui-button>
    <sui-button size="tiny">Tiny</sui-button>
    <sui-button size="small">Small</sui-button>
    <sui-button size="medium">Medium</sui-button>
    <sui-button size="large">Large</sui-button>
    <sui-button size="big">Big</sui-button>
    <sui-button size="huge">Huge</sui-button>
    <sui-button size="massive">Massive</sui-button>
  </div>
</template>`,floatedExample:`<template>
  <div>
    <sui-button floated="left">Left Floated</sui-button>
    <sui-button floated="right">Right Floated</sui-button>
  </div>
</template>`,coloredExample:`<template>
  <div>
    <sui-button color="red">Red</sui-button>
    <sui-button color="orange">Orange</sui-button>
    <sui-button color="yellow">Yellow</sui-button>
    <sui-button color="olive">Olive</sui-button>
    <sui-button color="green">Green</sui-button>
    <sui-button color="teal">Teal</sui-button>
    <sui-button color="blue">Blue</sui-button>
    <sui-button color="violet">Violet</sui-button>
    <sui-button color="purple">Purple</sui-button>
    <sui-button color="pink">Pink</sui-button>
    <sui-button color="brown">Brown</sui-button>
    <sui-button color="grey">Grey</sui-button>
    <sui-button color="black">Black</sui-button>
  </div>
</template>`,compactExample:`<template>
  <div>
    <sui-button compact>Compact</sui-button>
    <sui-button>Normal</sui-button>
  </div>
</template>`,toggleExample:`<template>
  <sui-button toggle :active="active" @click="() => active = !active">Vote</sui-button>
</template>`,positiveExample:`<template>
  <sui-button positive>Positive</sui-button>
</template>`,negativeExample:`<template>
  <sui-button negative>Negative</sui-button>
</template>`,fluidExample:`<template>
  <sui-button fluid>Fluid</sui-button>
</template>`,circularExample:`<template>
  <sui-button circular icon>
    <sui-icon name="settings" />
  </sui-button>
</template>`,circularExample2:`<template>
  <div>
    <sui-button facebook circular icon>
      <sui-icon name="facebook" />
    </sui-button>
    <sui-button twitter circular icon>
      <sui-icon name="twitter" />
    </sui-button>
    <sui-button linkedin circular icon>
      <sui-icon name="linkedin" />
    </sui-button>
    <sui-button youtube circular icon>
      <sui-icon name="youtube" />
    </sui-button>
  </div>
</template>`,attachedExample:`<template>
  <div>
    <sui-button attached="top">Top</sui-button>
    <sui-segment attached>
      <img src="/images/wireframe/paragraph.png">
    </sui-segment>
    <sui-button attached="bottom">Bottom</sui-button>
  </div>
</template>`,attachedExample2:`<template>
  <div>
    <sui-button-group attached="top">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
    <sui-segment attached>
      <img src="/images/wireframe/paragraph.png">
    </sui-segment>
    <sui-button-group attached="bottom">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
  </div>
</template>`,horizontalAttachedExample:`<tempalte>
  <div>
    <sui-button attached="left">Left</sui-button>
    <sui-button attached="right">Right</sui-button>
  </div>
</template>`,verticalButtonsExample:`<template>
  <sui-button-group vertical>
    <sui-button>Feed</sui-button>
    <sui-button>Messages</sui-button>
    <sui-button>Events</sui-button>
    <sui-button>Photos</sui-button>
  </sui-button-group>
</template>`,labeledIconButtonsExample:`<template>
  <sui-button-group vertical labeled icon>
    <sui-button>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button>
      <sui-icon name="play" />
      Play
    </sui-button>
    <sui-button>
      <sui-icon name="shuffle" />
      Shuffle
    </sui-button>
  </sui-button-group>
</template>`,mixedGroupExample:`<template>
  <sui-button-group>
    <sui-button labelPosition="left" icon>
      <sui-icon name="left chevron" />
      Back
    </sui-button>
    <sui-button>
      <sui-icon name="stop" />
      Stop
    </sui-button>
    <sui-button labelPosition="right" icon>
      <sui-icon name="right chevron" />
      Forward
    </sui-button>
  </sui-button-group>
</template>`,equalWidthExample:`<template>
  <div>
    <sui-button-group :widths="5">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Warranty</sui-button>
      <sui-button>Reviews</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group :widths="3">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
  </div>
</template>`,coloredButtonsExample:`<template>
  <sui-button-group color="blue">
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,basicButtonsExample:`<template>
  <div>
    <sui-button-group basic>
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
      <sui-button>Three</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group basic vertical>
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
      <sui-button>Three</sui-button>
    </sui-button-group>
  </div>
</template>`,basicButtonsExample2:`<template>
  <sui-button-group>
    <sui-button basic color="red">One</sui-button>
    <sui-button basic color="blue">Two</sui-button>
    <sui-button basic color="green">Three</sui-button>
  </sui-button-group>
</template>`,groupSizesExample:`<template>
  <sui-button-group size="large">
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,groupSizesExample2:`<template>
  <sui-button-group basic icon size="small">
    <sui-button><sui-icon name="file" /></sui-button>
    <sui-button><sui-icon name="save" /></sui-button>
    <sui-button><sui-icon name="upload" /></sui-button>
    <sui-button><sui-icon name="download" /></sui-button>
  </sui-button-group>
</template>`,groupSizesExample3:`<template>
  <sui-button-group size="large">
    <sui-button>One</sui-button>
    <div class="or"></div>
    <sui-button>Two</sui-button>
  </sui-button-group>
</template>`}}}),Ss=t=>(Cs("data-v-7ebf685c"),t=t(),ys(),t),kp={class:"intro"},Tp=n("Button "),xp=n("A button indicates a possible user action"),Ep=n("Types"),Bp=n("Follow"),Rp=n("Primary"),zp=n("Secondary"),Pp=n("Next"),Mp=n("Shop"),Dp=n(" Sign-up for a Pro account "),Fp=n("$12.99 a month"),Ip=n(" Like "),Np=n("2,048"),Lp=n("2,048"),Vp=n(" Like "),Op=n("1,048"),Hp=n(" Like "),jp=n(" 1,048 "),qp=n(" Forks "),Jp=n(" 1,048 "),Up=n(" Pause "),Yp=n(" Next "),Gp=n(" Add Friend "),Wp=n("Primary"),Kp=n("Secondary"),Qp=n("Positive"),Xp=n("Negative"),Zp=n("Red"),eg=n("Orange"),tg=n("Yellow"),ig=n("Olive"),sg=n("Green"),ng=n("Teal"),lg=n("Blue"),ag=n("Violet"),og=n("Purple"),ug=n("Pink"),rg=n("Brown"),dg=n("Grey"),cg=n("Black"),mg=n("Standard"),_g=n("Primary"),fg=n("Secondary"),hg=n("Red"),pg=n("Orange"),gg=n("Yellow"),bg=n("Olive"),vg=n("Green"),Cg=n("Teal"),yg=n("Blue"),wg=n("Violet"),$g=n("Purple"),Ag=n("Pink"),Sg=n("Brown"),kg=n("Grey"),Tg=n("Black"),xg=n("Basic"),Eg=n("Primary"),Bg=n("Secondary"),Rg=n("Basic Red"),zg=n("Basic Orange"),Pg=n("Basic Yellow"),Mg=n("Basic Olive"),Dg=n("Basic Green"),Fg=n("Basic Teal"),Ig=n("Basic Blue"),Ng=n("Basic Violet"),Lg=n("Basic Purple"),Vg=n("Basic Pink"),Og=n("Basic Brown"),Hg=n("Basic Grey"),jg=n("Basic Black"),qg=n("Groups"),Jg=n("One"),Ug=n("Two"),Yg=n("Three"),Gg=n("Content"),Wg=n("Cancel"),Kg=Ss(()=>y("div",{class:"or"},null,-1)),Qg=n("Save"),Xg=n("Cancel"),Zg=Ss(()=>y("div",{class:"or","data-text":"ou"},null,-1)),eb=n("Save"),tb=n("States"),ib=n(" Follow "),sb=n(" Followed "),nb=n("Loading"),lb=n("Loading"),ab=n("Loading"),ob=n("Loading"),ub=n("Variations"),rb=n(" Facebook "),db=n(" Twitter "),cb=n(" VK "),mb=n(" LinkedIn "),_b=n(" Instagram "),fb=n(" YouTube "),hb=n("Mini"),pb=n("Tiny"),gb=n("Small"),bb=n("Medium"),vb=n("Large"),Cb=n("Big"),yb=n("Huge"),wb=n("Massive"),$b=n("Left Floated"),Ab=n("Right Floated"),Sb=n("Red"),kb=n("Orange"),Tb=n("Yellow"),xb=n("Olive"),Eb=n("Green"),Bb=n("Teal"),Rb=n("Blue"),zb=n("Violet"),Pb=n("Purple"),Mb=n("Pink"),Db=n("Brown"),Fb=n("Grey"),Ib=n("Black"),Nb=n("Compact"),Lb=n("Normal"),Vb=n("Vote"),Ob=n("Positive"),Hb=n("Negative"),jb=n("Fluid"),qb=n("Top"),Jb=Ss(()=>y("img",{src:fe},null,-1)),Ub=n("Bottom"),Yb=n("One"),Gb=n("Two"),Wb=Ss(()=>y("img",{src:fe},null,-1)),Kb=n("One"),Qb=n("Two"),Xb=n("Left"),Zb=n("Right"),e1=n("Group Variations"),t1=n("Feed"),i1=n("Messages"),s1=n("Events"),n1=n("Photos"),l1=n(" Pause "),a1=n(" Play "),o1=n(" Shuffle "),u1=n(" Back "),r1=n(" Stop "),d1=n(" Forward "),c1=n("Overview"),m1=n("Specs"),_1=n("Warranty"),f1=n("Reviews"),h1=n("Support"),p1=n("Overview"),g1=n("Specs"),b1=n("Support"),v1=n("One"),C1=n("Two"),y1=n("Three"),w1=n("One"),$1=n("Two"),A1=n("Three"),S1=n("One"),k1=n("Two"),T1=n("Three"),x1=n("One"),E1=n("Two"),B1=n("Three"),R1=n("One"),z1=n("Two"),P1=n("Three"),M1=n("One"),D1=Ss(()=>y("div",{class:"or"},null,-1)),F1=n("Two");function I1(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-button"),C=b("doc-example"),w=b("sui-button-content"),A=b("sui-label"),p=b("sui-button-group");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,null,{default:i(()=>[y("div",kp,[e(m,{as:"h1"},{default:i(()=>[Tp,e(f,null,{default:i(()=>[xp]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Ep]),_:1}),e(C,{title:"Button",description:"A standard button",code:t.buttonExample},{default:i(()=>[e(r,null,{default:i(()=>[Bp]),_:1})]),_:1},8,["code"]),e(C,{title:"Emphasis",description:"A button can be formatted to show different levels of emphasis",code:t.emphasisExample},{default:i(()=>[y("div",null,[e(r,{primary:""},{default:i(()=>[Rp]),_:1}),e(r,{secondary:""},{default:i(()=>[zp]),_:1})])]),_:1},8,["code"]),e(C,{title:"Animated",description:"A button can animate to show hidden content",code:t.animatedExample},{default:i(()=>[e(r,{animated:""},{default:i(()=>[e(w,{visible:""},{default:i(()=>[Pp]),_:1}),e(w,{hidden:""},{default:i(()=>[e(u,{name:"arrow right"})]),_:1})]),_:1}),e(r,{animated:"vertical"},{default:i(()=>[e(w,{visible:""},{default:i(()=>[e(u,{name:"shop"})]),_:1}),e(w,{hidden:""},{default:i(()=>[Mp]),_:1})]),_:1}),e(r,{animated:"fade"},{default:i(()=>[e(w,{visible:""},{default:i(()=>[Dp]),_:1}),e(w,{hidden:""},{default:i(()=>[Fp]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Labeled",description:"A button can appear alongside a label",code:t.labeledExample},{default:i(()=>[e(r,{labelPosition:"right",as:"div"},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(u,{name:"heart"}),Ip]),_:1}),e(A,{basic:""},{default:i(()=>[Np]),_:1})]),_:1}),e(r,{labelPosition:"left",as:"div"},{default:i(()=>[e(A,{basic:"",pointing:"right"},{default:i(()=>[Lp]),_:1}),e(r,{icon:""},{default:i(()=>[e(u,{name:"heart"}),Vp]),_:1})]),_:1}),e(r,{labelPosition:"left",as:"div"},{default:i(()=>[e(A,{basic:""},{default:i(()=>[Op]),_:1}),e(r,{icon:""},{default:i(()=>[e(u,{name:"fork"})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{code:t.labeledExample2},{default:i(()=>[e(r,{labelPosition:"right",as:"div"},{default:i(()=>[e(r,{icon:"",color:"red"},{default:i(()=>[e(u,{name:"heart"}),Hp]),_:1}),e(A,{basic:"",pointing:"left",color:"red"},{default:i(()=>[jp]),_:1})]),_:1}),e(r,{labelPosition:"right",as:"div"},{default:i(()=>[e(r,{basic:"",icon:"",color:"blue"},{default:i(()=>[e(u,{name:"fork"}),qp]),_:1}),e(A,{basic:"",pointing:"left",color:"blue"},{default:i(()=>[Jp]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Icon",description:"A button can have only an icon",code:t.iconExample},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(u,{name:"cloud"})]),_:1})]),_:1},8,["code"]),e(C,{title:"Labeled Icon",description:"A button can use an icon as a label",code:t.labeledIconExample},{default:i(()=>[e(r,{labeled:"",icon:""},{default:i(()=>[e(u,{name:"pause"}),Up]),_:1}),e(r,{labeled:"right",icon:""},{default:i(()=>[e(u,{name:"right arrow"}),Yp]),_:1})]),_:1},8,["code"]),e(C,{title:"Basic",description:"A basic button is less pronounced",code:t.basicExample},{default:i(()=>[e(r,{basic:""},{default:i(()=>[e(u,{name:"user"}),Gp]),_:1})]),_:1},8,["code"]),e(C,{code:t.basicExample2},{default:i(()=>[e(r,{basic:"",primary:""},{default:i(()=>[Wp]),_:1}),e(r,{basic:"",secondary:""},{default:i(()=>[Kp]),_:1}),e(r,{basic:"",positive:""},{default:i(()=>[Qp]),_:1}),e(r,{basic:"",negative:""},{default:i(()=>[Xp]),_:1})]),_:1},8,["code"]),e(C,{code:t.basicExample3},{default:i(()=>[e(r,{basic:"",color:"red"},{default:i(()=>[Zp]),_:1}),e(r,{basic:"",color:"orange"},{default:i(()=>[eg]),_:1}),e(r,{basic:"",color:"yellow"},{default:i(()=>[tg]),_:1}),e(r,{basic:"",color:"olive"},{default:i(()=>[ig]),_:1}),e(r,{basic:"",color:"green"},{default:i(()=>[sg]),_:1}),e(r,{basic:"",color:"teal"},{default:i(()=>[ng]),_:1}),e(r,{basic:"",color:"blue"},{default:i(()=>[lg]),_:1}),e(r,{basic:"",color:"violet"},{default:i(()=>[ag]),_:1}),e(r,{basic:"",color:"purple"},{default:i(()=>[og]),_:1}),e(r,{basic:"",color:"pink"},{default:i(()=>[ug]),_:1}),e(r,{basic:"",color:"brown"},{default:i(()=>[rg]),_:1}),e(r,{basic:"",color:"grey"},{default:i(()=>[dg]),_:1}),e(r,{basic:"",color:"black"},{default:i(()=>[cg]),_:1})]),_:1},8,["code"]),e(C,{title:"Inverted",description:"A button can be formatted to appear on dark backgrounds",code:t.invertedExample},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{inverted:""},{default:i(()=>[mg]),_:1}),e(r,{inverted:"",primary:""},{default:i(()=>[_g]),_:1}),e(r,{inverted:"",secondary:""},{default:i(()=>[fg]),_:1}),e(r,{inverted:"",color:"red"},{default:i(()=>[hg]),_:1}),e(r,{inverted:"",color:"orange"},{default:i(()=>[pg]),_:1}),e(r,{inverted:"",color:"yellow"},{default:i(()=>[gg]),_:1}),e(r,{inverted:"",color:"olive"},{default:i(()=>[bg]),_:1}),e(r,{inverted:"",color:"green"},{default:i(()=>[vg]),_:1}),e(r,{inverted:"",color:"teal"},{default:i(()=>[Cg]),_:1}),e(r,{inverted:"",color:"blue"},{default:i(()=>[yg]),_:1}),e(r,{inverted:"",color:"violet"},{default:i(()=>[wg]),_:1}),e(r,{inverted:"",color:"purple"},{default:i(()=>[$g]),_:1}),e(r,{inverted:"",color:"pink"},{default:i(()=>[Ag]),_:1}),e(r,{inverted:"",color:"brown"},{default:i(()=>[Sg]),_:1}),e(r,{inverted:"",color:"grey"},{default:i(()=>[kg]),_:1}),e(r,{inverted:"",color:"black"},{default:i(()=>[Tg]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{code:t.invertedExample2},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{inverted:"",basic:""},{default:i(()=>[xg]),_:1}),e(r,{inverted:"",basic:"",primary:""},{default:i(()=>[Eg]),_:1}),e(r,{inverted:"",basic:"",secondary:""},{default:i(()=>[Bg]),_:1}),e(r,{inverted:"",basic:"",color:"red"},{default:i(()=>[Rg]),_:1}),e(r,{inverted:"",basic:"",color:"orange"},{default:i(()=>[zg]),_:1}),e(r,{inverted:"",basic:"",color:"yellow"},{default:i(()=>[Pg]),_:1}),e(r,{inverted:"",basic:"",color:"olive"},{default:i(()=>[Mg]),_:1}),e(r,{inverted:"",basic:"",color:"green"},{default:i(()=>[Dg]),_:1}),e(r,{inverted:"",basic:"",color:"teal"},{default:i(()=>[Fg]),_:1}),e(r,{inverted:"",basic:"",color:"blue"},{default:i(()=>[Ig]),_:1}),e(r,{inverted:"",basic:"",color:"violet"},{default:i(()=>[Ng]),_:1}),e(r,{inverted:"",basic:"",color:"purple"},{default:i(()=>[Lg]),_:1}),e(r,{inverted:"",basic:"",color:"pink"},{default:i(()=>[Vg]),_:1}),e(r,{inverted:"",basic:"",color:"brown"},{default:i(()=>[Og]),_:1}),e(r,{inverted:"",basic:"",color:"grey"},{default:i(()=>[Hg]),_:1}),e(r,{inverted:"",basic:"",color:"black"},{default:i(()=>[jg]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[qg]),_:1}),e(C,{title:"Buttons",description:"Buttons can exist together as a group",code:t.buttonsExample},{default:i(()=>[e(p,null,{default:i(()=>[e(r,null,{default:i(()=>[Jg]),_:1}),e(r,null,{default:i(()=>[Ug]),_:1}),e(r,null,{default:i(()=>[Yg]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Icon Buttons",description:"Buttons can exist together as a group",code:t.iconButtonsExample},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"align left"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"align center"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"align right"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"align justify"})]),_:1})]),_:1}),e(p,{icon:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"bold"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"underline"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"text width"})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Gg]),_:1}),e(C,{title:"Conditionals",description:"Button groups can contain conditionals",code:t.conditionalsExample},{default:i(()=>[e(p,null,{default:i(()=>[e(r,null,{default:i(()=>[Wg]),_:1}),Kg,e(r,{positive:""},{default:i(()=>[Qg]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{code:t.conditionalsExample2},{default:i(()=>[e(p,null,{default:i(()=>[e(r,null,{default:i(()=>[Xg]),_:1}),Zg,e(r,{positive:""},{default:i(()=>[eb]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[tb]),_:1}),e(C,{title:"Active",description:"A button can show it is currently the active user selection",code:t.activeExample},{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"user"}),ib]),_:1})]),_:1},8,["code"]),e(C,{title:"Disabled",description:"A button can show it is currently unable to be interacted with",code:t.disabledExample},{default:i(()=>[e(r,{disabled:""},{default:i(()=>[e(u,{name:"user"}),sb]),_:1})]),_:1},8,["code"]),e(C,{title:"Loading",description:"A button can show a loading indicator",code:t.loadingExample},{default:i(()=>[e(r,{loading:""},{default:i(()=>[nb]),_:1}),e(r,{basic:"",loading:""},{default:i(()=>[lb]),_:1}),e(r,{primary:"",loading:""},{default:i(()=>[ab]),_:1}),e(r,{secondary:"",loading:""},{default:i(()=>[ob]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[ub]),_:1}),e(C,{title:"Social",description:"A button can be formatted to link to a social website",code:t.socialExample},{default:i(()=>[e(r,{facebook:""},{default:i(()=>[e(u,{name:"facebook"}),rb]),_:1}),e(r,{twitter:""},{default:i(()=>[e(u,{name:"twitter"}),db]),_:1}),e(r,{vk:""},{default:i(()=>[e(u,{name:"vk"}),cb]),_:1}),e(r,{linkedin:""},{default:i(()=>[e(u,{name:"linkedin"}),mb]),_:1}),e(r,{instagram:""},{default:i(()=>[e(u,{name:"instagram"}),_b]),_:1}),e(r,{youtube:""},{default:i(()=>[e(u,{name:"youtube"}),fb]),_:1})]),_:1},8,["code"]),e(C,{title:"Size",description:"Buttons can have assorted sizes",code:t.sizeExample},{default:i(()=>[y("div",null,[e(r,{size:"mini"},{default:i(()=>[hb]),_:1}),e(r,{size:"tiny"},{default:i(()=>[pb]),_:1}),e(r,{size:"small"},{default:i(()=>[gb]),_:1}),e(r,{size:"medium"},{default:i(()=>[bb]),_:1}),e(r,{size:"large"},{default:i(()=>[vb]),_:1}),e(r,{size:"big"},{default:i(()=>[Cb]),_:1}),e(r,{size:"huge"},{default:i(()=>[yb]),_:1}),e(r,{size:"massive"},{default:i(()=>[wb]),_:1})])]),_:1},8,["code"]),e(C,{title:"Floated",description:"A button can be aligned to the left or right of its container",code:t.floatedExample},{default:i(()=>[y("div",null,[e(r,{floated:"left"},{default:i(()=>[$b]),_:1}),e(r,{floated:"right"},{default:i(()=>[Ab]),_:1})])]),_:1},8,["code"]),e(C,{title:"Colored",description:"A button can have different colors",code:t.coloredExample},{default:i(()=>[y("div",null,[e(r,{color:"red"},{default:i(()=>[Sb]),_:1}),e(r,{color:"orange"},{default:i(()=>[kb]),_:1}),e(r,{color:"yellow"},{default:i(()=>[Tb]),_:1}),e(r,{color:"olive"},{default:i(()=>[xb]),_:1}),e(r,{color:"green"},{default:i(()=>[Eb]),_:1}),e(r,{color:"teal"},{default:i(()=>[Bb]),_:1}),e(r,{color:"blue"},{default:i(()=>[Rb]),_:1}),e(r,{color:"violet"},{default:i(()=>[zb]),_:1}),e(r,{color:"purple"},{default:i(()=>[Pb]),_:1}),e(r,{color:"pink"},{default:i(()=>[Mb]),_:1}),e(r,{color:"brown"},{default:i(()=>[Db]),_:1}),e(r,{color:"grey"},{default:i(()=>[Fb]),_:1}),e(r,{color:"black"},{default:i(()=>[Ib]),_:1})])]),_:1},8,["code"]),e(C,{title:"Compact",description:"A button can reduce its padding to fit into tighter spaces",code:t.compactExample},{default:i(()=>[y("div",null,[e(r,{compact:""},{default:i(()=>[Nb]),_:1}),e(r,null,{default:i(()=>[Lb]),_:1})])]),_:1},8,["code"]),e(C,{title:"Toggle",description:"A button can be formatted to toggle on and off",code:t.toggleExample},{default:i(()=>[e(r,{toggle:"",active:t.active,onClick:s[0]||(s[0]=()=>t.active=!t.active)},{default:i(()=>[Vb]),_:1},8,["active"])]),_:1},8,["code"]),e(C,{title:"Positive",description:"A button can hint towards a positive consequence",code:t.positiveExample},{default:i(()=>[e(r,{positive:""},{default:i(()=>[Ob]),_:1})]),_:1},8,["code"]),e(C,{title:"Negative",description:"A button can hint towards a negative consequence",code:t.negativeExample},{default:i(()=>[e(r,{negative:""},{default:i(()=>[Hb]),_:1})]),_:1},8,["code"]),e(C,{title:"Fluid",description:"A button can take the width of its container",code:t.fluidExample},{default:i(()=>[e(r,{fluid:""},{default:i(()=>[jb]),_:1})]),_:1},8,["code"]),e(C,{title:"Circular",description:"A button can be circular",code:t.circularExample},{default:i(()=>[e(r,{circular:"",icon:""},{default:i(()=>[e(u,{name:"settings"})]),_:1})]),_:1},8,["code"]),e(C,{code:t.circularExample2},{default:i(()=>[y("div",null,[e(r,{facebook:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"facebook"})]),_:1}),e(r,{twitter:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"twitter"})]),_:1}),e(r,{linkedin:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"linkedin"})]),_:1}),e(r,{youtube:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"youtube"})]),_:1})])]),_:1},8,["code"]),e(C,{title:"Vertically Attached",description:"A button can be attached to the top or bottom of other content",code:t.attachedExample},{default:i(()=>[y("div",null,[e(r,{attached:"top"},{default:i(()=>[qb]),_:1}),e(v,{attached:""},{default:i(()=>[Jb]),_:1}),e(r,{attached:"bottom"},{default:i(()=>[Ub]),_:1})])]),_:1},8,["code"]),e(C,{code:t.attachedExample2},{default:i(()=>[y("div",null,[e(p,{attached:"top"},{default:i(()=>[e(r,null,{default:i(()=>[Yb]),_:1}),e(r,null,{default:i(()=>[Gb]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[Wb]),_:1}),e(p,{attached:"bottom"},{default:i(()=>[e(r,null,{default:i(()=>[Kb]),_:1}),e(r,null,{default:i(()=>[Qb]),_:1})]),_:1})])]),_:1},8,["code"]),e(C,{title:"Horizontally Attached",description:"A button can be attached to the left or right of other content",code:t.horizontalAttachedExample},{default:i(()=>[y("div",null,[e(r,{attached:"left"},{default:i(()=>[Xb]),_:1}),e(r,{attached:"right"},{default:i(()=>[Zb]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[e1]),_:1}),e(C,{title:"Vertical Buttons",description:"Groups can be formatted to appear vertically",code:t.verticalButtonsExample},{default:i(()=>[e(p,{vertical:""},{default:i(()=>[e(r,null,{default:i(()=>[t1]),_:1}),e(r,null,{default:i(()=>[i1]),_:1}),e(r,null,{default:i(()=>[s1]),_:1}),e(r,null,{default:i(()=>[n1]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Labeled Icon Buttons",description:"Groups can be formatted as labeled icons",code:t.labeledIconButtonsExample},{default:i(()=>[e(p,{vertical:"",labeled:"",icon:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"pause"}),l1]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"play"}),a1]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"shuffle"}),o1]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Mixed Group",description:"Groups can be formatted to use multiple button types together",code:t.mixedGroupExample},{default:i(()=>[e(p,null,{default:i(()=>[e(r,{labelPosition:"left",icon:""},{default:i(()=>[e(u,{name:"left chevron"}),u1]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"stop"}),r1]),_:1}),e(r,{labelPosition:"right",icon:""},{default:i(()=>[e(u,{name:"right chevron"}),d1]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Equal Width",description:"Groups can have their widths divided evenly",code:t.equalWidthExample},{default:i(()=>[y("div",null,[e(p,{widths:5},{default:i(()=>[e(r,null,{default:i(()=>[c1]),_:1}),e(r,null,{default:i(()=>[m1]),_:1}),e(r,null,{default:i(()=>[_1]),_:1}),e(r,null,{default:i(()=>[f1]),_:1}),e(r,null,{default:i(()=>[h1]),_:1})]),_:1}),e(a),e(p,{widths:3},{default:i(()=>[e(r,null,{default:i(()=>[p1]),_:1}),e(r,null,{default:i(()=>[g1]),_:1}),e(r,null,{default:i(()=>[b1]),_:1})]),_:1})])]),_:1},8,["code"]),e(C,{title:"Colored Buttons",description:"Groups can have a shared color",code:t.coloredButtonsExample},{default:i(()=>[e(p,{color:"blue"},{default:i(()=>[e(r,null,{default:i(()=>[v1]),_:1}),e(r,null,{default:i(()=>[C1]),_:1}),e(r,null,{default:i(()=>[y1]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Basic Buttons",description:"A button group can be less pronounced",code:t.basicButtonsExample},{default:i(()=>[y("div",null,[e(p,{basic:""},{default:i(()=>[e(r,null,{default:i(()=>[w1]),_:1}),e(r,null,{default:i(()=>[$1]),_:1}),e(r,null,{default:i(()=>[A1]),_:1})]),_:1}),e(a),e(p,{basic:"",vertical:""},{default:i(()=>[e(r,null,{default:i(()=>[S1]),_:1}),e(r,null,{default:i(()=>[k1]),_:1}),e(r,null,{default:i(()=>[T1]),_:1})]),_:1})])]),_:1},8,["code"]),e(C,{code:t.basicButtonsExample2},{default:i(()=>[e(p,null,{default:i(()=>[e(r,{basic:"",color:"red"},{default:i(()=>[x1]),_:1}),e(r,{basic:"",color:"blue"},{default:i(()=>[E1]),_:1}),e(r,{basic:"",color:"green"},{default:i(()=>[B1]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Group Sizes",description:"Groups can have a shared size",code:t.groupSizesExample},{default:i(()=>[e(p,{size:"large"},{default:i(()=>[e(r,null,{default:i(()=>[R1]),_:1}),e(r,null,{default:i(()=>[z1]),_:1}),e(r,null,{default:i(()=>[P1]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{code:t.groupSizesExample2},{default:i(()=>[e(p,{basic:"",icon:"",size:"small"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"file"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"save"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"upload"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"download"})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{code:t.groupSizesExample3},{default:i(()=>[e(p,{size:"large"},{default:i(()=>[e(r,null,{default:i(()=>[M1]),_:1}),D1,e(r,null,{default:i(()=>[F1]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var N1=_e(Sp,[["render",I1],["__scopeId","data-v-7ebf685c"]]);const L1=E({name:"ContainerDoc",components:{DocExample:ve},setup(){return{containerExample:`<template>
  <sui-container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </sui-container>
</template>`,textContainerExample:`<template>
  <sui-container text>
    <sui-header as="h2">Header</sui-header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </sui-container>
</template>`,textAlignmentExample:`<template>
  <div>
    <sui-container textAlign="left">Left Aligned</sui-container>
    <sui-container textAlign="center">Center Aligned</sui-container>
    <sui-container textAlign="right">Right Aligned</sui-container>
  </div>
</template>`,fluidExample:`<template>
  <sui-container fluid>
    <sui-header as="h2">Dogs Roles with Humans</sui-header>
    <p>
      Domestic dogs inherited complex behaviors, such as bite inhibition, from
      their wolf ancestors, which would have been pack hunters with complex
      body language. These sophisticated forms of social cognition and
      communication may account for their trainability, playfulness, and
      ability to fit into human households and social situations, and these
      attributes have given dogs a relationship with humans that has enabled
      them to become one of the most successful species on the planet today.
    </p>
  </sui-container>
</template>`}}}),ua=t=>(Cs("data-v-8cf609c4"),t=t(),ys(),t),V1={class:"intro"},O1=n("Container "),H1=n("A container limits content to a maximum width"),j1=n("Types"),q1=ua(()=>y("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),J1=n("Header"),U1=ua(()=>y("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),Y1=n("Variations"),G1=n("Left Aligned"),W1=n("Center Aligned"),K1=n("Right Aligned"),Q1=n("Dogs Roles with Humans"),X1=ua(()=>y("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function Z1(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("doc-example");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",V1,[e(m,{as:"h1"},{default:i(()=>[O1,e(f,null,{default:i(()=>[H1]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[j1]),_:1}),e(r,{title:"Container",description:"A standard container",code:t.containerExample},{default:i(()=>[e(g,null,{default:i(()=>[q1]),_:1})]),_:1},8,["code"]),e(r,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:t.textContainerExample},{default:i(()=>[e(g,{text:""},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[J1]),_:1}),U1]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Y1]),_:1}),e(r,{title:"Text Alignment",description:"A container can specify its text alignment",code:t.textAlignmentExample},{default:i(()=>[y("div",null,[e(g,{textAlign:"left"},{default:i(()=>[G1]),_:1}),e(g,{textAlign:"center"},{default:i(()=>[W1]),_:1}),e(g,{textAlign:"right"},{default:i(()=>[K1]),_:1})])]),_:1},8,["code"]),e(r,{title:"Fluid",description:"A fluid container has no maximum width",code:t.fluidExample},{default:i(()=>[e(g,{fluid:""},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[Q1]),_:1}),X1]),_:1})]),_:1},8,["code"])]),_:1})])}var ev=_e(L1,[["render",Z1],["__scopeId","data-v-8cf609c4"]]),ye="/vue-fomantic-ui/images/wireframe/short-paragraph.png";const tv=E({name:"DividerDoc",components:{DocExample:ve},setup(){return{dividerCode:`<div>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`,verticalDividerCode:`<sui-segment>
  <sui-grid :columns="2" relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider vertical>and</sui-divider>
</sui-segment>`,horizontalDividerCode:`<sui-segment>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider horizontal>and</sui-divider>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</sui-segment>`,horizontalAlignmentCode:`<div>
  <sui-divider horizontal textAlign="left">
    <sui-header as="h4">
      <sui-icon name="left align" />
      Left Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="center">
    <sui-header as="h4">
      <sui-icon name="center align" />
      Center Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="right">
    <sui-header as="h4">
      <sui-icon name="right align" />
      Right Aligned
    </sui-header>
  </sui-divider>
</div>`,invertedCode:`<sui-segment inverted>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider inverted />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,fittedCode:`<sui-segment>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  <sui-divider fitted />
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</sui-segment>`,hiddenCode:`<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider hidden />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`,sectionCode:`<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
  <sui-divider section />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
</div>`,clearingCode:`<sui-segment>
  <sui-header floated="right">Floated Content</sui-header>
  <sui-divider clearing />
  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`}}}),iv={class:"intro"},sv=n("Divider "),nv=n("A divider visually segments content into groups"),lv=n("Types"),av=n("and"),ov=n("and"),uv=n(" Left Aligned "),rv=n(" Center Aligned "),dv=n(" Right Aligned "),cv=n("Variations"),mv=n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),_v=n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),fv=n("Section One"),hv=n("Section Two"),pv=n("Section One"),gv=n("Section Two"),bv=n("Floated Content");function vv(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-image"),C=b("doc-example"),w=b("sui-grid-column"),A=b("sui-grid");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",iv,[e(m,{as:"h1"},{default:i(()=>[sv,e(f,null,{default:i(()=>[nv]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[lv]),_:1}),e(C,{title:"Divider",description:"A standard divider",code:t.dividerCode},{default:i(()=>[y("div",null,[e(r,{src:ye}),e(a),e(r,{src:ye})])]),_:1},8,["code"]),e(C,{title:"Vertical Divider",description:"A divider can segment content vertically",code:t.verticalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e(A,{columns:2,relaxed:"very"},{default:i(()=>[e(w,null,{default:i(()=>[e(r,{src:ye})]),_:1}),e(w,null,{default:i(()=>[e(r,{src:ye})]),_:1})]),_:1}),e(a,{vertical:""},{default:i(()=>[av]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:t.horizontalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e(A,{relaxed:"very"},{default:i(()=>[e(w,null,{default:i(()=>[e(r,{src:ye})]),_:1})]),_:1}),e(a,{horizontal:""},{default:i(()=>[ov]),_:1}),e(A,{relaxed:"very"},{default:i(()=>[e(w,null,{default:i(()=>[e(r,{src:ye})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:t.horizontalAlignmentCode},{default:i(()=>[y("div",null,[e(a,{horizontal:"",textAlign:"left"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[e(u,{name:"left align"}),uv]),_:1})]),_:1}),e(a,{horizontal:"",textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[e(u,{name:"center align"}),rv]),_:1})]),_:1}),e(a,{horizontal:"",textAlign:"right"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[e(u,{name:"right align"}),dv]),_:1})]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[cv]),_:1}),e(C,{title:"Inverted",description:"A divider can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{src:ye}),e(a,{inverted:""}),e(r,{src:ye})]),_:1})]),_:1},8,["code"]),e(C,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:t.fittedCode},{default:i(()=>[e(v,null,{default:i(()=>[mv,e(a,{fitted:""}),_v]),_:1})]),_:1},8,["code"]),e(C,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:t.hiddenCode},{default:i(()=>[y("div",null,[e(m,{as:"h3"},{default:i(()=>[fv]),_:1}),e(r,{src:ye}),e(a,{hidden:""}),e(m,{as:"h3"},{default:i(()=>[hv]),_:1}),e(r,{src:ye})])]),_:1},8,["code"]),e(C,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:t.sectionCode},{default:i(()=>[y("div",null,[e(m,{as:"h3"},{default:i(()=>[pv]),_:1}),e(r,{src:ye}),e(a,{section:""}),e(m,{as:"h3"},{default:i(()=>[gv]),_:1}),e(r,{src:ye})])]),_:1},8,["code"]),e(C,{title:"Clearing",description:"A divider can clear the contents above it",code:t.clearingCode},{default:i(()=>[e(v,null,{default:i(()=>[e(m,{floated:"right"},{default:i(()=>[bv]),_:1}),e(a,{clearing:""}),e(r,{src:ye})]),_:1})]),_:1},8,["code"])]),_:1})])}var Cv=_e(tv,[["render",vv],["__scopeId","data-v-ac49b7a2"]]);const yv=E({name:"EmojiDoc",components:{DocExample:ve},setup(){return{disabledCode:`<sui-segment basic>
  <sui-emoji name="anguished" disabled />
</sui-segment>`,loadingCode:`<sui-segment basic>
  <sui-emoji name="angel" loading />
  <sui-emoji name="blush" loading />
  <sui-emoji name="grin" loading />
</sui-segment>`,sizeCode:`<sui-segment basic>
  <sui-emoji name="relaxed" size="small" /> Small
  <br>
  <sui-emoji name="relaxed" size="medium" /> Medium
  <br>
  <sui-emoji name="relaxed" size="large" /> Large
  <br>
  <sui-emoji name="relaxed" size="big" /> Big
</sui-segment>`,autosizingCode:`<sui-segment basic>
  <sui-header size="small">Within a header <sui-emoji name="relaxed" /></sui-header>
  <sui-button size="large">Within a button <sui-emoji name="relaxed" /></sui-button>
  <br><br>
  <sui-label size="massive">Within a label <sui-emoji name="relaxed" /></sui-label>
</sui-segment>`,linkCode:`<sui-segment basic>
  <sui-emoji name="slight_smile" link />
</sui-segment>`}}}),wv={class:"intro"},$v=n("Emoji "),Av=n(" An emoji is a glyph used to represent an emotional state "),Sv=n("States"),kv=n("Variations"),Tv=n(" Small "),xv=y("br",null,null,-1),Ev=n(" Medium "),Bv=y("br",null,null,-1),Rv=n(" Large "),zv=y("br",null,null,-1),Pv=n(" Big "),Mv=n("Within a header "),Dv=n("Within a button "),Fv=y("br",null,null,-1),Iv=y("br",null,null,-1),Nv=n("Within a label ");function Lv(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-emoji"),C=b("doc-example"),w=b("sui-button"),A=b("sui-label");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",wv,[e(m,{as:"h1"},{default:i(()=>[$v,e(f,null,{default:i(()=>[Av]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Sv]),_:1}),e(C,{title:"Disabled",description:"An emoji can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(C,{title:"Loading",description:"An emoji can be used as a simple loader",code:t.loadingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"angel",loading:""}),e(r,{name:"blush",loading:""}),e(r,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[kv]),_:1}),e(C,{title:"Size",description:"An emoji can vary in size",code:t.sizeCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"relaxed",size:"small"}),Tv,xv,e(r,{name:"relaxed",size:"medium"}),Ev,Bv,e(r,{name:"relaxed",size:"large"}),Rv,zv,e(r,{name:"relaxed",size:"big"}),Pv]),_:1})]),_:1},8,["code"]),e(C,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:t.autosizingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(m,{size:"small"},{default:i(()=>[Mv,e(r,{name:"relaxed"})]),_:1}),e(w,{size:"large"},{default:i(()=>[Dv,e(r,{name:"relaxed"})]),_:1}),Fv,Iv,e(A,{size:"massive"},{default:i(()=>[Nv,e(r,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Link",description:"An emoji can be formatted as a link",code:t.linkCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}var Vv=_e(yv,[["render",Lv]]);const Ov=E({name:"FlagDoc",components:{DocExample:ve},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),Hv={class:"intro"},jv=n("Flag "),qv=n(" A flag is used to represent a political state ");function Jv(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-flag"),C=b("doc-example");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",Hv,[e(m,{as:"h1"},{default:i(()=>[jv,e(f,null,{default:i(()=>[qv]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(C,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:t.flagCode},{default:i(()=>[y("div",null,[e(r,{name:"ae"}),e(r,{name:"france"}),e(r,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}var Uv=_e(Ov,[["render",Jv]]),Yv="/vue-fomantic-ui/images/icons/school.png";const Gv=E({name:"HeaderDoc",components:{DocExample:ve},setup(){return{pageHeaderCode:`<div>
  <sui-header as="h1">First header</sui-header>
  <sui-header as="h2">Second header</sui-header>
  <sui-header as="h3">Third header</sui-header>
  <sui-header as="h4">Fourth header</sui-header>
  <sui-header as="h5">Fifth header</sui-header>
</div>`,contentHeaderCode:`<div>
  <sui-header size="huge">Huge Header</sui-header>
  <sui-header size="large">Large Header</sui-header>
  <sui-header size="medium">Medium Header</sui-header>
  <sui-header size="small">Small Header</sui-header>
  <sui-header size="tiny">Tiny Header</sui-header>
</div>`,iconHeadersCode:`<sui-header icon>
  <sui-icon name="settings" />
  <sui-header-content>
    AccountSettings
    <sui-header-subheader>
      Manage your account settings and set e-mail preferences.
    </sui-header-subheader>
  </sui-header-content>
</sui-header>`,subHeadersCode:`<div>
  <sui-header as="h2" sub>Price</sui-header>
  <span>$10.99</span>
</div>`,imageCode:`<sui-header>
  <sui-image src="/images/icons/school.png" />
  <sui-header-content>Learn More</sui-header-content>
</sui-header>`,iconCode:`<sui-header>
  <sui-icon name="plug" />
  <sui-header-content>Uptime Guarantee</sui-header-content>
</sui-header>`,subheaderCode:`<sui-header as="h2">
  AccountSettings
  <sui-header-subheader>
    Manage your account settings and set e-mail preferences.
  </sui-header-subheader>
</sui-header>`,disabledCode:"<sui-header disabled>Disabled Header</sui-header>",dividingCode:'<sui-header as="h3" dividing>Dividing Header</sui-header>',blockCode:'<sui-header as="h3" block>Block Header</sui-header>',attachedCode:`<div>
  <sui-header as="h2" attached="top">Attached Header</sui-header>
  <sui-segment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </sui-segment>
</div>`,floatingCode:`<sui-segment clearing>
  <sui-header as="h3" floated="right">Go Forward</sui-header>
  <sui-header as="h3" floated="left">Go Back</sui-header>
</sui-segment>`,textAlignCode:`<sui-segment>
  <sui-header as="h3" textAlign="right">Right</sui-header>
  <sui-header as="h3" textAlign="left">Left</sui-header>
  <sui-header as="h3" textAlign="justified">
    This should take up the full width even if only one line
  </sui-header>
  <sui-header as="h3" textAlign="center">Center</sui-header>
</sui-segment>`,coloredCode:`<div>
  <sui-header as="h4" color="primary">Primary</sui-header>
  <sui-header as="h4" color="secondary">Secondary</sui-header>
  <sui-header as="h4" color="red">Red</sui-header>
  <sui-header as="h4" color="orange">Orange</sui-header>
  <sui-header as="h4" color="yellow">Yellow</sui-header>
  <sui-header as="h4" color="olive">Olive</sui-header>
  <sui-header as="h4" color="green">Green</sui-header>
  <sui-header as="h4" color="teal">Teal</sui-header>
  <sui-header as="h4" color="blue">Blue</sui-header>
  <sui-header as="h4" color="purple">Purple</sui-header>
  <sui-header as="h4" color="violet">Violet</sui-header>
  <sui-header as="h4" color="pink">Pink</sui-header>
  <sui-header as="h4" color="brown">Brown</sui-header>
  <sui-header as="h4" color="grey">Grey</sui-header>
</div>`,invertedCode:`<sui-segment inverted>
  <sui-header as="h4" color="red" inverted>Red</sui-header>
  <sui-header as="h4" color="orange" inverted>Orange</sui-header>
  <sui-header as="h4" color="yellow" inverted>Yellow</sui-header>
  <sui-header as="h4" color="olive" inverted>Olive</sui-header>
  <sui-header as="h4" color="green" inverted>Green</sui-header>
  <sui-header as="h4" color="teal" inverted>Teal</sui-header>
  <sui-header as="h4" color="blue" inverted>Blue</sui-header>
  <sui-header as="h4" color="purple" inverted>Purple</sui-header>
  <sui-header as="h4" color="violet" inverted>Violet</sui-header>
  <sui-header as="h4" color="pink" inverted>Pink</sui-header>
  <sui-header as="h4" color="brown" inverted>Brown</sui-header>
  <sui-header as="h4" color="grey" inverted>Grey</sui-header>
</sui-segment>`}}}),Wv={class:"intro"},Kv=n("Header "),Qv=n(" A header provides a short summary of content "),Xv=n("Types"),Zv=n("First header"),eC=n("Second header"),tC=n("Third header"),iC=n("Fourth header"),sC=n("Fifth header"),nC=n("Huge Header"),lC=n("Large Header"),aC=n("Medium Header"),oC=n("Small Header"),uC=n("Tiny Header"),rC=n(" AccountSettings "),dC=n(" Manage your account settings and set e-mail preferences. "),cC=n("Price"),mC=y("span",null,"$10.99",-1),_C=n("Content"),fC=n("Learn More"),hC=n("Uptime Guarantee"),pC=n(" AccountSettings "),gC=n(" Manage your account settings and set e-mail preferences. "),bC=n("States"),vC=n("Disabled Header"),CC=n("Variations"),yC=n("Dividing Header"),wC=n("Block Header"),$C=n("Attached Header"),AC=n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),SC=n("Go Forward"),kC=n("Go Back"),TC=n("Right"),xC=n("Left"),EC=n(" This should take up the full width even if only one line "),BC=n("Center"),RC=n("Primary"),zC=n("Secondary"),PC=n("Red"),MC=n("Orange"),DC=n("Yellow"),FC=n("Olive"),IC=n("Green"),NC=n("Teal"),LC=n("Blue"),VC=n("Purple"),OC=n("Violet"),HC=n("Pink"),jC=n("Brown"),qC=n("Grey"),JC=n("Red"),UC=n("Orange"),YC=n("Yellow"),GC=n("Olive"),WC=n("Green"),KC=n("Teal"),QC=n("Blue"),XC=n("Purple"),ZC=n("Violet"),ey=n("Pink"),ty=n("Brown"),iy=n("Grey");function sy(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("doc-example"),C=b("sui-header-content"),w=b("sui-image");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",Wv,[e(m,{as:"h1"},{default:i(()=>[Kv,e(f,null,{default:i(()=>[Qv]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Xv]),_:1}),e(r,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:t.pageHeaderCode},{default:i(()=>[y("div",null,[e(m,{as:"h1"},{default:i(()=>[Zv]),_:1}),e(m,{as:"h2"},{default:i(()=>[eC]),_:1}),e(m,{as:"h3"},{default:i(()=>[tC]),_:1}),e(m,{as:"h4"},{default:i(()=>[iC]),_:1}),e(m,{as:"h5"},{default:i(()=>[sC]),_:1})])]),_:1},8,["code"]),e(r,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:t.contentHeaderCode},{default:i(()=>[y("div",null,[e(m,{size:"huge"},{default:i(()=>[nC]),_:1}),e(m,{size:"large"},{default:i(()=>[lC]),_:1}),e(m,{size:"medium"},{default:i(()=>[aC]),_:1}),e(m,{size:"small"},{default:i(()=>[oC]),_:1}),e(m,{size:"tiny"},{default:i(()=>[uC]),_:1})])]),_:1},8,["code"]),e(r,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:t.iconHeadersCode},{default:i(()=>[e(m,{icon:""},{default:i(()=>[e(u,{name:"settings"}),e(C,null,{default:i(()=>[rC,e(f,null,{default:i(()=>[dC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:t.subHeadersCode},{default:i(()=>[y("div",null,[e(m,{as:"h2",sub:""},{default:i(()=>[cC]),_:1}),mC])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[_C]),_:1}),e(r,{title:"Image",description:"A header may contain an image",code:t.imageCode},{default:i(()=>[e(m,null,{default:i(()=>[e(w,{src:Yv}),e(C,null,{default:i(()=>[fC]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Icon",description:"A header may contain an icon",code:t.iconCode},{default:i(()=>[e(m,null,{default:i(()=>[e(u,{name:"plug"}),e(C,null,{default:i(()=>[hC]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Subheader",description:"Headers may contain subheaders",code:t.subheaderCode},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[pC,e(f,null,{default:i(()=>[gC]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[bC]),_:1}),e(r,{title:"Disabled",description:"A header can show that it is inactive",code:t.disabledCode},{default:i(()=>[e(m,{disabled:""},{default:i(()=>[vC]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[CC]),_:1}),e(r,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:t.dividingCode},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[yC]),_:1})]),_:1},8,["code"]),e(r,{title:"Block",description:"A header can be formatted to appear inside a content block",code:t.blockCode},{default:i(()=>[e(m,{as:"h3",block:""},{default:i(()=>[wC]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A header can be attached to other content, like a segment",code:t.attachedCode},{default:i(()=>[y("div",null,[e(m,{as:"h2",attached:"top"},{default:i(()=>[$C]),_:1}),e(v,{attached:""},{default:i(()=>[AC]),_:1})])]),_:1},8,["code"]),e(r,{title:"Floating",description:"A header can sit to the left or right of other content",code:t.floatingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(m,{as:"h3",floated:"right"},{default:i(()=>[SC]),_:1}),e(m,{as:"h3",floated:"left"},{default:i(()=>[kC]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[e(v,null,{default:i(()=>[e(m,{as:"h3",textAlign:"right"},{default:i(()=>[TC]),_:1}),e(m,{as:"h3",textAlign:"left"},{default:i(()=>[xC]),_:1}),e(m,{as:"h3",textAlign:"justified"},{default:i(()=>[EC]),_:1}),e(m,{as:"h3",textAlign:"center"},{default:i(()=>[BC]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A header can be formatted with different colors",code:t.coloredCode},{default:i(()=>[y("div",null,[e(m,{as:"h4",color:"primary"},{default:i(()=>[RC]),_:1}),e(m,{as:"h4",color:"secondary"},{default:i(()=>[zC]),_:1}),e(m,{as:"h4",color:"red"},{default:i(()=>[PC]),_:1}),e(m,{as:"h4",color:"orange"},{default:i(()=>[MC]),_:1}),e(m,{as:"h4",color:"yellow"},{default:i(()=>[DC]),_:1}),e(m,{as:"h4",color:"olive"},{default:i(()=>[FC]),_:1}),e(m,{as:"h4",color:"green"},{default:i(()=>[IC]),_:1}),e(m,{as:"h4",color:"teal"},{default:i(()=>[NC]),_:1}),e(m,{as:"h4",color:"blue"},{default:i(()=>[LC]),_:1}),e(m,{as:"h4",color:"purple"},{default:i(()=>[VC]),_:1}),e(m,{as:"h4",color:"violet"},{default:i(()=>[OC]),_:1}),e(m,{as:"h4",color:"pink"},{default:i(()=>[HC]),_:1}),e(m,{as:"h4",color:"brown"},{default:i(()=>[jC]),_:1}),e(m,{as:"h4",color:"grey"},{default:i(()=>[qC]),_:1})])]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(m,{as:"h4",color:"red",inverted:""},{default:i(()=>[JC]),_:1}),e(m,{as:"h4",color:"orange",inverted:""},{default:i(()=>[UC]),_:1}),e(m,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[YC]),_:1}),e(m,{as:"h4",color:"olive",inverted:""},{default:i(()=>[GC]),_:1}),e(m,{as:"h4",color:"green",inverted:""},{default:i(()=>[WC]),_:1}),e(m,{as:"h4",color:"teal",inverted:""},{default:i(()=>[KC]),_:1}),e(m,{as:"h4",color:"blue",inverted:""},{default:i(()=>[QC]),_:1}),e(m,{as:"h4",color:"purple",inverted:""},{default:i(()=>[XC]),_:1}),e(m,{as:"h4",color:"violet",inverted:""},{default:i(()=>[ZC]),_:1}),e(m,{as:"h4",color:"pink",inverted:""},{default:i(()=>[ey]),_:1}),e(m,{as:"h4",color:"brown",inverted:""},{default:i(()=>[ty]),_:1}),e(m,{as:"h4",color:"grey",inverted:""},{default:i(()=>[iy]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var ny=_e(Gv,[["render",sy]]);const ly=E({name:"IconDoc",components:{DocExample:ve},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
  <sui-icon name="spinner" loading />
  <sui-icon name="notched circle" loading />
  <sui-icon name="asterisk" loading />
</div>`,fittedCode:`<div>
  This icon
  <sui-icon name="help" fitted />
  is fitted.
  <br>
  This icon
  <sui-icon name="help" />
  is not.
</div>`,sizeCode:`<div>
  <sui-icon name="home" size="mini" />
  <sui-icon name="home" size="tiny" />
  <sui-icon name="home" size="small" />
  <br>
  <sui-icon name="home" />
  <br>
  <sui-icon name="home" size="large" />
  <br>
  <sui-icon name="home" size="big" />
  <br>
  <sui-icon name="home" size="huge" />
  <br>
  <sui-icon name="home" size="massive" />
</div>`,linkCode:`<div>
  <sui-icon name="close" link />
  <sui-icon name="help" link />
</div>`,flippedCode:`<div>
  <sui-icon name="cloud" flipped="horizontally" />
  <sui-icon name="cloud" flipped="vertically" />
</div>`,rotatedCode:`<div>
  <sui-icon name="cloud" rotated="clockwise" />
  <sui-icon name="cloud" rotated="counterclockwise" />
</div>`,circularCode:`<div>
  <sui-icon name="users" circular />
  <sui-icon name="users" color="teal" circular />
  <sui-icon name="users" inverted circular />
  <sui-icon name="users" color="teal" inverted circular />
</div>`,borderedCode:`<div>
  <sui-icon name="users" bordered />
  <sui-icon name="users" bordered color="teal" />
  <sui-icon name="users" inverted bordered color="black" />
  <sui-icon name="users" inverted bordered color="teal" />
</div>`,coloredCode:`<div>
  <sui-icon name="users" color="primary" />
  <sui-icon name="users" color="secondary" />
  <sui-icon name="users" color="red" />
  <sui-icon name="users" color="orange" />
  <sui-icon name="users" color="yellow" />
  <sui-icon name="users" color="olive" />
  <sui-icon name="users" color="green" />
  <sui-icon name="users" color="teal" />
  <sui-icon name="users" color="blue" />
  <sui-icon name="users" color="violet" />
  <sui-icon name="users" color="purple" />
  <sui-icon name="users" color="pink" />
  <sui-icon name="users" color="brown" />
  <sui-icon name="users" color="grey" />
  <sui-icon name="users" color="black" />
</div>`,invertedCode:`<sui-segment inverted>
  <sui-icon name="users" inverted />
  <sui-icon name="users" inverted color="primary" />
  <sui-icon name="users" inverted color="secondary" />
  <sui-icon name="users" inverted color="red" />
  <sui-icon name="users" inverted color="orange" />
  <sui-icon name="users" inverted color="yellow" />
  <sui-icon name="users" inverted color="olive" />
  <sui-icon name="users" inverted color="green" />
  <sui-icon name="users" inverted color="teal" />
  <sui-icon name="users" inverted color="blue" />
  <sui-icon name="users" inverted color="violet" />
  <sui-icon name="users" inverted color="purple" />
  <sui-icon name="users" inverted color="pink" />
  <sui-icon name="users" inverted color="brown" />
  <sui-icon name="users" inverted color="grey" />
</sui-segment>`,iconsCode:`<sui-icon-group size="huge">
  <sui-icon name="circle outline" size="big" />
  <sui-icon name="user" />
</sui-icon-group>`,cornerIconCode:`<sui-icon-group size="huge">
  <sui-icon name="puzzle" />
  <sui-icon name="add" corner />
</sui-icon-group>`}}}),ay={class:"intro"},oy=n("Icon "),uy=n(" An icon is a glyph used to represent something else "),ry=n("States"),dy=n("Variations"),cy=n(" This icon "),my=n(" is fitted. "),_y=y("br",null,null,-1),fy=n(" This icon "),hy=n(" is not. "),py=y("br",null,null,-1),gy=y("br",null,null,-1),by=y("br",null,null,-1),vy=y("br",null,null,-1),Cy=y("br",null,null,-1),yy=n("Groups");function wy(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("doc-example"),C=b("sui-icon-group");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",ay,[e(m,{as:"h1"},{default:i(()=>[oy,e(f,null,{default:i(()=>[uy]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[ry]),_:1}),e(r,{title:"Disabled",description:"An icon can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(u,{name:"users",disabled:""})]),_:1},8,["code"]),e(r,{title:"Loading",description:"An icon can be used as a simple loader",code:t.loadingCode},{default:i(()=>[y("div",null,[e(u,{name:"spinner",loading:""}),e(u,{name:"notched circle",loading:""}),e(u,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[dy]),_:1}),e(r,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:t.fittedCode},{default:i(()=>[y("div",null,[cy,e(u,{name:"help",fitted:""}),my,_y,fy,e(u,{name:"help"}),hy])]),_:1},8,["code"]),e(r,{title:"Size",description:"An icon can vary in size",code:t.sizeCode},{default:i(()=>[y("div",null,[e(u,{name:"home",size:"mini"}),e(u,{name:"home",size:"tiny"}),e(u,{name:"home",size:"small"}),py,e(u,{name:"home"}),gy,e(u,{name:"home",size:"large"}),by,e(u,{name:"home",size:"big"}),vy,e(u,{name:"home",size:"huge"}),Cy,e(u,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(r,{title:"Link",description:"An icon can be formatted as a link",code:t.linkCode},{default:i(()=>[y("div",null,[e(u,{name:"close",link:""}),e(u,{name:"help",link:""})])]),_:1},8,["code"]),e(r,{title:"Flipped",description:"An icon can be flipped",code:t.flippedCode},{default:i(()=>[y("div",null,[e(u,{name:"cloud",flipped:"horizontally"}),e(u,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(r,{title:"Rotated",description:"An icon can be rotated",code:t.rotatedCode},{default:i(()=>[y("div",null,[e(u,{name:"cloud",rotated:"clockwise"}),e(u,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(r,{title:"Circular",description:"An icon can be formatted to appear circular",code:t.circularCode},{default:i(()=>[y("div",null,[e(u,{name:"users",circular:""}),e(u,{name:"users",color:"teal",circular:""}),e(u,{name:"users",inverted:"",circular:""}),e(u,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(r,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:t.borderedCode},{default:i(()=>[y("div",null,[e(u,{name:"users",bordered:""}),e(u,{name:"users",bordered:"",color:"teal"}),e(u,{name:"users",inverted:"",bordered:"",color:"black"}),e(u,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(r,{title:"Colored",description:"An icon can be formatted with different colors",code:t.coloredCode},{default:i(()=>[y("div",null,[e(u,{name:"users",color:"primary"}),e(u,{name:"users",color:"secondary"}),e(u,{name:"users",color:"red"}),e(u,{name:"users",color:"orange"}),e(u,{name:"users",color:"yellow"}),e(u,{name:"users",color:"olive"}),e(u,{name:"users",color:"green"}),e(u,{name:"users",color:"teal"}),e(u,{name:"users",color:"blue"}),e(u,{name:"users",color:"violet"}),e(u,{name:"users",color:"purple"}),e(u,{name:"users",color:"pink"}),e(u,{name:"users",color:"brown"}),e(u,{name:"users",color:"grey"}),e(u,{name:"users",color:"black"})])]),_:1},8,["code"]),e(r,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(u,{name:"users",inverted:""}),e(u,{name:"users",inverted:"",color:"primary"}),e(u,{name:"users",inverted:"",color:"secondary"}),e(u,{name:"users",inverted:"",color:"red"}),e(u,{name:"users",inverted:"",color:"orange"}),e(u,{name:"users",inverted:"",color:"yellow"}),e(u,{name:"users",inverted:"",color:"olive"}),e(u,{name:"users",inverted:"",color:"green"}),e(u,{name:"users",inverted:"",color:"teal"}),e(u,{name:"users",inverted:"",color:"blue"}),e(u,{name:"users",inverted:"",color:"violet"}),e(u,{name:"users",inverted:"",color:"purple"}),e(u,{name:"users",inverted:"",color:"pink"}),e(u,{name:"users",inverted:"",color:"brown"}),e(u,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[yy]),_:1}),e(r,{title:"Icons",description:"Several icons can be used together as a group",code:t.iconsCode},{default:i(()=>[e(C,{size:"huge"},{default:i(()=>[e(u,{name:"circle outline",size:"big"}),e(u,{name:"user"})]),_:1})]),_:1},8,["code"]),e(r,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:t.cornerIconCode},{default:i(()=>[e(C,{size:"huge"},{default:i(()=>[e(u,{name:"puzzle"}),e(u,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}var $y=_e(ly,[["render",wy]]),J="/vue-fomantic-ui/images/wireframe/image.png",Is="/vue-fomantic-ui/images/wireframe/image-text.png",Gi="/vue-fomantic-ui/images/wireframe/white-image.png",nt="/vue-fomantic-ui/images/wireframe/square-image.png";const Ay=E({name:"ImageDoc",components:{DocExample:ve},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
  as="a"
  size="medium"
  src="/images/image-text.png"
  href="https://google.com"
  target="_blank"
/>`,hiddenCode:'<sui-image hidden src="/images/image.png" size="small" />',disabledCode:'<sui-image disabled src="/images/image.png" size="small" />',avatarCode:`<div>
  <sui-image avatar src="/images/image.png" />
  <span>Username</span>
</div>`,borderedCode:'<sui-image bordered size="medium" src="/images/white-image.png" />',fluidCode:'<sui-image fluid src="/images/image.png" />',roundedCode:'<sui-image rounded size="medium" src="/images/image.png" />',circularCode:'<sui-image circular size="medium" src="/images/square-image.png" />',verticallyAlignedCode:`<div>
  <sui-image verticalAlign="top" size="tiny" src="/images/square-image.png" />
  <span>Top Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="middle" size="tiny" src="/images/square-image.png" />
  <span>Middle Aligned</span>
  <sui-divider />
  <sui-image verticalAlign="bottom" size="tiny" src="/images/square-image.png" />
  <span>Bottom Aligned</span>
</div>`,centeredCode:`<sui-segment>
  <sui-image centered size="medium" src="/images/wireframe/image.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-image centered size="small" src="/images/wireframe/image-text.png" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
</sui-segment>`,spacedCode:`<sui-segment>
  <p>Te eum doming eirmod, nominati pertinacia 
  <sui-image spaced size="mini" src="/images/image.png" />
    argumentum ad his. Ex eam alia facete scriptorem, 
    est autem aliquip detraxit at. Usu ocurreret referrentur at, 
    cu epicurei appellantur vix. Cum ea laoreet recteque electram, 
    eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
</sui-segment>`,floatedCode:`<sui-segment>
  <sui-image floated="left" size="small" src="/images/image-text.png" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. 
    Ex eam alia facete scriptorem, est autem aliquip detraxit at. 
    Usu ocurreret referrentur at, cu epicurei appellantur vix. 
    Cum ea laoreet recteque electram, eos choro alterum definiebas in. 
    Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <sui-image floated="right" size="small" src="/images/image-text.png" />
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. 
    Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, 
    his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, 
    vim vivendum maiestatis in.</p>
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. 
    Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. 
    Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, 
    wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, 
    quas minimum postulant per id.</p>
</sui-segment>`,sizeCode:`<div>
  <sui-image size="mini" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="tiny" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="medium" src="/images/image.png" />
  <sui-divider hidden />
  <sui-image size="large" src="/images/image.png" />
</div>`,sizeGroupCode:`<sui-image-group size="tiny">
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
  <sui-image src="/images/image.png" />
</sui-image-group>`}}}),Sy={class:"intro"},ky=n("Image "),Ty=n(" An image is a graphic representation of something "),xy=n("Types"),Ey=n("States"),By=n("Variations"),Ry=y("span",null,"Username",-1),zy=y("span",null,"Top Aligned",-1),Py=y("span",null,"Middle Aligned",-1),My=y("span",null,"Bottom Aligned",-1),Dy=y("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Fy=y("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),Iy=y("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),Ny=n("Te eum doming eirmod, nominati pertinacia "),Ly=n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque."),Vy=y("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Oy=y("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),Hy=y("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),jy=n("Groups");function qy(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-image"),C=b("doc-example"),w=b("sui-image-group");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",Sy,[e(m,{as:"h1"},{default:i(()=>[ky,e(f,null,{default:i(()=>[Ty]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[xy]),_:1}),e(C,{title:"Image",description:"An image",code:t.imageCode},{default:i(()=>[e(r,{src:J,size:"small"})]),_:1},8,["code"]),e(C,{title:"Image Link",description:"An image can be formatted to link to other content",code:t.imageLinkCode},{default:i(()=>[e(r,{as:"a",size:"medium",src:Is,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Ey]),_:1}),e(C,{title:"Hidden",description:"An image can be hidden",code:t.hiddenCode},{default:i(()=>[e(r,{hidden:"",src:J,size:"small"})]),_:1},8,["code"]),e(C,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:t.disabledCode},{default:i(()=>[e(r,{disabled:"",src:J,size:"small"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[By]),_:1}),e(C,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:t.avatarCode},{default:i(()=>[y("div",null,[e(r,{avatar:"",src:J}),Ry])]),_:1},8,["code"]),e(C,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:t.borderedCode},{default:i(()=>[e(r,{bordered:"",size:"medium",src:Gi})]),_:1},8,["code"]),e(C,{title:"Fluid",description:"An image can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(r,{fluid:"",src:J})]),_:1},8,["code"]),e(C,{title:"Rounded",description:"An image may appear rounded",code:t.roundedCode},{default:i(()=>[e(r,{rounded:"",size:"medium",src:J})]),_:1},8,["code"]),e(C,{title:"Circular",description:"An image may appear circular",code:t.circularCode},{default:i(()=>[e(r,{circular:"",size:"medium",src:nt})]),_:1},8,["code"]),e(C,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:t.verticallyAlignedCode},{default:i(()=>[y("div",null,[e(r,{verticalAlign:"top",size:"tiny",src:nt}),zy,e(a),e(r,{verticalAlign:"middle",size:"tiny",src:nt}),Py,e(a),e(r,{verticalAlign:"bottom",size:"tiny",src:nt}),My])]),_:1},8,["code"]),e(C,{title:"Centered",description:"An image can appear centered in a content block",code:t.centeredCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{centered:"",size:"medium",src:J}),Dy,Fy,e(r,{centered:"",size:"small",src:Is}),Iy]),_:1})]),_:1},8,["code"]),e(C,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:t.spacedCode},{default:i(()=>[e(v,null,{default:i(()=>[y("p",null,[Ny,e(r,{spaced:"",size:"mini",src:J}),Ly])]),_:1})]),_:1},8,["code"]),e(C,{title:"Floated",description:"An image can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{floated:"left",size:"small",src:Is}),Vy,e(r,{floated:"right",size:"small",src:Is}),Oy,Hy]),_:1})]),_:1},8,["code"]),e(C,{title:"Size",description:"An image may appear at different sizes",code:t.sizeCode},{default:i(()=>[y("div",null,[e(r,{size:"mini",src:J}),e(a,{hidden:""}),e(r,{size:"tiny",src:J}),e(a,{hidden:""}),e(r,{size:"medium",src:J}),e(a,{hidden:""}),e(r,{size:"large",src:J})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[jy]),_:1}),e(C,{title:"Size",description:"A group of images can be formatted to have the same size",code:t.sizeGroupCode},{default:i(()=>[e(w,{size:"tiny"},{default:i(()=>[e(r,{src:J}),e(r,{src:J}),e(r,{src:J}),e(r,{src:J})]),_:1})]),_:1},8,["code"])]),_:1})])}var Jy=_e(Ay,[["render",qy]]);const Uy=E({name:"InputDoc",components:{DocExample:ve},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
  <sui-input loading placeholder="Search..." />
  <sui-divider hidden />
  <sui-input loading iconPosition="left" placeholder="Search..." />
</div>`,disabledCode:'<sui-input disabled placeholder="Search..." />',errorCode:'<sui-input error placeholder="Search..." />',iconCode:'<sui-input icon="search" placeholder="Search..." />',labeledCode:'<sui-input label="http://" placeholder="mysite.com" />',actionCode:'<sui-input action="Search" placeholder="Search..." />',transparentCode:'<sui-input transparent placeholder="Search..." />',invertedCode:`<sui-segment inverted>
  <sui-input inverted placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted icon="search" iconPosition="left" placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted transparent icon="search" placeholder="Search..." />
</sui-segment>`,fluidCode:'<sui-input fluid icon="search" placeholder="Search..." />',sizeCode:`<div>
  <sui-input size="mini" icon="search" placeholder="Search mini" />
  <sui-divider hidden />
  <sui-input size="small" icon="search" placeholder="Search small" />
  <sui-divider hidden />
  <sui-input size="large" icon="search" placeholder="Search large" />
  <sui-divider hidden />
  <sui-input size="big" icon="search" placeholder="Search big" />
  <sui-divider hidden />
  <sui-input size="huge" icon="search" placeholder="Search huge" />
  <sui-divider hidden />
  <sui-input size="massive" icon="search" placeholder="Search massive" />
</div>`}}}),Yy={class:"intro"},Gy=n("Input "),Wy=n(" An input is a field used to elicit a response from a user "),Ky=n("Types"),Qy=n("States"),Xy=n("Variations");function Zy(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-input"),C=b("doc-example");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",Yy,[e(m,{as:"h1"},{default:i(()=>[Gy,e(f,null,{default:i(()=>[Wy]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Ky]),_:1}),e(C,{title:"Input",description:"A standard input",code:t.inputCode},{default:i(()=>[e(r,{placeholder:"Search..."})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Qy]),_:1}),e(C,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:t.focusCode},{default:i(()=>[e(r,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(C,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:t.loadingCode},{default:i(()=>[y("div",null,[e(r,{loading:"",placeholder:"Search..."}),e(a,{hidden:""}),e(r,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(C,{title:"Disabled",description:"An input field can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(r,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(C,{title:"Error",description:"An input field can show the data contains errors",code:t.errorCode},{default:i(()=>[e(r,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Xy]),_:1}),e(C,{title:"Icon",description:"An input can be formatted with an icon",code:t.iconCode},{default:i(()=>[e(r,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(C,{title:"Labeled",description:"An input can be formatted with a label",code:t.labeledCode},{default:i(()=>[y("div",null,[e(r,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(C,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:t.actionCode},{default:i(()=>[e(r,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(C,{title:"Transparent",description:"A transparent input has no background",code:t.transparentCode},{default:i(()=>[e(r,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(C,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{inverted:"",placeholder:"Search..."}),e(a,{inverted:""}),e(r,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(a,{inverted:""}),e(r,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(C,{title:"Fluid",description:"An input can take the size of its container",code:t.fluidCode},{default:i(()=>[e(r,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(C,{title:"Size",description:"An input can vary in size",code:t.sizeCode},{default:i(()=>[y("div",null,[e(r,{size:"mini",icon:"search",placeholder:"Search mini"}),e(a,{hidden:""}),e(r,{size:"small",icon:"search",placeholder:"Search small"}),e(a,{hidden:""}),e(r,{size:"large",icon:"search",placeholder:"Search large"}),e(a,{hidden:""}),e(r,{size:"big",icon:"search",placeholder:"Search big"}),e(a,{hidden:""}),e(r,{size:"huge",icon:"search",placeholder:"Search huge"}),e(a,{hidden:""}),e(r,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}var ew=_e(Uy,[["render",Zy]]),ml="/vue-fomantic-ui/images/avatar/small/joe.jpg",At="/vue-fomantic-ui/images/avatar/small/elliot.jpg",_s="/vue-fomantic-ui/images/avatar/small/stevie.jpg";const tw=E({name:"LabelDoc",components:{DocExample:ve},setup(){return{labelCode:`<sui-label>
  <sui-icon name="mail" /> 23
</sui-label>`,imageCode:`<div>
  <sui-label as="a" image>
    <img src="/images/avatar/small/joe.jpg" />
    Joe
  </sui-label>
  <sui-label as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a" image>
    <img src="/images/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`,pointingCode:`<sui-form fluid>
  <sui-form-field>
    <input type="text" placeholder="First name" />
    <sui-label pointing>Please enter a value</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field>
    <sui-label pointing="below">Please enter a value</sui-label>
    <input type="text" placeholder="Last name" />
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <input type="text" placeholder="Username" />
    <sui-label pointing="left">That name is taken!</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <sui-label pointing="right">Your password must be 6 characters or more</sui-label>
    <input type="password" placeholder="Password" />
  </sui-form-field>
</sui-form>`,cornerCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-image
      fluid
      src="/images/wireframe/image.png"
      :label="{ corner: 'left', icon: 'heart' }"
    />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image
      fluid
      src="/images/wireframe/image.png"
      :label="{ corner: 'right', icon: 'save', color: 'red' }"
    />
  </sui-grid-column>
</sui-grid>`,tagCode:`<div>
  <sui-label tag>New</sui-label>
  <sui-label tag color="red">Upcoming</sui-label>
  <sui-label tag color="teal">Featured</sui-label>
</div>`,ribbonCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon color="red">Overview</sui-label>
      <span>Account Details</span>
      <sui-image src="/images/wireframe/paragraph.png" />

      <sui-label as="a" ribbon color="blue">Community</sui-label>
      <span>User Reviews</span>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>

  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon="right" color="orange">Specs</sui-label>
      <sui-image src="/images/wireframe/paragraph.png" />

      <sui-label as="a" ribbon="right" color="teal">Reviews</sui-label>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top">HTML</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom">CSS</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top right">Code</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top left">View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom left">User View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom right">Admin View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,horizontalCode:`<sui-list divided selection>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Kumquats
  </sui-list-item>
  <sui-list-item>
    <sui-label  color="purple" horizontal>Candy</sui-label>
    Ice Cream
  </sui-list-item>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Orange
  </sui-list-item>
  <sui-list-item>
    <sui-label horizontal>Dog</sui-label>
    Poodle
  </sui-list-item>
</sui-list>`,floatingCode:`<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="mail" /> Messages
    <sui-label floating color="red">22</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="users" /> Friends
    <sui-label floating color="teal">22</sui-label>
  </sui-menu-item>
</sui-menu>`,detailCode:`<sui-label>
  Dogs
  <sui-label-detail>214</sui-label-detail>
</sui-label>`,iconCode:`<div>
  <sui-label as="a">
    <sui-icon name="mail" />
    Mail
  </sui-label>
  <sui-label as="a">
    Tag
    <sui-icon name="delete" />
  </sui-label>
</div>`,imageIncludeCode:`<div>
  <sui-label as="a">
    <sui-image avatar spaced="right" src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a">
    <img src="/images/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`,linkCode:`<sui-label as="a" link>
  <sui-icon name="mail" /> 23
</sui-label>`,circularCode:`<div>
  <sui-label as="a" circular color="red">2</sui-label>
  <sui-label as="a" circular color="orange">2</sui-label>
  <sui-label as="a" circular color="yellow">2</sui-label>
  <sui-label as="a" circular color="olive">2</sui-label>
  <sui-label as="a" circular color="green">2</sui-label>
  <sui-label as="a" circular color="teal">2</sui-label>
  <sui-label as="a" circular color="blue">2</sui-label>
  <sui-label as="a" circular color="violet">2</sui-label>
  <sui-label as="a" circular color="purple">2</sui-label>
  <sui-label as="a" circular color="pink">2</sui-label>
  <sui-label as="a" circular color="brown">2</sui-label>
  <sui-label as="a" circular color="grey">2</sui-label>
  <sui-label as="a" circular color="black">2</sui-label>
</div>`,basicCode:`<div>
  <sui-label basic as="a">Basic</sui-label>
  <sui-label basic as="a" pointing>Pointing</sui-label>
  <sui-label basic as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label basic as="a" pointing color="red">Red Pointing</sui-label>
  <sui-label basic as="a" color="blue">Blue</sui-label>
</div>`,coloredCode:`<div>
  <sui-label as="a" color="primary">Primary</sui-label>
  <sui-label as="a" color="secondary">Secondary</sui-label>
  <sui-label as="a" color="red">Red</sui-label>
  <sui-label as="a" color="orange">Orange</sui-label>
  <sui-label as="a" color="yellow">Yellow</sui-label>
  <sui-label as="a" color="olive">Olive</sui-label>
  <sui-label as="a" color="green">Green</sui-label>
  <sui-label as="a" color="teal">Teal</sui-label>
  <sui-label as="a" color="blue">Blue</sui-label>
  <sui-label as="a" color="violet">Violet</sui-label>
  <sui-label as="a" color="purple">Purple</sui-label>
  <sui-label as="a" color="pink">Pink</sui-label>
  <sui-label as="a" color="brown">Brown</sui-label>
  <sui-label as="a" color="grey">Grey</sui-label>
  <sui-label as="a" color="black">Black</sui-label>
</div>`,basicTagCode:`<div>
  <sui-label as="a" basic tag color="primary">Primary</sui-label>
  <sui-label as="a" basic tag color="secondary">Secondary</sui-label>
  <sui-label as="a" basic tag color="red">Red</sui-label>
  <sui-label as="a" basic tag color="orange">Orange</sui-label>
  <sui-label as="a" basic tag color="yellow">Yellow</sui-label>
  <sui-label as="a" basic tag color="olive">Olive</sui-label>
  <sui-label as="a" basic tag color="green">Green</sui-label>
  <sui-label as="a" basic tag color="teal">Teal</sui-label>
  <sui-label as="a" basic tag color="blue">Blue</sui-label>
  <sui-label as="a" basic tag color="violet">Violet</sui-label>
  <sui-label as="a" basic tag color="purple">Purple</sui-label>
  <sui-label as="a" basic tag color="pink">Pink</sui-label>
  <sui-label as="a" basic tag color="brown">Brown</sui-label>
  <sui-label as="a" basic tag color="grey">Grey</sui-label>
  <sui-label as="a" basic tag color="black">Black</sui-label>
</div>`,sizeCode:`<div>
  <sui-label size="mini">Mini</sui-label>
  <sui-label size="tiny">Tiny</sui-label>
  <sui-label size="small">Small</sui-label>
  <sui-label>Medium</sui-label>
  <sui-label size="large">Large</sui-label>
  <sui-label size="big">Big</sui-label>
  <sui-label size="huge">Huge</sui-label>
  <sui-label size="massive">Massive</sui-label>
</div>`,groupSizeCode:`<sui-label-group size="huge">
  <sui-label>Fun</sui-label>
  <sui-label>Happy</sui-label>
  <sui-label>Smart</sui-label>
  <sui-label>Witty</sui-label>
</sui-label-group>`,coloredGroupCode:`<sui-label-group color="blue">
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`,basicGroupCode:`<sui-label-group basic>
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`,tagGroupCode:`<sui-label-group tag>
  <sui-label as="a">$10.00</sui-label>
  <sui-label as="a">$19.99</sui-label>
  <sui-label as="a">$24.99</sui-label>
  <sui-label as="a">$30.99</sui-label>
  <sui-label as="a">$10.25</sui-label>
</sui-label-group>`,circularGroupCode:`<sui-label-group circular>
  <sui-label>11</sui-label>
  <sui-label>22</sui-label>
  <sui-label>33</sui-label>
  <sui-label>44</sui-label>
  <sui-label>141</sui-label>
</sui-label-group>`}}}),iw={class:"intro"},sw=n("Label "),nw=n(" A label displays content classification "),lw=n("Types"),aw=n(" 23 "),ow=y("img",{src:ml},null,-1),uw=n(" Joe "),rw=y("img",{src:At},null,-1),dw=n(" Elliot "),cw=y("img",{src:_s},null,-1),mw=n(" Stevie "),_w=y("input",{type:"text",placeholder:"First name"},null,-1),fw=n("Please enter a value"),hw=n("Please enter a value"),pw=y("input",{type:"text",placeholder:"Last name"},null,-1),gw=y("input",{type:"text",placeholder:"Username"},null,-1),bw=n("That name is taken!"),vw=n("Your password must be 6 characters or more"),Cw=y("input",{type:"password",placeholder:"Password"},null,-1),yw=n("New"),ww=n("Upcoming"),$w=n("Featured"),Aw=n("Overview"),Sw=y("span",null,"Account Details",-1),kw=n("Community"),Tw=y("span",null,"User Reviews",-1),xw=n("Specs"),Ew=n("Reviews"),Bw=n("HTML"),Rw=n("CSS"),zw=n("Code"),Pw=n("View"),Mw=n("User View"),Dw=n("Admin View"),Fw=n("Fruit"),Iw=n(" Kumquats "),Nw=n("Candy"),Lw=n(" Ice Cream "),Vw=n("Fruit"),Ow=n(" Orange "),Hw=n("Dog"),jw=n(" Poodle "),qw=n(" Messages "),Jw=n("22"),Uw=n(" Friends "),Yw=n("22"),Gw=n("Content"),Ww=n(" Dogs "),Kw=n("214"),Qw=n(" Mail "),Xw=n(" Tag "),Zw=n(" Elliot "),e$=y("img",{src:_s},null,-1),t$=n(" Stevie "),i$=n(" 23 "),s$=n("Variations"),n$=n("2"),l$=n("2"),a$=n("2"),o$=n("2"),u$=n("2"),r$=n("2"),d$=n("2"),c$=n("2"),m$=n("2"),_$=n("2"),f$=n("2"),h$=n("2"),p$=n("2"),g$=n("Basic"),b$=n("Pointing"),v$=y("img",{src:At},null,-1),C$=n(" Elliot "),y$=n("Red Pointing"),w$=n("Blue"),$$=n("Primary"),A$=n("Secondary"),S$=n("Red"),k$=n("Orange"),T$=n("Yellow"),x$=n("Olive"),E$=n("Green"),B$=n("Teal"),R$=n("Blue"),z$=n("Violet"),P$=n("Purple"),M$=n("Pink"),D$=n("Brown"),F$=n("Grey"),I$=n("Black"),N$=n("Primary"),L$=n("Secondary"),V$=n("Red"),O$=n("Orange"),H$=n("Yellow"),j$=n("Olive"),q$=n("Green"),J$=n("Teal"),U$=n("Blue"),Y$=n("Violet"),G$=n("Purple"),W$=n("Pink"),K$=n("Brown"),Q$=n("Grey"),X$=n("Black"),Z$=n("Mini"),eA=n("Tiny"),tA=n("Small"),iA=n("Medium"),sA=n("Large"),nA=n("Big"),lA=n("Huge"),aA=n("Massive"),oA=n("Groups"),uA=n("Fun"),rA=n("Happy"),dA=n("Smart"),cA=n("Witty"),mA=n(" Fun "),_A=n(" Happy "),fA=n("22"),hA=n("Smart"),pA=n("Insane"),gA=n("Exciting"),bA=n(" Fun "),vA=n(" Happy "),CA=n("22"),yA=n("Smart"),wA=n("Insane"),$A=n("Exciting"),AA=n("$10.00"),SA=n("$19.99"),kA=n("$24.99"),TA=n("$30.99"),xA=n("$10.25"),EA=n("11"),BA=n("22"),RA=n("33"),zA=n("44"),PA=n("141");function MA(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-label"),C=b("doc-example"),w=b("sui-form-field"),A=b("sui-form"),p=b("sui-image"),$=b("sui-grid-column"),k=b("sui-grid"),x=b("sui-grid-row"),R=b("sui-list-item"),z=b("sui-list"),F=b("sui-label-detail"),P=b("sui-label-group");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",iw,[e(m,{as:"h1"},{default:i(()=>[sw,e(f,null,{default:i(()=>[nw]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[lw]),_:1}),e(C,{title:"Label",description:"A label",code:t.labelCode},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"mail"}),aw]),_:1})]),_:1},8,["code"]),e(C,{title:"Image",description:"A label can be formatted to emphasize an image",code:t.imageCode},{default:i(()=>[y("div",null,[e(r,{as:"a",image:""},{default:i(()=>[ow,uw]),_:1}),e(r,{as:"a",image:""},{default:i(()=>[rw,dw]),_:1}),e(r,{as:"a",image:""},{default:i(()=>[cw,mw]),_:1})])]),_:1},8,["code"]),e(C,{title:"Pointing",description:"A label can point to content next to it",code:t.pointingCode},{default:i(()=>[e(A,{fluid:""},{default:i(()=>[e(w,null,{default:i(()=>[_w,e(r,{pointing:""},{default:i(()=>[fw]),_:1})]),_:1}),e(a),e(w,null,{default:i(()=>[e(r,{pointing:"below"},{default:i(()=>[hw]),_:1}),pw]),_:1}),e(a),e(w,{inline:""},{default:i(()=>[gw,e(r,{pointing:"left"},{default:i(()=>[bw]),_:1})]),_:1}),e(a),e(w,{inline:""},{default:i(()=>[e(r,{pointing:"right"},{default:i(()=>[vw]),_:1}),Cw]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Corner",description:"A label can position itself in the corner of an element",code:t.cornerCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e($,null,{default:i(()=>[e(p,{fluid:"",src:J,label:{corner:"left",icon:"heart"}})]),_:1}),e($,null,{default:i(()=>[e(p,{fluid:"",src:J,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Tag",description:"A label can appear as a tag",code:t.tagCode},{default:i(()=>[y("div",null,[e(r,{tag:""},{default:i(()=>[yw]),_:1}),e(r,{tag:"",color:"red"},{default:i(()=>[ww]),_:1}),e(r,{tag:"",color:"teal"},{default:i(()=>[$w]),_:1})])]),_:1},8,["code"]),e(C,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:t.ribbonCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e($,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(r,{as:"a",ribbon:"",color:"red"},{default:i(()=>[Aw]),_:1}),Sw,e(p,{src:fe}),e(r,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[kw]),_:1}),Tw,e(p,{src:fe})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(r,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[xw]),_:1}),e(p,{src:fe}),e(r,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[Ew]),_:1}),e(p,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Attached",description:"A label can attach to a content segment",code:t.attachedCode},{default:i(()=>[e(k,{columns:3},{default:i(()=>[e(x,null,{default:i(()=>[e($,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"top"},{default:i(()=>[Bw]),_:1}),e(p,{src:fe})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"bottom"},{default:i(()=>[Rw]),_:1}),e(p,{src:fe})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"top right"},{default:i(()=>[zw]),_:1}),e(p,{src:fe})]),_:1})]),_:1})]),_:1}),e(x,null,{default:i(()=>[e($,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"top left"},{default:i(()=>[Pw]),_:1}),e(p,{src:fe})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"bottom left"},{default:i(()=>[Mw]),_:1}),e(p,{src:fe})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"bottom right"},{default:i(()=>[Dw]),_:1}),e(p,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:t.horizontalCode},{default:i(()=>[e(z,{divided:"",selection:""},{default:i(()=>[e(R,null,{default:i(()=>[e(r,{color:"red",horizontal:""},{default:i(()=>[Fw]),_:1}),Iw]),_:1}),e(R,null,{default:i(()=>[e(r,{color:"purple",horizontal:""},{default:i(()=>[Nw]),_:1}),Lw]),_:1}),e(R,null,{default:i(()=>[e(r,{color:"red",horizontal:""},{default:i(()=>[Vw]),_:1}),Ow]),_:1}),e(R,null,{default:i(()=>[e(r,{horizontal:""},{default:i(()=>[Hw]),_:1}),jw]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Floating",description:"A label can float above or below another element",code:t.floatingCode},{default:i(()=>[e(c,{compact:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{name:"mail"}),qw,e(r,{floating:"",color:"red"},{default:i(()=>[Jw]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{name:"users"}),Uw,e(r,{floating:"",color:"teal"},{default:i(()=>[Yw]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Gw]),_:1}),e(C,{title:"Detail",description:"A label can contain a detail",code:t.detailCode},{default:i(()=>[e(r,null,{default:i(()=>[Ww,e(F,null,{default:i(()=>[Kw]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Icon",description:"A label can include an icon",code:t.iconCode},{default:i(()=>[y("div",null,[e(r,{as:"a"},{default:i(()=>[e(u,{name:"mail"}),Qw]),_:1}),e(r,{as:"a"},{default:i(()=>[Xw,e(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(C,{title:"Image",description:"A label can include an image",code:t.imageIncludeCode},{default:i(()=>[y("div",null,[e(r,{as:"a"},{default:i(()=>[e(p,{avatar:"",spaced:"right",src:At}),Zw]),_:1}),e(r,{as:"a"},{default:i(()=>[e$,t$]),_:1})])]),_:1},8,["code"]),e(C,{title:"Link",description:"A label can be a link or contain an item that links",code:t.linkCode},{default:i(()=>[e(r,{as:"a",link:""},{default:i(()=>[e(u,{name:"mail"}),i$]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[s$]),_:1}),e(C,{title:"Circular",description:"A label can be circular",code:t.circularCode},{default:i(()=>[y("div",null,[e(r,{as:"a",circular:"",color:"red"},{default:i(()=>[n$]),_:1}),e(r,{as:"a",circular:"",color:"orange"},{default:i(()=>[l$]),_:1}),e(r,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a$]),_:1}),e(r,{as:"a",circular:"",color:"olive"},{default:i(()=>[o$]),_:1}),e(r,{as:"a",circular:"",color:"green"},{default:i(()=>[u$]),_:1}),e(r,{as:"a",circular:"",color:"teal"},{default:i(()=>[r$]),_:1}),e(r,{as:"a",circular:"",color:"blue"},{default:i(()=>[d$]),_:1}),e(r,{as:"a",circular:"",color:"violet"},{default:i(()=>[c$]),_:1}),e(r,{as:"a",circular:"",color:"purple"},{default:i(()=>[m$]),_:1}),e(r,{as:"a",circular:"",color:"pink"},{default:i(()=>[_$]),_:1}),e(r,{as:"a",circular:"",color:"brown"},{default:i(()=>[f$]),_:1}),e(r,{as:"a",circular:"",color:"grey"},{default:i(()=>[h$]),_:1}),e(r,{as:"a",circular:"",color:"black"},{default:i(()=>[p$]),_:1})])]),_:1},8,["code"]),e(C,{title:"Basic",description:"A label can reduce its complexity",code:t.basicCode},{default:i(()=>[y("div",null,[e(r,{basic:"",as:"a"},{default:i(()=>[g$]),_:1}),e(r,{basic:"",as:"a",pointing:""},{default:i(()=>[b$]),_:1}),e(r,{basic:"",as:"a",image:""},{default:i(()=>[v$,C$]),_:1}),e(r,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[y$]),_:1}),e(r,{basic:"",as:"a",color:"blue"},{default:i(()=>[w$]),_:1})])]),_:1},8,["code"]),e(C,{title:"Colored",description:"A label can have different colors",code:t.coloredCode},{default:i(()=>[y("div",null,[e(r,{as:"a",color:"primary"},{default:i(()=>[$$]),_:1}),e(r,{as:"a",color:"secondary"},{default:i(()=>[A$]),_:1}),e(r,{as:"a",color:"red"},{default:i(()=>[S$]),_:1}),e(r,{as:"a",color:"orange"},{default:i(()=>[k$]),_:1}),e(r,{as:"a",color:"yellow"},{default:i(()=>[T$]),_:1}),e(r,{as:"a",color:"olive"},{default:i(()=>[x$]),_:1}),e(r,{as:"a",color:"green"},{default:i(()=>[E$]),_:1}),e(r,{as:"a",color:"teal"},{default:i(()=>[B$]),_:1}),e(r,{as:"a",color:"blue"},{default:i(()=>[R$]),_:1}),e(r,{as:"a",color:"violet"},{default:i(()=>[z$]),_:1}),e(r,{as:"a",color:"purple"},{default:i(()=>[P$]),_:1}),e(r,{as:"a",color:"pink"},{default:i(()=>[M$]),_:1}),e(r,{as:"a",color:"brown"},{default:i(()=>[D$]),_:1}),e(r,{as:"a",color:"grey"},{default:i(()=>[F$]),_:1}),e(r,{as:"a",color:"black"},{default:i(()=>[I$]),_:1})])]),_:1},8,["code"]),e(C,{title:"Basic Tag",description:"",code:t.basicTagCode},{default:i(()=>[y("div",null,[e(r,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[N$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[L$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[V$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[O$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[H$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[j$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[q$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[J$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[U$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[Y$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[G$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[W$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[K$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[Q$]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[X$]),_:1})])]),_:1},8,["code"]),e(C,{title:"Size",description:"A label can be small or large",code:t.sizeCode},{default:i(()=>[y("div",null,[e(r,{size:"mini"},{default:i(()=>[Z$]),_:1}),e(r,{size:"tiny"},{default:i(()=>[eA]),_:1}),e(r,{size:"small"},{default:i(()=>[tA]),_:1}),e(r,null,{default:i(()=>[iA]),_:1}),e(r,{size:"large"},{default:i(()=>[sA]),_:1}),e(r,{size:"big"},{default:i(()=>[nA]),_:1}),e(r,{size:"huge"},{default:i(()=>[lA]),_:1}),e(r,{size:"massive"},{default:i(()=>[aA]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[oA]),_:1}),e(C,{title:"Group Size",description:"Labels can share sizes together",code:t.groupSizeCode},{default:i(()=>[e(P,{size:"huge"},{default:i(()=>[e(r,null,{default:i(()=>[uA]),_:1}),e(r,null,{default:i(()=>[rA]),_:1}),e(r,null,{default:i(()=>[dA]),_:1}),e(r,null,{default:i(()=>[cA]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Colored Group",description:"Labels can share colors together",code:t.coloredGroupCode},{default:i(()=>[e(P,{color:"blue"},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[mA,e(u,{name:"close"})]),_:1}),e(r,{as:"a"},{default:i(()=>[_A,e(F,null,{default:i(()=>[fA]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[hA]),_:1}),e(r,{as:"a"},{default:i(()=>[pA]),_:1}),e(r,{as:"a"},{default:i(()=>[gA]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Basic Group",description:"Labels can share their style together",code:t.basicGroupCode},{default:i(()=>[e(P,{basic:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[bA,e(u,{name:"close"})]),_:1}),e(r,{as:"a"},{default:i(()=>[vA,e(F,null,{default:i(()=>[CA]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[yA]),_:1}),e(r,{as:"a"},{default:i(()=>[wA]),_:1}),e(r,{as:"a"},{default:i(()=>[$A]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Tag Group",description:"Labels can share tag formatting",code:t.tagGroupCode},{default:i(()=>[e(P,{tag:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[AA]),_:1}),e(r,{as:"a"},{default:i(()=>[SA]),_:1}),e(r,{as:"a"},{default:i(()=>[kA]),_:1}),e(r,{as:"a"},{default:i(()=>[TA]),_:1}),e(r,{as:"a"},{default:i(()=>[xA]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"CircularGroup",description:"Labels can share shapes",code:t.circularGroupCode},{default:i(()=>[e(P,{circular:""},{default:i(()=>[e(r,null,{default:i(()=>[EA]),_:1}),e(r,null,{default:i(()=>[BA]),_:1}),e(r,null,{default:i(()=>[RA]),_:1}),e(r,null,{default:i(()=>[zA]),_:1}),e(r,null,{default:i(()=>[PA]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var DA=_e(tw,[["render",MA]]),FA="/vue-fomantic-ui/images/avatar/small/rachel.png",IA="/vue-fomantic-ui/images/avatar/small/lindsay.png",NA="/vue-fomantic-ui/images/avatar/small/matthew.png",Sn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",LA="/vue-fomantic-ui/images/avatar/small/veronika.jpg",VA="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ns="/vue-fomantic-ui/images/avatar/small/christian.jpg",kn="/vue-fomantic-ui/images/avatar/small/matt.jpg",Wi="/vue-fomantic-ui/images/avatar/small/helen.jpg",ti="/vue-fomantic-ui/images/avatar/small/daniel.jpg";const OA=E({name:"ListDoc",components:{DocExample:ve},setup(){return{listCode:`<sui-list>
  <sui-list-item>Apples</sui-list-item>
  <sui-list-item>Pears</sui-list-item>
  <sui-list-item>Oranges</sui-list-item>
</sui-list>`,bulletedCode:`<sui-list bulleted>
  <sui-list-item>Gaining Access</sui-list-item>
  <sui-list-item>Inviting Friends</sui-list-item>
  <sui-list-item>
    <div>Benefits</div>
    <div class="list">
      <sui-list-item as="a">Link to somewhere</sui-list-item>
      <sui-list-item>Rebates</sui-list-item>
      <sui-list-item>Discounts</sui-list-item>
    </div>
  </sui-list-item>
  <sui-list-item>Warranty</sui-list-item>
</sui-list>`,orderedCode:`<sui-list ordered>
  <sui-list-item as="a">Getting Started</sui-list-item>
  <sui-list-item as="a">Introduction</sui-list-item>
  <sui-list-item>
    <a>Languages</a>
    <sui-list-list>
      <sui-list-item as="a">HTML</sui-list-item>
      <sui-list-item as="a">Javascript</sui-list-item>
      <sui-list-item as="a">CSS</sui-list-item>
    </sui-list-list>
  </sui-list-item>
  <sui-list-item as="a">Review</sui-list-item>
</sui-list>`,linkCode:`<sui-list link>
  <sui-list-item active>Home</sui-list-item>
  <sui-list-item as="a">About</sui-list-item>
  <sui-list-item as="a">Jobs</sui-list-item>
  <sui-list-item as="a">Team</sui-list-item>
</sui-list>`,itemCode:`<sui-list>
  <sui-list-item>1</sui-list-item>
  <sui-list-item>2</sui-list-item>
  <sui-list-item>3</sui-list-item>
</sui-list>`,iconCode:`<sui-list>
  <sui-list-item as="a">
    <sui-icon name="help" />
    <sui-list-content>
      <sui-list-header>Floated Icon</sui-list-header>
      <sui-list-description>
        This text will always have a left margin to make sure it sits alongside your icon
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item as="a">
    <sui-icon name="right triangle" />
    <sui-list-content>
      <sui-list-header>Icon Alignment</sui-list-header>
      <sui-list-description>
        Floated icons are by default top aligned. To have an icon top aligned try this example
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="help" />
    Inline Text
  </sui-list-item>
</sui-list>`,imageContentCode:`<sui-list>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/rachel.png" />
    <sui-list-content>
      <sui-list-header>Rachel</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Arrested Development</b></a> just now.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/lindsay.png" />
    <sui-list-content>
      <sui-list-header>Lindsay</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/matthew.png" />
    <sui-list-content>
      <sui-list-header>Matthew</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/jenny.jpg" />
    <sui-list-content>
      <sui-list-header>Jenny Hess</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/veronika.jpg" />
    <sui-list-content>
      <sui-list-header>Veronika Ossi</sui-list-header>
      <sui-list-description>
        Has not watched anything recently
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,linkContentCode:`<sui-list>
  <sui-list-item as="a">What is a FAQ?</sui-list-item>
  <sui-list-item as="a">Who is our user?</sui-list-item>
  <sui-list-item as="a">Where is our office located?</sui-list-item>
</sui-list>`,headerContentCode:`<sui-list>
  <sui-list-item>
    <sui-list-header>New York City</sui-list-header>
    A lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>Chicago</sui-list-header>
    Also quite a lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>Los Angeles</sui-list-header>
    Sometimes can be a lovely city
  </sui-list-item>
  <sui-list-item>
    <sui-list-header>San Francisco</sui-list-header>
    What a lovely city
  </sui-list-item>
</sui-list>`,descriptionContentCode:`<sui-list>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Krolewskie Jadlo</sui-list-header>
      <sui-list-description>
        An excellent polish restaurant, quick delivery and hearty, filling meals.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Xian Famous Foods</sui-list-header>
      <sui-list-description>
        A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Sapporo Haru</sui-list-header>
      <sui-list-description>
        Greenpoint's best choice for quick and delicious sushi.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-icon name="map marker" />
    <sui-list-content>
      <sui-list-header as="a">Enid's</sui-list-header>
      <sui-list-description>
        At night a bar, during the day a delicious brunch spot.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,horizontalVarCode:`<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/tom.jpg" />
    <sui-list-content>
      <sui-list-header>Tom</sui-list-header>
      Top Contributor
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian Rocha</sui-list-header>
      Admin
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/matt.jpg" />
    <sui-list-content>
      <sui-list-header>Matt</sui-list-header>
      Top Rated User
    </sui-list-content>
  </sui-list-item>
</sui-list>`,invertedVarCode:`<sui-segment inverted>
  <sui-list inverted relaxed divided>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Snickerdoodle</sui-list-header>
        An excellent companion
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Poodle</sui-list-header>
        A poodle, its pretty basic
      </sui-list-content>
    </sui-list-item>
    <sui-list-item>
      <sui-list-content>
        <sui-list-header>Paulo</sui-list-header>
        He's also a dog
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</sui-segment>`,selectionVarCode:`<sui-list selection verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,animatedVarCode:`<sui-list animated verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,relaxedVarCode:`<sui-list relaxed>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Daniel Louise</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Arrested Development</b></a> just now.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/stevie.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Stevie Feliciano</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/elliot.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Elliot Fu</sui-list-header>
      <sui-list-description>
        Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,dividedVarCode:`<sui-list divided verticalAlign="middle">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Daniel Louise</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/stevie.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Stevie Feliciano</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/elliot.jpg" />
    <sui-list-content>
      <sui-list-header as="a">Elliot Fu</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,celledVarCode:`<sui-list celled>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Snickerdoodle</sui-list-header>
      An excellent companion
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Poodle</sui-list-header>
      A poodle, its pretty basic
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Paulo</sui-list-header>
      He's also a dog
    </sui-list-content>
  </sui-list-item>
</sui-list>`,sizeCode:`<sui-list horizontal divided size="mini">
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/helen.jpg" />
    <sui-list-content>
      <sui-list-header>Helen</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/christian.jpg" />
    <sui-list-content>
      <sui-list-header>Christian</sui-list-header>
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/avatar/small/daniel.jpg" />
    <sui-list-content>
      <sui-list-header>Daniel</sui-list-header>
    </sui-list-content>
  </sui-list-item>
</sui-list>`,verticalAlignedCode:`<sui-list horizontal>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="top">
      Top Aligned
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="middle">
      Middle
    </sui-list-content>
  </sui-list-item>
  <sui-list-item>
    <sui-image avatar src="/images/wireframe/square-image.png" />
    <sui-list-content verticalAlign="bottom">
      Bottom
    </sui-list-content>
  </sui-list-item>
</sui-list>`,floatedCode:`<div>
  <sui-list floated="right" horizontal>
    <sui-list-item disabled>\xA9 GitHub, Inc.</sui-list-item>
    <sui-list-item as="a">Terms</sui-list-item>
    <sui-list-item as="a">Privacy</sui-list-item>
    <sui-list-item as="a">Contact</sui-list-item>
  </sui-list>
  <sui-list horizontal>
    <sui-list-item as="a">About Us</sui-list-item>
    <sui-list-item as="a">Jobs</sui-list-item>
  </sui-list>
</div>`}}}),HA={class:"intro"},jA=n("List "),qA=n(" A list is used to group related content "),JA=n("Types"),UA=n("Apples"),YA=n("Pears"),GA=n("Oranges"),WA=n("Gaining Access"),KA=n("Inviting Friends"),QA=y("div",null,"Benefits",-1),XA={class:"list"},ZA=n("Link to somewhere"),eS=n("Rebates"),tS=n("Discounts"),iS=n("Warranty"),sS=n("Getting Started"),nS=n("Introduction"),lS=y("a",null,"Languages",-1),aS=n("HTML"),oS=n("Javascript"),uS=n("CSS"),rS=n("Review"),dS=n("Home"),cS=n("About"),mS=n("Jobs"),_S=n("Team"),fS=n("Content"),hS=n("1"),pS=n("2"),gS=n("3"),bS=n("Floated Icon"),vS=n(" This text will always have a left margin to make sure it sits alongside your icon "),CS=n("Icon Alignment"),yS=n(" Floated icons are by default top aligned. To have an icon top aligned try this example "),wS=n(" Inline Text "),$S=n("Rachel"),AS=n(" Last seen watching "),SS=y("a",null,[y("b",null,"Arrested Development")],-1),kS=n(" just now. "),TS=n("Lindsay"),xS=n(" Last seen watching "),ES=y("a",null,[y("b",null,"Bob's Burgers")],-1),BS=n(" 10 hours ago. "),RS=n("Matthew"),zS=n(" Last seen watching "),PS=y("a",null,[y("b",null,"The Godfather Part 2")],-1),MS=n(" yesterday. "),DS=n("Jenny Hess"),FS=n(" Last seen watching "),IS=y("a",null,[y("b",null,"Twin Peaks")],-1),NS=n(" 3 days ago. "),LS=n("Veronika Ossi"),VS=n(" Has not watched anything recently "),OS=n("What is a FAQ?"),HS=n("Who is our user?"),jS=n("Where is our office located?"),qS=n("New York City"),JS=n(" A lovely city "),US=n("Chicago"),YS=n(" Also quite a lovely city "),GS=n("Los Angeles"),WS=n(" Sometimes can be a lovely city "),KS=n("San Francisco"),QS=n(" What a lovely city "),XS=n("Krolewskie Jadlo"),ZS=n(" An excellent polish restaurant, quick delivery and hearty, filling meals. "),ek=n("Xian Famous Foods"),tk=n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. "),ik=n("Sapporo Haru"),sk=n(" Greenpoint's best choice for quick and delicious sushi. "),nk=n("Enid's"),lk=n(" At night a bar, during the day a delicious brunch spot. "),ak=n("Variations"),ok=n("Tom"),uk=n(" Top Contributor "),rk=n("Christian Rocha"),dk=n(" Admin "),ck=n("Matt"),mk=n(" Top Rated User "),_k=n("Snickerdoodle"),fk=n(" An excellent companion "),hk=n("Poodle"),pk=n(" A poodle, its pretty basic "),gk=n("Paulo"),bk=n(" He's also a dog "),vk=n("Helen"),Ck=n("Christian"),yk=n("Daniel"),wk=n("Helen"),$k=n("Christian"),Ak=n("Daniel"),Sk=n("Daniel Louise"),kk=n(" Last seen watching "),Tk=y("a",null,[y("b",null,"Arrested Development")],-1),xk=n(" just now. "),Ek=n("Stevie Feliciano"),Bk=n(" Last seen watching "),Rk=y("a",null,[y("b",null,"Bob's Burgers")],-1),zk=n(" 10 hours ago. "),Pk=n("Elliot Fu"),Mk=n(" Last seen watching "),Dk=y("a",null,[y("b",null,"The Godfather Part 2")],-1),Fk=n(" yesterday. "),Ik=n("Daniel Louise"),Nk=n("Stevie Feliciano"),Lk=n("Elliot Fu"),Vk=n("Snickerdoodle"),Ok=n(" An excellent companion "),Hk=n("Poodle"),jk=n(" A poodle, its pretty basic "),qk=n("Paulo"),Jk=n(" He's also a dog "),Uk=n("Helen"),Yk=n("Christian"),Gk=n("Daniel"),Wk=n("Content Variations"),Kk=n(" Top Aligned "),Qk=n(" Middle "),Xk=n(" Bottom "),Zk=n("\xA9 GitHub, Inc."),e2=n("Terms"),t2=n("Privacy"),i2=n("Contact"),s2=n("About Us"),n2=n("Jobs");function l2(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-list-item"),C=b("sui-list"),w=b("doc-example"),A=b("sui-list-list"),p=b("sui-list-header"),$=b("sui-list-description"),k=b("sui-list-content"),x=b("sui-image");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",HA,[e(m,{as:"h1"},{default:i(()=>[jA,e(f,null,{default:i(()=>[qA]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[JA]),_:1}),e(w,{title:"List",description:"A list groups related content",code:t.listCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[UA]),_:1}),e(r,null,{default:i(()=>[YA]),_:1}),e(r,null,{default:i(()=>[GA]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Bulleted",description:"A list can mark items with a bullet",code:t.bulletedCode},{default:i(()=>[e(C,{bulleted:""},{default:i(()=>[e(r,null,{default:i(()=>[WA]),_:1}),e(r,null,{default:i(()=>[KA]),_:1}),e(r,null,{default:i(()=>[QA,y("div",XA,[e(r,{as:"a"},{default:i(()=>[ZA]),_:1}),e(r,null,{default:i(()=>[eS]),_:1}),e(r,null,{default:i(()=>[tS]),_:1})])]),_:1}),e(r,null,{default:i(()=>[iS]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Ordered",description:"A list can be ordered numerically",code:t.orderedCode},{default:i(()=>[e(C,{ordered:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[sS]),_:1}),e(r,{as:"a"},{default:i(()=>[nS]),_:1}),e(r,null,{default:i(()=>[lS,e(A,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[aS]),_:1}),e(r,{as:"a"},{default:i(()=>[oS]),_:1}),e(r,{as:"a"},{default:i(()=>[uS]),_:1})]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[rS]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Link",description:"A list can be specially formatted for navigation links",code:t.linkCode},{default:i(()=>[e(C,{link:""},{default:i(()=>[e(r,{active:""},{default:i(()=>[dS]),_:1}),e(r,{as:"a"},{default:i(()=>[cS]),_:1}),e(r,{as:"a"},{default:i(()=>[mS]),_:1}),e(r,{as:"a"},{default:i(()=>[_S]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[fS]),_:1}),e(w,{title:"Item",description:"A list item can contain a set of items",code:t.itemCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[hS]),_:1}),e(r,null,{default:i(()=>[pS]),_:1}),e(r,null,{default:i(()=>[gS]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Icon",description:"A list item can contain an icon",code:t.iconCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[e(u,{name:"help"}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[bS]),_:1}),e($,null,{default:i(()=>[vS]),_:1})]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[e(u,{name:"right triangle"}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[CS]),_:1}),e($,null,{default:i(()=>[yS]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"help"}),wS]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Image",description:"A list can contain an image",code:t.imageContentCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:FA}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[$S]),_:1}),e($,null,{default:i(()=>[AS,SS,kS]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:IA}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[TS]),_:1}),e($,null,{default:i(()=>[xS,ES,BS]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:NA}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[RS]),_:1}),e($,null,{default:i(()=>[zS,PS,MS]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:Sn}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[DS]),_:1}),e($,null,{default:i(()=>[FS,IS,NS]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:LA}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[LS]),_:1}),e($,null,{default:i(()=>[VS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Link",description:"A list can contain links",code:t.linkContentCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[OS]),_:1}),e(r,{as:"a"},{default:i(()=>[HS]),_:1}),e(r,{as:"a"},{default:i(()=>[jS]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"header",description:"A list item can contain a header",code:t.headerContentCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[qS]),_:1}),JS]),_:1}),e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[US]),_:1}),YS]),_:1}),e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[GS]),_:1}),WS]),_:1}),e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[KS]),_:1}),QS]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Description",description:"A list item can contain a description",code:t.descriptionContentCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[XS]),_:1}),e($,null,{default:i(()=>[ZS]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[ek]),_:1}),e($,null,{default:i(()=>[tk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[ik]),_:1}),e($,null,{default:i(()=>[sk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[nk]),_:1}),e($,null,{default:i(()=>[lk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[ak]),_:1}),e(w,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:t.horizontalVarCode},{default:i(()=>[e(C,{horizontal:""},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:VA}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[ok]),_:1}),uk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:Ns}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[rk]),_:1}),dk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:kn}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[ck]),_:1}),mk]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:t.invertedVarCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[_k]),_:1}),fk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[hk]),_:1}),pk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[gk]),_:1}),bk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Selection",description:"A selection list formats list items as possible choices",code:t.selectionVarCode},{default:i(()=>[e(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:Wi}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[vk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:Ns}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Ck]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[yk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:t.animatedVarCode},{default:i(()=>[e(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:Wi}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[wk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:Ns}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[$k]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Ak]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:t.relaxedVarCode},{default:i(()=>[e(C,{relaxed:""},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[Sk]),_:1}),e($,null,{default:i(()=>[kk,Tk,xk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:_s}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[Ek]),_:1}),e($,null,{default:i(()=>[Bk,Rk,zk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:At}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[Pk]),_:1}),e($,null,{default:i(()=>[Mk,Dk,Fk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Divided",description:"A list can show divisions between content",code:t.dividedVarCode},{default:i(()=>[e(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[Ik]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:_s}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[Nk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:At}),e(k,null,{default:i(()=>[e(p,{as:"a"},{default:i(()=>[Lk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Celled",description:"A list can divide its items into cells",code:t.celledVarCode},{default:i(()=>[e(C,{celled:""},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:Wi}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Vk]),_:1}),Ok]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Hk]),_:1}),jk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[qk]),_:1}),Jk]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Size",description:"A list can vary in size",code:t.sizeCode},{default:i(()=>[e(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:Wi}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Uk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:Ns}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Yk]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:ti}),e(k,null,{default:i(()=>[e(p,null,{default:i(()=>[Gk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Wk]),_:1}),e(w,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:t.verticalAlignedCode},{default:i(()=>[e(C,{horizontal:""},{default:i(()=>[e(r,null,{default:i(()=>[e(x,{avatar:"",src:nt}),e(k,{verticalAlign:"top"},{default:i(()=>[Kk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:nt}),e(k,{verticalAlign:"middle"},{default:i(()=>[Qk]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(x,{avatar:"",src:nt}),e(k,{verticalAlign:"bottom"},{default:i(()=>[Xk]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:t.floatedCode},{default:i(()=>[y("div",null,[e(C,{floated:"right",horizontal:""},{default:i(()=>[e(r,{disabled:""},{default:i(()=>[Zk]),_:1}),e(r,{as:"a"},{default:i(()=>[e2]),_:1}),e(r,{as:"a"},{default:i(()=>[t2]),_:1}),e(r,{as:"a"},{default:i(()=>[i2]),_:1})]),_:1}),e(C,{horizontal:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[s2]),_:1}),e(r,{as:"a"},{default:i(()=>[n2]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}var a2=_e(OA,[["render",l2]]);const o2=E({name:"LoaderDoc",components:{DocExample:ve},setup(){return{loaderCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader />
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,textLoaderCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader text>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,indeterminateCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader indeterminate>Preparing Files</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,activeCode:`<sui-segment>
  <sui-loader active />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,disabledCode:`<sui-segment>
  <sui-loader disabled />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,inlineCode:"<sui-loader inline active />",inlineCenterCode:'<sui-loader inline="centered" active />',speedCode:`<div>
  <sui-loader slow active inline />
  <sui-loader active inline />
  <sui-loader fast active inline />
</div>`,colorsCode:`<div>
  <sui-loader color="primary" inline active />
  <sui-loader color="secondary" inline active />
  <sui-loader color="red" inline active />
  <sui-loader color="orange" inline active />
  <sui-loader color="yellow" inline active />
  <sui-loader color="olive" inline active />
  <sui-loader color="green" inline active />
  <sui-loader color="teal" inline active />
  <sui-loader color="blue" inline active />
  <sui-loader color="violet" inline active />
  <sui-loader color="purple" inline active />
  <sui-loader color="pink" inline active />
  <sui-loader color="brown" inline active />
  <sui-loader color="grey" inline active />
  <sui-loader color="black" inline active />
</div>`,sizeCode:`<sui-segment>
  <sui-dimmer active>
    <sui-loader size="mini">Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,invertedCode:`<sui-segment>
  <sui-dimmer active inverted>
    <sui-loader>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`}}}),u2={class:"intro"},r2=n("Loader "),d2=n(" A loader alerts a user to wait for an activity to complete "),c2=n("Types"),m2=n("Loading"),_2=n("States"),f2=n("Preparing Files"),h2=n("Variations"),p2=n("Loading"),g2=n("Loading");function b2(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-loader"),C=b("sui-dimmer"),w=b("sui-image"),A=b("doc-example");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",u2,[e(m,{as:"h1"},{default:i(()=>[r2,e(f,null,{default:i(()=>[d2]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[c2]),_:1}),e(A,{title:"Loader",description:"A loader",code:t.loaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(C,{active:""},{default:i(()=>[e(r)]),_:1}),e(w,{src:ye})]),_:1})]),_:1},8,["code"]),e(A,{title:"Text Loader",description:"A loader can contain text",code:t.textLoaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(C,{active:""},{default:i(()=>[e(r,null,{default:i(()=>[m2]),_:1})]),_:1}),e(w,{src:ye})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[_2]),_:1}),e(A,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:t.indeterminateCode},{default:i(()=>[e(v,null,{default:i(()=>[e(C,{active:""},{default:i(()=>[e(r,{indeterminate:""},{default:i(()=>[f2]),_:1})]),_:1}),e(w,{src:ye})]),_:1})]),_:1},8,["code"]),e(A,{title:"Active",description:"A loader can be active or visible",code:t.activeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{active:""}),e(w,{src:ye})]),_:1})]),_:1},8,["code"]),e(A,{title:"Diasbled",description:"A loader can be disabled or hidden",code:t.disabledCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{disabled:""}),e(w,{src:ye})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[h2]),_:1}),e(A,{title:"Inline",description:"Loaders can appear inline with content",code:t.inlineCode},{default:i(()=>[e(r,{inline:"",active:""})]),_:1},8,["code"]),e(A,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:t.inlineCenterCode},{default:i(()=>[e(r,{inline:"centered",active:""})]),_:1},8,["code"]),e(A,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:t.speedCode},{default:i(()=>[y("div",null,[e(r,{slow:"",active:"",inline:""}),e(r,{active:"",inline:""}),e(r,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e(A,{title:"Colors",description:"Loaders can be different colors",code:t.colorsCode},{default:i(()=>[y("div",null,[e(r,{color:"primary",inline:"",active:""}),e(r,{color:"secondary",inline:"",active:""}),e(r,{color:"red",inline:"",active:""}),e(r,{color:"orange",inline:"",active:""}),e(r,{color:"yellow",inline:"",active:""}),e(r,{color:"olive",inline:"",active:""}),e(r,{color:"green",inline:"",active:""}),e(r,{color:"teal",inline:"",active:""}),e(r,{color:"blue",inline:"",active:""}),e(r,{color:"violet",inline:"",active:""}),e(r,{color:"purple",inline:"",active:""}),e(r,{color:"pink",inline:"",active:""}),e(r,{color:"brown",inline:"",active:""}),e(r,{color:"grey",inline:"",active:""}),e(r,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e(A,{title:"Size",description:"Loaders can have different sizes",code:t.sizeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(C,{active:""},{default:i(()=>[e(r,{size:"mini"},{default:i(()=>[p2]),_:1})]),_:1}),e(w,{src:ye})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"Loaders can have their colors inverted",code:t.invertedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(C,{active:"",inverted:""},{default:i(()=>[e(r,null,{default:i(()=>[g2]),_:1})]),_:1}),e(w,{src:ye})]),_:1})]),_:1},8,["code"])]),_:1})])}var v2=_e(o2,[["render",b2]]);const C2=E({name:"RailDoc",components:{DocExample:ve},setup(){return{railCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,internalCode:`<sui-segment textAlign="center">
  <sui-image src="/images/wireframe/short-paragraph.png" />

  <sui-rail internal position="left">
    <sui-segment>Left Rail Content</sui-segment>
  </sui-rail>

  <sui-rail internal position="right">
    <sui-segment>Right Rail Content</sui-segment>
  </sui-rail>
</sui-segment>`,dividingCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail dividing position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail dividing position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail attached position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail attached position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,closeCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail close position="left">
        <sui-segment>
          Left Rail Content
        </sui-segment>
      </sui-rail>
      <sui-rail close position="right">
        <sui-segment>
          Right Rail Content
        </sui-segment>
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,sizeCode:`<sui-grid centered :columns="3">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/short-paragraph.png" />

      <sui-rail size="small" position="left">
        Left Small Rail
      </sui-rail>
      <sui-rail size="large" position="right">
        Right Large Rail
      </sui-rail>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`}}}),y2={class:"intro"},w2=n("Rail "),$2=n(" A rail is used to show accompanying content outside the boundaries of the main view of a site "),A2=n("Types"),S2=n(" Left Rail Content "),k2=n(" Right Rail Content "),T2=n("Left Rail Content"),x2=n("Right Rail Content"),E2=n(" Left Rail Content "),B2=n(" Right Rail Content "),R2=n("Variations"),z2=n(" Left Rail Content "),P2=n(" Right Rail Content "),M2=n(" Left Rail Content "),D2=n(" Right Rail Content "),F2=n(" Left Small Rail "),I2=n(" Right Large Rail ");function N2(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-image"),C=b("sui-rail"),w=b("sui-grid-column"),A=b("sui-grid"),p=b("doc-example");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",y2,[e(m,{as:"h1"},{default:i(()=>[w2,e(f,null,{default:i(()=>[$2]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[A2]),_:1}),e(p,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:t.railCode},{default:i(()=>[e(A,{centered:"",columns:3},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:ye}),e(C,{position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[S2]),_:1})]),_:1}),e(C,{position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[k2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:t.internalCode},{default:i(()=>[e(v,{textAlign:"center"},{default:i(()=>[e(r,{src:ye}),e(C,{internal:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[T2]),_:1})]),_:1}),e(C,{internal:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[x2]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Dividing",description:"A rail can create a division between itself and a container",code:t.dividingCode},{default:i(()=>[e(A,{centered:"",columns:3},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:ye}),e(C,{dividing:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[E2]),_:1})]),_:1}),e(C,{dividing:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[B2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[R2]),_:1}),e(p,{title:"Attached",description:"A rail can appear attached to the main viewport",code:t.attachedCode},{default:i(()=>[e(A,{centered:"",columns:3},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:ye}),e(C,{attached:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[z2]),_:1})]),_:1}),e(C,{attached:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[P2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Close",description:"A rail can appear closer to the main viewport",code:t.closeCode},{default:i(()=>[e(A,{centered:"",columns:3},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:ye}),e(C,{close:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[M2]),_:1})]),_:1}),e(C,{close:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[D2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Size",description:"A rail can have different sizes",code:t.sizeCode},{default:i(()=>[e(A,{centered:"",columns:3},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:ye}),e(C,{size:"small",position:"left"},{default:i(()=>[F2]),_:1}),e(C,{size:"large",position:"right"},{default:i(()=>[I2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var L2=_e(C2,[["render",N2]]),V2="/vue-fomantic-ui/images/avatar/large/ade.jpg",_o="/vue-fomantic-ui/images/avatar/large/chris.jpg",_l="/vue-fomantic-ui/images/avatar/large/stevie.jpg",fo="/vue-fomantic-ui/images/avatar/large/nan.jpg";const O2=E({name:"RevealDoc",components:{DocExample:ve},setup(){return{fadeCode:`<sui-reveal animated="fade">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/ade.jpg" />
  </sui-reveal-content>
</sui-reveal>`,moveCode:`<sui-reveal animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/chris.jpg" />
  </sui-reveal-content>
</sui-reveal>`,rotateCode:`<sui-reveal animated="rotate">
  <sui-reveal-content visible>
    <sui-image circular size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image circular size="small" src="/images/avatar/large/stevie.jpg" />
  </sui-reveal-content>
</sui-reveal>`,activeCode:`<sui-reveal active animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/nan.jpg" />
  </sui-reveal-content>
</sui-reveal>`,disabledCode:`<sui-reveal disabled animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/nan.jpg" />
  </sui-reveal-content>
</sui-reveal>`,instantCode:`<sui-reveal instant animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/chris.jpg" />
  </sui-reveal-content>
</sui-reveal>`}}}),H2={class:"intro"},j2=n("Reveal "),q2=n(" A reveal displays additional content in place of previous content when activated "),J2=n("Types"),U2=n("States"),Y2=n("Variations");function G2(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-image"),C=b("sui-reveal-content"),w=b("sui-reveal"),A=b("doc-example");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",H2,[e(m,{as:"h1"},{default:i(()=>[j2,e(f,null,{default:i(()=>[q2]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[J2]),_:1}),e(A,{title:"Fade",description:"An element can disappear to reveal content below",code:t.fadeCode},{default:i(()=>[e(w,{animated:"fade"},{default:i(()=>[e(C,{visible:""},{default:i(()=>[e(r,{size:"small",src:nt})]),_:1}),e(C,{hidden:""},{default:i(()=>[e(r,{size:"small",src:V2})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Move",description:"An element can move in a direction to reveal content",code:t.moveCode},{default:i(()=>[e(w,{animated:"move"},{default:i(()=>[e(C,{visible:""},{default:i(()=>[e(r,{size:"small",src:nt})]),_:1}),e(C,{hidden:""},{default:i(()=>[e(r,{size:"small",src:_o})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Rotate",description:"An element can rotate to reveal content below",code:t.rotateCode},{default:i(()=>[e(w,{animated:"rotate"},{default:i(()=>[e(C,{visible:""},{default:i(()=>[e(r,{circular:"",size:"small",src:nt})]),_:1}),e(C,{hidden:""},{default:i(()=>[e(r,{circular:"",size:"small",src:_l})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[U2]),_:1}),e(A,{title:"Active",description:"An active reveal displays its hidden content",code:t.activeCode},{default:i(()=>[e(w,{active:"",animated:"move"},{default:i(()=>[e(C,{visible:""},{default:i(()=>[e(r,{size:"small",src:nt})]),_:1}),e(C,{hidden:""},{default:i(()=>[e(r,{size:"small",src:fo})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:t.disabledCode},{default:i(()=>[e(w,{disabled:"",animated:"move"},{default:i(()=>[e(C,{visible:""},{default:i(()=>[e(r,{size:"small",src:nt})]),_:1}),e(C,{hidden:""},{default:i(()=>[e(r,{size:"small",src:fo})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Y2]),_:1}),e(A,{title:"Instant",description:"An element can show its content without delay",code:t.instantCode},{default:i(()=>[e(w,{instant:"",animated:"move"},{default:i(()=>[e(C,{visible:""},{default:i(()=>[e(r,{size:"small",src:nt})]),_:1}),e(C,{hidden:""},{default:i(()=>[e(r,{size:"small",src:_o})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var W2=_e(O2,[["render",G2]]);const K2=E({name:"SegmentDoc",components:{DocExample:ve},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
  <sui-header icon>
    <sui-icon name="file outline" />
    No documents are listed for this customer.
  </sui-header>
  <sui-button color="primary">Add Document</sui-button>
</sui-segment>`,raisedCode:`<sui-segment raised>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`,stackedCode:`<sui-segment stacked>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`,piledCode:`<sui-segment piled>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`,verticalCode:`<div>
  <sui-segment vertical>
    Te eum doming eirmod, nominati pertinacia argumentum ad his.
  </sui-segment>
  <sui-segment vertical>
    Pellentesque habitant morbi tristique senectus.
  </sui-segment>
  <sui-segment vertical>
    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
  </sui-segment>
</div>`,segmentsCode:`<sui-segment-group>
  <sui-segment><p>Top</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Middle</p></sui-segment>
  <sui-segment><p>Bottom</p></sui-segment>
</sui-segment-group>`,nestedCode:`<sui-segment-group>
  <sui-segment>Top</sui-segment>
  <sui-segment-group>
    <sui-segment>Nested Top</sui-segment>
    <sui-segment>Nested Middle</sui-segment>
    <sui-segment>Nested Bottom</sui-segment>
  </sui-segment-group>
  <sui-segment-group horizontal>
    <sui-segment>Top</sui-segment>
    <sui-segment>Middle</sui-segment>
    <sui-segment>Bottom</sui-segment>
  </sui-segment-group>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,horizontalCode:`<sui-segment-group horizontal>
  <sui-segment>Left</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Right</sui-segment>
</sui-segment-group>`,raisedSegmentsCode:`<sui-segment-group raised>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,stackedSegmentsCode:`<sui-segment-group stacked>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,piledSegmentsCode:`<sui-segment-group piled>
  <sui-segment>Top</sui-segment>
  <sui-segment>Middle</sui-segment>
  <sui-segment>Bottom</sui-segment>
</sui-segment-group>`,disabledCode:"<sui-segment disabled>Disabled content</sui-segment>",loadingCode:"<sui-segment loading>Now Loading...</sui-segment>",invertedCode:`<sui-segment inverted>
  <p>I'm here to tell you something, and you will probably read me first.</p>
</sui-segment>`,attachedCode:`<div>
  <sui-segment attached="top">
    <p>This segment is on top</p>
  </sui-segment>
  <sui-segment attached>
    <p>This segment is attached on both sides</p>
  </sui-segment>
  <sui-segment attached="bottom">
    <p>This segment is on bottom</p>
  </sui-segment>
</div>`,paddedCode:"<sui-segment padded>Padded content</sui-segment>",fittedCode:`<div>
  <sui-segment fitted>
    <p>Fitted Segment</p>
  </sui-segment>
  <sui-segment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </sui-segment>
  <sui-segment fitted="vertically">
    <p>Vertically fitted segment</p>
  </sui-segment>
</div>`,compactCode:"<sui-segment compact>Compact content</sui-segment>",coloredCode:`<div>
  <sui-segment color="red">Red</sui-segment>
  <sui-segment color="orange">Orange</sui-segment>
  <sui-segment color="yellow">Yellow</sui-segment>
  <sui-segment color="olive">Olive</sui-segment>
  <sui-segment color="green">Green</sui-segment>
  <sui-segment color="teal">Teal</sui-segment>
  <sui-segment color="blue">Blue</sui-segment>
  <sui-segment color="violet">Violet</sui-segment>
  <sui-segment color="purple">Purple</sui-segment>
  <sui-segment color="pink">Pink</sui-segment>
  <sui-segment color="brown">Brown</sui-segment>
  <sui-segment color="grey">Grey</sui-segment>
  <sui-segment color="black">Black</sui-segment>
</div>`,emphasisCode:`<div>
  <sui-segment>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </sui-segment>
  <sui-segment secondary>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </sui-segment>
  <sui-segment tertiary>
    <p>If you notice me you must be looking very hard.</p>
  </sui-segment>
</div>`,circularCode:`<div>
  <sui-segment circular style="width: 175px; height: 175px;">
    <sui-header as="h2">
      Buy Now
      <sui-header-subheader>
        $10.99
      </sui-header-subheader>
    </sui-header>
  </sui-segment>
  <sui-segment inverted circular style="width: 175px; height: 175px;">
    <sui-header as="h2">
      Buy Now
      <sui-header-subheader>
        $10.99
      </sui-header-subheader>
    </sui-header>
  </sui-segment>
</div>`,clearingCode:`<sui-segment clearing>
  <sui-button floated="right">Floated</sui-button>
</sui-segment>`,floatedCode:`<div>
  <sui-segment floated="right">
    <p>This segment will appear to the right</p>
  </sui-segment>
  <sui-segment floated="left">
    <p>This segment will appear to the left</p>
  </sui-segment>
</div>`,textAlignCode:`<div>
  <sui-segment textAlign="right">
    Right
  </sui-segment>
  <sui-segment textAlign="left">
    Left
  </sui-segment>
  <sui-segment textAlign="center">
    Center
  </sui-segment>
</div>`,basicCode:`<sui-segment basic>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
    sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
</sui-segment>`}}}),Q2={class:"intro"},X2=n("Segment "),Z2=n(" A segment is used to create a grouping of related content "),e0=n("Types"),t0=n("Pellentesque habitant morbi tristique senectus."),i0=n(" No documents are listed for this customer. "),s0=n("Add Document"),n0=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),l0=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),a0=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),o0=n(" Te eum doming eirmod, nominati pertinacia argumentum ad his. "),u0=n(" Pellentesque habitant morbi tristique senectus. "),r0=n(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. "),d0=n("Groups"),c0=y("p",null,"Top",-1),m0=y("p",null,"Middle",-1),_0=y("p",null,"Middle",-1),f0=y("p",null,"Middle",-1),h0=y("p",null,"Bottom",-1),p0=n("Top"),g0=n("Nested Top"),b0=n("Nested Middle"),v0=n("Nested Bottom"),C0=n("Top"),y0=n("Middle"),w0=n("Bottom"),$0=n("Bottom"),A0=n("Left"),S0=n("Middle"),k0=n("Right"),T0=n("Top"),x0=n("Middle"),E0=n("Bottom"),B0=n("Top"),R0=n("Middle"),z0=n("Bottom"),P0=n("Top"),M0=n("Middle"),D0=n("Bottom"),F0=n("States"),I0=n("Disabled content"),N0=n("Now Loading..."),L0=n("Variations"),V0=y("p",null,"I'm here to tell you something, and you will probably read me first.",-1),O0=y("p",null,"This segment is on top",-1),H0=y("p",null,"This segment is attached on both sides",-1),j0=y("p",null,"This segment is on bottom",-1),q0=n("Padded content"),J0=y("p",null,"Fitted Segment",-1),U0=y("p",null,"Horizontally fitted segment",-1),Y0=y("p",null,"Vertically fitted segment",-1),G0=n("Compact content"),W0=n("Red"),K0=n("Orange"),Q0=n("Yellow"),X0=n("Olive"),Z0=n("Green"),e8=n("Teal"),t8=n("Blue"),i8=n("Violet"),s8=n("Purple"),n8=n("Pink"),l8=n("Brown"),a8=n("Grey"),o8=n("Black"),u8=y("p",null,"I'm here to tell you something, and you will probably read me first.",-1),r8=y("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),d8=y("p",null,"If you notice me you must be looking very hard.",-1),c8=n(" Buy Now "),m8=n(" $10.99 "),_8=n(" Buy Now "),f8=n(" $10.99 "),h8=n("Floated"),p8=y("p",null,"This segment will appear to the right",-1),g8=y("p",null,"This segment will appear to the left",-1),b8=n(" Right "),v8=n(" Left "),C8=n(" Center "),y8=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function w8(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("doc-example"),C=b("sui-button"),w=b("sui-segment-group");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",Q2,[e(m,{as:"h1"},{default:i(()=>[X2,e(f,null,{default:i(()=>[Z2]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[e0]),_:1}),e(r,{title:"Segment",description:"A segment of content",code:t.segmentCode},{default:i(()=>[e(v,null,{default:i(()=>[t0]),_:1})]),_:1},8,["code"]),e(r,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:t.placeholderCode},{default:i(()=>[e(v,{placeholder:""},{default:i(()=>[e(m,{icon:""},{default:i(()=>[e(u,{name:"file outline"}),i0]),_:1}),e(C,{color:"primary"},{default:i(()=>[s0]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Raised",description:"A segment may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(v,{raised:""},{default:i(()=>[n0]),_:1})]),_:1},8,["code"]),e(r,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:t.stackedCode},{default:i(()=>[e(v,{stacked:""},{default:i(()=>[l0]),_:1})]),_:1},8,["code"]),e(r,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:t.piledCode},{default:i(()=>[e(v,{piled:""},{default:i(()=>[a0]),_:1})]),_:1},8,["code"]),e(r,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:t.verticalCode},{default:i(()=>[y("div",null,[e(v,{vertical:""},{default:i(()=>[o0]),_:1}),e(v,{vertical:""},{default:i(()=>[u0]),_:1}),e(v,{vertical:""},{default:i(()=>[r0]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[d0]),_:1}),e(r,{title:"Segments",description:"A group of segments can be formatted to appear together",code:t.segmentsCode},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[c0]),_:1}),e(v,null,{default:i(()=>[m0]),_:1}),e(v,null,{default:i(()=>[_0]),_:1}),e(v,null,{default:i(()=>[f0]),_:1}),e(v,null,{default:i(()=>[h0]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:t.nestedCode},{default:i(()=>[e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[p0]),_:1}),e(w,null,{default:i(()=>[e(v,null,{default:i(()=>[g0]),_:1}),e(v,null,{default:i(()=>[b0]),_:1}),e(v,null,{default:i(()=>[v0]),_:1})]),_:1}),e(w,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[C0]),_:1}),e(v,null,{default:i(()=>[y0]),_:1}),e(v,null,{default:i(()=>[w0]),_:1})]),_:1}),e(v,null,{default:i(()=>[$0]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:t.horizontalCode},{default:i(()=>[e(w,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[A0]),_:1}),e(v,null,{default:i(()=>[S0]),_:1}),e(v,null,{default:i(()=>[k0]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Raised Segments",description:"A group of segments can be raised",code:t.raisedSegmentsCode},{default:i(()=>[e(w,{raised:""},{default:i(()=>[e(v,null,{default:i(()=>[T0]),_:1}),e(v,null,{default:i(()=>[x0]),_:1}),e(v,null,{default:i(()=>[E0]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Stacked Segments",description:"A group of segments can be stacked",code:t.stackedSegmentsCode},{default:i(()=>[e(w,{stacked:""},{default:i(()=>[e(v,null,{default:i(()=>[B0]),_:1}),e(v,null,{default:i(()=>[R0]),_:1}),e(v,null,{default:i(()=>[z0]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Piled Segments",description:"A group of segments can be piled",code:t.piledSegmentsCode},{default:i(()=>[e(w,{piled:""},{default:i(()=>[e(v,null,{default:i(()=>[P0]),_:1}),e(v,null,{default:i(()=>[M0]),_:1}),e(v,null,{default:i(()=>[D0]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[F0]),_:1}),e(r,{title:"Disabled",description:"A segment may show its content is disabled",code:t.disabledCode},{default:i(()=>[e(v,{disabled:""},{default:i(()=>[I0]),_:1})]),_:1},8,["code"]),e(r,{title:"Loading",description:"A segment may show its content is being loaded",code:t.loadingCode},{default:i(()=>[e(v,{loading:""},{default:i(()=>[N0]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[L0]),_:1}),e(r,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[V0]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A segment can be attached to other content on a page",code:t.attachedCode},{default:i(()=>[y("div",null,[e(v,{attached:"top"},{default:i(()=>[O0]),_:1}),e(v,{attached:""},{default:i(()=>[H0]),_:1}),e(v,{attached:"bottom"},{default:i(()=>[j0]),_:1})])]),_:1},8,["code"]),e(r,{title:"Padded",description:"A segment can increase its padding",code:t.paddedCode},{default:i(()=>[e(v,{padded:""},{default:i(()=>[q0]),_:1})]),_:1},8,["code"]),e(r,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[y("div",null,[e(v,{fitted:""},{default:i(()=>[J0]),_:1}),e(v,{fitted:"horizontally"},{default:i(()=>[U0]),_:1}),e(v,{fitted:"vertically"},{default:i(()=>[Y0]),_:1})])]),_:1},8,["code"]),e(r,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:t.compactCode},{default:i(()=>[e(v,{compact:""},{default:i(()=>[G0]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A segment can be colored",code:t.coloredCode},{default:i(()=>[y("div",null,[e(v,{color:"red"},{default:i(()=>[W0]),_:1}),e(v,{color:"orange"},{default:i(()=>[K0]),_:1}),e(v,{color:"yellow"},{default:i(()=>[Q0]),_:1}),e(v,{color:"olive"},{default:i(()=>[X0]),_:1}),e(v,{color:"green"},{default:i(()=>[Z0]),_:1}),e(v,{color:"teal"},{default:i(()=>[e8]),_:1}),e(v,{color:"blue"},{default:i(()=>[t8]),_:1}),e(v,{color:"violet"},{default:i(()=>[i8]),_:1}),e(v,{color:"purple"},{default:i(()=>[s8]),_:1}),e(v,{color:"pink"},{default:i(()=>[n8]),_:1}),e(v,{color:"brown"},{default:i(()=>[l8]),_:1}),e(v,{color:"grey"},{default:i(()=>[a8]),_:1}),e(v,{color:"black"},{default:i(()=>[o8]),_:1})])]),_:1},8,["code"]),e(r,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:t.emphasisCode},{default:i(()=>[y("div",null,[e(v,null,{default:i(()=>[u8]),_:1}),e(v,{secondary:""},{default:i(()=>[r8]),_:1}),e(v,{tertiary:""},{default:i(()=>[d8]),_:1})])]),_:1},8,["code"]),e(r,{title:"Circular",description:"A segment can be circular",code:t.circularCode},{default:i(()=>[y("div",null,[e(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[c8,e(f,null,{default:i(()=>[m8]),_:1})]),_:1})]),_:1}),e(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[_8,e(f,null,{default:i(()=>[f8]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Clearing",description:"A segment can clear floated content",code:t.clearingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(C,{floated:"right"},{default:i(()=>[h8]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Floated",description:"A segment can appear to the left or right of other content",code:t.floatedCode},{default:i(()=>[y("div",null,[e(v,{floated:"right"},{default:i(()=>[p8]),_:1}),e(v,{floated:"left"},{default:i(()=>[g8]),_:1})])]),_:1},8,["code"]),e(r,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[y("div",null,[e(v,{textAlign:"right"},{default:i(()=>[b8]),_:1}),e(v,{textAlign:"left"},{default:i(()=>[v8]),_:1}),e(v,{textAlign:"center"},{default:i(()=>[C8]),_:1})])]),_:1},8,["code"]),e(r,{title:"Basic",description:"A basic segment has no special formatting",code:t.basicCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[y8]),_:1})]),_:1},8,["code"])]),_:1})])}var $8=_e(K2,[["render",w8]]);const A8=E({name:"StepDoc",components:{DocExample:ve},setup(){return{stepCode:`<sui-step-group>
  <sui-step>Shipping</sui-step>
</sui-step-group>`,stepsCode:`<sui-step-group>
  <sui-step>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,orderedCode:`<sui-step-group ordered>
  <sui-step completed>
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step completed>
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,verticalCode:`<sui-step-group vertical>
  <sui-step completed>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step completed>
    <sui-icon name="credit card" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,descriptionCode:`<sui-step-group>
  <sui-step>
    <sui-step-title>Shipping</sui-step-title>
    <sui-step-description>
      Choose your shipping options
    </sui-step-description>
  </sui-step>
</sui-step-group>`,iconCode:`<sui-step-group>
  <sui-step>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,linkCode:`<sui-step-group>
  <sui-step link>
    <sui-icon name="truck" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step>
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,activeCode:`<sui-step-group>
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,completedCode:`<sui-step-group>
  <sui-step completed>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,disabledCode:`<sui-step-group>
  <sui-step disabled>Billing</sui-step>
</sui-step-group>`,stackableCode:`<sui-step-group stackable="tablet">
  <sui-step>
    <sui-icon name="plane" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="dollar" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info circle" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,unstackableCode:`<sui-step-group unstackable>
  <sui-step>
    <sui-icon name="plane" />
    <sui-step-content>
      <sui-step-title>Shipping</sui-step-title>
      <sui-step-description>
        Choose your shipping options
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step active>
    <sui-icon name="dollar" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
      <sui-step-description>
        Enter billing information
      </sui-step-description>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info circle" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
      <sui-step-description>
        Verify order details
      </sui-step-description>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,fluidCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-step-group fluid vertical>
      <sui-step completed>
        <sui-icon name="truck" />
        <sui-step-content>
          <sui-step-title>Shipping</sui-step-title>
          <sui-step-description>
            Choose your shipping options
          </sui-step-description>
        </sui-step-content>
      </sui-step>
      <sui-step active>
        <sui-icon name="dollar" />
        <sui-step-content>
          <sui-step-title>Billing</sui-step-title>
          <sui-step-description>
            Enter billing information
          </sui-step-description>
        </sui-step-content>
      </sui-step>
    </sui-step-group>
  </sui-grid-column>

  <sui-grid-column>
    <p>The steps take up the entire column width</p>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<div>
  <sui-step-group attached="top">
    <sui-step>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>

    <sui-step active>
      <sui-icon name="payment" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>

  <sui-segment attached>
    <p>Main content</p>
  </sui-segment>

  <sui-step-group attached="bottom">
    <sui-step>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>

    <sui-step active>
      <sui-icon name="payment" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>
</div>`,evenlyDividedCode:`<sui-step-group :widths="2">
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,sizeCode:`<sui-step-group size="mini">
  <sui-step active>
    <sui-icon name="payment" />
    <sui-step-content>
      <sui-step-title>Billing</sui-step-title>
    </sui-step-content>
  </sui-step>
  <sui-step disabled>
    <sui-icon name="info" />
    <sui-step-content>
      <sui-step-title>Confirm Order</sui-step-title>
    </sui-step-content>
  </sui-step>
</sui-step-group>`,invertedCode:`<sui-segment inverted>
  <sui-step-group inverted vertical>
    <sui-step completed>
      <sui-icon name="truck" />
      <sui-step-content>
        <sui-step-title>Shipping</sui-step-title>
        <sui-step-description>
          Choose your shipping options
        </sui-step-description>
      </sui-step-content>
    </sui-step>
    <sui-step completed>
      <sui-icon name="credit card" />
      <sui-step-content>
        <sui-step-title>Billing</sui-step-title>
        <sui-step-description>
          Enter billing information
        </sui-step-description>
      </sui-step-content>
    </sui-step>
    <sui-step active>
      <sui-icon name="info" />
      <sui-step-content>
        <sui-step-title>Confirm Order</sui-step-title>
        <sui-step-description>
          Verify order details
        </sui-step-description>
      </sui-step-content>
    </sui-step>
  </sui-step-group>
</sui-segment>`}}}),S8={class:"intro"},k8=n("Step "),T8=n(" A step shows the completion status of an activity in a series of activities "),x8=n("Types"),E8=n("Shipping"),B8=n("Groups"),R8=n("Shipping"),z8=n(" Choose your shipping options "),P8=n("Billing"),M8=n(" Enter billing information "),D8=n("Confirm Order"),F8=n("Shipping"),I8=n(" Choose your shipping options "),N8=n("Billing"),L8=n(" Enter billing information "),V8=n("Confirm Order"),O8=n(" Verify order details "),H8=n("Shipping"),j8=n(" Choose your shipping options "),q8=n("Billing"),J8=n(" Enter billing information "),U8=n("Confirm Order"),Y8=n(" Verify order details "),G8=n("Content"),W8=n("Shipping"),K8=n(" Choose your shipping options "),Q8=n("Shipping"),X8=n(" Choose your shipping options "),Z8=n("Shipping"),eT=n(" Choose your shipping options "),tT=n("Billing"),iT=n(" Enter billing information "),sT=n("States"),nT=n("Billing"),lT=n(" Enter billing information "),aT=n("Billing"),oT=n(" Enter billing information "),uT=n("Billing"),rT=n("Variations"),dT=n("Shipping"),cT=n(" Choose your shipping options "),mT=n("Billing"),_T=n(" Enter billing information "),fT=n("Confirm Order"),hT=n(" Verify order details "),pT=n("Shipping"),gT=n(" Choose your shipping options "),bT=n("Billing"),vT=n(" Enter billing information "),CT=n("Confirm Order"),yT=n(" Verify order details "),wT=n("Shipping"),$T=n(" Choose your shipping options "),AT=n("Billing"),ST=n(" Enter billing information "),kT=y("p",null,"The steps take up the entire column width",-1),TT=n("Shipping"),xT=n(" Choose your shipping options "),ET=n("Billing"),BT=n(" Enter billing information "),RT=y("p",null,"Main content",-1),zT=n("Shipping"),PT=n(" Choose your shipping options "),MT=n("Billing"),DT=n(" Enter billing information "),FT=n("Billing"),IT=n("Confirm Order"),NT=n("Billing"),LT=n("Confirm Order"),VT=n("Shipping"),OT=n(" Choose your shipping options "),HT=n("Billing"),jT=n(" Enter billing information "),qT=n("Confirm Order"),JT=n(" Verify order details ");function UT(t,s,l,o,d,_){const f=b("sui-header-subheader"),m=b("sui-header"),a=b("sui-divider"),u=b("sui-icon"),h=b("sui-menu-item"),c=b("sui-menu"),g=b("sui-container"),v=b("sui-segment"),r=b("sui-step"),C=b("sui-step-group"),w=b("doc-example"),A=b("sui-step-title"),p=b("sui-step-description"),$=b("sui-step-content"),k=b("sui-grid-column"),x=b("sui-grid");return X(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(g,{class:"main"},{default:i(()=>[y("div",S8,[e(m,{as:"h1"},{default:i(()=>[k8,e(f,null,{default:i(()=>[T8]),_:1})]),_:1}),e(a,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(h,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[x8]),_:1}),e(w,{title:"Step",description:"A single step",code:t.stepCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[E8]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[B8]),_:1}),e(w,{title:"Steps",description:"A set of steps",code:t.stepsCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[R8]),_:1}),e(p,null,{default:i(()=>[z8]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[P8]),_:1}),e(p,null,{default:i(()=>[M8]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[D8]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:t.orderedCode},{default:i(()=>[e(C,{ordered:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[F8]),_:1}),e(p,null,{default:i(()=>[I8]),_:1})]),_:1})]),_:1}),e(r,{completed:""},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[N8]),_:1}),e(p,null,{default:i(()=>[L8]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[V8]),_:1}),e(p,null,{default:i(()=>[O8]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Vertical",description:"A step can be displayed stacked vertically",code:t.verticalCode},{default:i(()=>[e(C,{vertical:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[H8]),_:1}),e(p,null,{default:i(()=>[j8]),_:1})]),_:1})]),_:1}),e(r,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[q8]),_:1}),e(p,null,{default:i(()=>[J8]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"info"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[U8]),_:1}),e(p,null,{default:i(()=>[Y8]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[G8]),_:1}),e(w,{title:"Description",description:"A step can contain a description",code:t.descriptionCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(A,null,{default:i(()=>[W8]),_:1}),e(p,null,{default:i(()=>[K8]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Icon",description:"A step can contain an icon",code:t.iconCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[Q8]),_:1}),e(p,null,{default:i(()=>[X8]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Link",description:"A step can link",code:t.linkCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,{link:""},{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[Z8]),_:1}),e(p,null,{default:i(()=>[eT]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[tT]),_:1}),e(p,null,{default:i(()=>[iT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[sT]),_:1}),e(w,{title:"Active",description:"A step can be highlighted as active",code:t.activeCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[nT]),_:1}),e(p,null,{default:i(()=>[lT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Completed",description:"A step can show that a user has completed it",code:t.completedCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[aT]),_:1}),e(p,null,{default:i(()=>[oT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Disabled",description:"A step can show that it cannot be selected",code:t.disabledCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,{disabled:""},{default:i(()=>[uT]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[rT]),_:1}),e(w,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:t.stackableCode},{default:i(()=>[e(C,{stackable:"tablet"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"plane"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[dT]),_:1}),e(p,null,{default:i(()=>[cT]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[mT]),_:1}),e(p,null,{default:i(()=>[_T]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[fT]),_:1}),e(p,null,{default:i(()=>[hT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:t.unstackableCode},{default:i(()=>[e(C,{unstackable:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"plane"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[pT]),_:1}),e(p,null,{default:i(()=>[gT]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[bT]),_:1}),e(p,null,{default:i(()=>[vT]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[CT]),_:1}),e(p,null,{default:i(()=>[yT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Fluid",description:"A fluid step takes up the width of its container",code:t.fluidCode},{default:i(()=>[e(x,{columns:2},{default:i(()=>[e(k,null,{default:i(()=>[e(C,{fluid:"",vertical:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[wT]),_:1}),e(p,null,{default:i(()=>[$T]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[AT]),_:1}),e(p,null,{default:i(()=>[ST]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:i(()=>[kT]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Attached",description:"Steps can be attached to other elements",code:t.attachedCode},{default:i(()=>[y("div",null,[e(C,{attached:"top"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[TT]),_:1}),e(p,null,{default:i(()=>[xT]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[ET]),_:1}),e(p,null,{default:i(()=>[BT]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[RT]),_:1}),e(C,{attached:"bottom"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[zT]),_:1}),e(p,null,{default:i(()=>[PT]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[MT]),_:1}),e(p,null,{default:i(()=>[DT]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(w,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:t.evenlyDividedCode},{default:i(()=>[e(C,{widths:2},{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[FT]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[IT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Size",description:"Steps can have different sizes",code:t.sizeCode},{default:i(()=>[e(C,{size:"mini"},{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[NT]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[LT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Inverted",description:"A step's color can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(C,{inverted:"",vertical:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[VT]),_:1}),e(p,null,{default:i(()=>[OT]),_:1})]),_:1})]),_:1}),e(r,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[HT]),_:1}),e(p,null,{default:i(()=>[jT]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"info"}),e($,null,{default:i(()=>[e(A,null,{default:i(()=>[qT]),_:1}),e(p,null,{default:i(()=>[JT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var YT=_e(A8,[["render",UT]]);const GT=E({name:"BreadcrumbDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{breadcrumbCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
</sui-breadcrumb>`,breadcrumbCode2:`<sui-breadcrumb
  :sections="[
    { content: 'Home', link: true },
    { content: 'Store', link: true },
    { content: 'T-Shirt', active: true }
  ]"
  icon="right angle"
/>`,dividerCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right arrow" />
  <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
</sui-breadcrumb>`,sectionCode:`<sui-breadcrumb>
  <sui-breadcrumb-section>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
</sui-breadcrumb>`,linkCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
</sui-breadcrumb>`,activeCode:`<sui-breadcrumb>
  <sui-breadcrumb-section link>Product</sui-breadcrumb-section>
  <sui-breadcrumb-divider> / </sui-breadcrumb-divider>
  <sui-breadcrumb-section active>Paper Towels</sui-breadcrumb-section>
</sui-breadcrumb>`,invertedCode:`<sui-segment inverted>
  <sui-breadcrumb inverted>
    <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
    <sui-breadcrumb-divider icon="right chevron" />
    <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
    <sui-breadcrumb-divider icon="right chevron" />
    <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
  </sui-breadcrumb>
</sui-segment>`,sizeCode:`<sui-breadcrumb size="mini">
  <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
  <sui-breadcrumb-divider icon="right chevron" />
  <sui-breadcrumb-section>Personal Information</sui-breadcrumb-section>
</sui-breadcrumb>`}}}),WT=n("Types"),KT=n("Home"),QT=n(" / "),XT=n("Store"),ZT=n(" / "),e3=n("T-Shirt"),t3=n("Content"),i3=n("Home"),s3=n("Registration"),n3=n("Personal Information"),l3=n("Home"),a3=n(" / "),o3=n("Search"),u3=n("Home"),r3=n(" / "),d3=n("Search"),c3=n("States"),m3=n("Product"),_3=n(" / "),f3=n("Paper Towels"),h3=n("Variations"),p3=n("Home"),g3=n("Registration"),b3=n("Personal Information"),v3=n("Home"),C3=n("Registration"),y3=n("Personal Information");function w3(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-breadcrumb-section"),u=b("sui-breadcrumb-divider"),h=b("sui-breadcrumb"),c=b("doc-example"),g=b("sui-segment"),v=b("sui-container");return X(),oe("div",null,[e(f,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(v,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[WT]),_:1}),e(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:t.breadcrumbCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{link:""},{default:i(()=>[KT]),_:1}),e(u,null,{default:i(()=>[QT]),_:1}),e(a,{link:""},{default:i(()=>[XT]),_:1}),e(u,null,{default:i(()=>[ZT]),_:1}),e(a,{active:""},{default:i(()=>[e3]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{description:"You can do the same using shorthands",code:t.breadcrumbCode2},{default:i(()=>[e(h,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[t3]),_:1}),e(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:t.dividerCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{link:""},{default:i(()=>[i3]),_:1}),e(u,{icon:"right chevron"}),e(a,{link:""},{default:i(()=>[s3]),_:1}),e(u,{icon:"right arrow"}),e(a,{active:""},{default:i(()=>[n3]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:t.sectionCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,null,{default:i(()=>[l3]),_:1}),e(u,null,{default:i(()=>[a3]),_:1}),e(a,{active:""},{default:i(()=>[o3]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Link",description:"A section may be linkable or contain a link",code:t.linkCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{link:""},{default:i(()=>[u3]),_:1}),e(u,null,{default:i(()=>[r3]),_:1}),e(a,{active:""},{default:i(()=>[d3]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[c3]),_:1}),e(c,{title:"Active",description:"A section can be active",code:t.activeCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{link:""},{default:i(()=>[m3]),_:1}),e(u,null,{default:i(()=>[_3]),_:1}),e(a,{active:""},{default:i(()=>[f3]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[h3]),_:1}),e(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(a,{link:""},{default:i(()=>[p3]),_:1}),e(u,{icon:"right chevron"}),e(a,{link:""},{default:i(()=>[g3]),_:1}),e(u,{icon:"right chevron"}),e(a,{active:""},{default:i(()=>[b3]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Size",description:"A breadcrumb can vary in size",code:t.sizeCode},{default:i(()=>[e(h,{size:"mini"},{default:i(()=>[e(a,{link:""},{default:i(()=>[v3]),_:1}),e(u,{icon:"right chevron"}),e(a,{link:""},{default:i(()=>[C3]),_:1}),e(u,{icon:"right chevron"}),e(a,null,{default:i(()=>[y3]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var $3=_e(GT,[["render",w3]]);const A3=E({name:"FormDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{formCode:`<sui-form>
  <sui-form-field
    label="First Name"
    placeholder="First Name"
  />
  <sui-form-field
    label="Last Name"
    placeholder="Last Name"
  />
  <sui-form-field>
    <sui-checkbox label="I agree to the Terms and Conditions" />
  </sui-form-field>
  <sui-button>Submit</sui-button>
</sui-form>`,fieldCode:`<sui-form>
  <sui-form-field
    label="Enter Password"
    type="password"
  />
</sui-form>`,fieldsCode:`<sui-form>
  <sui-form-group>
    <sui-form-field
      label="First name"
      placeholder="First Name"
    />
    <sui-form-field
      label="Middle name"
      placeholder="Middle Name"
    />
    <sui-form-field
      label="Last name"
      placeholder="Last Name"
    />
  </sui-form-group>
</sui-form>`}}}),S3=n("Types"),k3=n("Submit"),T3=n("Content");function x3(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-form-field"),u=b("sui-checkbox"),h=b("sui-button"),c=b("sui-form"),g=b("doc-example"),v=b("sui-form-group"),r=b("sui-container");return X(),oe("div",null,[e(f,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(r,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[S3]),_:1}),e(g,{title:"Form",description:"A form",code:t.formCode},{default:i(()=>[e(c,null,{default:i(()=>[e(a,{label:"First Name",placeholder:"First Name"}),e(a,{label:"Last Name",placeholder:"Last Name"}),e(a,null,{default:i(()=>[e(u,{label:"I agree to the Terms and Conditions"})]),_:1}),e(h,null,{default:i(()=>[k3]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[T3]),_:1}),e(g,{title:"Field",description:"A field is a form element containing a label and an input",code:t.fieldCode},{default:i(()=>[e(c,null,{default:i(()=>[e(a,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fields",description:"A set of fields can appear grouped together",code:t.fieldsCode},{default:i(()=>[e(c,null,{default:i(()=>[e(v,null,{default:i(()=>[e(a,{label:"First name",placeholder:"First Name"}),e(a,{label:"Middle name",placeholder:"Middle Name"}),e(a,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var E3=_e(A3,[["render",x3]]),kt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ho="/vue-fomantic-ui/images/wireframe/centered-paragraph.png";const B3=E({name:"GridDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
  <sui-grid-column
    v-for="n in numbers"
    :key="n"
  >
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`,dividedCode:`<sui-grid :columns="3" divided>
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/media-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,verticalDividedCode:`<sui-grid divided="vertically">
  <sui-grid-row :columns="2">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row :columns="3">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,celledCode:`<sui-grid celled>
  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="13">
      <sui-image src="/images/wireframe/centered-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="10">
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,internallyCelledCode:`<sui-grid celled="internally">
  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="13">
      <sui-image src="/images/wireframe/centered-paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column :width="10">
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column :width="3">
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,rowsCode:`<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,columnsCode:`<sui-grid>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`,floatedCode:`<sui-grid>
  <sui-grid-column floated="left" :width="5">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column floated="right" :width="5">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`,columnWidthCode:`<sui-grid>
  <sui-grid-column :width="4">
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column :width="9">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :width="3">
    <sui-image src="/images/wireframe/media-paragraph.png" />
  </sui-grid-column>
</sui-grid>`,columnCountCode:`<sui-grid>
  <sui-grid-row :columns="3">
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row :columns="4">
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,equalWidthCode:`<sui-grid columns="equal">
  <sui-grid-column>
    <sui-segment>1</sui-segment>
  </sui-grid-column>
  <sui-grid-column :width="8">
    <sui-segment>2</sui-segment>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment>3</sui-segment>
  </sui-grid-column>
</sui-grid>`,stretchedCode:`<sui-grid :columns="3" divided>
  <sui-grid-row stretched>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
      <sui-segment>2</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>1</sui-segment>
      <sui-segment>2</sui-segment>
      <sui-segment>3</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,paddedCode:`<div>
  <sui-divider />
  <sui-grid padded :columns="2">
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</div>`,relaxedCode:`<sui-grid relaxed :columns="4">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`,coloredCode:`<sui-grid padded :columns="5">
  <sui-grid-column color="red">Red</sui-grid-column>
  <sui-grid-column color="orange">Orange</sui-grid-column>
  <sui-grid-column color="yellow">Yellow</sui-grid-column>
  <sui-grid-column color="olive">Olive</sui-grid-column>
  <sui-grid-column color="green">Green</sui-grid-column>
  <sui-grid-column color="teal">Teal</sui-grid-column>
  <sui-grid-column color="blue">Blue</sui-grid-column>
  <sui-grid-column color="violet">Violet</sui-grid-column>
  <sui-grid-column color="purple">Purple</sui-grid-column>
  <sui-grid-column color="pink">Pink</sui-grid-column>
  <sui-grid-column color="brown">Brown</sui-grid-column>
  <sui-grid-column color="grey">Grey</sui-grid-column>
  <sui-grid-column color="black">Black</sui-grid-column>
</sui-grid>`,centeredCode:`<sui-grid centered :columns="2">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-row centered :columns="4">
    <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,textAlignCode:`<sui-grid textAlign="center" :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Cats</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Dogs</sui-menu-item>
        <sui-menu-item>Poodle</sui-menu-item>
        <sui-menu-item>Cockerspaniel</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column>
      <sui-menu vertical fluid>
        <sui-menu-item header>Monkeys</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,verticalAlignCode:`<sui-grid verticalAlign="middle" :columns="4" centered>
  <sui-grid-row>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
      <br />
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image src="/images/wireframe/image.png" />
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,doublingCode:`<sui-grid doubling :columns="5">
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image src="/images/wireframe/image.png" />
  </sui-grid-column>
</sui-grid>`,stackableCode:`<sui-grid stackable :columns="2">
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,reversedCode:`<sui-grid reversed="computer vertically">
  <sui-grid-row>
    <sui-grid-column>Computer Row 3</sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>Computer Row 2</sui-grid-column>
  </sui-grid-row>
  <sui-grid-row>
    <sui-grid-column>Computer Row 1</sui-grid-column>
  </sui-grid-row>
</sui-grid>`,deviceVisibilityCode:`<sui-grid>
  <sui-grid-row only="large screen" :columns="2">
    <sui-grid-column>
      <sui-segment>Large Screen</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Large Screen</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="widescreen" :columns="2">
    <sui-grid-column>
      <sui-segment>Widescreen</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Widescreen</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="mobile" :columns="2">
    <sui-grid-column>
      <sui-segment>Mobile</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Mobile</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row :columns="3">
    <sui-grid-column only="computer">
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column only="mobile">
      <sui-segment>Tablet and Mobile</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>All Sizes</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>All Sizes</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="computer" :columns="4">
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Computer</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
  <sui-grid-row only="tablet" :columns="3">
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment>Tablet</sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,responsiveWidthCode:`<sui-grid>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
  <sui-grid-column :mobile="16" :tablet="8" :computer="4">
    <sui-image src="/images/wireframe/paragraph.png" />
  </sui-grid-column>
</sui-grid>`}}}),R3=n("Types"),z3=n("Content"),P3=n("Variations"),M3=n("1"),D3=n("2"),F3=n("3"),I3=n("1"),N3=n("1"),L3=n("2"),V3=n("1"),O3=n("2"),H3=n("3"),j3=n("Red"),q3=n("Orange"),J3=n("Yellow"),U3=n("Olive"),Y3=n("Green"),G3=n("Teal"),W3=n("Blue"),K3=n("Violet"),Q3=n("Purple"),X3=n("Pink"),Z3=n("Brown"),ex=n("Grey"),tx=n("Black"),ix=n("Cats"),sx=n("Dogs"),nx=n("Poodle"),lx=n("Cockerspaniel"),ax=n("Monkeys"),ox=y("br",null,null,-1),ux=n("Responsive Variations"),rx=n("Computer Row 3"),dx=n("Computer Row 2"),cx=n("Computer Row 1"),mx=n("Large Screen"),_x=n("Large Screen"),fx=n("Widescreen"),hx=n("Widescreen"),px=n("Mobile"),gx=n("Mobile"),bx=n("Computer"),vx=n("Tablet and Mobile"),Cx=n("All Sizes"),yx=n("All Sizes"),wx=n("Computer"),$x=n("Computer"),Ax=n("Computer"),Sx=n("Computer"),kx=n("Tablet"),Tx=n("Tablet"),xx=n("Tablet");function Ex(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-image"),u=b("sui-grid-column"),h=b("sui-grid"),c=b("doc-example"),g=b("sui-grid-row"),v=b("sui-segment"),r=b("sui-divider"),C=b("sui-menu-item"),w=b("sui-menu"),A=b("sui-container");return X(),oe("div",null,[e(f,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e(A,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[R3]),_:1}),e(c,{title:"Grid",description:"A basic grid",code:t.gridCode},{default:i(()=>[e(h,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.numbers,p=>(X(),Ue(u,{key:p},{default:i(()=>[e(a,{src:J})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(c,{title:"Divided",description:"A grid can have dividers between its columns",code:t.dividedCode},{default:i(()=>[e(h,{columns:3,divided:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:kt})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:kt})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:kt})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:kt})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:kt})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:kt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:t.verticalDividedCode},{default:i(()=>[e(h,{divided:"vertically"},{default:i(()=>[e(g,{columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1}),e(g,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Celled",description:"A grid can have rows divided into cells",code:t.celledCode},{default:i(()=>[e(h,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(a,{src:J})]),_:1}),e(u,{width:13},{default:i(()=>[e(a,{src:ho})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(a,{src:J})]),_:1}),e(u,{width:10},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{width:3},{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:t.internallyCelledCode},{default:i(()=>[e(h,{celled:"internally"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(a,{src:J})]),_:1}),e(u,{width:13},{default:i(()=>[e(a,{src:ho})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(a,{src:J})]),_:1}),e(u,{width:10},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{width:3},{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[z3]),_:1}),e(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:t.rowsCode},{default:i(()=>[e(h,{columns:3},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:t.columnsCode},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:8},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{width:8},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{width:8},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{width:8},{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[P3]),_:1}),e(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:t.floatedCode},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{floated:"left",width:5},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{floated:"right",width:5},{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:t.columnWidthCode},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:4},{default:i(()=>[e(a,{src:J})]),_:1}),e(u,{width:9},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{width:3},{default:i(()=>[e(a,{src:kt})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:t.columnCountCode},{default:i(()=>[e(h,null,{default:i(()=>[e(g,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1}),e(g,{columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Equal Width",description:"Equal Width",code:t.equalWidthCode},{default:i(()=>[e(h,{columns:"equal"},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[M3]),_:1})]),_:1}),e(u,{width:8},{default:i(()=>[e(v,null,{default:i(()=>[D3]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[F3]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:t.stretchedCode},{default:i(()=>[e(h,{columns:3,divided:""},{default:i(()=>[e(g,{stretched:""},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[I3]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[N3]),_:1}),e(v,null,{default:i(()=>[L3]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[V3]),_:1}),e(v,null,{default:i(()=>[O3]),_:1}),e(v,null,{default:i(()=>[H3]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:t.paddedCode},{default:i(()=>[y("div",null,[e(r),e(h,{padded:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})])]),_:1},8,["code"]),e(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:t.relaxedCode},{default:i(()=>[e(h,{relaxed:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Colored",description:"A row or column can be colored",code:t.coloredCode},{default:i(()=>[e(h,{padded:"",columns:5},{default:i(()=>[e(u,{color:"red"},{default:i(()=>[j3]),_:1}),e(u,{color:"orange"},{default:i(()=>[q3]),_:1}),e(u,{color:"yellow"},{default:i(()=>[J3]),_:1}),e(u,{color:"olive"},{default:i(()=>[U3]),_:1}),e(u,{color:"green"},{default:i(()=>[Y3]),_:1}),e(u,{color:"teal"},{default:i(()=>[G3]),_:1}),e(u,{color:"blue"},{default:i(()=>[W3]),_:1}),e(u,{color:"violet"},{default:i(()=>[K3]),_:1}),e(u,{color:"purple"},{default:i(()=>[Q3]),_:1}),e(u,{color:"pink"},{default:i(()=>[X3]),_:1}),e(u,{color:"brown"},{default:i(()=>[Z3]),_:1}),e(u,{color:"grey"},{default:i(()=>[ex]),_:1}),e(u,{color:"black"},{default:i(()=>[tx]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Centered",description:"A grid can have its columns centered",code:t.centeredCode},{default:i(()=>[e(h,{centered:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(g,{centered:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:t.textAlignCode},{default:i(()=>[e(h,{textAlign:"center",columns:3},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(w,{vertical:"",fluid:""},{default:i(()=>[e(C,{header:""},{default:i(()=>[ix]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(w,{vertical:"",fluid:""},{default:i(()=>[e(C,{header:""},{default:i(()=>[sx]),_:1}),e(C,null,{default:i(()=>[nx]),_:1}),e(C,null,{default:i(()=>[lx]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(w,{vertical:"",fluid:""},{default:i(()=>[e(C,{header:""},{default:i(()=>[ax]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:t.verticalAlignCode},{default:i(()=>[e(h,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J}),ox,e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[ux]),_:1}),e(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:t.doublingCode},{default:i(()=>[e(h,{doubling:"",columns:5},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(u,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:t.stackableCode},{default:i(()=>[e(h,{stackable:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:t.reversedCode},{default:i(()=>[e(h,{reversed:"computer vertically"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[rx]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[dx]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[cx]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:t.deviceVisibilityCode},{default:i(()=>[e(h,null,{default:i(()=>[e(g,{only:"large screen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[mx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[_x]),_:1})]),_:1})]),_:1}),e(g,{only:"widescreen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[fx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[hx]),_:1})]),_:1})]),_:1}),e(g,{only:"mobile",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[px]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[gx]),_:1})]),_:1})]),_:1}),e(g,{columns:3},{default:i(()=>[e(u,{only:"computer"},{default:i(()=>[e(v,null,{default:i(()=>[bx]),_:1})]),_:1}),e(u,{only:"mobile"},{default:i(()=>[e(v,null,{default:i(()=>[vx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[Cx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[yx]),_:1})]),_:1})]),_:1}),e(g,{only:"computer",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[wx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[$x]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[Ax]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[Sx]),_:1})]),_:1})]),_:1}),e(g,{only:"tablet",columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[kx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[Tx]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[xx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:t.responsiveWidthCode},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(a,{src:fe})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var Bx=_e(B3,[["render",Ex]]),Rx="/vue-fomantic-ui/images/logo.png";const zx=E({name:"MenuDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{menuCode:`<sui-menu>
  <sui-menu-item>Editorials</sui-menu-item>
  <sui-menu-item>Reviews</sui-menu-item>
  <sui-menu-item>Upcoming Events</sui-menu-item>
</sui-menu>`,secondaryMenuCode:`<sui-menu secondary>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>
      <sui-input icon="search" placeholder="Search..." />
    </sui-menu-item>
    <sui-menu-item>logout</sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,pointingCode:`<sui-menu pointing>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>
      <sui-input transparent icon="search" placeholder="Search..." />
    </sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,tabularCode:`<sui-menu tabular>
  <sui-menu-item active>Bio</sui-menu-item>
  <sui-menu-item>Photos</sui-menu-item>
</sui-menu>`,textCode:`<sui-menu text>
  <sui-menu-item header>Sort By</sui-menu-item>
  <sui-menu-item active>Closest</sui-menu-item>
  <sui-menu-item>Most Comments</sui-menu-item>
  <sui-menu-item>Most Popular</sui-menu-item>
</sui-menu>`,verticalMenuCode:`<sui-menu vertical>
  <sui-menu-item active color="teal">
    Inbox
    <sui-label color="teal" pointing="left">1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    Spam
    <sui-label>51</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    Updates
    <sui-label>1</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-input transparent icon="search" placeholder="Search mail..." />
  </sui-menu-item>
</sui-menu>`,paginationCode:`<sui-menu pagination>
  <sui-menu-item active>1</sui-menu-item>
  <sui-menu-item disabled>...</sui-menu-item>
  <sui-menu-item>10</sui-menu-item>
  <sui-menu-item>11</sui-menu-item>
  <sui-menu-item>12</sui-menu-item>
</sui-menu>`,headerCode:`<sui-menu>
  <sui-menu-item header>Our Company</sui-menu-item>
  <sui-menu-item>About us</sui-menu-item>
  <sui-menu-item>Jobs</sui-menu-item>
  <sui-menu-item>Locations</sui-menu-item>
</sui-menu>`,textContentCode:`<sui-menu vertical>
  <sui-menu-item>
    <sui-header as="h4">Promotions</sui-header>
    <p>Check out our new promotions</p>
  </sui-menu-item>
  <sui-menu-item>
    <sui-header as="h4">Coupons</sui-header>
    <p>Check out our collection of coupons</p>
  </sui-menu-item>
  <sui-menu-item>
    <sui-header as="h4">Rebates</sui-header>
    <p>Visit our rebate forum for information on claiming rebates</p>
  </sui-menu-item>
</sui-menu>`,inputCode:`<sui-menu>
  <sui-menu-item as="div">
    <sui-input icon="search" placeholder="Search..." />
  </sui-menu-item>
  <sui-menu-item position="right" as="div">
    <sui-input placeholder="Navigate to ..." />
  </sui-menu-item>
</sui-menu>`,buttonCode:`<sui-menu>
  <sui-menu-item as="div">
    <sui-button color="primary">Sign up</sui-button>
  </sui-menu-item>
  <sui-menu-item as="div">
    <sui-button>Log in</sui-button>
  </sui-menu-item>
</sui-menu>`,linkItemCode:`<sui-menu vertical>
  <sui-menu-item href="https://google.com">Visit Google</sui-menu-item>
  <sui-menu-item link as="div">Javascript Link</sui-menu-item>
</sui-menu>`,dropdownItemCode:`<sui-menu vertical>
  <sui-dropdown item text="Categories">
    <sui-dropdown-menu>
      <sui-dropdown-item text="Electoronics" />
      <sui-dropdown-item text="Automotive" />
      <sui-dropdown-item text="Home" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-menu>`,menuContentCode:`<sui-menu>
  <sui-menu-item>Browse</sui-menu-item>
  <sui-menu-item>Submit</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-menu-item>Sign up</sui-menu-item>
    <sui-menu-item>Help</sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,subMenuCode:`<sui-menu vertical>
  <sui-menu-item as="div">
    <sui-input placeholder="Search..." />
  </sui-menu-item>
  <sui-menu-item as="div">
    Home
    <sui-menu-menu>
      <sui-menu-item>Search</sui-menu-item>
      <sui-menu-item>Add</sui-menu-item>
      <sui-menu-item>Remove</sui-menu-item>
    </sui-menu-menu>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="grid layout" />
    Browse
  </sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-dropdown item text="More">
    <sui-dropdown-menu>
      <sui-dropdown-item icon="edit" text="Edit Profile" />
      <sui-dropdown-item icon="globe" text="Choose Language" />
      <sui-dropdown-item icon="settings" text="Account Settings" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-menu>`,hoverCode:`<sui-menu compact>
  <sui-menu-item>A link</sui-menu-item>
  <sui-menu-item as="div" link>div Link</sui-menu-item>
</sui-menu>`,activeCode:`<sui-menu compact>
  <sui-menu-item active>Link</sui-menu-item>
</sui-menu>`,stackableCode:`<sui-menu stackable>
  <sui-menu-item as="div">
    <img src="/images/logo.png">
  </sui-menu-item>
  <sui-menu-item>Features</sui-menu-item>
  <sui-menu-item>Testimonials</sui-menu-item>
  <sui-menu-item>Sign in</sui-menu-item>
</sui-menu>`,invertedCode:`<sui-menu inverted>
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-item>Friends</sui-menu-item>
</sui-menu>`,coloredCode:`<sui-menu>
  <sui-menu-item active color="red">Red</sui-menu-item>
  <sui-menu-item color="orange">Orange</sui-menu-item>
  <sui-menu-item color="yellow">Yellow</sui-menu-item>
  <sui-menu-item color="olive">Olive</sui-menu-item>
  <sui-menu-item color="green">Green</sui-menu-item>
  <sui-menu-item color="teal">Teal</sui-menu-item>
</sui-menu>`,iconsCode:`<sui-menu icon>
  <sui-menu-item>
    <sui-icon name="gamepad" />
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
  </sui-menu-item>
</sui-menu>`,labeledIconCode:`<sui-menu icon="labeled">
  <sui-menu-item>
    <sui-icon name="gamepad" />
    Games
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
    Channels
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
    Videos
  </sui-menu-item>
</sui-menu>`,fluidCode:`<sui-menu fluid vertical>
  <sui-menu-item>Run</sui-menu-item>
  <sui-menu-item>Walk</sui-menu-item>
  <sui-menu-item>Bike</sui-menu-item>
</sui-menu>`,compactCode:`<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="gamepad" />
    Games
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video camera" />
    Channels
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="video play" />
    Videos
  </sui-menu-item>
</sui-menu>`,evenlyDividedCode:`<sui-menu fluid :widths="3">
  <sui-menu-item>Buy</sui-menu-item>
  <sui-menu-item>Sell</sui-menu-item>
  <sui-menu-item>Rent</sui-menu-item>
</sui-menu>`,attachedCode:`<div>
  <sui-menu attached="top" tabular>
    <sui-menu-item active>tab1</sui-menu-item>
    <sui-menu-item>tab2</sui-menu-item>
  </sui-menu>

  <sui-segment attached="bottom">
      There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly believable.
      If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined
      chunks as necessary, making this the first true generator on the
      Internet. It uses a dictionary of over 200 Latin words, combined with
      a handful of model sentence structures, to generate Lorem Ipsum which
      looks reasonable. The generated Lorem Ipsum is therefore always free
      from repetition, injected humour, or non-characteristic words etc.
  </sui-segment>
</div>`,sizeCode:`<sui-menu size="mini">
  <sui-menu-item active>Home</sui-menu-item>
  <sui-menu-item>Messages</sui-menu-item>
  <sui-menu-menu position="right">
    <sui-dropdown item text="Language">
      <sui-dropdown-menu>
        <sui-dropdown-item>English</sui-dropdown-item>
        <sui-dropdown-item>Russian</sui-dropdown-item>
        <sui-dropdown-item>Spanish</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
    <sui-menu-item as="div">
      <sui-button color="primary">Sign up</sui-button>
    </sui-menu-item>
  </sui-menu-menu>
</sui-menu>`,fittedCode:`<sui-menu>
  <sui-menu-item fitted>No padding whatsoever</sui-menu-item>
  <sui-menu-item fitted="horizontally">No horizontal padding</sui-menu-item>
  <sui-menu-item fitted="vertically">No vertical padding</sui-menu-item>
</sui-menu>`,borderlessCode:`<sui-menu borderless>
  <sui-menu-item>1</sui-menu-item>
  <sui-menu-item>2</sui-menu-item>
  <sui-menu-item>3</sui-menu-item>
  <sui-menu-item>4</sui-menu-item>
  <sui-menu-item>5</sui-menu-item>
  <sui-menu-item>6</sui-menu-item>
</sui-menu>`}}}),Px=n("Types"),Mx=n("Editorials"),Dx=n("Reviews"),Fx=n("Upcoming Events"),Ix=n("Home"),Nx=n("Messages"),Lx=n("Friends"),Vx=n("logout"),Ox=n("Home"),Hx=n("Messages"),jx=n("Friends"),qx=n("Bio"),Jx=n("Photos"),Ux=n("Sort By"),Yx=n("Closest"),Gx=n("Most Comments"),Wx=n("Most Popular"),Kx=n(" Inbox "),Qx=n("1"),Xx=n(" Spam "),Zx=n("51"),eE=n(" Updates "),tE=n("1"),iE=n("1"),sE=n("..."),nE=n("10"),lE=n("11"),aE=n("12"),oE=n("Content"),uE=n("Our Company"),rE=n("About us"),dE=n("Jobs"),cE=n("Locations"),mE=n("Promotions"),_E=y("p",null,"Check out our new promotions",-1),fE=n("Coupons"),hE=y("p",null,"Check out our collection of coupons",-1),pE=n("Rebates"),gE=y("p",null,"Visit our rebate forum for information on claiming rebates",-1),bE=n("Sign up"),vE=n("Log in"),CE=n("Visit Google"),yE=n("Javascript Link"),wE=n("Browse"),$E=n("Submit"),AE=n("Sign up"),SE=n("Help"),kE=n(" Home "),TE=n("Search"),xE=n("Add"),EE=n("Remove"),BE=n(" Browse "),RE=n("Messages"),zE=n("States"),PE=n("A link"),ME=n("div Link"),DE=n("Link"),FE=n("Variations"),IE=y("img",{src:Rx},null,-1),NE=n("Features"),LE=n("Testimonials"),VE=n("Sign in"),OE=n("Home"),HE=n("Messages"),jE=n("Friends"),qE=n("Red"),JE=n("Orange"),UE=n("Yellow"),YE=n("Olive"),GE=n("Green"),WE=n("Teal"),KE=n(" Games "),QE=n(" Channels "),XE=n(" Videos "),ZE=n("Run"),e4=n("Walk"),t4=n("Bike"),i4=n(" Games "),s4=n(" Channels "),n4=n(" Videos "),l4=n("Buy"),a4=n("Sell"),o4=n("Rent"),u4=n("tab1"),r4=n("tab2"),d4=n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "),c4=n("Home"),m4=n("Messages"),_4=n("English"),f4=n("Russian"),h4=n("Spanish"),p4=n("Sign up"),g4=n("No padding whatsoever"),b4=n("No horizontal padding"),v4=n("No vertical padding"),C4=n("1"),y4=n("2"),w4=n("3"),$4=n("4"),A4=n("5"),S4=n("6");function k4(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-menu-item"),u=b("sui-menu"),h=b("doc-example"),c=b("sui-input"),g=b("sui-menu-menu"),v=b("sui-label"),r=b("sui-button"),C=b("sui-dropdown-item"),w=b("sui-dropdown-menu"),A=b("sui-dropdown"),p=b("sui-icon"),$=b("sui-segment"),k=b("sui-container");return X(),oe("div",null,[e(f,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(k,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Px]),_:1}),e(h,{title:"Menu",description:"A menu",code:t.menuCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[Mx]),_:1}),e(a,null,{default:i(()=>[Dx]),_:1}),e(a,null,{default:i(()=>[Fx]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:t.secondaryMenuCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[Ix]),_:1}),e(a,null,{default:i(()=>[Nx]),_:1}),e(a,null,{default:i(()=>[Lx]),_:1}),e(g,{position:"right"},{default:i(()=>[e(a,null,{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(a,null,{default:i(()=>[Vx]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[Ox]),_:1}),e(a,null,{default:i(()=>[Hx]),_:1}),e(a,null,{default:i(()=>[jx]),_:1}),e(g,{position:"right"},{default:i(()=>[e(a,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:t.tabularCode},{default:i(()=>[e(u,{tabular:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[qx]),_:1}),e(a,null,{default:i(()=>[Jx]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Text",description:"A menu can be formatted for text content",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(a,{header:""},{default:i(()=>[Ux]),_:1}),e(a,{active:""},{default:i(()=>[Yx]),_:1}),e(a,null,{default:i(()=>[Gx]),_:1}),e(a,null,{default:i(()=>[Wx]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:t.verticalMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(a,{active:"",color:"teal"},{default:i(()=>[Kx,e(v,{color:"teal",pointing:"left"},{default:i(()=>[Qx]),_:1})]),_:1}),e(a,null,{default:i(()=>[Xx,e(v,null,{default:i(()=>[Zx]),_:1})]),_:1}),e(a,null,{default:i(()=>[eE,e(v,null,{default:i(()=>[tE]),_:1})]),_:1}),e(a,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:t.paginationCode},{default:i(()=>[e(u,{pagination:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[iE]),_:1}),e(a,{disabled:""},{default:i(()=>[sE]),_:1}),e(a,null,{default:i(()=>[nE]),_:1}),e(a,null,{default:i(()=>[lE]),_:1}),e(a,null,{default:i(()=>[aE]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[oE]),_:1}),e(h,{title:"Header",description:"A menu item may include a header or may itself be a header",code:t.headerCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{header:""},{default:i(()=>[uE]),_:1}),e(a,null,{default:i(()=>[rE]),_:1}),e(a,null,{default:i(()=>[dE]),_:1}),e(a,null,{default:i(()=>[cE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:t.textContentCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(a,null,{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[mE]),_:1}),_E]),_:1}),e(a,null,{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[fE]),_:1}),hE]),_:1}),e(a,null,{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[pE]),_:1}),gE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Input",description:"A menu item can contain an input inside of it",code:t.inputCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{as:"div"},{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(a,{position:"right",as:"div"},{default:i(()=>[e(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Button",description:"A menu item can contain a button inside of it",code:t.buttonCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{as:"div"},{default:i(()=>[e(r,{color:"primary"},{default:i(()=>[bE]),_:1})]),_:1}),e(a,{as:"div"},{default:i(()=>[e(r,null,{default:i(()=>[vE]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:t.linkItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(a,{href:"https://google.com"},{default:i(()=>[CE]),_:1}),e(a,{link:"",as:"div"},{default:i(()=>[yE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:t.dropdownItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(A,{item:"",text:"Categories"},{default:i(()=>[e(w,null,{default:i(()=>[e(C,{text:"Electoronics"}),e(C,{text:"Automotive"}),e(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:t.menuContentCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[wE]),_:1}),e(a,null,{default:i(()=>[$E]),_:1}),e(g,{position:"right"},{default:i(()=>[e(a,null,{default:i(()=>[AE]),_:1}),e(a,null,{default:i(()=>[SE]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:t.subMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(a,{as:"div"},{default:i(()=>[e(c,{placeholder:"Search..."})]),_:1}),e(a,{as:"div"},{default:i(()=>[kE,e(g,null,{default:i(()=>[e(a,null,{default:i(()=>[TE]),_:1}),e(a,null,{default:i(()=>[xE]),_:1}),e(a,null,{default:i(()=>[EE]),_:1})]),_:1})]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"grid layout"}),BE]),_:1}),e(a,null,{default:i(()=>[RE]),_:1}),e(A,{item:"",text:"More"},{default:i(()=>[e(w,null,{default:i(()=>[e(C,{icon:"edit",text:"Edit Profile"}),e(C,{icon:"globe",text:"Choose Language"}),e(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[zE]),_:1}),e(h,{title:"Hover",description:"A menu item can be hovered",code:t.hoverCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(a,null,{default:i(()=>[PE]),_:1}),e(a,{as:"div",link:""},{default:i(()=>[ME]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Active",description:"A menu item can be active",code:t.activeCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[DE]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[FE]),_:1}),e(h,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:t.stackableCode},{default:i(()=>[e(u,{stackable:""},{default:i(()=>[e(a,{as:"div"},{default:i(()=>[IE]),_:1}),e(a,null,{default:i(()=>[NE]),_:1}),e(a,null,{default:i(()=>[LE]),_:1}),e(a,null,{default:i(()=>[VE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:t.invertedCode},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[OE]),_:1}),e(a,null,{default:i(()=>[HE]),_:1}),e(a,null,{default:i(()=>[jE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Colored",description:"Additional colors can be specified",code:t.coloredCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{active:"",color:"red"},{default:i(()=>[qE]),_:1}),e(a,{color:"orange"},{default:i(()=>[JE]),_:1}),e(a,{color:"yellow"},{default:i(()=>[UE]),_:1}),e(a,{color:"olive"},{default:i(()=>[YE]),_:1}),e(a,{color:"green"},{default:i(()=>[GE]),_:1}),e(a,{color:"teal"},{default:i(()=>[WE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Icons",description:"A menu may have just icons",code:t.iconsCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(a,null,{default:i(()=>[e(p,{name:"gamepad"})]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"video camera"})]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Labeled Icon",description:"A menu may have labeled icons",code:t.labeledIconCode},{default:i(()=>[e(u,{icon:"labeled"},{default:i(()=>[e(a,null,{default:i(()=>[e(p,{name:"gamepad"}),KE]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"video camera"}),QE]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"video play"}),XE]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fluid",description:"A vertical menu may take the size of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",vertical:""},{default:i(()=>[e(a,null,{default:i(()=>[ZE]),_:1}),e(a,null,{default:i(()=>[e4]),_:1}),e(a,null,{default:i(()=>[t4]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(a,null,{default:i(()=>[e(p,{name:"gamepad"}),i4]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"video camera"}),s4]),_:1}),e(a,null,{default:i(()=>[e(p,{name:"video play"}),n4]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:t.evenlyDividedCode},{default:i(()=>[e(u,{fluid:"",widths:3},{default:i(()=>[e(a,null,{default:i(()=>[l4]),_:1}),e(a,null,{default:i(()=>[a4]),_:1}),e(a,null,{default:i(()=>[o4]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Attached",description:"A menu may be attached to other content segments",code:t.attachedCode},{default:i(()=>[y("div",null,[e(u,{attached:"top",tabular:""},{default:i(()=>[e(a,{active:""},{default:i(()=>[u4]),_:1}),e(a,null,{default:i(()=>[r4]),_:1})]),_:1}),e($,{attached:"bottom"},{default:i(()=>[d4]),_:1})])]),_:1},8,["code"]),e(h,{title:"Size",description:"A menu can vary in size",code:t.sizeCode},{default:i(()=>[e(u,{size:"mini"},{default:i(()=>[e(a,{active:""},{default:i(()=>[c4]),_:1}),e(a,null,{default:i(()=>[m4]),_:1}),e(g,{position:"right"},{default:i(()=>[e(A,{item:"",text:"Language"},{default:i(()=>[e(w,null,{default:i(()=>[e(C,null,{default:i(()=>[_4]),_:1}),e(C,null,{default:i(()=>[f4]),_:1}),e(C,null,{default:i(()=>[h4]),_:1})]),_:1})]),_:1}),e(a,{as:"div"},{default:i(()=>[e(r,{color:"primary"},{default:i(()=>[p4]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{fitted:""},{default:i(()=>[g4]),_:1}),e(a,{fitted:"horizontally"},{default:i(()=>[b4]),_:1}),e(a,{fitted:"vertically"},{default:i(()=>[v4]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Borderless",description:"A menu item or menu can have no borders",code:t.borderlessCode},{default:i(()=>[e(u,{borderless:""},{default:i(()=>[e(a,null,{default:i(()=>[C4]),_:1}),e(a,null,{default:i(()=>[y4]),_:1}),e(a,null,{default:i(()=>[w4]),_:1}),e(a,null,{default:i(()=>[$4]),_:1}),e(a,null,{default:i(()=>[A4]),_:1}),e(a,null,{default:i(()=>[S4]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var T4=_e(zx,[["render",k4]]);const x4=E({name:"MessageDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{messageCode:`<sui-message>
  <sui-message-header>Changes in Service</sui-message-header>
  <p>We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.</p>
</sui-message>`,listMessageCode:`<sui-message>
  <sui-message-header>New Site Features</sui-message-header>
  <sui-message-list>
    <sui-message-item>You can now have cover images on blog pages</sui-message-item>
    <sui-message-item>Drafts will now auto-save while writing</sui-message-item>
  </sui-message-list>
</sui-message>`,iconMessageCode:`<sui-message icon>
  <sui-icon name="inbox" />
  <sui-message-content>
    <sui-message-header>
      Have you heard about our mailing list?
    </sui-message-header>
    <p>Get the best news in your e-mail every day.</p>
  </sui-message-content>
</sui-message>`,hiddenCode:`<sui-message hidden>
  <p>You can't see me</p>
</sui-message>`,visibleCode:`<sui-message visible>
  <p>You can always see me</p>
</sui-message>`,floatingCode:`<sui-message floating>
  <p>Way to go!</p>
</sui-message>`,compactCode:`<sui-message compact>
  <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
</sui-message>`,attachedCode:`<div>
  <sui-message
    attached
    header="Welcome to our site!"
    content="Fill out the form below to sign-up for a new account"
  />
  <sui-form class="attached fluid segment">
    <sui-form-group widths="equal">
      <sui-form-field
        label="First Name"
        placeholder="First Name"
      />
      <sui-form-field
        label="Last Name"
        placeholder="Last Name"
      />
    </sui-form-group>
    <sui-form-field label="Username" placeholder="Username" />
    <sui-form-field label="Password" placeholder="Password" />
    <sui-button color="primary">Submit</sui-button>
  </sui-form>
  <sui-message attached="bottom" warning>
    <sui-icon name="help" />
    Already signed up? <a href="#">Login here</a> instead.
  </sui-message>
</div>`,warningCode:`<sui-message warning>
  <sui-icon name="close" />
  <sui-message-header>
    You must register before you can do that!
  </sui-message-header>
  Visit our registration page, then try again
</sui-message>`,infoCode:`<sui-message info>
  <sui-message-header>Was this what you wanted?</sui-message-header>
  <sui-message-list>It's good to see you again.</sui-message-list>
  <sui-message-list>Did you know it's been a while?</sui-message-list>
</sui-message>`,positiveSuccessCode:`<sui-message positive>
  <sui-message-header>You are eligible for a reward</sui-message-header>
  <p>Go to your <b>special offers</b> page to see now.</p>
</sui-message>`,negativeErrorCode:`<sui-message negative>
  <sui-icon name="close" />
  <sui-message-header>We're sorry we can't apply that discount</sui-message-header>
  <p>That offer has expired</p>
</sui-message>`,coloredCode:`<div>
  <sui-message color="red">Red</sui-message>
  <sui-message color="orange">Orange</sui-message>
  <sui-message color="yellow">Yellow</sui-message>
  <sui-message color="olive">Olive</sui-message>
  <sui-message color="green">Green</sui-message>
  <sui-message color="teal">Teal</sui-message>
  <sui-message color="blue">Blue</sui-message>
  <sui-message color="violet">Violet</sui-message>
  <sui-message color="purple">Purple</sui-message>
  <sui-message color="pink">Pink</sui-message>
  <sui-message color="brown">Brown</sui-message>
  <sui-message color="black">Black</sui-message>
</div>`,sizeCode:`<div>
  <sui-message size="mini">This is a mini message.</sui-message>
  <sui-message size="large">This is a large message.</sui-message>
  <sui-message size="massive">This is a massive message.</sui-message>
</div>`}}}),E4=n("Types"),B4=n("Changes in Service"),R4=y("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),z4=n("New Site Features"),P4=n("You can now have cover images on blog pages"),M4=n("Drafts will now auto-save while writing"),D4=n(" Have you heard about our mailing list? "),F4=y("p",null,"Get the best news in your e-mail every day.",-1),I4=n("States"),N4=y("p",null,"You can't see me",-1),L4=y("p",null,"You can always see me",-1),V4=n("Variations"),O4=y("p",null,"Way to go!",-1),H4=y("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),j4=n("Submit"),q4=n(" Already signed up? "),J4=y("a",{href:"#"},"Login here",-1),U4=n(" instead. "),Y4=n(" You must register before you can do that! "),G4=n(" Visit our registration page, then try again "),W4=n("Was this what you wanted?"),K4=n("It's good to see you again."),Q4=n("Did you know it's been a while?"),X4=n("You are eligible for a reward"),Z4=y("p",null,[n("Go to your "),y("b",null,"special offers"),n(" page to see now.")],-1),eB=n("We're sorry we can't apply that discount"),tB=y("p",null,"That offer has expired",-1),iB=n("Red"),sB=n("Orange"),nB=n("Yellow"),lB=n("Olive"),aB=n("Green"),oB=n("Teal"),uB=n("Blue"),rB=n("Violet"),dB=n("Purple"),cB=n("Pink"),mB=n("Brown"),_B=n("Black"),fB=n("This is a mini message."),hB=n("This is a large message."),pB=n("This is a massive message.");function gB(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-message-header"),u=b("sui-message"),h=b("doc-example"),c=b("sui-message-item"),g=b("sui-message-list"),v=b("sui-icon"),r=b("sui-message-content"),C=b("sui-form-field"),w=b("sui-form-group"),A=b("sui-button"),p=b("sui-form"),$=b("sui-container");return X(),oe("div",null,[e(f,{title:"Message",sub:"A message displays information that explains nearby content"}),e($,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[E4]),_:1}),e(h,{title:"Message",description:"A basic message",code:t.messageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[B4]),_:1}),R4]),_:1})]),_:1},8,["code"]),e(h,{title:"List Message",description:"A message with a list",code:t.listMessageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[z4]),_:1}),e(g,null,{default:i(()=>[e(c,null,{default:i(()=>[P4]),_:1}),e(c,null,{default:i(()=>[M4]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Icon Message",description:"A message can contain an icon",code:t.iconMessageCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(v,{name:"inbox"}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[D4]),_:1}),F4]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[I4]),_:1}),e(h,{title:"Hidden",description:"A message can be hidden",code:t.hiddenCode},{default:i(()=>[e(u,{hidden:""},{default:i(()=>[N4]),_:1})]),_:1},8,["code"]),e(h,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:t.visibleCode},{default:i(()=>[e(u,{visible:""},{default:i(()=>[L4]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[V4]),_:1}),e(h,{title:"Floating",description:"A message can float above content that it is related to",code:t.floatingCode},{default:i(()=>[e(u,{floating:""},{default:i(()=>[O4]),_:1})]),_:1},8,["code"]),e(h,{title:"Compact",description:"A message can only take up the width of its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[H4]),_:1})]),_:1},8,["code"]),e(h,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:t.attachedCode},{default:i(()=>[y("div",null,[e(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(p,{class:"attached fluid segment"},{default:i(()=>[e(w,{widths:"equal"},{default:i(()=>[e(C,{label:"First Name",placeholder:"First Name"}),e(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(C,{label:"Username",placeholder:"Username"}),e(C,{label:"Password",placeholder:"Password"}),e(A,{color:"primary"},{default:i(()=>[j4]),_:1})]),_:1}),e(u,{attached:"bottom",warning:""},{default:i(()=>[e(v,{name:"help"}),q4,J4,U4]),_:1})])]),_:1},8,["code"]),e(h,{title:"Warning",description:"A message may be formatted to display warning messages",code:t.warningCode},{default:i(()=>[e(u,{warning:""},{default:i(()=>[e(v,{name:"close"}),e(a,null,{default:i(()=>[Y4]),_:1}),G4]),_:1})]),_:1},8,["code"]),e(h,{title:"Info",description:"A message may be formatted to display information",code:t.infoCode},{default:i(()=>[e(u,{info:""},{default:i(()=>[e(a,null,{default:i(()=>[W4]),_:1}),e(g,null,{default:i(()=>[K4]),_:1}),e(g,null,{default:i(()=>[Q4]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:t.positiveSuccessCode},{default:i(()=>[e(u,{positive:""},{default:i(()=>[e(a,null,{default:i(()=>[X4]),_:1}),Z4]),_:1})]),_:1},8,["code"]),e(h,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:t.negativeErrorCode},{default:i(()=>[e(u,{negative:""},{default:i(()=>[e(v,{name:"close"}),e(a,null,{default:i(()=>[eB]),_:1}),tB]),_:1})]),_:1},8,["code"]),e(h,{title:"Colored",description:"A message can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[y("div",null,[e(u,{color:"red"},{default:i(()=>[iB]),_:1}),e(u,{color:"orange"},{default:i(()=>[sB]),_:1}),e(u,{color:"yellow"},{default:i(()=>[nB]),_:1}),e(u,{color:"olive"},{default:i(()=>[lB]),_:1}),e(u,{color:"green"},{default:i(()=>[aB]),_:1}),e(u,{color:"teal"},{default:i(()=>[oB]),_:1}),e(u,{color:"blue"},{default:i(()=>[uB]),_:1}),e(u,{color:"violet"},{default:i(()=>[rB]),_:1}),e(u,{color:"purple"},{default:i(()=>[dB]),_:1}),e(u,{color:"pink"},{default:i(()=>[cB]),_:1}),e(u,{color:"brown"},{default:i(()=>[mB]),_:1}),e(u,{color:"black"},{default:i(()=>[_B]),_:1})])]),_:1},8,["code"]),e(h,{title:"Size",description:"A message can have different sizes",code:t.sizeCode},{default:i(()=>[y("div",null,[e(u,{size:"mini"},{default:i(()=>[fB]),_:1}),e(u,{size:"large"},{default:i(()=>[hB]),_:1}),e(u,{size:"massive"},{default:i(()=>[pB]),_:1})])]),_:1},8,["code"])]),_:1})])}var bB=_e(x4,[["render",gB]]);const vB=E({name:"TableDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{tableCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Job</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>James</sui-table-cell>
      <sui-table-cell>24</sui-table-cell>
      <sui-table-cell>Engineer</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>26</sui-table-cell>
      <sui-table-cell>Engineer</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Elyse</sui-table-cell>
      <sui-table-cell>24</sui-table-cell>
      <sui-table-cell>Designer</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,definitionCode:`<sui-table definition>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell>Arguments</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>reset rating</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
      <sui-table-cell>Resets rating to default value</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>set rating</sui-table-cell>
      <sui-table-cell>rating (integer)</sui-table-cell>
      <sui-table-cell>Sets the current star rating to specified value</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,structuredCode:`<sui-table structured celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell rowspan="2">Name</sui-table-header-cell>
      <sui-table-header-cell rowspan="2">Type</sui-table-header-cell>
      <sui-table-header-cell rowspan="2">Files</sui-table-header-cell>
      <sui-table-header-cell colspan="3">Languages</sui-table-header-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-header-cell>Ruby</sui-table-header-cell>
      <sui-table-header-cell>Javascript</sui-table-header-cell>
      <sui-table-header-cell>Python</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Alpha Team</sui-table-cell>
      <sui-table-cell>Project 1</sui-table-cell>
      <sui-table-cell textAlign="right">2</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell rowspan="3">Beta Team</sui-table-cell>
      <sui-table-cell>Project 1</sui-table-cell>
      <sui-table-cell textAlign="right">52</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Project 2</sui-table-cell>
      <sui-table-cell textAlign="right">12</sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Project 3</sui-table-cell>
      <sui-table-cell textAlign="right">21</sui-table-cell>
      <sui-table-cell textAlign="center">
        <sui-icon name="checkmark" color="green" size="large" />
      </sui-table-cell>
      <sui-table-cell></sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,positiveNegativeCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell negative>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row positive>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="checkmark" />
        Approved
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell positive>
        <sui-icon name="close" />
        Requires call
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row negative>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,errorCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row error>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Cannot pull data</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell error>
        <sui-icon name="attention" />
        Requires call
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,warningCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="attention" />
        Requires Action
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell warning>
        <sui-icon name="attention" />
        Hostile
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,activeCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row active>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Selected</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell active>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,disabledCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row disabled>
      <sui-table-cell>No Name Specified</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Selected</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell disabled>Jill</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,coloredCellsCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell color="orange">No Name Specified</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row color="blue">
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="microphone" />
        Recording session
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell color="pink">
        <sui-icon name="child" />
        Baby Party
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell color="green">Vacation</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,markedCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell marked="right" color="blue">No Name Specified</sui-table-cell>
      <sui-table-cell marked="left" color="red">Unknown</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell marked="left" color="green">Jimmy</sui-table-cell>
      <sui-table-cell>
        <sui-icon name="microphone" />
        Recording session
      </sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell marked="left" color="orange">
        <sui-icon name="child" />
        Baby Party
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Unknown</sui-table-cell>
      <sui-table-cell marked="right" color="purple">Vacation</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,singleLineCode:`<sui-table single-line>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Registration Date</sui-table-header-cell>
      <sui-table-header-cell>E-mail address</sui-table-header-cell>
      <sui-table-header-cell>Premium Plan</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John Lilki</sui-table-cell>
      <sui-table-cell>September 14, 2013</sui-table-cell>
      <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
      <sui-table-cell>No</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie Harington</sui-table-cell>
      <sui-table-cell>January 11, 2014</sui-table-cell>
      <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill Lewis</sui-table-cell>
      <sui-table-cell>May 11, 2014</sui-table-cell>
      <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,fixedCode:`<sui-table fixed>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,stackingCode:`<sui-table stackable>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,selectableRowCode:`<sui-table selectable celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell positive>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell negative>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,selectableCellCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Description</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell positive>Approved</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
    <sui-table-row warning>
      <sui-table-cell>Jimmy</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell negative>Denied</sui-table-cell>
      <sui-table-cell selectable><a href="#">Edit</a></sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,verticalAlignmentCode:`<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row verticalAlign="top">
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell verticalAlign="top">
        Notes
        <br />
        1<br />
        2<br />
      </sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell verticalAlign="bottom">Approved</sui-table-cell>
      <sui-table-cell>
        Notes
        <br />
        1<br />
        2<br />
      </sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,textAlignCode:`<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell textAlign="right">Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row textAlign="center">
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell textAlign="right">None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,stripedCode:`<sui-table striped>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Date Joined</sui-table-header-cell>
      <sui-table-header-cell>E-mail</sui-table-header-cell>
      <sui-table-header-cell>Called</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John Lilki</sui-table-cell>
      <sui-table-cell>September 14, 2013</sui-table-cell>
      <sui-table-cell>jhlilk22@yahoo.com</sui-table-cell>
      <sui-table-cell>No</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie Harington</sui-table-cell>
      <sui-table-cell>January 11, 2014</sui-table-cell>
      <sui-table-cell>jamieharingonton@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill Lewis</sui-table-cell>
      <sui-table-cell>May 11, 2014</sui-table-cell>
      <sui-table-cell>jilsewris22@yahoo.com</sui-table-cell>
      <sui-table-cell>Yes</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,celledCode:`<sui-table celled>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
  <sui-table-footer>
    <sui-table-row>
      <sui-table-cell>3 People</sui-table-cell>
      <sui-table-cell>2 Approved</sui-table-cell>
      <sui-table-cell></sui-table-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`,basicCode:`<div>
  <sui-table basic>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <br />
  <sui-table basic="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`,collapsingCode:`<sui-table collapsing>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Gender</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>

  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>27</sui-table-cell>
      <sui-table-cell>Male</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>32</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>22</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>

  <sui-table-footer>
    <sui-table-row>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`,collapsingCellCode:`<sui-table>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell collapsing>
        <sui-icon name="folder" /> node_modules
      </sui-table-cell>
      <sui-table-cell>Initial commit</sui-table-cell>
      <sui-table-cell>10 hours ago</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,columnCountCode:`<sui-table :columns="5">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Age</sui-table-header-cell>
      <sui-table-header-cell>Gender</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>

  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>27</sui-table-cell>
      <sui-table-cell>Male</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>32</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>22</sui-table-cell>
      <sui-table-cell>Other</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>

  <sui-table-footer>
    <sui-table-row>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
      <sui-table-header-cell></sui-table-header-cell>
    </sui-table-row>
  </sui-table-footer>
</sui-table>`,columnWidthCode:`<sui-table>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell :width="10">Name</sui-table-header-cell>
      <sui-table-header-cell :width="6">Status</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,coloredCode:`<sui-table color="red">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Food</sui-table-header-cell>
      <sui-table-header-cell>Calories</sui-table-header-cell>
      <sui-table-header-cell>Protein</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Apples</sui-table-cell>
      <sui-table-cell>200</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Orange</sui-table-cell>
      <sui-table-cell>310</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,invertedCode:`<sui-table inverted>
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Food</sui-table-header-cell>
      <sui-table-header-cell>Calories</sui-table-header-cell>
      <sui-table-header-cell>Protein</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>Apples</sui-table-cell>
      <sui-table-cell>200</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Orange</sui-table-cell>
      <sui-table-cell>310</sui-table-cell>
      <sui-table-cell>0g</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`,paddedCode:`<div>
  <sui-table padded>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <sui-table padded="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Jamie was not interested in purchasing our product.</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`,compactCode:`<div>
  <sui-table compact>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <sui-table compact="very">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell>Requires call</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</div>`,sizeCode:`<sui-table size="small">
  <sui-table-header>
    <sui-table-row>
      <sui-table-header-cell>Name</sui-table-header-cell>
      <sui-table-header-cell>Status</sui-table-header-cell>
      <sui-table-header-cell>Notes</sui-table-header-cell>
    </sui-table-row>
  </sui-table-header>
  <sui-table-body>
    <sui-table-row>
      <sui-table-cell>John</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jamie</sui-table-cell>
      <sui-table-cell>Approved</sui-table-cell>
      <sui-table-cell>Requires call</sui-table-cell>
    </sui-table-row>
    <sui-table-row>
      <sui-table-cell>Jill</sui-table-cell>
      <sui-table-cell>Denied</sui-table-cell>
      <sui-table-cell>None</sui-table-cell>
    </sui-table-row>
  </sui-table-body>
</sui-table>`}}}),CB=n("Types"),yB=n("Name"),wB=n("Age"),$B=n("Job"),AB=n("James"),SB=n("24"),kB=n("Engineer"),TB=n("Jill"),xB=n("26"),EB=n("Engineer"),BB=n("Elyse"),RB=n("24"),zB=n("Designer"),PB=n("Arguments"),MB=n("Description"),DB=n("reset rating"),FB=n("None"),IB=n("Resets rating to default value"),NB=n("set rating"),LB=n("rating (integer)"),VB=n("Sets the current star rating to specified value"),OB=n("Name"),HB=n("Type"),jB=n("Files"),qB=n("Languages"),JB=n("Ruby"),UB=n("Javascript"),YB=n("Python"),GB=n("Alpha Team"),WB=n("Project 1"),KB=n("2"),QB=n("Beta Team"),XB=n("Project 1"),ZB=n("52"),eR=n("Project 2"),tR=n("12"),iR=n("Project 3"),sR=n("21"),nR=n("States"),lR=n("Name"),aR=n("Status"),oR=n("Notes"),uR=n("No Name Specified"),rR=n("Unknown"),dR=n("None"),cR=n("Jimmy"),mR=n(" Approved "),_R=n("None"),fR=n("Jamie"),hR=n("Unknown"),pR=n(" Requires call "),gR=n("Jill"),bR=n("Unknown"),vR=n("None"),CR=n("Name"),yR=n("Status"),wR=n("Notes"),$R=n("No Name Specified"),AR=n("Approved"),SR=n("None"),kR=n("Jimmy"),TR=n("Cannot pull data"),xR=n("None"),ER=n("Jamie"),BR=n("Approved"),RR=n(" Requires call "),zR=n("Jill"),PR=n("Approved"),MR=n("None"),DR=n("Name"),FR=n("Status"),IR=n("Notes"),NR=n("No Name Specified"),LR=n("Unknown"),VR=n("None"),OR=n("Jimmy"),HR=n(" Requires Action "),jR=n("None"),qR=n("Jamie"),JR=n("Unknown"),UR=n(" Hostile "),YR=n("Jill"),GR=n("Unknown"),WR=n("None"),KR=n("Name"),QR=n("Status"),XR=n("Notes"),ZR=n("No Name Specified"),ez=n("Approved"),tz=n("None"),iz=n("Jimmy"),sz=n("Selected"),nz=n("None"),lz=n("Jamie"),az=n("Approved"),oz=n("Requires call"),uz=n("Jill"),rz=n("Approved"),dz=n("None"),cz=n("Name"),mz=n("Status"),_z=n("Notes"),fz=n("No Name Specified"),hz=n("Approved"),pz=n("None"),gz=n("Jimmy"),bz=n("Selected"),vz=n("None"),Cz=n("Jamie"),yz=n("Approved"),wz=n("Requires call"),$z=n("Jill"),Az=n("Approved"),Sz=n("None"),kz=n("Name"),Tz=n("Status"),xz=n("Notes"),Ez=n("No Name Specified"),Bz=n("Unknown"),Rz=n("None"),zz=n("Jimmy"),Pz=n(" Recording session "),Mz=n("None"),Dz=n("Jamie"),Fz=n("Unknown"),Iz=n(" Baby Party "),Nz=n("Jill"),Lz=n("Unknown"),Vz=n("Vacation"),Oz=n("Name"),Hz=n("Status"),jz=n("Notes"),qz=n("No Name Specified"),Jz=n("Unknown"),Uz=n("None"),Yz=n("Jimmy"),Gz=n(" Recording session "),Wz=n("None"),Kz=n("Jamie"),Qz=n("Unknown"),Xz=n(" Baby Party "),Zz=n("Jill"),eP=n("Unknown"),tP=n("Vacation"),iP=n("Variations"),sP=n("Name"),nP=n("Registration Date"),lP=n("E-mail address"),aP=n("Premium Plan"),oP=n("John Lilki"),uP=n("September 14, 2013"),rP=n("jhlilk22@yahoo.com"),dP=n("No"),cP=n("Jamie Harington"),mP=n("January 11, 2014"),_P=n("jamieharingonton@yahoo.com"),fP=n("Yes"),hP=n("Jill Lewis"),pP=n("May 11, 2014"),gP=n("jilsewris22@yahoo.com"),bP=n("Yes"),vP=n("Name"),CP=n("Status"),yP=n("Description"),wP=n("John"),$P=n("Approved"),AP=n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like"),SP=n("Jimmy"),kP=n("Approved"),TP=n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like"),xP=n("Jamie"),EP=n("Denied"),BP=n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like"),RP=n("Name"),zP=n("Status"),PP=n("Description"),MP=n("John"),DP=n("Approved"),FP=n("None"),IP=n("Jimmy"),NP=n("Approved"),LP=n("Requires call"),VP=n("Jamie"),OP=n("Denied"),HP=n("None"),jP=n("Name"),qP=n("Status"),JP=n("Description"),UP=n("John"),YP=n("Approved"),GP=n("None"),WP=n("Jimmy"),KP=n("Approved"),QP=n("Requires call"),XP=n("Jamie"),ZP=n("Denied"),e5=n("None"),t5=n("Name"),i5=n("Status"),s5=n("Description"),n5=n("John"),l5=n("Approved"),a5=y("a",{href:"#"},"Edit",-1),o5=n("Jimmy"),u5=n("Approved"),r5=y("a",{href:"#"},"Edit",-1),d5=n("Jamie"),c5=n("Denied"),m5=y("a",{href:"#"},"Edit",-1),_5=n("Name"),f5=n("Status"),h5=n("Notes"),p5=n("John"),g5=n("Approved"),b5=n(" Notes "),v5=y("br",null,null,-1),C5=n(" 1"),y5=y("br",null,null,-1),w5=n(" 2"),$5=y("br",null,null,-1),A5=n("Jamie"),S5=n("Approved"),k5=n(" Notes "),T5=y("br",null,null,-1),x5=n(" 1"),E5=y("br",null,null,-1),B5=n(" 2"),R5=y("br",null,null,-1),z5=n("Name"),P5=n("Status"),M5=n("Notes"),D5=n("John"),F5=n("Approved"),I5=n("None"),N5=n("Jamie"),L5=n("Approved"),V5=n("Requires call"),O5=n("Jamie"),H5=n("Approved"),j5=n("None"),q5=n("Name"),J5=n("Date Joined"),U5=n("E-mail"),Y5=n("Called"),G5=n("John Lilki"),W5=n("September 14, 2013"),K5=n("jhlilk22@yahoo.com"),Q5=n("No"),X5=n("Jamie Harington"),Z5=n("January 11, 2014"),eM=n("jamieharingonton@yahoo.com"),tM=n("Yes"),iM=n("Jill Lewis"),sM=n("May 11, 2014"),nM=n("jilsewris22@yahoo.com"),lM=n("Yes"),aM=n("Name"),oM=n("Status"),uM=n("Notes"),rM=n("John"),dM=n("Approved"),cM=n("None"),mM=n("Jamie"),_M=n("Approved"),fM=n("Requires call"),hM=n("Jill"),pM=n("Denied"),gM=n("None"),bM=n("3 People"),vM=n("2 Approved"),CM=n("Name"),yM=n("Status"),wM=n("Notes"),$M=n("John"),AM=n("Approved"),SM=n("None"),kM=n("Jamie"),TM=n("Approved"),xM=n("Requires call"),EM=n("Jill"),BM=n("Denied"),RM=n("None"),zM=y("br",null,null,-1),PM=n("Name"),MM=n("Status"),DM=n("Notes"),FM=n("John"),IM=n("Approved"),NM=n("None"),LM=n("Jamie"),VM=n("Approved"),OM=n("Requires call"),HM=n("Jill"),jM=n("Denied"),qM=n("None"),JM=n("Name"),UM=n("Status"),YM=n("Age"),GM=n("Gender"),WM=n("Notes"),KM=n("John"),QM=n("Approved"),XM=n("27"),ZM=n("Male"),eD=n("None"),tD=n("Jamie"),iD=n("Approved"),sD=n("32"),nD=n("Other"),lD=n("None"),aD=n("Jill"),oD=n("Denied"),uD=n("22"),rD=n("Other"),dD=n("None"),cD=n("3 People"),mD=n("2 Approved"),_D=n(" node_modules "),fD=n("Initial commit"),hD=n("10 hours ago"),pD=n(" node_modules "),gD=n("Initial commit"),bD=n("10 hours ago"),vD=n(" node_modules "),CD=n("Initial commit"),yD=n("10 hours ago"),wD=n("Name"),$D=n("Status"),AD=n("Age"),SD=n("Gender"),kD=n("Notes"),TD=n("John"),xD=n("Approved"),ED=n("27"),BD=n("Male"),RD=n("None"),zD=n("Jamie"),PD=n("Approved"),MD=n("32"),DD=n("Other"),FD=n("None"),ID=n("Jill"),ND=n("Denied"),LD=n("22"),VD=n("Other"),OD=n("None"),HD=n("3 People"),jD=n("2 Approved"),qD=n("Name"),JD=n("Status"),UD=n("John"),YD=n("Approved"),GD=n("Jamie"),WD=n("Approved"),KD=n("Food"),QD=n("Calories"),XD=n("Protein"),ZD=n("Apples"),eF=n("200"),tF=n("0g"),iF=n("Orange"),sF=n("310"),nF=n("0g"),lF=n("Food"),aF=n("Calories"),oF=n("Protein"),uF=n("Apples"),rF=n("200"),dF=n("0g"),cF=n("Orange"),mF=n("310"),_F=n("0g"),fF=n("Name"),hF=n("Status"),pF=n("Notes"),gF=n("John"),bF=n("Approved"),vF=n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again."),CF=n("Jamie"),yF=n("Approved"),wF=n("Jamie was not interested in purchasing our product."),$F=n("Name"),AF=n("Status"),SF=n("Notes"),kF=n("John"),TF=n("Approved"),xF=n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again."),EF=n("Jamie"),BF=n("Approved"),RF=n("Jamie was not interested in purchasing our product."),zF=n("Name"),PF=n("Status"),MF=n("Notes"),DF=n("John"),FF=n("Approved"),IF=n("None"),NF=n("Jamie"),LF=n("Approved"),VF=n("Requires call"),OF=n("Name"),HF=n("Status"),jF=n("Notes"),qF=n("John"),JF=n("Approved"),UF=n("None"),YF=n("Jamie"),GF=n("Approved"),WF=n("Requires call"),KF=n("Name"),QF=n("Status"),XF=n("Notes"),ZF=n("John"),eI=n("Approved"),tI=n("None"),iI=n("Jamie"),sI=n("Approved"),nI=n("Requires call"),lI=n("Jill"),aI=n("Denied"),oI=n("None");function uI(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-table-header-cell"),u=b("sui-table-row"),h=b("sui-table-header"),c=b("sui-table-cell"),g=b("sui-table-body"),v=b("sui-table"),r=b("doc-example"),C=b("sui-icon"),w=b("sui-table-footer"),A=b("sui-container");return X(),oe("div",null,[e(f,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e(A,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[CB]),_:1}),e(r,{title:"Table",description:"A standard table",code:t.tableCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[yB]),_:1}),e(a,null,{default:i(()=>[wB]),_:1}),e(a,null,{default:i(()=>[$B]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[AB]),_:1}),e(c,null,{default:i(()=>[SB]),_:1}),e(c,null,{default:i(()=>[kB]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[TB]),_:1}),e(c,null,{default:i(()=>[xB]),_:1}),e(c,null,{default:i(()=>[EB]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[BB]),_:1}),e(c,null,{default:i(()=>[RB]),_:1}),e(c,null,{default:i(()=>[zB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:t.definitionCode},{default:i(()=>[e(v,{definition:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a),e(a,null,{default:i(()=>[PB]),_:1}),e(a,null,{default:i(()=>[MB]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[DB]),_:1}),e(c,null,{default:i(()=>[FB]),_:1}),e(c,null,{default:i(()=>[IB]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[NB]),_:1}),e(c,null,{default:i(()=>[LB]),_:1}),e(c,null,{default:i(()=>[VB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Structured",description:"A table can be formatted to display complex structured data",code:t.structuredCode},{default:i(()=>[e(v,{structured:"",celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{rowspan:"2"},{default:i(()=>[OB]),_:1}),e(a,{rowspan:"2"},{default:i(()=>[HB]),_:1}),e(a,{rowspan:"2"},{default:i(()=>[jB]),_:1}),e(a,{colspan:"3"},{default:i(()=>[qB]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[JB]),_:1}),e(a,null,{default:i(()=>[UB]),_:1}),e(a,null,{default:i(()=>[YB]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[GB]),_:1}),e(c,null,{default:i(()=>[WB]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[KB]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,{rowspan:"3"},{default:i(()=>[QB]),_:1}),e(c,null,{default:i(()=>[XB]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[ZB]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[eR]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[tR]),_:1}),e(c),e(c,{textAlign:"center"},{default:i(()=>[e(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[iR]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[sR]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[nR]),_:1}),e(r,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:t.positiveNegativeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[lR]),_:1}),e(a,null,{default:i(()=>[aR]),_:1}),e(a,null,{default:i(()=>[oR]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[uR]),_:1}),e(c,null,{default:i(()=>[rR]),_:1}),e(c,{negative:""},{default:i(()=>[dR]),_:1})]),_:1}),e(u,{positive:""},{default:i(()=>[e(c,null,{default:i(()=>[cR]),_:1}),e(c,null,{default:i(()=>[e(C,{name:"checkmark"}),mR]),_:1}),e(c,null,{default:i(()=>[_R]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[fR]),_:1}),e(c,null,{default:i(()=>[hR]),_:1}),e(c,{positive:""},{default:i(()=>[e(C,{name:"close"}),pR]),_:1})]),_:1}),e(u,{negative:""},{default:i(()=>[e(c,null,{default:i(()=>[gR]),_:1}),e(c,null,{default:i(()=>[bR]),_:1}),e(c,null,{default:i(()=>[vR]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:t.errorCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[CR]),_:1}),e(a,null,{default:i(()=>[yR]),_:1}),e(a,null,{default:i(()=>[wR]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[$R]),_:1}),e(c,null,{default:i(()=>[AR]),_:1}),e(c,null,{default:i(()=>[SR]),_:1})]),_:1}),e(u,{error:""},{default:i(()=>[e(c,null,{default:i(()=>[kR]),_:1}),e(c,null,{default:i(()=>[TR]),_:1}),e(c,null,{default:i(()=>[xR]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[ER]),_:1}),e(c,null,{default:i(()=>[BR]),_:1}),e(c,{error:""},{default:i(()=>[e(C,{name:"attention"}),RR]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[zR]),_:1}),e(c,null,{default:i(()=>[PR]),_:1}),e(c,null,{default:i(()=>[MR]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Warning",description:"A cell or row may warn a user",code:t.warningCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[DR]),_:1}),e(a,null,{default:i(()=>[FR]),_:1}),e(a,null,{default:i(()=>[IR]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[NR]),_:1}),e(c,null,{default:i(()=>[LR]),_:1}),e(c,null,{default:i(()=>[VR]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[OR]),_:1}),e(c,null,{default:i(()=>[e(C,{name:"attention"}),HR]),_:1}),e(c,null,{default:i(()=>[jR]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[qR]),_:1}),e(c,null,{default:i(()=>[JR]),_:1}),e(c,{warning:""},{default:i(()=>[e(C,{name:"attention"}),UR]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[YR]),_:1}),e(c,null,{default:i(()=>[GR]),_:1}),e(c,null,{default:i(()=>[WR]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Active",description:"A cell or row can be active or selected by a user",code:t.activeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[KR]),_:1}),e(a,null,{default:i(()=>[QR]),_:1}),e(a,null,{default:i(()=>[XR]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[ZR]),_:1}),e(c,null,{default:i(()=>[ez]),_:1}),e(c,null,{default:i(()=>[tz]),_:1})]),_:1}),e(u,{active:""},{default:i(()=>[e(c,null,{default:i(()=>[iz]),_:1}),e(c,null,{default:i(()=>[sz]),_:1}),e(c,null,{default:i(()=>[nz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[lz]),_:1}),e(c,null,{default:i(()=>[az]),_:1}),e(c,null,{default:i(()=>[oz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{active:""},{default:i(()=>[uz]),_:1}),e(c,null,{default:i(()=>[rz]),_:1}),e(c,null,{default:i(()=>[dz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Disabled",description:"A cell can be disabled",code:t.disabledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[cz]),_:1}),e(a,null,{default:i(()=>[mz]),_:1}),e(a,null,{default:i(()=>[_z]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{disabled:""},{default:i(()=>[e(c,null,{default:i(()=>[fz]),_:1}),e(c,null,{default:i(()=>[hz]),_:1}),e(c,null,{default:i(()=>[pz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[gz]),_:1}),e(c,null,{default:i(()=>[bz]),_:1}),e(c,null,{default:i(()=>[vz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[Cz]),_:1}),e(c,null,{default:i(()=>[yz]),_:1}),e(c,null,{default:i(()=>[wz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{disabled:""},{default:i(()=>[$z]),_:1}),e(c,null,{default:i(()=>[Az]),_:1}),e(c,null,{default:i(()=>[Sz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:t.coloredCellsCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[kz]),_:1}),e(a,null,{default:i(()=>[Tz]),_:1}),e(a,null,{default:i(()=>[xz]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{color:"orange"},{default:i(()=>[Ez]),_:1}),e(c,null,{default:i(()=>[Bz]),_:1}),e(c,null,{default:i(()=>[Rz]),_:1})]),_:1}),e(u,{color:"blue"},{default:i(()=>[e(c,null,{default:i(()=>[zz]),_:1}),e(c,null,{default:i(()=>[e(C,{name:"microphone"}),Pz]),_:1}),e(c,null,{default:i(()=>[Mz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[Dz]),_:1}),e(c,null,{default:i(()=>[Fz]),_:1}),e(c,{color:"pink"},{default:i(()=>[e(C,{name:"child"}),Iz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[Nz]),_:1}),e(c,null,{default:i(()=>[Lz]),_:1}),e(c,{color:"green"},{default:i(()=>[Vz]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:t.markedCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[Oz]),_:1}),e(a,null,{default:i(()=>[Hz]),_:1}),e(a,null,{default:i(()=>[jz]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{marked:"right",color:"blue"},{default:i(()=>[qz]),_:1}),e(c,{marked:"left",color:"red"},{default:i(()=>[Jz]),_:1}),e(c,null,{default:i(()=>[Uz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{marked:"left",color:"green"},{default:i(()=>[Yz]),_:1}),e(c,null,{default:i(()=>[e(C,{name:"microphone"}),Gz]),_:1}),e(c,null,{default:i(()=>[Wz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[Kz]),_:1}),e(c,null,{default:i(()=>[Qz]),_:1}),e(c,{marked:"left",color:"orange"},{default:i(()=>[e(C,{name:"child"}),Xz]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[Zz]),_:1}),e(c,null,{default:i(()=>[eP]),_:1}),e(c,{marked:"right",color:"purple"},{default:i(()=>[tP]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[iP]),_:1}),e(r,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:t.singleLineCode},{default:i(()=>[e(v,{"single-line":""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[sP]),_:1}),e(a,null,{default:i(()=>[nP]),_:1}),e(a,null,{default:i(()=>[lP]),_:1}),e(a,null,{default:i(()=>[aP]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[oP]),_:1}),e(c,null,{default:i(()=>[uP]),_:1}),e(c,null,{default:i(()=>[rP]),_:1}),e(c,null,{default:i(()=>[dP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[cP]),_:1}),e(c,null,{default:i(()=>[mP]),_:1}),e(c,null,{default:i(()=>[_P]),_:1}),e(c,null,{default:i(()=>[fP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[hP]),_:1}),e(c,null,{default:i(()=>[pP]),_:1}),e(c,null,{default:i(()=>[gP]),_:1}),e(c,null,{default:i(()=>[bP]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:t.fixedCode},{default:i(()=>[e(v,{fixed:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[vP]),_:1}),e(a,null,{default:i(()=>[CP]),_:1}),e(a,null,{default:i(()=>[yP]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[wP]),_:1}),e(c,null,{default:i(()=>[$P]),_:1}),e(c,null,{default:i(()=>[AP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[SP]),_:1}),e(c,null,{default:i(()=>[kP]),_:1}),e(c,null,{default:i(()=>[TP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[xP]),_:1}),e(c,null,{default:i(()=>[EP]),_:1}),e(c,null,{default:i(()=>[BP]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:t.stackingCode},{default:i(()=>[e(v,{stackable:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[RP]),_:1}),e(a,null,{default:i(()=>[zP]),_:1}),e(a,null,{default:i(()=>[PP]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[MP]),_:1}),e(c,null,{default:i(()=>[DP]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[FP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[IP]),_:1}),e(c,null,{default:i(()=>[NP]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[LP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[VP]),_:1}),e(c,null,{default:i(()=>[OP]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[HP]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:t.selectableRowCode},{default:i(()=>[e(v,{selectable:"",celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[jP]),_:1}),e(a,null,{default:i(()=>[qP]),_:1}),e(a,null,{default:i(()=>[JP]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[UP]),_:1}),e(c,{positive:""},{default:i(()=>[YP]),_:1}),e(c,null,{default:i(()=>[GP]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[WP]),_:1}),e(c,null,{default:i(()=>[KP]),_:1}),e(c,null,{default:i(()=>[QP]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[XP]),_:1}),e(c,{negative:""},{default:i(()=>[ZP]),_:1}),e(c,null,{default:i(()=>[e5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Selectable Cell",description:"A table cell can be selectable",code:t.selectableCellCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[t5]),_:1}),e(a,null,{default:i(()=>[i5]),_:1}),e(a,null,{default:i(()=>[s5]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[n5]),_:1}),e(c,{positive:""},{default:i(()=>[l5]),_:1}),e(c,{selectable:""},{default:i(()=>[a5]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[o5]),_:1}),e(c,null,{default:i(()=>[u5]),_:1}),e(c,{selectable:""},{default:i(()=>[r5]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[d5]),_:1}),e(c,{negative:""},{default:i(()=>[c5]),_:1}),e(c,{selectable:""},{default:i(()=>[m5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:t.verticalAlignmentCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[_5]),_:1}),e(a,null,{default:i(()=>[f5]),_:1}),e(a,null,{default:i(()=>[h5]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{verticalAlign:"top"},{default:i(()=>[e(c,null,{default:i(()=>[p5]),_:1}),e(c,null,{default:i(()=>[g5]),_:1}),e(c,{verticalAlign:"top"},{default:i(()=>[b5,v5,C5,y5,w5,$5]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[A5]),_:1}),e(c,{verticalAlign:"bottom"},{default:i(()=>[S5]),_:1}),e(c,null,{default:i(()=>[k5,T5,x5,E5,B5,R5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:t.textAlignCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[z5]),_:1}),e(a,null,{default:i(()=>[P5]),_:1}),e(a,{textAlign:"right"},{default:i(()=>[M5]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[e(c,null,{default:i(()=>[D5]),_:1}),e(c,null,{default:i(()=>[F5]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[I5]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[N5]),_:1}),e(c,null,{default:i(()=>[L5]),_:1}),e(c,null,{default:i(()=>[V5]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[O5]),_:1}),e(c,null,{default:i(()=>[H5]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[j5]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:t.stripedCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[q5]),_:1}),e(a,null,{default:i(()=>[J5]),_:1}),e(a,null,{default:i(()=>[U5]),_:1}),e(a,null,{default:i(()=>[Y5]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[G5]),_:1}),e(c,null,{default:i(()=>[W5]),_:1}),e(c,null,{default:i(()=>[K5]),_:1}),e(c,null,{default:i(()=>[Q5]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[X5]),_:1}),e(c,null,{default:i(()=>[Z5]),_:1}),e(c,null,{default:i(()=>[eM]),_:1}),e(c,null,{default:i(()=>[tM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[iM]),_:1}),e(c,null,{default:i(()=>[sM]),_:1}),e(c,null,{default:i(()=>[nM]),_:1}),e(c,null,{default:i(()=>[lM]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Celled",description:"A table may be divided each row into separate cells",code:t.celledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[aM]),_:1}),e(a,null,{default:i(()=>[oM]),_:1}),e(a,null,{default:i(()=>[uM]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[rM]),_:1}),e(c,null,{default:i(()=>[dM]),_:1}),e(c,null,{default:i(()=>[cM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[mM]),_:1}),e(c,null,{default:i(()=>[_M]),_:1}),e(c,null,{default:i(()=>[fM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[hM]),_:1}),e(c,null,{default:i(()=>[pM]),_:1}),e(c,null,{default:i(()=>[gM]),_:1})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[bM]),_:1}),e(c,null,{default:i(()=>[vM]),_:1}),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:t.basicCode},{default:i(()=>[y("div",null,[e(v,{basic:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[CM]),_:1}),e(a,null,{default:i(()=>[yM]),_:1}),e(a,null,{default:i(()=>[wM]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[$M]),_:1}),e(c,null,{default:i(()=>[AM]),_:1}),e(c,null,{default:i(()=>[SM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[kM]),_:1}),e(c,null,{default:i(()=>[TM]),_:1}),e(c,null,{default:i(()=>[xM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[EM]),_:1}),e(c,null,{default:i(()=>[BM]),_:1}),e(c,null,{default:i(()=>[RM]),_:1})]),_:1})]),_:1})]),_:1}),zM,e(v,{basic:"very"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[PM]),_:1}),e(a,null,{default:i(()=>[MM]),_:1}),e(a,null,{default:i(()=>[DM]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[FM]),_:1}),e(c,null,{default:i(()=>[IM]),_:1}),e(c,null,{default:i(()=>[NM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[LM]),_:1}),e(c,null,{default:i(()=>[VM]),_:1}),e(c,null,{default:i(()=>[OM]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[HM]),_:1}),e(c,null,{default:i(()=>[jM]),_:1}),e(c,null,{default:i(()=>[qM]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:t.collapsingCode},{default:i(()=>[e(v,{collapsing:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[JM]),_:1}),e(a,null,{default:i(()=>[UM]),_:1}),e(a,null,{default:i(()=>[YM]),_:1}),e(a,null,{default:i(()=>[GM]),_:1}),e(a,null,{default:i(()=>[WM]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[KM]),_:1}),e(c,null,{default:i(()=>[QM]),_:1}),e(c,null,{default:i(()=>[XM]),_:1}),e(c,null,{default:i(()=>[ZM]),_:1}),e(c,null,{default:i(()=>[eD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[tD]),_:1}),e(c,null,{default:i(()=>[iD]),_:1}),e(c,null,{default:i(()=>[sD]),_:1}),e(c,null,{default:i(()=>[nD]),_:1}),e(c,null,{default:i(()=>[lD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[aD]),_:1}),e(c,null,{default:i(()=>[oD]),_:1}),e(c,null,{default:i(()=>[uD]),_:1}),e(c,null,{default:i(()=>[rD]),_:1}),e(c,null,{default:i(()=>[dD]),_:1})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[cD]),_:1}),e(a,null,{default:i(()=>[mD]),_:1}),e(a),e(a),e(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:t.collapsingCellCode},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(C,{name:"folder"}),_D]),_:1}),e(c,null,{default:i(()=>[fD]),_:1}),e(c,null,{default:i(()=>[hD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(C,{name:"folder"}),pD]),_:1}),e(c,null,{default:i(()=>[gD]),_:1}),e(c,null,{default:i(()=>[bD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(C,{name:"folder"}),vD]),_:1}),e(c,null,{default:i(()=>[CD]),_:1}),e(c,null,{default:i(()=>[yD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:t.columnCountCode},{default:i(()=>[e(v,{columns:5},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[wD]),_:1}),e(a,null,{default:i(()=>[$D]),_:1}),e(a,null,{default:i(()=>[AD]),_:1}),e(a,null,{default:i(()=>[SD]),_:1}),e(a,null,{default:i(()=>[kD]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[TD]),_:1}),e(c,null,{default:i(()=>[xD]),_:1}),e(c,null,{default:i(()=>[ED]),_:1}),e(c,null,{default:i(()=>[BD]),_:1}),e(c,null,{default:i(()=>[RD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[zD]),_:1}),e(c,null,{default:i(()=>[PD]),_:1}),e(c,null,{default:i(()=>[MD]),_:1}),e(c,null,{default:i(()=>[DD]),_:1}),e(c,null,{default:i(()=>[FD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[ID]),_:1}),e(c,null,{default:i(()=>[ND]),_:1}),e(c,null,{default:i(()=>[LD]),_:1}),e(c,null,{default:i(()=>[VD]),_:1}),e(c,null,{default:i(()=>[OD]),_:1})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[HD]),_:1}),e(a,null,{default:i(()=>[jD]),_:1}),e(a),e(a),e(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Column Width",description:"Column Width",code:t.columnWidthCode},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,{width:10},{default:i(()=>[qD]),_:1}),e(a,{width:6},{default:i(()=>[JD]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[UD]),_:1}),e(c,null,{default:i(()=>[YD]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[GD]),_:1}),e(c,null,{default:i(()=>[WD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:t.coloredCode},{default:i(()=>[e(v,{color:"red"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[KD]),_:1}),e(a,null,{default:i(()=>[QD]),_:1}),e(a,null,{default:i(()=>[XD]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[ZD]),_:1}),e(c,null,{default:i(()=>[eF]),_:1}),e(c,null,{default:i(()=>[tF]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[iF]),_:1}),e(c,null,{default:i(()=>[sF]),_:1}),e(c,null,{default:i(()=>[nF]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A table's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[lF]),_:1}),e(a,null,{default:i(()=>[aF]),_:1}),e(a,null,{default:i(()=>[oF]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[uF]),_:1}),e(c,null,{default:i(()=>[rF]),_:1}),e(c,null,{default:i(()=>[dF]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[cF]),_:1}),e(c,null,{default:i(()=>[mF]),_:1}),e(c,null,{default:i(()=>[_F]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:t.paddedCode},{default:i(()=>[y("div",null,[e(v,{padded:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[fF]),_:1}),e(a,null,{default:i(()=>[hF]),_:1}),e(a,null,{default:i(()=>[pF]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[gF]),_:1}),e(c,null,{default:i(()=>[bF]),_:1}),e(c,null,{default:i(()=>[vF]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[CF]),_:1}),e(c,null,{default:i(()=>[yF]),_:1}),e(c,null,{default:i(()=>[wF]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{padded:"very"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[$F]),_:1}),e(a,null,{default:i(()=>[AF]),_:1}),e(a,null,{default:i(()=>[SF]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[kF]),_:1}),e(c,null,{default:i(()=>[TF]),_:1}),e(c,null,{default:i(()=>[xF]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[EF]),_:1}),e(c,null,{default:i(()=>[BF]),_:1}),e(c,null,{default:i(()=>[RF]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:t.compactCode},{default:i(()=>[y("div",null,[e(v,{compact:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[zF]),_:1}),e(a,null,{default:i(()=>[PF]),_:1}),e(a,null,{default:i(()=>[MF]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[DF]),_:1}),e(c,null,{default:i(()=>[FF]),_:1}),e(c,null,{default:i(()=>[IF]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[NF]),_:1}),e(c,null,{default:i(()=>[LF]),_:1}),e(c,null,{default:i(()=>[VF]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{compact:"very"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[OF]),_:1}),e(a,null,{default:i(()=>[HF]),_:1}),e(a,null,{default:i(()=>[jF]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[qF]),_:1}),e(c,null,{default:i(()=>[JF]),_:1}),e(c,null,{default:i(()=>[UF]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[YF]),_:1}),e(c,null,{default:i(()=>[GF]),_:1}),e(c,null,{default:i(()=>[WF]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Size",description:"A table can also be small or large",code:t.sizeCode},{default:i(()=>[e(v,{size:"small"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(a,null,{default:i(()=>[KF]),_:1}),e(a,null,{default:i(()=>[QF]),_:1}),e(a,null,{default:i(()=>[XF]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[ZF]),_:1}),e(c,null,{default:i(()=>[eI]),_:1}),e(c,null,{default:i(()=>[tI]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[iI]),_:1}),e(c,null,{default:i(()=>[sI]),_:1}),e(c,null,{default:i(()=>[nI]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[lI]),_:1}),e(c,null,{default:i(()=>[aI]),_:1}),e(c,null,{default:i(()=>[oI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var rI=_e(vB,[["render",uI]]);const dI=E({name:"AdvertisementDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
  <img src="/images/wireframe/image.png" />
</sui-advertisement>`,commonUnitsCode:`<div>
  <sui-advertisement unit="medium rectangle" test="Medium Rectangle" />
  <sui-advertisement unit="banner" test="Banner" />
  <sui-advertisement unit="leaderboard" test="Leaderboard" />
  <sui-advertisement unit="large rectangle" test="Large Rectangle" />
  <sui-advertisement unit="half page" test="Half Page" />
</div>`,mobileCode:`<div>
  <sui-advertisement unit="mobile banner" test="Mobile Banner" />
  <sui-advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
</div>`,rectangleCode:'<sui-advertisement unit="medium rectangle" test="Medium Rectangle" />',buttonCode:`<div>
  <sui-advertisement unit="button" test="Button"  />
  <sui-advertisement unit="square button" test="Square Button"  />
  <sui-advertisement unit="small button" test="Small Button"  />
</div>`,skyscraperCode:`<div>
  <sui-advertisement unit="skyscraper" test="Skyscraper"  />
  <br />
  <sui-advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
</div>`,bannerCode:`<div>
  <sui-advertisement unit="banner" test="Banner" />
  <sui-advertisement unit="vertical banner" test="Vertical Banner" />
  <sui-advertisement unit="top banner" test="Top Banner" />
  <sui-advertisement unit="half banner" test="Half Banner" />
</div>`,leaderboardCode:`<div>
  <sui-advertisement unit="leaderboard" test="Leaderboard" />
  <sui-advertisement unit="large leaderboard" test="Large Leaderboard" />
  <sui-advertisement unit="billboard" test="Billboard" />
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),cI=n("Types"),mI=y("img",{src:J},null,-1),_I=y("br",null,null,-1),fI=n("Variations");function hI(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-advertisement"),u=b("doc-example"),h=b("sui-container");return X(),oe("div",null,[e(f,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[cI]),_:1}),e(u,{title:"Ad",description:"A standard ad",code:t.adCode},{default:i(()=>[e(a,{unit:"medium rectangle"},{default:i(()=>[mI]),_:1})]),_:1},8,["code"]),e(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:t.commonUnitsCode},{default:i(()=>[y("div",null,[e(a,{unit:"medium rectangle",test:"Medium Rectangle"}),e(a,{unit:"banner",test:"Banner"}),e(a,{unit:"leaderboard",test:"Leaderboard"}),e(a,{unit:"large rectangle",test:"Large Rectangle"}),e(a,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:t.mobileCode},{default:i(()=>[y("div",null,[e(a,{unit:"mobile banner",test:"Mobile Banner"}),e(a,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:t.rectangleCode},{default:i(()=>[e(a,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(u,{title:"Button",description:"An ad can use button ad unit size",code:t.buttonCode},{default:i(()=>[y("div",null,[e(a,{unit:"button",test:"Button"}),e(a,{unit:"square button",test:"Square Button"}),e(a,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:t.skyscraperCode},{default:i(()=>[y("div",null,[e(a,{unit:"skyscraper",test:"Skyscraper"}),_I,e(a,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(u,{title:"Banner",description:"An ad can use banner ad unit size",code:t.bannerCode},{default:i(()=>[y("div",null,[e(a,{unit:"banner",test:"Banner"}),e(a,{unit:"vertical banner",test:"Vertical Banner"}),e(a,{unit:"top banner",test:"Top Banner"}),e(a,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:t.leaderboardCode},{default:i(()=>[y("div",null,[e(a,{unit:"leaderboard",test:"Leaderboard"}),e(a,{unit:"large leaderboard",test:"Large Leaderboard"}),e(a,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:t.panoramaCode},{default:i(()=>[e(a,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:t.netboardCode},{default:i(()=>[e(a,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[fI]),_:1}),e(u,{title:"Centered",description:"An advertisement can appear centered",code:t.centeredCode},{default:i(()=>[e(a,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:t.testCode},{default:i(()=>[e(a,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}var pI=_e(dI,[["render",hI]]),po="/vue-fomantic-ui/images/avatar/large/kristy.png",gI="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Ln="/vue-fomantic-ui/images/avatar/large/helen.jpg",Vn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",On="/vue-fomantic-ui/images/avatar/large/elyse.png",bI="/vue-fomantic-ui/images/avatar/large/matthew.png",vI="/vue-fomantic-ui/images/avatar/large/molly.png",go="/vue-fomantic-ui/images/avatar/large/jenny.jpg",bo="/vue-fomantic-ui/images/avatar/large/veronika.jpg",vo="/vue-fomantic-ui/images/avatar/large/steve.jpg";const CI=E({name:"CardDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{cardCode:`<sui-card>
  <sui-image src="/images/avatar/large/kristy.png" wrapped />
  <sui-card-content>
    <sui-card-header>Kristy</sui-card-header>
    <sui-card-meta>
      <span class="date">Joined in 2013</span>
    </sui-card-meta>
    <sui-card-description>
      Kristy is an art director living in New York.
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <a>
      <sui-icon name="user" />
      22 Friends
    </a>
  </sui-card-content>
</sui-card>`,cardsCode:`<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-image src="/images/avatar/small/elliot.jpg" floated="right" size="mini" />
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-meta>Friends of Veronika</sui-card-meta>
      <sui-card-description>Elliot requested permission to view your contact details</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group :widths="2">
        <sui-button basic color="green">Approve</sui-button>
        <sui-button basic color="red">Decline</sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-image src="/images/avatar/small/jenny.jpg" floated="right" size="mini" />
      <sui-card-header>Jenny Hess</sui-card-header>
      <sui-card-meta>New Member</sui-card-meta>
      <sui-card-description>Jenny wants to add you to the group best friends</sui-card-description>
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group :widths="2">
        <sui-button basic color="green">Approve</sui-button>
        <sui-button basic color="red">Decline</sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
</sui-card-group>`,contentBlockCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Project Timeline</sui-card-header>
  </sui-card-content>
  <sui-card-content>
    <sui-header sub>Activity</sui-header>
    <sui-feed size="small">
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
      <sui-feed-event>
        <sui-feed-content>
          <sui-feed-summary>
            <a>Helen Troy</a> added two pictures
          </sui-feed-summary>
        </sui-feed-content>
      </sui-feed-event>
    </sui-feed>
  </sui-card-content>
  <sui-card-content extra>
    <sui-button as="button">Join Project</sui-button>
  </sui-card-content>
</sui-card>`,imageCode:`<sui-card>
  <sui-image src="/images/avatar/large/kristy.png" wrapped />
  <sui-card-content>
    <sui-card-header>Kristy</sui-card-header>
    <sui-card-meta>
      <span class="date">Joined in 2013</span>
    </sui-card-meta>
    <sui-card-description>
      Kristy is an art director living in New York.
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <a>
      <sui-icon name="user" />
      22 Friends
    </a>
  </sui-card-content>
</sui-card>`,headerCode:`<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Elliot Fu is a film-maker from New York.
      </sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Veronika Ossi</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </sui-card-description>
    </sui-card-content>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Jenny Hess</sui-card-header>
      <sui-card-meta>Friend</sui-card-meta>
      <sui-card-description>
        Jenny is a student studying Media Management at the New School
      </sui-card-description>
    </sui-card-content>
  </sui-card>
</sui-card-group>`,metadataCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span>2 days ago</span>
      <a>Animals</a>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
</sui-card>`,buttonsCode:`<sui-card-group>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Elliot Fu</sui-card-header>
      <sui-card-description>
        Elliot Fu is a film-maker from New York.
      </sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      <sui-icon name="add" />
      Add Friend
    </sui-button>
  </sui-card>
  <sui-card>
    <sui-card-content>
      <sui-card-header>Veronika Ossi</sui-card-header>
      <sui-card-description>
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </sui-card-description>
    </sui-card-content>
    <sui-button attached="bottom">
      <sui-icon name="add" />
      Add Friend
    </sui-button>
  </sui-card>
</sui-card-group>`,descriptionCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>2 days ago</sui-card-meta>
    <sui-card-description>
      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
      <p>Many people also have their own barometers for what makes a cute dog.</p>
    </sui-card-description>
  </sui-card-content>
</sui-card>`,extraContentCode:`<sui-card>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>2 days ago</sui-card-meta>
    <sui-card-description>
      <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
      <p>Many people also have their own barometers for what makes a cute dog.</p>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <sui-icon name="check" />
    121 Votes
  </sui-card-content>
</sui-card>`,fluidCardCode:`<sui-grid :columns="3">
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/daniel.jpg" />
      <sui-card-content>
        <sui-card-header>Daniel Louise</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/helen.jpg" />
      <sui-card-content>
        <sui-card-header>Helen Troy</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
  <sui-grid-column>
    <sui-card fluid>
      <sui-image src="/images/avatar/large/elliot.jpg" />
      <sui-card-content>
        <sui-card-header>Elliot Fu</sui-card-header>
      </sui-card-content>
    </sui-card>
  </sui-grid-column>
</sui-grid>`,centeredCardCode:`<sui-card centered>
  <sui-image src="/images/avatar/large/elyse.png" />
  <sui-card-content>
    <sui-card-header>Elyse</sui-card-header>
  </sui-card-content>
</sui-card>`,horizontalCardsCode:`<sui-card horizontal>
  <sui-image src="/images/avatar/large/elyse.png" />
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
</sui-card>`,raisedCode:`<sui-card raised>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
    </div>
  </sui-card-content>
</sui-card>`,linkCardCode:`<sui-card href="#" raised>
  <sui-card-content>
    <sui-card-header>Cute Dog</sui-card-header>
    <sui-card-meta>
      <span class="category">Animals</span>
    </sui-card-meta>
    <sui-card-description>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="right floated author">
      <img class="ui avatar image" src="/images/avatar/small/matt.jpg"> Matt
    </div>
  </sui-card-content>
</sui-card>`,textAlignCode:`<sui-card>
  <sui-card-content>
    <sui-card-header textAlign="center">Jenny Hess</sui-card-header>
    <sui-card-description textAlign="center">
      <p>Jenny is a student studying Media Management at the New School</p>
    </sui-card-description>
  </sui-card-content>
  <sui-card-content extra>
    <div class="center aligned author">
      <img class="ui avatar image" src="/images/avatar/small/jenny.jpg"> Jenny
    </div>
  </sui-card-content>
</sui-card>`,invertedCode:`<sui-segment inverted>
  <sui-card-group inverted>
    <sui-card>
      <sui-image src="/images/avatar/large/matthew.png" />
      <sui-card-content>
        <sui-card-header>Matt Giampietro</sui-card-header>
        <sui-card-meta>
          <a>Friends</a>
        </sui-card-meta>
        <sui-card-description>
          Matthew is an interior designer living in New York.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2013
        </span>
        <a>
          <i class="user icon"></i>
          75 Friends
        </a>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-image src="/images/avatar/large/molly.png" />
      <sui-card-content>
        <sui-card-header>Molly</sui-card-header>
        <sui-card-meta>
          <a>Coworker</a>
        </sui-card-meta>
        <sui-card-description>
          Molly is a personal assistant living in Paris.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2011
        </span>
        <a>
          <i class="user icon"></i>
          35 Friends
        </a>
      </sui-card-content>
    </sui-card>
    <sui-card>
      <sui-image src="/images/avatar/large/elyse.png" />
      <sui-card-content>
        <sui-card-header>Elyse</sui-card-header>
        <sui-card-meta>
          <a>Coworker</a>
        </sui-card-meta>
        <sui-card-description>
          Elyse is a copywriter working in New York.
        </sui-card-description>
      </sui-card-content>
      <sui-card-content extra>
        <span class="right floated">
          Joined in 2014
        </span>
        <a>
          <i class="user icon"></i>
          151 Friends
        </a>
      </sui-card-content>
    </sui-card>
  </sui-card-group>
</sui-segment>`,coloredCode:`<sui-card-group :itemsPerRow="4">
  <sui-card color="primary" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="secondary" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="red" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
  <sui-card color="orange" href="#">
    <sui-image src="/images/wireframe/white-image.png" />
  </sui-card>
</sui-card-group>`,columnCountCode:`<sui-card-group :itemsPerRow="4">
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/wireframe/image.png" />
  </sui-card>
</sui-card-group>`,stackableCode:`<sui-card-group :itemsPerRow="3" stackable>
  <sui-card>
    <sui-image src="/images/avatar/large/elliot.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/helen.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/jenny.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/veronika.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/stevie.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/steve.jpg" />
  </sui-card>
</sui-card-group>`,doublingCode:`<sui-card-group :itemsPerRow="6" doubling>
  <sui-card>
    <sui-image src="/images/avatar/large/elliot.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/helen.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/jenny.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/veronika.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/stevie.jpg" />
  </sui-card>
  <sui-card>
    <sui-image src="/images/avatar/large/steve.jpg" />
  </sui-card>
</sui-card-group>`}}}),yI=n("Types"),wI=n("Kristy"),$I=y("span",{class:"date"},"Joined in 2013",-1),AI=n(" Kristy is an art director living in New York. "),SI=n(" 22 Friends "),kI=n("Elliot Fu"),TI=n("Friends of Veronika"),xI=n("Elliot requested permission to view your contact details"),EI=n("Approve"),BI=n("Decline"),RI=n("Jenny Hess"),zI=n("New Member"),PI=n("Jenny wants to add you to the group best friends"),MI=n("Approve"),DI=n("Decline"),FI=n("Content"),II=n("Project Timeline"),NI=n("Activity"),LI=y("a",null,"Elliot Fu",-1),VI=n(" added "),OI=y("a",null,"Jenny Hess",-1),HI=n(" to the project "),jI=y("a",null,"Stevie Feliciano",-1),qI=n(" was added as an "),JI=y("a",null,"Administrator",-1),UI=y("a",null,"Helen Troy",-1),YI=n(" added two pictures "),GI=n("Join Project"),WI=n("Kristy"),KI=y("span",{class:"date"},"Joined in 2013",-1),QI=n(" Kristy is an art director living in New York. "),XI=n(" 22 Friends "),ZI=n("Elliot Fu"),eN=n("Friend"),tN=n(" Elliot Fu is a film-maker from New York. "),iN=n("Veronika Ossi"),sN=n("Friend"),nN=n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. "),lN=n("Jenny Hess"),aN=n("Friend"),oN=n(" Jenny is a student studying Media Management at the New School "),uN=n("Cute Dog"),rN=y("span",null,"2 days ago",-1),dN=y("a",null,"Animals",-1),cN=n("Elliot Fu"),mN=n(" Elliot Fu is a film-maker from New York. "),_N=n(" Add Friend "),fN=n("Veronika Ossi"),hN=n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. "),pN=n(" Add Friend "),gN=n("Cute Dog"),bN=n("2 days ago"),vN=y("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),CN=y("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),yN=n("Cute Dog"),wN=n("2 days ago"),$N=y("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),AN=y("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),SN=n(" 121 Votes "),kN=n("Variations"),TN=n("Daniel Louise"),xN=n("Helen Troy"),EN=n("Elliot Fu"),BN=n("Elyse"),RN=n("Cute Dog"),zN=y("span",{class:"category"},"Animals",-1),PN=n("Cute Dog"),MN=y("span",{class:"category"},"Animals",-1),DN=y("div",{class:"right floated author"},[y("img",{class:"ui avatar image",src:kn}),n(" Matt ")],-1),FN=n("Cute Dog"),IN=y("span",{class:"category"},"Animals",-1),NN=y("div",{class:"right floated author"},[y("img",{class:"ui avatar image",src:kn}),n(" Matt ")],-1),LN=n("Jenny Hess"),VN=y("p",null,"Jenny is a student studying Media Management at the New School",-1),ON=y("div",{class:"center aligned author"},[y("img",{class:"ui avatar image",src:Sn}),n(" Jenny ")],-1),HN=n("Matt Giampietro"),jN=y("a",null,"Friends",-1),qN=n(" Matthew is an interior designer living in New York. "),JN=y("span",{class:"right floated"}," Joined in 2013 ",-1),UN=y("a",null,[y("i",{class:"user icon"}),n(" 75 Friends ")],-1),YN=n("Molly"),GN=y("a",null,"Coworker",-1),WN=n(" Molly is a personal assistant living in Paris. "),KN=y("span",{class:"right floated"}," Joined in 2011 ",-1),QN=y("a",null,[y("i",{class:"user icon"}),n(" 35 Friends ")],-1),XN=n("Elyse"),ZN=y("a",null,"Coworker",-1),e6=n(" Elyse is a copywriter working in New York. "),t6=y("span",{class:"right floated"}," Joined in 2014 ",-1),i6=y("a",null,[y("i",{class:"user icon"}),n(" 151 Friends ")],-1);function s6(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-image"),u=b("sui-card-header"),h=b("sui-card-meta"),c=b("sui-card-description"),g=b("sui-card-content"),v=b("sui-icon"),r=b("sui-card"),C=b("doc-example"),w=b("sui-button"),A=b("sui-button-group"),p=b("sui-card-group"),$=b("sui-feed-summary"),k=b("sui-feed-content"),x=b("sui-feed-event"),R=b("sui-feed"),z=b("sui-grid-column"),F=b("sui-grid"),P=b("sui-segment"),U=b("sui-container");return X(),oe("div",null,[e(f,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(U,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[yI]),_:1}),e(C,{title:"Card",description:"A single card",code:t.cardCode},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:po,wrapped:""}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[wI]),_:1}),e(h,null,{default:i(()=>[$I]),_:1}),e(c,null,{default:i(()=>[AI]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[y("a",null,[e(v,{name:"user"}),SI])]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Cards",description:"A group of cards",code:t.cardsCode},{default:i(()=>[e(p,null,{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(a,{src:At,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[kI]),_:1}),e(h,null,{default:i(()=>[TI]),_:1}),e(c,null,{default:i(()=>[xI]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[e(A,{widths:2},{default:i(()=>[e(w,{basic:"",color:"green"},{default:i(()=>[EI]),_:1}),e(w,{basic:"",color:"red"},{default:i(()=>[BI]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(a,{src:Sn,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[RI]),_:1}),e(h,null,{default:i(()=>[zI]),_:1}),e(c,null,{default:i(()=>[PI]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[e(A,{widths:2},{default:i(()=>[e(w,{basic:"",color:"green"},{default:i(()=>[MI]),_:1}),e(w,{basic:"",color:"red"},{default:i(()=>[DI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[FI]),_:1}),e(C,{title:"Content Block",description:"A card can contain blocks of content",code:t.contentBlockCode},{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[II]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(m,{sub:""},{default:i(()=>[NI]),_:1}),e(R,{size:"small"},{default:i(()=>[e(x,null,{default:i(()=>[e(k,null,{default:i(()=>[e($,null,{default:i(()=>[LI,VI,OI,HI]),_:1})]),_:1})]),_:1}),e(x,null,{default:i(()=>[e(k,null,{default:i(()=>[e($,null,{default:i(()=>[jI,qI,JI]),_:1})]),_:1})]),_:1}),e(x,null,{default:i(()=>[e(k,null,{default:i(()=>[e($,null,{default:i(()=>[UI,YI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[e(w,{as:"button"},{default:i(()=>[GI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Image",description:"A card can contain an image",code:t.imageCode},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:po,wrapped:""}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[WI]),_:1}),e(h,null,{default:i(()=>[KI]),_:1}),e(c,null,{default:i(()=>[QI]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[y("a",null,[e(v,{name:"user"}),XI])]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Header",description:"A card can contain a header",code:t.headerCode},{default:i(()=>[e(p,null,{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[ZI]),_:1}),e(h,null,{default:i(()=>[eN]),_:1}),e(c,null,{default:i(()=>[tN]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[iN]),_:1}),e(h,null,{default:i(()=>[sN]),_:1}),e(c,null,{default:i(()=>[nN]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[lN]),_:1}),e(h,null,{default:i(()=>[aN]),_:1}),e(c,null,{default:i(()=>[oN]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Metadata",description:"A card can contain content metadata",code:t.metadataCode},{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[uN]),_:1}),e(h,null,{default:i(()=>[rN,dN]),_:1}),e(c,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Buttons",description:"A card can contain buttons",code:t.buttonsCode},{default:i(()=>[e(p,null,{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[cN]),_:1}),e(c,null,{default:i(()=>[mN]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),_N]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[fN]),_:1}),e(c,null,{default:i(()=>[hN]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),pN]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:t.descriptionCode},{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[gN]),_:1}),e(h,null,{default:i(()=>[bN]),_:1}),e(c,null,{default:i(()=>[vN,CN]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[yN]),_:1}),e(h,null,{default:i(()=>[wN]),_:1}),e(c,null,{default:i(()=>[$N,AN]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[e(v,{name:"check"}),SN]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[kN]),_:1}),e(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:t.fluidCardCode},{default:i(()=>[e(F,{columns:3},{default:i(()=>[e(z,null,{default:i(()=>[e(r,{fluid:""},{default:i(()=>[e(a,{src:gI}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[TN]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(r,{fluid:""},{default:i(()=>[e(a,{src:Ln}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[xN]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(r,{fluid:""},{default:i(()=>[e(a,{src:Vn}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[EN]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Centered Card",description:"A card can center itself inside its container",code:t.centeredCardCode},{default:i(()=>[e(r,{centered:""},{default:i(()=>[e(a,{src:On}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[BN]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:t.horizontalCardsCode},{default:i(()=>[e(r,{horizontal:""},{default:i(()=>[e(a,{src:On}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[RN]),_:1}),e(h,null,{default:i(()=>[zN]),_:1}),e(c,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(r,{raised:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[PN]),_:1}),e(h,null,{default:i(()=>[MN]),_:1}),e(c,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[DN]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:t.linkCardCode},{default:i(()=>[e(r,{href:"#",raised:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[FN]),_:1}),e(h,null,{default:i(()=>[IN]),_:1}),e(c,null,{default:i(()=>[e(a,{src:fe})]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[NN]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:t.textAlignCode},{default:i(()=>[e(r,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[LN]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[VN]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[ON]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Inverted",description:"Card's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(P,{inverted:""},{default:i(()=>[e(p,{inverted:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:bI}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[HN]),_:1}),e(h,null,{default:i(()=>[jN]),_:1}),e(c,null,{default:i(()=>[qN]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[JN,UN]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:vI}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[YN]),_:1}),e(h,null,{default:i(()=>[GN]),_:1}),e(c,null,{default:i(()=>[WN]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[KN,QN]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:On}),e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[XN]),_:1}),e(h,null,{default:i(()=>[ZN]),_:1}),e(c,null,{default:i(()=>[e6]),_:1})]),_:1}),e(g,{extra:""},{default:i(()=>[t6,i6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Colored",description:"A card can specify a color",code:t.coloredCode},{default:i(()=>[e(p,{itemsPerRow:4},{default:i(()=>[e(r,{color:"primary",href:"#"},{default:i(()=>[e(a,{src:Gi})]),_:1}),e(r,{color:"secondary",href:"#"},{default:i(()=>[e(a,{src:Gi})]),_:1}),e(r,{color:"red",href:"#"},{default:i(()=>[e(a,{src:Gi})]),_:1}),e(r,{color:"orange",href:"#"},{default:i(()=>[e(a,{src:Gi})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:t.columnCountCode},{default:i(()=>[e(p,{itemsPerRow:4},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:J})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:J})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(p,{itemsPerRow:3,stackable:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:Vn})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:Ln})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:go})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:bo})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:_l})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:vo})]),_:1})]),_:1})]),_:1},8,["code"]),e(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:t.doublingCode},{default:i(()=>[e(p,{itemsPerRow:6,doubling:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:Vn})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:Ln})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:go})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:bo})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:_l})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:vo})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var n6=_e(CI,[["render",s6]]);const l6=E({name:"CommentDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{commentsCode:`<sui-comment-group>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>How artistic!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>This has been very useful for my research. Thanks as well!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
    <div class="comments">
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>Elliot you are always so right :)</sui-comment-text>
          <sui-comment-actions>
            <a>Reply</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </div>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>Dude, this is awesome. Thanks so much</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,avatarCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author>Elliot Fu</sui-comment-author>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,metadataCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/stevie.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Stevie Feliciano</sui-comment-author>
      <sui-comment-metadata>
        <div class="date">2 days ago</div>
        <div class="rating">
          <i class="star icon"></i>
          5 Faves
        </div>
      </sui-comment-metadata>
      <sui-comment-text>
        Hey guys, I hope this example comment is helping you read this documentation.
      </sui-comment-text>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,actionsCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Tom Lukic</sui-comment-author>
      <sui-comment-text>
        This will be great for business reports. I will definitely download this.
      </sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
        <a>Save</a>
        <a>Hide</a>
        <a>
          <i class="expand icon"></i>
          Full-screen
        </a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,replyFormCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/steve.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Steve Jobs</sui-comment-author>
      <sui-comment-metadata>2 days ago</sui-comment-metadata>
      <sui-comment-text>Revolutionary!</sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
      <sui-form reply>
        <sui-form-textarea />
        <sui-button color="primary" icon labelPosition="left">
          <sui-icon name="edit" />
          Add Reply
        </sui-button>
      </sui-form>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,collapsedCode:`<sui-comment-group>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/christian.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Christian Rocha</sui-comment-author>
      <sui-comment-metadata>2 days ago</sui-comment-metadata>
      <sui-comment-text>
        I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
      </sui-comment-text>
      <sui-comment-actions>
        <a>Reply</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group collapsed>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
        <sui-comment-content>
          <sui-comment-author>Elliot Fu</sui-comment-author>
          <sui-comment-metadata>1 days ago</sui-comment-metadata>
          <sui-comment-text>No, it wont</sui-comment-text>
          <sui-comment-actions>
            <a>Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
</sui-comment-group>`,threadedCode:`<sui-comment-group threaded>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,minimalCode:`<sui-comment-group minimal>
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,sizeCode:`<sui-comment-group size="small">
  <sui-header as="h3" dividing>Comments</sui-header>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Matt</sui-comment-author>
      <sui-comment-metadata>
        <span>Today at 5:42PM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        How artistic!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Elliot Fu</sui-comment-author>
      <sui-comment-metadata>
        <span>Yesterday at 12:30AM</span>
      </sui-comment-metadata>
      <sui-comment-text>
        This has been very useful for my research. Thanks as well!
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
    <sui-comment-group>
      <sui-comment>
        <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
        <sui-comment-content>
          <sui-comment-author as="a">Jenny Hess</sui-comment-author>
          <sui-comment-metadata>
            <span>Just now</span>
          </sui-comment-metadata>
          <sui-comment-text>
            Elliot you are always so right :)
          </sui-comment-text>
          <sui-comment-actions>
            <a href="#">Replay</a>
          </sui-comment-actions>
        </sui-comment-content>
      </sui-comment>
    </sui-comment-group>
  </sui-comment>
  <sui-comment>
    <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
    <sui-comment-content>
      <sui-comment-author as="a">Joe Henderson</sui-comment-author>
      <sui-comment-metadata>
        <span>5 days ago</span>
      </sui-comment-metadata>
      <sui-comment-text>
        Dude, this is awesome. Thanks so much
      </sui-comment-text>
      <sui-comment-actions>
        <a href="#">Replay</a>
      </sui-comment-actions>
    </sui-comment-content>
  </sui-comment>
</sui-comment-group>`,invertedCode:`<sui-segment inverted>
  <sui-comment-group inverted>
    <sui-header as="h3" inverted dividing>Comments</sui-header>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/matt.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Matt</sui-comment-author>
        <sui-comment-metadata>
          <span>Today at 5:42PM</span>
        </sui-comment-metadata>
        <sui-comment-text>
          How artistic!
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/elliot.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Elliot Fu</sui-comment-author>
        <sui-comment-metadata>
          <span>Yesterday at 12:30AM</span>
        </sui-comment-metadata>
        <sui-comment-text>
          This has been very useful for my research. Thanks as well!
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
      <sui-comment-group>
        <sui-comment>
          <sui-comment-avatar src="/images/avatar/small/jenny.jpg" />
          <sui-comment-content>
            <sui-comment-author as="a">Jenny Hess</sui-comment-author>
            <sui-comment-metadata>
              <span>Just now</span>
            </sui-comment-metadata>
            <sui-comment-text>
              Elliot you are always so right :)
            </sui-comment-text>
            <sui-comment-actions>
              <a href="#">Replay</a>
            </sui-comment-actions>
          </sui-comment-content>
        </sui-comment>
      </sui-comment-group>
    </sui-comment>
    <sui-comment>
      <sui-comment-avatar src="/images/avatar/small/joe.jpg" />
      <sui-comment-content>
        <sui-comment-author as="a">Joe Henderson</sui-comment-author>
        <sui-comment-metadata>
          <span>5 days ago</span>
        </sui-comment-metadata>
        <sui-comment-text>
          Dude, this is awesome. Thanks so much
        </sui-comment-text>
        <sui-comment-actions>
          <a href="#">Replay</a>
        </sui-comment-actions>
      </sui-comment-content>
    </sui-comment>
  </sui-comment-group>
  </sui-segment>`}}}),a6=n("Types"),o6=n("Comments"),u6=n("Matt"),r6=y("span",null,"Today at 5:42PM",-1),d6=n("How artistic!"),c6=y("a",null,"Reply",-1),m6=n("Elliot Fu"),_6=y("span",null,"Yesterday at 12:30AM",-1),f6=n("This has been very useful for my research. Thanks as well!"),h6=y("a",null,"Reply",-1),p6={class:"comments"},g6=n("Jenny Hess"),b6=y("span",null,"Just now",-1),v6=n("Elliot you are always so right :)"),C6=y("a",null,"Reply",-1),y6=n("Joe Henderson"),w6=y("span",null,"5 days ago",-1),$6=n("Dude, this is awesome. Thanks so much"),A6=y("a",null,"Reply",-1),S6=n("Content"),k6=n("Elliot Fu"),T6=n("Stevie Feliciano"),x6=y("div",{class:"date"},"2 days ago",-1),E6=y("div",{class:"rating"},[y("i",{class:"star icon"}),n(" 5 Faves ")],-1),B6=n(" Hey guys, I hope this example comment is helping you read this documentation. "),R6=n("Tom Lukic"),z6=n(" This will be great for business reports. I will definitely download this. "),P6=y("a",null,"Reply",-1),M6=y("a",null,"Save",-1),D6=y("a",null,"Hide",-1),F6=y("a",null,[y("i",{class:"expand icon"}),n(" Full-screen ")],-1),I6=n("Steve Jobs"),N6=n("2 days ago"),L6=n("Revolutionary!"),V6=y("a",null,"Reply",-1),O6=n(" Add Reply "),H6=n("States"),j6=n("Christian Rocha"),q6=n("2 days ago"),J6=n(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? "),U6=y("a",null,"Reply",-1),Y6=n("Elliot Fu"),G6=n("1 days ago"),W6=n("No, it wont"),K6=y("a",null,"Replay",-1),Q6=n("Variations"),X6=n("Comments"),Z6=n("Matt"),eL=y("span",null,"Today at 5:42PM",-1),tL=n(" How artistic! "),iL=y("a",{href:"#"},"Replay",-1),sL=n("Elliot Fu"),nL=y("span",null,"Yesterday at 12:30AM",-1),lL=n(" This has been very useful for my research. Thanks as well! "),aL=y("a",{href:"#"},"Replay",-1),oL=n("Jenny Hess"),uL=y("span",null,"Just now",-1),rL=n(" Elliot you are always so right :) "),dL=y("a",{href:"#"},"Replay",-1),cL=n("Joe Henderson"),mL=y("span",null,"5 days ago",-1),_L=n(" Dude, this is awesome. Thanks so much "),fL=y("a",{href:"#"},"Replay",-1),hL=n("Comments"),pL=n("Matt"),gL=y("span",null,"Today at 5:42PM",-1),bL=n(" How artistic! "),vL=y("a",{href:"#"},"Replay",-1),CL=n("Elliot Fu"),yL=y("span",null,"Yesterday at 12:30AM",-1),wL=n(" This has been very useful for my research. Thanks as well! "),$L=y("a",{href:"#"},"Replay",-1),AL=n("Jenny Hess"),SL=y("span",null,"Just now",-1),kL=n(" Elliot you are always so right :) "),TL=y("a",{href:"#"},"Replay",-1),xL=n("Joe Henderson"),EL=y("span",null,"5 days ago",-1),BL=n(" Dude, this is awesome. Thanks so much "),RL=y("a",{href:"#"},"Replay",-1),zL=n("Comments"),PL=n("Matt"),ML=y("span",null,"Today at 5:42PM",-1),DL=n(" How artistic! "),FL=y("a",{href:"#"},"Replay",-1),IL=n("Elliot Fu"),NL=y("span",null,"Yesterday at 12:30AM",-1),LL=n(" This has been very useful for my research. Thanks as well! "),VL=y("a",{href:"#"},"Replay",-1),OL=n("Jenny Hess"),HL=y("span",null,"Just now",-1),jL=n(" Elliot you are always so right :) "),qL=y("a",{href:"#"},"Replay",-1),JL=n("Joe Henderson"),UL=y("span",null,"5 days ago",-1),YL=n(" Dude, this is awesome. Thanks so much "),GL=y("a",{href:"#"},"Replay",-1),WL=n("Comments"),KL=n("Matt"),QL=y("span",null,"Today at 5:42PM",-1),XL=n(" How artistic! "),ZL=y("a",{href:"#"},"Replay",-1),eV=n("Elliot Fu"),tV=y("span",null,"Yesterday at 12:30AM",-1),iV=n(" This has been very useful for my research. Thanks as well! "),sV=y("a",{href:"#"},"Replay",-1),nV=n("Jenny Hess"),lV=y("span",null,"Just now",-1),aV=n(" Elliot you are always so right :) "),oV=y("a",{href:"#"},"Replay",-1),uV=n("Joe Henderson"),rV=y("span",null,"5 days ago",-1),dV=n(" Dude, this is awesome. Thanks so much "),cV=y("a",{href:"#"},"Replay",-1);function mV(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-comment-avatar"),u=b("sui-comment-author"),h=b("sui-comment-metadata"),c=b("sui-comment-text"),g=b("sui-comment-actions"),v=b("sui-comment-content"),r=b("sui-comment"),C=b("sui-comment-group"),w=b("doc-example"),A=b("sui-form-textarea"),p=b("sui-icon"),$=b("sui-button"),k=b("sui-form"),x=b("sui-segment"),R=b("sui-container");return X(),oe("div",null,[e(f,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(R,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a6]),_:1}),e(w,{title:"Comments",description:"A basic list of comments",code:t.commentsCode},{default:i(()=>[e(C,null,{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[o6]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[u6]),_:1}),e(h,null,{default:i(()=>[r6]),_:1}),e(c,null,{default:i(()=>[d6]),_:1}),e(g,null,{default:i(()=>[c6]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[m6]),_:1}),e(h,null,{default:i(()=>[_6]),_:1}),e(c,null,{default:i(()=>[f6]),_:1}),e(g,null,{default:i(()=>[h6]),_:1})]),_:1}),y("div",p6,[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[g6]),_:1}),e(h,null,{default:i(()=>[b6]),_:1}),e(c,null,{default:i(()=>[v6]),_:1}),e(g,null,{default:i(()=>[C6]),_:1})]),_:1})]),_:1})])]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[y6]),_:1}),e(h,null,{default:i(()=>[w6]),_:1}),e(c,null,{default:i(()=>[$6]),_:1}),e(g,null,{default:i(()=>[A6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[S6]),_:1}),e(w,{title:"avatar",description:"A comment can contain an image or avatar",code:t.avatarCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[k6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:t.metadataCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/stevie.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[T6]),_:1}),e(h,null,{default:i(()=>[x6,E6]),_:1}),e(c,null,{default:i(()=>[B6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:t.actionsCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[R6]),_:1}),e(c,null,{default:i(()=>[z6]),_:1}),e(g,null,{default:i(()=>[P6,M6,D6,F6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:t.replyFormCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/steve.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[I6]),_:1}),e(h,null,{default:i(()=>[N6]),_:1}),e(c,null,{default:i(()=>[L6]),_:1}),e(g,null,{default:i(()=>[V6]),_:1}),e(k,{reply:""},{default:i(()=>[e(A),e($,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[e(p,{name:"edit"}),O6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[H6]),_:1}),e(w,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:t.collapsedCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/christian.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[j6]),_:1}),e(h,null,{default:i(()=>[q6]),_:1}),e(c,null,{default:i(()=>[J6]),_:1}),e(g,null,{default:i(()=>[U6]),_:1})]),_:1}),e(C,{collapsed:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[Y6]),_:1}),e(h,null,{default:i(()=>[G6]),_:1}),e(c,null,{default:i(()=>[W6]),_:1}),e(g,null,{default:i(()=>[K6]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Q6]),_:1}),e(w,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:t.threadedCode},{default:i(()=>[e(C,{threaded:""},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[X6]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[Z6]),_:1}),e(h,null,{default:i(()=>[eL]),_:1}),e(c,null,{default:i(()=>[tL]),_:1}),e(g,null,{default:i(()=>[iL]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[sL]),_:1}),e(h,null,{default:i(()=>[nL]),_:1}),e(c,null,{default:i(()=>[lL]),_:1}),e(g,null,{default:i(()=>[aL]),_:1})]),_:1}),e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[oL]),_:1}),e(h,null,{default:i(()=>[uL]),_:1}),e(c,null,{default:i(()=>[rL]),_:1}),e(g,null,{default:i(()=>[dL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[cL]),_:1}),e(h,null,{default:i(()=>[mL]),_:1}),e(c,null,{default:i(()=>[_L]),_:1}),e(g,null,{default:i(()=>[fL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:t.minimalCode},{default:i(()=>[e(C,{minimal:""},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[hL]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[pL]),_:1}),e(h,null,{default:i(()=>[gL]),_:1}),e(c,null,{default:i(()=>[bL]),_:1}),e(g,null,{default:i(()=>[vL]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[CL]),_:1}),e(h,null,{default:i(()=>[yL]),_:1}),e(c,null,{default:i(()=>[wL]),_:1}),e(g,null,{default:i(()=>[$L]),_:1})]),_:1}),e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[AL]),_:1}),e(h,null,{default:i(()=>[SL]),_:1}),e(c,null,{default:i(()=>[kL]),_:1}),e(g,null,{default:i(()=>[TL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[xL]),_:1}),e(h,null,{default:i(()=>[EL]),_:1}),e(c,null,{default:i(()=>[BL]),_:1}),e(g,null,{default:i(()=>[RL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Size",description:"Comments can have different sizes",code:t.sizeCode},{default:i(()=>[e(C,{size:"small"},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[zL]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[PL]),_:1}),e(h,null,{default:i(()=>[ML]),_:1}),e(c,null,{default:i(()=>[DL]),_:1}),e(g,null,{default:i(()=>[FL]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[IL]),_:1}),e(h,null,{default:i(()=>[NL]),_:1}),e(c,null,{default:i(()=>[LL]),_:1}),e(g,null,{default:i(()=>[VL]),_:1})]),_:1}),e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[OL]),_:1}),e(h,null,{default:i(()=>[HL]),_:1}),e(c,null,{default:i(()=>[jL]),_:1}),e(g,null,{default:i(()=>[qL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[JL]),_:1}),e(h,null,{default:i(()=>[UL]),_:1}),e(c,null,{default:i(()=>[YL]),_:1}),e(g,null,{default:i(()=>[GL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Inverted",description:"Comments's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(x,{inverted:""},{default:i(()=>[e(C,{inverted:""},{default:i(()=>[e(m,{as:"h3",inverted:"",dividing:""},{default:i(()=>[WL]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[KL]),_:1}),e(h,null,{default:i(()=>[QL]),_:1}),e(c,null,{default:i(()=>[XL]),_:1}),e(g,null,{default:i(()=>[ZL]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[eV]),_:1}),e(h,null,{default:i(()=>[tV]),_:1}),e(c,null,{default:i(()=>[iV]),_:1}),e(g,null,{default:i(()=>[sV]),_:1})]),_:1}),e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[nV]),_:1}),e(h,null,{default:i(()=>[lV]),_:1}),e(c,null,{default:i(()=>[aV]),_:1}),e(g,null,{default:i(()=>[oV]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[uV]),_:1}),e(h,null,{default:i(()=>[rV]),_:1}),e(c,null,{default:i(()=>[dV]),_:1}),e(g,null,{default:i(()=>[cV]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var _V=_e(l6,[["render",mV]]);const fV=E({name:"FeedDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{feedCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/elliot.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-summary>
        <sui-feed-user>Elliot Fu</sui-feed-user> added you as a friend
        <sui-feed-date>1 Hour Ago</sui-feed-date>
      </sui-feed-summary>
      <sui-feed-meta>
        <sui-feed-like>
          <sui-icon name="like" /> 4 Likes
        </sui-feed-like>
      </sui-feed-meta>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,labelCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/elliot.jpg">
    </sui-feed-label>
    <sui-feed-content>
      You added Elliot Fu to the group <a>Coworkers</a>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,dateCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/jenny.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-date>
        3 days ago
      </sui-feed-date>
      <sui-feed-summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,additionalInfoCode:`<sui-feed>
  <sui-feed-event>
    <sui-feed-label>
      <img src="/images/avatar/small/helen.jpg">
    </sui-feed-label>
    <sui-feed-content>
      <sui-feed-date>
        3 days ago
      </sui-feed-date>
      <sui-feed-summary>
        <a>Helen Troy</a> added 2 photos
      </sui-feed-summary>
      <sui-feed-extra images>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </sui-feed-extra>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`,sizeCode:`<sui-feed size="small">
  <sui-header as="h4">Followers Activity</sui-header>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
  <sui-feed-event>
    <sui-feed-content>
      <sui-feed-summary>
        <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
      </sui-feed-summary>
    </sui-feed-content>
  </sui-feed-event>
</sui-feed>`}}}),hV=n("Types"),pV=y("img",{src:At},null,-1),gV=n("Elliot Fu"),bV=n(" added you as a friend "),vV=n("1 Hour Ago"),CV=n(" 4 Likes "),yV=n("Content"),wV=y("img",{src:At},null,-1),$V=n(" You added Elliot Fu to the group "),AV=y("a",null,"Coworkers",-1),SV=y("img",{src:Sn},null,-1),kV=n(" 3 days ago "),TV=n(" You added "),xV=y("a",null,"Jenny Hess",-1),EV=n(" to your "),BV=y("a",null,"coworker",-1),RV=n(" group. "),zV=y("img",{src:Wi},null,-1),PV=n(" 3 days ago "),MV=y("a",null,"Helen Troy",-1),DV=n(" added 2 photos "),FV=y("a",null,[y("img",{src:J})],-1),IV=y("a",null,[y("img",{src:J})],-1),NV=n("Variations"),LV=n("Followers Activity"),VV=y("a",null,"Elliot Fu",-1),OV=n(" added "),HV=y("a",null,"Jenny Hess",-1),jV=n(" as a friend "),qV=y("a",null,"Stevie Feliciano",-1),JV=n(" added "),UV=y("a",null,"Elliot Fu",-1),YV=n(" as a friend "),GV=y("a",null,"Helen Troy",-1),WV=n(" added "),KV=y("a",null,"Christian Rocha",-1),QV=n(" as a friend "),XV=y("img",{src:At},null,-1),ZV=y("div",{class:"date"},"Just now",-1),e7=y("a",{class:"user"},"Elliot Fu",-1),t7=n(" posted on his page "),i7=n(" Hey there ! ");function s7(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-feed-label"),u=b("sui-feed-user"),h=b("sui-feed-date"),c=b("sui-feed-summary"),g=b("sui-icon"),v=b("sui-feed-like"),r=b("sui-feed-meta"),C=b("sui-feed-content"),w=b("sui-feed-event"),A=b("sui-feed"),p=b("doc-example"),$=b("sui-feed-extra"),k=b("sui-segment"),x=b("sui-container");return X(),oe("div",null,[e(f,{title:"Feed",sub:"A feed presents user activity chronologically"}),e(x,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[hV]),_:1}),e(p,{title:"Feed",description:"A feed",code:t.feedCode},{default:i(()=>[e(A,null,{default:i(()=>[e(w,null,{default:i(()=>[e(a,null,{default:i(()=>[pV]),_:1}),e(C,null,{default:i(()=>[e(c,null,{default:i(()=>[e(u,null,{default:i(()=>[gV]),_:1}),bV,e(h,null,{default:i(()=>[vV]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(g,{name:"like"}),CV]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[yV]),_:1}),e(p,{title:"Label",description:"An event can contain an image or icon label",code:t.labelCode},{default:i(()=>[e(A,null,{default:i(()=>[e(w,null,{default:i(()=>[e(a,null,{default:i(()=>[wV]),_:1}),e(C,null,{default:i(()=>[$V,AV]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Date",description:"An event or an event summary can contain a date",code:t.dateCode},{default:i(()=>[e(A,null,{default:i(()=>[e(w,null,{default:i(()=>[e(a,null,{default:i(()=>[SV]),_:1}),e(C,null,{default:i(()=>[e(h,null,{default:i(()=>[kV]),_:1}),e(c,null,{default:i(()=>[TV,xV,EV,BV,RV]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:t.additionalInfoCode},{default:i(()=>[e(A,null,{default:i(()=>[e(w,null,{default:i(()=>[e(a,null,{default:i(()=>[zV]),_:1}),e(C,null,{default:i(()=>[e(h,null,{default:i(()=>[PV]),_:1}),e(c,null,{default:i(()=>[MV,DV]),_:1}),e($,{images:""},{default:i(()=>[FV,IV]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[NV]),_:1}),e(p,{title:"Size",description:"A feed can have different sizes",code:t.sizeCode},{default:i(()=>[e(A,{size:"small"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[LV]),_:1}),e(w,null,{default:i(()=>[e(C,null,{default:i(()=>[e(c,null,{default:i(()=>[VV,OV,HV,jV]),_:1})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(C,null,{default:i(()=>[e(c,null,{default:i(()=>[qV,JV,UV,YV]),_:1})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(C,null,{default:i(()=>[e(c,null,{default:i(()=>[GV,WV,KV,QV]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{title:"Inverted",description:"A feed's color can be inverted",code:t.invertedCode},{default:i(()=>[e(k,{inverted:""},{default:i(()=>[e(A,{inverted:""},{default:i(()=>[e(w,null,{default:i(()=>[e(a,null,{default:i(()=>[XV]),_:1}),e(C,null,{default:i(()=>[ZV,e(c,null,{default:i(()=>[e7,t7]),_:1}),e($,{text:""},{default:i(()=>[i7]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var n7=_e(fV,[["render",s7]]);const l7=E({name:"ItemDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{itemsCode:`<sui-item-group>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Header</sui-item-header>
      <sui-item-meta>
        <span>Description</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        Additional Details
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Header</sui-item-header>
      <sui-item-meta>
        <span>Description</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        Additional Details
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,imageCode:`<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
  </sui-item>
</sui-item-group>`,contentCode:`<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content A
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content B
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      Content C
    </sui-item-content>
  </sui-item>
</sui-item-group>`,headerCode:`<sui-item-group>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content verticalAlign="middle">
      <sui-item-header>12 Years a Slave</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,metadataCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Arrowhead Valley Camp</sui-item-header>
      <sui-item-meta>
        <span class="price">$1200</span>
        <span class="stay">1 Month</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Buck's Homebrew Stayaway</sui-item-header>
      <sui-item-meta>
        <span class="price">$1000</span>
        <span class="stay">2 Weeks</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,descriptionCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Cute Dog</sui-item-header>
      <sui-item-description>
        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </sui-item-description>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,extraContentCode:`<sui-item-group>
  <sui-item>
    <sui-item-content>
      <sui-item-header>Cute Dog</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-icon name="check" color="green" />
        121 Votes
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,dividedCode:`<sui-item-group divided>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>12 Years a Slave</sui-item-header>
      <sui-item-meta>
        <span class="cinema">Union Square 14</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-label>IMAX</sui-label>
        <sui-label>
          <sui-icon name="globe" /> Additional Languages
        </sui-label>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>My Neighbor Totoro</sui-item-header>
      <sui-item-meta>
        <span class="cinema">IFC Cinema</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right" color="primary">
          Buy tickets
          <sui-icon name="right chevron" />
        </sui-button>
        <sui-label>Limited</sui-label>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-item-image>
      <img src="/images/wireframe/image.png">
    </sui-item-image>
    <sui-item-content>
      <sui-item-header>Watchmen</sui-item-header>
      <sui-item-meta>
        <span class="cinema">IFC</span>
      </sui-item-meta>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right" color="primary">
          Buy tickets
          <sui-icon name="right chevron" />
        </sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,relaxedCode:`<sui-item-group>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">12 Years a Slave</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">My Neighbor Totoro</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="tiny" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header as="a">Watchmen</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,verticalAlignCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content>
      <sui-item-header>Top Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Middle Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="bottom">
      <sui-item-header>Bottom Aligned</sui-item-header>
    </sui-item-content>
  </sui-item>
</sui-item-group>`,floatedContentCode:`<sui-item-group>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content A</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content B</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
  <sui-item>
    <sui-image size="small" src="/images/wireframe/image.png" />
    <sui-item-content verticalAlign="middle">
      <sui-item-header>Content C</sui-item-header>
      <sui-item-description>
        <img src="/images/wireframe/short-paragraph.png">
      </sui-item-description>
      <sui-item-extra>
        <sui-button floated="right">Action</sui-button>
      </sui-item-extra>
    </sui-item-content>
  </sui-item>
</sui-item-group>`}}}),a7=n("Types"),o7=y("img",{src:J},null,-1),u7=n("Header"),r7=y("span",null,"Description",-1),d7=y("img",{src:ye},null,-1),c7=n(" Additional Details "),m7=y("img",{src:J},null,-1),_7=n("Header"),f7=y("span",null,"Description",-1),h7=y("img",{src:ye},null,-1),p7=n(" Additional Details "),g7=n("Content"),b7=y("img",{src:J},null,-1),v7=y("img",{src:J},null,-1),C7=y("img",{src:J},null,-1),y7=y("img",{src:J},null,-1),w7=n(" Content A "),$7=y("img",{src:J},null,-1),A7=n(" Content B "),S7=y("img",{src:J},null,-1),k7=n(" Content C "),T7=y("img",{src:J},null,-1),x7=n("12 Years a Slave"),E7=n("Arrowhead Valley Camp"),B7=y("span",{class:"price"},"$1200",-1),R7=y("span",{class:"stay"},"1 Month",-1),z7=y("img",{src:ye},null,-1),P7=n("Buck's Homebrew Stayaway"),M7=y("span",{class:"price"},"$1000",-1),D7=y("span",{class:"stay"},"2 Weeks",-1),F7=y("img",{src:ye},null,-1),I7=n("Cute Dog"),N7=y("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),L7=y("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),V7=n("Cute Dog"),O7=y("img",{src:ye},null,-1),H7=n(" 121 Votes "),j7=n("Variations"),q7=y("img",{src:J},null,-1),J7=n("12 Years a Slave"),U7=y("span",{class:"cinema"},"Union Square 14",-1),Y7=y("img",{src:ye},null,-1),G7=n("IMAX"),W7=n(" Additional Languages "),K7=y("img",{src:J},null,-1),Q7=n("My Neighbor Totoro"),X7=y("span",{class:"cinema"},"IFC Cinema",-1),Z7=y("img",{src:ye},null,-1),eO=n(" Buy tickets "),tO=n("Limited"),iO=y("img",{src:J},null,-1),sO=n("Watchmen"),nO=y("span",{class:"cinema"},"IFC",-1),lO=y("img",{src:ye},null,-1),aO=n(" Buy tickets "),oO=n("12 Years a Slave"),uO=n("My Neighbor Totoro"),rO=n("Watchmen"),dO=n("Top Aligned"),cO=n("Middle Aligned"),mO=n("Bottom Aligned"),_O=n("Content A"),fO=y("img",{src:ye},null,-1),hO=n("Action"),pO=n("Content B"),gO=y("img",{src:ye},null,-1),bO=n("Action"),vO=n("Content C"),CO=y("img",{src:ye},null,-1),yO=n("Action"),wO=n("Arrowhead Valley Camp"),$O=y("span",{class:"price"},"$1200",-1),AO=y("span",{class:"stay"},"1 Month",-1),SO=y("img",{src:ye},null,-1),kO=n("Buck's Homebrew Stayaway"),TO=y("span",{class:"price"},"$1000",-1),xO=y("span",{class:"stay"},"2 Weeks",-1),EO=y("img",{src:ye},null,-1);function BO(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-item-image"),u=b("sui-item-header"),h=b("sui-item-meta"),c=b("sui-item-description"),g=b("sui-item-extra"),v=b("sui-item-content"),r=b("sui-item"),C=b("sui-item-group"),w=b("doc-example"),A=b("sui-image"),p=b("sui-icon"),$=b("sui-label"),k=b("sui-button"),x=b("sui-segment"),R=b("sui-container");return X(),oe("div",null,[e(f,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(R,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a7]),_:1}),e(w,{title:"Items",description:"A group of items",code:t.itemsCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[o7]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[u7]),_:1}),e(h,null,{default:i(()=>[r7]),_:1}),e(c,null,{default:i(()=>[d7]),_:1}),e(g,null,{default:i(()=>[c7]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[m7]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[_7]),_:1}),e(h,null,{default:i(()=>[f7]),_:1}),e(c,null,{default:i(()=>[h7]),_:1}),e(g,null,{default:i(()=>[p7]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[g7]),_:1}),e(w,{title:"Image",description:"An item can contain an image",code:t.imageCode},{default:i(()=>[e(C,{divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[b7]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[v7]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[C7]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Content",description:"An item can contain content",code:t.contentCode},{default:i(()=>[e(C,{divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[y7]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[w7]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[$7]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[A7]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[S7]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[k7]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Header",description:"An item can contain a header",code:t.headerCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[T7]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[x7]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Metadata",description:"An item can contain content metadata",code:t.metadataCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[E7]),_:1}),e(h,null,{default:i(()=>[B7,R7]),_:1}),e(c,null,{default:i(()=>[z7]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[P7]),_:1}),e(h,null,{default:i(()=>[M7,D7]),_:1}),e(c,null,{default:i(()=>[F7]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:t.descriptionCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[I7]),_:1}),e(c,null,{default:i(()=>[N7,L7]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[V7]),_:1}),e(c,null,{default:i(()=>[O7]),_:1}),e(g,null,{default:i(()=>[e(p,{name:"check",color:"green"}),H7]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[j7]),_:1}),e(w,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:t.dividedCode},{default:i(()=>[e(C,{divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[q7]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[J7]),_:1}),e(h,null,{default:i(()=>[U7]),_:1}),e(c,null,{default:i(()=>[Y7]),_:1}),e(g,null,{default:i(()=>[e($,null,{default:i(()=>[G7]),_:1}),e($,null,{default:i(()=>[e(p,{name:"globe"}),W7]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[K7]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[Q7]),_:1}),e(h,null,{default:i(()=>[X7]),_:1}),e(c,null,{default:i(()=>[Z7]),_:1}),e(g,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[eO,e(p,{name:"right chevron"})]),_:1}),e($,null,{default:i(()=>[tO]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(a,null,{default:i(()=>[iO]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[sO]),_:1}),e(h,null,{default:i(()=>[nO]),_:1}),e(c,null,{default:i(()=>[lO]),_:1}),e(g,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[aO,e(p,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:t.relaxedCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(A,{size:"tiny",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[oO]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"tiny",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[uO]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"tiny",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[rO]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:t.verticalAlignCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[dO]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[cO]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,{verticalAlign:"bottom"},{default:i(()=>[e(u,null,{default:i(()=>[mO]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Floated Content",description:"Any content element can be floated left or right",code:t.floatedContentCode},{default:i(()=>[e(C,null,{default:i(()=>[e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[_O]),_:1}),e(c,null,{default:i(()=>[fO]),_:1}),e(g,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[hO]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[pO]),_:1}),e(c,null,{default:i(()=>[gO]),_:1}),e(g,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[bO]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[vO]),_:1}),e(c,null,{default:i(()=>[CO]),_:1}),e(g,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[yO]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(w,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:t.invertedCode},{default:i(()=>[e(x,{inverted:""},{default:i(()=>[e(C,{inverted:""},{default:i(()=>[e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[wO]),_:1}),e(h,null,{default:i(()=>[$O,AO]),_:1}),e(c,null,{default:i(()=>[SO]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(A,{size:"small",src:J}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[kO]),_:1}),e(h,null,{default:i(()=>[TO,xO]),_:1}),e(c,null,{default:i(()=>[EO]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var RO=_e(l7,[["render",BO]]);const zO=E({name:"StatisticDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
  <sui-statistic value="22" label="Faves" />
  <sui-statistic value="31,200" label="Views" />
  <sui-statistic value="22" label="Members" />
</sui-statistic-group>`,valueCode:`<sui-statistic-group>
  <sui-statistic value="22" label="Faves" />
  <sui-statistic>
    <sui-statistic-value text>
      Three<br>
      Thousand
    </sui-statistic-value>
    <sui-statistic-label>Signups</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-icon name="plane" /> 5
    </sui-statistic-value>
    <sui-statistic-label>Flights</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-image circular inline src="/images/avatar/small/joe.jpg" />
      42
    </sui-statistic-value>
    <sui-statistic-label>Team Members</sui-statistic-label>
  </sui-statistic>
</sui-statistic-group>`,labelCode:'<sui-statistic value="2,204" label="Views" />',horizontalCode:'<sui-statistic horizontal value="2,204" label="Views" />',coloredCode:`<sui-statistic-group>
  <sui-statistic color="red" value="27" label="Red" />
  <sui-statistic color="orange" value="8" label="Orange" />
  <sui-statistic color="yellow" value="28" label="Yellow" />
  <sui-statistic color="olive" value="7" label="Olive" />
  <sui-statistic color="green" value="14" label="Green" />
  <sui-statistic color="teal" value="82" label="Teal" />
  <sui-statistic color="blue" value="1" label="Blue" />
  <sui-statistic color="violet" value="22" label="Violet" />
  <sui-statistic color="purple" value="23" label="Purple" />
  <sui-statistic color="pink" value="15" label="Pink" />
  <sui-statistic color="brown" value="36" label="Brown" />
  <sui-statistic color="grey" value="49" label="Grey" />
</sui-statistic-group>`,invertedCode:`<sui-segment inverted>
  <sui-statistic-group inverted>
    <sui-statistic color="red" value="27" label="Red" />
    <sui-statistic color="orange" value="8" label="Orange" />
    <sui-statistic color="yellow" value="28" label="Yellow" />
    <sui-statistic color="olive" value="7" label="Olive" />
    <sui-statistic color="green" value="14" label="Green" />
    <sui-statistic color="teal" value="82" label="Teal" />
    <sui-statistic color="blue" value="1" label="Blue" />
    <sui-statistic color="violet" value="22" label="Violet" />
    <sui-statistic color="purple" value="23" label="Purple" />
    <sui-statistic color="pink" value="15" label="Pink" />
    <sui-statistic color="brown" value="36" label="Brown" />
    <sui-statistic color="grey" value="49" label="Grey" />
  </sui-statistic-group>
</sui-segment>`,stackableCode:`<sui-statistic-group stackable>
  <sui-statistic color="red" value="27" label="Red" />
  <sui-statistic color="orange" value="8" label="Orange" />
  <sui-statistic color="yellow" value="28" label="Yellow" />
  <sui-statistic color="olive" value="7" label="Olive" />
  <sui-statistic color="green" value="14" label="Green" />
  <sui-statistic color="teal" value="82" label="Teal" />
  <sui-statistic color="blue" value="1" label="Blue" />
  <sui-statistic color="violet" value="22" label="Violet" />
  <sui-statistic color="purple" value="23" label="Purple" />
  <sui-statistic color="pink" value="15" label="Pink" />
  <sui-statistic color="brown" value="36" label="Brown" />
  <sui-statistic color="grey" value="49" label="Grey" />
</sui-statistic-group>`,evenlyDividedCode:`<sui-statistic-group :widths="4">
  <sui-statistic value="22" label="Faves" />
  <sui-statistic>
    <sui-statistic-value text>
      Three<br>
      Thousand
    </sui-statistic-value>
    <sui-statistic-label>Signups</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-icon name="plane" /> 5
    </sui-statistic-value>
    <sui-statistic-label>Flights</sui-statistic-label>
  </sui-statistic>
  <sui-statistic>
    <sui-statistic-value>
      <sui-image circular inline src="/images/avatar/small/joe.jpg" />
      42
    </sui-statistic-value>
    <sui-statistic-label>Team Members</sui-statistic-label>
  </sui-statistic>
</sui-statistic-group>`,floatedCode:`<sui-segment>
  <sui-statistic floated="right" value="2,204" label="Views" />
  <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  <sui-statistic floated="left" value="2,204" label="Views" />
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
</sui-segment>`,sizeCode:`<sui-statistic size="mini" value="2,204" label="Views" />
<sui-statistic size="tiny" value="2,204" label="Views" />
<sui-statistic size="small" value="2,204" label="Views" />
<sui-statistic value="2,204" label="Views" />
<sui-statistic size="large" value="2,204" label="Views" />
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),PO=n("Types"),MO=n("Content"),DO=n(" Three"),FO=y("br",null,null,-1),IO=n(" Thousand "),NO=n("Signups"),LO=n(" 5 "),VO=n("Flights"),OO=n(" 42 "),HO=n("Team Members"),jO=n("Variations"),qO=n(" Three"),JO=y("br",null,null,-1),UO=n(" Thousand "),YO=n("Signups"),GO=n(" 5 "),WO=n("Flights"),KO=n(" 42 "),QO=n("Team Members"),XO=y("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),ZO=y("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),eH=y("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),tH=y("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function iH(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-statistic"),u=b("doc-example"),h=b("sui-statistic-group"),c=b("sui-statistic-value"),g=b("sui-statistic-label"),v=b("sui-icon"),r=b("sui-image"),C=b("sui-segment"),w=b("sui-container");return X(),oe("div",null,[e(f,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(w,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[PO]),_:1}),e(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:t.statisticCode},{default:i(()=>[e(a,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(u,{title:"Statistic Group",description:"A group of statistics",code:t.groupCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{value:"22",label:"Faves"}),e(a,{value:"31,200",label:"Views"}),e(a,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[MO]),_:1}),e(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:t.valueCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{value:"22",label:"Faves"}),e(a,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[DO,FO,IO]),_:1}),e(g,null,{default:i(()=>[NO]),_:1})]),_:1}),e(a,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),LO]),_:1}),e(g,null,{default:i(()=>[VO]),_:1})]),_:1}),e(a,null,{default:i(()=>[e(c,null,{default:i(()=>[e(r,{circular:"",inline:"",src:ml}),OO]),_:1}),e(g,null,{default:i(()=>[HO]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:t.labelCode},{default:i(()=>[e(a,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[jO]),_:1}),e(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:t.horizontalCode},{default:i(()=>[e(a,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{color:"red",value:"27",label:"Red"}),e(a,{color:"orange",value:"8",label:"Orange"}),e(a,{color:"yellow",value:"28",label:"Yellow"}),e(a,{color:"olive",value:"7",label:"Olive"}),e(a,{color:"green",value:"14",label:"Green"}),e(a,{color:"teal",value:"82",label:"Teal"}),e(a,{color:"blue",value:"1",label:"Blue"}),e(a,{color:"violet",value:"22",label:"Violet"}),e(a,{color:"purple",value:"23",label:"Purple"}),e(a,{color:"pink",value:"15",label:"Pink"}),e(a,{color:"brown",value:"36",label:"Brown"}),e(a,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:t.invertedCode},{default:i(()=>[e(C,{inverted:""},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(a,{color:"red",value:"27",label:"Red"}),e(a,{color:"orange",value:"8",label:"Orange"}),e(a,{color:"yellow",value:"28",label:"Yellow"}),e(a,{color:"olive",value:"7",label:"Olive"}),e(a,{color:"green",value:"14",label:"Green"}),e(a,{color:"teal",value:"82",label:"Teal"}),e(a,{color:"blue",value:"1",label:"Blue"}),e(a,{color:"violet",value:"22",label:"Violet"}),e(a,{color:"purple",value:"23",label:"Purple"}),e(a,{color:"pink",value:"15",label:"Pink"}),e(a,{color:"brown",value:"36",label:"Brown"}),e(a,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(h,{stackable:""},{default:i(()=>[e(a,{color:"red",value:"27",label:"Red"}),e(a,{color:"orange",value:"8",label:"Orange"}),e(a,{color:"yellow",value:"28",label:"Yellow"}),e(a,{color:"olive",value:"7",label:"Olive"}),e(a,{color:"green",value:"14",label:"Green"}),e(a,{color:"teal",value:"82",label:"Teal"}),e(a,{color:"blue",value:"1",label:"Blue"}),e(a,{color:"violet",value:"22",label:"Violet"}),e(a,{color:"purple",value:"23",label:"Purple"}),e(a,{color:"pink",value:"15",label:"Pink"}),e(a,{color:"brown",value:"36",label:"Brown"}),e(a,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:t.evenlyDividedCode},{default:i(()=>[e(h,{widths:4},{default:i(()=>[e(a,{value:"22",label:"Faves"}),e(a,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[qO,JO,UO]),_:1}),e(g,null,{default:i(()=>[YO]),_:1})]),_:1}),e(a,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),GO]),_:1}),e(g,null,{default:i(()=>[WO]),_:1})]),_:1}),e(a,null,{default:i(()=>[e(c,null,{default:i(()=>[e(r,{circular:"",inline:"",src:ml}),KO]),_:1}),e(g,null,{default:i(()=>[QO]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(C,null,{default:i(()=>[e(a,{floated:"right",value:"2,204",label:"Views"}),XO,ZO,e(a,{floated:"left",value:"2,204",label:"Views"}),eH,tH]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A statistic can vary in size",code:t.sizeCode},{default:i(()=>[e(a,{size:"mini",value:"2,204",label:"Views"}),e(a,{size:"tiny",value:"2,204",label:"Views"}),e(a,{size:"small",value:"2,204",label:"Views"}),e(a,{value:"2,204",label:"Views"}),e(a,{size:"large",value:"2,204",label:"Views"}),e(a,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}var sH=_e(zO,[["render",iH]]);const nH=E({name:"AccordionDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{accordionCode:`<sui-accordion>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`,styledCode:`<sui-accordion styled>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`,fluidCode:`<sui-accordion fluid styled>
  <sui-accordion-tab title="What is a dog?">
    <p>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households
      across the world.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="What kinds of dogs are there?">
    <p>
      There are many breeds of dogs. Each breed varies in size and
      temperament. Owners often select a breed of dog that they find to be
      compatible with their own lifestyle and desires from a companion.
    </p>
  </sui-accordion-tab>
  <sui-accordion-tab title="How do you acquire a dog?">
    <p>
      Three common ways for a prospective owner to acquire a dog is from
      pet shops, private owners, or shelters.
    </p>
    <p>
      A pet shop may be the most convenient way to buy a dog. Buying a dog
      from a private owner allows you to assess the pedigree and
      upbringing of your dog before choosing to take it home. Lastly,
      finding your dog from a shelter, helps give a good home to a dog who
      may not find one so readily.
    </p>
  </sui-accordion-tab>
</sui-accordion>`,invertedCode:`<sui-segment inverted>
  <sui-accordion inverted>
    <sui-accordion-tab title="What is a dog?">
      <p>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </p>
    </sui-accordion-tab>
    <sui-accordion-tab title="What kinds of dogs are there?">
      <p>
        There are many breeds of dogs. Each breed varies in size and
        temperament. Owners often select a breed of dog that they find to be
        compatible with their own lifestyle and desires from a companion.
      </p>
    </sui-accordion-tab>
    <sui-accordion-tab title="How do you acquire a dog?">
      <p>
        Three common ways for a prospective owner to acquire a dog is from
        pet shops, private owners, or shelters.
      </p>
      <p>
        A pet shop may be the most convenient way to buy a dog. Buying a dog
        from a private owner allows you to assess the pedigree and
        upbringing of your dog before choosing to take it home. Lastly,
        finding your dog from a shelter, helps give a good home to a dog who
        may not find one so readily.
      </p>
    </sui-accordion-tab>
  </sui-accordion>
</sui-segment>`}}}),lH=n("Types"),aH=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),oH=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),uH=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),rH=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),dH=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),cH=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),mH=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),_H=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),fH=n("Variations"),hH=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),pH=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),gH=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),bH=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),vH=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),CH=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),yH=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),wH=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),$H=n("Usage"),AH=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),SH=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),kH=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),TH=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function xH(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-accordion-tab"),u=b("sui-accordion"),h=b("doc-example"),c=b("sui-segment"),g=b("sui-container");return X(),oe("div",null,[e(f,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[lH]),_:1}),e(h,{title:"Accordion",description:"A standard accordion",code:t.accordionCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{title:"What is a dog?"},{default:i(()=>[aH]),_:1}),e(a,{title:"What kinds of dogs are there?"},{default:i(()=>[oH]),_:1}),e(a,{title:"How do you acquire a dog?"},{default:i(()=>[uH,rH]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Styled",description:"A styled accordion adds basic formatting",code:t.styledCode},{default:i(()=>[e(u,{styled:""},{default:i(()=>[e(a,{title:"What is a dog?"},{default:i(()=>[dH]),_:1}),e(a,{title:"What kinds of dogs are there?"},{default:i(()=>[cH]),_:1}),e(a,{title:"How do you acquire a dog?"},{default:i(()=>[mH,_H]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[fH]),_:1}),e(h,{title:"Fluid",description:"An accordion can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",styled:""},{default:i(()=>[e(a,{title:"What is a dog?"},{default:i(()=>[hH]),_:1}),e(a,{title:"What kinds of dogs are there?"},{default:i(()=>[pH]),_:1}),e(a,{title:"How do you acquire a dog?"},{default:i(()=>[gH,bH]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(c,{inverted:""},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(a,{title:"What is a dog?"},{default:i(()=>[vH]),_:1}),e(a,{title:"What kinds of dogs are there?"},{default:i(()=>[CH]),_:1}),e(a,{title:"How do you acquire a dog?"},{default:i(()=>[yH,wH]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[$H]),_:1}),e(h,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:t.multipleCode},{default:i(()=>[e(u,{multiple:""},{default:i(()=>[e(a,{title:"What is a dog?"},{default:i(()=>[AH]),_:1}),e(a,{title:"What kinds of dogs are there?"},{default:i(()=>[SH]),_:1}),e(a,{title:"How do you acquire a dog?"},{default:i(()=>[kH,TH]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var EH=_e(nH,[["render",xH]]);const BH=E({name:"CalendarDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{calendar1:L(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}}),RH=n("Types");function zH(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-calendar"),u=b("doc-example"),h=b("sui-container");return X(),oe("div",null,[e(f,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[RH]),_:1}),e(u,{title:"Calendar",description:"A standard calendar",code:t.calendarCode},{default:i(()=>[e(a,{modelValue:t.calendar1,"onUpdate:modelValue":s[0]||(s[0]=c=>t.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}var PH=_e(BH,[["render",zH]]);const MH=E({name:"PropertyListTable",props:{properties:Array}}),DH=n("Name"),FH=n("Type"),IH=n("Default"),NH=n("Description");function LH(t,s,l,o,d,_){const f=b("sui-table-header-cell"),m=b("sui-table-row"),a=b("sui-table-header"),u=b("sui-table-cell"),h=b("sui-table-body"),c=b("sui-table");return X(),Ue(c,{celled:""},{default:i(()=>[e(a,null,{default:i(()=>[e(m,null,{default:i(()=>[e(f,null,{default:i(()=>[DH]),_:1}),e(f,null,{default:i(()=>[FH]),_:1}),e(f,null,{default:i(()=>[IH]),_:1}),e(f,null,{default:i(()=>[NH]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.properties,g=>(X(),Ue(m,{key:g.name},{default:i(()=>[e(u,null,{default:i(()=>[n(xe(g.name),1)]),_:2},1024),e(u,null,{default:i(()=>[n(xe(g.type),1)]),_:2},1024),e(u,null,{default:i(()=>[n(xe(g.default),1)]),_:2},1024),e(u,null,{default:i(()=>[n(xe(g.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var Tn=_e(MH,[["render",LH]]);const VH=E({name:"CheckboxDoc",components:{DocPageHeader:Fe,DocExample:ve,PropertyListTable:Tn},setup(){const t=L(!1),s='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=L([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,d=L(!1),_='<sui-checkbox toggle v-model="toggle" />',f=L(!1);return{checked:t,checkboxCode:s,selected:l,multipleCode:o,toggle:d,toggleCode:_,slider:f,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),OH=n("Types"),HH={class:"ui form"},jH={class:"grouped fields"},qH={class:"field"},JH={class:"field"},UH={class:"field"},YH=n("Properties"),GH=n("Events"),WH=n("Name"),KH=n("Description");function QH(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-checkbox"),u=b("doc-example"),h=b("property-list-table"),c=b("sui-table-header-cell"),g=b("sui-table-row"),v=b("sui-table-header"),r=b("sui-table-cell"),C=b("sui-table-body"),w=b("sui-table"),A=b("sui-container");return X(),oe("div",null,[e(f,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e(A,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[OH]),_:1}),e(u,{title:"Checkbox",description:"A standard checkbox",code:t.checkboxCode},{default:i(()=>[e(a,{label:"Make my profile visible",modelValue:t.checked,"onUpdate:modelValue":s[0]||(s[0]=p=>t.checked=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:t.multipleCode},{default:i(()=>[y("div",HH,[y("div",jH,[y("div",qH,[e(a,{label:"Apple",value:"Apple",modelValue:t.selected,"onUpdate:modelValue":s[1]||(s[1]=p=>t.selected=p)},null,8,["modelValue"])]),y("div",JH,[e(a,{label:"Banana",value:"Banana",modelValue:t.selected,"onUpdate:modelValue":s[2]||(s[2]=p=>t.selected=p)},null,8,["modelValue"])]),y("div",UH,[e(a,{label:"Chocolate",value:"Chocolate",modelValue:t.selected,"onUpdate:modelValue":s[3]||(s[3]=p=>t.selected=p)},null,8,["modelValue"])])])]),n(" selected : "+xe(t.selected),1)]),_:1},8,["code"]),e(u,{title:"Toggle",description:"A checkbox can toggle",code:t.toggleCode},{default:i(()=>[e(a,{toggle:"",modelValue:t.toggle,"onUpdate:modelValue":s[4]||(s[4]=p=>t.toggle=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Slider",description:"A checkbox can look like a slider",code:t.sliderCode},{default:i(()=>[e(a,{slider:"",modelValue:t.slider,"onUpdate:modelValue":s[5]||(s[5]=p=>t.slider=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[YH]),_:1}),e(h,{properties:t.properties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[GH]),_:1}),e(w,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(c,null,{default:i(()=>[WH]),_:1}),e(c,null,{default:i(()=>[KH]),_:1})]),_:1})]),_:1}),e(C,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.events,p=>(X(),Ue(g,{key:p.name},{default:i(()=>[e(r,null,{default:i(()=>[n(xe(p.name),1)]),_:2},1024),e(r,null,{default:i(()=>[n(xe(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var XH=_e(VH,[["render",QH]]);const ZH=E({name:"DimmerDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){const t=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,s=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active>
    <sui-header as="h2" icon inverted>
      <sui-icon name="heart" />
      Dimmed Message!
    </sui-header>
  </sui-dimmer>
</sui-dimmer-dimmable>`,l=L(!1);return{dimmerCode:t,contentDimmerCode:s,active:l,pageDimmerCode:`<div>
  <sui-button labeled icon @click="active = true">
    <sui-icon name="plus" />
    Show
  </sui-button>

  <sui-dimmer :active="active" page @click="active = false">
    <sui-header as="h2" icon inverted>
      <sui-icon name="heart" />
      Dimmed Message!
      <sui-header-subheader>Dimmer sub-header</sui-header-subheader>
    </sui-header>
  </sui-dimmer>
</div>`}}}),ej=n("Types"),tj=n("Overlayable Section"),ij=n("Overlayable Section"),sj=n(" Dimmed Message! "),nj=n(" Show "),lj=n(" Dimmed Message! "),aj=n("Dimmer sub-header");function oj(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-image"),u=b("sui-image-group"),h=b("sui-dimmer"),c=b("sui-dimmer-dimmable"),g=b("doc-example"),v=b("sui-icon"),r=b("sui-button"),C=b("sui-header-subheader"),w=b("sui-container");return X(),oe("div",null,[e(f,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(w,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[ej]),_:1}),e(g,{title:"Dimmer",description:"A simple dimmer displays no content",code:t.dimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(m,{as:"h3"},{default:i(()=>[tj]),_:1}),e(u,{size:"small"},{default:i(()=>[e(a,{src:J}),e(a,{src:J}),e(a,{src:J})]),_:1}),e(a,{size:"medium",src:kt}),e(h,{active:""})]),_:1})]),_:1},8,["code"]),e(g,{title:"Content Dimmer",description:"A dimmer can display content",code:t.contentDimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(m,{as:"h3"},{default:i(()=>[ij]),_:1}),e(u,{size:"small"},{default:i(()=>[e(a,{src:J}),e(a,{src:J}),e(a,{src:J})]),_:1}),e(a,{size:"medium",src:kt}),e(h,{active:""},{default:i(()=>[e(m,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),sj]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:t.pageDimmerCode},{default:i(()=>[y("div",null,[e(r,{labeled:"",icon:"",onClick:s[0]||(s[0]=A=>t.active=!0)},{default:i(()=>[e(v,{name:"plus"}),nj]),_:1}),e(h,{active:t.active,page:"",onClick:s[1]||(s[1]=A=>t.active=!1)},{default:i(()=>[e(m,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),lj,e(C,null,{default:i(()=>[aj]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}var uj=_e(ZH,[["render",oj]]);const rj=E({name:"DropdownDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){const t=`<sui-dropdown text="File">
  <sui-dropdown-menu>
    <sui-dropdown-item text="New" />
    <sui-dropdown-item text="Open..." description="ctrl + o" />
    <sui-dropdown-item text="Save as..." description="ctrl + s" />
    <sui-dropdown-item text="Rename" description="ctrl + r" />
    <sui-dropdown-item text="Make a copy" />
    <sui-dropdown-item icon="folder" text="Move to folder" />
    <sui-dropdown-item icon="trash" text="Move to trash" />
    <sui-divider />
    <sui-dropdown-item text="Download As..." />
    <sui-dropdown-item text="Publish To Web" />
    <sui-dropdown-item text="E-mail Collaborators" />
  </sui-dropdown-menu>
</sui-dropdown>`,s=L(null),l=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=L(null),d=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],_=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,f=L(null),m=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],a=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,u=L(null),h=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,c=L(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  search
  v-model="selected5"
  placeholder="Skills"
  :options="[
    { value: 'af', flag: 'af', text: 'Afghanistan' },
    { value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { value: 'al', flag: 'al', text: 'Albania' },
    { value: 'dz', flag: 'dz', text: 'Algeria' },
    { value: 'as', flag: 'as', text: 'American Samoa' }
  ]"
/>`,v=L(null),r=`<sui-dropdown
  button
  floating
  labeled
  search
  icon="world"
  v-model="selected6"
  :options="[
    { text: 'Arabic', value: 'Arabic' },
    { text: 'Chinese', value: 'Chinese' },
    { text: 'Danish', value: 'Danish' },
    { text: 'Dutch', value: 'Dutch' },
    { text: 'English', value: 'English' },
    { text: 'French', value: 'French' },
    { text: 'German', value: 'German' },
    { text: 'Greek', value: 'Greek' },
    { text: 'Hungarian', value: 'Hungarian' },
    { text: 'Italian', value: 'Italian' },
    { text: 'Japanese', value: 'Japanese' },
    { text: 'Korean', value: 'Korean' },
    { text: 'Lithuanian', value: 'Lithuanian' },
    { text: 'Persian', value: 'Persian' },
    { text: 'Polish', value: 'Polish' },
    { text: 'Portuguese', value: 'Portuguese' },
    { text: 'Russian', value: 'Russian' },
    { text: 'Spanish', value: 'Spanish' },
    { text: 'Swedish', value: 'Swedish' },
    { text: 'Turkish', value: 'Turkish' },
    { text: 'Vietnamese', value: 'Vietnamese' }
  ]"
  text="Select Language"
/>`,C=L(null),w=`<sui-dropdown
  text="Filter Posts"
  icon="filter"
  floating
  labeled
  button
  searchInMenu
  v-model="selected7"
  :options="[
    {
      text: 'Important',
      value: 'Important',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      text: 'Announcement',
      value: 'Announcement',
      label: { color: 'blue', empty: true, circular: true },
    },
    {
      text: 'Cannot Fix',
      value: 'Cannot Fix',
      label: { color: 'black', empty: true, circular: true },
    },
    {
      text: 'News',
      value: 'News',
      label: { color: 'purple', empty: true, circular: true },
    },
    {
      text: 'Enhancement',
      value: 'Enhancement',
      label: { color: 'orange', empty: true, circular: true },
    },
    {
      text: 'Change Declined',
      value: 'Change Declined',
      label: { empty: true, circular: true },
    },
    {
      text: 'Off Topic',
      value: 'Off Topic',
      label: { color: 'yellow', empty: true, circular: true },
    },
    {
      text: 'Interesting',
      value: 'Interesting',
      label: { color: 'pink', empty: true, circular: true },
    },
    {
      text: 'Discussion',
      value: 'Discussion',
      label: { color: 'green', empty: true, circular: true },
    },
  ]"
/>`,A=L({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:t,selected1:s,selectionCode:l,selected2:o,searchSelectionOptions:d,searchSelectionCode:_,selected3:f,clearableSelectionOptions:m,clearableSelectionCode:a,selected4:u,multipleCode:h,selected5:c,multipleCode2:g,selected6:v,searchDropdownCode:r,selected7:C,searchInMenuCode:w,selected8:A,inlineCode:`<span>
  Show me posts by <sui-dropdown
    inline
    v-model="selected8"
    :options="[
      {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
      },
      {
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
      },
      {
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
      },
      {
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
      },
    ]"
  />
</span>`,pointingCode:`<sui-dropdown
  icon="wrench"
  button
  pointing="top left"
>
  <sui-dropdown-menu>
    <sui-dropdown-item text="New" />
    <sui-dropdown-item text="Save As" />
    <sui-dropdown-item text="Edit" />
  </sui-dropdown-menu>
</sui-dropdown>`,floatingCode:`<sui-button-group color="teal">
  <sui-button>Save</sui-button>
  <sui-dropdown
    floating
    button
    icon="dropdown"
  >
    <sui-dropdown-menu>
      <sui-dropdown-item text="Edit Post" icon="edit" />
      <sui-dropdown-item text="Remove Post" icon="delete" />
      <sui-dropdown-item text="Hide Post" icon="hide" />
    </sui-dropdown-menu>
  </sui-dropdown>
</sui-button-group>`}}}),dj=n("Types"),cj=n(" Show me posts by "),mj=n("Save");function _j(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-dropdown-item"),u=b("sui-divider"),h=b("sui-dropdown-menu"),c=b("sui-dropdown"),g=b("doc-example"),v=b("sui-button"),r=b("sui-button-group"),C=b("sui-container");return X(),oe("div",null,[e(f,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(C,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[dj]),_:1}),e(g,{title:"Dropdown",description:"A dropdown",code:t.dropdownCode},{default:i(()=>[e(c,{text:"File"},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{text:"New"}),e(a,{text:"Open...",description:"ctrl + o"}),e(a,{text:"Save as...",description:"ctrl + s"}),e(a,{text:"Rename",description:"ctrl + r"}),e(a,{text:"Make a copy"}),e(a,{icon:"folder",text:"Move to folder"}),e(a,{icon:"trash",text:"Move to trash"}),e(u),e(a,{text:"Download As..."}),e(a,{text:"Publish To Web"}),e(a,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:t.selectionCode},{default:i(()=>[e(c,{selection:"",placeholder:"Pet",modelValue:t.selected1,"onUpdate:modelValue":s[0]||(s[0]=w=>t.selected1=w),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(g,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:t.searchSelectionCode},{default:i(()=>[e(c,{search:"",selection:"",fluid:"",modelValue:t.selected2,"onUpdate:modelValue":s[1]||(s[1]=w=>t.selected2=w),options:t.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(g,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:t.clearableSelectionCode},{default:i(()=>[e(c,{clearable:"",selection:"",modelValue:t.selected3,"onUpdate:modelValue":s[2]||(s[2]=w=>t.selected3=w),options:t.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(g,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:t.multipleCode},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",modelValue:t.selected4,"onUpdate:modelValue":s[3]||(s[3]=w=>t.selected4=w),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(g,{code:t.multipleCode2},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:t.selected5,"onUpdate:modelValue":s[4]||(s[4]=w=>t.selected5=w),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(g,{title:"Search Dropdown",description:"A dropdown can be searchable",code:t.searchDropdownCode},{default:i(()=>[e(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:t.selected6,"onUpdate:modelValue":s[5]||(s[5]=w=>t.selected6=w),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(g,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:t.searchInMenuCode},{default:i(()=>[e(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:t.selected7,"onUpdate:modelValue":s[6]||(s[6]=w=>t.selected7=w),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(g,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:t.inlineCode},{default:i(()=>[y("span",null,[cj,e(c,{inline:"",modelValue:t.selected8,"onUpdate:modelValue":s[7]||(s[7]=w=>t.selected8=w),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(g,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:t.pointingCode},{default:i(()=>[e(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{text:"New"}),e(a,{text:"Save As"}),e(a,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:t.floatingCode},{default:i(()=>[e(r,{color:"teal"},{default:i(()=>[e(v,null,{default:i(()=>[mj]),_:1}),e(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{text:"Edit Post",icon:"edit"}),e(a,{text:"Remove Post",icon:"delete"}),e(a,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}var fj=_e(rj,[["render",_j]]);const hj=E({name:"EmbedDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}}),pj=n("Types"),gj=n("Variations");function bj(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-embed"),u=b("doc-example"),h=b("sui-container");return X(),oe("div",null,[e(f,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[pj]),_:1}),e(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:t.youtubeCode},{default:i(()=>[e(a,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[gj]),_:1}),e(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:t.aspectRatioCode},{default:i(()=>[e(a,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}var vj=_e(hj,[["render",bj]]),Cj="/vue-fomantic-ui/images/avatar/large/rachel.png";const yj=E({name:"ModalDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){const t=`<div>
  <sui-button @click="modal1 = true">Show Modal</sui-button>
  <sui-modal v-model="modal1">
    <sui-modal-header>Select a Photo</sui-modal-header>
    <sui-modal-content image>
      <sui-image
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <sui-modal-description>
        <sui-header>Default Profile Image</sui-header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button positive @click="modal1 = false">OK</sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`,s=L(!1),l=L(!1);return{modalCode:t,modal1:s,basicModal:l,basicCode:`<div>
  <sui-button @click="basicModal = true">Basic Modal</sui-button>
  <sui-modal basic v-model="basicModal">
    <sui-modal-header icon>
      <sui-icon name="archive" />
      Archive Old Messages
    </sui-modal-header>
    <sui-modal-content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button basic color="red" inverted @click="basicModal = false">
        <sui-icon name="remove" /> No
      </sui-button>
      <sui-button basic color="green">
        <sui-icon name="checkmark" /> Yes
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</div>`}}}),wj=n("Types"),$j=n("Show Modal"),Aj=n("Select a Photo"),Sj=n("Default Profile Image"),kj=y("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),Tj=y("p",null,"Is it okay to use this photo?",-1),xj=n("OK"),Ej=n("Basic Modal"),Bj=n(" Archive Old Messages "),Rj=y("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),zj=n(" No "),Pj=n(" Yes ");function Mj(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-button"),u=b("sui-modal-header"),h=b("sui-image"),c=b("sui-modal-description"),g=b("sui-modal-content"),v=b("sui-modal-actions"),r=b("sui-modal"),C=b("doc-example"),w=b("sui-icon"),A=b("sui-container");return X(),oe("div",null,[e(f,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e(A,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[wj]),_:1}),e(C,{title:"Modal",description:"A standard modal",code:t.modalCode},{default:i(()=>[y("div",null,[e(a,{onClick:s[0]||(s[0]=p=>t.modal1=!0)},{default:i(()=>[$j]),_:1}),e(r,{modelValue:t.modal1,"onUpdate:modelValue":s[2]||(s[2]=p=>t.modal1=p)},{default:i(()=>[e(u,null,{default:i(()=>[Aj]),_:1}),e(g,{image:""},{default:i(()=>[e(h,{wrapped:"",size:"medium",src:Cj}),e(c,null,{default:i(()=>[e(m,null,{default:i(()=>[Sj]),_:1}),kj,Tj]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(a,{positive:"",onClick:s[1]||(s[1]=p=>t.modal1=!1)},{default:i(()=>[xj]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(C,{title:"Basic",description:"A modal can reduce its complexity",code:t.basicCode},{default:i(()=>[y("div",null,[e(a,{onClick:s[3]||(s[3]=p=>t.basicModal=!0)},{default:i(()=>[Ej]),_:1}),e(r,{basic:"",modelValue:t.basicModal,"onUpdate:modelValue":s[5]||(s[5]=p=>t.basicModal=p)},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(w,{name:"archive"}),Bj]),_:1}),e(g,null,{default:i(()=>[Rj]),_:1}),e(v,null,{default:i(()=>[e(a,{basic:"",color:"red",inverted:"",onClick:s[4]||(s[4]=p=>t.basicModal=!1)},{default:i(()=>[e(w,{name:"remove"}),zj]),_:1}),e(a,{basic:"",color:"green"},{default:i(()=>[e(w,{name:"checkmark"}),Pj]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}var Dj=_e(yj,[["render",Mj]]),Fj="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg";const Ij=E({name:"PopupDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){const t=L(null),s=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,l=L(null),o=L(null),d=L(null),_=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
<sui-image avatar src="/images/avatar/small/stevie.jpg" ref="titledTrigger2" />
<sui-image avatar src="/images/avatar/small/matt.jpg" ref="titledTrigger3" />
<sui-popup
  :trigger="titledTrigger1"
  header="Elliot Fu"
  content="Elliot has been a member since July 2012"
/>
<sui-popup
  :trigger="titledTrigger2"
  header="Stevie Feliciano"
  content="Stevie has been a member since August 2013"
/>
<sui-popup
  :trigger="titledTrigger3"
  header="Matt"
  content="Matt has been a member since July 2014"
/>`,f=L(null),m=`<sui-card ref="triggerTriger">
  <sui-image src="/images/movies/totoro-horizontal.jpg" />
  <sui-card-content>
    <sui-card-header>My Neighbor Totoro</sui-card-header>
    <sui-card-description>
      Two sisters move to the country with their father in order to be
      closer to their hospitalized mother, and discover the surrounding
      trees are inhabited by magical spirits.
    </sui-card-description>
  </sui-card-content>
</sui-card>
<sui-popup
  :trigger="triggerTriger"
  header="User Rating"
>
  <sui-rating icon="star" :defaultRating="3" :maxRating="4" />
</sui-popup>`,a=L(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,h=L(null),c=L(null),g=L(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
<sui-icon name="heart" circular ref="wideTrigger2" />
<sui-icon name="heart" circular ref="wideTrigger3" />

<sui-popup :trigger="wideTrigger1">
  Hello. This is a regular pop-up which does not allow for lots of content.
  You cannot fit a lot of words here as the paragraphs will be pretty
  narrow.
</sui-popup>
<sui-popup :trigger="wideTrigger2" wide>
  Hello. This is a wide pop-up which allows for lots of content with
  additional space. You can fit a lot of words here and the paragraphs will
  be pretty wide.
</sui-popup>
<sui-popup :trigger="wideTrigger3" wide="very">
  Hello. This is a very wide pop-up which allows for lots of content with
  additional space. You can fit a lot of words here and the paragraphs will
  be pretty wide.
</sui-popup>`,r=L(null),C=L(null),w=L(null),A=L(null),p=L(null),$=L(null),k=L(null),x=L(null),R=`<sui-button ref="positionTrigger1">Top Left</sui-button>
<sui-button ref="positionTrigger2">Top Center</sui-button>
<sui-button ref="positionTrigger3">Top Right</sui-button>

<sui-divider />

<sui-button ref="positionTrigger4">Bottom Left</sui-button>
<sui-button ref="positionTrigger5">Bottom Center</sui-button>
<sui-button ref="positionTrigger6">Bottom Right</sui-button>

<sui-divider />

<sui-button ref="positionTrigger7">Right Center</sui-button>
<sui-button ref="positionTrigger8">Left Center</sui-button>

<sui-popup :trigger="positionTrigger1" position="top left" content="I am positioned to the top left" />
<sui-popup :trigger="positionTrigger2" position="top center" content="I am positioned to the top center" />
<sui-popup :trigger="positionTrigger3" position="top right" content="I am positioned to the top right" />
<sui-popup :trigger="positionTrigger4" position="bottom left" content="I am positioned to the bottom left" />
<sui-popup :trigger="positionTrigger5" position="bottom center" content="I am positioned to the bottom center" />
<sui-popup :trigger="positionTrigger6" position="bottom right" content="I am positioned to the bottom right" />
<sui-popup :trigger="positionTrigger7" position="right center" content="I am positioned to the right center" />
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,z=L(null),F=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
<sui-popup :trigger="flowingTrigger" flowing>
  <sui-grid centered divided :columns="3">
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Basic Plan</sui-header>
      <p>
        <b>2</b> projects, $10 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Business Plan</sui-header>
      <p>
        <b>5</b> projects, $20 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
    <sui-grid-column textAlign="center">
      <sui-header as="h4">Premium Plan</sui-header>
      <p>
        <b>8</b> projects, $25 a month
      </p>
      <sui-button>Choose</sui-button>
    </sui-grid-column>
  </sui-grid>
</sui-popup>`,P=L(null),U=L(null),Z=L(null),N=L(null),ue=L(null),Ce=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,V=L(null),te=L(null);return{popupTrigger:t,popupCode:s,titledTrigger1:l,titledTrigger2:o,titledTrigger3:d,titledCode:_,triggerTriger:f,triggerCode:m,basicTrigger:a,basicCode:u,wideTrigger1:h,wideTrigger2:c,wideTrigger3:g,wideCode:v,positionTrigger1:r,positionTrigger2:C,positionTrigger3:w,positionTrigger4:A,positionTrigger5:p,positionTrigger6:$,positionTrigger7:k,positionTrigger8:x,positionCode:R,flowingTrigger:z,flowingCode:F,sizeTrigger1:P,sizeTrigger2:U,sizeTrigger3:Z,sizeTrigger4:N,sizeTrigger5:ue,sizeCode:Ce,invertedTrigger1:V,invertedTrigger2:te,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
<sui-button icon ref="invertedTrigger2">
  <sui-icon name="add" />
</sui-button>

<sui-popup
  :trigger="invertedTrigger1"
  content="Hello. This is an inverted popup"  
  inverted
/>
<sui-popup
  :trigger="invertedTrigger2"
  content="Hello. This is an inverted popup"
  inverted
/>`}}}),Nj=n("Types"),Lj=n(" Add users to your feed "),Vj=n("My Neighbor Totoro"),Oj=n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. "),Hj=n("Variations"),jj=n("Top Left"),qj=n("Top Center"),Jj=n("Top Right"),Uj=n("Bottom Left"),Yj=n("Bottom Center"),Gj=n("Bottom Right"),Wj=n("Right Center"),Kj=n("Left Center"),Qj=n("Show Flowing Popup"),Xj=n("Basic Plan"),Zj=y("p",null,[y("b",null,"2"),n(" projects, $10 a month ")],-1),e9=n("Choose"),t9=n("Business Plan"),i9=y("p",null,[y("b",null,"5"),n(" projects, $20 a month ")],-1),s9=n("Choose"),n9=n("Premium Plan"),l9=y("p",null,[y("b",null,"8"),n(" projects, $25 a month ")],-1),a9=n("Choose"),o9=n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. "),u9=n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. "),r9=n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ");function d9(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-icon"),u=b("sui-button"),h=b("sui-popup"),c=b("doc-example"),g=b("sui-image"),v=b("sui-card-header"),r=b("sui-card-description"),C=b("sui-card-content"),w=b("sui-card"),A=b("sui-rating"),p=b("sui-divider"),$=b("sui-grid-column"),k=b("sui-grid"),x=b("sui-container");return X(),oe("div",null,[e(f,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e(x,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Nj]),_:1}),e(c,{title:"Popup",description:"An element can specify popup content to appear",code:t.popupCode},{default:i(()=>[e(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[e(a,{name:"add"})]),_:1},512),e(h,{trigger:t.popupTrigger},{default:i(()=>[Lj]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Titled",description:"An element can specify popup content with a title",code:t.titledCode},{default:i(()=>[e(g,{avatar:"",src:At,ref:"titledTrigger1"},null,512),e(g,{avatar:"",src:_s,ref:"titledTrigger2"},null,512),e(g,{avatar:"",src:kn,ref:"titledTrigger3"},null,512),e(h,{trigger:t.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(h,{trigger:t.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(h,{trigger:t.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Trigger",description:"A trigger can be complex element",code:t.triggerCode},{default:i(()=>[e(w,{ref:"triggerTriger"},{default:i(()=>[e(g,{src:Fj}),e(C,null,{default:i(()=>[e(v,null,{default:i(()=>[Vj]),_:1}),e(r,null,{default:i(()=>[Oj]),_:1})]),_:1})]),_:1},512),e(h,{trigger:t.triggerTriger,header:"User Rating"},{default:i(()=>[e(A,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Hj]),_:1}),e(c,{title:"Basic",description:"A popup can provide more basic formatting",code:t.basicCode},{default:i(()=>[e(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[e(a,{name:"add"})]),_:1},512),e(h,{trigger:t.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Position",description:"A popup can be position around its trigger",code:t.positionCode},{default:i(()=>[e(u,{ref:"positionTrigger1"},{default:i(()=>[jj]),_:1},512),e(u,{ref:"positionTrigger2"},{default:i(()=>[qj]),_:1},512),e(u,{ref:"positionTrigger3"},{default:i(()=>[Jj]),_:1},512),e(p),e(u,{ref:"positionTrigger4"},{default:i(()=>[Uj]),_:1},512),e(u,{ref:"positionTrigger5"},{default:i(()=>[Yj]),_:1},512),e(u,{ref:"positionTrigger6"},{default:i(()=>[Gj]),_:1},512),e(p),e(u,{ref:"positionTrigger7"},{default:i(()=>[Wj]),_:1},512),e(u,{ref:"positionTrigger8"},{default:i(()=>[Kj]),_:1},512),e(h,{trigger:t.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(h,{trigger:t.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:t.flowingCode},{default:i(()=>[e(u,{ref:"flowingTrigger"},{default:i(()=>[Qj]),_:1},512),e(h,{trigger:t.flowingTrigger,flowing:""},{default:i(()=>[e(k,{centered:"",divided:"",columns:3},{default:i(()=>[e($,{textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[Xj]),_:1}),Zj,e(u,null,{default:i(()=>[e9]),_:1})]),_:1}),e($,{textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[t9]),_:1}),i9,e(u,null,{default:i(()=>[s9]),_:1})]),_:1}),e($,{textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[n9]),_:1}),l9,e(u,null,{default:i(()=>[a9]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Size",description:"A popup can vary in size",code:t.sizeCode},{default:i(()=>[e(a,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(a,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(a,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(a,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(a,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(h,{size:"mini",content:"Hello. This is a mini popup",trigger:t.sizeTrigger1},null,8,["trigger"]),e(h,{size:"tiny",content:"Hello. This is a tiny popup",trigger:t.sizeTrigger2},null,8,["trigger"]),e(h,{size:"small",content:"Hello. This is a small popup",trigger:t.sizeTrigger3},null,8,["trigger"]),e(h,{size:"large",content:"Hello. This is a large popup",trigger:t.sizeTrigger4},null,8,["trigger"]),e(h,{size:"huge",content:"Hello. This is a huge popup",trigger:t.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:t.wideCode},{default:i(()=>[e(a,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(a,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(a,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(h,{trigger:t.wideTrigger1},{default:i(()=>[o9]),_:1},8,["trigger"]),e(h,{trigger:t.wideTrigger2,wide:""},{default:i(()=>[u9]),_:1},8,["trigger"]),e(h,{trigger:t.wideTrigger3,wide:"very"},{default:i(()=>[r9]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Inverted",description:"A popup can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(a,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[e(a,{name:"add"})]),_:1},512),e(h,{trigger:t.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(h,{trigger:t.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}var c9=_e(Ij,[["render",d9]]);const m9=E({name:"ProgressDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
  <sui-progress inverted :percent="41" label="Uploading Files" progress />
  <sui-progress inverted :percent="100" label="Success" success progress />
  <sui-progress inverted :percent="100" label="Warning" warning progress />
  <sui-progress inverted :percent="100" label="Error" error progress />
</sui-segment>`,attachedCode:`<sui-segment>
  <sui-progress :percent="47" attached="top" />
  La la la la
  <sui-progress :percent="26" attached="bottom" />
</sui-segment>`,sizeCode:`<sui-progress :percent="88" size="tiny" label="tiny" />
<sui-progress :percent="100" size="small" label="small" success />
<sui-progress :percent="83" label="standard" />
<sui-progress :percent="73" size="large" label="large" />
<sui-progress :percent="94" size="big" label="big" />`,colorCode:`<sui-progress :percent="32" color="red" />
<sui-progress :percent="53" color="orange" />
<sui-progress :percent="13" color="yellow" />
<sui-progress :percent="37" color="olive" />
<sui-progress :percent="83" color="green" />
<sui-progress :percent="24" color="teal" />
<sui-progress :percent="88" color="blue" />
<sui-progress :percent="41" color="violet" />
<sui-progress :percent="47" color="purple" />
<sui-progress :percent="30" color="pink" />
<sui-progress :percent="68" color="brown" />
<sui-progress :percent="35" color="grey" />
<sui-progress :percent="73" color="black" />`}}}),_9=n("Types"),f9=n("Content"),h9=n("States"),p9=n("Variations"),g9=n(" La la la la ");function b9(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-progress"),u=b("doc-example"),h=b("sui-segment"),c=b("sui-container");return X(),oe("div",null,[e(f,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(c,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[_9]),_:1}),e(u,{title:"Standard",description:"A standard progress bar",code:t.standardCode},{default:i(()=>[e(a,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:t.indicatingCode},{default:i(()=>[e(a,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[f9]),_:1}),e(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:t.barCode},{default:i(()=>[e(a,{percent:33})]),_:1},8,["code"]),e(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:t.progressCode},{default:i(()=>[e(a,{percent:14,progress:""})]),_:1},8,["code"]),e(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:t.centeredCode},{default:i(()=>[e(a,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(u,{title:"Label",description:"A progress element can contain a label",code:t.labelCode},{default:i(()=>[e(a,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[h9]),_:1}),e(u,{title:"Active",description:"A progress bar can show activity",code:t.activeCode},{default:i(()=>[e(a,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(u,{title:"Success",description:"A progress bar can show a success state",code:t.successCode},{default:i(()=>[e(a,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(u,{title:"Warning",description:"A progress bar can show a warning state",code:t.warningCode},{default:i(()=>[e(a,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(u,{title:"Error",description:"A progress bar can show an error state",code:t.errorCode},{default:i(()=>[e(a,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(u,{title:"Disabled",description:"A progress bar can be disabled",code:t.disabledCode},{default:i(()=>[e(a,{percent:25,disabled:""})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[p9]),_:1}),e(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(a,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(a,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(a,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(a,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(u,{title:"Attached",description:"A progress bar can show progress of an element",code:t.attachedCode},{default:i(()=>[e(h,null,{default:i(()=>[e(a,{percent:47,attached:"top"}),g9,e(a,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A progress bar can vary in size",code:t.sizeCode},{default:i(()=>[e(a,{percent:88,size:"tiny",label:"tiny"}),e(a,{percent:100,size:"small",label:"small",success:""}),e(a,{percent:83,label:"standard"}),e(a,{percent:73,size:"large",label:"large"}),e(a,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(u,{title:"Color",description:"A progress bar can have different colors",code:t.colorCode},{default:i(()=>[e(a,{percent:32,color:"red"}),e(a,{percent:53,color:"orange"}),e(a,{percent:13,color:"yellow"}),e(a,{percent:37,color:"olive"}),e(a,{percent:83,color:"green"}),e(a,{percent:24,color:"teal"}),e(a,{percent:88,color:"blue"}),e(a,{percent:41,color:"violet"}),e(a,{percent:47,color:"purple"}),e(a,{percent:30,color:"pink"}),e(a,{percent:68,color:"brown"}),e(a,{percent:35,color:"grey"}),e(a,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}var v9=_e(m9,[["render",b9]]);const C9=E({name:"RatingDoc",components:{DocPageHeader:Fe,DocExample:ve,PropertyListTable:Tn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
<sui-rating :defaultRating="2" :maxRating="4" icon="heart" color="red" />
<sui-rating :defaultRating="2" :maxRating="4" icon="female" color="purple" />
<sui-rating :defaultRating="2" :maxRating="4" icon="male" color="blue" />
<sui-rating :defaultRating="2" :maxRating="4" icon="cloud" color="grey" />
<sui-rating :defaultRating="2" :maxRating="4" icon="cat" color="pink" />
<sui-rating :defaultRating="2" :maxRating="4" icon="circle" color="orange" />`,colorCode:`<sui-rating :defaultRating="1" :maxRating="7" color="red" />
<sui-rating :defaultRating="2" :maxRating="7" color="orange" />
<sui-rating :defaultRating="3" :maxRating="7" color="yellow" />
<sui-rating :defaultRating="4" :maxRating="7" color="olive" />
<sui-rating :defaultRating="5" :maxRating="7" color="green" />
<sui-rating :defaultRating="6" :maxRating="7" color="teal" />
<sui-rating :defaultRating="6" :maxRating="7" color="blue" />
<sui-rating :defaultRating="5" :maxRating="7" color="violet" />
<sui-rating :defaultRating="4" :maxRating="7" color="purple" />
<sui-rating :defaultRating="3" :maxRating="7" color="pink" />
<sui-rating :defaultRating="2" :maxRating="7" color="brown" />
<sui-rating :defaultRating="1" :maxRating="7" color="grey" />
<sui-rating :defaultRating="1" :maxRating="7" color="black" />`,disabledCode:'<sui-rating disabled :defaultRating="3" :maxRating="5" color="yellow" />',sizeCode:`<sui-rating size="mini" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="tiny" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="small" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="large" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="huge" :defaultRating="3" :maxRating="4" color="yellow" />
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),y9=n("Types"),w9=y("br",null,null,-1),$9=y("br",null,null,-1),A9=y("br",null,null,-1),S9=y("br",null,null,-1),k9=y("br",null,null,-1),T9=y("br",null,null,-1),x9=y("br",null,null,-1),E9=y("br",null,null,-1),B9=y("br",null,null,-1),R9=y("br",null,null,-1),z9=y("br",null,null,-1),P9=y("br",null,null,-1),M9=y("br",null,null,-1),D9=y("br",null,null,-1),F9=y("br",null,null,-1),I9=y("br",null,null,-1),N9=y("br",null,null,-1),L9=y("br",null,null,-1),V9=y("br",null,null,-1),O9=y("br",null,null,-1),H9=y("br",null,null,-1),j9=y("br",null,null,-1),q9=y("br",null,null,-1),J9=y("br",null,null,-1),U9=y("br",null,null,-1),Y9=y("br",null,null,-1),G9=y("br",null,null,-1),W9=y("br",null,null,-1),K9=y("br",null,null,-1),Q9=y("br",null,null,-1),X9=y("br",null,null,-1),Z9=y("br",null,null,-1),eq=y("br",null,null,-1),tq=y("br",null,null,-1),iq=y("br",null,null,-1),sq=y("br",null,null,-1),nq=n("States"),lq=n("Variations"),aq=y("br",null,null,-1),oq=y("br",null,null,-1),uq=y("br",null,null,-1),rq=y("br",null,null,-1),dq=y("br",null,null,-1),cq=y("br",null,null,-1),mq=y("br",null,null,-1),_q=y("br",null,null,-1),fq=y("br",null,null,-1),hq=y("br",null,null,-1),pq=y("br",null,null,-1),gq=y("br",null,null,-1),bq=n("Properties"),vq=n("Events"),Cq=n("Name"),yq=n("Description");function wq(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-rating"),u=b("doc-example"),h=b("property-list-table"),c=b("sui-table-header-cell"),g=b("sui-table-row"),v=b("sui-table-header"),r=b("sui-table-cell"),C=b("sui-table-body"),w=b("sui-table"),A=b("sui-container");return X(),oe("div",null,[e(f,{title:"Rating",sub:"A rating indicates user interest in content"}),e(A,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[y9]),_:1}),e(u,{title:"Rating",description:"A Basic rating",code:t.ratingCode},{default:i(()=>[e(a)]),_:1},8,["code"]),e(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:t.iconCode},{default:i(()=>[e(a,{defaultRating:2,maxRating:4,color:"yellow"}),w9,$9,e(a,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),A9,S9,e(a,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),k9,T9,e(a,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),x9,E9,e(a,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),B9,R9,e(a,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),z9,P9,e(a,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:t.colorCode},{default:i(()=>[e(a,{defaultRating:1,maxRating:7,color:"red"}),M9,D9,e(a,{defaultRating:2,maxRating:7,color:"orange"}),F9,I9,e(a,{defaultRating:3,maxRating:7,color:"yellow"}),N9,L9,e(a,{defaultRating:4,maxRating:7,color:"olive"}),V9,O9,e(a,{defaultRating:5,maxRating:7,color:"green"}),H9,j9,e(a,{defaultRating:6,maxRating:7,color:"teal"}),q9,J9,e(a,{defaultRating:6,maxRating:7,color:"blue"}),U9,Y9,e(a,{defaultRating:5,maxRating:7,color:"violet"}),G9,W9,e(a,{defaultRating:4,maxRating:7,color:"purple"}),K9,Q9,e(a,{defaultRating:3,maxRating:7,color:"pink"}),X9,Z9,e(a,{defaultRating:2,maxRating:7,color:"brown"}),eq,tq,e(a,{defaultRating:1,maxRating:7,color:"grey"}),iq,sq,e(a,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[nq]),_:1}),e(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:t.disabledCode},{default:i(()=>[e(a,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[lq]),_:1}),e(u,{title:"Size",description:"A rating can vary in size",code:t.sizeCode},{default:i(()=>[e(a,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),aq,oq,e(a,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),uq,rq,e(a,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),dq,cq,e(a,{defaultRating:3,maxRating:4,color:"yellow"}),mq,_q,e(a,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),fq,hq,e(a,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),pq,gq,e(a,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[bq]),_:1}),e(h,{properties:t.properties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[vq]),_:1}),e(w,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(c,null,{default:i(()=>[Cq]),_:1}),e(c,null,{default:i(()=>[yq]),_:1})]),_:1})]),_:1}),e(C,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.events,p=>(X(),Ue(g,{key:p.name},{default:i(()=>[e(r,null,{default:i(()=>[n(xe(p.name),1)]),_:2},1024),e(r,null,{default:i(()=>[n(xe(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var $q=_e(C9,[["render",wq]]);const Aq=E({name:"SidebarDoc",components:{DocPageHeader:Fe,DocExample:ve,PropertyListTable:Tn},setup(){return{visible1:L(!1),sidebarCode:`<sui-grid :columns="1">
  <sui-grid-column>
    <sui-button @click="visible1 = !visible1" icon>
      <sui-icon name="arrow right" />
    </sui-button>
  </sui-grid-column>
  <sui-grid-column>
    <sui-segment class="pushable">
      <sui-sidebar v-model:visible="visible1" dimmed icon="labeled" inverted>
        <sui-menu-item>
          <sui-icon name="home" />
          Home
        </sui-menu-item>
        <sui-menu-item>
          <sui-icon name="gamepad" />
          Games
        </sui-menu-item>
        <sui-menu-item>
          <sui-icon name="camera" />
          Channels
        </sui-menu-item>
      </sui-sidebar>
      <div class="pusher">
        <sui-segment>
          <sui-header as="h2">Main Header</sui-header>
          <sui-image src="/images/wireframe/paragraph.png" />
        </sui-segment>
      </div>
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),Sq=n("Types"),kq=n(" Home "),Tq=n(" Games "),xq=n(" Channels "),Eq={class:"pusher"},Bq=n("Main Header"),Rq=n("Properties"),zq=n("Events"),Pq=n("Name"),Mq=n("Description");function Dq(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-icon"),u=b("sui-button"),h=b("sui-grid-column"),c=b("sui-menu-item"),g=b("sui-sidebar"),v=b("sui-image"),r=b("sui-segment"),C=b("sui-grid"),w=b("doc-example"),A=b("property-list-table"),p=b("sui-table-header-cell"),$=b("sui-table-row"),k=b("sui-table-header"),x=b("sui-table-cell"),R=b("sui-table-body"),z=b("sui-table"),F=b("sui-container");return X(),oe("div",null,[e(f,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(F,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Sq]),_:1}),e(w,{title:"Sidebar",description:"A sidebar",code:t.sidebarCode},{default:i(()=>[e(C,{columns:1},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{onClick:s[0]||(s[0]=P=>t.visible1=!t.visible1),icon:""},{default:i(()=>[e(a,{name:"arrow right"})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,{class:"pushable"},{default:i(()=>[e(g,{visible:t.visible1,"onUpdate:visible":s[1]||(s[1]=P=>t.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[e(c,null,{default:i(()=>[e(a,{name:"home"}),kq]),_:1}),e(c,null,{default:i(()=>[e(a,{name:"gamepad"}),Tq]),_:1}),e(c,null,{default:i(()=>[e(a,{name:"camera"}),xq]),_:1})]),_:1},8,["visible"]),y("div",Eq,[e(r,null,{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[Bq]),_:1}),e(v,{src:fe})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Rq]),_:1}),e(A,{properties:t.properties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[zq]),_:1}),e(z,{celled:""},{default:i(()=>[e(k,null,{default:i(()=>[e($,null,{default:i(()=>[e(p,null,{default:i(()=>[Pq]),_:1}),e(p,null,{default:i(()=>[Mq]),_:1})]),_:1})]),_:1}),e(R,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.events,P=>(X(),Ue($,{key:P.name},{default:i(()=>[e(x,null,{default:i(()=>[n(xe(P.name),1)]),_:2},1024),e(x,null,{default:i(()=>[n(xe(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var Fq=_e(Aq,[["render",Dq]]);const Iq=E({name:"SliderDoc",components:{DocPageHeader:Fe,DocExample:ve},setup(){const t=L(5),s='<sui-slider v-model="slider1" />',l=L(4),o='<sui-slider labeled v-model="slider2" />',d=L(6),_='<sui-slider labeled="ticked" v-model="slider3" />',f=L(0),m=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["\u03B1", "\u03B2", "\u03B3", "\u03B4", "\u03B5", "\u03B6", "\u03B7", "\u03B8", "\u03B9", "\u03BA", "\u03BB", "\u03BC", "\u03BD", "\u03BE", "\u03BF", "\u03C0", "\u03C1", "\u03C3/\u03C2", "\u03C4", "\u03C5", "\u03C6"]'
  :max="20"
/>`,a=L(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',h=L([]);h.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',g=L(7),v='<sui-slider disabled v-model="slider7" />',r=L(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,w=L(3),A='<sui-slider reversed v-model="slider9" />',p=L(18),$='<sui-slider vertical v-model="slider10" :max="20" />',k=L(5),x=L(5),R=L(5),z=L(5),F=L(5),P=L(5),U=L(5),Z=L(5),N=L(5),ue=L(5),Ce=L(5),V=L(5),te=L(5),re=`<sui-slider color="red" v-model="redSlider" />
<sui-slider color="orange" v-model="orangeSlider" />
<sui-slider color="yellow" v-model="yellowSlider" />
<sui-slider color="olive" v-model="oliveSlider" />
<sui-slider color="green" v-model="greenSlider" />
<sui-slider color="teal" v-model="tealSlider" />
<sui-slider color="blue" v-model="blueSlider" />
<sui-slider color="violet" v-model="violetSlider" />
<sui-slider color="purple" v-model="purpleSlider" />
<sui-slider color="pink" v-model="pinkSlider" />
<sui-slider color="brown" v-model="brownSlider" />
<sui-slider color="grey" v-model="greySlider" />
<sui-slider color="black" v-model="blackSlider" />`,se=`<sui-segment inverted>
  <sui-slider inverted color="red" v-model="redSlider" />
  <sui-slider inverted color="orange" v-model="orangeSlider" />
  <sui-slider inverted color="yellow" v-model="yellowSlider" />
  <sui-slider inverted color="olive" v-model="oliveSlider" />
  <sui-slider inverted color="green" v-model="greenSlider" />
  <sui-slider inverted color="teal" v-model="tealSlider" />
  <sui-slider inverted color="blue" v-model="blueSlider" />
  <sui-slider inverted color="violet" v-model="violetSlider" />
  <sui-slider inverted color="purple" v-model="purpleSlider" />
  <sui-slider inverted color="pink" v-model="pinkSlider" />
  <sui-slider inverted color="brown" v-model="brownSlider" />
  <sui-slider inverted color="grey" v-model="greySlider" />
  <sui-slider inverted color="black" v-model="blackSlider" />
</sui-segment>`,we=L(5),Ne=L(5),Ye=L(5);return{slider1:t,sliderCode:s,slider2:l,labeledSliderCode:o,slider3:d,labeledTickedCode:_,slider4:f,customLabelsCode:m,slider5:a,stepCode:u,slider6:h,rangeCode:c,slider7:g,disabledCode:v,slider8:r,invertedCode:C,slider9:w,reversedCode:A,slider10:p,verticalCode:$,redSlider:k,orangeSlider:x,yellowSlider:R,oliveSlider:z,greenSlider:F,tealSlider:P,blueSlider:U,violetSlider:Z,purpleSlider:N,pinkSlider:ue,brownSlider:Ce,greySlider:V,blackSlider:te,coloredCode:re,invertedColoredCode:se,smallSlider:we,largeSlider:Ne,bigSlider:Ye,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}}),Nq=n("Types"),Lq=n("Variations"),Vq=n("Properties"),Oq=n("Name"),Hq=n("Type"),jq=n("Default"),qq=n("Description"),Jq=n("Events"),Uq=n("Name"),Yq=n("Description");function Gq(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-slider"),u=b("doc-example"),h=b("sui-segment"),c=b("sui-table-header-cell"),g=b("sui-table-row"),v=b("sui-table-header"),r=b("sui-table-cell"),C=b("sui-table-body"),w=b("sui-table"),A=b("sui-container");return X(),oe("div",null,[e(f,{title:"Slider",sub:"A slider allows users to select values within a range"}),e(A,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Nq]),_:1}),e(u,{title:"Slider",description:"A standard slider",code:t.sliderCode},{default:i(()=>[e(a,{modelValue:t.slider1,"onUpdate:modelValue":s[0]||(s[0]=p=>t.slider1=p)},null,8,["modelValue"]),n(" "+xe(t.slider1),1)]),_:1},8,["code"]),e(u,{title:"Labeled Slider",description:"A slider that show its labels",code:t.labeledSliderCode},{default:i(()=>[e(a,{labeled:"",modelValue:t.slider2,"onUpdate:modelValue":s[1]||(s[1]=p=>t.slider2=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:t.labeledTickedCode},{default:i(()=>[e(a,{labeled:"ticked",modelValue:t.slider3,"onUpdate:modelValue":s[2]||(s[2]=p=>t.slider3=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:t.customLabelsCode},{default:i(()=>[e(a,{modelValue:t.slider4,"onUpdate:modelValue":s[3]||(s[3]=p=>t.slider4=p),labeled:"ticked",labels:["\u03B1","\u03B2","\u03B3","\u03B4","\u03B5","\u03B6","\u03B7","\u03B8","\u03B9","\u03BA","\u03BB","\u03BC","\u03BD","\u03BE","\u03BF","\u03C0","\u03C1","\u03C3/\u03C2","\u03C4","\u03C5","\u03C6"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Step",description:"A slider can change the default step increment",code:t.stepCode},{default:i(()=>[e(a,{modelValue:t.slider5,"onUpdate:modelValue":s[4]||(s[4]=p=>t.slider5=p),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+xe(t.slider5),1)]),_:1},8,["code"]),e(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:t.rangeCode},{default:i(()=>[e(a,{modelValue:t.slider6,"onUpdate:modelValue":s[5]||(s[5]=p=>t.slider6=p),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+xe(t.slider6),1)]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Lq]),_:1}),e(u,{title:"Disabled",description:"A slider can appear disabled",code:t.disabledCode},{default:i(()=>[e(a,{disabled:"",modelValue:t.slider7,"onUpdate:modelValue":s[6]||(s[6]=p=>t.slider7=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A slider can be inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(a,{inverted:"",modelValue:t.slider8,"onUpdate:modelValue":s[7]||(s[7]=p=>t.slider8=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Reversed",description:"A slider can be reversed",code:t.reversedCode},{default:i(()=>[e(a,{reversed:"",modelValue:t.slider9,"onUpdate:modelValue":s[8]||(s[8]=p=>t.slider9=p)},null,8,["modelValue"]),n(" "+xe(t.slider9),1)]),_:1},8,["code"]),e(u,{title:"Vertical",description:"A slider can be vertical",code:t.verticalCode},{default:i(()=>[e(a,{vertical:"",modelValue:t.slider10,"onUpdate:modelValue":s[9]||(s[9]=p=>t.slider10=p),max:20},null,8,["modelValue"]),n(" "+xe(t.slider10),1)]),_:1},8,["code"]),e(u,{title:"Colored",description:"A slider can be different colors",code:t.coloredCode},{default:i(()=>[e(a,{color:"red",modelValue:t.redSlider,"onUpdate:modelValue":s[10]||(s[10]=p=>t.redSlider=p)},null,8,["modelValue"]),e(a,{color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":s[11]||(s[11]=p=>t.orangeSlider=p)},null,8,["modelValue"]),e(a,{color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":s[12]||(s[12]=p=>t.yellowSlider=p)},null,8,["modelValue"]),e(a,{color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":s[13]||(s[13]=p=>t.oliveSlider=p)},null,8,["modelValue"]),e(a,{color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":s[14]||(s[14]=p=>t.greenSlider=p)},null,8,["modelValue"]),e(a,{color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":s[15]||(s[15]=p=>t.tealSlider=p)},null,8,["modelValue"]),e(a,{color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":s[16]||(s[16]=p=>t.blueSlider=p)},null,8,["modelValue"]),e(a,{color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":s[17]||(s[17]=p=>t.violetSlider=p)},null,8,["modelValue"]),e(a,{color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":s[18]||(s[18]=p=>t.purpleSlider=p)},null,8,["modelValue"]),e(a,{color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":s[19]||(s[19]=p=>t.pinkSlider=p)},null,8,["modelValue"]),e(a,{color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":s[20]||(s[20]=p=>t.brownSlider=p)},null,8,["modelValue"]),e(a,{color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":s[21]||(s[21]=p=>t.greySlider=p)},null,8,["modelValue"]),e(a,{color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":s[22]||(s[22]=p=>t.blackSlider=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:t.invertedColoredCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(a,{inverted:"",color:"red",modelValue:t.redSlider,"onUpdate:modelValue":s[23]||(s[23]=p=>t.redSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":s[24]||(s[24]=p=>t.orangeSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":s[25]||(s[25]=p=>t.yellowSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":s[26]||(s[26]=p=>t.oliveSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":s[27]||(s[27]=p=>t.greenSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":s[28]||(s[28]=p=>t.tealSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":s[29]||(s[29]=p=>t.blueSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":s[30]||(s[30]=p=>t.violetSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":s[31]||(s[31]=p=>t.purpleSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":s[32]||(s[32]=p=>t.pinkSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":s[33]||(s[33]=p=>t.brownSlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":s[34]||(s[34]=p=>t.greySlider=p)},null,8,["modelValue"]),e(a,{inverted:"",color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":s[35]||(s[35]=p=>t.blackSlider=p)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A slider can have different sizes",code:t.sizeCode},{default:i(()=>[e(a,{size:"small",color:"red",modelValue:t.smallSlider,"onUpdate:modelValue":s[36]||(s[36]=p=>t.smallSlider=p)},null,8,["modelValue"]),e(a,{size:"large",color:"yellow",modelValue:t.largeSlider,"onUpdate:modelValue":s[37]||(s[37]=p=>t.largeSlider=p)},null,8,["modelValue"]),e(a,{size:"big",color:"olive",modelValue:t.bigSlider,"onUpdate:modelValue":s[38]||(s[38]=p=>t.bigSlider=p)},null,8,["modelValue"])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[Vq]),_:1}),e(w,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(c,null,{default:i(()=>[Oq]),_:1}),e(c,null,{default:i(()=>[Hq]),_:1}),e(c,null,{default:i(()=>[jq]),_:1}),e(c,null,{default:i(()=>[qq]),_:1})]),_:1})]),_:1}),e(C,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.properties,p=>(X(),Ue(g,{key:p.name},{default:i(()=>[e(r,null,{default:i(()=>[n(xe(p.name),1)]),_:2},1024),e(r,null,{default:i(()=>[n(xe(p.type),1)]),_:2},1024),e(r,null,{default:i(()=>[n(xe(p.default),1)]),_:2},1024),e(r,null,{default:i(()=>[n(xe(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(m,{as:"h2",dividing:""},{default:i(()=>[Jq]),_:1}),e(w,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(c,null,{default:i(()=>[Uq]),_:1}),e(c,null,{default:i(()=>[Yq]),_:1})]),_:1})]),_:1}),e(C,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.events,p=>(X(),Ue(g,{key:p.name},{default:i(()=>[e(r,null,{default:i(()=>[n(xe(p.name),1)]),_:2},1024),e(r,null,{default:i(()=>[n(xe(p.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var Wq=_e(Iq,[["render",Gq]]);const Kq=E({name:"TabDoc",components:{DocPageHeader:Fe,DocExample:ve,PropertyListTable:Tn},setup(){return{basicCode:`<sui-tab>
  <sui-tab-panel header="First">Content A</sui-tab-panel>
  <sui-tab-panel header="Second">Content B</sui-tab-panel>
  <sui-tab-panel header="Third">Content C</sui-tab-panel>
</sui-tab>`,pointingCode:`<sui-tab pointing>
    <sui-tab-panel header="First">Content A</sui-tab-panel>
    <sui-tab-panel header="Second">Content B</sui-tab-panel>
    <sui-tab-panel header="Third">Content C</sui-tab-panel>
  </sui-tab>
</doc-example>`,secondaryCode:`<sui-tab secondary>
    <sui-tab-panel header="First">Content A</sui-tab-panel>
    <sui-tab-panel header="Second">Content B</sui-tab-panel>
    <sui-tab-panel header="Third">Content C</sui-tab-panel>
  </sui-tab>
</doc-example>`,textCode:`<sui-tab text>
  <sui-tab-panel header="First">Content A</sui-tab-panel>
  <sui-tab-panel header="Second">Content B</sui-tab-panel>
  <sui-tab-panel header="Third">Content C</sui-tab-panel>
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}}),Qq=n("Examples"),Xq=n("Content A"),Zq=n("Content B"),eJ=n("Content C"),tJ=n("Content A"),iJ=n("Content B"),sJ=n("Content C"),nJ=n("Content A"),lJ=n("Content B"),aJ=n("Content C"),oJ=n("Content A"),uJ=n("Content B"),rJ=n("Content C"),dJ=n("Properties"),cJ=n("Tab"),mJ=n("TabPanel"),_J=n("Events"),fJ=n("Name"),hJ=n("Description");function pJ(t,s,l,o,d,_){const f=b("doc-page-header"),m=b("sui-header"),a=b("sui-tab-panel"),u=b("sui-tab"),h=b("doc-example"),c=b("property-list-table"),g=b("sui-table-header-cell"),v=b("sui-table-row"),r=b("sui-table-header"),C=b("sui-table-cell"),w=b("sui-table-body"),A=b("sui-table"),p=b("sui-container");return X(),oe("div",null,[e(f,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(p,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[Qq]),_:1}),e(h,{title:"Basic",code:t.basicCode},{default:i(()=>[e(u,null,{default:i(()=>[e(a,{header:"First"},{default:i(()=>[Xq]),_:1}),e(a,{header:"Second"},{default:i(()=>[Zq]),_:1}),e(a,{header:"Third"},{default:i(()=>[eJ]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Pointing",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(a,{header:"First"},{default:i(()=>[tJ]),_:1}),e(a,{header:"Second"},{default:i(()=>[iJ]),_:1}),e(a,{header:"Third"},{default:i(()=>[sJ]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Secondary",code:t.secondaryCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(a,{header:"First"},{default:i(()=>[nJ]),_:1}),e(a,{header:"Second"},{default:i(()=>[lJ]),_:1}),e(a,{header:"Third"},{default:i(()=>[aJ]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Text",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(a,{header:"First"},{default:i(()=>[oJ]),_:1}),e(a,{header:"Second"},{default:i(()=>[uJ]),_:1}),e(a,{header:"Third"},{default:i(()=>[rJ]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[dJ]),_:1}),e(m,{as:"h3"},{default:i(()=>[cJ]),_:1}),e(c,{properties:t.tabProperties},null,8,["properties"]),e(m,{as:"h3"},{default:i(()=>[mJ]),_:1}),e(c,{properties:t.tabPanelProperties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[_J]),_:1}),e(A,{celled:""},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[fJ]),_:1}),e(g,null,{default:i(()=>[hJ]),_:1})]),_:1})]),_:1}),e(w,null,{default:i(()=>[(X(!0),oe($e,null,ot(t.events,$=>(X(),Ue(v,{key:$.name},{default:i(()=>[e(C,null,{default:i(()=>[n(xe($.name),1)]),_:2},1024),e(C,null,{default:i(()=>[n(xe($.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}var gJ=_e(Kq,[["render",pJ]]);const bJ=[{path:"/",component:sp,children:[{path:"/",component:yp},{path:"elements/button",component:N1},{path:"elements/container",component:ev},{path:"elements/divider",component:Cv},{path:"elements/emoji",component:Vv},{path:"elements/flag",component:Uv},{path:"elements/header",component:ny},{path:"elements/icon",component:$y},{path:"elements/image",component:Jy},{path:"elements/input",component:ew},{path:"elements/label",component:DA},{path:"elements/list",component:a2},{path:"elements/loader",component:v2},{path:"elements/rail",component:L2},{path:"elements/reveal",component:W2},{path:"elements/segment",component:$8},{path:"elements/step",component:YT},{path:"collections/breadcrumb",component:$3},{path:"collections/form",component:E3},{path:"collections/grid",component:Bx},{path:"collections/menu",component:T4},{path:"collections/message",component:bB},{path:"collections/table",component:rI},{path:"views/advertisement",component:pI},{path:"views/card",component:n6},{path:"views/comment",component:_V},{path:"views/feed",component:n7},{path:"views/item",component:RO},{path:"views/statistic",component:sH},{path:"modules/accordion",component:EH},{path:"modules/calendar",component:PH},{path:"modules/checkbox",component:XH},{path:"modules/dimmer",component:uj},{path:"modules/dropdown",component:fj},{path:"modules/embed",component:vj},{path:"modules/modal",component:Dj},{path:"modules/popup",component:c9},{path:"modules/progress",component:v9},{path:"modules/rating",component:$q},{path:"modules/sidebar",component:Fq},{path:"modules/slider",component:Wq},{path:"modules/tab",component:gJ}]}],vJ=qh({history:ah("/vue-fomantic-ui/"),routes:bJ});var CJ=Object.defineProperty,Co=Object.getOwnPropertySymbols,yJ=Object.prototype.hasOwnProperty,wJ=Object.prototype.propertyIsEnumerable,yo=(t,s,l)=>s in t?CJ(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,Vt=(t,s)=>{for(var l in s||(s={}))yJ.call(s,l)&&yo(t,l,s[l]);if(Co)for(var l of Co(s))wJ.call(s,l)&&yo(t,l,s[l]);return t};function bc(t){var s,l,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(s=0;s<t.length;s++)t[s]&&(l=bc(t[s]))&&(o&&(o+=" "),o+=l);else for(s in t)t[s]&&(o&&(o+=" "),o+=s);return o}function Y(){for(var t=0,s,l,o="";t<arguments.length;)(s=arguments[t++])&&(l=bc(s))&&(o&&(o+=" "),o+=l);return o}const S=(t,s)=>t?s:"",ke=(t,s)=>typeof t=="string"?`${t} ${s}`:"",Se=(t,s)=>t===!0?s:t==="below"?`${s} ${t}`:typeof t=="string"?`${t} ${s}`:"",Li=t=>t==="justified"?"justified":ke(t,"aligned"),zt=(t,s)=>typeof t=="number"&&s?`${fl(t)} ${s}`:typeof t=="number"&&!s?fl(t):typeof t=="string"&&t==="equal"?`${t} width`:"",qi=(t,s)=>t?`${fl(t)} wide ${s}`:"",fl=t=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][t-1];var hl=E({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,labeled:[Boolean,String],labelPosition:String,icon:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,loading:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.active,"active"),S(t.basic,"basic"),S(t.circular,"circular"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.facebook,"facebook"),S(t.fluid,"fluid"),S(t.google,"google"),S(t.icon,"icon"),S(t.linkedin,"linkedin"),S(t.instagram,"instagram"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.primary,"primary"),S(t.secondary,"secondary"),S(t.telegram,"telegram"),S(t.tertiary,"tertiary"),S(t.toggle,"toggle"),S(t.twitter,"twitter"),S(t.vk,"vk"),S(t.whatsapp,"whatsapp"),S(t.youtube,"youtube"),ke(t.attached,"attached"),ke(t.floated,"floated"),ke(t.labelPosition,"labeled"),Se(t.animated,"animated"),Se(t.labeled,"labeled"),"button"))}},render(){let t=this.as||"div";return e(t,{class:this.computedClass,role:"button"},{default:()=>{var s,l;return[(l=(s=this.$slots).default)==null?void 0:l.call(s)]}})}}),wo=E({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.hidden,"hidden"),S(t.visible,"visible"),"content"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),$o=E({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.basic,"basic"),S(t.icon,"icon"),S(t.labeled,"labeled"),S(t.vertical,"vertical"),ke(t.attached,"attached"),zt(t.widths,""),"buttons"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),$J={install(t){t.component(hl.name,hl),t.component(wo.name,wo),t.component($o.name,$o)}},Ao=E({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>Y("ui",S(t.fluid,"fluid"),S(t.text,"text"),Li(t.textAlign),"container"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),AJ={install(t){t.component(Ao.name,Ao)}},So=E({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.clearing,"clearing"),S(t.fitted,"fitted"),S(t.hidden,"hidden"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.section,"section"),S(t.vertical,"vertical"),ke(t.textAlign,"aligned"),"divider"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),SJ={install(t){t.component(So.name,So)}},ko=E({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(t){return{computedClass:D(()=>Y(t.size,S(t.disabled,"disabled"),S(t.link,"link"),S(t.loading,"loading")))}},render(){return this.computedClass?j("em",{class:this.computedClass,"data-emoji":this.$props.name}):j("em",{"data-emoji":this.$props.name})}}),kJ={install(t){t.component(ko.name,ko)}},To=E({name:"SuiFlag",props:{name:String},setup(t){return{computedClass:D(()=>Y(t.name,"flag"))}},render(){return j("i",{class:this.computedClass})}}),TJ={install(t){t.component(To.name,To)}},Zs=E({name:"SuiHeaderSubheader",props:{as:String},setup(t){return{elementType:t.as||"div"}},render(){var t,s;return j(this.elementType,{class:"sub header"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),xo=E({name:"SuiHeader",components:{HeaderSubheader:Zs},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(t){const s=t.as||"div",l=D(()=>Y("ui",t.color,t.size,S(t.block,"block"),S(t.disabled,"disabled"),S(t.dividing,"dividing"),S(t.icon,"icon"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.sub,"sub"),ke(t.floated,"floated"),Se(t.attached,"attached"),Li(t.textAlign),"header"));return{elementType:s,computedClass:l}},render(){var t,s;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(j(Zs,{},this.subheader)),l.length>0?j(this.elementType,{class:this.computedClass},l):j(this.elementType,{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Eo=E({name:"SuiHeaderContent",render(){var t,s;return j("div",{class:"content"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),xJ={install(t){t.component(xo.name,xo),t.component(Eo.name,Eo),t.component(Zs.name,Zs)}},ci=E({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(t){return{computedClass:D(()=>Y(t.color,t.name,t.size,S(t.bordered,"bordered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fitted,"fitted"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.loading,"loading"),ke(t.flipped,"flipped"),ke(t.rotated,"rotated"),Se(t.corner,"corner"),"icon"))}},render(){let t=this.$props.as||"i";return j(t,{"aria-hidden":!0,class:this.computedClass})}}),Bo=E({name:"SuiIconGroup",props:{as:String,size:String},setup(t){return{computedClass:D(()=>Y(t.size,"icons"))}},render(){var t,s;let l=this.$props.as||"i";return j(l,{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),EJ={install(t){t.component(ci.name,ci),t.component(Bo.name,Bo)}};const vc=["top","middle","bottom"],BJ={verticalAlign:{type:String,validator:t=>vc.includes(t)}};function RJ(t){return{verticalAlignClass:D(()=>t.verticalAlign&&vc.includes(t.verticalAlign)?`${t.verticalAlign} aligned`:null)}}const zJ=["left","right"],PJ={floated:{type:String,validator:t=>zJ.includes(t)}};function MJ(t){return{floatedClass:D(()=>t.floated&&(t.floated==="left"||t.floated==="right")?`${t.floated} floated`:null)}}var Ii=E({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(t,{slots:s}){const l=D(()=>Y("ui",t.size,t.color,S(t.basic,"basic"),S(t.circular,"circular"),S(t.empty,"empty"),S(t.floating,"floating"),S(t.horizontal,"horizontal"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.prompt,"prompt"),S(t.tag,"tag"),ke(t.attached,"attached"),ke(t.corner,"corner"),Se(t.pointing,"pointing"),Se(t.ribbon,"ribbon"),"label"));let o=t.as||"div";return t.icon?()=>j(o,{class:l.value},j(ci,{name:t.icon})):()=>{var d;return j(o,{class:l.value},(d=s.default)==null?void 0:d.call(s))}}}),Ro=E({name:"SuiLabelDetail",render(){var t,s;return e("div",{class:"detail"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),zo=E({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(t,{slots:s}){const l=D(()=>Y("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.tag,"tag"),"labels"));return()=>{var o;return j("div",{class:l.value},(o=s.default)==null?void 0:o.call(s))}}}),DJ={install(t){t.component(Ii.name,Ii),t.component(Ro.name,Ro),t.component(zo.name,zo)}},en=E({name:"SuiImage",props:Vt(Vt({as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String},BJ),PJ),setup(t,{slots:s}){const{verticalAlignClass:l}=RJ(t),{floatedClass:o}=MJ(t),d=D(()=>Y("ui",t.size,l.value,o.value,S(t.avatar,"avatar"),S(t.bordered,"bordered"),S(t.centered,"centered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.hidden,"hidden"),S(t.inline,"inline"),S(t.rounded,"rounded"),Se(t.spaced,"spaced"),"image"));if(t.as==="a"||t.as==="router-link"){let _=t.as;return t.as==="router-link"&&(_=b(t.as)),()=>{var f;return j(_,{class:d.value,href:t.href,target:t.target&&t.target},j("img",{src:t.src},(f=s.default)==null?void 0:f.call(s)))}}return t.wrapped?()=>{var _;return j("div",{class:d.value},j("img",{src:t.src},(_=s.default)==null?void 0:_.call(s)))}:t.label?()=>j("div",{class:d.value},[j("img",{src:t.src}),j(Ii,Vt({},t.label))]):()=>e("img",{class:d.value,src:t.src},null)}}),Po=E({name:"SuiImageGroup",props:{size:String},setup(t,{slots:s}){const l=D(()=>Y("ui",t.size,"images"));return()=>{var o;return j("div",{class:l.value},(o=s.default)==null?void 0:o.call(s))}}}),FJ={install(t){t.component(en.name,en),t.component(Po.name,Po)}},Mo=E({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean},setup(t,{emit:s}){const l=D(()=>typeof t.icon=="string"||t.loading),o=D(()=>!!t.label||t.labeled),d=D(()=>Y("ui",t.size,t.action&&"action",S(t.disabled,"disabled"),S(t.error,"error"),S(t.fluid,"fluid"),S(t.focus,"focus"),t.iconPosition,S(l.value,"icon"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.transparent,"transparent"),S(o.value,"labeled"),"input")),_=f=>s("update:modelValue",f.target.value);return()=>e("div",{class:d.value},[t.label&&e(Ii,null,{default:()=>[t.label]}),e("input",{type:"text",placeholder:t.placeholder,value:t.modelValue,onInput:f=>_(f)},null),l.value&&e(ci,{name:t.icon||"spinner"},null),t.action&&e(hl,null,{default:()=>[t.action]})])}}),IJ={install(t){t.component(Mo.name,Mo)}},Do=E({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(t,{slots:s}){const l=D(()=>Y("ui",S(t.animated,"animated"),S(t.bulleted,"bulleted"),S(t.celled,"celled"),S(t.divided,"divided"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.ordered,"ordered"),S(t.relaxed,"relaxed"),S(t.selection,"selection"),ke(t.verticalAlign,"aligned"),ke(t.floated,"floated"),"list"));let o=t.as||"div";return()=>{var d;return j(o,{class:l.value},(d=s.default)==null?void 0:d.call(s))}}}),Fo=E({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(t,{slots:s}){let l=t.as||"div";const o=D(()=>Y(S(t.active,"active"),S(t.disabled,"disabled"),"item"));return()=>{var d;return j(l,{class:o.value},(d=s.default)==null?void 0:d.call(s))}}}),Io=E({name:"SuiListIcon",components:{Icon:ci},setup(t,{slots:s}){return()=>{var l;return j(b(ci.name),Vt({},t),(l=s.default)==null?void 0:l.call(s))}}}),No=E({name:"SuiListContent",props:{verticalAlign:String},setup(t){return{computedClass:D(()=>Y(ke(t.verticalAlign,"aligned"),"content"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Lo=E({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:s}){return()=>{var l;return j(t.as,{class:"header"},(l=s.default)==null?void 0:l.call(s))}}}),Vo=E({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:s}){return()=>{var l;return j(t.as,{class:"description"},(l=s.default)==null?void 0:l.call(s))}}}),Oo=E({name:"SuiListList",render(){var t,s;return e("div",{class:"list"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),NJ={install(t){t.component(Do.name,Do),t.component(Fo.name,Fo),t.component(Io.name,Io),t.component(No.name,No),t.component(Lo.name,Lo),t.component(Vo.name,Vo),t.component(Oo.name,Oo)}},Ho=E({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(t,{slots:s}){return{computedClass:D(()=>{var o;return Y("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.fast,"fast"),S(t.indeterminate,"indeterminate"),S(t.inverted,"inverted"),S(t.slow,"slow"),S(t.text||!!((o=s.default)!=null&&o.call(s)),"text"),Se(t.inline,"inline"),"loader")})}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),LJ={install(t){t.component(Ho.name,Ho)}},jo=E({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(t){return{computedClass:D(()=>Y("ui",t.position,t.size,S(t.attached,"attached"),S(t.dividing,"dividing"),S(t.internal,"internal"),Se(t.close,"close"),"rail"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),VJ={install(t){t.component(jo.name,jo)}},qo=E({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.animated,S(t.active,"active"),S(t.disabled,"disabled"),S(t.instant,"instant"),"reveal"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Jo=E({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.visible,"visible"),S(t.hidden,"hidden"),"content"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),OJ={install(t){t.component(qo.name,qo),t.component(Jo.name,Jo)}},tn=E({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.clearing,"clearing"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.piled,"piled"),S(t.placeholder,"placeholder"),S(t.raised,"raised"),S(t.secondary,"secondary"),S(t.stacked,"stacked"),S(t.tertiary,"tertiary"),S(t.vertical,"vertical"),ke(t.floated,"floated"),ke(t.textAlign,"aligned"),Se(t.attached,"attached"),Se(t.fitted,"fitted"),Se(t.padded,"padded"),"segment"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Uo=E({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.compact,"compact"),S(t.horizontal,"horizontal"),S(t.piled,"piled"),S(t.raised,"raised"),S(t.stacked,"stacked"),"segments"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Yo=E({name:"SuiSegmentInline",render(){var t,s;return e("div",{class:"inline"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),HJ={install(t){t.component(tn.name,tn),t.component(Uo.name,Uo),t.component(Yo.name,Yo)}},Go=E({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.active,"active"),S(t.completed,"completed"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.link,"link"),S(t.vertical,"vertical"),"step"))}},render(){var t,s,l,o;return this.href?e("a",{class:this.computedClass,href:this.href},[(s=(t=this.$slots).default)==null?void 0:s.call(t)]):e("div",{class:this.computedClass},[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}});const jJ=["one","two","three","four","five","six","seven","eight"];var Wo=E({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(t){const{widths:s}=t;return{computedClass:D(()=>Y("ui",s&&jJ[s-1],t.size,S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.ordered,"ordered"),S(t.unstackable,"unstackable"),S(t.vertical,"vertical"),ke(t.attached,"attached"),ke(t.stackable,"stackable"),"steps"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Ko=E({name:"SuiStepContent",render(){var t,s;return e("div",{class:"content"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Qo=E({name:"SuiStepTitle",render(){var t,s;return e("div",{class:"title"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Xo=E({name:"SuiStepDescription",render(){var t,s;return e("div",{class:"description"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),qJ={install(t){t.component(Go.name,Go),t.component(Wo.name,Wo),t.component(Ko.name,Ko),t.component(Qo.name,Qo),t.component(Xo.name,Xo)}},JJ=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Button:$J,Container:AJ,Divider:SJ,Emoji:kJ,Flag:TJ,Header:xJ,Icon:EJ,Image:FJ,Input:IJ,Label:DJ,List:NJ,Loader:LJ,Rail:VJ,Reveal:OJ,Segment:HJ,Step:qJ}),pl=E({name:"SuiBreadcrumbDivider",props:{icon:String},setup(t){return{computedClass:D(()=>Y(t.icon,"icon","divider"))}},render(){var t,s;return this.icon?e("i",{"aria-hidden":"true",class:this.computedClass},null):e("div",{class:"divider"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),gl=E({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(t){const s=D(()=>Y(S(t.active,"active"),"section")),l=t.link||!!t.href;return{computedClass:s,isLink:l}},render(){let t="div";this.isLink?t="a":this.to&&(t=b("router-link"));const s={href:this.href,to:this.to};return e(t,As({class:this.computedClass},s),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),Zo=E({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.inverted,"inverted"),"breadcrumb"))}},render(){var t,s;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((d,_)=>{const f={active:d.active,href:d.href,link:d.link,to:d.to};return e($e,null,[e(gl,f,{default:()=>[d.content]}),this.sections.length!==_+1&&e(pl,{icon:this.icon},{default:()=>[n(" / ")]})])})};return e("div",{class:this.computedClass},[((s=(t=this.$slots).default)==null?void 0:s.call(t))||l()])}}),UJ={install(t){t.component(Zo.name,Zo),t.component(pl.name,pl),t.component(gl.name,gl)}},eu=E({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.error,"error"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.reply,"reply"),S(t.success,"success"),S(t.unstackable,"unstackable"),S(t.warning,"warning"),"form"))}},render(){var t,s;return e("form",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),tu=E({name:"SuiFormField",props:{error:Boolean,inline:Boolean,label:String,placeholder:String,required:Boolean,type:String},setup(t){const s=D(()=>Y(S(t.error,"error"),S(t.inline,"inline"),S(t.required,"required"),"field")),l=t.type||"text";return{computedClass:s,inputType:l}},render(){var t,s;return this.label?e("div",{class:this.computedClass},[e("label",null,[this.label]),e("input",{type:this.inputType,placeholder:this.placeholder},null)]):e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),iu=E({name:"SuiFormGroup",props:{widths:String},setup(t){return{computedClass:D(()=>Y(ke(t.widths,"width"),"fields"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),su=E({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&e("div",{class:"field"},[e("label",null,[this.label]),e("textarea",{placeholder:this.placeholder},null)]),e("div",{class:"field"},[e("textarea",{placeholder:this.placeholder},null)])}}),YJ={install(t){t.component(eu.name,eu),t.component(tu.name,tu),t.component(iu.name,iu),t.component(su.name,su)}},nu=E({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(t){return{computedClass:D(()=>Y("ui",t.container&&"container",S(t.centered,"centered"),S(t.compact,"compact"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),ke(t.reversed,"reversed"),ke(t.verticalAlign,"aligned"),Se(t.celled,"celled"),Se(t.divided,"divided"),Se(t.padded,"padded"),Se(t.relaxed,"relaxed"),Li(t.textAlign),zt(t.columns,"column"),"grid"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),lu=E({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(t){return{computedClass:D(()=>Y(t.color,ke(t.floated,"floated"),ke(t.only,"only"),Li(t.textAlign),zt(t.width,"wide"),qi(t.mobile,"mobile"),qi(t.tablet,"tablet"),qi(t.computer,"computer"),qi(t.largeScreen,"large screen"),qi(t.widescreen,"widescreen"),"column"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),au=E({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>Y(t.color,S(t.centered,"centered"),S(t.stretched,"stretched"),ke(t.only,"only"),zt(t.columns,"column"),Li(t.textAlign),"row"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),GJ={install(t){t.component(nu.name,nu),t.component(lu.name,lu),t.component(au.name,au)}},ou=E({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.borderless,"borderless"),S(t.compact,"compact"),S(t.fixed,"fixed"),S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.pagination,"pagination"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.stackable,"stackable"),S(t.text,"text"),S(t.vertical,"vertical"),Se(t.attached,"attached"),Se(t.floated,"floated"),Se(t.icon,"icon"),Se(t.tabular,"tabular"),zt(t.widths,"item"),"menu"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),uu=E({name:"SuiMenuHeader",props:{as:String,content:String},setup(t,{slots:s}){let l=t.as||"div";return()=>e(l,{class:"header"},{default:()=>{var o;return[t.content||((o=s.default)==null?void 0:o.call(s))]}})}}),ru=E({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(t,{slots:s}){let l=t.as||"a";t.header&&(l="div"),t.as==="router-link"&&(l=b(t.as));const o=D(()=>Y(t.color,t.position,S(t.action,"action"),S(t.active,"active"),S(t.browse,"browse"),S(t.disabled,"disabled"),S(t.header,"header"),S(t.link,"link"),Se(t.fitted,"fitted"),"item"));return()=>e(l,{class:o.value},{default:()=>{var d;return[t.name||((d=s.default)==null?void 0:d.call(s))]}})}}),du=E({name:"SuiMenuMenu",props:{position:String},setup(t){const{position:s}=t;return{computedClass:D(()=>Y(s,"menu"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),WJ={install(t){t.component(ou.name,ou),t.component(uu.name,uu),t.component(ru.name,ru),t.component(du.name,du)}},cu=E({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.compact,"compact"),S(t.error,"error"),S(t.floating,"floating"),S(t.hidden,"hidden"),S(t.icon,"icon"),S(t.info,"info"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.success,"success"),S(t.visible,"visible"),S(t.warning,"warning"),Se(t.attached,"attached"),"message"))}},render(){var t,s;return e("div",{class:this.computedClass},[(this.header||this.content)&&e(bl,null,{default:()=>[e(vl,null,{default:()=>[this.header]}),e("p",null,[this.content])]}),(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),bl=E({name:"SuiMessageContent",render(){var t,s;return j("div",{class:"content"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),vl=E({name:"SuiMessageHeader",render(){var t,s;return j("div",{class:"header"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),mu=E({name:"SuiMessageItem",render(){var t,s;return j("li",{class:"content"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),_u=E({name:"SuiMessageList",render(){var t,s;return j("ul",{class:"list"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),KJ={install(t){t.component(cu.name,cu),t.component(bl.name,bl),t.component(vl.name,vl),t.component(mu.name,mu),t.component(_u.name,_u)}},fu=E({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.celled,"celled"),S(t.collapsing,"collapsing"),S(t.definition,"definition"),S(t.fixed,"fixed"),S(t.inverted,"inverted"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.stackable,"stackable"),S(t.striped,"striped"),S(t.structured,"structured"),S(t.unstackable,"unstackable"),Se(t.attached,"attached"),Se(t.basic,"basic"),Se(t.compact,"compact"),Se(t.padded,"padded"),zt(t.columns,"column"),"table"))}},render(){var t,s;return e("table",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),hu=E({name:"SuiTableBody",render(){var t,s;return j("tbody",{},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),pu=E({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>Y(t.color,S(t.active,"active"),S(t.collapsing,"collapsing"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.warning,"warning"),ke(t.verticalAlign,"aligned"),ke(t.marked,"marked"),Li(t.textAlign)))}},render(){var t,s,l,o;return this.computedClass?e("td",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)]):e("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),gu=E({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(t){const{fullWidth:s}=t;return{computedClass:D(()=>Y(S(s,"full-width")))}},render(){var t,s,l,o;return this.computedClass?j("tfoot",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t)):j("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),bu=E({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.fullWidth,"full-width")))}},render(){var t,s,l,o;return this.computedClass?j("thead",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t)):j("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),vu=E({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(t){return{computedClass:D(()=>Y(S(t.singleLine,"single line"),ke(t.textAlign,"aligned"),zt(t.width,"wide")))}},render(){var t,s,l,o;return this.computedClass?e("th",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)]):e("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Cu=E({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>Y(t.color,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.warning,"warning"),ke(t.textAlign,"aligned"),ke(t.verticalAlign,"aligned")))}},render(){var t,s,l,o;return this.computedClass?e("tr",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)]):e("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),QJ={install(t){t.component(fu.name,fu),t.component(hu.name,hu),t.component(pu.name,pu),t.component(gu.name,gu),t.component(bu.name,bu),t.component(vu.name,vu),t.component(Cu.name,Cu)}},XJ=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Breadcrumb:UJ,Form:YJ,Grid:GJ,Menu:WJ,Message:KJ,Table:QJ}),yu=E({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(t){return{computedClass:D(()=>Y("ui",t.unit,S(t.centered,"centered"),S(!!t.test,"test"),"ad"))}},render(){var t,s,l,o;return this.$props.test?j("div",{class:this.computedClass,"data-text":this.$props.test},(s=(t=this.$slots).default)==null?void 0:s.call(t)):j("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),ZJ={install(t){t.component(yu.name,yu)}},wu=E({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,S(t.centered,"centered"),S(t.fluid,"fluid"),S(t.horizontal,"horizontal"),S(t.link,"link"),S(t.raised,"raised"),"card"))}},render(){var t,s,l,o;return this.$props.href||this.$props.link?j("a",{class:this.computedClass,href:this.$slots.href},(s=(t=this.$slots).default)==null?void 0:s.call(t)):j("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),$u=E({name:"SuiCardContent",props:{extra:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.extra,"extra"),"content"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Au=E({name:"SuiCardDescription",props:{textAlign:String},setup(t){return{computedClass:D(()=>Y(ke(t.textAlign,"aligned"),"description"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Su=E({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.centered,"centered"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),zt(t.itemsPerRow,""),"cards"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),ku=E({name:"SuiCardHeader",props:{textAlign:String},setup(t){return{computedClass:D(()=>Y(ke(t.textAlign,"aligned"),"header"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Tu=E({name:"SuiCardMeta",render(){var t,s;return j("div",{class:"meta"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),eU={install(t){t.component(wu.name,wu),t.component($u.name,$u),t.component(Au.name,Au),t.component(Su.name,Su),t.component(ku.name,ku),t.component(Tu.name,Tu)}},xu=E({name:"SuiComment",render(){var t,s;return j("div",{class:"comment"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Eu=E({name:"SuiCommentAction",props:{active:Boolean},setup(t){const{active:s}=t;return{computedClass:D(()=>Y(S(s,"active")))}},render(){var t,s,l,o;return this.computedClass?j("a",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t)):j("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Bu=E({name:"SuiCommentActions",render(){var t,s;return j("div",{class:"actions"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Ru=E({name:"SuiCommentAuthor",props:{as:String},render(){var t,s;let l=this.$props.as||"div";return j(l,{class:"author"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),zu=E({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let t=this.$props.as||"div";return j(t,{class:"avatar"},j("img",{src:this.$props.src}))}}),Pu=E({name:"SuiCommentContent",render(){var t,s;return j("div",{class:"content"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Mu=E({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.collapsed,"collapsed"),S(t.inverted,"inverted"),S(t.minimal,"minimal"),S(t.threaded,"threaded"),"comments"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Du=E({name:"SuiCommentMetadata",render(){var t,s;return j("div",{class:"metadata"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Fu=E({name:"SuiCommentText",render(){var t,s;return j("div",{class:"text"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),tU={install(t){t.component(xu.name,xu),t.component(Eu.name,Eu),t.component(Bu.name,Bu),t.component(Ru.name,Ru),t.component(zu.name,zu),t.component(Pu.name,Pu),t.component(Mu.name,Mu),t.component(Du.name,Du),t.component(Fu.name,Fu)}},Iu=E({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.inverted,"inverted"),"feed"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Nu=E({name:"SuiFeedContent",render(){var t,s;return j("div",{class:"content"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Lu=E({name:"SuiFeedDate",render(){var t,s;return j("div",{class:"date"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Vu=E({name:"SuiFeedEvent",render(){var t,s;return j("div",{class:"event"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Ou=E({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(t){const{images:s,text:l}=t;return{computedClass:D(()=>Y(S(s,"images"),S(l,"text"),"extra"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Hu=E({name:"SuiFeedLabel",render(){var t,s;return j("div",{class:"label"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),ju=E({name:"SuiFeedLike",render(){var t,s;return j("a",{class:"like"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),qu=E({name:"SuiFeedMeta",render(){var t,s;return j("div",{class:"meta"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Ju=E({name:"SuiFeedSummary",render(){var t,s;return j("div",{class:"summary"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Uu=E({name:"SuiFeedUser",render(){var t,s;return j("a",{class:"user"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),iU={install(t){t.component(Iu.name,Iu),t.component(Nu.name,Nu),t.component(Lu.name,Lu),t.component(Vu.name,Vu),t.component(Ou.name,Ou),t.component(Hu.name,Hu),t.component(ju.name,ju),t.component(qu.name,qu),t.component(Ju.name,Ju),t.component(Uu.name,Uu)}},Yu=E({name:"SuiItem",render(){var t,s;return j("div",{class:"item"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Gu=E({name:"SuiItemContent",props:{verticalAlign:String},setup(t){const{verticalAlign:s}=t;return{computedClass:D(()=>Y(ke(s,"aligned"),"content"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Wu=E({name:"SuiItemDescription",render(){var t,s;return j("div",{class:"description"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Ku=E({name:"SuiItemExtra",render(){var t,s;return j("div",{class:"extra"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Qu=E({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.divided,"divided"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.unstackable,"unstackable"),Se(t.relaxed,"relaxed"),"items"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Xu=E({name:"SuiItemHeader",props:{as:String},render(){var t,s;let l=this.$props.as||"div";return j(l,{class:"header"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Zu=E({name:"SuiItemImage",props:{size:String},setup(t){return{computedClass:D(()=>Y(t.size,"image"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),er=E({name:"SuiItemMeta",render(){var t,s;return j("div",{class:"meta"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),sU={install(t){t.component(Yu.name,Yu),t.component(Gu.name,Gu),t.component(Wu.name,Wu),t.component(Ku.name,Ku),t.component(Qu.name,Qu),t.component(Xu.name,Xu),t.component(Zu.name,Zu),t.component(er.name,er)}},sn=E({name:"SuiStatisticLabel",props:{content:String},render(){var t,s;return this.$props.content?j("div",{class:"label"},this.$props.content):j("div",{class:"label"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),nn=E({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.text,"text"),"value"))}},render(){var t,s;return this.$props.content?j("div",{class:this.computedClass},this.$props.content):j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),tr=E({name:"SuiStatistic",components:{StatisticLabel:sn,StatisticValue:nn},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(t){const s=Pe("ui",!0);return{computedClass:D(()=>Y(s&&"ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.text,"text"),Se(t.floated,"floated"),"statistic"))}},render(){var t,s,l,o,d,_;let f=[];return this.$props.value&&f.push(j(nn,{content:this.$props.value},(s=(t=this.$slots).default)==null?void 0:s.call(t))),this.$props.label&&f.push(j(sn,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),j("div",{class:this.computedClass},f.length>0?f:(_=(d=this.$slots).default)==null?void 0:_.call(d))}}),ir=E({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(t){return We("ui",!1),{computedClass:D(()=>Y("ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),zt(t.widths,""),"statistics"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),nU={install(t){t.component(tr.name,tr),t.component(ir.name,ir),t.component(sn.name,sn),t.component(nn.name,nn)}},lU=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Advertisement:ZJ,Card:eU,Comment:tU,Feed:iU,Item:sU,Statistic:nU}),sr=E({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(t){const s=t.multiple?L([]):L(-1),l=_=>t.multiple?s.value.includes(_):s.value===_,o=_=>{const f=l(_);t.multiple?f?s.value=s.value.filter(m=>m!==_):s.value.push(_):s.value=f?-1:_};return We("isTabActive",l),We("updateActiveIndex",o),{computedClass:D(()=>Y("ui",S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.styled,"styled"),"accordion"))}},render(){var t,s;const l=o=>(o.forEach((d,_)=>{d.props.index=_}),o);return e("div",{class:this.computedClass},[l((s=(t=this.$slots).default)==null?void 0:s.call(t))])}}),nr=E({name:"SuiAccordionAccordion",render(){var t,s;return j("div",{class:"accordion"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),Cl=E({name:"SuiAccordionContent",props:{active:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.active,"active"),"content"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),lr=E({name:"SuiAccordionTab",props:{index:Number,title:String},setup(t){const s=Pe("isTabActive"),l=Pe("updateActiveIndex"),o=D(()=>Y(S(s(t.index),"active"),"title"));return{isTabActive:s,updateActiveIndex:l,titleClass:o}},render(){return e($e,null,[e("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[e(ci,{name:"dropdown"},null),this.title]),e(Cl,{active:this.isTabActive(this.index)},{default:()=>{var t,s;return[(s=(t=this.$slots).default)==null?void 0:s.call(t)]}})])}}),ar=E({name:"SuiAccordionTitle",props:{active:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.active,"active"),"title"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),aU={install(t){t.component(sr.name,sr),t.component(nr.name,nr),t.component(Cl.name,Cl),t.component(lr.name,lr),t.component(ar.name,ar)}};const oU=(t,s,l)=>{t.clickOutside=o=>{t===o.target||t.contains(o.target)||s.value(o,t)},document.body.addEventListener("click",t.clickOutside)},uU=(t,s,l)=>{document.body.removeEventListener("click",t.clickOutside)};var ra={mounted:oU,unmounted:uU};function rU(t,s={}){const l=L(t.value?"open":"closed"),o=()=>l.value=t.value?"open":"closed";tt(t,m=>{l.value=m?"opening":"closing"});const d=m=>{m.addEventListener("animationend",o,!0)},_=m=>{!m||m.removeEventListener("animationend",o)},f=D((m="scale")=>{switch(l.value){case"opening":return`animating ${m} in`;case"open":return"visible active";case"closing":return`visible active animating ${m} out`;case"closed":return"hidden"}});return{setupAnimation:d,removeAnimation:_,computeAnimationClass:f}}var dU=E({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(t,{emit:s}){const l=L(!1),o=()=>{t.disabled||(l.value=!0)},d=()=>l.value=!1,_=()=>{t.disabled||s("select-day",t.date)},f=()=>{let a=new Date;return a.getFullYear()===t.date.year&&a.getMonth()===t.date.month&&a.getDate()===t.date.day},m=D(()=>Y("link",S(l.value,"focus"),S(t.active&&!t.disabled,"active"),S(t.disabled,"adjacent disabled"),S(f(),"today")));return{onMouseEnter:o,onMouseLeave:d,onClick:_,computedClass:m}},render(){var t,s;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:ct(this.onClick,["stop"])},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),cU=E({name:"SuiCalendarDateTable",setup(){const{calendarDays:t,updateSelectMode:s,set:l,add:o,subtract:d,selectedDate:_,setSelectedDate:f,selectType:m,updateVisible:a,formatDate:u}=Pe(Qt);return{calendarDays:t,isEqualDay:g=>{if(!_.value)return!1;const v=_.value;return v.getFullYear()===g.year&&v.getMonth()===g.month&&v.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),m.value==="date"){let v=new Date(g.year,g.month,g.day);f(v),a(!1);return}s("hour")},updateSelectMode:s,formatDate:u,add:o,subtract:d}},render(){const t=()=>this.calendarDays.map((s,l)=>e("tr",null,[s.map(o=>e(dU,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return e("table",{class:"ui celled center aligned unstackable table day seven column"},[e("thead",null,[e("tr",null,[e("th",{colspan:7},[e("span",{class:"link",onClick:ct(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"months")},[e("i",{class:"chevron right icon"},null)])])]),e("tr",null,[e("th",null,[n("S")]),e("th",null,[n("M")]),e("th",null,[n("T")]),e("th",null,[n("W")]),e("th",null,[n("T")]),e("th",null,[n("F")]),e("th",null,[n("S")])])]),e("tbody",null,[t()])])}}),me=E({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(t){const s=L(!1),l=()=>s.value=!0,o=()=>s.value=!1,d=D(()=>Y("link",S(t.active,"active"),S(t.today,"today"),S(s.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:d}},render(){var t,s;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:ct(()=>this.$emit("click-cell",this.value),["stop"])},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),mU=E({name:"SuiCalendarMonthTable",setup(){const{state:t,set:s,add:l,subtract:o,selectedDate:d,updateSelectMode:_}=Pe(Qt);return{state:t,add:l,subtract:o,updateSelectMode:_,isActive:u=>d.value?t.year===d.value.getFullYear()&&t.month===u:!1,isThisMonth:u=>{let h=new Date;return u===h.getMonth()&&t.year===h.getFullYear()},onClickCell:u=>{s(u,"months"),_("day")}}},render(){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=()=>Array(4).fill(0).map((l,o)=>e("tr",null,[e(me,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[t[o*3]]}),e(me,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[t[o*3+1]]}),e(me,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[t[o*3+2]]})]));return e("table",{class:"ui celled center aligned unstackable table month three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ct(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"years")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[s()])])}}),_U=E({name:"SuiCalendarYearTable",setup(t){const{state:s,set:l,add:o,subtract:d,selectedDate:_,updateSelectMode:f}=Pe(Qt),m=()=>o(10,"years"),a=()=>d(10,"years"),u=D(()=>Math.round(s.year/10)*10+1);return{updateSelectMode:f,moveNextTwelveYears:m,movePrevTwelveYears:a,headerStartYear:u,isActive:v=>_.value?v===_.value.getFullYear():!1,isThisYear:v=>{let r=new Date;return v===r.getFullYear()},onClickCell:v=>{l(v,"years"),f("day")}}},render(){return e("table",{class:"ui celled center aligned unstackable table year three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ct(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),e("span",{class:"prev link",onClick:this.movePrevTwelveYears},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.moveNextTwelveYears},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),e(me,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),e(me,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),e("tr",null,[e(me,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),e(me,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),e(me,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),e("tr",null,[e(me,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),e(me,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),e(me,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),e("tr",null,[e(me,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),e(me,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),e(me,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),fU=E({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:t,state:s,set:l,add:o,subtract:d,formatDate:_,selectedDate:f}=Pe(Qt);return{updateSelectMode:t,formatDate:_,onPrevClick:()=>d(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:c=>{l(c,"hours"),t("minute")},isActive:c=>{if(!f.value)return!1;let g=f.value.getFullYear(),v=f.value.getMonth(),r=f.value.getDate(),C=f.value.getHours();return s.year===g&&s.month===v&&s.day===r&&c===C}}},render(){return e("table",{class:"ui celled center aligned unstackable table hour four column"},[e("thead",null,[e("tr",null,[e("th",{colspan:4},[e("span",{class:"link",onClick:ct(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:this.onPrevClick},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.onNextClick},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),e(me,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),e(me,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),e(me,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),e(me,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),e(me,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),e(me,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),e(me,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),e(me,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),e(me,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),e(me,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),e(me,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),e(me,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),e(me,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),e(me,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),e(me,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function _t(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$t(t)}var hU=E({name:"SuiCalendarMinuteTable",setup(){const{state:t,set:s,add:l,subtract:o,formatDate:d,updateSelectMode:_,updateVisible:f,selectedDate:m}=Pe(Qt);return{add:l,subtract:o,formatDate:d,updateSelectMode:_,getTimeLabel:c=>{let g=t.hour%12,v=t.hour>12?"PM":"AM",r=c.toString().padStart(2,"0");return t.hour===0?`12:${r} AM`:t.hour===12?`12:${r} PM`:`${g}:${r} ${v}`},onClickCell:c=>{s(c,"minutes"),m.value=new Date(t.year,t.month,t.day,t.hour,t.minute),f(!1)},isActive:c=>{if(!m.value)return!1;let g=m.value.getFullYear(),v=m.value.getMonth(),r=m.value.getDate(),C=m.value.getHours(),w=m.value.getMinutes();return t.year===g&&t.month===v&&t.day===r&&t.hour===C&&c===w}}},render(){let t,s,l,o,d,_,f,m,a,u,h,c;return e("table",{class:"ui celled center aligned unstackable table minute three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ct(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"days")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},_t(t=this.getTimeLabel(0))?t:{default:()=>[t]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},_t(s=this.getTimeLabel(5))?s:{default:()=>[s]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},_t(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),e("tr",null,[e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},_t(o=this.getTimeLabel(15))?o:{default:()=>[o]}),e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},_t(d=this.getTimeLabel(20))?d:{default:()=>[d]}),e(me,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},_t(_=this.getTimeLabel(25))?_:{default:()=>[_]})]),e("tr",null,[e(me,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},_t(f=this.getTimeLabel(30))?f:{default:()=>[f]}),e(me,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},_t(m=this.getTimeLabel(35))?m:{default:()=>[m]}),e(me,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},_t(a=this.getTimeLabel(40))?a:{default:()=>[a]})]),e("tr",null,[e(me,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},_t(u=this.getTimeLabel(45))?u:{default:()=>[u]}),e(me,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},_t(h=this.getTimeLabel(50))?h:{default:()=>[h]}),e(me,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},_t(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),pU=E({name:"SuiCalendarBody",setup(){const t=L(null),{visible:s,selectMode:l}=Pe(Qt),{setupAnimation:o,removeAnimation:d,computeAnimationClass:_}=rU(s);Wt(()=>o(t.value)),hi(()=>d(t.value));const f=D(()=>Y("ui popup calendar","bottom left","transition",_.value));return{rootRef:t,computedClass:f,selectMode:l}},render(){const t=()=>{switch(this.selectMode){case"day":return e(cU,null,null);case"month":return e(mU,null,null);case"year":return e(_U,null,null);case"hour":return e(fU,null,null);case"minute":return e(hU,null,null)}};return e("div",{ref:s=>this.rootRef=s,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[t()])}}),gU=E({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(t){const{visible:s,updateVisible:l,updateSelectMode:o,set:d,state:_,formatCalendarDate:f}=Pe(Qt);return{visible:s,formatCalendarDate:f,onClick:()=>{s.value||(o("day"),t.value&&(d(t.value.getFullYear(),"years"),d(t.value.getMonth(),"months"))),l(!s.value)}}},render(){return e("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}});const bU=(t,s)=>{let l=new Date;l.setDate(1),l.setMonth(s),l.setFullYear(t);let o=l.getDay();return o>=7?o-7:o},vU=(t,s)=>{let l,o;return s===0?(l=11,o=t-1):(l=s-1,o=t),32-new Date(o,l,32).getDate()},Hn=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t];function CU(){const t=L(!1),s=(C=!1)=>t.value=C,l=new Date;function o(C){if(!C)return;let w=C.getFullYear(),A=Hn(C.getMonth()),p=C.getDate(),$=C.getHours(),k=C.getMinutes(),x=$>11?"PM":"AM";$=$%12,$===0&&($=12,x="AM");let R=k.toString().padStart(2,"0");return`${A} ${p}, ${w} ${$}:${R} ${x}`}const d=L("default"),_=L("day");function f(C){_.value=C}const m=L(null),a=C=>{m.value=C},u=Bt({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),h=(C,w)=>{switch(w){case"years":u.year=C;break;case"months":u.month=C;break;case"days":u.day=C;break;case"hours":u.hour=C;break;case"minutes":u.minute=C}},c=(C,w)=>{let A=new Date(u.year,u.month,u.day,u.hour);switch(w){case"years":A.setFullYear(A.getFullYear()+C);break;case"months":A.setMonth(A.getMonth()+C);break;case"days":A.setDate(A.getDate()+C);break;case"hours":A.setHours(A.getHours()+C);break}u.year=A.getFullYear(),u.month=A.getMonth(),u.day=A.getDate(),u.hour=A.getHours()},g=(C,w)=>{let A=new Date(u.year,u.month,u.day,u.hour);switch(w){case"years":A.setFullYear(A.getFullYear()-C);break;case"months":A.setMonth(A.getMonth()-C);break;case"days":A.setDate(A.getDate()-C);break;case"hours":A.setHours(A.getHours()-C);break}u.year=A.getFullYear(),u.month=A.getMonth(),u.day=A.getDate(),u.hour=A.getHours()},v=(C="default")=>C==="date"?`${Hn(u.month)} ${u.year}`:`${Hn(u.month)} ${u.day}, ${u.year}`,r=D(()=>{let C=u.month,w=u.year;C>11&&(C=C%11-1,w+=1);let A=[],p=bU(w,C),$=32-new Date(w,C,32).getDate(),k=vU(w,C),x=1;for(let R=0;R<6;R++){let z=[];if(R===0){for(let P=k-p+1;P<=k;P++){let U=C===0?11:C-1,Z=C===0?w-1:w;z.push({day:P,month:U,year:Z,currentMonth:!1})}let F=7-z.length;for(let P=0;P<F;P++)z.push({day:x,month:C,year:w,currentMonth:!0}),x++}else for(let F=0;F<7;F++){if(x>$){let P=C===11?0:C+1,U=C===11?w+1:w;z.push({day:x-$,month:P,year:U,currentMonth:!1})}else z.push({day:x,month:C,year:w,currentMonth:!0});x++}A.push(z)}return A});return{visible:t,updateVisible:s,calendarDays:r,formatCalendarDate:o,selectMode:_,updateSelectMode:f,selectType:d,selectedDate:m,setSelectedDate:a,state:u,set:h,add:c,subtract:g,formatDate:v}}const Qt=Symbol("useCalendar");var or=E({name:"SuiCalendar",directives:{clickoutside:ra},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(t,{emit:s}){const l=CU();We(Qt,l);const{updateVisible:o,selectedDate:d}=l;return tt(d,_=>{s("update:modelValue",_)}),{updateVisible:o}},render(){return vn(e("div",{class:"ui calendar"},[e("div",{class:"ui input left icon"},[e(pU,null,null),e("i",{class:"calendar icon"},null),e(gU,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[Cn("clickoutside"),()=>this.updateVisible(!1)]])}}),yU={install:t=>{t.component(or.name,or)}},ur=E({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(t,{emit:s}){const l=D(()=>Y("ui",!t.label&&"fitted",S(t.disabled,"disabled"),S(t.indeterminate,"indeterminate"),S(t.readOnly,"read-only"),S(t.slider,"slider"),S(t.toggle,"toggle"),"checkbox")),o=D(()=>Array.isArray(t.modelValue)?t.modelValue.includes(t.value):t.modelValue);return{computedClass:l,checked:o,onClick:_=>{if(t.disabled||t.readOnly)return;let f;t.value?o.value?f=t.modelValue.filter(m=>t.value!==m):f=t.modelValue?[...t.modelValue,t.value]:[t.value]:f=!t.modelValue,s("change",_),s("click",_),s("update:modelValue",f)}}},render(){return e("div",{class:this.computedClass,onClick:this.onClick},[e("input",{type:"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),e("label",null,[this.label])])}}),wU={install(t){t.component(ur.name,ur)}},rr=E({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(t){return{computedClass:D(()=>Y("ui",S(t.active,"active"),S(t.inverted,"inverted"),S(t.page,"page"),S(t.simple,"simple"),ke(t.verticalAlign,"aligned"),"dimmer"))}},render(){var t,s;return j("div",{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),dr=E({name:"SuiDimmerDimmable",components:{Segment:tn},props:{blurring:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.blurring,"blurring"),"dimmable"))}},render(){var t,s;return j(tn,{class:this.computedClass},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),$U={install(t){t.component(rr.name,rr),t.component(dr.name,dr)}};const AU=(t,s)=>t.map(l=>l[s]);var SU=E({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(t){return{computedClass:D(()=>Y(S(t.filtered,"filtered"),S(!t.text&&!t.item||Array.isArray(t.item)&&t.item.length===0,"default"),"text"))}},render(){var t,s;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:_,text:f}=this.item;l=e($e,null,[_&&e("i",{class:`${_} flag`},null),f])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(t=this.item)==null?void 0:t.image:null,d=typeof this.item=="object"?(s=this.item)==null?void 0:s.label:null;return e($e,null,[e("div",{class:this.computedClass},[o&&e(en,o,null),d&&e(Ii,d,null),l]),e("i",{class:`${this.icon} icon`},null),this.$props.clearable&&e("i",{class:"remove icon",onClick:ct(()=>this.$emit("remove"),["stop"])},null)])}});const kU=t=>{const s=Bt({visible:!1,animating:!1,direction:"down",multiple:t.multiple});return tt(()=>s.visible,()=>{s.animating=!0,setTimeout(()=>s.animating=!1,200)}),{state:s,show:()=>!s.animating&&(s.visible=!0),hide:()=>{s.animating||(s.visible=!1)}}};function TU(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$t(t)}var cr=E({name:"SuiDropdown",directives:{clickoutside:ra},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(t,{emit:s}){const l=kU(t);We("useDropdown",l);const{state:o,show:d,hide:_}=l,f=D(()=>Y("ui",S(t.button,"button"),S(t.clearable,"clearable"),S(t.compact,"compact"),S(t.floating,"floating"),S(t.fluid,"fluid"),S(!!t.icon,"icon"),S(t.inline,"inline"),S(t.item,"item"),S(t.labeled,"labeled"),S(t.multiple,"multiple"),S(t.scrolling,"scrolling"),S(t.selection,"selection"),S(t.search,"search"),S(t.simple,"simple"),Se(t.pointing,"pointing"),"dropdown",S(o.visible,"active visible"),S(o.direction==="up","upward"))),m=()=>o.visible?_():d(),a=()=>{t.search&&g.value&&g.value.focus(),d()},u=()=>_(),h=L(""),c=D(()=>t.options.filter(w=>typeof w=="string"?w.toLowerCase().includes(h.value.toLowerCase()):t.multiple&&Array.isArray(t.modelValue)?typeof w=="object"?!AU(t.modelValue,"text").includes(w.text):t.modelValue.includes(w):w.text.toLowerCase().includes(h.value.toLowerCase()))),g=L(null),v=w=>h.value=w.target.value,r=w=>{if(h.value="",t.multiple){let A=Array.isArray(t.modelValue)?[...t.modelValue,w]:[w];return s("update:modelValue",A)}return s("update:modelValue",w)},C=w=>{if(Array.isArray(t.modelValue)){const A=t.modelValue.findIndex(p=>p===w);if(A>-1){let p=Object.assign(t.modelValue);p.splice(A,1),s("update:modelValue",p)}}};return We("selection",t.selection),{computedClass:f,onClick:m,openMenu:a,closeMenu:u,filteredText:h,filteredOptions:c,inputRef:g,onInput:v,onSelect:r,removeItem:C}},render(){var t,s;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(f=>typeof f=="object"?e("a",{class:"ui label"},[f.flag&&e("i",{class:`${f.flag} flag`},null),f.text,e("i",{class:"delete icon",onClick:ct(()=>this.removeItem(f),["stop"])},null)]):e("a",{class:"ui label"},[f,e("i",{class:"delete icon",onClick:ct(()=>this.removeItem(f),["stop"])},null)]))},o=()=>this.filteredOptions.filter(f=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(f):!0).map(f=>e(yl,{item:f,active:this.$props.modelValue&&typeof f=="object"?f.text===this.$props.modelValue.text:f===this.$props.modelValue,text:typeof f=="object"?f.text:f,flag:typeof f=="object"&&Object.keys(f).includes("flag")?f.flag:"",image:f.image,label:f.label,onSelect:this.onSelect},null)),d=()=>{let f={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return e(SU,As(f,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},_=()=>{let f;return e(wl,{search:this.$props.searchInMenu,onSearch:this.onInput},TU(f=o())?f:{default:()=>[f]})};return vn(e("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&e("input",{ref:f=>this.inputRef=f,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:f=>this.onInput(f)},null),this.search&&this.multiple&&e("span",{class:"sizer"},null),d(),((s=(t=this.$slots).default)==null?void 0:s.call(t))||_()]),[[Cn("clickoutside"),this.closeMenu]])}}),yl=E({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,onSelect:Function},setup(t,{emit:s}){const{state:l,hide:o}=Pe("useDropdown");return{computedClass:D(()=>Y(S(t.active,"active"),"item")),onClick:()=>{l.multiple||o(),s("select",t.item?t.item:t.text)}}},render(){return e("div",{class:this.computedClass,onClick:ct(this.onClick,["stop"])},[this.flag&&e("i",{class:`${this.flag} flag`},null),this.icon&&e("i",{class:`${this.icon} icon`},null),this.image&&e(en,this.image,null),this.label&&e(Ii,this.label,null),this.description&&e("span",{class:"description"},[this.description]),this.text])}}),wl=E({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(t,{emit:s,slots:l}){const{state:o}=Pe("useDropdown"),d=L(null),_=D(()=>{let a=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return Y("menu","transition",S(o.visible,"visible"),S(!o.visible&&!o.animating,"hidden"),S(o.animating,a()))});tt(()=>o.visible,a=>{if(!a||!d.value)return;let u=d.value.parentElement;const{top:h,height:c}=u==null?void 0:u.getBoundingClientRect(),g=h-f.value.length*37,v=document.documentElement.clientHeight-h-c-f.value.length*37;o.direction=g>v?"up":"down"});const f=D(()=>{var a;let u=[],h=(a=l.default)==null?void 0:a.call(l);return h&&h.forEach(c=>{c.type.name==="SuiSelectItem"&&u.push(c)}),u});return{container:d,computedClass:_,onSearchInput:a=>s("search",a)}},render(){var t,s,l,o;const d=()=>e($e,null,[e("div",{class:"ui left icon input",onClick:ct(()=>{},["stop"])},[e("input",{type:"text",onInput:_=>this.onSearchInput(_)},null),e("i",{class:"search icon"},null)]),e("div",{class:"ui divider"},null)]);return e("div",{ref:_=>this.container=_,class:this.computedClass},[this.$slots.header&&e("div",{class:"header"},[(s=(t=this.$slots).header)==null?void 0:s.call(t)]),this.$props.search&&d(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),xU={install(t){t.component(cr.name,cr),t.component(yl.name,yl),t.component(wl.name,wl)}},mr=E({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(t){const s=L(t.active),l=()=>{s.value=!s.value},o=()=>t.source==="youtube"?[`//www.youtube.com/embed/${t.id}`,"?autohide=true",`&amp;autoplay=${t.autoplay}`,"&amp;jsapi=false"].join(""):t.url,d=D(()=>Y("ui",t.aspectRatio,S(s.value,"active"),"embed"));return{active:s,getSrc:o,clickHandler:l,computedClass:d}},render(){let t=[j("i",{class:"video play icon"}),j("img",{class:"placeholder",src:this.placeholder})];return this.active&&t.push(j("div",{class:"embed"},j("iframe",{src:this.getSrc()}))),j("div",{class:this.computedClass,onClick:this.clickHandler},t)}}),EU={install(t){t.component(mr.name,mr)}},_r=E({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,modelValue:Boolean,size:String},setup(t,{emit:s}){const l=L(t.modelValue?"open":"closed"),o=L(null),d=D(()=>l.value!=="closed");tt(()=>t.modelValue,g=>{l.value=g?"opening":"closing"});const _=(g,v="scale")=>{switch(g){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},f=()=>l.value=t.modelValue?"open":"closed";Wt(()=>{var g;(g=o.value)==null||g.addEventListener("animationend",f,!0)}),hi(()=>{var g;(g=o.value)==null||g.removeEventListener("animationend",f)});const m=D(()=>Y("ui","page modals dimmer transition",_(l.value,"fade"))),a=D(()=>({display:d.value?"flex !important":"none !important",animationDuration:"500ms"})),u=D(()=>({display:d.value?"block !important":"none !important",animationDuration:"500ms"})),h=D(()=>Y("ui",t.size,S(t.basic,"basic"),"modal","transition",_(l.value)));return{dimmerClass:m,dimmerStyle:a,modalStyle:u,computedClass:h,close:()=>{s("update:modelValue",!1)},root:o}},render(){return e(Ql,{to:"body"},{default:()=>{var t,s;return[e("div",{class:this.dimmerClass,style:this.dimmerStyle,onClick:this.close,ref:l=>this.root=l},[e("div",{class:this.computedClass,style:this.modalStyle,onClick:l=>l.stopPropagation()},[this.closeIcon&&e("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(s=(t=this.$slots).default)==null?void 0:s.call(t)])])]}})}}),fr=E({name:"SuiModalActions",render(){var t,s;return e("div",{class:"actions"},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),hr=E({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.image,"image"),S(t.scrolling,"scrolling"),"content"))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),pr=E({name:"SuiModalDescription",render(){var t,s;return j("div",{class:"description"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),gr=E({name:"SuiModalHeader",render(){var t,s;return j("div",{class:"header"},(s=(t=this.$slots).default)==null?void 0:s.call(t))}}),BU={install(t){t.component(_r.name,_r),t.component(fr.name,fr),t.component(hr.name,hr),t.component(pr.name,pr),t.component(gr.name,gr)}},RU=t=>{const s=L(!1),l=Hs(t,"position"),o=L(null),d=Hs(t,"trigger"),_=()=>{s.value=!0,vs(()=>m())},f=()=>{s.value=!1},m=()=>{if(!o.value||!d.value)return;let a=0,u=0;const h=o.value,c=d.value.$el;h.style.transform=`translate(${a}px, ${u}px)`;const{top:g,left:v,width:r,height:C}=c.getBoundingClientRect(),w=h.getBoundingClientRect(),{pageXOffset:A,pageYOffset:p}=window;if(l.value.includes("top")?(a=A+v,u=p+g-h.offsetTop-h.offsetHeight):(a=v,u=g+C-w.top),l.value.includes("right")){const $=r-w.width;a=v+$}if(l.value.includes("center")){const $=r/2-w.width/2;a=v+$}l.value==="right center"&&(a=v+r,u=g+C/2-w.top-w.height/2),l.value==="left center"&&(a=v-w.width,u=g+C/2-w.top-w.height/2),h.style.display="flex",h.style.position="absolute",h.style.transform=`translate(${a}px, ${u}px)`};return{show:s,showPopup:_,hidePopup:f,placement:l,popupRef:o,triggerRef:d}},br=E({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(t,{slots:s}){const{show:l,showPopup:o,hidePopup:d,popupRef:_,triggerRef:f}=RU(t);ed(()=>{var g,v,r;!((g=f.value)!=null&&g.$el)||((v=f.value)==null||v.$el.addEventListener("mouseenter",o),(r=f.value)==null||r.$el.addEventListener("mouseleave",d))});const m=L(l.value?"open":"close");D(()=>m.value!=="closed"),tt(()=>l.value,g=>{m.value=g?"opening":"closing"});const a=(g,v="scale")=>{switch(g){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>m.value=l.value?"open":"closed";Wt(()=>{var g;(g=_.value)==null||g.addEventListener("animationend",u,!0)}),hi(()=>{var g;(g=_.value)==null||g.removeEventListener("animationend",u)});const h={position:"initial",animationDuration:"200ms"},c=D(()=>Y("ignored ui",t.position,t.size,S(t.basic,"basic"),S(t.flowing,"flowing"),S(t.inverted,"inverted"),Se(t.wide,"wide"),"popup transition",a(m.value,"scale")));return()=>e(Ql,{to:"body"},{default:()=>{var g;return[e("div",{ref:_,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[e("div",{class:c.value,style:h},[t.header&&e("div",{class:"header"},[t.header]),e("div",{class:"content"},[t.content?t.content:(g=s.default)==null?void 0:g.call(s)])])])]}})}}),zU={install(t){t.component(br.name,br)}},vr=E({name:"SuiProgress",props:{active:Boolean,attached:String,color:String,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean},setup(t){const s=D(()=>Y("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.indicating,"indicating"),S(t.inverted,"inverted"),S(t.success,"success"),S(t.warning,"warning"),ke(t.attached,"attached"),"progress")),l=D(()=>Y(Se(t.progress,"progress")));return()=>e("div",{class:s.value,"data-percent":t.percent},[e("div",{class:"bar",style:`width: ${t.percent}%; transition-duration: 300ms;`},[t.progress&&e("div",{class:l.value},[t.percent,n("%")])]),t.label&&e("div",{class:"label"},[t.label])])}}),PU={install(t){t.component(vr.name,vr)}},MU=E({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(t){const s=Pe("rating",L(0)),l=Pe("updateRating"),o=Pe("selectedIndex",L(0)),d=Pe("updateSelectedIndex"),_=Pe("clearable",!1),f=Pe("disabled",!1),m=()=>{if(!f){if(_&&t.index===s.value){l(0),d(0);return}l(t.index)}},a=()=>{f||d(t.index)},u=D(()=>t.index<=s.value),h=D(()=>t.index<=o.value),c=D(()=>Y(t.icon,S(u.value,"active"),S(h.value,"selected"),"icon"));return()=>e("i",{class:c.value,onClick:()=>m(),onMouseenter:()=>a()},null)}}),Cr=E({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(t,{emit:s}){const l=L(t.modelValue||t.defaultRating),o=L(!1),d=L(0),_=h=>{l.value=h,s("update:modelValue",h),s("change",h)},f=h=>d.value=h,m=()=>{t.disabled||(o.value=!0)},a=()=>{t.disabled||(o.value=!1,f(0))},u=D(()=>Y("ui",t.color,t.icon,t.size,S(t.disabled,"disabled"),"rating",S(o.value,"selected")));return We("rating",l),We("updateRating",_),We("selectedIndex",d),We("updateSelectedIndex",f),We("clearable",t.clearable),We("disabled",t.disabled),()=>e("div",{class:u.value,onMouseenter:()=>m(),onMouseleave:()=>a()},[[...Array(t.maxRating)].map((h,c)=>e(MU,{icon:t.icon,index:c+1},null))])}}),DU={install(t){t.component(Cr.name,Cr)}},yr=E({name:"SuiSearch",props:{icon:String,placeholder:String},setup(t){return()=>e("div",{class:"ui search"},[e("div",{class:"ui icon input"},[e("input",{type:"text",class:"prompt",placeholder:t.placeholder},null),e("i",{class:"search icon"},null)]),e("div",{class:"results"},null)])}}),FU={install(t){t.component(yr.name,yr)}},wr=E({name:"SuiSidebar",directives:{clickoutside:ra},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(t,{emit:s}){const l=Bt({animating:!1}),o=D(()=>{const _=t.direction==="right"||t.direction==="left";return Y("ui","sidebar",t.direction,t.animation,S(t.inverted,"inverted"),S(t.visible,"visible"),S(l.animating,"animating"),S(_,"vertical"),Se(t.icon,"icon"),"menu")});return tt(()=>t.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),t.dimmed){const _=document.querySelector(".pusher");_&&_.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:_=>{const f=_.path||_.composedPath&&_.composedPath();if(!f)return;f.find(a=>a.classList&&a.classList.contains("pusher"))&&t.visible&&s("update:visible",!1)}}},render(){var t,s;return vn(e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)]),[[Cn("clickoutside"),this.onClickPusher]])}}),IU={install:t=>{t.component(wr.name,wr)}};class jn{static getWindowScrollTop(){let{documentElement:s}=document;return(window.pageYOffset||s.scrollTop)-(s.clientTop||0)}static getWindowScrollLeft(){let{documentElement:s}=document;return(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0)}static hasClass(s,l){return s.classList.contains(l)}}var $r=E({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(t,{emit:s}){const l=D(()=>Y("ui",t.color,t.size,S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.reversed,"reversed"),S(t.vertical,"vertical"),Se(t.labeled,"labeled"),"slider")),o=()=>100*(t.modelValue[0]-t.min)/(t.max-t.min),d=()=>100*(t.modelValue[1]-t.min)/(t.max-t.min),_=D(()=>{if(t.range)return t.reversed&&!t.vertical?{right:o()+"%",width:d()-o()+"%"}:t.vertical?t.reversed?{bottom:o()+"%",height:d()-o()+"%"}:{top:o()+"%",height:d()-o()+"%"}:{left:o()+"%",width:d()-o()+"%"};let V=t.modelValue>t.max?t.max:t.modelValue;return t.reversed?t.vertical?{bottom:"0%",top:`${100-(V-t.min)/(t.max-t.min)*100}%`}:{right:"0%",left:`${100-(V-t.min)/(t.max-t.min)*100}%`}:t.vertical?{top:"0%",bottom:`${100-(V-t.min)/(t.max-t.min)*100}%`}:{left:"0%",right:`${100-(V-t.min)/(t.max-t.min)*100}%`}}),f=D(()=>{let V=t.range?t.modelValue[0]:t.modelValue>t.max?t.max:t.modelValue;return!t.reversed&&t.vertical?{top:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:t.reversed&&t.vertical?{top:"auto",bottom:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.reversed&&!t.vertical?{left:"auto",right:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{left:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),m=D(()=>{let V=t.modelValue[1]>t.max?t.max:t.modelValue[1];return t.reversed&&!t.vertical?{left:"auto",right:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.vertical?t.reversed?{top:"auto",bottom:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{top:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),a=D(()=>t.labels?t.labels:[...Array(t.max-t.min+1)].map((V,te)=>te*t.step+t.min)),u=()=>{var V,te;let re=1,se=h(),we=(t.vertical?(V=g.value)==null?void 0:V.clientHeight:(te=g.value)==null?void 0:te.clientWidth)||0,Ne=1;if(we>0)for(;we/se*Ne<100;)se%Ne||(re=Ne),Ne+=1;return re},h=()=>Math.round((t.max-t.min)/t.step),c=L(null),g=L(null),v=L(0),r=L(0),C=L(0),w=L(0),A=()=>{if(!c.value)return;let V=c.value.getBoundingClientRect();v.value=V.left+jn.getWindowScrollLeft(),r.value=V.top+jn.getWindowScrollTop(),C.value=c.value.offsetWidth,w.value=c.value.offsetHeight},p=L(0),$=V=>{let{pageX:te,pageY:re}=V.touches?V.touches[0]:V,se,we;t.vertical?se=(r.value+w.value-re)*100/w.value:se=(te-v.value)*100/C.value,we=(t.max-t.min)*(se/100)+t.min;const Ne=t.range?t.modelValue[p.value]:t.modelValue||0;we=Ne+Math.round(we/t.step-Ne/t.step)*t.step,t.reversed&&(we=t.max-we+t.min),t.vertical&&(we=t.max-we+t.min),k(we)},k=V=>{let te=V,re;if(t.range)if(re=t.modelValue?[...t.modelValue]:[],p.value===0){let se=t.modelValue?t.modelValue[1]:t.max;te<t.min?te=t.min:te>se&&(te=se),re[0]=te,re[1]=re[1]||t.max}else{let se=t.modelValue?t.modelValue[0]:t.min;te>t.max?te=t.max:te<se&&(te=se),re[0]=re[0]||t.min,re[1]=te}else te<t.min&&(te=t.min),te>t.max&&(te=t.max),re=te;s("update:modelValue",re),s("change",re)},x=L(!1),R=V=>x.value=V,z=(V,te=0)=>{R(!0),A(),p.value=te,V.preventDefault()},F=V=>{x.value&&(R(!1),document.removeEventListener("mousemove",P),s("slideend",{event:V,value:t.modelValue}))},P=V=>{x.value&&($(V),V==null||V.preventDefault())},U=(V,te=0)=>{t.disabled||(z(V,te),document.addEventListener("mousemove",P),document.addEventListener("mouseup",F),V.preventDefault())},Z=(V,te=0)=>{switch(p.value=te,V.code){case"ArrowUp":t.vertical&&(t.reversed?N():ue()),V.preventDefault();break;case"ArrowDown":t.vertical&&(t.reversed?ue():N()),V.preventDefault();break;case"ArrowRight":t.reversed?ue():N(),V.preventDefault();break;case"ArrowLeft":t.reversed?N():ue(),V.preventDefault();break}},N=()=>{let V=0;t.range?V=t.modelValue[p.value]+t.step:V=t.modelValue+t.step,k(V)},ue=()=>{let V=0;t.range?V=t.modelValue[p.value]-t.step:V=t.modelValue-t.step,k(V)},Ce=V=>{if(!t.disabled&&!jn.hasClass(V.target,"thumb")){if(t.range){let te=(t.vertical?V.offsetY/V.target.clientHeight:V.offsetX/V.target.clientWidth)*100,re=(o()+d())/2;te<re?p.value=t.reversed?1:0:p.value=t.reversed?0:1}A(),$(V)}};return()=>e("div",{ref:V=>c.value=V,class:l.value,style:t.vertical?`height: ${t.verticalHeight}px;`:""},[e("div",{class:"inner",onClick:Ce},[e("div",{class:"track",ref:V=>g.value=V},null),e("div",{class:"track-fill",style:_.value},null),e("div",{class:"thumb",style:f.value,onMousedown:V=>U(V),onTouchstart:V=>z(V),onTouchmove:V=>P(V),onTouchend:V=>F(V),onKeydown:V=>Z(V),tabindex:0},null),t.range&&e("div",{class:"thumb second",style:m.value,onMousedown:V=>U(V,1),onTouchstart:V=>z(V,1),onTouchmove:V=>P(V),onTouchend:V=>F(V),onKeydown:V=>Z(V,1),tabindex:0},null)]),t.labeled&&e("ul",{class:"auto labels"},[[...Array(h()+1)].map((V,te)=>{let re=te/h();return te%u()?e("li",{class:"halftick label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${re} + 7px);`},null):e("li",{class:"label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${re} + 7px);`},[t.reversed&&!t.vertical?t.labels?t.labels[h()-te]:a.value[h()-te]:t.labels?t.labels[te]:a.value[te]])})])])}}),NU={install(t){t.component($r.name,$r)}},$l=E({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(t){return{computedClass:D(()=>Y("ui tab segment",S(t.active,"active"),Se(t.attached,"attached")))}},render(){var t,s;return e("div",{class:this.computedClass},[(s=(t=this.$slots).default)==null?void 0:s.call(t)])}}),Ar=E({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(t,{emit:s,slots:l}){const o=L(t.activeIndex);tt(()=>t.activeIndex,u=>{o.value=u});const d=(u,h)=>{o.value!==h&&(o.value=h,s("update:activeIndex",h),s("tab-change",{event:u,index:h})),s("tab-click",{event:u,index:h})},_=(u,h)=>{u.key==="Enter"&&d(u,h)},f=D(()=>{var u,h;let c=[];return(u=l.default)!=null&&u.call(l)&&((h=l.default)==null||h.call(l).forEach(g=>{g.type.name==="SuiTabPanel"&&c.push(g)})),c}),m=D(()=>!t.secondary&&!t.pointing&&!t.text),a=D(()=>Y("ui menu",S(m.value,"tabular attached"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.text,"text")));return{onClick:d,onKeyDown:_,tabIndex:o,tabs:f,tabMenuClass:a,isDefaultMenu:m}},render(){const t=()=>this.tabs.map((l,o)=>e("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:d=>this.onClick(d,o),onKeydown:d=>this.onKeyDown(d,o),tabindex:0},[l.props.header])),s=()=>this.tabs.map((l,o)=>e($l,As(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var d,_;return[(_=(d=l.children).default)==null?void 0:_.call(d)]}}));return e($e,null,[e("div",{class:this.tabMenuClass},[t()]),s()])}}),LU={install(t){t.component(Ar.name,Ar),t.component($l.name,$l)}},VU=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Accordion:aU,Calendar:yU,Checkbox:wU,Dimmer:$U,Dropdown:xU,Embed:EU,Modal:BU,Popup:zU,Progress:PU,Rating:DU,Search:FU,Sidebar:IU,Slider:NU,Tab:LU});function OU(t){Object.values(Vt(Vt(Vt(Vt({},JJ),XJ),lU),VU)).map(s=>t.use(s))}var HU={install:OU};(function(t){var s="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+s),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+s),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+s),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+s),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=t.languages.bash;for(var d=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],_=o.variable[1].inside,f=0;f<d.length;f++)_[d[f]]=t.languages.bash[d[f]];t.languages.shell=t.languages.bash})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(s,l){var o={};o["language-"+l]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[l]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};d["language-"+l]={pattern:/[\s\S]+/,inside:Prism.languages[l]};var _={};_[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:d},Prism.languages.insertBefore("markup","cdata",_)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,s){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:Prism.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;const da=sc(Of);da.use(vJ);da.use(HU);da.mount("#app");

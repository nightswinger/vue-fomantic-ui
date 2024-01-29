(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const m of r)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const m={};return r.integrity&&(m.integrity=r.integrity),r.referrerPolicy&&(m.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?m.credentials="include":r.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(r){if(r.ep)return;r.ep=!0;const m=n(r);fetch(r.href,m)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t,l){const n=new Set(t.split(","));return l?o=>n.has(o.toLowerCase()):o=>n.has(o)}const Pe={},$i=[],it=()=>{},Lc=()=>!1,_l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mn=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Nn=(t,l)=>{const n=t.indexOf(l);n>-1&&t.splice(n,1)},Oc=Object.prototype.hasOwnProperty,xe=(t,l)=>Oc.call(t,l),se=Array.isArray,Ti=t=>Vi(t)==="[object Map]",_i=t=>Vi(t)==="[object Set]",vs=t=>Vi(t)==="[object Date]",Hc=t=>Vi(t)==="[object RegExp]",pe=t=>typeof t=="function",He=t=>typeof t=="string",Wt=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Dn=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),Pr=Object.prototype.toString,Vi=t=>Pr.call(t),jc=t=>Vi(t).slice(8,-1),zr=t=>Vi(t)==="[object Object]",Fn=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xi=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const l=Object.create(null);return n=>l[n]||(l[n]=t(n))},qc=/-(\w)/g,et=ra(t=>t.replace(qc,(l,n)=>n?n.toUpperCase():"")),Jc=/\B([A-Z])/g,ct=ra(t=>t.replace(Jc,"-$1").toLowerCase()),bl=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zi=ra(t=>t?`on${bl(t)}`:""),yt=(t,l)=>!Object.is(t,l),xi=(t,l)=>{for(let n=0;n<t.length;n++)t[n](l)},Jl=(t,l,n)=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,value:n})},sl=t=>{const l=parseFloat(t);return isNaN(l)?t:l},Ul=t=>{const l=He(t)?Number(t):NaN;return isNaN(l)?t:l};let ys;const Mr=()=>ys||(ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Uc="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Gc=ua(Uc);function vl(t){if(se(t)){const l={};for(let n=0;n<t.length;n++){const o=t[n],r=He(o)?Qc(o):vl(o);if(r)for(const m in r)l[m]=r[m]}return l}else if(He(t)||De(t))return t}const Yc=/;(?![^(]*\))/g,Wc=/:([^]+)/,Kc=/\/\*[^]*?\*\//g;function Qc(t){const l={};return t.replace(Kc,"").split(Yc).forEach(n=>{if(n){const o=n.split(Wc);o.length>1&&(l[o[0].trim()]=o[1].trim())}}),l}function yl(t){let l="";if(He(t))l=t;else if(se(t))for(let n=0;n<t.length;n++){const o=yl(t[n]);o&&(l+=o+" ")}else if(De(t))for(const n in t)t[n]&&(l+=n+" ");return l.trim()}function Xc(t){if(!t)return null;let{class:l,style:n}=t;return l&&!He(l)&&(t.class=yl(l)),n&&(t.style=vl(n)),t}const Zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=ua(Zc);function Nr(t){return!!t||t===""}function tm(t,l){if(t.length!==l.length)return!1;let n=!0;for(let o=0;n&&o<t.length;o++)n=zt(t[o],l[o]);return n}function zt(t,l){if(t===l)return!0;let n=vs(t),o=vs(l);if(n||o)return n&&o?t.getTime()===l.getTime():!1;if(n=Wt(t),o=Wt(l),n||o)return t===l;if(n=se(t),o=se(l),n||o)return n&&o?tm(t,l):!1;if(n=De(t),o=De(l),n||o){if(!n||!o)return!1;const r=Object.keys(t).length,m=Object.keys(l).length;if(r!==m)return!1;for(const f in t){const p=t.hasOwnProperty(f),s=l.hasOwnProperty(f);if(p&&!s||!p&&s||!zt(t[f],l[f]))return!1}}return String(t)===String(l)}function da(t,l){return t.findIndex(n=>zt(n,l))}const Ee=t=>He(t)?t:t==null?"":se(t)||De(t)&&(t.toString===Pr||!pe(t.toString))?JSON.stringify(t,Dr,2):String(t),Dr=(t,l)=>l&&l.__v_isRef?Dr(t,l.value):Ti(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[o,r],m)=>(n[Ra(o,m)+" =>"]=r,n),{})}:_i(l)?{[`Set(${l.size})`]:[...l.values()].map(n=>Ra(n))}:Wt(l)?Ra(l):De(l)&&!se(l)&&!zr(l)?String(l):l,Ra=(t,l="")=>{var n;return Wt(t)?`Symbol(${(n=t.description)!=null?n:l})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class In{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!l&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const n=ut;try{return ut=this,l()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(l){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function im(t){return new In(t)}function Fr(t,l=ut){l&&l.active&&l.effects.push(t)}function Ir(){return ut}function lm(t){ut&&ut.cleanups.push(t)}let ni;class Pi{constructor(l,n,o,r){this.fn=l,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Fr(this,r)}get dirty(){if(this._dirtyLevel===1){bi();for(let l=0;l<this._depsLength;l++){const n=this.deps[l];if(n.computed&&(am(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),vi()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=Yt,n=ni;try{return Yt=!0,ni=this,this._runnings++,Cs(this),this.fn()}finally{ws(this),this._runnings--,ni=n,Yt=l}}stop(){var l;this.active&&(Cs(this),ws(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function am(t){return t.value}function Cs(t){t._trackId++,t._depsLength=0}function ws(t){if(t.deps&&t.deps.length>t._depsLength){for(let l=t._depsLength;l<t.deps.length;l++)Vr(t.deps[l],t);t.deps.length=t._depsLength}}function Vr(t,l){const n=t.get(l);n!==void 0&&l._trackId!==n&&(t.delete(l),t.size===0&&t.cleanup())}function nm(t,l){t.effect instanceof Pi&&(t=t.effect.fn);const n=new Pi(t,it,()=>{n.dirty&&n.run()});l&&(Oe(n,l),l.scope&&Fr(n,l.scope)),(!l||!l.lazy)&&n.run();const o=n.run.bind(n);return o.effect=n,o}function sm(t){t.effect.stop()}let Yt=!0,Ka=0;const Lr=[];function bi(){Lr.push(Yt),Yt=!1}function vi(){const t=Lr.pop();Yt=t===void 0?!0:t}function Vn(){Ka++}function Ln(){for(Ka--;!Ka&&Qa.length;)Qa.shift()()}function Or(t,l,n){if(l.get(t)!==t._trackId){l.set(t,t._trackId);const o=t.deps[t._depsLength];o!==l?(o&&Vr(o,t),t.deps[t._depsLength++]=l):t._depsLength++}}const Qa=[];function Hr(t,l,n){Vn();for(const o of t.keys())if(o._dirtyLevel<l&&t.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=l,r===0&&(o._shouldSchedule=!0,o.trigger())}jr(t),Ln()}function jr(t){for(const l of t.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&t.get(l)===l._trackId&&(l._shouldSchedule=!1,Qa.push(l.scheduler))}const qr=(t,l)=>{const n=new Map;return n.cleanup=t,n.computed=l,n},Gl=new WeakMap,si=Symbol(""),Xa=Symbol("");function nt(t,l,n){if(Yt&&ni){let o=Gl.get(t);o||Gl.set(t,o=new Map);let r=o.get(n);r||o.set(n,r=qr(()=>o.delete(n))),Or(ni,r)}}function Rt(t,l,n,o,r,m){const f=Gl.get(t);if(!f)return;let p=[];if(l==="clear")p=[...f.values()];else if(n==="length"&&se(t)){const s=Number(o);f.forEach((u,g)=>{(g==="length"||!Wt(g)&&g>=s)&&p.push(u)})}else switch(n!==void 0&&p.push(f.get(n)),l){case"add":se(t)?Fn(n)&&p.push(f.get("length")):(p.push(f.get(si)),Ti(t)&&p.push(f.get(Xa)));break;case"delete":se(t)||(p.push(f.get(si)),Ti(t)&&p.push(f.get(Xa)));break;case"set":Ti(t)&&p.push(f.get(si));break}Vn();for(const s of p)s&&Hr(s,2);Ln()}function om(t,l){var n;return(n=Gl.get(t))==null?void 0:n.get(l)}const um=ua("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wt)),As=rm();function rm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(l=>{t[l]=function(...n){const o=ke(this);for(let m=0,f=this.length;m<f;m++)nt(o,"get",m+"");const r=o[l](...n);return r===-1||r===!1?o[l](...n.map(ke)):r}}),["push","pop","shift","unshift","splice"].forEach(l=>{t[l]=function(...n){bi(),Vn();const o=ke(this)[l].apply(this,n);return Ln(),vi(),o}}),t}function dm(t){const l=ke(this);return nt(l,"has",t),l.hasOwnProperty(t)}class Ur{constructor(l=!1,n=!1){this._isReadonly=l,this._shallow=n}get(l,n,o){const r=this._isReadonly,m=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return m;if(n==="__v_raw")return o===(r?m?Xr:Qr:m?Kr:Wr).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(o)?l:void 0;const f=se(l);if(!r){if(f&&xe(As,n))return Reflect.get(As,n,o);if(n==="hasOwnProperty")return dm}const p=Reflect.get(l,n,o);return(Wt(n)?Jr.has(n):um(n))||(r||nt(l,"get",n),m)?p:Ke(p)?f&&Fn(n)?p:p.value:De(p)?r?Hn(p):Mt(p):p}}class Gr extends Ur{constructor(l=!1){super(!1,l)}set(l,n,o,r){let m=l[n];if(!this._shallow){const s=ci(m);if(!ol(o)&&!ci(o)&&(m=ke(m),o=ke(o)),!se(l)&&Ke(m)&&!Ke(o))return s?!1:(m.value=o,!0)}const f=se(l)&&Fn(n)?Number(n)<l.length:xe(l,n),p=Reflect.set(l,n,o,r);return l===ke(r)&&(f?yt(o,m)&&Rt(l,"set",n,o):Rt(l,"add",n,o)),p}deleteProperty(l,n){const o=xe(l,n);l[n];const r=Reflect.deleteProperty(l,n);return r&&o&&Rt(l,"delete",n,void 0),r}has(l,n){const o=Reflect.has(l,n);return(!Wt(n)||!Jr.has(n))&&nt(l,"has",n),o}ownKeys(l){return nt(l,"iterate",se(l)?"length":si),Reflect.ownKeys(l)}}class Yr extends Ur{constructor(l=!1){super(!0,l)}set(l,n){return!0}deleteProperty(l,n){return!0}}const cm=new Gr,mm=new Yr,pm=new Gr(!0),fm=new Yr(!0),On=t=>t,ca=t=>Reflect.getPrototypeOf(t);function xl(t,l,n=!1,o=!1){t=t.__v_raw;const r=ke(t),m=ke(l);n||(yt(l,m)&&nt(r,"get",l),nt(r,"get",m));const{has:f}=ca(r),p=o?On:n?Jn:ul;if(f.call(r,l))return p(t.get(l));if(f.call(r,m))return p(t.get(m));t!==r&&t.get(l)}function El(t,l=!1){const n=this.__v_raw,o=ke(n),r=ke(t);return l||(yt(t,r)&&nt(o,"has",t),nt(o,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Bl(t,l=!1){return t=t.__v_raw,!l&&nt(ke(t),"iterate",si),Reflect.get(t,"size",t)}function Ss(t){t=ke(t);const l=ke(this);return ca(l).has.call(l,t)||(l.add(t),Rt(l,"add",t,t)),this}function ks(t,l){l=ke(l);const n=ke(this),{has:o,get:r}=ca(n);let m=o.call(n,t);m||(t=ke(t),m=o.call(n,t));const f=r.call(n,t);return n.set(t,l),m?yt(l,f)&&Rt(n,"set",t,l):Rt(n,"add",t,l),this}function $s(t){const l=ke(this),{has:n,get:o}=ca(l);let r=n.call(l,t);r||(t=ke(t),r=n.call(l,t)),o&&o.call(l,t);const m=l.delete(t);return r&&Rt(l,"delete",t,void 0),m}function Ts(){const t=ke(this),l=t.size!==0,n=t.clear();return l&&Rt(t,"clear",void 0,void 0),n}function Rl(t,l){return function(o,r){const m=this,f=m.__v_raw,p=ke(f),s=l?On:t?Jn:ul;return!t&&nt(p,"iterate",si),f.forEach((u,g)=>o.call(r,s(u),s(g),m))}}function Pl(t,l,n){return function(...o){const r=this.__v_raw,m=ke(r),f=Ti(m),p=t==="entries"||t===Symbol.iterator&&f,s=t==="keys"&&f,u=r[t](...o),g=n?On:l?Jn:ul;return!l&&nt(m,"iterate",s?Xa:si),{next(){const{value:c,done:h}=u.next();return h?{value:c,done:h}:{value:p?[g(c[0]),g(c[1])]:g(c),done:h}},[Symbol.iterator](){return this}}}}function It(t){return function(...l){return t==="delete"?!1:t==="clear"?void 0:this}}function gm(){const t={get(m){return xl(this,m)},get size(){return Bl(this)},has:El,add:Ss,set:ks,delete:$s,clear:Ts,forEach:Rl(!1,!1)},l={get(m){return xl(this,m,!1,!0)},get size(){return Bl(this)},has:El,add:Ss,set:ks,delete:$s,clear:Ts,forEach:Rl(!1,!0)},n={get(m){return xl(this,m,!0)},get size(){return Bl(this,!0)},has(m){return El.call(this,m,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Rl(!0,!1)},o={get(m){return xl(this,m,!0,!0)},get size(){return Bl(this,!0)},has(m){return El.call(this,m,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Rl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{t[m]=Pl(m,!1,!1),n[m]=Pl(m,!0,!1),l[m]=Pl(m,!1,!0),o[m]=Pl(m,!0,!0)}),[t,n,l,o]}const[hm,_m,bm,vm]=gm();function ma(t,l){const n=l?t?vm:bm:t?_m:hm;return(o,r,m)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?o:Reflect.get(xe(n,r)&&r in o?n:o,r,m)}const ym={get:ma(!1,!1)},Cm={get:ma(!1,!0)},wm={get:ma(!0,!1)},Am={get:ma(!0,!0)},Wr=new WeakMap,Kr=new WeakMap,Qr=new WeakMap,Xr=new WeakMap;function Sm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function km(t){return t.__v_skip||!Object.isExtensible(t)?0:Sm(jc(t))}function Mt(t){return ci(t)?t:pa(t,!1,cm,ym,Wr)}function Zr(t){return pa(t,!1,pm,Cm,Kr)}function Hn(t){return pa(t,!0,mm,wm,Qr)}function $m(t){return pa(t,!0,fm,Am,Xr)}function pa(t,l,n,o,r){if(!De(t)||t.__v_raw&&!(l&&t.__v_isReactive))return t;const m=r.get(t);if(m)return m;const f=km(t);if(f===0)return t;const p=new Proxy(t,f===2?o:n);return r.set(t,p),p}function oi(t){return ci(t)?oi(t.__v_raw):!!(t&&t.__v_isReactive)}function ci(t){return!!(t&&t.__v_isReadonly)}function ol(t){return!!(t&&t.__v_isShallow)}function jn(t){return oi(t)||ci(t)}function ke(t){const l=t&&t.__v_raw;return l?ke(l):t}function qn(t){return Jl(t,"__v_skip",!0),t}const ul=t=>De(t)?Mt(t):t,Jn=t=>De(t)?Hn(t):t;class ed{constructor(l,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Pi(()=>l(this._value),()=>Ei(this,1),()=>this.dep&&jr(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const l=ke(this);return(!l._cacheable||l.effect.dirty)&&yt(l._value,l._value=l.effect.run())&&Ei(l,2),Un(l),l.effect._dirtyLevel>=1&&Ei(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function Tm(t,l,n=!1){let o,r;const m=pe(t);return m?(o=t,r=it):(o=t.get,r=t.set),new ed(o,r,m||!r,n)}function Un(t){Yt&&ni&&(t=ke(t),Or(ni,t.dep||(t.dep=qr(()=>t.dep=void 0,t instanceof ed?t:void 0))))}function Ei(t,l=2,n){t=ke(t);const o=t.dep;o&&Hr(o,l)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function L(t){return id(t,!1)}function td(t){return id(t,!0)}function id(t,l){return Ke(t)?t:new xm(t,l)}class xm{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:ke(l),this._value=n?l:ul(l)}get value(){return Un(this),this._value}set value(l){const n=this.__v_isShallow||ol(l)||ci(l);l=n?l:ke(l),yt(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:ul(l),Ei(this,2))}}function Em(t){Ei(t,2)}function ui(t){return Ke(t)?t.value:t}function Bm(t){return pe(t)?t():ui(t)}const Rm={get:(t,l,n)=>ui(Reflect.get(t,l,n)),set:(t,l,n,o)=>{const r=t[l];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,l,n,o)}};function Gn(t){return oi(t)?t:new Proxy(t,Rm)}class Pm{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=l(()=>Un(this),()=>Ei(this));this._get=n,this._set=o}get value(){return this._get()}set value(l){this._set(l)}}function ld(t){return new Pm(t)}function zm(t){const l=se(t)?new Array(t.length):{};for(const n in t)l[n]=ad(t,n);return l}class Mm{constructor(l,n,o){this._object=l,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return om(ke(this._object),this._key)}}class Nm{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Za(t,l,n){return Ke(t)?t:pe(t)?new Nm(t):De(t)&&arguments.length>1?ad(t,l,n):L(t)}function ad(t,l,n){const o=t[l];return Ke(o)?o:new Mm(t,l,n)}const Dm={GET:"get",HAS:"has",ITERATE:"iterate"},Fm={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Im(t,l){}const Vm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Lm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Pt(t,l,n,o){let r;try{r=o?t(...o):t()}catch(m){yi(m,l,n)}return r}function pt(t,l,n,o){if(pe(t)){const m=Pt(t,l,n,o);return m&&Dn(m)&&m.catch(f=>{yi(f,l,n)}),m}const r=[];for(let m=0;m<t.length;m++)r.push(pt(t[m],l,n,o));return r}function yi(t,l,n,o=!0){const r=l?l.vnode:null;if(l){let m=l.parent;const f=l.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;m;){const u=m.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](t,f,p)===!1)return}m=m.parent}const s=l.appContext.config.errorHandler;if(s){Pt(s,null,10,[t,f,p]);return}}Om(t,n,r,o)}function Om(t,l,n,o=!0){console.error(t)}let rl=!1,en=!1;const Qe=[];let St=0;const Bi=[];let jt=null,li=0;const nd=Promise.resolve();let Yn=null;function Li(t){const l=Yn||nd;return t?l.then(this?t.bind(this):t):l}function Hm(t){let l=St+1,n=Qe.length;for(;l<n;){const o=l+n>>>1,r=Qe[o],m=dl(r);m<t||m===t&&r.pre?l=o+1:n=o}return l}function fa(t){(!Qe.length||!Qe.includes(t,rl&&t.allowRecurse?St+1:St))&&(t.id==null?Qe.push(t):Qe.splice(Hm(t.id),0,t),sd())}function sd(){!rl&&!en&&(en=!0,Yn=nd.then(od))}function jm(t){const l=Qe.indexOf(t);l>St&&Qe.splice(l,1)}function Yl(t){se(t)?Bi.push(...t):(!jt||!jt.includes(t,t.allowRecurse?li+1:li))&&Bi.push(t),sd()}function xs(t,l,n=rl?St+1:0){for(;n<Qe.length;n++){const o=Qe[n];if(o&&o.pre){if(t&&o.id!==t.uid)continue;Qe.splice(n,1),n--,o()}}}function Wl(t){if(Bi.length){const l=[...new Set(Bi)].sort((n,o)=>dl(n)-dl(o));if(Bi.length=0,jt){jt.push(...l);return}for(jt=l,li=0;li<jt.length;li++)jt[li]();jt=null,li=0}}const dl=t=>t.id==null?1/0:t.id,qm=(t,l)=>{const n=dl(t)-dl(l);if(n===0){if(t.pre&&!l.pre)return-1;if(l.pre&&!t.pre)return 1}return n};function od(t){en=!1,rl=!0,Qe.sort(qm);try{for(St=0;St<Qe.length;St++){const l=Qe[St];l&&l.active!==!1&&Pt(l,null,14)}}finally{St=0,Qe.length=0,Wl(),rl=!1,Yn=null,(Qe.length||Bi.length)&&od()}}let Si,zl=[];function ud(t,l){var n,o;Si=t,Si?(Si.enabled=!0,zl.forEach(({event:r,args:m})=>Si.emit(r,...m)),zl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{ud(m,l)}),setTimeout(()=>{Si||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,zl=[])},3e3)):zl=[]}function Jm(t,l,...n){if(t.isUnmounted)return;const o=t.vnode.props||Pe;let r=n;const m=l.startsWith("update:"),f=m&&l.slice(7);if(f&&f in o){const g=`${f==="modelValue"?"model":f}Modifiers`,{number:c,trim:h}=o[g]||Pe;h&&(r=n.map(v=>He(v)?v.trim():v)),c&&(r=n.map(sl))}let p,s=o[p=Zi(l)]||o[p=Zi(et(l))];!s&&m&&(s=o[p=Zi(ct(l))]),s&&pt(s,t,6,r);const u=o[p+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[p])return;t.emitted[p]=!0,pt(u,t,6,r)}}function rd(t,l,n=!1){const o=l.emitsCache,r=o.get(t);if(r!==void 0)return r;const m=t.emits;let f={},p=!1;if(!pe(t)){const s=u=>{const g=rd(u,l,!0);g&&(p=!0,Oe(f,g))};!n&&l.mixins.length&&l.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return!m&&!p?(De(t)&&o.set(t,null),null):(se(m)?m.forEach(s=>f[s]=null):Oe(f,m),De(t)&&o.set(t,f),f)}function ga(t,l){return!t||!_l(l)?!1:(l=l.slice(2).replace(/Once$/,""),xe(t,l[0].toLowerCase()+l.slice(1))||xe(t,ct(l))||xe(t,l))}let je=null,ha=null;function cl(t){const l=je;return je=t,ha=t&&t.type.__scopeId||null,l}function Cl(t){ha=t}function wl(){ha=null}const Um=t=>i;function i(t,l=je,n){if(!l||t._n)return t;const o=(...r)=>{o._d&&rn(-1);const m=cl(l);let f;try{f=t(...r)}finally{cl(m),o._d&&rn(1)}return f};return o._n=!0,o._c=!0,o._d=!0,o}function jl(t){const{type:l,vnode:n,proxy:o,withProxy:r,props:m,propsOptions:[f],slots:p,attrs:s,emit:u,render:g,renderCache:c,data:h,setupState:v,ctx:d,inheritAttrs:y}=t;let A,$;const b=cl(t);try{if(n.shapeFlag&4){const k=r||o,T=k;A=rt(g.call(T,k,c,m,v,h,d)),$=s}else{const k=l;A=rt(k.length>1?k(m,{attrs:s,slots:p,emit:u}):k(m,null)),$=l.props?s:Ym(s)}}catch(k){il.length=0,yi(k,t,1),A=e(Xe)}let w=A;if($&&y!==!1){const k=Object.keys($),{shapeFlag:T}=w;k.length&&T&7&&(f&&k.some(Mn)&&($=Wm($,f)),w=$t(w,$))}return n.dirs&&(w=$t(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),A=w,cl(b),A}function Gm(t,l=!0){let n;for(let o=0;o<t.length;o++){const r=t[o];if(kt(r)){if(r.type!==Xe||r.children==="v-if"){if(n)return;n=r}}else return}return n}const Ym=t=>{let l;for(const n in t)(n==="class"||n==="style"||_l(n))&&((l||(l={}))[n]=t[n]);return l},Wm=(t,l)=>{const n={};for(const o in t)(!Mn(o)||!(o.slice(9)in l))&&(n[o]=t[o]);return n};function Km(t,l,n){const{props:o,children:r,component:m}=t,{props:f,children:p,patchFlag:s}=l,u=m.emitsOptions;if(l.dirs||l.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return o?Es(o,f,u):!!f;if(s&8){const g=l.dynamicProps;for(let c=0;c<g.length;c++){const h=g[c];if(f[h]!==o[h]&&!ga(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:o===f?!1:o?f?Es(o,f,u):!0:!!f;return!1}function Es(t,l,n){const o=Object.keys(l);if(o.length!==Object.keys(t).length)return!0;for(let r=0;r<o.length;r++){const m=o[r];if(l[m]!==t[m]&&!ga(n,m))return!0}return!1}function Wn({vnode:t,parent:l},n){for(;l;){const o=l.subTree;if(o.suspense&&o.suspense.activeBranch===t&&(o.el=t.el),o===t)(t=l.vnode).el=n,l=l.parent;else break}}const Kn="components",Qm="directives";function _(t,l){return Qn(Kn,t,!0,l)||t}const dd=Symbol.for("v-ndc");function Xm(t){return He(t)?Qn(Kn,t,!1)||t:t||dd}function _a(t){return Qn(Qm,t)}function Qn(t,l,n=!0,o=!1){const r=je||Je;if(r){const m=r.type;if(t===Kn){const p=fn(m,!1);if(p&&(p===l||p===et(l)||p===bl(et(l))))return m}const f=Bs(r[t]||m[t],l)||Bs(r.appContext[t],l);return!f&&o?m:f}}function Bs(t,l){return t&&(t[l]||t[et(l)]||t[bl(et(l))])}const cd=t=>t.__isSuspense;let tn=0;const Zm={name:"Suspense",__isSuspense:!0,process(t,l,n,o,r,m,f,p,s,u){if(t==null)tp(l,n,o,r,m,f,p,s,u);else{if(m&&m.deps>0){l.suspense=t.suspense;return}ip(t,l,n,o,r,f,p,s,u)}},hydrate:lp,create:Xn,normalize:ap},ep=Zm;function ml(t,l){const n=t.props&&t.props[l];pe(n)&&n()}function tp(t,l,n,o,r,m,f,p,s){const{p:u,o:{createElement:g}}=s,c=g("div"),h=t.suspense=Xn(t,r,o,l,c,n,m,f,p,s);u(null,h.pendingBranch=t.ssContent,c,null,o,h,m,f),h.deps>0?(ml(t,"onPending"),ml(t,"onFallback"),u(null,t.ssFallback,l,n,o,null,m,f),Ri(h,t.ssFallback)):h.resolve(!1,!0)}function ip(t,l,n,o,r,m,f,p,{p:s,um:u,o:{createElement:g}}){const c=l.suspense=t.suspense;c.vnode=l,l.el=t.el;const h=l.ssContent,v=l.ssFallback,{activeBranch:d,pendingBranch:y,isInFallback:A,isHydrating:$}=c;if(y)c.pendingBranch=h,vt(h,y)?(s(y,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0?c.resolve():A&&($||(s(d,v,n,o,r,null,m,f,p),Ri(c,v)))):(c.pendingId=tn++,$?(c.isHydrating=!1,c.activeBranch=y):u(y,r,c),c.deps=0,c.effects.length=0,c.hiddenContainer=g("div"),A?(s(null,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0?c.resolve():(s(d,v,n,o,r,null,m,f,p),Ri(c,v))):d&&vt(h,d)?(s(d,h,n,o,r,c,m,f,p),c.resolve(!0)):(s(null,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0&&c.resolve()));else if(d&&vt(h,d))s(d,h,n,o,r,c,m,f,p),Ri(c,h);else if(ml(l,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=tn++,s(null,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0)c.resolve();else{const{timeout:b,pendingId:w}=c;b>0?setTimeout(()=>{c.pendingId===w&&c.fallback(v)},b):b===0&&c.fallback(v)}}function Xn(t,l,n,o,r,m,f,p,s,u,g=!1){const{p:c,m:h,um:v,n:d,o:{parentNode:y,remove:A}}=u;let $;const b=np(t);b&&l!=null&&l.pendingBranch&&($=l.pendingId,l.deps++);const w=t.props?Ul(t.props.timeout):void 0,k=m,T={vnode:t,parent:l,parentComponent:n,namespace:f,container:o,hiddenContainer:r,deps:0,pendingId:tn++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,z=!1){const{vnode:M,activeBranch:P,pendingBranch:F,pendingId:X,effects:H,parentComponent:ue,container:ye}=T;let I=!1;T.isHydrating?T.isHydrating=!1:E||(I=P&&F.transition&&F.transition.mode==="out-in",I&&(P.transition.afterLeave=()=>{X===T.pendingId&&(h(F,ye,m===k?d(P):m,0),Yl(H))}),P&&(y(P.el)!==T.hiddenContainer&&(m=d(P)),v(P,ue,T,!0)),I||h(F,ye,m,0)),Ri(T,F),T.pendingBranch=null,T.isInFallback=!1;let O=T.parent,ae=!1;for(;O;){if(O.pendingBranch){O.effects.push(...H),ae=!0;break}O=O.parent}!ae&&!I&&Yl(H),T.effects=[],b&&l&&l.pendingBranch&&$===l.pendingId&&(l.deps--,l.deps===0&&!z&&l.resolve()),ml(M,"onResolve")},fallback(E){if(!T.pendingBranch)return;const{vnode:z,activeBranch:M,parentComponent:P,container:F,namespace:X}=T;ml(z,"onFallback");const H=d(M),ue=()=>{T.isInFallback&&(c(null,E,F,H,P,null,X,p,s),Ri(T,E))},ye=E.transition&&E.transition.mode==="out-in";ye&&(M.transition.afterLeave=ue),T.isInFallback=!0,v(M,P,null,!0),ye||ue()},move(E,z,M){T.activeBranch&&h(T.activeBranch,E,z,M),T.container=E},next(){return T.activeBranch&&d(T.activeBranch)},registerDep(E,z){const M=!!T.pendingBranch;M&&T.deps++;const P=E.vnode.el;E.asyncDep.catch(F=>{yi(F,E,0)}).then(F=>{if(E.isUnmounted||T.isUnmounted||T.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:X}=E;mn(E,F,!1),P&&(X.el=P);const H=!P&&E.subTree.el;z(E,X,y(P||E.subTree.el),P?null:d(E.subTree),T,f,s),H&&A(H),Wn(E,X.el),M&&--T.deps===0&&T.resolve()})},unmount(E,z){T.isUnmounted=!0,T.activeBranch&&v(T.activeBranch,n,E,z),T.pendingBranch&&v(T.pendingBranch,n,E,z)}};return T}function lp(t,l,n,o,r,m,f,p,s){const u=l.suspense=Xn(l,o,n,t.parentNode,document.createElement("div"),null,r,m,f,p,!0),g=s(t,u.pendingBranch=l.ssContent,n,u,m,f);return u.deps===0&&u.resolve(!1,!0),g}function ap(t){const{shapeFlag:l,children:n}=t,o=l&32;t.ssContent=Rs(o?n.default:n),t.ssFallback=o?Rs(n.fallback):e(Xe)}function Rs(t){let l;if(pe(t)){const n=fi&&t._c;n&&(t._d=!1,te()),t=t(),n&&(t._d=!0,l=lt,Ud())}return se(t)&&(t=Gm(t)),t=rt(t),l&&!t.dynamicChildren&&(t.dynamicChildren=l.filter(n=>n!==t)),t}function md(t,l){l&&l.pendingBranch?se(t)?l.effects.push(...t):l.effects.push(t):Yl(t)}function Ri(t,l){t.activeBranch=l;const{vnode:n,parentComponent:o}=t;let r=l.el;for(;!r&&l.component;)l=l.component.subTree,r=l.el;n.el=r,o&&o.subTree===n&&(o.vnode.el=r,Wn(o,r))}function np(t){var l;return((l=t.props)==null?void 0:l.suspensible)!=null&&t.props.suspensible!==!1}const pd=Symbol.for("v-scx"),fd=()=>ze(pd);function gd(t,l){return Al(t,null,l)}function hd(t,l){return Al(t,null,{flush:"post"})}function _d(t,l){return Al(t,null,{flush:"sync"})}const Ml={};function at(t,l,n){return Al(t,l,n)}function Al(t,l,{immediate:n,deep:o,flush:r,once:m,onTrack:f,onTrigger:p}=Pe){if(l&&m){const E=l;l=(...z)=>{E(...z),T()}}const s=Je,u=E=>o===!0?E:ai(E,o===!1?1:void 0);let g,c=!1,h=!1;if(Ke(t)?(g=()=>t.value,c=ol(t)):oi(t)?(g=()=>u(t),c=!0):se(t)?(h=!0,c=t.some(E=>oi(E)||ol(E)),g=()=>t.map(E=>{if(Ke(E))return E.value;if(oi(E))return u(E);if(pe(E))return Pt(E,s,2)})):pe(t)?l?g=()=>Pt(t,s,2):g=()=>(v&&v(),pt(t,s,3,[d])):g=it,l&&o){const E=g;g=()=>ai(E())}let v,d=E=>{v=w.onStop=()=>{Pt(E,s,4),v=w.onStop=void 0}},y;if($l)if(d=it,l?n&&pt(l,s,3,[g(),h?[]:void 0,d]):g(),r==="sync"){const E=fd();y=E.__watcherHandles||(E.__watcherHandles=[])}else return it;let A=h?new Array(t.length).fill(Ml):Ml;const $=()=>{if(!(!w.active||!w.dirty))if(l){const E=w.run();(o||c||(h?E.some((z,M)=>yt(z,A[M])):yt(E,A)))&&(v&&v(),pt(l,s,3,[E,A===Ml?void 0:h&&A[0]===Ml?[]:A,d]),A=E)}else w.run()};$.allowRecurse=!!l;let b;r==="sync"?b=$:r==="post"?b=()=>Ye($,s&&s.suspense):($.pre=!0,s&&($.id=s.uid),b=()=>fa($));const w=new Pi(g,it,b),k=Ir(),T=()=>{w.stop(),k&&Nn(k.effects,w)};return l?n?$():A=w.run():r==="post"?Ye(w.run.bind(w),s&&s.suspense):w.run(),y&&y.push(T),T}function sp(t,l,n){const o=this.proxy,r=He(t)?t.includes(".")?bd(o,t):()=>o[t]:t.bind(o,o);let m;pe(l)?m=l:(m=l.handler,n=l);const f=gi(this),p=Al(r,m.bind(o),n);return f(),p}function bd(t,l){const n=l.split(".");return()=>{let o=t;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function ai(t,l,n=0,o){if(!De(t)||t.__v_skip)return t;if(l&&l>0){if(n>=l)return t;n++}if(o=o||new Set,o.has(t))return t;if(o.add(t),Ke(t))ai(t.value,l,n,o);else if(se(t))for(let r=0;r<t.length;r++)ai(t[r],l,n,o);else if(_i(t)||Ti(t))t.forEach(r=>{ai(r,l,n,o)});else if(zr(t))for(const r in t)ai(t[r],l,n,o);return t}function ba(t,l){if(je===null)return t;const n=Sa(je)||je.proxy,o=t.dirs||(t.dirs=[]);for(let r=0;r<l.length;r++){let[m,f,p,s=Pe]=l[r];m&&(pe(m)&&(m={mounted:m,updated:m}),m.deep&&ai(f),o.push({dir:m,instance:n,value:f,oldValue:void 0,arg:p,modifiers:s}))}return t}function At(t,l,n,o){const r=t.dirs,m=l&&l.dirs;for(let f=0;f<r.length;f++){const p=r[f];m&&(p.oldValue=m[f].value);let s=p.dir[o];s&&(bi(),pt(s,n,8,[t.el,p,t,l]),vi())}}const qt=Symbol("_leaveCb"),Nl=Symbol("_enterCb");function Zn(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qt(()=>{t.isMounted=!0}),wa(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],es={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},op={name:"BaseTransition",props:es,setup(t,{slots:l}){const n=Dt(),o=Zn();let r;return()=>{const m=l.default&&va(l.default(),!0);if(!m||!m.length)return;let f=m[0];if(m.length>1){for(const y of m)if(y.type!==Xe){f=y;break}}const p=ke(t),{mode:s}=p;if(o.isLeaving)return Pa(f);const u=Ps(f);if(!u)return Pa(f);const g=zi(u,p,o,n);mi(u,g);const c=n.subTree,h=c&&Ps(c);let v=!1;const{getTransitionKey:d}=u.type;if(d){const y=d();r===void 0?r=y:y!==r&&(r=y,v=!0)}if(h&&h.type!==Xe&&(!vt(u,h)||v)){const y=zi(h,p,o,n);if(mi(h,y),s==="out-in")return o.isLeaving=!0,y.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Pa(f);s==="in-out"&&u.type!==Xe&&(y.delayLeave=(A,$,b)=>{const w=yd(o,h);w[String(h.key)]=h,A[qt]=()=>{$(),A[qt]=void 0,delete g.delayedLeave},g.delayedLeave=b})}return f}}},vd=op;function yd(t,l){const{leavingVNodes:n}=t;let o=n.get(l.type);return o||(o=Object.create(null),n.set(l.type,o)),o}function zi(t,l,n,o){const{appear:r,mode:m,persisted:f=!1,onBeforeEnter:p,onEnter:s,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:d,onBeforeAppear:y,onAppear:A,onAfterAppear:$,onAppearCancelled:b}=l,w=String(t.key),k=yd(n,t),T=(M,P)=>{M&&pt(M,o,9,P)},E=(M,P)=>{const F=P[1];T(M,P),se(M)?M.every(X=>X.length<=1)&&F():M.length<=1&&F()},z={mode:m,persisted:f,beforeEnter(M){let P=p;if(!n.isMounted)if(r)P=y||p;else return;M[qt]&&M[qt](!0);const F=k[w];F&&vt(t,F)&&F.el[qt]&&F.el[qt](),T(P,[M])},enter(M){let P=s,F=u,X=g;if(!n.isMounted)if(r)P=A||s,F=$||u,X=b||g;else return;let H=!1;const ue=M[Nl]=ye=>{H||(H=!0,ye?T(X,[M]):T(F,[M]),z.delayedLeave&&z.delayedLeave(),M[Nl]=void 0)};P?E(P,[M,ue]):ue()},leave(M,P){const F=String(t.key);if(M[Nl]&&M[Nl](!0),n.isUnmounting)return P();T(c,[M]);let X=!1;const H=M[qt]=ue=>{X||(X=!0,P(),ue?T(d,[M]):T(v,[M]),M[qt]=void 0,k[F]===t&&delete k[F])};k[F]=t,h?E(h,[M,H]):H()},clone(M){return zi(M,l,n,o)}};return z}function Pa(t){if(Sl(t))return t=$t(t),t.children=null,t}function Ps(t){return Sl(t)?t.children?t.children[0]:void 0:t}function mi(t,l){t.shapeFlag&6&&t.component?mi(t.component.subTree,l):t.shapeFlag&128?(t.ssContent.transition=l.clone(t.ssContent),t.ssFallback.transition=l.clone(t.ssFallback)):t.transition=l}function va(t,l=!1,n){let o=[],r=0;for(let m=0;m<t.length;m++){let f=t[m];const p=n==null?f.key:String(n)+String(f.key!=null?f.key:m);f.type===Se?(f.patchFlag&128&&r++,o=o.concat(va(f.children,l,p))):(l||f.type!==Xe)&&o.push(p!=null?$t(f,{key:p}):f)}if(r>1)for(let m=0;m<o.length;m++)o[m].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function B(t,l){return pe(t)?Oe({name:t.name},l,{setup:t}):t}const ri=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function up(t){pe(t)&&(t={loader:t});const{loader:l,loadingComponent:n,errorComponent:o,delay:r=200,timeout:m,suspensible:f=!0,onError:p}=t;let s=null,u,g=0;const c=()=>(g++,s=null,h()),h=()=>{let v;return s||(v=s=l().catch(d=>{if(d=d instanceof Error?d:new Error(String(d)),p)return new Promise((y,A)=>{p(d,()=>y(c()),()=>A(d),g+1)});throw d}).then(d=>v!==s&&s?s:(d&&(d.__esModule||d[Symbol.toStringTag]==="Module")&&(d=d.default),u=d,d)))};return B({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=Je;if(u)return()=>za(u,v);const d=b=>{s=null,yi(b,v,13,!o)};if(f&&v.suspense||$l)return h().then(b=>()=>za(b,v)).catch(b=>(d(b),()=>o?e(o,{error:b}):null));const y=L(!1),A=L(),$=L(!!r);return r&&setTimeout(()=>{$.value=!1},r),m!=null&&setTimeout(()=>{if(!y.value&&!A.value){const b=new Error(`Async component timed out after ${m}ms.`);d(b),A.value=b}},m),h().then(()=>{y.value=!0,v.parent&&Sl(v.parent.vnode)&&(v.parent.effect.dirty=!0,fa(v.parent.update))}).catch(b=>{d(b),A.value=b}),()=>{if(y.value&&u)return za(u,v);if(A.value&&o)return e(o,{error:A.value});if(n&&!$.value)return e(n)}}})}function za(t,l){const{ref:n,props:o,children:r,ce:m}=l.vnode,f=e(t,o,r);return f.ref=n,f.ce=m,delete l.vnode.ce,f}const Sl=t=>t.type.__isKeepAlive,rp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:l}){const n=Dt(),o=n.ctx;if(!o.renderer)return()=>{const b=l.default&&l.default();return b&&b.length===1?b[0]:b};const r=new Map,m=new Set;let f=null;const p=n.suspense,{renderer:{p:s,m:u,um:g,o:{createElement:c}}}=o,h=c("div");o.activate=(b,w,k,T,E)=>{const z=b.component;u(b,w,k,0,p),s(z.vnode,b,w,k,z,p,T,b.slotScopeIds,E),Ye(()=>{z.isDeactivated=!1,z.a&&xi(z.a);const M=b.props&&b.props.onVnodeMounted;M&&tt(M,z.parent,b)},p)},o.deactivate=b=>{const w=b.component;u(b,h,null,1,p),Ye(()=>{w.da&&xi(w.da);const k=b.props&&b.props.onVnodeUnmounted;k&&tt(k,w.parent,b),w.isDeactivated=!0},p)};function v(b){Ma(b),g(b,n,p,!0)}function d(b){r.forEach((w,k)=>{const T=fn(w.type);T&&(!b||!b(T))&&y(k)})}function y(b){const w=r.get(b);!f||!vt(w,f)?v(w):f&&Ma(f),r.delete(b),m.delete(b)}at(()=>[t.include,t.exclude],([b,w])=>{b&&d(k=>Yi(b,k)),w&&d(k=>!Yi(w,k))},{flush:"post",deep:!0});let A=null;const $=()=>{A!=null&&r.set(A,Na(n.subTree))};return Qt($),Ca($),wa(()=>{r.forEach(b=>{const{subTree:w,suspense:k}=n,T=Na(w);if(b.type===T.type&&b.key===T.key){Ma(T);const E=T.component.da;E&&Ye(E,k);return}v(b)})}),()=>{if(A=null,!l.default)return null;const b=l.default(),w=b[0];if(b.length>1)return f=null,b;if(!kt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return f=null,w;let k=Na(w);const T=k.type,E=fn(ri(k)?k.type.__asyncResolved||{}:T),{include:z,exclude:M,max:P}=t;if(z&&(!E||!Yi(z,E))||M&&E&&Yi(M,E))return f=k,w;const F=k.key==null?T:k.key,X=r.get(F);return k.el&&(k=$t(k),w.shapeFlag&128&&(w.ssContent=k)),A=F,X?(k.el=X.el,k.component=X.component,k.transition&&mi(k,k.transition),k.shapeFlag|=512,m.delete(F),m.add(F)):(m.add(F),P&&m.size>parseInt(P,10)&&y(m.values().next().value)),k.shapeFlag|=256,f=k,cd(w.type)?w:k}}},dp=rp;function Yi(t,l){return se(t)?t.some(n=>Yi(n,l)):He(t)?t.split(",").includes(l):Hc(t)?t.test(l):!1}function Cd(t,l){Ad(t,"a",l)}function wd(t,l){Ad(t,"da",l)}function Ad(t,l,n=Je){const o=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ya(l,o,n),n){let r=n.parent;for(;r&&r.parent;)Sl(r.parent.vnode)&&cp(o,l,n,r),r=r.parent}}function cp(t,l,n,o){const r=ya(l,t,o,!0);Ci(()=>{Nn(o[l],r)},n)}function Ma(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Na(t){return t.shapeFlag&128?t.ssContent:t}function ya(t,l,n=Je,o=!1){if(n){const r=n[t]||(n[t]=[]),m=l.__weh||(l.__weh=(...f)=>{if(n.isUnmounted)return;bi();const p=gi(n),s=pt(l,n,t,f);return p(),vi(),s});return o?r.unshift(m):r.push(m),m}}const Nt=t=>(l,n=Je)=>(!$l||t==="sp")&&ya(t,(...o)=>l(...o),n),Sd=Nt("bm"),Qt=Nt("m"),kd=Nt("bu"),Ca=Nt("u"),wa=Nt("bum"),Ci=Nt("um"),$d=Nt("sp"),Td=Nt("rtg"),xd=Nt("rtc");function Ed(t,l=Je){ya("ec",t,l)}function mt(t,l,n,o){let r;const m=n&&n[o];if(se(t)||He(t)){r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=l(t[f],f,void 0,m&&m[f])}else if(typeof t=="number"){r=new Array(t);for(let f=0;f<t;f++)r[f]=l(f+1,f,void 0,m&&m[f])}else if(De(t))if(t[Symbol.iterator])r=Array.from(t,(f,p)=>l(f,p,void 0,m&&m[p]));else{const f=Object.keys(t);r=new Array(f.length);for(let p=0,s=f.length;p<s;p++){const u=f[p];r[p]=l(t[u],u,p,m&&m[p])}}else r=[];return n&&(n[o]=r),r}function mp(t,l){for(let n=0;n<l.length;n++){const o=l[n];if(se(o))for(let r=0;r<o.length;r++)t[o[r].name]=o[r].fn;else o&&(t[o.name]=o.key?(...r)=>{const m=o.fn(...r);return m&&(m.key=o.key),m}:o.fn)}return t}function Bd(t,l,n={},o,r){if(je.isCE||je.parent&&ri(je.parent)&&je.parent.isCE)return l!=="default"&&(n.name=l),e("slot",n,o&&o());let m=t[l];m&&m._c&&(m._d=!1),te();const f=m&&Rd(m(n)),p=Ue(Se,{key:n.key||f&&f.key||`_${l}`},f||(o?o():[]),f&&t._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),m&&m._c&&(m._d=!0),p}function Rd(t){return t.some(l=>kt(l)?!(l.type===Xe||l.type===Se&&!Rd(l.children)):!0)?t:null}function pp(t,l){const n={};for(const o in t)n[l&&/[A-Z]/.test(o)?`on:${o}`:Zi(o)]=t[o];return n}const ln=t=>t?Xd(t)?Sa(t)||t.proxy:ln(t.parent):null,el=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ln(t.parent),$root:t=>ln(t.root),$emit:t=>t.emit,$options:t=>ts(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,fa(t.update)}),$nextTick:t=>t.n||(t.n=Li.bind(t.proxy)),$watch:t=>sp.bind(t)}),Da=(t,l)=>t!==Pe&&!t.__isScriptSetup&&xe(t,l),an={get({_:t},l){const{ctx:n,setupState:o,data:r,props:m,accessCache:f,type:p,appContext:s}=t;let u;if(l[0]!=="$"){const v=f[l];if(v!==void 0)switch(v){case 1:return o[l];case 2:return r[l];case 4:return n[l];case 3:return m[l]}else{if(Da(o,l))return f[l]=1,o[l];if(r!==Pe&&xe(r,l))return f[l]=2,r[l];if((u=t.propsOptions[0])&&xe(u,l))return f[l]=3,m[l];if(n!==Pe&&xe(n,l))return f[l]=4,n[l];nn&&(f[l]=0)}}const g=el[l];let c,h;if(g)return l==="$attrs"&&nt(t,"get",l),g(t);if((c=p.__cssModules)&&(c=c[l]))return c;if(n!==Pe&&xe(n,l))return f[l]=4,n[l];if(h=s.config.globalProperties,xe(h,l))return h[l]},set({_:t},l,n){const{data:o,setupState:r,ctx:m}=t;return Da(r,l)?(r[l]=n,!0):o!==Pe&&xe(o,l)?(o[l]=n,!0):xe(t.props,l)||l[0]==="$"&&l.slice(1)in t?!1:(m[l]=n,!0)},has({_:{data:t,setupState:l,accessCache:n,ctx:o,appContext:r,propsOptions:m}},f){let p;return!!n[f]||t!==Pe&&xe(t,f)||Da(l,f)||(p=m[0])&&xe(p,f)||xe(o,f)||xe(el,f)||xe(r.config.globalProperties,f)},defineProperty(t,l,n){return n.get!=null?t._.accessCache[l]=0:xe(n,"value")&&this.set(t,l,n.value,null),Reflect.defineProperty(t,l,n)}},fp=Oe({},an,{get(t,l){if(l!==Symbol.unscopables)return an.get(t,l,t)},has(t,l){return l[0]!=="_"&&!Gc(l)}});function gp(){return null}function hp(){return null}function _p(t){}function bp(t){}function vp(){return null}function yp(){}function Cp(t,l){return null}function wp(){return Pd().slots}function Ap(){return Pd().attrs}function Pd(){const t=Dt();return t.setupContext||(t.setupContext=tc(t))}function pl(t){return se(t)?t.reduce((l,n)=>(l[n]=null,l),{}):t}function Sp(t,l){const n=pl(t);for(const o in l){if(o.startsWith("__skip"))continue;let r=n[o];r?se(r)||pe(r)?r=n[o]={type:r,default:l[o]}:r.default=l[o]:r===null&&(r=n[o]={default:l[o]}),r&&l[`__skip_${o}`]&&(r.skipFactory=!0)}return n}function kp(t,l){return!t||!l?t||l:se(t)&&se(l)?t.concat(l):Oe({},pl(t),pl(l))}function $p(t,l){const n={};for(const o in t)l.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>t[o]});return n}function Tp(t){const l=Dt();let n=t();return cn(),Dn(n)&&(n=n.catch(o=>{throw gi(l),o})),[n,()=>gi(l)]}let nn=!0;function xp(t){const l=ts(t),n=t.proxy,o=t.ctx;nn=!1,l.beforeCreate&&zs(l.beforeCreate,t,"bc");const{data:r,computed:m,methods:f,watch:p,provide:s,inject:u,created:g,beforeMount:c,mounted:h,beforeUpdate:v,updated:d,activated:y,deactivated:A,beforeDestroy:$,beforeUnmount:b,destroyed:w,unmounted:k,render:T,renderTracked:E,renderTriggered:z,errorCaptured:M,serverPrefetch:P,expose:F,inheritAttrs:X,components:H,directives:ue,filters:ye}=l;if(u&&Ep(u,o,null),f)for(const ae in f){const Y=f[ae];pe(Y)&&(o[ae]=Y.bind(n))}if(r){const ae=r.call(n,n);De(ae)&&(t.data=Mt(ae))}if(nn=!0,m)for(const ae in m){const Y=m[ae],we=pe(Y)?Y.bind(n,n):pe(Y.get)?Y.get.bind(n,n):it,Ve=!pe(Y)&&pe(Y.set)?Y.set.bind(n):it,qe=D({get:we,set:Ve});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Me=>qe.value=Me})}if(p)for(const ae in p)zd(p[ae],o,n,ae);if(s){const ae=pe(s)?s.call(n):s;Reflect.ownKeys(ae).forEach(Y=>{We(Y,ae[Y])})}g&&zs(g,t,"c");function O(ae,Y){se(Y)?Y.forEach(we=>ae(we.bind(n))):Y&&ae(Y.bind(n))}if(O(Sd,c),O(Qt,h),O(kd,v),O(Ca,d),O(Cd,y),O(wd,A),O(Ed,M),O(xd,E),O(Td,z),O(wa,b),O(Ci,k),O($d,P),se(F))if(F.length){const ae=t.exposed||(t.exposed={});F.forEach(Y=>{Object.defineProperty(ae,Y,{get:()=>n[Y],set:we=>n[Y]=we})})}else t.exposed||(t.exposed={});T&&t.render===it&&(t.render=T),X!=null&&(t.inheritAttrs=X),H&&(t.components=H),ue&&(t.directives=ue)}function Ep(t,l,n=it){se(t)&&(t=sn(t));for(const o in t){const r=t[o];let m;De(r)?"default"in r?m=ze(r.from||o,r.default,!0):m=ze(r.from||o):m=ze(r),Ke(m)?Object.defineProperty(l,o,{enumerable:!0,configurable:!0,get:()=>m.value,set:f=>m.value=f}):l[o]=m}}function zs(t,l,n){pt(se(t)?t.map(o=>o.bind(l.proxy)):t.bind(l.proxy),l,n)}function zd(t,l,n,o){const r=o.includes(".")?bd(n,o):()=>n[o];if(He(t)){const m=l[t];pe(m)&&at(r,m)}else if(pe(t))at(r,t.bind(n));else if(De(t))if(se(t))t.forEach(m=>zd(m,l,n,o));else{const m=pe(t.handler)?t.handler.bind(n):l[t.handler];pe(m)&&at(r,m,t)}}function ts(t){const l=t.type,{mixins:n,extends:o}=l,{mixins:r,optionsCache:m,config:{optionMergeStrategies:f}}=t.appContext,p=m.get(l);let s;return p?s=p:!r.length&&!n&&!o?s=l:(s={},r.length&&r.forEach(u=>Kl(s,u,f,!0)),Kl(s,l,f)),De(l)&&m.set(l,s),s}function Kl(t,l,n,o=!1){const{mixins:r,extends:m}=l;m&&Kl(t,m,n,!0),r&&r.forEach(f=>Kl(t,f,n,!0));for(const f in l)if(!(o&&f==="expose")){const p=Bp[f]||n&&n[f];t[f]=p?p(t[f],l[f]):l[f]}return t}const Bp={data:Ms,props:Ns,emits:Ns,methods:Wi,computed:Wi,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Wi,directives:Wi,watch:Pp,provide:Ms,inject:Rp};function Ms(t,l){return l?t?function(){return Oe(pe(t)?t.call(this,this):t,pe(l)?l.call(this,this):l)}:l:t}function Rp(t,l){return Wi(sn(t),sn(l))}function sn(t){if(se(t)){const l={};for(let n=0;n<t.length;n++)l[t[n]]=t[n];return l}return t}function Ze(t,l){return t?[...new Set([].concat(t,l))]:l}function Wi(t,l){return t?Oe(Object.create(null),t,l):l}function Ns(t,l){return t?se(t)&&se(l)?[...new Set([...t,...l])]:Oe(Object.create(null),pl(t),pl(l??{})):l}function Pp(t,l){if(!t)return l;if(!l)return t;const n=Oe(Object.create(null),t);for(const o in l)n[o]=Ze(t[o],l[o]);return n}function Md(){return{app:null,config:{isNativeTag:Lc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zp=0;function Mp(t,l){return function(o,r=null){pe(o)||(o=Oe({},o)),r!=null&&!De(r)&&(r=null);const m=Md(),f=new WeakSet;let p=!1;const s=m.app={_uid:zp++,_component:o,_props:r,_container:null,_context:m,_instance:null,version:lc,get config(){return m.config},set config(u){},use(u,...g){return f.has(u)||(u&&pe(u.install)?(f.add(u),u.install(s,...g)):pe(u)&&(f.add(u),u(s,...g))),s},mixin(u){return m.mixins.includes(u)||m.mixins.push(u),s},component(u,g){return g?(m.components[u]=g,s):m.components[u]},directive(u,g){return g?(m.directives[u]=g,s):m.directives[u]},mount(u,g,c){if(!p){const h=e(o,r);return h.appContext=m,c===!0?c="svg":c===!1&&(c=void 0),g&&l?l(h,u):t(h,u,c),p=!0,s._container=u,u.__vue_app__=s,Sa(h.component)||h.component.proxy}},unmount(){p&&(t(null,s._container),delete s._container.__vue_app__)},provide(u,g){return m.provides[u]=g,s},runWithContext(u){fl=s;try{return u()}finally{fl=null}}};return s}}let fl=null;function We(t,l){if(Je){let n=Je.provides;const o=Je.parent&&Je.parent.provides;o===n&&(n=Je.provides=Object.create(o)),n[t]=l}}function ze(t,l,n=!1){const o=Je||je;if(o||fl){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:fl._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&pe(l)?l.call(o&&o.proxy):l}}function Np(){return!!(Je||je||fl)}function Dp(t,l,n,o=!1){const r={},m={};Jl(m,Aa,1),t.propsDefaults=Object.create(null),Nd(t,l,r,m);for(const f in t.propsOptions[0])f in r||(r[f]=void 0);n?t.props=o?r:Zr(r):t.type.props?t.props=r:t.props=m,t.attrs=m}function Fp(t,l,n,o){const{props:r,attrs:m,vnode:{patchFlag:f}}=t,p=ke(r),[s]=t.propsOptions;let u=!1;if((o||f>0)&&!(f&16)){if(f&8){const g=t.vnode.dynamicProps;for(let c=0;c<g.length;c++){let h=g[c];if(ga(t.emitsOptions,h))continue;const v=l[h];if(s)if(xe(m,h))v!==m[h]&&(m[h]=v,u=!0);else{const d=et(h);r[d]=on(s,p,d,v,t,!1)}else v!==m[h]&&(m[h]=v,u=!0)}}}else{Nd(t,l,r,m)&&(u=!0);let g;for(const c in p)(!l||!xe(l,c)&&((g=ct(c))===c||!xe(l,g)))&&(s?n&&(n[c]!==void 0||n[g]!==void 0)&&(r[c]=on(s,p,c,void 0,t,!0)):delete r[c]);if(m!==p)for(const c in m)(!l||!xe(l,c))&&(delete m[c],u=!0)}u&&Rt(t,"set","$attrs")}function Nd(t,l,n,o){const[r,m]=t.propsOptions;let f=!1,p;if(l)for(let s in l){if(Xi(s))continue;const u=l[s];let g;r&&xe(r,g=et(s))?!m||!m.includes(g)?n[g]=u:(p||(p={}))[g]=u:ga(t.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,f=!0)}if(m){const s=ke(n),u=p||Pe;for(let g=0;g<m.length;g++){const c=m[g];n[c]=on(r,s,c,u[c],t,!xe(u,c))}}return f}function on(t,l,n,o,r,m){const f=t[n];if(f!=null){const p=xe(f,"default");if(p&&o===void 0){const s=f.default;if(f.type!==Function&&!f.skipFactory&&pe(s)){const{propsDefaults:u}=r;if(n in u)o=u[n];else{const g=gi(r);o=u[n]=s.call(null,l),g()}}else o=s}f[0]&&(m&&!p?o=!1:f[1]&&(o===""||o===ct(n))&&(o=!0))}return o}function Dd(t,l,n=!1){const o=l.propsCache,r=o.get(t);if(r)return r;const m=t.props,f={},p=[];let s=!1;if(!pe(t)){const g=c=>{s=!0;const[h,v]=Dd(c,l,!0);Oe(f,h),v&&p.push(...v)};!n&&l.mixins.length&&l.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!m&&!s)return De(t)&&o.set(t,$i),$i;if(se(m))for(let g=0;g<m.length;g++){const c=et(m[g]);Ds(c)&&(f[c]=Pe)}else if(m)for(const g in m){const c=et(g);if(Ds(c)){const h=m[g],v=f[c]=se(h)||pe(h)?{type:h}:Oe({},h);if(v){const d=Vs(Boolean,v.type),y=Vs(String,v.type);v[0]=d>-1,v[1]=y<0||d<y,(d>-1||xe(v,"default"))&&p.push(c)}}}const u=[f,p];return De(t)&&o.set(t,u),u}function Ds(t){return t[0]!=="$"}function Fs(t){const l=t&&t.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:t===null?"null":""}function Is(t,l){return Fs(t)===Fs(l)}function Vs(t,l){return se(l)?l.findIndex(n=>Is(n,t)):pe(l)&&Is(l,t)?0:-1}const Fd=t=>t[0]==="_"||t==="$stable",is=t=>se(t)?t.map(rt):[rt(t)],Ip=(t,l,n)=>{if(l._n)return l;const o=i((...r)=>is(l(...r)),n);return o._c=!1,o},Id=(t,l,n)=>{const o=t._ctx;for(const r in t){if(Fd(r))continue;const m=t[r];if(pe(m))l[r]=Ip(r,m,o);else if(m!=null){const f=is(m);l[r]=()=>f}}},Vd=(t,l)=>{const n=is(l);t.slots.default=()=>n},Vp=(t,l)=>{if(t.vnode.shapeFlag&32){const n=l._;n?(t.slots=ke(l),Jl(l,"_",n)):Id(l,t.slots={})}else t.slots={},l&&Vd(t,l);Jl(t.slots,Aa,1)},Lp=(t,l,n)=>{const{vnode:o,slots:r}=t;let m=!0,f=Pe;if(o.shapeFlag&32){const p=l._;p?n&&p===1?m=!1:(Oe(r,l),!n&&p===1&&delete r._):(m=!l.$stable,Id(l,r)),f=l}else l&&(Vd(t,l),f={default:1});if(m)for(const p in r)!Fd(p)&&f[p]==null&&delete r[p]};function Ql(t,l,n,o,r=!1){if(se(t)){t.forEach((h,v)=>Ql(h,l&&(se(l)?l[v]:l),n,o,r));return}if(ri(o)&&!r)return;const m=o.shapeFlag&4?Sa(o.component)||o.component.proxy:o.el,f=r?null:m,{i:p,r:s}=t,u=l&&l.r,g=p.refs===Pe?p.refs={}:p.refs,c=p.setupState;if(u!=null&&u!==s&&(He(u)?(g[u]=null,xe(c,u)&&(c[u]=null)):Ke(u)&&(u.value=null)),pe(s))Pt(s,p,12,[f,g]);else{const h=He(s),v=Ke(s),d=t.f;if(h||v){const y=()=>{if(d){const A=h?xe(c,s)?c[s]:g[s]:s.value;r?se(A)&&Nn(A,m):se(A)?A.includes(m)||A.push(m):h?(g[s]=[m],xe(c,s)&&(c[s]=g[s])):(s.value=[m],t.k&&(g[t.k]=s.value))}else h?(g[s]=f,xe(c,s)&&(c[s]=f)):v&&(s.value=f,t.k&&(g[t.k]=f))};r||d?y():(y.id=-1,Ye(y,n))}}}let Vt=!1;const Op=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Hp=t=>t.namespaceURI.includes("MathML"),Dl=t=>{if(Op(t))return"svg";if(Hp(t))return"mathml"},Fl=t=>t.nodeType===8;function jp(t){const{mt:l,p:n,o:{patchProp:o,createText:r,nextSibling:m,parentNode:f,remove:p,insert:s,createComment:u}}=t,g=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),Wl(),k._vnode=w;return}Vt=!1,c(k.firstChild,w,null,null,null),Wl(),k._vnode=w,Vt&&console.error("Hydration completed but contains mismatches.")},c=(w,k,T,E,z,M=!1)=>{const P=Fl(w)&&w.data==="[",F=()=>y(w,k,T,E,z,P),{type:X,ref:H,shapeFlag:ue,patchFlag:ye}=k;let I=w.nodeType;k.el=w,ye===-2&&(M=!1,k.dynamicChildren=null);let O=null;switch(X){case pi:I!==3?k.children===""?(s(k.el=r(""),f(w),w),O=w):O=F():(w.data!==k.children&&(Vt=!0,w.data=k.children),O=m(w));break;case Xe:b(w)?(O=m(w),$(k.el=w.content.firstChild,w,T)):I!==8||P?O=F():O=m(w);break;case di:if(P&&(w=m(w),I=w.nodeType),I===1||I===3){O=w;const ae=!k.children.length;for(let Y=0;Y<k.staticCount;Y++)ae&&(k.children+=O.nodeType===1?O.outerHTML:O.data),Y===k.staticCount-1&&(k.anchor=O),O=m(O);return P?m(O):O}else F();break;case Se:P?O=d(w,k,T,E,z,M):O=F();break;default:if(ue&1)(I!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?O=F():O=h(w,k,T,E,z,M);else if(ue&6){k.slotScopeIds=z;const ae=f(w);if(P?O=A(w):Fl(w)&&w.data==="teleport start"?O=A(w,w.data,"teleport end"):O=m(w),l(k,ae,null,T,E,Dl(ae),M),ri(k)){let Y;P?(Y=e(Se),Y.anchor=O?O.previousSibling:ae.lastChild):Y=w.nodeType===3?a(""):e("div"),Y.el=w,k.component.subTree=Y}}else ue&64?I!==8?O=F():O=k.type.hydrate(w,k,T,E,z,M,t,v):ue&128&&(O=k.type.hydrate(w,k,T,E,Dl(f(w)),z,M,t,c))}return H!=null&&Ql(H,null,E,k),O},h=(w,k,T,E,z,M)=>{M=M||!!k.dynamicChildren;const{type:P,props:F,patchFlag:X,shapeFlag:H,dirs:ue,transition:ye}=k,I=P==="input"||P==="option";if(I||X!==-1){ue&&At(k,null,T,"created");let O=!1;if(b(w)){O=jd(E,ye)&&T&&T.vnode.props&&T.vnode.props.appear;const Y=w.content.firstChild;O&&ye.beforeEnter(Y),$(Y,w,T),k.el=w=Y}if(H&16&&!(F&&(F.innerHTML||F.textContent))){let Y=v(w.firstChild,k,w,T,E,z,M);for(;Y;){Vt=!0;const we=Y;Y=Y.nextSibling,p(we)}}else H&8&&w.textContent!==k.children&&(Vt=!0,w.textContent=k.children);if(F)if(I||!M||X&48)for(const Y in F)(I&&(Y.endsWith("value")||Y==="indeterminate")||_l(Y)&&!Xi(Y)||Y[0]===".")&&o(w,Y,null,F[Y],void 0,void 0,T);else F.onClick&&o(w,"onClick",null,F.onClick,void 0,void 0,T);let ae;(ae=F&&F.onVnodeBeforeMount)&&tt(ae,T,k),ue&&At(k,null,T,"beforeMount"),((ae=F&&F.onVnodeMounted)||ue||O)&&md(()=>{ae&&tt(ae,T,k),O&&ye.enter(w),ue&&At(k,null,T,"mounted")},E)}return w.nextSibling},v=(w,k,T,E,z,M,P)=>{P=P||!!k.dynamicChildren;const F=k.children,X=F.length;for(let H=0;H<X;H++){const ue=P?F[H]:F[H]=rt(F[H]);if(w)w=c(w,ue,E,z,M,P);else{if(ue.type===pi&&!ue.children)continue;Vt=!0,n(null,ue,T,null,E,z,Dl(T),M)}}return w},d=(w,k,T,E,z,M)=>{const{slotScopeIds:P}=k;P&&(z=z?z.concat(P):P);const F=f(w),X=v(m(w),k,F,T,E,z,M);return X&&Fl(X)&&X.data==="]"?m(k.anchor=X):(Vt=!0,s(k.anchor=u("]"),F,X),X)},y=(w,k,T,E,z,M)=>{if(Vt=!0,k.el=null,M){const X=A(w);for(;;){const H=m(w);if(H&&H!==X)p(H);else break}}const P=m(w),F=f(w);return p(w),n(null,k,F,P,T,E,Dl(F),z),P},A=(w,k="[",T="]")=>{let E=0;for(;w;)if(w=m(w),w&&Fl(w)&&(w.data===k&&E++,w.data===T)){if(E===0)return m(w);E--}return w},$=(w,k,T)=>{const E=k.parentNode;E&&E.replaceChild(w,k);let z=T;for(;z;)z.vnode.el===k&&(z.vnode.el=z.subTree.el=w),z=z.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,c]}const Ye=md;function Ld(t){return Hd(t)}function Od(t){return Hd(t,jp)}function Hd(t,l){const n=Mr();n.__VUE__=!0;const{insert:o,remove:r,patchProp:m,createElement:f,createText:p,createComment:s,setText:u,setElementText:g,parentNode:c,nextSibling:h,setScopeId:v=it,insertStaticContent:d}=t,y=(x,R,N,j=null,q=null,Q=null,le=void 0,K=null,ee=!!R.dynamicChildren)=>{if(x===R)return;x&&!vt(x,R)&&(j=Z(x),Me(x,q,Q,!0),x=null),R.patchFlag===-2&&(ee=!1,R.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:ce}=R;switch(U){case pi:A(x,R,N,j);break;case Xe:$(x,R,N,j);break;case di:x==null&&b(R,N,j,le);break;case Se:H(x,R,N,j,q,Q,le,K,ee);break;default:ce&1?T(x,R,N,j,q,Q,le,K,ee):ce&6?ue(x,R,N,j,q,Q,le,K,ee):(ce&64||ce&128)&&U.process(x,R,N,j,q,Q,le,K,ee,Re)}ne!=null&&q&&Ql(ne,x&&x.ref,Q,R||x,!R)},A=(x,R,N,j)=>{if(x==null)o(R.el=p(R.children),N,j);else{const q=R.el=x.el;R.children!==x.children&&u(q,R.children)}},$=(x,R,N,j)=>{x==null?o(R.el=s(R.children||""),N,j):R.el=x.el},b=(x,R,N,j)=>{[x.el,x.anchor]=d(x.children,R,N,j,x.el,x.anchor)},w=({el:x,anchor:R},N,j)=>{let q;for(;x&&x!==R;)q=h(x),o(x,N,j),x=q;o(R,N,j)},k=({el:x,anchor:R})=>{let N;for(;x&&x!==R;)N=h(x),r(x),x=N;r(R)},T=(x,R,N,j,q,Q,le,K,ee)=>{R.type==="svg"?le="svg":R.type==="math"&&(le="mathml"),x==null?E(R,N,j,q,Q,le,K,ee):P(x,R,q,Q,le,K,ee)},E=(x,R,N,j,q,Q,le,K)=>{let ee,U;const{props:ne,shapeFlag:ce,transition:de,dirs:he}=x;if(ee=x.el=f(x.type,Q,ne&&ne.is,ne),ce&8?g(ee,x.children):ce&16&&M(x.children,ee,null,j,q,Fa(x,Q),le,K),he&&At(x,null,j,"created"),z(ee,x,x.scopeId,le,j),ne){for(const Ne in ne)Ne!=="value"&&!Xi(Ne)&&m(ee,Ne,null,ne[Ne],Q,x.children,j,q,ie);"value"in ne&&m(ee,"value",null,ne.value,Q),(U=ne.onVnodeBeforeMount)&&tt(U,j,x)}he&&At(x,null,j,"beforeMount");const Ae=jd(q,de);Ae&&de.beforeEnter(ee),o(ee,R,N),((U=ne&&ne.onVnodeMounted)||Ae||he)&&Ye(()=>{U&&tt(U,j,x),Ae&&de.enter(ee),he&&At(x,null,j,"mounted")},q)},z=(x,R,N,j,q)=>{if(N&&v(x,N),j)for(let Q=0;Q<j.length;Q++)v(x,j[Q]);if(q){let Q=q.subTree;if(R===Q){const le=q.vnode;z(x,le,le.scopeId,le.slotScopeIds,q.parent)}}},M=(x,R,N,j,q,Q,le,K,ee=0)=>{for(let U=ee;U<x.length;U++){const ne=x[U]=K?Jt(x[U]):rt(x[U]);y(null,ne,R,N,j,q,Q,le,K)}},P=(x,R,N,j,q,Q,le)=>{const K=R.el=x.el;let{patchFlag:ee,dynamicChildren:U,dirs:ne}=R;ee|=x.patchFlag&16;const ce=x.props||Pe,de=R.props||Pe;let he;if(N&&Zt(N,!1),(he=de.onVnodeBeforeUpdate)&&tt(he,N,R,x),ne&&At(R,x,N,"beforeUpdate"),N&&Zt(N,!0),U?F(x.dynamicChildren,U,K,N,j,Fa(R,q),Q):le||Y(x,R,K,null,N,j,Fa(R,q),Q,!1),ee>0){if(ee&16)X(K,R,ce,de,N,j,q);else if(ee&2&&ce.class!==de.class&&m(K,"class",null,de.class,q),ee&4&&m(K,"style",ce.style,de.style,q),ee&8){const Ae=R.dynamicProps;for(let Ne=0;Ne<Ae.length;Ne++){const Le=Ae[Ne],Ge=ce[Le],bt=de[Le];(bt!==Ge||Le==="value")&&m(K,Le,Ge,bt,q,x.children,N,j,ie)}}ee&1&&x.children!==R.children&&g(K,R.children)}else!le&&U==null&&X(K,R,ce,de,N,j,q);((he=de.onVnodeUpdated)||ne)&&Ye(()=>{he&&tt(he,N,R,x),ne&&At(R,x,N,"updated")},j)},F=(x,R,N,j,q,Q,le)=>{for(let K=0;K<R.length;K++){const ee=x[K],U=R[K],ne=ee.el&&(ee.type===Se||!vt(ee,U)||ee.shapeFlag&70)?c(ee.el):N;y(ee,U,ne,null,j,q,Q,le,!0)}},X=(x,R,N,j,q,Q,le)=>{if(N!==j){if(N!==Pe)for(const K in N)!Xi(K)&&!(K in j)&&m(x,K,N[K],null,le,R.children,q,Q,ie);for(const K in j){if(Xi(K))continue;const ee=j[K],U=N[K];ee!==U&&K!=="value"&&m(x,K,U,ee,le,R.children,q,Q,ie)}"value"in j&&m(x,"value",N.value,j.value,le)}},H=(x,R,N,j,q,Q,le,K,ee)=>{const U=R.el=x?x.el:p(""),ne=R.anchor=x?x.anchor:p("");let{patchFlag:ce,dynamicChildren:de,slotScopeIds:he}=R;he&&(K=K?K.concat(he):he),x==null?(o(U,N,j),o(ne,N,j),M(R.children||[],N,ne,q,Q,le,K,ee)):ce>0&&ce&64&&de&&x.dynamicChildren?(F(x.dynamicChildren,de,N,q,Q,le,K),(R.key!=null||q&&R===q.subTree)&&ls(x,R,!0)):Y(x,R,N,ne,q,Q,le,K,ee)},ue=(x,R,N,j,q,Q,le,K,ee)=>{R.slotScopeIds=K,x==null?R.shapeFlag&512?q.ctx.activate(R,N,j,le,ee):ye(R,N,j,q,Q,le,ee):I(x,R,ee)},ye=(x,R,N,j,q,Q,le)=>{const K=x.component=Qd(x,j,q);if(Sl(x)&&(K.ctx.renderer=Re),Zd(K),K.asyncDep){if(q&&q.registerDep(K,O),!x.el){const ee=K.subTree=e(Xe);$(null,ee,R,N)}}else O(K,x,R,N,q,Q,le)},I=(x,R,N)=>{const j=R.component=x.component;if(Km(x,R,N))if(j.asyncDep&&!j.asyncResolved){ae(j,R,N);return}else j.next=R,jm(j.update),j.effect.dirty=!0,j.update();else R.el=x.el,j.vnode=R},O=(x,R,N,j,q,Q,le)=>{const K=()=>{if(x.isMounted){let{next:ne,bu:ce,u:de,parent:he,vnode:Ae}=x;{const wi=qd(x);if(wi){ne&&(ne.el=Ae.el,ae(x,ne,le)),wi.asyncDep.then(()=>{x.isUnmounted||K()});return}}let Ne=ne,Le;Zt(x,!1),ne?(ne.el=Ae.el,ae(x,ne,le)):ne=Ae,ce&&xi(ce),(Le=ne.props&&ne.props.onVnodeBeforeUpdate)&&tt(Le,he,ne,Ae),Zt(x,!0);const Ge=jl(x),bt=x.subTree;x.subTree=Ge,y(bt,Ge,c(bt.el),Z(bt),x,q,Q),ne.el=Ge.el,Ne===null&&Wn(x,Ge.el),de&&Ye(de,q),(Le=ne.props&&ne.props.onVnodeUpdated)&&Ye(()=>tt(Le,he,ne,Ae),q)}else{let ne;const{el:ce,props:de}=R,{bm:he,m:Ae,parent:Ne}=x,Le=ri(R);if(Zt(x,!1),he&&xi(he),!Le&&(ne=de&&de.onVnodeBeforeMount)&&tt(ne,Ne,R),Zt(x,!0),ce&&be){const Ge=()=>{x.subTree=jl(x),be(ce,x.subTree,x,q,null)};Le?R.type.__asyncLoader().then(()=>!x.isUnmounted&&Ge()):Ge()}else{const Ge=x.subTree=jl(x);y(null,Ge,N,j,x,q,Q),R.el=Ge.el}if(Ae&&Ye(Ae,q),!Le&&(ne=de&&de.onVnodeMounted)){const Ge=R;Ye(()=>tt(ne,Ne,Ge),q)}(R.shapeFlag&256||Ne&&ri(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&x.a&&Ye(x.a,q),x.isMounted=!0,R=N=j=null}},ee=x.effect=new Pi(K,it,()=>fa(U),x.scope),U=x.update=()=>{ee.dirty&&ee.run()};U.id=x.uid,Zt(x,!0),U()},ae=(x,R,N)=>{R.component=x;const j=x.vnode.props;x.vnode=R,x.next=null,Fp(x,R.props,j,N),Lp(x,R.children,N),bi(),xs(x),vi()},Y=(x,R,N,j,q,Q,le,K,ee=!1)=>{const U=x&&x.children,ne=x?x.shapeFlag:0,ce=R.children,{patchFlag:de,shapeFlag:he}=R;if(de>0){if(de&128){Ve(U,ce,N,j,q,Q,le,K,ee);return}else if(de&256){we(U,ce,N,j,q,Q,le,K,ee);return}}he&8?(ne&16&&ie(U,q,Q),ce!==U&&g(N,ce)):ne&16?he&16?Ve(U,ce,N,j,q,Q,le,K,ee):ie(U,q,Q,!0):(ne&8&&g(N,""),he&16&&M(ce,N,j,q,Q,le,K,ee))},we=(x,R,N,j,q,Q,le,K,ee)=>{x=x||$i,R=R||$i;const U=x.length,ne=R.length,ce=Math.min(U,ne);let de;for(de=0;de<ce;de++){const he=R[de]=ee?Jt(R[de]):rt(R[de]);y(x[de],he,N,null,q,Q,le,K,ee)}U>ne?ie(x,q,Q,!0,!1,ce):M(R,N,j,q,Q,le,K,ee,ce)},Ve=(x,R,N,j,q,Q,le,K,ee)=>{let U=0;const ne=R.length;let ce=x.length-1,de=ne-1;for(;U<=ce&&U<=de;){const he=x[U],Ae=R[U]=ee?Jt(R[U]):rt(R[U]);if(vt(he,Ae))y(he,Ae,N,null,q,Q,le,K,ee);else break;U++}for(;U<=ce&&U<=de;){const he=x[ce],Ae=R[de]=ee?Jt(R[de]):rt(R[de]);if(vt(he,Ae))y(he,Ae,N,null,q,Q,le,K,ee);else break;ce--,de--}if(U>ce){if(U<=de){const he=de+1,Ae=he<ne?R[he].el:j;for(;U<=de;)y(null,R[U]=ee?Jt(R[U]):rt(R[U]),N,Ae,q,Q,le,K,ee),U++}}else if(U>de)for(;U<=ce;)Me(x[U],q,Q,!0),U++;else{const he=U,Ae=U,Ne=new Map;for(U=Ae;U<=de;U++){const ot=R[U]=ee?Jt(R[U]):rt(R[U]);ot.key!=null&&Ne.set(ot.key,U)}let Le,Ge=0;const bt=de-Ae+1;let wi=!1,hs=0;const ji=new Array(bt);for(U=0;U<bt;U++)ji[U]=0;for(U=he;U<=ce;U++){const ot=x[U];if(Ge>=bt){Me(ot,q,Q,!0);continue}let wt;if(ot.key!=null)wt=Ne.get(ot.key);else for(Le=Ae;Le<=de;Le++)if(ji[Le-Ae]===0&&vt(ot,R[Le])){wt=Le;break}wt===void 0?Me(ot,q,Q,!0):(ji[wt-Ae]=U+1,wt>=hs?hs=wt:wi=!0,y(ot,R[wt],N,null,q,Q,le,K,ee),Ge++)}const _s=wi?qp(ji):$i;for(Le=_s.length-1,U=bt-1;U>=0;U--){const ot=Ae+U,wt=R[ot],bs=ot+1<ne?R[ot+1].el:j;ji[U]===0?y(null,wt,N,bs,q,Q,le,K,ee):wi&&(Le<0||U!==_s[Le]?qe(wt,N,bs,2):Le--)}}},qe=(x,R,N,j,q=null)=>{const{el:Q,type:le,transition:K,children:ee,shapeFlag:U}=x;if(U&6){qe(x.component.subTree,R,N,j);return}if(U&128){x.suspense.move(R,N,j);return}if(U&64){le.move(x,R,N,Re);return}if(le===Se){o(Q,R,N);for(let ce=0;ce<ee.length;ce++)qe(ee[ce],R,N,j);o(x.anchor,R,N);return}if(le===di){w(x,R,N);return}if(j!==2&&U&1&&K)if(j===0)K.beforeEnter(Q),o(Q,R,N),Ye(()=>K.enter(Q),q);else{const{leave:ce,delayLeave:de,afterLeave:he}=K,Ae=()=>o(Q,R,N),Ne=()=>{ce(Q,()=>{Ae(),he&&he()})};de?de(Q,Ae,Ne):Ne()}else o(Q,R,N)},Me=(x,R,N,j=!1,q=!1)=>{const{type:Q,props:le,ref:K,children:ee,dynamicChildren:U,shapeFlag:ne,patchFlag:ce,dirs:de}=x;if(K!=null&&Ql(K,null,N,x,!0),ne&256){R.ctx.deactivate(x);return}const he=ne&1&&de,Ae=!ri(x);let Ne;if(Ae&&(Ne=le&&le.onVnodeBeforeUnmount)&&tt(Ne,R,x),ne&6)V(x.component,N,j);else{if(ne&128){x.suspense.unmount(N,j);return}he&&At(x,null,R,"beforeUnmount"),ne&64?x.type.remove(x,R,N,q,Re,j):U&&(Q!==Se||ce>0&&ce&64)?ie(U,R,N,!1,!0):(Q===Se&&ce&384||!q&&ne&16)&&ie(ee,R,N),j&&Ct(x)}(Ae&&(Ne=le&&le.onVnodeUnmounted)||he)&&Ye(()=>{Ne&&tt(Ne,R,x),he&&At(x,null,R,"unmounted")},N)},Ct=x=>{const{type:R,el:N,anchor:j,transition:q}=x;if(R===Se){st(N,j);return}if(R===di){k(x);return}const Q=()=>{r(N),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(x.shapeFlag&1&&q&&!q.persisted){const{leave:le,delayLeave:K}=q,ee=()=>le(N,Q);K?K(x.el,Q,ee):ee()}else Q()},st=(x,R)=>{let N;for(;x!==R;)N=h(x),r(x),x=N;r(R)},V=(x,R,N)=>{const{bum:j,scope:q,update:Q,subTree:le,um:K}=x;j&&xi(j),q.stop(),Q&&(Q.active=!1,Me(le,x,R,N)),K&&Ye(K,R),Ye(()=>{x.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ie=(x,R,N,j=!1,q=!1,Q=0)=>{for(let le=Q;le<x.length;le++)Me(x[le],R,N,j,q)},Z=x=>x.shapeFlag&6?Z(x.component.subTree):x.shapeFlag&128?x.suspense.next():h(x.anchor||x.el);let oe=!1;const Be=(x,R,N)=>{x==null?R._vnode&&Me(R._vnode,null,null,!0):y(R._vnode||null,x,R,null,null,null,N),oe||(oe=!0,xs(),Wl(),oe=!1),R._vnode=x},Re={p:y,um:Me,m:qe,r:Ct,mt:ye,mc:M,pc:Y,pbc:F,n:Z,o:t};let _e,be;return l&&([_e,be]=l(Re)),{render:Be,hydrate:_e,createApp:Mp(Be,_e)}}function Fa({type:t,props:l},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:n}function Zt({effect:t,update:l},n){t.allowRecurse=l.allowRecurse=n}function jd(t,l){return(!t||t&&!t.pendingBranch)&&l&&!l.persisted}function ls(t,l,n=!1){const o=t.children,r=l.children;if(se(o)&&se(r))for(let m=0;m<o.length;m++){const f=o[m];let p=r[m];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[m]=Jt(r[m]),p.el=f.el),n||ls(f,p)),p.type===pi&&(p.el=f.el)}}function qp(t){const l=t.slice(),n=[0];let o,r,m,f,p;const s=t.length;for(o=0;o<s;o++){const u=t[o];if(u!==0){if(r=n[n.length-1],t[r]<u){l[o]=r,n.push(o);continue}for(m=0,f=n.length-1;m<f;)p=m+f>>1,t[n[p]]<u?m=p+1:f=p;u<t[n[m]]&&(m>0&&(l[o]=n[m-1]),n[m]=o)}}for(m=n.length,f=n[m-1];m-- >0;)n[m]=f,f=l[f];return n}function qd(t){const l=t.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:qd(l)}const Jp=t=>t.__isTeleport,tl=t=>t&&(t.disabled||t.disabled===""),Ls=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Os=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,un=(t,l)=>{const n=t&&t.to;return He(n)?l?l(n):null:n},Up={name:"Teleport",__isTeleport:!0,process(t,l,n,o,r,m,f,p,s,u){const{mc:g,pc:c,pbc:h,o:{insert:v,querySelector:d,createText:y,createComment:A}}=u,$=tl(l.props);let{shapeFlag:b,children:w,dynamicChildren:k}=l;if(t==null){const T=l.el=y(""),E=l.anchor=y("");v(T,n,o),v(E,n,o);const z=l.target=un(l.props,d),M=l.targetAnchor=y("");z&&(v(M,z),f==="svg"||Ls(z)?f="svg":(f==="mathml"||Os(z))&&(f="mathml"));const P=(F,X)=>{b&16&&g(w,F,X,r,m,f,p,s)};$?P(n,E):z&&P(z,M)}else{l.el=t.el;const T=l.anchor=t.anchor,E=l.target=t.target,z=l.targetAnchor=t.targetAnchor,M=tl(t.props),P=M?n:E,F=M?T:z;if(f==="svg"||Ls(E)?f="svg":(f==="mathml"||Os(E))&&(f="mathml"),k?(h(t.dynamicChildren,k,P,r,m,f,p),ls(t,l,!0)):s||c(t,l,P,F,r,m,f,p,!1),$)M?l.props&&t.props&&l.props.to!==t.props.to&&(l.props.to=t.props.to):Il(l,n,T,u,1);else if((l.props&&l.props.to)!==(t.props&&t.props.to)){const X=l.target=un(l.props,d);X&&Il(l,X,null,u,0)}else M&&Il(l,E,z,u,1)}Jd(l)},remove(t,l,n,o,{um:r,o:{remove:m}},f){const{shapeFlag:p,children:s,anchor:u,targetAnchor:g,target:c,props:h}=t;if(c&&m(g),f&&m(u),p&16){const v=f||!tl(h);for(let d=0;d<s.length;d++){const y=s[d];r(y,l,n,v,!!y.dynamicChildren)}}},move:Il,hydrate:Gp};function Il(t,l,n,{o:{insert:o},m:r},m=2){m===0&&o(t.targetAnchor,l,n);const{el:f,anchor:p,shapeFlag:s,children:u,props:g}=t,c=m===2;if(c&&o(f,l,n),(!c||tl(g))&&s&16)for(let h=0;h<u.length;h++)r(u[h],l,n,2);c&&o(p,l,n)}function Gp(t,l,n,o,r,m,{o:{nextSibling:f,parentNode:p,querySelector:s}},u){const g=l.target=un(l.props,s);if(g){const c=g._lpa||g.firstChild;if(l.shapeFlag&16)if(tl(l.props))l.anchor=u(f(t),l,p(t),n,o,r,m),l.targetAnchor=c;else{l.anchor=f(t);let h=c;for(;h;)if(h=f(h),h&&h.nodeType===8&&h.data==="teleport anchor"){l.targetAnchor=h,g._lpa=l.targetAnchor&&f(l.targetAnchor);break}u(c,l,g,n,o,r,m)}Jd(l)}return l.anchor&&f(l.anchor)}const as=Up;function Jd(t){const l=t.ctx;if(l&&l.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const Se=Symbol.for("v-fgt"),pi=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),di=Symbol.for("v-stc"),il=[];let lt=null;function te(t=!1){il.push(lt=t?null:[])}function Ud(){il.pop(),lt=il[il.length-1]||null}let fi=1;function rn(t){fi+=t}function Gd(t){return t.dynamicChildren=fi>0?lt||$i:null,Ud(),fi>0&&lt&&lt.push(t),t}function re(t,l,n,o,r,m){return Gd(C(t,l,n,o,r,m,!0))}function Ue(t,l,n,o,r){return Gd(e(t,l,n,o,r,!0))}function kt(t){return t?t.__v_isVNode===!0:!1}function vt(t,l){return t.type===l.type&&t.key===l.key}function Yp(t){}const Aa="__vInternal",Yd=({key:t})=>t??null,ql=({ref:t,ref_key:l,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Ke(t)||pe(t)?{i:je,r:t,k:l,f:!!n}:t:null);function C(t,l=null,n=null,o=0,r=null,m=t===Se?0:1,f=!1,p=!1){const s={__v_isVNode:!0,__v_skip:!0,type:t,props:l,key:l&&Yd(l),ref:l&&ql(l),scopeId:ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:je};return p?(ns(s,n),m&128&&t.normalize(s)):n&&(s.shapeFlag|=He(n)?8:16),fi>0&&!f&&lt&&(s.patchFlag>0||m&6)&&s.patchFlag!==32&&lt.push(s),s}const e=Wp;function Wp(t,l=null,n=null,o=0,r=null,m=!1){if((!t||t===dd)&&(t=Xe),kt(t)){const p=$t(t,l,!0);return n&&ns(p,n),fi>0&&!m&&lt&&(p.shapeFlag&6?lt[lt.indexOf(t)]=p:lt.push(p)),p.patchFlag|=-2,p}if(af(t)&&(t=t.__vccOpts),l){l=Wd(l);let{class:p,style:s}=l;p&&!He(p)&&(l.class=yl(p)),De(s)&&(jn(s)&&!se(s)&&(s=Oe({},s)),l.style=vl(s))}const f=He(t)?1:cd(t)?128:Jp(t)?64:De(t)?4:pe(t)?2:0;return C(t,l,n,o,r,f,m,!0)}function Wd(t){return t?jn(t)||Aa in t?Oe({},t):t:null}function $t(t,l,n=!1){const{props:o,ref:r,patchFlag:m,children:f}=t,p=l?kl(o||{},l):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&Yd(p),ref:l&&l.ref?n&&r?se(r)?r.concat(ql(l)):[r,ql(l)]:ql(l):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:l&&t.type!==Se?m===-1?16:m|16:m,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function a(t=" ",l=0){return e(pi,null,t,l)}function Kp(t,l){const n=e(di,null,t);return n.staticCount=l,n}function Kd(t="",l=!1){return l?(te(),Ue(Xe,null,t)):e(Xe,null,t)}function rt(t){return t==null||typeof t=="boolean"?e(Xe):se(t)?e(Se,null,t.slice()):typeof t=="object"?Jt(t):e(pi,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$t(t)}function ns(t,l){let n=0;const{shapeFlag:o}=t;if(l==null)l=null;else if(se(l))n=16;else if(typeof l=="object")if(o&65){const r=l.default;r&&(r._c&&(r._d=!1),ns(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=l._;!r&&!(Aa in l)?l._ctx=je:r===3&&je&&(je.slots._===1?l._=1:(l._=2,t.patchFlag|=1024))}else pe(l)?(l={default:l,_ctx:je},n=32):(l=String(l),o&64?(n=16,l=[a(l)]):n=8);t.children=l,t.shapeFlag|=n}function kl(...t){const l={};for(let n=0;n<t.length;n++){const o=t[n];for(const r in o)if(r==="class")l.class!==o.class&&(l.class=yl([l.class,o.class]));else if(r==="style")l.style=vl([l.style,o.style]);else if(_l(r)){const m=l[r],f=o[r];f&&m!==f&&!(se(m)&&m.includes(f))&&(l[r]=m?[].concat(m,f):f)}else r!==""&&(l[r]=o[r])}return l}function tt(t,l,n,o=null){pt(t,l,7,[n,o])}const Qp=Md();let Xp=0;function Qd(t,l,n){const o=t.type,r=(l?l.appContext:t.appContext)||Qp,m={uid:Xp++,vnode:t,type:o,parent:l,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new In(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(o,r),emitsOptions:rd(o,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:o.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=l?l.root:m,m.emit=Jm.bind(null,m),t.ce&&t.ce(m),m}let Je=null;const Dt=()=>Je||je;let Xl,dn;{const t=Mr(),l=(n,o)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(o),m=>{r.length>1?r.forEach(f=>f(m)):r[0](m)}};Xl=l("__VUE_INSTANCE_SETTERS__",n=>Je=n),dn=l("__VUE_SSR_SETTERS__",n=>$l=n)}const gi=t=>{const l=Je;return Xl(t),t.scope.on(),()=>{t.scope.off(),Xl(l)}},cn=()=>{Je&&Je.scope.off(),Xl(null)};function Xd(t){return t.vnode.shapeFlag&4}let $l=!1;function Zd(t,l=!1){l&&dn(l);const{props:n,children:o}=t.vnode,r=Xd(t);Dp(t,n,r,l),Vp(t,o);const m=r?Zp(t,l):void 0;return l&&dn(!1),m}function Zp(t,l){const n=t.type;t.accessCache=Object.create(null),t.proxy=qn(new Proxy(t.ctx,an));const{setup:o}=n;if(o){const r=t.setupContext=o.length>1?tc(t):null,m=gi(t);bi();const f=Pt(o,t,0,[t.props,r]);if(vi(),m(),Dn(f)){if(f.then(cn,cn),l)return f.then(p=>{mn(t,p,l)}).catch(p=>{yi(p,t,0)});t.asyncDep=f}else mn(t,f,l)}else ec(t,l)}function mn(t,l,n){pe(l)?t.type.__ssrInlineRender?t.ssrRender=l:t.render=l:De(l)&&(t.setupState=Gn(l)),ec(t,n)}let Zl,pn;function ef(t){Zl=t,pn=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,fp))}}const tf=()=>!Zl;function ec(t,l,n){const o=t.type;if(!t.render){if(!l&&Zl&&!o.render){const r=o.template||ts(t).template;if(r){const{isCustomElement:m,compilerOptions:f}=t.appContext.config,{delimiters:p,compilerOptions:s}=o,u=Oe(Oe({isCustomElement:m,delimiters:p},f),s);o.render=Zl(r,u)}}t.render=o.render||it,pn&&pn(t)}{const r=gi(t);bi();try{xp(t)}finally{vi(),r()}}}function lf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(l,n){return nt(t,"get","$attrs"),l[n]}}))}function tc(t){const l=n=>{t.exposed=n||{}};return{get attrs(){return lf(t)},slots:t.slots,emit:t.emit,expose:l}}function Sa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gn(qn(t.exposed)),{get(l,n){if(n in l)return l[n];if(n in el)return el[n](t)},has(l,n){return n in l||n in el}}))}function fn(t,l=!0){return pe(t)?t.displayName||t.name:t.name||l&&t.__name}function af(t){return pe(t)&&"__vccOpts"in t}const D=(t,l)=>Tm(t,l,$l);function nf(t,l,n=Pe){const o=Dt(),r=et(l),m=ct(l),f=ld((s,u)=>{let g;return _d(()=>{const c=t[l];yt(g,c)&&(g=c,u())}),{get(){return s(),n.get?n.get(g):g},set(c){const h=o.vnode.props;!(h&&(l in h||r in h||m in h)&&(`onUpdate:${l}`in h||`onUpdate:${r}`in h||`onUpdate:${m}`in h))&&yt(c,g)&&(g=c,u()),o.emit(`update:${l}`,n.set?n.set(c):c)}}}),p=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return f[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?t[p]||{}:f,done:!1}:{done:!0}}}},f}function J(t,l,n){const o=arguments.length;return o===2?De(l)&&!se(l)?kt(l)?e(t,null,[l]):e(t,l):e(t,null,l):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&kt(n)&&(n=[n]),e(t,l,n))}function sf(){}function of(t,l,n,o){const r=n[o];if(r&&ic(r,t))return r;const m=l();return m.memo=t.slice(),n[o]=m}function ic(t,l){const n=t.memo;if(n.length!=l.length)return!1;for(let o=0;o<n.length;o++)if(yt(n[o],l[o]))return!1;return fi>0&&lt&&lt.push(t),!0}const lc="3.4.15",uf=it,rf=Lm,df=Si,cf=ud,mf={createComponentInstance:Qd,setupComponent:Zd,renderComponentRoot:jl,setCurrentRenderingInstance:cl,isVNode:kt,normalizeVNode:rt},pf=mf,ff=null,gf=null,hf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const _f="http://www.w3.org/2000/svg",bf="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,Hs=Ut&&Ut.createElement("template"),vf={insert:(t,l,n)=>{l.insertBefore(t,n||null)},remove:t=>{const l=t.parentNode;l&&l.removeChild(t)},createElement:(t,l,n,o)=>{const r=l==="svg"?Ut.createElementNS(_f,t):l==="mathml"?Ut.createElementNS(bf,t):Ut.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,l)=>{t.nodeValue=l},setElementText:(t,l)=>{t.textContent=l},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,l){t.setAttribute(l,"")},insertStaticContent(t,l,n,o,r,m){const f=n?n.previousSibling:l.lastChild;if(r&&(r===m||r.nextSibling))for(;l.insertBefore(r.cloneNode(!0),n),!(r===m||!(r=r.nextSibling)););else{Hs.innerHTML=o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t;const p=Hs.content;if(o==="svg"||o==="mathml"){const s=p.firstChild;for(;s.firstChild;)p.appendChild(s.firstChild);p.removeChild(s)}l.insertBefore(p,n)}return[f?f.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}},Lt="transition",qi="animation",Mi=Symbol("_vtc"),ss=(t,{slots:l})=>J(vd,nc(t),l);ss.displayName="Transition";const ac={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yf=ss.props=Oe({},es,ac),ei=(t,l=[])=>{se(t)?t.forEach(n=>n(...l)):t&&t(...l)},js=t=>t?se(t)?t.some(l=>l.length>1):t.length>1:!1;function nc(t){const l={};for(const H in t)H in ac||(l[H]=t[H]);if(t.css===!1)return l;const{name:n="v",type:o,duration:r,enterFromClass:m=`${n}-enter-from`,enterActiveClass:f=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:s=m,appearActiveClass:u=f,appearToClass:g=p,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,d=Cf(r),y=d&&d[0],A=d&&d[1],{onBeforeEnter:$,onEnter:b,onEnterCancelled:w,onLeave:k,onLeaveCancelled:T,onBeforeAppear:E=$,onAppear:z=b,onAppearCancelled:M=w}=l,P=(H,ue,ye)=>{Ht(H,ue?g:p),Ht(H,ue?u:f),ye&&ye()},F=(H,ue)=>{H._isLeaving=!1,Ht(H,c),Ht(H,v),Ht(H,h),ue&&ue()},X=H=>(ue,ye)=>{const I=H?z:b,O=()=>P(ue,H,ye);ei(I,[ue,O]),qs(()=>{Ht(ue,H?s:m),xt(ue,H?g:p),js(I)||Js(ue,o,y,O)})};return Oe(l,{onBeforeEnter(H){ei($,[H]),xt(H,m),xt(H,f)},onBeforeAppear(H){ei(E,[H]),xt(H,s),xt(H,u)},onEnter:X(!1),onAppear:X(!0),onLeave(H,ue){H._isLeaving=!0;const ye=()=>F(H,ue);xt(H,c),oc(),xt(H,h),qs(()=>{H._isLeaving&&(Ht(H,c),xt(H,v),js(k)||Js(H,o,A,ye))}),ei(k,[H,ye])},onEnterCancelled(H){P(H,!1),ei(w,[H])},onAppearCancelled(H){P(H,!0),ei(M,[H])},onLeaveCancelled(H){F(H),ei(T,[H])}})}function Cf(t){if(t==null)return null;if(De(t))return[Ia(t.enter),Ia(t.leave)];{const l=Ia(t);return[l,l]}}function Ia(t){return Ul(t)}function xt(t,l){l.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mi]||(t[Mi]=new Set)).add(l)}function Ht(t,l){l.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const n=t[Mi];n&&(n.delete(l),n.size||(t[Mi]=void 0))}function qs(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wf=0;function Js(t,l,n,o){const r=t._endId=++wf,m=()=>{r===t._endId&&o()};if(n)return setTimeout(m,n);const{type:f,timeout:p,propCount:s}=sc(t,l);if(!f)return o();const u=f+"end";let g=0;const c=()=>{t.removeEventListener(u,h),m()},h=v=>{v.target===t&&++g>=s&&c()};setTimeout(()=>{g<s&&c()},p+1),t.addEventListener(u,h)}function sc(t,l){const n=window.getComputedStyle(t),o=d=>(n[d]||"").split(", "),r=o(`${Lt}Delay`),m=o(`${Lt}Duration`),f=Us(r,m),p=o(`${qi}Delay`),s=o(`${qi}Duration`),u=Us(p,s);let g=null,c=0,h=0;l===Lt?f>0&&(g=Lt,c=f,h=m.length):l===qi?u>0&&(g=qi,c=u,h=s.length):(c=Math.max(f,u),g=c>0?f>u?Lt:qi:null,h=g?g===Lt?m.length:s.length:0);const v=g===Lt&&/\b(transform|all)(,|$)/.test(o(`${Lt}Property`).toString());return{type:g,timeout:c,propCount:h,hasTransform:v}}function Us(t,l){for(;t.length<l.length;)t=t.concat(t);return Math.max(...l.map((n,o)=>Gs(n)+Gs(t[o])))}function Gs(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function oc(){return document.body.offsetHeight}function Af(t,l,n){const o=t[Mi];o&&(l=(l?[l,...o]:[...o]).join(" ")),l==null?t.removeAttribute("class"):n?t.setAttribute("class",l):t.className=l}const os=Symbol("_vod"),uc={beforeMount(t,{value:l},{transition:n}){t[os]=t.style.display==="none"?"":t.style.display,n&&l?n.beforeEnter(t):Ji(t,l)},mounted(t,{value:l},{transition:n}){n&&l&&n.enter(t)},updated(t,{value:l,oldValue:n},{transition:o}){!l!=!n&&(o?l?(o.beforeEnter(t),Ji(t,!0),o.enter(t)):o.leave(t,()=>{Ji(t,!1)}):Ji(t,l))},beforeUnmount(t,{value:l}){Ji(t,l)}};function Ji(t,l){t.style.display=l?t[os]:"none"}function Sf(){uc.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const rc=Symbol("");function kf(t){const l=Dt();if(!l)return;const n=l.ut=(r=t(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(m=>hn(m,r))},o=()=>{const r=t(l.proxy);gn(l.subTree,r),n(r)};hd(o),Qt(()=>{const r=new MutationObserver(o);r.observe(l.subTree.el.parentNode,{childList:!0}),Ci(()=>r.disconnect())})}function gn(t,l){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{gn(n.activeBranch,l)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)hn(t.el,l);else if(t.type===Se)t.children.forEach(n=>gn(n,l));else if(t.type===di){let{el:n,anchor:o}=t;for(;n&&(hn(n,l),n!==o);)n=n.nextSibling}}function hn(t,l){if(t.nodeType===1){const n=t.style;let o="";for(const r in l)n.setProperty(`--${r}`,l[r]),o+=`--${r}: ${l[r]};`;n[rc]=o}}function $f(t,l,n){const o=t.style,r=o.display,m=He(n);if(n&&!m){if(l&&!He(l))for(const f in l)n[f]==null&&_n(o,f,"");for(const f in n)_n(o,f,n[f])}else if(m){if(l!==n){const f=o[rc];f&&(n+=";"+f),o.cssText=n}}else l&&t.removeAttribute("style");os in t&&(o.display=r)}const Ys=/\s*!important$/;function _n(t,l,n){if(se(n))n.forEach(o=>_n(t,l,o));else if(n==null&&(n=""),l.startsWith("--"))t.setProperty(l,n);else{const o=Tf(t,l);Ys.test(n)?t.setProperty(ct(o),n.replace(Ys,""),"important"):t[o]=n}}const Ws=["Webkit","Moz","ms"],Va={};function Tf(t,l){const n=Va[l];if(n)return n;let o=et(l);if(o!=="filter"&&o in t)return Va[l]=o;o=bl(o);for(let r=0;r<Ws.length;r++){const m=Ws[r]+o;if(m in t)return Va[l]=m}return l}const Ks="http://www.w3.org/1999/xlink";function xf(t,l,n,o,r){if(o&&l.startsWith("xlink:"))n==null?t.removeAttributeNS(Ks,l.slice(6,l.length)):t.setAttributeNS(Ks,l,n);else{const m=em(l);n==null||m&&!Nr(n)?t.removeAttribute(l):t.setAttribute(l,m?"":n)}}function Ef(t,l,n,o,r,m,f){if(l==="innerHTML"||l==="textContent"){o&&f(o,r,m),t[l]=n??"";return}const p=t.tagName;if(l==="value"&&p!=="PROGRESS"&&!p.includes("-")){t._value=n;const u=p==="OPTION"?t.getAttribute("value"):t.value,g=n??"";u!==g&&(t.value=g),n==null&&t.removeAttribute(l);return}let s=!1;if(n===""||n==null){const u=typeof t[l];u==="boolean"?n=Nr(n):n==null&&u==="string"?(n="",s=!0):u==="number"&&(n=0,s=!0)}try{t[l]=n}catch{}s&&t.removeAttribute(l)}function Bt(t,l,n,o){t.addEventListener(l,n,o)}function Bf(t,l,n,o){t.removeEventListener(l,n,o)}const Qs=Symbol("_vei");function Rf(t,l,n,o,r=null){const m=t[Qs]||(t[Qs]={}),f=m[l];if(o&&f)f.value=o;else{const[p,s]=Pf(l);if(o){const u=m[l]=Nf(o,r);Bt(t,p,u,s)}else f&&(Bf(t,p,f,s),m[l]=void 0)}}const Xs=/(?:Once|Passive|Capture)$/;function Pf(t){let l;if(Xs.test(t)){l={};let o;for(;o=t.match(Xs);)t=t.slice(0,t.length-o[0].length),l[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ct(t.slice(2)),l]}let La=0;const zf=Promise.resolve(),Mf=()=>La||(zf.then(()=>La=0),La=Date.now());function Nf(t,l){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;pt(Df(o,n.value),l,5,[o])};return n.value=t,n.attached=Mf(),n}function Df(t,l){if(se(l)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},l.map(o=>r=>!r._stopped&&o&&o(r))}else return l}const Zs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ff=(t,l,n,o,r,m,f,p,s)=>{const u=r==="svg";l==="class"?Af(t,o,u):l==="style"?$f(t,n,o):_l(l)?Mn(l)||Rf(t,l,n,o,f):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):If(t,l,o,u))?Ef(t,l,o,m,f,p,s):(l==="true-value"?t._trueValue=o:l==="false-value"&&(t._falseValue=o),xf(t,l,o,u))};function If(t,l,n,o){if(o)return!!(l==="innerHTML"||l==="textContent"||l in t&&Zs(l)&&pe(n));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&t.tagName==="INPUT"||l==="type"&&t.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zs(l)&&He(n)?!1:l in t}/*! #__NO_SIDE_EFFECTS__ */function dc(t,l){const n=B(t);class o extends ka{constructor(m){super(n,m,l)}}return o.def=n,o}/*! #__NO_SIDE_EFFECTS__ */const Vf=t=>dc(t,Cc),Lf=typeof HTMLElement<"u"?HTMLElement:class{};class ka extends Lf{constructor(l,n={},o){super(),this._def=l,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Li(()=>{this._connected||(bn(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(o,r=!1)=>{const{props:m,styles:f}=o;let p;if(m&&!se(m))for(const s in m){const u=m[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Ul(this._props[s])),(p||(p=Object.create(null)))[et(s)]=!0)}this._numberProps=p,r&&this._resolveProps(o),this._applyStyles(f),this._update()},n=this._def.__asyncLoader;n?n().then(o=>l(o,!0)):l(this._def)}_resolveProps(l){const{props:n}=l,o=se(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(et))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(m){this._setProp(r,m)}})}_setAttr(l){let n=this.getAttribute(l);const o=et(l);this._numberProps&&this._numberProps[o]&&(n=Ul(n)),this._setProp(o,n,!1)}_getProp(l){return this._props[l]}_setProp(l,n,o=!0,r=!0){n!==this._props[l]&&(this._props[l]=n,r&&this._instance&&this._update(),o&&(n===!0?this.setAttribute(ct(l),""):typeof n=="string"||typeof n=="number"?this.setAttribute(ct(l),n+""):n||this.removeAttribute(ct(l))))}_update(){bn(this._createVNode(),this.shadowRoot)}_createVNode(){const l=e(this._def,Oe({},this._props));return this._instance||(l.ce=n=>{this._instance=n,n.isCE=!0;const o=(m,f)=>{this.dispatchEvent(new CustomEvent(m,{detail:f}))};n.emit=(m,...f)=>{o(m,f),ct(m)!==m&&o(ct(m),f)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof ka){n.parent=r._instance,n.provides=r._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(n=>{const o=document.createElement("style");o.textContent=n,this.shadowRoot.appendChild(o)})}}function Of(t="$style"){{const l=Dt();if(!l)return Pe;const n=l.type.__cssModules;if(!n)return Pe;const o=n[t];return o||Pe}}const cc=new WeakMap,mc=new WeakMap,ea=Symbol("_moveCb"),eo=Symbol("_enterCb"),pc={name:"TransitionGroup",props:Oe({},yf,{tag:String,moveClass:String}),setup(t,{slots:l}){const n=Dt(),o=Zn();let r,m;return Ca(()=>{if(!r.length)return;const f=t.moveClass||`${t.name||"v"}-move`;if(!Gf(r[0].el,n.vnode.el,f))return;r.forEach(qf),r.forEach(Jf);const p=r.filter(Uf);oc(),p.forEach(s=>{const u=s.el,g=u.style;xt(u,f),g.transform=g.webkitTransform=g.transitionDuration="";const c=u[ea]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",c),u[ea]=null,Ht(u,f))};u.addEventListener("transitionend",c)})}),()=>{const f=ke(t),p=nc(f);let s=f.tag||Se;r=m,m=l.default?va(l.default()):[];for(let u=0;u<m.length;u++){const g=m[u];g.key!=null&&mi(g,zi(g,p,o,n))}if(r)for(let u=0;u<r.length;u++){const g=r[u];mi(g,zi(g,p,o,n)),cc.set(g,g.el.getBoundingClientRect())}return e(s,null,m)}}},Hf=t=>delete t.mode;pc.props;const jf=pc;function qf(t){const l=t.el;l[ea]&&l[ea](),l[eo]&&l[eo]()}function Jf(t){mc.set(t,t.el.getBoundingClientRect())}function Uf(t){const l=cc.get(t),n=mc.get(t),o=l.left-n.left,r=l.top-n.top;if(o||r){const m=t.el.style;return m.transform=m.webkitTransform=`translate(${o}px,${r}px)`,m.transitionDuration="0s",t}}function Gf(t,l,n){const o=t.cloneNode(),r=t[Mi];r&&r.forEach(p=>{p.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),n.split(/\s+/).forEach(p=>p&&o.classList.add(p)),o.style.display="none";const m=l.nodeType===1?l:l.parentNode;m.appendChild(o);const{hasTransform:f}=sc(o);return m.removeChild(o),f}const Kt=t=>{const l=t.props["onUpdate:modelValue"]||!1;return se(l)?n=>xi(l,n):l};function Yf(t){t.target.composing=!0}function to(t){const l=t.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const _t=Symbol("_assign"),ta={created(t,{modifiers:{lazy:l,trim:n,number:o}},r){t[_t]=Kt(r);const m=o||r.props&&r.props.type==="number";Bt(t,l?"change":"input",f=>{if(f.target.composing)return;let p=t.value;n&&(p=p.trim()),m&&(p=sl(p)),t[_t](p)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),l||(Bt(t,"compositionstart",Yf),Bt(t,"compositionend",to),Bt(t,"change",to))},mounted(t,{value:l}){t.value=l??""},beforeUpdate(t,{value:l,modifiers:{lazy:n,trim:o,number:r}},m){if(t[_t]=Kt(m),t.composing)return;const f=r||t.type==="number"?sl(t.value):t.value,p=l??"";f!==p&&(document.activeElement===t&&t.type!=="range"&&(n||o&&t.value.trim()===p)||(t.value=p))}},us={deep:!0,created(t,l,n){t[_t]=Kt(n),Bt(t,"change",()=>{const o=t._modelValue,r=Ni(t),m=t.checked,f=t[_t];if(se(o)){const p=da(o,r),s=p!==-1;if(m&&!s)f(o.concat(r));else if(!m&&s){const u=[...o];u.splice(p,1),f(u)}}else if(_i(o)){const p=new Set(o);m?p.add(r):p.delete(r),f(p)}else f(gc(t,m))})},mounted:io,beforeUpdate(t,l,n){t[_t]=Kt(n),io(t,l,n)}};function io(t,{value:l,oldValue:n},o){t._modelValue=l,se(l)?t.checked=da(l,o.props.value)>-1:_i(l)?t.checked=l.has(o.props.value):l!==n&&(t.checked=zt(l,gc(t,!0)))}const rs={created(t,{value:l},n){t.checked=zt(l,n.props.value),t[_t]=Kt(n),Bt(t,"change",()=>{t[_t](Ni(t))})},beforeUpdate(t,{value:l,oldValue:n},o){t[_t]=Kt(o),l!==n&&(t.checked=zt(l,o.props.value))}},fc={deep:!0,created(t,{value:l,modifiers:{number:n}},o){const r=_i(l);Bt(t,"change",()=>{const m=Array.prototype.filter.call(t.options,f=>f.selected).map(f=>n?sl(Ni(f)):Ni(f));t[_t](t.multiple?r?new Set(m):m:m[0]),t._assigning=!0,Li(()=>{t._assigning=!1})}),t[_t]=Kt(o)},mounted(t,{value:l,oldValue:n,modifiers:{number:o}}){lo(t,l,n,o)},beforeUpdate(t,l,n){t[_t]=Kt(n)},updated(t,{value:l,oldValue:n,modifiers:{number:o}}){t._assigning||lo(t,l,n,o)}};function lo(t,l,n,o){const r=t.multiple,m=se(l);if(!(r&&!m&&!_i(l))&&!(m&&zt(l,n))){for(let f=0,p=t.options.length;f<p;f++){const s=t.options[f],u=Ni(s);if(r)if(m){const g=typeof u;g==="string"||g==="number"?s.selected=l.includes(o?sl(u):u):s.selected=da(l,u)>-1}else s.selected=l.has(u);else if(zt(Ni(s),l)){t.selectedIndex!==f&&(t.selectedIndex=f);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ni(t){return"_value"in t?t._value:t.value}function gc(t,l){const n=l?"_trueValue":"_falseValue";return n in t?t[n]:l}const hc={created(t,l,n){Vl(t,l,n,null,"created")},mounted(t,l,n){Vl(t,l,n,null,"mounted")},beforeUpdate(t,l,n,o){Vl(t,l,n,o,"beforeUpdate")},updated(t,l,n,o){Vl(t,l,n,o,"updated")}};function _c(t,l){switch(t){case"SELECT":return fc;case"TEXTAREA":return ta;default:switch(l){case"checkbox":return us;case"radio":return rs;default:return ta}}}function Vl(t,l,n,o,r){const f=_c(t.tagName,n.props&&n.props.type)[r];f&&f(t,l,n,o)}function Wf(){ta.getSSRProps=({value:t})=>({value:t}),rs.getSSRProps=({value:t},l)=>{if(l.props&&zt(l.props.value,t))return{checked:!0}},us.getSSRProps=({value:t},l)=>{if(se(t)){if(l.props&&da(t,l.props.value)>-1)return{checked:!0}}else if(_i(t)){if(l.props&&t.has(l.props.value))return{checked:!0}}else if(t)return{checked:!0}},hc.getSSRProps=(t,l)=>{if(typeof l.type!="string")return;const n=_c(l.type.toUpperCase(),l.props&&l.props.type);if(n.getSSRProps)return n.getSSRProps(t,l)}}const Kf=["ctrl","shift","alt","meta"],Qf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,l)=>Kf.some(n=>t[`${n}Key`]&&!l.includes(n))},ft=(t,l)=>{const n=t._withMods||(t._withMods={}),o=l.join(".");return n[o]||(n[o]=(r,...m)=>{for(let f=0;f<l.length;f++){const p=Qf[l[f]];if(p&&p(r,l))return}return t(r,...m)})},Xf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zf=(t,l)=>{const n=t._withKeys||(t._withKeys={}),o=l.join(".");return n[o]||(n[o]=r=>{if(!("key"in r))return;const m=ct(r.key);if(l.some(f=>f===m||Xf[f]===m))return t(r)})},bc=Oe({patchProp:Ff},vf);let ll,ao=!1;function vc(){return ll||(ll=Ld(bc))}function yc(){return ll=ao?ll:Od(bc),ao=!0,ll}const bn=(...t)=>{vc().render(...t)},Cc=(...t)=>{yc().hydrate(...t)},wc=(...t)=>{const l=vc().createApp(...t),{mount:n}=l;return l.mount=o=>{const r=Sc(o);if(!r)return;const m=l._component;!pe(m)&&!m.render&&!m.template&&(m.template=r.innerHTML),r.innerHTML="";const f=n(r,!1,Ac(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),f},l},eg=(...t)=>{const l=yc().createApp(...t),{mount:n}=l;return l.mount=o=>{const r=Sc(o);if(r)return n(r,!0,Ac(r))},l};function Ac(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Sc(t){return He(t)?document.querySelector(t):t}let no=!1;const tg=()=>{no||(no=!0,Wf(),Sf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ig=()=>{},lg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:vd,BaseTransitionPropsValidators:es,Comment:Xe,DeprecationTypes:hf,EffectScope:In,ErrorCodes:Vm,ErrorTypeStrings:rf,Fragment:Se,KeepAlive:dp,ReactiveEffect:Pi,Static:di,Suspense:ep,Teleport:as,Text:pi,TrackOpTypes:Dm,Transition:ss,TransitionGroup:jf,TriggerOpTypes:Fm,VueElement:ka,assertNumber:Im,callWithAsyncErrorHandling:pt,callWithErrorHandling:Pt,camelize:et,capitalize:bl,cloneVNode:$t,compatUtils:gf,compile:ig,computed:D,createApp:wc,createBlock:Ue,createCommentVNode:Kd,createElementBlock:re,createElementVNode:C,createHydrationRenderer:Od,createPropsRestProxy:$p,createRenderer:Ld,createSSRApp:eg,createSlots:mp,createStaticVNode:Kp,createTextVNode:a,createVNode:e,customRef:ld,defineAsyncComponent:up,defineComponent:B,defineCustomElement:dc,defineEmits:hp,defineExpose:_p,defineModel:yp,defineOptions:bp,defineProps:gp,defineSSRCustomElement:Vf,defineSlots:vp,devtools:df,effect:nm,effectScope:im,getCurrentInstance:Dt,getCurrentScope:Ir,getTransitionRawChildren:va,guardReactiveProps:Wd,h:J,handleError:yi,hasInjectionContext:Np,hydrate:Cc,initCustomFormatter:sf,initDirectivesForSSR:tg,inject:ze,isMemoSame:ic,isProxy:jn,isReactive:oi,isReadonly:ci,isRef:Ke,isRuntimeOnly:tf,isShallow:ol,isVNode:kt,markRaw:qn,mergeDefaults:Sp,mergeModels:kp,mergeProps:kl,nextTick:Li,normalizeClass:yl,normalizeProps:Xc,normalizeStyle:vl,onActivated:Cd,onBeforeMount:Sd,onBeforeUnmount:wa,onBeforeUpdate:kd,onDeactivated:wd,onErrorCaptured:Ed,onMounted:Qt,onRenderTracked:xd,onRenderTriggered:Td,onScopeDispose:lm,onServerPrefetch:$d,onUnmounted:Ci,onUpdated:Ca,openBlock:te,popScopeId:wl,provide:We,proxyRefs:Gn,pushScopeId:Cl,queuePostFlushCb:Yl,reactive:Mt,readonly:Hn,ref:L,registerRuntimeCompiler:ef,render:bn,renderList:mt,renderSlot:Bd,resolveComponent:_,resolveDirective:_a,resolveDynamicComponent:Xm,resolveFilter:ff,resolveTransitionHooks:zi,setBlockTracking:rn,setDevtoolsHook:cf,setTransitionHooks:mi,shallowReactive:Zr,shallowReadonly:$m,shallowRef:td,ssrContextKey:pd,ssrUtils:pf,stop:sm,toDisplayString:Ee,toHandlerKey:Zi,toHandlers:pp,toRaw:ke,toRef:Za,toRefs:zm,toValue:Bm,transformVNodeArgs:Yp,triggerRef:Em,unref:ui,useAttrs:Ap,useCssModule:Of,useCssVars:kf,useModel:nf,useSSRContext:fd,useSlots:wp,useTransitionState:Zn,vModelCheckbox:us,vModelDynamic:hc,vModelRadio:rs,vModelSelect:fc,vModelText:ta,vShow:uc,version:lc,warn:uf,watch:at,watchEffect:gd,watchPostEffect:hd,watchSyncEffect:_d,withAsyncContext:Tp,withCtx:i,withDefaults:Cp,withDirectives:ba,withKeys:Zf,withMemo:of,withModifiers:ft,withScopeId:Um},Symbol.toStringTag,{value:"Module"})),ag=B({name:"App"}),fe=(t,l)=>{const n=t.__vccOpts||t;for(const[o,r]of l)n[o]=r;return n};function ng(t,l,n,o,r,m){const f=_("router-view");return te(),Ue(f)}const sg=fe(ag,[["render",ng]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const kc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Oi=t=>kc?Symbol(t):"_vr_"+t,og=Oi("rvlm"),so=Oi("rvd"),ds=Oi("r"),cs=Oi("rl"),vn=Oi("rvl"),ki=typeof window<"u";function ug(t){return t.__esModule||kc&&t[Symbol.toStringTag]==="Module"}const Fe=Object.assign;function Oa(t,l){const n={};for(const o in l){const r=l[o];n[o]=Array.isArray(r)?r.map(t):t(r)}return n}const al=()=>{},rg=/\/$/,dg=t=>t.replace(rg,"");function Ha(t,l,n="/"){let o,r={},m="",f="";const p=l.indexOf("?"),s=l.indexOf("#",p>-1?p:0);return p>-1&&(o=l.slice(0,p),m=l.slice(p+1,s>-1?s:l.length),r=t(m)),s>-1&&(o=o||l.slice(0,s),f=l.slice(s,l.length)),o=fg(o??l,n),{fullPath:o+(m&&"?")+m+f,path:o,query:r,hash:f}}function cg(t,l){const n=l.query?t(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function oo(t,l){return!l||!t.toLowerCase().startsWith(l.toLowerCase())?t:t.slice(l.length)||"/"}function mg(t,l,n){const o=l.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&Di(l.matched[o],n.matched[r])&&$c(l.params,n.params)&&t(l.query)===t(n.query)&&l.hash===n.hash}function Di(t,l){return(t.aliasOf||t)===(l.aliasOf||l)}function $c(t,l){if(Object.keys(t).length!==Object.keys(l).length)return!1;for(const n in t)if(!pg(t[n],l[n]))return!1;return!0}function pg(t,l){return Array.isArray(t)?uo(t,l):Array.isArray(l)?uo(l,t):t===l}function uo(t,l){return Array.isArray(l)?t.length===l.length&&t.every((n,o)=>n===l[o]):t.length===1&&t[0]===l}function fg(t,l){if(t.startsWith("/"))return t;if(!t)return l;const n=l.split("/"),o=t.split("/");let r=n.length-1,m,f;for(m=0;m<o.length;m++)if(f=o[m],!(r===1||f==="."))if(f==="..")r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(m-(m===o.length?1:0)).join("/")}var gl;(function(t){t.pop="pop",t.push="push"})(gl||(gl={}));var nl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(nl||(nl={}));function gg(t){if(!t)if(ki){const l=document.querySelector("base");t=l&&l.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dg(t)}const hg=/^[^#]+#/;function _g(t,l){return t.replace(hg,"#")+l}function bg(t,l){const n=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:l.behavior,left:o.left-n.left-(l.left||0),top:o.top-n.top-(l.top||0)}}const $a=()=>({left:window.pageXOffset,top:window.pageYOffset});function vg(t){let l;if("el"in t){const n=t.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;l=bg(r,t)}else l=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function ro(t,l){return(history.state?history.state.position-l:-1)+t}const yn=new Map;function yg(t,l){yn.set(t,l)}function Cg(t){const l=yn.get(t);return yn.delete(t),l}let wg=()=>location.protocol+"//"+location.host;function Tc(t,l){const{pathname:n,search:o,hash:r}=l,m=t.indexOf("#");if(m>-1){let p=r.includes(t.slice(m))?t.slice(m).length:1,s=r.slice(p);return s[0]!=="/"&&(s="/"+s),oo(s,"")}return oo(n,t)+o+r}function Ag(t,l,n,o){let r=[],m=[],f=null;const p=({state:h})=>{const v=Tc(t,location),d=n.value,y=l.value;let A=0;if(h){if(n.value=v,l.value=h,f&&f===d){f=null;return}A=y?h.position-y.position:0}else o(v);r.forEach($=>{$(n.value,d,{delta:A,type:gl.pop,direction:A?A>0?nl.forward:nl.back:nl.unknown})})};function s(){f=n.value}function u(h){r.push(h);const v=()=>{const d=r.indexOf(h);d>-1&&r.splice(d,1)};return m.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Fe({},h.state,{scroll:$a()}),"")}function c(){for(const h of m)h();m=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:u,destroy:c}}function co(t,l,n,o=!1,r=!1){return{back:t,current:l,forward:n,replaced:o,position:window.history.length,scroll:r?$a():null}}function Sg(t){const{history:l,location:n}=window,o={value:Tc(t,n)},r={value:l.state};r.value||m(o.value,{back:null,current:o.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function m(s,u,g){const c=t.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+s:wg()+t+s;try{l[g?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[g?"replace":"assign"](h)}}function f(s,u){const g=Fe({},l.state,co(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});m(s,g,!0),o.value=s}function p(s,u){const g=Fe({},r.value,l.state,{forward:s,scroll:$a()});m(g.current,g,!0);const c=Fe({},co(o.value,s,null),{position:g.position+1},u);m(s,c,!1),o.value=s}return{location:o,state:r,push:p,replace:f}}function kg(t){t=gg(t);const l=Sg(t),n=Ag(t,l.state,l.location,l.replace);function o(m,f=!0){f||n.pauseListeners(),history.go(m)}const r=Fe({location:"",base:t,go:o,createHref:_g.bind(null,t)},l,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>l.state.value}),r}function $g(t){return typeof t=="string"||t&&typeof t=="object"}function xc(t){return typeof t=="string"||typeof t=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ec=Oi("nf");var mo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mo||(mo={}));function Fi(t,l){return Fe(new Error,{type:t,[Ec]:!0},l)}function ti(t,l){return t instanceof Error&&Ec in t&&(l==null||!!(t.type&l))}const po="[^/]+?",Tg={sensitive:!1,strict:!1,start:!0,end:!0},xg=/[.+*?^${}()[\]/\\]/g;function Eg(t,l){const n=Fe({},Tg,l),o=[];let r=n.start?"^":"";const m=[];for(const u of t){const g=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let c=0;c<u.length;c++){const h=u[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(r+="/"),r+=h.value.replace(xg,"\\$&"),v+=40;else if(h.type===1){const{value:d,repeatable:y,optional:A,regexp:$}=h;m.push({name:d,repeatable:y,optional:A});const b=$||po;if(b!==po){v+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${d}" (${b}): `+k.message)}}let w=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;c||(w=A&&u.length<2?`(?:/${w})`:"/"+w),A&&(w+="?"),r+=w,v+=20,A&&(v+=-8),y&&(v+=-20),b===".*"&&(v+=-50)}g.push(v)}o.push(g)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const f=new RegExp(r,n.sensitive?"":"i");function p(u){const g=u.match(f),c={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",d=m[h-1];c[d.name]=v&&d.repeatable?v.split("/"):v}return c}function s(u){let g="",c=!1;for(const h of t){(!c||!g.endsWith("/"))&&(g+="/"),c=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:d,repeatable:y,optional:A}=v,$=d in u?u[d]:"";if(Array.isArray($)&&!y)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray($)?$.join("/"):$;if(!b)if(A)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):c=!0);else throw new Error(`Missing required param "${d}"`);g+=b}}return g}return{re:f,score:o,keys:m,parse:p,stringify:s}}function Bg(t,l){let n=0;for(;n<t.length&&n<l.length;){const o=l[n]-t[n];if(o)return o;n++}return t.length<l.length?t.length===1&&t[0]===80?-1:1:t.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Rg(t,l){let n=0;const o=t.score,r=l.score;for(;n<o.length&&n<r.length;){const m=Bg(o[n],r[n]);if(m)return m;n++}return r.length-o.length}const Pg={type:0,value:""},zg=/[a-zA-Z0-9_]/;function Mg(t){if(!t)return[[]];if(t==="/")return[[Pg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function l(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,o=n;const r=[];let m;function f(){m&&r.push(m),m=[]}let p=0,s,u="",g="";function c(){u&&(n===0?m.push({type:0,value:u}):n===1||n===2||n===3?(m.length>1&&(s==="*"||s==="+")&&l(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:u,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):l("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;p<t.length;){if(s=t[p++],s==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:s==="/"?(u&&c(),f()):s===":"?(c(),n=1):h();break;case 4:h(),n=o;break;case 1:s==="("?n=2:zg.test(s)?h():(c(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:n=3:g+=s;break;case 3:c(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--,g="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${u}"`),c(),f(),r}function Ng(t,l,n){const o=Eg(Mg(t.path),n),r=Fe(o,{record:t,parent:l,children:[],alias:[]});return l&&!r.record.aliasOf==!l.record.aliasOf&&l.children.push(r),r}function Dg(t,l){const n=[],o=new Map;l=go({strict:!1,end:!0,sensitive:!1},l);function r(g){return o.get(g)}function m(g,c,h){const v=!h,d=Ig(g);d.aliasOf=h&&h.record;const y=go(l,g),A=[d];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const k of w)A.push(Fe({},d,{components:h?h.record.components:d.components,path:k,aliasOf:h?h.record:d}))}let $,b;for(const w of A){const{path:k}=w;if(c&&k[0]!=="/"){const T=c.record.path,E=T[T.length-1]==="/"?"":"/";w.path=c.record.path+(k&&E+k)}if($=Ng(w,c,y),h?h.alias.push($):(b=b||$,b!==$&&b.alias.push($),v&&g.name&&!fo($)&&f(g.name)),"children"in d){const T=d.children;for(let E=0;E<T.length;E++)m(T[E],$,h&&h.children[E])}h=h||$,s($)}return b?()=>{f(b)}:al}function f(g){if(xc(g)){const c=o.get(g);c&&(o.delete(g),n.splice(n.indexOf(c),1),c.children.forEach(f),c.alias.forEach(f))}else{const c=n.indexOf(g);c>-1&&(n.splice(c,1),g.record.name&&o.delete(g.record.name),g.children.forEach(f),g.alias.forEach(f))}}function p(){return n}function s(g){let c=0;for(;c<n.length&&Rg(g,n[c])>=0;)c++;n.splice(c,0,g),g.record.name&&!fo(g)&&o.set(g.record.name,g)}function u(g,c){let h,v={},d,y;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Fi(1,{location:g});y=h.record.name,v=Fe(Fg(c.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),g.params),d=h.stringify(v)}else if("path"in g)d=g.path,h=n.find(b=>b.re.test(d)),h&&(v=h.parse(d),y=h.record.name);else{if(h=c.name?o.get(c.name):n.find(b=>b.re.test(c.path)),!h)throw Fi(1,{location:g,currentLocation:c});y=h.record.name,v=Fe({},c.params,g.params),d=h.stringify(v)}const A=[];let $=h;for(;$;)A.unshift($.record),$=$.parent;return{name:y,path:d,params:v,matched:A,meta:Lg(A)}}return t.forEach(g=>m(g)),{addRoute:m,resolve:u,removeRoute:f,getRoutes:p,getRecordMatcher:r}}function Fg(t,l){const n={};for(const o of l)o in t&&(n[o]=t[o]);return n}function Ig(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Vg(t){const l={},n=t.props||!1;if("component"in t)l.default=n;else for(const o in t.components)l[o]=typeof n=="boolean"?n:n[o];return l}function fo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lg(t){return t.reduce((l,n)=>Fe(l,n.meta),{})}function go(t,l){const n={};for(const o in t)n[o]=o in l?l[o]:t[o];return n}const Bc=/#/g,Og=/&/g,Hg=/\//g,jg=/=/g,qg=/\?/g,Rc=/\+/g,Jg=/%5B/g,Ug=/%5D/g,Pc=/%5E/g,Gg=/%60/g,zc=/%7B/g,Yg=/%7C/g,Mc=/%7D/g,Wg=/%20/g;function ms(t){return encodeURI(""+t).replace(Yg,"|").replace(Jg,"[").replace(Ug,"]")}function Kg(t){return ms(t).replace(zc,"{").replace(Mc,"}").replace(Pc,"^")}function Cn(t){return ms(t).replace(Rc,"%2B").replace(Wg,"+").replace(Bc,"%23").replace(Og,"%26").replace(Gg,"`").replace(zc,"{").replace(Mc,"}").replace(Pc,"^")}function Qg(t){return Cn(t).replace(jg,"%3D")}function Xg(t){return ms(t).replace(Bc,"%23").replace(qg,"%3F")}function Zg(t){return t==null?"":Xg(t).replace(Hg,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eh(t){const l={};if(t===""||t==="?")return l;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<o.length;++r){const m=o[r].replace(Rc," "),f=m.indexOf("="),p=ia(f<0?m:m.slice(0,f)),s=f<0?null:ia(m.slice(f+1));if(p in l){let u=l[p];Array.isArray(u)||(u=l[p]=[u]),u.push(s)}else l[p]=s}return l}function ho(t){let l="";for(let n in t){const o=t[n];if(n=Qg(n),o==null){o!==void 0&&(l+=(l.length?"&":"")+n);continue}(Array.isArray(o)?o.map(m=>m&&Cn(m)):[o&&Cn(o)]).forEach(m=>{m!==void 0&&(l+=(l.length?"&":"")+n,m!=null&&(l+="="+m))})}return l}function th(t){const l={};for(const n in t){const o=t[n];o!==void 0&&(l[n]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return l}function Ui(){let t=[];function l(o){return t.push(o),()=>{const r=t.indexOf(o);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:l,list:()=>t,reset:n}}function Gt(t,l,n,o,r){const m=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((f,p)=>{const s=c=>{c===!1?p(Fi(4,{from:n,to:l})):c instanceof Error?p(c):$g(c)?p(Fi(2,{from:l,to:c})):(m&&o.enterCallbacks[r]===m&&typeof c=="function"&&m.push(c),f())},u=t.call(o&&o.instances[r],l,n,s);let g=Promise.resolve(u);t.length<3&&(g=g.then(s)),g.catch(c=>p(c))})}function ja(t,l,n,o){const r=[];for(const m of t)for(const f in m.components){let p=m.components[f];if(!(l!=="beforeRouteEnter"&&!m.instances[f]))if(ih(p)){const u=(p.__vccOpts||p)[l];u&&r.push(Gt(u,n,o,m,f))}else{let s=p();r.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${m.path}"`));const g=ug(u)?u.default:u;m.components[f]=g;const h=(g.__vccOpts||g)[l];return h&&Gt(h,n,o,m,f)()}))}}return r}function ih(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _o(t){const l=ze(ds),n=ze(cs),o=D(()=>l.resolve(ui(t.to))),r=D(()=>{const{matched:s}=o.value,{length:u}=s,g=s[u-1],c=n.matched;if(!g||!c.length)return-1;const h=c.findIndex(Di.bind(null,g));if(h>-1)return h;const v=bo(s[u-2]);return u>1&&bo(g)===v&&c[c.length-1].path!==v?c.findIndex(Di.bind(null,s[u-2])):h}),m=D(()=>r.value>-1&&sh(n.params,o.value.params)),f=D(()=>r.value>-1&&r.value===n.matched.length-1&&$c(n.params,o.value.params));function p(s={}){return nh(s)?l[ui(t.replace)?"replace":"push"](ui(t.to)).catch(al):Promise.resolve()}return{route:o,href:D(()=>o.value.href),isActive:m,isExactActive:f,navigate:p}}const lh=B({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_o,setup(t,{slots:l}){const n=Mt(_o(t)),{options:o}=ze(ds),r=D(()=>({[vo(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[vo(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const m=l.default&&l.default(n);return t.custom?m:J("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},m)}}}),ah=lh;function nh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const l=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return t.preventDefault&&t.preventDefault(),!0}}function sh(t,l){for(const n in l){const o=l[n],r=t[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((m,f)=>m!==r[f]))return!1}return!0}function bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vo=(t,l,n)=>t??l??n,oh=B({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:l,slots:n}){const o=ze(vn),r=D(()=>t.route||o.value),m=ze(so,0),f=D(()=>r.value.matched[m]);We(so,m+1),We(og,f),We(vn,r);const p=L();return at(()=>[p.value,f.value,t.name],([s,u,g],[c,h,v])=>{u&&(u.instances[g]=s,h&&h!==u&&s&&s===c&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!Di(u,h)||!c)&&(u.enterCallbacks[g]||[]).forEach(d=>d(s))},{flush:"post"}),()=>{const s=r.value,u=f.value,g=u&&u.components[t.name],c=t.name;if(!g)return yo(n.default,{Component:g,route:s});const h=u.props[t.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,y=J(g,Fe({},v,l,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[c]=null)},ref:p}));return yo(n.default,{Component:y,route:s})||y}}});function yo(t,l){if(!t)return null;const n=t(l);return n.length===1?n[0]:n}const uh=oh;function rh(t){const l=Dg(t.routes,t),n=t.parseQuery||eh,o=t.stringifyQuery||ho,r=t.history,m=Ui(),f=Ui(),p=Ui(),s=td(Ot);let u=Ot;ki&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Oa.bind(null,V=>""+V),c=Oa.bind(null,Zg),h=Oa.bind(null,ia);function v(V,ie){let Z,oe;return xc(V)?(Z=l.getRecordMatcher(V),oe=ie):oe=V,l.addRoute(oe,Z)}function d(V){const ie=l.getRecordMatcher(V);ie&&l.removeRoute(ie)}function y(){return l.getRoutes().map(V=>V.record)}function A(V){return!!l.getRecordMatcher(V)}function $(V,ie){if(ie=Fe({},ie||s.value),typeof V=="string"){const be=Ha(n,V,ie.path),x=l.resolve({path:be.path},ie),R=r.createHref(be.fullPath);return Fe(be,x,{params:h(x.params),hash:ia(be.hash),redirectedFrom:void 0,href:R})}let Z;if("path"in V)Z=Fe({},V,{path:Ha(n,V.path,ie.path).path});else{const be=Fe({},V.params);for(const x in be)be[x]==null&&delete be[x];Z=Fe({},V,{params:c(V.params)}),ie.params=c(ie.params)}const oe=l.resolve(Z,ie),Be=V.hash||"";oe.params=g(h(oe.params));const Re=cg(o,Fe({},V,{hash:Kg(Be),path:oe.path})),_e=r.createHref(Re);return Fe({fullPath:Re,hash:Be,query:o===ho?th(V.query):V.query||{}},oe,{redirectedFrom:void 0,href:_e})}function b(V){return typeof V=="string"?Ha(n,V,s.value.path):Fe({},V)}function w(V,ie){if(u!==V)return Fi(8,{from:ie,to:V})}function k(V){return z(V)}function T(V){return k(Fe(b(V),{replace:!0}))}function E(V){const ie=V.matched[V.matched.length-1];if(ie&&ie.redirect){const{redirect:Z}=ie;let oe=typeof Z=="function"?Z(V):Z;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=b(oe):{path:oe},oe.params={}),Fe({query:V.query,hash:V.hash,params:V.params},oe)}}function z(V,ie){const Z=u=$(V),oe=s.value,Be=V.state,Re=V.force,_e=V.replace===!0,be=E(Z);if(be)return z(Fe(b(be),{state:Be,force:Re,replace:_e}),ie||Z);const x=Z;x.redirectedFrom=ie;let R;return!Re&&mg(o,oe,Z)&&(R=Fi(16,{to:x,from:oe}),Ve(oe,oe,!0,!1)),(R?Promise.resolve(R):P(x,oe)).catch(N=>ti(N)?N:ae(N,x,oe)).then(N=>{if(N){if(ti(N,2))return z(Fe(b(N.to),{state:Be,force:Re,replace:_e}),ie||x)}else N=X(x,oe,!0,_e,Be);return F(x,oe,N),N})}function M(V,ie){const Z=w(V,ie);return Z?Promise.reject(Z):Promise.resolve()}function P(V,ie){let Z;const[oe,Be,Re]=dh(V,ie);Z=ja(oe.reverse(),"beforeRouteLeave",V,ie);for(const be of oe)be.leaveGuards.forEach(x=>{Z.push(Gt(x,V,ie))});const _e=M.bind(null,V,ie);return Z.push(_e),Ai(Z).then(()=>{Z=[];for(const be of m.list())Z.push(Gt(be,V,ie));return Z.push(_e),Ai(Z)}).then(()=>{Z=ja(Be,"beforeRouteUpdate",V,ie);for(const be of Be)be.updateGuards.forEach(x=>{Z.push(Gt(x,V,ie))});return Z.push(_e),Ai(Z)}).then(()=>{Z=[];for(const be of V.matched)if(be.beforeEnter&&!ie.matched.includes(be))if(Array.isArray(be.beforeEnter))for(const x of be.beforeEnter)Z.push(Gt(x,V,ie));else Z.push(Gt(be.beforeEnter,V,ie));return Z.push(_e),Ai(Z)}).then(()=>(V.matched.forEach(be=>be.enterCallbacks={}),Z=ja(Re,"beforeRouteEnter",V,ie),Z.push(_e),Ai(Z))).then(()=>{Z=[];for(const be of f.list())Z.push(Gt(be,V,ie));return Z.push(_e),Ai(Z)}).catch(be=>ti(be,8)?be:Promise.reject(be))}function F(V,ie,Z){for(const oe of p.list())oe(V,ie,Z)}function X(V,ie,Z,oe,Be){const Re=w(V,ie);if(Re)return Re;const _e=ie===Ot,be=ki?history.state:{};Z&&(oe||_e?r.replace(V.fullPath,Fe({scroll:_e&&be&&be.scroll},Be)):r.push(V.fullPath,Be)),s.value=V,Ve(V,ie,Z,_e),we()}let H;function ue(){H=r.listen((V,ie,Z)=>{const oe=$(V),Be=E(oe);if(Be){z(Fe(Be,{replace:!0}),oe).catch(al);return}u=oe;const Re=s.value;ki&&yg(ro(Re.fullPath,Z.delta),$a()),P(oe,Re).catch(_e=>ti(_e,12)?_e:ti(_e,2)?(z(_e.to,oe).then(be=>{ti(be,20)&&!Z.delta&&Z.type===gl.pop&&r.go(-1,!1)}).catch(al),Promise.reject()):(Z.delta&&r.go(-Z.delta,!1),ae(_e,oe,Re))).then(_e=>{_e=_e||X(oe,Re,!1),_e&&(Z.delta?r.go(-Z.delta,!1):Z.type===gl.pop&&ti(_e,20)&&r.go(-1,!1)),F(oe,Re,_e)}).catch(al)})}let ye=Ui(),I=Ui(),O;function ae(V,ie,Z){we(V);const oe=I.list();return oe.length?oe.forEach(Be=>Be(V,ie,Z)):console.error(V),Promise.reject(V)}function Y(){return O&&s.value!==Ot?Promise.resolve():new Promise((V,ie)=>{ye.add([V,ie])})}function we(V){O||(O=!0,ue(),ye.list().forEach(([ie,Z])=>V?Z(V):ie()),ye.reset())}function Ve(V,ie,Z,oe){const{scrollBehavior:Be}=t;if(!ki||!Be)return Promise.resolve();const Re=!Z&&Cg(ro(V.fullPath,0))||(oe||!Z)&&history.state&&history.state.scroll||null;return Li().then(()=>Be(V,ie,Re)).then(_e=>_e&&vg(_e)).catch(_e=>ae(_e,V,ie))}const qe=V=>r.go(V);let Me;const Ct=new Set;return{currentRoute:s,addRoute:v,removeRoute:d,hasRoute:A,getRoutes:y,resolve:$,options:t,push:k,replace:T,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:m.add,beforeResolve:f.add,afterEach:p.add,onError:I.add,isReady:Y,install(V){const ie=this;V.component("RouterLink",ah),V.component("RouterView",uh),V.config.globalProperties.$router=ie,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ui(s)}),ki&&!Me&&s.value===Ot&&(Me=!0,k(r.location).catch(Be=>{}));const Z={};for(const Be in Ot)Z[Be]=D(()=>s.value[Be]);V.provide(ds,ie),V.provide(cs,Mt(Z)),V.provide(vn,s);const oe=V.unmount;Ct.add(V),V.unmount=function(){Ct.delete(V),Ct.size<1&&(u=Ot,H&&H(),s.value=Ot,Me=!1,O=!1),oe()}}}}function Ai(t){return t.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function dh(t,l){const n=[],o=[],r=[],m=Math.max(l.matched.length,t.matched.length);for(let f=0;f<m;f++){const p=l.matched[f];p&&(t.matched.find(u=>Di(u,p))?o.push(p):n.push(p));const s=t.matched[f];s&&(l.matched.find(u=>Di(u,s))||r.push(s))}return[n,o,r]}function ch(){return ze(cs)}const mh=B({name:"Sidebar",setup(){const t=ch();return{isActive:f=>t.path===f,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"}]}}}),Nc=t=>(Cl("data-v-69bf54a1"),t=t(),wl(),t),ph={class:"sidemenu"},fh={style:{flex:"1","overflow-y":"scroll"}},gh=Nc(()=>C("strong",null," Fomantic UI Vue ",-1)),hh=Nc(()=>C("b",null,"Getting Started",-1));function _h(t,l,n,o,r,m){const f=_("sui-menu-item"),p=_("sui-menu-header"),s=_("sui-menu-menu"),u=_("sui-menu");return te(),re("div",ph,[C("div",fh,[e(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[e(f,{as:"div"},{default:i(()=>[gh]),_:1}),e(f,{as:"router-link",to:"/"},{default:i(()=>[hh]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Elements"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.elements,g=>(te(),Ue(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Collections"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.collections,g=>(te(),Ue(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Views"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.views,g=>(te(),Ue(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Modules"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.modules,g=>(te(),Ue(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})])])}const bh=fe(mh,[["render",_h],["__scopeId","data-v-69bf54a1"]]),vh=B({name:"Home",components:{Sidebar:bh}}),yh={class:"article"};function Ch(t,l,n,o,r,m){const f=_("sidebar"),p=_("router-view");return te(),re("div",null,[e(f),C("div",yh,[e(p)])])}const wh=fe(vh,[["render",Ch]]);var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ah(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Sh(t){if(t.__esModule)return t;var l=t.default;if(typeof l=="function"){var n=function o(){return this instanceof o?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};n.prototype=l.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var r=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:function(){return t[o]}})}),n}const kh=Sh(lg);var Dc={exports:{}};(function(t){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,f={},p={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof s?new s(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++m}),b.__id},clone:function b(w,k){k=k||{};var T,E;switch(p.util.type(w)){case"Object":if(E=p.util.objId(w),k[E])return k[E];T={},k[E]=T;for(var z in w)w.hasOwnProperty(z)&&(T[z]=b(w[z],k));return T;case"Array":return E=p.util.objId(w),k[E]?k[E]:(T=[],k[E]=T,w.forEach(function(M,P){T[P]=b(M,k)}),T);default:return w}},getLanguage:function(b){for(;b;){var w=r.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var k in w)if(w[k].src==b)return w[k]}return null}},isActive:function(b,w,k){for(var T="no-"+w;b;){var E=b.classList;if(E.contains(w))return!0;if(E.contains(T))return!1;b=b.parentElement}return!!k}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(b,w){var k=p.util.clone(p.languages[b]);for(var T in w)k[T]=w[T];return k},insertBefore:function(b,w,k,T){T=T||p.languages;var E=T[b],z={};for(var M in E)if(E.hasOwnProperty(M)){if(M==w)for(var P in k)k.hasOwnProperty(P)&&(z[P]=k[P]);k.hasOwnProperty(M)||(z[M]=E[M])}var F=T[b];return T[b]=z,p.languages.DFS(p.languages,function(X,H){H===F&&X!=b&&(this[X]=z)}),z},DFS:function b(w,k,T,E){E=E||{};var z=p.util.objId;for(var M in w)if(w.hasOwnProperty(M)){k.call(w,M,w[M],T||M);var P=w[M],F=p.util.type(P);F==="Object"&&!E[z(P)]?(E[z(P)]=!0,b(P,k,null,E)):F==="Array"&&!E[z(P)]&&(E[z(P)]=!0,b(P,k,M,E))}}},plugins:{},highlightAll:function(b,w){p.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,k){var T={callback:k,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),p.hooks.run("before-all-elements-highlight",T);for(var E=0,z;z=T.elements[E++];)p.highlightElement(z,w===!0,T.callback)},highlightElement:function(b,w,k){var T=p.util.getLanguage(b),E=p.languages[T];p.util.setLanguage(b,T);var z=b.parentElement;z&&z.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(z,T);var M=b.textContent,P={element:b,language:T,grammar:E,code:M};function F(H){P.highlightedCode=H,p.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,p.hooks.run("after-highlight",P),p.hooks.run("complete",P),k&&k.call(P.element)}if(p.hooks.run("before-sanity-check",P),z=P.element.parentElement,z&&z.nodeName.toLowerCase()==="pre"&&!z.hasAttribute("tabindex")&&z.setAttribute("tabindex","0"),!P.code){p.hooks.run("complete",P),k&&k.call(P.element);return}if(p.hooks.run("before-highlight",P),!P.grammar){F(p.util.encode(P.code));return}if(w&&o.Worker){var X=new Worker(p.filename);X.onmessage=function(H){F(H.data)},X.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else F(p.highlight(P.code,P.grammar,P.language))},highlight:function(b,w,k){var T={code:b,grammar:w,language:k};if(p.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=p.tokenize(T.code,T.grammar),p.hooks.run("after-tokenize",T),s.stringify(p.util.encode(T.tokens),T.language)},tokenize:function(b,w){var k=w.rest;if(k){for(var T in k)w[T]=k[T];delete w.rest}var E=new c;return h(E,E.head,b),g(b,E,w,E.head,0),d(E)},hooks:{all:{},add:function(b,w){var k=p.hooks.all;k[b]=k[b]||[],k[b].push(w)},run:function(b,w){var k=p.hooks.all[b];if(!(!k||!k.length))for(var T=0,E;E=k[T++];)E(w)}},Token:s};o.Prism=p;function s(b,w,k,T){this.type=b,this.content=w,this.alias=k,this.length=(T||"").length|0}s.stringify=function b(w,k){if(typeof w=="string")return w;if(Array.isArray(w)){var T="";return w.forEach(function(F){T+=b(F,k)}),T}var E={type:w.type,content:b(w.content,k),tag:"span",classes:["token",w.type],attributes:{},language:k},z=w.alias;z&&(Array.isArray(z)?Array.prototype.push.apply(E.classes,z):E.classes.push(z)),p.hooks.run("wrap",E);var M="";for(var P in E.attributes)M+=" "+P+'="'+(E.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+M+">"+E.content+"</"+E.tag+">"};function u(b,w,k,T){b.lastIndex=w;var E=b.exec(k);if(E&&T&&E[1]){var z=E[1].length;E.index+=z,E[0]=E[0].slice(z)}return E}function g(b,w,k,T,E,z){for(var M in k)if(!(!k.hasOwnProperty(M)||!k[M])){var P=k[M];P=Array.isArray(P)?P:[P];for(var F=0;F<P.length;++F){if(z&&z.cause==M+","+F)return;var X=P[F],H=X.inside,ue=!!X.lookbehind,ye=!!X.greedy,I=X.alias;if(ye&&!X.pattern.global){var O=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,O+"g")}for(var ae=X.pattern||X,Y=T.next,we=E;Y!==w.tail&&!(z&&we>=z.reach);we+=Y.value.length,Y=Y.next){var Ve=Y.value;if(w.length>b.length)return;if(!(Ve instanceof s)){var qe=1,Me;if(ye){if(Me=u(ae,we,b,ue),!Me||Me.index>=b.length)break;var ie=Me.index,Ct=Me.index+Me[0].length,st=we;for(st+=Y.value.length;ie>=st;)Y=Y.next,st+=Y.value.length;if(st-=Y.value.length,we=st,Y.value instanceof s)continue;for(var V=Y;V!==w.tail&&(st<Ct||typeof V.value=="string");V=V.next)qe++,st+=V.value.length;qe--,Ve=b.slice(we,st),Me.index-=we}else if(Me=u(ae,0,Ve,ue),!Me)continue;var ie=Me.index,Z=Me[0],oe=Ve.slice(0,ie),Be=Ve.slice(ie+Z.length),Re=we+Ve.length;z&&Re>z.reach&&(z.reach=Re);var _e=Y.prev;oe&&(_e=h(w,_e,oe),we+=oe.length),v(w,_e,qe);var be=new s(M,H?p.tokenize(Z,H):Z,I,Z);if(Y=h(w,_e,be),Be&&h(w,Y,Be),qe>1){var x={cause:M+","+F,reach:Re};g(b,w,k,Y.prev,we,x),z&&x.reach>z.reach&&(z.reach=x.reach)}}}}}}function c(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,k){var T=w.next,E={value:k,prev:w,next:T};return w.next=E,T.prev=E,b.length++,E}function v(b,w,k){for(var T=w.next,E=0;E<k&&T!==b.tail;E++)T=T.next;w.next=T,T.prev=w,b.length-=E}function d(b){for(var w=[],k=b.head.next;k!==b.tail;)w.push(k.value),k=k.next;return w}if(!o.document)return o.addEventListener&&(p.disableWorkerMessageHandler||o.addEventListener("message",function(b){var w=JSON.parse(b.data),k=w.language,T=w.code,E=w.immediateClose;o.postMessage(p.highlight(T,p.languages[k],k)),E&&o.close()},!1)),p;var y=p.util.currentScript();y&&(p.filename=y.src,y.hasAttribute("data-manual")&&(p.manual=!0));function A(){p.manual||p.highlightAll()}if(!p.manual){var $=document.readyState;$==="loading"||$==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return p}(l);t.exports&&(t.exports=n),typeof Co<"u"&&(Co.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,m){var f={};f["language-"+m]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[m]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};p["language-"+m]={pattern:/[\s\S]+/,inside:n.languages[m]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var m=o.languages.markup;m&&(m.tag.addInlined("style","css"),m.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(y,A){return"✖ Error "+y+" while fetching file: "+A},m="✖ Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",s="loading",u="loaded",g="failed",c="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+s+'"])';function h(y,A,$){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?A(b.responseText):b.status>=400?$(r(b.status,b.statusText)):$(m))},b.send(null)}function v(y){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(A){var $=Number(A[1]),b=A[2],w=A[3];return b?w?[$,Number(w)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var A=y.element;if(A.matches(c)){y.code="",A.setAttribute(p,s);var $=A.appendChild(document.createElement("CODE"));$.textContent=o;var b=A.getAttribute("data-src"),w=y.language;if(w==="none"){var k=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=f[k]||k}n.util.setLanguage($,w),n.util.setLanguage(A,w);var T=n.plugins.autoloader;T&&T.loadLanguages(w),h(b,function(E){A.setAttribute(p,u);var z=v(A.getAttribute("data-range"));if(z){var M=E.split(/\r\n?|\n/g),P=z[0],F=z[1]==null?M.length:z[1];P<0&&(P+=M.length),P=Math.max(0,Math.min(P-1,M.length)),F<0&&(F+=M.length),F=Math.max(0,Math.min(F,M.length)),E=M.slice(P,F).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(P+1))}$.textContent=E,n.highlightElement($)},function(E){A.setAttribute(p,g),$.textContent=E})}}),n.plugins.fileHighlight={highlight:function(A){for(var $=(A||document).querySelectorAll(c),b=0,w;w=$[b++];)n.highlightElement(w)}};var d=!1;n.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Dc);var $h=Dc.exports;function Th(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Ll=kh,qa=Th($h),xh=Ll.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,n){var o=n.slots,r=n.attrs,m=o&&o.default&&o.default()||[],f=l.code||m&&m.length?m[0].children:"",p=l.inline,s=l.language,u=qa.languages[s],g="language-".concat(s);return function(){return p?Ll.h("code",{class:[g],innerHTML:qa.highlight(f,u)}):Ll.h("pre",Object.assign({},r,{class:[r.class,g]}),[Ll.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:qa.highlight(f,u)}))])}}}),Eh=xh;const Fc=Ah(Eh),Bh=B({name:"DocPageHeader",props:{title:String,sub:String}}),Rh={class:"intro"};function Ph(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment");return te(),Ue(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Rh,[e(p,{as:"h1"},{default:i(()=>[a(Ee(t.title)+" ",1),e(f,null,{default:i(()=>[a(Ee(t.sub),1)]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ie=fe(Bh,[["render",Ph]]),zh=B({name:"GettingStarted",components:{Prism:Fc,DocPageHeader:Ie}}),Ta=t=>(Cl("data-v-2f4c2002"),t=t(),wl(),t),Mh=Ta(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),Nh=Ta(()=>C("p",null," You can import all components as Vue plugin. ",-1)),Dh=Ta(()=>C("br",null,null,-1)),Fh=Ta(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function Ih(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("prism"),u=_("sui-container");return te(),re("div",null,[e(f,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(u,{class:"main"},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Install")]),_:1}),Mh,e(p,{as:"h3"},{default:i(()=>[a("via Package Manager")]),_:1}),e(s,{language:"bash"},{default:i(()=>[a(Ee(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),e(p,{as:"h2"},{default:i(()=>[a("Usage")]),_:1}),Nh,e(s,{language:"js"},{default:i(()=>[a(Ee(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),Dh,Fh,e(s,{language:"js"},{default:i(()=>[a(Ee(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const Vh=fe(zh,[["render",Ih],["__scopeId","data-v-2f4c2002"]]),Lh=B({name:"DocExample",components:{Prism:Fc},props:{title:String,description:String,code:String},setup(){const t=L(!1);return{active:t,toggle:()=>t.value=!t.value}}}),Oh={class:"example"};function Hh(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-grid-column"),u=_("sui-icon"),g=_("sui-grid-row"),c=_("prism"),h=_("sui-grid");return te(),re("div",Oh,[e(h,{columns:2},{default:i(()=>[e(g,null,{default:i(()=>[e(s,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a(Ee(t.title)+" ",1),e(f,null,{default:i(()=>[a(Ee(t.description),1)]),_:1})]),_:1})]),_:1}),e(s,{textAlign:"right"},{default:i(()=>[e(u,{name:"code",color:"grey",onClick:t.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(s,{width:16},{default:i(()=>[Bd(t.$slots,"default")]),_:3}),t.active?(te(),Ue(s,{key:0,width:16},{default:i(()=>[e(c,{language:"markup"},{default:i(()=>[a(Ee(t.code),1)]),_:1})]),_:1})):Kd("",!0)]),_:3})]),_:3})])}const ve=fe(Lh,[["render",Hh]]),ge="/vue-fomantic-ui/images/wireframe/paragraph.png",jh=B({name:"ButtonDoc",components:{DocExample:ve},setup(){const t=L(!1);return{active:t,toggle:()=>t.value=!t.value,buttonExample:`<template>
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
</template>`}}}),Tl=t=>(Cl("data-v-e27c391e"),t=t(),wl(),t),qh={class:"intro"},Jh=Tl(()=>C("div",{class:"or"},null,-1)),Uh=Tl(()=>C("div",{class:"or","data-text":"ou"},null,-1)),Gh=Tl(()=>C("img",{src:ge},null,-1)),Yh=Tl(()=>C("img",{src:ge},null,-1)),Wh=Tl(()=>C("div",{class:"or"},null,-1));function Kh(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-button"),y=_("doc-example"),A=_("sui-button-content"),$=_("sui-label"),b=_("sui-button-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,null,{default:i(()=>[C("div",qh,[e(p,{as:"h1"},{default:i(()=>[a("Button "),e(f,null,{default:i(()=>[a("A button indicates a possible user action")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Button",description:"A standard button",code:t.buttonExample},{default:i(()=>[e(d,null,{default:i(()=>[a("Follow")]),_:1})]),_:1},8,["code"]),e(y,{title:"Emphasis",description:"A button can be formatted to show different levels of emphasis",code:t.emphasisExample},{default:i(()=>[C("div",null,[e(d,{primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{secondary:""},{default:i(()=>[a("Secondary")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Animated",description:"A button can animate to show hidden content",code:t.animatedExample},{default:i(()=>[e(d,{animated:""},{default:i(()=>[e(A,{visible:""},{default:i(()=>[a("Next")]),_:1}),e(A,{hidden:""},{default:i(()=>[e(u,{name:"arrow right"})]),_:1})]),_:1}),e(d,{animated:"vertical"},{default:i(()=>[e(A,{visible:""},{default:i(()=>[e(u,{name:"shop"})]),_:1}),e(A,{hidden:""},{default:i(()=>[a("Shop")]),_:1})]),_:1}),e(d,{animated:"fade"},{default:i(()=>[e(A,{visible:""},{default:i(()=>[a(" Sign-up for a Pro account ")]),_:1}),e(A,{hidden:""},{default:i(()=>[a("$12.99 a month")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"A button can appear alongside a label",code:t.labeledExample},{default:i(()=>[e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e($,{basic:""},{default:i(()=>[a("2,048")]),_:1})]),_:1}),e(d,{labelPosition:"left",as:"div"},{default:i(()=>[e($,{basic:"",pointing:"right"},{default:i(()=>[a("2,048")]),_:1}),e(d,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1})]),_:1}),e(d,{labelPosition:"left",as:"div"},{default:i(()=>[e($,{basic:""},{default:i(()=>[a("1,048")]),_:1}),e(d,{icon:""},{default:i(()=>[e(u,{name:"fork"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.labeledExample2},{default:i(()=>[e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{icon:"",color:"red"},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e($,{basic:"",pointing:"left",color:"red"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1}),e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{basic:"",icon:"",color:"blue"},{default:i(()=>[e(u,{name:"fork"}),a(" Forks ")]),_:1}),e($,{basic:"",pointing:"left",color:"blue"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A button can have only an icon",code:t.iconExample},{default:i(()=>[e(d,{icon:""},{default:i(()=>[e(u,{name:"cloud"})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon",description:"A button can use an icon as a label",code:t.labeledIconExample},{default:i(()=>[e(d,{labeled:"",icon:""},{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(d,{labeled:"right",icon:""},{default:i(()=>[e(u,{name:"right arrow"}),a(" Next ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic",description:"A basic button is less pronounced",code:t.basicExample},{default:i(()=>[e(d,{basic:""},{default:i(()=>[e(u,{name:"user"}),a(" Add Friend ")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample2},{default:i(()=>[e(d,{basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{basic:"",positive:""},{default:i(()=>[a("Positive")]),_:1}),e(d,{basic:"",negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample3},{default:i(()=>[e(d,{basic:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{basic:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{basic:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{basic:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{basic:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{basic:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{basic:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{basic:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{basic:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{basic:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{basic:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{basic:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{basic:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"A button can be formatted to appear on dark backgrounds",code:t.invertedExample},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:""},{default:i(()=>[a("Standard")]),_:1}),e(d,{inverted:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{inverted:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{inverted:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{inverted:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{inverted:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{inverted:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{inverted:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{inverted:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{inverted:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{inverted:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{inverted:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{inverted:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{inverted:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{inverted:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{inverted:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.invertedExample2},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:"",basic:""},{default:i(()=>[a("Basic")]),_:1}),e(d,{inverted:"",basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{inverted:"",basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{inverted:"",basic:"",color:"red"},{default:i(()=>[a("Basic Red")]),_:1}),e(d,{inverted:"",basic:"",color:"orange"},{default:i(()=>[a("Basic Orange")]),_:1}),e(d,{inverted:"",basic:"",color:"yellow"},{default:i(()=>[a("Basic Yellow")]),_:1}),e(d,{inverted:"",basic:"",color:"olive"},{default:i(()=>[a("Basic Olive")]),_:1}),e(d,{inverted:"",basic:"",color:"green"},{default:i(()=>[a("Basic Green")]),_:1}),e(d,{inverted:"",basic:"",color:"teal"},{default:i(()=>[a("Basic Teal")]),_:1}),e(d,{inverted:"",basic:"",color:"blue"},{default:i(()=>[a("Basic Blue")]),_:1}),e(d,{inverted:"",basic:"",color:"violet"},{default:i(()=>[a("Basic Violet")]),_:1}),e(d,{inverted:"",basic:"",color:"purple"},{default:i(()=>[a("Basic Purple")]),_:1}),e(d,{inverted:"",basic:"",color:"pink"},{default:i(()=>[a("Basic Pink")]),_:1}),e(d,{inverted:"",basic:"",color:"brown"},{default:i(()=>[a("Basic Brown")]),_:1}),e(d,{inverted:"",basic:"",color:"grey"},{default:i(()=>[a("Basic Grey")]),_:1}),e(d,{inverted:"",basic:"",color:"black"},{default:i(()=>[a("Basic Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Buttons",description:"Buttons can exist together as a group",code:t.buttonsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon Buttons",description:"Buttons can exist together as a group",code:t.iconButtonsExample},{default:i(()=>[e(b,{icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"align left"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align center"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align right"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align justify"})]),_:1})]),_:1}),e(b,{icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"bold"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"underline"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"text width"})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Conditionals",description:"Button groups can contain conditionals",code:t.conditionalsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Cancel")]),_:1}),Jh,e(d,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.conditionalsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Cancel")]),_:1}),Uh,e(d,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Active",description:"A button can show it is currently the active user selection",code:t.activeExample},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"user"}),a(" Follow ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"A button can show it is currently unable to be interacted with",code:t.disabledExample},{default:i(()=>[e(d,{disabled:""},{default:i(()=>[e(u,{name:"user"}),a(" Followed ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"A button can show a loading indicator",code:t.loadingExample},{default:i(()=>[e(d,{loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{basic:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{primary:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{secondary:"",loading:""},{default:i(()=>[a("Loading")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Social",description:"A button can be formatted to link to a social website",code:t.socialExample},{default:i(()=>[e(d,{facebook:""},{default:i(()=>[e(u,{name:"facebook"}),a(" Facebook ")]),_:1}),e(d,{twitter:""},{default:i(()=>[e(u,{name:"twitter"}),a(" Twitter ")]),_:1}),e(d,{vk:""},{default:i(()=>[e(u,{name:"vk"}),a(" VK ")]),_:1}),e(d,{linkedin:""},{default:i(()=>[e(u,{name:"linkedin"}),a(" LinkedIn ")]),_:1}),e(d,{instagram:""},{default:i(()=>[e(u,{name:"instagram"}),a(" Instagram ")]),_:1}),e(d,{youtube:""},{default:i(()=>[e(u,{name:"youtube"}),a(" YouTube ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"Buttons can have assorted sizes",code:t.sizeExample},{default:i(()=>[C("div",null,[e(d,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(d,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(d,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(d,{size:"medium"},{default:i(()=>[a("Medium")]),_:1}),e(d,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(d,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(d,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(d,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Floated",description:"A button can be aligned to the left or right of its container",code:t.floatedExample},{default:i(()=>[C("div",null,[e(d,{floated:"left"},{default:i(()=>[a("Left Floated")]),_:1}),e(d,{floated:"right"},{default:i(()=>[a("Right Floated")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A button can have different colors",code:t.coloredExample},{default:i(()=>[C("div",null,[e(d,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Compact",description:"A button can reduce its padding to fit into tighter spaces",code:t.compactExample},{default:i(()=>[C("div",null,[e(d,{compact:""},{default:i(()=>[a("Compact")]),_:1}),e(d,null,{default:i(()=>[a("Normal")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Toggle",description:"A button can be formatted to toggle on and off",code:t.toggleExample},{default:i(()=>[e(d,{toggle:"",active:t.active,onClick:l[0]||(l[0]=()=>t.active=!t.active)},{default:i(()=>[a("Vote")]),_:1},8,["active"])]),_:1},8,["code"]),e(y,{title:"Positive",description:"A button can hint towards a positive consequence",code:t.positiveExample},{default:i(()=>[e(d,{positive:""},{default:i(()=>[a("Positive")]),_:1})]),_:1},8,["code"]),e(y,{title:"Negative",description:"A button can hint towards a negative consequence",code:t.negativeExample},{default:i(()=>[e(d,{negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"A button can take the width of its container",code:t.fluidExample},{default:i(()=>[e(d,{fluid:""},{default:i(()=>[a("Fluid")]),_:1})]),_:1},8,["code"]),e(y,{title:"Circular",description:"A button can be circular",code:t.circularExample},{default:i(()=>[e(d,{circular:"",icon:""},{default:i(()=>[e(u,{name:"settings"})]),_:1})]),_:1},8,["code"]),e(y,{code:t.circularExample2},{default:i(()=>[C("div",null,[e(d,{facebook:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"facebook"})]),_:1}),e(d,{twitter:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"twitter"})]),_:1}),e(d,{linkedin:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"linkedin"})]),_:1}),e(d,{youtube:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"youtube"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Vertically Attached",description:"A button can be attached to the top or bottom of other content",code:t.attachedExample},{default:i(()=>[C("div",null,[e(d,{attached:"top"},{default:i(()=>[a("Top")]),_:1}),e(v,{attached:""},{default:i(()=>[Gh]),_:1}),e(d,{attached:"bottom"},{default:i(()=>[a("Bottom")]),_:1})])]),_:1},8,["code"]),e(y,{code:t.attachedExample2},{default:i(()=>[C("div",null,[e(b,{attached:"top"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[Yh]),_:1}),e(b,{attached:"bottom"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Horizontally Attached",description:"A button can be attached to the left or right of other content",code:t.horizontalAttachedExample},{default:i(()=>[C("div",null,[e(d,{attached:"left"},{default:i(()=>[a("Left")]),_:1}),e(d,{attached:"right"},{default:i(()=>[a("Right")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Group Variations")]),_:1}),e(y,{title:"Vertical Buttons",description:"Groups can be formatted to appear vertically",code:t.verticalButtonsExample},{default:i(()=>[e(b,{vertical:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Feed")]),_:1}),e(d,null,{default:i(()=>[a("Messages")]),_:1}),e(d,null,{default:i(()=>[a("Events")]),_:1}),e(d,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon Buttons",description:"Groups can be formatted as labeled icons",code:t.labeledIconButtonsExample},{default:i(()=>[e(b,{vertical:"",labeled:"",icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"play"}),a(" Play ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"shuffle"}),a(" Shuffle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Mixed Group",description:"Groups can be formatted to use multiple button types together",code:t.mixedGroupExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,{labelPosition:"left",icon:""},{default:i(()=>[e(u,{name:"left chevron"}),a(" Back ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"stop"}),a(" Stop ")]),_:1}),e(d,{labelPosition:"right",icon:""},{default:i(()=>[e(u,{name:"right chevron"}),a(" Forward ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Equal Width",description:"Groups can have their widths divided evenly",code:t.equalWidthExample},{default:i(()=>[C("div",null,[e(b,{widths:5},{default:i(()=>[e(d,null,{default:i(()=>[a("Overview")]),_:1}),e(d,null,{default:i(()=>[a("Specs")]),_:1}),e(d,null,{default:i(()=>[a("Warranty")]),_:1}),e(d,null,{default:i(()=>[a("Reviews")]),_:1}),e(d,null,{default:i(()=>[a("Support")]),_:1})]),_:1}),e(s),e(b,{widths:3},{default:i(()=>[e(d,null,{default:i(()=>[a("Overview")]),_:1}),e(d,null,{default:i(()=>[a("Specs")]),_:1}),e(d,null,{default:i(()=>[a("Support")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored Buttons",description:"Groups can have a shared color",code:t.coloredButtonsExample},{default:i(()=>[e(b,{color:"blue"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Buttons",description:"A button group can be less pronounced",code:t.basicButtonsExample},{default:i(()=>[C("div",null,[e(b,{basic:""},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1}),e(s),e(b,{basic:"",vertical:""},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{code:t.basicButtonsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(d,{basic:"",color:"red"},{default:i(()=>[a("One")]),_:1}),e(d,{basic:"",color:"blue"},{default:i(()=>[a("Two")]),_:1}),e(d,{basic:"",color:"green"},{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Group Sizes",description:"Groups can have a shared size",code:t.groupSizesExample},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample2},{default:i(()=>[e(b,{basic:"",icon:"",size:"small"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"file"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"save"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"upload"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"download"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample3},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),Wh,e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Qh=fe(jh,[["render",Kh],["__scopeId","data-v-e27c391e"]]),Xh=B({name:"ContainerDoc",components:{DocExample:ve},setup(){return{containerExample:`<template>
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
</template>`}}}),ps=t=>(Cl("data-v-3696fd53"),t=t(),wl(),t),Zh={class:"intro"},e_=ps(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),t_=ps(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),i_=ps(()=>C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function l_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Zh,[e(p,{as:"h1"},{default:i(()=>[a("Container "),e(f,null,{default:i(()=>[a("A container limits content to a maximum width")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Container",description:"A standard container",code:t.containerExample},{default:i(()=>[e(h,null,{default:i(()=>[e_]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:t.textContainerExample},{default:i(()=>[e(h,{text:""},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Header")]),_:1}),t_]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Text Alignment",description:"A container can specify its text alignment",code:t.textAlignmentExample},{default:i(()=>[C("div",null,[e(h,{textAlign:"left"},{default:i(()=>[a("Left Aligned")]),_:1}),e(h,{textAlign:"center"},{default:i(()=>[a("Center Aligned")]),_:1}),e(h,{textAlign:"right"},{default:i(()=>[a("Right Aligned")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Fluid",description:"A fluid container has no maximum width",code:t.fluidExample},{default:i(()=>[e(h,{fluid:""},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Dogs Roles with Humans")]),_:1}),i_]),_:1})]),_:1},8,["code"])]),_:1})])}const a_=fe(Xh,[["render",l_],["__scopeId","data-v-3696fd53"]]),Ce="/vue-fomantic-ui/images/wireframe/short-paragraph.png",n_=B({name:"DividerDoc",components:{DocExample:ve},setup(){return{dividerCode:`<div>
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
</sui-segment>`}}}),s_={class:"intro"};function o_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("doc-example"),A=_("sui-grid-column"),$=_("sui-grid");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",s_,[e(p,{as:"h1"},{default:i(()=>[a("Divider "),e(f,null,{default:i(()=>[a("A divider visually segments content into groups")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Divider",description:"A standard divider",code:t.dividerCode},{default:i(()=>[C("div",null,[e(d,{src:Ce}),e(s),e(d,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Vertical Divider",description:"A divider can segment content vertically",code:t.verticalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e($,{columns:2,relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1}),e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1})]),_:1}),e(s,{vertical:""},{default:i(()=>[a("and")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:t.horizontalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e($,{relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1})]),_:1}),e(s,{horizontal:""},{default:i(()=>[a("and")]),_:1}),e($,{relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:t.horizontalAlignmentCode},{default:i(()=>[C("div",null,[e(s,{horizontal:"",textAlign:"left"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"left align"}),a(" Left Aligned ")]),_:1})]),_:1}),e(s,{horizontal:"",textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"center align"}),a(" Center Aligned ")]),_:1})]),_:1}),e(s,{horizontal:"",textAlign:"right"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Inverted",description:"A divider can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{src:Ce}),e(s,{inverted:""}),e(d,{src:Ce})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:t.fittedCode},{default:i(()=>[e(v,null,{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(s,{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:t.hiddenCode},{default:i(()=>[C("div",null,[e(p,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(d,{src:Ce}),e(s,{hidden:""}),e(p,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(d,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:t.sectionCode},{default:i(()=>[C("div",null,[e(p,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(d,{src:Ce}),e(s,{section:""}),e(p,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(d,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Clearing",description:"A divider can clear the contents above it",code:t.clearingCode},{default:i(()=>[e(v,null,{default:i(()=>[e(p,{floated:"right"},{default:i(()=>[a("Floated Content")]),_:1}),e(s,{clearing:""}),e(d,{src:Ce})]),_:1})]),_:1},8,["code"])]),_:1})])}const u_=fe(n_,[["render",o_],["__scopeId","data-v-3a1972e7"]]),r_=B({name:"EmojiDoc",components:{DocExample:ve},setup(){return{disabledCode:`<sui-segment basic>
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
</sui-segment>`}}}),d_={class:"intro"},c_=C("br",null,null,-1),m_=C("br",null,null,-1),p_=C("br",null,null,-1),f_=C("br",null,null,-1),g_=C("br",null,null,-1);function h_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-emoji"),y=_("doc-example"),A=_("sui-button"),$=_("sui-label");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",d_,[e(p,{as:"h1"},{default:i(()=>[a("Emoji "),e(f,null,{default:i(()=>[a(" An emoji is a glyph used to represent an emotional state ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Disabled",description:"An emoji can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An emoji can be used as a simple loader",code:t.loadingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"angel",loading:""}),e(d,{name:"blush",loading:""}),e(d,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Size",description:"An emoji can vary in size",code:t.sizeCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"relaxed",size:"small"}),a(" Small "),c_,e(d,{name:"relaxed",size:"medium"}),a(" Medium "),m_,e(d,{name:"relaxed",size:"large"}),a(" Large "),p_,e(d,{name:"relaxed",size:"big"}),a(" Big ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:t.autosizingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(p,{size:"small"},{default:i(()=>[a("Within a header "),e(d,{name:"relaxed"})]),_:1}),e(A,{size:"large"},{default:i(()=>[a("Within a button "),e(d,{name:"relaxed"})]),_:1}),f_,g_,e($,{size:"massive"},{default:i(()=>[a("Within a label "),e(d,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link",description:"An emoji can be formatted as a link",code:t.linkCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const __=fe(r_,[["render",h_]]),b_=B({name:"FlagDoc",components:{DocExample:ve},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),v_={class:"intro"};function y_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-flag"),y=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",v_,[e(p,{as:"h1"},{default:i(()=>[a("Flag "),e(f,null,{default:i(()=>[a(" A flag is used to represent a political state ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(y,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:t.flagCode},{default:i(()=>[C("div",null,[e(d,{name:"ae"}),e(d,{name:"france"}),e(d,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}const C_=fe(b_,[["render",y_]]),w_="/vue-fomantic-ui/images/icons/school.png",A_=B({name:"HeaderDoc",components:{DocExample:ve},setup(){return{pageHeaderCode:`<div>
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
</sui-segment>`}}}),S_={class:"intro"},k_=C("span",null,"$10.99",-1);function $_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-header-content"),A=_("sui-image");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",S_,[e(p,{as:"h1"},{default:i(()=>[a("Header "),e(f,null,{default:i(()=>[a(" A header provides a short summary of content ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:t.pageHeaderCode},{default:i(()=>[C("div",null,[e(p,{as:"h1"},{default:i(()=>[a("First header")]),_:1}),e(p,{as:"h2"},{default:i(()=>[a("Second header")]),_:1}),e(p,{as:"h3"},{default:i(()=>[a("Third header")]),_:1}),e(p,{as:"h4"},{default:i(()=>[a("Fourth header")]),_:1}),e(p,{as:"h5"},{default:i(()=>[a("Fifth header")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:t.contentHeaderCode},{default:i(()=>[C("div",null,[e(p,{size:"huge"},{default:i(()=>[a("Huge Header")]),_:1}),e(p,{size:"large"},{default:i(()=>[a("Large Header")]),_:1}),e(p,{size:"medium"},{default:i(()=>[a("Medium Header")]),_:1}),e(p,{size:"small"},{default:i(()=>[a("Small Header")]),_:1}),e(p,{size:"tiny"},{default:i(()=>[a("Tiny Header")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:t.iconHeadersCode},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(u,{name:"settings"}),e(y,null,{default:i(()=>[a(" AccountSettings "),e(f,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:t.subHeadersCode},{default:i(()=>[C("div",null,[e(p,{as:"h2",sub:""},{default:i(()=>[a("Price")]),_:1}),k_])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(d,{title:"Image",description:"A header may contain an image",code:t.imageCode},{default:i(()=>[e(p,null,{default:i(()=>[e(A,{src:w_}),e(y,null,{default:i(()=>[a("Learn More")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Icon",description:"A header may contain an icon",code:t.iconCode},{default:i(()=>[e(p,null,{default:i(()=>[e(u,{name:"plug"}),e(y,null,{default:i(()=>[a("Uptime Guarantee")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Subheader",description:"Headers may contain subheaders",code:t.subheaderCode},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" AccountSettings "),e(f,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"A header can show that it is inactive",code:t.disabledCode},{default:i(()=>[e(p,{disabled:""},{default:i(()=>[a("Disabled Header")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:t.dividingCode},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Dividing Header")]),_:1})]),_:1},8,["code"]),e(d,{title:"Block",description:"A header can be formatted to appear inside a content block",code:t.blockCode},{default:i(()=>[e(p,{as:"h3",block:""},{default:i(()=>[a("Block Header")]),_:1})]),_:1},8,["code"]),e(d,{title:"Attached",description:"A header can be attached to other content, like a segment",code:t.attachedCode},{default:i(()=>[C("div",null,[e(p,{as:"h2",attached:"top"},{default:i(()=>[a("Attached Header")]),_:1}),e(v,{attached:""},{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Floating",description:"A header can sit to the left or right of other content",code:t.floatingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(p,{as:"h3",floated:"right"},{default:i(()=>[a("Go Forward")]),_:1}),e(p,{as:"h3",floated:"left"},{default:i(()=>[a("Go Back")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[e(v,null,{default:i(()=>[e(p,{as:"h3",textAlign:"right"},{default:i(()=>[a("Right")]),_:1}),e(p,{as:"h3",textAlign:"left"},{default:i(()=>[a("Left")]),_:1}),e(p,{as:"h3",textAlign:"justified"},{default:i(()=>[a(" This should take up the full width even if only one line ")]),_:1}),e(p,{as:"h3",textAlign:"center"},{default:i(()=>[a("Center")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A header can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(p,{as:"h4",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(p,{as:"h4",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(p,{as:"h4",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(p,{as:"h4",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(p,{as:"h4",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(p,{as:"h4",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(p,{as:"h4",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(p,{as:"h4",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(p,{as:"h4",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(p,{as:"h4",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(p,{as:"h4",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(p,{as:"h4",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(p,{as:"h4",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(p,{as:"h4",color:"grey"},{default:i(()=>[a("Grey")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(p,{as:"h4",color:"red",inverted:""},{default:i(()=>[a("Red")]),_:1}),e(p,{as:"h4",color:"orange",inverted:""},{default:i(()=>[a("Orange")]),_:1}),e(p,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[a("Yellow")]),_:1}),e(p,{as:"h4",color:"olive",inverted:""},{default:i(()=>[a("Olive")]),_:1}),e(p,{as:"h4",color:"green",inverted:""},{default:i(()=>[a("Green")]),_:1}),e(p,{as:"h4",color:"teal",inverted:""},{default:i(()=>[a("Teal")]),_:1}),e(p,{as:"h4",color:"blue",inverted:""},{default:i(()=>[a("Blue")]),_:1}),e(p,{as:"h4",color:"purple",inverted:""},{default:i(()=>[a("Purple")]),_:1}),e(p,{as:"h4",color:"violet",inverted:""},{default:i(()=>[a("Violet")]),_:1}),e(p,{as:"h4",color:"pink",inverted:""},{default:i(()=>[a("Pink")]),_:1}),e(p,{as:"h4",color:"brown",inverted:""},{default:i(()=>[a("Brown")]),_:1}),e(p,{as:"h4",color:"grey",inverted:""},{default:i(()=>[a("Grey")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const T_=fe(A_,[["render",$_]]),x_=B({name:"IconDoc",components:{DocExample:ve},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
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
</sui-icon-group>`}}}),E_={class:"intro"},B_=C("br",null,null,-1),R_=C("br",null,null,-1),P_=C("br",null,null,-1),z_=C("br",null,null,-1),M_=C("br",null,null,-1),N_=C("br",null,null,-1);function D_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-icon-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",E_,[e(p,{as:"h1"},{default:i(()=>[a("Icon "),e(f,null,{default:i(()=>[a(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"An icon can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(u,{name:"users",disabled:""})]),_:1},8,["code"]),e(d,{title:"Loading",description:"An icon can be used as a simple loader",code:t.loadingCode},{default:i(()=>[C("div",null,[e(u,{name:"spinner",loading:""}),e(u,{name:"notched circle",loading:""}),e(u,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:t.fittedCode},{default:i(()=>[C("div",null,[a(" This icon "),e(u,{name:"help",fitted:""}),a(" is fitted. "),B_,a(" This icon "),e(u,{name:"help"}),a(" is not. ")])]),_:1},8,["code"]),e(d,{title:"Size",description:"An icon can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{name:"home",size:"mini"}),e(u,{name:"home",size:"tiny"}),e(u,{name:"home",size:"small"}),R_,e(u,{name:"home"}),P_,e(u,{name:"home",size:"large"}),z_,e(u,{name:"home",size:"big"}),M_,e(u,{name:"home",size:"huge"}),N_,e(u,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(d,{title:"Link",description:"An icon can be formatted as a link",code:t.linkCode},{default:i(()=>[C("div",null,[e(u,{name:"close",link:""}),e(u,{name:"help",link:""})])]),_:1},8,["code"]),e(d,{title:"Flipped",description:"An icon can be flipped",code:t.flippedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",flipped:"horizontally"}),e(u,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(d,{title:"Rotated",description:"An icon can be rotated",code:t.rotatedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",rotated:"clockwise"}),e(u,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(d,{title:"Circular",description:"An icon can be formatted to appear circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(u,{name:"users",circular:""}),e(u,{name:"users",color:"teal",circular:""}),e(u,{name:"users",inverted:"",circular:""}),e(u,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(d,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:t.borderedCode},{default:i(()=>[C("div",null,[e(u,{name:"users",bordered:""}),e(u,{name:"users",bordered:"",color:"teal"}),e(u,{name:"users",inverted:"",bordered:"",color:"black"}),e(u,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(d,{title:"Colored",description:"An icon can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{name:"users",color:"primary"}),e(u,{name:"users",color:"secondary"}),e(u,{name:"users",color:"red"}),e(u,{name:"users",color:"orange"}),e(u,{name:"users",color:"yellow"}),e(u,{name:"users",color:"olive"}),e(u,{name:"users",color:"green"}),e(u,{name:"users",color:"teal"}),e(u,{name:"users",color:"blue"}),e(u,{name:"users",color:"violet"}),e(u,{name:"users",color:"purple"}),e(u,{name:"users",color:"pink"}),e(u,{name:"users",color:"brown"}),e(u,{name:"users",color:"grey"}),e(u,{name:"users",color:"black"})])]),_:1},8,["code"]),e(d,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(u,{name:"users",inverted:""}),e(u,{name:"users",inverted:"",color:"primary"}),e(u,{name:"users",inverted:"",color:"secondary"}),e(u,{name:"users",inverted:"",color:"red"}),e(u,{name:"users",inverted:"",color:"orange"}),e(u,{name:"users",inverted:"",color:"yellow"}),e(u,{name:"users",inverted:"",color:"olive"}),e(u,{name:"users",inverted:"",color:"green"}),e(u,{name:"users",inverted:"",color:"teal"}),e(u,{name:"users",inverted:"",color:"blue"}),e(u,{name:"users",inverted:"",color:"violet"}),e(u,{name:"users",inverted:"",color:"purple"}),e(u,{name:"users",inverted:"",color:"pink"}),e(u,{name:"users",inverted:"",color:"brown"}),e(u,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(d,{title:"Icons",description:"Several icons can be used together as a group",code:t.iconsCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"circle outline",size:"big"}),e(u,{name:"user"})]),_:1})]),_:1},8,["code"]),e(d,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:t.cornerIconCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"puzzle"}),e(u,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const F_=fe(x_,[["render",D_]]),G="/vue-fomantic-ui/images/wireframe/image.png",Ol="/vue-fomantic-ui/images/wireframe/image-text.png",Ki="/vue-fomantic-ui/images/wireframe/white-image.png",dt="/vue-fomantic-ui/images/wireframe/square-image.png",I_=B({name:"ImageDoc",components:{DocExample:ve},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),V_={class:"intro"},L_=C("span",null,"Username",-1),O_=C("span",null,"Top Aligned",-1),H_=C("span",null,"Middle Aligned",-1),j_=C("span",null,"Bottom Aligned",-1),q_=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),J_=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),U_=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),G_=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Y_=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),W_=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function K_(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("doc-example"),A=_("sui-image-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",V_,[e(p,{as:"h1"},{default:i(()=>[a("Image "),e(f,null,{default:i(()=>[a(" An image is a graphic representation of something ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Image",description:"An image",code:t.imageCode},{default:i(()=>[e(d,{src:G,size:"small"})]),_:1},8,["code"]),e(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:t.imageLinkCode},{default:i(()=>[e(d,{as:"a",size:"medium",src:Ol,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Hidden",description:"An image can be hidden",code:t.hiddenCode},{default:i(()=>[e(d,{hidden:"",src:G,size:"small"})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:t.disabledCode},{default:i(()=>[e(d,{disabled:"",src:G,size:"small"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:t.avatarCode},{default:i(()=>[C("div",null,[e(d,{avatar:"",src:G}),L_])]),_:1},8,["code"]),e(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:t.borderedCode},{default:i(()=>[e(d,{bordered:"",size:"medium",src:Ki})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An image can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(d,{fluid:"",src:G})]),_:1},8,["code"]),e(y,{title:"Rounded",description:"An image may appear rounded",code:t.roundedCode},{default:i(()=>[e(d,{rounded:"",size:"medium",src:G})]),_:1},8,["code"]),e(y,{title:"Circular",description:"An image may appear circular",code:t.circularCode},{default:i(()=>[e(d,{circular:"",size:"medium",src:dt})]),_:1},8,["code"]),e(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:t.verticallyAlignedCode},{default:i(()=>[C("div",null,[e(d,{verticalAlign:"top",size:"tiny",src:dt}),O_,e(s),e(d,{verticalAlign:"middle",size:"tiny",src:dt}),H_,e(s),e(d,{verticalAlign:"bottom",size:"tiny",src:dt}),j_])]),_:1},8,["code"]),e(y,{title:"Centered",description:"An image can appear centered in a content block",code:t.centeredCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{centered:"",size:"medium",src:G}),q_,J_,e(d,{centered:"",size:"small",src:Ol}),U_]),_:1})]),_:1},8,["code"]),e(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:t.spacedCode},{default:i(()=>[e(v,null,{default:i(()=>[C("p",null,[a("Te eum doming eirmod, nominati pertinacia "),e(d,{spaced:"",size:"mini",src:G}),a(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),e(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{floated:"left",size:"small",src:Ol}),G_,e(d,{floated:"right",size:"small",src:Ol}),Y_,W_]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"An image may appear at different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini",src:G}),e(s,{hidden:""}),e(d,{size:"tiny",src:G}),e(s,{hidden:""}),e(d,{size:"medium",src:G}),e(s,{hidden:""}),e(d,{size:"large",src:G})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:t.sizeGroupCode},{default:i(()=>[e(A,{size:"tiny"},{default:i(()=>[e(d,{src:G}),e(d,{src:G}),e(d,{src:G}),e(d,{src:G})]),_:1})]),_:1},8,["code"])]),_:1})])}const Q_=fe(I_,[["render",K_]]),X_=B({name:"InputDoc",components:{DocExample:ve},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),Z_={class:"intro"};function eb(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-input"),y=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Z_,[e(p,{as:"h1"},{default:i(()=>[a("Input "),e(f,null,{default:i(()=>[a(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Input",description:"A standard input",code:t.inputCode},{default:i(()=>[e(d,{placeholder:"Search..."})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:t.focusCode},{default:i(()=>[e(d,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:t.loadingCode},{default:i(()=>[C("div",null,[e(d,{loading:"",placeholder:"Search..."}),e(s,{hidden:""}),e(d,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An input field can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(d,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Error",description:"An input field can show the data contains errors",code:t.errorCode},{default:i(()=>[e(d,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Icon",description:"An input can be formatted with an icon",code:t.iconCode},{default:i(()=>[e(d,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"An input can be formatted with a label",code:t.labeledCode},{default:i(()=>[C("div",null,[e(d,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:t.actionCode},{default:i(()=>[e(d,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Transparent",description:"A transparent input has no background",code:t.transparentCode},{default:i(()=>[e(d,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:"",placeholder:"Search..."}),e(s,{inverted:""}),e(d,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(s,{inverted:""}),e(d,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An input can take the size of its container",code:t.fluidCode},{default:i(()=>[e(d,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Size",description:"An input can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini",icon:"search",placeholder:"Search mini"}),e(s,{hidden:""}),e(d,{size:"small",icon:"search",placeholder:"Search small"}),e(s,{hidden:""}),e(d,{size:"large",icon:"search",placeholder:"Search large"}),e(s,{hidden:""}),e(d,{size:"big",icon:"search",placeholder:"Search big"}),e(s,{hidden:""}),e(d,{size:"huge",icon:"search",placeholder:"Search huge"}),e(s,{hidden:""}),e(d,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const tb=fe(X_,[["render",eb]]),wn="/vue-fomantic-ui/images/avatar/small/joe.jpg",Tt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",hl="/vue-fomantic-ui/images/avatar/small/stevie.jpg",ib=B({name:"LabelDoc",components:{DocExample:ve},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),lb={class:"intro"},ab=C("img",{src:wn},null,-1),nb=C("img",{src:Tt},null,-1),sb=C("img",{src:hl},null,-1),ob=C("input",{type:"text",placeholder:"First name"},null,-1),ub=C("input",{type:"text",placeholder:"Last name"},null,-1),rb=C("input",{type:"text",placeholder:"Username"},null,-1),db=C("input",{type:"password",placeholder:"Password"},null,-1),cb=C("span",null,"Account Details",-1),mb=C("span",null,"User Reviews",-1),pb=C("img",{src:hl},null,-1),fb=C("img",{src:Tt},null,-1);function gb(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-label"),y=_("doc-example"),A=_("sui-form-field"),$=_("sui-form"),b=_("sui-image"),w=_("sui-grid-column"),k=_("sui-grid"),T=_("sui-grid-row"),E=_("sui-list-item"),z=_("sui-list"),M=_("sui-label-detail"),P=_("sui-label-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",lb,[e(p,{as:"h1"},{default:i(()=>[a("Label "),e(f,null,{default:i(()=>[a(" A label displays content classification ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Label",description:"A label",code:t.labelCode},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:t.imageCode},{default:i(()=>[C("div",null,[e(d,{as:"a",image:""},{default:i(()=>[ab,a(" Joe ")]),_:1}),e(d,{as:"a",image:""},{default:i(()=>[nb,a(" Elliot ")]),_:1}),e(d,{as:"a",image:""},{default:i(()=>[sb,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Pointing",description:"A label can point to content next to it",code:t.pointingCode},{default:i(()=>[e($,{fluid:""},{default:i(()=>[e(A,null,{default:i(()=>[ob,e(d,{pointing:""},{default:i(()=>[a("Please enter a value")]),_:1})]),_:1}),e(s),e(A,null,{default:i(()=>[e(d,{pointing:"below"},{default:i(()=>[a("Please enter a value")]),_:1}),ub]),_:1}),e(s),e(A,{inline:""},{default:i(()=>[rb,e(d,{pointing:"left"},{default:i(()=>[a("That name is taken!")]),_:1})]),_:1}),e(s),e(A,{inline:""},{default:i(()=>[e(d,{pointing:"right"},{default:i(()=>[a("Your password must be 6 characters or more")]),_:1}),db]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:t.cornerCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(b,{fluid:"",src:G,label:{corner:"left",icon:"heart"}})]),_:1}),e(w,null,{default:i(()=>[e(b,{fluid:"",src:G,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag",description:"A label can appear as a tag",code:t.tagCode},{default:i(()=>[C("div",null,[e(d,{tag:""},{default:i(()=>[a("New")]),_:1}),e(d,{tag:"",color:"red"},{default:i(()=>[a("Upcoming")]),_:1}),e(d,{tag:"",color:"teal"},{default:i(()=>[a("Featured")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:t.ribbonCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(d,{as:"a",ribbon:"",color:"red"},{default:i(()=>[a("Overview")]),_:1}),cb,e(b,{src:ge}),e(d,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[a("Community")]),_:1}),mb,e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(d,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[a("Specs")]),_:1}),e(b,{src:ge}),e(d,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[a("Reviews")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Attached",description:"A label can attach to a content segment",code:t.attachedCode},{default:i(()=>[e(k,{columns:3},{default:i(()=>[e(T,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top"},{default:i(()=>[a("HTML")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom"},{default:i(()=>[a("CSS")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top right"},{default:i(()=>[a("Code")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top left"},{default:i(()=>[a("View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom left"},{default:i(()=>[a("User View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom right"},{default:i(()=>[a("Admin View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:t.horizontalCode},{default:i(()=>[e(z,{divided:"",selection:""},{default:i(()=>[e(E,null,{default:i(()=>[e(d,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Kumquats ")]),_:1}),e(E,null,{default:i(()=>[e(d,{color:"purple",horizontal:""},{default:i(()=>[a("Candy")]),_:1}),a(" Ice Cream ")]),_:1}),e(E,null,{default:i(()=>[e(d,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Orange ")]),_:1}),e(E,null,{default:i(()=>[e(d,{horizontal:""},{default:i(()=>[a("Dog")]),_:1}),a(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Floating",description:"A label can float above or below another element",code:t.floatingCode},{default:i(()=>[e(c,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{name:"mail"}),a(" Messages "),e(d,{floating:"",color:"red"},{default:i(()=>[a("22")]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{name:"users"}),a(" Friends "),e(d,{floating:"",color:"teal"},{default:i(()=>[a("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Detail",description:"A label can contain a detail",code:t.detailCode},{default:i(()=>[e(d,null,{default:i(()=>[a(" Dogs "),e(M,null,{default:i(()=>[a("214")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A label can include an icon",code:t.iconCode},{default:i(()=>[C("div",null,[e(d,{as:"a"},{default:i(()=>[e(u,{name:"mail"}),a(" Mail ")]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Tag "),e(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can include an image",code:t.imageIncludeCode},{default:i(()=>[C("div",null,[e(d,{as:"a"},{default:i(()=>[e(b,{avatar:"",spaced:"right",src:Tt}),a(" Elliot ")]),_:1}),e(d,{as:"a"},{default:i(()=>[pb,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Link",description:"A label can be a link or contain an item that links",code:t.linkCode},{default:i(()=>[e(d,{as:"a",link:""},{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Circular",description:"A label can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(d,{as:"a",circular:"",color:"red"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"orange"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"olive"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"green"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"teal"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"blue"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"violet"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"purple"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"pink"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"brown"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"grey"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"black"},{default:i(()=>[a("2")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A label can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(d,{basic:"",as:"a"},{default:i(()=>[a("Basic")]),_:1}),e(d,{basic:"",as:"a",pointing:""},{default:i(()=>[a("Pointing")]),_:1}),e(d,{basic:"",as:"a",image:""},{default:i(()=>[fb,a(" Elliot ")]),_:1}),e(d,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[a("Red Pointing")]),_:1}),e(d,{basic:"",as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A label can have different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(d,{as:"a",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(d,{as:"a",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(d,{as:"a",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{as:"a",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{as:"a",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{as:"a",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{as:"a",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{as:"a",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{as:"a",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{as:"a",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{as:"a",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{as:"a",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{as:"a",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{as:"a",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic Tag",description:"",code:t.basicTagCode},{default:i(()=>[C("div",null,[e(d,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Size",description:"A label can be small or large",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(d,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(d,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(d,null,{default:i(()=>[a("Medium")]),_:1}),e(d,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(d,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(d,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(d,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Group Size",description:"Labels can share sizes together",code:t.groupSizeCode},{default:i(()=>[e(P,{size:"huge"},{default:i(()=>[e(d,null,{default:i(()=>[a("Fun")]),_:1}),e(d,null,{default:i(()=>[a("Happy")]),_:1}),e(d,null,{default:i(()=>[a("Smart")]),_:1}),e(d,null,{default:i(()=>[a("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored Group",description:"Labels can share colors together",code:t.coloredGroupCode},{default:i(()=>[e(P,{color:"blue"},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Group",description:"Labels can share their style together",code:t.basicGroupCode},{default:i(()=>[e(P,{basic:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag Group",description:"Labels can share tag formatting",code:t.tagGroupCode},{default:i(()=>[e(P,{tag:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("$10.00")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$19.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$24.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$30.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"CircularGroup",description:"Labels can share shapes",code:t.circularGroupCode},{default:i(()=>[e(P,{circular:""},{default:i(()=>[e(d,null,{default:i(()=>[a("11")]),_:1}),e(d,null,{default:i(()=>[a("22")]),_:1}),e(d,null,{default:i(()=>[a("33")]),_:1}),e(d,null,{default:i(()=>[a("44")]),_:1}),e(d,null,{default:i(()=>[a("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const hb=fe(ib,[["render",gb]]),_b="/vue-fomantic-ui/images/avatar/small/rachel.png",bb="/vue-fomantic-ui/images/avatar/small/lindsay.png",vb="/vue-fomantic-ui/images/avatar/small/matthew.png",xa="/vue-fomantic-ui/images/avatar/small/jenny.jpg",yb="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Cb="/vue-fomantic-ui/images/avatar/small/tom.jpg",Hl="/vue-fomantic-ui/images/avatar/small/christian.jpg",Ea="/vue-fomantic-ui/images/avatar/small/matt.jpg",Qi="/vue-fomantic-ui/images/avatar/small/helen.jpg",ii="/vue-fomantic-ui/images/avatar/small/daniel.jpg",wb=B({name:"ListDoc",components:{DocExample:ve},setup(){return{listCode:`<sui-list>
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
    <sui-list-item disabled>© GitHub, Inc.</sui-list-item>
    <sui-list-item as="a">Terms</sui-list-item>
    <sui-list-item as="a">Privacy</sui-list-item>
    <sui-list-item as="a">Contact</sui-list-item>
  </sui-list>
  <sui-list horizontal>
    <sui-list-item as="a">About Us</sui-list-item>
    <sui-list-item as="a">Jobs</sui-list-item>
  </sui-list>
</div>`}}}),Ab={class:"intro"},Sb=C("div",null,"Benefits",-1),kb={class:"list"},$b=C("a",null,"Languages",-1),Tb=C("a",null,[C("b",null,"Arrested Development")],-1),xb=C("a",null,[C("b",null,"Bob's Burgers")],-1),Eb=C("a",null,[C("b",null,"The Godfather Part 2")],-1),Bb=C("a",null,[C("b",null,"Twin Peaks")],-1),Rb=C("a",null,[C("b",null,"Arrested Development")],-1),Pb=C("a",null,[C("b",null,"Bob's Burgers")],-1),zb=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function Mb(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-list-item"),y=_("sui-list"),A=_("doc-example"),$=_("sui-list-list"),b=_("sui-list-header"),w=_("sui-list-description"),k=_("sui-list-content"),T=_("sui-image");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Ab,[e(p,{as:"h1"},{default:i(()=>[a("List "),e(f,null,{default:i(()=>[a(" A list is used to group related content ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"List",description:"A list groups related content",code:t.listCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Apples")]),_:1}),e(d,null,{default:i(()=>[a("Pears")]),_:1}),e(d,null,{default:i(()=>[a("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:t.bulletedCode},{default:i(()=>[e(y,{bulleted:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Gaining Access")]),_:1}),e(d,null,{default:i(()=>[a("Inviting Friends")]),_:1}),e(d,null,{default:i(()=>[Sb,C("div",kb,[e(d,{as:"a"},{default:i(()=>[a("Link to somewhere")]),_:1}),e(d,null,{default:i(()=>[a("Rebates")]),_:1}),e(d,null,{default:i(()=>[a("Discounts")]),_:1})])]),_:1}),e(d,null,{default:i(()=>[a("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Ordered",description:"A list can be ordered numerically",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("Getting Started")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Introduction")]),_:1}),e(d,null,{default:i(()=>[$b,e($,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("HTML")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Javascript")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("CSS")]),_:1})]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Review")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:t.linkCode},{default:i(()=>[e(y,{link:""},{default:i(()=>[e(d,{active:""},{default:i(()=>[a("Home")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("About")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Jobs")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Team")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Item",description:"A list item can contain a set of items",code:t.itemCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("1")]),_:1}),e(d,null,{default:i(()=>[a("2")]),_:1}),e(d,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Icon",description:"A list item can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[e(u,{name:"help"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Floated Icon")]),_:1}),e(w,null,{default:i(()=>[a(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[e(u,{name:"right triangle"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Icon Alignment")]),_:1}),e(w,null,{default:i(()=>[a(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"help"}),a(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Image",description:"A list can contain an image",code:t.imageContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:_b}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Rachel")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Tb,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:bb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Lindsay")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),xb,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:vb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matthew")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Eb,a(" yesterday. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:xa}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Bb,a(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:yb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(w,null,{default:i(()=>[a(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A list can contain links",code:t.linkContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("What is a FAQ?")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Who is our user?")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"header",description:"A list item can contain a header",code:t.headerContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("New York City")]),_:1}),a(" A lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Chicago")]),_:1}),a(" Also quite a lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Los Angeles")]),_:1}),a(" Sometimes can be a lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("San Francisco")]),_:1}),a(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Description",description:"A list item can contain a description",code:t.descriptionContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Krolewskie Jadlo")]),_:1}),e(w,null,{default:i(()=>[a(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Xian Famous Foods")]),_:1}),e(w,null,{default:i(()=>[a(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Sapporo Haru")]),_:1}),e(w,null,{default:i(()=>[a(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Enid's")]),_:1}),e(w,null,{default:i(()=>[a(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:t.horizontalVarCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Cb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Tom")]),_:1}),a(" Top Contributor ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Hl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian Rocha")]),_:1}),a(" Admin ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ea}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matt")]),_:1}),a(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:t.invertedVarCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:t.selectionVarCode},{default:i(()=>[e(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Hl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:t.animatedVarCode},{default:i(()=>[e(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Hl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:t.relaxedVarCode},{default:i(()=>[e(y,{relaxed:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Rb,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:hl}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Pb,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Tt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),zb,a(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Divided",description:"A list can show divisions between content",code:t.dividedVarCode},{default:i(()=>[e(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:hl}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Tt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Celled",description:"A list can divide its items into cells",code:t.celledVarCode},{default:i(()=>[e(y,{celled:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"A list can vary in size",code:t.sizeCode},{default:i(()=>[e(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Hl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content Variations")]),_:1}),e(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:t.verticalAlignedCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:dt}),e(k,{verticalAlign:"top"},{default:i(()=>[a(" Top Aligned ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:dt}),e(k,{verticalAlign:"middle"},{default:i(()=>[a(" Middle ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:dt}),e(k,{verticalAlign:"bottom"},{default:i(()=>[a(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:t.floatedCode},{default:i(()=>[C("div",null,[e(y,{floated:"right",horizontal:""},{default:i(()=>[e(d,{disabled:""},{default:i(()=>[a("© GitHub, Inc.")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Terms")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Privacy")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Contact")]),_:1})]),_:1}),e(y,{horizontal:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("About Us")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Nb=fe(wb,[["render",Mb]]),Db=B({name:"LoaderDoc",components:{DocExample:ve},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),Fb={class:"intro"};function Ib(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-loader"),y=_("sui-dimmer"),A=_("sui-image"),$=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Fb,[e(p,{as:"h1"},{default:i(()=>[a("Loader "),e(f,null,{default:i(()=>[a(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e($,{title:"Loader",description:"A loader",code:t.loaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d)]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Text Loader",description:"A loader can contain text",code:t.textLoaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e($,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:t.indeterminateCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,{indeterminate:""},{default:i(()=>[a("Preparing Files")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Active",description:"A loader can be active or visible",code:t.activeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{active:""}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Diasbled",description:"A loader can be disabled or hidden",code:t.disabledCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{disabled:""}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e($,{title:"Inline",description:"Loaders can appear inline with content",code:t.inlineCode},{default:i(()=>[e(d,{inline:"",active:""})]),_:1},8,["code"]),e($,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:t.inlineCenterCode},{default:i(()=>[e(d,{inline:"centered",active:""})]),_:1},8,["code"]),e($,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:t.speedCode},{default:i(()=>[C("div",null,[e(d,{slow:"",active:"",inline:""}),e(d,{active:"",inline:""}),e(d,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e($,{title:"Colors",description:"Loaders can be different colors",code:t.colorsCode},{default:i(()=>[C("div",null,[e(d,{color:"primary",inline:"",active:""}),e(d,{color:"secondary",inline:"",active:""}),e(d,{color:"red",inline:"",active:""}),e(d,{color:"orange",inline:"",active:""}),e(d,{color:"yellow",inline:"",active:""}),e(d,{color:"olive",inline:"",active:""}),e(d,{color:"green",inline:"",active:""}),e(d,{color:"teal",inline:"",active:""}),e(d,{color:"blue",inline:"",active:""}),e(d,{color:"violet",inline:"",active:""}),e(d,{color:"purple",inline:"",active:""}),e(d,{color:"pink",inline:"",active:""}),e(d,{color:"brown",inline:"",active:""}),e(d,{color:"grey",inline:"",active:""}),e(d,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e($,{title:"Size",description:"Loaders can have different sizes",code:t.sizeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,{size:"mini"},{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Inverted",description:"Loaders can have their colors inverted",code:t.invertedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:"",inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"])]),_:1})])}const Vb=fe(Db,[["render",Ib]]),Lb=B({name:"RailDoc",components:{DocExample:ve},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),Ob={class:"intro"};function Hb(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("sui-rail"),A=_("sui-grid-column"),$=_("sui-grid"),b=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Ob,[e(p,{as:"h1"},{default:i(()=>[a("Rail "),e(f,null,{default:i(()=>[a(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:t.railCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:t.internalCode},{default:i(()=>[e(v,{textAlign:"center"},{default:i(()=>[e(d,{src:Ce}),e(y,{internal:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a("Left Rail Content")]),_:1})]),_:1}),e(y,{internal:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:t.dividingCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{dividing:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{dividing:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:t.attachedCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{attached:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{attached:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:t.closeCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{close:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{close:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Size",description:"A rail can have different sizes",code:t.sizeCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{size:"small",position:"left"},{default:i(()=>[a(" Left Small Rail ")]),_:1}),e(y,{size:"large",position:"right"},{default:i(()=>[a(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const jb=fe(Lb,[["render",Hb]]),qb="/vue-fomantic-ui/images/avatar/large/ade.jpg",wo="/vue-fomantic-ui/images/avatar/large/chris.jpg",An="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Ao="/vue-fomantic-ui/images/avatar/large/nan.jpg",Jb=B({name:"RevealDoc",components:{DocExample:ve},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),Ub={class:"intro"};function Gb(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("sui-reveal-content"),A=_("sui-reveal"),$=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Ub,[e(p,{as:"h1"},{default:i(()=>[a("Reveal "),e(f,null,{default:i(()=>[a(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e($,{title:"Fade",description:"An element can disappear to reveal content below",code:t.fadeCode},{default:i(()=>[e(A,{animated:"fade"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:qb})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Move",description:"An element can move in a direction to reveal content",code:t.moveCode},{default:i(()=>[e(A,{animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:wo})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Rotate",description:"An element can rotate to reveal content below",code:t.rotateCode},{default:i(()=>[e(A,{animated:"rotate"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{circular:"",size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{circular:"",size:"small",src:An})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e($,{title:"Active",description:"An active reveal displays its hidden content",code:t.activeCode},{default:i(()=>[e(A,{active:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:Ao})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:t.disabledCode},{default:i(()=>[e(A,{disabled:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:Ao})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e($,{title:"Instant",description:"An element can show its content without delay",code:t.instantCode},{default:i(()=>[e(A,{instant:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:wo})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Yb=fe(Jb,[["render",Gb]]),Wb=B({name:"SegmentDoc",components:{DocExample:ve},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),Kb={class:"intro"},Qb=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Xb=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Zb=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),ev=C("p",null,"Top",-1),tv=C("p",null,"Middle",-1),iv=C("p",null,"Middle",-1),lv=C("p",null,"Middle",-1),av=C("p",null,"Bottom",-1),nv=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),sv=C("p",null,"This segment is on top",-1),ov=C("p",null,"This segment is attached on both sides",-1),uv=C("p",null,"This segment is on bottom",-1),rv=C("p",null,"Fitted Segment",-1),dv=C("p",null,"Horizontally fitted segment",-1),cv=C("p",null,"Vertically fitted segment",-1),mv=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),pv=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),fv=C("p",null,"If you notice me you must be looking very hard.",-1),gv=C("p",null,"This segment will appear to the right",-1),hv=C("p",null,"This segment will appear to the left",-1),_v=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function bv(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-button"),A=_("sui-segment-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Kb,[e(p,{as:"h1"},{default:i(()=>[a("Segment "),e(f,null,{default:i(()=>[a(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Segment",description:"A segment of content",code:t.segmentCode},{default:i(()=>[e(v,null,{default:i(()=>[a("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),e(d,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:t.placeholderCode},{default:i(()=>[e(v,{placeholder:""},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(u,{name:"file outline"}),a(" No documents are listed for this customer. ")]),_:1}),e(y,{color:"primary"},{default:i(()=>[a("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Raised",description:"A segment may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(v,{raised:""},{default:i(()=>[Qb]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:t.stackedCode},{default:i(()=>[e(v,{stacked:""},{default:i(()=>[Xb]),_:1})]),_:1},8,["code"]),e(d,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:t.piledCode},{default:i(()=>[e(v,{piled:""},{default:i(()=>[Zb]),_:1})]),_:1},8,["code"]),e(d,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:t.verticalCode},{default:i(()=>[C("div",null,[e(v,{vertical:""},{default:i(()=>[a(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(d,{title:"Segments",description:"A group of segments can be formatted to appear together",code:t.segmentsCode},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[ev]),_:1}),e(v,null,{default:i(()=>[tv]),_:1}),e(v,null,{default:i(()=>[iv]),_:1}),e(v,null,{default:i(()=>[lv]),_:1}),e(v,null,{default:i(()=>[av]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:t.nestedCode},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Nested Top")]),_:1}),e(v,null,{default:i(()=>[a("Nested Middle")]),_:1}),e(v,null,{default:i(()=>[a("Nested Bottom")]),_:1})]),_:1}),e(A,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:t.horizontalCode},{default:i(()=>[e(A,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Left")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Right")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Raised Segments",description:"A group of segments can be raised",code:t.raisedSegmentsCode},{default:i(()=>[e(A,{raised:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacked Segments",description:"A group of segments can be stacked",code:t.stackedSegmentsCode},{default:i(()=>[e(A,{stacked:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Piled Segments",description:"A group of segments can be piled",code:t.piledSegmentsCode},{default:i(()=>[e(A,{piled:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"A segment may show its content is disabled",code:t.disabledCode},{default:i(()=>[e(v,{disabled:""},{default:i(()=>[a("Disabled content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Loading",description:"A segment may show its content is being loaded",code:t.loadingCode},{default:i(()=>[e(v,{loading:""},{default:i(()=>[a("Now Loading...")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[nv]),_:1})]),_:1},8,["code"]),e(d,{title:"Attached",description:"A segment can be attached to other content on a page",code:t.attachedCode},{default:i(()=>[C("div",null,[e(v,{attached:"top"},{default:i(()=>[sv]),_:1}),e(v,{attached:""},{default:i(()=>[ov]),_:1}),e(v,{attached:"bottom"},{default:i(()=>[uv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Padded",description:"A segment can increase its padding",code:t.paddedCode},{default:i(()=>[e(v,{padded:""},{default:i(()=>[a("Padded content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[C("div",null,[e(v,{fitted:""},{default:i(()=>[rv]),_:1}),e(v,{fitted:"horizontally"},{default:i(()=>[dv]),_:1}),e(v,{fitted:"vertically"},{default:i(()=>[cv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:t.compactCode},{default:i(()=>[e(v,{compact:""},{default:i(()=>[a("Compact content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A segment can be colored",code:t.coloredCode},{default:i(()=>[C("div",null,[e(v,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(v,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(v,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(v,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(v,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(v,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(v,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(v,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(v,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(v,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(v,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(v,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(v,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:t.emphasisCode},{default:i(()=>[C("div",null,[e(v,null,{default:i(()=>[mv]),_:1}),e(v,{secondary:""},{default:i(()=>[pv]),_:1}),e(v,{tertiary:""},{default:i(()=>[fv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Circular",description:"A segment can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(f,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1}),e(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(f,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Clearing",description:"A segment can clear floated content",code:t.clearingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(y,{floated:"right"},{default:i(()=>[a("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Floated",description:"A segment can appear to the left or right of other content",code:t.floatedCode},{default:i(()=>[C("div",null,[e(v,{floated:"right"},{default:i(()=>[gv]),_:1}),e(v,{floated:"left"},{default:i(()=>[hv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[C("div",null,[e(v,{textAlign:"right"},{default:i(()=>[a(" Right ")]),_:1}),e(v,{textAlign:"left"},{default:i(()=>[a(" Left ")]),_:1}),e(v,{textAlign:"center"},{default:i(()=>[a(" Center ")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Basic",description:"A basic segment has no special formatting",code:t.basicCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[_v]),_:1})]),_:1},8,["code"])]),_:1})])}const vv=fe(Wb,[["render",bv]]),yv=B({name:"StepDoc",components:{DocExample:ve},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),Cv={class:"intro"},wv=C("p",null,"The steps take up the entire column width",-1),Av=C("p",null,"Main content",-1);function Sv(t,l,n,o,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-step"),y=_("sui-step-group"),A=_("doc-example"),$=_("sui-step-title"),b=_("sui-step-description"),w=_("sui-step-content"),k=_("sui-grid-column"),T=_("sui-grid");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Cv,[e(p,{as:"h1"},{default:i(()=>[a("Step "),e(f,null,{default:i(()=>[a(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Step",description:"A single step",code:t.stepCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(A,{title:"Steps",description:"A set of steps",code:t.stepsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:t.verticalCode},{default:i(()=>[e(y,{vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Description",description:"A step can contain a description",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Icon",description:"A step can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A step can link",code:t.linkCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{link:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(A,{title:"Active",description:"A step can be highlighted as active",code:t.activeCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Completed",description:"A step can show that a user has completed it",code:t.completedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:t.disabledCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{disabled:""},{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:t.stackableCode},{default:i(()=>[e(y,{stackable:"tablet"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:t.unstackableCode},{default:i(()=>[e(y,{unstackable:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:t.fluidCode},{default:i(()=>[e(T,{columns:2},{default:i(()=>[e(k,null,{default:i(()=>[e(y,{fluid:"",vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:i(()=>[wv]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Attached",description:"Steps can be attached to other elements",code:t.attachedCode},{default:i(()=>[C("div",null,[e(y,{attached:"top"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[Av]),_:1}),e(y,{attached:"bottom"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:t.evenlyDividedCode},{default:i(()=>[e(y,{widths:2},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"Steps can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"mini"},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"A step's color can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const kv=fe(yv,[["render",Sv]]),$v=B({name:"BreadcrumbDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function Tv(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-breadcrumb-section"),u=_("sui-breadcrumb-divider"),g=_("sui-breadcrumb"),c=_("doc-example"),h=_("sui-segment"),v=_("sui-container");return te(),re("div",null,[e(f,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(v,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:t.breadcrumbCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{link:""},{default:i(()=>[a("Store")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{description:"You can do the same using shorthands",code:t.breadcrumbCode2},{default:i(()=>[e(g,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:t.dividerCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(s,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right arrow"}),e(s,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:t.sectionCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Link",description:"A section may be linkable or contain a link",code:t.linkCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(c,{title:"Active",description:"A section can be active",code:t.activeCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Product")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(s,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(s,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Size",description:"A breadcrumb can vary in size",code:t.sizeCode},{default:i(()=>[e(g,{size:"mini"},{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(s,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(s,null,{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const xv=fe($v,[["render",Tv]]),Ev=B({name:"FormDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function Bv(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-form-field"),u=_("sui-checkbox"),g=_("sui-button"),c=_("sui-form"),h=_("doc-example"),v=_("sui-form-group"),d=_("sui-container");return te(),re("div",null,[e(f,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(d,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Form",description:"A form",code:t.formCode},{default:i(()=>[e(c,null,{default:i(()=>[e(s,{label:"First Name",placeholder:"First Name"}),e(s,{label:"Last Name",placeholder:"Last Name"}),e(s,null,{default:i(()=>[e(u,{label:"I agree to the Terms and Conditions"})]),_:1}),e(g,null,{default:i(()=>[a("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(h,{title:"Field",description:"A field is a form element containing a label and an input",code:t.fieldCode},{default:i(()=>[e(c,null,{default:i(()=>[e(s,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fields",description:"A set of fields can appear grouped together",code:t.fieldsCode},{default:i(()=>[e(c,null,{default:i(()=>[e(v,null,{default:i(()=>[e(s,{label:"First name",placeholder:"First Name"}),e(s,{label:"Middle name",placeholder:"Middle Name"}),e(s,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Rv=fe(Ev,[["render",Bv]]),Et="/vue-fomantic-ui/images/wireframe/media-paragraph.png",So="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",Pv=B({name:"GridDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),zv=C("br",null,null,-1);function Mv(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-image"),u=_("sui-grid-column"),g=_("sui-grid"),c=_("doc-example"),h=_("sui-grid-row"),v=_("sui-segment"),d=_("sui-divider"),y=_("sui-menu-item"),A=_("sui-menu"),$=_("sui-container");return te(),re("div",null,[e(f,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Grid",description:"A basic grid",code:t.gridCode},{default:i(()=>[e(g,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.numbers,b=>(te(),Ue(u,{key:b},{default:i(()=>[e(s,{src:G})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(c,{title:"Divided",description:"A grid can have dividers between its columns",code:t.dividedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:t.verticalDividedCode},{default:i(()=>[e(g,{divided:"vertically"},{default:i(()=>[e(h,{columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Celled",description:"A grid can have rows divided into cells",code:t.celledCode},{default:i(()=>[e(g,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:13},{default:i(()=>[e(s,{src:So})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:10},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:t.internallyCelledCode},{default:i(()=>[e(g,{celled:"internally"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:13},{default:i(()=>[e(s,{src:So})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:10},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:t.rowsCode},{default:i(()=>[e(g,{columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:t.columnsCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:t.floatedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{floated:"left",width:5},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{floated:"right",width:5},{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:t.columnWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:4},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:9},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(s,{src:Et})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:t.columnCountCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1}),e(h,{columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Equal Width",description:"Equal Width",code:t.equalWidthCode},{default:i(()=>[e(g,{columns:"equal"},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,{width:8},{default:i(()=>[e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:t.stretchedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,{stretched:""},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1}),e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:t.paddedCode},{default:i(()=>[C("div",null,[e(d),e(g,{padded:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})])]),_:1},8,["code"]),e(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:t.relaxedCode},{default:i(()=>[e(g,{relaxed:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Colored",description:"A row or column can be colored",code:t.coloredCode},{default:i(()=>[e(g,{padded:"",columns:5},{default:i(()=>[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Centered",description:"A grid can have its columns centered",code:t.centeredCode},{default:i(()=>[e(g,{centered:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(h,{centered:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:t.textAlignCode},{default:i(()=>[e(g,{textAlign:"center",columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Cats")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Dogs")]),_:1}),e(y,null,{default:i(()=>[a("Poodle")]),_:1}),e(y,null,{default:i(()=>[a("Cockerspaniel")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:t.verticalAlignCode},{default:i(()=>[e(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G}),zv,e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Responsive Variations")]),_:1}),e(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:t.doublingCode},{default:i(()=>[e(g,{doubling:"",columns:5},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:t.stackableCode},{default:i(()=>[e(g,{stackable:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:t.reversedCode},{default:i(()=>[e(g,{reversed:"computer vertically"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 3")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 2")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:t.deviceVisibilityCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{only:"large screen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1})]),_:1}),e(h,{only:"widescreen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1})]),_:1}),e(h,{only:"mobile",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,{only:"computer"},{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,{only:"mobile"},{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet and Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1})]),_:1}),e(h,{only:"computer",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1})]),_:1}),e(h,{only:"tablet",columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:t.responsiveWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Nv=fe(Pv,[["render",Mv]]),Dv="/vue-fomantic-ui/images/logo.png",Fv=B({name:"MenuDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),Iv=C("p",null,"Check out our new promotions",-1),Vv=C("p",null,"Check out our collection of coupons",-1),Lv=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),Ov=C("img",{src:Dv},null,-1);function Hv(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-menu-item"),u=_("sui-menu"),g=_("doc-example"),c=_("sui-input"),h=_("sui-menu-menu"),v=_("sui-label"),d=_("sui-button"),y=_("sui-dropdown-item"),A=_("sui-dropdown-menu"),$=_("sui-dropdown"),b=_("sui-icon"),w=_("sui-segment"),k=_("sui-container");return te(),re("div",null,[e(f,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(k,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Menu",description:"A menu",code:t.menuCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Editorials")]),_:1}),e(s,null,{default:i(()=>[a("Reviews")]),_:1}),e(s,null,{default:i(()=>[a("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:t.secondaryMenuCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(s,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(s,null,{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(s,null,{default:i(()=>[a("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(s,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(s,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:t.tabularCode},{default:i(()=>[e(u,{tabular:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Bio")]),_:1}),e(s,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",description:"A menu can be formatted for text content",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(s,{header:""},{default:i(()=>[a("Sort By")]),_:1}),e(s,{active:""},{default:i(()=>[a("Closest")]),_:1}),e(s,null,{default:i(()=>[a("Most Comments")]),_:1}),e(s,null,{default:i(()=>[a("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:t.verticalMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,{active:"",color:"teal"},{default:i(()=>[a(" Inbox "),e(v,{color:"teal",pointing:"left"},{default:i(()=>[a("1")]),_:1})]),_:1}),e(s,null,{default:i(()=>[a(" Spam "),e(v,null,{default:i(()=>[a("51")]),_:1})]),_:1}),e(s,null,{default:i(()=>[a(" Updates "),e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:t.paginationCode},{default:i(()=>[e(u,{pagination:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("1")]),_:1}),e(s,{disabled:""},{default:i(()=>[a("...")]),_:1}),e(s,null,{default:i(()=>[a("10")]),_:1}),e(s,null,{default:i(()=>[a("11")]),_:1}),e(s,null,{default:i(()=>[a("12")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:t.headerCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{header:""},{default:i(()=>[a("Our Company")]),_:1}),e(s,null,{default:i(()=>[a("About us")]),_:1}),e(s,null,{default:i(()=>[a("Jobs")]),_:1}),e(s,null,{default:i(()=>[a("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:t.textContentCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Promotions")]),_:1}),Iv]),_:1}),e(s,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Coupons")]),_:1}),Vv]),_:1}),e(s,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Rebates")]),_:1}),Lv]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Input",description:"A menu item can contain an input inside of it",code:t.inputCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{as:"div"},{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(s,{position:"right",as:"div"},{default:i(()=>[e(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Button",description:"A menu item can contain a button inside of it",code:t.buttonCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{as:"div"},{default:i(()=>[e(d,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1}),e(s,{as:"div"},{default:i(()=>[e(d,null,{default:i(()=>[a("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:t.linkItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,{href:"https://google.com"},{default:i(()=>[a("Visit Google")]),_:1}),e(s,{link:"",as:"div"},{default:i(()=>[a("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:t.dropdownItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e($,{item:"",text:"Categories"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,{text:"Electoronics"}),e(y,{text:"Automotive"}),e(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:t.menuContentCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Browse")]),_:1}),e(s,null,{default:i(()=>[a("Submit")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(s,null,{default:i(()=>[a("Sign up")]),_:1}),e(s,null,{default:i(()=>[a("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:t.subMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,{as:"div"},{default:i(()=>[e(c,{placeholder:"Search..."})]),_:1}),e(s,{as:"div"},{default:i(()=>[a(" Home "),e(h,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Search")]),_:1}),e(s,null,{default:i(()=>[a("Add")]),_:1}),e(s,null,{default:i(()=>[a("Remove")]),_:1})]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"grid layout"}),a(" Browse ")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e($,{item:"",text:"More"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,{icon:"edit",text:"Edit Profile"}),e(y,{icon:"globe",text:"Choose Language"}),e(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hover",description:"A menu item can be hovered",code:t.hoverCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(s,null,{default:i(()=>[a("A link")]),_:1}),e(s,{as:"div",link:""},{default:i(()=>[a("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Active",description:"A menu item can be active",code:t.activeCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:t.stackableCode},{default:i(()=>[e(u,{stackable:""},{default:i(()=>[e(s,{as:"div"},{default:i(()=>[Ov]),_:1}),e(s,null,{default:i(()=>[a("Features")]),_:1}),e(s,null,{default:i(()=>[a("Testimonials")]),_:1}),e(s,null,{default:i(()=>[a("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:t.invertedCode},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(s,null,{default:i(()=>[a("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"Additional colors can be specified",code:t.coloredCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{active:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(s,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(s,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(s,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(s,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(s,{color:"teal"},{default:i(()=>[a("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icons",description:"A menu may have just icons",code:t.iconsCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(s,null,{default:i(()=>[e(b,{name:"gamepad"})]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video camera"})]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:t.labeledIconCode},{default:i(()=>[e(u,{icon:"labeled"},{default:i(()=>[e(s,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",vertical:""},{default:i(()=>[e(s,null,{default:i(()=>[a("Run")]),_:1}),e(s,null,{default:i(()=>[a("Walk")]),_:1}),e(s,null,{default:i(()=>[a("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(s,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:t.evenlyDividedCode},{default:i(()=>[e(u,{fluid:"",widths:3},{default:i(()=>[e(s,null,{default:i(()=>[a("Buy")]),_:1}),e(s,null,{default:i(()=>[a("Sell")]),_:1}),e(s,null,{default:i(()=>[a("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A menu may be attached to other content segments",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"top",tabular:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("tab1")]),_:1}),e(s,null,{default:i(()=>[a("tab2")]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[a(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A menu can vary in size",code:t.sizeCode},{default:i(()=>[e(u,{size:"mini"},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(h,{position:"right"},{default:i(()=>[e($,{item:"",text:"Language"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[a("English")]),_:1}),e(y,null,{default:i(()=>[a("Russian")]),_:1}),e(y,null,{default:i(()=>[a("Spanish")]),_:1})]),_:1})]),_:1}),e(s,{as:"div"},{default:i(()=>[e(d,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{fitted:""},{default:i(()=>[a("No padding whatsoever")]),_:1}),e(s,{fitted:"horizontally"},{default:i(()=>[a("No horizontal padding")]),_:1}),e(s,{fitted:"vertically"},{default:i(()=>[a("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:t.borderlessCode},{default:i(()=>[e(u,{borderless:""},{default:i(()=>[e(s,null,{default:i(()=>[a("1")]),_:1}),e(s,null,{default:i(()=>[a("2")]),_:1}),e(s,null,{default:i(()=>[a("3")]),_:1}),e(s,null,{default:i(()=>[a("4")]),_:1}),e(s,null,{default:i(()=>[a("5")]),_:1}),e(s,null,{default:i(()=>[a("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const jv=fe(Fv,[["render",Hv]]),qv=B({name:"MessageDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),Jv=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),Uv=C("p",null,"Get the best news in your e-mail every day.",-1),Gv=C("p",null,"You can't see me",-1),Yv=C("p",null,"You can always see me",-1),Wv=C("p",null,"Way to go!",-1),Kv=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),Qv=C("a",{href:"#"},"Login here",-1),Xv=C("p",null,[a("Go to your "),C("b",null,"special offers"),a(" page to see now.")],-1),Zv=C("p",null,"That offer has expired",-1);function e1(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-message-header"),u=_("sui-message"),g=_("doc-example"),c=_("sui-message-item"),h=_("sui-message-list"),v=_("sui-icon"),d=_("sui-message-content"),y=_("sui-form-field"),A=_("sui-form-group"),$=_("sui-button"),b=_("sui-form"),w=_("sui-container");return te(),re("div",null,[e(f,{title:"Message",sub:"A message displays information that explains nearby content"}),e(w,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Message",description:"A basic message",code:t.messageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Changes in Service")]),_:1}),Jv]),_:1})]),_:1},8,["code"]),e(g,{title:"List Message",description:"A message with a list",code:t.listMessageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("New Site Features")]),_:1}),e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("You can now have cover images on blog pages")]),_:1}),e(c,null,{default:i(()=>[a("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icon Message",description:"A message can contain an icon",code:t.iconMessageCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(v,{name:"inbox"}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[a(" Have you heard about our mailing list? ")]),_:1}),Uv]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hidden",description:"A message can be hidden",code:t.hiddenCode},{default:i(()=>[e(u,{hidden:""},{default:i(()=>[Gv]),_:1})]),_:1},8,["code"]),e(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:t.visibleCode},{default:i(()=>[e(u,{visible:""},{default:i(()=>[Yv]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Floating",description:"A message can float above content that it is related to",code:t.floatingCode},{default:i(()=>[e(u,{floating:""},{default:i(()=>[Wv]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A message can only take up the width of its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[Kv]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(b,{class:"attached fluid segment"},{default:i(()=>[e(A,{widths:"equal"},{default:i(()=>[e(y,{label:"First Name",placeholder:"First Name"}),e(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(y,{label:"Username",placeholder:"Username"}),e(y,{label:"Password",placeholder:"Password"}),e($,{color:"primary"},{default:i(()=>[a("Submit")]),_:1})]),_:1}),e(u,{attached:"bottom",warning:""},{default:i(()=>[e(v,{name:"help"}),a(" Already signed up? "),Qv,a(" instead. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:t.warningCode},{default:i(()=>[e(u,{warning:""},{default:i(()=>[e(v,{name:"close"}),e(s,null,{default:i(()=>[a(" You must register before you can do that! ")]),_:1}),a(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),e(g,{title:"Info",description:"A message may be formatted to display information",code:t.infoCode},{default:i(()=>[e(u,{info:""},{default:i(()=>[e(s,null,{default:i(()=>[a("Was this what you wanted?")]),_:1}),e(h,null,{default:i(()=>[a("It's good to see you again.")]),_:1}),e(h,null,{default:i(()=>[a("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:t.positiveSuccessCode},{default:i(()=>[e(u,{positive:""},{default:i(()=>[e(s,null,{default:i(()=>[a("You are eligible for a reward")]),_:1}),Xv]),_:1})]),_:1},8,["code"]),e(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:t.negativeErrorCode},{default:i(()=>[e(u,{negative:""},{default:i(()=>[e(v,{name:"close"}),e(s,null,{default:i(()=>[a("We're sorry we can't apply that discount")]),_:1}),Zv]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"A message can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A message can have different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{size:"mini"},{default:i(()=>[a("This is a mini message.")]),_:1}),e(u,{size:"large"},{default:i(()=>[a("This is a large message.")]),_:1}),e(u,{size:"massive"},{default:i(()=>[a("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const t1=fe(qv,[["render",e1]]),i1=B({name:"TableDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),l1=C("a",{href:"#"},"Edit",-1),a1=C("a",{href:"#"},"Edit",-1),n1=C("a",{href:"#"},"Edit",-1),s1=C("br",null,null,-1),o1=C("br",null,null,-1),u1=C("br",null,null,-1),r1=C("br",null,null,-1),d1=C("br",null,null,-1),c1=C("br",null,null,-1),m1=C("br",null,null,-1);function p1(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-table-header-cell"),u=_("sui-table-row"),g=_("sui-table-header"),c=_("sui-table-cell"),h=_("sui-table-body"),v=_("sui-table"),d=_("doc-example"),y=_("sui-icon"),A=_("sui-table-footer"),$=_("sui-container");return te(),re("div",null,[e(f,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Table",description:"A standard table",code:t.tableCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Age")]),_:1}),e(s,null,{default:i(()=>[a("Job")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("James")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("26")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Elyse")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:t.definitionCode},{default:i(()=>[e(v,{definition:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s),e(s,null,{default:i(()=>[a("Arguments")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("reset rating")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1}),e(c,null,{default:i(()=>[a("Resets rating to default value")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("set rating")]),_:1}),e(c,null,{default:i(()=>[a("rating (integer)")]),_:1}),e(c,null,{default:i(()=>[a("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Structured",description:"A table can be formatted to display complex structured data",code:t.structuredCode},{default:i(()=>[e(v,{structured:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{rowspan:"2"},{default:i(()=>[a("Name")]),_:1}),e(s,{rowspan:"2"},{default:i(()=>[a("Type")]),_:1}),e(s,{rowspan:"2"},{default:i(()=>[a("Files")]),_:1}),e(s,{colspan:"3"},{default:i(()=>[a("Languages")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Ruby")]),_:1}),e(s,null,{default:i(()=>[a("Javascript")]),_:1}),e(s,null,{default:i(()=>[a("Python")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Alpha Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("2")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,{rowspan:"3"},{default:i(()=>[a("Beta Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("52")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 2")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("12")]),_:1}),e(c),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 3")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("21")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:t.positiveNegativeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{negative:""},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{positive:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"checkmark"}),a(" Approved ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{positive:""},{default:i(()=>[e(y,{name:"close"}),a(" Requires call ")]),_:1})]),_:1}),e(u,{negative:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:t.errorCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{error:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Cannot pull data")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{error:""},{default:i(()=>[e(y,{name:"attention"}),a(" Requires call ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Warning",description:"A cell or row may warn a user",code:t.warningCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"attention"}),a(" Requires Action ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{warning:""},{default:i(()=>[e(y,{name:"attention"}),a(" Hostile ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Active",description:"A cell or row can be active or selected by a user",code:t.activeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{active:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{active:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Disabled",description:"A cell can be disabled",code:t.disabledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{disabled:""},{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{disabled:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:t.coloredCellsCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{color:"orange"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{color:"blue"},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"pink"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"green"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:t.markedCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{marked:"right",color:"blue"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,{marked:"left",color:"red"},{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{marked:"left",color:"green"},{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"left",color:"orange"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"right",color:"purple"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:t.singleLineCode},{default:i(()=>[e(v,{"single-line":""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Registration Date")]),_:1}),e(s,null,{default:i(()=>[a("E-mail address")]),_:1}),e(s,null,{default:i(()=>[a("Premium Plan")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:t.fixedCode},{default:i(()=>[e(v,{fixed:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:t.stackingCode},{default:i(()=>[e(v,{stackable:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:t.selectableRowCode},{default:i(()=>[e(v,{selectable:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Selectable Cell",description:"A table cell can be selectable",code:t.selectableCellCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[l1]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[a1]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,{selectable:""},{default:i(()=>[n1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:t.verticalAlignmentCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{verticalAlign:"top"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{verticalAlign:"top"},{default:i(()=>[a(" Notes "),s1,a(" 1"),o1,a(" 2"),u1]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{verticalAlign:"bottom"},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a(" Notes "),r1,a(" 1"),d1,a(" 2"),c1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:t.textAlignCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,{textAlign:"right"},{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:t.stripedCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Date Joined")]),_:1}),e(s,null,{default:i(()=>[a("E-mail")]),_:1}),e(s,null,{default:i(()=>[a("Called")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Celled",description:"A table may be divided each row into separate cells",code:t.celledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("3 People")]),_:1}),e(c,null,{default:i(()=>[a("2 Approved")]),_:1}),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:t.basicCode},{default:i(()=>[C("div",null,[e(v,{basic:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1}),m1,e(v,{basic:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:t.collapsingCode},{default:i(()=>[e(v,{collapsing:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Age")]),_:1}),e(s,null,{default:i(()=>[a("Gender")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("3 People")]),_:1}),e(s,null,{default:i(()=>[a("2 Approved")]),_:1}),e(s),e(s),e(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:t.collapsingCellCode},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:t.columnCountCode},{default:i(()=>[e(v,{columns:5},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Age")]),_:1}),e(s,null,{default:i(()=>[a("Gender")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("3 People")]),_:1}),e(s,null,{default:i(()=>[a("2 Approved")]),_:1}),e(s),e(s),e(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Column Width",description:"Column Width",code:t.columnWidthCode},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{width:10},{default:i(()=>[a("Name")]),_:1}),e(s,{width:6},{default:i(()=>[a("Status")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:t.coloredCode},{default:i(()=>[e(v,{color:"red"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Food")]),_:1}),e(s,null,{default:i(()=>[a("Calories")]),_:1}),e(s,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Inverted",description:"A table's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Food")]),_:1}),e(s,null,{default:i(()=>[a("Calories")]),_:1}),e(s,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:t.paddedCode},{default:i(()=>[C("div",null,[e(v,{padded:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{padded:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:t.compactCode},{default:i(()=>[C("div",null,[e(v,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{compact:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Size",description:"A table can also be small or large",code:t.sizeCode},{default:i(()=>[e(v,{size:"small"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const f1=fe(i1,[["render",p1]]),g1=B({name:"AdvertisementDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),h1=C("img",{src:G},null,-1),_1=C("br",null,null,-1);function b1(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-advertisement"),u=_("doc-example"),g=_("sui-container");return te(),re("div",null,[e(f,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Ad",description:"A standard ad",code:t.adCode},{default:i(()=>[e(s,{unit:"medium rectangle"},{default:i(()=>[h1]),_:1})]),_:1},8,["code"]),e(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:t.commonUnitsCode},{default:i(()=>[C("div",null,[e(s,{unit:"medium rectangle",test:"Medium Rectangle"}),e(s,{unit:"banner",test:"Banner"}),e(s,{unit:"leaderboard",test:"Leaderboard"}),e(s,{unit:"large rectangle",test:"Large Rectangle"}),e(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:t.mobileCode},{default:i(()=>[C("div",null,[e(s,{unit:"mobile banner",test:"Mobile Banner"}),e(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:t.rectangleCode},{default:i(()=>[e(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(u,{title:"Button",description:"An ad can use button ad unit size",code:t.buttonCode},{default:i(()=>[C("div",null,[e(s,{unit:"button",test:"Button"}),e(s,{unit:"square button",test:"Square Button"}),e(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:t.skyscraperCode},{default:i(()=>[C("div",null,[e(s,{unit:"skyscraper",test:"Skyscraper"}),_1,e(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(u,{title:"Banner",description:"An ad can use banner ad unit size",code:t.bannerCode},{default:i(()=>[C("div",null,[e(s,{unit:"banner",test:"Banner"}),e(s,{unit:"vertical banner",test:"Vertical Banner"}),e(s,{unit:"top banner",test:"Top Banner"}),e(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:t.leaderboardCode},{default:i(()=>[C("div",null,[e(s,{unit:"leaderboard",test:"Leaderboard"}),e(s,{unit:"large leaderboard",test:"Large Leaderboard"}),e(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:t.panoramaCode},{default:i(()=>[e(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:t.netboardCode},{default:i(()=>[e(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Centered",description:"An advertisement can appear centered",code:t.centeredCode},{default:i(()=>[e(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:t.testCode},{default:i(()=>[e(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const v1=fe(g1,[["render",b1]]),ko="/vue-fomantic-ui/images/avatar/large/kristy.png",y1="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Ja="/vue-fomantic-ui/images/avatar/large/helen.jpg",Ua="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Ga="/vue-fomantic-ui/images/avatar/large/elyse.png",C1="/vue-fomantic-ui/images/avatar/large/matthew.png",w1="/vue-fomantic-ui/images/avatar/large/molly.png",$o="/vue-fomantic-ui/images/avatar/large/jenny.jpg",To="/vue-fomantic-ui/images/avatar/large/veronika.jpg",xo="/vue-fomantic-ui/images/avatar/large/steve.jpg",A1=B({name:"CardDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),S1=C("span",{class:"date"},"Joined in 2013",-1),k1=C("a",null,"Elliot Fu",-1),$1=C("a",null,"Jenny Hess",-1),T1=C("a",null,"Stevie Feliciano",-1),x1=C("a",null,"Administrator",-1),E1=C("a",null,"Helen Troy",-1),B1=C("span",{class:"date"},"Joined in 2013",-1),R1=C("span",null,"2 days ago",-1),P1=C("a",null,"Animals",-1),z1=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),M1=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),N1=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),D1=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),F1=C("span",{class:"category"},"Animals",-1),I1=C("span",{class:"category"},"Animals",-1),V1=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:Ea}),a(" Matt ")],-1),L1=C("span",{class:"category"},"Animals",-1),O1=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:Ea}),a(" Matt ")],-1),H1=C("p",null,"Jenny is a student studying Media Management at the New School",-1),j1=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:xa}),a(" Jenny ")],-1),q1=C("a",null,"Friends",-1),J1=C("span",{class:"right floated"}," Joined in 2013 ",-1),U1=C("a",null,[C("i",{class:"user icon"}),a(" 75 Friends ")],-1),G1=C("a",null,"Coworker",-1),Y1=C("span",{class:"right floated"}," Joined in 2011 ",-1),W1=C("a",null,[C("i",{class:"user icon"}),a(" 35 Friends ")],-1),K1=C("a",null,"Coworker",-1),Q1=C("span",{class:"right floated"}," Joined in 2014 ",-1),X1=C("a",null,[C("i",{class:"user icon"}),a(" 151 Friends ")],-1);function Z1(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-image"),u=_("sui-card-header"),g=_("sui-card-meta"),c=_("sui-card-description"),h=_("sui-card-content"),v=_("sui-icon"),d=_("sui-card"),y=_("doc-example"),A=_("sui-button"),$=_("sui-button-group"),b=_("sui-card-group"),w=_("sui-feed-summary"),k=_("sui-feed-content"),T=_("sui-feed-event"),E=_("sui-feed"),z=_("sui-grid-column"),M=_("sui-grid"),P=_("sui-segment"),F=_("sui-container");return te(),re("div",null,[e(f,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(F,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Card",description:"A single card",code:t.cardCode},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:ko,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[S1]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Cards",description:"A group of cards",code:t.cardsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(s,{src:Tt,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friends of Veronika")]),_:1}),e(c,null,{default:i(()=>[a("Elliot requested permission to view your contact details")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e($,{widths:2},{default:i(()=>[e(A,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(A,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(s,{src:xa,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("New Member")]),_:1}),e(c,null,{default:i(()=>[a("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e($,{widths:2},{default:i(()=>[e(A,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(A,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Content Block",description:"A card can contain blocks of content",code:t.contentBlockCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Project Timeline")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(p,{sub:""},{default:i(()=>[a("Activity")]),_:1}),e(E,{size:"small"},{default:i(()=>[e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[k1,a(" added "),$1,a(" to the project ")]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[T1,a(" was added as an "),x1]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[E1,a(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(A,{as:"button"},{default:i(()=>[a("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A card can contain an image",code:t.imageCode},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:ko,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[B1]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Header",description:"A card can contain a header",code:t.headerCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Metadata",description:"A card can contain content metadata",code:t.metadataCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[R1,P1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Buttons",description:"A card can contain buttons",code:t.buttonsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),e(A,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),e(A,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:t.descriptionCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[z1,M1]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[N1,D1]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(v,{name:"check"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:t.fluidCardCode},{default:i(()=>[e(M,{columns:3},{default:i(()=>[e(z,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(s,{src:y1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(s,{src:Ja}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(s,{src:Ua}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Centered Card",description:"A card can center itself inside its container",code:t.centeredCardCode},{default:i(()=>[e(d,{centered:""},{default:i(()=>[e(s,{src:Ga}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:t.horizontalCardsCode},{default:i(()=>[e(d,{horizontal:""},{default:i(()=>[e(s,{src:Ga}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[F1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(d,{raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[I1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[V1]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:t.linkCardCode},{default:i(()=>[e(d,{href:"#",raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[L1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[O1]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:t.textAlignCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[H1]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[j1]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"Card's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(P,{inverted:""},{default:i(()=>[e(b,{inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:C1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Matt Giampietro")]),_:1}),e(g,null,{default:i(()=>[q1]),_:1}),e(c,null,{default:i(()=>[a(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[J1,U1]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:w1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Molly")]),_:1}),e(g,null,{default:i(()=>[G1]),_:1}),e(c,null,{default:i(()=>[a(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[Y1,W1]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:Ga}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1}),e(g,null,{default:i(()=>[K1]),_:1}),e(c,null,{default:i(()=>[a(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[Q1,X1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored",description:"A card can specify a color",code:t.coloredCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(d,{color:"primary",href:"#"},{default:i(()=>[e(s,{src:Ki})]),_:1}),e(d,{color:"secondary",href:"#"},{default:i(()=>[e(s,{src:Ki})]),_:1}),e(d,{color:"red",href:"#"},{default:i(()=>[e(s,{src:Ki})]),_:1}),e(d,{color:"orange",href:"#"},{default:i(()=>[e(s,{src:Ki})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:t.columnCountCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(b,{itemsPerRow:3,stackable:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:Ua})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:Ja})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:$o})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:To})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:An})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:xo})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:t.doublingCode},{default:i(()=>[e(b,{itemsPerRow:6,doubling:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:Ua})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:Ja})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:$o})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:To})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:An})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:xo})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ey=fe(A1,[["render",Z1]]),ty=B({name:"CommentDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),iy=C("span",null,"Today at 5:42PM",-1),ly=C("a",null,"Reply",-1),ay=C("span",null,"Yesterday at 12:30AM",-1),ny=C("a",null,"Reply",-1),sy={class:"comments"},oy=C("span",null,"Just now",-1),uy=C("a",null,"Reply",-1),ry=C("span",null,"5 days ago",-1),dy=C("a",null,"Reply",-1),cy=C("div",{class:"date"},"2 days ago",-1),my=C("div",{class:"rating"},[C("i",{class:"star icon"}),a(" 5 Faves ")],-1),py=C("a",null,"Reply",-1),fy=C("a",null,"Save",-1),gy=C("a",null,"Hide",-1),hy=C("a",null,[C("i",{class:"expand icon"}),a(" Full-screen ")],-1),_y=C("a",null,"Reply",-1),by=C("a",null,"Reply",-1),vy=C("a",null,"Replay",-1),yy=C("span",null,"Today at 5:42PM",-1),Cy=C("a",{href:"#"},"Replay",-1),wy=C("span",null,"Yesterday at 12:30AM",-1),Ay=C("a",{href:"#"},"Replay",-1),Sy=C("span",null,"Just now",-1),ky=C("a",{href:"#"},"Replay",-1),$y=C("span",null,"5 days ago",-1),Ty=C("a",{href:"#"},"Replay",-1),xy=C("span",null,"Today at 5:42PM",-1),Ey=C("a",{href:"#"},"Replay",-1),By=C("span",null,"Yesterday at 12:30AM",-1),Ry=C("a",{href:"#"},"Replay",-1),Py=C("span",null,"Just now",-1),zy=C("a",{href:"#"},"Replay",-1),My=C("span",null,"5 days ago",-1),Ny=C("a",{href:"#"},"Replay",-1),Dy=C("span",null,"Today at 5:42PM",-1),Fy=C("a",{href:"#"},"Replay",-1),Iy=C("span",null,"Yesterday at 12:30AM",-1),Vy=C("a",{href:"#"},"Replay",-1),Ly=C("span",null,"Just now",-1),Oy=C("a",{href:"#"},"Replay",-1),Hy=C("span",null,"5 days ago",-1),jy=C("a",{href:"#"},"Replay",-1),qy=C("span",null,"Today at 5:42PM",-1),Jy=C("a",{href:"#"},"Replay",-1),Uy=C("span",null,"Yesterday at 12:30AM",-1),Gy=C("a",{href:"#"},"Replay",-1),Yy=C("span",null,"Just now",-1),Wy=C("a",{href:"#"},"Replay",-1),Ky=C("span",null,"5 days ago",-1),Qy=C("a",{href:"#"},"Replay",-1);function Xy(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-comment-avatar"),u=_("sui-comment-author"),g=_("sui-comment-metadata"),c=_("sui-comment-text"),h=_("sui-comment-actions"),v=_("sui-comment-content"),d=_("sui-comment"),y=_("sui-comment-group"),A=_("doc-example"),$=_("sui-form-textarea"),b=_("sui-icon"),w=_("sui-button"),k=_("sui-form"),T=_("sui-segment"),E=_("sui-container");return te(),re("div",null,[e(f,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(E,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Comments",description:"A basic list of comments",code:t.commentsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[iy]),_:1}),e(c,null,{default:i(()=>[a("How artistic!")]),_:1}),e(h,null,{default:i(()=>[ly]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[ay]),_:1}),e(c,null,{default:i(()=>[a("This has been very useful for my research. Thanks as well!")]),_:1}),e(h,null,{default:i(()=>[ny]),_:1})]),_:1}),C("div",sy,[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[oy]),_:1}),e(c,null,{default:i(()=>[a("Elliot you are always so right :)")]),_:1}),e(h,null,{default:i(()=>[uy]),_:1})]),_:1})]),_:1})])]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[ry]),_:1}),e(c,null,{default:i(()=>[a("Dude, this is awesome. Thanks so much")]),_:1}),e(h,null,{default:i(()=>[dy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"avatar",description:"A comment can contain an image or avatar",code:t.avatarCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/stevie.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(g,null,{default:i(()=>[cy,my]),_:1}),e(c,null,{default:i(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:t.actionsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Tom Lukic")]),_:1}),e(c,null,{default:i(()=>[a(" This will be great for business reports. I will definitely download this. ")]),_:1}),e(h,null,{default:i(()=>[py,fy,gy,hy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:t.replyFormCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/steve.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Steve Jobs")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a("Revolutionary!")]),_:1}),e(h,null,{default:i(()=>[_y]),_:1}),e(k,{reply:""},{default:i(()=>[e($),e(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[e(b,{name:"edit"}),a(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:t.collapsedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/christian.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Christian Rocha")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),e(h,null,{default:i(()=>[by]),_:1})]),_:1}),e(y,{collapsed:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("1 days ago")]),_:1}),e(c,null,{default:i(()=>[a("No, it wont")]),_:1}),e(h,null,{default:i(()=>[vy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:t.threadedCode},{default:i(()=>[e(y,{threaded:""},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[yy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Cy]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[wy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Ay]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Sy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[ky]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[$y]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[Ty]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:t.minimalCode},{default:i(()=>[e(y,{minimal:""},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[xy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Ey]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[By]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Ry]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Py]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[zy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[My]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[Ny]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"Comments can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"small"},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Dy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Fy]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Iy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Vy]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Ly]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Oy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Hy]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[jy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"Comments's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[qy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Jy]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Uy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Gy]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Yy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Wy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Ky]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[Qy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Zy=fe(ty,[["render",Xy]]),eC=B({name:"FeedDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),tC=C("img",{src:Tt},null,-1),iC=C("img",{src:Tt},null,-1),lC=C("a",null,"Coworkers",-1),aC=C("img",{src:xa},null,-1),nC=C("a",null,"Jenny Hess",-1),sC=C("a",null,"coworker",-1),oC=C("img",{src:Qi},null,-1),uC=C("a",null,"Helen Troy",-1),rC=C("a",null,[C("img",{src:G})],-1),dC=C("a",null,[C("img",{src:G})],-1),cC=C("a",null,"Elliot Fu",-1),mC=C("a",null,"Jenny Hess",-1),pC=C("a",null,"Stevie Feliciano",-1),fC=C("a",null,"Elliot Fu",-1),gC=C("a",null,"Helen Troy",-1),hC=C("a",null,"Christian Rocha",-1),_C=C("img",{src:Tt},null,-1),bC=C("div",{class:"date"},"Just now",-1),vC=C("a",{class:"user"},"Elliot Fu",-1);function yC(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-feed-label"),u=_("sui-feed-user"),g=_("sui-feed-date"),c=_("sui-feed-summary"),h=_("sui-icon"),v=_("sui-feed-like"),d=_("sui-feed-meta"),y=_("sui-feed-content"),A=_("sui-feed-event"),$=_("sui-feed"),b=_("doc-example"),w=_("sui-feed-extra"),k=_("sui-segment"),T=_("sui-container");return te(),re("div",null,[e(f,{title:"Feed",sub:"A feed presents user activity chronologically"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Feed",description:"A feed",code:t.feedCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[tC]),_:1}),e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),a(" added you as a friend "),e(g,null,{default:i(()=>[a("1 Hour Ago")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,{name:"like"}),a(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(b,{title:"Label",description:"An event can contain an image or icon label",code:t.labelCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[iC]),_:1}),e(y,null,{default:i(()=>[a(" You added Elliot Fu to the group "),lC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Date",description:"An event or an event summary can contain a date",code:t.dateCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[aC]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[a(" You added "),nC,a(" to your "),sC,a(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:t.additionalInfoCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[oC]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[uC,a(" added 2 photos ")]),_:1}),e(w,{images:""},{default:i(()=>[rC,dC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Size",description:"A feed can have different sizes",code:t.sizeCode},{default:i(()=>[e($,{size:"small"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Followers Activity")]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[cC,a(" added "),mC,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[pC,a(" added "),fC,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[gC,a(" added "),hC,a(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Inverted",description:"A feed's color can be inverted",code:t.invertedCode},{default:i(()=>[e(k,{inverted:""},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[_C]),_:1}),e(y,null,{default:i(()=>[bC,e(c,null,{default:i(()=>[vC,a(" posted on his page ")]),_:1}),e(w,{text:""},{default:i(()=>[a(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const CC=fe(eC,[["render",yC]]),wC=B({name:"ItemDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),AC=C("img",{src:G},null,-1),SC=C("span",null,"Description",-1),kC=C("img",{src:Ce},null,-1),$C=C("img",{src:G},null,-1),TC=C("span",null,"Description",-1),xC=C("img",{src:Ce},null,-1),EC=C("img",{src:G},null,-1),BC=C("img",{src:G},null,-1),RC=C("img",{src:G},null,-1),PC=C("img",{src:G},null,-1),zC=C("img",{src:G},null,-1),MC=C("img",{src:G},null,-1),NC=C("img",{src:G},null,-1),DC=C("span",{class:"price"},"$1200",-1),FC=C("span",{class:"stay"},"1 Month",-1),IC=C("img",{src:Ce},null,-1),VC=C("span",{class:"price"},"$1000",-1),LC=C("span",{class:"stay"},"2 Weeks",-1),OC=C("img",{src:Ce},null,-1),HC=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),jC=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),qC=C("img",{src:Ce},null,-1),JC=C("img",{src:G},null,-1),UC=C("span",{class:"cinema"},"Union Square 14",-1),GC=C("img",{src:Ce},null,-1),YC=C("img",{src:G},null,-1),WC=C("span",{class:"cinema"},"IFC Cinema",-1),KC=C("img",{src:Ce},null,-1),QC=C("img",{src:G},null,-1),XC=C("span",{class:"cinema"},"IFC",-1),ZC=C("img",{src:Ce},null,-1),ew=C("img",{src:Ce},null,-1),tw=C("img",{src:Ce},null,-1),iw=C("img",{src:Ce},null,-1),lw=C("span",{class:"price"},"$1200",-1),aw=C("span",{class:"stay"},"1 Month",-1),nw=C("img",{src:Ce},null,-1),sw=C("span",{class:"price"},"$1000",-1),ow=C("span",{class:"stay"},"2 Weeks",-1),uw=C("img",{src:Ce},null,-1);function rw(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-item-image"),u=_("sui-item-header"),g=_("sui-item-meta"),c=_("sui-item-description"),h=_("sui-item-extra"),v=_("sui-item-content"),d=_("sui-item"),y=_("sui-item-group"),A=_("doc-example"),$=_("sui-image"),b=_("sui-icon"),w=_("sui-label"),k=_("sui-button"),T=_("sui-segment"),E=_("sui-container");return te(),re("div",null,[e(f,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(E,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Items",description:"A group of items",code:t.itemsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[AC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[SC]),_:1}),e(c,null,{default:i(()=>[kC]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[$C]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[TC]),_:1}),e(c,null,{default:i(()=>[xC]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Image",description:"An item can contain an image",code:t.imageCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[EC]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[BC]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[RC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Content",description:"An item can contain content",code:t.contentCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[PC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content A ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[zC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content B ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[MC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Header",description:"An item can contain a header",code:t.headerCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[NC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Metadata",description:"An item can contain content metadata",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[DC,FC]),_:1}),e(c,null,{default:i(()=>[IC]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[VC,LC]),_:1}),e(c,null,{default:i(()=>[OC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[HC,jC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[qC]),_:1}),e(h,null,{default:i(()=>[e(b,{name:"check",color:"green"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:t.dividedCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[JC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1}),e(g,null,{default:i(()=>[UC]),_:1}),e(c,null,{default:i(()=>[GC]),_:1}),e(h,null,{default:i(()=>[e(w,null,{default:i(()=>[a("IMAX")]),_:1}),e(w,null,{default:i(()=>[e(b,{name:"globe"}),a(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[YC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(g,null,{default:i(()=>[WC]),_:1}),e(c,null,{default:i(()=>[KC]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1}),e(w,null,{default:i(()=>[a("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(s,null,{default:i(()=>[QC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Watchmen")]),_:1}),e(g,null,{default:i(()=>[XC]),_:1}),e(c,null,{default:i(()=>[ZC]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:t.relaxedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:t.verticalAlignCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Top Aligned")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Middle Aligned")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"bottom"},{default:i(()=>[e(u,null,{default:i(()=>[a("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:t.floatedContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content A")]),_:1}),e(c,null,{default:i(()=>[ew]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content B")]),_:1}),e(c,null,{default:i(()=>[tw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content C")]),_:1}),e(c,null,{default:i(()=>[iw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:t.invertedCode},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[lw,aw]),_:1}),e(c,null,{default:i(()=>[nw]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[sw,ow]),_:1}),e(c,null,{default:i(()=>[uw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dw=fe(wC,[["render",rw]]),cw=B({name:"StatisticDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),mw=C("br",null,null,-1),pw=C("br",null,null,-1),fw=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),gw=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),hw=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),_w=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function bw(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-statistic"),u=_("doc-example"),g=_("sui-statistic-group"),c=_("sui-statistic-value"),h=_("sui-statistic-label"),v=_("sui-icon"),d=_("sui-image"),y=_("sui-segment"),A=_("sui-container");return te(),re("div",null,[e(f,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(A,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:t.statisticCode},{default:i(()=>[e(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(u,{title:"Statistic Group",description:"A group of statistics",code:t.groupCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{value:"22",label:"Faves"}),e(s,{value:"31,200",label:"Views"}),e(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:t.valueCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{value:"22",label:"Faves"}),e(s,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),mw,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(d,{circular:"",inline:"",src:wn}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:t.labelCode},{default:i(()=>[e(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:t.horizontalCode},{default:i(()=>[e(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{color:"red",value:"27",label:"Red"}),e(s,{color:"orange",value:"8",label:"Orange"}),e(s,{color:"yellow",value:"28",label:"Yellow"}),e(s,{color:"olive",value:"7",label:"Olive"}),e(s,{color:"green",value:"14",label:"Green"}),e(s,{color:"teal",value:"82",label:"Teal"}),e(s,{color:"blue",value:"1",label:"Blue"}),e(s,{color:"violet",value:"22",label:"Violet"}),e(s,{color:"purple",value:"23",label:"Purple"}),e(s,{color:"pink",value:"15",label:"Pink"}),e(s,{color:"brown",value:"36",label:"Brown"}),e(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:t.invertedCode},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{color:"red",value:"27",label:"Red"}),e(s,{color:"orange",value:"8",label:"Orange"}),e(s,{color:"yellow",value:"28",label:"Yellow"}),e(s,{color:"olive",value:"7",label:"Olive"}),e(s,{color:"green",value:"14",label:"Green"}),e(s,{color:"teal",value:"82",label:"Teal"}),e(s,{color:"blue",value:"1",label:"Blue"}),e(s,{color:"violet",value:"22",label:"Violet"}),e(s,{color:"purple",value:"23",label:"Purple"}),e(s,{color:"pink",value:"15",label:"Pink"}),e(s,{color:"brown",value:"36",label:"Brown"}),e(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(g,{stackable:""},{default:i(()=>[e(s,{color:"red",value:"27",label:"Red"}),e(s,{color:"orange",value:"8",label:"Orange"}),e(s,{color:"yellow",value:"28",label:"Yellow"}),e(s,{color:"olive",value:"7",label:"Olive"}),e(s,{color:"green",value:"14",label:"Green"}),e(s,{color:"teal",value:"82",label:"Teal"}),e(s,{color:"blue",value:"1",label:"Blue"}),e(s,{color:"violet",value:"22",label:"Violet"}),e(s,{color:"purple",value:"23",label:"Purple"}),e(s,{color:"pink",value:"15",label:"Pink"}),e(s,{color:"brown",value:"36",label:"Brown"}),e(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:t.evenlyDividedCode},{default:i(()=>[e(g,{widths:4},{default:i(()=>[e(s,{value:"22",label:"Faves"}),e(s,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),pw,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(d,{circular:"",inline:"",src:wn}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(s,{floated:"right",value:"2,204",label:"Views"}),fw,gw,e(s,{floated:"left",value:"2,204",label:"Views"}),hw,_w]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A statistic can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{size:"mini",value:"2,204",label:"Views"}),e(s,{size:"tiny",value:"2,204",label:"Views"}),e(s,{size:"small",value:"2,204",label:"Views"}),e(s,{value:"2,204",label:"Views"}),e(s,{size:"large",value:"2,204",label:"Views"}),e(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const vw=fe(cw,[["render",bw]]),yw=B({name:"AccordionDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),Cw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),ww=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Aw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Sw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),kw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),$w=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Tw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),xw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Ew=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Bw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Rw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Pw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),zw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Mw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Nw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Dw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Fw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Iw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Vw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Lw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function Ow(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-accordion-tab"),u=_("sui-accordion"),g=_("doc-example"),c=_("sui-segment"),h=_("sui-container");return te(),re("div",null,[e(f,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Accordion",description:"A standard accordion",code:t.accordionCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Cw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[ww]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Aw,Sw]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:t.styledCode},{default:i(()=>[e(u,{styled:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[kw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[$w]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Tw,xw]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",styled:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Ew]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Bw]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Rw,Pw]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(c,{inverted:""},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[zw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Mw]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Nw,Dw]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Usage")]),_:1}),e(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:t.multipleCode},{default:i(()=>[e(u,{multiple:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Fw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Iw]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Vw,Lw]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Hw=fe(yw,[["render",Ow]]),jw=B({name:"CalendarDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{calendar1:L(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function qw(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-calendar"),u=_("doc-example"),g=_("sui-container");return te(),re("div",null,[e(f,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Calendar",description:"A standard calendar",code:t.calendarCode},{default:i(()=>[e(s,{modelValue:t.calendar1,"onUpdate:modelValue":l[0]||(l[0]=c=>t.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const Jw=fe(jw,[["render",qw]]),Uw=B({name:"PropertyListTable",props:{properties:Array}});function Gw(t,l,n,o,r,m){const f=_("sui-table-header-cell"),p=_("sui-table-row"),s=_("sui-table-header"),u=_("sui-table-cell"),g=_("sui-table-body"),c=_("sui-table");return te(),Ue(c,{celled:""},{default:i(()=>[e(s,null,{default:i(()=>[e(p,null,{default:i(()=>[e(f,null,{default:i(()=>[a("Name")]),_:1}),e(f,null,{default:i(()=>[a("Type")]),_:1}),e(f,null,{default:i(()=>[a("Default")]),_:1}),e(f,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.properties,h=>(te(),Ue(p,{key:h.name},{default:i(()=>[e(u,null,{default:i(()=>[a(Ee(h.name),1)]),_:2},1024),e(u,null,{default:i(()=>[a(Ee(h.type),1)]),_:2},1024),e(u,null,{default:i(()=>[a(Ee(h.default),1)]),_:2},1024),e(u,null,{default:i(()=>[a(Ee(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Ba=fe(Uw,[["render",Gw]]),Yw=B({name:"CheckboxDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Ba},setup(){const t=L(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=L([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=L(!1),m='<sui-checkbox toggle v-model="toggle" />',f=L(!1);return{checked:t,checkboxCode:l,selected:n,multipleCode:o,toggle:r,toggleCode:m,slider:f,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),Ww={class:"ui form"},Kw={class:"grouped fields"},Qw={class:"field"},Xw={class:"field"},Zw={class:"field"};function eA(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-checkbox"),u=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return te(),re("div",null,[e(f,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Checkbox",description:"A standard checkbox",code:t.checkboxCode},{default:i(()=>[e(s,{label:"Make my profile visible",modelValue:t.checked,"onUpdate:modelValue":l[0]||(l[0]=b=>t.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:t.multipleCode},{default:i(()=>[C("div",Ww,[C("div",Kw,[C("div",Qw,[e(s,{label:"Apple",value:"Apple",modelValue:t.selected,"onUpdate:modelValue":l[1]||(l[1]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",Xw,[e(s,{label:"Banana",value:"Banana",modelValue:t.selected,"onUpdate:modelValue":l[2]||(l[2]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",Zw,[e(s,{label:"Chocolate",value:"Chocolate",modelValue:t.selected,"onUpdate:modelValue":l[3]||(l[3]=b=>t.selected=b)},null,8,["modelValue"])])])]),a(" selected : "+Ee(t.selected),1)]),_:1},8,["code"]),e(u,{title:"Toggle",description:"A checkbox can toggle",code:t.toggleCode},{default:i(()=>[e(s,{toggle:"",modelValue:t.toggle,"onUpdate:modelValue":l[4]||(l[4]=b=>t.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Slider",description:"A checkbox can look like a slider",code:t.sliderCode},{default:i(()=>[e(s,{slider:"",modelValue:t.slider,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,b=>(te(),Ue(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const tA=fe(Yw,[["render",eA]]),iA=B({name:"DimmerDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,l=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=L(!1);return{dimmerCode:t,contentDimmerCode:l,active:n,pageDimmerCode:`<div>
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
</div>`}}});function lA(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-image"),u=_("sui-image-group"),g=_("sui-dimmer"),c=_("sui-dimmer-dimmable"),h=_("doc-example"),v=_("sui-icon"),d=_("sui-button"),y=_("sui-header-subheader"),A=_("sui-container");return te(),re("div",null,[e(f,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(A,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:t.dimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(s,{src:G}),e(s,{src:G}),e(s,{src:G})]),_:1}),e(s,{size:"medium",src:Et}),e(g,{active:""})]),_:1})]),_:1},8,["code"]),e(h,{title:"Content Dimmer",description:"A dimmer can display content",code:t.contentDimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(s,{src:G}),e(s,{src:G}),e(s,{src:G})]),_:1}),e(s,{size:"medium",src:Et}),e(g,{active:""},{default:i(()=>[e(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:t.pageDimmerCode},{default:i(()=>[C("div",null,[e(d,{labeled:"",icon:"",onClick:l[0]||(l[0]=$=>t.active=!0)},{default:i(()=>[e(v,{name:"plus"}),a(" Show ")]),_:1}),e(g,{active:t.active,page:"",onClick:l[1]||(l[1]=$=>t.active=!1)},{default:i(()=>[e(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! "),e(y,null,{default:i(()=>[a("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const aA=fe(iA,[["render",lA]]),nA=B({name:"DropdownDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=L(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=L(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],m=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,f=L(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],s=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,u=L(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,c=L(null),h=`<sui-dropdown
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
/>`,v=L(null),d=`<sui-dropdown
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
/>`,y=L(null),A=`<sui-dropdown
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
/>`,$=L({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:t,selected1:l,selectionCode:n,selected2:o,searchSelectionOptions:r,searchSelectionCode:m,selected3:f,clearableSelectionOptions:p,clearableSelectionCode:s,selected4:u,multipleCode:g,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:d,selected7:y,searchInMenuCode:A,selected8:$,inlineCode:`<span>
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
</sui-button-group>`}}});function sA(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-dropdown-item"),u=_("sui-divider"),g=_("sui-dropdown-menu"),c=_("sui-dropdown"),h=_("doc-example"),v=_("sui-button"),d=_("sui-button-group"),y=_("sui-container");return te(),re("div",null,[e(f,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(y,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dropdown",description:"A dropdown",code:t.dropdownCode},{default:i(()=>[e(c,{text:"File"},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{text:"New"}),e(s,{text:"Open...",description:"ctrl + o"}),e(s,{text:"Save as...",description:"ctrl + s"}),e(s,{text:"Rename",description:"ctrl + r"}),e(s,{text:"Make a copy"}),e(s,{icon:"folder",text:"Move to folder"}),e(s,{icon:"trash",text:"Move to trash"}),e(u),e(s,{text:"Download As..."}),e(s,{text:"Publish To Web"}),e(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:t.selectionCode},{default:i(()=>[e(c,{selection:"",placeholder:"Pet",modelValue:t.selected1,"onUpdate:modelValue":l[0]||(l[0]=A=>t.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:t.searchSelectionCode},{default:i(()=>[e(c,{search:"",selection:"",fluid:"",modelValue:t.selected2,"onUpdate:modelValue":l[1]||(l[1]=A=>t.selected2=A),options:t.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:t.clearableSelectionCode},{default:i(()=>[e(c,{clearable:"",selection:"",modelValue:t.selected3,"onUpdate:modelValue":l[2]||(l[2]=A=>t.selected3=A),options:t.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:t.multipleCode},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",modelValue:t.selected4,"onUpdate:modelValue":l[3]||(l[3]=A=>t.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{code:t.multipleCode2},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:t.selected5,"onUpdate:modelValue":l[4]||(l[4]=A=>t.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:t.searchDropdownCode},{default:i(()=>[e(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:t.selected6,"onUpdate:modelValue":l[5]||(l[5]=A=>t.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:t.searchInMenuCode},{default:i(()=>[e(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:t.selected7,"onUpdate:modelValue":l[6]||(l[6]=A=>t.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:t.inlineCode},{default:i(()=>[C("span",null,[a(" Show me posts by "),e(c,{inline:"",modelValue:t.selected8,"onUpdate:modelValue":l[7]||(l[7]=A=>t.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:t.pointingCode},{default:i(()=>[e(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{text:"New"}),e(s,{text:"Save As"}),e(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:t.floatingCode},{default:i(()=>[e(d,{color:"teal"},{default:i(()=>[e(v,null,{default:i(()=>[a("Save")]),_:1}),e(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{text:"Edit Post",icon:"edit"}),e(s,{text:"Remove Post",icon:"delete"}),e(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const oA=fe(nA,[["render",sA]]),uA=B({name:"EmbedDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function rA(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-embed"),u=_("doc-example"),g=_("sui-container");return te(),re("div",null,[e(f,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:t.youtubeCode},{default:i(()=>[e(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:t.aspectRatioCode},{default:i(()=>[e(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const dA=fe(uA,[["render",rA]]),cA="/vue-fomantic-ui/images/avatar/large/rachel.png",mA=B({name:"ModalDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=`<div>
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
</div>`,l=L(!1),n=L(!1);return{modalCode:t,modal1:l,basicModal:n,basicCode:`<div>
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
</div>`}}}),pA=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),fA=C("p",null,"Is it okay to use this photo?",-1),gA=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function hA(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-button"),u=_("sui-modal-header"),g=_("sui-image"),c=_("sui-modal-description"),h=_("sui-modal-content"),v=_("sui-modal-actions"),d=_("sui-modal"),y=_("doc-example"),A=_("sui-icon"),$=_("sui-container");return te(),re("div",null,[e(f,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Modal",description:"A standard modal",code:t.modalCode},{default:i(()=>[C("div",null,[e(s,{onClick:l[0]||(l[0]=b=>t.modal1=!0)},{default:i(()=>[a("Show Modal")]),_:1}),e(d,{modelValue:t.modal1,"onUpdate:modelValue":l[2]||(l[2]=b=>t.modal1=b)},{default:i(()=>[e(u,null,{default:i(()=>[a("Select a Photo")]),_:1}),e(h,{image:""},{default:i(()=>[e(g,{wrapped:"",size:"medium",src:cA}),e(c,null,{default:i(()=>[e(p,null,{default:i(()=>[a("Default Profile Image")]),_:1}),pA,fA]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(s,{positive:"",onClick:l[1]||(l[1]=b=>t.modal1=!1)},{default:i(()=>[a("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A modal can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(s,{onClick:l[3]||(l[3]=b=>t.basicModal=!0)},{default:i(()=>[a("Basic Modal")]),_:1}),e(d,{basic:"",modelValue:t.basicModal,"onUpdate:modelValue":l[5]||(l[5]=b=>t.basicModal=b)},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(A,{name:"archive"}),a(" Archive Old Messages ")]),_:1}),e(h,null,{default:i(()=>[gA]),_:1}),e(v,null,{default:i(()=>[e(s,{basic:"",color:"red",inverted:"",onClick:l[4]||(l[4]=b=>t.basicModal=!1)},{default:i(()=>[e(A,{name:"remove"}),a(" No ")]),_:1}),e(s,{basic:"",color:"green"},{default:i(()=>[e(A,{name:"checkmark"}),a(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const _A=fe(mA,[["render",hA]]),bA="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",vA=B({name:"PopupDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=L(null),l=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=L(null),o=L(null),r=L(null),m=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,f=L(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,s=L(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=L(null),c=L(null),h=L(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,d=L(null),y=L(null),A=L(null),$=L(null),b=L(null),w=L(null),k=L(null),T=L(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,z=L(null),M=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=L(null),F=L(null),X=L(null),H=L(null),ue=L(null),ye=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,I=L(null),O=L(null);return{popupTrigger:t,popupCode:l,titledTrigger1:n,titledTrigger2:o,titledTrigger3:r,titledCode:m,triggerTriger:f,triggerCode:p,basicTrigger:s,basicCode:u,wideTrigger1:g,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:d,positionTrigger2:y,positionTrigger3:A,positionTrigger4:$,positionTrigger5:b,positionTrigger6:w,positionTrigger7:k,positionTrigger8:T,positionCode:E,flowingTrigger:z,flowingCode:M,sizeTrigger1:P,sizeTrigger2:F,sizeTrigger3:X,sizeTrigger4:H,sizeTrigger5:ue,sizeCode:ye,invertedTrigger1:I,invertedTrigger2:O,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),yA=C("p",null,[C("b",null,"2"),a(" projects, $10 a month ")],-1),CA=C("p",null,[C("b",null,"5"),a(" projects, $20 a month ")],-1),wA=C("p",null,[C("b",null,"8"),a(" projects, $25 a month ")],-1);function AA(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-icon"),u=_("sui-button"),g=_("sui-popup"),c=_("doc-example"),h=_("sui-image"),v=_("sui-card-header"),d=_("sui-card-description"),y=_("sui-card-content"),A=_("sui-card"),$=_("sui-rating"),b=_("sui-divider"),w=_("sui-grid-column"),k=_("sui-grid"),T=_("sui-container");return te(),re("div",null,[e(f,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Popup",description:"An element can specify popup content to appear",code:t.popupCode},{default:i(()=>[e(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[e(s,{name:"add"})]),_:1},512),e(g,{trigger:t.popupTrigger},{default:i(()=>[a(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Titled",description:"An element can specify popup content with a title",code:t.titledCode},{default:i(()=>[e(h,{avatar:"",src:Tt,ref:"titledTrigger1"},null,512),e(h,{avatar:"",src:hl,ref:"titledTrigger2"},null,512),e(h,{avatar:"",src:Ea,ref:"titledTrigger3"},null,512),e(g,{trigger:t.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Trigger",description:"A trigger can be complex element",code:t.triggerCode},{default:i(()=>[e(A,{ref:"triggerTriger"},{default:i(()=>[e(h,{src:bA}),e(y,null,{default:i(()=>[e(v,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(d,null,{default:i(()=>[a(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),e(g,{trigger:t.triggerTriger,header:"User Rating"},{default:i(()=>[e($,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Basic",description:"A popup can provide more basic formatting",code:t.basicCode},{default:i(()=>[e(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[e(s,{name:"add"})]),_:1},512),e(g,{trigger:t.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Position",description:"A popup can be position around its trigger",code:t.positionCode},{default:i(()=>[e(u,{ref:"positionTrigger1"},{default:i(()=>[a("Top Left")]),_:1},512),e(u,{ref:"positionTrigger2"},{default:i(()=>[a("Top Center")]),_:1},512),e(u,{ref:"positionTrigger3"},{default:i(()=>[a("Top Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger4"},{default:i(()=>[a("Bottom Left")]),_:1},512),e(u,{ref:"positionTrigger5"},{default:i(()=>[a("Bottom Center")]),_:1},512),e(u,{ref:"positionTrigger6"},{default:i(()=>[a("Bottom Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger7"},{default:i(()=>[a("Right Center")]),_:1},512),e(u,{ref:"positionTrigger8"},{default:i(()=>[a("Left Center")]),_:1},512),e(g,{trigger:t.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:t.flowingCode},{default:i(()=>[e(u,{ref:"flowingTrigger"},{default:i(()=>[a("Show Flowing Popup")]),_:1},512),e(g,{trigger:t.flowingTrigger,flowing:""},{default:i(()=>[e(k,{centered:"",divided:"",columns:3},{default:i(()=>[e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Basic Plan")]),_:1}),yA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Business Plan")]),_:1}),CA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Premium Plan")]),_:1}),wA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Size",description:"A popup can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(g,{size:"mini",content:"Hello. This is a mini popup",trigger:t.sizeTrigger1},null,8,["trigger"]),e(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:t.sizeTrigger2},null,8,["trigger"]),e(g,{size:"small",content:"Hello. This is a small popup",trigger:t.sizeTrigger3},null,8,["trigger"]),e(g,{size:"large",content:"Hello. This is a large popup",trigger:t.sizeTrigger4},null,8,["trigger"]),e(g,{size:"huge",content:"Hello. This is a huge popup",trigger:t.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:t.wideCode},{default:i(()=>[e(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(g,{trigger:t.wideTrigger1},{default:i(()=>[a(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger2,wide:""},{default:i(()=>[a(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger3,wide:"very"},{default:i(()=>[a(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Inverted",description:"A popup can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[e(s,{name:"add"})]),_:1},512),e(g,{trigger:t.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(g,{trigger:t.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const SA=fe(vA,[["render",AA]]),kA=B({name:"ProgressDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function $A(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-progress"),u=_("doc-example"),g=_("sui-segment"),c=_("sui-container");return te(),re("div",null,[e(f,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(c,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Standard",description:"A standard progress bar",code:t.standardCode},{default:i(()=>[e(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:t.indicatingCode},{default:i(()=>[e(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:t.barCode},{default:i(()=>[e(s,{percent:33})]),_:1},8,["code"]),e(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:t.progressCode},{default:i(()=>[e(s,{percent:14,progress:""})]),_:1},8,["code"]),e(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:t.centeredCode},{default:i(()=>[e(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(u,{title:"Label",description:"A progress element can contain a label",code:t.labelCode},{default:i(()=>[e(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Active",description:"A progress bar can show activity",code:t.activeCode},{default:i(()=>[e(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(u,{title:"Success",description:"A progress bar can show a success state",code:t.successCode},{default:i(()=>[e(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(u,{title:"Warning",description:"A progress bar can show a warning state",code:t.warningCode},{default:i(()=>[e(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(u,{title:"Error",description:"A progress bar can show an error state",code:t.errorCode},{default:i(()=>[e(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(u,{title:"Disabled",description:"A progress bar can be disabled",code:t.disabledCode},{default:i(()=>[e(s,{percent:25,disabled:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(u,{title:"Attached",description:"A progress bar can show progress of an element",code:t.attachedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{percent:47,attached:"top"}),a(" La la la la "),e(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A progress bar can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{percent:88,size:"tiny",label:"tiny"}),e(s,{percent:100,size:"small",label:"small",success:""}),e(s,{percent:83,label:"standard"}),e(s,{percent:73,size:"large",label:"large"}),e(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(u,{title:"Color",description:"A progress bar can have different colors",code:t.colorCode},{default:i(()=>[e(s,{percent:32,color:"red"}),e(s,{percent:53,color:"orange"}),e(s,{percent:13,color:"yellow"}),e(s,{percent:37,color:"olive"}),e(s,{percent:83,color:"green"}),e(s,{percent:24,color:"teal"}),e(s,{percent:88,color:"blue"}),e(s,{percent:41,color:"violet"}),e(s,{percent:47,color:"purple"}),e(s,{percent:30,color:"pink"}),e(s,{percent:68,color:"brown"}),e(s,{percent:35,color:"grey"}),e(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const TA=fe(kA,[["render",$A]]),xA=B({name:"RatingDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Ba},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),EA=C("br",null,null,-1),BA=C("br",null,null,-1),RA=C("br",null,null,-1),PA=C("br",null,null,-1),zA=C("br",null,null,-1),MA=C("br",null,null,-1),NA=C("br",null,null,-1),DA=C("br",null,null,-1),FA=C("br",null,null,-1),IA=C("br",null,null,-1),VA=C("br",null,null,-1),LA=C("br",null,null,-1),OA=C("br",null,null,-1),HA=C("br",null,null,-1),jA=C("br",null,null,-1),qA=C("br",null,null,-1),JA=C("br",null,null,-1),UA=C("br",null,null,-1),GA=C("br",null,null,-1),YA=C("br",null,null,-1),WA=C("br",null,null,-1),KA=C("br",null,null,-1),QA=C("br",null,null,-1),XA=C("br",null,null,-1),ZA=C("br",null,null,-1),eS=C("br",null,null,-1),tS=C("br",null,null,-1),iS=C("br",null,null,-1),lS=C("br",null,null,-1),aS=C("br",null,null,-1),nS=C("br",null,null,-1),sS=C("br",null,null,-1),oS=C("br",null,null,-1),uS=C("br",null,null,-1),rS=C("br",null,null,-1),dS=C("br",null,null,-1),cS=C("br",null,null,-1),mS=C("br",null,null,-1),pS=C("br",null,null,-1),fS=C("br",null,null,-1),gS=C("br",null,null,-1),hS=C("br",null,null,-1),_S=C("br",null,null,-1),bS=C("br",null,null,-1),vS=C("br",null,null,-1),yS=C("br",null,null,-1),CS=C("br",null,null,-1),wS=C("br",null,null,-1);function AS(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-rating"),u=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return te(),re("div",null,[e(f,{title:"Rating",sub:"A rating indicates user interest in content"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Rating",description:"A Basic rating",code:t.ratingCode},{default:i(()=>[e(s)]),_:1},8,["code"]),e(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:t.iconCode},{default:i(()=>[e(s,{defaultRating:2,maxRating:4,color:"yellow"}),EA,BA,e(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),RA,PA,e(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),zA,MA,e(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),NA,DA,e(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),FA,IA,e(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),VA,LA,e(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:t.colorCode},{default:i(()=>[e(s,{defaultRating:1,maxRating:7,color:"red"}),OA,HA,e(s,{defaultRating:2,maxRating:7,color:"orange"}),jA,qA,e(s,{defaultRating:3,maxRating:7,color:"yellow"}),JA,UA,e(s,{defaultRating:4,maxRating:7,color:"olive"}),GA,YA,e(s,{defaultRating:5,maxRating:7,color:"green"}),WA,KA,e(s,{defaultRating:6,maxRating:7,color:"teal"}),QA,XA,e(s,{defaultRating:6,maxRating:7,color:"blue"}),ZA,eS,e(s,{defaultRating:5,maxRating:7,color:"violet"}),tS,iS,e(s,{defaultRating:4,maxRating:7,color:"purple"}),lS,aS,e(s,{defaultRating:3,maxRating:7,color:"pink"}),nS,sS,e(s,{defaultRating:2,maxRating:7,color:"brown"}),oS,uS,e(s,{defaultRating:1,maxRating:7,color:"grey"}),rS,dS,e(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:t.disabledCode},{default:i(()=>[e(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Size",description:"A rating can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),cS,mS,e(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),pS,fS,e(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),gS,hS,e(s,{defaultRating:3,maxRating:4,color:"yellow"}),_S,bS,e(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),vS,yS,e(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),CS,wS,e(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,b=>(te(),Ue(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const SS=fe(xA,[["render",AS]]),kS=B({name:"SidebarDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Ba},setup(){return{visible1:L(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),$S={class:"pusher"};function TS(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-icon"),u=_("sui-button"),g=_("sui-grid-column"),c=_("sui-menu-item"),h=_("sui-sidebar"),v=_("sui-image"),d=_("sui-segment"),y=_("sui-grid"),A=_("doc-example"),$=_("property-list-table"),b=_("sui-table-header-cell"),w=_("sui-table-row"),k=_("sui-table-header"),T=_("sui-table-cell"),E=_("sui-table-body"),z=_("sui-table"),M=_("sui-container");return te(),re("div",null,[e(f,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(M,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Sidebar",description:"A sidebar",code:t.sidebarCode},{default:i(()=>[e(y,{columns:1},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{onClick:l[0]||(l[0]=P=>t.visible1=!t.visible1),icon:""},{default:i(()=>[e(s,{name:"arrow right"})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(d,{class:"pushable"},{default:i(()=>[e(h,{visible:t.visible1,"onUpdate:visible":l[1]||(l[1]=P=>t.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[e(c,null,{default:i(()=>[e(s,{name:"home"}),a(" Home ")]),_:1}),e(c,null,{default:i(()=>[e(s,{name:"gamepad"}),a(" Games ")]),_:1}),e(c,null,{default:i(()=>[e(s,{name:"camera"}),a(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",$S,[e(d,null,{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Main Header")]),_:1}),e(v,{src:ge})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e($,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(z,{celled:""},{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Name")]),_:1}),e(b,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(E,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,P=>(te(),Ue(w,{key:P.name},{default:i(()=>[e(T,null,{default:i(()=>[a(Ee(P.name),1)]),_:2},1024),e(T,null,{default:i(()=>[a(Ee(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const xS=fe(kS,[["render",TS]]),ES=B({name:"SliderDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=L(5),l='<sui-slider v-model="slider1" />',n=L(4),o='<sui-slider labeled v-model="slider2" />',r=L(6),m='<sui-slider labeled="ticked" v-model="slider3" />',f=L(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=L(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=L([]);g.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=L(7),v='<sui-slider disabled v-model="slider7" />',d=L(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=L(3),$='<sui-slider reversed v-model="slider9" />',b=L(18),w='<sui-slider vertical v-model="slider10" :max="20" />',k=L(5),T=L(5),E=L(5),z=L(5),M=L(5),P=L(5),F=L(5),X=L(5),H=L(5),ue=L(5),ye=L(5),I=L(5),O=L(5),ae=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,Y=`<sui-segment inverted>
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
</sui-segment>`,we=L(5),Ve=L(5),qe=L(5);return{slider1:t,sliderCode:l,slider2:n,labeledSliderCode:o,slider3:r,labeledTickedCode:m,slider4:f,customLabelsCode:p,slider5:s,stepCode:u,slider6:g,rangeCode:c,slider7:h,disabledCode:v,slider8:d,invertedCode:y,slider9:A,reversedCode:$,slider10:b,verticalCode:w,redSlider:k,orangeSlider:T,yellowSlider:E,oliveSlider:z,greenSlider:M,tealSlider:P,blueSlider:F,violetSlider:X,purpleSlider:H,pinkSlider:ue,brownSlider:ye,greySlider:I,blackSlider:O,coloredCode:ae,invertedColoredCode:Y,smallSlider:we,largeSlider:Ve,bigSlider:qe,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function BS(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-slider"),u=_("doc-example"),g=_("sui-segment"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return te(),re("div",null,[e(f,{title:"Slider",sub:"A slider allows users to select values within a range"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Slider",description:"A standard slider",code:t.sliderCode},{default:i(()=>[e(s,{modelValue:t.slider1,"onUpdate:modelValue":l[0]||(l[0]=b=>t.slider1=b)},null,8,["modelValue"]),a(" "+Ee(t.slider1),1)]),_:1},8,["code"]),e(u,{title:"Labeled Slider",description:"A slider that show its labels",code:t.labeledSliderCode},{default:i(()=>[e(s,{labeled:"",modelValue:t.slider2,"onUpdate:modelValue":l[1]||(l[1]=b=>t.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:t.labeledTickedCode},{default:i(()=>[e(s,{labeled:"ticked",modelValue:t.slider3,"onUpdate:modelValue":l[2]||(l[2]=b=>t.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:t.customLabelsCode},{default:i(()=>[e(s,{modelValue:t.slider4,"onUpdate:modelValue":l[3]||(l[3]=b=>t.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Step",description:"A slider can change the default step increment",code:t.stepCode},{default:i(()=>[e(s,{modelValue:t.slider5,"onUpdate:modelValue":l[4]||(l[4]=b=>t.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),a(" "+Ee(t.slider5),1)]),_:1},8,["code"]),e(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:t.rangeCode},{default:i(()=>[e(s,{modelValue:t.slider6,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),a(" "+Ee(t.slider6),1)]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Disabled",description:"A slider can appear disabled",code:t.disabledCode},{default:i(()=>[e(s,{disabled:"",modelValue:t.slider7,"onUpdate:modelValue":l[6]||(l[6]=b=>t.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A slider can be inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{inverted:"",modelValue:t.slider8,"onUpdate:modelValue":l[7]||(l[7]=b=>t.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Reversed",description:"A slider can be reversed",code:t.reversedCode},{default:i(()=>[e(s,{reversed:"",modelValue:t.slider9,"onUpdate:modelValue":l[8]||(l[8]=b=>t.slider9=b)},null,8,["modelValue"]),a(" "+Ee(t.slider9),1)]),_:1},8,["code"]),e(u,{title:"Vertical",description:"A slider can be vertical",code:t.verticalCode},{default:i(()=>[e(s,{vertical:"",modelValue:t.slider10,"onUpdate:modelValue":l[9]||(l[9]=b=>t.slider10=b),max:20},null,8,["modelValue"]),a(" "+Ee(t.slider10),1)]),_:1},8,["code"]),e(u,{title:"Colored",description:"A slider can be different colors",code:t.coloredCode},{default:i(()=>[e(s,{color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[10]||(l[10]=b=>t.redSlider=b)},null,8,["modelValue"]),e(s,{color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(s,{color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(s,{color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(s,{color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(s,{color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(s,{color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(s,{color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(s,{color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(s,{color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(s,{color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(s,{color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[21]||(l[21]=b=>t.greySlider=b)},null,8,["modelValue"]),e(s,{color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:t.invertedColoredCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{inverted:"",color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[23]||(l[23]=b=>t.redSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[34]||(l[34]=b=>t.greySlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A slider can have different sizes",code:t.sizeCode},{default:i(()=>[e(s,{size:"small",color:"red",modelValue:t.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=b=>t.smallSlider=b)},null,8,["modelValue"]),e(s,{size:"large",color:"yellow",modelValue:t.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=b=>t.largeSlider=b)},null,8,["modelValue"]),e(s,{size:"big",color:"olive",modelValue:t.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=b=>t.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Type")]),_:1}),e(c,null,{default:i(()=>[a("Default")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.properties,b=>(te(),Ue(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(Ee(b.type),1)]),_:2},1024),e(d,null,{default:i(()=>[a(Ee(b.default),1)]),_:2},1024),e(d,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,b=>(te(),Ue(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const RS=fe(ES,[["render",BS]]),PS=B({name:"TabDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Ba},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function zS(t,l,n,o,r,m){const f=_("doc-page-header"),p=_("sui-header"),s=_("sui-tab-panel"),u=_("sui-tab"),g=_("doc-example"),c=_("property-list-table"),h=_("sui-table-header-cell"),v=_("sui-table-row"),d=_("sui-table-header"),y=_("sui-table-cell"),A=_("sui-table-body"),$=_("sui-table"),b=_("sui-container");return te(),re("div",null,[e(f,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(b,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Examples")]),_:1}),e(g,{title:"Basic",code:t.basicCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary",code:t.secondaryCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(p,{as:"h3"},{default:i(()=>[a("Tab")]),_:1}),e(c,{properties:t.tabProperties},null,8,["properties"]),e(p,{as:"h3"},{default:i(()=>[a("TabPanel")]),_:1}),e(c,{properties:t.tabPanelProperties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e($,{celled:""},{default:i(()=>[e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[a("Name")]),_:1}),e(h,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,w=>(te(),Ue(v,{key:w.name},{default:i(()=>[e(y,null,{default:i(()=>[a(Ee(w.name),1)]),_:2},1024),e(y,null,{default:i(()=>[a(Ee(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const MS=fe(PS,[["render",zS]]),NS=[{path:"/",component:wh,children:[{path:"/",component:Vh},{path:"elements/button",component:Qh},{path:"elements/container",component:a_},{path:"elements/divider",component:u_},{path:"elements/emoji",component:__},{path:"elements/flag",component:C_},{path:"elements/header",component:T_},{path:"elements/icon",component:F_},{path:"elements/image",component:Q_},{path:"elements/input",component:tb},{path:"elements/label",component:hb},{path:"elements/list",component:Nb},{path:"elements/loader",component:Vb},{path:"elements/rail",component:jb},{path:"elements/reveal",component:Yb},{path:"elements/segment",component:vv},{path:"elements/step",component:kv},{path:"collections/breadcrumb",component:xv},{path:"collections/form",component:Rv},{path:"collections/grid",component:Nv},{path:"collections/menu",component:jv},{path:"collections/message",component:t1},{path:"collections/table",component:f1},{path:"views/advertisement",component:v1},{path:"views/card",component:ey},{path:"views/comment",component:Zy},{path:"views/feed",component:CC},{path:"views/item",component:dw},{path:"views/statistic",component:vw},{path:"modules/accordion",component:Hw},{path:"modules/calendar",component:Jw},{path:"modules/checkbox",component:tA},{path:"modules/dimmer",component:aA},{path:"modules/dropdown",component:oA},{path:"modules/embed",component:dA},{path:"modules/modal",component:_A},{path:"modules/popup",component:SA},{path:"modules/progress",component:TA},{path:"modules/rating",component:SS},{path:"modules/sidebar",component:xS},{path:"modules/slider",component:RS},{path:"modules/tab",component:MS}]}],DS=rh({history:kg("/vue-fomantic-ui/"),routes:NS});function Ic(t){var l,n,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(l=0;l<t.length;l++)t[l]&&(n=Ic(t[l]))&&(o&&(o+=" "),o+=n);else for(l in t)t[l]&&(o&&(o+=" "),o+=l);return o}function W(){for(var t,l,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(l=Ic(t))&&(o&&(o+=" "),o+=l);return o}const S=(t,l)=>t?l:"",Te=(t,l)=>typeof t=="string"?`${t} ${l}`:"",$e=(t,l)=>t===!0?l:t==="below"?`${l} ${t}`:typeof t=="string"?`${t} ${l}`:"",Hi=t=>t==="justified"?"justified":Te(t,"aligned"),Ft=(t,l)=>typeof t=="number"&&l?`${Sn(t)} ${l}`:typeof t=="number"&&!l?Sn(t):typeof t=="string"&&t==="equal"?`${t} width`:"",Gi=(t,l)=>t?`${Sn(t)} wide ${l}`:"",Sn=t=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][t-1],kn=B({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,labeled:[Boolean,String],labelPosition:String,icon:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,loading:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.color,t.size,S(t.active,"active"),S(t.basic,"basic"),S(t.circular,"circular"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.facebook,"facebook"),S(t.fluid,"fluid"),S(t.google,"google"),S(t.icon,"icon"),S(t.linkedin,"linkedin"),S(t.instagram,"instagram"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.primary,"primary"),S(t.secondary,"secondary"),S(t.telegram,"telegram"),S(t.tertiary,"tertiary"),S(t.toggle,"toggle"),S(t.twitter,"twitter"),S(t.vk,"vk"),S(t.whatsapp,"whatsapp"),S(t.youtube,"youtube"),Te(t.attached,"attached"),Te(t.floated,"floated"),Te(t.labelPosition,"labeled"),$e(t.animated,"animated"),$e(t.labeled,"labeled"),"button"))}},render(){let t=this.as||"div";return e(t,{class:this.computedClass,role:"button"},{default:()=>{var l,n;return[(n=(l=this.$slots).default)==null?void 0:n.call(l)]}})}}),Eo=B({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(t){return{computedClass:D(()=>W(S(t.hidden,"hidden"),S(t.visible,"visible"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Bo=B({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>W("ui",t.color,t.size,S(t.basic,"basic"),S(t.icon,"icon"),S(t.labeled,"labeled"),S(t.vertical,"vertical"),Te(t.attached,"attached"),Ft(t.widths,""),"buttons"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),FS={install(t){t.component(kn.name,kn),t.component(Eo.name,Eo),t.component(Bo.name,Bo)}},Ro=B({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>W("ui",S(t.fluid,"fluid"),S(t.text,"text"),Hi(t.textAlign),"container"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),IS={install(t){t.component(Ro.name,Ro)}},Po=B({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>W("ui",S(t.clearing,"clearing"),S(t.fitted,"fitted"),S(t.hidden,"hidden"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.section,"section"),S(t.vertical,"vertical"),Te(t.textAlign,"aligned"),"divider"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),VS={install(t){t.component(Po.name,Po)}},zo=B({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(t){return{computedClass:D(()=>W(t.size,S(t.disabled,"disabled"),S(t.link,"link"),S(t.loading,"loading")))}},render(){return this.computedClass?J("em",{class:this.computedClass,"data-emoji":this.$props.name}):J("em",{"data-emoji":this.$props.name})}}),LS={install(t){t.component(zo.name,zo)}},Mo=B({name:"SuiFlag",props:{name:String},setup(t){return{computedClass:D(()=>W(t.name,"flag"))}},render(){return J("i",{class:this.computedClass})}}),OS={install(t){t.component(Mo.name,Mo)}},la=B({name:"SuiHeaderSubheader",props:{as:String},setup(t){return{elementType:t.as||"div"}},render(){var t,l;return J(this.elementType,{class:"sub header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),No=B({name:"SuiHeader",components:{HeaderSubheader:la},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(t){const l=t.as||"div",n=D(()=>W("ui",t.color,t.size,S(t.block,"block"),S(t.disabled,"disabled"),S(t.dividing,"dividing"),S(t.icon,"icon"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.sub,"sub"),Te(t.floated,"floated"),$e(t.attached,"attached"),Hi(t.textAlign),"header"));return{elementType:l,computedClass:n}},render(){var t,l;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(J(la,{},this.subheader)),n.length>0?J(this.elementType,{class:this.computedClass},n):J(this.elementType,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Do=B({name:"SuiHeaderContent",render(){var t,l;return J("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),HS={install(t){t.component(No.name,No),t.component(Do.name,Do),t.component(la.name,la)}},hi=B({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(t){return{computedClass:D(()=>W(t.color,t.name,t.size,S(t.bordered,"bordered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fitted,"fitted"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.loading,"loading"),Te(t.flipped,"flipped"),Te(t.rotated,"rotated"),$e(t.corner,"corner"),"icon"))}},render(){let t=this.$props.as||"i";return J(t,{"aria-hidden":!0,class:this.computedClass})}}),Fo=B({name:"SuiIconGroup",props:{as:String,size:String},setup(t){return{computedClass:D(()=>W(t.size,"icons"))}},render(){var t,l;let n=this.$props.as||"i";return J(n,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),jS={install(t){t.component(hi.name,hi),t.component(Fo.name,Fo)}},Vc=["top","middle","bottom"],qS={verticalAlign:{type:String,validator:t=>Vc.includes(t)}};function JS(t){return{verticalAlignClass:D(()=>t.verticalAlign&&Vc.includes(t.verticalAlign)?`${t.verticalAlign} aligned`:null)}}const US=["left","right"],GS={floated:{type:String,validator:t=>US.includes(t)}};function YS(t){return{floatedClass:D(()=>t.floated&&(t.floated==="left"||t.floated==="right")?`${t.floated} floated`:null)}}const Ii=B({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(t,{slots:l}){const n=D(()=>W("ui",t.size,t.color,S(t.basic,"basic"),S(t.circular,"circular"),S(t.empty,"empty"),S(t.floating,"floating"),S(t.horizontal,"horizontal"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.prompt,"prompt"),S(t.tag,"tag"),Te(t.attached,"attached"),Te(t.corner,"corner"),$e(t.pointing,"pointing"),$e(t.ribbon,"ribbon"),"label"));let o=t.as||"div";return t.icon?()=>J(o,{class:n.value},J(hi,{name:t.icon})):()=>{var r;return J(o,{class:n.value},(r=l.default)==null?void 0:r.call(l))}}}),Io=B({name:"SuiLabelDetail",render(){var t,l;return e("div",{class:"detail"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Vo=B({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(t,{slots:l}){const n=D(()=>W("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.tag,"tag"),"labels"));return()=>{var o;return J("div",{class:n.value},(o=l.default)==null?void 0:o.call(l))}}}),WS={install(t){t.component(Ii.name,Ii),t.component(Io.name,Io),t.component(Vo.name,Vo)}},aa=B({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...qS,...GS},setup(t,{slots:l}){const{verticalAlignClass:n}=JS(t),{floatedClass:o}=YS(t),r=D(()=>W("ui",t.size,n.value,o.value,S(t.avatar,"avatar"),S(t.bordered,"bordered"),S(t.centered,"centered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.hidden,"hidden"),S(t.inline,"inline"),S(t.rounded,"rounded"),$e(t.spaced,"spaced"),"image"));if(t.as==="a"||t.as==="router-link"){let m=t.as;return t.as==="router-link"&&(m=_(t.as)),()=>{var f;return J(m,{class:r.value,href:t.href,target:t.target&&t.target},J("img",{src:t.src},(f=l.default)==null?void 0:f.call(l)))}}return t.wrapped?()=>{var m;return J("div",{class:r.value},J("img",{src:t.src},(m=l.default)==null?void 0:m.call(l)))}:t.label?()=>J("div",{class:r.value},[J("img",{src:t.src}),J(Ii,{...t.label})]):()=>e("img",{class:r.value,src:t.src},null)}}),Lo=B({name:"SuiImageGroup",props:{size:String},setup(t,{slots:l}){const n=D(()=>W("ui",t.size,"images"));return()=>{var o;return J("div",{class:n.value},(o=l.default)==null?void 0:o.call(l))}}}),KS={install(t){t.component(aa.name,aa),t.component(Lo.name,Lo)}},Oo=B({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(t,{emit:l}){const n=D(()=>typeof t.icon=="string"||t.loading),o=D(()=>!!t.label||t.labeled),r=D(()=>W("ui",t.size,t.action&&"action",S(t.disabled,"disabled"),S(t.error,"error"),S(t.fluid,"fluid"),S(t.focus,"focus"),t.iconPosition,S(n.value,"icon"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.transparent,"transparent"),S(o.value,"labeled"),"input")),m=f=>l("update:modelValue",f.target.value);return()=>e("div",{class:r.value},[t.label&&e(Ii,null,{default:()=>[t.label]}),e("input",{type:t.type||"text",placeholder:t.placeholder,value:t.modelValue,onInput:f=>m(f)},null),n.value&&e(hi,{name:t.icon||"spinner"},null),t.action&&e(kn,null,{default:()=>[t.action]})])}}),QS={install(t){t.component(Oo.name,Oo)}},Ho=B({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(t,{slots:l}){const n=D(()=>W("ui",S(t.animated,"animated"),S(t.bulleted,"bulleted"),S(t.celled,"celled"),S(t.divided,"divided"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.ordered,"ordered"),S(t.relaxed,"relaxed"),S(t.selection,"selection"),Te(t.verticalAlign,"aligned"),Te(t.floated,"floated"),"list"));let o=t.as||"div";return()=>{var r;return J(o,{class:n.value},(r=l.default)==null?void 0:r.call(l))}}}),jo=B({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(t,{slots:l}){let n=t.as||"div";const o=D(()=>W(S(t.active,"active"),S(t.disabled,"disabled"),"item"));return()=>{var r;return J(n,{class:o.value},(r=l.default)==null?void 0:r.call(l))}}}),qo=B({name:"SuiListIcon",components:{Icon:hi},setup(t,{slots:l}){return()=>{var n;return J(_(hi.name),{...t},(n=l.default)==null?void 0:n.call(l))}}}),Jo=B({name:"SuiListContent",props:{verticalAlign:String},setup(t){return{computedClass:D(()=>W(Te(t.verticalAlign,"aligned"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Uo=B({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return J(t.as,{class:"header"},(n=l.default)==null?void 0:n.call(l))}}}),Go=B({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return J(t.as,{class:"description"},(n=l.default)==null?void 0:n.call(l))}}}),Yo=B({name:"SuiListList",render(){var t,l;return e("div",{class:"list"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),XS={install(t){t.component(Ho.name,Ho),t.component(jo.name,jo),t.component(qo.name,qo),t.component(Jo.name,Jo),t.component(Uo.name,Uo),t.component(Go.name,Go),t.component(Yo.name,Yo)}},Wo=B({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(t,{slots:l}){return{computedClass:D(()=>{var n;return W("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.fast,"fast"),S(t.indeterminate,"indeterminate"),S(t.inverted,"inverted"),S(t.slow,"slow"),S(t.text||!!((n=l.default)!=null&&n.call(l)),"text"),$e(t.inline,"inline"),"loader")})}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ZS={install(t){t.component(Wo.name,Wo)}},Ko=B({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(t){return{computedClass:D(()=>W("ui",t.position,t.size,S(t.attached,"attached"),S(t.dividing,"dividing"),S(t.internal,"internal"),$e(t.close,"close"),"rail"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ek={install(t){t.component(Ko.name,Ko)}},Qo=B({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.animated,S(t.active,"active"),S(t.disabled,"disabled"),S(t.instant,"instant"),"reveal"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Xo=B({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(t){return{computedClass:D(()=>W("ui",S(t.visible,"visible"),S(t.hidden,"hidden"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),tk={install(t){t.component(Qo.name,Qo),t.component(Xo.name,Xo)}},na=B({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.clearing,"clearing"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.piled,"piled"),S(t.placeholder,"placeholder"),S(t.raised,"raised"),S(t.secondary,"secondary"),S(t.stacked,"stacked"),S(t.tertiary,"tertiary"),S(t.vertical,"vertical"),Te(t.floated,"floated"),Te(t.textAlign,"aligned"),$e(t.attached,"attached"),$e(t.fitted,"fitted"),$e(t.padded,"padded"),"segment"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Zo=B({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.size,S(t.compact,"compact"),S(t.horizontal,"horizontal"),S(t.piled,"piled"),S(t.raised,"raised"),S(t.stacked,"stacked"),"segments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),eu=B({name:"SuiSegmentInline",render(){var t,l;return e("div",{class:"inline"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ik={install(t){t.component(na.name,na),t.component(Zo.name,Zo),t.component(eu.name,eu)}},tu=B({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(t){return{computedClass:D(()=>W(S(t.active,"active"),S(t.completed,"completed"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.link,"link"),S(t.vertical,"vertical"),"step"))}},render(){var t,l,n,o;return this.href?e("a",{class:this.computedClass,href:this.href},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("div",{class:this.computedClass},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),lk=["one","two","three","four","five","six","seven","eight"],iu=B({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(t){const{widths:l}=t;return{computedClass:D(()=>W("ui",l&&lk[l-1],t.size,S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.ordered,"ordered"),S(t.unstackable,"unstackable"),S(t.vertical,"vertical"),Te(t.attached,"attached"),Te(t.stackable,"stackable"),"steps"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),lu=B({name:"SuiStepContent",render(){var t,l;return e("div",{class:"content"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),au=B({name:"SuiStepTitle",render(){var t,l;return e("div",{class:"title"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),nu=B({name:"SuiStepDescription",render(){var t,l;return e("div",{class:"description"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ak={install(t){t.component(tu.name,tu),t.component(iu.name,iu),t.component(lu.name,lu),t.component(au.name,au),t.component(nu.name,nu)}},nk=Object.freeze(Object.defineProperty({__proto__:null,Button:FS,Container:IS,Divider:VS,Emoji:LS,Flag:OS,Header:HS,Icon:jS,Image:KS,Input:QS,Label:WS,List:XS,Loader:ZS,Rail:ek,Reveal:tk,Segment:ik,Step:ak},Symbol.toStringTag,{value:"Module"})),$n=B({name:"SuiBreadcrumbDivider",props:{icon:String},setup(t){return{computedClass:D(()=>W(t.icon,"icon","divider"))}},render(){var t,l;return this.icon?e("i",{"aria-hidden":"true",class:this.computedClass},null):e("div",{class:"divider"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Tn=B({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(t){const l=D(()=>W(S(t.active,"active"),"section")),n=t.link||!!t.href;return{computedClass:l,isLink:n}},render(){let t="div";this.isLink?t="a":this.to&&(t=_("router-link"));const l={href:this.href,to:this.to};return e(t,kl({class:this.computedClass},l),{default:()=>{var n,o;return[(o=(n=this.$slots).default)==null?void 0:o.call(n)]}})}}),su=B({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(t){return{computedClass:D(()=>W("ui",t.size,S(t.inverted,"inverted"),"breadcrumb"))}},render(){var t,l;const n=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,m)=>{const f={active:r.active,href:r.href,link:r.link,to:r.to};return e(Se,null,[e(Tn,f,{default:()=>[r.content]}),this.sections.length!==m+1&&e($n,{icon:this.icon},{default:()=>[a(" / ")]})])})};return e("div",{class:this.computedClass},[((l=(t=this.$slots).default)==null?void 0:l.call(t))||n()])}}),sk={install(t){t.component(su.name,su),t.component($n.name,$n),t.component(Tn.name,Tn)}},ou=B({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(t){return{computedClass:D(()=>W("ui",t.size,S(t.error,"error"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.reply,"reply"),S(t.success,"success"),S(t.unstackable,"unstackable"),S(t.warning,"warning"),"form"))}},render(){var t,l;return e("form",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),uu=B({name:"SuiFormField",props:{error:Boolean,inline:Boolean,label:String,placeholder:String,required:Boolean,type:String},setup(t){const l=D(()=>W(S(t.error,"error"),S(t.inline,"inline"),S(t.required,"required"),"field")),n=t.type||"text";return{computedClass:l,inputType:n}},render(){var t,l;return this.label?e("div",{class:this.computedClass},[e("label",null,[this.label]),e("input",{type:this.inputType,placeholder:this.placeholder},null)]):e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ru=B({name:"SuiFormGroup",props:{widths:String},setup(t){return{computedClass:D(()=>W(Te(t.widths,"width"),"fields"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),du=B({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&e("div",{class:"field"},[e("label",null,[this.label]),e("textarea",{placeholder:this.placeholder},null)]),e("div",{class:"field"},[e("textarea",{placeholder:this.placeholder},null)])}}),ok={install(t){t.component(ou.name,ou),t.component(uu.name,uu),t.component(ru.name,ru),t.component(du.name,du)}},cu=B({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(t){return{computedClass:D(()=>W("ui",t.container&&"container",S(t.centered,"centered"),S(t.compact,"compact"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),Te(t.reversed,"reversed"),Te(t.verticalAlign,"aligned"),$e(t.celled,"celled"),$e(t.divided,"divided"),$e(t.padded,"padded"),$e(t.relaxed,"relaxed"),Hi(t.textAlign),Ft(t.columns,"column"),"grid"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),mu=B({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(t){return{computedClass:D(()=>W(t.color,Te(t.floated,"floated"),Te(t.only,"only"),Hi(t.textAlign),Ft(t.width,"wide"),Gi(t.mobile,"mobile"),Gi(t.tablet,"tablet"),Gi(t.computer,"computer"),Gi(t.largeScreen,"large screen"),Gi(t.widescreen,"widescreen"),"column"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),pu=B({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>W(t.color,S(t.centered,"centered"),S(t.stretched,"stretched"),Te(t.only,"only"),Ft(t.columns,"column"),Hi(t.textAlign),"row"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),uk={install(t){t.component(cu.name,cu),t.component(mu.name,mu),t.component(pu.name,pu)}},fu=B({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>W("ui",t.color,t.size,S(t.borderless,"borderless"),S(t.compact,"compact"),S(t.fixed,"fixed"),S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.pagination,"pagination"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.stackable,"stackable"),S(t.text,"text"),S(t.vertical,"vertical"),$e(t.attached,"attached"),$e(t.floated,"floated"),$e(t.icon,"icon"),$e(t.tabular,"tabular"),Ft(t.widths,"item"),"menu"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),gu=B({name:"SuiMenuHeader",props:{as:String,content:String},setup(t,{slots:l}){let n=t.as||"div";return()=>e(n,{class:"header"},{default:()=>{var o;return[t.content||((o=l.default)==null?void 0:o.call(l))]}})}}),hu=B({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(t,{slots:l}){let n=t.as||"a";t.header&&(n="div"),t.as==="router-link"&&(n=_(t.as));const o=D(()=>W(t.color,t.position,S(t.action,"action"),S(t.active,"active"),S(t.browse,"browse"),S(t.disabled,"disabled"),S(t.header,"header"),S(t.link,"link"),$e(t.fitted,"fitted"),"item"));return()=>e(n,{class:o.value},{default:()=>{var r;return[t.name||((r=l.default)==null?void 0:r.call(l))]}})}}),_u=B({name:"SuiMenuMenu",props:{position:String},setup(t){const{position:l}=t;return{computedClass:D(()=>W(l,"menu"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),rk={install(t){t.component(fu.name,fu),t.component(gu.name,gu),t.component(hu.name,hu),t.component(_u.name,_u)}},bu=B({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.color,t.size,S(t.compact,"compact"),S(t.error,"error"),S(t.floating,"floating"),S(t.hidden,"hidden"),S(t.icon,"icon"),S(t.info,"info"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.success,"success"),S(t.visible,"visible"),S(t.warning,"warning"),$e(t.attached,"attached"),"message"))}},render(){var t,l;return e("div",{class:this.computedClass},[(this.header||this.content)&&e(xn,null,{default:()=>[e(En,null,{default:()=>[this.header]}),e("p",null,[this.content])]}),(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),xn=B({name:"SuiMessageContent",render(){var t,l;return J("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),En=B({name:"SuiMessageHeader",render(){var t,l;return J("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),vu=B({name:"SuiMessageItem",render(){var t,l;return J("li",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),yu=B({name:"SuiMessageList",render(){var t,l;return J("ul",{class:"list"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),dk={install(t){t.component(bu.name,bu),t.component(xn.name,xn),t.component(En.name,En),t.component(vu.name,vu),t.component(yu.name,yu)}},Cu=B({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.color,t.size,S(t.celled,"celled"),S(t.collapsing,"collapsing"),S(t.definition,"definition"),S(t.fixed,"fixed"),S(t.inverted,"inverted"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.stackable,"stackable"),S(t.striped,"striped"),S(t.structured,"structured"),S(t.unstackable,"unstackable"),$e(t.attached,"attached"),$e(t.basic,"basic"),$e(t.compact,"compact"),$e(t.padded,"padded"),Ft(t.columns,"column"),"table"))}},render(){var t,l;return e("table",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),wu=B({name:"SuiTableBody",render(){var t,l;return J("tbody",{},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Au=B({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>W(t.color,S(t.active,"active"),S(t.collapsing,"collapsing"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.warning,"warning"),Te(t.verticalAlign,"aligned"),Te(t.marked,"marked"),Hi(t.textAlign)))}},render(){var t,l,n,o;return this.computedClass?e("td",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("td",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Su=B({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(t){const{fullWidth:l}=t;return{computedClass:D(()=>W(S(l,"full-width")))}},render(){var t,l,n,o;return this.computedClass?J("tfoot",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):J("tfoot",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),ku=B({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(t){return{computedClass:D(()=>W(S(t.fullWidth,"full-width")))}},render(){var t,l,n,o;return this.computedClass?J("thead",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):J("thead",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),$u=B({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(t){return{computedClass:D(()=>W(S(t.singleLine,"single line"),Te(t.textAlign,"aligned"),Ft(t.width,"wide")))}},render(){var t,l,n,o;return this.computedClass?e("th",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("th",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Tu=B({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>W(t.color,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.warning,"warning"),Te(t.textAlign,"aligned"),Te(t.verticalAlign,"aligned")))}},render(){var t,l,n,o;return this.computedClass?e("tr",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("tr",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),ck={install(t){t.component(Cu.name,Cu),t.component(wu.name,wu),t.component(Au.name,Au),t.component(Su.name,Su),t.component(ku.name,ku),t.component($u.name,$u),t.component(Tu.name,Tu)}},mk=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:sk,Form:ok,Grid:uk,Menu:rk,Message:dk,Table:ck},Symbol.toStringTag,{value:"Module"})),xu=B({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(t){return{computedClass:D(()=>W("ui",t.unit,S(t.centered,"centered"),S(!!t.test,"test"),"ad"))}},render(){var t,l,n,o;return this.$props.test?J("div",{class:this.computedClass,"data-text":this.$props.test},(l=(t=this.$slots).default)==null?void 0:l.call(t)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),pk={install(t){t.component(xu.name,xu)}},Eu=B({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.color,S(t.centered,"centered"),S(t.fluid,"fluid"),S(t.horizontal,"horizontal"),S(t.link,"link"),S(t.raised,"raised"),"card"))}},render(){var t,l,n,o;return this.$props.href||this.$props.link?J("a",{class:this.computedClass,href:this.$slots.href},(l=(t=this.$slots).default)==null?void 0:l.call(t)):J("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),Bu=B({name:"SuiCardContent",props:{extra:Boolean},setup(t){return{computedClass:D(()=>W(S(t.extra,"extra"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ru=B({name:"SuiCardDescription",props:{textAlign:String},setup(t){return{computedClass:D(()=>W(Te(t.textAlign,"aligned"),"description"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Pu=B({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(t){return{computedClass:D(()=>W("ui",S(t.centered,"centered"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),Ft(t.itemsPerRow,""),"cards"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),zu=B({name:"SuiCardHeader",props:{textAlign:String},setup(t){return{computedClass:D(()=>W(Te(t.textAlign,"aligned"),"header"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Mu=B({name:"SuiCardMeta",render(){var t,l;return J("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),fk={install(t){t.component(Eu.name,Eu),t.component(Bu.name,Bu),t.component(Ru.name,Ru),t.component(Pu.name,Pu),t.component(zu.name,zu),t.component(Mu.name,Mu)}},Nu=B({name:"SuiComment",render(){var t,l;return J("div",{class:"comment"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Du=B({name:"SuiCommentAction",props:{active:Boolean},setup(t){const{active:l}=t;return{computedClass:D(()=>W(S(l,"active")))}},render(){var t,l,n,o;return this.computedClass?J("a",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):J("a",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),Fu=B({name:"SuiCommentActions",render(){var t,l;return J("div",{class:"actions"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Iu=B({name:"SuiCommentAuthor",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return J(n,{class:"author"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Vu=B({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let t=this.$props.as||"div";return J(t,{class:"avatar"},J("img",{src:this.$props.src}))}}),Lu=B({name:"SuiCommentContent",render(){var t,l;return J("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ou=B({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(t){return{computedClass:D(()=>W("ui",t.size,S(t.collapsed,"collapsed"),S(t.inverted,"inverted"),S(t.minimal,"minimal"),S(t.threaded,"threaded"),"comments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Hu=B({name:"SuiCommentMetadata",render(){var t,l;return J("div",{class:"metadata"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ju=B({name:"SuiCommentText",render(){var t,l;return J("div",{class:"text"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),gk={install(t){t.component(Nu.name,Nu),t.component(Du.name,Du),t.component(Fu.name,Fu),t.component(Iu.name,Iu),t.component(Vu.name,Vu),t.component(Lu.name,Lu),t.component(Ou.name,Ou),t.component(Hu.name,Hu),t.component(ju.name,ju)}},qu=B({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(t){return{computedClass:D(()=>W("ui",t.size,S(t.inverted,"inverted"),"feed"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ju=B({name:"SuiFeedContent",render(){var t,l;return J("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Uu=B({name:"SuiFeedDate",render(){var t,l;return J("div",{class:"date"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Gu=B({name:"SuiFeedEvent",render(){var t,l;return J("div",{class:"event"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Yu=B({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(t){const{images:l,text:n}=t;return{computedClass:D(()=>W(S(l,"images"),S(n,"text"),"extra"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Wu=B({name:"SuiFeedLabel",render(){var t,l;return J("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ku=B({name:"SuiFeedLike",render(){var t,l;return J("a",{class:"like"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Qu=B({name:"SuiFeedMeta",render(){var t,l;return J("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Xu=B({name:"SuiFeedSummary",render(){var t,l;return J("div",{class:"summary"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Zu=B({name:"SuiFeedUser",render(){var t,l;return J("a",{class:"user"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),hk={install(t){t.component(qu.name,qu),t.component(Ju.name,Ju),t.component(Uu.name,Uu),t.component(Gu.name,Gu),t.component(Yu.name,Yu),t.component(Wu.name,Wu),t.component(Ku.name,Ku),t.component(Qu.name,Qu),t.component(Xu.name,Xu),t.component(Zu.name,Zu)}},er=B({name:"SuiItem",render(){var t,l;return J("div",{class:"item"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),tr=B({name:"SuiItemContent",props:{verticalAlign:String},setup(t){const{verticalAlign:l}=t;return{computedClass:D(()=>W(Te(l,"aligned"),"content"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ir=B({name:"SuiItemDescription",render(){var t,l;return J("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),lr=B({name:"SuiItemExtra",render(){var t,l;return J("div",{class:"extra"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ar=B({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(t){return{computedClass:D(()=>W("ui",S(t.divided,"divided"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.unstackable,"unstackable"),$e(t.relaxed,"relaxed"),"items"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),nr=B({name:"SuiItemHeader",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return J(n,{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),sr=B({name:"SuiItemImage",props:{size:String},setup(t){return{computedClass:D(()=>W(t.size,"image"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),or=B({name:"SuiItemMeta",render(){var t,l;return J("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),_k={install(t){t.component(er.name,er),t.component(tr.name,tr),t.component(ir.name,ir),t.component(lr.name,lr),t.component(ar.name,ar),t.component(nr.name,nr),t.component(sr.name,sr),t.component(or.name,or)}},sa=B({name:"SuiStatisticLabel",props:{content:String},render(){var t,l;return this.$props.content?J("div",{class:"label"},this.$props.content):J("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),oa=B({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(t){return{computedClass:D(()=>W(S(t.text,"text"),"value"))}},render(){var t,l;return this.$props.content?J("div",{class:this.computedClass},this.$props.content):J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ur=B({name:"SuiStatistic",components:{StatisticLabel:sa,StatisticValue:oa},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(t){const l=ze("ui",!0);return{computedClass:D(()=>W(l&&"ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.text,"text"),$e(t.floated,"floated"),"statistic"))}},render(){var t,l,n,o,r,m;let f=[];return this.$props.value&&f.push(J(oa,{content:this.$props.value},(l=(t=this.$slots).default)==null?void 0:l.call(t))),this.$props.label&&f.push(J(sa,{content:this.$props.label},(o=(n=this.$slots).default)==null?void 0:o.call(n))),J("div",{class:this.computedClass},f.length>0?f:(m=(r=this.$slots).default)==null?void 0:m.call(r))}}),rr=B({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(t){return We("ui",!1),{computedClass:D(()=>W("ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),Ft(t.widths,""),"statistics"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),bk={install(t){t.component(ur.name,ur),t.component(rr.name,rr),t.component(sa.name,sa),t.component(oa.name,oa)}},vk=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:pk,Card:fk,Comment:gk,Feed:hk,Item:_k,Statistic:bk},Symbol.toStringTag,{value:"Module"})),dr=B({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(t){const l=t.multiple?L([]):L(-1),n=r=>t.multiple?l.value.includes(r):l.value===r,o=r=>{const m=n(r);t.multiple?m?l.value=l.value.filter(f=>f!==r):l.value.push(r):l.value=m?-1:r};return We("isTabActive",n),We("updateActiveIndex",o),{computedClass:D(()=>W("ui",S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.styled,"styled"),"accordion"))}},render(){var t,l;const n=o=>(o.forEach((r,m)=>{r.props.index=m}),o);return e("div",{class:this.computedClass},[n((l=(t=this.$slots).default)==null?void 0:l.call(t))])}}),cr=B({name:"SuiAccordionAccordion",render(){var t,l;return J("div",{class:"accordion"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Bn=B({name:"SuiAccordionContent",props:{active:Boolean},setup(t){return{computedClass:D(()=>W(S(t.active,"active"),"content"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),mr=B({name:"SuiAccordionTab",props:{index:Number,title:String},setup(t){const l=ze("isTabActive"),n=ze("updateActiveIndex"),o=D(()=>W(S(l(t.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:n,titleClass:o}},render(){return e(Se,null,[e("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[e(hi,{name:"dropdown"},null),this.title]),e(Bn,{active:this.isTabActive(this.index)},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})])}}),pr=B({name:"SuiAccordionTitle",props:{active:Boolean},setup(t){return{computedClass:D(()=>W(S(t.active,"active"),"title"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),yk={install(t){t.component(dr.name,dr),t.component(cr.name,cr),t.component(Bn.name,Bn),t.component(mr.name,mr),t.component(pr.name,pr)}},Ck=(t,l,n)=>{t.clickOutside=o=>{t===o.target||t.contains(o.target)||l.value(o,t)},document.body.addEventListener("click",t.clickOutside)},wk=(t,l,n)=>{document.body.removeEventListener("click",t.clickOutside)},fs={mounted:Ck,unmounted:wk};function Ak(t,l={}){const n=L(t.value?"open":"closed"),o=()=>n.value=t.value?"open":"closed";at(t,p=>{n.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",o,!0)},m=p=>{p&&p.removeEventListener("animationend",o)},f=D((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:m,computeAnimationClass:f}}const Sk=B({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(t,{emit:l}){const n=L(!1),o=()=>{t.disabled||(n.value=!0)},r=()=>n.value=!1,m=()=>{t.disabled||l("select-day",t.date)},f=()=>{let s=new Date;return s.getFullYear()===t.date.year&&s.getMonth()===t.date.month&&s.getDate()===t.date.day},p=D(()=>W("link",S(n.value,"focus"),S(t.active&&!t.disabled,"active"),S(t.disabled,"adjacent disabled"),S(f(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:m,computedClass:p}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:ft(this.onClick,["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),kk=B({name:"SuiCalendarDateTable",setup(){const{calendarDays:t,updateSelectMode:l,set:n,add:o,subtract:r,selectedDate:m,setSelectedDate:f,selectType:p,updateVisible:s,formatDate:u}=ze(Xt);return{calendarDays:t,isEqualDay:g=>{if(!m.value)return!1;const c=m.value;return c.getFullYear()===g.year&&c.getMonth()===g.month&&c.getDate()===g.day},onSelectDay:g=>{if(n(g.year,"years"),n(g.month,"months"),n(g.day,"days"),p.value==="date"){let c=new Date(g.year,g.month,g.day);f(c),s(!1);return}l("hour")},updateSelectMode:l,formatDate:u,add:o,subtract:r}},render(){const t=()=>this.calendarDays.map((l,n)=>e("tr",null,[l.map(o=>e(Sk,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return e("table",{class:"ui celled center aligned unstackable table day seven column"},[e("thead",null,[e("tr",null,[e("th",{colspan:7},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"months")},[e("i",{class:"chevron right icon"},null)])])]),e("tr",null,[e("th",null,[a("S")]),e("th",null,[a("M")]),e("th",null,[a("T")]),e("th",null,[a("W")]),e("th",null,[a("T")]),e("th",null,[a("F")]),e("th",null,[a("S")])])]),e("tbody",null,[t()])])}}),me=B({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(t){const l=L(!1),n=()=>l.value=!0,o=()=>l.value=!1,r=D(()=>W("link",S(t.active,"active"),S(t.today,"today"),S(l.value,"focus")));return{onMouseEnter:n,onMouseLeave:o,computedClass:r}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:ft(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),$k=B({name:"SuiCalendarMonthTable",setup(){const{state:t,set:l,add:n,subtract:o,selectedDate:r,updateSelectMode:m}=ze(Xt);return{state:t,add:n,subtract:o,updateSelectMode:m,isActive:f=>r.value?t.year===r.value.getFullYear()&&t.month===f:!1,isThisMonth:f=>{let p=new Date;return f===p.getMonth()&&t.year===p.getFullYear()},onClickCell:f=>{l(f,"months"),m("day")}}},render(){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((n,o)=>e("tr",null,[e(me,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[t[o*3]]}),e(me,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[t[o*3+1]]}),e(me,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[t[o*3+2]]})]));return e("table",{class:"ui celled center aligned unstackable table month three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"years")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[l()])])}}),Tk=B({name:"SuiCalendarYearTable",setup(t){const{state:l,set:n,add:o,subtract:r,selectedDate:m,updateSelectMode:f}=ze(Xt),p=()=>o(10,"years"),s=()=>r(10,"years"),u=D(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:f,moveNextTwelveYears:p,movePrevTwelveYears:s,headerStartYear:u,isActive:g=>m.value?g===m.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{n(g,"years"),f("day")}}},render(){return e("table",{class:"ui celled center aligned unstackable table year three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,a(" - "),this.headerStartYear+11]),e("span",{class:"prev link",onClick:this.movePrevTwelveYears},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.moveNextTwelveYears},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),e(me,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),e(me,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),e("tr",null,[e(me,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),e(me,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),e(me,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),e("tr",null,[e(me,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),e(me,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),e(me,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),e("tr",null,[e(me,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),e(me,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),e(me,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),xk=B({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:t,state:l,set:n,add:o,subtract:r,formatDate:m,selectedDate:f}=ze(Xt);return{updateSelectMode:t,formatDate:m,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:p=>{n(p,"hours"),t("minute")},isActive:p=>{if(!f.value)return!1;let s=f.value.getFullYear(),u=f.value.getMonth(),g=f.value.getDate(),c=f.value.getHours();return l.year===s&&l.month===u&&l.day===g&&p===c}}},render(){return e("table",{class:"ui celled center aligned unstackable table hour four column"},[e("thead",null,[e("tr",null,[e("th",{colspan:4},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:this.onPrevClick},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.onNextClick},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[a("12:00 AM")]}),e(me,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[a("1:00 AM")]}),e(me,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[a("2:00 AM")]}),e(me,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[a("3:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[a("4:00 AM")]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[a("5:00 AM")]}),e(me,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[a("6:00 AM")]}),e(me,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[a("7:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[a("8:00 AM")]}),e(me,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[a("9:00 AM")]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[a("10:00 AM")]}),e(me,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[a("11:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[a("12:00 PM")]}),e(me,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[a("1:00 PM")]}),e(me,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[a("2:00 PM")]}),e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[a("3:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[a("4:00 PM")]}),e(me,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[a("5:00 PM")]}),e(me,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[a("6:00 PM")]}),e(me,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[a("7:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[a("8:00 PM")]}),e(me,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[a("9:00 PM")]}),e(me,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[a("10:00 PM")]}),e(me,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[a("11:00 PM")]})])])])}});function ht(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const Ek=B({name:"SuiCalendarMinuteTable",setup(){const{state:t,set:l,add:n,subtract:o,formatDate:r,updateSelectMode:m,updateVisible:f,selectedDate:p}=ze(Xt);return{add:n,subtract:o,formatDate:r,updateSelectMode:m,getTimeLabel:s=>{let u=t.hour%12,g=t.hour>12?"PM":"AM",c=s.toString().padStart(2,"0");return t.hour===0?`12:${c} AM`:t.hour===12?`12:${c} PM`:`${u}:${c} ${g}`},onClickCell:s=>{l(s,"minutes"),p.value=new Date(t.year,t.month,t.day,t.hour,t.minute),f(!1)},isActive:s=>{if(!p.value)return!1;let u=p.value.getFullYear(),g=p.value.getMonth(),c=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return t.year===u&&t.month===g&&t.day===c&&t.hour===h&&s===v}}},render(){let t,l,n,o,r,m,f,p,s,u,g,c;return e("table",{class:"ui celled center aligned unstackable table minute three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"days")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},ht(t=this.getTimeLabel(0))?t:{default:()=>[t]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},ht(l=this.getTimeLabel(5))?l:{default:()=>[l]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},ht(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),e("tr",null,[e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},ht(o=this.getTimeLabel(15))?o:{default:()=>[o]}),e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},ht(r=this.getTimeLabel(20))?r:{default:()=>[r]}),e(me,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},ht(m=this.getTimeLabel(25))?m:{default:()=>[m]})]),e("tr",null,[e(me,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},ht(f=this.getTimeLabel(30))?f:{default:()=>[f]}),e(me,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},ht(p=this.getTimeLabel(35))?p:{default:()=>[p]}),e(me,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},ht(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),e("tr",null,[e(me,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},ht(u=this.getTimeLabel(45))?u:{default:()=>[u]}),e(me,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},ht(g=this.getTimeLabel(50))?g:{default:()=>[g]}),e(me,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},ht(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),Bk=B({name:"SuiCalendarBody",setup(){const t=L(null),{visible:l,selectMode:n}=ze(Xt),{setupAnimation:o,removeAnimation:r,computeAnimationClass:m}=Ak(l);Qt(()=>o(t.value)),Ci(()=>r(t.value));const f=D(()=>W("ui popup calendar","bottom left","transition",m.value));return{rootRef:t,computedClass:f,selectMode:n}},render(){const t=()=>{switch(this.selectMode){case"day":return e(kk,null,null);case"month":return e($k,null,null);case"year":return e(Tk,null,null);case"hour":return e(xk,null,null);case"minute":return e(Ek,null,null)}};return e("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[t()])}}),Rk=B({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(t){const{visible:l,updateVisible:n,updateSelectMode:o,set:r,state:m,formatCalendarDate:f}=ze(Xt);return{visible:l,formatCalendarDate:f,onClick:()=>{l.value||(o("day"),t.value&&(r(t.value.getFullYear(),"years"),r(t.value.getMonth(),"months"))),n(!l.value)}}},render(){return e("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Pk=(t,l)=>{let n=new Date;n.setDate(1),n.setMonth(l),n.setFullYear(t);let o=n.getDay();return o>=7?o-7:o},zk=(t,l)=>{let n,o;return l===0?(n=11,o=t-1):(n=l-1,o=t),32-new Date(o,n,32).getDate()},Ya=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t];function Mk(){const t=L(!1),l=(y=!1)=>t.value=y,n=new Date;function o(y){if(!y)return;let A=y.getFullYear(),$=Ya(y.getMonth()),b=y.getDate(),w=y.getHours(),k=y.getMinutes(),T=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let E=k.toString().padStart(2,"0");return`${$} ${b}, ${A} ${w}:${E} ${T}`}const r=L("default"),m=L("day");function f(y){m.value=y}const p=L(null),s=y=>{p.value=y},u=Mt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),g=(y,A)=>{switch(A){case"years":u.year=y;break;case"months":u.month=y;break;case"days":u.day=y;break;case"hours":u.hour=y;break;case"minutes":u.minute=y}},c=(y,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()+y);break;case"months":$.setMonth($.getMonth()+y);break;case"days":$.setDate($.getDate()+y);break;case"hours":$.setHours($.getHours()+y);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},h=(y,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()-y);break;case"months":$.setMonth($.getMonth()-y);break;case"days":$.setDate($.getDate()-y);break;case"hours":$.setHours($.getHours()-y);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},v=(y="default")=>y==="date"?`${Ya(u.month)} ${u.year}`:`${Ya(u.month)} ${u.day}, ${u.year}`,d=D(()=>{let y=u.month,A=u.year;y>11&&(y=y%11-1,A+=1);let $=[],b=Pk(A,y),w=32-new Date(A,y,32).getDate(),k=zk(A,y),T=1;for(let E=0;E<6;E++){let z=[];if(E===0){for(let P=k-b+1;P<=k;P++){let F=y===0?11:y-1,X=y===0?A-1:A;z.push({day:P,month:F,year:X,currentMonth:!1})}let M=7-z.length;for(let P=0;P<M;P++)z.push({day:T,month:y,year:A,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>w){let P=y===11?0:y+1,F=y===11?A+1:A;z.push({day:T-w,month:P,year:F,currentMonth:!1})}else z.push({day:T,month:y,year:A,currentMonth:!0});T++}$.push(z)}return $});return{visible:t,updateVisible:l,calendarDays:d,formatCalendarDate:o,selectMode:m,updateSelectMode:f,selectType:r,selectedDate:p,setSelectedDate:s,state:u,set:g,add:c,subtract:h,formatDate:v}}const Xt=Symbol("useCalendar"),fr=B({name:"SuiCalendar",directives:{clickoutside:fs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(t,{emit:l}){const n=Mk();We(Xt,n);const{updateVisible:o,selectedDate:r}=n;return at(r,m=>{l("update:modelValue",m)}),{updateVisible:o}},render(){return ba(e("div",{class:"ui calendar"},[e("div",{class:"ui input left icon"},[e(Bk,null,null),e("i",{class:"calendar icon"},null),e(Rk,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[_a("clickoutside"),()=>this.updateVisible(!1)]])}}),Nk={install:t=>{t.component(fr.name,fr)}},gr=B({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(t,{emit:l}){const n=D(()=>W("ui",!t.label&&"fitted",S(t.disabled,"disabled"),S(t.indeterminate,"indeterminate"),S(t.readOnly,"read-only"),S(t.slider,"slider"),S(t.toggle,"toggle"),"checkbox")),o=D(()=>Array.isArray(t.modelValue)?t.modelValue.includes(t.value):t.modelValue);return{computedClass:n,checked:o,onClick:r=>{if(t.disabled||t.readOnly)return;let m;t.value?o.value?m=t.modelValue.filter(f=>t.value!==f):m=t.modelValue?[...t.modelValue,t.value]:[t.value]:m=!t.modelValue,l("change",r),l("click",r),l("update:modelValue",m)}}},render(){return e("div",{class:this.computedClass,onClick:this.onClick},[e("input",{type:"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),e("label",null,[this.label])])}}),Dk={install(t){t.component(gr.name,gr)}},hr=B({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(t){return{computedClass:D(()=>W("ui",S(t.active,"active"),S(t.inverted,"inverted"),S(t.page,"page"),S(t.simple,"simple"),Te(t.verticalAlign,"aligned"),"dimmer"))}},render(){var t,l;return J("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),_r=B({name:"SuiDimmerDimmable",components:{Segment:na},props:{blurring:Boolean},setup(t){return{computedClass:D(()=>W(S(t.blurring,"blurring"),"dimmable"))}},render(){var t,l;return J(na,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Fk={install(t){t.component(hr.name,hr),t.component(_r.name,_r)}},Ik=(t,l)=>t.map(n=>n[l]),Vk=B({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(t){return{computedClass:D(()=>W(S(t.filtered,"filtered"),S(!t.text&&!t.item||Array.isArray(t.item)&&t.item.length===0,"default"),"text"))}},render(){var t,l;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:m,text:f}=this.item;n=e(Se,null,[m&&e("i",{class:`${m} flag`},null),f])}else n=this.item;else n=this.text||this.placeholder;const o=typeof this.item=="object"?(t=this.item)==null?void 0:t.image:null,r=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return e(Se,null,[e("div",{class:this.computedClass},[o&&e(aa,o,null),r&&e(Ii,r,null),n]),e("i",{class:`${this.icon} icon`},null),this.$props.clearable&&e("i",{class:"remove icon",onClick:ft(()=>this.$emit("remove"),["stop"])},null)])}}),Lk=t=>{const l=Mt({visible:!1,animating:!1,direction:"down",multiple:t.multiple});return at(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function Ok(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const br=B({name:"SuiDropdown",directives:{clickoutside:fs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(t,{emit:l}){const n=Lk(t);We("useDropdown",n);const{state:o,show:r,hide:m}=n,f=D(()=>W("ui",S(t.button,"button"),S(t.clearable,"clearable"),S(t.compact,"compact"),S(t.floating,"floating"),S(t.fluid,"fluid"),S(!!t.icon,"icon"),S(t.inline,"inline"),S(t.item,"item"),S(t.labeled,"labeled"),S(t.multiple,"multiple"),S(t.scrolling,"scrolling"),S(t.selection,"selection"),S(t.search,"search"),S(t.simple,"simple"),$e(t.pointing,"pointing"),"dropdown",S(o.visible,"active visible"),S(o.direction==="up","upward"))),p=()=>o.visible?m():r(),s=()=>{t.search&&h.value&&h.value.focus(),r()},u=()=>m(),g=L(""),c=D(()=>t.options.filter(A=>typeof A=="string"?A.toLowerCase().includes(g.value.toLowerCase()):t.multiple&&Array.isArray(t.modelValue)?typeof A=="object"?!Ik(t.modelValue,"text").includes(A.text):t.modelValue.includes(A):A.text.toLowerCase().includes(g.value.toLowerCase()))),h=L(null),v=A=>g.value=A.target.value,d=A=>{if(g.value="",t.multiple){let $=Array.isArray(t.modelValue)?[...t.modelValue,A]:[A];return l("update:modelValue",$)}return l("update:modelValue",A)},y=A=>{if(Array.isArray(t.modelValue)){const $=t.modelValue.findIndex(b=>b===A);if($>-1){let b=Object.assign(t.modelValue);b.splice($,1),l("update:modelValue",b)}}};return We("selection",t.selection),{computedClass:f,onClick:p,openMenu:s,closeMenu:u,filteredText:g,filteredOptions:c,inputRef:h,onInput:v,onSelect:d,removeItem:y}},render(){var t,l;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(f=>typeof f=="object"?e("a",{class:"ui label"},[f.flag&&e("i",{class:`${f.flag} flag`},null),f.text,e("i",{class:"delete icon",onClick:ft(()=>this.removeItem(f),["stop"])},null)]):e("a",{class:"ui label"},[f,e("i",{class:"delete icon",onClick:ft(()=>this.removeItem(f),["stop"])},null)]))},o=()=>this.filteredOptions.filter(f=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(f):!0).map(f=>e(Rn,{item:f,active:this.$props.modelValue&&typeof f=="object"?f.text===this.$props.modelValue.text:f===this.$props.modelValue,text:typeof f=="object"?f.text:f,flag:typeof f=="object"&&Object.keys(f).includes("flag")?f.flag:"",image:f.image,label:f.label,disabled:f.disabled,onSelect:this.onSelect},null)),r=()=>{let f={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return e(Vk,kl(f,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},m=()=>{let f;return e(Pn,{search:this.$props.searchInMenu,onSearch:this.onInput},Ok(f=o())?f:{default:()=>[f]})};return ba(e("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&e("input",{ref:f=>this.inputRef=f,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:f=>this.onInput(f)},null),this.search&&this.multiple&&e("span",{class:"sizer"},null),r(),((l=(t=this.$slots).default)==null?void 0:l.call(t))||m()]),[[_a("clickoutside"),this.closeMenu]])}}),Rn=B({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(t,{emit:l}){const{state:n,hide:o}=ze("useDropdown");return{computedClass:D(()=>W(S(t.active,"active"),S(t.disabled,"disabled"),"item")),onClick:()=>{n.multiple||o(),l("select",t.item?t.item:t.text)}}},render(){return e("div",{class:this.computedClass,onClick:ft(this.onClick,["stop"])},[this.flag&&e("i",{class:`${this.flag} flag`},null),this.icon&&e("i",{class:`${this.icon} icon`},null),this.image&&e(aa,this.image,null),this.label&&e(Ii,this.label,null),this.description&&e("span",{class:"description"},[this.description]),this.text])}}),Pn=B({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(t,{emit:l,slots:n}){const{state:o}=ze("useDropdown"),r=L(null),m=D(()=>{let p=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return W("menu","transition",S(o.visible,"visible"),S(!o.visible&&!o.animating,"hidden"),S(o.animating,p()))});at(()=>o.visible,p=>{if(!p||!r.value)return;let s=r.value.parentElement;const{top:u,height:g}=s==null?void 0:s.getBoundingClientRect(),c=u-f.value.length*37,h=document.documentElement.clientHeight-u-g-f.value.length*37;o.direction=c>h?"up":"down"});const f=D(()=>{var p;let s=[],u=(p=n.default)==null?void 0:p.call(n);return u&&u.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:m,onSearchInput:p=>l("search",p)}},render(){var t,l,n,o;const r=()=>e(Se,null,[e("div",{class:"ui left icon input",onClick:ft(()=>{},["stop"])},[e("input",{type:"text",onInput:m=>this.onSearchInput(m)},null),e("i",{class:"search icon"},null)]),e("div",{class:"ui divider"},null)]);return e("div",{ref:m=>this.container=m,class:this.computedClass},[this.$slots.header&&e("div",{class:"header"},[(l=(t=this.$slots).header)==null?void 0:l.call(t)]),this.$props.search&&r(),(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Hk={install(t){t.component(br.name,br),t.component(Rn.name,Rn),t.component(Pn.name,Pn)}},vr=B({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(t){const l=L(t.active),n=()=>{l.value=!l.value},o=()=>t.source==="youtube"?[`//www.youtube.com/embed/${t.id}`,"?autohide=true",`&amp;autoplay=${t.autoplay}`,"&amp;jsapi=false"].join(""):t.url,r=D(()=>W("ui",t.aspectRatio,S(l.value,"active"),"embed"));return{active:l,getSrc:o,clickHandler:n,computedClass:r}},render(){let t=[J("i",{class:"video play icon"}),J("img",{class:"placeholder",src:this.placeholder})];return this.active&&t.push(J("div",{class:"embed"},J("iframe",{src:this.getSrc()}))),J("div",{class:this.computedClass,onClick:this.clickHandler},t)}}),jk={install(t){t.component(vr.name,vr)}},yr=B({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(t,{emit:l}){const n=L(t.modelValue?"open":"closed"),o=L(null),r=D(()=>n.value!=="closed");at(()=>t.modelValue,c=>{n.value=c?"opening":"closing"});const m=(c,h="scale")=>{switch(c){case"opening":return`animating ${h} in`;case"open":return"visible active";case"closing":return`visible active animating ${h} out`;case"closed":return"hidden"}},f=()=>n.value=t.modelValue?"open":"closed";Qt(()=>{var c;(c=o.value)==null||c.addEventListener("animationend",f,!0)}),Ci(()=>{var c;(c=o.value)==null||c.removeEventListener("animationend",f)});const p=D(()=>W("ui","page modals dimmer transition",m(n.value,"fade"))),s=D(()=>({display:r.value?"flex !important":"none !important",animationDuration:"500ms"})),u=D(()=>({display:r.value?"block !important":"none !important",animationDuration:"500ms"})),g=D(()=>W("ui",t.size,S(t.basic,"basic"),S(t.overlay,"overlay"),S(t.fullscreen,"fullscreen"),"modal","transition",m(n.value)));return{dimmerClass:p,dimmerStyle:s,modalStyle:u,computedClass:g,close:()=>{l("update:modelValue",!1)},root:o}},render(){return e(as,{to:"body"},{default:()=>{var t,l;return[e("div",{class:this.dimmerClass,style:this.dimmerStyle,onClick:()=>{this.closable&&this.close},ref:n=>this.root=n},[e("div",{class:this.computedClass,style:this.modalStyle,onClick:n=>n.stopPropagation()},[this.closeIcon&&e("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(t=this.$slots).default)==null?void 0:l.call(t)])])]}})}}),Cr=B({name:"SuiModalActions",render(){var t,l;return e("div",{class:"actions"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),wr=B({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(t){return{computedClass:D(()=>W(S(t.image,"image"),S(t.scrolling,"scrolling"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ar=B({name:"SuiModalDescription",render(){var t,l;return J("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Sr=B({name:"SuiModalHeader",render(){var t,l;return J("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qk={install(t){t.component(yr.name,yr),t.component(Cr.name,Cr),t.component(wr.name,wr),t.component(Ar.name,Ar),t.component(Sr.name,Sr)}},Jk=t=>{const l=L(!1),n=Za(t,"position"),o=L(null),r=Za(t,"trigger"),m=()=>{l.value=!0,Li(()=>p())},f=()=>{l.value=!1},p=()=>{if(!o.value||!r.value)return;let s=0,u=0;const g=o.value,c=r.value.$el;g.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:d,height:y}=c.getBoundingClientRect(),A=g.getBoundingClientRect(),{pageXOffset:$,pageYOffset:b}=window;if(n.value.includes("top")?(s=$+v,u=b+h-g.offsetTop-g.offsetHeight):(s=v,u=h+y-A.top),n.value.includes("right")){const w=d-A.width;s=v+w}if(n.value.includes("center")){const w=d/2-A.width/2;s=v+w}n.value==="right center"&&(s=v+d,u=h+y/2-A.top-A.height/2),n.value==="left center"&&(s=v-A.width,u=h+y/2-A.top-A.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${u}px)`};return{show:l,showPopup:m,hidePopup:f,placement:n,popupRef:o,triggerRef:r}},kr=B({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(t,{slots:l}){const{show:n,showPopup:o,hidePopup:r,popupRef:m,triggerRef:f}=Jk(t);gd(()=>{var h,v,d;(h=f.value)!=null&&h.$el&&((v=f.value)==null||v.$el.addEventListener("mouseenter",o),(d=f.value)==null||d.$el.addEventListener("mouseleave",r))});const p=L(n.value?"open":"close");D(()=>p.value!=="closed"),at(()=>n.value,h=>{p.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=n.value?"open":"closed";Qt(()=>{var h;(h=m.value)==null||h.addEventListener("animationend",u,!0)}),Ci(()=>{var h;(h=m.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},c=D(()=>W("ignored ui",t.position,t.size,S(t.basic,"basic"),S(t.flowing,"flowing"),S(t.inverted,"inverted"),$e(t.wide,"wide"),"popup transition",s(p.value,"scale")));return()=>e(as,{to:"body"},{default:()=>{var h;return[e("div",{ref:m,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[e("div",{class:c.value,style:g},[t.header&&e("div",{class:"header"},[t.header]),e("div",{class:"content"},[t.content?t.content:(h=l.default)==null?void 0:h.call(l)])])])]}})}}),Uk={install(t){t.component(kr.name,kr)}},$r=B({name:"SuiProgress",props:{active:Boolean,attached:String,color:String,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean},setup(t){const l=D(()=>W("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.indicating,"indicating"),S(t.inverted,"inverted"),S(t.success,"success"),S(t.warning,"warning"),Te(t.attached,"attached"),"progress")),n=D(()=>W($e(t.progress,"progress")));return()=>e("div",{class:l.value,"data-percent":t.percent},[e("div",{class:"bar",style:`width: ${t.percent}%; transition-duration: 300ms;`},[t.progress&&e("div",{class:n.value},[t.percent,a("%")])]),t.label&&e("div",{class:"label"},[t.label])])}}),Gk={install(t){t.component($r.name,$r)}},Yk=B({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(t){const l=ze("rating",L(0)),n=ze("updateRating"),o=ze("selectedIndex",L(0)),r=ze("updateSelectedIndex"),m=ze("clearable",!1),f=ze("disabled",!1),p=()=>{if(!f){if(m&&t.index===l.value){n(0),r(0);return}n(t.index)}},s=()=>{f||r(t.index)},u=D(()=>t.index<=l.value),g=D(()=>t.index<=o.value),c=D(()=>W(t.icon,S(u.value,"active"),S(g.value,"selected"),"icon"));return()=>e("i",{class:c.value,onClick:()=>p(),onMouseenter:()=>s()},null)}}),Tr=B({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(t,{emit:l}){const n=L(t.modelValue||t.defaultRating),o=L(!1),r=L(0),m=g=>{n.value=g,l("update:modelValue",g),l("change",g)},f=g=>r.value=g,p=()=>{t.disabled||(o.value=!0)},s=()=>{t.disabled||(o.value=!1,f(0))},u=D(()=>W("ui",t.color,t.icon,t.size,S(t.disabled,"disabled"),"rating",S(o.value,"selected")));return We("rating",n),We("updateRating",m),We("selectedIndex",r),We("updateSelectedIndex",f),We("clearable",t.clearable),We("disabled",t.disabled),()=>e("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>s()},[[...Array(t.maxRating)].map((g,c)=>e(Yk,{icon:t.icon,index:c+1},null))])}}),Wk={install(t){t.component(Tr.name,Tr)}},xr=B({name:"SuiSearch",props:{icon:String,placeholder:String},setup(t){return()=>e("div",{class:"ui search"},[e("div",{class:"ui icon input"},[e("input",{type:"text",class:"prompt",placeholder:t.placeholder},null),e("i",{class:"search icon"},null)]),e("div",{class:"results"},null)])}}),Kk={install(t){t.component(xr.name,xr)}},Er=B({name:"SuiSidebar",directives:{clickoutside:fs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(t,{emit:l}){const n=Mt({animating:!1}),o=D(()=>{const r=t.direction==="right"||t.direction==="left";return W("ui","sidebar",t.direction,t.animation,S(t.inverted,"inverted"),S(t.visible,"visible"),S(n.animating,"animating"),S(r,"vertical"),$e(t.icon,"icon"),"menu")});return at(()=>t.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),t.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const m=r.path||r.composedPath&&r.composedPath();m&&m.find(f=>f.classList&&f.classList.contains("pusher"))&&t.visible&&l("update:visible",!1)}}},render(){var t,l;return ba(e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]),[[_a("clickoutside"),this.onClickPusher]])}}),Qk={install:t=>{t.component(Er.name,Er)}};class Wa{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,n){return l.classList.contains(n)}}const Br=B({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(t,{emit:l}){const n=D(()=>W("ui",t.color,t.size,S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.reversed,"reversed"),S(t.vertical,"vertical"),$e(t.labeled,"labeled"),"slider")),o=()=>100*(t.modelValue[0]-t.min)/(t.max-t.min),r=()=>100*(t.modelValue[1]-t.min)/(t.max-t.min),m=D(()=>{if(t.range)return t.reversed&&!t.vertical?{right:o()+"%",width:r()-o()+"%"}:t.vertical?t.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let I=t.modelValue>t.max?t.max:t.modelValue;return t.reversed?t.vertical?{bottom:"0%",top:`${100-(I-t.min)/(t.max-t.min)*100}%`}:{right:"0%",left:`${100-(I-t.min)/(t.max-t.min)*100}%`}:t.vertical?{top:"0%",bottom:`${100-(I-t.min)/(t.max-t.min)*100}%`}:{left:"0%",right:`${100-(I-t.min)/(t.max-t.min)*100}%`}}),f=D(()=>{let I=t.range?t.modelValue[0]:t.modelValue>t.max?t.max:t.modelValue;return!t.reversed&&t.vertical?{top:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:t.reversed&&t.vertical?{top:"auto",bottom:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.reversed&&!t.vertical?{left:"auto",right:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{left:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),p=D(()=>{let I=t.modelValue[1]>t.max?t.max:t.modelValue[1];return t.reversed&&!t.vertical?{left:"auto",right:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.vertical?t.reversed?{top:"auto",bottom:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{top:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(I-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),s=D(()=>t.labels?t.labels:[...Array(t.max-t.min+1)].map((I,O)=>O*t.step+t.min)),u=()=>{var I,O;let ae=1,Y=g(),we=(t.vertical?(I=h.value)==null?void 0:I.clientHeight:(O=h.value)==null?void 0:O.clientWidth)||0,Ve=1;if(we>0)for(;we/Y*Ve<100;)Y%Ve||(ae=Ve),Ve+=1;return ae},g=()=>Math.round((t.max-t.min)/t.step),c=L(null),h=L(null),v=L(0),d=L(0),y=L(0),A=L(0),$=()=>{if(!c.value)return;let I=c.value.getBoundingClientRect();v.value=I.left+Wa.getWindowScrollLeft(),d.value=I.top+Wa.getWindowScrollTop(),y.value=c.value.offsetWidth,A.value=c.value.offsetHeight},b=L(0),w=I=>{let{pageX:O,pageY:ae}=I.touches?I.touches[0]:I,Y,we;t.vertical?Y=(d.value+A.value-ae)*100/A.value:Y=(O-v.value)*100/y.value,we=(t.max-t.min)*(Y/100)+t.min;const Ve=t.range?t.modelValue[b.value]:t.modelValue||0;we=Ve+Math.round(we/t.step-Ve/t.step)*t.step,t.reversed&&(we=t.max-we+t.min),t.vertical&&(we=t.max-we+t.min),k(we)},k=I=>{let O=I,ae;if(t.range)if(ae=t.modelValue?[...t.modelValue]:[],b.value===0){let Y=t.modelValue?t.modelValue[1]:t.max;O<t.min?O=t.min:O>Y&&(O=Y),ae[0]=O,ae[1]=ae[1]||t.max}else{let Y=t.modelValue?t.modelValue[0]:t.min;O>t.max?O=t.max:O<Y&&(O=Y),ae[0]=ae[0]||t.min,ae[1]=O}else O<t.min&&(O=t.min),O>t.max&&(O=t.max),ae=O;l("update:modelValue",ae),l("change",ae)},T=L(!1),E=I=>T.value=I,z=(I,O=0)=>{E(!0),$(),b.value=O,I.preventDefault()},M=I=>{T.value&&(E(!1),document.removeEventListener("mousemove",P),l("slideend",{event:I,value:t.modelValue}))},P=I=>{T.value&&(w(I),I==null||I.preventDefault())},F=(I,O=0)=>{t.disabled||(z(I,O),document.addEventListener("mousemove",P),document.addEventListener("mouseup",M),I.preventDefault())},X=(I,O=0)=>{switch(b.value=O,I.code){case"ArrowUp":t.vertical&&(t.reversed?H():ue()),I.preventDefault();break;case"ArrowDown":t.vertical&&(t.reversed?ue():H()),I.preventDefault();break;case"ArrowRight":t.reversed?ue():H(),I.preventDefault();break;case"ArrowLeft":t.reversed?H():ue(),I.preventDefault();break}},H=()=>{let I=0;t.range?I=t.modelValue[b.value]+t.step:I=t.modelValue+t.step,k(I)},ue=()=>{let I=0;t.range?I=t.modelValue[b.value]-t.step:I=t.modelValue-t.step,k(I)},ye=I=>{if(!t.disabled&&!Wa.hasClass(I.target,"thumb")){if(t.range){let O=(t.vertical?I.offsetY/I.target.clientHeight:I.offsetX/I.target.clientWidth)*100,ae=(o()+r())/2;O<ae?b.value=t.reversed?1:0:b.value=t.reversed?0:1}$(),w(I)}};return()=>e("div",{ref:I=>c.value=I,class:n.value,style:t.vertical?`height: ${t.verticalHeight}px;`:""},[e("div",{class:"inner",onClick:ye},[e("div",{class:"track",ref:I=>h.value=I},null),e("div",{class:"track-fill",style:m.value},null),e("div",{class:"thumb",style:f.value,onMousedown:I=>F(I),onTouchstart:I=>z(I),onTouchmove:I=>P(I),onTouchend:I=>M(I),onKeydown:I=>X(I),tabindex:0},null),t.range&&e("div",{class:"thumb second",style:p.value,onMousedown:I=>F(I,1),onTouchstart:I=>z(I,1),onTouchmove:I=>P(I),onTouchend:I=>M(I),onKeydown:I=>X(I,1),tabindex:0},null)]),t.labeled&&e("ul",{class:"auto labels"},[[...Array(g()+1)].map((I,O)=>{let ae=O/g();return O%u()?e("li",{class:"halftick label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},null):e("li",{class:"label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},[t.reversed&&!t.vertical?t.labels?t.labels[g()-O]:s.value[g()-O]:t.labels?t.labels[O]:s.value[O]])})])])}}),Xk={install(t){t.component(Br.name,Br)}},zn=B({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(t){return{computedClass:D(()=>W("ui tab segment",S(t.active,"active"),$e(t.attached,"attached")))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Rr=B({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(t,{emit:l,slots:n}){const o=L(t.activeIndex);at(()=>t.activeIndex,u=>{o.value=u});const r=(u,g)=>{o.value!==g&&(o.value=g,l("update:activeIndex",g),l("tab-change",{event:u,index:g})),l("tab-click",{event:u,index:g})},m=(u,g)=>{u.key==="Enter"&&r(u,g)},f=D(()=>{var u,g;let c=[];return(u=n.default)!=null&&u.call(n)&&((g=n.default)==null||g.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),p=D(()=>!t.secondary&&!t.pointing&&!t.text),s=D(()=>W("ui menu",S(p.value,"tabular attached"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.text,"text")));return{onClick:r,onKeyDown:m,tabIndex:o,tabs:f,tabMenuClass:s,isDefaultMenu:p}},render(){const t=()=>this.tabs.map((n,o)=>e("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[n.props.header])),l=()=>this.tabs.map((n,o)=>e(zn,kl(n.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,m;return[(m=(r=n.children).default)==null?void 0:m.call(r)]}}));return e(Se,null,[e("div",{class:this.tabMenuClass},[t()]),l()])}}),Zk={install(t){t.component(Rr.name,Rr),t.component(zn.name,zn)}},e0=Object.freeze(Object.defineProperty({__proto__:null,Accordion:yk,Calendar:Nk,Checkbox:Dk,Dimmer:Fk,Dropdown:Hk,Embed:jk,Modal:qk,Popup:Uk,Progress:Gk,Rating:Wk,Search:Kk,Sidebar:Qk,Slider:Xk,Tab:Zk},Symbol.toStringTag,{value:"Module"}));function t0(t){Object.values({...nk,...mk,...vk,...e0}).map(l=>t.use(l))}const i0={install:t0};(function(t){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],m=o.variable[1].inside,f=0;f<r.length;f++)m[r[f]]=t.languages.bash[r[f]];t.languages.shell=t.languages.bash})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(l,n){var o={};o["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};r["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var m={};m[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",m)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,l){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:Prism.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;const gs=wc(sg);gs.use(DS);gs.use(i0);gs.mount("#app");

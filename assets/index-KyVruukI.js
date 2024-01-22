(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(d){if(d.ep)return;d.ep=!0;const m=n(d);fetch(d.href,m)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ra(t,l){const n=new Set(t.split(","));return l?o=>n.has(o.toLowerCase()):o=>n.has(o)}const Pe={},Ti=[],it=()=>{},jc=()=>!1,bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Dn=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Fn=(t,l)=>{const n=t.indexOf(l);n>-1&&t.splice(n,1)},qc=Object.prototype.hasOwnProperty,xe=(t,l)=>qc.call(t,l),se=Array.isArray,xi=t=>Li(t)==="[object Map]",bi=t=>Li(t)==="[object Set]",ys=t=>Li(t)==="[object Date]",Uc=t=>Li(t)==="[object RegExp]",fe=t=>typeof t=="function",He=t=>typeof t=="string",Kt=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",In=t=>(Fe(t)||fe(t))&&fe(t.then)&&fe(t.catch),Dr=Object.prototype.toString,Li=t=>Dr.call(t),Jc=t=>Li(t).slice(8,-1),Fr=t=>Li(t)==="[object Object]",Nn=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const l=Object.create(null);return n=>l[n]||(l[n]=t(n))},Gc=/-(\w)/g,et=da(t=>t.replace(Gc,(l,n)=>n?n.toUpperCase():"")),Yc=/\B([A-Z])/g,ct=da(t=>t.replace(Yc,"-$1").toLowerCase()),vl=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=da(t=>t?`on${vl(t)}`:""),yt=(t,l)=>!Object.is(t,l),Ei=(t,l)=>{for(let n=0;n<t.length;n++)t[n](l)},Jl=(t,l,n)=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,value:n})},ol=t=>{const l=parseFloat(t);return isNaN(l)?t:l},Gl=t=>{const l=He(t)?Number(t):NaN;return isNaN(l)?t:l};let Cs;const Ir=()=>Cs||(Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Wc="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Kc=ra(Wc);function yl(t){if(se(t)){const l={};for(let n=0;n<t.length;n++){const o=t[n],d=He(o)?em(o):yl(o);if(d)for(const m in d)l[m]=d[m]}return l}else if(He(t)||Fe(t))return t}const Qc=/;(?![^(]*\))/g,Xc=/:([^]+)/,Zc=/\/\*[^]*?\*\//g;function em(t){const l={};return t.replace(Zc,"").split(Qc).forEach(n=>{if(n){const o=n.split(Xc);o.length>1&&(l[o[0].trim()]=o[1].trim())}}),l}function Cl(t){let l="";if(He(t))l=t;else if(se(t))for(let n=0;n<t.length;n++){const o=Cl(t[n]);o&&(l+=o+" ")}else if(Fe(t))for(const n in t)t[n]&&(l+=n+" ");return l.trim()}function tm(t){if(!t)return null;let{class:l,style:n}=t;return l&&!He(l)&&(t.class=Cl(l)),n&&(t.style=yl(n)),t}const im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lm=ra(im);function Nr(t){return!!t||t===""}function am(t,l){if(t.length!==l.length)return!1;let n=!0;for(let o=0;n&&o<t.length;o++)n=zt(t[o],l[o]);return n}function zt(t,l){if(t===l)return!0;let n=ys(t),o=ys(l);if(n||o)return n&&o?t.getTime()===l.getTime():!1;if(n=Kt(t),o=Kt(l),n||o)return t===l;if(n=se(t),o=se(l),n||o)return n&&o?am(t,l):!1;if(n=Fe(t),o=Fe(l),n||o){if(!n||!o)return!1;const d=Object.keys(t).length,m=Object.keys(l).length;if(d!==m)return!1;for(const p in t){const f=t.hasOwnProperty(p),s=l.hasOwnProperty(p);if(f&&!s||!f&&s||!zt(t[p],l[p]))return!1}}return String(t)===String(l)}function ca(t,l){return t.findIndex(n=>zt(n,l))}const Ee=t=>He(t)?t:t==null?"":se(t)||Fe(t)&&(t.toString===Dr||!fe(t.toString))?JSON.stringify(t,Vr,2):String(t),Vr=(t,l)=>l&&l.__v_isRef?Vr(t,l.value):xi(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[o,d],m)=>(n[Pa(o,m)+" =>"]=d,n),{})}:bi(l)?{[`Set(${l.size})`]:[...l.values()].map(n=>Pa(n))}:Kt(l)?Pa(l):Fe(l)&&!se(l)&&!Fr(l)?String(l):l,Pa=(t,l="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:l})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class Vn{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!l&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const n=ut;try{return ut=this,l()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(l){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const d=this.parent.scopes.pop();d&&d!==this&&(this.parent.scopes[this.index]=d,d.index=this.index)}this.parent=void 0,this._active=!1}}}function nm(t){return new Vn(t)}function Lr(t,l=ut){l&&l.active&&l.effects.push(t)}function Or(){return ut}function sm(t){ut&&ut.cleanups.push(t)}let si;class zi{constructor(l,n,o,d){this.fn=l,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Lr(this,d)}get dirty(){if(this._dirtyLevel===1){vi();for(let l=0;l<this._depsLength;l++){const n=this.deps[l];if(n.computed&&(om(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),yi()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=Wt,n=si;try{return Wt=!0,si=this,this._runnings++,ws(this),this.fn()}finally{As(this),this._runnings--,si=n,Wt=l}}stop(){var l;this.active&&(ws(this),As(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function om(t){return t.value}function ws(t){t._trackId++,t._depsLength=0}function As(t){if(t.deps&&t.deps.length>t._depsLength){for(let l=t._depsLength;l<t.deps.length;l++)Hr(t.deps[l],t);t.deps.length=t._depsLength}}function Hr(t,l){const n=t.get(l);n!==void 0&&l._trackId!==n&&(t.delete(l),t.size===0&&t.cleanup())}function um(t,l){t.effect instanceof zi&&(t=t.effect.fn);const n=new zi(t,it,()=>{n.dirty&&n.run()});l&&(Oe(n,l),l.scope&&Lr(n,l.scope)),(!l||!l.lazy)&&n.run();const o=n.run.bind(n);return o.effect=n,o}function rm(t){t.effect.stop()}let Wt=!0,Qa=0;const jr=[];function vi(){jr.push(Wt),Wt=!1}function yi(){const t=jr.pop();Wt=t===void 0?!0:t}function Ln(){Qa++}function On(){for(Qa--;!Qa&&Xa.length;)Xa.shift()()}function qr(t,l,n){if(l.get(t)!==t._trackId){l.set(t,t._trackId);const o=t.deps[t._depsLength];o!==l?(o&&Hr(o,t),t.deps[t._depsLength++]=l):t._depsLength++}}const Xa=[];function Ur(t,l,n){Ln();for(const o of t.keys())if(o._dirtyLevel<l&&t.get(o)===o._trackId){const d=o._dirtyLevel;o._dirtyLevel=l,d===0&&(o._shouldSchedule=!0,o.trigger())}Jr(t),On()}function Jr(t){for(const l of t.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&t.get(l)===l._trackId&&(l._shouldSchedule=!1,Xa.push(l.scheduler))}const Gr=(t,l)=>{const n=new Map;return n.cleanup=t,n.computed=l,n},Yl=new WeakMap,oi=Symbol(""),Za=Symbol("");function nt(t,l,n){if(Wt&&si){let o=Yl.get(t);o||Yl.set(t,o=new Map);let d=o.get(n);d||o.set(n,d=Gr(()=>o.delete(n))),qr(si,d)}}function Rt(t,l,n,o,d,m){const p=Yl.get(t);if(!p)return;let f=[];if(l==="clear")f=[...p.values()];else if(n==="length"&&se(t)){const s=Number(o);p.forEach((u,g)=>{(g==="length"||!Kt(g)&&g>=s)&&f.push(u)})}else switch(n!==void 0&&f.push(p.get(n)),l){case"add":se(t)?Nn(n)&&f.push(p.get("length")):(f.push(p.get(oi)),xi(t)&&f.push(p.get(Za)));break;case"delete":se(t)||(f.push(p.get(oi)),xi(t)&&f.push(p.get(Za)));break;case"set":xi(t)&&f.push(p.get(oi));break}Ln();for(const s of f)s&&Ur(s,2);On()}function dm(t,l){var n;return(n=Yl.get(t))==null?void 0:n.get(l)}const cm=ra("__proto__,__v_isRef,__isVue"),Yr=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt)),Ss=mm();function mm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(l=>{t[l]=function(...n){const o=ke(this);for(let m=0,p=this.length;m<p;m++)nt(o,"get",m+"");const d=o[l](...n);return d===-1||d===!1?o[l](...n.map(ke)):d}}),["push","pop","shift","unshift","splice"].forEach(l=>{t[l]=function(...n){vi(),Ln();const o=ke(this)[l].apply(this,n);return On(),yi(),o}}),t}function fm(t){const l=ke(this);return nt(l,"has",t),l.hasOwnProperty(t)}class Wr{constructor(l=!1,n=!1){this._isReadonly=l,this._shallow=n}get(l,n,o){const d=this._isReadonly,m=this._shallow;if(n==="__v_isReactive")return!d;if(n==="__v_isReadonly")return d;if(n==="__v_isShallow")return m;if(n==="__v_raw")return o===(d?m?td:ed:m?Zr:Xr).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(o)?l:void 0;const p=se(l);if(!d){if(p&&xe(Ss,n))return Reflect.get(Ss,n,o);if(n==="hasOwnProperty")return fm}const f=Reflect.get(l,n,o);return(Kt(n)?Yr.has(n):cm(n))||(d||nt(l,"get",n),m)?f:Ke(f)?p&&Nn(n)?f:f.value:Fe(f)?d?jn(f):Mt(f):f}}class Kr extends Wr{constructor(l=!1){super(!1,l)}set(l,n,o,d){let m=l[n];if(!this._shallow){const s=mi(m);if(!ul(o)&&!mi(o)&&(m=ke(m),o=ke(o)),!se(l)&&Ke(m)&&!Ke(o))return s?!1:(m.value=o,!0)}const p=se(l)&&Nn(n)?Number(n)<l.length:xe(l,n),f=Reflect.set(l,n,o,d);return l===ke(d)&&(p?yt(o,m)&&Rt(l,"set",n,o):Rt(l,"add",n,o)),f}deleteProperty(l,n){const o=xe(l,n);l[n];const d=Reflect.deleteProperty(l,n);return d&&o&&Rt(l,"delete",n,void 0),d}has(l,n){const o=Reflect.has(l,n);return(!Kt(n)||!Yr.has(n))&&nt(l,"has",n),o}ownKeys(l){return nt(l,"iterate",se(l)?"length":oi),Reflect.ownKeys(l)}}class Qr extends Wr{constructor(l=!1){super(!0,l)}set(l,n){return!0}deleteProperty(l,n){return!0}}const pm=new Kr,gm=new Qr,hm=new Kr(!0),_m=new Qr(!0),Hn=t=>t,ma=t=>Reflect.getPrototypeOf(t);function El(t,l,n=!1,o=!1){t=t.__v_raw;const d=ke(t),m=ke(l);n||(yt(l,m)&&nt(d,"get",l),nt(d,"get",m));const{has:p}=ma(d),f=o?Hn:n?Jn:rl;if(p.call(d,l))return f(t.get(l));if(p.call(d,m))return f(t.get(m));t!==d&&t.get(l)}function Bl(t,l=!1){const n=this.__v_raw,o=ke(n),d=ke(t);return l||(yt(t,d)&&nt(o,"has",t),nt(o,"has",d)),t===d?n.has(t):n.has(t)||n.has(d)}function Rl(t,l=!1){return t=t.__v_raw,!l&&nt(ke(t),"iterate",oi),Reflect.get(t,"size",t)}function ks(t){t=ke(t);const l=ke(this);return ma(l).has.call(l,t)||(l.add(t),Rt(l,"add",t,t)),this}function $s(t,l){l=ke(l);const n=ke(this),{has:o,get:d}=ma(n);let m=o.call(n,t);m||(t=ke(t),m=o.call(n,t));const p=d.call(n,t);return n.set(t,l),m?yt(l,p)&&Rt(n,"set",t,l):Rt(n,"add",t,l),this}function Ts(t){const l=ke(this),{has:n,get:o}=ma(l);let d=n.call(l,t);d||(t=ke(t),d=n.call(l,t)),o&&o.call(l,t);const m=l.delete(t);return d&&Rt(l,"delete",t,void 0),m}function xs(){const t=ke(this),l=t.size!==0,n=t.clear();return l&&Rt(t,"clear",void 0,void 0),n}function Pl(t,l){return function(o,d){const m=this,p=m.__v_raw,f=ke(p),s=l?Hn:t?Jn:rl;return!t&&nt(f,"iterate",oi),p.forEach((u,g)=>o.call(d,s(u),s(g),m))}}function zl(t,l,n){return function(...o){const d=this.__v_raw,m=ke(d),p=xi(m),f=t==="entries"||t===Symbol.iterator&&p,s=t==="keys"&&p,u=d[t](...o),g=n?Hn:l?Jn:rl;return!l&&nt(m,"iterate",s?Za:oi),{next(){const{value:c,done:h}=u.next();return h?{value:c,done:h}:{value:f?[g(c[0]),g(c[1])]:g(c),done:h}},[Symbol.iterator](){return this}}}}function Nt(t){return function(...l){return t==="delete"?!1:t==="clear"?void 0:this}}function bm(){const t={get(m){return El(this,m)},get size(){return Rl(this)},has:Bl,add:ks,set:$s,delete:Ts,clear:xs,forEach:Pl(!1,!1)},l={get(m){return El(this,m,!1,!0)},get size(){return Rl(this)},has:Bl,add:ks,set:$s,delete:Ts,clear:xs,forEach:Pl(!1,!0)},n={get(m){return El(this,m,!0)},get size(){return Rl(this,!0)},has(m){return Bl.call(this,m,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Pl(!0,!1)},o={get(m){return El(this,m,!0,!0)},get size(){return Rl(this,!0)},has(m){return Bl.call(this,m,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Pl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{t[m]=zl(m,!1,!1),n[m]=zl(m,!0,!1),l[m]=zl(m,!1,!0),o[m]=zl(m,!0,!0)}),[t,n,l,o]}const[vm,ym,Cm,wm]=bm();function fa(t,l){const n=l?t?wm:Cm:t?ym:vm;return(o,d,m)=>d==="__v_isReactive"?!t:d==="__v_isReadonly"?t:d==="__v_raw"?o:Reflect.get(xe(n,d)&&d in o?n:o,d,m)}const Am={get:fa(!1,!1)},Sm={get:fa(!1,!0)},km={get:fa(!0,!1)},$m={get:fa(!0,!0)},Xr=new WeakMap,Zr=new WeakMap,ed=new WeakMap,td=new WeakMap;function Tm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xm(t){return t.__v_skip||!Object.isExtensible(t)?0:Tm(Jc(t))}function Mt(t){return mi(t)?t:pa(t,!1,pm,Am,Xr)}function id(t){return pa(t,!1,hm,Sm,Zr)}function jn(t){return pa(t,!0,gm,km,ed)}function Em(t){return pa(t,!0,_m,$m,td)}function pa(t,l,n,o,d){if(!Fe(t)||t.__v_raw&&!(l&&t.__v_isReactive))return t;const m=d.get(t);if(m)return m;const p=xm(t);if(p===0)return t;const f=new Proxy(t,p===2?o:n);return d.set(t,f),f}function ui(t){return mi(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function ul(t){return!!(t&&t.__v_isShallow)}function qn(t){return ui(t)||mi(t)}function ke(t){const l=t&&t.__v_raw;return l?ke(l):t}function Un(t){return Jl(t,"__v_skip",!0),t}const rl=t=>Fe(t)?Mt(t):t,Jn=t=>Fe(t)?jn(t):t;class ld{constructor(l,n,o,d){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zi(()=>l(this._value),()=>Bi(this,1),()=>this.dep&&Jr(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!d,this.__v_isReadonly=o}get value(){const l=ke(this);return(!l._cacheable||l.effect.dirty)&&yt(l._value,l._value=l.effect.run())&&Bi(l,2),Gn(l),l.effect._dirtyLevel>=1&&Bi(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function Bm(t,l,n=!1){let o,d;const m=fe(t);return m?(o=t,d=it):(o=t.get,d=t.set),new ld(o,d,m||!d,n)}function Gn(t){Wt&&si&&(t=ke(t),qr(si,t.dep||(t.dep=Gr(()=>t.dep=void 0,t instanceof ld?t:void 0))))}function Bi(t,l=2,n){t=ke(t);const o=t.dep;o&&Ur(o,l)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function L(t){return nd(t,!1)}function ad(t){return nd(t,!0)}function nd(t,l){return Ke(t)?t:new Rm(t,l)}class Rm{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:ke(l),this._value=n?l:rl(l)}get value(){return Gn(this),this._value}set value(l){const n=this.__v_isShallow||ul(l)||mi(l);l=n?l:ke(l),yt(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:rl(l),Bi(this,2))}}function Pm(t){Bi(t,2)}function ri(t){return Ke(t)?t.value:t}function zm(t){return fe(t)?t():ri(t)}const Mm={get:(t,l,n)=>ri(Reflect.get(t,l,n)),set:(t,l,n,o)=>{const d=t[l];return Ke(d)&&!Ke(n)?(d.value=n,!0):Reflect.set(t,l,n,o)}};function Yn(t){return ui(t)?t:new Proxy(t,Mm)}class Dm{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=l(()=>Gn(this),()=>Bi(this));this._get=n,this._set=o}get value(){return this._get()}set value(l){this._set(l)}}function sd(t){return new Dm(t)}function Fm(t){const l=se(t)?new Array(t.length):{};for(const n in t)l[n]=od(t,n);return l}class Im{constructor(l,n,o){this._object=l,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return dm(ke(this._object),this._key)}}class Nm{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function en(t,l,n){return Ke(t)?t:fe(t)?new Nm(t):Fe(t)&&arguments.length>1?od(t,l,n):L(t)}function od(t,l,n){const o=t[l];return Ke(o)?o:new Im(t,l,n)}const Vm={GET:"get",HAS:"has",ITERATE:"iterate"},Lm={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Om(t,l){}const Hm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},jm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Pt(t,l,n,o){let d;try{d=o?t(...o):t()}catch(m){Ci(m,l,n)}return d}function ft(t,l,n,o){if(fe(t)){const m=Pt(t,l,n,o);return m&&In(m)&&m.catch(p=>{Ci(p,l,n)}),m}const d=[];for(let m=0;m<t.length;m++)d.push(ft(t[m],l,n,o));return d}function Ci(t,l,n,o=!0){const d=l?l.vnode:null;if(l){let m=l.parent;const p=l.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;m;){const u=m.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](t,p,f)===!1)return}m=m.parent}const s=l.appContext.config.errorHandler;if(s){Pt(s,null,10,[t,p,f]);return}}qm(t,n,d,o)}function qm(t,l,n,o=!0){console.error(t)}let dl=!1,tn=!1;const Qe=[];let St=0;const Ri=[];let jt=null,ai=0;const ud=Promise.resolve();let Wn=null;function Oi(t){const l=Wn||ud;return t?l.then(this?t.bind(this):t):l}function Um(t){let l=St+1,n=Qe.length;for(;l<n;){const o=l+n>>>1,d=Qe[o],m=cl(d);m<t||m===t&&d.pre?l=o+1:n=o}return l}function ga(t){(!Qe.length||!Qe.includes(t,dl&&t.allowRecurse?St+1:St))&&(t.id==null?Qe.push(t):Qe.splice(Um(t.id),0,t),rd())}function rd(){!dl&&!tn&&(tn=!0,Wn=ud.then(dd))}function Jm(t){const l=Qe.indexOf(t);l>St&&Qe.splice(l,1)}function Wl(t){se(t)?Ri.push(...t):(!jt||!jt.includes(t,t.allowRecurse?ai+1:ai))&&Ri.push(t),rd()}function Es(t,l,n=dl?St+1:0){for(;n<Qe.length;n++){const o=Qe[n];if(o&&o.pre){if(t&&o.id!==t.uid)continue;Qe.splice(n,1),n--,o()}}}function Kl(t){if(Ri.length){const l=[...new Set(Ri)].sort((n,o)=>cl(n)-cl(o));if(Ri.length=0,jt){jt.push(...l);return}for(jt=l,ai=0;ai<jt.length;ai++)jt[ai]();jt=null,ai=0}}const cl=t=>t.id==null?1/0:t.id,Gm=(t,l)=>{const n=cl(t)-cl(l);if(n===0){if(t.pre&&!l.pre)return-1;if(l.pre&&!t.pre)return 1}return n};function dd(t){tn=!1,dl=!0,Qe.sort(Gm);try{for(St=0;St<Qe.length;St++){const l=Qe[St];l&&l.active!==!1&&Pt(l,null,14)}}finally{St=0,Qe.length=0,Kl(),dl=!1,Wn=null,(Qe.length||Ri.length)&&dd()}}let ki,Ml=[];function cd(t,l){var n,o;ki=t,ki?(ki.enabled=!0,Ml.forEach(({event:d,args:m})=>ki.emit(d,...m)),Ml=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{cd(m,l)}),setTimeout(()=>{ki||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ml=[])},3e3)):Ml=[]}function Ym(t,l,...n){if(t.isUnmounted)return;const o=t.vnode.props||Pe;let d=n;const m=l.startsWith("update:"),p=m&&l.slice(7);if(p&&p in o){const g=`${p==="modelValue"?"model":p}Modifiers`,{number:c,trim:h}=o[g]||Pe;h&&(d=n.map(v=>He(v)?v.trim():v)),c&&(d=n.map(ol))}let f,s=o[f=el(l)]||o[f=el(et(l))];!s&&m&&(s=o[f=el(ct(l))]),s&&ft(s,t,6,d);const u=o[f+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[f])return;t.emitted[f]=!0,ft(u,t,6,d)}}function md(t,l,n=!1){const o=l.emitsCache,d=o.get(t);if(d!==void 0)return d;const m=t.emits;let p={},f=!1;if(!fe(t)){const s=u=>{const g=md(u,l,!0);g&&(f=!0,Oe(p,g))};!n&&l.mixins.length&&l.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return!m&&!f?(Fe(t)&&o.set(t,null),null):(se(m)?m.forEach(s=>p[s]=null):Oe(p,m),Fe(t)&&o.set(t,p),p)}function ha(t,l){return!t||!bl(l)?!1:(l=l.slice(2).replace(/Once$/,""),xe(t,l[0].toLowerCase()+l.slice(1))||xe(t,ct(l))||xe(t,l))}let je=null,_a=null;function ml(t){const l=je;return je=t,_a=t&&t.type.__scopeId||null,l}function wl(t){_a=t}function Al(){_a=null}const Wm=t=>i;function i(t,l=je,n){if(!l||t._n)return t;const o=(...d)=>{o._d&&dn(-1);const m=ml(l);let p;try{p=t(...d)}finally{ml(m),o._d&&dn(1)}return p};return o._n=!0,o._c=!0,o._d=!0,o}function ql(t){const{type:l,vnode:n,proxy:o,withProxy:d,props:m,propsOptions:[p],slots:f,attrs:s,emit:u,render:g,renderCache:c,data:h,setupState:v,ctx:r,inheritAttrs:y}=t;let A,$;const b=ml(t);try{if(n.shapeFlag&4){const k=d||o,T=k;A=rt(g.call(T,k,c,m,v,h,r)),$=s}else{const k=l;A=rt(k.length>1?k(m,{attrs:s,slots:f,emit:u}):k(m,null)),$=l.props?s:Qm(s)}}catch(k){ll.length=0,Ci(k,t,1),A=e(Xe)}let w=A;if($&&y!==!1){const k=Object.keys($),{shapeFlag:T}=w;k.length&&T&7&&(p&&k.some(Dn)&&($=Xm($,p)),w=$t(w,$))}return n.dirs&&(w=$t(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),A=w,ml(b),A}function Km(t,l=!0){let n;for(let o=0;o<t.length;o++){const d=t[o];if(kt(d)){if(d.type!==Xe||d.children==="v-if"){if(n)return;n=d}}else return}return n}const Qm=t=>{let l;for(const n in t)(n==="class"||n==="style"||bl(n))&&((l||(l={}))[n]=t[n]);return l},Xm=(t,l)=>{const n={};for(const o in t)(!Dn(o)||!(o.slice(9)in l))&&(n[o]=t[o]);return n};function Zm(t,l,n){const{props:o,children:d,component:m}=t,{props:p,children:f,patchFlag:s}=l,u=m.emitsOptions;if(l.dirs||l.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return o?Bs(o,p,u):!!p;if(s&8){const g=l.dynamicProps;for(let c=0;c<g.length;c++){const h=g[c];if(p[h]!==o[h]&&!ha(u,h))return!0}}}else return(d||f)&&(!f||!f.$stable)?!0:o===p?!1:o?p?Bs(o,p,u):!0:!!p;return!1}function Bs(t,l,n){const o=Object.keys(l);if(o.length!==Object.keys(t).length)return!0;for(let d=0;d<o.length;d++){const m=o[d];if(l[m]!==t[m]&&!ha(n,m))return!0}return!1}function Kn({vnode:t,parent:l},n){for(;l;){const o=l.subTree;if(o.suspense&&o.suspense.activeBranch===t&&(o.el=t.el),o===t)(t=l.vnode).el=n,l=l.parent;else break}}const Qn="components",ef="directives";function _(t,l){return Xn(Qn,t,!0,l)||t}const fd=Symbol.for("v-ndc");function tf(t){return He(t)?Xn(Qn,t,!1)||t:t||fd}function ba(t){return Xn(ef,t)}function Xn(t,l,n=!0,o=!1){const d=je||Ue;if(d){const m=d.type;if(t===Qn){const f=gn(m,!1);if(f&&(f===l||f===et(l)||f===vl(et(l))))return m}const p=Rs(d[t]||m[t],l)||Rs(d.appContext[t],l);return!p&&o?m:p}}function Rs(t,l){return t&&(t[l]||t[et(l)]||t[vl(et(l))])}const pd=t=>t.__isSuspense;let ln=0;const lf={name:"Suspense",__isSuspense:!0,process(t,l,n,o,d,m,p,f,s,u){if(t==null)nf(l,n,o,d,m,p,f,s,u);else{if(m&&m.deps>0){l.suspense=t.suspense;return}sf(t,l,n,o,d,p,f,s,u)}},hydrate:of,create:Zn,normalize:uf},af=lf;function fl(t,l){const n=t.props&&t.props[l];fe(n)&&n()}function nf(t,l,n,o,d,m,p,f,s){const{p:u,o:{createElement:g}}=s,c=g("div"),h=t.suspense=Zn(t,d,o,l,c,n,m,p,f,s);u(null,h.pendingBranch=t.ssContent,c,null,o,h,m,p),h.deps>0?(fl(t,"onPending"),fl(t,"onFallback"),u(null,t.ssFallback,l,n,o,null,m,p),Pi(h,t.ssFallback)):h.resolve(!1,!0)}function sf(t,l,n,o,d,m,p,f,{p:s,um:u,o:{createElement:g}}){const c=l.suspense=t.suspense;c.vnode=l,l.el=t.el;const h=l.ssContent,v=l.ssFallback,{activeBranch:r,pendingBranch:y,isInFallback:A,isHydrating:$}=c;if(y)c.pendingBranch=h,vt(h,y)?(s(y,h,c.hiddenContainer,null,d,c,m,p,f),c.deps<=0?c.resolve():A&&($||(s(r,v,n,o,d,null,m,p,f),Pi(c,v)))):(c.pendingId=ln++,$?(c.isHydrating=!1,c.activeBranch=y):u(y,d,c),c.deps=0,c.effects.length=0,c.hiddenContainer=g("div"),A?(s(null,h,c.hiddenContainer,null,d,c,m,p,f),c.deps<=0?c.resolve():(s(r,v,n,o,d,null,m,p,f),Pi(c,v))):r&&vt(h,r)?(s(r,h,n,o,d,c,m,p,f),c.resolve(!0)):(s(null,h,c.hiddenContainer,null,d,c,m,p,f),c.deps<=0&&c.resolve()));else if(r&&vt(h,r))s(r,h,n,o,d,c,m,p,f),Pi(c,h);else if(fl(l,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=ln++,s(null,h,c.hiddenContainer,null,d,c,m,p,f),c.deps<=0)c.resolve();else{const{timeout:b,pendingId:w}=c;b>0?setTimeout(()=>{c.pendingId===w&&c.fallback(v)},b):b===0&&c.fallback(v)}}function Zn(t,l,n,o,d,m,p,f,s,u,g=!1){const{p:c,m:h,um:v,n:r,o:{parentNode:y,remove:A}}=u;let $;const b=rf(t);b&&l!=null&&l.pendingBranch&&($=l.pendingId,l.deps++);const w=t.props?Gl(t.props.timeout):void 0,k=m,T={vnode:t,parent:l,parentComponent:n,namespace:p,container:o,hiddenContainer:d,deps:0,pendingId:ln++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,z=!1){const{vnode:M,activeBranch:P,pendingBranch:I,pendingId:X,effects:H,parentComponent:ue,container:ye}=T;let N=!1;T.isHydrating?T.isHydrating=!1:E||(N=P&&I.transition&&I.transition.mode==="out-in",N&&(P.transition.afterLeave=()=>{X===T.pendingId&&(h(I,ye,m===k?r(P):m,0),Wl(H))}),P&&(y(P.el)!==T.hiddenContainer&&(m=r(P)),v(P,ue,T,!0)),N||h(I,ye,m,0)),Pi(T,I),T.pendingBranch=null,T.isInFallback=!1;let O=T.parent,ae=!1;for(;O;){if(O.pendingBranch){O.effects.push(...H),ae=!0;break}O=O.parent}!ae&&!N&&Wl(H),T.effects=[],b&&l&&l.pendingBranch&&$===l.pendingId&&(l.deps--,l.deps===0&&!z&&l.resolve()),fl(M,"onResolve")},fallback(E){if(!T.pendingBranch)return;const{vnode:z,activeBranch:M,parentComponent:P,container:I,namespace:X}=T;fl(z,"onFallback");const H=r(M),ue=()=>{T.isInFallback&&(c(null,E,I,H,P,null,X,f,s),Pi(T,E))},ye=E.transition&&E.transition.mode==="out-in";ye&&(M.transition.afterLeave=ue),T.isInFallback=!0,v(M,P,null,!0),ye||ue()},move(E,z,M){T.activeBranch&&h(T.activeBranch,E,z,M),T.container=E},next(){return T.activeBranch&&r(T.activeBranch)},registerDep(E,z){const M=!!T.pendingBranch;M&&T.deps++;const P=E.vnode.el;E.asyncDep.catch(I=>{Ci(I,E,0)}).then(I=>{if(E.isUnmounted||T.isUnmounted||T.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:X}=E;fn(E,I,!1),P&&(X.el=P);const H=!P&&E.subTree.el;z(E,X,y(P||E.subTree.el),P?null:r(E.subTree),T,p,s),H&&A(H),Kn(E,X.el),M&&--T.deps===0&&T.resolve()})},unmount(E,z){T.isUnmounted=!0,T.activeBranch&&v(T.activeBranch,n,E,z),T.pendingBranch&&v(T.pendingBranch,n,E,z)}};return T}function of(t,l,n,o,d,m,p,f,s){const u=l.suspense=Zn(l,o,n,t.parentNode,document.createElement("div"),null,d,m,p,f,!0),g=s(t,u.pendingBranch=l.ssContent,n,u,m,p);return u.deps===0&&u.resolve(!1,!0),g}function uf(t){const{shapeFlag:l,children:n}=t,o=l&32;t.ssContent=Ps(o?n.default:n),t.ssFallback=o?Ps(n.fallback):e(Xe)}function Ps(t){let l;if(fe(t)){const n=gi&&t._c;n&&(t._d=!1,te()),t=t(),n&&(t._d=!0,l=lt,Wd())}return se(t)&&(t=Km(t)),t=rt(t),l&&!t.dynamicChildren&&(t.dynamicChildren=l.filter(n=>n!==t)),t}function gd(t,l){l&&l.pendingBranch?se(t)?l.effects.push(...t):l.effects.push(t):Wl(t)}function Pi(t,l){t.activeBranch=l;const{vnode:n,parentComponent:o}=t;let d=l.el;for(;!d&&l.component;)l=l.component.subTree,d=l.el;n.el=d,o&&o.subTree===n&&(o.vnode.el=d,Kn(o,d))}function rf(t){var l;return((l=t.props)==null?void 0:l.suspensible)!=null&&t.props.suspensible!==!1}const hd=Symbol.for("v-scx"),_d=()=>ze(hd);function bd(t,l){return Sl(t,null,l)}function vd(t,l){return Sl(t,null,{flush:"post"})}function yd(t,l){return Sl(t,null,{flush:"sync"})}const Dl={};function at(t,l,n){return Sl(t,l,n)}function Sl(t,l,{immediate:n,deep:o,flush:d,once:m,onTrack:p,onTrigger:f}=Pe){if(l&&m){const E=l;l=(...z)=>{E(...z),T()}}const s=Ue,u=E=>o===!0?E:ni(E,o===!1?1:void 0);let g,c=!1,h=!1;if(Ke(t)?(g=()=>t.value,c=ul(t)):ui(t)?(g=()=>u(t),c=!0):se(t)?(h=!0,c=t.some(E=>ui(E)||ul(E)),g=()=>t.map(E=>{if(Ke(E))return E.value;if(ui(E))return u(E);if(fe(E))return Pt(E,s,2)})):fe(t)?l?g=()=>Pt(t,s,2):g=()=>(v&&v(),ft(t,s,3,[r])):g=it,l&&o){const E=g;g=()=>ni(E())}let v,r=E=>{v=w.onStop=()=>{Pt(E,s,4),v=w.onStop=void 0}},y;if(Tl)if(r=it,l?n&&ft(l,s,3,[g(),h?[]:void 0,r]):g(),d==="sync"){const E=_d();y=E.__watcherHandles||(E.__watcherHandles=[])}else return it;let A=h?new Array(t.length).fill(Dl):Dl;const $=()=>{if(!(!w.active||!w.dirty))if(l){const E=w.run();(o||c||(h?E.some((z,M)=>yt(z,A[M])):yt(E,A)))&&(v&&v(),ft(l,s,3,[E,A===Dl?void 0:h&&A[0]===Dl?[]:A,r]),A=E)}else w.run()};$.allowRecurse=!!l;let b;d==="sync"?b=$:d==="post"?b=()=>Ye($,s&&s.suspense):($.pre=!0,s&&($.id=s.uid),b=()=>ga($));const w=new zi(g,it,b),k=Or(),T=()=>{w.stop(),k&&Fn(k.effects,w)};return l?n?$():A=w.run():d==="post"?Ye(w.run.bind(w),s&&s.suspense):w.run(),y&&y.push(T),T}function df(t,l,n){const o=this.proxy,d=He(t)?t.includes(".")?Cd(o,t):()=>o[t]:t.bind(o,o);let m;fe(l)?m=l:(m=l.handler,n=l);const p=hi(this),f=Sl(d,m.bind(o),n);return p(),f}function Cd(t,l){const n=l.split(".");return()=>{let o=t;for(let d=0;d<n.length&&o;d++)o=o[n[d]];return o}}function ni(t,l,n=0,o){if(!Fe(t)||t.__v_skip)return t;if(l&&l>0){if(n>=l)return t;n++}if(o=o||new Set,o.has(t))return t;if(o.add(t),Ke(t))ni(t.value,l,n,o);else if(se(t))for(let d=0;d<t.length;d++)ni(t[d],l,n,o);else if(bi(t)||xi(t))t.forEach(d=>{ni(d,l,n,o)});else if(Fr(t))for(const d in t)ni(t[d],l,n,o);return t}function va(t,l){if(je===null)return t;const n=ka(je)||je.proxy,o=t.dirs||(t.dirs=[]);for(let d=0;d<l.length;d++){let[m,p,f,s=Pe]=l[d];m&&(fe(m)&&(m={mounted:m,updated:m}),m.deep&&ni(p),o.push({dir:m,instance:n,value:p,oldValue:void 0,arg:f,modifiers:s}))}return t}function At(t,l,n,o){const d=t.dirs,m=l&&l.dirs;for(let p=0;p<d.length;p++){const f=d[p];m&&(f.oldValue=m[p].value);let s=f.dir[o];s&&(vi(),ft(s,n,8,[t.el,f,t,l]),yi())}}const qt=Symbol("_leaveCb"),Fl=Symbol("_enterCb");function es(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xt(()=>{t.isMounted=!0}),Aa(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],ts={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},cf={name:"BaseTransition",props:ts,setup(t,{slots:l}){const n=Ft(),o=es();let d;return()=>{const m=l.default&&ya(l.default(),!0);if(!m||!m.length)return;let p=m[0];if(m.length>1){for(const y of m)if(y.type!==Xe){p=y;break}}const f=ke(t),{mode:s}=f;if(o.isLeaving)return za(p);const u=zs(p);if(!u)return za(p);const g=Mi(u,f,o,n);fi(u,g);const c=n.subTree,h=c&&zs(c);let v=!1;const{getTransitionKey:r}=u.type;if(r){const y=r();d===void 0?d=y:y!==d&&(d=y,v=!0)}if(h&&h.type!==Xe&&(!vt(u,h)||v)){const y=Mi(h,f,o,n);if(fi(h,y),s==="out-in")return o.isLeaving=!0,y.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},za(p);s==="in-out"&&u.type!==Xe&&(y.delayLeave=(A,$,b)=>{const w=Ad(o,h);w[String(h.key)]=h,A[qt]=()=>{$(),A[qt]=void 0,delete g.delayedLeave},g.delayedLeave=b})}return p}}},wd=cf;function Ad(t,l){const{leavingVNodes:n}=t;let o=n.get(l.type);return o||(o=Object.create(null),n.set(l.type,o)),o}function Mi(t,l,n,o){const{appear:d,mode:m,persisted:p=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:r,onBeforeAppear:y,onAppear:A,onAfterAppear:$,onAppearCancelled:b}=l,w=String(t.key),k=Ad(n,t),T=(M,P)=>{M&&ft(M,o,9,P)},E=(M,P)=>{const I=P[1];T(M,P),se(M)?M.every(X=>X.length<=1)&&I():M.length<=1&&I()},z={mode:m,persisted:p,beforeEnter(M){let P=f;if(!n.isMounted)if(d)P=y||f;else return;M[qt]&&M[qt](!0);const I=k[w];I&&vt(t,I)&&I.el[qt]&&I.el[qt](),T(P,[M])},enter(M){let P=s,I=u,X=g;if(!n.isMounted)if(d)P=A||s,I=$||u,X=b||g;else return;let H=!1;const ue=M[Fl]=ye=>{H||(H=!0,ye?T(X,[M]):T(I,[M]),z.delayedLeave&&z.delayedLeave(),M[Fl]=void 0)};P?E(P,[M,ue]):ue()},leave(M,P){const I=String(t.key);if(M[Fl]&&M[Fl](!0),n.isUnmounting)return P();T(c,[M]);let X=!1;const H=M[qt]=ue=>{X||(X=!0,P(),ue?T(r,[M]):T(v,[M]),M[qt]=void 0,k[I]===t&&delete k[I])};k[I]=t,h?E(h,[M,H]):H()},clone(M){return Mi(M,l,n,o)}};return z}function za(t){if(kl(t))return t=$t(t),t.children=null,t}function zs(t){return kl(t)?t.children?t.children[0]:void 0:t}function fi(t,l){t.shapeFlag&6&&t.component?fi(t.component.subTree,l):t.shapeFlag&128?(t.ssContent.transition=l.clone(t.ssContent),t.ssFallback.transition=l.clone(t.ssFallback)):t.transition=l}function ya(t,l=!1,n){let o=[],d=0;for(let m=0;m<t.length;m++){let p=t[m];const f=n==null?p.key:String(n)+String(p.key!=null?p.key:m);p.type===Se?(p.patchFlag&128&&d++,o=o.concat(ya(p.children,l,f))):(l||p.type!==Xe)&&o.push(f!=null?$t(p,{key:f}):p)}if(d>1)for(let m=0;m<o.length;m++)o[m].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function B(t,l){return fe(t)?Oe({name:t.name},l,{setup:t}):t}const di=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function mf(t){fe(t)&&(t={loader:t});const{loader:l,loadingComponent:n,errorComponent:o,delay:d=200,timeout:m,suspensible:p=!0,onError:f}=t;let s=null,u,g=0;const c=()=>(g++,s=null,h()),h=()=>{let v;return s||(v=s=l().catch(r=>{if(r=r instanceof Error?r:new Error(String(r)),f)return new Promise((y,A)=>{f(r,()=>y(c()),()=>A(r),g+1)});throw r}).then(r=>v!==s&&s?s:(r&&(r.__esModule||r[Symbol.toStringTag]==="Module")&&(r=r.default),u=r,r)))};return B({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=Ue;if(u)return()=>Ma(u,v);const r=b=>{s=null,Ci(b,v,13,!o)};if(p&&v.suspense||Tl)return h().then(b=>()=>Ma(b,v)).catch(b=>(r(b),()=>o?e(o,{error:b}):null));const y=L(!1),A=L(),$=L(!!d);return d&&setTimeout(()=>{$.value=!1},d),m!=null&&setTimeout(()=>{if(!y.value&&!A.value){const b=new Error(`Async component timed out after ${m}ms.`);r(b),A.value=b}},m),h().then(()=>{y.value=!0,v.parent&&kl(v.parent.vnode)&&(v.parent.effect.dirty=!0,ga(v.parent.update))}).catch(b=>{r(b),A.value=b}),()=>{if(y.value&&u)return Ma(u,v);if(A.value&&o)return e(o,{error:A.value});if(n&&!$.value)return e(n)}}})}function Ma(t,l){const{ref:n,props:o,children:d,ce:m}=l.vnode,p=e(t,o,d);return p.ref=n,p.ce=m,delete l.vnode.ce,p}const kl=t=>t.type.__isKeepAlive,ff={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:l}){const n=Ft(),o=n.ctx;if(!o.renderer)return()=>{const b=l.default&&l.default();return b&&b.length===1?b[0]:b};const d=new Map,m=new Set;let p=null;const f=n.suspense,{renderer:{p:s,m:u,um:g,o:{createElement:c}}}=o,h=c("div");o.activate=(b,w,k,T,E)=>{const z=b.component;u(b,w,k,0,f),s(z.vnode,b,w,k,z,f,T,b.slotScopeIds,E),Ye(()=>{z.isDeactivated=!1,z.a&&Ei(z.a);const M=b.props&&b.props.onVnodeMounted;M&&tt(M,z.parent,b)},f)},o.deactivate=b=>{const w=b.component;u(b,h,null,1,f),Ye(()=>{w.da&&Ei(w.da);const k=b.props&&b.props.onVnodeUnmounted;k&&tt(k,w.parent,b),w.isDeactivated=!0},f)};function v(b){Da(b),g(b,n,f,!0)}function r(b){d.forEach((w,k)=>{const T=gn(w.type);T&&(!b||!b(T))&&y(k)})}function y(b){const w=d.get(b);!p||!vt(w,p)?v(w):p&&Da(p),d.delete(b),m.delete(b)}at(()=>[t.include,t.exclude],([b,w])=>{b&&r(k=>Wi(b,k)),w&&r(k=>!Wi(w,k))},{flush:"post",deep:!0});let A=null;const $=()=>{A!=null&&d.set(A,Fa(n.subTree))};return Xt($),wa($),Aa(()=>{d.forEach(b=>{const{subTree:w,suspense:k}=n,T=Fa(w);if(b.type===T.type&&b.key===T.key){Da(T);const E=T.component.da;E&&Ye(E,k);return}v(b)})}),()=>{if(A=null,!l.default)return null;const b=l.default(),w=b[0];if(b.length>1)return p=null,b;if(!kt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return p=null,w;let k=Fa(w);const T=k.type,E=gn(di(k)?k.type.__asyncResolved||{}:T),{include:z,exclude:M,max:P}=t;if(z&&(!E||!Wi(z,E))||M&&E&&Wi(M,E))return p=k,w;const I=k.key==null?T:k.key,X=d.get(I);return k.el&&(k=$t(k),w.shapeFlag&128&&(w.ssContent=k)),A=I,X?(k.el=X.el,k.component=X.component,k.transition&&fi(k,k.transition),k.shapeFlag|=512,m.delete(I),m.add(I)):(m.add(I),P&&m.size>parseInt(P,10)&&y(m.values().next().value)),k.shapeFlag|=256,p=k,pd(w.type)?w:k}}},pf=ff;function Wi(t,l){return se(t)?t.some(n=>Wi(n,l)):He(t)?t.split(",").includes(l):Uc(t)?t.test(l):!1}function Sd(t,l){$d(t,"a",l)}function kd(t,l){$d(t,"da",l)}function $d(t,l,n=Ue){const o=t.__wdc||(t.__wdc=()=>{let d=n;for(;d;){if(d.isDeactivated)return;d=d.parent}return t()});if(Ca(l,o,n),n){let d=n.parent;for(;d&&d.parent;)kl(d.parent.vnode)&&gf(o,l,n,d),d=d.parent}}function gf(t,l,n,o){const d=Ca(l,t,o,!0);wi(()=>{Fn(o[l],d)},n)}function Da(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fa(t){return t.shapeFlag&128?t.ssContent:t}function Ca(t,l,n=Ue,o=!1){if(n){const d=n[t]||(n[t]=[]),m=l.__weh||(l.__weh=(...p)=>{if(n.isUnmounted)return;vi();const f=hi(n),s=ft(l,n,t,p);return f(),yi(),s});return o?d.unshift(m):d.push(m),m}}const Dt=t=>(l,n=Ue)=>(!Tl||t==="sp")&&Ca(t,(...o)=>l(...o),n),Td=Dt("bm"),Xt=Dt("m"),xd=Dt("bu"),wa=Dt("u"),Aa=Dt("bum"),wi=Dt("um"),Ed=Dt("sp"),Bd=Dt("rtg"),Rd=Dt("rtc");function Pd(t,l=Ue){Ca("ec",t,l)}function mt(t,l,n,o){let d;const m=n&&n[o];if(se(t)||He(t)){d=new Array(t.length);for(let p=0,f=t.length;p<f;p++)d[p]=l(t[p],p,void 0,m&&m[p])}else if(typeof t=="number"){d=new Array(t);for(let p=0;p<t;p++)d[p]=l(p+1,p,void 0,m&&m[p])}else if(Fe(t))if(t[Symbol.iterator])d=Array.from(t,(p,f)=>l(p,f,void 0,m&&m[f]));else{const p=Object.keys(t);d=new Array(p.length);for(let f=0,s=p.length;f<s;f++){const u=p[f];d[f]=l(t[u],u,f,m&&m[f])}}else d=[];return n&&(n[o]=d),d}function hf(t,l){for(let n=0;n<l.length;n++){const o=l[n];if(se(o))for(let d=0;d<o.length;d++)t[o[d].name]=o[d].fn;else o&&(t[o.name]=o.key?(...d)=>{const m=o.fn(...d);return m&&(m.key=o.key),m}:o.fn)}return t}function zd(t,l,n={},o,d){if(je.isCE||je.parent&&di(je.parent)&&je.parent.isCE)return l!=="default"&&(n.name=l),e("slot",n,o&&o());let m=t[l];m&&m._c&&(m._d=!1),te();const p=m&&Md(m(n)),f=Je(Se,{key:n.key||p&&p.key||`_${l}`},p||(o?o():[]),p&&t._===1?64:-2);return!d&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),m&&m._c&&(m._d=!0),f}function Md(t){return t.some(l=>kt(l)?!(l.type===Xe||l.type===Se&&!Md(l.children)):!0)?t:null}function _f(t,l){const n={};for(const o in t)n[l&&/[A-Z]/.test(o)?`on:${o}`:el(o)]=t[o];return n}const an=t=>t?tc(t)?ka(t)||t.proxy:an(t.parent):null,tl=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>an(t.parent),$root:t=>an(t.root),$emit:t=>t.emit,$options:t=>is(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ga(t.update)}),$nextTick:t=>t.n||(t.n=Oi.bind(t.proxy)),$watch:t=>df.bind(t)}),Ia=(t,l)=>t!==Pe&&!t.__isScriptSetup&&xe(t,l),nn={get({_:t},l){const{ctx:n,setupState:o,data:d,props:m,accessCache:p,type:f,appContext:s}=t;let u;if(l[0]!=="$"){const v=p[l];if(v!==void 0)switch(v){case 1:return o[l];case 2:return d[l];case 4:return n[l];case 3:return m[l]}else{if(Ia(o,l))return p[l]=1,o[l];if(d!==Pe&&xe(d,l))return p[l]=2,d[l];if((u=t.propsOptions[0])&&xe(u,l))return p[l]=3,m[l];if(n!==Pe&&xe(n,l))return p[l]=4,n[l];sn&&(p[l]=0)}}const g=tl[l];let c,h;if(g)return l==="$attrs"&&nt(t,"get",l),g(t);if((c=f.__cssModules)&&(c=c[l]))return c;if(n!==Pe&&xe(n,l))return p[l]=4,n[l];if(h=s.config.globalProperties,xe(h,l))return h[l]},set({_:t},l,n){const{data:o,setupState:d,ctx:m}=t;return Ia(d,l)?(d[l]=n,!0):o!==Pe&&xe(o,l)?(o[l]=n,!0):xe(t.props,l)||l[0]==="$"&&l.slice(1)in t?!1:(m[l]=n,!0)},has({_:{data:t,setupState:l,accessCache:n,ctx:o,appContext:d,propsOptions:m}},p){let f;return!!n[p]||t!==Pe&&xe(t,p)||Ia(l,p)||(f=m[0])&&xe(f,p)||xe(o,p)||xe(tl,p)||xe(d.config.globalProperties,p)},defineProperty(t,l,n){return n.get!=null?t._.accessCache[l]=0:xe(n,"value")&&this.set(t,l,n.value,null),Reflect.defineProperty(t,l,n)}},bf=Oe({},nn,{get(t,l){if(l!==Symbol.unscopables)return nn.get(t,l,t)},has(t,l){return l[0]!=="_"&&!Kc(l)}});function vf(){return null}function yf(){return null}function Cf(t){}function wf(t){}function Af(){return null}function Sf(){}function kf(t,l){return null}function $f(){return Dd().slots}function Tf(){return Dd().attrs}function Dd(){const t=Ft();return t.setupContext||(t.setupContext=ac(t))}function pl(t){return se(t)?t.reduce((l,n)=>(l[n]=null,l),{}):t}function xf(t,l){const n=pl(t);for(const o in l){if(o.startsWith("__skip"))continue;let d=n[o];d?se(d)||fe(d)?d=n[o]={type:d,default:l[o]}:d.default=l[o]:d===null&&(d=n[o]={default:l[o]}),d&&l[`__skip_${o}`]&&(d.skipFactory=!0)}return n}function Ef(t,l){return!t||!l?t||l:se(t)&&se(l)?t.concat(l):Oe({},pl(t),pl(l))}function Bf(t,l){const n={};for(const o in t)l.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>t[o]});return n}function Rf(t){const l=Ft();let n=t();return mn(),In(n)&&(n=n.catch(o=>{throw hi(l),o})),[n,()=>hi(l)]}let sn=!0;function Pf(t){const l=is(t),n=t.proxy,o=t.ctx;sn=!1,l.beforeCreate&&Ms(l.beforeCreate,t,"bc");const{data:d,computed:m,methods:p,watch:f,provide:s,inject:u,created:g,beforeMount:c,mounted:h,beforeUpdate:v,updated:r,activated:y,deactivated:A,beforeDestroy:$,beforeUnmount:b,destroyed:w,unmounted:k,render:T,renderTracked:E,renderTriggered:z,errorCaptured:M,serverPrefetch:P,expose:I,inheritAttrs:X,components:H,directives:ue,filters:ye}=l;if(u&&zf(u,o,null),p)for(const ae in p){const Y=p[ae];fe(Y)&&(o[ae]=Y.bind(n))}if(d){const ae=d.call(n,n);Fe(ae)&&(t.data=Mt(ae))}if(sn=!0,m)for(const ae in m){const Y=m[ae],we=fe(Y)?Y.bind(n,n):fe(Y.get)?Y.get.bind(n,n):it,Ve=!fe(Y)&&fe(Y.set)?Y.set.bind(n):it,qe=F({get:we,set:Ve});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Me=>qe.value=Me})}if(f)for(const ae in f)Fd(f[ae],o,n,ae);if(s){const ae=fe(s)?s.call(n):s;Reflect.ownKeys(ae).forEach(Y=>{We(Y,ae[Y])})}g&&Ms(g,t,"c");function O(ae,Y){se(Y)?Y.forEach(we=>ae(we.bind(n))):Y&&ae(Y.bind(n))}if(O(Td,c),O(Xt,h),O(xd,v),O(wa,r),O(Sd,y),O(kd,A),O(Pd,M),O(Rd,E),O(Bd,z),O(Aa,b),O(wi,k),O(Ed,P),se(I))if(I.length){const ae=t.exposed||(t.exposed={});I.forEach(Y=>{Object.defineProperty(ae,Y,{get:()=>n[Y],set:we=>n[Y]=we})})}else t.exposed||(t.exposed={});T&&t.render===it&&(t.render=T),X!=null&&(t.inheritAttrs=X),H&&(t.components=H),ue&&(t.directives=ue)}function zf(t,l,n=it){se(t)&&(t=on(t));for(const o in t){const d=t[o];let m;Fe(d)?"default"in d?m=ze(d.from||o,d.default,!0):m=ze(d.from||o):m=ze(d),Ke(m)?Object.defineProperty(l,o,{enumerable:!0,configurable:!0,get:()=>m.value,set:p=>m.value=p}):l[o]=m}}function Ms(t,l,n){ft(se(t)?t.map(o=>o.bind(l.proxy)):t.bind(l.proxy),l,n)}function Fd(t,l,n,o){const d=o.includes(".")?Cd(n,o):()=>n[o];if(He(t)){const m=l[t];fe(m)&&at(d,m)}else if(fe(t))at(d,t.bind(n));else if(Fe(t))if(se(t))t.forEach(m=>Fd(m,l,n,o));else{const m=fe(t.handler)?t.handler.bind(n):l[t.handler];fe(m)&&at(d,m,t)}}function is(t){const l=t.type,{mixins:n,extends:o}=l,{mixins:d,optionsCache:m,config:{optionMergeStrategies:p}}=t.appContext,f=m.get(l);let s;return f?s=f:!d.length&&!n&&!o?s=l:(s={},d.length&&d.forEach(u=>Ql(s,u,p,!0)),Ql(s,l,p)),Fe(l)&&m.set(l,s),s}function Ql(t,l,n,o=!1){const{mixins:d,extends:m}=l;m&&Ql(t,m,n,!0),d&&d.forEach(p=>Ql(t,p,n,!0));for(const p in l)if(!(o&&p==="expose")){const f=Mf[p]||n&&n[p];t[p]=f?f(t[p],l[p]):l[p]}return t}const Mf={data:Ds,props:Fs,emits:Fs,methods:Ki,computed:Ki,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Ki,directives:Ki,watch:Ff,provide:Ds,inject:Df};function Ds(t,l){return l?t?function(){return Oe(fe(t)?t.call(this,this):t,fe(l)?l.call(this,this):l)}:l:t}function Df(t,l){return Ki(on(t),on(l))}function on(t){if(se(t)){const l={};for(let n=0;n<t.length;n++)l[t[n]]=t[n];return l}return t}function Ze(t,l){return t?[...new Set([].concat(t,l))]:l}function Ki(t,l){return t?Oe(Object.create(null),t,l):l}function Fs(t,l){return t?se(t)&&se(l)?[...new Set([...t,...l])]:Oe(Object.create(null),pl(t),pl(l??{})):l}function Ff(t,l){if(!t)return l;if(!l)return t;const n=Oe(Object.create(null),t);for(const o in l)n[o]=Ze(t[o],l[o]);return n}function Id(){return{app:null,config:{isNativeTag:jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let If=0;function Nf(t,l){return function(o,d=null){fe(o)||(o=Oe({},o)),d!=null&&!Fe(d)&&(d=null);const m=Id(),p=new WeakSet;let f=!1;const s=m.app={_uid:If++,_component:o,_props:d,_container:null,_context:m,_instance:null,version:sc,get config(){return m.config},set config(u){},use(u,...g){return p.has(u)||(u&&fe(u.install)?(p.add(u),u.install(s,...g)):fe(u)&&(p.add(u),u(s,...g))),s},mixin(u){return m.mixins.includes(u)||m.mixins.push(u),s},component(u,g){return g?(m.components[u]=g,s):m.components[u]},directive(u,g){return g?(m.directives[u]=g,s):m.directives[u]},mount(u,g,c){if(!f){const h=e(o,d);return h.appContext=m,c===!0?c="svg":c===!1&&(c=void 0),g&&l?l(h,u):t(h,u,c),f=!0,s._container=u,u.__vue_app__=s,ka(h.component)||h.component.proxy}},unmount(){f&&(t(null,s._container),delete s._container.__vue_app__)},provide(u,g){return m.provides[u]=g,s},runWithContext(u){gl=s;try{return u()}finally{gl=null}}};return s}}let gl=null;function We(t,l){if(Ue){let n=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===n&&(n=Ue.provides=Object.create(o)),n[t]=l}}function ze(t,l,n=!1){const o=Ue||je;if(o||gl){const d=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:gl._context.provides;if(d&&t in d)return d[t];if(arguments.length>1)return n&&fe(l)?l.call(o&&o.proxy):l}}function Vf(){return!!(Ue||je||gl)}function Lf(t,l,n,o=!1){const d={},m={};Jl(m,Sa,1),t.propsDefaults=Object.create(null),Nd(t,l,d,m);for(const p in t.propsOptions[0])p in d||(d[p]=void 0);n?t.props=o?d:id(d):t.type.props?t.props=d:t.props=m,t.attrs=m}function Of(t,l,n,o){const{props:d,attrs:m,vnode:{patchFlag:p}}=t,f=ke(d),[s]=t.propsOptions;let u=!1;if((o||p>0)&&!(p&16)){if(p&8){const g=t.vnode.dynamicProps;for(let c=0;c<g.length;c++){let h=g[c];if(ha(t.emitsOptions,h))continue;const v=l[h];if(s)if(xe(m,h))v!==m[h]&&(m[h]=v,u=!0);else{const r=et(h);d[r]=un(s,f,r,v,t,!1)}else v!==m[h]&&(m[h]=v,u=!0)}}}else{Nd(t,l,d,m)&&(u=!0);let g;for(const c in f)(!l||!xe(l,c)&&((g=ct(c))===c||!xe(l,g)))&&(s?n&&(n[c]!==void 0||n[g]!==void 0)&&(d[c]=un(s,f,c,void 0,t,!0)):delete d[c]);if(m!==f)for(const c in m)(!l||!xe(l,c))&&(delete m[c],u=!0)}u&&Rt(t,"set","$attrs")}function Nd(t,l,n,o){const[d,m]=t.propsOptions;let p=!1,f;if(l)for(let s in l){if(Zi(s))continue;const u=l[s];let g;d&&xe(d,g=et(s))?!m||!m.includes(g)?n[g]=u:(f||(f={}))[g]=u:ha(t.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,p=!0)}if(m){const s=ke(n),u=f||Pe;for(let g=0;g<m.length;g++){const c=m[g];n[c]=un(d,s,c,u[c],t,!xe(u,c))}}return p}function un(t,l,n,o,d,m){const p=t[n];if(p!=null){const f=xe(p,"default");if(f&&o===void 0){const s=p.default;if(p.type!==Function&&!p.skipFactory&&fe(s)){const{propsDefaults:u}=d;if(n in u)o=u[n];else{const g=hi(d);o=u[n]=s.call(null,l),g()}}else o=s}p[0]&&(m&&!f?o=!1:p[1]&&(o===""||o===ct(n))&&(o=!0))}return o}function Vd(t,l,n=!1){const o=l.propsCache,d=o.get(t);if(d)return d;const m=t.props,p={},f=[];let s=!1;if(!fe(t)){const g=c=>{s=!0;const[h,v]=Vd(c,l,!0);Oe(p,h),v&&f.push(...v)};!n&&l.mixins.length&&l.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!m&&!s)return Fe(t)&&o.set(t,Ti),Ti;if(se(m))for(let g=0;g<m.length;g++){const c=et(m[g]);Is(c)&&(p[c]=Pe)}else if(m)for(const g in m){const c=et(g);if(Is(c)){const h=m[g],v=p[c]=se(h)||fe(h)?{type:h}:Oe({},h);if(v){const r=Ls(Boolean,v.type),y=Ls(String,v.type);v[0]=r>-1,v[1]=y<0||r<y,(r>-1||xe(v,"default"))&&f.push(c)}}}const u=[p,f];return Fe(t)&&o.set(t,u),u}function Is(t){return t[0]!=="$"}function Ns(t){const l=t&&t.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:t===null?"null":""}function Vs(t,l){return Ns(t)===Ns(l)}function Ls(t,l){return se(l)?l.findIndex(n=>Vs(n,t)):fe(l)&&Vs(l,t)?0:-1}const Ld=t=>t[0]==="_"||t==="$stable",ls=t=>se(t)?t.map(rt):[rt(t)],Hf=(t,l,n)=>{if(l._n)return l;const o=i((...d)=>ls(l(...d)),n);return o._c=!1,o},Od=(t,l,n)=>{const o=t._ctx;for(const d in t){if(Ld(d))continue;const m=t[d];if(fe(m))l[d]=Hf(d,m,o);else if(m!=null){const p=ls(m);l[d]=()=>p}}},Hd=(t,l)=>{const n=ls(l);t.slots.default=()=>n},jf=(t,l)=>{if(t.vnode.shapeFlag&32){const n=l._;n?(t.slots=ke(l),Jl(l,"_",n)):Od(l,t.slots={})}else t.slots={},l&&Hd(t,l);Jl(t.slots,Sa,1)},qf=(t,l,n)=>{const{vnode:o,slots:d}=t;let m=!0,p=Pe;if(o.shapeFlag&32){const f=l._;f?n&&f===1?m=!1:(Oe(d,l),!n&&f===1&&delete d._):(m=!l.$stable,Od(l,d)),p=l}else l&&(Hd(t,l),p={default:1});if(m)for(const f in d)!Ld(f)&&p[f]==null&&delete d[f]};function Xl(t,l,n,o,d=!1){if(se(t)){t.forEach((h,v)=>Xl(h,l&&(se(l)?l[v]:l),n,o,d));return}if(di(o)&&!d)return;const m=o.shapeFlag&4?ka(o.component)||o.component.proxy:o.el,p=d?null:m,{i:f,r:s}=t,u=l&&l.r,g=f.refs===Pe?f.refs={}:f.refs,c=f.setupState;if(u!=null&&u!==s&&(He(u)?(g[u]=null,xe(c,u)&&(c[u]=null)):Ke(u)&&(u.value=null)),fe(s))Pt(s,f,12,[p,g]);else{const h=He(s),v=Ke(s),r=t.f;if(h||v){const y=()=>{if(r){const A=h?xe(c,s)?c[s]:g[s]:s.value;d?se(A)&&Fn(A,m):se(A)?A.includes(m)||A.push(m):h?(g[s]=[m],xe(c,s)&&(c[s]=g[s])):(s.value=[m],t.k&&(g[t.k]=s.value))}else h?(g[s]=p,xe(c,s)&&(c[s]=p)):v&&(s.value=p,t.k&&(g[t.k]=p))};d||r?y():(y.id=-1,Ye(y,n))}}}let Vt=!1;const Uf=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Jf=t=>t.namespaceURI.includes("MathML"),Il=t=>{if(Uf(t))return"svg";if(Jf(t))return"mathml"},Nl=t=>t.nodeType===8;function Gf(t){const{mt:l,p:n,o:{patchProp:o,createText:d,nextSibling:m,parentNode:p,remove:f,insert:s,createComment:u}}=t,g=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),Kl(),k._vnode=w;return}Vt=!1,c(k.firstChild,w,null,null,null),Kl(),k._vnode=w,Vt&&console.error("Hydration completed but contains mismatches.")},c=(w,k,T,E,z,M=!1)=>{const P=Nl(w)&&w.data==="[",I=()=>y(w,k,T,E,z,P),{type:X,ref:H,shapeFlag:ue,patchFlag:ye}=k;let N=w.nodeType;k.el=w,ye===-2&&(M=!1,k.dynamicChildren=null);let O=null;switch(X){case pi:N!==3?k.children===""?(s(k.el=d(""),p(w),w),O=w):O=I():(w.data!==k.children&&(Vt=!0,w.data=k.children),O=m(w));break;case Xe:b(w)?(O=m(w),$(k.el=w.content.firstChild,w,T)):N!==8||P?O=I():O=m(w);break;case ci:if(P&&(w=m(w),N=w.nodeType),N===1||N===3){O=w;const ae=!k.children.length;for(let Y=0;Y<k.staticCount;Y++)ae&&(k.children+=O.nodeType===1?O.outerHTML:O.data),Y===k.staticCount-1&&(k.anchor=O),O=m(O);return P?m(O):O}else I();break;case Se:P?O=r(w,k,T,E,z,M):O=I();break;default:if(ue&1)(N!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?O=I():O=h(w,k,T,E,z,M);else if(ue&6){k.slotScopeIds=z;const ae=p(w);if(P?O=A(w):Nl(w)&&w.data==="teleport start"?O=A(w,w.data,"teleport end"):O=m(w),l(k,ae,null,T,E,Il(ae),M),di(k)){let Y;P?(Y=e(Se),Y.anchor=O?O.previousSibling:ae.lastChild):Y=w.nodeType===3?a(""):e("div"),Y.el=w,k.component.subTree=Y}}else ue&64?N!==8?O=I():O=k.type.hydrate(w,k,T,E,z,M,t,v):ue&128&&(O=k.type.hydrate(w,k,T,E,Il(p(w)),z,M,t,c))}return H!=null&&Xl(H,null,E,k),O},h=(w,k,T,E,z,M)=>{M=M||!!k.dynamicChildren;const{type:P,props:I,patchFlag:X,shapeFlag:H,dirs:ue,transition:ye}=k,N=P==="input"||P==="option";if(N||X!==-1){ue&&At(k,null,T,"created");let O=!1;if(b(w)){O=Jd(E,ye)&&T&&T.vnode.props&&T.vnode.props.appear;const Y=w.content.firstChild;O&&ye.beforeEnter(Y),$(Y,w,T),k.el=w=Y}if(H&16&&!(I&&(I.innerHTML||I.textContent))){let Y=v(w.firstChild,k,w,T,E,z,M);for(;Y;){Vt=!0;const we=Y;Y=Y.nextSibling,f(we)}}else H&8&&w.textContent!==k.children&&(Vt=!0,w.textContent=k.children);if(I)if(N||!M||X&48)for(const Y in I)(N&&(Y.endsWith("value")||Y==="indeterminate")||bl(Y)&&!Zi(Y)||Y[0]===".")&&o(w,Y,null,I[Y],void 0,void 0,T);else I.onClick&&o(w,"onClick",null,I.onClick,void 0,void 0,T);let ae;(ae=I&&I.onVnodeBeforeMount)&&tt(ae,T,k),ue&&At(k,null,T,"beforeMount"),((ae=I&&I.onVnodeMounted)||ue||O)&&gd(()=>{ae&&tt(ae,T,k),O&&ye.enter(w),ue&&At(k,null,T,"mounted")},E)}return w.nextSibling},v=(w,k,T,E,z,M,P)=>{P=P||!!k.dynamicChildren;const I=k.children,X=I.length;for(let H=0;H<X;H++){const ue=P?I[H]:I[H]=rt(I[H]);if(w)w=c(w,ue,E,z,M,P);else{if(ue.type===pi&&!ue.children)continue;Vt=!0,n(null,ue,T,null,E,z,Il(T),M)}}return w},r=(w,k,T,E,z,M)=>{const{slotScopeIds:P}=k;P&&(z=z?z.concat(P):P);const I=p(w),X=v(m(w),k,I,T,E,z,M);return X&&Nl(X)&&X.data==="]"?m(k.anchor=X):(Vt=!0,s(k.anchor=u("]"),I,X),X)},y=(w,k,T,E,z,M)=>{if(Vt=!0,k.el=null,M){const X=A(w);for(;;){const H=m(w);if(H&&H!==X)f(H);else break}}const P=m(w),I=p(w);return f(w),n(null,k,I,P,T,E,Il(I),z),P},A=(w,k="[",T="]")=>{let E=0;for(;w;)if(w=m(w),w&&Nl(w)&&(w.data===k&&E++,w.data===T)){if(E===0)return m(w);E--}return w},$=(w,k,T)=>{const E=k.parentNode;E&&E.replaceChild(w,k);let z=T;for(;z;)z.vnode.el===k&&(z.vnode.el=z.subTree.el=w),z=z.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,c]}const Ye=gd;function jd(t){return Ud(t)}function qd(t){return Ud(t,Gf)}function Ud(t,l){const n=Ir();n.__VUE__=!0;const{insert:o,remove:d,patchProp:m,createElement:p,createText:f,createComment:s,setText:u,setElementText:g,parentNode:c,nextSibling:h,setScopeId:v=it,insertStaticContent:r}=t,y=(x,R,D,j=null,q=null,Q=null,le=void 0,K=null,ee=!!R.dynamicChildren)=>{if(x===R)return;x&&!vt(x,R)&&(j=Z(x),Me(x,q,Q,!0),x=null),R.patchFlag===-2&&(ee=!1,R.dynamicChildren=null);const{type:J,ref:ne,shapeFlag:ce}=R;switch(J){case pi:A(x,R,D,j);break;case Xe:$(x,R,D,j);break;case ci:x==null&&b(R,D,j,le);break;case Se:H(x,R,D,j,q,Q,le,K,ee);break;default:ce&1?T(x,R,D,j,q,Q,le,K,ee):ce&6?ue(x,R,D,j,q,Q,le,K,ee):(ce&64||ce&128)&&J.process(x,R,D,j,q,Q,le,K,ee,Re)}ne!=null&&q&&Xl(ne,x&&x.ref,Q,R||x,!R)},A=(x,R,D,j)=>{if(x==null)o(R.el=f(R.children),D,j);else{const q=R.el=x.el;R.children!==x.children&&u(q,R.children)}},$=(x,R,D,j)=>{x==null?o(R.el=s(R.children||""),D,j):R.el=x.el},b=(x,R,D,j)=>{[x.el,x.anchor]=r(x.children,R,D,j,x.el,x.anchor)},w=({el:x,anchor:R},D,j)=>{let q;for(;x&&x!==R;)q=h(x),o(x,D,j),x=q;o(R,D,j)},k=({el:x,anchor:R})=>{let D;for(;x&&x!==R;)D=h(x),d(x),x=D;d(R)},T=(x,R,D,j,q,Q,le,K,ee)=>{R.type==="svg"?le="svg":R.type==="math"&&(le="mathml"),x==null?E(R,D,j,q,Q,le,K,ee):P(x,R,q,Q,le,K,ee)},E=(x,R,D,j,q,Q,le,K)=>{let ee,J;const{props:ne,shapeFlag:ce,transition:de,dirs:he}=x;if(ee=x.el=p(x.type,Q,ne&&ne.is,ne),ce&8?g(ee,x.children):ce&16&&M(x.children,ee,null,j,q,Na(x,Q),le,K),he&&At(x,null,j,"created"),z(ee,x,x.scopeId,le,j),ne){for(const De in ne)De!=="value"&&!Zi(De)&&m(ee,De,null,ne[De],Q,x.children,j,q,ie);"value"in ne&&m(ee,"value",null,ne.value,Q),(J=ne.onVnodeBeforeMount)&&tt(J,j,x)}he&&At(x,null,j,"beforeMount");const Ae=Jd(q,de);Ae&&de.beforeEnter(ee),o(ee,R,D),((J=ne&&ne.onVnodeMounted)||Ae||he)&&Ye(()=>{J&&tt(J,j,x),Ae&&de.enter(ee),he&&At(x,null,j,"mounted")},q)},z=(x,R,D,j,q)=>{if(D&&v(x,D),j)for(let Q=0;Q<j.length;Q++)v(x,j[Q]);if(q){let Q=q.subTree;if(R===Q){const le=q.vnode;z(x,le,le.scopeId,le.slotScopeIds,q.parent)}}},M=(x,R,D,j,q,Q,le,K,ee=0)=>{for(let J=ee;J<x.length;J++){const ne=x[J]=K?Ut(x[J]):rt(x[J]);y(null,ne,R,D,j,q,Q,le,K)}},P=(x,R,D,j,q,Q,le)=>{const K=R.el=x.el;let{patchFlag:ee,dynamicChildren:J,dirs:ne}=R;ee|=x.patchFlag&16;const ce=x.props||Pe,de=R.props||Pe;let he;if(D&&ei(D,!1),(he=de.onVnodeBeforeUpdate)&&tt(he,D,R,x),ne&&At(R,x,D,"beforeUpdate"),D&&ei(D,!0),J?I(x.dynamicChildren,J,K,D,j,Na(R,q),Q):le||Y(x,R,K,null,D,j,Na(R,q),Q,!1),ee>0){if(ee&16)X(K,R,ce,de,D,j,q);else if(ee&2&&ce.class!==de.class&&m(K,"class",null,de.class,q),ee&4&&m(K,"style",ce.style,de.style,q),ee&8){const Ae=R.dynamicProps;for(let De=0;De<Ae.length;De++){const Le=Ae[De],Ge=ce[Le],bt=de[Le];(bt!==Ge||Le==="value")&&m(K,Le,Ge,bt,q,x.children,D,j,ie)}}ee&1&&x.children!==R.children&&g(K,R.children)}else!le&&J==null&&X(K,R,ce,de,D,j,q);((he=de.onVnodeUpdated)||ne)&&Ye(()=>{he&&tt(he,D,R,x),ne&&At(R,x,D,"updated")},j)},I=(x,R,D,j,q,Q,le)=>{for(let K=0;K<R.length;K++){const ee=x[K],J=R[K],ne=ee.el&&(ee.type===Se||!vt(ee,J)||ee.shapeFlag&70)?c(ee.el):D;y(ee,J,ne,null,j,q,Q,le,!0)}},X=(x,R,D,j,q,Q,le)=>{if(D!==j){if(D!==Pe)for(const K in D)!Zi(K)&&!(K in j)&&m(x,K,D[K],null,le,R.children,q,Q,ie);for(const K in j){if(Zi(K))continue;const ee=j[K],J=D[K];ee!==J&&K!=="value"&&m(x,K,J,ee,le,R.children,q,Q,ie)}"value"in j&&m(x,"value",D.value,j.value,le)}},H=(x,R,D,j,q,Q,le,K,ee)=>{const J=R.el=x?x.el:f(""),ne=R.anchor=x?x.anchor:f("");let{patchFlag:ce,dynamicChildren:de,slotScopeIds:he}=R;he&&(K=K?K.concat(he):he),x==null?(o(J,D,j),o(ne,D,j),M(R.children||[],D,ne,q,Q,le,K,ee)):ce>0&&ce&64&&de&&x.dynamicChildren?(I(x.dynamicChildren,de,D,q,Q,le,K),(R.key!=null||q&&R===q.subTree)&&as(x,R,!0)):Y(x,R,D,ne,q,Q,le,K,ee)},ue=(x,R,D,j,q,Q,le,K,ee)=>{R.slotScopeIds=K,x==null?R.shapeFlag&512?q.ctx.activate(R,D,j,le,ee):ye(R,D,j,q,Q,le,ee):N(x,R,ee)},ye=(x,R,D,j,q,Q,le)=>{const K=x.component=ec(x,j,q);if(kl(x)&&(K.ctx.renderer=Re),ic(K),K.asyncDep){if(q&&q.registerDep(K,O),!x.el){const ee=K.subTree=e(Xe);$(null,ee,R,D)}}else O(K,x,R,D,q,Q,le)},N=(x,R,D)=>{const j=R.component=x.component;if(Zm(x,R,D))if(j.asyncDep&&!j.asyncResolved){ae(j,R,D);return}else j.next=R,Jm(j.update),j.effect.dirty=!0,j.update();else R.el=x.el,j.vnode=R},O=(x,R,D,j,q,Q,le)=>{const K=()=>{if(x.isMounted){let{next:ne,bu:ce,u:de,parent:he,vnode:Ae}=x;{const Ai=Gd(x);if(Ai){ne&&(ne.el=Ae.el,ae(x,ne,le)),Ai.asyncDep.then(()=>{x.isUnmounted||K()});return}}let De=ne,Le;ei(x,!1),ne?(ne.el=Ae.el,ae(x,ne,le)):ne=Ae,ce&&Ei(ce),(Le=ne.props&&ne.props.onVnodeBeforeUpdate)&&tt(Le,he,ne,Ae),ei(x,!0);const Ge=ql(x),bt=x.subTree;x.subTree=Ge,y(bt,Ge,c(bt.el),Z(bt),x,q,Q),ne.el=Ge.el,De===null&&Kn(x,Ge.el),de&&Ye(de,q),(Le=ne.props&&ne.props.onVnodeUpdated)&&Ye(()=>tt(Le,he,ne,Ae),q)}else{let ne;const{el:ce,props:de}=R,{bm:he,m:Ae,parent:De}=x,Le=di(R);if(ei(x,!1),he&&Ei(he),!Le&&(ne=de&&de.onVnodeBeforeMount)&&tt(ne,De,R),ei(x,!0),ce&&be){const Ge=()=>{x.subTree=ql(x),be(ce,x.subTree,x,q,null)};Le?R.type.__asyncLoader().then(()=>!x.isUnmounted&&Ge()):Ge()}else{const Ge=x.subTree=ql(x);y(null,Ge,D,j,x,q,Q),R.el=Ge.el}if(Ae&&Ye(Ae,q),!Le&&(ne=de&&de.onVnodeMounted)){const Ge=R;Ye(()=>tt(ne,De,Ge),q)}(R.shapeFlag&256||De&&di(De.vnode)&&De.vnode.shapeFlag&256)&&x.a&&Ye(x.a,q),x.isMounted=!0,R=D=j=null}},ee=x.effect=new zi(K,it,()=>ga(J),x.scope),J=x.update=()=>{ee.dirty&&ee.run()};J.id=x.uid,ei(x,!0),J()},ae=(x,R,D)=>{R.component=x;const j=x.vnode.props;x.vnode=R,x.next=null,Of(x,R.props,j,D),qf(x,R.children,D),vi(),Es(x),yi()},Y=(x,R,D,j,q,Q,le,K,ee=!1)=>{const J=x&&x.children,ne=x?x.shapeFlag:0,ce=R.children,{patchFlag:de,shapeFlag:he}=R;if(de>0){if(de&128){Ve(J,ce,D,j,q,Q,le,K,ee);return}else if(de&256){we(J,ce,D,j,q,Q,le,K,ee);return}}he&8?(ne&16&&ie(J,q,Q),ce!==J&&g(D,ce)):ne&16?he&16?Ve(J,ce,D,j,q,Q,le,K,ee):ie(J,q,Q,!0):(ne&8&&g(D,""),he&16&&M(ce,D,j,q,Q,le,K,ee))},we=(x,R,D,j,q,Q,le,K,ee)=>{x=x||Ti,R=R||Ti;const J=x.length,ne=R.length,ce=Math.min(J,ne);let de;for(de=0;de<ce;de++){const he=R[de]=ee?Ut(R[de]):rt(R[de]);y(x[de],he,D,null,q,Q,le,K,ee)}J>ne?ie(x,q,Q,!0,!1,ce):M(R,D,j,q,Q,le,K,ee,ce)},Ve=(x,R,D,j,q,Q,le,K,ee)=>{let J=0;const ne=R.length;let ce=x.length-1,de=ne-1;for(;J<=ce&&J<=de;){const he=x[J],Ae=R[J]=ee?Ut(R[J]):rt(R[J]);if(vt(he,Ae))y(he,Ae,D,null,q,Q,le,K,ee);else break;J++}for(;J<=ce&&J<=de;){const he=x[ce],Ae=R[de]=ee?Ut(R[de]):rt(R[de]);if(vt(he,Ae))y(he,Ae,D,null,q,Q,le,K,ee);else break;ce--,de--}if(J>ce){if(J<=de){const he=de+1,Ae=he<ne?R[he].el:j;for(;J<=de;)y(null,R[J]=ee?Ut(R[J]):rt(R[J]),D,Ae,q,Q,le,K,ee),J++}}else if(J>de)for(;J<=ce;)Me(x[J],q,Q,!0),J++;else{const he=J,Ae=J,De=new Map;for(J=Ae;J<=de;J++){const ot=R[J]=ee?Ut(R[J]):rt(R[J]);ot.key!=null&&De.set(ot.key,J)}let Le,Ge=0;const bt=de-Ae+1;let Ai=!1,_s=0;const qi=new Array(bt);for(J=0;J<bt;J++)qi[J]=0;for(J=he;J<=ce;J++){const ot=x[J];if(Ge>=bt){Me(ot,q,Q,!0);continue}let wt;if(ot.key!=null)wt=De.get(ot.key);else for(Le=Ae;Le<=de;Le++)if(qi[Le-Ae]===0&&vt(ot,R[Le])){wt=Le;break}wt===void 0?Me(ot,q,Q,!0):(qi[wt-Ae]=J+1,wt>=_s?_s=wt:Ai=!0,y(ot,R[wt],D,null,q,Q,le,K,ee),Ge++)}const bs=Ai?Yf(qi):Ti;for(Le=bs.length-1,J=bt-1;J>=0;J--){const ot=Ae+J,wt=R[ot],vs=ot+1<ne?R[ot+1].el:j;qi[J]===0?y(null,wt,D,vs,q,Q,le,K,ee):Ai&&(Le<0||J!==bs[Le]?qe(wt,D,vs,2):Le--)}}},qe=(x,R,D,j,q=null)=>{const{el:Q,type:le,transition:K,children:ee,shapeFlag:J}=x;if(J&6){qe(x.component.subTree,R,D,j);return}if(J&128){x.suspense.move(R,D,j);return}if(J&64){le.move(x,R,D,Re);return}if(le===Se){o(Q,R,D);for(let ce=0;ce<ee.length;ce++)qe(ee[ce],R,D,j);o(x.anchor,R,D);return}if(le===ci){w(x,R,D);return}if(j!==2&&J&1&&K)if(j===0)K.beforeEnter(Q),o(Q,R,D),Ye(()=>K.enter(Q),q);else{const{leave:ce,delayLeave:de,afterLeave:he}=K,Ae=()=>o(Q,R,D),De=()=>{ce(Q,()=>{Ae(),he&&he()})};de?de(Q,Ae,De):De()}else o(Q,R,D)},Me=(x,R,D,j=!1,q=!1)=>{const{type:Q,props:le,ref:K,children:ee,dynamicChildren:J,shapeFlag:ne,patchFlag:ce,dirs:de}=x;if(K!=null&&Xl(K,null,D,x,!0),ne&256){R.ctx.deactivate(x);return}const he=ne&1&&de,Ae=!di(x);let De;if(Ae&&(De=le&&le.onVnodeBeforeUnmount)&&tt(De,R,x),ne&6)V(x.component,D,j);else{if(ne&128){x.suspense.unmount(D,j);return}he&&At(x,null,R,"beforeUnmount"),ne&64?x.type.remove(x,R,D,q,Re,j):J&&(Q!==Se||ce>0&&ce&64)?ie(J,R,D,!1,!0):(Q===Se&&ce&384||!q&&ne&16)&&ie(ee,R,D),j&&Ct(x)}(Ae&&(De=le&&le.onVnodeUnmounted)||he)&&Ye(()=>{De&&tt(De,R,x),he&&At(x,null,R,"unmounted")},D)},Ct=x=>{const{type:R,el:D,anchor:j,transition:q}=x;if(R===Se){st(D,j);return}if(R===ci){k(x);return}const Q=()=>{d(D),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(x.shapeFlag&1&&q&&!q.persisted){const{leave:le,delayLeave:K}=q,ee=()=>le(D,Q);K?K(x.el,Q,ee):ee()}else Q()},st=(x,R)=>{let D;for(;x!==R;)D=h(x),d(x),x=D;d(R)},V=(x,R,D)=>{const{bum:j,scope:q,update:Q,subTree:le,um:K}=x;j&&Ei(j),q.stop(),Q&&(Q.active=!1,Me(le,x,R,D)),K&&Ye(K,R),Ye(()=>{x.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ie=(x,R,D,j=!1,q=!1,Q=0)=>{for(let le=Q;le<x.length;le++)Me(x[le],R,D,j,q)},Z=x=>x.shapeFlag&6?Z(x.component.subTree):x.shapeFlag&128?x.suspense.next():h(x.anchor||x.el);let oe=!1;const Be=(x,R,D)=>{x==null?R._vnode&&Me(R._vnode,null,null,!0):y(R._vnode||null,x,R,null,null,null,D),oe||(oe=!0,Es(),Kl(),oe=!1),R._vnode=x},Re={p:y,um:Me,m:qe,r:Ct,mt:ye,mc:M,pc:Y,pbc:I,n:Z,o:t};let _e,be;return l&&([_e,be]=l(Re)),{render:Be,hydrate:_e,createApp:Nf(Be,_e)}}function Na({type:t,props:l},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:n}function ei({effect:t,update:l},n){t.allowRecurse=l.allowRecurse=n}function Jd(t,l){return(!t||t&&!t.pendingBranch)&&l&&!l.persisted}function as(t,l,n=!1){const o=t.children,d=l.children;if(se(o)&&se(d))for(let m=0;m<o.length;m++){const p=o[m];let f=d[m];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=d[m]=Ut(d[m]),f.el=p.el),n||as(p,f)),f.type===pi&&(f.el=p.el)}}function Yf(t){const l=t.slice(),n=[0];let o,d,m,p,f;const s=t.length;for(o=0;o<s;o++){const u=t[o];if(u!==0){if(d=n[n.length-1],t[d]<u){l[o]=d,n.push(o);continue}for(m=0,p=n.length-1;m<p;)f=m+p>>1,t[n[f]]<u?m=f+1:p=f;u<t[n[m]]&&(m>0&&(l[o]=n[m-1]),n[m]=o)}}for(m=n.length,p=n[m-1];m-- >0;)n[m]=p,p=l[p];return n}function Gd(t){const l=t.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:Gd(l)}const Wf=t=>t.__isTeleport,il=t=>t&&(t.disabled||t.disabled===""),Os=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Hs=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,rn=(t,l)=>{const n=t&&t.to;return He(n)?l?l(n):null:n},Kf={name:"Teleport",__isTeleport:!0,process(t,l,n,o,d,m,p,f,s,u){const{mc:g,pc:c,pbc:h,o:{insert:v,querySelector:r,createText:y,createComment:A}}=u,$=il(l.props);let{shapeFlag:b,children:w,dynamicChildren:k}=l;if(t==null){const T=l.el=y(""),E=l.anchor=y("");v(T,n,o),v(E,n,o);const z=l.target=rn(l.props,r),M=l.targetAnchor=y("");z&&(v(M,z),p==="svg"||Os(z)?p="svg":(p==="mathml"||Hs(z))&&(p="mathml"));const P=(I,X)=>{b&16&&g(w,I,X,d,m,p,f,s)};$?P(n,E):z&&P(z,M)}else{l.el=t.el;const T=l.anchor=t.anchor,E=l.target=t.target,z=l.targetAnchor=t.targetAnchor,M=il(t.props),P=M?n:E,I=M?T:z;if(p==="svg"||Os(E)?p="svg":(p==="mathml"||Hs(E))&&(p="mathml"),k?(h(t.dynamicChildren,k,P,d,m,p,f),as(t,l,!0)):s||c(t,l,P,I,d,m,p,f,!1),$)M?l.props&&t.props&&l.props.to!==t.props.to&&(l.props.to=t.props.to):Vl(l,n,T,u,1);else if((l.props&&l.props.to)!==(t.props&&t.props.to)){const X=l.target=rn(l.props,r);X&&Vl(l,X,null,u,0)}else M&&Vl(l,E,z,u,1)}Yd(l)},remove(t,l,n,o,{um:d,o:{remove:m}},p){const{shapeFlag:f,children:s,anchor:u,targetAnchor:g,target:c,props:h}=t;if(c&&m(g),p&&m(u),f&16){const v=p||!il(h);for(let r=0;r<s.length;r++){const y=s[r];d(y,l,n,v,!!y.dynamicChildren)}}},move:Vl,hydrate:Qf};function Vl(t,l,n,{o:{insert:o},m:d},m=2){m===0&&o(t.targetAnchor,l,n);const{el:p,anchor:f,shapeFlag:s,children:u,props:g}=t,c=m===2;if(c&&o(p,l,n),(!c||il(g))&&s&16)for(let h=0;h<u.length;h++)d(u[h],l,n,2);c&&o(f,l,n)}function Qf(t,l,n,o,d,m,{o:{nextSibling:p,parentNode:f,querySelector:s}},u){const g=l.target=rn(l.props,s);if(g){const c=g._lpa||g.firstChild;if(l.shapeFlag&16)if(il(l.props))l.anchor=u(p(t),l,f(t),n,o,d,m),l.targetAnchor=c;else{l.anchor=p(t);let h=c;for(;h;)if(h=p(h),h&&h.nodeType===8&&h.data==="teleport anchor"){l.targetAnchor=h,g._lpa=l.targetAnchor&&p(l.targetAnchor);break}u(c,l,g,n,o,d,m)}Yd(l)}return l.anchor&&p(l.anchor)}const ns=Kf;function Yd(t){const l=t.ctx;if(l&&l.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const Se=Symbol.for("v-fgt"),pi=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),ci=Symbol.for("v-stc"),ll=[];let lt=null;function te(t=!1){ll.push(lt=t?null:[])}function Wd(){ll.pop(),lt=ll[ll.length-1]||null}let gi=1;function dn(t){gi+=t}function Kd(t){return t.dynamicChildren=gi>0?lt||Ti:null,Wd(),gi>0&&lt&&lt.push(t),t}function re(t,l,n,o,d,m){return Kd(C(t,l,n,o,d,m,!0))}function Je(t,l,n,o,d){return Kd(e(t,l,n,o,d,!0))}function kt(t){return t?t.__v_isVNode===!0:!1}function vt(t,l){return t.type===l.type&&t.key===l.key}function Xf(t){}const Sa="__vInternal",Qd=({key:t})=>t??null,Ul=({ref:t,ref_key:l,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Ke(t)||fe(t)?{i:je,r:t,k:l,f:!!n}:t:null);function C(t,l=null,n=null,o=0,d=null,m=t===Se?0:1,p=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:t,props:l,key:l&&Qd(l),ref:l&&Ul(l),scopeId:_a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:o,dynamicProps:d,dynamicChildren:null,appContext:null,ctx:je};return f?(ss(s,n),m&128&&t.normalize(s)):n&&(s.shapeFlag|=He(n)?8:16),gi>0&&!p&&lt&&(s.patchFlag>0||m&6)&&s.patchFlag!==32&&lt.push(s),s}const e=Zf;function Zf(t,l=null,n=null,o=0,d=null,m=!1){if((!t||t===fd)&&(t=Xe),kt(t)){const f=$t(t,l,!0);return n&&ss(f,n),gi>0&&!m&&lt&&(f.shapeFlag&6?lt[lt.indexOf(t)]=f:lt.push(f)),f.patchFlag|=-2,f}if(op(t)&&(t=t.__vccOpts),l){l=Xd(l);let{class:f,style:s}=l;f&&!He(f)&&(l.class=Cl(f)),Fe(s)&&(qn(s)&&!se(s)&&(s=Oe({},s)),l.style=yl(s))}const p=He(t)?1:pd(t)?128:Wf(t)?64:Fe(t)?4:fe(t)?2:0;return C(t,l,n,o,d,p,m,!0)}function Xd(t){return t?qn(t)||Sa in t?Oe({},t):t:null}function $t(t,l,n=!1){const{props:o,ref:d,patchFlag:m,children:p}=t,f=l?$l(o||{},l):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Qd(f),ref:l&&l.ref?n&&d?se(d)?d.concat(Ul(l)):[d,Ul(l)]:Ul(l):d,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:p,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:l&&t.type!==Se?m===-1?16:m|16:m,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function a(t=" ",l=0){return e(pi,null,t,l)}function ep(t,l){const n=e(ci,null,t);return n.staticCount=l,n}function Zd(t="",l=!1){return l?(te(),Je(Xe,null,t)):e(Xe,null,t)}function rt(t){return t==null||typeof t=="boolean"?e(Xe):se(t)?e(Se,null,t.slice()):typeof t=="object"?Ut(t):e(pi,null,String(t))}function Ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$t(t)}function ss(t,l){let n=0;const{shapeFlag:o}=t;if(l==null)l=null;else if(se(l))n=16;else if(typeof l=="object")if(o&65){const d=l.default;d&&(d._c&&(d._d=!1),ss(t,d()),d._c&&(d._d=!0));return}else{n=32;const d=l._;!d&&!(Sa in l)?l._ctx=je:d===3&&je&&(je.slots._===1?l._=1:(l._=2,t.patchFlag|=1024))}else fe(l)?(l={default:l,_ctx:je},n=32):(l=String(l),o&64?(n=16,l=[a(l)]):n=8);t.children=l,t.shapeFlag|=n}function $l(...t){const l={};for(let n=0;n<t.length;n++){const o=t[n];for(const d in o)if(d==="class")l.class!==o.class&&(l.class=Cl([l.class,o.class]));else if(d==="style")l.style=yl([l.style,o.style]);else if(bl(d)){const m=l[d],p=o[d];p&&m!==p&&!(se(m)&&m.includes(p))&&(l[d]=m?[].concat(m,p):p)}else d!==""&&(l[d]=o[d])}return l}function tt(t,l,n,o=null){ft(t,l,7,[n,o])}const tp=Id();let ip=0;function ec(t,l,n){const o=t.type,d=(l?l.appContext:t.appContext)||tp,m={uid:ip++,vnode:t,type:o,parent:l,appContext:d,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(d.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vd(o,d),emitsOptions:md(o,d),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:o.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=l?l.root:m,m.emit=Ym.bind(null,m),t.ce&&t.ce(m),m}let Ue=null;const Ft=()=>Ue||je;let Zl,cn;{const t=Ir(),l=(n,o)=>{let d;return(d=t[n])||(d=t[n]=[]),d.push(o),m=>{d.length>1?d.forEach(p=>p(m)):d[0](m)}};Zl=l("__VUE_INSTANCE_SETTERS__",n=>Ue=n),cn=l("__VUE_SSR_SETTERS__",n=>Tl=n)}const hi=t=>{const l=Ue;return Zl(t),t.scope.on(),()=>{t.scope.off(),Zl(l)}},mn=()=>{Ue&&Ue.scope.off(),Zl(null)};function tc(t){return t.vnode.shapeFlag&4}let Tl=!1;function ic(t,l=!1){l&&cn(l);const{props:n,children:o}=t.vnode,d=tc(t);Lf(t,n,d,l),jf(t,o);const m=d?lp(t,l):void 0;return l&&cn(!1),m}function lp(t,l){const n=t.type;t.accessCache=Object.create(null),t.proxy=Un(new Proxy(t.ctx,nn));const{setup:o}=n;if(o){const d=t.setupContext=o.length>1?ac(t):null,m=hi(t);vi();const p=Pt(o,t,0,[t.props,d]);if(yi(),m(),In(p)){if(p.then(mn,mn),l)return p.then(f=>{fn(t,f,l)}).catch(f=>{Ci(f,t,0)});t.asyncDep=p}else fn(t,p,l)}else lc(t,l)}function fn(t,l,n){fe(l)?t.type.__ssrInlineRender?t.ssrRender=l:t.render=l:Fe(l)&&(t.setupState=Yn(l)),lc(t,n)}let ea,pn;function ap(t){ea=t,pn=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,bf))}}const np=()=>!ea;function lc(t,l,n){const o=t.type;if(!t.render){if(!l&&ea&&!o.render){const d=o.template||is(t).template;if(d){const{isCustomElement:m,compilerOptions:p}=t.appContext.config,{delimiters:f,compilerOptions:s}=o,u=Oe(Oe({isCustomElement:m,delimiters:f},p),s);o.render=ea(d,u)}}t.render=o.render||it,pn&&pn(t)}{const d=hi(t);vi();try{Pf(t)}finally{yi(),d()}}}function sp(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(l,n){return nt(t,"get","$attrs"),l[n]}}))}function ac(t){const l=n=>{t.exposed=n||{}};return{get attrs(){return sp(t)},slots:t.slots,emit:t.emit,expose:l}}function ka(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yn(Un(t.exposed)),{get(l,n){if(n in l)return l[n];if(n in tl)return tl[n](t)},has(l,n){return n in l||n in tl}}))}function gn(t,l=!0){return fe(t)?t.displayName||t.name:t.name||l&&t.__name}function op(t){return fe(t)&&"__vccOpts"in t}const F=(t,l)=>Bm(t,l,Tl);function up(t,l,n=Pe){const o=Ft(),d=et(l),m=ct(l),p=sd((s,u)=>{let g;return yd(()=>{const c=t[l];yt(g,c)&&(g=c,u())}),{get(){return s(),n.get?n.get(g):g},set(c){const h=o.vnode.props;!(h&&(l in h||d in h||m in h)&&(`onUpdate:${l}`in h||`onUpdate:${d}`in h||`onUpdate:${m}`in h))&&yt(c,g)&&(g=c,u()),o.emit(`update:${l}`,n.set?n.set(c):c)}}}),f=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return p[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?t[f]||{}:p,done:!1}:{done:!0}}}},p}function U(t,l,n){const o=arguments.length;return o===2?Fe(l)&&!se(l)?kt(l)?e(t,null,[l]):e(t,l):e(t,null,l):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&kt(n)&&(n=[n]),e(t,l,n))}function rp(){}function dp(t,l,n,o){const d=n[o];if(d&&nc(d,t))return d;const m=l();return m.memo=t.slice(),n[o]=m}function nc(t,l){const n=t.memo;if(n.length!=l.length)return!1;for(let o=0;o<n.length;o++)if(yt(n[o],l[o]))return!1;return gi>0&&lt&&lt.push(t),!0}const sc="3.4.15",cp=it,mp=jm,fp=ki,pp=cd,gp={createComponentInstance:ec,setupComponent:ic,renderComponentRoot:ql,setCurrentRenderingInstance:ml,isVNode:kt,normalizeVNode:rt},hp=gp,_p=null,bp=null,vp=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yp="http://www.w3.org/2000/svg",Cp="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,js=Jt&&Jt.createElement("template"),wp={insert:(t,l,n)=>{l.insertBefore(t,n||null)},remove:t=>{const l=t.parentNode;l&&l.removeChild(t)},createElement:(t,l,n,o)=>{const d=l==="svg"?Jt.createElementNS(yp,t):l==="mathml"?Jt.createElementNS(Cp,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&d.setAttribute("multiple",o.multiple),d},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,l)=>{t.nodeValue=l},setElementText:(t,l)=>{t.textContent=l},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,l){t.setAttribute(l,"")},insertStaticContent(t,l,n,o,d,m){const p=n?n.previousSibling:l.lastChild;if(d&&(d===m||d.nextSibling))for(;l.insertBefore(d.cloneNode(!0),n),!(d===m||!(d=d.nextSibling)););else{js.innerHTML=o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t;const f=js.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}l.insertBefore(f,n)}return[p?p.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}},Lt="transition",Ui="animation",Di=Symbol("_vtc"),os=(t,{slots:l})=>U(wd,uc(t),l);os.displayName="Transition";const oc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ap=os.props=Oe({},ts,oc),ti=(t,l=[])=>{se(t)?t.forEach(n=>n(...l)):t&&t(...l)},qs=t=>t?se(t)?t.some(l=>l.length>1):t.length>1:!1;function uc(t){const l={};for(const H in t)H in oc||(l[H]=t[H]);if(t.css===!1)return l;const{name:n="v",type:o,duration:d,enterFromClass:m=`${n}-enter-from`,enterActiveClass:p=`${n}-enter-active`,enterToClass:f=`${n}-enter-to`,appearFromClass:s=m,appearActiveClass:u=p,appearToClass:g=f,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,r=Sp(d),y=r&&r[0],A=r&&r[1],{onBeforeEnter:$,onEnter:b,onEnterCancelled:w,onLeave:k,onLeaveCancelled:T,onBeforeAppear:E=$,onAppear:z=b,onAppearCancelled:M=w}=l,P=(H,ue,ye)=>{Ht(H,ue?g:f),Ht(H,ue?u:p),ye&&ye()},I=(H,ue)=>{H._isLeaving=!1,Ht(H,c),Ht(H,v),Ht(H,h),ue&&ue()},X=H=>(ue,ye)=>{const N=H?z:b,O=()=>P(ue,H,ye);ti(N,[ue,O]),Us(()=>{Ht(ue,H?s:m),xt(ue,H?g:f),qs(N)||Js(ue,o,y,O)})};return Oe(l,{onBeforeEnter(H){ti($,[H]),xt(H,m),xt(H,p)},onBeforeAppear(H){ti(E,[H]),xt(H,s),xt(H,u)},onEnter:X(!1),onAppear:X(!0),onLeave(H,ue){H._isLeaving=!0;const ye=()=>I(H,ue);xt(H,c),dc(),xt(H,h),Us(()=>{H._isLeaving&&(Ht(H,c),xt(H,v),qs(k)||Js(H,o,A,ye))}),ti(k,[H,ye])},onEnterCancelled(H){P(H,!1),ti(w,[H])},onAppearCancelled(H){P(H,!0),ti(M,[H])},onLeaveCancelled(H){I(H),ti(T,[H])}})}function Sp(t){if(t==null)return null;if(Fe(t))return[Va(t.enter),Va(t.leave)];{const l=Va(t);return[l,l]}}function Va(t){return Gl(t)}function xt(t,l){l.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Di]||(t[Di]=new Set)).add(l)}function Ht(t,l){l.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const n=t[Di];n&&(n.delete(l),n.size||(t[Di]=void 0))}function Us(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let kp=0;function Js(t,l,n,o){const d=t._endId=++kp,m=()=>{d===t._endId&&o()};if(n)return setTimeout(m,n);const{type:p,timeout:f,propCount:s}=rc(t,l);if(!p)return o();const u=p+"end";let g=0;const c=()=>{t.removeEventListener(u,h),m()},h=v=>{v.target===t&&++g>=s&&c()};setTimeout(()=>{g<s&&c()},f+1),t.addEventListener(u,h)}function rc(t,l){const n=window.getComputedStyle(t),o=r=>(n[r]||"").split(", "),d=o(`${Lt}Delay`),m=o(`${Lt}Duration`),p=Gs(d,m),f=o(`${Ui}Delay`),s=o(`${Ui}Duration`),u=Gs(f,s);let g=null,c=0,h=0;l===Lt?p>0&&(g=Lt,c=p,h=m.length):l===Ui?u>0&&(g=Ui,c=u,h=s.length):(c=Math.max(p,u),g=c>0?p>u?Lt:Ui:null,h=g?g===Lt?m.length:s.length:0);const v=g===Lt&&/\b(transform|all)(,|$)/.test(o(`${Lt}Property`).toString());return{type:g,timeout:c,propCount:h,hasTransform:v}}function Gs(t,l){for(;t.length<l.length;)t=t.concat(t);return Math.max(...l.map((n,o)=>Ys(n)+Ys(t[o])))}function Ys(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function dc(){return document.body.offsetHeight}function $p(t,l,n){const o=t[Di];o&&(l=(l?[l,...o]:[...o]).join(" ")),l==null?t.removeAttribute("class"):n?t.setAttribute("class",l):t.className=l}const us=Symbol("_vod"),cc={beforeMount(t,{value:l},{transition:n}){t[us]=t.style.display==="none"?"":t.style.display,n&&l?n.beforeEnter(t):Ji(t,l)},mounted(t,{value:l},{transition:n}){n&&l&&n.enter(t)},updated(t,{value:l,oldValue:n},{transition:o}){!l!=!n&&(o?l?(o.beforeEnter(t),Ji(t,!0),o.enter(t)):o.leave(t,()=>{Ji(t,!1)}):Ji(t,l))},beforeUnmount(t,{value:l}){Ji(t,l)}};function Ji(t,l){t.style.display=l?t[us]:"none"}function Tp(){cc.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const mc=Symbol("");function xp(t){const l=Ft();if(!l)return;const n=l.ut=(d=t(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(m=>_n(m,d))},o=()=>{const d=t(l.proxy);hn(l.subTree,d),n(d)};vd(o),Xt(()=>{const d=new MutationObserver(o);d.observe(l.subTree.el.parentNode,{childList:!0}),wi(()=>d.disconnect())})}function hn(t,l){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{hn(n.activeBranch,l)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)_n(t.el,l);else if(t.type===Se)t.children.forEach(n=>hn(n,l));else if(t.type===ci){let{el:n,anchor:o}=t;for(;n&&(_n(n,l),n!==o);)n=n.nextSibling}}function _n(t,l){if(t.nodeType===1){const n=t.style;let o="";for(const d in l)n.setProperty(`--${d}`,l[d]),o+=`--${d}: ${l[d]};`;n[mc]=o}}function Ep(t,l,n){const o=t.style,d=o.display,m=He(n);if(n&&!m){if(l&&!He(l))for(const p in l)n[p]==null&&bn(o,p,"");for(const p in n)bn(o,p,n[p])}else if(m){if(l!==n){const p=o[mc];p&&(n+=";"+p),o.cssText=n}}else l&&t.removeAttribute("style");us in t&&(o.display=d)}const Ws=/\s*!important$/;function bn(t,l,n){if(se(n))n.forEach(o=>bn(t,l,o));else if(n==null&&(n=""),l.startsWith("--"))t.setProperty(l,n);else{const o=Bp(t,l);Ws.test(n)?t.setProperty(ct(o),n.replace(Ws,""),"important"):t[o]=n}}const Ks=["Webkit","Moz","ms"],La={};function Bp(t,l){const n=La[l];if(n)return n;let o=et(l);if(o!=="filter"&&o in t)return La[l]=o;o=vl(o);for(let d=0;d<Ks.length;d++){const m=Ks[d]+o;if(m in t)return La[l]=m}return l}const Qs="http://www.w3.org/1999/xlink";function Rp(t,l,n,o,d){if(o&&l.startsWith("xlink:"))n==null?t.removeAttributeNS(Qs,l.slice(6,l.length)):t.setAttributeNS(Qs,l,n);else{const m=lm(l);n==null||m&&!Nr(n)?t.removeAttribute(l):t.setAttribute(l,m?"":n)}}function Pp(t,l,n,o,d,m,p){if(l==="innerHTML"||l==="textContent"){o&&p(o,d,m),t[l]=n??"";return}const f=t.tagName;if(l==="value"&&f!=="PROGRESS"&&!f.includes("-")){t._value=n;const u=f==="OPTION"?t.getAttribute("value"):t.value,g=n??"";u!==g&&(t.value=g),n==null&&t.removeAttribute(l);return}let s=!1;if(n===""||n==null){const u=typeof t[l];u==="boolean"?n=Nr(n):n==null&&u==="string"?(n="",s=!0):u==="number"&&(n=0,s=!0)}try{t[l]=n}catch{}s&&t.removeAttribute(l)}function Bt(t,l,n,o){t.addEventListener(l,n,o)}function zp(t,l,n,o){t.removeEventListener(l,n,o)}const Xs=Symbol("_vei");function Mp(t,l,n,o,d=null){const m=t[Xs]||(t[Xs]={}),p=m[l];if(o&&p)p.value=o;else{const[f,s]=Dp(l);if(o){const u=m[l]=Np(o,d);Bt(t,f,u,s)}else p&&(zp(t,f,p,s),m[l]=void 0)}}const Zs=/(?:Once|Passive|Capture)$/;function Dp(t){let l;if(Zs.test(t)){l={};let o;for(;o=t.match(Zs);)t=t.slice(0,t.length-o[0].length),l[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ct(t.slice(2)),l]}let Oa=0;const Fp=Promise.resolve(),Ip=()=>Oa||(Fp.then(()=>Oa=0),Oa=Date.now());function Np(t,l){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;ft(Vp(o,n.value),l,5,[o])};return n.value=t,n.attached=Ip(),n}function Vp(t,l){if(se(l)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},l.map(o=>d=>!d._stopped&&o&&o(d))}else return l}const eo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Lp=(t,l,n,o,d,m,p,f,s)=>{const u=d==="svg";l==="class"?$p(t,o,u):l==="style"?Ep(t,n,o):bl(l)?Dn(l)||Mp(t,l,n,o,p):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Op(t,l,o,u))?Pp(t,l,o,m,p,f,s):(l==="true-value"?t._trueValue=o:l==="false-value"&&(t._falseValue=o),Rp(t,l,o,u))};function Op(t,l,n,o){if(o)return!!(l==="innerHTML"||l==="textContent"||l in t&&eo(l)&&fe(n));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&t.tagName==="INPUT"||l==="type"&&t.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const d=t.tagName;if(d==="IMG"||d==="VIDEO"||d==="CANVAS"||d==="SOURCE")return!1}return eo(l)&&He(n)?!1:l in t}/*! #__NO_SIDE_EFFECTS__ */function fc(t,l){const n=B(t);class o extends $a{constructor(m){super(n,m,l)}}return o.def=n,o}/*! #__NO_SIDE_EFFECTS__ */const Hp=t=>fc(t,Sc),jp=typeof HTMLElement<"u"?HTMLElement:class{};class $a extends jp{constructor(l,n={},o){super(),this._def=l,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Oi(()=>{this._connected||(vn(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const d of o)this._setAttr(d.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(o,d=!1)=>{const{props:m,styles:p}=o;let f;if(m&&!se(m))for(const s in m){const u=m[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Gl(this._props[s])),(f||(f=Object.create(null)))[et(s)]=!0)}this._numberProps=f,d&&this._resolveProps(o),this._applyStyles(p),this._update()},n=this._def.__asyncLoader;n?n().then(o=>l(o,!0)):l(this._def)}_resolveProps(l){const{props:n}=l,o=se(n)?n:Object.keys(n||{});for(const d of Object.keys(this))d[0]!=="_"&&o.includes(d)&&this._setProp(d,this[d],!0,!1);for(const d of o.map(et))Object.defineProperty(this,d,{get(){return this._getProp(d)},set(m){this._setProp(d,m)}})}_setAttr(l){let n=this.getAttribute(l);const o=et(l);this._numberProps&&this._numberProps[o]&&(n=Gl(n)),this._setProp(o,n,!1)}_getProp(l){return this._props[l]}_setProp(l,n,o=!0,d=!0){n!==this._props[l]&&(this._props[l]=n,d&&this._instance&&this._update(),o&&(n===!0?this.setAttribute(ct(l),""):typeof n=="string"||typeof n=="number"?this.setAttribute(ct(l),n+""):n||this.removeAttribute(ct(l))))}_update(){vn(this._createVNode(),this.shadowRoot)}_createVNode(){const l=e(this._def,Oe({},this._props));return this._instance||(l.ce=n=>{this._instance=n,n.isCE=!0;const o=(m,p)=>{this.dispatchEvent(new CustomEvent(m,{detail:p}))};n.emit=(m,...p)=>{o(m,p),ct(m)!==m&&o(ct(m),p)};let d=this;for(;d=d&&(d.parentNode||d.host);)if(d instanceof $a){n.parent=d._instance,n.provides=d._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(n=>{const o=document.createElement("style");o.textContent=n,this.shadowRoot.appendChild(o)})}}function qp(t="$style"){{const l=Ft();if(!l)return Pe;const n=l.type.__cssModules;if(!n)return Pe;const o=n[t];return o||Pe}}const pc=new WeakMap,gc=new WeakMap,ta=Symbol("_moveCb"),to=Symbol("_enterCb"),hc={name:"TransitionGroup",props:Oe({},Ap,{tag:String,moveClass:String}),setup(t,{slots:l}){const n=Ft(),o=es();let d,m;return wa(()=>{if(!d.length)return;const p=t.moveClass||`${t.name||"v"}-move`;if(!Kp(d[0].el,n.vnode.el,p))return;d.forEach(Gp),d.forEach(Yp);const f=d.filter(Wp);dc(),f.forEach(s=>{const u=s.el,g=u.style;xt(u,p),g.transform=g.webkitTransform=g.transitionDuration="";const c=u[ta]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",c),u[ta]=null,Ht(u,p))};u.addEventListener("transitionend",c)})}),()=>{const p=ke(t),f=uc(p);let s=p.tag||Se;d=m,m=l.default?ya(l.default()):[];for(let u=0;u<m.length;u++){const g=m[u];g.key!=null&&fi(g,Mi(g,f,o,n))}if(d)for(let u=0;u<d.length;u++){const g=d[u];fi(g,Mi(g,f,o,n)),pc.set(g,g.el.getBoundingClientRect())}return e(s,null,m)}}},Up=t=>delete t.mode;hc.props;const Jp=hc;function Gp(t){const l=t.el;l[ta]&&l[ta](),l[to]&&l[to]()}function Yp(t){gc.set(t,t.el.getBoundingClientRect())}function Wp(t){const l=pc.get(t),n=gc.get(t),o=l.left-n.left,d=l.top-n.top;if(o||d){const m=t.el.style;return m.transform=m.webkitTransform=`translate(${o}px,${d}px)`,m.transitionDuration="0s",t}}function Kp(t,l,n){const o=t.cloneNode(),d=t[Di];d&&d.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),n.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const m=l.nodeType===1?l:l.parentNode;m.appendChild(o);const{hasTransform:p}=rc(o);return m.removeChild(o),p}const Qt=t=>{const l=t.props["onUpdate:modelValue"]||!1;return se(l)?n=>Ei(l,n):l};function Qp(t){t.target.composing=!0}function io(t){const l=t.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const _t=Symbol("_assign"),ia={created(t,{modifiers:{lazy:l,trim:n,number:o}},d){t[_t]=Qt(d);const m=o||d.props&&d.props.type==="number";Bt(t,l?"change":"input",p=>{if(p.target.composing)return;let f=t.value;n&&(f=f.trim()),m&&(f=ol(f)),t[_t](f)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),l||(Bt(t,"compositionstart",Qp),Bt(t,"compositionend",io),Bt(t,"change",io))},mounted(t,{value:l}){t.value=l??""},beforeUpdate(t,{value:l,modifiers:{lazy:n,trim:o,number:d}},m){if(t[_t]=Qt(m),t.composing)return;const p=d||t.type==="number"?ol(t.value):t.value,f=l??"";p!==f&&(document.activeElement===t&&t.type!=="range"&&(n||o&&t.value.trim()===f)||(t.value=f))}},rs={deep:!0,created(t,l,n){t[_t]=Qt(n),Bt(t,"change",()=>{const o=t._modelValue,d=Fi(t),m=t.checked,p=t[_t];if(se(o)){const f=ca(o,d),s=f!==-1;if(m&&!s)p(o.concat(d));else if(!m&&s){const u=[...o];u.splice(f,1),p(u)}}else if(bi(o)){const f=new Set(o);m?f.add(d):f.delete(d),p(f)}else p(bc(t,m))})},mounted:lo,beforeUpdate(t,l,n){t[_t]=Qt(n),lo(t,l,n)}};function lo(t,{value:l,oldValue:n},o){t._modelValue=l,se(l)?t.checked=ca(l,o.props.value)>-1:bi(l)?t.checked=l.has(o.props.value):l!==n&&(t.checked=zt(l,bc(t,!0)))}const ds={created(t,{value:l},n){t.checked=zt(l,n.props.value),t[_t]=Qt(n),Bt(t,"change",()=>{t[_t](Fi(t))})},beforeUpdate(t,{value:l,oldValue:n},o){t[_t]=Qt(o),l!==n&&(t.checked=zt(l,o.props.value))}},_c={deep:!0,created(t,{value:l,modifiers:{number:n}},o){const d=bi(l);Bt(t,"change",()=>{const m=Array.prototype.filter.call(t.options,p=>p.selected).map(p=>n?ol(Fi(p)):Fi(p));t[_t](t.multiple?d?new Set(m):m:m[0]),t._assigning=!0,Oi(()=>{t._assigning=!1})}),t[_t]=Qt(o)},mounted(t,{value:l,oldValue:n,modifiers:{number:o}}){ao(t,l,n,o)},beforeUpdate(t,l,n){t[_t]=Qt(n)},updated(t,{value:l,oldValue:n,modifiers:{number:o}}){t._assigning||ao(t,l,n,o)}};function ao(t,l,n,o){const d=t.multiple,m=se(l);if(!(d&&!m&&!bi(l))&&!(m&&zt(l,n))){for(let p=0,f=t.options.length;p<f;p++){const s=t.options[p],u=Fi(s);if(d)if(m){const g=typeof u;g==="string"||g==="number"?s.selected=l.includes(o?ol(u):u):s.selected=ca(l,u)>-1}else s.selected=l.has(u);else if(zt(Fi(s),l)){t.selectedIndex!==p&&(t.selectedIndex=p);return}}!d&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fi(t){return"_value"in t?t._value:t.value}function bc(t,l){const n=l?"_trueValue":"_falseValue";return n in t?t[n]:l}const vc={created(t,l,n){Ll(t,l,n,null,"created")},mounted(t,l,n){Ll(t,l,n,null,"mounted")},beforeUpdate(t,l,n,o){Ll(t,l,n,o,"beforeUpdate")},updated(t,l,n,o){Ll(t,l,n,o,"updated")}};function yc(t,l){switch(t){case"SELECT":return _c;case"TEXTAREA":return ia;default:switch(l){case"checkbox":return rs;case"radio":return ds;default:return ia}}}function Ll(t,l,n,o,d){const p=yc(t.tagName,n.props&&n.props.type)[d];p&&p(t,l,n,o)}function Xp(){ia.getSSRProps=({value:t})=>({value:t}),ds.getSSRProps=({value:t},l)=>{if(l.props&&zt(l.props.value,t))return{checked:!0}},rs.getSSRProps=({value:t},l)=>{if(se(t)){if(l.props&&ca(t,l.props.value)>-1)return{checked:!0}}else if(bi(t)){if(l.props&&t.has(l.props.value))return{checked:!0}}else if(t)return{checked:!0}},vc.getSSRProps=(t,l)=>{if(typeof l.type!="string")return;const n=yc(l.type.toUpperCase(),l.props&&l.props.type);if(n.getSSRProps)return n.getSSRProps(t,l)}}const Zp=["ctrl","shift","alt","meta"],eg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,l)=>Zp.some(n=>t[`${n}Key`]&&!l.includes(n))},pt=(t,l)=>{const n=t._withMods||(t._withMods={}),o=l.join(".");return n[o]||(n[o]=(d,...m)=>{for(let p=0;p<l.length;p++){const f=eg[l[p]];if(f&&f(d,l))return}return t(d,...m)})},tg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ig=(t,l)=>{const n=t._withKeys||(t._withKeys={}),o=l.join(".");return n[o]||(n[o]=d=>{if(!("key"in d))return;const m=ct(d.key);if(l.some(p=>p===m||tg[p]===m))return t(d)})},Cc=Oe({patchProp:Lp},wp);let al,no=!1;function wc(){return al||(al=jd(Cc))}function Ac(){return al=no?al:qd(Cc),no=!0,al}const vn=(...t)=>{wc().render(...t)},Sc=(...t)=>{Ac().hydrate(...t)},kc=(...t)=>{const l=wc().createApp(...t),{mount:n}=l;return l.mount=o=>{const d=Tc(o);if(!d)return;const m=l._component;!fe(m)&&!m.render&&!m.template&&(m.template=d.innerHTML),d.innerHTML="";const p=n(d,!1,$c(d));return d instanceof Element&&(d.removeAttribute("v-cloak"),d.setAttribute("data-v-app","")),p},l},lg=(...t)=>{const l=Ac().createApp(...t),{mount:n}=l;return l.mount=o=>{const d=Tc(o);if(d)return n(d,!0,$c(d))},l};function $c(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Tc(t){return He(t)?document.querySelector(t):t}let so=!1;const ag=()=>{so||(so=!0,Xp(),Tp())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ng=()=>{},sg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:wd,BaseTransitionPropsValidators:ts,Comment:Xe,DeprecationTypes:vp,EffectScope:Vn,ErrorCodes:Hm,ErrorTypeStrings:mp,Fragment:Se,KeepAlive:pf,ReactiveEffect:zi,Static:ci,Suspense:af,Teleport:ns,Text:pi,TrackOpTypes:Vm,Transition:os,TransitionGroup:Jp,TriggerOpTypes:Lm,VueElement:$a,assertNumber:Om,callWithAsyncErrorHandling:ft,callWithErrorHandling:Pt,camelize:et,capitalize:vl,cloneVNode:$t,compatUtils:bp,compile:ng,computed:F,createApp:kc,createBlock:Je,createCommentVNode:Zd,createElementBlock:re,createElementVNode:C,createHydrationRenderer:qd,createPropsRestProxy:Bf,createRenderer:jd,createSSRApp:lg,createSlots:hf,createStaticVNode:ep,createTextVNode:a,createVNode:e,customRef:sd,defineAsyncComponent:mf,defineComponent:B,defineCustomElement:fc,defineEmits:yf,defineExpose:Cf,defineModel:Sf,defineOptions:wf,defineProps:vf,defineSSRCustomElement:Hp,defineSlots:Af,devtools:fp,effect:um,effectScope:nm,getCurrentInstance:Ft,getCurrentScope:Or,getTransitionRawChildren:ya,guardReactiveProps:Xd,h:U,handleError:Ci,hasInjectionContext:Vf,hydrate:Sc,initCustomFormatter:rp,initDirectivesForSSR:ag,inject:ze,isMemoSame:nc,isProxy:qn,isReactive:ui,isReadonly:mi,isRef:Ke,isRuntimeOnly:np,isShallow:ul,isVNode:kt,markRaw:Un,mergeDefaults:xf,mergeModels:Ef,mergeProps:$l,nextTick:Oi,normalizeClass:Cl,normalizeProps:tm,normalizeStyle:yl,onActivated:Sd,onBeforeMount:Td,onBeforeUnmount:Aa,onBeforeUpdate:xd,onDeactivated:kd,onErrorCaptured:Pd,onMounted:Xt,onRenderTracked:Rd,onRenderTriggered:Bd,onScopeDispose:sm,onServerPrefetch:Ed,onUnmounted:wi,onUpdated:wa,openBlock:te,popScopeId:Al,provide:We,proxyRefs:Yn,pushScopeId:wl,queuePostFlushCb:Wl,reactive:Mt,readonly:jn,ref:L,registerRuntimeCompiler:ap,render:vn,renderList:mt,renderSlot:zd,resolveComponent:_,resolveDirective:ba,resolveDynamicComponent:tf,resolveFilter:_p,resolveTransitionHooks:Mi,setBlockTracking:dn,setDevtoolsHook:pp,setTransitionHooks:fi,shallowReactive:id,shallowReadonly:Em,shallowRef:ad,ssrContextKey:hd,ssrUtils:hp,stop:rm,toDisplayString:Ee,toHandlerKey:el,toHandlers:_f,toRaw:ke,toRef:en,toRefs:Fm,toValue:zm,transformVNodeArgs:Xf,triggerRef:Pm,unref:ri,useAttrs:Tf,useCssModule:qp,useCssVars:xp,useModel:up,useSSRContext:_d,useSlots:$f,useTransitionState:es,vModelCheckbox:rs,vModelDynamic:vc,vModelRadio:ds,vModelSelect:_c,vModelText:ia,vShow:cc,version:sc,warn:cp,watch:at,watchEffect:bd,watchPostEffect:vd,watchSyncEffect:yd,withAsyncContext:Rf,withCtx:i,withDefaults:kf,withDirectives:va,withKeys:ig,withMemo:dp,withModifiers:pt,withScopeId:Wm},Symbol.toStringTag,{value:"Module"})),og=B({name:"App"}),pe=(t,l)=>{const n=t.__vccOpts||t;for(const[o,d]of l)n[o]=d;return n};function ug(t,l,n,o,d,m){const p=_("router-view");return te(),Je(p)}const rg=pe(og,[["render",ug]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const xc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Hi=t=>xc?Symbol(t):"_vr_"+t,dg=Hi("rvlm"),oo=Hi("rvd"),cs=Hi("r"),ms=Hi("rl"),yn=Hi("rvl"),$i=typeof window<"u";function cg(t){return t.__esModule||xc&&t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function Ha(t,l){const n={};for(const o in l){const d=l[o];n[o]=Array.isArray(d)?d.map(t):t(d)}return n}const nl=()=>{},mg=/\/$/,fg=t=>t.replace(mg,"");function ja(t,l,n="/"){let o,d={},m="",p="";const f=l.indexOf("?"),s=l.indexOf("#",f>-1?f:0);return f>-1&&(o=l.slice(0,f),m=l.slice(f+1,s>-1?s:l.length),d=t(m)),s>-1&&(o=o||l.slice(0,s),p=l.slice(s,l.length)),o=_g(o??l,n),{fullPath:o+(m&&"?")+m+p,path:o,query:d,hash:p}}function pg(t,l){const n=l.query?t(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function uo(t,l){return!l||!t.toLowerCase().startsWith(l.toLowerCase())?t:t.slice(l.length)||"/"}function gg(t,l,n){const o=l.matched.length-1,d=n.matched.length-1;return o>-1&&o===d&&Ii(l.matched[o],n.matched[d])&&Ec(l.params,n.params)&&t(l.query)===t(n.query)&&l.hash===n.hash}function Ii(t,l){return(t.aliasOf||t)===(l.aliasOf||l)}function Ec(t,l){if(Object.keys(t).length!==Object.keys(l).length)return!1;for(const n in t)if(!hg(t[n],l[n]))return!1;return!0}function hg(t,l){return Array.isArray(t)?ro(t,l):Array.isArray(l)?ro(l,t):t===l}function ro(t,l){return Array.isArray(l)?t.length===l.length&&t.every((n,o)=>n===l[o]):t.length===1&&t[0]===l}function _g(t,l){if(t.startsWith("/"))return t;if(!t)return l;const n=l.split("/"),o=t.split("/");let d=n.length-1,m,p;for(m=0;m<o.length;m++)if(p=o[m],!(d===1||p==="."))if(p==="..")d--;else break;return n.slice(0,d).join("/")+"/"+o.slice(m-(m===o.length?1:0)).join("/")}var hl;(function(t){t.pop="pop",t.push="push"})(hl||(hl={}));var sl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(sl||(sl={}));function bg(t){if(!t)if($i){const l=document.querySelector("base");t=l&&l.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fg(t)}const vg=/^[^#]+#/;function yg(t,l){return t.replace(vg,"#")+l}function Cg(t,l){const n=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:l.behavior,left:o.left-n.left-(l.left||0),top:o.top-n.top-(l.top||0)}}const Ta=()=>({left:window.pageXOffset,top:window.pageYOffset});function wg(t){let l;if("el"in t){const n=t.el,o=typeof n=="string"&&n.startsWith("#"),d=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!d)return;l=Cg(d,t)}else l=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function co(t,l){return(history.state?history.state.position-l:-1)+t}const Cn=new Map;function Ag(t,l){Cn.set(t,l)}function Sg(t){const l=Cn.get(t);return Cn.delete(t),l}let kg=()=>location.protocol+"//"+location.host;function Bc(t,l){const{pathname:n,search:o,hash:d}=l,m=t.indexOf("#");if(m>-1){let f=d.includes(t.slice(m))?t.slice(m).length:1,s=d.slice(f);return s[0]!=="/"&&(s="/"+s),uo(s,"")}return uo(n,t)+o+d}function $g(t,l,n,o){let d=[],m=[],p=null;const f=({state:h})=>{const v=Bc(t,location),r=n.value,y=l.value;let A=0;if(h){if(n.value=v,l.value=h,p&&p===r){p=null;return}A=y?h.position-y.position:0}else o(v);d.forEach($=>{$(n.value,r,{delta:A,type:hl.pop,direction:A?A>0?sl.forward:sl.back:sl.unknown})})};function s(){p=n.value}function u(h){d.push(h);const v=()=>{const r=d.indexOf(h);r>-1&&d.splice(r,1)};return m.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Ie({},h.state,{scroll:Ta()}),"")}function c(){for(const h of m)h();m=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:u,destroy:c}}function mo(t,l,n,o=!1,d=!1){return{back:t,current:l,forward:n,replaced:o,position:window.history.length,scroll:d?Ta():null}}function Tg(t){const{history:l,location:n}=window,o={value:Bc(t,n)},d={value:l.state};d.value||m(o.value,{back:null,current:o.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function m(s,u,g){const c=t.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+s:kg()+t+s;try{l[g?"replaceState":"pushState"](u,"",h),d.value=u}catch(v){console.error(v),n[g?"replace":"assign"](h)}}function p(s,u){const g=Ie({},l.state,mo(d.value.back,s,d.value.forward,!0),u,{position:d.value.position});m(s,g,!0),o.value=s}function f(s,u){const g=Ie({},d.value,l.state,{forward:s,scroll:Ta()});m(g.current,g,!0);const c=Ie({},mo(o.value,s,null),{position:g.position+1},u);m(s,c,!1),o.value=s}return{location:o,state:d,push:f,replace:p}}function xg(t){t=bg(t);const l=Tg(t),n=$g(t,l.state,l.location,l.replace);function o(m,p=!0){p||n.pauseListeners(),history.go(m)}const d=Ie({location:"",base:t,go:o,createHref:yg.bind(null,t)},l,n);return Object.defineProperty(d,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(d,"state",{enumerable:!0,get:()=>l.state.value}),d}function Eg(t){return typeof t=="string"||t&&typeof t=="object"}function Rc(t){return typeof t=="string"||typeof t=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pc=Hi("nf");var fo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fo||(fo={}));function Ni(t,l){return Ie(new Error,{type:t,[Pc]:!0},l)}function ii(t,l){return t instanceof Error&&Pc in t&&(l==null||!!(t.type&l))}const po="[^/]+?",Bg={sensitive:!1,strict:!1,start:!0,end:!0},Rg=/[.+*?^${}()[\]/\\]/g;function Pg(t,l){const n=Ie({},Bg,l),o=[];let d=n.start?"^":"";const m=[];for(const u of t){const g=u.length?[]:[90];n.strict&&!u.length&&(d+="/");for(let c=0;c<u.length;c++){const h=u[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(d+="/"),d+=h.value.replace(Rg,"\\$&"),v+=40;else if(h.type===1){const{value:r,repeatable:y,optional:A,regexp:$}=h;m.push({name:r,repeatable:y,optional:A});const b=$||po;if(b!==po){v+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${r}" (${b}): `+k.message)}}let w=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;c||(w=A&&u.length<2?`(?:/${w})`:"/"+w),A&&(w+="?"),d+=w,v+=20,A&&(v+=-8),y&&(v+=-20),b===".*"&&(v+=-50)}g.push(v)}o.push(g)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(d+="/?"),n.end?d+="$":n.strict&&(d+="(?:/|$)");const p=new RegExp(d,n.sensitive?"":"i");function f(u){const g=u.match(p),c={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",r=m[h-1];c[r.name]=v&&r.repeatable?v.split("/"):v}return c}function s(u){let g="",c=!1;for(const h of t){(!c||!g.endsWith("/"))&&(g+="/"),c=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:r,repeatable:y,optional:A}=v,$=r in u?u[r]:"";if(Array.isArray($)&&!y)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray($)?$.join("/"):$;if(!b)if(A)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):c=!0);else throw new Error(`Missing required param "${r}"`);g+=b}}return g}return{re:p,score:o,keys:m,parse:f,stringify:s}}function zg(t,l){let n=0;for(;n<t.length&&n<l.length;){const o=l[n]-t[n];if(o)return o;n++}return t.length<l.length?t.length===1&&t[0]===80?-1:1:t.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Mg(t,l){let n=0;const o=t.score,d=l.score;for(;n<o.length&&n<d.length;){const m=zg(o[n],d[n]);if(m)return m;n++}return d.length-o.length}const Dg={type:0,value:""},Fg=/[a-zA-Z0-9_]/;function Ig(t){if(!t)return[[]];if(t==="/")return[[Dg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function l(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,o=n;const d=[];let m;function p(){m&&d.push(m),m=[]}let f=0,s,u="",g="";function c(){u&&(n===0?m.push({type:0,value:u}):n===1||n===2||n===3?(m.length>1&&(s==="*"||s==="+")&&l(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:u,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):l("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;f<t.length;){if(s=t[f++],s==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:s==="/"?(u&&c(),p()):s===":"?(c(),n=1):h();break;case 4:h(),n=o;break;case 1:s==="("?n=2:Fg.test(s)?h():(c(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:n=3:g+=s;break;case 3:c(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${u}"`),c(),p(),d}function Ng(t,l,n){const o=Pg(Ig(t.path),n),d=Ie(o,{record:t,parent:l,children:[],alias:[]});return l&&!d.record.aliasOf==!l.record.aliasOf&&l.children.push(d),d}function Vg(t,l){const n=[],o=new Map;l=ho({strict:!1,end:!0,sensitive:!1},l);function d(g){return o.get(g)}function m(g,c,h){const v=!h,r=Og(g);r.aliasOf=h&&h.record;const y=ho(l,g),A=[r];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const k of w)A.push(Ie({},r,{components:h?h.record.components:r.components,path:k,aliasOf:h?h.record:r}))}let $,b;for(const w of A){const{path:k}=w;if(c&&k[0]!=="/"){const T=c.record.path,E=T[T.length-1]==="/"?"":"/";w.path=c.record.path+(k&&E+k)}if($=Ng(w,c,y),h?h.alias.push($):(b=b||$,b!==$&&b.alias.push($),v&&g.name&&!go($)&&p(g.name)),"children"in r){const T=r.children;for(let E=0;E<T.length;E++)m(T[E],$,h&&h.children[E])}h=h||$,s($)}return b?()=>{p(b)}:nl}function p(g){if(Rc(g)){const c=o.get(g);c&&(o.delete(g),n.splice(n.indexOf(c),1),c.children.forEach(p),c.alias.forEach(p))}else{const c=n.indexOf(g);c>-1&&(n.splice(c,1),g.record.name&&o.delete(g.record.name),g.children.forEach(p),g.alias.forEach(p))}}function f(){return n}function s(g){let c=0;for(;c<n.length&&Mg(g,n[c])>=0;)c++;n.splice(c,0,g),g.record.name&&!go(g)&&o.set(g.record.name,g)}function u(g,c){let h,v={},r,y;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Ni(1,{location:g});y=h.record.name,v=Ie(Lg(c.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),g.params),r=h.stringify(v)}else if("path"in g)r=g.path,h=n.find(b=>b.re.test(r)),h&&(v=h.parse(r),y=h.record.name);else{if(h=c.name?o.get(c.name):n.find(b=>b.re.test(c.path)),!h)throw Ni(1,{location:g,currentLocation:c});y=h.record.name,v=Ie({},c.params,g.params),r=h.stringify(v)}const A=[];let $=h;for(;$;)A.unshift($.record),$=$.parent;return{name:y,path:r,params:v,matched:A,meta:jg(A)}}return t.forEach(g=>m(g)),{addRoute:m,resolve:u,removeRoute:p,getRoutes:f,getRecordMatcher:d}}function Lg(t,l){const n={};for(const o of l)o in t&&(n[o]=t[o]);return n}function Og(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Hg(t){const l={},n=t.props||!1;if("component"in t)l.default=n;else for(const o in t.components)l[o]=typeof n=="boolean"?n:n[o];return l}function go(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jg(t){return t.reduce((l,n)=>Ie(l,n.meta),{})}function ho(t,l){const n={};for(const o in t)n[o]=o in l?l[o]:t[o];return n}const zc=/#/g,qg=/&/g,Ug=/\//g,Jg=/=/g,Gg=/\?/g,Mc=/\+/g,Yg=/%5B/g,Wg=/%5D/g,Dc=/%5E/g,Kg=/%60/g,Fc=/%7B/g,Qg=/%7C/g,Ic=/%7D/g,Xg=/%20/g;function fs(t){return encodeURI(""+t).replace(Qg,"|").replace(Yg,"[").replace(Wg,"]")}function Zg(t){return fs(t).replace(Fc,"{").replace(Ic,"}").replace(Dc,"^")}function wn(t){return fs(t).replace(Mc,"%2B").replace(Xg,"+").replace(zc,"%23").replace(qg,"%26").replace(Kg,"`").replace(Fc,"{").replace(Ic,"}").replace(Dc,"^")}function eh(t){return wn(t).replace(Jg,"%3D")}function th(t){return fs(t).replace(zc,"%23").replace(Gg,"%3F")}function ih(t){return t==null?"":th(t).replace(Ug,"%2F")}function la(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function lh(t){const l={};if(t===""||t==="?")return l;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let d=0;d<o.length;++d){const m=o[d].replace(Mc," "),p=m.indexOf("="),f=la(p<0?m:m.slice(0,p)),s=p<0?null:la(m.slice(p+1));if(f in l){let u=l[f];Array.isArray(u)||(u=l[f]=[u]),u.push(s)}else l[f]=s}return l}function _o(t){let l="";for(let n in t){const o=t[n];if(n=eh(n),o==null){o!==void 0&&(l+=(l.length?"&":"")+n);continue}(Array.isArray(o)?o.map(m=>m&&wn(m)):[o&&wn(o)]).forEach(m=>{m!==void 0&&(l+=(l.length?"&":"")+n,m!=null&&(l+="="+m))})}return l}function ah(t){const l={};for(const n in t){const o=t[n];o!==void 0&&(l[n]=Array.isArray(o)?o.map(d=>d==null?null:""+d):o==null?o:""+o)}return l}function Gi(){let t=[];function l(o){return t.push(o),()=>{const d=t.indexOf(o);d>-1&&t.splice(d,1)}}function n(){t=[]}return{add:l,list:()=>t,reset:n}}function Gt(t,l,n,o,d){const m=o&&(o.enterCallbacks[d]=o.enterCallbacks[d]||[]);return()=>new Promise((p,f)=>{const s=c=>{c===!1?f(Ni(4,{from:n,to:l})):c instanceof Error?f(c):Eg(c)?f(Ni(2,{from:l,to:c})):(m&&o.enterCallbacks[d]===m&&typeof c=="function"&&m.push(c),p())},u=t.call(o&&o.instances[d],l,n,s);let g=Promise.resolve(u);t.length<3&&(g=g.then(s)),g.catch(c=>f(c))})}function qa(t,l,n,o){const d=[];for(const m of t)for(const p in m.components){let f=m.components[p];if(!(l!=="beforeRouteEnter"&&!m.instances[p]))if(nh(f)){const u=(f.__vccOpts||f)[l];u&&d.push(Gt(u,n,o,m,p))}else{let s=f();d.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${m.path}"`));const g=cg(u)?u.default:u;m.components[p]=g;const h=(g.__vccOpts||g)[l];return h&&Gt(h,n,o,m,p)()}))}}return d}function nh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bo(t){const l=ze(cs),n=ze(ms),o=F(()=>l.resolve(ri(t.to))),d=F(()=>{const{matched:s}=o.value,{length:u}=s,g=s[u-1],c=n.matched;if(!g||!c.length)return-1;const h=c.findIndex(Ii.bind(null,g));if(h>-1)return h;const v=vo(s[u-2]);return u>1&&vo(g)===v&&c[c.length-1].path!==v?c.findIndex(Ii.bind(null,s[u-2])):h}),m=F(()=>d.value>-1&&rh(n.params,o.value.params)),p=F(()=>d.value>-1&&d.value===n.matched.length-1&&Ec(n.params,o.value.params));function f(s={}){return uh(s)?l[ri(t.replace)?"replace":"push"](ri(t.to)).catch(nl):Promise.resolve()}return{route:o,href:F(()=>o.value.href),isActive:m,isExactActive:p,navigate:f}}const sh=B({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bo,setup(t,{slots:l}){const n=Mt(bo(t)),{options:o}=ze(cs),d=F(()=>({[yo(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[yo(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const m=l.default&&l.default(n);return t.custom?m:U("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:d.value},m)}}}),oh=sh;function uh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const l=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return t.preventDefault&&t.preventDefault(),!0}}function rh(t,l){for(const n in l){const o=l[n],d=t[n];if(typeof o=="string"){if(o!==d)return!1}else if(!Array.isArray(d)||d.length!==o.length||o.some((m,p)=>m!==d[p]))return!1}return!0}function vo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yo=(t,l,n)=>t??l??n,dh=B({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:l,slots:n}){const o=ze(yn),d=F(()=>t.route||o.value),m=ze(oo,0),p=F(()=>d.value.matched[m]);We(oo,m+1),We(dg,p),We(yn,d);const f=L();return at(()=>[f.value,p.value,t.name],([s,u,g],[c,h,v])=>{u&&(u.instances[g]=s,h&&h!==u&&s&&s===c&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!Ii(u,h)||!c)&&(u.enterCallbacks[g]||[]).forEach(r=>r(s))},{flush:"post"}),()=>{const s=d.value,u=p.value,g=u&&u.components[t.name],c=t.name;if(!g)return Co(n.default,{Component:g,route:s});const h=u.props[t.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,y=U(g,Ie({},v,l,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[c]=null)},ref:f}));return Co(n.default,{Component:y,route:s})||y}}});function Co(t,l){if(!t)return null;const n=t(l);return n.length===1?n[0]:n}const ch=dh;function mh(t){const l=Vg(t.routes,t),n=t.parseQuery||lh,o=t.stringifyQuery||_o,d=t.history,m=Gi(),p=Gi(),f=Gi(),s=ad(Ot);let u=Ot;$i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Ha.bind(null,V=>""+V),c=Ha.bind(null,ih),h=Ha.bind(null,la);function v(V,ie){let Z,oe;return Rc(V)?(Z=l.getRecordMatcher(V),oe=ie):oe=V,l.addRoute(oe,Z)}function r(V){const ie=l.getRecordMatcher(V);ie&&l.removeRoute(ie)}function y(){return l.getRoutes().map(V=>V.record)}function A(V){return!!l.getRecordMatcher(V)}function $(V,ie){if(ie=Ie({},ie||s.value),typeof V=="string"){const be=ja(n,V,ie.path),x=l.resolve({path:be.path},ie),R=d.createHref(be.fullPath);return Ie(be,x,{params:h(x.params),hash:la(be.hash),redirectedFrom:void 0,href:R})}let Z;if("path"in V)Z=Ie({},V,{path:ja(n,V.path,ie.path).path});else{const be=Ie({},V.params);for(const x in be)be[x]==null&&delete be[x];Z=Ie({},V,{params:c(V.params)}),ie.params=c(ie.params)}const oe=l.resolve(Z,ie),Be=V.hash||"";oe.params=g(h(oe.params));const Re=pg(o,Ie({},V,{hash:Zg(Be),path:oe.path})),_e=d.createHref(Re);return Ie({fullPath:Re,hash:Be,query:o===_o?ah(V.query):V.query||{}},oe,{redirectedFrom:void 0,href:_e})}function b(V){return typeof V=="string"?ja(n,V,s.value.path):Ie({},V)}function w(V,ie){if(u!==V)return Ni(8,{from:ie,to:V})}function k(V){return z(V)}function T(V){return k(Ie(b(V),{replace:!0}))}function E(V){const ie=V.matched[V.matched.length-1];if(ie&&ie.redirect){const{redirect:Z}=ie;let oe=typeof Z=="function"?Z(V):Z;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=b(oe):{path:oe},oe.params={}),Ie({query:V.query,hash:V.hash,params:V.params},oe)}}function z(V,ie){const Z=u=$(V),oe=s.value,Be=V.state,Re=V.force,_e=V.replace===!0,be=E(Z);if(be)return z(Ie(b(be),{state:Be,force:Re,replace:_e}),ie||Z);const x=Z;x.redirectedFrom=ie;let R;return!Re&&gg(o,oe,Z)&&(R=Ni(16,{to:x,from:oe}),Ve(oe,oe,!0,!1)),(R?Promise.resolve(R):P(x,oe)).catch(D=>ii(D)?D:ae(D,x,oe)).then(D=>{if(D){if(ii(D,2))return z(Ie(b(D.to),{state:Be,force:Re,replace:_e}),ie||x)}else D=X(x,oe,!0,_e,Be);return I(x,oe,D),D})}function M(V,ie){const Z=w(V,ie);return Z?Promise.reject(Z):Promise.resolve()}function P(V,ie){let Z;const[oe,Be,Re]=fh(V,ie);Z=qa(oe.reverse(),"beforeRouteLeave",V,ie);for(const be of oe)be.leaveGuards.forEach(x=>{Z.push(Gt(x,V,ie))});const _e=M.bind(null,V,ie);return Z.push(_e),Si(Z).then(()=>{Z=[];for(const be of m.list())Z.push(Gt(be,V,ie));return Z.push(_e),Si(Z)}).then(()=>{Z=qa(Be,"beforeRouteUpdate",V,ie);for(const be of Be)be.updateGuards.forEach(x=>{Z.push(Gt(x,V,ie))});return Z.push(_e),Si(Z)}).then(()=>{Z=[];for(const be of V.matched)if(be.beforeEnter&&!ie.matched.includes(be))if(Array.isArray(be.beforeEnter))for(const x of be.beforeEnter)Z.push(Gt(x,V,ie));else Z.push(Gt(be.beforeEnter,V,ie));return Z.push(_e),Si(Z)}).then(()=>(V.matched.forEach(be=>be.enterCallbacks={}),Z=qa(Re,"beforeRouteEnter",V,ie),Z.push(_e),Si(Z))).then(()=>{Z=[];for(const be of p.list())Z.push(Gt(be,V,ie));return Z.push(_e),Si(Z)}).catch(be=>ii(be,8)?be:Promise.reject(be))}function I(V,ie,Z){for(const oe of f.list())oe(V,ie,Z)}function X(V,ie,Z,oe,Be){const Re=w(V,ie);if(Re)return Re;const _e=ie===Ot,be=$i?history.state:{};Z&&(oe||_e?d.replace(V.fullPath,Ie({scroll:_e&&be&&be.scroll},Be)):d.push(V.fullPath,Be)),s.value=V,Ve(V,ie,Z,_e),we()}let H;function ue(){H=d.listen((V,ie,Z)=>{const oe=$(V),Be=E(oe);if(Be){z(Ie(Be,{replace:!0}),oe).catch(nl);return}u=oe;const Re=s.value;$i&&Ag(co(Re.fullPath,Z.delta),Ta()),P(oe,Re).catch(_e=>ii(_e,12)?_e:ii(_e,2)?(z(_e.to,oe).then(be=>{ii(be,20)&&!Z.delta&&Z.type===hl.pop&&d.go(-1,!1)}).catch(nl),Promise.reject()):(Z.delta&&d.go(-Z.delta,!1),ae(_e,oe,Re))).then(_e=>{_e=_e||X(oe,Re,!1),_e&&(Z.delta?d.go(-Z.delta,!1):Z.type===hl.pop&&ii(_e,20)&&d.go(-1,!1)),I(oe,Re,_e)}).catch(nl)})}let ye=Gi(),N=Gi(),O;function ae(V,ie,Z){we(V);const oe=N.list();return oe.length?oe.forEach(Be=>Be(V,ie,Z)):console.error(V),Promise.reject(V)}function Y(){return O&&s.value!==Ot?Promise.resolve():new Promise((V,ie)=>{ye.add([V,ie])})}function we(V){O||(O=!0,ue(),ye.list().forEach(([ie,Z])=>V?Z(V):ie()),ye.reset())}function Ve(V,ie,Z,oe){const{scrollBehavior:Be}=t;if(!$i||!Be)return Promise.resolve();const Re=!Z&&Sg(co(V.fullPath,0))||(oe||!Z)&&history.state&&history.state.scroll||null;return Oi().then(()=>Be(V,ie,Re)).then(_e=>_e&&wg(_e)).catch(_e=>ae(_e,V,ie))}const qe=V=>d.go(V);let Me;const Ct=new Set;return{currentRoute:s,addRoute:v,removeRoute:r,hasRoute:A,getRoutes:y,resolve:$,options:t,push:k,replace:T,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:m.add,beforeResolve:p.add,afterEach:f.add,onError:N.add,isReady:Y,install(V){const ie=this;V.component("RouterLink",oh),V.component("RouterView",ch),V.config.globalProperties.$router=ie,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ri(s)}),$i&&!Me&&s.value===Ot&&(Me=!0,k(d.location).catch(Be=>{}));const Z={};for(const Be in Ot)Z[Be]=F(()=>s.value[Be]);V.provide(cs,ie),V.provide(ms,Mt(Z)),V.provide(yn,s);const oe=V.unmount;Ct.add(V),V.unmount=function(){Ct.delete(V),Ct.size<1&&(u=Ot,H&&H(),s.value=Ot,Me=!1,O=!1),oe()}}}}function Si(t){return t.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function fh(t,l){const n=[],o=[],d=[],m=Math.max(l.matched.length,t.matched.length);for(let p=0;p<m;p++){const f=l.matched[p];f&&(t.matched.find(u=>Ii(u,f))?o.push(f):n.push(f));const s=t.matched[p];s&&(l.matched.find(u=>Ii(u,s))||d.push(s))}return[n,o,d]}function ph(){return ze(ms)}const gh=B({name:"Sidebar",setup(){const t=ph();return{isActive:p=>t.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"}]}}}),Nc=t=>(wl("data-v-69bf54a1"),t=t(),Al(),t),hh={class:"sidemenu"},_h={style:{flex:"1","overflow-y":"scroll"}},bh=Nc(()=>C("strong",null," Fomantic UI Vue ",-1)),vh=Nc(()=>C("b",null,"Getting Started",-1));function yh(t,l,n,o,d,m){const p=_("sui-menu-item"),f=_("sui-menu-header"),s=_("sui-menu-menu"),u=_("sui-menu");return te(),re("div",hh,[C("div",_h,[e(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[e(p,{as:"div"},{default:i(()=>[bh]),_:1}),e(p,{as:"router-link",to:"/"},{default:i(()=>[vh]),_:1}),e(p,{as:"div"},{default:i(()=>[e(f,{content:"Elements"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.elements,g=>(te(),Je(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(f,{content:"Collections"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.collections,g=>(te(),Je(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(f,{content:"Views"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.views,g=>(te(),Je(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(f,{content:"Modules"}),e(s,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.modules,g=>(te(),Je(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})])])}const Ch=pe(gh,[["render",yh],["__scopeId","data-v-69bf54a1"]]),wh=B({name:"Home",components:{Sidebar:Ch}}),Ah={class:"article"};function Sh(t,l,n,o,d,m){const p=_("sidebar"),f=_("router-view");return te(),re("div",null,[e(p),C("div",Ah,[e(f)])])}const kh=pe(wh,[["render",Sh]]);var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Th(t){if(t.__esModule)return t;var l=t.default;if(typeof l=="function"){var n=function o(){return this instanceof o?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};n.prototype=l.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var d=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(n,o,d.get?d:{enumerable:!0,get:function(){return t[o]}})}),n}const xh=Th(sg);var Vc={exports:{}};(function(t){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,p={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof s?new s(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++m}),b.__id},clone:function b(w,k){k=k||{};var T,E;switch(f.util.type(w)){case"Object":if(E=f.util.objId(w),k[E])return k[E];T={},k[E]=T;for(var z in w)w.hasOwnProperty(z)&&(T[z]=b(w[z],k));return T;case"Array":return E=f.util.objId(w),k[E]?k[E]:(T=[],k[E]=T,w.forEach(function(M,P){T[P]=b(M,k)}),T);default:return w}},getLanguage:function(b){for(;b;){var w=d.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(d,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var k in w)if(w[k].src==b)return w[k]}return null}},isActive:function(b,w,k){for(var T="no-"+w;b;){var E=b.classList;if(E.contains(w))return!0;if(E.contains(T))return!1;b=b.parentElement}return!!k}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(b,w){var k=f.util.clone(f.languages[b]);for(var T in w)k[T]=w[T];return k},insertBefore:function(b,w,k,T){T=T||f.languages;var E=T[b],z={};for(var M in E)if(E.hasOwnProperty(M)){if(M==w)for(var P in k)k.hasOwnProperty(P)&&(z[P]=k[P]);k.hasOwnProperty(M)||(z[M]=E[M])}var I=T[b];return T[b]=z,f.languages.DFS(f.languages,function(X,H){H===I&&X!=b&&(this[X]=z)}),z},DFS:function b(w,k,T,E){E=E||{};var z=f.util.objId;for(var M in w)if(w.hasOwnProperty(M)){k.call(w,M,w[M],T||M);var P=w[M],I=f.util.type(P);I==="Object"&&!E[z(P)]?(E[z(P)]=!0,b(P,k,null,E)):I==="Array"&&!E[z(P)]&&(E[z(P)]=!0,b(P,k,M,E))}}},plugins:{},highlightAll:function(b,w){f.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,k){var T={callback:k,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),f.hooks.run("before-all-elements-highlight",T);for(var E=0,z;z=T.elements[E++];)f.highlightElement(z,w===!0,T.callback)},highlightElement:function(b,w,k){var T=f.util.getLanguage(b),E=f.languages[T];f.util.setLanguage(b,T);var z=b.parentElement;z&&z.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(z,T);var M=b.textContent,P={element:b,language:T,grammar:E,code:M};function I(H){P.highlightedCode=H,f.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,f.hooks.run("after-highlight",P),f.hooks.run("complete",P),k&&k.call(P.element)}if(f.hooks.run("before-sanity-check",P),z=P.element.parentElement,z&&z.nodeName.toLowerCase()==="pre"&&!z.hasAttribute("tabindex")&&z.setAttribute("tabindex","0"),!P.code){f.hooks.run("complete",P),k&&k.call(P.element);return}if(f.hooks.run("before-highlight",P),!P.grammar){I(f.util.encode(P.code));return}if(w&&o.Worker){var X=new Worker(f.filename);X.onmessage=function(H){I(H.data)},X.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else I(f.highlight(P.code,P.grammar,P.language))},highlight:function(b,w,k){var T={code:b,grammar:w,language:k};if(f.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=f.tokenize(T.code,T.grammar),f.hooks.run("after-tokenize",T),s.stringify(f.util.encode(T.tokens),T.language)},tokenize:function(b,w){var k=w.rest;if(k){for(var T in k)w[T]=k[T];delete w.rest}var E=new c;return h(E,E.head,b),g(b,E,w,E.head,0),r(E)},hooks:{all:{},add:function(b,w){var k=f.hooks.all;k[b]=k[b]||[],k[b].push(w)},run:function(b,w){var k=f.hooks.all[b];if(!(!k||!k.length))for(var T=0,E;E=k[T++];)E(w)}},Token:s};o.Prism=f;function s(b,w,k,T){this.type=b,this.content=w,this.alias=k,this.length=(T||"").length|0}s.stringify=function b(w,k){if(typeof w=="string")return w;if(Array.isArray(w)){var T="";return w.forEach(function(I){T+=b(I,k)}),T}var E={type:w.type,content:b(w.content,k),tag:"span",classes:["token",w.type],attributes:{},language:k},z=w.alias;z&&(Array.isArray(z)?Array.prototype.push.apply(E.classes,z):E.classes.push(z)),f.hooks.run("wrap",E);var M="";for(var P in E.attributes)M+=" "+P+'="'+(E.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+M+">"+E.content+"</"+E.tag+">"};function u(b,w,k,T){b.lastIndex=w;var E=b.exec(k);if(E&&T&&E[1]){var z=E[1].length;E.index+=z,E[0]=E[0].slice(z)}return E}function g(b,w,k,T,E,z){for(var M in k)if(!(!k.hasOwnProperty(M)||!k[M])){var P=k[M];P=Array.isArray(P)?P:[P];for(var I=0;I<P.length;++I){if(z&&z.cause==M+","+I)return;var X=P[I],H=X.inside,ue=!!X.lookbehind,ye=!!X.greedy,N=X.alias;if(ye&&!X.pattern.global){var O=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,O+"g")}for(var ae=X.pattern||X,Y=T.next,we=E;Y!==w.tail&&!(z&&we>=z.reach);we+=Y.value.length,Y=Y.next){var Ve=Y.value;if(w.length>b.length)return;if(!(Ve instanceof s)){var qe=1,Me;if(ye){if(Me=u(ae,we,b,ue),!Me||Me.index>=b.length)break;var ie=Me.index,Ct=Me.index+Me[0].length,st=we;for(st+=Y.value.length;ie>=st;)Y=Y.next,st+=Y.value.length;if(st-=Y.value.length,we=st,Y.value instanceof s)continue;for(var V=Y;V!==w.tail&&(st<Ct||typeof V.value=="string");V=V.next)qe++,st+=V.value.length;qe--,Ve=b.slice(we,st),Me.index-=we}else if(Me=u(ae,0,Ve,ue),!Me)continue;var ie=Me.index,Z=Me[0],oe=Ve.slice(0,ie),Be=Ve.slice(ie+Z.length),Re=we+Ve.length;z&&Re>z.reach&&(z.reach=Re);var _e=Y.prev;oe&&(_e=h(w,_e,oe),we+=oe.length),v(w,_e,qe);var be=new s(M,H?f.tokenize(Z,H):Z,N,Z);if(Y=h(w,_e,be),Be&&h(w,Y,Be),qe>1){var x={cause:M+","+I,reach:Re};g(b,w,k,Y.prev,we,x),z&&x.reach>z.reach&&(z.reach=x.reach)}}}}}}function c(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,k){var T=w.next,E={value:k,prev:w,next:T};return w.next=E,T.prev=E,b.length++,E}function v(b,w,k){for(var T=w.next,E=0;E<k&&T!==b.tail;E++)T=T.next;w.next=T,T.prev=w,b.length-=E}function r(b){for(var w=[],k=b.head.next;k!==b.tail;)w.push(k.value),k=k.next;return w}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(b){var w=JSON.parse(b.data),k=w.language,T=w.code,E=w.immediateClose;o.postMessage(f.highlight(T,f.languages[k],k)),E&&o.close()},!1)),f;var y=f.util.currentScript();y&&(f.filename=y.src,y.hasAttribute("data-manual")&&(f.manual=!0));function A(){f.manual||f.highlightAll()}if(!f.manual){var $=document.readyState;$==="loading"||$==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return f}(l);t.exports&&(t.exports=n),typeof wo<"u"&&(wo.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(d,m){var p={};p["language-"+m]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[m]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};f["language-"+m]={pattern:/[\s\S]+/,inside:n.languages[m]};var s={};s[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:f},n.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,d){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:n.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var m=o.languages.markup;m&&(m.tag.addInlined("style","css"),m.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",d=function(y,A){return"✖ Error "+y+" while fetching file: "+A},m="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",u="loaded",g="failed",c="pre[data-src]:not(["+f+'="'+u+'"]):not(['+f+'="'+s+'"])';function h(y,A,$){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?A(b.responseText):b.status>=400?$(d(b.status,b.statusText)):$(m))},b.send(null)}function v(y){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(A){var $=Number(A[1]),b=A[2],w=A[3];return b?w?[$,Number(w)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var A=y.element;if(A.matches(c)){y.code="",A.setAttribute(f,s);var $=A.appendChild(document.createElement("CODE"));$.textContent=o;var b=A.getAttribute("data-src"),w=y.language;if(w==="none"){var k=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=p[k]||k}n.util.setLanguage($,w),n.util.setLanguage(A,w);var T=n.plugins.autoloader;T&&T.loadLanguages(w),h(b,function(E){A.setAttribute(f,u);var z=v(A.getAttribute("data-range"));if(z){var M=E.split(/\r\n?|\n/g),P=z[0],I=z[1]==null?M.length:z[1];P<0&&(P+=M.length),P=Math.max(0,Math.min(P-1,M.length)),I<0&&(I+=M.length),I=Math.max(0,Math.min(I,M.length)),E=M.slice(P,I).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(P+1))}$.textContent=E,n.highlightElement($)},function(E){A.setAttribute(f,g),$.textContent=E})}}),n.plugins.fileHighlight={highlight:function(A){for(var $=(A||document).querySelectorAll(c),b=0,w;w=$[b++];)n.highlightElement(w)}};var r=!1;n.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Vc);var Eh=Vc.exports;function Bh(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Ol=xh,Ua=Bh(Eh),Rh=Ol.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,n){var o=n.slots,d=n.attrs,m=o&&o.default&&o.default()||[],p=l.code||m&&m.length?m[0].children:"",f=l.inline,s=l.language,u=Ua.languages[s],g="language-".concat(s);return function(){return f?Ol.h("code",{class:[g],innerHTML:Ua.highlight(p,u)}):Ol.h("pre",Object.assign({},d,{class:[d.class,g]}),[Ol.h("code",Object.assign({},d,{class:[d.class,g],innerHTML:Ua.highlight(p,u)}))])}}}),Ph=Rh;const Lc=$h(Ph),zh=B({name:"DocPageHeader",props:{title:String,sub:String}}),Mh={class:"intro"};function Dh(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment");return te(),Je(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Mh,[e(f,{as:"h1"},{default:i(()=>[a(Ee(t.title)+" ",1),e(p,null,{default:i(()=>[a(Ee(t.sub),1)]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ne=pe(zh,[["render",Dh]]),Fh=B({name:"GettingStarted",components:{Prism:Lc,DocPageHeader:Ne}}),xa=t=>(wl("data-v-2f4c2002"),t=t(),Al(),t),Ih=xa(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),Nh=xa(()=>C("p",null," You can import all components as Vue plugin. ",-1)),Vh=xa(()=>C("br",null,null,-1)),Lh=xa(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function Oh(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("prism"),u=_("sui-container");return te(),re("div",null,[e(p,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(u,{class:"main"},{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a("Install")]),_:1}),Ih,e(f,{as:"h3"},{default:i(()=>[a("via Package Manager")]),_:1}),e(s,{language:"bash"},{default:i(()=>[a(Ee(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),e(f,{as:"h2"},{default:i(()=>[a("Usage")]),_:1}),Nh,e(s,{language:"js"},{default:i(()=>[a(Ee(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),Vh,Lh,e(s,{language:"js"},{default:i(()=>[a(Ee(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const Hh=pe(Fh,[["render",Oh],["__scopeId","data-v-2f4c2002"]]),jh=B({name:"DocExample",components:{Prism:Lc},props:{title:String,description:String,code:String},setup(){const t=L(!1);return{active:t,toggle:()=>t.value=!t.value}}}),qh={class:"example"};function Uh(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-grid-column"),u=_("sui-icon"),g=_("sui-grid-row"),c=_("prism"),h=_("sui-grid");return te(),re("div",qh,[e(h,{columns:2},{default:i(()=>[e(g,null,{default:i(()=>[e(s,null,{default:i(()=>[e(f,{as:"h3"},{default:i(()=>[a(Ee(t.title)+" ",1),e(p,null,{default:i(()=>[a(Ee(t.description),1)]),_:1})]),_:1})]),_:1}),e(s,{textAlign:"right"},{default:i(()=>[e(u,{name:"code",color:"grey",onClick:t.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(s,{width:16},{default:i(()=>[zd(t.$slots,"default")]),_:3}),t.active?(te(),Je(s,{key:0,width:16},{default:i(()=>[e(c,{language:"markup"},{default:i(()=>[a(Ee(t.code),1)]),_:1})]),_:1})):Zd("",!0)]),_:3})]),_:3})])}const ve=pe(jh,[["render",Uh]]),ge="/vue-fomantic-ui/images/wireframe/paragraph.png",Jh=B({name:"ButtonDoc",components:{DocExample:ve},setup(){const t=L(!1);return{active:t,toggle:()=>t.value=!t.value,buttonExample:`<template>
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
</template>`}}}),xl=t=>(wl("data-v-e27c391e"),t=t(),Al(),t),Gh={class:"intro"},Yh=xl(()=>C("div",{class:"or"},null,-1)),Wh=xl(()=>C("div",{class:"or","data-text":"ou"},null,-1)),Kh=xl(()=>C("img",{src:ge},null,-1)),Qh=xl(()=>C("img",{src:ge},null,-1)),Xh=xl(()=>C("div",{class:"or"},null,-1));function Zh(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-button"),y=_("doc-example"),A=_("sui-button-content"),$=_("sui-label"),b=_("sui-button-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,null,{default:i(()=>[C("div",Gh,[e(f,{as:"h1"},{default:i(()=>[a("Button "),e(p,null,{default:i(()=>[a("A button indicates a possible user action")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Button",description:"A standard button",code:t.buttonExample},{default:i(()=>[e(r,null,{default:i(()=>[a("Follow")]),_:1})]),_:1},8,["code"]),e(y,{title:"Emphasis",description:"A button can be formatted to show different levels of emphasis",code:t.emphasisExample},{default:i(()=>[C("div",null,[e(r,{primary:""},{default:i(()=>[a("Primary")]),_:1}),e(r,{secondary:""},{default:i(()=>[a("Secondary")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Animated",description:"A button can animate to show hidden content",code:t.animatedExample},{default:i(()=>[e(r,{animated:""},{default:i(()=>[e(A,{visible:""},{default:i(()=>[a("Next")]),_:1}),e(A,{hidden:""},{default:i(()=>[e(u,{name:"arrow right"})]),_:1})]),_:1}),e(r,{animated:"vertical"},{default:i(()=>[e(A,{visible:""},{default:i(()=>[e(u,{name:"shop"})]),_:1}),e(A,{hidden:""},{default:i(()=>[a("Shop")]),_:1})]),_:1}),e(r,{animated:"fade"},{default:i(()=>[e(A,{visible:""},{default:i(()=>[a(" Sign-up for a Pro account ")]),_:1}),e(A,{hidden:""},{default:i(()=>[a("$12.99 a month")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"A button can appear alongside a label",code:t.labeledExample},{default:i(()=>[e(r,{labelPosition:"right",as:"div"},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e($,{basic:""},{default:i(()=>[a("2,048")]),_:1})]),_:1}),e(r,{labelPosition:"left",as:"div"},{default:i(()=>[e($,{basic:"",pointing:"right"},{default:i(()=>[a("2,048")]),_:1}),e(r,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1})]),_:1}),e(r,{labelPosition:"left",as:"div"},{default:i(()=>[e($,{basic:""},{default:i(()=>[a("1,048")]),_:1}),e(r,{icon:""},{default:i(()=>[e(u,{name:"fork"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.labeledExample2},{default:i(()=>[e(r,{labelPosition:"right",as:"div"},{default:i(()=>[e(r,{icon:"",color:"red"},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e($,{basic:"",pointing:"left",color:"red"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1}),e(r,{labelPosition:"right",as:"div"},{default:i(()=>[e(r,{basic:"",icon:"",color:"blue"},{default:i(()=>[e(u,{name:"fork"}),a(" Forks ")]),_:1}),e($,{basic:"",pointing:"left",color:"blue"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A button can have only an icon",code:t.iconExample},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(u,{name:"cloud"})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon",description:"A button can use an icon as a label",code:t.labeledIconExample},{default:i(()=>[e(r,{labeled:"",icon:""},{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(r,{labeled:"right",icon:""},{default:i(()=>[e(u,{name:"right arrow"}),a(" Next ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic",description:"A basic button is less pronounced",code:t.basicExample},{default:i(()=>[e(r,{basic:""},{default:i(()=>[e(u,{name:"user"}),a(" Add Friend ")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample2},{default:i(()=>[e(r,{basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(r,{basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(r,{basic:"",positive:""},{default:i(()=>[a("Positive")]),_:1}),e(r,{basic:"",negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample3},{default:i(()=>[e(r,{basic:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{basic:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{basic:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{basic:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{basic:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{basic:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{basic:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{basic:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{basic:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{basic:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{basic:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{basic:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(r,{basic:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"A button can be formatted to appear on dark backgrounds",code:t.invertedExample},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{inverted:""},{default:i(()=>[a("Standard")]),_:1}),e(r,{inverted:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(r,{inverted:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(r,{inverted:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{inverted:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{inverted:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{inverted:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{inverted:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{inverted:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{inverted:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{inverted:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{inverted:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{inverted:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{inverted:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{inverted:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(r,{inverted:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.invertedExample2},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{inverted:"",basic:""},{default:i(()=>[a("Basic")]),_:1}),e(r,{inverted:"",basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(r,{inverted:"",basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(r,{inverted:"",basic:"",color:"red"},{default:i(()=>[a("Basic Red")]),_:1}),e(r,{inverted:"",basic:"",color:"orange"},{default:i(()=>[a("Basic Orange")]),_:1}),e(r,{inverted:"",basic:"",color:"yellow"},{default:i(()=>[a("Basic Yellow")]),_:1}),e(r,{inverted:"",basic:"",color:"olive"},{default:i(()=>[a("Basic Olive")]),_:1}),e(r,{inverted:"",basic:"",color:"green"},{default:i(()=>[a("Basic Green")]),_:1}),e(r,{inverted:"",basic:"",color:"teal"},{default:i(()=>[a("Basic Teal")]),_:1}),e(r,{inverted:"",basic:"",color:"blue"},{default:i(()=>[a("Basic Blue")]),_:1}),e(r,{inverted:"",basic:"",color:"violet"},{default:i(()=>[a("Basic Violet")]),_:1}),e(r,{inverted:"",basic:"",color:"purple"},{default:i(()=>[a("Basic Purple")]),_:1}),e(r,{inverted:"",basic:"",color:"pink"},{default:i(()=>[a("Basic Pink")]),_:1}),e(r,{inverted:"",basic:"",color:"brown"},{default:i(()=>[a("Basic Brown")]),_:1}),e(r,{inverted:"",basic:"",color:"grey"},{default:i(()=>[a("Basic Grey")]),_:1}),e(r,{inverted:"",basic:"",color:"black"},{default:i(()=>[a("Basic Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Buttons",description:"Buttons can exist together as a group",code:t.buttonsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1}),e(r,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon Buttons",description:"Buttons can exist together as a group",code:t.iconButtonsExample},{default:i(()=>[e(b,{icon:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"align left"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"align center"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"align right"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"align justify"})]),_:1})]),_:1}),e(b,{icon:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"bold"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"underline"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"text width"})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Conditionals",description:"Button groups can contain conditionals",code:t.conditionalsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cancel")]),_:1}),Yh,e(r,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.conditionalsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cancel")]),_:1}),Wh,e(r,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Active",description:"A button can show it is currently the active user selection",code:t.activeExample},{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"user"}),a(" Follow ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"A button can show it is currently unable to be interacted with",code:t.disabledExample},{default:i(()=>[e(r,{disabled:""},{default:i(()=>[e(u,{name:"user"}),a(" Followed ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"A button can show a loading indicator",code:t.loadingExample},{default:i(()=>[e(r,{loading:""},{default:i(()=>[a("Loading")]),_:1}),e(r,{basic:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(r,{primary:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(r,{secondary:"",loading:""},{default:i(()=>[a("Loading")]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Social",description:"A button can be formatted to link to a social website",code:t.socialExample},{default:i(()=>[e(r,{facebook:""},{default:i(()=>[e(u,{name:"facebook"}),a(" Facebook ")]),_:1}),e(r,{twitter:""},{default:i(()=>[e(u,{name:"twitter"}),a(" Twitter ")]),_:1}),e(r,{vk:""},{default:i(()=>[e(u,{name:"vk"}),a(" VK ")]),_:1}),e(r,{linkedin:""},{default:i(()=>[e(u,{name:"linkedin"}),a(" LinkedIn ")]),_:1}),e(r,{instagram:""},{default:i(()=>[e(u,{name:"instagram"}),a(" Instagram ")]),_:1}),e(r,{youtube:""},{default:i(()=>[e(u,{name:"youtube"}),a(" YouTube ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"Buttons can have assorted sizes",code:t.sizeExample},{default:i(()=>[C("div",null,[e(r,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(r,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(r,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(r,{size:"medium"},{default:i(()=>[a("Medium")]),_:1}),e(r,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(r,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(r,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(r,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Floated",description:"A button can be aligned to the left or right of its container",code:t.floatedExample},{default:i(()=>[C("div",null,[e(r,{floated:"left"},{default:i(()=>[a("Left Floated")]),_:1}),e(r,{floated:"right"},{default:i(()=>[a("Right Floated")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A button can have different colors",code:t.coloredExample},{default:i(()=>[C("div",null,[e(r,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(r,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Compact",description:"A button can reduce its padding to fit into tighter spaces",code:t.compactExample},{default:i(()=>[C("div",null,[e(r,{compact:""},{default:i(()=>[a("Compact")]),_:1}),e(r,null,{default:i(()=>[a("Normal")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Toggle",description:"A button can be formatted to toggle on and off",code:t.toggleExample},{default:i(()=>[e(r,{toggle:"",active:t.active,onClick:l[0]||(l[0]=()=>t.active=!t.active)},{default:i(()=>[a("Vote")]),_:1},8,["active"])]),_:1},8,["code"]),e(y,{title:"Positive",description:"A button can hint towards a positive consequence",code:t.positiveExample},{default:i(()=>[e(r,{positive:""},{default:i(()=>[a("Positive")]),_:1})]),_:1},8,["code"]),e(y,{title:"Negative",description:"A button can hint towards a negative consequence",code:t.negativeExample},{default:i(()=>[e(r,{negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"A button can take the width of its container",code:t.fluidExample},{default:i(()=>[e(r,{fluid:""},{default:i(()=>[a("Fluid")]),_:1})]),_:1},8,["code"]),e(y,{title:"Circular",description:"A button can be circular",code:t.circularExample},{default:i(()=>[e(r,{circular:"",icon:""},{default:i(()=>[e(u,{name:"settings"})]),_:1})]),_:1},8,["code"]),e(y,{code:t.circularExample2},{default:i(()=>[C("div",null,[e(r,{facebook:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"facebook"})]),_:1}),e(r,{twitter:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"twitter"})]),_:1}),e(r,{linkedin:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"linkedin"})]),_:1}),e(r,{youtube:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"youtube"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Vertically Attached",description:"A button can be attached to the top or bottom of other content",code:t.attachedExample},{default:i(()=>[C("div",null,[e(r,{attached:"top"},{default:i(()=>[a("Top")]),_:1}),e(v,{attached:""},{default:i(()=>[Kh]),_:1}),e(r,{attached:"bottom"},{default:i(()=>[a("Bottom")]),_:1})])]),_:1},8,["code"]),e(y,{code:t.attachedExample2},{default:i(()=>[C("div",null,[e(b,{attached:"top"},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[Qh]),_:1}),e(b,{attached:"bottom"},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Horizontally Attached",description:"A button can be attached to the left or right of other content",code:t.horizontalAttachedExample},{default:i(()=>[C("div",null,[e(r,{attached:"left"},{default:i(()=>[a("Left")]),_:1}),e(r,{attached:"right"},{default:i(()=>[a("Right")]),_:1})])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Group Variations")]),_:1}),e(y,{title:"Vertical Buttons",description:"Groups can be formatted to appear vertically",code:t.verticalButtonsExample},{default:i(()=>[e(b,{vertical:""},{default:i(()=>[e(r,null,{default:i(()=>[a("Feed")]),_:1}),e(r,null,{default:i(()=>[a("Messages")]),_:1}),e(r,null,{default:i(()=>[a("Events")]),_:1}),e(r,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon Buttons",description:"Groups can be formatted as labeled icons",code:t.labeledIconButtonsExample},{default:i(()=>[e(b,{vertical:"",labeled:"",icon:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"play"}),a(" Play ")]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"shuffle"}),a(" Shuffle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Mixed Group",description:"Groups can be formatted to use multiple button types together",code:t.mixedGroupExample},{default:i(()=>[e(b,null,{default:i(()=>[e(r,{labelPosition:"left",icon:""},{default:i(()=>[e(u,{name:"left chevron"}),a(" Back ")]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"stop"}),a(" Stop ")]),_:1}),e(r,{labelPosition:"right",icon:""},{default:i(()=>[e(u,{name:"right chevron"}),a(" Forward ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Equal Width",description:"Groups can have their widths divided evenly",code:t.equalWidthExample},{default:i(()=>[C("div",null,[e(b,{widths:5},{default:i(()=>[e(r,null,{default:i(()=>[a("Overview")]),_:1}),e(r,null,{default:i(()=>[a("Specs")]),_:1}),e(r,null,{default:i(()=>[a("Warranty")]),_:1}),e(r,null,{default:i(()=>[a("Reviews")]),_:1}),e(r,null,{default:i(()=>[a("Support")]),_:1})]),_:1}),e(s),e(b,{widths:3},{default:i(()=>[e(r,null,{default:i(()=>[a("Overview")]),_:1}),e(r,null,{default:i(()=>[a("Specs")]),_:1}),e(r,null,{default:i(()=>[a("Support")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored Buttons",description:"Groups can have a shared color",code:t.coloredButtonsExample},{default:i(()=>[e(b,{color:"blue"},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1}),e(r,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Buttons",description:"A button group can be less pronounced",code:t.basicButtonsExample},{default:i(()=>[C("div",null,[e(b,{basic:""},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1}),e(r,null,{default:i(()=>[a("Three")]),_:1})]),_:1}),e(s),e(b,{basic:"",vertical:""},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1}),e(r,null,{default:i(()=>[a("Three")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{code:t.basicButtonsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(r,{basic:"",color:"red"},{default:i(()=>[a("One")]),_:1}),e(r,{basic:"",color:"blue"},{default:i(()=>[a("Two")]),_:1}),e(r,{basic:"",color:"green"},{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Group Sizes",description:"Groups can have a shared size",code:t.groupSizesExample},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),e(r,null,{default:i(()=>[a("Two")]),_:1}),e(r,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample2},{default:i(()=>[e(b,{basic:"",icon:"",size:"small"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"file"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"save"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"upload"})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"download"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample3},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(r,null,{default:i(()=>[a("One")]),_:1}),Xh,e(r,null,{default:i(()=>[a("Two")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const e_=pe(Jh,[["render",Zh],["__scopeId","data-v-e27c391e"]]),t_=B({name:"ContainerDoc",components:{DocExample:ve},setup(){return{containerExample:`<template>
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
</template>`}}}),ps=t=>(wl("data-v-3696fd53"),t=t(),Al(),t),i_={class:"intro"},l_=ps(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),a_=ps(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),n_=ps(()=>C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function s_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",i_,[e(f,{as:"h1"},{default:i(()=>[a("Container "),e(p,null,{default:i(()=>[a("A container limits content to a maximum width")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Container",description:"A standard container",code:t.containerExample},{default:i(()=>[e(h,null,{default:i(()=>[l_]),_:1})]),_:1},8,["code"]),e(r,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:t.textContainerExample},{default:i(()=>[e(h,{text:""},{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a("Header")]),_:1}),a_]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Text Alignment",description:"A container can specify its text alignment",code:t.textAlignmentExample},{default:i(()=>[C("div",null,[e(h,{textAlign:"left"},{default:i(()=>[a("Left Aligned")]),_:1}),e(h,{textAlign:"center"},{default:i(()=>[a("Center Aligned")]),_:1}),e(h,{textAlign:"right"},{default:i(()=>[a("Right Aligned")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Fluid",description:"A fluid container has no maximum width",code:t.fluidExample},{default:i(()=>[e(h,{fluid:""},{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a("Dogs Roles with Humans")]),_:1}),n_]),_:1})]),_:1},8,["code"])]),_:1})])}const o_=pe(t_,[["render",s_],["__scopeId","data-v-3696fd53"]]),Ce="/vue-fomantic-ui/images/wireframe/short-paragraph.png",u_=B({name:"DividerDoc",components:{DocExample:ve},setup(){return{dividerCode:`<div>
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
</sui-segment>`}}}),r_={class:"intro"};function d_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-image"),y=_("doc-example"),A=_("sui-grid-column"),$=_("sui-grid");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",r_,[e(f,{as:"h1"},{default:i(()=>[a("Divider "),e(p,null,{default:i(()=>[a("A divider visually segments content into groups")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Divider",description:"A standard divider",code:t.dividerCode},{default:i(()=>[C("div",null,[e(r,{src:Ce}),e(s),e(r,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Vertical Divider",description:"A divider can segment content vertically",code:t.verticalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e($,{columns:2,relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(r,{src:Ce})]),_:1}),e(A,null,{default:i(()=>[e(r,{src:Ce})]),_:1})]),_:1}),e(s,{vertical:""},{default:i(()=>[a("and")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:t.horizontalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e($,{relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(r,{src:Ce})]),_:1})]),_:1}),e(s,{horizontal:""},{default:i(()=>[a("and")]),_:1}),e($,{relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(r,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:t.horizontalAlignmentCode},{default:i(()=>[C("div",null,[e(s,{horizontal:"",textAlign:"left"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[e(u,{name:"left align"}),a(" Left Aligned ")]),_:1})]),_:1}),e(s,{horizontal:"",textAlign:"center"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[e(u,{name:"center align"}),a(" Center Aligned ")]),_:1})]),_:1}),e(s,{horizontal:"",textAlign:"right"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[e(u,{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1})])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Inverted",description:"A divider can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{src:Ce}),e(s,{inverted:""}),e(r,{src:Ce})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:t.fittedCode},{default:i(()=>[e(v,null,{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(s,{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:t.hiddenCode},{default:i(()=>[C("div",null,[e(f,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(r,{src:Ce}),e(s,{hidden:""}),e(f,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(r,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:t.sectionCode},{default:i(()=>[C("div",null,[e(f,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(r,{src:Ce}),e(s,{section:""}),e(f,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(r,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Clearing",description:"A divider can clear the contents above it",code:t.clearingCode},{default:i(()=>[e(v,null,{default:i(()=>[e(f,{floated:"right"},{default:i(()=>[a("Floated Content")]),_:1}),e(s,{clearing:""}),e(r,{src:Ce})]),_:1})]),_:1},8,["code"])]),_:1})])}const c_=pe(u_,[["render",d_],["__scopeId","data-v-3a1972e7"]]),m_=B({name:"EmojiDoc",components:{DocExample:ve},setup(){return{disabledCode:`<sui-segment basic>
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
</sui-segment>`}}}),f_={class:"intro"},p_=C("br",null,null,-1),g_=C("br",null,null,-1),h_=C("br",null,null,-1),__=C("br",null,null,-1),b_=C("br",null,null,-1);function v_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-emoji"),y=_("doc-example"),A=_("sui-button"),$=_("sui-label");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",f_,[e(f,{as:"h1"},{default:i(()=>[a("Emoji "),e(p,null,{default:i(()=>[a(" An emoji is a glyph used to represent an emotional state ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Disabled",description:"An emoji can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An emoji can be used as a simple loader",code:t.loadingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"angel",loading:""}),e(r,{name:"blush",loading:""}),e(r,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Size",description:"An emoji can vary in size",code:t.sizeCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"relaxed",size:"small"}),a(" Small "),p_,e(r,{name:"relaxed",size:"medium"}),a(" Medium "),g_,e(r,{name:"relaxed",size:"large"}),a(" Large "),h_,e(r,{name:"relaxed",size:"big"}),a(" Big ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:t.autosizingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(f,{size:"small"},{default:i(()=>[a("Within a header "),e(r,{name:"relaxed"})]),_:1}),e(A,{size:"large"},{default:i(()=>[a("Within a button "),e(r,{name:"relaxed"})]),_:1}),__,b_,e($,{size:"massive"},{default:i(()=>[a("Within a label "),e(r,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link",description:"An emoji can be formatted as a link",code:t.linkCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(r,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const y_=pe(m_,[["render",v_]]),C_=B({name:"FlagDoc",components:{DocExample:ve},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),w_={class:"intro"};function A_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-flag"),y=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",w_,[e(f,{as:"h1"},{default:i(()=>[a("Flag "),e(p,null,{default:i(()=>[a(" A flag is used to represent a political state ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(y,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:t.flagCode},{default:i(()=>[C("div",null,[e(r,{name:"ae"}),e(r,{name:"france"}),e(r,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}const S_=pe(C_,[["render",A_]]),k_="/vue-fomantic-ui/images/icons/school.png",$_=B({name:"HeaderDoc",components:{DocExample:ve},setup(){return{pageHeaderCode:`<div>
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
</sui-segment>`}}}),T_={class:"intro"},x_=C("span",null,"$10.99",-1);function E_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("doc-example"),y=_("sui-header-content"),A=_("sui-image");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",T_,[e(f,{as:"h1"},{default:i(()=>[a("Header "),e(p,null,{default:i(()=>[a(" A header provides a short summary of content ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:t.pageHeaderCode},{default:i(()=>[C("div",null,[e(f,{as:"h1"},{default:i(()=>[a("First header")]),_:1}),e(f,{as:"h2"},{default:i(()=>[a("Second header")]),_:1}),e(f,{as:"h3"},{default:i(()=>[a("Third header")]),_:1}),e(f,{as:"h4"},{default:i(()=>[a("Fourth header")]),_:1}),e(f,{as:"h5"},{default:i(()=>[a("Fifth header")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:t.contentHeaderCode},{default:i(()=>[C("div",null,[e(f,{size:"huge"},{default:i(()=>[a("Huge Header")]),_:1}),e(f,{size:"large"},{default:i(()=>[a("Large Header")]),_:1}),e(f,{size:"medium"},{default:i(()=>[a("Medium Header")]),_:1}),e(f,{size:"small"},{default:i(()=>[a("Small Header")]),_:1}),e(f,{size:"tiny"},{default:i(()=>[a("Tiny Header")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:t.iconHeadersCode},{default:i(()=>[e(f,{icon:""},{default:i(()=>[e(u,{name:"settings"}),e(y,null,{default:i(()=>[a(" AccountSettings "),e(p,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:t.subHeadersCode},{default:i(()=>[C("div",null,[e(f,{as:"h2",sub:""},{default:i(()=>[a("Price")]),_:1}),x_])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(r,{title:"Image",description:"A header may contain an image",code:t.imageCode},{default:i(()=>[e(f,null,{default:i(()=>[e(A,{src:k_}),e(y,null,{default:i(()=>[a("Learn More")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Icon",description:"A header may contain an icon",code:t.iconCode},{default:i(()=>[e(f,null,{default:i(()=>[e(u,{name:"plug"}),e(y,null,{default:i(()=>[a("Uptime Guarantee")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Subheader",description:"Headers may contain subheaders",code:t.subheaderCode},{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a(" AccountSettings "),e(p,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(r,{title:"Disabled",description:"A header can show that it is inactive",code:t.disabledCode},{default:i(()=>[e(f,{disabled:""},{default:i(()=>[a("Disabled Header")]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:t.dividingCode},{default:i(()=>[e(f,{as:"h3",dividing:""},{default:i(()=>[a("Dividing Header")]),_:1})]),_:1},8,["code"]),e(r,{title:"Block",description:"A header can be formatted to appear inside a content block",code:t.blockCode},{default:i(()=>[e(f,{as:"h3",block:""},{default:i(()=>[a("Block Header")]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A header can be attached to other content, like a segment",code:t.attachedCode},{default:i(()=>[C("div",null,[e(f,{as:"h2",attached:"top"},{default:i(()=>[a("Attached Header")]),_:1}),e(v,{attached:""},{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Floating",description:"A header can sit to the left or right of other content",code:t.floatingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(f,{as:"h3",floated:"right"},{default:i(()=>[a("Go Forward")]),_:1}),e(f,{as:"h3",floated:"left"},{default:i(()=>[a("Go Back")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[e(v,null,{default:i(()=>[e(f,{as:"h3",textAlign:"right"},{default:i(()=>[a("Right")]),_:1}),e(f,{as:"h3",textAlign:"left"},{default:i(()=>[a("Left")]),_:1}),e(f,{as:"h3",textAlign:"justified"},{default:i(()=>[a(" This should take up the full width even if only one line ")]),_:1}),e(f,{as:"h3",textAlign:"center"},{default:i(()=>[a("Center")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A header can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(f,{as:"h4",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(f,{as:"h4",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(f,{as:"h4",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(f,{as:"h4",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(f,{as:"h4",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(f,{as:"h4",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(f,{as:"h4",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(f,{as:"h4",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(f,{as:"h4",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(f,{as:"h4",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(f,{as:"h4",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(f,{as:"h4",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(f,{as:"h4",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(f,{as:"h4",color:"grey"},{default:i(()=>[a("Grey")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(f,{as:"h4",color:"red",inverted:""},{default:i(()=>[a("Red")]),_:1}),e(f,{as:"h4",color:"orange",inverted:""},{default:i(()=>[a("Orange")]),_:1}),e(f,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[a("Yellow")]),_:1}),e(f,{as:"h4",color:"olive",inverted:""},{default:i(()=>[a("Olive")]),_:1}),e(f,{as:"h4",color:"green",inverted:""},{default:i(()=>[a("Green")]),_:1}),e(f,{as:"h4",color:"teal",inverted:""},{default:i(()=>[a("Teal")]),_:1}),e(f,{as:"h4",color:"blue",inverted:""},{default:i(()=>[a("Blue")]),_:1}),e(f,{as:"h4",color:"purple",inverted:""},{default:i(()=>[a("Purple")]),_:1}),e(f,{as:"h4",color:"violet",inverted:""},{default:i(()=>[a("Violet")]),_:1}),e(f,{as:"h4",color:"pink",inverted:""},{default:i(()=>[a("Pink")]),_:1}),e(f,{as:"h4",color:"brown",inverted:""},{default:i(()=>[a("Brown")]),_:1}),e(f,{as:"h4",color:"grey",inverted:""},{default:i(()=>[a("Grey")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const B_=pe($_,[["render",E_]]),R_=B({name:"IconDoc",components:{DocExample:ve},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
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
</sui-icon-group>`}}}),P_={class:"intro"},z_=C("br",null,null,-1),M_=C("br",null,null,-1),D_=C("br",null,null,-1),F_=C("br",null,null,-1),I_=C("br",null,null,-1),N_=C("br",null,null,-1);function V_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("doc-example"),y=_("sui-icon-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",P_,[e(f,{as:"h1"},{default:i(()=>[a("Icon "),e(p,null,{default:i(()=>[a(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(r,{title:"Disabled",description:"An icon can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(u,{name:"users",disabled:""})]),_:1},8,["code"]),e(r,{title:"Loading",description:"An icon can be used as a simple loader",code:t.loadingCode},{default:i(()=>[C("div",null,[e(u,{name:"spinner",loading:""}),e(u,{name:"notched circle",loading:""}),e(u,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:t.fittedCode},{default:i(()=>[C("div",null,[a(" This icon "),e(u,{name:"help",fitted:""}),a(" is fitted. "),z_,a(" This icon "),e(u,{name:"help"}),a(" is not. ")])]),_:1},8,["code"]),e(r,{title:"Size",description:"An icon can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{name:"home",size:"mini"}),e(u,{name:"home",size:"tiny"}),e(u,{name:"home",size:"small"}),M_,e(u,{name:"home"}),D_,e(u,{name:"home",size:"large"}),F_,e(u,{name:"home",size:"big"}),I_,e(u,{name:"home",size:"huge"}),N_,e(u,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(r,{title:"Link",description:"An icon can be formatted as a link",code:t.linkCode},{default:i(()=>[C("div",null,[e(u,{name:"close",link:""}),e(u,{name:"help",link:""})])]),_:1},8,["code"]),e(r,{title:"Flipped",description:"An icon can be flipped",code:t.flippedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",flipped:"horizontally"}),e(u,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(r,{title:"Rotated",description:"An icon can be rotated",code:t.rotatedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",rotated:"clockwise"}),e(u,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(r,{title:"Circular",description:"An icon can be formatted to appear circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(u,{name:"users",circular:""}),e(u,{name:"users",color:"teal",circular:""}),e(u,{name:"users",inverted:"",circular:""}),e(u,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(r,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:t.borderedCode},{default:i(()=>[C("div",null,[e(u,{name:"users",bordered:""}),e(u,{name:"users",bordered:"",color:"teal"}),e(u,{name:"users",inverted:"",bordered:"",color:"black"}),e(u,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(r,{title:"Colored",description:"An icon can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{name:"users",color:"primary"}),e(u,{name:"users",color:"secondary"}),e(u,{name:"users",color:"red"}),e(u,{name:"users",color:"orange"}),e(u,{name:"users",color:"yellow"}),e(u,{name:"users",color:"olive"}),e(u,{name:"users",color:"green"}),e(u,{name:"users",color:"teal"}),e(u,{name:"users",color:"blue"}),e(u,{name:"users",color:"violet"}),e(u,{name:"users",color:"purple"}),e(u,{name:"users",color:"pink"}),e(u,{name:"users",color:"brown"}),e(u,{name:"users",color:"grey"}),e(u,{name:"users",color:"black"})])]),_:1},8,["code"]),e(r,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(u,{name:"users",inverted:""}),e(u,{name:"users",inverted:"",color:"primary"}),e(u,{name:"users",inverted:"",color:"secondary"}),e(u,{name:"users",inverted:"",color:"red"}),e(u,{name:"users",inverted:"",color:"orange"}),e(u,{name:"users",inverted:"",color:"yellow"}),e(u,{name:"users",inverted:"",color:"olive"}),e(u,{name:"users",inverted:"",color:"green"}),e(u,{name:"users",inverted:"",color:"teal"}),e(u,{name:"users",inverted:"",color:"blue"}),e(u,{name:"users",inverted:"",color:"violet"}),e(u,{name:"users",inverted:"",color:"purple"}),e(u,{name:"users",inverted:"",color:"pink"}),e(u,{name:"users",inverted:"",color:"brown"}),e(u,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(r,{title:"Icons",description:"Several icons can be used together as a group",code:t.iconsCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"circle outline",size:"big"}),e(u,{name:"user"})]),_:1})]),_:1},8,["code"]),e(r,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:t.cornerIconCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"puzzle"}),e(u,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const L_=pe(R_,[["render",V_]]),G="/vue-fomantic-ui/images/wireframe/image.png",Hl="/vue-fomantic-ui/images/wireframe/image-text.png",Qi="/vue-fomantic-ui/images/wireframe/white-image.png",dt="/vue-fomantic-ui/images/wireframe/square-image.png",O_=B({name:"ImageDoc",components:{DocExample:ve},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),H_={class:"intro"},j_=C("span",null,"Username",-1),q_=C("span",null,"Top Aligned",-1),U_=C("span",null,"Middle Aligned",-1),J_=C("span",null,"Bottom Aligned",-1),G_=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Y_=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),W_=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),K_=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Q_=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),X_=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function Z_(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-image"),y=_("doc-example"),A=_("sui-image-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",H_,[e(f,{as:"h1"},{default:i(()=>[a("Image "),e(p,null,{default:i(()=>[a(" An image is a graphic representation of something ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Image",description:"An image",code:t.imageCode},{default:i(()=>[e(r,{src:G,size:"small"})]),_:1},8,["code"]),e(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:t.imageLinkCode},{default:i(()=>[e(r,{as:"a",size:"medium",src:Hl,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Hidden",description:"An image can be hidden",code:t.hiddenCode},{default:i(()=>[e(r,{hidden:"",src:G,size:"small"})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:t.disabledCode},{default:i(()=>[e(r,{disabled:"",src:G,size:"small"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:t.avatarCode},{default:i(()=>[C("div",null,[e(r,{avatar:"",src:G}),j_])]),_:1},8,["code"]),e(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:t.borderedCode},{default:i(()=>[e(r,{bordered:"",size:"medium",src:Qi})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An image can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(r,{fluid:"",src:G})]),_:1},8,["code"]),e(y,{title:"Rounded",description:"An image may appear rounded",code:t.roundedCode},{default:i(()=>[e(r,{rounded:"",size:"medium",src:G})]),_:1},8,["code"]),e(y,{title:"Circular",description:"An image may appear circular",code:t.circularCode},{default:i(()=>[e(r,{circular:"",size:"medium",src:dt})]),_:1},8,["code"]),e(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:t.verticallyAlignedCode},{default:i(()=>[C("div",null,[e(r,{verticalAlign:"top",size:"tiny",src:dt}),q_,e(s),e(r,{verticalAlign:"middle",size:"tiny",src:dt}),U_,e(s),e(r,{verticalAlign:"bottom",size:"tiny",src:dt}),J_])]),_:1},8,["code"]),e(y,{title:"Centered",description:"An image can appear centered in a content block",code:t.centeredCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{centered:"",size:"medium",src:G}),G_,Y_,e(r,{centered:"",size:"small",src:Hl}),W_]),_:1})]),_:1},8,["code"]),e(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:t.spacedCode},{default:i(()=>[e(v,null,{default:i(()=>[C("p",null,[a("Te eum doming eirmod, nominati pertinacia "),e(r,{spaced:"",size:"mini",src:G}),a(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),e(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{floated:"left",size:"small",src:Hl}),K_,e(r,{floated:"right",size:"small",src:Hl}),Q_,X_]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"An image may appear at different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(r,{size:"mini",src:G}),e(s,{hidden:""}),e(r,{size:"tiny",src:G}),e(s,{hidden:""}),e(r,{size:"medium",src:G}),e(s,{hidden:""}),e(r,{size:"large",src:G})])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:t.sizeGroupCode},{default:i(()=>[e(A,{size:"tiny"},{default:i(()=>[e(r,{src:G}),e(r,{src:G}),e(r,{src:G}),e(r,{src:G})]),_:1})]),_:1},8,["code"])]),_:1})])}const eb=pe(O_,[["render",Z_]]),tb=B({name:"InputDoc",components:{DocExample:ve},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),ib={class:"intro"};function lb(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-input"),y=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",ib,[e(f,{as:"h1"},{default:i(()=>[a("Input "),e(p,null,{default:i(()=>[a(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Input",description:"A standard input",code:t.inputCode},{default:i(()=>[e(r,{placeholder:"Search..."})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:t.focusCode},{default:i(()=>[e(r,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:t.loadingCode},{default:i(()=>[C("div",null,[e(r,{loading:"",placeholder:"Search..."}),e(s,{hidden:""}),e(r,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An input field can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(r,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Error",description:"An input field can show the data contains errors",code:t.errorCode},{default:i(()=>[e(r,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Icon",description:"An input can be formatted with an icon",code:t.iconCode},{default:i(()=>[e(r,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"An input can be formatted with a label",code:t.labeledCode},{default:i(()=>[C("div",null,[e(r,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:t.actionCode},{default:i(()=>[e(r,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Transparent",description:"A transparent input has no background",code:t.transparentCode},{default:i(()=>[e(r,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{inverted:"",placeholder:"Search..."}),e(s,{inverted:""}),e(r,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(s,{inverted:""}),e(r,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An input can take the size of its container",code:t.fluidCode},{default:i(()=>[e(r,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Size",description:"An input can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(r,{size:"mini",icon:"search",placeholder:"Search mini"}),e(s,{hidden:""}),e(r,{size:"small",icon:"search",placeholder:"Search small"}),e(s,{hidden:""}),e(r,{size:"large",icon:"search",placeholder:"Search large"}),e(s,{hidden:""}),e(r,{size:"big",icon:"search",placeholder:"Search big"}),e(s,{hidden:""}),e(r,{size:"huge",icon:"search",placeholder:"Search huge"}),e(s,{hidden:""}),e(r,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const ab=pe(tb,[["render",lb]]),An="/vue-fomantic-ui/images/avatar/small/joe.jpg",Tt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",_l="/vue-fomantic-ui/images/avatar/small/stevie.jpg",nb=B({name:"LabelDoc",components:{DocExample:ve},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),sb={class:"intro"},ob=C("img",{src:An},null,-1),ub=C("img",{src:Tt},null,-1),rb=C("img",{src:_l},null,-1),db=C("input",{type:"text",placeholder:"First name"},null,-1),cb=C("input",{type:"text",placeholder:"Last name"},null,-1),mb=C("input",{type:"text",placeholder:"Username"},null,-1),fb=C("input",{type:"password",placeholder:"Password"},null,-1),pb=C("span",null,"Account Details",-1),gb=C("span",null,"User Reviews",-1),hb=C("img",{src:_l},null,-1),_b=C("img",{src:Tt},null,-1);function bb(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-label"),y=_("doc-example"),A=_("sui-form-field"),$=_("sui-form"),b=_("sui-image"),w=_("sui-grid-column"),k=_("sui-grid"),T=_("sui-grid-row"),E=_("sui-list-item"),z=_("sui-list"),M=_("sui-label-detail"),P=_("sui-label-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",sb,[e(f,{as:"h1"},{default:i(()=>[a("Label "),e(p,null,{default:i(()=>[a(" A label displays content classification ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Label",description:"A label",code:t.labelCode},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:t.imageCode},{default:i(()=>[C("div",null,[e(r,{as:"a",image:""},{default:i(()=>[ob,a(" Joe ")]),_:1}),e(r,{as:"a",image:""},{default:i(()=>[ub,a(" Elliot ")]),_:1}),e(r,{as:"a",image:""},{default:i(()=>[rb,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Pointing",description:"A label can point to content next to it",code:t.pointingCode},{default:i(()=>[e($,{fluid:""},{default:i(()=>[e(A,null,{default:i(()=>[db,e(r,{pointing:""},{default:i(()=>[a("Please enter a value")]),_:1})]),_:1}),e(s),e(A,null,{default:i(()=>[e(r,{pointing:"below"},{default:i(()=>[a("Please enter a value")]),_:1}),cb]),_:1}),e(s),e(A,{inline:""},{default:i(()=>[mb,e(r,{pointing:"left"},{default:i(()=>[a("That name is taken!")]),_:1})]),_:1}),e(s),e(A,{inline:""},{default:i(()=>[e(r,{pointing:"right"},{default:i(()=>[a("Your password must be 6 characters or more")]),_:1}),fb]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:t.cornerCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(b,{fluid:"",src:G,label:{corner:"left",icon:"heart"}})]),_:1}),e(w,null,{default:i(()=>[e(b,{fluid:"",src:G,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag",description:"A label can appear as a tag",code:t.tagCode},{default:i(()=>[C("div",null,[e(r,{tag:""},{default:i(()=>[a("New")]),_:1}),e(r,{tag:"",color:"red"},{default:i(()=>[a("Upcoming")]),_:1}),e(r,{tag:"",color:"teal"},{default:i(()=>[a("Featured")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:t.ribbonCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(r,{as:"a",ribbon:"",color:"red"},{default:i(()=>[a("Overview")]),_:1}),pb,e(b,{src:ge}),e(r,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[a("Community")]),_:1}),gb,e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(r,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[a("Specs")]),_:1}),e(b,{src:ge}),e(r,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[a("Reviews")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Attached",description:"A label can attach to a content segment",code:t.attachedCode},{default:i(()=>[e(k,{columns:3},{default:i(()=>[e(T,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"top"},{default:i(()=>[a("HTML")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"bottom"},{default:i(()=>[a("CSS")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"top right"},{default:i(()=>[a("Code")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"top left"},{default:i(()=>[a("View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"bottom left"},{default:i(()=>[a("User View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(r,{attached:"bottom right"},{default:i(()=>[a("Admin View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:t.horizontalCode},{default:i(()=>[e(z,{divided:"",selection:""},{default:i(()=>[e(E,null,{default:i(()=>[e(r,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Kumquats ")]),_:1}),e(E,null,{default:i(()=>[e(r,{color:"purple",horizontal:""},{default:i(()=>[a("Candy")]),_:1}),a(" Ice Cream ")]),_:1}),e(E,null,{default:i(()=>[e(r,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Orange ")]),_:1}),e(E,null,{default:i(()=>[e(r,{horizontal:""},{default:i(()=>[a("Dog")]),_:1}),a(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Floating",description:"A label can float above or below another element",code:t.floatingCode},{default:i(()=>[e(c,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{name:"mail"}),a(" Messages "),e(r,{floating:"",color:"red"},{default:i(()=>[a("22")]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{name:"users"}),a(" Friends "),e(r,{floating:"",color:"teal"},{default:i(()=>[a("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Detail",description:"A label can contain a detail",code:t.detailCode},{default:i(()=>[e(r,null,{default:i(()=>[a(" Dogs "),e(M,null,{default:i(()=>[a("214")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A label can include an icon",code:t.iconCode},{default:i(()=>[C("div",null,[e(r,{as:"a"},{default:i(()=>[e(u,{name:"mail"}),a(" Mail ")]),_:1}),e(r,{as:"a"},{default:i(()=>[a(" Tag "),e(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can include an image",code:t.imageIncludeCode},{default:i(()=>[C("div",null,[e(r,{as:"a"},{default:i(()=>[e(b,{avatar:"",spaced:"right",src:Tt}),a(" Elliot ")]),_:1}),e(r,{as:"a"},{default:i(()=>[hb,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Link",description:"A label can be a link or contain an item that links",code:t.linkCode},{default:i(()=>[e(r,{as:"a",link:""},{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Circular",description:"A label can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(r,{as:"a",circular:"",color:"red"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"orange"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"olive"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"green"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"teal"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"blue"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"violet"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"purple"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"pink"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"brown"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"grey"},{default:i(()=>[a("2")]),_:1}),e(r,{as:"a",circular:"",color:"black"},{default:i(()=>[a("2")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A label can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(r,{basic:"",as:"a"},{default:i(()=>[a("Basic")]),_:1}),e(r,{basic:"",as:"a",pointing:""},{default:i(()=>[a("Pointing")]),_:1}),e(r,{basic:"",as:"a",image:""},{default:i(()=>[_b,a(" Elliot ")]),_:1}),e(r,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[a("Red Pointing")]),_:1}),e(r,{basic:"",as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A label can have different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(r,{as:"a",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(r,{as:"a",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(r,{as:"a",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{as:"a",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{as:"a",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{as:"a",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{as:"a",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{as:"a",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{as:"a",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{as:"a",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{as:"a",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{as:"a",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{as:"a",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(r,{as:"a",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic Tag",description:"",code:t.basicTagCode},{default:i(()=>[C("div",null,[e(r,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(r,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Size",description:"A label can be small or large",code:t.sizeCode},{default:i(()=>[C("div",null,[e(r,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(r,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(r,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(r,null,{default:i(()=>[a("Medium")]),_:1}),e(r,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(r,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(r,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(r,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Group Size",description:"Labels can share sizes together",code:t.groupSizeCode},{default:i(()=>[e(P,{size:"huge"},{default:i(()=>[e(r,null,{default:i(()=>[a("Fun")]),_:1}),e(r,null,{default:i(()=>[a("Happy")]),_:1}),e(r,null,{default:i(()=>[a("Smart")]),_:1}),e(r,null,{default:i(()=>[a("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored Group",description:"Labels can share colors together",code:t.coloredGroupCode},{default:i(()=>[e(P,{color:"blue"},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(r,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Group",description:"Labels can share their style together",code:t.basicGroupCode},{default:i(()=>[e(P,{basic:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(r,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag Group",description:"Labels can share tag formatting",code:t.tagGroupCode},{default:i(()=>[e(P,{tag:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("$10.00")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("$19.99")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("$24.99")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("$30.99")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"CircularGroup",description:"Labels can share shapes",code:t.circularGroupCode},{default:i(()=>[e(P,{circular:""},{default:i(()=>[e(r,null,{default:i(()=>[a("11")]),_:1}),e(r,null,{default:i(()=>[a("22")]),_:1}),e(r,null,{default:i(()=>[a("33")]),_:1}),e(r,null,{default:i(()=>[a("44")]),_:1}),e(r,null,{default:i(()=>[a("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const vb=pe(nb,[["render",bb]]),yb="/vue-fomantic-ui/images/avatar/small/rachel.png",Cb="/vue-fomantic-ui/images/avatar/small/lindsay.png",wb="/vue-fomantic-ui/images/avatar/small/matthew.png",Ea="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Ab="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Sb="/vue-fomantic-ui/images/avatar/small/tom.jpg",jl="/vue-fomantic-ui/images/avatar/small/christian.jpg",Ba="/vue-fomantic-ui/images/avatar/small/matt.jpg",Xi="/vue-fomantic-ui/images/avatar/small/helen.jpg",li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",kb=B({name:"ListDoc",components:{DocExample:ve},setup(){return{listCode:`<sui-list>
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
</div>`}}}),$b={class:"intro"},Tb=C("div",null,"Benefits",-1),xb={class:"list"},Eb=C("a",null,"Languages",-1),Bb=C("a",null,[C("b",null,"Arrested Development")],-1),Rb=C("a",null,[C("b",null,"Bob's Burgers")],-1),Pb=C("a",null,[C("b",null,"The Godfather Part 2")],-1),zb=C("a",null,[C("b",null,"Twin Peaks")],-1),Mb=C("a",null,[C("b",null,"Arrested Development")],-1),Db=C("a",null,[C("b",null,"Bob's Burgers")],-1),Fb=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function Ib(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-list-item"),y=_("sui-list"),A=_("doc-example"),$=_("sui-list-list"),b=_("sui-list-header"),w=_("sui-list-description"),k=_("sui-list-content"),T=_("sui-image");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",$b,[e(f,{as:"h1"},{default:i(()=>[a("List "),e(p,null,{default:i(()=>[a(" A list is used to group related content ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"List",description:"A list groups related content",code:t.listCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Apples")]),_:1}),e(r,null,{default:i(()=>[a("Pears")]),_:1}),e(r,null,{default:i(()=>[a("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:t.bulletedCode},{default:i(()=>[e(y,{bulleted:""},{default:i(()=>[e(r,null,{default:i(()=>[a("Gaining Access")]),_:1}),e(r,null,{default:i(()=>[a("Inviting Friends")]),_:1}),e(r,null,{default:i(()=>[Tb,C("div",xb,[e(r,{as:"a"},{default:i(()=>[a("Link to somewhere")]),_:1}),e(r,null,{default:i(()=>[a("Rebates")]),_:1}),e(r,null,{default:i(()=>[a("Discounts")]),_:1})])]),_:1}),e(r,null,{default:i(()=>[a("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Ordered",description:"A list can be ordered numerically",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Getting Started")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Introduction")]),_:1}),e(r,null,{default:i(()=>[Eb,e($,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("HTML")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Javascript")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("CSS")]),_:1})]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Review")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:t.linkCode},{default:i(()=>[e(y,{link:""},{default:i(()=>[e(r,{active:""},{default:i(()=>[a("Home")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("About")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Jobs")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Team")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Item",description:"A list item can contain a set of items",code:t.itemCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[a("1")]),_:1}),e(r,null,{default:i(()=>[a("2")]),_:1}),e(r,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Icon",description:"A list item can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[e(u,{name:"help"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Floated Icon")]),_:1}),e(w,null,{default:i(()=>[a(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),e(r,{as:"a"},{default:i(()=>[e(u,{name:"right triangle"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Icon Alignment")]),_:1}),e(w,null,{default:i(()=>[a(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"help"}),a(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Image",description:"A list can contain an image",code:t.imageContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:yb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Rachel")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Bb,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:Cb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Lindsay")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Rb,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:wb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matthew")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Pb,a(" yesterday. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:Ea}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),zb,a(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:Ab}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(w,null,{default:i(()=>[a(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A list can contain links",code:t.linkContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("What is a FAQ?")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Who is our user?")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"header",description:"A list item can contain a header",code:t.headerContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(b,null,{default:i(()=>[a("New York City")]),_:1}),a(" A lovely city ")]),_:1}),e(r,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Chicago")]),_:1}),a(" Also quite a lovely city ")]),_:1}),e(r,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Los Angeles")]),_:1}),a(" Sometimes can be a lovely city ")]),_:1}),e(r,null,{default:i(()=>[e(b,null,{default:i(()=>[a("San Francisco")]),_:1}),a(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Description",description:"A list item can contain a description",code:t.descriptionContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Krolewskie Jadlo")]),_:1}),e(w,null,{default:i(()=>[a(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Xian Famous Foods")]),_:1}),e(w,null,{default:i(()=>[a(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Sapporo Haru")]),_:1}),e(w,null,{default:i(()=>[a(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Enid's")]),_:1}),e(w,null,{default:i(()=>[a(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:t.horizontalVarCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:Sb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Tom")]),_:1}),a(" Top Contributor ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:jl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian Rocha")]),_:1}),a(" Admin ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:Ba}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matt")]),_:1}),a(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:t.invertedVarCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:t.selectionVarCode},{default:i(()=>[e(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:Xi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:jl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:t.animatedVarCode},{default:i(()=>[e(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:Xi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:jl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:t.relaxedVarCode},{default:i(()=>[e(y,{relaxed:""},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Mb,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:_l}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Db,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:Tt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Fb,a(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Divided",description:"A list can show divisions between content",code:t.dividedVarCode},{default:i(()=>[e(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:_l}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:Tt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Celled",description:"A list can divide its items into cells",code:t.celledVarCode},{default:i(()=>[e(y,{celled:""},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:Xi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"A list can vary in size",code:t.sizeCode},{default:i(()=>[e(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:Xi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:jl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:li}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content Variations")]),_:1}),e(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:t.verticalAlignedCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(r,null,{default:i(()=>[e(T,{avatar:"",src:dt}),e(k,{verticalAlign:"top"},{default:i(()=>[a(" Top Aligned ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:dt}),e(k,{verticalAlign:"middle"},{default:i(()=>[a(" Middle ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(T,{avatar:"",src:dt}),e(k,{verticalAlign:"bottom"},{default:i(()=>[a(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:t.floatedCode},{default:i(()=>[C("div",null,[e(y,{floated:"right",horizontal:""},{default:i(()=>[e(r,{disabled:""},{default:i(()=>[a("© GitHub, Inc.")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Terms")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Privacy")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Contact")]),_:1})]),_:1}),e(y,{horizontal:""},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("About Us")]),_:1}),e(r,{as:"a"},{default:i(()=>[a("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Nb=pe(kb,[["render",Ib]]),Vb=B({name:"LoaderDoc",components:{DocExample:ve},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),Lb={class:"intro"};function Ob(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-loader"),y=_("sui-dimmer"),A=_("sui-image"),$=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Lb,[e(f,{as:"h1"},{default:i(()=>[a("Loader "),e(p,null,{default:i(()=>[a(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e($,{title:"Loader",description:"A loader",code:t.loaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(r)]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Text Loader",description:"A loader can contain text",code:t.textLoaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(r,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e($,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:t.indeterminateCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(r,{indeterminate:""},{default:i(()=>[a("Preparing Files")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Active",description:"A loader can be active or visible",code:t.activeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{active:""}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Diasbled",description:"A loader can be disabled or hidden",code:t.disabledCode},{default:i(()=>[e(v,null,{default:i(()=>[e(r,{disabled:""}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e($,{title:"Inline",description:"Loaders can appear inline with content",code:t.inlineCode},{default:i(()=>[e(r,{inline:"",active:""})]),_:1},8,["code"]),e($,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:t.inlineCenterCode},{default:i(()=>[e(r,{inline:"centered",active:""})]),_:1},8,["code"]),e($,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:t.speedCode},{default:i(()=>[C("div",null,[e(r,{slow:"",active:"",inline:""}),e(r,{active:"",inline:""}),e(r,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e($,{title:"Colors",description:"Loaders can be different colors",code:t.colorsCode},{default:i(()=>[C("div",null,[e(r,{color:"primary",inline:"",active:""}),e(r,{color:"secondary",inline:"",active:""}),e(r,{color:"red",inline:"",active:""}),e(r,{color:"orange",inline:"",active:""}),e(r,{color:"yellow",inline:"",active:""}),e(r,{color:"olive",inline:"",active:""}),e(r,{color:"green",inline:"",active:""}),e(r,{color:"teal",inline:"",active:""}),e(r,{color:"blue",inline:"",active:""}),e(r,{color:"violet",inline:"",active:""}),e(r,{color:"purple",inline:"",active:""}),e(r,{color:"pink",inline:"",active:""}),e(r,{color:"brown",inline:"",active:""}),e(r,{color:"grey",inline:"",active:""}),e(r,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e($,{title:"Size",description:"Loaders can have different sizes",code:t.sizeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(r,{size:"mini"},{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Inverted",description:"Loaders can have their colors inverted",code:t.invertedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:"",inverted:""},{default:i(()=>[e(r,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"])]),_:1})])}const Hb=pe(Vb,[["render",Ob]]),jb=B({name:"RailDoc",components:{DocExample:ve},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),qb={class:"intro"};function Ub(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-image"),y=_("sui-rail"),A=_("sui-grid-column"),$=_("sui-grid"),b=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",qb,[e(f,{as:"h1"},{default:i(()=>[a("Rail "),e(p,null,{default:i(()=>[a(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:t.railCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:Ce}),e(y,{position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:t.internalCode},{default:i(()=>[e(v,{textAlign:"center"},{default:i(()=>[e(r,{src:Ce}),e(y,{internal:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a("Left Rail Content")]),_:1})]),_:1}),e(y,{internal:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:t.dividingCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:Ce}),e(y,{dividing:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{dividing:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:t.attachedCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:Ce}),e(y,{attached:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{attached:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:t.closeCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:Ce}),e(y,{close:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{close:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Size",description:"A rail can have different sizes",code:t.sizeCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,{src:Ce}),e(y,{size:"small",position:"left"},{default:i(()=>[a(" Left Small Rail ")]),_:1}),e(y,{size:"large",position:"right"},{default:i(()=>[a(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Jb=pe(jb,[["render",Ub]]),Gb="/vue-fomantic-ui/images/avatar/large/ade.jpg",Ao="/vue-fomantic-ui/images/avatar/large/chris.jpg",Sn="/vue-fomantic-ui/images/avatar/large/stevie.jpg",So="/vue-fomantic-ui/images/avatar/large/nan.jpg",Yb=B({name:"RevealDoc",components:{DocExample:ve},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),Wb={class:"intro"};function Kb(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-image"),y=_("sui-reveal-content"),A=_("sui-reveal"),$=_("doc-example");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Wb,[e(f,{as:"h1"},{default:i(()=>[a("Reveal "),e(p,null,{default:i(()=>[a(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e($,{title:"Fade",description:"An element can disappear to reveal content below",code:t.fadeCode},{default:i(()=>[e(A,{animated:"fade"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(r,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(r,{size:"small",src:Gb})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Move",description:"An element can move in a direction to reveal content",code:t.moveCode},{default:i(()=>[e(A,{animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(r,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(r,{size:"small",src:Ao})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Rotate",description:"An element can rotate to reveal content below",code:t.rotateCode},{default:i(()=>[e(A,{animated:"rotate"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(r,{circular:"",size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(r,{circular:"",size:"small",src:Sn})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e($,{title:"Active",description:"An active reveal displays its hidden content",code:t.activeCode},{default:i(()=>[e(A,{active:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(r,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(r,{size:"small",src:So})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:t.disabledCode},{default:i(()=>[e(A,{disabled:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(r,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(r,{size:"small",src:So})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e($,{title:"Instant",description:"An element can show its content without delay",code:t.instantCode},{default:i(()=>[e(A,{instant:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(r,{size:"small",src:dt})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(r,{size:"small",src:Ao})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Qb=pe(Yb,[["render",Kb]]),Xb=B({name:"SegmentDoc",components:{DocExample:ve},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),Zb={class:"intro"},ev=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),tv=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),iv=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),lv=C("p",null,"Top",-1),av=C("p",null,"Middle",-1),nv=C("p",null,"Middle",-1),sv=C("p",null,"Middle",-1),ov=C("p",null,"Bottom",-1),uv=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),rv=C("p",null,"This segment is on top",-1),dv=C("p",null,"This segment is attached on both sides",-1),cv=C("p",null,"This segment is on bottom",-1),mv=C("p",null,"Fitted Segment",-1),fv=C("p",null,"Horizontally fitted segment",-1),pv=C("p",null,"Vertically fitted segment",-1),gv=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),hv=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),_v=C("p",null,"If you notice me you must be looking very hard.",-1),bv=C("p",null,"This segment will appear to the right",-1),vv=C("p",null,"This segment will appear to the left",-1),yv=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Cv(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("doc-example"),y=_("sui-button"),A=_("sui-segment-group");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Zb,[e(f,{as:"h1"},{default:i(()=>[a("Segment "),e(p,null,{default:i(()=>[a(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Segment",description:"A segment of content",code:t.segmentCode},{default:i(()=>[e(v,null,{default:i(()=>[a("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),e(r,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:t.placeholderCode},{default:i(()=>[e(v,{placeholder:""},{default:i(()=>[e(f,{icon:""},{default:i(()=>[e(u,{name:"file outline"}),a(" No documents are listed for this customer. ")]),_:1}),e(y,{color:"primary"},{default:i(()=>[a("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Raised",description:"A segment may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(v,{raised:""},{default:i(()=>[ev]),_:1})]),_:1},8,["code"]),e(r,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:t.stackedCode},{default:i(()=>[e(v,{stacked:""},{default:i(()=>[tv]),_:1})]),_:1},8,["code"]),e(r,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:t.piledCode},{default:i(()=>[e(v,{piled:""},{default:i(()=>[iv]),_:1})]),_:1},8,["code"]),e(r,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:t.verticalCode},{default:i(()=>[C("div",null,[e(v,{vertical:""},{default:i(()=>[a(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(r,{title:"Segments",description:"A group of segments can be formatted to appear together",code:t.segmentsCode},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[lv]),_:1}),e(v,null,{default:i(()=>[av]),_:1}),e(v,null,{default:i(()=>[nv]),_:1}),e(v,null,{default:i(()=>[sv]),_:1}),e(v,null,{default:i(()=>[ov]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:t.nestedCode},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Nested Top")]),_:1}),e(v,null,{default:i(()=>[a("Nested Middle")]),_:1}),e(v,null,{default:i(()=>[a("Nested Bottom")]),_:1})]),_:1}),e(A,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:t.horizontalCode},{default:i(()=>[e(A,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Left")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Right")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Raised Segments",description:"A group of segments can be raised",code:t.raisedSegmentsCode},{default:i(()=>[e(A,{raised:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Stacked Segments",description:"A group of segments can be stacked",code:t.stackedSegmentsCode},{default:i(()=>[e(A,{stacked:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Piled Segments",description:"A group of segments can be piled",code:t.piledSegmentsCode},{default:i(()=>[e(A,{piled:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(r,{title:"Disabled",description:"A segment may show its content is disabled",code:t.disabledCode},{default:i(()=>[e(v,{disabled:""},{default:i(()=>[a("Disabled content")]),_:1})]),_:1},8,["code"]),e(r,{title:"Loading",description:"A segment may show its content is being loaded",code:t.loadingCode},{default:i(()=>[e(v,{loading:""},{default:i(()=>[a("Now Loading...")]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[uv]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A segment can be attached to other content on a page",code:t.attachedCode},{default:i(()=>[C("div",null,[e(v,{attached:"top"},{default:i(()=>[rv]),_:1}),e(v,{attached:""},{default:i(()=>[dv]),_:1}),e(v,{attached:"bottom"},{default:i(()=>[cv]),_:1})])]),_:1},8,["code"]),e(r,{title:"Padded",description:"A segment can increase its padding",code:t.paddedCode},{default:i(()=>[e(v,{padded:""},{default:i(()=>[a("Padded content")]),_:1})]),_:1},8,["code"]),e(r,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[C("div",null,[e(v,{fitted:""},{default:i(()=>[mv]),_:1}),e(v,{fitted:"horizontally"},{default:i(()=>[fv]),_:1}),e(v,{fitted:"vertically"},{default:i(()=>[pv]),_:1})])]),_:1},8,["code"]),e(r,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:t.compactCode},{default:i(()=>[e(v,{compact:""},{default:i(()=>[a("Compact content")]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A segment can be colored",code:t.coloredCode},{default:i(()=>[C("div",null,[e(v,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(v,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(v,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(v,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(v,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(v,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(v,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(v,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(v,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(v,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(v,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(v,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(v,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:t.emphasisCode},{default:i(()=>[C("div",null,[e(v,null,{default:i(()=>[gv]),_:1}),e(v,{secondary:""},{default:i(()=>[hv]),_:1}),e(v,{tertiary:""},{default:i(()=>[_v]),_:1})])]),_:1},8,["code"]),e(r,{title:"Circular",description:"A segment can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(p,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1}),e(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(p,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Clearing",description:"A segment can clear floated content",code:t.clearingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(y,{floated:"right"},{default:i(()=>[a("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Floated",description:"A segment can appear to the left or right of other content",code:t.floatedCode},{default:i(()=>[C("div",null,[e(v,{floated:"right"},{default:i(()=>[bv]),_:1}),e(v,{floated:"left"},{default:i(()=>[vv]),_:1})])]),_:1},8,["code"]),e(r,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[C("div",null,[e(v,{textAlign:"right"},{default:i(()=>[a(" Right ")]),_:1}),e(v,{textAlign:"left"},{default:i(()=>[a(" Left ")]),_:1}),e(v,{textAlign:"center"},{default:i(()=>[a(" Center ")]),_:1})])]),_:1},8,["code"]),e(r,{title:"Basic",description:"A basic segment has no special formatting",code:t.basicCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[yv]),_:1})]),_:1},8,["code"])]),_:1})])}const wv=pe(Xb,[["render",Cv]]),Av=B({name:"StepDoc",components:{DocExample:ve},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),Sv={class:"intro"},kv=C("p",null,"The steps take up the entire column width",-1),$v=C("p",null,"Main content",-1);function Tv(t,l,n,o,d,m){const p=_("sui-header-subheader"),f=_("sui-header"),s=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),r=_("sui-step"),y=_("sui-step-group"),A=_("doc-example"),$=_("sui-step-title"),b=_("sui-step-description"),w=_("sui-step-content"),k=_("sui-grid-column"),T=_("sui-grid");return te(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Sv,[e(f,{as:"h1"},{default:i(()=>[a("Step "),e(p,null,{default:i(()=>[a(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),e(s,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Step",description:"A single step",code:t.stepCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(A,{title:"Steps",description:"A set of steps",code:t.stepsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:t.verticalCode},{default:i(()=>[e(y,{vertical:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Description",description:"A step can contain a description",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Icon",description:"A step can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A step can link",code:t.linkCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,{link:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(A,{title:"Active",description:"A step can be highlighted as active",code:t.activeCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Completed",description:"A step can show that a user has completed it",code:t.completedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:t.disabledCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,{disabled:""},{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:t.stackableCode},{default:i(()=>[e(y,{stackable:"tablet"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:t.unstackableCode},{default:i(()=>[e(y,{unstackable:""},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:t.fluidCode},{default:i(()=>[e(T,{columns:2},{default:i(()=>[e(k,null,{default:i(()=>[e(y,{fluid:"",vertical:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:i(()=>[kv]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Attached",description:"Steps can be attached to other elements",code:t.attachedCode},{default:i(()=>[C("div",null,[e(y,{attached:"top"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[$v]),_:1}),e(y,{attached:"bottom"},{default:i(()=>[e(r,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:t.evenlyDividedCode},{default:i(()=>[e(y,{widths:2},{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"Steps can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"mini"},{default:i(()=>[e(r,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(r,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"A step's color can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",vertical:""},{default:i(()=>[e(r,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(r,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const xv=pe(Av,[["render",Tv]]),Ev=B({name:"BreadcrumbDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function Bv(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-breadcrumb-section"),u=_("sui-breadcrumb-divider"),g=_("sui-breadcrumb"),c=_("doc-example"),h=_("sui-segment"),v=_("sui-container");return te(),re("div",null,[e(p,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(v,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:t.breadcrumbCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{link:""},{default:i(()=>[a("Store")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{description:"You can do the same using shorthands",code:t.breadcrumbCode2},{default:i(()=>[e(g,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:t.dividerCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(s,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right arrow"}),e(s,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:t.sectionCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Link",description:"A section may be linkable or contain a link",code:t.linkCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(c,{title:"Active",description:"A section can be active",code:t.activeCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Product")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(s,{active:""},{default:i(()=>[a("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(s,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(s,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Size",description:"A breadcrumb can vary in size",code:t.sizeCode},{default:i(()=>[e(g,{size:"mini"},{default:i(()=>[e(s,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(s,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(s,null,{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Rv=pe(Ev,[["render",Bv]]),Pv=B({name:"FormDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function zv(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-form-field"),u=_("sui-checkbox"),g=_("sui-button"),c=_("sui-form"),h=_("doc-example"),v=_("sui-form-group"),r=_("sui-container");return te(),re("div",null,[e(p,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(r,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Form",description:"A form",code:t.formCode},{default:i(()=>[e(c,null,{default:i(()=>[e(s,{label:"First Name",placeholder:"First Name"}),e(s,{label:"Last Name",placeholder:"Last Name"}),e(s,null,{default:i(()=>[e(u,{label:"I agree to the Terms and Conditions"})]),_:1}),e(g,null,{default:i(()=>[a("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(h,{title:"Field",description:"A field is a form element containing a label and an input",code:t.fieldCode},{default:i(()=>[e(c,null,{default:i(()=>[e(s,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fields",description:"A set of fields can appear grouped together",code:t.fieldsCode},{default:i(()=>[e(c,null,{default:i(()=>[e(v,null,{default:i(()=>[e(s,{label:"First name",placeholder:"First Name"}),e(s,{label:"Middle name",placeholder:"Middle Name"}),e(s,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Mv=pe(Pv,[["render",zv]]),Et="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ko="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",Dv=B({name:"GridDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),Fv=C("br",null,null,-1);function Iv(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-image"),u=_("sui-grid-column"),g=_("sui-grid"),c=_("doc-example"),h=_("sui-grid-row"),v=_("sui-segment"),r=_("sui-divider"),y=_("sui-menu-item"),A=_("sui-menu"),$=_("sui-container");return te(),re("div",null,[e(p,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e($,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Grid",description:"A basic grid",code:t.gridCode},{default:i(()=>[e(g,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.numbers,b=>(te(),Je(u,{key:b},{default:i(()=>[e(s,{src:G})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(c,{title:"Divided",description:"A grid can have dividers between its columns",code:t.dividedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:Et})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:t.verticalDividedCode},{default:i(()=>[e(g,{divided:"vertically"},{default:i(()=>[e(h,{columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Celled",description:"A grid can have rows divided into cells",code:t.celledCode},{default:i(()=>[e(g,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:13},{default:i(()=>[e(s,{src:ko})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:10},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:t.internallyCelledCode},{default:i(()=>[e(g,{celled:"internally"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:13},{default:i(()=>[e(s,{src:ko})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:10},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:t.rowsCode},{default:i(()=>[e(g,{columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:t.columnsCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:t.floatedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{floated:"left",width:5},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{floated:"right",width:5},{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:t.columnWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:4},{default:i(()=>[e(s,{src:G})]),_:1}),e(u,{width:9},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(s,{src:Et})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:t.columnCountCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1}),e(h,{columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Equal Width",description:"Equal Width",code:t.equalWidthCode},{default:i(()=>[e(g,{columns:"equal"},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,{width:8},{default:i(()=>[e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:t.stretchedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,{stretched:""},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1}),e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:t.paddedCode},{default:i(()=>[C("div",null,[e(r),e(g,{padded:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})])]),_:1},8,["code"]),e(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:t.relaxedCode},{default:i(()=>[e(g,{relaxed:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Colored",description:"A row or column can be colored",code:t.coloredCode},{default:i(()=>[e(g,{padded:"",columns:5},{default:i(()=>[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Centered",description:"A grid can have its columns centered",code:t.centeredCode},{default:i(()=>[e(g,{centered:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(h,{centered:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:t.textAlignCode},{default:i(()=>[e(g,{textAlign:"center",columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Cats")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Dogs")]),_:1}),e(y,null,{default:i(()=>[a("Poodle")]),_:1}),e(y,null,{default:i(()=>[a("Cockerspaniel")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:t.verticalAlignCode},{default:i(()=>[e(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G}),Fv,e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Responsive Variations")]),_:1}),e(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:t.doublingCode},{default:i(()=>[e(g,{doubling:"",columns:5},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:t.stackableCode},{default:i(()=>[e(g,{stackable:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:t.reversedCode},{default:i(()=>[e(g,{reversed:"computer vertically"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 3")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 2")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:t.deviceVisibilityCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{only:"large screen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1})]),_:1}),e(h,{only:"widescreen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1})]),_:1}),e(h,{only:"mobile",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,{only:"computer"},{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,{only:"mobile"},{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet and Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1})]),_:1}),e(h,{only:"computer",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1})]),_:1}),e(h,{only:"tablet",columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:t.responsiveWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Nv=pe(Dv,[["render",Iv]]),Vv="/vue-fomantic-ui/images/logo.png",Lv=B({name:"MenuDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),Ov=C("p",null,"Check out our new promotions",-1),Hv=C("p",null,"Check out our collection of coupons",-1),jv=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),qv=C("img",{src:Vv},null,-1);function Uv(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-menu-item"),u=_("sui-menu"),g=_("doc-example"),c=_("sui-input"),h=_("sui-menu-menu"),v=_("sui-label"),r=_("sui-button"),y=_("sui-dropdown-item"),A=_("sui-dropdown-menu"),$=_("sui-dropdown"),b=_("sui-icon"),w=_("sui-segment"),k=_("sui-container");return te(),re("div",null,[e(p,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(k,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Menu",description:"A menu",code:t.menuCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Editorials")]),_:1}),e(s,null,{default:i(()=>[a("Reviews")]),_:1}),e(s,null,{default:i(()=>[a("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:t.secondaryMenuCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(s,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(s,null,{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(s,null,{default:i(()=>[a("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(s,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(s,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:t.tabularCode},{default:i(()=>[e(u,{tabular:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Bio")]),_:1}),e(s,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",description:"A menu can be formatted for text content",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(s,{header:""},{default:i(()=>[a("Sort By")]),_:1}),e(s,{active:""},{default:i(()=>[a("Closest")]),_:1}),e(s,null,{default:i(()=>[a("Most Comments")]),_:1}),e(s,null,{default:i(()=>[a("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:t.verticalMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,{active:"",color:"teal"},{default:i(()=>[a(" Inbox "),e(v,{color:"teal",pointing:"left"},{default:i(()=>[a("1")]),_:1})]),_:1}),e(s,null,{default:i(()=>[a(" Spam "),e(v,null,{default:i(()=>[a("51")]),_:1})]),_:1}),e(s,null,{default:i(()=>[a(" Updates "),e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:t.paginationCode},{default:i(()=>[e(u,{pagination:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("1")]),_:1}),e(s,{disabled:""},{default:i(()=>[a("...")]),_:1}),e(s,null,{default:i(()=>[a("10")]),_:1}),e(s,null,{default:i(()=>[a("11")]),_:1}),e(s,null,{default:i(()=>[a("12")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:t.headerCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{header:""},{default:i(()=>[a("Our Company")]),_:1}),e(s,null,{default:i(()=>[a("About us")]),_:1}),e(s,null,{default:i(()=>[a("Jobs")]),_:1}),e(s,null,{default:i(()=>[a("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:t.textContentCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,null,{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Promotions")]),_:1}),Ov]),_:1}),e(s,null,{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Coupons")]),_:1}),Hv]),_:1}),e(s,null,{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Rebates")]),_:1}),jv]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Input",description:"A menu item can contain an input inside of it",code:t.inputCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{as:"div"},{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(s,{position:"right",as:"div"},{default:i(()=>[e(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Button",description:"A menu item can contain a button inside of it",code:t.buttonCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{as:"div"},{default:i(()=>[e(r,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1}),e(s,{as:"div"},{default:i(()=>[e(r,null,{default:i(()=>[a("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:t.linkItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,{href:"https://google.com"},{default:i(()=>[a("Visit Google")]),_:1}),e(s,{link:"",as:"div"},{default:i(()=>[a("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:t.dropdownItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e($,{item:"",text:"Categories"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,{text:"Electoronics"}),e(y,{text:"Automotive"}),e(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:t.menuContentCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Browse")]),_:1}),e(s,null,{default:i(()=>[a("Submit")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(s,null,{default:i(()=>[a("Sign up")]),_:1}),e(s,null,{default:i(()=>[a("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:t.subMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(s,{as:"div"},{default:i(()=>[e(c,{placeholder:"Search..."})]),_:1}),e(s,{as:"div"},{default:i(()=>[a(" Home "),e(h,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Search")]),_:1}),e(s,null,{default:i(()=>[a("Add")]),_:1}),e(s,null,{default:i(()=>[a("Remove")]),_:1})]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"grid layout"}),a(" Browse ")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e($,{item:"",text:"More"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,{icon:"edit",text:"Edit Profile"}),e(y,{icon:"globe",text:"Choose Language"}),e(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hover",description:"A menu item can be hovered",code:t.hoverCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(s,null,{default:i(()=>[a("A link")]),_:1}),e(s,{as:"div",link:""},{default:i(()=>[a("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Active",description:"A menu item can be active",code:t.activeCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:t.stackableCode},{default:i(()=>[e(u,{stackable:""},{default:i(()=>[e(s,{as:"div"},{default:i(()=>[qv]),_:1}),e(s,null,{default:i(()=>[a("Features")]),_:1}),e(s,null,{default:i(()=>[a("Testimonials")]),_:1}),e(s,null,{default:i(()=>[a("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:t.invertedCode},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(s,null,{default:i(()=>[a("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"Additional colors can be specified",code:t.coloredCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{active:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(s,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(s,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(s,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(s,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(s,{color:"teal"},{default:i(()=>[a("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icons",description:"A menu may have just icons",code:t.iconsCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(s,null,{default:i(()=>[e(b,{name:"gamepad"})]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video camera"})]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:t.labeledIconCode},{default:i(()=>[e(u,{icon:"labeled"},{default:i(()=>[e(s,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",vertical:""},{default:i(()=>[e(s,null,{default:i(()=>[a("Run")]),_:1}),e(s,null,{default:i(()=>[a("Walk")]),_:1}),e(s,null,{default:i(()=>[a("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(s,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(s,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:t.evenlyDividedCode},{default:i(()=>[e(u,{fluid:"",widths:3},{default:i(()=>[e(s,null,{default:i(()=>[a("Buy")]),_:1}),e(s,null,{default:i(()=>[a("Sell")]),_:1}),e(s,null,{default:i(()=>[a("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A menu may be attached to other content segments",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"top",tabular:""},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("tab1")]),_:1}),e(s,null,{default:i(()=>[a("tab2")]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[a(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A menu can vary in size",code:t.sizeCode},{default:i(()=>[e(u,{size:"mini"},{default:i(()=>[e(s,{active:""},{default:i(()=>[a("Home")]),_:1}),e(s,null,{default:i(()=>[a("Messages")]),_:1}),e(h,{position:"right"},{default:i(()=>[e($,{item:"",text:"Language"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[a("English")]),_:1}),e(y,null,{default:i(()=>[a("Russian")]),_:1}),e(y,null,{default:i(()=>[a("Spanish")]),_:1})]),_:1})]),_:1}),e(s,{as:"div"},{default:i(()=>[e(r,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{fitted:""},{default:i(()=>[a("No padding whatsoever")]),_:1}),e(s,{fitted:"horizontally"},{default:i(()=>[a("No horizontal padding")]),_:1}),e(s,{fitted:"vertically"},{default:i(()=>[a("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:t.borderlessCode},{default:i(()=>[e(u,{borderless:""},{default:i(()=>[e(s,null,{default:i(()=>[a("1")]),_:1}),e(s,null,{default:i(()=>[a("2")]),_:1}),e(s,null,{default:i(()=>[a("3")]),_:1}),e(s,null,{default:i(()=>[a("4")]),_:1}),e(s,null,{default:i(()=>[a("5")]),_:1}),e(s,null,{default:i(()=>[a("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Jv=pe(Lv,[["render",Uv]]),Gv=B({name:"MessageDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),Yv=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),Wv=C("p",null,"Get the best news in your e-mail every day.",-1),Kv=C("p",null,"You can't see me",-1),Qv=C("p",null,"You can always see me",-1),Xv=C("p",null,"Way to go!",-1),Zv=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),e1=C("a",{href:"#"},"Login here",-1),t1=C("p",null,[a("Go to your "),C("b",null,"special offers"),a(" page to see now.")],-1),i1=C("p",null,"That offer has expired",-1);function l1(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-message-header"),u=_("sui-message"),g=_("doc-example"),c=_("sui-message-item"),h=_("sui-message-list"),v=_("sui-icon"),r=_("sui-message-content"),y=_("sui-form-field"),A=_("sui-form-group"),$=_("sui-button"),b=_("sui-form"),w=_("sui-container");return te(),re("div",null,[e(p,{title:"Message",sub:"A message displays information that explains nearby content"}),e(w,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Message",description:"A basic message",code:t.messageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Changes in Service")]),_:1}),Yv]),_:1})]),_:1},8,["code"]),e(g,{title:"List Message",description:"A message with a list",code:t.listMessageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("New Site Features")]),_:1}),e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("You can now have cover images on blog pages")]),_:1}),e(c,null,{default:i(()=>[a("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icon Message",description:"A message can contain an icon",code:t.iconMessageCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(v,{name:"inbox"}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[a(" Have you heard about our mailing list? ")]),_:1}),Wv]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hidden",description:"A message can be hidden",code:t.hiddenCode},{default:i(()=>[e(u,{hidden:""},{default:i(()=>[Kv]),_:1})]),_:1},8,["code"]),e(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:t.visibleCode},{default:i(()=>[e(u,{visible:""},{default:i(()=>[Qv]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Floating",description:"A message can float above content that it is related to",code:t.floatingCode},{default:i(()=>[e(u,{floating:""},{default:i(()=>[Xv]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A message can only take up the width of its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[Zv]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(b,{class:"attached fluid segment"},{default:i(()=>[e(A,{widths:"equal"},{default:i(()=>[e(y,{label:"First Name",placeholder:"First Name"}),e(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(y,{label:"Username",placeholder:"Username"}),e(y,{label:"Password",placeholder:"Password"}),e($,{color:"primary"},{default:i(()=>[a("Submit")]),_:1})]),_:1}),e(u,{attached:"bottom",warning:""},{default:i(()=>[e(v,{name:"help"}),a(" Already signed up? "),e1,a(" instead. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:t.warningCode},{default:i(()=>[e(u,{warning:""},{default:i(()=>[e(v,{name:"close"}),e(s,null,{default:i(()=>[a(" You must register before you can do that! ")]),_:1}),a(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),e(g,{title:"Info",description:"A message may be formatted to display information",code:t.infoCode},{default:i(()=>[e(u,{info:""},{default:i(()=>[e(s,null,{default:i(()=>[a("Was this what you wanted?")]),_:1}),e(h,null,{default:i(()=>[a("It's good to see you again.")]),_:1}),e(h,null,{default:i(()=>[a("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:t.positiveSuccessCode},{default:i(()=>[e(u,{positive:""},{default:i(()=>[e(s,null,{default:i(()=>[a("You are eligible for a reward")]),_:1}),t1]),_:1})]),_:1},8,["code"]),e(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:t.negativeErrorCode},{default:i(()=>[e(u,{negative:""},{default:i(()=>[e(v,{name:"close"}),e(s,null,{default:i(()=>[a("We're sorry we can't apply that discount")]),_:1}),i1]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"A message can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A message can have different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{size:"mini"},{default:i(()=>[a("This is a mini message.")]),_:1}),e(u,{size:"large"},{default:i(()=>[a("This is a large message.")]),_:1}),e(u,{size:"massive"},{default:i(()=>[a("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const a1=pe(Gv,[["render",l1]]),n1=B({name:"TableDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),s1=C("a",{href:"#"},"Edit",-1),o1=C("a",{href:"#"},"Edit",-1),u1=C("a",{href:"#"},"Edit",-1),r1=C("br",null,null,-1),d1=C("br",null,null,-1),c1=C("br",null,null,-1),m1=C("br",null,null,-1),f1=C("br",null,null,-1),p1=C("br",null,null,-1),g1=C("br",null,null,-1);function h1(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-table-header-cell"),u=_("sui-table-row"),g=_("sui-table-header"),c=_("sui-table-cell"),h=_("sui-table-body"),v=_("sui-table"),r=_("doc-example"),y=_("sui-icon"),A=_("sui-table-footer"),$=_("sui-container");return te(),re("div",null,[e(p,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e($,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Table",description:"A standard table",code:t.tableCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Age")]),_:1}),e(s,null,{default:i(()=>[a("Job")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("James")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("26")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Elyse")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:t.definitionCode},{default:i(()=>[e(v,{definition:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s),e(s,null,{default:i(()=>[a("Arguments")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("reset rating")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1}),e(c,null,{default:i(()=>[a("Resets rating to default value")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("set rating")]),_:1}),e(c,null,{default:i(()=>[a("rating (integer)")]),_:1}),e(c,null,{default:i(()=>[a("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Structured",description:"A table can be formatted to display complex structured data",code:t.structuredCode},{default:i(()=>[e(v,{structured:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{rowspan:"2"},{default:i(()=>[a("Name")]),_:1}),e(s,{rowspan:"2"},{default:i(()=>[a("Type")]),_:1}),e(s,{rowspan:"2"},{default:i(()=>[a("Files")]),_:1}),e(s,{colspan:"3"},{default:i(()=>[a("Languages")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Ruby")]),_:1}),e(s,null,{default:i(()=>[a("Javascript")]),_:1}),e(s,null,{default:i(()=>[a("Python")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Alpha Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("2")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,{rowspan:"3"},{default:i(()=>[a("Beta Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("52")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 2")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("12")]),_:1}),e(c),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 3")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("21")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(r,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:t.positiveNegativeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{negative:""},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{positive:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"checkmark"}),a(" Approved ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{positive:""},{default:i(()=>[e(y,{name:"close"}),a(" Requires call ")]),_:1})]),_:1}),e(u,{negative:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:t.errorCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{error:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Cannot pull data")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{error:""},{default:i(()=>[e(y,{name:"attention"}),a(" Requires call ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Warning",description:"A cell or row may warn a user",code:t.warningCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"attention"}),a(" Requires Action ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{warning:""},{default:i(()=>[e(y,{name:"attention"}),a(" Hostile ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Active",description:"A cell or row can be active or selected by a user",code:t.activeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{active:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{active:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Disabled",description:"A cell can be disabled",code:t.disabledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{disabled:""},{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{disabled:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:t.coloredCellsCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{color:"orange"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{color:"blue"},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"pink"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"green"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:t.markedCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{marked:"right",color:"blue"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,{marked:"left",color:"red"},{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{marked:"left",color:"green"},{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"left",color:"orange"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"right",color:"purple"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:t.singleLineCode},{default:i(()=>[e(v,{"single-line":""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Registration Date")]),_:1}),e(s,null,{default:i(()=>[a("E-mail address")]),_:1}),e(s,null,{default:i(()=>[a("Premium Plan")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:t.fixedCode},{default:i(()=>[e(v,{fixed:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:t.stackingCode},{default:i(()=>[e(v,{stackable:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:t.selectableRowCode},{default:i(()=>[e(v,{selectable:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Selectable Cell",description:"A table cell can be selectable",code:t.selectableCellCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[s1]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[o1]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,{selectable:""},{default:i(()=>[u1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:t.verticalAlignmentCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{verticalAlign:"top"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{verticalAlign:"top"},{default:i(()=>[a(" Notes "),r1,a(" 1"),d1,a(" 2"),c1]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{verticalAlign:"bottom"},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a(" Notes "),m1,a(" 1"),f1,a(" 2"),p1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:t.textAlignCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,{textAlign:"right"},{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:t.stripedCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Date Joined")]),_:1}),e(s,null,{default:i(()=>[a("E-mail")]),_:1}),e(s,null,{default:i(()=>[a("Called")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Celled",description:"A table may be divided each row into separate cells",code:t.celledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("3 People")]),_:1}),e(c,null,{default:i(()=>[a("2 Approved")]),_:1}),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:t.basicCode},{default:i(()=>[C("div",null,[e(v,{basic:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1}),g1,e(v,{basic:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:t.collapsingCode},{default:i(()=>[e(v,{collapsing:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Age")]),_:1}),e(s,null,{default:i(()=>[a("Gender")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("3 People")]),_:1}),e(s,null,{default:i(()=>[a("2 Approved")]),_:1}),e(s),e(s),e(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:t.collapsingCellCode},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:t.columnCountCode},{default:i(()=>[e(v,{columns:5},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Age")]),_:1}),e(s,null,{default:i(()=>[a("Gender")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("3 People")]),_:1}),e(s,null,{default:i(()=>[a("2 Approved")]),_:1}),e(s),e(s),e(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Column Width",description:"Column Width",code:t.columnWidthCode},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,{width:10},{default:i(()=>[a("Name")]),_:1}),e(s,{width:6},{default:i(()=>[a("Status")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:t.coloredCode},{default:i(()=>[e(v,{color:"red"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Food")]),_:1}),e(s,null,{default:i(()=>[a("Calories")]),_:1}),e(s,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A table's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Food")]),_:1}),e(s,null,{default:i(()=>[a("Calories")]),_:1}),e(s,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:t.paddedCode},{default:i(()=>[C("div",null,[e(v,{padded:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{padded:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:t.compactCode},{default:i(()=>[C("div",null,[e(v,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{compact:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(r,{title:"Size",description:"A table can also be small or large",code:t.sizeCode},{default:i(()=>[e(v,{size:"small"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(s,null,{default:i(()=>[a("Name")]),_:1}),e(s,null,{default:i(()=>[a("Status")]),_:1}),e(s,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _1=pe(n1,[["render",h1]]),b1=B({name:"AdvertisementDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),v1=C("img",{src:G},null,-1),y1=C("br",null,null,-1);function C1(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-advertisement"),u=_("doc-example"),g=_("sui-container");return te(),re("div",null,[e(p,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(g,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Ad",description:"A standard ad",code:t.adCode},{default:i(()=>[e(s,{unit:"medium rectangle"},{default:i(()=>[v1]),_:1})]),_:1},8,["code"]),e(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:t.commonUnitsCode},{default:i(()=>[C("div",null,[e(s,{unit:"medium rectangle",test:"Medium Rectangle"}),e(s,{unit:"banner",test:"Banner"}),e(s,{unit:"leaderboard",test:"Leaderboard"}),e(s,{unit:"large rectangle",test:"Large Rectangle"}),e(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:t.mobileCode},{default:i(()=>[C("div",null,[e(s,{unit:"mobile banner",test:"Mobile Banner"}),e(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:t.rectangleCode},{default:i(()=>[e(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(u,{title:"Button",description:"An ad can use button ad unit size",code:t.buttonCode},{default:i(()=>[C("div",null,[e(s,{unit:"button",test:"Button"}),e(s,{unit:"square button",test:"Square Button"}),e(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:t.skyscraperCode},{default:i(()=>[C("div",null,[e(s,{unit:"skyscraper",test:"Skyscraper"}),y1,e(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(u,{title:"Banner",description:"An ad can use banner ad unit size",code:t.bannerCode},{default:i(()=>[C("div",null,[e(s,{unit:"banner",test:"Banner"}),e(s,{unit:"vertical banner",test:"Vertical Banner"}),e(s,{unit:"top banner",test:"Top Banner"}),e(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:t.leaderboardCode},{default:i(()=>[C("div",null,[e(s,{unit:"leaderboard",test:"Leaderboard"}),e(s,{unit:"large leaderboard",test:"Large Leaderboard"}),e(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:t.panoramaCode},{default:i(()=>[e(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:t.netboardCode},{default:i(()=>[e(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Centered",description:"An advertisement can appear centered",code:t.centeredCode},{default:i(()=>[e(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:t.testCode},{default:i(()=>[e(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const w1=pe(b1,[["render",C1]]),$o="/vue-fomantic-ui/images/avatar/large/kristy.png",A1="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Ja="/vue-fomantic-ui/images/avatar/large/helen.jpg",Ga="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Ya="/vue-fomantic-ui/images/avatar/large/elyse.png",S1="/vue-fomantic-ui/images/avatar/large/matthew.png",k1="/vue-fomantic-ui/images/avatar/large/molly.png",To="/vue-fomantic-ui/images/avatar/large/jenny.jpg",xo="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Eo="/vue-fomantic-ui/images/avatar/large/steve.jpg",$1=B({name:"CardDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),T1=C("span",{class:"date"},"Joined in 2013",-1),x1=C("a",null,"Elliot Fu",-1),E1=C("a",null,"Jenny Hess",-1),B1=C("a",null,"Stevie Feliciano",-1),R1=C("a",null,"Administrator",-1),P1=C("a",null,"Helen Troy",-1),z1=C("span",{class:"date"},"Joined in 2013",-1),M1=C("span",null,"2 days ago",-1),D1=C("a",null,"Animals",-1),F1=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),I1=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),N1=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),V1=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),L1=C("span",{class:"category"},"Animals",-1),O1=C("span",{class:"category"},"Animals",-1),H1=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:Ba}),a(" Matt ")],-1),j1=C("span",{class:"category"},"Animals",-1),q1=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:Ba}),a(" Matt ")],-1),U1=C("p",null,"Jenny is a student studying Media Management at the New School",-1),J1=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:Ea}),a(" Jenny ")],-1),G1=C("a",null,"Friends",-1),Y1=C("span",{class:"right floated"}," Joined in 2013 ",-1),W1=C("a",null,[C("i",{class:"user icon"}),a(" 75 Friends ")],-1),K1=C("a",null,"Coworker",-1),Q1=C("span",{class:"right floated"}," Joined in 2011 ",-1),X1=C("a",null,[C("i",{class:"user icon"}),a(" 35 Friends ")],-1),Z1=C("a",null,"Coworker",-1),ey=C("span",{class:"right floated"}," Joined in 2014 ",-1),ty=C("a",null,[C("i",{class:"user icon"}),a(" 151 Friends ")],-1);function iy(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-image"),u=_("sui-card-header"),g=_("sui-card-meta"),c=_("sui-card-description"),h=_("sui-card-content"),v=_("sui-icon"),r=_("sui-card"),y=_("doc-example"),A=_("sui-button"),$=_("sui-button-group"),b=_("sui-card-group"),w=_("sui-feed-summary"),k=_("sui-feed-content"),T=_("sui-feed-event"),E=_("sui-feed"),z=_("sui-grid-column"),M=_("sui-grid"),P=_("sui-segment"),I=_("sui-container");return te(),re("div",null,[e(p,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(I,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Card",description:"A single card",code:t.cardCode},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:$o,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[T1]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Cards",description:"A group of cards",code:t.cardsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(s,{src:Tt,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friends of Veronika")]),_:1}),e(c,null,{default:i(()=>[a("Elliot requested permission to view your contact details")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e($,{widths:2},{default:i(()=>[e(A,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(A,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(s,{src:Ea,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("New Member")]),_:1}),e(c,null,{default:i(()=>[a("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e($,{widths:2},{default:i(()=>[e(A,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(A,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Content Block",description:"A card can contain blocks of content",code:t.contentBlockCode},{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Project Timeline")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(f,{sub:""},{default:i(()=>[a("Activity")]),_:1}),e(E,{size:"small"},{default:i(()=>[e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[x1,a(" added "),E1,a(" to the project ")]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[B1,a(" was added as an "),R1]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[P1,a(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(A,{as:"button"},{default:i(()=>[a("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A card can contain an image",code:t.imageCode},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:$o,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[z1]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Header",description:"A card can contain a header",code:t.headerCode},{default:i(()=>[e(b,null,{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Metadata",description:"A card can contain content metadata",code:t.metadataCode},{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[M1,D1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Buttons",description:"A card can contain buttons",code:t.buttonsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),e(A,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),e(A,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:t.descriptionCode},{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[F1,I1]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[N1,V1]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(v,{name:"check"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:t.fluidCardCode},{default:i(()=>[e(M,{columns:3},{default:i(()=>[e(z,null,{default:i(()=>[e(r,{fluid:""},{default:i(()=>[e(s,{src:A1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(r,{fluid:""},{default:i(()=>[e(s,{src:Ja}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(r,{fluid:""},{default:i(()=>[e(s,{src:Ga}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Centered Card",description:"A card can center itself inside its container",code:t.centeredCardCode},{default:i(()=>[e(r,{centered:""},{default:i(()=>[e(s,{src:Ya}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:t.horizontalCardsCode},{default:i(()=>[e(r,{horizontal:""},{default:i(()=>[e(s,{src:Ya}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[L1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(r,{raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[O1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[H1]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:t.linkCardCode},{default:i(()=>[e(r,{href:"#",raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[j1]),_:1}),e(c,null,{default:i(()=>[e(s,{src:ge})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[q1]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:t.textAlignCode},{default:i(()=>[e(r,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[U1]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[J1]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"Card's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(P,{inverted:""},{default:i(()=>[e(b,{inverted:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:S1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Matt Giampietro")]),_:1}),e(g,null,{default:i(()=>[G1]),_:1}),e(c,null,{default:i(()=>[a(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[Y1,W1]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:k1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Molly")]),_:1}),e(g,null,{default:i(()=>[K1]),_:1}),e(c,null,{default:i(()=>[a(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[Q1,X1]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Ya}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1}),e(g,null,{default:i(()=>[Z1]),_:1}),e(c,null,{default:i(()=>[a(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[ey,ty]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored",description:"A card can specify a color",code:t.coloredCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(r,{color:"primary",href:"#"},{default:i(()=>[e(s,{src:Qi})]),_:1}),e(r,{color:"secondary",href:"#"},{default:i(()=>[e(s,{src:Qi})]),_:1}),e(r,{color:"red",href:"#"},{default:i(()=>[e(s,{src:Qi})]),_:1}),e(r,{color:"orange",href:"#"},{default:i(()=>[e(s,{src:Qi})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:t.columnCountCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:G})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(b,{itemsPerRow:3,stackable:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:Ga})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Ja})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:To})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:xo})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Sn})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Eo})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:t.doublingCode},{default:i(()=>[e(b,{itemsPerRow:6,doubling:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:Ga})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Ja})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:To})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:xo})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Sn})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:Eo})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ly=pe($1,[["render",iy]]),ay=B({name:"CommentDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),ny=C("span",null,"Today at 5:42PM",-1),sy=C("a",null,"Reply",-1),oy=C("span",null,"Yesterday at 12:30AM",-1),uy=C("a",null,"Reply",-1),ry={class:"comments"},dy=C("span",null,"Just now",-1),cy=C("a",null,"Reply",-1),my=C("span",null,"5 days ago",-1),fy=C("a",null,"Reply",-1),py=C("div",{class:"date"},"2 days ago",-1),gy=C("div",{class:"rating"},[C("i",{class:"star icon"}),a(" 5 Faves ")],-1),hy=C("a",null,"Reply",-1),_y=C("a",null,"Save",-1),by=C("a",null,"Hide",-1),vy=C("a",null,[C("i",{class:"expand icon"}),a(" Full-screen ")],-1),yy=C("a",null,"Reply",-1),Cy=C("a",null,"Reply",-1),wy=C("a",null,"Replay",-1),Ay=C("span",null,"Today at 5:42PM",-1),Sy=C("a",{href:"#"},"Replay",-1),ky=C("span",null,"Yesterday at 12:30AM",-1),$y=C("a",{href:"#"},"Replay",-1),Ty=C("span",null,"Just now",-1),xy=C("a",{href:"#"},"Replay",-1),Ey=C("span",null,"5 days ago",-1),By=C("a",{href:"#"},"Replay",-1),Ry=C("span",null,"Today at 5:42PM",-1),Py=C("a",{href:"#"},"Replay",-1),zy=C("span",null,"Yesterday at 12:30AM",-1),My=C("a",{href:"#"},"Replay",-1),Dy=C("span",null,"Just now",-1),Fy=C("a",{href:"#"},"Replay",-1),Iy=C("span",null,"5 days ago",-1),Ny=C("a",{href:"#"},"Replay",-1),Vy=C("span",null,"Today at 5:42PM",-1),Ly=C("a",{href:"#"},"Replay",-1),Oy=C("span",null,"Yesterday at 12:30AM",-1),Hy=C("a",{href:"#"},"Replay",-1),jy=C("span",null,"Just now",-1),qy=C("a",{href:"#"},"Replay",-1),Uy=C("span",null,"5 days ago",-1),Jy=C("a",{href:"#"},"Replay",-1),Gy=C("span",null,"Today at 5:42PM",-1),Yy=C("a",{href:"#"},"Replay",-1),Wy=C("span",null,"Yesterday at 12:30AM",-1),Ky=C("a",{href:"#"},"Replay",-1),Qy=C("span",null,"Just now",-1),Xy=C("a",{href:"#"},"Replay",-1),Zy=C("span",null,"5 days ago",-1),eC=C("a",{href:"#"},"Replay",-1);function tC(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-comment-avatar"),u=_("sui-comment-author"),g=_("sui-comment-metadata"),c=_("sui-comment-text"),h=_("sui-comment-actions"),v=_("sui-comment-content"),r=_("sui-comment"),y=_("sui-comment-group"),A=_("doc-example"),$=_("sui-form-textarea"),b=_("sui-icon"),w=_("sui-button"),k=_("sui-form"),T=_("sui-segment"),E=_("sui-container");return te(),re("div",null,[e(p,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(E,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Comments",description:"A basic list of comments",code:t.commentsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[ny]),_:1}),e(c,null,{default:i(()=>[a("How artistic!")]),_:1}),e(h,null,{default:i(()=>[sy]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[oy]),_:1}),e(c,null,{default:i(()=>[a("This has been very useful for my research. Thanks as well!")]),_:1}),e(h,null,{default:i(()=>[uy]),_:1})]),_:1}),C("div",ry,[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[dy]),_:1}),e(c,null,{default:i(()=>[a("Elliot you are always so right :)")]),_:1}),e(h,null,{default:i(()=>[cy]),_:1})]),_:1})]),_:1})])]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[my]),_:1}),e(c,null,{default:i(()=>[a("Dude, this is awesome. Thanks so much")]),_:1}),e(h,null,{default:i(()=>[fy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"avatar",description:"A comment can contain an image or avatar",code:t.avatarCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/stevie.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(g,null,{default:i(()=>[py,gy]),_:1}),e(c,null,{default:i(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:t.actionsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Tom Lukic")]),_:1}),e(c,null,{default:i(()=>[a(" This will be great for business reports. I will definitely download this. ")]),_:1}),e(h,null,{default:i(()=>[hy,_y,by,vy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:t.replyFormCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/steve.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Steve Jobs")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a("Revolutionary!")]),_:1}),e(h,null,{default:i(()=>[yy]),_:1}),e(k,{reply:""},{default:i(()=>[e($),e(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[e(b,{name:"edit"}),a(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:t.collapsedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/christian.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Christian Rocha")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),e(h,null,{default:i(()=>[Cy]),_:1})]),_:1}),e(y,{collapsed:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("1 days ago")]),_:1}),e(c,null,{default:i(()=>[a("No, it wont")]),_:1}),e(h,null,{default:i(()=>[wy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:t.threadedCode},{default:i(()=>[e(y,{threaded:""},{default:i(()=>[e(f,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Ay]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Sy]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[ky]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[$y]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Ty]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[xy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Ey]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[By]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:t.minimalCode},{default:i(()=>[e(y,{minimal:""},{default:i(()=>[e(f,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Ry]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Py]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[zy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[My]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Dy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Fy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Iy]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[Ny]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"Comments can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"small"},{default:i(()=>[e(f,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Vy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Ly]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Oy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Hy]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[jy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[qy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Uy]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[Jy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"Comments's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(f,{as:"h3",inverted:"",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Gy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Yy]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Wy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Ky]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Qy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Xy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Zy]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[eC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iC=pe(ay,[["render",tC]]),lC=B({name:"FeedDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),aC=C("img",{src:Tt},null,-1),nC=C("img",{src:Tt},null,-1),sC=C("a",null,"Coworkers",-1),oC=C("img",{src:Ea},null,-1),uC=C("a",null,"Jenny Hess",-1),rC=C("a",null,"coworker",-1),dC=C("img",{src:Xi},null,-1),cC=C("a",null,"Helen Troy",-1),mC=C("a",null,[C("img",{src:G})],-1),fC=C("a",null,[C("img",{src:G})],-1),pC=C("a",null,"Elliot Fu",-1),gC=C("a",null,"Jenny Hess",-1),hC=C("a",null,"Stevie Feliciano",-1),_C=C("a",null,"Elliot Fu",-1),bC=C("a",null,"Helen Troy",-1),vC=C("a",null,"Christian Rocha",-1),yC=C("img",{src:Tt},null,-1),CC=C("div",{class:"date"},"Just now",-1),wC=C("a",{class:"user"},"Elliot Fu",-1);function AC(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-feed-label"),u=_("sui-feed-user"),g=_("sui-feed-date"),c=_("sui-feed-summary"),h=_("sui-icon"),v=_("sui-feed-like"),r=_("sui-feed-meta"),y=_("sui-feed-content"),A=_("sui-feed-event"),$=_("sui-feed"),b=_("doc-example"),w=_("sui-feed-extra"),k=_("sui-segment"),T=_("sui-container");return te(),re("div",null,[e(p,{title:"Feed",sub:"A feed presents user activity chronologically"}),e(T,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Feed",description:"A feed",code:t.feedCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[aC]),_:1}),e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),a(" added you as a friend "),e(g,null,{default:i(()=>[a("1 Hour Ago")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,{name:"like"}),a(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(b,{title:"Label",description:"An event can contain an image or icon label",code:t.labelCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[nC]),_:1}),e(y,null,{default:i(()=>[a(" You added Elliot Fu to the group "),sC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Date",description:"An event or an event summary can contain a date",code:t.dateCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[oC]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[a(" You added "),uC,a(" to your "),rC,a(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:t.additionalInfoCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[dC]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[cC,a(" added 2 photos ")]),_:1}),e(w,{images:""},{default:i(()=>[mC,fC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Size",description:"A feed can have different sizes",code:t.sizeCode},{default:i(()=>[e($,{size:"small"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Followers Activity")]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[pC,a(" added "),gC,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[hC,a(" added "),_C,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[bC,a(" added "),vC,a(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Inverted",description:"A feed's color can be inverted",code:t.invertedCode},{default:i(()=>[e(k,{inverted:""},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(A,null,{default:i(()=>[e(s,null,{default:i(()=>[yC]),_:1}),e(y,null,{default:i(()=>[CC,e(c,null,{default:i(()=>[wC,a(" posted on his page ")]),_:1}),e(w,{text:""},{default:i(()=>[a(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const SC=pe(lC,[["render",AC]]),kC=B({name:"ItemDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),$C=C("img",{src:G},null,-1),TC=C("span",null,"Description",-1),xC=C("img",{src:Ce},null,-1),EC=C("img",{src:G},null,-1),BC=C("span",null,"Description",-1),RC=C("img",{src:Ce},null,-1),PC=C("img",{src:G},null,-1),zC=C("img",{src:G},null,-1),MC=C("img",{src:G},null,-1),DC=C("img",{src:G},null,-1),FC=C("img",{src:G},null,-1),IC=C("img",{src:G},null,-1),NC=C("img",{src:G},null,-1),VC=C("span",{class:"price"},"$1200",-1),LC=C("span",{class:"stay"},"1 Month",-1),OC=C("img",{src:Ce},null,-1),HC=C("span",{class:"price"},"$1000",-1),jC=C("span",{class:"stay"},"2 Weeks",-1),qC=C("img",{src:Ce},null,-1),UC=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),JC=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),GC=C("img",{src:Ce},null,-1),YC=C("img",{src:G},null,-1),WC=C("span",{class:"cinema"},"Union Square 14",-1),KC=C("img",{src:Ce},null,-1),QC=C("img",{src:G},null,-1),XC=C("span",{class:"cinema"},"IFC Cinema",-1),ZC=C("img",{src:Ce},null,-1),ew=C("img",{src:G},null,-1),tw=C("span",{class:"cinema"},"IFC",-1),iw=C("img",{src:Ce},null,-1),lw=C("img",{src:Ce},null,-1),aw=C("img",{src:Ce},null,-1),nw=C("img",{src:Ce},null,-1),sw=C("span",{class:"price"},"$1200",-1),ow=C("span",{class:"stay"},"1 Month",-1),uw=C("img",{src:Ce},null,-1),rw=C("span",{class:"price"},"$1000",-1),dw=C("span",{class:"stay"},"2 Weeks",-1),cw=C("img",{src:Ce},null,-1);function mw(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-item-image"),u=_("sui-item-header"),g=_("sui-item-meta"),c=_("sui-item-description"),h=_("sui-item-extra"),v=_("sui-item-content"),r=_("sui-item"),y=_("sui-item-group"),A=_("doc-example"),$=_("sui-image"),b=_("sui-icon"),w=_("sui-label"),k=_("sui-button"),T=_("sui-segment"),E=_("sui-container");return te(),re("div",null,[e(p,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(E,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Items",description:"A group of items",code:t.itemsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[$C]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[TC]),_:1}),e(c,null,{default:i(()=>[xC]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[EC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[BC]),_:1}),e(c,null,{default:i(()=>[RC]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Image",description:"An item can contain an image",code:t.imageCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[PC]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[zC]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[MC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Content",description:"An item can contain content",code:t.contentCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[DC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content A ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[FC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content B ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[IC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Header",description:"An item can contain a header",code:t.headerCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[NC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Metadata",description:"An item can contain content metadata",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[VC,LC]),_:1}),e(c,null,{default:i(()=>[OC]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[HC,jC]),_:1}),e(c,null,{default:i(()=>[qC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[UC,JC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[GC]),_:1}),e(h,null,{default:i(()=>[e(b,{name:"check",color:"green"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:t.dividedCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[YC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1}),e(g,null,{default:i(()=>[WC]),_:1}),e(c,null,{default:i(()=>[KC]),_:1}),e(h,null,{default:i(()=>[e(w,null,{default:i(()=>[a("IMAX")]),_:1}),e(w,null,{default:i(()=>[e(b,{name:"globe"}),a(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[QC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(g,null,{default:i(()=>[XC]),_:1}),e(c,null,{default:i(()=>[ZC]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1}),e(w,null,{default:i(()=>[a("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(s,null,{default:i(()=>[ew]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Watchmen")]),_:1}),e(g,null,{default:i(()=>[tw]),_:1}),e(c,null,{default:i(()=>[iw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:t.relaxedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:t.verticalAlignCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Top Aligned")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Middle Aligned")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"bottom"},{default:i(()=>[e(u,null,{default:i(()=>[a("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:t.floatedContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content A")]),_:1}),e(c,null,{default:i(()=>[lw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content B")]),_:1}),e(c,null,{default:i(()=>[aw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content C")]),_:1}),e(c,null,{default:i(()=>[nw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:t.invertedCode},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[sw,ow]),_:1}),e(c,null,{default:i(()=>[uw]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[rw,dw]),_:1}),e(c,null,{default:i(()=>[cw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const fw=pe(kC,[["render",mw]]),pw=B({name:"StatisticDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),gw=C("br",null,null,-1),hw=C("br",null,null,-1),_w=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),bw=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),vw=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),yw=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function Cw(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-statistic"),u=_("doc-example"),g=_("sui-statistic-group"),c=_("sui-statistic-value"),h=_("sui-statistic-label"),v=_("sui-icon"),r=_("sui-image"),y=_("sui-segment"),A=_("sui-container");return te(),re("div",null,[e(p,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(A,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:t.statisticCode},{default:i(()=>[e(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(u,{title:"Statistic Group",description:"A group of statistics",code:t.groupCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{value:"22",label:"Faves"}),e(s,{value:"31,200",label:"Views"}),e(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:t.valueCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{value:"22",label:"Faves"}),e(s,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),gw,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(r,{circular:"",inline:"",src:An}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:t.labelCode},{default:i(()=>[e(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:t.horizontalCode},{default:i(()=>[e(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{color:"red",value:"27",label:"Red"}),e(s,{color:"orange",value:"8",label:"Orange"}),e(s,{color:"yellow",value:"28",label:"Yellow"}),e(s,{color:"olive",value:"7",label:"Olive"}),e(s,{color:"green",value:"14",label:"Green"}),e(s,{color:"teal",value:"82",label:"Teal"}),e(s,{color:"blue",value:"1",label:"Blue"}),e(s,{color:"violet",value:"22",label:"Violet"}),e(s,{color:"purple",value:"23",label:"Purple"}),e(s,{color:"pink",value:"15",label:"Pink"}),e(s,{color:"brown",value:"36",label:"Brown"}),e(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:t.invertedCode},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{color:"red",value:"27",label:"Red"}),e(s,{color:"orange",value:"8",label:"Orange"}),e(s,{color:"yellow",value:"28",label:"Yellow"}),e(s,{color:"olive",value:"7",label:"Olive"}),e(s,{color:"green",value:"14",label:"Green"}),e(s,{color:"teal",value:"82",label:"Teal"}),e(s,{color:"blue",value:"1",label:"Blue"}),e(s,{color:"violet",value:"22",label:"Violet"}),e(s,{color:"purple",value:"23",label:"Purple"}),e(s,{color:"pink",value:"15",label:"Pink"}),e(s,{color:"brown",value:"36",label:"Brown"}),e(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(g,{stackable:""},{default:i(()=>[e(s,{color:"red",value:"27",label:"Red"}),e(s,{color:"orange",value:"8",label:"Orange"}),e(s,{color:"yellow",value:"28",label:"Yellow"}),e(s,{color:"olive",value:"7",label:"Olive"}),e(s,{color:"green",value:"14",label:"Green"}),e(s,{color:"teal",value:"82",label:"Teal"}),e(s,{color:"blue",value:"1",label:"Blue"}),e(s,{color:"violet",value:"22",label:"Violet"}),e(s,{color:"purple",value:"23",label:"Purple"}),e(s,{color:"pink",value:"15",label:"Pink"}),e(s,{color:"brown",value:"36",label:"Brown"}),e(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:t.evenlyDividedCode},{default:i(()=>[e(g,{widths:4},{default:i(()=>[e(s,{value:"22",label:"Faves"}),e(s,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),hw,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(s,null,{default:i(()=>[e(c,null,{default:i(()=>[e(r,{circular:"",inline:"",src:An}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(s,{floated:"right",value:"2,204",label:"Views"}),_w,bw,e(s,{floated:"left",value:"2,204",label:"Views"}),vw,yw]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A statistic can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{size:"mini",value:"2,204",label:"Views"}),e(s,{size:"tiny",value:"2,204",label:"Views"}),e(s,{size:"small",value:"2,204",label:"Views"}),e(s,{value:"2,204",label:"Views"}),e(s,{size:"large",value:"2,204",label:"Views"}),e(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const ww=pe(pw,[["render",Cw]]),Aw=B({name:"AccordionDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),Sw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),kw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),$w=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Tw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),xw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Ew=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Bw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Rw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Pw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),zw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Mw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Dw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Fw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Iw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Nw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Vw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Lw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Ow=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Hw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),jw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function qw(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-accordion-tab"),u=_("sui-accordion"),g=_("doc-example"),c=_("sui-segment"),h=_("sui-container");return te(),re("div",null,[e(p,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(h,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Accordion",description:"A standard accordion",code:t.accordionCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Sw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[kw]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[$w,Tw]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:t.styledCode},{default:i(()=>[e(u,{styled:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[xw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Ew]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Bw,Rw]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",styled:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Pw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[zw]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Mw,Dw]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(c,{inverted:""},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Fw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Iw]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Nw,Vw]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Usage")]),_:1}),e(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:t.multipleCode},{default:i(()=>[e(u,{multiple:""},{default:i(()=>[e(s,{title:"What is a dog?"},{default:i(()=>[Lw]),_:1}),e(s,{title:"What kinds of dogs are there?"},{default:i(()=>[Ow]),_:1}),e(s,{title:"How do you acquire a dog?"},{default:i(()=>[Hw,jw]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Uw=pe(Aw,[["render",qw]]),Jw=B({name:"CalendarDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{calendar1:L(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function Gw(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-calendar"),u=_("doc-example"),g=_("sui-container");return te(),re("div",null,[e(p,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(g,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Calendar",description:"A standard calendar",code:t.calendarCode},{default:i(()=>[e(s,{modelValue:t.calendar1,"onUpdate:modelValue":l[0]||(l[0]=c=>t.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const Yw=pe(Jw,[["render",Gw]]),Ww=B({name:"PropertyListTable",props:{properties:Array}});function Kw(t,l,n,o,d,m){const p=_("sui-table-header-cell"),f=_("sui-table-row"),s=_("sui-table-header"),u=_("sui-table-cell"),g=_("sui-table-body"),c=_("sui-table");return te(),Je(c,{celled:""},{default:i(()=>[e(s,null,{default:i(()=>[e(f,null,{default:i(()=>[e(p,null,{default:i(()=>[a("Name")]),_:1}),e(p,null,{default:i(()=>[a("Type")]),_:1}),e(p,null,{default:i(()=>[a("Default")]),_:1}),e(p,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.properties,h=>(te(),Je(f,{key:h.name},{default:i(()=>[e(u,null,{default:i(()=>[a(Ee(h.name),1)]),_:2},1024),e(u,null,{default:i(()=>[a(Ee(h.type),1)]),_:2},1024),e(u,null,{default:i(()=>[a(Ee(h.default),1)]),_:2},1024),e(u,null,{default:i(()=>[a(Ee(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Ra=pe(Ww,[["render",Kw]]),Qw=B({name:"CheckboxDoc",components:{DocPageHeader:Ne,DocExample:ve,PropertyListTable:Ra},setup(){const t=L(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=L([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,d=L(!1),m='<sui-checkbox toggle v-model="toggle" />',p=L(!1);return{checked:t,checkboxCode:l,selected:n,multipleCode:o,toggle:d,toggleCode:m,slider:p,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),Xw={class:"ui form"},Zw={class:"grouped fields"},eA={class:"field"},tA={class:"field"},iA={class:"field"};function lA(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-checkbox"),u=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),r=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return te(),re("div",null,[e(p,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e($,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Checkbox",description:"A standard checkbox",code:t.checkboxCode},{default:i(()=>[e(s,{label:"Make my profile visible",modelValue:t.checked,"onUpdate:modelValue":l[0]||(l[0]=b=>t.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:t.multipleCode},{default:i(()=>[C("div",Xw,[C("div",Zw,[C("div",eA,[e(s,{label:"Apple",value:"Apple",modelValue:t.selected,"onUpdate:modelValue":l[1]||(l[1]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",tA,[e(s,{label:"Banana",value:"Banana",modelValue:t.selected,"onUpdate:modelValue":l[2]||(l[2]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",iA,[e(s,{label:"Chocolate",value:"Chocolate",modelValue:t.selected,"onUpdate:modelValue":l[3]||(l[3]=b=>t.selected=b)},null,8,["modelValue"])])])]),a(" selected : "+Ee(t.selected),1)]),_:1},8,["code"]),e(u,{title:"Toggle",description:"A checkbox can toggle",code:t.toggleCode},{default:i(()=>[e(s,{toggle:"",modelValue:t.toggle,"onUpdate:modelValue":l[4]||(l[4]=b=>t.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Slider",description:"A checkbox can look like a slider",code:t.sliderCode},{default:i(()=>[e(s,{slider:"",modelValue:t.slider,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,b=>(te(),Je(h,{key:b.name},{default:i(()=>[e(r,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const aA=pe(Qw,[["render",lA]]),nA=B({name:"DimmerDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){const t=`<sui-dimmer-dimmable>
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
</div>`}}});function sA(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-image"),u=_("sui-image-group"),g=_("sui-dimmer"),c=_("sui-dimmer-dimmable"),h=_("doc-example"),v=_("sui-icon"),r=_("sui-button"),y=_("sui-header-subheader"),A=_("sui-container");return te(),re("div",null,[e(p,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(A,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:t.dimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(f,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(s,{src:G}),e(s,{src:G}),e(s,{src:G})]),_:1}),e(s,{size:"medium",src:Et}),e(g,{active:""})]),_:1})]),_:1},8,["code"]),e(h,{title:"Content Dimmer",description:"A dimmer can display content",code:t.contentDimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(f,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(s,{src:G}),e(s,{src:G}),e(s,{src:G})]),_:1}),e(s,{size:"medium",src:Et}),e(g,{active:""},{default:i(()=>[e(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:t.pageDimmerCode},{default:i(()=>[C("div",null,[e(r,{labeled:"",icon:"",onClick:l[0]||(l[0]=$=>t.active=!0)},{default:i(()=>[e(v,{name:"plus"}),a(" Show ")]),_:1}),e(g,{active:t.active,page:"",onClick:l[1]||(l[1]=$=>t.active=!1)},{default:i(()=>[e(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! "),e(y,null,{default:i(()=>[a("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const oA=pe(nA,[["render",sA]]),uA=B({name:"DropdownDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){const t=`<sui-dropdown text="File">
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
/>`,o=L(null),d=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],m=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,p=L(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],s=`<sui-dropdown
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
/>`,$=L({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:t,selected1:l,selectionCode:n,selected2:o,searchSelectionOptions:d,searchSelectionCode:m,selected3:p,clearableSelectionOptions:f,clearableSelectionCode:s,selected4:u,multipleCode:g,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:r,selected7:y,searchInMenuCode:A,selected8:$,inlineCode:`<span>
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
</sui-button-group>`}}});function rA(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-dropdown-item"),u=_("sui-divider"),g=_("sui-dropdown-menu"),c=_("sui-dropdown"),h=_("doc-example"),v=_("sui-button"),r=_("sui-button-group"),y=_("sui-container");return te(),re("div",null,[e(p,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(y,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dropdown",description:"A dropdown",code:t.dropdownCode},{default:i(()=>[e(c,{text:"File"},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{text:"New"}),e(s,{text:"Open...",description:"ctrl + o"}),e(s,{text:"Save as...",description:"ctrl + s"}),e(s,{text:"Rename",description:"ctrl + r"}),e(s,{text:"Make a copy"}),e(s,{icon:"folder",text:"Move to folder"}),e(s,{icon:"trash",text:"Move to trash"}),e(u),e(s,{text:"Download As..."}),e(s,{text:"Publish To Web"}),e(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:t.selectionCode},{default:i(()=>[e(c,{selection:"",placeholder:"Pet",modelValue:t.selected1,"onUpdate:modelValue":l[0]||(l[0]=A=>t.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:t.searchSelectionCode},{default:i(()=>[e(c,{search:"",selection:"",fluid:"",modelValue:t.selected2,"onUpdate:modelValue":l[1]||(l[1]=A=>t.selected2=A),options:t.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:t.clearableSelectionCode},{default:i(()=>[e(c,{clearable:"",selection:"",modelValue:t.selected3,"onUpdate:modelValue":l[2]||(l[2]=A=>t.selected3=A),options:t.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:t.multipleCode},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",modelValue:t.selected4,"onUpdate:modelValue":l[3]||(l[3]=A=>t.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{code:t.multipleCode2},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:t.selected5,"onUpdate:modelValue":l[4]||(l[4]=A=>t.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:t.searchDropdownCode},{default:i(()=>[e(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:t.selected6,"onUpdate:modelValue":l[5]||(l[5]=A=>t.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:t.searchInMenuCode},{default:i(()=>[e(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:t.selected7,"onUpdate:modelValue":l[6]||(l[6]=A=>t.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:t.inlineCode},{default:i(()=>[C("span",null,[a(" Show me posts by "),e(c,{inline:"",modelValue:t.selected8,"onUpdate:modelValue":l[7]||(l[7]=A=>t.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:t.pointingCode},{default:i(()=>[e(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{text:"New"}),e(s,{text:"Save As"}),e(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:t.floatingCode},{default:i(()=>[e(r,{color:"teal"},{default:i(()=>[e(v,null,{default:i(()=>[a("Save")]),_:1}),e(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{text:"Edit Post",icon:"edit"}),e(s,{text:"Remove Post",icon:"delete"}),e(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dA=pe(uA,[["render",rA]]),cA=B({name:"EmbedDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function mA(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-embed"),u=_("doc-example"),g=_("sui-container");return te(),re("div",null,[e(p,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(g,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:t.youtubeCode},{default:i(()=>[e(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:t.aspectRatioCode},{default:i(()=>[e(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const fA=pe(cA,[["render",mA]]),pA="/vue-fomantic-ui/images/avatar/large/rachel.png",gA=B({name:"ModalDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){const t=`<div>
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
</div>`}}}),hA=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),_A=C("p",null,"Is it okay to use this photo?",-1),bA=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function vA(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-button"),u=_("sui-modal-header"),g=_("sui-image"),c=_("sui-modal-description"),h=_("sui-modal-content"),v=_("sui-modal-actions"),r=_("sui-modal"),y=_("doc-example"),A=_("sui-icon"),$=_("sui-container");return te(),re("div",null,[e(p,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e($,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Modal",description:"A standard modal",code:t.modalCode},{default:i(()=>[C("div",null,[e(s,{onClick:l[0]||(l[0]=b=>t.modal1=!0)},{default:i(()=>[a("Show Modal")]),_:1}),e(r,{modelValue:t.modal1,"onUpdate:modelValue":l[2]||(l[2]=b=>t.modal1=b)},{default:i(()=>[e(u,null,{default:i(()=>[a("Select a Photo")]),_:1}),e(h,{image:""},{default:i(()=>[e(g,{wrapped:"",size:"medium",src:pA}),e(c,null,{default:i(()=>[e(f,null,{default:i(()=>[a("Default Profile Image")]),_:1}),hA,_A]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(s,{positive:"",onClick:l[1]||(l[1]=b=>t.modal1=!1)},{default:i(()=>[a("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A modal can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(s,{onClick:l[3]||(l[3]=b=>t.basicModal=!0)},{default:i(()=>[a("Basic Modal")]),_:1}),e(r,{basic:"",modelValue:t.basicModal,"onUpdate:modelValue":l[5]||(l[5]=b=>t.basicModal=b)},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(A,{name:"archive"}),a(" Archive Old Messages ")]),_:1}),e(h,null,{default:i(()=>[bA]),_:1}),e(v,null,{default:i(()=>[e(s,{basic:"",color:"red",inverted:"",onClick:l[4]||(l[4]=b=>t.basicModal=!1)},{default:i(()=>[e(A,{name:"remove"}),a(" No ")]),_:1}),e(s,{basic:"",color:"green"},{default:i(()=>[e(A,{name:"checkmark"}),a(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const yA=pe(gA,[["render",vA]]),CA="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",wA=B({name:"PopupDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){const t=L(null),l=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=L(null),o=L(null),d=L(null),m=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,p=L(null),f=`<sui-card ref="triggerTriger">
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
</sui-popup>`,r=L(null),y=L(null),A=L(null),$=L(null),b=L(null),w=L(null),k=L(null),T=L(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
</sui-popup>`,P=L(null),I=L(null),X=L(null),H=L(null),ue=L(null),ye=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,N=L(null),O=L(null);return{popupTrigger:t,popupCode:l,titledTrigger1:n,titledTrigger2:o,titledTrigger3:d,titledCode:m,triggerTriger:p,triggerCode:f,basicTrigger:s,basicCode:u,wideTrigger1:g,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:r,positionTrigger2:y,positionTrigger3:A,positionTrigger4:$,positionTrigger5:b,positionTrigger6:w,positionTrigger7:k,positionTrigger8:T,positionCode:E,flowingTrigger:z,flowingCode:M,sizeTrigger1:P,sizeTrigger2:I,sizeTrigger3:X,sizeTrigger4:H,sizeTrigger5:ue,sizeCode:ye,invertedTrigger1:N,invertedTrigger2:O,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),AA=C("p",null,[C("b",null,"2"),a(" projects, $10 a month ")],-1),SA=C("p",null,[C("b",null,"5"),a(" projects, $20 a month ")],-1),kA=C("p",null,[C("b",null,"8"),a(" projects, $25 a month ")],-1);function $A(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-icon"),u=_("sui-button"),g=_("sui-popup"),c=_("doc-example"),h=_("sui-image"),v=_("sui-card-header"),r=_("sui-card-description"),y=_("sui-card-content"),A=_("sui-card"),$=_("sui-rating"),b=_("sui-divider"),w=_("sui-grid-column"),k=_("sui-grid"),T=_("sui-container");return te(),re("div",null,[e(p,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e(T,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Popup",description:"An element can specify popup content to appear",code:t.popupCode},{default:i(()=>[e(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[e(s,{name:"add"})]),_:1},512),e(g,{trigger:t.popupTrigger},{default:i(()=>[a(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Titled",description:"An element can specify popup content with a title",code:t.titledCode},{default:i(()=>[e(h,{avatar:"",src:Tt,ref:"titledTrigger1"},null,512),e(h,{avatar:"",src:_l,ref:"titledTrigger2"},null,512),e(h,{avatar:"",src:Ba,ref:"titledTrigger3"},null,512),e(g,{trigger:t.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Trigger",description:"A trigger can be complex element",code:t.triggerCode},{default:i(()=>[e(A,{ref:"triggerTriger"},{default:i(()=>[e(h,{src:CA}),e(y,null,{default:i(()=>[e(v,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(r,null,{default:i(()=>[a(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),e(g,{trigger:t.triggerTriger,header:"User Rating"},{default:i(()=>[e($,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Basic",description:"A popup can provide more basic formatting",code:t.basicCode},{default:i(()=>[e(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[e(s,{name:"add"})]),_:1},512),e(g,{trigger:t.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Position",description:"A popup can be position around its trigger",code:t.positionCode},{default:i(()=>[e(u,{ref:"positionTrigger1"},{default:i(()=>[a("Top Left")]),_:1},512),e(u,{ref:"positionTrigger2"},{default:i(()=>[a("Top Center")]),_:1},512),e(u,{ref:"positionTrigger3"},{default:i(()=>[a("Top Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger4"},{default:i(()=>[a("Bottom Left")]),_:1},512),e(u,{ref:"positionTrigger5"},{default:i(()=>[a("Bottom Center")]),_:1},512),e(u,{ref:"positionTrigger6"},{default:i(()=>[a("Bottom Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger7"},{default:i(()=>[a("Right Center")]),_:1},512),e(u,{ref:"positionTrigger8"},{default:i(()=>[a("Left Center")]),_:1},512),e(g,{trigger:t.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:t.flowingCode},{default:i(()=>[e(u,{ref:"flowingTrigger"},{default:i(()=>[a("Show Flowing Popup")]),_:1},512),e(g,{trigger:t.flowingTrigger,flowing:""},{default:i(()=>[e(k,{centered:"",divided:"",columns:3},{default:i(()=>[e(w,{textAlign:"center"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Basic Plan")]),_:1}),AA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Business Plan")]),_:1}),SA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(f,{as:"h4"},{default:i(()=>[a("Premium Plan")]),_:1}),kA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Size",description:"A popup can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(g,{size:"mini",content:"Hello. This is a mini popup",trigger:t.sizeTrigger1},null,8,["trigger"]),e(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:t.sizeTrigger2},null,8,["trigger"]),e(g,{size:"small",content:"Hello. This is a small popup",trigger:t.sizeTrigger3},null,8,["trigger"]),e(g,{size:"large",content:"Hello. This is a large popup",trigger:t.sizeTrigger4},null,8,["trigger"]),e(g,{size:"huge",content:"Hello. This is a huge popup",trigger:t.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:t.wideCode},{default:i(()=>[e(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(g,{trigger:t.wideTrigger1},{default:i(()=>[a(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger2,wide:""},{default:i(()=>[a(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger3,wide:"very"},{default:i(()=>[a(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Inverted",description:"A popup can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[e(s,{name:"add"})]),_:1},512),e(g,{trigger:t.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(g,{trigger:t.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const TA=pe(wA,[["render",$A]]),xA=B({name:"ProgressDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function EA(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-progress"),u=_("doc-example"),g=_("sui-segment"),c=_("sui-container");return te(),re("div",null,[e(p,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(c,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Standard",description:"A standard progress bar",code:t.standardCode},{default:i(()=>[e(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:t.indicatingCode},{default:i(()=>[e(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:t.barCode},{default:i(()=>[e(s,{percent:33})]),_:1},8,["code"]),e(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:t.progressCode},{default:i(()=>[e(s,{percent:14,progress:""})]),_:1},8,["code"]),e(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:t.centeredCode},{default:i(()=>[e(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(u,{title:"Label",description:"A progress element can contain a label",code:t.labelCode},{default:i(()=>[e(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Active",description:"A progress bar can show activity",code:t.activeCode},{default:i(()=>[e(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(u,{title:"Success",description:"A progress bar can show a success state",code:t.successCode},{default:i(()=>[e(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(u,{title:"Warning",description:"A progress bar can show a warning state",code:t.warningCode},{default:i(()=>[e(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(u,{title:"Error",description:"A progress bar can show an error state",code:t.errorCode},{default:i(()=>[e(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(u,{title:"Disabled",description:"A progress bar can be disabled",code:t.disabledCode},{default:i(()=>[e(s,{percent:25,disabled:""})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(u,{title:"Attached",description:"A progress bar can show progress of an element",code:t.attachedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(s,{percent:47,attached:"top"}),a(" La la la la "),e(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A progress bar can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{percent:88,size:"tiny",label:"tiny"}),e(s,{percent:100,size:"small",label:"small",success:""}),e(s,{percent:83,label:"standard"}),e(s,{percent:73,size:"large",label:"large"}),e(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(u,{title:"Color",description:"A progress bar can have different colors",code:t.colorCode},{default:i(()=>[e(s,{percent:32,color:"red"}),e(s,{percent:53,color:"orange"}),e(s,{percent:13,color:"yellow"}),e(s,{percent:37,color:"olive"}),e(s,{percent:83,color:"green"}),e(s,{percent:24,color:"teal"}),e(s,{percent:88,color:"blue"}),e(s,{percent:41,color:"violet"}),e(s,{percent:47,color:"purple"}),e(s,{percent:30,color:"pink"}),e(s,{percent:68,color:"brown"}),e(s,{percent:35,color:"grey"}),e(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const BA=pe(xA,[["render",EA]]),RA=B({name:"RatingDoc",components:{DocPageHeader:Ne,DocExample:ve,PropertyListTable:Ra},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),PA=C("br",null,null,-1),zA=C("br",null,null,-1),MA=C("br",null,null,-1),DA=C("br",null,null,-1),FA=C("br",null,null,-1),IA=C("br",null,null,-1),NA=C("br",null,null,-1),VA=C("br",null,null,-1),LA=C("br",null,null,-1),OA=C("br",null,null,-1),HA=C("br",null,null,-1),jA=C("br",null,null,-1),qA=C("br",null,null,-1),UA=C("br",null,null,-1),JA=C("br",null,null,-1),GA=C("br",null,null,-1),YA=C("br",null,null,-1),WA=C("br",null,null,-1),KA=C("br",null,null,-1),QA=C("br",null,null,-1),XA=C("br",null,null,-1),ZA=C("br",null,null,-1),eS=C("br",null,null,-1),tS=C("br",null,null,-1),iS=C("br",null,null,-1),lS=C("br",null,null,-1),aS=C("br",null,null,-1),nS=C("br",null,null,-1),sS=C("br",null,null,-1),oS=C("br",null,null,-1),uS=C("br",null,null,-1),rS=C("br",null,null,-1),dS=C("br",null,null,-1),cS=C("br",null,null,-1),mS=C("br",null,null,-1),fS=C("br",null,null,-1),pS=C("br",null,null,-1),gS=C("br",null,null,-1),hS=C("br",null,null,-1),_S=C("br",null,null,-1),bS=C("br",null,null,-1),vS=C("br",null,null,-1),yS=C("br",null,null,-1),CS=C("br",null,null,-1),wS=C("br",null,null,-1),AS=C("br",null,null,-1),SS=C("br",null,null,-1),kS=C("br",null,null,-1);function $S(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-rating"),u=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),r=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return te(),re("div",null,[e(p,{title:"Rating",sub:"A rating indicates user interest in content"}),e($,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Rating",description:"A Basic rating",code:t.ratingCode},{default:i(()=>[e(s)]),_:1},8,["code"]),e(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:t.iconCode},{default:i(()=>[e(s,{defaultRating:2,maxRating:4,color:"yellow"}),PA,zA,e(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),MA,DA,e(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),FA,IA,e(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),NA,VA,e(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),LA,OA,e(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),HA,jA,e(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:t.colorCode},{default:i(()=>[e(s,{defaultRating:1,maxRating:7,color:"red"}),qA,UA,e(s,{defaultRating:2,maxRating:7,color:"orange"}),JA,GA,e(s,{defaultRating:3,maxRating:7,color:"yellow"}),YA,WA,e(s,{defaultRating:4,maxRating:7,color:"olive"}),KA,QA,e(s,{defaultRating:5,maxRating:7,color:"green"}),XA,ZA,e(s,{defaultRating:6,maxRating:7,color:"teal"}),eS,tS,e(s,{defaultRating:6,maxRating:7,color:"blue"}),iS,lS,e(s,{defaultRating:5,maxRating:7,color:"violet"}),aS,nS,e(s,{defaultRating:4,maxRating:7,color:"purple"}),sS,oS,e(s,{defaultRating:3,maxRating:7,color:"pink"}),uS,rS,e(s,{defaultRating:2,maxRating:7,color:"brown"}),dS,cS,e(s,{defaultRating:1,maxRating:7,color:"grey"}),mS,fS,e(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:t.disabledCode},{default:i(()=>[e(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Size",description:"A rating can vary in size",code:t.sizeCode},{default:i(()=>[e(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),pS,gS,e(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),hS,_S,e(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),bS,vS,e(s,{defaultRating:3,maxRating:4,color:"yellow"}),yS,CS,e(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),wS,AS,e(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),SS,kS,e(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,b=>(te(),Je(h,{key:b.name},{default:i(()=>[e(r,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const TS=pe(RA,[["render",$S]]),xS=B({name:"SidebarDoc",components:{DocPageHeader:Ne,DocExample:ve,PropertyListTable:Ra},setup(){return{visible1:L(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),ES={class:"pusher"};function BS(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-icon"),u=_("sui-button"),g=_("sui-grid-column"),c=_("sui-menu-item"),h=_("sui-sidebar"),v=_("sui-image"),r=_("sui-segment"),y=_("sui-grid"),A=_("doc-example"),$=_("property-list-table"),b=_("sui-table-header-cell"),w=_("sui-table-row"),k=_("sui-table-header"),T=_("sui-table-cell"),E=_("sui-table-body"),z=_("sui-table"),M=_("sui-container");return te(),re("div",null,[e(p,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(M,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Sidebar",description:"A sidebar",code:t.sidebarCode},{default:i(()=>[e(y,{columns:1},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{onClick:l[0]||(l[0]=P=>t.visible1=!t.visible1),icon:""},{default:i(()=>[e(s,{name:"arrow right"})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(r,{class:"pushable"},{default:i(()=>[e(h,{visible:t.visible1,"onUpdate:visible":l[1]||(l[1]=P=>t.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[e(c,null,{default:i(()=>[e(s,{name:"home"}),a(" Home ")]),_:1}),e(c,null,{default:i(()=>[e(s,{name:"gamepad"}),a(" Games ")]),_:1}),e(c,null,{default:i(()=>[e(s,{name:"camera"}),a(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",ES,[e(r,null,{default:i(()=>[e(f,{as:"h2"},{default:i(()=>[a("Main Header")]),_:1}),e(v,{src:ge})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e($,{properties:t.properties},null,8,["properties"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(z,{celled:""},{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Name")]),_:1}),e(b,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(E,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,P=>(te(),Je(w,{key:P.name},{default:i(()=>[e(T,null,{default:i(()=>[a(Ee(P.name),1)]),_:2},1024),e(T,null,{default:i(()=>[a(Ee(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const RS=pe(xS,[["render",BS]]),PS=B({name:"SliderDoc",components:{DocPageHeader:Ne,DocExample:ve},setup(){const t=L(5),l='<sui-slider v-model="slider1" />',n=L(4),o='<sui-slider labeled v-model="slider2" />',d=L(6),m='<sui-slider labeled="ticked" v-model="slider3" />',p=L(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=L(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=L([]);g.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=L(7),v='<sui-slider disabled v-model="slider7" />',r=L(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=L(3),$='<sui-slider reversed v-model="slider9" />',b=L(18),w='<sui-slider vertical v-model="slider10" :max="20" />',k=L(5),T=L(5),E=L(5),z=L(5),M=L(5),P=L(5),I=L(5),X=L(5),H=L(5),ue=L(5),ye=L(5),N=L(5),O=L(5),ae=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,we=L(5),Ve=L(5),qe=L(5);return{slider1:t,sliderCode:l,slider2:n,labeledSliderCode:o,slider3:d,labeledTickedCode:m,slider4:p,customLabelsCode:f,slider5:s,stepCode:u,slider6:g,rangeCode:c,slider7:h,disabledCode:v,slider8:r,invertedCode:y,slider9:A,reversedCode:$,slider10:b,verticalCode:w,redSlider:k,orangeSlider:T,yellowSlider:E,oliveSlider:z,greenSlider:M,tealSlider:P,blueSlider:I,violetSlider:X,purpleSlider:H,pinkSlider:ue,brownSlider:ye,greySlider:N,blackSlider:O,coloredCode:ae,invertedColoredCode:Y,smallSlider:we,largeSlider:Ve,bigSlider:qe,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function zS(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-slider"),u=_("doc-example"),g=_("sui-segment"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),r=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return te(),re("div",null,[e(p,{title:"Slider",sub:"A slider allows users to select values within a range"}),e($,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Slider",description:"A standard slider",code:t.sliderCode},{default:i(()=>[e(s,{modelValue:t.slider1,"onUpdate:modelValue":l[0]||(l[0]=b=>t.slider1=b)},null,8,["modelValue"]),a(" "+Ee(t.slider1),1)]),_:1},8,["code"]),e(u,{title:"Labeled Slider",description:"A slider that show its labels",code:t.labeledSliderCode},{default:i(()=>[e(s,{labeled:"",modelValue:t.slider2,"onUpdate:modelValue":l[1]||(l[1]=b=>t.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:t.labeledTickedCode},{default:i(()=>[e(s,{labeled:"ticked",modelValue:t.slider3,"onUpdate:modelValue":l[2]||(l[2]=b=>t.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:t.customLabelsCode},{default:i(()=>[e(s,{modelValue:t.slider4,"onUpdate:modelValue":l[3]||(l[3]=b=>t.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Step",description:"A slider can change the default step increment",code:t.stepCode},{default:i(()=>[e(s,{modelValue:t.slider5,"onUpdate:modelValue":l[4]||(l[4]=b=>t.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),a(" "+Ee(t.slider5),1)]),_:1},8,["code"]),e(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:t.rangeCode},{default:i(()=>[e(s,{modelValue:t.slider6,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),a(" "+Ee(t.slider6),1)]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Disabled",description:"A slider can appear disabled",code:t.disabledCode},{default:i(()=>[e(s,{disabled:"",modelValue:t.slider7,"onUpdate:modelValue":l[6]||(l[6]=b=>t.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A slider can be inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{inverted:"",modelValue:t.slider8,"onUpdate:modelValue":l[7]||(l[7]=b=>t.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Reversed",description:"A slider can be reversed",code:t.reversedCode},{default:i(()=>[e(s,{reversed:"",modelValue:t.slider9,"onUpdate:modelValue":l[8]||(l[8]=b=>t.slider9=b)},null,8,["modelValue"]),a(" "+Ee(t.slider9),1)]),_:1},8,["code"]),e(u,{title:"Vertical",description:"A slider can be vertical",code:t.verticalCode},{default:i(()=>[e(s,{vertical:"",modelValue:t.slider10,"onUpdate:modelValue":l[9]||(l[9]=b=>t.slider10=b),max:20},null,8,["modelValue"]),a(" "+Ee(t.slider10),1)]),_:1},8,["code"]),e(u,{title:"Colored",description:"A slider can be different colors",code:t.coloredCode},{default:i(()=>[e(s,{color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[10]||(l[10]=b=>t.redSlider=b)},null,8,["modelValue"]),e(s,{color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(s,{color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(s,{color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(s,{color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(s,{color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(s,{color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(s,{color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(s,{color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(s,{color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(s,{color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(s,{color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[21]||(l[21]=b=>t.greySlider=b)},null,8,["modelValue"]),e(s,{color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:t.invertedColoredCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(s,{inverted:"",color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[23]||(l[23]=b=>t.redSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[34]||(l[34]=b=>t.greySlider=b)},null,8,["modelValue"]),e(s,{inverted:"",color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A slider can have different sizes",code:t.sizeCode},{default:i(()=>[e(s,{size:"small",color:"red",modelValue:t.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=b=>t.smallSlider=b)},null,8,["modelValue"]),e(s,{size:"large",color:"yellow",modelValue:t.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=b=>t.largeSlider=b)},null,8,["modelValue"]),e(s,{size:"big",color:"olive",modelValue:t.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=b=>t.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Type")]),_:1}),e(c,null,{default:i(()=>[a("Default")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.properties,b=>(te(),Je(h,{key:b.name},{default:i(()=>[e(r,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Ee(b.type),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Ee(b.default),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,b=>(te(),Je(h,{key:b.name},{default:i(()=>[e(r,null,{default:i(()=>[a(Ee(b.name),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Ee(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const MS=pe(PS,[["render",zS]]),DS=B({name:"TabDoc",components:{DocPageHeader:Ne,DocExample:ve,PropertyListTable:Ra},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function FS(t,l,n,o,d,m){const p=_("doc-page-header"),f=_("sui-header"),s=_("sui-tab-panel"),u=_("sui-tab"),g=_("doc-example"),c=_("property-list-table"),h=_("sui-table-header-cell"),v=_("sui-table-row"),r=_("sui-table-header"),y=_("sui-table-cell"),A=_("sui-table-body"),$=_("sui-table"),b=_("sui-container");return te(),re("div",null,[e(p,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(b,{class:"main"},{default:i(()=>[e(f,{as:"h2",dividing:""},{default:i(()=>[a("Examples")]),_:1}),e(g,{title:"Basic",code:t.basicCode},{default:i(()=>[e(u,null,{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary",code:t.secondaryCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(s,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(s,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(s,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(f,{as:"h3"},{default:i(()=>[a("Tab")]),_:1}),e(c,{properties:t.tabProperties},null,8,["properties"]),e(f,{as:"h3"},{default:i(()=>[a("TabPanel")]),_:1}),e(c,{properties:t.tabPanelProperties},null,8,["properties"]),e(f,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e($,{celled:""},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[a("Name")]),_:1}),e(h,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[(te(!0),re(Se,null,mt(t.events,w=>(te(),Je(v,{key:w.name},{default:i(()=>[e(y,null,{default:i(()=>[a(Ee(w.name),1)]),_:2},1024),e(y,null,{default:i(()=>[a(Ee(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const IS=pe(DS,[["render",FS]]),NS=[{path:"/",component:kh,children:[{path:"/",component:Hh},{path:"elements/button",component:e_},{path:"elements/container",component:o_},{path:"elements/divider",component:c_},{path:"elements/emoji",component:y_},{path:"elements/flag",component:S_},{path:"elements/header",component:B_},{path:"elements/icon",component:L_},{path:"elements/image",component:eb},{path:"elements/input",component:ab},{path:"elements/label",component:vb},{path:"elements/list",component:Nb},{path:"elements/loader",component:Hb},{path:"elements/rail",component:Jb},{path:"elements/reveal",component:Qb},{path:"elements/segment",component:wv},{path:"elements/step",component:xv},{path:"collections/breadcrumb",component:Rv},{path:"collections/form",component:Mv},{path:"collections/grid",component:Nv},{path:"collections/menu",component:Jv},{path:"collections/message",component:a1},{path:"collections/table",component:_1},{path:"views/advertisement",component:w1},{path:"views/card",component:ly},{path:"views/comment",component:iC},{path:"views/feed",component:SC},{path:"views/item",component:fw},{path:"views/statistic",component:ww},{path:"modules/accordion",component:Uw},{path:"modules/calendar",component:Yw},{path:"modules/checkbox",component:aA},{path:"modules/dimmer",component:oA},{path:"modules/dropdown",component:dA},{path:"modules/embed",component:fA},{path:"modules/modal",component:yA},{path:"modules/popup",component:TA},{path:"modules/progress",component:BA},{path:"modules/rating",component:TS},{path:"modules/sidebar",component:RS},{path:"modules/slider",component:MS},{path:"modules/tab",component:IS}]}],VS=mh({history:xg("/vue-fomantic-ui/"),routes:NS});var LS=Object.defineProperty,Bo=Object.getOwnPropertySymbols,OS=Object.prototype.hasOwnProperty,HS=Object.prototype.propertyIsEnumerable,Ro=(t,l,n)=>l in t?LS(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,Yt=(t,l)=>{for(var n in l||(l={}))OS.call(l,n)&&Ro(t,n,l[n]);if(Bo)for(var n of Bo(l))HS.call(l,n)&&Ro(t,n,l[n]);return t};function Oc(t){var l,n,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(l=0;l<t.length;l++)t[l]&&(n=Oc(t[l]))&&(o&&(o+=" "),o+=n);else for(l in t)t[l]&&(o&&(o+=" "),o+=l);return o}function W(){for(var t=0,l,n,o="";t<arguments.length;)(l=arguments[t++])&&(n=Oc(l))&&(o&&(o+=" "),o+=n);return o}const S=(t,l)=>t?l:"",Te=(t,l)=>typeof t=="string"?`${t} ${l}`:"",$e=(t,l)=>t===!0?l:t==="below"?`${l} ${t}`:typeof t=="string"?`${t} ${l}`:"",ji=t=>t==="justified"?"justified":Te(t,"aligned"),It=(t,l)=>typeof t=="number"&&l?`${kn(t)} ${l}`:typeof t=="number"&&!l?kn(t):typeof t=="string"&&t==="equal"?`${t} width`:"",Yi=(t,l)=>t?`${kn(t)} wide ${l}`:"",kn=t=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][t-1];var $n=B({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,labeled:[Boolean,String],labelPosition:String,icon:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,loading:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.color,t.size,S(t.active,"active"),S(t.basic,"basic"),S(t.circular,"circular"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.facebook,"facebook"),S(t.fluid,"fluid"),S(t.google,"google"),S(t.icon,"icon"),S(t.linkedin,"linkedin"),S(t.instagram,"instagram"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.primary,"primary"),S(t.secondary,"secondary"),S(t.telegram,"telegram"),S(t.tertiary,"tertiary"),S(t.toggle,"toggle"),S(t.twitter,"twitter"),S(t.vk,"vk"),S(t.whatsapp,"whatsapp"),S(t.youtube,"youtube"),Te(t.attached,"attached"),Te(t.floated,"floated"),Te(t.labelPosition,"labeled"),$e(t.animated,"animated"),$e(t.labeled,"labeled"),"button"))}},render(){let t=this.as||"div";return e(t,{class:this.computedClass,role:"button"},{default:()=>{var l,n;return[(n=(l=this.$slots).default)==null?void 0:n.call(l)]}})}}),Po=B({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(t){return{computedClass:F(()=>W(S(t.hidden,"hidden"),S(t.visible,"visible"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),zo=B({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(t){return{computedClass:F(()=>W("ui",t.color,t.size,S(t.basic,"basic"),S(t.icon,"icon"),S(t.labeled,"labeled"),S(t.vertical,"vertical"),Te(t.attached,"attached"),It(t.widths,""),"buttons"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),jS={install(t){t.component($n.name,$n),t.component(Po.name,Po),t.component(zo.name,zo)}},Mo=B({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(t){return{computedClass:F(()=>W("ui",S(t.fluid,"fluid"),S(t.text,"text"),ji(t.textAlign),"container"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qS={install(t){t.component(Mo.name,Mo)}},Do=B({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:F(()=>W("ui",S(t.clearing,"clearing"),S(t.fitted,"fitted"),S(t.hidden,"hidden"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.section,"section"),S(t.vertical,"vertical"),Te(t.textAlign,"aligned"),"divider"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),US={install(t){t.component(Do.name,Do)}},Fo=B({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(t){return{computedClass:F(()=>W(t.size,S(t.disabled,"disabled"),S(t.link,"link"),S(t.loading,"loading")))}},render(){return this.computedClass?U("em",{class:this.computedClass,"data-emoji":this.$props.name}):U("em",{"data-emoji":this.$props.name})}}),JS={install(t){t.component(Fo.name,Fo)}},Io=B({name:"SuiFlag",props:{name:String},setup(t){return{computedClass:F(()=>W(t.name,"flag"))}},render(){return U("i",{class:this.computedClass})}}),GS={install(t){t.component(Io.name,Io)}},aa=B({name:"SuiHeaderSubheader",props:{as:String},setup(t){return{elementType:t.as||"div"}},render(){var t,l;return U(this.elementType,{class:"sub header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),No=B({name:"SuiHeader",components:{HeaderSubheader:aa},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(t){const l=t.as||"div",n=F(()=>W("ui",t.color,t.size,S(t.block,"block"),S(t.disabled,"disabled"),S(t.dividing,"dividing"),S(t.icon,"icon"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.sub,"sub"),Te(t.floated,"floated"),$e(t.attached,"attached"),ji(t.textAlign),"header"));return{elementType:l,computedClass:n}},render(){var t,l;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(U(aa,{},this.subheader)),n.length>0?U(this.elementType,{class:this.computedClass},n):U(this.elementType,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Vo=B({name:"SuiHeaderContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),YS={install(t){t.component(No.name,No),t.component(Vo.name,Vo),t.component(aa.name,aa)}},_i=B({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(t){return{computedClass:F(()=>W(t.color,t.name,t.size,S(t.bordered,"bordered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fitted,"fitted"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.loading,"loading"),Te(t.flipped,"flipped"),Te(t.rotated,"rotated"),$e(t.corner,"corner"),"icon"))}},render(){let t=this.$props.as||"i";return U(t,{"aria-hidden":!0,class:this.computedClass})}}),Lo=B({name:"SuiIconGroup",props:{as:String,size:String},setup(t){return{computedClass:F(()=>W(t.size,"icons"))}},render(){var t,l;let n=this.$props.as||"i";return U(n,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),WS={install(t){t.component(_i.name,_i),t.component(Lo.name,Lo)}};const Hc=["top","middle","bottom"],KS={verticalAlign:{type:String,validator:t=>Hc.includes(t)}};function QS(t){return{verticalAlignClass:F(()=>t.verticalAlign&&Hc.includes(t.verticalAlign)?`${t.verticalAlign} aligned`:null)}}const XS=["left","right"],ZS={floated:{type:String,validator:t=>XS.includes(t)}};function ek(t){return{floatedClass:F(()=>t.floated&&(t.floated==="left"||t.floated==="right")?`${t.floated} floated`:null)}}var Vi=B({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(t,{slots:l}){const n=F(()=>W("ui",t.size,t.color,S(t.basic,"basic"),S(t.circular,"circular"),S(t.empty,"empty"),S(t.floating,"floating"),S(t.horizontal,"horizontal"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.prompt,"prompt"),S(t.tag,"tag"),Te(t.attached,"attached"),Te(t.corner,"corner"),$e(t.pointing,"pointing"),$e(t.ribbon,"ribbon"),"label"));let o=t.as||"div";return t.icon?()=>U(o,{class:n.value},U(_i,{name:t.icon})):()=>{var d;return U(o,{class:n.value},(d=l.default)==null?void 0:d.call(l))}}}),Oo=B({name:"SuiLabelDetail",render(){var t,l;return e("div",{class:"detail"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ho=B({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(t,{slots:l}){const n=F(()=>W("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.tag,"tag"),"labels"));return()=>{var o;return U("div",{class:n.value},(o=l.default)==null?void 0:o.call(l))}}}),tk={install(t){t.component(Vi.name,Vi),t.component(Oo.name,Oo),t.component(Ho.name,Ho)}},na=B({name:"SuiImage",props:Yt(Yt({as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String},KS),ZS),setup(t,{slots:l}){const{verticalAlignClass:n}=QS(t),{floatedClass:o}=ek(t),d=F(()=>W("ui",t.size,n.value,o.value,S(t.avatar,"avatar"),S(t.bordered,"bordered"),S(t.centered,"centered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.hidden,"hidden"),S(t.inline,"inline"),S(t.rounded,"rounded"),$e(t.spaced,"spaced"),"image"));if(t.as==="a"||t.as==="router-link"){let m=t.as;return t.as==="router-link"&&(m=_(t.as)),()=>{var p;return U(m,{class:d.value,href:t.href,target:t.target&&t.target},U("img",{src:t.src},(p=l.default)==null?void 0:p.call(l)))}}return t.wrapped?()=>{var m;return U("div",{class:d.value},U("img",{src:t.src},(m=l.default)==null?void 0:m.call(l)))}:t.label?()=>U("div",{class:d.value},[U("img",{src:t.src}),U(Vi,Yt({},t.label))]):()=>e("img",{class:d.value,src:t.src},null)}}),jo=B({name:"SuiImageGroup",props:{size:String},setup(t,{slots:l}){const n=F(()=>W("ui",t.size,"images"));return()=>{var o;return U("div",{class:n.value},(o=l.default)==null?void 0:o.call(l))}}}),ik={install(t){t.component(na.name,na),t.component(jo.name,jo)}},qo=B({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(t,{emit:l}){const n=F(()=>typeof t.icon=="string"||t.loading),o=F(()=>!!t.label||t.labeled),d=F(()=>W("ui",t.size,t.action&&"action",S(t.disabled,"disabled"),S(t.error,"error"),S(t.fluid,"fluid"),S(t.focus,"focus"),t.iconPosition,S(n.value,"icon"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.transparent,"transparent"),S(o.value,"labeled"),"input")),m=p=>l("update:modelValue",p.target.value);return()=>e("div",{class:d.value},[t.label&&e(Vi,null,{default:()=>[t.label]}),e("input",{type:t.type||"text",placeholder:t.placeholder,value:t.modelValue,onInput:p=>m(p)},null),n.value&&e(_i,{name:t.icon||"spinner"},null),t.action&&e($n,null,{default:()=>[t.action]})])}}),lk={install(t){t.component(qo.name,qo)}},Uo=B({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(t,{slots:l}){const n=F(()=>W("ui",S(t.animated,"animated"),S(t.bulleted,"bulleted"),S(t.celled,"celled"),S(t.divided,"divided"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.ordered,"ordered"),S(t.relaxed,"relaxed"),S(t.selection,"selection"),Te(t.verticalAlign,"aligned"),Te(t.floated,"floated"),"list"));let o=t.as||"div";return()=>{var d;return U(o,{class:n.value},(d=l.default)==null?void 0:d.call(l))}}}),Jo=B({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(t,{slots:l}){let n=t.as||"div";const o=F(()=>W(S(t.active,"active"),S(t.disabled,"disabled"),"item"));return()=>{var d;return U(n,{class:o.value},(d=l.default)==null?void 0:d.call(l))}}}),Go=B({name:"SuiListIcon",components:{Icon:_i},setup(t,{slots:l}){return()=>{var n;return U(_(_i.name),Yt({},t),(n=l.default)==null?void 0:n.call(l))}}}),Yo=B({name:"SuiListContent",props:{verticalAlign:String},setup(t){return{computedClass:F(()=>W(Te(t.verticalAlign,"aligned"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Wo=B({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return U(t.as,{class:"header"},(n=l.default)==null?void 0:n.call(l))}}}),Ko=B({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return U(t.as,{class:"description"},(n=l.default)==null?void 0:n.call(l))}}}),Qo=B({name:"SuiListList",render(){var t,l;return e("div",{class:"list"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ak={install(t){t.component(Uo.name,Uo),t.component(Jo.name,Jo),t.component(Go.name,Go),t.component(Yo.name,Yo),t.component(Wo.name,Wo),t.component(Ko.name,Ko),t.component(Qo.name,Qo)}},Xo=B({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(t,{slots:l}){return{computedClass:F(()=>{var o;return W("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.fast,"fast"),S(t.indeterminate,"indeterminate"),S(t.inverted,"inverted"),S(t.slow,"slow"),S(t.text||!!((o=l.default)!=null&&o.call(l)),"text"),$e(t.inline,"inline"),"loader")})}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),nk={install(t){t.component(Xo.name,Xo)}},Zo=B({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(t){return{computedClass:F(()=>W("ui",t.position,t.size,S(t.attached,"attached"),S(t.dividing,"dividing"),S(t.internal,"internal"),$e(t.close,"close"),"rail"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),sk={install(t){t.component(Zo.name,Zo)}},eu=B({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.animated,S(t.active,"active"),S(t.disabled,"disabled"),S(t.instant,"instant"),"reveal"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),tu=B({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(t){return{computedClass:F(()=>W("ui",S(t.visible,"visible"),S(t.hidden,"hidden"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ok={install(t){t.component(eu.name,eu),t.component(tu.name,tu)}},sa=B({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.clearing,"clearing"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.piled,"piled"),S(t.placeholder,"placeholder"),S(t.raised,"raised"),S(t.secondary,"secondary"),S(t.stacked,"stacked"),S(t.tertiary,"tertiary"),S(t.vertical,"vertical"),Te(t.floated,"floated"),Te(t.textAlign,"aligned"),$e(t.attached,"attached"),$e(t.fitted,"fitted"),$e(t.padded,"padded"),"segment"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),iu=B({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.size,S(t.compact,"compact"),S(t.horizontal,"horizontal"),S(t.piled,"piled"),S(t.raised,"raised"),S(t.stacked,"stacked"),"segments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),lu=B({name:"SuiSegmentInline",render(){var t,l;return e("div",{class:"inline"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),uk={install(t){t.component(sa.name,sa),t.component(iu.name,iu),t.component(lu.name,lu)}},au=B({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(t){return{computedClass:F(()=>W(S(t.active,"active"),S(t.completed,"completed"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.link,"link"),S(t.vertical,"vertical"),"step"))}},render(){var t,l,n,o;return this.href?e("a",{class:this.computedClass,href:this.href},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("div",{class:this.computedClass},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}});const rk=["one","two","three","four","five","six","seven","eight"];var nu=B({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(t){const{widths:l}=t;return{computedClass:F(()=>W("ui",l&&rk[l-1],t.size,S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.ordered,"ordered"),S(t.unstackable,"unstackable"),S(t.vertical,"vertical"),Te(t.attached,"attached"),Te(t.stackable,"stackable"),"steps"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),su=B({name:"SuiStepContent",render(){var t,l;return e("div",{class:"content"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ou=B({name:"SuiStepTitle",render(){var t,l;return e("div",{class:"title"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),uu=B({name:"SuiStepDescription",render(){var t,l;return e("div",{class:"description"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),dk={install(t){t.component(au.name,au),t.component(nu.name,nu),t.component(su.name,su),t.component(ou.name,ou),t.component(uu.name,uu)}},ck=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Button:jS,Container:qS,Divider:US,Emoji:JS,Flag:GS,Header:YS,Icon:WS,Image:ik,Input:lk,Label:tk,List:ak,Loader:nk,Rail:sk,Reveal:ok,Segment:uk,Step:dk}),Tn=B({name:"SuiBreadcrumbDivider",props:{icon:String},setup(t){return{computedClass:F(()=>W(t.icon,"icon","divider"))}},render(){var t,l;return this.icon?e("i",{"aria-hidden":"true",class:this.computedClass},null):e("div",{class:"divider"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),xn=B({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(t){const l=F(()=>W(S(t.active,"active"),"section")),n=t.link||!!t.href;return{computedClass:l,isLink:n}},render(){let t="div";this.isLink?t="a":this.to&&(t=_("router-link"));const l={href:this.href,to:this.to};return e(t,$l({class:this.computedClass},l),{default:()=>{var n,o;return[(o=(n=this.$slots).default)==null?void 0:o.call(n)]}})}}),ru=B({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(t){return{computedClass:F(()=>W("ui",t.size,S(t.inverted,"inverted"),"breadcrumb"))}},render(){var t,l;const n=()=>{var o;return(o=this.sections)==null?void 0:o.map((d,m)=>{const p={active:d.active,href:d.href,link:d.link,to:d.to};return e(Se,null,[e(xn,p,{default:()=>[d.content]}),this.sections.length!==m+1&&e(Tn,{icon:this.icon},{default:()=>[a(" / ")]})])})};return e("div",{class:this.computedClass},[((l=(t=this.$slots).default)==null?void 0:l.call(t))||n()])}}),mk={install(t){t.component(ru.name,ru),t.component(Tn.name,Tn),t.component(xn.name,xn)}},du=B({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(t){return{computedClass:F(()=>W("ui",t.size,S(t.error,"error"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.reply,"reply"),S(t.success,"success"),S(t.unstackable,"unstackable"),S(t.warning,"warning"),"form"))}},render(){var t,l;return e("form",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),cu=B({name:"SuiFormField",props:{error:Boolean,inline:Boolean,label:String,placeholder:String,required:Boolean,type:String},setup(t){const l=F(()=>W(S(t.error,"error"),S(t.inline,"inline"),S(t.required,"required"),"field")),n=t.type||"text";return{computedClass:l,inputType:n}},render(){var t,l;return this.label?e("div",{class:this.computedClass},[e("label",null,[this.label]),e("input",{type:this.inputType,placeholder:this.placeholder},null)]):e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),mu=B({name:"SuiFormGroup",props:{widths:String},setup(t){return{computedClass:F(()=>W(Te(t.widths,"width"),"fields"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),fu=B({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&e("div",{class:"field"},[e("label",null,[this.label]),e("textarea",{placeholder:this.placeholder},null)]),e("div",{class:"field"},[e("textarea",{placeholder:this.placeholder},null)])}}),fk={install(t){t.component(du.name,du),t.component(cu.name,cu),t.component(mu.name,mu),t.component(fu.name,fu)}},pu=B({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(t){return{computedClass:F(()=>W("ui",t.container&&"container",S(t.centered,"centered"),S(t.compact,"compact"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),Te(t.reversed,"reversed"),Te(t.verticalAlign,"aligned"),$e(t.celled,"celled"),$e(t.divided,"divided"),$e(t.padded,"padded"),$e(t.relaxed,"relaxed"),ji(t.textAlign),It(t.columns,"column"),"grid"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),gu=B({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(t){return{computedClass:F(()=>W(t.color,Te(t.floated,"floated"),Te(t.only,"only"),ji(t.textAlign),It(t.width,"wide"),Yi(t.mobile,"mobile"),Yi(t.tablet,"tablet"),Yi(t.computer,"computer"),Yi(t.largeScreen,"large screen"),Yi(t.widescreen,"widescreen"),"column"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),hu=B({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(t){return{computedClass:F(()=>W(t.color,S(t.centered,"centered"),S(t.stretched,"stretched"),Te(t.only,"only"),It(t.columns,"column"),ji(t.textAlign),"row"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),pk={install(t){t.component(pu.name,pu),t.component(gu.name,gu),t.component(hu.name,hu)}},_u=B({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(t){return{computedClass:F(()=>W("ui",t.color,t.size,S(t.borderless,"borderless"),S(t.compact,"compact"),S(t.fixed,"fixed"),S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.pagination,"pagination"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.stackable,"stackable"),S(t.text,"text"),S(t.vertical,"vertical"),$e(t.attached,"attached"),$e(t.floated,"floated"),$e(t.icon,"icon"),$e(t.tabular,"tabular"),It(t.widths,"item"),"menu"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),bu=B({name:"SuiMenuHeader",props:{as:String,content:String},setup(t,{slots:l}){let n=t.as||"div";return()=>e(n,{class:"header"},{default:()=>{var o;return[t.content||((o=l.default)==null?void 0:o.call(l))]}})}}),vu=B({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(t,{slots:l}){let n=t.as||"a";t.header&&(n="div"),t.as==="router-link"&&(n=_(t.as));const o=F(()=>W(t.color,t.position,S(t.action,"action"),S(t.active,"active"),S(t.browse,"browse"),S(t.disabled,"disabled"),S(t.header,"header"),S(t.link,"link"),$e(t.fitted,"fitted"),"item"));return()=>e(n,{class:o.value},{default:()=>{var d;return[t.name||((d=l.default)==null?void 0:d.call(l))]}})}}),yu=B({name:"SuiMenuMenu",props:{position:String},setup(t){const{position:l}=t;return{computedClass:F(()=>W(l,"menu"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),gk={install(t){t.component(_u.name,_u),t.component(bu.name,bu),t.component(vu.name,vu),t.component(yu.name,yu)}},Cu=B({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.color,t.size,S(t.compact,"compact"),S(t.error,"error"),S(t.floating,"floating"),S(t.hidden,"hidden"),S(t.icon,"icon"),S(t.info,"info"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.success,"success"),S(t.visible,"visible"),S(t.warning,"warning"),$e(t.attached,"attached"),"message"))}},render(){var t,l;return e("div",{class:this.computedClass},[(this.header||this.content)&&e(En,null,{default:()=>[e(Bn,null,{default:()=>[this.header]}),e("p",null,[this.content])]}),(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),En=B({name:"SuiMessageContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Bn=B({name:"SuiMessageHeader",render(){var t,l;return U("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),wu=B({name:"SuiMessageItem",render(){var t,l;return U("li",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Au=B({name:"SuiMessageList",render(){var t,l;return U("ul",{class:"list"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),hk={install(t){t.component(Cu.name,Cu),t.component(En.name,En),t.component(Bn.name,Bn),t.component(wu.name,wu),t.component(Au.name,Au)}},Su=B({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.color,t.size,S(t.celled,"celled"),S(t.collapsing,"collapsing"),S(t.definition,"definition"),S(t.fixed,"fixed"),S(t.inverted,"inverted"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.stackable,"stackable"),S(t.striped,"striped"),S(t.structured,"structured"),S(t.unstackable,"unstackable"),$e(t.attached,"attached"),$e(t.basic,"basic"),$e(t.compact,"compact"),$e(t.padded,"padded"),It(t.columns,"column"),"table"))}},render(){var t,l;return e("table",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ku=B({name:"SuiTableBody",render(){var t,l;return U("tbody",{},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),$u=B({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:F(()=>W(t.color,S(t.active,"active"),S(t.collapsing,"collapsing"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.warning,"warning"),Te(t.verticalAlign,"aligned"),Te(t.marked,"marked"),ji(t.textAlign)))}},render(){var t,l,n,o;return this.computedClass?e("td",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("td",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Tu=B({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(t){const{fullWidth:l}=t;return{computedClass:F(()=>W(S(l,"full-width")))}},render(){var t,l,n,o;return this.computedClass?U("tfoot",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("tfoot",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),xu=B({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(t){return{computedClass:F(()=>W(S(t.fullWidth,"full-width")))}},render(){var t,l,n,o;return this.computedClass?U("thead",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("thead",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),Eu=B({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(t){return{computedClass:F(()=>W(S(t.singleLine,"single line"),Te(t.textAlign,"aligned"),It(t.width,"wide")))}},render(){var t,l,n,o;return this.computedClass?e("th",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("th",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Bu=B({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:F(()=>W(t.color,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.warning,"warning"),Te(t.textAlign,"aligned"),Te(t.verticalAlign,"aligned")))}},render(){var t,l,n,o;return this.computedClass?e("tr",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("tr",null,[(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),_k={install(t){t.component(Su.name,Su),t.component(ku.name,ku),t.component($u.name,$u),t.component(Tu.name,Tu),t.component(xu.name,xu),t.component(Eu.name,Eu),t.component(Bu.name,Bu)}},bk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Breadcrumb:mk,Form:fk,Grid:pk,Menu:gk,Message:hk,Table:_k}),Ru=B({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(t){return{computedClass:F(()=>W("ui",t.unit,S(t.centered,"centered"),S(!!t.test,"test"),"ad"))}},render(){var t,l,n,o;return this.$props.test?U("div",{class:this.computedClass,"data-text":this.$props.test},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),vk={install(t){t.component(Ru.name,Ru)}},Pu=B({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.color,S(t.centered,"centered"),S(t.fluid,"fluid"),S(t.horizontal,"horizontal"),S(t.link,"link"),S(t.raised,"raised"),"card"))}},render(){var t,l,n,o;return this.$props.href||this.$props.link?U("a",{class:this.computedClass,href:this.$slots.href},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("div",{class:this.computedClass},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),zu=B({name:"SuiCardContent",props:{extra:Boolean},setup(t){return{computedClass:F(()=>W(S(t.extra,"extra"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Mu=B({name:"SuiCardDescription",props:{textAlign:String},setup(t){return{computedClass:F(()=>W(Te(t.textAlign,"aligned"),"description"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Du=B({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(t){return{computedClass:F(()=>W("ui",S(t.centered,"centered"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),It(t.itemsPerRow,""),"cards"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Fu=B({name:"SuiCardHeader",props:{textAlign:String},setup(t){return{computedClass:F(()=>W(Te(t.textAlign,"aligned"),"header"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Iu=B({name:"SuiCardMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),yk={install(t){t.component(Pu.name,Pu),t.component(zu.name,zu),t.component(Mu.name,Mu),t.component(Du.name,Du),t.component(Fu.name,Fu),t.component(Iu.name,Iu)}},Nu=B({name:"SuiComment",render(){var t,l;return U("div",{class:"comment"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Vu=B({name:"SuiCommentAction",props:{active:Boolean},setup(t){const{active:l}=t;return{computedClass:F(()=>W(S(l,"active")))}},render(){var t,l,n,o;return this.computedClass?U("a",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("a",{},(o=(n=this.$slots).default)==null?void 0:o.call(n))}}),Lu=B({name:"SuiCommentActions",render(){var t,l;return U("div",{class:"actions"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ou=B({name:"SuiCommentAuthor",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return U(n,{class:"author"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Hu=B({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let t=this.$props.as||"div";return U(t,{class:"avatar"},U("img",{src:this.$props.src}))}}),ju=B({name:"SuiCommentContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qu=B({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(t){return{computedClass:F(()=>W("ui",t.size,S(t.collapsed,"collapsed"),S(t.inverted,"inverted"),S(t.minimal,"minimal"),S(t.threaded,"threaded"),"comments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Uu=B({name:"SuiCommentMetadata",render(){var t,l;return U("div",{class:"metadata"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ju=B({name:"SuiCommentText",render(){var t,l;return U("div",{class:"text"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ck={install(t){t.component(Nu.name,Nu),t.component(Vu.name,Vu),t.component(Lu.name,Lu),t.component(Ou.name,Ou),t.component(Hu.name,Hu),t.component(ju.name,ju),t.component(qu.name,qu),t.component(Uu.name,Uu),t.component(Ju.name,Ju)}},Gu=B({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(t){return{computedClass:F(()=>W("ui",t.size,S(t.inverted,"inverted"),"feed"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Yu=B({name:"SuiFeedContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Wu=B({name:"SuiFeedDate",render(){var t,l;return U("div",{class:"date"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ku=B({name:"SuiFeedEvent",render(){var t,l;return U("div",{class:"event"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Qu=B({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(t){const{images:l,text:n}=t;return{computedClass:F(()=>W(S(l,"images"),S(n,"text"),"extra"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Xu=B({name:"SuiFeedLabel",render(){var t,l;return U("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Zu=B({name:"SuiFeedLike",render(){var t,l;return U("a",{class:"like"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),er=B({name:"SuiFeedMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),tr=B({name:"SuiFeedSummary",render(){var t,l;return U("div",{class:"summary"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ir=B({name:"SuiFeedUser",render(){var t,l;return U("a",{class:"user"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),wk={install(t){t.component(Gu.name,Gu),t.component(Yu.name,Yu),t.component(Wu.name,Wu),t.component(Ku.name,Ku),t.component(Qu.name,Qu),t.component(Xu.name,Xu),t.component(Zu.name,Zu),t.component(er.name,er),t.component(tr.name,tr),t.component(ir.name,ir)}},lr=B({name:"SuiItem",render(){var t,l;return U("div",{class:"item"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ar=B({name:"SuiItemContent",props:{verticalAlign:String},setup(t){const{verticalAlign:l}=t;return{computedClass:F(()=>W(Te(l,"aligned"),"content"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),nr=B({name:"SuiItemDescription",render(){var t,l;return U("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),sr=B({name:"SuiItemExtra",render(){var t,l;return U("div",{class:"extra"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),or=B({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(t){return{computedClass:F(()=>W("ui",S(t.divided,"divided"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.unstackable,"unstackable"),$e(t.relaxed,"relaxed"),"items"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ur=B({name:"SuiItemHeader",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return U(n,{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),rr=B({name:"SuiItemImage",props:{size:String},setup(t){return{computedClass:F(()=>W(t.size,"image"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),dr=B({name:"SuiItemMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ak={install(t){t.component(lr.name,lr),t.component(ar.name,ar),t.component(nr.name,nr),t.component(sr.name,sr),t.component(or.name,or),t.component(ur.name,ur),t.component(rr.name,rr),t.component(dr.name,dr)}},oa=B({name:"SuiStatisticLabel",props:{content:String},render(){var t,l;return this.$props.content?U("div",{class:"label"},this.$props.content):U("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ua=B({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(t){return{computedClass:F(()=>W(S(t.text,"text"),"value"))}},render(){var t,l;return this.$props.content?U("div",{class:this.computedClass},this.$props.content):U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),cr=B({name:"SuiStatistic",components:{StatisticLabel:oa,StatisticValue:ua},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(t){const l=ze("ui",!0);return{computedClass:F(()=>W(l&&"ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.text,"text"),$e(t.floated,"floated"),"statistic"))}},render(){var t,l,n,o,d,m;let p=[];return this.$props.value&&p.push(U(ua,{content:this.$props.value},(l=(t=this.$slots).default)==null?void 0:l.call(t))),this.$props.label&&p.push(U(oa,{content:this.$props.label},(o=(n=this.$slots).default)==null?void 0:o.call(n))),U("div",{class:this.computedClass},p.length>0?p:(m=(d=this.$slots).default)==null?void 0:m.call(d))}}),mr=B({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(t){return We("ui",!1),{computedClass:F(()=>W("ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),It(t.widths,""),"statistics"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Sk={install(t){t.component(cr.name,cr),t.component(mr.name,mr),t.component(oa.name,oa),t.component(ua.name,ua)}},kk=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Advertisement:vk,Card:yk,Comment:Ck,Feed:wk,Item:Ak,Statistic:Sk}),fr=B({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(t){const l=t.multiple?L([]):L(-1),n=m=>t.multiple?l.value.includes(m):l.value===m,o=m=>{const p=n(m);t.multiple?p?l.value=l.value.filter(f=>f!==m):l.value.push(m):l.value=p?-1:m};return We("isTabActive",n),We("updateActiveIndex",o),{computedClass:F(()=>W("ui",S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.styled,"styled"),"accordion"))}},render(){var t,l;const n=o=>(o.forEach((d,m)=>{d.props.index=m}),o);return e("div",{class:this.computedClass},[n((l=(t=this.$slots).default)==null?void 0:l.call(t))])}}),pr=B({name:"SuiAccordionAccordion",render(){var t,l;return U("div",{class:"accordion"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Rn=B({name:"SuiAccordionContent",props:{active:Boolean},setup(t){return{computedClass:F(()=>W(S(t.active,"active"),"content"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),gr=B({name:"SuiAccordionTab",props:{index:Number,title:String},setup(t){const l=ze("isTabActive"),n=ze("updateActiveIndex"),o=F(()=>W(S(l(t.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:n,titleClass:o}},render(){return e(Se,null,[e("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[e(_i,{name:"dropdown"},null),this.title]),e(Rn,{active:this.isTabActive(this.index)},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})])}}),hr=B({name:"SuiAccordionTitle",props:{active:Boolean},setup(t){return{computedClass:F(()=>W(S(t.active,"active"),"title"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),$k={install(t){t.component(fr.name,fr),t.component(pr.name,pr),t.component(Rn.name,Rn),t.component(gr.name,gr),t.component(hr.name,hr)}};const Tk=(t,l,n)=>{t.clickOutside=o=>{t===o.target||t.contains(o.target)||l.value(o,t)},document.body.addEventListener("click",t.clickOutside)},xk=(t,l,n)=>{document.body.removeEventListener("click",t.clickOutside)};var gs={mounted:Tk,unmounted:xk};function Ek(t,l={}){const n=L(t.value?"open":"closed"),o=()=>n.value=t.value?"open":"closed";at(t,f=>{n.value=f?"opening":"closing"});const d=f=>{f.addEventListener("animationend",o,!0)},m=f=>{f&&f.removeEventListener("animationend",o)},p=F((f="scale")=>{switch(n.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:d,removeAnimation:m,computeAnimationClass:p}}var Bk=B({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(t,{emit:l}){const n=L(!1),o=()=>{t.disabled||(n.value=!0)},d=()=>n.value=!1,m=()=>{t.disabled||l("select-day",t.date)},p=()=>{let s=new Date;return s.getFullYear()===t.date.year&&s.getMonth()===t.date.month&&s.getDate()===t.date.day},f=F(()=>W("link",S(n.value,"focus"),S(t.active&&!t.disabled,"active"),S(t.disabled,"adjacent disabled"),S(p(),"today")));return{onMouseEnter:o,onMouseLeave:d,onClick:m,computedClass:f}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:pt(this.onClick,["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Rk=B({name:"SuiCalendarDateTable",setup(){const{calendarDays:t,updateSelectMode:l,set:n,add:o,subtract:d,selectedDate:m,setSelectedDate:p,selectType:f,updateVisible:s,formatDate:u}=ze(Zt);return{calendarDays:t,isEqualDay:h=>{if(!m.value)return!1;const v=m.value;return v.getFullYear()===h.year&&v.getMonth()===h.month&&v.getDate()===h.day},onSelectDay:h=>{if(n(h.year,"years"),n(h.month,"months"),n(h.day,"days"),f.value==="date"){let v=new Date(h.year,h.month,h.day);p(v),s(!1);return}l("hour")},updateSelectMode:l,formatDate:u,add:o,subtract:d}},render(){const t=()=>this.calendarDays.map((l,n)=>e("tr",null,[l.map(o=>e(Bk,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return e("table",{class:"ui celled center aligned unstackable table day seven column"},[e("thead",null,[e("tr",null,[e("th",{colspan:7},[e("span",{class:"link",onClick:pt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"months")},[e("i",{class:"chevron right icon"},null)])])]),e("tr",null,[e("th",null,[a("S")]),e("th",null,[a("M")]),e("th",null,[a("T")]),e("th",null,[a("W")]),e("th",null,[a("T")]),e("th",null,[a("F")]),e("th",null,[a("S")])])]),e("tbody",null,[t()])])}}),me=B({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(t){const l=L(!1),n=()=>l.value=!0,o=()=>l.value=!1,d=F(()=>W("link",S(t.active,"active"),S(t.today,"today"),S(l.value,"focus")));return{onMouseEnter:n,onMouseLeave:o,computedClass:d}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:pt(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Pk=B({name:"SuiCalendarMonthTable",setup(){const{state:t,set:l,add:n,subtract:o,selectedDate:d,updateSelectMode:m}=ze(Zt);return{state:t,add:n,subtract:o,updateSelectMode:m,isActive:u=>d.value?t.year===d.value.getFullYear()&&t.month===u:!1,isThisMonth:u=>{let g=new Date;return u===g.getMonth()&&t.year===g.getFullYear()},onClickCell:u=>{l(u,"months"),m("day")}}},render(){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((n,o)=>e("tr",null,[e(me,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[t[o*3]]}),e(me,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[t[o*3+1]]}),e(me,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[t[o*3+2]]})]));return e("table",{class:"ui celled center aligned unstackable table month three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:pt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"years")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[l()])])}}),zk=B({name:"SuiCalendarYearTable",setup(t){const{state:l,set:n,add:o,subtract:d,selectedDate:m,updateSelectMode:p}=ze(Zt),f=()=>o(10,"years"),s=()=>d(10,"years"),u=F(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:p,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:u,isActive:v=>m.value?v===m.value.getFullYear():!1,isThisYear:v=>v===new Date().getFullYear(),onClickCell:v=>{n(v,"years"),p("day")}}},render(){return e("table",{class:"ui celled center aligned unstackable table year three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:pt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,a(" - "),this.headerStartYear+11]),e("span",{class:"prev link",onClick:this.movePrevTwelveYears},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.moveNextTwelveYears},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),e(me,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),e(me,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),e("tr",null,[e(me,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),e(me,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),e(me,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),e("tr",null,[e(me,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),e(me,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),e(me,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),e("tr",null,[e(me,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),e(me,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),e(me,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),Mk=B({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:t,state:l,set:n,add:o,subtract:d,formatDate:m,selectedDate:p}=ze(Zt);return{updateSelectMode:t,formatDate:m,onPrevClick:()=>d(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:c=>{n(c,"hours"),t("minute")},isActive:c=>{if(!p.value)return!1;let h=p.value.getFullYear(),v=p.value.getMonth(),r=p.value.getDate(),y=p.value.getHours();return l.year===h&&l.month===v&&l.day===r&&c===y}}},render(){return e("table",{class:"ui celled center aligned unstackable table hour four column"},[e("thead",null,[e("tr",null,[e("th",{colspan:4},[e("span",{class:"link",onClick:pt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:this.onPrevClick},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.onNextClick},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[a("12:00 AM")]}),e(me,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[a("1:00 AM")]}),e(me,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[a("2:00 AM")]}),e(me,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[a("3:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[a("4:00 AM")]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[a("5:00 AM")]}),e(me,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[a("6:00 AM")]}),e(me,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[a("7:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[a("8:00 AM")]}),e(me,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[a("9:00 AM")]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[a("10:00 AM")]}),e(me,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[a("11:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[a("12:00 PM")]}),e(me,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[a("1:00 PM")]}),e(me,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[a("2:00 PM")]}),e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[a("3:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[a("4:00 PM")]}),e(me,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[a("5:00 PM")]}),e(me,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[a("6:00 PM")]}),e(me,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[a("7:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[a("8:00 PM")]}),e(me,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[a("9:00 PM")]}),e(me,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[a("10:00 PM")]}),e(me,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[a("11:00 PM")]})])])])}});function ht(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}var Dk=B({name:"SuiCalendarMinuteTable",setup(){const{state:t,set:l,add:n,subtract:o,formatDate:d,updateSelectMode:m,updateVisible:p,selectedDate:f}=ze(Zt);return{add:n,subtract:o,formatDate:d,updateSelectMode:m,getTimeLabel:c=>{let h=t.hour%12,v=t.hour>12?"PM":"AM",r=c.toString().padStart(2,"0");return t.hour===0?`12:${r} AM`:t.hour===12?`12:${r} PM`:`${h}:${r} ${v}`},onClickCell:c=>{l(c,"minutes"),f.value=new Date(t.year,t.month,t.day,t.hour,t.minute),p(!1)},isActive:c=>{if(!f.value)return!1;let h=f.value.getFullYear(),v=f.value.getMonth(),r=f.value.getDate(),y=f.value.getHours(),A=f.value.getMinutes();return t.year===h&&t.month===v&&t.day===r&&t.hour===y&&c===A}}},render(){let t,l,n,o,d,m,p,f,s,u,g,c;return e("table",{class:"ui celled center aligned unstackable table minute three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:pt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"days")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},ht(t=this.getTimeLabel(0))?t:{default:()=>[t]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},ht(l=this.getTimeLabel(5))?l:{default:()=>[l]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},ht(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),e("tr",null,[e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},ht(o=this.getTimeLabel(15))?o:{default:()=>[o]}),e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},ht(d=this.getTimeLabel(20))?d:{default:()=>[d]}),e(me,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},ht(m=this.getTimeLabel(25))?m:{default:()=>[m]})]),e("tr",null,[e(me,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},ht(p=this.getTimeLabel(30))?p:{default:()=>[p]}),e(me,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},ht(f=this.getTimeLabel(35))?f:{default:()=>[f]}),e(me,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},ht(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),e("tr",null,[e(me,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},ht(u=this.getTimeLabel(45))?u:{default:()=>[u]}),e(me,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},ht(g=this.getTimeLabel(50))?g:{default:()=>[g]}),e(me,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},ht(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),Fk=B({name:"SuiCalendarBody",setup(){const t=L(null),{visible:l,selectMode:n}=ze(Zt),{setupAnimation:o,removeAnimation:d,computeAnimationClass:m}=Ek(l);Xt(()=>o(t.value)),wi(()=>d(t.value));const p=F(()=>W("ui popup calendar","bottom left","transition",m.value));return{rootRef:t,computedClass:p,selectMode:n}},render(){const t=()=>{switch(this.selectMode){case"day":return e(Rk,null,null);case"month":return e(Pk,null,null);case"year":return e(zk,null,null);case"hour":return e(Mk,null,null);case"minute":return e(Dk,null,null)}};return e("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[t()])}}),Ik=B({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(t){const{visible:l,updateVisible:n,updateSelectMode:o,set:d,state:m,formatCalendarDate:p}=ze(Zt);return{visible:l,formatCalendarDate:p,onClick:()=>{l.value||(o("day"),t.value&&(d(t.value.getFullYear(),"years"),d(t.value.getMonth(),"months"))),n(!l.value)}}},render(){return e("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}});const Nk=(t,l)=>{let n=new Date;n.setDate(1),n.setMonth(l),n.setFullYear(t);let o=n.getDay();return o>=7?o-7:o},Vk=(t,l)=>{let n,o;return l===0?(n=11,o=t-1):(n=l-1,o=t),32-new Date(o,n,32).getDate()},Wa=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t];function Lk(){const t=L(!1),l=(y=!1)=>t.value=y,n=new Date;function o(y){if(!y)return;let A=y.getFullYear(),$=Wa(y.getMonth()),b=y.getDate(),w=y.getHours(),k=y.getMinutes(),T=w>11?"PM":"AM";w=w%12,w===0&&(w=12,T="AM");let E=k.toString().padStart(2,"0");return`${$} ${b}, ${A} ${w}:${E} ${T}`}const d=L("default"),m=L("day");function p(y){m.value=y}const f=L(null),s=y=>{f.value=y},u=Mt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),g=(y,A)=>{switch(A){case"years":u.year=y;break;case"months":u.month=y;break;case"days":u.day=y;break;case"hours":u.hour=y;break;case"minutes":u.minute=y}},c=(y,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()+y);break;case"months":$.setMonth($.getMonth()+y);break;case"days":$.setDate($.getDate()+y);break;case"hours":$.setHours($.getHours()+y);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},h=(y,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()-y);break;case"months":$.setMonth($.getMonth()-y);break;case"days":$.setDate($.getDate()-y);break;case"hours":$.setHours($.getHours()-y);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},v=(y="default")=>y==="date"?`${Wa(u.month)} ${u.year}`:`${Wa(u.month)} ${u.day}, ${u.year}`,r=F(()=>{let y=u.month,A=u.year;y>11&&(y=y%11-1,A+=1);let $=[],b=Nk(A,y),w=32-new Date(A,y,32).getDate(),k=Vk(A,y),T=1;for(let E=0;E<6;E++){let z=[];if(E===0){for(let P=k-b+1;P<=k;P++){let I=y===0?11:y-1,X=y===0?A-1:A;z.push({day:P,month:I,year:X,currentMonth:!1})}let M=7-z.length;for(let P=0;P<M;P++)z.push({day:T,month:y,year:A,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>w){let P=y===11?0:y+1,I=y===11?A+1:A;z.push({day:T-w,month:P,year:I,currentMonth:!1})}else z.push({day:T,month:y,year:A,currentMonth:!0});T++}$.push(z)}return $});return{visible:t,updateVisible:l,calendarDays:r,formatCalendarDate:o,selectMode:m,updateSelectMode:p,selectType:d,selectedDate:f,setSelectedDate:s,state:u,set:g,add:c,subtract:h,formatDate:v}}const Zt=Symbol("useCalendar");var _r=B({name:"SuiCalendar",directives:{clickoutside:gs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(t,{emit:l}){const n=Lk();We(Zt,n);const{updateVisible:o,selectedDate:d}=n;return at(d,m=>{l("update:modelValue",m)}),{updateVisible:o}},render(){return va(e("div",{class:"ui calendar"},[e("div",{class:"ui input left icon"},[e(Fk,null,null),e("i",{class:"calendar icon"},null),e(Ik,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[ba("clickoutside"),()=>this.updateVisible(!1)]])}}),Ok={install:t=>{t.component(_r.name,_r)}},br=B({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(t,{emit:l}){const n=F(()=>W("ui",!t.label&&"fitted",S(t.disabled,"disabled"),S(t.indeterminate,"indeterminate"),S(t.readOnly,"read-only"),S(t.slider,"slider"),S(t.toggle,"toggle"),"checkbox")),o=F(()=>Array.isArray(t.modelValue)?t.modelValue.includes(t.value):t.modelValue);return{computedClass:n,checked:o,onClick:m=>{if(t.disabled||t.readOnly)return;let p;t.value?o.value?p=t.modelValue.filter(f=>t.value!==f):p=t.modelValue?[...t.modelValue,t.value]:[t.value]:p=!t.modelValue,l("change",m),l("click",m),l("update:modelValue",p)}}},render(){return e("div",{class:this.computedClass,onClick:this.onClick},[e("input",{type:"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),e("label",null,[this.label])])}}),Hk={install(t){t.component(br.name,br)}},vr=B({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(t){return{computedClass:F(()=>W("ui",S(t.active,"active"),S(t.inverted,"inverted"),S(t.page,"page"),S(t.simple,"simple"),Te(t.verticalAlign,"aligned"),"dimmer"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),yr=B({name:"SuiDimmerDimmable",components:{Segment:sa},props:{blurring:Boolean},setup(t){return{computedClass:F(()=>W(S(t.blurring,"blurring"),"dimmable"))}},render(){var t,l;return U(sa,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),jk={install(t){t.component(vr.name,vr),t.component(yr.name,yr)}};const qk=(t,l)=>t.map(n=>n[l]);var Uk=B({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(t){return{computedClass:F(()=>W(S(t.filtered,"filtered"),S(!t.text&&!t.item||Array.isArray(t.item)&&t.item.length===0,"default"),"text"))}},render(){var t,l;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:m,text:p}=this.item;n=e(Se,null,[m&&e("i",{class:`${m} flag`},null),p])}else n=this.item;else n=this.text||this.placeholder;const o=typeof this.item=="object"?(t=this.item)==null?void 0:t.image:null,d=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return e(Se,null,[e("div",{class:this.computedClass},[o&&e(na,o,null),d&&e(Vi,d,null),n]),e("i",{class:`${this.icon} icon`},null),this.$props.clearable&&e("i",{class:"remove icon",onClick:pt(()=>this.$emit("remove"),["stop"])},null)])}});const Jk=t=>{const l=Mt({visible:!1,animating:!1,direction:"down",multiple:t.multiple});return at(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function Gk(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}var Cr=B({name:"SuiDropdown",directives:{clickoutside:gs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(t,{emit:l}){const n=Jk(t);We("useDropdown",n);const{state:o,show:d,hide:m}=n,p=F(()=>W("ui",S(t.button,"button"),S(t.clearable,"clearable"),S(t.compact,"compact"),S(t.floating,"floating"),S(t.fluid,"fluid"),S(!!t.icon,"icon"),S(t.inline,"inline"),S(t.item,"item"),S(t.labeled,"labeled"),S(t.multiple,"multiple"),S(t.scrolling,"scrolling"),S(t.selection,"selection"),S(t.search,"search"),S(t.simple,"simple"),$e(t.pointing,"pointing"),"dropdown",S(o.visible,"active visible"),S(o.direction==="up","upward"))),f=()=>o.visible?m():d(),s=()=>{t.search&&h.value&&h.value.focus(),d()},u=()=>m(),g=L(""),c=F(()=>t.options.filter(A=>typeof A=="string"?A.toLowerCase().includes(g.value.toLowerCase()):t.multiple&&Array.isArray(t.modelValue)?typeof A=="object"?!qk(t.modelValue,"text").includes(A.text):t.modelValue.includes(A):A.text.toLowerCase().includes(g.value.toLowerCase()))),h=L(null),v=A=>g.value=A.target.value,r=A=>{if(g.value="",t.multiple){let $=Array.isArray(t.modelValue)?[...t.modelValue,A]:[A];return l("update:modelValue",$)}return l("update:modelValue",A)},y=A=>{if(Array.isArray(t.modelValue)){const $=t.modelValue.findIndex(b=>b===A);if($>-1){let b=Object.assign(t.modelValue);b.splice($,1),l("update:modelValue",b)}}};return We("selection",t.selection),{computedClass:p,onClick:f,openMenu:s,closeMenu:u,filteredText:g,filteredOptions:c,inputRef:h,onInput:v,onSelect:r,removeItem:y}},render(){var t,l;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(p=>typeof p=="object"?e("a",{class:"ui label"},[p.flag&&e("i",{class:`${p.flag} flag`},null),p.text,e("i",{class:"delete icon",onClick:pt(()=>this.removeItem(p),["stop"])},null)]):e("a",{class:"ui label"},[p,e("i",{class:"delete icon",onClick:pt(()=>this.removeItem(p),["stop"])},null)]))},o=()=>this.filteredOptions.filter(p=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(p):!0).map(p=>e(Pn,{item:p,active:this.$props.modelValue&&typeof p=="object"?p.text===this.$props.modelValue.text:p===this.$props.modelValue,text:typeof p=="object"?p.text:p,flag:typeof p=="object"&&Object.keys(p).includes("flag")?p.flag:"",image:p.image,label:p.label,disabled:p.disabled,onSelect:this.onSelect},null)),d=()=>{let p={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return e(Uk,$l(p,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},m=()=>{let p;return e(zn,{search:this.$props.searchInMenu,onSearch:this.onInput},Gk(p=o())?p:{default:()=>[p]})};return va(e("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&e("input",{ref:p=>this.inputRef=p,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:p=>this.onInput(p)},null),this.search&&this.multiple&&e("span",{class:"sizer"},null),d(),((l=(t=this.$slots).default)==null?void 0:l.call(t))||m()]),[[ba("clickoutside"),this.closeMenu]])}}),Pn=B({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(t,{emit:l}){const{state:n,hide:o}=ze("useDropdown");return{computedClass:F(()=>W(S(t.active,"active"),S(t.disabled,"disabled"),"item")),onClick:()=>{n.multiple||o(),l("select",t.item?t.item:t.text)}}},render(){return e("div",{class:this.computedClass,onClick:pt(this.onClick,["stop"])},[this.flag&&e("i",{class:`${this.flag} flag`},null),this.icon&&e("i",{class:`${this.icon} icon`},null),this.image&&e(na,this.image,null),this.label&&e(Vi,this.label,null),this.description&&e("span",{class:"description"},[this.description]),this.text])}}),zn=B({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(t,{emit:l,slots:n}){const{state:o}=ze("useDropdown"),d=L(null),m=F(()=>{let s=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return W("menu","transition",S(o.visible,"visible"),S(!o.visible&&!o.animating,"hidden"),S(o.animating,s()))});at(()=>o.visible,s=>{if(!s||!d.value)return;let u=d.value.parentElement;const{top:g,height:c}=u==null?void 0:u.getBoundingClientRect(),h=g-p.value.length*37,v=document.documentElement.clientHeight-g-c-p.value.length*37;o.direction=h>v?"up":"down"});const p=F(()=>{var s;let u=[],g=(s=n.default)==null?void 0:s.call(n);return g&&g.forEach(c=>{c.type.name==="SuiSelectItem"&&u.push(c)}),u});return{container:d,computedClass:m,onSearchInput:s=>l("search",s)}},render(){var t,l,n,o;const d=()=>e(Se,null,[e("div",{class:"ui left icon input",onClick:pt(()=>{},["stop"])},[e("input",{type:"text",onInput:m=>this.onSearchInput(m)},null),e("i",{class:"search icon"},null)]),e("div",{class:"ui divider"},null)]);return e("div",{ref:m=>this.container=m,class:this.computedClass},[this.$slots.header&&e("div",{class:"header"},[(l=(t=this.$slots).header)==null?void 0:l.call(t)]),this.$props.search&&d(),(o=(n=this.$slots).default)==null?void 0:o.call(n)])}}),Yk={install(t){t.component(Cr.name,Cr),t.component(Pn.name,Pn),t.component(zn.name,zn)}},wr=B({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(t){const l=L(t.active),n=()=>{l.value=!l.value},o=()=>t.source==="youtube"?[`//www.youtube.com/embed/${t.id}`,"?autohide=true",`&amp;autoplay=${t.autoplay}`,"&amp;jsapi=false"].join(""):t.url,d=F(()=>W("ui",t.aspectRatio,S(l.value,"active"),"embed"));return{active:l,getSrc:o,clickHandler:n,computedClass:d}},render(){let t=[U("i",{class:"video play icon"}),U("img",{class:"placeholder",src:this.placeholder})];return this.active&&t.push(U("div",{class:"embed"},U("iframe",{src:this.getSrc()}))),U("div",{class:this.computedClass,onClick:this.clickHandler},t)}}),Wk={install(t){t.component(wr.name,wr)}},Ar=B({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,modelValue:Boolean,size:String},setup(t,{emit:l}){const n=L(t.modelValue?"open":"closed"),o=L(null),d=F(()=>n.value!=="closed");at(()=>t.modelValue,h=>{n.value=h?"opening":"closing"});const m=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},p=()=>n.value=t.modelValue?"open":"closed";Xt(()=>{var h;(h=o.value)==null||h.addEventListener("animationend",p,!0)}),wi(()=>{var h;(h=o.value)==null||h.removeEventListener("animationend",p)});const f=F(()=>W("ui","page modals dimmer transition",m(n.value,"fade"))),s=F(()=>({display:d.value?"flex !important":"none !important",animationDuration:"500ms"})),u=F(()=>({display:d.value?"block !important":"none !important",animationDuration:"500ms"})),g=F(()=>W("ui",t.size,S(t.basic,"basic"),"modal","transition",m(n.value)));return{dimmerClass:f,dimmerStyle:s,modalStyle:u,computedClass:g,close:()=>{l("update:modelValue",!1)},root:o}},render(){return e(ns,{to:"body"},{default:()=>{var t,l;return[e("div",{class:this.dimmerClass,style:this.dimmerStyle,onClick:this.close,ref:n=>this.root=n},[e("div",{class:this.computedClass,style:this.modalStyle,onClick:n=>n.stopPropagation()},[this.closeIcon&&e("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(t=this.$slots).default)==null?void 0:l.call(t)])])]}})}}),Sr=B({name:"SuiModalActions",render(){var t,l;return e("div",{class:"actions"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),kr=B({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(t){return{computedClass:F(()=>W(S(t.image,"image"),S(t.scrolling,"scrolling"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),$r=B({name:"SuiModalDescription",render(){var t,l;return U("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Tr=B({name:"SuiModalHeader",render(){var t,l;return U("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Kk={install(t){t.component(Ar.name,Ar),t.component(Sr.name,Sr),t.component(kr.name,kr),t.component($r.name,$r),t.component(Tr.name,Tr)}},Qk=t=>{const l=L(!1),n=en(t,"position"),o=L(null),d=en(t,"trigger"),m=()=>{l.value=!0,Oi(()=>f())},p=()=>{l.value=!1},f=()=>{if(!o.value||!d.value)return;let s=0,u=0;const g=o.value,c=d.value.$el;g.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:r,height:y}=c.getBoundingClientRect(),A=g.getBoundingClientRect(),{pageXOffset:$,pageYOffset:b}=window;if(n.value.includes("top")?(s=$+v,u=b+h-g.offsetTop-g.offsetHeight):(s=v,u=h+y-A.top),n.value.includes("right")){const w=r-A.width;s=v+w}if(n.value.includes("center")){const w=r/2-A.width/2;s=v+w}n.value==="right center"&&(s=v+r,u=h+y/2-A.top-A.height/2),n.value==="left center"&&(s=v-A.width,u=h+y/2-A.top-A.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${u}px)`};return{show:l,showPopup:m,hidePopup:p,placement:n,popupRef:o,triggerRef:d}},xr=B({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(t,{slots:l}){const{show:n,showPopup:o,hidePopup:d,popupRef:m,triggerRef:p}=Qk(t);bd(()=>{var h,v,r;(h=p.value)!=null&&h.$el&&((v=p.value)==null||v.$el.addEventListener("mouseenter",o),(r=p.value)==null||r.$el.addEventListener("mouseleave",d))});const f=L(n.value?"open":"close");F(()=>f.value!=="closed"),at(()=>n.value,h=>{f.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>f.value=n.value?"open":"closed";Xt(()=>{var h;(h=m.value)==null||h.addEventListener("animationend",u,!0)}),wi(()=>{var h;(h=m.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},c=F(()=>W("ignored ui",t.position,t.size,S(t.basic,"basic"),S(t.flowing,"flowing"),S(t.inverted,"inverted"),$e(t.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>e(ns,{to:"body"},{default:()=>{var h;return[e("div",{ref:m,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[e("div",{class:c.value,style:g},[t.header&&e("div",{class:"header"},[t.header]),e("div",{class:"content"},[t.content?t.content:(h=l.default)==null?void 0:h.call(l)])])])]}})}}),Xk={install(t){t.component(xr.name,xr)}},Er=B({name:"SuiProgress",props:{active:Boolean,attached:String,color:String,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean},setup(t){const l=F(()=>W("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.indicating,"indicating"),S(t.inverted,"inverted"),S(t.success,"success"),S(t.warning,"warning"),Te(t.attached,"attached"),"progress")),n=F(()=>W($e(t.progress,"progress")));return()=>e("div",{class:l.value,"data-percent":t.percent},[e("div",{class:"bar",style:`width: ${t.percent}%; transition-duration: 300ms;`},[t.progress&&e("div",{class:n.value},[t.percent,a("%")])]),t.label&&e("div",{class:"label"},[t.label])])}}),Zk={install(t){t.component(Er.name,Er)}},e$=B({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(t){const l=ze("rating",L(0)),n=ze("updateRating"),o=ze("selectedIndex",L(0)),d=ze("updateSelectedIndex"),m=ze("clearable",!1),p=ze("disabled",!1),f=()=>{if(!p){if(m&&t.index===l.value){n(0),d(0);return}n(t.index)}},s=()=>{p||d(t.index)},u=F(()=>t.index<=l.value),g=F(()=>t.index<=o.value),c=F(()=>W(t.icon,S(u.value,"active"),S(g.value,"selected"),"icon"));return()=>e("i",{class:c.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),Br=B({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(t,{emit:l}){const n=L(t.modelValue||t.defaultRating),o=L(!1),d=L(0),m=g=>{n.value=g,l("update:modelValue",g),l("change",g)},p=g=>d.value=g,f=()=>{t.disabled||(o.value=!0)},s=()=>{t.disabled||(o.value=!1,p(0))},u=F(()=>W("ui",t.color,t.icon,t.size,S(t.disabled,"disabled"),"rating",S(o.value,"selected")));return We("rating",n),We("updateRating",m),We("selectedIndex",d),We("updateSelectedIndex",p),We("clearable",t.clearable),We("disabled",t.disabled),()=>e("div",{class:u.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(t.maxRating)].map((g,c)=>e(e$,{icon:t.icon,index:c+1},null))])}}),t$={install(t){t.component(Br.name,Br)}},Rr=B({name:"SuiSearch",props:{icon:String,placeholder:String},setup(t){return()=>e("div",{class:"ui search"},[e("div",{class:"ui icon input"},[e("input",{type:"text",class:"prompt",placeholder:t.placeholder},null),e("i",{class:"search icon"},null)]),e("div",{class:"results"},null)])}}),i$={install(t){t.component(Rr.name,Rr)}},Pr=B({name:"SuiSidebar",directives:{clickoutside:gs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(t,{emit:l}){const n=Mt({animating:!1}),o=F(()=>{const m=t.direction==="right"||t.direction==="left";return W("ui","sidebar",t.direction,t.animation,S(t.inverted,"inverted"),S(t.visible,"visible"),S(n.animating,"animating"),S(m,"vertical"),$e(t.icon,"icon"),"menu")});return at(()=>t.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),t.dimmed){const m=document.querySelector(".pusher");m&&m.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:m=>{const p=m.path||m.composedPath&&m.composedPath();if(!p)return;p.find(s=>s.classList&&s.classList.contains("pusher"))&&t.visible&&l("update:visible",!1)}}},render(){var t,l;return va(e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]),[[ba("clickoutside"),this.onClickPusher]])}}),l$={install:t=>{t.component(Pr.name,Pr)}};class Ka{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,n){return l.classList.contains(n)}}var zr=B({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(t,{emit:l}){const n=F(()=>W("ui",t.color,t.size,S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.reversed,"reversed"),S(t.vertical,"vertical"),$e(t.labeled,"labeled"),"slider")),o=()=>100*(t.modelValue[0]-t.min)/(t.max-t.min),d=()=>100*(t.modelValue[1]-t.min)/(t.max-t.min),m=F(()=>{if(t.range)return t.reversed&&!t.vertical?{right:o()+"%",width:d()-o()+"%"}:t.vertical?t.reversed?{bottom:o()+"%",height:d()-o()+"%"}:{top:o()+"%",height:d()-o()+"%"}:{left:o()+"%",width:d()-o()+"%"};let N=t.modelValue>t.max?t.max:t.modelValue;return t.reversed?t.vertical?{bottom:"0%",top:`${100-(N-t.min)/(t.max-t.min)*100}%`}:{right:"0%",left:`${100-(N-t.min)/(t.max-t.min)*100}%`}:t.vertical?{top:"0%",bottom:`${100-(N-t.min)/(t.max-t.min)*100}%`}:{left:"0%",right:`${100-(N-t.min)/(t.max-t.min)*100}%`}}),p=F(()=>{let N=t.range?t.modelValue[0]:t.modelValue>t.max?t.max:t.modelValue;return!t.reversed&&t.vertical?{top:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:t.reversed&&t.vertical?{top:"auto",bottom:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.reversed&&!t.vertical?{left:"auto",right:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{left:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),f=F(()=>{let N=t.modelValue[1]>t.max?t.max:t.modelValue[1];return t.reversed&&!t.vertical?{left:"auto",right:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.vertical?t.reversed?{top:"auto",bottom:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{top:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(N-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),s=F(()=>t.labels?t.labels:[...Array(t.max-t.min+1)].map((N,O)=>O*t.step+t.min)),u=()=>{var N,O;let ae=1,Y=g(),we=(t.vertical?(N=h.value)==null?void 0:N.clientHeight:(O=h.value)==null?void 0:O.clientWidth)||0,Ve=1;if(we>0)for(;we/Y*Ve<100;)Y%Ve||(ae=Ve),Ve+=1;return ae},g=()=>Math.round((t.max-t.min)/t.step),c=L(null),h=L(null),v=L(0),r=L(0),y=L(0),A=L(0),$=()=>{if(!c.value)return;let N=c.value.getBoundingClientRect();v.value=N.left+Ka.getWindowScrollLeft(),r.value=N.top+Ka.getWindowScrollTop(),y.value=c.value.offsetWidth,A.value=c.value.offsetHeight},b=L(0),w=N=>{let{pageX:O,pageY:ae}=N.touches?N.touches[0]:N,Y,we;t.vertical?Y=(r.value+A.value-ae)*100/A.value:Y=(O-v.value)*100/y.value,we=(t.max-t.min)*(Y/100)+t.min;const Ve=t.range?t.modelValue[b.value]:t.modelValue||0;we=Ve+Math.round(we/t.step-Ve/t.step)*t.step,t.reversed&&(we=t.max-we+t.min),t.vertical&&(we=t.max-we+t.min),k(we)},k=N=>{let O=N,ae;if(t.range)if(ae=t.modelValue?[...t.modelValue]:[],b.value===0){let Y=t.modelValue?t.modelValue[1]:t.max;O<t.min?O=t.min:O>Y&&(O=Y),ae[0]=O,ae[1]=ae[1]||t.max}else{let Y=t.modelValue?t.modelValue[0]:t.min;O>t.max?O=t.max:O<Y&&(O=Y),ae[0]=ae[0]||t.min,ae[1]=O}else O<t.min&&(O=t.min),O>t.max&&(O=t.max),ae=O;l("update:modelValue",ae),l("change",ae)},T=L(!1),E=N=>T.value=N,z=(N,O=0)=>{E(!0),$(),b.value=O,N.preventDefault()},M=N=>{T.value&&(E(!1),document.removeEventListener("mousemove",P),l("slideend",{event:N,value:t.modelValue}))},P=N=>{T.value&&(w(N),N==null||N.preventDefault())},I=(N,O=0)=>{t.disabled||(z(N,O),document.addEventListener("mousemove",P),document.addEventListener("mouseup",M),N.preventDefault())},X=(N,O=0)=>{switch(b.value=O,N.code){case"ArrowUp":t.vertical&&(t.reversed?H():ue()),N.preventDefault();break;case"ArrowDown":t.vertical&&(t.reversed?ue():H()),N.preventDefault();break;case"ArrowRight":t.reversed?ue():H(),N.preventDefault();break;case"ArrowLeft":t.reversed?H():ue(),N.preventDefault();break}},H=()=>{let N=0;t.range?N=t.modelValue[b.value]+t.step:N=t.modelValue+t.step,k(N)},ue=()=>{let N=0;t.range?N=t.modelValue[b.value]-t.step:N=t.modelValue-t.step,k(N)},ye=N=>{if(!t.disabled&&!Ka.hasClass(N.target,"thumb")){if(t.range){let O=(t.vertical?N.offsetY/N.target.clientHeight:N.offsetX/N.target.clientWidth)*100,ae=(o()+d())/2;O<ae?b.value=t.reversed?1:0:b.value=t.reversed?0:1}$(),w(N)}};return()=>e("div",{ref:N=>c.value=N,class:n.value,style:t.vertical?`height: ${t.verticalHeight}px;`:""},[e("div",{class:"inner",onClick:ye},[e("div",{class:"track",ref:N=>h.value=N},null),e("div",{class:"track-fill",style:m.value},null),e("div",{class:"thumb",style:p.value,onMousedown:N=>I(N),onTouchstart:N=>z(N),onTouchmove:N=>P(N),onTouchend:N=>M(N),onKeydown:N=>X(N),tabindex:0},null),t.range&&e("div",{class:"thumb second",style:f.value,onMousedown:N=>I(N,1),onTouchstart:N=>z(N,1),onTouchmove:N=>P(N),onTouchend:N=>M(N),onKeydown:N=>X(N,1),tabindex:0},null)]),t.labeled&&e("ul",{class:"auto labels"},[[...Array(g()+1)].map((N,O)=>{let ae=O/g();return O%u()?e("li",{class:"halftick label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},null):e("li",{class:"label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},[t.reversed&&!t.vertical?t.labels?t.labels[g()-O]:s.value[g()-O]:t.labels?t.labels[O]:s.value[O]])})])])}}),a$={install(t){t.component(zr.name,zr)}},Mn=B({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(t){return{computedClass:F(()=>W("ui tab segment",S(t.active,"active"),$e(t.attached,"attached")))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Mr=B({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(t,{emit:l,slots:n}){const o=L(t.activeIndex);at(()=>t.activeIndex,u=>{o.value=u});const d=(u,g)=>{o.value!==g&&(o.value=g,l("update:activeIndex",g),l("tab-change",{event:u,index:g})),l("tab-click",{event:u,index:g})},m=(u,g)=>{u.key==="Enter"&&d(u,g)},p=F(()=>{var u,g;let c=[];return(u=n.default)!=null&&u.call(n)&&((g=n.default)==null||g.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),f=F(()=>!t.secondary&&!t.pointing&&!t.text),s=F(()=>W("ui menu",S(f.value,"tabular attached"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.text,"text")));return{onClick:d,onKeyDown:m,tabIndex:o,tabs:p,tabMenuClass:s,isDefaultMenu:f}},render(){const t=()=>this.tabs.map((n,o)=>e("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:d=>this.onClick(d,o),onKeydown:d=>this.onKeyDown(d,o),tabindex:0},[n.props.header])),l=()=>this.tabs.map((n,o)=>e(Mn,$l(n.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var d,m;return[(m=(d=n.children).default)==null?void 0:m.call(d)]}}));return e(Se,null,[e("div",{class:this.tabMenuClass},[t()]),l()])}}),n$={install(t){t.component(Mr.name,Mr),t.component(Mn.name,Mn)}},s$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Accordion:$k,Calendar:Ok,Checkbox:Hk,Dimmer:jk,Dropdown:Yk,Embed:Wk,Modal:Kk,Popup:Xk,Progress:Zk,Rating:t$,Search:i$,Sidebar:l$,Slider:a$,Tab:n$});function o$(t){Object.values(Yt(Yt(Yt(Yt({},ck),bk),kk),s$)).map(l=>t.use(l))}var u$={install:o$};(function(t){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var d=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],m=o.variable[1].inside,p=0;p<d.length;p++)m[d[p]]=t.languages.bash[d[p]];t.languages.shell=t.languages.bash})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(l,n){var o={};o["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};d["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var m={};m[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:d},Prism.languages.insertBefore("markup","cdata",m)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,l){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:Prism.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;const hs=kc(rg);hs.use(VS);hs.use(u$);hs.mount("#app");

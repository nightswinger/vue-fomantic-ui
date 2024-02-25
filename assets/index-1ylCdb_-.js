(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ma(t,l){const n=new Set(t.split(","));return l?s=>n.has(s.toLowerCase()):s=>n.has(s)}const De={},Di=[],rt=()=>{},dp=()=>!1,Nl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ys=t=>t.startsWith("onUpdate:"),je=Object.assign,Cs=(t,l)=>{const n=t.indexOf(l);n>-1&&t.splice(n,1)},cp=Object.prototype.hasOwnProperty,Ee=(t,l)=>cp.call(t,l),ue=Array.isArray,Ii=t=>tl(t)==="[object Map]",Ai=t=>tl(t)==="[object Set]",co=t=>tl(t)==="[object Date]",mp=t=>tl(t)==="[object RegExp]",he=t=>typeof t=="function",qe=t=>typeof t=="string",li=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",ws=t=>(Ve(t)||he(t))&&he(t.then)&&he(t.catch),Rd=Object.prototype.toString,tl=t=>Rd.call(t),pp=t=>tl(t).slice(8,-1),Pd=t=>tl(t)==="[object Object]",Ss=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bl=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=t=>{const l=Object.create(null);return n=>l[n]||(l[n]=t(n))},fp=/-(\w)/g,ot=Da(t=>t.replace(fp,(l,n)=>n?n.toUpperCase():"")),gp=/\B([A-Z])/g,_t=Da(t=>t.replace(gp,"-$1").toLowerCase()),Ll=Da(t=>t.charAt(0).toUpperCase()+t.slice(1)),vl=Da(t=>t?`on${Ll(t)}`:""),$t=(t,l)=>!Object.is(t,l),Fi=(t,l)=>{for(let n=0;n<t.length;n++)t[n](l)},ma=(t,l,n)=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,value:n})},$l=t=>{const l=parseFloat(t);return isNaN(l)?t:l},pa=t=>{const l=qe(t)?Number(t):NaN;return isNaN(l)?t:l};let mo;const zd=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),hp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",_p=Ma(hp);function il(t){if(ue(t)){const l={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?Cp(s):il(s);if(r)for(const c in r)l[c]=r[c]}return l}else if(qe(t)||Ve(t))return t}const bp=/;(?![^(]*\))/g,vp=/:([^]+)/,yp=/\/\*[^]*?\*\//g;function Cp(t){const l={};return t.replace(yp,"").split(bp).forEach(n=>{if(n){const s=n.split(vp);s.length>1&&(l[s[0].trim()]=s[1].trim())}}),l}function Ol(t){let l="";if(qe(t))l=t;else if(ue(t))for(let n=0;n<t.length;n++){const s=Ol(t[n]);s&&(l+=s+" ")}else if(Ve(t))for(const n in t)t[n]&&(l+=n+" ");return l.trim()}function wp(t){if(!t)return null;let{class:l,style:n}=t;return l&&!qe(l)&&(t.class=Ol(l)),n&&(t.style=il(n)),t}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=Ma(Sp);function Md(t){return!!t||t===""}function kp(t,l){if(t.length!==l.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ot(t[s],l[s]);return n}function Ot(t,l){if(t===l)return!0;let n=co(t),s=co(l);if(n||s)return n&&s?t.getTime()===l.getTime():!1;if(n=li(t),s=li(l),n||s)return t===l;if(n=ue(t),s=ue(l),n||s)return n&&s?kp(t,l):!1;if(n=Ve(t),s=Ve(l),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,c=Object.keys(l).length;if(r!==c)return!1;for(const f in t){const p=t.hasOwnProperty(f),o=l.hasOwnProperty(f);if(p&&!o||!p&&o||!Ot(t[f],l[f]))return!1}}return String(t)===String(l)}function Ia(t,l){return t.findIndex(n=>Ot(n,l))}const ke=t=>qe(t)?t:t==null?"":ue(t)||Ve(t)&&(t.toString===Rd||!he(t.toString))?JSON.stringify(t,Dd,2):String(t),Dd=(t,l)=>l&&l.__v_isRef?Dd(t,l.value):Ii(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[s,r],c)=>(n[un(s,c)+" =>"]=r,n),{})}:Ai(l)?{[`Set(${l.size})`]:[...l.values()].map(n=>un(n))}:li(l)?un(l):Ve(l)&&!ue(l)&&!Pd(l)?String(l):l,un=(t,l="")=>{var n;return li(t)?`Symbol(${(n=t.description)!=null?n:l})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ft;class As{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!l&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const n=ft;try{return ft=this,l()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(l){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Tp(t){return new As(t)}function Id(t,l=ft){l&&l.active&&l.effects.push(t)}function ks(){return ft}function Fd(t){ft&&ft.cleanups.push(t)}let fi;class Yi{constructor(l,n,s,r){this.fn=l,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Id(this,r)}get dirty(){if(this._dirtyLevel===1){ki();for(let l=0;l<this._depsLength;l++){const n=this.deps[l];if(n.computed&&($p(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ti()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=ti,n=fi;try{return ti=!0,fi=this,this._runnings++,po(this),this.fn()}finally{fo(this),this._runnings--,fi=n,ti=l}}stop(){var l;this.active&&(po(this),fo(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function $p(t){return t.value}function po(t){t._trackId++,t._depsLength=0}function fo(t){if(t.deps&&t.deps.length>t._depsLength){for(let l=t._depsLength;l<t.deps.length;l++)Vd(t.deps[l],t);t.deps.length=t._depsLength}}function Vd(t,l){const n=t.get(l);n!==void 0&&l._trackId!==n&&(t.delete(l),t.size===0&&t.cleanup())}function xp(t,l){t.effect instanceof Yi&&(t=t.effect.fn);const n=new Yi(t,rt,()=>{n.dirty&&n.run()});l&&(je(n,l),l.scope&&Id(n,l.scope)),(!l||!l.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Bp(t){t.effect.stop()}let ti=!0,zn=0;const Nd=[];function ki(){Nd.push(ti),ti=!1}function Ti(){const t=Nd.pop();ti=t===void 0?!0:t}function Ts(){zn++}function $s(){for(zn--;!zn&&Mn.length;)Mn.shift()()}function Ld(t,l,n){if(l.get(t)!==t._trackId){l.set(t,t._trackId);const s=t.deps[t._depsLength];s!==l?(s&&Vd(s,t),t.deps[t._depsLength++]=l):t._depsLength++}}const Mn=[];function Od(t,l,n){Ts();for(const s of t.keys())if(s._dirtyLevel<l&&t.get(s)===s._trackId){const r=s._dirtyLevel;s._dirtyLevel=l,r===0&&(s._shouldSchedule=!0,s.trigger())}Hd(t),$s()}function Hd(t){for(const l of t.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&t.get(l)===l._trackId&&(l._shouldSchedule=!1,Mn.push(l.scheduler))}const jd=(t,l)=>{const n=new Map;return n.cleanup=t,n.computed=l,n},fa=new WeakMap,gi=Symbol(""),Dn=Symbol("");function ct(t,l,n){if(ti&&fi){let s=fa.get(t);s||fa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=jd(()=>s.delete(n))),Ld(fi,r)}}function Nt(t,l,n,s,r,c){const f=fa.get(t);if(!f)return;let p=[];if(l==="clear")p=[...f.values()];else if(n==="length"&&ue(t)){const o=Number(s);f.forEach((u,g)=>{(g==="length"||!li(g)&&g>=o)&&p.push(u)})}else switch(n!==void 0&&p.push(f.get(n)),l){case"add":ue(t)?Ss(n)&&p.push(f.get("length")):(p.push(f.get(gi)),Ii(t)&&p.push(f.get(Dn)));break;case"delete":ue(t)||(p.push(f.get(gi)),Ii(t)&&p.push(f.get(Dn)));break;case"set":Ii(t)&&p.push(f.get(gi));break}Ts();for(const o of p)o&&Od(o,2);$s()}function Ep(t,l){var n;return(n=fa.get(t))==null?void 0:n.get(l)}const Rp=Ma("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(li)),go=Pp();function Pp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(l=>{t[l]=function(...n){const s=xe(this);for(let c=0,f=this.length;c<f;c++)ct(s,"get",c+"");const r=s[l](...n);return r===-1||r===!1?s[l](...n.map(xe)):r}}),["push","pop","shift","unshift","splice"].forEach(l=>{t[l]=function(...n){ki(),Ts();const s=xe(this)[l].apply(this,n);return $s(),Ti(),s}}),t}function zp(t){const l=xe(this);return ct(l,"has",t),l.hasOwnProperty(t)}class Ud{constructor(l=!1,n=!1){this._isReadonly=l,this._shallow=n}get(l,n,s){const r=this._isReadonly,c=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return c;if(n==="__v_raw")return s===(r?c?Xd:Kd:c?Wd:Gd).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(s)?l:void 0;const f=ue(l);if(!r){if(f&&Ee(go,n))return Reflect.get(go,n,s);if(n==="hasOwnProperty")return zp}const p=Reflect.get(l,n,s);return(li(n)?qd.has(n):Rp(n))||(r||ct(l,"get",n),c)?p:it(p)?f&&Ss(n)?p:p.value:Ve(p)?r?Bs(p):Ht(p):p}}class Yd extends Ud{constructor(l=!1){super(!1,l)}set(l,n,s,r){let c=l[n];if(!this._shallow){const o=vi(c);if(!xl(s)&&!vi(s)&&(c=xe(c),s=xe(s)),!ue(l)&&it(c)&&!it(s))return o?!1:(c.value=s,!0)}const f=ue(l)&&Ss(n)?Number(n)<l.length:Ee(l,n),p=Reflect.set(l,n,s,r);return l===xe(r)&&(f?$t(s,c)&&Nt(l,"set",n,s):Nt(l,"add",n,s)),p}deleteProperty(l,n){const s=Ee(l,n);l[n];const r=Reflect.deleteProperty(l,n);return r&&s&&Nt(l,"delete",n,void 0),r}has(l,n){const s=Reflect.has(l,n);return(!li(n)||!qd.has(n))&&ct(l,"has",n),s}ownKeys(l){return ct(l,"iterate",ue(l)?"length":gi),Reflect.ownKeys(l)}}class Jd extends Ud{constructor(l=!1){super(!0,l)}set(l,n){return!0}deleteProperty(l,n){return!0}}const Mp=new Yd,Dp=new Jd,Ip=new Yd(!0),Fp=new Jd(!0),xs=t=>t,Fa=t=>Reflect.getPrototypeOf(t);function Jl(t,l,n=!1,s=!1){t=t.__v_raw;const r=xe(t),c=xe(l);n||($t(l,c)&&ct(r,"get",l),ct(r,"get",c));const{has:f}=Fa(r),p=s?xs:n?Ps:Bl;if(f.call(r,l))return p(t.get(l));if(f.call(r,c))return p(t.get(c));t!==r&&t.get(l)}function Gl(t,l=!1){const n=this.__v_raw,s=xe(n),r=xe(t);return l||($t(t,r)&&ct(s,"has",t),ct(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Wl(t,l=!1){return t=t.__v_raw,!l&&ct(xe(t),"iterate",gi),Reflect.get(t,"size",t)}function ho(t){t=xe(t);const l=xe(this);return Fa(l).has.call(l,t)||(l.add(t),Nt(l,"add",t,t)),this}function _o(t,l){l=xe(l);const n=xe(this),{has:s,get:r}=Fa(n);let c=s.call(n,t);c||(t=xe(t),c=s.call(n,t));const f=r.call(n,t);return n.set(t,l),c?$t(l,f)&&Nt(n,"set",t,l):Nt(n,"add",t,l),this}function bo(t){const l=xe(this),{has:n,get:s}=Fa(l);let r=n.call(l,t);r||(t=xe(t),r=n.call(l,t)),s&&s.call(l,t);const c=l.delete(t);return r&&Nt(l,"delete",t,void 0),c}function vo(){const t=xe(this),l=t.size!==0,n=t.clear();return l&&Nt(t,"clear",void 0,void 0),n}function Kl(t,l){return function(s,r){const c=this,f=c.__v_raw,p=xe(f),o=l?xs:t?Ps:Bl;return!t&&ct(p,"iterate",gi),f.forEach((u,g)=>s.call(r,o(u),o(g),c))}}function Xl(t,l,n){return function(...s){const r=this.__v_raw,c=xe(r),f=Ii(c),p=t==="entries"||t===Symbol.iterator&&f,o=t==="keys"&&f,u=r[t](...s),g=n?xs:l?Ps:Bl;return!l&&ct(c,"iterate",o?Dn:gi),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:p?[g(m[0]),g(m[1])]:g(m),done:h}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...l){return t==="delete"?!1:t==="clear"?void 0:this}}function Vp(){const t={get(c){return Jl(this,c)},get size(){return Wl(this)},has:Gl,add:ho,set:_o,delete:bo,clear:vo,forEach:Kl(!1,!1)},l={get(c){return Jl(this,c,!1,!0)},get size(){return Wl(this)},has:Gl,add:ho,set:_o,delete:bo,clear:vo,forEach:Kl(!1,!0)},n={get(c){return Jl(this,c,!0)},get size(){return Wl(this,!0)},has(c){return Gl.call(this,c,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Kl(!0,!1)},s={get(c){return Jl(this,c,!0,!0)},get size(){return Wl(this,!0)},has(c){return Gl.call(this,c,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Kl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{t[c]=Xl(c,!1,!1),n[c]=Xl(c,!0,!1),l[c]=Xl(c,!1,!0),s[c]=Xl(c,!0,!0)}),[t,n,l,s]}const[Np,Lp,Op,Hp]=Vp();function Va(t,l){const n=l?t?Hp:Op:t?Lp:Np;return(s,r,c)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ee(n,r)&&r in s?n:s,r,c)}const jp={get:Va(!1,!1)},qp={get:Va(!1,!0)},Up={get:Va(!0,!1)},Yp={get:Va(!0,!0)},Gd=new WeakMap,Wd=new WeakMap,Kd=new WeakMap,Xd=new WeakMap;function Jp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gp(t){return t.__v_skip||!Object.isExtensible(t)?0:Jp(pp(t))}function Ht(t){return vi(t)?t:Na(t,!1,Mp,jp,Gd)}function Qd(t){return Na(t,!1,Ip,qp,Wd)}function Bs(t){return Na(t,!0,Dp,Up,Kd)}function Wp(t){return Na(t,!0,Fp,Yp,Xd)}function Na(t,l,n,s,r){if(!Ve(t)||t.__v_raw&&!(l&&t.__v_isReactive))return t;const c=r.get(t);if(c)return c;const f=Gp(t);if(f===0)return t;const p=new Proxy(t,f===2?s:n);return r.set(t,p),p}function hi(t){return vi(t)?hi(t.__v_raw):!!(t&&t.__v_isReactive)}function vi(t){return!!(t&&t.__v_isReadonly)}function xl(t){return!!(t&&t.__v_isShallow)}function Es(t){return hi(t)||vi(t)}function xe(t){const l=t&&t.__v_raw;return l?xe(l):t}function Rs(t){return ma(t,"__v_skip",!0),t}const Bl=t=>Ve(t)?Ht(t):t,Ps=t=>Ve(t)?Bs(t):t;class Zd{constructor(l,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Yi(()=>l(this._value),()=>Vi(this,1),()=>this.dep&&Hd(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const l=xe(this);return(!l._cacheable||l.effect.dirty)&&$t(l._value,l._value=l.effect.run())&&Vi(l,2),zs(l),l.effect._dirtyLevel>=1&&Vi(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function Kp(t,l,n=!1){let s,r;const c=he(t);return c?(s=t,r=rt):(s=t.get,r=t.set),new Zd(s,r,c||!r,n)}function zs(t){ti&&fi&&(t=xe(t),Ld(fi,t.dep||(t.dep=jd(()=>t.dep=void 0,t instanceof Zd?t:void 0))))}function Vi(t,l=2,n){t=xe(t);const s=t.dep;s&&Od(s,l)}function it(t){return!!(t&&t.__v_isRef===!0)}function N(t){return tc(t,!1)}function ec(t){return tc(t,!0)}function tc(t,l){return it(t)?t:new Xp(t,l)}class Xp{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:xe(l),this._value=n?l:Bl(l)}get value(){return zs(this),this._value}set value(l){const n=this.__v_isShallow||xl(l)||vi(l);l=n?l:xe(l),$t(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:Bl(l),Vi(this,2))}}function Qp(t){Vi(t,2)}function Xe(t){return it(t)?t.value:t}function Zp(t){return he(t)?t():Xe(t)}const ef={get:(t,l,n)=>Xe(Reflect.get(t,l,n)),set:(t,l,n,s)=>{const r=t[l];return it(r)&&!it(n)?(r.value=n,!0):Reflect.set(t,l,n,s)}};function Ms(t){return hi(t)?t:new Proxy(t,ef)}class tf{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=l(()=>zs(this),()=>Vi(this));this._get=n,this._set=s}get value(){return this._get()}set value(l){this._set(l)}}function ic(t){return new tf(t)}function lf(t){const l=ue(t)?new Array(t.length):{};for(const n in t)l[n]=lc(t,n);return l}class af{constructor(l,n,s){this._object=l,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return Ep(xe(this._object),this._key)}}class nf{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function In(t,l,n){return it(t)?t:he(t)?new nf(t):Ve(t)&&arguments.length>1?lc(t,l,n):N(t)}function lc(t,l,n){const s=t[l];return it(s)?s:new af(t,l,n)}const sf={GET:"get",HAS:"has",ITERATE:"iterate"},of={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function uf(t,l){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},df={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Lt(t,l,n,s){let r;try{r=s?t(...s):t()}catch(c){$i(c,l,n)}return r}function bt(t,l,n,s){if(he(t)){const c=Lt(t,l,n,s);return c&&ws(c)&&c.catch(f=>{$i(f,l,n)}),c}const r=[];for(let c=0;c<t.length;c++)r.push(bt(t[c],l,n,s));return r}function $i(t,l,n,s=!0){const r=l?l.vnode:null;if(l){let c=l.parent;const f=l.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](t,f,p)===!1)return}c=c.parent}const o=l.appContext.config.errorHandler;if(o){Lt(o,null,10,[t,f,p]);return}}cf(t,n,r,s)}function cf(t,l,n,s=!0){console.error(t)}let El=!1,Fn=!1;const lt=[];let Pt=0;const Ni=[];let Kt=null,mi=0;const ac=Promise.resolve();let Ds=null;function ll(t){const l=Ds||ac;return t?l.then(this?t.bind(this):t):l}function mf(t){let l=Pt+1,n=lt.length;for(;l<n;){const s=l+n>>>1,r=lt[s],c=Rl(r);c<t||c===t&&r.pre?l=s+1:n=s}return l}function La(t){(!lt.length||!lt.includes(t,El&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?lt.push(t):lt.splice(mf(t.id),0,t),nc())}function nc(){!El&&!Fn&&(Fn=!0,Ds=ac.then(sc))}function pf(t){const l=lt.indexOf(t);l>Pt&&lt.splice(l,1)}function ga(t){ue(t)?Ni.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?mi+1:mi))&&Ni.push(t),nc()}function yo(t,l,n=El?Pt+1:0){for(;n<lt.length;n++){const s=lt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;lt.splice(n,1),n--,s()}}}function ha(t){if(Ni.length){const l=[...new Set(Ni)].sort((n,s)=>Rl(n)-Rl(s));if(Ni.length=0,Kt){Kt.push(...l);return}for(Kt=l,mi=0;mi<Kt.length;mi++)Kt[mi]();Kt=null,mi=0}}const Rl=t=>t.id==null?1/0:t.id,ff=(t,l)=>{const n=Rl(t)-Rl(l);if(n===0){if(t.pre&&!l.pre)return-1;if(l.pre&&!t.pre)return 1}return n};function sc(t){Fn=!1,El=!0,lt.sort(ff);try{for(Pt=0;Pt<lt.length;Pt++){const l=lt[Pt];l&&l.active!==!1&&Lt(l,null,14)}}finally{Pt=0,lt.length=0,ha(),El=!1,Ds=null,(lt.length||Ni.length)&&sc()}}let Pi,Ql=[];function oc(t,l){var n,s;Pi=t,Pi?(Pi.enabled=!0,Ql.forEach(({event:r,args:c})=>Pi.emit(r,...c)),Ql=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{oc(c,l)}),setTimeout(()=>{Pi||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ql=[])},3e3)):Ql=[]}function gf(t,l,...n){if(t.isUnmounted)return;const s=t.vnode.props||De;let r=n;const c=l.startsWith("update:"),f=c&&l.slice(7);if(f&&f in s){const g=`${f==="modelValue"?"model":f}Modifiers`,{number:m,trim:h}=s[g]||De;h&&(r=n.map(v=>qe(v)?v.trim():v)),m&&(r=n.map($l))}let p,o=s[p=vl(l)]||s[p=vl(ot(l))];!o&&c&&(o=s[p=vl(_t(l))]),o&&bt(o,t,6,r);const u=s[p+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[p])return;t.emitted[p]=!0,bt(u,t,6,r)}}function uc(t,l,n=!1){const s=l.emitsCache,r=s.get(t);if(r!==void 0)return r;const c=t.emits;let f={},p=!1;if(!he(t)){const o=u=>{const g=uc(u,l,!0);g&&(p=!0,je(f,g))};!n&&l.mixins.length&&l.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!c&&!p?(Ve(t)&&s.set(t,null),null):(ue(c)?c.forEach(o=>f[o]=null):je(f,c),Ve(t)&&s.set(t,f),f)}function Oa(t,l){return!t||!Nl(l)?!1:(l=l.slice(2).replace(/Once$/,""),Ee(t,l[0].toLowerCase()+l.slice(1))||Ee(t,_t(l))||Ee(t,l))}let Ue=null,Ha=null;function Pl(t){const l=Ue;return Ue=t,Ha=t&&t.type.__scopeId||null,l}function ja(t){Ha=t}function qa(){Ha=null}const hf=t=>i;function i(t,l=Ue,n){if(!l||t._n)return t;const s=(...r)=>{s._d&&Un(-1);const c=Pl(l);let f;try{f=t(...r)}finally{Pl(c),s._d&&Un(1)}return f};return s._n=!0,s._c=!0,s._d=!0,s}function ra(t){const{type:l,vnode:n,proxy:s,withProxy:r,props:c,propsOptions:[f],slots:p,attrs:o,emit:u,render:g,renderCache:m,data:h,setupState:v,ctx:d,inheritAttrs:y}=t;let S,T;const b=Pl(t);try{if(n.shapeFlag&4){const k=r||s,$=k;S=gt(g.call($,k,m,c,v,h,d)),T=o}else{const k=l;S=gt(k.length>1?k(c,{attrs:o,slots:p,emit:u}):k(c,null)),T=l.props?o:bf(o)}}catch(k){wl.length=0,$i(k,t,1),S=e(nt)}let w=S;if(T&&y!==!1){const k=Object.keys(T),{shapeFlag:$}=w;k.length&&$&7&&(f&&k.some(ys)&&(T=vf(T,f)),w=zt(w,T))}return n.dirs&&(w=zt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),S=w,Pl(b),S}function _f(t,l=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(At(r)){if(r.type!==nt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const bf=t=>{let l;for(const n in t)(n==="class"||n==="style"||Nl(n))&&((l||(l={}))[n]=t[n]);return l},vf=(t,l)=>{const n={};for(const s in t)(!ys(s)||!(s.slice(9)in l))&&(n[s]=t[s]);return n};function yf(t,l,n){const{props:s,children:r,component:c}=t,{props:f,children:p,patchFlag:o}=l,u=c.emitsOptions;if(l.dirs||l.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?Co(s,f,u):!!f;if(o&8){const g=l.dynamicProps;for(let m=0;m<g.length;m++){const h=g[m];if(f[h]!==s[h]&&!Oa(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:s===f?!1:s?f?Co(s,f,u):!0:!!f;return!1}function Co(t,l,n){const s=Object.keys(l);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const c=s[r];if(l[c]!==t[c]&&!Oa(n,c))return!0}return!1}function Is({vnode:t,parent:l},n){for(;l;){const s=l.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=l.vnode).el=n,l=l.parent;else break}}const Fs="components",Cf="directives";function _(t,l){return Vs(Fs,t,!0,l)||t}const rc=Symbol.for("v-ndc");function dc(t){return qe(t)?Vs(Fs,t,!1)||t:t||rc}function Ua(t){return Vs(Cf,t)}function Vs(t,l,n=!0,s=!1){const r=Ue||Je;if(r){const c=r.type;if(t===Fs){const p=Kn(c,!1);if(p&&(p===l||p===ot(l)||p===Ll(ot(l))))return c}const f=wo(r[t]||c[t],l)||wo(r.appContext[t],l);return!f&&s?c:f}}function wo(t,l){return t&&(t[l]||t[ot(l)]||t[Ll(ot(l))])}const cc=t=>t.__isSuspense;let Vn=0;const wf={name:"Suspense",__isSuspense:!0,process(t,l,n,s,r,c,f,p,o,u){if(t==null)Af(l,n,s,r,c,f,p,o,u);else{if(c&&c.deps>0){l.suspense=t.suspense;return}kf(t,l,n,s,r,f,p,o,u)}},hydrate:Tf,create:Ns,normalize:$f},Sf=wf;function zl(t,l){const n=t.props&&t.props[l];he(n)&&n()}function Af(t,l,n,s,r,c,f,p,o){const{p:u,o:{createElement:g}}=o,m=g("div"),h=t.suspense=Ns(t,r,s,l,m,n,c,f,p,o);u(null,h.pendingBranch=t.ssContent,m,null,s,h,c,f),h.deps>0?(zl(t,"onPending"),zl(t,"onFallback"),u(null,t.ssFallback,l,n,s,null,c,f),Li(h,t.ssFallback)):h.resolve(!1,!0)}function kf(t,l,n,s,r,c,f,p,{p:o,um:u,o:{createElement:g}}){const m=l.suspense=t.suspense;m.vnode=l,l.el=t.el;const h=l.ssContent,v=l.ssFallback,{activeBranch:d,pendingBranch:y,isInFallback:S,isHydrating:T}=m;if(y)m.pendingBranch=h,Tt(h,y)?(o(y,h,m.hiddenContainer,null,r,m,c,f,p),m.deps<=0?m.resolve():S&&(T||(o(d,v,n,s,r,null,c,f,p),Li(m,v)))):(m.pendingId=Vn++,T?(m.isHydrating=!1,m.activeBranch=y):u(y,r,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),S?(o(null,h,m.hiddenContainer,null,r,m,c,f,p),m.deps<=0?m.resolve():(o(d,v,n,s,r,null,c,f,p),Li(m,v))):d&&Tt(h,d)?(o(d,h,n,s,r,m,c,f,p),m.resolve(!0)):(o(null,h,m.hiddenContainer,null,r,m,c,f,p),m.deps<=0&&m.resolve()));else if(d&&Tt(h,d))o(d,h,n,s,r,m,c,f,p),Li(m,h);else if(zl(l,"onPending"),m.pendingBranch=h,h.shapeFlag&512?m.pendingId=h.component.suspenseId:m.pendingId=Vn++,o(null,h,m.hiddenContainer,null,r,m,c,f,p),m.deps<=0)m.resolve();else{const{timeout:b,pendingId:w}=m;b>0?setTimeout(()=>{m.pendingId===w&&m.fallback(v)},b):b===0&&m.fallback(v)}}function Ns(t,l,n,s,r,c,f,p,o,u,g=!1){const{p:m,m:h,um:v,n:d,o:{parentNode:y,remove:S}}=u;let T;const b=xf(t);b&&l!=null&&l.pendingBranch&&(T=l.pendingId,l.deps++);const w=t.props?pa(t.props.timeout):void 0,k=c,$={vnode:t,parent:l,parentComponent:n,namespace:f,container:s,hiddenContainer:r,deps:0,pendingId:Vn++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(B=!1,z=!1){const{vnode:M,activeBranch:P,pendingBranch:F,pendingId:U,effects:O,parentComponent:se,container:we}=$;let V=!1;$.isHydrating?$.isHydrating=!1:B||(V=P&&F.transition&&F.transition.mode==="out-in",V&&(P.transition.afterLeave=()=>{U===$.pendingId&&(h(F,we,c===k?d(P):c,0),ga(O))}),P&&(y(P.el)!==$.hiddenContainer&&(c=d(P)),v(P,se,$,!0)),V||h(F,we,c,0)),Li($,F),$.pendingBranch=null,$.isInFallback=!1;let q=$.parent,ae=!1;for(;q;){if(q.pendingBranch){q.effects.push(...O),ae=!0;break}q=q.parent}!ae&&!V&&ga(O),$.effects=[],b&&l&&l.pendingBranch&&T===l.pendingId&&(l.deps--,l.deps===0&&!z&&l.resolve()),zl(M,"onResolve")},fallback(B){if(!$.pendingBranch)return;const{vnode:z,activeBranch:M,parentComponent:P,container:F,namespace:U}=$;zl(z,"onFallback");const O=d(M),se=()=>{$.isInFallback&&(m(null,B,F,O,P,null,U,p,o),Li($,B))},we=B.transition&&B.transition.mode==="out-in";we&&(M.transition.afterLeave=se),$.isInFallback=!0,v(M,P,null,!0),we||se()},move(B,z,M){$.activeBranch&&h($.activeBranch,B,z,M),$.container=B},next(){return $.activeBranch&&d($.activeBranch)},registerDep(B,z){const M=!!$.pendingBranch;M&&$.deps++;const P=B.vnode.el;B.asyncDep.catch(F=>{$i(F,B,0)}).then(F=>{if(B.isUnmounted||$.isUnmounted||$.pendingId!==B.suspenseId)return;B.asyncResolved=!0;const{vnode:U}=B;Gn(B,F,!1),P&&(U.el=P);const O=!P&&B.subTree.el;z(B,U,y(P||B.subTree.el),P?null:d(B.subTree),$,f,o),O&&S(O),Is(B,U.el),M&&--$.deps===0&&$.resolve()})},unmount(B,z){$.isUnmounted=!0,$.activeBranch&&v($.activeBranch,n,B,z),$.pendingBranch&&v($.pendingBranch,n,B,z)}};return $}function Tf(t,l,n,s,r,c,f,p,o){const u=l.suspense=Ns(l,s,n,t.parentNode,document.createElement("div"),null,r,c,f,p,!0),g=o(t,u.pendingBranch=l.ssContent,n,u,c,f);return u.deps===0&&u.resolve(!1,!0),g}function $f(t){const{shapeFlag:l,children:n}=t,s=l&32;t.ssContent=So(s?n.default:n),t.ssFallback=s?So(n.fallback):e(nt)}function So(t){let l;if(he(t)){const n=wi&&t._c;n&&(t._d=!1,L()),t=t(),n&&(t._d=!0,l=dt,Hc())}return ue(t)&&(t=_f(t)),t=gt(t),l&&!t.dynamicChildren&&(t.dynamicChildren=l.filter(n=>n!==t)),t}function mc(t,l){l&&l.pendingBranch?ue(t)?l.effects.push(...t):l.effects.push(t):ga(t)}function Li(t,l){t.activeBranch=l;const{vnode:n,parentComponent:s}=t;let r=l.el;for(;!r&&l.component;)l=l.component.subTree,r=l.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,Is(s,r))}function xf(t){var l;return((l=t.props)==null?void 0:l.suspensible)!=null&&t.props.suspensible!==!1}const pc=Symbol.for("v-scx"),fc=()=>Pe(pc);function Ls(t,l){return Hl(t,null,l)}function gc(t,l){return Hl(t,null,{flush:"post"})}function hc(t,l){return Hl(t,null,{flush:"sync"})}const Zl={};function at(t,l,n){return Hl(t,l,n)}function Hl(t,l,{immediate:n,deep:s,flush:r,once:c,onTrack:f,onTrigger:p}=De){if(l&&c){const B=l;l=(...z)=>{B(...z),$()}}const o=Je,u=B=>s===!0?B:pi(B,s===!1?1:void 0);let g,m=!1,h=!1;if(it(t)?(g=()=>t.value,m=xl(t)):hi(t)?(g=()=>u(t),m=!0):ue(t)?(h=!0,m=t.some(B=>hi(B)||xl(B)),g=()=>t.map(B=>{if(it(B))return B.value;if(hi(B))return u(B);if(he(B))return Lt(B,o,2)})):he(t)?l?g=()=>Lt(t,o,2):g=()=>(v&&v(),bt(t,o,3,[d])):g=rt,l&&s){const B=g;g=()=>pi(B())}let v,d=B=>{v=w.onStop=()=>{Lt(B,o,4),v=w.onStop=void 0}},y;if(Ul)if(d=rt,l?n&&bt(l,o,3,[g(),h?[]:void 0,d]):g(),r==="sync"){const B=fc();y=B.__watcherHandles||(B.__watcherHandles=[])}else return rt;let S=h?new Array(t.length).fill(Zl):Zl;const T=()=>{if(!(!w.active||!w.dirty))if(l){const B=w.run();(s||m||(h?B.some((z,M)=>$t(z,S[M])):$t(B,S)))&&(v&&v(),bt(l,o,3,[B,S===Zl?void 0:h&&S[0]===Zl?[]:S,d]),S=B)}else w.run()};T.allowRecurse=!!l;let b;r==="sync"?b=T:r==="post"?b=()=>et(T,o&&o.suspense):(T.pre=!0,o&&(T.id=o.uid),b=()=>La(T));const w=new Yi(g,rt,b),k=ks(),$=()=>{w.stop(),k&&Cs(k.effects,w)};return l?n?T():S=w.run():r==="post"?et(w.run.bind(w),o&&o.suspense):w.run(),y&&y.push($),$}function Bf(t,l,n){const s=this.proxy,r=qe(t)?t.includes(".")?_c(s,t):()=>s[t]:t.bind(s,s);let c;he(l)?c=l:(c=l.handler,n=l);const f=Si(this),p=Hl(r,c.bind(s),n);return f(),p}function _c(t,l){const n=l.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function pi(t,l,n=0,s){if(!Ve(t)||t.__v_skip)return t;if(l&&l>0){if(n>=l)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),it(t))pi(t.value,l,n,s);else if(ue(t))for(let r=0;r<t.length;r++)pi(t[r],l,n,s);else if(Ai(t)||Ii(t))t.forEach(r=>{pi(r,l,n,s)});else if(Pd(t))for(const r in t)pi(t[r],l,n,s);return t}function jl(t,l){if(Ue===null)return t;const n=Qa(Ue)||Ue.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<l.length;r++){let[c,f,p,o=De]=l[r];c&&(he(c)&&(c={mounted:c,updated:c}),c.deep&&pi(f),s.push({dir:c,instance:n,value:f,oldValue:void 0,arg:p,modifiers:o}))}return t}function Rt(t,l,n,s){const r=t.dirs,c=l&&l.dirs;for(let f=0;f<r.length;f++){const p=r[f];c&&(p.oldValue=c[f].value);let o=p.dir[s];o&&(ki(),bt(o,n,8,[t.el,p,t,l]),Ti())}}const Xt=Symbol("_leaveCb"),ea=Symbol("_enterCb");function Os(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ni(()=>{t.isMounted=!0}),Wa(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],Hs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},Ef={name:"BaseTransition",props:Hs,setup(t,{slots:l}){const n=Dt(),s=Os();let r;return()=>{const c=l.default&&Ya(l.default(),!0);if(!c||!c.length)return;let f=c[0];if(c.length>1){for(const y of c)if(y.type!==nt){f=y;break}}const p=xe(t),{mode:o}=p;if(s.isLeaving)return rn(f);const u=Ao(f);if(!u)return rn(f);const g=Ji(u,p,s,n);yi(u,g);const m=n.subTree,h=m&&Ao(m);let v=!1;const{getTransitionKey:d}=u.type;if(d){const y=d();r===void 0?r=y:y!==r&&(r=y,v=!0)}if(h&&h.type!==nt&&(!Tt(u,h)||v)){const y=Ji(h,p,s,n);if(yi(h,y),o==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},rn(f);o==="in-out"&&u.type!==nt&&(y.delayLeave=(S,T,b)=>{const w=vc(s,h);w[String(h.key)]=h,S[Xt]=()=>{T(),S[Xt]=void 0,delete g.delayedLeave},g.delayedLeave=b})}return f}}},bc=Ef;function vc(t,l){const{leavingVNodes:n}=t;let s=n.get(l.type);return s||(s=Object.create(null),n.set(l.type,s)),s}function Ji(t,l,n,s){const{appear:r,mode:c,persisted:f=!1,onBeforeEnter:p,onEnter:o,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:m,onLeave:h,onAfterLeave:v,onLeaveCancelled:d,onBeforeAppear:y,onAppear:S,onAfterAppear:T,onAppearCancelled:b}=l,w=String(t.key),k=vc(n,t),$=(M,P)=>{M&&bt(M,s,9,P)},B=(M,P)=>{const F=P[1];$(M,P),ue(M)?M.every(U=>U.length<=1)&&F():M.length<=1&&F()},z={mode:c,persisted:f,beforeEnter(M){let P=p;if(!n.isMounted)if(r)P=y||p;else return;M[Xt]&&M[Xt](!0);const F=k[w];F&&Tt(t,F)&&F.el[Xt]&&F.el[Xt](),$(P,[M])},enter(M){let P=o,F=u,U=g;if(!n.isMounted)if(r)P=S||o,F=T||u,U=b||g;else return;let O=!1;const se=M[ea]=we=>{O||(O=!0,we?$(U,[M]):$(F,[M]),z.delayedLeave&&z.delayedLeave(),M[ea]=void 0)};P?B(P,[M,se]):se()},leave(M,P){const F=String(t.key);if(M[ea]&&M[ea](!0),n.isUnmounting)return P();$(m,[M]);let U=!1;const O=M[Xt]=se=>{U||(U=!0,P(),se?$(d,[M]):$(v,[M]),M[Xt]=void 0,k[F]===t&&delete k[F])};k[F]=t,h?B(h,[M,O]):O()},clone(M){return Ji(M,l,n,s)}};return z}function rn(t){if(ql(t))return t=zt(t),t.children=null,t}function Ao(t){return ql(t)?t.children?t.children[0]:void 0:t}function yi(t,l){t.shapeFlag&6&&t.component?yi(t.component.subTree,l):t.shapeFlag&128?(t.ssContent.transition=l.clone(t.ssContent),t.ssFallback.transition=l.clone(t.ssFallback)):t.transition=l}function Ya(t,l=!1,n){let s=[],r=0;for(let c=0;c<t.length;c++){let f=t[c];const p=n==null?f.key:String(n)+String(f.key!=null?f.key:c);f.type===Ce?(f.patchFlag&128&&r++,s=s.concat(Ya(f.children,l,p))):(l||f.type!==nt)&&s.push(p!=null?zt(f,{key:p}):f)}if(r>1)for(let c=0;c<s.length;c++)s[c].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function E(t,l){return he(t)?je({name:t.name},l,{setup:t}):t}const _i=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Rf(t){he(t)&&(t={loader:t});const{loader:l,loadingComponent:n,errorComponent:s,delay:r=200,timeout:c,suspensible:f=!0,onError:p}=t;let o=null,u,g=0;const m=()=>(g++,o=null,h()),h=()=>{let v;return o||(v=o=l().catch(d=>{if(d=d instanceof Error?d:new Error(String(d)),p)return new Promise((y,S)=>{p(d,()=>y(m()),()=>S(d),g+1)});throw d}).then(d=>v!==o&&o?o:(d&&(d.__esModule||d[Symbol.toStringTag]==="Module")&&(d=d.default),u=d,d)))};return E({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=Je;if(u)return()=>dn(u,v);const d=b=>{o=null,$i(b,v,13,!s)};if(f&&v.suspense||Ul)return h().then(b=>()=>dn(b,v)).catch(b=>(d(b),()=>s?e(s,{error:b}):null));const y=N(!1),S=N(),T=N(!!r);return r&&setTimeout(()=>{T.value=!1},r),c!=null&&setTimeout(()=>{if(!y.value&&!S.value){const b=new Error(`Async component timed out after ${c}ms.`);d(b),S.value=b}},c),h().then(()=>{y.value=!0,v.parent&&ql(v.parent.vnode)&&(v.parent.effect.dirty=!0,La(v.parent.update))}).catch(b=>{d(b),S.value=b}),()=>{if(y.value&&u)return dn(u,v);if(S.value&&s)return e(s,{error:S.value});if(n&&!T.value)return e(n)}}})}function dn(t,l){const{ref:n,props:s,children:r,ce:c}=l.vnode,f=e(t,s,r);return f.ref=n,f.ce=c,delete l.vnode.ce,f}const ql=t=>t.type.__isKeepAlive,Pf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:l}){const n=Dt(),s=n.ctx;if(!s.renderer)return()=>{const b=l.default&&l.default();return b&&b.length===1?b[0]:b};const r=new Map,c=new Set;let f=null;const p=n.suspense,{renderer:{p:o,m:u,um:g,o:{createElement:m}}}=s,h=m("div");s.activate=(b,w,k,$,B)=>{const z=b.component;u(b,w,k,0,p),o(z.vnode,b,w,k,z,p,$,b.slotScopeIds,B),et(()=>{z.isDeactivated=!1,z.a&&Fi(z.a);const M=b.props&&b.props.onVnodeMounted;M&&ut(M,z.parent,b)},p)},s.deactivate=b=>{const w=b.component;u(b,h,null,1,p),et(()=>{w.da&&Fi(w.da);const k=b.props&&b.props.onVnodeUnmounted;k&&ut(k,w.parent,b),w.isDeactivated=!0},p)};function v(b){cn(b),g(b,n,p,!0)}function d(b){r.forEach((w,k)=>{const $=Kn(w.type);$&&(!b||!b($))&&y(k)})}function y(b){const w=r.get(b);!f||!Tt(w,f)?v(w):f&&cn(f),r.delete(b),c.delete(b)}at(()=>[t.include,t.exclude],([b,w])=>{b&&d(k=>ml(b,k)),w&&d(k=>!ml(w,k))},{flush:"post",deep:!0});let S=null;const T=()=>{S!=null&&r.set(S,mn(n.subTree))};return ni(T),Ga(T),Wa(()=>{r.forEach(b=>{const{subTree:w,suspense:k}=n,$=mn(w);if(b.type===$.type&&b.key===$.key){cn($);const B=$.component.da;B&&et(B,k);return}v(b)})}),()=>{if(S=null,!l.default)return null;const b=l.default(),w=b[0];if(b.length>1)return f=null,b;if(!At(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return f=null,w;let k=mn(w);const $=k.type,B=Kn(_i(k)?k.type.__asyncResolved||{}:$),{include:z,exclude:M,max:P}=t;if(z&&(!B||!ml(z,B))||M&&B&&ml(M,B))return f=k,w;const F=k.key==null?$:k.key,U=r.get(F);return k.el&&(k=zt(k),w.shapeFlag&128&&(w.ssContent=k)),S=F,U?(k.el=U.el,k.component=U.component,k.transition&&yi(k,k.transition),k.shapeFlag|=512,c.delete(F),c.add(F)):(c.add(F),P&&c.size>parseInt(P,10)&&y(c.values().next().value)),k.shapeFlag|=256,f=k,cc(w.type)?w:k}}},zf=Pf;function ml(t,l){return ue(t)?t.some(n=>ml(n,l)):qe(t)?t.split(",").includes(l):mp(t)?t.test(l):!1}function js(t,l){yc(t,"a",l)}function qs(t,l){yc(t,"da",l)}function yc(t,l,n=Je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ja(l,s,n),n){let r=n.parent;for(;r&&r.parent;)ql(r.parent.vnode)&&Mf(s,l,n,r),r=r.parent}}function Mf(t,l,n,s){const r=Ja(l,t,s,!0);xi(()=>{Cs(s[l],r)},n)}function cn(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function mn(t){return t.shapeFlag&128?t.ssContent:t}function Ja(t,l,n=Je,s=!1){if(n){const r=n[t]||(n[t]=[]),c=l.__weh||(l.__weh=(...f)=>{if(n.isUnmounted)return;ki();const p=Si(n),o=bt(l,n,t,f);return p(),Ti(),o});return s?r.unshift(c):r.push(c),c}}const jt=t=>(l,n=Je)=>(!Ul||t==="sp")&&Ja(t,(...s)=>l(...s),n),Cc=jt("bm"),ni=jt("m"),wc=jt("bu"),Ga=jt("u"),Wa=jt("bum"),xi=jt("um"),Sc=jt("sp"),Ac=jt("rtg"),kc=jt("rtc");function Tc(t,l=Je){Ja("ec",t,l)}function Ge(t,l,n,s){let r;const c=n&&n[s];if(ue(t)||qe(t)){r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=l(t[f],f,void 0,c&&c[f])}else if(typeof t=="number"){r=new Array(t);for(let f=0;f<t;f++)r[f]=l(f+1,f,void 0,c&&c[f])}else if(Ve(t))if(t[Symbol.iterator])r=Array.from(t,(f,p)=>l(f,p,void 0,c&&c[p]));else{const f=Object.keys(t);r=new Array(f.length);for(let p=0,o=f.length;p<o;p++){const u=f[p];r[p]=l(t[u],u,p,c&&c[p])}}else r=[];return n&&(n[s]=r),r}function Df(t,l){for(let n=0;n<l.length;n++){const s=l[n];if(ue(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const c=s.fn(...r);return c&&(c.key=s.key),c}:s.fn)}return t}function Gi(t,l,n={},s,r){if(Ue.isCE||Ue.parent&&_i(Ue.parent)&&Ue.parent.isCE)return l!=="default"&&(n.name=l),e("slot",n,s&&s());let c=t[l];c&&c._c&&(c._d=!1),L();const f=c&&$c(c(n)),p=ge(Ce,{key:n.key||f&&f.key||`_${l}`},f||(s?s():[]),f&&t._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),c&&c._c&&(c._d=!0),p}function $c(t){return t.some(l=>At(l)?!(l.type===nt||l.type===Ce&&!$c(l.children)):!0)?t:null}function If(t,l){const n={};for(const s in t)n[l&&/[A-Z]/.test(s)?`on:${s}`:vl(s)]=t[s];return n}const Nn=t=>t?Jc(t)?Qa(t)||t.proxy:Nn(t.parent):null,yl=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nn(t.parent),$root:t=>Nn(t.root),$emit:t=>t.emit,$options:t=>Us(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,La(t.update)}),$nextTick:t=>t.n||(t.n=ll.bind(t.proxy)),$watch:t=>Bf.bind(t)}),pn=(t,l)=>t!==De&&!t.__isScriptSetup&&Ee(t,l),Ln={get({_:t},l){const{ctx:n,setupState:s,data:r,props:c,accessCache:f,type:p,appContext:o}=t;let u;if(l[0]!=="$"){const v=f[l];if(v!==void 0)switch(v){case 1:return s[l];case 2:return r[l];case 4:return n[l];case 3:return c[l]}else{if(pn(s,l))return f[l]=1,s[l];if(r!==De&&Ee(r,l))return f[l]=2,r[l];if((u=t.propsOptions[0])&&Ee(u,l))return f[l]=3,c[l];if(n!==De&&Ee(n,l))return f[l]=4,n[l];On&&(f[l]=0)}}const g=yl[l];let m,h;if(g)return l==="$attrs"&&ct(t,"get",l),g(t);if((m=p.__cssModules)&&(m=m[l]))return m;if(n!==De&&Ee(n,l))return f[l]=4,n[l];if(h=o.config.globalProperties,Ee(h,l))return h[l]},set({_:t},l,n){const{data:s,setupState:r,ctx:c}=t;return pn(r,l)?(r[l]=n,!0):s!==De&&Ee(s,l)?(s[l]=n,!0):Ee(t.props,l)||l[0]==="$"&&l.slice(1)in t?!1:(c[l]=n,!0)},has({_:{data:t,setupState:l,accessCache:n,ctx:s,appContext:r,propsOptions:c}},f){let p;return!!n[f]||t!==De&&Ee(t,f)||pn(l,f)||(p=c[0])&&Ee(p,f)||Ee(s,f)||Ee(yl,f)||Ee(r.config.globalProperties,f)},defineProperty(t,l,n){return n.get!=null?t._.accessCache[l]=0:Ee(n,"value")&&this.set(t,l,n.value,null),Reflect.defineProperty(t,l,n)}},Ff=je({},Ln,{get(t,l){if(l!==Symbol.unscopables)return Ln.get(t,l,t)},has(t,l){return l[0]!=="_"&&!_p(l)}});function Vf(){return null}function Nf(){return null}function Lf(t){}function Of(t){}function Hf(){return null}function jf(){}function qf(t,l){return null}function Uf(){return xc().slots}function Yf(){return xc().attrs}function xc(){const t=Dt();return t.setupContext||(t.setupContext=Kc(t))}function Ml(t){return ue(t)?t.reduce((l,n)=>(l[n]=null,l),{}):t}function Jf(t,l){const n=Ml(t);for(const s in l){if(s.startsWith("__skip"))continue;let r=n[s];r?ue(r)||he(r)?r=n[s]={type:r,default:l[s]}:r.default=l[s]:r===null&&(r=n[s]={default:l[s]}),r&&l[`__skip_${s}`]&&(r.skipFactory=!0)}return n}function Gf(t,l){return!t||!l?t||l:ue(t)&&ue(l)?t.concat(l):je({},Ml(t),Ml(l))}function Wf(t,l){const n={};for(const s in t)l.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function Kf(t){const l=Dt();let n=t();return Jn(),ws(n)&&(n=n.catch(s=>{throw Si(l),s})),[n,()=>Si(l)]}let On=!0;function Xf(t){const l=Us(t),n=t.proxy,s=t.ctx;On=!1,l.beforeCreate&&ko(l.beforeCreate,t,"bc");const{data:r,computed:c,methods:f,watch:p,provide:o,inject:u,created:g,beforeMount:m,mounted:h,beforeUpdate:v,updated:d,activated:y,deactivated:S,beforeDestroy:T,beforeUnmount:b,destroyed:w,unmounted:k,render:$,renderTracked:B,renderTriggered:z,errorCaptured:M,serverPrefetch:P,expose:F,inheritAttrs:U,components:O,directives:se,filters:we}=l;if(u&&Qf(u,s,null),f)for(const ae in f){const X=f[ae];he(X)&&(s[ae]=X.bind(n))}if(r){const ae=r.call(n,n);Ve(ae)&&(t.data=Ht(ae))}if(On=!0,c)for(const ae in c){const X=c[ae],Te=he(X)?X.bind(n,n):he(X.get)?X.get.bind(n,n):rt,Oe=!he(X)&&he(X.set)?X.set.bind(n):rt,Ye=D({get:Te,set:Oe});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ie=>Ye.value=Ie})}if(p)for(const ae in p)Bc(p[ae],s,n,ae);if(o){const ae=he(o)?o.call(n):o;Reflect.ownKeys(ae).forEach(X=>{tt(X,ae[X])})}g&&ko(g,t,"c");function q(ae,X){ue(X)?X.forEach(Te=>ae(Te.bind(n))):X&&ae(X.bind(n))}if(q(Cc,m),q(ni,h),q(wc,v),q(Ga,d),q(js,y),q(qs,S),q(Tc,M),q(kc,B),q(Ac,z),q(Wa,b),q(xi,k),q(Sc,P),ue(F))if(F.length){const ae=t.exposed||(t.exposed={});F.forEach(X=>{Object.defineProperty(ae,X,{get:()=>n[X],set:Te=>n[X]=Te})})}else t.exposed||(t.exposed={});$&&t.render===rt&&(t.render=$),U!=null&&(t.inheritAttrs=U),O&&(t.components=O),se&&(t.directives=se)}function Qf(t,l,n=rt){ue(t)&&(t=Hn(t));for(const s in t){const r=t[s];let c;Ve(r)?"default"in r?c=Pe(r.from||s,r.default,!0):c=Pe(r.from||s):c=Pe(r),it(c)?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,get:()=>c.value,set:f=>c.value=f}):l[s]=c}}function ko(t,l,n){bt(ue(t)?t.map(s=>s.bind(l.proxy)):t.bind(l.proxy),l,n)}function Bc(t,l,n,s){const r=s.includes(".")?_c(n,s):()=>n[s];if(qe(t)){const c=l[t];he(c)&&at(r,c)}else if(he(t))at(r,t.bind(n));else if(Ve(t))if(ue(t))t.forEach(c=>Bc(c,l,n,s));else{const c=he(t.handler)?t.handler.bind(n):l[t.handler];he(c)&&at(r,c,t)}}function Us(t){const l=t.type,{mixins:n,extends:s}=l,{mixins:r,optionsCache:c,config:{optionMergeStrategies:f}}=t.appContext,p=c.get(l);let o;return p?o=p:!r.length&&!n&&!s?o=l:(o={},r.length&&r.forEach(u=>_a(o,u,f,!0)),_a(o,l,f)),Ve(l)&&c.set(l,o),o}function _a(t,l,n,s=!1){const{mixins:r,extends:c}=l;c&&_a(t,c,n,!0),r&&r.forEach(f=>_a(t,f,n,!0));for(const f in l)if(!(s&&f==="expose")){const p=Zf[f]||n&&n[f];t[f]=p?p(t[f],l[f]):l[f]}return t}const Zf={data:To,props:$o,emits:$o,methods:pl,computed:pl,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:pl,directives:pl,watch:tg,provide:To,inject:eg};function To(t,l){return l?t?function(){return je(he(t)?t.call(this,this):t,he(l)?l.call(this,this):l)}:l:t}function eg(t,l){return pl(Hn(t),Hn(l))}function Hn(t){if(ue(t)){const l={};for(let n=0;n<t.length;n++)l[t[n]]=t[n];return l}return t}function st(t,l){return t?[...new Set([].concat(t,l))]:l}function pl(t,l){return t?je(Object.create(null),t,l):l}function $o(t,l){return t?ue(t)&&ue(l)?[...new Set([...t,...l])]:je(Object.create(null),Ml(t),Ml(l??{})):l}function tg(t,l){if(!t)return l;if(!l)return t;const n=je(Object.create(null),t);for(const s in l)n[s]=st(t[s],l[s]);return n}function Ec(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function lg(t,l){return function(s,r=null){he(s)||(s=je({},s)),r!=null&&!Ve(r)&&(r=null);const c=Ec(),f=new WeakSet;let p=!1;const o=c.app={_uid:ig++,_component:s,_props:r,_container:null,_context:c,_instance:null,version:Qc,get config(){return c.config},set config(u){},use(u,...g){return f.has(u)||(u&&he(u.install)?(f.add(u),u.install(o,...g)):he(u)&&(f.add(u),u(o,...g))),o},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),o},component(u,g){return g?(c.components[u]=g,o):c.components[u]},directive(u,g){return g?(c.directives[u]=g,o):c.directives[u]},mount(u,g,m){if(!p){const h=e(s,r);return h.appContext=c,m===!0?m="svg":m===!1&&(m=void 0),g&&l?l(h,u):t(h,u,m),p=!0,o._container=u,u.__vue_app__=o,Qa(h.component)||h.component.proxy}},unmount(){p&&(t(null,o._container),delete o._container.__vue_app__)},provide(u,g){return c.provides[u]=g,o},runWithContext(u){Dl=o;try{return u()}finally{Dl=null}}};return o}}let Dl=null;function tt(t,l){if(Je){let n=Je.provides;const s=Je.parent&&Je.parent.provides;s===n&&(n=Je.provides=Object.create(s)),n[t]=l}}function Pe(t,l,n=!1){const s=Je||Ue;if(s||Dl){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Dl._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&he(l)?l.call(s&&s.proxy):l}}function ag(){return!!(Je||Ue||Dl)}function ng(t,l,n,s=!1){const r={},c={};ma(c,Xa,1),t.propsDefaults=Object.create(null),Rc(t,l,r,c);for(const f in t.propsOptions[0])f in r||(r[f]=void 0);n?t.props=s?r:Qd(r):t.type.props?t.props=r:t.props=c,t.attrs=c}function sg(t,l,n,s){const{props:r,attrs:c,vnode:{patchFlag:f}}=t,p=xe(r),[o]=t.propsOptions;let u=!1;if((s||f>0)&&!(f&16)){if(f&8){const g=t.vnode.dynamicProps;for(let m=0;m<g.length;m++){let h=g[m];if(Oa(t.emitsOptions,h))continue;const v=l[h];if(o)if(Ee(c,h))v!==c[h]&&(c[h]=v,u=!0);else{const d=ot(h);r[d]=jn(o,p,d,v,t,!1)}else v!==c[h]&&(c[h]=v,u=!0)}}}else{Rc(t,l,r,c)&&(u=!0);let g;for(const m in p)(!l||!Ee(l,m)&&((g=_t(m))===m||!Ee(l,g)))&&(o?n&&(n[m]!==void 0||n[g]!==void 0)&&(r[m]=jn(o,p,m,void 0,t,!0)):delete r[m]);if(c!==p)for(const m in c)(!l||!Ee(l,m))&&(delete c[m],u=!0)}u&&Nt(t,"set","$attrs")}function Rc(t,l,n,s){const[r,c]=t.propsOptions;let f=!1,p;if(l)for(let o in l){if(bl(o))continue;const u=l[o];let g;r&&Ee(r,g=ot(o))?!c||!c.includes(g)?n[g]=u:(p||(p={}))[g]=u:Oa(t.emitsOptions,o)||(!(o in s)||u!==s[o])&&(s[o]=u,f=!0)}if(c){const o=xe(n),u=p||De;for(let g=0;g<c.length;g++){const m=c[g];n[m]=jn(r,o,m,u[m],t,!Ee(u,m))}}return f}function jn(t,l,n,s,r,c){const f=t[n];if(f!=null){const p=Ee(f,"default");if(p&&s===void 0){const o=f.default;if(f.type!==Function&&!f.skipFactory&&he(o)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const g=Si(r);s=u[n]=o.call(null,l),g()}}else s=o}f[0]&&(c&&!p?s=!1:f[1]&&(s===""||s===_t(n))&&(s=!0))}return s}function Pc(t,l,n=!1){const s=l.propsCache,r=s.get(t);if(r)return r;const c=t.props,f={},p=[];let o=!1;if(!he(t)){const g=m=>{o=!0;const[h,v]=Pc(m,l,!0);je(f,h),v&&p.push(...v)};!n&&l.mixins.length&&l.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!c&&!o)return Ve(t)&&s.set(t,Di),Di;if(ue(c))for(let g=0;g<c.length;g++){const m=ot(c[g]);xo(m)&&(f[m]=De)}else if(c)for(const g in c){const m=ot(g);if(xo(m)){const h=c[g],v=f[m]=ue(h)||he(h)?{type:h}:je({},h);if(v){const d=Ro(Boolean,v.type),y=Ro(String,v.type);v[0]=d>-1,v[1]=y<0||d<y,(d>-1||Ee(v,"default"))&&p.push(m)}}}const u=[f,p];return Ve(t)&&s.set(t,u),u}function xo(t){return t[0]!=="$"}function Bo(t){const l=t&&t.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:t===null?"null":""}function Eo(t,l){return Bo(t)===Bo(l)}function Ro(t,l){return ue(l)?l.findIndex(n=>Eo(n,t)):he(l)&&Eo(l,t)?0:-1}const zc=t=>t[0]==="_"||t==="$stable",Ys=t=>ue(t)?t.map(gt):[gt(t)],og=(t,l,n)=>{if(l._n)return l;const s=i((...r)=>Ys(l(...r)),n);return s._c=!1,s},Mc=(t,l,n)=>{const s=t._ctx;for(const r in t){if(zc(r))continue;const c=t[r];if(he(c))l[r]=og(r,c,s);else if(c!=null){const f=Ys(c);l[r]=()=>f}}},Dc=(t,l)=>{const n=Ys(l);t.slots.default=()=>n},ug=(t,l)=>{if(t.vnode.shapeFlag&32){const n=l._;n?(t.slots=xe(l),ma(l,"_",n)):Mc(l,t.slots={})}else t.slots={},l&&Dc(t,l);ma(t.slots,Xa,1)},rg=(t,l,n)=>{const{vnode:s,slots:r}=t;let c=!0,f=De;if(s.shapeFlag&32){const p=l._;p?n&&p===1?c=!1:(je(r,l),!n&&p===1&&delete r._):(c=!l.$stable,Mc(l,r)),f=l}else l&&(Dc(t,l),f={default:1});if(c)for(const p in r)!zc(p)&&f[p]==null&&delete r[p]};function ba(t,l,n,s,r=!1){if(ue(t)){t.forEach((h,v)=>ba(h,l&&(ue(l)?l[v]:l),n,s,r));return}if(_i(s)&&!r)return;const c=s.shapeFlag&4?Qa(s.component)||s.component.proxy:s.el,f=r?null:c,{i:p,r:o}=t,u=l&&l.r,g=p.refs===De?p.refs={}:p.refs,m=p.setupState;if(u!=null&&u!==o&&(qe(u)?(g[u]=null,Ee(m,u)&&(m[u]=null)):it(u)&&(u.value=null)),he(o))Lt(o,p,12,[f,g]);else{const h=qe(o),v=it(o),d=t.f;if(h||v){const y=()=>{if(d){const S=h?Ee(m,o)?m[o]:g[o]:o.value;r?ue(S)&&Cs(S,c):ue(S)?S.includes(c)||S.push(c):h?(g[o]=[c],Ee(m,o)&&(m[o]=g[o])):(o.value=[c],t.k&&(g[t.k]=o.value))}else h?(g[o]=f,Ee(m,o)&&(m[o]=f)):v&&(o.value=f,t.k&&(g[t.k]=f))};r||d?y():(y.id=-1,et(y,n))}}}let Yt=!1;const dg=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",cg=t=>t.namespaceURI.includes("MathML"),ta=t=>{if(dg(t))return"svg";if(cg(t))return"mathml"},ia=t=>t.nodeType===8;function mg(t){const{mt:l,p:n,o:{patchProp:s,createText:r,nextSibling:c,parentNode:f,remove:p,insert:o,createComment:u}}=t,g=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),ha(),k._vnode=w;return}Yt=!1,m(k.firstChild,w,null,null,null),ha(),k._vnode=w,Yt&&console.error("Hydration completed but contains mismatches.")},m=(w,k,$,B,z,M=!1)=>{const P=ia(w)&&w.data==="[",F=()=>y(w,k,$,B,z,P),{type:U,ref:O,shapeFlag:se,patchFlag:we}=k;let V=w.nodeType;k.el=w,we===-2&&(M=!1,k.dynamicChildren=null);let q=null;switch(U){case Ci:V!==3?k.children===""?(o(k.el=r(""),f(w),w),q=w):q=F():(w.data!==k.children&&(Yt=!0,w.data=k.children),q=c(w));break;case nt:b(w)?(q=c(w),T(k.el=w.content.firstChild,w,$)):V!==8||P?q=F():q=c(w);break;case bi:if(P&&(w=c(w),V=w.nodeType),V===1||V===3){q=w;const ae=!k.children.length;for(let X=0;X<k.staticCount;X++)ae&&(k.children+=q.nodeType===1?q.outerHTML:q.data),X===k.staticCount-1&&(k.anchor=q),q=c(q);return P?c(q):q}else F();break;case Ce:P?q=d(w,k,$,B,z,M):q=F();break;default:if(se&1)(V!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?q=F():q=h(w,k,$,B,z,M);else if(se&6){k.slotScopeIds=z;const ae=f(w);if(P?q=S(w):ia(w)&&w.data==="teleport start"?q=S(w,w.data,"teleport end"):q=c(w),l(k,ae,null,$,B,ta(ae),M),_i(k)){let X;P?(X=e(Ce),X.anchor=q?q.previousSibling:ae.lastChild):X=w.nodeType===3?a(""):e("div"),X.el=w,k.component.subTree=X}}else se&64?V!==8?q=F():q=k.type.hydrate(w,k,$,B,z,M,t,v):se&128&&(q=k.type.hydrate(w,k,$,B,ta(f(w)),z,M,t,m))}return O!=null&&ba(O,null,B,k),q},h=(w,k,$,B,z,M)=>{M=M||!!k.dynamicChildren;const{type:P,props:F,patchFlag:U,shapeFlag:O,dirs:se,transition:we}=k,V=P==="input"||P==="option";if(V||U!==-1){se&&Rt(k,null,$,"created");let q=!1;if(b(w)){q=Nc(B,we)&&$&&$.vnode.props&&$.vnode.props.appear;const X=w.content.firstChild;q&&we.beforeEnter(X),T(X,w,$),k.el=w=X}if(O&16&&!(F&&(F.innerHTML||F.textContent))){let X=v(w.firstChild,k,w,$,B,z,M);for(;X;){Yt=!0;const Te=X;X=X.nextSibling,p(Te)}}else O&8&&w.textContent!==k.children&&(Yt=!0,w.textContent=k.children);if(F)if(V||!M||U&48)for(const X in F)(V&&(X.endsWith("value")||X==="indeterminate")||Nl(X)&&!bl(X)||X[0]===".")&&s(w,X,null,F[X],void 0,void 0,$);else F.onClick&&s(w,"onClick",null,F.onClick,void 0,void 0,$);let ae;(ae=F&&F.onVnodeBeforeMount)&&ut(ae,$,k),se&&Rt(k,null,$,"beforeMount"),((ae=F&&F.onVnodeMounted)||se||q)&&mc(()=>{ae&&ut(ae,$,k),q&&we.enter(w),se&&Rt(k,null,$,"mounted")},B)}return w.nextSibling},v=(w,k,$,B,z,M,P)=>{P=P||!!k.dynamicChildren;const F=k.children,U=F.length;for(let O=0;O<U;O++){const se=P?F[O]:F[O]=gt(F[O]);if(w)w=m(w,se,B,z,M,P);else{if(se.type===Ci&&!se.children)continue;Yt=!0,n(null,se,$,null,B,z,ta($),M)}}return w},d=(w,k,$,B,z,M)=>{const{slotScopeIds:P}=k;P&&(z=z?z.concat(P):P);const F=f(w),U=v(c(w),k,F,$,B,z,M);return U&&ia(U)&&U.data==="]"?c(k.anchor=U):(Yt=!0,o(k.anchor=u("]"),F,U),U)},y=(w,k,$,B,z,M)=>{if(Yt=!0,k.el=null,M){const U=S(w);for(;;){const O=c(w);if(O&&O!==U)p(O);else break}}const P=c(w),F=f(w);return p(w),n(null,k,F,P,$,B,ta(F),z),P},S=(w,k="[",$="]")=>{let B=0;for(;w;)if(w=c(w),w&&ia(w)&&(w.data===k&&B++,w.data===$)){if(B===0)return c(w);B--}return w},T=(w,k,$)=>{const B=k.parentNode;B&&B.replaceChild(w,k);let z=$;for(;z;)z.vnode.el===k&&(z.vnode.el=z.subTree.el=w),z=z.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,m]}const et=mc;function Ic(t){return Vc(t)}function Fc(t){return Vc(t,mg)}function Vc(t,l){const n=zd();n.__VUE__=!0;const{insert:s,remove:r,patchProp:c,createElement:f,createText:p,createComment:o,setText:u,setElementText:g,parentNode:m,nextSibling:h,setScopeId:v=rt,insertStaticContent:d}=t,y=(x,R,I,Y=null,J=null,Z=null,le=void 0,Q=null,te=!!R.dynamicChildren)=>{if(x===R)return;x&&!Tt(x,R)&&(Y=ee(x),Ie(x,J,Z,!0),x=null),R.patchFlag===-2&&(te=!1,R.dynamicChildren=null);const{type:W,ref:oe,shapeFlag:pe}=R;switch(W){case Ci:S(x,R,I,Y);break;case nt:T(x,R,I,Y);break;case bi:x==null&&b(R,I,Y,le);break;case Ce:O(x,R,I,Y,J,Z,le,Q,te);break;default:pe&1?$(x,R,I,Y,J,Z,le,Q,te):pe&6?se(x,R,I,Y,J,Z,le,Q,te):(pe&64||pe&128)&&W.process(x,R,I,Y,J,Z,le,Q,te,Me)}oe!=null&&J&&ba(oe,x&&x.ref,Z,R||x,!R)},S=(x,R,I,Y)=>{if(x==null)s(R.el=p(R.children),I,Y);else{const J=R.el=x.el;R.children!==x.children&&u(J,R.children)}},T=(x,R,I,Y)=>{x==null?s(R.el=o(R.children||""),I,Y):R.el=x.el},b=(x,R,I,Y)=>{[x.el,x.anchor]=d(x.children,R,I,Y,x.el,x.anchor)},w=({el:x,anchor:R},I,Y)=>{let J;for(;x&&x!==R;)J=h(x),s(x,I,Y),x=J;s(R,I,Y)},k=({el:x,anchor:R})=>{let I;for(;x&&x!==R;)I=h(x),r(x),x=I;r(R)},$=(x,R,I,Y,J,Z,le,Q,te)=>{R.type==="svg"?le="svg":R.type==="math"&&(le="mathml"),x==null?B(R,I,Y,J,Z,le,Q,te):P(x,R,J,Z,le,Q,te)},B=(x,R,I,Y,J,Z,le,Q)=>{let te,W;const{props:oe,shapeFlag:pe,transition:ce,dirs:be}=x;if(te=x.el=f(x.type,Z,oe&&oe.is,oe),pe&8?g(te,x.children):pe&16&&M(x.children,te,null,Y,J,fn(x,Z),le,Q),be&&Rt(x,null,Y,"created"),z(te,x,x.scopeId,le,Y),oe){for(const Fe in oe)Fe!=="value"&&!bl(Fe)&&c(te,Fe,null,oe[Fe],Z,x.children,Y,J,ie);"value"in oe&&c(te,"value",null,oe.value,Z),(W=oe.onVnodeBeforeMount)&&ut(W,Y,x)}be&&Rt(x,null,Y,"beforeMount");const $e=Nc(J,ce);$e&&ce.beforeEnter(te),s(te,R,I),((W=oe&&oe.onVnodeMounted)||$e||be)&&et(()=>{W&&ut(W,Y,x),$e&&ce.enter(te),be&&Rt(x,null,Y,"mounted")},J)},z=(x,R,I,Y,J)=>{if(I&&v(x,I),Y)for(let Z=0;Z<Y.length;Z++)v(x,Y[Z]);if(J){let Z=J.subTree;if(R===Z){const le=J.vnode;z(x,le,le.scopeId,le.slotScopeIds,J.parent)}}},M=(x,R,I,Y,J,Z,le,Q,te=0)=>{for(let W=te;W<x.length;W++){const oe=x[W]=Q?Qt(x[W]):gt(x[W]);y(null,oe,R,I,Y,J,Z,le,Q)}},P=(x,R,I,Y,J,Z,le)=>{const Q=R.el=x.el;let{patchFlag:te,dynamicChildren:W,dirs:oe}=R;te|=x.patchFlag&16;const pe=x.props||De,ce=R.props||De;let be;if(I&&ui(I,!1),(be=ce.onVnodeBeforeUpdate)&&ut(be,I,R,x),oe&&Rt(R,x,I,"beforeUpdate"),I&&ui(I,!0),W?F(x.dynamicChildren,W,Q,I,Y,fn(R,J),Z):le||X(x,R,Q,null,I,Y,fn(R,J),Z,!1),te>0){if(te&16)U(Q,R,pe,ce,I,Y,J);else if(te&2&&pe.class!==ce.class&&c(Q,"class",null,ce.class,J),te&4&&c(Q,"style",pe.style,ce.style,J),te&8){const $e=R.dynamicProps;for(let Fe=0;Fe<$e.length;Fe++){const He=$e[Fe],We=pe[He],kt=ce[He];(kt!==We||He==="value")&&c(Q,He,We,kt,J,x.children,I,Y,ie)}}te&1&&x.children!==R.children&&g(Q,R.children)}else!le&&W==null&&U(Q,R,pe,ce,I,Y,J);((be=ce.onVnodeUpdated)||oe)&&et(()=>{be&&ut(be,I,R,x),oe&&Rt(R,x,I,"updated")},Y)},F=(x,R,I,Y,J,Z,le)=>{for(let Q=0;Q<R.length;Q++){const te=x[Q],W=R[Q],oe=te.el&&(te.type===Ce||!Tt(te,W)||te.shapeFlag&70)?m(te.el):I;y(te,W,oe,null,Y,J,Z,le,!0)}},U=(x,R,I,Y,J,Z,le)=>{if(I!==Y){if(I!==De)for(const Q in I)!bl(Q)&&!(Q in Y)&&c(x,Q,I[Q],null,le,R.children,J,Z,ie);for(const Q in Y){if(bl(Q))continue;const te=Y[Q],W=I[Q];te!==W&&Q!=="value"&&c(x,Q,W,te,le,R.children,J,Z,ie)}"value"in Y&&c(x,"value",I.value,Y.value,le)}},O=(x,R,I,Y,J,Z,le,Q,te)=>{const W=R.el=x?x.el:p(""),oe=R.anchor=x?x.anchor:p("");let{patchFlag:pe,dynamicChildren:ce,slotScopeIds:be}=R;be&&(Q=Q?Q.concat(be):be),x==null?(s(W,I,Y),s(oe,I,Y),M(R.children||[],I,oe,J,Z,le,Q,te)):pe>0&&pe&64&&ce&&x.dynamicChildren?(F(x.dynamicChildren,ce,I,J,Z,le,Q),(R.key!=null||J&&R===J.subTree)&&Js(x,R,!0)):X(x,R,I,oe,J,Z,le,Q,te)},se=(x,R,I,Y,J,Z,le,Q,te)=>{R.slotScopeIds=Q,x==null?R.shapeFlag&512?J.ctx.activate(R,I,Y,le,te):we(R,I,Y,J,Z,le,te):V(x,R,te)},we=(x,R,I,Y,J,Z,le)=>{const Q=x.component=Yc(x,Y,J);if(ql(x)&&(Q.ctx.renderer=Me),Gc(Q),Q.asyncDep){if(J&&J.registerDep(Q,q),!x.el){const te=Q.subTree=e(nt);T(null,te,R,I)}}else q(Q,x,R,I,J,Z,le)},V=(x,R,I)=>{const Y=R.component=x.component;if(yf(x,R,I))if(Y.asyncDep&&!Y.asyncResolved){ae(Y,R,I);return}else Y.next=R,pf(Y.update),Y.effect.dirty=!0,Y.update();else R.el=x.el,Y.vnode=R},q=(x,R,I,Y,J,Z,le)=>{const Q=()=>{if(x.isMounted){let{next:oe,bu:pe,u:ce,parent:be,vnode:$e}=x;{const Ei=Lc(x);if(Ei){oe&&(oe.el=$e.el,ae(x,oe,le)),Ei.asyncDep.then(()=>{x.isUnmounted||Q()});return}}let Fe=oe,He;ui(x,!1),oe?(oe.el=$e.el,ae(x,oe,le)):oe=$e,pe&&Fi(pe),(He=oe.props&&oe.props.onVnodeBeforeUpdate)&&ut(He,be,oe,$e),ui(x,!0);const We=ra(x),kt=x.subTree;x.subTree=We,y(kt,We,m(kt.el),ee(kt),x,J,Z),oe.el=We.el,Fe===null&&Is(x,We.el),ce&&et(ce,J),(He=oe.props&&oe.props.onVnodeUpdated)&&et(()=>ut(He,be,oe,$e),J)}else{let oe;const{el:pe,props:ce}=R,{bm:be,m:$e,parent:Fe}=x,He=_i(R);if(ui(x,!1),be&&Fi(be),!He&&(oe=ce&&ce.onVnodeBeforeMount)&&ut(oe,Fe,R),ui(x,!0),pe&&ye){const We=()=>{x.subTree=ra(x),ye(pe,x.subTree,x,J,null)};He?R.type.__asyncLoader().then(()=>!x.isUnmounted&&We()):We()}else{const We=x.subTree=ra(x);y(null,We,I,Y,x,J,Z),R.el=We.el}if($e&&et($e,J),!He&&(oe=ce&&ce.onVnodeMounted)){const We=R;et(()=>ut(oe,Fe,We),J)}(R.shapeFlag&256||Fe&&_i(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&x.a&&et(x.a,J),x.isMounted=!0,R=I=Y=null}},te=x.effect=new Yi(Q,rt,()=>La(W),x.scope),W=x.update=()=>{te.dirty&&te.run()};W.id=x.uid,ui(x,!0),W()},ae=(x,R,I)=>{R.component=x;const Y=x.vnode.props;x.vnode=R,x.next=null,sg(x,R.props,Y,I),rg(x,R.children,I),ki(),yo(x),Ti()},X=(x,R,I,Y,J,Z,le,Q,te=!1)=>{const W=x&&x.children,oe=x?x.shapeFlag:0,pe=R.children,{patchFlag:ce,shapeFlag:be}=R;if(ce>0){if(ce&128){Oe(W,pe,I,Y,J,Z,le,Q,te);return}else if(ce&256){Te(W,pe,I,Y,J,Z,le,Q,te);return}}be&8?(oe&16&&ie(W,J,Z),pe!==W&&g(I,pe)):oe&16?be&16?Oe(W,pe,I,Y,J,Z,le,Q,te):ie(W,J,Z,!0):(oe&8&&g(I,""),be&16&&M(pe,I,Y,J,Z,le,Q,te))},Te=(x,R,I,Y,J,Z,le,Q,te)=>{x=x||Di,R=R||Di;const W=x.length,oe=R.length,pe=Math.min(W,oe);let ce;for(ce=0;ce<pe;ce++){const be=R[ce]=te?Qt(R[ce]):gt(R[ce]);y(x[ce],be,I,null,J,Z,le,Q,te)}W>oe?ie(x,J,Z,!0,!1,pe):M(R,I,Y,J,Z,le,Q,te,pe)},Oe=(x,R,I,Y,J,Z,le,Q,te)=>{let W=0;const oe=R.length;let pe=x.length-1,ce=oe-1;for(;W<=pe&&W<=ce;){const be=x[W],$e=R[W]=te?Qt(R[W]):gt(R[W]);if(Tt(be,$e))y(be,$e,I,null,J,Z,le,Q,te);else break;W++}for(;W<=pe&&W<=ce;){const be=x[pe],$e=R[ce]=te?Qt(R[ce]):gt(R[ce]);if(Tt(be,$e))y(be,$e,I,null,J,Z,le,Q,te);else break;pe--,ce--}if(W>pe){if(W<=ce){const be=ce+1,$e=be<oe?R[be].el:Y;for(;W<=ce;)y(null,R[W]=te?Qt(R[W]):gt(R[W]),I,$e,J,Z,le,Q,te),W++}}else if(W>ce)for(;W<=pe;)Ie(x[W],J,Z,!0),W++;else{const be=W,$e=W,Fe=new Map;for(W=$e;W<=ce;W++){const pt=R[W]=te?Qt(R[W]):gt(R[W]);pt.key!=null&&Fe.set(pt.key,W)}let He,We=0;const kt=ce-$e+1;let Ei=!1,oo=0;const sl=new Array(kt);for(W=0;W<kt;W++)sl[W]=0;for(W=be;W<=pe;W++){const pt=x[W];if(We>=kt){Ie(pt,J,Z,!0);continue}let Et;if(pt.key!=null)Et=Fe.get(pt.key);else for(He=$e;He<=ce;He++)if(sl[He-$e]===0&&Tt(pt,R[He])){Et=He;break}Et===void 0?Ie(pt,J,Z,!0):(sl[Et-$e]=W+1,Et>=oo?oo=Et:Ei=!0,y(pt,R[Et],I,null,J,Z,le,Q,te),We++)}const uo=Ei?pg(sl):Di;for(He=uo.length-1,W=kt-1;W>=0;W--){const pt=$e+W,Et=R[pt],ro=pt+1<oe?R[pt+1].el:Y;sl[W]===0?y(null,Et,I,ro,J,Z,le,Q,te):Ei&&(He<0||W!==uo[He]?Ye(Et,I,ro,2):He--)}}},Ye=(x,R,I,Y,J=null)=>{const{el:Z,type:le,transition:Q,children:te,shapeFlag:W}=x;if(W&6){Ye(x.component.subTree,R,I,Y);return}if(W&128){x.suspense.move(R,I,Y);return}if(W&64){le.move(x,R,I,Me);return}if(le===Ce){s(Z,R,I);for(let pe=0;pe<te.length;pe++)Ye(te[pe],R,I,Y);s(x.anchor,R,I);return}if(le===bi){w(x,R,I);return}if(Y!==2&&W&1&&Q)if(Y===0)Q.beforeEnter(Z),s(Z,R,I),et(()=>Q.enter(Z),J);else{const{leave:pe,delayLeave:ce,afterLeave:be}=Q,$e=()=>s(Z,R,I),Fe=()=>{pe(Z,()=>{$e(),be&&be()})};ce?ce(Z,$e,Fe):Fe()}else s(Z,R,I)},Ie=(x,R,I,Y=!1,J=!1)=>{const{type:Z,props:le,ref:Q,children:te,dynamicChildren:W,shapeFlag:oe,patchFlag:pe,dirs:ce}=x;if(Q!=null&&ba(Q,null,I,x,!0),oe&256){R.ctx.deactivate(x);return}const be=oe&1&&ce,$e=!_i(x);let Fe;if($e&&(Fe=le&&le.onVnodeBeforeUnmount)&&ut(Fe,R,x),oe&6)H(x.component,I,Y);else{if(oe&128){x.suspense.unmount(I,Y);return}be&&Rt(x,null,R,"beforeUnmount"),oe&64?x.type.remove(x,R,I,J,Me,Y):W&&(Z!==Ce||pe>0&&pe&64)?ie(W,R,I,!1,!0):(Z===Ce&&pe&384||!J&&oe&16)&&ie(te,R,I),Y&&Bt(x)}($e&&(Fe=le&&le.onVnodeUnmounted)||be)&&et(()=>{Fe&&ut(Fe,R,x),be&&Rt(x,null,R,"unmounted")},I)},Bt=x=>{const{type:R,el:I,anchor:Y,transition:J}=x;if(R===Ce){mt(I,Y);return}if(R===bi){k(x);return}const Z=()=>{r(I),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(x.shapeFlag&1&&J&&!J.persisted){const{leave:le,delayLeave:Q}=J,te=()=>le(I,Z);Q?Q(x.el,Z,te):te()}else Z()},mt=(x,R)=>{let I;for(;x!==R;)I=h(x),r(x),x=I;r(R)},H=(x,R,I)=>{const{bum:Y,scope:J,update:Z,subTree:le,um:Q}=x;Y&&Fi(Y),J.stop(),Z&&(Z.active=!1,Ie(le,x,R,I)),Q&&et(Q,R),et(()=>{x.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ie=(x,R,I,Y=!1,J=!1,Z=0)=>{for(let le=Z;le<x.length;le++)Ie(x[le],R,I,Y,J)},ee=x=>x.shapeFlag&6?ee(x.component.subTree):x.shapeFlag&128?x.suspense.next():h(x.anchor||x.el);let re=!1;const ze=(x,R,I)=>{x==null?R._vnode&&Ie(R._vnode,null,null,!0):y(R._vnode||null,x,R,null,null,null,I),re||(re=!0,yo(),ha(),re=!1),R._vnode=x},Me={p:y,um:Ie,m:Ye,r:Bt,mt:we,mc:M,pc:X,pbc:F,n:ee,o:t};let ve,ye;return l&&([ve,ye]=l(Me)),{render:ze,hydrate:ve,createApp:lg(ze,ve)}}function fn({type:t,props:l},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:n}function ui({effect:t,update:l},n){t.allowRecurse=l.allowRecurse=n}function Nc(t,l){return(!t||t&&!t.pendingBranch)&&l&&!l.persisted}function Js(t,l,n=!1){const s=t.children,r=l.children;if(ue(s)&&ue(r))for(let c=0;c<s.length;c++){const f=s[c];let p=r[c];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[c]=Qt(r[c]),p.el=f.el),n||Js(f,p)),p.type===Ci&&(p.el=f.el)}}function pg(t){const l=t.slice(),n=[0];let s,r,c,f,p;const o=t.length;for(s=0;s<o;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){l[s]=r,n.push(s);continue}for(c=0,f=n.length-1;c<f;)p=c+f>>1,t[n[p]]<u?c=p+1:f=p;u<t[n[c]]&&(c>0&&(l[s]=n[c-1]),n[c]=s)}}for(c=n.length,f=n[c-1];c-- >0;)n[c]=f,f=l[f];return n}function Lc(t){const l=t.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:Lc(l)}const fg=t=>t.__isTeleport,Cl=t=>t&&(t.disabled||t.disabled===""),Po=t=>typeof SVGElement<"u"&&t instanceof SVGElement,zo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,qn=(t,l)=>{const n=t&&t.to;return qe(n)?l?l(n):null:n},gg={name:"Teleport",__isTeleport:!0,process(t,l,n,s,r,c,f,p,o,u){const{mc:g,pc:m,pbc:h,o:{insert:v,querySelector:d,createText:y,createComment:S}}=u,T=Cl(l.props);let{shapeFlag:b,children:w,dynamicChildren:k}=l;if(t==null){const $=l.el=y(""),B=l.anchor=y("");v($,n,s),v(B,n,s);const z=l.target=qn(l.props,d),M=l.targetAnchor=y("");z&&(v(M,z),f==="svg"||Po(z)?f="svg":(f==="mathml"||zo(z))&&(f="mathml"));const P=(F,U)=>{b&16&&g(w,F,U,r,c,f,p,o)};T?P(n,B):z&&P(z,M)}else{l.el=t.el;const $=l.anchor=t.anchor,B=l.target=t.target,z=l.targetAnchor=t.targetAnchor,M=Cl(t.props),P=M?n:B,F=M?$:z;if(f==="svg"||Po(B)?f="svg":(f==="mathml"||zo(B))&&(f="mathml"),k?(h(t.dynamicChildren,k,P,r,c,f,p),Js(t,l,!0)):o||m(t,l,P,F,r,c,f,p,!1),T)M?l.props&&t.props&&l.props.to!==t.props.to&&(l.props.to=t.props.to):la(l,n,$,u,1);else if((l.props&&l.props.to)!==(t.props&&t.props.to)){const U=l.target=qn(l.props,d);U&&la(l,U,null,u,0)}else M&&la(l,B,z,u,1)}Oc(l)},remove(t,l,n,s,{um:r,o:{remove:c}},f){const{shapeFlag:p,children:o,anchor:u,targetAnchor:g,target:m,props:h}=t;if(m&&c(g),f&&c(u),p&16){const v=f||!Cl(h);for(let d=0;d<o.length;d++){const y=o[d];r(y,l,n,v,!!y.dynamicChildren)}}},move:la,hydrate:hg};function la(t,l,n,{o:{insert:s},m:r},c=2){c===0&&s(t.targetAnchor,l,n);const{el:f,anchor:p,shapeFlag:o,children:u,props:g}=t,m=c===2;if(m&&s(f,l,n),(!m||Cl(g))&&o&16)for(let h=0;h<u.length;h++)r(u[h],l,n,2);m&&s(p,l,n)}function hg(t,l,n,s,r,c,{o:{nextSibling:f,parentNode:p,querySelector:o}},u){const g=l.target=qn(l.props,o);if(g){const m=g._lpa||g.firstChild;if(l.shapeFlag&16)if(Cl(l.props))l.anchor=u(f(t),l,p(t),n,s,r,c),l.targetAnchor=m;else{l.anchor=f(t);let h=m;for(;h;)if(h=f(h),h&&h.nodeType===8&&h.data==="teleport anchor"){l.targetAnchor=h,g._lpa=l.targetAnchor&&f(l.targetAnchor);break}u(m,l,g,n,s,r,c)}Oc(l)}return l.anchor&&f(l.anchor)}const Ka=gg;function Oc(t){const l=t.ctx;if(l&&l.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const Ce=Symbol.for("v-fgt"),Ci=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),bi=Symbol.for("v-stc"),wl=[];let dt=null;function L(t=!1){wl.push(dt=t?null:[])}function Hc(){wl.pop(),dt=wl[wl.length-1]||null}let wi=1;function Un(t){wi+=t}function jc(t){return t.dynamicChildren=wi>0?dt||Di:null,Hc(),wi>0&&dt&&dt.push(t),t}function ne(t,l,n,s,r,c){return jc(C(t,l,n,s,r,c,!0))}function ge(t,l,n,s,r){return jc(e(t,l,n,s,r,!0))}function At(t){return t?t.__v_isVNode===!0:!1}function Tt(t,l){return t.type===l.type&&t.key===l.key}function _g(t){}const Xa="__vInternal",qc=({key:t})=>t??null,da=({ref:t,ref_key:l,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||it(t)||he(t)?{i:Ue,r:t,k:l,f:!!n}:t:null);function C(t,l=null,n=null,s=0,r=null,c=t===Ce?0:1,f=!1,p=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:l,key:l&&qc(l),ref:l&&da(l),scopeId:Ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ue};return p?(Ws(o,n),c&128&&t.normalize(o)):n&&(o.shapeFlag|=qe(n)?8:16),wi>0&&!f&&dt&&(o.patchFlag>0||c&6)&&o.patchFlag!==32&&dt.push(o),o}const e=bg;function bg(t,l=null,n=null,s=0,r=null,c=!1){if((!t||t===rc)&&(t=nt),At(t)){const p=zt(t,l,!0);return n&&Ws(p,n),wi>0&&!c&&dt&&(p.shapeFlag&6?dt[dt.indexOf(t)]=p:dt.push(p)),p.patchFlag|=-2,p}if(Tg(t)&&(t=t.__vccOpts),l){l=Uc(l);let{class:p,style:o}=l;p&&!qe(p)&&(l.class=Ol(p)),Ve(o)&&(Es(o)&&!ue(o)&&(o=je({},o)),l.style=il(o))}const f=qe(t)?1:cc(t)?128:fg(t)?64:Ve(t)?4:he(t)?2:0;return C(t,l,n,s,r,f,c,!0)}function Uc(t){return t?Es(t)||Xa in t?je({},t):t:null}function zt(t,l,n=!1){const{props:s,ref:r,patchFlag:c,children:f}=t,p=l?Bi(s||{},l):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&qc(p),ref:l&&l.ref?n&&r?ue(r)?r.concat(da(l)):[r,da(l)]:da(l):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:l&&t.type!==Ce?c===-1?16:c|16:c,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function a(t=" ",l=0){return e(Ci,null,t,l)}function vg(t,l){const n=e(bi,null,t);return n.staticCount=l,n}function Gs(t="",l=!1){return l?(L(),ge(nt,null,t)):e(nt,null,t)}function gt(t){return t==null||typeof t=="boolean"?e(nt):ue(t)?e(Ce,null,t.slice()):typeof t=="object"?Qt(t):e(Ci,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Ws(t,l){let n=0;const{shapeFlag:s}=t;if(l==null)l=null;else if(ue(l))n=16;else if(typeof l=="object")if(s&65){const r=l.default;r&&(r._c&&(r._d=!1),Ws(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=l._;!r&&!(Xa in l)?l._ctx=Ue:r===3&&Ue&&(Ue.slots._===1?l._=1:(l._=2,t.patchFlag|=1024))}else he(l)?(l={default:l,_ctx:Ue},n=32):(l=String(l),s&64?(n=16,l=[a(l)]):n=8);t.children=l,t.shapeFlag|=n}function Bi(...t){const l={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")l.class!==s.class&&(l.class=Ol([l.class,s.class]));else if(r==="style")l.style=il([l.style,s.style]);else if(Nl(r)){const c=l[r],f=s[r];f&&c!==f&&!(ue(c)&&c.includes(f))&&(l[r]=c?[].concat(c,f):f)}else r!==""&&(l[r]=s[r])}return l}function ut(t,l,n,s=null){bt(t,l,7,[n,s])}const yg=Ec();let Cg=0;function Yc(t,l,n){const s=t.type,r=(l?l.appContext:t.appContext)||yg,c={uid:Cg++,vnode:t,type:s,parent:l,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new As(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(s,r),emitsOptions:uc(s,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=l?l.root:c,c.emit=gf.bind(null,c),t.ce&&t.ce(c),c}let Je=null;const Dt=()=>Je||Ue;let va,Yn;{const t=zd(),l=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),c=>{r.length>1?r.forEach(f=>f(c)):r[0](c)}};va=l("__VUE_INSTANCE_SETTERS__",n=>Je=n),Yn=l("__VUE_SSR_SETTERS__",n=>Ul=n)}const Si=t=>{const l=Je;return va(t),t.scope.on(),()=>{t.scope.off(),va(l)}},Jn=()=>{Je&&Je.scope.off(),va(null)};function Jc(t){return t.vnode.shapeFlag&4}let Ul=!1;function Gc(t,l=!1){l&&Yn(l);const{props:n,children:s}=t.vnode,r=Jc(t);ng(t,n,r,l),ug(t,s);const c=r?wg(t,l):void 0;return l&&Yn(!1),c}function wg(t,l){const n=t.type;t.accessCache=Object.create(null),t.proxy=Rs(new Proxy(t.ctx,Ln));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Kc(t):null,c=Si(t);ki();const f=Lt(s,t,0,[t.props,r]);if(Ti(),c(),ws(f)){if(f.then(Jn,Jn),l)return f.then(p=>{Gn(t,p,l)}).catch(p=>{$i(p,t,0)});t.asyncDep=f}else Gn(t,f,l)}else Wc(t,l)}function Gn(t,l,n){he(l)?t.type.__ssrInlineRender?t.ssrRender=l:t.render=l:Ve(l)&&(t.setupState=Ms(l)),Wc(t,n)}let ya,Wn;function Sg(t){ya=t,Wn=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,Ff))}}const Ag=()=>!ya;function Wc(t,l,n){const s=t.type;if(!t.render){if(!l&&ya&&!s.render){const r=s.template||Us(t).template;if(r){const{isCustomElement:c,compilerOptions:f}=t.appContext.config,{delimiters:p,compilerOptions:o}=s,u=je(je({isCustomElement:c,delimiters:p},f),o);s.render=ya(r,u)}}t.render=s.render||rt,Wn&&Wn(t)}{const r=Si(t);ki();try{Xf(t)}finally{Ti(),r()}}}function kg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(l,n){return ct(t,"get","$attrs"),l[n]}}))}function Kc(t){const l=n=>{t.exposed=n||{}};return{get attrs(){return kg(t)},slots:t.slots,emit:t.emit,expose:l}}function Qa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ms(Rs(t.exposed)),{get(l,n){if(n in l)return l[n];if(n in yl)return yl[n](t)},has(l,n){return n in l||n in yl}}))}function Kn(t,l=!0){return he(t)?t.displayName||t.name:t.name||l&&t.__name}function Tg(t){return he(t)&&"__vccOpts"in t}const D=(t,l)=>Kp(t,l,Ul);function $g(t,l,n=De){const s=Dt(),r=ot(l),c=_t(l),f=ic((o,u)=>{let g;return hc(()=>{const m=t[l];$t(g,m)&&(g=m,u())}),{get(){return o(),n.get?n.get(g):g},set(m){const h=s.vnode.props;!(h&&(l in h||r in h||c in h)&&(`onUpdate:${l}`in h||`onUpdate:${r}`in h||`onUpdate:${c}`in h))&&$t(m,g)&&(g=m,u()),s.emit(`update:${l}`,n.set?n.set(m):m)}}}),p=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return f[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?t[p]||{}:f,done:!1}:{done:!0}}}},f}function j(t,l,n){const s=arguments.length;return s===2?Ve(l)&&!ue(l)?At(l)?e(t,null,[l]):e(t,l):e(t,null,l):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&At(n)&&(n=[n]),e(t,l,n))}function xg(){}function Bg(t,l,n,s){const r=n[s];if(r&&Xc(r,t))return r;const c=l();return c.memo=t.slice(),n[s]=c}function Xc(t,l){const n=t.memo;if(n.length!=l.length)return!1;for(let s=0;s<n.length;s++)if($t(n[s],l[s]))return!1;return wi>0&&dt&&dt.push(t),!0}const Qc="3.4.15",Eg=rt,Rg=df,Pg=Pi,zg=oc,Mg={createComponentInstance:Yc,setupComponent:Gc,renderComponentRoot:ra,setCurrentRenderingInstance:Pl,isVNode:At,normalizeVNode:gt},Dg=Mg,Ig=null,Fg=null,Vg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ng="http://www.w3.org/2000/svg",Lg="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,Mo=Zt&&Zt.createElement("template"),Og={insert:(t,l,n)=>{l.insertBefore(t,n||null)},remove:t=>{const l=t.parentNode;l&&l.removeChild(t)},createElement:(t,l,n,s)=>{const r=l==="svg"?Zt.createElementNS(Ng,t):l==="mathml"?Zt.createElementNS(Lg,t):Zt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,l)=>{t.nodeValue=l},setElementText:(t,l)=>{t.textContent=l},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,l){t.setAttribute(l,"")},insertStaticContent(t,l,n,s,r,c){const f=n?n.previousSibling:l.lastChild;if(r&&(r===c||r.nextSibling))for(;l.insertBefore(r.cloneNode(!0),n),!(r===c||!(r=r.nextSibling)););else{Mo.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const p=Mo.content;if(s==="svg"||s==="mathml"){const o=p.firstChild;for(;o.firstChild;)p.appendChild(o.firstChild);p.removeChild(o)}l.insertBefore(p,n)}return[f?f.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}},Jt="transition",ol="animation",Wi=Symbol("_vtc"),Za=(t,{slots:l})=>j(bc,em(t),l);Za.displayName="Transition";const Zc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hg=Za.props=je({},Hs,Zc),ri=(t,l=[])=>{ue(t)?t.forEach(n=>n(...l)):t&&t(...l)},Do=t=>t?ue(t)?t.some(l=>l.length>1):t.length>1:!1;function em(t){const l={};for(const O in t)O in Zc||(l[O]=t[O]);if(t.css===!1)return l;const{name:n="v",type:s,duration:r,enterFromClass:c=`${n}-enter-from`,enterActiveClass:f=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:o=c,appearActiveClass:u=f,appearToClass:g=p,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,d=jg(r),y=d&&d[0],S=d&&d[1],{onBeforeEnter:T,onEnter:b,onEnterCancelled:w,onLeave:k,onLeaveCancelled:$,onBeforeAppear:B=T,onAppear:z=b,onAppearCancelled:M=w}=l,P=(O,se,we)=>{Wt(O,se?g:p),Wt(O,se?u:f),we&&we()},F=(O,se)=>{O._isLeaving=!1,Wt(O,m),Wt(O,v),Wt(O,h),se&&se()},U=O=>(se,we)=>{const V=O?z:b,q=()=>P(se,O,we);ri(V,[se,q]),Io(()=>{Wt(se,O?o:c),It(se,O?g:p),Do(V)||Fo(se,s,y,q)})};return je(l,{onBeforeEnter(O){ri(T,[O]),It(O,c),It(O,f)},onBeforeAppear(O){ri(B,[O]),It(O,o),It(O,u)},onEnter:U(!1),onAppear:U(!0),onLeave(O,se){O._isLeaving=!0;const we=()=>F(O,se);It(O,m),im(),It(O,h),Io(()=>{O._isLeaving&&(Wt(O,m),It(O,v),Do(k)||Fo(O,s,S,we))}),ri(k,[O,we])},onEnterCancelled(O){P(O,!1),ri(w,[O])},onAppearCancelled(O){P(O,!0),ri(M,[O])},onLeaveCancelled(O){F(O),ri($,[O])}})}function jg(t){if(t==null)return null;if(Ve(t))return[gn(t.enter),gn(t.leave)];{const l=gn(t);return[l,l]}}function gn(t){return pa(t)}function It(t,l){l.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Wi]||(t[Wi]=new Set)).add(l)}function Wt(t,l){l.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Wi];n&&(n.delete(l),n.size||(t[Wi]=void 0))}function Io(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qg=0;function Fo(t,l,n,s){const r=t._endId=++qg,c=()=>{r===t._endId&&s()};if(n)return setTimeout(c,n);const{type:f,timeout:p,propCount:o}=tm(t,l);if(!f)return s();const u=f+"end";let g=0;const m=()=>{t.removeEventListener(u,h),c()},h=v=>{v.target===t&&++g>=o&&m()};setTimeout(()=>{g<o&&m()},p+1),t.addEventListener(u,h)}function tm(t,l){const n=window.getComputedStyle(t),s=d=>(n[d]||"").split(", "),r=s(`${Jt}Delay`),c=s(`${Jt}Duration`),f=Vo(r,c),p=s(`${ol}Delay`),o=s(`${ol}Duration`),u=Vo(p,o);let g=null,m=0,h=0;l===Jt?f>0&&(g=Jt,m=f,h=c.length):l===ol?u>0&&(g=ol,m=u,h=o.length):(m=Math.max(f,u),g=m>0?f>u?Jt:ol:null,h=g?g===Jt?c.length:o.length:0);const v=g===Jt&&/\b(transform|all)(,|$)/.test(s(`${Jt}Property`).toString());return{type:g,timeout:m,propCount:h,hasTransform:v}}function Vo(t,l){for(;t.length<l.length;)t=t.concat(t);return Math.max(...l.map((n,s)=>No(n)+No(t[s])))}function No(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function im(){return document.body.offsetHeight}function Ug(t,l,n){const s=t[Wi];s&&(l=(l?[l,...s]:[...s]).join(" ")),l==null?t.removeAttribute("class"):n?t.setAttribute("class",l):t.className=l}const Ks=Symbol("_vod"),lm={beforeMount(t,{value:l},{transition:n}){t[Ks]=t.style.display==="none"?"":t.style.display,n&&l?n.beforeEnter(t):ul(t,l)},mounted(t,{value:l},{transition:n}){n&&l&&n.enter(t)},updated(t,{value:l,oldValue:n},{transition:s}){!l!=!n&&(s?l?(s.beforeEnter(t),ul(t,!0),s.enter(t)):s.leave(t,()=>{ul(t,!1)}):ul(t,l))},beforeUnmount(t,{value:l}){ul(t,l)}};function ul(t,l){t.style.display=l?t[Ks]:"none"}function Yg(){lm.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const am=Symbol("");function Jg(t){const l=Dt();if(!l)return;const n=l.ut=(r=t(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(c=>Qn(c,r))},s=()=>{const r=t(l.proxy);Xn(l.subTree,r),n(r)};gc(s),ni(()=>{const r=new MutationObserver(s);r.observe(l.subTree.el.parentNode,{childList:!0}),xi(()=>r.disconnect())})}function Xn(t,l){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Xn(n.activeBranch,l)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Qn(t.el,l);else if(t.type===Ce)t.children.forEach(n=>Xn(n,l));else if(t.type===bi){let{el:n,anchor:s}=t;for(;n&&(Qn(n,l),n!==s);)n=n.nextSibling}}function Qn(t,l){if(t.nodeType===1){const n=t.style;let s="";for(const r in l)n.setProperty(`--${r}`,l[r]),s+=`--${r}: ${l[r]};`;n[am]=s}}function Gg(t,l,n){const s=t.style,r=s.display,c=qe(n);if(n&&!c){if(l&&!qe(l))for(const f in l)n[f]==null&&Zn(s,f,"");for(const f in n)Zn(s,f,n[f])}else if(c){if(l!==n){const f=s[am];f&&(n+=";"+f),s.cssText=n}}else l&&t.removeAttribute("style");Ks in t&&(s.display=r)}const Lo=/\s*!important$/;function Zn(t,l,n){if(ue(n))n.forEach(s=>Zn(t,l,s));else if(n==null&&(n=""),l.startsWith("--"))t.setProperty(l,n);else{const s=Wg(t,l);Lo.test(n)?t.setProperty(_t(s),n.replace(Lo,""),"important"):t[s]=n}}const Oo=["Webkit","Moz","ms"],hn={};function Wg(t,l){const n=hn[l];if(n)return n;let s=ot(l);if(s!=="filter"&&s in t)return hn[l]=s;s=Ll(s);for(let r=0;r<Oo.length;r++){const c=Oo[r]+s;if(c in t)return hn[l]=c}return l}const Ho="http://www.w3.org/1999/xlink";function Kg(t,l,n,s,r){if(s&&l.startsWith("xlink:"))n==null?t.removeAttributeNS(Ho,l.slice(6,l.length)):t.setAttributeNS(Ho,l,n);else{const c=Ap(l);n==null||c&&!Md(n)?t.removeAttribute(l):t.setAttribute(l,c?"":n)}}function Xg(t,l,n,s,r,c,f){if(l==="innerHTML"||l==="textContent"){s&&f(s,r,c),t[l]=n??"";return}const p=t.tagName;if(l==="value"&&p!=="PROGRESS"&&!p.includes("-")){t._value=n;const u=p==="OPTION"?t.getAttribute("value"):t.value,g=n??"";u!==g&&(t.value=g),n==null&&t.removeAttribute(l);return}let o=!1;if(n===""||n==null){const u=typeof t[l];u==="boolean"?n=Md(n):n==null&&u==="string"?(n="",o=!0):u==="number"&&(n=0,o=!0)}try{t[l]=n}catch{}o&&t.removeAttribute(l)}function Vt(t,l,n,s){t.addEventListener(l,n,s)}function Qg(t,l,n,s){t.removeEventListener(l,n,s)}const jo=Symbol("_vei");function Zg(t,l,n,s,r=null){const c=t[jo]||(t[jo]={}),f=c[l];if(s&&f)f.value=s;else{const[p,o]=eh(l);if(s){const u=c[l]=lh(s,r);Vt(t,p,u,o)}else f&&(Qg(t,p,f,o),c[l]=void 0)}}const qo=/(?:Once|Passive|Capture)$/;function eh(t){let l;if(qo.test(t)){l={};let s;for(;s=t.match(qo);)t=t.slice(0,t.length-s[0].length),l[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_t(t.slice(2)),l]}let _n=0;const th=Promise.resolve(),ih=()=>_n||(th.then(()=>_n=0),_n=Date.now());function lh(t,l){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;bt(ah(s,n.value),l,5,[s])};return n.value=t,n.attached=ih(),n}function ah(t,l){if(ue(l)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},l.map(s=>r=>!r._stopped&&s&&s(r))}else return l}const Uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nh=(t,l,n,s,r,c,f,p,o)=>{const u=r==="svg";l==="class"?Ug(t,s,u):l==="style"?Gg(t,n,s):Nl(l)?ys(l)||Zg(t,l,n,s,f):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):sh(t,l,s,u))?Xg(t,l,s,c,f,p,o):(l==="true-value"?t._trueValue=s:l==="false-value"&&(t._falseValue=s),Kg(t,l,s,u))};function sh(t,l,n,s){if(s)return!!(l==="innerHTML"||l==="textContent"||l in t&&Uo(l)&&he(n));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&t.tagName==="INPUT"||l==="type"&&t.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Uo(l)&&qe(n)?!1:l in t}/*! #__NO_SIDE_EFFECTS__ */function nm(t,l){const n=E(t);class s extends en{constructor(c){super(n,c,l)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const oh=t=>nm(t,_m),uh=typeof HTMLElement<"u"?HTMLElement:class{};class en extends uh{constructor(l,n={},s){super(),this._def=l,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ll(()=>{this._connected||(Sa(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(s,r=!1)=>{const{props:c,styles:f}=s;let p;if(c&&!ue(c))for(const o in c){const u=c[o];(u===Number||u&&u.type===Number)&&(o in this._props&&(this._props[o]=pa(this._props[o])),(p||(p=Object.create(null)))[ot(o)]=!0)}this._numberProps=p,r&&this._resolveProps(s),this._applyStyles(f),this._update()},n=this._def.__asyncLoader;n?n().then(s=>l(s,!0)):l(this._def)}_resolveProps(l){const{props:n}=l,s=ue(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(ot))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(c){this._setProp(r,c)}})}_setAttr(l){let n=this.getAttribute(l);const s=ot(l);this._numberProps&&this._numberProps[s]&&(n=pa(n)),this._setProp(s,n,!1)}_getProp(l){return this._props[l]}_setProp(l,n,s=!0,r=!0){n!==this._props[l]&&(this._props[l]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(_t(l),""):typeof n=="string"||typeof n=="number"?this.setAttribute(_t(l),n+""):n||this.removeAttribute(_t(l))))}_update(){Sa(this._createVNode(),this.shadowRoot)}_createVNode(){const l=e(this._def,je({},this._props));return this._instance||(l.ce=n=>{this._instance=n,n.isCE=!0;const s=(c,f)=>{this.dispatchEvent(new CustomEvent(c,{detail:f}))};n.emit=(c,...f)=>{s(c,f),_t(c)!==c&&s(_t(c),f)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof en){n.parent=r._instance,n.provides=r._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function rh(t="$style"){{const l=Dt();if(!l)return De;const n=l.type.__cssModules;if(!n)return De;const s=n[t];return s||De}}const sm=new WeakMap,om=new WeakMap,Ca=Symbol("_moveCb"),Yo=Symbol("_enterCb"),um={name:"TransitionGroup",props:je({},Hg,{tag:String,moveClass:String}),setup(t,{slots:l}){const n=Dt(),s=Os();let r,c;return Ga(()=>{if(!r.length)return;const f=t.moveClass||`${t.name||"v"}-move`;if(!fh(r[0].el,n.vnode.el,f))return;r.forEach(ch),r.forEach(mh);const p=r.filter(ph);im(),p.forEach(o=>{const u=o.el,g=u.style;It(u,f),g.transform=g.webkitTransform=g.transitionDuration="";const m=u[Ca]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",m),u[Ca]=null,Wt(u,f))};u.addEventListener("transitionend",m)})}),()=>{const f=xe(t),p=em(f);let o=f.tag||Ce;r=c,c=l.default?Ya(l.default()):[];for(let u=0;u<c.length;u++){const g=c[u];g.key!=null&&yi(g,Ji(g,p,s,n))}if(r)for(let u=0;u<r.length;u++){const g=r[u];yi(g,Ji(g,p,s,n)),sm.set(g,g.el.getBoundingClientRect())}return e(o,null,c)}}},dh=t=>delete t.mode;um.props;const rm=um;function ch(t){const l=t.el;l[Ca]&&l[Ca](),l[Yo]&&l[Yo]()}function mh(t){om.set(t,t.el.getBoundingClientRect())}function ph(t){const l=sm.get(t),n=om.get(t),s=l.left-n.left,r=l.top-n.top;if(s||r){const c=t.el.style;return c.transform=c.webkitTransform=`translate(${s}px,${r}px)`,c.transitionDuration="0s",t}}function fh(t,l,n){const s=t.cloneNode(),r=t[Wi];r&&r.forEach(p=>{p.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const c=l.nodeType===1?l:l.parentNode;c.appendChild(s);const{hasTransform:f}=tm(s);return c.removeChild(s),f}const ai=t=>{const l=t.props["onUpdate:modelValue"]||!1;return ue(l)?n=>Fi(l,n):l};function gh(t){t.target.composing=!0}function Jo(t){const l=t.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const St=Symbol("_assign"),wa={created(t,{modifiers:{lazy:l,trim:n,number:s}},r){t[St]=ai(r);const c=s||r.props&&r.props.type==="number";Vt(t,l?"change":"input",f=>{if(f.target.composing)return;let p=t.value;n&&(p=p.trim()),c&&(p=$l(p)),t[St](p)}),n&&Vt(t,"change",()=>{t.value=t.value.trim()}),l||(Vt(t,"compositionstart",gh),Vt(t,"compositionend",Jo),Vt(t,"change",Jo))},mounted(t,{value:l}){t.value=l??""},beforeUpdate(t,{value:l,modifiers:{lazy:n,trim:s,number:r}},c){if(t[St]=ai(c),t.composing)return;const f=r||t.type==="number"?$l(t.value):t.value,p=l??"";f!==p&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===p)||(t.value=p))}},Xs={deep:!0,created(t,l,n){t[St]=ai(n),Vt(t,"change",()=>{const s=t._modelValue,r=Ki(t),c=t.checked,f=t[St];if(ue(s)){const p=Ia(s,r),o=p!==-1;if(c&&!o)f(s.concat(r));else if(!c&&o){const u=[...s];u.splice(p,1),f(u)}}else if(Ai(s)){const p=new Set(s);c?p.add(r):p.delete(r),f(p)}else f(cm(t,c))})},mounted:Go,beforeUpdate(t,l,n){t[St]=ai(n),Go(t,l,n)}};function Go(t,{value:l,oldValue:n},s){t._modelValue=l,ue(l)?t.checked=Ia(l,s.props.value)>-1:Ai(l)?t.checked=l.has(s.props.value):l!==n&&(t.checked=Ot(l,cm(t,!0)))}const Qs={created(t,{value:l},n){t.checked=Ot(l,n.props.value),t[St]=ai(n),Vt(t,"change",()=>{t[St](Ki(t))})},beforeUpdate(t,{value:l,oldValue:n},s){t[St]=ai(s),l!==n&&(t.checked=Ot(l,s.props.value))}},dm={deep:!0,created(t,{value:l,modifiers:{number:n}},s){const r=Ai(l);Vt(t,"change",()=>{const c=Array.prototype.filter.call(t.options,f=>f.selected).map(f=>n?$l(Ki(f)):Ki(f));t[St](t.multiple?r?new Set(c):c:c[0]),t._assigning=!0,ll(()=>{t._assigning=!1})}),t[St]=ai(s)},mounted(t,{value:l,oldValue:n,modifiers:{number:s}}){Wo(t,l,n,s)},beforeUpdate(t,l,n){t[St]=ai(n)},updated(t,{value:l,oldValue:n,modifiers:{number:s}}){t._assigning||Wo(t,l,n,s)}};function Wo(t,l,n,s){const r=t.multiple,c=ue(l);if(!(r&&!c&&!Ai(l))&&!(c&&Ot(l,n))){for(let f=0,p=t.options.length;f<p;f++){const o=t.options[f],u=Ki(o);if(r)if(c){const g=typeof u;g==="string"||g==="number"?o.selected=l.includes(s?$l(u):u):o.selected=Ia(l,u)>-1}else o.selected=l.has(u);else if(Ot(Ki(o),l)){t.selectedIndex!==f&&(t.selectedIndex=f);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ki(t){return"_value"in t?t._value:t.value}function cm(t,l){const n=l?"_trueValue":"_falseValue";return n in t?t[n]:l}const mm={created(t,l,n){aa(t,l,n,null,"created")},mounted(t,l,n){aa(t,l,n,null,"mounted")},beforeUpdate(t,l,n,s){aa(t,l,n,s,"beforeUpdate")},updated(t,l,n,s){aa(t,l,n,s,"updated")}};function pm(t,l){switch(t){case"SELECT":return dm;case"TEXTAREA":return wa;default:switch(l){case"checkbox":return Xs;case"radio":return Qs;default:return wa}}}function aa(t,l,n,s,r){const f=pm(t.tagName,n.props&&n.props.type)[r];f&&f(t,l,n,s)}function hh(){wa.getSSRProps=({value:t})=>({value:t}),Qs.getSSRProps=({value:t},l)=>{if(l.props&&Ot(l.props.value,t))return{checked:!0}},Xs.getSSRProps=({value:t},l)=>{if(ue(t)){if(l.props&&Ia(t,l.props.value)>-1)return{checked:!0}}else if(Ai(t)){if(l.props&&t.has(l.props.value))return{checked:!0}}else if(t)return{checked:!0}},mm.getSSRProps=(t,l)=>{if(typeof l.type!="string")return;const n=pm(l.type.toUpperCase(),l.props&&l.props.type);if(n.getSSRProps)return n.getSSRProps(t,l)}}const _h=["ctrl","shift","alt","meta"],bh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,l)=>_h.some(n=>t[`${n}Key`]&&!l.includes(n))},vt=(t,l)=>{const n=t._withMods||(t._withMods={}),s=l.join(".");return n[s]||(n[s]=(r,...c)=>{for(let f=0;f<l.length;f++){const p=bh[l[f]];if(p&&p(r,l))return}return t(r,...c)})},vh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yh=(t,l)=>{const n=t._withKeys||(t._withKeys={}),s=l.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const c=_t(r.key);if(l.some(f=>f===c||vh[f]===c))return t(r)})},fm=je({patchProp:nh},Og);let Sl,Ko=!1;function gm(){return Sl||(Sl=Ic(fm))}function hm(){return Sl=Ko?Sl:Fc(fm),Ko=!0,Sl}const Sa=(...t)=>{gm().render(...t)},_m=(...t)=>{hm().hydrate(...t)},bm=(...t)=>{const l=gm().createApp(...t),{mount:n}=l;return l.mount=s=>{const r=ym(s);if(!r)return;const c=l._component;!he(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const f=n(r,!1,vm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),f},l},Ch=(...t)=>{const l=hm().createApp(...t),{mount:n}=l;return l.mount=s=>{const r=ym(s);if(r)return n(r,!0,vm(r))},l};function vm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ym(t){return qe(t)?document.querySelector(t):t}let Xo=!1;const wh=()=>{Xo||(Xo=!0,hh(),Yg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sh=()=>{},Ah=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:bc,BaseTransitionPropsValidators:Hs,Comment:nt,DeprecationTypes:Vg,EffectScope:As,ErrorCodes:rf,ErrorTypeStrings:Rg,Fragment:Ce,KeepAlive:zf,ReactiveEffect:Yi,Static:bi,Suspense:Sf,Teleport:Ka,Text:Ci,TrackOpTypes:sf,Transition:Za,TransitionGroup:rm,TriggerOpTypes:of,VueElement:en,assertNumber:uf,callWithAsyncErrorHandling:bt,callWithErrorHandling:Lt,camelize:ot,capitalize:Ll,cloneVNode:zt,compatUtils:Fg,compile:Sh,computed:D,createApp:bm,createBlock:ge,createCommentVNode:Gs,createElementBlock:ne,createElementVNode:C,createHydrationRenderer:Fc,createPropsRestProxy:Wf,createRenderer:Ic,createSSRApp:Ch,createSlots:Df,createStaticVNode:vg,createTextVNode:a,createVNode:e,customRef:ic,defineAsyncComponent:Rf,defineComponent:E,defineCustomElement:nm,defineEmits:Nf,defineExpose:Lf,defineModel:jf,defineOptions:Of,defineProps:Vf,defineSSRCustomElement:oh,defineSlots:Hf,devtools:Pg,effect:xp,effectScope:Tp,getCurrentInstance:Dt,getCurrentScope:ks,getTransitionRawChildren:Ya,guardReactiveProps:Uc,h:j,handleError:$i,hasInjectionContext:ag,hydrate:_m,initCustomFormatter:xg,initDirectivesForSSR:wh,inject:Pe,isMemoSame:Xc,isProxy:Es,isReactive:hi,isReadonly:vi,isRef:it,isRuntimeOnly:Ag,isShallow:xl,isVNode:At,markRaw:Rs,mergeDefaults:Jf,mergeModels:Gf,mergeProps:Bi,nextTick:ll,normalizeClass:Ol,normalizeProps:wp,normalizeStyle:il,onActivated:js,onBeforeMount:Cc,onBeforeUnmount:Wa,onBeforeUpdate:wc,onDeactivated:qs,onErrorCaptured:Tc,onMounted:ni,onRenderTracked:kc,onRenderTriggered:Ac,onScopeDispose:Fd,onServerPrefetch:Sc,onUnmounted:xi,onUpdated:Ga,openBlock:L,popScopeId:qa,provide:tt,proxyRefs:Ms,pushScopeId:ja,queuePostFlushCb:ga,reactive:Ht,readonly:Bs,ref:N,registerRuntimeCompiler:Sg,render:Sa,renderList:Ge,renderSlot:Gi,resolveComponent:_,resolveDirective:Ua,resolveDynamicComponent:dc,resolveFilter:Ig,resolveTransitionHooks:Ji,setBlockTracking:Un,setDevtoolsHook:zg,setTransitionHooks:yi,shallowReactive:Qd,shallowReadonly:Wp,shallowRef:ec,ssrContextKey:pc,ssrUtils:Dg,stop:Bp,toDisplayString:ke,toHandlerKey:vl,toHandlers:If,toRaw:xe,toRef:In,toRefs:lf,toValue:Zp,transformVNodeArgs:_g,triggerRef:Qp,unref:Xe,useAttrs:Yf,useCssModule:rh,useCssVars:Jg,useModel:$g,useSSRContext:fc,useSlots:Uf,useTransitionState:Os,vModelCheckbox:Xs,vModelDynamic:mm,vModelRadio:Qs,vModelSelect:dm,vModelText:wa,vShow:lm,version:Qc,warn:Eg,watch:at,watchEffect:Ls,watchPostEffect:gc,watchSyncEffect:hc,withAsyncContext:Kf,withCtx:i,withDefaults:qf,withDirectives:jl,withKeys:yh,withMemo:Bg,withModifiers:vt,withScopeId:hf},Symbol.toStringTag,{value:"Module"})),kh=E({name:"App"}),me=(t,l)=>{const n=t.__vccOpts||t;for(const[s,r]of l)n[s]=r;return n};function Th(t,l,n,s,r,c){const f=_("router-view");return L(),ge(f)}const $h=me(kh,[["render",Th]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Cm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",al=t=>Cm?Symbol(t):"_vr_"+t,wm=al("rvlm"),Qo=al("rvd"),tn=al("r"),Zs=al("rl"),es=al("rvl"),zi=typeof window<"u";function xh(t){return t.__esModule||Cm&&t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function bn(t,l){const n={};for(const s in l){const r=l[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Al=()=>{},Bh=/\/$/,Eh=t=>t.replace(Bh,"");function vn(t,l,n="/"){let s,r={},c="",f="";const p=l.indexOf("?"),o=l.indexOf("#",p>-1?p:0);return p>-1&&(s=l.slice(0,p),c=l.slice(p+1,o>-1?o:l.length),r=t(c)),o>-1&&(s=s||l.slice(0,o),f=l.slice(o,l.length)),s=Mh(s??l,n),{fullPath:s+(c&&"?")+c+f,path:s,query:r,hash:f}}function Rh(t,l){const n=l.query?t(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function Zo(t,l){return!l||!t.toLowerCase().startsWith(l.toLowerCase())?t:t.slice(l.length)||"/"}function Ph(t,l,n){const s=l.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Xi(l.matched[s],n.matched[r])&&Sm(l.params,n.params)&&t(l.query)===t(n.query)&&l.hash===n.hash}function Xi(t,l){return(t.aliasOf||t)===(l.aliasOf||l)}function Sm(t,l){if(Object.keys(t).length!==Object.keys(l).length)return!1;for(const n in t)if(!zh(t[n],l[n]))return!1;return!0}function zh(t,l){return Array.isArray(t)?eu(t,l):Array.isArray(l)?eu(l,t):t===l}function eu(t,l){return Array.isArray(l)?t.length===l.length&&t.every((n,s)=>n===l[s]):t.length===1&&t[0]===l}function Mh(t,l){if(t.startsWith("/"))return t;if(!t)return l;const n=l.split("/"),s=t.split("/");let r=n.length-1,c,f;for(c=0;c<s.length;c++)if(f=s[c],!(r===1||f==="."))if(f==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(c-(c===s.length?1:0)).join("/")}var Il;(function(t){t.pop="pop",t.push="push"})(Il||(Il={}));var kl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kl||(kl={}));function Dh(t){if(!t)if(zi){const l=document.querySelector("base");t=l&&l.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Eh(t)}const Ih=/^[^#]+#/;function Fh(t,l){return t.replace(Ih,"#")+l}function Vh(t,l){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:l.behavior,left:s.left-n.left-(l.left||0),top:s.top-n.top-(l.top||0)}}const ln=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nh(t){let l;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;l=Vh(r,t)}else l=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function tu(t,l){return(history.state?history.state.position-l:-1)+t}const ts=new Map;function Lh(t,l){ts.set(t,l)}function Oh(t){const l=ts.get(t);return ts.delete(t),l}let Hh=()=>location.protocol+"//"+location.host;function Am(t,l){const{pathname:n,search:s,hash:r}=l,c=t.indexOf("#");if(c>-1){let p=r.includes(t.slice(c))?t.slice(c).length:1,o=r.slice(p);return o[0]!=="/"&&(o="/"+o),Zo(o,"")}return Zo(n,t)+s+r}function jh(t,l,n,s){let r=[],c=[],f=null;const p=({state:h})=>{const v=Am(t,location),d=n.value,y=l.value;let S=0;if(h){if(n.value=v,l.value=h,f&&f===d){f=null;return}S=y?h.position-y.position:0}else s(v);r.forEach(T=>{T(n.value,d,{delta:S,type:Il.pop,direction:S?S>0?kl.forward:kl.back:kl.unknown})})};function o(){f=n.value}function u(h){r.push(h);const v=()=>{const d=r.indexOf(h);d>-1&&r.splice(d,1)};return c.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Ne({},h.state,{scroll:ln()}),"")}function m(){for(const h of c)h();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",g),{pauseListeners:o,listen:u,destroy:m}}function iu(t,l,n,s=!1,r=!1){return{back:t,current:l,forward:n,replaced:s,position:window.history.length,scroll:r?ln():null}}function qh(t){const{history:l,location:n}=window,s={value:Am(t,n)},r={value:l.state};r.value||c(s.value,{back:null,current:s.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function c(o,u,g){const m=t.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+o:Hh()+t+o;try{l[g?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[g?"replace":"assign"](h)}}function f(o,u){const g=Ne({},l.state,iu(r.value.back,o,r.value.forward,!0),u,{position:r.value.position});c(o,g,!0),s.value=o}function p(o,u){const g=Ne({},r.value,l.state,{forward:o,scroll:ln()});c(g.current,g,!0);const m=Ne({},iu(s.value,o,null),{position:g.position+1},u);c(o,m,!1),s.value=o}return{location:s,state:r,push:p,replace:f}}function Uh(t){t=Dh(t);const l=qh(t),n=jh(t,l.state,l.location,l.replace);function s(c,f=!0){f||n.pauseListeners(),history.go(c)}const r=Ne({location:"",base:t,go:s,createHref:Fh.bind(null,t)},l,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>l.state.value}),r}function Yh(t){return typeof t=="string"||t&&typeof t=="object"}function km(t){return typeof t=="string"||typeof t=="symbol"}const Gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tm=al("nf");var lu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lu||(lu={}));function Qi(t,l){return Ne(new Error,{type:t,[Tm]:!0},l)}function di(t,l){return t instanceof Error&&Tm in t&&(l==null||!!(t.type&l))}const au="[^/]+?",Jh={sensitive:!1,strict:!1,start:!0,end:!0},Gh=/[.+*?^${}()[\]/\\]/g;function Wh(t,l){const n=Ne({},Jh,l),s=[];let r=n.start?"^":"";const c=[];for(const u of t){const g=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const h=u[m];let v=40+(n.sensitive?.25:0);if(h.type===0)m||(r+="/"),r+=h.value.replace(Gh,"\\$&"),v+=40;else if(h.type===1){const{value:d,repeatable:y,optional:S,regexp:T}=h;c.push({name:d,repeatable:y,optional:S});const b=T||au;if(b!==au){v+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${d}" (${b}): `+k.message)}}let w=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;m||(w=S&&u.length<2?`(?:/${w})`:"/"+w),S&&(w+="?"),r+=w,v+=20,S&&(v+=-8),y&&(v+=-20),b===".*"&&(v+=-50)}g.push(v)}s.push(g)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const f=new RegExp(r,n.sensitive?"":"i");function p(u){const g=u.match(f),m={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",d=c[h-1];m[d.name]=v&&d.repeatable?v.split("/"):v}return m}function o(u){let g="",m=!1;for(const h of t){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:d,repeatable:y,optional:S}=v,T=d in u?u[d]:"";if(Array.isArray(T)&&!y)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray(T)?T.join("/"):T;if(!b)if(S)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${d}"`);g+=b}}return g}return{re:f,score:s,keys:c,parse:p,stringify:o}}function Kh(t,l){let n=0;for(;n<t.length&&n<l.length;){const s=l[n]-t[n];if(s)return s;n++}return t.length<l.length?t.length===1&&t[0]===80?-1:1:t.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Xh(t,l){let n=0;const s=t.score,r=l.score;for(;n<s.length&&n<r.length;){const c=Kh(s[n],r[n]);if(c)return c;n++}return r.length-s.length}const Qh={type:0,value:""},Zh=/[a-zA-Z0-9_]/;function e_(t){if(!t)return[[]];if(t==="/")return[[Qh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function l(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,s=n;const r=[];let c;function f(){c&&r.push(c),c=[]}let p=0,o,u="",g="";function m(){u&&(n===0?c.push({type:0,value:u}):n===1||n===2||n===3?(c.length>1&&(o==="*"||o==="+")&&l(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:g,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):l("Invalid state to consume buffer"),u="")}function h(){u+=o}for(;p<t.length;){if(o=t[p++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(u&&m(),f()):o===":"?(m(),n=1):h();break;case 4:h(),n=s;break;case 1:o==="("?n=2:Zh.test(o)?h():(m(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--);break;case 2:o===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+o:n=3:g+=o;break;case 3:m(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--,g="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${u}"`),m(),f(),r}function t_(t,l,n){const s=Wh(e_(t.path),n),r=Ne(s,{record:t,parent:l,children:[],alias:[]});return l&&!r.record.aliasOf==!l.record.aliasOf&&l.children.push(r),r}function i_(t,l){const n=[],s=new Map;l=su({strict:!1,end:!0,sensitive:!1},l);function r(g){return s.get(g)}function c(g,m,h){const v=!h,d=a_(g);d.aliasOf=h&&h.record;const y=su(l,g),S=[d];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const k of w)S.push(Ne({},d,{components:h?h.record.components:d.components,path:k,aliasOf:h?h.record:d}))}let T,b;for(const w of S){const{path:k}=w;if(m&&k[0]!=="/"){const $=m.record.path,B=$[$.length-1]==="/"?"":"/";w.path=m.record.path+(k&&B+k)}if(T=t_(w,m,y),h?h.alias.push(T):(b=b||T,b!==T&&b.alias.push(T),v&&g.name&&!nu(T)&&f(g.name)),"children"in d){const $=d.children;for(let B=0;B<$.length;B++)c($[B],T,h&&h.children[B])}h=h||T,o(T)}return b?()=>{f(b)}:Al}function f(g){if(km(g)){const m=s.get(g);m&&(s.delete(g),n.splice(n.indexOf(m),1),m.children.forEach(f),m.alias.forEach(f))}else{const m=n.indexOf(g);m>-1&&(n.splice(m,1),g.record.name&&s.delete(g.record.name),g.children.forEach(f),g.alias.forEach(f))}}function p(){return n}function o(g){let m=0;for(;m<n.length&&Xh(g,n[m])>=0;)m++;n.splice(m,0,g),g.record.name&&!nu(g)&&s.set(g.record.name,g)}function u(g,m){let h,v={},d,y;if("name"in g&&g.name){if(h=s.get(g.name),!h)throw Qi(1,{location:g});y=h.record.name,v=Ne(l_(m.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),g.params),d=h.stringify(v)}else if("path"in g)d=g.path,h=n.find(b=>b.re.test(d)),h&&(v=h.parse(d),y=h.record.name);else{if(h=m.name?s.get(m.name):n.find(b=>b.re.test(m.path)),!h)throw Qi(1,{location:g,currentLocation:m});y=h.record.name,v=Ne({},m.params,g.params),d=h.stringify(v)}const S=[];let T=h;for(;T;)S.unshift(T.record),T=T.parent;return{name:y,path:d,params:v,matched:S,meta:s_(S)}}return t.forEach(g=>c(g)),{addRoute:c,resolve:u,removeRoute:f,getRoutes:p,getRecordMatcher:r}}function l_(t,l){const n={};for(const s of l)s in t&&(n[s]=t[s]);return n}function a_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:n_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function n_(t){const l={},n=t.props||!1;if("component"in t)l.default=n;else for(const s in t.components)l[s]=typeof n=="boolean"?n:n[s];return l}function nu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function s_(t){return t.reduce((l,n)=>Ne(l,n.meta),{})}function su(t,l){const n={};for(const s in t)n[s]=s in l?l[s]:t[s];return n}const $m=/#/g,o_=/&/g,u_=/\//g,r_=/=/g,d_=/\?/g,xm=/\+/g,c_=/%5B/g,m_=/%5D/g,Bm=/%5E/g,p_=/%60/g,Em=/%7B/g,f_=/%7C/g,Rm=/%7D/g,g_=/%20/g;function eo(t){return encodeURI(""+t).replace(f_,"|").replace(c_,"[").replace(m_,"]")}function h_(t){return eo(t).replace(Em,"{").replace(Rm,"}").replace(Bm,"^")}function is(t){return eo(t).replace(xm,"%2B").replace(g_,"+").replace($m,"%23").replace(o_,"%26").replace(p_,"`").replace(Em,"{").replace(Rm,"}").replace(Bm,"^")}function __(t){return is(t).replace(r_,"%3D")}function b_(t){return eo(t).replace($m,"%23").replace(d_,"%3F")}function v_(t){return t==null?"":b_(t).replace(u_,"%2F")}function Aa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function y_(t){const l={};if(t===""||t==="?")return l;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const c=s[r].replace(xm," "),f=c.indexOf("="),p=Aa(f<0?c:c.slice(0,f)),o=f<0?null:Aa(c.slice(f+1));if(p in l){let u=l[p];Array.isArray(u)||(u=l[p]=[u]),u.push(o)}else l[p]=o}return l}function ou(t){let l="";for(let n in t){const s=t[n];if(n=__(n),s==null){s!==void 0&&(l+=(l.length?"&":"")+n);continue}(Array.isArray(s)?s.map(c=>c&&is(c)):[s&&is(s)]).forEach(c=>{c!==void 0&&(l+=(l.length?"&":"")+n,c!=null&&(l+="="+c))})}return l}function C_(t){const l={};for(const n in t){const s=t[n];s!==void 0&&(l[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return l}function rl(){let t=[];function l(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:l,list:()=>t,reset:n}}function w_(t,l,n){const s=()=>{t[l].delete(n)};xi(s),qs(s),js(()=>{t[l].add(n)}),t[l].add(n)}function S_(t){const l=Pe(wm,{}).value;l&&w_(l,"updateGuards",t)}function ei(t,l,n,s,r){const c=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((f,p)=>{const o=m=>{m===!1?p(Qi(4,{from:n,to:l})):m instanceof Error?p(m):Yh(m)?p(Qi(2,{from:l,to:m})):(c&&s.enterCallbacks[r]===c&&typeof m=="function"&&c.push(m),f())},u=t.call(s&&s.instances[r],l,n,o);let g=Promise.resolve(u);t.length<3&&(g=g.then(o)),g.catch(m=>p(m))})}function yn(t,l,n,s){const r=[];for(const c of t)for(const f in c.components){let p=c.components[f];if(!(l!=="beforeRouteEnter"&&!c.instances[f]))if(A_(p)){const u=(p.__vccOpts||p)[l];u&&r.push(ei(u,n,s,c,f))}else{let o=p();r.push(()=>o.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${c.path}"`));const g=xh(u)?u.default:u;c.components[f]=g;const h=(g.__vccOpts||g)[l];return h&&ei(h,n,s,c,f)()}))}}return r}function A_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uu(t){const l=Pe(tn),n=Pe(Zs),s=D(()=>l.resolve(Xe(t.to))),r=D(()=>{const{matched:o}=s.value,{length:u}=o,g=o[u-1],m=n.matched;if(!g||!m.length)return-1;const h=m.findIndex(Xi.bind(null,g));if(h>-1)return h;const v=ru(o[u-2]);return u>1&&ru(g)===v&&m[m.length-1].path!==v?m.findIndex(Xi.bind(null,o[u-2])):h}),c=D(()=>r.value>-1&&$_(n.params,s.value.params)),f=D(()=>r.value>-1&&r.value===n.matched.length-1&&Sm(n.params,s.value.params));function p(o={}){return T_(o)?l[Xe(t.replace)?"replace":"push"](Xe(t.to)).catch(Al):Promise.resolve()}return{route:s,href:D(()=>s.value.href),isActive:c,isExactActive:f,navigate:p}}const k_=E({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uu,setup(t,{slots:l}){const n=Ht(uu(t)),{options:s}=Pe(tn),r=D(()=>({[du(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[du(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=l.default&&l.default(n);return t.custom?c:j("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},c)}}}),Pm=k_;function T_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const l=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return t.preventDefault&&t.preventDefault(),!0}}function $_(t,l){for(const n in l){const s=l[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((c,f)=>c!==r[f]))return!1}return!0}function ru(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const du=(t,l,n)=>t??l??n,x_=E({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:l,slots:n}){const s=Pe(es),r=D(()=>t.route||s.value),c=Pe(Qo,0),f=D(()=>r.value.matched[c]);tt(Qo,c+1),tt(wm,f),tt(es,r);const p=N();return at(()=>[p.value,f.value,t.name],([o,u,g],[m,h,v])=>{u&&(u.instances[g]=o,h&&h!==u&&o&&o===m&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),o&&u&&(!h||!Xi(u,h)||!m)&&(u.enterCallbacks[g]||[]).forEach(d=>d(o))},{flush:"post"}),()=>{const o=r.value,u=f.value,g=u&&u.components[t.name],m=t.name;if(!g)return cu(n.default,{Component:g,route:o});const h=u.props[t.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,y=j(g,Ne({},v,l,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[m]=null)},ref:p}));return cu(n.default,{Component:y,route:o})||y}}});function cu(t,l){if(!t)return null;const n=t(l);return n.length===1?n[0]:n}const B_=x_;function E_(t){const l=i_(t.routes,t),n=t.parseQuery||y_,s=t.stringifyQuery||ou,r=t.history,c=rl(),f=rl(),p=rl(),o=ec(Gt);let u=Gt;zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=bn.bind(null,H=>""+H),m=bn.bind(null,v_),h=bn.bind(null,Aa);function v(H,ie){let ee,re;return km(H)?(ee=l.getRecordMatcher(H),re=ie):re=H,l.addRoute(re,ee)}function d(H){const ie=l.getRecordMatcher(H);ie&&l.removeRoute(ie)}function y(){return l.getRoutes().map(H=>H.record)}function S(H){return!!l.getRecordMatcher(H)}function T(H,ie){if(ie=Ne({},ie||o.value),typeof H=="string"){const ye=vn(n,H,ie.path),x=l.resolve({path:ye.path},ie),R=r.createHref(ye.fullPath);return Ne(ye,x,{params:h(x.params),hash:Aa(ye.hash),redirectedFrom:void 0,href:R})}let ee;if("path"in H)ee=Ne({},H,{path:vn(n,H.path,ie.path).path});else{const ye=Ne({},H.params);for(const x in ye)ye[x]==null&&delete ye[x];ee=Ne({},H,{params:m(H.params)}),ie.params=m(ie.params)}const re=l.resolve(ee,ie),ze=H.hash||"";re.params=g(h(re.params));const Me=Rh(s,Ne({},H,{hash:h_(ze),path:re.path})),ve=r.createHref(Me);return Ne({fullPath:Me,hash:ze,query:s===ou?C_(H.query):H.query||{}},re,{redirectedFrom:void 0,href:ve})}function b(H){return typeof H=="string"?vn(n,H,o.value.path):Ne({},H)}function w(H,ie){if(u!==H)return Qi(8,{from:ie,to:H})}function k(H){return z(H)}function $(H){return k(Ne(b(H),{replace:!0}))}function B(H){const ie=H.matched[H.matched.length-1];if(ie&&ie.redirect){const{redirect:ee}=ie;let re=typeof ee=="function"?ee(H):ee;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=b(re):{path:re},re.params={}),Ne({query:H.query,hash:H.hash,params:H.params},re)}}function z(H,ie){const ee=u=T(H),re=o.value,ze=H.state,Me=H.force,ve=H.replace===!0,ye=B(ee);if(ye)return z(Ne(b(ye),{state:ze,force:Me,replace:ve}),ie||ee);const x=ee;x.redirectedFrom=ie;let R;return!Me&&Ph(s,re,ee)&&(R=Qi(16,{to:x,from:re}),Oe(re,re,!0,!1)),(R?Promise.resolve(R):P(x,re)).catch(I=>di(I)?I:ae(I,x,re)).then(I=>{if(I){if(di(I,2))return z(Ne(b(I.to),{state:ze,force:Me,replace:ve}),ie||x)}else I=U(x,re,!0,ve,ze);return F(x,re,I),I})}function M(H,ie){const ee=w(H,ie);return ee?Promise.reject(ee):Promise.resolve()}function P(H,ie){let ee;const[re,ze,Me]=R_(H,ie);ee=yn(re.reverse(),"beforeRouteLeave",H,ie);for(const ye of re)ye.leaveGuards.forEach(x=>{ee.push(ei(x,H,ie))});const ve=M.bind(null,H,ie);return ee.push(ve),Ri(ee).then(()=>{ee=[];for(const ye of c.list())ee.push(ei(ye,H,ie));return ee.push(ve),Ri(ee)}).then(()=>{ee=yn(ze,"beforeRouteUpdate",H,ie);for(const ye of ze)ye.updateGuards.forEach(x=>{ee.push(ei(x,H,ie))});return ee.push(ve),Ri(ee)}).then(()=>{ee=[];for(const ye of H.matched)if(ye.beforeEnter&&!ie.matched.includes(ye))if(Array.isArray(ye.beforeEnter))for(const x of ye.beforeEnter)ee.push(ei(x,H,ie));else ee.push(ei(ye.beforeEnter,H,ie));return ee.push(ve),Ri(ee)}).then(()=>(H.matched.forEach(ye=>ye.enterCallbacks={}),ee=yn(Me,"beforeRouteEnter",H,ie),ee.push(ve),Ri(ee))).then(()=>{ee=[];for(const ye of f.list())ee.push(ei(ye,H,ie));return ee.push(ve),Ri(ee)}).catch(ye=>di(ye,8)?ye:Promise.reject(ye))}function F(H,ie,ee){for(const re of p.list())re(H,ie,ee)}function U(H,ie,ee,re,ze){const Me=w(H,ie);if(Me)return Me;const ve=ie===Gt,ye=zi?history.state:{};ee&&(re||ve?r.replace(H.fullPath,Ne({scroll:ve&&ye&&ye.scroll},ze)):r.push(H.fullPath,ze)),o.value=H,Oe(H,ie,ee,ve),Te()}let O;function se(){O=r.listen((H,ie,ee)=>{const re=T(H),ze=B(re);if(ze){z(Ne(ze,{replace:!0}),re).catch(Al);return}u=re;const Me=o.value;zi&&Lh(tu(Me.fullPath,ee.delta),ln()),P(re,Me).catch(ve=>di(ve,12)?ve:di(ve,2)?(z(ve.to,re).then(ye=>{di(ye,20)&&!ee.delta&&ee.type===Il.pop&&r.go(-1,!1)}).catch(Al),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),ae(ve,re,Me))).then(ve=>{ve=ve||U(re,Me,!1),ve&&(ee.delta?r.go(-ee.delta,!1):ee.type===Il.pop&&di(ve,20)&&r.go(-1,!1)),F(re,Me,ve)}).catch(Al)})}let we=rl(),V=rl(),q;function ae(H,ie,ee){Te(H);const re=V.list();return re.length?re.forEach(ze=>ze(H,ie,ee)):console.error(H),Promise.reject(H)}function X(){return q&&o.value!==Gt?Promise.resolve():new Promise((H,ie)=>{we.add([H,ie])})}function Te(H){q||(q=!0,se(),we.list().forEach(([ie,ee])=>H?ee(H):ie()),we.reset())}function Oe(H,ie,ee,re){const{scrollBehavior:ze}=t;if(!zi||!ze)return Promise.resolve();const Me=!ee&&Oh(tu(H.fullPath,0))||(re||!ee)&&history.state&&history.state.scroll||null;return ll().then(()=>ze(H,ie,Me)).then(ve=>ve&&Nh(ve)).catch(ve=>ae(ve,H,ie))}const Ye=H=>r.go(H);let Ie;const Bt=new Set;return{currentRoute:o,addRoute:v,removeRoute:d,hasRoute:S,getRoutes:y,resolve:T,options:t,push:k,replace:$,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:c.add,beforeResolve:f.add,afterEach:p.add,onError:V.add,isReady:X,install(H){const ie=this;H.component("RouterLink",Pm),H.component("RouterView",B_),H.config.globalProperties.$router=ie,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(o)}),zi&&!Ie&&o.value===Gt&&(Ie=!0,k(r.location).catch(ze=>{}));const ee={};for(const ze in Gt)ee[ze]=D(()=>o.value[ze]);H.provide(tn,ie),H.provide(Zs,Ht(ee)),H.provide(es,o);const re=H.unmount;Bt.add(H),H.unmount=function(){Bt.delete(H),Bt.size<1&&(u=Gt,O&&O(),o.value=Gt,Ie=!1,q=!1),re()}}}}function Ri(t){return t.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function R_(t,l){const n=[],s=[],r=[],c=Math.max(l.matched.length,t.matched.length);for(let f=0;f<c;f++){const p=l.matched[f];p&&(t.matched.find(u=>Xi(u,p))?s.push(p):n.push(p));const o=t.matched[f];o&&(l.matched.find(u=>Xi(u,o))||r.push(o))}return[n,s,r]}function zm(){return Pe(tn)}function Mm(){return Pe(Zs)}const P_={__name:"Navbar",props:["onClick"],setup(t){const l=N(),n=zm();function s(r){return r.charAt(0).toUpperCase()+r.slice(1)}return Ls(()=>{const f=n.currentRoute.value.path.match(/\/([^/]+)$/);f&&(l.value=s(f[1]))}),(r,c)=>{const f=_("SuiIcon"),p=_("SuiMenuItem"),o=_("SuiMenu");return L(),ge(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[e(p,{onClick:t.onClick},{default:i(()=>[e(f,{name:"hamburger"})]),_:1},8,["onClick"]),e(p,null,{default:i(()=>[a(ke(l.value),1)]),_:1})]),_:1})}}},z_=me(P_,[["__scopeId","data-v-338afb35"]]),M_=E({name:"Sidebar",setup(){const t=Mm();return{isActive:f=>t.path===f,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),D_=C("strong",null," Fomantic UI Vue ",-1),I_=C("b",null,"Getting Started",-1);function F_(t,l,n,s,r,c){const f=_("sui-menu-item"),p=_("sui-menu-header"),o=_("sui-menu-menu"),u=_("sui-menu");return L(),ge(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[e(f,{as:"div"},{default:i(()=>[D_]),_:1}),e(f,{as:"router-link",to:"/"},{default:i(()=>[I_]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Elements"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.elements,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Collections"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.collections,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Views"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.views,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Modules"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.modules,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const V_=me(M_,[["render",F_]]),N_={class:"sidemenu"},L_={style:{flex:"1","overflow-y":"scroll"}},O_={__name:"Sidebar",setup(t){return(l,n)=>(L(),ne("div",N_,[C("div",L_,[e(V_)])]))}},H_=me(O_,[["__scopeId","data-v-379ef704"]]),j_=E({name:"Sidebar",setup(){const t=Mm();return{isActive:f=>t.path===f,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),q_=C("strong",null," Fomantic UI Vue ",-1),U_=C("b",null,"Getting Started",-1);function Y_(t,l,n,s,r,c){const f=_("sui-menu-item"),p=_("sui-menu-header"),o=_("sui-menu-menu"),u=_("sui-sidebar");return L(),ge(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[e(f,{as:"div"},{default:i(()=>[q_]),_:1}),e(f,{as:"router-link",to:"/"},{default:i(()=>[U_]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Elements"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.elements,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Collections"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.collections,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Views"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.views,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Modules"}),e(o,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.modules,g=>(L(),ge(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const J_=me(j_,[["render",Y_]]),G_={class:"pusher",style:{height:"100vh"}},W_={class:"article"},K_={__name:"Home",setup(t){const l=N(!1),n=()=>l.value=!l.value;return S_(()=>{l.value=!1}),(s,r)=>{const c=_("router-view"),f=_("SuiSegment");return L(),ge(f,{class:"pushable",style:{border:"none"}},{default:i(()=>[e(J_,{visible:l.value},null,8,["visible"]),C("div",G_,[e(H_),e(z_,{"on-click":n}),C("div",W_,[e(c)])])]),_:1})}}},X_=me(K_,[["__scopeId","data-v-f0139217"]]);var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Q_(t){if(t.__esModule)return t;var l=t.default;if(typeof l=="function"){var n=function s(){return this instanceof s?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};n.prototype=l.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),n}const Z_=Q_(Ah);var Im={exports:{}};(function(t){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,f={},p={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof o?new o(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++c}),b.__id},clone:function b(w,k){k=k||{};var $,B;switch(p.util.type(w)){case"Object":if(B=p.util.objId(w),k[B])return k[B];$={},k[B]=$;for(var z in w)w.hasOwnProperty(z)&&($[z]=b(w[z],k));return $;case"Array":return B=p.util.objId(w),k[B]?k[B]:($=[],k[B]=$,w.forEach(function(M,P){$[P]=b(M,k)}),$);default:return w}},getLanguage:function(b){for(;b;){var w=r.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var k in w)if(w[k].src==b)return w[k]}return null}},isActive:function(b,w,k){for(var $="no-"+w;b;){var B=b.classList;if(B.contains(w))return!0;if(B.contains($))return!1;b=b.parentElement}return!!k}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(b,w){var k=p.util.clone(p.languages[b]);for(var $ in w)k[$]=w[$];return k},insertBefore:function(b,w,k,$){$=$||p.languages;var B=$[b],z={};for(var M in B)if(B.hasOwnProperty(M)){if(M==w)for(var P in k)k.hasOwnProperty(P)&&(z[P]=k[P]);k.hasOwnProperty(M)||(z[M]=B[M])}var F=$[b];return $[b]=z,p.languages.DFS(p.languages,function(U,O){O===F&&U!=b&&(this[U]=z)}),z},DFS:function b(w,k,$,B){B=B||{};var z=p.util.objId;for(var M in w)if(w.hasOwnProperty(M)){k.call(w,M,w[M],$||M);var P=w[M],F=p.util.type(P);F==="Object"&&!B[z(P)]?(B[z(P)]=!0,b(P,k,null,B)):F==="Array"&&!B[z(P)]&&(B[z(P)]=!0,b(P,k,M,B))}}},plugins:{},highlightAll:function(b,w){p.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,k){var $={callback:k,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),p.hooks.run("before-all-elements-highlight",$);for(var B=0,z;z=$.elements[B++];)p.highlightElement(z,w===!0,$.callback)},highlightElement:function(b,w,k){var $=p.util.getLanguage(b),B=p.languages[$];p.util.setLanguage(b,$);var z=b.parentElement;z&&z.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(z,$);var M=b.textContent,P={element:b,language:$,grammar:B,code:M};function F(O){P.highlightedCode=O,p.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,p.hooks.run("after-highlight",P),p.hooks.run("complete",P),k&&k.call(P.element)}if(p.hooks.run("before-sanity-check",P),z=P.element.parentElement,z&&z.nodeName.toLowerCase()==="pre"&&!z.hasAttribute("tabindex")&&z.setAttribute("tabindex","0"),!P.code){p.hooks.run("complete",P),k&&k.call(P.element);return}if(p.hooks.run("before-highlight",P),!P.grammar){F(p.util.encode(P.code));return}if(w&&s.Worker){var U=new Worker(p.filename);U.onmessage=function(O){F(O.data)},U.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else F(p.highlight(P.code,P.grammar,P.language))},highlight:function(b,w,k){var $={code:b,grammar:w,language:k};if(p.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=p.tokenize($.code,$.grammar),p.hooks.run("after-tokenize",$),o.stringify(p.util.encode($.tokens),$.language)},tokenize:function(b,w){var k=w.rest;if(k){for(var $ in k)w[$]=k[$];delete w.rest}var B=new m;return h(B,B.head,b),g(b,B,w,B.head,0),d(B)},hooks:{all:{},add:function(b,w){var k=p.hooks.all;k[b]=k[b]||[],k[b].push(w)},run:function(b,w){var k=p.hooks.all[b];if(!(!k||!k.length))for(var $=0,B;B=k[$++];)B(w)}},Token:o};s.Prism=p;function o(b,w,k,$){this.type=b,this.content=w,this.alias=k,this.length=($||"").length|0}o.stringify=function b(w,k){if(typeof w=="string")return w;if(Array.isArray(w)){var $="";return w.forEach(function(F){$+=b(F,k)}),$}var B={type:w.type,content:b(w.content,k),tag:"span",classes:["token",w.type],attributes:{},language:k},z=w.alias;z&&(Array.isArray(z)?Array.prototype.push.apply(B.classes,z):B.classes.push(z)),p.hooks.run("wrap",B);var M="";for(var P in B.attributes)M+=" "+P+'="'+(B.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+B.tag+' class="'+B.classes.join(" ")+'"'+M+">"+B.content+"</"+B.tag+">"};function u(b,w,k,$){b.lastIndex=w;var B=b.exec(k);if(B&&$&&B[1]){var z=B[1].length;B.index+=z,B[0]=B[0].slice(z)}return B}function g(b,w,k,$,B,z){for(var M in k)if(!(!k.hasOwnProperty(M)||!k[M])){var P=k[M];P=Array.isArray(P)?P:[P];for(var F=0;F<P.length;++F){if(z&&z.cause==M+","+F)return;var U=P[F],O=U.inside,se=!!U.lookbehind,we=!!U.greedy,V=U.alias;if(we&&!U.pattern.global){var q=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,q+"g")}for(var ae=U.pattern||U,X=$.next,Te=B;X!==w.tail&&!(z&&Te>=z.reach);Te+=X.value.length,X=X.next){var Oe=X.value;if(w.length>b.length)return;if(!(Oe instanceof o)){var Ye=1,Ie;if(we){if(Ie=u(ae,Te,b,se),!Ie||Ie.index>=b.length)break;var ie=Ie.index,Bt=Ie.index+Ie[0].length,mt=Te;for(mt+=X.value.length;ie>=mt;)X=X.next,mt+=X.value.length;if(mt-=X.value.length,Te=mt,X.value instanceof o)continue;for(var H=X;H!==w.tail&&(mt<Bt||typeof H.value=="string");H=H.next)Ye++,mt+=H.value.length;Ye--,Oe=b.slice(Te,mt),Ie.index-=Te}else if(Ie=u(ae,0,Oe,se),!Ie)continue;var ie=Ie.index,ee=Ie[0],re=Oe.slice(0,ie),ze=Oe.slice(ie+ee.length),Me=Te+Oe.length;z&&Me>z.reach&&(z.reach=Me);var ve=X.prev;re&&(ve=h(w,ve,re),Te+=re.length),v(w,ve,Ye);var ye=new o(M,O?p.tokenize(ee,O):ee,V,ee);if(X=h(w,ve,ye),ze&&h(w,X,ze),Ye>1){var x={cause:M+","+F,reach:Me};g(b,w,k,X.prev,Te,x),z&&x.reach>z.reach&&(z.reach=x.reach)}}}}}}function m(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,k){var $=w.next,B={value:k,prev:w,next:$};return w.next=B,$.prev=B,b.length++,B}function v(b,w,k){for(var $=w.next,B=0;B<k&&$!==b.tail;B++)$=$.next;w.next=$,$.prev=w,b.length-=B}function d(b){for(var w=[],k=b.head.next;k!==b.tail;)w.push(k.value),k=k.next;return w}if(!s.document)return s.addEventListener&&(p.disableWorkerMessageHandler||s.addEventListener("message",function(b){var w=JSON.parse(b.data),k=w.language,$=w.code,B=w.immediateClose;s.postMessage(p.highlight($,p.languages[k],k)),B&&s.close()},!1)),p;var y=p.util.currentScript();y&&(p.filename=y.src,y.hasAttribute("data-manual")&&(p.manual=!0));function S(){p.manual||p.highlightAll()}if(!p.manual){var T=document.readyState;T==="loading"||T==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return p}(l);t.exports&&(t.exports=n),typeof mu<"u"&&(mu.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,c){var f={};f["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[c]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};p["language-"+c]={pattern:/[\s\S]+/,inside:n.languages[c]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var c=s.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",r=function(y,S){return"✖ Error "+y+" while fetching file: "+S},c="✖ Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",o="loading",u="loaded",g="failed",m="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+o+'"])';function h(y,S,T){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?S(b.responseText):b.status>=400?T(r(b.status,b.statusText)):T(c))},b.send(null)}function v(y){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(S){var T=Number(S[1]),b=S[2],w=S[3];return b?w?[T,Number(w)]:[T,void 0]:[T,T]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+m}),n.hooks.add("before-sanity-check",function(y){var S=y.element;if(S.matches(m)){y.code="",S.setAttribute(p,o);var T=S.appendChild(document.createElement("CODE"));T.textContent=s;var b=S.getAttribute("data-src"),w=y.language;if(w==="none"){var k=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=f[k]||k}n.util.setLanguage(T,w),n.util.setLanguage(S,w);var $=n.plugins.autoloader;$&&$.loadLanguages(w),h(b,function(B){S.setAttribute(p,u);var z=v(S.getAttribute("data-range"));if(z){var M=B.split(/\r\n?|\n/g),P=z[0],F=z[1]==null?M.length:z[1];P<0&&(P+=M.length),P=Math.max(0,Math.min(P-1,M.length)),F<0&&(F+=M.length),F=Math.max(0,Math.min(F,M.length)),B=M.slice(P,F).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(P+1))}T.textContent=B,n.highlightElement(T)},function(B){S.setAttribute(p,g),T.textContent=B})}}),n.plugins.fileHighlight={highlight:function(S){for(var T=(S||document).querySelectorAll(m),b=0,w;w=T[b++];)n.highlightElement(w)}};var d=!1;n.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Im);var Fm=Im.exports;const eb=Dm(Fm);function tb(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var na=Z_,Cn=tb(Fm),ib=na.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,n){var s=n.slots,r=n.attrs,c=s&&s.default&&s.default()||[],f=l.code||c&&c.length?c[0].children:"",p=l.inline,o=l.language,u=Cn.languages[o],g="language-".concat(o);return function(){return p?na.h("code",{class:[g],innerHTML:Cn.highlight(f,u)}):na.h("pre",Object.assign({},r,{class:[r.class,g]}),[na.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:Cn.highlight(f,u)}))])}}}),lb=ib;const Vm=Dm(lb),ab=E({name:"DocPageHeader",props:{title:String,sub:String}}),nb={class:"intro",style:{padding:"2rem"}};function sb(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment");return L(),ge(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",nb,[e(p,{as:"h1"},{default:i(()=>[a(ke(t.title)+" ",1),e(f,null,{default:i(()=>[a(ke(t.sub),1)]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Le=me(ab,[["render",sb]]),ob=E({name:"GettingStarted",components:{Prism:Vm,DocPageHeader:Le}}),an=t=>(ja("data-v-2f4c2002"),t=t(),qa(),t),ub=an(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),rb=an(()=>C("p",null," You can import all components as Vue plugin. ",-1)),db=an(()=>C("br",null,null,-1)),cb=an(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function mb(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("prism"),u=_("sui-container");return L(),ne("div",null,[e(f,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(u,{class:"main"},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Install")]),_:1}),ub,e(p,{as:"h3"},{default:i(()=>[a("via Package Manager")]),_:1}),e(o,{language:"bash"},{default:i(()=>[a(ke(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),e(p,{as:"h2"},{default:i(()=>[a("Usage")]),_:1}),rb,e(o,{language:"js"},{default:i(()=>[a(ke(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),db,cb,e(o,{language:"js"},{default:i(()=>[a(ke(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const pb=me(ob,[["render",mb],["__scopeId","data-v-2f4c2002"]]),fb=E({name:"DocExample",components:{Prism:Vm},props:{title:String,description:String,code:String},setup(){const t=N(!1);return{active:t,toggle:()=>t.value=!t.value}}}),gb={class:"example"};function hb(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-grid-column"),u=_("sui-icon"),g=_("sui-grid-row"),m=_("prism"),h=_("sui-grid");return L(),ne("div",gb,[e(h,{columns:2},{default:i(()=>[e(g,null,{default:i(()=>[e(o,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a(ke(t.title)+" ",1),e(f,null,{default:i(()=>[a(ke(t.description),1)]),_:1})]),_:1})]),_:1}),e(o,{textAlign:"right"},{default:i(()=>[e(u,{name:"code",color:"grey",onClick:t.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(o,{width:16},{default:i(()=>[Gi(t.$slots,"default",{},void 0,!0)]),_:3}),t.active?(L(),ge(o,{key:0,width:16},{default:i(()=>[e(m,{language:"markup"},{default:i(()=>[a(ke(t.code),1)]),_:1})]),_:1})):Gs("",!0)]),_:3})]),_:3})])}const Se=me(fb,[["render",hb],["__scopeId","data-v-fcfb6a67"]]),_e="/vue-fomantic-ui/images/wireframe/paragraph.png",_b=E({name:"ButtonDoc",components:{DocExample:Se},setup(){const t=N(!1);return{active:t,toggle:()=>t.value=!t.value,buttonExample:`<template>
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
</template>`}}}),Yl=t=>(ja("data-v-e27c391e"),t=t(),qa(),t),bb={class:"intro"},vb=Yl(()=>C("div",{class:"or"},null,-1)),yb=Yl(()=>C("div",{class:"or","data-text":"ou"},null,-1)),Cb=Yl(()=>C("img",{src:_e},null,-1)),wb=Yl(()=>C("img",{src:_e},null,-1)),Sb=Yl(()=>C("div",{class:"or"},null,-1));function Ab(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-button"),y=_("doc-example"),S=_("sui-button-content"),T=_("sui-label"),b=_("sui-button-group");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,null,{default:i(()=>[C("div",bb,[e(p,{as:"h1"},{default:i(()=>[a("Button "),e(f,null,{default:i(()=>[a("A button indicates a possible user action")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Button",description:"A standard button",code:t.buttonExample},{default:i(()=>[e(d,null,{default:i(()=>[a("Follow")]),_:1})]),_:1},8,["code"]),e(y,{title:"Emphasis",description:"A button can be formatted to show different levels of emphasis",code:t.emphasisExample},{default:i(()=>[C("div",null,[e(d,{primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{secondary:""},{default:i(()=>[a("Secondary")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Animated",description:"A button can animate to show hidden content",code:t.animatedExample},{default:i(()=>[e(d,{animated:""},{default:i(()=>[e(S,{visible:""},{default:i(()=>[a("Next")]),_:1}),e(S,{hidden:""},{default:i(()=>[e(u,{name:"arrow right"})]),_:1})]),_:1}),e(d,{animated:"vertical"},{default:i(()=>[e(S,{visible:""},{default:i(()=>[e(u,{name:"shop"})]),_:1}),e(S,{hidden:""},{default:i(()=>[a("Shop")]),_:1})]),_:1}),e(d,{animated:"fade"},{default:i(()=>[e(S,{visible:""},{default:i(()=>[a(" Sign-up for a Pro account ")]),_:1}),e(S,{hidden:""},{default:i(()=>[a("$12.99 a month")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"A button can appear alongside a label",code:t.labeledExample},{default:i(()=>[e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e(T,{basic:""},{default:i(()=>[a("2,048")]),_:1})]),_:1}),e(d,{labelPosition:"left",as:"div"},{default:i(()=>[e(T,{basic:"",pointing:"right"},{default:i(()=>[a("2,048")]),_:1}),e(d,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1})]),_:1}),e(d,{labelPosition:"left",as:"div"},{default:i(()=>[e(T,{basic:""},{default:i(()=>[a("1,048")]),_:1}),e(d,{icon:""},{default:i(()=>[e(u,{name:"fork"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.labeledExample2},{default:i(()=>[e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{icon:"",color:"red"},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e(T,{basic:"",pointing:"left",color:"red"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1}),e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{basic:"",icon:"",color:"blue"},{default:i(()=>[e(u,{name:"fork"}),a(" Forks ")]),_:1}),e(T,{basic:"",pointing:"left",color:"blue"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A button can have only an icon",code:t.iconExample},{default:i(()=>[e(d,{icon:""},{default:i(()=>[e(u,{name:"cloud"})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon",description:"A button can use an icon as a label",code:t.labeledIconExample},{default:i(()=>[e(d,{labeled:"",icon:""},{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(d,{labeled:"right",icon:""},{default:i(()=>[e(u,{name:"right arrow"}),a(" Next ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic",description:"A basic button is less pronounced",code:t.basicExample},{default:i(()=>[e(d,{basic:""},{default:i(()=>[e(u,{name:"user"}),a(" Add Friend ")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample2},{default:i(()=>[e(d,{basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{basic:"",positive:""},{default:i(()=>[a("Positive")]),_:1}),e(d,{basic:"",negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample3},{default:i(()=>[e(d,{basic:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{basic:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{basic:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{basic:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{basic:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{basic:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{basic:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{basic:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{basic:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{basic:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{basic:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{basic:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{basic:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"A button can be formatted to appear on dark backgrounds",code:t.invertedExample},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:""},{default:i(()=>[a("Standard")]),_:1}),e(d,{inverted:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{inverted:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{inverted:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{inverted:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{inverted:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{inverted:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{inverted:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{inverted:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{inverted:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{inverted:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{inverted:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{inverted:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{inverted:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{inverted:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{inverted:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.invertedExample2},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:"",basic:""},{default:i(()=>[a("Basic")]),_:1}),e(d,{inverted:"",basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{inverted:"",basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{inverted:"",basic:"",color:"red"},{default:i(()=>[a("Basic Red")]),_:1}),e(d,{inverted:"",basic:"",color:"orange"},{default:i(()=>[a("Basic Orange")]),_:1}),e(d,{inverted:"",basic:"",color:"yellow"},{default:i(()=>[a("Basic Yellow")]),_:1}),e(d,{inverted:"",basic:"",color:"olive"},{default:i(()=>[a("Basic Olive")]),_:1}),e(d,{inverted:"",basic:"",color:"green"},{default:i(()=>[a("Basic Green")]),_:1}),e(d,{inverted:"",basic:"",color:"teal"},{default:i(()=>[a("Basic Teal")]),_:1}),e(d,{inverted:"",basic:"",color:"blue"},{default:i(()=>[a("Basic Blue")]),_:1}),e(d,{inverted:"",basic:"",color:"violet"},{default:i(()=>[a("Basic Violet")]),_:1}),e(d,{inverted:"",basic:"",color:"purple"},{default:i(()=>[a("Basic Purple")]),_:1}),e(d,{inverted:"",basic:"",color:"pink"},{default:i(()=>[a("Basic Pink")]),_:1}),e(d,{inverted:"",basic:"",color:"brown"},{default:i(()=>[a("Basic Brown")]),_:1}),e(d,{inverted:"",basic:"",color:"grey"},{default:i(()=>[a("Basic Grey")]),_:1}),e(d,{inverted:"",basic:"",color:"black"},{default:i(()=>[a("Basic Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Buttons",description:"Buttons can exist together as a group",code:t.buttonsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon Buttons",description:"Buttons can exist together as a group",code:t.iconButtonsExample},{default:i(()=>[e(b,{icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"align left"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align center"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align right"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align justify"})]),_:1})]),_:1}),e(b,{icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"bold"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"underline"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"text width"})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Conditionals",description:"Button groups can contain conditionals",code:t.conditionalsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Cancel")]),_:1}),vb,e(d,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.conditionalsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Cancel")]),_:1}),yb,e(d,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Active",description:"A button can show it is currently the active user selection",code:t.activeExample},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"user"}),a(" Follow ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"A button can show it is currently unable to be interacted with",code:t.disabledExample},{default:i(()=>[e(d,{disabled:""},{default:i(()=>[e(u,{name:"user"}),a(" Followed ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"A button can show a loading indicator",code:t.loadingExample},{default:i(()=>[e(d,{loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{basic:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{primary:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{secondary:"",loading:""},{default:i(()=>[a("Loading")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Social",description:"A button can be formatted to link to a social website",code:t.socialExample},{default:i(()=>[e(d,{facebook:""},{default:i(()=>[e(u,{name:"facebook"}),a(" Facebook ")]),_:1}),e(d,{twitter:""},{default:i(()=>[e(u,{name:"twitter"}),a(" Twitter ")]),_:1}),e(d,{vk:""},{default:i(()=>[e(u,{name:"vk"}),a(" VK ")]),_:1}),e(d,{linkedin:""},{default:i(()=>[e(u,{name:"linkedin"}),a(" LinkedIn ")]),_:1}),e(d,{instagram:""},{default:i(()=>[e(u,{name:"instagram"}),a(" Instagram ")]),_:1}),e(d,{youtube:""},{default:i(()=>[e(u,{name:"youtube"}),a(" YouTube ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"Buttons can have assorted sizes",code:t.sizeExample},{default:i(()=>[C("div",null,[e(d,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(d,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(d,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(d,{size:"medium"},{default:i(()=>[a("Medium")]),_:1}),e(d,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(d,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(d,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(d,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Floated",description:"A button can be aligned to the left or right of its container",code:t.floatedExample},{default:i(()=>[C("div",null,[e(d,{floated:"left"},{default:i(()=>[a("Left Floated")]),_:1}),e(d,{floated:"right"},{default:i(()=>[a("Right Floated")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A button can have different colors",code:t.coloredExample},{default:i(()=>[C("div",null,[e(d,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Compact",description:"A button can reduce its padding to fit into tighter spaces",code:t.compactExample},{default:i(()=>[C("div",null,[e(d,{compact:""},{default:i(()=>[a("Compact")]),_:1}),e(d,null,{default:i(()=>[a("Normal")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Toggle",description:"A button can be formatted to toggle on and off",code:t.toggleExample},{default:i(()=>[e(d,{toggle:"",active:t.active,onClick:l[0]||(l[0]=()=>t.active=!t.active)},{default:i(()=>[a("Vote")]),_:1},8,["active"])]),_:1},8,["code"]),e(y,{title:"Positive",description:"A button can hint towards a positive consequence",code:t.positiveExample},{default:i(()=>[e(d,{positive:""},{default:i(()=>[a("Positive")]),_:1})]),_:1},8,["code"]),e(y,{title:"Negative",description:"A button can hint towards a negative consequence",code:t.negativeExample},{default:i(()=>[e(d,{negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"A button can take the width of its container",code:t.fluidExample},{default:i(()=>[e(d,{fluid:""},{default:i(()=>[a("Fluid")]),_:1})]),_:1},8,["code"]),e(y,{title:"Circular",description:"A button can be circular",code:t.circularExample},{default:i(()=>[e(d,{circular:"",icon:""},{default:i(()=>[e(u,{name:"settings"})]),_:1})]),_:1},8,["code"]),e(y,{code:t.circularExample2},{default:i(()=>[C("div",null,[e(d,{facebook:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"facebook"})]),_:1}),e(d,{twitter:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"twitter"})]),_:1}),e(d,{linkedin:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"linkedin"})]),_:1}),e(d,{youtube:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"youtube"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Vertically Attached",description:"A button can be attached to the top or bottom of other content",code:t.attachedExample},{default:i(()=>[C("div",null,[e(d,{attached:"top"},{default:i(()=>[a("Top")]),_:1}),e(v,{attached:""},{default:i(()=>[Cb]),_:1}),e(d,{attached:"bottom"},{default:i(()=>[a("Bottom")]),_:1})])]),_:1},8,["code"]),e(y,{code:t.attachedExample2},{default:i(()=>[C("div",null,[e(b,{attached:"top"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[wb]),_:1}),e(b,{attached:"bottom"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Horizontally Attached",description:"A button can be attached to the left or right of other content",code:t.horizontalAttachedExample},{default:i(()=>[C("div",null,[e(d,{attached:"left"},{default:i(()=>[a("Left")]),_:1}),e(d,{attached:"right"},{default:i(()=>[a("Right")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Group Variations")]),_:1}),e(y,{title:"Vertical Buttons",description:"Groups can be formatted to appear vertically",code:t.verticalButtonsExample},{default:i(()=>[e(b,{vertical:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Feed")]),_:1}),e(d,null,{default:i(()=>[a("Messages")]),_:1}),e(d,null,{default:i(()=>[a("Events")]),_:1}),e(d,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon Buttons",description:"Groups can be formatted as labeled icons",code:t.labeledIconButtonsExample},{default:i(()=>[e(b,{vertical:"",labeled:"",icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"play"}),a(" Play ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"shuffle"}),a(" Shuffle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Mixed Group",description:"Groups can be formatted to use multiple button types together",code:t.mixedGroupExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,{labelPosition:"left",icon:""},{default:i(()=>[e(u,{name:"left chevron"}),a(" Back ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"stop"}),a(" Stop ")]),_:1}),e(d,{labelPosition:"right",icon:""},{default:i(()=>[e(u,{name:"right chevron"}),a(" Forward ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Equal Width",description:"Groups can have their widths divided evenly",code:t.equalWidthExample},{default:i(()=>[C("div",null,[e(b,{widths:5},{default:i(()=>[e(d,null,{default:i(()=>[a("Overview")]),_:1}),e(d,null,{default:i(()=>[a("Specs")]),_:1}),e(d,null,{default:i(()=>[a("Warranty")]),_:1}),e(d,null,{default:i(()=>[a("Reviews")]),_:1}),e(d,null,{default:i(()=>[a("Support")]),_:1})]),_:1}),e(o),e(b,{widths:3},{default:i(()=>[e(d,null,{default:i(()=>[a("Overview")]),_:1}),e(d,null,{default:i(()=>[a("Specs")]),_:1}),e(d,null,{default:i(()=>[a("Support")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored Buttons",description:"Groups can have a shared color",code:t.coloredButtonsExample},{default:i(()=>[e(b,{color:"blue"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Buttons",description:"A button group can be less pronounced",code:t.basicButtonsExample},{default:i(()=>[C("div",null,[e(b,{basic:""},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1}),e(o),e(b,{basic:"",vertical:""},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{code:t.basicButtonsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(d,{basic:"",color:"red"},{default:i(()=>[a("One")]),_:1}),e(d,{basic:"",color:"blue"},{default:i(()=>[a("Two")]),_:1}),e(d,{basic:"",color:"green"},{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Group Sizes",description:"Groups can have a shared size",code:t.groupSizesExample},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample2},{default:i(()=>[e(b,{basic:"",icon:"",size:"small"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"file"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"save"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"upload"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"download"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample3},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),Sb,e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const kb=me(_b,[["render",Ab],["__scopeId","data-v-e27c391e"]]),Tb=E({name:"ContainerDoc",components:{DocExample:Se},setup(){return{containerExample:`<template>
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
</template>`}}}),to=t=>(ja("data-v-3696fd53"),t=t(),qa(),t),$b={class:"intro"},xb=to(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),Bb=to(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),Eb=to(()=>C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function Rb(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",$b,[e(p,{as:"h1"},{default:i(()=>[a("Container "),e(f,null,{default:i(()=>[a("A container limits content to a maximum width")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Container",description:"A standard container",code:t.containerExample},{default:i(()=>[e(h,null,{default:i(()=>[xb]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:t.textContainerExample},{default:i(()=>[e(h,{text:""},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Header")]),_:1}),Bb]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Text Alignment",description:"A container can specify its text alignment",code:t.textAlignmentExample},{default:i(()=>[C("div",null,[e(h,{textAlign:"left"},{default:i(()=>[a("Left Aligned")]),_:1}),e(h,{textAlign:"center"},{default:i(()=>[a("Center Aligned")]),_:1}),e(h,{textAlign:"right"},{default:i(()=>[a("Right Aligned")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Fluid",description:"A fluid container has no maximum width",code:t.fluidExample},{default:i(()=>[e(h,{fluid:""},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Dogs Roles with Humans")]),_:1}),Eb]),_:1})]),_:1},8,["code"])]),_:1})])}const Pb=me(Tb,[["render",Rb],["__scopeId","data-v-3696fd53"]]),Ae="/vue-fomantic-ui/images/wireframe/short-paragraph.png",zb=E({name:"DividerDoc",components:{DocExample:Se},setup(){return{dividerCode:`<div>
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
</sui-segment>`}}}),Mb={class:"intro"};function Db(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("doc-example"),S=_("sui-grid-column"),T=_("sui-grid");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Mb,[e(p,{as:"h1"},{default:i(()=>[a("Divider "),e(f,null,{default:i(()=>[a("A divider visually segments content into groups")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Divider",description:"A standard divider",code:t.dividerCode},{default:i(()=>[C("div",null,[e(d,{src:Ae}),e(o),e(d,{src:Ae})])]),_:1},8,["code"]),e(y,{title:"Vertical Divider",description:"A divider can segment content vertically",code:t.verticalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e(T,{columns:2,relaxed:"very"},{default:i(()=>[e(S,null,{default:i(()=>[e(d,{src:Ae})]),_:1}),e(S,null,{default:i(()=>[e(d,{src:Ae})]),_:1})]),_:1}),e(o,{vertical:""},{default:i(()=>[a("and")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:t.horizontalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e(T,{relaxed:"very"},{default:i(()=>[e(S,null,{default:i(()=>[e(d,{src:Ae})]),_:1})]),_:1}),e(o,{horizontal:""},{default:i(()=>[a("and")]),_:1}),e(T,{relaxed:"very"},{default:i(()=>[e(S,null,{default:i(()=>[e(d,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:t.horizontalAlignmentCode},{default:i(()=>[C("div",null,[e(o,{horizontal:"",textAlign:"left"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"left align"}),a(" Left Aligned ")]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"center align"}),a(" Center Aligned ")]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"right"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Inverted",description:"A divider can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{src:Ae}),e(o,{inverted:""}),e(d,{src:Ae})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:t.fittedCode},{default:i(()=>[e(v,null,{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(o,{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:t.hiddenCode},{default:i(()=>[C("div",null,[e(p,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(d,{src:Ae}),e(o,{hidden:""}),e(p,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(d,{src:Ae})])]),_:1},8,["code"]),e(y,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:t.sectionCode},{default:i(()=>[C("div",null,[e(p,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(d,{src:Ae}),e(o,{section:""}),e(p,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(d,{src:Ae})])]),_:1},8,["code"]),e(y,{title:"Clearing",description:"A divider can clear the contents above it",code:t.clearingCode},{default:i(()=>[e(v,null,{default:i(()=>[e(p,{floated:"right"},{default:i(()=>[a("Floated Content")]),_:1}),e(o,{clearing:""}),e(d,{src:Ae})]),_:1})]),_:1},8,["code"])]),_:1})])}const Ib=me(zb,[["render",Db],["__scopeId","data-v-3a1972e7"]]),Fb=E({name:"EmojiDoc",components:{DocExample:Se},setup(){return{disabledCode:`<sui-segment basic>
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
</sui-segment>`}}}),Vb={class:"intro"},Nb=C("br",null,null,-1),Lb=C("br",null,null,-1),Ob=C("br",null,null,-1),Hb=C("br",null,null,-1),jb=C("br",null,null,-1);function qb(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-emoji"),y=_("doc-example"),S=_("sui-button"),T=_("sui-label");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Vb,[e(p,{as:"h1"},{default:i(()=>[a("Emoji "),e(f,null,{default:i(()=>[a(" An emoji is a glyph used to represent an emotional state ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Disabled",description:"An emoji can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An emoji can be used as a simple loader",code:t.loadingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"angel",loading:""}),e(d,{name:"blush",loading:""}),e(d,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Size",description:"An emoji can vary in size",code:t.sizeCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"relaxed",size:"small"}),a(" Small "),Nb,e(d,{name:"relaxed",size:"medium"}),a(" Medium "),Lb,e(d,{name:"relaxed",size:"large"}),a(" Large "),Ob,e(d,{name:"relaxed",size:"big"}),a(" Big ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:t.autosizingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(p,{size:"small"},{default:i(()=>[a("Within a header "),e(d,{name:"relaxed"})]),_:1}),e(S,{size:"large"},{default:i(()=>[a("Within a button "),e(d,{name:"relaxed"})]),_:1}),Hb,jb,e(T,{size:"massive"},{default:i(()=>[a("Within a label "),e(d,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link",description:"An emoji can be formatted as a link",code:t.linkCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const Ub=me(Fb,[["render",qb]]),Yb=E({name:"FlagDoc",components:{DocExample:Se},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),Jb={class:"intro"};function Gb(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-flag"),y=_("doc-example");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Jb,[e(p,{as:"h1"},{default:i(()=>[a("Flag "),e(f,null,{default:i(()=>[a(" A flag is used to represent a political state ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(y,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:t.flagCode},{default:i(()=>[C("div",null,[e(d,{name:"ae"}),e(d,{name:"france"}),e(d,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}const Wb=me(Yb,[["render",Gb]]),Kb="/vue-fomantic-ui/images/icons/school.png",Xb=E({name:"HeaderDoc",components:{DocExample:Se},setup(){return{pageHeaderCode:`<div>
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
</sui-segment>`}}}),Qb={class:"intro"},Zb=C("span",null,"$10.99",-1);function ev(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-header-content"),S=_("sui-image");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Qb,[e(p,{as:"h1"},{default:i(()=>[a("Header "),e(f,null,{default:i(()=>[a(" A header provides a short summary of content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:t.pageHeaderCode},{default:i(()=>[C("div",null,[e(p,{as:"h1"},{default:i(()=>[a("First header")]),_:1}),e(p,{as:"h2"},{default:i(()=>[a("Second header")]),_:1}),e(p,{as:"h3"},{default:i(()=>[a("Third header")]),_:1}),e(p,{as:"h4"},{default:i(()=>[a("Fourth header")]),_:1}),e(p,{as:"h5"},{default:i(()=>[a("Fifth header")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:t.contentHeaderCode},{default:i(()=>[C("div",null,[e(p,{size:"huge"},{default:i(()=>[a("Huge Header")]),_:1}),e(p,{size:"large"},{default:i(()=>[a("Large Header")]),_:1}),e(p,{size:"medium"},{default:i(()=>[a("Medium Header")]),_:1}),e(p,{size:"small"},{default:i(()=>[a("Small Header")]),_:1}),e(p,{size:"tiny"},{default:i(()=>[a("Tiny Header")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:t.iconHeadersCode},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(u,{name:"settings"}),e(y,null,{default:i(()=>[a(" AccountSettings "),e(f,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:t.subHeadersCode},{default:i(()=>[C("div",null,[e(p,{as:"h2",sub:""},{default:i(()=>[a("Price")]),_:1}),Zb])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(d,{title:"Image",description:"A header may contain an image",code:t.imageCode},{default:i(()=>[e(p,null,{default:i(()=>[e(S,{src:Kb}),e(y,null,{default:i(()=>[a("Learn More")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Icon",description:"A header may contain an icon",code:t.iconCode},{default:i(()=>[e(p,null,{default:i(()=>[e(u,{name:"plug"}),e(y,null,{default:i(()=>[a("Uptime Guarantee")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Subheader",description:"Headers may contain subheaders",code:t.subheaderCode},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" AccountSettings "),e(f,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"A header can show that it is inactive",code:t.disabledCode},{default:i(()=>[e(p,{disabled:""},{default:i(()=>[a("Disabled Header")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:t.dividingCode},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Dividing Header")]),_:1})]),_:1},8,["code"]),e(d,{title:"Block",description:"A header can be formatted to appear inside a content block",code:t.blockCode},{default:i(()=>[e(p,{as:"h3",block:""},{default:i(()=>[a("Block Header")]),_:1})]),_:1},8,["code"]),e(d,{title:"Attached",description:"A header can be attached to other content, like a segment",code:t.attachedCode},{default:i(()=>[C("div",null,[e(p,{as:"h2",attached:"top"},{default:i(()=>[a("Attached Header")]),_:1}),e(v,{attached:""},{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Floating",description:"A header can sit to the left or right of other content",code:t.floatingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(p,{as:"h3",floated:"right"},{default:i(()=>[a("Go Forward")]),_:1}),e(p,{as:"h3",floated:"left"},{default:i(()=>[a("Go Back")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[e(v,null,{default:i(()=>[e(p,{as:"h3",textAlign:"right"},{default:i(()=>[a("Right")]),_:1}),e(p,{as:"h3",textAlign:"left"},{default:i(()=>[a("Left")]),_:1}),e(p,{as:"h3",textAlign:"justified"},{default:i(()=>[a(" This should take up the full width even if only one line ")]),_:1}),e(p,{as:"h3",textAlign:"center"},{default:i(()=>[a("Center")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A header can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(p,{as:"h4",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(p,{as:"h4",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(p,{as:"h4",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(p,{as:"h4",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(p,{as:"h4",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(p,{as:"h4",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(p,{as:"h4",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(p,{as:"h4",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(p,{as:"h4",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(p,{as:"h4",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(p,{as:"h4",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(p,{as:"h4",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(p,{as:"h4",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(p,{as:"h4",color:"grey"},{default:i(()=>[a("Grey")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(p,{as:"h4",color:"red",inverted:""},{default:i(()=>[a("Red")]),_:1}),e(p,{as:"h4",color:"orange",inverted:""},{default:i(()=>[a("Orange")]),_:1}),e(p,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[a("Yellow")]),_:1}),e(p,{as:"h4",color:"olive",inverted:""},{default:i(()=>[a("Olive")]),_:1}),e(p,{as:"h4",color:"green",inverted:""},{default:i(()=>[a("Green")]),_:1}),e(p,{as:"h4",color:"teal",inverted:""},{default:i(()=>[a("Teal")]),_:1}),e(p,{as:"h4",color:"blue",inverted:""},{default:i(()=>[a("Blue")]),_:1}),e(p,{as:"h4",color:"purple",inverted:""},{default:i(()=>[a("Purple")]),_:1}),e(p,{as:"h4",color:"violet",inverted:""},{default:i(()=>[a("Violet")]),_:1}),e(p,{as:"h4",color:"pink",inverted:""},{default:i(()=>[a("Pink")]),_:1}),e(p,{as:"h4",color:"brown",inverted:""},{default:i(()=>[a("Brown")]),_:1}),e(p,{as:"h4",color:"grey",inverted:""},{default:i(()=>[a("Grey")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const tv=me(Xb,[["render",ev]]),iv=E({name:"IconDoc",components:{DocExample:Se},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
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
</sui-icon-group>`}}}),lv={class:"intro"},av=C("br",null,null,-1),nv=C("br",null,null,-1),sv=C("br",null,null,-1),ov=C("br",null,null,-1),uv=C("br",null,null,-1),rv=C("br",null,null,-1);function dv(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-icon-group");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",lv,[e(p,{as:"h1"},{default:i(()=>[a("Icon "),e(f,null,{default:i(()=>[a(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"An icon can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(u,{name:"users",disabled:""})]),_:1},8,["code"]),e(d,{title:"Loading",description:"An icon can be used as a simple loader",code:t.loadingCode},{default:i(()=>[C("div",null,[e(u,{name:"spinner",loading:""}),e(u,{name:"notched circle",loading:""}),e(u,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:t.fittedCode},{default:i(()=>[C("div",null,[a(" This icon "),e(u,{name:"help",fitted:""}),a(" is fitted. "),av,a(" This icon "),e(u,{name:"help"}),a(" is not. ")])]),_:1},8,["code"]),e(d,{title:"Size",description:"An icon can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{name:"home",size:"mini"}),e(u,{name:"home",size:"tiny"}),e(u,{name:"home",size:"small"}),nv,e(u,{name:"home"}),sv,e(u,{name:"home",size:"large"}),ov,e(u,{name:"home",size:"big"}),uv,e(u,{name:"home",size:"huge"}),rv,e(u,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(d,{title:"Link",description:"An icon can be formatted as a link",code:t.linkCode},{default:i(()=>[C("div",null,[e(u,{name:"close",link:""}),e(u,{name:"help",link:""})])]),_:1},8,["code"]),e(d,{title:"Flipped",description:"An icon can be flipped",code:t.flippedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",flipped:"horizontally"}),e(u,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(d,{title:"Rotated",description:"An icon can be rotated",code:t.rotatedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",rotated:"clockwise"}),e(u,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(d,{title:"Circular",description:"An icon can be formatted to appear circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(u,{name:"users",circular:""}),e(u,{name:"users",color:"teal",circular:""}),e(u,{name:"users",inverted:"",circular:""}),e(u,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(d,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:t.borderedCode},{default:i(()=>[C("div",null,[e(u,{name:"users",bordered:""}),e(u,{name:"users",bordered:"",color:"teal"}),e(u,{name:"users",inverted:"",bordered:"",color:"black"}),e(u,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(d,{title:"Colored",description:"An icon can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{name:"users",color:"primary"}),e(u,{name:"users",color:"secondary"}),e(u,{name:"users",color:"red"}),e(u,{name:"users",color:"orange"}),e(u,{name:"users",color:"yellow"}),e(u,{name:"users",color:"olive"}),e(u,{name:"users",color:"green"}),e(u,{name:"users",color:"teal"}),e(u,{name:"users",color:"blue"}),e(u,{name:"users",color:"violet"}),e(u,{name:"users",color:"purple"}),e(u,{name:"users",color:"pink"}),e(u,{name:"users",color:"brown"}),e(u,{name:"users",color:"grey"}),e(u,{name:"users",color:"black"})])]),_:1},8,["code"]),e(d,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(u,{name:"users",inverted:""}),e(u,{name:"users",inverted:"",color:"primary"}),e(u,{name:"users",inverted:"",color:"secondary"}),e(u,{name:"users",inverted:"",color:"red"}),e(u,{name:"users",inverted:"",color:"orange"}),e(u,{name:"users",inverted:"",color:"yellow"}),e(u,{name:"users",inverted:"",color:"olive"}),e(u,{name:"users",inverted:"",color:"green"}),e(u,{name:"users",inverted:"",color:"teal"}),e(u,{name:"users",inverted:"",color:"blue"}),e(u,{name:"users",inverted:"",color:"violet"}),e(u,{name:"users",inverted:"",color:"purple"}),e(u,{name:"users",inverted:"",color:"pink"}),e(u,{name:"users",inverted:"",color:"brown"}),e(u,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(d,{title:"Icons",description:"Several icons can be used together as a group",code:t.iconsCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"circle outline",size:"big"}),e(u,{name:"user"})]),_:1})]),_:1},8,["code"]),e(d,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:t.cornerIconCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"puzzle"}),e(u,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const cv=me(iv,[["render",dv]]),K="/vue-fomantic-ui/images/wireframe/image.png",sa="/vue-fomantic-ui/images/wireframe/image-text.png",fl="/vue-fomantic-ui/images/wireframe/white-image.png",ht="/vue-fomantic-ui/images/wireframe/square-image.png",mv=E({name:"ImageDoc",components:{DocExample:Se},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),pv={class:"intro"},fv=C("span",null,"Username",-1),gv=C("span",null,"Top Aligned",-1),hv=C("span",null,"Middle Aligned",-1),_v=C("span",null,"Bottom Aligned",-1),bv=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),vv=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),yv=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),Cv=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),wv=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),Sv=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function Av(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("doc-example"),S=_("sui-image-group");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",pv,[e(p,{as:"h1"},{default:i(()=>[a("Image "),e(f,null,{default:i(()=>[a(" An image is a graphic representation of something ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Image",description:"An image",code:t.imageCode},{default:i(()=>[e(d,{src:K,size:"small"})]),_:1},8,["code"]),e(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:t.imageLinkCode},{default:i(()=>[e(d,{as:"a",size:"medium",src:sa,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Hidden",description:"An image can be hidden",code:t.hiddenCode},{default:i(()=>[e(d,{hidden:"",src:K,size:"small"})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:t.disabledCode},{default:i(()=>[e(d,{disabled:"",src:K,size:"small"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:t.avatarCode},{default:i(()=>[C("div",null,[e(d,{avatar:"",src:K}),fv])]),_:1},8,["code"]),e(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:t.borderedCode},{default:i(()=>[e(d,{bordered:"",size:"medium",src:fl})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An image can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(d,{fluid:"",src:K})]),_:1},8,["code"]),e(y,{title:"Rounded",description:"An image may appear rounded",code:t.roundedCode},{default:i(()=>[e(d,{rounded:"",size:"medium",src:K})]),_:1},8,["code"]),e(y,{title:"Circular",description:"An image may appear circular",code:t.circularCode},{default:i(()=>[e(d,{circular:"",size:"medium",src:ht})]),_:1},8,["code"]),e(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:t.verticallyAlignedCode},{default:i(()=>[C("div",null,[e(d,{verticalAlign:"top",size:"tiny",src:ht}),gv,e(o),e(d,{verticalAlign:"middle",size:"tiny",src:ht}),hv,e(o),e(d,{verticalAlign:"bottom",size:"tiny",src:ht}),_v])]),_:1},8,["code"]),e(y,{title:"Centered",description:"An image can appear centered in a content block",code:t.centeredCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{centered:"",size:"medium",src:K}),bv,vv,e(d,{centered:"",size:"small",src:sa}),yv]),_:1})]),_:1},8,["code"]),e(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:t.spacedCode},{default:i(()=>[e(v,null,{default:i(()=>[C("p",null,[a("Te eum doming eirmod, nominati pertinacia "),e(d,{spaced:"",size:"mini",src:K}),a(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),e(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{floated:"left",size:"small",src:sa}),Cv,e(d,{floated:"right",size:"small",src:sa}),wv,Sv]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"An image may appear at different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini",src:K}),e(o,{hidden:""}),e(d,{size:"tiny",src:K}),e(o,{hidden:""}),e(d,{size:"medium",src:K}),e(o,{hidden:""}),e(d,{size:"large",src:K})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:t.sizeGroupCode},{default:i(()=>[e(S,{size:"tiny"},{default:i(()=>[e(d,{src:K}),e(d,{src:K}),e(d,{src:K}),e(d,{src:K})]),_:1})]),_:1},8,["code"])]),_:1})])}const kv=me(mv,[["render",Av]]),Tv=E({name:"InputDoc",components:{DocExample:Se},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),$v={class:"intro"};function xv(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-input"),y=_("doc-example");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",$v,[e(p,{as:"h1"},{default:i(()=>[a("Input "),e(f,null,{default:i(()=>[a(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Input",description:"A standard input",code:t.inputCode},{default:i(()=>[e(d,{placeholder:"Search..."})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:t.focusCode},{default:i(()=>[e(d,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:t.loadingCode},{default:i(()=>[C("div",null,[e(d,{loading:"",placeholder:"Search..."}),e(o,{hidden:""}),e(d,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An input field can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(d,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Error",description:"An input field can show the data contains errors",code:t.errorCode},{default:i(()=>[e(d,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Icon",description:"An input can be formatted with an icon",code:t.iconCode},{default:i(()=>[e(d,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"An input can be formatted with a label",code:t.labeledCode},{default:i(()=>[C("div",null,[e(d,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:t.actionCode},{default:i(()=>[e(d,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Transparent",description:"A transparent input has no background",code:t.transparentCode},{default:i(()=>[e(d,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:"",placeholder:"Search..."}),e(o,{inverted:""}),e(d,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(o,{inverted:""}),e(d,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An input can take the size of its container",code:t.fluidCode},{default:i(()=>[e(d,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Size",description:"An input can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini",icon:"search",placeholder:"Search mini"}),e(o,{hidden:""}),e(d,{size:"small",icon:"search",placeholder:"Search small"}),e(o,{hidden:""}),e(d,{size:"large",icon:"search",placeholder:"Search large"}),e(o,{hidden:""}),e(d,{size:"big",icon:"search",placeholder:"Search big"}),e(o,{hidden:""}),e(d,{size:"huge",icon:"search",placeholder:"Search huge"}),e(o,{hidden:""}),e(d,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const Bv=me(Tv,[["render",xv]]),ls="/vue-fomantic-ui/images/avatar/small/joe.jpg",Mt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",Fl="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Ev=E({name:"LabelDoc",components:{DocExample:Se},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),Rv={class:"intro"},Pv=C("img",{src:ls},null,-1),zv=C("img",{src:Mt},null,-1),Mv=C("img",{src:Fl},null,-1),Dv=C("input",{type:"text",placeholder:"First name"},null,-1),Iv=C("input",{type:"text",placeholder:"Last name"},null,-1),Fv=C("input",{type:"text",placeholder:"Username"},null,-1),Vv=C("input",{type:"password",placeholder:"Password"},null,-1),Nv=C("span",null,"Account Details",-1),Lv=C("span",null,"User Reviews",-1),Ov=C("img",{src:Fl},null,-1),Hv=C("img",{src:Mt},null,-1);function jv(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-label"),y=_("doc-example"),S=_("sui-form-field"),T=_("sui-form"),b=_("sui-image"),w=_("sui-grid-column"),k=_("sui-grid"),$=_("sui-grid-row"),B=_("sui-list-item"),z=_("sui-list"),M=_("sui-label-detail"),P=_("sui-label-group");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Rv,[e(p,{as:"h1"},{default:i(()=>[a("Label "),e(f,null,{default:i(()=>[a(" A label displays content classification ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Label",description:"A label",code:t.labelCode},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:t.imageCode},{default:i(()=>[C("div",null,[e(d,{as:"a",image:""},{default:i(()=>[Pv,a(" Joe ")]),_:1}),e(d,{as:"a",image:""},{default:i(()=>[zv,a(" Elliot ")]),_:1}),e(d,{as:"a",image:""},{default:i(()=>[Mv,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Pointing",description:"A label can point to content next to it",code:t.pointingCode},{default:i(()=>[e(T,{fluid:""},{default:i(()=>[e(S,null,{default:i(()=>[Dv,e(d,{pointing:""},{default:i(()=>[a("Please enter a value")]),_:1})]),_:1}),e(o),e(S,null,{default:i(()=>[e(d,{pointing:"below"},{default:i(()=>[a("Please enter a value")]),_:1}),Iv]),_:1}),e(o),e(S,{inline:""},{default:i(()=>[Fv,e(d,{pointing:"left"},{default:i(()=>[a("That name is taken!")]),_:1})]),_:1}),e(o),e(S,{inline:""},{default:i(()=>[e(d,{pointing:"right"},{default:i(()=>[a("Your password must be 6 characters or more")]),_:1}),Vv]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:t.cornerCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(b,{fluid:"",src:K,label:{corner:"left",icon:"heart"}})]),_:1}),e(w,null,{default:i(()=>[e(b,{fluid:"",src:K,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag",description:"A label can appear as a tag",code:t.tagCode},{default:i(()=>[C("div",null,[e(d,{tag:""},{default:i(()=>[a("New")]),_:1}),e(d,{tag:"",color:"red"},{default:i(()=>[a("Upcoming")]),_:1}),e(d,{tag:"",color:"teal"},{default:i(()=>[a("Featured")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:t.ribbonCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(d,{as:"a",ribbon:"",color:"red"},{default:i(()=>[a("Overview")]),_:1}),Nv,e(b,{src:_e}),e(d,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[a("Community")]),_:1}),Lv,e(b,{src:_e})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(d,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[a("Specs")]),_:1}),e(b,{src:_e}),e(d,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[a("Reviews")]),_:1}),e(b,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Attached",description:"A label can attach to a content segment",code:t.attachedCode},{default:i(()=>[e(k,{columns:3},{default:i(()=>[e($,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top"},{default:i(()=>[a("HTML")]),_:1}),e(b,{src:_e})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom"},{default:i(()=>[a("CSS")]),_:1}),e(b,{src:_e})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top right"},{default:i(()=>[a("Code")]),_:1}),e(b,{src:_e})]),_:1})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top left"},{default:i(()=>[a("View")]),_:1}),e(b,{src:_e})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom left"},{default:i(()=>[a("User View")]),_:1}),e(b,{src:_e})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom right"},{default:i(()=>[a("Admin View")]),_:1}),e(b,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:t.horizontalCode},{default:i(()=>[e(z,{divided:"",selection:""},{default:i(()=>[e(B,null,{default:i(()=>[e(d,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Kumquats ")]),_:1}),e(B,null,{default:i(()=>[e(d,{color:"purple",horizontal:""},{default:i(()=>[a("Candy")]),_:1}),a(" Ice Cream ")]),_:1}),e(B,null,{default:i(()=>[e(d,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Orange ")]),_:1}),e(B,null,{default:i(()=>[e(d,{horizontal:""},{default:i(()=>[a("Dog")]),_:1}),a(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Floating",description:"A label can float above or below another element",code:t.floatingCode},{default:i(()=>[e(m,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{name:"mail"}),a(" Messages "),e(d,{floating:"",color:"red"},{default:i(()=>[a("22")]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{name:"users"}),a(" Friends "),e(d,{floating:"",color:"teal"},{default:i(()=>[a("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Detail",description:"A label can contain a detail",code:t.detailCode},{default:i(()=>[e(d,null,{default:i(()=>[a(" Dogs "),e(M,null,{default:i(()=>[a("214")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A label can include an icon",code:t.iconCode},{default:i(()=>[C("div",null,[e(d,{as:"a"},{default:i(()=>[e(u,{name:"mail"}),a(" Mail ")]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Tag "),e(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can include an image",code:t.imageIncludeCode},{default:i(()=>[C("div",null,[e(d,{as:"a"},{default:i(()=>[e(b,{avatar:"",spaced:"right",src:Mt}),a(" Elliot ")]),_:1}),e(d,{as:"a"},{default:i(()=>[Ov,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Link",description:"A label can be a link or contain an item that links",code:t.linkCode},{default:i(()=>[e(d,{as:"a",link:""},{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Circular",description:"A label can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(d,{as:"a",circular:"",color:"red"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"orange"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"olive"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"green"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"teal"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"blue"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"violet"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"purple"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"pink"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"brown"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"grey"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"black"},{default:i(()=>[a("2")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A label can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(d,{basic:"",as:"a"},{default:i(()=>[a("Basic")]),_:1}),e(d,{basic:"",as:"a",pointing:""},{default:i(()=>[a("Pointing")]),_:1}),e(d,{basic:"",as:"a",image:""},{default:i(()=>[Hv,a(" Elliot ")]),_:1}),e(d,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[a("Red Pointing")]),_:1}),e(d,{basic:"",as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A label can have different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(d,{as:"a",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(d,{as:"a",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(d,{as:"a",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{as:"a",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{as:"a",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{as:"a",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{as:"a",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{as:"a",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{as:"a",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{as:"a",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{as:"a",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{as:"a",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{as:"a",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{as:"a",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic Tag",description:"",code:t.basicTagCode},{default:i(()=>[C("div",null,[e(d,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Size",description:"A label can be small or large",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(d,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(d,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(d,null,{default:i(()=>[a("Medium")]),_:1}),e(d,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(d,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(d,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(d,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Group Size",description:"Labels can share sizes together",code:t.groupSizeCode},{default:i(()=>[e(P,{size:"huge"},{default:i(()=>[e(d,null,{default:i(()=>[a("Fun")]),_:1}),e(d,null,{default:i(()=>[a("Happy")]),_:1}),e(d,null,{default:i(()=>[a("Smart")]),_:1}),e(d,null,{default:i(()=>[a("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored Group",description:"Labels can share colors together",code:t.coloredGroupCode},{default:i(()=>[e(P,{color:"blue"},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Group",description:"Labels can share their style together",code:t.basicGroupCode},{default:i(()=>[e(P,{basic:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag Group",description:"Labels can share tag formatting",code:t.tagGroupCode},{default:i(()=>[e(P,{tag:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("$10.00")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$19.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$24.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$30.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"CircularGroup",description:"Labels can share shapes",code:t.circularGroupCode},{default:i(()=>[e(P,{circular:""},{default:i(()=>[e(d,null,{default:i(()=>[a("11")]),_:1}),e(d,null,{default:i(()=>[a("22")]),_:1}),e(d,null,{default:i(()=>[a("33")]),_:1}),e(d,null,{default:i(()=>[a("44")]),_:1}),e(d,null,{default:i(()=>[a("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const qv=me(Ev,[["render",jv]]),Uv="/vue-fomantic-ui/images/avatar/small/rachel.png",Yv="/vue-fomantic-ui/images/avatar/small/lindsay.png",Jv="/vue-fomantic-ui/images/avatar/small/matthew.png",nn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Gv="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Wv="/vue-fomantic-ui/images/avatar/small/tom.jpg",oa="/vue-fomantic-ui/images/avatar/small/christian.jpg",sn="/vue-fomantic-ui/images/avatar/small/matt.jpg",gl="/vue-fomantic-ui/images/avatar/small/helen.jpg",ci="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Kv=E({name:"ListDoc",components:{DocExample:Se},setup(){return{listCode:`<sui-list>
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
</div>`}}}),Xv={class:"intro"},Qv=C("div",null,"Benefits",-1),Zv={class:"list"},e1=C("a",null,"Languages",-1),t1=C("a",null,[C("b",null,"Arrested Development")],-1),i1=C("a",null,[C("b",null,"Bob's Burgers")],-1),l1=C("a",null,[C("b",null,"The Godfather Part 2")],-1),a1=C("a",null,[C("b",null,"Twin Peaks")],-1),n1=C("a",null,[C("b",null,"Arrested Development")],-1),s1=C("a",null,[C("b",null,"Bob's Burgers")],-1),o1=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function u1(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-list-item"),y=_("sui-list"),S=_("doc-example"),T=_("sui-list-list"),b=_("sui-list-header"),w=_("sui-list-description"),k=_("sui-list-content"),$=_("sui-image");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Xv,[e(p,{as:"h1"},{default:i(()=>[a("List "),e(f,null,{default:i(()=>[a(" A list is used to group related content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"List",description:"A list groups related content",code:t.listCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Apples")]),_:1}),e(d,null,{default:i(()=>[a("Pears")]),_:1}),e(d,null,{default:i(()=>[a("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Bulleted",description:"A list can mark items with a bullet",code:t.bulletedCode},{default:i(()=>[e(y,{bulleted:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Gaining Access")]),_:1}),e(d,null,{default:i(()=>[a("Inviting Friends")]),_:1}),e(d,null,{default:i(()=>[Qv,C("div",Zv,[e(d,{as:"a"},{default:i(()=>[a("Link to somewhere")]),_:1}),e(d,null,{default:i(()=>[a("Rebates")]),_:1}),e(d,null,{default:i(()=>[a("Discounts")]),_:1})])]),_:1}),e(d,null,{default:i(()=>[a("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Ordered",description:"A list can be ordered numerically",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("Getting Started")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Introduction")]),_:1}),e(d,null,{default:i(()=>[e1,e(T,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("HTML")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Javascript")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("CSS")]),_:1})]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Review")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Link",description:"A list can be specially formatted for navigation links",code:t.linkCode},{default:i(()=>[e(y,{link:""},{default:i(()=>[e(d,{active:""},{default:i(()=>[a("Home")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("About")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Jobs")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Team")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"Item",description:"A list item can contain a set of items",code:t.itemCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("1")]),_:1}),e(d,null,{default:i(()=>[a("2")]),_:1}),e(d,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Icon",description:"A list item can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[e(u,{name:"help"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Floated Icon")]),_:1}),e(w,null,{default:i(()=>[a(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[e(u,{name:"right triangle"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Icon Alignment")]),_:1}),e(w,null,{default:i(()=>[a(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"help"}),a(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Image",description:"A list can contain an image",code:t.imageContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:Uv}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Rachel")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),t1,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Yv}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Lindsay")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),i1,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Jv}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matthew")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),l1,a(" yesterday. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:nn}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),a1,a(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Gv}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(w,null,{default:i(()=>[a(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Link",description:"A list can contain links",code:t.linkContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("What is a FAQ?")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Who is our user?")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"header",description:"A list item can contain a header",code:t.headerContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("New York City")]),_:1}),a(" A lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Chicago")]),_:1}),a(" Also quite a lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Los Angeles")]),_:1}),a(" Sometimes can be a lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("San Francisco")]),_:1}),a(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Description",description:"A list item can contain a description",code:t.descriptionContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Krolewskie Jadlo")]),_:1}),e(w,null,{default:i(()=>[a(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Xian Famous Foods")]),_:1}),e(w,null,{default:i(()=>[a(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Sapporo Haru")]),_:1}),e(w,null,{default:i(()=>[a(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Enid's")]),_:1}),e(w,null,{default:i(()=>[a(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:t.horizontalVarCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:Wv}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Tom")]),_:1}),a(" Top Contributor ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:oa}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian Rocha")]),_:1}),a(" Admin ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:sn}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matt")]),_:1}),a(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:t.invertedVarCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Selection",description:"A selection list formats list items as possible choices",code:t.selectionVarCode},{default:i(()=>[e(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:gl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:oa}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:t.animatedVarCode},{default:i(()=>[e(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:gl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:oa}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:t.relaxedVarCode},{default:i(()=>[e(y,{relaxed:""},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),n1,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Fl}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),s1,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Mt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),o1,a(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Divided",description:"A list can show divisions between content",code:t.dividedVarCode},{default:i(()=>[e(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Fl}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:Mt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Celled",description:"A list can divide its items into cells",code:t.celledVarCode},{default:i(()=>[e(y,{celled:""},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:gl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Size",description:"A list can vary in size",code:t.sizeCode},{default:i(()=>[e(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:gl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:oa}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ci}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content Variations")]),_:1}),e(S,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:t.verticalAlignedCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(d,null,{default:i(()=>[e($,{avatar:"",src:ht}),e(k,{verticalAlign:"top"},{default:i(()=>[a(" Top Aligned ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ht}),e(k,{verticalAlign:"middle"},{default:i(()=>[a(" Middle ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{avatar:"",src:ht}),e(k,{verticalAlign:"bottom"},{default:i(()=>[a(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:t.floatedCode},{default:i(()=>[C("div",null,[e(y,{floated:"right",horizontal:""},{default:i(()=>[e(d,{disabled:""},{default:i(()=>[a("© GitHub, Inc.")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Terms")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Privacy")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Contact")]),_:1})]),_:1}),e(y,{horizontal:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("About Us")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const r1=me(Kv,[["render",u1]]),d1=E({name:"LoaderDoc",components:{DocExample:Se},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),c1={class:"intro"};function m1(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-loader"),y=_("sui-dimmer"),S=_("sui-image"),T=_("doc-example");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",c1,[e(p,{as:"h1"},{default:i(()=>[a("Loader "),e(f,null,{default:i(()=>[a(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(T,{title:"Loader",description:"A loader",code:t.loaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d)]),_:1}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"]),e(T,{title:"Text Loader",description:"A loader can contain text",code:t.textLoaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(T,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:t.indeterminateCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,{indeterminate:""},{default:i(()=>[a("Preparing Files")]),_:1})]),_:1}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"]),e(T,{title:"Active",description:"A loader can be active or visible",code:t.activeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{active:""}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"]),e(T,{title:"Diasbled",description:"A loader can be disabled or hidden",code:t.disabledCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{disabled:""}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(T,{title:"Inline",description:"Loaders can appear inline with content",code:t.inlineCode},{default:i(()=>[e(d,{inline:"",active:""})]),_:1},8,["code"]),e(T,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:t.inlineCenterCode},{default:i(()=>[e(d,{inline:"centered",active:""})]),_:1},8,["code"]),e(T,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:t.speedCode},{default:i(()=>[C("div",null,[e(d,{slow:"",active:"",inline:""}),e(d,{active:"",inline:""}),e(d,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e(T,{title:"Colors",description:"Loaders can be different colors",code:t.colorsCode},{default:i(()=>[C("div",null,[e(d,{color:"primary",inline:"",active:""}),e(d,{color:"secondary",inline:"",active:""}),e(d,{color:"red",inline:"",active:""}),e(d,{color:"orange",inline:"",active:""}),e(d,{color:"yellow",inline:"",active:""}),e(d,{color:"olive",inline:"",active:""}),e(d,{color:"green",inline:"",active:""}),e(d,{color:"teal",inline:"",active:""}),e(d,{color:"blue",inline:"",active:""}),e(d,{color:"violet",inline:"",active:""}),e(d,{color:"purple",inline:"",active:""}),e(d,{color:"pink",inline:"",active:""}),e(d,{color:"brown",inline:"",active:""}),e(d,{color:"grey",inline:"",active:""}),e(d,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e(T,{title:"Size",description:"Loaders can have different sizes",code:t.sizeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,{size:"mini"},{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"]),e(T,{title:"Inverted",description:"Loaders can have their colors inverted",code:t.invertedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:"",inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(S,{src:Ae})]),_:1})]),_:1},8,["code"])]),_:1})])}const p1=me(d1,[["render",m1]]),f1=E({name:"RailDoc",components:{DocExample:Se},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),g1={class:"intro"};function h1(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("sui-rail"),S=_("sui-grid-column"),T=_("sui-grid"),b=_("doc-example");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",g1,[e(p,{as:"h1"},{default:i(()=>[a("Rail "),e(f,null,{default:i(()=>[a(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:t.railCode},{default:i(()=>[e(T,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ae}),e(y,{position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:t.internalCode},{default:i(()=>[e(v,{textAlign:"center"},{default:i(()=>[e(d,{src:Ae}),e(y,{internal:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a("Left Rail Content")]),_:1})]),_:1}),e(y,{internal:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:t.dividingCode},{default:i(()=>[e(T,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ae}),e(y,{dividing:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{dividing:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:t.attachedCode},{default:i(()=>[e(T,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ae}),e(y,{attached:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{attached:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:t.closeCode},{default:i(()=>[e(T,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ae}),e(y,{close:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{close:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Size",description:"A rail can have different sizes",code:t.sizeCode},{default:i(()=>[e(T,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ae}),e(y,{size:"small",position:"left"},{default:i(()=>[a(" Left Small Rail ")]),_:1}),e(y,{size:"large",position:"right"},{default:i(()=>[a(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _1=me(f1,[["render",h1]]),b1="/vue-fomantic-ui/images/avatar/large/ade.jpg",pu="/vue-fomantic-ui/images/avatar/large/chris.jpg",as="/vue-fomantic-ui/images/avatar/large/stevie.jpg",fu="/vue-fomantic-ui/images/avatar/large/nan.jpg",v1=E({name:"RevealDoc",components:{DocExample:Se},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),y1={class:"intro"};function C1(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("sui-reveal-content"),S=_("sui-reveal"),T=_("doc-example");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",y1,[e(p,{as:"h1"},{default:i(()=>[a("Reveal "),e(f,null,{default:i(()=>[a(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(T,{title:"Fade",description:"An element can disappear to reveal content below",code:t.fadeCode},{default:i(()=>[e(S,{animated:"fade"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ht})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:b1})]),_:1})]),_:1})]),_:1},8,["code"]),e(T,{title:"Move",description:"An element can move in a direction to reveal content",code:t.moveCode},{default:i(()=>[e(S,{animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ht})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:pu})]),_:1})]),_:1})]),_:1},8,["code"]),e(T,{title:"Rotate",description:"An element can rotate to reveal content below",code:t.rotateCode},{default:i(()=>[e(S,{animated:"rotate"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{circular:"",size:"small",src:ht})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{circular:"",size:"small",src:as})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(T,{title:"Active",description:"An active reveal displays its hidden content",code:t.activeCode},{default:i(()=>[e(S,{active:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ht})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:fu})]),_:1})]),_:1})]),_:1},8,["code"]),e(T,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:t.disabledCode},{default:i(()=>[e(S,{disabled:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ht})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:fu})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(T,{title:"Instant",description:"An element can show its content without delay",code:t.instantCode},{default:i(()=>[e(S,{instant:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ht})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:pu})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const w1=me(v1,[["render",C1]]),S1=E({name:"SegmentDoc",components:{DocExample:Se},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),A1={class:"intro"},k1=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),T1=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),$1=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),x1=C("p",null,"Top",-1),B1=C("p",null,"Middle",-1),E1=C("p",null,"Middle",-1),R1=C("p",null,"Middle",-1),P1=C("p",null,"Bottom",-1),z1=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),M1=C("p",null,"This segment is on top",-1),D1=C("p",null,"This segment is attached on both sides",-1),I1=C("p",null,"This segment is on bottom",-1),F1=C("p",null,"Fitted Segment",-1),V1=C("p",null,"Horizontally fitted segment",-1),N1=C("p",null,"Vertically fitted segment",-1),L1=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),O1=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),H1=C("p",null,"If you notice me you must be looking very hard.",-1),j1=C("p",null,"This segment will appear to the right",-1),q1=C("p",null,"This segment will appear to the left",-1),U1=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Y1(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-button"),S=_("sui-segment-group");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",A1,[e(p,{as:"h1"},{default:i(()=>[a("Segment "),e(f,null,{default:i(()=>[a(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Segment",description:"A segment of content",code:t.segmentCode},{default:i(()=>[e(v,null,{default:i(()=>[a("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),e(d,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:t.placeholderCode},{default:i(()=>[e(v,{placeholder:""},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(u,{name:"file outline"}),a(" No documents are listed for this customer. ")]),_:1}),e(y,{color:"primary"},{default:i(()=>[a("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Raised",description:"A segment may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(v,{raised:""},{default:i(()=>[k1]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:t.stackedCode},{default:i(()=>[e(v,{stacked:""},{default:i(()=>[T1]),_:1})]),_:1},8,["code"]),e(d,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:t.piledCode},{default:i(()=>[e(v,{piled:""},{default:i(()=>[$1]),_:1})]),_:1},8,["code"]),e(d,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:t.verticalCode},{default:i(()=>[C("div",null,[e(v,{vertical:""},{default:i(()=>[a(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(d,{title:"Segments",description:"A group of segments can be formatted to appear together",code:t.segmentsCode},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[x1]),_:1}),e(v,null,{default:i(()=>[B1]),_:1}),e(v,null,{default:i(()=>[E1]),_:1}),e(v,null,{default:i(()=>[R1]),_:1}),e(v,null,{default:i(()=>[P1]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:t.nestedCode},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Nested Top")]),_:1}),e(v,null,{default:i(()=>[a("Nested Middle")]),_:1}),e(v,null,{default:i(()=>[a("Nested Bottom")]),_:1})]),_:1}),e(S,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:t.horizontalCode},{default:i(()=>[e(S,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Left")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Right")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Raised Segments",description:"A group of segments can be raised",code:t.raisedSegmentsCode},{default:i(()=>[e(S,{raised:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacked Segments",description:"A group of segments can be stacked",code:t.stackedSegmentsCode},{default:i(()=>[e(S,{stacked:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Piled Segments",description:"A group of segments can be piled",code:t.piledSegmentsCode},{default:i(()=>[e(S,{piled:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"A segment may show its content is disabled",code:t.disabledCode},{default:i(()=>[e(v,{disabled:""},{default:i(()=>[a("Disabled content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Loading",description:"A segment may show its content is being loaded",code:t.loadingCode},{default:i(()=>[e(v,{loading:""},{default:i(()=>[a("Now Loading...")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[z1]),_:1})]),_:1},8,["code"]),e(d,{title:"Attached",description:"A segment can be attached to other content on a page",code:t.attachedCode},{default:i(()=>[C("div",null,[e(v,{attached:"top"},{default:i(()=>[M1]),_:1}),e(v,{attached:""},{default:i(()=>[D1]),_:1}),e(v,{attached:"bottom"},{default:i(()=>[I1]),_:1})])]),_:1},8,["code"]),e(d,{title:"Padded",description:"A segment can increase its padding",code:t.paddedCode},{default:i(()=>[e(v,{padded:""},{default:i(()=>[a("Padded content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[C("div",null,[e(v,{fitted:""},{default:i(()=>[F1]),_:1}),e(v,{fitted:"horizontally"},{default:i(()=>[V1]),_:1}),e(v,{fitted:"vertically"},{default:i(()=>[N1]),_:1})])]),_:1},8,["code"]),e(d,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:t.compactCode},{default:i(()=>[e(v,{compact:""},{default:i(()=>[a("Compact content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A segment can be colored",code:t.coloredCode},{default:i(()=>[C("div",null,[e(v,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(v,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(v,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(v,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(v,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(v,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(v,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(v,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(v,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(v,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(v,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(v,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(v,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:t.emphasisCode},{default:i(()=>[C("div",null,[e(v,null,{default:i(()=>[L1]),_:1}),e(v,{secondary:""},{default:i(()=>[O1]),_:1}),e(v,{tertiary:""},{default:i(()=>[H1]),_:1})])]),_:1},8,["code"]),e(d,{title:"Circular",description:"A segment can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(f,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1}),e(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(f,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Clearing",description:"A segment can clear floated content",code:t.clearingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(y,{floated:"right"},{default:i(()=>[a("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Floated",description:"A segment can appear to the left or right of other content",code:t.floatedCode},{default:i(()=>[C("div",null,[e(v,{floated:"right"},{default:i(()=>[j1]),_:1}),e(v,{floated:"left"},{default:i(()=>[q1]),_:1})])]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[C("div",null,[e(v,{textAlign:"right"},{default:i(()=>[a(" Right ")]),_:1}),e(v,{textAlign:"left"},{default:i(()=>[a(" Left ")]),_:1}),e(v,{textAlign:"center"},{default:i(()=>[a(" Center ")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Basic",description:"A basic segment has no special formatting",code:t.basicCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[U1]),_:1})]),_:1},8,["code"])]),_:1})])}const J1=me(S1,[["render",Y1]]),G1=E({name:"StepDoc",components:{DocExample:Se},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),W1={class:"intro"},K1=C("p",null,"The steps take up the entire column width",-1),X1=C("p",null,"Main content",-1);function Q1(t,l,n,s,r,c){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),m=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-step"),y=_("sui-step-group"),S=_("doc-example"),T=_("sui-step-title"),b=_("sui-step-description"),w=_("sui-step-content"),k=_("sui-grid-column"),$=_("sui-grid");return L(),ne("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",W1,[e(p,{as:"h1"},{default:i(()=>[a("Step "),e(f,null,{default:i(()=>[a(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),e(o,{hidden:""}),e(m,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Step",description:"A single step",code:t.stepCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(S,{title:"Steps",description:"A set of steps",code:t.stepsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Vertical",description:"A step can be displayed stacked vertically",code:t.verticalCode},{default:i(()=>[e(y,{vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"Description",description:"A step can contain a description",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Icon",description:"A step can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Link",description:"A step can link",code:t.linkCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{link:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(S,{title:"Active",description:"A step can be highlighted as active",code:t.activeCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Completed",description:"A step can show that a user has completed it",code:t.completedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Disabled",description:"A step can show that it cannot be selected",code:t.disabledCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{disabled:""},{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:t.stackableCode},{default:i(()=>[e(y,{stackable:"tablet"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:t.unstackableCode},{default:i(()=>[e(y,{unstackable:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Fluid",description:"A fluid step takes up the width of its container",code:t.fluidCode},{default:i(()=>[e($,{columns:2},{default:i(()=>[e(k,null,{default:i(()=>[e(y,{fluid:"",vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:i(()=>[K1]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Attached",description:"Steps can be attached to other elements",code:t.attachedCode},{default:i(()=>[C("div",null,[e(y,{attached:"top"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[X1]),_:1}),e(y,{attached:"bottom"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(S,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:t.evenlyDividedCode},{default:i(()=>[e(y,{widths:2},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Size",description:"Steps can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"mini"},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"A step's color can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e(T,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Z1=me(G1,[["render",Q1]]),ey=E({name:"BreadcrumbDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function ty(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-breadcrumb-section"),u=_("sui-breadcrumb-divider"),g=_("sui-breadcrumb"),m=_("doc-example"),h=_("sui-segment"),v=_("sui-container");return L(),ne("div",null,[e(f,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(v,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(m,{title:"Breadcrumb",description:"A standard breadcrumb",code:t.breadcrumbCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{link:""},{default:i(()=>[a("Store")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{description:"You can do the same using shorthands",code:t.breadcrumbCode2},{default:i(()=>[e(g,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(m,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:t.dividerCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right arrow"}),e(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:t.sectionCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Link",description:"A section may be linkable or contain a link",code:t.linkCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(m,{title:"Active",description:"A section can be active",code:t.activeCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Product")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(m,{title:"Inverted",description:"A breadcrumb can be inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Size",description:"A breadcrumb can vary in size",code:t.sizeCode},{default:i(()=>[e(g,{size:"mini"},{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(o,null,{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iy=me(ey,[["render",ty]]),ly=E({name:"FormDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function ay(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-form-field"),u=_("sui-checkbox"),g=_("sui-button"),m=_("sui-form"),h=_("doc-example"),v=_("sui-form-group"),d=_("sui-container");return L(),ne("div",null,[e(f,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(d,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Form",description:"A form",code:t.formCode},{default:i(()=>[e(m,null,{default:i(()=>[e(o,{label:"First Name",placeholder:"First Name"}),e(o,{label:"Last Name",placeholder:"Last Name"}),e(o,null,{default:i(()=>[e(u,{label:"I agree to the Terms and Conditions"})]),_:1}),e(g,null,{default:i(()=>[a("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(h,{title:"Field",description:"A field is a form element containing a label and an input",code:t.fieldCode},{default:i(()=>[e(m,null,{default:i(()=>[e(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fields",description:"A set of fields can appear grouped together",code:t.fieldsCode},{default:i(()=>[e(m,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{label:"First name",placeholder:"First Name"}),e(o,{label:"Middle name",placeholder:"Middle Name"}),e(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ny=me(ly,[["render",ay]]),Ft="/vue-fomantic-ui/images/wireframe/media-paragraph.png",gu="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",sy=E({name:"GridDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),oy=C("br",null,null,-1);function uy(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-image"),u=_("sui-grid-column"),g=_("sui-grid"),m=_("doc-example"),h=_("sui-grid-row"),v=_("sui-segment"),d=_("sui-divider"),y=_("sui-menu-item"),S=_("sui-menu"),T=_("sui-container");return L(),ne("div",null,[e(f,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(m,{title:"Grid",description:"A basic grid",code:t.gridCode},{default:i(()=>[e(g,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.numbers,b=>(L(),ge(u,{key:b},{default:i(()=>[e(o,{src:K})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(m,{title:"Divided",description:"A grid can have dividers between its columns",code:t.dividedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:Ft})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:Ft})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:t.verticalDividedCode},{default:i(()=>[e(g,{divided:"vertically"},{default:i(()=>[e(h,{columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Celled",description:"A grid can have rows divided into cells",code:t.celledCode},{default:i(()=>[e(g,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:K})]),_:1}),e(u,{width:13},{default:i(()=>[e(o,{src:gu})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:K})]),_:1}),e(u,{width:10},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{width:3},{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:t.internallyCelledCode},{default:i(()=>[e(g,{celled:"internally"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:K})]),_:1}),e(u,{width:13},{default:i(()=>[e(o,{src:gu})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:K})]),_:1}),e(u,{width:10},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{width:3},{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:t.rowsCode},{default:i(()=>[e(g,{columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:t.columnsCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:8},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{width:8},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{width:8},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{width:8},{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:t.floatedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{floated:"left",width:5},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{floated:"right",width:5},{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:t.columnWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:4},{default:i(()=>[e(o,{src:K})]),_:1}),e(u,{width:9},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{width:3},{default:i(()=>[e(o,{src:Ft})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:t.columnCountCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1}),e(h,{columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Equal Width",description:"Equal Width",code:t.equalWidthCode},{default:i(()=>[e(g,{columns:"equal"},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,{width:8},{default:i(()=>[e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:t.stretchedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,{stretched:""},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1}),e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:t.paddedCode},{default:i(()=>[C("div",null,[e(d),e(g,{padded:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})])]),_:1},8,["code"]),e(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:t.relaxedCode},{default:i(()=>[e(g,{relaxed:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Colored",description:"A row or column can be colored",code:t.coloredCode},{default:i(()=>[e(g,{padded:"",columns:5},{default:i(()=>[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Centered",description:"A grid can have its columns centered",code:t.centeredCode},{default:i(()=>[e(g,{centered:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(h,{centered:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:t.textAlignCode},{default:i(()=>[e(g,{textAlign:"center",columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(S,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Cats")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(S,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Dogs")]),_:1}),e(y,null,{default:i(()=>[a("Poodle")]),_:1}),e(y,null,{default:i(()=>[a("Cockerspaniel")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(S,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:t.verticalAlignCode},{default:i(()=>[e(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K}),oy,e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Responsive Variations")]),_:1}),e(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:t.doublingCode},{default:i(()=>[e(g,{doubling:"",columns:5},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:t.stackableCode},{default:i(()=>[e(g,{stackable:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:t.reversedCode},{default:i(()=>[e(g,{reversed:"computer vertically"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 3")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 2")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:t.deviceVisibilityCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{only:"large screen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1})]),_:1}),e(h,{only:"widescreen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1})]),_:1}),e(h,{only:"mobile",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,{only:"computer"},{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,{only:"mobile"},{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet and Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1})]),_:1}),e(h,{only:"computer",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1})]),_:1}),e(h,{only:"tablet",columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:t.responsiveWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:_e})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ry=me(sy,[["render",uy]]),dy="/vue-fomantic-ui/images/logo.png",cy=E({name:"MenuDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),my=C("p",null,"Check out our new promotions",-1),py=C("p",null,"Check out our collection of coupons",-1),fy=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),gy=C("img",{src:dy},null,-1);function hy(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-menu-item"),u=_("sui-menu"),g=_("doc-example"),m=_("sui-input"),h=_("sui-menu-menu"),v=_("sui-label"),d=_("sui-button"),y=_("sui-dropdown-item"),S=_("sui-dropdown-menu"),T=_("sui-dropdown"),b=_("sui-icon"),w=_("sui-segment"),k=_("sui-container");return L(),ne("div",null,[e(f,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(k,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Menu",description:"A menu",code:t.menuCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Editorials")]),_:1}),e(o,null,{default:i(()=>[a("Reviews")]),_:1}),e(o,null,{default:i(()=>[a("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:t.secondaryMenuCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[e(m,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,null,{default:i(()=>[a("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[e(m,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:t.tabularCode},{default:i(()=>[e(u,{tabular:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Bio")]),_:1}),e(o,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",description:"A menu can be formatted for text content",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(o,{header:""},{default:i(()=>[a("Sort By")]),_:1}),e(o,{active:""},{default:i(()=>[a("Closest")]),_:1}),e(o,null,{default:i(()=>[a("Most Comments")]),_:1}),e(o,null,{default:i(()=>[a("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:t.verticalMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,{active:"",color:"teal"},{default:i(()=>[a(" Inbox "),e(v,{color:"teal",pointing:"left"},{default:i(()=>[a("1")]),_:1})]),_:1}),e(o,null,{default:i(()=>[a(" Spam "),e(v,null,{default:i(()=>[a("51")]),_:1})]),_:1}),e(o,null,{default:i(()=>[a(" Updates "),e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(m,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:t.paginationCode},{default:i(()=>[e(u,{pagination:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("1")]),_:1}),e(o,{disabled:""},{default:i(()=>[a("...")]),_:1}),e(o,null,{default:i(()=>[a("10")]),_:1}),e(o,null,{default:i(()=>[a("11")]),_:1}),e(o,null,{default:i(()=>[a("12")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:t.headerCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{header:""},{default:i(()=>[a("Our Company")]),_:1}),e(o,null,{default:i(()=>[a("About us")]),_:1}),e(o,null,{default:i(()=>[a("Jobs")]),_:1}),e(o,null,{default:i(()=>[a("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:t.textContentCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Promotions")]),_:1}),my]),_:1}),e(o,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Coupons")]),_:1}),py]),_:1}),e(o,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Rebates")]),_:1}),fy]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Input",description:"A menu item can contain an input inside of it",code:t.inputCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(m,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,{position:"right",as:"div"},{default:i(()=>[e(m,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Button",description:"A menu item can contain a button inside of it",code:t.buttonCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(d,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1}),e(o,{as:"div"},{default:i(()=>[e(d,null,{default:i(()=>[a("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:t.linkItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,{href:"https://google.com"},{default:i(()=>[a("Visit Google")]),_:1}),e(o,{link:"",as:"div"},{default:i(()=>[a("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:t.dropdownItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(T,{item:"",text:"Categories"},{default:i(()=>[e(S,null,{default:i(()=>[e(y,{text:"Electoronics"}),e(y,{text:"Automotive"}),e(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:t.menuContentCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Browse")]),_:1}),e(o,null,{default:i(()=>[a("Submit")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[a("Sign up")]),_:1}),e(o,null,{default:i(()=>[a("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:t.subMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(m,{placeholder:"Search..."})]),_:1}),e(o,{as:"div"},{default:i(()=>[a(" Home "),e(h,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Search")]),_:1}),e(o,null,{default:i(()=>[a("Add")]),_:1}),e(o,null,{default:i(()=>[a("Remove")]),_:1})]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"grid layout"}),a(" Browse ")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(T,{item:"",text:"More"},{default:i(()=>[e(S,null,{default:i(()=>[e(y,{icon:"edit",text:"Edit Profile"}),e(y,{icon:"globe",text:"Choose Language"}),e(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hover",description:"A menu item can be hovered",code:t.hoverCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(o,null,{default:i(()=>[a("A link")]),_:1}),e(o,{as:"div",link:""},{default:i(()=>[a("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Active",description:"A menu item can be active",code:t.activeCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:t.stackableCode},{default:i(()=>[e(u,{stackable:""},{default:i(()=>[e(o,{as:"div"},{default:i(()=>[gy]),_:1}),e(o,null,{default:i(()=>[a("Features")]),_:1}),e(o,null,{default:i(()=>[a("Testimonials")]),_:1}),e(o,null,{default:i(()=>[a("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:t.invertedCode},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"Additional colors can be specified",code:t.coloredCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{active:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(o,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(o,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(o,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(o,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(o,{color:"teal"},{default:i(()=>[a("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icons",description:"A menu may have just icons",code:t.iconsCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:t.labeledIconCode},{default:i(()=>[e(u,{icon:"labeled"},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",vertical:""},{default:i(()=>[e(o,null,{default:i(()=>[a("Run")]),_:1}),e(o,null,{default:i(()=>[a("Walk")]),_:1}),e(o,null,{default:i(()=>[a("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:t.evenlyDividedCode},{default:i(()=>[e(u,{fluid:"",widths:3},{default:i(()=>[e(o,null,{default:i(()=>[a("Buy")]),_:1}),e(o,null,{default:i(()=>[a("Sell")]),_:1}),e(o,null,{default:i(()=>[a("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A menu may be attached to other content segments",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"top",tabular:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("tab1")]),_:1}),e(o,null,{default:i(()=>[a("tab2")]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[a(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A menu can vary in size",code:t.sizeCode},{default:i(()=>[e(u,{size:"mini"},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(T,{item:"",text:"Language"},{default:i(()=>[e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[a("English")]),_:1}),e(y,null,{default:i(()=>[a("Russian")]),_:1}),e(y,null,{default:i(()=>[a("Spanish")]),_:1})]),_:1})]),_:1}),e(o,{as:"div"},{default:i(()=>[e(d,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{fitted:""},{default:i(()=>[a("No padding whatsoever")]),_:1}),e(o,{fitted:"horizontally"},{default:i(()=>[a("No horizontal padding")]),_:1}),e(o,{fitted:"vertically"},{default:i(()=>[a("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:t.borderlessCode},{default:i(()=>[e(u,{borderless:""},{default:i(()=>[e(o,null,{default:i(()=>[a("1")]),_:1}),e(o,null,{default:i(()=>[a("2")]),_:1}),e(o,null,{default:i(()=>[a("3")]),_:1}),e(o,null,{default:i(()=>[a("4")]),_:1}),e(o,null,{default:i(()=>[a("5")]),_:1}),e(o,null,{default:i(()=>[a("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _y=me(cy,[["render",hy]]),by=E({name:"MessageDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),vy=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),yy=C("p",null,"Get the best news in your e-mail every day.",-1),Cy=C("p",null,"You can't see me",-1),wy=C("p",null,"You can always see me",-1),Sy=C("p",null,"Way to go!",-1),Ay=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),ky=C("a",{href:"#"},"Login here",-1),Ty=C("p",null,[a("Go to your "),C("b",null,"special offers"),a(" page to see now.")],-1),$y=C("p",null,"That offer has expired",-1);function xy(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-message-header"),u=_("sui-message"),g=_("doc-example"),m=_("sui-message-item"),h=_("sui-message-list"),v=_("sui-icon"),d=_("sui-message-content"),y=_("sui-form-field"),S=_("sui-form-group"),T=_("sui-button"),b=_("sui-form"),w=_("sui-container");return L(),ne("div",null,[e(f,{title:"Message",sub:"A message displays information that explains nearby content"}),e(w,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Message",description:"A basic message",code:t.messageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Changes in Service")]),_:1}),vy]),_:1})]),_:1},8,["code"]),e(g,{title:"List Message",description:"A message with a list",code:t.listMessageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("New Site Features")]),_:1}),e(h,null,{default:i(()=>[e(m,null,{default:i(()=>[a("You can now have cover images on blog pages")]),_:1}),e(m,null,{default:i(()=>[a("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icon Message",description:"A message can contain an icon",code:t.iconMessageCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(v,{name:"inbox"}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[a(" Have you heard about our mailing list? ")]),_:1}),yy]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hidden",description:"A message can be hidden",code:t.hiddenCode},{default:i(()=>[e(u,{hidden:""},{default:i(()=>[Cy]),_:1})]),_:1},8,["code"]),e(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:t.visibleCode},{default:i(()=>[e(u,{visible:""},{default:i(()=>[wy]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Floating",description:"A message can float above content that it is related to",code:t.floatingCode},{default:i(()=>[e(u,{floating:""},{default:i(()=>[Sy]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A message can only take up the width of its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[Ay]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(b,{class:"attached fluid segment"},{default:i(()=>[e(S,{widths:"equal"},{default:i(()=>[e(y,{label:"First Name",placeholder:"First Name"}),e(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(y,{label:"Username",placeholder:"Username"}),e(y,{label:"Password",placeholder:"Password"}),e(T,{color:"primary"},{default:i(()=>[a("Submit")]),_:1})]),_:1}),e(u,{attached:"bottom",warning:""},{default:i(()=>[e(v,{name:"help"}),a(" Already signed up? "),ky,a(" instead. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:t.warningCode},{default:i(()=>[e(u,{warning:""},{default:i(()=>[e(v,{name:"close"}),e(o,null,{default:i(()=>[a(" You must register before you can do that! ")]),_:1}),a(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),e(g,{title:"Info",description:"A message may be formatted to display information",code:t.infoCode},{default:i(()=>[e(u,{info:""},{default:i(()=>[e(o,null,{default:i(()=>[a("Was this what you wanted?")]),_:1}),e(h,null,{default:i(()=>[a("It's good to see you again.")]),_:1}),e(h,null,{default:i(()=>[a("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:t.positiveSuccessCode},{default:i(()=>[e(u,{positive:""},{default:i(()=>[e(o,null,{default:i(()=>[a("You are eligible for a reward")]),_:1}),Ty]),_:1})]),_:1},8,["code"]),e(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:t.negativeErrorCode},{default:i(()=>[e(u,{negative:""},{default:i(()=>[e(v,{name:"close"}),e(o,null,{default:i(()=>[a("We're sorry we can't apply that discount")]),_:1}),$y]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"A message can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A message can have different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{size:"mini"},{default:i(()=>[a("This is a mini message.")]),_:1}),e(u,{size:"large"},{default:i(()=>[a("This is a large message.")]),_:1}),e(u,{size:"massive"},{default:i(()=>[a("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const By=me(by,[["render",xy]]),Ey=E({name:"TableDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),Ry=C("a",{href:"#"},"Edit",-1),Py=C("a",{href:"#"},"Edit",-1),zy=C("a",{href:"#"},"Edit",-1),My=C("br",null,null,-1),Dy=C("br",null,null,-1),Iy=C("br",null,null,-1),Fy=C("br",null,null,-1),Vy=C("br",null,null,-1),Ny=C("br",null,null,-1),Ly=C("br",null,null,-1);function Oy(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-table-header-cell"),u=_("sui-table-row"),g=_("sui-table-header"),m=_("sui-table-cell"),h=_("sui-table-body"),v=_("sui-table"),d=_("doc-example"),y=_("sui-icon"),S=_("sui-table-footer"),T=_("sui-container");return L(),ne("div",null,[e(f,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Table",description:"A standard table",code:t.tableCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Job")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("James")]),_:1}),e(m,null,{default:i(()=>[a("24")]),_:1}),e(m,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("26")]),_:1}),e(m,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Elyse")]),_:1}),e(m,null,{default:i(()=>[a("24")]),_:1}),e(m,null,{default:i(()=>[a("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:t.definitionCode},{default:i(()=>[e(v,{definition:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o),e(o,null,{default:i(()=>[a("Arguments")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("reset rating")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1}),e(m,null,{default:i(()=>[a("Resets rating to default value")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("set rating")]),_:1}),e(m,null,{default:i(()=>[a("rating (integer)")]),_:1}),e(m,null,{default:i(()=>[a("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Structured",description:"A table can be formatted to display complex structured data",code:t.structuredCode},{default:i(()=>[e(v,{structured:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{rowspan:"2"},{default:i(()=>[a("Name")]),_:1}),e(o,{rowspan:"2"},{default:i(()=>[a("Type")]),_:1}),e(o,{rowspan:"2"},{default:i(()=>[a("Files")]),_:1}),e(o,{colspan:"3"},{default:i(()=>[a("Languages")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Ruby")]),_:1}),e(o,null,{default:i(()=>[a("Javascript")]),_:1}),e(o,null,{default:i(()=>[a("Python")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Alpha Team")]),_:1}),e(m,null,{default:i(()=>[a("Project 1")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("2")]),_:1}),e(m,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(m),e(m)]),_:1}),e(u,null,{default:i(()=>[e(m,{rowspan:"3"},{default:i(()=>[a("Beta Team")]),_:1}),e(m,null,{default:i(()=>[a("Project 1")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("52")]),_:1}),e(m,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(m),e(m)]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Project 2")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("12")]),_:1}),e(m),e(m,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(m)]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Project 3")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("21")]),_:1}),e(m,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(m),e(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:t.positiveNegativeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{negative:""},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{positive:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[e(y,{name:"checkmark"}),a(" Approved ")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{positive:""},{default:i(()=>[e(y,{name:"close"}),a(" Requires call ")]),_:1})]),_:1}),e(u,{negative:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:t.errorCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{error:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Cannot pull data")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{error:""},{default:i(()=>[e(y,{name:"attention"}),a(" Requires call ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Warning",description:"A cell or row may warn a user",code:t.warningCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[e(y,{name:"attention"}),a(" Requires Action ")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{warning:""},{default:i(()=>[e(y,{name:"attention"}),a(" Hostile ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Active",description:"A cell or row can be active or selected by a user",code:t.activeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{active:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Selected")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,{active:""},{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Disabled",description:"A cell can be disabled",code:t.disabledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{disabled:""},{default:i(()=>[e(m,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Selected")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,{disabled:""},{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:t.coloredCellsCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,{color:"orange"},{default:i(()=>[a("No Name Specified")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{color:"blue"},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{color:"pink"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{color:"green"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:t.markedCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,{marked:"right",color:"blue"},{default:i(()=>[a("No Name Specified")]),_:1}),e(m,{marked:"left",color:"red"},{default:i(()=>[a("Unknown")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,{marked:"left",color:"green"},{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{marked:"left",color:"orange"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Unknown")]),_:1}),e(m,{marked:"right",color:"purple"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:t.singleLineCode},{default:i(()=>[e(v,{"single-line":""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Registration Date")]),_:1}),e(o,null,{default:i(()=>[a("E-mail address")]),_:1}),e(o,null,{default:i(()=>[a("Premium Plan")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John Lilki")]),_:1}),e(m,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(m,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(m,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(m,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(m,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(m,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(m,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(m,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(m,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:t.fixedCode},{default:i(()=>[e(v,{fixed:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:t.stackingCode},{default:i(()=>[e(v,{stackable:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:t.selectableRowCode},{default:i(()=>[e(v,{selectable:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Selectable Cell",description:"A table cell can be selectable",code:t.selectableCellCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(m,{selectable:""},{default:i(()=>[Ry]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(m,null,{default:i(()=>[a("Jimmy")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{selectable:""},{default:i(()=>[Py]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(m,{selectable:""},{default:i(()=>[zy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:t.verticalAlignmentCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{verticalAlign:"top"},{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{verticalAlign:"top"},{default:i(()=>[a(" Notes "),My,a(" 1"),Dy,a(" 2"),Iy]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,{verticalAlign:"bottom"},{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a(" Notes "),Fy,a(" 1"),Vy,a(" 2"),Ny]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:t.textAlignCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,{textAlign:"right"},{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:t.stripedCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Date Joined")]),_:1}),e(o,null,{default:i(()=>[a("E-mail")]),_:1}),e(o,null,{default:i(()=>[a("Called")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John Lilki")]),_:1}),e(m,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(m,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(m,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(m,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(m,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(m,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(m,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(m,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(m,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Celled",description:"A table may be divided each row into separate cells",code:t.celledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("3 People")]),_:1}),e(m,null,{default:i(()=>[a("2 Approved")]),_:1}),e(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:t.basicCode},{default:i(()=>[C("div",null,[e(v,{basic:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1}),Ly,e(v,{basic:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:t.collapsingCode},{default:i(()=>[e(v,{collapsing:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Gender")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("27")]),_:1}),e(m,null,{default:i(()=>[a("Male")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("32")]),_:1}),e(m,null,{default:i(()=>[a("Other")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("22")]),_:1}),e(m,null,{default:i(()=>[a("Other")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("3 People")]),_:1}),e(o,null,{default:i(()=>[a("2 Approved")]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:t.collapsingCellCode},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(m,null,{default:i(()=>[a("Initial commit")]),_:1}),e(m,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(m,null,{default:i(()=>[a("Initial commit")]),_:1}),e(m,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(m,null,{default:i(()=>[a("Initial commit")]),_:1}),e(m,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:t.columnCountCode},{default:i(()=>[e(v,{columns:5},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Gender")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("27")]),_:1}),e(m,null,{default:i(()=>[a("Male")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("32")]),_:1}),e(m,null,{default:i(()=>[a("Other")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("22")]),_:1}),e(m,null,{default:i(()=>[a("Other")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("3 People")]),_:1}),e(o,null,{default:i(()=>[a("2 Approved")]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Column Width",description:"Column Width",code:t.columnWidthCode},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{width:10},{default:i(()=>[a("Name")]),_:1}),e(o,{width:6},{default:i(()=>[a("Status")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:t.coloredCode},{default:i(()=>[e(v,{color:"red"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Food")]),_:1}),e(o,null,{default:i(()=>[a("Calories")]),_:1}),e(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Apples")]),_:1}),e(m,null,{default:i(()=>[a("200")]),_:1}),e(m,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Orange")]),_:1}),e(m,null,{default:i(()=>[a("310")]),_:1}),e(m,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Inverted",description:"A table's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Food")]),_:1}),e(o,null,{default:i(()=>[a("Calories")]),_:1}),e(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Apples")]),_:1}),e(m,null,{default:i(()=>[a("200")]),_:1}),e(m,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Orange")]),_:1}),e(m,null,{default:i(()=>[a("310")]),_:1}),e(m,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:t.paddedCode},{default:i(()=>[C("div",null,[e(v,{padded:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{padded:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:t.compactCode},{default:i(()=>[C("div",null,[e(v,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{compact:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Size",description:"A table can also be small or large",code:t.sizeCode},{default:i(()=>[e(v,{size:"small"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("John")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jamie")]),_:1}),e(m,null,{default:i(()=>[a("Approved")]),_:1}),e(m,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Jill")]),_:1}),e(m,null,{default:i(()=>[a("Denied")]),_:1}),e(m,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Hy=me(Ey,[["render",Oy]]),jy=E({name:"AdvertisementDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),qy=C("img",{src:K},null,-1),Uy=C("br",null,null,-1);function Yy(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-advertisement"),u=_("doc-example"),g=_("sui-container");return L(),ne("div",null,[e(f,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Ad",description:"A standard ad",code:t.adCode},{default:i(()=>[e(o,{unit:"medium rectangle"},{default:i(()=>[qy]),_:1})]),_:1},8,["code"]),e(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:t.commonUnitsCode},{default:i(()=>[C("div",null,[e(o,{unit:"medium rectangle",test:"Medium Rectangle"}),e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large rectangle",test:"Large Rectangle"}),e(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:t.mobileCode},{default:i(()=>[C("div",null,[e(o,{unit:"mobile banner",test:"Mobile Banner"}),e(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:t.rectangleCode},{default:i(()=>[e(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(u,{title:"Button",description:"An ad can use button ad unit size",code:t.buttonCode},{default:i(()=>[C("div",null,[e(o,{unit:"button",test:"Button"}),e(o,{unit:"square button",test:"Square Button"}),e(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:t.skyscraperCode},{default:i(()=>[C("div",null,[e(o,{unit:"skyscraper",test:"Skyscraper"}),Uy,e(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(u,{title:"Banner",description:"An ad can use banner ad unit size",code:t.bannerCode},{default:i(()=>[C("div",null,[e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"vertical banner",test:"Vertical Banner"}),e(o,{unit:"top banner",test:"Top Banner"}),e(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:t.leaderboardCode},{default:i(()=>[C("div",null,[e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large leaderboard",test:"Large Leaderboard"}),e(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:t.panoramaCode},{default:i(()=>[e(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:t.netboardCode},{default:i(()=>[e(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Centered",description:"An advertisement can appear centered",code:t.centeredCode},{default:i(()=>[e(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:t.testCode},{default:i(()=>[e(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const Jy=me(jy,[["render",Yy]]),hu="/vue-fomantic-ui/images/avatar/large/kristy.png",Gy="/vue-fomantic-ui/images/avatar/large/daniel.jpg",wn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Sn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",An="/vue-fomantic-ui/images/avatar/large/elyse.png",Wy="/vue-fomantic-ui/images/avatar/large/matthew.png",Ky="/vue-fomantic-ui/images/avatar/large/molly.png",_u="/vue-fomantic-ui/images/avatar/large/jenny.jpg",bu="/vue-fomantic-ui/images/avatar/large/veronika.jpg",vu="/vue-fomantic-ui/images/avatar/large/steve.jpg",Xy=E({name:"CardDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),Qy=C("span",{class:"date"},"Joined in 2013",-1),Zy=C("a",null,"Elliot Fu",-1),eC=C("a",null,"Jenny Hess",-1),tC=C("a",null,"Stevie Feliciano",-1),iC=C("a",null,"Administrator",-1),lC=C("a",null,"Helen Troy",-1),aC=C("span",{class:"date"},"Joined in 2013",-1),nC=C("span",null,"2 days ago",-1),sC=C("a",null,"Animals",-1),oC=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),uC=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),rC=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),dC=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),cC=C("span",{class:"category"},"Animals",-1),mC=C("span",{class:"category"},"Animals",-1),pC=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:sn}),a(" Matt ")],-1),fC=C("span",{class:"category"},"Animals",-1),gC=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:sn}),a(" Matt ")],-1),hC=C("p",null,"Jenny is a student studying Media Management at the New School",-1),_C=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:nn}),a(" Jenny ")],-1),bC=C("a",null,"Friends",-1),vC=C("span",{class:"right floated"}," Joined in 2013 ",-1),yC=C("a",null,[C("i",{class:"user icon"}),a(" 75 Friends ")],-1),CC=C("a",null,"Coworker",-1),wC=C("span",{class:"right floated"}," Joined in 2011 ",-1),SC=C("a",null,[C("i",{class:"user icon"}),a(" 35 Friends ")],-1),AC=C("a",null,"Coworker",-1),kC=C("span",{class:"right floated"}," Joined in 2014 ",-1),TC=C("a",null,[C("i",{class:"user icon"}),a(" 151 Friends ")],-1);function $C(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-image"),u=_("sui-card-header"),g=_("sui-card-meta"),m=_("sui-card-description"),h=_("sui-card-content"),v=_("sui-icon"),d=_("sui-card"),y=_("doc-example"),S=_("sui-button"),T=_("sui-button-group"),b=_("sui-card-group"),w=_("sui-feed-summary"),k=_("sui-feed-content"),$=_("sui-feed-event"),B=_("sui-feed"),z=_("sui-grid-column"),M=_("sui-grid"),P=_("sui-segment"),F=_("sui-container");return L(),ne("div",null,[e(f,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(F,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Card",description:"A single card",code:t.cardCode},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:hu,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[Qy]),_:1}),e(m,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Cards",description:"A group of cards",code:t.cardsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(o,{src:Mt,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friends of Veronika")]),_:1}),e(m,null,{default:i(()=>[a("Elliot requested permission to view your contact details")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(T,{widths:2},{default:i(()=>[e(S,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(S,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(o,{src:nn,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("New Member")]),_:1}),e(m,null,{default:i(()=>[a("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(T,{widths:2},{default:i(()=>[e(S,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(S,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Content Block",description:"A card can contain blocks of content",code:t.contentBlockCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Project Timeline")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(p,{sub:""},{default:i(()=>[a("Activity")]),_:1}),e(B,{size:"small"},{default:i(()=>[e($,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[Zy,a(" added "),eC,a(" to the project ")]),_:1})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[tC,a(" was added as an "),iC]),_:1})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[lC,a(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(S,{as:"button"},{default:i(()=>[a("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A card can contain an image",code:t.imageCode},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:hu,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[aC]),_:1}),e(m,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Header",description:"A card can contain a header",code:t.headerCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(m,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(m,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(m,null,{default:i(()=>[a(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Metadata",description:"A card can contain content metadata",code:t.metadataCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[nC,sC]),_:1}),e(m,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Buttons",description:"A card can contain buttons",code:t.buttonsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(m,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),e(S,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(m,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),e(S,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:t.descriptionCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(m,null,{default:i(()=>[oC,uC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(m,null,{default:i(()=>[rC,dC]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(v,{name:"check"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:t.fluidCardCode},{default:i(()=>[e(M,{columns:3},{default:i(()=>[e(z,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(o,{src:Gy}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(o,{src:wn}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),e(z,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(o,{src:Sn}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Centered Card",description:"A card can center itself inside its container",code:t.centeredCardCode},{default:i(()=>[e(d,{centered:""},{default:i(()=>[e(o,{src:An}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:t.horizontalCardsCode},{default:i(()=>[e(d,{horizontal:""},{default:i(()=>[e(o,{src:An}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[cC]),_:1}),e(m,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(d,{raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[mC]),_:1}),e(m,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[pC]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:t.linkCardCode},{default:i(()=>[e(d,{href:"#",raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[fC]),_:1}),e(m,null,{default:i(()=>[e(o,{src:_e})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[gC]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:t.textAlignCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(m,{textAlign:"center"},{default:i(()=>[hC]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[_C]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"Card's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(P,{inverted:""},{default:i(()=>[e(b,{inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:Wy}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Matt Giampietro")]),_:1}),e(g,null,{default:i(()=>[bC]),_:1}),e(m,null,{default:i(()=>[a(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[vC,yC]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Ky}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Molly")]),_:1}),e(g,null,{default:i(()=>[CC]),_:1}),e(m,null,{default:i(()=>[a(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[wC,SC]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:An}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1}),e(g,null,{default:i(()=>[AC]),_:1}),e(m,null,{default:i(()=>[a(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[kC,TC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored",description:"A card can specify a color",code:t.coloredCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(d,{color:"primary",href:"#"},{default:i(()=>[e(o,{src:fl})]),_:1}),e(d,{color:"secondary",href:"#"},{default:i(()=>[e(o,{src:fl})]),_:1}),e(d,{color:"red",href:"#"},{default:i(()=>[e(o,{src:fl})]),_:1}),e(d,{color:"orange",href:"#"},{default:i(()=>[e(o,{src:fl})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:t.columnCountCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:K})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:K})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(b,{itemsPerRow:3,stackable:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:Sn})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:wn})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:_u})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:bu})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:as})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:vu})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:t.doublingCode},{default:i(()=>[e(b,{itemsPerRow:6,doubling:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:Sn})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:wn})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:_u})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:bu})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:as})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:vu})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const xC=me(Xy,[["render",$C]]),BC=E({name:"CommentDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),EC=C("span",null,"Today at 5:42PM",-1),RC=C("a",null,"Reply",-1),PC=C("span",null,"Yesterday at 12:30AM",-1),zC=C("a",null,"Reply",-1),MC={class:"comments"},DC=C("span",null,"Just now",-1),IC=C("a",null,"Reply",-1),FC=C("span",null,"5 days ago",-1),VC=C("a",null,"Reply",-1),NC=C("div",{class:"date"},"2 days ago",-1),LC=C("div",{class:"rating"},[C("i",{class:"star icon"}),a(" 5 Faves ")],-1),OC=C("a",null,"Reply",-1),HC=C("a",null,"Save",-1),jC=C("a",null,"Hide",-1),qC=C("a",null,[C("i",{class:"expand icon"}),a(" Full-screen ")],-1),UC=C("a",null,"Reply",-1),YC=C("a",null,"Reply",-1),JC=C("a",null,"Replay",-1),GC=C("span",null,"Today at 5:42PM",-1),WC=C("a",{href:"#"},"Replay",-1),KC=C("span",null,"Yesterday at 12:30AM",-1),XC=C("a",{href:"#"},"Replay",-1),QC=C("span",null,"Just now",-1),ZC=C("a",{href:"#"},"Replay",-1),ew=C("span",null,"5 days ago",-1),tw=C("a",{href:"#"},"Replay",-1),iw=C("span",null,"Today at 5:42PM",-1),lw=C("a",{href:"#"},"Replay",-1),aw=C("span",null,"Yesterday at 12:30AM",-1),nw=C("a",{href:"#"},"Replay",-1),sw=C("span",null,"Just now",-1),ow=C("a",{href:"#"},"Replay",-1),uw=C("span",null,"5 days ago",-1),rw=C("a",{href:"#"},"Replay",-1),dw=C("span",null,"Today at 5:42PM",-1),cw=C("a",{href:"#"},"Replay",-1),mw=C("span",null,"Yesterday at 12:30AM",-1),pw=C("a",{href:"#"},"Replay",-1),fw=C("span",null,"Just now",-1),gw=C("a",{href:"#"},"Replay",-1),hw=C("span",null,"5 days ago",-1),_w=C("a",{href:"#"},"Replay",-1),bw=C("span",null,"Today at 5:42PM",-1),vw=C("a",{href:"#"},"Replay",-1),yw=C("span",null,"Yesterday at 12:30AM",-1),Cw=C("a",{href:"#"},"Replay",-1),ww=C("span",null,"Just now",-1),Sw=C("a",{href:"#"},"Replay",-1),Aw=C("span",null,"5 days ago",-1),kw=C("a",{href:"#"},"Replay",-1);function Tw(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-comment-avatar"),u=_("sui-comment-author"),g=_("sui-comment-metadata"),m=_("sui-comment-text"),h=_("sui-comment-actions"),v=_("sui-comment-content"),d=_("sui-comment"),y=_("sui-comment-group"),S=_("doc-example"),T=_("sui-form-textarea"),b=_("sui-icon"),w=_("sui-button"),k=_("sui-form"),$=_("sui-segment"),B=_("sui-container");return L(),ne("div",null,[e(f,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(B,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Comments",description:"A basic list of comments",code:t.commentsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[EC]),_:1}),e(m,null,{default:i(()=>[a("How artistic!")]),_:1}),e(h,null,{default:i(()=>[RC]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[PC]),_:1}),e(m,null,{default:i(()=>[a("This has been very useful for my research. Thanks as well!")]),_:1}),e(h,null,{default:i(()=>[zC]),_:1})]),_:1}),C("div",MC,[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[DC]),_:1}),e(m,null,{default:i(()=>[a("Elliot you are always so right :)")]),_:1}),e(h,null,{default:i(()=>[IC]),_:1})]),_:1})]),_:1})])]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[FC]),_:1}),e(m,null,{default:i(()=>[a("Dude, this is awesome. Thanks so much")]),_:1}),e(h,null,{default:i(()=>[VC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"avatar",description:"A comment can contain an image or avatar",code:t.avatarCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/stevie.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(g,null,{default:i(()=>[NC,LC]),_:1}),e(m,null,{default:i(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:t.actionsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Tom Lukic")]),_:1}),e(m,null,{default:i(()=>[a(" This will be great for business reports. I will definitely download this. ")]),_:1}),e(h,null,{default:i(()=>[OC,HC,jC,qC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:t.replyFormCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/steve.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Steve Jobs")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(m,null,{default:i(()=>[a("Revolutionary!")]),_:1}),e(h,null,{default:i(()=>[UC]),_:1}),e(k,{reply:""},{default:i(()=>[e(T),e(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[e(b,{name:"edit"}),a(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(S,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:t.collapsedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/christian.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Christian Rocha")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(m,null,{default:i(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),e(h,null,{default:i(()=>[YC]),_:1})]),_:1}),e(y,{collapsed:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("1 days ago")]),_:1}),e(m,null,{default:i(()=>[a("No, it wont")]),_:1}),e(h,null,{default:i(()=>[JC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:t.threadedCode},{default:i(()=>[e(y,{threaded:""},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[GC]),_:1}),e(m,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[WC]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[KC]),_:1}),e(m,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[XC]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[QC]),_:1}),e(m,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[ZC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[ew]),_:1}),e(m,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[tw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:t.minimalCode},{default:i(()=>[e(y,{minimal:""},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[iw]),_:1}),e(m,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[lw]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[aw]),_:1}),e(m,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[nw]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[sw]),_:1}),e(m,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[ow]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[uw]),_:1}),e(m,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[rw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Size",description:"Comments can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"small"},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[dw]),_:1}),e(m,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[cw]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[mw]),_:1}),e(m,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[pw]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[fw]),_:1}),e(m,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[gw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[hw]),_:1}),e(m,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[_w]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"Comments's colors can be inverted",code:t.invertedCode},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[bw]),_:1}),e(m,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[vw]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[yw]),_:1}),e(m,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Cw]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[ww]),_:1}),e(m,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Sw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Aw]),_:1}),e(m,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[kw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const $w=me(BC,[["render",Tw]]),xw=E({name:"FeedDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),Bw=C("img",{src:Mt},null,-1),Ew=C("img",{src:Mt},null,-1),Rw=C("a",null,"Coworkers",-1),Pw=C("img",{src:nn},null,-1),zw=C("a",null,"Jenny Hess",-1),Mw=C("a",null,"coworker",-1),Dw=C("img",{src:gl},null,-1),Iw=C("a",null,"Helen Troy",-1),Fw=C("a",null,[C("img",{src:K})],-1),Vw=C("a",null,[C("img",{src:K})],-1),Nw=C("a",null,"Elliot Fu",-1),Lw=C("a",null,"Jenny Hess",-1),Ow=C("a",null,"Stevie Feliciano",-1),Hw=C("a",null,"Elliot Fu",-1),jw=C("a",null,"Helen Troy",-1),qw=C("a",null,"Christian Rocha",-1),Uw=C("img",{src:Mt},null,-1),Yw=C("div",{class:"date"},"Just now",-1),Jw=C("a",{class:"user"},"Elliot Fu",-1);function Gw(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-feed-label"),u=_("sui-feed-user"),g=_("sui-feed-date"),m=_("sui-feed-summary"),h=_("sui-icon"),v=_("sui-feed-like"),d=_("sui-feed-meta"),y=_("sui-feed-content"),S=_("sui-feed-event"),T=_("sui-feed"),b=_("doc-example"),w=_("sui-feed-extra"),k=_("sui-segment"),$=_("sui-container");return L(),ne("div",null,[e(f,{title:"Feed",sub:"A feed presents user activity chronologically"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Feed",description:"A feed",code:t.feedCode},{default:i(()=>[e(T,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[Bw]),_:1}),e(y,null,{default:i(()=>[e(m,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),a(" added you as a friend "),e(g,null,{default:i(()=>[a("1 Hour Ago")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,{name:"like"}),a(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(b,{title:"Label",description:"An event can contain an image or icon label",code:t.labelCode},{default:i(()=>[e(T,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[Ew]),_:1}),e(y,null,{default:i(()=>[a(" You added Elliot Fu to the group "),Rw]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Date",description:"An event or an event summary can contain a date",code:t.dateCode},{default:i(()=>[e(T,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[Pw]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(m,null,{default:i(()=>[a(" You added "),zw,a(" to your "),Mw,a(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:t.additionalInfoCode},{default:i(()=>[e(T,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[Dw]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(m,null,{default:i(()=>[Iw,a(" added 2 photos ")]),_:1}),e(w,{images:""},{default:i(()=>[Fw,Vw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Size",description:"A feed can have different sizes",code:t.sizeCode},{default:i(()=>[e(T,{size:"small"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Followers Activity")]),_:1}),e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[e(m,null,{default:i(()=>[Nw,a(" added "),Lw,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[e(m,null,{default:i(()=>[Ow,a(" added "),Hw,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[e(m,null,{default:i(()=>[jw,a(" added "),qw,a(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Inverted",description:"A feed's color can be inverted",code:t.invertedCode},{default:i(()=>[e(k,{inverted:""},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[Uw]),_:1}),e(y,null,{default:i(()=>[Yw,e(m,null,{default:i(()=>[Jw,a(" posted on his page ")]),_:1}),e(w,{text:""},{default:i(()=>[a(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Ww=me(xw,[["render",Gw]]),Kw=E({name:"ItemDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),Xw=C("img",{src:K},null,-1),Qw=C("span",null,"Description",-1),Zw=C("img",{src:Ae},null,-1),eS=C("img",{src:K},null,-1),tS=C("span",null,"Description",-1),iS=C("img",{src:Ae},null,-1),lS=C("img",{src:K},null,-1),aS=C("img",{src:K},null,-1),nS=C("img",{src:K},null,-1),sS=C("img",{src:K},null,-1),oS=C("img",{src:K},null,-1),uS=C("img",{src:K},null,-1),rS=C("img",{src:K},null,-1),dS=C("span",{class:"price"},"$1200",-1),cS=C("span",{class:"stay"},"1 Month",-1),mS=C("img",{src:Ae},null,-1),pS=C("span",{class:"price"},"$1000",-1),fS=C("span",{class:"stay"},"2 Weeks",-1),gS=C("img",{src:Ae},null,-1),hS=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),_S=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),bS=C("img",{src:Ae},null,-1),vS=C("img",{src:K},null,-1),yS=C("span",{class:"cinema"},"Union Square 14",-1),CS=C("img",{src:Ae},null,-1),wS=C("img",{src:K},null,-1),SS=C("span",{class:"cinema"},"IFC Cinema",-1),AS=C("img",{src:Ae},null,-1),kS=C("img",{src:K},null,-1),TS=C("span",{class:"cinema"},"IFC",-1),$S=C("img",{src:Ae},null,-1),xS=C("img",{src:Ae},null,-1),BS=C("img",{src:Ae},null,-1),ES=C("img",{src:Ae},null,-1),RS=C("span",{class:"price"},"$1200",-1),PS=C("span",{class:"stay"},"1 Month",-1),zS=C("img",{src:Ae},null,-1),MS=C("span",{class:"price"},"$1000",-1),DS=C("span",{class:"stay"},"2 Weeks",-1),IS=C("img",{src:Ae},null,-1);function FS(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-item-image"),u=_("sui-item-header"),g=_("sui-item-meta"),m=_("sui-item-description"),h=_("sui-item-extra"),v=_("sui-item-content"),d=_("sui-item"),y=_("sui-item-group"),S=_("doc-example"),T=_("sui-image"),b=_("sui-icon"),w=_("sui-label"),k=_("sui-button"),$=_("sui-segment"),B=_("sui-container");return L(),ne("div",null,[e(f,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(B,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Items",description:"A group of items",code:t.itemsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[Xw]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[Qw]),_:1}),e(m,null,{default:i(()=>[Zw]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[eS]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[tS]),_:1}),e(m,null,{default:i(()=>[iS]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"Image",description:"An item can contain an image",code:t.imageCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[lS]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[aS]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[nS]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Content",description:"An item can contain content",code:t.contentCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[sS]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content A ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[oS]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content B ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[uS]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Header",description:"An item can contain a header",code:t.headerCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[rS]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Metadata",description:"An item can contain content metadata",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[dS,cS]),_:1}),e(m,null,{default:i(()=>[mS]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[pS,fS]),_:1}),e(m,null,{default:i(()=>[gS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(m,null,{default:i(()=>[hS,_S]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(m,null,{default:i(()=>[bS]),_:1}),e(h,null,{default:i(()=>[e(b,{name:"check",color:"green"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:t.dividedCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[vS]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1}),e(g,null,{default:i(()=>[yS]),_:1}),e(m,null,{default:i(()=>[CS]),_:1}),e(h,null,{default:i(()=>[e(w,null,{default:i(()=>[a("IMAX")]),_:1}),e(w,null,{default:i(()=>[e(b,{name:"globe"}),a(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[wS]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(g,null,{default:i(()=>[SS]),_:1}),e(m,null,{default:i(()=>[AS]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1}),e(w,null,{default:i(()=>[a("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[kS]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Watchmen")]),_:1}),e(g,null,{default:i(()=>[TS]),_:1}),e(m,null,{default:i(()=>[$S]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:t.relaxedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{size:"tiny",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"tiny",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"tiny",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:t.verticalAlignCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Top Aligned")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Middle Aligned")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,{verticalAlign:"bottom"},{default:i(()=>[e(u,null,{default:i(()=>[a("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Floated Content",description:"Any content element can be floated left or right",code:t.floatedContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content A")]),_:1}),e(m,null,{default:i(()=>[xS]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content B")]),_:1}),e(m,null,{default:i(()=>[BS]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content C")]),_:1}),e(m,null,{default:i(()=>[ES]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:t.invertedCode},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[RS,PS]),_:1}),e(m,null,{default:i(()=>[zS]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{size:"small",src:K}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[MS,DS]),_:1}),e(m,null,{default:i(()=>[IS]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const VS=me(Kw,[["render",FS]]),NS=E({name:"StatisticDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),LS=C("br",null,null,-1),OS=C("br",null,null,-1),HS=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),jS=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),qS=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),US=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function YS(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-statistic"),u=_("doc-example"),g=_("sui-statistic-group"),m=_("sui-statistic-value"),h=_("sui-statistic-label"),v=_("sui-icon"),d=_("sui-image"),y=_("sui-segment"),S=_("sui-container");return L(),ne("div",null,[e(f,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(S,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:t.statisticCode},{default:i(()=>[e(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(u,{title:"Statistic Group",description:"A group of statistics",code:t.groupCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,{value:"31,200",label:"Views"}),e(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:t.valueCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:i(()=>[e(m,{text:""},{default:i(()=>[a(" Three"),LS,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(m,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(m,null,{default:i(()=>[e(d,{circular:"",inline:"",src:ls}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:t.labelCode},{default:i(()=>[e(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:t.horizontalCode},{default:i(()=>[e(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:t.invertedCode},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(g,{stackable:""},{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:t.evenlyDividedCode},{default:i(()=>[e(g,{widths:4},{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:i(()=>[e(m,{text:""},{default:i(()=>[a(" Three"),OS,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(m,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(m,null,{default:i(()=>[e(d,{circular:"",inline:"",src:ls}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(o,{floated:"right",value:"2,204",label:"Views"}),HS,jS,e(o,{floated:"left",value:"2,204",label:"Views"}),qS,US]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A statistic can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{size:"mini",value:"2,204",label:"Views"}),e(o,{size:"tiny",value:"2,204",label:"Views"}),e(o,{size:"small",value:"2,204",label:"Views"}),e(o,{value:"2,204",label:"Views"}),e(o,{size:"large",value:"2,204",label:"Views"}),e(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const JS=me(NS,[["render",YS]]),GS=E({name:"AccordionDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),WS=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),KS=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),XS=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),QS=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),ZS=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),e0=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),t0=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),i0=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),l0=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),a0=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),n0=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),s0=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),o0=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),u0=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),r0=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),d0=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),c0=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),m0=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),p0=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),f0=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function g0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-accordion-tab"),u=_("sui-accordion"),g=_("doc-example"),m=_("sui-segment"),h=_("sui-container");return L(),ne("div",null,[e(f,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Accordion",description:"A standard accordion",code:t.accordionCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[WS]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[KS]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[XS,QS]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:t.styledCode},{default:i(()=>[e(u,{styled:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[ZS]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[e0]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[t0,i0]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",styled:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[l0]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[a0]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[n0,s0]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(m,{inverted:""},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[o0]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[u0]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[r0,d0]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Usage")]),_:1}),e(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:t.multipleCode},{default:i(()=>[e(u,{multiple:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[c0]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[m0]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[p0,f0]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const h0=me(GS,[["render",g0]]),_0=E({name:"CalendarDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{calendar1:N(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function b0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-calendar"),u=_("doc-example"),g=_("sui-container");return L(),ne("div",null,[e(f,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Calendar",description:"A standard calendar",code:t.calendarCode},{default:i(()=>[e(o,{modelValue:t.calendar1,"onUpdate:modelValue":l[0]||(l[0]=m=>t.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const v0=me(_0,[["render",b0]]),y0=E({name:"PropertyListTable",props:{properties:Array}});function C0(t,l,n,s,r,c){const f=_("sui-table-header-cell"),p=_("sui-table-row"),o=_("sui-table-header"),u=_("sui-table-cell"),g=_("sui-table-body"),m=_("sui-table");return L(),ge(m,{celled:""},{default:i(()=>[e(o,null,{default:i(()=>[e(p,null,{default:i(()=>[e(f,null,{default:i(()=>[a("Name")]),_:1}),e(f,null,{default:i(()=>[a("Type")]),_:1}),e(f,null,{default:i(()=>[a("Default")]),_:1}),e(f,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.properties,h=>(L(),ge(p,{key:h.name},{default:i(()=>[e(u,null,{default:i(()=>[a(ke(h.name),1)]),_:2},1024),e(u,null,{default:i(()=>[a(ke(h.type),1)]),_:2},1024),e(u,null,{default:i(()=>[a(ke(h.default),1)]),_:2},1024),e(u,null,{default:i(()=>[a(ke(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const on=me(y0,[["render",C0]]),w0=E({name:"CheckboxDoc",components:{DocPageHeader:Le,DocExample:Se,PropertyListTable:on},setup(){const t=N(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=N([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=N(!1),c='<sui-checkbox toggle v-model="toggle" />',f=N(!1);return{checked:t,checkboxCode:l,selected:n,multipleCode:s,toggle:r,toggleCode:c,slider:f,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),S0={class:"ui form"},A0={class:"grouped fields"},k0={class:"field"},T0={class:"field"},$0={class:"field"};function x0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-checkbox"),u=_("doc-example"),g=_("property-list-table"),m=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),S=_("sui-table"),T=_("sui-container");return L(),ne("div",null,[e(f,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Checkbox",description:"A standard checkbox",code:t.checkboxCode},{default:i(()=>[e(o,{label:"Make my profile visible",modelValue:t.checked,"onUpdate:modelValue":l[0]||(l[0]=b=>t.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:t.multipleCode},{default:i(()=>[C("div",S0,[C("div",A0,[C("div",k0,[e(o,{label:"Apple",value:"Apple",modelValue:t.selected,"onUpdate:modelValue":l[1]||(l[1]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",T0,[e(o,{label:"Banana",value:"Banana",modelValue:t.selected,"onUpdate:modelValue":l[2]||(l[2]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",$0,[e(o,{label:"Chocolate",value:"Chocolate",modelValue:t.selected,"onUpdate:modelValue":l[3]||(l[3]=b=>t.selected=b)},null,8,["modelValue"])])])]),a(" selected : "+ke(t.selected),1)]),_:1},8,["code"]),e(u,{title:"Toggle",description:"A checkbox can toggle",code:t.toggleCode},{default:i(()=>[e(o,{toggle:"",modelValue:t.toggle,"onUpdate:modelValue":l[4]||(l[4]=b=>t.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Slider",description:"A checkbox can look like a slider",code:t.sliderCode},{default:i(()=>[e(o,{slider:"",modelValue:t.slider,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Name")]),_:1}),e(m,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.events,b=>(L(),ge(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(ke(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const B0=me(w0,[["render",x0]]),E0=E({name:"DimmerDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){const t=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=N(!1);return{dimmerCode:t,contentDimmerCode:l,active:n,pageDimmerCode:`<div>
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
</div>`}}});function R0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-image"),u=_("sui-image-group"),g=_("sui-dimmer"),m=_("sui-dimmer-dimmable"),h=_("doc-example"),v=_("sui-icon"),d=_("sui-button"),y=_("sui-header-subheader"),S=_("sui-container");return L(),ne("div",null,[e(f,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(S,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:t.dimmerCode},{default:i(()=>[e(m,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(o,{src:K}),e(o,{src:K}),e(o,{src:K})]),_:1}),e(o,{size:"medium",src:Ft}),e(g,{active:""})]),_:1})]),_:1},8,["code"]),e(h,{title:"Content Dimmer",description:"A dimmer can display content",code:t.contentDimmerCode},{default:i(()=>[e(m,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(o,{src:K}),e(o,{src:K}),e(o,{src:K})]),_:1}),e(o,{size:"medium",src:Ft}),e(g,{active:""},{default:i(()=>[e(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:t.pageDimmerCode},{default:i(()=>[C("div",null,[e(d,{labeled:"",icon:"",onClick:l[0]||(l[0]=T=>t.active=!0)},{default:i(()=>[e(v,{name:"plus"}),a(" Show ")]),_:1}),e(g,{active:t.active,page:"",onClick:l[1]||(l[1]=T=>t.active=!1)},{default:i(()=>[e(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! "),e(y,null,{default:i(()=>[a("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const P0=me(E0,[["render",R0]]),z0=E({name:"DropdownDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){const t=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=N(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,s=N(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],c=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,f=N(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],o=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,u=N(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,m=N(null),h=`<sui-dropdown
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
/>`,v=N(null),d=`<sui-dropdown
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
/>`,y=N(null),S=`<sui-dropdown
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
/>`,T=N({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:t,selected1:l,selectionCode:n,selected2:s,searchSelectionOptions:r,searchSelectionCode:c,selected3:f,clearableSelectionOptions:p,clearableSelectionCode:o,selected4:u,multipleCode:g,selected5:m,multipleCode2:h,selected6:v,searchDropdownCode:d,selected7:y,searchInMenuCode:S,selected8:T,inlineCode:`<span>
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
</sui-button-group>`}}});function M0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-dropdown-item"),u=_("sui-divider"),g=_("sui-dropdown-menu"),m=_("sui-dropdown"),h=_("doc-example"),v=_("sui-button"),d=_("sui-button-group"),y=_("sui-container");return L(),ne("div",null,[e(f,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(y,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dropdown",description:"A dropdown",code:t.dropdownCode},{default:i(()=>[e(m,{text:"File"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"New"}),e(o,{text:"Open...",description:"ctrl + o"}),e(o,{text:"Save as...",description:"ctrl + s"}),e(o,{text:"Rename",description:"ctrl + r"}),e(o,{text:"Make a copy"}),e(o,{icon:"folder",text:"Move to folder"}),e(o,{icon:"trash",text:"Move to trash"}),e(u),e(o,{text:"Download As..."}),e(o,{text:"Publish To Web"}),e(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:t.selectionCode},{default:i(()=>[e(m,{selection:"",placeholder:"Pet",modelValue:t.selected1,"onUpdate:modelValue":l[0]||(l[0]=S=>t.selected1=S),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:t.searchSelectionCode},{default:i(()=>[e(m,{search:"",selection:"",fluid:"",modelValue:t.selected2,"onUpdate:modelValue":l[1]||(l[1]=S=>t.selected2=S),options:t.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:t.clearableSelectionCode},{default:i(()=>[e(m,{clearable:"",selection:"",modelValue:t.selected3,"onUpdate:modelValue":l[2]||(l[2]=S=>t.selected3=S),options:t.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:t.multipleCode},{default:i(()=>[e(m,{selection:"",multiple:"",fluid:"",modelValue:t.selected4,"onUpdate:modelValue":l[3]||(l[3]=S=>t.selected4=S),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{code:t.multipleCode2},{default:i(()=>[e(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:t.selected5,"onUpdate:modelValue":l[4]||(l[4]=S=>t.selected5=S),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:t.searchDropdownCode},{default:i(()=>[e(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:t.selected6,"onUpdate:modelValue":l[5]||(l[5]=S=>t.selected6=S),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:t.searchInMenuCode},{default:i(()=>[e(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:t.selected7,"onUpdate:modelValue":l[6]||(l[6]=S=>t.selected7=S),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:t.inlineCode},{default:i(()=>[C("span",null,[a(" Show me posts by "),e(m,{inline:"",modelValue:t.selected8,"onUpdate:modelValue":l[7]||(l[7]=S=>t.selected8=S),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:t.pointingCode},{default:i(()=>[e(m,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"New"}),e(o,{text:"Save As"}),e(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:t.floatingCode},{default:i(()=>[e(d,{color:"teal"},{default:i(()=>[e(v,null,{default:i(()=>[a("Save")]),_:1}),e(m,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"Edit Post",icon:"edit"}),e(o,{text:"Remove Post",icon:"delete"}),e(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const D0=me(z0,[["render",M0]]),I0=E({name:"EmbedDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function F0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-embed"),u=_("doc-example"),g=_("sui-container");return L(),ne("div",null,[e(f,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:t.youtubeCode},{default:i(()=>[e(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:t.aspectRatioCode},{default:i(()=>[e(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const V0=me(I0,[["render",F0]]),N0="/vue-fomantic-ui/images/avatar/large/rachel.png",L0=E({name:"ModalDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){const t=`<div>
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
</div>`,l=N(!1),n=N(!1);return{modalCode:t,modal1:l,basicModal:n,basicCode:`<div>
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
</div>`}}}),O0=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),H0=C("p",null,"Is it okay to use this photo?",-1),j0=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function q0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-button"),u=_("sui-modal-header"),g=_("sui-image"),m=_("sui-modal-description"),h=_("sui-modal-content"),v=_("sui-modal-actions"),d=_("sui-modal"),y=_("doc-example"),S=_("sui-icon"),T=_("sui-container");return L(),ne("div",null,[e(f,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Modal",description:"A standard modal",code:t.modalCode},{default:i(()=>[C("div",null,[e(o,{onClick:l[0]||(l[0]=b=>t.modal1=!0)},{default:i(()=>[a("Show Modal")]),_:1}),e(d,{modelValue:t.modal1,"onUpdate:modelValue":l[2]||(l[2]=b=>t.modal1=b)},{default:i(()=>[e(u,null,{default:i(()=>[a("Select a Photo")]),_:1}),e(h,{image:""},{default:i(()=>[e(g,{wrapped:"",size:"medium",src:N0}),e(m,null,{default:i(()=>[e(p,null,{default:i(()=>[a("Default Profile Image")]),_:1}),O0,H0]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(o,{positive:"",onClick:l[1]||(l[1]=b=>t.modal1=!1)},{default:i(()=>[a("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A modal can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(o,{onClick:l[3]||(l[3]=b=>t.basicModal=!0)},{default:i(()=>[a("Basic Modal")]),_:1}),e(d,{basic:"",modelValue:t.basicModal,"onUpdate:modelValue":l[5]||(l[5]=b=>t.basicModal=b)},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(S,{name:"archive"}),a(" Archive Old Messages ")]),_:1}),e(h,null,{default:i(()=>[j0]),_:1}),e(v,null,{default:i(()=>[e(o,{basic:"",color:"red",inverted:"",onClick:l[4]||(l[4]=b=>t.basicModal=!1)},{default:i(()=>[e(S,{name:"remove"}),a(" No ")]),_:1}),e(o,{basic:"",color:"green"},{default:i(()=>[e(S,{name:"checkmark"}),a(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const U0=me(L0,[["render",q0]]),Y0="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",J0=E({name:"PopupDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){const t=N(null),l=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=N(null),s=N(null),r=N(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,f=N(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,o=N(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=N(null),m=N(null),h=N(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,d=N(null),y=N(null),S=N(null),T=N(null),b=N(null),w=N(null),k=N(null),$=N(null),B=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,z=N(null),M=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=N(null),F=N(null),U=N(null),O=N(null),se=N(null),we=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,V=N(null),q=N(null);return{popupTrigger:t,popupCode:l,titledTrigger1:n,titledTrigger2:s,titledTrigger3:r,titledCode:c,triggerTriger:f,triggerCode:p,basicTrigger:o,basicCode:u,wideTrigger1:g,wideTrigger2:m,wideTrigger3:h,wideCode:v,positionTrigger1:d,positionTrigger2:y,positionTrigger3:S,positionTrigger4:T,positionTrigger5:b,positionTrigger6:w,positionTrigger7:k,positionTrigger8:$,positionCode:B,flowingTrigger:z,flowingCode:M,sizeTrigger1:P,sizeTrigger2:F,sizeTrigger3:U,sizeTrigger4:O,sizeTrigger5:se,sizeCode:we,invertedTrigger1:V,invertedTrigger2:q,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),G0=C("p",null,[C("b",null,"2"),a(" projects, $10 a month ")],-1),W0=C("p",null,[C("b",null,"5"),a(" projects, $20 a month ")],-1),K0=C("p",null,[C("b",null,"8"),a(" projects, $25 a month ")],-1);function X0(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-icon"),u=_("sui-button"),g=_("sui-popup"),m=_("doc-example"),h=_("sui-image"),v=_("sui-card-header"),d=_("sui-card-description"),y=_("sui-card-content"),S=_("sui-card"),T=_("sui-rating"),b=_("sui-divider"),w=_("sui-grid-column"),k=_("sui-grid"),$=_("sui-container");return L(),ne("div",null,[e(f,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(m,{title:"Popup",description:"An element can specify popup content to appear",code:t.popupCode},{default:i(()=>[e(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.popupTrigger},{default:i(()=>[a(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Titled",description:"An element can specify popup content with a title",code:t.titledCode},{default:i(()=>[e(h,{avatar:"",src:Mt,ref:"titledTrigger1"},null,512),e(h,{avatar:"",src:Fl,ref:"titledTrigger2"},null,512),e(h,{avatar:"",src:sn,ref:"titledTrigger3"},null,512),e(g,{trigger:t.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Trigger",description:"A trigger can be complex element",code:t.triggerCode},{default:i(()=>[e(S,{ref:"triggerTriger"},{default:i(()=>[e(h,{src:Y0}),e(y,null,{default:i(()=>[e(v,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(d,null,{default:i(()=>[a(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),e(g,{trigger:t.triggerTriger,header:"User Rating"},{default:i(()=>[e(T,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(m,{title:"Basic",description:"A popup can provide more basic formatting",code:t.basicCode},{default:i(()=>[e(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Position",description:"A popup can be position around its trigger",code:t.positionCode},{default:i(()=>[e(u,{ref:"positionTrigger1"},{default:i(()=>[a("Top Left")]),_:1},512),e(u,{ref:"positionTrigger2"},{default:i(()=>[a("Top Center")]),_:1},512),e(u,{ref:"positionTrigger3"},{default:i(()=>[a("Top Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger4"},{default:i(()=>[a("Bottom Left")]),_:1},512),e(u,{ref:"positionTrigger5"},{default:i(()=>[a("Bottom Center")]),_:1},512),e(u,{ref:"positionTrigger6"},{default:i(()=>[a("Bottom Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger7"},{default:i(()=>[a("Right Center")]),_:1},512),e(u,{ref:"positionTrigger8"},{default:i(()=>[a("Left Center")]),_:1},512),e(g,{trigger:t.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:t.flowingCode},{default:i(()=>[e(u,{ref:"flowingTrigger"},{default:i(()=>[a("Show Flowing Popup")]),_:1},512),e(g,{trigger:t.flowingTrigger,flowing:""},{default:i(()=>[e(k,{centered:"",divided:"",columns:3},{default:i(()=>[e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Basic Plan")]),_:1}),G0,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Business Plan")]),_:1}),W0,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Premium Plan")]),_:1}),K0,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Size",description:"A popup can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(g,{size:"mini",content:"Hello. This is a mini popup",trigger:t.sizeTrigger1},null,8,["trigger"]),e(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:t.sizeTrigger2},null,8,["trigger"]),e(g,{size:"small",content:"Hello. This is a small popup",trigger:t.sizeTrigger3},null,8,["trigger"]),e(g,{size:"large",content:"Hello. This is a large popup",trigger:t.sizeTrigger4},null,8,["trigger"]),e(g,{size:"huge",content:"Hello. This is a huge popup",trigger:t.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:t.wideCode},{default:i(()=>[e(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(g,{trigger:t.wideTrigger1},{default:i(()=>[a(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger2,wide:""},{default:i(()=>[a(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger3,wide:"very"},{default:i(()=>[a(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(m,{title:"Inverted",description:"A popup can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(g,{trigger:t.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const Q0=me(J0,[["render",X0]]),Z0=E({name:"ProgressDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function eA(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-progress"),u=_("doc-example"),g=_("sui-segment"),m=_("sui-container");return L(),ne("div",null,[e(f,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(m,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Standard",description:"A standard progress bar",code:t.standardCode},{default:i(()=>[e(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:t.indicatingCode},{default:i(()=>[e(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:t.barCode},{default:i(()=>[e(o,{percent:33})]),_:1},8,["code"]),e(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:t.progressCode},{default:i(()=>[e(o,{percent:14,progress:""})]),_:1},8,["code"]),e(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:t.centeredCode},{default:i(()=>[e(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(u,{title:"Label",description:"A progress element can contain a label",code:t.labelCode},{default:i(()=>[e(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Active",description:"A progress bar can show activity",code:t.activeCode},{default:i(()=>[e(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(u,{title:"Success",description:"A progress bar can show a success state",code:t.successCode},{default:i(()=>[e(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(u,{title:"Warning",description:"A progress bar can show a warning state",code:t.warningCode},{default:i(()=>[e(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(u,{title:"Error",description:"A progress bar can show an error state",code:t.errorCode},{default:i(()=>[e(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(u,{title:"Disabled",description:"A progress bar can be disabled",code:t.disabledCode},{default:i(()=>[e(o,{percent:25,disabled:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(u,{title:"Attached",description:"A progress bar can show progress of an element",code:t.attachedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{percent:47,attached:"top"}),a(" La la la la "),e(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A progress bar can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{percent:88,size:"tiny",label:"tiny"}),e(o,{percent:100,size:"small",label:"small",success:""}),e(o,{percent:83,label:"standard"}),e(o,{percent:73,size:"large",label:"large"}),e(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(u,{title:"Color",description:"A progress bar can have different colors",code:t.colorCode},{default:i(()=>[e(o,{percent:32,color:"red"}),e(o,{percent:53,color:"orange"}),e(o,{percent:13,color:"yellow"}),e(o,{percent:37,color:"olive"}),e(o,{percent:83,color:"green"}),e(o,{percent:24,color:"teal"}),e(o,{percent:88,color:"blue"}),e(o,{percent:41,color:"violet"}),e(o,{percent:47,color:"purple"}),e(o,{percent:30,color:"pink"}),e(o,{percent:68,color:"brown"}),e(o,{percent:35,color:"grey"}),e(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const tA=me(Z0,[["render",eA]]),iA=E({name:"RatingDoc",components:{DocPageHeader:Le,DocExample:Se,PropertyListTable:on},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),lA=C("br",null,null,-1),aA=C("br",null,null,-1),nA=C("br",null,null,-1),sA=C("br",null,null,-1),oA=C("br",null,null,-1),uA=C("br",null,null,-1),rA=C("br",null,null,-1),dA=C("br",null,null,-1),cA=C("br",null,null,-1),mA=C("br",null,null,-1),pA=C("br",null,null,-1),fA=C("br",null,null,-1),gA=C("br",null,null,-1),hA=C("br",null,null,-1),_A=C("br",null,null,-1),bA=C("br",null,null,-1),vA=C("br",null,null,-1),yA=C("br",null,null,-1),CA=C("br",null,null,-1),wA=C("br",null,null,-1),SA=C("br",null,null,-1),AA=C("br",null,null,-1),kA=C("br",null,null,-1),TA=C("br",null,null,-1),$A=C("br",null,null,-1),xA=C("br",null,null,-1),BA=C("br",null,null,-1),EA=C("br",null,null,-1),RA=C("br",null,null,-1),PA=C("br",null,null,-1),zA=C("br",null,null,-1),MA=C("br",null,null,-1),DA=C("br",null,null,-1),IA=C("br",null,null,-1),FA=C("br",null,null,-1),VA=C("br",null,null,-1),NA=C("br",null,null,-1),LA=C("br",null,null,-1),OA=C("br",null,null,-1),HA=C("br",null,null,-1),jA=C("br",null,null,-1),qA=C("br",null,null,-1),UA=C("br",null,null,-1),YA=C("br",null,null,-1),JA=C("br",null,null,-1),GA=C("br",null,null,-1),WA=C("br",null,null,-1),KA=C("br",null,null,-1);function XA(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-rating"),u=_("doc-example"),g=_("property-list-table"),m=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),S=_("sui-table"),T=_("sui-container");return L(),ne("div",null,[e(f,{title:"Rating",sub:"A rating indicates user interest in content"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Rating",description:"A Basic rating",code:t.ratingCode},{default:i(()=>[e(o)]),_:1},8,["code"]),e(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:t.iconCode},{default:i(()=>[e(o,{defaultRating:2,maxRating:4,color:"yellow"}),lA,aA,e(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),nA,sA,e(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),oA,uA,e(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),rA,dA,e(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),cA,mA,e(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),pA,fA,e(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:t.colorCode},{default:i(()=>[e(o,{defaultRating:1,maxRating:7,color:"red"}),gA,hA,e(o,{defaultRating:2,maxRating:7,color:"orange"}),_A,bA,e(o,{defaultRating:3,maxRating:7,color:"yellow"}),vA,yA,e(o,{defaultRating:4,maxRating:7,color:"olive"}),CA,wA,e(o,{defaultRating:5,maxRating:7,color:"green"}),SA,AA,e(o,{defaultRating:6,maxRating:7,color:"teal"}),kA,TA,e(o,{defaultRating:6,maxRating:7,color:"blue"}),$A,xA,e(o,{defaultRating:5,maxRating:7,color:"violet"}),BA,EA,e(o,{defaultRating:4,maxRating:7,color:"purple"}),RA,PA,e(o,{defaultRating:3,maxRating:7,color:"pink"}),zA,MA,e(o,{defaultRating:2,maxRating:7,color:"brown"}),DA,IA,e(o,{defaultRating:1,maxRating:7,color:"grey"}),FA,VA,e(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:t.disabledCode},{default:i(()=>[e(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Size",description:"A rating can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),NA,LA,e(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),OA,HA,e(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),jA,qA,e(o,{defaultRating:3,maxRating:4,color:"yellow"}),UA,YA,e(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),JA,GA,e(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),WA,KA,e(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Name")]),_:1}),e(m,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.events,b=>(L(),ge(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(ke(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const QA=me(iA,[["render",XA]]),ZA=E({name:"SidebarDoc",components:{DocPageHeader:Le,DocExample:Se,PropertyListTable:on},setup(){return{visible1:N(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),ek={class:"pusher"};function tk(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-icon"),u=_("sui-button"),g=_("sui-grid-column"),m=_("sui-menu-item"),h=_("sui-sidebar"),v=_("sui-image"),d=_("sui-segment"),y=_("sui-grid"),S=_("doc-example"),T=_("property-list-table"),b=_("sui-table-header-cell"),w=_("sui-table-row"),k=_("sui-table-header"),$=_("sui-table-cell"),B=_("sui-table-body"),z=_("sui-table"),M=_("sui-container");return L(),ne("div",null,[e(f,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(M,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Sidebar",description:"A sidebar",code:t.sidebarCode},{default:i(()=>[e(y,{columns:1},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{onClick:l[0]||(l[0]=P=>t.visible1=!t.visible1),icon:""},{default:i(()=>[e(o,{name:"arrow right"})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(d,{class:"pushable"},{default:i(()=>[e(h,{visible:t.visible1,"onUpdate:visible":l[1]||(l[1]=P=>t.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[e(m,null,{default:i(()=>[e(o,{name:"home"}),a(" Home ")]),_:1}),e(m,null,{default:i(()=>[e(o,{name:"gamepad"}),a(" Games ")]),_:1}),e(m,null,{default:i(()=>[e(o,{name:"camera"}),a(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",ek,[e(d,null,{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Main Header")]),_:1}),e(v,{src:_e})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(T,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(z,{celled:""},{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Name")]),_:1}),e(b,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(B,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.events,P=>(L(),ge(w,{key:P.name},{default:i(()=>[e($,null,{default:i(()=>[a(ke(P.name),1)]),_:2},1024),e($,null,{default:i(()=>[a(ke(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const ik=me(ZA,[["render",tk]]),lk=E({name:"SliderDoc",components:{DocPageHeader:Le,DocExample:Se},setup(){const t=N(5),l='<sui-slider v-model="slider1" />',n=N(4),s='<sui-slider labeled v-model="slider2" />',r=N(6),c='<sui-slider labeled="ticked" v-model="slider3" />',f=N(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=N(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=N([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=N(7),v='<sui-slider disabled v-model="slider7" />',d=N(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,S=N(3),T='<sui-slider reversed v-model="slider9" />',b=N(18),w='<sui-slider vertical v-model="slider10" :max="20" />',k=N(5),$=N(5),B=N(5),z=N(5),M=N(5),P=N(5),F=N(5),U=N(5),O=N(5),se=N(5),we=N(5),V=N(5),q=N(5),ae=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,X=`<sui-segment inverted>
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
</sui-segment>`,Te=N(5),Oe=N(5),Ye=N(5);return{slider1:t,sliderCode:l,slider2:n,labeledSliderCode:s,slider3:r,labeledTickedCode:c,slider4:f,customLabelsCode:p,slider5:o,stepCode:u,slider6:g,rangeCode:m,slider7:h,disabledCode:v,slider8:d,invertedCode:y,slider9:S,reversedCode:T,slider10:b,verticalCode:w,redSlider:k,orangeSlider:$,yellowSlider:B,oliveSlider:z,greenSlider:M,tealSlider:P,blueSlider:F,violetSlider:U,purpleSlider:O,pinkSlider:se,brownSlider:we,greySlider:V,blackSlider:q,coloredCode:ae,invertedColoredCode:X,smallSlider:Te,largeSlider:Oe,bigSlider:Ye,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function ak(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-slider"),u=_("doc-example"),g=_("sui-segment"),m=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),S=_("sui-table"),T=_("sui-container");return L(),ne("div",null,[e(f,{title:"Slider",sub:"A slider allows users to select values within a range"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Slider",description:"A standard slider",code:t.sliderCode},{default:i(()=>[e(o,{modelValue:t.slider1,"onUpdate:modelValue":l[0]||(l[0]=b=>t.slider1=b)},null,8,["modelValue"]),a(" "+ke(t.slider1),1)]),_:1},8,["code"]),e(u,{title:"Labeled Slider",description:"A slider that show its labels",code:t.labeledSliderCode},{default:i(()=>[e(o,{labeled:"",modelValue:t.slider2,"onUpdate:modelValue":l[1]||(l[1]=b=>t.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:t.labeledTickedCode},{default:i(()=>[e(o,{labeled:"ticked",modelValue:t.slider3,"onUpdate:modelValue":l[2]||(l[2]=b=>t.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:t.customLabelsCode},{default:i(()=>[e(o,{modelValue:t.slider4,"onUpdate:modelValue":l[3]||(l[3]=b=>t.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Step",description:"A slider can change the default step increment",code:t.stepCode},{default:i(()=>[e(o,{modelValue:t.slider5,"onUpdate:modelValue":l[4]||(l[4]=b=>t.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),a(" "+ke(t.slider5),1)]),_:1},8,["code"]),e(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:t.rangeCode},{default:i(()=>[e(o,{modelValue:t.slider6,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),a(" "+ke(t.slider6),1)]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Disabled",description:"A slider can appear disabled",code:t.disabledCode},{default:i(()=>[e(o,{disabled:"",modelValue:t.slider7,"onUpdate:modelValue":l[6]||(l[6]=b=>t.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A slider can be inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",modelValue:t.slider8,"onUpdate:modelValue":l[7]||(l[7]=b=>t.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Reversed",description:"A slider can be reversed",code:t.reversedCode},{default:i(()=>[e(o,{reversed:"",modelValue:t.slider9,"onUpdate:modelValue":l[8]||(l[8]=b=>t.slider9=b)},null,8,["modelValue"]),a(" "+ke(t.slider9),1)]),_:1},8,["code"]),e(u,{title:"Vertical",description:"A slider can be vertical",code:t.verticalCode},{default:i(()=>[e(o,{vertical:"",modelValue:t.slider10,"onUpdate:modelValue":l[9]||(l[9]=b=>t.slider10=b),max:20},null,8,["modelValue"]),a(" "+ke(t.slider10),1)]),_:1},8,["code"]),e(u,{title:"Colored",description:"A slider can be different colors",code:t.coloredCode},{default:i(()=>[e(o,{color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[10]||(l[10]=b=>t.redSlider=b)},null,8,["modelValue"]),e(o,{color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(o,{color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(o,{color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(o,{color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(o,{color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(o,{color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(o,{color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(o,{color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(o,{color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(o,{color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(o,{color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[21]||(l[21]=b=>t.greySlider=b)},null,8,["modelValue"]),e(o,{color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:t.invertedColoredCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[23]||(l[23]=b=>t.redSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[34]||(l[34]=b=>t.greySlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A slider can have different sizes",code:t.sizeCode},{default:i(()=>[e(o,{size:"small",color:"red",modelValue:t.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=b=>t.smallSlider=b)},null,8,["modelValue"]),e(o,{size:"large",color:"yellow",modelValue:t.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=b=>t.largeSlider=b)},null,8,["modelValue"]),e(o,{size:"big",color:"olive",modelValue:t.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=b=>t.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Name")]),_:1}),e(m,null,{default:i(()=>[a("Type")]),_:1}),e(m,null,{default:i(()=>[a("Default")]),_:1}),e(m,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.properties,b=>(L(),ge(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(ke(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(ke(b.type),1)]),_:2},1024),e(d,null,{default:i(()=>[a(ke(b.default),1)]),_:2},1024),e(d,null,{default:i(()=>[a(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Name")]),_:1}),e(m,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.events,b=>(L(),ge(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a(ke(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a(ke(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const nk=me(lk,[["render",ak]]),sk=E({name:"TabDoc",components:{DocPageHeader:Le,DocExample:Se,PropertyListTable:on},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function ok(t,l,n,s,r,c){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-tab-panel"),u=_("sui-tab"),g=_("doc-example"),m=_("property-list-table"),h=_("sui-table-header-cell"),v=_("sui-table-row"),d=_("sui-table-header"),y=_("sui-table-cell"),S=_("sui-table-body"),T=_("sui-table"),b=_("sui-container");return L(),ne("div",null,[e(f,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(b,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Examples")]),_:1}),e(g,{title:"Basic",code:t.basicCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary",code:t.secondaryCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(p,{as:"h3"},{default:i(()=>[a("Tab")]),_:1}),e(m,{properties:t.tabProperties},null,8,["properties"]),e(p,{as:"h3"},{default:i(()=>[a("TabPanel")]),_:1}),e(m,{properties:t.tabPanelProperties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(T,{celled:""},{default:i(()=>[e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[a("Name")]),_:1}),e(h,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[(L(!0),ne(Ce,null,Ge(t.events,w=>(L(),ge(v,{key:w.name},{default:i(()=>[e(y,null,{default:i(()=>[a(ke(w.name),1)]),_:2},1024),e(y,null,{default:i(()=>[a(ke(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const uk=me(sk,[["render",ok]]),rk={__name:"DocSections",props:["docs"],setup(t){const l=t,n=D(()=>[...new Set(l.docs.map(s=>s.category))]);return(s,r)=>{const c=_("SuiHeader");return L(!0),ne(Ce,null,Ge(n.value,(f,p)=>(L(),ne(Ce,{key:f},[e(c,{as:"h2",dividing:"",style:il({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[a(ke(f),1)]),_:2},1032,["style"]),(L(!0),ne(Ce,null,Ge(t.docs.filter(o=>o.category===f),(o,u)=>(L(),ge(dc(o.component),{key:o.label+"_"+u,id:o.id,style:{marginTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},dk={};function ck(t,l){const n=_("SuiRail");return L(),ge(n,{id:"table-contents",position:"right",dividing:""})}const mk=me(dk,[["render",ck],["__scopeId","data-v-c0207a98"]]),pk={class:"intro"},fk={__name:"DocComponent",props:["title","description","componentDocs"],setup(t){return(l,n)=>{const s=_("SuiHeaderSubheader"),r=_("SuiHeader"),c=_("SuiDivider"),f=_("SuiIcon"),p=_("SuiMenuItem"),o=_("SuiMenu"),u=_("SuiContainer"),g=_("SuiSegment");return L(),ne("div",null,[e(g,{vertical:""},{default:i(()=>[e(u,{class:"main"},{default:i(()=>[C("div",pk,[e(r,{as:"h1"},{default:i(()=>[a(ke(t.title)+" ",1),e(s,null,{default:i(()=>[a(ke(t.description),1)]),_:1})]),_:1}),e(c,{hidden:""}),e(o,{floated:"right"},{default:i(()=>[e(p,{as:"a",icon:""},{default:i(()=>[e(f,{name:"edit"})]),_:1}),e(p,{as:"a",icon:""},{default:i(()=>[e(f,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(u,{class:"main"},{default:i(()=>[e(g,{basic:"",fitted:""},{default:i(()=>[e(rk,{docs:t.componentDocs},null,8,["docs"]),e(mk)]),_:1})]),_:1})])}}},gk=me(fk,[["__scopeId","data-v-901678ff"]]);function Nm(t){var l,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t))for(l=0;l<t.length;l++)t[l]&&(n=Nm(t[l]))&&(s&&(s+=" "),s+=n);else for(l in t)t[l]&&(s&&(s+=" "),s+=l);return s}function G(){for(var t,l,n=0,s="";n<arguments.length;)(t=arguments[n++])&&(l=Nm(t))&&(s&&(s+=" "),s+=l);return s}const A=(t,l)=>t?l:"",Re=(t,l)=>typeof t=="string"?`${t} ${l}`:"",Be=(t,l)=>t===!0?l:t==="below"?`${l} ${t}`:typeof t=="string"?`${t} ${l}`:"",nl=t=>t==="justified"?"justified":Re(t,"aligned"),qt=(t,l)=>typeof t=="number"&&l?`${ns(t)} ${l}`:typeof t=="number"&&!l?ns(t):typeof t=="string"&&t==="equal"?`${t} width`:"",dl=(t,l)=>t?`${ns(t)} wide ${l}`:"",ns=t=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][t-1],Ke=E({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,labeled:[Boolean,String],labelPosition:String,icon:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,loading:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.color,t.size,A(t.active,"active"),A(t.basic,"basic"),A(t.circular,"circular"),A(t.compact,"compact"),A(t.disabled,"disabled"),A(t.facebook,"facebook"),A(t.fluid,"fluid"),A(t.google,"google"),A(t.icon,"icon"),A(t.linkedin,"linkedin"),A(t.instagram,"instagram"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.primary,"primary"),A(t.secondary,"secondary"),A(t.telegram,"telegram"),A(t.tertiary,"tertiary"),A(t.toggle,"toggle"),A(t.twitter,"twitter"),A(t.vk,"vk"),A(t.whatsapp,"whatsapp"),A(t.youtube,"youtube"),Re(t.attached,"attached"),Re(t.floated,"floated"),Re(t.labelPosition,"labeled"),Be(t.animated,"animated"),Be(t.labeled,"labeled"),"button"))}},render(){let t=this.as||"div";return e(t,{class:this.computedClass,role:"button"},{default:()=>{var l,n;return[(n=(l=this.$slots).default)==null?void 0:n.call(l)]}})}}),yu=E({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(t){return{computedClass:D(()=>G(A(t.hidden,"hidden"),A(t.visible,"visible"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ss=E({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>G("ui",t.color,t.size,A(t.basic,"basic"),A(t.icon,"icon"),A(t.labeled,"labeled"),A(t.vertical,"vertical"),Re(t.attached,"attached"),qt(t.widths,""),"buttons"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),hk={install(t){t.component(Ke.name,Ke),t.component(yu.name,yu),t.component(ss.name,ss)}},Cu=E({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>G("ui",A(t.fluid,"fluid"),A(t.text,"text"),nl(t.textAlign),"container"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),_k={install(t){t.component(Cu.name,Cu)}},wu=E({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>G("ui",A(t.clearing,"clearing"),A(t.fitted,"fitted"),A(t.hidden,"hidden"),A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),A(t.section,"section"),A(t.vertical,"vertical"),Re(t.textAlign,"aligned"),"divider"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),bk={install(t){t.component(wu.name,wu)}},Su=E({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(t){return{computedClass:D(()=>G(t.size,A(t.disabled,"disabled"),A(t.link,"link"),A(t.loading,"loading")))}},render(){return this.computedClass?j("em",{class:this.computedClass,"data-emoji":this.$props.name}):j("em",{"data-emoji":this.$props.name})}}),vk={install(t){t.component(Su.name,Su)}},Au=E({name:"SuiFlag",props:{name:String},setup(t){return{computedClass:D(()=>G(t.name,"flag"))}},render(){return j("i",{class:this.computedClass})}}),yk={install(t){t.component(Au.name,Au)}},ka=E({name:"SuiHeaderSubheader",props:{as:String},setup(t){return{elementType:t.as||"div"}},render(){var t,l;return j(this.elementType,{class:"sub header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ku=E({name:"SuiHeader",components:{HeaderSubheader:ka},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(t){const l=t.as||"div",n=D(()=>G("ui",t.color,t.size,A(t.block,"block"),A(t.disabled,"disabled"),A(t.dividing,"dividing"),A(t.icon,"icon"),A(t.image,"image"),A(t.inverted,"inverted"),A(t.sub,"sub"),Re(t.floated,"floated"),Be(t.attached,"attached"),nl(t.textAlign),"header"));return{elementType:l,computedClass:n}},render(){var t,l;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(j(ka,{},this.subheader)),n.length>0?j(this.elementType,{class:this.computedClass},n):j(this.elementType,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Tu=E({name:"SuiHeaderContent",render(){var t,l;return j("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ck={install(t){t.component(ku.name,ku),t.component(Tu.name,Tu),t.component(ka.name,ka)}},xt=E({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(t){return{computedClass:D(()=>G(t.color,t.name,t.size,A(t.bordered,"bordered"),A(t.circular,"circular"),A(t.disabled,"disabled"),A(t.fitted,"fitted"),A(t.inverted,"inverted"),A(t.link,"link"),A(t.loading,"loading"),Re(t.flipped,"flipped"),Re(t.rotated,"rotated"),Be(t.corner,"corner"),"icon"))}},render(){let t=this.$props.as||"i";return j(t,{"aria-hidden":!0,class:this.computedClass})}}),$u=E({name:"SuiIconGroup",props:{as:String,size:String},setup(t){return{computedClass:D(()=>G(t.size,"icons"))}},render(){var t,l;let n=this.$props.as||"i";return j(n,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),wk={install(t){t.component(xt.name,xt),t.component($u.name,$u)}},Lm=["top","middle","bottom"],Sk={verticalAlign:{type:String,validator:t=>Lm.includes(t)}};function Ak(t){return{verticalAlignClass:D(()=>t.verticalAlign&&Lm.includes(t.verticalAlign)?`${t.verticalAlign} aligned`:null)}}const kk=["left","right"],Tk={floated:{type:String,validator:t=>kk.includes(t)}};function $k(t){return{floatedClass:D(()=>t.floated&&(t.floated==="left"||t.floated==="right")?`${t.floated} floated`:null)}}const Zi=E({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(t,{slots:l}){const n=D(()=>G("ui",t.size,t.color,A(t.basic,"basic"),A(t.circular,"circular"),A(t.empty,"empty"),A(t.floating,"floating"),A(t.horizontal,"horizontal"),A(t.image,"image"),A(t.inverted,"inverted"),A(t.prompt,"prompt"),A(t.tag,"tag"),Re(t.attached,"attached"),Re(t.corner,"corner"),Be(t.pointing,"pointing"),Be(t.ribbon,"ribbon"),"label"));let s=t.as||"div";return t.icon?()=>j(s,{class:n.value},j(xt,{name:t.icon})):()=>{var r;return j(s,{class:n.value},(r=l.default)==null?void 0:r.call(l))}}}),xu=E({name:"SuiLabelDetail",render(){var t,l;return e("div",{class:"detail"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Bu=E({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(t,{slots:l}){const n=D(()=>G("ui",t.color,t.size,A(t.basic,"basic"),A(t.circular,"circular"),A(t.tag,"tag"),"labels"));return()=>{var s;return j("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),xk={install(t){t.component(Zi.name,Zi),t.component(xu.name,xu),t.component(Bu.name,Bu)}},Ta=E({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Sk,...Tk},setup(t,{slots:l}){const{verticalAlignClass:n}=Ak(t),{floatedClass:s}=$k(t),r=D(()=>G("ui",t.size,n.value,s.value,A(t.avatar,"avatar"),A(t.bordered,"bordered"),A(t.centered,"centered"),A(t.circular,"circular"),A(t.disabled,"disabled"),A(t.fluid,"fluid"),A(t.hidden,"hidden"),A(t.inline,"inline"),A(t.rounded,"rounded"),Be(t.spaced,"spaced"),"image"));if(t.as==="a"||t.as==="router-link"){let c=t.as;return t.as==="router-link"&&(c=_(t.as)),()=>{var f;return j(c,{class:r.value,href:t.href,target:t.target&&t.target},j("img",{src:t.src},(f=l.default)==null?void 0:f.call(l)))}}return t.wrapped?()=>{var c;return j("div",{class:r.value},j("img",{src:t.src},(c=l.default)==null?void 0:c.call(l)))}:t.label?()=>j("div",{class:r.value},[j("img",{src:t.src}),j(Zi,{...t.label})]):()=>e("img",{class:r.value,src:t.src},null)}}),Eu=E({name:"SuiImageGroup",props:{size:String},setup(t,{slots:l}){const n=D(()=>G("ui",t.size,"images"));return()=>{var s;return j("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),Bk={install(t){t.component(Ta.name,Ta),t.component(Eu.name,Eu)}},Ru=E({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(t,{emit:l}){const n=D(()=>typeof t.icon=="string"||t.loading),s=D(()=>!!t.label||t.labeled),r=D(()=>G("ui",t.size,t.action&&"action",A(t.disabled,"disabled"),A(t.error,"error"),A(t.fluid,"fluid"),A(t.focus,"focus"),t.iconPosition,A(n.value,"icon"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.transparent,"transparent"),A(s.value,"labeled"),"input")),c=f=>l("update:modelValue",f.target.value);return()=>e("div",{class:r.value},[t.label&&e(Zi,null,{default:()=>[t.label]}),e("input",{type:t.type||"text",placeholder:t.placeholder,value:t.modelValue,onInput:f=>c(f)},null),n.value&&e(xt,{name:t.icon||"spinner"},null),t.action&&e(Ke,null,{default:()=>[t.action]})])}}),Ek={install(t){t.component(Ru.name,Ru)}},Pu=E({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(t,{slots:l}){const n=D(()=>G("ui",A(t.animated,"animated"),A(t.bulleted,"bulleted"),A(t.celled,"celled"),A(t.divided,"divided"),A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),A(t.link,"link"),A(t.ordered,"ordered"),A(t.relaxed,"relaxed"),A(t.selection,"selection"),Re(t.verticalAlign,"aligned"),Re(t.floated,"floated"),"list"));let s=t.as||"div";return()=>{var r;return j(s,{class:n.value},(r=l.default)==null?void 0:r.call(l))}}}),zu=E({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(t,{slots:l}){let n=t.as||"div";const s=D(()=>G(A(t.active,"active"),A(t.disabled,"disabled"),"item"));return()=>{var r;return j(n,{class:s.value},(r=l.default)==null?void 0:r.call(l))}}}),Mu=E({name:"SuiListIcon",components:{Icon:xt},setup(t,{slots:l}){return()=>{var n;return j(_(xt.name),{...t},(n=l.default)==null?void 0:n.call(l))}}}),Du=E({name:"SuiListContent",props:{verticalAlign:String},setup(t){return{computedClass:D(()=>G(Re(t.verticalAlign,"aligned"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Iu=E({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return j(t.as,{class:"header"},(n=l.default)==null?void 0:n.call(l))}}}),Fu=E({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return j(t.as,{class:"description"},(n=l.default)==null?void 0:n.call(l))}}}),Vu=E({name:"SuiListList",render(){var t,l;return e("div",{class:"list"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Rk={install(t){t.component(Pu.name,Pu),t.component(zu.name,zu),t.component(Mu.name,Mu),t.component(Du.name,Du),t.component(Iu.name,Iu),t.component(Fu.name,Fu),t.component(Vu.name,Vu)}},Nu=E({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(t,{slots:l}){return{computedClass:D(()=>{var n;return G("ui",t.color,t.size,A(t.active,"active"),A(t.disabled,"disabled"),A(t.fast,"fast"),A(t.indeterminate,"indeterminate"),A(t.inverted,"inverted"),A(t.slow,"slow"),A(t.text||!!((n=l.default)!=null&&n.call(l)),"text"),Be(t.inline,"inline"),"loader")})}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Pk={install(t){t.component(Nu.name,Nu)}},Lu=E({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(t){return{computedClass:D(()=>G("ui",t.position,t.size,A(t.attached,"attached"),A(t.dividing,"dividing"),A(t.internal,"internal"),Be(t.close,"close"),"rail"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),zk={install(t){t.component(Lu.name,Lu)}},Ou=E({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.animated,A(t.active,"active"),A(t.disabled,"disabled"),A(t.instant,"instant"),"reveal"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Hu=E({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(t){return{computedClass:D(()=>G("ui",A(t.visible,"visible"),A(t.hidden,"hidden"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Mk={install(t){t.component(Ou.name,Ou),t.component(Hu.name,Hu)}},$a=E({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.color,t.size,A(t.basic,"basic"),A(t.circular,"circular"),A(t.clearing,"clearing"),A(t.compact,"compact"),A(t.disabled,"disabled"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.piled,"piled"),A(t.placeholder,"placeholder"),A(t.raised,"raised"),A(t.secondary,"secondary"),A(t.stacked,"stacked"),A(t.tertiary,"tertiary"),A(t.vertical,"vertical"),Re(t.floated,"floated"),Re(t.textAlign,"aligned"),Be(t.attached,"attached"),Be(t.fitted,"fitted"),Be(t.padded,"padded"),"segment"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ju=E({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.size,A(t.compact,"compact"),A(t.horizontal,"horizontal"),A(t.piled,"piled"),A(t.raised,"raised"),A(t.stacked,"stacked"),"segments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),qu=E({name:"SuiSegmentInline",render(){var t,l;return e("div",{class:"inline"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Dk={install(t){t.component($a.name,$a),t.component(ju.name,ju),t.component(qu.name,qu)}},Uu=E({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(t){return{computedClass:D(()=>G(A(t.active,"active"),A(t.completed,"completed"),A(t.disabled,"disabled"),A(t.fluid,"fluid"),A(t.link,"link"),A(t.vertical,"vertical"),"step"))}},render(){var t,l,n,s;return this.href?e("a",{class:this.computedClass,href:this.href},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("div",{class:this.computedClass},[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Ik=["one","two","three","four","five","six","seven","eight"],Yu=E({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(t){const{widths:l}=t;return{computedClass:D(()=>G("ui",l&&Ik[l-1],t.size,A(t.fluid,"fluid"),A(t.inverted,"inverted"),A(t.ordered,"ordered"),A(t.unstackable,"unstackable"),A(t.vertical,"vertical"),Re(t.attached,"attached"),Re(t.stackable,"stackable"),"steps"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ju=E({name:"SuiStepContent",render(){var t,l;return e("div",{class:"content"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Gu=E({name:"SuiStepTitle",render(){var t,l;return e("div",{class:"title"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Wu=E({name:"SuiStepDescription",render(){var t,l;return e("div",{class:"description"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Fk={install(t){t.component(Uu.name,Uu),t.component(Yu.name,Yu),t.component(Ju.name,Ju),t.component(Gu.name,Gu),t.component(Wu.name,Wu)}},Vk=Object.freeze(Object.defineProperty({__proto__:null,Button:hk,Container:_k,Divider:bk,Emoji:vk,Flag:yk,Header:Ck,Icon:wk,Image:Bk,Input:Ek,Label:xk,List:Rk,Loader:Pk,Rail:zk,Reveal:Mk,Segment:Dk,Step:Fk},Symbol.toStringTag,{value:"Module"})),os=E({name:"SuiBreadcrumbDivider",props:{icon:String},setup(t){return{computedClass:D(()=>G(t.icon,"icon","divider"))}},render(){var t,l;return this.icon?e("i",{"aria-hidden":"true",class:this.computedClass},null):e("div",{class:"divider"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),us=E({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(t){const l=D(()=>G(A(t.active,"active"),"section")),n=t.link||!!t.href;return{computedClass:l,isLink:n}},render(){let t="div";this.isLink?t="a":this.to&&(t=_("router-link"));const l={href:this.href,to:this.to};return e(t,Bi({class:this.computedClass},l),{default:()=>{var n,s;return[(s=(n=this.$slots).default)==null?void 0:s.call(n)]}})}}),Ku=E({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(t){return{computedClass:D(()=>G("ui",t.size,A(t.inverted,"inverted"),"breadcrumb"))}},render(){var t,l;const n=()=>{var s;return(s=this.sections)==null?void 0:s.map((r,c)=>{const f={active:r.active,href:r.href,link:r.link,to:r.to};return e(Ce,null,[e(us,f,{default:()=>[r.content]}),this.sections.length!==c+1&&e(os,{icon:this.icon},{default:()=>[a(" / ")]})])})};return e("div",{class:this.computedClass},[((l=(t=this.$slots).default)==null?void 0:l.call(t))||n()])}}),Nk={install(t){t.component(Ku.name,Ku),t.component(os.name,os),t.component(us.name,us)}},Xu=E({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(t){return{computedClass:D(()=>G("ui",t.size,A(t.error,"error"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.reply,"reply"),A(t.success,"success"),A(t.unstackable,"unstackable"),A(t.warning,"warning"),"form"))}},render(){var t,l;return e("form",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Qu=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Lk(t){return{widthClass:D(()=>Number(t.width)>0?`${Qu[Number(t.width)-1]} wide`:typeof t.width=="string"||Qu.includes(t.width)?`${t.width} wide`:null)}}const Zu=E({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(t,{emit:l}){const{widthClass:n}=Lk(t),s=D(()=>G(A(t.disabled,"disabled"),A(t.error,"error"),A(t.inline,"inline"),A(t.required,"required"),n.value,"field")),r=t.type||"text";return{computedClass:s,inputType:r,onInput:c=>l("update:modelValue",c.target.value)}},render(){var t,l;return this.label?e("div",{class:this.computedClass},[e("label",null,[this.label]),e("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),er=E({name:"SuiFormGroup",props:{widths:String},setup(t){return{computedClass:D(()=>G(Re(t.widths,"width"),"fields"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),tr=E({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&e("div",{class:"field"},[e("label",null,[this.label]),e("textarea",{placeholder:this.placeholder},null)]),e("div",{class:"field"},[e("textarea",{placeholder:this.placeholder},null)])}}),Ok={install(t){t.component(Xu.name,Xu),t.component(Zu.name,Zu),t.component(er.name,er),t.component(tr.name,tr)}},ir=E({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(t){return{computedClass:D(()=>G("ui",t.container&&"container",A(t.centered,"centered"),A(t.compact,"compact"),A(t.doubling,"doubling"),A(t.inverted,"inverted"),A(t.stackable,"stackable"),Re(t.reversed,"reversed"),Re(t.verticalAlign,"aligned"),Be(t.celled,"celled"),Be(t.divided,"divided"),Be(t.padded,"padded"),Be(t.relaxed,"relaxed"),nl(t.textAlign),qt(t.columns,"column"),"grid"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),lr=E({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(t){return{computedClass:D(()=>G(t.color,Re(t.floated,"floated"),Re(t.only,"only"),nl(t.textAlign),qt(t.width,"wide"),dl(t.mobile,"mobile"),dl(t.tablet,"tablet"),dl(t.computer,"computer"),dl(t.largeScreen,"large screen"),dl(t.widescreen,"widescreen"),"column"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ar=E({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>G(t.color,A(t.centered,"centered"),A(t.stretched,"stretched"),Re(t.only,"only"),qt(t.columns,"column"),nl(t.textAlign),"row"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Hk={install(t){t.component(ir.name,ir),t.component(lr.name,lr),t.component(ar.name,ar)}},nr=E({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>G("ui",t.color,t.size,A(t.borderless,"borderless"),A(t.compact,"compact"),A(t.fixed,"fixed"),A(t.fluid,"fluid"),A(t.inverted,"inverted"),A(t.pagination,"pagination"),A(t.pointing,"pointing"),A(t.secondary,"secondary"),A(t.stackable,"stackable"),A(t.text,"text"),A(t.vertical,"vertical"),Be(t.attached,"attached"),Be(t.floated,"floated"),Be(t.icon,"icon"),Be(t.tabular,"tabular"),qt(t.widths,"item"),"menu"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),sr=E({name:"SuiMenuHeader",props:{as:String,content:String},setup(t,{slots:l}){let n=t.as||"div";return()=>e(n,{class:"header"},{default:()=>{var s;return[t.content||((s=l.default)==null?void 0:s.call(l))]}})}}),or=E({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(t,{slots:l}){let n=t.as||"a";t.header&&(n="div"),t.as==="router-link"&&(n=_(t.as));const s=D(()=>G(t.color,t.position,A(t.action,"action"),A(t.active,"active"),A(t.browse,"browse"),A(t.disabled,"disabled"),A(t.header,"header"),A(t.link,"link"),Be(t.fitted,"fitted"),"item"));return()=>e(n,{class:s.value},{default:()=>{var r;return[t.name||((r=l.default)==null?void 0:r.call(l))]}})}}),ur=E({name:"SuiMenuMenu",props:{position:String},setup(t){const{position:l}=t;return{computedClass:D(()=>G(l,"menu"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),jk={install(t){t.component(nr.name,nr),t.component(sr.name,sr),t.component(or.name,or),t.component(ur.name,ur)}},rr=E({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.color,t.size,A(t.compact,"compact"),A(t.error,"error"),A(t.floating,"floating"),A(t.hidden,"hidden"),A(t.icon,"icon"),A(t.info,"info"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.success,"success"),A(t.visible,"visible"),A(t.warning,"warning"),Be(t.attached,"attached"),"message"))}},render(){var t,l;return e("div",{class:this.computedClass},[(this.header||this.content)&&e(rs,null,{default:()=>[e(ds,null,{default:()=>[this.header]}),e("p",null,[this.content])]}),(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),rs=E({name:"SuiMessageContent",render(){var t,l;return j("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ds=E({name:"SuiMessageHeader",render(){var t,l;return j("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),dr=E({name:"SuiMessageItem",render(){var t,l;return j("li",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),cr=E({name:"SuiMessageList",render(){var t,l;return j("ul",{class:"list"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qk={install(t){t.component(rr.name,rr),t.component(rs.name,rs),t.component(ds.name,ds),t.component(dr.name,dr),t.component(cr.name,cr)}},mr=E({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.color,t.size,A(t.celled,"celled"),A(t.collapsing,"collapsing"),A(t.definition,"definition"),A(t.fixed,"fixed"),A(t.inverted,"inverted"),A(t.selectable,"selectable"),A(t.singleLine,"single line"),A(t.stackable,"stackable"),A(t.striped,"striped"),A(t.structured,"structured"),A(t.unstackable,"unstackable"),Be(t.attached,"attached"),Be(t.basic,"basic"),Be(t.compact,"compact"),Be(t.padded,"padded"),qt(t.columns,"column"),"table"))}},render(){var t,l;return e("table",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),pr=E({name:"SuiTableBody",render(){var t,l;return j("tbody",{},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),fr=E({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>G(t.color,A(t.active,"active"),A(t.collapsing,"collapsing"),A(t.disabled,"disabled"),A(t.error,"error"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.selectable,"selectable"),A(t.singleLine,"single line"),A(t.warning,"warning"),Re(t.verticalAlign,"aligned"),Re(t.marked,"marked"),nl(t.textAlign)))}},render(){var t,l,n,s;return this.computedClass?e("td",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("td",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),gr=E({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(t){const{fullWidth:l}=t;return{computedClass:D(()=>G(A(l,"full-width")))}},render(){var t,l,n,s;return this.computedClass?j("tfoot",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):j("tfoot",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),hr=E({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(t){return{computedClass:D(()=>G(A(t.fullWidth,"full-width")))}},render(){var t,l,n,s;return this.computedClass?j("thead",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):j("thead",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),_r=E({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(t){return{computedClass:D(()=>G(A(t.singleLine,"single line"),Re(t.textAlign,"aligned"),qt(t.width,"wide")))}},render(){var t,l,n,s;return this.computedClass?e("th",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("th",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),br=E({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>G(t.color,A(t.active,"active"),A(t.disabled,"disabled"),A(t.error,"error"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.warning,"warning"),Re(t.textAlign,"aligned"),Re(t.verticalAlign,"aligned")))}},render(){var t,l,n,s;return this.computedClass?e("tr",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("tr",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Uk={install(t){t.component(mr.name,mr),t.component(pr.name,pr),t.component(fr.name,fr),t.component(gr.name,gr),t.component(hr.name,hr),t.component(_r.name,_r),t.component(br.name,br)}},Yk=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:Nk,Form:Ok,Grid:Hk,Menu:jk,Message:qk,Table:Uk},Symbol.toStringTag,{value:"Module"})),vr=E({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(t){return{computedClass:D(()=>G("ui",t.unit,A(t.centered,"centered"),A(!!t.test,"test"),"ad"))}},render(){var t,l,n,s;return this.$props.test?j("div",{class:this.computedClass,"data-text":this.$props.test},(l=(t=this.$slots).default)==null?void 0:l.call(t)):j("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Jk={install(t){t.component(vr.name,vr)}},yr=E({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.color,A(t.centered,"centered"),A(t.fluid,"fluid"),A(t.horizontal,"horizontal"),A(t.link,"link"),A(t.raised,"raised"),"card"))}},render(){var t,l,n,s;return this.$props.href||this.$props.link?j("a",{class:this.computedClass,href:this.$slots.href},(l=(t=this.$slots).default)==null?void 0:l.call(t)):j("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Cr=E({name:"SuiCardContent",props:{extra:Boolean},setup(t){return{computedClass:D(()=>G(A(t.extra,"extra"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),wr=E({name:"SuiCardDescription",props:{textAlign:String},setup(t){return{computedClass:D(()=>G(Re(t.textAlign,"aligned"),"description"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Sr=E({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(t){return{computedClass:D(()=>G("ui",A(t.centered,"centered"),A(t.doubling,"doubling"),A(t.inverted,"inverted"),A(t.stackable,"stackable"),qt(t.itemsPerRow,""),"cards"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ar=E({name:"SuiCardHeader",props:{textAlign:String},setup(t){return{computedClass:D(()=>G(Re(t.textAlign,"aligned"),"header"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),kr=E({name:"SuiCardMeta",render(){var t,l;return j("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Gk={install(t){t.component(yr.name,yr),t.component(Cr.name,Cr),t.component(wr.name,wr),t.component(Sr.name,Sr),t.component(Ar.name,Ar),t.component(kr.name,kr)}},Tr=E({name:"SuiComment",render(){var t,l;return j("div",{class:"comment"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),$r=E({name:"SuiCommentAction",props:{active:Boolean},setup(t){const{active:l}=t;return{computedClass:D(()=>G(A(l,"active")))}},render(){var t,l,n,s;return this.computedClass?j("a",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):j("a",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),xr=E({name:"SuiCommentActions",render(){var t,l;return j("div",{class:"actions"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Br=E({name:"SuiCommentAuthor",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return j(n,{class:"author"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Er=E({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let t=this.$props.as||"div";return j(t,{class:"avatar"},j("img",{src:this.$props.src}))}}),Rr=E({name:"SuiCommentContent",render(){var t,l;return j("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Pr=E({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(t){return{computedClass:D(()=>G("ui",t.size,A(t.collapsed,"collapsed"),A(t.inverted,"inverted"),A(t.minimal,"minimal"),A(t.threaded,"threaded"),"comments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),zr=E({name:"SuiCommentMetadata",render(){var t,l;return j("div",{class:"metadata"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Mr=E({name:"SuiCommentText",render(){var t,l;return j("div",{class:"text"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Wk={install(t){t.component(Tr.name,Tr),t.component($r.name,$r),t.component(xr.name,xr),t.component(Br.name,Br),t.component(Er.name,Er),t.component(Rr.name,Rr),t.component(Pr.name,Pr),t.component(zr.name,zr),t.component(Mr.name,Mr)}},Dr=E({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(t){return{computedClass:D(()=>G("ui",t.size,A(t.inverted,"inverted"),"feed"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ir=E({name:"SuiFeedContent",render(){var t,l;return j("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Fr=E({name:"SuiFeedDate",render(){var t,l;return j("div",{class:"date"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Vr=E({name:"SuiFeedEvent",render(){var t,l;return j("div",{class:"event"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Nr=E({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(t){const{images:l,text:n}=t;return{computedClass:D(()=>G(A(l,"images"),A(n,"text"),"extra"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Lr=E({name:"SuiFeedLabel",render(){var t,l;return j("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Or=E({name:"SuiFeedLike",render(){var t,l;return j("a",{class:"like"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Hr=E({name:"SuiFeedMeta",render(){var t,l;return j("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),jr=E({name:"SuiFeedSummary",render(){var t,l;return j("div",{class:"summary"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qr=E({name:"SuiFeedUser",render(){var t,l;return j("a",{class:"user"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Kk={install(t){t.component(Dr.name,Dr),t.component(Ir.name,Ir),t.component(Fr.name,Fr),t.component(Vr.name,Vr),t.component(Nr.name,Nr),t.component(Lr.name,Lr),t.component(Or.name,Or),t.component(Hr.name,Hr),t.component(jr.name,jr),t.component(qr.name,qr)}},Ur=E({name:"SuiItem",render(){var t,l;return j("div",{class:"item"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Yr=E({name:"SuiItemContent",props:{verticalAlign:String},setup(t){const{verticalAlign:l}=t;return{computedClass:D(()=>G(Re(l,"aligned"),"content"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Jr=E({name:"SuiItemDescription",render(){var t,l;return j("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Gr=E({name:"SuiItemExtra",render(){var t,l;return j("div",{class:"extra"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Wr=E({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(t){return{computedClass:D(()=>G("ui",A(t.divided,"divided"),A(t.inverted,"inverted"),A(t.link,"link"),A(t.unstackable,"unstackable"),Be(t.relaxed,"relaxed"),"items"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Kr=E({name:"SuiItemHeader",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return j(n,{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Xr=E({name:"SuiItemImage",props:{size:String},setup(t){return{computedClass:D(()=>G(t.size,"image"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Qr=E({name:"SuiItemMeta",render(){var t,l;return j("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Xk={install(t){t.component(Ur.name,Ur),t.component(Yr.name,Yr),t.component(Jr.name,Jr),t.component(Gr.name,Gr),t.component(Wr.name,Wr),t.component(Kr.name,Kr),t.component(Xr.name,Xr),t.component(Qr.name,Qr)}},xa=E({name:"SuiStatisticLabel",props:{content:String},render(){var t,l;return this.$props.content?j("div",{class:"label"},this.$props.content):j("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ba=E({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(t){return{computedClass:D(()=>G(A(t.text,"text"),"value"))}},render(){var t,l;return this.$props.content?j("div",{class:this.computedClass},this.$props.content):j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Zr=E({name:"SuiStatistic",components:{StatisticLabel:xa,StatisticValue:Ba},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(t){const l=Pe("ui",!0);return{computedClass:D(()=>G(l&&"ui",t.color,t.size,A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),A(t.text,"text"),Be(t.floated,"floated"),"statistic"))}},render(){var t,l,n,s,r,c;let f=[];return this.$props.value&&f.push(j(Ba,{content:this.$props.value},(l=(t=this.$slots).default)==null?void 0:l.call(t))),this.$props.label&&f.push(j(xa,{content:this.$props.label},(s=(n=this.$slots).default)==null?void 0:s.call(n))),j("div",{class:this.computedClass},f.length>0?f:(c=(r=this.$slots).default)==null?void 0:c.call(r))}}),ed=E({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(t){return tt("ui",!1),{computedClass:D(()=>G("ui",t.color,t.size,A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),qt(t.widths,""),"statistics"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Qk={install(t){t.component(Zr.name,Zr),t.component(ed.name,ed),t.component(xa.name,xa),t.component(Ba.name,Ba)}},Zk=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:Jk,Card:Gk,Comment:Wk,Feed:Kk,Item:Xk,Statistic:Qk},Symbol.toStringTag,{value:"Module"})),td=E({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(t){const l=t.multiple?N([]):N(-1),n=r=>t.multiple?l.value.includes(r):l.value===r,s=r=>{const c=n(r);t.multiple?c?l.value=l.value.filter(f=>f!==r):l.value.push(r):l.value=c?-1:r};return tt("isTabActive",n),tt("updateActiveIndex",s),{computedClass:D(()=>G("ui",A(t.fluid,"fluid"),A(t.inverted,"inverted"),A(t.styled,"styled"),"accordion"))}},render(){var t,l;const n=s=>(s.forEach((r,c)=>{r.props.index=c}),s);return e("div",{class:this.computedClass},[n((l=(t=this.$slots).default)==null?void 0:l.call(t))])}}),id=E({name:"SuiAccordionAccordion",render(){var t,l;return j("div",{class:"accordion"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),cs=E({name:"SuiAccordionContent",props:{active:Boolean},setup(t){return{computedClass:D(()=>G(A(t.active,"active"),"content"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ld=E({name:"SuiAccordionTab",props:{index:Number,title:String},setup(t){const l=Pe("isTabActive"),n=Pe("updateActiveIndex"),s=D(()=>G(A(l(t.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:n,titleClass:s}},render(){return e(Ce,null,[e("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[e(xt,{name:"dropdown"},null),this.title]),e(cs,{active:this.isTabActive(this.index)},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})])}}),ad=E({name:"SuiAccordionTitle",props:{active:Boolean},setup(t){return{computedClass:D(()=>G(A(t.active,"active"),"title"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),eT={install(t){t.component(td.name,td),t.component(id.name,id),t.component(cs.name,cs),t.component(ld.name,ld),t.component(ad.name,ad)}},tT=(t,l,n)=>{t.clickOutside=s=>{t===s.target||t.contains(s.target)||l.value(s,t)},document.body.addEventListener("click",t.clickOutside)},iT=(t,l,n)=>{document.body.removeEventListener("click",t.clickOutside)},io={mounted:tT,unmounted:iT};function lT(t,l={}){const n=N(t.value?"open":"closed"),s=()=>n.value=t.value?"open":"closed";at(t,p=>{n.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",s,!0)},c=p=>{p&&p.removeEventListener("animationend",s)},f=D((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:c,computeAnimationClass:f}}const aT=E({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(t,{emit:l}){const n=N(!1),s=()=>{t.disabled||(n.value=!0)},r=()=>n.value=!1,c=()=>{t.disabled||l("select-day",t.date)},f=()=>{let o=new Date;return o.getFullYear()===t.date.year&&o.getMonth()===t.date.month&&o.getDate()===t.date.day},p=D(()=>G("link",A(n.value,"focus"),A(t.active&&!t.disabled,"active"),A(t.disabled,"adjacent disabled"),A(f(),"today")));return{onMouseEnter:s,onMouseLeave:r,onClick:c,computedClass:p}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:vt(this.onClick,["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),nT=E({name:"SuiCalendarDateTable",setup(){const{calendarDays:t,updateSelectMode:l,set:n,add:s,subtract:r,selectedDate:c,setSelectedDate:f,selectType:p,updateVisible:o,formatDate:u}=Pe(si);return{calendarDays:t,isEqualDay:g=>{if(!c.value)return!1;const m=c.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(n(g.year,"years"),n(g.month,"months"),n(g.day,"days"),p.value==="date"){let m=new Date(g.year,g.month,g.day);f(m),o(!1);return}l("hour")},updateSelectMode:l,formatDate:u,add:s,subtract:r}},render(){const t=()=>this.calendarDays.map((l,n)=>e("tr",null,[l.map(s=>e(aT,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return e("table",{class:"ui celled center aligned unstackable table day seven column"},[e("thead",null,[e("tr",null,[e("th",{colspan:7},[e("span",{class:"link",onClick:vt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"months")},[e("i",{class:"chevron right icon"},null)])])]),e("tr",null,[e("th",null,[a("S")]),e("th",null,[a("M")]),e("th",null,[a("T")]),e("th",null,[a("W")]),e("th",null,[a("T")]),e("th",null,[a("F")]),e("th",null,[a("S")])])]),e("tbody",null,[t()])])}}),fe=E({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(t){const l=N(!1),n=()=>l.value=!0,s=()=>l.value=!1,r=D(()=>G("link",A(t.active,"active"),A(t.today,"today"),A(l.value,"focus")));return{onMouseEnter:n,onMouseLeave:s,computedClass:r}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:vt(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),sT=E({name:"SuiCalendarMonthTable",setup(){const{state:t,set:l,add:n,subtract:s,selectedDate:r,updateSelectMode:c}=Pe(si);return{state:t,add:n,subtract:s,updateSelectMode:c,isActive:f=>r.value?t.year===r.value.getFullYear()&&t.month===f:!1,isThisMonth:f=>{let p=new Date;return f===p.getMonth()&&t.year===p.getFullYear()},onClickCell:f=>{l(f,"months"),c("day")}}},render(){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((n,s)=>e("tr",null,[e(fe,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[t[s*3]]}),e(fe,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[t[s*3+1]]}),e(fe,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[t[s*3+2]]})]));return e("table",{class:"ui celled center aligned unstackable table month three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:vt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"years")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[l()])])}}),oT=E({name:"SuiCalendarYearTable",setup(t){const{state:l,set:n,add:s,subtract:r,selectedDate:c,updateSelectMode:f}=Pe(si),p=()=>s(10,"years"),o=()=>r(10,"years"),u=D(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:f,moveNextTwelveYears:p,movePrevTwelveYears:o,headerStartYear:u,isActive:g=>c.value?g===c.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{n(g,"years"),f("day")}}},render(){return e("table",{class:"ui celled center aligned unstackable table year three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:vt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,a(" - "),this.headerStartYear+11]),e("span",{class:"prev link",onClick:this.movePrevTwelveYears},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.moveNextTwelveYears},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(fe,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),e(fe,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),e(fe,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),e("tr",null,[e(fe,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),e(fe,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),e(fe,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),e("tr",null,[e(fe,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),e(fe,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),e(fe,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),e("tr",null,[e(fe,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),e(fe,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),e(fe,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),uT=E({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:t,state:l,set:n,add:s,subtract:r,formatDate:c,selectedDate:f}=Pe(si);return{updateSelectMode:t,formatDate:c,onPrevClick:()=>r(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:p=>{n(p,"hours"),t("minute")},isActive:p=>{if(!f.value)return!1;let o=f.value.getFullYear(),u=f.value.getMonth(),g=f.value.getDate(),m=f.value.getHours();return l.year===o&&l.month===u&&l.day===g&&p===m}}},render(){return e("table",{class:"ui celled center aligned unstackable table hour four column"},[e("thead",null,[e("tr",null,[e("th",{colspan:4},[e("span",{class:"link",onClick:vt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:this.onPrevClick},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.onNextClick},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(fe,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[a("12:00 AM")]}),e(fe,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[a("1:00 AM")]}),e(fe,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[a("2:00 AM")]}),e(fe,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[a("3:00 AM")]})]),e("tr",null,[e(fe,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[a("4:00 AM")]}),e(fe,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[a("5:00 AM")]}),e(fe,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[a("6:00 AM")]}),e(fe,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[a("7:00 AM")]})]),e("tr",null,[e(fe,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[a("8:00 AM")]}),e(fe,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[a("9:00 AM")]}),e(fe,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[a("10:00 AM")]}),e(fe,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[a("11:00 AM")]})]),e("tr",null,[e(fe,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[a("12:00 PM")]}),e(fe,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[a("1:00 PM")]}),e(fe,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[a("2:00 PM")]}),e(fe,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[a("3:00 PM")]})]),e("tr",null,[e(fe,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[a("4:00 PM")]}),e(fe,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[a("5:00 PM")]}),e(fe,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[a("6:00 PM")]}),e(fe,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[a("7:00 PM")]})]),e("tr",null,[e(fe,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[a("8:00 PM")]}),e(fe,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[a("9:00 PM")]}),e(fe,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[a("10:00 PM")]}),e(fe,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[a("11:00 PM")]})])])])}});function Ct(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!At(t)}const rT=E({name:"SuiCalendarMinuteTable",setup(){const{state:t,set:l,add:n,subtract:s,formatDate:r,updateSelectMode:c,updateVisible:f,selectedDate:p}=Pe(si);return{add:n,subtract:s,formatDate:r,updateSelectMode:c,getTimeLabel:o=>{let u=t.hour%12,g=t.hour>12?"PM":"AM",m=o.toString().padStart(2,"0");return t.hour===0?`12:${m} AM`:t.hour===12?`12:${m} PM`:`${u}:${m} ${g}`},onClickCell:o=>{l(o,"minutes"),p.value=new Date(t.year,t.month,t.day,t.hour,t.minute),f(!1)},isActive:o=>{if(!p.value)return!1;let u=p.value.getFullYear(),g=p.value.getMonth(),m=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return t.year===u&&t.month===g&&t.day===m&&t.hour===h&&o===v}}},render(){let t,l,n,s,r,c,f,p,o,u,g,m;return e("table",{class:"ui celled center aligned unstackable table minute three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:vt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"days")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(fe,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Ct(t=this.getTimeLabel(0))?t:{default:()=>[t]}),e(fe,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Ct(l=this.getTimeLabel(5))?l:{default:()=>[l]}),e(fe,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Ct(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),e("tr",null,[e(fe,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Ct(s=this.getTimeLabel(15))?s:{default:()=>[s]}),e(fe,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Ct(r=this.getTimeLabel(20))?r:{default:()=>[r]}),e(fe,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Ct(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),e("tr",null,[e(fe,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Ct(f=this.getTimeLabel(30))?f:{default:()=>[f]}),e(fe,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Ct(p=this.getTimeLabel(35))?p:{default:()=>[p]}),e(fe,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Ct(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),e("tr",null,[e(fe,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Ct(u=this.getTimeLabel(45))?u:{default:()=>[u]}),e(fe,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Ct(g=this.getTimeLabel(50))?g:{default:()=>[g]}),e(fe,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Ct(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),dT=E({name:"SuiCalendarBody",setup(){const t=N(null),{visible:l,selectMode:n}=Pe(si),{setupAnimation:s,removeAnimation:r,computeAnimationClass:c}=lT(l);ni(()=>s(t.value)),xi(()=>r(t.value));const f=D(()=>G("ui popup calendar","bottom left","transition",c.value));return{rootRef:t,computedClass:f,selectMode:n}},render(){const t=()=>{switch(this.selectMode){case"day":return e(nT,null,null);case"month":return e(sT,null,null);case"year":return e(oT,null,null);case"hour":return e(uT,null,null);case"minute":return e(rT,null,null)}};return e("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[t()])}}),cT=E({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(t){const{visible:l,updateVisible:n,updateSelectMode:s,set:r,state:c,formatCalendarDate:f}=Pe(si);return{visible:l,formatCalendarDate:f,onClick:()=>{l.value||(s("day"),t.value&&(r(t.value.getFullYear(),"years"),r(t.value.getMonth(),"months"))),n(!l.value)}}},render(){return e("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),mT=(t,l)=>{let n=new Date;n.setDate(1),n.setMonth(l),n.setFullYear(t);let s=n.getDay();return s>=7?s-7:s},pT=(t,l)=>{let n,s;return l===0?(n=11,s=t-1):(n=l-1,s=t),32-new Date(s,n,32).getDate()},kn=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t];function fT(){const t=N(!1),l=(y=!1)=>t.value=y,n=new Date;function s(y){if(!y)return;let S=y.getFullYear(),T=kn(y.getMonth()),b=y.getDate(),w=y.getHours(),k=y.getMinutes(),$=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let B=k.toString().padStart(2,"0");return`${T} ${b}, ${S} ${w}:${B} ${$}`}const r=N("default"),c=N("day");function f(y){c.value=y}const p=N(null),o=y=>{p.value=y},u=Ht({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),g=(y,S)=>{switch(S){case"years":u.year=y;break;case"months":u.month=y;break;case"days":u.day=y;break;case"hours":u.hour=y;break;case"minutes":u.minute=y}},m=(y,S)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(S){case"years":T.setFullYear(T.getFullYear()+y);break;case"months":T.setMonth(T.getMonth()+y);break;case"days":T.setDate(T.getDate()+y);break;case"hours":T.setHours(T.getHours()+y);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},h=(y,S)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(S){case"years":T.setFullYear(T.getFullYear()-y);break;case"months":T.setMonth(T.getMonth()-y);break;case"days":T.setDate(T.getDate()-y);break;case"hours":T.setHours(T.getHours()-y);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},v=(y="default")=>y==="date"?`${kn(u.month)} ${u.year}`:`${kn(u.month)} ${u.day}, ${u.year}`,d=D(()=>{let y=u.month,S=u.year;y>11&&(y=y%11-1,S+=1);let T=[],b=mT(S,y),w=32-new Date(S,y,32).getDate(),k=pT(S,y),$=1;for(let B=0;B<6;B++){let z=[];if(B===0){for(let P=k-b+1;P<=k;P++){let F=y===0?11:y-1,U=y===0?S-1:S;z.push({day:P,month:F,year:U,currentMonth:!1})}let M=7-z.length;for(let P=0;P<M;P++)z.push({day:$,month:y,year:S,currentMonth:!0}),$++}else for(let M=0;M<7;M++){if($>w){let P=y===11?0:y+1,F=y===11?S+1:S;z.push({day:$-w,month:P,year:F,currentMonth:!1})}else z.push({day:$,month:y,year:S,currentMonth:!0});$++}T.push(z)}return T});return{visible:t,updateVisible:l,calendarDays:d,formatCalendarDate:s,selectMode:c,updateSelectMode:f,selectType:r,selectedDate:p,setSelectedDate:o,state:u,set:g,add:m,subtract:h,formatDate:v}}const si=Symbol("useCalendar"),nd=E({name:"SuiCalendar",directives:{clickoutside:io},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(t,{emit:l}){const n=fT();tt(si,n);const{updateVisible:s,selectedDate:r}=n;return at(r,c=>{l("update:modelValue",c)}),{updateVisible:s}},render(){return jl(e("div",{class:"ui calendar"},[e("div",{class:"ui input left icon"},[e(dT,null,null),e("i",{class:"calendar icon"},null),e(cT,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[Ua("clickoutside"),()=>this.updateVisible(!1)]])}}),gT={install:t=>{t.component(nd.name,nd)}},sd=E({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(t,{emit:l}){const n=D(()=>G("ui",!t.label&&"fitted",A(t.disabled,"disabled"),A(t.indeterminate,"indeterminate"),A(t.radio,"radio"),A(t.readOnly,"read-only"),A(t.slider,"slider"),A(t.toggle,"toggle"),"checkbox")),s=D(()=>Array.isArray(t.modelValue)?t.modelValue.includes(t.value):t.modelValue);return{computedClass:n,checked:s,onClick:r=>{if(t.disabled||t.readOnly)return;let c;t.value?s.value?c=t.modelValue.filter(f=>t.value!==f):c=t.modelValue?[...t.modelValue,t.value]:[t.value]:c=!t.modelValue,l("change",r),l("click",r),l("update:modelValue",c)}}},render(){return e("div",{class:this.computedClass,onClick:this.onClick},[e("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),e("label",null,[this.label])])}}),hT={install(t){t.component(sd.name,sd)}},od=E({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(t){return{computedClass:D(()=>G("ui",A(t.active,"active"),A(t.inverted,"inverted"),A(t.page,"page"),A(t.simple,"simple"),Re(t.verticalAlign,"aligned"),"dimmer"))}},render(){var t,l;return j("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ud=E({name:"SuiDimmerDimmable",components:{Segment:$a},props:{blurring:Boolean},setup(t){return{computedClass:D(()=>G(A(t.blurring,"blurring"),"dimmable"))}},render(){var t,l;return j($a,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),_T={install(t){t.component(od.name,od),t.component(ud.name,ud)}},bT=(t,l)=>t.map(n=>n[l]),vT=E({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(t){return{computedClass:D(()=>G(A(t.filtered,"filtered"),A(!t.text&&!t.item||Array.isArray(t.item)&&t.item.length===0,"default"),"text"))}},render(){var t,l;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:f}=this.item;n=e(Ce,null,[c&&e("i",{class:`${c} flag`},null),f])}else n=this.item;else n=this.text||this.placeholder;const s=typeof this.item=="object"?(t=this.item)==null?void 0:t.image:null,r=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return e(Ce,null,[e("div",{class:this.computedClass},[s&&e(Ta,s,null),r&&e(Zi,r,null),n]),e("i",{class:`${this.icon} icon`},null),this.$props.clearable&&e("i",{class:"remove icon",onClick:vt(()=>this.$emit("remove"),["stop"])},null)])}}),yT=t=>{const l=Ht({visible:!1,animating:!1,direction:"down",multiple:t.multiple});return at(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function CT(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!At(t)}const rd=E({name:"SuiDropdown",directives:{clickoutside:io},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(t,{emit:l}){const n=yT(t);tt("useDropdown",n);const{state:s,show:r,hide:c}=n,f=D(()=>G("ui",A(t.button,"button"),A(t.clearable,"clearable"),A(t.compact,"compact"),A(t.floating,"floating"),A(t.fluid,"fluid"),A(!!t.icon,"icon"),A(t.inline,"inline"),A(t.item,"item"),A(t.labeled,"labeled"),A(t.multiple,"multiple"),A(t.search,"search"),A(t.scrolling,"scrolling"),A(t.selection,"selection"),A(t.simple,"simple"),Be(t.pointing,"pointing"),"dropdown",A(s.visible,"active visible"),A(s.direction==="up","upward"))),p=()=>{var S;if(s.visible)return c();(S=h.value)==null||S.focus(),r()},o=()=>{t.search&&h.value&&h.value.focus(),r()},u=()=>c(),g=N(""),m=D(()=>{const S=g.value.toLowerCase();return t.options.filter(T=>{const b=typeof T=="object"?T.text:T,w=b.toLowerCase().includes(S);if(!t.multiple)return w;if(Array.isArray(t.modelValue)){const k=typeof T=="object"?bT(t.modelValue,"text").includes(b):t.modelValue.includes(b);return w&&!k}return w})}),h=N(null),v=S=>g.value=S.target.value,d=S=>{var T;if(g.value="",t.search&&((T=h.value)==null||T.focus()),t.multiple){let b=Array.isArray(t.modelValue)?[...t.modelValue,S]:[S];return l("update:modelValue",b)}return l("update:modelValue",S)},y=S=>{if(Array.isArray(t.modelValue)){const T=t.modelValue.findIndex(b=>b===S);if(T>-1){let b=Object.assign(t.modelValue);b.splice(T,1),l("update:modelValue",b)}}};return tt("selection",t.selection),{computedClass:f,onClick:p,openMenu:o,closeMenu:u,filteredText:g,filteredOptions:m,inputRef:h,onInput:v,onSelect:d,removeItem:y}},render(){var t,l;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(f=>typeof f=="object"?e("a",{class:"ui label"},[f.flag&&e("i",{class:`${f.flag} flag`},null),f.text,e("i",{class:"delete icon",onClick:vt(()=>this.removeItem(f),["stop"])},null)]):e("a",{class:"ui label"},[f,e("i",{class:"delete icon",onClick:vt(()=>this.removeItem(f),["stop"])},null)]))},s=()=>this.filteredOptions.filter(f=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(f):!0).map(f=>e(ms,{item:f,active:this.$props.modelValue&&typeof f=="object"?f.text===this.$props.modelValue.text:f===this.$props.modelValue,text:typeof f=="object"?f.text:f,flag:typeof f=="object"&&Object.keys(f).includes("flag")?f.flag:"",image:f.image,label:f.label,disabled:f.disabled,onSelect:this.onSelect},null)),r=()=>{let f={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return e(vT,Bi(f,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let f;return e(ps,{search:this.$props.searchInMenu,onSearch:this.onInput},CT(f=s())?f:{default:()=>[f]})};return jl(e("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&e("input",{ref:f=>this.inputRef=f,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:f=>this.onInput(f)},null),this.search&&this.multiple&&e("span",{class:"sizer"},null),r(),((l=(t=this.$slots).default)==null?void 0:l.call(t))||c()]),[[Ua("clickoutside"),this.closeMenu]])}}),ms=E({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(t,{emit:l}){const{state:n,hide:s}=Pe("useDropdown");return{computedClass:D(()=>G(A(t.active,"active"),A(t.disabled,"disabled"),"item")),onClick:()=>{n.multiple||s(),l("select",t.item?t.item:t.text)}}},render(){return e("div",{class:this.computedClass,onClick:vt(this.onClick,["stop"])},[this.flag&&e("i",{class:`${this.flag} flag`},null),this.icon&&e("i",{class:`${this.icon} icon`},null),this.image&&e(Ta,this.image,null),this.label&&e(Zi,this.label,null),this.description&&e("span",{class:"description"},[this.description]),this.text])}}),ps=E({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(t,{emit:l,slots:n}){const{state:s}=Pe("useDropdown"),r=N(null),c=D(()=>{let p=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return G("menu","transition",A(s.visible,"visible"),A(!s.visible&&!s.animating,"hidden"),A(s.animating,p()))});at(()=>s.visible,p=>{if(!p||!r.value)return;let o=r.value.parentElement;const{top:u,height:g}=o==null?void 0:o.getBoundingClientRect(),m=u-f.value.length*37,h=document.documentElement.clientHeight-u-g-f.value.length*37;s.direction=m>h?"up":"down"});const f=D(()=>{var p;let o=[],u=(p=n.default)==null?void 0:p.call(n);return u&&u.forEach(g=>{g.type.name==="SuiSelectItem"&&o.push(g)}),o});return{container:r,computedClass:c,onSearchInput:p=>l("search",p)}},render(){var t,l,n,s;const r=()=>e(Ce,null,[e("div",{class:"ui left icon input",onClick:vt(()=>{},["stop"])},[e("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),e("i",{class:"search icon"},null)]),e("div",{class:"ui divider"},null)]);return e("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&e("div",{class:"header"},[(l=(t=this.$slots).header)==null?void 0:l.call(t)]),this.$props.search&&r(),(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),wT={install(t){t.component(rd.name,rd),t.component(ms.name,ms),t.component(ps.name,ps)}},dd=E({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(t){const l=N(t.active),n=()=>{l.value=!l.value},s=()=>t.source==="youtube"?[`//www.youtube.com/embed/${t.id}`,"?autohide=true",`&amp;autoplay=${t.autoplay}`,"&amp;jsapi=false"].join(""):t.url,r=D(()=>G("ui",t.aspectRatio,A(l.value,"active"),"embed"));return{active:l,getSrc:s,clickHandler:n,computedClass:r}},render(){let t=[j("i",{class:"video play icon"}),j("img",{class:"placeholder",src:this.placeholder})];return this.active&&t.push(j("div",{class:"embed"},j("iframe",{src:this.getSrc()}))),j("div",{class:this.computedClass,onClick:this.clickHandler},t)}}),ST={install(t){t.component(dd.name,dd)}};function AT(t){return ks()?(Fd(t),!0):!1}function Om(t){return typeof t=="function"?t():Xe(t)}const Hm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const kT=Object.prototype.toString,TT=t=>kT.call(t)==="[object Object]",ca=()=>{},$T=xT();function xT(){var t,l;return Hm&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((l=window==null?void 0:window.navigator)==null?void 0:l.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function hl(t){var l;const n=Om(t);return(l=n==null?void 0:n.$el)!=null?l:n}const jm=Hm?window:void 0;function Tn(...t){let l,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,l=jm):[l,n,s,r]=t,!l)return ca;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const c=[],f=()=>{c.forEach(g=>g()),c.length=0},p=(g,m,h,v)=>(g.addEventListener(m,h,v),()=>g.removeEventListener(m,h,v)),o=at(()=>[hl(l),Om(r)],([g,m])=>{if(f(),!g)return;const h=TT(m)?{...m}:m;c.push(...n.flatMap(v=>s.map(d=>p(g,v,d,h))))},{immediate:!0,flush:"post"}),u=()=>{o(),f()};return AT(u),u}let cd=!1;function BT(t,l,n={}){const{window:s=jm,ignore:r=[],capture:c=!0,detectIframe:f=!1}=n;if(!s)return ca;$T&&!cd&&(cd=!0,Array.from(s.document.body.children).forEach(g=>g.addEventListener("click",ca)),s.document.documentElement.addEventListener("click",ca));let p=!0;const o=g=>r.some(m=>{if(typeof m=="string")return Array.from(s.document.querySelectorAll(m)).some(h=>h===g.target||g.composedPath().includes(h));{const h=hl(m);return h&&(g.target===h||g.composedPath().includes(h))}}),u=[Tn(s,"click",g=>{const m=hl(t);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(p=!o(g)),!p){p=!0;return}l(g)}},{passive:!0,capture:c}),Tn(s,"pointerdown",g=>{const m=hl(t);p=!o(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),f&&Tn(s,"blur",g=>{setTimeout(()=>{var m;const h=hl(t);((m=s.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&l(g)},0)})].filter(Boolean);return()=>u.forEach(g=>g())}function qm(t,l="scale"){const n=N(t.modelValue?"open":"closed");return at(()=>t.modelValue,s=>{n.value=s?"opening":"closing"}),{animationClasses:D(()=>{switch(n.value){case"opening":return`animating ${l} in`;case"open":return"visible active";case"closing":return`visible active animating ${l} out`;case"closed":return"hidden"}}),isClosed:D(()=>n.value==="closed"),onAnimationEnd:()=>n.value=t.modelValue?"open":"closed"}}const ET=E({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(t){const{animationClasses:l,isClosed:n,onAnimationEnd:s}=qm(t,"fade"),r=D(()=>G("ui","page modals dimmer transition",A(t.inverted,"inverted"),l.value)),c=D(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),f=D(()=>G("dimmable","dimmed",A(t.blurring,"blurring")));return at(()=>t.modelValue,p=>{if(p){document.body.classList.add(...f.value.split(" "));return}document.body.classList.remove(...f.value.split(" "))}),{className:r,style:c,onAnimationEnd:s}},render(){var t,l;return e("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),md=E({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(t,{emit:l}){const n=N(),{animationClasses:s,isClosed:r}=qm(t),c=D(()=>G("ui",t.size,A(t.basic,"basic"),A(t.overlay,"overlay"),A(t.fullscreen,"fullscreen"),"modal","transition",s.value)),f=D(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>l("update:modelValue",!1);return BT(n,()=>t.closable&&l("update:modelValue",!1)),{computedClass:c,style:f,close:p,modalRef:n}},render(){return e(Ka,{to:"body"},{default:()=>[e(ET,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var t,l;return[e("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&e("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(t=this.$slots).default)==null?void 0:l.call(t)])]}})]})}}),pd=E({name:"SuiModalActions",render(){var t,l;return e("div",{class:"actions"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),fd=E({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(t){return{computedClass:D(()=>G(A(t.image,"image"),A(t.scrolling,"scrolling"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),gd=E({name:"SuiModalDescription",render(){var t,l;return j("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),hd=E({name:"SuiModalHeader",render(){var t,l;return j("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),RT={install(t){t.component(md.name,md),t.component(pd.name,pd),t.component(fd.name,fd),t.component(gd.name,gd),t.component(hd.name,hd)}},PT=t=>{const l=N(!1),n=In(t,"position"),s=N(null),r=In(t,"trigger"),c=()=>{l.value=!0,ll(()=>p())},f=()=>{l.value=!1},p=()=>{if(!s.value||!r.value)return;let o=0,u=0;const g=s.value,m=r.value.$el;g.style.transform=`translate(${o}px, ${u}px)`;const{top:h,left:v,width:d,height:y}=m.getBoundingClientRect(),S=g.getBoundingClientRect(),{pageXOffset:T,pageYOffset:b}=window;if(n.value.includes("top")?(o=T+v,u=b+h-g.offsetTop-g.offsetHeight):(o=v,u=h+y-S.top),n.value.includes("right")){const w=d-S.width;o=v+w}if(n.value.includes("center")){const w=d/2-S.width/2;o=v+w}n.value==="right center"&&(o=v+d,u=h+y/2-S.top-S.height/2),n.value==="left center"&&(o=v-S.width,u=h+y/2-S.top-S.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${o}px, ${u}px)`};return{show:l,showPopup:c,hidePopup:f,placement:n,popupRef:s,triggerRef:r}},_d=E({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(t,{slots:l}){const{show:n,showPopup:s,hidePopup:r,popupRef:c,triggerRef:f}=PT(t);Ls(()=>{var h,v,d;(h=f.value)!=null&&h.$el&&((v=f.value)==null||v.$el.addEventListener("mouseenter",s),(d=f.value)==null||d.$el.addEventListener("mouseleave",r))});const p=N(n.value?"open":"close");D(()=>p.value!=="closed"),at(()=>n.value,h=>{p.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=n.value?"open":"closed";ni(()=>{var h;(h=c.value)==null||h.addEventListener("animationend",u,!0)}),xi(()=>{var h;(h=c.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},m=D(()=>G("ignored ui",t.position,t.size,A(t.basic,"basic"),A(t.flowing,"flowing"),A(t.inverted,"inverted"),Be(t.wide,"wide"),"popup transition",o(p.value,"scale")));return()=>e(Ka,{to:"body"},{default:()=>{var h;return[e("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[e("div",{class:m.value,style:g},[t.header&&e("div",{class:"header"},[t.header]),e("div",{class:"content"},[t.content?t.content:(h=l.default)==null?void 0:h.call(l)])])])]}})}}),zT={install(t){t.component(_d.name,_d)}},MT=["top","bottom","left"],lo=()=>({attached:{type:String,validator:t=>MT.includes(t)}}),Um=t=>({attachedClasses:D(()=>G(t.attached,{attached:t.attached}))}),DT=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Ym=()=>({color:{type:String,validator:t=>DT.includes(t)}}),Jm=t=>({colorClasses:D(()=>G(t.inverted&&"inverted",t.color))}),Ea=E({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...lo(),...Ym()},setup(t){const{attachedClasses:l}=Um(t),{colorClasses:n}=Jm(t),s=D(()=>G("ui",n.value,t.size,A(t.active||t.indicating,"active"),A(t.disabled,"disabled"),A(t.error,"error"),A(t.indicating,"indicating"),A(t.success,"success"),A(t.warning,"warning"),l.value,"progress")),r=D(()=>G(Be(t.progress,"progress"))),c=D(()=>t.progress!=="centered"?{}:{right:0});return()=>e("div",{class:s.value,"data-percent":t.percent},[e("div",{class:"bar",style:`width: ${t.percent}%; transition-duration: 300ms;`},[t.progress&&e("div",{class:r.value,style:c.value},[`${t.percent}%`])]),t.label&&e("div",{class:"label"},[t.label])])}}),IT={install(t){t.component(Ea.name,Ea)}},FT=E({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(t){const l=Pe("rating",N(0)),n=Pe("updateRating"),s=Pe("selectedIndex",N(0)),r=Pe("updateSelectedIndex"),c=Pe("clearable",!1),f=Pe("disabled",!1),p=()=>{if(!f){if(c&&t.index===l.value){n(0),r(0);return}n(t.index)}},o=()=>{f||r(t.index)},u=D(()=>t.index<=l.value),g=D(()=>t.index<=s.value),m=D(()=>G(t.icon,A(u.value,"active"),A(g.value,"selected"),"icon"));return()=>e("i",{class:m.value,onClick:()=>p(),onMouseenter:()=>o()},null)}}),bd=E({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(t,{emit:l}){const n=N(t.modelValue||t.defaultRating),s=N(!1),r=N(0),c=g=>{n.value=g,l("update:modelValue",g),l("change",g)},f=g=>r.value=g,p=()=>{t.disabled||(s.value=!0)},o=()=>{t.disabled||(s.value=!1,f(0))},u=D(()=>G("ui",t.color,t.icon,t.size,A(t.disabled,"disabled"),"rating",A(s.value,"selected")));return tt("rating",n),tt("updateRating",c),tt("selectedIndex",r),tt("updateSelectedIndex",f),tt("clearable",t.clearable),tt("disabled",t.disabled),()=>e("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>o()},[[...Array(t.maxRating)].map((g,m)=>e(FT,{icon:t.icon,index:m+1},null))])}}),VT={install(t){t.component(bd.name,bd)}},vd=E({name:"SuiSearch",props:{icon:String,placeholder:String},setup(t){return()=>e("div",{class:"ui search"},[e("div",{class:"ui icon input"},[e("input",{type:"text",class:"prompt",placeholder:t.placeholder},null),e("i",{class:"search icon"},null)]),e("div",{class:"results"},null)])}}),NT={install(t){t.component(vd.name,vd)}},yd=E({name:"SuiSidebar",directives:{clickoutside:io},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(t,{emit:l}){const n=Ht({animating:!1}),s=D(()=>{const r=t.direction==="right"||t.direction==="left";return G("ui","sidebar",t.direction,t.animation,A(t.inverted,"inverted"),A(t.visible,"visible"),A(n.animating,"animating"),A(r,"vertical"),Be(t.icon,"icon"),"menu")});return at(()=>t.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),t.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:r=>{const c=r.path||r.composedPath&&r.composedPath();c&&c.find(f=>f.classList&&f.classList.contains("pusher"))&&t.visible&&l("update:visible",!1)}}},render(){var t,l;return jl(e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]),[[Ua("clickoutside"),this.onClickPusher]])}}),LT={install:t=>{t.component(yd.name,yd)}};class $n{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,n){return l.classList.contains(n)}}const Cd=E({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(t,{emit:l}){const n=D(()=>G("ui",t.color,t.size,A(t.disabled,"disabled"),A(t.inverted,"inverted"),A(t.reversed,"reversed"),A(t.vertical,"vertical"),Be(t.labeled,"labeled"),"slider")),s=()=>100*(t.modelValue[0]-t.min)/(t.max-t.min),r=()=>100*(t.modelValue[1]-t.min)/(t.max-t.min),c=D(()=>{if(t.range)return t.reversed&&!t.vertical?{right:s()+"%",width:r()-s()+"%"}:t.vertical?t.reversed?{bottom:s()+"%",height:r()-s()+"%"}:{top:s()+"%",height:r()-s()+"%"}:{left:s()+"%",width:r()-s()+"%"};let V=t.modelValue>t.max?t.max:t.modelValue;return t.reversed?t.vertical?{bottom:"0%",top:`${100-(V-t.min)/(t.max-t.min)*100}%`}:{right:"0%",left:`${100-(V-t.min)/(t.max-t.min)*100}%`}:t.vertical?{top:"0%",bottom:`${100-(V-t.min)/(t.max-t.min)*100}%`}:{left:"0%",right:`${100-(V-t.min)/(t.max-t.min)*100}%`}}),f=D(()=>{let V=t.range?t.modelValue[0]:t.modelValue>t.max?t.max:t.modelValue;return!t.reversed&&t.vertical?{top:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:t.reversed&&t.vertical?{top:"auto",bottom:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.reversed&&!t.vertical?{left:"auto",right:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{left:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),p=D(()=>{let V=t.modelValue[1]>t.max?t.max:t.modelValue[1];return t.reversed&&!t.vertical?{left:"auto",right:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.vertical?t.reversed?{top:"auto",bottom:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{top:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),o=D(()=>t.labels?t.labels:[...Array(t.max-t.min+1)].map((V,q)=>q*t.step+t.min)),u=()=>{var V,q;let ae=1,X=g(),Te=(t.vertical?(V=h.value)==null?void 0:V.clientHeight:(q=h.value)==null?void 0:q.clientWidth)||0,Oe=1;if(Te>0)for(;Te/X*Oe<100;)X%Oe||(ae=Oe),Oe+=1;return ae},g=()=>Math.round((t.max-t.min)/t.step),m=N(null),h=N(null),v=N(0),d=N(0),y=N(0),S=N(0),T=()=>{if(!m.value)return;let V=m.value.getBoundingClientRect();v.value=V.left+$n.getWindowScrollLeft(),d.value=V.top+$n.getWindowScrollTop(),y.value=m.value.offsetWidth,S.value=m.value.offsetHeight},b=N(0),w=V=>{let{pageX:q,pageY:ae}=V.touches?V.touches[0]:V,X,Te;t.vertical?X=(d.value+S.value-ae)*100/S.value:X=(q-v.value)*100/y.value,Te=(t.max-t.min)*(X/100)+t.min;const Oe=t.range?t.modelValue[b.value]:t.modelValue||0;Te=Oe+Math.round(Te/t.step-Oe/t.step)*t.step,t.reversed&&(Te=t.max-Te+t.min),t.vertical&&(Te=t.max-Te+t.min),k(Te)},k=V=>{let q=V,ae;if(t.range)if(ae=t.modelValue?[...t.modelValue]:[],b.value===0){let X=t.modelValue?t.modelValue[1]:t.max;q<t.min?q=t.min:q>X&&(q=X),ae[0]=q,ae[1]=ae[1]||t.max}else{let X=t.modelValue?t.modelValue[0]:t.min;q>t.max?q=t.max:q<X&&(q=X),ae[0]=ae[0]||t.min,ae[1]=q}else q<t.min&&(q=t.min),q>t.max&&(q=t.max),ae=q;l("update:modelValue",ae),l("change",ae)},$=N(!1),B=V=>$.value=V,z=(V,q=0)=>{B(!0),T(),b.value=q,V.preventDefault()},M=V=>{$.value&&(B(!1),document.removeEventListener("mousemove",P),l("slideend",{event:V,value:t.modelValue}))},P=V=>{$.value&&(w(V),V==null||V.preventDefault())},F=(V,q=0)=>{t.disabled||(z(V,q),document.addEventListener("mousemove",P),document.addEventListener("mouseup",M),V.preventDefault())},U=(V,q=0)=>{switch(b.value=q,V.code){case"ArrowUp":t.vertical&&(t.reversed?O():se()),V.preventDefault();break;case"ArrowDown":t.vertical&&(t.reversed?se():O()),V.preventDefault();break;case"ArrowRight":t.reversed?se():O(),V.preventDefault();break;case"ArrowLeft":t.reversed?O():se(),V.preventDefault();break}},O=()=>{let V=0;t.range?V=t.modelValue[b.value]+t.step:V=t.modelValue+t.step,k(V)},se=()=>{let V=0;t.range?V=t.modelValue[b.value]-t.step:V=t.modelValue-t.step,k(V)},we=V=>{if(!t.disabled&&!$n.hasClass(V.target,"thumb")){if(t.range){let q=(t.vertical?V.offsetY/V.target.clientHeight:V.offsetX/V.target.clientWidth)*100,ae=(s()+r())/2;q<ae?b.value=t.reversed?1:0:b.value=t.reversed?0:1}T(),w(V)}};return()=>e("div",{ref:V=>m.value=V,class:n.value,style:t.vertical?`height: ${t.verticalHeight}px;`:""},[e("div",{class:"inner",onClick:we},[e("div",{class:"track",ref:V=>h.value=V},null),e("div",{class:"track-fill",style:c.value},null),e("div",{class:"thumb",style:f.value,onMousedown:V=>F(V),onTouchstart:V=>z(V),onTouchmove:V=>P(V),onTouchend:V=>M(V),onKeydown:V=>U(V),tabindex:0},null),t.range&&e("div",{class:"thumb second",style:p.value,onMousedown:V=>F(V,1),onTouchstart:V=>z(V,1),onTouchmove:V=>P(V),onTouchend:V=>M(V),onKeydown:V=>U(V,1),tabindex:0},null)]),t.labeled&&e("ul",{class:"auto labels"},[[...Array(g()+1)].map((V,q)=>{let ae=q/g();return q%u()?e("li",{class:"halftick label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},null):e("li",{class:"label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},[t.reversed&&!t.vertical?t.labels?t.labels[g()-q]:o.value[g()-q]:t.labels?t.labels[q]:o.value[q]])})])])}}),OT={install(t){t.component(Cd.name,Cd)}},fs=E({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(t){return{computedClass:D(()=>G("ui tab segment",A(t.active,"active"),Be(t.attached,"attached")))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),wd=E({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(t,{emit:l,slots:n}){const s=N(t.activeIndex);at(()=>t.activeIndex,u=>{s.value=u});const r=(u,g)=>{s.value!==g&&(s.value=g,l("update:activeIndex",g),l("tab-change",{event:u,index:g})),l("tab-click",{event:u,index:g})},c=(u,g)=>{u.key==="Enter"&&r(u,g)},f=D(()=>{var u,g;let m=[];return(u=n.default)!=null&&u.call(n)&&((g=n.default)==null||g.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&m.push(h)})),m}),p=D(()=>!t.secondary&&!t.pointing&&!t.text),o=D(()=>G("ui menu",A(p.value,"tabular attached"),A(t.pointing,"pointing"),A(t.secondary,"secondary"),A(t.text,"text")));return{onClick:r,onKeyDown:c,tabIndex:s,tabs:f,tabMenuClass:o,isDefaultMenu:p}},render(){const t=()=>this.tabs.map((n,s)=>e("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:r=>this.onClick(r,s),onKeydown:r=>this.onKeyDown(r,s),tabindex:0},[n.props.header])),l=()=>this.tabs.map((n,s)=>e(fs,Bi(n.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,c;return[(c=(r=n.children).default)==null?void 0:c.call(r)]}}));return e(Ce,null,[e("div",{class:this.tabMenuClass},[t()]),l()])}}),HT={install(t){t.component(wd.name,wd),t.component(fs.name,fs)}};function jT(t,l){t.indexOf(l)===-1&&t.push(l)}const Gm=(t,l,n)=>Math.min(Math.max(n,t),l),wt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Ra=t=>typeof t=="number",Oi=t=>Array.isArray(t)&&!Ra(t[0]),qT=(t,l,n)=>{const s=l-t;return((n-t)%s+s)%s+t};function UT(t,l){return Oi(t)?t[qT(0,t.length,l)]:t}const Wm=(t,l,n)=>-n*t+n*l+t,Km=()=>{},ii=t=>t,ao=(t,l,n)=>l-t===0?1:(n-t)/(l-t);function Xm(t,l){const n=t[t.length-1];for(let s=1;s<=l;s++){const r=ao(0,l,s);t.push(Wm(n,1,r))}}function YT(t){const l=[0];return Xm(l,t-1),l}function JT(t,l=YT(t.length),n=ii){const s=t.length,r=s-l.length;return r>0&&Xm(l,r),c=>{let f=0;for(;f<s-2&&!(c<l[f+1]);f++);let p=Gm(0,1,ao(l[f],l[f+1],c));return p=UT(n,f)(p),Wm(t[f],t[f+1],p)}}const Qm=t=>Array.isArray(t)&&Ra(t[0]),gs=t=>typeof t=="object"&&!!t.createAnimation,el=t=>typeof t=="function",GT=t=>typeof t=="string",Tl={ms:t=>t*1e3,s:t=>t/1e3},Zm=(t,l,n)=>(((1-3*n+3*l)*t+(3*n-6*l))*t+3*l)*t,WT=1e-7,KT=12;function XT(t,l,n,s,r){let c,f,p=0;do f=l+(n-l)/2,c=Zm(f,s,r)-t,c>0?n=f:l=f;while(Math.abs(c)>WT&&++p<KT);return f}function _l(t,l,n,s){if(t===l&&n===s)return ii;const r=c=>XT(c,0,1,t,n);return c=>c===0||c===1?c:Zm(r(c),l,s)}const QT=(t,l="end")=>n=>{n=l==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*t,r=l==="end"?Math.floor(s):Math.ceil(s);return Gm(0,1,r/t)},Sd={ease:_l(.25,.1,.25,1),"ease-in":_l(.42,0,1,1),"ease-in-out":_l(.42,0,.58,1),"ease-out":_l(0,0,.58,1)},ZT=/\((.*?)\)/;function Ad(t){if(el(t))return t;if(Qm(t))return _l(...t);if(Sd[t])return Sd[t];if(t.startsWith("steps")){const l=ZT.exec(t);if(l){const n=l[1].split(",");return QT(parseFloat(n[0]),n[1].trim())}}return ii}class ep{constructor(l,n=[0,1],{easing:s,duration:r=wt.duration,delay:c=wt.delay,endDelay:f=wt.endDelay,repeat:p=wt.repeat,offset:o,direction:u="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=ii,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),s=s||wt.easing,gs(s)){const h=s.createAnimation(n);s=h.easing,n=h.keyframes||n,r=h.duration||r}this.repeat=p,this.easing=Oi(s)?ii:Ad(s),this.updateDuration(r);const m=JT(n,o,Oi(s)?s.map(Ad):ii);this.tick=h=>{var v;c=c;let d=0;this.pauseTime!==void 0?d=this.pauseTime:d=(h-this.startTime)*this.rate,this.t=d,d/=1e3,d=Math.max(d-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(d=this.totalDuration);const y=d/this.duration;let S=Math.floor(y),T=y%1;!T&&y>=1&&(T=1),T===1&&S--;const b=S%2;(u==="reverse"||u==="alternate"&&b||u==="alternate-reverse"&&!b)&&(T=1-T);const w=d>=this.totalDuration?1:Math.min(T,1),k=m(this.easing(w));l(k),this.pauseTime===void 0&&(this.playState==="finished"||d>=this.totalDuration+f)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,k)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const l=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=l-this.pauseTime:this.startTime||(this.startTime=l),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var l;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(l=this.reject)===null||l===void 0||l.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(l){this.duration=l,this.totalDuration=l*(this.repeat+1)}get currentTime(){return this.t}set currentTime(l){this.pauseTime!==void 0||this.rate===0?this.pauseTime=l:this.startTime=performance.now()-l/this.rate}get playbackRate(){return this.rate}set playbackRate(l){this.rate=l}}class e${setAnimation(l){this.animation=l,l==null||l.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const xn=new WeakMap;function tp(t){return xn.has(t)||xn.set(t,{transforms:[],values:new Map}),xn.get(t)}function t$(t,l){return t.has(l)||t.set(l,new e$),t.get(l)}const i$=["","X","Y","Z"],l$=["translate","scale","rotate","skew"],Pa={x:"translateX",y:"translateY",z:"translateZ"},kd={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},a$={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:kd,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:ii},skew:kd},Vl=new Map,no=t=>`--motion-${t}`,za=["x","y","z"];l$.forEach(t=>{i$.forEach(l=>{za.push(t+l),Vl.set(no(t+l),a$[t])})});const n$=(t,l)=>za.indexOf(t)-za.indexOf(l),s$=new Set(za),ip=t=>s$.has(t),o$=(t,l)=>{Pa[l]&&(l=Pa[l]);const{transforms:n}=tp(t);jT(n,l),t.style.transform=u$(n)},u$=t=>t.sort(n$).reduce(r$,"").trim(),r$=(t,l)=>`${t} ${l}(var(${no(l)}))`,hs=t=>t.startsWith("--"),Td=new Set;function d$(t){if(!Td.has(t)){Td.add(t);try{const{syntax:l,initialValue:n}=Vl.has(t)?Vl.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:l,initialValue:n})}catch{}}}const Bn=(t,l)=>document.createElement("div").animate(t,l),$d={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Bn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Bn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Bn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},En={},Mi={};for(const t in $d)Mi[t]=()=>(En[t]===void 0&&(En[t]=$d[t]()),En[t]);const c$=.015,m$=(t,l)=>{let n="";const s=Math.round(l/c$);for(let r=0;r<s;r++)n+=t(ao(0,s-1,r))+", ";return n.substring(0,n.length-2)},xd=(t,l)=>el(t)?Mi.linearEasing()?`linear(${m$(t,l)})`:wt.easing:Qm(t)?p$(t):t,p$=([t,l,n,s])=>`cubic-bezier(${t}, ${l}, ${n}, ${s})`;function f$(t,l){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:l());return t}const g$=t=>Array.isArray(t)?t:[t];function _s(t){return Pa[t]&&(t=Pa[t]),ip(t)?no(t):t}const ua={get:(t,l)=>{l=_s(l);let n=hs(l)?t.style.getPropertyValue(l):getComputedStyle(t)[l];if(!n&&n!==0){const s=Vl.get(l);s&&(n=s.initialValue)}return n},set:(t,l,n)=>{l=_s(l),hs(l)?t.style.setProperty(l,n):t.style[l]=n}};function lp(t,l=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(l&&t.commitStyles(),t.cancel())}catch{}}function h$(t,l){var n;let s=(l==null?void 0:l.toDefaultUnit)||ii;const r=t[t.length-1];if(GT(r)){const c=((n=r.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";c&&(s=f=>f+c)}return s}function _$(){return window.__MOTION_DEV_TOOLS_RECORD}function b$(t,l,n,s={},r){const c=_$(),f=s.record!==!1&&c;let p,{duration:o=wt.duration,delay:u=wt.delay,endDelay:g=wt.endDelay,repeat:m=wt.repeat,easing:h=wt.easing,persist:v=!1,direction:d,offset:y,allowWebkitAcceleration:S=!1,autoplay:T=!0}=s;const b=tp(t),w=ip(l);let k=Mi.waapi();w&&o$(t,l);const $=_s(l),B=t$(b.values,$),z=Vl.get($);return lp(B.animation,!(gs(h)&&B.generator)&&s.record!==!1),()=>{const M=()=>{var U,O;return(O=(U=ua.get(t,$))!==null&&U!==void 0?U:z==null?void 0:z.initialValue)!==null&&O!==void 0?O:0};let P=f$(g$(n),M);const F=h$(P,z);if(gs(h)){const U=h.createAnimation(P,l!=="opacity",M,$,B);h=U.easing,P=U.keyframes||P,o=U.duration||o}if(hs($)&&(Mi.cssRegisterProperty()?d$($):k=!1),w&&!Mi.linearEasing()&&(el(h)||Oi(h)&&h.some(el))&&(k=!1),k){z&&(P=P.map(se=>Ra(se)?z.toDefaultUnit(se):se)),P.length===1&&(!Mi.partialKeyframes()||f)&&P.unshift(M());const U={delay:Tl.ms(u),duration:Tl.ms(o),endDelay:Tl.ms(g),easing:Oi(h)?void 0:xd(h,o),direction:d,iterations:m+1,fill:"both"};p=t.animate({[$]:P,offset:y,easing:Oi(h)?h.map(se=>xd(se,o)):void 0},U),p.finished||(p.finished=new Promise((se,we)=>{p.onfinish=se,p.oncancel=we}));const O=P[P.length-1];p.finished.then(()=>{v||(ua.set(t,$,O),p.cancel())}).catch(Km),S||(p.playbackRate=1.000001)}else if(r&&w)P=P.map(U=>typeof U=="string"?parseFloat(U):U),P.length===1&&P.unshift(parseFloat(M())),p=new r(U=>{ua.set(t,$,F?F(U):U)},P,Object.assign(Object.assign({},s),{duration:o,easing:h}));else{const U=P[P.length-1];ua.set(t,$,z&&Ra(U)?z.toDefaultUnit(U):U)}return f&&c(t,l,P,{duration:o,delay:u,easing:h,repeat:m,offset:y},"motion-one"),B.setAnimation(p),p&&!T&&p.pause(),p}}const v$=(t,l)=>t[l]?Object.assign(Object.assign({},t),t[l]):Object.assign({},t);function y$(t,l){var n;return typeof t=="string"?l?((n=l[t])!==null&&n!==void 0||(l[t]=document.querySelectorAll(t)),t=l[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const C$=t=>t(),ap=(t,l,n=wt.duration)=>new Proxy({animations:t.map(C$).filter(Boolean),duration:n,options:l},S$),w$=t=>t.animations[0],S$={get:(t,l)=>{const n=w$(t);switch(l){case"duration":return t.duration;case"currentTime":return Tl.s((n==null?void 0:n[l])||0);case"playbackRate":case"playState":return n==null?void 0:n[l];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(A$)).catch(Km)),t.finished;case"stop":return()=>{t.animations.forEach(s=>lp(s))};case"forEachNative":return s=>{t.animations.forEach(r=>s(r,t))};default:return typeof(n==null?void 0:n[l])>"u"?void 0:()=>t.animations.forEach(s=>s[l]())}},set:(t,l,n)=>{switch(l){case"currentTime":n=Tl.ms(n);case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][l]=n;return!0}return!1}},A$=t=>t.finished;function k$(t,l,n){return el(t)?t(l,n):t}function T$(t){return function(l,n,s={}){l=y$(l);const r=l.length,c=[];for(let f=0;f<r;f++){const p=l[f];for(const o in n){const u=v$(s,o);u.delay=k$(u.delay,f,r);const g=b$(p,o,n[o],u,t);c.push(g)}}return ap(c,s,s.duration)}}const $$=T$(ep);function x$(t,l={}){return ap([()=>{const n=new ep(t,[0,1],l);return n.finished.catch(()=>{}),n}],l,l.duration)}function B$(t,l,n){return(el(t)?x$:$$)(t,l,n)}const de=(t,l)=>(n,{duration:s,keyframesOverride:r={}})=>B$(n,{...t,...r},{autoplay:!1,...l,duration:s}),Bd=de({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),E$=de({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),R$=de({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),P$=de({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),z$=de({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),M$=de({opacity:[0,1]},{duration:.5,offset:[0,1]}),D$=de({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),I$=de({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),F$=de({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),V$=de({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),N$=de({opacity:[1,0]},{duration:.5,offset:[0,1]}),L$=de({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),O$=de({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),H$=de({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),j$=de({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),q$=de({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),U$=de({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Y$=de({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),J$=de({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),G$=de({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),W$=de({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),K$=de({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),X$=de({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),Q$=de({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),Z$=de({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),ex=de({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),tx=de({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),ix=de({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),lx=de({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),ax=de({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),nx=de({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),np={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},sp={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},op={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},sx={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},ox=de({transformOrigin:"top center",...np},{offset:[0,1]}),ux=de({transformOrigin:"bottom center",...np},{offset:[0,1]}),rx=de({transformOrigin:"center right",...sp},{offset:[0,1]}),dx=de({transformOrigin:"center left",...sp},{offset:[0,1]}),cx=de({transformOrigin:"top center",...op},{offset:[0,1]}),mx=de({transformOrigin:"bottom center",...op},{offset:[0,1]}),Ed=de({transformOrigin:"center left",...sx},{offset:[0,1]}),oi=.8,Hi={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ji={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},qi={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ui={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},px=de({transformOrigin:"top center",transform:Hi.transform,opacity:Hi.opacity},{duration:oi,offset:Hi.offset}),fx=de({transformOrigin:"bottom center",transform:Hi.transform,opacity:Hi.opacity},{duration:oi,offset:Hi.offset}),gx=de({transformOrigin:"center right",transform:ji.transform,opacity:ji.opacity},{duration:oi,offset:ji.offset}),hx=de({transformOrigin:"center left",transform:ji.transform,opacity:ji.opacity},{duration:oi,offset:ji.offset}),_x=de({transformOrigin:"top center",transform:qi.transform,opacity:qi.opacity},{duration:oi,offset:qi.offset}),bx=de({transformOrigin:"bottom center",transform:qi.transform,opacity:qi.opacity},{duration:oi,offset:qi.offset}),vx=de({transformOrigin:"center right",transform:Ui.transform,opacity:Ui.opacity},{duration:oi,offset:Ui.offset}),yx=de({transformOrigin:"center left",transform:Ui.transform,opacity:Ui.opacity},{duration:oi,offset:Ui.offset}),Cx=de({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),wx=de({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Sx=de({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),Ax=de({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),kx=de({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),Tx=de({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),$x=de({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),xx=de({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Bx=de({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Ex={browse:[Bd,E$],"browse right":[Bd,R$],drop:[P$,z$],fade:[M$,N$],"fade up":[D$,L$],"fade down":[I$,O$],"fade left":[F$,H$],"fade right":[V$,j$],fly:[q$,W$],"fly up":[U$,K$],"fly down":[Y$,X$],"fly left":[J$,Q$],"fly right":[G$,Z$],"horizontal flip":[ex,tx],"vertical flip":[ix,lx],scale:[ax,nx],"slide up":[ux,mx],"slide down":[ox,cx],"slide left":[rx,Ed],"slide right":[dx,Ed],"swing up":[fx,bx],"swing down":[px,_x],"swing left":[gx,vx],"swing right":[hx,yx],zoom:[Cx,wx]},Rx={bounce:[Sx,void 0],flash:[Ax,void 0],glow:[kx,void 0],jiggle:[Tx,void 0],pulse:[$x,void 0],shake:[xx,void 0],tada:[Bx,void 0]},up=t=>({...Ex,...Rx})[t],Px=t=>{const[l,n]=up(t.animation),s=D(()=>t.duration?t.duration/1e3:.5),r=D(()=>(f,p)=>{if(!l)return p();const o=l(f,{duration:s.value});o.play(),o.finished.then(p)}),c=D(()=>(f,p)=>{if(!n)return p();const o=n(f,{duration:s.value});o.play(),o.finished.then(p)});return{onEnter:r,onLeave:c}},bs=E({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(t){const{onEnter:l,onLeave:n}=Px(t);return{onEnter:l,onLeave:n}},render(){return e(Za,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})}}),vs=E({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(t){const[l,n]=up(t.animation),s=D(()=>(c,f)=>{if(!l)return f();const p=l(c,{duration:.5,keyframesOverride:t.enterKeyframes(c)});p.play(),p.finished.then(f)}),r=D(()=>(c,f)=>{if(!n)return f();const p=n(c,{duration:.5,keyframesOverride:t.leaveKeyframes(c)});p.play(),p.finished.then(f)});return{onEnter:s,onLeave:r}},render(){return e(rm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})}}),zx={install(t){t.component(bs.name,bs),t.component(vs.name,vs)}},Mx=Object.freeze(Object.defineProperty({__proto__:null,Accordion:eT,Calendar:gT,Checkbox:hT,Dimmer:_T,Dropdown:wT,Embed:ST,Modal:RT,Popup:zT,Progress:IT,Rating:VT,Search:NT,Sidebar:LT,Slider:OT,Tab:HT,Transition:zx},Symbol.toStringTag,{value:"Module"})),Rn=E({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...lo()},setup(t,{slots:l}){const n=D(()=>G("actions",t.basic&&"basic",t.aligned,t.vertical&&"vertical"));return()=>{var s;return t.attached?e(ss,{attached:t.attached,vertical:t.vertical},{default:()=>{var r;return[(r=l.default)==null?void 0:r.call(l)]}}):e("div",{class:n.value},[(s=l.default)==null?void 0:s.call(l)])}}}),Dx=E({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(t,{slots:l}){const n=D(()=>G("floating toast-box compact",t.unclickable&&"unclickable"));return()=>{var s,r;return t.verticalAttached?e("div",{class:n.value,style:"display: block !important;"},[e("div",{class:"vertical attached compact right"},[(s=l.default)==null?void 0:s.call(l)])]):e("div",{class:n.value,style:"display: block !important;"},[(r=l.default)==null?void 0:r.call(l)])}}});function Pn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!At(t)}const Ix=E({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Ym()},setup(t,{emit:l}){const{colorClasses:n}=Jm(t),s=D(()=>{var f,p,o,u,g;return G(t.centered&&"center aligned",t.type||"neutral",n.value,"ui",t.messageStyle?"message":"toast",t.actions&&!((f=t.actionsProps)!=null&&f.vertical)&&"actions",((p=t.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((o=t.actionsProps)==null?void 0:o.attached)==="bottom"&&"top attached",((u=t.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((g=t.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=N(t.showProgressUp?0:100),c=()=>{const f=t.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(t.showProgressUp){r.value>=100&&clearInterval(p),r.value+=1;return}r.value<=0&&clearInterval(p),r.value-=1},f)},500)};return ni(()=>t.showProgress&&c()),setTimeout(()=>t.displayTime>0&&l("close"),t.displayTime+750),{classes:s,progress:r}},render(){var t;let l,n,s;return e(Dx,{unclickable:!!this.actions,verticalAttached:((t=this.actionsProps)==null?void 0:t.attached)==="left"},{default:()=>{var r,c,f,p;return[this.showProgress==="top"&&e(Ea,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&e(Rn,this.actionsProps,Pn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]}),e("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[e("div",{class:"content"},[this.title&&e("div",{class:"ui header"},[this.title]),e("div",{class:"message"},[this.message])]),this.actions&&!((f=this.actionsProps)!=null&&f.attached)&&e(Rn,this.actionsProps,Pn(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&e(Rn,this.actionsProps,Pn(s=this.actions({close:()=>this.$emit("close")}))?s:{default:()=>[s]}),this.showProgress==="bottom"&&e(Ea,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),Fx=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],Vx=({defaultValue:t}={})=>({position:{type:String,validator:l=>Fx.includes(l),default:t}}),Nx=t=>({positionClasses:D(()=>t.position||"")});function Lx(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!At(t)}const Ox=E({name:"SuiToastContainer",props:{horizontal:Boolean,...lo(),...Vx({defaultValue:"top right"})},setup(t){const{items:l,remove:n}=rp(),{attachedClasses:s}=Um(t),{positionClasses:r}=Nx(t);return{classes:D(()=>G(s.value||r.value,"ui toast-container",t.horizontal&&"horizontal")),items:l,remove:n,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const f=[0,`${c.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:f,marginBottom:p}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const f=[`${c.offsetWidth}px`,0],p=[`${c.offsetHeight}px`,0],o=t.horizontal?{width:f}:{height:p},u=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...o,marginBottom:u}}}},render(){let t;return e(Ka,{to:"body"},{default:()=>[e("div",{class:this.classes},[e(vs,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},Lx(t=this.items.filter(({position:l,attached:n})=>this.attached?n===this.attached:l===this.position).filter(({horizontal:l})=>this.horizontal===!!l).map(({id:l,...n})=>e(Ix,Bi({key:l},n,{onClick:()=>this.remove(l),onClose:()=>this.remove(l)}),null)))?t:{default:()=>[t]})])]})}}),Hx=N(1),cl=N([]),rp=()=>({items:cl,add:t=>{t.position=t.position||"top right",cl.value=[...cl.value,{id:Hx.value++,...t}]},remove:t=>{cl.value=cl.value.filter(l=>l.id!==t)}}),Qe=()=>{var t;const l=(t=Dt())==null?void 0:t.appContext,{add:n}=rp();return{toast:s=>{const{position:r,attached:c,horizontal:f}=s;Ux({position:r,attached:c,horizontal:f})||qx(l,{position:r,attached:c,horizontal:f}),n(s)}}},jx=(t,{appContext:l,element:n}={})=>{const s=n||document.createElement("div");return l&&(t.appContext=l),Sa(t,s),{vNode:t,el:s}},qx=(t,{position:l="top right",attached:n,horizontal:s=!1}={})=>{const r=j(Ox,{position:l,attached:n,horizontal:s}),{el:c}=jx(r,{appContext:t});return{vNode:r,el:c}},Ux=({position:t="top right",attached:l,horizontal:n})=>{const s=l?`.ui.toast-container.${l}.attached`:`.ui.toast-container.${t.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(s)};function Yx(t){Object.values({...Vk,...Yk,...Zk,...Mx}).map(l=>t.use(l))}const Jx={install:Yx},Gx={__name:"DocSectionText",props:["label","onClick"],setup(t){const l=zm(),n=D(()=>{const r=l.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),s=r=>{r.preventDefault();const f=r.target.parentElement.getAttribute("href"),p=f.slice(f.indexOf("#")+1),o=document.getElementById(p);o&&o.scrollIntoView({behavior:"smooth"})};return(r,c)=>{const f=_("SuiHeaderSubheader"),p=_("SuiHeader"),o=_("SuiGridColumn"),u=_("SuiGridRow");return L(),ge(u,null,{default:i(()=>[e(o,{width:15},{default:i(()=>[e(p,{as:"h3",class:"doc-section-text"},{default:i(()=>[a(ke(t.label)+" ",1),e(Xe(Pm),{to:`${n.value}#${r.$attrs.id}`,target:"_self",onClick:s},{default:i(()=>[e(Xe(xt),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"]),e(f,null,{default:i(()=>[Gi(r.$slots,"default",{},void 0,!0)]),_:3})]),_:3})]),_:3}),e(o,{textAlign:"right",width:1},{default:i(()=>[e(Xe(xt),{name:"code",color:"grey",link:"",onClick:t.onClick},null,8,["onClick"])]),_:1})]),_:3})}}},Wx=me(Gx,[["__scopeId","data-v-11193e34"]]),Kx={mounted(t,l){var r;const n=l.modifiers,s=l.value;n.script||s==="script"?t.className="language-javascript":t.className="language-markup",eb.highlightElement(t.children[0]),(r=t.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},Xx={key:0},Qx={__name:"DocSectionCode",props:["code","hideCode"],setup(t){return(l,n)=>{const s=_("SuiGridColumn"),r=_("SuiGridRow");return L(),ge(r,null,{default:i(()=>[e(s,{width:16},{default:i(()=>[Gi(l.$slots,"default")]),_:3}),e(s,{width:16},{default:i(()=>[e(Xe(bs),{animation:"scale"},{default:i(()=>[t.hideCode?Gs("",!0):jl((L(),ne("pre",Xx,[C("code",null,ke(t.code)+`
`,1)])),[[Xe(Kx)]])]),_:1})]),_:1})]),_:3})}}},Ze={__name:"DocSection",props:["label","code"],setup(t){const l=N(!0),n=()=>l.value=!l.value;return(s,r)=>{const c=_("SuiGrid");return L(),ne("section",null,[e(c,{columns:2},{default:i(()=>[e(Wx,Bi({label:t.label,"on-click":n},s.$attrs),{default:i(()=>[Gi(s.$slots,"description")]),_:3},16,["label"]),e(Qx,{code:t.code,"hide-code":l.value},{default:i(()=>[Gi(s.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},Zx=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,eB={__name:"MinimalDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({message:"I am a toast, nice to meet you !"})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Minimal",code:Zx},{description:i(()=>[a(" A minimal toast will just display a message. ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},tB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    title: 'Better ?',
    message: 'Hey look, I have a title !'
  })
}
<\/script>`,iB={__name:"TitledDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({title:"Better ?",message:"Hey look, I have a title !"})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Titled",code:tB},{description:i(()=>[a(" You can add a title to your toast. ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},lB=`<template>
  <SuiButton @click="show">Show</SuiButton>
  <SuiButton color="red" @click="show('red')">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (color) => {
  toast({
    title: 'LOOK',
    message: 'See, how long i will last',
    showProgress: 'bottom',
    showProgressColor: color,
  })
}
<\/script>`,aB={__name:"ProgressBarDoc",setup(t){const{toast:l}=Qe(),n=s=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:s})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Progress Bar",code:lB},{description:i(()=>[a(" You can attach a progress bar to your toast. ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1}),e(c,{color:"red",onClick:r[0]||(r[0]=f=>n("red"))},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},nB=`<template>
  <SuiButton @click="show('success')" positive>Success</SuiButton>
  <SuiButton @click="show('error')" negative>Error</SuiButton>
  <SuiButton @click="show('warning')" color="yellow">Warning</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (type) => {
  toast({
    message: 'You're using the good framework !',
    type,
  })
}
<\/script>`,sB={__name:"ToastTypeDoc",setup(t){const{toast:l}=Qe(),n=s=>{l({message:"You're using the good framework !",type:s})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Toast Type",code:nB},{description:i(()=>[a(" A toast can be used to display different types of informations. ")]),example:i(()=>[e(c,{onClick:r[0]||(r[0]=f=>n("success")),positive:""},{default:i(()=>[a("Success")]),_:1}),e(c,{onClick:r[1]||(r[1]=f=>n("error")),negative:""},{default:i(()=>[a("Error")]),_:1}),e(c,{onClick:r[2]||(r[2]=f=>n("warning")),color:"yellow"},{default:i(()=>[a("Warning")]),_:1})]),_:1})}}},oB=`<template>
  <SuiButton @click="show('top left')">Top Left</SuiButton>
  <SuiButton @click="show('bottom right')">Bottom Right</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (position) => {
  toast({
    position,
    message: 'Look, I'm here !'
  })
}
<\/script>`,uB={__name:"PositionDoc",setup(t){const{toast:l}=Qe(),n=s=>{l({position:s,message:"Look, I'm here !"})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Position",code:oB},{description:i(()=>[a(" A toast can appear at different positions on the screen. ")]),example:i(()=>[e(c,{onClick:r[0]||(r[0]=f=>n("top left"))},{default:i(()=>[a("Top Left")]),_:1}),e(c,{onClick:r[1]||(r[1]=f=>n("bottom right"))},{default:i(()=>[a("Bottom Right")]),_:1})]),_:1})}}},rB=C("br",null,null,-1),dB=`<template>
  <SuiButton @click="show('top')">Top</SuiButton>
  <SuiButton @click="show('bottom')">Bottom</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (attached) => {
  toast({
    attached,
    title: 'Watch out!',
    message: 'I am a ' + attached + ' attached toast'
  })
}
<\/script>`,cB={__name:"AttachedPosition",setup(t){const{toast:l}=Qe(),n=s=>{l({attached:s,title:"Watch out!",message:`I am a ${s} attached toast`})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Attached Position",code:dB},{description:i(()=>[a(" A toast can have an attached position which will show the toast over the whole width of the screen."),rB,a(" Just like notifications on mobile devices. ")]),example:i(()=>[e(c,{onClick:r[0]||(r[0]=f=>n("top"))},{default:i(()=>[a("Top")]),_:1}),e(c,{onClick:r[1]||(r[1]=f=>n("bottom"))},{default:i(()=>[a("Bottom")]),_:1})]),_:1})}}},mB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    horizontal: true,
    position: 'top left',
    title: 'Watch out!',
    message: 'Next one will open to the right'
  })
}
<\/script>`,pB={__name:"DirectionDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Direction",code:mB},{description:i(()=>[a(" Toasts can stack horizontal ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},fB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    centered: true,
    title: 'Veronika has joined',
    message: 'Welcome to the Fomantic-UI community!'
  })
}
<\/script>`,gB={__name:"CenterAligned",setup(t){const{toast:l}=Qe(),n=()=>{l({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Center Aligned",code:fB},{description:i(()=>[a(" The toasts content can be shown center aligned. ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},hB=`<template>
  <SuiButton @click="show(5000)">5 seconds</SuiButton>
  <SuiButton @click="show(0)">Stay</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (displayTime) => {
  toast({
    displayTime,
    message: displayTime === 0 ? 'I'll stay here until you click on me !' : 'You will see me for 5 seconds.'
  })
}
<\/script>`,_B={__name:"DurationDoc",setup(t){const{toast:l}=Qe(),n=s=>{l({displayTime:s,message:s===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Duration",code:hB},{description:i(()=>[a(" You can choose how long a toast should be displayed. ")]),example:i(()=>[e(c,{onClick:r[0]||(r[0]=f=>n(5e3))},{default:i(()=>[a("5 seconds")]),_:1}),e(c,{onClick:r[1]||(r[1]=f=>n(0))},{default:i(()=>[a("Stay")]),_:1})]),_:1})}}},bB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    messageStyle: true,
    message: 'I got my style from the message class',
    color: 'purple',
  })
}
<\/script>`,vB={__name:"MessageStyleDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Use Message Style",code:bB},{description:i(()=>[a(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},yB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    title: 'LOOK',
    message: 'See, how long i will last',
    showProgress: 'top',
    showProgressUp: true
  })
}
<\/script>`,CB={__name:"IncreasingProgressBarDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(s,r)=>{const c=_("SuiButton");return L(),ge(Ze,{label:"Increasing Progress Bar",code:yB},{description:i(()=>[a(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[e(c,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},wB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { ref }  from 'vue'
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const index = ref(0)
const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

const show = () => {
  toast({
    color: colors[index.value],
    message: 'I am a colorful toast',
    showProgress: 'bottom',
  })
  index.value = (index.value + 1) % colors.length
}
<\/script>`,SB={__name:"ColorVariantsDoc",setup(t){const{toast:l}=Qe(),n=N(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{l({color:s[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(c,f)=>{const p=_("SuiButton");return L(),ge(Ze,{label:"Color Variants",code:wB},{description:i(()=>[a(" You can use all of the usual color names. ")]),example:i(()=>[e(p,{onClick:r},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},AB={__name:"InvertedColorsDoc",setup(t){const{toast:l}=Qe(),n=N(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{l({color:s[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(c,f)=>{const p=_("SuiButton");return L(),ge(Ze,{label:"Inverted Colors",code:c.code},{description:i(()=>[a(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[e(p,{onClick:r},{default:i(()=>[a("Show")]),_:1})]),_:1},8,["code"])}}},kB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast } from 'vue-fomantic-ui'
import { SuiButton, SuiIcon } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' });
            close();
          }
        },
        () => [h(SuiIcon, { name: 'check' }), 'Yes']
      ),
      h(SuiButton, { color: 'red', icon: true }, () => [h(SuiIcon, { name: 'ban' })]),
      h(SuiButton,
        {
          color: 'blue',
          onclick: () => toast({ message: 'Returning false from the click handler avoids closing the toast' }),
        },
        () => '?'
      ),
    ],
  })
}
<\/script>`,TB={__name:"ActionGeneralDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[j(Ke,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>[j(xt,{name:"check"}),"Yes"]),j(Ke,{color:"red",icon:!0},()=>[j(xt,{name:"ban"})]),j(Ke,{color:"blue",onclick:()=>l({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(s,r)=>(L(),ge(Ze,{label:"General",code:kB},{description:i(()=>[a(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[e(Xe(Ke),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},$B=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'yellow',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
    ],
    actionsProps: { basic: true, aligned: 'left' },
  })
}
<\/script>`,xB={__name:"ActionBasicDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[j(Ke,{color:"yellow",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(s,r)=>(L(),ge(Ze,{label:"Basic",code:$B},{description:i(()=>[a(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[e(Xe(Ke),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},BB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
      h(SuiButton,
        {
          color: 'red',
          onclick: () => {
            toast({ message: 'You clicked "maybe", toast closes by default' })
            close()
          }
        },
        () => 'Maybe later'
      )
    ],
    actionsProps: { attached: 'top' },
  })
}
<\/script>`,EB={__name:"ActionAttachedDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[j(Ke,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),j(Ke,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(s,r)=>(L(),ge(Ze,{label:"Attached",code:BB},{description:i(()=>[a(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[e(Xe(Ke),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},RB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
      h(SuiButton,
        {
          color: 'red',
          onclick: () => {
            toast({ message: 'You clicked "maybe", toast closes by default' })
            close()
          }
        },
        () => 'Maybe later'
      )
    ],
    actionsProps: { vertical: true },
  })
}
<\/script>`,PB={__name:"ActionVerticalDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[j(Ke,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),j(Ke,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(s,r)=>(L(),ge(Ze,{label:"Vertical",code:RB},{description:i(()=>[a(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[e(Xe(Ke),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},zB=C("br",null,null,-1),MB=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { h } from 'vue'
import { useToast, SuiButton } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actions: ({ close }) => [
      h(SuiButton,
        {
          color: 'green',
          onclick: () => {
            toast({ message: 'You clicked "yes", toast closes by default' })
            close()
          }
        },
        () => 'Yes, really'
      ),
      h(SuiButton,
        {
          color: 'red',
          onclick: () => {
            toast({ message: 'You clicked "maybe", toast closes by default' })
            close()
          }
        },
        () => 'Maybe later'
      )
    ],
    actionsProps: { attached: 'left', vertical: true },
  })
}
<\/script>`,DB={__name:"ActionVerticalAttachedDoc",setup(t){const{toast:l}=Qe(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[j(Ke,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),j(Ke,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(s,r)=>(L(),ge(Ze,{label:"Vertical Attached",code:MB},{description:i(()=>[a(" Vertical actions can also be displayed as button groups using vertical attached."),zB,a(" Vertical attached actions also support left. ")]),example:i(()=>[e(Xe(Ke),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},IB={__name:"Toast",setup(t){const l=[{id:"minimal",label:"Minimal",category:"Types",component:eB},{id:"titled",label:"Titled",category:"Types",component:iB},{id:"progress-bar",label:"Progress Bar",category:"Types",component:aB},{id:"toast-type",label:"Toast Type",category:"Variations",component:sB},{id:"position",label:"Position",category:"Variations",component:uB},{id:"attached-position",label:"Attached Position",category:"Variations",component:cB},{id:"direction",label:"Direction",category:"Variations",component:pB},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:gB},{id:"duration",label:"Duration",category:"Variations",component:_B},{id:"message-style",label:"Use Message Style",category:"Variations",component:vB},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:CB},{id:"color-variants",label:"Color Variants",category:"Variations",component:SB},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:AB},{id:"general",label:"General",category:"Actions",component:TB},{id:"action-basic",label:"Basic",category:"Actions",component:xB},{id:"action-attached",label:"Attached",category:"Actions",component:EB},{id:"action-vertical",label:"Vertical",category:"Actions",component:PB},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:DB}];return(n,s)=>(L(),ge(gk,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":l}))}},FB=[{path:"/",component:X_,children:[{path:"/",component:pb},{path:"elements/button",component:kb},{path:"elements/container",component:Pb},{path:"elements/divider",component:Ib},{path:"elements/emoji",component:Ub},{path:"elements/flag",component:Wb},{path:"elements/header",component:tv},{path:"elements/icon",component:cv},{path:"elements/image",component:kv},{path:"elements/input",component:Bv},{path:"elements/label",component:qv},{path:"elements/list",component:r1},{path:"elements/loader",component:p1},{path:"elements/rail",component:_1},{path:"elements/reveal",component:w1},{path:"elements/segment",component:J1},{path:"elements/step",component:Z1},{path:"collections/breadcrumb",component:iy},{path:"collections/form",component:ny},{path:"collections/grid",component:ry},{path:"collections/menu",component:_y},{path:"collections/message",component:By},{path:"collections/table",component:Hy},{path:"views/advertisement",component:Jy},{path:"views/card",component:xC},{path:"views/comment",component:$w},{path:"views/feed",component:Ww},{path:"views/item",component:VS},{path:"views/statistic",component:JS},{path:"modules/accordion",component:h0},{path:"modules/calendar",component:v0},{path:"modules/checkbox",component:B0},{path:"modules/dimmer",component:P0},{path:"modules/dropdown",component:D0},{path:"modules/embed",component:V0},{path:"modules/modal",component:U0},{path:"modules/popup",component:Q0},{path:"modules/progress",component:tA},{path:"modules/rating",component:QA},{path:"modules/sidebar",component:ik},{path:"modules/slider",component:nk},{path:"modules/tab",component:uk},{path:"modules/toast",component:IB}]}],VB=E_({history:Uh("/vue-fomantic-ui/"),routes:FB});(function(t){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=s.variable[1].inside,f=0;f<r.length;f++)c[r[f]]=t.languages.bash[r[f]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash})(Prism);const so=bm($h);so.use(VB);so.use(Jx);so.mount("#app");

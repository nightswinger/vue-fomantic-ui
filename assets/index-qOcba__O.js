(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function l(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=l(r);fetch(r.href,c)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ul(e,a){const l=new Set(e.split(","));return a?s=>l.has(s.toLowerCase()):s=>l.has(s)}const He={},Ji=[],gt=()=>{},cp=()=>!1,Qa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Rs=e=>e.startsWith("onUpdate:"),Je=Object.assign,zs=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},dp=Object.prototype.hasOwnProperty,ze=(e,a)=>dp.call(e,a),me=Array.isArray,Wi=e=>fa(e)==="[object Map]",Vi=e=>fa(e)==="[object Set]",Ao=e=>fa(e)==="[object Date]",mp=e=>fa(e)==="[object RegExp]",ye=e=>typeof e=="function",We=e=>typeof e=="string",hi=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Ds=e=>(Le(e)||ye(e))&&ye(e.then)&&ye(e.catch),Rc=Object.prototype.toString,fa=e=>Rc.call(e),pp=e=>fa(e).slice(8,-1),zc=e=>fa(e)==="[object Object]",Is=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ra=Ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yl=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},fp=/-(\w)/g,mt=Yl(e=>e.replace(fp,(a,l)=>l?l.toUpperCase():"")),gp=/\B([A-Z])/g,At=Yl(e=>e.replace(gp,"-$1").toLowerCase()),Za=Yl(e=>e.charAt(0).toUpperCase()+e.slice(1)),za=Yl(e=>e?`on${Za(e)}`:""),Vt=(e,a)=>!Object.is(e,a),Ki=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Al=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},Na=e=>{const a=parseFloat(e);return isNaN(a)?e:a},kl=e=>{const a=We(e)?Number(e):NaN;return isNaN(a)?e:a};let ko;const Dc=()=>ko||(ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),hp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",_p=Ul(hp);function ga(e){if(me(e)){const a={};for(let l=0;l<e.length;l++){const s=e[l],r=We(s)?Cp(s):ga(s);if(r)for(const c in r)a[c]=r[c]}return a}else if(We(e)||Le(e))return e}const bp=/;(?![^(]*\))/g,vp=/:([^]+)/,yp=/\/\*[^]*?\*\//g;function Cp(e){const a={};return e.replace(yp,"").split(bp).forEach(l=>{if(l){const s=l.split(vp);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function el(e){let a="";if(We(e))a=e;else if(me(e))for(let l=0;l<e.length;l++){const s=el(e[l]);s&&(a+=s+" ")}else if(Le(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function wp(e){if(!e)return null;let{class:a,style:l}=e;return a&&!We(a)&&(e.class=el(a)),l&&(e.style=ga(l)),e}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=Ul(Sp);function Ic(e){return!!e||e===""}function kp(e,a){if(e.length!==a.length)return!1;let l=!0;for(let s=0;l&&s<e.length;s++)l=Kt(e[s],a[s]);return l}function Kt(e,a){if(e===a)return!0;let l=Ao(e),s=Ao(a);if(l||s)return l&&s?e.getTime()===a.getTime():!1;if(l=hi(e),s=hi(a),l||s)return e===a;if(l=me(e),s=me(a),l||s)return l&&s?kp(e,a):!1;if(l=Le(e),s=Le(a),l||s){if(!l||!s)return!1;const r=Object.keys(e).length,c=Object.keys(a).length;if(r!==c)return!1;for(const m in e){const p=e.hasOwnProperty(m),o=a.hasOwnProperty(m);if(p&&!o||!p&&o||!Kt(e[m],a[m]))return!1}}return String(e)===String(a)}function Jl(e,a){return e.findIndex(l=>Kt(l,a))}const ke=e=>We(e)?e:e==null?"":me(e)||Le(e)&&(e.toString===Rc||!ye(e.toString))?JSON.stringify(e,Pc,2):String(e),Pc=(e,a)=>a&&a.__v_isRef?Pc(e,a.value):Wi(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[s,r],c)=>(l[bn(s,c)+" =>"]=r,l),{})}:Vi(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>bn(l))}:hi(a)?bn(a):Le(a)&&!me(a)&&!zc(a)?String(a):a,bn=(e,a="")=>{var l;return hi(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Ps{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!a&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=Ct;try{return Ct=this,a()}finally{Ct=l}}}on(){Ct=this}off(){Ct=this.parent}stop(a){if(this._active){let l,s;for(l=0,s=this.effects.length;l<s;l++)this.effects[l].stop();for(l=0,s=this.cleanups.length;l<s;l++)this.cleanups[l]();if(this.scopes)for(l=0,s=this.scopes.length;l<s;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $p(e){return new Ps(e)}function Mc(e,a=Ct){a&&a.active&&a.effects.push(e)}function Ms(){return Ct}function Vc(e){Ct&&Ct.cleanups.push(e)}let xi;class na{constructor(a,l,s,r){this.fn=a,this.trigger=l,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Mc(this,r)}get dirty(){if(this._dirtyLevel===1){Fi();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(xp(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Hi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=pi,l=xi;try{return pi=!0,xi=this,this._runnings++,$o(this),this.fn()}finally{xo(this),this._runnings--,xi=l,pi=a}}stop(){var a;this.active&&($o(this),xo(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function xp(e){return e.value}function $o(e){e._trackId++,e._depsLength=0}function xo(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Fc(e.deps[a],e);e.deps.length=e._depsLength}}function Fc(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function Bp(e,a){e.effect instanceof na&&(e=e.effect.fn);const l=new na(e,gt,()=>{l.dirty&&l.run()});a&&(Je(l,a),a.scope&&Mc(l,a.scope)),(!a||!a.lazy)&&l.run();const s=l.run.bind(l);return s.effect=l,s}function Tp(e){e.effect.stop()}let pi=!0,jn=0;const Hc=[];function Fi(){Hc.push(pi),pi=!1}function Hi(){const e=Hc.pop();pi=e===void 0?!0:e}function Vs(){jn++}function Fs(){for(jn--;!jn&&qn.length;)qn.shift()()}function Nc(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const s=e.deps[e._depsLength];s!==a?(s&&Fc(s,e),e.deps[e._depsLength++]=a):e._depsLength++}}const qn=[];function Lc(e,a,l){Vs();for(const s of e.keys())if(s._dirtyLevel<a&&e.get(s)===s._trackId){const r=s._dirtyLevel;s._dirtyLevel=a,r===0&&(s._shouldSchedule=!0,s.trigger())}Oc(e),Fs()}function Oc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,qn.push(a.scheduler))}const jc=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},$l=new WeakMap,Bi=Symbol(""),Gn=Symbol("");function bt(e,a,l){if(pi&&xi){let s=$l.get(e);s||$l.set(e,s=new Map);let r=s.get(l);r||s.set(l,r=jc(()=>s.delete(l))),Nc(xi,r)}}function Jt(e,a,l,s,r,c){const m=$l.get(e);if(!m)return;let p=[];if(a==="clear")p=[...m.values()];else if(l==="length"&&me(e)){const o=Number(s);m.forEach((u,f)=>{(f==="length"||!hi(f)&&f>=o)&&p.push(u)})}else switch(l!==void 0&&p.push(m.get(l)),a){case"add":me(e)?Is(l)&&p.push(m.get("length")):(p.push(m.get(Bi)),Wi(e)&&p.push(m.get(Gn)));break;case"delete":me(e)||(p.push(m.get(Bi)),Wi(e)&&p.push(m.get(Gn)));break;case"set":Wi(e)&&p.push(m.get(Bi));break}Vs();for(const o of p)o&&Lc(o,2);Fs()}function Ep(e,a){var l;return(l=$l.get(e))==null?void 0:l.get(a)}const Rp=Ul("__proto__,__v_isRef,__isVue"),qc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hi)),Bo=zp();function zp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const s=Re(this);for(let c=0,m=this.length;c<m;c++)bt(s,"get",c+"");const r=s[a](...l);return r===-1||r===!1?s[a](...l.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Fi(),Vs();const s=Re(this)[a].apply(this,l);return Fs(),Hi(),s}}),e}function Dp(e){const a=Re(this);return bt(a,"has",e),a.hasOwnProperty(e)}class Gc{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,s){const r=this._isReadonly,c=this._shallow;if(l==="__v_isReactive")return!r;if(l==="__v_isReadonly")return r;if(l==="__v_isShallow")return c;if(l==="__v_raw")return s===(r?c?Xc:Kc:c?Wc:Jc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(s)?a:void 0;const m=me(a);if(!r){if(m&&ze(Bo,l))return Reflect.get(Bo,l,s);if(l==="hasOwnProperty")return Dp}const p=Reflect.get(a,l,s);return(hi(l)?qc.has(l):Rp(l))||(r||bt(a,"get",l),c)?p:st(p)?m&&Is(l)?p:p.value:Le(p)?r?Ns(p):Xt(p):p}}class Uc extends Gc{constructor(a=!1){super(!1,a)}set(a,l,s,r){let c=a[l];if(!this._shallow){const o=zi(c);if(!La(s)&&!zi(s)&&(c=Re(c),s=Re(s)),!me(a)&&st(c)&&!st(s))return o?!1:(c.value=s,!0)}const m=me(a)&&Is(l)?Number(l)<a.length:ze(a,l),p=Reflect.set(a,l,s,r);return a===Re(r)&&(m?Vt(s,c)&&Jt(a,"set",l,s):Jt(a,"add",l,s)),p}deleteProperty(a,l){const s=ze(a,l);a[l];const r=Reflect.deleteProperty(a,l);return r&&s&&Jt(a,"delete",l,void 0),r}has(a,l){const s=Reflect.has(a,l);return(!hi(l)||!qc.has(l))&&bt(a,"has",l),s}ownKeys(a){return bt(a,"iterate",me(a)?"length":Bi),Reflect.ownKeys(a)}}class Yc extends Gc{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const Ip=new Uc,Pp=new Yc,Mp=new Uc(!0),Vp=new Yc(!0),Hs=e=>e,Wl=e=>Reflect.getPrototypeOf(e);function nl(e,a,l=!1,s=!1){e=e.__v_raw;const r=Re(e),c=Re(a);l||(Vt(a,c)&&bt(r,"get",a),bt(r,"get",c));const{has:m}=Wl(r),p=s?Hs:l?js:Oa;if(m.call(r,a))return p(e.get(a));if(m.call(r,c))return p(e.get(c));e!==r&&e.get(a)}function sl(e,a=!1){const l=this.__v_raw,s=Re(l),r=Re(e);return a||(Vt(e,r)&&bt(s,"has",e),bt(s,"has",r)),e===r?l.has(e):l.has(e)||l.has(r)}function ol(e,a=!1){return e=e.__v_raw,!a&&bt(Re(e),"iterate",Bi),Reflect.get(e,"size",e)}function To(e){e=Re(e);const a=Re(this);return Wl(a).has.call(a,e)||(a.add(e),Jt(a,"add",e,e)),this}function Eo(e,a){a=Re(a);const l=Re(this),{has:s,get:r}=Wl(l);let c=s.call(l,e);c||(e=Re(e),c=s.call(l,e));const m=r.call(l,e);return l.set(e,a),c?Vt(a,m)&&Jt(l,"set",e,a):Jt(l,"add",e,a),this}function Ro(e){const a=Re(this),{has:l,get:s}=Wl(a);let r=l.call(a,e);r||(e=Re(e),r=l.call(a,e)),s&&s.call(a,e);const c=a.delete(e);return r&&Jt(a,"delete",e,void 0),c}function zo(){const e=Re(this),a=e.size!==0,l=e.clear();return a&&Jt(e,"clear",void 0,void 0),l}function rl(e,a){return function(s,r){const c=this,m=c.__v_raw,p=Re(m),o=a?Hs:e?js:Oa;return!e&&bt(p,"iterate",Bi),m.forEach((u,f)=>s.call(r,o(u),o(f),c))}}function ul(e,a,l){return function(...s){const r=this.__v_raw,c=Re(r),m=Wi(c),p=e==="entries"||e===Symbol.iterator&&m,o=e==="keys"&&m,u=r[e](...s),f=l?Hs:a?js:Oa;return!a&&bt(c,"iterate",o?Gn:Bi),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:p?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function ti(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Fp(){const e={get(c){return nl(this,c)},get size(){return ol(this)},has:sl,add:To,set:Eo,delete:Ro,clear:zo,forEach:rl(!1,!1)},a={get(c){return nl(this,c,!1,!0)},get size(){return ol(this)},has:sl,add:To,set:Eo,delete:Ro,clear:zo,forEach:rl(!1,!0)},l={get(c){return nl(this,c,!0)},get size(){return ol(this,!0)},has(c){return sl.call(this,c,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:rl(!0,!1)},s={get(c){return nl(this,c,!0,!0)},get size(){return ol(this,!0)},has(c){return sl.call(this,c,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:rl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{e[c]=ul(c,!1,!1),l[c]=ul(c,!0,!1),a[c]=ul(c,!1,!0),s[c]=ul(c,!0,!0)}),[e,l,a,s]}const[Hp,Np,Lp,Op]=Fp();function Kl(e,a){const l=a?e?Op:Lp:e?Np:Hp;return(s,r,c)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ze(l,r)&&r in s?l:s,r,c)}const jp={get:Kl(!1,!1)},qp={get:Kl(!1,!0)},Gp={get:Kl(!0,!1)},Up={get:Kl(!0,!0)},Jc=new WeakMap,Wc=new WeakMap,Kc=new WeakMap,Xc=new WeakMap;function Yp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(e){return e.__v_skip||!Object.isExtensible(e)?0:Yp(pp(e))}function Xt(e){return zi(e)?e:Xl(e,!1,Ip,jp,Jc)}function Qc(e){return Xl(e,!1,Mp,qp,Wc)}function Ns(e){return Xl(e,!0,Pp,Gp,Kc)}function Wp(e){return Xl(e,!0,Vp,Up,Xc)}function Xl(e,a,l,s,r){if(!Le(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const c=r.get(e);if(c)return c;const m=Jp(e);if(m===0)return e;const p=new Proxy(e,m===2?s:l);return r.set(e,p),p}function Ti(e){return zi(e)?Ti(e.__v_raw):!!(e&&e.__v_isReactive)}function zi(e){return!!(e&&e.__v_isReadonly)}function La(e){return!!(e&&e.__v_isShallow)}function Ls(e){return Ti(e)||zi(e)}function Re(e){const a=e&&e.__v_raw;return a?Re(a):e}function Os(e){return Al(e,"__v_skip",!0),e}const Oa=e=>Le(e)?Xt(e):e,js=e=>Le(e)?Ns(e):e;class Zc{constructor(a,l,s,r){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new na(()=>a(this._value),()=>Xi(this,1),()=>this.dep&&Oc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=Re(this);return(!a._cacheable||a.effect.dirty)&&Vt(a._value,a._value=a.effect.run())&&Xi(a,2),qs(a),a.effect._dirtyLevel>=1&&Xi(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Kp(e,a,l=!1){let s,r;const c=ye(e);return c?(s=e,r=gt):(s=e.get,r=e.set),new Zc(s,r,c||!r,l)}function qs(e){pi&&xi&&(e=Re(e),Nc(xi,e.dep||(e.dep=jc(()=>e.dep=void 0,e instanceof Zc?e:void 0))))}function Xi(e,a=2,l){e=Re(e);const s=e.dep;s&&Lc(s,a)}function st(e){return!!(e&&e.__v_isRef===!0)}function j(e){return td(e,!1)}function ed(e){return td(e,!0)}function td(e,a){return st(e)?e:new Xp(e,a)}class Xp{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Re(a),this._value=l?a:Oa(a)}get value(){return qs(this),this._value}set value(a){const l=this.__v_isShallow||La(a)||zi(a);a=l?a:Re(a),Vt(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:Oa(a),Xi(this,2))}}function Qp(e){Xi(e,2)}function y(e){return st(e)?e.value:e}function Zp(e){return ye(e)?e():y(e)}const ef={get:(e,a,l)=>y(Reflect.get(e,a,l)),set:(e,a,l,s)=>{const r=e[a];return st(r)&&!st(l)?(r.value=l,!0):Reflect.set(e,a,l,s)}};function Gs(e){return Ti(e)?e:new Proxy(e,ef)}class tf{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:s}=a(()=>qs(this),()=>Xi(this));this._get=l,this._set=s}get value(){return this._get()}set value(a){this._set(a)}}function id(e){return new tf(e)}function af(e){const a=me(e)?new Array(e.length):{};for(const l in e)a[l]=ad(e,l);return a}class lf{constructor(a,l,s){this._object=a,this._key=l,this._defaultValue=s,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Ep(Re(this._object),this._key)}}class nf{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Un(e,a,l){return st(e)?e:ye(e)?new nf(e):Le(e)&&arguments.length>1?ad(e,a,l):j(e)}function ad(e,a,l){const s=e[a];return st(s)?s:new lf(e,a,l)}const sf={GET:"get",HAS:"has",ITERATE:"iterate"},of={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rf(e,a){}const uf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},cf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Wt(e,a,l,s){let r;try{r=s?e(...s):e()}catch(c){Ni(c,a,l)}return r}function kt(e,a,l,s){if(ye(e)){const c=Wt(e,a,l,s);return c&&Ds(c)&&c.catch(m=>{Ni(m,a,l)}),c}const r=[];for(let c=0;c<e.length;c++)r.push(kt(e[c],a,l,s));return r}function Ni(e,a,l,s=!0){const r=a?a.vnode:null;if(a){let c=a.parent;const m=a.proxy,p=`https://vuejs.org/error-reference/#runtime-${l}`;for(;c;){const u=c.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,m,p)===!1)return}c=c.parent}const o=a.appContext.config.errorHandler;if(o){Wt(o,null,10,[e,m,p]);return}}df(e,l,r,s)}function df(e,a,l,s=!0){console.error(e)}let ja=!1,Yn=!1;const rt=[];let Nt=0;const Qi=[];let si=null,ki=0;const ld=Promise.resolve();let Us=null;function ha(e){const a=Us||ld;return e?a.then(this?e.bind(this):e):a}function mf(e){let a=Nt+1,l=rt.length;for(;a<l;){const s=a+l>>>1,r=rt[s],c=qa(r);c<e||c===e&&r.pre?a=s+1:l=s}return a}function Ql(e){(!rt.length||!rt.includes(e,ja&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?rt.push(e):rt.splice(mf(e.id),0,e),nd())}function nd(){!ja&&!Yn&&(Yn=!0,Us=ld.then(sd))}function pf(e){const a=rt.indexOf(e);a>Nt&&rt.splice(a,1)}function xl(e){me(e)?Qi.push(...e):(!si||!si.includes(e,e.allowRecurse?ki+1:ki))&&Qi.push(e),nd()}function Do(e,a,l=ja?Nt+1:0){for(;l<rt.length;l++){const s=rt[l];if(s&&s.pre){if(e&&s.id!==e.uid)continue;rt.splice(l,1),l--,s()}}}function Bl(e){if(Qi.length){const a=[...new Set(Qi)].sort((l,s)=>qa(l)-qa(s));if(Qi.length=0,si){si.push(...a);return}for(si=a,ki=0;ki<si.length;ki++)si[ki]();si=null,ki=0}}const qa=e=>e.id==null?1/0:e.id,ff=(e,a)=>{const l=qa(e)-qa(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function sd(e){Yn=!1,ja=!0,rt.sort(ff);try{for(Nt=0;Nt<rt.length;Nt++){const a=rt[Nt];a&&a.active!==!1&&Wt(a,null,14)}}finally{Nt=0,rt.length=0,Bl(),ja=!1,Us=null,(rt.length||Qi.length)&&sd()}}let Gi,cl=[];function od(e,a){var l,s;Gi=e,Gi?(Gi.enabled=!0,cl.forEach(({event:r,args:c})=>Gi.emit(r,...c)),cl=[]):typeof window<"u"&&window.HTMLElement&&!((s=(l=window.navigator)==null?void 0:l.userAgent)!=null&&s.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{od(c,a)}),setTimeout(()=>{Gi||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,cl=[])},3e3)):cl=[]}function gf(e,a,...l){if(e.isUnmounted)return;const s=e.vnode.props||He;let r=l;const c=a.startsWith("update:"),m=c&&a.slice(7);if(m&&m in s){const f=`${m==="modelValue"?"model":m}Modifiers`,{number:d,trim:h}=s[f]||He;h&&(r=l.map(v=>We(v)?v.trim():v)),d&&(r=l.map(Na))}let p,o=s[p=za(a)]||s[p=za(mt(a))];!o&&c&&(o=s[p=za(At(a))]),o&&kt(o,e,6,r);const u=s[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,kt(u,e,6,r)}}function rd(e,a,l=!1){const s=a.emitsCache,r=s.get(e);if(r!==void 0)return r;const c=e.emits;let m={},p=!1;if(!ye(e)){const o=u=>{const f=rd(u,a,!0);f&&(p=!0,Je(m,f))};!l&&a.mixins.length&&a.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!c&&!p?(Le(e)&&s.set(e,null),null):(me(c)?c.forEach(o=>m[o]=null):Je(m,c),Le(e)&&s.set(e,m),m)}function Zl(e,a){return!e||!Qa(a)?!1:(a=a.slice(2).replace(/Once$/,""),ze(e,a[0].toLowerCase()+a.slice(1))||ze(e,At(a))||ze(e,a))}let Ze=null,en=null;function Ga(e){const a=Ze;return Ze=e,en=e&&e.type.__scopeId||null,a}function Ys(e){en=e}function Js(){en=null}const hf=e=>i;function i(e,a=Ze,l){if(!a||e._n)return e;const s=(...r)=>{s._d&&ts(-1);const c=Ga(a);let m;try{m=e(...r)}finally{Ga(c),s._d&&ts(1)}return m};return s._n=!0,s._c=!0,s._d=!0,s}function Cl(e){const{type:a,vnode:l,proxy:s,withProxy:r,props:c,propsOptions:[m],slots:p,attrs:o,emit:u,render:f,renderCache:d,data:h,setupState:v,ctx:g,inheritAttrs:C}=e;let A,x;const _=Ga(e);try{if(l.shapeFlag&4){const $=r||s,B=$;A=wt(f.call(B,$,d,c,v,h,g)),x=o}else{const $=a;A=wt($.length>1?$(c,{attrs:o,slots:p,emit:u}):$(c,null)),x=a.props?o:bf(o)}}catch($){Pa.length=0,Ni($,e,1),A=t(ct)}let S=A;if(x&&C!==!1){const $=Object.keys(x),{shapeFlag:B}=S;$.length&&B&7&&(m&&$.some(Rs)&&(x=vf(x,m)),S=Lt(S,x))}return l.dirs&&(S=Lt(S),S.dirs=S.dirs?S.dirs.concat(l.dirs):l.dirs),l.transition&&(S.transition=l.transition),A=S,Ga(_),A}function _f(e,a=!0){let l;for(let s=0;s<e.length;s++){const r=e[s];if(zt(r)){if(r.type!==ct||r.children==="v-if"){if(l)return;l=r}}else return}return l}const bf=e=>{let a;for(const l in e)(l==="class"||l==="style"||Qa(l))&&((a||(a={}))[l]=e[l]);return a},vf=(e,a)=>{const l={};for(const s in e)(!Rs(s)||!(s.slice(9)in a))&&(l[s]=e[s]);return l};function yf(e,a,l){const{props:s,children:r,component:c}=e,{props:m,children:p,patchFlag:o}=a,u=c.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&o>=0){if(o&1024)return!0;if(o&16)return s?Io(s,m,u):!!m;if(o&8){const f=a.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(m[h]!==s[h]&&!Zl(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:s===m?!1:s?m?Io(s,m,u):!0:!!m;return!1}function Io(e,a,l){const s=Object.keys(a);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const c=s[r];if(a[c]!==e[c]&&!Zl(l,c))return!0}return!1}function Ws({vnode:e,parent:a},l){for(;a;){const s=a.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=a.vnode).el=l,a=a.parent;else break}}const Ks="components",Cf="directives";function b(e,a){return Xs(Ks,e,!0,a)||e}const ud=Symbol.for("v-ndc");function cd(e){return We(e)?Xs(Ks,e,!1)||e:e||ud}function tn(e){return Xs(Cf,e)}function Xs(e,a,l=!0,s=!1){const r=Ze||et;if(r){const c=r.type;if(e===Ks){const p=ss(c,!1);if(p&&(p===a||p===mt(a)||p===Za(mt(a))))return c}const m=Po(r[e]||c[e],a)||Po(r.appContext[e],a);return!m&&s?c:m}}function Po(e,a){return e&&(e[a]||e[mt(a)]||e[Za(mt(a))])}const dd=e=>e.__isSuspense;let Jn=0;const wf={name:"Suspense",__isSuspense:!0,process(e,a,l,s,r,c,m,p,o,u){if(e==null)Af(a,l,s,r,c,m,p,o,u);else{if(c&&c.deps>0){a.suspense=e.suspense;return}kf(e,a,l,s,r,m,p,o,u)}},hydrate:$f,create:Qs,normalize:xf},Sf=wf;function Ua(e,a){const l=e.props&&e.props[a];ye(l)&&l()}function Af(e,a,l,s,r,c,m,p,o){const{p:u,o:{createElement:f}}=o,d=f("div"),h=e.suspense=Qs(e,r,s,a,d,l,c,m,p,o);u(null,h.pendingBranch=e.ssContent,d,null,s,h,c,m),h.deps>0?(Ua(e,"onPending"),Ua(e,"onFallback"),u(null,e.ssFallback,a,l,s,null,c,m),Zi(h,e.ssFallback)):h.resolve(!1,!0)}function kf(e,a,l,s,r,c,m,p,{p:o,um:u,o:{createElement:f}}){const d=a.suspense=e.suspense;d.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:g,pendingBranch:C,isInFallback:A,isHydrating:x}=d;if(C)d.pendingBranch=h,Pt(h,C)?(o(C,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0?d.resolve():A&&(x||(o(g,v,l,s,r,null,c,m,p),Zi(d,v)))):(d.pendingId=Jn++,x?(d.isHydrating=!1,d.activeBranch=C):u(C,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),A?(o(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0?d.resolve():(o(g,v,l,s,r,null,c,m,p),Zi(d,v))):g&&Pt(h,g)?(o(g,h,l,s,r,d,c,m,p),d.resolve(!0)):(o(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0&&d.resolve()));else if(g&&Pt(h,g))o(g,h,l,s,r,d,c,m,p),Zi(d,h);else if(Ua(a,"onPending"),d.pendingBranch=h,h.shapeFlag&512?d.pendingId=h.component.suspenseId:d.pendingId=Jn++,o(null,h,d.hiddenContainer,null,r,d,c,m,p),d.deps<=0)d.resolve();else{const{timeout:_,pendingId:S}=d;_>0?setTimeout(()=>{d.pendingId===S&&d.fallback(v)},_):_===0&&d.fallback(v)}}function Qs(e,a,l,s,r,c,m,p,o,u,f=!1){const{p:d,m:h,um:v,n:g,o:{parentNode:C,remove:A}}=u;let x;const _=Bf(e);_&&a!=null&&a.pendingBranch&&(x=a.pendingId,a.deps++);const S=e.props?kl(e.props.timeout):void 0,$=c,B={vnode:e,parent:a,parentComponent:l,namespace:m,container:s,hiddenContainer:r,deps:0,pendingId:Jn++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,M=!1){const{vnode:F,activeBranch:I,pendingBranch:L,pendingId:W,effects:G,parentComponent:de,container:Be}=B;let O=!1;B.isHydrating?B.isHydrating=!1:E||(O=I&&L.transition&&L.transition.mode==="out-in",O&&(I.transition.afterLeave=()=>{W===B.pendingId&&(h(L,Be,c===$?g(I):c,0),xl(G))}),I&&(C(I.el)!==B.hiddenContainer&&(c=g(I)),v(I,de,B,!0)),O||h(L,Be,c,0)),Zi(B,L),B.pendingBranch=null,B.isInFallback=!1;let J=B.parent,ue=!1;for(;J;){if(J.pendingBranch){J.effects.push(...G),ue=!0;break}J=J.parent}!ue&&!O&&xl(G),B.effects=[],_&&a&&a.pendingBranch&&x===a.pendingId&&(a.deps--,a.deps===0&&!M&&a.resolve()),Ua(F,"onResolve")},fallback(E){if(!B.pendingBranch)return;const{vnode:M,activeBranch:F,parentComponent:I,container:L,namespace:W}=B;Ua(M,"onFallback");const G=g(F),de=()=>{B.isInFallback&&(d(null,E,L,G,I,null,W,p,o),Zi(B,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(F.transition.afterLeave=de),B.isInFallback=!0,v(F,I,null,!0),Be||de()},move(E,M,F){B.activeBranch&&h(B.activeBranch,E,M,F),B.container=E},next(){return B.activeBranch&&g(B.activeBranch)},registerDep(E,M){const F=!!B.pendingBranch;F&&B.deps++;const I=E.vnode.el;E.asyncDep.catch(L=>{Ni(L,E,0)}).then(L=>{if(E.isUnmounted||B.isUnmounted||B.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:W}=E;ls(E,L,!1),I&&(W.el=I);const G=!I&&E.subTree.el;M(E,W,C(I||E.subTree.el),I?null:g(E.subTree),B,m,o),G&&A(G),Ws(E,W.el),F&&--B.deps===0&&B.resolve()})},unmount(E,M){B.isUnmounted=!0,B.activeBranch&&v(B.activeBranch,l,E,M),B.pendingBranch&&v(B.pendingBranch,l,E,M)}};return B}function $f(e,a,l,s,r,c,m,p,o){const u=a.suspense=Qs(a,s,l,e.parentNode,document.createElement("div"),null,r,c,m,p,!0),f=o(e,u.pendingBranch=a.ssContent,l,u,c,m);return u.deps===0&&u.resolve(!1,!0),f}function xf(e){const{shapeFlag:a,children:l}=e,s=a&32;e.ssContent=Mo(s?l.default:l),e.ssFallback=s?Mo(l.fallback):t(ct)}function Mo(e){let a;if(ye(e)){const l=Pi&&e._c;l&&(e._d=!1,R()),e=e(),l&&(e._d=!0,a=ht,jd())}return me(e)&&(e=_f(e)),e=wt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function md(e,a){a&&a.pendingBranch?me(e)?a.effects.push(...e):a.effects.push(e):xl(e)}function Zi(e,a){e.activeBranch=a;const{vnode:l,parentComponent:s}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;l.el=r,s&&s.subTree===l&&(s.vnode.el=r,Ws(s,r))}function Bf(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const pd=Symbol.for("v-scx"),fd=()=>Me(pd);function Zs(e,a){return tl(e,null,a)}function gd(e,a){return tl(e,null,{flush:"post"})}function hd(e,a){return tl(e,null,{flush:"sync"})}const dl={};function ut(e,a,l){return tl(e,a,l)}function tl(e,a,{immediate:l,deep:s,flush:r,once:c,onTrack:m,onTrigger:p}=He){if(a&&c){const E=a;a=(...M)=>{E(...M),B()}}const o=et,u=E=>s===!0?E:$i(E,s===!1?1:void 0);let f,d=!1,h=!1;if(st(e)?(f=()=>e.value,d=La(e)):Ti(e)?(f=()=>u(e),d=!0):me(e)?(h=!0,d=e.some(E=>Ti(E)||La(E)),f=()=>e.map(E=>{if(st(E))return E.value;if(Ti(E))return u(E);if(ye(E))return Wt(E,o,2)})):ye(e)?a?f=()=>Wt(e,o,2):f=()=>(v&&v(),kt(e,o,3,[g])):f=gt,a&&s){const E=f;f=()=>$i(E())}let v,g=E=>{v=S.onStop=()=>{Wt(E,o,4),v=S.onStop=void 0}},C;if(ll)if(g=gt,a?l&&kt(a,o,3,[f(),h?[]:void 0,g]):f(),r==="sync"){const E=fd();C=E.__watcherHandles||(E.__watcherHandles=[])}else return gt;let A=h?new Array(e.length).fill(dl):dl;const x=()=>{if(!(!S.active||!S.dirty))if(a){const E=S.run();(s||d||(h?E.some((M,F)=>Vt(M,A[F])):Vt(E,A)))&&(v&&v(),kt(a,o,3,[E,A===dl?void 0:h&&A[0]===dl?[]:A,g]),A=E)}else S.run()};x.allowRecurse=!!a;let _;r==="sync"?_=x:r==="post"?_=()=>lt(x,o&&o.suspense):(x.pre=!0,o&&(x.id=o.uid),_=()=>Ql(x));const S=new na(f,gt,_),$=Ms(),B=()=>{S.stop(),$&&zs($.effects,S)};return a?l?x():A=S.run():r==="post"?lt(S.run.bind(S),o&&o.suspense):S.run(),C&&C.push(B),B}function Tf(e,a,l){const s=this.proxy,r=We(e)?e.includes(".")?_d(s,e):()=>s[e]:e.bind(s,s);let c;ye(a)?c=a:(c=a.handler,l=a);const m=Mi(this),p=tl(r,c.bind(s),l);return m(),p}function _d(e,a){const l=a.split(".");return()=>{let s=e;for(let r=0;r<l.length&&s;r++)s=s[l[r]];return s}}function $i(e,a,l=0,s){if(!Le(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(s=s||new Set,s.has(e))return e;if(s.add(e),st(e))$i(e.value,a,l,s);else if(me(e))for(let r=0;r<e.length;r++)$i(e[r],a,l,s);else if(Vi(e)||Wi(e))e.forEach(r=>{$i(r,a,l,s)});else if(zc(e))for(const r in e)$i(e[r],a,l,s);return e}function il(e,a){if(Ze===null)return e;const l=un(Ze)||Ze.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[c,m,p,o=He]=a[r];c&&(ye(c)&&(c={mounted:c,updated:c}),c.deep&&$i(m),s.push({dir:c,instance:l,value:m,oldValue:void 0,arg:p,modifiers:o}))}return e}function Ht(e,a,l,s){const r=e.dirs,c=a&&a.dirs;for(let m=0;m<r.length;m++){const p=r[m];c&&(p.oldValue=c[m].value);let o=p.dir[s];o&&(Fi(),kt(o,l,8,[e.el,p,e,a]),Hi())}}const oi=Symbol("_leaveCb"),ml=Symbol("_enterCb");function eo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bi(()=>{e.isMounted=!0}),sn(()=>{e.isUnmounting=!0}),e}const Bt=[Function,Array],to={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Ef={name:"BaseTransition",props:to,setup(e,{slots:a}){const l=jt(),s=eo();let r;return()=>{const c=a.default&&an(a.default(),!0);if(!c||!c.length)return;let m=c[0];if(c.length>1){for(const C of c)if(C.type!==ct){m=C;break}}const p=Re(e),{mode:o}=p;if(s.isLeaving)return vn(m);const u=Vo(m);if(!u)return vn(m);const f=sa(u,p,s,l);Di(u,f);const d=l.subTree,h=d&&Vo(d);let v=!1;const{getTransitionKey:g}=u.type;if(g){const C=g();r===void 0?r=C:C!==r&&(r=C,v=!0)}if(h&&h.type!==ct&&(!Pt(u,h)||v)){const C=sa(h,p,s,l);if(Di(h,C),o==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},vn(m);o==="in-out"&&u.type!==ct&&(C.delayLeave=(A,x,_)=>{const S=vd(s,h);S[String(h.key)]=h,A[oi]=()=>{x(),A[oi]=void 0,delete f.delayedLeave},f.delayedLeave=_})}return m}}},bd=Ef;function vd(e,a){const{leavingVNodes:l}=e;let s=l.get(a.type);return s||(s=Object.create(null),l.set(a.type,s)),s}function sa(e,a,l,s){const{appear:r,mode:c,persisted:m=!1,onBeforeEnter:p,onEnter:o,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:C,onAppear:A,onAfterAppear:x,onAppearCancelled:_}=a,S=String(e.key),$=vd(l,e),B=(F,I)=>{F&&kt(F,s,9,I)},E=(F,I)=>{const L=I[1];B(F,I),me(F)?F.every(W=>W.length<=1)&&L():F.length<=1&&L()},M={mode:c,persisted:m,beforeEnter(F){let I=p;if(!l.isMounted)if(r)I=C||p;else return;F[oi]&&F[oi](!0);const L=$[S];L&&Pt(e,L)&&L.el[oi]&&L.el[oi](),B(I,[F])},enter(F){let I=o,L=u,W=f;if(!l.isMounted)if(r)I=A||o,L=x||u,W=_||f;else return;let G=!1;const de=F[ml]=Be=>{G||(G=!0,Be?B(W,[F]):B(L,[F]),M.delayedLeave&&M.delayedLeave(),F[ml]=void 0)};I?E(I,[F,de]):de()},leave(F,I){const L=String(e.key);if(F[ml]&&F[ml](!0),l.isUnmounting)return I();B(d,[F]);let W=!1;const G=F[oi]=de=>{W||(W=!0,I(),de?B(g,[F]):B(v,[F]),F[oi]=void 0,$[L]===e&&delete $[L])};$[L]=e,h?E(h,[F,G]):G()},clone(F){return sa(F,a,l,s)}};return M}function vn(e){if(al(e))return e=Lt(e),e.children=null,e}function Vo(e){return al(e)?e.children?e.children[0]:void 0:e}function Di(e,a){e.shapeFlag&6&&e.component?Di(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function an(e,a=!1,l){let s=[],r=0;for(let c=0;c<e.length;c++){let m=e[c];const p=l==null?m.key:String(l)+String(m.key!=null?m.key:c);m.type===we?(m.patchFlag&128&&r++,s=s.concat(an(m.children,a,p))):(a||m.type!==ct)&&s.push(p!=null?Lt(m,{key:p}):m)}if(r>1)for(let c=0;c<s.length;c++)s[c].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function z(e,a){return ye(e)?Je({name:e.name},a,{setup:e}):e}const Ei=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Rf(e){ye(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:s,delay:r=200,timeout:c,suspensible:m=!0,onError:p}=e;let o=null,u,f=0;const d=()=>(f++,o=null,h()),h=()=>{let v;return o||(v=o=a().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),p)return new Promise((C,A)=>{p(g,()=>C(d()),()=>A(g),f+1)});throw g}).then(g=>v!==o&&o?o:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=et;if(u)return()=>yn(u,v);const g=_=>{o=null,Ni(_,v,13,!s)};if(m&&v.suspense||ll)return h().then(_=>()=>yn(_,v)).catch(_=>(g(_),()=>s?t(s,{error:_}):null));const C=j(!1),A=j(),x=j(!!r);return r&&setTimeout(()=>{x.value=!1},r),c!=null&&setTimeout(()=>{if(!C.value&&!A.value){const _=new Error(`Async component timed out after ${c}ms.`);g(_),A.value=_}},c),h().then(()=>{C.value=!0,v.parent&&al(v.parent.vnode)&&(v.parent.effect.dirty=!0,Ql(v.parent.update))}).catch(_=>{g(_),A.value=_}),()=>{if(C.value&&u)return yn(u,v);if(A.value&&s)return t(s,{error:A.value});if(l&&!x.value)return t(l)}}})}function yn(e,a){const{ref:l,props:s,children:r,ce:c}=a.vnode,m=t(e,s,r);return m.ref=l,m.ce=c,delete a.vnode.ce,m}const al=e=>e.type.__isKeepAlive,zf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=jt(),s=l.ctx;if(!s.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,c=new Set;let m=null;const p=l.suspense,{renderer:{p:o,m:u,um:f,o:{createElement:d}}}=s,h=d("div");s.activate=(_,S,$,B,E)=>{const M=_.component;u(_,S,$,0,p),o(M.vnode,_,S,$,M,p,B,_.slotScopeIds,E),lt(()=>{M.isDeactivated=!1,M.a&&Ki(M.a);const F=_.props&&_.props.onVnodeMounted;F&&ft(F,M.parent,_)},p)},s.deactivate=_=>{const S=_.component;u(_,h,null,1,p),lt(()=>{S.da&&Ki(S.da);const $=_.props&&_.props.onVnodeUnmounted;$&&ft($,S.parent,_),S.isDeactivated=!0},p)};function v(_){Cn(_),f(_,l,p,!0)}function g(_){r.forEach((S,$)=>{const B=ss(S.type);B&&(!_||!_(B))&&C($)})}function C(_){const S=r.get(_);!m||!Pt(S,m)?v(S):m&&Cn(m),r.delete(_),c.delete(_)}ut(()=>[e.include,e.exclude],([_,S])=>{_&&g($=>ka(_,$)),S&&g($=>!ka(S,$))},{flush:"post",deep:!0});let A=null;const x=()=>{A!=null&&r.set(A,wn(l.subTree))};return bi(x),nn(x),sn(()=>{r.forEach(_=>{const{subTree:S,suspense:$}=l,B=wn(S);if(_.type===B.type&&_.key===B.key){Cn(B);const E=B.component.da;E&&lt(E,$);return}v(_)})}),()=>{if(A=null,!a.default)return null;const _=a.default(),S=_[0];if(_.length>1)return m=null,_;if(!zt(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return m=null,S;let $=wn(S);const B=$.type,E=ss(Ei($)?$.type.__asyncResolved||{}:B),{include:M,exclude:F,max:I}=e;if(M&&(!E||!ka(M,E))||F&&E&&ka(F,E))return m=$,S;const L=$.key==null?B:$.key,W=r.get(L);return $.el&&($=Lt($),S.shapeFlag&128&&(S.ssContent=$)),A=L,W?($.el=W.el,$.component=W.component,$.transition&&Di($,$.transition),$.shapeFlag|=512,c.delete(L),c.add(L)):(c.add(L),I&&c.size>parseInt(I,10)&&C(c.values().next().value)),$.shapeFlag|=256,m=$,dd(S.type)?S:$}}},Df=zf;function ka(e,a){return me(e)?e.some(l=>ka(l,a)):We(e)?e.split(",").includes(a):mp(e)?e.test(a):!1}function io(e,a){yd(e,"a",a)}function ao(e,a){yd(e,"da",a)}function yd(e,a,l=et){const s=e.__wdc||(e.__wdc=()=>{let r=l;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ln(a,s,l),l){let r=l.parent;for(;r&&r.parent;)al(r.parent.vnode)&&If(s,a,l,r),r=r.parent}}function If(e,a,l,s){const r=ln(a,e,s,!0);Li(()=>{zs(s[a],r)},l)}function Cn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function wn(e){return e.shapeFlag&128?e.ssContent:e}function ln(e,a,l=et,s=!1){if(l){const r=l[e]||(l[e]=[]),c=a.__weh||(a.__weh=(...m)=>{if(l.isUnmounted)return;Fi();const p=Mi(l),o=kt(a,l,e,m);return p(),Hi(),o});return s?r.unshift(c):r.push(c),c}}const Qt=e=>(a,l=et)=>(!ll||e==="sp")&&ln(e,(...s)=>a(...s),l),Cd=Qt("bm"),bi=Qt("m"),wd=Qt("bu"),nn=Qt("u"),sn=Qt("bum"),Li=Qt("um"),Sd=Qt("sp"),Ad=Qt("rtg"),kd=Qt("rtc");function $d(e,a=et){ln("ec",e,a)}function Qe(e,a,l,s){let r;const c=l&&l[s];if(me(e)||We(e)){r=new Array(e.length);for(let m=0,p=e.length;m<p;m++)r[m]=a(e[m],m,void 0,c&&c[m])}else if(typeof e=="number"){r=new Array(e);for(let m=0;m<e;m++)r[m]=a(m+1,m,void 0,c&&c[m])}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(m,p)=>a(m,p,void 0,c&&c[p]));else{const m=Object.keys(e);r=new Array(m.length);for(let p=0,o=m.length;p<o;p++){const u=m[p];r[p]=a(e[u],u,p,c&&c[p])}}else r=[];return l&&(l[s]=r),r}function Pf(e,a){for(let l=0;l<a.length;l++){const s=a[l];if(me(s))for(let r=0;r<s.length;r++)e[s[r].name]=s[r].fn;else s&&(e[s.name]=s.key?(...r)=>{const c=s.fn(...r);return c&&(c.key=s.key),c}:s.fn)}return e}function oa(e,a,l={},s,r){if(Ze.isCE||Ze.parent&&Ei(Ze.parent)&&Ze.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,s&&s());let c=e[a];c&&c._c&&(c._d=!1),R();const m=c&&xd(c(l)),p=V(we,{key:l.key||m&&m.key||`_${a}`},m||(s?s():[]),m&&e._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),c&&c._c&&(c._d=!0),p}function xd(e){return e.some(a=>zt(a)?!(a.type===ct||a.type===we&&!xd(a.children)):!0)?e:null}function Mf(e,a){const l={};for(const s in e)l[a&&/[A-Z]/.test(s)?`on:${s}`:za(s)]=e[s];return l}const Wn=e=>e?Jd(e)?un(e)||e.proxy:Wn(e.parent):null,Da=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wn(e.parent),$root:e=>Wn(e.root),$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ql(e.update)}),$nextTick:e=>e.n||(e.n=ha.bind(e.proxy)),$watch:e=>Tf.bind(e)}),Sn=(e,a)=>e!==He&&!e.__isScriptSetup&&ze(e,a),Kn={get({_:e},a){const{ctx:l,setupState:s,data:r,props:c,accessCache:m,type:p,appContext:o}=e;let u;if(a[0]!=="$"){const v=m[a];if(v!==void 0)switch(v){case 1:return s[a];case 2:return r[a];case 4:return l[a];case 3:return c[a]}else{if(Sn(s,a))return m[a]=1,s[a];if(r!==He&&ze(r,a))return m[a]=2,r[a];if((u=e.propsOptions[0])&&ze(u,a))return m[a]=3,c[a];if(l!==He&&ze(l,a))return m[a]=4,l[a];Xn&&(m[a]=0)}}const f=Da[a];let d,h;if(f)return a==="$attrs"&&bt(e,"get",a),f(e);if((d=p.__cssModules)&&(d=d[a]))return d;if(l!==He&&ze(l,a))return m[a]=4,l[a];if(h=o.config.globalProperties,ze(h,a))return h[a]},set({_:e},a,l){const{data:s,setupState:r,ctx:c}=e;return Sn(r,a)?(r[a]=l,!0):s!==He&&ze(s,a)?(s[a]=l,!0):ze(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(c[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:s,appContext:r,propsOptions:c}},m){let p;return!!l[m]||e!==He&&ze(e,m)||Sn(a,m)||(p=c[0])&&ze(p,m)||ze(s,m)||ze(Da,m)||ze(r.config.globalProperties,m)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:ze(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},Vf=Je({},Kn,{get(e,a){if(a!==Symbol.unscopables)return Kn.get(e,a,e)},has(e,a){return a[0]!=="_"&&!_p(a)}});function Ff(){return null}function Hf(){return null}function Nf(e){}function Lf(e){}function Of(){return null}function jf(){}function qf(e,a){return null}function Gf(){return Td().slots}function Bd(){return Td().attrs}function Td(){const e=jt();return e.setupContext||(e.setupContext=Xd(e))}function Ya(e){return me(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function Uf(e,a){const l=Ya(e);for(const s in a){if(s.startsWith("__skip"))continue;let r=l[s];r?me(r)||ye(r)?r=l[s]={type:r,default:a[s]}:r.default=a[s]:r===null&&(r=l[s]={default:a[s]}),r&&a[`__skip_${s}`]&&(r.skipFactory=!0)}return l}function Yf(e,a){return!e||!a?e||a:me(e)&&me(a)?e.concat(a):Je({},Ya(e),Ya(a))}function Jf(e,a){const l={};for(const s in e)a.includes(s)||Object.defineProperty(l,s,{enumerable:!0,get:()=>e[s]});return l}function Wf(e){const a=jt();let l=e();return as(),Ds(l)&&(l=l.catch(s=>{throw Mi(a),s})),[l,()=>Mi(a)]}let Xn=!0;function Kf(e){const a=lo(e),l=e.proxy,s=e.ctx;Xn=!1,a.beforeCreate&&Fo(a.beforeCreate,e,"bc");const{data:r,computed:c,methods:m,watch:p,provide:o,inject:u,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:g,activated:C,deactivated:A,beforeDestroy:x,beforeUnmount:_,destroyed:S,unmounted:$,render:B,renderTracked:E,renderTriggered:M,errorCaptured:F,serverPrefetch:I,expose:L,inheritAttrs:W,components:G,directives:de,filters:Be}=a;if(u&&Xf(u,s,null),m)for(const ue in m){const ie=m[ue];ye(ie)&&(s[ue]=ie.bind(l))}if(r){const ue=r.call(l,l);Le(ue)&&(e.data=Xt(ue))}if(Xn=!0,c)for(const ue in c){const ie=c[ue],Te=ye(ie)?ie.bind(l,l):ye(ie.get)?ie.get.bind(l,l):gt,Ue=!ye(ie)&&ye(ie.set)?ie.set.bind(l):gt,tt=H({get:Te,set:Ue});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Oe=>tt.value=Oe})}if(p)for(const ue in p)Ed(p[ue],s,l,ue);if(o){const ue=ye(o)?o.call(l):o;Reflect.ownKeys(ue).forEach(ie=>{nt(ie,ue[ie])})}f&&Fo(f,e,"c");function J(ue,ie){me(ie)?ie.forEach(Te=>ue(Te.bind(l))):ie&&ue(ie.bind(l))}if(J(Cd,d),J(bi,h),J(wd,v),J(nn,g),J(io,C),J(ao,A),J($d,F),J(kd,E),J(Ad,M),J(sn,_),J(Li,$),J(Sd,I),me(L))if(L.length){const ue=e.exposed||(e.exposed={});L.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>l[ie],set:Te=>l[ie]=Te})})}else e.exposed||(e.exposed={});B&&e.render===gt&&(e.render=B),W!=null&&(e.inheritAttrs=W),G&&(e.components=G),de&&(e.directives=de)}function Xf(e,a,l=gt){me(e)&&(e=Qn(e));for(const s in e){const r=e[s];let c;Le(r)?"default"in r?c=Me(r.from||s,r.default,!0):c=Me(r.from||s):c=Me(r),st(c)?Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get:()=>c.value,set:m=>c.value=m}):a[s]=c}}function Fo(e,a,l){kt(me(e)?e.map(s=>s.bind(a.proxy)):e.bind(a.proxy),a,l)}function Ed(e,a,l,s){const r=s.includes(".")?_d(l,s):()=>l[s];if(We(e)){const c=a[e];ye(c)&&ut(r,c)}else if(ye(e))ut(r,e.bind(l));else if(Le(e))if(me(e))e.forEach(c=>Ed(c,a,l,s));else{const c=ye(e.handler)?e.handler.bind(l):a[e.handler];ye(c)&&ut(r,c,e)}}function lo(e){const a=e.type,{mixins:l,extends:s}=a,{mixins:r,optionsCache:c,config:{optionMergeStrategies:m}}=e.appContext,p=c.get(a);let o;return p?o=p:!r.length&&!l&&!s?o=a:(o={},r.length&&r.forEach(u=>Tl(o,u,m,!0)),Tl(o,a,m)),Le(a)&&c.set(a,o),o}function Tl(e,a,l,s=!1){const{mixins:r,extends:c}=a;c&&Tl(e,c,l,!0),r&&r.forEach(m=>Tl(e,m,l,!0));for(const m in a)if(!(s&&m==="expose")){const p=Qf[m]||l&&l[m];e[m]=p?p(e[m],a[m]):a[m]}return e}const Qf={data:Ho,props:No,emits:No,methods:$a,computed:$a,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:$a,directives:$a,watch:eg,provide:Ho,inject:Zf};function Ho(e,a){return a?e?function(){return Je(ye(e)?e.call(this,this):e,ye(a)?a.call(this,this):a)}:a:e}function Zf(e,a){return $a(Qn(e),Qn(a))}function Qn(e){if(me(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function dt(e,a){return e?[...new Set([].concat(e,a))]:a}function $a(e,a){return e?Je(Object.create(null),e,a):a}function No(e,a){return e?me(e)&&me(a)?[...new Set([...e,...a])]:Je(Object.create(null),Ya(e),Ya(a??{})):a}function eg(e,a){if(!e)return a;if(!a)return e;const l=Je(Object.create(null),e);for(const s in a)l[s]=dt(e[s],a[s]);return l}function Rd(){return{app:null,config:{isNativeTag:cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ig(e,a){return function(s,r=null){ye(s)||(s=Je({},s)),r!=null&&!Le(r)&&(r=null);const c=Rd(),m=new WeakSet;let p=!1;const o=c.app={_uid:tg++,_component:s,_props:r,_container:null,_context:c,_instance:null,version:Zd,get config(){return c.config},set config(u){},use(u,...f){return m.has(u)||(u&&ye(u.install)?(m.add(u),u.install(o,...f)):ye(u)&&(m.add(u),u(o,...f))),o},mixin(u){return c.mixins.includes(u)||c.mixins.push(u),o},component(u,f){return f?(c.components[u]=f,o):c.components[u]},directive(u,f){return f?(c.directives[u]=f,o):c.directives[u]},mount(u,f,d){if(!p){const h=t(s,r);return h.appContext=c,d===!0?d="svg":d===!1&&(d=void 0),f&&a?a(h,u):e(h,u,d),p=!0,o._container=u,u.__vue_app__=o,un(h.component)||h.component.proxy}},unmount(){p&&(e(null,o._container),delete o._container.__vue_app__)},provide(u,f){return c.provides[u]=f,o},runWithContext(u){Ja=o;try{return u()}finally{Ja=null}}};return o}}let Ja=null;function nt(e,a){if(et){let l=et.provides;const s=et.parent&&et.parent.provides;s===l&&(l=et.provides=Object.create(s)),l[e]=a}}function Me(e,a,l=!1){const s=et||Ze;if(s||Ja){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ja._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return l&&ye(a)?a.call(s&&s.proxy):a}}function ag(){return!!(et||Ze||Ja)}function lg(e,a,l,s=!1){const r={},c={};Al(c,rn,1),e.propsDefaults=Object.create(null),zd(e,a,r,c);for(const m in e.propsOptions[0])m in r||(r[m]=void 0);l?e.props=s?r:Qc(r):e.type.props?e.props=r:e.props=c,e.attrs=c}function ng(e,a,l,s){const{props:r,attrs:c,vnode:{patchFlag:m}}=e,p=Re(r),[o]=e.propsOptions;let u=!1;if((s||m>0)&&!(m&16)){if(m&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Zl(e.emitsOptions,h))continue;const v=a[h];if(o)if(ze(c,h))v!==c[h]&&(c[h]=v,u=!0);else{const g=mt(h);r[g]=Zn(o,p,g,v,e,!1)}else v!==c[h]&&(c[h]=v,u=!0)}}}else{zd(e,a,r,c)&&(u=!0);let f;for(const d in p)(!a||!ze(a,d)&&((f=At(d))===d||!ze(a,f)))&&(o?l&&(l[d]!==void 0||l[f]!==void 0)&&(r[d]=Zn(o,p,d,void 0,e,!0)):delete r[d]);if(c!==p)for(const d in c)(!a||!ze(a,d))&&(delete c[d],u=!0)}u&&Jt(e,"set","$attrs")}function zd(e,a,l,s){const[r,c]=e.propsOptions;let m=!1,p;if(a)for(let o in a){if(Ra(o))continue;const u=a[o];let f;r&&ze(r,f=mt(o))?!c||!c.includes(f)?l[f]=u:(p||(p={}))[f]=u:Zl(e.emitsOptions,o)||(!(o in s)||u!==s[o])&&(s[o]=u,m=!0)}if(c){const o=Re(l),u=p||He;for(let f=0;f<c.length;f++){const d=c[f];l[d]=Zn(r,o,d,u[d],e,!ze(u,d))}}return m}function Zn(e,a,l,s,r,c){const m=e[l];if(m!=null){const p=ze(m,"default");if(p&&s===void 0){const o=m.default;if(m.type!==Function&&!m.skipFactory&&ye(o)){const{propsDefaults:u}=r;if(l in u)s=u[l];else{const f=Mi(r);s=u[l]=o.call(null,a),f()}}else s=o}m[0]&&(c&&!p?s=!1:m[1]&&(s===""||s===At(l))&&(s=!0))}return s}function Dd(e,a,l=!1){const s=a.propsCache,r=s.get(e);if(r)return r;const c=e.props,m={},p=[];let o=!1;if(!ye(e)){const f=d=>{o=!0;const[h,v]=Dd(d,a,!0);Je(m,h),v&&p.push(...v)};!l&&a.mixins.length&&a.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!c&&!o)return Le(e)&&s.set(e,Ji),Ji;if(me(c))for(let f=0;f<c.length;f++){const d=mt(c[f]);Lo(d)&&(m[d]=He)}else if(c)for(const f in c){const d=mt(f);if(Lo(d)){const h=c[f],v=m[d]=me(h)||ye(h)?{type:h}:Je({},h);if(v){const g=qo(Boolean,v.type),C=qo(String,v.type);v[0]=g>-1,v[1]=C<0||g<C,(g>-1||ze(v,"default"))&&p.push(d)}}}const u=[m,p];return Le(e)&&s.set(e,u),u}function Lo(e){return e[0]!=="$"}function Oo(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function jo(e,a){return Oo(e)===Oo(a)}function qo(e,a){return me(a)?a.findIndex(l=>jo(l,e)):ye(a)&&jo(a,e)?0:-1}const Id=e=>e[0]==="_"||e==="$stable",no=e=>me(e)?e.map(wt):[wt(e)],sg=(e,a,l)=>{if(a._n)return a;const s=i((...r)=>no(a(...r)),l);return s._c=!1,s},Pd=(e,a,l)=>{const s=e._ctx;for(const r in e){if(Id(r))continue;const c=e[r];if(ye(c))a[r]=sg(r,c,s);else if(c!=null){const m=no(c);a[r]=()=>m}}},Md=(e,a)=>{const l=no(a);e.slots.default=()=>l},og=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Re(a),Al(a,"_",l)):Pd(a,e.slots={})}else e.slots={},a&&Md(e,a);Al(e.slots,rn,1)},rg=(e,a,l)=>{const{vnode:s,slots:r}=e;let c=!0,m=He;if(s.shapeFlag&32){const p=a._;p?l&&p===1?c=!1:(Je(r,a),!l&&p===1&&delete r._):(c=!a.$stable,Pd(a,r)),m=a}else a&&(Md(e,a),m={default:1});if(c)for(const p in r)!Id(p)&&m[p]==null&&delete r[p]};function El(e,a,l,s,r=!1){if(me(e)){e.forEach((h,v)=>El(h,a&&(me(a)?a[v]:a),l,s,r));return}if(Ei(s)&&!r)return;const c=s.shapeFlag&4?un(s.component)||s.component.proxy:s.el,m=r?null:c,{i:p,r:o}=e,u=a&&a.r,f=p.refs===He?p.refs={}:p.refs,d=p.setupState;if(u!=null&&u!==o&&(We(u)?(f[u]=null,ze(d,u)&&(d[u]=null)):st(u)&&(u.value=null)),ye(o))Wt(o,p,12,[m,f]);else{const h=We(o),v=st(o),g=e.f;if(h||v){const C=()=>{if(g){const A=h?ze(d,o)?d[o]:f[o]:o.value;r?me(A)&&zs(A,c):me(A)?A.includes(c)||A.push(c):h?(f[o]=[c],ze(d,o)&&(d[o]=f[o])):(o.value=[c],e.k&&(f[e.k]=o.value))}else h?(f[o]=m,ze(d,o)&&(d[o]=m)):v&&(o.value=m,e.k&&(f[e.k]=m))};r||g?C():(C.id=-1,lt(C,l))}}}let ii=!1;const ug=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",cg=e=>e.namespaceURI.includes("MathML"),pl=e=>{if(ug(e))return"svg";if(cg(e))return"mathml"},fl=e=>e.nodeType===8;function dg(e){const{mt:a,p:l,o:{patchProp:s,createText:r,nextSibling:c,parentNode:m,remove:p,insert:o,createComment:u}}=e,f=(S,$)=>{if(!$.hasChildNodes()){l(null,S,$),Bl(),$._vnode=S;return}ii=!1,d($.firstChild,S,null,null,null),Bl(),$._vnode=S,ii&&console.error("Hydration completed but contains mismatches.")},d=(S,$,B,E,M,F=!1)=>{const I=fl(S)&&S.data==="[",L=()=>C(S,$,B,E,M,I),{type:W,ref:G,shapeFlag:de,patchFlag:Be}=$;let O=S.nodeType;$.el=S,Be===-2&&(F=!1,$.dynamicChildren=null);let J=null;switch(W){case Ii:O!==3?$.children===""?(o($.el=r(""),m(S),S),J=S):J=L():(S.data!==$.children&&(ii=!0,S.data=$.children),J=c(S));break;case ct:_(S)?(J=c(S),x($.el=S.content.firstChild,S,B)):O!==8||I?J=L():J=c(S);break;case Ri:if(I&&(S=c(S),O=S.nodeType),O===1||O===3){J=S;const ue=!$.children.length;for(let ie=0;ie<$.staticCount;ie++)ue&&($.children+=J.nodeType===1?J.outerHTML:J.data),ie===$.staticCount-1&&($.anchor=J),J=c(J);return I?c(J):J}else L();break;case we:I?J=g(S,$,B,E,M,F):J=L();break;default:if(de&1)(O!==1||$.type.toLowerCase()!==S.tagName.toLowerCase())&&!_(S)?J=L():J=h(S,$,B,E,M,F);else if(de&6){$.slotScopeIds=M;const ue=m(S);if(I?J=A(S):fl(S)&&S.data==="teleport start"?J=A(S,S.data,"teleport end"):J=c(S),a($,ue,null,B,E,pl(ue),F),Ei($)){let ie;I?(ie=t(we),ie.anchor=J?J.previousSibling:ue.lastChild):ie=S.nodeType===3?n(""):t("div"),ie.el=S,$.component.subTree=ie}}else de&64?O!==8?J=L():J=$.type.hydrate(S,$,B,E,M,F,e,v):de&128&&(J=$.type.hydrate(S,$,B,E,pl(m(S)),M,F,e,d))}return G!=null&&El(G,null,E,$),J},h=(S,$,B,E,M,F)=>{F=F||!!$.dynamicChildren;const{type:I,props:L,patchFlag:W,shapeFlag:G,dirs:de,transition:Be}=$,O=I==="input"||I==="option";if(O||W!==-1){de&&Ht($,null,B,"created");let J=!1;if(_(S)){J=Nd(E,Be)&&B&&B.vnode.props&&B.vnode.props.appear;const ie=S.content.firstChild;J&&Be.beforeEnter(ie),x(ie,S,B),$.el=S=ie}if(G&16&&!(L&&(L.innerHTML||L.textContent))){let ie=v(S.firstChild,$,S,B,E,M,F);for(;ie;){ii=!0;const Te=ie;ie=ie.nextSibling,p(Te)}}else G&8&&S.textContent!==$.children&&(ii=!0,S.textContent=$.children);if(L)if(O||!F||W&48)for(const ie in L)(O&&(ie.endsWith("value")||ie==="indeterminate")||Qa(ie)&&!Ra(ie)||ie[0]===".")&&s(S,ie,null,L[ie],void 0,void 0,B);else L.onClick&&s(S,"onClick",null,L.onClick,void 0,void 0,B);let ue;(ue=L&&L.onVnodeBeforeMount)&&ft(ue,B,$),de&&Ht($,null,B,"beforeMount"),((ue=L&&L.onVnodeMounted)||de||J)&&md(()=>{ue&&ft(ue,B,$),J&&Be.enter(S),de&&Ht($,null,B,"mounted")},E)}return S.nextSibling},v=(S,$,B,E,M,F,I)=>{I=I||!!$.dynamicChildren;const L=$.children,W=L.length;for(let G=0;G<W;G++){const de=I?L[G]:L[G]=wt(L[G]);if(S)S=d(S,de,E,M,F,I);else{if(de.type===Ii&&!de.children)continue;ii=!0,l(null,de,B,null,E,M,pl(B),F)}}return S},g=(S,$,B,E,M,F)=>{const{slotScopeIds:I}=$;I&&(M=M?M.concat(I):I);const L=m(S),W=v(c(S),$,L,B,E,M,F);return W&&fl(W)&&W.data==="]"?c($.anchor=W):(ii=!0,o($.anchor=u("]"),L,W),W)},C=(S,$,B,E,M,F)=>{if(ii=!0,$.el=null,F){const W=A(S);for(;;){const G=c(S);if(G&&G!==W)p(G);else break}}const I=c(S),L=m(S);return p(S),l(null,$,L,I,B,E,pl(L),M),I},A=(S,$="[",B="]")=>{let E=0;for(;S;)if(S=c(S),S&&fl(S)&&(S.data===$&&E++,S.data===B)){if(E===0)return c(S);E--}return S},x=(S,$,B)=>{const E=$.parentNode;E&&E.replaceChild(S,$);let M=B;for(;M;)M.vnode.el===$&&(M.vnode.el=M.subTree.el=S),M=M.parent},_=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[f,d]}const lt=md;function Vd(e){return Hd(e)}function Fd(e){return Hd(e,dg)}function Hd(e,a){const l=Dc();l.__VUE__=!0;const{insert:s,remove:r,patchProp:c,createElement:m,createText:p,createComment:o,setText:u,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=gt,insertStaticContent:g}=e,C=(T,D,N,K=null,X=null,le=null,re=void 0,ae=null,ne=!!D.dynamicChildren)=>{if(T===D)return;T&&!Pt(T,D)&&(K=se(T),Oe(T,X,le,!0),T=null),D.patchFlag===-2&&(ne=!1,D.dynamicChildren=null);const{type:Z,ref:ce,shapeFlag:be}=D;switch(Z){case Ii:A(T,D,N,K);break;case ct:x(T,D,N,K);break;case Ri:T==null&&_(D,N,K,re);break;case we:G(T,D,N,K,X,le,re,ae,ne);break;default:be&1?B(T,D,N,K,X,le,re,ae,ne):be&6?de(T,D,N,K,X,le,re,ae,ne):(be&64||be&128)&&Z.process(T,D,N,K,X,le,re,ae,ne,Fe)}ce!=null&&X&&El(ce,T&&T.ref,le,D||T,!D)},A=(T,D,N,K)=>{if(T==null)s(D.el=p(D.children),N,K);else{const X=D.el=T.el;D.children!==T.children&&u(X,D.children)}},x=(T,D,N,K)=>{T==null?s(D.el=o(D.children||""),N,K):D.el=T.el},_=(T,D,N,K)=>{[T.el,T.anchor]=g(T.children,D,N,K,T.el,T.anchor)},S=({el:T,anchor:D},N,K)=>{let X;for(;T&&T!==D;)X=h(T),s(T,N,K),T=X;s(D,N,K)},$=({el:T,anchor:D})=>{let N;for(;T&&T!==D;)N=h(T),r(T),T=N;r(D)},B=(T,D,N,K,X,le,re,ae,ne)=>{D.type==="svg"?re="svg":D.type==="math"&&(re="mathml"),T==null?E(D,N,K,X,le,re,ae,ne):I(T,D,X,le,re,ae,ne)},E=(T,D,N,K,X,le,re,ae)=>{let ne,Z;const{props:ce,shapeFlag:be,transition:_e,dirs:Se}=T;if(ne=T.el=m(T.type,le,ce&&ce.is,ce),be&8?f(ne,T.children):be&16&&F(T.children,ne,null,K,X,An(T,le),re,ae),Se&&Ht(T,null,K,"created"),M(ne,T,T.scopeId,re,K),ce){for(const Ne in ce)Ne!=="value"&&!Ra(Ne)&&c(ne,Ne,null,ce[Ne],le,T.children,K,X,oe);"value"in ce&&c(ne,"value",null,ce.value,le),(Z=ce.onVnodeBeforeMount)&&ft(Z,K,T)}Se&&Ht(T,null,K,"beforeMount");const Ee=Nd(X,_e);Ee&&_e.beforeEnter(ne),s(ne,D,N),((Z=ce&&ce.onVnodeMounted)||Ee||Se)&&lt(()=>{Z&&ft(Z,K,T),Ee&&_e.enter(ne),Se&&Ht(T,null,K,"mounted")},X)},M=(T,D,N,K,X)=>{if(N&&v(T,N),K)for(let le=0;le<K.length;le++)v(T,K[le]);if(X){let le=X.subTree;if(D===le){const re=X.vnode;M(T,re,re.scopeId,re.slotScopeIds,X.parent)}}},F=(T,D,N,K,X,le,re,ae,ne=0)=>{for(let Z=ne;Z<T.length;Z++){const ce=T[Z]=ae?ri(T[Z]):wt(T[Z]);C(null,ce,D,N,K,X,le,re,ae)}},I=(T,D,N,K,X,le,re)=>{const ae=D.el=T.el;let{patchFlag:ne,dynamicChildren:Z,dirs:ce}=D;ne|=T.patchFlag&16;const be=T.props||He,_e=D.props||He;let Se;if(N&&Ci(N,!1),(Se=_e.onVnodeBeforeUpdate)&&ft(Se,N,D,T),ce&&Ht(D,T,N,"beforeUpdate"),N&&Ci(N,!0),Z?L(T.dynamicChildren,Z,ae,N,K,An(D,X),le):re||ie(T,D,ae,null,N,K,An(D,X),le,!1),ne>0){if(ne&16)W(ae,D,be,_e,N,K,X);else if(ne&2&&be.class!==_e.class&&c(ae,"class",null,_e.class,X),ne&4&&c(ae,"style",be.style,_e.style,X),ne&8){const Ee=D.dynamicProps;for(let Ne=0;Ne<Ee.length;Ne++){const Ye=Ee[Ne],it=be[Ye],Dt=_e[Ye];(Dt!==it||Ye==="value")&&c(ae,Ye,it,Dt,X,T.children,N,K,oe)}}ne&1&&T.children!==D.children&&f(ae,D.children)}else!re&&Z==null&&W(ae,D,be,_e,N,K,X);((Se=_e.onVnodeUpdated)||ce)&&lt(()=>{Se&&ft(Se,N,D,T),ce&&Ht(D,T,N,"updated")},K)},L=(T,D,N,K,X,le,re)=>{for(let ae=0;ae<D.length;ae++){const ne=T[ae],Z=D[ae],ce=ne.el&&(ne.type===we||!Pt(ne,Z)||ne.shapeFlag&70)?d(ne.el):N;C(ne,Z,ce,null,K,X,le,re,!0)}},W=(T,D,N,K,X,le,re)=>{if(N!==K){if(N!==He)for(const ae in N)!Ra(ae)&&!(ae in K)&&c(T,ae,N[ae],null,re,D.children,X,le,oe);for(const ae in K){if(Ra(ae))continue;const ne=K[ae],Z=N[ae];ne!==Z&&ae!=="value"&&c(T,ae,Z,ne,re,D.children,X,le,oe)}"value"in K&&c(T,"value",N.value,K.value,re)}},G=(T,D,N,K,X,le,re,ae,ne)=>{const Z=D.el=T?T.el:p(""),ce=D.anchor=T?T.anchor:p("");let{patchFlag:be,dynamicChildren:_e,slotScopeIds:Se}=D;Se&&(ae=ae?ae.concat(Se):Se),T==null?(s(Z,N,K),s(ce,N,K),F(D.children||[],N,ce,X,le,re,ae,ne)):be>0&&be&64&&_e&&T.dynamicChildren?(L(T.dynamicChildren,_e,N,X,le,re,ae),(D.key!=null||X&&D===X.subTree)&&so(T,D,!0)):ie(T,D,N,ce,X,le,re,ae,ne)},de=(T,D,N,K,X,le,re,ae,ne)=>{D.slotScopeIds=ae,T==null?D.shapeFlag&512?X.ctx.activate(D,N,K,re,ne):Be(D,N,K,X,le,re,ne):O(T,D,ne)},Be=(T,D,N,K,X,le,re)=>{const ae=T.component=Yd(T,K,X);if(al(T)&&(ae.ctx.renderer=Fe),Wd(ae),ae.asyncDep){if(X&&X.registerDep(ae,J),!T.el){const ne=ae.subTree=t(ct);x(null,ne,D,N)}}else J(ae,T,D,N,X,le,re)},O=(T,D,N)=>{const K=D.component=T.component;if(yf(T,D,N))if(K.asyncDep&&!K.asyncResolved){ue(K,D,N);return}else K.next=D,pf(K.update),K.effect.dirty=!0,K.update();else D.el=T.el,K.vnode=D},J=(T,D,N,K,X,le,re)=>{const ae=()=>{if(T.isMounted){let{next:ce,bu:be,u:_e,parent:Se,vnode:Ee}=T;{const ji=Ld(T);if(ji){ce&&(ce.el=Ee.el,ue(T,ce,re)),ji.asyncDep.then(()=>{T.isUnmounted||ae()});return}}let Ne=ce,Ye;Ci(T,!1),ce?(ce.el=Ee.el,ue(T,ce,re)):ce=Ee,be&&Ki(be),(Ye=ce.props&&ce.props.onVnodeBeforeUpdate)&&ft(Ye,Se,ce,Ee),Ci(T,!0);const it=Cl(T),Dt=T.subTree;T.subTree=it,C(Dt,it,d(Dt.el),se(Dt),T,X,le),ce.el=it.el,Ne===null&&Ws(T,it.el),_e&&lt(_e,X),(Ye=ce.props&&ce.props.onVnodeUpdated)&&lt(()=>ft(Ye,Se,ce,Ee),X)}else{let ce;const{el:be,props:_e}=D,{bm:Se,m:Ee,parent:Ne}=T,Ye=Ei(D);if(Ci(T,!1),Se&&Ki(Se),!Ye&&(ce=_e&&_e.onVnodeBeforeMount)&&ft(ce,Ne,D),Ci(T,!0),be&&xe){const it=()=>{T.subTree=Cl(T),xe(be,T.subTree,T,X,null)};Ye?D.type.__asyncLoader().then(()=>!T.isUnmounted&&it()):it()}else{const it=T.subTree=Cl(T);C(null,it,N,K,T,X,le),D.el=it.el}if(Ee&&lt(Ee,X),!Ye&&(ce=_e&&_e.onVnodeMounted)){const it=D;lt(()=>ft(ce,Ne,it),X)}(D.shapeFlag&256||Ne&&Ei(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&T.a&&lt(T.a,X),T.isMounted=!0,D=N=K=null}},ne=T.effect=new na(ae,gt,()=>Ql(Z),T.scope),Z=T.update=()=>{ne.dirty&&ne.run()};Z.id=T.uid,Ci(T,!0),Z()},ue=(T,D,N)=>{D.component=T;const K=T.vnode.props;T.vnode=D,T.next=null,ng(T,D.props,K,N),rg(T,D.children,N),Fi(),Do(T),Hi()},ie=(T,D,N,K,X,le,re,ae,ne=!1)=>{const Z=T&&T.children,ce=T?T.shapeFlag:0,be=D.children,{patchFlag:_e,shapeFlag:Se}=D;if(_e>0){if(_e&128){Ue(Z,be,N,K,X,le,re,ae,ne);return}else if(_e&256){Te(Z,be,N,K,X,le,re,ae,ne);return}}Se&8?(ce&16&&oe(Z,X,le),be!==Z&&f(N,be)):ce&16?Se&16?Ue(Z,be,N,K,X,le,re,ae,ne):oe(Z,X,le,!0):(ce&8&&f(N,""),Se&16&&F(be,N,K,X,le,re,ae,ne))},Te=(T,D,N,K,X,le,re,ae,ne)=>{T=T||Ji,D=D||Ji;const Z=T.length,ce=D.length,be=Math.min(Z,ce);let _e;for(_e=0;_e<be;_e++){const Se=D[_e]=ne?ri(D[_e]):wt(D[_e]);C(T[_e],Se,N,null,X,le,re,ae,ne)}Z>ce?oe(T,X,le,!0,!1,be):F(D,N,K,X,le,re,ae,ne,be)},Ue=(T,D,N,K,X,le,re,ae,ne)=>{let Z=0;const ce=D.length;let be=T.length-1,_e=ce-1;for(;Z<=be&&Z<=_e;){const Se=T[Z],Ee=D[Z]=ne?ri(D[Z]):wt(D[Z]);if(Pt(Se,Ee))C(Se,Ee,N,null,X,le,re,ae,ne);else break;Z++}for(;Z<=be&&Z<=_e;){const Se=T[be],Ee=D[_e]=ne?ri(D[_e]):wt(D[_e]);if(Pt(Se,Ee))C(Se,Ee,N,null,X,le,re,ae,ne);else break;be--,_e--}if(Z>be){if(Z<=_e){const Se=_e+1,Ee=Se<ce?D[Se].el:K;for(;Z<=_e;)C(null,D[Z]=ne?ri(D[Z]):wt(D[Z]),N,Ee,X,le,re,ae,ne),Z++}}else if(Z>_e)for(;Z<=be;)Oe(T[Z],X,le,!0),Z++;else{const Se=Z,Ee=Z,Ne=new Map;for(Z=Ee;Z<=_e;Z++){const yt=D[Z]=ne?ri(D[Z]):wt(D[Z]);yt.key!=null&&Ne.set(yt.key,Z)}let Ye,it=0;const Dt=_e-Ee+1;let ji=!1,Co=0;const va=new Array(Dt);for(Z=0;Z<Dt;Z++)va[Z]=0;for(Z=Se;Z<=be;Z++){const yt=T[Z];if(it>=Dt){Oe(yt,X,le,!0);continue}let Ft;if(yt.key!=null)Ft=Ne.get(yt.key);else for(Ye=Ee;Ye<=_e;Ye++)if(va[Ye-Ee]===0&&Pt(yt,D[Ye])){Ft=Ye;break}Ft===void 0?Oe(yt,X,le,!0):(va[Ft-Ee]=Z+1,Ft>=Co?Co=Ft:ji=!0,C(yt,D[Ft],N,null,X,le,re,ae,ne),it++)}const wo=ji?mg(va):Ji;for(Ye=wo.length-1,Z=Dt-1;Z>=0;Z--){const yt=Ee+Z,Ft=D[yt],So=yt+1<ce?D[yt+1].el:K;va[Z]===0?C(null,Ft,N,So,X,le,re,ae,ne):ji&&(Ye<0||Z!==wo[Ye]?tt(Ft,N,So,2):Ye--)}}},tt=(T,D,N,K,X=null)=>{const{el:le,type:re,transition:ae,children:ne,shapeFlag:Z}=T;if(Z&6){tt(T.component.subTree,D,N,K);return}if(Z&128){T.suspense.move(D,N,K);return}if(Z&64){re.move(T,D,N,Fe);return}if(re===we){s(le,D,N);for(let be=0;be<ne.length;be++)tt(ne[be],D,N,K);s(T.anchor,D,N);return}if(re===Ri){S(T,D,N);return}if(K!==2&&Z&1&&ae)if(K===0)ae.beforeEnter(le),s(le,D,N),lt(()=>ae.enter(le),X);else{const{leave:be,delayLeave:_e,afterLeave:Se}=ae,Ee=()=>s(le,D,N),Ne=()=>{be(le,()=>{Ee(),Se&&Se()})};_e?_e(le,Ee,Ne):Ne()}else s(le,D,N)},Oe=(T,D,N,K=!1,X=!1)=>{const{type:le,props:re,ref:ae,children:ne,dynamicChildren:Z,shapeFlag:ce,patchFlag:be,dirs:_e}=T;if(ae!=null&&El(ae,null,N,T,!0),ce&256){D.ctx.deactivate(T);return}const Se=ce&1&&_e,Ee=!Ei(T);let Ne;if(Ee&&(Ne=re&&re.onVnodeBeforeUnmount)&&ft(Ne,D,T),ce&6)U(T.component,N,K);else{if(ce&128){T.suspense.unmount(N,K);return}Se&&Ht(T,null,D,"beforeUnmount"),ce&64?T.type.remove(T,D,N,X,Fe,K):Z&&(le!==we||be>0&&be&64)?oe(Z,D,N,!1,!0):(le===we&&be&384||!X&&ce&16)&&oe(ne,D,N),K&&qt(T)}(Ee&&(Ne=re&&re.onVnodeUnmounted)||Se)&&lt(()=>{Ne&&ft(Ne,D,T),Se&&Ht(T,null,D,"unmounted")},N)},qt=T=>{const{type:D,el:N,anchor:K,transition:X}=T;if(D===we){xt(N,K);return}if(D===Ri){$(T);return}const le=()=>{r(N),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(T.shapeFlag&1&&X&&!X.persisted){const{leave:re,delayLeave:ae}=X,ne=()=>re(N,le);ae?ae(T.el,le,ne):ne()}else le()},xt=(T,D)=>{let N;for(;T!==D;)N=h(T),r(T),T=N;r(D)},U=(T,D,N)=>{const{bum:K,scope:X,update:le,subTree:re,um:ae}=T;K&&Ki(K),X.stop(),le&&(le.active=!1,Oe(re,T,D,N)),ae&&lt(ae,D),lt(()=>{T.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},oe=(T,D,N,K=!1,X=!1,le=0)=>{for(let re=le;re<T.length;re++)Oe(T[re],D,N,K,X)},se=T=>T.shapeFlag&6?se(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let ge=!1;const Ve=(T,D,N)=>{T==null?D._vnode&&Oe(D._vnode,null,null,!0):C(D._vnode||null,T,D,null,null,null,N),ge||(ge=!0,Do(),Bl(),ge=!1),D._vnode=T},Fe={p:C,um:Oe,m:tt,r:qt,mt:Be,mc:F,pc:ie,pbc:L,n:se,o:e};let $e,xe;return a&&([$e,xe]=a(Fe)),{render:Ve,hydrate:$e,createApp:ig(Ve,$e)}}function An({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Ci({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function Nd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function so(e,a,l=!1){const s=e.children,r=a.children;if(me(s)&&me(r))for(let c=0;c<s.length;c++){const m=s[c];let p=r[c];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[c]=ri(r[c]),p.el=m.el),l||so(m,p)),p.type===Ii&&(p.el=m.el)}}function mg(e){const a=e.slice(),l=[0];let s,r,c,m,p;const o=e.length;for(s=0;s<o;s++){const u=e[s];if(u!==0){if(r=l[l.length-1],e[r]<u){a[s]=r,l.push(s);continue}for(c=0,m=l.length-1;c<m;)p=c+m>>1,e[l[p]]<u?c=p+1:m=p;u<e[l[c]]&&(c>0&&(a[s]=l[c-1]),l[c]=s)}}for(c=l.length,m=l[c-1];c-- >0;)l[c]=m,m=a[m];return l}function Ld(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Ld(a)}const pg=e=>e.__isTeleport,Ia=e=>e&&(e.disabled||e.disabled===""),Go=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Uo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,es=(e,a)=>{const l=e&&e.to;return We(l)?a?a(l):null:l},fg={name:"Teleport",__isTeleport:!0,process(e,a,l,s,r,c,m,p,o,u){const{mc:f,pc:d,pbc:h,o:{insert:v,querySelector:g,createText:C,createComment:A}}=u,x=Ia(a.props);let{shapeFlag:_,children:S,dynamicChildren:$}=a;if(e==null){const B=a.el=C(""),E=a.anchor=C("");v(B,l,s),v(E,l,s);const M=a.target=es(a.props,g),F=a.targetAnchor=C("");M&&(v(F,M),m==="svg"||Go(M)?m="svg":(m==="mathml"||Uo(M))&&(m="mathml"));const I=(L,W)=>{_&16&&f(S,L,W,r,c,m,p,o)};x?I(l,E):M&&I(M,F)}else{a.el=e.el;const B=a.anchor=e.anchor,E=a.target=e.target,M=a.targetAnchor=e.targetAnchor,F=Ia(e.props),I=F?l:E,L=F?B:M;if(m==="svg"||Go(E)?m="svg":(m==="mathml"||Uo(E))&&(m="mathml"),$?(h(e.dynamicChildren,$,I,r,c,m,p),so(e,a,!0)):o||d(e,a,I,L,r,c,m,p,!1),x)F?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):gl(a,l,B,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const W=a.target=es(a.props,g);W&&gl(a,W,null,u,0)}else F&&gl(a,E,M,u,1)}Od(a)},remove(e,a,l,s,{um:r,o:{remove:c}},m){const{shapeFlag:p,children:o,anchor:u,targetAnchor:f,target:d,props:h}=e;if(d&&c(f),m&&c(u),p&16){const v=m||!Ia(h);for(let g=0;g<o.length;g++){const C=o[g];r(C,a,l,v,!!C.dynamicChildren)}}},move:gl,hydrate:gg};function gl(e,a,l,{o:{insert:s},m:r},c=2){c===0&&s(e.targetAnchor,a,l);const{el:m,anchor:p,shapeFlag:o,children:u,props:f}=e,d=c===2;if(d&&s(m,a,l),(!d||Ia(f))&&o&16)for(let h=0;h<u.length;h++)r(u[h],a,l,2);d&&s(p,a,l)}function gg(e,a,l,s,r,c,{o:{nextSibling:m,parentNode:p,querySelector:o}},u){const f=a.target=es(a.props,o);if(f){const d=f._lpa||f.firstChild;if(a.shapeFlag&16)if(Ia(a.props))a.anchor=u(m(e),a,p(e),l,s,r,c),a.targetAnchor=d;else{a.anchor=m(e);let h=d;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,f._lpa=a.targetAnchor&&m(a.targetAnchor);break}u(d,a,f,l,s,r,c)}Od(a)}return a.anchor&&m(a.anchor)}const on=fg;function Od(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const we=Symbol.for("v-fgt"),Ii=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),Ri=Symbol.for("v-stc"),Pa=[];let ht=null;function R(e=!1){Pa.push(ht=e?null:[])}function jd(){Pa.pop(),ht=Pa[Pa.length-1]||null}let Pi=1;function ts(e){Pi+=e}function qd(e){return e.dynamicChildren=Pi>0?ht||Ji:null,jd(),Pi>0&&ht&&ht.push(e),e}function pe(e,a,l,s,r,c){return qd(w(e,a,l,s,r,c,!0))}function V(e,a,l,s,r){return qd(t(e,a,l,s,r,!0))}function zt(e){return e?e.__v_isVNode===!0:!1}function Pt(e,a){return e.type===a.type&&e.key===a.key}function hg(e){}const rn="__vInternal",Gd=({key:e})=>e??null,wl=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?We(e)||st(e)||ye(e)?{i:Ze,r:e,k:a,f:!!l}:e:null);function w(e,a=null,l=null,s=0,r=null,c=e===we?0:1,m=!1,p=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Gd(a),ref:a&&wl(a),scopeId:en,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ze};return p?(ro(o,l),c&128&&e.normalize(o)):l&&(o.shapeFlag|=We(l)?8:16),Pi>0&&!m&&ht&&(o.patchFlag>0||c&6)&&o.patchFlag!==32&&ht.push(o),o}const t=_g;function _g(e,a=null,l=null,s=0,r=null,c=!1){if((!e||e===ud)&&(e=ct),zt(e)){const p=Lt(e,a,!0);return l&&ro(p,l),Pi>0&&!c&&ht&&(p.shapeFlag&6?ht[ht.indexOf(e)]=p:ht.push(p)),p.patchFlag|=-2,p}if(kg(e)&&(e=e.__vccOpts),a){a=Ud(a);let{class:p,style:o}=a;p&&!We(p)&&(a.class=el(p)),Le(o)&&(Ls(o)&&!me(o)&&(o=Je({},o)),a.style=ga(o))}const m=We(e)?1:dd(e)?128:pg(e)?64:Le(e)?4:ye(e)?2:0;return w(e,a,l,s,r,m,c,!0)}function Ud(e){return e?Ls(e)||rn in e?Je({},e):e:null}function Lt(e,a,l=!1){const{props:s,ref:r,patchFlag:c,children:m}=e,p=a?Oi(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Gd(p),ref:a&&a.ref?l&&r?me(r)?r.concat(wl(a)):[r,wl(a)]:wl(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==we?c===-1?16:c|16:c,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(Ii,null,e,a)}function bg(e,a){const l=t(Ri,null,e);return l.staticCount=a,l}function oo(e="",a=!1){return a?(R(),V(ct,null,e)):t(ct,null,e)}function wt(e){return e==null||typeof e=="boolean"?t(ct):me(e)?t(we,null,e.slice()):typeof e=="object"?ri(e):t(Ii,null,String(e))}function ri(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function ro(e,a){let l=0;const{shapeFlag:s}=e;if(a==null)a=null;else if(me(a))l=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),ro(e,r()),r._c&&(r._d=!0));return}else{l=32;const r=a._;!r&&!(rn in a)?a._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else ye(a)?(a={default:a,_ctx:Ze},l=32):(a=String(a),s&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function Oi(...e){const a={};for(let l=0;l<e.length;l++){const s=e[l];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=el([a.class,s.class]));else if(r==="style")a.style=ga([a.style,s.style]);else if(Qa(r)){const c=a[r],m=s[r];m&&c!==m&&!(me(c)&&c.includes(m))&&(a[r]=c?[].concat(c,m):m)}else r!==""&&(a[r]=s[r])}return a}function ft(e,a,l,s=null){kt(e,a,7,[l,s])}const vg=Rd();let yg=0;function Yd(e,a,l){const s=e.type,r=(a?a.appContext:e.appContext)||vg,c={uid:yg++,vnode:e,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(s,r),emitsOptions:rd(s,r),emit:null,emitted:null,propsDefaults:He,inheritAttrs:s.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=a?a.root:c,c.emit=gf.bind(null,c),e.ce&&e.ce(c),c}let et=null;const jt=()=>et||Ze;let Rl,is;{const e=Dc(),a=(l,s)=>{let r;return(r=e[l])||(r=e[l]=[]),r.push(s),c=>{r.length>1?r.forEach(m=>m(c)):r[0](c)}};Rl=a("__VUE_INSTANCE_SETTERS__",l=>et=l),is=a("__VUE_SSR_SETTERS__",l=>ll=l)}const Mi=e=>{const a=et;return Rl(e),e.scope.on(),()=>{e.scope.off(),Rl(a)}},as=()=>{et&&et.scope.off(),Rl(null)};function Jd(e){return e.vnode.shapeFlag&4}let ll=!1;function Wd(e,a=!1){a&&is(a);const{props:l,children:s}=e.vnode,r=Jd(e);lg(e,l,r,a),og(e,s);const c=r?Cg(e,a):void 0;return a&&is(!1),c}function Cg(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=Os(new Proxy(e.ctx,Kn));const{setup:s}=l;if(s){const r=e.setupContext=s.length>1?Xd(e):null,c=Mi(e);Fi();const m=Wt(s,e,0,[e.props,r]);if(Hi(),c(),Ds(m)){if(m.then(as,as),a)return m.then(p=>{ls(e,p,a)}).catch(p=>{Ni(p,e,0)});e.asyncDep=m}else ls(e,m,a)}else Kd(e,a)}function ls(e,a,l){ye(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Le(a)&&(e.setupState=Gs(a)),Kd(e,l)}let zl,ns;function wg(e){zl=e,ns=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Vf))}}const Sg=()=>!zl;function Kd(e,a,l){const s=e.type;if(!e.render){if(!a&&zl&&!s.render){const r=s.template||lo(e).template;if(r){const{isCustomElement:c,compilerOptions:m}=e.appContext.config,{delimiters:p,compilerOptions:o}=s,u=Je(Je({isCustomElement:c,delimiters:p},m),o);s.render=zl(r,u)}}e.render=s.render||gt,ns&&ns(e)}{const r=Mi(e);Fi();try{Kf(e)}finally{Hi(),r()}}}function Ag(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return bt(e,"get","$attrs"),a[l]}}))}function Xd(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return Ag(e)},slots:e.slots,emit:e.emit,expose:a}}function un(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gs(Os(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Da)return Da[l](e)},has(a,l){return l in a||l in Da}}))}function ss(e,a=!0){return ye(e)?e.displayName||e.name:e.name||a&&e.__name}function kg(e){return ye(e)&&"__vccOpts"in e}const H=(e,a)=>Kp(e,a,ll);function $g(e,a,l=He){const s=jt(),r=mt(a),c=At(a),m=id((o,u)=>{let f;return hd(()=>{const d=e[a];Vt(f,d)&&(f=d,u())}),{get(){return o(),l.get?l.get(f):f},set(d){const h=s.vnode.props;!(h&&(a in h||r in h||c in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${c}`in h))&&Vt(d,f)&&(f=d,u()),s.emit(`update:${a}`,l.set?l.set(d):d)}}}),p=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?e[p]||{}:m,done:!1}:{done:!0}}}},m}function Y(e,a,l){const s=arguments.length;return s===2?Le(a)&&!me(a)?zt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(s>3?l=Array.prototype.slice.call(arguments,2):s===3&&zt(l)&&(l=[l]),t(e,a,l))}function xg(){}function Bg(e,a,l,s){const r=l[s];if(r&&Qd(r,e))return r;const c=a();return c.memo=e.slice(),l[s]=c}function Qd(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let s=0;s<l.length;s++)if(Vt(l[s],a[s]))return!1;return Pi>0&&ht&&ht.push(e),!0}const Zd="3.4.15",Tg=gt,Eg=cf,Rg=Gi,zg=od,Dg={createComponentInstance:Yd,setupComponent:Wd,renderComponentRoot:Cl,setCurrentRenderingInstance:Ga,isVNode:zt,normalizeVNode:wt},Ig=Dg,Pg=null,Mg=null,Vg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Fg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,Yo=ui&&ui.createElement("template"),Ng={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,s)=>{const r=a==="svg"?ui.createElementNS(Fg,e):a==="mathml"?ui.createElementNS(Hg,e):ui.createElement(e,l?{is:l}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ui.createTextNode(e),createComment:e=>ui.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ui.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,s,r,c){const m=l?l.previousSibling:a.lastChild;if(r&&(r===c||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),l),!(r===c||!(r=r.nextSibling)););else{Yo.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const p=Yo.content;if(s==="svg"||s==="mathml"){const o=p.firstChild;for(;o.firstChild;)p.appendChild(o.firstChild);p.removeChild(o)}a.insertBefore(p,l)}return[m?m.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},ai="transition",ya="animation",ra=Symbol("_vtc"),cn=(e,{slots:a})=>Y(bd,tm(e),a);cn.displayName="Transition";const em={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lg=cn.props=Je({},to,em),wi=(e,a=[])=>{me(e)?e.forEach(l=>l(...a)):e&&e(...a)},Jo=e=>e?me(e)?e.some(a=>a.length>1):e.length>1:!1;function tm(e){const a={};for(const G in e)G in em||(a[G]=e[G]);if(e.css===!1)return a;const{name:l="v",type:s,duration:r,enterFromClass:c=`${l}-enter-from`,enterActiveClass:m=`${l}-enter-active`,enterToClass:p=`${l}-enter-to`,appearFromClass:o=c,appearActiveClass:u=m,appearToClass:f=p,leaveFromClass:d=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:v=`${l}-leave-to`}=e,g=Og(r),C=g&&g[0],A=g&&g[1],{onBeforeEnter:x,onEnter:_,onEnterCancelled:S,onLeave:$,onLeaveCancelled:B,onBeforeAppear:E=x,onAppear:M=_,onAppearCancelled:F=S}=a,I=(G,de,Be)=>{ni(G,de?f:p),ni(G,de?u:m),Be&&Be()},L=(G,de)=>{G._isLeaving=!1,ni(G,d),ni(G,v),ni(G,h),de&&de()},W=G=>(de,Be)=>{const O=G?M:_,J=()=>I(de,G,Be);wi(O,[de,J]),Wo(()=>{ni(de,G?o:c),Gt(de,G?f:p),Jo(O)||Ko(de,s,C,J)})};return Je(a,{onBeforeEnter(G){wi(x,[G]),Gt(G,c),Gt(G,m)},onBeforeAppear(G){wi(E,[G]),Gt(G,o),Gt(G,u)},onEnter:W(!1),onAppear:W(!0),onLeave(G,de){G._isLeaving=!0;const Be=()=>L(G,de);Gt(G,d),am(),Gt(G,h),Wo(()=>{G._isLeaving&&(ni(G,d),Gt(G,v),Jo($)||Ko(G,s,A,Be))}),wi($,[G,Be])},onEnterCancelled(G){I(G,!1),wi(S,[G])},onAppearCancelled(G){I(G,!0),wi(F,[G])},onLeaveCancelled(G){L(G),wi(B,[G])}})}function Og(e){if(e==null)return null;if(Le(e))return[kn(e.enter),kn(e.leave)];{const a=kn(e);return[a,a]}}function kn(e){return kl(e)}function Gt(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[ra]||(e[ra]=new Set)).add(a)}function ni(e,a){a.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const l=e[ra];l&&(l.delete(a),l.size||(e[ra]=void 0))}function Wo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let jg=0;function Ko(e,a,l,s){const r=e._endId=++jg,c=()=>{r===e._endId&&s()};if(l)return setTimeout(c,l);const{type:m,timeout:p,propCount:o}=im(e,a);if(!m)return s();const u=m+"end";let f=0;const d=()=>{e.removeEventListener(u,h),c()},h=v=>{v.target===e&&++f>=o&&d()};setTimeout(()=>{f<o&&d()},p+1),e.addEventListener(u,h)}function im(e,a){const l=window.getComputedStyle(e),s=g=>(l[g]||"").split(", "),r=s(`${ai}Delay`),c=s(`${ai}Duration`),m=Xo(r,c),p=s(`${ya}Delay`),o=s(`${ya}Duration`),u=Xo(p,o);let f=null,d=0,h=0;a===ai?m>0&&(f=ai,d=m,h=c.length):a===ya?u>0&&(f=ya,d=u,h=o.length):(d=Math.max(m,u),f=d>0?m>u?ai:ya:null,h=f?f===ai?c.length:o.length:0);const v=f===ai&&/\b(transform|all)(,|$)/.test(s(`${ai}Property`).toString());return{type:f,timeout:d,propCount:h,hasTransform:v}}function Xo(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,s)=>Qo(l)+Qo(e[s])))}function Qo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function am(){return document.body.offsetHeight}function qg(e,a,l){const s=e[ra];s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const uo=Symbol("_vod"),lm={beforeMount(e,{value:a},{transition:l}){e[uo]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):Ca(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:s}){!a!=!l&&(s?a?(s.beforeEnter(e),Ca(e,!0),s.enter(e)):s.leave(e,()=>{Ca(e,!1)}):Ca(e,a))},beforeUnmount(e,{value:a}){Ca(e,a)}};function Ca(e,a){e.style.display=a?e[uo]:"none"}function Gg(){lm.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const nm=Symbol("");function Ug(e){const a=jt();if(!a)return;const l=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(c=>rs(c,r))},s=()=>{const r=e(a.proxy);os(a.subTree,r),l(r)};gd(s),bi(()=>{const r=new MutationObserver(s);r.observe(a.subTree.el.parentNode,{childList:!0}),Li(()=>r.disconnect())})}function os(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{os(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)rs(e.el,a);else if(e.type===we)e.children.forEach(l=>os(l,a));else if(e.type===Ri){let{el:l,anchor:s}=e;for(;l&&(rs(l,a),l!==s);)l=l.nextSibling}}function rs(e,a){if(e.nodeType===1){const l=e.style;let s="";for(const r in a)l.setProperty(`--${r}`,a[r]),s+=`--${r}: ${a[r]};`;l[nm]=s}}function Yg(e,a,l){const s=e.style,r=s.display,c=We(l);if(l&&!c){if(a&&!We(a))for(const m in a)l[m]==null&&us(s,m,"");for(const m in l)us(s,m,l[m])}else if(c){if(a!==l){const m=s[nm];m&&(l+=";"+m),s.cssText=l}}else a&&e.removeAttribute("style");uo in e&&(s.display=r)}const Zo=/\s*!important$/;function us(e,a,l){if(me(l))l.forEach(s=>us(e,a,s));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const s=Jg(e,a);Zo.test(l)?e.setProperty(At(s),l.replace(Zo,""),"important"):e[s]=l}}const er=["Webkit","Moz","ms"],$n={};function Jg(e,a){const l=$n[a];if(l)return l;let s=mt(a);if(s!=="filter"&&s in e)return $n[a]=s;s=Za(s);for(let r=0;r<er.length;r++){const c=er[r]+s;if(c in e)return $n[a]=c}return a}const tr="http://www.w3.org/1999/xlink";function Wg(e,a,l,s,r){if(s&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(tr,a.slice(6,a.length)):e.setAttributeNS(tr,a,l);else{const c=Ap(a);l==null||c&&!Ic(l)?e.removeAttribute(a):e.setAttribute(a,c?"":l)}}function Kg(e,a,l,s,r,c,m){if(a==="innerHTML"||a==="textContent"){s&&m(s,r,c),e[a]=l??"";return}const p=e.tagName;if(a==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=l;const u=p==="OPTION"?e.getAttribute("value"):e.value,f=l??"";u!==f&&(e.value=f),l==null&&e.removeAttribute(a);return}let o=!1;if(l===""||l==null){const u=typeof e[a];u==="boolean"?l=Ic(l):l==null&&u==="string"?(l="",o=!0):u==="number"&&(l=0,o=!0)}try{e[a]=l}catch{}o&&e.removeAttribute(a)}function Yt(e,a,l,s){e.addEventListener(a,l,s)}function Xg(e,a,l,s){e.removeEventListener(a,l,s)}const ir=Symbol("_vei");function Qg(e,a,l,s,r=null){const c=e[ir]||(e[ir]={}),m=c[a];if(s&&m)m.value=s;else{const[p,o]=Zg(a);if(s){const u=c[a]=ih(s,r);Yt(e,p,u,o)}else m&&(Xg(e,p,m,o),c[a]=void 0)}}const ar=/(?:Once|Passive|Capture)$/;function Zg(e){let a;if(ar.test(e)){a={};let s;for(;s=e.match(ar);)e=e.slice(0,e.length-s[0].length),a[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):At(e.slice(2)),a]}let xn=0;const eh=Promise.resolve(),th=()=>xn||(eh.then(()=>xn=0),xn=Date.now());function ih(e,a){const l=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=l.attached)return;kt(ah(s,l.value),a,5,[s])};return l.value=e,l.attached=th(),l}function ah(e,a){if(me(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const lr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lh=(e,a,l,s,r,c,m,p,o)=>{const u=r==="svg";a==="class"?qg(e,s,u):a==="style"?Yg(e,l,s):Qa(a)?Rs(a)||Qg(e,a,l,s,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):nh(e,a,s,u))?Kg(e,a,s,c,m,p,o):(a==="true-value"?e._trueValue=s:a==="false-value"&&(e._falseValue=s),Wg(e,a,s,u))};function nh(e,a,l,s){if(s)return!!(a==="innerHTML"||a==="textContent"||a in e&&lr(a)&&ye(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lr(a)&&We(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function sm(e,a){const l=z(e);class s extends dn{constructor(c){super(l,c,a)}}return s.def=l,s}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>sm(e,bm),oh=typeof HTMLElement<"u"?HTMLElement:class{};class dn extends oh{constructor(a,l={},s){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ha(()=>{this._connected||(Pl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(s,r=!1)=>{const{props:c,styles:m}=s;let p;if(c&&!me(c))for(const o in c){const u=c[o];(u===Number||u&&u.type===Number)&&(o in this._props&&(this._props[o]=kl(this._props[o])),(p||(p=Object.create(null)))[mt(o)]=!0)}this._numberProps=p,r&&this._resolveProps(s),this._applyStyles(m),this._update()},l=this._def.__asyncLoader;l?l().then(s=>a(s,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,s=me(l)?l:Object.keys(l||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(mt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(c){this._setProp(r,c)}})}_setAttr(a){let l=this.getAttribute(a);const s=mt(a);this._numberProps&&this._numberProps[s]&&(l=kl(l)),this._setProp(s,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,s=!0,r=!0){l!==this._props[a]&&(this._props[a]=l,r&&this._instance&&this._update(),s&&(l===!0?this.setAttribute(At(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(At(a),l+""):l||this.removeAttribute(At(a))))}_update(){Pl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Je({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const s=(c,m)=>{this.dispatchEvent(new CustomEvent(c,{detail:m}))};l.emit=(c,...m)=>{s(c,m),At(c)!==c&&s(At(c),m)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof dn){l.parent=r._instance,l.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const s=document.createElement("style");s.textContent=l,this.shadowRoot.appendChild(s)})}}function rh(e="$style"){{const a=jt();if(!a)return He;const l=a.type.__cssModules;if(!l)return He;const s=l[e];return s||He}}const om=new WeakMap,rm=new WeakMap,Dl=Symbol("_moveCb"),nr=Symbol("_enterCb"),um={name:"TransitionGroup",props:Je({},Lg,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=jt(),s=eo();let r,c;return nn(()=>{if(!r.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!ph(r[0].el,l.vnode.el,m))return;r.forEach(ch),r.forEach(dh);const p=r.filter(mh);am(),p.forEach(o=>{const u=o.el,f=u.style;Gt(u,m),f.transform=f.webkitTransform=f.transitionDuration="";const d=u[Dl]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[Dl]=null,ni(u,m))};u.addEventListener("transitionend",d)})}),()=>{const m=Re(e),p=tm(m);let o=m.tag||we;r=c,c=a.default?an(a.default()):[];for(let u=0;u<c.length;u++){const f=c[u];f.key!=null&&Di(f,sa(f,p,s,l))}if(r)for(let u=0;u<r.length;u++){const f=r[u];Di(f,sa(f,p,s,l)),om.set(f,f.el.getBoundingClientRect())}return t(o,null,c)}}},uh=e=>delete e.mode;um.props;const cm=um;function ch(e){const a=e.el;a[Dl]&&a[Dl](),a[nr]&&a[nr]()}function dh(e){rm.set(e,e.el.getBoundingClientRect())}function mh(e){const a=om.get(e),l=rm.get(e),s=a.left-l.left,r=a.top-l.top;if(s||r){const c=e.el.style;return c.transform=c.webkitTransform=`translate(${s}px,${r}px)`,c.transitionDuration="0s",e}}function ph(e,a,l){const s=e.cloneNode(),r=e[ra];r&&r.forEach(p=>{p.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),l.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const c=a.nodeType===1?a:a.parentNode;c.appendChild(s);const{hasTransform:m}=im(s);return c.removeChild(s),m}const _i=e=>{const a=e.props["onUpdate:modelValue"]||!1;return me(a)?l=>Ki(a,l):a};function fh(e){e.target.composing=!0}function sr(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Rt=Symbol("_assign"),Il={created(e,{modifiers:{lazy:a,trim:l,number:s}},r){e[Rt]=_i(r);const c=s||r.props&&r.props.type==="number";Yt(e,a?"change":"input",m=>{if(m.target.composing)return;let p=e.value;l&&(p=p.trim()),c&&(p=Na(p)),e[Rt](p)}),l&&Yt(e,"change",()=>{e.value=e.value.trim()}),a||(Yt(e,"compositionstart",fh),Yt(e,"compositionend",sr),Yt(e,"change",sr))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:s,number:r}},c){if(e[Rt]=_i(c),e.composing)return;const m=r||e.type==="number"?Na(e.value):e.value,p=a??"";m!==p&&(document.activeElement===e&&e.type!=="range"&&(l||s&&e.value.trim()===p)||(e.value=p))}},co={deep:!0,created(e,a,l){e[Rt]=_i(l),Yt(e,"change",()=>{const s=e._modelValue,r=ua(e),c=e.checked,m=e[Rt];if(me(s)){const p=Jl(s,r),o=p!==-1;if(c&&!o)m(s.concat(r));else if(!c&&o){const u=[...s];u.splice(p,1),m(u)}}else if(Vi(s)){const p=new Set(s);c?p.add(r):p.delete(r),m(p)}else m(mm(e,c))})},mounted:or,beforeUpdate(e,a,l){e[Rt]=_i(l),or(e,a,l)}};function or(e,{value:a,oldValue:l},s){e._modelValue=a,me(a)?e.checked=Jl(a,s.props.value)>-1:Vi(a)?e.checked=a.has(s.props.value):a!==l&&(e.checked=Kt(a,mm(e,!0)))}const mo={created(e,{value:a},l){e.checked=Kt(a,l.props.value),e[Rt]=_i(l),Yt(e,"change",()=>{e[Rt](ua(e))})},beforeUpdate(e,{value:a,oldValue:l},s){e[Rt]=_i(s),a!==l&&(e.checked=Kt(a,s.props.value))}},dm={deep:!0,created(e,{value:a,modifiers:{number:l}},s){const r=Vi(a);Yt(e,"change",()=>{const c=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>l?Na(ua(m)):ua(m));e[Rt](e.multiple?r?new Set(c):c:c[0]),e._assigning=!0,ha(()=>{e._assigning=!1})}),e[Rt]=_i(s)},mounted(e,{value:a,oldValue:l,modifiers:{number:s}}){rr(e,a,l,s)},beforeUpdate(e,a,l){e[Rt]=_i(l)},updated(e,{value:a,oldValue:l,modifiers:{number:s}}){e._assigning||rr(e,a,l,s)}};function rr(e,a,l,s){const r=e.multiple,c=me(a);if(!(r&&!c&&!Vi(a))&&!(c&&Kt(a,l))){for(let m=0,p=e.options.length;m<p;m++){const o=e.options[m],u=ua(o);if(r)if(c){const f=typeof u;f==="string"||f==="number"?o.selected=a.includes(s?Na(u):u):o.selected=Jl(a,u)>-1}else o.selected=a.has(u);else if(Kt(ua(o),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ua(e){return"_value"in e?e._value:e.value}function mm(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const pm={created(e,a,l){hl(e,a,l,null,"created")},mounted(e,a,l){hl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,s){hl(e,a,l,s,"beforeUpdate")},updated(e,a,l,s){hl(e,a,l,s,"updated")}};function fm(e,a){switch(e){case"SELECT":return dm;case"TEXTAREA":return Il;default:switch(a){case"checkbox":return co;case"radio":return mo;default:return Il}}}function hl(e,a,l,s,r){const m=fm(e.tagName,l.props&&l.props.type)[r];m&&m(e,a,l,s)}function gh(){Il.getSSRProps=({value:e})=>({value:e}),mo.getSSRProps=({value:e},a)=>{if(a.props&&Kt(a.props.value,e))return{checked:!0}},co.getSSRProps=({value:e},a)=>{if(me(e)){if(a.props&&Jl(e,a.props.value)>-1)return{checked:!0}}else if(Vi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},pm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=fm(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const hh=["ctrl","shift","alt","meta"],_h={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>hh.some(l=>e[`${l}Key`]&&!a.includes(l))},$t=(e,a)=>{const l=e._withMods||(e._withMods={}),s=a.join(".");return l[s]||(l[s]=(r,...c)=>{for(let m=0;m<a.length;m++){const p=_h[a[m]];if(p&&p(r,a))return}return e(r,...c)})},bh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vh=(e,a)=>{const l=e._withKeys||(e._withKeys={}),s=a.join(".");return l[s]||(l[s]=r=>{if(!("key"in r))return;const c=At(r.key);if(a.some(m=>m===c||bh[m]===c))return e(r)})},gm=Je({patchProp:lh},Ng);let Ma,ur=!1;function hm(){return Ma||(Ma=Vd(gm))}function _m(){return Ma=ur?Ma:Fd(gm),ur=!0,Ma}const Pl=(...e)=>{hm().render(...e)},bm=(...e)=>{_m().hydrate(...e)},vm=(...e)=>{const a=hm().createApp(...e),{mount:l}=a;return a.mount=s=>{const r=Cm(s);if(!r)return;const c=a._component;!ye(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const m=l(r,!1,ym(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),m},a},yh=(...e)=>{const a=_m().createApp(...e),{mount:l}=a;return a.mount=s=>{const r=Cm(s);if(r)return l(r,!0,ym(r))},a};function ym(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Cm(e){return We(e)?document.querySelector(e):e}let cr=!1;const Ch=()=>{cr||(cr=!0,gh(),Gg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wh=()=>{},Sh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:bd,BaseTransitionPropsValidators:to,Comment:ct,DeprecationTypes:Vg,EffectScope:Ps,ErrorCodes:uf,ErrorTypeStrings:Eg,Fragment:we,KeepAlive:Df,ReactiveEffect:na,Static:Ri,Suspense:Sf,Teleport:on,Text:Ii,TrackOpTypes:sf,Transition:cn,TransitionGroup:cm,TriggerOpTypes:of,VueElement:dn,assertNumber:rf,callWithAsyncErrorHandling:kt,callWithErrorHandling:Wt,camelize:mt,capitalize:Za,cloneVNode:Lt,compatUtils:Mg,compile:wh,computed:H,createApp:vm,createBlock:V,createCommentVNode:oo,createElementBlock:pe,createElementVNode:w,createHydrationRenderer:Fd,createPropsRestProxy:Jf,createRenderer:Vd,createSSRApp:yh,createSlots:Pf,createStaticVNode:bg,createTextVNode:n,createVNode:t,customRef:id,defineAsyncComponent:Rf,defineComponent:z,defineCustomElement:sm,defineEmits:Hf,defineExpose:Nf,defineModel:jf,defineOptions:Lf,defineProps:Ff,defineSSRCustomElement:sh,defineSlots:Of,devtools:Rg,effect:Bp,effectScope:$p,getCurrentInstance:jt,getCurrentScope:Ms,getTransitionRawChildren:an,guardReactiveProps:Ud,h:Y,handleError:Ni,hasInjectionContext:ag,hydrate:bm,initCustomFormatter:xg,initDirectivesForSSR:Ch,inject:Me,isMemoSame:Qd,isProxy:Ls,isReactive:Ti,isReadonly:zi,isRef:st,isRuntimeOnly:Sg,isShallow:La,isVNode:zt,markRaw:Os,mergeDefaults:Uf,mergeModels:Yf,mergeProps:Oi,nextTick:ha,normalizeClass:el,normalizeProps:wp,normalizeStyle:ga,onActivated:io,onBeforeMount:Cd,onBeforeUnmount:sn,onBeforeUpdate:wd,onDeactivated:ao,onErrorCaptured:$d,onMounted:bi,onRenderTracked:kd,onRenderTriggered:Ad,onScopeDispose:Vc,onServerPrefetch:Sd,onUnmounted:Li,onUpdated:nn,openBlock:R,popScopeId:Js,provide:nt,proxyRefs:Gs,pushScopeId:Ys,queuePostFlushCb:xl,reactive:Xt,readonly:Ns,ref:j,registerRuntimeCompiler:wg,render:Pl,renderList:Qe,renderSlot:oa,resolveComponent:b,resolveDirective:tn,resolveDynamicComponent:cd,resolveFilter:Pg,resolveTransitionHooks:sa,setBlockTracking:ts,setDevtoolsHook:zg,setTransitionHooks:Di,shallowReactive:Qc,shallowReadonly:Wp,shallowRef:ed,ssrContextKey:pd,ssrUtils:Ig,stop:Tp,toDisplayString:ke,toHandlerKey:za,toHandlers:Mf,toRaw:Re,toRef:Un,toRefs:af,toValue:Zp,transformVNodeArgs:hg,triggerRef:Qp,unref:y,useAttrs:Bd,useCssModule:rh,useCssVars:Ug,useModel:$g,useSSRContext:fd,useSlots:Gf,useTransitionState:eo,vModelCheckbox:co,vModelDynamic:pm,vModelRadio:mo,vModelSelect:dm,vModelText:Il,vShow:lm,version:Zd,warn:Tg,watch:ut,watchEffect:Zs,watchPostEffect:gd,watchSyncEffect:hd,withAsyncContext:Wf,withCtx:i,withDefaults:qf,withDirectives:il,withKeys:vh,withMemo:Bg,withModifiers:$t,withScopeId:hf},Symbol.toStringTag,{value:"Module"})),Ah=z({name:"App"}),Ce=(e,a)=>{const l=e.__vccOpts||e;for(const[s,r]of a)l[s]=r;return l};function kh(e,a,l,s,r,c){const m=b("router-view");return R(),V(m)}const $h=Ce(Ah,[["render",kh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const wm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",_a=e=>wm?Symbol(e):"_vr_"+e,Sm=_a("rvlm"),dr=_a("rvd"),mn=_a("r"),po=_a("rl"),cs=_a("rvl"),Ui=typeof window<"u";function xh(e){return e.__esModule||wm&&e[Symbol.toStringTag]==="Module"}const je=Object.assign;function Bn(e,a){const l={};for(const s in a){const r=a[s];l[s]=Array.isArray(r)?r.map(e):e(r)}return l}const Va=()=>{},Bh=/\/$/,Th=e=>e.replace(Bh,"");function Tn(e,a,l="/"){let s,r={},c="",m="";const p=a.indexOf("?"),o=a.indexOf("#",p>-1?p:0);return p>-1&&(s=a.slice(0,p),c=a.slice(p+1,o>-1?o:a.length),r=e(c)),o>-1&&(s=s||a.slice(0,o),m=a.slice(o,a.length)),s=Dh(s??a,l),{fullPath:s+(c&&"?")+c+m,path:s,query:r,hash:m}}function Eh(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function mr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Rh(e,a,l){const s=a.matched.length-1,r=l.matched.length-1;return s>-1&&s===r&&ca(a.matched[s],l.matched[r])&&Am(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function ca(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Am(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!zh(e[l],a[l]))return!1;return!0}function zh(e,a){return Array.isArray(e)?pr(e,a):Array.isArray(a)?pr(a,e):e===a}function pr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,s)=>l===a[s]):e.length===1&&e[0]===a}function Dh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),s=e.split("/");let r=l.length-1,c,m;for(c=0;c<s.length;c++)if(m=s[c],!(r===1||m==="."))if(m==="..")r--;else break;return l.slice(0,r).join("/")+"/"+s.slice(c-(c===s.length?1:0)).join("/")}var Wa;(function(e){e.pop="pop",e.push="push"})(Wa||(Wa={}));var Fa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Fa||(Fa={}));function Ih(e){if(!e)if(Ui){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Th(e)}const Ph=/^[^#]+#/;function Mh(e,a){return e.replace(Ph,"#")+a}function Vh(e,a){const l=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:a.behavior,left:s.left-l.left-(a.left||0),top:s.top-l.top-(a.top||0)}}const pn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fh(e){let a;if("el"in e){const l=e.el,s=typeof l=="string"&&l.startsWith("#"),r=typeof l=="string"?s?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!r)return;a=Vh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function fr(e,a){return(history.state?history.state.position-a:-1)+e}const ds=new Map;function Hh(e,a){ds.set(e,a)}function Nh(e){const a=ds.get(e);return ds.delete(e),a}let Lh=()=>location.protocol+"//"+location.host;function km(e,a){const{pathname:l,search:s,hash:r}=a,c=e.indexOf("#");if(c>-1){let p=r.includes(e.slice(c))?e.slice(c).length:1,o=r.slice(p);return o[0]!=="/"&&(o="/"+o),mr(o,"")}return mr(l,e)+s+r}function Oh(e,a,l,s){let r=[],c=[],m=null;const p=({state:h})=>{const v=km(e,location),g=l.value,C=a.value;let A=0;if(h){if(l.value=v,a.value=h,m&&m===g){m=null;return}A=C?h.position-C.position:0}else s(v);r.forEach(x=>{x(l.value,g,{delta:A,type:Wa.pop,direction:A?A>0?Fa.forward:Fa.back:Fa.unknown})})};function o(){m=l.value}function u(h){r.push(h);const v=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return c.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(je({},h.state,{scroll:pn()}),"")}function d(){for(const h of c)h();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:u,destroy:d}}function gr(e,a,l,s=!1,r=!1){return{back:e,current:a,forward:l,replaced:s,position:window.history.length,scroll:r?pn():null}}function jh(e){const{history:a,location:l}=window,s={value:km(e,l)},r={value:a.state};r.value||c(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function c(o,u,f){const d=e.indexOf("#"),h=d>-1?(l.host&&document.querySelector("base")?e:e.slice(d))+o:Lh()+e+o;try{a[f?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),l[f?"replace":"assign"](h)}}function m(o,u){const f=je({},a.state,gr(r.value.back,o,r.value.forward,!0),u,{position:r.value.position});c(o,f,!0),s.value=o}function p(o,u){const f=je({},r.value,a.state,{forward:o,scroll:pn()});c(f.current,f,!0);const d=je({},gr(s.value,o,null),{position:f.position+1},u);c(o,d,!1),s.value=o}return{location:s,state:r,push:p,replace:m}}function qh(e){e=Ih(e);const a=jh(e),l=Oh(e,a.state,a.location,a.replace);function s(c,m=!0){m||l.pauseListeners(),history.go(c)}const r=je({location:"",base:e,go:s,createHref:Mh.bind(null,e)},a,l);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Gh(e){return typeof e=="string"||e&&typeof e=="object"}function $m(e){return typeof e=="string"||typeof e=="symbol"}const li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xm=_a("nf");var hr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hr||(hr={}));function da(e,a){return je(new Error,{type:e,[xm]:!0},a)}function Si(e,a){return e instanceof Error&&xm in e&&(a==null||!!(e.type&a))}const _r="[^/]+?",Uh={sensitive:!1,strict:!1,start:!0,end:!0},Yh=/[.+*?^${}()[\]/\\]/g;function Jh(e,a){const l=je({},Uh,a),s=[];let r=l.start?"^":"";const c=[];for(const u of e){const f=u.length?[]:[90];l.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const h=u[d];let v=40+(l.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Yh,"\\$&"),v+=40;else if(h.type===1){const{value:g,repeatable:C,optional:A,regexp:x}=h;c.push({name:g,repeatable:C,optional:A});const _=x||_r;if(_!==_r){v+=10;try{new RegExp(`(${_})`)}catch($){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+$.message)}}let S=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(S=A&&u.length<2?`(?:/${S})`:"/"+S),A&&(S+="?"),r+=S,v+=20,A&&(v+=-8),C&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}s.push(f)}if(l.strict&&l.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}l.strict||(r+="/?"),l.end?r+="$":l.strict&&(r+="(?:/|$)");const m=new RegExp(r,l.sensitive?"":"i");function p(u){const f=u.match(m),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",g=c[h-1];d[g.name]=v&&g.repeatable?v.split("/"):v}return d}function o(u){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:g,repeatable:C,optional:A}=v,x=g in u?u[g]:"";if(Array.isArray(x)&&!C)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(x)?x.join("/"):x;if(!_)if(A)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);f+=_}}return f}return{re:m,score:s,keys:c,parse:p,stringify:o}}function Wh(e,a){let l=0;for(;l<e.length&&l<a.length;){const s=a[l]-e[l];if(s)return s;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Kh(e,a){let l=0;const s=e.score,r=a.score;for(;l<s.length&&l<r.length;){const c=Wh(s[l],r[l]);if(c)return c;l++}return r.length-s.length}const Xh={type:0,value:""},Qh=/[a-zA-Z0-9_]/;function Zh(e){if(!e)return[[]];if(e==="/")return[[Xh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${l})/"${u}": ${v}`)}let l=0,s=l;const r=[];let c;function m(){c&&r.push(c),c=[]}let p=0,o,u="",f="";function d(){u&&(l===0?c.push({type:0,value:u}):l===1||l===2||l===3?(c.length>1&&(o==="*"||o==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=o}for(;p<e.length;){if(o=e[p++],o==="\\"&&l!==2){s=l,l=4;continue}switch(l){case 0:o==="/"?(u&&d(),m()):o===":"?(d(),l=1):h();break;case 4:h(),l=s;break;case 1:o==="("?l=2:Qh.test(o)?h():(d(),l=0,o!=="*"&&o!=="?"&&o!=="+"&&p--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:l=3:f+=o;break;case 3:d(),l=0,o!=="*"&&o!=="?"&&o!=="+"&&p--,f="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${u}"`),d(),m(),r}function e_(e,a,l){const s=Jh(Zh(e.path),l),r=je(s,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function t_(e,a){const l=[],s=new Map;a=vr({strict:!1,end:!0,sensitive:!1},a);function r(f){return s.get(f)}function c(f,d,h){const v=!h,g=a_(f);g.aliasOf=h&&h.record;const C=vr(a,f),A=[g];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of S)A.push(je({},g,{components:h?h.record.components:g.components,path:$,aliasOf:h?h.record:g}))}let x,_;for(const S of A){const{path:$}=S;if(d&&$[0]!=="/"){const B=d.record.path,E=B[B.length-1]==="/"?"":"/";S.path=d.record.path+($&&E+$)}if(x=e_(S,d,C),h?h.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),v&&f.name&&!br(x)&&m(f.name)),"children"in g){const B=g.children;for(let E=0;E<B.length;E++)c(B[E],x,h&&h.children[E])}h=h||x,o(x)}return _?()=>{m(_)}:Va}function m(f){if($m(f)){const d=s.get(f);d&&(s.delete(f),l.splice(l.indexOf(d),1),d.children.forEach(m),d.alias.forEach(m))}else{const d=l.indexOf(f);d>-1&&(l.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(m),f.alias.forEach(m))}}function p(){return l}function o(f){let d=0;for(;d<l.length&&Kh(f,l[d])>=0;)d++;l.splice(d,0,f),f.record.name&&!br(f)&&s.set(f.record.name,f)}function u(f,d){let h,v={},g,C;if("name"in f&&f.name){if(h=s.get(f.name),!h)throw da(1,{location:f});C=h.record.name,v=je(i_(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),g=h.stringify(v)}else if("path"in f)g=f.path,h=l.find(_=>_.re.test(g)),h&&(v=h.parse(g),C=h.record.name);else{if(h=d.name?s.get(d.name):l.find(_=>_.re.test(d.path)),!h)throw da(1,{location:f,currentLocation:d});C=h.record.name,v=je({},d.params,f.params),g=h.stringify(v)}const A=[];let x=h;for(;x;)A.unshift(x.record),x=x.parent;return{name:C,path:g,params:v,matched:A,meta:n_(A)}}return e.forEach(f=>c(f)),{addRoute:c,resolve:u,removeRoute:m,getRoutes:p,getRecordMatcher:r}}function i_(e,a){const l={};for(const s of a)s in e&&(l[s]=e[s]);return l}function a_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:l_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function l_(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const s in e.components)a[s]=typeof l=="boolean"?l:l[s];return a}function br(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function n_(e){return e.reduce((a,l)=>je(a,l.meta),{})}function vr(e,a){const l={};for(const s in e)l[s]=s in a?a[s]:e[s];return l}const Bm=/#/g,s_=/&/g,o_=/\//g,r_=/=/g,u_=/\?/g,Tm=/\+/g,c_=/%5B/g,d_=/%5D/g,Em=/%5E/g,m_=/%60/g,Rm=/%7B/g,p_=/%7C/g,zm=/%7D/g,f_=/%20/g;function fo(e){return encodeURI(""+e).replace(p_,"|").replace(c_,"[").replace(d_,"]")}function g_(e){return fo(e).replace(Rm,"{").replace(zm,"}").replace(Em,"^")}function ms(e){return fo(e).replace(Tm,"%2B").replace(f_,"+").replace(Bm,"%23").replace(s_,"%26").replace(m_,"`").replace(Rm,"{").replace(zm,"}").replace(Em,"^")}function h_(e){return ms(e).replace(r_,"%3D")}function __(e){return fo(e).replace(Bm,"%23").replace(u_,"%3F")}function b_(e){return e==null?"":__(e).replace(o_,"%2F")}function Ml(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function v_(e){const a={};if(e===""||e==="?")return a;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const c=s[r].replace(Tm," "),m=c.indexOf("="),p=Ml(m<0?c:c.slice(0,m)),o=m<0?null:Ml(c.slice(m+1));if(p in a){let u=a[p];Array.isArray(u)||(u=a[p]=[u]),u.push(o)}else a[p]=o}return a}function yr(e){let a="";for(let l in e){const s=e[l];if(l=h_(l),s==null){s!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(s)?s.map(c=>c&&ms(c)):[s&&ms(s)]).forEach(c=>{c!==void 0&&(a+=(a.length?"&":"")+l,c!=null&&(a+="="+c))})}return a}function y_(e){const a={};for(const l in e){const s=e[l];s!==void 0&&(a[l]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}function wa(){let e=[];function a(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function C_(e,a,l){const s=()=>{e[a].delete(l)};Li(s),ao(s),io(()=>{e[a].add(l)}),e[a].add(l)}function w_(e){const a=Me(Sm,{}).value;a&&C_(a,"updateGuards",e)}function ci(e,a,l,s,r){const c=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((m,p)=>{const o=d=>{d===!1?p(da(4,{from:l,to:a})):d instanceof Error?p(d):Gh(d)?p(da(2,{from:a,to:d})):(c&&s.enterCallbacks[r]===c&&typeof d=="function"&&c.push(d),m())},u=e.call(s&&s.instances[r],a,l,o);let f=Promise.resolve(u);e.length<3&&(f=f.then(o)),f.catch(d=>p(d))})}function En(e,a,l,s){const r=[];for(const c of e)for(const m in c.components){let p=c.components[m];if(!(a!=="beforeRouteEnter"&&!c.instances[m]))if(S_(p)){const u=(p.__vccOpts||p)[a];u&&r.push(ci(u,l,s,c,m))}else{let o=p();r.push(()=>o.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${c.path}"`));const f=xh(u)?u.default:u;c.components[m]=f;const h=(f.__vccOpts||f)[a];return h&&ci(h,l,s,c,m)()}))}}return r}function S_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cr(e){const a=Me(mn),l=Me(po),s=H(()=>a.resolve(y(e.to))),r=H(()=>{const{matched:o}=s.value,{length:u}=o,f=o[u-1],d=l.matched;if(!f||!d.length)return-1;const h=d.findIndex(ca.bind(null,f));if(h>-1)return h;const v=wr(o[u-2]);return u>1&&wr(f)===v&&d[d.length-1].path!==v?d.findIndex(ca.bind(null,o[u-2])):h}),c=H(()=>r.value>-1&&$_(l.params,s.value.params)),m=H(()=>r.value>-1&&r.value===l.matched.length-1&&Am(l.params,s.value.params));function p(o={}){return k_(o)?a[y(e.replace)?"replace":"push"](y(e.to)).catch(Va):Promise.resolve()}return{route:s,href:H(()=>s.value.href),isActive:c,isExactActive:m,navigate:p}}const A_=z({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cr,setup(e,{slots:a}){const l=Xt(Cr(e)),{options:s}=Me(mn),r=H(()=>({[Sr(e.activeClass,s.linkActiveClass,"router-link-active")]:l.isActive,[Sr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const c=a.default&&a.default(l);return e.custom?c:Y("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:r.value},c)}}}),go=A_;function k_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function $_(e,a){for(const l in a){const s=a[l],r=e[l];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((c,m)=>c!==r[m]))return!1}return!0}function wr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sr=(e,a,l)=>e??a??l,x_=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const s=Me(cs),r=H(()=>e.route||s.value),c=Me(dr,0),m=H(()=>r.value.matched[c]);nt(dr,c+1),nt(Sm,m),nt(cs,r);const p=j();return ut(()=>[p.value,m.value,e.name],([o,u,f],[d,h,v])=>{u&&(u.instances[f]=o,h&&h!==u&&o&&o===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),o&&u&&(!h||!ca(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(o))},{flush:"post"}),()=>{const o=r.value,u=m.value,f=u&&u.components[e.name],d=e.name;if(!f)return Ar(l.default,{Component:f,route:o});const h=u.props[e.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,C=Y(f,je({},v,a,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[d]=null)},ref:p}));return Ar(l.default,{Component:C,route:o})||C}}});function Ar(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const B_=x_;function T_(e){const a=t_(e.routes,e),l=e.parseQuery||v_,s=e.stringifyQuery||yr,r=e.history,c=wa(),m=wa(),p=wa(),o=ed(li);let u=li;Ui&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bn.bind(null,U=>""+U),d=Bn.bind(null,b_),h=Bn.bind(null,Ml);function v(U,oe){let se,ge;return $m(U)?(se=a.getRecordMatcher(U),ge=oe):ge=U,a.addRoute(ge,se)}function g(U){const oe=a.getRecordMatcher(U);oe&&a.removeRoute(oe)}function C(){return a.getRoutes().map(U=>U.record)}function A(U){return!!a.getRecordMatcher(U)}function x(U,oe){if(oe=je({},oe||o.value),typeof U=="string"){const xe=Tn(l,U,oe.path),T=a.resolve({path:xe.path},oe),D=r.createHref(xe.fullPath);return je(xe,T,{params:h(T.params),hash:Ml(xe.hash),redirectedFrom:void 0,href:D})}let se;if("path"in U)se=je({},U,{path:Tn(l,U.path,oe.path).path});else{const xe=je({},U.params);for(const T in xe)xe[T]==null&&delete xe[T];se=je({},U,{params:d(U.params)}),oe.params=d(oe.params)}const ge=a.resolve(se,oe),Ve=U.hash||"";ge.params=f(h(ge.params));const Fe=Eh(s,je({},U,{hash:g_(Ve),path:ge.path})),$e=r.createHref(Fe);return je({fullPath:Fe,hash:Ve,query:s===yr?y_(U.query):U.query||{}},ge,{redirectedFrom:void 0,href:$e})}function _(U){return typeof U=="string"?Tn(l,U,o.value.path):je({},U)}function S(U,oe){if(u!==U)return da(8,{from:oe,to:U})}function $(U){return M(U)}function B(U){return $(je(_(U),{replace:!0}))}function E(U){const oe=U.matched[U.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let ge=typeof se=="function"?se(U):se;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=_(ge):{path:ge},ge.params={}),je({query:U.query,hash:U.hash,params:U.params},ge)}}function M(U,oe){const se=u=x(U),ge=o.value,Ve=U.state,Fe=U.force,$e=U.replace===!0,xe=E(se);if(xe)return M(je(_(xe),{state:Ve,force:Fe,replace:$e}),oe||se);const T=se;T.redirectedFrom=oe;let D;return!Fe&&Rh(s,ge,se)&&(D=da(16,{to:T,from:ge}),Ue(ge,ge,!0,!1)),(D?Promise.resolve(D):I(T,ge)).catch(N=>Si(N)?N:ue(N,T,ge)).then(N=>{if(N){if(Si(N,2))return M(je(_(N.to),{state:Ve,force:Fe,replace:$e}),oe||T)}else N=W(T,ge,!0,$e,Ve);return L(T,ge,N),N})}function F(U,oe){const se=S(U,oe);return se?Promise.reject(se):Promise.resolve()}function I(U,oe){let se;const[ge,Ve,Fe]=E_(U,oe);se=En(ge.reverse(),"beforeRouteLeave",U,oe);for(const xe of ge)xe.leaveGuards.forEach(T=>{se.push(ci(T,U,oe))});const $e=F.bind(null,U,oe);return se.push($e),qi(se).then(()=>{se=[];for(const xe of c.list())se.push(ci(xe,U,oe));return se.push($e),qi(se)}).then(()=>{se=En(Ve,"beforeRouteUpdate",U,oe);for(const xe of Ve)xe.updateGuards.forEach(T=>{se.push(ci(T,U,oe))});return se.push($e),qi(se)}).then(()=>{se=[];for(const xe of U.matched)if(xe.beforeEnter&&!oe.matched.includes(xe))if(Array.isArray(xe.beforeEnter))for(const T of xe.beforeEnter)se.push(ci(T,U,oe));else se.push(ci(xe.beforeEnter,U,oe));return se.push($e),qi(se)}).then(()=>(U.matched.forEach(xe=>xe.enterCallbacks={}),se=En(Fe,"beforeRouteEnter",U,oe),se.push($e),qi(se))).then(()=>{se=[];for(const xe of m.list())se.push(ci(xe,U,oe));return se.push($e),qi(se)}).catch(xe=>Si(xe,8)?xe:Promise.reject(xe))}function L(U,oe,se){for(const ge of p.list())ge(U,oe,se)}function W(U,oe,se,ge,Ve){const Fe=S(U,oe);if(Fe)return Fe;const $e=oe===li,xe=Ui?history.state:{};se&&(ge||$e?r.replace(U.fullPath,je({scroll:$e&&xe&&xe.scroll},Ve)):r.push(U.fullPath,Ve)),o.value=U,Ue(U,oe,se,$e),Te()}let G;function de(){G=r.listen((U,oe,se)=>{const ge=x(U),Ve=E(ge);if(Ve){M(je(Ve,{replace:!0}),ge).catch(Va);return}u=ge;const Fe=o.value;Ui&&Hh(fr(Fe.fullPath,se.delta),pn()),I(ge,Fe).catch($e=>Si($e,12)?$e:Si($e,2)?(M($e.to,ge).then(xe=>{Si(xe,20)&&!se.delta&&se.type===Wa.pop&&r.go(-1,!1)}).catch(Va),Promise.reject()):(se.delta&&r.go(-se.delta,!1),ue($e,ge,Fe))).then($e=>{$e=$e||W(ge,Fe,!1),$e&&(se.delta?r.go(-se.delta,!1):se.type===Wa.pop&&Si($e,20)&&r.go(-1,!1)),L(ge,Fe,$e)}).catch(Va)})}let Be=wa(),O=wa(),J;function ue(U,oe,se){Te(U);const ge=O.list();return ge.length?ge.forEach(Ve=>Ve(U,oe,se)):console.error(U),Promise.reject(U)}function ie(){return J&&o.value!==li?Promise.resolve():new Promise((U,oe)=>{Be.add([U,oe])})}function Te(U){J||(J=!0,de(),Be.list().forEach(([oe,se])=>U?se(U):oe()),Be.reset())}function Ue(U,oe,se,ge){const{scrollBehavior:Ve}=e;if(!Ui||!Ve)return Promise.resolve();const Fe=!se&&Nh(fr(U.fullPath,0))||(ge||!se)&&history.state&&history.state.scroll||null;return ha().then(()=>Ve(U,oe,Fe)).then($e=>$e&&Fh($e)).catch($e=>ue($e,U,oe))}const tt=U=>r.go(U);let Oe;const qt=new Set;return{currentRoute:o,addRoute:v,removeRoute:g,hasRoute:A,getRoutes:C,resolve:x,options:e,push:$,replace:B,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:c.add,beforeResolve:m.add,afterEach:p.add,onError:O.add,isReady:ie,install(U){const oe=this;U.component("RouterLink",go),U.component("RouterView",B_),U.config.globalProperties.$router=oe,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>y(o)}),Ui&&!Oe&&o.value===li&&(Oe=!0,$(r.location).catch(Ve=>{}));const se={};for(const Ve in li)se[Ve]=H(()=>o.value[Ve]);U.provide(mn,oe),U.provide(po,Xt(se)),U.provide(cs,o);const ge=U.unmount;qt.add(U),U.unmount=function(){qt.delete(U),qt.size<1&&(u=li,G&&G(),o.value=li,Oe=!1,J=!1),ge()}}}}function qi(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function E_(e,a){const l=[],s=[],r=[],c=Math.max(a.matched.length,e.matched.length);for(let m=0;m<c;m++){const p=a.matched[m];p&&(e.matched.find(u=>ca(u,p))?s.push(p):l.push(p));const o=e.matched[m];o&&(a.matched.find(u=>ca(u,o))||r.push(o))}return[l,s,r]}function Dm(){return Me(mn)}function Im(){return Me(po)}const R_={__name:"Navbar",props:["onClick"],setup(e){const a=j(),l=Dm();function s(r){return r.charAt(0).toUpperCase()+r.slice(1)}return Zs(()=>{const m=l.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=s(m[1]))}),(r,c)=>{const m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu");return R(),V(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(p,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(p,null,{default:i(()=>[n(ke(a.value),1)]),_:1})]),_:1})}}},z_=Ce(R_,[["__scopeId","data-v-338afb35"]]),D_=z({name:"Sidebar",setup(){const e=Im();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),I_=w("strong",null," Fomantic UI Vue ",-1),P_=w("b",null,"Getting Started",-1);function M_(e,a,l,s,r,c){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),u=b("sui-menu");return R(),V(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[I_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[P_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.elements,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.collections,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.views,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.modules,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const V_=Ce(D_,[["render",M_]]),F_={class:"sidemenu"},H_={style:{flex:"1","overflow-y":"scroll"}},N_={__name:"Sidebar",setup(e){return(a,l)=>(R(),pe("div",F_,[w("div",H_,[t(V_)])]))}},L_=Ce(N_,[["__scopeId","data-v-379ef704"]]),O_=z({name:"Sidebar",setup(){const e=Im();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),j_=w("strong",null," Fomantic UI Vue ",-1),q_=w("b",null,"Getting Started",-1);function G_(e,a,l,s,r,c){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),u=b("sui-sidebar");return R(),V(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[j_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.elements,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.collections,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.views,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.modules,f=>(R(),V(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const U_=Ce(O_,[["render",G_]]),Y_={class:"pusher",style:{height:"100vh"}},J_={class:"article"},W_={__name:"Home",setup(e){const a=j(!1),l=()=>a.value=!a.value;return w_(()=>{a.value=!1}),(s,r)=>{const c=b("router-view"),m=b("SuiSegment");return R(),V(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(U_,{visible:a.value},null,8,["visible"]),w("div",Y_,[t(L_),t(z_,{"on-click":l}),w("div",J_,[t(c)])])]),_:1})}}},K_=Ce(W_,[["__scopeId","data-v-0bfd4ee9"]]);var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function X_(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function s(){return this instanceof s?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(l,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}),l}const Q_=X_(Sh);var Mm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(s){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,m={},p={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function _(S){return S instanceof o?new o(S.type,_(S.content),S.alias):Array.isArray(S)?S.map(_):S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++c}),_.__id},clone:function _(S,$){$=$||{};var B,E;switch(p.util.type(S)){case"Object":if(E=p.util.objId(S),$[E])return $[E];B={},$[E]=B;for(var M in S)S.hasOwnProperty(M)&&(B[M]=_(S[M],$));return B;case"Array":return E=p.util.objId(S),$[E]?$[E]:(B=[],$[E]=B,S.forEach(function(F,I){B[I]=_(F,$)}),B);default:return S}},getLanguage:function(_){for(;_;){var S=r.exec(_.className);if(S)return S[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,S){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+S)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(B){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(_){var S=document.getElementsByTagName("script");for(var $ in S)if(S[$].src==_)return S[$]}return null}},isActive:function(_,S,$){for(var B="no-"+S;_;){var E=_.classList;if(E.contains(S))return!0;if(E.contains(B))return!1;_=_.parentElement}return!!$}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(_,S){var $=p.util.clone(p.languages[_]);for(var B in S)$[B]=S[B];return $},insertBefore:function(_,S,$,B){B=B||p.languages;var E=B[_],M={};for(var F in E)if(E.hasOwnProperty(F)){if(F==S)for(var I in $)$.hasOwnProperty(I)&&(M[I]=$[I]);$.hasOwnProperty(F)||(M[F]=E[F])}var L=B[_];return B[_]=M,p.languages.DFS(p.languages,function(W,G){G===L&&W!=_&&(this[W]=M)}),M},DFS:function _(S,$,B,E){E=E||{};var M=p.util.objId;for(var F in S)if(S.hasOwnProperty(F)){$.call(S,F,S[F],B||F);var I=S[F],L=p.util.type(I);L==="Object"&&!E[M(I)]?(E[M(I)]=!0,_(I,$,null,E)):L==="Array"&&!E[M(I)]&&(E[M(I)]=!0,_(I,$,F,E))}}},plugins:{},highlightAll:function(_,S){p.highlightAllUnder(document,_,S)},highlightAllUnder:function(_,S,$){var B={callback:$,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),p.hooks.run("before-all-elements-highlight",B);for(var E=0,M;M=B.elements[E++];)p.highlightElement(M,S===!0,B.callback)},highlightElement:function(_,S,$){var B=p.util.getLanguage(_),E=p.languages[B];p.util.setLanguage(_,B);var M=_.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(M,B);var F=_.textContent,I={element:_,language:B,grammar:E,code:F};function L(G){I.highlightedCode=G,p.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,p.hooks.run("after-highlight",I),p.hooks.run("complete",I),$&&$.call(I.element)}if(p.hooks.run("before-sanity-check",I),M=I.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!I.code){p.hooks.run("complete",I),$&&$.call(I.element);return}if(p.hooks.run("before-highlight",I),!I.grammar){L(p.util.encode(I.code));return}if(S&&s.Worker){var W=new Worker(p.filename);W.onmessage=function(G){L(G.data)},W.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else L(p.highlight(I.code,I.grammar,I.language))},highlight:function(_,S,$){var B={code:_,grammar:S,language:$};if(p.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=p.tokenize(B.code,B.grammar),p.hooks.run("after-tokenize",B),o.stringify(p.util.encode(B.tokens),B.language)},tokenize:function(_,S){var $=S.rest;if($){for(var B in $)S[B]=$[B];delete S.rest}var E=new d;return h(E,E.head,_),f(_,E,S,E.head,0),g(E)},hooks:{all:{},add:function(_,S){var $=p.hooks.all;$[_]=$[_]||[],$[_].push(S)},run:function(_,S){var $=p.hooks.all[_];if(!(!$||!$.length))for(var B=0,E;E=$[B++];)E(S)}},Token:o};s.Prism=p;function o(_,S,$,B){this.type=_,this.content=S,this.alias=$,this.length=(B||"").length|0}o.stringify=function _(S,$){if(typeof S=="string")return S;if(Array.isArray(S)){var B="";return S.forEach(function(L){B+=_(L,$)}),B}var E={type:S.type,content:_(S.content,$),tag:"span",classes:["token",S.type],attributes:{},language:$},M=S.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(E.classes,M):E.classes.push(M)),p.hooks.run("wrap",E);var F="";for(var I in E.attributes)F+=" "+I+'="'+(E.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+F+">"+E.content+"</"+E.tag+">"};function u(_,S,$,B){_.lastIndex=S;var E=_.exec($);if(E&&B&&E[1]){var M=E[1].length;E.index+=M,E[0]=E[0].slice(M)}return E}function f(_,S,$,B,E,M){for(var F in $)if(!(!$.hasOwnProperty(F)||!$[F])){var I=$[F];I=Array.isArray(I)?I:[I];for(var L=0;L<I.length;++L){if(M&&M.cause==F+","+L)return;var W=I[L],G=W.inside,de=!!W.lookbehind,Be=!!W.greedy,O=W.alias;if(Be&&!W.pattern.global){var J=W.pattern.toString().match(/[imsuy]*$/)[0];W.pattern=RegExp(W.pattern.source,J+"g")}for(var ue=W.pattern||W,ie=B.next,Te=E;ie!==S.tail&&!(M&&Te>=M.reach);Te+=ie.value.length,ie=ie.next){var Ue=ie.value;if(S.length>_.length)return;if(!(Ue instanceof o)){var tt=1,Oe;if(Be){if(Oe=u(ue,Te,_,de),!Oe||Oe.index>=_.length)break;var oe=Oe.index,qt=Oe.index+Oe[0].length,xt=Te;for(xt+=ie.value.length;oe>=xt;)ie=ie.next,xt+=ie.value.length;if(xt-=ie.value.length,Te=xt,ie.value instanceof o)continue;for(var U=ie;U!==S.tail&&(xt<qt||typeof U.value=="string");U=U.next)tt++,xt+=U.value.length;tt--,Ue=_.slice(Te,xt),Oe.index-=Te}else if(Oe=u(ue,0,Ue,de),!Oe)continue;var oe=Oe.index,se=Oe[0],ge=Ue.slice(0,oe),Ve=Ue.slice(oe+se.length),Fe=Te+Ue.length;M&&Fe>M.reach&&(M.reach=Fe);var $e=ie.prev;ge&&($e=h(S,$e,ge),Te+=ge.length),v(S,$e,tt);var xe=new o(F,G?p.tokenize(se,G):se,O,se);if(ie=h(S,$e,xe),Ve&&h(S,ie,Ve),tt>1){var T={cause:F+","+L,reach:Fe};f(_,S,$,ie.prev,Te,T),M&&T.reach>M.reach&&(M.reach=T.reach)}}}}}}function d(){var _={value:null,prev:null,next:null},S={value:null,prev:_,next:null};_.next=S,this.head=_,this.tail=S,this.length=0}function h(_,S,$){var B=S.next,E={value:$,prev:S,next:B};return S.next=E,B.prev=E,_.length++,E}function v(_,S,$){for(var B=S.next,E=0;E<$&&B!==_.tail;E++)B=B.next;S.next=B,B.prev=S,_.length-=E}function g(_){for(var S=[],$=_.head.next;$!==_.tail;)S.push($.value),$=$.next;return S}if(!s.document)return s.addEventListener&&(p.disableWorkerMessageHandler||s.addEventListener("message",function(_){var S=JSON.parse(_.data),$=S.language,B=S.code,E=S.immediateClose;s.postMessage(p.highlight(B,p.languages[$],$)),E&&s.close()},!1)),p;var C=p.util.currentScript();C&&(p.filename=C.src,C.hasAttribute("data-manual")&&(p.manual=!0));function A(){p.manual||p.highlightAll()}if(!p.manual){var x=document.readyState;x==="loading"||x==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return p}(a);e.exports&&(e.exports=l),typeof kr<"u"&&(kr.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(r,c){var m={};m["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[c]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};p["language-"+c]={pattern:/[\s\S]+/,inside:l.languages[c]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},l.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(s,r){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:l.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(s){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var c=s.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",r=function(C,A){return"✖ Error "+C+" while fetching file: "+A},c="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",o="loading",u="loaded",f="failed",d="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+o+'"])';function h(C,A,x){var _=new XMLHttpRequest;_.open("GET",C,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?A(_.responseText):_.status>=400?x(r(_.status,_.statusText)):x(c))},_.send(null)}function v(C){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(A){var x=Number(A[1]),_=A[2],S=A[3];return _?S?[x,Number(S)]:[x,void 0]:[x,x]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+d}),l.hooks.add("before-sanity-check",function(C){var A=C.element;if(A.matches(d)){C.code="",A.setAttribute(p,o);var x=A.appendChild(document.createElement("CODE"));x.textContent=s;var _=A.getAttribute("data-src"),S=C.language;if(S==="none"){var $=(/\.(\w+)$/.exec(_)||[,"none"])[1];S=m[$]||$}l.util.setLanguage(x,S),l.util.setLanguage(A,S);var B=l.plugins.autoloader;B&&B.loadLanguages(S),h(_,function(E){A.setAttribute(p,u);var M=v(A.getAttribute("data-range"));if(M){var F=E.split(/\r\n?|\n/g),I=M[0],L=M[1]==null?F.length:M[1];I<0&&(I+=F.length),I=Math.max(0,Math.min(I-1,F.length)),L<0&&(L+=F.length),L=Math.max(0,Math.min(L,F.length)),E=F.slice(I,L).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(I+1))}x.textContent=E,l.highlightElement(x)},function(E){A.setAttribute(p,f),x.textContent=E})}}),l.plugins.fileHighlight={highlight:function(A){for(var x=(A||document).querySelectorAll(d),_=0,S;S=x[_++];)l.highlightElement(S)}};var g=!1;l.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Mm);var Vm=Mm.exports;const Z_=Pm(Vm);function eb(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var _l=Q_,Rn=eb(Vm),tb=_l.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var s=l.slots,r=l.attrs,c=s&&s.default&&s.default()||[],m=a.code||c&&c.length?c[0].children:"",p=a.inline,o=a.language,u=Rn.languages[o],f="language-".concat(o);return function(){return p?_l.h("code",{class:[f],innerHTML:Rn.highlight(m,u)}):_l.h("pre",Object.assign({},r,{class:[r.class,f]}),[_l.h("code",Object.assign({},r,{class:[r.class,f],innerHTML:Rn.highlight(m,u)}))])}}}),ib=tb;const Fm=Pm(ib),ab=z({name:"DocPageHeader",props:{title:String,sub:String}}),lb={class:"intro",style:{padding:"2rem"}};function nb(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment");return R(),V(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",lb,[t(p,{as:"h1"},{default:i(()=>[n(ke(e.title)+" ",1),t(m,null,{default:i(()=>[n(ke(e.sub),1)]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ge=Ce(ab,[["render",nb]]),sb=z({name:"GettingStarted",components:{Prism:Fm,DocPageHeader:Ge}}),fn=e=>(Ys("data-v-2f4c2002"),e=e(),Js(),e),ob=fn(()=>w("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),rb=fn(()=>w("p",null," You can import all components as Vue plugin. ",-1)),ub=fn(()=>w("br",null,null,-1)),cb=fn(()=>w("p",null," Or pick a component indivisually, add it to your components option. ",-1));function db(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("prism"),u=b("sui-container");return R(),pe("div",null,[t(m,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),t(u,{class:"main"},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),ob,t(p,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),t(o,{language:"bash"},{default:i(()=>[n(ke(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),t(p,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),rb,t(o,{language:"js"},{default:i(()=>[n(ke(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),ub,cb,t(o,{language:"js"},{default:i(()=>[n(ke(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const mb=Ce(sb,[["render",db],["__scopeId","data-v-2f4c2002"]]),pb={__name:"DocSections",props:["docs"],setup(e){const a=e,l=H(()=>[...new Set(a.docs.map(s=>s.category))]);return(s,r)=>{const c=b("SuiHeader");return R(!0),pe(we,null,Qe(l.value,(m,p)=>(R(),pe(we,{key:m},[t(c,{as:"h2",dividing:"",style:ga({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(ke(m),1)]),_:2},1032,["style"]),(R(!0),pe(we,null,Qe(e.docs.filter(o=>o.category===m),(o,u)=>(R(),V(cd(o.component),{key:o.label+"_"+u,id:o.id,style:{marginTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},fb=e=>(Ys("data-v-e2ae2e49"),e=e(),Js(),e),gb={class:"item"},hb=fb(()=>w("i",{class:"dropdown icon"},null,-1)),_b={class:"content menu active"},bb={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=Bd(),l=m=>{m.preventDefault();const p=document.getElementById(a);p.open?r(p):(p.open=!0,s(p))},s=m=>{m.querySelector(".title").classList.add("active");const o=m.querySelector(".content"),u=o.offsetHeight;o.style.maxHeight=0,requestAnimationFrame(()=>{o.style.maxHeight=`${u}px`});const f=new AbortController;o.addEventListener("transitionend",()=>{o.removeAttribute("style"),f.abort()},{signal:f.signal})},r=m=>{const p=m.querySelector(".title"),o=m.querySelector(".content"),u=o.offsetHeight;o.style.maxHeight=`${u}px`,requestAnimationFrame(()=>{o.style.maxHeight=0,p.classList.remove("active")});const f=new AbortController;o.addEventListener("transitionend",()=>{o.removeAttribute("style"),m.open=!1,f.abort()},{signal:f.signal})},c=(m,p)=>{m.preventDefault(),document.getElementById(p.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,p)=>(R(),pe("details",gb,[w("summary",{class:"title",onClick:l},[hb,w("b",null,ke(e.header),1)]),w("div",_b,[(R(!0),pe(we,null,Qe(e.items,o=>(R(),V(y(go),{to:`#${o.id}`,class:"item",onClick:u=>c(u,o.id)},{default:i(()=>[n(ke(o.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},vb=Ce(bb,[["__scopeId","data-v-e2ae2e49"]]),yb={class:"sticky"},Cb={class:"ui vertical following fluid accordion text large menu"},wb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(s=>s.category))];return(s,r)=>{const c=b("SuiHeader"),m=b("SuiRail");return R(),V(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[w("div",yb,[t(c,{as:"h3"},{default:i(()=>[n(ke(e.title),1)]),_:1}),w("div",Cb,[(R(),pe(we,null,Qe(l,p=>t(vb,{id:`${p}_link`,header:p,items:e.links.filter(o=>o.category===p)},null,8,["id","header","items"])),64))])])]),_:1})}}},Sb=Ce(wb,[["__scopeId","data-v-bd90305d"]]),Ab={class:"intro"},kb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){return(a,l)=>{const s=b("SuiHeaderSubheader"),r=b("SuiHeader"),c=b("SuiDivider"),m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu"),u=b("SuiContainer"),f=b("SuiSegment");return R(),pe("div",null,[t(f,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(u,{class:"main"},{default:i(()=>[w("div",Ab,[t(r,{as:"h1"},{default:i(()=>[n(ke(e.title)+" ",1),t(s,null,{default:i(()=>[n(ke(e.description),1)]),_:1})]),_:1}),t(c,{hidden:""}),t(o,{floated:"right"},{default:i(()=>[t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"edit"})]),_:1}),t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(u,{class:"main"},{default:i(()=>[t(f,{basic:"",fitted:""},{default:i(()=>[t(pb,{docs:e.componentDocs},null,8,["docs"]),t(Sb,{title:e.title,links:e.componentDocs},null,8,["title","links"])]),_:1})]),_:1})])}}},Zt=Ce(kb,[["__scopeId","data-v-56cc7477"]]);function Hm(e){var a,l,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=Hm(e[a]))&&(s&&(s+=" "),s+=l);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function Q(){for(var e,a,l=0,s="";l<arguments.length;)(e=arguments[l++])&&(a=Hm(e))&&(s&&(s+=" "),s+=a);return s}const k=(e,a)=>e?a:"",Pe=(e,a)=>typeof e=="string"?`${e} ${a}`:"",De=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",ba=e=>e==="justified"?"justified":Pe(e,"aligned"),ei=(e,a)=>typeof e=="number"&&a?`${ps(e)} ${a}`:typeof e=="number"&&!a?ps(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Sa=(e,a)=>e?`${ps(e)} wide ${a}`:"",ps=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],ee=z({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:H(()=>Q(e.color,e.name,e.size,k(e.bordered,"bordered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fitted,"fitted"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.loading,"loading"),Pe(e.flipped,"flipped"),Pe(e.rotated,"rotated"),De(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return Y(e,{"aria-hidden":!0,class:this.computedClass})}}),mi=z({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:H(()=>Q(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return Y(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$b={install(e){e.component(ee.name,ee),e.component(mi.name,mi)}},xb=()=>({icon:[Boolean,String]}),Bb=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":Q({icon:e.icon&&!e.content}))}),Tb=["right","left"],Eb=()=>({labeled:[Boolean,String]}),Rb=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":Tb.includes(e.labeled)?`${e.labeled} labeled`:"")}),zb=["double","elastic"],Db=()=>({loading:{type:[Boolean,String],validator:e=>zb.includes(e)||typeof e=="boolean"}}),Ib=e=>({loadingClasses:H(()=>Q(e.loading,{loading:e.loading}))}),P=z({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...xb(),...Eb(),...Db()},setup(e){const{iconClasses:a}=Bb(e),{labeledClasses:l}=Rb(e),{loadingClasses:s}=Ib(e);return{classes:H(()=>Q("ui",e.color,e.size,k(e.active,"active"),k(e.basic,"basic"),k(e.circular,"circular"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.facebook,"facebook"),k(e.fluid,"fluid"),k(e.google,"google"),k(e.linkedin,"linkedin"),k(e.instagram,"instagram"),k(e.inverted,"inverted"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.primary,"primary"),k(e.secondary,"secondary"),k(e.telegram,"telegram"),k(e.tertiary,"tertiary"),k(e.toggle,"toggle"),k(e.twitter,"twitter"),k(e.vk,"vk"),k(e.whatsapp,"whatsapp"),k(e.youtube,"youtube"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),De(e.animated,"animated"),a.value,l.value,s.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,l;return[typeof this.icon=="string"&&t(ee,{name:this.icon},null),this.content||((l=(a=this.$slots).default)==null?void 0:l.call(a))]}})}}),di=z({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.hidden,"hidden"),k(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ot=z({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>Q("ui",e.color,e.size,k(e.basic,"basic"),k(e.icon,"icon"),k(e.labeled,"labeled"),k(e.vertical,"vertical"),Pe(e.attached,"attached"),ei(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Pb={install(e){e.component(P.name,P),e.component(di.name,di),e.component(ot.name,ot)}},fi=z({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>Q("ui",k(e.fluid,"fluid"),k(e.text,"text"),ba(e.textAlign),"container"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mb={install(e){e.component(fi.name,fi)}},Xe=z({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>Q("ui",k(e.clearing,"clearing"),k(e.fitted,"fitted"),k(e.hidden,"hidden"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.section,"section"),k(e.vertical,"vertical"),Pe(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vb={install(e){e.component(Xe.name,Xe)}},_t=z({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>Q(e.size,k(e.disabled,"disabled"),k(e.link,"link"),k(e.loading,"loading")))}},render(){return this.computedClass?Y("em",{class:this.computedClass,"data-emoji":this.$props.name}):Y("em",{"data-emoji":this.$props.name})}}),Fb={install(e){e.component(_t.name,_t)}},It=z({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:H(()=>Q(e.name,"flag"))}},render(){return Y("i",{class:this.computedClass})}}),Hb={install(e){e.component(It.name,It)}},ma=z({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return Y(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=z({name:"SuiHeader",components:{HeaderSubheader:ma},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=H(()=>Q("ui",e.color,e.size,k(e.block,"block"),k(e.disabled,"disabled"),k(e.dividing,"dividing"),k(e.icon,"icon"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.sub,"sub"),Pe(e.floated,"floated"),De(e.attached,"attached"),ba(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(Y(ma,{},this.subheader)),l.length>0?Y(this.elementType,{class:this.computedClass},l):Y(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vl=z({name:"SuiHeaderContent",render(){var e,a;return Y("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nb={install(e){e.component(fe.name,fe),e.component(Vl.name,Vl),e.component(ma.name,ma)}},Nm=["top","middle","bottom"],Lb={verticalAlign:{type:String,validator:e=>Nm.includes(e)}};function Ob(e){return{verticalAlignClass:H(()=>e.verticalAlign&&Nm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const jb=["left","right"],qb={floated:{type:String,validator:e=>jb.includes(e)}};function Gb(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const Mt=z({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>Q("ui",e.size,e.color,k(e.basic,"basic"),k(e.circular,"circular"),k(e.empty,"empty"),k(e.floating,"floating"),k(e.horizontal,"horizontal"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.prompt,"prompt"),k(e.tag,"tag"),Pe(e.attached,"attached"),Pe(e.corner,"corner"),De(e.pointing,"pointing"),De(e.ribbon,"ribbon"),"label"));let s=e.as||"div";return e.icon?()=>Y(s,{class:l.value},Y(ee,{name:e.icon})):()=>{var r;return Y(s,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),$r=z({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),xr=z({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>Q("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.tag,"tag"),"labels"));return()=>{var s;return Y("div",{class:l.value},(s=a.default)==null?void 0:s.call(a))}}}),Ub={install(e){e.component(Mt.name,Mt),e.component($r.name,$r),e.component(xr.name,xr)}},vt=z({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Lb,...qb},setup(e,{slots:a}){const{verticalAlignClass:l}=Ob(e),{floatedClass:s}=Gb(e),r=H(()=>Q("ui",e.size,l.value,s.value,k(e.avatar,"avatar"),k(e.bordered,"bordered"),k(e.centered,"centered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.hidden,"hidden"),k(e.inline,"inline"),k(e.rounded,"rounded"),De(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let c=e.as;return e.as==="router-link"&&(c=b(e.as)),()=>{var m;return Y(c,{class:r.value,href:e.href,target:e.target&&e.target},Y("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var c;return Y("div",{class:r.value},Y("img",{src:e.src},(c=a.default)==null?void 0:c.call(a)))}:e.label?()=>Y("div",{class:r.value},[Y("img",{src:e.src}),Y(Mt,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),Br=z({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const l=H(()=>Q("ui",e.size,"images"));return()=>{var s;return Y("div",{class:l.value},(s=a.default)==null?void 0:s.call(a))}}}),Yb={install(e){e.component(vt.name,vt),e.component(Br.name,Br)}},Ke=z({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=H(()=>typeof e.icon=="string"||e.loading),s=H(()=>!!e.label||e.labeled),r=H(()=>Q("ui",e.size,e.action&&"action",k(e.disabled,"disabled"),k(e.error,"error"),k(e.fluid,"fluid"),k(e.focus,"focus"),e.iconPosition,k(l.value,"icon"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.transparent,"transparent"),k(s.value,"labeled"),"input")),c=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:r.value},[e.label&&t(Mt,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>c(m)},null),l.value&&t(ee,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Jb={install(e){e.component(Ke.name,Ke)}},Tr=z({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const l=H(()=>Q("ui",k(e.animated,"animated"),k(e.bulleted,"bulleted"),k(e.celled,"celled"),k(e.divided,"divided"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.ordered,"ordered"),k(e.relaxed,"relaxed"),k(e.selection,"selection"),Pe(e.verticalAlign,"aligned"),Pe(e.floated,"floated"),"list"));let s=e.as||"div";return()=>{var r;return Y(s,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Er=z({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let l=e.as||"div";const s=H(()=>Q(k(e.active,"active"),k(e.disabled,"disabled"),"item"));return()=>{var r;return Y(l,{class:s.value},(r=a.default)==null?void 0:r.call(a))}}}),Rr=z({name:"SuiListIcon",components:{Icon:ee},setup(e,{slots:a}){return()=>{var l;return Y(b(ee.name),{...e},(l=a.default)==null?void 0:l.call(a))}}}),zr=z({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:H(()=>Q(Pe(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Dr=z({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return Y(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),Ir=z({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return Y(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),Pr=z({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wb={install(e){e.component(Tr.name,Tr),e.component(Er.name,Er),e.component(Rr.name,Rr),e.component(zr.name,zr),e.component(Dr.name,Dr),e.component(Ir.name,Ir),e.component(Pr.name,Pr)}},Mr=z({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var l;return Q("ui",e.color,e.size,k(e.active,"active"),k(e.disabled,"disabled"),k(e.fast,"fast"),k(e.indeterminate,"indeterminate"),k(e.inverted,"inverted"),k(e.slow,"slow"),k(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),De(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(Mr.name,Mr)}},Vr=z({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>Q("ui",e.position,e.size,k(e.attached,"attached"),k(e.dividing,"dividing"),k(e.internal,"internal"),De(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component(Vr.name,Vr)}},Fr=z({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.animated,k(e.active,"active"),k(e.disabled,"disabled"),k(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Hr=z({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>Q("ui",k(e.visible,"visible"),k(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb={install(e){e.component(Fr.name,Fr),e.component(Hr.name,Hr)}},pt=z({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.clearing,"clearing"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.piled,"piled"),k(e.placeholder,"placeholder"),k(e.raised,"raised"),k(e.secondary,"secondary"),k(e.stacked,"stacked"),k(e.tertiary,"tertiary"),k(e.vertical,"vertical"),Pe(e.floated,"floated"),Pe(e.textAlign,"aligned"),De(e.attached,"attached"),De(e.fitted,"fitted"),De(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Nr=z({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.size,k(e.compact,"compact"),k(e.horizontal,"horizontal"),k(e.piled,"piled"),k(e.raised,"raised"),k(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Lr=z({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(pt.name,pt),e.component(Nr.name,Nr),e.component(Lr.name,Lr)}},Or=z({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.active,"active"),k(e.completed,"completed"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.link,"link"),k(e.vertical,"vertical"),"step"))}},render(){var e,a,l,s;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(s=(l=this.$slots).default)==null?void 0:s.call(l)])}}),ev=["one","two","three","four","five","six","seven","eight"],jr=z({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>Q("ui",a&&ev[a-1],e.size,k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.ordered,"ordered"),k(e.unstackable,"unstackable"),k(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qr=z({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gr=z({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=z({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tv={install(e){e.component(Or.name,Or),e.component(jr.name,jr),e.component(qr.name,qr),e.component(Gr.name,Gr),e.component(Ur.name,Ur)}},iv=Object.freeze(Object.defineProperty({__proto__:null,Button:Pb,Container:Mb,Divider:Vb,Emoji:Fb,Flag:Hb,Header:Nb,Icon:$b,Image:Yb,Input:Jb,Label:Ub,List:Wb,Loader:Kb,Rail:Xb,Reveal:Qb,Segment:Zb,Step:tv},Symbol.toStringTag,{value:"Module"})),fs=z({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:H(()=>Q(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gs=z({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>Q(k(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=b("router-link"));const a={href:this.href,to:this.to};return t(e,Oi({class:this.computedClass},a),{default:()=>{var l,s;return[(s=(l=this.$slots).default)==null?void 0:s.call(l)]}})}}),Yr=z({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>Q("ui",e.size,k(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var s;return(s=this.sections)==null?void 0:s.map((r,c)=>{const m={active:r.active,href:r.href,link:r.link,to:r.to};return t(we,null,[t(gs,m,{default:()=>[r.content]}),this.sections.length!==c+1&&t(fs,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),av={install(e){e.component(Yr.name,Yr),e.component(fs.name,fs),e.component(gs.name,gs)}},hs=z({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:H(()=>Q("ui",e.size,k(e.error,"error"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.reply,"reply"),k(e.success,"success"),k(e.unstackable,"unstackable"),k(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function lv(e){return{widthClass:H(()=>Number(e.width)>0?`${Jr[Number(e.width)-1]} wide`:typeof e.width=="string"||Jr.includes(e.width)?`${e.width} wide`:null)}}const Fl=z({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=lv(e),s=H(()=>Q(k(e.disabled,"disabled"),k(e.error,"error"),k(e.inline,"inline"),k(e.required,"required"),l.value,"field")),r=e.type||"text";return{computedClass:s,inputType:r,onInput:c=>a("update:modelValue",c.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wr=z({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:H(()=>Q(Pe(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=z({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),nv={install(e){e.component(hs.name,hs),e.component(Fl.name,Fl),e.component(Wr.name,Wr),e.component(Kr.name,Kr)}},_s=z({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>Q("ui",e.container&&"container",k(e.centered,"centered"),k(e.compact,"compact"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),Pe(e.reversed,"reversed"),Pe(e.verticalAlign,"aligned"),De(e.celled,"celled"),De(e.divided,"divided"),De(e.padded,"padded"),De(e.relaxed,"relaxed"),ba(e.textAlign),ei(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Hl=z({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>Q(e.color,Pe(e.floated,"floated"),Pe(e.only,"only"),ba(e.textAlign),ei(e.width,"wide"),Sa(e.mobile,"mobile"),Sa(e.tablet,"tablet"),Sa(e.computer,"computer"),Sa(e.largeScreen,"large screen"),Sa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xr=z({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>Q(e.color,k(e.centered,"centered"),k(e.stretched,"stretched"),Pe(e.only,"only"),ei(e.columns,"column"),ba(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),sv={install(e){e.component(_s.name,_s),e.component(Hl.name,Hl),e.component(Xr.name,Xr)}},Qr=z({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>Q("ui",e.color,e.size,k(e.borderless,"borderless"),k(e.compact,"compact"),k(e.fixed,"fixed"),k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.pagination,"pagination"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.stackable,"stackable"),k(e.text,"text"),k(e.vertical,"vertical"),De(e.attached,"attached"),De(e.floated,"floated"),De(e.icon,"icon"),De(e.tabular,"tabular"),ei(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zr=z({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var s;return[e.content||((s=a.default)==null?void 0:s.call(a))]}})}}),eu=z({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=b(e.as));const s=H(()=>Q(e.color,e.position,k(e.action,"action"),k(e.active,"active"),k(e.browse,"browse"),k(e.disabled,"disabled"),k(e.header,"header"),k(e.link,"link"),De(e.fitted,"fitted"),"item"));return()=>t(l,{class:s.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),tu=z({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>Q(a,"menu"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov={install(e){e.component(Qr.name,Qr),e.component(Zr.name,Zr),e.component(eu.name,eu),e.component(tu.name,tu)}},iu=z({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.color,e.size,k(e.compact,"compact"),k(e.error,"error"),k(e.floating,"floating"),k(e.hidden,"hidden"),k(e.icon,"icon"),k(e.info,"info"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.success,"success"),k(e.visible,"visible"),k(e.warning,"warning"),De(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(bs,null,{default:()=>[t(vs,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bs=z({name:"SuiMessageContent",render(){var e,a;return Y("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vs=z({name:"SuiMessageHeader",render(){var e,a;return Y("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),au=z({name:"SuiMessageItem",render(){var e,a;return Y("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),lu=z({name:"SuiMessageList",render(){var e,a;return Y("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component(iu.name,iu),e.component(bs.name,bs),e.component(vs.name,vs),e.component(au.name,au),e.component(lu.name,lu)}},nu=z({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.color,e.size,k(e.celled,"celled"),k(e.collapsing,"collapsing"),k(e.definition,"definition"),k(e.fixed,"fixed"),k(e.inverted,"inverted"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.stackable,"stackable"),k(e.striped,"striped"),k(e.structured,"structured"),k(e.unstackable,"unstackable"),De(e.attached,"attached"),De(e.basic,"basic"),De(e.compact,"compact"),De(e.padded,"padded"),ei(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),su=z({name:"SuiTableBody",render(){var e,a;return Y("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ou=z({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>Q(e.color,k(e.active,"active"),k(e.collapsing,"collapsing"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.warning,"warning"),Pe(e.verticalAlign,"aligned"),Pe(e.marked,"marked"),ba(e.textAlign)))}},render(){var e,a,l,s;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(s=(l=this.$slots).default)==null?void 0:s.call(l)])}}),ru=z({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>Q(k(a,"full-width")))}},render(){var e,a,l,s;return this.computedClass?Y("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):Y("tfoot",{},(s=(l=this.$slots).default)==null?void 0:s.call(l))}}),uu=z({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.fullWidth,"full-width")))}},render(){var e,a,l,s;return this.computedClass?Y("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):Y("thead",{},(s=(l=this.$slots).default)==null?void 0:s.call(l))}}),cu=z({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>Q(k(e.singleLine,"single line"),Pe(e.textAlign,"aligned"),ei(e.width,"wide")))}},render(){var e,a,l,s;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(s=(l=this.$slots).default)==null?void 0:s.call(l)])}}),du=z({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>Q(e.color,k(e.active,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.warning,"warning"),Pe(e.textAlign,"aligned"),Pe(e.verticalAlign,"aligned")))}},render(){var e,a,l,s;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(s=(l=this.$slots).default)==null?void 0:s.call(l)])}}),uv={install(e){e.component(nu.name,nu),e.component(su.name,su),e.component(ou.name,ou),e.component(ru.name,ru),e.component(uu.name,uu),e.component(cu.name,cu),e.component(du.name,du)}},cv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:av,Form:nv,Grid:sv,Menu:ov,Message:rv,Table:uv},Symbol.toStringTag,{value:"Module"})),mu=z({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>Q("ui",e.unit,k(e.centered,"centered"),k(!!e.test,"test"),"ad"))}},render(){var e,a,l,s;return this.$props.test?Y("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):Y("div",{class:this.computedClass},(s=(l=this.$slots).default)==null?void 0:s.call(l))}}),dv={install(e){e.component(mu.name,mu)}},pu=z({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.color,k(e.centered,"centered"),k(e.fluid,"fluid"),k(e.horizontal,"horizontal"),k(e.link,"link"),k(e.raised,"raised"),"card"))}},render(){var e,a,l,s;return this.$props.href||this.$props.link?Y("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):Y("div",{class:this.computedClass},(s=(l=this.$slots).default)==null?void 0:s.call(l))}}),fu=z({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gu=z({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:H(()=>Q(Pe(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),hu=z({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>Q("ui",k(e.centered,"centered"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),ei(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_u=z({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:H(()=>Q(Pe(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bu=z({name:"SuiCardMeta",render(){var e,a;return Y("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),mv={install(e){e.component(pu.name,pu),e.component(fu.name,fu),e.component(gu.name,gu),e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu)}},vu=z({name:"SuiComment",render(){var e,a;return Y("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),yu=z({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>Q(k(a,"active")))}},render(){var e,a,l,s;return this.computedClass?Y("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):Y("a",{},(s=(l=this.$slots).default)==null?void 0:s.call(l))}}),Cu=z({name:"SuiCommentActions",render(){var e,a;return Y("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=z({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return Y(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Su=z({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return Y(e,{class:"avatar"},Y("img",{src:this.$props.src}))}}),Au=z({name:"SuiCommentContent",render(){var e,a;return Y("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ku=z({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>Q("ui",e.size,k(e.collapsed,"collapsed"),k(e.inverted,"inverted"),k(e.minimal,"minimal"),k(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$u=z({name:"SuiCommentMetadata",render(){var e,a;return Y("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xu=z({name:"SuiCommentText",render(){var e,a;return Y("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(vu.name,vu),e.component(yu.name,yu),e.component(Cu.name,Cu),e.component(wu.name,wu),e.component(Su.name,Su),e.component(Au.name,Au),e.component(ku.name,ku),e.component($u.name,$u),e.component(xu.name,xu)}},Bu=z({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>Q("ui",e.size,k(e.inverted,"inverted"),"feed"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=z({name:"SuiFeedContent",render(){var e,a;return Y("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=z({name:"SuiFeedDate",render(){var e,a;return Y("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=z({name:"SuiFeedEvent",render(){var e,a;return Y("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=z({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:H(()=>Q(k(a,"images"),k(l,"text"),"extra"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=z({name:"SuiFeedLabel",render(){var e,a;return Y("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=z({name:"SuiFeedLike",render(){var e,a;return Y("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=z({name:"SuiFeedMeta",render(){var e,a;return Y("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=z({name:"SuiFeedSummary",render(){var e,a;return Y("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=z({name:"SuiFeedUser",render(){var e,a;return Y("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(Bu.name,Bu),e.component(Tu.name,Tu),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Du.name,Du),e.component(Iu.name,Iu),e.component(Pu.name,Pu),e.component(Mu.name,Mu),e.component(Vu.name,Vu)}},Fu=z({name:"SuiItem",render(){var e,a;return Y("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hu=z({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>Q(Pe(a,"aligned"),"content"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=z({name:"SuiItemDescription",render(){var e,a;return Y("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=z({name:"SuiItemExtra",render(){var e,a;return Y("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=z({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>Q("ui",k(e.divided,"divided"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.unstackable,"unstackable"),De(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=z({name:"SuiItemHeader",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return Y(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qu=z({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:H(()=>Q(e.size,"image"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=z({name:"SuiItemMeta",render(){var e,a;return Y("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component(Fu.name,Fu),e.component(Hu.name,Hu),e.component(Nu.name,Nu),e.component(Lu.name,Lu),e.component(Ou.name,Ou),e.component(ju.name,ju),e.component(qu.name,qu),e.component(Gu.name,Gu)}},Nl=z({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?Y("div",{class:"label"},this.$props.content):Y("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ll=z({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?Y("div",{class:this.computedClass},this.$props.content):Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Uu=z({name:"SuiStatistic",components:{StatisticLabel:Nl,StatisticValue:Ll},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=Me("ui",!0);return{computedClass:H(()=>Q(a&&"ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.text,"text"),De(e.floated,"floated"),"statistic"))}},render(){var e,a,l,s,r,c;let m=[];return this.$props.value&&m.push(Y(Ll,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(Y(Nl,{content:this.$props.label},(s=(l=this.$slots).default)==null?void 0:s.call(l))),Y("div",{class:this.computedClass},m.length>0?m:(c=(r=this.$slots).default)==null?void 0:c.call(r))}}),Yu=z({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return nt("ui",!1),{computedClass:H(()=>Q("ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),ei(e.widths,""),"statistics"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),hv={install(e){e.component(Uu.name,Uu),e.component(Yu.name,Yu),e.component(Nl.name,Nl),e.component(Ll.name,Ll)}},_v=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:dv,Card:mv,Comment:pv,Feed:fv,Item:gv,Statistic:hv},Symbol.toStringTag,{value:"Module"})),Ju=z({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?j([]):j(-1),l=r=>e.multiple?a.value.includes(r):a.value===r,s=r=>{const c=l(r);e.multiple?c?a.value=a.value.filter(m=>m!==r):a.value.push(r):a.value=c?-1:r};return nt("isTabActive",l),nt("updateActiveIndex",s),{computedClass:H(()=>Q("ui",k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=s=>(s.forEach((r,c)=>{r.props.index=c}),s);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Wu=z({name:"SuiAccordionAccordion",render(){var e,a;return Y("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ys=z({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.active,"active"),"content"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ku=z({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=Me("isTabActive"),l=Me("updateActiveIndex"),s=H(()=>Q(k(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:s}},render(){return t(we,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(ee,{name:"dropdown"},null),this.title]),t(ys,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Xu=z({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.active,"active"),"title"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),bv={install(e){e.component(Ju.name,Ju),e.component(Wu.name,Wu),e.component(ys.name,ys),e.component(Ku.name,Ku),e.component(Xu.name,Xu)}},vv=(e,a,l)=>{e.clickOutside=s=>{e===s.target||e.contains(s.target)||a.value(s,e)},document.body.addEventListener("click",e.clickOutside)},yv=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},ho={mounted:vv,unmounted:yv};function Cv(e,a={}){const l=j(e.value?"open":"closed"),s=()=>l.value=e.value?"open":"closed";ut(e,p=>{l.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",s,!0)},c=p=>{p&&p.removeEventListener("animationend",s)},m=H((p="scale")=>{switch(l.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:c,computeAnimationClass:m}}const wv=z({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=j(!1),s=()=>{e.disabled||(l.value=!0)},r=()=>l.value=!1,c=()=>{e.disabled||a("select-day",e.date)},m=()=>{let o=new Date;return o.getFullYear()===e.date.year&&o.getMonth()===e.date.month&&o.getDate()===e.date.day},p=H(()=>Q("link",k(l.value,"focus"),k(e.active&&!e.disabled,"active"),k(e.disabled,"adjacent disabled"),k(m(),"today")));return{onMouseEnter:s,onMouseLeave:r,onClick:c,computedClass:p}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:$t(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Sv=z({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:s,subtract:r,selectedDate:c,setSelectedDate:m,selectType:p,updateVisible:o,formatDate:u}=Me(vi);return{calendarDays:e,isEqualDay:f=>{if(!c.value)return!1;const d=c.value;return d.getFullYear()===f.year&&d.getMonth()===f.month&&d.getDate()===f.day},onSelectDay:f=>{if(l(f.year,"years"),l(f.month,"months"),l(f.day,"days"),p.value==="date"){let d=new Date(f.year,f.month,f.day);m(d),o(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:s,subtract:r}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(s=>t(wv,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:$t(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),ve=z({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=j(!1),l=()=>a.value=!0,s=()=>a.value=!1,r=H(()=>Q("link",k(e.active,"active"),k(e.today,"today"),k(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:s,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:$t(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Av=z({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:s,selectedDate:r,updateSelectMode:c}=Me(vi);return{state:e,add:l,subtract:s,updateSelectMode:c,isActive:m=>r.value?e.year===r.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let p=new Date;return m===p.getMonth()&&e.year===p.getFullYear()},onClickCell:m=>{a(m,"months"),c("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,s)=>t("tr",null,[t(ve,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[e[s*3]]}),t(ve,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[e[s*3+1]]}),t(ve,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[e[s*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:$t(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),kv=z({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:s,subtract:r,selectedDate:c,updateSelectMode:m}=Me(vi),p=()=>s(10,"years"),o=()=>r(10,"years"),u=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:p,movePrevTwelveYears:o,headerStartYear:u,isActive:f=>c.value?f===c.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{l(f,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:$t(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ve,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(ve,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(ve,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(ve,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(ve,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(ve,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(ve,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(ve,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(ve,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(ve,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(ve,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(ve,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),$v=z({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:s,subtract:r,formatDate:c,selectedDate:m}=Me(vi);return{updateSelectMode:e,formatDate:c,onPrevClick:()=>r(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:p=>{l(p,"hours"),e("minute")},isActive:p=>{if(!m.value)return!1;let o=m.value.getFullYear(),u=m.value.getMonth(),f=m.value.getDate(),d=m.value.getHours();return a.year===o&&a.month===u&&a.day===f&&p===d}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:$t(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ve,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(ve,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(ve,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(ve,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(ve,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(ve,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(ve,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(ve,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(ve,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(ve,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(ve,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(ve,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(ve,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(ve,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(ve,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(ve,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(ve,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(ve,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(ve,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(ve,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(ve,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(ve,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(ve,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(ve,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Tt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const xv=z({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:s,formatDate:r,updateSelectMode:c,updateVisible:m,selectedDate:p}=Me(vi);return{add:l,subtract:s,formatDate:r,updateSelectMode:c,getTimeLabel:o=>{let u=e.hour%12,f=e.hour>12?"PM":"AM",d=o.toString().padStart(2,"0");return e.hour===0?`12:${d} AM`:e.hour===12?`12:${d} PM`:`${u}:${d} ${f}`},onClickCell:o=>{a(o,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:o=>{if(!p.value)return!1;let u=p.value.getFullYear(),f=p.value.getMonth(),d=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return e.year===u&&e.month===f&&e.day===d&&e.hour===h&&o===v}}},render(){let e,a,l,s,r,c,m,p,o,u,f,d;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:$t(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ve,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Tt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(ve,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Tt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(ve,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Tt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(ve,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Tt(s=this.getTimeLabel(15))?s:{default:()=>[s]}),t(ve,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Tt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(ve,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Tt(c=this.getTimeLabel(25))?c:{default:()=>[c]})]),t("tr",null,[t(ve,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Tt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(ve,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Tt(p=this.getTimeLabel(35))?p:{default:()=>[p]}),t(ve,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Tt(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),t("tr",null,[t(ve,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Tt(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(ve,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Tt(f=this.getTimeLabel(50))?f:{default:()=>[f]}),t(ve,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Tt(d=this.getTimeLabel(55))?d:{default:()=>[d]})])])])}}),Bv=z({name:"SuiCalendarBody",setup(){const e=j(null),{visible:a,selectMode:l}=Me(vi),{setupAnimation:s,removeAnimation:r,computeAnimationClass:c}=Cv(a);bi(()=>s(e.value)),Li(()=>r(e.value));const m=H(()=>Q("ui popup calendar","bottom left","transition",c.value));return{rootRef:e,computedClass:m,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t(Sv,null,null);case"month":return t(Av,null,null);case"year":return t(kv,null,null);case"hour":return t($v,null,null);case"minute":return t(xv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),Tv=z({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:s,set:r,state:c,formatCalendarDate:m}=Me(vi);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(s("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Ev=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let s=l.getDay();return s>=7?s-7:s},Rv=(e,a)=>{let l,s;return a===0?(l=11,s=e-1):(l=a-1,s=e),32-new Date(s,l,32).getDate()},zn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function zv(){const e=j(!1),a=(C=!1)=>e.value=C,l=new Date;function s(C){if(!C)return;let A=C.getFullYear(),x=zn(C.getMonth()),_=C.getDate(),S=C.getHours(),$=C.getMinutes(),B=S>11?"PM":"AM";S=S%12,S===0&&(S=12);let E=$.toString().padStart(2,"0");return`${x} ${_}, ${A} ${S}:${E} ${B}`}const r=j("default"),c=j("day");function m(C){c.value=C}const p=j(null),o=C=>{p.value=C},u=Xt({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),f=(C,A)=>{switch(A){case"years":u.year=C;break;case"months":u.month=C;break;case"days":u.day=C;break;case"hours":u.hour=C;break;case"minutes":u.minute=C}},d=(C,A)=>{let x=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":x.setFullYear(x.getFullYear()+C);break;case"months":x.setMonth(x.getMonth()+C);break;case"days":x.setDate(x.getDate()+C);break;case"hours":x.setHours(x.getHours()+C);break}u.year=x.getFullYear(),u.month=x.getMonth(),u.day=x.getDate(),u.hour=x.getHours()},h=(C,A)=>{let x=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":x.setFullYear(x.getFullYear()-C);break;case"months":x.setMonth(x.getMonth()-C);break;case"days":x.setDate(x.getDate()-C);break;case"hours":x.setHours(x.getHours()-C);break}u.year=x.getFullYear(),u.month=x.getMonth(),u.day=x.getDate(),u.hour=x.getHours()},v=(C="default")=>C==="date"?`${zn(u.month)} ${u.year}`:`${zn(u.month)} ${u.day}, ${u.year}`,g=H(()=>{let C=u.month,A=u.year;C>11&&(C=C%11-1,A+=1);let x=[],_=Ev(A,C),S=32-new Date(A,C,32).getDate(),$=Rv(A,C),B=1;for(let E=0;E<6;E++){let M=[];if(E===0){for(let I=$-_+1;I<=$;I++){let L=C===0?11:C-1,W=C===0?A-1:A;M.push({day:I,month:L,year:W,currentMonth:!1})}let F=7-M.length;for(let I=0;I<F;I++)M.push({day:B,month:C,year:A,currentMonth:!0}),B++}else for(let F=0;F<7;F++){if(B>S){let I=C===11?0:C+1,L=C===11?A+1:A;M.push({day:B-S,month:I,year:L,currentMonth:!1})}else M.push({day:B,month:C,year:A,currentMonth:!0});B++}x.push(M)}return x});return{visible:e,updateVisible:a,calendarDays:g,formatCalendarDate:s,selectMode:c,updateSelectMode:m,selectType:r,selectedDate:p,setSelectedDate:o,state:u,set:f,add:d,subtract:h,formatDate:v}}const vi=Symbol("useCalendar"),Qu=z({name:"SuiCalendar",directives:{clickoutside:ho},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=zv();nt(vi,l);const{updateVisible:s,selectedDate:r}=l;return ut(r,c=>{a("update:modelValue",c)}),{updateVisible:s}},render(){return il(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Bv,null,null),t("i",{class:"calendar icon"},null),t(Tv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[tn("clickoutside"),()=>this.updateVisible(!1)]])}}),Dv={install:e=>{e.component(Qu.name,Qu)}},Zu=z({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=H(()=>Q("ui",!e.label&&"fitted",k(e.disabled,"disabled"),k(e.indeterminate,"indeterminate"),k(e.radio,"radio"),k(e.readOnly,"read-only"),k(e.slider,"slider"),k(e.toggle,"toggle"),"checkbox")),s=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:s,onClick:r=>{if(e.disabled||e.readOnly)return;let c;e.value?s.value?c=e.modelValue.filter(m=>e.value!==m):c=e.modelValue?[...e.modelValue,e.value]:[e.value]:c=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",c)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),Iv={install(e){e.component(Zu.name,Zu)}},ec=z({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>Q("ui",k(e.active,"active"),k(e.inverted,"inverted"),k(e.page,"page"),k(e.simple,"simple"),Pe(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return Y("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tc=z({name:"SuiDimmerDimmable",components:{Segment:pt},props:{blurring:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return Y(pt,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pv={install(e){e.component(ec.name,ec),e.component(tc.name,tc)}},Mv=(e,a)=>e.map(l=>l[a]),Vv=z({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>Q(k(e.filtered,"filtered"),k(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:c,text:m}=this.item;l=t(we,null,[c&&t("i",{class:`${c} flag`},null),m])}else l=this.item;else l=this.text||this.placeholder;const s=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(we,null,[t("div",{class:this.computedClass},[s&&t(vt,s,null),r&&t(Mt,r,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:$t(()=>this.$emit("remove"),["stop"])},null)])}}),Fv=e=>{const a=Xt({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return ut(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Hv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const ic=z({name:"SuiDropdown",directives:{clickoutside:ho},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=Fv(e);nt("useDropdown",l);const{state:s,show:r,hide:c}=l,m=H(()=>Q("ui",k(e.button,"button"),k(e.clearable,"clearable"),k(e.compact,"compact"),k(e.floating,"floating"),k(e.fluid,"fluid"),k(!!e.icon,"icon"),k(e.inline,"inline"),k(e.item,"item"),k(e.labeled,"labeled"),k(e.multiple,"multiple"),k(e.search,"search"),k(e.scrolling,"scrolling"),k(e.selection,"selection"),k(e.simple,"simple"),De(e.pointing,"pointing"),"dropdown",k(s.visible,"active visible"),k(s.direction==="up","upward"))),p=()=>{var A;if(s.visible)return c();(A=h.value)==null||A.focus(),r()},o=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>c(),f=j(""),d=H(()=>{const A=f.value.toLowerCase();return e.options.filter(x=>{const _=typeof x=="object"?x.text:x,S=_.toLowerCase().includes(A);if(!e.multiple)return S;if(Array.isArray(e.modelValue)){const $=typeof x=="object"?Mv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return S&&!$}return S})}),h=j(null),v=A=>f.value=A.target.value,g=A=>{var x;if(f.value="",e.search&&((x=h.value)==null||x.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,A]:[A];return a("update:modelValue",_)}return a("update:modelValue",A)},C=A=>{if(Array.isArray(e.modelValue)){const x=e.modelValue.findIndex(_=>_===A);if(x>-1){let _=Object.assign(e.modelValue);_.splice(x,1),a("update:modelValue",_)}}};return nt("selection",e.selection),{computedClass:m,onClick:p,openMenu:o,closeMenu:u,filteredText:f,filteredOptions:d,inputRef:h,onInput:v,onSelect:g,removeItem:C}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:$t(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:$t(()=>this.removeItem(m),["stop"])},null)]))},s=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(Cs,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),r=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Vv,Oi(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},c=()=>{let m;return t(ws,{search:this.$props.searchInMenu,onSearch:this.onInput},Hv(m=s())?m:{default:()=>[m]})};return il(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||c()]),[[tn("clickoutside"),this.closeMenu]])}}),Cs=z({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:s}=Me("useDropdown");return{computedClass:H(()=>Q(k(e.active,"active"),k(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||s(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:$t(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(vt,this.image,null),this.label&&t(Mt,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),ws=z({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:s}=Me("useDropdown"),r=j(null),c=H(()=>{let p=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return Q("menu","transition",k(s.visible,"visible"),k(!s.visible&&!s.animating,"hidden"),k(s.animating,p()))});ut(()=>s.visible,p=>{if(!p||!r.value)return;let o=r.value.parentElement;const{top:u,height:f}=o==null?void 0:o.getBoundingClientRect(),d=u-m.value.length*37,h=document.documentElement.clientHeight-u-f-m.value.length*37;s.direction=d>h?"up":"down"});const m=H(()=>{var p;let o=[],u=(p=l.default)==null?void 0:p.call(l);return u&&u.forEach(f=>{f.type.name==="SuiSelectItem"&&o.push(f)}),o});return{container:r,computedClass:c,onSearchInput:p=>a("search",p)}},render(){var e,a,l,s;const r=()=>t(we,null,[t("div",{class:"ui left icon input",onClick:$t(()=>{},["stop"])},[t("input",{type:"text",onInput:c=>this.onSearchInput(c)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:c=>this.container=c,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(s=(l=this.$slots).default)==null?void 0:s.call(l)])}}),Nv={install(e){e.component(ic.name,ic),e.component(Cs.name,Cs),e.component(ws.name,ws)}},ac=z({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=j(e.active),l=()=>{a.value=!a.value},s=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>Q("ui",e.aspectRatio,k(a.value,"active"),"embed"));return{active:a,getSrc:s,clickHandler:l,computedClass:r}},render(){let e=[Y("i",{class:"video play icon"}),Y("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(Y("div",{class:"embed"},Y("iframe",{src:this.getSrc()}))),Y("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Lv={install(e){e.component(ac.name,ac)}};function Ov(e){return Ms()?(Vc(e),!0):!1}function Lm(e){return typeof e=="function"?e():y(e)}const Om=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const jv=Object.prototype.toString,qv=e=>jv.call(e)==="[object Object]",Sl=()=>{},Gv=Uv();function Uv(){var e,a;return Om&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function xa(e){var a;const l=Lm(e);return(a=l==null?void 0:l.$el)!=null?a:l}const jm=Om?window:void 0;function Dn(...e){let a,l,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,s,r]=e,a=jm):[a,l,s,r]=e,!a)return Sl;Array.isArray(l)||(l=[l]),Array.isArray(s)||(s=[s]);const c=[],m=()=>{c.forEach(f=>f()),c.length=0},p=(f,d,h,v)=>(f.addEventListener(d,h,v),()=>f.removeEventListener(d,h,v)),o=ut(()=>[xa(a),Lm(r)],([f,d])=>{if(m(),!f)return;const h=qv(d)?{...d}:d;c.push(...l.flatMap(v=>s.map(g=>p(f,v,g,h))))},{immediate:!0,flush:"post"}),u=()=>{o(),m()};return Ov(u),u}let lc=!1;function Yv(e,a,l={}){const{window:s=jm,ignore:r=[],capture:c=!0,detectIframe:m=!1}=l;if(!s)return Sl;Gv&&!lc&&(lc=!0,Array.from(s.document.body.children).forEach(f=>f.addEventListener("click",Sl)),s.document.documentElement.addEventListener("click",Sl));let p=!0;const o=f=>r.some(d=>{if(typeof d=="string")return Array.from(s.document.querySelectorAll(d)).some(h=>h===f.target||f.composedPath().includes(h));{const h=xa(d);return h&&(f.target===h||f.composedPath().includes(h))}}),u=[Dn(s,"click",f=>{const d=xa(e);if(!(!d||d===f.target||f.composedPath().includes(d))){if(f.detail===0&&(p=!o(f)),!p){p=!0;return}a(f)}},{passive:!0,capture:c}),Dn(s,"pointerdown",f=>{const d=xa(e);p=!o(f)&&!!(d&&!f.composedPath().includes(d))},{passive:!0}),m&&Dn(s,"blur",f=>{setTimeout(()=>{var d;const h=xa(e);((d=s.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&a(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}function qm(e,a="scale"){const l=j(e.modelValue?"open":"closed");return ut(()=>e.modelValue,s=>{l.value=s?"opening":"closing"}),{animationClasses:H(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const Jv=z({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:s}=qm(e,"fade"),r=H(()=>Q("ui","page modals dimmer transition",k(e.inverted,"inverted"),a.value)),c=H(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),m=H(()=>Q("dimmable","dimmed",k(e.blurring,"blurring")));return ut(()=>e.modelValue,p=>{if(p){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:r,style:c,onAnimationEnd:s}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nc=z({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=j(),{animationClasses:s,isClosed:r}=qm(e),c=H(()=>Q("ui",e.size,k(e.basic,"basic"),k(e.overlay,"overlay"),k(e.fullscreen,"fullscreen"),"modal","transition",s.value)),m=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>a("update:modelValue",!1);return Yv(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:c,style:m,close:p,modalRef:l}},render(){return t(on,{to:"body"},{default:()=>[t(Jv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),sc=z({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),oc=z({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>Q(k(e.image,"image"),k(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),rc=z({name:"SuiModalDescription",render(){var e,a;return Y("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uc=z({name:"SuiModalHeader",render(){var e,a;return Y("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wv={install(e){e.component(nc.name,nc),e.component(sc.name,sc),e.component(oc.name,oc),e.component(rc.name,rc),e.component(uc.name,uc)}},Kv=e=>{const a=j(!1),l=Un(e,"position"),s=j(null),r=Un(e,"trigger"),c=()=>{a.value=!0,ha(()=>p())},m=()=>{a.value=!1},p=()=>{if(!s.value||!r.value)return;let o=0,u=0;const f=s.value,d=r.value.$el;f.style.transform=`translate(${o}px, ${u}px)`;const{top:h,left:v,width:g,height:C}=d.getBoundingClientRect(),A=f.getBoundingClientRect(),{pageXOffset:x,pageYOffset:_}=window;if(l.value.includes("top")?(o=x+v,u=_+h-f.offsetTop-f.offsetHeight):(o=v,u=h+C-A.top),l.value.includes("right")){const S=g-A.width;o=v+S}if(l.value.includes("center")){const S=g/2-A.width/2;o=v+S}l.value==="right center"&&(o=v+g,u=h+C/2-A.top-A.height/2),l.value==="left center"&&(o=v-A.width,u=h+C/2-A.top-A.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${o}px, ${u}px)`};return{show:a,showPopup:c,hidePopup:m,placement:l,popupRef:s,triggerRef:r}},cc=z({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:s,hidePopup:r,popupRef:c,triggerRef:m}=Kv(e);Zs(()=>{var h,v,g;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",s),(g=m.value)==null||g.$el.addEventListener("mouseleave",r))});const p=j(l.value?"open":"close");H(()=>p.value!=="closed"),ut(()=>l.value,h=>{p.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=l.value?"open":"closed";bi(()=>{var h;(h=c.value)==null||h.addEventListener("animationend",u,!0)}),Li(()=>{var h;(h=c.value)==null||h.removeEventListener("animationend",u)});const f={position:"initial",animationDuration:"200ms"},d=H(()=>Q("ignored ui",e.position,e.size,k(e.basic,"basic"),k(e.flowing,"flowing"),k(e.inverted,"inverted"),De(e.wide,"wide"),"popup transition",o(p.value,"scale")));return()=>t(on,{to:"body"},{default:()=>{var h;return[t("div",{ref:c,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:d.value,style:f},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Xv={install(e){e.component(cc.name,cc)}},Qv=["top","bottom","left"],_o=()=>({attached:{type:String,validator:e=>Qv.includes(e)}}),Gm=e=>({attachedClasses:H(()=>Q(e.attached,{attached:e.attached}))}),Zv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Um=()=>({color:{type:String,validator:e=>Zv.includes(e)}}),Ym=e=>({colorClasses:H(()=>Q(e.inverted&&"inverted",e.color))}),Ol=z({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,..._o(),...Um()},setup(e){const{attachedClasses:a}=Gm(e),{colorClasses:l}=Ym(e),s=H(()=>Q("ui",l.value,e.size,k(e.active||e.indicating,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.indicating,"indicating"),k(e.success,"success"),k(e.warning,"warning"),a.value,"progress")),r=H(()=>Q(De(e.progress,"progress"))),c=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:c.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),e1={install(e){e.component(Ol.name,Ol)}},t1=z({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=Me("rating",j(0)),l=Me("updateRating"),s=Me("selectedIndex",j(0)),r=Me("updateSelectedIndex"),c=Me("clearable",!1),m=Me("disabled",!1),p=()=>{if(!m){if(c&&e.index===a.value){l(0),r(0);return}l(e.index)}},o=()=>{m||r(e.index)},u=H(()=>e.index<=a.value),f=H(()=>e.index<=s.value),d=H(()=>Q(e.icon,k(u.value,"active"),k(f.value,"selected"),"icon"));return()=>t("i",{class:d.value,onClick:()=>p(),onMouseenter:()=>o()},null)}}),dc=z({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=j(e.modelValue||e.defaultRating),s=j(!1),r=j(0),c=f=>{l.value=f,a("update:modelValue",f),a("change",f)},m=f=>r.value=f,p=()=>{e.disabled||(s.value=!0)},o=()=>{e.disabled||(s.value=!1,m(0))},u=H(()=>Q("ui",e.color,e.icon,e.size,k(e.disabled,"disabled"),"rating",k(s.value,"selected")));return nt("rating",l),nt("updateRating",c),nt("selectedIndex",r),nt("updateSelectedIndex",m),nt("clearable",e.clearable),nt("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>o()},[[...Array(e.maxRating)].map((f,d)=>t(t1,{icon:e.icon,index:d+1},null))])}}),i1={install(e){e.component(dc.name,dc)}},mc=z({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),a1={install(e){e.component(mc.name,mc)}},pc=z({name:"SuiSidebar",directives:{clickoutside:ho},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=Xt({animating:!1}),s=H(()=>{const r=e.direction==="right"||e.direction==="left";return Q("ui","sidebar",e.direction,e.animation,k(e.inverted,"inverted"),k(e.visible,"visible"),k(l.animating,"animating"),k(r,"vertical"),De(e.icon,"icon"),"menu")});return ut(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:r=>{const c=r.path||r.composedPath&&r.composedPath();c&&c.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return il(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[tn("clickoutside"),this.onClickPusher]])}}),l1={install:e=>{e.component(pc.name,pc)}};class In{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const fc=z({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=H(()=>Q("ui",e.color,e.size,k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.reversed,"reversed"),k(e.vertical,"vertical"),De(e.labeled,"labeled"),"slider")),s=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),c=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:s()+"%",width:r()-s()+"%"}:e.vertical?e.reversed?{bottom:s()+"%",height:r()-s()+"%"}:{top:s()+"%",height:r()-s()+"%"}:{left:s()+"%",width:r()-s()+"%"};let O=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(O-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(O-e.min)/(e.max-e.min)*100}%`}}),m=H(()=>{let O=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=H(()=>{let O=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),o=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((O,J)=>J*e.step+e.min)),u=()=>{var O,J;let ue=1,ie=f(),Te=(e.vertical?(O=h.value)==null?void 0:O.clientHeight:(J=h.value)==null?void 0:J.clientWidth)||0,Ue=1;if(Te>0)for(;Te/ie*Ue<100;)ie%Ue||(ue=Ue),Ue+=1;return ue},f=()=>Math.round((e.max-e.min)/e.step),d=j(null),h=j(null),v=j(0),g=j(0),C=j(0),A=j(0),x=()=>{if(!d.value)return;let O=d.value.getBoundingClientRect();v.value=O.left+In.getWindowScrollLeft(),g.value=O.top+In.getWindowScrollTop(),C.value=d.value.offsetWidth,A.value=d.value.offsetHeight},_=j(0),S=O=>{let{pageX:J,pageY:ue}=O.touches?O.touches[0]:O,ie,Te;e.vertical?ie=(g.value+A.value-ue)*100/A.value:ie=(J-v.value)*100/C.value,Te=(e.max-e.min)*(ie/100)+e.min;const Ue=e.range?e.modelValue[_.value]:e.modelValue||0;Te=Ue+Math.round(Te/e.step-Ue/e.step)*e.step,e.reversed&&(Te=e.max-Te+e.min),e.vertical&&(Te=e.max-Te+e.min),$(Te)},$=O=>{let J=O,ue;if(e.range)if(ue=e.modelValue?[...e.modelValue]:[],_.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;J<e.min?J=e.min:J>ie&&(J=ie),ue[0]=J,ue[1]=ue[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;J>e.max?J=e.max:J<ie&&(J=ie),ue[0]=ue[0]||e.min,ue[1]=J}else J<e.min&&(J=e.min),J>e.max&&(J=e.max),ue=J;a("update:modelValue",ue),a("change",ue)},B=j(!1),E=O=>B.value=O,M=(O,J=0)=>{E(!0),x(),_.value=J,O.preventDefault()},F=O=>{B.value&&(E(!1),document.removeEventListener("mousemove",I),a("slideend",{event:O,value:e.modelValue}))},I=O=>{B.value&&(S(O),O==null||O.preventDefault())},L=(O,J=0)=>{e.disabled||(M(O,J),document.addEventListener("mousemove",I),document.addEventListener("mouseup",F),O.preventDefault())},W=(O,J=0)=>{switch(_.value=J,O.code){case"ArrowUp":e.vertical&&(e.reversed?G():de()),O.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?de():G()),O.preventDefault();break;case"ArrowRight":e.reversed?de():G(),O.preventDefault();break;case"ArrowLeft":e.reversed?G():de(),O.preventDefault();break}},G=()=>{let O=0;e.range?O=e.modelValue[_.value]+e.step:O=e.modelValue+e.step,$(O)},de=()=>{let O=0;e.range?O=e.modelValue[_.value]-e.step:O=e.modelValue-e.step,$(O)},Be=O=>{if(!e.disabled&&!In.hasClass(O.target,"thumb")){if(e.range){let J=(e.vertical?O.offsetY/O.target.clientHeight:O.offsetX/O.target.clientWidth)*100,ue=(s()+r())/2;J<ue?_.value=e.reversed?1:0:_.value=e.reversed?0:1}x(),S(O)}};return()=>t("div",{ref:O=>d.value=O,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:O=>h.value=O},null),t("div",{class:"track-fill",style:c.value},null),t("div",{class:"thumb",style:m.value,onMousedown:O=>L(O),onTouchstart:O=>M(O),onTouchmove:O=>I(O),onTouchend:O=>F(O),onKeydown:O=>W(O),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:p.value,onMousedown:O=>L(O,1),onTouchstart:O=>M(O,1),onTouchmove:O=>I(O),onTouchend:O=>F(O),onKeydown:O=>W(O,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(f()+1)].map((O,J)=>{let ue=J/f();return J%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-J]:o.value[f()-J]:e.labels?e.labels[J]:o.value[J]])})])])}}),n1={install(e){e.component(fc.name,fc)}},Ss=z({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>Q("ui tab segment",k(e.active,"active"),De(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gc=z({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const s=j(e.activeIndex);ut(()=>e.activeIndex,u=>{s.value=u});const r=(u,f)=>{s.value!==f&&(s.value=f,a("update:activeIndex",f),a("tab-change",{event:u,index:f})),a("tab-click",{event:u,index:f})},c=(u,f)=>{u.key==="Enter"&&r(u,f)},m=H(()=>{var u,f;let d=[];return(u=l.default)!=null&&u.call(l)&&((f=l.default)==null||f.call(l).forEach(h=>{h.type.name==="SuiTabPanel"&&d.push(h)})),d}),p=H(()=>!e.secondary&&!e.pointing&&!e.text),o=H(()=>Q("ui menu",k(p.value,"tabular attached"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.text,"text")));return{onClick:r,onKeyDown:c,tabIndex:s,tabs:m,tabMenuClass:o,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((l,s)=>t("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:r=>this.onClick(r,s),onKeydown:r=>this.onKeyDown(r,s),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,s)=>t(Ss,Oi(l.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,c;return[(c=(r=l.children).default)==null?void 0:c.call(r)]}}));return t(we,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),s1={install(e){e.component(gc.name,gc),e.component(Ss.name,Ss)}};function o1(e,a){e.indexOf(a)===-1&&e.push(a)}const Jm=(e,a,l)=>Math.min(Math.max(l,e),a),Et={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},jl=e=>typeof e=="number",ea=e=>Array.isArray(e)&&!jl(e[0]),r1=(e,a,l)=>{const s=a-e;return((l-e)%s+s)%s+e};function u1(e,a){return ea(e)?e[r1(0,e.length,a)]:e}const Wm=(e,a,l)=>-l*e+l*a+e,Km=()=>{},gi=e=>e,bo=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Xm(e,a){const l=e[e.length-1];for(let s=1;s<=a;s++){const r=bo(0,a,s);e.push(Wm(l,1,r))}}function c1(e){const a=[0];return Xm(a,e-1),a}function d1(e,a=c1(e.length),l=gi){const s=e.length,r=s-a.length;return r>0&&Xm(a,r),c=>{let m=0;for(;m<s-2&&!(c<a[m+1]);m++);let p=Jm(0,1,bo(a[m],a[m+1],c));return p=u1(l,m)(p),Wm(e[m],e[m+1],p)}}const Qm=e=>Array.isArray(e)&&jl(e[0]),As=e=>typeof e=="object"&&!!e.createAnimation,pa=e=>typeof e=="function",m1=e=>typeof e=="string",Ha={ms:e=>e*1e3,s:e=>e/1e3},Zm=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,p1=1e-7,f1=12;function g1(e,a,l,s,r){let c,m,p=0;do m=a+(l-a)/2,c=Zm(m,s,r)-e,c>0?l=m:a=m;while(Math.abs(c)>p1&&++p<f1);return m}function Ba(e,a,l,s){if(e===a&&l===s)return gi;const r=c=>g1(c,0,1,e,l);return c=>c===0||c===1?c:Zm(r(c),a,s)}const h1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const s=l*e,r=a==="end"?Math.floor(s):Math.ceil(s);return Jm(0,1,r/e)},hc={ease:Ba(.25,.1,.25,1),"ease-in":Ba(.42,0,1,1),"ease-in-out":Ba(.42,0,.58,1),"ease-out":Ba(0,0,.58,1)},_1=/\((.*?)\)/;function _c(e){if(pa(e))return e;if(Qm(e))return Ba(...e);if(hc[e])return hc[e];if(e.startsWith("steps")){const a=_1.exec(e);if(a){const l=a[1].split(",");return h1(parseFloat(l[0]),l[1].trim())}}return gi}class ep{constructor(a,l=[0,1],{easing:s,duration:r=Et.duration,delay:c=Et.delay,endDelay:m=Et.endDelay,repeat:p=Et.repeat,offset:o,direction:u="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=gi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),s=s||Et.easing,As(s)){const h=s.createAnimation(l);s=h.easing,l=h.keyframes||l,r=h.duration||r}this.repeat=p,this.easing=ea(s)?gi:_c(s),this.updateDuration(r);const d=d1(l,o,ea(s)?s.map(_c):gi);this.tick=h=>{var v;c=c;let g=0;this.pauseTime!==void 0?g=this.pauseTime:g=(h-this.startTime)*this.rate,this.t=g,g/=1e3,g=Math.max(g-c,0),this.playState==="finished"&&this.pauseTime===void 0&&(g=this.totalDuration);const C=g/this.duration;let A=Math.floor(C),x=C%1;!x&&C>=1&&(x=1),x===1&&A--;const _=A%2;(u==="reverse"||u==="alternate"&&_||u==="alternate-reverse"&&!_)&&(x=1-x);const S=g>=this.totalDuration?1:Math.min(x,1),$=d(this.easing(S));a($),this.pauseTime===void 0&&(this.playState==="finished"||g>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,$)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class b1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Pn=new WeakMap;function tp(e){return Pn.has(e)||Pn.set(e,{transforms:[],values:new Map}),Pn.get(e)}function v1(e,a){return e.has(a)||e.set(a,new b1),e.get(a)}const y1=["","X","Y","Z"],C1=["translate","scale","rotate","skew"],ql={x:"translateX",y:"translateY",z:"translateZ"},bc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},w1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:bc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:gi},skew:bc},Ka=new Map,vo=e=>`--motion-${e}`,Gl=["x","y","z"];C1.forEach(e=>{y1.forEach(a=>{Gl.push(e+a),Ka.set(vo(e+a),w1[e])})});const S1=(e,a)=>Gl.indexOf(e)-Gl.indexOf(a),A1=new Set(Gl),ip=e=>A1.has(e),k1=(e,a)=>{ql[a]&&(a=ql[a]);const{transforms:l}=tp(e);o1(l,a),e.style.transform=$1(l)},$1=e=>e.sort(S1).reduce(x1,"").trim(),x1=(e,a)=>`${e} ${a}(var(${vo(a)}))`,ks=e=>e.startsWith("--"),vc=new Set;function B1(e){if(!vc.has(e)){vc.add(e);try{const{syntax:a,initialValue:l}=Ka.has(e)?Ka.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const Mn=(e,a)=>document.createElement("div").animate(e,a),yc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Mn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Mn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Mn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Vn={},Yi={};for(const e in yc)Yi[e]=()=>(Vn[e]===void 0&&(Vn[e]=yc[e]()),Vn[e]);const T1=.015,E1=(e,a)=>{let l="";const s=Math.round(a/T1);for(let r=0;r<s;r++)l+=e(bo(0,s-1,r))+", ";return l.substring(0,l.length-2)},Cc=(e,a)=>pa(e)?Yi.linearEasing()?`linear(${E1(e,a)})`:Et.easing:Qm(e)?R1(e):e,R1=([e,a,l,s])=>`cubic-bezier(${e}, ${a}, ${l}, ${s})`;function z1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const D1=e=>Array.isArray(e)?e:[e];function $s(e){return ql[e]&&(e=ql[e]),ip(e)?vo(e):e}const bl={get:(e,a)=>{a=$s(a);let l=ks(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const s=Ka.get(a);s&&(l=s.initialValue)}return l},set:(e,a,l)=>{a=$s(a),ks(a)?e.style.setProperty(a,l):e.style[a]=l}};function ap(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function I1(e,a){var l;let s=(a==null?void 0:a.toDefaultUnit)||gi;const r=e[e.length-1];if(m1(r)){const c=((l=r.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";c&&(s=m=>m+c)}return s}function P1(){return window.__MOTION_DEV_TOOLS_RECORD}function M1(e,a,l,s={},r){const c=P1(),m=s.record!==!1&&c;let p,{duration:o=Et.duration,delay:u=Et.delay,endDelay:f=Et.endDelay,repeat:d=Et.repeat,easing:h=Et.easing,persist:v=!1,direction:g,offset:C,allowWebkitAcceleration:A=!1,autoplay:x=!0}=s;const _=tp(e),S=ip(a);let $=Yi.waapi();S&&k1(e,a);const B=$s(a),E=v1(_.values,B),M=Ka.get(B);return ap(E.animation,!(As(h)&&E.generator)&&s.record!==!1),()=>{const F=()=>{var W,G;return(G=(W=bl.get(e,B))!==null&&W!==void 0?W:M==null?void 0:M.initialValue)!==null&&G!==void 0?G:0};let I=z1(D1(l),F);const L=I1(I,M);if(As(h)){const W=h.createAnimation(I,a!=="opacity",F,B,E);h=W.easing,I=W.keyframes||I,o=W.duration||o}if(ks(B)&&(Yi.cssRegisterProperty()?B1(B):$=!1),S&&!Yi.linearEasing()&&(pa(h)||ea(h)&&h.some(pa))&&($=!1),$){M&&(I=I.map(de=>jl(de)?M.toDefaultUnit(de):de)),I.length===1&&(!Yi.partialKeyframes()||m)&&I.unshift(F());const W={delay:Ha.ms(u),duration:Ha.ms(o),endDelay:Ha.ms(f),easing:ea(h)?void 0:Cc(h,o),direction:g,iterations:d+1,fill:"both"};p=e.animate({[B]:I,offset:C,easing:ea(h)?h.map(de=>Cc(de,o)):void 0},W),p.finished||(p.finished=new Promise((de,Be)=>{p.onfinish=de,p.oncancel=Be}));const G=I[I.length-1];p.finished.then(()=>{v||(bl.set(e,B,G),p.cancel())}).catch(Km),A||(p.playbackRate=1.000001)}else if(r&&S)I=I.map(W=>typeof W=="string"?parseFloat(W):W),I.length===1&&I.unshift(parseFloat(F())),p=new r(W=>{bl.set(e,B,L?L(W):W)},I,Object.assign(Object.assign({},s),{duration:o,easing:h}));else{const W=I[I.length-1];bl.set(e,B,M&&jl(W)?M.toDefaultUnit(W):W)}return m&&c(e,a,I,{duration:o,delay:u,easing:h,repeat:d,offset:C},"motion-one"),E.setAnimation(p),p&&!x&&p.pause(),p}}const V1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function F1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const H1=e=>e(),lp=(e,a,l=Et.duration)=>new Proxy({animations:e.map(H1).filter(Boolean),duration:l,options:a},L1),N1=e=>e.animations[0],L1={get:(e,a)=>{const l=N1(e);switch(a){case"duration":return e.duration;case"currentTime":return Ha.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(O1)).catch(Km)),e.finished;case"stop":return()=>{e.animations.forEach(s=>ap(s))};case"forEachNative":return s=>{e.animations.forEach(r=>s(r,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(s=>s[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Ha.ms(l);case"playbackRate":for(let s=0;s<e.animations.length;s++)e.animations[s][a]=l;return!0}return!1}},O1=e=>e.finished;function j1(e,a,l){return pa(e)?e(a,l):e}function q1(e){return function(a,l,s={}){a=F1(a);const r=a.length,c=[];for(let m=0;m<r;m++){const p=a[m];for(const o in l){const u=V1(s,o);u.delay=j1(u.delay,m,r);const f=M1(p,o,l[o],u,e);c.push(f)}}return lp(c,s,s.duration)}}const G1=q1(ep);function U1(e,a={}){return lp([()=>{const l=new ep(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function Y1(e,a,l){return(pa(e)?U1:G1)(e,a,l)}const he=(e,a)=>(l,{duration:s,keyframesOverride:r={}})=>Y1(l,{...e,...r},{autoplay:!1,...a,duration:s}),wc=he({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),J1=he({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),W1=he({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),K1=he({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),X1=he({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),Q1=he({opacity:[0,1]},{duration:.5,offset:[0,1]}),Z1=he({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),ey=he({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),ty=he({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),iy=he({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ay=he({opacity:[1,0]},{duration:.5,offset:[0,1]}),ly=he({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),ny=he({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),sy=he({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),oy=he({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),ry=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),uy=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),cy=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dy=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),my=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),py=he({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),fy=he({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),gy=he({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),hy=he({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),_y=he({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),by=he({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),vy=he({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),yy=he({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),Cy=he({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),wy=he({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),Sy=he({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),np={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},sp={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},op={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},Ay={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},ky=he({transformOrigin:"top center",...np},{offset:[0,1]}),$y=he({transformOrigin:"bottom center",...np},{offset:[0,1]}),xy=he({transformOrigin:"center right",...sp},{offset:[0,1]}),By=he({transformOrigin:"center left",...sp},{offset:[0,1]}),Ty=he({transformOrigin:"top center",...op},{offset:[0,1]}),Ey=he({transformOrigin:"bottom center",...op},{offset:[0,1]}),Sc=he({transformOrigin:"center left",...Ay},{offset:[0,1]}),yi=.8,ta={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ia={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},aa={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},la={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ry=he({transformOrigin:"top center",transform:ta.transform,opacity:ta.opacity},{duration:yi,offset:ta.offset}),zy=he({transformOrigin:"bottom center",transform:ta.transform,opacity:ta.opacity},{duration:yi,offset:ta.offset}),Dy=he({transformOrigin:"center right",transform:ia.transform,opacity:ia.opacity},{duration:yi,offset:ia.offset}),Iy=he({transformOrigin:"center left",transform:ia.transform,opacity:ia.opacity},{duration:yi,offset:ia.offset}),Py=he({transformOrigin:"top center",transform:aa.transform,opacity:aa.opacity},{duration:yi,offset:aa.offset}),My=he({transformOrigin:"bottom center",transform:aa.transform,opacity:aa.opacity},{duration:yi,offset:aa.offset}),Vy=he({transformOrigin:"center right",transform:la.transform,opacity:la.opacity},{duration:yi,offset:la.offset}),Fy=he({transformOrigin:"center left",transform:la.transform,opacity:la.opacity},{duration:yi,offset:la.offset}),Hy=he({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Ny=he({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Ly=he({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),Oy=he({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),jy=he({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),qy=he({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Gy=he({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Uy=he({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Yy=he({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Jy={browse:[wc,J1],"browse right":[wc,W1],drop:[K1,X1],fade:[Q1,ay],"fade up":[Z1,ly],"fade down":[ey,ny],"fade left":[ty,sy],"fade right":[iy,oy],fly:[ry,py],"fly up":[uy,fy],"fly down":[cy,gy],"fly left":[dy,hy],"fly right":[my,_y],"horizontal flip":[by,vy],"vertical flip":[yy,Cy],scale:[wy,Sy],"slide up":[$y,Ey],"slide down":[ky,Ty],"slide left":[xy,Sc],"slide right":[By,Sc],"swing up":[zy,My],"swing down":[Ry,Py],"swing left":[Dy,Vy],"swing right":[Iy,Fy],zoom:[Hy,Ny]},Wy={bounce:[Ly,void 0],flash:[Oy,void 0],glow:[jy,void 0],jiggle:[qy,void 0],pulse:[Gy,void 0],shake:[Uy,void 0],tada:[Yy,void 0]},rp=e=>({...Jy,...Wy})[e],Ky=e=>{const[a,l]=rp(e.animation),s=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(m,p)=>{if(!a)return p();const o=a(m,{duration:s.value});o.play(),o.finished.then(p)}),c=H(()=>(m,p)=>{if(!l)return p();const o=l(m,{duration:s.value});o.play(),o.finished.then(p)});return{onEnter:r,onLeave:c}},xs=z({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=Ky(e);return{onEnter:a,onLeave:l}},render(){return t(cn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Bs=z({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=rp(e.animation),s=H(()=>(c,m)=>{if(!a)return m();const p=a(c,{duration:.5,keyframesOverride:e.enterKeyframes(c)});p.play(),p.finished.then(m)}),r=H(()=>(c,m)=>{if(!l)return m();const p=l(c,{duration:.5,keyframesOverride:e.leaveKeyframes(c)});p.play(),p.finished.then(m)});return{onEnter:s,onLeave:r}},render(){return t(cm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Xy={install(e){e.component(xs.name,xs),e.component(Bs.name,Bs)}},Qy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:bv,Calendar:Dv,Checkbox:Iv,Dimmer:Pv,Dropdown:Nv,Embed:Lv,Modal:Wv,Popup:Xv,Progress:e1,Rating:i1,Search:a1,Sidebar:l1,Slider:n1,Tab:s1,Transition:Xy},Symbol.toStringTag,{value:"Module"})),Fn=z({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,..._o()},setup(e,{slots:a}){const l=H(()=>Q("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var s;return e.attached?t(ot,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:l.value},[(s=a.default)==null?void 0:s.call(a)])}}}),Zy=z({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=H(()=>Q("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var s,r;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(s=a.default)==null?void 0:s.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function Hn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const eC=z({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Um()},setup(e,{emit:a}){const{colorClasses:l}=Ym(e),s=H(()=>{var m,p,o,u,f;return Q(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((o=e.actionsProps)==null?void 0:o.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),r=j(e.showProgressUp?0:100),c=()=>{const m=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(p),r.value+=1;return}r.value<=0&&clearInterval(p),r.value-=1},m)},500)};return bi(()=>e.showProgress&&c()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:s,progress:r}},render(){var e;let a,l,s;return t(Zy,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,c,m,p;return[this.showProgress==="top"&&t(Ol,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((c=this.actionsProps)==null?void 0:c.attached)==="left")&&t(Fn,this.actionsProps,Hn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Fn,this.actionsProps,Hn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&t(Fn,this.actionsProps,Hn(s=this.actions({close:()=>this.$emit("close")}))?s:{default:()=>[s]}),this.showProgress==="bottom"&&t(Ol,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),tC=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],iC=({defaultValue:e}={})=>({position:{type:String,validator:a=>tC.includes(a),default:e}}),aC=e=>({positionClasses:H(()=>e.position||"")});function lC(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!zt(e)}const nC=z({name:"SuiToastContainer",props:{horizontal:Boolean,..._o(),...iC({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=up(),{attachedClasses:s}=Gm(e),{positionClasses:r}=aC(e);return{classes:H(()=>Q(s.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[0,`${c.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(c).marginBottom,10)}px`];return{height:m,marginBottom:p}},leaveKeyframes:c=>{if(!(c instanceof HTMLElement))return{};const m=[`${c.offsetWidth}px`,0],p=[`${c.offsetHeight}px`,0],o=e.horizontal?{width:m}:{height:p},u=[`${parseInt(getComputedStyle(c).marginBottom,10)}px`,0];return{...o,marginBottom:u}}}},render(){let e;return t(on,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Bs,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},lC(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(eC,Oi({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),sC=j(1),Aa=j([]),up=()=>({items:Aa,add:e=>{e.position=e.position||"top right",Aa.value=[...Aa.value,{id:sC.value++,...e}]},remove:e=>{Aa.value=Aa.value.filter(a=>a.id!==e)}}),at=()=>{var e;const a=(e=jt())==null?void 0:e.appContext,{add:l}=up();return{toast:s=>{const{position:r,attached:c,horizontal:m}=s;uC({position:r,attached:c,horizontal:m})||rC(a,{position:r,attached:c,horizontal:m}),l(s)}}},oC=(e,{appContext:a,element:l}={})=>{const s=l||document.createElement("div");return a&&(e.appContext=a),Pl(e,s),{vNode:e,el:s}},rC=(e,{position:a="top right",attached:l,horizontal:s=!1}={})=>{const r=Y(nC,{position:a,attached:l,horizontal:s}),{el:c}=oC(r,{appContext:e});return{vNode:r,el:c}},uC=({position:e="top right",attached:a,horizontal:l})=>{const s=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(s)};function cC(e){Object.values({...iv,...cv,..._v,...Qy}).map(a=>e.use(a))}const dC={install:cC},mC=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Dm(),l=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),s=r=>{r.preventDefault();const m=r.target.parentElement.getAttribute("href"),p=m.slice(m.indexOf("#")+1),o=document.getElementById(p);o&&o.scrollIntoView({behavior:"smooth"})};return(r,c)=>{const m=b("SuiHeader"),p=b("SuiGridColumn"),o=b("SuiGridRow");return R(),pe(we,null,[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(ke(e.label)+" ",1),t(y(go),{to:`${l.value}#${r.$attrs.id}`,target:"_self",onClick:s},{default:i(()=>[t(y(ee),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[t(y(ee),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),w("p",null,[oa(r.$slots,"default",{},void 0,!0)])],64)}}}),pC=Ce(mC,[["__scopeId","data-v-a2b78897"]]),fC={mounted(e,a){var r;const l=a.modifiers,s=a.value;l.script||s==="script"?e.className="language-javascript":e.className="language-markup",Z_.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},gC={key:0},hC={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const s=b("SuiGridColumn"),r=b("SuiGridRow");return R(),V(r,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[oa(a.$slots,"default")]),_:3}),t(s,{width:16},{default:i(()=>[t(y(xs),{animation:"scale"},{default:i(()=>[e.hideCode?oo("",!0):il((R(),pe("pre",gC,[w("code",null,ke(e.code)+`
`,1)])),[[y(fC)]])]),_:1})]),_:1})]),_:3})}}},q={__name:"DocSection",props:["label","code"],setup(e){const a=j(!0),l=()=>a.value=!a.value;return(s,r)=>{const c=b("SuiGrid");return R(),pe("section",null,[t(c,{columns:2},{default:i(()=>[t(pC,Oi({label:e.label,"on-click":l},s.$attrs),{default:i(()=>[oa(s.$slots,"description")]),_:3},16,["label"]),t(hC,{code:e.code,"hide-code":a.value},{default:i(()=>[oa(s.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},_C=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,bC={__name:"ButtonDoc",setup(e){const a=j("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(s,r)=>(R(),V(q,{label:"Button",code:_C},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(y(P),{onClick:l},{default:i(()=>[n(ke(a.value),1)]),_:1})]),_:1}))}},vC=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,yC={__name:"EmphasisDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Emphasis",code:vC},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(y(P),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(y(P),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(y(P),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},CC=`<template>
  <SuiButton animated>
    <SuiButtonContent visible>Next</SuiButtonContent>
    <SuiButtonContent hidden>
      <SuiIcon name="arrow right" />
    </SuiButtonContent>
  </SuiButton>
  <SuiButton animated="vertical">
    <SuiButtonContent visible>
      <SuiIcon name="shop" />
    </SuiButtonContent>
    <SuiButtonContent hidden>Shop</SuiButtonContent>
  </SuiButton>
  <SuiButton animated="fade">
    <SuiButtonContent visible>
      Sign-up for a Pro account
    </SuiButtonContent>
    <SuiButtonContent hidden>$12.99 a month</SuiButtonContent>
  </SuiButton>
</template>`,wC={__name:"AnimatedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Animated",code:CC},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(y(P),{animated:""},{default:i(()=>[t(y(di),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(y(di),{hidden:""},{default:i(()=>[t(y(ee),{name:"arrow right"})]),_:1})]),_:1}),t(y(P),{animated:"vertical"},{default:i(()=>[t(y(di),{visible:""},{default:i(()=>[t(y(ee),{name:"shop"})]),_:1}),t(y(di),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(y(P),{animated:"fade"},{default:i(()=>[t(y(di),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(y(di),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},SC=`<template>
  <SuiButton labeled="right" as="div">
    <SuiButton icon="heart" content=" Like" />
    <SuiLabel basic>2,048</SuiLabel>
  </SuiButton>
  <SuiButton labeled="left" as="div">
    <SuiLabel basic pointing="right">2,048</SuiLabel>
    <SuiButton icon="heart" content=" Like" />
  </SuiButton>
  <SuiButton labeled="left" as="div">
    <SuiLabel basic>1,048</SuiLabel>
    <SuiButton icon="fork" />
  </SuiButton>
</template>`,AC={__name:"LabeledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Labeled",code:SC},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(y(P),{labeled:"right",as:"div"},{default:i(()=>[t(y(P),{icon:"heart",content:" Like"}),t(y(Mt),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(y(P),{labeled:"left",as:"div"},{default:i(()=>[t(y(Mt),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(y(P),{icon:"heart",content:" Like"})]),_:1}),t(y(P),{labeled:"left",as:"div"},{default:i(()=>[t(y(Mt),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(y(P),{icon:"fork"})]),_:1})]),_:1}))}},kC=`<template>
  <SuiButton icon="cloud" />
</template>`,$C={__name:"IconDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icon",code:kC},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(y(P),{icon:"cloud"})]),_:1}))}},xC=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,BC={__name:"LabeledIconDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Labeled Icon",code:xC},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(y(P),{labeled:"",icon:"pause",content:"Pause"}),t(y(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(y(P),{labeled:"",icon:""},{default:i(()=>[t(y(ee),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},TC=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,EC={__name:"BasicDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Basic",code:TC},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(y(P),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(y(P),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(y(P),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(y(P),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},RC=`<template>
  <SuiButton tertiary primary>Primary</SuiButton>
  <SuiButton tertiary secondary>Secondary</SuiButton>
  <SuiButton tertiary color="red">Red</SuiButton>
  <SuiButton tertiary color="orange">Orange</SuiButton>
  <SuiButton tertiary color="yellow">Yellow</SuiButton>
  <SuiButton tertiary color="olive">Olive</SuiButton>
  <SuiButton tertiary color="green">Green</SuiButton>
  <SuiButton tertiary color="teal">Teal</SuiButton>
  <SuiButton tertiary color="blue">Blue</SuiButton>
  <SuiButton tertiary color="violet">Violet</SuiButton>
  <SuiButton tertiary color="purple">Purple</SuiButton>
  <SuiButton tertiary color="pink">Pink</SuiButton>
  <SuiButton tertiary color="brown">Brown</SuiButton>
  <SuiButton tertiary color="grey">Grey</SuiButton>
  <SuiButton tertiary color="black">Black</SuiButton>
</template>`,zC={__name:"TertiaryDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Tertiary",code:RC},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(y(P),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(y(P),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(y(P),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(y(P),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(y(P),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(y(P),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(y(P),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(y(P),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(y(P),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(y(P),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(y(P),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(y(P),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(y(P),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(y(P),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(y(P),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},DC=`<template>
  <SuiSegment inverted>
    <SuiButton inverted primary>Primary</SuiButton>
    <SuiButton inverted secondary>Secondary</SuiButton>
    <SuiButton inverted color="red">Red</SuiButton>
    <SuiButton inverted color="orange">Orange</SuiButton>
    <SuiButton inverted color="yellow">Yellow</SuiButton>
    <SuiButton inverted color="olive">Olive</SuiButton>
    <SuiButton inverted color="green">Green</SuiButton>
    <SuiButton inverted color="teal">Teal</SuiButton>
    <SuiButton inverted color="blue">Blue</SuiButton>
    <SuiButton inverted color="violet">Violet</SuiButton>
    <SuiButton inverted color="purple">Purple</SuiButton>
    <SuiButton inverted color="pink">Pink</SuiButton>
    <SuiButton inverted color="brown">Brown</SuiButton>
    <SuiButton inverted color="grey">Grey</SuiButton>
    <SuiButton inverted color="black">Black</SuiButton>
  </SuiSegment>
</template>`,IC={__name:"InvertedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Inverted",code:DC},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(y(pt),{inverted:""},{default:i(()=>[t(y(P),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(y(P),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(y(P),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(y(P),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(y(P),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(y(P),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(y(P),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(y(P),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(y(P),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(y(P),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(y(P),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(y(P),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(y(P),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(y(P),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(y(P),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},PC=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,MC={__name:"ButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Buttons",code:PC},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(y(ot),null,{default:i(()=>[t(y(P),{content:"One"}),t(y(P),{content:"Two"}),t(y(P),{content:"Three"})]),_:1})]),_:1}))}},VC=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,FC={__name:"IconButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icon Buttons",code:VC},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(y(ot),{icon:""},{default:i(()=>[t(y(P),{icon:"align left"}),t(y(P),{icon:"align center"}),t(y(P),{icon:"align right"}),t(y(P),{icon:"align justify"})]),_:1})]),_:1}))}},HC=w("div",{class:"or"},null,-1),NC=w("div",{class:"or","data-text":"ou"},null,-1),LC=`<template>
  <SuiButtonGroup>
    <SuiButton content="Cancel" />
    <div class="or"></div>
    <SuiButton content="Save" positive />
  </SuiButtonGroup>
  <SuiButtonGroup>
    <SuiButton content="un" />
    <div class="or" data-text="ou"></div>
    <SuiButton content="deux" positive />
  </SuiButtonGroup>
</template>`,OC={__name:"ConditionalsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Conditionals",code:LC},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(y(ot),null,{default:i(()=>[t(y(P),{content:"Cancel"}),HC,t(y(P),{content:"Save",positive:""})]),_:1}),t(y(ot),null,{default:i(()=>[t(y(P),{content:"un"}),NC,t(y(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},jC=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,qC={__name:"ActiveDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Active",code:jC},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(y(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},GC=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,UC={__name:"DisabledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Disabled",code:GC},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(y(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},YC=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,JC={__name:"LoadingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Loading",code:YC},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(y(P),{loading:"",content:"Loading"}),t(y(P),{loading:"double",primary:"",content:"Loading"}),t(y(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},WC=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,KC={__name:"SocialDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Social",code:WC},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(y(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(y(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(y(P),{vk:"",icon:"vk",content:"VK"}),t(y(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(y(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(y(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(y(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(y(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},XC=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,QC={__name:"SizeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Size",code:XC},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(y(P),{size:"mini",content:"Mini"}),t(y(P),{size:"tiny",content:"Tiny"}),t(y(P),{size:"small",content:"Small"}),t(y(P),{size:"medium",content:"Medium"}),t(y(P),{size:"large",content:"Large"}),t(y(P),{size:"big",content:"Big"}),t(y(P),{size:"huge",content:"Huge"}),t(y(P),{size:"massive",content:"Massive"})]),_:1}))}},ZC=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,ew={__name:"FloatedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Floated",code:ZC},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(y(P),{floated:"left",content:"Left Floated"}),t(y(P),{floated:"right",content:"Right Floated"})]),_:1}))}},tw=`<template>
  <SuiButton color="red">Red</SuiButton>
  <SuiButton color="orange">Orange</SuiButton>
  <SuiButton color="yellow">Yellow</SuiButton>
  <SuiButton color="olive">Olive</SuiButton>
  <SuiButton color="green">Green</SuiButton>
  <SuiButton color="teal">Teal</SuiButton>
  <SuiButton color="blue">Blue</SuiButton>
  <SuiButton color="violet">Violet</SuiButton>
  <SuiButton color="purple">Purple</SuiButton>
  <SuiButton color="pink">Pink</SuiButton>
  <SuiButton color="brown">Brown</SuiButton>
  <SuiButton color="grey">Grey</SuiButton>
  <SuiButton color="black">Black</SuiButton>
</template>`,iw={__name:"ColoredDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Colored",code:tw},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(y(P),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(y(P),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(y(P),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(y(P),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(y(P),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(y(P),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(y(P),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(y(P),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(y(P),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(y(P),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(y(P),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(y(P),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(y(P),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},aw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,lw={__name:"CompactDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Compact",code:aw},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(y(P),{compact:"",content:"Hold"}),t(y(P),{compact:"",icon:"pause"}),t(y(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},nw=`<template>
  <SuiButton
    toggle
    :active="active"
    :onClick="() => active = !active"
    :content="active ? 'Voted' : 'Vote'"
    style="min-width: 200px;"
  />
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const active = ref(false)
<\/script>`,sw={__name:"ToggleDoc",setup(e){const a=j(!1);return(l,s)=>(R(),V(q,{label:"Toggle",code:nw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(y(P),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ow=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,rw={__name:"PositiveDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Positive",code:ow},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(y(P),{positive:"",content:"Positive Button"})]),_:1}))}},uw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,cw={__name:"NegativeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Negative",code:uw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(y(P),{negative:"",content:"Negative Button"})]),_:1}))}},dw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,mw={__name:"FluidDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Fluid",code:dw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(y(P),{fluid:"",content:"Fits container"})]),_:1}))}},pw=`<template>
  <SuiButton circular icon="settings" />
</template>`,fw={__name:"CircularDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Circular",code:pw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(y(P),{circular:"",icon:"settings"})]),_:1}))}},gw=w("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),hw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,_w={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Vertically Attached",code:hw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(y(P),{attached:"top",content:"Top"}),t(y(pt),{attached:""},{default:i(()=>[gw]),_:1}),t(y(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},bw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,vw={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Horizontally Attached",code:bw},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(y(P),{attached:"left",content:"Left"}),t(y(P),{attached:"right",content:"Right"})]),_:1}))}},yw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Cw={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Vertical Buttons",code:yw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(y(ot),{vertical:""},{default:i(()=>[t(y(P),null,{default:i(()=>[n("Feed")]),_:1}),t(y(P),null,{default:i(()=>[n("Messages")]),_:1}),t(y(P),null,{default:i(()=>[n("Events")]),_:1}),t(y(P),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},ww=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"StackableButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Stackable Buttons",code:ww},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(y(ot),{stackable:""},{default:i(()=>[t(y(P),null,{default:i(()=>[n("Feed")]),_:1}),t(y(P),null,{default:i(()=>[n("Messages")]),_:1}),t(y(P),null,{default:i(()=>[n("Events")]),_:1}),t(y(P),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,kw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icon Buttons",code:Aw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(y(ot),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(y(P),{icon:"pause",content:"Pause"}),t(y(P),{icon:"play",content:"Play"}),t(y(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},$w=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"MixedGroupDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Mixed Group",code:$w},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(y(ot),null,{default:i(()=>[t(y(P),{labeled:"",icon:"left chevron",content:"Back"}),t(y(P),{icon:"stop",content:"Stop"}),t(y(P),{icon:"",labeled:"right"},{default:i(()=>[t(y(ee),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup :widths="5">
    <SuiButton>Overview</SuiButton>
    <SuiButton>Specs</SuiButton>
    <SuiButton>Warranty</SuiButton>
    <SuiButton>Reviews</SuiButton>
    <SuiButton>Support</SuiButton>
  </SuiButtonGroup>
  <SuiButtonGroup :widths="3">
    <SuiButton>Overview</SuiButton>
    <SuiButton>Specs</SuiButton>
    <SuiButton>Support</SuiButton>
  </SuiButtonGroup>
</template>`,Tw={__name:"EqualWidthDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Equal Width",code:Bw},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(y(ot),{widths:5},{default:i(()=>[t(y(P),null,{default:i(()=>[n("Overview")]),_:1}),t(y(P),null,{default:i(()=>[n("Specs")]),_:1}),t(y(P),null,{default:i(()=>[n("Warranty")]),_:1}),t(y(P),null,{default:i(()=>[n("Reviews")]),_:1}),t(y(P),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(y(ot),{widths:3},{default:i(()=>[t(y(P),null,{default:i(()=>[n("Overview")]),_:1}),t(y(P),null,{default:i(()=>[n("Specs")]),_:1}),t(y(P),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Ew=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Rw={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Colored Buttons",code:Ew},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(y(ot),{color:"blue"},{default:i(()=>[t(y(P),null,{default:i(()=>[n("One")]),_:1}),t(y(P),null,{default:i(()=>[n("Two")]),_:1}),t(y(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},zw=`<template>
  <SuiButtonGroup basic>
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
  <SuiButtonGroup>
    <SuiButton basic color="red">One</SuiButton>
    <SuiButton basic color="blue">Two</SuiButton>
    <SuiButton basic color="green">Three</SuiButton>
  </SuiButtonGroup>
</template>`,Dw={__name:"BasicButtonsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Basic Buttons",code:zw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(y(ot),{basic:""},{default:i(()=>[t(y(P),null,{default:i(()=>[n("One")]),_:1}),t(y(P),null,{default:i(()=>[n("Two")]),_:1}),t(y(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(y(ot),null,{default:i(()=>[t(y(P),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(y(P),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(y(P),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Iw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Pw={__name:"GroupSizesDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Group Sizes",code:Iw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(y(ot),{size:"large"},{default:i(()=>[t(y(P),null,{default:i(()=>[n("One")]),_:1}),t(y(P),null,{default:i(()=>[n("Two")]),_:1}),t(y(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Mw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:bC},{id:"emphasis",label:"Emphasis",category:"Types",component:yC},{id:"animated",label:"Animated",category:"Types",component:wC},{id:"labeled",label:"Labeled",category:"Types",component:AC},{id:"icon",label:"Icon",category:"Types",component:$C},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:BC},{id:"basic",label:"Basic",category:"Types",component:EC},{id:"tertiary",label:"Tertiary",category:"Types",component:zC},{id:"inverted",label:"Inverted",category:"Types",component:IC},{id:"buttons",label:"Buttons",category:"Groups",component:MC},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:FC},{id:"content",label:"Content",category:"Content",component:OC},{id:"active",label:"Active",category:"States",component:qC},{id:"disabled",label:"Disabled",category:"States",component:UC},{id:"loading",label:"Loading",category:"States",component:JC},{id:"social",label:"Social",category:"Variations",component:KC},{id:"size",label:"Size",category:"Variations",component:QC},{id:"floated",label:"Floated",category:"Variations",component:ew},{id:"colored",label:"Colored",category:"Variations",component:iw},{id:"compact",label:"Compact",category:"Variations",component:lw},{id:"toggle",label:"Toggle",category:"Variations",component:sw},{id:"positive",label:"Positive",category:"Variations",component:rw},{id:"negative",label:"Negative",category:"Variations",component:cw},{id:"fluid",label:"Fluid",category:"Variations",component:mw},{id:"circular",label:"Circular",category:"Variations",component:fw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:_w},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:vw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:Cw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:Sw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:kw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:xw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Tw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Rw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Dw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Pw}];return(l,s)=>(R(),V(Zt,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Vw=w("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Fw=`<template>
  <SuiContainer>
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
  </SuiContainer>
</template>`,Hw={__name:"ContainerDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Container",code:Fw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(y(fi),null,{default:i(()=>[Vw]),_:1})]),_:1}))}},Nw=w("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Lw=`<template>
  <SuiContainer text>
    <SuiHeader as="h2">Header</SuiHeader>
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
  </SuiContainer>
</template>`,Ow={__name:"TextContainerDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Text Container",code:Lw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(y(fi),{text:""},{default:i(()=>[t(y(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Nw]),_:1})]),_:1}))}},jw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,qw={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Text Alignment",code:jw},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(y(fi),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(y(fi),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(y(fi),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Gw=w("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Uw=`<template>
  <SuiContainer fluid>
    <SuiHeader as="h2">Dogs Roles with Humans</SuiHeader>
    <p>
      Domestic dogs inherited complex behaviors, such as bite inhibition, from
      their wolf ancestors, which would have been pack hunters with complex
      body language. These sophisticated forms of social cognition and
      communication may account for their trainability, playfulness, and
      ability to fit into human households and social situations, and these
      attributes have given dogs a relationship with humans that has enabled
      them to become one of the most successful species on the planet today.
    </p>
  </SuiContainer>
</template>`,Yw={__name:"FluidDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Fluid",code:Uw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(y(fi),{fluid:""},{default:i(()=>[t(y(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),Gw]),_:1})]),_:1}))}},Jw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Hw},{id:"text-container",label:"Text Container",category:"Types",component:Ow},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:qw},{id:"fluid",label:"Fluid",category:"Variations",component:Yw}];return(l,s)=>(R(),V(Zt,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Ww=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Kw={__name:"DividerDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Divider",code:Ww},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(y(Xe)),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Xw=w("label",null,"Username",-1),Qw=w("input",{type:"text",placeholder:"Username"},null,-1),Zw=w("label",null,"Password",-1),eS=w("input",{type:"password",placeholder:"Password"},null,-1),tS=`<template>
  <SuiSegment placeholder>
    <SuiGrid columns="equal">
      <SuiGridColumn>
        <SuiForm>
          <SuiFormField>
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </SuiFormField>
          <SuiFormField>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </SuiFormField>
          <SuiButton primary>Login</SuiButton>
        </SuiForm>
      </SuiGridColumn>
      <SuiGridColumn textAlign="middle">
        <SuiButton secondary icon="signup" content="Sign Up" />
      </SuiGridColumn>
    </SuiGrid>
    <SuiDivider vertical>Or</SuiDivider>
  </SuiSegment>
</template>`,iS={__name:"VerticalDividerDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Vertical Divider",code:tS},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(y(pt),{placeholder:""},{default:i(()=>[t(y(_s),{columns:"equal"},{default:i(()=>[t(y(Hl),null,{default:i(()=>[t(y(hs),null,{default:i(()=>[t(y(Fl),null,{default:i(()=>[Xw,Qw]),_:1}),t(y(Fl),null,{default:i(()=>[Zw,eS]),_:1}),t(y(P),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(y(Hl),{textAlign:"middle"},{default:i(()=>[t(y(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(y(Xe),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},aS=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,lS={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Horizontal Divider",code:aS},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(y(pt),{basic:"",textAlign:"center"},{default:i(()=>[t(y(Ke),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(y(Xe),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(y(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},nS=`<template>
  <SuiDivider horizontal textAlign="left">
    <SuiIcon name="left align" />
    Left Aligned
  </SuiDivider>
  <SuiDivider horizontal textAlign="center">
    <SuiIcon name="center align" />
    Center Aligned
  </SuiDivider>
  <SuiDivider horizontal textAlign="right">
    <SuiIcon name="right align" />
    Right Aligned
  </SuiDivider>
</template>`,sS={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Horizontal Alignment",code:nS},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(y(Xe),{horizontal:"",textAlign:"left"},{default:i(()=>[t(y(ee),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(y(Xe),{horizontal:"",textAlign:"center"},{default:i(()=>[t(y(ee),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(y(Xe),{horizontal:"",textAlign:"right"},{default:i(()=>[t(y(ee),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},oS=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,rS={__name:"InvertedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Inverted",code:oS},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(y(pt),{inverted:""},{default:i(()=>[t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(y(Xe),{inverted:""}),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(y(Xe),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},uS=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,cS={__name:"FittedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Inverted",code:uS},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(y(pt),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(y(Xe),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},dS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,mS={__name:"HiddenDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Hidden",code:dS},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(y(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(y(Xe),{hidden:""}),t(y(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},pS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,fS={__name:"SectionDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Section",code:pS},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(y(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(y(Xe),{section:""}),t(y(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},gS=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,hS={__name:"ClearingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Clearing",code:gS},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(y(pt),null,{default:i(()=>[t(y(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(y(Xe),{clearing:""}),t(y(vt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},_S=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,bS={__name:"SizeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Size",code:_S},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(y(Xe),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(y(Xe),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(y(Xe),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(y(Xe),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(y(Xe),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(y(Xe),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(y(Xe),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},vS={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Kw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:iS},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:lS},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:sS},{id:"inverted",label:"Inverted",category:"Variations",component:rS},{id:"fitted",label:"Fitted",category:"Variations",component:cS},{id:"hidden",label:"Hidden",category:"Variations",component:mS},{id:"section",label:"Section",category:"Variations",component:fS},{id:"clearing",label:"Clearing",category:"Variations",component:hS},{id:"size",label:"Size",category:"Variations",component:bS}];return(l,s)=>(R(),V(Zt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},yS=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,CS={__name:"DisabledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Disabled",code:yS},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(y(_t),{name:"anguished",disabled:""})]),_:1}))}},wS=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,SS={__name:"LoadingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Loading",code:wS},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(y(_t),{name:"angel",loading:""}),t(y(_t),{name:"blush",loading:""}),t(y(_t),{name:"grin",loading:""})]),_:1}))}},AS=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,kS={__name:"SizeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Size",code:AS},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(y(_t),{name:"relaxed",size:"small"}),t(y(_t),{name:"relaxed",size:"medium"}),t(y(_t),{name:"relaxed",size:"large"}),t(y(_t),{name:"relaxed",size:"big"})]),_:1}))}},$S=`<template>
  <SuiHeader size="small">
    Within a Header
    <SuiEmoji name="relaxed" />
  </SuiHeader>
  <SuiButton as="div" size="large">
    Within a Button
    <SuiEmoji name="relaxed" />
  </SuiButton>
  <SuiLabel size="massive">
    Within a Label
    <SuiEmoji name="relaxed" />
  </SuiLabel>
</template>`,xS={__name:"AutosizingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Autosizing",code:$S},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(y(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(y(_t),{name:"relaxed"})]),_:1}),t(y(P),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(y(_t),{name:"relaxed"})]),_:1}),t(y(Mt),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(y(_t),{name:"relaxed"})]),_:1})]),_:1}))}},BS=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,TS={__name:"LinkDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Link",code:BS},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(y(_t),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},ES={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:CS},{id:"loading",label:"Loading",category:"States",component:SS},{id:"size",label:"Size",category:"Variations",component:kS},{id:"autosizing",label:"Autosizing",category:"Variations",component:xS},{id:"link",label:"Link",category:"Variations",component:TS}];return(l,s)=>(R(),V(Zt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},RS=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,zS={__name:"SizeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Size",code:RS},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(y(It),{name:"de",size:"small"}),t(y(It),{name:"fr",size:"medium"}),t(y(It),{name:"li",size:"large"}),t(y(It),{name:"jp",size:"big"}),t(y(It),{name:"gb",size:"huge"}),t(y(It),{name:"un",size:"massive"})]),_:1}))}},DS=`<template>
  <SuiHeader size="small">
    Within a Header
    <SuiEmoji name="relaxed" />
  </SuiHeader>
  <SuiButton as="div" size="large">
    Within a Button
    <SuiEmoji name="relaxed" />
  </SuiButton>
  <SuiLabel size="massive">
    Within a Label
    <SuiEmoji name="relaxed" />
  </SuiLabel>
</template>`,IS={__name:"AutosizingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Autosizing",code:DS},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(y(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(y(It),{name:"us"})]),_:1}),t(y(P),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(y(It),{name:"eu"})]),_:1}),t(y(Mt),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(y(It),{name:"pirate"})]),_:1})]),_:1}))}},PS={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:zS},{id:"autosizing",label:"Autosizing",category:"Types",component:IS}];return(l,s)=>(R(),V(Zt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},MS=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,VS={__name:"PageHeadersDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Page Headers",code:MS},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(y(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(y(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(y(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(y(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(y(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},FS=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,HS={__name:"ContentHeadersDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Content Headers",code:FS},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(y(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(y(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(y(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(y(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(y(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},NS=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,LS={__name:"IconHeadersDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icon Headers",code:NS},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(y(fe),{icon:""},{default:i(()=>[t(y(ee),{name:"settings"}),t(y(Vl),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(y(ma),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},OS=w("span",null,"$10.99",-1),jS=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,qS={__name:"SubHeadersDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Sub Headers",code:jS},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(y(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),OS]),_:1}))}},GS=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,US={__name:"ImageDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Image",code:GS},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(y(fe),{as:"h2"},{default:i(()=>[t(y(vt),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},YS=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,JS={__name:"IconDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icon",code:YS},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(y(fe),{as:"h2"},{default:i(()=>[t(y(ee),{name:"plug"}),t(y(Vl),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},WS=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,KS={__name:"SubheaderDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Subheader",code:WS},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(y(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(y(ma),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},XS=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,QS={__name:"DisabledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Disabled",code:XS},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(y(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},ZS=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,eA={__name:"DividingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Dividing",code:ZS},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(y(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},tA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,iA={__name:"BlockDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Block",code:tA},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(y(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},aA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,lA={__name:"AttachedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Attached",code:aA},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(y(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(y(pt),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},nA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,sA={__name:"FloatingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Floating",code:nA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(y(pt),{clearing:""},{default:i(()=>[t(y(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(y(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},oA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,rA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Text Alignment",code:oA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(y(pt),null,{default:i(()=>[t(y(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(y(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(y(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(y(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},uA=`<template>
  <SuiHeader as="h4" primary>Primary</SuiHeader>
  <SuiHeader as="h4" secondary>Secondary</SuiHeader>
  <SuiHeader as="h4" color="red">Red</SuiHeader>
  <SuiHeader as="h4" color="orange">Orange</SuiHeader>
  <SuiHeader as="h4" color="yellow">Yellow</SuiHeader>
  <SuiHeader as="h4" color="olive">Olive</SuiHeader>
  <SuiHeader as="h4" color="green">Green</SuiHeader>
  <SuiHeader as="h4" color="teal">Teal</SuiHeader>
  <SuiHeader as="h4" color="blue">Blue</SuiHeader>
  <SuiHeader as="h4" color="purple">Purple</SuiHeader>
  <SuiHeader as="h4" color="violet">Violet</SuiHeader>
  <SuiHeader as="h4" color="pink">Pink</SuiHeader>
  <SuiHeader as="h4" color="brown">Brown</SuiHeader>
  <SuiHeader as="h4" color="grey">Grey</SuiHeader>
</template>`,cA={__name:"ColoredDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Colored",code:uA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(y(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(y(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(y(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(y(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(y(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(y(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(y(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(y(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(y(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(y(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(y(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(y(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(y(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(y(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},dA=`<template>
  <SuiSegment inverted>
    <SuiHeader as="h4" inverted color="red">Red</SuiHeader>
    <SuiHeader as="h4" inverted color="orange">Orange</SuiHeader>
    <SuiHeader as="h4" inverted color="yellow">Yellow</SuiHeader>
    <SuiHeader as="h4" inverted color="olive">Olive</SuiHeader>
    <SuiHeader as="h4" inverted color="green">Green</SuiHeader>
    <SuiHeader as="h4" inverted color="teal">Teal</SuiHeader>
    <SuiHeader as="h4" inverted color="blue">Blue</SuiHeader>
    <SuiHeader as="h4" inverted color="purple">Purple</SuiHeader>
    <SuiHeader as="h4" inverted color="violet">Violet</SuiHeader>
    <SuiHeader as="h4" inverted color="pink">Pink</SuiHeader>
    <SuiHeader as="h4" inverted color="brown">Brown</SuiHeader>
    <SuiHeader as="h4" inverted color="grey">Grey</SuiHeader>
  </SuiSegment>
</template>`,mA={__name:"InvertedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Colored",code:dA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(y(pt),{inverted:""},{default:i(()=>[t(y(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(y(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},pA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:VS},{id:"content-headers",label:"Content Headers",category:"Types",component:HS},{id:"icon-headers",label:"Icon Headers",category:"Types",component:LS},{id:"sub-headers",label:"Sub Headers",category:"Types",component:qS},{id:"image",label:"Image",category:"Content",component:US},{id:"icon",label:"Icon",category:"Content",component:JS},{id:"subheader",label:"Subheader",category:"Content",component:KS},{id:"disabled",label:"Disabled",category:"States",component:QS},{id:"dividing",label:"Dividing",category:"Variations",component:eA},{id:"block",label:"Block",category:"Variations",component:iA},{id:"attached",label:"Attached",category:"Variations",component:lA},{id:"floating",label:"Floating",category:"Variations",component:sA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:rA},{id:"colored",label:"Colored",category:"Variations",component:cA},{id:"inverted",label:"Inverted",category:"Variations",component:mA}];return(l,s)=>(R(),V(Zt,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},fA=`<template>
  <SuiIcon name="users" disabled />
</template>`,gA={__name:"DisabledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Disabled",code:fA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(y(ee),{name:"users",disabled:""})]),_:1}))}},hA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,_A={__name:"LoadingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Loading",code:hA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(y(ee),{name:"spinner",loading:""}),t(y(ee),{name:"notched circle",loading:""}),t(y(ee),{name:"asterisk",loading:""})]),_:1}))}},bA=w("br",null,null,-1),vA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,yA={__name:"FittedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Fitted",code:vA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[w("div",null,[n(" This icon "),t(y(ee),{name:"help",fitted:""}),n(" is fitted. "),bA,n(" This icon "),t(y(ee),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},CA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,wA={__name:"SizeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Size",code:CA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(y(ee),{name:"home",size:"mini"}),t(y(ee),{name:"home",size:"tiny"}),t(y(ee),{name:"home",size:"small"}),t(y(ee),{name:"home"}),t(y(ee),{name:"home",size:"large"}),t(y(ee),{name:"home",size:"big"}),t(y(ee),{name:"home",size:"huge"}),t(y(ee),{name:"home",size:"massive"})]),_:1}))}},SA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,AA={__name:"LinkDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Link",code:SA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(y(ee),{name:"close",link:""}),t(y(ee),{name:"help",link:""})]),_:1}))}},kA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,$A={__name:"FlippedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Flipped",code:kA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(y(ee),{name:"cloud",flipped:"horizontally"}),t(y(ee),{name:"cloud",flipped:"vertically"})]),_:1}))}},xA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,BA={__name:"RotatedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Rotated",code:xA},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(y(ee),{name:"cloud",rotated:"clockwise"}),t(y(ee),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},TA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,EA={__name:"CircularDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Circular",code:TA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(y(ee),{name:"users",circular:""}),t(y(ee),{name:"users",circular:"",color:"teal"}),t(y(ee),{name:"users",circular:"",inverted:""}),t(y(ee),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},RA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,zA={__name:"BorderedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Bordered",code:RA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(y(ee),{name:"users",bordered:""}),t(y(ee),{name:"users",bordered:"",color:"teal"}),t(y(ee),{name:"users",bordered:"",inverted:"",color:"black"}),t(y(ee),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},DA=`<template>
  <SuiIcon name="users" primary />
  <SuiIcon name="users" secondary />
  <SuiIcon name="users" color="red" />
  <SuiIcon name="users" color="orange" />
  <SuiIcon name="users" color="yellow" />
  <SuiIcon name="users" color="olive" />
  <SuiIcon name="users" color="green" />
  <SuiIcon name="users" color="teal" />
  <SuiIcon name="users" color="blue" />
  <SuiIcon name="users" color="violet" />
  <SuiIcon name="users" color="purple" />
  <SuiIcon name="users" color="pink" />
  <SuiIcon name="users" color="brown" />
  <SuiIcon name="users" color="grey" />
  <SuiIcon name="users" color="black" />
</template>`,IA={__name:"ColoredDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Colored",code:DA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(y(ee),{name:"users",primary:""}),t(y(ee),{name:"users",secondary:""}),t(y(ee),{name:"users",color:"red"}),t(y(ee),{name:"users",color:"orange"}),t(y(ee),{name:"users",color:"yellow"}),t(y(ee),{name:"users",color:"olive"}),t(y(ee),{name:"users",color:"green"}),t(y(ee),{name:"users",color:"teal"}),t(y(ee),{name:"users",color:"blue"}),t(y(ee),{name:"users",color:"violet"}),t(y(ee),{name:"users",color:"purple"}),t(y(ee),{name:"users",color:"pink"}),t(y(ee),{name:"users",color:"brown"}),t(y(ee),{name:"users",color:"grey"}),t(y(ee),{name:"users",color:"black"})]),_:1}))}},PA=`<template>
  <SuiIcon name="users" inverted />
  <SuiIcon name="users" inverted primary />
  <SuiIcon name="users" inverted secondary />
  <SuiIcon name="users" inverted color="red" />
  <SuiIcon name="users" inverted color="orange" />
  <SuiIcon name="users" inverted color="yellow" />
  <SuiIcon name="users" inverted color="olive" />
  <SuiIcon name="users" inverted color="green" />
  <SuiIcon name="users" inverted color="teal" />
  <SuiIcon name="users" inverted color="blue" />
  <SuiIcon name="users" inverted color="violet" />
  <SuiIcon name="users" inverted color="purple" />
  <SuiIcon name="users" inverted color="pink" />
  <SuiIcon name="users" inverted color="brown" />
  <SuiIcon name="users" inverted color="grey" />
</template>`,MA={__name:"InvertedDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Inverted",code:PA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(y(ee),{name:"users",inverted:""}),t(y(ee),{name:"users",inverted:"",primary:""}),t(y(ee),{name:"users",inverted:"",secondary:""}),t(y(ee),{name:"users",inverted:"",color:"red"}),t(y(ee),{name:"users",inverted:"",color:"orange"}),t(y(ee),{name:"users",inverted:"",color:"yellow"}),t(y(ee),{name:"users",inverted:"",color:"olive"}),t(y(ee),{name:"users",inverted:"",color:"green"}),t(y(ee),{name:"users",inverted:"",color:"teal"}),t(y(ee),{name:"users",inverted:"",color:"blue"}),t(y(ee),{name:"users",inverted:"",color:"violet"}),t(y(ee),{name:"users",inverted:"",color:"purple"}),t(y(ee),{name:"users",inverted:"",color:"pink"}),t(y(ee),{name:"users",inverted:"",color:"brown"}),t(y(ee),{name:"users",inverted:"",color:"grey"})]),_:1}))}},VA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,FA={__name:"IconsDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icons",code:VA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(y(mi),{size:"huge"},{default:i(()=>[t(y(ee),{name:"circle outline",size:"big"}),t(y(ee),{name:"user"})]),_:1}),t(y(mi),{size:"huge"},{default:i(()=>[t(y(ee),{name:"dont",size:"big",color:"red"}),t(y(ee),{name:"user",color:"black"})]),_:1})]),_:1}))}},HA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="top left" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="top right" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="bottom left" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="bottom right" />
  </SuiIconGroup>
</template>`,NA={__name:"CornerIconDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Corner Icon",code:HA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(y(mi),{size:"huge"},{default:i(()=>[t(y(ee),{name:"puzzle"}),t(y(ee),{name:"add",corner:"top left"})]),_:1}),t(y(mi),{size:"huge"},{default:i(()=>[t(y(ee),{name:"puzzle"}),t(y(ee),{name:"add",corner:"top right"})]),_:1}),t(y(mi),{size:"huge"},{default:i(()=>[t(y(ee),{name:"puzzle"}),t(y(ee),{name:"add",corner:"bottom left"})]),_:1}),t(y(mi),{size:"huge"},{default:i(()=>[t(y(ee),{name:"puzzle"}),t(y(ee),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},LA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:gA},{id:"loading",label:"Loading",category:"States",component:_A},{id:"fitted",label:"Fitted",category:"Variations",component:yA},{id:"size",label:"Size",category:"Variations",component:wA},{id:"link",label:"Link",category:"Variations",component:AA},{id:"flipped",label:"Flipped",category:"Variations",component:$A},{id:"rotated",label:"Rotated",category:"Variations",component:BA},{id:"circular",label:"Circular",category:"Variations",component:EA},{id:"bordered",label:"Bordered",category:"Variations",component:zA},{id:"colored",label:"Colored",category:"Variations",component:IA},{id:"inverted",label:"Inverted",category:"Variations",component:MA},{id:"icons",label:"Icons",category:"Groups",component:FA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:NA}];return(l,s)=>(R(),V(Zt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},OA=z({name:"DocExample",components:{Prism:Fm},props:{title:String,description:String,code:String},setup(){const e=j(!1);return{active:e,toggle:()=>e.value=!e.value}}}),jA={class:"example"};function qA(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-grid-column"),u=b("sui-icon"),f=b("sui-grid-row"),d=b("prism"),h=b("sui-grid");return R(),pe("div",jA,[t(h,{columns:2},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[n(ke(e.title)+" ",1),t(m,null,{default:i(()=>[n(ke(e.description),1)]),_:1})]),_:1})]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[oa(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(R(),V(o,{key:0,width:16},{default:i(()=>[t(d,{language:"markup"},{default:i(()=>[n(ke(e.code),1)]),_:1})]),_:1})):oo("",!0)]),_:3})]),_:3})])}const Ie=Ce(OA,[["render",qA],["__scopeId","data-v-fcfb6a67"]]),te="/vue-fomantic-ui/images/wireframe/image.png",vl="/vue-fomantic-ui/images/wireframe/image-text.png",Ta="/vue-fomantic-ui/images/wireframe/white-image.png",St="/vue-fomantic-ui/images/wireframe/square-image.png",GA=z({name:"ImageDoc",components:{DocExample:Ie},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),UA={class:"intro"},YA=w("span",null,"Username",-1),JA=w("span",null,"Top Aligned",-1),WA=w("span",null,"Middle Aligned",-1),KA=w("span",null,"Bottom Aligned",-1),XA=w("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),QA=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),ZA=w("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),e0=w("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),t0=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),i0=w("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function a0(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),C=b("doc-example"),A=b("sui-image-group");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",UA,[t(p,{as:"h1"},{default:i(()=>[n("Image "),t(m,null,{default:i(()=>[n(" An image is a graphic representation of something ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Image",description:"An image",code:e.imageCode},{default:i(()=>[t(g,{src:te,size:"small"})]),_:1},8,["code"]),t(C,{title:"Image Link",description:"An image can be formatted to link to other content",code:e.imageLinkCode},{default:i(()=>[t(g,{as:"a",size:"medium",src:vl,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(C,{title:"Hidden",description:"An image can be hidden",code:e.hiddenCode},{default:i(()=>[t(g,{hidden:"",src:te,size:"small"})]),_:1},8,["code"]),t(C,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",src:te,size:"small"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:e.avatarCode},{default:i(()=>[w("div",null,[t(g,{avatar:"",src:te}),YA])]),_:1},8,["code"]),t(C,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:e.borderedCode},{default:i(()=>[t(g,{bordered:"",size:"medium",src:Ta})]),_:1},8,["code"]),t(C,{title:"Fluid",description:"An image can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",src:te})]),_:1},8,["code"]),t(C,{title:"Rounded",description:"An image may appear rounded",code:e.roundedCode},{default:i(()=>[t(g,{rounded:"",size:"medium",src:te})]),_:1},8,["code"]),t(C,{title:"Circular",description:"An image may appear circular",code:e.circularCode},{default:i(()=>[t(g,{circular:"",size:"medium",src:St})]),_:1},8,["code"]),t(C,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:e.verticallyAlignedCode},{default:i(()=>[w("div",null,[t(g,{verticalAlign:"top",size:"tiny",src:St}),JA,t(o),t(g,{verticalAlign:"middle",size:"tiny",src:St}),WA,t(o),t(g,{verticalAlign:"bottom",size:"tiny",src:St}),KA])]),_:1},8,["code"]),t(C,{title:"Centered",description:"An image can appear centered in a content block",code:e.centeredCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{centered:"",size:"medium",src:te}),XA,QA,t(g,{centered:"",size:"small",src:vl}),ZA]),_:1})]),_:1},8,["code"]),t(C,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:e.spacedCode},{default:i(()=>[t(v,null,{default:i(()=>[w("p",null,[n("Te eum doming eirmod, nominati pertinacia "),t(g,{spaced:"",size:"mini",src:te}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),t(C,{title:"Floated",description:"An image can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{floated:"left",size:"small",src:vl}),e0,t(g,{floated:"right",size:"small",src:vl}),t0,i0]),_:1})]),_:1},8,["code"]),t(C,{title:"Size",description:"An image may appear at different sizes",code:e.sizeCode},{default:i(()=>[w("div",null,[t(g,{size:"mini",src:te}),t(o,{hidden:""}),t(g,{size:"tiny",src:te}),t(o,{hidden:""}),t(g,{size:"medium",src:te}),t(o,{hidden:""}),t(g,{size:"large",src:te})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(C,{title:"Size",description:"A group of images can be formatted to have the same size",code:e.sizeGroupCode},{default:i(()=>[t(A,{size:"tiny"},{default:i(()=>[t(g,{src:te}),t(g,{src:te}),t(g,{src:te}),t(g,{src:te})]),_:1})]),_:1},8,["code"])]),_:1})])}const l0=Ce(GA,[["render",a0]]),n0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,s0={__name:"InputDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Input",code:n0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(y(Ke),{placeholder:"Search..."})]),_:1}))}},o0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,r0={__name:"FocusDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Focus",code:o0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(y(Ke),{focus:"",placeholder:"Search..."})]),_:1}))}},u0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,c0={__name:"LoadingDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Loading",code:u0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(y(Ke),{loading:"",icon:"user",placeholder:"Search..."}),t(y(Ke),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},d0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,m0={__name:"DisabledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Disabled",code:d0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(y(Ke),{disabled:"",placeholder:"Search..."})]),_:1}))}},p0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,f0={__name:"ErrorDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Error",code:p0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(y(Ke),{error:"",placeholder:"Search..."})]),_:1}))}},g0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,h0={__name:"IconDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Icon",code:g0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(y(Ke),{icon:"search",placeholder:"Search..."}),t(y(Ke),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},_0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,b0={__name:"LabeledDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Labeled",code:_0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(y(Ke),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},v0=`<template>
  <SuiInput action="Search" />
</template>`,y0={__name:"ActionDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Action",code:v0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(y(Ke),{action:"Search"})]),_:1}))}},C0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,w0={__name:"TransparentDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Transparent",code:C0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(y(Ke),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},S0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,A0={__name:"InvertedDoc",setup(e){return(a,l)=>{const s=b("SuiSegment");return R(),V(q,{label:"Inverted",code:S0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(s,{inverted:""},{default:i(()=>[t(y(Ke),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},k0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,$0={__name:"FluidDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Fluid",code:k0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(y(Ke),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},x0=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,B0={__name:"SizeDoc",setup(e){return(a,l)=>(R(),V(q,{label:"Size",code:x0},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(y(Ke),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(y(Ke),{icon:"search",placeholder:"Search small...",size:"small"}),t(y(Ke),{icon:"search",placeholder:"Search large...",size:"large"}),t(y(Ke),{icon:"search",placeholder:"Search big...",size:"big"}),t(y(Ke),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(y(Ke),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},T0={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:s0},{id:"focus",label:"Focus",category:"States",component:r0},{id:"loading",label:"Loading",category:"States",component:c0},{id:"disabled",label:"Disabled",category:"States",component:m0},{id:"error",label:"Error",category:"States",component:f0},{id:"icon",label:"Icon",category:"Variations",component:h0},{id:"labeled",label:"Labeled",category:"Variations",component:b0},{id:"action",label:"Action",category:"Variations",component:y0},{id:"transparent",label:"Transparent",category:"Variations",component:w0},{id:"inverted",label:"Inverted",category:"Variations",component:A0},{id:"fluid",label:"Fluid",category:"Variations",component:$0},{id:"size",label:"Size",category:"Variations",component:B0}];return(l,s)=>(R(),V(Zt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},Ts="/vue-fomantic-ui/images/avatar/small/joe.jpg",Ot="/vue-fomantic-ui/images/avatar/small/elliot.jpg",Xa="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Ae="/vue-fomantic-ui/images/wireframe/paragraph.png",E0=z({name:"LabelDoc",components:{DocExample:Ie},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),R0={class:"intro"},z0=w("img",{src:Ts},null,-1),D0=w("img",{src:Ot},null,-1),I0=w("img",{src:Xa},null,-1),P0=w("input",{type:"text",placeholder:"First name"},null,-1),M0=w("input",{type:"text",placeholder:"Last name"},null,-1),V0=w("input",{type:"text",placeholder:"Username"},null,-1),F0=w("input",{type:"password",placeholder:"Password"},null,-1),H0=w("span",null,"Account Details",-1),N0=w("span",null,"User Reviews",-1),L0=w("img",{src:Xa},null,-1),O0=w("img",{src:Ot},null,-1);function j0(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-label"),C=b("doc-example"),A=b("sui-form-field"),x=b("sui-form"),_=b("sui-image"),S=b("sui-grid-column"),$=b("sui-grid"),B=b("sui-grid-row"),E=b("sui-list-item"),M=b("sui-list"),F=b("sui-label-detail"),I=b("sui-label-group");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",R0,[t(p,{as:"h1"},{default:i(()=>[n("Label "),t(m,null,{default:i(()=>[n(" A label displays content classification ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Label",description:"A label",code:e.labelCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"mail"}),n(" 23 ")]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A label can be formatted to emphasize an image",code:e.imageCode},{default:i(()=>[w("div",null,[t(g,{as:"a",image:""},{default:i(()=>[z0,n(" Joe ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[D0,n(" Elliot ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[I0,n(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Pointing",description:"A label can point to content next to it",code:e.pointingCode},{default:i(()=>[t(x,{fluid:""},{default:i(()=>[t(A,null,{default:i(()=>[P0,t(g,{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(o),t(A,null,{default:i(()=>[t(g,{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),M0]),_:1}),t(o),t(A,{inline:""},{default:i(()=>[V0,t(g,{pointing:"left"},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(o),t(A,{inline:""},{default:i(()=>[t(g,{pointing:"right"},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),F0]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Corner",description:"A label can position itself in the corner of an element",code:e.cornerCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(S,null,{default:i(()=>[t(_,{fluid:"",src:te,label:{corner:"left",icon:"heart"}})]),_:1}),t(S,null,{default:i(()=>[t(_,{fluid:"",src:te,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Tag",description:"A label can appear as a tag",code:e.tagCode},{default:i(()=>[w("div",null,[t(g,{tag:""},{default:i(()=>[n("New")]),_:1}),t(g,{tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(g,{tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:e.ribbonCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(S,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),H0,t(_,{src:Ae}),t(g,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),N0,t(_,{src:Ae})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),t(_,{src:Ae}),t(g,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Attached",description:"A label can attach to a content segment",code:e.attachedCode},{default:i(()=>[t($,{columns:3},{default:i(()=>[t(B,null,{default:i(()=>[t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(_,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:e.horizontalCode},{default:i(()=>[t(M,{divided:"",selection:""},{default:i(()=>[t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(E,null,{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Floating",description:"A label can float above or below another element",code:e.floatingCode},{default:i(()=>[t(d,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{name:"mail"}),n(" Messages "),t(g,{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(u,{name:"users"}),n(" Friends "),t(g,{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Detail",description:"A label can contain a detail",code:e.detailCode},{default:i(()=>[t(g,null,{default:i(()=>[n(" Dogs "),t(F,null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Icon",description:"A label can include an icon",code:e.iconCode},{default:i(()=>[w("div",null,[t(g,{as:"a"},{default:i(()=>[t(u,{name:"mail"}),n(" Mail ")]),_:1}),t(g,{as:"a"},{default:i(()=>[n(" Tag "),t(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),t(C,{title:"Image",description:"A label can include an image",code:e.imageIncludeCode},{default:i(()=>[w("div",null,[t(g,{as:"a"},{default:i(()=>[t(_,{avatar:"",spaced:"right",src:Ot}),n(" Elliot ")]),_:1}),t(g,{as:"a"},{default:i(()=>[L0,n(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Link",description:"A label can be a link or contain an item that links",code:e.linkCode},{default:i(()=>[t(g,{as:"a",link:""},{default:i(()=>[t(u,{name:"mail"}),n(" 23 ")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Circular",description:"A label can be circular",code:e.circularCode},{default:i(()=>[w("div",null,[t(g,{as:"a",circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(g,{as:"a",circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Basic",description:"A label can reduce its complexity",code:e.basicCode},{default:i(()=>[w("div",null,[t(g,{basic:"",as:"a"},{default:i(()=>[n("Basic")]),_:1}),t(g,{basic:"",as:"a",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(g,{basic:"",as:"a",image:""},{default:i(()=>[O0,n(" Elliot ")]),_:1}),t(g,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(g,{basic:"",as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Colored",description:"A label can have different colors",code:e.coloredCode},{default:i(()=>[w("div",null,[t(g,{as:"a",color:"primary"},{default:i(()=>[n("Primary")]),_:1}),t(g,{as:"a",color:"secondary"},{default:i(()=>[n("Secondary")]),_:1}),t(g,{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(g,{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(g,{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(g,{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(g,{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(g,{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(g,{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(g,{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(g,{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(g,{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(g,{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(g,{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(g,{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Basic Tag",description:"",code:e.basicTagCode},{default:i(()=>[w("div",null,[t(g,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[n("Primary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[n("Secondary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(C,{title:"Size",description:"A label can be small or large",code:e.sizeCode},{default:i(()=>[w("div",null,[t(g,{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(g,{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(g,{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(g,null,{default:i(()=>[n("Medium")]),_:1}),t(g,{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(g,{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(g,{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(g,{size:"massive"},{default:i(()=>[n("Massive")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(C,{title:"Group Size",description:"Labels can share sizes together",code:e.groupSizeCode},{default:i(()=>[t(I,{size:"huge"},{default:i(()=>[t(g,null,{default:i(()=>[n("Fun")]),_:1}),t(g,null,{default:i(()=>[n("Happy")]),_:1}),t(g,null,{default:i(()=>[n("Smart")]),_:1}),t(g,null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored Group",description:"Labels can share colors together",code:e.coloredGroupCode},{default:i(()=>[t(I,{color:"blue"},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n(" Fun "),t(u,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[n(" Happy "),t(F,null,{default:i(()=>[n("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Basic Group",description:"Labels can share their style together",code:e.basicGroupCode},{default:i(()=>[t(I,{basic:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n(" Fun "),t(u,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[n(" Happy "),t(F,null,{default:i(()=>[n("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Tag Group",description:"Labels can share tag formatting",code:e.tagGroupCode},{default:i(()=>[t(I,{tag:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("$30.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"CircularGroup",description:"Labels can share shapes",code:e.circularGroupCode},{default:i(()=>[t(I,{circular:""},{default:i(()=>[t(g,null,{default:i(()=>[n("11")]),_:1}),t(g,null,{default:i(()=>[n("22")]),_:1}),t(g,null,{default:i(()=>[n("33")]),_:1}),t(g,null,{default:i(()=>[n("44")]),_:1}),t(g,null,{default:i(()=>[n("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const q0=Ce(E0,[["render",j0]]),G0="/vue-fomantic-ui/images/avatar/small/rachel.png",U0="/vue-fomantic-ui/images/avatar/small/lindsay.png",Y0="/vue-fomantic-ui/images/avatar/small/matthew.png",gn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",J0="/vue-fomantic-ui/images/avatar/small/veronika.jpg",W0="/vue-fomantic-ui/images/avatar/small/tom.jpg",yl="/vue-fomantic-ui/images/avatar/small/christian.jpg",hn="/vue-fomantic-ui/images/avatar/small/matt.jpg",Ea="/vue-fomantic-ui/images/avatar/small/helen.jpg",Ai="/vue-fomantic-ui/images/avatar/small/daniel.jpg",K0=z({name:"ListDoc",components:{DocExample:Ie},setup(){return{listCode:`<sui-list>
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
</div>`}}}),X0={class:"intro"},Q0=w("div",null,"Benefits",-1),Z0={class:"list"},ek=w("a",null,"Languages",-1),tk=w("a",null,[w("b",null,"Arrested Development")],-1),ik=w("a",null,[w("b",null,"Bob's Burgers")],-1),ak=w("a",null,[w("b",null,"The Godfather Part 2")],-1),lk=w("a",null,[w("b",null,"Twin Peaks")],-1),nk=w("a",null,[w("b",null,"Arrested Development")],-1),sk=w("a",null,[w("b",null,"Bob's Burgers")],-1),ok=w("a",null,[w("b",null,"The Godfather Part 2")],-1);function rk(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-list-item"),C=b("sui-list"),A=b("doc-example"),x=b("sui-list-list"),_=b("sui-list-header"),S=b("sui-list-description"),$=b("sui-list-content"),B=b("sui-image");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",X0,[t(p,{as:"h1"},{default:i(()=>[n("List "),t(m,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(A,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n("Apples")]),_:1}),t(g,null,{default:i(()=>[n("Pears")]),_:1}),t(g,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(g,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(g,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(g,null,{default:i(()=>[Q0,w("div",Z0,[t(g,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(g,null,{default:i(()=>[n("Rebates")]),_:1}),t(g,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(g,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(g,null,{default:i(()=>[ek,t(x,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(g,{active:""},{default:i(()=>[n("Home")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(A,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n("1")]),_:1}),t(g,null,{default:i(()=>[n("2")]),_:1}),t(g,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(S,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(S,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:G0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Rachel")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),tk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:U0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Lindsay")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),ik,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Y0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matthew")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),ak,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:gn}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),lk,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:J0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(S,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(S,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(S,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(S,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(S,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:W0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:yl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:hn}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ea}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:yl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ea}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:yl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),nk,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Xa}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),sk,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ot}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),ok,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Xa}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ot}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ea}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ea}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:yl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:Ai}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{avatar:"",src:St}),t($,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:St}),t($,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{avatar:"",src:St}),t($,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[w("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(g,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(g,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const uk=Ce(K0,[["render",rk]]),qe="/vue-fomantic-ui/images/wireframe/short-paragraph.png",ck=z({name:"LoaderDoc",components:{DocExample:Ie},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),dk={class:"intro"};function mk(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-loader"),C=b("sui-dimmer"),A=b("sui-image"),x=b("doc-example");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",dk,[t(p,{as:"h1"},{default:i(()=>[n("Loader "),t(m,null,{default:i(()=>[n(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(x,{title:"Loader",description:"A loader",code:e.loaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(C,{active:""},{default:i(()=>[t(g)]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(x,{title:"Text Loader",description:"A loader can contain text",code:e.textLoaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(C,{active:""},{default:i(()=>[t(g,null,{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(x,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:e.indeterminateCode},{default:i(()=>[t(v,null,{default:i(()=>[t(C,{active:""},{default:i(()=>[t(g,{indeterminate:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(x,{title:"Active",description:"A loader can be active or visible",code:e.activeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{active:""}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(x,{title:"Diasbled",description:"A loader can be disabled or hidden",code:e.disabledCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{disabled:""}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(x,{title:"Inline",description:"Loaders can appear inline with content",code:e.inlineCode},{default:i(()=>[t(g,{inline:"",active:""})]),_:1},8,["code"]),t(x,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:e.inlineCenterCode},{default:i(()=>[t(g,{inline:"centered",active:""})]),_:1},8,["code"]),t(x,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:e.speedCode},{default:i(()=>[w("div",null,[t(g,{slow:"",active:"",inline:""}),t(g,{active:"",inline:""}),t(g,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),t(x,{title:"Colors",description:"Loaders can be different colors",code:e.colorsCode},{default:i(()=>[w("div",null,[t(g,{color:"primary",inline:"",active:""}),t(g,{color:"secondary",inline:"",active:""}),t(g,{color:"red",inline:"",active:""}),t(g,{color:"orange",inline:"",active:""}),t(g,{color:"yellow",inline:"",active:""}),t(g,{color:"olive",inline:"",active:""}),t(g,{color:"green",inline:"",active:""}),t(g,{color:"teal",inline:"",active:""}),t(g,{color:"blue",inline:"",active:""}),t(g,{color:"violet",inline:"",active:""}),t(g,{color:"purple",inline:"",active:""}),t(g,{color:"pink",inline:"",active:""}),t(g,{color:"brown",inline:"",active:""}),t(g,{color:"grey",inline:"",active:""}),t(g,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),t(x,{title:"Size",description:"Loaders can have different sizes",code:e.sizeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(C,{active:""},{default:i(()=>[t(g,{size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(x,{title:"Inverted",description:"Loaders can have their colors inverted",code:e.invertedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(C,{active:"",inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"])]),_:1})])}const pk=Ce(ck,[["render",mk]]),fk=z({name:"RailDoc",components:{DocExample:Ie},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),gk={class:"intro"};function hk(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),C=b("sui-rail"),A=b("sui-grid-column"),x=b("sui-grid"),_=b("doc-example");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",gk,[t(p,{as:"h1"},{default:i(()=>[n("Rail "),t(m,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(x,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(C,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(g,{src:qe}),t(C,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(x,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(x,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(C,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(x,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(C,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(x,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(C,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _k=Ce(fk,[["render",hk]]),bk="/vue-fomantic-ui/images/avatar/large/ade.jpg",Ac="/vue-fomantic-ui/images/avatar/large/chris.jpg",Es="/vue-fomantic-ui/images/avatar/large/stevie.jpg",kc="/vue-fomantic-ui/images/avatar/large/nan.jpg",vk=z({name:"RevealDoc",components:{DocExample:Ie},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),yk={class:"intro"};function Ck(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),C=b("sui-reveal-content"),A=b("sui-reveal"),x=b("doc-example");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",yk,[t(p,{as:"h1"},{default:i(()=>[n("Reveal "),t(m,null,{default:i(()=>[n(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(x,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(A,{animated:"fade"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(g,{size:"small",src:St})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(g,{size:"small",src:bk})]),_:1})]),_:1})]),_:1},8,["code"]),t(x,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(A,{animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(g,{size:"small",src:St})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Ac})]),_:1})]),_:1})]),_:1},8,["code"]),t(x,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(A,{animated:"rotate"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(g,{circular:"",size:"small",src:St})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(g,{circular:"",size:"small",src:Es})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(x,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(A,{active:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(g,{size:"small",src:St})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(g,{size:"small",src:kc})]),_:1})]),_:1})]),_:1},8,["code"]),t(x,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(A,{disabled:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(g,{size:"small",src:St})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(g,{size:"small",src:kc})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(x,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(A,{instant:"",animated:"move"},{default:i(()=>[t(C,{visible:""},{default:i(()=>[t(g,{size:"small",src:St})]),_:1}),t(C,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Ac})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const wk=Ce(vk,[["render",Ck]]),Sk=z({name:"SegmentDoc",components:{DocExample:Ie},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),Ak={class:"intro"},kk=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),$k=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),xk=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Bk=w("p",null,"Top",-1),Tk=w("p",null,"Middle",-1),Ek=w("p",null,"Middle",-1),Rk=w("p",null,"Middle",-1),zk=w("p",null,"Bottom",-1),Dk=w("p",null,"I'm here to tell you something, and you will probably read me first.",-1),Ik=w("p",null,"This segment is on top",-1),Pk=w("p",null,"This segment is attached on both sides",-1),Mk=w("p",null,"This segment is on bottom",-1),Vk=w("p",null,"Fitted Segment",-1),Fk=w("p",null,"Horizontally fitted segment",-1),Hk=w("p",null,"Vertically fitted segment",-1),Nk=w("p",null,"I'm here to tell you something, and you will probably read me first.",-1),Lk=w("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),Ok=w("p",null,"If you notice me you must be looking very hard.",-1),jk=w("p",null,"This segment will appear to the right",-1),qk=w("p",null,"This segment will appear to the left",-1),Gk=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Uk(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),C=b("sui-button"),A=b("sui-segment-group");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",Ak,[t(p,{as:"h1"},{default:i(()=>[n("Segment "),t(m,null,{default:i(()=>[n(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[n("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(g,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(C,{color:"primary"},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[kk]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[$k]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[xk]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[w("div",null,[t(v,{vertical:""},{default:i(()=>[n(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[n(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[n(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(g,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[Bk]),_:1}),t(v,null,{default:i(()=>[Tk]),_:1}),t(v,null,{default:i(()=>[Ek]),_:1}),t(v,null,{default:i(()=>[Rk]),_:1}),t(v,null,{default:i(()=>[zk]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Nested Top")]),_:1}),t(v,null,{default:i(()=>[n("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[n("Nested Bottom")]),_:1})]),_:1}),t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Left")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(A,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(A,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(A,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[n("Disabled content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[n("Now Loading...")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[Dk]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[w("div",null,[t(v,{attached:"top"},{default:i(()=>[Ik]),_:1}),t(v,{attached:""},{default:i(()=>[Pk]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[Mk]),_:1})])]),_:1},8,["code"]),t(g,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[n("Padded content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[w("div",null,[t(v,{fitted:""},{default:i(()=>[Vk]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[Fk]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[Hk]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[n("Compact content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[w("div",null,[t(v,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[w("div",null,[t(v,null,{default:i(()=>[Nk]),_:1}),t(v,{secondary:""},{default:i(()=>[Lk]),_:1}),t(v,{tertiary:""},{default:i(()=>[Ok]),_:1})])]),_:1},8,["code"]),t(g,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[w("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[n(" Buy Now "),t(m,null,{default:i(()=>[n(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[n(" Buy Now "),t(m,null,{default:i(()=>[n(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(C,{floated:"right"},{default:i(()=>[n("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[w("div",null,[t(v,{floated:"right"},{default:i(()=>[jk]),_:1}),t(v,{floated:"left"},{default:i(()=>[qk]),_:1})])]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[w("div",null,[t(v,{textAlign:"right"},{default:i(()=>[n(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[n(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[n(" Center ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[Gk]),_:1})]),_:1},8,["code"])]),_:1})])}const Yk=Ce(Sk,[["render",Uk]]),Jk=z({name:"StepDoc",components:{DocExample:Ie},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),Wk={class:"intro"},Kk=w("p",null,"The steps take up the entire column width",-1),Xk=w("p",null,"Main content",-1);function Qk(e,a,l,s,r,c){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),d=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-step"),C=b("sui-step-group"),A=b("doc-example"),x=b("sui-step-title"),_=b("sui-step-description"),S=b("sui-step-content"),$=b("sui-grid-column"),B=b("sui-grid");return R(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",Wk,[t(p,{as:"h1"},{default:i(()=>[n("Step "),t(m,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(o,{hidden:""}),t(d,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(A,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(A,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(A,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(A,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"plane"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"plane"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(B,{columns:2},{default:i(()=>[t($,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[Kk]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[w("div",null,[t(C,{attached:"top"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[Xk]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(x,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Zk=Ce(Jk,[["render",Qk]]),e$=z({name:"BreadcrumbDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function t$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-breadcrumb-section"),u=b("sui-breadcrumb-divider"),f=b("sui-breadcrumb"),d=b("doc-example"),h=b("sui-segment"),v=b("sui-container");return R(),pe("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(o,{link:""},{default:i(()=>[n("Store")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[n("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(f,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(d,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u,{icon:"right arrow"}),t(o,{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(d,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[n("Product")]),_:1}),t(u,null,{default:i(()=>[n(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(o,{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(f,{size:"mini"},{default:i(()=>[t(o,{link:""},{default:i(()=>[n("Home")]),_:1}),t(u,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(o,null,{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const i$=Ce(e$,[["render",t$]]),a$=z({name:"FormDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function l$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-form-field"),u=b("sui-checkbox"),f=b("sui-button"),d=b("sui-form"),h=b("doc-example"),v=b("sui-form-group"),g=b("sui-container");return R(),pe("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(g,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(d,null,{default:i(()=>[t(o,{label:"First Name",placeholder:"First Name"}),t(o,{label:"Last Name",placeholder:"Last Name"}),t(o,null,{default:i(()=>[t(u,{label:"I agree to the Terms and Conditions"})]),_:1}),t(f,null,{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(d,null,{default:i(()=>[t(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(d,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{label:"First name",placeholder:"First Name"}),t(o,{label:"Middle name",placeholder:"Middle Name"}),t(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const n$=Ce(a$,[["render",l$]]),Ut="/vue-fomantic-ui/images/wireframe/media-paragraph.png",$c="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",s$=z({name:"GridDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),o$=w("br",null,null,-1);function r$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),u=b("sui-grid-column"),f=b("sui-grid"),d=b("doc-example"),h=b("sui-grid-row"),v=b("sui-segment"),g=b("sui-divider"),C=b("sui-menu-item"),A=b("sui-menu"),x=b("sui-container");return R(),pe("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(f,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.numbers,_=>(R(),V(u,{key:_},{default:i(()=>[t(o,{src:te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(d,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(f,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(f,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:13},{default:i(()=>[t(o,{src:$c})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:10},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(f,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:13},{default:i(()=>[t(o,{src:$c})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:10},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(d,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(f,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{width:8},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{width:8},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{width:8},{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:9},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{width:3},{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(f,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1}),t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[w("div",null,[t(g),t(f,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})])]),_:1},8,["code"]),t(d,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(f,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(f,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(f,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(f,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(C,null,{default:i(()=>[n("Poodle")]),_:1}),t(C,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(f,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te}),o$,t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(d,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(f,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(f,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(f,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(d,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ae})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const u$=Ce(s$,[["render",r$]]),c$="/vue-fomantic-ui/images/logo.png",d$=z({name:"MenuDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),m$=w("p",null,"Check out our new promotions",-1),p$=w("p",null,"Check out our collection of coupons",-1),f$=w("p",null,"Visit our rebate forum for information on claiming rebates",-1),g$=w("img",{src:c$},null,-1);function h$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-menu-item"),u=b("sui-menu"),f=b("doc-example"),d=b("sui-input"),h=b("sui-menu-menu"),v=b("sui-label"),g=b("sui-button"),C=b("sui-dropdown-item"),A=b("sui-dropdown-menu"),x=b("sui-dropdown"),_=b("sui-icon"),S=b("sui-segment"),$=b("sui-container");return R(),pe("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(f,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Editorials")]),_:1}),t(o,null,{default:i(()=>[n("Reviews")]),_:1}),t(o,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("Home")]),_:1}),t(o,null,{default:i(()=>[n("Messages")]),_:1}),t(o,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("Home")]),_:1}),t(o,null,{default:i(()=>[n("Messages")]),_:1}),t(o,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(o,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(o,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(o,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(o,null,{default:i(()=>[n("Most Comments")]),_:1}),t(o,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[n(" Spam "),t(v,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(o,null,{default:i(()=>[n(" Updates "),t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(d,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("1")]),_:1}),t(o,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(o,null,{default:i(()=>[n("10")]),_:1}),t(o,null,{default:i(()=>[n("11")]),_:1}),t(o,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(f,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(o,null,{default:i(()=>[n("About us")]),_:1}),t(o,null,{default:i(()=>[n("Jobs")]),_:1}),t(o,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),m$]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),p$]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),f$]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(d,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,{position:"right",as:"div"},{default:i(()=>[t(d,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(o,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(x,{item:"",text:"Categories"},{default:i(()=>[t(A,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Browse")]),_:1}),t(o,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[n("Sign up")]),_:1}),t(o,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(d,{placeholder:"Search..."})]),_:1}),t(o,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Search")]),_:1}),t(o,null,{default:i(()=>[n("Add")]),_:1}),t(o,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"grid layout"}),n(" Browse ")]),_:1}),t(o,null,{default:i(()=>[n("Messages")]),_:1}),t(x,{item:"",text:"More"},{default:i(()=>[t(A,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(f,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[n("A link")]),_:1}),t(o,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(f,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[g$]),_:1}),t(o,null,{default:i(()=>[n("Features")]),_:1}),t(o,null,{default:i(()=>[n("Testimonials")]),_:1}),t(o,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("Home")]),_:1}),t(o,null,{default:i(()=>[n("Messages")]),_:1}),t(o,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(o,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(o,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(o,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(o,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(o,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[n("Run")]),_:1}),t(o,null,{default:i(()=>[n("Walk")]),_:1}),t(o,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(o,null,{default:i(()=>[n("Buy")]),_:1}),t(o,null,{default:i(()=>[n("Sell")]),_:1}),t(o,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[w("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(o,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(S,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(o,{active:""},{default:i(()=>[n("Home")]),_:1}),t(o,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(x,{item:"",text:"Language"},{default:i(()=>[t(A,null,{default:i(()=>[t(C,null,{default:i(()=>[n("English")]),_:1}),t(C,null,{default:i(()=>[n("Russian")]),_:1}),t(C,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(o,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(o,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(o,null,{default:i(()=>[n("1")]),_:1}),t(o,null,{default:i(()=>[n("2")]),_:1}),t(o,null,{default:i(()=>[n("3")]),_:1}),t(o,null,{default:i(()=>[n("4")]),_:1}),t(o,null,{default:i(()=>[n("5")]),_:1}),t(o,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _$=Ce(d$,[["render",h$]]),b$=z({name:"MessageDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),v$=w("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),y$=w("p",null,"Get the best news in your e-mail every day.",-1),C$=w("p",null,"You can't see me",-1),w$=w("p",null,"You can always see me",-1),S$=w("p",null,"Way to go!",-1),A$=w("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),k$=w("a",{href:"#"},"Login here",-1),$$=w("p",null,[n("Go to your "),w("b",null,"special offers"),n(" page to see now.")],-1),x$=w("p",null,"That offer has expired",-1);function B$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-message-header"),u=b("sui-message"),f=b("doc-example"),d=b("sui-message-item"),h=b("sui-message-list"),v=b("sui-icon"),g=b("sui-message-content"),C=b("sui-form-field"),A=b("sui-form-group"),x=b("sui-button"),_=b("sui-form"),S=b("sui-container");return R(),pe("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(S,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(f,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Changes in Service")]),_:1}),v$]),_:1})]),_:1},8,["code"]),t(f,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(d,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),y$]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(f,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[C$]),_:1})]),_:1},8,["code"]),t(f,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[w$]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(f,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[S$]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[A$]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[w("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t(A,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(x,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),n(" Already signed up? "),k$,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(f,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(o,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(o,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),$$]),_:1})]),_:1},8,["code"]),t(f,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),x$]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[w("div",null,[t(u,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[w("div",null,[t(u,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const T$=Ce(b$,[["render",B$]]),E$=z({name:"TableDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),R$=w("a",{href:"#"},"Edit",-1),z$=w("a",{href:"#"},"Edit",-1),D$=w("a",{href:"#"},"Edit",-1),I$=w("br",null,null,-1),P$=w("br",null,null,-1),M$=w("br",null,null,-1),V$=w("br",null,null,-1),F$=w("br",null,null,-1),H$=w("br",null,null,-1),N$=w("br",null,null,-1);function L$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-table-header-cell"),u=b("sui-table-row"),f=b("sui-table-header"),d=b("sui-table-cell"),h=b("sui-table-body"),v=b("sui-table"),g=b("doc-example"),C=b("sui-icon"),A=b("sui-table-footer"),x=b("sui-container");return R(),pe("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Age")]),_:1}),t(o,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("James")]),_:1}),t(d,null,{default:i(()=>[n("24")]),_:1}),t(d,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("26")]),_:1}),t(d,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Elyse")]),_:1}),t(d,null,{default:i(()=>[n("24")]),_:1}),t(d,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o),t(o,null,{default:i(()=>[n("Arguments")]),_:1}),t(o,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("reset rating")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1}),t(d,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("set rating")]),_:1}),t(d,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(d,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(o,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Ruby")]),_:1}),t(o,null,{default:i(()=>[n("Javascript")]),_:1}),t(o,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(d,null,{default:i(()=>[n("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(d,null,{default:i(()=>[n("Project 1")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Project 2")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(d),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d)]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Project 3")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(d),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"checkmark"}),n(" Approved ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{positive:""},{default:i(()=>[t(C,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{error:""},{default:i(()=>[t(C,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"attention"}),n(" Requires Action ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{warning:""},{default:i(()=>[t(C,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Selected")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(d,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Selected")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(d,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Unknown")]),_:1}),t(d,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Registration Date")]),_:1}),t(o,null,{default:i(()=>[n("E-mail address")]),_:1}),t(o,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John Lilki")]),_:1}),t(d,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[R$]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(d,null,{default:i(()=>[n("Jimmy")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{selectable:""},{default:i(()=>[z$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(d,{selectable:""},{default:i(()=>[D$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),I$,n(" 1"),P$,n(" 2"),M$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n(" Notes "),V$,n(" 1"),F$,n(" 2"),H$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Date Joined")]),_:1}),t(o,null,{default:i(()=>[n("E-mail")]),_:1}),t(o,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John Lilki")]),_:1}),t(d,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(d,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(d,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(d,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(d,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(d,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("3 People")]),_:1}),t(d,null,{default:i(()=>[n("2 Approved")]),_:1}),t(d)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[w("div",null,[t(v,{basic:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),N$,t(v,{basic:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Age")]),_:1}),t(o,null,{default:i(()=>[n("Gender")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("27")]),_:1}),t(d,null,{default:i(()=>[n("Male")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("32")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("22")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("3 People")]),_:1}),t(o,null,{default:i(()=>[n("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[n("Initial commit")]),_:1}),t(d,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[n("Initial commit")]),_:1}),t(d,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(d,null,{default:i(()=>[n("Initial commit")]),_:1}),t(d,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Age")]),_:1}),t(o,null,{default:i(()=>[n("Gender")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("27")]),_:1}),t(d,null,{default:i(()=>[n("Male")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("32")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("22")]),_:1}),t(d,null,{default:i(()=>[n("Other")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("3 People")]),_:1}),t(o,null,{default:i(()=>[n("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{width:10},{default:i(()=>[n("Name")]),_:1}),t(o,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Food")]),_:1}),t(o,null,{default:i(()=>[n("Calories")]),_:1}),t(o,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Apples")]),_:1}),t(d,null,{default:i(()=>[n("200")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Orange")]),_:1}),t(d,null,{default:i(()=>[n("310")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Food")]),_:1}),t(o,null,{default:i(()=>[n("Calories")]),_:1}),t(o,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Apples")]),_:1}),t(d,null,{default:i(()=>[n("200")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Orange")]),_:1}),t(d,null,{default:i(()=>[n("310")]),_:1}),t(d,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[w("div",null,[t(v,{padded:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[w("div",null,[t(v,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[n("Name")]),_:1}),t(o,null,{default:i(()=>[n("Status")]),_:1}),t(o,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("John")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jamie")]),_:1}),t(d,null,{default:i(()=>[n("Approved")]),_:1}),t(d,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Jill")]),_:1}),t(d,null,{default:i(()=>[n("Denied")]),_:1}),t(d,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const O$=Ce(E$,[["render",L$]]),j$=z({name:"AdvertisementDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),q$=w("img",{src:te},null,-1),G$=w("br",null,null,-1);function U$(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-advertisement"),u=b("doc-example"),f=b("sui-container");return R(),pe("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(o,{unit:"medium rectangle"},{default:i(()=>[q$]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[w("div",null,[t(o,{unit:"medium rectangle",test:"Medium Rectangle"}),t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large rectangle",test:"Large Rectangle"}),t(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[w("div",null,[t(o,{unit:"mobile banner",test:"Mobile Banner"}),t(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[w("div",null,[t(o,{unit:"button",test:"Button"}),t(o,{unit:"square button",test:"Square Button"}),t(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[w("div",null,[t(o,{unit:"skyscraper",test:"Skyscraper"}),G$,t(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[w("div",null,[t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"vertical banner",test:"Vertical Banner"}),t(o,{unit:"top banner",test:"Top Banner"}),t(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[w("div",null,[t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large leaderboard",test:"Large Leaderboard"}),t(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const Y$=Ce(j$,[["render",U$]]),xc="/vue-fomantic-ui/images/avatar/large/kristy.png",J$="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Nn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Ln="/vue-fomantic-ui/images/avatar/large/elliot.jpg",On="/vue-fomantic-ui/images/avatar/large/elyse.png",W$="/vue-fomantic-ui/images/avatar/large/matthew.png",K$="/vue-fomantic-ui/images/avatar/large/molly.png",Bc="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Tc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Ec="/vue-fomantic-ui/images/avatar/large/steve.jpg",X$=z({name:"CardDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),Q$=w("span",{class:"date"},"Joined in 2013",-1),Z$=w("a",null,"Elliot Fu",-1),ex=w("a",null,"Jenny Hess",-1),tx=w("a",null,"Stevie Feliciano",-1),ix=w("a",null,"Administrator",-1),ax=w("a",null,"Helen Troy",-1),lx=w("span",{class:"date"},"Joined in 2013",-1),nx=w("span",null,"2 days ago",-1),sx=w("a",null,"Animals",-1),ox=w("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),rx=w("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ux=w("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),cx=w("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),dx=w("span",{class:"category"},"Animals",-1),mx=w("span",{class:"category"},"Animals",-1),px=w("div",{class:"right floated author"},[w("img",{class:"ui avatar image",src:hn}),n(" Matt ")],-1),fx=w("span",{class:"category"},"Animals",-1),gx=w("div",{class:"right floated author"},[w("img",{class:"ui avatar image",src:hn}),n(" Matt ")],-1),hx=w("p",null,"Jenny is a student studying Media Management at the New School",-1),_x=w("div",{class:"center aligned author"},[w("img",{class:"ui avatar image",src:gn}),n(" Jenny ")],-1),bx=w("a",null,"Friends",-1),vx=w("span",{class:"right floated"}," Joined in 2013 ",-1),yx=w("a",null,[w("i",{class:"user icon"}),n(" 75 Friends ")],-1),Cx=w("a",null,"Coworker",-1),wx=w("span",{class:"right floated"}," Joined in 2011 ",-1),Sx=w("a",null,[w("i",{class:"user icon"}),n(" 35 Friends ")],-1),Ax=w("a",null,"Coworker",-1),kx=w("span",{class:"right floated"}," Joined in 2014 ",-1),$x=w("a",null,[w("i",{class:"user icon"}),n(" 151 Friends ")],-1);function xx(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),u=b("sui-card-header"),f=b("sui-card-meta"),d=b("sui-card-description"),h=b("sui-card-content"),v=b("sui-icon"),g=b("sui-card"),C=b("doc-example"),A=b("sui-button"),x=b("sui-button-group"),_=b("sui-card-group"),S=b("sui-feed-summary"),$=b("sui-feed-content"),B=b("sui-feed-event"),E=b("sui-feed"),M=b("sui-grid-column"),F=b("sui-grid"),I=b("sui-segment"),L=b("sui-container");return R(),pe("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(L,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:xc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Kristy")]),_:1}),t(f,null,{default:i(()=>[Q$]),_:1}),t(d,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[w("a",null,[t(v,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:Ot,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(d,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(x,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:gn,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[n("New Member")]),_:1}),t(d,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(x,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(p,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(B,null,{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[Z$,n(" added "),ex,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[tx,n(" was added as an "),ix]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[ax,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(A,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:xc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Kristy")]),_:1}),t(f,null,{default:i(()=>[lx]),_:1}),t(d,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[w("a",null,[t(v,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[n("Friend")]),_:1}),t(d,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(f,null,{default:i(()=>[n("Friend")]),_:1}),t(d,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[n("Friend")]),_:1}),t(d,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[nx,sx]),_:1}),t(d,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(d,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(d,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[ox,rx]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[ux,cx]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(F,{columns:3},{default:i(()=>[t(M,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:J$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Nn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Ln}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(g,{centered:""},{default:i(()=>[t(o,{src:On}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[t(o,{src:On}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[dx]),_:1}),t(d,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(g,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[mx]),_:1}),t(d,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[px]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(g,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[fx]),_:1}),t(d,null,{default:i(()=>[t(o,{src:Ae})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[gx]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(d,{textAlign:"center"},{default:i(()=>[hx]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[_x]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(I,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:W$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(f,null,{default:i(()=>[bx]),_:1}),t(d,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[vx,yx]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:K$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Molly")]),_:1}),t(f,null,{default:i(()=>[Cx]),_:1}),t(d,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[wx,Sx]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:On}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elyse")]),_:1}),t(f,null,{default:i(()=>[Ax]),_:1}),t(d,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[kx,$x]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,{color:"primary",href:"#"},{default:i(()=>[t(o,{src:Ta})]),_:1}),t(g,{color:"secondary",href:"#"},{default:i(()=>[t(o,{src:Ta})]),_:1}),t(g,{color:"red",href:"#"},{default:i(()=>[t(o,{src:Ta})]),_:1}),t(g,{color:"orange",href:"#"},{default:i(()=>[t(o,{src:Ta})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ln})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Nn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bc})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Tc})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Es})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ec})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ln})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Nn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bc})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Tc})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Es})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ec})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Bx=Ce(X$,[["render",xx]]),Tx=z({name:"CommentDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),Ex=w("span",null,"Today at 5:42PM",-1),Rx=w("a",null,"Reply",-1),zx=w("span",null,"Yesterday at 12:30AM",-1),Dx=w("a",null,"Reply",-1),Ix={class:"comments"},Px=w("span",null,"Just now",-1),Mx=w("a",null,"Reply",-1),Vx=w("span",null,"5 days ago",-1),Fx=w("a",null,"Reply",-1),Hx=w("div",{class:"date"},"2 days ago",-1),Nx=w("div",{class:"rating"},[w("i",{class:"star icon"}),n(" 5 Faves ")],-1),Lx=w("a",null,"Reply",-1),Ox=w("a",null,"Save",-1),jx=w("a",null,"Hide",-1),qx=w("a",null,[w("i",{class:"expand icon"}),n(" Full-screen ")],-1),Gx=w("a",null,"Reply",-1),Ux=w("a",null,"Reply",-1),Yx=w("a",null,"Replay",-1),Jx=w("span",null,"Today at 5:42PM",-1),Wx=w("a",{href:"#"},"Replay",-1),Kx=w("span",null,"Yesterday at 12:30AM",-1),Xx=w("a",{href:"#"},"Replay",-1),Qx=w("span",null,"Just now",-1),Zx=w("a",{href:"#"},"Replay",-1),eB=w("span",null,"5 days ago",-1),tB=w("a",{href:"#"},"Replay",-1),iB=w("span",null,"Today at 5:42PM",-1),aB=w("a",{href:"#"},"Replay",-1),lB=w("span",null,"Yesterday at 12:30AM",-1),nB=w("a",{href:"#"},"Replay",-1),sB=w("span",null,"Just now",-1),oB=w("a",{href:"#"},"Replay",-1),rB=w("span",null,"5 days ago",-1),uB=w("a",{href:"#"},"Replay",-1),cB=w("span",null,"Today at 5:42PM",-1),dB=w("a",{href:"#"},"Replay",-1),mB=w("span",null,"Yesterday at 12:30AM",-1),pB=w("a",{href:"#"},"Replay",-1),fB=w("span",null,"Just now",-1),gB=w("a",{href:"#"},"Replay",-1),hB=w("span",null,"5 days ago",-1),_B=w("a",{href:"#"},"Replay",-1),bB=w("span",null,"Today at 5:42PM",-1),vB=w("a",{href:"#"},"Replay",-1),yB=w("span",null,"Yesterday at 12:30AM",-1),CB=w("a",{href:"#"},"Replay",-1),wB=w("span",null,"Just now",-1),SB=w("a",{href:"#"},"Replay",-1),AB=w("span",null,"5 days ago",-1),kB=w("a",{href:"#"},"Replay",-1);function $B(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-comment-avatar"),u=b("sui-comment-author"),f=b("sui-comment-metadata"),d=b("sui-comment-text"),h=b("sui-comment-actions"),v=b("sui-comment-content"),g=b("sui-comment"),C=b("sui-comment-group"),A=b("doc-example"),x=b("sui-form-textarea"),_=b("sui-icon"),S=b("sui-button"),$=b("sui-form"),B=b("sui-segment"),E=b("sui-container");return R(),pe("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(A,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(f,null,{default:i(()=>[Ex]),_:1}),t(d,null,{default:i(()=>[n("How artistic!")]),_:1}),t(h,null,{default:i(()=>[Rx]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[zx]),_:1}),t(d,null,{default:i(()=>[n("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[Dx]),_:1})]),_:1}),w("div",Ix,[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[Px]),_:1}),t(d,null,{default:i(()=>[n("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[Mx]),_:1})]),_:1})]),_:1})])]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[Vx]),_:1}),t(d,null,{default:i(()=>[n("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[Fx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(A,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(f,null,{default:i(()=>[Hx,Nx]),_:1}),t(d,null,{default:i(()=>[n(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Tom Lukic")]),_:1}),t(d,null,{default:i(()=>[n(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[Lx,Ox,jx,qx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Steve Jobs")]),_:1}),t(f,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[n("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[Gx]),_:1}),t($,{reply:""},{default:i(()=>[t(x),t(S,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),n(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Christian Rocha")]),_:1}),t(f,null,{default:i(()=>[n("2 days ago")]),_:1}),t(d,null,{default:i(()=>[n(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[Ux]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[n("1 days ago")]),_:1}),t(d,null,{default:i(()=>[n("No, it wont")]),_:1}),t(h,null,{default:i(()=>[Yx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(f,null,{default:i(()=>[Jx]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[Wx]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[Kx]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[Xx]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[Qx]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[Zx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[eB]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[tB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(f,null,{default:i(()=>[iB]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[aB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[lB]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[nB]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[sB]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[oB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[rB]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[uB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(f,null,{default:i(()=>[cB]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[dB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[mB]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[pB]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[fB]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[gB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[hB]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[_B]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(f,null,{default:i(()=>[bB]),_:1}),t(d,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[vB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[yB]),_:1}),t(d,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[CB]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[wB]),_:1}),t(d,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[SB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[AB]),_:1}),t(d,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[kB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const xB=Ce(Tx,[["render",$B]]),BB=z({name:"FeedDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),TB=w("img",{src:Ot},null,-1),EB=w("img",{src:Ot},null,-1),RB=w("a",null,"Coworkers",-1),zB=w("img",{src:gn},null,-1),DB=w("a",null,"Jenny Hess",-1),IB=w("a",null,"coworker",-1),PB=w("img",{src:Ea},null,-1),MB=w("a",null,"Helen Troy",-1),VB=w("a",null,[w("img",{src:te})],-1),FB=w("a",null,[w("img",{src:te})],-1),HB=w("a",null,"Elliot Fu",-1),NB=w("a",null,"Jenny Hess",-1),LB=w("a",null,"Stevie Feliciano",-1),OB=w("a",null,"Elliot Fu",-1),jB=w("a",null,"Helen Troy",-1),qB=w("a",null,"Christian Rocha",-1),GB=w("img",{src:Ot},null,-1),UB=w("div",{class:"date"},"Just now",-1),YB=w("a",{class:"user"},"Elliot Fu",-1);function JB(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-feed-label"),u=b("sui-feed-user"),f=b("sui-feed-date"),d=b("sui-feed-summary"),h=b("sui-icon"),v=b("sui-feed-like"),g=b("sui-feed-meta"),C=b("sui-feed-content"),A=b("sui-feed-event"),x=b("sui-feed"),_=b("doc-example"),S=b("sui-feed-extra"),$=b("sui-segment"),B=b("sui-container");return R(),pe("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(x,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[TB]),_:1}),t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(f,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(x,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[EB]),_:1}),t(C,null,{default:i(()=>[n(" You added Elliot Fu to the group "),RB]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(x,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[zB]),_:1}),t(C,null,{default:i(()=>[t(f,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[n(" You added "),DB,n(" to your "),IB,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(x,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[PB]),_:1}),t(C,null,{default:i(()=>[t(f,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(d,null,{default:i(()=>[MB,n(" added 2 photos ")]),_:1}),t(S,{images:""},{default:i(()=>[VB,FB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(x,{size:"small"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t(A,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[HB,n(" added "),NB,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[LB,n(" added "),OB,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(C,null,{default:i(()=>[t(d,null,{default:i(()=>[jB,n(" added "),qB,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t($,{inverted:""},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[GB]),_:1}),t(C,null,{default:i(()=>[UB,t(d,null,{default:i(()=>[YB,n(" posted on his page ")]),_:1}),t(S,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const WB=Ce(BB,[["render",JB]]),KB=z({name:"ItemDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),XB=w("img",{src:te},null,-1),QB=w("span",null,"Description",-1),ZB=w("img",{src:qe},null,-1),eT=w("img",{src:te},null,-1),tT=w("span",null,"Description",-1),iT=w("img",{src:qe},null,-1),aT=w("img",{src:te},null,-1),lT=w("img",{src:te},null,-1),nT=w("img",{src:te},null,-1),sT=w("img",{src:te},null,-1),oT=w("img",{src:te},null,-1),rT=w("img",{src:te},null,-1),uT=w("img",{src:te},null,-1),cT=w("span",{class:"price"},"$1200",-1),dT=w("span",{class:"stay"},"1 Month",-1),mT=w("img",{src:qe},null,-1),pT=w("span",{class:"price"},"$1000",-1),fT=w("span",{class:"stay"},"2 Weeks",-1),gT=w("img",{src:qe},null,-1),hT=w("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),_T=w("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),bT=w("img",{src:qe},null,-1),vT=w("img",{src:te},null,-1),yT=w("span",{class:"cinema"},"Union Square 14",-1),CT=w("img",{src:qe},null,-1),wT=w("img",{src:te},null,-1),ST=w("span",{class:"cinema"},"IFC Cinema",-1),AT=w("img",{src:qe},null,-1),kT=w("img",{src:te},null,-1),$T=w("span",{class:"cinema"},"IFC",-1),xT=w("img",{src:qe},null,-1),BT=w("img",{src:qe},null,-1),TT=w("img",{src:qe},null,-1),ET=w("img",{src:qe},null,-1),RT=w("span",{class:"price"},"$1200",-1),zT=w("span",{class:"stay"},"1 Month",-1),DT=w("img",{src:qe},null,-1),IT=w("span",{class:"price"},"$1000",-1),PT=w("span",{class:"stay"},"2 Weeks",-1),MT=w("img",{src:qe},null,-1);function VT(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-item-image"),u=b("sui-item-header"),f=b("sui-item-meta"),d=b("sui-item-description"),h=b("sui-item-extra"),v=b("sui-item-content"),g=b("sui-item"),C=b("sui-item-group"),A=b("doc-example"),x=b("sui-image"),_=b("sui-icon"),S=b("sui-label"),$=b("sui-button"),B=b("sui-segment"),E=b("sui-container");return R(),pe("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(A,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[XB]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Header")]),_:1}),t(f,null,{default:i(()=>[QB]),_:1}),t(d,null,{default:i(()=>[ZB]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[eT]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Header")]),_:1}),t(f,null,{default:i(()=>[tT]),_:1}),t(d,null,{default:i(()=>[iT]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(A,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[aT]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[lT]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[nT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[sT]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[oT]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[rT]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[uT]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[cT,dT]),_:1}),t(d,null,{default:i(()=>[mT]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[pT,fT]),_:1}),t(d,null,{default:i(()=>[gT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[hT,_T]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(d,null,{default:i(()=>[bT]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[vT]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(f,null,{default:i(()=>[yT]),_:1}),t(d,null,{default:i(()=>[CT]),_:1}),t(h,null,{default:i(()=>[t(S,null,{default:i(()=>[n("IMAX")]),_:1}),t(S,null,{default:i(()=>[t(_,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[wT]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(f,null,{default:i(()=>[ST]),_:1}),t(d,null,{default:i(()=>[AT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(S,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[kT]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Watchmen")]),_:1}),t(f,null,{default:i(()=>[$T]),_:1}),t(d,null,{default:i(()=>[xT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{size:"tiny",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"tiny",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"tiny",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content A")]),_:1}),t(d,null,{default:i(()=>[BT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content B")]),_:1}),t(d,null,{default:i(()=>[TT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content C")]),_:1}),t(d,null,{default:i(()=>[ET]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[RT,zT]),_:1}),t(d,null,{default:i(()=>[DT]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[IT,PT]),_:1}),t(d,null,{default:i(()=>[MT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const FT=Ce(KB,[["render",VT]]),HT=z({name:"StatisticDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),NT=w("br",null,null,-1),LT=w("br",null,null,-1),OT=w("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),jT=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),qT=w("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),GT=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function UT(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-statistic"),u=b("doc-example"),f=b("sui-statistic-group"),d=b("sui-statistic-value"),h=b("sui-statistic-label"),v=b("sui-icon"),g=b("sui-image"),C=b("sui-segment"),A=b("sui-container");return R(),pe("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,{value:"31,200",label:"Views"}),t(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[n(" Three"),NT,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(d,null,{default:i(()=>[t(g,{circular:"",inline:"",src:Ts}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(f,{stackable:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(f,{widths:4},{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(d,{text:""},{default:i(()=>[n(" Three"),LT,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(d,null,{default:i(()=>[t(v,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(d,null,{default:i(()=>[t(g,{circular:"",inline:"",src:Ts}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(o,{floated:"right",value:"2,204",label:"Views"}),OT,jT,t(o,{floated:"left",value:"2,204",label:"Views"}),qT,GT]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",value:"2,204",label:"Views"}),t(o,{size:"tiny",value:"2,204",label:"Views"}),t(o,{size:"small",value:"2,204",label:"Views"}),t(o,{value:"2,204",label:"Views"}),t(o,{size:"large",value:"2,204",label:"Views"}),t(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const YT=Ce(HT,[["render",UT]]),JT=z({name:"AccordionDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),WT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),KT=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),XT=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),QT=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),ZT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),e2=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),t2=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),i2=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),a2=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),l2=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),n2=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),s2=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),o2=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),r2=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),u2=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),c2=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),d2=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),m2=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),p2=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),f2=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function g2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-accordion-tab"),u=b("sui-accordion"),f=b("doc-example"),d=b("sui-segment"),h=b("sui-container");return R(),pe("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[WT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[KT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[XT,QT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[ZT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[e2]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[t2,i2]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[a2]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[l2]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[n2,s2]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(d,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[o2]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[r2]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[u2,c2]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[d2]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[m2]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[p2,f2]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const h2=Ce(JT,[["render",g2]]),_2=z({name:"CalendarDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{calendar1:j(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function b2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-calendar"),u=b("doc-example"),f=b("sui-container");return R(),pe("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(o,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=d=>e.calendar1=d),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const v2=Ce(_2,[["render",b2]]),y2=z({name:"PropertyListTable",props:{properties:Array}});function C2(e,a,l,s,r,c){const m=b("sui-table-header-cell"),p=b("sui-table-row"),o=b("sui-table-header"),u=b("sui-table-cell"),f=b("sui-table-body"),d=b("sui-table");return R(),V(d,{celled:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(f,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.properties,h=>(R(),V(p,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[n(ke(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[n(ke(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[n(ke(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[n(ke(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const _n=Ce(y2,[["render",C2]]),w2=z({name:"CheckboxDoc",components:{DocPageHeader:Ge,DocExample:Ie,PropertyListTable:_n},setup(){const e=j(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=j([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=j(!1),c='<sui-checkbox toggle v-model="toggle" />',m=j(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:s,toggle:r,toggleCode:c,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),S2={class:"ui form"},A2={class:"grouped fields"},k2={class:"field"},$2={class:"field"},x2={class:"field"};function B2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-checkbox"),u=b("doc-example"),f=b("property-list-table"),d=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),C=b("sui-table-body"),A=b("sui-table"),x=b("sui-container");return R(),pe("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(o,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[w("div",S2,[w("div",A2,[w("div",k2,[t(o,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),w("div",$2,[t(o,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),w("div",x2,[t(o,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),n(" selected : "+ke(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(o,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(o,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.events,_=>(R(),V(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[n(ke(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[n(ke(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const T2=Ce(w2,[["render",B2]]),E2=z({name:"DimmerDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){const e=`<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`,a=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,l=j(!1);return{dimmerCode:e,contentDimmerCode:a,active:l,pageDimmerCode:`<div>
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
</div>`}}});function R2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),u=b("sui-image-group"),f=b("sui-dimmer"),d=b("sui-dimmer-dimmable"),h=b("doc-example"),v=b("sui-icon"),g=b("sui-button"),C=b("sui-header-subheader"),A=b("sui-container");return R(),pe("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(o,{src:te}),t(o,{src:te}),t(o,{src:te})]),_:1}),t(o,{size:"medium",src:Ut}),t(f,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(d,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(o,{src:te}),t(o,{src:te}),t(o,{src:te})]),_:1}),t(o,{size:"medium",src:Ut}),t(f,{active:""},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[w("div",null,[t(g,{labeled:"",icon:"",onClick:a[0]||(a[0]=x=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),n(" Show ")]),_:1}),t(f,{active:e.active,page:"",onClick:a[1]||(a[1]=x=>e.active=!1)},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),n(" Dimmed Message! "),t(C,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const z2=Ce(E2,[["render",R2]]),D2=z({name:"DropdownDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,a=j(null),l=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,s=j(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],c=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,m=j(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],o=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,u=j(null),f=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,d=j(null),h=`<sui-dropdown
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
/>`,v=j(null),g=`<sui-dropdown
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
/>`,C=j(null),A=`<sui-dropdown
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
/>`,x=j({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:l,selected2:s,searchSelectionOptions:r,searchSelectionCode:c,selected3:m,clearableSelectionOptions:p,clearableSelectionCode:o,selected4:u,multipleCode:f,selected5:d,multipleCode2:h,selected6:v,searchDropdownCode:g,selected7:C,searchInMenuCode:A,selected8:x,inlineCode:`<span>
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
</sui-button-group>`}}});function I2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-dropdown-item"),u=b("sui-divider"),f=b("sui-dropdown-menu"),d=b("sui-dropdown"),h=b("doc-example"),v=b("sui-button"),g=b("sui-button-group"),C=b("sui-container");return R(),pe("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(d,{text:"File"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Open...",description:"ctrl + o"}),t(o,{text:"Save as...",description:"ctrl + s"}),t(o,{text:"Rename",description:"ctrl + r"}),t(o,{text:"Make a copy"}),t(o,{icon:"folder",text:"Move to folder"}),t(o,{icon:"trash",text:"Move to trash"}),t(u),t(o,{text:"Download As..."}),t(o,{text:"Publish To Web"}),t(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(d,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=A=>e.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(d,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=A=>e.selected2=A),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(d,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=A=>e.selected3=A),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=A=>e.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(d,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=A=>e.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(d,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=A=>e.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(d,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=A=>e.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[w("span",null,[n(" Show me posts by "),t(d,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=A=>e.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(d,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Save As"}),t(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(g,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[n("Save")]),_:1}),t(d,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"Edit Post",icon:"edit"}),t(o,{text:"Remove Post",icon:"delete"}),t(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const P2=Ce(D2,[["render",I2]]),M2=z({name:"EmbedDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function V2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-embed"),u=b("doc-example"),f=b("sui-container");return R(),pe("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const F2=Ce(M2,[["render",V2]]),H2="/vue-fomantic-ui/images/avatar/large/rachel.png",N2=z({name:"ModalDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){const e=`<div>
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
</div>`,a=j(!1),l=j(!1);return{modalCode:e,modal1:a,basicModal:l,basicCode:`<div>
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
</div>`}}}),L2=w("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),O2=w("p",null,"Is it okay to use this photo?",-1),j2=w("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function q2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-button"),u=b("sui-modal-header"),f=b("sui-image"),d=b("sui-modal-description"),h=b("sui-modal-content"),v=b("sui-modal-actions"),g=b("sui-modal"),C=b("doc-example"),A=b("sui-icon"),x=b("sui-container");return R(),pe("div",null,[t(m,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Modal",description:"A standard modal",code:e.modalCode},{default:i(()=>[w("div",null,[t(o,{onClick:a[0]||(a[0]=_=>e.modal1=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(g,{modelValue:e.modal1,"onUpdate:modelValue":a[2]||(a[2]=_=>e.modal1=_)},{default:i(()=>[t(u,null,{default:i(()=>[n("Select a Photo")]),_:1}),t(h,{image:""},{default:i(()=>[t(f,{wrapped:"",size:"medium",src:H2}),t(d,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Default Profile Image")]),_:1}),L2,O2]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(o,{positive:"",onClick:a[1]||(a[1]=_=>e.modal1=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t(C,{title:"Basic",description:"A modal can reduce its complexity",code:e.basicCode},{default:i(()=>[w("div",null,[t(o,{onClick:a[3]||(a[3]=_=>e.basicModal=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(g,{basic:"",modelValue:e.basicModal,"onUpdate:modelValue":a[5]||(a[5]=_=>e.basicModal=_)},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(A,{name:"archive"}),n(" Archive Old Messages ")]),_:1}),t(h,null,{default:i(()=>[j2]),_:1}),t(v,null,{default:i(()=>[t(o,{basic:"",color:"red",inverted:"",onClick:a[4]||(a[4]=_=>e.basicModal=!1)},{default:i(()=>[t(A,{name:"remove"}),n(" No ")]),_:1}),t(o,{basic:"",color:"green"},{default:i(()=>[t(A,{name:"checkmark"}),n(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const G2=Ce(N2,[["render",q2]]),U2="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",Y2=z({name:"PopupDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){const e=j(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,l=j(null),s=j(null),r=j(null),c=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,m=j(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,o=j(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,f=j(null),d=j(null),h=j(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,g=j(null),C=j(null),A=j(null),x=j(null),_=j(null),S=j(null),$=j(null),B=j(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,M=j(null),F=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,I=j(null),L=j(null),W=j(null),G=j(null),de=j(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,O=j(null),J=j(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:s,titledTrigger3:r,titledCode:c,triggerTriger:m,triggerCode:p,basicTrigger:o,basicCode:u,wideTrigger1:f,wideTrigger2:d,wideTrigger3:h,wideCode:v,positionTrigger1:g,positionTrigger2:C,positionTrigger3:A,positionTrigger4:x,positionTrigger5:_,positionTrigger6:S,positionTrigger7:$,positionTrigger8:B,positionCode:E,flowingTrigger:M,flowingCode:F,sizeTrigger1:I,sizeTrigger2:L,sizeTrigger3:W,sizeTrigger4:G,sizeTrigger5:de,sizeCode:Be,invertedTrigger1:O,invertedTrigger2:J,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),J2=w("p",null,[w("b",null,"2"),n(" projects, $10 a month ")],-1),W2=w("p",null,[w("b",null,"5"),n(" projects, $20 a month ")],-1),K2=w("p",null,[w("b",null,"8"),n(" projects, $25 a month ")],-1);function X2(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),u=b("sui-button"),f=b("sui-popup"),d=b("doc-example"),h=b("sui-image"),v=b("sui-card-header"),g=b("sui-card-description"),C=b("sui-card-content"),A=b("sui-card"),x=b("sui-rating"),_=b("sui-divider"),S=b("sui-grid-column"),$=b("sui-grid"),B=b("sui-container");return R(),pe("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(d,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:Ot,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Xa,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:hn,ref:"titledTrigger3"},null,512),t(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(A,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:U2}),t(C,null,{default:i(()=>[t(v,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(f,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(x,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(d,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(f,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t($,{centered:"",divided:"",columns:3},{default:i(()=>[t(S,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),J2,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),W2,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),K2,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(f,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(d,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const Q2=Ce(Y2,[["render",X2]]),Z2=z({name:"ProgressDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function eE(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-progress"),u=b("doc-example"),f=b("sui-segment"),d=b("sui-container");return R(),pe("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(d,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(o,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(o,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(o,{percent:25,disabled:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{percent:47,attached:"top"}),n(" La la la la "),t(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{percent:88,size:"tiny",label:"tiny"}),t(o,{percent:100,size:"small",label:"small",success:""}),t(o,{percent:83,label:"standard"}),t(o,{percent:73,size:"large",label:"large"}),t(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(o,{percent:32,color:"red"}),t(o,{percent:53,color:"orange"}),t(o,{percent:13,color:"yellow"}),t(o,{percent:37,color:"olive"}),t(o,{percent:83,color:"green"}),t(o,{percent:24,color:"teal"}),t(o,{percent:88,color:"blue"}),t(o,{percent:41,color:"violet"}),t(o,{percent:47,color:"purple"}),t(o,{percent:30,color:"pink"}),t(o,{percent:68,color:"brown"}),t(o,{percent:35,color:"grey"}),t(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const tE=Ce(Z2,[["render",eE]]),iE=z({name:"RatingDoc",components:{DocPageHeader:Ge,DocExample:Ie,PropertyListTable:_n},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),aE=w("br",null,null,-1),lE=w("br",null,null,-1),nE=w("br",null,null,-1),sE=w("br",null,null,-1),oE=w("br",null,null,-1),rE=w("br",null,null,-1),uE=w("br",null,null,-1),cE=w("br",null,null,-1),dE=w("br",null,null,-1),mE=w("br",null,null,-1),pE=w("br",null,null,-1),fE=w("br",null,null,-1),gE=w("br",null,null,-1),hE=w("br",null,null,-1),_E=w("br",null,null,-1),bE=w("br",null,null,-1),vE=w("br",null,null,-1),yE=w("br",null,null,-1),CE=w("br",null,null,-1),wE=w("br",null,null,-1),SE=w("br",null,null,-1),AE=w("br",null,null,-1),kE=w("br",null,null,-1),$E=w("br",null,null,-1),xE=w("br",null,null,-1),BE=w("br",null,null,-1),TE=w("br",null,null,-1),EE=w("br",null,null,-1),RE=w("br",null,null,-1),zE=w("br",null,null,-1),DE=w("br",null,null,-1),IE=w("br",null,null,-1),PE=w("br",null,null,-1),ME=w("br",null,null,-1),VE=w("br",null,null,-1),FE=w("br",null,null,-1),HE=w("br",null,null,-1),NE=w("br",null,null,-1),LE=w("br",null,null,-1),OE=w("br",null,null,-1),jE=w("br",null,null,-1),qE=w("br",null,null,-1),GE=w("br",null,null,-1),UE=w("br",null,null,-1),YE=w("br",null,null,-1),JE=w("br",null,null,-1),WE=w("br",null,null,-1),KE=w("br",null,null,-1);function XE(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-rating"),u=b("doc-example"),f=b("property-list-table"),d=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),C=b("sui-table-body"),A=b("sui-table"),x=b("sui-container");return R(),pe("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(o)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(o,{defaultRating:2,maxRating:4,color:"yellow"}),aE,lE,t(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),nE,sE,t(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),oE,rE,t(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),uE,cE,t(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),dE,mE,t(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),pE,fE,t(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(o,{defaultRating:1,maxRating:7,color:"red"}),gE,hE,t(o,{defaultRating:2,maxRating:7,color:"orange"}),_E,bE,t(o,{defaultRating:3,maxRating:7,color:"yellow"}),vE,yE,t(o,{defaultRating:4,maxRating:7,color:"olive"}),CE,wE,t(o,{defaultRating:5,maxRating:7,color:"green"}),SE,AE,t(o,{defaultRating:6,maxRating:7,color:"teal"}),kE,$E,t(o,{defaultRating:6,maxRating:7,color:"blue"}),xE,BE,t(o,{defaultRating:5,maxRating:7,color:"violet"}),TE,EE,t(o,{defaultRating:4,maxRating:7,color:"purple"}),RE,zE,t(o,{defaultRating:3,maxRating:7,color:"pink"}),DE,IE,t(o,{defaultRating:2,maxRating:7,color:"brown"}),PE,ME,t(o,{defaultRating:1,maxRating:7,color:"grey"}),VE,FE,t(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),HE,NE,t(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),LE,OE,t(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),jE,qE,t(o,{defaultRating:3,maxRating:4,color:"yellow"}),GE,UE,t(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),YE,JE,t(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),WE,KE,t(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.events,_=>(R(),V(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[n(ke(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[n(ke(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const QE=Ce(iE,[["render",XE]]),ZE=z({name:"SidebarDoc",components:{DocPageHeader:Ge,DocExample:Ie,PropertyListTable:_n},setup(){return{visible1:j(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),eR={class:"pusher"};function tR(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),u=b("sui-button"),f=b("sui-grid-column"),d=b("sui-menu-item"),h=b("sui-sidebar"),v=b("sui-image"),g=b("sui-segment"),C=b("sui-grid"),A=b("doc-example"),x=b("property-list-table"),_=b("sui-table-header-cell"),S=b("sui-table-row"),$=b("sui-table-header"),B=b("sui-table-cell"),E=b("sui-table-body"),M=b("sui-table"),F=b("sui-container");return R(),pe("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(F,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(A,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=I=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(o,{name:"arrow right"})]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(g,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=I=>e.visible1=I),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(d,null,{default:i(()=>[t(o,{name:"home"}),n(" Home ")]),_:1}),t(d,null,{default:i(()=>[t(o,{name:"gamepad"}),n(" Games ")]),_:1}),t(d,null,{default:i(()=>[t(o,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),w("div",eR,[t(g,null,{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(v,{src:Ae})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(x,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(M,{celled:""},{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.events,I=>(R(),V(S,{key:I.name},{default:i(()=>[t(B,null,{default:i(()=>[n(ke(I.name),1)]),_:2},1024),t(B,null,{default:i(()=>[n(ke(I.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const iR=Ce(ZE,[["render",tR]]),aR=z({name:"SliderDoc",components:{DocPageHeader:Ge,DocExample:Ie},setup(){const e=j(5),a='<sui-slider v-model="slider1" />',l=j(4),s='<sui-slider labeled v-model="slider2" />',r=j(6),c='<sui-slider labeled="ticked" v-model="slider3" />',m=j(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=j(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=j([]);f.value.push(20,60);const d='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=j(7),v='<sui-slider disabled v-model="slider7" />',g=j(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=j(3),x='<sui-slider reversed v-model="slider9" />',_=j(18),S='<sui-slider vertical v-model="slider10" :max="20" />',$=j(5),B=j(5),E=j(5),M=j(5),F=j(5),I=j(5),L=j(5),W=j(5),G=j(5),de=j(5),Be=j(5),O=j(5),J=j(5),ue=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,ie=`<sui-segment inverted>
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
</sui-segment>`,Te=j(5),Ue=j(5),tt=j(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:s,slider3:r,labeledTickedCode:c,slider4:m,customLabelsCode:p,slider5:o,stepCode:u,slider6:f,rangeCode:d,slider7:h,disabledCode:v,slider8:g,invertedCode:C,slider9:A,reversedCode:x,slider10:_,verticalCode:S,redSlider:$,orangeSlider:B,yellowSlider:E,oliveSlider:M,greenSlider:F,tealSlider:I,blueSlider:L,violetSlider:W,purpleSlider:G,pinkSlider:de,brownSlider:Be,greySlider:O,blackSlider:J,coloredCode:ue,invertedColoredCode:ie,smallSlider:Te,largeSlider:Ue,bigSlider:tt,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function lR(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-slider"),u=b("doc-example"),f=b("sui-segment"),d=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),C=b("sui-table-body"),A=b("sui-table"),x=b("sui-container");return R(),pe("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(o,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),n(" "+ke(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(o,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(o,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(o,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(o,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+ke(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(o,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+ke(e.slider6),1)]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(o,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),n(" "+ke(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(o,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),n(" "+ke(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(o,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(o,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(o,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(o,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Type")]),_:1}),t(d,null,{default:i(()=>[n("Default")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.properties,_=>(R(),V(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[n(ke(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[n(ke(_.type),1)]),_:2},1024),t(g,null,{default:i(()=>[n(ke(_.default),1)]),_:2},1024),t(g,null,{default:i(()=>[n(ke(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(d,null,{default:i(()=>[n("Name")]),_:1}),t(d,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.events,_=>(R(),V(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[n(ke(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[n(ke(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const nR=Ce(aR,[["render",lR]]),sR=z({name:"TabDoc",components:{DocPageHeader:Ge,DocExample:Ie,PropertyListTable:_n},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function oR(e,a,l,s,r,c){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-tab-panel"),u=b("sui-tab"),f=b("doc-example"),d=b("property-list-table"),h=b("sui-table-header-cell"),v=b("sui-table-row"),g=b("sui-table-header"),C=b("sui-table-cell"),A=b("sui-table-body"),x=b("sui-table"),_=b("sui-container");return R(),pe("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(f,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(p,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(d,{properties:e.tabProperties},null,8,["properties"]),t(p,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(d,{properties:e.tabPanelProperties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(x,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(R(!0),pe(we,null,Qe(e.events,S=>(R(),V(v,{key:S.name},{default:i(()=>[t(C,null,{default:i(()=>[n(ke(S.name),1)]),_:2},1024),t(C,null,{default:i(()=>[n(ke(S.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const rR=Ce(sR,[["render",oR]]),uR=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,cR={__name:"MinimalDoc",setup(e){const{toast:a}=at(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Minimal",code:uR},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},dR=`<template>
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
<\/script>`,mR={__name:"TitledDoc",setup(e){const{toast:a}=at(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Titled",code:dR},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},pR=`<template>
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
<\/script>`,fR={__name:"ProgressBarDoc",setup(e){const{toast:a}=at(),l=s=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:s})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Progress Bar",code:pR},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(c,{color:"red",onClick:r[0]||(r[0]=m=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},gR=`<template>
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
<\/script>`,hR={__name:"ToastTypeDoc",setup(e){const{toast:a}=at(),l=s=>{a({message:"You're using the good framework !",type:s})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Toast Type",code:gR},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(c,{onClick:r[2]||(r[2]=m=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},_R=`<template>
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
<\/script>`,bR={__name:"PositionDoc",setup(e){const{toast:a}=at(),l=s=>{a({position:s,message:"Look, I'm here !"})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Position",code:_R},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},vR=w("br",null,null,-1),yR=`<template>
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
<\/script>`,CR={__name:"AttachedPosition",setup(e){const{toast:a}=at(),l=s=>{a({attached:s,title:"Watch out!",message:`I am a ${s} attached toast`})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Attached Position",code:yR},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),vR,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},wR=`<template>
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
<\/script>`,SR={__name:"DirectionDoc",setup(e){const{toast:a}=at(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Direction",code:wR},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},AR=`<template>
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
<\/script>`,kR={__name:"CenterAligned",setup(e){const{toast:a}=at(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Center Aligned",code:AR},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},$R=`<template>
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
<\/script>`,xR={__name:"DurationDoc",setup(e){const{toast:a}=at(),l=s=>{a({displayTime:s,message:s===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Duration",code:$R},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(c,{onClick:r[0]||(r[0]=m=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(c,{onClick:r[1]||(r[1]=m=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},BR=`<template>
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
<\/script>`,TR={__name:"MessageStyleDoc",setup(e){const{toast:a}=at(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Use Message Style",code:BR},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},ER=`<template>
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
<\/script>`,RR={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=at(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(s,r)=>{const c=b("SuiButton");return R(),V(q,{label:"Increasing Progress Bar",code:ER},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(c,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},zR=`<template>
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
<\/script>`,DR={__name:"ColorVariantsDoc",setup(e){const{toast:a}=at(),l=j(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:s[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%s.length};return(c,m)=>{const p=b("SuiButton");return R(),V(q,{label:"Color Variants",code:zR},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},IR={__name:"InvertedColorsDoc",setup(e){const{toast:a}=at(),l=j(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:s[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%s.length};return(c,m)=>{const p=b("SuiButton");return R(),V(q,{label:"Inverted Colors",code:c.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},PR=`<template>
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
<\/script>`,MR={__name:"ActionGeneralDoc",setup(e){const{toast:a}=at(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[Y(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>[Y(ee,{name:"check"}),"Yes"]),Y(P,{color:"red",icon:!0},()=>[Y(ee,{name:"ban"})]),Y(P,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(s,r)=>(R(),V(q,{label:"General",code:PR},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(y(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},VR=`<template>
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
<\/script>`,FR={__name:"ActionBasicDoc",setup(e){const{toast:a}=at(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[Y(P,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(s,r)=>(R(),V(q,{label:"Basic",code:VR},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(y(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},HR=`<template>
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
<\/script>`,NR={__name:"ActionAttachedDoc",setup(e){const{toast:a}=at(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[Y(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),Y(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(s,r)=>(R(),V(q,{label:"Attached",code:HR},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(y(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},LR=`<template>
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
<\/script>`,OR={__name:"ActionVerticalDoc",setup(e){const{toast:a}=at(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[Y(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),Y(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(s,r)=>(R(),V(q,{label:"Vertical",code:LR},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(y(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},jR=w("br",null,null,-1),qR=`<template>
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
<\/script>`,GR={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=at(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[Y(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),Y(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(s,r)=>(R(),V(q,{label:"Vertical Attached",code:qR},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),jR,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(y(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},UR={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:cR},{id:"titled",label:"Titled",category:"Types",component:mR},{id:"progress-bar",label:"Progress Bar",category:"Types",component:fR},{id:"toast-type",label:"Toast Type",category:"Variations",component:hR},{id:"position",label:"Position",category:"Variations",component:bR},{id:"attached-position",label:"Attached Position",category:"Variations",component:CR},{id:"direction",label:"Direction",category:"Variations",component:SR},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:kR},{id:"duration",label:"Duration",category:"Variations",component:xR},{id:"message-style",label:"Use Message Style",category:"Variations",component:TR},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:RR},{id:"color-variants",label:"Color Variants",category:"Variations",component:DR},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:IR},{id:"general",label:"General",category:"Actions",component:MR},{id:"action-basic",label:"Basic",category:"Actions",component:FR},{id:"action-attached",label:"Attached",category:"Actions",component:NR},{id:"action-vertical",label:"Vertical",category:"Actions",component:OR},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:GR}];return(l,s)=>(R(),V(Zt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},YR=[{path:"/",component:K_,children:[{path:"/",component:mb},{path:"elements/button",component:Mw},{path:"elements/container",component:Jw},{path:"elements/divider",component:vS},{path:"elements/emoji",component:ES},{path:"elements/flag",component:PS},{path:"elements/header",component:pA},{path:"elements/icon",component:LA},{path:"elements/image",component:l0},{path:"elements/input",component:T0},{path:"elements/label",component:q0},{path:"elements/list",component:uk},{path:"elements/loader",component:pk},{path:"elements/rail",component:_k},{path:"elements/reveal",component:wk},{path:"elements/segment",component:Yk},{path:"elements/step",component:Zk},{path:"collections/breadcrumb",component:i$},{path:"collections/form",component:n$},{path:"collections/grid",component:u$},{path:"collections/menu",component:_$},{path:"collections/message",component:T$},{path:"collections/table",component:O$},{path:"views/advertisement",component:Y$},{path:"views/card",component:Bx},{path:"views/comment",component:xB},{path:"views/feed",component:WB},{path:"views/item",component:FT},{path:"views/statistic",component:YT},{path:"modules/accordion",component:h2},{path:"modules/calendar",component:v2},{path:"modules/checkbox",component:T2},{path:"modules/dimmer",component:z2},{path:"modules/dropdown",component:P2},{path:"modules/embed",component:F2},{path:"modules/modal",component:G2},{path:"modules/popup",component:Q2},{path:"modules/progress",component:tE},{path:"modules/rating",component:QE},{path:"modules/sidebar",component:iR},{path:"modules/slider",component:nR},{path:"modules/tab",component:rR},{path:"modules/toast",component:UR}]}],JR=T_({history:qh("/vue-fomantic-ui/"),routes:YR});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=s.variable[1].inside,m=0;m<r.length;m++)c[r[m]]=e.languages.bash[r[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const yo=vm($h);yo.use(JR);yo.use(dC);yo.mount("#app");

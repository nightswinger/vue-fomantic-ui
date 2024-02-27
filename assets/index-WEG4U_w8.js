(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(r){if(r.ep)return;r.ep=!0;const d=n(r);fetch(r.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gl(e,a){const n=new Set(e.split(","));return a?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Ne={},Yi=[],ft=()=>{},up=()=>!1,Xa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Rs=e=>e.startsWith("onUpdate:"),Je=Object.assign,zs=(e,a)=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)},dp=Object.prototype.hasOwnProperty,De=(e,a)=>dp.call(e,a),me=Array.isArray,Ji=e=>pa(e)==="[object Map]",Mi=e=>pa(e)==="[object Set]",Co=e=>pa(e)==="[object Date]",cp=e=>pa(e)==="[object RegExp]",ye=e=>typeof e=="function",We=e=>typeof e=="string",fi=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Ds=e=>(Le(e)||ye(e))&&ye(e.then)&&ye(e.catch),xd=Object.prototype.toString,pa=e=>xd.call(e),mp=e=>pa(e).slice(8,-1),Td=e=>pa(e)==="[object Object]",Is=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ea=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},pp=/-(\w)/g,ct=Ul(e=>e.replace(pp,(a,n)=>n?n.toUpperCase():"")),fp=/\B([A-Z])/g,St=Ul(e=>e.replace(fp,"-$1").toLowerCase()),Qa=Ul(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ra=Ul(e=>e?`on${Qa(e)}`:""),Mt=(e,a)=>!Object.is(e,a),Wi=(e,a)=>{for(let n=0;n<e.length;n++)e[n](a)},Sl=(e,a,n)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:n})},Na=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Al=e=>{const a=We(e)?Number(e):NaN;return isNaN(a)?e:a};let wo;const Ed=()=>wo||(wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",hp=Gl(gp);function fa(e){if(me(e)){const a={};for(let n=0;n<e.length;n++){const s=e[n],r=We(s)?yp(s):fa(s);if(r)for(const d in r)a[d]=r[d]}return a}else if(We(e)||Le(e))return e}const _p=/;(?![^(]*\))/g,bp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function yp(e){const a={};return e.replace(vp,"").split(_p).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function Za(e){let a="";if(We(e))a=e;else if(me(e))for(let n=0;n<e.length;n++){const s=Za(e[n]);s&&(a+=s+" ")}else if(Le(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}function Cp(e){if(!e)return null;let{class:a,style:n}=e;return a&&!We(a)&&(e.class=Za(a)),n&&(e.style=fa(n)),e}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sp=Gl(wp);function Rd(e){return!!e||e===""}function Ap(e,a){if(e.length!==a.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Wt(e[s],a[s]);return n}function Wt(e,a){if(e===a)return!0;let n=Co(e),s=Co(a);if(n||s)return n&&s?e.getTime()===a.getTime():!1;if(n=fi(e),s=fi(a),n||s)return e===a;if(n=me(e),s=me(a),n||s)return n&&s?Ap(e,a):!1;if(n=Le(e),s=Le(a),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,d=Object.keys(a).length;if(r!==d)return!1;for(const m in e){const p=e.hasOwnProperty(m),o=a.hasOwnProperty(m);if(p&&!o||!p&&o||!Wt(e[m],a[m]))return!1}}return String(e)===String(a)}function Yl(e,a){return e.findIndex(n=>Wt(n,a))}const xe=e=>We(e)?e:e==null?"":me(e)||Le(e)&&(e.toString===xd||!ye(e.toString))?JSON.stringify(e,zd,2):String(e),zd=(e,a)=>a&&a.__v_isRef?zd(e,a.value):Ji(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((n,[s,r],d)=>(n[_n(s,d)+" =>"]=r,n),{})}:Mi(a)?{[`Set(${a.size})`]:[...a.values()].map(n=>_n(n))}:fi(a)?_n(a):Le(a)&&!me(a)&&!Td(a)?String(a):a,_n=(e,a="")=>{var n;return fi(e)?`Symbol(${(n=e.description)!=null?n:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Ps{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!a&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const n=yt;try{return yt=this,a()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(a){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(e){return new Ps(e)}function Dd(e,a=yt){a&&a.active&&a.effects.push(e)}function Ms(){return yt}function Id(e){yt&&yt.cleanups.push(e)}let $i;class la{constructor(a,n,s,r){this.fn=a,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Dd(this,r)}get dirty(){if(this._dirtyLevel===1){Vi();for(let a=0;a<this._depsLength;a++){const n=this.deps[a];if(n.computed&&($p(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Fi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=ci,n=$i;try{return ci=!0,$i=this,this._runnings++,So(this),this.fn()}finally{Ao(this),this._runnings--,$i=n,ci=a}}stop(){var a;this.active&&(So(this),Ao(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function $p(e){return e.value}function So(e){e._trackId++,e._depsLength=0}function Ao(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Pd(e.deps[a],e);e.deps.length=e._depsLength}}function Pd(e,a){const n=e.get(a);n!==void 0&&a._trackId!==n&&(e.delete(a),e.size===0&&e.cleanup())}function Bp(e,a){e.effect instanceof la&&(e=e.effect.fn);const n=new la(e,ft,()=>{n.dirty&&n.run()});a&&(Je(n,a),a.scope&&Dd(n,a.scope)),(!a||!a.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function xp(e){e.effect.stop()}let ci=!0,On=0;const Md=[];function Vi(){Md.push(ci),ci=!1}function Fi(){const e=Md.pop();ci=e===void 0?!0:e}function Vs(){On++}function Fs(){for(On--;!On&&jn.length;)jn.shift()()}function Vd(e,a,n){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const s=e.deps[e._depsLength];s!==a?(s&&Pd(s,e),e.deps[e._depsLength++]=a):e._depsLength++}}const jn=[];function Fd(e,a,n){Vs();for(const s of e.keys())if(s._dirtyLevel<a&&e.get(s)===s._trackId){const r=s._dirtyLevel;s._dirtyLevel=a,r===0&&(s._shouldSchedule=!0,s.trigger())}Nd(e),Fs()}function Nd(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,jn.push(a.scheduler))}const Hd=(e,a)=>{const n=new Map;return n.cleanup=e,n.computed=a,n},kl=new WeakMap,Bi=Symbol(""),qn=Symbol("");function _t(e,a,n){if(ci&&$i){let s=kl.get(e);s||kl.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Hd(()=>s.delete(n))),Vd($i,r)}}function Yt(e,a,n,s,r,d){const m=kl.get(e);if(!m)return;let p=[];if(a==="clear")p=[...m.values()];else if(n==="length"&&me(e)){const o=Number(s);m.forEach((u,f)=>{(f==="length"||!fi(f)&&f>=o)&&p.push(u)})}else switch(n!==void 0&&p.push(m.get(n)),a){case"add":me(e)?Is(n)&&p.push(m.get("length")):(p.push(m.get(Bi)),Ji(e)&&p.push(m.get(qn)));break;case"delete":me(e)||(p.push(m.get(Bi)),Ji(e)&&p.push(m.get(qn)));break;case"set":Ji(e)&&p.push(m.get(Bi));break}Vs();for(const o of p)o&&Fd(o,2);Fs()}function Tp(e,a){var n;return(n=kl.get(e))==null?void 0:n.get(a)}const Ep=Gl("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fi)),ko=Rp();function Rp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...n){const s=Re(this);for(let d=0,m=this.length;d<m;d++)_t(s,"get",d+"");const r=s[a](...n);return r===-1||r===!1?s[a](...n.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...n){Vi(),Vs();const s=Re(this)[a].apply(this,n);return Fs(),Fi(),s}}),e}function zp(e){const a=Re(this);return _t(a,"has",e),a.hasOwnProperty(e)}class Od{constructor(a=!1,n=!1){this._isReadonly=a,this._shallow=n}get(a,n,s){const r=this._isReadonly,d=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return d;if(n==="__v_raw")return s===(r?d?Jd:Yd:d?Ud:Gd).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(s)?a:void 0;const m=me(a);if(!r){if(m&&De(ko,n))return Reflect.get(ko,n,s);if(n==="hasOwnProperty")return zp}const p=Reflect.get(a,n,s);return(fi(n)?Ld.has(n):Ep(n))||(r||_t(a,"get",n),d)?p:nt(p)?m&&Is(n)?p:p.value:Le(p)?r?Hs(p):Kt(p):p}}class jd extends Od{constructor(a=!1){super(!1,a)}set(a,n,s,r){let d=a[n];if(!this._shallow){const o=Ri(d);if(!Ha(s)&&!Ri(s)&&(d=Re(d),s=Re(s)),!me(a)&&nt(d)&&!nt(s))return o?!1:(d.value=s,!0)}const m=me(a)&&Is(n)?Number(n)<a.length:De(a,n),p=Reflect.set(a,n,s,r);return a===Re(r)&&(m?Mt(s,d)&&Yt(a,"set",n,s):Yt(a,"add",n,s)),p}deleteProperty(a,n){const s=De(a,n);a[n];const r=Reflect.deleteProperty(a,n);return r&&s&&Yt(a,"delete",n,void 0),r}has(a,n){const s=Reflect.has(a,n);return(!fi(n)||!Ld.has(n))&&_t(a,"has",n),s}ownKeys(a){return _t(a,"iterate",me(a)?"length":Bi),Reflect.ownKeys(a)}}class qd extends Od{constructor(a=!1){super(!0,a)}set(a,n){return!0}deleteProperty(a,n){return!0}}const Dp=new jd,Ip=new qd,Pp=new jd(!0),Mp=new qd(!0),Ns=e=>e,Jl=e=>Reflect.getPrototypeOf(e);function ll(e,a,n=!1,s=!1){e=e.__v_raw;const r=Re(e),d=Re(a);n||(Mt(a,d)&&_t(r,"get",a),_t(r,"get",d));const{has:m}=Jl(r),p=s?Ns:n?js:La;if(m.call(r,a))return p(e.get(a));if(m.call(r,d))return p(e.get(d));e!==r&&e.get(a)}function nl(e,a=!1){const n=this.__v_raw,s=Re(n),r=Re(e);return a||(Mt(e,r)&&_t(s,"has",e),_t(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function sl(e,a=!1){return e=e.__v_raw,!a&&_t(Re(e),"iterate",Bi),Reflect.get(e,"size",e)}function $o(e){e=Re(e);const a=Re(this);return Jl(a).has.call(a,e)||(a.add(e),Yt(a,"add",e,e)),this}function Bo(e,a){a=Re(a);const n=Re(this),{has:s,get:r}=Jl(n);let d=s.call(n,e);d||(e=Re(e),d=s.call(n,e));const m=r.call(n,e);return n.set(e,a),d?Mt(a,m)&&Yt(n,"set",e,a):Yt(n,"add",e,a),this}function xo(e){const a=Re(this),{has:n,get:s}=Jl(a);let r=n.call(a,e);r||(e=Re(e),r=n.call(a,e)),s&&s.call(a,e);const d=a.delete(e);return r&&Yt(a,"delete",e,void 0),d}function To(){const e=Re(this),a=e.size!==0,n=e.clear();return a&&Yt(e,"clear",void 0,void 0),n}function ol(e,a){return function(s,r){const d=this,m=d.__v_raw,p=Re(m),o=a?Ns:e?js:La;return!e&&_t(p,"iterate",Bi),m.forEach((u,f)=>s.call(r,o(u),o(f),d))}}function rl(e,a,n){return function(...s){const r=this.__v_raw,d=Re(r),m=Ji(d),p=e==="entries"||e===Symbol.iterator&&m,o=e==="keys"&&m,u=r[e](...s),f=n?Ns:a?js:La;return!a&&_t(d,"iterate",o?qn:Bi),{next(){const{value:c,done:h}=u.next();return h?{value:c,done:h}:{value:p?[f(c[0]),f(c[1])]:f(c),done:h}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Vp(){const e={get(d){return ll(this,d)},get size(){return sl(this)},has:nl,add:$o,set:Bo,delete:xo,clear:To,forEach:ol(!1,!1)},a={get(d){return ll(this,d,!1,!0)},get size(){return sl(this)},has:nl,add:$o,set:Bo,delete:xo,clear:To,forEach:ol(!1,!0)},n={get(d){return ll(this,d,!0)},get size(){return sl(this,!0)},has(d){return nl.call(this,d,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ol(!0,!1)},s={get(d){return ll(this,d,!0,!0)},get size(){return sl(this,!0)},has(d){return nl.call(this,d,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:ol(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=rl(d,!1,!1),n[d]=rl(d,!0,!1),a[d]=rl(d,!1,!0),s[d]=rl(d,!0,!0)}),[e,n,a,s]}const[Fp,Np,Hp,Lp]=Vp();function Wl(e,a){const n=a?e?Lp:Hp:e?Np:Fp;return(s,r,d)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(De(n,r)&&r in s?n:s,r,d)}const Op={get:Wl(!1,!1)},jp={get:Wl(!1,!0)},qp={get:Wl(!0,!1)},Gp={get:Wl(!0,!0)},Gd=new WeakMap,Ud=new WeakMap,Yd=new WeakMap,Jd=new WeakMap;function Up(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Up(mp(e))}function Kt(e){return Ri(e)?e:Kl(e,!1,Dp,Op,Gd)}function Wd(e){return Kl(e,!1,Pp,jp,Ud)}function Hs(e){return Kl(e,!0,Ip,qp,Yd)}function Jp(e){return Kl(e,!0,Mp,Gp,Jd)}function Kl(e,a,n,s,r){if(!Le(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=r.get(e);if(d)return d;const m=Yp(e);if(m===0)return e;const p=new Proxy(e,m===2?s:n);return r.set(e,p),p}function xi(e){return Ri(e)?xi(e.__v_raw):!!(e&&e.__v_isReactive)}function Ri(e){return!!(e&&e.__v_isReadonly)}function Ha(e){return!!(e&&e.__v_isShallow)}function Ls(e){return xi(e)||Ri(e)}function Re(e){const a=e&&e.__v_raw;return a?Re(a):e}function Os(e){return Sl(e,"__v_skip",!0),e}const La=e=>Le(e)?Kt(e):e,js=e=>Le(e)?Hs(e):e;class Kd{constructor(a,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new la(()=>a(this._value),()=>Ki(this,1),()=>this.dep&&Nd(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=Re(this);return(!a._cacheable||a.effect.dirty)&&Mt(a._value,a._value=a.effect.run())&&Ki(a,2),qs(a),a.effect._dirtyLevel>=1&&Ki(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Wp(e,a,n=!1){let s,r;const d=ye(e);return d?(s=e,r=ft):(s=e.get,r=e.set),new Kd(s,r,d||!r,n)}function qs(e){ci&&$i&&(e=Re(e),Vd($i,e.dep||(e.dep=Hd(()=>e.dep=void 0,e instanceof Kd?e:void 0))))}function Ki(e,a=2,n){e=Re(e);const s=e.dep;s&&Fd(s,a)}function nt(e){return!!(e&&e.__v_isRef===!0)}function j(e){return Qd(e,!1)}function Xd(e){return Qd(e,!0)}function Qd(e,a){return nt(e)?e:new Kp(e,a)}class Kp{constructor(a,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?a:Re(a),this._value=n?a:La(a)}get value(){return qs(this),this._value}set value(a){const n=this.__v_isShallow||Ha(a)||Ri(a);a=n?a:Re(a),Mt(a,this._rawValue)&&(this._rawValue=a,this._value=n?a:La(a),Ki(this,2))}}function Xp(e){Ki(e,2)}function C(e){return nt(e)?e.value:e}function Qp(e){return ye(e)?e():C(e)}const Zp={get:(e,a,n)=>C(Reflect.get(e,a,n)),set:(e,a,n,s)=>{const r=e[a];return nt(r)&&!nt(n)?(r.value=n,!0):Reflect.set(e,a,n,s)}};function Gs(e){return xi(e)?e:new Proxy(e,Zp)}class ef{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=a(()=>qs(this),()=>Ki(this));this._get=n,this._set=s}get value(){return this._get()}set value(a){this._set(a)}}function Zd(e){return new ef(e)}function tf(e){const a=me(e)?new Array(e.length):{};for(const n in e)a[n]=ec(e,n);return a}class af{constructor(a,n,s){this._object=a,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Tp(Re(this._object),this._key)}}class lf{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Gn(e,a,n){return nt(e)?e:ye(e)?new lf(e):Le(e)&&arguments.length>1?ec(e,a,n):j(e)}function ec(e,a,n){const s=e[a];return nt(s)?s:new af(e,a,n)}const nf={GET:"get",HAS:"has",ITERATE:"iterate"},sf={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function of(e,a){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Jt(e,a,n,s){let r;try{r=s?e(...s):e()}catch(d){Ni(d,a,n)}return r}function At(e,a,n,s){if(ye(e)){const d=Jt(e,a,n,s);return d&&Ds(d)&&d.catch(m=>{Ni(m,a,n)}),d}const r=[];for(let d=0;d<e.length;d++)r.push(At(e[d],a,n,s));return r}function Ni(e,a,n,s=!0){const r=a?a.vnode:null;if(a){let d=a.parent;const m=a.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;d;){const u=d.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,m,p)===!1)return}d=d.parent}const o=a.appContext.config.errorHandler;if(o){Jt(o,null,10,[e,m,p]);return}}df(e,n,r,s)}function df(e,a,n,s=!0){console.error(e)}let Oa=!1,Un=!1;const ot=[];let Nt=0;const Xi=[];let li=null,Ai=0;const tc=Promise.resolve();let Us=null;function ga(e){const a=Us||tc;return e?a.then(this?e.bind(this):e):a}function cf(e){let a=Nt+1,n=ot.length;for(;a<n;){const s=a+n>>>1,r=ot[s],d=ja(r);d<e||d===e&&r.pre?a=s+1:n=s}return a}function Xl(e){(!ot.length||!ot.includes(e,Oa&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?ot.push(e):ot.splice(cf(e.id),0,e),ic())}function ic(){!Oa&&!Un&&(Un=!0,Us=tc.then(ac))}function mf(e){const a=ot.indexOf(e);a>Nt&&ot.splice(a,1)}function $l(e){me(e)?Xi.push(...e):(!li||!li.includes(e,e.allowRecurse?Ai+1:Ai))&&Xi.push(e),ic()}function Eo(e,a,n=Oa?Nt+1:0){for(;n<ot.length;n++){const s=ot[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;ot.splice(n,1),n--,s()}}}function Bl(e){if(Xi.length){const a=[...new Set(Xi)].sort((n,s)=>ja(n)-ja(s));if(Xi.length=0,li){li.push(...a);return}for(li=a,Ai=0;Ai<li.length;Ai++)li[Ai]();li=null,Ai=0}}const ja=e=>e.id==null?1/0:e.id,pf=(e,a)=>{const n=ja(e)-ja(a);if(n===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return n};function ac(e){Un=!1,Oa=!0,ot.sort(pf);try{for(Nt=0;Nt<ot.length;Nt++){const a=ot[Nt];a&&a.active!==!1&&Jt(a,null,14)}}finally{Nt=0,ot.length=0,Bl(),Oa=!1,Us=null,(ot.length||Xi.length)&&ac()}}let qi,ul=[];function lc(e,a){var n,s;qi=e,qi?(qi.enabled=!0,ul.forEach(({event:r,args:d})=>qi.emit(r,...d)),ul=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{lc(d,a)}),setTimeout(()=>{qi||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ul=[])},3e3)):ul=[]}function ff(e,a,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ne;let r=n;const d=a.startsWith("update:"),m=d&&a.slice(7);if(m&&m in s){const f=`${m==="modelValue"?"model":m}Modifiers`,{number:c,trim:h}=s[f]||Ne;h&&(r=n.map(v=>We(v)?v.trim():v)),c&&(r=n.map(Na))}let p,o=s[p=Ra(a)]||s[p=Ra(ct(a))];!o&&d&&(o=s[p=Ra(St(a))]),o&&At(o,e,6,r);const u=s[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,At(u,e,6,r)}}function nc(e,a,n=!1){const s=a.emitsCache,r=s.get(e);if(r!==void 0)return r;const d=e.emits;let m={},p=!1;if(!ye(e)){const o=u=>{const f=nc(u,a,!0);f&&(p=!0,Je(m,f))};!n&&a.mixins.length&&a.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!d&&!p?(Le(e)&&s.set(e,null),null):(me(d)?d.forEach(o=>m[o]=null):Je(m,d),Le(e)&&s.set(e,m),m)}function Ql(e,a){return!e||!Xa(a)?!1:(a=a.slice(2).replace(/Once$/,""),De(e,a[0].toLowerCase()+a.slice(1))||De(e,St(a))||De(e,a))}let Xe=null,Zl=null;function qa(e){const a=Xe;return Xe=e,Zl=e&&e.type.__scopeId||null,a}function sc(e){Zl=e}function oc(){Zl=null}const gf=e=>i;function i(e,a=Xe,n){if(!a||e._n)return e;const s=(...r)=>{s._d&&es(-1);const d=qa(a);let m;try{m=e(...r)}finally{qa(d),s._d&&es(1)}return m};return s._n=!0,s._c=!0,s._d=!0,s}function yl(e){const{type:a,vnode:n,proxy:s,withProxy:r,props:d,propsOptions:[m],slots:p,attrs:o,emit:u,render:f,renderCache:c,data:h,setupState:v,ctx:g,inheritAttrs:y}=e;let A,B;const _=qa(e);try{if(n.shapeFlag&4){const $=r||s,x=$;A=Ct(f.call(x,$,c,d,v,h,g)),B=o}else{const $=a;A=Ct($.length>1?$(d,{attrs:o,slots:p,emit:u}):$(d,null)),B=a.props?o:_f(o)}}catch($){Ia.length=0,Ni($,e,1),A=t(ut)}let S=A;if(B&&y!==!1){const $=Object.keys(B),{shapeFlag:x}=S;$.length&&x&7&&(m&&$.some(Rs)&&(B=bf(B,m)),S=Ht(S,B))}return n.dirs&&(S=Ht(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),A=S,qa(_),A}function hf(e,a=!0){let n;for(let s=0;s<e.length;s++){const r=e[s];if(Rt(r)){if(r.type!==ut||r.children==="v-if"){if(n)return;n=r}}else return}return n}const _f=e=>{let a;for(const n in e)(n==="class"||n==="style"||Xa(n))&&((a||(a={}))[n]=e[n]);return a},bf=(e,a)=>{const n={};for(const s in e)(!Rs(s)||!(s.slice(9)in a))&&(n[s]=e[s]);return n};function vf(e,a,n){const{props:s,children:r,component:d}=e,{props:m,children:p,patchFlag:o}=a,u=d.emitsOptions;if(a.dirs||a.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?Ro(s,m,u):!!m;if(o&8){const f=a.dynamicProps;for(let c=0;c<f.length;c++){const h=f[c];if(m[h]!==s[h]&&!Ql(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:s===m?!1:s?m?Ro(s,m,u):!0:!!m;return!1}function Ro(e,a,n){const s=Object.keys(a);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const d=s[r];if(a[d]!==e[d]&&!Ql(n,d))return!0}return!1}function Ys({vnode:e,parent:a},n){for(;a;){const s=a.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=a.vnode).el=n,a=a.parent;else break}}const Js="components",yf="directives";function b(e,a){return Ws(Js,e,!0,a)||e}const rc=Symbol.for("v-ndc");function uc(e){return We(e)?Ws(Js,e,!1)||e:e||rc}function en(e){return Ws(yf,e)}function Ws(e,a,n=!0,s=!1){const r=Xe||Qe;if(r){const d=r.type;if(e===Js){const p=ns(d,!1);if(p&&(p===a||p===ct(a)||p===Qa(ct(a))))return d}const m=zo(r[e]||d[e],a)||zo(r.appContext[e],a);return!m&&s?d:m}}function zo(e,a){return e&&(e[a]||e[ct(a)]||e[Qa(ct(a))])}const dc=e=>e.__isSuspense;let Yn=0;const Cf={name:"Suspense",__isSuspense:!0,process(e,a,n,s,r,d,m,p,o,u){if(e==null)Sf(a,n,s,r,d,m,p,o,u);else{if(d&&d.deps>0){a.suspense=e.suspense;return}Af(e,a,n,s,r,m,p,o,u)}},hydrate:kf,create:Ks,normalize:$f},wf=Cf;function Ga(e,a){const n=e.props&&e.props[a];ye(n)&&n()}function Sf(e,a,n,s,r,d,m,p,o){const{p:u,o:{createElement:f}}=o,c=f("div"),h=e.suspense=Ks(e,r,s,a,c,n,d,m,p,o);u(null,h.pendingBranch=e.ssContent,c,null,s,h,d,m),h.deps>0?(Ga(e,"onPending"),Ga(e,"onFallback"),u(null,e.ssFallback,a,n,s,null,d,m),Qi(h,e.ssFallback)):h.resolve(!1,!0)}function Af(e,a,n,s,r,d,m,p,{p:o,um:u,o:{createElement:f}}){const c=a.suspense=e.suspense;c.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:A,isHydrating:B}=c;if(y)c.pendingBranch=h,It(h,y)?(o(y,h,c.hiddenContainer,null,r,c,d,m,p),c.deps<=0?c.resolve():A&&(B||(o(g,v,n,s,r,null,d,m,p),Qi(c,v)))):(c.pendingId=Yn++,B?(c.isHydrating=!1,c.activeBranch=y):u(y,r,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),A?(o(null,h,c.hiddenContainer,null,r,c,d,m,p),c.deps<=0?c.resolve():(o(g,v,n,s,r,null,d,m,p),Qi(c,v))):g&&It(h,g)?(o(g,h,n,s,r,c,d,m,p),c.resolve(!0)):(o(null,h,c.hiddenContainer,null,r,c,d,m,p),c.deps<=0&&c.resolve()));else if(g&&It(h,g))o(g,h,n,s,r,c,d,m,p),Qi(c,h);else if(Ga(a,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=Yn++,o(null,h,c.hiddenContainer,null,r,c,d,m,p),c.deps<=0)c.resolve();else{const{timeout:_,pendingId:S}=c;_>0?setTimeout(()=>{c.pendingId===S&&c.fallback(v)},_):_===0&&c.fallback(v)}}function Ks(e,a,n,s,r,d,m,p,o,u,f=!1){const{p:c,m:h,um:v,n:g,o:{parentNode:y,remove:A}}=u;let B;const _=Bf(e);_&&a!=null&&a.pendingBranch&&(B=a.pendingId,a.deps++);const S=e.props?Al(e.props.timeout):void 0,$=d,x={vnode:e,parent:a,parentComponent:n,namespace:m,container:s,hiddenContainer:r,deps:0,pendingId:Yn++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,M=!1){const{vnode:V,activeBranch:I,pendingBranch:L,pendingId:W,effects:q,parentComponent:ce,container:Be}=x;let O=!1;x.isHydrating?x.isHydrating=!1:E||(O=I&&L.transition&&L.transition.mode==="out-in",O&&(I.transition.afterLeave=()=>{W===x.pendingId&&(h(L,Be,d===$?g(I):d,0),$l(q))}),I&&(y(I.el)!==x.hiddenContainer&&(d=g(I)),v(I,ce,x,!0)),O||h(L,Be,d,0)),Qi(x,L),x.pendingBranch=null,x.isInFallback=!1;let Y=x.parent,ue=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...q),ue=!0;break}Y=Y.parent}!ue&&!O&&$l(q),x.effects=[],_&&a&&a.pendingBranch&&B===a.pendingId&&(a.deps--,a.deps===0&&!M&&a.resolve()),Ga(V,"onResolve")},fallback(E){if(!x.pendingBranch)return;const{vnode:M,activeBranch:V,parentComponent:I,container:L,namespace:W}=x;Ga(M,"onFallback");const q=g(V),ce=()=>{x.isInFallback&&(c(null,E,L,q,I,null,W,p,o),Qi(x,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(V.transition.afterLeave=ce),x.isInFallback=!0,v(V,I,null,!0),Be||ce()},move(E,M,V){x.activeBranch&&h(x.activeBranch,E,M,V),x.container=E},next(){return x.activeBranch&&g(x.activeBranch)},registerDep(E,M){const V=!!x.pendingBranch;V&&x.deps++;const I=E.vnode.el;E.asyncDep.catch(L=>{Ni(L,E,0)}).then(L=>{if(E.isUnmounted||x.isUnmounted||x.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:W}=E;as(E,L,!1),I&&(W.el=I);const q=!I&&E.subTree.el;M(E,W,y(I||E.subTree.el),I?null:g(E.subTree),x,m,o),q&&A(q),Ys(E,W.el),V&&--x.deps===0&&x.resolve()})},unmount(E,M){x.isUnmounted=!0,x.activeBranch&&v(x.activeBranch,n,E,M),x.pendingBranch&&v(x.pendingBranch,n,E,M)}};return x}function kf(e,a,n,s,r,d,m,p,o){const u=a.suspense=Ks(a,s,n,e.parentNode,document.createElement("div"),null,r,d,m,p,!0),f=o(e,u.pendingBranch=a.ssContent,n,u,d,m);return u.deps===0&&u.resolve(!1,!0),f}function $f(e){const{shapeFlag:a,children:n}=e,s=a&32;e.ssContent=Do(s?n.default:n),e.ssFallback=s?Do(n.fallback):t(ut)}function Do(e){let a;if(ye(e)){const n=Ii&&e._c;n&&(e._d=!1,R()),e=e(),n&&(e._d=!0,a=gt,Lc())}return me(e)&&(e=hf(e)),e=Ct(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(n=>n!==e)),e}function cc(e,a){a&&a.pendingBranch?me(e)?a.effects.push(...e):a.effects.push(e):$l(e)}function Qi(e,a){e.activeBranch=a;const{vnode:n,parentComponent:s}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,Ys(s,r))}function Bf(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const mc=Symbol.for("v-scx"),pc=()=>Me(mc);function Xs(e,a){return el(e,null,a)}function fc(e,a){return el(e,null,{flush:"post"})}function gc(e,a){return el(e,null,{flush:"sync"})}const dl={};function rt(e,a,n){return el(e,a,n)}function el(e,a,{immediate:n,deep:s,flush:r,once:d,onTrack:m,onTrigger:p}=Ne){if(a&&d){const E=a;a=(...M)=>{E(...M),x()}}const o=Qe,u=E=>s===!0?E:ki(E,s===!1?1:void 0);let f,c=!1,h=!1;if(nt(e)?(f=()=>e.value,c=Ha(e)):xi(e)?(f=()=>u(e),c=!0):me(e)?(h=!0,c=e.some(E=>xi(E)||Ha(E)),f=()=>e.map(E=>{if(nt(E))return E.value;if(xi(E))return u(E);if(ye(E))return Jt(E,o,2)})):ye(e)?a?f=()=>Jt(e,o,2):f=()=>(v&&v(),At(e,o,3,[g])):f=ft,a&&s){const E=f;f=()=>ki(E())}let v,g=E=>{v=S.onStop=()=>{Jt(E,o,4),v=S.onStop=void 0}},y;if(al)if(g=ft,a?n&&At(a,o,3,[f(),h?[]:void 0,g]):f(),r==="sync"){const E=pc();y=E.__watcherHandles||(E.__watcherHandles=[])}else return ft;let A=h?new Array(e.length).fill(dl):dl;const B=()=>{if(!(!S.active||!S.dirty))if(a){const E=S.run();(s||c||(h?E.some((M,V)=>Mt(M,A[V])):Mt(E,A)))&&(v&&v(),At(a,o,3,[E,A===dl?void 0:h&&A[0]===dl?[]:A,g]),A=E)}else S.run()};B.allowRecurse=!!a;let _;r==="sync"?_=B:r==="post"?_=()=>at(B,o&&o.suspense):(B.pre=!0,o&&(B.id=o.uid),_=()=>Xl(B));const S=new la(f,ft,_),$=Ms(),x=()=>{S.stop(),$&&zs($.effects,S)};return a?n?B():A=S.run():r==="post"?at(S.run.bind(S),o&&o.suspense):S.run(),y&&y.push(x),x}function xf(e,a,n){const s=this.proxy,r=We(e)?e.includes(".")?hc(s,e):()=>s[e]:e.bind(s,s);let d;ye(a)?d=a:(d=a.handler,n=a);const m=Pi(this),p=el(r,d.bind(s),n);return m(),p}function hc(e,a){const n=a.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ki(e,a,n=0,s){if(!Le(e)||e.__v_skip)return e;if(a&&a>0){if(n>=a)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),nt(e))ki(e.value,a,n,s);else if(me(e))for(let r=0;r<e.length;r++)ki(e[r],a,n,s);else if(Mi(e)||Ji(e))e.forEach(r=>{ki(r,a,n,s)});else if(Td(e))for(const r in e)ki(e[r],a,n,s);return e}function tl(e,a){if(Xe===null)return e;const n=rn(Xe)||Xe.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[d,m,p,o=Ne]=a[r];d&&(ye(d)&&(d={mounted:d,updated:d}),d.deep&&ki(m),s.push({dir:d,instance:n,value:m,oldValue:void 0,arg:p,modifiers:o}))}return e}function Ft(e,a,n,s){const r=e.dirs,d=a&&a.dirs;for(let m=0;m<r.length;m++){const p=r[m];d&&(p.oldValue=d[m].value);let o=p.dir[s];o&&(Vi(),At(o,n,8,[e.el,p,e,a]),Fi())}}const ni=Symbol("_leaveCb"),cl=Symbol("_enterCb");function Qs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hi(()=>{e.isMounted=!0}),nn(()=>{e.isUnmounting=!0}),e}const Bt=[Function,Array],Zs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Tf={name:"BaseTransition",props:Zs,setup(e,{slots:a}){const n=Ot(),s=Qs();let r;return()=>{const d=a.default&&tn(a.default(),!0);if(!d||!d.length)return;let m=d[0];if(d.length>1){for(const y of d)if(y.type!==ut){m=y;break}}const p=Re(e),{mode:o}=p;if(s.isLeaving)return bn(m);const u=Io(m);if(!u)return bn(m);const f=na(u,p,s,n);zi(u,f);const c=n.subTree,h=c&&Io(c);let v=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();r===void 0?r=y:y!==r&&(r=y,v=!0)}if(h&&h.type!==ut&&(!It(u,h)||v)){const y=na(h,p,s,n);if(zi(h,y),o==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},bn(m);o==="in-out"&&u.type!==ut&&(y.delayLeave=(A,B,_)=>{const S=bc(s,h);S[String(h.key)]=h,A[ni]=()=>{B(),A[ni]=void 0,delete f.delayedLeave},f.delayedLeave=_})}return m}}},_c=Tf;function bc(e,a){const{leavingVNodes:n}=e;let s=n.get(a.type);return s||(s=Object.create(null),n.set(a.type,s)),s}function na(e,a,n,s){const{appear:r,mode:d,persisted:m=!1,onBeforeEnter:p,onEnter:o,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:y,onAppear:A,onAfterAppear:B,onAppearCancelled:_}=a,S=String(e.key),$=bc(n,e),x=(V,I)=>{V&&At(V,s,9,I)},E=(V,I)=>{const L=I[1];x(V,I),me(V)?V.every(W=>W.length<=1)&&L():V.length<=1&&L()},M={mode:d,persisted:m,beforeEnter(V){let I=p;if(!n.isMounted)if(r)I=y||p;else return;V[ni]&&V[ni](!0);const L=$[S];L&&It(e,L)&&L.el[ni]&&L.el[ni](),x(I,[V])},enter(V){let I=o,L=u,W=f;if(!n.isMounted)if(r)I=A||o,L=B||u,W=_||f;else return;let q=!1;const ce=V[cl]=Be=>{q||(q=!0,Be?x(W,[V]):x(L,[V]),M.delayedLeave&&M.delayedLeave(),V[cl]=void 0)};I?E(I,[V,ce]):ce()},leave(V,I){const L=String(e.key);if(V[cl]&&V[cl](!0),n.isUnmounting)return I();x(c,[V]);let W=!1;const q=V[ni]=ce=>{W||(W=!0,I(),ce?x(g,[V]):x(v,[V]),V[ni]=void 0,$[L]===e&&delete $[L])};$[L]=e,h?E(h,[V,q]):q()},clone(V){return na(V,a,n,s)}};return M}function bn(e){if(il(e))return e=Ht(e),e.children=null,e}function Io(e){return il(e)?e.children?e.children[0]:void 0:e}function zi(e,a){e.shapeFlag&6&&e.component?zi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function tn(e,a=!1,n){let s=[],r=0;for(let d=0;d<e.length;d++){let m=e[d];const p=n==null?m.key:String(n)+String(m.key!=null?m.key:d);m.type===Ae?(m.patchFlag&128&&r++,s=s.concat(tn(m.children,a,p))):(a||m.type!==ut)&&s.push(p!=null?Ht(m,{key:p}):m)}if(r>1)for(let d=0;d<s.length;d++)s[d].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function z(e,a){return ye(e)?Je({name:e.name},a,{setup:e}):e}const Ti=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ef(e){ye(e)&&(e={loader:e});const{loader:a,loadingComponent:n,errorComponent:s,delay:r=200,timeout:d,suspensible:m=!0,onError:p}=e;let o=null,u,f=0;const c=()=>(f++,o=null,h()),h=()=>{let v;return o||(v=o=a().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),p)return new Promise((y,A)=>{p(g,()=>y(c()),()=>A(g),f+1)});throw g}).then(g=>v!==o&&o?o:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=Qe;if(u)return()=>vn(u,v);const g=_=>{o=null,Ni(_,v,13,!s)};if(m&&v.suspense||al)return h().then(_=>()=>vn(_,v)).catch(_=>(g(_),()=>s?t(s,{error:_}):null));const y=j(!1),A=j(),B=j(!!r);return r&&setTimeout(()=>{B.value=!1},r),d!=null&&setTimeout(()=>{if(!y.value&&!A.value){const _=new Error(`Async component timed out after ${d}ms.`);g(_),A.value=_}},d),h().then(()=>{y.value=!0,v.parent&&il(v.parent.vnode)&&(v.parent.effect.dirty=!0,Xl(v.parent.update))}).catch(_=>{g(_),A.value=_}),()=>{if(y.value&&u)return vn(u,v);if(A.value&&s)return t(s,{error:A.value});if(n&&!B.value)return t(n)}}})}function vn(e,a){const{ref:n,props:s,children:r,ce:d}=a.vnode,m=t(e,s,r);return m.ref=n,m.ce=d,delete a.vnode.ce,m}const il=e=>e.type.__isKeepAlive,Rf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const n=Ot(),s=n.ctx;if(!s.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,d=new Set;let m=null;const p=n.suspense,{renderer:{p:o,m:u,um:f,o:{createElement:c}}}=s,h=c("div");s.activate=(_,S,$,x,E)=>{const M=_.component;u(_,S,$,0,p),o(M.vnode,_,S,$,M,p,x,_.slotScopeIds,E),at(()=>{M.isDeactivated=!1,M.a&&Wi(M.a);const V=_.props&&_.props.onVnodeMounted;V&&pt(V,M.parent,_)},p)},s.deactivate=_=>{const S=_.component;u(_,h,null,1,p),at(()=>{S.da&&Wi(S.da);const $=_.props&&_.props.onVnodeUnmounted;$&&pt($,S.parent,_),S.isDeactivated=!0},p)};function v(_){yn(_),f(_,n,p,!0)}function g(_){r.forEach((S,$)=>{const x=ns(S.type);x&&(!_||!_(x))&&y($)})}function y(_){const S=r.get(_);!m||!It(S,m)?v(S):m&&yn(m),r.delete(_),d.delete(_)}rt(()=>[e.include,e.exclude],([_,S])=>{_&&g($=>Aa(_,$)),S&&g($=>!Aa(S,$))},{flush:"post",deep:!0});let A=null;const B=()=>{A!=null&&r.set(A,Cn(n.subTree))};return hi(B),ln(B),nn(()=>{r.forEach(_=>{const{subTree:S,suspense:$}=n,x=Cn(S);if(_.type===x.type&&_.key===x.key){yn(x);const E=x.component.da;E&&at(E,$);return}v(_)})}),()=>{if(A=null,!a.default)return null;const _=a.default(),S=_[0];if(_.length>1)return m=null,_;if(!Rt(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return m=null,S;let $=Cn(S);const x=$.type,E=ns(Ti($)?$.type.__asyncResolved||{}:x),{include:M,exclude:V,max:I}=e;if(M&&(!E||!Aa(M,E))||V&&E&&Aa(V,E))return m=$,S;const L=$.key==null?x:$.key,W=r.get(L);return $.el&&($=Ht($),S.shapeFlag&128&&(S.ssContent=$)),A=L,W?($.el=W.el,$.component=W.component,$.transition&&zi($,$.transition),$.shapeFlag|=512,d.delete(L),d.add(L)):(d.add(L),I&&d.size>parseInt(I,10)&&y(d.values().next().value)),$.shapeFlag|=256,m=$,dc(S.type)?S:$}}},zf=Rf;function Aa(e,a){return me(e)?e.some(n=>Aa(n,a)):We(e)?e.split(",").includes(a):cp(e)?e.test(a):!1}function eo(e,a){vc(e,"a",a)}function to(e,a){vc(e,"da",a)}function vc(e,a,n=Qe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(an(a,s,n),n){let r=n.parent;for(;r&&r.parent;)il(r.parent.vnode)&&Df(s,a,n,r),r=r.parent}}function Df(e,a,n,s){const r=an(a,e,s,!0);Hi(()=>{zs(s[a],r)},n)}function yn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Cn(e){return e.shapeFlag&128?e.ssContent:e}function an(e,a,n=Qe,s=!1){if(n){const r=n[e]||(n[e]=[]),d=a.__weh||(a.__weh=(...m)=>{if(n.isUnmounted)return;Vi();const p=Pi(n),o=At(a,n,e,m);return p(),Fi(),o});return s?r.unshift(d):r.push(d),d}}const Xt=e=>(a,n=Qe)=>(!al||e==="sp")&&an(e,(...s)=>a(...s),n),yc=Xt("bm"),hi=Xt("m"),Cc=Xt("bu"),ln=Xt("u"),nn=Xt("bum"),Hi=Xt("um"),wc=Xt("sp"),Sc=Xt("rtg"),Ac=Xt("rtc");function kc(e,a=Qe){an("ec",e,a)}function Ze(e,a,n,s){let r;const d=n&&n[s];if(me(e)||We(e)){r=new Array(e.length);for(let m=0,p=e.length;m<p;m++)r[m]=a(e[m],m,void 0,d&&d[m])}else if(typeof e=="number"){r=new Array(e);for(let m=0;m<e;m++)r[m]=a(m+1,m,void 0,d&&d[m])}else if(Le(e))if(e[Symbol.iterator])r=Array.from(e,(m,p)=>a(m,p,void 0,d&&d[p]));else{const m=Object.keys(e);r=new Array(m.length);for(let p=0,o=m.length;p<o;p++){const u=m[p];r[p]=a(e[u],u,p,d&&d[p])}}else r=[];return n&&(n[s]=r),r}function If(e,a){for(let n=0;n<a.length;n++){const s=a[n];if(me(s))for(let r=0;r<s.length;r++)e[s[r].name]=s[r].fn;else s&&(e[s.name]=s.key?(...r)=>{const d=s.fn(...r);return d&&(d.key=s.key),d}:s.fn)}return e}function sa(e,a,n={},s,r){if(Xe.isCE||Xe.parent&&Ti(Xe.parent)&&Xe.parent.isCE)return a!=="default"&&(n.name=a),t("slot",n,s&&s());let d=e[a];d&&d._c&&(d._d=!1),R();const m=d&&$c(d(n)),p=N(Ae,{key:n.key||m&&m.key||`_${a}`},m||(s?s():[]),m&&e._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),d&&d._c&&(d._d=!0),p}function $c(e){return e.some(a=>Rt(a)?!(a.type===ut||a.type===Ae&&!$c(a.children)):!0)?e:null}function Pf(e,a){const n={};for(const s in e)n[a&&/[A-Z]/.test(s)?`on:${s}`:Ra(s)]=e[s];return n}const Jn=e=>e?Uc(e)?rn(e)||e.proxy:Jn(e.parent):null,za=Je(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jn(e.parent),$root:e=>Jn(e.root),$emit:e=>e.emit,$options:e=>io(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Xl(e.update)}),$nextTick:e=>e.n||(e.n=ga.bind(e.proxy)),$watch:e=>xf.bind(e)}),wn=(e,a)=>e!==Ne&&!e.__isScriptSetup&&De(e,a),Wn={get({_:e},a){const{ctx:n,setupState:s,data:r,props:d,accessCache:m,type:p,appContext:o}=e;let u;if(a[0]!=="$"){const v=m[a];if(v!==void 0)switch(v){case 1:return s[a];case 2:return r[a];case 4:return n[a];case 3:return d[a]}else{if(wn(s,a))return m[a]=1,s[a];if(r!==Ne&&De(r,a))return m[a]=2,r[a];if((u=e.propsOptions[0])&&De(u,a))return m[a]=3,d[a];if(n!==Ne&&De(n,a))return m[a]=4,n[a];Kn&&(m[a]=0)}}const f=za[a];let c,h;if(f)return a==="$attrs"&&_t(e,"get",a),f(e);if((c=p.__cssModules)&&(c=c[a]))return c;if(n!==Ne&&De(n,a))return m[a]=4,n[a];if(h=o.config.globalProperties,De(h,a))return h[a]},set({_:e},a,n){const{data:s,setupState:r,ctx:d}=e;return wn(r,a)?(r[a]=n,!0):s!==Ne&&De(s,a)?(s[a]=n,!0):De(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=n,!0)},has({_:{data:e,setupState:a,accessCache:n,ctx:s,appContext:r,propsOptions:d}},m){let p;return!!n[m]||e!==Ne&&De(e,m)||wn(a,m)||(p=d[0])&&De(p,m)||De(s,m)||De(za,m)||De(r.config.globalProperties,m)},defineProperty(e,a,n){return n.get!=null?e._.accessCache[a]=0:De(n,"value")&&this.set(e,a,n.value,null),Reflect.defineProperty(e,a,n)}},Mf=Je({},Wn,{get(e,a){if(a!==Symbol.unscopables)return Wn.get(e,a,e)},has(e,a){return a[0]!=="_"&&!hp(a)}});function Vf(){return null}function Ff(){return null}function Nf(e){}function Hf(e){}function Lf(){return null}function Of(){}function jf(e,a){return null}function qf(){return Bc().slots}function Gf(){return Bc().attrs}function Bc(){const e=Ot();return e.setupContext||(e.setupContext=Wc(e))}function Ua(e){return me(e)?e.reduce((a,n)=>(a[n]=null,a),{}):e}function Uf(e,a){const n=Ua(e);for(const s in a){if(s.startsWith("__skip"))continue;let r=n[s];r?me(r)||ye(r)?r=n[s]={type:r,default:a[s]}:r.default=a[s]:r===null&&(r=n[s]={default:a[s]}),r&&a[`__skip_${s}`]&&(r.skipFactory=!0)}return n}function Yf(e,a){return!e||!a?e||a:me(e)&&me(a)?e.concat(a):Je({},Ua(e),Ua(a))}function Jf(e,a){const n={};for(const s in e)a.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function Wf(e){const a=Ot();let n=e();return is(),Ds(n)&&(n=n.catch(s=>{throw Pi(a),s})),[n,()=>Pi(a)]}let Kn=!0;function Kf(e){const a=io(e),n=e.proxy,s=e.ctx;Kn=!1,a.beforeCreate&&Po(a.beforeCreate,e,"bc");const{data:r,computed:d,methods:m,watch:p,provide:o,inject:u,created:f,beforeMount:c,mounted:h,beforeUpdate:v,updated:g,activated:y,deactivated:A,beforeDestroy:B,beforeUnmount:_,destroyed:S,unmounted:$,render:x,renderTracked:E,renderTriggered:M,errorCaptured:V,serverPrefetch:I,expose:L,inheritAttrs:W,components:q,directives:ce,filters:Be}=a;if(u&&Xf(u,s,null),m)for(const ue in m){const ie=m[ue];ye(ie)&&(s[ue]=ie.bind(n))}if(r){const ue=r.call(n,n);Le(ue)&&(e.data=Kt(ue))}if(Kn=!0,d)for(const ue in d){const ie=d[ue],Te=ye(ie)?ie.bind(n,n):ye(ie.get)?ie.get.bind(n,n):ft,Ue=!ye(ie)&&ye(ie.set)?ie.set.bind(n):ft,et=F({get:Te,set:Ue});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>et.value,set:Oe=>et.value=Oe})}if(p)for(const ue in p)xc(p[ue],s,n,ue);if(o){const ue=ye(o)?o.call(n):o;Reflect.ownKeys(ue).forEach(ie=>{lt(ie,ue[ie])})}f&&Po(f,e,"c");function Y(ue,ie){me(ie)?ie.forEach(Te=>ue(Te.bind(n))):ie&&ue(ie.bind(n))}if(Y(yc,c),Y(hi,h),Y(Cc,v),Y(ln,g),Y(eo,y),Y(to,A),Y(kc,V),Y(Ac,E),Y(Sc,M),Y(nn,_),Y(Hi,$),Y(wc,I),me(L))if(L.length){const ue=e.exposed||(e.exposed={});L.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:Te=>n[ie]=Te})})}else e.exposed||(e.exposed={});x&&e.render===ft&&(e.render=x),W!=null&&(e.inheritAttrs=W),q&&(e.components=q),ce&&(e.directives=ce)}function Xf(e,a,n=ft){me(e)&&(e=Xn(e));for(const s in e){const r=e[s];let d;Le(r)?"default"in r?d=Me(r.from||s,r.default,!0):d=Me(r.from||s):d=Me(r),nt(d)?Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get:()=>d.value,set:m=>d.value=m}):a[s]=d}}function Po(e,a,n){At(me(e)?e.map(s=>s.bind(a.proxy)):e.bind(a.proxy),a,n)}function xc(e,a,n,s){const r=s.includes(".")?hc(n,s):()=>n[s];if(We(e)){const d=a[e];ye(d)&&rt(r,d)}else if(ye(e))rt(r,e.bind(n));else if(Le(e))if(me(e))e.forEach(d=>xc(d,a,n,s));else{const d=ye(e.handler)?e.handler.bind(n):a[e.handler];ye(d)&&rt(r,d,e)}}function io(e){const a=e.type,{mixins:n,extends:s}=a,{mixins:r,optionsCache:d,config:{optionMergeStrategies:m}}=e.appContext,p=d.get(a);let o;return p?o=p:!r.length&&!n&&!s?o=a:(o={},r.length&&r.forEach(u=>xl(o,u,m,!0)),xl(o,a,m)),Le(a)&&d.set(a,o),o}function xl(e,a,n,s=!1){const{mixins:r,extends:d}=a;d&&xl(e,d,n,!0),r&&r.forEach(m=>xl(e,m,n,!0));for(const m in a)if(!(s&&m==="expose")){const p=Qf[m]||n&&n[m];e[m]=p?p(e[m],a[m]):a[m]}return e}const Qf={data:Mo,props:Vo,emits:Vo,methods:ka,computed:ka,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:ka,directives:ka,watch:eg,provide:Mo,inject:Zf};function Mo(e,a){return a?e?function(){return Je(ye(e)?e.call(this,this):e,ye(a)?a.call(this,this):a)}:a:e}function Zf(e,a){return ka(Xn(e),Xn(a))}function Xn(e){if(me(e)){const a={};for(let n=0;n<e.length;n++)a[e[n]]=e[n];return a}return e}function dt(e,a){return e?[...new Set([].concat(e,a))]:a}function ka(e,a){return e?Je(Object.create(null),e,a):a}function Vo(e,a){return e?me(e)&&me(a)?[...new Set([...e,...a])]:Je(Object.create(null),Ua(e),Ua(a??{})):a}function eg(e,a){if(!e)return a;if(!a)return e;const n=Je(Object.create(null),e);for(const s in a)n[s]=dt(e[s],a[s]);return n}function Tc(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ig(e,a){return function(s,r=null){ye(s)||(s=Je({},s)),r!=null&&!Le(r)&&(r=null);const d=Tc(),m=new WeakSet;let p=!1;const o=d.app={_uid:tg++,_component:s,_props:r,_container:null,_context:d,_instance:null,version:Xc,get config(){return d.config},set config(u){},use(u,...f){return m.has(u)||(u&&ye(u.install)?(m.add(u),u.install(o,...f)):ye(u)&&(m.add(u),u(o,...f))),o},mixin(u){return d.mixins.includes(u)||d.mixins.push(u),o},component(u,f){return f?(d.components[u]=f,o):d.components[u]},directive(u,f){return f?(d.directives[u]=f,o):d.directives[u]},mount(u,f,c){if(!p){const h=t(s,r);return h.appContext=d,c===!0?c="svg":c===!1&&(c=void 0),f&&a?a(h,u):e(h,u,c),p=!0,o._container=u,u.__vue_app__=o,rn(h.component)||h.component.proxy}},unmount(){p&&(e(null,o._container),delete o._container.__vue_app__)},provide(u,f){return d.provides[u]=f,o},runWithContext(u){Ya=o;try{return u()}finally{Ya=null}}};return o}}let Ya=null;function lt(e,a){if(Qe){let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[e]=a}}function Me(e,a,n=!1){const s=Qe||Xe;if(s||Ya){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ya._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ye(a)?a.call(s&&s.proxy):a}}function ag(){return!!(Qe||Xe||Ya)}function lg(e,a,n,s=!1){const r={},d={};Sl(d,on,1),e.propsDefaults=Object.create(null),Ec(e,a,r,d);for(const m in e.propsOptions[0])m in r||(r[m]=void 0);n?e.props=s?r:Wd(r):e.type.props?e.props=r:e.props=d,e.attrs=d}function ng(e,a,n,s){const{props:r,attrs:d,vnode:{patchFlag:m}}=e,p=Re(r),[o]=e.propsOptions;let u=!1;if((s||m>0)&&!(m&16)){if(m&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let h=f[c];if(Ql(e.emitsOptions,h))continue;const v=a[h];if(o)if(De(d,h))v!==d[h]&&(d[h]=v,u=!0);else{const g=ct(h);r[g]=Qn(o,p,g,v,e,!1)}else v!==d[h]&&(d[h]=v,u=!0)}}}else{Ec(e,a,r,d)&&(u=!0);let f;for(const c in p)(!a||!De(a,c)&&((f=St(c))===c||!De(a,f)))&&(o?n&&(n[c]!==void 0||n[f]!==void 0)&&(r[c]=Qn(o,p,c,void 0,e,!0)):delete r[c]);if(d!==p)for(const c in d)(!a||!De(a,c))&&(delete d[c],u=!0)}u&&Yt(e,"set","$attrs")}function Ec(e,a,n,s){const[r,d]=e.propsOptions;let m=!1,p;if(a)for(let o in a){if(Ea(o))continue;const u=a[o];let f;r&&De(r,f=ct(o))?!d||!d.includes(f)?n[f]=u:(p||(p={}))[f]=u:Ql(e.emitsOptions,o)||(!(o in s)||u!==s[o])&&(s[o]=u,m=!0)}if(d){const o=Re(n),u=p||Ne;for(let f=0;f<d.length;f++){const c=d[f];n[c]=Qn(r,o,c,u[c],e,!De(u,c))}}return m}function Qn(e,a,n,s,r,d){const m=e[n];if(m!=null){const p=De(m,"default");if(p&&s===void 0){const o=m.default;if(m.type!==Function&&!m.skipFactory&&ye(o)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const f=Pi(r);s=u[n]=o.call(null,a),f()}}else s=o}m[0]&&(d&&!p?s=!1:m[1]&&(s===""||s===St(n))&&(s=!0))}return s}function Rc(e,a,n=!1){const s=a.propsCache,r=s.get(e);if(r)return r;const d=e.props,m={},p=[];let o=!1;if(!ye(e)){const f=c=>{o=!0;const[h,v]=Rc(c,a,!0);Je(m,h),v&&p.push(...v)};!n&&a.mixins.length&&a.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!d&&!o)return Le(e)&&s.set(e,Yi),Yi;if(me(d))for(let f=0;f<d.length;f++){const c=ct(d[f]);Fo(c)&&(m[c]=Ne)}else if(d)for(const f in d){const c=ct(f);if(Fo(c)){const h=d[f],v=m[c]=me(h)||ye(h)?{type:h}:Je({},h);if(v){const g=Lo(Boolean,v.type),y=Lo(String,v.type);v[0]=g>-1,v[1]=y<0||g<y,(g>-1||De(v,"default"))&&p.push(c)}}}const u=[m,p];return Le(e)&&s.set(e,u),u}function Fo(e){return e[0]!=="$"}function No(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function Ho(e,a){return No(e)===No(a)}function Lo(e,a){return me(a)?a.findIndex(n=>Ho(n,e)):ye(a)&&Ho(a,e)?0:-1}const zc=e=>e[0]==="_"||e==="$stable",ao=e=>me(e)?e.map(Ct):[Ct(e)],sg=(e,a,n)=>{if(a._n)return a;const s=i((...r)=>ao(a(...r)),n);return s._c=!1,s},Dc=(e,a,n)=>{const s=e._ctx;for(const r in e){if(zc(r))continue;const d=e[r];if(ye(d))a[r]=sg(r,d,s);else if(d!=null){const m=ao(d);a[r]=()=>m}}},Ic=(e,a)=>{const n=ao(a);e.slots.default=()=>n},og=(e,a)=>{if(e.vnode.shapeFlag&32){const n=a._;n?(e.slots=Re(a),Sl(a,"_",n)):Dc(a,e.slots={})}else e.slots={},a&&Ic(e,a);Sl(e.slots,on,1)},rg=(e,a,n)=>{const{vnode:s,slots:r}=e;let d=!0,m=Ne;if(s.shapeFlag&32){const p=a._;p?n&&p===1?d=!1:(Je(r,a),!n&&p===1&&delete r._):(d=!a.$stable,Dc(a,r)),m=a}else a&&(Ic(e,a),m={default:1});if(d)for(const p in r)!zc(p)&&m[p]==null&&delete r[p]};function Tl(e,a,n,s,r=!1){if(me(e)){e.forEach((h,v)=>Tl(h,a&&(me(a)?a[v]:a),n,s,r));return}if(Ti(s)&&!r)return;const d=s.shapeFlag&4?rn(s.component)||s.component.proxy:s.el,m=r?null:d,{i:p,r:o}=e,u=a&&a.r,f=p.refs===Ne?p.refs={}:p.refs,c=p.setupState;if(u!=null&&u!==o&&(We(u)?(f[u]=null,De(c,u)&&(c[u]=null)):nt(u)&&(u.value=null)),ye(o))Jt(o,p,12,[m,f]);else{const h=We(o),v=nt(o),g=e.f;if(h||v){const y=()=>{if(g){const A=h?De(c,o)?c[o]:f[o]:o.value;r?me(A)&&zs(A,d):me(A)?A.includes(d)||A.push(d):h?(f[o]=[d],De(c,o)&&(c[o]=f[o])):(o.value=[d],e.k&&(f[e.k]=o.value))}else h?(f[o]=m,De(c,o)&&(c[o]=m)):v&&(o.value=m,e.k&&(f[e.k]=m))};r||g?y():(y.id=-1,at(y,n))}}}let ei=!1;const ug=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",dg=e=>e.namespaceURI.includes("MathML"),ml=e=>{if(ug(e))return"svg";if(dg(e))return"mathml"},pl=e=>e.nodeType===8;function cg(e){const{mt:a,p:n,o:{patchProp:s,createText:r,nextSibling:d,parentNode:m,remove:p,insert:o,createComment:u}}=e,f=(S,$)=>{if(!$.hasChildNodes()){n(null,S,$),Bl(),$._vnode=S;return}ei=!1,c($.firstChild,S,null,null,null),Bl(),$._vnode=S,ei&&console.error("Hydration completed but contains mismatches.")},c=(S,$,x,E,M,V=!1)=>{const I=pl(S)&&S.data==="[",L=()=>y(S,$,x,E,M,I),{type:W,ref:q,shapeFlag:ce,patchFlag:Be}=$;let O=S.nodeType;$.el=S,Be===-2&&(V=!1,$.dynamicChildren=null);let Y=null;switch(W){case Di:O!==3?$.children===""?(o($.el=r(""),m(S),S),Y=S):Y=L():(S.data!==$.children&&(ei=!0,S.data=$.children),Y=d(S));break;case ut:_(S)?(Y=d(S),B($.el=S.content.firstChild,S,x)):O!==8||I?Y=L():Y=d(S);break;case Ei:if(I&&(S=d(S),O=S.nodeType),O===1||O===3){Y=S;const ue=!$.children.length;for(let ie=0;ie<$.staticCount;ie++)ue&&($.children+=Y.nodeType===1?Y.outerHTML:Y.data),ie===$.staticCount-1&&($.anchor=Y),Y=d(Y);return I?d(Y):Y}else L();break;case Ae:I?Y=g(S,$,x,E,M,V):Y=L();break;default:if(ce&1)(O!==1||$.type.toLowerCase()!==S.tagName.toLowerCase())&&!_(S)?Y=L():Y=h(S,$,x,E,M,V);else if(ce&6){$.slotScopeIds=M;const ue=m(S);if(I?Y=A(S):pl(S)&&S.data==="teleport start"?Y=A(S,S.data,"teleport end"):Y=d(S),a($,ue,null,x,E,ml(ue),V),Ti($)){let ie;I?(ie=t(Ae),ie.anchor=Y?Y.previousSibling:ue.lastChild):ie=S.nodeType===3?l(""):t("div"),ie.el=S,$.component.subTree=ie}}else ce&64?O!==8?Y=L():Y=$.type.hydrate(S,$,x,E,M,V,e,v):ce&128&&(Y=$.type.hydrate(S,$,x,E,ml(m(S)),M,V,e,c))}return q!=null&&Tl(q,null,E,$),Y},h=(S,$,x,E,M,V)=>{V=V||!!$.dynamicChildren;const{type:I,props:L,patchFlag:W,shapeFlag:q,dirs:ce,transition:Be}=$,O=I==="input"||I==="option";if(O||W!==-1){ce&&Ft($,null,x,"created");let Y=!1;if(_(S)){Y=Fc(E,Be)&&x&&x.vnode.props&&x.vnode.props.appear;const ie=S.content.firstChild;Y&&Be.beforeEnter(ie),B(ie,S,x),$.el=S=ie}if(q&16&&!(L&&(L.innerHTML||L.textContent))){let ie=v(S.firstChild,$,S,x,E,M,V);for(;ie;){ei=!0;const Te=ie;ie=ie.nextSibling,p(Te)}}else q&8&&S.textContent!==$.children&&(ei=!0,S.textContent=$.children);if(L)if(O||!V||W&48)for(const ie in L)(O&&(ie.endsWith("value")||ie==="indeterminate")||Xa(ie)&&!Ea(ie)||ie[0]===".")&&s(S,ie,null,L[ie],void 0,void 0,x);else L.onClick&&s(S,"onClick",null,L.onClick,void 0,void 0,x);let ue;(ue=L&&L.onVnodeBeforeMount)&&pt(ue,x,$),ce&&Ft($,null,x,"beforeMount"),((ue=L&&L.onVnodeMounted)||ce||Y)&&cc(()=>{ue&&pt(ue,x,$),Y&&Be.enter(S),ce&&Ft($,null,x,"mounted")},E)}return S.nextSibling},v=(S,$,x,E,M,V,I)=>{I=I||!!$.dynamicChildren;const L=$.children,W=L.length;for(let q=0;q<W;q++){const ce=I?L[q]:L[q]=Ct(L[q]);if(S)S=c(S,ce,E,M,V,I);else{if(ce.type===Di&&!ce.children)continue;ei=!0,n(null,ce,x,null,E,M,ml(x),V)}}return S},g=(S,$,x,E,M,V)=>{const{slotScopeIds:I}=$;I&&(M=M?M.concat(I):I);const L=m(S),W=v(d(S),$,L,x,E,M,V);return W&&pl(W)&&W.data==="]"?d($.anchor=W):(ei=!0,o($.anchor=u("]"),L,W),W)},y=(S,$,x,E,M,V)=>{if(ei=!0,$.el=null,V){const W=A(S);for(;;){const q=d(S);if(q&&q!==W)p(q);else break}}const I=d(S),L=m(S);return p(S),n(null,$,L,I,x,E,ml(L),M),I},A=(S,$="[",x="]")=>{let E=0;for(;S;)if(S=d(S),S&&pl(S)&&(S.data===$&&E++,S.data===x)){if(E===0)return d(S);E--}return S},B=(S,$,x)=>{const E=$.parentNode;E&&E.replaceChild(S,$);let M=x;for(;M;)M.vnode.el===$&&(M.vnode.el=M.subTree.el=S),M=M.parent},_=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[f,c]}const at=cc;function Pc(e){return Vc(e)}function Mc(e){return Vc(e,cg)}function Vc(e,a){const n=Ed();n.__VUE__=!0;const{insert:s,remove:r,patchProp:d,createElement:m,createText:p,createComment:o,setText:u,setElementText:f,parentNode:c,nextSibling:h,setScopeId:v=ft,insertStaticContent:g}=e,y=(T,D,H,K=null,X=null,le=null,re=void 0,ae=null,ne=!!D.dynamicChildren)=>{if(T===D)return;T&&!It(T,D)&&(K=se(T),Oe(T,X,le,!0),T=null),D.patchFlag===-2&&(ne=!1,D.dynamicChildren=null);const{type:Z,ref:de,shapeFlag:be}=D;switch(Z){case Di:A(T,D,H,K);break;case ut:B(T,D,H,K);break;case Ei:T==null&&_(D,H,K,re);break;case Ae:q(T,D,H,K,X,le,re,ae,ne);break;default:be&1?x(T,D,H,K,X,le,re,ae,ne):be&6?ce(T,D,H,K,X,le,re,ae,ne):(be&64||be&128)&&Z.process(T,D,H,K,X,le,re,ae,ne,Fe)}de!=null&&X&&Tl(de,T&&T.ref,le,D||T,!D)},A=(T,D,H,K)=>{if(T==null)s(D.el=p(D.children),H,K);else{const X=D.el=T.el;D.children!==T.children&&u(X,D.children)}},B=(T,D,H,K)=>{T==null?s(D.el=o(D.children||""),H,K):D.el=T.el},_=(T,D,H,K)=>{[T.el,T.anchor]=g(T.children,D,H,K,T.el,T.anchor)},S=({el:T,anchor:D},H,K)=>{let X;for(;T&&T!==D;)X=h(T),s(T,H,K),T=X;s(D,H,K)},$=({el:T,anchor:D})=>{let H;for(;T&&T!==D;)H=h(T),r(T),T=H;r(D)},x=(T,D,H,K,X,le,re,ae,ne)=>{D.type==="svg"?re="svg":D.type==="math"&&(re="mathml"),T==null?E(D,H,K,X,le,re,ae,ne):I(T,D,X,le,re,ae,ne)},E=(T,D,H,K,X,le,re,ae)=>{let ne,Z;const{props:de,shapeFlag:be,transition:_e,dirs:we}=T;if(ne=T.el=m(T.type,le,de&&de.is,de),be&8?f(ne,T.children):be&16&&V(T.children,ne,null,K,X,Sn(T,le),re,ae),we&&Ft(T,null,K,"created"),M(ne,T,T.scopeId,re,K),de){for(const He in de)He!=="value"&&!Ea(He)&&d(ne,He,null,de[He],le,T.children,K,X,oe);"value"in de&&d(ne,"value",null,de.value,le),(Z=de.onVnodeBeforeMount)&&pt(Z,K,T)}we&&Ft(T,null,K,"beforeMount");const Ee=Fc(X,_e);Ee&&_e.beforeEnter(ne),s(ne,D,H),((Z=de&&de.onVnodeMounted)||Ee||we)&&at(()=>{Z&&pt(Z,K,T),Ee&&_e.enter(ne),we&&Ft(T,null,K,"mounted")},X)},M=(T,D,H,K,X)=>{if(H&&v(T,H),K)for(let le=0;le<K.length;le++)v(T,K[le]);if(X){let le=X.subTree;if(D===le){const re=X.vnode;M(T,re,re.scopeId,re.slotScopeIds,X.parent)}}},V=(T,D,H,K,X,le,re,ae,ne=0)=>{for(let Z=ne;Z<T.length;Z++){const de=T[Z]=ae?si(T[Z]):Ct(T[Z]);y(null,de,D,H,K,X,le,re,ae)}},I=(T,D,H,K,X,le,re)=>{const ae=D.el=T.el;let{patchFlag:ne,dynamicChildren:Z,dirs:de}=D;ne|=T.patchFlag&16;const be=T.props||Ne,_e=D.props||Ne;let we;if(H&&yi(H,!1),(we=_e.onVnodeBeforeUpdate)&&pt(we,H,D,T),de&&Ft(D,T,H,"beforeUpdate"),H&&yi(H,!0),Z?L(T.dynamicChildren,Z,ae,H,K,Sn(D,X),le):re||ie(T,D,ae,null,H,K,Sn(D,X),le,!1),ne>0){if(ne&16)W(ae,D,be,_e,H,K,X);else if(ne&2&&be.class!==_e.class&&d(ae,"class",null,_e.class,X),ne&4&&d(ae,"style",be.style,_e.style,X),ne&8){const Ee=D.dynamicProps;for(let He=0;He<Ee.length;He++){const Ye=Ee[He],tt=be[Ye],zt=_e[Ye];(zt!==tt||Ye==="value")&&d(ae,Ye,tt,zt,X,T.children,H,K,oe)}}ne&1&&T.children!==D.children&&f(ae,D.children)}else!re&&Z==null&&W(ae,D,be,_e,H,K,X);((we=_e.onVnodeUpdated)||de)&&at(()=>{we&&pt(we,H,D,T),de&&Ft(D,T,H,"updated")},K)},L=(T,D,H,K,X,le,re)=>{for(let ae=0;ae<D.length;ae++){const ne=T[ae],Z=D[ae],de=ne.el&&(ne.type===Ae||!It(ne,Z)||ne.shapeFlag&70)?c(ne.el):H;y(ne,Z,de,null,K,X,le,re,!0)}},W=(T,D,H,K,X,le,re)=>{if(H!==K){if(H!==Ne)for(const ae in H)!Ea(ae)&&!(ae in K)&&d(T,ae,H[ae],null,re,D.children,X,le,oe);for(const ae in K){if(Ea(ae))continue;const ne=K[ae],Z=H[ae];ne!==Z&&ae!=="value"&&d(T,ae,Z,ne,re,D.children,X,le,oe)}"value"in K&&d(T,"value",H.value,K.value,re)}},q=(T,D,H,K,X,le,re,ae,ne)=>{const Z=D.el=T?T.el:p(""),de=D.anchor=T?T.anchor:p("");let{patchFlag:be,dynamicChildren:_e,slotScopeIds:we}=D;we&&(ae=ae?ae.concat(we):we),T==null?(s(Z,H,K),s(de,H,K),V(D.children||[],H,de,X,le,re,ae,ne)):be>0&&be&64&&_e&&T.dynamicChildren?(L(T.dynamicChildren,_e,H,X,le,re,ae),(D.key!=null||X&&D===X.subTree)&&lo(T,D,!0)):ie(T,D,H,de,X,le,re,ae,ne)},ce=(T,D,H,K,X,le,re,ae,ne)=>{D.slotScopeIds=ae,T==null?D.shapeFlag&512?X.ctx.activate(D,H,K,re,ne):Be(D,H,K,X,le,re,ne):O(T,D,ne)},Be=(T,D,H,K,X,le,re)=>{const ae=T.component=Gc(T,K,X);if(il(T)&&(ae.ctx.renderer=Fe),Yc(ae),ae.asyncDep){if(X&&X.registerDep(ae,Y),!T.el){const ne=ae.subTree=t(ut);B(null,ne,D,H)}}else Y(ae,T,D,H,X,le,re)},O=(T,D,H)=>{const K=D.component=T.component;if(vf(T,D,H))if(K.asyncDep&&!K.asyncResolved){ue(K,D,H);return}else K.next=D,mf(K.update),K.effect.dirty=!0,K.update();else D.el=T.el,K.vnode=D},Y=(T,D,H,K,X,le,re)=>{const ae=()=>{if(T.isMounted){let{next:de,bu:be,u:_e,parent:we,vnode:Ee}=T;{const Oi=Nc(T);if(Oi){de&&(de.el=Ee.el,ue(T,de,re)),Oi.asyncDep.then(()=>{T.isUnmounted||ae()});return}}let He=de,Ye;yi(T,!1),de?(de.el=Ee.el,ue(T,de,re)):de=Ee,be&&Wi(be),(Ye=de.props&&de.props.onVnodeBeforeUpdate)&&pt(Ye,we,de,Ee),yi(T,!0);const tt=yl(T),zt=T.subTree;T.subTree=tt,y(zt,tt,c(zt.el),se(zt),T,X,le),de.el=tt.el,He===null&&Ys(T,tt.el),_e&&at(_e,X),(Ye=de.props&&de.props.onVnodeUpdated)&&at(()=>pt(Ye,we,de,Ee),X)}else{let de;const{el:be,props:_e}=D,{bm:we,m:Ee,parent:He}=T,Ye=Ti(D);if(yi(T,!1),we&&Wi(we),!Ye&&(de=_e&&_e.onVnodeBeforeMount)&&pt(de,He,D),yi(T,!0),be&&$e){const tt=()=>{T.subTree=yl(T),$e(be,T.subTree,T,X,null)};Ye?D.type.__asyncLoader().then(()=>!T.isUnmounted&&tt()):tt()}else{const tt=T.subTree=yl(T);y(null,tt,H,K,T,X,le),D.el=tt.el}if(Ee&&at(Ee,X),!Ye&&(de=_e&&_e.onVnodeMounted)){const tt=D;at(()=>pt(de,He,tt),X)}(D.shapeFlag&256||He&&Ti(He.vnode)&&He.vnode.shapeFlag&256)&&T.a&&at(T.a,X),T.isMounted=!0,D=H=K=null}},ne=T.effect=new la(ae,ft,()=>Xl(Z),T.scope),Z=T.update=()=>{ne.dirty&&ne.run()};Z.id=T.uid,yi(T,!0),Z()},ue=(T,D,H)=>{D.component=T;const K=T.vnode.props;T.vnode=D,T.next=null,ng(T,D.props,K,H),rg(T,D.children,H),Vi(),Eo(T),Fi()},ie=(T,D,H,K,X,le,re,ae,ne=!1)=>{const Z=T&&T.children,de=T?T.shapeFlag:0,be=D.children,{patchFlag:_e,shapeFlag:we}=D;if(_e>0){if(_e&128){Ue(Z,be,H,K,X,le,re,ae,ne);return}else if(_e&256){Te(Z,be,H,K,X,le,re,ae,ne);return}}we&8?(de&16&&oe(Z,X,le),be!==Z&&f(H,be)):de&16?we&16?Ue(Z,be,H,K,X,le,re,ae,ne):oe(Z,X,le,!0):(de&8&&f(H,""),we&16&&V(be,H,K,X,le,re,ae,ne))},Te=(T,D,H,K,X,le,re,ae,ne)=>{T=T||Yi,D=D||Yi;const Z=T.length,de=D.length,be=Math.min(Z,de);let _e;for(_e=0;_e<be;_e++){const we=D[_e]=ne?si(D[_e]):Ct(D[_e]);y(T[_e],we,H,null,X,le,re,ae,ne)}Z>de?oe(T,X,le,!0,!1,be):V(D,H,K,X,le,re,ae,ne,be)},Ue=(T,D,H,K,X,le,re,ae,ne)=>{let Z=0;const de=D.length;let be=T.length-1,_e=de-1;for(;Z<=be&&Z<=_e;){const we=T[Z],Ee=D[Z]=ne?si(D[Z]):Ct(D[Z]);if(It(we,Ee))y(we,Ee,H,null,X,le,re,ae,ne);else break;Z++}for(;Z<=be&&Z<=_e;){const we=T[be],Ee=D[_e]=ne?si(D[_e]):Ct(D[_e]);if(It(we,Ee))y(we,Ee,H,null,X,le,re,ae,ne);else break;be--,_e--}if(Z>be){if(Z<=_e){const we=_e+1,Ee=we<de?D[we].el:K;for(;Z<=_e;)y(null,D[Z]=ne?si(D[Z]):Ct(D[Z]),H,Ee,X,le,re,ae,ne),Z++}}else if(Z>_e)for(;Z<=be;)Oe(T[Z],X,le,!0),Z++;else{const we=Z,Ee=Z,He=new Map;for(Z=Ee;Z<=_e;Z++){const vt=D[Z]=ne?si(D[Z]):Ct(D[Z]);vt.key!=null&&He.set(vt.key,Z)}let Ye,tt=0;const zt=_e-Ee+1;let Oi=!1,bo=0;const ba=new Array(zt);for(Z=0;Z<zt;Z++)ba[Z]=0;for(Z=we;Z<=be;Z++){const vt=T[Z];if(tt>=zt){Oe(vt,X,le,!0);continue}let Vt;if(vt.key!=null)Vt=He.get(vt.key);else for(Ye=Ee;Ye<=_e;Ye++)if(ba[Ye-Ee]===0&&It(vt,D[Ye])){Vt=Ye;break}Vt===void 0?Oe(vt,X,le,!0):(ba[Vt-Ee]=Z+1,Vt>=bo?bo=Vt:Oi=!0,y(vt,D[Vt],H,null,X,le,re,ae,ne),tt++)}const vo=Oi?mg(ba):Yi;for(Ye=vo.length-1,Z=zt-1;Z>=0;Z--){const vt=Ee+Z,Vt=D[vt],yo=vt+1<de?D[vt+1].el:K;ba[Z]===0?y(null,Vt,H,yo,X,le,re,ae,ne):Oi&&(Ye<0||Z!==vo[Ye]?et(Vt,H,yo,2):Ye--)}}},et=(T,D,H,K,X=null)=>{const{el:le,type:re,transition:ae,children:ne,shapeFlag:Z}=T;if(Z&6){et(T.component.subTree,D,H,K);return}if(Z&128){T.suspense.move(D,H,K);return}if(Z&64){re.move(T,D,H,Fe);return}if(re===Ae){s(le,D,H);for(let be=0;be<ne.length;be++)et(ne[be],D,H,K);s(T.anchor,D,H);return}if(re===Ei){S(T,D,H);return}if(K!==2&&Z&1&&ae)if(K===0)ae.beforeEnter(le),s(le,D,H),at(()=>ae.enter(le),X);else{const{leave:be,delayLeave:_e,afterLeave:we}=ae,Ee=()=>s(le,D,H),He=()=>{be(le,()=>{Ee(),we&&we()})};_e?_e(le,Ee,He):He()}else s(le,D,H)},Oe=(T,D,H,K=!1,X=!1)=>{const{type:le,props:re,ref:ae,children:ne,dynamicChildren:Z,shapeFlag:de,patchFlag:be,dirs:_e}=T;if(ae!=null&&Tl(ae,null,H,T,!0),de&256){D.ctx.deactivate(T);return}const we=de&1&&_e,Ee=!Ti(T);let He;if(Ee&&(He=re&&re.onVnodeBeforeUnmount)&&pt(He,D,T),de&6)G(T.component,H,K);else{if(de&128){T.suspense.unmount(H,K);return}we&&Ft(T,null,D,"beforeUnmount"),de&64?T.type.remove(T,D,H,X,Fe,K):Z&&(le!==Ae||be>0&&be&64)?oe(Z,D,H,!1,!0):(le===Ae&&be&384||!X&&de&16)&&oe(ne,D,H),K&&jt(T)}(Ee&&(He=re&&re.onVnodeUnmounted)||we)&&at(()=>{He&&pt(He,D,T),we&&Ft(T,null,D,"unmounted")},H)},jt=T=>{const{type:D,el:H,anchor:K,transition:X}=T;if(D===Ae){$t(H,K);return}if(D===Ei){$(T);return}const le=()=>{r(H),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(T.shapeFlag&1&&X&&!X.persisted){const{leave:re,delayLeave:ae}=X,ne=()=>re(H,le);ae?ae(T.el,le,ne):ne()}else le()},$t=(T,D)=>{let H;for(;T!==D;)H=h(T),r(T),T=H;r(D)},G=(T,D,H)=>{const{bum:K,scope:X,update:le,subTree:re,um:ae}=T;K&&Wi(K),X.stop(),le&&(le.active=!1,Oe(re,T,D,H)),ae&&at(ae,D),at(()=>{T.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},oe=(T,D,H,K=!1,X=!1,le=0)=>{for(let re=le;re<T.length;re++)Oe(T[re],D,H,K,X)},se=T=>T.shapeFlag&6?se(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let ge=!1;const Ve=(T,D,H)=>{T==null?D._vnode&&Oe(D._vnode,null,null,!0):y(D._vnode||null,T,D,null,null,null,H),ge||(ge=!0,Eo(),Bl(),ge=!1),D._vnode=T},Fe={p:y,um:Oe,m:et,r:jt,mt:Be,mc:V,pc:ie,pbc:L,n:se,o:e};let ke,$e;return a&&([ke,$e]=a(Fe)),{render:Ve,hydrate:ke,createApp:ig(Ve,ke)}}function Sn({type:e,props:a},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:n}function yi({effect:e,update:a},n){e.allowRecurse=a.allowRecurse=n}function Fc(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function lo(e,a,n=!1){const s=e.children,r=a.children;if(me(s)&&me(r))for(let d=0;d<s.length;d++){const m=s[d];let p=r[d];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[d]=si(r[d]),p.el=m.el),n||lo(m,p)),p.type===Di&&(p.el=m.el)}}function mg(e){const a=e.slice(),n=[0];let s,r,d,m,p;const o=e.length;for(s=0;s<o;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){a[s]=r,n.push(s);continue}for(d=0,m=n.length-1;d<m;)p=d+m>>1,e[n[p]]<u?d=p+1:m=p;u<e[n[d]]&&(d>0&&(a[s]=n[d-1]),n[d]=s)}}for(d=n.length,m=n[d-1];d-- >0;)n[d]=m,m=a[m];return n}function Nc(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Nc(a)}const pg=e=>e.__isTeleport,Da=e=>e&&(e.disabled||e.disabled===""),Oo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,jo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Zn=(e,a)=>{const n=e&&e.to;return We(n)?a?a(n):null:n},fg={name:"Teleport",__isTeleport:!0,process(e,a,n,s,r,d,m,p,o,u){const{mc:f,pc:c,pbc:h,o:{insert:v,querySelector:g,createText:y,createComment:A}}=u,B=Da(a.props);let{shapeFlag:_,children:S,dynamicChildren:$}=a;if(e==null){const x=a.el=y(""),E=a.anchor=y("");v(x,n,s),v(E,n,s);const M=a.target=Zn(a.props,g),V=a.targetAnchor=y("");M&&(v(V,M),m==="svg"||Oo(M)?m="svg":(m==="mathml"||jo(M))&&(m="mathml"));const I=(L,W)=>{_&16&&f(S,L,W,r,d,m,p,o)};B?I(n,E):M&&I(M,V)}else{a.el=e.el;const x=a.anchor=e.anchor,E=a.target=e.target,M=a.targetAnchor=e.targetAnchor,V=Da(e.props),I=V?n:E,L=V?x:M;if(m==="svg"||Oo(E)?m="svg":(m==="mathml"||jo(E))&&(m="mathml"),$?(h(e.dynamicChildren,$,I,r,d,m,p),lo(e,a,!0)):o||c(e,a,I,L,r,d,m,p,!1),B)V?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):fl(a,n,x,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const W=a.target=Zn(a.props,g);W&&fl(a,W,null,u,0)}else V&&fl(a,E,M,u,1)}Hc(a)},remove(e,a,n,s,{um:r,o:{remove:d}},m){const{shapeFlag:p,children:o,anchor:u,targetAnchor:f,target:c,props:h}=e;if(c&&d(f),m&&d(u),p&16){const v=m||!Da(h);for(let g=0;g<o.length;g++){const y=o[g];r(y,a,n,v,!!y.dynamicChildren)}}},move:fl,hydrate:gg};function fl(e,a,n,{o:{insert:s},m:r},d=2){d===0&&s(e.targetAnchor,a,n);const{el:m,anchor:p,shapeFlag:o,children:u,props:f}=e,c=d===2;if(c&&s(m,a,n),(!c||Da(f))&&o&16)for(let h=0;h<u.length;h++)r(u[h],a,n,2);c&&s(p,a,n)}function gg(e,a,n,s,r,d,{o:{nextSibling:m,parentNode:p,querySelector:o}},u){const f=a.target=Zn(a.props,o);if(f){const c=f._lpa||f.firstChild;if(a.shapeFlag&16)if(Da(a.props))a.anchor=u(m(e),a,p(e),n,s,r,d),a.targetAnchor=c;else{a.anchor=m(e);let h=c;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,f._lpa=a.targetAnchor&&m(a.targetAnchor);break}u(c,a,f,n,s,r,d)}Hc(a)}return a.anchor&&m(a.anchor)}const sn=fg;function Hc(e){const a=e.ctx;if(a&&a.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",a.uid),n=n.nextSibling;a.ut()}}const Ae=Symbol.for("v-fgt"),Di=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Ei=Symbol.for("v-stc"),Ia=[];let gt=null;function R(e=!1){Ia.push(gt=e?null:[])}function Lc(){Ia.pop(),gt=Ia[Ia.length-1]||null}let Ii=1;function es(e){Ii+=e}function Oc(e){return e.dynamicChildren=Ii>0?gt||Yi:null,Lc(),Ii>0&&gt&&gt.push(e),e}function fe(e,a,n,s,r,d){return Oc(w(e,a,n,s,r,d,!0))}function N(e,a,n,s,r){return Oc(t(e,a,n,s,r,!0))}function Rt(e){return e?e.__v_isVNode===!0:!1}function It(e,a){return e.type===a.type&&e.key===a.key}function hg(e){}const on="__vInternal",jc=({key:e})=>e??null,Cl=({ref:e,ref_key:a,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?We(e)||nt(e)||ye(e)?{i:Xe,r:e,k:a,f:!!n}:e:null);function w(e,a=null,n=null,s=0,r=null,d=e===Ae?0:1,m=!1,p=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&jc(a),ref:a&&Cl(a),scopeId:Zl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xe};return p?(so(o,n),d&128&&e.normalize(o)):n&&(o.shapeFlag|=We(n)?8:16),Ii>0&&!m&&gt&&(o.patchFlag>0||d&6)&&o.patchFlag!==32&&gt.push(o),o}const t=_g;function _g(e,a=null,n=null,s=0,r=null,d=!1){if((!e||e===rc)&&(e=ut),Rt(e)){const p=Ht(e,a,!0);return n&&so(p,n),Ii>0&&!d&&gt&&(p.shapeFlag&6?gt[gt.indexOf(e)]=p:gt.push(p)),p.patchFlag|=-2,p}if(kg(e)&&(e=e.__vccOpts),a){a=qc(a);let{class:p,style:o}=a;p&&!We(p)&&(a.class=Za(p)),Le(o)&&(Ls(o)&&!me(o)&&(o=Je({},o)),a.style=fa(o))}const m=We(e)?1:dc(e)?128:pg(e)?64:Le(e)?4:ye(e)?2:0;return w(e,a,n,s,r,m,d,!0)}function qc(e){return e?Ls(e)||on in e?Je({},e):e:null}function Ht(e,a,n=!1){const{props:s,ref:r,patchFlag:d,children:m}=e,p=a?Li(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&jc(p),ref:a&&a.ref?n&&r?me(r)?r.concat(Cl(a)):[r,Cl(a)]:Cl(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ae?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function l(e=" ",a=0){return t(Di,null,e,a)}function bg(e,a){const n=t(Ei,null,e);return n.staticCount=a,n}function no(e="",a=!1){return a?(R(),N(ut,null,e)):t(ut,null,e)}function Ct(e){return e==null||typeof e=="boolean"?t(ut):me(e)?t(Ae,null,e.slice()):typeof e=="object"?si(e):t(Di,null,String(e))}function si(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function so(e,a){let n=0;const{shapeFlag:s}=e;if(a==null)a=null;else if(me(a))n=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),so(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=a._;!r&&!(on in a)?a._ctx=Xe:r===3&&Xe&&(Xe.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else ye(a)?(a={default:a,_ctx:Xe},n=32):(a=String(a),s&64?(n=16,a=[l(a)]):n=8);e.children=a,e.shapeFlag|=n}function Li(...e){const a={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=Za([a.class,s.class]));else if(r==="style")a.style=fa([a.style,s.style]);else if(Xa(r)){const d=a[r],m=s[r];m&&d!==m&&!(me(d)&&d.includes(m))&&(a[r]=d?[].concat(d,m):m)}else r!==""&&(a[r]=s[r])}return a}function pt(e,a,n,s=null){At(e,a,7,[n,s])}const vg=Tc();let yg=0;function Gc(e,a,n){const s=e.type,r=(a?a.appContext:e.appContext)||vg,d={uid:yg++,vnode:e,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(s,r),emitsOptions:nc(s,r),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=ff.bind(null,d),e.ce&&e.ce(d),d}let Qe=null;const Ot=()=>Qe||Xe;let El,ts;{const e=Ed(),a=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),d=>{r.length>1?r.forEach(m=>m(d)):r[0](d)}};El=a("__VUE_INSTANCE_SETTERS__",n=>Qe=n),ts=a("__VUE_SSR_SETTERS__",n=>al=n)}const Pi=e=>{const a=Qe;return El(e),e.scope.on(),()=>{e.scope.off(),El(a)}},is=()=>{Qe&&Qe.scope.off(),El(null)};function Uc(e){return e.vnode.shapeFlag&4}let al=!1;function Yc(e,a=!1){a&&ts(a);const{props:n,children:s}=e.vnode,r=Uc(e);lg(e,n,r,a),og(e,s);const d=r?Cg(e,a):void 0;return a&&ts(!1),d}function Cg(e,a){const n=e.type;e.accessCache=Object.create(null),e.proxy=Os(new Proxy(e.ctx,Wn));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Wc(e):null,d=Pi(e);Vi();const m=Jt(s,e,0,[e.props,r]);if(Fi(),d(),Ds(m)){if(m.then(is,is),a)return m.then(p=>{as(e,p,a)}).catch(p=>{Ni(p,e,0)});e.asyncDep=m}else as(e,m,a)}else Jc(e,a)}function as(e,a,n){ye(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Le(a)&&(e.setupState=Gs(a)),Jc(e,n)}let Rl,ls;function wg(e){Rl=e,ls=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Mf))}}const Sg=()=>!Rl;function Jc(e,a,n){const s=e.type;if(!e.render){if(!a&&Rl&&!s.render){const r=s.template||io(e).template;if(r){const{isCustomElement:d,compilerOptions:m}=e.appContext.config,{delimiters:p,compilerOptions:o}=s,u=Je(Je({isCustomElement:d,delimiters:p},m),o);s.render=Rl(r,u)}}e.render=s.render||ft,ls&&ls(e)}{const r=Pi(e);Vi();try{Kf(e)}finally{Fi(),r()}}}function Ag(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,n){return _t(e,"get","$attrs"),a[n]}}))}function Wc(e){const a=n=>{e.exposed=n||{}};return{get attrs(){return Ag(e)},slots:e.slots,emit:e.emit,expose:a}}function rn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gs(Os(e.exposed)),{get(a,n){if(n in a)return a[n];if(n in za)return za[n](e)},has(a,n){return n in a||n in za}}))}function ns(e,a=!0){return ye(e)?e.displayName||e.name:e.name||a&&e.__name}function kg(e){return ye(e)&&"__vccOpts"in e}const F=(e,a)=>Wp(e,a,al);function $g(e,a,n=Ne){const s=Ot(),r=ct(a),d=St(a),m=Zd((o,u)=>{let f;return gc(()=>{const c=e[a];Mt(f,c)&&(f=c,u())}),{get(){return o(),n.get?n.get(f):f},set(c){const h=s.vnode.props;!(h&&(a in h||r in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${d}`in h))&&Mt(c,f)&&(f=c,u()),s.emit(`update:${a}`,n.set?n.set(c):c)}}}),p=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?e[p]||{}:m,done:!1}:{done:!0}}}},m}function U(e,a,n){const s=arguments.length;return s===2?Le(a)&&!me(a)?Rt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rt(n)&&(n=[n]),t(e,a,n))}function Bg(){}function xg(e,a,n,s){const r=n[s];if(r&&Kc(r,e))return r;const d=a();return d.memo=e.slice(),n[s]=d}function Kc(e,a){const n=e.memo;if(n.length!=a.length)return!1;for(let s=0;s<n.length;s++)if(Mt(n[s],a[s]))return!1;return Ii>0&&gt&&gt.push(e),!0}const Xc="3.4.15",Tg=ft,Eg=uf,Rg=qi,zg=lc,Dg={createComponentInstance:Gc,setupComponent:Yc,renderComponentRoot:yl,setCurrentRenderingInstance:qa,isVNode:Rt,normalizeVNode:Ct},Ig=Dg,Pg=null,Mg=null,Vg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Fg="http://www.w3.org/2000/svg",Ng="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,qo=oi&&oi.createElement("template"),Hg={insert:(e,a,n)=>{a.insertBefore(e,n||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,n,s)=>{const r=a==="svg"?oi.createElementNS(Fg,e):a==="mathml"?oi.createElementNS(Ng,e):oi.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>oi.createTextNode(e),createComment:e=>oi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>oi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,n,s,r,d){const m=n?n.previousSibling:a.lastChild;if(r&&(r===d||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),n),!(r===d||!(r=r.nextSibling)););else{qo.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const p=qo.content;if(s==="svg"||s==="mathml"){const o=p.firstChild;for(;o.firstChild;)p.appendChild(o.firstChild);p.removeChild(o)}a.insertBefore(p,n)}return[m?m.nextSibling:a.firstChild,n?n.previousSibling:a.lastChild]}},ti="transition",va="animation",oa=Symbol("_vtc"),un=(e,{slots:a})=>U(_c,Zc(e),a);un.displayName="Transition";const Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lg=un.props=Je({},Zs,Qc),Ci=(e,a=[])=>{me(e)?e.forEach(n=>n(...a)):e&&e(...a)},Go=e=>e?me(e)?e.some(a=>a.length>1):e.length>1:!1;function Zc(e){const a={};for(const q in e)q in Qc||(a[q]=e[q]);if(e.css===!1)return a;const{name:n="v",type:s,duration:r,enterFromClass:d=`${n}-enter-from`,enterActiveClass:m=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:o=d,appearActiveClass:u=m,appearToClass:f=p,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=Og(r),y=g&&g[0],A=g&&g[1],{onBeforeEnter:B,onEnter:_,onEnterCancelled:S,onLeave:$,onLeaveCancelled:x,onBeforeAppear:E=B,onAppear:M=_,onAppearCancelled:V=S}=a,I=(q,ce,Be)=>{ai(q,ce?f:p),ai(q,ce?u:m),Be&&Be()},L=(q,ce)=>{q._isLeaving=!1,ai(q,c),ai(q,v),ai(q,h),ce&&ce()},W=q=>(ce,Be)=>{const O=q?M:_,Y=()=>I(ce,q,Be);Ci(O,[ce,Y]),Uo(()=>{ai(ce,q?o:d),qt(ce,q?f:p),Go(O)||Yo(ce,s,y,Y)})};return Je(a,{onBeforeEnter(q){Ci(B,[q]),qt(q,d),qt(q,m)},onBeforeAppear(q){Ci(E,[q]),qt(q,o),qt(q,u)},onEnter:W(!1),onAppear:W(!0),onLeave(q,ce){q._isLeaving=!0;const Be=()=>L(q,ce);qt(q,c),tm(),qt(q,h),Uo(()=>{q._isLeaving&&(ai(q,c),qt(q,v),Go($)||Yo(q,s,A,Be))}),Ci($,[q,Be])},onEnterCancelled(q){I(q,!1),Ci(S,[q])},onAppearCancelled(q){I(q,!0),Ci(V,[q])},onLeaveCancelled(q){L(q),Ci(x,[q])}})}function Og(e){if(e==null)return null;if(Le(e))return[An(e.enter),An(e.leave)];{const a=An(e);return[a,a]}}function An(e){return Al(e)}function qt(e,a){a.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[oa]||(e[oa]=new Set)).add(a)}function ai(e,a){a.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[oa];n&&(n.delete(a),n.size||(e[oa]=void 0))}function Uo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let jg=0;function Yo(e,a,n,s){const r=e._endId=++jg,d=()=>{r===e._endId&&s()};if(n)return setTimeout(d,n);const{type:m,timeout:p,propCount:o}=em(e,a);if(!m)return s();const u=m+"end";let f=0;const c=()=>{e.removeEventListener(u,h),d()},h=v=>{v.target===e&&++f>=o&&c()};setTimeout(()=>{f<o&&c()},p+1),e.addEventListener(u,h)}function em(e,a){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),r=s(`${ti}Delay`),d=s(`${ti}Duration`),m=Jo(r,d),p=s(`${va}Delay`),o=s(`${va}Duration`),u=Jo(p,o);let f=null,c=0,h=0;a===ti?m>0&&(f=ti,c=m,h=d.length):a===va?u>0&&(f=va,c=u,h=o.length):(c=Math.max(m,u),f=c>0?m>u?ti:va:null,h=f?f===ti?d.length:o.length:0);const v=f===ti&&/\b(transform|all)(,|$)/.test(s(`${ti}Property`).toString());return{type:f,timeout:c,propCount:h,hasTransform:v}}function Jo(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((n,s)=>Wo(n)+Wo(e[s])))}function Wo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function tm(){return document.body.offsetHeight}function qg(e,a,n){const s=e[oa];s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?e.removeAttribute("class"):n?e.setAttribute("class",a):e.className=a}const oo=Symbol("_vod"),im={beforeMount(e,{value:a},{transition:n}){e[oo]=e.style.display==="none"?"":e.style.display,n&&a?n.beforeEnter(e):ya(e,a)},mounted(e,{value:a},{transition:n}){n&&a&&n.enter(e)},updated(e,{value:a,oldValue:n},{transition:s}){!a!=!n&&(s?a?(s.beforeEnter(e),ya(e,!0),s.enter(e)):s.leave(e,()=>{ya(e,!1)}):ya(e,a))},beforeUnmount(e,{value:a}){ya(e,a)}};function ya(e,a){e.style.display=a?e[oo]:"none"}function Gg(){im.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const am=Symbol("");function Ug(e){const a=Ot();if(!a)return;const n=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>os(d,r))},s=()=>{const r=e(a.proxy);ss(a.subTree,r),n(r)};fc(s),hi(()=>{const r=new MutationObserver(s);r.observe(a.subTree.el.parentNode,{childList:!0}),Hi(()=>r.disconnect())})}function ss(e,a){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ss(n.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)os(e.el,a);else if(e.type===Ae)e.children.forEach(n=>ss(n,a));else if(e.type===Ei){let{el:n,anchor:s}=e;for(;n&&(os(n,a),n!==s);)n=n.nextSibling}}function os(e,a){if(e.nodeType===1){const n=e.style;let s="";for(const r in a)n.setProperty(`--${r}`,a[r]),s+=`--${r}: ${a[r]};`;n[am]=s}}function Yg(e,a,n){const s=e.style,r=s.display,d=We(n);if(n&&!d){if(a&&!We(a))for(const m in a)n[m]==null&&rs(s,m,"");for(const m in n)rs(s,m,n[m])}else if(d){if(a!==n){const m=s[am];m&&(n+=";"+m),s.cssText=n}}else a&&e.removeAttribute("style");oo in e&&(s.display=r)}const Ko=/\s*!important$/;function rs(e,a,n){if(me(n))n.forEach(s=>rs(e,a,s));else if(n==null&&(n=""),a.startsWith("--"))e.setProperty(a,n);else{const s=Jg(e,a);Ko.test(n)?e.setProperty(St(s),n.replace(Ko,""),"important"):e[s]=n}}const Xo=["Webkit","Moz","ms"],kn={};function Jg(e,a){const n=kn[a];if(n)return n;let s=ct(a);if(s!=="filter"&&s in e)return kn[a]=s;s=Qa(s);for(let r=0;r<Xo.length;r++){const d=Xo[r]+s;if(d in e)return kn[a]=d}return a}const Qo="http://www.w3.org/1999/xlink";function Wg(e,a,n,s,r){if(s&&a.startsWith("xlink:"))n==null?e.removeAttributeNS(Qo,a.slice(6,a.length)):e.setAttributeNS(Qo,a,n);else{const d=Sp(a);n==null||d&&!Rd(n)?e.removeAttribute(a):e.setAttribute(a,d?"":n)}}function Kg(e,a,n,s,r,d,m){if(a==="innerHTML"||a==="textContent"){s&&m(s,r,d),e[a]=n??"";return}const p=e.tagName;if(a==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=n;const u=p==="OPTION"?e.getAttribute("value"):e.value,f=n??"";u!==f&&(e.value=f),n==null&&e.removeAttribute(a);return}let o=!1;if(n===""||n==null){const u=typeof e[a];u==="boolean"?n=Rd(n):n==null&&u==="string"?(n="",o=!0):u==="number"&&(n=0,o=!0)}try{e[a]=n}catch{}o&&e.removeAttribute(a)}function Ut(e,a,n,s){e.addEventListener(a,n,s)}function Xg(e,a,n,s){e.removeEventListener(a,n,s)}const Zo=Symbol("_vei");function Qg(e,a,n,s,r=null){const d=e[Zo]||(e[Zo]={}),m=d[a];if(s&&m)m.value=s;else{const[p,o]=Zg(a);if(s){const u=d[a]=ih(s,r);Ut(e,p,u,o)}else m&&(Xg(e,p,m,o),d[a]=void 0)}}const er=/(?:Once|Passive|Capture)$/;function Zg(e){let a;if(er.test(e)){a={};let s;for(;s=e.match(er);)e=e.slice(0,e.length-s[0].length),a[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),a]}let $n=0;const eh=Promise.resolve(),th=()=>$n||(eh.then(()=>$n=0),$n=Date.now());function ih(e,a){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(ah(s,n.value),a,5,[s])};return n.value=e,n.attached=th(),n}function ah(e,a){if(me(a)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lh=(e,a,n,s,r,d,m,p,o)=>{const u=r==="svg";a==="class"?qg(e,s,u):a==="style"?Yg(e,n,s):Xa(a)?Rs(a)||Qg(e,a,n,s,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):nh(e,a,s,u))?Kg(e,a,s,d,m,p,o):(a==="true-value"?e._trueValue=s:a==="false-value"&&(e._falseValue=s),Wg(e,a,s,u))};function nh(e,a,n,s){if(s)return!!(a==="innerHTML"||a==="textContent"||a in e&&tr(a)&&ye(n));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tr(a)&&We(n)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function lm(e,a){const n=z(e);class s extends dn{constructor(d){super(n,d,a)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>lm(e,hm),oh=typeof HTMLElement<"u"?HTMLElement:class{};class dn extends oh{constructor(a,n={},s){super(),this._def=a,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ga(()=>{this._connected||(Il(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(s,r=!1)=>{const{props:d,styles:m}=s;let p;if(d&&!me(d))for(const o in d){const u=d[o];(u===Number||u&&u.type===Number)&&(o in this._props&&(this._props[o]=Al(this._props[o])),(p||(p=Object.create(null)))[ct(o)]=!0)}this._numberProps=p,r&&this._resolveProps(s),this._applyStyles(m),this._update()},n=this._def.__asyncLoader;n?n().then(s=>a(s,!0)):a(this._def)}_resolveProps(a){const{props:n}=a,s=me(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(ct))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(d){this._setProp(r,d)}})}_setAttr(a){let n=this.getAttribute(a);const s=ct(a);this._numberProps&&this._numberProps[s]&&(n=Al(n)),this._setProp(s,n,!1)}_getProp(a){return this._props[a]}_setProp(a,n,s=!0,r=!0){n!==this._props[a]&&(this._props[a]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(St(a),""):typeof n=="string"||typeof n=="number"?this.setAttribute(St(a),n+""):n||this.removeAttribute(St(a))))}_update(){Il(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Je({},this._props));return this._instance||(a.ce=n=>{this._instance=n,n.isCE=!0;const s=(d,m)=>{this.dispatchEvent(new CustomEvent(d,{detail:m}))};n.emit=(d,...m)=>{s(d,m),St(d)!==d&&s(St(d),m)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof dn){n.parent=r._instance,n.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function rh(e="$style"){{const a=Ot();if(!a)return Ne;const n=a.type.__cssModules;if(!n)return Ne;const s=n[e];return s||Ne}}const nm=new WeakMap,sm=new WeakMap,zl=Symbol("_moveCb"),ir=Symbol("_enterCb"),om={name:"TransitionGroup",props:Je({},Lg,{tag:String,moveClass:String}),setup(e,{slots:a}){const n=Ot(),s=Qs();let r,d;return ln(()=>{if(!r.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!ph(r[0].el,n.vnode.el,m))return;r.forEach(dh),r.forEach(ch);const p=r.filter(mh);tm(),p.forEach(o=>{const u=o.el,f=u.style;qt(u,m),f.transform=f.webkitTransform=f.transitionDuration="";const c=u[zl]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",c),u[zl]=null,ai(u,m))};u.addEventListener("transitionend",c)})}),()=>{const m=Re(e),p=Zc(m);let o=m.tag||Ae;r=d,d=a.default?tn(a.default()):[];for(let u=0;u<d.length;u++){const f=d[u];f.key!=null&&zi(f,na(f,p,s,n))}if(r)for(let u=0;u<r.length;u++){const f=r[u];zi(f,na(f,p,s,n)),nm.set(f,f.el.getBoundingClientRect())}return t(o,null,d)}}},uh=e=>delete e.mode;om.props;const rm=om;function dh(e){const a=e.el;a[zl]&&a[zl](),a[ir]&&a[ir]()}function ch(e){sm.set(e,e.el.getBoundingClientRect())}function mh(e){const a=nm.get(e),n=sm.get(e),s=a.left-n.left,r=a.top-n.top;if(s||r){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${s}px,${r}px)`,d.transitionDuration="0s",e}}function ph(e,a,n){const s=e.cloneNode(),r=e[oa];r&&r.forEach(p=>{p.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(s);const{hasTransform:m}=em(s);return d.removeChild(s),m}const gi=e=>{const a=e.props["onUpdate:modelValue"]||!1;return me(a)?n=>Wi(a,n):a};function fh(e){e.target.composing=!0}function ar(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Et=Symbol("_assign"),Dl={created(e,{modifiers:{lazy:a,trim:n,number:s}},r){e[Et]=gi(r);const d=s||r.props&&r.props.type==="number";Ut(e,a?"change":"input",m=>{if(m.target.composing)return;let p=e.value;n&&(p=p.trim()),d&&(p=Na(p)),e[Et](p)}),n&&Ut(e,"change",()=>{e.value=e.value.trim()}),a||(Ut(e,"compositionstart",fh),Ut(e,"compositionend",ar),Ut(e,"change",ar))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:n,trim:s,number:r}},d){if(e[Et]=gi(d),e.composing)return;const m=r||e.type==="number"?Na(e.value):e.value,p=a??"";m!==p&&(document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===p)||(e.value=p))}},ro={deep:!0,created(e,a,n){e[Et]=gi(n),Ut(e,"change",()=>{const s=e._modelValue,r=ra(e),d=e.checked,m=e[Et];if(me(s)){const p=Yl(s,r),o=p!==-1;if(d&&!o)m(s.concat(r));else if(!d&&o){const u=[...s];u.splice(p,1),m(u)}}else if(Mi(s)){const p=new Set(s);d?p.add(r):p.delete(r),m(p)}else m(dm(e,d))})},mounted:lr,beforeUpdate(e,a,n){e[Et]=gi(n),lr(e,a,n)}};function lr(e,{value:a,oldValue:n},s){e._modelValue=a,me(a)?e.checked=Yl(a,s.props.value)>-1:Mi(a)?e.checked=a.has(s.props.value):a!==n&&(e.checked=Wt(a,dm(e,!0)))}const uo={created(e,{value:a},n){e.checked=Wt(a,n.props.value),e[Et]=gi(n),Ut(e,"change",()=>{e[Et](ra(e))})},beforeUpdate(e,{value:a,oldValue:n},s){e[Et]=gi(s),a!==n&&(e.checked=Wt(a,s.props.value))}},um={deep:!0,created(e,{value:a,modifiers:{number:n}},s){const r=Mi(a);Ut(e,"change",()=>{const d=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>n?Na(ra(m)):ra(m));e[Et](e.multiple?r?new Set(d):d:d[0]),e._assigning=!0,ga(()=>{e._assigning=!1})}),e[Et]=gi(s)},mounted(e,{value:a,oldValue:n,modifiers:{number:s}}){nr(e,a,n,s)},beforeUpdate(e,a,n){e[Et]=gi(n)},updated(e,{value:a,oldValue:n,modifiers:{number:s}}){e._assigning||nr(e,a,n,s)}};function nr(e,a,n,s){const r=e.multiple,d=me(a);if(!(r&&!d&&!Mi(a))&&!(d&&Wt(a,n))){for(let m=0,p=e.options.length;m<p;m++){const o=e.options[m],u=ra(o);if(r)if(d){const f=typeof u;f==="string"||f==="number"?o.selected=a.includes(s?Na(u):u):o.selected=Yl(a,u)>-1}else o.selected=a.has(u);else if(Wt(ra(o),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ra(e){return"_value"in e?e._value:e.value}function dm(e,a){const n=a?"_trueValue":"_falseValue";return n in e?e[n]:a}const cm={created(e,a,n){gl(e,a,n,null,"created")},mounted(e,a,n){gl(e,a,n,null,"mounted")},beforeUpdate(e,a,n,s){gl(e,a,n,s,"beforeUpdate")},updated(e,a,n,s){gl(e,a,n,s,"updated")}};function mm(e,a){switch(e){case"SELECT":return um;case"TEXTAREA":return Dl;default:switch(a){case"checkbox":return ro;case"radio":return uo;default:return Dl}}}function gl(e,a,n,s,r){const m=mm(e.tagName,n.props&&n.props.type)[r];m&&m(e,a,n,s)}function gh(){Dl.getSSRProps=({value:e})=>({value:e}),uo.getSSRProps=({value:e},a)=>{if(a.props&&Wt(a.props.value,e))return{checked:!0}},ro.getSSRProps=({value:e},a)=>{if(me(e)){if(a.props&&Yl(e,a.props.value)>-1)return{checked:!0}}else if(Mi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},cm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const n=mm(a.type.toUpperCase(),a.props&&a.props.type);if(n.getSSRProps)return n.getSSRProps(e,a)}}const hh=["ctrl","shift","alt","meta"],_h={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>hh.some(n=>e[`${n}Key`]&&!a.includes(n))},kt=(e,a)=>{const n=e._withMods||(e._withMods={}),s=a.join(".");return n[s]||(n[s]=(r,...d)=>{for(let m=0;m<a.length;m++){const p=_h[a[m]];if(p&&p(r,a))return}return e(r,...d)})},bh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vh=(e,a)=>{const n=e._withKeys||(e._withKeys={}),s=a.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const d=St(r.key);if(a.some(m=>m===d||bh[m]===d))return e(r)})},pm=Je({patchProp:lh},Hg);let Pa,sr=!1;function fm(){return Pa||(Pa=Pc(pm))}function gm(){return Pa=sr?Pa:Mc(pm),sr=!0,Pa}const Il=(...e)=>{fm().render(...e)},hm=(...e)=>{gm().hydrate(...e)},_m=(...e)=>{const a=fm().createApp(...e),{mount:n}=a;return a.mount=s=>{const r=vm(s);if(!r)return;const d=a._component;!ye(d)&&!d.render&&!d.template&&(d.template=r.innerHTML),r.innerHTML="";const m=n(r,!1,bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),m},a},yh=(...e)=>{const a=gm().createApp(...e),{mount:n}=a;return a.mount=s=>{const r=vm(s);if(r)return n(r,!0,bm(r))},a};function bm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vm(e){return We(e)?document.querySelector(e):e}let or=!1;const Ch=()=>{or||(or=!0,gh(),Gg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wh=()=>{},Sh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_c,BaseTransitionPropsValidators:Zs,Comment:ut,DeprecationTypes:Vg,EffectScope:Ps,ErrorCodes:rf,ErrorTypeStrings:Eg,Fragment:Ae,KeepAlive:zf,ReactiveEffect:la,Static:Ei,Suspense:wf,Teleport:sn,Text:Di,TrackOpTypes:nf,Transition:un,TransitionGroup:rm,TriggerOpTypes:sf,VueElement:dn,assertNumber:of,callWithAsyncErrorHandling:At,callWithErrorHandling:Jt,camelize:ct,capitalize:Qa,cloneVNode:Ht,compatUtils:Mg,compile:wh,computed:F,createApp:_m,createBlock:N,createCommentVNode:no,createElementBlock:fe,createElementVNode:w,createHydrationRenderer:Mc,createPropsRestProxy:Jf,createRenderer:Pc,createSSRApp:yh,createSlots:If,createStaticVNode:bg,createTextVNode:l,createVNode:t,customRef:Zd,defineAsyncComponent:Ef,defineComponent:z,defineCustomElement:lm,defineEmits:Ff,defineExpose:Nf,defineModel:Of,defineOptions:Hf,defineProps:Vf,defineSSRCustomElement:sh,defineSlots:Lf,devtools:Rg,effect:Bp,effectScope:kp,getCurrentInstance:Ot,getCurrentScope:Ms,getTransitionRawChildren:tn,guardReactiveProps:qc,h:U,handleError:Ni,hasInjectionContext:ag,hydrate:hm,initCustomFormatter:Bg,initDirectivesForSSR:Ch,inject:Me,isMemoSame:Kc,isProxy:Ls,isReactive:xi,isReadonly:Ri,isRef:nt,isRuntimeOnly:Sg,isShallow:Ha,isVNode:Rt,markRaw:Os,mergeDefaults:Uf,mergeModels:Yf,mergeProps:Li,nextTick:ga,normalizeClass:Za,normalizeProps:Cp,normalizeStyle:fa,onActivated:eo,onBeforeMount:yc,onBeforeUnmount:nn,onBeforeUpdate:Cc,onDeactivated:to,onErrorCaptured:kc,onMounted:hi,onRenderTracked:Ac,onRenderTriggered:Sc,onScopeDispose:Id,onServerPrefetch:wc,onUnmounted:Hi,onUpdated:ln,openBlock:R,popScopeId:oc,provide:lt,proxyRefs:Gs,pushScopeId:sc,queuePostFlushCb:$l,reactive:Kt,readonly:Hs,ref:j,registerRuntimeCompiler:wg,render:Il,renderList:Ze,renderSlot:sa,resolveComponent:b,resolveDirective:en,resolveDynamicComponent:uc,resolveFilter:Pg,resolveTransitionHooks:na,setBlockTracking:es,setDevtoolsHook:zg,setTransitionHooks:zi,shallowReactive:Wd,shallowReadonly:Jp,shallowRef:Xd,ssrContextKey:mc,ssrUtils:Ig,stop:xp,toDisplayString:xe,toHandlerKey:Ra,toHandlers:Pf,toRaw:Re,toRef:Gn,toRefs:tf,toValue:Qp,transformVNodeArgs:hg,triggerRef:Xp,unref:C,useAttrs:Gf,useCssModule:rh,useCssVars:Ug,useModel:$g,useSSRContext:pc,useSlots:qf,useTransitionState:Qs,vModelCheckbox:ro,vModelDynamic:cm,vModelRadio:uo,vModelSelect:um,vModelText:Dl,vShow:im,version:Xc,warn:Tg,watch:rt,watchEffect:Xs,watchPostEffect:fc,watchSyncEffect:gc,withAsyncContext:Wf,withCtx:i,withDefaults:jf,withDirectives:tl,withKeys:vh,withMemo:xg,withModifiers:kt,withScopeId:gf},Symbol.toStringTag,{value:"Module"})),Ah=z({name:"App"}),Ce=(e,a)=>{const n=e.__vccOpts||e;for(const[s,r]of a)n[s]=r;return n};function kh(e,a,n,s,r,d){const m=b("router-view");return R(),N(m)}const $h=Ce(Ah,[["render",kh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const ym=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ha=e=>ym?Symbol(e):"_vr_"+e,Cm=ha("rvlm"),rr=ha("rvd"),cn=ha("r"),co=ha("rl"),us=ha("rvl"),Gi=typeof window<"u";function Bh(e){return e.__esModule||ym&&e[Symbol.toStringTag]==="Module"}const je=Object.assign;function Bn(e,a){const n={};for(const s in a){const r=a[s];n[s]=Array.isArray(r)?r.map(e):e(r)}return n}const Ma=()=>{},xh=/\/$/,Th=e=>e.replace(xh,"");function xn(e,a,n="/"){let s,r={},d="",m="";const p=a.indexOf("?"),o=a.indexOf("#",p>-1?p:0);return p>-1&&(s=a.slice(0,p),d=a.slice(p+1,o>-1?o:a.length),r=e(d)),o>-1&&(s=s||a.slice(0,o),m=a.slice(o,a.length)),s=Dh(s??a,n),{fullPath:s+(d&&"?")+d+m,path:s,query:r,hash:m}}function Eh(e,a){const n=a.query?e(a.query):"";return a.path+(n&&"?")+n+(a.hash||"")}function ur(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Rh(e,a,n){const s=a.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ua(a.matched[s],n.matched[r])&&wm(a.params,n.params)&&e(a.query)===e(n.query)&&a.hash===n.hash}function ua(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function wm(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const n in e)if(!zh(e[n],a[n]))return!1;return!0}function zh(e,a){return Array.isArray(e)?dr(e,a):Array.isArray(a)?dr(a,e):e===a}function dr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((n,s)=>n===a[s]):e.length===1&&e[0]===a}function Dh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const n=a.split("/"),s=e.split("/");let r=n.length-1,d,m;for(d=0;d<s.length;d++)if(m=s[d],!(r===1||m==="."))if(m==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(d-(d===s.length?1:0)).join("/")}var Ja;(function(e){e.pop="pop",e.push="push"})(Ja||(Ja={}));var Va;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Va||(Va={}));function Ih(e){if(!e)if(Gi){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Th(e)}const Ph=/^[^#]+#/;function Mh(e,a){return e.replace(Ph,"#")+a}function Vh(e,a){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:a.behavior,left:s.left-n.left-(a.left||0),top:s.top-n.top-(a.top||0)}}const mn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fh(e){let a;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;a=Vh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function cr(e,a){return(history.state?history.state.position-a:-1)+e}const ds=new Map;function Nh(e,a){ds.set(e,a)}function Hh(e){const a=ds.get(e);return ds.delete(e),a}let Lh=()=>location.protocol+"//"+location.host;function Sm(e,a){const{pathname:n,search:s,hash:r}=a,d=e.indexOf("#");if(d>-1){let p=r.includes(e.slice(d))?e.slice(d).length:1,o=r.slice(p);return o[0]!=="/"&&(o="/"+o),ur(o,"")}return ur(n,e)+s+r}function Oh(e,a,n,s){let r=[],d=[],m=null;const p=({state:h})=>{const v=Sm(e,location),g=n.value,y=a.value;let A=0;if(h){if(n.value=v,a.value=h,m&&m===g){m=null;return}A=y?h.position-y.position:0}else s(v);r.forEach(B=>{B(n.value,g,{delta:A,type:Ja.pop,direction:A?A>0?Va.forward:Va.back:Va.unknown})})};function o(){m=n.value}function u(h){r.push(h);const v=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return d.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(je({},h.state,{scroll:mn()}),"")}function c(){for(const h of d)h();d=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:u,destroy:c}}function mr(e,a,n,s=!1,r=!1){return{back:e,current:a,forward:n,replaced:s,position:window.history.length,scroll:r?mn():null}}function jh(e){const{history:a,location:n}=window,s={value:Sm(e,n)},r={value:a.state};r.value||d(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(o,u,f){const c=e.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+o:Lh()+e+o;try{a[f?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function m(o,u){const f=je({},a.state,mr(r.value.back,o,r.value.forward,!0),u,{position:r.value.position});d(o,f,!0),s.value=o}function p(o,u){const f=je({},r.value,a.state,{forward:o,scroll:mn()});d(f.current,f,!0);const c=je({},mr(s.value,o,null),{position:f.position+1},u);d(o,c,!1),s.value=o}return{location:s,state:r,push:p,replace:m}}function qh(e){e=Ih(e);const a=jh(e),n=Oh(e,a.state,a.location,a.replace);function s(d,m=!0){m||n.pauseListeners(),history.go(d)}const r=je({location:"",base:e,go:s,createHref:Mh.bind(null,e)},a,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Gh(e){return typeof e=="string"||e&&typeof e=="object"}function Am(e){return typeof e=="string"||typeof e=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},km=ha("nf");var pr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pr||(pr={}));function da(e,a){return je(new Error,{type:e,[km]:!0},a)}function wi(e,a){return e instanceof Error&&km in e&&(a==null||!!(e.type&a))}const fr="[^/]+?",Uh={sensitive:!1,strict:!1,start:!0,end:!0},Yh=/[.+*?^${}()[\]/\\]/g;function Jh(e,a){const n=je({},Uh,a),s=[];let r=n.start?"^":"";const d=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let c=0;c<u.length;c++){const h=u[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(r+="/"),r+=h.value.replace(Yh,"\\$&"),v+=40;else if(h.type===1){const{value:g,repeatable:y,optional:A,regexp:B}=h;d.push({name:g,repeatable:y,optional:A});const _=B||fr;if(_!==fr){v+=10;try{new RegExp(`(${_})`)}catch($){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+$.message)}}let S=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;c||(S=A&&u.length<2?`(?:/${S})`:"/"+S),A&&(S+="?"),r+=S,v+=20,A&&(v+=-8),y&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const m=new RegExp(r,n.sensitive?"":"i");function p(u){const f=u.match(m),c={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",g=d[h-1];c[g.name]=v&&g.repeatable?v.split("/"):v}return c}function o(u){let f="",c=!1;for(const h of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:g,repeatable:y,optional:A}=v,B=g in u?u[g]:"";if(Array.isArray(B)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(B)?B.join("/"):B;if(!_)if(A)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${g}"`);f+=_}}return f}return{re:m,score:s,keys:d,parse:p,stringify:o}}function Wh(e,a){let n=0;for(;n<e.length&&n<a.length;){const s=a[n]-e[n];if(s)return s;n++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Kh(e,a){let n=0;const s=e.score,r=a.score;for(;n<s.length&&n<r.length;){const d=Wh(s[n],r[n]);if(d)return d;n++}return r.length-s.length}const Xh={type:0,value:""},Qh=/[a-zA-Z0-9_]/;function Zh(e){if(!e)return[[]];if(e==="/")return[[Xh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,s=n;const r=[];let d;function m(){d&&r.push(d),d=[]}let p=0,o,u="",f="";function c(){u&&(n===0?d.push({type:0,value:u}):n===1||n===2||n===3?(d.length>1&&(o==="*"||o==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:u,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=o}for(;p<e.length;){if(o=e[p++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(u&&c(),m()):o===":"?(c(),n=1):h();break;case 4:h(),n=s;break;case 1:o==="("?n=2:Qh.test(o)?h():(c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:n=3:f+=o;break;case 3:c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--,f="";break;default:a("Unknown state");break}}return n===2&&a(`Unfinished custom RegExp for param "${u}"`),c(),m(),r}function e_(e,a,n){const s=Jh(Zh(e.path),n),r=je(s,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function t_(e,a){const n=[],s=new Map;a=hr({strict:!1,end:!0,sensitive:!1},a);function r(f){return s.get(f)}function d(f,c,h){const v=!h,g=a_(f);g.aliasOf=h&&h.record;const y=hr(a,f),A=[g];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of S)A.push(je({},g,{components:h?h.record.components:g.components,path:$,aliasOf:h?h.record:g}))}let B,_;for(const S of A){const{path:$}=S;if(c&&$[0]!=="/"){const x=c.record.path,E=x[x.length-1]==="/"?"":"/";S.path=c.record.path+($&&E+$)}if(B=e_(S,c,y),h?h.alias.push(B):(_=_||B,_!==B&&_.alias.push(B),v&&f.name&&!gr(B)&&m(f.name)),"children"in g){const x=g.children;for(let E=0;E<x.length;E++)d(x[E],B,h&&h.children[E])}h=h||B,o(B)}return _?()=>{m(_)}:Ma}function m(f){if(Am(f)){const c=s.get(f);c&&(s.delete(f),n.splice(n.indexOf(c),1),c.children.forEach(m),c.alias.forEach(m))}else{const c=n.indexOf(f);c>-1&&(n.splice(c,1),f.record.name&&s.delete(f.record.name),f.children.forEach(m),f.alias.forEach(m))}}function p(){return n}function o(f){let c=0;for(;c<n.length&&Kh(f,n[c])>=0;)c++;n.splice(c,0,f),f.record.name&&!gr(f)&&s.set(f.record.name,f)}function u(f,c){let h,v={},g,y;if("name"in f&&f.name){if(h=s.get(f.name),!h)throw da(1,{location:f});y=h.record.name,v=je(i_(c.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),g=h.stringify(v)}else if("path"in f)g=f.path,h=n.find(_=>_.re.test(g)),h&&(v=h.parse(g),y=h.record.name);else{if(h=c.name?s.get(c.name):n.find(_=>_.re.test(c.path)),!h)throw da(1,{location:f,currentLocation:c});y=h.record.name,v=je({},c.params,f.params),g=h.stringify(v)}const A=[];let B=h;for(;B;)A.unshift(B.record),B=B.parent;return{name:y,path:g,params:v,matched:A,meta:n_(A)}}return e.forEach(f=>d(f)),{addRoute:d,resolve:u,removeRoute:m,getRoutes:p,getRecordMatcher:r}}function i_(e,a){const n={};for(const s of a)s in e&&(n[s]=e[s]);return n}function a_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:l_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function l_(e){const a={},n=e.props||!1;if("component"in e)a.default=n;else for(const s in e.components)a[s]=typeof n=="boolean"?n:n[s];return a}function gr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function n_(e){return e.reduce((a,n)=>je(a,n.meta),{})}function hr(e,a){const n={};for(const s in e)n[s]=s in a?a[s]:e[s];return n}const $m=/#/g,s_=/&/g,o_=/\//g,r_=/=/g,u_=/\?/g,Bm=/\+/g,d_=/%5B/g,c_=/%5D/g,xm=/%5E/g,m_=/%60/g,Tm=/%7B/g,p_=/%7C/g,Em=/%7D/g,f_=/%20/g;function mo(e){return encodeURI(""+e).replace(p_,"|").replace(d_,"[").replace(c_,"]")}function g_(e){return mo(e).replace(Tm,"{").replace(Em,"}").replace(xm,"^")}function cs(e){return mo(e).replace(Bm,"%2B").replace(f_,"+").replace($m,"%23").replace(s_,"%26").replace(m_,"`").replace(Tm,"{").replace(Em,"}").replace(xm,"^")}function h_(e){return cs(e).replace(r_,"%3D")}function __(e){return mo(e).replace($m,"%23").replace(u_,"%3F")}function b_(e){return e==null?"":__(e).replace(o_,"%2F")}function Pl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function v_(e){const a={};if(e===""||e==="?")return a;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const d=s[r].replace(Bm," "),m=d.indexOf("="),p=Pl(m<0?d:d.slice(0,m)),o=m<0?null:Pl(d.slice(m+1));if(p in a){let u=a[p];Array.isArray(u)||(u=a[p]=[u]),u.push(o)}else a[p]=o}return a}function _r(e){let a="";for(let n in e){const s=e[n];if(n=h_(n),s==null){s!==void 0&&(a+=(a.length?"&":"")+n);continue}(Array.isArray(s)?s.map(d=>d&&cs(d)):[s&&cs(s)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+n,d!=null&&(a+="="+d))})}return a}function y_(e){const a={};for(const n in e){const s=e[n];s!==void 0&&(a[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}function Ca(){let e=[];function a(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:a,list:()=>e,reset:n}}function C_(e,a,n){const s=()=>{e[a].delete(n)};Hi(s),to(s),eo(()=>{e[a].add(n)}),e[a].add(n)}function w_(e){const a=Me(Cm,{}).value;a&&C_(a,"updateGuards",e)}function ri(e,a,n,s,r){const d=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((m,p)=>{const o=c=>{c===!1?p(da(4,{from:n,to:a})):c instanceof Error?p(c):Gh(c)?p(da(2,{from:a,to:c})):(d&&s.enterCallbacks[r]===d&&typeof c=="function"&&d.push(c),m())},u=e.call(s&&s.instances[r],a,n,o);let f=Promise.resolve(u);e.length<3&&(f=f.then(o)),f.catch(c=>p(c))})}function Tn(e,a,n,s){const r=[];for(const d of e)for(const m in d.components){let p=d.components[m];if(!(a!=="beforeRouteEnter"&&!d.instances[m]))if(S_(p)){const u=(p.__vccOpts||p)[a];u&&r.push(ri(u,n,s,d,m))}else{let o=p();r.push(()=>o.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${d.path}"`));const f=Bh(u)?u.default:u;d.components[m]=f;const h=(f.__vccOpts||f)[a];return h&&ri(h,n,s,d,m)()}))}}return r}function S_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function br(e){const a=Me(cn),n=Me(co),s=F(()=>a.resolve(C(e.to))),r=F(()=>{const{matched:o}=s.value,{length:u}=o,f=o[u-1],c=n.matched;if(!f||!c.length)return-1;const h=c.findIndex(ua.bind(null,f));if(h>-1)return h;const v=vr(o[u-2]);return u>1&&vr(f)===v&&c[c.length-1].path!==v?c.findIndex(ua.bind(null,o[u-2])):h}),d=F(()=>r.value>-1&&$_(n.params,s.value.params)),m=F(()=>r.value>-1&&r.value===n.matched.length-1&&wm(n.params,s.value.params));function p(o={}){return k_(o)?a[C(e.replace)?"replace":"push"](C(e.to)).catch(Ma):Promise.resolve()}return{route:s,href:F(()=>s.value.href),isActive:d,isExactActive:m,navigate:p}}const A_=z({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:br,setup(e,{slots:a}){const n=Kt(br(e)),{options:s}=Me(cn),r=F(()=>({[yr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=a.default&&a.default(n);return e.custom?d:U("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},d)}}}),Rm=A_;function k_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function $_(e,a){for(const n in a){const s=a[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((d,m)=>d!==r[m]))return!1}return!0}function vr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yr=(e,a,n)=>e??a??n,B_=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:n}){const s=Me(us),r=F(()=>e.route||s.value),d=Me(rr,0),m=F(()=>r.value.matched[d]);lt(rr,d+1),lt(Cm,m),lt(us,r);const p=j();return rt(()=>[p.value,m.value,e.name],([o,u,f],[c,h,v])=>{u&&(u.instances[f]=o,h&&h!==u&&o&&o===c&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),o&&u&&(!h||!ua(u,h)||!c)&&(u.enterCallbacks[f]||[]).forEach(g=>g(o))},{flush:"post"}),()=>{const o=r.value,u=m.value,f=u&&u.components[e.name],c=e.name;if(!f)return Cr(n.default,{Component:f,route:o});const h=u.props[e.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,y=U(f,je({},v,a,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[c]=null)},ref:p}));return Cr(n.default,{Component:y,route:o})||y}}});function Cr(e,a){if(!e)return null;const n=e(a);return n.length===1?n[0]:n}const x_=B_;function T_(e){const a=t_(e.routes,e),n=e.parseQuery||v_,s=e.stringifyQuery||_r,r=e.history,d=Ca(),m=Ca(),p=Ca(),o=Xd(ii);let u=ii;Gi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bn.bind(null,G=>""+G),c=Bn.bind(null,b_),h=Bn.bind(null,Pl);function v(G,oe){let se,ge;return Am(G)?(se=a.getRecordMatcher(G),ge=oe):ge=G,a.addRoute(ge,se)}function g(G){const oe=a.getRecordMatcher(G);oe&&a.removeRoute(oe)}function y(){return a.getRoutes().map(G=>G.record)}function A(G){return!!a.getRecordMatcher(G)}function B(G,oe){if(oe=je({},oe||o.value),typeof G=="string"){const $e=xn(n,G,oe.path),T=a.resolve({path:$e.path},oe),D=r.createHref($e.fullPath);return je($e,T,{params:h(T.params),hash:Pl($e.hash),redirectedFrom:void 0,href:D})}let se;if("path"in G)se=je({},G,{path:xn(n,G.path,oe.path).path});else{const $e=je({},G.params);for(const T in $e)$e[T]==null&&delete $e[T];se=je({},G,{params:c(G.params)}),oe.params=c(oe.params)}const ge=a.resolve(se,oe),Ve=G.hash||"";ge.params=f(h(ge.params));const Fe=Eh(s,je({},G,{hash:g_(Ve),path:ge.path})),ke=r.createHref(Fe);return je({fullPath:Fe,hash:Ve,query:s===_r?y_(G.query):G.query||{}},ge,{redirectedFrom:void 0,href:ke})}function _(G){return typeof G=="string"?xn(n,G,o.value.path):je({},G)}function S(G,oe){if(u!==G)return da(8,{from:oe,to:G})}function $(G){return M(G)}function x(G){return $(je(_(G),{replace:!0}))}function E(G){const oe=G.matched[G.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let ge=typeof se=="function"?se(G):se;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=_(ge):{path:ge},ge.params={}),je({query:G.query,hash:G.hash,params:G.params},ge)}}function M(G,oe){const se=u=B(G),ge=o.value,Ve=G.state,Fe=G.force,ke=G.replace===!0,$e=E(se);if($e)return M(je(_($e),{state:Ve,force:Fe,replace:ke}),oe||se);const T=se;T.redirectedFrom=oe;let D;return!Fe&&Rh(s,ge,se)&&(D=da(16,{to:T,from:ge}),Ue(ge,ge,!0,!1)),(D?Promise.resolve(D):I(T,ge)).catch(H=>wi(H)?H:ue(H,T,ge)).then(H=>{if(H){if(wi(H,2))return M(je(_(H.to),{state:Ve,force:Fe,replace:ke}),oe||T)}else H=W(T,ge,!0,ke,Ve);return L(T,ge,H),H})}function V(G,oe){const se=S(G,oe);return se?Promise.reject(se):Promise.resolve()}function I(G,oe){let se;const[ge,Ve,Fe]=E_(G,oe);se=Tn(ge.reverse(),"beforeRouteLeave",G,oe);for(const $e of ge)$e.leaveGuards.forEach(T=>{se.push(ri(T,G,oe))});const ke=V.bind(null,G,oe);return se.push(ke),ji(se).then(()=>{se=[];for(const $e of d.list())se.push(ri($e,G,oe));return se.push(ke),ji(se)}).then(()=>{se=Tn(Ve,"beforeRouteUpdate",G,oe);for(const $e of Ve)$e.updateGuards.forEach(T=>{se.push(ri(T,G,oe))});return se.push(ke),ji(se)}).then(()=>{se=[];for(const $e of G.matched)if($e.beforeEnter&&!oe.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const T of $e.beforeEnter)se.push(ri(T,G,oe));else se.push(ri($e.beforeEnter,G,oe));return se.push(ke),ji(se)}).then(()=>(G.matched.forEach($e=>$e.enterCallbacks={}),se=Tn(Fe,"beforeRouteEnter",G,oe),se.push(ke),ji(se))).then(()=>{se=[];for(const $e of m.list())se.push(ri($e,G,oe));return se.push(ke),ji(se)}).catch($e=>wi($e,8)?$e:Promise.reject($e))}function L(G,oe,se){for(const ge of p.list())ge(G,oe,se)}function W(G,oe,se,ge,Ve){const Fe=S(G,oe);if(Fe)return Fe;const ke=oe===ii,$e=Gi?history.state:{};se&&(ge||ke?r.replace(G.fullPath,je({scroll:ke&&$e&&$e.scroll},Ve)):r.push(G.fullPath,Ve)),o.value=G,Ue(G,oe,se,ke),Te()}let q;function ce(){q=r.listen((G,oe,se)=>{const ge=B(G),Ve=E(ge);if(Ve){M(je(Ve,{replace:!0}),ge).catch(Ma);return}u=ge;const Fe=o.value;Gi&&Nh(cr(Fe.fullPath,se.delta),mn()),I(ge,Fe).catch(ke=>wi(ke,12)?ke:wi(ke,2)?(M(ke.to,ge).then($e=>{wi($e,20)&&!se.delta&&se.type===Ja.pop&&r.go(-1,!1)}).catch(Ma),Promise.reject()):(se.delta&&r.go(-se.delta,!1),ue(ke,ge,Fe))).then(ke=>{ke=ke||W(ge,Fe,!1),ke&&(se.delta?r.go(-se.delta,!1):se.type===Ja.pop&&wi(ke,20)&&r.go(-1,!1)),L(ge,Fe,ke)}).catch(Ma)})}let Be=Ca(),O=Ca(),Y;function ue(G,oe,se){Te(G);const ge=O.list();return ge.length?ge.forEach(Ve=>Ve(G,oe,se)):console.error(G),Promise.reject(G)}function ie(){return Y&&o.value!==ii?Promise.resolve():new Promise((G,oe)=>{Be.add([G,oe])})}function Te(G){Y||(Y=!0,ce(),Be.list().forEach(([oe,se])=>G?se(G):oe()),Be.reset())}function Ue(G,oe,se,ge){const{scrollBehavior:Ve}=e;if(!Gi||!Ve)return Promise.resolve();const Fe=!se&&Hh(cr(G.fullPath,0))||(ge||!se)&&history.state&&history.state.scroll||null;return ga().then(()=>Ve(G,oe,Fe)).then(ke=>ke&&Fh(ke)).catch(ke=>ue(ke,G,oe))}const et=G=>r.go(G);let Oe;const jt=new Set;return{currentRoute:o,addRoute:v,removeRoute:g,hasRoute:A,getRoutes:y,resolve:B,options:e,push:$,replace:x,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:d.add,beforeResolve:m.add,afterEach:p.add,onError:O.add,isReady:ie,install(G){const oe=this;G.component("RouterLink",Rm),G.component("RouterView",x_),G.config.globalProperties.$router=oe,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>C(o)}),Gi&&!Oe&&o.value===ii&&(Oe=!0,$(r.location).catch(Ve=>{}));const se={};for(const Ve in ii)se[Ve]=F(()=>o.value[Ve]);G.provide(cn,oe),G.provide(co,Kt(se)),G.provide(us,o);const ge=G.unmount;jt.add(G),G.unmount=function(){jt.delete(G),jt.size<1&&(u=ii,q&&q(),o.value=ii,Oe=!1,Y=!1),ge()}}}}function ji(e){return e.reduce((a,n)=>a.then(()=>n()),Promise.resolve())}function E_(e,a){const n=[],s=[],r=[],d=Math.max(a.matched.length,e.matched.length);for(let m=0;m<d;m++){const p=a.matched[m];p&&(e.matched.find(u=>ua(u,p))?s.push(p):n.push(p));const o=e.matched[m];o&&(a.matched.find(u=>ua(u,o))||r.push(o))}return[n,s,r]}function zm(){return Me(cn)}function Dm(){return Me(co)}const R_={__name:"Navbar",props:["onClick"],setup(e){const a=j(),n=zm();function s(r){return r.charAt(0).toUpperCase()+r.slice(1)}return Xs(()=>{const m=n.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=s(m[1]))}),(r,d)=>{const m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu");return R(),N(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(p,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(p,null,{default:i(()=>[l(xe(a.value),1)]),_:1})]),_:1})}}},z_=Ce(R_,[["__scopeId","data-v-338afb35"]]),D_=z({name:"Sidebar",setup(){const e=Dm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),I_=w("strong",null," Fomantic UI Vue ",-1),P_=w("b",null,"Getting Started",-1);function M_(e,a,n,s,r,d){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),u=b("sui-menu");return R(),N(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[I_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[P_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.elements,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.collections,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.views,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.modules,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const V_=Ce(D_,[["render",M_]]),F_={class:"sidemenu"},N_={style:{flex:"1","overflow-y":"scroll"}},H_={__name:"Sidebar",setup(e){return(a,n)=>(R(),fe("div",F_,[w("div",N_,[t(V_)])]))}},L_=Ce(H_,[["__scopeId","data-v-379ef704"]]),O_=z({name:"Sidebar",setup(){const e=Dm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),j_=w("strong",null," Fomantic UI Vue ",-1),q_=w("b",null,"Getting Started",-1);function G_(e,a,n,s,r,d){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),u=b("sui-sidebar");return R(),N(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[j_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.elements,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.collections,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.views,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.modules,f=>(R(),N(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const U_=Ce(O_,[["render",G_]]),Y_={class:"pusher",style:{height:"100vh"}},J_={class:"article"},W_={__name:"Home",setup(e){const a=j(!1),n=()=>a.value=!a.value;return w_(()=>{a.value=!1}),(s,r)=>{const d=b("router-view"),m=b("SuiSegment");return R(),N(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(U_,{visible:a.value},null,8,["visible"]),w("div",Y_,[t(L_),t(z_,{"on-click":n}),w("div",J_,[t(d)])])]),_:1})}}},K_=Ce(W_,[["__scopeId","data-v-0bfd4ee9"]]);var wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function X_(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var n=function s(){return this instanceof s?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};n.prototype=a.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var r=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return e[s]}})}),n}const Q_=X_(Sh);var Pm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,m={},p={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function _(S){return S instanceof o?new o(S.type,_(S.content),S.alias):Array.isArray(S)?S.map(_):S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(S,$){$=$||{};var x,E;switch(p.util.type(S)){case"Object":if(E=p.util.objId(S),$[E])return $[E];x={},$[E]=x;for(var M in S)S.hasOwnProperty(M)&&(x[M]=_(S[M],$));return x;case"Array":return E=p.util.objId(S),$[E]?$[E]:(x=[],$[E]=x,S.forEach(function(V,I){x[I]=_(V,$)}),x);default:return S}},getLanguage:function(_){for(;_;){var S=r.exec(_.className);if(S)return S[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,S){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+S)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(x){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(_){var S=document.getElementsByTagName("script");for(var $ in S)if(S[$].src==_)return S[$]}return null}},isActive:function(_,S,$){for(var x="no-"+S;_;){var E=_.classList;if(E.contains(S))return!0;if(E.contains(x))return!1;_=_.parentElement}return!!$}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(_,S){var $=p.util.clone(p.languages[_]);for(var x in S)$[x]=S[x];return $},insertBefore:function(_,S,$,x){x=x||p.languages;var E=x[_],M={};for(var V in E)if(E.hasOwnProperty(V)){if(V==S)for(var I in $)$.hasOwnProperty(I)&&(M[I]=$[I]);$.hasOwnProperty(V)||(M[V]=E[V])}var L=x[_];return x[_]=M,p.languages.DFS(p.languages,function(W,q){q===L&&W!=_&&(this[W]=M)}),M},DFS:function _(S,$,x,E){E=E||{};var M=p.util.objId;for(var V in S)if(S.hasOwnProperty(V)){$.call(S,V,S[V],x||V);var I=S[V],L=p.util.type(I);L==="Object"&&!E[M(I)]?(E[M(I)]=!0,_(I,$,null,E)):L==="Array"&&!E[M(I)]&&(E[M(I)]=!0,_(I,$,V,E))}}},plugins:{},highlightAll:function(_,S){p.highlightAllUnder(document,_,S)},highlightAllUnder:function(_,S,$){var x={callback:$,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),p.hooks.run("before-all-elements-highlight",x);for(var E=0,M;M=x.elements[E++];)p.highlightElement(M,S===!0,x.callback)},highlightElement:function(_,S,$){var x=p.util.getLanguage(_),E=p.languages[x];p.util.setLanguage(_,x);var M=_.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(M,x);var V=_.textContent,I={element:_,language:x,grammar:E,code:V};function L(q){I.highlightedCode=q,p.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,p.hooks.run("after-highlight",I),p.hooks.run("complete",I),$&&$.call(I.element)}if(p.hooks.run("before-sanity-check",I),M=I.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!I.code){p.hooks.run("complete",I),$&&$.call(I.element);return}if(p.hooks.run("before-highlight",I),!I.grammar){L(p.util.encode(I.code));return}if(S&&s.Worker){var W=new Worker(p.filename);W.onmessage=function(q){L(q.data)},W.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else L(p.highlight(I.code,I.grammar,I.language))},highlight:function(_,S,$){var x={code:_,grammar:S,language:$};if(p.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=p.tokenize(x.code,x.grammar),p.hooks.run("after-tokenize",x),o.stringify(p.util.encode(x.tokens),x.language)},tokenize:function(_,S){var $=S.rest;if($){for(var x in $)S[x]=$[x];delete S.rest}var E=new c;return h(E,E.head,_),f(_,E,S,E.head,0),g(E)},hooks:{all:{},add:function(_,S){var $=p.hooks.all;$[_]=$[_]||[],$[_].push(S)},run:function(_,S){var $=p.hooks.all[_];if(!(!$||!$.length))for(var x=0,E;E=$[x++];)E(S)}},Token:o};s.Prism=p;function o(_,S,$,x){this.type=_,this.content=S,this.alias=$,this.length=(x||"").length|0}o.stringify=function _(S,$){if(typeof S=="string")return S;if(Array.isArray(S)){var x="";return S.forEach(function(L){x+=_(L,$)}),x}var E={type:S.type,content:_(S.content,$),tag:"span",classes:["token",S.type],attributes:{},language:$},M=S.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(E.classes,M):E.classes.push(M)),p.hooks.run("wrap",E);var V="";for(var I in E.attributes)V+=" "+I+'="'+(E.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+V+">"+E.content+"</"+E.tag+">"};function u(_,S,$,x){_.lastIndex=S;var E=_.exec($);if(E&&x&&E[1]){var M=E[1].length;E.index+=M,E[0]=E[0].slice(M)}return E}function f(_,S,$,x,E,M){for(var V in $)if(!(!$.hasOwnProperty(V)||!$[V])){var I=$[V];I=Array.isArray(I)?I:[I];for(var L=0;L<I.length;++L){if(M&&M.cause==V+","+L)return;var W=I[L],q=W.inside,ce=!!W.lookbehind,Be=!!W.greedy,O=W.alias;if(Be&&!W.pattern.global){var Y=W.pattern.toString().match(/[imsuy]*$/)[0];W.pattern=RegExp(W.pattern.source,Y+"g")}for(var ue=W.pattern||W,ie=x.next,Te=E;ie!==S.tail&&!(M&&Te>=M.reach);Te+=ie.value.length,ie=ie.next){var Ue=ie.value;if(S.length>_.length)return;if(!(Ue instanceof o)){var et=1,Oe;if(Be){if(Oe=u(ue,Te,_,ce),!Oe||Oe.index>=_.length)break;var oe=Oe.index,jt=Oe.index+Oe[0].length,$t=Te;for($t+=ie.value.length;oe>=$t;)ie=ie.next,$t+=ie.value.length;if($t-=ie.value.length,Te=$t,ie.value instanceof o)continue;for(var G=ie;G!==S.tail&&($t<jt||typeof G.value=="string");G=G.next)et++,$t+=G.value.length;et--,Ue=_.slice(Te,$t),Oe.index-=Te}else if(Oe=u(ue,0,Ue,ce),!Oe)continue;var oe=Oe.index,se=Oe[0],ge=Ue.slice(0,oe),Ve=Ue.slice(oe+se.length),Fe=Te+Ue.length;M&&Fe>M.reach&&(M.reach=Fe);var ke=ie.prev;ge&&(ke=h(S,ke,ge),Te+=ge.length),v(S,ke,et);var $e=new o(V,q?p.tokenize(se,q):se,O,se);if(ie=h(S,ke,$e),Ve&&h(S,ie,Ve),et>1){var T={cause:V+","+L,reach:Fe};f(_,S,$,ie.prev,Te,T),M&&T.reach>M.reach&&(M.reach=T.reach)}}}}}}function c(){var _={value:null,prev:null,next:null},S={value:null,prev:_,next:null};_.next=S,this.head=_,this.tail=S,this.length=0}function h(_,S,$){var x=S.next,E={value:$,prev:S,next:x};return S.next=E,x.prev=E,_.length++,E}function v(_,S,$){for(var x=S.next,E=0;E<$&&x!==_.tail;E++)x=x.next;S.next=x,x.prev=S,_.length-=E}function g(_){for(var S=[],$=_.head.next;$!==_.tail;)S.push($.value),$=$.next;return S}if(!s.document)return s.addEventListener&&(p.disableWorkerMessageHandler||s.addEventListener("message",function(_){var S=JSON.parse(_.data),$=S.language,x=S.code,E=S.immediateClose;s.postMessage(p.highlight(x,p.languages[$],$)),E&&s.close()},!1)),p;var y=p.util.currentScript();y&&(p.filename=y.src,y.hasAttribute("data-manual")&&(p.manual=!0));function A(){p.manual||p.highlightAll()}if(!p.manual){var B=document.readyState;B==="loading"||B==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return p}(a);e.exports&&(e.exports=n),typeof wr<"u"&&(wr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,d){var m={};m["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[d]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};p["language-"+d]={pattern:/[\s\S]+/,inside:n.languages[d]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var d=s.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",r=function(y,A){return"✖ Error "+y+" while fetching file: "+A},d="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",o="loading",u="loaded",f="failed",c="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+o+'"])';function h(y,A,B){var _=new XMLHttpRequest;_.open("GET",y,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?A(_.responseText):_.status>=400?B(r(_.status,_.statusText)):B(d))},_.send(null)}function v(y){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(A){var B=Number(A[1]),_=A[2],S=A[3];return _?S?[B,Number(S)]:[B,void 0]:[B,B]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var A=y.element;if(A.matches(c)){y.code="",A.setAttribute(p,o);var B=A.appendChild(document.createElement("CODE"));B.textContent=s;var _=A.getAttribute("data-src"),S=y.language;if(S==="none"){var $=(/\.(\w+)$/.exec(_)||[,"none"])[1];S=m[$]||$}n.util.setLanguage(B,S),n.util.setLanguage(A,S);var x=n.plugins.autoloader;x&&x.loadLanguages(S),h(_,function(E){A.setAttribute(p,u);var M=v(A.getAttribute("data-range"));if(M){var V=E.split(/\r\n?|\n/g),I=M[0],L=M[1]==null?V.length:M[1];I<0&&(I+=V.length),I=Math.max(0,Math.min(I-1,V.length)),L<0&&(L+=V.length),L=Math.max(0,Math.min(L,V.length)),E=V.slice(I,L).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(I+1))}B.textContent=E,n.highlightElement(B)},function(E){A.setAttribute(p,f),B.textContent=E})}}),n.plugins.fileHighlight={highlight:function(A){for(var B=(A||document).querySelectorAll(c),_=0,S;S=B[_++];)n.highlightElement(S)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Pm);var Mm=Pm.exports;const Z_=Im(Mm);function eb(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var hl=Q_,En=eb(Mm),tb=hl.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,n){var s=n.slots,r=n.attrs,d=s&&s.default&&s.default()||[],m=a.code||d&&d.length?d[0].children:"",p=a.inline,o=a.language,u=En.languages[o],f="language-".concat(o);return function(){return p?hl.h("code",{class:[f],innerHTML:En.highlight(m,u)}):hl.h("pre",Object.assign({},r,{class:[r.class,f]}),[hl.h("code",Object.assign({},r,{class:[r.class,f],innerHTML:En.highlight(m,u)}))])}}}),ib=tb;const Vm=Im(ib),ab=z({name:"DocPageHeader",props:{title:String,sub:String}}),lb={class:"intro",style:{padding:"2rem"}};function nb(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment");return R(),N(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",lb,[t(p,{as:"h1"},{default:i(()=>[l(xe(e.title)+" ",1),t(m,null,{default:i(()=>[l(xe(e.sub),1)]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ge=Ce(ab,[["render",nb]]),sb=z({name:"GettingStarted",components:{Prism:Vm,DocPageHeader:Ge}}),pn=e=>(sc("data-v-2f4c2002"),e=e(),oc(),e),ob=pn(()=>w("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),rb=pn(()=>w("p",null," You can import all components as Vue plugin. ",-1)),ub=pn(()=>w("br",null,null,-1)),db=pn(()=>w("p",null," Or pick a component indivisually, add it to your components option. ",-1));function cb(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("prism"),u=b("sui-container");return R(),fe("div",null,[t(m,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),t(u,{class:"main"},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Install")]),_:1}),ob,t(p,{as:"h3"},{default:i(()=>[l("via Package Manager")]),_:1}),t(o,{language:"bash"},{default:i(()=>[l(xe(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),t(p,{as:"h2"},{default:i(()=>[l("Usage")]),_:1}),rb,t(o,{language:"js"},{default:i(()=>[l(xe(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),ub,db,t(o,{language:"js"},{default:i(()=>[l(xe(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const mb=Ce(sb,[["render",cb],["__scopeId","data-v-2f4c2002"]]),pb={__name:"DocSections",props:["docs"],setup(e){const a=e,n=F(()=>[...new Set(a.docs.map(s=>s.category))]);return(s,r)=>{const d=b("SuiHeader");return R(!0),fe(Ae,null,Ze(n.value,(m,p)=>(R(),fe(Ae,{key:m},[t(d,{as:"h2",dividing:"",style:fa({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[l(xe(m),1)]),_:2},1032,["style"]),(R(!0),fe(Ae,null,Ze(e.docs.filter(o=>o.category===m),(o,u)=>(R(),N(uc(o.component),{key:o.label+"_"+u,id:o.id,style:{marginTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},fb={};function gb(e,a){const n=b("SuiRail");return R(),N(n,{id:"table-contents",position:"right",dividing:""})}const hb=Ce(fb,[["render",gb],["__scopeId","data-v-c0207a98"]]),_b={class:"intro"},bb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){return(a,n)=>{const s=b("SuiHeaderSubheader"),r=b("SuiHeader"),d=b("SuiDivider"),m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu"),u=b("SuiContainer"),f=b("SuiSegment");return R(),fe("div",null,[t(f,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(u,{class:"main"},{default:i(()=>[w("div",_b,[t(r,{as:"h1"},{default:i(()=>[l(xe(e.title)+" ",1),t(s,null,{default:i(()=>[l(xe(e.description),1)]),_:1})]),_:1}),t(d,{hidden:""}),t(o,{floated:"right"},{default:i(()=>[t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"edit"})]),_:1}),t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(u,{class:"main"},{default:i(()=>[t(f,{basic:"",fitted:""},{default:i(()=>[t(pb,{docs:e.componentDocs},null,8,["docs"]),t(hb)]),_:1})]),_:1})])}}},_i=Ce(bb,[["__scopeId","data-v-e908f995"]]);function Fm(e){var a,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=Fm(e[a]))&&(s&&(s+=" "),s+=n);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function Q(){for(var e,a,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(a=Fm(e))&&(s&&(s+=" "),s+=a);return s}const k=(e,a)=>e?a:"",Pe=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Ie=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",_a=e=>e==="justified"?"justified":Pe(e,"aligned"),Qt=(e,a)=>typeof e=="number"&&a?`${ms(e)} ${a}`:typeof e=="number"&&!a?ms(e):typeof e=="string"&&e==="equal"?`${e} width`:"",wa=(e,a)=>e?`${ms(e)} wide ${a}`:"",ms=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],ee=z({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:F(()=>Q(e.color,e.name,e.size,k(e.bordered,"bordered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fitted,"fitted"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.loading,"loading"),Pe(e.flipped,"flipped"),Pe(e.rotated,"rotated"),Ie(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return U(e,{"aria-hidden":!0,class:this.computedClass})}}),di=z({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:F(()=>Q(e.size,"icons"))}},render(){var e,a;let n=this.$props.as||"i";return U(n,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vb={install(e){e.component(ee.name,ee),e.component(di.name,di)}},yb=()=>({icon:[Boolean,String]}),Cb=e=>({iconClasses:F(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":Q({icon:e.icon&&!e.content}))}),wb=["right","left"],Sb=()=>({labeled:[Boolean,String]}),Ab=e=>({labeledClasses:F(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":wb.includes(e.labeled)?`${e.labeled} labeled`:"")}),kb=["double","elastic"],$b=()=>({loading:{type:[Boolean,String],validator:e=>kb.includes(e)||typeof e=="boolean"}}),Bb=e=>({loadingClasses:F(()=>Q(e.loading,{loading:e.loading}))}),P=z({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...yb(),...Sb(),...$b()},setup(e){const{iconClasses:a}=Cb(e),{labeledClasses:n}=Ab(e),{loadingClasses:s}=Bb(e);return{classes:F(()=>Q("ui",e.color,e.size,k(e.active,"active"),k(e.basic,"basic"),k(e.circular,"circular"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.facebook,"facebook"),k(e.fluid,"fluid"),k(e.google,"google"),k(e.linkedin,"linkedin"),k(e.instagram,"instagram"),k(e.inverted,"inverted"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.primary,"primary"),k(e.secondary,"secondary"),k(e.telegram,"telegram"),k(e.tertiary,"tertiary"),k(e.toggle,"toggle"),k(e.twitter,"twitter"),k(e.vk,"vk"),k(e.whatsapp,"whatsapp"),k(e.youtube,"youtube"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),Ie(e.animated,"animated"),a.value,n.value,s.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,n;return[typeof this.icon=="string"&&t(ee,{name:this.icon},null),this.content||((n=(a=this.$slots).default)==null?void 0:n.call(a))]}})}}),ui=z({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.hidden,"hidden"),k(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),st=z({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:F(()=>Q("ui",e.color,e.size,k(e.basic,"basic"),k(e.icon,"icon"),k(e.labeled,"labeled"),k(e.vertical,"vertical"),Pe(e.attached,"attached"),Qt(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),xb={install(e){e.component(P.name,P),e.component(ui.name,ui),e.component(st.name,st)}},mi=z({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:F(()=>Q("ui",k(e.fluid,"fluid"),k(e.text,"text"),_a(e.textAlign),"container"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tb={install(e){e.component(mi.name,mi)}},Ke=z({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:F(()=>Q("ui",k(e.clearing,"clearing"),k(e.fitted,"fitted"),k(e.hidden,"hidden"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.section,"section"),k(e.vertical,"vertical"),Pe(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb={install(e){e.component(Ke.name,Ke)}},ht=z({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:F(()=>Q(e.size,k(e.disabled,"disabled"),k(e.link,"link"),k(e.loading,"loading")))}},render(){return this.computedClass?U("em",{class:this.computedClass,"data-emoji":this.$props.name}):U("em",{"data-emoji":this.$props.name})}}),Rb={install(e){e.component(ht.name,ht)}},Dt=z({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:F(()=>Q(e.name,"flag"))}},render(){return U("i",{class:this.computedClass})}}),zb={install(e){e.component(Dt.name,Dt)}},ca=z({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return U(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pe=z({name:"SuiHeader",components:{HeaderSubheader:ca},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",n=F(()=>Q("ui",e.color,e.size,k(e.block,"block"),k(e.disabled,"disabled"),k(e.dividing,"dividing"),k(e.icon,"icon"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.sub,"sub"),Pe(e.floated,"floated"),Ie(e.attached,"attached"),_a(e.textAlign),"header"));return{elementType:a,computedClass:n}},render(){var e,a;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(U(ca,{},this.subheader)),n.length>0?U(this.elementType,{class:this.computedClass},n):U(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ml=z({name:"SuiHeaderContent",render(){var e,a;return U("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Db={install(e){e.component(pe.name,pe),e.component(Ml.name,Ml),e.component(ca.name,ca)}},Nm=["top","middle","bottom"],Ib={verticalAlign:{type:String,validator:e=>Nm.includes(e)}};function Pb(e){return{verticalAlignClass:F(()=>e.verticalAlign&&Nm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Mb=["left","right"],Vb={floated:{type:String,validator:e=>Mb.includes(e)}};function Fb(e){return{floatedClass:F(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const Pt=z({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const n=F(()=>Q("ui",e.size,e.color,k(e.basic,"basic"),k(e.circular,"circular"),k(e.empty,"empty"),k(e.floating,"floating"),k(e.horizontal,"horizontal"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.prompt,"prompt"),k(e.tag,"tag"),Pe(e.attached,"attached"),Pe(e.corner,"corner"),Ie(e.pointing,"pointing"),Ie(e.ribbon,"ribbon"),"label"));let s=e.as||"div";return e.icon?()=>U(s,{class:n.value},U(ee,{name:e.icon})):()=>{var r;return U(s,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Sr=z({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ar=z({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const n=F(()=>Q("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.tag,"tag"),"labels"));return()=>{var s;return U("div",{class:n.value},(s=a.default)==null?void 0:s.call(a))}}}),Nb={install(e){e.component(Pt.name,Pt),e.component(Sr.name,Sr),e.component(Ar.name,Ar)}},bt=z({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Ib,...Vb},setup(e,{slots:a}){const{verticalAlignClass:n}=Pb(e),{floatedClass:s}=Fb(e),r=F(()=>Q("ui",e.size,n.value,s.value,k(e.avatar,"avatar"),k(e.bordered,"bordered"),k(e.centered,"centered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.hidden,"hidden"),k(e.inline,"inline"),k(e.rounded,"rounded"),Ie(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=b(e.as)),()=>{var m;return U(d,{class:r.value,href:e.href,target:e.target&&e.target},U("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var d;return U("div",{class:r.value},U("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>U("div",{class:r.value},[U("img",{src:e.src}),U(Pt,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),kr=z({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const n=F(()=>Q("ui",e.size,"images"));return()=>{var s;return U("div",{class:n.value},(s=a.default)==null?void 0:s.call(a))}}}),Hb={install(e){e.component(bt.name,bt),e.component(kr.name,kr)}},ps=z({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const n=F(()=>typeof e.icon=="string"||e.loading),s=F(()=>!!e.label||e.labeled),r=F(()=>Q("ui",e.size,e.action&&"action",k(e.disabled,"disabled"),k(e.error,"error"),k(e.fluid,"fluid"),k(e.focus,"focus"),e.iconPosition,k(n.value,"icon"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.transparent,"transparent"),k(s.value,"labeled"),"input")),d=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:r.value},[e.label&&t(Pt,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>d(m)},null),n.value&&t(ee,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),Lb={install(e){e.component(ps.name,ps)}},$r=z({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const n=F(()=>Q("ui",k(e.animated,"animated"),k(e.bulleted,"bulleted"),k(e.celled,"celled"),k(e.divided,"divided"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.ordered,"ordered"),k(e.relaxed,"relaxed"),k(e.selection,"selection"),Pe(e.verticalAlign,"aligned"),Pe(e.floated,"floated"),"list"));let s=e.as||"div";return()=>{var r;return U(s,{class:n.value},(r=a.default)==null?void 0:r.call(a))}}}),Br=z({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let n=e.as||"div";const s=F(()=>Q(k(e.active,"active"),k(e.disabled,"disabled"),"item"));return()=>{var r;return U(n,{class:s.value},(r=a.default)==null?void 0:r.call(a))}}}),xr=z({name:"SuiListIcon",components:{Icon:ee},setup(e,{slots:a}){return()=>{var n;return U(b(ee.name),{...e},(n=a.default)==null?void 0:n.call(a))}}}),Tr=z({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:F(()=>Q(Pe(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Er=z({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return U(e.as,{class:"header"},(n=a.default)==null?void 0:n.call(a))}}}),Rr=z({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return U(e.as,{class:"description"},(n=a.default)==null?void 0:n.call(a))}}}),zr=z({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ob={install(e){e.component($r.name,$r),e.component(Br.name,Br),e.component(xr.name,xr),e.component(Tr.name,Tr),e.component(Er.name,Er),e.component(Rr.name,Rr),e.component(zr.name,zr)}},Dr=z({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:F(()=>{var n;return Q("ui",e.color,e.size,k(e.active,"active"),k(e.disabled,"disabled"),k(e.fast,"fast"),k(e.indeterminate,"indeterminate"),k(e.inverted,"inverted"),k(e.slow,"slow"),k(e.text||!!((n=a.default)!=null&&n.call(a)),"text"),Ie(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jb={install(e){e.component(Dr.name,Dr)}},Ir=z({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:F(()=>Q("ui",e.position,e.size,k(e.attached,"attached"),k(e.dividing,"dividing"),k(e.internal,"internal"),Ie(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qb={install(e){e.component(Ir.name,Ir)}},Pr=z({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.animated,k(e.active,"active"),k(e.disabled,"disabled"),k(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Mr=z({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:F(()=>Q("ui",k(e.visible,"visible"),k(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gb={install(e){e.component(Pr.name,Pr),e.component(Mr.name,Mr)}},mt=z({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.clearing,"clearing"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.piled,"piled"),k(e.placeholder,"placeholder"),k(e.raised,"raised"),k(e.secondary,"secondary"),k(e.stacked,"stacked"),k(e.tertiary,"tertiary"),k(e.vertical,"vertical"),Pe(e.floated,"floated"),Pe(e.textAlign,"aligned"),Ie(e.attached,"attached"),Ie(e.fitted,"fitted"),Ie(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Vr=z({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.size,k(e.compact,"compact"),k(e.horizontal,"horizontal"),k(e.piled,"piled"),k(e.raised,"raised"),k(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Fr=z({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ub={install(e){e.component(mt.name,mt),e.component(Vr.name,Vr),e.component(Fr.name,Fr)}},Nr=z({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.active,"active"),k(e.completed,"completed"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.link,"link"),k(e.vertical,"vertical"),"step"))}},render(){var e,a,n,s;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Yb=["one","two","three","four","five","six","seven","eight"],Hr=z({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:F(()=>Q("ui",a&&Yb[a-1],e.size,k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.ordered,"ordered"),k(e.unstackable,"unstackable"),k(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Lr=z({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Or=z({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jr=z({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jb={install(e){e.component(Nr.name,Nr),e.component(Hr.name,Hr),e.component(Lr.name,Lr),e.component(Or.name,Or),e.component(jr.name,jr)}},Wb=Object.freeze(Object.defineProperty({__proto__:null,Button:xb,Container:Tb,Divider:Eb,Emoji:Rb,Flag:zb,Header:Db,Icon:vb,Image:Hb,Input:Lb,Label:Nb,List:Ob,Loader:jb,Rail:qb,Reveal:Gb,Segment:Ub,Step:Jb},Symbol.toStringTag,{value:"Module"})),fs=z({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:F(()=>Q(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gs=z({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=F(()=>Q(k(e.active,"active"),"section")),n=e.link||!!e.href;return{computedClass:a,isLink:n}},render(){let e="div";this.isLink?e="a":this.to&&(e=b("router-link"));const a={href:this.href,to:this.to};return t(e,Li({class:this.computedClass},a),{default:()=>{var n,s;return[(s=(n=this.$slots).default)==null?void 0:s.call(n)]}})}}),qr=z({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:F(()=>Q("ui",e.size,k(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const n=()=>{var s;return(s=this.sections)==null?void 0:s.map((r,d)=>{const m={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ae,null,[t(gs,m,{default:()=>[r.content]}),this.sections.length!==d+1&&t(fs,{icon:this.icon},{default:()=>[l(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||n()])}}),Kb={install(e){e.component(qr.name,qr),e.component(fs.name,fs),e.component(gs.name,gs)}},hs=z({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:F(()=>Q("ui",e.size,k(e.error,"error"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.reply,"reply"),k(e.success,"success"),k(e.unstackable,"unstackable"),k(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Xb(e){return{widthClass:F(()=>Number(e.width)>0?`${Gr[Number(e.width)-1]} wide`:typeof e.width=="string"||Gr.includes(e.width)?`${e.width} wide`:null)}}const Vl=z({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:n}=Xb(e),s=F(()=>Q(k(e.disabled,"disabled"),k(e.error,"error"),k(e.inline,"inline"),k(e.required,"required"),n.value,"field")),r=e.type||"text";return{computedClass:s,inputType:r,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=z({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:F(()=>Q(Pe(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yr=z({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),Qb={install(e){e.component(hs.name,hs),e.component(Vl.name,Vl),e.component(Ur.name,Ur),e.component(Yr.name,Yr)}},_s=z({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:F(()=>Q("ui",e.container&&"container",k(e.centered,"centered"),k(e.compact,"compact"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),Pe(e.reversed,"reversed"),Pe(e.verticalAlign,"aligned"),Ie(e.celled,"celled"),Ie(e.divided,"divided"),Ie(e.padded,"padded"),Ie(e.relaxed,"relaxed"),_a(e.textAlign),Qt(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Fl=z({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:F(()=>Q(e.color,Pe(e.floated,"floated"),Pe(e.only,"only"),_a(e.textAlign),Qt(e.width,"wide"),wa(e.mobile,"mobile"),wa(e.tablet,"tablet"),wa(e.computer,"computer"),wa(e.largeScreen,"large screen"),wa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jr=z({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:F(()=>Q(e.color,k(e.centered,"centered"),k(e.stretched,"stretched"),Pe(e.only,"only"),Qt(e.columns,"column"),_a(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(_s.name,_s),e.component(Fl.name,Fl),e.component(Jr.name,Jr)}},Wr=z({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:F(()=>Q("ui",e.color,e.size,k(e.borderless,"borderless"),k(e.compact,"compact"),k(e.fixed,"fixed"),k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.pagination,"pagination"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.stackable,"stackable"),k(e.text,"text"),k(e.vertical,"vertical"),Ie(e.attached,"attached"),Ie(e.floated,"floated"),Ie(e.icon,"icon"),Ie(e.tabular,"tabular"),Qt(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=z({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let n=e.as||"div";return()=>t(n,{class:"header"},{default:()=>{var s;return[e.content||((s=a.default)==null?void 0:s.call(a))]}})}}),Xr=z({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let n=e.as||"a";e.header&&(n="div"),e.as==="router-link"&&(n=b(e.as));const s=F(()=>Q(e.color,e.position,k(e.action,"action"),k(e.active,"active"),k(e.browse,"browse"),k(e.disabled,"disabled"),k(e.header,"header"),k(e.link,"link"),Ie(e.fitted,"fitted"),"item"));return()=>t(n,{class:s.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),Qr=z({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:F(()=>Q(a,"menu"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ev={install(e){e.component(Wr.name,Wr),e.component(Kr.name,Kr),e.component(Xr.name,Xr),e.component(Qr.name,Qr)}},Zr=z({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.color,e.size,k(e.compact,"compact"),k(e.error,"error"),k(e.floating,"floating"),k(e.hidden,"hidden"),k(e.icon,"icon"),k(e.info,"info"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.success,"success"),k(e.visible,"visible"),k(e.warning,"warning"),Ie(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(bs,null,{default:()=>[t(vs,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bs=z({name:"SuiMessageContent",render(){var e,a;return U("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vs=z({name:"SuiMessageHeader",render(){var e,a;return U("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),eu=z({name:"SuiMessageItem",render(){var e,a;return U("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tu=z({name:"SuiMessageList",render(){var e,a;return U("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tv={install(e){e.component(Zr.name,Zr),e.component(bs.name,bs),e.component(vs.name,vs),e.component(eu.name,eu),e.component(tu.name,tu)}},iu=z({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.color,e.size,k(e.celled,"celled"),k(e.collapsing,"collapsing"),k(e.definition,"definition"),k(e.fixed,"fixed"),k(e.inverted,"inverted"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.stackable,"stackable"),k(e.striped,"striped"),k(e.structured,"structured"),k(e.unstackable,"unstackable"),Ie(e.attached,"attached"),Ie(e.basic,"basic"),Ie(e.compact,"compact"),Ie(e.padded,"padded"),Qt(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),au=z({name:"SuiTableBody",render(){var e,a;return U("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),lu=z({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:F(()=>Q(e.color,k(e.active,"active"),k(e.collapsing,"collapsing"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.warning,"warning"),Pe(e.verticalAlign,"aligned"),Pe(e.marked,"marked"),_a(e.textAlign)))}},render(){var e,a,n,s;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),nu=z({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:F(()=>Q(k(a,"full-width")))}},render(){var e,a,n,s;return this.computedClass?U("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):U("tfoot",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),su=z({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.fullWidth,"full-width")))}},render(){var e,a,n,s;return this.computedClass?U("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):U("thead",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),ou=z({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:F(()=>Q(k(e.singleLine,"single line"),Pe(e.textAlign,"aligned"),Qt(e.width,"wide")))}},render(){var e,a,n,s;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),ru=z({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:F(()=>Q(e.color,k(e.active,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.warning,"warning"),Pe(e.textAlign,"aligned"),Pe(e.verticalAlign,"aligned")))}},render(){var e,a,n,s;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),iv={install(e){e.component(iu.name,iu),e.component(au.name,au),e.component(lu.name,lu),e.component(nu.name,nu),e.component(su.name,su),e.component(ou.name,ou),e.component(ru.name,ru)}},av=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:Kb,Form:Qb,Grid:Zb,Menu:ev,Message:tv,Table:iv},Symbol.toStringTag,{value:"Module"})),uu=z({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:F(()=>Q("ui",e.unit,k(e.centered,"centered"),k(!!e.test,"test"),"ad"))}},render(){var e,a,n,s;return this.$props.test?U("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):U("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),lv={install(e){e.component(uu.name,uu)}},du=z({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.color,k(e.centered,"centered"),k(e.fluid,"fluid"),k(e.horizontal,"horizontal"),k(e.link,"link"),k(e.raised,"raised"),"card"))}},render(){var e,a,n,s;return this.$props.href||this.$props.link?U("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):U("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),cu=z({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),mu=z({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:F(()=>Q(Pe(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pu=z({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:F(()=>Q("ui",k(e.centered,"centered"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),Qt(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),fu=z({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:F(()=>Q(Pe(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gu=z({name:"SuiCardMeta",render(){var e,a;return U("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nv={install(e){e.component(du.name,du),e.component(cu.name,cu),e.component(mu.name,mu),e.component(pu.name,pu),e.component(fu.name,fu),e.component(gu.name,gu)}},hu=z({name:"SuiComment",render(){var e,a;return U("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_u=z({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:F(()=>Q(k(a,"active")))}},render(){var e,a,n,s;return this.computedClass?U("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):U("a",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),bu=z({name:"SuiCommentActions",render(){var e,a;return U("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vu=z({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return U(n,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),yu=z({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return U(e,{class:"avatar"},U("img",{src:this.$props.src}))}}),Cu=z({name:"SuiCommentContent",render(){var e,a;return U("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=z({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:F(()=>Q("ui",e.size,k(e.collapsed,"collapsed"),k(e.inverted,"inverted"),k(e.minimal,"minimal"),k(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Su=z({name:"SuiCommentMetadata",render(){var e,a;return U("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Au=z({name:"SuiCommentText",render(){var e,a;return U("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sv={install(e){e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu),e.component(Cu.name,Cu),e.component(wu.name,wu),e.component(Su.name,Su),e.component(Au.name,Au)}},ku=z({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:F(()=>Q("ui",e.size,k(e.inverted,"inverted"),"feed"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$u=z({name:"SuiFeedContent",render(){var e,a;return U("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bu=z({name:"SuiFeedDate",render(){var e,a;return U("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xu=z({name:"SuiFeedEvent",render(){var e,a;return U("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=z({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:n}=e;return{computedClass:F(()=>Q(k(a,"images"),k(n,"text"),"extra"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=z({name:"SuiFeedLabel",render(){var e,a;return U("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=z({name:"SuiFeedLike",render(){var e,a;return U("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=z({name:"SuiFeedMeta",render(){var e,a;return U("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=z({name:"SuiFeedSummary",render(){var e,a;return U("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=z({name:"SuiFeedUser",render(){var e,a;return U("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov={install(e){e.component(ku.name,ku),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(xu.name,xu),e.component(Tu.name,Tu),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Du.name,Du),e.component(Iu.name,Iu)}},Pu=z({name:"SuiItem",render(){var e,a;return U("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=z({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:F(()=>Q(Pe(a,"aligned"),"content"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=z({name:"SuiItemDescription",render(){var e,a;return U("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=z({name:"SuiItemExtra",render(){var e,a;return U("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=z({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:F(()=>Q("ui",k(e.divided,"divided"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.unstackable,"unstackable"),Ie(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hu=z({name:"SuiItemHeader",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return U(n,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=z({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:F(()=>Q(e.size,"image"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=z({name:"SuiItemMeta",render(){var e,a;return U("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component(Pu.name,Pu),e.component(Mu.name,Mu),e.component(Vu.name,Vu),e.component(Fu.name,Fu),e.component(Nu.name,Nu),e.component(Hu.name,Hu),e.component(Lu.name,Lu),e.component(Ou.name,Ou)}},Nl=z({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?U("div",{class:"label"},this.$props.content):U("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hl=z({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?U("div",{class:this.computedClass},this.$props.content):U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=z({name:"SuiStatistic",components:{StatisticLabel:Nl,StatisticValue:Hl},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=Me("ui",!0);return{computedClass:F(()=>Q(a&&"ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.text,"text"),Ie(e.floated,"floated"),"statistic"))}},render(){var e,a,n,s,r,d;let m=[];return this.$props.value&&m.push(U(Hl,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(U(Nl,{content:this.$props.label},(s=(n=this.$slots).default)==null?void 0:s.call(n))),U("div",{class:this.computedClass},m.length>0?m:(d=(r=this.$slots).default)==null?void 0:d.call(r))}}),qu=z({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return lt("ui",!1),{computedClass:F(()=>Q("ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),Qt(e.widths,""),"statistics"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv={install(e){e.component(ju.name,ju),e.component(qu.name,qu),e.component(Nl.name,Nl),e.component(Hl.name,Hl)}},dv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:lv,Card:nv,Comment:sv,Feed:ov,Item:rv,Statistic:uv},Symbol.toStringTag,{value:"Module"})),Gu=z({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?j([]):j(-1),n=r=>e.multiple?a.value.includes(r):a.value===r,s=r=>{const d=n(r);e.multiple?d?a.value=a.value.filter(m=>m!==r):a.value.push(r):a.value=d?-1:r};return lt("isTabActive",n),lt("updateActiveIndex",s),{computedClass:F(()=>Q("ui",k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.styled,"styled"),"accordion"))}},render(){var e,a;const n=s=>(s.forEach((r,d)=>{r.props.index=d}),s);return t("div",{class:this.computedClass},[n((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Uu=z({name:"SuiAccordionAccordion",render(){var e,a;return U("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ys=z({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.active,"active"),"content"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yu=z({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=Me("isTabActive"),n=Me("updateActiveIndex"),s=F(()=>Q(k(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:n,titleClass:s}},render(){return t(Ae,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(ee,{name:"dropdown"},null),this.title]),t(ys,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Ju=z({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.active,"active"),"title"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cv={install(e){e.component(Gu.name,Gu),e.component(Uu.name,Uu),e.component(ys.name,ys),e.component(Yu.name,Yu),e.component(Ju.name,Ju)}},mv=(e,a,n)=>{e.clickOutside=s=>{e===s.target||e.contains(s.target)||a.value(s,e)},document.body.addEventListener("click",e.clickOutside)},pv=(e,a,n)=>{document.body.removeEventListener("click",e.clickOutside)},po={mounted:mv,unmounted:pv};function fv(e,a={}){const n=j(e.value?"open":"closed"),s=()=>n.value=e.value?"open":"closed";rt(e,p=>{n.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",s,!0)},d=p=>{p&&p.removeEventListener("animationend",s)},m=F((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:d,computeAnimationClass:m}}const gv=z({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const n=j(!1),s=()=>{e.disabled||(n.value=!0)},r=()=>n.value=!1,d=()=>{e.disabled||a("select-day",e.date)},m=()=>{let o=new Date;return o.getFullYear()===e.date.year&&o.getMonth()===e.date.month&&o.getDate()===e.date.day},p=F(()=>Q("link",k(n.value,"focus"),k(e.active&&!e.disabled,"active"),k(e.disabled,"adjacent disabled"),k(m(),"today")));return{onMouseEnter:s,onMouseLeave:r,onClick:d,computedClass:p}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:kt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),hv=z({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:n,add:s,subtract:r,selectedDate:d,setSelectedDate:m,selectType:p,updateVisible:o,formatDate:u}=Me(bi);return{calendarDays:e,isEqualDay:f=>{if(!d.value)return!1;const c=d.value;return c.getFullYear()===f.year&&c.getMonth()===f.month&&c.getDate()===f.day},onSelectDay:f=>{if(n(f.year,"years"),n(f.month,"months"),n(f.day,"days"),p.value==="date"){let c=new Date(f.year,f.month,f.day);m(c),o(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:s,subtract:r}},render(){const e=()=>this.calendarDays.map((a,n)=>t("tr",null,[a.map(s=>t(gv,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[l("S")]),t("th",null,[l("M")]),t("th",null,[l("T")]),t("th",null,[l("W")]),t("th",null,[l("T")]),t("th",null,[l("F")]),t("th",null,[l("S")])])]),t("tbody",null,[e()])])}}),ve=z({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=j(!1),n=()=>a.value=!0,s=()=>a.value=!1,r=F(()=>Q("link",k(e.active,"active"),k(e.today,"today"),k(a.value,"focus")));return{onMouseEnter:n,onMouseLeave:s,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:kt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_v=z({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:n,subtract:s,selectedDate:r,updateSelectMode:d}=Me(bi);return{state:e,add:n,subtract:s,updateSelectMode:d,isActive:m=>r.value?e.year===r.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let p=new Date;return m===p.getMonth()&&e.year===p.getFullYear()},onClickCell:m=>{a(m,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((n,s)=>t("tr",null,[t(ve,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[e[s*3]]}),t(ve,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[e[s*3+1]]}),t(ve,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[e[s*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),bv=z({name:"SuiCalendarYearTable",setup(e){const{state:a,set:n,add:s,subtract:r,selectedDate:d,updateSelectMode:m}=Me(bi),p=()=>s(10,"years"),o=()=>r(10,"years"),u=F(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:p,movePrevTwelveYears:o,headerStartYear:u,isActive:f=>d.value?f===d.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{n(f,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,l(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ve,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(ve,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(ve,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(ve,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(ve,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(ve,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(ve,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(ve,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(ve,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(ve,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(ve,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(ve,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),vv=z({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:n,add:s,subtract:r,formatDate:d,selectedDate:m}=Me(bi);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>r(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:p=>{n(p,"hours"),e("minute")},isActive:p=>{if(!m.value)return!1;let o=m.value.getFullYear(),u=m.value.getMonth(),f=m.value.getDate(),c=m.value.getHours();return a.year===o&&a.month===u&&a.day===f&&p===c}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ve,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[l("12:00 AM")]}),t(ve,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[l("1:00 AM")]}),t(ve,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[l("2:00 AM")]}),t(ve,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[l("3:00 AM")]})]),t("tr",null,[t(ve,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[l("4:00 AM")]}),t(ve,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[l("5:00 AM")]}),t(ve,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[l("6:00 AM")]}),t(ve,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[l("7:00 AM")]})]),t("tr",null,[t(ve,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[l("8:00 AM")]}),t(ve,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[l("9:00 AM")]}),t(ve,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[l("10:00 AM")]}),t(ve,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[l("11:00 AM")]})]),t("tr",null,[t(ve,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[l("12:00 PM")]}),t(ve,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[l("1:00 PM")]}),t(ve,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[l("2:00 PM")]}),t(ve,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[l("3:00 PM")]})]),t("tr",null,[t(ve,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[l("4:00 PM")]}),t(ve,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[l("5:00 PM")]}),t(ve,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[l("6:00 PM")]}),t(ve,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[l("7:00 PM")]})]),t("tr",null,[t(ve,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[l("8:00 PM")]}),t(ve,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[l("9:00 PM")]}),t(ve,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[l("10:00 PM")]}),t(ve,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[l("11:00 PM")]})])])])}});function xt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const yv=z({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:n,subtract:s,formatDate:r,updateSelectMode:d,updateVisible:m,selectedDate:p}=Me(bi);return{add:n,subtract:s,formatDate:r,updateSelectMode:d,getTimeLabel:o=>{let u=e.hour%12,f=e.hour>12?"PM":"AM",c=o.toString().padStart(2,"0");return e.hour===0?`12:${c} AM`:e.hour===12?`12:${c} PM`:`${u}:${c} ${f}`},onClickCell:o=>{a(o,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:o=>{if(!p.value)return!1;let u=p.value.getFullYear(),f=p.value.getMonth(),c=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return e.year===u&&e.month===f&&e.day===c&&e.hour===h&&o===v}}},render(){let e,a,n,s,r,d,m,p,o,u,f,c;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(ve,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},xt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(ve,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},xt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(ve,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},xt(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),t("tr",null,[t(ve,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},xt(s=this.getTimeLabel(15))?s:{default:()=>[s]}),t(ve,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},xt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(ve,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},xt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(ve,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},xt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(ve,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},xt(p=this.getTimeLabel(35))?p:{default:()=>[p]}),t(ve,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},xt(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),t("tr",null,[t(ve,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},xt(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(ve,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},xt(f=this.getTimeLabel(50))?f:{default:()=>[f]}),t(ve,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},xt(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),Cv=z({name:"SuiCalendarBody",setup(){const e=j(null),{visible:a,selectMode:n}=Me(bi),{setupAnimation:s,removeAnimation:r,computeAnimationClass:d}=fv(a);hi(()=>s(e.value)),Hi(()=>r(e.value));const m=F(()=>Q("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:m,selectMode:n}},render(){const e=()=>{switch(this.selectMode){case"day":return t(hv,null,null);case"month":return t(_v,null,null);case"year":return t(bv,null,null);case"hour":return t(vv,null,null);case"minute":return t(yv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),wv=z({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:n,updateSelectMode:s,set:r,state:d,formatCalendarDate:m}=Me(bi);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(s("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),n(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Sv=(e,a)=>{let n=new Date;n.setDate(1),n.setMonth(a),n.setFullYear(e);let s=n.getDay();return s>=7?s-7:s},Av=(e,a)=>{let n,s;return a===0?(n=11,s=e-1):(n=a-1,s=e),32-new Date(s,n,32).getDate()},Rn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function kv(){const e=j(!1),a=(y=!1)=>e.value=y,n=new Date;function s(y){if(!y)return;let A=y.getFullYear(),B=Rn(y.getMonth()),_=y.getDate(),S=y.getHours(),$=y.getMinutes(),x=S>11?"PM":"AM";S=S%12,S===0&&(S=12);let E=$.toString().padStart(2,"0");return`${B} ${_}, ${A} ${S}:${E} ${x}`}const r=j("default"),d=j("day");function m(y){d.value=y}const p=j(null),o=y=>{p.value=y},u=Kt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),f=(y,A)=>{switch(A){case"years":u.year=y;break;case"months":u.month=y;break;case"days":u.day=y;break;case"hours":u.hour=y;break;case"minutes":u.minute=y}},c=(y,A)=>{let B=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":B.setFullYear(B.getFullYear()+y);break;case"months":B.setMonth(B.getMonth()+y);break;case"days":B.setDate(B.getDate()+y);break;case"hours":B.setHours(B.getHours()+y);break}u.year=B.getFullYear(),u.month=B.getMonth(),u.day=B.getDate(),u.hour=B.getHours()},h=(y,A)=>{let B=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":B.setFullYear(B.getFullYear()-y);break;case"months":B.setMonth(B.getMonth()-y);break;case"days":B.setDate(B.getDate()-y);break;case"hours":B.setHours(B.getHours()-y);break}u.year=B.getFullYear(),u.month=B.getMonth(),u.day=B.getDate(),u.hour=B.getHours()},v=(y="default")=>y==="date"?`${Rn(u.month)} ${u.year}`:`${Rn(u.month)} ${u.day}, ${u.year}`,g=F(()=>{let y=u.month,A=u.year;y>11&&(y=y%11-1,A+=1);let B=[],_=Sv(A,y),S=32-new Date(A,y,32).getDate(),$=Av(A,y),x=1;for(let E=0;E<6;E++){let M=[];if(E===0){for(let I=$-_+1;I<=$;I++){let L=y===0?11:y-1,W=y===0?A-1:A;M.push({day:I,month:L,year:W,currentMonth:!1})}let V=7-M.length;for(let I=0;I<V;I++)M.push({day:x,month:y,year:A,currentMonth:!0}),x++}else for(let V=0;V<7;V++){if(x>S){let I=y===11?0:y+1,L=y===11?A+1:A;M.push({day:x-S,month:I,year:L,currentMonth:!1})}else M.push({day:x,month:y,year:A,currentMonth:!0});x++}B.push(M)}return B});return{visible:e,updateVisible:a,calendarDays:g,formatCalendarDate:s,selectMode:d,updateSelectMode:m,selectType:r,selectedDate:p,setSelectedDate:o,state:u,set:f,add:c,subtract:h,formatDate:v}}const bi=Symbol("useCalendar"),Wu=z({name:"SuiCalendar",directives:{clickoutside:po},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const n=kv();lt(bi,n);const{updateVisible:s,selectedDate:r}=n;return rt(r,d=>{a("update:modelValue",d)}),{updateVisible:s}},render(){return tl(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Cv,null,null),t("i",{class:"calendar icon"},null),t(wv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[en("clickoutside"),()=>this.updateVisible(!1)]])}}),$v={install:e=>{e.component(Wu.name,Wu)}},Ku=z({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const n=F(()=>Q("ui",!e.label&&"fitted",k(e.disabled,"disabled"),k(e.indeterminate,"indeterminate"),k(e.radio,"radio"),k(e.readOnly,"read-only"),k(e.slider,"slider"),k(e.toggle,"toggle"),"checkbox")),s=F(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:n,checked:s,onClick:r=>{if(e.disabled||e.readOnly)return;let d;e.value?s.value?d=e.modelValue.filter(m=>e.value!==m):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),Bv={install(e){e.component(Ku.name,Ku)}},Xu=z({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:F(()=>Q("ui",k(e.active,"active"),k(e.inverted,"inverted"),k(e.page,"page"),k(e.simple,"simple"),Pe(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return U("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qu=z({name:"SuiDimmerDimmable",components:{Segment:mt},props:{blurring:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return U(mt,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xv={install(e){e.component(Xu.name,Xu),e.component(Qu.name,Qu)}},Tv=(e,a)=>e.map(n=>n[a]),Ev=z({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:F(()=>Q(k(e.filtered,"filtered"),k(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:m}=this.item;n=t(Ae,null,[d&&t("i",{class:`${d} flag`},null),m])}else n=this.item;else n=this.text||this.placeholder;const s=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ae,null,[t("div",{class:this.computedClass},[s&&t(bt,s,null),r&&t(Pt,r,null),n]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:kt(()=>this.$emit("remove"),["stop"])},null)])}}),Rv=e=>{const a=Kt({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return rt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function zv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Zu=z({name:"SuiDropdown",directives:{clickoutside:po},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const n=Rv(e);lt("useDropdown",n);const{state:s,show:r,hide:d}=n,m=F(()=>Q("ui",k(e.button,"button"),k(e.clearable,"clearable"),k(e.compact,"compact"),k(e.floating,"floating"),k(e.fluid,"fluid"),k(!!e.icon,"icon"),k(e.inline,"inline"),k(e.item,"item"),k(e.labeled,"labeled"),k(e.multiple,"multiple"),k(e.search,"search"),k(e.scrolling,"scrolling"),k(e.selection,"selection"),k(e.simple,"simple"),Ie(e.pointing,"pointing"),"dropdown",k(s.visible,"active visible"),k(s.direction==="up","upward"))),p=()=>{var A;if(s.visible)return d();(A=h.value)==null||A.focus(),r()},o=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>d(),f=j(""),c=F(()=>{const A=f.value.toLowerCase();return e.options.filter(B=>{const _=typeof B=="object"?B.text:B,S=_.toLowerCase().includes(A);if(!e.multiple)return S;if(Array.isArray(e.modelValue)){const $=typeof B=="object"?Tv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return S&&!$}return S})}),h=j(null),v=A=>f.value=A.target.value,g=A=>{var B;if(f.value="",e.search&&((B=h.value)==null||B.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,A]:[A];return a("update:modelValue",_)}return a("update:modelValue",A)},y=A=>{if(Array.isArray(e.modelValue)){const B=e.modelValue.findIndex(_=>_===A);if(B>-1){let _=Object.assign(e.modelValue);_.splice(B,1),a("update:modelValue",_)}}};return lt("selection",e.selection),{computedClass:m,onClick:p,openMenu:o,closeMenu:u,filteredText:f,filteredOptions:c,inputRef:h,onInput:v,onSelect:g,removeItem:y}},render(){var e,a;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:kt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:kt(()=>this.removeItem(m),["stop"])},null)]))},s=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(Cs,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),r=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Ev,Li(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let m;return t(ws,{search:this.$props.searchInMenu,onSearch:this.onInput},zv(m=s())?m:{default:()=>[m]})};return tl(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[en("clickoutside"),this.closeMenu]])}}),Cs=z({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:n,hide:s}=Me("useDropdown");return{computedClass:F(()=>Q(k(e.active,"active"),k(e.disabled,"disabled"),"item")),onClick:()=>{n.multiple||s(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:kt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(bt,this.image,null),this.label&&t(Pt,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),ws=z({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:n}){const{state:s}=Me("useDropdown"),r=j(null),d=F(()=>{let p=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return Q("menu","transition",k(s.visible,"visible"),k(!s.visible&&!s.animating,"hidden"),k(s.animating,p()))});rt(()=>s.visible,p=>{if(!p||!r.value)return;let o=r.value.parentElement;const{top:u,height:f}=o==null?void 0:o.getBoundingClientRect(),c=u-m.value.length*37,h=document.documentElement.clientHeight-u-f-m.value.length*37;s.direction=c>h?"up":"down"});const m=F(()=>{var p;let o=[],u=(p=n.default)==null?void 0:p.call(n);return u&&u.forEach(f=>{f.type.name==="SuiSelectItem"&&o.push(f)}),o});return{container:r,computedClass:d,onSearchInput:p=>a("search",p)}},render(){var e,a,n,s;const r=()=>t(Ae,null,[t("div",{class:"ui left icon input",onClick:kt(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Dv={install(e){e.component(Zu.name,Zu),e.component(Cs.name,Cs),e.component(ws.name,ws)}},ed=z({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=j(e.active),n=()=>{a.value=!a.value},s=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=F(()=>Q("ui",e.aspectRatio,k(a.value,"active"),"embed"));return{active:a,getSrc:s,clickHandler:n,computedClass:r}},render(){let e=[U("i",{class:"video play icon"}),U("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(U("div",{class:"embed"},U("iframe",{src:this.getSrc()}))),U("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Iv={install(e){e.component(ed.name,ed)}};function Pv(e){return Ms()?(Id(e),!0):!1}function Hm(e){return typeof e=="function"?e():C(e)}const Lm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Mv=Object.prototype.toString,Vv=e=>Mv.call(e)==="[object Object]",wl=()=>{},Fv=Nv();function Nv(){var e,a;return Lm&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function $a(e){var a;const n=Hm(e);return(a=n==null?void 0:n.$el)!=null?a:n}const Om=Lm?window:void 0;function zn(...e){let a,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,a=Om):[a,n,s,r]=e,!a)return wl;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const d=[],m=()=>{d.forEach(f=>f()),d.length=0},p=(f,c,h,v)=>(f.addEventListener(c,h,v),()=>f.removeEventListener(c,h,v)),o=rt(()=>[$a(a),Hm(r)],([f,c])=>{if(m(),!f)return;const h=Vv(c)?{...c}:c;d.push(...n.flatMap(v=>s.map(g=>p(f,v,g,h))))},{immediate:!0,flush:"post"}),u=()=>{o(),m()};return Pv(u),u}let td=!1;function Hv(e,a,n={}){const{window:s=Om,ignore:r=[],capture:d=!0,detectIframe:m=!1}=n;if(!s)return wl;Fv&&!td&&(td=!0,Array.from(s.document.body.children).forEach(f=>f.addEventListener("click",wl)),s.document.documentElement.addEventListener("click",wl));let p=!0;const o=f=>r.some(c=>{if(typeof c=="string")return Array.from(s.document.querySelectorAll(c)).some(h=>h===f.target||f.composedPath().includes(h));{const h=$a(c);return h&&(f.target===h||f.composedPath().includes(h))}}),u=[zn(s,"click",f=>{const c=$a(e);if(!(!c||c===f.target||f.composedPath().includes(c))){if(f.detail===0&&(p=!o(f)),!p){p=!0;return}a(f)}},{passive:!0,capture:d}),zn(s,"pointerdown",f=>{const c=$a(e);p=!o(f)&&!!(c&&!f.composedPath().includes(c))},{passive:!0}),m&&zn(s,"blur",f=>{setTimeout(()=>{var c;const h=$a(e);((c=s.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&a(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}function jm(e,a="scale"){const n=j(e.modelValue?"open":"closed");return rt(()=>e.modelValue,s=>{n.value=s?"opening":"closing"}),{animationClasses:F(()=>{switch(n.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:F(()=>n.value==="closed"),onAnimationEnd:()=>n.value=e.modelValue?"open":"closed"}}const Lv=z({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:n,onAnimationEnd:s}=jm(e,"fade"),r=F(()=>Q("ui","page modals dimmer transition",k(e.inverted,"inverted"),a.value)),d=F(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),m=F(()=>Q("dimmable","dimmed",k(e.blurring,"blurring")));return rt(()=>e.modelValue,p=>{if(p){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:r,style:d,onAnimationEnd:s}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),id=z({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const n=j(),{animationClasses:s,isClosed:r}=jm(e),d=F(()=>Q("ui",e.size,k(e.basic,"basic"),k(e.overlay,"overlay"),k(e.fullscreen,"fullscreen"),"modal","transition",s.value)),m=F(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>a("update:modelValue",!1);return Hv(n,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:m,close:p,modalRef:n}},render(){return t(sn,{to:"body"},{default:()=>[t(Lv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),ad=z({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ld=z({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:F(()=>Q(k(e.image,"image"),k(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nd=z({name:"SuiModalDescription",render(){var e,a;return U("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sd=z({name:"SuiModalHeader",render(){var e,a;return U("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ov={install(e){e.component(id.name,id),e.component(ad.name,ad),e.component(ld.name,ld),e.component(nd.name,nd),e.component(sd.name,sd)}},jv=e=>{const a=j(!1),n=Gn(e,"position"),s=j(null),r=Gn(e,"trigger"),d=()=>{a.value=!0,ga(()=>p())},m=()=>{a.value=!1},p=()=>{if(!s.value||!r.value)return;let o=0,u=0;const f=s.value,c=r.value.$el;f.style.transform=`translate(${o}px, ${u}px)`;const{top:h,left:v,width:g,height:y}=c.getBoundingClientRect(),A=f.getBoundingClientRect(),{pageXOffset:B,pageYOffset:_}=window;if(n.value.includes("top")?(o=B+v,u=_+h-f.offsetTop-f.offsetHeight):(o=v,u=h+y-A.top),n.value.includes("right")){const S=g-A.width;o=v+S}if(n.value.includes("center")){const S=g/2-A.width/2;o=v+S}n.value==="right center"&&(o=v+g,u=h+y/2-A.top-A.height/2),n.value==="left center"&&(o=v-A.width,u=h+y/2-A.top-A.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${o}px, ${u}px)`};return{show:a,showPopup:d,hidePopup:m,placement:n,popupRef:s,triggerRef:r}},od=z({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:n,showPopup:s,hidePopup:r,popupRef:d,triggerRef:m}=jv(e);Xs(()=>{var h,v,g;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",s),(g=m.value)==null||g.$el.addEventListener("mouseleave",r))});const p=j(n.value?"open":"close");F(()=>p.value!=="closed"),rt(()=>n.value,h=>{p.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=n.value?"open":"closed";hi(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",u,!0)}),Hi(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",u)});const f={position:"initial",animationDuration:"200ms"},c=F(()=>Q("ignored ui",e.position,e.size,k(e.basic,"basic"),k(e.flowing,"flowing"),k(e.inverted,"inverted"),Ie(e.wide,"wide"),"popup transition",o(p.value,"scale")));return()=>t(sn,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:c.value,style:f},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),qv={install(e){e.component(od.name,od)}},Gv=["top","bottom","left"],fo=()=>({attached:{type:String,validator:e=>Gv.includes(e)}}),qm=e=>({attachedClasses:F(()=>Q(e.attached,{attached:e.attached}))}),Uv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Gm=()=>({color:{type:String,validator:e=>Uv.includes(e)}}),Um=e=>({colorClasses:F(()=>Q(e.inverted&&"inverted",e.color))}),Ll=z({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...fo(),...Gm()},setup(e){const{attachedClasses:a}=qm(e),{colorClasses:n}=Um(e),s=F(()=>Q("ui",n.value,e.size,k(e.active||e.indicating,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.indicating,"indicating"),k(e.success,"success"),k(e.warning,"warning"),a.value,"progress")),r=F(()=>Q(Ie(e.progress,"progress"))),d=F(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),Yv={install(e){e.component(Ll.name,Ll)}},Jv=z({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=Me("rating",j(0)),n=Me("updateRating"),s=Me("selectedIndex",j(0)),r=Me("updateSelectedIndex"),d=Me("clearable",!1),m=Me("disabled",!1),p=()=>{if(!m){if(d&&e.index===a.value){n(0),r(0);return}n(e.index)}},o=()=>{m||r(e.index)},u=F(()=>e.index<=a.value),f=F(()=>e.index<=s.value),c=F(()=>Q(e.icon,k(u.value,"active"),k(f.value,"selected"),"icon"));return()=>t("i",{class:c.value,onClick:()=>p(),onMouseenter:()=>o()},null)}}),rd=z({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const n=j(e.modelValue||e.defaultRating),s=j(!1),r=j(0),d=f=>{n.value=f,a("update:modelValue",f),a("change",f)},m=f=>r.value=f,p=()=>{e.disabled||(s.value=!0)},o=()=>{e.disabled||(s.value=!1,m(0))},u=F(()=>Q("ui",e.color,e.icon,e.size,k(e.disabled,"disabled"),"rating",k(s.value,"selected")));return lt("rating",n),lt("updateRating",d),lt("selectedIndex",r),lt("updateSelectedIndex",m),lt("clearable",e.clearable),lt("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>o()},[[...Array(e.maxRating)].map((f,c)=>t(Jv,{icon:e.icon,index:c+1},null))])}}),Wv={install(e){e.component(rd.name,rd)}},ud=z({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Kv={install(e){e.component(ud.name,ud)}},dd=z({name:"SuiSidebar",directives:{clickoutside:po},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const n=Kt({animating:!1}),s=F(()=>{const r=e.direction==="right"||e.direction==="left";return Q("ui","sidebar",e.direction,e.animation,k(e.inverted,"inverted"),k(e.visible,"visible"),k(n.animating,"animating"),k(r,"vertical"),Ie(e.icon,"icon"),"menu")});return rt(()=>e.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:r=>{const d=r.path||r.composedPath&&r.composedPath();d&&d.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return tl(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[en("clickoutside"),this.onClickPusher]])}}),Xv={install:e=>{e.component(dd.name,dd)}};class Dn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,n){return a.classList.contains(n)}}const cd=z({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const n=F(()=>Q("ui",e.color,e.size,k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.reversed,"reversed"),k(e.vertical,"vertical"),Ie(e.labeled,"labeled"),"slider")),s=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=F(()=>{if(e.range)return e.reversed&&!e.vertical?{right:s()+"%",width:r()-s()+"%"}:e.vertical?e.reversed?{bottom:s()+"%",height:r()-s()+"%"}:{top:s()+"%",height:r()-s()+"%"}:{left:s()+"%",width:r()-s()+"%"};let O=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(O-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(O-e.min)/(e.max-e.min)*100}%`}}),m=F(()=>{let O=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=F(()=>{let O=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),o=F(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((O,Y)=>Y*e.step+e.min)),u=()=>{var O,Y;let ue=1,ie=f(),Te=(e.vertical?(O=h.value)==null?void 0:O.clientHeight:(Y=h.value)==null?void 0:Y.clientWidth)||0,Ue=1;if(Te>0)for(;Te/ie*Ue<100;)ie%Ue||(ue=Ue),Ue+=1;return ue},f=()=>Math.round((e.max-e.min)/e.step),c=j(null),h=j(null),v=j(0),g=j(0),y=j(0),A=j(0),B=()=>{if(!c.value)return;let O=c.value.getBoundingClientRect();v.value=O.left+Dn.getWindowScrollLeft(),g.value=O.top+Dn.getWindowScrollTop(),y.value=c.value.offsetWidth,A.value=c.value.offsetHeight},_=j(0),S=O=>{let{pageX:Y,pageY:ue}=O.touches?O.touches[0]:O,ie,Te;e.vertical?ie=(g.value+A.value-ue)*100/A.value:ie=(Y-v.value)*100/y.value,Te=(e.max-e.min)*(ie/100)+e.min;const Ue=e.range?e.modelValue[_.value]:e.modelValue||0;Te=Ue+Math.round(Te/e.step-Ue/e.step)*e.step,e.reversed&&(Te=e.max-Te+e.min),e.vertical&&(Te=e.max-Te+e.min),$(Te)},$=O=>{let Y=O,ue;if(e.range)if(ue=e.modelValue?[...e.modelValue]:[],_.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;Y<e.min?Y=e.min:Y>ie&&(Y=ie),ue[0]=Y,ue[1]=ue[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;Y>e.max?Y=e.max:Y<ie&&(Y=ie),ue[0]=ue[0]||e.min,ue[1]=Y}else Y<e.min&&(Y=e.min),Y>e.max&&(Y=e.max),ue=Y;a("update:modelValue",ue),a("change",ue)},x=j(!1),E=O=>x.value=O,M=(O,Y=0)=>{E(!0),B(),_.value=Y,O.preventDefault()},V=O=>{x.value&&(E(!1),document.removeEventListener("mousemove",I),a("slideend",{event:O,value:e.modelValue}))},I=O=>{x.value&&(S(O),O==null||O.preventDefault())},L=(O,Y=0)=>{e.disabled||(M(O,Y),document.addEventListener("mousemove",I),document.addEventListener("mouseup",V),O.preventDefault())},W=(O,Y=0)=>{switch(_.value=Y,O.code){case"ArrowUp":e.vertical&&(e.reversed?q():ce()),O.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?ce():q()),O.preventDefault();break;case"ArrowRight":e.reversed?ce():q(),O.preventDefault();break;case"ArrowLeft":e.reversed?q():ce(),O.preventDefault();break}},q=()=>{let O=0;e.range?O=e.modelValue[_.value]+e.step:O=e.modelValue+e.step,$(O)},ce=()=>{let O=0;e.range?O=e.modelValue[_.value]-e.step:O=e.modelValue-e.step,$(O)},Be=O=>{if(!e.disabled&&!Dn.hasClass(O.target,"thumb")){if(e.range){let Y=(e.vertical?O.offsetY/O.target.clientHeight:O.offsetX/O.target.clientWidth)*100,ue=(s()+r())/2;Y<ue?_.value=e.reversed?1:0:_.value=e.reversed?0:1}B(),S(O)}};return()=>t("div",{ref:O=>c.value=O,class:n.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:O=>h.value=O},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:m.value,onMousedown:O=>L(O),onTouchstart:O=>M(O),onTouchmove:O=>I(O),onTouchend:O=>V(O),onKeydown:O=>W(O),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:p.value,onMousedown:O=>L(O,1),onTouchstart:O=>M(O,1),onTouchmove:O=>I(O),onTouchend:O=>V(O),onKeydown:O=>W(O,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(f()+1)].map((O,Y)=>{let ue=Y/f();return Y%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ue} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-Y]:o.value[f()-Y]:e.labels?e.labels[Y]:o.value[Y]])})])])}}),Qv={install(e){e.component(cd.name,cd)}},Ss=z({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:F(()=>Q("ui tab segment",k(e.active,"active"),Ie(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),md=z({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:n}){const s=j(e.activeIndex);rt(()=>e.activeIndex,u=>{s.value=u});const r=(u,f)=>{s.value!==f&&(s.value=f,a("update:activeIndex",f),a("tab-change",{event:u,index:f})),a("tab-click",{event:u,index:f})},d=(u,f)=>{u.key==="Enter"&&r(u,f)},m=F(()=>{var u,f;let c=[];return(u=n.default)!=null&&u.call(n)&&((f=n.default)==null||f.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),p=F(()=>!e.secondary&&!e.pointing&&!e.text),o=F(()=>Q("ui menu",k(p.value,"tabular attached"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.text,"text")));return{onClick:r,onKeyDown:d,tabIndex:s,tabs:m,tabMenuClass:o,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((n,s)=>t("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:r=>this.onClick(r,s),onKeydown:r=>this.onKeyDown(r,s),tabindex:0},[n.props.header])),a=()=>this.tabs.map((n,s)=>t(Ss,Li(n.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,d;return[(d=(r=n.children).default)==null?void 0:d.call(r)]}}));return t(Ae,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),Zv={install(e){e.component(md.name,md),e.component(Ss.name,Ss)}};function e1(e,a){e.indexOf(a)===-1&&e.push(a)}const Ym=(e,a,n)=>Math.min(Math.max(n,e),a),Tt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Ol=e=>typeof e=="number",Zi=e=>Array.isArray(e)&&!Ol(e[0]),t1=(e,a,n)=>{const s=a-e;return((n-e)%s+s)%s+e};function i1(e,a){return Zi(e)?e[t1(0,e.length,a)]:e}const Jm=(e,a,n)=>-n*e+n*a+e,Wm=()=>{},pi=e=>e,go=(e,a,n)=>a-e===0?1:(n-e)/(a-e);function Km(e,a){const n=e[e.length-1];for(let s=1;s<=a;s++){const r=go(0,a,s);e.push(Jm(n,1,r))}}function a1(e){const a=[0];return Km(a,e-1),a}function l1(e,a=a1(e.length),n=pi){const s=e.length,r=s-a.length;return r>0&&Km(a,r),d=>{let m=0;for(;m<s-2&&!(d<a[m+1]);m++);let p=Ym(0,1,go(a[m],a[m+1],d));return p=i1(n,m)(p),Jm(e[m],e[m+1],p)}}const Xm=e=>Array.isArray(e)&&Ol(e[0]),As=e=>typeof e=="object"&&!!e.createAnimation,ma=e=>typeof e=="function",n1=e=>typeof e=="string",Fa={ms:e=>e*1e3,s:e=>e/1e3},Qm=(e,a,n)=>(((1-3*n+3*a)*e+(3*n-6*a))*e+3*a)*e,s1=1e-7,o1=12;function r1(e,a,n,s,r){let d,m,p=0;do m=a+(n-a)/2,d=Qm(m,s,r)-e,d>0?n=m:a=m;while(Math.abs(d)>s1&&++p<o1);return m}function Ba(e,a,n,s){if(e===a&&n===s)return pi;const r=d=>r1(d,0,1,e,n);return d=>d===0||d===1?d:Qm(r(d),a,s)}const u1=(e,a="end")=>n=>{n=a==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*e,r=a==="end"?Math.floor(s):Math.ceil(s);return Ym(0,1,r/e)},pd={ease:Ba(.25,.1,.25,1),"ease-in":Ba(.42,0,1,1),"ease-in-out":Ba(.42,0,.58,1),"ease-out":Ba(0,0,.58,1)},d1=/\((.*?)\)/;function fd(e){if(ma(e))return e;if(Xm(e))return Ba(...e);if(pd[e])return pd[e];if(e.startsWith("steps")){const a=d1.exec(e);if(a){const n=a[1].split(",");return u1(parseFloat(n[0]),n[1].trim())}}return pi}class Zm{constructor(a,n=[0,1],{easing:s,duration:r=Tt.duration,delay:d=Tt.delay,endDelay:m=Tt.endDelay,repeat:p=Tt.repeat,offset:o,direction:u="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=pi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),s=s||Tt.easing,As(s)){const h=s.createAnimation(n);s=h.easing,n=h.keyframes||n,r=h.duration||r}this.repeat=p,this.easing=Zi(s)?pi:fd(s),this.updateDuration(r);const c=l1(n,o,Zi(s)?s.map(fd):pi);this.tick=h=>{var v;d=d;let g=0;this.pauseTime!==void 0?g=this.pauseTime:g=(h-this.startTime)*this.rate,this.t=g,g/=1e3,g=Math.max(g-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(g=this.totalDuration);const y=g/this.duration;let A=Math.floor(y),B=y%1;!B&&y>=1&&(B=1),B===1&&A--;const _=A%2;(u==="reverse"||u==="alternate"&&_||u==="alternate-reverse"&&!_)&&(B=1-B);const S=g>=this.totalDuration?1:Math.min(B,1),$=c(this.easing(S));a($),this.pauseTime===void 0&&(this.playState==="finished"||g>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,$)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class c1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const In=new WeakMap;function ep(e){return In.has(e)||In.set(e,{transforms:[],values:new Map}),In.get(e)}function m1(e,a){return e.has(a)||e.set(a,new c1),e.get(a)}const p1=["","X","Y","Z"],f1=["translate","scale","rotate","skew"],jl={x:"translateX",y:"translateY",z:"translateZ"},gd={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},g1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:gd,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:pi},skew:gd},Wa=new Map,ho=e=>`--motion-${e}`,ql=["x","y","z"];f1.forEach(e=>{p1.forEach(a=>{ql.push(e+a),Wa.set(ho(e+a),g1[e])})});const h1=(e,a)=>ql.indexOf(e)-ql.indexOf(a),_1=new Set(ql),tp=e=>_1.has(e),b1=(e,a)=>{jl[a]&&(a=jl[a]);const{transforms:n}=ep(e);e1(n,a),e.style.transform=v1(n)},v1=e=>e.sort(h1).reduce(y1,"").trim(),y1=(e,a)=>`${e} ${a}(var(${ho(a)}))`,ks=e=>e.startsWith("--"),hd=new Set;function C1(e){if(!hd.has(e)){hd.add(e);try{const{syntax:a,initialValue:n}=Wa.has(e)?Wa.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:n})}catch{}}}const Pn=(e,a)=>document.createElement("div").animate(e,a),_d={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Pn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Pn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Pn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Mn={},Ui={};for(const e in _d)Ui[e]=()=>(Mn[e]===void 0&&(Mn[e]=_d[e]()),Mn[e]);const w1=.015,S1=(e,a)=>{let n="";const s=Math.round(a/w1);for(let r=0;r<s;r++)n+=e(go(0,s-1,r))+", ";return n.substring(0,n.length-2)},bd=(e,a)=>ma(e)?Ui.linearEasing()?`linear(${S1(e,a)})`:Tt.easing:Xm(e)?A1(e):e,A1=([e,a,n,s])=>`cubic-bezier(${e}, ${a}, ${n}, ${s})`;function k1(e,a){for(let n=0;n<e.length;n++)e[n]===null&&(e[n]=n?e[n-1]:a());return e}const $1=e=>Array.isArray(e)?e:[e];function $s(e){return jl[e]&&(e=jl[e]),tp(e)?ho(e):e}const _l={get:(e,a)=>{a=$s(a);let n=ks(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!n&&n!==0){const s=Wa.get(a);s&&(n=s.initialValue)}return n},set:(e,a,n)=>{a=$s(a),ks(a)?e.style.setProperty(a,n):e.style[a]=n}};function ip(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function B1(e,a){var n;let s=(a==null?void 0:a.toDefaultUnit)||pi;const r=e[e.length-1];if(n1(r)){const d=((n=r.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";d&&(s=m=>m+d)}return s}function x1(){return window.__MOTION_DEV_TOOLS_RECORD}function T1(e,a,n,s={},r){const d=x1(),m=s.record!==!1&&d;let p,{duration:o=Tt.duration,delay:u=Tt.delay,endDelay:f=Tt.endDelay,repeat:c=Tt.repeat,easing:h=Tt.easing,persist:v=!1,direction:g,offset:y,allowWebkitAcceleration:A=!1,autoplay:B=!0}=s;const _=ep(e),S=tp(a);let $=Ui.waapi();S&&b1(e,a);const x=$s(a),E=m1(_.values,x),M=Wa.get(x);return ip(E.animation,!(As(h)&&E.generator)&&s.record!==!1),()=>{const V=()=>{var W,q;return(q=(W=_l.get(e,x))!==null&&W!==void 0?W:M==null?void 0:M.initialValue)!==null&&q!==void 0?q:0};let I=k1($1(n),V);const L=B1(I,M);if(As(h)){const W=h.createAnimation(I,a!=="opacity",V,x,E);h=W.easing,I=W.keyframes||I,o=W.duration||o}if(ks(x)&&(Ui.cssRegisterProperty()?C1(x):$=!1),S&&!Ui.linearEasing()&&(ma(h)||Zi(h)&&h.some(ma))&&($=!1),$){M&&(I=I.map(ce=>Ol(ce)?M.toDefaultUnit(ce):ce)),I.length===1&&(!Ui.partialKeyframes()||m)&&I.unshift(V());const W={delay:Fa.ms(u),duration:Fa.ms(o),endDelay:Fa.ms(f),easing:Zi(h)?void 0:bd(h,o),direction:g,iterations:c+1,fill:"both"};p=e.animate({[x]:I,offset:y,easing:Zi(h)?h.map(ce=>bd(ce,o)):void 0},W),p.finished||(p.finished=new Promise((ce,Be)=>{p.onfinish=ce,p.oncancel=Be}));const q=I[I.length-1];p.finished.then(()=>{v||(_l.set(e,x,q),p.cancel())}).catch(Wm),A||(p.playbackRate=1.000001)}else if(r&&S)I=I.map(W=>typeof W=="string"?parseFloat(W):W),I.length===1&&I.unshift(parseFloat(V())),p=new r(W=>{_l.set(e,x,L?L(W):W)},I,Object.assign(Object.assign({},s),{duration:o,easing:h}));else{const W=I[I.length-1];_l.set(e,x,M&&Ol(W)?M.toDefaultUnit(W):W)}return m&&d(e,a,I,{duration:o,delay:u,easing:h,repeat:c,offset:y},"motion-one"),E.setAnimation(p),p&&!B&&p.pause(),p}}const E1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function R1(e,a){var n;return typeof e=="string"?a?((n=a[e])!==null&&n!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const z1=e=>e(),ap=(e,a,n=Tt.duration)=>new Proxy({animations:e.map(z1).filter(Boolean),duration:n,options:a},I1),D1=e=>e.animations[0],I1={get:(e,a)=>{const n=D1(e);switch(a){case"duration":return e.duration;case"currentTime":return Fa.s((n==null?void 0:n[a])||0);case"playbackRate":case"playState":return n==null?void 0:n[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(P1)).catch(Wm)),e.finished;case"stop":return()=>{e.animations.forEach(s=>ip(s))};case"forEachNative":return s=>{e.animations.forEach(r=>s(r,e))};default:return typeof(n==null?void 0:n[a])>"u"?void 0:()=>e.animations.forEach(s=>s[a]())}},set:(e,a,n)=>{switch(a){case"currentTime":n=Fa.ms(n);case"playbackRate":for(let s=0;s<e.animations.length;s++)e.animations[s][a]=n;return!0}return!1}},P1=e=>e.finished;function M1(e,a,n){return ma(e)?e(a,n):e}function V1(e){return function(a,n,s={}){a=R1(a);const r=a.length,d=[];for(let m=0;m<r;m++){const p=a[m];for(const o in n){const u=E1(s,o);u.delay=M1(u.delay,m,r);const f=T1(p,o,n[o],u,e);d.push(f)}}return ap(d,s,s.duration)}}const F1=V1(Zm);function N1(e,a={}){return ap([()=>{const n=new Zm(e,[0,1],a);return n.finished.catch(()=>{}),n}],a,a.duration)}function H1(e,a,n){return(ma(e)?N1:F1)(e,a,n)}const he=(e,a)=>(n,{duration:s,keyframesOverride:r={}})=>H1(n,{...e,...r},{autoplay:!1,...a,duration:s}),vd=he({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),L1=he({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),O1=he({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),j1=he({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),q1=he({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),G1=he({opacity:[0,1]},{duration:.5,offset:[0,1]}),U1=he({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Y1=he({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),J1=he({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),W1=he({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),K1=he({opacity:[1,0]},{duration:.5,offset:[0,1]}),X1=he({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),Q1=he({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),Z1=he({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ey=he({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),ty=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),iy=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ay=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ly=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ny=he({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),sy=he({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),oy=he({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),ry=he({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),uy=he({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),dy=he({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),cy=he({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),my=he({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),py=he({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),fy=he({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),gy=he({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),hy=he({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),lp={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},np={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},sp={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},_y={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},by=he({transformOrigin:"top center",...lp},{offset:[0,1]}),vy=he({transformOrigin:"bottom center",...lp},{offset:[0,1]}),yy=he({transformOrigin:"center right",...np},{offset:[0,1]}),Cy=he({transformOrigin:"center left",...np},{offset:[0,1]}),wy=he({transformOrigin:"top center",...sp},{offset:[0,1]}),Sy=he({transformOrigin:"bottom center",...sp},{offset:[0,1]}),yd=he({transformOrigin:"center left",..._y},{offset:[0,1]}),vi=.8,ea={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ta={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ia={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},aa={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ay=he({transformOrigin:"top center",transform:ea.transform,opacity:ea.opacity},{duration:vi,offset:ea.offset}),ky=he({transformOrigin:"bottom center",transform:ea.transform,opacity:ea.opacity},{duration:vi,offset:ea.offset}),$y=he({transformOrigin:"center right",transform:ta.transform,opacity:ta.opacity},{duration:vi,offset:ta.offset}),By=he({transformOrigin:"center left",transform:ta.transform,opacity:ta.opacity},{duration:vi,offset:ta.offset}),xy=he({transformOrigin:"top center",transform:ia.transform,opacity:ia.opacity},{duration:vi,offset:ia.offset}),Ty=he({transformOrigin:"bottom center",transform:ia.transform,opacity:ia.opacity},{duration:vi,offset:ia.offset}),Ey=he({transformOrigin:"center right",transform:aa.transform,opacity:aa.opacity},{duration:vi,offset:aa.offset}),Ry=he({transformOrigin:"center left",transform:aa.transform,opacity:aa.opacity},{duration:vi,offset:aa.offset}),zy=he({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Dy=he({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Iy=he({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),Py=he({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),My=he({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),Vy=he({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Fy=he({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Ny=he({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Hy=he({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Ly={browse:[vd,L1],"browse right":[vd,O1],drop:[j1,q1],fade:[G1,K1],"fade up":[U1,X1],"fade down":[Y1,Q1],"fade left":[J1,Z1],"fade right":[W1,ey],fly:[ty,sy],"fly up":[iy,oy],"fly down":[ay,ry],"fly left":[ly,uy],"fly right":[ny,dy],"horizontal flip":[cy,my],"vertical flip":[py,fy],scale:[gy,hy],"slide up":[vy,Sy],"slide down":[by,wy],"slide left":[yy,yd],"slide right":[Cy,yd],"swing up":[ky,Ty],"swing down":[Ay,xy],"swing left":[$y,Ey],"swing right":[By,Ry],zoom:[zy,Dy]},Oy={bounce:[Iy,void 0],flash:[Py,void 0],glow:[My,void 0],jiggle:[Vy,void 0],pulse:[Fy,void 0],shake:[Ny,void 0],tada:[Hy,void 0]},op=e=>({...Ly,...Oy})[e],jy=e=>{const[a,n]=op(e.animation),s=F(()=>e.duration?e.duration/1e3:.5),r=F(()=>(m,p)=>{if(!a)return p();const o=a(m,{duration:s.value});o.play(),o.finished.then(p)}),d=F(()=>(m,p)=>{if(!n)return p();const o=n(m,{duration:s.value});o.play(),o.finished.then(p)});return{onEnter:r,onLeave:d}},Bs=z({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:n}=jy(e);return{onEnter:a,onLeave:n}},render(){return t(un,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),xs=z({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,n]=op(e.animation),s=F(()=>(d,m)=>{if(!a)return m();const p=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});p.play(),p.finished.then(m)}),r=F(()=>(d,m)=>{if(!n)return m();const p=n(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});p.play(),p.finished.then(m)});return{onEnter:s,onLeave:r}},render(){return t(rm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),qy={install(e){e.component(Bs.name,Bs),e.component(xs.name,xs)}},Gy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:cv,Calendar:$v,Checkbox:Bv,Dimmer:xv,Dropdown:Dv,Embed:Iv,Modal:Ov,Popup:qv,Progress:Yv,Rating:Wv,Search:Kv,Sidebar:Xv,Slider:Qv,Tab:Zv,Transition:qy},Symbol.toStringTag,{value:"Module"})),Vn=z({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...fo()},setup(e,{slots:a}){const n=F(()=>Q("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var s;return e.attached?t(st,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:n.value},[(s=a.default)==null?void 0:s.call(a)])}}}),Uy=z({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const n=F(()=>Q("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var s,r;return e.verticalAttached?t("div",{class:n.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(s=a.default)==null?void 0:s.call(a)])]):t("div",{class:n.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function Fn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Yy=z({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Gm()},setup(e,{emit:a}){const{colorClasses:n}=Um(e),s=F(()=>{var m,p,o,u,f;return Q(e.centered&&"center aligned",e.type||"neutral",n.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((o=e.actionsProps)==null?void 0:o.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),r=j(e.showProgressUp?0:100),d=()=>{const m=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(p),r.value+=1;return}r.value<=0&&clearInterval(p),r.value-=1},m)},500)};return hi(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:s,progress:r}},render(){var e;let a,n,s;return t(Uy,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,d,m,p;return[this.showProgress==="top"&&t(Ll,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(Vn,this.actionsProps,Fn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Vn,this.actionsProps,Fn(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&t(Vn,this.actionsProps,Fn(s=this.actions({close:()=>this.$emit("close")}))?s:{default:()=>[s]}),this.showProgress==="bottom"&&t(Ll,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),Jy=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],Wy=({defaultValue:e}={})=>({position:{type:String,validator:a=>Jy.includes(a),default:e}}),Ky=e=>({positionClasses:F(()=>e.position||"")});function Xy(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Qy=z({name:"SuiToastContainer",props:{horizontal:Boolean,...fo(),...Wy({defaultValue:"top right"})},setup(e){const{items:a,remove:n}=rp(),{attachedClasses:s}=qm(e),{positionClasses:r}=Ky(e);return{classes:F(()=>Q(s.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:n,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[0,`${d.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:m,marginBottom:p}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[`${d.offsetWidth}px`,0],p=[`${d.offsetHeight}px`,0],o=e.horizontal?{width:m}:{height:p},u=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...o,marginBottom:u}}}},render(){let e;return t(sn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(xs,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},Xy(e=this.items.filter(({position:a,attached:n})=>this.attached?n===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...n})=>t(Yy,Li({key:a},n,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),Zy=j(1),Sa=j([]),rp=()=>({items:Sa,add:e=>{e.position=e.position||"top right",Sa.value=[...Sa.value,{id:Zy.value++,...e}]},remove:e=>{Sa.value=Sa.value.filter(a=>a.id!==e)}}),it=()=>{var e;const a=(e=Ot())==null?void 0:e.appContext,{add:n}=rp();return{toast:s=>{const{position:r,attached:d,horizontal:m}=s;iC({position:r,attached:d,horizontal:m})||tC(a,{position:r,attached:d,horizontal:m}),n(s)}}},eC=(e,{appContext:a,element:n}={})=>{const s=n||document.createElement("div");return a&&(e.appContext=a),Il(e,s),{vNode:e,el:s}},tC=(e,{position:a="top right",attached:n,horizontal:s=!1}={})=>{const r=U(Qy,{position:a,attached:n,horizontal:s}),{el:d}=eC(r,{appContext:e});return{vNode:r,el:d}},iC=({position:e="top right",attached:a,horizontal:n})=>{const s=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(s)};function aC(e){Object.values({...Wb,...av,...dv,...Gy}).map(a=>e.use(a))}const lC={install:aC},nC=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=zm(),n=F(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),s=r=>{r.preventDefault();const m=r.target.parentElement.getAttribute("href"),p=m.slice(m.indexOf("#")+1),o=document.getElementById(p);o&&o.scrollIntoView({behavior:"smooth"})};return(r,d)=>{const m=b("SuiHeader"),p=b("SuiGridColumn"),o=b("SuiGridRow");return R(),fe(Ae,null,[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[l(xe(e.label)+" ",1),t(C(Rm),{to:`${n.value}#${r.$attrs.id}`,target:"_self",onClick:s},{default:i(()=>[t(C(ee),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[t(C(ee),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),w("p",null,[sa(r.$slots,"default",{},void 0,!0)])],64)}}}),sC=Ce(nC,[["__scopeId","data-v-a2b78897"]]),oC={mounted(e,a){var r;const n=a.modifiers,s=a.value;n.script||s==="script"?e.className="language-javascript":e.className="language-markup",Z_.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},rC={key:0},uC={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,n)=>{const s=b("SuiGridColumn"),r=b("SuiGridRow");return R(),N(r,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[sa(a.$slots,"default")]),_:3}),t(s,{width:16},{default:i(()=>[t(C(Bs),{animation:"scale"},{default:i(()=>[e.hideCode?no("",!0):tl((R(),fe("pre",rC,[w("code",null,xe(e.code)+`
`,1)])),[[C(oC)]])]),_:1})]),_:1})]),_:3})}}},J={__name:"DocSection",props:["label","code"],setup(e){const a=j(!0),n=()=>a.value=!a.value;return(s,r)=>{const d=b("SuiGrid");return R(),fe("section",null,[t(d,{columns:2},{default:i(()=>[t(sC,Li({label:e.label,"on-click":n},s.$attrs),{default:i(()=>[sa(s.$slots,"description")]),_:3},16,["label"]),t(uC,{code:e.code,"hide-code":a.value},{default:i(()=>[sa(s.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},dC=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,cC={__name:"ButtonDoc",setup(e){const a=j("Follow"),n=()=>a.value=a.value==="Follow"?"Following":"Follow";return(s,r)=>(R(),N(J,{label:"Button",code:dC},{description:i(()=>[l(" A standard button ")]),example:i(()=>[t(C(P),{onClick:n},{default:i(()=>[l(xe(a.value),1)]),_:1})]),_:1}))}},mC=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,pC={__name:"EmphasisDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Emphasis",code:mC},{description:i(()=>[l(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(C(P),{primary:""},{default:i(()=>[l("Save")]),_:1}),t(C(P),{secondary:""},{default:i(()=>[l("Okay")]),_:1}),t(C(P),null,{default:i(()=>[l("Cancel")]),_:1})]),_:1}))}},fC=`<template>
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
</template>`,gC={__name:"AnimatedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Animated",code:fC},{description:i(()=>[l(" A button can animate to show hidden content ")]),example:i(()=>[t(C(P),{animated:""},{default:i(()=>[t(C(ui),{visible:""},{default:i(()=>[l("Next")]),_:1}),t(C(ui),{hidden:""},{default:i(()=>[t(C(ee),{name:"arrow right"})]),_:1})]),_:1}),t(C(P),{animated:"vertical"},{default:i(()=>[t(C(ui),{visible:""},{default:i(()=>[t(C(ee),{name:"shop"})]),_:1}),t(C(ui),{hidden:""},{default:i(()=>[l("Shop")]),_:1})]),_:1}),t(C(P),{animated:"fade"},{default:i(()=>[t(C(ui),{visible:""},{default:i(()=>[l(" Sign-up for a Pro account ")]),_:1}),t(C(ui),{hidden:""},{default:i(()=>[l("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},hC=`<template>
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
</template>`,_C={__name:"LabeledDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Labeled",code:hC},{description:i(()=>[l(" A button can appear alongside a label ")]),example:i(()=>[t(C(P),{labeled:"right",as:"div"},{default:i(()=>[t(C(P),{icon:"heart",content:" Like"}),t(C(Pt),{basic:""},{default:i(()=>[l("2,048")]),_:1})]),_:1}),t(C(P),{labeled:"left",as:"div"},{default:i(()=>[t(C(Pt),{basic:"",pointing:"right"},{default:i(()=>[l("2,048")]),_:1}),t(C(P),{icon:"heart",content:" Like"})]),_:1}),t(C(P),{labeled:"left",as:"div"},{default:i(()=>[t(C(Pt),{basic:""},{default:i(()=>[l("1,048")]),_:1}),t(C(P),{icon:"fork"})]),_:1})]),_:1}))}},bC=`<template>
  <SuiButton icon="cloud" />
</template>`,vC={__name:"IconDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Icon",code:bC},{description:i(()=>[l(" A button can have only an icon ")]),example:i(()=>[t(C(P),{icon:"cloud"})]),_:1}))}},yC=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,CC={__name:"LabeledIconDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Labeled Icon",code:yC},{description:i(()=>[l(" A button can use an icon as a label ")]),example:i(()=>[t(C(P),{labeled:"",icon:"pause",content:"Pause"}),t(C(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(C(P),{labeled:"",icon:""},{default:i(()=>[t(C(ee),{loading:"",name:"spinner"}),l(" Loading ")]),_:1})]),_:1}))}},wC=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,SC={__name:"BasicDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Basic",code:wC},{description:i(()=>[l(" A basic button is less pronounced ")]),example:i(()=>[t(C(P),{basic:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(C(P),{basic:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(C(P),{basic:"",positive:""},{default:i(()=>[l("Positive")]),_:1}),t(C(P),{basic:"",negative:""},{default:i(()=>[l("Negative")]),_:1})]),_:1}))}},AC=`<template>
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
</template>`,kC={__name:"TertiaryDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Tertiary",code:AC},{description:i(()=>[l(" An none bordered less important button ")]),example:i(()=>[t(C(P),{tertiary:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(C(P),{tertiary:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(C(P),{tertiary:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(C(P),{tertiary:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(C(P),{tertiary:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(C(P),{tertiary:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(C(P),{tertiary:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(C(P),{tertiary:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(C(P),{tertiary:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(C(P),{tertiary:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(C(P),{tertiary:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(C(P),{tertiary:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(C(P),{tertiary:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(C(P),{tertiary:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(C(P),{tertiary:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},$C=`<template>
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
</template>`,BC={__name:"InvertedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Inverted",code:$C},{description:i(()=>[l(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(C(mt),{inverted:""},{default:i(()=>[t(C(P),{inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(C(P),{inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(C(P),{inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(C(P),{inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(C(P),{inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(C(P),{inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(C(P),{inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(C(P),{inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(C(P),{inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(C(P),{inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(C(P),{inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(C(P),{inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(C(P),{inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(C(P),{inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(C(P),{inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},xC=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,TC={__name:"ButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Buttons",code:xC},{description:i(()=>[l(" Buttons can exist together as a group ")]),example:i(()=>[t(C(st),null,{default:i(()=>[t(C(P),{content:"One"}),t(C(P),{content:"Two"}),t(C(P),{content:"Three"})]),_:1})]),_:1}))}},EC=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,RC={__name:"IconButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Icon Buttons",code:EC},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(C(st),{icon:""},{default:i(()=>[t(C(P),{icon:"align left"}),t(C(P),{icon:"align center"}),t(C(P),{icon:"align right"}),t(C(P),{icon:"align justify"})]),_:1})]),_:1}))}},zC=w("div",{class:"or"},null,-1),DC=w("div",{class:"or","data-text":"ou"},null,-1),IC=`<template>
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
</template>`,PC={__name:"ConditionalsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Conditionals",code:IC},{description:i(()=>[l(" Button groups can contain conditionals ")]),example:i(()=>[t(C(st),null,{default:i(()=>[t(C(P),{content:"Cancel"}),zC,t(C(P),{content:"Save",positive:""})]),_:1}),t(C(st),null,{default:i(()=>[t(C(P),{content:"un"}),DC,t(C(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},MC=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,VC={__name:"ActiveDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Active",code:MC},{description:i(()=>[l(" A button can show it is currently the active user selection ")]),example:i(()=>[t(C(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},FC=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,NC={__name:"DisabledDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Disabled",code:FC},{description:i(()=>[l(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(C(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},HC=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,LC={__name:"LoadingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Loading",code:HC},{description:i(()=>[l(" A button can show a loading indicator ")]),example:i(()=>[t(C(P),{loading:"",content:"Loading"}),t(C(P),{loading:"double",primary:"",content:"Loading"}),t(C(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},OC=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,jC={__name:"SocialDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Social",code:OC},{description:i(()=>[l(" A button can be formatted to link to a social website ")]),example:i(()=>[t(C(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(C(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(C(P),{vk:"",icon:"vk",content:"VK"}),t(C(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(C(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(C(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(C(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(C(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},qC=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,GC={__name:"SizeDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Size",code:qC},{description:i(()=>[l(" A button can have different sizes ")]),example:i(()=>[t(C(P),{size:"mini",content:"Mini"}),t(C(P),{size:"tiny",content:"Tiny"}),t(C(P),{size:"small",content:"Small"}),t(C(P),{size:"medium",content:"Medium"}),t(C(P),{size:"large",content:"Large"}),t(C(P),{size:"big",content:"Big"}),t(C(P),{size:"huge",content:"Huge"}),t(C(P),{size:"massive",content:"Massive"})]),_:1}))}},UC=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,YC={__name:"FloatedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Floated",code:UC},{description:i(()=>[l(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(C(P),{floated:"left",content:"Left Floated"}),t(C(P),{floated:"right",content:"Right Floated"})]),_:1}))}},JC=`<template>
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
</template>`,WC={__name:"ColoredDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Colored",code:JC},{description:i(()=>[l(" A button can have different colors ")]),example:i(()=>[t(C(P),{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(C(P),{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(C(P),{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(C(P),{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(C(P),{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(C(P),{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(C(P),{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(C(P),{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(C(P),{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(C(P),{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(C(P),{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(C(P),{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(C(P),{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},KC=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,XC={__name:"CompactDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Compact",code:KC},{description:i(()=>[l(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(C(P),{compact:"",content:"Hold"}),t(C(P),{compact:"",icon:"pause"}),t(C(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},QC=`<template>
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
<\/script>`,ZC={__name:"ToggleDoc",setup(e){const a=j(!1);return(n,s)=>(R(),N(J,{label:"Toggle",code:QC},{description:i(()=>[l(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(C(P),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ew=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,tw={__name:"PositiveDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Positive",code:ew},{description:i(()=>[l(" A button can hint towards a positive consequence ")]),example:i(()=>[t(C(P),{positive:"",content:"Positive Button"})]),_:1}))}},iw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,aw={__name:"NegativeDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Negative",code:iw},{description:i(()=>[l(" A button can hint towards a negative consequence ")]),example:i(()=>[t(C(P),{negative:"",content:"Negative Button"})]),_:1}))}},lw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,nw={__name:"FluidDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Fluid",code:lw},{description:i(()=>[l(" A button can take the width of its container ")]),example:i(()=>[t(C(P),{fluid:"",content:"Fits container"})]),_:1}))}},sw=`<template>
  <SuiButton circular icon="settings" />
</template>`,ow={__name:"CircularDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Circular",code:sw},{description:i(()=>[l(" A button can be circular ")]),example:i(()=>[t(C(P),{circular:"",icon:"settings"})]),_:1}))}},rw=w("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),uw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,dw={__name:"VerticallyAttachedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Vertically Attached",code:uw},{description:i(()=>[l(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(C(P),{attached:"top",content:"Top"}),t(C(mt),{attached:""},{default:i(()=>[rw]),_:1}),t(C(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},cw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,mw={__name:"HorizontallyAttachedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Horizontally Attached",code:cw},{description:i(()=>[l(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(C(P),{attached:"left",content:"Left"}),t(C(P),{attached:"right",content:"Right"})]),_:1}))}},pw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,fw={__name:"VerticalButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Vertical Buttons",code:pw},{description:i(()=>[l(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(C(st),{vertical:""},{default:i(()=>[t(C(P),null,{default:i(()=>[l("Feed")]),_:1}),t(C(P),null,{default:i(()=>[l("Messages")]),_:1}),t(C(P),null,{default:i(()=>[l("Events")]),_:1}),t(C(P),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"StackableButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Stackable Buttons",code:gw},{description:i(()=>[l(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(C(st),{stackable:""},{default:i(()=>[t(C(P),null,{default:i(()=>[l("Feed")]),_:1}),t(C(P),null,{default:i(()=>[l("Messages")]),_:1}),t(C(P),null,{default:i(()=>[l("Events")]),_:1}),t(C(P),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,bw={__name:"LabeledIconButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Icon Buttons",code:_w},{description:i(()=>[l(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(C(st),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(C(P),{icon:"pause",content:"Pause"}),t(C(P),{icon:"play",content:"Play"}),t(C(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"MixedGroupDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Mixed Group",code:vw},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(C(st),null,{default:i(()=>[t(C(P),{labeled:"",icon:"left chevron",content:"Back"}),t(C(P),{icon:"stop",content:"Stop"}),t(C(P),{icon:"",labeled:"right"},{default:i(()=>[t(C(ee),{name:"right chevron"}),l(" Forward ")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
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
</template>`,ww={__name:"EqualWidthDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Equal Width",code:Cw},{description:i(()=>[l(" Groups can have their widths divided evenly ")]),example:i(()=>[t(C(st),{widths:5},{default:i(()=>[t(C(P),null,{default:i(()=>[l("Overview")]),_:1}),t(C(P),null,{default:i(()=>[l("Specs")]),_:1}),t(C(P),null,{default:i(()=>[l("Warranty")]),_:1}),t(C(P),null,{default:i(()=>[l("Reviews")]),_:1}),t(C(P),null,{default:i(()=>[l("Support")]),_:1})]),_:1}),t(C(st),{widths:3},{default:i(()=>[t(C(P),null,{default:i(()=>[l("Overview")]),_:1}),t(C(P),null,{default:i(()=>[l("Specs")]),_:1}),t(C(P),null,{default:i(()=>[l("Support")]),_:1})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"ColoredButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Colored Buttons",code:Sw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(C(st),{color:"blue"},{default:i(()=>[t(C(P),null,{default:i(()=>[l("One")]),_:1}),t(C(P),null,{default:i(()=>[l("Two")]),_:1}),t(C(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},kw=`<template>
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
</template>`,$w={__name:"BasicButtonsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Basic Buttons",code:kw},{description:i(()=>[l(" A button group can be less pronounced ")]),example:i(()=>[t(C(st),{basic:""},{default:i(()=>[t(C(P),null,{default:i(()=>[l("One")]),_:1}),t(C(P),null,{default:i(()=>[l("Two")]),_:1}),t(C(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1}),t(C(st),null,{default:i(()=>[t(C(P),{basic:"",color:"red"},{default:i(()=>[l("One")]),_:1}),t(C(P),{basic:"",color:"blue"},{default:i(()=>[l("Two")]),_:1}),t(C(P),{basic:"",color:"green"},{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"GroupSizesDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Group Sizes",code:Bw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(C(st),{size:"large"},{default:i(()=>[t(C(P),null,{default:i(()=>[l("One")]),_:1}),t(C(P),null,{default:i(()=>[l("Two")]),_:1}),t(C(P),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Tw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:cC},{id:"emphasis",label:"Emphasis",category:"Types",component:pC},{id:"animated",label:"Animated",category:"Types",component:gC},{id:"labeled",label:"Labeled",category:"Types",component:_C},{id:"icon",label:"Icon",category:"Types",component:vC},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:CC},{id:"basic",label:"Basic",category:"Types",component:SC},{id:"tertiary",label:"Tertiary",category:"Types",component:kC},{id:"inverted",label:"Inverted",category:"Types",component:BC},{id:"buttons",label:"Buttons",category:"Groups",component:TC},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:RC},{id:"content",label:"Content",category:"Content",component:PC},{id:"active",label:"Active",category:"States",component:VC},{id:"disabled",label:"Disabled",category:"States",component:NC},{id:"loading",label:"Loading",category:"States",component:LC},{id:"social",label:"Social",category:"Variations",component:jC},{id:"size",label:"Size",category:"Variations",component:GC},{id:"floated",label:"Floated",category:"Variations",component:YC},{id:"colored",label:"Colored",category:"Variations",component:WC},{id:"compact",label:"Compact",category:"Variations",component:XC},{id:"toggle",label:"Toggle",category:"Variations",component:ZC},{id:"positive",label:"Positive",category:"Variations",component:tw},{id:"negative",label:"Negative",category:"Variations",component:aw},{id:"fluid",label:"Fluid",category:"Variations",component:nw},{id:"circular",label:"Circular",category:"Variations",component:ow},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:dw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:mw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:fw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:hw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:bw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:yw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:ww},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Aw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:$w},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:xw}];return(n,s)=>(R(),N(_i,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Ew=w("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Rw=`<template>
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
</template>`,zw={__name:"ContainerDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Container",code:Rw},{description:i(()=>[l(" A standard container ")]),example:i(()=>[t(C(mi),null,{default:i(()=>[Ew]),_:1})]),_:1}))}},Dw=w("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Iw=`<template>
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
</template>`,Pw={__name:"TextContainerDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Text Container",code:Iw},{description:i(()=>[l(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(C(mi),{text:""},{default:i(()=>[t(C(pe),{as:"h2"},{default:i(()=>[l("Header")]),_:1}),Dw]),_:1})]),_:1}))}},Mw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Vw={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Text Alignment",code:Mw},{description:i(()=>[l(" A container can specify its text alignment ")]),example:i(()=>[t(C(mi),{textAlign:"left"},{default:i(()=>[l("Left Aligned")]),_:1}),t(C(mi),{textAlign:"center"},{default:i(()=>[l("Center Aligned")]),_:1}),t(C(mi),{textAlign:"right"},{default:i(()=>[l("Right Aligned")]),_:1})]),_:1}))}},Fw=w("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Nw=`<template>
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
</template>`,Hw={__name:"FluidDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Fluid",code:Nw},{description:i(()=>[l(" A fluid container has no maximum width ")]),example:i(()=>[t(C(mi),{fluid:""},{default:i(()=>[t(C(pe),{as:"h2"},{default:i(()=>[l("Dogs Roles with Humans")]),_:1}),Fw]),_:1})]),_:1}))}},Lw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:zw},{id:"text-container",label:"Text Container",category:"Types",component:Pw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Vw},{id:"fluid",label:"Fluid",category:"Variations",component:Hw}];return(n,s)=>(R(),N(_i,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Ow=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,jw={__name:"DividerDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Divider",code:Ow},{description:i(()=>[l(" A standard divider ")]),example:i(()=>[t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(C(Ke)),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},qw=w("label",null,"Username",-1),Gw=w("input",{type:"text",placeholder:"Username"},null,-1),Uw=w("label",null,"Password",-1),Yw=w("input",{type:"password",placeholder:"Password"},null,-1),Jw=`<template>
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
</template>`,Ww={__name:"VerticalDividerDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Vertical Divider",code:Jw},{description:i(()=>[l(" A divider can segment content vertically. ")]),example:i(()=>[t(C(mt),{placeholder:""},{default:i(()=>[t(C(_s),{columns:"equal"},{default:i(()=>[t(C(Fl),null,{default:i(()=>[t(C(hs),null,{default:i(()=>[t(C(Vl),null,{default:i(()=>[qw,Gw]),_:1}),t(C(Vl),null,{default:i(()=>[Uw,Yw]),_:1}),t(C(P),{primary:""},{default:i(()=>[l("Login")]),_:1})]),_:1})]),_:1}),t(C(Fl),{textAlign:"middle"},{default:i(()=>[t(C(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(C(Ke),{vertical:""},{default:i(()=>[l("Or")]),_:1})]),_:1})]),_:1}))}},Kw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Xw={__name:"HorizontalDividerDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Horizontal Divider",code:Kw},{description:i(()=>[l(" A divider can segment content horizontally ")]),example:i(()=>[t(C(mt),{basic:"",textAlign:"center"},{default:i(()=>[t(C(ps),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(C(Ke),{horizontal:""},{default:i(()=>[l("Or")]),_:1}),t(C(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Qw=`<template>
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
</template>`,Zw={__name:"HorizontalAlignmentDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Horizontal Alignment",code:Qw},{description:i(()=>[l(" A horizontal divider can be aligned ")]),example:i(()=>[t(C(Ke),{horizontal:"",textAlign:"left"},{default:i(()=>[t(C(ee),{name:"left align"}),l(" Left Aligned ")]),_:1}),t(C(Ke),{horizontal:"",textAlign:"center"},{default:i(()=>[t(C(ee),{name:"center align"}),l(" Center Aligned ")]),_:1}),t(C(Ke),{horizontal:"",textAlign:"right"},{default:i(()=>[t(C(ee),{name:"right align"}),l(" Right Aligned ")]),_:1})]),_:1}))}},eS=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,tS={__name:"InvertedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Inverted",code:eS},{description:i(()=>[l(" A divider can have its colors inverted ")]),example:i(()=>[t(C(mt),{inverted:""},{default:i(()=>[t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(C(Ke),{inverted:""}),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(C(Ke),{horizontal:"",inverted:""},{default:i(()=>[l("Horizontal")]),_:1})]),_:1})]),_:1}))}},iS=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,aS={__name:"FittedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Inverted",code:iS},{description:i(()=>[l(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(C(mt),null,{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(C(Ke),{fitted:""}),l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},lS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,nS={__name:"HiddenDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Hidden",code:lS},{description:i(()=>[l(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(C(pe),null,{default:i(()=>[l("Section One")]),_:1}),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(C(Ke),{hidden:""}),t(C(pe),null,{default:i(()=>[l("Section Two")]),_:1}),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},sS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,oS={__name:"SectionDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Section",code:sS},{description:i(()=>[l(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(C(pe),null,{default:i(()=>[l("Section One")]),_:1}),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(C(Ke),{section:""}),t(C(pe),null,{default:i(()=>[l("Section Two")]),_:1}),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},rS=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,uS={__name:"ClearingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Clearing",code:rS},{description:i(()=>[l(" A divider can clear the contents above it ")]),example:i(()=>[t(C(mt),null,{default:i(()=>[t(C(pe),{floated:"right"},{default:i(()=>[l("Section One")]),_:1}),t(C(Ke),{clearing:""}),t(C(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},dS=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,cS={__name:"SizeDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Size",code:dS},{description:i(()=>[l(" A divider text can vary in size ")]),example:i(()=>[t(C(Ke),{horizontal:"",size:"mini"},{default:i(()=>[l("MINI")]),_:1}),t(C(Ke),{horizontal:"",size:"tiny"},{default:i(()=>[l("TINY")]),_:1}),t(C(Ke),{horizontal:"",size:"small"},{default:i(()=>[l("SMALL")]),_:1}),t(C(Ke),{horizontal:"",size:"large"},{default:i(()=>[l("LARGE")]),_:1}),t(C(Ke),{horizontal:"",size:"big"},{default:i(()=>[l("BIG")]),_:1}),t(C(Ke),{horizontal:"",size:"huge"},{default:i(()=>[l("HUGE")]),_:1}),t(C(Ke),{horizontal:"",size:"massive"},{default:i(()=>[l("MASSIVE")]),_:1})]),_:1}))}},mS={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:jw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Ww},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Xw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Zw},{id:"inverted",label:"Inverted",category:"Variations",component:tS},{id:"fitted",label:"Fitted",category:"Variations",component:aS},{id:"hidden",label:"Hidden",category:"Variations",component:nS},{id:"section",label:"Section",category:"Variations",component:oS},{id:"clearing",label:"Clearing",category:"Variations",component:uS},{id:"size",label:"Size",category:"Variations",component:cS}];return(n,s)=>(R(),N(_i,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},pS=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,fS={__name:"DisabledDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Disabled",code:pS},{description:i(()=>[l(" An emoji can show that it is disabled ")]),example:i(()=>[t(C(ht),{name:"anguished",disabled:""})]),_:1}))}},gS=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,hS={__name:"LoadingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Loading",code:gS},{description:i(()=>[l(" An emoji can be used as a simple loader ")]),example:i(()=>[t(C(ht),{name:"angel",loading:""}),t(C(ht),{name:"blush",loading:""}),t(C(ht),{name:"grin",loading:""})]),_:1}))}},_S=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,bS={__name:"SizeDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Size",code:_S},{description:i(()=>[l(" An emoji can vary in size ")]),example:i(()=>[t(C(ht),{name:"relaxed",size:"small"}),t(C(ht),{name:"relaxed",size:"medium"}),t(C(ht),{name:"relaxed",size:"large"}),t(C(ht),{name:"relaxed",size:"big"})]),_:1}))}},vS=`<template>
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
</template>`,yS={__name:"AutosizingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Autosizing",code:vS},{description:i(()=>[l(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(C(pe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(C(ht),{name:"relaxed"})]),_:1}),t(C(P),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(C(ht),{name:"relaxed"})]),_:1}),t(C(Pt),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(C(ht),{name:"relaxed"})]),_:1})]),_:1}))}},CS=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,wS={__name:"LinkDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Link",code:CS},{description:i(()=>[l(" An emoji can be formatted as a link ")]),example:i(()=>[t(C(ht),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},SS={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:fS},{id:"loading",label:"Loading",category:"States",component:hS},{id:"size",label:"Size",category:"Variations",component:bS},{id:"autosizing",label:"Autosizing",category:"Variations",component:yS},{id:"link",label:"Link",category:"Variations",component:wS}];return(n,s)=>(R(),N(_i,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},AS=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,kS={__name:"SizeDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Size",code:AS},{description:i(()=>[l(" A flag can vary in size ")]),example:i(()=>[t(C(Dt),{name:"de",size:"small"}),t(C(Dt),{name:"fr",size:"medium"}),t(C(Dt),{name:"li",size:"large"}),t(C(Dt),{name:"jp",size:"big"}),t(C(Dt),{name:"gb",size:"huge"}),t(C(Dt),{name:"un",size:"massive"})]),_:1}))}},$S=`<template>
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
</template>`,BS={__name:"AutosizingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Autosizing",code:$S},{description:i(()=>[l(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(C(pe),{size:"small"},{default:i(()=>[l(" Within a Header "),t(C(Dt),{name:"us"})]),_:1}),t(C(P),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(C(Dt),{name:"eu"})]),_:1}),t(C(Pt),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(C(Dt),{name:"pirate"})]),_:1})]),_:1}))}},xS={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:kS},{id:"autosizing",label:"Autosizing",category:"Types",component:BS}];return(n,s)=>(R(),N(_i,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},TS=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,ES={__name:"PageHeadersDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Page Headers",code:TS},{description:i(()=>[l(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(C(pe),{as:"h1"},{default:i(()=>[l("First Header")]),_:1}),t(C(pe),{as:"h2"},{default:i(()=>[l("Second Header")]),_:1}),t(C(pe),{as:"h3"},{default:i(()=>[l("Third Header")]),_:1}),t(C(pe),{as:"h4"},{default:i(()=>[l("Fourth Header")]),_:1}),t(C(pe),{as:"h5"},{default:i(()=>[l("Fifth Header")]),_:1})]),_:1}))}},RS=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,zS={__name:"ContentHeadersDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Content Headers",code:RS},{description:i(()=>[l(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(C(pe),{size:"huge"},{default:i(()=>[l("Huge Header")]),_:1}),t(C(pe),{size:"large"},{default:i(()=>[l("Large Header")]),_:1}),t(C(pe),{size:"medium"},{default:i(()=>[l("Medium Header")]),_:1}),t(C(pe),{size:"small"},{default:i(()=>[l("Small Header")]),_:1}),t(C(pe),{size:"tiny"},{default:i(()=>[l("Tiny Header")]),_:1})]),_:1}))}},DS=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,IS={__name:"IconHeadersDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Icon Headers",code:DS},{description:i(()=>[l(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(C(pe),{icon:""},{default:i(()=>[t(C(ee),{name:"settings"}),t(C(Ml),null,{default:i(()=>[l(" Account Settings ")]),_:1}),t(C(ca),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},PS=w("span",null,"$10.99",-1),MS=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,VS={__name:"SubHeadersDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Sub Headers",code:MS},{description:i(()=>[l(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(C(pe),{sub:""},{default:i(()=>[l("Price")]),_:1}),PS]),_:1}))}},FS=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,NS={__name:"ImageDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Image",code:FS},{description:i(()=>[l(" A header may contain an image ")]),example:i(()=>[t(C(pe),{as:"h2"},{default:i(()=>[t(C(bt),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),l(" Steve ")]),_:1})]),_:1}))}},HS=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,LS={__name:"IconDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Icon",code:HS},{description:i(()=>[l(" A header may contain an Icon ")]),example:i(()=>[t(C(pe),{as:"h2"},{default:i(()=>[t(C(ee),{name:"plug"}),t(C(Ml),null,{default:i(()=>[l(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},OS=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,jS={__name:"SubheaderDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Subheader",code:OS},{description:i(()=>[l(" Headers may contain subheaders ")]),example:i(()=>[t(C(pe),{as:"h2"},{default:i(()=>[l(" Account Settings "),t(C(ca),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},qS=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,GS={__name:"DisabledDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Disabled",code:qS},{description:i(()=>[l(" A header can show that it is inactive ")]),example:i(()=>[t(C(pe),{disabled:""},{default:i(()=>[l(" Disabled Header ")]),_:1})]),_:1}))}},US=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,YS={__name:"DividingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Dividing",code:US},{description:i(()=>[l(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(C(pe),{as:"h3",dividing:""},{default:i(()=>[l(" Dividing Header ")]),_:1})]),_:1}))}},JS=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,WS={__name:"BlockDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Block",code:JS},{description:i(()=>[l(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(C(pe),{as:"h3",block:""},{default:i(()=>[l(" Block Header ")]),_:1})]),_:1}))}},KS=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,XS={__name:"AttachedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Attached",code:KS},{description:i(()=>[l(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(C(pe),{as:"h2",attached:"top"},{default:i(()=>[l(" Attached Header ")]),_:1}),t(C(mt),{attached:""},{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},QS=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,ZS={__name:"FloatingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Floating",code:QS},{description:i(()=>[l(" A header can sit to the left or right of other content ")]),example:i(()=>[t(C(mt),{clearing:""},{default:i(()=>[t(C(pe),{as:"h3",floated:"right"},{default:i(()=>[l(" Go Forward ")]),_:1}),t(C(pe),{as:"h3",floated:"left"},{default:i(()=>[l(" Go Back ")]),_:1})]),_:1})]),_:1}))}},eA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,tA={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Text Alignment",code:eA},{description:i(()=>[l(" A header can have its text aligned to a side ")]),example:i(()=>[t(C(mt),null,{default:i(()=>[t(C(pe),{as:"h3",textAlign:"right"},{default:i(()=>[l("Float Right")]),_:1}),t(C(pe),{as:"h3",textAlign:"left"},{default:i(()=>[l("Float Left")]),_:1}),t(C(pe),{as:"h3",textAlign:"justified"},{default:i(()=>[l(" This text takes up the full width of the container ")]),_:1}),t(C(pe),{as:"h3",textAlign:"center"},{default:i(()=>[l("Centered")]),_:1})]),_:1})]),_:1}))}},iA=`<template>
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
</template>`,aA={__name:"ColoredDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Colored",code:iA},{description:i(()=>[l(" A header can be formatted with different colors ")]),example:i(()=>[t(C(pe),{as:"h4",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(C(pe),{as:"h4",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(C(pe),{as:"h4",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(C(pe),{as:"h4",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(C(pe),{as:"h4",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(C(pe),{as:"h4",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(C(pe),{as:"h4",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(C(pe),{as:"h4",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(C(pe),{as:"h4",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(C(pe),{as:"h4",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(C(pe),{as:"h4",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(C(pe),{as:"h4",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(C(pe),{as:"h4",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(C(pe),{as:"h4",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1}))}},lA=`<template>
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
</template>`,nA={__name:"InvertedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Colored",code:lA},{description:i(()=>[l(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(C(mt),{inverted:""},{default:i(()=>[t(C(pe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(C(pe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1})]),_:1}))}},sA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:ES},{id:"content-headers",label:"Content Headers",category:"Types",component:zS},{id:"icon-headers",label:"Icon Headers",category:"Types",component:IS},{id:"sub-headers",label:"Sub Headers",category:"Types",component:VS},{id:"image",label:"Image",category:"Content",component:NS},{id:"icon",label:"Icon",category:"Content",component:LS},{id:"subheader",label:"Subheader",category:"Content",component:jS},{id:"disabled",label:"Disabled",category:"States",component:GS},{id:"dividing",label:"Dividing",category:"Variations",component:YS},{id:"block",label:"Block",category:"Variations",component:WS},{id:"attached",label:"Attached",category:"Variations",component:XS},{id:"floating",label:"Floating",category:"Variations",component:ZS},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:tA},{id:"colored",label:"Colored",category:"Variations",component:aA},{id:"inverted",label:"Inverted",category:"Variations",component:nA}];return(n,s)=>(R(),N(_i,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},oA=`<template>
  <SuiIcon name="users" disabled />
</template>`,rA={__name:"DisabledDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Disabled",code:oA},{description:i(()=>[l(" An icon can show that it is disabled ")]),example:i(()=>[t(C(ee),{name:"users",disabled:""})]),_:1}))}},uA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,dA={__name:"LoadingDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Loading",code:uA},{description:i(()=>[l(" An icon can be used as a simple loader ")]),example:i(()=>[t(C(ee),{name:"spinner",loading:""}),t(C(ee),{name:"notched circle",loading:""}),t(C(ee),{name:"asterisk",loading:""})]),_:1}))}},cA=w("br",null,null,-1),mA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,pA={__name:"FittedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Fitted",code:mA},{description:i(()=>[l(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[w("div",null,[l(" This icon "),t(C(ee),{name:"help",fitted:""}),l(" is fitted. "),cA,l(" This icon "),t(C(ee),{name:"help"}),l(" is not fitted. ")])]),_:1}))}},fA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,gA={__name:"SizeDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Size",code:fA},{description:i(()=>[l(" An icon can vary in size ")]),example:i(()=>[t(C(ee),{name:"home",size:"mini"}),t(C(ee),{name:"home",size:"tiny"}),t(C(ee),{name:"home",size:"small"}),t(C(ee),{name:"home"}),t(C(ee),{name:"home",size:"large"}),t(C(ee),{name:"home",size:"big"}),t(C(ee),{name:"home",size:"huge"}),t(C(ee),{name:"home",size:"massive"})]),_:1}))}},hA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,_A={__name:"LinkDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Link",code:hA},{description:i(()=>[l(" An icon can be formatted as a link ")]),example:i(()=>[t(C(ee),{name:"close",link:""}),t(C(ee),{name:"help",link:""})]),_:1}))}},bA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,vA={__name:"FlippedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Flipped",code:bA},{description:i(()=>[l(" An icon can be flipped ")]),example:i(()=>[t(C(ee),{name:"cloud",flipped:"horizontally"}),t(C(ee),{name:"cloud",flipped:"vertically"})]),_:1}))}},yA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,CA={__name:"RotatedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Rotated",code:yA},{description:i(()=>[l(" An icon can be rotated ")]),example:i(()=>[t(C(ee),{name:"cloud",rotated:"clockwise"}),t(C(ee),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},wA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,SA={__name:"CircularDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Circular",code:wA},{description:i(()=>[l(" An icon can be formatted to appear circular ")]),example:i(()=>[t(C(ee),{name:"users",circular:""}),t(C(ee),{name:"users",circular:"",color:"teal"}),t(C(ee),{name:"users",circular:"",inverted:""}),t(C(ee),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},AA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,kA={__name:"BorderedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Bordered",code:AA},{description:i(()=>[l(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(C(ee),{name:"users",bordered:""}),t(C(ee),{name:"users",bordered:"",color:"teal"}),t(C(ee),{name:"users",bordered:"",inverted:"",color:"black"}),t(C(ee),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},$A=`<template>
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
</template>`,BA={__name:"ColoredDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Colored",code:$A},{description:i(()=>[l(" An icon can be formatted with different colors ")]),example:i(()=>[t(C(ee),{name:"users",primary:""}),t(C(ee),{name:"users",secondary:""}),t(C(ee),{name:"users",color:"red"}),t(C(ee),{name:"users",color:"orange"}),t(C(ee),{name:"users",color:"yellow"}),t(C(ee),{name:"users",color:"olive"}),t(C(ee),{name:"users",color:"green"}),t(C(ee),{name:"users",color:"teal"}),t(C(ee),{name:"users",color:"blue"}),t(C(ee),{name:"users",color:"violet"}),t(C(ee),{name:"users",color:"purple"}),t(C(ee),{name:"users",color:"pink"}),t(C(ee),{name:"users",color:"brown"}),t(C(ee),{name:"users",color:"grey"}),t(C(ee),{name:"users",color:"black"})]),_:1}))}},xA=`<template>
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
</template>`,TA={__name:"InvertedDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Inverted",code:xA},{description:i(()=>[l(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(C(ee),{name:"users",inverted:""}),t(C(ee),{name:"users",inverted:"",primary:""}),t(C(ee),{name:"users",inverted:"",secondary:""}),t(C(ee),{name:"users",inverted:"",color:"red"}),t(C(ee),{name:"users",inverted:"",color:"orange"}),t(C(ee),{name:"users",inverted:"",color:"yellow"}),t(C(ee),{name:"users",inverted:"",color:"olive"}),t(C(ee),{name:"users",inverted:"",color:"green"}),t(C(ee),{name:"users",inverted:"",color:"teal"}),t(C(ee),{name:"users",inverted:"",color:"blue"}),t(C(ee),{name:"users",inverted:"",color:"violet"}),t(C(ee),{name:"users",inverted:"",color:"purple"}),t(C(ee),{name:"users",inverted:"",color:"pink"}),t(C(ee),{name:"users",inverted:"",color:"brown"}),t(C(ee),{name:"users",inverted:"",color:"grey"})]),_:1}))}},EA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,RA={__name:"IconsDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Icons",code:EA},{description:i(()=>[l(" Several icons can be used together as a group ")]),example:i(()=>[t(C(di),{size:"huge"},{default:i(()=>[t(C(ee),{name:"circle outline",size:"big"}),t(C(ee),{name:"user"})]),_:1}),t(C(di),{size:"huge"},{default:i(()=>[t(C(ee),{name:"dont",size:"big",color:"red"}),t(C(ee),{name:"user",color:"black"})]),_:1})]),_:1}))}},zA=`<template>
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
</template>`,DA={__name:"CornerIconDoc",setup(e){return(a,n)=>(R(),N(J,{label:"Corner Icon",code:zA},{description:i(()=>[l(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(C(di),{size:"huge"},{default:i(()=>[t(C(ee),{name:"puzzle"}),t(C(ee),{name:"add",corner:"top left"})]),_:1}),t(C(di),{size:"huge"},{default:i(()=>[t(C(ee),{name:"puzzle"}),t(C(ee),{name:"add",corner:"top right"})]),_:1}),t(C(di),{size:"huge"},{default:i(()=>[t(C(ee),{name:"puzzle"}),t(C(ee),{name:"add",corner:"bottom left"})]),_:1}),t(C(di),{size:"huge"},{default:i(()=>[t(C(ee),{name:"puzzle"}),t(C(ee),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},IA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:rA},{id:"loading",label:"Loading",category:"States",component:dA},{id:"fitted",label:"Fitted",category:"Variations",component:pA},{id:"size",label:"Size",category:"Variations",component:gA},{id:"link",label:"Link",category:"Variations",component:_A},{id:"flipped",label:"Flipped",category:"Variations",component:vA},{id:"rotated",label:"Rotated",category:"Variations",component:CA},{id:"circular",label:"Circular",category:"Variations",component:SA},{id:"bordered",label:"Bordered",category:"Variations",component:kA},{id:"colored",label:"Colored",category:"Variations",component:BA},{id:"inverted",label:"Inverted",category:"Variations",component:TA},{id:"icons",label:"Icons",category:"Groups",component:RA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:DA}];return(n,s)=>(R(),N(_i,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},PA=z({name:"DocExample",components:{Prism:Vm},props:{title:String,description:String,code:String},setup(){const e=j(!1);return{active:e,toggle:()=>e.value=!e.value}}}),MA={class:"example"};function VA(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-grid-column"),u=b("sui-icon"),f=b("sui-grid-row"),c=b("prism"),h=b("sui-grid");return R(),fe("div",MA,[t(h,{columns:2},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l(xe(e.title)+" ",1),t(m,null,{default:i(()=>[l(xe(e.description),1)]),_:1})]),_:1})]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[sa(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(R(),N(o,{key:0,width:16},{default:i(()=>[t(c,{language:"markup"},{default:i(()=>[l(xe(e.code),1)]),_:1})]),_:1})):no("",!0)]),_:3})]),_:3})])}const ze=Ce(PA,[["render",VA],["__scopeId","data-v-fcfb6a67"]]),te="/vue-fomantic-ui/images/wireframe/image.png",bl="/vue-fomantic-ui/images/wireframe/image-text.png",xa="/vue-fomantic-ui/images/wireframe/white-image.png",wt="/vue-fomantic-ui/images/wireframe/square-image.png",FA=z({name:"ImageDoc",components:{DocExample:ze},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),NA={class:"intro"},HA=w("span",null,"Username",-1),LA=w("span",null,"Top Aligned",-1),OA=w("span",null,"Middle Aligned",-1),jA=w("span",null,"Bottom Aligned",-1),qA=w("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),GA=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),UA=w("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),YA=w("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),JA=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),WA=w("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function KA(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("doc-example"),A=b("sui-image-group");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",NA,[t(p,{as:"h1"},{default:i(()=>[l("Image "),t(m,null,{default:i(()=>[l(" An image is a graphic representation of something ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Image",description:"An image",code:e.imageCode},{default:i(()=>[t(g,{src:te,size:"small"})]),_:1},8,["code"]),t(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:e.imageLinkCode},{default:i(()=>[t(g,{as:"a",size:"medium",src:bl,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(y,{title:"Hidden",description:"An image can be hidden",code:e.hiddenCode},{default:i(()=>[t(g,{hidden:"",src:te,size:"small"})]),_:1},8,["code"]),t(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",src:te,size:"small"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:e.avatarCode},{default:i(()=>[w("div",null,[t(g,{avatar:"",src:te}),HA])]),_:1},8,["code"]),t(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:e.borderedCode},{default:i(()=>[t(g,{bordered:"",size:"medium",src:xa})]),_:1},8,["code"]),t(y,{title:"Fluid",description:"An image can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",src:te})]),_:1},8,["code"]),t(y,{title:"Rounded",description:"An image may appear rounded",code:e.roundedCode},{default:i(()=>[t(g,{rounded:"",size:"medium",src:te})]),_:1},8,["code"]),t(y,{title:"Circular",description:"An image may appear circular",code:e.circularCode},{default:i(()=>[t(g,{circular:"",size:"medium",src:wt})]),_:1},8,["code"]),t(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:e.verticallyAlignedCode},{default:i(()=>[w("div",null,[t(g,{verticalAlign:"top",size:"tiny",src:wt}),LA,t(o),t(g,{verticalAlign:"middle",size:"tiny",src:wt}),OA,t(o),t(g,{verticalAlign:"bottom",size:"tiny",src:wt}),jA])]),_:1},8,["code"]),t(y,{title:"Centered",description:"An image can appear centered in a content block",code:e.centeredCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{centered:"",size:"medium",src:te}),qA,GA,t(g,{centered:"",size:"small",src:bl}),UA]),_:1})]),_:1},8,["code"]),t(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:e.spacedCode},{default:i(()=>[t(v,null,{default:i(()=>[w("p",null,[l("Te eum doming eirmod, nominati pertinacia "),t(g,{spaced:"",size:"mini",src:te}),l(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),t(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{floated:"left",size:"small",src:bl}),YA,t(g,{floated:"right",size:"small",src:bl}),JA,WA]),_:1})]),_:1},8,["code"]),t(y,{title:"Size",description:"An image may appear at different sizes",code:e.sizeCode},{default:i(()=>[w("div",null,[t(g,{size:"mini",src:te}),t(o,{hidden:""}),t(g,{size:"tiny",src:te}),t(o,{hidden:""}),t(g,{size:"medium",src:te}),t(o,{hidden:""}),t(g,{size:"large",src:te})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:e.sizeGroupCode},{default:i(()=>[t(A,{size:"tiny"},{default:i(()=>[t(g,{src:te}),t(g,{src:te}),t(g,{src:te}),t(g,{src:te})]),_:1})]),_:1},8,["code"])]),_:1})])}const XA=Ce(FA,[["render",KA]]),QA=z({name:"InputDoc",components:{DocExample:ze},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),ZA={class:"intro"};function e0(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-input"),y=b("doc-example");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",ZA,[t(p,{as:"h1"},{default:i(()=>[l("Input "),t(m,null,{default:i(()=>[l(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Input",description:"A standard input",code:e.inputCode},{default:i(()=>[t(g,{placeholder:"Search..."})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:e.focusCode},{default:i(()=>[t(g,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:e.loadingCode},{default:i(()=>[w("div",null,[t(g,{loading:"",placeholder:"Search..."}),t(o,{hidden:""}),t(g,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),t(y,{title:"Disabled",description:"An input field can show that it is disabled",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Error",description:"An input field can show the data contains errors",code:e.errorCode},{default:i(()=>[t(g,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Icon",description:"An input can be formatted with an icon",code:e.iconCode},{default:i(()=>[t(g,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Labeled",description:"An input can be formatted with a label",code:e.labeledCode},{default:i(()=>[w("div",null,[t(g,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),t(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:e.actionCode},{default:i(()=>[t(g,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Transparent",description:"A transparent input has no background",code:e.transparentCode},{default:i(()=>[t(g,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(g,{inverted:"",placeholder:"Search..."}),t(o,{inverted:""}),t(g,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),t(o,{inverted:""}),t(g,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),t(y,{title:"Fluid",description:"An input can take the size of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Size",description:"An input can vary in size",code:e.sizeCode},{default:i(()=>[w("div",null,[t(g,{size:"mini",icon:"search",placeholder:"Search mini"}),t(o,{hidden:""}),t(g,{size:"small",icon:"search",placeholder:"Search small"}),t(o,{hidden:""}),t(g,{size:"large",icon:"search",placeholder:"Search large"}),t(o,{hidden:""}),t(g,{size:"big",icon:"search",placeholder:"Search big"}),t(o,{hidden:""}),t(g,{size:"huge",icon:"search",placeholder:"Search huge"}),t(o,{hidden:""}),t(g,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const t0=Ce(QA,[["render",e0]]),Ts="/vue-fomantic-ui/images/avatar/small/joe.jpg",Lt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",Ka="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Se="/vue-fomantic-ui/images/wireframe/paragraph.png",i0=z({name:"LabelDoc",components:{DocExample:ze},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),a0={class:"intro"},l0=w("img",{src:Ts},null,-1),n0=w("img",{src:Lt},null,-1),s0=w("img",{src:Ka},null,-1),o0=w("input",{type:"text",placeholder:"First name"},null,-1),r0=w("input",{type:"text",placeholder:"Last name"},null,-1),u0=w("input",{type:"text",placeholder:"Username"},null,-1),d0=w("input",{type:"password",placeholder:"Password"},null,-1),c0=w("span",null,"Account Details",-1),m0=w("span",null,"User Reviews",-1),p0=w("img",{src:Ka},null,-1),f0=w("img",{src:Lt},null,-1);function g0(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-label"),y=b("doc-example"),A=b("sui-form-field"),B=b("sui-form"),_=b("sui-image"),S=b("sui-grid-column"),$=b("sui-grid"),x=b("sui-grid-row"),E=b("sui-list-item"),M=b("sui-list"),V=b("sui-label-detail"),I=b("sui-label-group");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",a0,[t(p,{as:"h1"},{default:i(()=>[l("Label "),t(m,null,{default:i(()=>[l(" A label displays content classification ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Label",description:"A label",code:e.labelCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"mail"}),l(" 23 ")]),_:1})]),_:1},8,["code"]),t(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:e.imageCode},{default:i(()=>[w("div",null,[t(g,{as:"a",image:""},{default:i(()=>[l0,l(" Joe ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[n0,l(" Elliot ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[s0,l(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Pointing",description:"A label can point to content next to it",code:e.pointingCode},{default:i(()=>[t(B,{fluid:""},{default:i(()=>[t(A,null,{default:i(()=>[o0,t(g,{pointing:""},{default:i(()=>[l("Please enter a value")]),_:1})]),_:1}),t(o),t(A,null,{default:i(()=>[t(g,{pointing:"below"},{default:i(()=>[l("Please enter a value")]),_:1}),r0]),_:1}),t(o),t(A,{inline:""},{default:i(()=>[u0,t(g,{pointing:"left"},{default:i(()=>[l("That name is taken!")]),_:1})]),_:1}),t(o),t(A,{inline:""},{default:i(()=>[t(g,{pointing:"right"},{default:i(()=>[l("Your password must be 6 characters or more")]),_:1}),d0]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:e.cornerCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(S,null,{default:i(()=>[t(_,{fluid:"",src:te,label:{corner:"left",icon:"heart"}})]),_:1}),t(S,null,{default:i(()=>[t(_,{fluid:"",src:te,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Tag",description:"A label can appear as a tag",code:e.tagCode},{default:i(()=>[w("div",null,[t(g,{tag:""},{default:i(()=>[l("New")]),_:1}),t(g,{tag:"",color:"red"},{default:i(()=>[l("Upcoming")]),_:1}),t(g,{tag:"",color:"teal"},{default:i(()=>[l("Featured")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:e.ribbonCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(S,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"",color:"red"},{default:i(()=>[l("Overview")]),_:1}),c0,t(_,{src:Se}),t(g,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[l("Community")]),_:1}),m0,t(_,{src:Se})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[l("Specs")]),_:1}),t(_,{src:Se}),t(g,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[l("Reviews")]),_:1}),t(_,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Attached",description:"A label can attach to a content segment",code:e.attachedCode},{default:i(()=>[t($,{columns:3},{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top"},{default:i(()=>[l("HTML")]),_:1}),t(_,{src:Se})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom"},{default:i(()=>[l("CSS")]),_:1}),t(_,{src:Se})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top right"},{default:i(()=>[l("Code")]),_:1}),t(_,{src:Se})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top left"},{default:i(()=>[l("View")]),_:1}),t(_,{src:Se})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom left"},{default:i(()=>[l("User View")]),_:1}),t(_,{src:Se})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom right"},{default:i(()=>[l("Admin View")]),_:1}),t(_,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:e.horizontalCode},{default:i(()=>[t(M,{divided:"",selection:""},{default:i(()=>[t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Kumquats ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"purple",horizontal:""},{default:i(()=>[l("Candy")]),_:1}),l(" Ice Cream ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Orange ")]),_:1}),t(E,null,{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[l("Dog")]),_:1}),l(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Floating",description:"A label can float above or below another element",code:e.floatingCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{name:"mail"}),l(" Messages "),t(g,{floating:"",color:"red"},{default:i(()=>[l("22")]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(u,{name:"users"}),l(" Friends "),t(g,{floating:"",color:"teal"},{default:i(()=>[l("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(y,{title:"Detail",description:"A label can contain a detail",code:e.detailCode},{default:i(()=>[t(g,null,{default:i(()=>[l(" Dogs "),t(V,null,{default:i(()=>[l("214")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Icon",description:"A label can include an icon",code:e.iconCode},{default:i(()=>[w("div",null,[t(g,{as:"a"},{default:i(()=>[t(u,{name:"mail"}),l(" Mail ")]),_:1}),t(g,{as:"a"},{default:i(()=>[l(" Tag "),t(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),t(y,{title:"Image",description:"A label can include an image",code:e.imageIncludeCode},{default:i(()=>[w("div",null,[t(g,{as:"a"},{default:i(()=>[t(_,{avatar:"",spaced:"right",src:Lt}),l(" Elliot ")]),_:1}),t(g,{as:"a"},{default:i(()=>[p0,l(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Link",description:"A label can be a link or contain an item that links",code:e.linkCode},{default:i(()=>[t(g,{as:"a",link:""},{default:i(()=>[t(u,{name:"mail"}),l(" 23 ")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Circular",description:"A label can be circular",code:e.circularCode},{default:i(()=>[w("div",null,[t(g,{as:"a",circular:"",color:"red"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"orange"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"yellow"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"olive"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"green"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"teal"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"blue"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"violet"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"purple"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"pink"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"brown"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"grey"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"black"},{default:i(()=>[l("2")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Basic",description:"A label can reduce its complexity",code:e.basicCode},{default:i(()=>[w("div",null,[t(g,{basic:"",as:"a"},{default:i(()=>[l("Basic")]),_:1}),t(g,{basic:"",as:"a",pointing:""},{default:i(()=>[l("Pointing")]),_:1}),t(g,{basic:"",as:"a",image:""},{default:i(()=>[f0,l(" Elliot ")]),_:1}),t(g,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[l("Red Pointing")]),_:1}),t(g,{basic:"",as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Colored",description:"A label can have different colors",code:e.coloredCode},{default:i(()=>[w("div",null,[t(g,{as:"a",color:"primary"},{default:i(()=>[l("Primary")]),_:1}),t(g,{as:"a",color:"secondary"},{default:i(()=>[l("Secondary")]),_:1}),t(g,{as:"a",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g,{as:"a",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g,{as:"a",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g,{as:"a",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g,{as:"a",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g,{as:"a",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g,{as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g,{as:"a",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g,{as:"a",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g,{as:"a",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g,{as:"a",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g,{as:"a",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g,{as:"a",color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Basic Tag",description:"",code:e.basicTagCode},{default:i(()=>[w("div",null,[t(g,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[l("Primary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[l("Secondary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Size",description:"A label can be small or large",code:e.sizeCode},{default:i(()=>[w("div",null,[t(g,{size:"mini"},{default:i(()=>[l("Mini")]),_:1}),t(g,{size:"tiny"},{default:i(()=>[l("Tiny")]),_:1}),t(g,{size:"small"},{default:i(()=>[l("Small")]),_:1}),t(g,null,{default:i(()=>[l("Medium")]),_:1}),t(g,{size:"large"},{default:i(()=>[l("Large")]),_:1}),t(g,{size:"big"},{default:i(()=>[l("Big")]),_:1}),t(g,{size:"huge"},{default:i(()=>[l("Huge")]),_:1}),t(g,{size:"massive"},{default:i(()=>[l("Massive")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(y,{title:"Group Size",description:"Labels can share sizes together",code:e.groupSizeCode},{default:i(()=>[t(I,{size:"huge"},{default:i(()=>[t(g,null,{default:i(()=>[l("Fun")]),_:1}),t(g,null,{default:i(()=>[l("Happy")]),_:1}),t(g,null,{default:i(()=>[l("Smart")]),_:1}),t(g,null,{default:i(()=>[l("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Colored Group",description:"Labels can share colors together",code:e.coloredGroupCode},{default:i(()=>[t(I,{color:"blue"},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l(" Fun "),t(u,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[l(" Happy "),t(V,null,{default:i(()=>[l("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Basic Group",description:"Labels can share their style together",code:e.basicGroupCode},{default:i(()=>[t(I,{basic:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l(" Fun "),t(u,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[l(" Happy "),t(V,null,{default:i(()=>[l("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Tag Group",description:"Labels can share tag formatting",code:e.tagGroupCode},{default:i(()=>[t(I,{tag:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("$10.00")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$19.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$24.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$30.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"CircularGroup",description:"Labels can share shapes",code:e.circularGroupCode},{default:i(()=>[t(I,{circular:""},{default:i(()=>[t(g,null,{default:i(()=>[l("11")]),_:1}),t(g,null,{default:i(()=>[l("22")]),_:1}),t(g,null,{default:i(()=>[l("33")]),_:1}),t(g,null,{default:i(()=>[l("44")]),_:1}),t(g,null,{default:i(()=>[l("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const h0=Ce(i0,[["render",g0]]),_0="/vue-fomantic-ui/images/avatar/small/rachel.png",b0="/vue-fomantic-ui/images/avatar/small/lindsay.png",v0="/vue-fomantic-ui/images/avatar/small/matthew.png",fn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",y0="/vue-fomantic-ui/images/avatar/small/veronika.jpg",C0="/vue-fomantic-ui/images/avatar/small/tom.jpg",vl="/vue-fomantic-ui/images/avatar/small/christian.jpg",gn="/vue-fomantic-ui/images/avatar/small/matt.jpg",Ta="/vue-fomantic-ui/images/avatar/small/helen.jpg",Si="/vue-fomantic-ui/images/avatar/small/daniel.jpg",w0=z({name:"ListDoc",components:{DocExample:ze},setup(){return{listCode:`<sui-list>
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
</div>`}}}),S0={class:"intro"},A0=w("div",null,"Benefits",-1),k0={class:"list"},$0=w("a",null,"Languages",-1),B0=w("a",null,[w("b",null,"Arrested Development")],-1),x0=w("a",null,[w("b",null,"Bob's Burgers")],-1),T0=w("a",null,[w("b",null,"The Godfather Part 2")],-1),E0=w("a",null,[w("b",null,"Twin Peaks")],-1),R0=w("a",null,[w("b",null,"Arrested Development")],-1),z0=w("a",null,[w("b",null,"Bob's Burgers")],-1),D0=w("a",null,[w("b",null,"The Godfather Part 2")],-1);function I0(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-list-item"),y=b("sui-list"),A=b("doc-example"),B=b("sui-list-list"),_=b("sui-list-header"),S=b("sui-list-description"),$=b("sui-list-content"),x=b("sui-image");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",S0,[t(p,{as:"h1"},{default:i(()=>[l("List "),t(m,null,{default:i(()=>[l(" A list is used to group related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[l("Apples")]),_:1}),t(g,null,{default:i(()=>[l("Pears")]),_:1}),t(g,null,{default:i(()=>[l("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(y,{bulleted:""},{default:i(()=>[t(g,null,{default:i(()=>[l("Gaining Access")]),_:1}),t(g,null,{default:i(()=>[l("Inviting Friends")]),_:1}),t(g,null,{default:i(()=>[A0,w("div",k0,[t(g,{as:"a"},{default:i(()=>[l("Link to somewhere")]),_:1}),t(g,null,{default:i(()=>[l("Rebates")]),_:1}),t(g,null,{default:i(()=>[l("Discounts")]),_:1})])]),_:1}),t(g,null,{default:i(()=>[l("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(y,{ordered:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("Getting Started")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Introduction")]),_:1}),t(g,null,{default:i(()=>[$0,t(B,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("HTML")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Javascript")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("CSS")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(y,{link:""},{default:i(()=>[t(g,{active:""},{default:i(()=>[l("Home")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("About")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Jobs")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[l("1")]),_:1}),t(g,null,{default:i(()=>[l("2")]),_:1}),t(g,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Floated Icon")]),_:1}),t(S,null,{default:i(()=>[l(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Icon Alignment")]),_:1}),t(S,null,{default:i(()=>[l(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"help"}),l(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:_0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Rachel")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),B0,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:b0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Lindsay")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),x0,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:v0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Matthew")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),T0,l(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:fn}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),E0,l(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:y0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(S,null,{default:i(()=>[l(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("What is a FAQ?")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Who is our user?")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("New York City")]),_:1}),l(" A lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Chicago")]),_:1}),l(" Also quite a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Los Angeles")]),_:1}),l(" Sometimes can be a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("San Francisco")]),_:1}),l(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Krolewskie Jadlo")]),_:1}),t(S,null,{default:i(()=>[l(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Xian Famous Foods")]),_:1}),t(S,null,{default:i(()=>[l(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Sapporo Haru")]),_:1}),t(S,null,{default:i(()=>[l(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Enid's")]),_:1}),t(S,null,{default:i(()=>[l(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(y,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:C0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Tom")]),_:1}),l(" Top Contributor ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:vl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian Rocha")]),_:1}),l(" Admin ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:gn}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Matt")]),_:1}),l(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ta}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:vl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ta}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:vl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(y,{relaxed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),R0,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ka}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),z0,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Lt}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(S,null,{default:i(()=>[l(" Last seen watching "),D0,l(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ka}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Lt}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(y,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ta}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ta}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:vl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Si}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content Variations")]),_:1}),t(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(y,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:wt}),t($,{verticalAlign:"top"},{default:i(()=>[l(" Top Aligned ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:wt}),t($,{verticalAlign:"middle"},{default:i(()=>[l(" Middle ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:wt}),t($,{verticalAlign:"bottom"},{default:i(()=>[l(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[w("div",null,[t(y,{floated:"right",horizontal:""},{default:i(()=>[t(g,{disabled:""},{default:i(()=>[l("© GitHub, Inc.")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Terms")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Privacy")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Contact")]),_:1})]),_:1}),t(y,{horizontal:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("About Us")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const P0=Ce(w0,[["render",I0]]),qe="/vue-fomantic-ui/images/wireframe/short-paragraph.png",M0=z({name:"LoaderDoc",components:{DocExample:ze},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),V0={class:"intro"};function F0(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-loader"),y=b("sui-dimmer"),A=b("sui-image"),B=b("doc-example");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",V0,[t(p,{as:"h1"},{default:i(()=>[l("Loader "),t(m,null,{default:i(()=>[l(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(B,{title:"Loader",description:"A loader",code:e.loaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g)]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(B,{title:"Text Loader",description:"A loader can contain text",code:e.textLoaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,null,{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(B,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:e.indeterminateCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,{indeterminate:""},{default:i(()=>[l("Preparing Files")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(B,{title:"Active",description:"A loader can be active or visible",code:e.activeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{active:""}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(B,{title:"Diasbled",description:"A loader can be disabled or hidden",code:e.disabledCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{disabled:""}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(B,{title:"Inline",description:"Loaders can appear inline with content",code:e.inlineCode},{default:i(()=>[t(g,{inline:"",active:""})]),_:1},8,["code"]),t(B,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:e.inlineCenterCode},{default:i(()=>[t(g,{inline:"centered",active:""})]),_:1},8,["code"]),t(B,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:e.speedCode},{default:i(()=>[w("div",null,[t(g,{slow:"",active:"",inline:""}),t(g,{active:"",inline:""}),t(g,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),t(B,{title:"Colors",description:"Loaders can be different colors",code:e.colorsCode},{default:i(()=>[w("div",null,[t(g,{color:"primary",inline:"",active:""}),t(g,{color:"secondary",inline:"",active:""}),t(g,{color:"red",inline:"",active:""}),t(g,{color:"orange",inline:"",active:""}),t(g,{color:"yellow",inline:"",active:""}),t(g,{color:"olive",inline:"",active:""}),t(g,{color:"green",inline:"",active:""}),t(g,{color:"teal",inline:"",active:""}),t(g,{color:"blue",inline:"",active:""}),t(g,{color:"violet",inline:"",active:""}),t(g,{color:"purple",inline:"",active:""}),t(g,{color:"pink",inline:"",active:""}),t(g,{color:"brown",inline:"",active:""}),t(g,{color:"grey",inline:"",active:""}),t(g,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),t(B,{title:"Size",description:"Loaders can have different sizes",code:e.sizeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,{size:"mini"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"]),t(B,{title:"Inverted",description:"Loaders can have their colors inverted",code:e.invertedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:"",inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:qe})]),_:1})]),_:1},8,["code"])]),_:1})])}const N0=Ce(M0,[["render",F0]]),H0=z({name:"RailDoc",components:{DocExample:ze},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),L0={class:"intro"};function O0(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("sui-rail"),A=b("sui-grid-column"),B=b("sui-grid"),_=b("doc-example");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",L0,[t(p,{as:"h1"},{default:i(()=>[l("Rail "),t(m,null,{default:i(()=>[l(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(y,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(g,{src:qe}),t(y,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l("Left Rail Content")]),_:1})]),_:1}),t(y,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(y,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(y,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(y,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:qe}),t(y,{size:"small",position:"left"},{default:i(()=>[l(" Left Small Rail ")]),_:1}),t(y,{size:"large",position:"right"},{default:i(()=>[l(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const j0=Ce(H0,[["render",O0]]),q0="/vue-fomantic-ui/images/avatar/large/ade.jpg",Cd="/vue-fomantic-ui/images/avatar/large/chris.jpg",Es="/vue-fomantic-ui/images/avatar/large/stevie.jpg",wd="/vue-fomantic-ui/images/avatar/large/nan.jpg",G0=z({name:"RevealDoc",components:{DocExample:ze},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),U0={class:"intro"};function Y0(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("sui-reveal-content"),A=b("sui-reveal"),B=b("doc-example");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",U0,[t(p,{as:"h1"},{default:i(()=>[l("Reveal "),t(m,null,{default:i(()=>[l(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(B,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(A,{animated:"fade"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:q0})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(A,{animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Cd})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(A,{animated:"rotate"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{circular:"",size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{circular:"",size:"small",src:Es})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(B,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(A,{active:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:wd})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(A,{disabled:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:wd})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(B,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(A,{instant:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Cd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const J0=Ce(G0,[["render",Y0]]),W0=z({name:"SegmentDoc",components:{DocExample:ze},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),K0={class:"intro"},X0=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Q0=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),Z0=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),ek=w("p",null,"Top",-1),tk=w("p",null,"Middle",-1),ik=w("p",null,"Middle",-1),ak=w("p",null,"Middle",-1),lk=w("p",null,"Bottom",-1),nk=w("p",null,"I'm here to tell you something, and you will probably read me first.",-1),sk=w("p",null,"This segment is on top",-1),ok=w("p",null,"This segment is attached on both sides",-1),rk=w("p",null,"This segment is on bottom",-1),uk=w("p",null,"Fitted Segment",-1),dk=w("p",null,"Horizontally fitted segment",-1),ck=w("p",null,"Vertically fitted segment",-1),mk=w("p",null,"I'm here to tell you something, and you will probably read me first.",-1),pk=w("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),fk=w("p",null,"If you notice me you must be looking very hard.",-1),gk=w("p",null,"This segment will appear to the right",-1),hk=w("p",null,"This segment will appear to the left",-1),_k=w("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function bk(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),y=b("sui-button"),A=b("sui-segment-group");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",K0,[t(p,{as:"h1"},{default:i(()=>[l("Segment "),t(m,null,{default:i(()=>[l(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[l("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(g,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),l(" No documents are listed for this customer. ")]),_:1}),t(y,{color:"primary"},{default:i(()=>[l("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[X0]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[Q0]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[Z0]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[w("div",null,[t(v,{vertical:""},{default:i(()=>[l(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(g,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[ek]),_:1}),t(v,null,{default:i(()=>[tk]),_:1}),t(v,null,{default:i(()=>[ik]),_:1}),t(v,null,{default:i(()=>[ak]),_:1}),t(v,null,{default:i(()=>[lk]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Nested Top")]),_:1}),t(v,null,{default:i(()=>[l("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[l("Nested Bottom")]),_:1})]),_:1}),t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Left")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(A,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(A,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(A,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[l("Disabled content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[l("Now Loading...")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[nk]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[w("div",null,[t(v,{attached:"top"},{default:i(()=>[sk]),_:1}),t(v,{attached:""},{default:i(()=>[ok]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[rk]),_:1})])]),_:1},8,["code"]),t(g,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[l("Padded content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[w("div",null,[t(v,{fitted:""},{default:i(()=>[uk]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[dk]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[ck]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[l("Compact content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[w("div",null,[t(v,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[w("div",null,[t(v,null,{default:i(()=>[mk]),_:1}),t(v,{secondary:""},{default:i(()=>[pk]),_:1}),t(v,{tertiary:""},{default:i(()=>[fk]),_:1})])]),_:1},8,["code"]),t(g,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[w("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(y,{floated:"right"},{default:i(()=>[l("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[w("div",null,[t(v,{floated:"right"},{default:i(()=>[gk]),_:1}),t(v,{floated:"left"},{default:i(()=>[hk]),_:1})])]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[w("div",null,[t(v,{textAlign:"right"},{default:i(()=>[l(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[l(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[l(" Center ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[_k]),_:1})]),_:1},8,["code"])]),_:1})])}const vk=Ce(W0,[["render",bk]]),yk=z({name:"StepDoc",components:{DocExample:ze},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),Ck={class:"intro"},wk=w("p",null,"The steps take up the entire column width",-1),Sk=w("p",null,"Main content",-1);function Ak(e,a,n,s,r,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),u=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-step"),y=b("sui-step-group"),A=b("doc-example"),B=b("sui-step-title"),_=b("sui-step-description"),S=b("sui-step-content"),$=b("sui-grid-column"),x=b("sui-grid");return R(),fe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[w("div",Ck,[t(p,{as:"h1"},{default:i(()=>[l("Step "),t(m,null,{default:i(()=>[l(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[l("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(A,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(y,{ordered:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(y,{vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(A,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{disabled:""},{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(y,{stackable:"tablet"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"plane"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(y,{unstackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"plane"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(x,{columns:2},{default:i(()=>[t($,null,{default:i(()=>[t(y,{fluid:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[wk]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[w("div",null,[t(y,{attached:"top"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[Sk]),_:1}),t(y,{attached:"bottom"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(y,{widths:2},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(y,{size:"mini"},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(y,{inverted:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(u,{name:"info"}),t(S,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const kk=Ce(yk,[["render",Ak]]),$k=z({name:"BreadcrumbDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function Bk(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-breadcrumb-section"),u=b("sui-breadcrumb-divider"),f=b("sui-breadcrumb"),c=b("doc-example"),h=b("sui-segment"),v=b("sui-container");return R(),fe("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{link:""},{default:i(()=>[l("Store")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(f,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right arrow"}),t(o,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(c,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Product")]),_:1}),t(u,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(o,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(f,{size:"mini"},{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(u,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(u,{icon:"right chevron"}),t(o,null,{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const xk=Ce($k,[["render",Bk]]),Tk=z({name:"FormDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function Ek(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-form-field"),u=b("sui-checkbox"),f=b("sui-button"),c=b("sui-form"),h=b("doc-example"),v=b("sui-form-group"),g=b("sui-container");return R(),fe("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(g,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{label:"First Name",placeholder:"First Name"}),t(o,{label:"Last Name",placeholder:"Last Name"}),t(o,null,{default:i(()=>[t(u,{label:"I agree to the Terms and Conditions"})]),_:1}),t(f,null,{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(c,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{label:"First name",placeholder:"First Name"}),t(o,{label:"Middle name",placeholder:"Middle Name"}),t(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Rk=Ce(Tk,[["render",Ek]]),Gt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Sd="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",zk=z({name:"GridDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),Dk=w("br",null,null,-1);function Ik(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),u=b("sui-grid-column"),f=b("sui-grid"),c=b("doc-example"),h=b("sui-grid-row"),v=b("sui-segment"),g=b("sui-divider"),y=b("sui-menu-item"),A=b("sui-menu"),B=b("sui-container");return R(),fe("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(c,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(f,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.numbers,_=>(R(),N(u,{key:_},{default:i(()=>[t(o,{src:te})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(c,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Gt})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Gt})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Gt})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Gt})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Gt})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Gt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(f,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(f,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:13},{default:i(()=>[t(o,{src:Sd})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:10},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(f,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:13},{default:i(()=>[t(o,{src:Sd})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:10},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{width:3},{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(f,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{width:8},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{width:8},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{width:8},{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(o,{src:te})]),_:1}),t(u,{width:9},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{width:3},{default:i(()=>[t(o,{src:Gt})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(f,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1}),t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[w("div",null,[t(g),t(f,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})])]),_:1},8,["code"]),t(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(f,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(f,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(f,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(f,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[l("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[l("Dogs")]),_:1}),t(y,null,{default:i(()=>[l("Poodle")]),_:1}),t(y,null,{default:i(()=>[l("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[l("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(f,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te}),Dk,t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Responsive Variations")]),_:1}),t(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(f,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(u,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(f,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(f,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Se})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Pk=Ce(zk,[["render",Ik]]),Mk="/vue-fomantic-ui/images/logo.png",Vk=z({name:"MenuDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),Fk=w("p",null,"Check out our new promotions",-1),Nk=w("p",null,"Check out our collection of coupons",-1),Hk=w("p",null,"Visit our rebate forum for information on claiming rebates",-1),Lk=w("img",{src:Mk},null,-1);function Ok(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-menu-item"),u=b("sui-menu"),f=b("doc-example"),c=b("sui-input"),h=b("sui-menu-menu"),v=b("sui-label"),g=b("sui-button"),y=b("sui-dropdown-item"),A=b("sui-dropdown-menu"),B=b("sui-dropdown"),_=b("sui-icon"),S=b("sui-segment"),$=b("sui-container");return R(),fe("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Editorials")]),_:1}),t(o,null,{default:i(()=>[l("Reviews")]),_:1}),t(o,null,{default:i(()=>[l("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(o,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(c,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,null,{default:i(()=>[l("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(o,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Bio")]),_:1}),t(o,null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(o,{header:""},{default:i(()=>[l("Sort By")]),_:1}),t(o,{active:""},{default:i(()=>[l("Closest")]),_:1}),t(o,null,{default:i(()=>[l("Most Comments")]),_:1}),t(o,null,{default:i(()=>[l("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,{active:"",color:"teal"},{default:i(()=>[l(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[l("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[l(" Spam "),t(v,null,{default:i(()=>[l("51")]),_:1})]),_:1}),t(o,null,{default:i(()=>[l(" Updates "),t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("1")]),_:1}),t(o,{disabled:""},{default:i(()=>[l("...")]),_:1}),t(o,null,{default:i(()=>[l("10")]),_:1}),t(o,null,{default:i(()=>[l("11")]),_:1}),t(o,null,{default:i(()=>[l("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(f,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{header:""},{default:i(()=>[l("Our Company")]),_:1}),t(o,null,{default:i(()=>[l("About us")]),_:1}),t(o,null,{default:i(()=>[l("Jobs")]),_:1}),t(o,null,{default:i(()=>[l("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Promotions")]),_:1}),Fk]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Coupons")]),_:1}),Nk]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Rebates")]),_:1}),Hk]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(c,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,{position:"right",as:"div"},{default:i(()=>[t(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,null,{default:i(()=>[l("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,{href:"https://google.com"},{default:i(()=>[l("Visit Google")]),_:1}),t(o,{link:"",as:"div"},{default:i(()=>[l("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(B,{item:"",text:"Categories"},{default:i(()=>[t(A,null,{default:i(()=>[t(y,{text:"Electoronics"}),t(y,{text:"Automotive"}),t(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Browse")]),_:1}),t(o,null,{default:i(()=>[l("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[l("Sign up")]),_:1}),t(o,null,{default:i(()=>[l("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(c,{placeholder:"Search..."})]),_:1}),t(o,{as:"div"},{default:i(()=>[l(" Home "),t(h,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Search")]),_:1}),t(o,null,{default:i(()=>[l("Add")]),_:1}),t(o,null,{default:i(()=>[l("Remove")]),_:1})]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"grid layout"}),l(" Browse ")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(B,{item:"",text:"More"},{default:i(()=>[t(A,null,{default:i(()=>[t(y,{icon:"edit",text:"Edit Profile"}),t(y,{icon:"globe",text:"Choose Language"}),t(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[l("A link")]),_:1}),t(o,{as:"div",link:""},{default:i(()=>[l("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[Lk]),_:1}),t(o,null,{default:i(()=>[l("Features")]),_:1}),t(o,null,{default:i(()=>[l("Testimonials")]),_:1}),t(o,null,{default:i(()=>[l("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(o,null,{default:i(()=>[l("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{active:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(o,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(o,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(o,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(o,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(o,{color:"teal"},{default:i(()=>[l("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),l(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),l(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[l("Run")]),_:1}),t(o,null,{default:i(()=>[l("Walk")]),_:1}),t(o,null,{default:i(()=>[l("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),l(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),l(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(o,null,{default:i(()=>[l("Buy")]),_:1}),t(o,null,{default:i(()=>[l("Sell")]),_:1}),t(o,null,{default:i(()=>[l("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[w("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("tab1")]),_:1}),t(o,null,{default:i(()=>[l("tab2")]),_:1})]),_:1}),t(S,{attached:"bottom"},{default:i(()=>[l(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(B,{item:"",text:"Language"},{default:i(()=>[t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[l("English")]),_:1}),t(y,null,{default:i(()=>[l("Russian")]),_:1}),t(y,null,{default:i(()=>[l("Spanish")]),_:1})]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{fitted:""},{default:i(()=>[l("No padding whatsoever")]),_:1}),t(o,{fitted:"horizontally"},{default:i(()=>[l("No horizontal padding")]),_:1}),t(o,{fitted:"vertically"},{default:i(()=>[l("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(o,null,{default:i(()=>[l("1")]),_:1}),t(o,null,{default:i(()=>[l("2")]),_:1}),t(o,null,{default:i(()=>[l("3")]),_:1}),t(o,null,{default:i(()=>[l("4")]),_:1}),t(o,null,{default:i(()=>[l("5")]),_:1}),t(o,null,{default:i(()=>[l("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const jk=Ce(Vk,[["render",Ok]]),qk=z({name:"MessageDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),Gk=w("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),Uk=w("p",null,"Get the best news in your e-mail every day.",-1),Yk=w("p",null,"You can't see me",-1),Jk=w("p",null,"You can always see me",-1),Wk=w("p",null,"Way to go!",-1),Kk=w("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),Xk=w("a",{href:"#"},"Login here",-1),Qk=w("p",null,[l("Go to your "),w("b",null,"special offers"),l(" page to see now.")],-1),Zk=w("p",null,"That offer has expired",-1);function e$(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-message-header"),u=b("sui-message"),f=b("doc-example"),c=b("sui-message-item"),h=b("sui-message-list"),v=b("sui-icon"),g=b("sui-message-content"),y=b("sui-form-field"),A=b("sui-form-group"),B=b("sui-button"),_=b("sui-form"),S=b("sui-container");return R(),fe("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(S,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Changes in Service")]),_:1}),Gk]),_:1})]),_:1},8,["code"]),t(f,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("You can now have cover images on blog pages")]),_:1}),t(c,null,{default:i(()=>[l("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[l(" Have you heard about our mailing list? ")]),_:1}),Uk]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[Yk]),_:1})]),_:1},8,["code"]),t(f,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[Jk]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[Wk]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[Kk]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[w("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t(A,{widths:"equal"},{default:i(()=>[t(y,{label:"First Name",placeholder:"First Name"}),t(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(y,{label:"Username",placeholder:"Username"}),t(y,{label:"Password",placeholder:"Password"}),t(B,{color:"primary"},{default:i(()=>[l("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),l(" Already signed up? "),Xk,l(" instead. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[l(" You must register before you can do that! ")]),_:1}),l(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(f,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(o,null,{default:i(()=>[l("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[l("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[l("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(o,null,{default:i(()=>[l("You are eligible for a reward")]),_:1}),Qk]),_:1})]),_:1},8,["code"]),t(f,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[l("We're sorry we can't apply that discount")]),_:1}),Zk]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[w("div",null,[t(u,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[w("div",null,[t(u,{size:"mini"},{default:i(()=>[l("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[l("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[l("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const t$=Ce(qk,[["render",e$]]),i$=z({name:"TableDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),a$=w("a",{href:"#"},"Edit",-1),l$=w("a",{href:"#"},"Edit",-1),n$=w("a",{href:"#"},"Edit",-1),s$=w("br",null,null,-1),o$=w("br",null,null,-1),r$=w("br",null,null,-1),u$=w("br",null,null,-1),d$=w("br",null,null,-1),c$=w("br",null,null,-1),m$=w("br",null,null,-1);function p$(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-table-header-cell"),u=b("sui-table-row"),f=b("sui-table-header"),c=b("sui-table-cell"),h=b("sui-table-body"),v=b("sui-table"),g=b("doc-example"),y=b("sui-icon"),A=b("sui-table-footer"),B=b("sui-container");return R(),fe("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Age")]),_:1}),t(o,null,{default:i(()=>[l("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("James")]),_:1}),t(c,null,{default:i(()=>[l("24")]),_:1}),t(c,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("26")]),_:1}),t(c,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Elyse")]),_:1}),t(c,null,{default:i(()=>[l("24")]),_:1}),t(c,null,{default:i(()=>[l("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o),t(o,null,{default:i(()=>[l("Arguments")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("reset rating")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1}),t(c,null,{default:i(()=>[l("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("set rating")]),_:1}),t(c,null,{default:i(()=>[l("rating (integer)")]),_:1}),t(c,null,{default:i(()=>[l("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{rowspan:"2"},{default:i(()=>[l("Name")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[l("Type")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[l("Files")]),_:1}),t(o,{colspan:"3"},{default:i(()=>[l("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Ruby")]),_:1}),t(o,null,{default:i(()=>[l("Javascript")]),_:1}),t(o,null,{default:i(()=>[l("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Alpha Team")]),_:1}),t(c,null,{default:i(()=>[l("Project 1")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("2")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1}),t(u,null,{default:i(()=>[t(c,{rowspan:"3"},{default:i(()=>[l("Beta Team")]),_:1}),t(c,null,{default:i(()=>[l("Project 1")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("52")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Project 2")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("12")]),_:1}),t(c),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c)]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Project 3")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("21")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{negative:""},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"checkmark"}),l(" Approved ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{positive:""},{default:i(()=>[t(y,{name:"close"}),l(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Cannot pull data")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{error:""},{default:i(()=>[t(y,{name:"attention"}),l(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"attention"}),l(" Requires Action ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{warning:""},{default:i(()=>[t(y,{name:"attention"}),l(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Selected")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,{active:""},{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Selected")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,{color:"orange"},{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"microphone"}),l(" Recording session ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{color:"pink"},{default:i(()=>[t(y,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{color:"green"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,{marked:"right",color:"blue"},{default:i(()=>[l("No Name Specified")]),_:1}),t(c,{marked:"left",color:"red"},{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,{marked:"left",color:"green"},{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"microphone"}),l(" Recording session ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{marked:"left",color:"orange"},{default:i(()=>[t(y,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{marked:"right",color:"purple"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Registration Date")]),_:1}),t(o,null,{default:i(()=>[l("E-mail address")]),_:1}),t(o,null,{default:i(()=>[l("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John Lilki")]),_:1}),t(c,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(c,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(c,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(c,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(c,{selectable:""},{default:i(()=>[a$]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{selectable:""},{default:i(()=>[l$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(c,{selectable:""},{default:i(()=>[n$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{verticalAlign:"top"},{default:i(()=>[l(" Notes "),s$,l(" 1"),o$,l(" 2"),r$]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,{verticalAlign:"bottom"},{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l(" Notes "),u$,l(" 1"),d$,l(" 2"),c$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Date Joined")]),_:1}),t(o,null,{default:i(()=>[l("E-mail")]),_:1}),t(o,null,{default:i(()=>[l("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John Lilki")]),_:1}),t(c,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(c,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(c,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(c,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("3 People")]),_:1}),t(c,null,{default:i(()=>[l("2 Approved")]),_:1}),t(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[w("div",null,[t(v,{basic:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1}),m$,t(v,{basic:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Age")]),_:1}),t(o,null,{default:i(()=>[l("Gender")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("27")]),_:1}),t(c,null,{default:i(()=>[l("Male")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("32")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("22")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("3 People")]),_:1}),t(o,null,{default:i(()=>[l("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),l(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[l("Initial commit")]),_:1}),t(c,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),l(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[l("Initial commit")]),_:1}),t(c,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),l(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[l("Initial commit")]),_:1}),t(c,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Age")]),_:1}),t(o,null,{default:i(()=>[l("Gender")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("27")]),_:1}),t(c,null,{default:i(()=>[l("Male")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("32")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("22")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("3 People")]),_:1}),t(o,null,{default:i(()=>[l("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,{width:10},{default:i(()=>[l("Name")]),_:1}),t(o,{width:6},{default:i(()=>[l("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Food")]),_:1}),t(o,null,{default:i(()=>[l("Calories")]),_:1}),t(o,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Apples")]),_:1}),t(c,null,{default:i(()=>[l("200")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Orange")]),_:1}),t(c,null,{default:i(()=>[l("310")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Food")]),_:1}),t(o,null,{default:i(()=>[l("Calories")]),_:1}),t(o,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Apples")]),_:1}),t(c,null,{default:i(()=>[l("200")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Orange")]),_:1}),t(c,null,{default:i(()=>[l("310")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[w("div",null,[t(v,{padded:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[w("div",null,[t(v,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(f,null,{default:i(()=>[t(u,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const f$=Ce(i$,[["render",p$]]),g$=z({name:"AdvertisementDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),h$=w("img",{src:te},null,-1),_$=w("br",null,null,-1);function b$(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-advertisement"),u=b("doc-example"),f=b("sui-container");return R(),fe("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(o,{unit:"medium rectangle"},{default:i(()=>[h$]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[w("div",null,[t(o,{unit:"medium rectangle",test:"Medium Rectangle"}),t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large rectangle",test:"Large Rectangle"}),t(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[w("div",null,[t(o,{unit:"mobile banner",test:"Mobile Banner"}),t(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[w("div",null,[t(o,{unit:"button",test:"Button"}),t(o,{unit:"square button",test:"Square Button"}),t(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[w("div",null,[t(o,{unit:"skyscraper",test:"Skyscraper"}),_$,t(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[w("div",null,[t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"vertical banner",test:"Vertical Banner"}),t(o,{unit:"top banner",test:"Top Banner"}),t(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[w("div",null,[t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large leaderboard",test:"Large Leaderboard"}),t(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const v$=Ce(g$,[["render",b$]]),Ad="/vue-fomantic-ui/images/avatar/large/kristy.png",y$="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Nn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Hn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Ln="/vue-fomantic-ui/images/avatar/large/elyse.png",C$="/vue-fomantic-ui/images/avatar/large/matthew.png",w$="/vue-fomantic-ui/images/avatar/large/molly.png",kd="/vue-fomantic-ui/images/avatar/large/jenny.jpg",$d="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Bd="/vue-fomantic-ui/images/avatar/large/steve.jpg",S$=z({name:"CardDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),A$=w("span",{class:"date"},"Joined in 2013",-1),k$=w("a",null,"Elliot Fu",-1),$$=w("a",null,"Jenny Hess",-1),B$=w("a",null,"Stevie Feliciano",-1),x$=w("a",null,"Administrator",-1),T$=w("a",null,"Helen Troy",-1),E$=w("span",{class:"date"},"Joined in 2013",-1),R$=w("span",null,"2 days ago",-1),z$=w("a",null,"Animals",-1),D$=w("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),I$=w("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),P$=w("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),M$=w("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),V$=w("span",{class:"category"},"Animals",-1),F$=w("span",{class:"category"},"Animals",-1),N$=w("div",{class:"right floated author"},[w("img",{class:"ui avatar image",src:gn}),l(" Matt ")],-1),H$=w("span",{class:"category"},"Animals",-1),L$=w("div",{class:"right floated author"},[w("img",{class:"ui avatar image",src:gn}),l(" Matt ")],-1),O$=w("p",null,"Jenny is a student studying Media Management at the New School",-1),j$=w("div",{class:"center aligned author"},[w("img",{class:"ui avatar image",src:fn}),l(" Jenny ")],-1),q$=w("a",null,"Friends",-1),G$=w("span",{class:"right floated"}," Joined in 2013 ",-1),U$=w("a",null,[w("i",{class:"user icon"}),l(" 75 Friends ")],-1),Y$=w("a",null,"Coworker",-1),J$=w("span",{class:"right floated"}," Joined in 2011 ",-1),W$=w("a",null,[w("i",{class:"user icon"}),l(" 35 Friends ")],-1),K$=w("a",null,"Coworker",-1),X$=w("span",{class:"right floated"}," Joined in 2014 ",-1),Q$=w("a",null,[w("i",{class:"user icon"}),l(" 151 Friends ")],-1);function Z$(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),u=b("sui-card-header"),f=b("sui-card-meta"),c=b("sui-card-description"),h=b("sui-card-content"),v=b("sui-icon"),g=b("sui-card"),y=b("doc-example"),A=b("sui-button"),B=b("sui-button-group"),_=b("sui-card-group"),S=b("sui-feed-summary"),$=b("sui-feed-content"),x=b("sui-feed-event"),E=b("sui-feed"),M=b("sui-grid-column"),V=b("sui-grid"),I=b("sui-segment"),L=b("sui-container");return R(),fe("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(L,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ad,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[A$]),_:1}),t(c,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[w("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:Lt,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friends of Veronika")]),_:1}),t(c,null,{default:i(()=>[l("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:fn,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("New Member")]),_:1}),t(c,null,{default:i(()=>[l("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(y,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(p,{sub:""},{default:i(()=>[l("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(x,null,{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[k$,l(" added "),$$,l(" to the project ")]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[B$,l(" was added as an "),x$]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[T$,l(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(A,{as:"button"},{default:i(()=>[l("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ad,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[E$]),_:1}),t(c,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[w("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(c,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(c,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(c,null,{default:i(()=>[l(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[R$,z$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(c,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(c,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[D$,I$]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[P$,M$]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(V,{columns:3},{default:i(()=>[t(M,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:y$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Nn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Hn}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(g,{centered:""},{default:i(()=>[t(o,{src:Ln}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[t(o,{src:Ln}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[V$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(g,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[F$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[N$]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(g,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[H$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Se})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[L$]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[O$]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[j$]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(I,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:C$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Matt Giampietro")]),_:1}),t(f,null,{default:i(()=>[q$]),_:1}),t(c,null,{default:i(()=>[l(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[G$,U$]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:w$}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Molly")]),_:1}),t(f,null,{default:i(()=>[Y$]),_:1}),t(c,null,{default:i(()=>[l(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[J$,W$]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ln}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elyse")]),_:1}),t(f,null,{default:i(()=>[K$]),_:1}),t(c,null,{default:i(()=>[l(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[X$,Q$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,{color:"primary",href:"#"},{default:i(()=>[t(o,{src:xa})]),_:1}),t(g,{color:"secondary",href:"#"},{default:i(()=>[t(o,{src:xa})]),_:1}),t(g,{color:"red",href:"#"},{default:i(()=>[t(o,{src:xa})]),_:1}),t(g,{color:"orange",href:"#"},{default:i(()=>[t(o,{src:xa})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:te})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:te})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Hn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Nn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:kd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:$d})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Es})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bd})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Hn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Nn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:kd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:$d})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Es})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const eB=Ce(S$,[["render",Z$]]),tB=z({name:"CommentDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),iB=w("span",null,"Today at 5:42PM",-1),aB=w("a",null,"Reply",-1),lB=w("span",null,"Yesterday at 12:30AM",-1),nB=w("a",null,"Reply",-1),sB={class:"comments"},oB=w("span",null,"Just now",-1),rB=w("a",null,"Reply",-1),uB=w("span",null,"5 days ago",-1),dB=w("a",null,"Reply",-1),cB=w("div",{class:"date"},"2 days ago",-1),mB=w("div",{class:"rating"},[w("i",{class:"star icon"}),l(" 5 Faves ")],-1),pB=w("a",null,"Reply",-1),fB=w("a",null,"Save",-1),gB=w("a",null,"Hide",-1),hB=w("a",null,[w("i",{class:"expand icon"}),l(" Full-screen ")],-1),_B=w("a",null,"Reply",-1),bB=w("a",null,"Reply",-1),vB=w("a",null,"Replay",-1),yB=w("span",null,"Today at 5:42PM",-1),CB=w("a",{href:"#"},"Replay",-1),wB=w("span",null,"Yesterday at 12:30AM",-1),SB=w("a",{href:"#"},"Replay",-1),AB=w("span",null,"Just now",-1),kB=w("a",{href:"#"},"Replay",-1),$B=w("span",null,"5 days ago",-1),BB=w("a",{href:"#"},"Replay",-1),xB=w("span",null,"Today at 5:42PM",-1),TB=w("a",{href:"#"},"Replay",-1),EB=w("span",null,"Yesterday at 12:30AM",-1),RB=w("a",{href:"#"},"Replay",-1),zB=w("span",null,"Just now",-1),DB=w("a",{href:"#"},"Replay",-1),IB=w("span",null,"5 days ago",-1),PB=w("a",{href:"#"},"Replay",-1),MB=w("span",null,"Today at 5:42PM",-1),VB=w("a",{href:"#"},"Replay",-1),FB=w("span",null,"Yesterday at 12:30AM",-1),NB=w("a",{href:"#"},"Replay",-1),HB=w("span",null,"Just now",-1),LB=w("a",{href:"#"},"Replay",-1),OB=w("span",null,"5 days ago",-1),jB=w("a",{href:"#"},"Replay",-1),qB=w("span",null,"Today at 5:42PM",-1),GB=w("a",{href:"#"},"Replay",-1),UB=w("span",null,"Yesterday at 12:30AM",-1),YB=w("a",{href:"#"},"Replay",-1),JB=w("span",null,"Just now",-1),WB=w("a",{href:"#"},"Replay",-1),KB=w("span",null,"5 days ago",-1),XB=w("a",{href:"#"},"Replay",-1);function QB(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-comment-avatar"),u=b("sui-comment-author"),f=b("sui-comment-metadata"),c=b("sui-comment-text"),h=b("sui-comment-actions"),v=b("sui-comment-content"),g=b("sui-comment"),y=b("sui-comment-group"),A=b("doc-example"),B=b("sui-form-textarea"),_=b("sui-icon"),S=b("sui-button"),$=b("sui-form"),x=b("sui-segment"),E=b("sui-container");return R(),fe("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[iB]),_:1}),t(c,null,{default:i(()=>[l("How artistic!")]),_:1}),t(h,null,{default:i(()=>[aB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[lB]),_:1}),t(c,null,{default:i(()=>[l("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[nB]),_:1})]),_:1}),w("div",sB,[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[oB]),_:1}),t(c,null,{default:i(()=>[l("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[rB]),_:1})]),_:1})]),_:1})])]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[uB]),_:1}),t(c,null,{default:i(()=>[l("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[dB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(f,null,{default:i(()=>[cB,mB]),_:1}),t(c,null,{default:i(()=>[l(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Tom Lukic")]),_:1}),t(c,null,{default:i(()=>[l(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[pB,fB,gB,hB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Steve Jobs")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[l("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[_B]),_:1}),t($,{reply:""},{default:i(()=>[t(B),t(S,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),l(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Christian Rocha")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[l(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[bB]),_:1})]),_:1}),t(y,{collapsed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("1 days ago")]),_:1}),t(c,null,{default:i(()=>[l("No, it wont")]),_:1}),t(h,null,{default:i(()=>[vB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(y,{threaded:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[yB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[CB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[wB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[SB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[AB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[kB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[$B]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[BB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(y,{minimal:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[xB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[TB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[EB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[RB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[zB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[DB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[IB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[PB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(y,{size:"small"},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[MB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[VB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[FB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[NB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[HB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[LB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[OB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[jB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[qB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[GB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[UB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[YB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[JB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[WB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[KB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[XB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZB=Ce(tB,[["render",QB]]),ex=z({name:"FeedDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),tx=w("img",{src:Lt},null,-1),ix=w("img",{src:Lt},null,-1),ax=w("a",null,"Coworkers",-1),lx=w("img",{src:fn},null,-1),nx=w("a",null,"Jenny Hess",-1),sx=w("a",null,"coworker",-1),ox=w("img",{src:Ta},null,-1),rx=w("a",null,"Helen Troy",-1),ux=w("a",null,[w("img",{src:te})],-1),dx=w("a",null,[w("img",{src:te})],-1),cx=w("a",null,"Elliot Fu",-1),mx=w("a",null,"Jenny Hess",-1),px=w("a",null,"Stevie Feliciano",-1),fx=w("a",null,"Elliot Fu",-1),gx=w("a",null,"Helen Troy",-1),hx=w("a",null,"Christian Rocha",-1),_x=w("img",{src:Lt},null,-1),bx=w("div",{class:"date"},"Just now",-1),vx=w("a",{class:"user"},"Elliot Fu",-1);function yx(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-feed-label"),u=b("sui-feed-user"),f=b("sui-feed-date"),c=b("sui-feed-summary"),h=b("sui-icon"),v=b("sui-feed-like"),g=b("sui-feed-meta"),y=b("sui-feed-content"),A=b("sui-feed-event"),B=b("sui-feed"),_=b("doc-example"),S=b("sui-feed-extra"),$=b("sui-segment"),x=b("sui-container");return R(),fe("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[tx]),_:1}),t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Elliot Fu")]),_:1}),l(" added you as a friend "),t(f,null,{default:i(()=>[l("1 Hour Ago")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),l(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[ix]),_:1}),t(y,null,{default:i(()=>[l(" You added Elliot Fu to the group "),ax]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[lx]),_:1}),t(y,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(c,null,{default:i(()=>[l(" You added "),nx,l(" to your "),sx,l(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[ox]),_:1}),t(y,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(c,null,{default:i(()=>[rx,l(" added 2 photos ")]),_:1}),t(S,{images:""},{default:i(()=>[ux,dx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{size:"small"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Followers Activity")]),_:1}),t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[cx,l(" added "),mx,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[px,l(" added "),fx,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[gx,l(" added "),hx,l(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t($,{inverted:""},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[_x]),_:1}),t(y,null,{default:i(()=>[bx,t(c,null,{default:i(()=>[vx,l(" posted on his page ")]),_:1}),t(S,{text:""},{default:i(()=>[l(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Cx=Ce(ex,[["render",yx]]),wx=z({name:"ItemDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),Sx=w("img",{src:te},null,-1),Ax=w("span",null,"Description",-1),kx=w("img",{src:qe},null,-1),$x=w("img",{src:te},null,-1),Bx=w("span",null,"Description",-1),xx=w("img",{src:qe},null,-1),Tx=w("img",{src:te},null,-1),Ex=w("img",{src:te},null,-1),Rx=w("img",{src:te},null,-1),zx=w("img",{src:te},null,-1),Dx=w("img",{src:te},null,-1),Ix=w("img",{src:te},null,-1),Px=w("img",{src:te},null,-1),Mx=w("span",{class:"price"},"$1200",-1),Vx=w("span",{class:"stay"},"1 Month",-1),Fx=w("img",{src:qe},null,-1),Nx=w("span",{class:"price"},"$1000",-1),Hx=w("span",{class:"stay"},"2 Weeks",-1),Lx=w("img",{src:qe},null,-1),Ox=w("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),jx=w("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),qx=w("img",{src:qe},null,-1),Gx=w("img",{src:te},null,-1),Ux=w("span",{class:"cinema"},"Union Square 14",-1),Yx=w("img",{src:qe},null,-1),Jx=w("img",{src:te},null,-1),Wx=w("span",{class:"cinema"},"IFC Cinema",-1),Kx=w("img",{src:qe},null,-1),Xx=w("img",{src:te},null,-1),Qx=w("span",{class:"cinema"},"IFC",-1),Zx=w("img",{src:qe},null,-1),eT=w("img",{src:qe},null,-1),tT=w("img",{src:qe},null,-1),iT=w("img",{src:qe},null,-1),aT=w("span",{class:"price"},"$1200",-1),lT=w("span",{class:"stay"},"1 Month",-1),nT=w("img",{src:qe},null,-1),sT=w("span",{class:"price"},"$1000",-1),oT=w("span",{class:"stay"},"2 Weeks",-1),rT=w("img",{src:qe},null,-1);function uT(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-item-image"),u=b("sui-item-header"),f=b("sui-item-meta"),c=b("sui-item-description"),h=b("sui-item-extra"),v=b("sui-item-content"),g=b("sui-item"),y=b("sui-item-group"),A=b("doc-example"),B=b("sui-image"),_=b("sui-icon"),S=b("sui-label"),$=b("sui-button"),x=b("sui-segment"),E=b("sui-container");return R(),fe("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Sx]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[Ax]),_:1}),t(c,null,{default:i(()=>[kx]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[$x]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[Bx]),_:1}),t(c,null,{default:i(()=>[xx]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Tx]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Ex]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Rx]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[zx]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content A ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Dx]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content B ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Ix]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Px]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[Mx,Vx]),_:1}),t(c,null,{default:i(()=>[Fx]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[Nx,Hx]),_:1}),t(c,null,{default:i(()=>[Lx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(c,null,{default:i(()=>[Ox,jx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(c,null,{default:i(()=>[qx]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Gx]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("12 Years a Slave")]),_:1}),t(f,null,{default:i(()=>[Ux]),_:1}),t(c,null,{default:i(()=>[Yx]),_:1}),t(h,null,{default:i(()=>[t(S,null,{default:i(()=>[l("IMAX")]),_:1}),t(S,null,{default:i(()=>[t(_,{name:"globe"}),l(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Jx]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(f,null,{default:i(()=>[Wx]),_:1}),t(c,null,{default:i(()=>[Kx]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(S,null,{default:i(()=>[l("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Xx]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Watchmen")]),_:1}),t(f,null,{default:i(()=>[Qx]),_:1}),t(c,null,{default:i(()=>[Zx]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"tiny",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"tiny",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"tiny",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[l("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Top Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[l("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content A")]),_:1}),t(c,null,{default:i(()=>[eT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content B")]),_:1}),t(c,null,{default:i(()=>[tT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[l("Content C")]),_:1}),t(c,null,{default:i(()=>[iT]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[aT,lT]),_:1}),t(c,null,{default:i(()=>[nT]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:te}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[sT,oT]),_:1}),t(c,null,{default:i(()=>[rT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dT=Ce(wx,[["render",uT]]),cT=z({name:"StatisticDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),mT=w("br",null,null,-1),pT=w("br",null,null,-1),fT=w("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),gT=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),hT=w("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),_T=w("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function bT(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-statistic"),u=b("doc-example"),f=b("sui-statistic-group"),c=b("sui-statistic-value"),h=b("sui-statistic-label"),v=b("sui-icon"),g=b("sui-image"),y=b("sui-segment"),A=b("sui-container");return R(),fe("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,{value:"31,200",label:"Views"}),t(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(c,{text:""},{default:i(()=>[l(" Three"),mT,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(g,{circular:"",inline:"",src:Ts}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(f,{stackable:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(f,{widths:4},{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(c,{text:""},{default:i(()=>[l(" Three"),pT,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(g,{circular:"",inline:"",src:Ts}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(o,{floated:"right",value:"2,204",label:"Views"}),fT,gT,t(o,{floated:"left",value:"2,204",label:"Views"}),hT,_T]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",value:"2,204",label:"Views"}),t(o,{size:"tiny",value:"2,204",label:"Views"}),t(o,{size:"small",value:"2,204",label:"Views"}),t(o,{value:"2,204",label:"Views"}),t(o,{size:"large",value:"2,204",label:"Views"}),t(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const vT=Ce(cT,[["render",bT]]),yT=z({name:"AccordionDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),CT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),wT=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),ST=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),AT=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),kT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),$T=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),BT=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),xT=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),TT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),ET=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),RT=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),zT=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),DT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),IT=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),PT=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),MT=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),VT=w("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),FT=w("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),NT=w("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),HT=w("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function LT(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-accordion-tab"),u=b("sui-accordion"),f=b("doc-example"),c=b("sui-segment"),h=b("sui-container");return R(),fe("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[CT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[wT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[ST,AT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[kT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[$T]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[BT,xT]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[TT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[ET]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[RT,zT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[DT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[IT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[PT,MT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Usage")]),_:1}),t(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[VT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[FT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[NT,HT]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const OT=Ce(yT,[["render",LT]]),jT=z({name:"CalendarDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{calendar1:j(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function qT(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-calendar"),u=b("doc-example"),f=b("sui-container");return R(),fe("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(o,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=c=>e.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const GT=Ce(jT,[["render",qT]]),UT=z({name:"PropertyListTable",props:{properties:Array}});function YT(e,a,n,s,r,d){const m=b("sui-table-header-cell"),p=b("sui-table-row"),o=b("sui-table-header"),u=b("sui-table-cell"),f=b("sui-table-body"),c=b("sui-table");return R(),N(c,{celled:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Type")]),_:1}),t(m,null,{default:i(()=>[l("Default")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(f,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.properties,h=>(R(),N(p,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[l(xe(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[l(xe(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[l(xe(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[l(xe(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const hn=Ce(UT,[["render",YT]]),JT=z({name:"CheckboxDoc",components:{DocPageHeader:Ge,DocExample:ze,PropertyListTable:hn},setup(){const e=j(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=j([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=j(!1),d='<sui-checkbox toggle v-model="toggle" />',m=j(!1);return{checked:e,checkboxCode:a,selected:n,multipleCode:s,toggle:r,toggleCode:d,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),WT={class:"ui form"},KT={class:"grouped fields"},XT={class:"field"},QT={class:"field"},ZT={class:"field"};function e2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-checkbox"),u=b("doc-example"),f=b("property-list-table"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),A=b("sui-table"),B=b("sui-container");return R(),fe("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(o,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[w("div",WT,[w("div",KT,[w("div",XT,[t(o,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),w("div",QT,[t(o,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),w("div",ZT,[t(o,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),l(" selected : "+xe(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(o,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(o,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.events,_=>(R(),N(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(xe(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(xe(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const t2=Ce(JT,[["render",e2]]),i2=z({name:"DimmerDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=j(!1);return{dimmerCode:e,contentDimmerCode:a,active:n,pageDimmerCode:`<div>
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
</div>`}}});function a2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),u=b("sui-image-group"),f=b("sui-dimmer"),c=b("sui-dimmer-dimmable"),h=b("doc-example"),v=b("sui-icon"),g=b("sui-button"),y=b("sui-header-subheader"),A=b("sui-container");return R(),fe("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(o,{src:te}),t(o,{src:te}),t(o,{src:te})]),_:1}),t(o,{size:"medium",src:Gt}),t(f,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(o,{src:te}),t(o,{src:te}),t(o,{src:te})]),_:1}),t(o,{size:"medium",src:Gt}),t(f,{active:""},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[w("div",null,[t(g,{labeled:"",icon:"",onClick:a[0]||(a[0]=B=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),l(" Show ")]),_:1}),t(f,{active:e.active,page:"",onClick:a[1]||(a[1]=B=>e.active=!1)},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! "),t(y,null,{default:i(()=>[l("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const l2=Ce(i2,[["render",a2]]),n2=z({name:"DropdownDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,a=j(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,s=j(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],d=`<sui-dropdown
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
/>`,c=j(null),h=`<sui-dropdown
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
/>`,y=j(null),A=`<sui-dropdown
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
/>`,B=j({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:n,selected2:s,searchSelectionOptions:r,searchSelectionCode:d,selected3:m,clearableSelectionOptions:p,clearableSelectionCode:o,selected4:u,multipleCode:f,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:g,selected7:y,searchInMenuCode:A,selected8:B,inlineCode:`<span>
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
</sui-button-group>`}}});function s2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-dropdown-item"),u=b("sui-divider"),f=b("sui-dropdown-menu"),c=b("sui-dropdown"),h=b("doc-example"),v=b("sui-button"),g=b("sui-button-group"),y=b("sui-container");return R(),fe("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(y,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(c,{text:"File"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Open...",description:"ctrl + o"}),t(o,{text:"Save as...",description:"ctrl + s"}),t(o,{text:"Rename",description:"ctrl + r"}),t(o,{text:"Make a copy"}),t(o,{icon:"folder",text:"Move to folder"}),t(o,{icon:"trash",text:"Move to trash"}),t(u),t(o,{text:"Download As..."}),t(o,{text:"Publish To Web"}),t(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(c,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=A=>e.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(c,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=A=>e.selected2=A),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(c,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=A=>e.selected3=A),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(c,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=A=>e.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=A=>e.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=A=>e.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=A=>e.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[w("span",null,[l(" Show me posts by "),t(c,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=A=>e.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Save As"}),t(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(g,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[l("Save")]),_:1}),t(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"Edit Post",icon:"edit"}),t(o,{text:"Remove Post",icon:"delete"}),t(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const o2=Ce(n2,[["render",s2]]),r2=z({name:"EmbedDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function u2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-embed"),u=b("doc-example"),f=b("sui-container");return R(),fe("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const d2=Ce(r2,[["render",u2]]),c2="/vue-fomantic-ui/images/avatar/large/rachel.png",m2=z({name:"ModalDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){const e=`<div>
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
</div>`,a=j(!1),n=j(!1);return{modalCode:e,modal1:a,basicModal:n,basicCode:`<div>
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
</div>`}}}),p2=w("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),f2=w("p",null,"Is it okay to use this photo?",-1),g2=w("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function h2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-button"),u=b("sui-modal-header"),f=b("sui-image"),c=b("sui-modal-description"),h=b("sui-modal-content"),v=b("sui-modal-actions"),g=b("sui-modal"),y=b("doc-example"),A=b("sui-icon"),B=b("sui-container");return R(),fe("div",null,[t(m,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Modal",description:"A standard modal",code:e.modalCode},{default:i(()=>[w("div",null,[t(o,{onClick:a[0]||(a[0]=_=>e.modal1=!0)},{default:i(()=>[l("Show Modal")]),_:1}),t(g,{modelValue:e.modal1,"onUpdate:modelValue":a[2]||(a[2]=_=>e.modal1=_)},{default:i(()=>[t(u,null,{default:i(()=>[l("Select a Photo")]),_:1}),t(h,{image:""},{default:i(()=>[t(f,{wrapped:"",size:"medium",src:c2}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[l("Default Profile Image")]),_:1}),p2,f2]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(o,{positive:"",onClick:a[1]||(a[1]=_=>e.modal1=!1)},{default:i(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t(y,{title:"Basic",description:"A modal can reduce its complexity",code:e.basicCode},{default:i(()=>[w("div",null,[t(o,{onClick:a[3]||(a[3]=_=>e.basicModal=!0)},{default:i(()=>[l("Basic Modal")]),_:1}),t(g,{basic:"",modelValue:e.basicModal,"onUpdate:modelValue":a[5]||(a[5]=_=>e.basicModal=_)},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(A,{name:"archive"}),l(" Archive Old Messages ")]),_:1}),t(h,null,{default:i(()=>[g2]),_:1}),t(v,null,{default:i(()=>[t(o,{basic:"",color:"red",inverted:"",onClick:a[4]||(a[4]=_=>e.basicModal=!1)},{default:i(()=>[t(A,{name:"remove"}),l(" No ")]),_:1}),t(o,{basic:"",color:"green"},{default:i(()=>[t(A,{name:"checkmark"}),l(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const _2=Ce(m2,[["render",h2]]),b2="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",v2=z({name:"PopupDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){const e=j(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=j(null),s=j(null),r=j(null),d=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,f=j(null),c=j(null),h=j(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,g=j(null),y=j(null),A=j(null),B=j(null),_=j(null),S=j(null),$=j(null),x=j(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,M=j(null),V=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,I=j(null),L=j(null),W=j(null),q=j(null),ce=j(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,O=j(null),Y=j(null);return{popupTrigger:e,popupCode:a,titledTrigger1:n,titledTrigger2:s,titledTrigger3:r,titledCode:d,triggerTriger:m,triggerCode:p,basicTrigger:o,basicCode:u,wideTrigger1:f,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:g,positionTrigger2:y,positionTrigger3:A,positionTrigger4:B,positionTrigger5:_,positionTrigger6:S,positionTrigger7:$,positionTrigger8:x,positionCode:E,flowingTrigger:M,flowingCode:V,sizeTrigger1:I,sizeTrigger2:L,sizeTrigger3:W,sizeTrigger4:q,sizeTrigger5:ce,sizeCode:Be,invertedTrigger1:O,invertedTrigger2:Y,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),y2=w("p",null,[w("b",null,"2"),l(" projects, $10 a month ")],-1),C2=w("p",null,[w("b",null,"5"),l(" projects, $20 a month ")],-1),w2=w("p",null,[w("b",null,"8"),l(" projects, $25 a month ")],-1);function S2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),u=b("sui-button"),f=b("sui-popup"),c=b("doc-example"),h=b("sui-image"),v=b("sui-card-header"),g=b("sui-card-description"),y=b("sui-card-content"),A=b("sui-card"),B=b("sui-rating"),_=b("sui-divider"),S=b("sui-grid-column"),$=b("sui-grid"),x=b("sui-container");return R(),fe("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(c,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.popupTrigger},{default:i(()=>[l(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:Lt,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Ka,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:gn,ref:"titledTrigger3"},null,512),t(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(A,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:b2}),t(y,null,{default:i(()=>[t(v,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[l(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(f,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(B,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(c,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[l("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[l("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[l("Top Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger4"},{default:i(()=>[l("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[l("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[l("Bottom Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger7"},{default:i(()=>[l("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[l("Left Center")]),_:1},512),t(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[l("Show Flowing Popup")]),_:1},512),t(f,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t($,{centered:"",divided:"",columns:3},{default:i(()=>[t(S,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Basic Plan")]),_:1}),y2,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Business Plan")]),_:1}),C2,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Premium Plan")]),_:1}),w2,t(u,null,{default:i(()=>[l("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(f,{trigger:e.wideTrigger1},{default:i(()=>[l(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[l(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[l(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const A2=Ce(v2,[["render",S2]]),k2=z({name:"ProgressDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function $2(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-progress"),u=b("doc-example"),f=b("sui-segment"),c=b("sui-container");return R(),fe("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(c,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(o,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(o,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(o,{percent:25,disabled:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{percent:47,attached:"top"}),l(" La la la la "),t(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{percent:88,size:"tiny",label:"tiny"}),t(o,{percent:100,size:"small",label:"small",success:""}),t(o,{percent:83,label:"standard"}),t(o,{percent:73,size:"large",label:"large"}),t(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(o,{percent:32,color:"red"}),t(o,{percent:53,color:"orange"}),t(o,{percent:13,color:"yellow"}),t(o,{percent:37,color:"olive"}),t(o,{percent:83,color:"green"}),t(o,{percent:24,color:"teal"}),t(o,{percent:88,color:"blue"}),t(o,{percent:41,color:"violet"}),t(o,{percent:47,color:"purple"}),t(o,{percent:30,color:"pink"}),t(o,{percent:68,color:"brown"}),t(o,{percent:35,color:"grey"}),t(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const B2=Ce(k2,[["render",$2]]),x2=z({name:"RatingDoc",components:{DocPageHeader:Ge,DocExample:ze,PropertyListTable:hn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),T2=w("br",null,null,-1),E2=w("br",null,null,-1),R2=w("br",null,null,-1),z2=w("br",null,null,-1),D2=w("br",null,null,-1),I2=w("br",null,null,-1),P2=w("br",null,null,-1),M2=w("br",null,null,-1),V2=w("br",null,null,-1),F2=w("br",null,null,-1),N2=w("br",null,null,-1),H2=w("br",null,null,-1),L2=w("br",null,null,-1),O2=w("br",null,null,-1),j2=w("br",null,null,-1),q2=w("br",null,null,-1),G2=w("br",null,null,-1),U2=w("br",null,null,-1),Y2=w("br",null,null,-1),J2=w("br",null,null,-1),W2=w("br",null,null,-1),K2=w("br",null,null,-1),X2=w("br",null,null,-1),Q2=w("br",null,null,-1),Z2=w("br",null,null,-1),eE=w("br",null,null,-1),tE=w("br",null,null,-1),iE=w("br",null,null,-1),aE=w("br",null,null,-1),lE=w("br",null,null,-1),nE=w("br",null,null,-1),sE=w("br",null,null,-1),oE=w("br",null,null,-1),rE=w("br",null,null,-1),uE=w("br",null,null,-1),dE=w("br",null,null,-1),cE=w("br",null,null,-1),mE=w("br",null,null,-1),pE=w("br",null,null,-1),fE=w("br",null,null,-1),gE=w("br",null,null,-1),hE=w("br",null,null,-1),_E=w("br",null,null,-1),bE=w("br",null,null,-1),vE=w("br",null,null,-1),yE=w("br",null,null,-1),CE=w("br",null,null,-1),wE=w("br",null,null,-1);function SE(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-rating"),u=b("doc-example"),f=b("property-list-table"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),A=b("sui-table"),B=b("sui-container");return R(),fe("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(o)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(o,{defaultRating:2,maxRating:4,color:"yellow"}),T2,E2,t(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),R2,z2,t(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),D2,I2,t(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),P2,M2,t(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),V2,F2,t(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),N2,H2,t(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(o,{defaultRating:1,maxRating:7,color:"red"}),L2,O2,t(o,{defaultRating:2,maxRating:7,color:"orange"}),j2,q2,t(o,{defaultRating:3,maxRating:7,color:"yellow"}),G2,U2,t(o,{defaultRating:4,maxRating:7,color:"olive"}),Y2,J2,t(o,{defaultRating:5,maxRating:7,color:"green"}),W2,K2,t(o,{defaultRating:6,maxRating:7,color:"teal"}),X2,Q2,t(o,{defaultRating:6,maxRating:7,color:"blue"}),Z2,eE,t(o,{defaultRating:5,maxRating:7,color:"violet"}),tE,iE,t(o,{defaultRating:4,maxRating:7,color:"purple"}),aE,lE,t(o,{defaultRating:3,maxRating:7,color:"pink"}),nE,sE,t(o,{defaultRating:2,maxRating:7,color:"brown"}),oE,rE,t(o,{defaultRating:1,maxRating:7,color:"grey"}),uE,dE,t(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),cE,mE,t(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),pE,fE,t(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),gE,hE,t(o,{defaultRating:3,maxRating:4,color:"yellow"}),_E,bE,t(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),vE,yE,t(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),CE,wE,t(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.events,_=>(R(),N(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(xe(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(xe(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const AE=Ce(x2,[["render",SE]]),kE=z({name:"SidebarDoc",components:{DocPageHeader:Ge,DocExample:ze,PropertyListTable:hn},setup(){return{visible1:j(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),$E={class:"pusher"};function BE(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),u=b("sui-button"),f=b("sui-grid-column"),c=b("sui-menu-item"),h=b("sui-sidebar"),v=b("sui-image"),g=b("sui-segment"),y=b("sui-grid"),A=b("doc-example"),B=b("property-list-table"),_=b("sui-table-header-cell"),S=b("sui-table-row"),$=b("sui-table-header"),x=b("sui-table-cell"),E=b("sui-table-body"),M=b("sui-table"),V=b("sui-container");return R(),fe("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(V,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(y,{columns:1},{default:i(()=>[t(f,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=I=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(o,{name:"arrow right"})]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(g,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=I=>e.visible1=I),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{name:"home"}),l(" Home ")]),_:1}),t(c,null,{default:i(()=>[t(o,{name:"gamepad"}),l(" Games ")]),_:1}),t(c,null,{default:i(()=>[t(o,{name:"camera"}),l(" Channels ")]),_:1})]),_:1},8,["visible"]),w("div",$E,[t(g,null,{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Main Header")]),_:1}),t(v,{src:Se})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(B,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(M,{celled:""},{default:i(()=>[t($,null,{default:i(()=>[t(S,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Name")]),_:1}),t(_,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.events,I=>(R(),N(S,{key:I.name},{default:i(()=>[t(x,null,{default:i(()=>[l(xe(I.name),1)]),_:2},1024),t(x,null,{default:i(()=>[l(xe(I.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const xE=Ce(kE,[["render",BE]]),TE=z({name:"SliderDoc",components:{DocPageHeader:Ge,DocExample:ze},setup(){const e=j(5),a='<sui-slider v-model="slider1" />',n=j(4),s='<sui-slider labeled v-model="slider2" />',r=j(6),d='<sui-slider labeled="ticked" v-model="slider3" />',m=j(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=j(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=j([]);f.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=j(7),v='<sui-slider disabled v-model="slider7" />',g=j(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=j(3),B='<sui-slider reversed v-model="slider9" />',_=j(18),S='<sui-slider vertical v-model="slider10" :max="20" />',$=j(5),x=j(5),E=j(5),M=j(5),V=j(5),I=j(5),L=j(5),W=j(5),q=j(5),ce=j(5),Be=j(5),O=j(5),Y=j(5),ue=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Te=j(5),Ue=j(5),et=j(5);return{slider1:e,sliderCode:a,slider2:n,labeledSliderCode:s,slider3:r,labeledTickedCode:d,slider4:m,customLabelsCode:p,slider5:o,stepCode:u,slider6:f,rangeCode:c,slider7:h,disabledCode:v,slider8:g,invertedCode:y,slider9:A,reversedCode:B,slider10:_,verticalCode:S,redSlider:$,orangeSlider:x,yellowSlider:E,oliveSlider:M,greenSlider:V,tealSlider:I,blueSlider:L,violetSlider:W,purpleSlider:q,pinkSlider:ce,brownSlider:Be,greySlider:O,blackSlider:Y,coloredCode:ue,invertedColoredCode:ie,smallSlider:Te,largeSlider:Ue,bigSlider:et,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function EE(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-slider"),u=b("doc-example"),f=b("sui-segment"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),A=b("sui-table"),B=b("sui-container");return R(),fe("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(o,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),l(" "+xe(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(o,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(o,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(o,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(o,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),l(" "+xe(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(o,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),l(" "+xe(e.slider6),1)]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(o,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),l(" "+xe(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(o,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),l(" "+xe(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(o,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(o,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(o,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(o,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Type")]),_:1}),t(c,null,{default:i(()=>[l("Default")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.properties,_=>(R(),N(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(xe(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(xe(_.type),1)]),_:2},1024),t(g,null,{default:i(()=>[l(xe(_.default),1)]),_:2},1024),t(g,null,{default:i(()=>[l(xe(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.events,_=>(R(),N(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(xe(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(xe(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const RE=Ce(TE,[["render",EE]]),zE=z({name:"TabDoc",components:{DocPageHeader:Ge,DocExample:ze,PropertyListTable:hn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function DE(e,a,n,s,r,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-tab-panel"),u=b("sui-tab"),f=b("doc-example"),c=b("property-list-table"),h=b("sui-table-header-cell"),v=b("sui-table-row"),g=b("sui-table-header"),y=b("sui-table-cell"),A=b("sui-table-body"),B=b("sui-table"),_=b("sui-container");return R(),fe("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Examples")]),_:1}),t(f,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(p,{as:"h3"},{default:i(()=>[l("Tab")]),_:1}),t(c,{properties:e.tabProperties},null,8,["properties"]),t(p,{as:"h3"},{default:i(()=>[l("TabPanel")]),_:1}),t(c,{properties:e.tabPanelProperties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(B,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[l("Name")]),_:1}),t(h,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(R(!0),fe(Ae,null,Ze(e.events,S=>(R(),N(v,{key:S.name},{default:i(()=>[t(y,null,{default:i(()=>[l(xe(S.name),1)]),_:2},1024),t(y,null,{default:i(()=>[l(xe(S.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const IE=Ce(zE,[["render",DE]]),PE=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,ME={__name:"MinimalDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"I am a toast, nice to meet you !"})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Minimal",code:PE},{description:i(()=>[l(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},VE=`<template>
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
<\/script>`,FE={__name:"TitledDoc",setup(e){const{toast:a}=it(),n=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Titled",code:VE},{description:i(()=>[l(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},NE=`<template>
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
<\/script>`,HE={__name:"ProgressBarDoc",setup(e){const{toast:a}=it(),n=s=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:s})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Progress Bar",code:NE},{description:i(()=>[l(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1}),t(d,{color:"red",onClick:r[0]||(r[0]=m=>n("red"))},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},LE=`<template>
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
<\/script>`,OE={__name:"ToastTypeDoc",setup(e){const{toast:a}=it(),n=s=>{a({message:"You're using the good framework !",type:s})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Toast Type",code:LE},{description:i(()=>[l(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>n("success")),positive:""},{default:i(()=>[l("Success")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>n("error")),negative:""},{default:i(()=>[l("Error")]),_:1}),t(d,{onClick:r[2]||(r[2]=m=>n("warning")),color:"yellow"},{default:i(()=>[l("Warning")]),_:1})]),_:1})}}},jE=`<template>
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
<\/script>`,qE={__name:"PositionDoc",setup(e){const{toast:a}=it(),n=s=>{a({position:s,message:"Look, I'm here !"})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Position",code:jE},{description:i(()=>[l(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>n("top left"))},{default:i(()=>[l("Top Left")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>n("bottom right"))},{default:i(()=>[l("Bottom Right")]),_:1})]),_:1})}}},GE=w("br",null,null,-1),UE=`<template>
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
<\/script>`,YE={__name:"AttachedPosition",setup(e){const{toast:a}=it(),n=s=>{a({attached:s,title:"Watch out!",message:`I am a ${s} attached toast`})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Attached Position",code:UE},{description:i(()=>[l(" A toast can have an attached position which will show the toast over the whole width of the screen."),GE,l(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>n("top"))},{default:i(()=>[l("Top")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>n("bottom"))},{default:i(()=>[l("Bottom")]),_:1})]),_:1})}}},JE=`<template>
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
<\/script>`,WE={__name:"DirectionDoc",setup(e){const{toast:a}=it(),n=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Direction",code:JE},{description:i(()=>[l(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},KE=`<template>
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
<\/script>`,XE={__name:"CenterAligned",setup(e){const{toast:a}=it(),n=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Center Aligned",code:KE},{description:i(()=>[l(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},QE=`<template>
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
<\/script>`,ZE={__name:"DurationDoc",setup(e){const{toast:a}=it(),n=s=>{a({displayTime:s,message:s===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Duration",code:QE},{description:i(()=>[l(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>n(5e3))},{default:i(()=>[l("5 seconds")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>n(0))},{default:i(()=>[l("Stay")]),_:1})]),_:1})}}},eR=`<template>
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
<\/script>`,tR={__name:"MessageStyleDoc",setup(e){const{toast:a}=it(),n=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Use Message Style",code:eR},{description:i(()=>[l(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},iR=`<template>
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
<\/script>`,aR={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=it(),n=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(s,r)=>{const d=b("SuiButton");return R(),N(J,{label:"Increasing Progress Bar",code:iR},{description:i(()=>[l(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},lR=`<template>
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
<\/script>`,nR={__name:"ColorVariantsDoc",setup(e){const{toast:a}=it(),n=j(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:s[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,m)=>{const p=b("SuiButton");return R(),N(J,{label:"Color Variants",code:lR},{description:i(()=>[l(" You can use all of the usual color names. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},sR={__name:"InvertedColorsDoc",setup(e){const{toast:a}=it(),n=j(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:s[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,m)=>{const p=b("SuiButton");return R(),N(J,{label:"Inverted Colors",code:d.code},{description:i(()=>[l(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(p,{onClick:r},{default:i(()=>[l("Show")]),_:1})]),_:1},8,["code"])}}},oR=`<template>
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
<\/script>`,rR={__name:"ActionGeneralDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>[U(ee,{name:"check"}),"Yes"]),U(P,{color:"red",icon:!0},()=>[U(ee,{name:"ban"})]),U(P,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(s,r)=>(R(),N(J,{label:"General",code:oR},{description:i(()=>[l(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(C(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},uR=`<template>
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
<\/script>`,dR={__name:"ActionBasicDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(P,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(s,r)=>(R(),N(J,{label:"Basic",code:uR},{description:i(()=>[l(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(C(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},cR=`<template>
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
<\/script>`,mR={__name:"ActionAttachedDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),U(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(s,r)=>(R(),N(J,{label:"Attached",code:cR},{description:i(()=>[l(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(C(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},pR=`<template>
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
<\/script>`,fR={__name:"ActionVerticalDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),U(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(s,r)=>(R(),N(J,{label:"Vertical",code:pR},{description:i(()=>[l(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(C(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},gR=w("br",null,null,-1),hR=`<template>
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
<\/script>`,_R={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),U(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(s,r)=>(R(),N(J,{label:"Vertical Attached",code:hR},{description:i(()=>[l(" Vertical actions can also be displayed as button groups using vertical attached."),gR,l(" Vertical attached actions also support left. ")]),example:i(()=>[t(C(P),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},bR={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:ME},{id:"titled",label:"Titled",category:"Types",component:FE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:HE},{id:"toast-type",label:"Toast Type",category:"Variations",component:OE},{id:"position",label:"Position",category:"Variations",component:qE},{id:"attached-position",label:"Attached Position",category:"Variations",component:YE},{id:"direction",label:"Direction",category:"Variations",component:WE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:XE},{id:"duration",label:"Duration",category:"Variations",component:ZE},{id:"message-style",label:"Use Message Style",category:"Variations",component:tR},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:aR},{id:"color-variants",label:"Color Variants",category:"Variations",component:nR},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:sR},{id:"general",label:"General",category:"Actions",component:rR},{id:"action-basic",label:"Basic",category:"Actions",component:dR},{id:"action-attached",label:"Attached",category:"Actions",component:mR},{id:"action-vertical",label:"Vertical",category:"Actions",component:fR},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:_R}];return(n,s)=>(R(),N(_i,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},vR=[{path:"/",component:K_,children:[{path:"/",component:mb},{path:"elements/button",component:Tw},{path:"elements/container",component:Lw},{path:"elements/divider",component:mS},{path:"elements/emoji",component:SS},{path:"elements/flag",component:xS},{path:"elements/header",component:sA},{path:"elements/icon",component:IA},{path:"elements/image",component:XA},{path:"elements/input",component:t0},{path:"elements/label",component:h0},{path:"elements/list",component:P0},{path:"elements/loader",component:N0},{path:"elements/rail",component:j0},{path:"elements/reveal",component:J0},{path:"elements/segment",component:vk},{path:"elements/step",component:kk},{path:"collections/breadcrumb",component:xk},{path:"collections/form",component:Rk},{path:"collections/grid",component:Pk},{path:"collections/menu",component:jk},{path:"collections/message",component:t$},{path:"collections/table",component:f$},{path:"views/advertisement",component:v$},{path:"views/card",component:eB},{path:"views/comment",component:ZB},{path:"views/feed",component:Cx},{path:"views/item",component:dT},{path:"views/statistic",component:vT},{path:"modules/accordion",component:OT},{path:"modules/calendar",component:GT},{path:"modules/checkbox",component:t2},{path:"modules/dimmer",component:l2},{path:"modules/dropdown",component:o2},{path:"modules/embed",component:d2},{path:"modules/modal",component:_2},{path:"modules/popup",component:A2},{path:"modules/progress",component:B2},{path:"modules/rating",component:AE},{path:"modules/sidebar",component:xE},{path:"modules/slider",component:RE},{path:"modules/tab",component:IE},{path:"modules/toast",component:bR}]}],yR=T_({history:qh("/vue-fomantic-ui/"),routes:vR});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=s.variable[1].inside,m=0;m<r.length;m++)d[r[m]]=e.languages.bash[r[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const _o=_m($h);_o.use(yR);_o.use(lC);_o.mount("#app");

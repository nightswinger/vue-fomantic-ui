(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=n(u);fetch(u.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ql(e,a){const n=new Set(e.split(","));return a?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Ve={},Gi=[],ft=()=>{},up=()=>!1,Ka=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Es=e=>e.startsWith("onUpdate:"),Ye=Object.assign,Rs=(e,a)=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)},dp=Object.prototype.hasOwnProperty,ze=(e,a)=>dp.call(e,a),ce=Array.isArray,Yi=e=>ma(e)==="[object Map]",Pi=e=>ma(e)==="[object Set]",yo=e=>ma(e)==="[object Date]",cp=e=>ma(e)==="[object RegExp]",ve=e=>typeof e=="function",Je=e=>typeof e=="string",pi=e=>typeof e=="symbol",He=e=>e!==null&&typeof e=="object",zs=e=>(He(e)||ve(e))&&ve(e.then)&&ve(e.catch),xd=Object.prototype.toString,ma=e=>xd.call(e),mp=e=>ma(e).slice(8,-1),Td=e=>ma(e)==="[object Object]",Ds=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ta=ql(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=e=>{const a=Object.create(null);return n=>a[n]||(a[n]=e(n))},pp=/-(\w)/g,ct=Ul(e=>e.replace(pp,(a,n)=>n?n.toUpperCase():"")),fp=/\B([A-Z])/g,St=Ul(e=>e.replace(fp,"-$1").toLowerCase()),Xa=Ul(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ea=Ul(e=>e?`on${Xa(e)}`:""),It=(e,a)=>!Object.is(e,a),Ji=(e,a)=>{for(let n=0;n<e.length;n++)e[n](a)},wl=(e,a,n)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:n})},Va=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Sl=e=>{const a=Je(e)?Number(e):NaN;return isNaN(a)?e:a};let Co;const Ed=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",hp=ql(gp);function pa(e){if(ce(e)){const a={};for(let n=0;n<e.length;n++){const s=e[n],u=Je(s)?yp(s):pa(s);if(u)for(const d in u)a[d]=u[d]}return a}else if(Je(e)||He(e))return e}const _p=/;(?![^(]*\))/g,bp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function yp(e){const a={};return e.replace(vp,"").split(_p).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function Qa(e){let a="";if(Je(e))a=e;else if(ce(e))for(let n=0;n<e.length;n++){const s=Qa(e[n]);s&&(a+=s+" ")}else if(He(e))for(const n in e)e[n]&&(a+=n+" ");return a.trim()}function Cp(e){if(!e)return null;let{class:a,style:n}=e;return a&&!Je(a)&&(e.class=Qa(a)),n&&(e.style=pa(n)),e}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sp=ql(wp);function Rd(e){return!!e||e===""}function Ap(e,a){if(e.length!==a.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Wt(e[s],a[s]);return n}function Wt(e,a){if(e===a)return!0;let n=yo(e),s=yo(a);if(n||s)return n&&s?e.getTime()===a.getTime():!1;if(n=pi(e),s=pi(a),n||s)return e===a;if(n=ce(e),s=ce(a),n||s)return n&&s?Ap(e,a):!1;if(n=He(e),s=He(a),n||s){if(!n||!s)return!1;const u=Object.keys(e).length,d=Object.keys(a).length;if(u!==d)return!1;for(const m in e){const p=e.hasOwnProperty(m),o=a.hasOwnProperty(m);if(p&&!o||!p&&o||!Wt(e[m],a[m]))return!1}}return String(e)===String(a)}function Gl(e,a){return e.findIndex(n=>Wt(n,a))}const Be=e=>Je(e)?e:e==null?"":ce(e)||He(e)&&(e.toString===xd||!ve(e.toString))?JSON.stringify(e,zd,2):String(e),zd=(e,a)=>a&&a.__v_isRef?zd(e,a.value):Yi(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((n,[s,u],d)=>(n[hn(s,d)+" =>"]=u,n),{})}:Pi(a)?{[`Set(${a.size})`]:[...a.values()].map(n=>hn(n))}:pi(a)?hn(a):He(a)&&!ce(a)&&!Td(a)?String(a):a,hn=(e,a="")=>{var n;return pi(e)?`Symbol(${(n=e.description)!=null?n:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Ps{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!a&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const n=yt;try{return yt=this,a()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(a){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!a){const u=this.parent.scopes.pop();u&&u!==this&&(this.parent.scopes[this.index]=u,u.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(e){return new Ps(e)}function Dd(e,a=yt){a&&a.active&&a.effects.push(e)}function Ms(){return yt}function Pd(e){yt&&yt.cleanups.push(e)}let Ai;class aa{constructor(a,n,s,u){this.fn=a,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Dd(this,u)}get dirty(){if(this._dirtyLevel===1){Mi();for(let a=0;a<this._depsLength;a++){const n=this.deps[a];if(n.computed&&($p(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ii()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=di,n=Ai;try{return di=!0,Ai=this,this._runnings++,wo(this),this.fn()}finally{So(this),this._runnings--,Ai=n,di=a}}stop(){var a;this.active&&(wo(this),So(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function $p(e){return e.value}function wo(e){e._trackId++,e._depsLength=0}function So(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Md(e.deps[a],e);e.deps.length=e._depsLength}}function Md(e,a){const n=e.get(a);n!==void 0&&a._trackId!==n&&(e.delete(a),e.size===0&&e.cleanup())}function Bp(e,a){e.effect instanceof aa&&(e=e.effect.fn);const n=new aa(e,ft,()=>{n.dirty&&n.run()});a&&(Ye(n,a),a.scope&&Dd(n,a.scope)),(!a||!a.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function xp(e){e.effect.stop()}let di=!0,Ln=0;const Id=[];function Mi(){Id.push(di),di=!1}function Ii(){const e=Id.pop();di=e===void 0?!0:e}function Is(){Ln++}function Fs(){for(Ln--;!Ln&&On.length;)On.shift()()}function Fd(e,a,n){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const s=e.deps[e._depsLength];s!==a?(s&&Md(s,e),e.deps[e._depsLength++]=a):e._depsLength++}}const On=[];function Vd(e,a,n){Is();for(const s of e.keys())if(s._dirtyLevel<a&&e.get(s)===s._trackId){const u=s._dirtyLevel;s._dirtyLevel=a,u===0&&(s._shouldSchedule=!0,s.trigger())}Nd(e),Fs()}function Nd(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,On.push(a.scheduler))}const Hd=(e,a)=>{const n=new Map;return n.cleanup=e,n.computed=a,n},Al=new WeakMap,ki=Symbol(""),jn=Symbol("");function _t(e,a,n){if(di&&Ai){let s=Al.get(e);s||Al.set(e,s=new Map);let u=s.get(n);u||s.set(n,u=Hd(()=>s.delete(n))),Fd(Ai,u)}}function Yt(e,a,n,s,u,d){const m=Al.get(e);if(!m)return;let p=[];if(a==="clear")p=[...m.values()];else if(n==="length"&&ce(e)){const o=Number(s);m.forEach((r,f)=>{(f==="length"||!pi(f)&&f>=o)&&p.push(r)})}else switch(n!==void 0&&p.push(m.get(n)),a){case"add":ce(e)?Ds(n)&&p.push(m.get("length")):(p.push(m.get(ki)),Yi(e)&&p.push(m.get(jn)));break;case"delete":ce(e)||(p.push(m.get(ki)),Yi(e)&&p.push(m.get(jn)));break;case"set":Yi(e)&&p.push(m.get(ki));break}Is();for(const o of p)o&&Vd(o,2);Fs()}function Tp(e,a){var n;return(n=Al.get(e))==null?void 0:n.get(a)}const Ep=ql("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pi)),Ao=Rp();function Rp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...n){const s=Ee(this);for(let d=0,m=this.length;d<m;d++)_t(s,"get",d+"");const u=s[a](...n);return u===-1||u===!1?s[a](...n.map(Ee)):u}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...n){Mi(),Is();const s=Ee(this)[a].apply(this,n);return Fs(),Ii(),s}}),e}function zp(e){const a=Ee(this);return _t(a,"has",e),a.hasOwnProperty(e)}class Od{constructor(a=!1,n=!1){this._isReadonly=a,this._shallow=n}get(a,n,s){const u=this._isReadonly,d=this._shallow;if(n==="__v_isReactive")return!u;if(n==="__v_isReadonly")return u;if(n==="__v_isShallow")return d;if(n==="__v_raw")return s===(u?d?Jd:Yd:d?Gd:Ud).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(s)?a:void 0;const m=ce(a);if(!u){if(m&&ze(Ao,n))return Reflect.get(Ao,n,s);if(n==="hasOwnProperty")return zp}const p=Reflect.get(a,n,s);return(pi(n)?Ld.has(n):Ep(n))||(u||_t(a,"get",n),d)?p:nt(p)?m&&Ds(n)?p:p.value:He(p)?u?Ns(p):Kt(p):p}}class jd extends Od{constructor(a=!1){super(!1,a)}set(a,n,s,u){let d=a[n];if(!this._shallow){const o=Ti(d);if(!Na(s)&&!Ti(s)&&(d=Ee(d),s=Ee(s)),!ce(a)&&nt(d)&&!nt(s))return o?!1:(d.value=s,!0)}const m=ce(a)&&Ds(n)?Number(n)<a.length:ze(a,n),p=Reflect.set(a,n,s,u);return a===Ee(u)&&(m?It(s,d)&&Yt(a,"set",n,s):Yt(a,"add",n,s)),p}deleteProperty(a,n){const s=ze(a,n);a[n];const u=Reflect.deleteProperty(a,n);return u&&s&&Yt(a,"delete",n,void 0),u}has(a,n){const s=Reflect.has(a,n);return(!pi(n)||!Ld.has(n))&&_t(a,"has",n),s}ownKeys(a){return _t(a,"iterate",ce(a)?"length":ki),Reflect.ownKeys(a)}}class qd extends Od{constructor(a=!1){super(!0,a)}set(a,n){return!0}deleteProperty(a,n){return!0}}const Dp=new jd,Pp=new qd,Mp=new jd(!0),Ip=new qd(!0),Vs=e=>e,Yl=e=>Reflect.getPrototypeOf(e);function al(e,a,n=!1,s=!1){e=e.__v_raw;const u=Ee(e),d=Ee(a);n||(It(a,d)&&_t(u,"get",a),_t(u,"get",d));const{has:m}=Yl(u),p=s?Vs:n?Os:Ha;if(m.call(u,a))return p(e.get(a));if(m.call(u,d))return p(e.get(d));e!==u&&e.get(a)}function ll(e,a=!1){const n=this.__v_raw,s=Ee(n),u=Ee(e);return a||(It(e,u)&&_t(s,"has",e),_t(s,"has",u)),e===u?n.has(e):n.has(e)||n.has(u)}function nl(e,a=!1){return e=e.__v_raw,!a&&_t(Ee(e),"iterate",ki),Reflect.get(e,"size",e)}function ko(e){e=Ee(e);const a=Ee(this);return Yl(a).has.call(a,e)||(a.add(e),Yt(a,"add",e,e)),this}function $o(e,a){a=Ee(a);const n=Ee(this),{has:s,get:u}=Yl(n);let d=s.call(n,e);d||(e=Ee(e),d=s.call(n,e));const m=u.call(n,e);return n.set(e,a),d?It(a,m)&&Yt(n,"set",e,a):Yt(n,"add",e,a),this}function Bo(e){const a=Ee(this),{has:n,get:s}=Yl(a);let u=n.call(a,e);u||(e=Ee(e),u=n.call(a,e)),s&&s.call(a,e);const d=a.delete(e);return u&&Yt(a,"delete",e,void 0),d}function xo(){const e=Ee(this),a=e.size!==0,n=e.clear();return a&&Yt(e,"clear",void 0,void 0),n}function sl(e,a){return function(s,u){const d=this,m=d.__v_raw,p=Ee(m),o=a?Vs:e?Os:Ha;return!e&&_t(p,"iterate",ki),m.forEach((r,f)=>s.call(u,o(r),o(f),d))}}function ol(e,a,n){return function(...s){const u=this.__v_raw,d=Ee(u),m=Yi(d),p=e==="entries"||e===Symbol.iterator&&m,o=e==="keys"&&m,r=u[e](...s),f=n?Vs:a?Os:Ha;return!a&&_t(d,"iterate",o?jn:ki),{next(){const{value:c,done:h}=r.next();return h?{value:c,done:h}:{value:p?[f(c[0]),f(c[1])]:f(c),done:h}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Fp(){const e={get(d){return al(this,d)},get size(){return nl(this)},has:ll,add:ko,set:$o,delete:Bo,clear:xo,forEach:sl(!1,!1)},a={get(d){return al(this,d,!1,!0)},get size(){return nl(this)},has:ll,add:ko,set:$o,delete:Bo,clear:xo,forEach:sl(!1,!0)},n={get(d){return al(this,d,!0)},get size(){return nl(this,!0)},has(d){return ll.call(this,d,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:sl(!0,!1)},s={get(d){return al(this,d,!0,!0)},get size(){return nl(this,!0)},has(d){return ll.call(this,d,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:sl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=ol(d,!1,!1),n[d]=ol(d,!0,!1),a[d]=ol(d,!1,!0),s[d]=ol(d,!0,!0)}),[e,n,a,s]}const[Vp,Np,Hp,Lp]=Fp();function Jl(e,a){const n=a?e?Lp:Hp:e?Np:Vp;return(s,u,d)=>u==="__v_isReactive"?!e:u==="__v_isReadonly"?e:u==="__v_raw"?s:Reflect.get(ze(n,u)&&u in s?n:s,u,d)}const Op={get:Jl(!1,!1)},jp={get:Jl(!1,!0)},qp={get:Jl(!0,!1)},Up={get:Jl(!0,!0)},Ud=new WeakMap,Gd=new WeakMap,Yd=new WeakMap,Jd=new WeakMap;function Gp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Gp(mp(e))}function Kt(e){return Ti(e)?e:Wl(e,!1,Dp,Op,Ud)}function Wd(e){return Wl(e,!1,Mp,jp,Gd)}function Ns(e){return Wl(e,!0,Pp,qp,Yd)}function Jp(e){return Wl(e,!0,Ip,Up,Jd)}function Wl(e,a,n,s,u){if(!He(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=u.get(e);if(d)return d;const m=Yp(e);if(m===0)return e;const p=new Proxy(e,m===2?s:n);return u.set(e,p),p}function $i(e){return Ti(e)?$i(e.__v_raw):!!(e&&e.__v_isReactive)}function Ti(e){return!!(e&&e.__v_isReadonly)}function Na(e){return!!(e&&e.__v_isShallow)}function Hs(e){return $i(e)||Ti(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function Ls(e){return wl(e,"__v_skip",!0),e}const Ha=e=>He(e)?Kt(e):e,Os=e=>He(e)?Ns(e):e;class Kd{constructor(a,n,s,u){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new aa(()=>a(this._value),()=>Wi(this,1),()=>this.dep&&Nd(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!u,this.__v_isReadonly=s}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&It(a._value,a._value=a.effect.run())&&Wi(a,2),js(a),a.effect._dirtyLevel>=1&&Wi(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Wp(e,a,n=!1){let s,u;const d=ve(e);return d?(s=e,u=ft):(s=e.get,u=e.set),new Kd(s,u,d||!u,n)}function js(e){di&&Ai&&(e=Ee(e),Fd(Ai,e.dep||(e.dep=Hd(()=>e.dep=void 0,e instanceof Kd?e:void 0))))}function Wi(e,a=2,n){e=Ee(e);const s=e.dep;s&&Vd(s,a)}function nt(e){return!!(e&&e.__v_isRef===!0)}function j(e){return Qd(e,!1)}function Xd(e){return Qd(e,!0)}function Qd(e,a){return nt(e)?e:new Kp(e,a)}class Kp{constructor(a,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?a:Ee(a),this._value=n?a:Ha(a)}get value(){return js(this),this._value}set value(a){const n=this.__v_isShallow||Na(a)||Ti(a);a=n?a:Ee(a),It(a,this._rawValue)&&(this._rawValue=a,this._value=n?a:Ha(a),Wi(this,2))}}function Xp(e){Wi(e,2)}function S(e){return nt(e)?e.value:e}function Qp(e){return ve(e)?e():S(e)}const Zp={get:(e,a,n)=>S(Reflect.get(e,a,n)),set:(e,a,n,s)=>{const u=e[a];return nt(u)&&!nt(n)?(u.value=n,!0):Reflect.set(e,a,n,s)}};function qs(e){return $i(e)?e:new Proxy(e,Zp)}class ef{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=a(()=>js(this),()=>Wi(this));this._get=n,this._set=s}get value(){return this._get()}set value(a){this._set(a)}}function Zd(e){return new ef(e)}function tf(e){const a=ce(e)?new Array(e.length):{};for(const n in e)a[n]=ec(e,n);return a}class af{constructor(a,n,s){this._object=a,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Tp(Ee(this._object),this._key)}}class lf{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qn(e,a,n){return nt(e)?e:ve(e)?new lf(e):He(e)&&arguments.length>1?ec(e,a,n):j(e)}function ec(e,a,n){const s=e[a];return nt(s)?s:new af(e,a,n)}const nf={GET:"get",HAS:"has",ITERATE:"iterate"},sf={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function of(e,a){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Jt(e,a,n,s){let u;try{u=s?e(...s):e()}catch(d){Fi(d,a,n)}return u}function At(e,a,n,s){if(ve(e)){const d=Jt(e,a,n,s);return d&&zs(d)&&d.catch(m=>{Fi(m,a,n)}),d}const u=[];for(let d=0;d<e.length;d++)u.push(At(e[d],a,n,s));return u}function Fi(e,a,n,s=!0){const u=a?a.vnode:null;if(a){let d=a.parent;const m=a.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;d;){const r=d.ec;if(r){for(let f=0;f<r.length;f++)if(r[f](e,m,p)===!1)return}d=d.parent}const o=a.appContext.config.errorHandler;if(o){Jt(o,null,10,[e,m,p]);return}}df(e,n,u,s)}function df(e,a,n,s=!0){console.error(e)}let La=!1,Un=!1;const ot=[];let Nt=0;const Ki=[];let li=null,wi=0;const tc=Promise.resolve();let Us=null;function fa(e){const a=Us||tc;return e?a.then(this?e.bind(this):e):a}function cf(e){let a=Nt+1,n=ot.length;for(;a<n;){const s=a+n>>>1,u=ot[s],d=Oa(u);d<e||d===e&&u.pre?a=s+1:n=s}return a}function Kl(e){(!ot.length||!ot.includes(e,La&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?ot.push(e):ot.splice(cf(e.id),0,e),ic())}function ic(){!La&&!Un&&(Un=!0,Us=tc.then(ac))}function mf(e){const a=ot.indexOf(e);a>Nt&&ot.splice(a,1)}function kl(e){ce(e)?Ki.push(...e):(!li||!li.includes(e,e.allowRecurse?wi+1:wi))&&Ki.push(e),ic()}function To(e,a,n=La?Nt+1:0){for(;n<ot.length;n++){const s=ot[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;ot.splice(n,1),n--,s()}}}function $l(e){if(Ki.length){const a=[...new Set(Ki)].sort((n,s)=>Oa(n)-Oa(s));if(Ki.length=0,li){li.push(...a);return}for(li=a,wi=0;wi<li.length;wi++)li[wi]();li=null,wi=0}}const Oa=e=>e.id==null?1/0:e.id,pf=(e,a)=>{const n=Oa(e)-Oa(a);if(n===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return n};function ac(e){Un=!1,La=!0,ot.sort(pf);try{for(Nt=0;Nt<ot.length;Nt++){const a=ot[Nt];a&&a.active!==!1&&Jt(a,null,14)}}finally{Nt=0,ot.length=0,$l(),La=!1,Us=null,(ot.length||Ki.length)&&ac()}}let ji,rl=[];function lc(e,a){var n,s;ji=e,ji?(ji.enabled=!0,rl.forEach(({event:u,args:d})=>ji.emit(u,...d)),rl=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{lc(d,a)}),setTimeout(()=>{ji||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,rl=[])},3e3)):rl=[]}function ff(e,a,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ve;let u=n;const d=a.startsWith("update:"),m=d&&a.slice(7);if(m&&m in s){const f=`${m==="modelValue"?"model":m}Modifiers`,{number:c,trim:h}=s[f]||Ve;h&&(u=n.map(v=>Je(v)?v.trim():v)),c&&(u=n.map(Va))}let p,o=s[p=Ea(a)]||s[p=Ea(ct(a))];!o&&d&&(o=s[p=Ea(St(a))]),o&&At(o,e,6,u);const r=s[p+"Once"];if(r){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,At(r,e,6,u)}}function nc(e,a,n=!1){const s=a.emitsCache,u=s.get(e);if(u!==void 0)return u;const d=e.emits;let m={},p=!1;if(!ve(e)){const o=r=>{const f=nc(r,a,!0);f&&(p=!0,Ye(m,f))};!n&&a.mixins.length&&a.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!d&&!p?(He(e)&&s.set(e,null),null):(ce(d)?d.forEach(o=>m[o]=null):Ye(m,d),He(e)&&s.set(e,m),m)}function Xl(e,a){return!e||!Ka(a)?!1:(a=a.slice(2).replace(/Once$/,""),ze(e,a[0].toLowerCase()+a.slice(1))||ze(e,St(a))||ze(e,a))}let Xe=null,Ql=null;function ja(e){const a=Xe;return Xe=e,Ql=e&&e.type.__scopeId||null,a}function sc(e){Ql=e}function oc(){Ql=null}const gf=e=>i;function i(e,a=Xe,n){if(!a||e._n)return e;const s=(...u)=>{s._d&&Zn(-1);const d=ja(a);let m;try{m=e(...u)}finally{ja(d),s._d&&Zn(1)}return m};return s._n=!0,s._c=!0,s._d=!0,s}function vl(e){const{type:a,vnode:n,proxy:s,withProxy:u,props:d,propsOptions:[m],slots:p,attrs:o,emit:r,render:f,renderCache:c,data:h,setupState:v,ctx:g,inheritAttrs:y}=e;let A,B;const _=ja(e);try{if(n.shapeFlag&4){const $=u||s,x=$;A=Ct(f.call(x,$,c,d,v,h,g)),B=o}else{const $=a;A=Ct($.length>1?$(d,{attrs:o,slots:p,emit:r}):$(d,null)),B=a.props?o:_f(o)}}catch($){Da.length=0,Fi($,e,1),A=t(ut)}let w=A;if(B&&y!==!1){const $=Object.keys(B),{shapeFlag:x}=w;$.length&&x&7&&(m&&$.some(Es)&&(B=bf(B,m)),w=Ht(w,B))}return n.dirs&&(w=Ht(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),A=w,ja(_),A}function hf(e,a=!0){let n;for(let s=0;s<e.length;s++){const u=e[s];if(Rt(u)){if(u.type!==ut||u.children==="v-if"){if(n)return;n=u}}else return}return n}const _f=e=>{let a;for(const n in e)(n==="class"||n==="style"||Ka(n))&&((a||(a={}))[n]=e[n]);return a},bf=(e,a)=>{const n={};for(const s in e)(!Es(s)||!(s.slice(9)in a))&&(n[s]=e[s]);return n};function vf(e,a,n){const{props:s,children:u,component:d}=e,{props:m,children:p,patchFlag:o}=a,r=d.emitsOptions;if(a.dirs||a.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?Eo(s,m,r):!!m;if(o&8){const f=a.dynamicProps;for(let c=0;c<f.length;c++){const h=f[c];if(m[h]!==s[h]&&!Xl(r,h))return!0}}}else return(u||p)&&(!p||!p.$stable)?!0:s===m?!1:s?m?Eo(s,m,r):!0:!!m;return!1}function Eo(e,a,n){const s=Object.keys(a);if(s.length!==Object.keys(e).length)return!0;for(let u=0;u<s.length;u++){const d=s[u];if(a[d]!==e[d]&&!Xl(n,d))return!0}return!1}function Gs({vnode:e,parent:a},n){for(;a;){const s=a.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=a.vnode).el=n,a=a.parent;else break}}const Ys="components",yf="directives";function b(e,a){return Js(Ys,e,!0,a)||e}const rc=Symbol.for("v-ndc");function uc(e){return Je(e)?Js(Ys,e,!1)||e:e||rc}function Zl(e){return Js(yf,e)}function Js(e,a,n=!0,s=!1){const u=Xe||Qe;if(u){const d=u.type;if(e===Ys){const p=ls(d,!1);if(p&&(p===a||p===ct(a)||p===Xa(ct(a))))return d}const m=Ro(u[e]||d[e],a)||Ro(u.appContext[e],a);return!m&&s?d:m}}function Ro(e,a){return e&&(e[a]||e[ct(a)]||e[Xa(ct(a))])}const dc=e=>e.__isSuspense;let Gn=0;const Cf={name:"Suspense",__isSuspense:!0,process(e,a,n,s,u,d,m,p,o,r){if(e==null)Sf(a,n,s,u,d,m,p,o,r);else{if(d&&d.deps>0){a.suspense=e.suspense;return}Af(e,a,n,s,u,m,p,o,r)}},hydrate:kf,create:Ws,normalize:$f},wf=Cf;function qa(e,a){const n=e.props&&e.props[a];ve(n)&&n()}function Sf(e,a,n,s,u,d,m,p,o){const{p:r,o:{createElement:f}}=o,c=f("div"),h=e.suspense=Ws(e,u,s,a,c,n,d,m,p,o);r(null,h.pendingBranch=e.ssContent,c,null,s,h,d,m),h.deps>0?(qa(e,"onPending"),qa(e,"onFallback"),r(null,e.ssFallback,a,n,s,null,d,m),Xi(h,e.ssFallback)):h.resolve(!1,!0)}function Af(e,a,n,s,u,d,m,p,{p:o,um:r,o:{createElement:f}}){const c=a.suspense=e.suspense;c.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:A,isHydrating:B}=c;if(y)c.pendingBranch=h,Pt(h,y)?(o(y,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0?c.resolve():A&&(B||(o(g,v,n,s,u,null,d,m,p),Xi(c,v)))):(c.pendingId=Gn++,B?(c.isHydrating=!1,c.activeBranch=y):r(y,u,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),A?(o(null,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0?c.resolve():(o(g,v,n,s,u,null,d,m,p),Xi(c,v))):g&&Pt(h,g)?(o(g,h,n,s,u,c,d,m,p),c.resolve(!0)):(o(null,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0&&c.resolve()));else if(g&&Pt(h,g))o(g,h,n,s,u,c,d,m,p),Xi(c,h);else if(qa(a,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=Gn++,o(null,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0)c.resolve();else{const{timeout:_,pendingId:w}=c;_>0?setTimeout(()=>{c.pendingId===w&&c.fallback(v)},_):_===0&&c.fallback(v)}}function Ws(e,a,n,s,u,d,m,p,o,r,f=!1){const{p:c,m:h,um:v,n:g,o:{parentNode:y,remove:A}}=r;let B;const _=Bf(e);_&&a!=null&&a.pendingBranch&&(B=a.pendingId,a.deps++);const w=e.props?Sl(e.props.timeout):void 0,$=d,x={vnode:e,parent:a,parentComponent:n,namespace:m,container:s,hiddenContainer:u,deps:0,pendingId:Gn++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,I=!1){const{vnode:F,activeBranch:P,pendingBranch:L,pendingId:J,effects:q,parentComponent:de,container:$e}=x;let O=!1;x.isHydrating?x.isHydrating=!1:E||(O=P&&L.transition&&L.transition.mode==="out-in",O&&(P.transition.afterLeave=()=>{J===x.pendingId&&(h(L,$e,d===$?g(P):d,0),kl(q))}),P&&(y(P.el)!==x.hiddenContainer&&(d=g(P)),v(P,de,x,!0)),O||h(L,$e,d,0)),Xi(x,L),x.pendingBranch=null,x.isInFallback=!1;let Y=x.parent,re=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...q),re=!0;break}Y=Y.parent}!re&&!O&&kl(q),x.effects=[],_&&a&&a.pendingBranch&&B===a.pendingId&&(a.deps--,a.deps===0&&!I&&a.resolve()),qa(F,"onResolve")},fallback(E){if(!x.pendingBranch)return;const{vnode:I,activeBranch:F,parentComponent:P,container:L,namespace:J}=x;qa(I,"onFallback");const q=g(F),de=()=>{x.isInFallback&&(c(null,E,L,q,P,null,J,p,o),Xi(x,E))},$e=E.transition&&E.transition.mode==="out-in";$e&&(F.transition.afterLeave=de),x.isInFallback=!0,v(F,P,null,!0),$e||de()},move(E,I,F){x.activeBranch&&h(x.activeBranch,E,I,F),x.container=E},next(){return x.activeBranch&&g(x.activeBranch)},registerDep(E,I){const F=!!x.pendingBranch;F&&x.deps++;const P=E.vnode.el;E.asyncDep.catch(L=>{Fi(L,E,0)}).then(L=>{if(E.isUnmounted||x.isUnmounted||x.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:J}=E;is(E,L,!1),P&&(J.el=P);const q=!P&&E.subTree.el;I(E,J,y(P||E.subTree.el),P?null:g(E.subTree),x,m,o),q&&A(q),Gs(E,J.el),F&&--x.deps===0&&x.resolve()})},unmount(E,I){x.isUnmounted=!0,x.activeBranch&&v(x.activeBranch,n,E,I),x.pendingBranch&&v(x.pendingBranch,n,E,I)}};return x}function kf(e,a,n,s,u,d,m,p,o){const r=a.suspense=Ws(a,s,n,e.parentNode,document.createElement("div"),null,u,d,m,p,!0),f=o(e,r.pendingBranch=a.ssContent,n,r,d,m);return r.deps===0&&r.resolve(!1,!0),f}function $f(e){const{shapeFlag:a,children:n}=e,s=a&32;e.ssContent=zo(s?n.default:n),e.ssFallback=s?zo(n.fallback):t(ut)}function zo(e){let a;if(ve(e)){const n=zi&&e._c;n&&(e._d=!1,z()),e=e(),n&&(e._d=!0,a=gt,Lc())}return ce(e)&&(e=hf(e)),e=Ct(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(n=>n!==e)),e}function cc(e,a){a&&a.pendingBranch?ce(e)?a.effects.push(...e):a.effects.push(e):kl(e)}function Xi(e,a){e.activeBranch=a;const{vnode:n,parentComponent:s}=e;let u=a.el;for(;!u&&a.component;)a=a.component.subTree,u=a.el;n.el=u,s&&s.subTree===n&&(s.vnode.el=u,Gs(s,u))}function Bf(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const mc=Symbol.for("v-scx"),pc=()=>Me(mc);function Ks(e,a){return Za(e,null,a)}function fc(e,a){return Za(e,null,{flush:"post"})}function gc(e,a){return Za(e,null,{flush:"sync"})}const ul={};function rt(e,a,n){return Za(e,a,n)}function Za(e,a,{immediate:n,deep:s,flush:u,once:d,onTrack:m,onTrigger:p}=Ve){if(a&&d){const E=a;a=(...I)=>{E(...I),x()}}const o=Qe,r=E=>s===!0?E:Si(E,s===!1?1:void 0);let f,c=!1,h=!1;if(nt(e)?(f=()=>e.value,c=Na(e)):$i(e)?(f=()=>r(e),c=!0):ce(e)?(h=!0,c=e.some(E=>$i(E)||Na(E)),f=()=>e.map(E=>{if(nt(E))return E.value;if($i(E))return r(E);if(ve(E))return Jt(E,o,2)})):ve(e)?a?f=()=>Jt(e,o,2):f=()=>(v&&v(),At(e,o,3,[g])):f=ft,a&&s){const E=f;f=()=>Si(E())}let v,g=E=>{v=w.onStop=()=>{Jt(E,o,4),v=w.onStop=void 0}},y;if(il)if(g=ft,a?n&&At(a,o,3,[f(),h?[]:void 0,g]):f(),u==="sync"){const E=pc();y=E.__watcherHandles||(E.__watcherHandles=[])}else return ft;let A=h?new Array(e.length).fill(ul):ul;const B=()=>{if(!(!w.active||!w.dirty))if(a){const E=w.run();(s||c||(h?E.some((I,F)=>It(I,A[F])):It(E,A)))&&(v&&v(),At(a,o,3,[E,A===ul?void 0:h&&A[0]===ul?[]:A,g]),A=E)}else w.run()};B.allowRecurse=!!a;let _;u==="sync"?_=B:u==="post"?_=()=>at(B,o&&o.suspense):(B.pre=!0,o&&(B.id=o.uid),_=()=>Kl(B));const w=new aa(f,ft,_),$=Ms(),x=()=>{w.stop(),$&&Rs($.effects,w)};return a?n?B():A=w.run():u==="post"?at(w.run.bind(w),o&&o.suspense):w.run(),y&&y.push(x),x}function xf(e,a,n){const s=this.proxy,u=Je(e)?e.includes(".")?hc(s,e):()=>s[e]:e.bind(s,s);let d;ve(a)?d=a:(d=a.handler,n=a);const m=Di(this),p=Za(u,d.bind(s),n);return m(),p}function hc(e,a){const n=a.split(".");return()=>{let s=e;for(let u=0;u<n.length&&s;u++)s=s[n[u]];return s}}function Si(e,a,n=0,s){if(!He(e)||e.__v_skip)return e;if(a&&a>0){if(n>=a)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),nt(e))Si(e.value,a,n,s);else if(ce(e))for(let u=0;u<e.length;u++)Si(e[u],a,n,s);else if(Pi(e)||Yi(e))e.forEach(u=>{Si(u,a,n,s)});else if(Td(e))for(const u in e)Si(e[u],a,n,s);return e}function el(e,a){if(Xe===null)return e;const n=on(Xe)||Xe.proxy,s=e.dirs||(e.dirs=[]);for(let u=0;u<a.length;u++){let[d,m,p,o=Ve]=a[u];d&&(ve(d)&&(d={mounted:d,updated:d}),d.deep&&Si(m),s.push({dir:d,instance:n,value:m,oldValue:void 0,arg:p,modifiers:o}))}return e}function Vt(e,a,n,s){const u=e.dirs,d=a&&a.dirs;for(let m=0;m<u.length;m++){const p=u[m];d&&(p.oldValue=d[m].value);let o=p.dir[s];o&&(Mi(),At(o,n,8,[e.el,p,e,a]),Ii())}}const ni=Symbol("_leaveCb"),dl=Symbol("_enterCb");function Xs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gi(()=>{e.isMounted=!0}),ln(()=>{e.isUnmounting=!0}),e}const Bt=[Function,Array],Qs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},Tf={name:"BaseTransition",props:Qs,setup(e,{slots:a}){const n=Ot(),s=Xs();let u;return()=>{const d=a.default&&en(a.default(),!0);if(!d||!d.length)return;let m=d[0];if(d.length>1){for(const y of d)if(y.type!==ut){m=y;break}}const p=Ee(e),{mode:o}=p;if(s.isLeaving)return _n(m);const r=Do(m);if(!r)return _n(m);const f=la(r,p,s,n);Ei(r,f);const c=n.subTree,h=c&&Do(c);let v=!1;const{getTransitionKey:g}=r.type;if(g){const y=g();u===void 0?u=y:y!==u&&(u=y,v=!0)}if(h&&h.type!==ut&&(!Pt(r,h)||v)){const y=la(h,p,s,n);if(Ei(h,y),o==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},_n(m);o==="in-out"&&r.type!==ut&&(y.delayLeave=(A,B,_)=>{const w=bc(s,h);w[String(h.key)]=h,A[ni]=()=>{B(),A[ni]=void 0,delete f.delayedLeave},f.delayedLeave=_})}return m}}},_c=Tf;function bc(e,a){const{leavingVNodes:n}=e;let s=n.get(a.type);return s||(s=Object.create(null),n.set(a.type,s)),s}function la(e,a,n,s){const{appear:u,mode:d,persisted:m=!1,onBeforeEnter:p,onEnter:o,onAfterEnter:r,onEnterCancelled:f,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:y,onAppear:A,onAfterAppear:B,onAppearCancelled:_}=a,w=String(e.key),$=bc(n,e),x=(F,P)=>{F&&At(F,s,9,P)},E=(F,P)=>{const L=P[1];x(F,P),ce(F)?F.every(J=>J.length<=1)&&L():F.length<=1&&L()},I={mode:d,persisted:m,beforeEnter(F){let P=p;if(!n.isMounted)if(u)P=y||p;else return;F[ni]&&F[ni](!0);const L=$[w];L&&Pt(e,L)&&L.el[ni]&&L.el[ni](),x(P,[F])},enter(F){let P=o,L=r,J=f;if(!n.isMounted)if(u)P=A||o,L=B||r,J=_||f;else return;let q=!1;const de=F[dl]=$e=>{q||(q=!0,$e?x(J,[F]):x(L,[F]),I.delayedLeave&&I.delayedLeave(),F[dl]=void 0)};P?E(P,[F,de]):de()},leave(F,P){const L=String(e.key);if(F[dl]&&F[dl](!0),n.isUnmounting)return P();x(c,[F]);let J=!1;const q=F[ni]=de=>{J||(J=!0,P(),de?x(g,[F]):x(v,[F]),F[ni]=void 0,$[L]===e&&delete $[L])};$[L]=e,h?E(h,[F,q]):q()},clone(F){return la(F,a,n,s)}};return I}function _n(e){if(tl(e))return e=Ht(e),e.children=null,e}function Do(e){return tl(e)?e.children?e.children[0]:void 0:e}function Ei(e,a){e.shapeFlag&6&&e.component?Ei(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function en(e,a=!1,n){let s=[],u=0;for(let d=0;d<e.length;d++){let m=e[d];const p=n==null?m.key:String(n)+String(m.key!=null?m.key:d);m.type===Se?(m.patchFlag&128&&u++,s=s.concat(en(m.children,a,p))):(a||m.type!==ut)&&s.push(p!=null?Ht(m,{key:p}):m)}if(u>1)for(let d=0;d<s.length;d++)s[d].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function R(e,a){return ve(e)?Ye({name:e.name},a,{setup:e}):e}const Bi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ef(e){ve(e)&&(e={loader:e});const{loader:a,loadingComponent:n,errorComponent:s,delay:u=200,timeout:d,suspensible:m=!0,onError:p}=e;let o=null,r,f=0;const c=()=>(f++,o=null,h()),h=()=>{let v;return o||(v=o=a().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),p)return new Promise((y,A)=>{p(g,()=>y(c()),()=>A(g),f+1)});throw g}).then(g=>v!==o&&o?o:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),r=g,g)))};return R({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return r},setup(){const v=Qe;if(r)return()=>bn(r,v);const g=_=>{o=null,Fi(_,v,13,!s)};if(m&&v.suspense||il)return h().then(_=>()=>bn(_,v)).catch(_=>(g(_),()=>s?t(s,{error:_}):null));const y=j(!1),A=j(),B=j(!!u);return u&&setTimeout(()=>{B.value=!1},u),d!=null&&setTimeout(()=>{if(!y.value&&!A.value){const _=new Error(`Async component timed out after ${d}ms.`);g(_),A.value=_}},d),h().then(()=>{y.value=!0,v.parent&&tl(v.parent.vnode)&&(v.parent.effect.dirty=!0,Kl(v.parent.update))}).catch(_=>{g(_),A.value=_}),()=>{if(y.value&&r)return bn(r,v);if(A.value&&s)return t(s,{error:A.value});if(n&&!B.value)return t(n)}}})}function bn(e,a){const{ref:n,props:s,children:u,ce:d}=a.vnode,m=t(e,s,u);return m.ref=n,m.ce=d,delete a.vnode.ce,m}const tl=e=>e.type.__isKeepAlive,Rf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const n=Ot(),s=n.ctx;if(!s.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const u=new Map,d=new Set;let m=null;const p=n.suspense,{renderer:{p:o,m:r,um:f,o:{createElement:c}}}=s,h=c("div");s.activate=(_,w,$,x,E)=>{const I=_.component;r(_,w,$,0,p),o(I.vnode,_,w,$,I,p,x,_.slotScopeIds,E),at(()=>{I.isDeactivated=!1,I.a&&Ji(I.a);const F=_.props&&_.props.onVnodeMounted;F&&pt(F,I.parent,_)},p)},s.deactivate=_=>{const w=_.component;r(_,h,null,1,p),at(()=>{w.da&&Ji(w.da);const $=_.props&&_.props.onVnodeUnmounted;$&&pt($,w.parent,_),w.isDeactivated=!0},p)};function v(_){vn(_),f(_,n,p,!0)}function g(_){u.forEach((w,$)=>{const x=ls(w.type);x&&(!_||!_(x))&&y($)})}function y(_){const w=u.get(_);!m||!Pt(w,m)?v(w):m&&vn(m),u.delete(_),d.delete(_)}rt(()=>[e.include,e.exclude],([_,w])=>{_&&g($=>Sa(_,$)),w&&g($=>!Sa(w,$))},{flush:"post",deep:!0});let A=null;const B=()=>{A!=null&&u.set(A,yn(n.subTree))};return gi(B),an(B),ln(()=>{u.forEach(_=>{const{subTree:w,suspense:$}=n,x=yn(w);if(_.type===x.type&&_.key===x.key){vn(x);const E=x.component.da;E&&at(E,$);return}v(_)})}),()=>{if(A=null,!a.default)return null;const _=a.default(),w=_[0];if(_.length>1)return m=null,_;if(!Rt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return m=null,w;let $=yn(w);const x=$.type,E=ls(Bi($)?$.type.__asyncResolved||{}:x),{include:I,exclude:F,max:P}=e;if(I&&(!E||!Sa(I,E))||F&&E&&Sa(F,E))return m=$,w;const L=$.key==null?x:$.key,J=u.get(L);return $.el&&($=Ht($),w.shapeFlag&128&&(w.ssContent=$)),A=L,J?($.el=J.el,$.component=J.component,$.transition&&Ei($,$.transition),$.shapeFlag|=512,d.delete(L),d.add(L)):(d.add(L),P&&d.size>parseInt(P,10)&&y(d.values().next().value)),$.shapeFlag|=256,m=$,dc(w.type)?w:$}}},zf=Rf;function Sa(e,a){return ce(e)?e.some(n=>Sa(n,a)):Je(e)?e.split(",").includes(a):cp(e)?e.test(a):!1}function Zs(e,a){vc(e,"a",a)}function eo(e,a){vc(e,"da",a)}function vc(e,a,n=Qe){const s=e.__wdc||(e.__wdc=()=>{let u=n;for(;u;){if(u.isDeactivated)return;u=u.parent}return e()});if(tn(a,s,n),n){let u=n.parent;for(;u&&u.parent;)tl(u.parent.vnode)&&Df(s,a,n,u),u=u.parent}}function Df(e,a,n,s){const u=tn(a,e,s,!0);Vi(()=>{Rs(s[a],u)},n)}function vn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function yn(e){return e.shapeFlag&128?e.ssContent:e}function tn(e,a,n=Qe,s=!1){if(n){const u=n[e]||(n[e]=[]),d=a.__weh||(a.__weh=(...m)=>{if(n.isUnmounted)return;Mi();const p=Di(n),o=At(a,n,e,m);return p(),Ii(),o});return s?u.unshift(d):u.push(d),d}}const Xt=e=>(a,n=Qe)=>(!il||e==="sp")&&tn(e,(...s)=>a(...s),n),yc=Xt("bm"),gi=Xt("m"),Cc=Xt("bu"),an=Xt("u"),ln=Xt("bum"),Vi=Xt("um"),wc=Xt("sp"),Sc=Xt("rtg"),Ac=Xt("rtc");function kc(e,a=Qe){tn("ec",e,a)}function Ze(e,a,n,s){let u;const d=n&&n[s];if(ce(e)||Je(e)){u=new Array(e.length);for(let m=0,p=e.length;m<p;m++)u[m]=a(e[m],m,void 0,d&&d[m])}else if(typeof e=="number"){u=new Array(e);for(let m=0;m<e;m++)u[m]=a(m+1,m,void 0,d&&d[m])}else if(He(e))if(e[Symbol.iterator])u=Array.from(e,(m,p)=>a(m,p,void 0,d&&d[p]));else{const m=Object.keys(e);u=new Array(m.length);for(let p=0,o=m.length;p<o;p++){const r=m[p];u[p]=a(e[r],r,p,d&&d[p])}}else u=[];return n&&(n[s]=u),u}function Pf(e,a){for(let n=0;n<a.length;n++){const s=a[n];if(ce(s))for(let u=0;u<s.length;u++)e[s[u].name]=s[u].fn;else s&&(e[s.name]=s.key?(...u)=>{const d=s.fn(...u);return d&&(d.key=s.key),d}:s.fn)}return e}function na(e,a,n={},s,u){if(Xe.isCE||Xe.parent&&Bi(Xe.parent)&&Xe.parent.isCE)return a!=="default"&&(n.name=a),t("slot",n,s&&s());let d=e[a];d&&d._c&&(d._d=!1),z();const m=d&&$c(d(n)),p=H(Se,{key:n.key||m&&m.key||`_${a}`},m||(s?s():[]),m&&e._===1?64:-2);return!u&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),d&&d._c&&(d._d=!0),p}function $c(e){return e.some(a=>Rt(a)?!(a.type===ut||a.type===Se&&!$c(a.children)):!0)?e:null}function Mf(e,a){const n={};for(const s in e)n[a&&/[A-Z]/.test(s)?`on:${s}`:Ea(s)]=e[s];return n}const Yn=e=>e?Gc(e)?on(e)||e.proxy:Yn(e.parent):null,Ra=Ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yn(e.parent),$root:e=>Yn(e.root),$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Kl(e.update)}),$nextTick:e=>e.n||(e.n=fa.bind(e.proxy)),$watch:e=>xf.bind(e)}),Cn=(e,a)=>e!==Ve&&!e.__isScriptSetup&&ze(e,a),Jn={get({_:e},a){const{ctx:n,setupState:s,data:u,props:d,accessCache:m,type:p,appContext:o}=e;let r;if(a[0]!=="$"){const v=m[a];if(v!==void 0)switch(v){case 1:return s[a];case 2:return u[a];case 4:return n[a];case 3:return d[a]}else{if(Cn(s,a))return m[a]=1,s[a];if(u!==Ve&&ze(u,a))return m[a]=2,u[a];if((r=e.propsOptions[0])&&ze(r,a))return m[a]=3,d[a];if(n!==Ve&&ze(n,a))return m[a]=4,n[a];Wn&&(m[a]=0)}}const f=Ra[a];let c,h;if(f)return a==="$attrs"&&_t(e,"get",a),f(e);if((c=p.__cssModules)&&(c=c[a]))return c;if(n!==Ve&&ze(n,a))return m[a]=4,n[a];if(h=o.config.globalProperties,ze(h,a))return h[a]},set({_:e},a,n){const{data:s,setupState:u,ctx:d}=e;return Cn(u,a)?(u[a]=n,!0):s!==Ve&&ze(s,a)?(s[a]=n,!0):ze(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=n,!0)},has({_:{data:e,setupState:a,accessCache:n,ctx:s,appContext:u,propsOptions:d}},m){let p;return!!n[m]||e!==Ve&&ze(e,m)||Cn(a,m)||(p=d[0])&&ze(p,m)||ze(s,m)||ze(Ra,m)||ze(u.config.globalProperties,m)},defineProperty(e,a,n){return n.get!=null?e._.accessCache[a]=0:ze(n,"value")&&this.set(e,a,n.value,null),Reflect.defineProperty(e,a,n)}},If=Ye({},Jn,{get(e,a){if(a!==Symbol.unscopables)return Jn.get(e,a,e)},has(e,a){return a[0]!=="_"&&!hp(a)}});function Ff(){return null}function Vf(){return null}function Nf(e){}function Hf(e){}function Lf(){return null}function Of(){}function jf(e,a){return null}function qf(){return Bc().slots}function Uf(){return Bc().attrs}function Bc(){const e=Ot();return e.setupContext||(e.setupContext=Wc(e))}function Ua(e){return ce(e)?e.reduce((a,n)=>(a[n]=null,a),{}):e}function Gf(e,a){const n=Ua(e);for(const s in a){if(s.startsWith("__skip"))continue;let u=n[s];u?ce(u)||ve(u)?u=n[s]={type:u,default:a[s]}:u.default=a[s]:u===null&&(u=n[s]={default:a[s]}),u&&a[`__skip_${s}`]&&(u.skipFactory=!0)}return n}function Yf(e,a){return!e||!a?e||a:ce(e)&&ce(a)?e.concat(a):Ye({},Ua(e),Ua(a))}function Jf(e,a){const n={};for(const s in e)a.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function Wf(e){const a=Ot();let n=e();return ts(),zs(n)&&(n=n.catch(s=>{throw Di(a),s})),[n,()=>Di(a)]}let Wn=!0;function Kf(e){const a=to(e),n=e.proxy,s=e.ctx;Wn=!1,a.beforeCreate&&Po(a.beforeCreate,e,"bc");const{data:u,computed:d,methods:m,watch:p,provide:o,inject:r,created:f,beforeMount:c,mounted:h,beforeUpdate:v,updated:g,activated:y,deactivated:A,beforeDestroy:B,beforeUnmount:_,destroyed:w,unmounted:$,render:x,renderTracked:E,renderTriggered:I,errorCaptured:F,serverPrefetch:P,expose:L,inheritAttrs:J,components:q,directives:de,filters:$e}=a;if(r&&Xf(r,s,null),m)for(const re in m){const te=m[re];ve(te)&&(s[re]=te.bind(n))}if(u){const re=u.call(n,n);He(re)&&(e.data=Kt(re))}if(Wn=!0,d)for(const re in d){const te=d[re],xe=ve(te)?te.bind(n,n):ve(te.get)?te.get.bind(n,n):ft,Ue=!ve(te)&&ve(te.set)?te.set.bind(n):ft,et=V({get:xe,set:Ue});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>et.value,set:Le=>et.value=Le})}if(p)for(const re in p)xc(p[re],s,n,re);if(o){const re=ve(o)?o.call(n):o;Reflect.ownKeys(re).forEach(te=>{lt(te,re[te])})}f&&Po(f,e,"c");function Y(re,te){ce(te)?te.forEach(xe=>re(xe.bind(n))):te&&re(te.bind(n))}if(Y(yc,c),Y(gi,h),Y(Cc,v),Y(an,g),Y(Zs,y),Y(eo,A),Y(kc,F),Y(Ac,E),Y(Sc,I),Y(ln,_),Y(Vi,$),Y(wc,P),ce(L))if(L.length){const re=e.exposed||(e.exposed={});L.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:xe=>n[te]=xe})})}else e.exposed||(e.exposed={});x&&e.render===ft&&(e.render=x),J!=null&&(e.inheritAttrs=J),q&&(e.components=q),de&&(e.directives=de)}function Xf(e,a,n=ft){ce(e)&&(e=Kn(e));for(const s in e){const u=e[s];let d;He(u)?"default"in u?d=Me(u.from||s,u.default,!0):d=Me(u.from||s):d=Me(u),nt(d)?Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get:()=>d.value,set:m=>d.value=m}):a[s]=d}}function Po(e,a,n){At(ce(e)?e.map(s=>s.bind(a.proxy)):e.bind(a.proxy),a,n)}function xc(e,a,n,s){const u=s.includes(".")?hc(n,s):()=>n[s];if(Je(e)){const d=a[e];ve(d)&&rt(u,d)}else if(ve(e))rt(u,e.bind(n));else if(He(e))if(ce(e))e.forEach(d=>xc(d,a,n,s));else{const d=ve(e.handler)?e.handler.bind(n):a[e.handler];ve(d)&&rt(u,d,e)}}function to(e){const a=e.type,{mixins:n,extends:s}=a,{mixins:u,optionsCache:d,config:{optionMergeStrategies:m}}=e.appContext,p=d.get(a);let o;return p?o=p:!u.length&&!n&&!s?o=a:(o={},u.length&&u.forEach(r=>Bl(o,r,m,!0)),Bl(o,a,m)),He(a)&&d.set(a,o),o}function Bl(e,a,n,s=!1){const{mixins:u,extends:d}=a;d&&Bl(e,d,n,!0),u&&u.forEach(m=>Bl(e,m,n,!0));for(const m in a)if(!(s&&m==="expose")){const p=Qf[m]||n&&n[m];e[m]=p?p(e[m],a[m]):a[m]}return e}const Qf={data:Mo,props:Io,emits:Io,methods:Aa,computed:Aa,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Aa,directives:Aa,watch:eg,provide:Mo,inject:Zf};function Mo(e,a){return a?e?function(){return Ye(ve(e)?e.call(this,this):e,ve(a)?a.call(this,this):a)}:a:e}function Zf(e,a){return Aa(Kn(e),Kn(a))}function Kn(e){if(ce(e)){const a={};for(let n=0;n<e.length;n++)a[e[n]]=e[n];return a}return e}function dt(e,a){return e?[...new Set([].concat(e,a))]:a}function Aa(e,a){return e?Ye(Object.create(null),e,a):a}function Io(e,a){return e?ce(e)&&ce(a)?[...new Set([...e,...a])]:Ye(Object.create(null),Ua(e),Ua(a??{})):a}function eg(e,a){if(!e)return a;if(!a)return e;const n=Ye(Object.create(null),e);for(const s in a)n[s]=dt(e[s],a[s]);return n}function Tc(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ig(e,a){return function(s,u=null){ve(s)||(s=Ye({},s)),u!=null&&!He(u)&&(u=null);const d=Tc(),m=new WeakSet;let p=!1;const o=d.app={_uid:tg++,_component:s,_props:u,_container:null,_context:d,_instance:null,version:Xc,get config(){return d.config},set config(r){},use(r,...f){return m.has(r)||(r&&ve(r.install)?(m.add(r),r.install(o,...f)):ve(r)&&(m.add(r),r(o,...f))),o},mixin(r){return d.mixins.includes(r)||d.mixins.push(r),o},component(r,f){return f?(d.components[r]=f,o):d.components[r]},directive(r,f){return f?(d.directives[r]=f,o):d.directives[r]},mount(r,f,c){if(!p){const h=t(s,u);return h.appContext=d,c===!0?c="svg":c===!1&&(c=void 0),f&&a?a(h,r):e(h,r,c),p=!0,o._container=r,r.__vue_app__=o,on(h.component)||h.component.proxy}},unmount(){p&&(e(null,o._container),delete o._container.__vue_app__)},provide(r,f){return d.provides[r]=f,o},runWithContext(r){Ga=o;try{return r()}finally{Ga=null}}};return o}}let Ga=null;function lt(e,a){if(Qe){let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[e]=a}}function Me(e,a,n=!1){const s=Qe||Xe;if(s||Ga){const u=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ga._context.provides;if(u&&e in u)return u[e];if(arguments.length>1)return n&&ve(a)?a.call(s&&s.proxy):a}}function ag(){return!!(Qe||Xe||Ga)}function lg(e,a,n,s=!1){const u={},d={};wl(d,sn,1),e.propsDefaults=Object.create(null),Ec(e,a,u,d);for(const m in e.propsOptions[0])m in u||(u[m]=void 0);n?e.props=s?u:Wd(u):e.type.props?e.props=u:e.props=d,e.attrs=d}function ng(e,a,n,s){const{props:u,attrs:d,vnode:{patchFlag:m}}=e,p=Ee(u),[o]=e.propsOptions;let r=!1;if((s||m>0)&&!(m&16)){if(m&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let h=f[c];if(Xl(e.emitsOptions,h))continue;const v=a[h];if(o)if(ze(d,h))v!==d[h]&&(d[h]=v,r=!0);else{const g=ct(h);u[g]=Xn(o,p,g,v,e,!1)}else v!==d[h]&&(d[h]=v,r=!0)}}}else{Ec(e,a,u,d)&&(r=!0);let f;for(const c in p)(!a||!ze(a,c)&&((f=St(c))===c||!ze(a,f)))&&(o?n&&(n[c]!==void 0||n[f]!==void 0)&&(u[c]=Xn(o,p,c,void 0,e,!0)):delete u[c]);if(d!==p)for(const c in d)(!a||!ze(a,c))&&(delete d[c],r=!0)}r&&Yt(e,"set","$attrs")}function Ec(e,a,n,s){const[u,d]=e.propsOptions;let m=!1,p;if(a)for(let o in a){if(Ta(o))continue;const r=a[o];let f;u&&ze(u,f=ct(o))?!d||!d.includes(f)?n[f]=r:(p||(p={}))[f]=r:Xl(e.emitsOptions,o)||(!(o in s)||r!==s[o])&&(s[o]=r,m=!0)}if(d){const o=Ee(n),r=p||Ve;for(let f=0;f<d.length;f++){const c=d[f];n[c]=Xn(u,o,c,r[c],e,!ze(r,c))}}return m}function Xn(e,a,n,s,u,d){const m=e[n];if(m!=null){const p=ze(m,"default");if(p&&s===void 0){const o=m.default;if(m.type!==Function&&!m.skipFactory&&ve(o)){const{propsDefaults:r}=u;if(n in r)s=r[n];else{const f=Di(u);s=r[n]=o.call(null,a),f()}}else s=o}m[0]&&(d&&!p?s=!1:m[1]&&(s===""||s===St(n))&&(s=!0))}return s}function Rc(e,a,n=!1){const s=a.propsCache,u=s.get(e);if(u)return u;const d=e.props,m={},p=[];let o=!1;if(!ve(e)){const f=c=>{o=!0;const[h,v]=Rc(c,a,!0);Ye(m,h),v&&p.push(...v)};!n&&a.mixins.length&&a.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!d&&!o)return He(e)&&s.set(e,Gi),Gi;if(ce(d))for(let f=0;f<d.length;f++){const c=ct(d[f]);Fo(c)&&(m[c]=Ve)}else if(d)for(const f in d){const c=ct(f);if(Fo(c)){const h=d[f],v=m[c]=ce(h)||ve(h)?{type:h}:Ye({},h);if(v){const g=Ho(Boolean,v.type),y=Ho(String,v.type);v[0]=g>-1,v[1]=y<0||g<y,(g>-1||ze(v,"default"))&&p.push(c)}}}const r=[m,p];return He(e)&&s.set(e,r),r}function Fo(e){return e[0]!=="$"}function Vo(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function No(e,a){return Vo(e)===Vo(a)}function Ho(e,a){return ce(a)?a.findIndex(n=>No(n,e)):ve(a)&&No(a,e)?0:-1}const zc=e=>e[0]==="_"||e==="$stable",io=e=>ce(e)?e.map(Ct):[Ct(e)],sg=(e,a,n)=>{if(a._n)return a;const s=i((...u)=>io(a(...u)),n);return s._c=!1,s},Dc=(e,a,n)=>{const s=e._ctx;for(const u in e){if(zc(u))continue;const d=e[u];if(ve(d))a[u]=sg(u,d,s);else if(d!=null){const m=io(d);a[u]=()=>m}}},Pc=(e,a)=>{const n=io(a);e.slots.default=()=>n},og=(e,a)=>{if(e.vnode.shapeFlag&32){const n=a._;n?(e.slots=Ee(a),wl(a,"_",n)):Dc(a,e.slots={})}else e.slots={},a&&Pc(e,a);wl(e.slots,sn,1)},rg=(e,a,n)=>{const{vnode:s,slots:u}=e;let d=!0,m=Ve;if(s.shapeFlag&32){const p=a._;p?n&&p===1?d=!1:(Ye(u,a),!n&&p===1&&delete u._):(d=!a.$stable,Dc(a,u)),m=a}else a&&(Pc(e,a),m={default:1});if(d)for(const p in u)!zc(p)&&m[p]==null&&delete u[p]};function xl(e,a,n,s,u=!1){if(ce(e)){e.forEach((h,v)=>xl(h,a&&(ce(a)?a[v]:a),n,s,u));return}if(Bi(s)&&!u)return;const d=s.shapeFlag&4?on(s.component)||s.component.proxy:s.el,m=u?null:d,{i:p,r:o}=e,r=a&&a.r,f=p.refs===Ve?p.refs={}:p.refs,c=p.setupState;if(r!=null&&r!==o&&(Je(r)?(f[r]=null,ze(c,r)&&(c[r]=null)):nt(r)&&(r.value=null)),ve(o))Jt(o,p,12,[m,f]);else{const h=Je(o),v=nt(o),g=e.f;if(h||v){const y=()=>{if(g){const A=h?ze(c,o)?c[o]:f[o]:o.value;u?ce(A)&&Rs(A,d):ce(A)?A.includes(d)||A.push(d):h?(f[o]=[d],ze(c,o)&&(c[o]=f[o])):(o.value=[d],e.k&&(f[e.k]=o.value))}else h?(f[o]=m,ze(c,o)&&(c[o]=m)):v&&(o.value=m,e.k&&(f[e.k]=m))};u||g?y():(y.id=-1,at(y,n))}}}let ei=!1;const ug=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",dg=e=>e.namespaceURI.includes("MathML"),cl=e=>{if(ug(e))return"svg";if(dg(e))return"mathml"},ml=e=>e.nodeType===8;function cg(e){const{mt:a,p:n,o:{patchProp:s,createText:u,nextSibling:d,parentNode:m,remove:p,insert:o,createComment:r}}=e,f=(w,$)=>{if(!$.hasChildNodes()){n(null,w,$),$l(),$._vnode=w;return}ei=!1,c($.firstChild,w,null,null,null),$l(),$._vnode=w,ei&&console.error("Hydration completed but contains mismatches.")},c=(w,$,x,E,I,F=!1)=>{const P=ml(w)&&w.data==="[",L=()=>y(w,$,x,E,I,P),{type:J,ref:q,shapeFlag:de,patchFlag:$e}=$;let O=w.nodeType;$.el=w,$e===-2&&(F=!1,$.dynamicChildren=null);let Y=null;switch(J){case Ri:O!==3?$.children===""?(o($.el=u(""),m(w),w),Y=w):Y=L():(w.data!==$.children&&(ei=!0,w.data=$.children),Y=d(w));break;case ut:_(w)?(Y=d(w),B($.el=w.content.firstChild,w,x)):O!==8||P?Y=L():Y=d(w);break;case xi:if(P&&(w=d(w),O=w.nodeType),O===1||O===3){Y=w;const re=!$.children.length;for(let te=0;te<$.staticCount;te++)re&&($.children+=Y.nodeType===1?Y.outerHTML:Y.data),te===$.staticCount-1&&($.anchor=Y),Y=d(Y);return P?d(Y):Y}else L();break;case Se:P?Y=g(w,$,x,E,I,F):Y=L();break;default:if(de&1)(O!==1||$.type.toLowerCase()!==w.tagName.toLowerCase())&&!_(w)?Y=L():Y=h(w,$,x,E,I,F);else if(de&6){$.slotScopeIds=I;const re=m(w);if(P?Y=A(w):ml(w)&&w.data==="teleport start"?Y=A(w,w.data,"teleport end"):Y=d(w),a($,re,null,x,E,cl(re),F),Bi($)){let te;P?(te=t(Se),te.anchor=Y?Y.previousSibling:re.lastChild):te=w.nodeType===3?l(""):t("div"),te.el=w,$.component.subTree=te}}else de&64?O!==8?Y=L():Y=$.type.hydrate(w,$,x,E,I,F,e,v):de&128&&(Y=$.type.hydrate(w,$,x,E,cl(m(w)),I,F,e,c))}return q!=null&&xl(q,null,E,$),Y},h=(w,$,x,E,I,F)=>{F=F||!!$.dynamicChildren;const{type:P,props:L,patchFlag:J,shapeFlag:q,dirs:de,transition:$e}=$,O=P==="input"||P==="option";if(O||J!==-1){de&&Vt($,null,x,"created");let Y=!1;if(_(w)){Y=Vc(E,$e)&&x&&x.vnode.props&&x.vnode.props.appear;const te=w.content.firstChild;Y&&$e.beforeEnter(te),B(te,w,x),$.el=w=te}if(q&16&&!(L&&(L.innerHTML||L.textContent))){let te=v(w.firstChild,$,w,x,E,I,F);for(;te;){ei=!0;const xe=te;te=te.nextSibling,p(xe)}}else q&8&&w.textContent!==$.children&&(ei=!0,w.textContent=$.children);if(L)if(O||!F||J&48)for(const te in L)(O&&(te.endsWith("value")||te==="indeterminate")||Ka(te)&&!Ta(te)||te[0]===".")&&s(w,te,null,L[te],void 0,void 0,x);else L.onClick&&s(w,"onClick",null,L.onClick,void 0,void 0,x);let re;(re=L&&L.onVnodeBeforeMount)&&pt(re,x,$),de&&Vt($,null,x,"beforeMount"),((re=L&&L.onVnodeMounted)||de||Y)&&cc(()=>{re&&pt(re,x,$),Y&&$e.enter(w),de&&Vt($,null,x,"mounted")},E)}return w.nextSibling},v=(w,$,x,E,I,F,P)=>{P=P||!!$.dynamicChildren;const L=$.children,J=L.length;for(let q=0;q<J;q++){const de=P?L[q]:L[q]=Ct(L[q]);if(w)w=c(w,de,E,I,F,P);else{if(de.type===Ri&&!de.children)continue;ei=!0,n(null,de,x,null,E,I,cl(x),F)}}return w},g=(w,$,x,E,I,F)=>{const{slotScopeIds:P}=$;P&&(I=I?I.concat(P):P);const L=m(w),J=v(d(w),$,L,x,E,I,F);return J&&ml(J)&&J.data==="]"?d($.anchor=J):(ei=!0,o($.anchor=r("]"),L,J),J)},y=(w,$,x,E,I,F)=>{if(ei=!0,$.el=null,F){const J=A(w);for(;;){const q=d(w);if(q&&q!==J)p(q);else break}}const P=d(w),L=m(w);return p(w),n(null,$,L,P,x,E,cl(L),I),P},A=(w,$="[",x="]")=>{let E=0;for(;w;)if(w=d(w),w&&ml(w)&&(w.data===$&&E++,w.data===x)){if(E===0)return d(w);E--}return w},B=(w,$,x)=>{const E=$.parentNode;E&&E.replaceChild(w,$);let I=x;for(;I;)I.vnode.el===$&&(I.vnode.el=I.subTree.el=w),I=I.parent},_=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[f,c]}const at=cc;function Mc(e){return Fc(e)}function Ic(e){return Fc(e,cg)}function Fc(e,a){const n=Ed();n.__VUE__=!0;const{insert:s,remove:u,patchProp:d,createElement:m,createText:p,createComment:o,setText:r,setElementText:f,parentNode:c,nextSibling:h,setScopeId:v=ft,insertStaticContent:g}=e,y=(T,D,N,W=null,K=null,ae=null,oe=void 0,ie=null,le=!!D.dynamicChildren)=>{if(T===D)return;T&&!Pt(T,D)&&(W=ne(T),Le(T,K,ae,!0),T=null),D.patchFlag===-2&&(le=!1,D.dynamicChildren=null);const{type:Q,ref:ue,shapeFlag:_e}=D;switch(Q){case Ri:A(T,D,N,W);break;case ut:B(T,D,N,W);break;case xi:T==null&&_(D,N,W,oe);break;case Se:q(T,D,N,W,K,ae,oe,ie,le);break;default:_e&1?x(T,D,N,W,K,ae,oe,ie,le):_e&6?de(T,D,N,W,K,ae,oe,ie,le):(_e&64||_e&128)&&Q.process(T,D,N,W,K,ae,oe,ie,le,Fe)}ue!=null&&K&&xl(ue,T&&T.ref,ae,D||T,!D)},A=(T,D,N,W)=>{if(T==null)s(D.el=p(D.children),N,W);else{const K=D.el=T.el;D.children!==T.children&&r(K,D.children)}},B=(T,D,N,W)=>{T==null?s(D.el=o(D.children||""),N,W):D.el=T.el},_=(T,D,N,W)=>{[T.el,T.anchor]=g(T.children,D,N,W,T.el,T.anchor)},w=({el:T,anchor:D},N,W)=>{let K;for(;T&&T!==D;)K=h(T),s(T,N,W),T=K;s(D,N,W)},$=({el:T,anchor:D})=>{let N;for(;T&&T!==D;)N=h(T),u(T),T=N;u(D)},x=(T,D,N,W,K,ae,oe,ie,le)=>{D.type==="svg"?oe="svg":D.type==="math"&&(oe="mathml"),T==null?E(D,N,W,K,ae,oe,ie,le):P(T,D,K,ae,oe,ie,le)},E=(T,D,N,W,K,ae,oe,ie)=>{let le,Q;const{props:ue,shapeFlag:_e,transition:he,dirs:Ce}=T;if(le=T.el=m(T.type,ae,ue&&ue.is,ue),_e&8?f(le,T.children):_e&16&&F(T.children,le,null,W,K,wn(T,ae),oe,ie),Ce&&Vt(T,null,W,"created"),I(le,T,T.scopeId,oe,W),ue){for(const Ne in ue)Ne!=="value"&&!Ta(Ne)&&d(le,Ne,null,ue[Ne],ae,T.children,W,K,se);"value"in ue&&d(le,"value",null,ue.value,ae),(Q=ue.onVnodeBeforeMount)&&pt(Q,W,T)}Ce&&Vt(T,null,W,"beforeMount");const Te=Vc(K,he);Te&&he.beforeEnter(le),s(le,D,N),((Q=ue&&ue.onVnodeMounted)||Te||Ce)&&at(()=>{Q&&pt(Q,W,T),Te&&he.enter(le),Ce&&Vt(T,null,W,"mounted")},K)},I=(T,D,N,W,K)=>{if(N&&v(T,N),W)for(let ae=0;ae<W.length;ae++)v(T,W[ae]);if(K){let ae=K.subTree;if(D===ae){const oe=K.vnode;I(T,oe,oe.scopeId,oe.slotScopeIds,K.parent)}}},F=(T,D,N,W,K,ae,oe,ie,le=0)=>{for(let Q=le;Q<T.length;Q++){const ue=T[Q]=ie?si(T[Q]):Ct(T[Q]);y(null,ue,D,N,W,K,ae,oe,ie)}},P=(T,D,N,W,K,ae,oe)=>{const ie=D.el=T.el;let{patchFlag:le,dynamicChildren:Q,dirs:ue}=D;le|=T.patchFlag&16;const _e=T.props||Ve,he=D.props||Ve;let Ce;if(N&&bi(N,!1),(Ce=he.onVnodeBeforeUpdate)&&pt(Ce,N,D,T),ue&&Vt(D,T,N,"beforeUpdate"),N&&bi(N,!0),Q?L(T.dynamicChildren,Q,ie,N,W,wn(D,K),ae):oe||te(T,D,ie,null,N,W,wn(D,K),ae,!1),le>0){if(le&16)J(ie,D,_e,he,N,W,K);else if(le&2&&_e.class!==he.class&&d(ie,"class",null,he.class,K),le&4&&d(ie,"style",_e.style,he.style,K),le&8){const Te=D.dynamicProps;for(let Ne=0;Ne<Te.length;Ne++){const Ge=Te[Ne],tt=_e[Ge],zt=he[Ge];(zt!==tt||Ge==="value")&&d(ie,Ge,tt,zt,K,T.children,N,W,se)}}le&1&&T.children!==D.children&&f(ie,D.children)}else!oe&&Q==null&&J(ie,D,_e,he,N,W,K);((Ce=he.onVnodeUpdated)||ue)&&at(()=>{Ce&&pt(Ce,N,D,T),ue&&Vt(D,T,N,"updated")},W)},L=(T,D,N,W,K,ae,oe)=>{for(let ie=0;ie<D.length;ie++){const le=T[ie],Q=D[ie],ue=le.el&&(le.type===Se||!Pt(le,Q)||le.shapeFlag&70)?c(le.el):N;y(le,Q,ue,null,W,K,ae,oe,!0)}},J=(T,D,N,W,K,ae,oe)=>{if(N!==W){if(N!==Ve)for(const ie in N)!Ta(ie)&&!(ie in W)&&d(T,ie,N[ie],null,oe,D.children,K,ae,se);for(const ie in W){if(Ta(ie))continue;const le=W[ie],Q=N[ie];le!==Q&&ie!=="value"&&d(T,ie,Q,le,oe,D.children,K,ae,se)}"value"in W&&d(T,"value",N.value,W.value,oe)}},q=(T,D,N,W,K,ae,oe,ie,le)=>{const Q=D.el=T?T.el:p(""),ue=D.anchor=T?T.anchor:p("");let{patchFlag:_e,dynamicChildren:he,slotScopeIds:Ce}=D;Ce&&(ie=ie?ie.concat(Ce):Ce),T==null?(s(Q,N,W),s(ue,N,W),F(D.children||[],N,ue,K,ae,oe,ie,le)):_e>0&&_e&64&&he&&T.dynamicChildren?(L(T.dynamicChildren,he,N,K,ae,oe,ie),(D.key!=null||K&&D===K.subTree)&&ao(T,D,!0)):te(T,D,N,ue,K,ae,oe,ie,le)},de=(T,D,N,W,K,ae,oe,ie,le)=>{D.slotScopeIds=ie,T==null?D.shapeFlag&512?K.ctx.activate(D,N,W,oe,le):$e(D,N,W,K,ae,oe,le):O(T,D,le)},$e=(T,D,N,W,K,ae,oe)=>{const ie=T.component=Uc(T,W,K);if(tl(T)&&(ie.ctx.renderer=Fe),Yc(ie),ie.asyncDep){if(K&&K.registerDep(ie,Y),!T.el){const le=ie.subTree=t(ut);B(null,le,D,N)}}else Y(ie,T,D,N,K,ae,oe)},O=(T,D,N)=>{const W=D.component=T.component;if(vf(T,D,N))if(W.asyncDep&&!W.asyncResolved){re(W,D,N);return}else W.next=D,mf(W.update),W.effect.dirty=!0,W.update();else D.el=T.el,W.vnode=D},Y=(T,D,N,W,K,ae,oe)=>{const ie=()=>{if(T.isMounted){let{next:ue,bu:_e,u:he,parent:Ce,vnode:Te}=T;{const Li=Nc(T);if(Li){ue&&(ue.el=Te.el,re(T,ue,oe)),Li.asyncDep.then(()=>{T.isUnmounted||ie()});return}}let Ne=ue,Ge;bi(T,!1),ue?(ue.el=Te.el,re(T,ue,oe)):ue=Te,_e&&Ji(_e),(Ge=ue.props&&ue.props.onVnodeBeforeUpdate)&&pt(Ge,Ce,ue,Te),bi(T,!0);const tt=vl(T),zt=T.subTree;T.subTree=tt,y(zt,tt,c(zt.el),ne(zt),T,K,ae),ue.el=tt.el,Ne===null&&Gs(T,tt.el),he&&at(he,K),(Ge=ue.props&&ue.props.onVnodeUpdated)&&at(()=>pt(Ge,Ce,ue,Te),K)}else{let ue;const{el:_e,props:he}=D,{bm:Ce,m:Te,parent:Ne}=T,Ge=Bi(D);if(bi(T,!1),Ce&&Ji(Ce),!Ge&&(ue=he&&he.onVnodeBeforeMount)&&pt(ue,Ne,D),bi(T,!0),_e&&ke){const tt=()=>{T.subTree=vl(T),ke(_e,T.subTree,T,K,null)};Ge?D.type.__asyncLoader().then(()=>!T.isUnmounted&&tt()):tt()}else{const tt=T.subTree=vl(T);y(null,tt,N,W,T,K,ae),D.el=tt.el}if(Te&&at(Te,K),!Ge&&(ue=he&&he.onVnodeMounted)){const tt=D;at(()=>pt(ue,Ne,tt),K)}(D.shapeFlag&256||Ne&&Bi(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&T.a&&at(T.a,K),T.isMounted=!0,D=N=W=null}},le=T.effect=new aa(ie,ft,()=>Kl(Q),T.scope),Q=T.update=()=>{le.dirty&&le.run()};Q.id=T.uid,bi(T,!0),Q()},re=(T,D,N)=>{D.component=T;const W=T.vnode.props;T.vnode=D,T.next=null,ng(T,D.props,W,N),rg(T,D.children,N),Mi(),To(T),Ii()},te=(T,D,N,W,K,ae,oe,ie,le=!1)=>{const Q=T&&T.children,ue=T?T.shapeFlag:0,_e=D.children,{patchFlag:he,shapeFlag:Ce}=D;if(he>0){if(he&128){Ue(Q,_e,N,W,K,ae,oe,ie,le);return}else if(he&256){xe(Q,_e,N,W,K,ae,oe,ie,le);return}}Ce&8?(ue&16&&se(Q,K,ae),_e!==Q&&f(N,_e)):ue&16?Ce&16?Ue(Q,_e,N,W,K,ae,oe,ie,le):se(Q,K,ae,!0):(ue&8&&f(N,""),Ce&16&&F(_e,N,W,K,ae,oe,ie,le))},xe=(T,D,N,W,K,ae,oe,ie,le)=>{T=T||Gi,D=D||Gi;const Q=T.length,ue=D.length,_e=Math.min(Q,ue);let he;for(he=0;he<_e;he++){const Ce=D[he]=le?si(D[he]):Ct(D[he]);y(T[he],Ce,N,null,K,ae,oe,ie,le)}Q>ue?se(T,K,ae,!0,!1,_e):F(D,N,W,K,ae,oe,ie,le,_e)},Ue=(T,D,N,W,K,ae,oe,ie,le)=>{let Q=0;const ue=D.length;let _e=T.length-1,he=ue-1;for(;Q<=_e&&Q<=he;){const Ce=T[Q],Te=D[Q]=le?si(D[Q]):Ct(D[Q]);if(Pt(Ce,Te))y(Ce,Te,N,null,K,ae,oe,ie,le);else break;Q++}for(;Q<=_e&&Q<=he;){const Ce=T[_e],Te=D[he]=le?si(D[he]):Ct(D[he]);if(Pt(Ce,Te))y(Ce,Te,N,null,K,ae,oe,ie,le);else break;_e--,he--}if(Q>_e){if(Q<=he){const Ce=he+1,Te=Ce<ue?D[Ce].el:W;for(;Q<=he;)y(null,D[Q]=le?si(D[Q]):Ct(D[Q]),N,Te,K,ae,oe,ie,le),Q++}}else if(Q>he)for(;Q<=_e;)Le(T[Q],K,ae,!0),Q++;else{const Ce=Q,Te=Q,Ne=new Map;for(Q=Te;Q<=he;Q++){const vt=D[Q]=le?si(D[Q]):Ct(D[Q]);vt.key!=null&&Ne.set(vt.key,Q)}let Ge,tt=0;const zt=he-Te+1;let Li=!1,_o=0;const _a=new Array(zt);for(Q=0;Q<zt;Q++)_a[Q]=0;for(Q=Ce;Q<=_e;Q++){const vt=T[Q];if(tt>=zt){Le(vt,K,ae,!0);continue}let Ft;if(vt.key!=null)Ft=Ne.get(vt.key);else for(Ge=Te;Ge<=he;Ge++)if(_a[Ge-Te]===0&&Pt(vt,D[Ge])){Ft=Ge;break}Ft===void 0?Le(vt,K,ae,!0):(_a[Ft-Te]=Q+1,Ft>=_o?_o=Ft:Li=!0,y(vt,D[Ft],N,null,K,ae,oe,ie,le),tt++)}const bo=Li?mg(_a):Gi;for(Ge=bo.length-1,Q=zt-1;Q>=0;Q--){const vt=Te+Q,Ft=D[vt],vo=vt+1<ue?D[vt+1].el:W;_a[Q]===0?y(null,Ft,N,vo,K,ae,oe,ie,le):Li&&(Ge<0||Q!==bo[Ge]?et(Ft,N,vo,2):Ge--)}}},et=(T,D,N,W,K=null)=>{const{el:ae,type:oe,transition:ie,children:le,shapeFlag:Q}=T;if(Q&6){et(T.component.subTree,D,N,W);return}if(Q&128){T.suspense.move(D,N,W);return}if(Q&64){oe.move(T,D,N,Fe);return}if(oe===Se){s(ae,D,N);for(let _e=0;_e<le.length;_e++)et(le[_e],D,N,W);s(T.anchor,D,N);return}if(oe===xi){w(T,D,N);return}if(W!==2&&Q&1&&ie)if(W===0)ie.beforeEnter(ae),s(ae,D,N),at(()=>ie.enter(ae),K);else{const{leave:_e,delayLeave:he,afterLeave:Ce}=ie,Te=()=>s(ae,D,N),Ne=()=>{_e(ae,()=>{Te(),Ce&&Ce()})};he?he(ae,Te,Ne):Ne()}else s(ae,D,N)},Le=(T,D,N,W=!1,K=!1)=>{const{type:ae,props:oe,ref:ie,children:le,dynamicChildren:Q,shapeFlag:ue,patchFlag:_e,dirs:he}=T;if(ie!=null&&xl(ie,null,N,T,!0),ue&256){D.ctx.deactivate(T);return}const Ce=ue&1&&he,Te=!Bi(T);let Ne;if(Te&&(Ne=oe&&oe.onVnodeBeforeUnmount)&&pt(Ne,D,T),ue&6)U(T.component,N,W);else{if(ue&128){T.suspense.unmount(N,W);return}Ce&&Vt(T,null,D,"beforeUnmount"),ue&64?T.type.remove(T,D,N,K,Fe,W):Q&&(ae!==Se||_e>0&&_e&64)?se(Q,D,N,!1,!0):(ae===Se&&_e&384||!K&&ue&16)&&se(le,D,N),W&&jt(T)}(Te&&(Ne=oe&&oe.onVnodeUnmounted)||Ce)&&at(()=>{Ne&&pt(Ne,D,T),Ce&&Vt(T,null,D,"unmounted")},N)},jt=T=>{const{type:D,el:N,anchor:W,transition:K}=T;if(D===Se){$t(N,W);return}if(D===xi){$(T);return}const ae=()=>{u(N),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(T.shapeFlag&1&&K&&!K.persisted){const{leave:oe,delayLeave:ie}=K,le=()=>oe(N,ae);ie?ie(T.el,ae,le):le()}else ae()},$t=(T,D)=>{let N;for(;T!==D;)N=h(T),u(T),T=N;u(D)},U=(T,D,N)=>{const{bum:W,scope:K,update:ae,subTree:oe,um:ie}=T;W&&Ji(W),K.stop(),ae&&(ae.active=!1,Le(oe,T,D,N)),ie&&at(ie,D),at(()=>{T.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},se=(T,D,N,W=!1,K=!1,ae=0)=>{for(let oe=ae;oe<T.length;oe++)Le(T[oe],D,N,W,K)},ne=T=>T.shapeFlag&6?ne(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let fe=!1;const Ie=(T,D,N)=>{T==null?D._vnode&&Le(D._vnode,null,null,!0):y(D._vnode||null,T,D,null,null,null,N),fe||(fe=!0,To(),$l(),fe=!1),D._vnode=T},Fe={p:y,um:Le,m:et,r:jt,mt:$e,mc:F,pc:te,pbc:L,n:ne,o:e};let Ae,ke;return a&&([Ae,ke]=a(Fe)),{render:Ie,hydrate:Ae,createApp:ig(Ie,Ae)}}function wn({type:e,props:a},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:n}function bi({effect:e,update:a},n){e.allowRecurse=a.allowRecurse=n}function Vc(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function ao(e,a,n=!1){const s=e.children,u=a.children;if(ce(s)&&ce(u))for(let d=0;d<s.length;d++){const m=s[d];let p=u[d];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=u[d]=si(u[d]),p.el=m.el),n||ao(m,p)),p.type===Ri&&(p.el=m.el)}}function mg(e){const a=e.slice(),n=[0];let s,u,d,m,p;const o=e.length;for(s=0;s<o;s++){const r=e[s];if(r!==0){if(u=n[n.length-1],e[u]<r){a[s]=u,n.push(s);continue}for(d=0,m=n.length-1;d<m;)p=d+m>>1,e[n[p]]<r?d=p+1:m=p;r<e[n[d]]&&(d>0&&(a[s]=n[d-1]),n[d]=s)}}for(d=n.length,m=n[d-1];d-- >0;)n[d]=m,m=a[m];return n}function Nc(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Nc(a)}const pg=e=>e.__isTeleport,za=e=>e&&(e.disabled||e.disabled===""),Lo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Oo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Qn=(e,a)=>{const n=e&&e.to;return Je(n)?a?a(n):null:n},fg={name:"Teleport",__isTeleport:!0,process(e,a,n,s,u,d,m,p,o,r){const{mc:f,pc:c,pbc:h,o:{insert:v,querySelector:g,createText:y,createComment:A}}=r,B=za(a.props);let{shapeFlag:_,children:w,dynamicChildren:$}=a;if(e==null){const x=a.el=y(""),E=a.anchor=y("");v(x,n,s),v(E,n,s);const I=a.target=Qn(a.props,g),F=a.targetAnchor=y("");I&&(v(F,I),m==="svg"||Lo(I)?m="svg":(m==="mathml"||Oo(I))&&(m="mathml"));const P=(L,J)=>{_&16&&f(w,L,J,u,d,m,p,o)};B?P(n,E):I&&P(I,F)}else{a.el=e.el;const x=a.anchor=e.anchor,E=a.target=e.target,I=a.targetAnchor=e.targetAnchor,F=za(e.props),P=F?n:E,L=F?x:I;if(m==="svg"||Lo(E)?m="svg":(m==="mathml"||Oo(E))&&(m="mathml"),$?(h(e.dynamicChildren,$,P,u,d,m,p),ao(e,a,!0)):o||c(e,a,P,L,u,d,m,p,!1),B)F?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):pl(a,n,x,r,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const J=a.target=Qn(a.props,g);J&&pl(a,J,null,r,0)}else F&&pl(a,E,I,r,1)}Hc(a)},remove(e,a,n,s,{um:u,o:{remove:d}},m){const{shapeFlag:p,children:o,anchor:r,targetAnchor:f,target:c,props:h}=e;if(c&&d(f),m&&d(r),p&16){const v=m||!za(h);for(let g=0;g<o.length;g++){const y=o[g];u(y,a,n,v,!!y.dynamicChildren)}}},move:pl,hydrate:gg};function pl(e,a,n,{o:{insert:s},m:u},d=2){d===0&&s(e.targetAnchor,a,n);const{el:m,anchor:p,shapeFlag:o,children:r,props:f}=e,c=d===2;if(c&&s(m,a,n),(!c||za(f))&&o&16)for(let h=0;h<r.length;h++)u(r[h],a,n,2);c&&s(p,a,n)}function gg(e,a,n,s,u,d,{o:{nextSibling:m,parentNode:p,querySelector:o}},r){const f=a.target=Qn(a.props,o);if(f){const c=f._lpa||f.firstChild;if(a.shapeFlag&16)if(za(a.props))a.anchor=r(m(e),a,p(e),n,s,u,d),a.targetAnchor=c;else{a.anchor=m(e);let h=c;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,f._lpa=a.targetAnchor&&m(a.targetAnchor);break}r(c,a,f,n,s,u,d)}Hc(a)}return a.anchor&&m(a.anchor)}const nn=fg;function Hc(e){const a=e.ctx;if(a&&a.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",a.uid),n=n.nextSibling;a.ut()}}const Se=Symbol.for("v-fgt"),Ri=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),xi=Symbol.for("v-stc"),Da=[];let gt=null;function z(e=!1){Da.push(gt=e?null:[])}function Lc(){Da.pop(),gt=Da[Da.length-1]||null}let zi=1;function Zn(e){zi+=e}function Oc(e){return e.dynamicChildren=zi>0?gt||Gi:null,Lc(),zi>0&&gt&&gt.push(e),e}function pe(e,a,n,s,u,d){return Oc(C(e,a,n,s,u,d,!0))}function H(e,a,n,s,u){return Oc(t(e,a,n,s,u,!0))}function Rt(e){return e?e.__v_isVNode===!0:!1}function Pt(e,a){return e.type===a.type&&e.key===a.key}function hg(e){}const sn="__vInternal",jc=({key:e})=>e??null,yl=({ref:e,ref_key:a,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Je(e)||nt(e)||ve(e)?{i:Xe,r:e,k:a,f:!!n}:e:null);function C(e,a=null,n=null,s=0,u=null,d=e===Se?0:1,m=!1,p=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&jc(a),ref:a&&yl(a),scopeId:Ql,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:s,dynamicProps:u,dynamicChildren:null,appContext:null,ctx:Xe};return p?(no(o,n),d&128&&e.normalize(o)):n&&(o.shapeFlag|=Je(n)?8:16),zi>0&&!m&&gt&&(o.patchFlag>0||d&6)&&o.patchFlag!==32&&gt.push(o),o}const t=_g;function _g(e,a=null,n=null,s=0,u=null,d=!1){if((!e||e===rc)&&(e=ut),Rt(e)){const p=Ht(e,a,!0);return n&&no(p,n),zi>0&&!d&&gt&&(p.shapeFlag&6?gt[gt.indexOf(e)]=p:gt.push(p)),p.patchFlag|=-2,p}if(kg(e)&&(e=e.__vccOpts),a){a=qc(a);let{class:p,style:o}=a;p&&!Je(p)&&(a.class=Qa(p)),He(o)&&(Hs(o)&&!ce(o)&&(o=Ye({},o)),a.style=pa(o))}const m=Je(e)?1:dc(e)?128:pg(e)?64:He(e)?4:ve(e)?2:0;return C(e,a,n,s,u,m,d,!0)}function qc(e){return e?Hs(e)||sn in e?Ye({},e):e:null}function Ht(e,a,n=!1){const{props:s,ref:u,patchFlag:d,children:m}=e,p=a?Ni(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&jc(p),ref:a&&a.ref?n&&u?ce(u)?u.concat(yl(a)):[u,yl(a)]:yl(a):u,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Se?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function l(e=" ",a=0){return t(Ri,null,e,a)}function bg(e,a){const n=t(xi,null,e);return n.staticCount=a,n}function lo(e="",a=!1){return a?(z(),H(ut,null,e)):t(ut,null,e)}function Ct(e){return e==null||typeof e=="boolean"?t(ut):ce(e)?t(Se,null,e.slice()):typeof e=="object"?si(e):t(Ri,null,String(e))}function si(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function no(e,a){let n=0;const{shapeFlag:s}=e;if(a==null)a=null;else if(ce(a))n=16;else if(typeof a=="object")if(s&65){const u=a.default;u&&(u._c&&(u._d=!1),no(e,u()),u._c&&(u._d=!0));return}else{n=32;const u=a._;!u&&!(sn in a)?a._ctx=Xe:u===3&&Xe&&(Xe.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else ve(a)?(a={default:a,_ctx:Xe},n=32):(a=String(a),s&64?(n=16,a=[l(a)]):n=8);e.children=a,e.shapeFlag|=n}function Ni(...e){const a={};for(let n=0;n<e.length;n++){const s=e[n];for(const u in s)if(u==="class")a.class!==s.class&&(a.class=Qa([a.class,s.class]));else if(u==="style")a.style=pa([a.style,s.style]);else if(Ka(u)){const d=a[u],m=s[u];m&&d!==m&&!(ce(d)&&d.includes(m))&&(a[u]=d?[].concat(d,m):m)}else u!==""&&(a[u]=s[u])}return a}function pt(e,a,n,s=null){At(e,a,7,[n,s])}const vg=Tc();let yg=0;function Uc(e,a,n){const s=e.type,u=(a?a.appContext:e.appContext)||vg,d={uid:yg++,vnode:e,type:s,parent:a,appContext:u,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(u.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(s,u),emitsOptions:nc(s,u),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=ff.bind(null,d),e.ce&&e.ce(d),d}let Qe=null;const Ot=()=>Qe||Xe;let Tl,es;{const e=Ed(),a=(n,s)=>{let u;return(u=e[n])||(u=e[n]=[]),u.push(s),d=>{u.length>1?u.forEach(m=>m(d)):u[0](d)}};Tl=a("__VUE_INSTANCE_SETTERS__",n=>Qe=n),es=a("__VUE_SSR_SETTERS__",n=>il=n)}const Di=e=>{const a=Qe;return Tl(e),e.scope.on(),()=>{e.scope.off(),Tl(a)}},ts=()=>{Qe&&Qe.scope.off(),Tl(null)};function Gc(e){return e.vnode.shapeFlag&4}let il=!1;function Yc(e,a=!1){a&&es(a);const{props:n,children:s}=e.vnode,u=Gc(e);lg(e,n,u,a),og(e,s);const d=u?Cg(e,a):void 0;return a&&es(!1),d}function Cg(e,a){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ls(new Proxy(e.ctx,Jn));const{setup:s}=n;if(s){const u=e.setupContext=s.length>1?Wc(e):null,d=Di(e);Mi();const m=Jt(s,e,0,[e.props,u]);if(Ii(),d(),zs(m)){if(m.then(ts,ts),a)return m.then(p=>{is(e,p,a)}).catch(p=>{Fi(p,e,0)});e.asyncDep=m}else is(e,m,a)}else Jc(e,a)}function is(e,a,n){ve(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:He(a)&&(e.setupState=qs(a)),Jc(e,n)}let El,as;function wg(e){El=e,as=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,If))}}const Sg=()=>!El;function Jc(e,a,n){const s=e.type;if(!e.render){if(!a&&El&&!s.render){const u=s.template||to(e).template;if(u){const{isCustomElement:d,compilerOptions:m}=e.appContext.config,{delimiters:p,compilerOptions:o}=s,r=Ye(Ye({isCustomElement:d,delimiters:p},m),o);s.render=El(u,r)}}e.render=s.render||ft,as&&as(e)}{const u=Di(e);Mi();try{Kf(e)}finally{Ii(),u()}}}function Ag(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,n){return _t(e,"get","$attrs"),a[n]}}))}function Wc(e){const a=n=>{e.exposed=n||{}};return{get attrs(){return Ag(e)},slots:e.slots,emit:e.emit,expose:a}}function on(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qs(Ls(e.exposed)),{get(a,n){if(n in a)return a[n];if(n in Ra)return Ra[n](e)},has(a,n){return n in a||n in Ra}}))}function ls(e,a=!0){return ve(e)?e.displayName||e.name:e.name||a&&e.__name}function kg(e){return ve(e)&&"__vccOpts"in e}const V=(e,a)=>Wp(e,a,il);function $g(e,a,n=Ve){const s=Ot(),u=ct(a),d=St(a),m=Zd((o,r)=>{let f;return gc(()=>{const c=e[a];It(f,c)&&(f=c,r())}),{get(){return o(),n.get?n.get(f):f},set(c){const h=s.vnode.props;!(h&&(a in h||u in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${u}`in h||`onUpdate:${d}`in h))&&It(c,f)&&(f=c,r()),s.emit(`update:${a}`,n.set?n.set(c):c)}}}),p=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?e[p]||{}:m,done:!1}:{done:!0}}}},m}function G(e,a,n){const s=arguments.length;return s===2?He(a)&&!ce(a)?Rt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rt(n)&&(n=[n]),t(e,a,n))}function Bg(){}function xg(e,a,n,s){const u=n[s];if(u&&Kc(u,e))return u;const d=a();return d.memo=e.slice(),n[s]=d}function Kc(e,a){const n=e.memo;if(n.length!=a.length)return!1;for(let s=0;s<n.length;s++)if(It(n[s],a[s]))return!1;return zi>0&&gt&&gt.push(e),!0}const Xc="3.4.15",Tg=ft,Eg=uf,Rg=ji,zg=lc,Dg={createComponentInstance:Uc,setupComponent:Yc,renderComponentRoot:vl,setCurrentRenderingInstance:ja,isVNode:Rt,normalizeVNode:Ct},Pg=Dg,Mg=null,Ig=null,Fg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vg="http://www.w3.org/2000/svg",Ng="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,jo=oi&&oi.createElement("template"),Hg={insert:(e,a,n)=>{a.insertBefore(e,n||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,n,s)=>{const u=a==="svg"?oi.createElementNS(Vg,e):a==="mathml"?oi.createElementNS(Ng,e):oi.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&u.setAttribute("multiple",s.multiple),u},createText:e=>oi.createTextNode(e),createComment:e=>oi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>oi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,n,s,u,d){const m=n?n.previousSibling:a.lastChild;if(u&&(u===d||u.nextSibling))for(;a.insertBefore(u.cloneNode(!0),n),!(u===d||!(u=u.nextSibling)););else{jo.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const p=jo.content;if(s==="svg"||s==="mathml"){const o=p.firstChild;for(;o.firstChild;)p.appendChild(o.firstChild);p.removeChild(o)}a.insertBefore(p,n)}return[m?m.nextSibling:a.firstChild,n?n.previousSibling:a.lastChild]}},ti="transition",ba="animation",sa=Symbol("_vtc"),rn=(e,{slots:a})=>G(_c,Zc(e),a);rn.displayName="Transition";const Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lg=rn.props=Ye({},Qs,Qc),vi=(e,a=[])=>{ce(e)?e.forEach(n=>n(...a)):e&&e(...a)},qo=e=>e?ce(e)?e.some(a=>a.length>1):e.length>1:!1;function Zc(e){const a={};for(const q in e)q in Qc||(a[q]=e[q]);if(e.css===!1)return a;const{name:n="v",type:s,duration:u,enterFromClass:d=`${n}-enter-from`,enterActiveClass:m=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:o=d,appearActiveClass:r=m,appearToClass:f=p,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=Og(u),y=g&&g[0],A=g&&g[1],{onBeforeEnter:B,onEnter:_,onEnterCancelled:w,onLeave:$,onLeaveCancelled:x,onBeforeAppear:E=B,onAppear:I=_,onAppearCancelled:F=w}=a,P=(q,de,$e)=>{ai(q,de?f:p),ai(q,de?r:m),$e&&$e()},L=(q,de)=>{q._isLeaving=!1,ai(q,c),ai(q,v),ai(q,h),de&&de()},J=q=>(de,$e)=>{const O=q?I:_,Y=()=>P(de,q,$e);vi(O,[de,Y]),Uo(()=>{ai(de,q?o:d),qt(de,q?f:p),qo(O)||Go(de,s,y,Y)})};return Ye(a,{onBeforeEnter(q){vi(B,[q]),qt(q,d),qt(q,m)},onBeforeAppear(q){vi(E,[q]),qt(q,o),qt(q,r)},onEnter:J(!1),onAppear:J(!0),onLeave(q,de){q._isLeaving=!0;const $e=()=>L(q,de);qt(q,c),tm(),qt(q,h),Uo(()=>{q._isLeaving&&(ai(q,c),qt(q,v),qo($)||Go(q,s,A,$e))}),vi($,[q,$e])},onEnterCancelled(q){P(q,!1),vi(w,[q])},onAppearCancelled(q){P(q,!0),vi(F,[q])},onLeaveCancelled(q){L(q),vi(x,[q])}})}function Og(e){if(e==null)return null;if(He(e))return[Sn(e.enter),Sn(e.leave)];{const a=Sn(e);return[a,a]}}function Sn(e){return Sl(e)}function qt(e,a){a.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[sa]||(e[sa]=new Set)).add(a)}function ai(e,a){a.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[sa];n&&(n.delete(a),n.size||(e[sa]=void 0))}function Uo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let jg=0;function Go(e,a,n,s){const u=e._endId=++jg,d=()=>{u===e._endId&&s()};if(n)return setTimeout(d,n);const{type:m,timeout:p,propCount:o}=em(e,a);if(!m)return s();const r=m+"end";let f=0;const c=()=>{e.removeEventListener(r,h),d()},h=v=>{v.target===e&&++f>=o&&c()};setTimeout(()=>{f<o&&c()},p+1),e.addEventListener(r,h)}function em(e,a){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),u=s(`${ti}Delay`),d=s(`${ti}Duration`),m=Yo(u,d),p=s(`${ba}Delay`),o=s(`${ba}Duration`),r=Yo(p,o);let f=null,c=0,h=0;a===ti?m>0&&(f=ti,c=m,h=d.length):a===ba?r>0&&(f=ba,c=r,h=o.length):(c=Math.max(m,r),f=c>0?m>r?ti:ba:null,h=f?f===ti?d.length:o.length:0);const v=f===ti&&/\b(transform|all)(,|$)/.test(s(`${ti}Property`).toString());return{type:f,timeout:c,propCount:h,hasTransform:v}}function Yo(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((n,s)=>Jo(n)+Jo(e[s])))}function Jo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function tm(){return document.body.offsetHeight}function qg(e,a,n){const s=e[sa];s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?e.removeAttribute("class"):n?e.setAttribute("class",a):e.className=a}const so=Symbol("_vod"),im={beforeMount(e,{value:a},{transition:n}){e[so]=e.style.display==="none"?"":e.style.display,n&&a?n.beforeEnter(e):va(e,a)},mounted(e,{value:a},{transition:n}){n&&a&&n.enter(e)},updated(e,{value:a,oldValue:n},{transition:s}){!a!=!n&&(s?a?(s.beforeEnter(e),va(e,!0),s.enter(e)):s.leave(e,()=>{va(e,!1)}):va(e,a))},beforeUnmount(e,{value:a}){va(e,a)}};function va(e,a){e.style.display=a?e[so]:"none"}function Ug(){im.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const am=Symbol("");function Gg(e){const a=Ot();if(!a)return;const n=a.ut=(u=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>ss(d,u))},s=()=>{const u=e(a.proxy);ns(a.subTree,u),n(u)};fc(s),gi(()=>{const u=new MutationObserver(s);u.observe(a.subTree.el.parentNode,{childList:!0}),Vi(()=>u.disconnect())})}function ns(e,a){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ns(n.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ss(e.el,a);else if(e.type===Se)e.children.forEach(n=>ns(n,a));else if(e.type===xi){let{el:n,anchor:s}=e;for(;n&&(ss(n,a),n!==s);)n=n.nextSibling}}function ss(e,a){if(e.nodeType===1){const n=e.style;let s="";for(const u in a)n.setProperty(`--${u}`,a[u]),s+=`--${u}: ${a[u]};`;n[am]=s}}function Yg(e,a,n){const s=e.style,u=s.display,d=Je(n);if(n&&!d){if(a&&!Je(a))for(const m in a)n[m]==null&&os(s,m,"");for(const m in n)os(s,m,n[m])}else if(d){if(a!==n){const m=s[am];m&&(n+=";"+m),s.cssText=n}}else a&&e.removeAttribute("style");so in e&&(s.display=u)}const Wo=/\s*!important$/;function os(e,a,n){if(ce(n))n.forEach(s=>os(e,a,s));else if(n==null&&(n=""),a.startsWith("--"))e.setProperty(a,n);else{const s=Jg(e,a);Wo.test(n)?e.setProperty(St(s),n.replace(Wo,""),"important"):e[s]=n}}const Ko=["Webkit","Moz","ms"],An={};function Jg(e,a){const n=An[a];if(n)return n;let s=ct(a);if(s!=="filter"&&s in e)return An[a]=s;s=Xa(s);for(let u=0;u<Ko.length;u++){const d=Ko[u]+s;if(d in e)return An[a]=d}return a}const Xo="http://www.w3.org/1999/xlink";function Wg(e,a,n,s,u){if(s&&a.startsWith("xlink:"))n==null?e.removeAttributeNS(Xo,a.slice(6,a.length)):e.setAttributeNS(Xo,a,n);else{const d=Sp(a);n==null||d&&!Rd(n)?e.removeAttribute(a):e.setAttribute(a,d?"":n)}}function Kg(e,a,n,s,u,d,m){if(a==="innerHTML"||a==="textContent"){s&&m(s,u,d),e[a]=n??"";return}const p=e.tagName;if(a==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=n;const r=p==="OPTION"?e.getAttribute("value"):e.value,f=n??"";r!==f&&(e.value=f),n==null&&e.removeAttribute(a);return}let o=!1;if(n===""||n==null){const r=typeof e[a];r==="boolean"?n=Rd(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{e[a]=n}catch{}o&&e.removeAttribute(a)}function Gt(e,a,n,s){e.addEventListener(a,n,s)}function Xg(e,a,n,s){e.removeEventListener(a,n,s)}const Qo=Symbol("_vei");function Qg(e,a,n,s,u=null){const d=e[Qo]||(e[Qo]={}),m=d[a];if(s&&m)m.value=s;else{const[p,o]=Zg(a);if(s){const r=d[a]=ih(s,u);Gt(e,p,r,o)}else m&&(Xg(e,p,m,o),d[a]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function Zg(e){let a;if(Zo.test(e)){a={};let s;for(;s=e.match(Zo);)e=e.slice(0,e.length-s[0].length),a[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),a]}let kn=0;const eh=Promise.resolve(),th=()=>kn||(eh.then(()=>kn=0),kn=Date.now());function ih(e,a){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(ah(s,n.value),a,5,[s])};return n.value=e,n.attached=th(),n}function ah(e,a){if(ce(a)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},a.map(s=>u=>!u._stopped&&s&&s(u))}else return a}const er=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lh=(e,a,n,s,u,d,m,p,o)=>{const r=u==="svg";a==="class"?qg(e,s,r):a==="style"?Yg(e,n,s):Ka(a)?Es(a)||Qg(e,a,n,s,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):nh(e,a,s,r))?Kg(e,a,s,d,m,p,o):(a==="true-value"?e._trueValue=s:a==="false-value"&&(e._falseValue=s),Wg(e,a,s,r))};function nh(e,a,n,s){if(s)return!!(a==="innerHTML"||a==="textContent"||a in e&&er(a)&&ve(n));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const u=e.tagName;if(u==="IMG"||u==="VIDEO"||u==="CANVAS"||u==="SOURCE")return!1}return er(a)&&Je(n)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function lm(e,a){const n=R(e);class s extends un{constructor(d){super(n,d,a)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>lm(e,hm),oh=typeof HTMLElement<"u"?HTMLElement:class{};class un extends oh{constructor(a,n={},s){super(),this._def=a,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),fa(()=>{this._connected||(Dl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const u of s)this._setAttr(u.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(s,u=!1)=>{const{props:d,styles:m}=s;let p;if(d&&!ce(d))for(const o in d){const r=d[o];(r===Number||r&&r.type===Number)&&(o in this._props&&(this._props[o]=Sl(this._props[o])),(p||(p=Object.create(null)))[ct(o)]=!0)}this._numberProps=p,u&&this._resolveProps(s),this._applyStyles(m),this._update()},n=this._def.__asyncLoader;n?n().then(s=>a(s,!0)):a(this._def)}_resolveProps(a){const{props:n}=a,s=ce(n)?n:Object.keys(n||{});for(const u of Object.keys(this))u[0]!=="_"&&s.includes(u)&&this._setProp(u,this[u],!0,!1);for(const u of s.map(ct))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(d){this._setProp(u,d)}})}_setAttr(a){let n=this.getAttribute(a);const s=ct(a);this._numberProps&&this._numberProps[s]&&(n=Sl(n)),this._setProp(s,n,!1)}_getProp(a){return this._props[a]}_setProp(a,n,s=!0,u=!0){n!==this._props[a]&&(this._props[a]=n,u&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(St(a),""):typeof n=="string"||typeof n=="number"?this.setAttribute(St(a),n+""):n||this.removeAttribute(St(a))))}_update(){Dl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Ye({},this._props));return this._instance||(a.ce=n=>{this._instance=n,n.isCE=!0;const s=(d,m)=>{this.dispatchEvent(new CustomEvent(d,{detail:m}))};n.emit=(d,...m)=>{s(d,m),St(d)!==d&&s(St(d),m)};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof un){n.parent=u._instance,n.provides=u._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function rh(e="$style"){{const a=Ot();if(!a)return Ve;const n=a.type.__cssModules;if(!n)return Ve;const s=n[e];return s||Ve}}const nm=new WeakMap,sm=new WeakMap,Rl=Symbol("_moveCb"),tr=Symbol("_enterCb"),om={name:"TransitionGroup",props:Ye({},Lg,{tag:String,moveClass:String}),setup(e,{slots:a}){const n=Ot(),s=Xs();let u,d;return an(()=>{if(!u.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!ph(u[0].el,n.vnode.el,m))return;u.forEach(dh),u.forEach(ch);const p=u.filter(mh);tm(),p.forEach(o=>{const r=o.el,f=r.style;qt(r,m),f.transform=f.webkitTransform=f.transitionDuration="";const c=r[Rl]=h=>{h&&h.target!==r||(!h||/transform$/.test(h.propertyName))&&(r.removeEventListener("transitionend",c),r[Rl]=null,ai(r,m))};r.addEventListener("transitionend",c)})}),()=>{const m=Ee(e),p=Zc(m);let o=m.tag||Se;u=d,d=a.default?en(a.default()):[];for(let r=0;r<d.length;r++){const f=d[r];f.key!=null&&Ei(f,la(f,p,s,n))}if(u)for(let r=0;r<u.length;r++){const f=u[r];Ei(f,la(f,p,s,n)),nm.set(f,f.el.getBoundingClientRect())}return t(o,null,d)}}},uh=e=>delete e.mode;om.props;const rm=om;function dh(e){const a=e.el;a[Rl]&&a[Rl](),a[tr]&&a[tr]()}function ch(e){sm.set(e,e.el.getBoundingClientRect())}function mh(e){const a=nm.get(e),n=sm.get(e),s=a.left-n.left,u=a.top-n.top;if(s||u){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${s}px,${u}px)`,d.transitionDuration="0s",e}}function ph(e,a,n){const s=e.cloneNode(),u=e[sa];u&&u.forEach(p=>{p.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(s);const{hasTransform:m}=em(s);return d.removeChild(s),m}const fi=e=>{const a=e.props["onUpdate:modelValue"]||!1;return ce(a)?n=>Ji(a,n):a};function fh(e){e.target.composing=!0}function ir(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Et=Symbol("_assign"),zl={created(e,{modifiers:{lazy:a,trim:n,number:s}},u){e[Et]=fi(u);const d=s||u.props&&u.props.type==="number";Gt(e,a?"change":"input",m=>{if(m.target.composing)return;let p=e.value;n&&(p=p.trim()),d&&(p=Va(p)),e[Et](p)}),n&&Gt(e,"change",()=>{e.value=e.value.trim()}),a||(Gt(e,"compositionstart",fh),Gt(e,"compositionend",ir),Gt(e,"change",ir))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:n,trim:s,number:u}},d){if(e[Et]=fi(d),e.composing)return;const m=u||e.type==="number"?Va(e.value):e.value,p=a??"";m!==p&&(document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===p)||(e.value=p))}},oo={deep:!0,created(e,a,n){e[Et]=fi(n),Gt(e,"change",()=>{const s=e._modelValue,u=oa(e),d=e.checked,m=e[Et];if(ce(s)){const p=Gl(s,u),o=p!==-1;if(d&&!o)m(s.concat(u));else if(!d&&o){const r=[...s];r.splice(p,1),m(r)}}else if(Pi(s)){const p=new Set(s);d?p.add(u):p.delete(u),m(p)}else m(dm(e,d))})},mounted:ar,beforeUpdate(e,a,n){e[Et]=fi(n),ar(e,a,n)}};function ar(e,{value:a,oldValue:n},s){e._modelValue=a,ce(a)?e.checked=Gl(a,s.props.value)>-1:Pi(a)?e.checked=a.has(s.props.value):a!==n&&(e.checked=Wt(a,dm(e,!0)))}const ro={created(e,{value:a},n){e.checked=Wt(a,n.props.value),e[Et]=fi(n),Gt(e,"change",()=>{e[Et](oa(e))})},beforeUpdate(e,{value:a,oldValue:n},s){e[Et]=fi(s),a!==n&&(e.checked=Wt(a,s.props.value))}},um={deep:!0,created(e,{value:a,modifiers:{number:n}},s){const u=Pi(a);Gt(e,"change",()=>{const d=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>n?Va(oa(m)):oa(m));e[Et](e.multiple?u?new Set(d):d:d[0]),e._assigning=!0,fa(()=>{e._assigning=!1})}),e[Et]=fi(s)},mounted(e,{value:a,oldValue:n,modifiers:{number:s}}){lr(e,a,n,s)},beforeUpdate(e,a,n){e[Et]=fi(n)},updated(e,{value:a,oldValue:n,modifiers:{number:s}}){e._assigning||lr(e,a,n,s)}};function lr(e,a,n,s){const u=e.multiple,d=ce(a);if(!(u&&!d&&!Pi(a))&&!(d&&Wt(a,n))){for(let m=0,p=e.options.length;m<p;m++){const o=e.options[m],r=oa(o);if(u)if(d){const f=typeof r;f==="string"||f==="number"?o.selected=a.includes(s?Va(r):r):o.selected=Gl(a,r)>-1}else o.selected=a.has(r);else if(Wt(oa(o),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!u&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function oa(e){return"_value"in e?e._value:e.value}function dm(e,a){const n=a?"_trueValue":"_falseValue";return n in e?e[n]:a}const cm={created(e,a,n){fl(e,a,n,null,"created")},mounted(e,a,n){fl(e,a,n,null,"mounted")},beforeUpdate(e,a,n,s){fl(e,a,n,s,"beforeUpdate")},updated(e,a,n,s){fl(e,a,n,s,"updated")}};function mm(e,a){switch(e){case"SELECT":return um;case"TEXTAREA":return zl;default:switch(a){case"checkbox":return oo;case"radio":return ro;default:return zl}}}function fl(e,a,n,s,u){const m=mm(e.tagName,n.props&&n.props.type)[u];m&&m(e,a,n,s)}function gh(){zl.getSSRProps=({value:e})=>({value:e}),ro.getSSRProps=({value:e},a)=>{if(a.props&&Wt(a.props.value,e))return{checked:!0}},oo.getSSRProps=({value:e},a)=>{if(ce(e)){if(a.props&&Gl(e,a.props.value)>-1)return{checked:!0}}else if(Pi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},cm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const n=mm(a.type.toUpperCase(),a.props&&a.props.type);if(n.getSSRProps)return n.getSSRProps(e,a)}}const hh=["ctrl","shift","alt","meta"],_h={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>hh.some(n=>e[`${n}Key`]&&!a.includes(n))},kt=(e,a)=>{const n=e._withMods||(e._withMods={}),s=a.join(".");return n[s]||(n[s]=(u,...d)=>{for(let m=0;m<a.length;m++){const p=_h[a[m]];if(p&&p(u,a))return}return e(u,...d)})},bh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vh=(e,a)=>{const n=e._withKeys||(e._withKeys={}),s=a.join(".");return n[s]||(n[s]=u=>{if(!("key"in u))return;const d=St(u.key);if(a.some(m=>m===d||bh[m]===d))return e(u)})},pm=Ye({patchProp:lh},Hg);let Pa,nr=!1;function fm(){return Pa||(Pa=Mc(pm))}function gm(){return Pa=nr?Pa:Ic(pm),nr=!0,Pa}const Dl=(...e)=>{fm().render(...e)},hm=(...e)=>{gm().hydrate(...e)},_m=(...e)=>{const a=fm().createApp(...e),{mount:n}=a;return a.mount=s=>{const u=vm(s);if(!u)return;const d=a._component;!ve(d)&&!d.render&&!d.template&&(d.template=u.innerHTML),u.innerHTML="";const m=n(u,!1,bm(u));return u instanceof Element&&(u.removeAttribute("v-cloak"),u.setAttribute("data-v-app","")),m},a},yh=(...e)=>{const a=gm().createApp(...e),{mount:n}=a;return a.mount=s=>{const u=vm(s);if(u)return n(u,!0,bm(u))},a};function bm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vm(e){return Je(e)?document.querySelector(e):e}let sr=!1;const Ch=()=>{sr||(sr=!0,gh(),Ug())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wh=()=>{},Sh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_c,BaseTransitionPropsValidators:Qs,Comment:ut,DeprecationTypes:Fg,EffectScope:Ps,ErrorCodes:rf,ErrorTypeStrings:Eg,Fragment:Se,KeepAlive:zf,ReactiveEffect:aa,Static:xi,Suspense:wf,Teleport:nn,Text:Ri,TrackOpTypes:nf,Transition:rn,TransitionGroup:rm,TriggerOpTypes:sf,VueElement:un,assertNumber:of,callWithAsyncErrorHandling:At,callWithErrorHandling:Jt,camelize:ct,capitalize:Xa,cloneVNode:Ht,compatUtils:Ig,compile:wh,computed:V,createApp:_m,createBlock:H,createCommentVNode:lo,createElementBlock:pe,createElementVNode:C,createHydrationRenderer:Ic,createPropsRestProxy:Jf,createRenderer:Mc,createSSRApp:yh,createSlots:Pf,createStaticVNode:bg,createTextVNode:l,createVNode:t,customRef:Zd,defineAsyncComponent:Ef,defineComponent:R,defineCustomElement:lm,defineEmits:Vf,defineExpose:Nf,defineModel:Of,defineOptions:Hf,defineProps:Ff,defineSSRCustomElement:sh,defineSlots:Lf,devtools:Rg,effect:Bp,effectScope:kp,getCurrentInstance:Ot,getCurrentScope:Ms,getTransitionRawChildren:en,guardReactiveProps:qc,h:G,handleError:Fi,hasInjectionContext:ag,hydrate:hm,initCustomFormatter:Bg,initDirectivesForSSR:Ch,inject:Me,isMemoSame:Kc,isProxy:Hs,isReactive:$i,isReadonly:Ti,isRef:nt,isRuntimeOnly:Sg,isShallow:Na,isVNode:Rt,markRaw:Ls,mergeDefaults:Gf,mergeModels:Yf,mergeProps:Ni,nextTick:fa,normalizeClass:Qa,normalizeProps:Cp,normalizeStyle:pa,onActivated:Zs,onBeforeMount:yc,onBeforeUnmount:ln,onBeforeUpdate:Cc,onDeactivated:eo,onErrorCaptured:kc,onMounted:gi,onRenderTracked:Ac,onRenderTriggered:Sc,onScopeDispose:Pd,onServerPrefetch:wc,onUnmounted:Vi,onUpdated:an,openBlock:z,popScopeId:oc,provide:lt,proxyRefs:qs,pushScopeId:sc,queuePostFlushCb:kl,reactive:Kt,readonly:Ns,ref:j,registerRuntimeCompiler:wg,render:Dl,renderList:Ze,renderSlot:na,resolveComponent:b,resolveDirective:Zl,resolveDynamicComponent:uc,resolveFilter:Mg,resolveTransitionHooks:la,setBlockTracking:Zn,setDevtoolsHook:zg,setTransitionHooks:Ei,shallowReactive:Wd,shallowReadonly:Jp,shallowRef:Xd,ssrContextKey:mc,ssrUtils:Pg,stop:xp,toDisplayString:Be,toHandlerKey:Ea,toHandlers:Mf,toRaw:Ee,toRef:qn,toRefs:tf,toValue:Qp,transformVNodeArgs:hg,triggerRef:Xp,unref:S,useAttrs:Uf,useCssModule:rh,useCssVars:Gg,useModel:$g,useSSRContext:pc,useSlots:qf,useTransitionState:Xs,vModelCheckbox:oo,vModelDynamic:cm,vModelRadio:ro,vModelSelect:um,vModelText:zl,vShow:im,version:Xc,warn:Tg,watch:rt,watchEffect:Ks,watchPostEffect:fc,watchSyncEffect:gc,withAsyncContext:Wf,withCtx:i,withDefaults:jf,withDirectives:el,withKeys:vh,withMemo:xg,withModifiers:kt,withScopeId:gf},Symbol.toStringTag,{value:"Module"})),Ah=R({name:"App"}),ye=(e,a)=>{const n=e.__vccOpts||e;for(const[s,u]of a)n[s]=u;return n};function kh(e,a,n,s,u,d){const m=b("router-view");return z(),H(m)}const $h=ye(Ah,[["render",kh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const ym=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ga=e=>ym?Symbol(e):"_vr_"+e,Cm=ga("rvlm"),or=ga("rvd"),dn=ga("r"),uo=ga("rl"),rs=ga("rvl"),qi=typeof window<"u";function Bh(e){return e.__esModule||ym&&e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function $n(e,a){const n={};for(const s in a){const u=a[s];n[s]=Array.isArray(u)?u.map(e):e(u)}return n}const Ma=()=>{},xh=/\/$/,Th=e=>e.replace(xh,"");function Bn(e,a,n="/"){let s,u={},d="",m="";const p=a.indexOf("?"),o=a.indexOf("#",p>-1?p:0);return p>-1&&(s=a.slice(0,p),d=a.slice(p+1,o>-1?o:a.length),u=e(d)),o>-1&&(s=s||a.slice(0,o),m=a.slice(o,a.length)),s=Dh(s??a,n),{fullPath:s+(d&&"?")+d+m,path:s,query:u,hash:m}}function Eh(e,a){const n=a.query?e(a.query):"";return a.path+(n&&"?")+n+(a.hash||"")}function rr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Rh(e,a,n){const s=a.matched.length-1,u=n.matched.length-1;return s>-1&&s===u&&ra(a.matched[s],n.matched[u])&&wm(a.params,n.params)&&e(a.query)===e(n.query)&&a.hash===n.hash}function ra(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function wm(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const n in e)if(!zh(e[n],a[n]))return!1;return!0}function zh(e,a){return Array.isArray(e)?ur(e,a):Array.isArray(a)?ur(a,e):e===a}function ur(e,a){return Array.isArray(a)?e.length===a.length&&e.every((n,s)=>n===a[s]):e.length===1&&e[0]===a}function Dh(e,a){if(e.startsWith("/"))return e;if(!e)return a;const n=a.split("/"),s=e.split("/");let u=n.length-1,d,m;for(d=0;d<s.length;d++)if(m=s[d],!(u===1||m==="."))if(m==="..")u--;else break;return n.slice(0,u).join("/")+"/"+s.slice(d-(d===s.length?1:0)).join("/")}var Ya;(function(e){e.pop="pop",e.push="push"})(Ya||(Ya={}));var Ia;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ia||(Ia={}));function Ph(e){if(!e)if(qi){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Th(e)}const Mh=/^[^#]+#/;function Ih(e,a){return e.replace(Mh,"#")+a}function Fh(e,a){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:a.behavior,left:s.left-n.left-(a.left||0),top:s.top-n.top-(a.top||0)}}const cn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vh(e){let a;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),u=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!u)return;a=Fh(u,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function dr(e,a){return(history.state?history.state.position-a:-1)+e}const us=new Map;function Nh(e,a){us.set(e,a)}function Hh(e){const a=us.get(e);return us.delete(e),a}let Lh=()=>location.protocol+"//"+location.host;function Sm(e,a){const{pathname:n,search:s,hash:u}=a,d=e.indexOf("#");if(d>-1){let p=u.includes(e.slice(d))?e.slice(d).length:1,o=u.slice(p);return o[0]!=="/"&&(o="/"+o),rr(o,"")}return rr(n,e)+s+u}function Oh(e,a,n,s){let u=[],d=[],m=null;const p=({state:h})=>{const v=Sm(e,location),g=n.value,y=a.value;let A=0;if(h){if(n.value=v,a.value=h,m&&m===g){m=null;return}A=y?h.position-y.position:0}else s(v);u.forEach(B=>{B(n.value,g,{delta:A,type:Ya.pop,direction:A?A>0?Ia.forward:Ia.back:Ia.unknown})})};function o(){m=n.value}function r(h){u.push(h);const v=()=>{const g=u.indexOf(h);g>-1&&u.splice(g,1)};return d.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(Oe({},h.state,{scroll:cn()}),"")}function c(){for(const h of d)h();d=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:r,destroy:c}}function cr(e,a,n,s=!1,u=!1){return{back:e,current:a,forward:n,replaced:s,position:window.history.length,scroll:u?cn():null}}function jh(e){const{history:a,location:n}=window,s={value:Sm(e,n)},u={value:a.state};u.value||d(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(o,r,f){const c=e.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+o:Lh()+e+o;try{a[f?"replaceState":"pushState"](r,"",h),u.value=r}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function m(o,r){const f=Oe({},a.state,cr(u.value.back,o,u.value.forward,!0),r,{position:u.value.position});d(o,f,!0),s.value=o}function p(o,r){const f=Oe({},u.value,a.state,{forward:o,scroll:cn()});d(f.current,f,!0);const c=Oe({},cr(s.value,o,null),{position:f.position+1},r);d(o,c,!1),s.value=o}return{location:s,state:u,push:p,replace:m}}function qh(e){e=Ph(e);const a=jh(e),n=Oh(e,a.state,a.location,a.replace);function s(d,m=!0){m||n.pauseListeners(),history.go(d)}const u=Oe({location:"",base:e,go:s,createHref:Ih.bind(null,e)},a,n);return Object.defineProperty(u,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(u,"state",{enumerable:!0,get:()=>a.state.value}),u}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function Am(e){return typeof e=="string"||typeof e=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},km=ga("nf");var mr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mr||(mr={}));function ua(e,a){return Oe(new Error,{type:e,[km]:!0},a)}function yi(e,a){return e instanceof Error&&km in e&&(a==null||!!(e.type&a))}const pr="[^/]+?",Gh={sensitive:!1,strict:!1,start:!0,end:!0},Yh=/[.+*?^${}()[\]/\\]/g;function Jh(e,a){const n=Oe({},Gh,a),s=[];let u=n.start?"^":"";const d=[];for(const r of e){const f=r.length?[]:[90];n.strict&&!r.length&&(u+="/");for(let c=0;c<r.length;c++){const h=r[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(u+="/"),u+=h.value.replace(Yh,"\\$&"),v+=40;else if(h.type===1){const{value:g,repeatable:y,optional:A,regexp:B}=h;d.push({name:g,repeatable:y,optional:A});const _=B||pr;if(_!==pr){v+=10;try{new RegExp(`(${_})`)}catch($){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+$.message)}}let w=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;c||(w=A&&r.length<2?`(?:/${w})`:"/"+w),A&&(w+="?"),u+=w,v+=20,A&&(v+=-8),y&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}s.push(f)}if(n.strict&&n.end){const r=s.length-1;s[r][s[r].length-1]+=.7000000000000001}n.strict||(u+="/?"),n.end?u+="$":n.strict&&(u+="(?:/|$)");const m=new RegExp(u,n.sensitive?"":"i");function p(r){const f=r.match(m),c={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",g=d[h-1];c[g.name]=v&&g.repeatable?v.split("/"):v}return c}function o(r){let f="",c=!1;for(const h of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:g,repeatable:y,optional:A}=v,B=g in r?r[g]:"";if(Array.isArray(B)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(B)?B.join("/"):B;if(!_)if(A)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${g}"`);f+=_}}return f}return{re:m,score:s,keys:d,parse:p,stringify:o}}function Wh(e,a){let n=0;for(;n<e.length&&n<a.length;){const s=a[n]-e[n];if(s)return s;n++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Kh(e,a){let n=0;const s=e.score,u=a.score;for(;n<s.length&&n<u.length;){const d=Wh(s[n],u[n]);if(d)return d;n++}return u.length-s.length}const Xh={type:0,value:""},Qh=/[a-zA-Z0-9_]/;function Zh(e){if(!e)return[[]];if(e==="/")return[[Xh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${n})/"${r}": ${v}`)}let n=0,s=n;const u=[];let d;function m(){d&&u.push(d),d=[]}let p=0,o,r="",f="";function c(){r&&(n===0?d.push({type:0,value:r}):n===1||n===2||n===3?(d.length>1&&(o==="*"||o==="+")&&a(`A repeatable param (${r}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:r,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):a("Invalid state to consume buffer"),r="")}function h(){r+=o}for(;p<e.length;){if(o=e[p++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(r&&c(),m()):o===":"?(c(),n=1):h();break;case 4:h(),n=s;break;case 1:o==="("?n=2:Qh.test(o)?h():(c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:n=3:f+=o;break;case 3:c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--,f="";break;default:a("Unknown state");break}}return n===2&&a(`Unfinished custom RegExp for param "${r}"`),c(),m(),u}function e_(e,a,n){const s=Jh(Zh(e.path),n),u=Oe(s,{record:e,parent:a,children:[],alias:[]});return a&&!u.record.aliasOf==!a.record.aliasOf&&a.children.push(u),u}function t_(e,a){const n=[],s=new Map;a=gr({strict:!1,end:!0,sensitive:!1},a);function u(f){return s.get(f)}function d(f,c,h){const v=!h,g=a_(f);g.aliasOf=h&&h.record;const y=gr(a,f),A=[g];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of w)A.push(Oe({},g,{components:h?h.record.components:g.components,path:$,aliasOf:h?h.record:g}))}let B,_;for(const w of A){const{path:$}=w;if(c&&$[0]!=="/"){const x=c.record.path,E=x[x.length-1]==="/"?"":"/";w.path=c.record.path+($&&E+$)}if(B=e_(w,c,y),h?h.alias.push(B):(_=_||B,_!==B&&_.alias.push(B),v&&f.name&&!fr(B)&&m(f.name)),"children"in g){const x=g.children;for(let E=0;E<x.length;E++)d(x[E],B,h&&h.children[E])}h=h||B,o(B)}return _?()=>{m(_)}:Ma}function m(f){if(Am(f)){const c=s.get(f);c&&(s.delete(f),n.splice(n.indexOf(c),1),c.children.forEach(m),c.alias.forEach(m))}else{const c=n.indexOf(f);c>-1&&(n.splice(c,1),f.record.name&&s.delete(f.record.name),f.children.forEach(m),f.alias.forEach(m))}}function p(){return n}function o(f){let c=0;for(;c<n.length&&Kh(f,n[c])>=0;)c++;n.splice(c,0,f),f.record.name&&!fr(f)&&s.set(f.record.name,f)}function r(f,c){let h,v={},g,y;if("name"in f&&f.name){if(h=s.get(f.name),!h)throw ua(1,{location:f});y=h.record.name,v=Oe(i_(c.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),g=h.stringify(v)}else if("path"in f)g=f.path,h=n.find(_=>_.re.test(g)),h&&(v=h.parse(g),y=h.record.name);else{if(h=c.name?s.get(c.name):n.find(_=>_.re.test(c.path)),!h)throw ua(1,{location:f,currentLocation:c});y=h.record.name,v=Oe({},c.params,f.params),g=h.stringify(v)}const A=[];let B=h;for(;B;)A.unshift(B.record),B=B.parent;return{name:y,path:g,params:v,matched:A,meta:n_(A)}}return e.forEach(f=>d(f)),{addRoute:d,resolve:r,removeRoute:m,getRoutes:p,getRecordMatcher:u}}function i_(e,a){const n={};for(const s of a)s in e&&(n[s]=e[s]);return n}function a_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:l_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function l_(e){const a={},n=e.props||!1;if("component"in e)a.default=n;else for(const s in e.components)a[s]=typeof n=="boolean"?n:n[s];return a}function fr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function n_(e){return e.reduce((a,n)=>Oe(a,n.meta),{})}function gr(e,a){const n={};for(const s in e)n[s]=s in a?a[s]:e[s];return n}const $m=/#/g,s_=/&/g,o_=/\//g,r_=/=/g,u_=/\?/g,Bm=/\+/g,d_=/%5B/g,c_=/%5D/g,xm=/%5E/g,m_=/%60/g,Tm=/%7B/g,p_=/%7C/g,Em=/%7D/g,f_=/%20/g;function co(e){return encodeURI(""+e).replace(p_,"|").replace(d_,"[").replace(c_,"]")}function g_(e){return co(e).replace(Tm,"{").replace(Em,"}").replace(xm,"^")}function ds(e){return co(e).replace(Bm,"%2B").replace(f_,"+").replace($m,"%23").replace(s_,"%26").replace(m_,"`").replace(Tm,"{").replace(Em,"}").replace(xm,"^")}function h_(e){return ds(e).replace(r_,"%3D")}function __(e){return co(e).replace($m,"%23").replace(u_,"%3F")}function b_(e){return e==null?"":__(e).replace(o_,"%2F")}function Pl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function v_(e){const a={};if(e===""||e==="?")return a;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let u=0;u<s.length;++u){const d=s[u].replace(Bm," "),m=d.indexOf("="),p=Pl(m<0?d:d.slice(0,m)),o=m<0?null:Pl(d.slice(m+1));if(p in a){let r=a[p];Array.isArray(r)||(r=a[p]=[r]),r.push(o)}else a[p]=o}return a}function hr(e){let a="";for(let n in e){const s=e[n];if(n=h_(n),s==null){s!==void 0&&(a+=(a.length?"&":"")+n);continue}(Array.isArray(s)?s.map(d=>d&&ds(d)):[s&&ds(s)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+n,d!=null&&(a+="="+d))})}return a}function y_(e){const a={};for(const n in e){const s=e[n];s!==void 0&&(a[n]=Array.isArray(s)?s.map(u=>u==null?null:""+u):s==null?s:""+s)}return a}function ya(){let e=[];function a(s){return e.push(s),()=>{const u=e.indexOf(s);u>-1&&e.splice(u,1)}}function n(){e=[]}return{add:a,list:()=>e,reset:n}}function C_(e,a,n){const s=()=>{e[a].delete(n)};Vi(s),eo(s),Zs(()=>{e[a].add(n)}),e[a].add(n)}function w_(e){const a=Me(Cm,{}).value;a&&C_(a,"updateGuards",e)}function ri(e,a,n,s,u){const d=s&&(s.enterCallbacks[u]=s.enterCallbacks[u]||[]);return()=>new Promise((m,p)=>{const o=c=>{c===!1?p(ua(4,{from:n,to:a})):c instanceof Error?p(c):Uh(c)?p(ua(2,{from:a,to:c})):(d&&s.enterCallbacks[u]===d&&typeof c=="function"&&d.push(c),m())},r=e.call(s&&s.instances[u],a,n,o);let f=Promise.resolve(r);e.length<3&&(f=f.then(o)),f.catch(c=>p(c))})}function xn(e,a,n,s){const u=[];for(const d of e)for(const m in d.components){let p=d.components[m];if(!(a!=="beforeRouteEnter"&&!d.instances[m]))if(S_(p)){const r=(p.__vccOpts||p)[a];r&&u.push(ri(r,n,s,d,m))}else{let o=p();u.push(()=>o.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${d.path}"`));const f=Bh(r)?r.default:r;d.components[m]=f;const h=(f.__vccOpts||f)[a];return h&&ri(h,n,s,d,m)()}))}}return u}function S_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _r(e){const a=Me(dn),n=Me(uo),s=V(()=>a.resolve(S(e.to))),u=V(()=>{const{matched:o}=s.value,{length:r}=o,f=o[r-1],c=n.matched;if(!f||!c.length)return-1;const h=c.findIndex(ra.bind(null,f));if(h>-1)return h;const v=br(o[r-2]);return r>1&&br(f)===v&&c[c.length-1].path!==v?c.findIndex(ra.bind(null,o[r-2])):h}),d=V(()=>u.value>-1&&$_(n.params,s.value.params)),m=V(()=>u.value>-1&&u.value===n.matched.length-1&&wm(n.params,s.value.params));function p(o={}){return k_(o)?a[S(e.replace)?"replace":"push"](S(e.to)).catch(Ma):Promise.resolve()}return{route:s,href:V(()=>s.value.href),isActive:d,isExactActive:m,navigate:p}}const A_=R({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_r,setup(e,{slots:a}){const n=Kt(_r(e)),{options:s}=Me(dn),u=V(()=>({[vr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=a.default&&a.default(n);return e.custom?d:G("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:u.value},d)}}}),Rm=A_;function k_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function $_(e,a){for(const n in a){const s=a[n],u=e[n];if(typeof s=="string"){if(s!==u)return!1}else if(!Array.isArray(u)||u.length!==s.length||s.some((d,m)=>d!==u[m]))return!1}return!0}function br(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const vr=(e,a,n)=>e??a??n,B_=R({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:n}){const s=Me(rs),u=V(()=>e.route||s.value),d=Me(or,0),m=V(()=>u.value.matched[d]);lt(or,d+1),lt(Cm,m),lt(rs,u);const p=j();return rt(()=>[p.value,m.value,e.name],([o,r,f],[c,h,v])=>{r&&(r.instances[f]=o,h&&h!==r&&o&&o===c&&(r.leaveGuards.size||(r.leaveGuards=h.leaveGuards),r.updateGuards.size||(r.updateGuards=h.updateGuards))),o&&r&&(!h||!ra(r,h)||!c)&&(r.enterCallbacks[f]||[]).forEach(g=>g(o))},{flush:"post"}),()=>{const o=u.value,r=m.value,f=r&&r.components[e.name],c=e.name;if(!f)return yr(n.default,{Component:f,route:o});const h=r.props[e.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,y=G(f,Oe({},v,a,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(r.instances[c]=null)},ref:p}));return yr(n.default,{Component:y,route:o})||y}}});function yr(e,a){if(!e)return null;const n=e(a);return n.length===1?n[0]:n}const x_=B_;function T_(e){const a=t_(e.routes,e),n=e.parseQuery||v_,s=e.stringifyQuery||hr,u=e.history,d=ya(),m=ya(),p=ya(),o=Xd(ii);let r=ii;qi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=$n.bind(null,U=>""+U),c=$n.bind(null,b_),h=$n.bind(null,Pl);function v(U,se){let ne,fe;return Am(U)?(ne=a.getRecordMatcher(U),fe=se):fe=U,a.addRoute(fe,ne)}function g(U){const se=a.getRecordMatcher(U);se&&a.removeRoute(se)}function y(){return a.getRoutes().map(U=>U.record)}function A(U){return!!a.getRecordMatcher(U)}function B(U,se){if(se=Oe({},se||o.value),typeof U=="string"){const ke=Bn(n,U,se.path),T=a.resolve({path:ke.path},se),D=u.createHref(ke.fullPath);return Oe(ke,T,{params:h(T.params),hash:Pl(ke.hash),redirectedFrom:void 0,href:D})}let ne;if("path"in U)ne=Oe({},U,{path:Bn(n,U.path,se.path).path});else{const ke=Oe({},U.params);for(const T in ke)ke[T]==null&&delete ke[T];ne=Oe({},U,{params:c(U.params)}),se.params=c(se.params)}const fe=a.resolve(ne,se),Ie=U.hash||"";fe.params=f(h(fe.params));const Fe=Eh(s,Oe({},U,{hash:g_(Ie),path:fe.path})),Ae=u.createHref(Fe);return Oe({fullPath:Fe,hash:Ie,query:s===hr?y_(U.query):U.query||{}},fe,{redirectedFrom:void 0,href:Ae})}function _(U){return typeof U=="string"?Bn(n,U,o.value.path):Oe({},U)}function w(U,se){if(r!==U)return ua(8,{from:se,to:U})}function $(U){return I(U)}function x(U){return $(Oe(_(U),{replace:!0}))}function E(U){const se=U.matched[U.matched.length-1];if(se&&se.redirect){const{redirect:ne}=se;let fe=typeof ne=="function"?ne(U):ne;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=_(fe):{path:fe},fe.params={}),Oe({query:U.query,hash:U.hash,params:U.params},fe)}}function I(U,se){const ne=r=B(U),fe=o.value,Ie=U.state,Fe=U.force,Ae=U.replace===!0,ke=E(ne);if(ke)return I(Oe(_(ke),{state:Ie,force:Fe,replace:Ae}),se||ne);const T=ne;T.redirectedFrom=se;let D;return!Fe&&Rh(s,fe,ne)&&(D=ua(16,{to:T,from:fe}),Ue(fe,fe,!0,!1)),(D?Promise.resolve(D):P(T,fe)).catch(N=>yi(N)?N:re(N,T,fe)).then(N=>{if(N){if(yi(N,2))return I(Oe(_(N.to),{state:Ie,force:Fe,replace:Ae}),se||T)}else N=J(T,fe,!0,Ae,Ie);return L(T,fe,N),N})}function F(U,se){const ne=w(U,se);return ne?Promise.reject(ne):Promise.resolve()}function P(U,se){let ne;const[fe,Ie,Fe]=E_(U,se);ne=xn(fe.reverse(),"beforeRouteLeave",U,se);for(const ke of fe)ke.leaveGuards.forEach(T=>{ne.push(ri(T,U,se))});const Ae=F.bind(null,U,se);return ne.push(Ae),Oi(ne).then(()=>{ne=[];for(const ke of d.list())ne.push(ri(ke,U,se));return ne.push(Ae),Oi(ne)}).then(()=>{ne=xn(Ie,"beforeRouteUpdate",U,se);for(const ke of Ie)ke.updateGuards.forEach(T=>{ne.push(ri(T,U,se))});return ne.push(Ae),Oi(ne)}).then(()=>{ne=[];for(const ke of U.matched)if(ke.beforeEnter&&!se.matched.includes(ke))if(Array.isArray(ke.beforeEnter))for(const T of ke.beforeEnter)ne.push(ri(T,U,se));else ne.push(ri(ke.beforeEnter,U,se));return ne.push(Ae),Oi(ne)}).then(()=>(U.matched.forEach(ke=>ke.enterCallbacks={}),ne=xn(Fe,"beforeRouteEnter",U,se),ne.push(Ae),Oi(ne))).then(()=>{ne=[];for(const ke of m.list())ne.push(ri(ke,U,se));return ne.push(Ae),Oi(ne)}).catch(ke=>yi(ke,8)?ke:Promise.reject(ke))}function L(U,se,ne){for(const fe of p.list())fe(U,se,ne)}function J(U,se,ne,fe,Ie){const Fe=w(U,se);if(Fe)return Fe;const Ae=se===ii,ke=qi?history.state:{};ne&&(fe||Ae?u.replace(U.fullPath,Oe({scroll:Ae&&ke&&ke.scroll},Ie)):u.push(U.fullPath,Ie)),o.value=U,Ue(U,se,ne,Ae),xe()}let q;function de(){q=u.listen((U,se,ne)=>{const fe=B(U),Ie=E(fe);if(Ie){I(Oe(Ie,{replace:!0}),fe).catch(Ma);return}r=fe;const Fe=o.value;qi&&Nh(dr(Fe.fullPath,ne.delta),cn()),P(fe,Fe).catch(Ae=>yi(Ae,12)?Ae:yi(Ae,2)?(I(Ae.to,fe).then(ke=>{yi(ke,20)&&!ne.delta&&ne.type===Ya.pop&&u.go(-1,!1)}).catch(Ma),Promise.reject()):(ne.delta&&u.go(-ne.delta,!1),re(Ae,fe,Fe))).then(Ae=>{Ae=Ae||J(fe,Fe,!1),Ae&&(ne.delta?u.go(-ne.delta,!1):ne.type===Ya.pop&&yi(Ae,20)&&u.go(-1,!1)),L(fe,Fe,Ae)}).catch(Ma)})}let $e=ya(),O=ya(),Y;function re(U,se,ne){xe(U);const fe=O.list();return fe.length?fe.forEach(Ie=>Ie(U,se,ne)):console.error(U),Promise.reject(U)}function te(){return Y&&o.value!==ii?Promise.resolve():new Promise((U,se)=>{$e.add([U,se])})}function xe(U){Y||(Y=!0,de(),$e.list().forEach(([se,ne])=>U?ne(U):se()),$e.reset())}function Ue(U,se,ne,fe){const{scrollBehavior:Ie}=e;if(!qi||!Ie)return Promise.resolve();const Fe=!ne&&Hh(dr(U.fullPath,0))||(fe||!ne)&&history.state&&history.state.scroll||null;return fa().then(()=>Ie(U,se,Fe)).then(Ae=>Ae&&Vh(Ae)).catch(Ae=>re(Ae,U,se))}const et=U=>u.go(U);let Le;const jt=new Set;return{currentRoute:o,addRoute:v,removeRoute:g,hasRoute:A,getRoutes:y,resolve:B,options:e,push:$,replace:x,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:d.add,beforeResolve:m.add,afterEach:p.add,onError:O.add,isReady:te,install(U){const se=this;U.component("RouterLink",Rm),U.component("RouterView",x_),U.config.globalProperties.$router=se,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>S(o)}),qi&&!Le&&o.value===ii&&(Le=!0,$(u.location).catch(Ie=>{}));const ne={};for(const Ie in ii)ne[Ie]=V(()=>o.value[Ie]);U.provide(dn,se),U.provide(uo,Kt(ne)),U.provide(rs,o);const fe=U.unmount;jt.add(U),U.unmount=function(){jt.delete(U),jt.size<1&&(r=ii,q&&q(),o.value=ii,Le=!1,Y=!1),fe()}}}}function Oi(e){return e.reduce((a,n)=>a.then(()=>n()),Promise.resolve())}function E_(e,a){const n=[],s=[],u=[],d=Math.max(a.matched.length,e.matched.length);for(let m=0;m<d;m++){const p=a.matched[m];p&&(e.matched.find(r=>ra(r,p))?s.push(p):n.push(p));const o=e.matched[m];o&&(a.matched.find(r=>ra(r,o))||u.push(o))}return[n,s,u]}function zm(){return Me(dn)}function Dm(){return Me(uo)}const R_={__name:"Navbar",props:["onClick"],setup(e){const a=j(),n=zm();function s(u){return u.charAt(0).toUpperCase()+u.slice(1)}return Ks(()=>{const m=n.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=s(m[1]))}),(u,d)=>{const m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu");return z(),H(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(p,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(p,null,{default:i(()=>[l(Be(a.value),1)]),_:1})]),_:1})}}},z_=ye(R_,[["__scopeId","data-v-338afb35"]]),D_=R({name:"Sidebar",setup(){const e=Dm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),P_=C("strong",null," Fomantic UI Vue ",-1),M_=C("b",null,"Getting Started",-1);function I_(e,a,n,s,u,d){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),r=b("sui-menu");return z(),H(r,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[P_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[M_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.elements,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.collections,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.views,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.modules,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const F_=ye(D_,[["render",I_]]),V_={class:"sidemenu"},N_={style:{flex:"1","overflow-y":"scroll"}},H_={__name:"Sidebar",setup(e){return(a,n)=>(z(),pe("div",V_,[C("div",N_,[t(F_)])]))}},L_=ye(H_,[["__scopeId","data-v-379ef704"]]),O_=R({name:"Sidebar",setup(){const e=Dm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),j_=C("strong",null," Fomantic UI Vue ",-1),q_=C("b",null,"Getting Started",-1);function U_(e,a,n,s,u,d){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),r=b("sui-sidebar");return z(),H(r,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[j_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.elements,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.collections,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.views,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.modules,f=>(z(),H(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const G_=ye(O_,[["render",U_]]),Y_={class:"pusher",style:{height:"100vh"}},J_={class:"article"},W_={__name:"Home",setup(e){const a=j(!1),n=()=>a.value=!a.value;return w_(()=>{a.value=!1}),(s,u)=>{const d=b("router-view"),m=b("SuiSegment");return z(),H(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(G_,{visible:a.value},null,8,["visible"]),C("div",Y_,[t(L_),t(z_,{"on-click":n}),C("div",J_,[t(d)])])]),_:1})}}},K_=ye(W_,[["__scopeId","data-v-0bfd4ee9"]]);var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function X_(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var n=function s(){return this instanceof s?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};n.prototype=a.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var u=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,u.get?u:{enumerable:!0,get:function(){return e[s]}})}),n}const Q_=X_(Sh);var Mm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,m={},p={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function _(w){return w instanceof o?new o(w.type,_(w.content),w.alias):Array.isArray(w)?w.map(_):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(w,$){$=$||{};var x,E;switch(p.util.type(w)){case"Object":if(E=p.util.objId(w),$[E])return $[E];x={},$[E]=x;for(var I in w)w.hasOwnProperty(I)&&(x[I]=_(w[I],$));return x;case"Array":return E=p.util.objId(w),$[E]?$[E]:(x=[],$[E]=x,w.forEach(function(F,P){x[P]=_(F,$)}),x);default:return w}},getLanguage:function(_){for(;_;){var w=u.exec(_.className);if(w)return w[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,w){_.className=_.className.replace(RegExp(u,"gi"),""),_.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(x){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(_){var w=document.getElementsByTagName("script");for(var $ in w)if(w[$].src==_)return w[$]}return null}},isActive:function(_,w,$){for(var x="no-"+w;_;){var E=_.classList;if(E.contains(w))return!0;if(E.contains(x))return!1;_=_.parentElement}return!!$}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(_,w){var $=p.util.clone(p.languages[_]);for(var x in w)$[x]=w[x];return $},insertBefore:function(_,w,$,x){x=x||p.languages;var E=x[_],I={};for(var F in E)if(E.hasOwnProperty(F)){if(F==w)for(var P in $)$.hasOwnProperty(P)&&(I[P]=$[P]);$.hasOwnProperty(F)||(I[F]=E[F])}var L=x[_];return x[_]=I,p.languages.DFS(p.languages,function(J,q){q===L&&J!=_&&(this[J]=I)}),I},DFS:function _(w,$,x,E){E=E||{};var I=p.util.objId;for(var F in w)if(w.hasOwnProperty(F)){$.call(w,F,w[F],x||F);var P=w[F],L=p.util.type(P);L==="Object"&&!E[I(P)]?(E[I(P)]=!0,_(P,$,null,E)):L==="Array"&&!E[I(P)]&&(E[I(P)]=!0,_(P,$,F,E))}}},plugins:{},highlightAll:function(_,w){p.highlightAllUnder(document,_,w)},highlightAllUnder:function(_,w,$){var x={callback:$,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),p.hooks.run("before-all-elements-highlight",x);for(var E=0,I;I=x.elements[E++];)p.highlightElement(I,w===!0,x.callback)},highlightElement:function(_,w,$){var x=p.util.getLanguage(_),E=p.languages[x];p.util.setLanguage(_,x);var I=_.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(I,x);var F=_.textContent,P={element:_,language:x,grammar:E,code:F};function L(q){P.highlightedCode=q,p.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,p.hooks.run("after-highlight",P),p.hooks.run("complete",P),$&&$.call(P.element)}if(p.hooks.run("before-sanity-check",P),I=P.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!P.code){p.hooks.run("complete",P),$&&$.call(P.element);return}if(p.hooks.run("before-highlight",P),!P.grammar){L(p.util.encode(P.code));return}if(w&&s.Worker){var J=new Worker(p.filename);J.onmessage=function(q){L(q.data)},J.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else L(p.highlight(P.code,P.grammar,P.language))},highlight:function(_,w,$){var x={code:_,grammar:w,language:$};if(p.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=p.tokenize(x.code,x.grammar),p.hooks.run("after-tokenize",x),o.stringify(p.util.encode(x.tokens),x.language)},tokenize:function(_,w){var $=w.rest;if($){for(var x in $)w[x]=$[x];delete w.rest}var E=new c;return h(E,E.head,_),f(_,E,w,E.head,0),g(E)},hooks:{all:{},add:function(_,w){var $=p.hooks.all;$[_]=$[_]||[],$[_].push(w)},run:function(_,w){var $=p.hooks.all[_];if(!(!$||!$.length))for(var x=0,E;E=$[x++];)E(w)}},Token:o};s.Prism=p;function o(_,w,$,x){this.type=_,this.content=w,this.alias=$,this.length=(x||"").length|0}o.stringify=function _(w,$){if(typeof w=="string")return w;if(Array.isArray(w)){var x="";return w.forEach(function(L){x+=_(L,$)}),x}var E={type:w.type,content:_(w.content,$),tag:"span",classes:["token",w.type],attributes:{},language:$},I=w.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(E.classes,I):E.classes.push(I)),p.hooks.run("wrap",E);var F="";for(var P in E.attributes)F+=" "+P+'="'+(E.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+F+">"+E.content+"</"+E.tag+">"};function r(_,w,$,x){_.lastIndex=w;var E=_.exec($);if(E&&x&&E[1]){var I=E[1].length;E.index+=I,E[0]=E[0].slice(I)}return E}function f(_,w,$,x,E,I){for(var F in $)if(!(!$.hasOwnProperty(F)||!$[F])){var P=$[F];P=Array.isArray(P)?P:[P];for(var L=0;L<P.length;++L){if(I&&I.cause==F+","+L)return;var J=P[L],q=J.inside,de=!!J.lookbehind,$e=!!J.greedy,O=J.alias;if($e&&!J.pattern.global){var Y=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,Y+"g")}for(var re=J.pattern||J,te=x.next,xe=E;te!==w.tail&&!(I&&xe>=I.reach);xe+=te.value.length,te=te.next){var Ue=te.value;if(w.length>_.length)return;if(!(Ue instanceof o)){var et=1,Le;if($e){if(Le=r(re,xe,_,de),!Le||Le.index>=_.length)break;var se=Le.index,jt=Le.index+Le[0].length,$t=xe;for($t+=te.value.length;se>=$t;)te=te.next,$t+=te.value.length;if($t-=te.value.length,xe=$t,te.value instanceof o)continue;for(var U=te;U!==w.tail&&($t<jt||typeof U.value=="string");U=U.next)et++,$t+=U.value.length;et--,Ue=_.slice(xe,$t),Le.index-=xe}else if(Le=r(re,0,Ue,de),!Le)continue;var se=Le.index,ne=Le[0],fe=Ue.slice(0,se),Ie=Ue.slice(se+ne.length),Fe=xe+Ue.length;I&&Fe>I.reach&&(I.reach=Fe);var Ae=te.prev;fe&&(Ae=h(w,Ae,fe),xe+=fe.length),v(w,Ae,et);var ke=new o(F,q?p.tokenize(ne,q):ne,O,ne);if(te=h(w,Ae,ke),Ie&&h(w,te,Ie),et>1){var T={cause:F+","+L,reach:Fe};f(_,w,$,te.prev,xe,T),I&&T.reach>I.reach&&(I.reach=T.reach)}}}}}}function c(){var _={value:null,prev:null,next:null},w={value:null,prev:_,next:null};_.next=w,this.head=_,this.tail=w,this.length=0}function h(_,w,$){var x=w.next,E={value:$,prev:w,next:x};return w.next=E,x.prev=E,_.length++,E}function v(_,w,$){for(var x=w.next,E=0;E<$&&x!==_.tail;E++)x=x.next;w.next=x,x.prev=w,_.length-=E}function g(_){for(var w=[],$=_.head.next;$!==_.tail;)w.push($.value),$=$.next;return w}if(!s.document)return s.addEventListener&&(p.disableWorkerMessageHandler||s.addEventListener("message",function(_){var w=JSON.parse(_.data),$=w.language,x=w.code,E=w.immediateClose;s.postMessage(p.highlight(x,p.languages[$],$)),E&&s.close()},!1)),p;var y=p.util.currentScript();y&&(p.filename=y.src,y.hasAttribute("data-manual")&&(p.manual=!0));function A(){p.manual||p.highlightAll()}if(!p.manual){var B=document.readyState;B==="loading"||B==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return p}(a);e.exports&&(e.exports=n),typeof Cr<"u"&&(Cr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(u,d){var m={};m["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[d]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};p["language-"+d]={pattern:/[\s\S]+/,inside:n.languages[d]};var o={};o[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,u){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:n.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var d=s.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",u=function(y,A){return"✖ Error "+y+" while fetching file: "+A},d="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",o="loading",r="loaded",f="failed",c="pre[data-src]:not(["+p+'="'+r+'"]):not(['+p+'="'+o+'"])';function h(y,A,B){var _=new XMLHttpRequest;_.open("GET",y,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?A(_.responseText):_.status>=400?B(u(_.status,_.statusText)):B(d))},_.send(null)}function v(y){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(A){var B=Number(A[1]),_=A[2],w=A[3];return _?w?[B,Number(w)]:[B,void 0]:[B,B]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var A=y.element;if(A.matches(c)){y.code="",A.setAttribute(p,o);var B=A.appendChild(document.createElement("CODE"));B.textContent=s;var _=A.getAttribute("data-src"),w=y.language;if(w==="none"){var $=(/\.(\w+)$/.exec(_)||[,"none"])[1];w=m[$]||$}n.util.setLanguage(B,w),n.util.setLanguage(A,w);var x=n.plugins.autoloader;x&&x.loadLanguages(w),h(_,function(E){A.setAttribute(p,r);var I=v(A.getAttribute("data-range"));if(I){var F=E.split(/\r\n?|\n/g),P=I[0],L=I[1]==null?F.length:I[1];P<0&&(P+=F.length),P=Math.max(0,Math.min(P-1,F.length)),L<0&&(L+=F.length),L=Math.max(0,Math.min(L,F.length)),E=F.slice(P,L).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(P+1))}B.textContent=E,n.highlightElement(B)},function(E){A.setAttribute(p,f),B.textContent=E})}}),n.plugins.fileHighlight={highlight:function(A){for(var B=(A||document).querySelectorAll(c),_=0,w;w=B[_++];)n.highlightElement(w)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Mm);var Im=Mm.exports;const Z_=Pm(Im);function eb(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var gl=Q_,Tn=eb(Im),tb=gl.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,n){var s=n.slots,u=n.attrs,d=s&&s.default&&s.default()||[],m=a.code||d&&d.length?d[0].children:"",p=a.inline,o=a.language,r=Tn.languages[o],f="language-".concat(o);return function(){return p?gl.h("code",{class:[f],innerHTML:Tn.highlight(m,r)}):gl.h("pre",Object.assign({},u,{class:[u.class,f]}),[gl.h("code",Object.assign({},u,{class:[u.class,f],innerHTML:Tn.highlight(m,r)}))])}}}),ib=tb;const Fm=Pm(ib),ab=R({name:"DocPageHeader",props:{title:String,sub:String}}),lb={class:"intro",style:{padding:"2rem"}};function nb(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment");return z(),H(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",lb,[t(p,{as:"h1"},{default:i(()=>[l(Be(e.title)+" ",1),t(m,null,{default:i(()=>[l(Be(e.sub),1)]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const qe=ye(ab,[["render",nb]]),sb=R({name:"GettingStarted",components:{Prism:Fm,DocPageHeader:qe}}),mn=e=>(sc("data-v-2f4c2002"),e=e(),oc(),e),ob=mn(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),rb=mn(()=>C("p",null," You can import all components as Vue plugin. ",-1)),ub=mn(()=>C("br",null,null,-1)),db=mn(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function cb(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("prism"),r=b("sui-container");return z(),pe("div",null,[t(m,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),t(r,{class:"main"},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Install")]),_:1}),ob,t(p,{as:"h3"},{default:i(()=>[l("via Package Manager")]),_:1}),t(o,{language:"bash"},{default:i(()=>[l(Be(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),t(p,{as:"h2"},{default:i(()=>[l("Usage")]),_:1}),rb,t(o,{language:"js"},{default:i(()=>[l(Be(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),ub,db,t(o,{language:"js"},{default:i(()=>[l(Be(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const mb=ye(sb,[["render",cb],["__scopeId","data-v-2f4c2002"]]),pb={__name:"DocSections",props:["docs"],setup(e){const a=e,n=V(()=>[...new Set(a.docs.map(s=>s.category))]);return(s,u)=>{const d=b("SuiHeader");return z(!0),pe(Se,null,Ze(n.value,(m,p)=>(z(),pe(Se,{key:m},[t(d,{as:"h2",dividing:"",style:pa({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[l(Be(m),1)]),_:2},1032,["style"]),(z(!0),pe(Se,null,Ze(e.docs.filter(o=>o.category===m),(o,r)=>(z(),H(uc(o.component),{key:o.label+"_"+r,id:o.id,style:{marginTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},fb={};function gb(e,a){const n=b("SuiRail");return z(),H(n,{id:"table-contents",position:"right",dividing:""})}const hb=ye(fb,[["render",gb],["__scopeId","data-v-c0207a98"]]),_b={class:"intro"},bb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){return(a,n)=>{const s=b("SuiHeaderSubheader"),u=b("SuiHeader"),d=b("SuiDivider"),m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu"),r=b("SuiContainer"),f=b("SuiSegment");return z(),pe("div",null,[t(f,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(r,{class:"main"},{default:i(()=>[C("div",_b,[t(u,{as:"h1"},{default:i(()=>[l(Be(e.title)+" ",1),t(s,null,{default:i(()=>[l(Be(e.description),1)]),_:1})]),_:1}),t(d,{hidden:""}),t(o,{floated:"right"},{default:i(()=>[t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"edit"})]),_:1}),t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(r,{class:"main"},{default:i(()=>[t(f,{basic:"",fitted:""},{default:i(()=>[t(pb,{docs:e.componentDocs},null,8,["docs"]),t(hb)]),_:1})]),_:1})])}}},Hi=ye(bb,[["__scopeId","data-v-e908f995"]]);function Vm(e){var a,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=Vm(e[a]))&&(s&&(s+=" "),s+=n);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}function X(){for(var e,a,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(a=Vm(e))&&(s&&(s+=" "),s+=a);return s}const k=(e,a)=>e?a:"",Pe=(e,a)=>typeof e=="string"?`${e} ${a}`:"",De=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",ha=e=>e==="justified"?"justified":Pe(e,"aligned"),Qt=(e,a)=>typeof e=="number"&&a?`${cs(e)} ${a}`:typeof e=="number"&&!a?cs(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Ca=(e,a)=>e?`${cs(e)} wide ${a}`:"",cs=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Ke=R({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:V(()=>X(e.color,e.name,e.size,k(e.bordered,"bordered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fitted,"fitted"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.loading,"loading"),Pe(e.flipped,"flipped"),Pe(e.rotated,"rotated"),De(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return G(e,{"aria-hidden":!0,class:this.computedClass})}}),wr=R({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:V(()=>X(e.size,"icons"))}},render(){var e,a;let n=this.$props.as||"i";return G(n,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vb={install(e){e.component(Ke.name,Ke),e.component(wr.name,wr)}},yb=()=>({icon:[Boolean,String]}),Cb=e=>({iconClasses:V(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":X({icon:e.icon&&!e.content}))}),wb=["right","left"],Sb=()=>({labeled:[Boolean,String]}),Ab=e=>({labeledClasses:V(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":wb.includes(e.labeled)?`${e.labeled} labeled`:"")}),kb=["double","elastic"],$b=()=>({loading:{type:[Boolean,String],validator:e=>kb.includes(e)||typeof e=="boolean"}}),Bb=e=>({loadingClasses:V(()=>X(e.loading,{loading:e.loading}))}),M=R({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...yb(),...Sb(),...$b()},setup(e){const{iconClasses:a}=Cb(e),{labeledClasses:n}=Ab(e),{loadingClasses:s}=Bb(e);return{classes:V(()=>X("ui",e.color,e.size,k(e.active,"active"),k(e.basic,"basic"),k(e.circular,"circular"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.facebook,"facebook"),k(e.fluid,"fluid"),k(e.google,"google"),k(e.linkedin,"linkedin"),k(e.instagram,"instagram"),k(e.inverted,"inverted"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.primary,"primary"),k(e.secondary,"secondary"),k(e.telegram,"telegram"),k(e.tertiary,"tertiary"),k(e.toggle,"toggle"),k(e.twitter,"twitter"),k(e.vk,"vk"),k(e.whatsapp,"whatsapp"),k(e.youtube,"youtube"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),De(e.animated,"animated"),a.value,n.value,s.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,n;return[typeof this.icon=="string"&&t(Ke,{name:this.icon},null),this.content||((n=(a=this.$slots).default)==null?void 0:n.call(a))]}})}}),ui=R({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:V(()=>X(k(e.hidden,"hidden"),k(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),st=R({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,k(e.basic,"basic"),k(e.icon,"icon"),k(e.labeled,"labeled"),k(e.vertical,"vertical"),Pe(e.attached,"attached"),Qt(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),xb={install(e){e.component(M.name,M),e.component(ui.name,ui),e.component(st.name,st)}},ci=R({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:V(()=>X("ui",k(e.fluid,"fluid"),k(e.text,"text"),ha(e.textAlign),"container"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tb={install(e){e.component(ci.name,ci)}},We=R({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:V(()=>X("ui",k(e.clearing,"clearing"),k(e.fitted,"fitted"),k(e.hidden,"hidden"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.section,"section"),k(e.vertical,"vertical"),Pe(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb={install(e){e.component(We.name,We)}},ht=R({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:V(()=>X(e.size,k(e.disabled,"disabled"),k(e.link,"link"),k(e.loading,"loading")))}},render(){return this.computedClass?G("em",{class:this.computedClass,"data-emoji":this.$props.name}):G("em",{"data-emoji":this.$props.name})}}),Rb={install(e){e.component(ht.name,ht)}},Dt=R({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:V(()=>X(e.name,"flag"))}},render(){return G("i",{class:this.computedClass})}}),zb={install(e){e.component(Dt.name,Dt)}},da=R({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return G(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),me=R({name:"SuiHeader",components:{HeaderSubheader:da},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",n=V(()=>X("ui",e.color,e.size,k(e.block,"block"),k(e.disabled,"disabled"),k(e.dividing,"dividing"),k(e.icon,"icon"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.sub,"sub"),Pe(e.floated,"floated"),De(e.attached,"attached"),ha(e.textAlign),"header"));return{elementType:a,computedClass:n}},render(){var e,a;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(G(da,{},this.subheader)),n.length>0?G(this.elementType,{class:this.computedClass},n):G(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ml=R({name:"SuiHeaderContent",render(){var e,a;return G("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Db={install(e){e.component(me.name,me),e.component(Ml.name,Ml),e.component(da.name,da)}},Nm=["top","middle","bottom"],Pb={verticalAlign:{type:String,validator:e=>Nm.includes(e)}};function Mb(e){return{verticalAlignClass:V(()=>e.verticalAlign&&Nm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Ib=["left","right"],Fb={floated:{type:String,validator:e=>Ib.includes(e)}};function Vb(e){return{floatedClass:V(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const Mt=R({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const n=V(()=>X("ui",e.size,e.color,k(e.basic,"basic"),k(e.circular,"circular"),k(e.empty,"empty"),k(e.floating,"floating"),k(e.horizontal,"horizontal"),k(e.image,"image"),k(e.inverted,"inverted"),k(e.prompt,"prompt"),k(e.tag,"tag"),Pe(e.attached,"attached"),Pe(e.corner,"corner"),De(e.pointing,"pointing"),De(e.ribbon,"ribbon"),"label"));let s=e.as||"div";return e.icon?()=>G(s,{class:n.value},G(Ke,{name:e.icon})):()=>{var u;return G(s,{class:n.value},(u=a.default)==null?void 0:u.call(a))}}}),Sr=R({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ar=R({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const n=V(()=>X("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.tag,"tag"),"labels"));return()=>{var s;return G("div",{class:n.value},(s=a.default)==null?void 0:s.call(a))}}}),Nb={install(e){e.component(Mt.name,Mt),e.component(Sr.name,Sr),e.component(Ar.name,Ar)}},bt=R({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Pb,...Fb},setup(e,{slots:a}){const{verticalAlignClass:n}=Mb(e),{floatedClass:s}=Vb(e),u=V(()=>X("ui",e.size,n.value,s.value,k(e.avatar,"avatar"),k(e.bordered,"bordered"),k(e.centered,"centered"),k(e.circular,"circular"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.hidden,"hidden"),k(e.inline,"inline"),k(e.rounded,"rounded"),De(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=b(e.as)),()=>{var m;return G(d,{class:u.value,href:e.href,target:e.target&&e.target},G("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var d;return G("div",{class:u.value},G("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>G("div",{class:u.value},[G("img",{src:e.src}),G(Mt,{...e.label})]):()=>t("img",{class:u.value,src:e.src},null)}}),kr=R({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const n=V(()=>X("ui",e.size,"images"));return()=>{var s;return G("div",{class:n.value},(s=a.default)==null?void 0:s.call(a))}}}),Hb={install(e){e.component(bt.name,bt),e.component(kr.name,kr)}},ms=R({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const n=V(()=>typeof e.icon=="string"||e.loading),s=V(()=>!!e.label||e.labeled),u=V(()=>X("ui",e.size,e.action&&"action",k(e.disabled,"disabled"),k(e.error,"error"),k(e.fluid,"fluid"),k(e.focus,"focus"),e.iconPosition,k(n.value,"icon"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.transparent,"transparent"),k(s.value,"labeled"),"input")),d=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:u.value},[e.label&&t(Mt,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>d(m)},null),n.value&&t(Ke,{name:e.icon||"spinner"},null),e.action&&t(M,null,{default:()=>[e.action]})])}}),Lb={install(e){e.component(ms.name,ms)}},$r=R({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const n=V(()=>X("ui",k(e.animated,"animated"),k(e.bulleted,"bulleted"),k(e.celled,"celled"),k(e.divided,"divided"),k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.ordered,"ordered"),k(e.relaxed,"relaxed"),k(e.selection,"selection"),Pe(e.verticalAlign,"aligned"),Pe(e.floated,"floated"),"list"));let s=e.as||"div";return()=>{var u;return G(s,{class:n.value},(u=a.default)==null?void 0:u.call(a))}}}),Br=R({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let n=e.as||"div";const s=V(()=>X(k(e.active,"active"),k(e.disabled,"disabled"),"item"));return()=>{var u;return G(n,{class:s.value},(u=a.default)==null?void 0:u.call(a))}}}),xr=R({name:"SuiListIcon",components:{Icon:Ke},setup(e,{slots:a}){return()=>{var n;return G(b(Ke.name),{...e},(n=a.default)==null?void 0:n.call(a))}}}),Tr=R({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:V(()=>X(Pe(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Er=R({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return G(e.as,{class:"header"},(n=a.default)==null?void 0:n.call(a))}}}),Rr=R({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var n;return G(e.as,{class:"description"},(n=a.default)==null?void 0:n.call(a))}}}),zr=R({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ob={install(e){e.component($r.name,$r),e.component(Br.name,Br),e.component(xr.name,xr),e.component(Tr.name,Tr),e.component(Er.name,Er),e.component(Rr.name,Rr),e.component(zr.name,zr)}},Dr=R({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:V(()=>{var n;return X("ui",e.color,e.size,k(e.active,"active"),k(e.disabled,"disabled"),k(e.fast,"fast"),k(e.indeterminate,"indeterminate"),k(e.inverted,"inverted"),k(e.slow,"slow"),k(e.text||!!((n=a.default)!=null&&n.call(a)),"text"),De(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jb={install(e){e.component(Dr.name,Dr)}},Pr=R({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:V(()=>X("ui",e.position,e.size,k(e.attached,"attached"),k(e.dividing,"dividing"),k(e.internal,"internal"),De(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qb={install(e){e.component(Pr.name,Pr)}},Mr=R({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.animated,k(e.active,"active"),k(e.disabled,"disabled"),k(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ir=R({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:V(()=>X("ui",k(e.visible,"visible"),k(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ub={install(e){e.component(Mr.name,Mr),e.component(Ir.name,Ir)}},mt=R({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,k(e.basic,"basic"),k(e.circular,"circular"),k(e.clearing,"clearing"),k(e.compact,"compact"),k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.piled,"piled"),k(e.placeholder,"placeholder"),k(e.raised,"raised"),k(e.secondary,"secondary"),k(e.stacked,"stacked"),k(e.tertiary,"tertiary"),k(e.vertical,"vertical"),Pe(e.floated,"floated"),Pe(e.textAlign,"aligned"),De(e.attached,"attached"),De(e.fitted,"fitted"),De(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Fr=R({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.size,k(e.compact,"compact"),k(e.horizontal,"horizontal"),k(e.piled,"piled"),k(e.raised,"raised"),k(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Vr=R({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gb={install(e){e.component(mt.name,mt),e.component(Fr.name,Fr),e.component(Vr.name,Vr)}},Nr=R({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:V(()=>X(k(e.active,"active"),k(e.completed,"completed"),k(e.disabled,"disabled"),k(e.fluid,"fluid"),k(e.link,"link"),k(e.vertical,"vertical"),"step"))}},render(){var e,a,n,s;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Yb=["one","two","three","four","five","six","seven","eight"],Hr=R({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:V(()=>X("ui",a&&Yb[a-1],e.size,k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.ordered,"ordered"),k(e.unstackable,"unstackable"),k(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Lr=R({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Or=R({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jr=R({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jb={install(e){e.component(Nr.name,Nr),e.component(Hr.name,Hr),e.component(Lr.name,Lr),e.component(Or.name,Or),e.component(jr.name,jr)}},Wb=Object.freeze(Object.defineProperty({__proto__:null,Button:xb,Container:Tb,Divider:Eb,Emoji:Rb,Flag:zb,Header:Db,Icon:vb,Image:Hb,Input:Lb,Label:Nb,List:Ob,Loader:jb,Rail:qb,Reveal:Ub,Segment:Gb,Step:Jb},Symbol.toStringTag,{value:"Module"})),ps=R({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:V(()=>X(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),fs=R({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=V(()=>X(k(e.active,"active"),"section")),n=e.link||!!e.href;return{computedClass:a,isLink:n}},render(){let e="div";this.isLink?e="a":this.to&&(e=b("router-link"));const a={href:this.href,to:this.to};return t(e,Ni({class:this.computedClass},a),{default:()=>{var n,s;return[(s=(n=this.$slots).default)==null?void 0:s.call(n)]}})}}),qr=R({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:V(()=>X("ui",e.size,k(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const n=()=>{var s;return(s=this.sections)==null?void 0:s.map((u,d)=>{const m={active:u.active,href:u.href,link:u.link,to:u.to};return t(Se,null,[t(fs,m,{default:()=>[u.content]}),this.sections.length!==d+1&&t(ps,{icon:this.icon},{default:()=>[l(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||n()])}}),Kb={install(e){e.component(qr.name,qr),e.component(ps.name,ps),e.component(fs.name,fs)}},gs=R({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:V(()=>X("ui",e.size,k(e.error,"error"),k(e.inverted,"inverted"),k(e.loading,"loading"),k(e.reply,"reply"),k(e.success,"success"),k(e.unstackable,"unstackable"),k(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Xb(e){return{widthClass:V(()=>Number(e.width)>0?`${Ur[Number(e.width)-1]} wide`:typeof e.width=="string"||Ur.includes(e.width)?`${e.width} wide`:null)}}const Il=R({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:n}=Xb(e),s=V(()=>X(k(e.disabled,"disabled"),k(e.error,"error"),k(e.inline,"inline"),k(e.required,"required"),n.value,"field")),u=e.type||"text";return{computedClass:s,inputType:u,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gr=R({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:V(()=>X(Pe(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yr=R({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),Qb={install(e){e.component(gs.name,gs),e.component(Il.name,Il),e.component(Gr.name,Gr),e.component(Yr.name,Yr)}},hs=R({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:V(()=>X("ui",e.container&&"container",k(e.centered,"centered"),k(e.compact,"compact"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),Pe(e.reversed,"reversed"),Pe(e.verticalAlign,"aligned"),De(e.celled,"celled"),De(e.divided,"divided"),De(e.padded,"padded"),De(e.relaxed,"relaxed"),ha(e.textAlign),Qt(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Fl=R({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:V(()=>X(e.color,Pe(e.floated,"floated"),Pe(e.only,"only"),ha(e.textAlign),Qt(e.width,"wide"),Ca(e.mobile,"mobile"),Ca(e.tablet,"tablet"),Ca(e.computer,"computer"),Ca(e.largeScreen,"large screen"),Ca(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jr=R({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:V(()=>X(e.color,k(e.centered,"centered"),k(e.stretched,"stretched"),Pe(e.only,"only"),Qt(e.columns,"column"),ha(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zb={install(e){e.component(hs.name,hs),e.component(Fl.name,Fl),e.component(Jr.name,Jr)}},Wr=R({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,k(e.borderless,"borderless"),k(e.compact,"compact"),k(e.fixed,"fixed"),k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.pagination,"pagination"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.stackable,"stackable"),k(e.text,"text"),k(e.vertical,"vertical"),De(e.attached,"attached"),De(e.floated,"floated"),De(e.icon,"icon"),De(e.tabular,"tabular"),Qt(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=R({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let n=e.as||"div";return()=>t(n,{class:"header"},{default:()=>{var s;return[e.content||((s=a.default)==null?void 0:s.call(a))]}})}}),Xr=R({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let n=e.as||"a";e.header&&(n="div"),e.as==="router-link"&&(n=b(e.as));const s=V(()=>X(e.color,e.position,k(e.action,"action"),k(e.active,"active"),k(e.browse,"browse"),k(e.disabled,"disabled"),k(e.header,"header"),k(e.link,"link"),De(e.fitted,"fitted"),"item"));return()=>t(n,{class:s.value},{default:()=>{var u;return[e.name||((u=a.default)==null?void 0:u.call(a))]}})}}),Qr=R({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:V(()=>X(a,"menu"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ev={install(e){e.component(Wr.name,Wr),e.component(Kr.name,Kr),e.component(Xr.name,Xr),e.component(Qr.name,Qr)}},Zr=R({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,k(e.compact,"compact"),k(e.error,"error"),k(e.floating,"floating"),k(e.hidden,"hidden"),k(e.icon,"icon"),k(e.info,"info"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.success,"success"),k(e.visible,"visible"),k(e.warning,"warning"),De(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(_s,null,{default:()=>[t(bs,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_s=R({name:"SuiMessageContent",render(){var e,a;return G("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),bs=R({name:"SuiMessageHeader",render(){var e,a;return G("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),eu=R({name:"SuiMessageItem",render(){var e,a;return G("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tu=R({name:"SuiMessageList",render(){var e,a;return G("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tv={install(e){e.component(Zr.name,Zr),e.component(_s.name,_s),e.component(bs.name,bs),e.component(eu.name,eu),e.component(tu.name,tu)}},iu=R({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,k(e.celled,"celled"),k(e.collapsing,"collapsing"),k(e.definition,"definition"),k(e.fixed,"fixed"),k(e.inverted,"inverted"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.stackable,"stackable"),k(e.striped,"striped"),k(e.structured,"structured"),k(e.unstackable,"unstackable"),De(e.attached,"attached"),De(e.basic,"basic"),De(e.compact,"compact"),De(e.padded,"padded"),Qt(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),au=R({name:"SuiTableBody",render(){var e,a;return G("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),lu=R({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:V(()=>X(e.color,k(e.active,"active"),k(e.collapsing,"collapsing"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.selectable,"selectable"),k(e.singleLine,"single line"),k(e.warning,"warning"),Pe(e.verticalAlign,"aligned"),Pe(e.marked,"marked"),ha(e.textAlign)))}},render(){var e,a,n,s;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),nu=R({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:V(()=>X(k(a,"full-width")))}},render(){var e,a,n,s;return this.computedClass?G("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):G("tfoot",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),su=R({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:V(()=>X(k(e.fullWidth,"full-width")))}},render(){var e,a,n,s;return this.computedClass?G("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):G("thead",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),ou=R({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:V(()=>X(k(e.singleLine,"single line"),Pe(e.textAlign,"aligned"),Qt(e.width,"wide")))}},render(){var e,a,n,s;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),ru=R({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:V(()=>X(e.color,k(e.active,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.negative,"negative"),k(e.positive,"positive"),k(e.warning,"warning"),Pe(e.textAlign,"aligned"),Pe(e.verticalAlign,"aligned")))}},render(){var e,a,n,s;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),iv={install(e){e.component(iu.name,iu),e.component(au.name,au),e.component(lu.name,lu),e.component(nu.name,nu),e.component(su.name,su),e.component(ou.name,ou),e.component(ru.name,ru)}},av=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:Kb,Form:Qb,Grid:Zb,Menu:ev,Message:tv,Table:iv},Symbol.toStringTag,{value:"Module"})),uu=R({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:V(()=>X("ui",e.unit,k(e.centered,"centered"),k(!!e.test,"test"),"ad"))}},render(){var e,a,n,s;return this.$props.test?G("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):G("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),lv={install(e){e.component(uu.name,uu)}},du=R({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,k(e.centered,"centered"),k(e.fluid,"fluid"),k(e.horizontal,"horizontal"),k(e.link,"link"),k(e.raised,"raised"),"card"))}},render(){var e,a,n,s;return this.$props.href||this.$props.link?G("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):G("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),cu=R({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:V(()=>X(k(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),mu=R({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:V(()=>X(Pe(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pu=R({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:V(()=>X("ui",k(e.centered,"centered"),k(e.doubling,"doubling"),k(e.inverted,"inverted"),k(e.stackable,"stackable"),Qt(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),fu=R({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:V(()=>X(Pe(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),gu=R({name:"SuiCardMeta",render(){var e,a;return G("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nv={install(e){e.component(du.name,du),e.component(cu.name,cu),e.component(mu.name,mu),e.component(pu.name,pu),e.component(fu.name,fu),e.component(gu.name,gu)}},hu=R({name:"SuiComment",render(){var e,a;return G("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_u=R({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:V(()=>X(k(a,"active")))}},render(){var e,a,n,s;return this.computedClass?G("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):G("a",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),bu=R({name:"SuiCommentActions",render(){var e,a;return G("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vu=R({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return G(n,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),yu=R({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return G(e,{class:"avatar"},G("img",{src:this.$props.src}))}}),Cu=R({name:"SuiCommentContent",render(){var e,a;return G("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=R({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.size,k(e.collapsed,"collapsed"),k(e.inverted,"inverted"),k(e.minimal,"minimal"),k(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Su=R({name:"SuiCommentMetadata",render(){var e,a;return G("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Au=R({name:"SuiCommentText",render(){var e,a;return G("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sv={install(e){e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu),e.component(Cu.name,Cu),e.component(wu.name,wu),e.component(Su.name,Su),e.component(Au.name,Au)}},ku=R({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:V(()=>X("ui",e.size,k(e.inverted,"inverted"),"feed"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$u=R({name:"SuiFeedContent",render(){var e,a;return G("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bu=R({name:"SuiFeedDate",render(){var e,a;return G("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xu=R({name:"SuiFeedEvent",render(){var e,a;return G("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=R({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:n}=e;return{computedClass:V(()=>X(k(a,"images"),k(n,"text"),"extra"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=R({name:"SuiFeedLabel",render(){var e,a;return G("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=R({name:"SuiFeedLike",render(){var e,a;return G("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=R({name:"SuiFeedMeta",render(){var e,a;return G("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=R({name:"SuiFeedSummary",render(){var e,a;return G("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=R({name:"SuiFeedUser",render(){var e,a;return G("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov={install(e){e.component(ku.name,ku),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(xu.name,xu),e.component(Tu.name,Tu),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Du.name,Du),e.component(Pu.name,Pu)}},Mu=R({name:"SuiItem",render(){var e,a;return G("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=R({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:V(()=>X(Pe(a,"aligned"),"content"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=R({name:"SuiItemDescription",render(){var e,a;return G("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=R({name:"SuiItemExtra",render(){var e,a;return G("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=R({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:V(()=>X("ui",k(e.divided,"divided"),k(e.inverted,"inverted"),k(e.link,"link"),k(e.unstackable,"unstackable"),De(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hu=R({name:"SuiItemHeader",props:{as:String},render(){var e,a;let n=this.$props.as||"div";return G(n,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=R({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:V(()=>X(e.size,"image"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=R({name:"SuiItemMeta",render(){var e,a;return G("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component(Mu.name,Mu),e.component(Iu.name,Iu),e.component(Fu.name,Fu),e.component(Vu.name,Vu),e.component(Nu.name,Nu),e.component(Hu.name,Hu),e.component(Lu.name,Lu),e.component(Ou.name,Ou)}},Vl=R({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?G("div",{class:"label"},this.$props.content):G("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nl=R({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:V(()=>X(k(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?G("div",{class:this.computedClass},this.$props.content):G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=R({name:"SuiStatistic",components:{StatisticLabel:Vl,StatisticValue:Nl},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=Me("ui",!0);return{computedClass:V(()=>X(a&&"ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),k(e.text,"text"),De(e.floated,"floated"),"statistic"))}},render(){var e,a,n,s,u,d;let m=[];return this.$props.value&&m.push(G(Nl,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(G(Vl,{content:this.$props.label},(s=(n=this.$slots).default)==null?void 0:s.call(n))),G("div",{class:this.computedClass},m.length>0?m:(d=(u=this.$slots).default)==null?void 0:d.call(u))}}),qu=R({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return lt("ui",!1),{computedClass:V(()=>X("ui",e.color,e.size,k(e.horizontal,"horizontal"),k(e.inverted,"inverted"),Qt(e.widths,""),"statistics"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv={install(e){e.component(ju.name,ju),e.component(qu.name,qu),e.component(Vl.name,Vl),e.component(Nl.name,Nl)}},dv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:lv,Card:nv,Comment:sv,Feed:ov,Item:rv,Statistic:uv},Symbol.toStringTag,{value:"Module"})),Uu=R({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?j([]):j(-1),n=u=>e.multiple?a.value.includes(u):a.value===u,s=u=>{const d=n(u);e.multiple?d?a.value=a.value.filter(m=>m!==u):a.value.push(u):a.value=d?-1:u};return lt("isTabActive",n),lt("updateActiveIndex",s),{computedClass:V(()=>X("ui",k(e.fluid,"fluid"),k(e.inverted,"inverted"),k(e.styled,"styled"),"accordion"))}},render(){var e,a;const n=s=>(s.forEach((u,d)=>{u.props.index=d}),s);return t("div",{class:this.computedClass},[n((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Gu=R({name:"SuiAccordionAccordion",render(){var e,a;return G("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vs=R({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:V(()=>X(k(e.active,"active"),"content"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yu=R({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=Me("isTabActive"),n=Me("updateActiveIndex"),s=V(()=>X(k(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:n,titleClass:s}},render(){return t(Se,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(Ke,{name:"dropdown"},null),this.title]),t(vs,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Ju=R({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:V(()=>X(k(e.active,"active"),"title"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cv={install(e){e.component(Uu.name,Uu),e.component(Gu.name,Gu),e.component(vs.name,vs),e.component(Yu.name,Yu),e.component(Ju.name,Ju)}},mv=(e,a,n)=>{e.clickOutside=s=>{e===s.target||e.contains(s.target)||a.value(s,e)},document.body.addEventListener("click",e.clickOutside)},pv=(e,a,n)=>{document.body.removeEventListener("click",e.clickOutside)},mo={mounted:mv,unmounted:pv};function fv(e,a={}){const n=j(e.value?"open":"closed"),s=()=>n.value=e.value?"open":"closed";rt(e,p=>{n.value=p?"opening":"closing"});const u=p=>{p.addEventListener("animationend",s,!0)},d=p=>{p&&p.removeEventListener("animationend",s)},m=V((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:u,removeAnimation:d,computeAnimationClass:m}}const gv=R({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const n=j(!1),s=()=>{e.disabled||(n.value=!0)},u=()=>n.value=!1,d=()=>{e.disabled||a("select-day",e.date)},m=()=>{let o=new Date;return o.getFullYear()===e.date.year&&o.getMonth()===e.date.month&&o.getDate()===e.date.day},p=V(()=>X("link",k(n.value,"focus"),k(e.active&&!e.disabled,"active"),k(e.disabled,"adjacent disabled"),k(m(),"today")));return{onMouseEnter:s,onMouseLeave:u,onClick:d,computedClass:p}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:kt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),hv=R({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:n,add:s,subtract:u,selectedDate:d,setSelectedDate:m,selectType:p,updateVisible:o,formatDate:r}=Me(hi);return{calendarDays:e,isEqualDay:f=>{if(!d.value)return!1;const c=d.value;return c.getFullYear()===f.year&&c.getMonth()===f.month&&c.getDate()===f.day},onSelectDay:f=>{if(n(f.year,"years"),n(f.month,"months"),n(f.day,"days"),p.value==="date"){let c=new Date(f.year,f.month,f.day);m(c),o(!1);return}a("hour")},updateSelectMode:a,formatDate:r,add:s,subtract:u}},render(){const e=()=>this.calendarDays.map((a,n)=>t("tr",null,[a.map(s=>t(gv,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[l("S")]),t("th",null,[l("M")]),t("th",null,[l("T")]),t("th",null,[l("W")]),t("th",null,[l("T")]),t("th",null,[l("F")]),t("th",null,[l("S")])])]),t("tbody",null,[e()])])}}),be=R({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=j(!1),n=()=>a.value=!0,s=()=>a.value=!1,u=V(()=>X("link",k(e.active,"active"),k(e.today,"today"),k(a.value,"focus")));return{onMouseEnter:n,onMouseLeave:s,computedClass:u}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:kt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_v=R({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:n,subtract:s,selectedDate:u,updateSelectMode:d}=Me(hi);return{state:e,add:n,subtract:s,updateSelectMode:d,isActive:m=>u.value?e.year===u.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let p=new Date;return m===p.getMonth()&&e.year===p.getFullYear()},onClickCell:m=>{a(m,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((n,s)=>t("tr",null,[t(be,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[e[s*3]]}),t(be,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[e[s*3+1]]}),t(be,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[e[s*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),bv=R({name:"SuiCalendarYearTable",setup(e){const{state:a,set:n,add:s,subtract:u,selectedDate:d,updateSelectMode:m}=Me(hi),p=()=>s(10,"years"),o=()=>u(10,"years"),r=V(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:p,movePrevTwelveYears:o,headerStartYear:r,isActive:f=>d.value?f===d.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{n(f,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,l(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(be,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(be,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(be,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(be,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(be,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(be,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(be,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(be,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(be,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(be,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(be,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(be,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),vv=R({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:n,add:s,subtract:u,formatDate:d,selectedDate:m}=Me(hi);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>u(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:p=>{n(p,"hours"),e("minute")},isActive:p=>{if(!m.value)return!1;let o=m.value.getFullYear(),r=m.value.getMonth(),f=m.value.getDate(),c=m.value.getHours();return a.year===o&&a.month===r&&a.day===f&&p===c}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(be,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[l("12:00 AM")]}),t(be,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[l("1:00 AM")]}),t(be,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[l("2:00 AM")]}),t(be,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[l("3:00 AM")]})]),t("tr",null,[t(be,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[l("4:00 AM")]}),t(be,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[l("5:00 AM")]}),t(be,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[l("6:00 AM")]}),t(be,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[l("7:00 AM")]})]),t("tr",null,[t(be,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[l("8:00 AM")]}),t(be,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[l("9:00 AM")]}),t(be,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[l("10:00 AM")]}),t(be,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[l("11:00 AM")]})]),t("tr",null,[t(be,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[l("12:00 PM")]}),t(be,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[l("1:00 PM")]}),t(be,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[l("2:00 PM")]}),t(be,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[l("3:00 PM")]})]),t("tr",null,[t(be,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[l("4:00 PM")]}),t(be,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[l("5:00 PM")]}),t(be,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[l("6:00 PM")]}),t(be,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[l("7:00 PM")]})]),t("tr",null,[t(be,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[l("8:00 PM")]}),t(be,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[l("9:00 PM")]}),t(be,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[l("10:00 PM")]}),t(be,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[l("11:00 PM")]})])])])}});function xt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const yv=R({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:n,subtract:s,formatDate:u,updateSelectMode:d,updateVisible:m,selectedDate:p}=Me(hi);return{add:n,subtract:s,formatDate:u,updateSelectMode:d,getTimeLabel:o=>{let r=e.hour%12,f=e.hour>12?"PM":"AM",c=o.toString().padStart(2,"0");return e.hour===0?`12:${c} AM`:e.hour===12?`12:${c} PM`:`${r}:${c} ${f}`},onClickCell:o=>{a(o,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:o=>{if(!p.value)return!1;let r=p.value.getFullYear(),f=p.value.getMonth(),c=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return e.year===r&&e.month===f&&e.day===c&&e.hour===h&&o===v}}},render(){let e,a,n,s,u,d,m,p,o,r,f,c;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:kt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(be,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},xt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(be,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},xt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(be,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},xt(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),t("tr",null,[t(be,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},xt(s=this.getTimeLabel(15))?s:{default:()=>[s]}),t(be,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},xt(u=this.getTimeLabel(20))?u:{default:()=>[u]}),t(be,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},xt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(be,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},xt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(be,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},xt(p=this.getTimeLabel(35))?p:{default:()=>[p]}),t(be,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},xt(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),t("tr",null,[t(be,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},xt(r=this.getTimeLabel(45))?r:{default:()=>[r]}),t(be,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},xt(f=this.getTimeLabel(50))?f:{default:()=>[f]}),t(be,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},xt(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),Cv=R({name:"SuiCalendarBody",setup(){const e=j(null),{visible:a,selectMode:n}=Me(hi),{setupAnimation:s,removeAnimation:u,computeAnimationClass:d}=fv(a);gi(()=>s(e.value)),Vi(()=>u(e.value));const m=V(()=>X("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:m,selectMode:n}},render(){const e=()=>{switch(this.selectMode){case"day":return t(hv,null,null);case"month":return t(_v,null,null);case"year":return t(bv,null,null);case"hour":return t(vv,null,null);case"minute":return t(yv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),wv=R({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:n,updateSelectMode:s,set:u,state:d,formatCalendarDate:m}=Me(hi);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(s("day"),e.value&&(u(e.value.getFullYear(),"years"),u(e.value.getMonth(),"months"))),n(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Sv=(e,a)=>{let n=new Date;n.setDate(1),n.setMonth(a),n.setFullYear(e);let s=n.getDay();return s>=7?s-7:s},Av=(e,a)=>{let n,s;return a===0?(n=11,s=e-1):(n=a-1,s=e),32-new Date(s,n,32).getDate()},En=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function kv(){const e=j(!1),a=(y=!1)=>e.value=y,n=new Date;function s(y){if(!y)return;let A=y.getFullYear(),B=En(y.getMonth()),_=y.getDate(),w=y.getHours(),$=y.getMinutes(),x=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let E=$.toString().padStart(2,"0");return`${B} ${_}, ${A} ${w}:${E} ${x}`}const u=j("default"),d=j("day");function m(y){d.value=y}const p=j(null),o=y=>{p.value=y},r=Kt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),f=(y,A)=>{switch(A){case"years":r.year=y;break;case"months":r.month=y;break;case"days":r.day=y;break;case"hours":r.hour=y;break;case"minutes":r.minute=y}},c=(y,A)=>{let B=new Date(r.year,r.month,r.day,r.hour);switch(A){case"years":B.setFullYear(B.getFullYear()+y);break;case"months":B.setMonth(B.getMonth()+y);break;case"days":B.setDate(B.getDate()+y);break;case"hours":B.setHours(B.getHours()+y);break}r.year=B.getFullYear(),r.month=B.getMonth(),r.day=B.getDate(),r.hour=B.getHours()},h=(y,A)=>{let B=new Date(r.year,r.month,r.day,r.hour);switch(A){case"years":B.setFullYear(B.getFullYear()-y);break;case"months":B.setMonth(B.getMonth()-y);break;case"days":B.setDate(B.getDate()-y);break;case"hours":B.setHours(B.getHours()-y);break}r.year=B.getFullYear(),r.month=B.getMonth(),r.day=B.getDate(),r.hour=B.getHours()},v=(y="default")=>y==="date"?`${En(r.month)} ${r.year}`:`${En(r.month)} ${r.day}, ${r.year}`,g=V(()=>{let y=r.month,A=r.year;y>11&&(y=y%11-1,A+=1);let B=[],_=Sv(A,y),w=32-new Date(A,y,32).getDate(),$=Av(A,y),x=1;for(let E=0;E<6;E++){let I=[];if(E===0){for(let P=$-_+1;P<=$;P++){let L=y===0?11:y-1,J=y===0?A-1:A;I.push({day:P,month:L,year:J,currentMonth:!1})}let F=7-I.length;for(let P=0;P<F;P++)I.push({day:x,month:y,year:A,currentMonth:!0}),x++}else for(let F=0;F<7;F++){if(x>w){let P=y===11?0:y+1,L=y===11?A+1:A;I.push({day:x-w,month:P,year:L,currentMonth:!1})}else I.push({day:x,month:y,year:A,currentMonth:!0});x++}B.push(I)}return B});return{visible:e,updateVisible:a,calendarDays:g,formatCalendarDate:s,selectMode:d,updateSelectMode:m,selectType:u,selectedDate:p,setSelectedDate:o,state:r,set:f,add:c,subtract:h,formatDate:v}}const hi=Symbol("useCalendar"),Wu=R({name:"SuiCalendar",directives:{clickoutside:mo},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const n=kv();lt(hi,n);const{updateVisible:s,selectedDate:u}=n;return rt(u,d=>{a("update:modelValue",d)}),{updateVisible:s}},render(){return el(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Cv,null,null),t("i",{class:"calendar icon"},null),t(wv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[Zl("clickoutside"),()=>this.updateVisible(!1)]])}}),$v={install:e=>{e.component(Wu.name,Wu)}},Ku=R({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const n=V(()=>X("ui",!e.label&&"fitted",k(e.disabled,"disabled"),k(e.indeterminate,"indeterminate"),k(e.radio,"radio"),k(e.readOnly,"read-only"),k(e.slider,"slider"),k(e.toggle,"toggle"),"checkbox")),s=V(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:n,checked:s,onClick:u=>{if(e.disabled||e.readOnly)return;let d;e.value?s.value?d=e.modelValue.filter(m=>e.value!==m):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",u),a("click",u),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),Bv={install(e){e.component(Ku.name,Ku)}},Xu=R({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:V(()=>X("ui",k(e.active,"active"),k(e.inverted,"inverted"),k(e.page,"page"),k(e.simple,"simple"),Pe(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return G("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qu=R({name:"SuiDimmerDimmable",components:{Segment:mt},props:{blurring:Boolean},setup(e){return{computedClass:V(()=>X(k(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return G(mt,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xv={install(e){e.component(Xu.name,Xu),e.component(Qu.name,Qu)}},Tv=(e,a)=>e.map(n=>n[a]),Ev=R({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:V(()=>X(k(e.filtered,"filtered"),k(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:m}=this.item;n=t(Se,null,[d&&t("i",{class:`${d} flag`},null),m])}else n=this.item;else n=this.text||this.placeholder;const s=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,u=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Se,null,[t("div",{class:this.computedClass},[s&&t(bt,s,null),u&&t(Mt,u,null),n]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:kt(()=>this.$emit("remove"),["stop"])},null)])}}),Rv=e=>{const a=Kt({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return rt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function zv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Zu=R({name:"SuiDropdown",directives:{clickoutside:mo},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const n=Rv(e);lt("useDropdown",n);const{state:s,show:u,hide:d}=n,m=V(()=>X("ui",k(e.button,"button"),k(e.clearable,"clearable"),k(e.compact,"compact"),k(e.floating,"floating"),k(e.fluid,"fluid"),k(!!e.icon,"icon"),k(e.inline,"inline"),k(e.item,"item"),k(e.labeled,"labeled"),k(e.multiple,"multiple"),k(e.search,"search"),k(e.scrolling,"scrolling"),k(e.selection,"selection"),k(e.simple,"simple"),De(e.pointing,"pointing"),"dropdown",k(s.visible,"active visible"),k(s.direction==="up","upward"))),p=()=>{var A;if(s.visible)return d();(A=h.value)==null||A.focus(),u()},o=()=>{e.search&&h.value&&h.value.focus(),u()},r=()=>d(),f=j(""),c=V(()=>{const A=f.value.toLowerCase();return e.options.filter(B=>{const _=typeof B=="object"?B.text:B,w=_.toLowerCase().includes(A);if(!e.multiple)return w;if(Array.isArray(e.modelValue)){const $=typeof B=="object"?Tv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return w&&!$}return w})}),h=j(null),v=A=>f.value=A.target.value,g=A=>{var B;if(f.value="",e.search&&((B=h.value)==null||B.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,A]:[A];return a("update:modelValue",_)}return a("update:modelValue",A)},y=A=>{if(Array.isArray(e.modelValue)){const B=e.modelValue.findIndex(_=>_===A);if(B>-1){let _=Object.assign(e.modelValue);_.splice(B,1),a("update:modelValue",_)}}};return lt("selection",e.selection),{computedClass:m,onClick:p,openMenu:o,closeMenu:r,filteredText:f,filteredOptions:c,inputRef:h,onInput:v,onSelect:g,removeItem:y}},render(){var e,a;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:kt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:kt(()=>this.removeItem(m),["stop"])},null)]))},s=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(ys,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),u=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Ev,Ni(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let m;return t(Cs,{search:this.$props.searchInMenu,onSearch:this.onInput},zv(m=s())?m:{default:()=>[m]})};return el(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),u(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[Zl("clickoutside"),this.closeMenu]])}}),ys=R({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:n,hide:s}=Me("useDropdown");return{computedClass:V(()=>X(k(e.active,"active"),k(e.disabled,"disabled"),"item")),onClick:()=>{n.multiple||s(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:kt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(bt,this.image,null),this.label&&t(Mt,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),Cs=R({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:n}){const{state:s}=Me("useDropdown"),u=j(null),d=V(()=>{let p=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return X("menu","transition",k(s.visible,"visible"),k(!s.visible&&!s.animating,"hidden"),k(s.animating,p()))});rt(()=>s.visible,p=>{if(!p||!u.value)return;let o=u.value.parentElement;const{top:r,height:f}=o==null?void 0:o.getBoundingClientRect(),c=r-m.value.length*37,h=document.documentElement.clientHeight-r-f-m.value.length*37;s.direction=c>h?"up":"down"});const m=V(()=>{var p;let o=[],r=(p=n.default)==null?void 0:p.call(n);return r&&r.forEach(f=>{f.type.name==="SuiSelectItem"&&o.push(f)}),o});return{container:u,computedClass:d,onSearchInput:p=>a("search",p)}},render(){var e,a,n,s;const u=()=>t(Se,null,[t("div",{class:"ui left icon input",onClick:kt(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&u(),(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Dv={install(e){e.component(Zu.name,Zu),e.component(ys.name,ys),e.component(Cs.name,Cs)}},ed=R({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=j(e.active),n=()=>{a.value=!a.value},s=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,u=V(()=>X("ui",e.aspectRatio,k(a.value,"active"),"embed"));return{active:a,getSrc:s,clickHandler:n,computedClass:u}},render(){let e=[G("i",{class:"video play icon"}),G("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(G("div",{class:"embed"},G("iframe",{src:this.getSrc()}))),G("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Pv={install(e){e.component(ed.name,ed)}};function Mv(e){return Ms()?(Pd(e),!0):!1}function Hm(e){return typeof e=="function"?e():S(e)}const Lm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Iv=Object.prototype.toString,Fv=e=>Iv.call(e)==="[object Object]",Cl=()=>{},Vv=Nv();function Nv(){var e,a;return Lm&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ka(e){var a;const n=Hm(e);return(a=n==null?void 0:n.$el)!=null?a:n}const Om=Lm?window:void 0;function Rn(...e){let a,n,s,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,u]=e,a=Om):[a,n,s,u]=e,!a)return Cl;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const d=[],m=()=>{d.forEach(f=>f()),d.length=0},p=(f,c,h,v)=>(f.addEventListener(c,h,v),()=>f.removeEventListener(c,h,v)),o=rt(()=>[ka(a),Hm(u)],([f,c])=>{if(m(),!f)return;const h=Fv(c)?{...c}:c;d.push(...n.flatMap(v=>s.map(g=>p(f,v,g,h))))},{immediate:!0,flush:"post"}),r=()=>{o(),m()};return Mv(r),r}let td=!1;function Hv(e,a,n={}){const{window:s=Om,ignore:u=[],capture:d=!0,detectIframe:m=!1}=n;if(!s)return Cl;Vv&&!td&&(td=!0,Array.from(s.document.body.children).forEach(f=>f.addEventListener("click",Cl)),s.document.documentElement.addEventListener("click",Cl));let p=!0;const o=f=>u.some(c=>{if(typeof c=="string")return Array.from(s.document.querySelectorAll(c)).some(h=>h===f.target||f.composedPath().includes(h));{const h=ka(c);return h&&(f.target===h||f.composedPath().includes(h))}}),r=[Rn(s,"click",f=>{const c=ka(e);if(!(!c||c===f.target||f.composedPath().includes(c))){if(f.detail===0&&(p=!o(f)),!p){p=!0;return}a(f)}},{passive:!0,capture:d}),Rn(s,"pointerdown",f=>{const c=ka(e);p=!o(f)&&!!(c&&!f.composedPath().includes(c))},{passive:!0}),m&&Rn(s,"blur",f=>{setTimeout(()=>{var c;const h=ka(e);((c=s.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&a(f)},0)})].filter(Boolean);return()=>r.forEach(f=>f())}function jm(e,a="scale"){const n=j(e.modelValue?"open":"closed");return rt(()=>e.modelValue,s=>{n.value=s?"opening":"closing"}),{animationClasses:V(()=>{switch(n.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:V(()=>n.value==="closed"),onAnimationEnd:()=>n.value=e.modelValue?"open":"closed"}}const Lv=R({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:n,onAnimationEnd:s}=jm(e,"fade"),u=V(()=>X("ui","page modals dimmer transition",k(e.inverted,"inverted"),a.value)),d=V(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),m=V(()=>X("dimmable","dimmed",k(e.blurring,"blurring")));return rt(()=>e.modelValue,p=>{if(p){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:u,style:d,onAnimationEnd:s}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),id=R({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const n=j(),{animationClasses:s,isClosed:u}=jm(e),d=V(()=>X("ui",e.size,k(e.basic,"basic"),k(e.overlay,"overlay"),k(e.fullscreen,"fullscreen"),"modal","transition",s.value)),m=V(()=>({display:u.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>a("update:modelValue",!1);return Hv(n,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:m,close:p,modalRef:n}},render(){return t(nn,{to:"body"},{default:()=>[t(Lv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),ad=R({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ld=R({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:V(()=>X(k(e.image,"image"),k(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nd=R({name:"SuiModalDescription",render(){var e,a;return G("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sd=R({name:"SuiModalHeader",render(){var e,a;return G("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ov={install(e){e.component(id.name,id),e.component(ad.name,ad),e.component(ld.name,ld),e.component(nd.name,nd),e.component(sd.name,sd)}},jv=e=>{const a=j(!1),n=qn(e,"position"),s=j(null),u=qn(e,"trigger"),d=()=>{a.value=!0,fa(()=>p())},m=()=>{a.value=!1},p=()=>{if(!s.value||!u.value)return;let o=0,r=0;const f=s.value,c=u.value.$el;f.style.transform=`translate(${o}px, ${r}px)`;const{top:h,left:v,width:g,height:y}=c.getBoundingClientRect(),A=f.getBoundingClientRect(),{pageXOffset:B,pageYOffset:_}=window;if(n.value.includes("top")?(o=B+v,r=_+h-f.offsetTop-f.offsetHeight):(o=v,r=h+y-A.top),n.value.includes("right")){const w=g-A.width;o=v+w}if(n.value.includes("center")){const w=g/2-A.width/2;o=v+w}n.value==="right center"&&(o=v+g,r=h+y/2-A.top-A.height/2),n.value==="left center"&&(o=v-A.width,r=h+y/2-A.top-A.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${o}px, ${r}px)`};return{show:a,showPopup:d,hidePopup:m,placement:n,popupRef:s,triggerRef:u}},od=R({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:n,showPopup:s,hidePopup:u,popupRef:d,triggerRef:m}=jv(e);Ks(()=>{var h,v,g;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",s),(g=m.value)==null||g.$el.addEventListener("mouseleave",u))});const p=j(n.value?"open":"close");V(()=>p.value!=="closed"),rt(()=>n.value,h=>{p.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},r=()=>p.value=n.value?"open":"closed";gi(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",r,!0)}),Vi(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",r)});const f={position:"initial",animationDuration:"200ms"},c=V(()=>X("ignored ui",e.position,e.size,k(e.basic,"basic"),k(e.flowing,"flowing"),k(e.inverted,"inverted"),De(e.wide,"wide"),"popup transition",o(p.value,"scale")));return()=>t(nn,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:c.value,style:f},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),qv={install(e){e.component(od.name,od)}},Uv=["top","bottom","left"],po=()=>({attached:{type:String,validator:e=>Uv.includes(e)}}),qm=e=>({attachedClasses:V(()=>X(e.attached,{attached:e.attached}))}),Gv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Um=()=>({color:{type:String,validator:e=>Gv.includes(e)}}),Gm=e=>({colorClasses:V(()=>X(e.inverted&&"inverted",e.color))}),Hl=R({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...po(),...Um()},setup(e){const{attachedClasses:a}=qm(e),{colorClasses:n}=Gm(e),s=V(()=>X("ui",n.value,e.size,k(e.active||e.indicating,"active"),k(e.disabled,"disabled"),k(e.error,"error"),k(e.indicating,"indicating"),k(e.success,"success"),k(e.warning,"warning"),a.value,"progress")),u=V(()=>X(De(e.progress,"progress"))),d=V(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:u.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),Yv={install(e){e.component(Hl.name,Hl)}},Jv=R({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=Me("rating",j(0)),n=Me("updateRating"),s=Me("selectedIndex",j(0)),u=Me("updateSelectedIndex"),d=Me("clearable",!1),m=Me("disabled",!1),p=()=>{if(!m){if(d&&e.index===a.value){n(0),u(0);return}n(e.index)}},o=()=>{m||u(e.index)},r=V(()=>e.index<=a.value),f=V(()=>e.index<=s.value),c=V(()=>X(e.icon,k(r.value,"active"),k(f.value,"selected"),"icon"));return()=>t("i",{class:c.value,onClick:()=>p(),onMouseenter:()=>o()},null)}}),rd=R({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const n=j(e.modelValue||e.defaultRating),s=j(!1),u=j(0),d=f=>{n.value=f,a("update:modelValue",f),a("change",f)},m=f=>u.value=f,p=()=>{e.disabled||(s.value=!0)},o=()=>{e.disabled||(s.value=!1,m(0))},r=V(()=>X("ui",e.color,e.icon,e.size,k(e.disabled,"disabled"),"rating",k(s.value,"selected")));return lt("rating",n),lt("updateRating",d),lt("selectedIndex",u),lt("updateSelectedIndex",m),lt("clearable",e.clearable),lt("disabled",e.disabled),()=>t("div",{class:r.value,onMouseenter:()=>p(),onMouseleave:()=>o()},[[...Array(e.maxRating)].map((f,c)=>t(Jv,{icon:e.icon,index:c+1},null))])}}),Wv={install(e){e.component(rd.name,rd)}},ud=R({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Kv={install(e){e.component(ud.name,ud)}},dd=R({name:"SuiSidebar",directives:{clickoutside:mo},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const n=Kt({animating:!1}),s=V(()=>{const u=e.direction==="right"||e.direction==="left";return X("ui","sidebar",e.direction,e.animation,k(e.inverted,"inverted"),k(e.visible,"visible"),k(n.animating,"animating"),k(u,"vertical"),De(e.icon,"icon"),"menu")});return rt(()=>e.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),e.dimmed){const u=document.querySelector(".pusher");u&&u.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:u=>{const d=u.path||u.composedPath&&u.composedPath();d&&d.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return el(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[Zl("clickoutside"),this.onClickPusher]])}}),Xv={install:e=>{e.component(dd.name,dd)}};class zn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,n){return a.classList.contains(n)}}const cd=R({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const n=V(()=>X("ui",e.color,e.size,k(e.disabled,"disabled"),k(e.inverted,"inverted"),k(e.reversed,"reversed"),k(e.vertical,"vertical"),De(e.labeled,"labeled"),"slider")),s=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),u=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=V(()=>{if(e.range)return e.reversed&&!e.vertical?{right:s()+"%",width:u()-s()+"%"}:e.vertical?e.reversed?{bottom:s()+"%",height:u()-s()+"%"}:{top:s()+"%",height:u()-s()+"%"}:{left:s()+"%",width:u()-s()+"%"};let O=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(O-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(O-e.min)/(e.max-e.min)*100}%`}}),m=V(()=>{let O=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=V(()=>{let O=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),o=V(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((O,Y)=>Y*e.step+e.min)),r=()=>{var O,Y;let re=1,te=f(),xe=(e.vertical?(O=h.value)==null?void 0:O.clientHeight:(Y=h.value)==null?void 0:Y.clientWidth)||0,Ue=1;if(xe>0)for(;xe/te*Ue<100;)te%Ue||(re=Ue),Ue+=1;return re},f=()=>Math.round((e.max-e.min)/e.step),c=j(null),h=j(null),v=j(0),g=j(0),y=j(0),A=j(0),B=()=>{if(!c.value)return;let O=c.value.getBoundingClientRect();v.value=O.left+zn.getWindowScrollLeft(),g.value=O.top+zn.getWindowScrollTop(),y.value=c.value.offsetWidth,A.value=c.value.offsetHeight},_=j(0),w=O=>{let{pageX:Y,pageY:re}=O.touches?O.touches[0]:O,te,xe;e.vertical?te=(g.value+A.value-re)*100/A.value:te=(Y-v.value)*100/y.value,xe=(e.max-e.min)*(te/100)+e.min;const Ue=e.range?e.modelValue[_.value]:e.modelValue||0;xe=Ue+Math.round(xe/e.step-Ue/e.step)*e.step,e.reversed&&(xe=e.max-xe+e.min),e.vertical&&(xe=e.max-xe+e.min),$(xe)},$=O=>{let Y=O,re;if(e.range)if(re=e.modelValue?[...e.modelValue]:[],_.value===0){let te=e.modelValue?e.modelValue[1]:e.max;Y<e.min?Y=e.min:Y>te&&(Y=te),re[0]=Y,re[1]=re[1]||e.max}else{let te=e.modelValue?e.modelValue[0]:e.min;Y>e.max?Y=e.max:Y<te&&(Y=te),re[0]=re[0]||e.min,re[1]=Y}else Y<e.min&&(Y=e.min),Y>e.max&&(Y=e.max),re=Y;a("update:modelValue",re),a("change",re)},x=j(!1),E=O=>x.value=O,I=(O,Y=0)=>{E(!0),B(),_.value=Y,O.preventDefault()},F=O=>{x.value&&(E(!1),document.removeEventListener("mousemove",P),a("slideend",{event:O,value:e.modelValue}))},P=O=>{x.value&&(w(O),O==null||O.preventDefault())},L=(O,Y=0)=>{e.disabled||(I(O,Y),document.addEventListener("mousemove",P),document.addEventListener("mouseup",F),O.preventDefault())},J=(O,Y=0)=>{switch(_.value=Y,O.code){case"ArrowUp":e.vertical&&(e.reversed?q():de()),O.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?de():q()),O.preventDefault();break;case"ArrowRight":e.reversed?de():q(),O.preventDefault();break;case"ArrowLeft":e.reversed?q():de(),O.preventDefault();break}},q=()=>{let O=0;e.range?O=e.modelValue[_.value]+e.step:O=e.modelValue+e.step,$(O)},de=()=>{let O=0;e.range?O=e.modelValue[_.value]-e.step:O=e.modelValue-e.step,$(O)},$e=O=>{if(!e.disabled&&!zn.hasClass(O.target,"thumb")){if(e.range){let Y=(e.vertical?O.offsetY/O.target.clientHeight:O.offsetX/O.target.clientWidth)*100,re=(s()+u())/2;Y<re?_.value=e.reversed?1:0:_.value=e.reversed?0:1}B(),w(O)}};return()=>t("div",{ref:O=>c.value=O,class:n.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:$e},[t("div",{class:"track",ref:O=>h.value=O},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:m.value,onMousedown:O=>L(O),onTouchstart:O=>I(O),onTouchmove:O=>P(O),onTouchend:O=>F(O),onKeydown:O=>J(O),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:p.value,onMousedown:O=>L(O,1),onTouchstart:O=>I(O,1),onTouchmove:O=>P(O),onTouchend:O=>F(O),onKeydown:O=>J(O,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(f()+1)].map((O,Y)=>{let re=Y/f();return Y%r()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${re} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${re} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-Y]:o.value[f()-Y]:e.labels?e.labels[Y]:o.value[Y]])})])])}}),Qv={install(e){e.component(cd.name,cd)}},ws=R({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:V(()=>X("ui tab segment",k(e.active,"active"),De(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),md=R({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:n}){const s=j(e.activeIndex);rt(()=>e.activeIndex,r=>{s.value=r});const u=(r,f)=>{s.value!==f&&(s.value=f,a("update:activeIndex",f),a("tab-change",{event:r,index:f})),a("tab-click",{event:r,index:f})},d=(r,f)=>{r.key==="Enter"&&u(r,f)},m=V(()=>{var r,f;let c=[];return(r=n.default)!=null&&r.call(n)&&((f=n.default)==null||f.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),p=V(()=>!e.secondary&&!e.pointing&&!e.text),o=V(()=>X("ui menu",k(p.value,"tabular attached"),k(e.pointing,"pointing"),k(e.secondary,"secondary"),k(e.text,"text")));return{onClick:u,onKeyDown:d,tabIndex:s,tabs:m,tabMenuClass:o,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((n,s)=>t("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:u=>this.onClick(u,s),onKeydown:u=>this.onKeyDown(u,s),tabindex:0},[n.props.header])),a=()=>this.tabs.map((n,s)=>t(ws,Ni(n.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var u,d;return[(d=(u=n.children).default)==null?void 0:d.call(u)]}}));return t(Se,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),Zv={install(e){e.component(md.name,md),e.component(ws.name,ws)}};function e1(e,a){e.indexOf(a)===-1&&e.push(a)}const Ym=(e,a,n)=>Math.min(Math.max(n,e),a),Tt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Ll=e=>typeof e=="number",Qi=e=>Array.isArray(e)&&!Ll(e[0]),t1=(e,a,n)=>{const s=a-e;return((n-e)%s+s)%s+e};function i1(e,a){return Qi(e)?e[t1(0,e.length,a)]:e}const Jm=(e,a,n)=>-n*e+n*a+e,Wm=()=>{},mi=e=>e,fo=(e,a,n)=>a-e===0?1:(n-e)/(a-e);function Km(e,a){const n=e[e.length-1];for(let s=1;s<=a;s++){const u=fo(0,a,s);e.push(Jm(n,1,u))}}function a1(e){const a=[0];return Km(a,e-1),a}function l1(e,a=a1(e.length),n=mi){const s=e.length,u=s-a.length;return u>0&&Km(a,u),d=>{let m=0;for(;m<s-2&&!(d<a[m+1]);m++);let p=Ym(0,1,fo(a[m],a[m+1],d));return p=i1(n,m)(p),Jm(e[m],e[m+1],p)}}const Xm=e=>Array.isArray(e)&&Ll(e[0]),Ss=e=>typeof e=="object"&&!!e.createAnimation,ca=e=>typeof e=="function",n1=e=>typeof e=="string",Fa={ms:e=>e*1e3,s:e=>e/1e3},Qm=(e,a,n)=>(((1-3*n+3*a)*e+(3*n-6*a))*e+3*a)*e,s1=1e-7,o1=12;function r1(e,a,n,s,u){let d,m,p=0;do m=a+(n-a)/2,d=Qm(m,s,u)-e,d>0?n=m:a=m;while(Math.abs(d)>s1&&++p<o1);return m}function $a(e,a,n,s){if(e===a&&n===s)return mi;const u=d=>r1(d,0,1,e,n);return d=>d===0||d===1?d:Qm(u(d),a,s)}const u1=(e,a="end")=>n=>{n=a==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*e,u=a==="end"?Math.floor(s):Math.ceil(s);return Ym(0,1,u/e)},pd={ease:$a(.25,.1,.25,1),"ease-in":$a(.42,0,1,1),"ease-in-out":$a(.42,0,.58,1),"ease-out":$a(0,0,.58,1)},d1=/\((.*?)\)/;function fd(e){if(ca(e))return e;if(Xm(e))return $a(...e);if(pd[e])return pd[e];if(e.startsWith("steps")){const a=d1.exec(e);if(a){const n=a[1].split(",");return u1(parseFloat(n[0]),n[1].trim())}}return mi}class Zm{constructor(a,n=[0,1],{easing:s,duration:u=Tt.duration,delay:d=Tt.delay,endDelay:m=Tt.endDelay,repeat:p=Tt.repeat,offset:o,direction:r="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=mi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),s=s||Tt.easing,Ss(s)){const h=s.createAnimation(n);s=h.easing,n=h.keyframes||n,u=h.duration||u}this.repeat=p,this.easing=Qi(s)?mi:fd(s),this.updateDuration(u);const c=l1(n,o,Qi(s)?s.map(fd):mi);this.tick=h=>{var v;d=d;let g=0;this.pauseTime!==void 0?g=this.pauseTime:g=(h-this.startTime)*this.rate,this.t=g,g/=1e3,g=Math.max(g-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(g=this.totalDuration);const y=g/this.duration;let A=Math.floor(y),B=y%1;!B&&y>=1&&(B=1),B===1&&A--;const _=A%2;(r==="reverse"||r==="alternate"&&_||r==="alternate-reverse"&&!_)&&(B=1-B);const w=g>=this.totalDuration?1:Math.min(B,1),$=c(this.easing(w));a($),this.pauseTime===void 0&&(this.playState==="finished"||g>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,$)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class c1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Dn=new WeakMap;function ep(e){return Dn.has(e)||Dn.set(e,{transforms:[],values:new Map}),Dn.get(e)}function m1(e,a){return e.has(a)||e.set(a,new c1),e.get(a)}const p1=["","X","Y","Z"],f1=["translate","scale","rotate","skew"],Ol={x:"translateX",y:"translateY",z:"translateZ"},gd={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},g1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:gd,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:mi},skew:gd},Ja=new Map,go=e=>`--motion-${e}`,jl=["x","y","z"];f1.forEach(e=>{p1.forEach(a=>{jl.push(e+a),Ja.set(go(e+a),g1[e])})});const h1=(e,a)=>jl.indexOf(e)-jl.indexOf(a),_1=new Set(jl),tp=e=>_1.has(e),b1=(e,a)=>{Ol[a]&&(a=Ol[a]);const{transforms:n}=ep(e);e1(n,a),e.style.transform=v1(n)},v1=e=>e.sort(h1).reduce(y1,"").trim(),y1=(e,a)=>`${e} ${a}(var(${go(a)}))`,As=e=>e.startsWith("--"),hd=new Set;function C1(e){if(!hd.has(e)){hd.add(e);try{const{syntax:a,initialValue:n}=Ja.has(e)?Ja.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:n})}catch{}}}const Pn=(e,a)=>document.createElement("div").animate(e,a),_d={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Pn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Pn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Pn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Mn={},Ui={};for(const e in _d)Ui[e]=()=>(Mn[e]===void 0&&(Mn[e]=_d[e]()),Mn[e]);const w1=.015,S1=(e,a)=>{let n="";const s=Math.round(a/w1);for(let u=0;u<s;u++)n+=e(fo(0,s-1,u))+", ";return n.substring(0,n.length-2)},bd=(e,a)=>ca(e)?Ui.linearEasing()?`linear(${S1(e,a)})`:Tt.easing:Xm(e)?A1(e):e,A1=([e,a,n,s])=>`cubic-bezier(${e}, ${a}, ${n}, ${s})`;function k1(e,a){for(let n=0;n<e.length;n++)e[n]===null&&(e[n]=n?e[n-1]:a());return e}const $1=e=>Array.isArray(e)?e:[e];function ks(e){return Ol[e]&&(e=Ol[e]),tp(e)?go(e):e}const hl={get:(e,a)=>{a=ks(a);let n=As(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!n&&n!==0){const s=Ja.get(a);s&&(n=s.initialValue)}return n},set:(e,a,n)=>{a=ks(a),As(a)?e.style.setProperty(a,n):e.style[a]=n}};function ip(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function B1(e,a){var n;let s=(a==null?void 0:a.toDefaultUnit)||mi;const u=e[e.length-1];if(n1(u)){const d=((n=u.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";d&&(s=m=>m+d)}return s}function x1(){return window.__MOTION_DEV_TOOLS_RECORD}function T1(e,a,n,s={},u){const d=x1(),m=s.record!==!1&&d;let p,{duration:o=Tt.duration,delay:r=Tt.delay,endDelay:f=Tt.endDelay,repeat:c=Tt.repeat,easing:h=Tt.easing,persist:v=!1,direction:g,offset:y,allowWebkitAcceleration:A=!1,autoplay:B=!0}=s;const _=ep(e),w=tp(a);let $=Ui.waapi();w&&b1(e,a);const x=ks(a),E=m1(_.values,x),I=Ja.get(x);return ip(E.animation,!(Ss(h)&&E.generator)&&s.record!==!1),()=>{const F=()=>{var J,q;return(q=(J=hl.get(e,x))!==null&&J!==void 0?J:I==null?void 0:I.initialValue)!==null&&q!==void 0?q:0};let P=k1($1(n),F);const L=B1(P,I);if(Ss(h)){const J=h.createAnimation(P,a!=="opacity",F,x,E);h=J.easing,P=J.keyframes||P,o=J.duration||o}if(As(x)&&(Ui.cssRegisterProperty()?C1(x):$=!1),w&&!Ui.linearEasing()&&(ca(h)||Qi(h)&&h.some(ca))&&($=!1),$){I&&(P=P.map(de=>Ll(de)?I.toDefaultUnit(de):de)),P.length===1&&(!Ui.partialKeyframes()||m)&&P.unshift(F());const J={delay:Fa.ms(r),duration:Fa.ms(o),endDelay:Fa.ms(f),easing:Qi(h)?void 0:bd(h,o),direction:g,iterations:c+1,fill:"both"};p=e.animate({[x]:P,offset:y,easing:Qi(h)?h.map(de=>bd(de,o)):void 0},J),p.finished||(p.finished=new Promise((de,$e)=>{p.onfinish=de,p.oncancel=$e}));const q=P[P.length-1];p.finished.then(()=>{v||(hl.set(e,x,q),p.cancel())}).catch(Wm),A||(p.playbackRate=1.000001)}else if(u&&w)P=P.map(J=>typeof J=="string"?parseFloat(J):J),P.length===1&&P.unshift(parseFloat(F())),p=new u(J=>{hl.set(e,x,L?L(J):J)},P,Object.assign(Object.assign({},s),{duration:o,easing:h}));else{const J=P[P.length-1];hl.set(e,x,I&&Ll(J)?I.toDefaultUnit(J):J)}return m&&d(e,a,P,{duration:o,delay:r,easing:h,repeat:c,offset:y},"motion-one"),E.setAnimation(p),p&&!B&&p.pause(),p}}const E1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function R1(e,a){var n;return typeof e=="string"?a?((n=a[e])!==null&&n!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const z1=e=>e(),ap=(e,a,n=Tt.duration)=>new Proxy({animations:e.map(z1).filter(Boolean),duration:n,options:a},P1),D1=e=>e.animations[0],P1={get:(e,a)=>{const n=D1(e);switch(a){case"duration":return e.duration;case"currentTime":return Fa.s((n==null?void 0:n[a])||0);case"playbackRate":case"playState":return n==null?void 0:n[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(M1)).catch(Wm)),e.finished;case"stop":return()=>{e.animations.forEach(s=>ip(s))};case"forEachNative":return s=>{e.animations.forEach(u=>s(u,e))};default:return typeof(n==null?void 0:n[a])>"u"?void 0:()=>e.animations.forEach(s=>s[a]())}},set:(e,a,n)=>{switch(a){case"currentTime":n=Fa.ms(n);case"playbackRate":for(let s=0;s<e.animations.length;s++)e.animations[s][a]=n;return!0}return!1}},M1=e=>e.finished;function I1(e,a,n){return ca(e)?e(a,n):e}function F1(e){return function(a,n,s={}){a=R1(a);const u=a.length,d=[];for(let m=0;m<u;m++){const p=a[m];for(const o in n){const r=E1(s,o);r.delay=I1(r.delay,m,u);const f=T1(p,o,n[o],r,e);d.push(f)}}return ap(d,s,s.duration)}}const V1=F1(Zm);function N1(e,a={}){return ap([()=>{const n=new Zm(e,[0,1],a);return n.finished.catch(()=>{}),n}],a,a.duration)}function H1(e,a,n){return(ca(e)?N1:V1)(e,a,n)}const ge=(e,a)=>(n,{duration:s,keyframesOverride:u={}})=>H1(n,{...e,...u},{autoplay:!1,...a,duration:s}),vd=ge({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),L1=ge({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),O1=ge({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),j1=ge({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),q1=ge({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),U1=ge({opacity:[0,1]},{duration:.5,offset:[0,1]}),G1=ge({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Y1=ge({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),J1=ge({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),W1=ge({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),K1=ge({opacity:[1,0]},{duration:.5,offset:[0,1]}),X1=ge({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),Q1=ge({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),Z1=ge({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ey=ge({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),ty=ge({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),iy=ge({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ay=ge({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ly=ge({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ny=ge({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),sy=ge({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),oy=ge({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),ry=ge({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),uy=ge({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),dy=ge({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),cy=ge({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),my=ge({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),py=ge({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),fy=ge({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),gy=ge({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),hy=ge({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),lp={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},np={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},sp={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},_y={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},by=ge({transformOrigin:"top center",...lp},{offset:[0,1]}),vy=ge({transformOrigin:"bottom center",...lp},{offset:[0,1]}),yy=ge({transformOrigin:"center right",...np},{offset:[0,1]}),Cy=ge({transformOrigin:"center left",...np},{offset:[0,1]}),wy=ge({transformOrigin:"top center",...sp},{offset:[0,1]}),Sy=ge({transformOrigin:"bottom center",...sp},{offset:[0,1]}),yd=ge({transformOrigin:"center left",..._y},{offset:[0,1]}),_i=.8,Zi={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ea={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ta={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},ia={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ay=ge({transformOrigin:"top center",transform:Zi.transform,opacity:Zi.opacity},{duration:_i,offset:Zi.offset}),ky=ge({transformOrigin:"bottom center",transform:Zi.transform,opacity:Zi.opacity},{duration:_i,offset:Zi.offset}),$y=ge({transformOrigin:"center right",transform:ea.transform,opacity:ea.opacity},{duration:_i,offset:ea.offset}),By=ge({transformOrigin:"center left",transform:ea.transform,opacity:ea.opacity},{duration:_i,offset:ea.offset}),xy=ge({transformOrigin:"top center",transform:ta.transform,opacity:ta.opacity},{duration:_i,offset:ta.offset}),Ty=ge({transformOrigin:"bottom center",transform:ta.transform,opacity:ta.opacity},{duration:_i,offset:ta.offset}),Ey=ge({transformOrigin:"center right",transform:ia.transform,opacity:ia.opacity},{duration:_i,offset:ia.offset}),Ry=ge({transformOrigin:"center left",transform:ia.transform,opacity:ia.opacity},{duration:_i,offset:ia.offset}),zy=ge({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Dy=ge({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Py=ge({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),My=ge({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Iy=ge({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),Fy=ge({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Vy=ge({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Ny=ge({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Hy=ge({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Ly={browse:[vd,L1],"browse right":[vd,O1],drop:[j1,q1],fade:[U1,K1],"fade up":[G1,X1],"fade down":[Y1,Q1],"fade left":[J1,Z1],"fade right":[W1,ey],fly:[ty,sy],"fly up":[iy,oy],"fly down":[ay,ry],"fly left":[ly,uy],"fly right":[ny,dy],"horizontal flip":[cy,my],"vertical flip":[py,fy],scale:[gy,hy],"slide up":[vy,Sy],"slide down":[by,wy],"slide left":[yy,yd],"slide right":[Cy,yd],"swing up":[ky,Ty],"swing down":[Ay,xy],"swing left":[$y,Ey],"swing right":[By,Ry],zoom:[zy,Dy]},Oy={bounce:[Py,void 0],flash:[My,void 0],glow:[Iy,void 0],jiggle:[Fy,void 0],pulse:[Vy,void 0],shake:[Ny,void 0],tada:[Hy,void 0]},op=e=>({...Ly,...Oy})[e],jy=e=>{const[a,n]=op(e.animation),s=V(()=>e.duration?e.duration/1e3:.5),u=V(()=>(m,p)=>{if(!a)return p();const o=a(m,{duration:s.value});o.play(),o.finished.then(p)}),d=V(()=>(m,p)=>{if(!n)return p();const o=n(m,{duration:s.value});o.play(),o.finished.then(p)});return{onEnter:u,onLeave:d}},$s=R({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:n}=jy(e);return{onEnter:a,onLeave:n}},render(){return t(rn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Bs=R({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,n]=op(e.animation),s=V(()=>(d,m)=>{if(!a)return m();const p=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});p.play(),p.finished.then(m)}),u=V(()=>(d,m)=>{if(!n)return m();const p=n(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});p.play(),p.finished.then(m)});return{onEnter:s,onLeave:u}},render(){return t(rm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),qy={install(e){e.component($s.name,$s),e.component(Bs.name,Bs)}},Uy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:cv,Calendar:$v,Checkbox:Bv,Dimmer:xv,Dropdown:Dv,Embed:Pv,Modal:Ov,Popup:qv,Progress:Yv,Rating:Wv,Search:Kv,Sidebar:Xv,Slider:Qv,Tab:Zv,Transition:qy},Symbol.toStringTag,{value:"Module"})),In=R({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...po()},setup(e,{slots:a}){const n=V(()=>X("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var s;return e.attached?t(st,{attached:e.attached,vertical:e.vertical},{default:()=>{var u;return[(u=a.default)==null?void 0:u.call(a)]}}):t("div",{class:n.value},[(s=a.default)==null?void 0:s.call(a)])}}}),Gy=R({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const n=V(()=>X("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var s,u;return e.verticalAttached?t("div",{class:n.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(s=a.default)==null?void 0:s.call(a)])]):t("div",{class:n.value,style:"display: block !important;"},[(u=a.default)==null?void 0:u.call(a)])}}});function Fn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Yy=R({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Um()},setup(e,{emit:a}){const{colorClasses:n}=Gm(e),s=V(()=>{var m,p,o,r,f;return X(e.centered&&"center aligned",e.type||"neutral",n.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((o=e.actionsProps)==null?void 0:o.attached)==="bottom"&&"top attached",((r=e.actionsProps)==null?void 0:r.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),u=j(e.showProgressUp?0:100),d=()=>{const m=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){u.value>=100&&clearInterval(p),u.value+=1;return}u.value<=0&&clearInterval(p),u.value-=1},m)},500)};return gi(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:s,progress:u}},render(){var e;let a,n,s;return t(Gy,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var u,d,m,p;return[this.showProgress==="top"&&t(Hl,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((u=this.actionsProps)==null?void 0:u.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(In,this.actionsProps,Fn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(In,this.actionsProps,Fn(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&t(In,this.actionsProps,Fn(s=this.actions({close:()=>this.$emit("close")}))?s:{default:()=>[s]}),this.showProgress==="bottom"&&t(Hl,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),Jy=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],Wy=({defaultValue:e}={})=>({position:{type:String,validator:a=>Jy.includes(a),default:e}}),Ky=e=>({positionClasses:V(()=>e.position||"")});function Xy(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const Qy=R({name:"SuiToastContainer",props:{horizontal:Boolean,...po(),...Wy({defaultValue:"top right"})},setup(e){const{items:a,remove:n}=rp(),{attachedClasses:s}=qm(e),{positionClasses:u}=Ky(e);return{classes:V(()=>X(s.value||u.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:n,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[0,`${d.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:m,marginBottom:p}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[`${d.offsetWidth}px`,0],p=[`${d.offsetHeight}px`,0],o=e.horizontal?{width:m}:{height:p},r=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...o,marginBottom:r}}}},render(){let e;return t(nn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Bs,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},Xy(e=this.items.filter(({position:a,attached:n})=>this.attached?n===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...n})=>t(Yy,Ni({key:a},n,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),Zy=j(1),wa=j([]),rp=()=>({items:wa,add:e=>{e.position=e.position||"top right",wa.value=[...wa.value,{id:Zy.value++,...e}]},remove:e=>{wa.value=wa.value.filter(a=>a.id!==e)}}),it=()=>{var e;const a=(e=Ot())==null?void 0:e.appContext,{add:n}=rp();return{toast:s=>{const{position:u,attached:d,horizontal:m}=s;iC({position:u,attached:d,horizontal:m})||tC(a,{position:u,attached:d,horizontal:m}),n(s)}}},eC=(e,{appContext:a,element:n}={})=>{const s=n||document.createElement("div");return a&&(e.appContext=a),Dl(e,s),{vNode:e,el:s}},tC=(e,{position:a="top right",attached:n,horizontal:s=!1}={})=>{const u=G(Qy,{position:a,attached:n,horizontal:s}),{el:d}=eC(u,{appContext:e});return{vNode:u,el:d}},iC=({position:e="top right",attached:a,horizontal:n})=>{const s=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(s)};function aC(e){Object.values({...Wb,...av,...dv,...Uy}).map(a=>e.use(a))}const lC={install:aC},nC=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=zm(),n=V(()=>{const u=a.currentRoute.value.path;return u.lastIndexOf("/")===u.length-1?u.slice(0,-1):u}),s=u=>{u.preventDefault();const m=u.target.parentElement.getAttribute("href"),p=m.slice(m.indexOf("#")+1),o=document.getElementById(p);o&&o.scrollIntoView({behavior:"smooth"})};return(u,d)=>{const m=b("SuiHeader"),p=b("SuiGridColumn"),o=b("SuiGridRow");return z(),pe(Se,null,[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[l(Be(e.label)+" ",1),t(S(Rm),{to:`${n.value}#${u.$attrs.id}`,target:"_self",onClick:s},{default:i(()=>[t(S(Ke),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[t(S(Ke),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),C("p",null,[na(u.$slots,"default",{},void 0,!0)])],64)}}}),sC=ye(nC,[["__scopeId","data-v-a2b78897"]]),oC={mounted(e,a){var u;const n=a.modifiers,s=a.value;n.script||s==="script"?e.className="language-javascript":e.className="language-markup",Z_.highlightElement(e.children[0]),(u=e.children[0].parentElement)==null||u.setAttribute("tabindex","-1")}},rC={key:0},uC={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,n)=>{const s=b("SuiGridColumn"),u=b("SuiGridRow");return z(),H(u,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[na(a.$slots,"default")]),_:3}),t(s,{width:16},{default:i(()=>[t(S($s),{animation:"scale"},{default:i(()=>[e.hideCode?lo("",!0):el((z(),pe("pre",rC,[C("code",null,Be(e.code)+`
`,1)])),[[S(oC)]])]),_:1})]),_:1})]),_:3})}}},ee={__name:"DocSection",props:["label","code"],setup(e){const a=j(!0),n=()=>a.value=!a.value;return(s,u)=>{const d=b("SuiGrid");return z(),pe("section",null,[t(d,{columns:2},{default:i(()=>[t(sC,Ni({label:e.label,"on-click":n},s.$attrs),{default:i(()=>[na(s.$slots,"description")]),_:3},16,["label"]),t(uC,{code:e.code,"hide-code":a.value},{default:i(()=>[na(s.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},dC=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,cC={__name:"ButtonDoc",setup(e){const a=j("Follow"),n=()=>a.value=a.value==="Follow"?"Following":"Follow";return(s,u)=>(z(),H(ee,{label:"Button",code:dC},{description:i(()=>[l(" A standard button ")]),example:i(()=>[t(S(M),{onClick:n},{default:i(()=>[l(Be(a.value),1)]),_:1})]),_:1}))}},mC=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,pC={__name:"EmphasisDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Emphasis",code:mC},{description:i(()=>[l(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(S(M),{primary:""},{default:i(()=>[l("Save")]),_:1}),t(S(M),{secondary:""},{default:i(()=>[l("Okay")]),_:1}),t(S(M),null,{default:i(()=>[l("Cancel")]),_:1})]),_:1}))}},fC=`<template>
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
</template>`,gC={__name:"AnimatedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Animated",code:fC},{description:i(()=>[l(" A button can animate to show hidden content ")]),example:i(()=>[t(S(M),{animated:""},{default:i(()=>[t(S(ui),{visible:""},{default:i(()=>[l("Next")]),_:1}),t(S(ui),{hidden:""},{default:i(()=>[t(S(Ke),{name:"arrow right"})]),_:1})]),_:1}),t(S(M),{animated:"vertical"},{default:i(()=>[t(S(ui),{visible:""},{default:i(()=>[t(S(Ke),{name:"shop"})]),_:1}),t(S(ui),{hidden:""},{default:i(()=>[l("Shop")]),_:1})]),_:1}),t(S(M),{animated:"fade"},{default:i(()=>[t(S(ui),{visible:""},{default:i(()=>[l(" Sign-up for a Pro account ")]),_:1}),t(S(ui),{hidden:""},{default:i(()=>[l("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},hC=`<template>
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
</template>`,_C={__name:"LabeledDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Labeled",code:hC},{description:i(()=>[l(" A button can appear alongside a label ")]),example:i(()=>[t(S(M),{labeled:"right",as:"div"},{default:i(()=>[t(S(M),{icon:"heart",content:" Like"}),t(S(Mt),{basic:""},{default:i(()=>[l("2,048")]),_:1})]),_:1}),t(S(M),{labeled:"left",as:"div"},{default:i(()=>[t(S(Mt),{basic:"",pointing:"right"},{default:i(()=>[l("2,048")]),_:1}),t(S(M),{icon:"heart",content:" Like"})]),_:1}),t(S(M),{labeled:"left",as:"div"},{default:i(()=>[t(S(Mt),{basic:""},{default:i(()=>[l("1,048")]),_:1}),t(S(M),{icon:"fork"})]),_:1})]),_:1}))}},bC=`<template>
  <SuiButton icon="cloud" />
</template>`,vC={__name:"IconDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Icon",code:bC},{description:i(()=>[l(" A button can have only an icon ")]),example:i(()=>[t(S(M),{icon:"cloud"})]),_:1}))}},yC=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,CC={__name:"LabeledIconDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Labeled Icon",code:yC},{description:i(()=>[l(" A button can use an icon as a label ")]),example:i(()=>[t(S(M),{labeled:"",icon:"pause",content:"Pause"}),t(S(M),{labeled:"right",icon:"right arrow",content:"Next"}),t(S(M),{labeled:"",icon:""},{default:i(()=>[t(S(Ke),{loading:"",name:"spinner"}),l(" Loading ")]),_:1})]),_:1}))}},wC=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,SC={__name:"BasicDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Basic",code:wC},{description:i(()=>[l(" A basic button is less pronounced ")]),example:i(()=>[t(S(M),{basic:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(S(M),{basic:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(S(M),{basic:"",positive:""},{default:i(()=>[l("Positive")]),_:1}),t(S(M),{basic:"",negative:""},{default:i(()=>[l("Negative")]),_:1})]),_:1}))}},AC=`<template>
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
</template>`,kC={__name:"TertiaryDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Tertiary",code:AC},{description:i(()=>[l(" An none bordered less important button ")]),example:i(()=>[t(S(M),{tertiary:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(S(M),{tertiary:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(S(M),{tertiary:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(S(M),{tertiary:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(S(M),{tertiary:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(S(M),{tertiary:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(S(M),{tertiary:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(S(M),{tertiary:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(S(M),{tertiary:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(S(M),{tertiary:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(S(M),{tertiary:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(S(M),{tertiary:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(S(M),{tertiary:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(S(M),{tertiary:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(S(M),{tertiary:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},$C=`<template>
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
</template>`,BC={__name:"InvertedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Inverted",code:$C},{description:i(()=>[l(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(S(mt),{inverted:""},{default:i(()=>[t(S(M),{inverted:"",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(S(M),{inverted:"",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(S(M),{inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(S(M),{inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(S(M),{inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(S(M),{inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(S(M),{inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(S(M),{inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(S(M),{inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(S(M),{inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(S(M),{inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(S(M),{inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(S(M),{inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(S(M),{inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(S(M),{inverted:"",color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1}))}},xC=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,TC={__name:"ButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Buttons",code:xC},{description:i(()=>[l(" Buttons can exist together as a group ")]),example:i(()=>[t(S(st),null,{default:i(()=>[t(S(M),{content:"One"}),t(S(M),{content:"Two"}),t(S(M),{content:"Three"})]),_:1})]),_:1}))}},EC=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,RC={__name:"IconButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Icon Buttons",code:EC},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(S(st),{icon:""},{default:i(()=>[t(S(M),{icon:"align left"}),t(S(M),{icon:"align center"}),t(S(M),{icon:"align right"}),t(S(M),{icon:"align justify"})]),_:1})]),_:1}))}},zC=C("div",{class:"or"},null,-1),DC=C("div",{class:"or","data-text":"ou"},null,-1),PC=`<template>
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
</template>`,MC={__name:"ConditionalsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Conditionals",code:PC},{description:i(()=>[l(" Button groups can contain conditionals ")]),example:i(()=>[t(S(st),null,{default:i(()=>[t(S(M),{content:"Cancel"}),zC,t(S(M),{content:"Save",positive:""})]),_:1}),t(S(st),null,{default:i(()=>[t(S(M),{content:"un"}),DC,t(S(M),{content:"deux",positive:""})]),_:1})]),_:1}))}},IC=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,FC={__name:"ActiveDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Active",code:IC},{description:i(()=>[l(" A button can show it is currently the active user selection ")]),example:i(()=>[t(S(M),{active:"",icon:"user",content:" Follow"})]),_:1}))}},VC=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,NC={__name:"DisabledDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Disabled",code:VC},{description:i(()=>[l(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(S(M),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},HC=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,LC={__name:"LoadingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Loading",code:HC},{description:i(()=>[l(" A button can show a loading indicator ")]),example:i(()=>[t(S(M),{loading:"",content:"Loading"}),t(S(M),{loading:"double",primary:"",content:"Loading"}),t(S(M),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},OC=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,jC={__name:"SocialDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Social",code:OC},{description:i(()=>[l(" A button can be formatted to link to a social website ")]),example:i(()=>[t(S(M),{facebook:"",icon:"facebook",content:" Facebook"}),t(S(M),{twitter:"",icon:"twitter",content:" Twitter"}),t(S(M),{vk:"",icon:"vk",content:"VK"}),t(S(M),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(S(M),{instagram:"",icon:"instagram",content:" Instagram"}),t(S(M),{youtube:"",icon:"youtube",content:" YouTube"}),t(S(M),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(S(M),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},qC=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,UC={__name:"SizeDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Size",code:qC},{description:i(()=>[l(" A button can have different sizes ")]),example:i(()=>[t(S(M),{size:"mini",content:"Mini"}),t(S(M),{size:"tiny",content:"Tiny"}),t(S(M),{size:"small",content:"Small"}),t(S(M),{size:"medium",content:"Medium"}),t(S(M),{size:"large",content:"Large"}),t(S(M),{size:"big",content:"Big"}),t(S(M),{size:"huge",content:"Huge"}),t(S(M),{size:"massive",content:"Massive"})]),_:1}))}},GC=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,YC={__name:"FloatedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Floated",code:GC},{description:i(()=>[l(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(S(M),{floated:"left",content:"Left Floated"}),t(S(M),{floated:"right",content:"Right Floated"})]),_:1}))}},JC=`<template>
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
</template>`,WC={__name:"ColoredDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Colored",code:JC},{description:i(()=>[l(" A button can have different colors ")]),example:i(()=>[t(S(M),{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(S(M),{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(S(M),{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(S(M),{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(S(M),{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(S(M),{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(S(M),{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(S(M),{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(S(M),{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(S(M),{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(S(M),{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(S(M),{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(S(M),{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1}))}},KC=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,XC={__name:"CompactDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Compact",code:KC},{description:i(()=>[l(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(S(M),{compact:"",content:"Hold"}),t(S(M),{compact:"",icon:"pause"}),t(S(M),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},QC=`<template>
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
<\/script>`,ZC={__name:"ToggleDoc",setup(e){const a=j(!1);return(n,s)=>(z(),H(ee,{label:"Toggle",code:QC},{description:i(()=>[l(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(S(M),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ew=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,tw={__name:"PositiveDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Positive",code:ew},{description:i(()=>[l(" A button can hint towards a positive consequence ")]),example:i(()=>[t(S(M),{positive:"",content:"Positive Button"})]),_:1}))}},iw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,aw={__name:"NegativeDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Negative",code:iw},{description:i(()=>[l(" A button can hint towards a negative consequence ")]),example:i(()=>[t(S(M),{negative:"",content:"Negative Button"})]),_:1}))}},lw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,nw={__name:"FluidDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Fluid",code:lw},{description:i(()=>[l(" A button can take the width of its container ")]),example:i(()=>[t(S(M),{fluid:"",content:"Fits container"})]),_:1}))}},sw=`<template>
  <SuiButton circular icon="settings" />
</template>`,ow={__name:"CircularDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Circular",code:sw},{description:i(()=>[l(" A button can be circular ")]),example:i(()=>[t(S(M),{circular:"",icon:"settings"})]),_:1}))}},rw=C("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),uw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,dw={__name:"VerticallyAttachedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Vertically Attached",code:uw},{description:i(()=>[l(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(S(M),{attached:"top",content:"Top"}),t(S(mt),{attached:""},{default:i(()=>[rw]),_:1}),t(S(M),{attached:"bottom",content:"Bottom"})]),_:1}))}},cw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,mw={__name:"HorizontallyAttachedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Horizontally Attached",code:cw},{description:i(()=>[l(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(S(M),{attached:"left",content:"Left"}),t(S(M),{attached:"right",content:"Right"})]),_:1}))}},pw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,fw={__name:"VerticalButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Vertical Buttons",code:pw},{description:i(()=>[l(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(S(st),{vertical:""},{default:i(()=>[t(S(M),null,{default:i(()=>[l("Feed")]),_:1}),t(S(M),null,{default:i(()=>[l("Messages")]),_:1}),t(S(M),null,{default:i(()=>[l("Events")]),_:1}),t(S(M),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"StackableButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Stackable Buttons",code:gw},{description:i(()=>[l(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(S(st),{stackable:""},{default:i(()=>[t(S(M),null,{default:i(()=>[l("Feed")]),_:1}),t(S(M),null,{default:i(()=>[l("Messages")]),_:1}),t(S(M),null,{default:i(()=>[l("Events")]),_:1}),t(S(M),null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,bw={__name:"LabeledIconButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Icon Buttons",code:_w},{description:i(()=>[l(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(S(st),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(S(M),{icon:"pause",content:"Pause"}),t(S(M),{icon:"play",content:"Play"}),t(S(M),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"MixedGroupDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Mixed Group",code:vw},{description:i(()=>[l(" Button groups can show groups of icons ")]),example:i(()=>[t(S(st),null,{default:i(()=>[t(S(M),{labeled:"",icon:"left chevron",content:"Back"}),t(S(M),{icon:"stop",content:"Stop"}),t(S(M),{icon:"",labeled:"right"},{default:i(()=>[t(S(Ke),{name:"right chevron"}),l(" Forward ")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
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
</template>`,ww={__name:"EqualWidthDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Equal Width",code:Cw},{description:i(()=>[l(" Groups can have their widths divided evenly ")]),example:i(()=>[t(S(st),{widths:5},{default:i(()=>[t(S(M),null,{default:i(()=>[l("Overview")]),_:1}),t(S(M),null,{default:i(()=>[l("Specs")]),_:1}),t(S(M),null,{default:i(()=>[l("Warranty")]),_:1}),t(S(M),null,{default:i(()=>[l("Reviews")]),_:1}),t(S(M),null,{default:i(()=>[l("Support")]),_:1})]),_:1}),t(S(st),{widths:3},{default:i(()=>[t(S(M),null,{default:i(()=>[l("Overview")]),_:1}),t(S(M),null,{default:i(()=>[l("Specs")]),_:1}),t(S(M),null,{default:i(()=>[l("Support")]),_:1})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"ColoredButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Colored Buttons",code:Sw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(S(st),{color:"blue"},{default:i(()=>[t(S(M),null,{default:i(()=>[l("One")]),_:1}),t(S(M),null,{default:i(()=>[l("Two")]),_:1}),t(S(M),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},kw=`<template>
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
</template>`,$w={__name:"BasicButtonsDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Basic Buttons",code:kw},{description:i(()=>[l(" A button group can be less pronounced ")]),example:i(()=>[t(S(st),{basic:""},{default:i(()=>[t(S(M),null,{default:i(()=>[l("One")]),_:1}),t(S(M),null,{default:i(()=>[l("Two")]),_:1}),t(S(M),null,{default:i(()=>[l("Three")]),_:1})]),_:1}),t(S(st),null,{default:i(()=>[t(S(M),{basic:"",color:"red"},{default:i(()=>[l("One")]),_:1}),t(S(M),{basic:"",color:"blue"},{default:i(()=>[l("Two")]),_:1}),t(S(M),{basic:"",color:"green"},{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"GroupSizesDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Group Sizes",code:Bw},{description:i(()=>[l(" Groups can have a shared color ")]),example:i(()=>[t(S(st),{size:"large"},{default:i(()=>[t(S(M),null,{default:i(()=>[l("One")]),_:1}),t(S(M),null,{default:i(()=>[l("Two")]),_:1}),t(S(M),null,{default:i(()=>[l("Three")]),_:1})]),_:1})]),_:1}))}},Tw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:cC},{id:"emphasis",label:"Emphasis",category:"Types",component:pC},{id:"animated",label:"Animated",category:"Types",component:gC},{id:"labeled",label:"Labeled",category:"Types",component:_C},{id:"icon",label:"Icon",category:"Types",component:vC},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:CC},{id:"basic",label:"Basic",category:"Types",component:SC},{id:"tertiary",label:"Tertiary",category:"Types",component:kC},{id:"inverted",label:"Inverted",category:"Types",component:BC},{id:"buttons",label:"Buttons",category:"Groups",component:TC},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:RC},{id:"content",label:"Content",category:"Content",component:MC},{id:"active",label:"Active",category:"States",component:FC},{id:"disabled",label:"Disabled",category:"States",component:NC},{id:"loading",label:"Loading",category:"States",component:LC},{id:"social",label:"Social",category:"Variations",component:jC},{id:"size",label:"Size",category:"Variations",component:UC},{id:"floated",label:"Floated",category:"Variations",component:YC},{id:"colored",label:"Colored",category:"Variations",component:WC},{id:"compact",label:"Compact",category:"Variations",component:XC},{id:"toggle",label:"Toggle",category:"Variations",component:ZC},{id:"positive",label:"Positive",category:"Variations",component:tw},{id:"negative",label:"Negative",category:"Variations",component:aw},{id:"fluid",label:"Fluid",category:"Variations",component:nw},{id:"circular",label:"Circular",category:"Variations",component:ow},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:dw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:mw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:fw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:hw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:bw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:yw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:ww},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Aw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:$w},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:xw}];return(n,s)=>(z(),H(Hi,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Ew=C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Rw=`<template>
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
</template>`,zw={__name:"ContainerDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Container",code:Rw},{description:i(()=>[l(" A standard container ")]),example:i(()=>[t(S(ci),null,{default:i(()=>[Ew]),_:1})]),_:1}))}},Dw=C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,Mw={__name:"TextContainerDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Text Container",code:Pw},{description:i(()=>[l(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(S(ci),{text:""},{default:i(()=>[t(S(me),{as:"h2"},{default:i(()=>[l("Header")]),_:1}),Dw]),_:1})]),_:1}))}},Iw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Fw={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Text Alignment",code:Iw},{description:i(()=>[l(" A container can specify its text alignment ")]),example:i(()=>[t(S(ci),{textAlign:"left"},{default:i(()=>[l("Left Aligned")]),_:1}),t(S(ci),{textAlign:"center"},{default:i(()=>[l("Center Aligned")]),_:1}),t(S(ci),{textAlign:"right"},{default:i(()=>[l("Right Aligned")]),_:1})]),_:1}))}},Vw=C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Nw=`<template>
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
</template>`,Hw={__name:"FluidDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Fluid",code:Nw},{description:i(()=>[l(" A fluid container has no maximum width ")]),example:i(()=>[t(S(ci),{fluid:""},{default:i(()=>[t(S(me),{as:"h2"},{default:i(()=>[l("Dogs Roles with Humans")]),_:1}),Vw]),_:1})]),_:1}))}},Lw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:zw},{id:"text-container",label:"Text Container",category:"Types",component:Mw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Fw},{id:"fluid",label:"Fluid",category:"Variations",component:Hw}];return(n,s)=>(z(),H(Hi,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Ow=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,jw={__name:"DividerDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Divider",code:Ow},{description:i(()=>[l(" A standard divider ")]),example:i(()=>[t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(S(We)),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},qw=C("label",null,"Username",-1),Uw=C("input",{type:"text",placeholder:"Username"},null,-1),Gw=C("label",null,"Password",-1),Yw=C("input",{type:"password",placeholder:"Password"},null,-1),Jw=`<template>
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
</template>`,Ww={__name:"VerticalDividerDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Vertical Divider",code:Jw},{description:i(()=>[l(" A divider can segment content vertically. ")]),example:i(()=>[t(S(mt),{placeholder:""},{default:i(()=>[t(S(hs),{columns:"equal"},{default:i(()=>[t(S(Fl),null,{default:i(()=>[t(S(gs),null,{default:i(()=>[t(S(Il),null,{default:i(()=>[qw,Uw]),_:1}),t(S(Il),null,{default:i(()=>[Gw,Yw]),_:1}),t(S(M),{primary:""},{default:i(()=>[l("Login")]),_:1})]),_:1})]),_:1}),t(S(Fl),{textAlign:"middle"},{default:i(()=>[t(S(M),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(S(We),{vertical:""},{default:i(()=>[l("Or")]),_:1})]),_:1})]),_:1}))}},Kw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Xw={__name:"HorizontalDividerDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Horizontal Divider",code:Kw},{description:i(()=>[l(" A divider can segment content horizontally ")]),example:i(()=>[t(S(mt),{basic:"",textAlign:"center"},{default:i(()=>[t(S(ms),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(S(We),{horizontal:""},{default:i(()=>[l("Or")]),_:1}),t(S(M),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Qw=`<template>
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
</template>`,Zw={__name:"HorizontalAlignmentDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Horizontal Alignment",code:Qw},{description:i(()=>[l(" A horizontal divider can be aligned ")]),example:i(()=>[t(S(We),{horizontal:"",textAlign:"left"},{default:i(()=>[t(S(Ke),{name:"left align"}),l(" Left Aligned ")]),_:1}),t(S(We),{horizontal:"",textAlign:"center"},{default:i(()=>[t(S(Ke),{name:"center align"}),l(" Center Aligned ")]),_:1}),t(S(We),{horizontal:"",textAlign:"right"},{default:i(()=>[t(S(Ke),{name:"right align"}),l(" Right Aligned ")]),_:1})]),_:1}))}},eS=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,tS={__name:"InvertedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Inverted",code:eS},{description:i(()=>[l(" A divider can have its colors inverted ")]),example:i(()=>[t(S(mt),{inverted:""},{default:i(()=>[t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(S(We),{inverted:""}),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(S(We),{horizontal:"",inverted:""},{default:i(()=>[l("Horizontal")]),_:1})]),_:1})]),_:1}))}},iS=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,aS={__name:"FittedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Inverted",code:iS},{description:i(()=>[l(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(S(mt),null,{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(S(We),{fitted:""}),l(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},lS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,nS={__name:"HiddenDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Hidden",code:lS},{description:i(()=>[l(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(S(me),null,{default:i(()=>[l("Section One")]),_:1}),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(S(We),{hidden:""}),t(S(me),null,{default:i(()=>[l("Section Two")]),_:1}),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},sS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,oS={__name:"SectionDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Section",code:sS},{description:i(()=>[l(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(S(me),null,{default:i(()=>[l("Section One")]),_:1}),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(S(We),{section:""}),t(S(me),null,{default:i(()=>[l("Section Two")]),_:1}),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},rS=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,uS={__name:"ClearingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Clearing",code:rS},{description:i(()=>[l(" A divider can clear the contents above it ")]),example:i(()=>[t(S(mt),null,{default:i(()=>[t(S(me),{floated:"right"},{default:i(()=>[l("Section One")]),_:1}),t(S(We),{clearing:""}),t(S(bt),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},dS=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,cS={__name:"SizeDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Size",code:dS},{description:i(()=>[l(" A divider text can vary in size ")]),example:i(()=>[t(S(We),{horizontal:"",size:"mini"},{default:i(()=>[l("MINI")]),_:1}),t(S(We),{horizontal:"",size:"tiny"},{default:i(()=>[l("TINY")]),_:1}),t(S(We),{horizontal:"",size:"small"},{default:i(()=>[l("SMALL")]),_:1}),t(S(We),{horizontal:"",size:"large"},{default:i(()=>[l("LARGE")]),_:1}),t(S(We),{horizontal:"",size:"big"},{default:i(()=>[l("BIG")]),_:1}),t(S(We),{horizontal:"",size:"huge"},{default:i(()=>[l("HUGE")]),_:1}),t(S(We),{horizontal:"",size:"massive"},{default:i(()=>[l("MASSIVE")]),_:1})]),_:1}))}},mS={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:jw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Ww},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Xw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Zw},{id:"inverted",label:"Inverted",category:"Variations",component:tS},{id:"fitted",label:"Fitted",category:"Variations",component:aS},{id:"hidden",label:"Hidden",category:"Variations",component:nS},{id:"section",label:"Section",category:"Variations",component:oS},{id:"clearing",label:"Clearing",category:"Variations",component:uS},{id:"size",label:"Size",category:"Variations",component:cS}];return(n,s)=>(z(),H(Hi,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},pS=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,fS={__name:"DisabledDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Disabled",code:pS},{description:i(()=>[l(" An emoji can show that it is disabled ")]),example:i(()=>[t(S(ht),{name:"anguished",disabled:""})]),_:1}))}},gS=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,hS={__name:"LoadingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Loading",code:gS},{description:i(()=>[l(" An emoji can be used as a simple loader ")]),example:i(()=>[t(S(ht),{name:"angel",loading:""}),t(S(ht),{name:"blush",loading:""}),t(S(ht),{name:"grin",loading:""})]),_:1}))}},_S=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,bS={__name:"SizeDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Size",code:_S},{description:i(()=>[l(" An emoji can vary in size ")]),example:i(()=>[t(S(ht),{name:"relaxed",size:"small"}),t(S(ht),{name:"relaxed",size:"medium"}),t(S(ht),{name:"relaxed",size:"large"}),t(S(ht),{name:"relaxed",size:"big"})]),_:1}))}},vS=`<template>
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
</template>`,yS={__name:"AutosizingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Autosizing",code:vS},{description:i(()=>[l(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(S(me),{size:"small"},{default:i(()=>[l(" Within a Header "),t(S(ht),{name:"relaxed"})]),_:1}),t(S(M),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(S(ht),{name:"relaxed"})]),_:1}),t(S(Mt),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(S(ht),{name:"relaxed"})]),_:1})]),_:1}))}},CS=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,wS={__name:"LinkDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Link",code:CS},{description:i(()=>[l(" An emoji can be formatted as a link ")]),example:i(()=>[t(S(ht),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},SS={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:fS},{id:"loading",label:"Loading",category:"States",component:hS},{id:"size",label:"Size",category:"Variations",component:bS},{id:"autosizing",label:"Autosizing",category:"Variations",component:yS},{id:"link",label:"Link",category:"Variations",component:wS}];return(n,s)=>(z(),H(Hi,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},AS=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,kS={__name:"SizeDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Size",code:AS},{description:i(()=>[l(" A flag can vary in size ")]),example:i(()=>[t(S(Dt),{name:"de",size:"small"}),t(S(Dt),{name:"fr",size:"medium"}),t(S(Dt),{name:"li",size:"large"}),t(S(Dt),{name:"jp",size:"big"}),t(S(Dt),{name:"gb",size:"huge"}),t(S(Dt),{name:"un",size:"massive"})]),_:1}))}},$S=`<template>
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
</template>`,BS={__name:"AutosizingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Autosizing",code:$S},{description:i(()=>[l(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(S(me),{size:"small"},{default:i(()=>[l(" Within a Header "),t(S(Dt),{name:"us"})]),_:1}),t(S(M),{as:"div",size:"large"},{default:i(()=>[l(" Within a Button "),t(S(Dt),{name:"eu"})]),_:1}),t(S(Mt),{size:"massive"},{default:i(()=>[l(" Within a Label "),t(S(Dt),{name:"pirate"})]),_:1})]),_:1}))}},xS={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:kS},{id:"autosizing",label:"Autosizing",category:"Types",component:BS}];return(n,s)=>(z(),H(Hi,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},TS=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,ES={__name:"PageHeadersDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Page Headers",code:TS},{description:i(()=>[l(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(S(me),{as:"h1"},{default:i(()=>[l("First Header")]),_:1}),t(S(me),{as:"h2"},{default:i(()=>[l("Second Header")]),_:1}),t(S(me),{as:"h3"},{default:i(()=>[l("Third Header")]),_:1}),t(S(me),{as:"h4"},{default:i(()=>[l("Fourth Header")]),_:1}),t(S(me),{as:"h5"},{default:i(()=>[l("Fifth Header")]),_:1})]),_:1}))}},RS=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,zS={__name:"ContentHeadersDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Content Headers",code:RS},{description:i(()=>[l(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(S(me),{size:"huge"},{default:i(()=>[l("Huge Header")]),_:1}),t(S(me),{size:"large"},{default:i(()=>[l("Large Header")]),_:1}),t(S(me),{size:"medium"},{default:i(()=>[l("Medium Header")]),_:1}),t(S(me),{size:"small"},{default:i(()=>[l("Small Header")]),_:1}),t(S(me),{size:"tiny"},{default:i(()=>[l("Tiny Header")]),_:1})]),_:1}))}},DS=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,PS={__name:"IconHeadersDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Icon Headers",code:DS},{description:i(()=>[l(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(S(me),{icon:""},{default:i(()=>[t(S(Ke),{name:"settings"}),t(S(Ml),null,{default:i(()=>[l(" Account Settings ")]),_:1}),t(S(da),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},MS=C("span",null,"$10.99",-1),IS=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,FS={__name:"SubHeadersDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Sub Headers",code:IS},{description:i(()=>[l(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(S(me),{sub:""},{default:i(()=>[l("Price")]),_:1}),MS]),_:1}))}},VS=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,NS={__name:"ImageDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Image",code:VS},{description:i(()=>[l(" A header may contain an image ")]),example:i(()=>[t(S(me),{as:"h2"},{default:i(()=>[t(S(bt),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),l(" Steve ")]),_:1})]),_:1}))}},HS=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,LS={__name:"IconDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Icon",code:HS},{description:i(()=>[l(" A header may contain an Icon ")]),example:i(()=>[t(S(me),{as:"h2"},{default:i(()=>[t(S(Ke),{name:"plug"}),t(S(Ml),null,{default:i(()=>[l(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},OS=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,jS={__name:"SubheaderDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Subheader",code:OS},{description:i(()=>[l(" Headers may contain subheaders ")]),example:i(()=>[t(S(me),{as:"h2"},{default:i(()=>[l(" Account Settings "),t(S(da),null,{default:i(()=>[l(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},qS=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,US={__name:"DisabledDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Disabled",code:qS},{description:i(()=>[l(" A header can show that it is inactive ")]),example:i(()=>[t(S(me),{disabled:""},{default:i(()=>[l(" Disabled Header ")]),_:1})]),_:1}))}},GS=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,YS={__name:"DividingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Dividing",code:GS},{description:i(()=>[l(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(S(me),{as:"h3",dividing:""},{default:i(()=>[l(" Dividing Header ")]),_:1})]),_:1}))}},JS=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,WS={__name:"BlockDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Block",code:JS},{description:i(()=>[l(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(S(me),{as:"h3",block:""},{default:i(()=>[l(" Block Header ")]),_:1})]),_:1}))}},KS=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,XS={__name:"AttachedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Attached",code:KS},{description:i(()=>[l(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(S(me),{as:"h2",attached:"top"},{default:i(()=>[l(" Attached Header ")]),_:1}),t(S(mt),{attached:""},{default:i(()=>[l(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},QS=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,ZS={__name:"FloatingDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Floating",code:QS},{description:i(()=>[l(" A header can sit to the left or right of other content ")]),example:i(()=>[t(S(mt),{clearing:""},{default:i(()=>[t(S(me),{as:"h3",floated:"right"},{default:i(()=>[l(" Go Forward ")]),_:1}),t(S(me),{as:"h3",floated:"left"},{default:i(()=>[l(" Go Back ")]),_:1})]),_:1})]),_:1}))}},eA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,tA={__name:"TextAlignmentDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Text Alignment",code:eA},{description:i(()=>[l(" A header can have its text aligned to a side ")]),example:i(()=>[t(S(mt),null,{default:i(()=>[t(S(me),{as:"h3",textAlign:"right"},{default:i(()=>[l("Float Right")]),_:1}),t(S(me),{as:"h3",textAlign:"left"},{default:i(()=>[l("Float Left")]),_:1}),t(S(me),{as:"h3",textAlign:"justified"},{default:i(()=>[l(" This text takes up the full width of the container ")]),_:1}),t(S(me),{as:"h3",textAlign:"center"},{default:i(()=>[l("Centered")]),_:1})]),_:1})]),_:1}))}},iA=`<template>
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
</template>`,aA={__name:"ColoredDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Colored",code:iA},{description:i(()=>[l(" A header can be formatted with different colors ")]),example:i(()=>[t(S(me),{as:"h4",primary:""},{default:i(()=>[l("Primary")]),_:1}),t(S(me),{as:"h4",secondary:""},{default:i(()=>[l("Secondary")]),_:1}),t(S(me),{as:"h4",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(S(me),{as:"h4",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(S(me),{as:"h4",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(S(me),{as:"h4",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(S(me),{as:"h4",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(S(me),{as:"h4",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(S(me),{as:"h4",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(S(me),{as:"h4",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(S(me),{as:"h4",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(S(me),{as:"h4",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(S(me),{as:"h4",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(S(me),{as:"h4",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1}))}},lA=`<template>
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
</template>`,nA={__name:"InvertedDoc",setup(e){return(a,n)=>(z(),H(ee,{label:"Colored",code:lA},{description:i(()=>[l(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(S(mt),{inverted:""},{default:i(()=>[t(S(me),{as:"h4",inverted:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(S(me),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1})]),_:1})]),_:1}))}},sA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:ES},{id:"content-headers",label:"Content Headers",category:"Types",component:zS},{id:"icon-headers",label:"Icon Headers",category:"Types",component:PS},{id:"sub-headers",label:"Sub Headers",category:"Types",component:FS},{id:"image",label:"Image",category:"Content",component:NS},{id:"icon",label:"Icon",category:"Content",component:LS},{id:"subheader",label:"Subheader",category:"Content",component:jS},{id:"disabled",label:"Disabled",category:"States",component:US},{id:"dividing",label:"Dividing",category:"Variations",component:YS},{id:"block",label:"Block",category:"Variations",component:WS},{id:"attached",label:"Attached",category:"Variations",component:XS},{id:"floating",label:"Floating",category:"Variations",component:ZS},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:tA},{id:"colored",label:"Colored",category:"Variations",component:aA},{id:"inverted",label:"Inverted",category:"Variations",component:nA}];return(n,s)=>(z(),H(Hi,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},oA=R({name:"DocExample",components:{Prism:Fm},props:{title:String,description:String,code:String},setup(){const e=j(!1);return{active:e,toggle:()=>e.value=!e.value}}}),rA={class:"example"};function uA(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-grid-column"),r=b("sui-icon"),f=b("sui-grid-row"),c=b("prism"),h=b("sui-grid");return z(),pe("div",rA,[t(h,{columns:2},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l(Be(e.title)+" ",1),t(m,null,{default:i(()=>[l(Be(e.description),1)]),_:1})]),_:1})]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[t(r,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[na(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(z(),H(o,{key:0,width:16},{default:i(()=>[t(c,{language:"markup"},{default:i(()=>[l(Be(e.code),1)]),_:1})]),_:1})):lo("",!0)]),_:3})]),_:3})])}const Re=ye(oA,[["render",uA],["__scopeId","data-v-fcfb6a67"]]),dA=R({name:"IconDoc",components:{DocExample:Re},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
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
</sui-icon-group>`}}}),cA={class:"intro"},mA=C("br",null,null,-1),pA=C("br",null,null,-1),fA=C("br",null,null,-1),gA=C("br",null,null,-1),hA=C("br",null,null,-1),_A=C("br",null,null,-1);function bA(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),y=b("sui-icon-group");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",cA,[t(p,{as:"h1"},{default:i(()=>[l("Icon "),t(m,null,{default:i(()=>[l(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Disabled",description:"An icon can show that it is disabled",code:e.disabledCode},{default:i(()=>[t(r,{name:"users",disabled:""})]),_:1},8,["code"]),t(g,{title:"Loading",description:"An icon can be used as a simple loader",code:e.loadingCode},{default:i(()=>[C("div",null,[t(r,{name:"spinner",loading:""}),t(r,{name:"notched circle",loading:""}),t(r,{name:"asterisk",loading:""})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:e.fittedCode},{default:i(()=>[C("div",null,[l(" This icon "),t(r,{name:"help",fitted:""}),l(" is fitted. "),mA,l(" This icon "),t(r,{name:"help"}),l(" is not. ")])]),_:1},8,["code"]),t(g,{title:"Size",description:"An icon can vary in size",code:e.sizeCode},{default:i(()=>[C("div",null,[t(r,{name:"home",size:"mini"}),t(r,{name:"home",size:"tiny"}),t(r,{name:"home",size:"small"}),pA,t(r,{name:"home"}),fA,t(r,{name:"home",size:"large"}),gA,t(r,{name:"home",size:"big"}),hA,t(r,{name:"home",size:"huge"}),_A,t(r,{name:"home",size:"massive"})])]),_:1},8,["code"]),t(g,{title:"Link",description:"An icon can be formatted as a link",code:e.linkCode},{default:i(()=>[C("div",null,[t(r,{name:"close",link:""}),t(r,{name:"help",link:""})])]),_:1},8,["code"]),t(g,{title:"Flipped",description:"An icon can be flipped",code:e.flippedCode},{default:i(()=>[C("div",null,[t(r,{name:"cloud",flipped:"horizontally"}),t(r,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),t(g,{title:"Rotated",description:"An icon can be rotated",code:e.rotatedCode},{default:i(()=>[C("div",null,[t(r,{name:"cloud",rotated:"clockwise"}),t(r,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),t(g,{title:"Circular",description:"An icon can be formatted to appear circular",code:e.circularCode},{default:i(()=>[C("div",null,[t(r,{name:"users",circular:""}),t(r,{name:"users",color:"teal",circular:""}),t(r,{name:"users",inverted:"",circular:""}),t(r,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),t(g,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:e.borderedCode},{default:i(()=>[C("div",null,[t(r,{name:"users",bordered:""}),t(r,{name:"users",bordered:"",color:"teal"}),t(r,{name:"users",inverted:"",bordered:"",color:"black"}),t(r,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),t(g,{title:"Colored",description:"An icon can be formatted with different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(r,{name:"users",color:"primary"}),t(r,{name:"users",color:"secondary"}),t(r,{name:"users",color:"red"}),t(r,{name:"users",color:"orange"}),t(r,{name:"users",color:"yellow"}),t(r,{name:"users",color:"olive"}),t(r,{name:"users",color:"green"}),t(r,{name:"users",color:"teal"}),t(r,{name:"users",color:"blue"}),t(r,{name:"users",color:"violet"}),t(r,{name:"users",color:"purple"}),t(r,{name:"users",color:"pink"}),t(r,{name:"users",color:"brown"}),t(r,{name:"users",color:"grey"}),t(r,{name:"users",color:"black"})])]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(r,{name:"users",inverted:""}),t(r,{name:"users",inverted:"",color:"primary"}),t(r,{name:"users",inverted:"",color:"secondary"}),t(r,{name:"users",inverted:"",color:"red"}),t(r,{name:"users",inverted:"",color:"orange"}),t(r,{name:"users",inverted:"",color:"yellow"}),t(r,{name:"users",inverted:"",color:"olive"}),t(r,{name:"users",inverted:"",color:"green"}),t(r,{name:"users",inverted:"",color:"teal"}),t(r,{name:"users",inverted:"",color:"blue"}),t(r,{name:"users",inverted:"",color:"violet"}),t(r,{name:"users",inverted:"",color:"purple"}),t(r,{name:"users",inverted:"",color:"pink"}),t(r,{name:"users",inverted:"",color:"brown"}),t(r,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(g,{title:"Icons",description:"Several icons can be used together as a group",code:e.iconsCode},{default:i(()=>[t(y,{size:"huge"},{default:i(()=>[t(r,{name:"circle outline",size:"big"}),t(r,{name:"user"})]),_:1})]),_:1},8,["code"]),t(g,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:e.cornerIconCode},{default:i(()=>[t(y,{size:"huge"},{default:i(()=>[t(r,{name:"puzzle"}),t(r,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const vA=ye(dA,[["render",bA]]),Z="/vue-fomantic-ui/images/wireframe/image.png",_l="/vue-fomantic-ui/images/wireframe/image-text.png",Ba="/vue-fomantic-ui/images/wireframe/white-image.png",wt="/vue-fomantic-ui/images/wireframe/square-image.png",yA=R({name:"ImageDoc",components:{DocExample:Re},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),CA={class:"intro"},wA=C("span",null,"Username",-1),SA=C("span",null,"Top Aligned",-1),AA=C("span",null,"Middle Aligned",-1),kA=C("span",null,"Bottom Aligned",-1),$A=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),BA=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),xA=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),TA=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),EA=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),RA=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function zA(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("doc-example"),A=b("sui-image-group");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",CA,[t(p,{as:"h1"},{default:i(()=>[l("Image "),t(m,null,{default:i(()=>[l(" An image is a graphic representation of something ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Image",description:"An image",code:e.imageCode},{default:i(()=>[t(g,{src:Z,size:"small"})]),_:1},8,["code"]),t(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:e.imageLinkCode},{default:i(()=>[t(g,{as:"a",size:"medium",src:_l,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(y,{title:"Hidden",description:"An image can be hidden",code:e.hiddenCode},{default:i(()=>[t(g,{hidden:"",src:Z,size:"small"})]),_:1},8,["code"]),t(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",src:Z,size:"small"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:e.avatarCode},{default:i(()=>[C("div",null,[t(g,{avatar:"",src:Z}),wA])]),_:1},8,["code"]),t(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:e.borderedCode},{default:i(()=>[t(g,{bordered:"",size:"medium",src:Ba})]),_:1},8,["code"]),t(y,{title:"Fluid",description:"An image can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",src:Z})]),_:1},8,["code"]),t(y,{title:"Rounded",description:"An image may appear rounded",code:e.roundedCode},{default:i(()=>[t(g,{rounded:"",size:"medium",src:Z})]),_:1},8,["code"]),t(y,{title:"Circular",description:"An image may appear circular",code:e.circularCode},{default:i(()=>[t(g,{circular:"",size:"medium",src:wt})]),_:1},8,["code"]),t(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:e.verticallyAlignedCode},{default:i(()=>[C("div",null,[t(g,{verticalAlign:"top",size:"tiny",src:wt}),SA,t(o),t(g,{verticalAlign:"middle",size:"tiny",src:wt}),AA,t(o),t(g,{verticalAlign:"bottom",size:"tiny",src:wt}),kA])]),_:1},8,["code"]),t(y,{title:"Centered",description:"An image can appear centered in a content block",code:e.centeredCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{centered:"",size:"medium",src:Z}),$A,BA,t(g,{centered:"",size:"small",src:_l}),xA]),_:1})]),_:1},8,["code"]),t(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:e.spacedCode},{default:i(()=>[t(v,null,{default:i(()=>[C("p",null,[l("Te eum doming eirmod, nominati pertinacia "),t(g,{spaced:"",size:"mini",src:Z}),l(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),t(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{floated:"left",size:"small",src:_l}),TA,t(g,{floated:"right",size:"small",src:_l}),EA,RA]),_:1})]),_:1},8,["code"]),t(y,{title:"Size",description:"An image may appear at different sizes",code:e.sizeCode},{default:i(()=>[C("div",null,[t(g,{size:"mini",src:Z}),t(o,{hidden:""}),t(g,{size:"tiny",src:Z}),t(o,{hidden:""}),t(g,{size:"medium",src:Z}),t(o,{hidden:""}),t(g,{size:"large",src:Z})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:e.sizeGroupCode},{default:i(()=>[t(A,{size:"tiny"},{default:i(()=>[t(g,{src:Z}),t(g,{src:Z}),t(g,{src:Z}),t(g,{src:Z})]),_:1})]),_:1},8,["code"])]),_:1})])}const DA=ye(yA,[["render",zA]]),PA=R({name:"InputDoc",components:{DocExample:Re},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),MA={class:"intro"};function IA(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-input"),y=b("doc-example");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",MA,[t(p,{as:"h1"},{default:i(()=>[l("Input "),t(m,null,{default:i(()=>[l(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Input",description:"A standard input",code:e.inputCode},{default:i(()=>[t(g,{placeholder:"Search..."})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:e.focusCode},{default:i(()=>[t(g,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:e.loadingCode},{default:i(()=>[C("div",null,[t(g,{loading:"",placeholder:"Search..."}),t(o,{hidden:""}),t(g,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),t(y,{title:"Disabled",description:"An input field can show that it is disabled",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Error",description:"An input field can show the data contains errors",code:e.errorCode},{default:i(()=>[t(g,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Icon",description:"An input can be formatted with an icon",code:e.iconCode},{default:i(()=>[t(g,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Labeled",description:"An input can be formatted with a label",code:e.labeledCode},{default:i(()=>[C("div",null,[t(g,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),t(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:e.actionCode},{default:i(()=>[t(g,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Transparent",description:"A transparent input has no background",code:e.transparentCode},{default:i(()=>[t(g,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(g,{inverted:"",placeholder:"Search..."}),t(o,{inverted:""}),t(g,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),t(o,{inverted:""}),t(g,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),t(y,{title:"Fluid",description:"An input can take the size of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Size",description:"An input can vary in size",code:e.sizeCode},{default:i(()=>[C("div",null,[t(g,{size:"mini",icon:"search",placeholder:"Search mini"}),t(o,{hidden:""}),t(g,{size:"small",icon:"search",placeholder:"Search small"}),t(o,{hidden:""}),t(g,{size:"large",icon:"search",placeholder:"Search large"}),t(o,{hidden:""}),t(g,{size:"big",icon:"search",placeholder:"Search big"}),t(o,{hidden:""}),t(g,{size:"huge",icon:"search",placeholder:"Search huge"}),t(o,{hidden:""}),t(g,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const FA=ye(PA,[["render",IA]]),xs="/vue-fomantic-ui/images/avatar/small/joe.jpg",Lt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",Wa="/vue-fomantic-ui/images/avatar/small/stevie.jpg",we="/vue-fomantic-ui/images/wireframe/paragraph.png",VA=R({name:"LabelDoc",components:{DocExample:Re},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),NA={class:"intro"},HA=C("img",{src:xs},null,-1),LA=C("img",{src:Lt},null,-1),OA=C("img",{src:Wa},null,-1),jA=C("input",{type:"text",placeholder:"First name"},null,-1),qA=C("input",{type:"text",placeholder:"Last name"},null,-1),UA=C("input",{type:"text",placeholder:"Username"},null,-1),GA=C("input",{type:"password",placeholder:"Password"},null,-1),YA=C("span",null,"Account Details",-1),JA=C("span",null,"User Reviews",-1),WA=C("img",{src:Wa},null,-1),KA=C("img",{src:Lt},null,-1);function XA(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-label"),y=b("doc-example"),A=b("sui-form-field"),B=b("sui-form"),_=b("sui-image"),w=b("sui-grid-column"),$=b("sui-grid"),x=b("sui-grid-row"),E=b("sui-list-item"),I=b("sui-list"),F=b("sui-label-detail"),P=b("sui-label-group");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",NA,[t(p,{as:"h1"},{default:i(()=>[l("Label "),t(m,null,{default:i(()=>[l(" A label displays content classification ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Label",description:"A label",code:e.labelCode},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"mail"}),l(" 23 ")]),_:1})]),_:1},8,["code"]),t(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:e.imageCode},{default:i(()=>[C("div",null,[t(g,{as:"a",image:""},{default:i(()=>[HA,l(" Joe ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[LA,l(" Elliot ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[OA,l(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Pointing",description:"A label can point to content next to it",code:e.pointingCode},{default:i(()=>[t(B,{fluid:""},{default:i(()=>[t(A,null,{default:i(()=>[jA,t(g,{pointing:""},{default:i(()=>[l("Please enter a value")]),_:1})]),_:1}),t(o),t(A,null,{default:i(()=>[t(g,{pointing:"below"},{default:i(()=>[l("Please enter a value")]),_:1}),qA]),_:1}),t(o),t(A,{inline:""},{default:i(()=>[UA,t(g,{pointing:"left"},{default:i(()=>[l("That name is taken!")]),_:1})]),_:1}),t(o),t(A,{inline:""},{default:i(()=>[t(g,{pointing:"right"},{default:i(()=>[l("Your password must be 6 characters or more")]),_:1}),GA]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:e.cornerCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{fluid:"",src:Z,label:{corner:"left",icon:"heart"}})]),_:1}),t(w,null,{default:i(()=>[t(_,{fluid:"",src:Z,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Tag",description:"A label can appear as a tag",code:e.tagCode},{default:i(()=>[C("div",null,[t(g,{tag:""},{default:i(()=>[l("New")]),_:1}),t(g,{tag:"",color:"red"},{default:i(()=>[l("Upcoming")]),_:1}),t(g,{tag:"",color:"teal"},{default:i(()=>[l("Featured")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:e.ribbonCode},{default:i(()=>[t($,{columns:2},{default:i(()=>[t(w,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"",color:"red"},{default:i(()=>[l("Overview")]),_:1}),YA,t(_,{src:we}),t(g,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[l("Community")]),_:1}),JA,t(_,{src:we})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[l("Specs")]),_:1}),t(_,{src:we}),t(g,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[l("Reviews")]),_:1}),t(_,{src:we})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Attached",description:"A label can attach to a content segment",code:e.attachedCode},{default:i(()=>[t($,{columns:3},{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top"},{default:i(()=>[l("HTML")]),_:1}),t(_,{src:we})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom"},{default:i(()=>[l("CSS")]),_:1}),t(_,{src:we})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top right"},{default:i(()=>[l("Code")]),_:1}),t(_,{src:we})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top left"},{default:i(()=>[l("View")]),_:1}),t(_,{src:we})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom left"},{default:i(()=>[l("User View")]),_:1}),t(_,{src:we})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom right"},{default:i(()=>[l("Admin View")]),_:1}),t(_,{src:we})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:e.horizontalCode},{default:i(()=>[t(I,{divided:"",selection:""},{default:i(()=>[t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Kumquats ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"purple",horizontal:""},{default:i(()=>[l("Candy")]),_:1}),l(" Ice Cream ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[l("Fruit")]),_:1}),l(" Orange ")]),_:1}),t(E,null,{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[l("Dog")]),_:1}),l(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Floating",description:"A label can float above or below another element",code:e.floatingCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{name:"mail"}),l(" Messages "),t(g,{floating:"",color:"red"},{default:i(()=>[l("22")]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(r,{name:"users"}),l(" Friends "),t(g,{floating:"",color:"teal"},{default:i(()=>[l("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(y,{title:"Detail",description:"A label can contain a detail",code:e.detailCode},{default:i(()=>[t(g,null,{default:i(()=>[l(" Dogs "),t(F,null,{default:i(()=>[l("214")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Icon",description:"A label can include an icon",code:e.iconCode},{default:i(()=>[C("div",null,[t(g,{as:"a"},{default:i(()=>[t(r,{name:"mail"}),l(" Mail ")]),_:1}),t(g,{as:"a"},{default:i(()=>[l(" Tag "),t(r,{name:"delete"})]),_:1})])]),_:1},8,["code"]),t(y,{title:"Image",description:"A label can include an image",code:e.imageIncludeCode},{default:i(()=>[C("div",null,[t(g,{as:"a"},{default:i(()=>[t(_,{avatar:"",spaced:"right",src:Lt}),l(" Elliot ")]),_:1}),t(g,{as:"a"},{default:i(()=>[WA,l(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Link",description:"A label can be a link or contain an item that links",code:e.linkCode},{default:i(()=>[t(g,{as:"a",link:""},{default:i(()=>[t(r,{name:"mail"}),l(" 23 ")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Circular",description:"A label can be circular",code:e.circularCode},{default:i(()=>[C("div",null,[t(g,{as:"a",circular:"",color:"red"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"orange"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"yellow"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"olive"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"green"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"teal"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"blue"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"violet"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"purple"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"pink"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"brown"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"grey"},{default:i(()=>[l("2")]),_:1}),t(g,{as:"a",circular:"",color:"black"},{default:i(()=>[l("2")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Basic",description:"A label can reduce its complexity",code:e.basicCode},{default:i(()=>[C("div",null,[t(g,{basic:"",as:"a"},{default:i(()=>[l("Basic")]),_:1}),t(g,{basic:"",as:"a",pointing:""},{default:i(()=>[l("Pointing")]),_:1}),t(g,{basic:"",as:"a",image:""},{default:i(()=>[KA,l(" Elliot ")]),_:1}),t(g,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[l("Red Pointing")]),_:1}),t(g,{basic:"",as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Colored",description:"A label can have different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(g,{as:"a",color:"primary"},{default:i(()=>[l("Primary")]),_:1}),t(g,{as:"a",color:"secondary"},{default:i(()=>[l("Secondary")]),_:1}),t(g,{as:"a",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g,{as:"a",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g,{as:"a",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g,{as:"a",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g,{as:"a",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g,{as:"a",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g,{as:"a",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g,{as:"a",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g,{as:"a",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g,{as:"a",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g,{as:"a",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g,{as:"a",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g,{as:"a",color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Basic Tag",description:"",code:e.basicTagCode},{default:i(()=>[C("div",null,[t(g,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[l("Primary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[l("Secondary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[l("Green")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Size",description:"A label can be small or large",code:e.sizeCode},{default:i(()=>[C("div",null,[t(g,{size:"mini"},{default:i(()=>[l("Mini")]),_:1}),t(g,{size:"tiny"},{default:i(()=>[l("Tiny")]),_:1}),t(g,{size:"small"},{default:i(()=>[l("Small")]),_:1}),t(g,null,{default:i(()=>[l("Medium")]),_:1}),t(g,{size:"large"},{default:i(()=>[l("Large")]),_:1}),t(g,{size:"big"},{default:i(()=>[l("Big")]),_:1}),t(g,{size:"huge"},{default:i(()=>[l("Huge")]),_:1}),t(g,{size:"massive"},{default:i(()=>[l("Massive")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(y,{title:"Group Size",description:"Labels can share sizes together",code:e.groupSizeCode},{default:i(()=>[t(P,{size:"huge"},{default:i(()=>[t(g,null,{default:i(()=>[l("Fun")]),_:1}),t(g,null,{default:i(()=>[l("Happy")]),_:1}),t(g,null,{default:i(()=>[l("Smart")]),_:1}),t(g,null,{default:i(()=>[l("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Colored Group",description:"Labels can share colors together",code:e.coloredGroupCode},{default:i(()=>[t(P,{color:"blue"},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l(" Fun "),t(r,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[l(" Happy "),t(F,null,{default:i(()=>[l("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Basic Group",description:"Labels can share their style together",code:e.basicGroupCode},{default:i(()=>[t(P,{basic:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l(" Fun "),t(r,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[l(" Happy "),t(F,null,{default:i(()=>[l("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Tag Group",description:"Labels can share tag formatting",code:e.tagGroupCode},{default:i(()=>[t(P,{tag:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("$10.00")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$19.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$24.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$30.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"CircularGroup",description:"Labels can share shapes",code:e.circularGroupCode},{default:i(()=>[t(P,{circular:""},{default:i(()=>[t(g,null,{default:i(()=>[l("11")]),_:1}),t(g,null,{default:i(()=>[l("22")]),_:1}),t(g,null,{default:i(()=>[l("33")]),_:1}),t(g,null,{default:i(()=>[l("44")]),_:1}),t(g,null,{default:i(()=>[l("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const QA=ye(VA,[["render",XA]]),ZA="/vue-fomantic-ui/images/avatar/small/rachel.png",e0="/vue-fomantic-ui/images/avatar/small/lindsay.png",t0="/vue-fomantic-ui/images/avatar/small/matthew.png",pn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",i0="/vue-fomantic-ui/images/avatar/small/veronika.jpg",a0="/vue-fomantic-ui/images/avatar/small/tom.jpg",bl="/vue-fomantic-ui/images/avatar/small/christian.jpg",fn="/vue-fomantic-ui/images/avatar/small/matt.jpg",xa="/vue-fomantic-ui/images/avatar/small/helen.jpg",Ci="/vue-fomantic-ui/images/avatar/small/daniel.jpg",l0=R({name:"ListDoc",components:{DocExample:Re},setup(){return{listCode:`<sui-list>
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
</div>`}}}),n0={class:"intro"},s0=C("div",null,"Benefits",-1),o0={class:"list"},r0=C("a",null,"Languages",-1),u0=C("a",null,[C("b",null,"Arrested Development")],-1),d0=C("a",null,[C("b",null,"Bob's Burgers")],-1),c0=C("a",null,[C("b",null,"The Godfather Part 2")],-1),m0=C("a",null,[C("b",null,"Twin Peaks")],-1),p0=C("a",null,[C("b",null,"Arrested Development")],-1),f0=C("a",null,[C("b",null,"Bob's Burgers")],-1),g0=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function h0(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-list-item"),y=b("sui-list"),A=b("doc-example"),B=b("sui-list-list"),_=b("sui-list-header"),w=b("sui-list-description"),$=b("sui-list-content"),x=b("sui-image");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",n0,[t(p,{as:"h1"},{default:i(()=>[l("List "),t(m,null,{default:i(()=>[l(" A list is used to group related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[l("Apples")]),_:1}),t(g,null,{default:i(()=>[l("Pears")]),_:1}),t(g,null,{default:i(()=>[l("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(y,{bulleted:""},{default:i(()=>[t(g,null,{default:i(()=>[l("Gaining Access")]),_:1}),t(g,null,{default:i(()=>[l("Inviting Friends")]),_:1}),t(g,null,{default:i(()=>[s0,C("div",o0,[t(g,{as:"a"},{default:i(()=>[l("Link to somewhere")]),_:1}),t(g,null,{default:i(()=>[l("Rebates")]),_:1}),t(g,null,{default:i(()=>[l("Discounts")]),_:1})])]),_:1}),t(g,null,{default:i(()=>[l("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(y,{ordered:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("Getting Started")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Introduction")]),_:1}),t(g,null,{default:i(()=>[r0,t(B,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("HTML")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Javascript")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("CSS")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(y,{link:""},{default:i(()=>[t(g,{active:""},{default:i(()=>[l("Home")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("About")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Jobs")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[l("1")]),_:1}),t(g,null,{default:i(()=>[l("2")]),_:1}),t(g,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[t(r,{name:"help"}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Floated Icon")]),_:1}),t(w,null,{default:i(()=>[l(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[t(r,{name:"right triangle"}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Icon Alignment")]),_:1}),t(w,null,{default:i(()=>[l(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"help"}),l(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:ZA}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Rachel")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),u0,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:e0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Lindsay")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),d0,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:t0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Matthew")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),c0,l(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:pn}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),m0,l(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:i0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(w,null,{default:i(()=>[l(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("What is a FAQ?")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Who is our user?")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("New York City")]),_:1}),l(" A lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Chicago")]),_:1}),l(" Also quite a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Los Angeles")]),_:1}),l(" Sometimes can be a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[l("San Francisco")]),_:1}),l(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Krolewskie Jadlo")]),_:1}),t(w,null,{default:i(()=>[l(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Xian Famous Foods")]),_:1}),t(w,null,{default:i(()=>[l(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Sapporo Haru")]),_:1}),t(w,null,{default:i(()=>[l(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Enid's")]),_:1}),t(w,null,{default:i(()=>[l(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(y,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:a0}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Tom")]),_:1}),l(" Top Contributor ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:bl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian Rocha")]),_:1}),l(" Admin ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:fn}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Matt")]),_:1}),l(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:xa}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:bl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:xa}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:bl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(y,{relaxed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),p0,l(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Wa}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),f0,l(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Lt}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(w,null,{default:i(()=>[l(" Last seen watching "),g0,l(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Wa}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Lt}),t($,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(y,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:xa}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Snickerdoodle")]),_:1}),l(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Poodle")]),_:1}),l(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Paulo")]),_:1}),l(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:xa}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:bl}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:Ci}),t($,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content Variations")]),_:1}),t(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(y,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(x,{avatar:"",src:wt}),t($,{verticalAlign:"top"},{default:i(()=>[l(" Top Aligned ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:wt}),t($,{verticalAlign:"middle"},{default:i(()=>[l(" Middle ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(x,{avatar:"",src:wt}),t($,{verticalAlign:"bottom"},{default:i(()=>[l(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[C("div",null,[t(y,{floated:"right",horizontal:""},{default:i(()=>[t(g,{disabled:""},{default:i(()=>[l("© GitHub, Inc.")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Terms")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Privacy")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Contact")]),_:1})]),_:1}),t(y,{horizontal:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[l("About Us")]),_:1}),t(g,{as:"a"},{default:i(()=>[l("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const _0=ye(l0,[["render",h0]]),je="/vue-fomantic-ui/images/wireframe/short-paragraph.png",b0=R({name:"LoaderDoc",components:{DocExample:Re},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),v0={class:"intro"};function y0(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-loader"),y=b("sui-dimmer"),A=b("sui-image"),B=b("doc-example");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",v0,[t(p,{as:"h1"},{default:i(()=>[l("Loader "),t(m,null,{default:i(()=>[l(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(B,{title:"Loader",description:"A loader",code:e.loaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g)]),_:1}),t(A,{src:je})]),_:1})]),_:1},8,["code"]),t(B,{title:"Text Loader",description:"A loader can contain text",code:e.textLoaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,null,{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:je})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(B,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:e.indeterminateCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,{indeterminate:""},{default:i(()=>[l("Preparing Files")]),_:1})]),_:1}),t(A,{src:je})]),_:1})]),_:1},8,["code"]),t(B,{title:"Active",description:"A loader can be active or visible",code:e.activeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{active:""}),t(A,{src:je})]),_:1})]),_:1},8,["code"]),t(B,{title:"Diasbled",description:"A loader can be disabled or hidden",code:e.disabledCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{disabled:""}),t(A,{src:je})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(B,{title:"Inline",description:"Loaders can appear inline with content",code:e.inlineCode},{default:i(()=>[t(g,{inline:"",active:""})]),_:1},8,["code"]),t(B,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:e.inlineCenterCode},{default:i(()=>[t(g,{inline:"centered",active:""})]),_:1},8,["code"]),t(B,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:e.speedCode},{default:i(()=>[C("div",null,[t(g,{slow:"",active:"",inline:""}),t(g,{active:"",inline:""}),t(g,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),t(B,{title:"Colors",description:"Loaders can be different colors",code:e.colorsCode},{default:i(()=>[C("div",null,[t(g,{color:"primary",inline:"",active:""}),t(g,{color:"secondary",inline:"",active:""}),t(g,{color:"red",inline:"",active:""}),t(g,{color:"orange",inline:"",active:""}),t(g,{color:"yellow",inline:"",active:""}),t(g,{color:"olive",inline:"",active:""}),t(g,{color:"green",inline:"",active:""}),t(g,{color:"teal",inline:"",active:""}),t(g,{color:"blue",inline:"",active:""}),t(g,{color:"violet",inline:"",active:""}),t(g,{color:"purple",inline:"",active:""}),t(g,{color:"pink",inline:"",active:""}),t(g,{color:"brown",inline:"",active:""}),t(g,{color:"grey",inline:"",active:""}),t(g,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),t(B,{title:"Size",description:"Loaders can have different sizes",code:e.sizeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,{size:"mini"},{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:je})]),_:1})]),_:1},8,["code"]),t(B,{title:"Inverted",description:"Loaders can have their colors inverted",code:e.invertedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:"",inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[l("Loading")]),_:1})]),_:1}),t(A,{src:je})]),_:1})]),_:1},8,["code"])]),_:1})])}const C0=ye(b0,[["render",y0]]),w0=R({name:"RailDoc",components:{DocExample:Re},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),S0={class:"intro"};function A0(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("sui-rail"),A=b("sui-grid-column"),B=b("sui-grid"),_=b("doc-example");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",S0,[t(p,{as:"h1"},{default:i(()=>[l("Rail "),t(m,null,{default:i(()=>[l(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:je}),t(y,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(g,{src:je}),t(y,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l("Left Rail Content")]),_:1})]),_:1}),t(y,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:je}),t(y,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:je}),t(y,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:je}),t(y,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Left Rail Content ")]),_:1})]),_:1}),t(y,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[l(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:je}),t(y,{size:"small",position:"left"},{default:i(()=>[l(" Left Small Rail ")]),_:1}),t(y,{size:"large",position:"right"},{default:i(()=>[l(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const k0=ye(w0,[["render",A0]]),$0="/vue-fomantic-ui/images/avatar/large/ade.jpg",Cd="/vue-fomantic-ui/images/avatar/large/chris.jpg",Ts="/vue-fomantic-ui/images/avatar/large/stevie.jpg",wd="/vue-fomantic-ui/images/avatar/large/nan.jpg",B0=R({name:"RevealDoc",components:{DocExample:Re},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),x0={class:"intro"};function T0(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("sui-reveal-content"),A=b("sui-reveal"),B=b("doc-example");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",x0,[t(p,{as:"h1"},{default:i(()=>[l("Reveal "),t(m,null,{default:i(()=>[l(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(B,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(A,{animated:"fade"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:$0})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(A,{animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Cd})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(A,{animated:"rotate"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{circular:"",size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{circular:"",size:"small",src:Ts})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(B,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(A,{active:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:wd})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(A,{disabled:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:wd})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(B,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(A,{instant:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:wt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Cd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const E0=ye(B0,[["render",T0]]),R0=R({name:"SegmentDoc",components:{DocExample:Re},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),z0={class:"intro"},D0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),P0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),M0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),I0=C("p",null,"Top",-1),F0=C("p",null,"Middle",-1),V0=C("p",null,"Middle",-1),N0=C("p",null,"Middle",-1),H0=C("p",null,"Bottom",-1),L0=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),O0=C("p",null,"This segment is on top",-1),j0=C("p",null,"This segment is attached on both sides",-1),q0=C("p",null,"This segment is on bottom",-1),U0=C("p",null,"Fitted Segment",-1),G0=C("p",null,"Horizontally fitted segment",-1),Y0=C("p",null,"Vertically fitted segment",-1),J0=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),W0=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),K0=C("p",null,"If you notice me you must be looking very hard.",-1),X0=C("p",null,"This segment will appear to the right",-1),Q0=C("p",null,"This segment will appear to the left",-1),Z0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function ek(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),y=b("sui-button"),A=b("sui-segment-group");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",z0,[t(p,{as:"h1"},{default:i(()=>[l("Segment "),t(m,null,{default:i(()=>[l(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[l("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(g,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(r,{name:"file outline"}),l(" No documents are listed for this customer. ")]),_:1}),t(y,{color:"primary"},{default:i(()=>[l("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[D0]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[P0]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[M0]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[C("div",null,[t(v,{vertical:""},{default:i(()=>[l(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[l(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(g,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[I0]),_:1}),t(v,null,{default:i(()=>[F0]),_:1}),t(v,null,{default:i(()=>[V0]),_:1}),t(v,null,{default:i(()=>[N0]),_:1}),t(v,null,{default:i(()=>[H0]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(A,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Nested Top")]),_:1}),t(v,null,{default:i(()=>[l("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[l("Nested Bottom")]),_:1})]),_:1}),t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Left")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(A,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(A,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(A,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[l("Top")]),_:1}),t(v,null,{default:i(()=>[l("Middle")]),_:1}),t(v,null,{default:i(()=>[l("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[l("Disabled content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[l("Now Loading...")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[L0]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[C("div",null,[t(v,{attached:"top"},{default:i(()=>[O0]),_:1}),t(v,{attached:""},{default:i(()=>[j0]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[q0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[l("Padded content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[C("div",null,[t(v,{fitted:""},{default:i(()=>[U0]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[G0]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[Y0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[l("Compact content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[C("div",null,[t(v,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[C("div",null,[t(v,null,{default:i(()=>[J0]),_:1}),t(v,{secondary:""},{default:i(()=>[W0]),_:1}),t(v,{tertiary:""},{default:i(()=>[K0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[C("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l(" Buy Now "),t(m,null,{default:i(()=>[l(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(y,{floated:"right"},{default:i(()=>[l("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[C("div",null,[t(v,{floated:"right"},{default:i(()=>[X0]),_:1}),t(v,{floated:"left"},{default:i(()=>[Q0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[C("div",null,[t(v,{textAlign:"right"},{default:i(()=>[l(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[l(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[l(" Center ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[Z0]),_:1})]),_:1},8,["code"])]),_:1})])}const tk=ye(R0,[["render",ek]]),ik=R({name:"StepDoc",components:{DocExample:Re},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),ak={class:"intro"},lk=C("p",null,"The steps take up the entire column width",-1),nk=C("p",null,"Main content",-1);function sk(e,a,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-step"),y=b("sui-step-group"),A=b("doc-example"),B=b("sui-step-title"),_=b("sui-step-description"),w=b("sui-step-content"),$=b("sui-grid-column"),x=b("sui-grid");return z(),pe("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",ak,[t(p,{as:"h1"},{default:i(()=>[l("Step "),t(m,null,{default:i(()=>[l(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[l("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Groups")]),_:1}),t(A,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(y,{ordered:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(y,{vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(r,{name:"credit card"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{link:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(A,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{disabled:""},{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(y,{stackable:"tablet"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"plane"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info circle"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(y,{unstackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"plane"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info circle"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(x,{columns:2},{default:i(()=>[t($,null,{default:i(()=>[t(y,{fluid:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[lk]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[C("div",null,[t(y,{attached:"top"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[nk]),_:1}),t(y,{attached:"bottom"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(y,{widths:2},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(y,{size:"mini"},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(y,{inverted:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Shipping")]),_:1}),t(_,null,{default:i(()=>[l(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(r,{name:"credit card"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Billing")]),_:1}),t(_,null,{default:i(()=>[l(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[l("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[l(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ok=ye(ik,[["render",sk]]),rk=R({name:"BreadcrumbDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function uk(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-breadcrumb-section"),r=b("sui-breadcrumb-divider"),f=b("sui-breadcrumb"),c=b("doc-example"),h=b("sui-segment"),v=b("sui-container");return z(),pe("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(r,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{link:""},{default:i(()=>[l("Store")]),_:1}),t(r,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(f,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(r,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(r,{icon:"right arrow"}),t(o,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Home")]),_:1}),t(r,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(r,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(c,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Product")]),_:1}),t(r,null,{default:i(()=>[l(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[l("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(r,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(r,{icon:"right chevron"}),t(o,{active:""},{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(f,{size:"mini"},{default:i(()=>[t(o,{link:""},{default:i(()=>[l("Home")]),_:1}),t(r,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[l("Registration")]),_:1}),t(r,{icon:"right chevron"}),t(o,null,{default:i(()=>[l("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dk=ye(rk,[["render",uk]]),ck=R({name:"FormDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function mk(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-form-field"),r=b("sui-checkbox"),f=b("sui-button"),c=b("sui-form"),h=b("doc-example"),v=b("sui-form-group"),g=b("sui-container");return z(),pe("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(g,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{label:"First Name",placeholder:"First Name"}),t(o,{label:"Last Name",placeholder:"Last Name"}),t(o,null,{default:i(()=>[t(r,{label:"I agree to the Terms and Conditions"})]),_:1}),t(f,null,{default:i(()=>[l("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(c,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{label:"First name",placeholder:"First Name"}),t(o,{label:"Middle name",placeholder:"Middle Name"}),t(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const pk=ye(ck,[["render",mk]]),Ut="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Sd="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",fk=R({name:"GridDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),gk=C("br",null,null,-1);function hk(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),r=b("sui-grid-column"),f=b("sui-grid"),c=b("doc-example"),h=b("sui-grid-row"),v=b("sui-segment"),g=b("sui-divider"),y=b("sui-menu-item"),A=b("sui-menu"),B=b("sui-container");return z(),pe("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(c,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(f,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.numbers,_=>(z(),H(r,{key:_},{default:i(()=>[t(o,{src:Z})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(c,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(f,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(f,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:13},{default:i(()=>[t(o,{src:Sd})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:10},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(f,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:13},{default:i(()=>[t(o,{src:Sd})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:10},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(f,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{width:8},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{width:8},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{width:8},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{width:8},{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{floated:"left",width:5},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{floated:"right",width:5},{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{width:4},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:9},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{width:3},{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(f,{columns:"equal"},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(r,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("1")]),_:1}),t(v,null,{default:i(()=>[l("2")]),_:1}),t(v,null,{default:i(()=>[l("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[C("div",null,[t(g),t(f,{padded:"",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:we})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})])]),_:1},8,["code"]),t(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(f,{relaxed:"",columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(f,{padded:"",columns:5},{default:i(()=>[t(r,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(r,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(r,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(r,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(r,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(r,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(r,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(r,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(r,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(r,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(r,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(r,{color:"grey"},{default:i(()=>[l("Grey")]),_:1}),t(r,{color:"black"},{default:i(()=>[l("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(f,{centered:"",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(f,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[l("Cats")]),_:1})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[l("Dogs")]),_:1}),t(y,null,{default:i(()=>[l("Poodle")]),_:1}),t(y,null,{default:i(()=>[l("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(A,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[l("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(f,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z}),gk,t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Responsive Variations")]),_:1}),t(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(f,{doubling:"",columns:5},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(f,{stackable:"",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(f,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(r,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(r,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet and Mobile")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[l("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:we})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _k=ye(fk,[["render",hk]]),bk="/vue-fomantic-ui/images/logo.png",vk=R({name:"MenuDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),yk=C("p",null,"Check out our new promotions",-1),Ck=C("p",null,"Check out our collection of coupons",-1),wk=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),Sk=C("img",{src:bk},null,-1);function Ak(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-menu-item"),r=b("sui-menu"),f=b("doc-example"),c=b("sui-input"),h=b("sui-menu-menu"),v=b("sui-label"),g=b("sui-button"),y=b("sui-dropdown-item"),A=b("sui-dropdown-menu"),B=b("sui-dropdown"),_=b("sui-icon"),w=b("sui-segment"),$=b("sui-container");return z(),pe("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t($,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Editorials")]),_:1}),t(o,null,{default:i(()=>[l("Reviews")]),_:1}),t(o,null,{default:i(()=>[l("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(r,{secondary:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(o,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(c,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,null,{default:i(()=>[l("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(r,{pointing:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(o,null,{default:i(()=>[l("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(r,{tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Bio")]),_:1}),t(o,null,{default:i(()=>[l("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(r,{text:""},{default:i(()=>[t(o,{header:""},{default:i(()=>[l("Sort By")]),_:1}),t(o,{active:""},{default:i(()=>[l("Closest")]),_:1}),t(o,null,{default:i(()=>[l("Most Comments")]),_:1}),t(o,null,{default:i(()=>[l("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,{active:"",color:"teal"},{default:i(()=>[l(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[l("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[l(" Spam "),t(v,null,{default:i(()=>[l("51")]),_:1})]),_:1}),t(o,null,{default:i(()=>[l(" Updates "),t(v,null,{default:i(()=>[l("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(r,{pagination:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("1")]),_:1}),t(o,{disabled:""},{default:i(()=>[l("...")]),_:1}),t(o,null,{default:i(()=>[l("10")]),_:1}),t(o,null,{default:i(()=>[l("11")]),_:1}),t(o,null,{default:i(()=>[l("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(f,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{header:""},{default:i(()=>[l("Our Company")]),_:1}),t(o,null,{default:i(()=>[l("About us")]),_:1}),t(o,null,{default:i(()=>[l("Jobs")]),_:1}),t(o,null,{default:i(()=>[l("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Promotions")]),_:1}),yk]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Coupons")]),_:1}),Ck]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Rebates")]),_:1}),wk]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(c,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,{position:"right",as:"div"},{default:i(()=>[t(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,null,{default:i(()=>[l("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,{href:"https://google.com"},{default:i(()=>[l("Visit Google")]),_:1}),t(o,{link:"",as:"div"},{default:i(()=>[l("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(B,{item:"",text:"Categories"},{default:i(()=>[t(A,null,{default:i(()=>[t(y,{text:"Electoronics"}),t(y,{text:"Automotive"}),t(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Browse")]),_:1}),t(o,null,{default:i(()=>[l("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[l("Sign up")]),_:1}),t(o,null,{default:i(()=>[l("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(c,{placeholder:"Search..."})]),_:1}),t(o,{as:"div"},{default:i(()=>[l(" Home "),t(h,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Search")]),_:1}),t(o,null,{default:i(()=>[l("Add")]),_:1}),t(o,null,{default:i(()=>[l("Remove")]),_:1})]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"grid layout"}),l(" Browse ")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(B,{item:"",text:"More"},{default:i(()=>[t(A,null,{default:i(()=>[t(y,{icon:"edit",text:"Edit Profile"}),t(y,{icon:"globe",text:"Choose Language"}),t(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[l("A link")]),_:1}),t(o,{as:"div",link:""},{default:i(()=>[l("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(r,{stackable:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[Sk]),_:1}),t(o,null,{default:i(()=>[l("Features")]),_:1}),t(o,null,{default:i(()=>[l("Testimonials")]),_:1}),t(o,null,{default:i(()=>[l("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(r,{inverted:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(o,null,{default:i(()=>[l("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{active:"",color:"red"},{default:i(()=>[l("Red")]),_:1}),t(o,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(o,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(o,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(o,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(o,{color:"teal"},{default:i(()=>[l("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(r,{icon:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(r,{icon:"labeled"},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),l(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),l(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(r,{fluid:"",vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[l("Run")]),_:1}),t(o,null,{default:i(()=>[l("Walk")]),_:1}),t(o,null,{default:i(()=>[l("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),l(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),l(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),l(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(r,{fluid:"",widths:3},{default:i(()=>[t(o,null,{default:i(()=>[l("Buy")]),_:1}),t(o,null,{default:i(()=>[l("Sell")]),_:1}),t(o,null,{default:i(()=>[l("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[C("div",null,[t(r,{attached:"top",tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("tab1")]),_:1}),t(o,null,{default:i(()=>[l("tab2")]),_:1})]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[l(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(r,{size:"mini"},{default:i(()=>[t(o,{active:""},{default:i(()=>[l("Home")]),_:1}),t(o,null,{default:i(()=>[l("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(B,{item:"",text:"Language"},{default:i(()=>[t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[l("English")]),_:1}),t(y,null,{default:i(()=>[l("Russian")]),_:1}),t(y,null,{default:i(()=>[l("Spanish")]),_:1})]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[l("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{fitted:""},{default:i(()=>[l("No padding whatsoever")]),_:1}),t(o,{fitted:"horizontally"},{default:i(()=>[l("No horizontal padding")]),_:1}),t(o,{fitted:"vertically"},{default:i(()=>[l("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(r,{borderless:""},{default:i(()=>[t(o,null,{default:i(()=>[l("1")]),_:1}),t(o,null,{default:i(()=>[l("2")]),_:1}),t(o,null,{default:i(()=>[l("3")]),_:1}),t(o,null,{default:i(()=>[l("4")]),_:1}),t(o,null,{default:i(()=>[l("5")]),_:1}),t(o,null,{default:i(()=>[l("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const kk=ye(vk,[["render",Ak]]),$k=R({name:"MessageDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),Bk=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),xk=C("p",null,"Get the best news in your e-mail every day.",-1),Tk=C("p",null,"You can't see me",-1),Ek=C("p",null,"You can always see me",-1),Rk=C("p",null,"Way to go!",-1),zk=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),Dk=C("a",{href:"#"},"Login here",-1),Pk=C("p",null,[l("Go to your "),C("b",null,"special offers"),l(" page to see now.")],-1),Mk=C("p",null,"That offer has expired",-1);function Ik(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-message-header"),r=b("sui-message"),f=b("doc-example"),c=b("sui-message-item"),h=b("sui-message-list"),v=b("sui-icon"),g=b("sui-message-content"),y=b("sui-form-field"),A=b("sui-form-group"),B=b("sui-button"),_=b("sui-form"),w=b("sui-container");return z(),pe("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(w,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Changes in Service")]),_:1}),Bk]),_:1})]),_:1},8,["code"]),t(f,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("You can now have cover images on blog pages")]),_:1}),t(c,null,{default:i(()=>[l("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(r,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[l(" Have you heard about our mailing list? ")]),_:1}),xk]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(f,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(r,{hidden:""},{default:i(()=>[Tk]),_:1})]),_:1},8,["code"]),t(f,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(r,{visible:""},{default:i(()=>[Ek]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(r,{floating:""},{default:i(()=>[Rk]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[zk]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[C("div",null,[t(r,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t(A,{widths:"equal"},{default:i(()=>[t(y,{label:"First Name",placeholder:"First Name"}),t(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(y,{label:"Username",placeholder:"Username"}),t(y,{label:"Password",placeholder:"Password"}),t(B,{color:"primary"},{default:i(()=>[l("Submit")]),_:1})]),_:1}),t(r,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),l(" Already signed up? "),Dk,l(" instead. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(r,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[l(" You must register before you can do that! ")]),_:1}),l(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(f,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(r,{info:""},{default:i(()=>[t(o,null,{default:i(()=>[l("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[l("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[l("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(r,{positive:""},{default:i(()=>[t(o,null,{default:i(()=>[l("You are eligible for a reward")]),_:1}),Pk]),_:1})]),_:1},8,["code"]),t(f,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(r,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[l("We're sorry we can't apply that discount")]),_:1}),Mk]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(r,{color:"red"},{default:i(()=>[l("Red")]),_:1}),t(r,{color:"orange"},{default:i(()=>[l("Orange")]),_:1}),t(r,{color:"yellow"},{default:i(()=>[l("Yellow")]),_:1}),t(r,{color:"olive"},{default:i(()=>[l("Olive")]),_:1}),t(r,{color:"green"},{default:i(()=>[l("Green")]),_:1}),t(r,{color:"teal"},{default:i(()=>[l("Teal")]),_:1}),t(r,{color:"blue"},{default:i(()=>[l("Blue")]),_:1}),t(r,{color:"violet"},{default:i(()=>[l("Violet")]),_:1}),t(r,{color:"purple"},{default:i(()=>[l("Purple")]),_:1}),t(r,{color:"pink"},{default:i(()=>[l("Pink")]),_:1}),t(r,{color:"brown"},{default:i(()=>[l("Brown")]),_:1}),t(r,{color:"black"},{default:i(()=>[l("Black")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[C("div",null,[t(r,{size:"mini"},{default:i(()=>[l("This is a mini message.")]),_:1}),t(r,{size:"large"},{default:i(()=>[l("This is a large message.")]),_:1}),t(r,{size:"massive"},{default:i(()=>[l("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const Fk=ye($k,[["render",Ik]]),Vk=R({name:"TableDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),Nk=C("a",{href:"#"},"Edit",-1),Hk=C("a",{href:"#"},"Edit",-1),Lk=C("a",{href:"#"},"Edit",-1),Ok=C("br",null,null,-1),jk=C("br",null,null,-1),qk=C("br",null,null,-1),Uk=C("br",null,null,-1),Gk=C("br",null,null,-1),Yk=C("br",null,null,-1),Jk=C("br",null,null,-1);function Wk(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-table-header-cell"),r=b("sui-table-row"),f=b("sui-table-header"),c=b("sui-table-cell"),h=b("sui-table-body"),v=b("sui-table"),g=b("doc-example"),y=b("sui-icon"),A=b("sui-table-footer"),B=b("sui-container");return z(),pe("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(g,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Age")]),_:1}),t(o,null,{default:i(()=>[l("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("James")]),_:1}),t(c,null,{default:i(()=>[l("24")]),_:1}),t(c,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("26")]),_:1}),t(c,null,{default:i(()=>[l("Engineer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Elyse")]),_:1}),t(c,null,{default:i(()=>[l("24")]),_:1}),t(c,null,{default:i(()=>[l("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o),t(o,null,{default:i(()=>[l("Arguments")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("reset rating")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1}),t(c,null,{default:i(()=>[l("Resets rating to default value")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("set rating")]),_:1}),t(c,null,{default:i(()=>[l("rating (integer)")]),_:1}),t(c,null,{default:i(()=>[l("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{rowspan:"2"},{default:i(()=>[l("Name")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[l("Type")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[l("Files")]),_:1}),t(o,{colspan:"3"},{default:i(()=>[l("Languages")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Ruby")]),_:1}),t(o,null,{default:i(()=>[l("Javascript")]),_:1}),t(o,null,{default:i(()=>[l("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Alpha Team")]),_:1}),t(c,null,{default:i(()=>[l("Project 1")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("2")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1}),t(r,null,{default:i(()=>[t(c,{rowspan:"3"},{default:i(()=>[l("Beta Team")]),_:1}),t(c,null,{default:i(()=>[l("Project 1")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("52")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Project 2")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("12")]),_:1}),t(c),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c)]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Project 3")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("21")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(g,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{negative:""},{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,{positive:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"checkmark"}),l(" Approved ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{positive:""},{default:i(()=>[t(y,{name:"close"}),l(" Requires call ")]),_:1})]),_:1}),t(r,{negative:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,{error:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Cannot pull data")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{error:""},{default:i(()=>[t(y,{name:"attention"}),l(" Requires call ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"attention"}),l(" Requires Action ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{warning:""},{default:i(()=>[t(y,{name:"attention"}),l(" Hostile ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,{active:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Selected")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{active:""},{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{disabled:""},{default:i(()=>[t(c,null,{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Selected")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,{color:"orange"},{default:i(()=>[l("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,{color:"blue"},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"microphone"}),l(" Recording session ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{color:"pink"},{default:i(()=>[t(y,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{color:"green"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,{marked:"right",color:"blue"},{default:i(()=>[l("No Name Specified")]),_:1}),t(c,{marked:"left",color:"red"},{default:i(()=>[l("Unknown")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{marked:"left",color:"green"},{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"microphone"}),l(" Recording session ")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{marked:"left",color:"orange"},{default:i(()=>[t(y,{name:"child"}),l(" Baby Party ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Unknown")]),_:1}),t(c,{marked:"right",color:"purple"},{default:i(()=>[l("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(g,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Registration Date")]),_:1}),t(o,null,{default:i(()=>[l("E-mail address")]),_:1}),t(o,null,{default:i(()=>[l("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John Lilki")]),_:1}),t(c,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(c,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(c,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(c,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,{positive:""},{default:i(()=>[l("Approved")]),_:1}),t(c,{selectable:""},{default:i(()=>[Nk]),_:1})]),_:1}),t(r,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[l("Jimmy")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{selectable:""},{default:i(()=>[Hk]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,{negative:""},{default:i(()=>[l("Denied")]),_:1}),t(c,{selectable:""},{default:i(()=>[Lk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{verticalAlign:"top"},{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{verticalAlign:"top"},{default:i(()=>[l(" Notes "),Ok,l(" 1"),jk,l(" 2"),qk]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,{verticalAlign:"bottom"},{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l(" Notes "),Uk,l(" 1"),Gk,l(" 2"),Yk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{textAlign:"center"},{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Date Joined")]),_:1}),t(o,null,{default:i(()=>[l("E-mail")]),_:1}),t(o,null,{default:i(()=>[l("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John Lilki")]),_:1}),t(c,null,{default:i(()=>[l("September 14, 2013")]),_:1}),t(c,null,{default:i(()=>[l("jhlilk22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("No")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie Harington")]),_:1}),t(c,null,{default:i(()=>[l("January 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jamieharingonton@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill Lewis")]),_:1}),t(c,null,{default:i(()=>[l("May 11, 2014")]),_:1}),t(c,null,{default:i(()=>[l("jilsewris22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[l("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("3 People")]),_:1}),t(c,null,{default:i(()=>[l("2 Approved")]),_:1}),t(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[C("div",null,[t(v,{basic:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1}),Jk,t(v,{basic:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Age")]),_:1}),t(o,null,{default:i(()=>[l("Gender")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("27")]),_:1}),t(c,null,{default:i(()=>[l("Male")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("32")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("22")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("3 People")]),_:1}),t(o,null,{default:i(()=>[l("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),l(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[l("Initial commit")]),_:1}),t(c,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),l(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[l("Initial commit")]),_:1}),t(c,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),l(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[l("Initial commit")]),_:1}),t(c,null,{default:i(()=>[l("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Age")]),_:1}),t(o,null,{default:i(()=>[l("Gender")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("27")]),_:1}),t(c,null,{default:i(()=>[l("Male")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("32")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("22")]),_:1}),t(c,null,{default:i(()=>[l("Other")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("3 People")]),_:1}),t(o,null,{default:i(()=>[l("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{width:10},{default:i(()=>[l("Name")]),_:1}),t(o,{width:6},{default:i(()=>[l("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Food")]),_:1}),t(o,null,{default:i(()=>[l("Calories")]),_:1}),t(o,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Apples")]),_:1}),t(c,null,{default:i(()=>[l("200")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Orange")]),_:1}),t(c,null,{default:i(()=>[l("310")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Food")]),_:1}),t(o,null,{default:i(()=>[l("Calories")]),_:1}),t(o,null,{default:i(()=>[l("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Apples")]),_:1}),t(c,null,{default:i(()=>[l("200")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Orange")]),_:1}),t(c,null,{default:i(()=>[l("310")]),_:1}),t(c,null,{default:i(()=>[l("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[C("div",null,[t(v,{padded:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[C("div",null,[t(v,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[l("Name")]),_:1}),t(o,null,{default:i(()=>[l("Status")]),_:1}),t(o,null,{default:i(()=>[l("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("John")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jamie")]),_:1}),t(c,null,{default:i(()=>[l("Approved")]),_:1}),t(c,null,{default:i(()=>[l("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Jill")]),_:1}),t(c,null,{default:i(()=>[l("Denied")]),_:1}),t(c,null,{default:i(()=>[l("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Kk=ye(Vk,[["render",Wk]]),Xk=R({name:"AdvertisementDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),Qk=C("img",{src:Z},null,-1),Zk=C("br",null,null,-1);function e$(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-advertisement"),r=b("doc-example"),f=b("sui-container");return z(),pe("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(o,{unit:"medium rectangle"},{default:i(()=>[Qk]),_:1})]),_:1},8,["code"]),t(r,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[C("div",null,[t(o,{unit:"medium rectangle",test:"Medium Rectangle"}),t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large rectangle",test:"Large Rectangle"}),t(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(r,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[C("div",null,[t(o,{unit:"mobile banner",test:"Mobile Banner"}),t(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(r,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(r,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[C("div",null,[t(o,{unit:"button",test:"Button"}),t(o,{unit:"square button",test:"Square Button"}),t(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(r,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[C("div",null,[t(o,{unit:"skyscraper",test:"Skyscraper"}),Zk,t(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(r,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[C("div",null,[t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"vertical banner",test:"Vertical Banner"}),t(o,{unit:"top banner",test:"Top Banner"}),t(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(r,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[C("div",null,[t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large leaderboard",test:"Large Leaderboard"}),t(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(r,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(r,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(r,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(r,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const t$=ye(Xk,[["render",e$]]),Ad="/vue-fomantic-ui/images/avatar/large/kristy.png",i$="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Vn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Nn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Hn="/vue-fomantic-ui/images/avatar/large/elyse.png",a$="/vue-fomantic-ui/images/avatar/large/matthew.png",l$="/vue-fomantic-ui/images/avatar/large/molly.png",kd="/vue-fomantic-ui/images/avatar/large/jenny.jpg",$d="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Bd="/vue-fomantic-ui/images/avatar/large/steve.jpg",n$=R({name:"CardDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),s$=C("span",{class:"date"},"Joined in 2013",-1),o$=C("a",null,"Elliot Fu",-1),r$=C("a",null,"Jenny Hess",-1),u$=C("a",null,"Stevie Feliciano",-1),d$=C("a",null,"Administrator",-1),c$=C("a",null,"Helen Troy",-1),m$=C("span",{class:"date"},"Joined in 2013",-1),p$=C("span",null,"2 days ago",-1),f$=C("a",null,"Animals",-1),g$=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),h$=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),_$=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),b$=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),v$=C("span",{class:"category"},"Animals",-1),y$=C("span",{class:"category"},"Animals",-1),C$=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:fn}),l(" Matt ")],-1),w$=C("span",{class:"category"},"Animals",-1),S$=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:fn}),l(" Matt ")],-1),A$=C("p",null,"Jenny is a student studying Media Management at the New School",-1),k$=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:pn}),l(" Jenny ")],-1),$$=C("a",null,"Friends",-1),B$=C("span",{class:"right floated"}," Joined in 2013 ",-1),x$=C("a",null,[C("i",{class:"user icon"}),l(" 75 Friends ")],-1),T$=C("a",null,"Coworker",-1),E$=C("span",{class:"right floated"}," Joined in 2011 ",-1),R$=C("a",null,[C("i",{class:"user icon"}),l(" 35 Friends ")],-1),z$=C("a",null,"Coworker",-1),D$=C("span",{class:"right floated"}," Joined in 2014 ",-1),P$=C("a",null,[C("i",{class:"user icon"}),l(" 151 Friends ")],-1);function M$(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),r=b("sui-card-header"),f=b("sui-card-meta"),c=b("sui-card-description"),h=b("sui-card-content"),v=b("sui-icon"),g=b("sui-card"),y=b("doc-example"),A=b("sui-button"),B=b("sui-button-group"),_=b("sui-card-group"),w=b("sui-feed-summary"),$=b("sui-feed-content"),x=b("sui-feed-event"),E=b("sui-feed"),I=b("sui-grid-column"),F=b("sui-grid"),P=b("sui-segment"),L=b("sui-container");return z(),pe("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(L,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ad,wrapped:""}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[s$]),_:1}),t(c,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[C("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:Lt,floated:"right",size:"mini"}),t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friends of Veronika")]),_:1}),t(c,null,{default:i(()=>[l("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:pn,floated:"right",size:"mini"}),t(r,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("New Member")]),_:1}),t(c,null,{default:i(()=>[l("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(A,{basic:"",color:"green"},{default:i(()=>[l("Approve")]),_:1}),t(A,{basic:"",color:"red"},{default:i(()=>[l("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(y,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(p,{sub:""},{default:i(()=>[l("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(x,null,{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[o$,l(" added "),r$,l(" to the project ")]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[u$,l(" was added as an "),d$]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[c$,l(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(A,{as:"button"},{default:i(()=>[l("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ad,wrapped:""}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Kristy")]),_:1}),t(f,null,{default:i(()=>[m$]),_:1}),t(c,null,{default:i(()=>[l(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[C("a",null,[t(v,{name:"user"}),l(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(c,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(c,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[l("Friend")]),_:1}),t(c,null,{default:i(()=>[l(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[p$,f$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(c,null,{default:i(()=>[l(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Veronika Ossi")]),_:1}),t(c,null,{default:i(()=>[l(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),l(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[g$,h$]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[_$,b$]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(F,{columns:3},{default:i(()=>[t(I,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:i$}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Vn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Nn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(g,{centered:""},{default:i(()=>[t(o,{src:Hn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[t(o,{src:Hn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[v$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(g,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[y$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[C$]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(g,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[w$]),_:1}),t(c,null,{default:i(()=>[t(o,{src:we})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S$]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,{textAlign:"center"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[A$]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[k$]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(P,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:a$}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Matt Giampietro")]),_:1}),t(f,null,{default:i(()=>[$$]),_:1}),t(c,null,{default:i(()=>[l(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[B$,x$]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:l$}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Molly")]),_:1}),t(f,null,{default:i(()=>[T$]),_:1}),t(c,null,{default:i(()=>[l(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[E$,R$]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Hn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elyse")]),_:1}),t(f,null,{default:i(()=>[z$]),_:1}),t(c,null,{default:i(()=>[l(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[D$,P$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,{color:"primary",href:"#"},{default:i(()=>[t(o,{src:Ba})]),_:1}),t(g,{color:"secondary",href:"#"},{default:i(()=>[t(o,{src:Ba})]),_:1}),t(g,{color:"red",href:"#"},{default:i(()=>[t(o,{src:Ba})]),_:1}),t(g,{color:"orange",href:"#"},{default:i(()=>[t(o,{src:Ba})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Nn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Vn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:kd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:$d})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ts})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bd})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Nn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Vn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:kd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:$d})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ts})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const I$=ye(n$,[["render",M$]]),F$=R({name:"CommentDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),V$=C("span",null,"Today at 5:42PM",-1),N$=C("a",null,"Reply",-1),H$=C("span",null,"Yesterday at 12:30AM",-1),L$=C("a",null,"Reply",-1),O$={class:"comments"},j$=C("span",null,"Just now",-1),q$=C("a",null,"Reply",-1),U$=C("span",null,"5 days ago",-1),G$=C("a",null,"Reply",-1),Y$=C("div",{class:"date"},"2 days ago",-1),J$=C("div",{class:"rating"},[C("i",{class:"star icon"}),l(" 5 Faves ")],-1),W$=C("a",null,"Reply",-1),K$=C("a",null,"Save",-1),X$=C("a",null,"Hide",-1),Q$=C("a",null,[C("i",{class:"expand icon"}),l(" Full-screen ")],-1),Z$=C("a",null,"Reply",-1),eB=C("a",null,"Reply",-1),tB=C("a",null,"Replay",-1),iB=C("span",null,"Today at 5:42PM",-1),aB=C("a",{href:"#"},"Replay",-1),lB=C("span",null,"Yesterday at 12:30AM",-1),nB=C("a",{href:"#"},"Replay",-1),sB=C("span",null,"Just now",-1),oB=C("a",{href:"#"},"Replay",-1),rB=C("span",null,"5 days ago",-1),uB=C("a",{href:"#"},"Replay",-1),dB=C("span",null,"Today at 5:42PM",-1),cB=C("a",{href:"#"},"Replay",-1),mB=C("span",null,"Yesterday at 12:30AM",-1),pB=C("a",{href:"#"},"Replay",-1),fB=C("span",null,"Just now",-1),gB=C("a",{href:"#"},"Replay",-1),hB=C("span",null,"5 days ago",-1),_B=C("a",{href:"#"},"Replay",-1),bB=C("span",null,"Today at 5:42PM",-1),vB=C("a",{href:"#"},"Replay",-1),yB=C("span",null,"Yesterday at 12:30AM",-1),CB=C("a",{href:"#"},"Replay",-1),wB=C("span",null,"Just now",-1),SB=C("a",{href:"#"},"Replay",-1),AB=C("span",null,"5 days ago",-1),kB=C("a",{href:"#"},"Replay",-1),$B=C("span",null,"Today at 5:42PM",-1),BB=C("a",{href:"#"},"Replay",-1),xB=C("span",null,"Yesterday at 12:30AM",-1),TB=C("a",{href:"#"},"Replay",-1),EB=C("span",null,"Just now",-1),RB=C("a",{href:"#"},"Replay",-1),zB=C("span",null,"5 days ago",-1),DB=C("a",{href:"#"},"Replay",-1);function PB(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-comment-avatar"),r=b("sui-comment-author"),f=b("sui-comment-metadata"),c=b("sui-comment-text"),h=b("sui-comment-actions"),v=b("sui-comment-content"),g=b("sui-comment"),y=b("sui-comment-group"),A=b("doc-example"),B=b("sui-form-textarea"),_=b("sui-icon"),w=b("sui-button"),$=b("sui-form"),x=b("sui-segment"),E=b("sui-container");return z(),pe("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[V$]),_:1}),t(c,null,{default:i(()=>[l("How artistic!")]),_:1}),t(h,null,{default:i(()=>[N$]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[H$]),_:1}),t(c,null,{default:i(()=>[l("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[L$]),_:1})]),_:1}),C("div",O$,[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[j$]),_:1}),t(c,null,{default:i(()=>[l("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[q$]),_:1})]),_:1})]),_:1})])]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[U$]),_:1}),t(c,null,{default:i(()=>[l("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[G$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Stevie Feliciano")]),_:1}),t(f,null,{default:i(()=>[Y$,J$]),_:1}),t(c,null,{default:i(()=>[l(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Tom Lukic")]),_:1}),t(c,null,{default:i(()=>[l(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[W$,K$,X$,Q$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Steve Jobs")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[l("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[Z$]),_:1}),t($,{reply:""},{default:i(()=>[t(B),t(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),l(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Christian Rocha")]),_:1}),t(f,null,{default:i(()=>[l("2 days ago")]),_:1}),t(c,null,{default:i(()=>[l(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[eB]),_:1})]),_:1}),t(y,{collapsed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[l("1 days ago")]),_:1}),t(c,null,{default:i(()=>[l("No, it wont")]),_:1}),t(h,null,{default:i(()=>[tB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(y,{threaded:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[iB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[aB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[lB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[nB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[sB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[oB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[rB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[uB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(y,{minimal:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[dB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[cB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[mB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[pB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[fB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[gB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[hB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[_B]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(y,{size:"small"},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[bB]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[vB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[yB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[CB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[wB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[SB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[AB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[kB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[l("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Matt")]),_:1}),t(f,null,{default:i(()=>[$B]),_:1}),t(c,null,{default:i(()=>[l(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[BB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[xB]),_:1}),t(c,null,{default:i(()=>[l(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[TB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[EB]),_:1}),t(c,null,{default:i(()=>[l(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[RB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[zB]),_:1}),t(c,null,{default:i(()=>[l(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[DB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const MB=ye(F$,[["render",PB]]),IB=R({name:"FeedDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),FB=C("img",{src:Lt},null,-1),VB=C("img",{src:Lt},null,-1),NB=C("a",null,"Coworkers",-1),HB=C("img",{src:pn},null,-1),LB=C("a",null,"Jenny Hess",-1),OB=C("a",null,"coworker",-1),jB=C("img",{src:xa},null,-1),qB=C("a",null,"Helen Troy",-1),UB=C("a",null,[C("img",{src:Z})],-1),GB=C("a",null,[C("img",{src:Z})],-1),YB=C("a",null,"Elliot Fu",-1),JB=C("a",null,"Jenny Hess",-1),WB=C("a",null,"Stevie Feliciano",-1),KB=C("a",null,"Elliot Fu",-1),XB=C("a",null,"Helen Troy",-1),QB=C("a",null,"Christian Rocha",-1),ZB=C("img",{src:Lt},null,-1),ex=C("div",{class:"date"},"Just now",-1),tx=C("a",{class:"user"},"Elliot Fu",-1);function ix(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-feed-label"),r=b("sui-feed-user"),f=b("sui-feed-date"),c=b("sui-feed-summary"),h=b("sui-icon"),v=b("sui-feed-like"),g=b("sui-feed-meta"),y=b("sui-feed-content"),A=b("sui-feed-event"),B=b("sui-feed"),_=b("doc-example"),w=b("sui-feed-extra"),$=b("sui-segment"),x=b("sui-container");return z(),pe("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[FB]),_:1}),t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Elliot Fu")]),_:1}),l(" added you as a friend "),t(f,null,{default:i(()=>[l("1 Hour Ago")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),l(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[VB]),_:1}),t(y,null,{default:i(()=>[l(" You added Elliot Fu to the group "),NB]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[HB]),_:1}),t(y,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(c,null,{default:i(()=>[l(" You added "),LB,l(" to your "),OB,l(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(B,null,{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[jB]),_:1}),t(y,null,{default:i(()=>[t(f,null,{default:i(()=>[l(" 3 days ago ")]),_:1}),t(c,null,{default:i(()=>[qB,l(" added 2 photos ")]),_:1}),t(w,{images:""},{default:i(()=>[UB,GB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{size:"small"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Followers Activity")]),_:1}),t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[YB,l(" added "),JB,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[WB,l(" added "),KB,l(" as a friend ")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[XB,l(" added "),QB,l(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t($,{inverted:""},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(A,null,{default:i(()=>[t(o,null,{default:i(()=>[ZB]),_:1}),t(y,null,{default:i(()=>[ex,t(c,null,{default:i(()=>[tx,l(" posted on his page ")]),_:1}),t(w,{text:""},{default:i(()=>[l(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ax=ye(IB,[["render",ix]]),lx=R({name:"ItemDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),nx=C("img",{src:Z},null,-1),sx=C("span",null,"Description",-1),ox=C("img",{src:je},null,-1),rx=C("img",{src:Z},null,-1),ux=C("span",null,"Description",-1),dx=C("img",{src:je},null,-1),cx=C("img",{src:Z},null,-1),mx=C("img",{src:Z},null,-1),px=C("img",{src:Z},null,-1),fx=C("img",{src:Z},null,-1),gx=C("img",{src:Z},null,-1),hx=C("img",{src:Z},null,-1),_x=C("img",{src:Z},null,-1),bx=C("span",{class:"price"},"$1200",-1),vx=C("span",{class:"stay"},"1 Month",-1),yx=C("img",{src:je},null,-1),Cx=C("span",{class:"price"},"$1000",-1),wx=C("span",{class:"stay"},"2 Weeks",-1),Sx=C("img",{src:je},null,-1),Ax=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),kx=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),$x=C("img",{src:je},null,-1),Bx=C("img",{src:Z},null,-1),xx=C("span",{class:"cinema"},"Union Square 14",-1),Tx=C("img",{src:je},null,-1),Ex=C("img",{src:Z},null,-1),Rx=C("span",{class:"cinema"},"IFC Cinema",-1),zx=C("img",{src:je},null,-1),Dx=C("img",{src:Z},null,-1),Px=C("span",{class:"cinema"},"IFC",-1),Mx=C("img",{src:je},null,-1),Ix=C("img",{src:je},null,-1),Fx=C("img",{src:je},null,-1),Vx=C("img",{src:je},null,-1),Nx=C("span",{class:"price"},"$1200",-1),Hx=C("span",{class:"stay"},"1 Month",-1),Lx=C("img",{src:je},null,-1),Ox=C("span",{class:"price"},"$1000",-1),jx=C("span",{class:"stay"},"2 Weeks",-1),qx=C("img",{src:je},null,-1);function Ux(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-item-image"),r=b("sui-item-header"),f=b("sui-item-meta"),c=b("sui-item-description"),h=b("sui-item-extra"),v=b("sui-item-content"),g=b("sui-item"),y=b("sui-item-group"),A=b("doc-example"),B=b("sui-image"),_=b("sui-icon"),w=b("sui-label"),$=b("sui-button"),x=b("sui-segment"),E=b("sui-container");return z(),pe("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[nx]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[sx]),_:1}),t(c,null,{default:i(()=>[ox]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[rx]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Header")]),_:1}),t(f,null,{default:i(()=>[ux]),_:1}),t(c,null,{default:i(()=>[dx]),_:1}),t(h,null,{default:i(()=>[l(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(A,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[cx]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[mx]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[px]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[fx]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content A ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[gx]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content B ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[hx]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[l(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[_x]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[bx,vx]),_:1}),t(c,null,{default:i(()=>[yx]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[Cx,wx]),_:1}),t(c,null,{default:i(()=>[Sx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(c,null,{default:i(()=>[Ax,kx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Cute Dog")]),_:1}),t(c,null,{default:i(()=>[$x]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),l(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Bx]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("12 Years a Slave")]),_:1}),t(f,null,{default:i(()=>[xx]),_:1}),t(c,null,{default:i(()=>[Tx]),_:1}),t(h,null,{default:i(()=>[t(w,null,{default:i(()=>[l("IMAX")]),_:1}),t(w,null,{default:i(()=>[t(_,{name:"globe"}),l(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Ex]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(f,null,{default:i(()=>[Rx]),_:1}),t(c,null,{default:i(()=>[zx]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(w,null,{default:i(()=>[l("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[Dx]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Watchmen")]),_:1}),t(f,null,{default:i(()=>[Px]),_:1}),t(c,null,{default:i(()=>[Mx]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right",color:"primary"},{default:i(()=>[l(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"tiny",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"tiny",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"tiny",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,{as:"a"},{default:i(()=>[l("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Top Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[l("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(r,null,{default:i(()=>[l("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[l("Content A")]),_:1}),t(c,null,{default:i(()=>[Ix]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[l("Content B")]),_:1}),t(c,null,{default:i(()=>[Fx]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[l("Content C")]),_:1}),t(c,null,{default:i(()=>[Vx]),_:1}),t(h,null,{default:i(()=>[t($,{floated:"right"},{default:i(()=>[l("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[Nx,Hx]),_:1}),t(c,null,{default:i(()=>[Lx]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[l("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[Ox,jx]),_:1}),t(c,null,{default:i(()=>[qx]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Gx=ye(lx,[["render",Ux]]),Yx=R({name:"StatisticDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),Jx=C("br",null,null,-1),Wx=C("br",null,null,-1),Kx=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Xx=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),Qx=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),Zx=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function eT(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-statistic"),r=b("doc-example"),f=b("sui-statistic-group"),c=b("sui-statistic-value"),h=b("sui-statistic-label"),v=b("sui-icon"),g=b("sui-image"),y=b("sui-segment"),A=b("sui-container");return z(),pe("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(r,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,{value:"31,200",label:"Views"}),t(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(r,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(c,{text:""},{default:i(()=>[l(" Three"),Jx,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(g,{circular:"",inline:"",src:xs}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(r,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(r,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(r,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(f,{stackable:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(r,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(f,{widths:4},{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(c,{text:""},{default:i(()=>[l(" Three"),Wx,l(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[l("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(v,{name:"plane"}),l(" 5 ")]),_:1}),t(h,null,{default:i(()=>[l("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(g,{circular:"",inline:"",src:xs}),l(" 42 ")]),_:1}),t(h,null,{default:i(()=>[l("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(o,{floated:"right",value:"2,204",label:"Views"}),Kx,Xx,t(o,{floated:"left",value:"2,204",label:"Views"}),Qx,Zx]),_:1})]),_:1},8,["code"]),t(r,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",value:"2,204",label:"Views"}),t(o,{size:"tiny",value:"2,204",label:"Views"}),t(o,{size:"small",value:"2,204",label:"Views"}),t(o,{value:"2,204",label:"Views"}),t(o,{size:"large",value:"2,204",label:"Views"}),t(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const tT=ye(Yx,[["render",eT]]),iT=R({name:"AccordionDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),aT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),lT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),nT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),sT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),oT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),rT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),uT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),dT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),cT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),mT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),pT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),fT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),gT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),hT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),_T=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),bT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),vT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),yT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),CT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),wT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function ST(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-accordion-tab"),r=b("sui-accordion"),f=b("doc-example"),c=b("sui-segment"),h=b("sui-container");return z(),pe("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[aT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[lT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[nT,sT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(r,{styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[oT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[rT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[uT,dT]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(r,{fluid:"",styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[cT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[mT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[pT,fT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(r,{inverted:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[gT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[hT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[_T,bT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Usage")]),_:1}),t(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(r,{multiple:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[vT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[yT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[CT,wT]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const AT=ye(iT,[["render",ST]]),kT=R({name:"CalendarDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{calendar1:j(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function $T(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-calendar"),r=b("doc-example"),f=b("sui-container");return z(),pe("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(o,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=c=>e.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const BT=ye(kT,[["render",$T]]),xT=R({name:"PropertyListTable",props:{properties:Array}});function TT(e,a,n,s,u,d){const m=b("sui-table-header-cell"),p=b("sui-table-row"),o=b("sui-table-header"),r=b("sui-table-cell"),f=b("sui-table-body"),c=b("sui-table");return z(),H(c,{celled:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,null,{default:i(()=>[l("Name")]),_:1}),t(m,null,{default:i(()=>[l("Type")]),_:1}),t(m,null,{default:i(()=>[l("Default")]),_:1}),t(m,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(f,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.properties,h=>(z(),H(p,{key:h.name},{default:i(()=>[t(r,null,{default:i(()=>[l(Be(h.name),1)]),_:2},1024),t(r,null,{default:i(()=>[l(Be(h.type),1)]),_:2},1024),t(r,null,{default:i(()=>[l(Be(h.default),1)]),_:2},1024),t(r,null,{default:i(()=>[l(Be(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const gn=ye(xT,[["render",TT]]),ET=R({name:"CheckboxDoc",components:{DocPageHeader:qe,DocExample:Re,PropertyListTable:gn},setup(){const e=j(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=j([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,u=j(!1),d='<sui-checkbox toggle v-model="toggle" />',m=j(!1);return{checked:e,checkboxCode:a,selected:n,multipleCode:s,toggle:u,toggleCode:d,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),RT={class:"ui form"},zT={class:"grouped fields"},DT={class:"field"},PT={class:"field"},MT={class:"field"};function IT(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-checkbox"),r=b("doc-example"),f=b("property-list-table"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),A=b("sui-table"),B=b("sui-container");return z(),pe("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(o,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[C("div",RT,[C("div",zT,[C("div",DT,[t(o,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),C("div",PT,[t(o,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),C("div",MT,[t(o,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),l(" selected : "+Be(e.selected),1)]),_:1},8,["code"]),t(r,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(o,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(o,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.events,_=>(z(),H(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const FT=ye(ET,[["render",IT]]),VT=R({name:"DimmerDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function NT(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),r=b("sui-image-group"),f=b("sui-dimmer"),c=b("sui-dimmer-dimmable"),h=b("doc-example"),v=b("sui-icon"),g=b("sui-button"),y=b("sui-header-subheader"),A=b("sui-container");return z(),pe("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(A,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(r,{size:"small"},{default:i(()=>[t(o,{src:Z}),t(o,{src:Z}),t(o,{src:Z})]),_:1}),t(o,{size:"medium",src:Ut}),t(f,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[l("Overlayable Section")]),_:1}),t(r,{size:"small"},{default:i(()=>[t(o,{src:Z}),t(o,{src:Z}),t(o,{src:Z})]),_:1}),t(o,{size:"medium",src:Ut}),t(f,{active:""},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[C("div",null,[t(g,{labeled:"",icon:"",onClick:a[0]||(a[0]=B=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),l(" Show ")]),_:1}),t(f,{active:e.active,page:"",onClick:a[1]||(a[1]=B=>e.active=!1)},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),l(" Dimmed Message! "),t(y,null,{default:i(()=>[l("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const HT=ye(VT,[["render",NT]]),LT=R({name:"DropdownDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){const e=`<sui-dropdown text="File">
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
/>`,s=j(null),u=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],d=`<sui-dropdown
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
/>`,r=j(null),f=`<sui-dropdown
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
/>`,B=j({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:n,selected2:s,searchSelectionOptions:u,searchSelectionCode:d,selected3:m,clearableSelectionOptions:p,clearableSelectionCode:o,selected4:r,multipleCode:f,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:g,selected7:y,searchInMenuCode:A,selected8:B,inlineCode:`<span>
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
</sui-button-group>`}}});function OT(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-dropdown-item"),r=b("sui-divider"),f=b("sui-dropdown-menu"),c=b("sui-dropdown"),h=b("doc-example"),v=b("sui-button"),g=b("sui-button-group"),y=b("sui-container");return z(),pe("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(y,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(c,{text:"File"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Open...",description:"ctrl + o"}),t(o,{text:"Save as...",description:"ctrl + s"}),t(o,{text:"Rename",description:"ctrl + r"}),t(o,{text:"Make a copy"}),t(o,{icon:"folder",text:"Move to folder"}),t(o,{icon:"trash",text:"Move to trash"}),t(r),t(o,{text:"Download As..."}),t(o,{text:"Publish To Web"}),t(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(c,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=A=>e.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(c,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=A=>e.selected2=A),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(c,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=A=>e.selected3=A),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(c,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=A=>e.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=A=>e.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=A=>e.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=A=>e.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[C("span",null,[l(" Show me posts by "),t(c,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=A=>e.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Save As"}),t(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(g,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[l("Save")]),_:1}),t(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"Edit Post",icon:"edit"}),t(o,{text:"Remove Post",icon:"delete"}),t(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const jT=ye(LT,[["render",OT]]),qT=R({name:"EmbedDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function UT(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-embed"),r=b("doc-example"),f=b("sui-container");return z(),pe("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(r,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const GT=ye(qT,[["render",UT]]),YT="/vue-fomantic-ui/images/avatar/large/rachel.png",JT=R({name:"ModalDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){const e=`<div>
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
</div>`}}}),WT=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),KT=C("p",null,"Is it okay to use this photo?",-1),XT=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function QT(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-button"),r=b("sui-modal-header"),f=b("sui-image"),c=b("sui-modal-description"),h=b("sui-modal-content"),v=b("sui-modal-actions"),g=b("sui-modal"),y=b("doc-example"),A=b("sui-icon"),B=b("sui-container");return z(),pe("div",null,[t(m,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(y,{title:"Modal",description:"A standard modal",code:e.modalCode},{default:i(()=>[C("div",null,[t(o,{onClick:a[0]||(a[0]=_=>e.modal1=!0)},{default:i(()=>[l("Show Modal")]),_:1}),t(g,{modelValue:e.modal1,"onUpdate:modelValue":a[2]||(a[2]=_=>e.modal1=_)},{default:i(()=>[t(r,null,{default:i(()=>[l("Select a Photo")]),_:1}),t(h,{image:""},{default:i(()=>[t(f,{wrapped:"",size:"medium",src:YT}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[l("Default Profile Image")]),_:1}),WT,KT]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(o,{positive:"",onClick:a[1]||(a[1]=_=>e.modal1=!1)},{default:i(()=>[l("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t(y,{title:"Basic",description:"A modal can reduce its complexity",code:e.basicCode},{default:i(()=>[C("div",null,[t(o,{onClick:a[3]||(a[3]=_=>e.basicModal=!0)},{default:i(()=>[l("Basic Modal")]),_:1}),t(g,{basic:"",modelValue:e.basicModal,"onUpdate:modelValue":a[5]||(a[5]=_=>e.basicModal=_)},{default:i(()=>[t(r,{icon:""},{default:i(()=>[t(A,{name:"archive"}),l(" Archive Old Messages ")]),_:1}),t(h,null,{default:i(()=>[XT]),_:1}),t(v,null,{default:i(()=>[t(o,{basic:"",color:"red",inverted:"",onClick:a[4]||(a[4]=_=>e.basicModal=!1)},{default:i(()=>[t(A,{name:"remove"}),l(" No ")]),_:1}),t(o,{basic:"",color:"green"},{default:i(()=>[t(A,{name:"checkmark"}),l(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const ZT=ye(JT,[["render",QT]]),e2="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",t2=R({name:"PopupDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){const e=j(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=j(null),s=j(null),u=j(null),d=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
</sui-popup>`,o=j(null),r=`<sui-button icon ref="basicTrigger">
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
</sui-popup>`,g=j(null),y=j(null),A=j(null),B=j(null),_=j(null),w=j(null),$=j(null),x=j(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,I=j(null),F=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=j(null),L=j(null),J=j(null),q=j(null),de=j(null),$e=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,O=j(null),Y=j(null);return{popupTrigger:e,popupCode:a,titledTrigger1:n,titledTrigger2:s,titledTrigger3:u,titledCode:d,triggerTriger:m,triggerCode:p,basicTrigger:o,basicCode:r,wideTrigger1:f,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:g,positionTrigger2:y,positionTrigger3:A,positionTrigger4:B,positionTrigger5:_,positionTrigger6:w,positionTrigger7:$,positionTrigger8:x,positionCode:E,flowingTrigger:I,flowingCode:F,sizeTrigger1:P,sizeTrigger2:L,sizeTrigger3:J,sizeTrigger4:q,sizeTrigger5:de,sizeCode:$e,invertedTrigger1:O,invertedTrigger2:Y,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),i2=C("p",null,[C("b",null,"2"),l(" projects, $10 a month ")],-1),a2=C("p",null,[C("b",null,"5"),l(" projects, $20 a month ")],-1),l2=C("p",null,[C("b",null,"8"),l(" projects, $25 a month ")],-1);function n2(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),r=b("sui-button"),f=b("sui-popup"),c=b("doc-example"),h=b("sui-image"),v=b("sui-card-header"),g=b("sui-card-description"),y=b("sui-card-content"),A=b("sui-card"),B=b("sui-rating"),_=b("sui-divider"),w=b("sui-grid-column"),$=b("sui-grid"),x=b("sui-container");return z(),pe("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(x,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(c,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(r,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.popupTrigger},{default:i(()=>[l(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:Lt,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Wa,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:fn,ref:"titledTrigger3"},null,512),t(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(A,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:e2}),t(y,null,{default:i(()=>[t(v,null,{default:i(()=>[l("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[l(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(f,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(B,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(c,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(r,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(r,{ref:"positionTrigger1"},{default:i(()=>[l("Top Left")]),_:1},512),t(r,{ref:"positionTrigger2"},{default:i(()=>[l("Top Center")]),_:1},512),t(r,{ref:"positionTrigger3"},{default:i(()=>[l("Top Right")]),_:1},512),t(_),t(r,{ref:"positionTrigger4"},{default:i(()=>[l("Bottom Left")]),_:1},512),t(r,{ref:"positionTrigger5"},{default:i(()=>[l("Bottom Center")]),_:1},512),t(r,{ref:"positionTrigger6"},{default:i(()=>[l("Bottom Right")]),_:1},512),t(_),t(r,{ref:"positionTrigger7"},{default:i(()=>[l("Right Center")]),_:1},512),t(r,{ref:"positionTrigger8"},{default:i(()=>[l("Left Center")]),_:1},512),t(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(r,{ref:"flowingTrigger"},{default:i(()=>[l("Show Flowing Popup")]),_:1},512),t(f,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t($,{centered:"",divided:"",columns:3},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Basic Plan")]),_:1}),i2,t(r,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Business Plan")]),_:1}),a2,t(r,null,{default:i(()=>[l("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[l("Premium Plan")]),_:1}),l2,t(r,null,{default:i(()=>[l("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(f,{trigger:e.wideTrigger1},{default:i(()=>[l(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[l(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[l(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(r,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const s2=ye(t2,[["render",n2]]),o2=R({name:"ProgressDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function r2(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-progress"),r=b("doc-example"),f=b("sui-segment"),c=b("sui-container");return z(),pe("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(c,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(r,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Content")]),_:1}),t(r,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(o,{percent:33})]),_:1},8,["code"]),t(r,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(o,{percent:14,progress:""})]),_:1},8,["code"]),t(r,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(r,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(r,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(r,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(r,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(r,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(r,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(o,{percent:25,disabled:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(r,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(r,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{percent:47,attached:"top"}),l(" La la la la "),t(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(r,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{percent:88,size:"tiny",label:"tiny"}),t(o,{percent:100,size:"small",label:"small",success:""}),t(o,{percent:83,label:"standard"}),t(o,{percent:73,size:"large",label:"large"}),t(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(r,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(o,{percent:32,color:"red"}),t(o,{percent:53,color:"orange"}),t(o,{percent:13,color:"yellow"}),t(o,{percent:37,color:"olive"}),t(o,{percent:83,color:"green"}),t(o,{percent:24,color:"teal"}),t(o,{percent:88,color:"blue"}),t(o,{percent:41,color:"violet"}),t(o,{percent:47,color:"purple"}),t(o,{percent:30,color:"pink"}),t(o,{percent:68,color:"brown"}),t(o,{percent:35,color:"grey"}),t(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const u2=ye(o2,[["render",r2]]),d2=R({name:"RatingDoc",components:{DocPageHeader:qe,DocExample:Re,PropertyListTable:gn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),c2=C("br",null,null,-1),m2=C("br",null,null,-1),p2=C("br",null,null,-1),f2=C("br",null,null,-1),g2=C("br",null,null,-1),h2=C("br",null,null,-1),_2=C("br",null,null,-1),b2=C("br",null,null,-1),v2=C("br",null,null,-1),y2=C("br",null,null,-1),C2=C("br",null,null,-1),w2=C("br",null,null,-1),S2=C("br",null,null,-1),A2=C("br",null,null,-1),k2=C("br",null,null,-1),$2=C("br",null,null,-1),B2=C("br",null,null,-1),x2=C("br",null,null,-1),T2=C("br",null,null,-1),E2=C("br",null,null,-1),R2=C("br",null,null,-1),z2=C("br",null,null,-1),D2=C("br",null,null,-1),P2=C("br",null,null,-1),M2=C("br",null,null,-1),I2=C("br",null,null,-1),F2=C("br",null,null,-1),V2=C("br",null,null,-1),N2=C("br",null,null,-1),H2=C("br",null,null,-1),L2=C("br",null,null,-1),O2=C("br",null,null,-1),j2=C("br",null,null,-1),q2=C("br",null,null,-1),U2=C("br",null,null,-1),G2=C("br",null,null,-1),Y2=C("br",null,null,-1),J2=C("br",null,null,-1),W2=C("br",null,null,-1),K2=C("br",null,null,-1),X2=C("br",null,null,-1),Q2=C("br",null,null,-1),Z2=C("br",null,null,-1),eE=C("br",null,null,-1),tE=C("br",null,null,-1),iE=C("br",null,null,-1),aE=C("br",null,null,-1),lE=C("br",null,null,-1);function nE(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-rating"),r=b("doc-example"),f=b("property-list-table"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),A=b("sui-table"),B=b("sui-container");return z(),pe("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(o)]),_:1},8,["code"]),t(r,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(o,{defaultRating:2,maxRating:4,color:"yellow"}),c2,m2,t(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),p2,f2,t(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),g2,h2,t(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),_2,b2,t(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),v2,y2,t(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),C2,w2,t(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(r,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(o,{defaultRating:1,maxRating:7,color:"red"}),S2,A2,t(o,{defaultRating:2,maxRating:7,color:"orange"}),k2,$2,t(o,{defaultRating:3,maxRating:7,color:"yellow"}),B2,x2,t(o,{defaultRating:4,maxRating:7,color:"olive"}),T2,E2,t(o,{defaultRating:5,maxRating:7,color:"green"}),R2,z2,t(o,{defaultRating:6,maxRating:7,color:"teal"}),D2,P2,t(o,{defaultRating:6,maxRating:7,color:"blue"}),M2,I2,t(o,{defaultRating:5,maxRating:7,color:"violet"}),F2,V2,t(o,{defaultRating:4,maxRating:7,color:"purple"}),N2,H2,t(o,{defaultRating:3,maxRating:7,color:"pink"}),L2,O2,t(o,{defaultRating:2,maxRating:7,color:"brown"}),j2,q2,t(o,{defaultRating:1,maxRating:7,color:"grey"}),U2,G2,t(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("States")]),_:1}),t(r,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(r,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),Y2,J2,t(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),W2,K2,t(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),X2,Q2,t(o,{defaultRating:3,maxRating:4,color:"yellow"}),Z2,eE,t(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),tE,iE,t(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),aE,lE,t(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.events,_=>(z(),H(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const sE=ye(d2,[["render",nE]]),oE=R({name:"SidebarDoc",components:{DocPageHeader:qe,DocExample:Re,PropertyListTable:gn},setup(){return{visible1:j(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),rE={class:"pusher"};function uE(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),r=b("sui-button"),f=b("sui-grid-column"),c=b("sui-menu-item"),h=b("sui-sidebar"),v=b("sui-image"),g=b("sui-segment"),y=b("sui-grid"),A=b("doc-example"),B=b("property-list-table"),_=b("sui-table-header-cell"),w=b("sui-table-row"),$=b("sui-table-header"),x=b("sui-table-cell"),E=b("sui-table-body"),I=b("sui-table"),F=b("sui-container");return z(),pe("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(F,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(A,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(y,{columns:1},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{onClick:a[0]||(a[0]=P=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(o,{name:"arrow right"})]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(g,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{name:"home"}),l(" Home ")]),_:1}),t(c,null,{default:i(()=>[t(o,{name:"gamepad"}),l(" Games ")]),_:1}),t(c,null,{default:i(()=>[t(o,{name:"camera"}),l(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",rE,[t(g,null,{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[l("Main Header")]),_:1}),t(v,{src:we})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(B,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(I,{celled:""},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[l("Name")]),_:1}),t(_,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.events,P=>(z(),H(w,{key:P.name},{default:i(()=>[t(x,null,{default:i(()=>[l(Be(P.name),1)]),_:2},1024),t(x,null,{default:i(()=>[l(Be(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const dE=ye(oE,[["render",uE]]),cE=R({name:"SliderDoc",components:{DocPageHeader:qe,DocExample:Re},setup(){const e=j(5),a='<sui-slider v-model="slider1" />',n=j(4),s='<sui-slider labeled v-model="slider2" />',u=j(6),d='<sui-slider labeled="ticked" v-model="slider3" />',m=j(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=j(40),r='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=j([]);f.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=j(7),v='<sui-slider disabled v-model="slider7" />',g=j(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=j(3),B='<sui-slider reversed v-model="slider9" />',_=j(18),w='<sui-slider vertical v-model="slider10" :max="20" />',$=j(5),x=j(5),E=j(5),I=j(5),F=j(5),P=j(5),L=j(5),J=j(5),q=j(5),de=j(5),$e=j(5),O=j(5),Y=j(5),re=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,te=`<sui-segment inverted>
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
</sui-segment>`,xe=j(5),Ue=j(5),et=j(5);return{slider1:e,sliderCode:a,slider2:n,labeledSliderCode:s,slider3:u,labeledTickedCode:d,slider4:m,customLabelsCode:p,slider5:o,stepCode:r,slider6:f,rangeCode:c,slider7:h,disabledCode:v,slider8:g,invertedCode:y,slider9:A,reversedCode:B,slider10:_,verticalCode:w,redSlider:$,orangeSlider:x,yellowSlider:E,oliveSlider:I,greenSlider:F,tealSlider:P,blueSlider:L,violetSlider:J,purpleSlider:q,pinkSlider:de,brownSlider:$e,greySlider:O,blackSlider:Y,coloredCode:re,invertedColoredCode:te,smallSlider:xe,largeSlider:Ue,bigSlider:et,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function mE(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-slider"),r=b("doc-example"),f=b("sui-segment"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),A=b("sui-table"),B=b("sui-container");return z(),pe("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Types")]),_:1}),t(r,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(o,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),l(" "+Be(e.slider1),1)]),_:1},8,["code"]),t(r,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(o,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(o,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(o,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(o,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),l(" "+Be(e.slider5),1)]),_:1},8,["code"]),t(r,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(o,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),l(" "+Be(e.slider6),1)]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Variations")]),_:1}),t(r,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(r,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(o,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),l(" "+Be(e.slider9),1)]),_:1},8,["code"]),t(r,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(o,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),l(" "+Be(e.slider10),1)]),_:1},8,["code"]),t(r,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(o,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(r,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(o,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(o,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(o,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Type")]),_:1}),t(c,null,{default:i(()=>[l("Default")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.properties,_=>(z(),H(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(Be(_.type),1)]),_:2},1024),t(g,null,{default:i(()=>[l(Be(_.default),1)]),_:2},1024),t(g,null,{default:i(()=>[l(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(A,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[l("Name")]),_:1}),t(c,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.events,_=>(z(),H(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[l(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[l(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const pE=ye(cE,[["render",mE]]),fE=R({name:"TabDoc",components:{DocPageHeader:qe,DocExample:Re,PropertyListTable:gn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function gE(e,a,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-tab-panel"),r=b("sui-tab"),f=b("doc-example"),c=b("property-list-table"),h=b("sui-table-header-cell"),v=b("sui-table-row"),g=b("sui-table-header"),y=b("sui-table-cell"),A=b("sui-table-body"),B=b("sui-table"),_=b("sui-container");return z(),pe("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[l("Examples")]),_:1}),t(f,{title:"Basic",code:e.basicCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(r,{pointing:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(r,{secondary:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",code:e.textCode},{default:i(()=>[t(r,{text:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[l("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[l("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[l("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Properties")]),_:1}),t(p,{as:"h3"},{default:i(()=>[l("Tab")]),_:1}),t(c,{properties:e.tabProperties},null,8,["properties"]),t(p,{as:"h3"},{default:i(()=>[l("TabPanel")]),_:1}),t(c,{properties:e.tabPanelProperties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[l("Events")]),_:1}),t(B,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[l("Name")]),_:1}),t(h,null,{default:i(()=>[l("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(z(!0),pe(Se,null,Ze(e.events,w=>(z(),H(v,{key:w.name},{default:i(()=>[t(y,null,{default:i(()=>[l(Be(w.name),1)]),_:2},1024),t(y,null,{default:i(()=>[l(Be(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const hE=ye(fE,[["render",gE]]),_E=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,bE={__name:"MinimalDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"I am a toast, nice to meet you !"})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Minimal",code:_E},{description:i(()=>[l(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},vE=`<template>
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
<\/script>`,yE={__name:"TitledDoc",setup(e){const{toast:a}=it(),n=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Titled",code:vE},{description:i(()=>[l(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},CE=`<template>
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
<\/script>`,wE={__name:"ProgressBarDoc",setup(e){const{toast:a}=it(),n=s=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:s})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Progress Bar",code:CE},{description:i(()=>[l(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1}),t(d,{color:"red",onClick:u[0]||(u[0]=m=>n("red"))},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},SE=`<template>
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
<\/script>`,AE={__name:"ToastTypeDoc",setup(e){const{toast:a}=it(),n=s=>{a({message:"You're using the good framework !",type:s})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Toast Type",code:SE},{description:i(()=>[l(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n("success")),positive:""},{default:i(()=>[l("Success")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n("error")),negative:""},{default:i(()=>[l("Error")]),_:1}),t(d,{onClick:u[2]||(u[2]=m=>n("warning")),color:"yellow"},{default:i(()=>[l("Warning")]),_:1})]),_:1})}}},kE=`<template>
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
<\/script>`,$E={__name:"PositionDoc",setup(e){const{toast:a}=it(),n=s=>{a({position:s,message:"Look, I'm here !"})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Position",code:kE},{description:i(()=>[l(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n("top left"))},{default:i(()=>[l("Top Left")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n("bottom right"))},{default:i(()=>[l("Bottom Right")]),_:1})]),_:1})}}},BE=C("br",null,null,-1),xE=`<template>
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
<\/script>`,TE={__name:"AttachedPosition",setup(e){const{toast:a}=it(),n=s=>{a({attached:s,title:"Watch out!",message:`I am a ${s} attached toast`})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Attached Position",code:xE},{description:i(()=>[l(" A toast can have an attached position which will show the toast over the whole width of the screen."),BE,l(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n("top"))},{default:i(()=>[l("Top")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n("bottom"))},{default:i(()=>[l("Bottom")]),_:1})]),_:1})}}},EE=`<template>
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
<\/script>`,RE={__name:"DirectionDoc",setup(e){const{toast:a}=it(),n=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Direction",code:EE},{description:i(()=>[l(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},zE=`<template>
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
<\/script>`,DE={__name:"CenterAligned",setup(e){const{toast:a}=it(),n=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Center Aligned",code:zE},{description:i(()=>[l(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},PE=`<template>
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
<\/script>`,ME={__name:"DurationDoc",setup(e){const{toast:a}=it(),n=s=>{a({displayTime:s,message:s===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Duration",code:PE},{description:i(()=>[l(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n(5e3))},{default:i(()=>[l("5 seconds")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n(0))},{default:i(()=>[l("Stay")]),_:1})]),_:1})}}},IE=`<template>
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
<\/script>`,FE={__name:"MessageStyleDoc",setup(e){const{toast:a}=it(),n=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Use Message Style",code:IE},{description:i(()=>[l(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},VE=`<template>
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
<\/script>`,NE={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=it(),n=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(s,u)=>{const d=b("SuiButton");return z(),H(ee,{label:"Increasing Progress Bar",code:VE},{description:i(()=>[l(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},HE=`<template>
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
<\/script>`,LE={__name:"ColorVariantsDoc",setup(e){const{toast:a}=it(),n=j(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],u=()=>{a({color:s[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,m)=>{const p=b("SuiButton");return z(),H(ee,{label:"Color Variants",code:HE},{description:i(()=>[l(" You can use all of the usual color names. ")]),example:i(()=>[t(p,{onClick:u},{default:i(()=>[l("Show")]),_:1})]),_:1})}}},OE={__name:"InvertedColorsDoc",setup(e){const{toast:a}=it(),n=j(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],u=()=>{a({color:s[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,m)=>{const p=b("SuiButton");return z(),H(ee,{label:"Inverted Colors",code:d.code},{description:i(()=>[l(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(p,{onClick:u},{default:i(()=>[l("Show")]),_:1})]),_:1},8,["code"])}}},jE=`<template>
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
<\/script>`,qE={__name:"ActionGeneralDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>[G(Ke,{name:"check"}),"Yes"]),G(M,{color:"red",icon:!0},()=>[G(Ke,{name:"ban"})]),G(M,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(s,u)=>(z(),H(ee,{label:"General",code:jE},{description:i(()=>[l(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(S(M),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},UE=`<template>
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
<\/script>`,GE={__name:"ActionBasicDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(s,u)=>(z(),H(ee,{label:"Basic",code:UE},{description:i(()=>[l(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(S(M),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},YE=`<template>
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
<\/script>`,JE={__name:"ActionAttachedDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),G(M,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(s,u)=>(z(),H(ee,{label:"Attached",code:YE},{description:i(()=>[l(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(S(M),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},WE=`<template>
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
<\/script>`,KE={__name:"ActionVerticalDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),G(M,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(s,u)=>(z(),H(ee,{label:"Vertical",code:WE},{description:i(()=>[l(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(S(M),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},XE=C("br",null,null,-1),QE=`<template>
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
<\/script>`,ZE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=it(),n=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),G(M,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(s,u)=>(z(),H(ee,{label:"Vertical Attached",code:QE},{description:i(()=>[l(" Vertical actions can also be displayed as button groups using vertical attached."),XE,l(" Vertical attached actions also support left. ")]),example:i(()=>[t(S(M),{onClick:n},{default:i(()=>[l("Show")]),_:1})]),_:1}))}},eR={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:bE},{id:"titled",label:"Titled",category:"Types",component:yE},{id:"progress-bar",label:"Progress Bar",category:"Types",component:wE},{id:"toast-type",label:"Toast Type",category:"Variations",component:AE},{id:"position",label:"Position",category:"Variations",component:$E},{id:"attached-position",label:"Attached Position",category:"Variations",component:TE},{id:"direction",label:"Direction",category:"Variations",component:RE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:DE},{id:"duration",label:"Duration",category:"Variations",component:ME},{id:"message-style",label:"Use Message Style",category:"Variations",component:FE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:NE},{id:"color-variants",label:"Color Variants",category:"Variations",component:LE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:OE},{id:"general",label:"General",category:"Actions",component:qE},{id:"action-basic",label:"Basic",category:"Actions",component:GE},{id:"action-attached",label:"Attached",category:"Actions",component:JE},{id:"action-vertical",label:"Vertical",category:"Actions",component:KE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:ZE}];return(n,s)=>(z(),H(Hi,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},tR=[{path:"/",component:K_,children:[{path:"/",component:mb},{path:"elements/button",component:Tw},{path:"elements/container",component:Lw},{path:"elements/divider",component:mS},{path:"elements/emoji",component:SS},{path:"elements/flag",component:xS},{path:"elements/header",component:sA},{path:"elements/icon",component:vA},{path:"elements/image",component:DA},{path:"elements/input",component:FA},{path:"elements/label",component:QA},{path:"elements/list",component:_0},{path:"elements/loader",component:C0},{path:"elements/rail",component:k0},{path:"elements/reveal",component:E0},{path:"elements/segment",component:tk},{path:"elements/step",component:ok},{path:"collections/breadcrumb",component:dk},{path:"collections/form",component:pk},{path:"collections/grid",component:_k},{path:"collections/menu",component:kk},{path:"collections/message",component:Fk},{path:"collections/table",component:Kk},{path:"views/advertisement",component:t$},{path:"views/card",component:I$},{path:"views/comment",component:MB},{path:"views/feed",component:ax},{path:"views/item",component:Gx},{path:"views/statistic",component:tT},{path:"modules/accordion",component:AT},{path:"modules/calendar",component:BT},{path:"modules/checkbox",component:FT},{path:"modules/dimmer",component:HT},{path:"modules/dropdown",component:jT},{path:"modules/embed",component:GT},{path:"modules/modal",component:ZT},{path:"modules/popup",component:s2},{path:"modules/progress",component:u2},{path:"modules/rating",component:sE},{path:"modules/sidebar",component:dE},{path:"modules/slider",component:pE},{path:"modules/tab",component:hE},{path:"modules/toast",component:eR}]}],iR=T_({history:qh("/vue-fomantic-ui/"),routes:tR});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var u=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=s.variable[1].inside,m=0;m<u.length;m++)d[u[m]]=e.languages.bash[u[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const ho=_m($h);ho.use(iR);ho.use(lC);ho.mount("#app");

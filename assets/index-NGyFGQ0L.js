(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=n(u);fetch(u.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ja(e,l){const n=new Set(e.split(","));return l?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Fe={},Ui=[],mt=()=>{},up=()=>!1,Wl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xs=e=>e.startsWith("onUpdate:"),Ge=Object.assign,Es=(e,l)=>{const n=e.indexOf(l);n>-1&&e.splice(n,1)},dp=Object.prototype.hasOwnProperty,Re=(e,l)=>dp.call(e,l),ce=Array.isArray,Gi=e=>dl(e)==="[object Map]",Pi=e=>dl(e)==="[object Set]",vo=e=>dl(e)==="[object Date]",cp=e=>dl(e)==="[object RegExp]",ve=e=>typeof e=="function",Ye=e=>typeof e=="string",pi=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Rs=e=>(Ne(e)||ve(e))&&ve(e.then)&&ve(e.catch),Td=Object.prototype.toString,dl=e=>Td.call(e),mp=e=>dl(e).slice(8,-1),xd=e=>dl(e)==="[object Object]",zs=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tl=ja(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=e=>{const l=Object.create(null);return n=>l[n]||(l[n]=e(n))},pp=/-(\w)/g,dt=qa(e=>e.replace(pp,(l,n)=>n?n.toUpperCase():"")),fp=/\B([A-Z])/g,yt=qa(e=>e.replace(fp,"-$1").toLowerCase()),Kl=qa(e=>e.charAt(0).toUpperCase()+e.slice(1)),xl=qa(e=>e?`on${Kl(e)}`:""),Pt=(e,l)=>!Object.is(e,l),Yi=(e,l)=>{for(let n=0;n<e.length;n++)e[n](l)},Ca=(e,l,n)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:n})},Fl=e=>{const l=parseFloat(e);return isNaN(l)?e:l},wa=e=>{const l=Ye(e)?Number(e):NaN;return isNaN(l)?e:l};let yo;const Ed=()=>yo||(yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",hp=ja(gp);function cl(e){if(ce(e)){const l={};for(let n=0;n<e.length;n++){const s=e[n],u=Ye(s)?yp(s):cl(s);if(u)for(const d in u)l[d]=u[d]}return l}else if(Ye(e)||Ne(e))return e}const _p=/;(?![^(]*\))/g,bp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function yp(e){const l={};return e.replace(vp,"").split(_p).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(l[s[0].trim()]=s[1].trim())}}),l}function Xl(e){let l="";if(Ye(e))l=e;else if(ce(e))for(let n=0;n<e.length;n++){const s=Xl(e[n]);s&&(l+=s+" ")}else if(Ne(e))for(const n in e)e[n]&&(l+=n+" ");return l.trim()}function Cp(e){if(!e)return null;let{class:l,style:n}=e;return l&&!Ye(l)&&(e.class=Xl(l)),n&&(e.style=cl(n)),e}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sp=ja(wp);function Rd(e){return!!e||e===""}function Ap(e,l){if(e.length!==l.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Wt(e[s],l[s]);return n}function Wt(e,l){if(e===l)return!0;let n=vo(e),s=vo(l);if(n||s)return n&&s?e.getTime()===l.getTime():!1;if(n=pi(e),s=pi(l),n||s)return e===l;if(n=ce(e),s=ce(l),n||s)return n&&s?Ap(e,l):!1;if(n=Ne(e),s=Ne(l),n||s){if(!n||!s)return!1;const u=Object.keys(e).length,d=Object.keys(l).length;if(u!==d)return!1;for(const m in e){const p=e.hasOwnProperty(m),o=l.hasOwnProperty(m);if(p&&!o||!p&&o||!Wt(e[m],l[m]))return!1}}return String(e)===String(l)}function Ua(e,l){return e.findIndex(n=>Wt(n,l))}const Be=e=>Ye(e)?e:e==null?"":ce(e)||Ne(e)&&(e.toString===Td||!ve(e.toString))?JSON.stringify(e,zd,2):String(e),zd=(e,l)=>l&&l.__v_isRef?zd(e,l.value):Gi(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[s,u],d)=>(n[gn(s,d)+" =>"]=u,n),{})}:Pi(l)?{[`Set(${l.size})`]:[...l.values()].map(n=>gn(n))}:pi(l)?gn(l):Ne(l)&&!ce(l)&&!xd(l)?String(l):l,gn=(e,l="")=>{var n;return pi(e)?`Symbol(${(n=e.description)!=null?n:l})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Ds{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!l&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const n=_t;try{return _t=this,l()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(l){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const u=this.parent.scopes.pop();u&&u!==this&&(this.parent.scopes[this.index]=u,u.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(e){return new Ds(e)}function Dd(e,l=_t){l&&l.active&&l.effects.push(e)}function Ps(){return _t}function Pd(e){_t&&_t.cleanups.push(e)}let Ai;class il{constructor(l,n,s,u){this.fn=l,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Dd(this,u)}get dirty(){if(this._dirtyLevel===1){Mi();for(let l=0;l<this._depsLength;l++){const n=this.deps[l];if(n.computed&&(Bp(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ii()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=di,n=Ai;try{return di=!0,Ai=this,this._runnings++,Co(this),this.fn()}finally{wo(this),this._runnings--,Ai=n,di=l}}stop(){var l;this.active&&(Co(this),wo(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function Bp(e){return e.value}function Co(e){e._trackId++,e._depsLength=0}function wo(e){if(e.deps&&e.deps.length>e._depsLength){for(let l=e._depsLength;l<e.deps.length;l++)Md(e.deps[l],e);e.deps.length=e._depsLength}}function Md(e,l){const n=e.get(l);n!==void 0&&l._trackId!==n&&(e.delete(l),e.size===0&&e.cleanup())}function $p(e,l){e.effect instanceof il&&(e=e.effect.fn);const n=new il(e,mt,()=>{n.dirty&&n.run()});l&&(Ge(n,l),l.scope&&Dd(n,l.scope)),(!l||!l.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function Tp(e){e.effect.stop()}let di=!0,Ln=0;const Id=[];function Mi(){Id.push(di),di=!1}function Ii(){const e=Id.pop();di=e===void 0?!0:e}function Ms(){Ln++}function Is(){for(Ln--;!Ln&&On.length;)On.shift()()}function Fd(e,l,n){if(l.get(e)!==e._trackId){l.set(e,e._trackId);const s=e.deps[e._depsLength];s!==l?(s&&Md(s,e),e.deps[e._depsLength++]=l):e._depsLength++}}const On=[];function Vd(e,l,n){Ms();for(const s of e.keys())if(s._dirtyLevel<l&&e.get(s)===s._trackId){const u=s._dirtyLevel;s._dirtyLevel=l,u===0&&(s._shouldSchedule=!0,s.trigger())}Nd(e),Is()}function Nd(e){for(const l of e.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&e.get(l)===l._trackId&&(l._shouldSchedule=!1,On.push(l.scheduler))}const Ld=(e,l)=>{const n=new Map;return n.cleanup=e,n.computed=l,n},Sa=new WeakMap,ki=Symbol(""),Hn=Symbol("");function gt(e,l,n){if(di&&Ai){let s=Sa.get(e);s||Sa.set(e,s=new Map);let u=s.get(n);u||s.set(n,u=Ld(()=>s.delete(n))),Fd(Ai,u)}}function Yt(e,l,n,s,u,d){const m=Sa.get(e);if(!m)return;let p=[];if(l==="clear")p=[...m.values()];else if(n==="length"&&ce(e)){const o=Number(s);m.forEach((r,f)=>{(f==="length"||!pi(f)&&f>=o)&&p.push(r)})}else switch(n!==void 0&&p.push(m.get(n)),l){case"add":ce(e)?zs(n)&&p.push(m.get("length")):(p.push(m.get(ki)),Gi(e)&&p.push(m.get(Hn)));break;case"delete":ce(e)||(p.push(m.get(ki)),Gi(e)&&p.push(m.get(Hn)));break;case"set":Gi(e)&&p.push(m.get(ki));break}Ms();for(const o of p)o&&Vd(o,2);Is()}function xp(e,l){var n;return(n=Sa.get(e))==null?void 0:n.get(l)}const Ep=ja("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pi)),So=Rp();function Rp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...n){const s=Ee(this);for(let d=0,m=this.length;d<m;d++)gt(s,"get",d+"");const u=s[l](...n);return u===-1||u===!1?s[l](...n.map(Ee)):u}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...n){Mi(),Ms();const s=Ee(this)[l].apply(this,n);return Is(),Ii(),s}}),e}function zp(e){const l=Ee(this);return gt(l,"has",e),l.hasOwnProperty(e)}class Hd{constructor(l=!1,n=!1){this._isReadonly=l,this._shallow=n}get(l,n,s){const u=this._isReadonly,d=this._shallow;if(n==="__v_isReactive")return!u;if(n==="__v_isReadonly")return u;if(n==="__v_isShallow")return d;if(n==="__v_raw")return s===(u?d?Jd:Yd:d?Gd:Ud).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(s)?l:void 0;const m=ce(l);if(!u){if(m&&Re(So,n))return Reflect.get(So,n,s);if(n==="hasOwnProperty")return zp}const p=Reflect.get(l,n,s);return(pi(n)?Od.has(n):Ep(n))||(u||gt(l,"get",n),d)?p:at(p)?m&&zs(n)?p:p.value:Ne(p)?u?Vs(p):Kt(p):p}}class jd extends Hd{constructor(l=!1){super(!1,l)}set(l,n,s,u){let d=l[n];if(!this._shallow){const o=xi(d);if(!Vl(s)&&!xi(s)&&(d=Ee(d),s=Ee(s)),!ce(l)&&at(d)&&!at(s))return o?!1:(d.value=s,!0)}const m=ce(l)&&zs(n)?Number(n)<l.length:Re(l,n),p=Reflect.set(l,n,s,u);return l===Ee(u)&&(m?Pt(s,d)&&Yt(l,"set",n,s):Yt(l,"add",n,s)),p}deleteProperty(l,n){const s=Re(l,n);l[n];const u=Reflect.deleteProperty(l,n);return u&&s&&Yt(l,"delete",n,void 0),u}has(l,n){const s=Reflect.has(l,n);return(!pi(n)||!Od.has(n))&&gt(l,"has",n),s}ownKeys(l){return gt(l,"iterate",ce(l)?"length":ki),Reflect.ownKeys(l)}}class qd extends Hd{constructor(l=!1){super(!0,l)}set(l,n){return!0}deleteProperty(l,n){return!0}}const Dp=new jd,Pp=new qd,Mp=new jd(!0),Ip=new qd(!0),Fs=e=>e,Ga=e=>Reflect.getPrototypeOf(e);function ia(e,l,n=!1,s=!1){e=e.__v_raw;const u=Ee(e),d=Ee(l);n||(Pt(l,d)&&gt(u,"get",l),gt(u,"get",d));const{has:m}=Ga(u),p=s?Fs:n?Os:Nl;if(m.call(u,l))return p(e.get(l));if(m.call(u,d))return p(e.get(d));e!==u&&e.get(l)}function la(e,l=!1){const n=this.__v_raw,s=Ee(n),u=Ee(e);return l||(Pt(e,u)&&gt(s,"has",e),gt(s,"has",u)),e===u?n.has(e):n.has(e)||n.has(u)}function aa(e,l=!1){return e=e.__v_raw,!l&&gt(Ee(e),"iterate",ki),Reflect.get(e,"size",e)}function Ao(e){e=Ee(e);const l=Ee(this);return Ga(l).has.call(l,e)||(l.add(e),Yt(l,"add",e,e)),this}function ko(e,l){l=Ee(l);const n=Ee(this),{has:s,get:u}=Ga(n);let d=s.call(n,e);d||(e=Ee(e),d=s.call(n,e));const m=u.call(n,e);return n.set(e,l),d?Pt(l,m)&&Yt(n,"set",e,l):Yt(n,"add",e,l),this}function Bo(e){const l=Ee(this),{has:n,get:s}=Ga(l);let u=n.call(l,e);u||(e=Ee(e),u=n.call(l,e)),s&&s.call(l,e);const d=l.delete(e);return u&&Yt(l,"delete",e,void 0),d}function $o(){const e=Ee(this),l=e.size!==0,n=e.clear();return l&&Yt(e,"clear",void 0,void 0),n}function na(e,l){return function(s,u){const d=this,m=d.__v_raw,p=Ee(m),o=l?Fs:e?Os:Nl;return!e&&gt(p,"iterate",ki),m.forEach((r,f)=>s.call(u,o(r),o(f),d))}}function sa(e,l,n){return function(...s){const u=this.__v_raw,d=Ee(u),m=Gi(d),p=e==="entries"||e===Symbol.iterator&&m,o=e==="keys"&&m,r=u[e](...s),f=n?Fs:l?Os:Nl;return!l&&gt(d,"iterate",o?Hn:ki),{next(){const{value:c,done:h}=r.next();return h?{value:c,done:h}:{value:p?[f(c[0]),f(c[1])]:f(c),done:h}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...l){return e==="delete"?!1:e==="clear"?void 0:this}}function Fp(){const e={get(d){return ia(this,d)},get size(){return aa(this)},has:la,add:Ao,set:ko,delete:Bo,clear:$o,forEach:na(!1,!1)},l={get(d){return ia(this,d,!1,!0)},get size(){return aa(this)},has:la,add:Ao,set:ko,delete:Bo,clear:$o,forEach:na(!1,!0)},n={get(d){return ia(this,d,!0)},get size(){return aa(this,!0)},has(d){return la.call(this,d,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:na(!0,!1)},s={get(d){return ia(this,d,!0,!0)},get size(){return aa(this,!0)},has(d){return la.call(this,d,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:na(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=sa(d,!1,!1),n[d]=sa(d,!0,!1),l[d]=sa(d,!1,!0),s[d]=sa(d,!0,!0)}),[e,n,l,s]}const[Vp,Np,Lp,Op]=Fp();function Ya(e,l){const n=l?e?Op:Lp:e?Np:Vp;return(s,u,d)=>u==="__v_isReactive"?!e:u==="__v_isReadonly"?e:u==="__v_raw"?s:Reflect.get(Re(n,u)&&u in s?n:s,u,d)}const Hp={get:Ya(!1,!1)},jp={get:Ya(!1,!0)},qp={get:Ya(!0,!1)},Up={get:Ya(!0,!0)},Ud=new WeakMap,Gd=new WeakMap,Yd=new WeakMap,Jd=new WeakMap;function Gp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Gp(mp(e))}function Kt(e){return xi(e)?e:Ja(e,!1,Dp,Hp,Ud)}function Wd(e){return Ja(e,!1,Mp,jp,Gd)}function Vs(e){return Ja(e,!0,Pp,qp,Yd)}function Jp(e){return Ja(e,!0,Ip,Up,Jd)}function Ja(e,l,n,s,u){if(!Ne(e)||e.__v_raw&&!(l&&e.__v_isReactive))return e;const d=u.get(e);if(d)return d;const m=Yp(e);if(m===0)return e;const p=new Proxy(e,m===2?s:n);return u.set(e,p),p}function Bi(e){return xi(e)?Bi(e.__v_raw):!!(e&&e.__v_isReactive)}function xi(e){return!!(e&&e.__v_isReadonly)}function Vl(e){return!!(e&&e.__v_isShallow)}function Ns(e){return Bi(e)||xi(e)}function Ee(e){const l=e&&e.__v_raw;return l?Ee(l):e}function Ls(e){return Ca(e,"__v_skip",!0),e}const Nl=e=>Ne(e)?Kt(e):e,Os=e=>Ne(e)?Vs(e):e;class Kd{constructor(l,n,s,u){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new il(()=>l(this._value),()=>Ji(this,1),()=>this.dep&&Nd(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!u,this.__v_isReadonly=s}get value(){const l=Ee(this);return(!l._cacheable||l.effect.dirty)&&Pt(l._value,l._value=l.effect.run())&&Ji(l,2),Hs(l),l.effect._dirtyLevel>=1&&Ji(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function Wp(e,l,n=!1){let s,u;const d=ve(e);return d?(s=e,u=mt):(s=e.get,u=e.set),new Kd(s,u,d||!u,n)}function Hs(e){di&&Ai&&(e=Ee(e),Fd(Ai,e.dep||(e.dep=Ld(()=>e.dep=void 0,e instanceof Kd?e:void 0))))}function Ji(e,l=2,n){e=Ee(e);const s=e.dep;s&&Vd(s,l)}function at(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Qd(e,!1)}function Xd(e){return Qd(e,!0)}function Qd(e,l){return at(e)?e:new Kp(e,l)}class Kp{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:Ee(l),this._value=n?l:Nl(l)}get value(){return Hs(this),this._value}set value(l){const n=this.__v_isShallow||Vl(l)||xi(l);l=n?l:Ee(l),Pt(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:Nl(l),Ji(this,2))}}function Xp(e){Ji(e,2)}function $(e){return at(e)?e.value:e}function Qp(e){return ve(e)?e():$(e)}const Zp={get:(e,l,n)=>$(Reflect.get(e,l,n)),set:(e,l,n,s)=>{const u=e[l];return at(u)&&!at(n)?(u.value=n,!0):Reflect.set(e,l,n,s)}};function js(e){return Bi(e)?e:new Proxy(e,Zp)}class ef{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=l(()=>Hs(this),()=>Ji(this));this._get=n,this._set=s}get value(){return this._get()}set value(l){this._set(l)}}function Zd(e){return new ef(e)}function tf(e){const l=ce(e)?new Array(e.length):{};for(const n in e)l[n]=ec(e,n);return l}class lf{constructor(l,n,s){this._object=l,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return xp(Ee(this._object),this._key)}}class af{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function jn(e,l,n){return at(e)?e:ve(e)?new af(e):Ne(e)&&arguments.length>1?ec(e,l,n):H(e)}function ec(e,l,n){const s=e[l];return at(s)?s:new lf(e,l,n)}const nf={GET:"get",HAS:"has",ITERATE:"iterate"},sf={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function of(e,l){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Jt(e,l,n,s){let u;try{u=s?e(...s):e()}catch(d){Fi(d,l,n)}return u}function Ct(e,l,n,s){if(ve(e)){const d=Jt(e,l,n,s);return d&&Rs(d)&&d.catch(m=>{Fi(m,l,n)}),d}const u=[];for(let d=0;d<e.length;d++)u.push(Ct(e[d],l,n,s));return u}function Fi(e,l,n,s=!0){const u=l?l.vnode:null;if(l){let d=l.parent;const m=l.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;d;){const r=d.ec;if(r){for(let f=0;f<r.length;f++)if(r[f](e,m,p)===!1)return}d=d.parent}const o=l.appContext.config.errorHandler;if(o){Jt(o,null,10,[e,m,p]);return}}df(e,n,u,s)}function df(e,l,n,s=!0){console.error(e)}let Ll=!1,qn=!1;const st=[];let Nt=0;const Wi=[];let ai=null,wi=0;const tc=Promise.resolve();let qs=null;function ml(e){const l=qs||tc;return e?l.then(this?e.bind(this):e):l}function cf(e){let l=Nt+1,n=st.length;for(;l<n;){const s=l+n>>>1,u=st[s],d=Ol(u);d<e||d===e&&u.pre?l=s+1:n=s}return l}function Wa(e){(!st.length||!st.includes(e,Ll&&e.allowRecurse?Nt+1:Nt))&&(e.id==null?st.push(e):st.splice(cf(e.id),0,e),ic())}function ic(){!Ll&&!qn&&(qn=!0,qs=tc.then(lc))}function mf(e){const l=st.indexOf(e);l>Nt&&st.splice(l,1)}function Aa(e){ce(e)?Wi.push(...e):(!ai||!ai.includes(e,e.allowRecurse?wi+1:wi))&&Wi.push(e),ic()}function To(e,l,n=Ll?Nt+1:0){for(;n<st.length;n++){const s=st[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;st.splice(n,1),n--,s()}}}function ka(e){if(Wi.length){const l=[...new Set(Wi)].sort((n,s)=>Ol(n)-Ol(s));if(Wi.length=0,ai){ai.push(...l);return}for(ai=l,wi=0;wi<ai.length;wi++)ai[wi]();ai=null,wi=0}}const Ol=e=>e.id==null?1/0:e.id,pf=(e,l)=>{const n=Ol(e)-Ol(l);if(n===0){if(e.pre&&!l.pre)return-1;if(l.pre&&!e.pre)return 1}return n};function lc(e){qn=!1,Ll=!0,st.sort(pf);try{for(Nt=0;Nt<st.length;Nt++){const l=st[Nt];l&&l.active!==!1&&Jt(l,null,14)}}finally{Nt=0,st.length=0,ka(),Ll=!1,qs=null,(st.length||Wi.length)&&lc()}}let Hi,oa=[];function ac(e,l){var n,s;Hi=e,Hi?(Hi.enabled=!0,oa.forEach(({event:u,args:d})=>Hi.emit(u,...d)),oa=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{ac(d,l)}),setTimeout(()=>{Hi||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oa=[])},3e3)):oa=[]}function ff(e,l,...n){if(e.isUnmounted)return;const s=e.vnode.props||Fe;let u=n;const d=l.startsWith("update:"),m=d&&l.slice(7);if(m&&m in s){const f=`${m==="modelValue"?"model":m}Modifiers`,{number:c,trim:h}=s[f]||Fe;h&&(u=n.map(v=>Ye(v)?v.trim():v)),c&&(u=n.map(Fl))}let p,o=s[p=xl(l)]||s[p=xl(dt(l))];!o&&d&&(o=s[p=xl(yt(l))]),o&&Ct(o,e,6,u);const r=s[p+"Once"];if(r){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,Ct(r,e,6,u)}}function nc(e,l,n=!1){const s=l.emitsCache,u=s.get(e);if(u!==void 0)return u;const d=e.emits;let m={},p=!1;if(!ve(e)){const o=r=>{const f=nc(r,l,!0);f&&(p=!0,Ge(m,f))};!n&&l.mixins.length&&l.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!d&&!p?(Ne(e)&&s.set(e,null),null):(ce(d)?d.forEach(o=>m[o]=null):Ge(m,d),Ne(e)&&s.set(e,m),m)}function Ka(e,l){return!e||!Wl(l)?!1:(l=l.slice(2).replace(/Once$/,""),Re(e,l[0].toLowerCase()+l.slice(1))||Re(e,yt(l))||Re(e,l))}let We=null,Xa=null;function Hl(e){const l=We;return We=e,Xa=e&&e.type.__scopeId||null,l}function sc(e){Xa=e}function oc(){Xa=null}const gf=e=>i;function i(e,l=We,n){if(!l||e._n)return e;const s=(...u)=>{s._d&&Qn(-1);const d=Hl(l);let m;try{m=e(...u)}finally{Hl(d),s._d&&Qn(1)}return m};return s._n=!0,s._c=!0,s._d=!0,s}function ba(e){const{type:l,vnode:n,proxy:s,withProxy:u,props:d,propsOptions:[m],slots:p,attrs:o,emit:r,render:f,renderCache:c,data:h,setupState:v,ctx:g,inheritAttrs:y}=e;let S,B;const _=Hl(e);try{if(n.shapeFlag&4){const k=u||s,T=k;S=bt(f.call(T,k,c,d,v,h,g)),B=o}else{const k=l;S=bt(k.length>1?k(d,{attrs:o,slots:p,emit:r}):k(d,null)),B=l.props?o:_f(o)}}catch(k){zl.length=0,Fi(k,e,1),S=t(rt)}let w=S;if(B&&y!==!1){const k=Object.keys(B),{shapeFlag:T}=w;k.length&&T&7&&(m&&k.some(xs)&&(B=bf(B,m)),w=Lt(w,B))}return n.dirs&&(w=Lt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),S=w,Hl(_),S}function hf(e,l=!0){let n;for(let s=0;s<e.length;s++){const u=e[s];if(xt(u)){if(u.type!==rt||u.children==="v-if"){if(n)return;n=u}}else return}return n}const _f=e=>{let l;for(const n in e)(n==="class"||n==="style"||Wl(n))&&((l||(l={}))[n]=e[n]);return l},bf=(e,l)=>{const n={};for(const s in e)(!xs(s)||!(s.slice(9)in l))&&(n[s]=e[s]);return n};function vf(e,l,n){const{props:s,children:u,component:d}=e,{props:m,children:p,patchFlag:o}=l,r=d.emitsOptions;if(l.dirs||l.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?xo(s,m,r):!!m;if(o&8){const f=l.dynamicProps;for(let c=0;c<f.length;c++){const h=f[c];if(m[h]!==s[h]&&!Ka(r,h))return!0}}}else return(u||p)&&(!p||!p.$stable)?!0:s===m?!1:s?m?xo(s,m,r):!0:!!m;return!1}function xo(e,l,n){const s=Object.keys(l);if(s.length!==Object.keys(e).length)return!0;for(let u=0;u<s.length;u++){const d=s[u];if(l[d]!==e[d]&&!Ka(n,d))return!0}return!1}function Us({vnode:e,parent:l},n){for(;l;){const s=l.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=l.vnode).el=n,l=l.parent;else break}}const Gs="components",yf="directives";function b(e,l){return Ys(Gs,e,!0,l)||e}const rc=Symbol.for("v-ndc");function uc(e){return Ye(e)?Ys(Gs,e,!1)||e:e||rc}function Qa(e){return Ys(yf,e)}function Ys(e,l,n=!0,s=!1){const u=We||Ke;if(u){const d=u.type;if(e===Gs){const p=ls(d,!1);if(p&&(p===l||p===dt(l)||p===Kl(dt(l))))return d}const m=Eo(u[e]||d[e],l)||Eo(u.appContext[e],l);return!m&&s?d:m}}function Eo(e,l){return e&&(e[l]||e[dt(l)]||e[Kl(dt(l))])}const dc=e=>e.__isSuspense;let Un=0;const Cf={name:"Suspense",__isSuspense:!0,process(e,l,n,s,u,d,m,p,o,r){if(e==null)Sf(l,n,s,u,d,m,p,o,r);else{if(d&&d.deps>0){l.suspense=e.suspense;return}Af(e,l,n,s,u,m,p,o,r)}},hydrate:kf,create:Js,normalize:Bf},wf=Cf;function jl(e,l){const n=e.props&&e.props[l];ve(n)&&n()}function Sf(e,l,n,s,u,d,m,p,o){const{p:r,o:{createElement:f}}=o,c=f("div"),h=e.suspense=Js(e,u,s,l,c,n,d,m,p,o);r(null,h.pendingBranch=e.ssContent,c,null,s,h,d,m),h.deps>0?(jl(e,"onPending"),jl(e,"onFallback"),r(null,e.ssFallback,l,n,s,null,d,m),Ki(h,e.ssFallback)):h.resolve(!1,!0)}function Af(e,l,n,s,u,d,m,p,{p:o,um:r,o:{createElement:f}}){const c=l.suspense=e.suspense;c.vnode=l,l.el=e.el;const h=l.ssContent,v=l.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:S,isHydrating:B}=c;if(y)c.pendingBranch=h,zt(h,y)?(o(y,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0?c.resolve():S&&(B||(o(g,v,n,s,u,null,d,m,p),Ki(c,v)))):(c.pendingId=Un++,B?(c.isHydrating=!1,c.activeBranch=y):r(y,u,c),c.deps=0,c.effects.length=0,c.hiddenContainer=f("div"),S?(o(null,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0?c.resolve():(o(g,v,n,s,u,null,d,m,p),Ki(c,v))):g&&zt(h,g)?(o(g,h,n,s,u,c,d,m,p),c.resolve(!0)):(o(null,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0&&c.resolve()));else if(g&&zt(h,g))o(g,h,n,s,u,c,d,m,p),Ki(c,h);else if(jl(l,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=Un++,o(null,h,c.hiddenContainer,null,u,c,d,m,p),c.deps<=0)c.resolve();else{const{timeout:_,pendingId:w}=c;_>0?setTimeout(()=>{c.pendingId===w&&c.fallback(v)},_):_===0&&c.fallback(v)}}function Js(e,l,n,s,u,d,m,p,o,r,f=!1){const{p:c,m:h,um:v,n:g,o:{parentNode:y,remove:S}}=r;let B;const _=$f(e);_&&l!=null&&l.pendingBranch&&(B=l.pendingId,l.deps++);const w=e.props?wa(e.props.timeout):void 0,k=d,T={vnode:e,parent:l,parentComponent:n,namespace:m,container:s,hiddenContainer:u,deps:0,pendingId:Un++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(E=!1,I=!1){const{vnode:F,activeBranch:D,pendingBranch:L,pendingId:J,effects:q,parentComponent:de,container:ke}=T;let O=!1;T.isHydrating?T.isHydrating=!1:E||(O=D&&L.transition&&L.transition.mode==="out-in",O&&(D.transition.afterLeave=()=>{J===T.pendingId&&(h(L,ke,d===k?g(D):d,0),Aa(q))}),D&&(y(D.el)!==T.hiddenContainer&&(d=g(D)),v(D,de,T,!0)),O||h(L,ke,d,0)),Ki(T,L),T.pendingBranch=null,T.isInFallback=!1;let Y=T.parent,re=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...q),re=!0;break}Y=Y.parent}!re&&!O&&Aa(q),T.effects=[],_&&l&&l.pendingBranch&&B===l.pendingId&&(l.deps--,l.deps===0&&!I&&l.resolve()),jl(F,"onResolve")},fallback(E){if(!T.pendingBranch)return;const{vnode:I,activeBranch:F,parentComponent:D,container:L,namespace:J}=T;jl(I,"onFallback");const q=g(F),de=()=>{T.isInFallback&&(c(null,E,L,q,D,null,J,p,o),Ki(T,E))},ke=E.transition&&E.transition.mode==="out-in";ke&&(F.transition.afterLeave=de),T.isInFallback=!0,v(F,D,null,!0),ke||de()},move(E,I,F){T.activeBranch&&h(T.activeBranch,E,I,F),T.container=E},next(){return T.activeBranch&&g(T.activeBranch)},registerDep(E,I){const F=!!T.pendingBranch;F&&T.deps++;const D=E.vnode.el;E.asyncDep.catch(L=>{Fi(L,E,0)}).then(L=>{if(E.isUnmounted||T.isUnmounted||T.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:J}=E;ts(E,L,!1),D&&(J.el=D);const q=!D&&E.subTree.el;I(E,J,y(D||E.subTree.el),D?null:g(E.subTree),T,m,o),q&&S(q),Us(E,J.el),F&&--T.deps===0&&T.resolve()})},unmount(E,I){T.isUnmounted=!0,T.activeBranch&&v(T.activeBranch,n,E,I),T.pendingBranch&&v(T.pendingBranch,n,E,I)}};return T}function kf(e,l,n,s,u,d,m,p,o){const r=l.suspense=Js(l,s,n,e.parentNode,document.createElement("div"),null,u,d,m,p,!0),f=o(e,r.pendingBranch=l.ssContent,n,r,d,m);return r.deps===0&&r.resolve(!1,!0),f}function Bf(e){const{shapeFlag:l,children:n}=e,s=l&32;e.ssContent=Ro(s?n.default:n),e.ssFallback=s?Ro(n.fallback):t(rt)}function Ro(e){let l;if(ve(e)){const n=zi&&e._c;n&&(e._d=!1,P()),e=e(),n&&(e._d=!0,l=pt,Oc())}return ce(e)&&(e=hf(e)),e=bt(e),l&&!e.dynamicChildren&&(e.dynamicChildren=l.filter(n=>n!==e)),e}function cc(e,l){l&&l.pendingBranch?ce(e)?l.effects.push(...e):l.effects.push(e):Aa(e)}function Ki(e,l){e.activeBranch=l;const{vnode:n,parentComponent:s}=e;let u=l.el;for(;!u&&l.component;)l=l.component.subTree,u=l.el;n.el=u,s&&s.subTree===n&&(s.vnode.el=u,Us(s,u))}function $f(e){var l;return((l=e.props)==null?void 0:l.suspensible)!=null&&e.props.suspensible!==!1}const mc=Symbol.for("v-scx"),pc=()=>Pe(mc);function Ws(e,l){return Ql(e,null,l)}function fc(e,l){return Ql(e,null,{flush:"post"})}function gc(e,l){return Ql(e,null,{flush:"sync"})}const ra={};function ot(e,l,n){return Ql(e,l,n)}function Ql(e,l,{immediate:n,deep:s,flush:u,once:d,onTrack:m,onTrigger:p}=Fe){if(l&&d){const E=l;l=(...I)=>{E(...I),T()}}const o=Ke,r=E=>s===!0?E:Si(E,s===!1?1:void 0);let f,c=!1,h=!1;if(at(e)?(f=()=>e.value,c=Vl(e)):Bi(e)?(f=()=>r(e),c=!0):ce(e)?(h=!0,c=e.some(E=>Bi(E)||Vl(E)),f=()=>e.map(E=>{if(at(E))return E.value;if(Bi(E))return r(E);if(ve(E))return Jt(E,o,2)})):ve(e)?l?f=()=>Jt(e,o,2):f=()=>(v&&v(),Ct(e,o,3,[g])):f=mt,l&&s){const E=f;f=()=>Si(E())}let v,g=E=>{v=w.onStop=()=>{Jt(E,o,4),v=w.onStop=void 0}},y;if(ta)if(g=mt,l?n&&Ct(l,o,3,[f(),h?[]:void 0,g]):f(),u==="sync"){const E=pc();y=E.__watcherHandles||(E.__watcherHandles=[])}else return mt;let S=h?new Array(e.length).fill(ra):ra;const B=()=>{if(!(!w.active||!w.dirty))if(l){const E=w.run();(s||c||(h?E.some((I,F)=>Pt(I,S[F])):Pt(E,S)))&&(v&&v(),Ct(l,o,3,[E,S===ra?void 0:h&&S[0]===ra?[]:S,g]),S=E)}else w.run()};B.allowRecurse=!!l;let _;u==="sync"?_=B:u==="post"?_=()=>it(B,o&&o.suspense):(B.pre=!0,o&&(B.id=o.uid),_=()=>Wa(B));const w=new il(f,mt,_),k=Ps(),T=()=>{w.stop(),k&&Es(k.effects,w)};return l?n?B():S=w.run():u==="post"?it(w.run.bind(w),o&&o.suspense):w.run(),y&&y.push(T),T}function Tf(e,l,n){const s=this.proxy,u=Ye(e)?e.includes(".")?hc(s,e):()=>s[e]:e.bind(s,s);let d;ve(l)?d=l:(d=l.handler,n=l);const m=Di(this),p=Ql(u,d.bind(s),n);return m(),p}function hc(e,l){const n=l.split(".");return()=>{let s=e;for(let u=0;u<n.length&&s;u++)s=s[n[u]];return s}}function Si(e,l,n=0,s){if(!Ne(e)||e.__v_skip)return e;if(l&&l>0){if(n>=l)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),at(e))Si(e.value,l,n,s);else if(ce(e))for(let u=0;u<e.length;u++)Si(e[u],l,n,s);else if(Pi(e)||Gi(e))e.forEach(u=>{Si(u,l,n,s)});else if(xd(e))for(const u in e)Si(e[u],l,n,s);return e}function Zl(e,l){if(We===null)return e;const n=sn(We)||We.proxy,s=e.dirs||(e.dirs=[]);for(let u=0;u<l.length;u++){let[d,m,p,o=Fe]=l[u];d&&(ve(d)&&(d={mounted:d,updated:d}),d.deep&&Si(m),s.push({dir:d,instance:n,value:m,oldValue:void 0,arg:p,modifiers:o}))}return e}function Vt(e,l,n,s){const u=e.dirs,d=l&&l.dirs;for(let m=0;m<u.length;m++){const p=u[m];d&&(p.oldValue=d[m].value);let o=p.dir[s];o&&(Mi(),Ct(o,n,8,[e.el,p,e,l]),Ii())}}const ni=Symbol("_leaveCb"),ua=Symbol("_enterCb");function Ks(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gi(()=>{e.isMounted=!0}),ln(()=>{e.isUnmounting=!0}),e}const kt=[Function,Array],Xs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},xf={name:"BaseTransition",props:Xs,setup(e,{slots:l}){const n=Ht(),s=Ks();let u;return()=>{const d=l.default&&Za(l.default(),!0);if(!d||!d.length)return;let m=d[0];if(d.length>1){for(const y of d)if(y.type!==rt){m=y;break}}const p=Ee(e),{mode:o}=p;if(s.isLeaving)return hn(m);const r=zo(m);if(!r)return hn(m);const f=ll(r,p,s,n);Ei(r,f);const c=n.subTree,h=c&&zo(c);let v=!1;const{getTransitionKey:g}=r.type;if(g){const y=g();u===void 0?u=y:y!==u&&(u=y,v=!0)}if(h&&h.type!==rt&&(!zt(r,h)||v)){const y=ll(h,p,s,n);if(Ei(h,y),o==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},hn(m);o==="in-out"&&r.type!==rt&&(y.delayLeave=(S,B,_)=>{const w=bc(s,h);w[String(h.key)]=h,S[ni]=()=>{B(),S[ni]=void 0,delete f.delayedLeave},f.delayedLeave=_})}return m}}},_c=xf;function bc(e,l){const{leavingVNodes:n}=e;let s=n.get(l.type);return s||(s=Object.create(null),n.set(l.type,s)),s}function ll(e,l,n,s){const{appear:u,mode:d,persisted:m=!1,onBeforeEnter:p,onEnter:o,onAfterEnter:r,onEnterCancelled:f,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:g,onBeforeAppear:y,onAppear:S,onAfterAppear:B,onAppearCancelled:_}=l,w=String(e.key),k=bc(n,e),T=(F,D)=>{F&&Ct(F,s,9,D)},E=(F,D)=>{const L=D[1];T(F,D),ce(F)?F.every(J=>J.length<=1)&&L():F.length<=1&&L()},I={mode:d,persisted:m,beforeEnter(F){let D=p;if(!n.isMounted)if(u)D=y||p;else return;F[ni]&&F[ni](!0);const L=k[w];L&&zt(e,L)&&L.el[ni]&&L.el[ni](),T(D,[F])},enter(F){let D=o,L=r,J=f;if(!n.isMounted)if(u)D=S||o,L=B||r,J=_||f;else return;let q=!1;const de=F[ua]=ke=>{q||(q=!0,ke?T(J,[F]):T(L,[F]),I.delayedLeave&&I.delayedLeave(),F[ua]=void 0)};D?E(D,[F,de]):de()},leave(F,D){const L=String(e.key);if(F[ua]&&F[ua](!0),n.isUnmounting)return D();T(c,[F]);let J=!1;const q=F[ni]=de=>{J||(J=!0,D(),de?T(g,[F]):T(v,[F]),F[ni]=void 0,k[L]===e&&delete k[L])};k[L]=e,h?E(h,[F,q]):q()},clone(F){return ll(F,l,n,s)}};return I}function hn(e){if(ea(e))return e=Lt(e),e.children=null,e}function zo(e){return ea(e)?e.children?e.children[0]:void 0:e}function Ei(e,l){e.shapeFlag&6&&e.component?Ei(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function Za(e,l=!1,n){let s=[],u=0;for(let d=0;d<e.length;d++){let m=e[d];const p=n==null?m.key:String(n)+String(m.key!=null?m.key:d);m.type===we?(m.patchFlag&128&&u++,s=s.concat(Za(m.children,l,p))):(l||m.type!==rt)&&s.push(p!=null?Lt(m,{key:p}):m)}if(u>1)for(let d=0;d<s.length;d++)s[d].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function R(e,l){return ve(e)?Ge({name:e.name},l,{setup:e}):e}const $i=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ef(e){ve(e)&&(e={loader:e});const{loader:l,loadingComponent:n,errorComponent:s,delay:u=200,timeout:d,suspensible:m=!0,onError:p}=e;let o=null,r,f=0;const c=()=>(f++,o=null,h()),h=()=>{let v;return o||(v=o=l().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),p)return new Promise((y,S)=>{p(g,()=>y(c()),()=>S(g),f+1)});throw g}).then(g=>v!==o&&o?o:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),r=g,g)))};return R({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return r},setup(){const v=Ke;if(r)return()=>_n(r,v);const g=_=>{o=null,Fi(_,v,13,!s)};if(m&&v.suspense||ta)return h().then(_=>()=>_n(_,v)).catch(_=>(g(_),()=>s?t(s,{error:_}):null));const y=H(!1),S=H(),B=H(!!u);return u&&setTimeout(()=>{B.value=!1},u),d!=null&&setTimeout(()=>{if(!y.value&&!S.value){const _=new Error(`Async component timed out after ${d}ms.`);g(_),S.value=_}},d),h().then(()=>{y.value=!0,v.parent&&ea(v.parent.vnode)&&(v.parent.effect.dirty=!0,Wa(v.parent.update))}).catch(_=>{g(_),S.value=_}),()=>{if(y.value&&r)return _n(r,v);if(S.value&&s)return t(s,{error:S.value});if(n&&!B.value)return t(n)}}})}function _n(e,l){const{ref:n,props:s,children:u,ce:d}=l.vnode,m=t(e,s,u);return m.ref=n,m.ce=d,delete l.vnode.ce,m}const ea=e=>e.type.__isKeepAlive,Rf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const n=Ht(),s=n.ctx;if(!s.renderer)return()=>{const _=l.default&&l.default();return _&&_.length===1?_[0]:_};const u=new Map,d=new Set;let m=null;const p=n.suspense,{renderer:{p:o,m:r,um:f,o:{createElement:c}}}=s,h=c("div");s.activate=(_,w,k,T,E)=>{const I=_.component;r(_,w,k,0,p),o(I.vnode,_,w,k,I,p,T,_.slotScopeIds,E),it(()=>{I.isDeactivated=!1,I.a&&Yi(I.a);const F=_.props&&_.props.onVnodeMounted;F&&ct(F,I.parent,_)},p)},s.deactivate=_=>{const w=_.component;r(_,h,null,1,p),it(()=>{w.da&&Yi(w.da);const k=_.props&&_.props.onVnodeUnmounted;k&&ct(k,w.parent,_),w.isDeactivated=!0},p)};function v(_){bn(_),f(_,n,p,!0)}function g(_){u.forEach((w,k)=>{const T=ls(w.type);T&&(!_||!_(T))&&y(k)})}function y(_){const w=u.get(_);!m||!zt(w,m)?v(w):m&&bn(m),u.delete(_),d.delete(_)}ot(()=>[e.include,e.exclude],([_,w])=>{_&&g(k=>wl(_,k)),w&&g(k=>!wl(w,k))},{flush:"post",deep:!0});let S=null;const B=()=>{S!=null&&u.set(S,vn(n.subTree))};return gi(B),tn(B),ln(()=>{u.forEach(_=>{const{subTree:w,suspense:k}=n,T=vn(w);if(_.type===T.type&&_.key===T.key){bn(T);const E=T.component.da;E&&it(E,k);return}v(_)})}),()=>{if(S=null,!l.default)return null;const _=l.default(),w=_[0];if(_.length>1)return m=null,_;if(!xt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return m=null,w;let k=vn(w);const T=k.type,E=ls($i(k)?k.type.__asyncResolved||{}:T),{include:I,exclude:F,max:D}=e;if(I&&(!E||!wl(I,E))||F&&E&&wl(F,E))return m=k,w;const L=k.key==null?T:k.key,J=u.get(L);return k.el&&(k=Lt(k),w.shapeFlag&128&&(w.ssContent=k)),S=L,J?(k.el=J.el,k.component=J.component,k.transition&&Ei(k,k.transition),k.shapeFlag|=512,d.delete(L),d.add(L)):(d.add(L),D&&d.size>parseInt(D,10)&&y(d.values().next().value)),k.shapeFlag|=256,m=k,dc(w.type)?w:k}}},zf=Rf;function wl(e,l){return ce(e)?e.some(n=>wl(n,l)):Ye(e)?e.split(",").includes(l):cp(e)?e.test(l):!1}function Qs(e,l){vc(e,"a",l)}function Zs(e,l){vc(e,"da",l)}function vc(e,l,n=Ke){const s=e.__wdc||(e.__wdc=()=>{let u=n;for(;u;){if(u.isDeactivated)return;u=u.parent}return e()});if(en(l,s,n),n){let u=n.parent;for(;u&&u.parent;)ea(u.parent.vnode)&&Df(s,l,n,u),u=u.parent}}function Df(e,l,n,s){const u=en(l,e,s,!0);Vi(()=>{Es(s[l],u)},n)}function bn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function vn(e){return e.shapeFlag&128?e.ssContent:e}function en(e,l,n=Ke,s=!1){if(n){const u=n[e]||(n[e]=[]),d=l.__weh||(l.__weh=(...m)=>{if(n.isUnmounted)return;Mi();const p=Di(n),o=Ct(l,n,e,m);return p(),Ii(),o});return s?u.unshift(d):u.push(d),d}}const Xt=e=>(l,n=Ke)=>(!ta||e==="sp")&&en(e,(...s)=>l(...s),n),yc=Xt("bm"),gi=Xt("m"),Cc=Xt("bu"),tn=Xt("u"),ln=Xt("bum"),Vi=Xt("um"),wc=Xt("sp"),Sc=Xt("rtg"),Ac=Xt("rtc");function kc(e,l=Ke){en("ec",e,l)}function Xe(e,l,n,s){let u;const d=n&&n[s];if(ce(e)||Ye(e)){u=new Array(e.length);for(let m=0,p=e.length;m<p;m++)u[m]=l(e[m],m,void 0,d&&d[m])}else if(typeof e=="number"){u=new Array(e);for(let m=0;m<e;m++)u[m]=l(m+1,m,void 0,d&&d[m])}else if(Ne(e))if(e[Symbol.iterator])u=Array.from(e,(m,p)=>l(m,p,void 0,d&&d[p]));else{const m=Object.keys(e);u=new Array(m.length);for(let p=0,o=m.length;p<o;p++){const r=m[p];u[p]=l(e[r],r,p,d&&d[p])}}else u=[];return n&&(n[s]=u),u}function Pf(e,l){for(let n=0;n<l.length;n++){const s=l[n];if(ce(s))for(let u=0;u<s.length;u++)e[s[u].name]=s[u].fn;else s&&(e[s.name]=s.key?(...u)=>{const d=s.fn(...u);return d&&(d.key=s.key),d}:s.fn)}return e}function al(e,l,n={},s,u){if(We.isCE||We.parent&&$i(We.parent)&&We.parent.isCE)return l!=="default"&&(n.name=l),t("slot",n,s&&s());let d=e[l];d&&d._c&&(d._d=!1),P();const m=d&&Bc(d(n)),p=j(we,{key:n.key||m&&m.key||`_${l}`},m||(s?s():[]),m&&e._===1?64:-2);return!u&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),d&&d._c&&(d._d=!0),p}function Bc(e){return e.some(l=>xt(l)?!(l.type===rt||l.type===we&&!Bc(l.children)):!0)?e:null}function Mf(e,l){const n={};for(const s in e)n[l&&/[A-Z]/.test(s)?`on:${s}`:xl(s)]=e[s];return n}const Gn=e=>e?Gc(e)?sn(e)||e.proxy:Gn(e.parent):null,El=Ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gn(e.parent),$root:e=>Gn(e.root),$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Wa(e.update)}),$nextTick:e=>e.n||(e.n=ml.bind(e.proxy)),$watch:e=>Tf.bind(e)}),yn=(e,l)=>e!==Fe&&!e.__isScriptSetup&&Re(e,l),Yn={get({_:e},l){const{ctx:n,setupState:s,data:u,props:d,accessCache:m,type:p,appContext:o}=e;let r;if(l[0]!=="$"){const v=m[l];if(v!==void 0)switch(v){case 1:return s[l];case 2:return u[l];case 4:return n[l];case 3:return d[l]}else{if(yn(s,l))return m[l]=1,s[l];if(u!==Fe&&Re(u,l))return m[l]=2,u[l];if((r=e.propsOptions[0])&&Re(r,l))return m[l]=3,d[l];if(n!==Fe&&Re(n,l))return m[l]=4,n[l];Jn&&(m[l]=0)}}const f=El[l];let c,h;if(f)return l==="$attrs"&&gt(e,"get",l),f(e);if((c=p.__cssModules)&&(c=c[l]))return c;if(n!==Fe&&Re(n,l))return m[l]=4,n[l];if(h=o.config.globalProperties,Re(h,l))return h[l]},set({_:e},l,n){const{data:s,setupState:u,ctx:d}=e;return yn(u,l)?(u[l]=n,!0):s!==Fe&&Re(s,l)?(s[l]=n,!0):Re(e.props,l)||l[0]==="$"&&l.slice(1)in e?!1:(d[l]=n,!0)},has({_:{data:e,setupState:l,accessCache:n,ctx:s,appContext:u,propsOptions:d}},m){let p;return!!n[m]||e!==Fe&&Re(e,m)||yn(l,m)||(p=d[0])&&Re(p,m)||Re(s,m)||Re(El,m)||Re(u.config.globalProperties,m)},defineProperty(e,l,n){return n.get!=null?e._.accessCache[l]=0:Re(n,"value")&&this.set(e,l,n.value,null),Reflect.defineProperty(e,l,n)}},If=Ge({},Yn,{get(e,l){if(l!==Symbol.unscopables)return Yn.get(e,l,e)},has(e,l){return l[0]!=="_"&&!hp(l)}});function Ff(){return null}function Vf(){return null}function Nf(e){}function Lf(e){}function Of(){return null}function Hf(){}function jf(e,l){return null}function qf(){return $c().slots}function Uf(){return $c().attrs}function $c(){const e=Ht();return e.setupContext||(e.setupContext=Wc(e))}function ql(e){return ce(e)?e.reduce((l,n)=>(l[n]=null,l),{}):e}function Gf(e,l){const n=ql(e);for(const s in l){if(s.startsWith("__skip"))continue;let u=n[s];u?ce(u)||ve(u)?u=n[s]={type:u,default:l[s]}:u.default=l[s]:u===null&&(u=n[s]={default:l[s]}),u&&l[`__skip_${s}`]&&(u.skipFactory=!0)}return n}function Yf(e,l){return!e||!l?e||l:ce(e)&&ce(l)?e.concat(l):Ge({},ql(e),ql(l))}function Jf(e,l){const n={};for(const s in e)l.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function Wf(e){const l=Ht();let n=e();return es(),Rs(n)&&(n=n.catch(s=>{throw Di(l),s})),[n,()=>Di(l)]}let Jn=!0;function Kf(e){const l=eo(e),n=e.proxy,s=e.ctx;Jn=!1,l.beforeCreate&&Do(l.beforeCreate,e,"bc");const{data:u,computed:d,methods:m,watch:p,provide:o,inject:r,created:f,beforeMount:c,mounted:h,beforeUpdate:v,updated:g,activated:y,deactivated:S,beforeDestroy:B,beforeUnmount:_,destroyed:w,unmounted:k,render:T,renderTracked:E,renderTriggered:I,errorCaptured:F,serverPrefetch:D,expose:L,inheritAttrs:J,components:q,directives:de,filters:ke}=l;if(r&&Xf(r,s,null),m)for(const re in m){const ee=m[re];ve(ee)&&(s[re]=ee.bind(n))}if(u){const re=u.call(n,n);Ne(re)&&(e.data=Kt(re))}if(Jn=!0,d)for(const re in d){const ee=d[re],$e=ve(ee)?ee.bind(n,n):ve(ee.get)?ee.get.bind(n,n):mt,qe=!ve(ee)&&ve(ee.set)?ee.set.bind(n):mt,Ze=V({get:$e,set:qe});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Le=>Ze.value=Le})}if(p)for(const re in p)Tc(p[re],s,n,re);if(o){const re=ve(o)?o.call(n):o;Reflect.ownKeys(re).forEach(ee=>{lt(ee,re[ee])})}f&&Do(f,e,"c");function Y(re,ee){ce(ee)?ee.forEach($e=>re($e.bind(n))):ee&&re(ee.bind(n))}if(Y(yc,c),Y(gi,h),Y(Cc,v),Y(tn,g),Y(Qs,y),Y(Zs,S),Y(kc,F),Y(Ac,E),Y(Sc,I),Y(ln,_),Y(Vi,k),Y(wc,D),ce(L))if(L.length){const re=e.exposed||(e.exposed={});L.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:$e=>n[ee]=$e})})}else e.exposed||(e.exposed={});T&&e.render===mt&&(e.render=T),J!=null&&(e.inheritAttrs=J),q&&(e.components=q),de&&(e.directives=de)}function Xf(e,l,n=mt){ce(e)&&(e=Wn(e));for(const s in e){const u=e[s];let d;Ne(u)?"default"in u?d=Pe(u.from||s,u.default,!0):d=Pe(u.from||s):d=Pe(u),at(d)?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,get:()=>d.value,set:m=>d.value=m}):l[s]=d}}function Do(e,l,n){Ct(ce(e)?e.map(s=>s.bind(l.proxy)):e.bind(l.proxy),l,n)}function Tc(e,l,n,s){const u=s.includes(".")?hc(n,s):()=>n[s];if(Ye(e)){const d=l[e];ve(d)&&ot(u,d)}else if(ve(e))ot(u,e.bind(n));else if(Ne(e))if(ce(e))e.forEach(d=>Tc(d,l,n,s));else{const d=ve(e.handler)?e.handler.bind(n):l[e.handler];ve(d)&&ot(u,d,e)}}function eo(e){const l=e.type,{mixins:n,extends:s}=l,{mixins:u,optionsCache:d,config:{optionMergeStrategies:m}}=e.appContext,p=d.get(l);let o;return p?o=p:!u.length&&!n&&!s?o=l:(o={},u.length&&u.forEach(r=>Ba(o,r,m,!0)),Ba(o,l,m)),Ne(l)&&d.set(l,o),o}function Ba(e,l,n,s=!1){const{mixins:u,extends:d}=l;d&&Ba(e,d,n,!0),u&&u.forEach(m=>Ba(e,m,n,!0));for(const m in l)if(!(s&&m==="expose")){const p=Qf[m]||n&&n[m];e[m]=p?p(e[m],l[m]):l[m]}return e}const Qf={data:Po,props:Mo,emits:Mo,methods:Sl,computed:Sl,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Sl,directives:Sl,watch:eg,provide:Po,inject:Zf};function Po(e,l){return l?e?function(){return Ge(ve(e)?e.call(this,this):e,ve(l)?l.call(this,this):l)}:l:e}function Zf(e,l){return Sl(Wn(e),Wn(l))}function Wn(e){if(ce(e)){const l={};for(let n=0;n<e.length;n++)l[e[n]]=e[n];return l}return e}function ut(e,l){return e?[...new Set([].concat(e,l))]:l}function Sl(e,l){return e?Ge(Object.create(null),e,l):l}function Mo(e,l){return e?ce(e)&&ce(l)?[...new Set([...e,...l])]:Ge(Object.create(null),ql(e),ql(l??{})):l}function eg(e,l){if(!e)return l;if(!l)return e;const n=Ge(Object.create(null),e);for(const s in l)n[s]=ut(e[s],l[s]);return n}function xc(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ig(e,l){return function(s,u=null){ve(s)||(s=Ge({},s)),u!=null&&!Ne(u)&&(u=null);const d=xc(),m=new WeakSet;let p=!1;const o=d.app={_uid:tg++,_component:s,_props:u,_container:null,_context:d,_instance:null,version:Xc,get config(){return d.config},set config(r){},use(r,...f){return m.has(r)||(r&&ve(r.install)?(m.add(r),r.install(o,...f)):ve(r)&&(m.add(r),r(o,...f))),o},mixin(r){return d.mixins.includes(r)||d.mixins.push(r),o},component(r,f){return f?(d.components[r]=f,o):d.components[r]},directive(r,f){return f?(d.directives[r]=f,o):d.directives[r]},mount(r,f,c){if(!p){const h=t(s,u);return h.appContext=d,c===!0?c="svg":c===!1&&(c=void 0),f&&l?l(h,r):e(h,r,c),p=!0,o._container=r,r.__vue_app__=o,sn(h.component)||h.component.proxy}},unmount(){p&&(e(null,o._container),delete o._container.__vue_app__)},provide(r,f){return d.provides[r]=f,o},runWithContext(r){Ul=o;try{return r()}finally{Ul=null}}};return o}}let Ul=null;function lt(e,l){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[e]=l}}function Pe(e,l,n=!1){const s=Ke||We;if(s||Ul){const u=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ul._context.provides;if(u&&e in u)return u[e];if(arguments.length>1)return n&&ve(l)?l.call(s&&s.proxy):l}}function lg(){return!!(Ke||We||Ul)}function ag(e,l,n,s=!1){const u={},d={};Ca(d,nn,1),e.propsDefaults=Object.create(null),Ec(e,l,u,d);for(const m in e.propsOptions[0])m in u||(u[m]=void 0);n?e.props=s?u:Wd(u):e.type.props?e.props=u:e.props=d,e.attrs=d}function ng(e,l,n,s){const{props:u,attrs:d,vnode:{patchFlag:m}}=e,p=Ee(u),[o]=e.propsOptions;let r=!1;if((s||m>0)&&!(m&16)){if(m&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let h=f[c];if(Ka(e.emitsOptions,h))continue;const v=l[h];if(o)if(Re(d,h))v!==d[h]&&(d[h]=v,r=!0);else{const g=dt(h);u[g]=Kn(o,p,g,v,e,!1)}else v!==d[h]&&(d[h]=v,r=!0)}}}else{Ec(e,l,u,d)&&(r=!0);let f;for(const c in p)(!l||!Re(l,c)&&((f=yt(c))===c||!Re(l,f)))&&(o?n&&(n[c]!==void 0||n[f]!==void 0)&&(u[c]=Kn(o,p,c,void 0,e,!0)):delete u[c]);if(d!==p)for(const c in d)(!l||!Re(l,c))&&(delete d[c],r=!0)}r&&Yt(e,"set","$attrs")}function Ec(e,l,n,s){const[u,d]=e.propsOptions;let m=!1,p;if(l)for(let o in l){if(Tl(o))continue;const r=l[o];let f;u&&Re(u,f=dt(o))?!d||!d.includes(f)?n[f]=r:(p||(p={}))[f]=r:Ka(e.emitsOptions,o)||(!(o in s)||r!==s[o])&&(s[o]=r,m=!0)}if(d){const o=Ee(n),r=p||Fe;for(let f=0;f<d.length;f++){const c=d[f];n[c]=Kn(u,o,c,r[c],e,!Re(r,c))}}return m}function Kn(e,l,n,s,u,d){const m=e[n];if(m!=null){const p=Re(m,"default");if(p&&s===void 0){const o=m.default;if(m.type!==Function&&!m.skipFactory&&ve(o)){const{propsDefaults:r}=u;if(n in r)s=r[n];else{const f=Di(u);s=r[n]=o.call(null,l),f()}}else s=o}m[0]&&(d&&!p?s=!1:m[1]&&(s===""||s===yt(n))&&(s=!0))}return s}function Rc(e,l,n=!1){const s=l.propsCache,u=s.get(e);if(u)return u;const d=e.props,m={},p=[];let o=!1;if(!ve(e)){const f=c=>{o=!0;const[h,v]=Rc(c,l,!0);Ge(m,h),v&&p.push(...v)};!n&&l.mixins.length&&l.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!d&&!o)return Ne(e)&&s.set(e,Ui),Ui;if(ce(d))for(let f=0;f<d.length;f++){const c=dt(d[f]);Io(c)&&(m[c]=Fe)}else if(d)for(const f in d){const c=dt(f);if(Io(c)){const h=d[f],v=m[c]=ce(h)||ve(h)?{type:h}:Ge({},h);if(v){const g=No(Boolean,v.type),y=No(String,v.type);v[0]=g>-1,v[1]=y<0||g<y,(g>-1||Re(v,"default"))&&p.push(c)}}}const r=[m,p];return Ne(e)&&s.set(e,r),r}function Io(e){return e[0]!=="$"}function Fo(e){const l=e&&e.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:e===null?"null":""}function Vo(e,l){return Fo(e)===Fo(l)}function No(e,l){return ce(l)?l.findIndex(n=>Vo(n,e)):ve(l)&&Vo(l,e)?0:-1}const zc=e=>e[0]==="_"||e==="$stable",to=e=>ce(e)?e.map(bt):[bt(e)],sg=(e,l,n)=>{if(l._n)return l;const s=i((...u)=>to(l(...u)),n);return s._c=!1,s},Dc=(e,l,n)=>{const s=e._ctx;for(const u in e){if(zc(u))continue;const d=e[u];if(ve(d))l[u]=sg(u,d,s);else if(d!=null){const m=to(d);l[u]=()=>m}}},Pc=(e,l)=>{const n=to(l);e.slots.default=()=>n},og=(e,l)=>{if(e.vnode.shapeFlag&32){const n=l._;n?(e.slots=Ee(l),Ca(l,"_",n)):Dc(l,e.slots={})}else e.slots={},l&&Pc(e,l);Ca(e.slots,nn,1)},rg=(e,l,n)=>{const{vnode:s,slots:u}=e;let d=!0,m=Fe;if(s.shapeFlag&32){const p=l._;p?n&&p===1?d=!1:(Ge(u,l),!n&&p===1&&delete u._):(d=!l.$stable,Dc(l,u)),m=l}else l&&(Pc(e,l),m={default:1});if(d)for(const p in u)!zc(p)&&m[p]==null&&delete u[p]};function $a(e,l,n,s,u=!1){if(ce(e)){e.forEach((h,v)=>$a(h,l&&(ce(l)?l[v]:l),n,s,u));return}if($i(s)&&!u)return;const d=s.shapeFlag&4?sn(s.component)||s.component.proxy:s.el,m=u?null:d,{i:p,r:o}=e,r=l&&l.r,f=p.refs===Fe?p.refs={}:p.refs,c=p.setupState;if(r!=null&&r!==o&&(Ye(r)?(f[r]=null,Re(c,r)&&(c[r]=null)):at(r)&&(r.value=null)),ve(o))Jt(o,p,12,[m,f]);else{const h=Ye(o),v=at(o),g=e.f;if(h||v){const y=()=>{if(g){const S=h?Re(c,o)?c[o]:f[o]:o.value;u?ce(S)&&Es(S,d):ce(S)?S.includes(d)||S.push(d):h?(f[o]=[d],Re(c,o)&&(c[o]=f[o])):(o.value=[d],e.k&&(f[e.k]=o.value))}else h?(f[o]=m,Re(c,o)&&(c[o]=m)):v&&(o.value=m,e.k&&(f[e.k]=m))};u||g?y():(y.id=-1,it(y,n))}}}let ei=!1;const ug=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",dg=e=>e.namespaceURI.includes("MathML"),da=e=>{if(ug(e))return"svg";if(dg(e))return"mathml"},ca=e=>e.nodeType===8;function cg(e){const{mt:l,p:n,o:{patchProp:s,createText:u,nextSibling:d,parentNode:m,remove:p,insert:o,createComment:r}}=e,f=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),ka(),k._vnode=w;return}ei=!1,c(k.firstChild,w,null,null,null),ka(),k._vnode=w,ei&&console.error("Hydration completed but contains mismatches.")},c=(w,k,T,E,I,F=!1)=>{const D=ca(w)&&w.data==="[",L=()=>y(w,k,T,E,I,D),{type:J,ref:q,shapeFlag:de,patchFlag:ke}=k;let O=w.nodeType;k.el=w,ke===-2&&(F=!1,k.dynamicChildren=null);let Y=null;switch(J){case Ri:O!==3?k.children===""?(o(k.el=u(""),m(w),w),Y=w):Y=L():(w.data!==k.children&&(ei=!0,w.data=k.children),Y=d(w));break;case rt:_(w)?(Y=d(w),B(k.el=w.content.firstChild,w,T)):O!==8||D?Y=L():Y=d(w);break;case Ti:if(D&&(w=d(w),O=w.nodeType),O===1||O===3){Y=w;const re=!k.children.length;for(let ee=0;ee<k.staticCount;ee++)re&&(k.children+=Y.nodeType===1?Y.outerHTML:Y.data),ee===k.staticCount-1&&(k.anchor=Y),Y=d(Y);return D?d(Y):Y}else L();break;case we:D?Y=g(w,k,T,E,I,F):Y=L();break;default:if(de&1)(O!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!_(w)?Y=L():Y=h(w,k,T,E,I,F);else if(de&6){k.slotScopeIds=I;const re=m(w);if(D?Y=S(w):ca(w)&&w.data==="teleport start"?Y=S(w,w.data,"teleport end"):Y=d(w),l(k,re,null,T,E,da(re),F),$i(k)){let ee;D?(ee=t(we),ee.anchor=Y?Y.previousSibling:re.lastChild):ee=w.nodeType===3?a(""):t("div"),ee.el=w,k.component.subTree=ee}}else de&64?O!==8?Y=L():Y=k.type.hydrate(w,k,T,E,I,F,e,v):de&128&&(Y=k.type.hydrate(w,k,T,E,da(m(w)),I,F,e,c))}return q!=null&&$a(q,null,E,k),Y},h=(w,k,T,E,I,F)=>{F=F||!!k.dynamicChildren;const{type:D,props:L,patchFlag:J,shapeFlag:q,dirs:de,transition:ke}=k,O=D==="input"||D==="option";if(O||J!==-1){de&&Vt(k,null,T,"created");let Y=!1;if(_(w)){Y=Vc(E,ke)&&T&&T.vnode.props&&T.vnode.props.appear;const ee=w.content.firstChild;Y&&ke.beforeEnter(ee),B(ee,w,T),k.el=w=ee}if(q&16&&!(L&&(L.innerHTML||L.textContent))){let ee=v(w.firstChild,k,w,T,E,I,F);for(;ee;){ei=!0;const $e=ee;ee=ee.nextSibling,p($e)}}else q&8&&w.textContent!==k.children&&(ei=!0,w.textContent=k.children);if(L)if(O||!F||J&48)for(const ee in L)(O&&(ee.endsWith("value")||ee==="indeterminate")||Wl(ee)&&!Tl(ee)||ee[0]===".")&&s(w,ee,null,L[ee],void 0,void 0,T);else L.onClick&&s(w,"onClick",null,L.onClick,void 0,void 0,T);let re;(re=L&&L.onVnodeBeforeMount)&&ct(re,T,k),de&&Vt(k,null,T,"beforeMount"),((re=L&&L.onVnodeMounted)||de||Y)&&cc(()=>{re&&ct(re,T,k),Y&&ke.enter(w),de&&Vt(k,null,T,"mounted")},E)}return w.nextSibling},v=(w,k,T,E,I,F,D)=>{D=D||!!k.dynamicChildren;const L=k.children,J=L.length;for(let q=0;q<J;q++){const de=D?L[q]:L[q]=bt(L[q]);if(w)w=c(w,de,E,I,F,D);else{if(de.type===Ri&&!de.children)continue;ei=!0,n(null,de,T,null,E,I,da(T),F)}}return w},g=(w,k,T,E,I,F)=>{const{slotScopeIds:D}=k;D&&(I=I?I.concat(D):D);const L=m(w),J=v(d(w),k,L,T,E,I,F);return J&&ca(J)&&J.data==="]"?d(k.anchor=J):(ei=!0,o(k.anchor=r("]"),L,J),J)},y=(w,k,T,E,I,F)=>{if(ei=!0,k.el=null,F){const J=S(w);for(;;){const q=d(w);if(q&&q!==J)p(q);else break}}const D=d(w),L=m(w);return p(w),n(null,k,L,D,T,E,da(L),I),D},S=(w,k="[",T="]")=>{let E=0;for(;w;)if(w=d(w),w&&ca(w)&&(w.data===k&&E++,w.data===T)){if(E===0)return d(w);E--}return w},B=(w,k,T)=>{const E=k.parentNode;E&&E.replaceChild(w,k);let I=T;for(;I;)I.vnode.el===k&&(I.vnode.el=I.subTree.el=w),I=I.parent},_=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[f,c]}const it=cc;function Mc(e){return Fc(e)}function Ic(e){return Fc(e,cg)}function Fc(e,l){const n=Ed();n.__VUE__=!0;const{insert:s,remove:u,patchProp:d,createElement:m,createText:p,createComment:o,setText:r,setElementText:f,parentNode:c,nextSibling:h,setScopeId:v=mt,insertStaticContent:g}=e,y=(x,z,N,W=null,K=null,ie=null,oe=void 0,te=null,le=!!z.dynamicChildren)=>{if(x===z)return;x&&!zt(x,z)&&(W=ae(x),Le(x,K,ie,!0),x=null),z.patchFlag===-2&&(le=!1,z.dynamicChildren=null);const{type:Q,ref:ue,shapeFlag:he}=z;switch(Q){case Ri:S(x,z,N,W);break;case rt:B(x,z,N,W);break;case Ti:x==null&&_(z,N,W,oe);break;case we:q(x,z,N,W,K,ie,oe,te,le);break;default:he&1?T(x,z,N,W,K,ie,oe,te,le):he&6?de(x,z,N,W,K,ie,oe,te,le):(he&64||he&128)&&Q.process(x,z,N,W,K,ie,oe,te,le,Ie)}ue!=null&&K&&$a(ue,x&&x.ref,ie,z||x,!z)},S=(x,z,N,W)=>{if(x==null)s(z.el=p(z.children),N,W);else{const K=z.el=x.el;z.children!==x.children&&r(K,z.children)}},B=(x,z,N,W)=>{x==null?s(z.el=o(z.children||""),N,W):z.el=x.el},_=(x,z,N,W)=>{[x.el,x.anchor]=g(x.children,z,N,W,x.el,x.anchor)},w=({el:x,anchor:z},N,W)=>{let K;for(;x&&x!==z;)K=h(x),s(x,N,W),x=K;s(z,N,W)},k=({el:x,anchor:z})=>{let N;for(;x&&x!==z;)N=h(x),u(x),x=N;u(z)},T=(x,z,N,W,K,ie,oe,te,le)=>{z.type==="svg"?oe="svg":z.type==="math"&&(oe="mathml"),x==null?E(z,N,W,K,ie,oe,te,le):D(x,z,K,ie,oe,te,le)},E=(x,z,N,W,K,ie,oe,te)=>{let le,Q;const{props:ue,shapeFlag:he,transition:ge,dirs:ye}=x;if(le=x.el=m(x.type,ie,ue&&ue.is,ue),he&8?f(le,x.children):he&16&&F(x.children,le,null,W,K,Cn(x,ie),oe,te),ye&&Vt(x,null,W,"created"),I(le,x,x.scopeId,oe,W),ue){for(const Ve in ue)Ve!=="value"&&!Tl(Ve)&&d(le,Ve,null,ue[Ve],ie,x.children,W,K,se);"value"in ue&&d(le,"value",null,ue.value,ie),(Q=ue.onVnodeBeforeMount)&&ct(Q,W,x)}ye&&Vt(x,null,W,"beforeMount");const Te=Vc(K,ge);Te&&ge.beforeEnter(le),s(le,z,N),((Q=ue&&ue.onVnodeMounted)||Te||ye)&&it(()=>{Q&&ct(Q,W,x),Te&&ge.enter(le),ye&&Vt(x,null,W,"mounted")},K)},I=(x,z,N,W,K)=>{if(N&&v(x,N),W)for(let ie=0;ie<W.length;ie++)v(x,W[ie]);if(K){let ie=K.subTree;if(z===ie){const oe=K.vnode;I(x,oe,oe.scopeId,oe.slotScopeIds,K.parent)}}},F=(x,z,N,W,K,ie,oe,te,le=0)=>{for(let Q=le;Q<x.length;Q++){const ue=x[Q]=te?si(x[Q]):bt(x[Q]);y(null,ue,z,N,W,K,ie,oe,te)}},D=(x,z,N,W,K,ie,oe)=>{const te=z.el=x.el;let{patchFlag:le,dynamicChildren:Q,dirs:ue}=z;le|=x.patchFlag&16;const he=x.props||Fe,ge=z.props||Fe;let ye;if(N&&bi(N,!1),(ye=ge.onVnodeBeforeUpdate)&&ct(ye,N,z,x),ue&&Vt(z,x,N,"beforeUpdate"),N&&bi(N,!0),Q?L(x.dynamicChildren,Q,te,N,W,Cn(z,K),ie):oe||ee(x,z,te,null,N,W,Cn(z,K),ie,!1),le>0){if(le&16)J(te,z,he,ge,N,W,K);else if(le&2&&he.class!==ge.class&&d(te,"class",null,ge.class,K),le&4&&d(te,"style",he.style,ge.style,K),le&8){const Te=z.dynamicProps;for(let Ve=0;Ve<Te.length;Ve++){const Ue=Te[Ve],et=he[Ue],Et=ge[Ue];(Et!==et||Ue==="value")&&d(te,Ue,et,Et,K,x.children,N,W,se)}}le&1&&x.children!==z.children&&f(te,z.children)}else!oe&&Q==null&&J(te,z,he,ge,N,W,K);((ye=ge.onVnodeUpdated)||ue)&&it(()=>{ye&&ct(ye,N,z,x),ue&&Vt(z,x,N,"updated")},W)},L=(x,z,N,W,K,ie,oe)=>{for(let te=0;te<z.length;te++){const le=x[te],Q=z[te],ue=le.el&&(le.type===we||!zt(le,Q)||le.shapeFlag&70)?c(le.el):N;y(le,Q,ue,null,W,K,ie,oe,!0)}},J=(x,z,N,W,K,ie,oe)=>{if(N!==W){if(N!==Fe)for(const te in N)!Tl(te)&&!(te in W)&&d(x,te,N[te],null,oe,z.children,K,ie,se);for(const te in W){if(Tl(te))continue;const le=W[te],Q=N[te];le!==Q&&te!=="value"&&d(x,te,Q,le,oe,z.children,K,ie,se)}"value"in W&&d(x,"value",N.value,W.value,oe)}},q=(x,z,N,W,K,ie,oe,te,le)=>{const Q=z.el=x?x.el:p(""),ue=z.anchor=x?x.anchor:p("");let{patchFlag:he,dynamicChildren:ge,slotScopeIds:ye}=z;ye&&(te=te?te.concat(ye):ye),x==null?(s(Q,N,W),s(ue,N,W),F(z.children||[],N,ue,K,ie,oe,te,le)):he>0&&he&64&&ge&&x.dynamicChildren?(L(x.dynamicChildren,ge,N,K,ie,oe,te),(z.key!=null||K&&z===K.subTree)&&io(x,z,!0)):ee(x,z,N,ue,K,ie,oe,te,le)},de=(x,z,N,W,K,ie,oe,te,le)=>{z.slotScopeIds=te,x==null?z.shapeFlag&512?K.ctx.activate(z,N,W,oe,le):ke(z,N,W,K,ie,oe,le):O(x,z,le)},ke=(x,z,N,W,K,ie,oe)=>{const te=x.component=Uc(x,W,K);if(ea(x)&&(te.ctx.renderer=Ie),Yc(te),te.asyncDep){if(K&&K.registerDep(te,Y),!x.el){const le=te.subTree=t(rt);B(null,le,z,N)}}else Y(te,x,z,N,K,ie,oe)},O=(x,z,N)=>{const W=z.component=x.component;if(vf(x,z,N))if(W.asyncDep&&!W.asyncResolved){re(W,z,N);return}else W.next=z,mf(W.update),W.effect.dirty=!0,W.update();else z.el=x.el,W.vnode=z},Y=(x,z,N,W,K,ie,oe)=>{const te=()=>{if(x.isMounted){let{next:ue,bu:he,u:ge,parent:ye,vnode:Te}=x;{const Li=Nc(x);if(Li){ue&&(ue.el=Te.el,re(x,ue,oe)),Li.asyncDep.then(()=>{x.isUnmounted||te()});return}}let Ve=ue,Ue;bi(x,!1),ue?(ue.el=Te.el,re(x,ue,oe)):ue=Te,he&&Yi(he),(Ue=ue.props&&ue.props.onVnodeBeforeUpdate)&&ct(Ue,ye,ue,Te),bi(x,!0);const et=ba(x),Et=x.subTree;x.subTree=et,y(Et,et,c(Et.el),ae(Et),x,K,ie),ue.el=et.el,Ve===null&&Us(x,et.el),ge&&it(ge,K),(Ue=ue.props&&ue.props.onVnodeUpdated)&&it(()=>ct(Ue,ye,ue,Te),K)}else{let ue;const{el:he,props:ge}=z,{bm:ye,m:Te,parent:Ve}=x,Ue=$i(z);if(bi(x,!1),ye&&Yi(ye),!Ue&&(ue=ge&&ge.onVnodeBeforeMount)&&ct(ue,Ve,z),bi(x,!0),he&&Ae){const et=()=>{x.subTree=ba(x),Ae(he,x.subTree,x,K,null)};Ue?z.type.__asyncLoader().then(()=>!x.isUnmounted&&et()):et()}else{const et=x.subTree=ba(x);y(null,et,N,W,x,K,ie),z.el=et.el}if(Te&&it(Te,K),!Ue&&(ue=ge&&ge.onVnodeMounted)){const et=z;it(()=>ct(ue,Ve,et),K)}(z.shapeFlag&256||Ve&&$i(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&x.a&&it(x.a,K),x.isMounted=!0,z=N=W=null}},le=x.effect=new il(te,mt,()=>Wa(Q),x.scope),Q=x.update=()=>{le.dirty&&le.run()};Q.id=x.uid,bi(x,!0),Q()},re=(x,z,N)=>{z.component=x;const W=x.vnode.props;x.vnode=z,x.next=null,ng(x,z.props,W,N),rg(x,z.children,N),Mi(),To(x),Ii()},ee=(x,z,N,W,K,ie,oe,te,le=!1)=>{const Q=x&&x.children,ue=x?x.shapeFlag:0,he=z.children,{patchFlag:ge,shapeFlag:ye}=z;if(ge>0){if(ge&128){qe(Q,he,N,W,K,ie,oe,te,le);return}else if(ge&256){$e(Q,he,N,W,K,ie,oe,te,le);return}}ye&8?(ue&16&&se(Q,K,ie),he!==Q&&f(N,he)):ue&16?ye&16?qe(Q,he,N,W,K,ie,oe,te,le):se(Q,K,ie,!0):(ue&8&&f(N,""),ye&16&&F(he,N,W,K,ie,oe,te,le))},$e=(x,z,N,W,K,ie,oe,te,le)=>{x=x||Ui,z=z||Ui;const Q=x.length,ue=z.length,he=Math.min(Q,ue);let ge;for(ge=0;ge<he;ge++){const ye=z[ge]=le?si(z[ge]):bt(z[ge]);y(x[ge],ye,N,null,K,ie,oe,te,le)}Q>ue?se(x,K,ie,!0,!1,he):F(z,N,W,K,ie,oe,te,le,he)},qe=(x,z,N,W,K,ie,oe,te,le)=>{let Q=0;const ue=z.length;let he=x.length-1,ge=ue-1;for(;Q<=he&&Q<=ge;){const ye=x[Q],Te=z[Q]=le?si(z[Q]):bt(z[Q]);if(zt(ye,Te))y(ye,Te,N,null,K,ie,oe,te,le);else break;Q++}for(;Q<=he&&Q<=ge;){const ye=x[he],Te=z[ge]=le?si(z[ge]):bt(z[ge]);if(zt(ye,Te))y(ye,Te,N,null,K,ie,oe,te,le);else break;he--,ge--}if(Q>he){if(Q<=ge){const ye=ge+1,Te=ye<ue?z[ye].el:W;for(;Q<=ge;)y(null,z[Q]=le?si(z[Q]):bt(z[Q]),N,Te,K,ie,oe,te,le),Q++}}else if(Q>ge)for(;Q<=he;)Le(x[Q],K,ie,!0),Q++;else{const ye=Q,Te=Q,Ve=new Map;for(Q=Te;Q<=ge;Q++){const ht=z[Q]=le?si(z[Q]):bt(z[Q]);ht.key!=null&&Ve.set(ht.key,Q)}let Ue,et=0;const Et=ge-Te+1;let Li=!1,ho=0;const hl=new Array(Et);for(Q=0;Q<Et;Q++)hl[Q]=0;for(Q=ye;Q<=he;Q++){const ht=x[Q];if(et>=Et){Le(ht,K,ie,!0);continue}let Ft;if(ht.key!=null)Ft=Ve.get(ht.key);else for(Ue=Te;Ue<=ge;Ue++)if(hl[Ue-Te]===0&&zt(ht,z[Ue])){Ft=Ue;break}Ft===void 0?Le(ht,K,ie,!0):(hl[Ft-Te]=Q+1,Ft>=ho?ho=Ft:Li=!0,y(ht,z[Ft],N,null,K,ie,oe,te,le),et++)}const _o=Li?mg(hl):Ui;for(Ue=_o.length-1,Q=Et-1;Q>=0;Q--){const ht=Te+Q,Ft=z[ht],bo=ht+1<ue?z[ht+1].el:W;hl[Q]===0?y(null,Ft,N,bo,K,ie,oe,te,le):Li&&(Ue<0||Q!==_o[Ue]?Ze(Ft,N,bo,2):Ue--)}}},Ze=(x,z,N,W,K=null)=>{const{el:ie,type:oe,transition:te,children:le,shapeFlag:Q}=x;if(Q&6){Ze(x.component.subTree,z,N,W);return}if(Q&128){x.suspense.move(z,N,W);return}if(Q&64){oe.move(x,z,N,Ie);return}if(oe===we){s(ie,z,N);for(let he=0;he<le.length;he++)Ze(le[he],z,N,W);s(x.anchor,z,N);return}if(oe===Ti){w(x,z,N);return}if(W!==2&&Q&1&&te)if(W===0)te.beforeEnter(ie),s(ie,z,N),it(()=>te.enter(ie),K);else{const{leave:he,delayLeave:ge,afterLeave:ye}=te,Te=()=>s(ie,z,N),Ve=()=>{he(ie,()=>{Te(),ye&&ye()})};ge?ge(ie,Te,Ve):Ve()}else s(ie,z,N)},Le=(x,z,N,W=!1,K=!1)=>{const{type:ie,props:oe,ref:te,children:le,dynamicChildren:Q,shapeFlag:ue,patchFlag:he,dirs:ge}=x;if(te!=null&&$a(te,null,N,x,!0),ue&256){z.ctx.deactivate(x);return}const ye=ue&1&&ge,Te=!$i(x);let Ve;if(Te&&(Ve=oe&&oe.onVnodeBeforeUnmount)&&ct(Ve,z,x),ue&6)U(x.component,N,W);else{if(ue&128){x.suspense.unmount(N,W);return}ye&&Vt(x,null,z,"beforeUnmount"),ue&64?x.type.remove(x,z,N,K,Ie,W):Q&&(ie!==we||he>0&&he&64)?se(Q,z,N,!1,!0):(ie===we&&he&384||!K&&ue&16)&&se(le,z,N),W&&jt(x)}(Te&&(Ve=oe&&oe.onVnodeUnmounted)||ye)&&it(()=>{Ve&&ct(Ve,z,x),ye&&Vt(x,null,z,"unmounted")},N)},jt=x=>{const{type:z,el:N,anchor:W,transition:K}=x;if(z===we){At(N,W);return}if(z===Ti){k(x);return}const ie=()=>{u(N),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(x.shapeFlag&1&&K&&!K.persisted){const{leave:oe,delayLeave:te}=K,le=()=>oe(N,ie);te?te(x.el,ie,le):le()}else ie()},At=(x,z)=>{let N;for(;x!==z;)N=h(x),u(x),x=N;u(z)},U=(x,z,N)=>{const{bum:W,scope:K,update:ie,subTree:oe,um:te}=x;W&&Yi(W),K.stop(),ie&&(ie.active=!1,Le(oe,x,z,N)),te&&it(te,z),it(()=>{x.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},se=(x,z,N,W=!1,K=!1,ie=0)=>{for(let oe=ie;oe<x.length;oe++)Le(x[oe],z,N,W,K)},ae=x=>x.shapeFlag&6?ae(x.component.subTree):x.shapeFlag&128?x.suspense.next():h(x.anchor||x.el);let pe=!1;const Me=(x,z,N)=>{x==null?z._vnode&&Le(z._vnode,null,null,!0):y(z._vnode||null,x,z,null,null,null,N),pe||(pe=!0,To(),ka(),pe=!1),z._vnode=x},Ie={p:y,um:Le,m:Ze,r:jt,mt:ke,mc:F,pc:ee,pbc:L,n:ae,o:e};let Se,Ae;return l&&([Se,Ae]=l(Ie)),{render:Me,hydrate:Se,createApp:ig(Me,Se)}}function Cn({type:e,props:l},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:n}function bi({effect:e,update:l},n){e.allowRecurse=l.allowRecurse=n}function Vc(e,l){return(!e||e&&!e.pendingBranch)&&l&&!l.persisted}function io(e,l,n=!1){const s=e.children,u=l.children;if(ce(s)&&ce(u))for(let d=0;d<s.length;d++){const m=s[d];let p=u[d];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=u[d]=si(u[d]),p.el=m.el),n||io(m,p)),p.type===Ri&&(p.el=m.el)}}function mg(e){const l=e.slice(),n=[0];let s,u,d,m,p;const o=e.length;for(s=0;s<o;s++){const r=e[s];if(r!==0){if(u=n[n.length-1],e[u]<r){l[s]=u,n.push(s);continue}for(d=0,m=n.length-1;d<m;)p=d+m>>1,e[n[p]]<r?d=p+1:m=p;r<e[n[d]]&&(d>0&&(l[s]=n[d-1]),n[d]=s)}}for(d=n.length,m=n[d-1];d-- >0;)n[d]=m,m=l[m];return n}function Nc(e){const l=e.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:Nc(l)}const pg=e=>e.__isTeleport,Rl=e=>e&&(e.disabled||e.disabled===""),Lo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Oo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Xn=(e,l)=>{const n=e&&e.to;return Ye(n)?l?l(n):null:n},fg={name:"Teleport",__isTeleport:!0,process(e,l,n,s,u,d,m,p,o,r){const{mc:f,pc:c,pbc:h,o:{insert:v,querySelector:g,createText:y,createComment:S}}=r,B=Rl(l.props);let{shapeFlag:_,children:w,dynamicChildren:k}=l;if(e==null){const T=l.el=y(""),E=l.anchor=y("");v(T,n,s),v(E,n,s);const I=l.target=Xn(l.props,g),F=l.targetAnchor=y("");I&&(v(F,I),m==="svg"||Lo(I)?m="svg":(m==="mathml"||Oo(I))&&(m="mathml"));const D=(L,J)=>{_&16&&f(w,L,J,u,d,m,p,o)};B?D(n,E):I&&D(I,F)}else{l.el=e.el;const T=l.anchor=e.anchor,E=l.target=e.target,I=l.targetAnchor=e.targetAnchor,F=Rl(e.props),D=F?n:E,L=F?T:I;if(m==="svg"||Lo(E)?m="svg":(m==="mathml"||Oo(E))&&(m="mathml"),k?(h(e.dynamicChildren,k,D,u,d,m,p),io(e,l,!0)):o||c(e,l,D,L,u,d,m,p,!1),B)F?l.props&&e.props&&l.props.to!==e.props.to&&(l.props.to=e.props.to):ma(l,n,T,r,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const J=l.target=Xn(l.props,g);J&&ma(l,J,null,r,0)}else F&&ma(l,E,I,r,1)}Lc(l)},remove(e,l,n,s,{um:u,o:{remove:d}},m){const{shapeFlag:p,children:o,anchor:r,targetAnchor:f,target:c,props:h}=e;if(c&&d(f),m&&d(r),p&16){const v=m||!Rl(h);for(let g=0;g<o.length;g++){const y=o[g];u(y,l,n,v,!!y.dynamicChildren)}}},move:ma,hydrate:gg};function ma(e,l,n,{o:{insert:s},m:u},d=2){d===0&&s(e.targetAnchor,l,n);const{el:m,anchor:p,shapeFlag:o,children:r,props:f}=e,c=d===2;if(c&&s(m,l,n),(!c||Rl(f))&&o&16)for(let h=0;h<r.length;h++)u(r[h],l,n,2);c&&s(p,l,n)}function gg(e,l,n,s,u,d,{o:{nextSibling:m,parentNode:p,querySelector:o}},r){const f=l.target=Xn(l.props,o);if(f){const c=f._lpa||f.firstChild;if(l.shapeFlag&16)if(Rl(l.props))l.anchor=r(m(e),l,p(e),n,s,u,d),l.targetAnchor=c;else{l.anchor=m(e);let h=c;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){l.targetAnchor=h,f._lpa=l.targetAnchor&&m(l.targetAnchor);break}r(c,l,f,n,s,u,d)}Lc(l)}return l.anchor&&m(l.anchor)}const an=fg;function Lc(e){const l=e.ctx;if(l&&l.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const we=Symbol.for("v-fgt"),Ri=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),Ti=Symbol.for("v-stc"),zl=[];let pt=null;function P(e=!1){zl.push(pt=e?null:[])}function Oc(){zl.pop(),pt=zl[zl.length-1]||null}let zi=1;function Qn(e){zi+=e}function Hc(e){return e.dynamicChildren=zi>0?pt||Ui:null,Oc(),zi>0&&pt&&pt.push(e),e}function me(e,l,n,s,u,d){return Hc(C(e,l,n,s,u,d,!0))}function j(e,l,n,s,u){return Hc(t(e,l,n,s,u,!0))}function xt(e){return e?e.__v_isVNode===!0:!1}function zt(e,l){return e.type===l.type&&e.key===l.key}function hg(e){}const nn="__vInternal",jc=({key:e})=>e??null,va=({ref:e,ref_key:l,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ye(e)||at(e)||ve(e)?{i:We,r:e,k:l,f:!!n}:e:null);function C(e,l=null,n=null,s=0,u=null,d=e===we?0:1,m=!1,p=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&jc(l),ref:l&&va(l),scopeId:Xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:s,dynamicProps:u,dynamicChildren:null,appContext:null,ctx:We};return p?(ao(o,n),d&128&&e.normalize(o)):n&&(o.shapeFlag|=Ye(n)?8:16),zi>0&&!m&&pt&&(o.patchFlag>0||d&6)&&o.patchFlag!==32&&pt.push(o),o}const t=_g;function _g(e,l=null,n=null,s=0,u=null,d=!1){if((!e||e===rc)&&(e=rt),xt(e)){const p=Lt(e,l,!0);return n&&ao(p,n),zi>0&&!d&&pt&&(p.shapeFlag&6?pt[pt.indexOf(e)]=p:pt.push(p)),p.patchFlag|=-2,p}if(kg(e)&&(e=e.__vccOpts),l){l=qc(l);let{class:p,style:o}=l;p&&!Ye(p)&&(l.class=Xl(p)),Ne(o)&&(Ns(o)&&!ce(o)&&(o=Ge({},o)),l.style=cl(o))}const m=Ye(e)?1:dc(e)?128:pg(e)?64:Ne(e)?4:ve(e)?2:0;return C(e,l,n,s,u,m,d,!0)}function qc(e){return e?Ns(e)||nn in e?Ge({},e):e:null}function Lt(e,l,n=!1){const{props:s,ref:u,patchFlag:d,children:m}=e,p=l?Ni(s||{},l):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&jc(p),ref:l&&l.ref?n&&u?ce(u)?u.concat(va(l)):[u,va(l)]:va(l):u,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==we?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function a(e=" ",l=0){return t(Ri,null,e,l)}function bg(e,l){const n=t(Ti,null,e);return n.staticCount=l,n}function lo(e="",l=!1){return l?(P(),j(rt,null,e)):t(rt,null,e)}function bt(e){return e==null||typeof e=="boolean"?t(rt):ce(e)?t(we,null,e.slice()):typeof e=="object"?si(e):t(Ri,null,String(e))}function si(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function ao(e,l){let n=0;const{shapeFlag:s}=e;if(l==null)l=null;else if(ce(l))n=16;else if(typeof l=="object")if(s&65){const u=l.default;u&&(u._c&&(u._d=!1),ao(e,u()),u._c&&(u._d=!0));return}else{n=32;const u=l._;!u&&!(nn in l)?l._ctx=We:u===3&&We&&(We.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else ve(l)?(l={default:l,_ctx:We},n=32):(l=String(l),s&64?(n=16,l=[a(l)]):n=8);e.children=l,e.shapeFlag|=n}function Ni(...e){const l={};for(let n=0;n<e.length;n++){const s=e[n];for(const u in s)if(u==="class")l.class!==s.class&&(l.class=Xl([l.class,s.class]));else if(u==="style")l.style=cl([l.style,s.style]);else if(Wl(u)){const d=l[u],m=s[u];m&&d!==m&&!(ce(d)&&d.includes(m))&&(l[u]=d?[].concat(d,m):m)}else u!==""&&(l[u]=s[u])}return l}function ct(e,l,n,s=null){Ct(e,l,7,[n,s])}const vg=xc();let yg=0;function Uc(e,l,n){const s=e.type,u=(l?l.appContext:e.appContext)||vg,d={uid:yg++,vnode:e,type:s,parent:l,appContext:u,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ds(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(u.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(s,u),emitsOptions:nc(s,u),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=l?l.root:d,d.emit=ff.bind(null,d),e.ce&&e.ce(d),d}let Ke=null;const Ht=()=>Ke||We;let Ta,Zn;{const e=Ed(),l=(n,s)=>{let u;return(u=e[n])||(u=e[n]=[]),u.push(s),d=>{u.length>1?u.forEach(m=>m(d)):u[0](d)}};Ta=l("__VUE_INSTANCE_SETTERS__",n=>Ke=n),Zn=l("__VUE_SSR_SETTERS__",n=>ta=n)}const Di=e=>{const l=Ke;return Ta(e),e.scope.on(),()=>{e.scope.off(),Ta(l)}},es=()=>{Ke&&Ke.scope.off(),Ta(null)};function Gc(e){return e.vnode.shapeFlag&4}let ta=!1;function Yc(e,l=!1){l&&Zn(l);const{props:n,children:s}=e.vnode,u=Gc(e);ag(e,n,u,l),og(e,s);const d=u?Cg(e,l):void 0;return l&&Zn(!1),d}function Cg(e,l){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ls(new Proxy(e.ctx,Yn));const{setup:s}=n;if(s){const u=e.setupContext=s.length>1?Wc(e):null,d=Di(e);Mi();const m=Jt(s,e,0,[e.props,u]);if(Ii(),d(),Rs(m)){if(m.then(es,es),l)return m.then(p=>{ts(e,p,l)}).catch(p=>{Fi(p,e,0)});e.asyncDep=m}else ts(e,m,l)}else Jc(e,l)}function ts(e,l,n){ve(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:Ne(l)&&(e.setupState=js(l)),Jc(e,n)}let xa,is;function wg(e){xa=e,is=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,If))}}const Sg=()=>!xa;function Jc(e,l,n){const s=e.type;if(!e.render){if(!l&&xa&&!s.render){const u=s.template||eo(e).template;if(u){const{isCustomElement:d,compilerOptions:m}=e.appContext.config,{delimiters:p,compilerOptions:o}=s,r=Ge(Ge({isCustomElement:d,delimiters:p},m),o);s.render=xa(u,r)}}e.render=s.render||mt,is&&is(e)}{const u=Di(e);Mi();try{Kf(e)}finally{Ii(),u()}}}function Ag(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(l,n){return gt(e,"get","$attrs"),l[n]}}))}function Wc(e){const l=n=>{e.exposed=n||{}};return{get attrs(){return Ag(e)},slots:e.slots,emit:e.emit,expose:l}}function sn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(js(Ls(e.exposed)),{get(l,n){if(n in l)return l[n];if(n in El)return El[n](e)},has(l,n){return n in l||n in El}}))}function ls(e,l=!0){return ve(e)?e.displayName||e.name:e.name||l&&e.__name}function kg(e){return ve(e)&&"__vccOpts"in e}const V=(e,l)=>Wp(e,l,ta);function Bg(e,l,n=Fe){const s=Ht(),u=dt(l),d=yt(l),m=Zd((o,r)=>{let f;return gc(()=>{const c=e[l];Pt(f,c)&&(f=c,r())}),{get(){return o(),n.get?n.get(f):f},set(c){const h=s.vnode.props;!(h&&(l in h||u in h||d in h)&&(`onUpdate:${l}`in h||`onUpdate:${u}`in h||`onUpdate:${d}`in h))&&Pt(c,f)&&(f=c,r()),s.emit(`update:${l}`,n.set?n.set(c):c)}}}),p=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return m[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?e[p]||{}:m,done:!1}:{done:!0}}}},m}function G(e,l,n){const s=arguments.length;return s===2?Ne(l)&&!ce(l)?xt(l)?t(e,null,[l]):t(e,l):t(e,null,l):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xt(n)&&(n=[n]),t(e,l,n))}function $g(){}function Tg(e,l,n,s){const u=n[s];if(u&&Kc(u,e))return u;const d=l();return d.memo=e.slice(),n[s]=d}function Kc(e,l){const n=e.memo;if(n.length!=l.length)return!1;for(let s=0;s<n.length;s++)if(Pt(n[s],l[s]))return!1;return zi>0&&pt&&pt.push(e),!0}const Xc="3.4.15",xg=mt,Eg=uf,Rg=Hi,zg=ac,Dg={createComponentInstance:Uc,setupComponent:Yc,renderComponentRoot:ba,setCurrentRenderingInstance:Hl,isVNode:xt,normalizeVNode:bt},Pg=Dg,Mg=null,Ig=null,Fg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vg="http://www.w3.org/2000/svg",Ng="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Ho=oi&&oi.createElement("template"),Lg={insert:(e,l,n)=>{l.insertBefore(e,n||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,n,s)=>{const u=l==="svg"?oi.createElementNS(Vg,e):l==="mathml"?oi.createElementNS(Ng,e):oi.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&u.setAttribute("multiple",s.multiple),u},createText:e=>oi.createTextNode(e),createComment:e=>oi.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>oi.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},insertStaticContent(e,l,n,s,u,d){const m=n?n.previousSibling:l.lastChild;if(u&&(u===d||u.nextSibling))for(;l.insertBefore(u.cloneNode(!0),n),!(u===d||!(u=u.nextSibling)););else{Ho.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const p=Ho.content;if(s==="svg"||s==="mathml"){const o=p.firstChild;for(;o.firstChild;)p.appendChild(o.firstChild);p.removeChild(o)}l.insertBefore(p,n)}return[m?m.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}},ti="transition",_l="animation",nl=Symbol("_vtc"),on=(e,{slots:l})=>G(_c,Zc(e),l);on.displayName="Transition";const Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Og=on.props=Ge({},Xs,Qc),vi=(e,l=[])=>{ce(e)?e.forEach(n=>n(...l)):e&&e(...l)},jo=e=>e?ce(e)?e.some(l=>l.length>1):e.length>1:!1;function Zc(e){const l={};for(const q in e)q in Qc||(l[q]=e[q]);if(e.css===!1)return l;const{name:n="v",type:s,duration:u,enterFromClass:d=`${n}-enter-from`,enterActiveClass:m=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:o=d,appearActiveClass:r=m,appearToClass:f=p,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,g=Hg(u),y=g&&g[0],S=g&&g[1],{onBeforeEnter:B,onEnter:_,onEnterCancelled:w,onLeave:k,onLeaveCancelled:T,onBeforeAppear:E=B,onAppear:I=_,onAppearCancelled:F=w}=l,D=(q,de,ke)=>{li(q,de?f:p),li(q,de?r:m),ke&&ke()},L=(q,de)=>{q._isLeaving=!1,li(q,c),li(q,v),li(q,h),de&&de()},J=q=>(de,ke)=>{const O=q?I:_,Y=()=>D(de,q,ke);vi(O,[de,Y]),qo(()=>{li(de,q?o:d),qt(de,q?f:p),jo(O)||Uo(de,s,y,Y)})};return Ge(l,{onBeforeEnter(q){vi(B,[q]),qt(q,d),qt(q,m)},onBeforeAppear(q){vi(E,[q]),qt(q,o),qt(q,r)},onEnter:J(!1),onAppear:J(!0),onLeave(q,de){q._isLeaving=!0;const ke=()=>L(q,de);qt(q,c),tm(),qt(q,h),qo(()=>{q._isLeaving&&(li(q,c),qt(q,v),jo(k)||Uo(q,s,S,ke))}),vi(k,[q,ke])},onEnterCancelled(q){D(q,!1),vi(w,[q])},onAppearCancelled(q){D(q,!0),vi(F,[q])},onLeaveCancelled(q){L(q),vi(T,[q])}})}function Hg(e){if(e==null)return null;if(Ne(e))return[wn(e.enter),wn(e.leave)];{const l=wn(e);return[l,l]}}function wn(e){return wa(e)}function qt(e,l){l.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[nl]||(e[nl]=new Set)).add(l)}function li(e,l){l.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[nl];n&&(n.delete(l),n.size||(e[nl]=void 0))}function qo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let jg=0;function Uo(e,l,n,s){const u=e._endId=++jg,d=()=>{u===e._endId&&s()};if(n)return setTimeout(d,n);const{type:m,timeout:p,propCount:o}=em(e,l);if(!m)return s();const r=m+"end";let f=0;const c=()=>{e.removeEventListener(r,h),d()},h=v=>{v.target===e&&++f>=o&&c()};setTimeout(()=>{f<o&&c()},p+1),e.addEventListener(r,h)}function em(e,l){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),u=s(`${ti}Delay`),d=s(`${ti}Duration`),m=Go(u,d),p=s(`${_l}Delay`),o=s(`${_l}Duration`),r=Go(p,o);let f=null,c=0,h=0;l===ti?m>0&&(f=ti,c=m,h=d.length):l===_l?r>0&&(f=_l,c=r,h=o.length):(c=Math.max(m,r),f=c>0?m>r?ti:_l:null,h=f?f===ti?d.length:o.length:0);const v=f===ti&&/\b(transform|all)(,|$)/.test(s(`${ti}Property`).toString());return{type:f,timeout:c,propCount:h,hasTransform:v}}function Go(e,l){for(;e.length<l.length;)e=e.concat(e);return Math.max(...l.map((n,s)=>Yo(n)+Yo(e[s])))}function Yo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function tm(){return document.body.offsetHeight}function qg(e,l,n){const s=e[nl];s&&(l=(l?[l,...s]:[...s]).join(" ")),l==null?e.removeAttribute("class"):n?e.setAttribute("class",l):e.className=l}const no=Symbol("_vod"),im={beforeMount(e,{value:l},{transition:n}){e[no]=e.style.display==="none"?"":e.style.display,n&&l?n.beforeEnter(e):bl(e,l)},mounted(e,{value:l},{transition:n}){n&&l&&n.enter(e)},updated(e,{value:l,oldValue:n},{transition:s}){!l!=!n&&(s?l?(s.beforeEnter(e),bl(e,!0),s.enter(e)):s.leave(e,()=>{bl(e,!1)}):bl(e,l))},beforeUnmount(e,{value:l}){bl(e,l)}};function bl(e,l){e.style.display=l?e[no]:"none"}function Ug(){im.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const lm=Symbol("");function Gg(e){const l=Ht();if(!l)return;const n=l.ut=(u=e(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(d=>ns(d,u))},s=()=>{const u=e(l.proxy);as(l.subTree,u),n(u)};fc(s),gi(()=>{const u=new MutationObserver(s);u.observe(l.subTree.el.parentNode,{childList:!0}),Vi(()=>u.disconnect())})}function as(e,l){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{as(n.activeBranch,l)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ns(e.el,l);else if(e.type===we)e.children.forEach(n=>as(n,l));else if(e.type===Ti){let{el:n,anchor:s}=e;for(;n&&(ns(n,l),n!==s);)n=n.nextSibling}}function ns(e,l){if(e.nodeType===1){const n=e.style;let s="";for(const u in l)n.setProperty(`--${u}`,l[u]),s+=`--${u}: ${l[u]};`;n[lm]=s}}function Yg(e,l,n){const s=e.style,u=s.display,d=Ye(n);if(n&&!d){if(l&&!Ye(l))for(const m in l)n[m]==null&&ss(s,m,"");for(const m in n)ss(s,m,n[m])}else if(d){if(l!==n){const m=s[lm];m&&(n+=";"+m),s.cssText=n}}else l&&e.removeAttribute("style");no in e&&(s.display=u)}const Jo=/\s*!important$/;function ss(e,l,n){if(ce(n))n.forEach(s=>ss(e,l,s));else if(n==null&&(n=""),l.startsWith("--"))e.setProperty(l,n);else{const s=Jg(e,l);Jo.test(n)?e.setProperty(yt(s),n.replace(Jo,""),"important"):e[s]=n}}const Wo=["Webkit","Moz","ms"],Sn={};function Jg(e,l){const n=Sn[l];if(n)return n;let s=dt(l);if(s!=="filter"&&s in e)return Sn[l]=s;s=Kl(s);for(let u=0;u<Wo.length;u++){const d=Wo[u]+s;if(d in e)return Sn[l]=d}return l}const Ko="http://www.w3.org/1999/xlink";function Wg(e,l,n,s,u){if(s&&l.startsWith("xlink:"))n==null?e.removeAttributeNS(Ko,l.slice(6,l.length)):e.setAttributeNS(Ko,l,n);else{const d=Sp(l);n==null||d&&!Rd(n)?e.removeAttribute(l):e.setAttribute(l,d?"":n)}}function Kg(e,l,n,s,u,d,m){if(l==="innerHTML"||l==="textContent"){s&&m(s,u,d),e[l]=n??"";return}const p=e.tagName;if(l==="value"&&p!=="PROGRESS"&&!p.includes("-")){e._value=n;const r=p==="OPTION"?e.getAttribute("value"):e.value,f=n??"";r!==f&&(e.value=f),n==null&&e.removeAttribute(l);return}let o=!1;if(n===""||n==null){const r=typeof e[l];r==="boolean"?n=Rd(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{e[l]=n}catch{}o&&e.removeAttribute(l)}function Gt(e,l,n,s){e.addEventListener(l,n,s)}function Xg(e,l,n,s){e.removeEventListener(l,n,s)}const Xo=Symbol("_vei");function Qg(e,l,n,s,u=null){const d=e[Xo]||(e[Xo]={}),m=d[l];if(s&&m)m.value=s;else{const[p,o]=Zg(l);if(s){const r=d[l]=ih(s,u);Gt(e,p,r,o)}else m&&(Xg(e,p,m,o),d[l]=void 0)}}const Qo=/(?:Once|Passive|Capture)$/;function Zg(e){let l;if(Qo.test(e)){l={};let s;for(;s=e.match(Qo);)e=e.slice(0,e.length-s[0].length),l[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):yt(e.slice(2)),l]}let An=0;const eh=Promise.resolve(),th=()=>An||(eh.then(()=>An=0),An=Date.now());function ih(e,l){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(lh(s,n.value),l,5,[s])};return n.value=e,n.attached=th(),n}function lh(e,l){if(ce(l)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},l.map(s=>u=>!u._stopped&&s&&s(u))}else return l}const Zo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ah=(e,l,n,s,u,d,m,p,o)=>{const r=u==="svg";l==="class"?qg(e,s,r):l==="style"?Yg(e,n,s):Wl(l)?xs(l)||Qg(e,l,n,s,m):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):nh(e,l,s,r))?Kg(e,l,s,d,m,p,o):(l==="true-value"?e._trueValue=s:l==="false-value"&&(e._falseValue=s),Wg(e,l,s,r))};function nh(e,l,n,s){if(s)return!!(l==="innerHTML"||l==="textContent"||l in e&&Zo(l)&&ve(n));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const u=e.tagName;if(u==="IMG"||u==="VIDEO"||u==="CANVAS"||u==="SOURCE")return!1}return Zo(l)&&Ye(n)?!1:l in e}/*! #__NO_SIDE_EFFECTS__ */function am(e,l){const n=R(e);class s extends rn{constructor(d){super(n,d,l)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const sh=e=>am(e,hm),oh=typeof HTMLElement<"u"?HTMLElement:class{};class rn extends oh{constructor(l,n={},s){super(),this._def=l,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ml(()=>{this._connected||(za(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const u of s)this._setAttr(u.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(s,u=!1)=>{const{props:d,styles:m}=s;let p;if(d&&!ce(d))for(const o in d){const r=d[o];(r===Number||r&&r.type===Number)&&(o in this._props&&(this._props[o]=wa(this._props[o])),(p||(p=Object.create(null)))[dt(o)]=!0)}this._numberProps=p,u&&this._resolveProps(s),this._applyStyles(m),this._update()},n=this._def.__asyncLoader;n?n().then(s=>l(s,!0)):l(this._def)}_resolveProps(l){const{props:n}=l,s=ce(n)?n:Object.keys(n||{});for(const u of Object.keys(this))u[0]!=="_"&&s.includes(u)&&this._setProp(u,this[u],!0,!1);for(const u of s.map(dt))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(d){this._setProp(u,d)}})}_setAttr(l){let n=this.getAttribute(l);const s=dt(l);this._numberProps&&this._numberProps[s]&&(n=wa(n)),this._setProp(s,n,!1)}_getProp(l){return this._props[l]}_setProp(l,n,s=!0,u=!0){n!==this._props[l]&&(this._props[l]=n,u&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(yt(l),""):typeof n=="string"||typeof n=="number"?this.setAttribute(yt(l),n+""):n||this.removeAttribute(yt(l))))}_update(){za(this._createVNode(),this.shadowRoot)}_createVNode(){const l=t(this._def,Ge({},this._props));return this._instance||(l.ce=n=>{this._instance=n,n.isCE=!0;const s=(d,m)=>{this.dispatchEvent(new CustomEvent(d,{detail:m}))};n.emit=(d,...m)=>{s(d,m),yt(d)!==d&&s(yt(d),m)};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof rn){n.parent=u._instance,n.provides=u._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function rh(e="$style"){{const l=Ht();if(!l)return Fe;const n=l.type.__cssModules;if(!n)return Fe;const s=n[e];return s||Fe}}const nm=new WeakMap,sm=new WeakMap,Ea=Symbol("_moveCb"),er=Symbol("_enterCb"),om={name:"TransitionGroup",props:Ge({},Og,{tag:String,moveClass:String}),setup(e,{slots:l}){const n=Ht(),s=Ks();let u,d;return tn(()=>{if(!u.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!ph(u[0].el,n.vnode.el,m))return;u.forEach(dh),u.forEach(ch);const p=u.filter(mh);tm(),p.forEach(o=>{const r=o.el,f=r.style;qt(r,m),f.transform=f.webkitTransform=f.transitionDuration="";const c=r[Ea]=h=>{h&&h.target!==r||(!h||/transform$/.test(h.propertyName))&&(r.removeEventListener("transitionend",c),r[Ea]=null,li(r,m))};r.addEventListener("transitionend",c)})}),()=>{const m=Ee(e),p=Zc(m);let o=m.tag||we;u=d,d=l.default?Za(l.default()):[];for(let r=0;r<d.length;r++){const f=d[r];f.key!=null&&Ei(f,ll(f,p,s,n))}if(u)for(let r=0;r<u.length;r++){const f=u[r];Ei(f,ll(f,p,s,n)),nm.set(f,f.el.getBoundingClientRect())}return t(o,null,d)}}},uh=e=>delete e.mode;om.props;const rm=om;function dh(e){const l=e.el;l[Ea]&&l[Ea](),l[er]&&l[er]()}function ch(e){sm.set(e,e.el.getBoundingClientRect())}function mh(e){const l=nm.get(e),n=sm.get(e),s=l.left-n.left,u=l.top-n.top;if(s||u){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${s}px,${u}px)`,d.transitionDuration="0s",e}}function ph(e,l,n){const s=e.cloneNode(),u=e[nl];u&&u.forEach(p=>{p.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const d=l.nodeType===1?l:l.parentNode;d.appendChild(s);const{hasTransform:m}=em(s);return d.removeChild(s),m}const fi=e=>{const l=e.props["onUpdate:modelValue"]||!1;return ce(l)?n=>Yi(l,n):l};function fh(e){e.target.composing=!0}function tr(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Tt=Symbol("_assign"),Ra={created(e,{modifiers:{lazy:l,trim:n,number:s}},u){e[Tt]=fi(u);const d=s||u.props&&u.props.type==="number";Gt(e,l?"change":"input",m=>{if(m.target.composing)return;let p=e.value;n&&(p=p.trim()),d&&(p=Fl(p)),e[Tt](p)}),n&&Gt(e,"change",()=>{e.value=e.value.trim()}),l||(Gt(e,"compositionstart",fh),Gt(e,"compositionend",tr),Gt(e,"change",tr))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:n,trim:s,number:u}},d){if(e[Tt]=fi(d),e.composing)return;const m=u||e.type==="number"?Fl(e.value):e.value,p=l??"";m!==p&&(document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===p)||(e.value=p))}},so={deep:!0,created(e,l,n){e[Tt]=fi(n),Gt(e,"change",()=>{const s=e._modelValue,u=sl(e),d=e.checked,m=e[Tt];if(ce(s)){const p=Ua(s,u),o=p!==-1;if(d&&!o)m(s.concat(u));else if(!d&&o){const r=[...s];r.splice(p,1),m(r)}}else if(Pi(s)){const p=new Set(s);d?p.add(u):p.delete(u),m(p)}else m(dm(e,d))})},mounted:ir,beforeUpdate(e,l,n){e[Tt]=fi(n),ir(e,l,n)}};function ir(e,{value:l,oldValue:n},s){e._modelValue=l,ce(l)?e.checked=Ua(l,s.props.value)>-1:Pi(l)?e.checked=l.has(s.props.value):l!==n&&(e.checked=Wt(l,dm(e,!0)))}const oo={created(e,{value:l},n){e.checked=Wt(l,n.props.value),e[Tt]=fi(n),Gt(e,"change",()=>{e[Tt](sl(e))})},beforeUpdate(e,{value:l,oldValue:n},s){e[Tt]=fi(s),l!==n&&(e.checked=Wt(l,s.props.value))}},um={deep:!0,created(e,{value:l,modifiers:{number:n}},s){const u=Pi(l);Gt(e,"change",()=>{const d=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>n?Fl(sl(m)):sl(m));e[Tt](e.multiple?u?new Set(d):d:d[0]),e._assigning=!0,ml(()=>{e._assigning=!1})}),e[Tt]=fi(s)},mounted(e,{value:l,oldValue:n,modifiers:{number:s}}){lr(e,l,n,s)},beforeUpdate(e,l,n){e[Tt]=fi(n)},updated(e,{value:l,oldValue:n,modifiers:{number:s}}){e._assigning||lr(e,l,n,s)}};function lr(e,l,n,s){const u=e.multiple,d=ce(l);if(!(u&&!d&&!Pi(l))&&!(d&&Wt(l,n))){for(let m=0,p=e.options.length;m<p;m++){const o=e.options[m],r=sl(o);if(u)if(d){const f=typeof r;f==="string"||f==="number"?o.selected=l.includes(s?Fl(r):r):o.selected=Ua(l,r)>-1}else o.selected=l.has(r);else if(Wt(sl(o),l)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!u&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function sl(e){return"_value"in e?e._value:e.value}function dm(e,l){const n=l?"_trueValue":"_falseValue";return n in e?e[n]:l}const cm={created(e,l,n){pa(e,l,n,null,"created")},mounted(e,l,n){pa(e,l,n,null,"mounted")},beforeUpdate(e,l,n,s){pa(e,l,n,s,"beforeUpdate")},updated(e,l,n,s){pa(e,l,n,s,"updated")}};function mm(e,l){switch(e){case"SELECT":return um;case"TEXTAREA":return Ra;default:switch(l){case"checkbox":return so;case"radio":return oo;default:return Ra}}}function pa(e,l,n,s,u){const m=mm(e.tagName,n.props&&n.props.type)[u];m&&m(e,l,n,s)}function gh(){Ra.getSSRProps=({value:e})=>({value:e}),oo.getSSRProps=({value:e},l)=>{if(l.props&&Wt(l.props.value,e))return{checked:!0}},so.getSSRProps=({value:e},l)=>{if(ce(e)){if(l.props&&Ua(e,l.props.value)>-1)return{checked:!0}}else if(Pi(e)){if(l.props&&e.has(l.props.value))return{checked:!0}}else if(e)return{checked:!0}},cm.getSSRProps=(e,l)=>{if(typeof l.type!="string")return;const n=mm(l.type.toUpperCase(),l.props&&l.props.type);if(n.getSSRProps)return n.getSSRProps(e,l)}}const hh=["ctrl","shift","alt","meta"],_h={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,l)=>hh.some(n=>e[`${n}Key`]&&!l.includes(n))},wt=(e,l)=>{const n=e._withMods||(e._withMods={}),s=l.join(".");return n[s]||(n[s]=(u,...d)=>{for(let m=0;m<l.length;m++){const p=_h[l[m]];if(p&&p(u,l))return}return e(u,...d)})},bh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vh=(e,l)=>{const n=e._withKeys||(e._withKeys={}),s=l.join(".");return n[s]||(n[s]=u=>{if(!("key"in u))return;const d=yt(u.key);if(l.some(m=>m===d||bh[m]===d))return e(u)})},pm=Ge({patchProp:ah},Lg);let Dl,ar=!1;function fm(){return Dl||(Dl=Mc(pm))}function gm(){return Dl=ar?Dl:Ic(pm),ar=!0,Dl}const za=(...e)=>{fm().render(...e)},hm=(...e)=>{gm().hydrate(...e)},_m=(...e)=>{const l=fm().createApp(...e),{mount:n}=l;return l.mount=s=>{const u=vm(s);if(!u)return;const d=l._component;!ve(d)&&!d.render&&!d.template&&(d.template=u.innerHTML),u.innerHTML="";const m=n(u,!1,bm(u));return u instanceof Element&&(u.removeAttribute("v-cloak"),u.setAttribute("data-v-app","")),m},l},yh=(...e)=>{const l=gm().createApp(...e),{mount:n}=l;return l.mount=s=>{const u=vm(s);if(u)return n(u,!0,bm(u))},l};function bm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vm(e){return Ye(e)?document.querySelector(e):e}let nr=!1;const Ch=()=>{nr||(nr=!0,gh(),Ug())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wh=()=>{},Sh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_c,BaseTransitionPropsValidators:Xs,Comment:rt,DeprecationTypes:Fg,EffectScope:Ds,ErrorCodes:rf,ErrorTypeStrings:Eg,Fragment:we,KeepAlive:zf,ReactiveEffect:il,Static:Ti,Suspense:wf,Teleport:an,Text:Ri,TrackOpTypes:nf,Transition:on,TransitionGroup:rm,TriggerOpTypes:sf,VueElement:rn,assertNumber:of,callWithAsyncErrorHandling:Ct,callWithErrorHandling:Jt,camelize:dt,capitalize:Kl,cloneVNode:Lt,compatUtils:Ig,compile:wh,computed:V,createApp:_m,createBlock:j,createCommentVNode:lo,createElementBlock:me,createElementVNode:C,createHydrationRenderer:Ic,createPropsRestProxy:Jf,createRenderer:Mc,createSSRApp:yh,createSlots:Pf,createStaticVNode:bg,createTextVNode:a,createVNode:t,customRef:Zd,defineAsyncComponent:Ef,defineComponent:R,defineCustomElement:am,defineEmits:Vf,defineExpose:Nf,defineModel:Hf,defineOptions:Lf,defineProps:Ff,defineSSRCustomElement:sh,defineSlots:Of,devtools:Rg,effect:$p,effectScope:kp,getCurrentInstance:Ht,getCurrentScope:Ps,getTransitionRawChildren:Za,guardReactiveProps:qc,h:G,handleError:Fi,hasInjectionContext:lg,hydrate:hm,initCustomFormatter:$g,initDirectivesForSSR:Ch,inject:Pe,isMemoSame:Kc,isProxy:Ns,isReactive:Bi,isReadonly:xi,isRef:at,isRuntimeOnly:Sg,isShallow:Vl,isVNode:xt,markRaw:Ls,mergeDefaults:Gf,mergeModels:Yf,mergeProps:Ni,nextTick:ml,normalizeClass:Xl,normalizeProps:Cp,normalizeStyle:cl,onActivated:Qs,onBeforeMount:yc,onBeforeUnmount:ln,onBeforeUpdate:Cc,onDeactivated:Zs,onErrorCaptured:kc,onMounted:gi,onRenderTracked:Ac,onRenderTriggered:Sc,onScopeDispose:Pd,onServerPrefetch:wc,onUnmounted:Vi,onUpdated:tn,openBlock:P,popScopeId:oc,provide:lt,proxyRefs:js,pushScopeId:sc,queuePostFlushCb:Aa,reactive:Kt,readonly:Vs,ref:H,registerRuntimeCompiler:wg,render:za,renderList:Xe,renderSlot:al,resolveComponent:b,resolveDirective:Qa,resolveDynamicComponent:uc,resolveFilter:Mg,resolveTransitionHooks:ll,setBlockTracking:Qn,setDevtoolsHook:zg,setTransitionHooks:Ei,shallowReactive:Wd,shallowReadonly:Jp,shallowRef:Xd,ssrContextKey:mc,ssrUtils:Pg,stop:Tp,toDisplayString:Be,toHandlerKey:xl,toHandlers:Mf,toRaw:Ee,toRef:jn,toRefs:tf,toValue:Qp,transformVNodeArgs:hg,triggerRef:Xp,unref:$,useAttrs:Uf,useCssModule:rh,useCssVars:Gg,useModel:Bg,useSSRContext:pc,useSlots:qf,useTransitionState:Ks,vModelCheckbox:so,vModelDynamic:cm,vModelRadio:oo,vModelSelect:um,vModelText:Ra,vShow:im,version:Xc,warn:xg,watch:ot,watchEffect:Ws,watchPostEffect:fc,watchSyncEffect:gc,withAsyncContext:Wf,withCtx:i,withDefaults:jf,withDirectives:Zl,withKeys:vh,withMemo:Tg,withModifiers:wt,withScopeId:gf},Symbol.toStringTag,{value:"Module"})),Ah=R({name:"App"}),be=(e,l)=>{const n=e.__vccOpts||e;for(const[s,u]of l)n[s]=u;return n};function kh(e,l,n,s,u,d){const m=b("router-view");return P(),j(m)}const Bh=be(Ah,[["render",kh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const ym=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",pl=e=>ym?Symbol(e):"_vr_"+e,Cm=pl("rvlm"),sr=pl("rvd"),un=pl("r"),ro=pl("rl"),os=pl("rvl"),ji=typeof window<"u";function $h(e){return e.__esModule||ym&&e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function kn(e,l){const n={};for(const s in l){const u=l[s];n[s]=Array.isArray(u)?u.map(e):e(u)}return n}const Pl=()=>{},Th=/\/$/,xh=e=>e.replace(Th,"");function Bn(e,l,n="/"){let s,u={},d="",m="";const p=l.indexOf("?"),o=l.indexOf("#",p>-1?p:0);return p>-1&&(s=l.slice(0,p),d=l.slice(p+1,o>-1?o:l.length),u=e(d)),o>-1&&(s=s||l.slice(0,o),m=l.slice(o,l.length)),s=Dh(s??l,n),{fullPath:s+(d&&"?")+d+m,path:s,query:u,hash:m}}function Eh(e,l){const n=l.query?e(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function or(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function Rh(e,l,n){const s=l.matched.length-1,u=n.matched.length-1;return s>-1&&s===u&&ol(l.matched[s],n.matched[u])&&wm(l.params,n.params)&&e(l.query)===e(n.query)&&l.hash===n.hash}function ol(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function wm(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const n in e)if(!zh(e[n],l[n]))return!1;return!0}function zh(e,l){return Array.isArray(e)?rr(e,l):Array.isArray(l)?rr(l,e):e===l}function rr(e,l){return Array.isArray(l)?e.length===l.length&&e.every((n,s)=>n===l[s]):e.length===1&&e[0]===l}function Dh(e,l){if(e.startsWith("/"))return e;if(!e)return l;const n=l.split("/"),s=e.split("/");let u=n.length-1,d,m;for(d=0;d<s.length;d++)if(m=s[d],!(u===1||m==="."))if(m==="..")u--;else break;return n.slice(0,u).join("/")+"/"+s.slice(d-(d===s.length?1:0)).join("/")}var Gl;(function(e){e.pop="pop",e.push="push"})(Gl||(Gl={}));var Ml;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ml||(Ml={}));function Ph(e){if(!e)if(ji){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),xh(e)}const Mh=/^[^#]+#/;function Ih(e,l){return e.replace(Mh,"#")+l}function Fh(e,l){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:l.behavior,left:s.left-n.left-(l.left||0),top:s.top-n.top-(l.top||0)}}const dn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vh(e){let l;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),u=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!u)return;l=Fh(u,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function ur(e,l){return(history.state?history.state.position-l:-1)+e}const rs=new Map;function Nh(e,l){rs.set(e,l)}function Lh(e){const l=rs.get(e);return rs.delete(e),l}let Oh=()=>location.protocol+"//"+location.host;function Sm(e,l){const{pathname:n,search:s,hash:u}=l,d=e.indexOf("#");if(d>-1){let p=u.includes(e.slice(d))?e.slice(d).length:1,o=u.slice(p);return o[0]!=="/"&&(o="/"+o),or(o,"")}return or(n,e)+s+u}function Hh(e,l,n,s){let u=[],d=[],m=null;const p=({state:h})=>{const v=Sm(e,location),g=n.value,y=l.value;let S=0;if(h){if(n.value=v,l.value=h,m&&m===g){m=null;return}S=y?h.position-y.position:0}else s(v);u.forEach(B=>{B(n.value,g,{delta:S,type:Gl.pop,direction:S?S>0?Ml.forward:Ml.back:Ml.unknown})})};function o(){m=n.value}function r(h){u.push(h);const v=()=>{const g=u.indexOf(h);g>-1&&u.splice(g,1)};return d.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(Oe({},h.state,{scroll:dn()}),"")}function c(){for(const h of d)h();d=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:r,destroy:c}}function dr(e,l,n,s=!1,u=!1){return{back:e,current:l,forward:n,replaced:s,position:window.history.length,scroll:u?dn():null}}function jh(e){const{history:l,location:n}=window,s={value:Sm(e,n)},u={value:l.state};u.value||d(s.value,{back:null,current:s.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function d(o,r,f){const c=e.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+o:Oh()+e+o;try{l[f?"replaceState":"pushState"](r,"",h),u.value=r}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function m(o,r){const f=Oe({},l.state,dr(u.value.back,o,u.value.forward,!0),r,{position:u.value.position});d(o,f,!0),s.value=o}function p(o,r){const f=Oe({},u.value,l.state,{forward:o,scroll:dn()});d(f.current,f,!0);const c=Oe({},dr(s.value,o,null),{position:f.position+1},r);d(o,c,!1),s.value=o}return{location:s,state:u,push:p,replace:m}}function qh(e){e=Ph(e);const l=jh(e),n=Hh(e,l.state,l.location,l.replace);function s(d,m=!0){m||n.pauseListeners(),history.go(d)}const u=Oe({location:"",base:e,go:s,createHref:Ih.bind(null,e)},l,n);return Object.defineProperty(u,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(u,"state",{enumerable:!0,get:()=>l.state.value}),u}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function Am(e){return typeof e=="string"||typeof e=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},km=pl("nf");var cr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(cr||(cr={}));function rl(e,l){return Oe(new Error,{type:e,[km]:!0},l)}function yi(e,l){return e instanceof Error&&km in e&&(l==null||!!(e.type&l))}const mr="[^/]+?",Gh={sensitive:!1,strict:!1,start:!0,end:!0},Yh=/[.+*?^${}()[\]/\\]/g;function Jh(e,l){const n=Oe({},Gh,l),s=[];let u=n.start?"^":"";const d=[];for(const r of e){const f=r.length?[]:[90];n.strict&&!r.length&&(u+="/");for(let c=0;c<r.length;c++){const h=r[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(u+="/"),u+=h.value.replace(Yh,"\\$&"),v+=40;else if(h.type===1){const{value:g,repeatable:y,optional:S,regexp:B}=h;d.push({name:g,repeatable:y,optional:S});const _=B||mr;if(_!==mr){v+=10;try{new RegExp(`(${_})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+k.message)}}let w=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;c||(w=S&&r.length<2?`(?:/${w})`:"/"+w),S&&(w+="?"),u+=w,v+=20,S&&(v+=-8),y&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}s.push(f)}if(n.strict&&n.end){const r=s.length-1;s[r][s[r].length-1]+=.7000000000000001}n.strict||(u+="/?"),n.end?u+="$":n.strict&&(u+="(?:/|$)");const m=new RegExp(u,n.sensitive?"":"i");function p(r){const f=r.match(m),c={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",g=d[h-1];c[g.name]=v&&g.repeatable?v.split("/"):v}return c}function o(r){let f="",c=!1;for(const h of e){(!c||!f.endsWith("/"))&&(f+="/"),c=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:g,repeatable:y,optional:S}=v,B=g in r?r[g]:"";if(Array.isArray(B)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(B)?B.join("/"):B;if(!_)if(S)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):c=!0);else throw new Error(`Missing required param "${g}"`);f+=_}}return f}return{re:m,score:s,keys:d,parse:p,stringify:o}}function Wh(e,l){let n=0;for(;n<e.length&&n<l.length;){const s=l[n]-e[n];if(s)return s;n++}return e.length<l.length?e.length===1&&e[0]===80?-1:1:e.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Kh(e,l){let n=0;const s=e.score,u=l.score;for(;n<s.length&&n<u.length;){const d=Wh(s[n],u[n]);if(d)return d;n++}return u.length-s.length}const Xh={type:0,value:""},Qh=/[a-zA-Z0-9_]/;function Zh(e){if(!e)return[[]];if(e==="/")return[[Xh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function l(v){throw new Error(`ERR (${n})/"${r}": ${v}`)}let n=0,s=n;const u=[];let d;function m(){d&&u.push(d),d=[]}let p=0,o,r="",f="";function c(){r&&(n===0?d.push({type:0,value:r}):n===1||n===2||n===3?(d.length>1&&(o==="*"||o==="+")&&l(`A repeatable param (${r}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:r,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):l("Invalid state to consume buffer"),r="")}function h(){r+=o}for(;p<e.length;){if(o=e[p++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(r&&c(),m()):o===":"?(c(),n=1):h();break;case 4:h(),n=s;break;case 1:o==="("?n=2:Qh.test(o)?h():(c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:n=3:f+=o;break;case 3:c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--,f="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${r}"`),c(),m(),u}function e_(e,l,n){const s=Jh(Zh(e.path),n),u=Oe(s,{record:e,parent:l,children:[],alias:[]});return l&&!u.record.aliasOf==!l.record.aliasOf&&l.children.push(u),u}function t_(e,l){const n=[],s=new Map;l=fr({strict:!1,end:!0,sensitive:!1},l);function u(f){return s.get(f)}function d(f,c,h){const v=!h,g=l_(f);g.aliasOf=h&&h.record;const y=fr(l,f),S=[g];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const k of w)S.push(Oe({},g,{components:h?h.record.components:g.components,path:k,aliasOf:h?h.record:g}))}let B,_;for(const w of S){const{path:k}=w;if(c&&k[0]!=="/"){const T=c.record.path,E=T[T.length-1]==="/"?"":"/";w.path=c.record.path+(k&&E+k)}if(B=e_(w,c,y),h?h.alias.push(B):(_=_||B,_!==B&&_.alias.push(B),v&&f.name&&!pr(B)&&m(f.name)),"children"in g){const T=g.children;for(let E=0;E<T.length;E++)d(T[E],B,h&&h.children[E])}h=h||B,o(B)}return _?()=>{m(_)}:Pl}function m(f){if(Am(f)){const c=s.get(f);c&&(s.delete(f),n.splice(n.indexOf(c),1),c.children.forEach(m),c.alias.forEach(m))}else{const c=n.indexOf(f);c>-1&&(n.splice(c,1),f.record.name&&s.delete(f.record.name),f.children.forEach(m),f.alias.forEach(m))}}function p(){return n}function o(f){let c=0;for(;c<n.length&&Kh(f,n[c])>=0;)c++;n.splice(c,0,f),f.record.name&&!pr(f)&&s.set(f.record.name,f)}function r(f,c){let h,v={},g,y;if("name"in f&&f.name){if(h=s.get(f.name),!h)throw rl(1,{location:f});y=h.record.name,v=Oe(i_(c.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),g=h.stringify(v)}else if("path"in f)g=f.path,h=n.find(_=>_.re.test(g)),h&&(v=h.parse(g),y=h.record.name);else{if(h=c.name?s.get(c.name):n.find(_=>_.re.test(c.path)),!h)throw rl(1,{location:f,currentLocation:c});y=h.record.name,v=Oe({},c.params,f.params),g=h.stringify(v)}const S=[];let B=h;for(;B;)S.unshift(B.record),B=B.parent;return{name:y,path:g,params:v,matched:S,meta:n_(S)}}return e.forEach(f=>d(f)),{addRoute:d,resolve:r,removeRoute:m,getRoutes:p,getRecordMatcher:u}}function i_(e,l){const n={};for(const s of l)s in e&&(n[s]=e[s]);return n}function l_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:a_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function a_(e){const l={},n=e.props||!1;if("component"in e)l.default=n;else for(const s in e.components)l[s]=typeof n=="boolean"?n:n[s];return l}function pr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function n_(e){return e.reduce((l,n)=>Oe(l,n.meta),{})}function fr(e,l){const n={};for(const s in e)n[s]=s in l?l[s]:e[s];return n}const Bm=/#/g,s_=/&/g,o_=/\//g,r_=/=/g,u_=/\?/g,$m=/\+/g,d_=/%5B/g,c_=/%5D/g,Tm=/%5E/g,m_=/%60/g,xm=/%7B/g,p_=/%7C/g,Em=/%7D/g,f_=/%20/g;function uo(e){return encodeURI(""+e).replace(p_,"|").replace(d_,"[").replace(c_,"]")}function g_(e){return uo(e).replace(xm,"{").replace(Em,"}").replace(Tm,"^")}function us(e){return uo(e).replace($m,"%2B").replace(f_,"+").replace(Bm,"%23").replace(s_,"%26").replace(m_,"`").replace(xm,"{").replace(Em,"}").replace(Tm,"^")}function h_(e){return us(e).replace(r_,"%3D")}function __(e){return uo(e).replace(Bm,"%23").replace(u_,"%3F")}function b_(e){return e==null?"":__(e).replace(o_,"%2F")}function Da(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function v_(e){const l={};if(e===""||e==="?")return l;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let u=0;u<s.length;++u){const d=s[u].replace($m," "),m=d.indexOf("="),p=Da(m<0?d:d.slice(0,m)),o=m<0?null:Da(d.slice(m+1));if(p in l){let r=l[p];Array.isArray(r)||(r=l[p]=[r]),r.push(o)}else l[p]=o}return l}function gr(e){let l="";for(let n in e){const s=e[n];if(n=h_(n),s==null){s!==void 0&&(l+=(l.length?"&":"")+n);continue}(Array.isArray(s)?s.map(d=>d&&us(d)):[s&&us(s)]).forEach(d=>{d!==void 0&&(l+=(l.length?"&":"")+n,d!=null&&(l+="="+d))})}return l}function y_(e){const l={};for(const n in e){const s=e[n];s!==void 0&&(l[n]=Array.isArray(s)?s.map(u=>u==null?null:""+u):s==null?s:""+s)}return l}function vl(){let e=[];function l(s){return e.push(s),()=>{const u=e.indexOf(s);u>-1&&e.splice(u,1)}}function n(){e=[]}return{add:l,list:()=>e,reset:n}}function C_(e,l,n){const s=()=>{e[l].delete(n)};Vi(s),Zs(s),Qs(()=>{e[l].add(n)}),e[l].add(n)}function w_(e){const l=Pe(Cm,{}).value;l&&C_(l,"updateGuards",e)}function ri(e,l,n,s,u){const d=s&&(s.enterCallbacks[u]=s.enterCallbacks[u]||[]);return()=>new Promise((m,p)=>{const o=c=>{c===!1?p(rl(4,{from:n,to:l})):c instanceof Error?p(c):Uh(c)?p(rl(2,{from:l,to:c})):(d&&s.enterCallbacks[u]===d&&typeof c=="function"&&d.push(c),m())},r=e.call(s&&s.instances[u],l,n,o);let f=Promise.resolve(r);e.length<3&&(f=f.then(o)),f.catch(c=>p(c))})}function $n(e,l,n,s){const u=[];for(const d of e)for(const m in d.components){let p=d.components[m];if(!(l!=="beforeRouteEnter"&&!d.instances[m]))if(S_(p)){const r=(p.__vccOpts||p)[l];r&&u.push(ri(r,n,s,d,m))}else{let o=p();u.push(()=>o.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${d.path}"`));const f=$h(r)?r.default:r;d.components[m]=f;const h=(f.__vccOpts||f)[l];return h&&ri(h,n,s,d,m)()}))}}return u}function S_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hr(e){const l=Pe(un),n=Pe(ro),s=V(()=>l.resolve($(e.to))),u=V(()=>{const{matched:o}=s.value,{length:r}=o,f=o[r-1],c=n.matched;if(!f||!c.length)return-1;const h=c.findIndex(ol.bind(null,f));if(h>-1)return h;const v=_r(o[r-2]);return r>1&&_r(f)===v&&c[c.length-1].path!==v?c.findIndex(ol.bind(null,o[r-2])):h}),d=V(()=>u.value>-1&&B_(n.params,s.value.params)),m=V(()=>u.value>-1&&u.value===n.matched.length-1&&wm(n.params,s.value.params));function p(o={}){return k_(o)?l[$(e.replace)?"replace":"push"]($(e.to)).catch(Pl):Promise.resolve()}return{route:s,href:V(()=>s.value.href),isActive:d,isExactActive:m,navigate:p}}const A_=R({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hr,setup(e,{slots:l}){const n=Kt(hr(e)),{options:s}=Pe(un),u=V(()=>({[br(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[br(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=l.default&&l.default(n);return e.custom?d:G("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:u.value},d)}}}),Rm=A_;function k_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function B_(e,l){for(const n in l){const s=l[n],u=e[n];if(typeof s=="string"){if(s!==u)return!1}else if(!Array.isArray(u)||u.length!==s.length||s.some((d,m)=>d!==u[m]))return!1}return!0}function _r(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const br=(e,l,n)=>e??l??n,$_=R({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:l,slots:n}){const s=Pe(os),u=V(()=>e.route||s.value),d=Pe(sr,0),m=V(()=>u.value.matched[d]);lt(sr,d+1),lt(Cm,m),lt(os,u);const p=H();return ot(()=>[p.value,m.value,e.name],([o,r,f],[c,h,v])=>{r&&(r.instances[f]=o,h&&h!==r&&o&&o===c&&(r.leaveGuards.size||(r.leaveGuards=h.leaveGuards),r.updateGuards.size||(r.updateGuards=h.updateGuards))),o&&r&&(!h||!ol(r,h)||!c)&&(r.enterCallbacks[f]||[]).forEach(g=>g(o))},{flush:"post"}),()=>{const o=u.value,r=m.value,f=r&&r.components[e.name],c=e.name;if(!f)return vr(n.default,{Component:f,route:o});const h=r.props[e.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,y=G(f,Oe({},v,l,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(r.instances[c]=null)},ref:p}));return vr(n.default,{Component:y,route:o})||y}}});function vr(e,l){if(!e)return null;const n=e(l);return n.length===1?n[0]:n}const T_=$_;function x_(e){const l=t_(e.routes,e),n=e.parseQuery||v_,s=e.stringifyQuery||gr,u=e.history,d=vl(),m=vl(),p=vl(),o=Xd(ii);let r=ii;ji&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=kn.bind(null,U=>""+U),c=kn.bind(null,b_),h=kn.bind(null,Da);function v(U,se){let ae,pe;return Am(U)?(ae=l.getRecordMatcher(U),pe=se):pe=U,l.addRoute(pe,ae)}function g(U){const se=l.getRecordMatcher(U);se&&l.removeRoute(se)}function y(){return l.getRoutes().map(U=>U.record)}function S(U){return!!l.getRecordMatcher(U)}function B(U,se){if(se=Oe({},se||o.value),typeof U=="string"){const Ae=Bn(n,U,se.path),x=l.resolve({path:Ae.path},se),z=u.createHref(Ae.fullPath);return Oe(Ae,x,{params:h(x.params),hash:Da(Ae.hash),redirectedFrom:void 0,href:z})}let ae;if("path"in U)ae=Oe({},U,{path:Bn(n,U.path,se.path).path});else{const Ae=Oe({},U.params);for(const x in Ae)Ae[x]==null&&delete Ae[x];ae=Oe({},U,{params:c(U.params)}),se.params=c(se.params)}const pe=l.resolve(ae,se),Me=U.hash||"";pe.params=f(h(pe.params));const Ie=Eh(s,Oe({},U,{hash:g_(Me),path:pe.path})),Se=u.createHref(Ie);return Oe({fullPath:Ie,hash:Me,query:s===gr?y_(U.query):U.query||{}},pe,{redirectedFrom:void 0,href:Se})}function _(U){return typeof U=="string"?Bn(n,U,o.value.path):Oe({},U)}function w(U,se){if(r!==U)return rl(8,{from:se,to:U})}function k(U){return I(U)}function T(U){return k(Oe(_(U),{replace:!0}))}function E(U){const se=U.matched[U.matched.length-1];if(se&&se.redirect){const{redirect:ae}=se;let pe=typeof ae=="function"?ae(U):ae;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=_(pe):{path:pe},pe.params={}),Oe({query:U.query,hash:U.hash,params:U.params},pe)}}function I(U,se){const ae=r=B(U),pe=o.value,Me=U.state,Ie=U.force,Se=U.replace===!0,Ae=E(ae);if(Ae)return I(Oe(_(Ae),{state:Me,force:Ie,replace:Se}),se||ae);const x=ae;x.redirectedFrom=se;let z;return!Ie&&Rh(s,pe,ae)&&(z=rl(16,{to:x,from:pe}),qe(pe,pe,!0,!1)),(z?Promise.resolve(z):D(x,pe)).catch(N=>yi(N)?N:re(N,x,pe)).then(N=>{if(N){if(yi(N,2))return I(Oe(_(N.to),{state:Me,force:Ie,replace:Se}),se||x)}else N=J(x,pe,!0,Se,Me);return L(x,pe,N),N})}function F(U,se){const ae=w(U,se);return ae?Promise.reject(ae):Promise.resolve()}function D(U,se){let ae;const[pe,Me,Ie]=E_(U,se);ae=$n(pe.reverse(),"beforeRouteLeave",U,se);for(const Ae of pe)Ae.leaveGuards.forEach(x=>{ae.push(ri(x,U,se))});const Se=F.bind(null,U,se);return ae.push(Se),Oi(ae).then(()=>{ae=[];for(const Ae of d.list())ae.push(ri(Ae,U,se));return ae.push(Se),Oi(ae)}).then(()=>{ae=$n(Me,"beforeRouteUpdate",U,se);for(const Ae of Me)Ae.updateGuards.forEach(x=>{ae.push(ri(x,U,se))});return ae.push(Se),Oi(ae)}).then(()=>{ae=[];for(const Ae of U.matched)if(Ae.beforeEnter&&!se.matched.includes(Ae))if(Array.isArray(Ae.beforeEnter))for(const x of Ae.beforeEnter)ae.push(ri(x,U,se));else ae.push(ri(Ae.beforeEnter,U,se));return ae.push(Se),Oi(ae)}).then(()=>(U.matched.forEach(Ae=>Ae.enterCallbacks={}),ae=$n(Ie,"beforeRouteEnter",U,se),ae.push(Se),Oi(ae))).then(()=>{ae=[];for(const Ae of m.list())ae.push(ri(Ae,U,se));return ae.push(Se),Oi(ae)}).catch(Ae=>yi(Ae,8)?Ae:Promise.reject(Ae))}function L(U,se,ae){for(const pe of p.list())pe(U,se,ae)}function J(U,se,ae,pe,Me){const Ie=w(U,se);if(Ie)return Ie;const Se=se===ii,Ae=ji?history.state:{};ae&&(pe||Se?u.replace(U.fullPath,Oe({scroll:Se&&Ae&&Ae.scroll},Me)):u.push(U.fullPath,Me)),o.value=U,qe(U,se,ae,Se),$e()}let q;function de(){q=u.listen((U,se,ae)=>{const pe=B(U),Me=E(pe);if(Me){I(Oe(Me,{replace:!0}),pe).catch(Pl);return}r=pe;const Ie=o.value;ji&&Nh(ur(Ie.fullPath,ae.delta),dn()),D(pe,Ie).catch(Se=>yi(Se,12)?Se:yi(Se,2)?(I(Se.to,pe).then(Ae=>{yi(Ae,20)&&!ae.delta&&ae.type===Gl.pop&&u.go(-1,!1)}).catch(Pl),Promise.reject()):(ae.delta&&u.go(-ae.delta,!1),re(Se,pe,Ie))).then(Se=>{Se=Se||J(pe,Ie,!1),Se&&(ae.delta?u.go(-ae.delta,!1):ae.type===Gl.pop&&yi(Se,20)&&u.go(-1,!1)),L(pe,Ie,Se)}).catch(Pl)})}let ke=vl(),O=vl(),Y;function re(U,se,ae){$e(U);const pe=O.list();return pe.length?pe.forEach(Me=>Me(U,se,ae)):console.error(U),Promise.reject(U)}function ee(){return Y&&o.value!==ii?Promise.resolve():new Promise((U,se)=>{ke.add([U,se])})}function $e(U){Y||(Y=!0,de(),ke.list().forEach(([se,ae])=>U?ae(U):se()),ke.reset())}function qe(U,se,ae,pe){const{scrollBehavior:Me}=e;if(!ji||!Me)return Promise.resolve();const Ie=!ae&&Lh(ur(U.fullPath,0))||(pe||!ae)&&history.state&&history.state.scroll||null;return ml().then(()=>Me(U,se,Ie)).then(Se=>Se&&Vh(Se)).catch(Se=>re(Se,U,se))}const Ze=U=>u.go(U);let Le;const jt=new Set;return{currentRoute:o,addRoute:v,removeRoute:g,hasRoute:S,getRoutes:y,resolve:B,options:e,push:k,replace:T,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:d.add,beforeResolve:m.add,afterEach:p.add,onError:O.add,isReady:ee,install(U){const se=this;U.component("RouterLink",Rm),U.component("RouterView",T_),U.config.globalProperties.$router=se,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>$(o)}),ji&&!Le&&o.value===ii&&(Le=!0,k(u.location).catch(Me=>{}));const ae={};for(const Me in ii)ae[Me]=V(()=>o.value[Me]);U.provide(un,se),U.provide(ro,Kt(ae)),U.provide(os,o);const pe=U.unmount;jt.add(U),U.unmount=function(){jt.delete(U),jt.size<1&&(r=ii,q&&q(),o.value=ii,Le=!1,Y=!1),pe()}}}}function Oi(e){return e.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function E_(e,l){const n=[],s=[],u=[],d=Math.max(l.matched.length,e.matched.length);for(let m=0;m<d;m++){const p=l.matched[m];p&&(e.matched.find(r=>ol(r,p))?s.push(p):n.push(p));const o=e.matched[m];o&&(l.matched.find(r=>ol(r,o))||u.push(o))}return[n,s,u]}function zm(){return Pe(un)}function Dm(){return Pe(ro)}const R_={__name:"Navbar",props:["onClick"],setup(e){const l=H(),n=zm();function s(u){return u.charAt(0).toUpperCase()+u.slice(1)}return Ws(()=>{const m=n.currentRoute.value.path.match(/\/([^/]+)$/);m&&(l.value=s(m[1]))}),(u,d)=>{const m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu");return P(),j(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(p,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(p,null,{default:i(()=>[a(Be(l.value),1)]),_:1})]),_:1})}}},z_=be(R_,[["__scopeId","data-v-338afb35"]]),D_=R({name:"Sidebar",setup(){const e=Dm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),P_=C("strong",null," Fomantic UI Vue ",-1),M_=C("b",null,"Getting Started",-1);function I_(e,l,n,s,u,d){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),r=b("sui-menu");return P(),j(r,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[P_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[M_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.elements,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.collections,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.views,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.modules,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const F_=be(D_,[["render",I_]]),V_={class:"sidemenu"},N_={style:{flex:"1","overflow-y":"scroll"}},L_={__name:"Sidebar",setup(e){return(l,n)=>(P(),me("div",V_,[C("div",N_,[t(F_)])]))}},O_=be(L_,[["__scopeId","data-v-379ef704"]]),H_=R({name:"Sidebar",setup(){const e=Dm();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),j_=C("strong",null," Fomantic UI Vue ",-1),q_=C("b",null,"Getting Started",-1);function U_(e,l,n,s,u,d){const m=b("sui-menu-item"),p=b("sui-menu-header"),o=b("sui-menu-menu"),r=b("sui-sidebar");return P(),j(r,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[j_]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[q_]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Elements"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.elements,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Collections"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.collections,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Views"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.views,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(p,{content:"Modules"}),t(o,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.modules,f=>(P(),j(m,{key:f.name,name:f.name,to:f.path,active:e.isActive(f.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const G_=be(H_,[["render",U_]]),Y_={class:"pusher",style:{height:"100vh"}},J_={class:"article"},W_={__name:"Home",setup(e){const l=H(!1),n=()=>l.value=!l.value;return w_(()=>{l.value=!1}),(s,u)=>{const d=b("router-view"),m=b("SuiSegment");return P(),j(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(G_,{visible:l.value},null,8,["visible"]),C("div",Y_,[t(O_),t(z_,{"on-click":n}),C("div",J_,[t(d)])])]),_:1})}}},K_=be(W_,[["__scopeId","data-v-0bfd4ee9"]]);var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function X_(e){if(e.__esModule)return e;var l=e.default;if(typeof l=="function"){var n=function s(){return this instanceof s?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};n.prototype=l.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var u=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,u.get?u:{enumerable:!0,get:function(){return e[s]}})}),n}const Q_=X_(Sh);var Mm={exports:{}};(function(e){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,m={},p={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function _(w){return w instanceof o?new o(w.type,_(w.content),w.alias):Array.isArray(w)?w.map(_):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(w,k){k=k||{};var T,E;switch(p.util.type(w)){case"Object":if(E=p.util.objId(w),k[E])return k[E];T={},k[E]=T;for(var I in w)w.hasOwnProperty(I)&&(T[I]=_(w[I],k));return T;case"Array":return E=p.util.objId(w),k[E]?k[E]:(T=[],k[E]=T,w.forEach(function(F,D){T[D]=_(F,k)}),T);default:return w}},getLanguage:function(_){for(;_;){var w=u.exec(_.className);if(w)return w[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,w){_.className=_.className.replace(RegExp(u,"gi"),""),_.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(_){var w=document.getElementsByTagName("script");for(var k in w)if(w[k].src==_)return w[k]}return null}},isActive:function(_,w,k){for(var T="no-"+w;_;){var E=_.classList;if(E.contains(w))return!0;if(E.contains(T))return!1;_=_.parentElement}return!!k}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(_,w){var k=p.util.clone(p.languages[_]);for(var T in w)k[T]=w[T];return k},insertBefore:function(_,w,k,T){T=T||p.languages;var E=T[_],I={};for(var F in E)if(E.hasOwnProperty(F)){if(F==w)for(var D in k)k.hasOwnProperty(D)&&(I[D]=k[D]);k.hasOwnProperty(F)||(I[F]=E[F])}var L=T[_];return T[_]=I,p.languages.DFS(p.languages,function(J,q){q===L&&J!=_&&(this[J]=I)}),I},DFS:function _(w,k,T,E){E=E||{};var I=p.util.objId;for(var F in w)if(w.hasOwnProperty(F)){k.call(w,F,w[F],T||F);var D=w[F],L=p.util.type(D);L==="Object"&&!E[I(D)]?(E[I(D)]=!0,_(D,k,null,E)):L==="Array"&&!E[I(D)]&&(E[I(D)]=!0,_(D,k,F,E))}}},plugins:{},highlightAll:function(_,w){p.highlightAllUnder(document,_,w)},highlightAllUnder:function(_,w,k){var T={callback:k,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),p.hooks.run("before-all-elements-highlight",T);for(var E=0,I;I=T.elements[E++];)p.highlightElement(I,w===!0,T.callback)},highlightElement:function(_,w,k){var T=p.util.getLanguage(_),E=p.languages[T];p.util.setLanguage(_,T);var I=_.parentElement;I&&I.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(I,T);var F=_.textContent,D={element:_,language:T,grammar:E,code:F};function L(q){D.highlightedCode=q,p.hooks.run("before-insert",D),D.element.innerHTML=D.highlightedCode,p.hooks.run("after-highlight",D),p.hooks.run("complete",D),k&&k.call(D.element)}if(p.hooks.run("before-sanity-check",D),I=D.element.parentElement,I&&I.nodeName.toLowerCase()==="pre"&&!I.hasAttribute("tabindex")&&I.setAttribute("tabindex","0"),!D.code){p.hooks.run("complete",D),k&&k.call(D.element);return}if(p.hooks.run("before-highlight",D),!D.grammar){L(p.util.encode(D.code));return}if(w&&s.Worker){var J=new Worker(p.filename);J.onmessage=function(q){L(q.data)},J.postMessage(JSON.stringify({language:D.language,code:D.code,immediateClose:!0}))}else L(p.highlight(D.code,D.grammar,D.language))},highlight:function(_,w,k){var T={code:_,grammar:w,language:k};if(p.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=p.tokenize(T.code,T.grammar),p.hooks.run("after-tokenize",T),o.stringify(p.util.encode(T.tokens),T.language)},tokenize:function(_,w){var k=w.rest;if(k){for(var T in k)w[T]=k[T];delete w.rest}var E=new c;return h(E,E.head,_),f(_,E,w,E.head,0),g(E)},hooks:{all:{},add:function(_,w){var k=p.hooks.all;k[_]=k[_]||[],k[_].push(w)},run:function(_,w){var k=p.hooks.all[_];if(!(!k||!k.length))for(var T=0,E;E=k[T++];)E(w)}},Token:o};s.Prism=p;function o(_,w,k,T){this.type=_,this.content=w,this.alias=k,this.length=(T||"").length|0}o.stringify=function _(w,k){if(typeof w=="string")return w;if(Array.isArray(w)){var T="";return w.forEach(function(L){T+=_(L,k)}),T}var E={type:w.type,content:_(w.content,k),tag:"span",classes:["token",w.type],attributes:{},language:k},I=w.alias;I&&(Array.isArray(I)?Array.prototype.push.apply(E.classes,I):E.classes.push(I)),p.hooks.run("wrap",E);var F="";for(var D in E.attributes)F+=" "+D+'="'+(E.attributes[D]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+F+">"+E.content+"</"+E.tag+">"};function r(_,w,k,T){_.lastIndex=w;var E=_.exec(k);if(E&&T&&E[1]){var I=E[1].length;E.index+=I,E[0]=E[0].slice(I)}return E}function f(_,w,k,T,E,I){for(var F in k)if(!(!k.hasOwnProperty(F)||!k[F])){var D=k[F];D=Array.isArray(D)?D:[D];for(var L=0;L<D.length;++L){if(I&&I.cause==F+","+L)return;var J=D[L],q=J.inside,de=!!J.lookbehind,ke=!!J.greedy,O=J.alias;if(ke&&!J.pattern.global){var Y=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,Y+"g")}for(var re=J.pattern||J,ee=T.next,$e=E;ee!==w.tail&&!(I&&$e>=I.reach);$e+=ee.value.length,ee=ee.next){var qe=ee.value;if(w.length>_.length)return;if(!(qe instanceof o)){var Ze=1,Le;if(ke){if(Le=r(re,$e,_,de),!Le||Le.index>=_.length)break;var se=Le.index,jt=Le.index+Le[0].length,At=$e;for(At+=ee.value.length;se>=At;)ee=ee.next,At+=ee.value.length;if(At-=ee.value.length,$e=At,ee.value instanceof o)continue;for(var U=ee;U!==w.tail&&(At<jt||typeof U.value=="string");U=U.next)Ze++,At+=U.value.length;Ze--,qe=_.slice($e,At),Le.index-=$e}else if(Le=r(re,0,qe,de),!Le)continue;var se=Le.index,ae=Le[0],pe=qe.slice(0,se),Me=qe.slice(se+ae.length),Ie=$e+qe.length;I&&Ie>I.reach&&(I.reach=Ie);var Se=ee.prev;pe&&(Se=h(w,Se,pe),$e+=pe.length),v(w,Se,Ze);var Ae=new o(F,q?p.tokenize(ae,q):ae,O,ae);if(ee=h(w,Se,Ae),Me&&h(w,ee,Me),Ze>1){var x={cause:F+","+L,reach:Ie};f(_,w,k,ee.prev,$e,x),I&&x.reach>I.reach&&(I.reach=x.reach)}}}}}}function c(){var _={value:null,prev:null,next:null},w={value:null,prev:_,next:null};_.next=w,this.head=_,this.tail=w,this.length=0}function h(_,w,k){var T=w.next,E={value:k,prev:w,next:T};return w.next=E,T.prev=E,_.length++,E}function v(_,w,k){for(var T=w.next,E=0;E<k&&T!==_.tail;E++)T=T.next;w.next=T,T.prev=w,_.length-=E}function g(_){for(var w=[],k=_.head.next;k!==_.tail;)w.push(k.value),k=k.next;return w}if(!s.document)return s.addEventListener&&(p.disableWorkerMessageHandler||s.addEventListener("message",function(_){var w=JSON.parse(_.data),k=w.language,T=w.code,E=w.immediateClose;s.postMessage(p.highlight(T,p.languages[k],k)),E&&s.close()},!1)),p;var y=p.util.currentScript();y&&(p.filename=y.src,y.hasAttribute("data-manual")&&(p.manual=!0));function S(){p.manual||p.highlightAll()}if(!p.manual){var B=document.readyState;B==="loading"||B==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return p}(l);e.exports&&(e.exports=n),typeof yr<"u"&&(yr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(u,d){var m={};m["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[d]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};p["language-"+d]={pattern:/[\s\S]+/,inside:n.languages[d]};var o={};o[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,u){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:n.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var d=s.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",u=function(y,S){return"✖ Error "+y+" while fetching file: "+S},d="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",o="loading",r="loaded",f="failed",c="pre[data-src]:not(["+p+'="'+r+'"]):not(['+p+'="'+o+'"])';function h(y,S,B){var _=new XMLHttpRequest;_.open("GET",y,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?S(_.responseText):_.status>=400?B(u(_.status,_.statusText)):B(d))},_.send(null)}function v(y){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(S){var B=Number(S[1]),_=S[2],w=S[3];return _?w?[B,Number(w)]:[B,void 0]:[B,B]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var S=y.element;if(S.matches(c)){y.code="",S.setAttribute(p,o);var B=S.appendChild(document.createElement("CODE"));B.textContent=s;var _=S.getAttribute("data-src"),w=y.language;if(w==="none"){var k=(/\.(\w+)$/.exec(_)||[,"none"])[1];w=m[k]||k}n.util.setLanguage(B,w),n.util.setLanguage(S,w);var T=n.plugins.autoloader;T&&T.loadLanguages(w),h(_,function(E){S.setAttribute(p,r);var I=v(S.getAttribute("data-range"));if(I){var F=E.split(/\r\n?|\n/g),D=I[0],L=I[1]==null?F.length:I[1];D<0&&(D+=F.length),D=Math.max(0,Math.min(D-1,F.length)),L<0&&(L+=F.length),L=Math.max(0,Math.min(L,F.length)),E=F.slice(D,L).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(D+1))}B.textContent=E,n.highlightElement(B)},function(E){S.setAttribute(p,f),B.textContent=E})}}),n.plugins.fileHighlight={highlight:function(S){for(var B=(S||document).querySelectorAll(c),_=0,w;w=B[_++];)n.highlightElement(w)}};var g=!1;n.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Mm);var Im=Mm.exports;const Z_=Pm(Im);function eb(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var fa=Q_,Tn=eb(Im),tb=fa.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,n){var s=n.slots,u=n.attrs,d=s&&s.default&&s.default()||[],m=l.code||d&&d.length?d[0].children:"",p=l.inline,o=l.language,r=Tn.languages[o],f="language-".concat(o);return function(){return p?fa.h("code",{class:[f],innerHTML:Tn.highlight(m,r)}):fa.h("pre",Object.assign({},u,{class:[u.class,f]}),[fa.h("code",Object.assign({},u,{class:[u.class,f],innerHTML:Tn.highlight(m,r)}))])}}}),ib=tb;const Fm=Pm(ib),lb=R({name:"DocPageHeader",props:{title:String,sub:String}}),ab={class:"intro",style:{padding:"2rem"}};function nb(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment");return P(),j(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",ab,[t(p,{as:"h1"},{default:i(()=>[a(Be(e.title)+" ",1),t(m,null,{default:i(()=>[a(Be(e.sub),1)]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const je=be(lb,[["render",nb]]),sb=R({name:"GettingStarted",components:{Prism:Fm,DocPageHeader:je}}),cn=e=>(sc("data-v-2f4c2002"),e=e(),oc(),e),ob=cn(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),rb=cn(()=>C("p",null," You can import all components as Vue plugin. ",-1)),ub=cn(()=>C("br",null,null,-1)),db=cn(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function cb(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("prism"),r=b("sui-container");return P(),me("div",null,[t(m,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),t(r,{class:"main"},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[a("Install")]),_:1}),ob,t(p,{as:"h3"},{default:i(()=>[a("via Package Manager")]),_:1}),t(o,{language:"bash"},{default:i(()=>[a(Be(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),t(p,{as:"h2"},{default:i(()=>[a("Usage")]),_:1}),rb,t(o,{language:"js"},{default:i(()=>[a(Be(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),ub,db,t(o,{language:"js"},{default:i(()=>[a(Be(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const mb=be(sb,[["render",cb],["__scopeId","data-v-2f4c2002"]]),pb={__name:"DocSections",props:["docs"],setup(e){const l=e,n=V(()=>[...new Set(l.docs.map(s=>s.category))]);return(s,u)=>{const d=b("SuiHeader");return P(!0),me(we,null,Xe(n.value,(m,p)=>(P(),me(we,{key:m},[t(d,{as:"h2",dividing:"",style:cl({marginTop:p!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[a(Be(m),1)]),_:2},1032,["style"]),(P(!0),me(we,null,Xe(e.docs.filter(o=>o.category===m),(o,r)=>(P(),j(uc(o.component),{key:o.label+"_"+r,id:o.id,style:{marginTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},fb={};function gb(e,l){const n=b("SuiRail");return P(),j(n,{id:"table-contents",position:"right",dividing:""})}const hb=be(fb,[["render",gb],["__scopeId","data-v-c0207a98"]]),_b={class:"intro"},bb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){return(l,n)=>{const s=b("SuiHeaderSubheader"),u=b("SuiHeader"),d=b("SuiDivider"),m=b("SuiIcon"),p=b("SuiMenuItem"),o=b("SuiMenu"),r=b("SuiContainer"),f=b("SuiSegment");return P(),me("div",null,[t(f,{vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(r,{class:"main"},{default:i(()=>[C("div",_b,[t(u,{as:"h1"},{default:i(()=>[a(Be(e.title)+" ",1),t(s,null,{default:i(()=>[a(Be(e.description),1)]),_:1})]),_:1}),t(d,{hidden:""}),t(o,{floated:"right"},{default:i(()=>[t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"edit"})]),_:1}),t(p,{as:"a",icon:""},{default:i(()=>[t(m,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(r,{class:"main"},{default:i(()=>[t(f,{basic:"",fitted:""},{default:i(()=>[t(pb,{docs:e.componentDocs},null,8,["docs"]),t(hb)]),_:1})]),_:1})])}}},fl=be(bb,[["__scopeId","data-v-9b436511"]]);function Vm(e){var l,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(l=0;l<e.length;l++)e[l]&&(n=Vm(e[l]))&&(s&&(s+=" "),s+=n);else for(l in e)e[l]&&(s&&(s+=" "),s+=l);return s}function X(){for(var e,l,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(l=Vm(e))&&(s&&(s+=" "),s+=l);return s}const A=(e,l)=>e?l:"",De=(e,l)=>typeof e=="string"?`${e} ${l}`:"",ze=(e,l)=>e===!0?l:e==="below"?`${l} ${e}`:typeof e=="string"?`${e} ${l}`:"",gl=e=>e==="justified"?"justified":De(e,"aligned"),Qt=(e,l)=>typeof e=="number"&&l?`${ds(e)} ${l}`:typeof e=="number"&&!l?ds(e):typeof e=="string"&&e==="equal"?`${e} width`:"",yl=(e,l)=>e?`${ds(e)} wide ${l}`:"",ds=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],Qe=R({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(e){return{computedClass:V(()=>X(e.color,e.name,e.size,A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),De(e.flipped,"flipped"),De(e.rotated,"rotated"),ze(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return G(e,{"aria-hidden":!0,class:this.computedClass})}}),Cr=R({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:V(()=>X(e.size,"icons"))}},render(){var e,l;let n=this.$props.as||"i";return G(n,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),vb={install(e){e.component(Qe.name,Qe),e.component(Cr.name,Cr)}},yb=()=>({icon:[Boolean,String]}),Cb=e=>({iconClasses:V(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":X({icon:e.icon&&!e.content}))}),wb=["right","left"],Sb=()=>({labeled:[Boolean,String]}),Ab=e=>({labeledClasses:V(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":wb.includes(e.labeled)?`${e.labeled} labeled`:"")}),kb=["double","elastic"],Bb=()=>({loading:{type:[Boolean,String],validator:e=>kb.includes(e)||typeof e=="boolean"}}),$b=e=>({loadingClasses:V(()=>X(e.loading,{loading:e.loading}))}),M=R({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...yb(),...Sb(),...Bb()},setup(e){const{iconClasses:l}=Cb(e),{labeledClasses:n}=Ab(e),{loadingClasses:s}=$b(e);return{classes:V(()=>X("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),De(e.attached,"attached"),De(e.floated,"floated"),ze(e.animated,"animated"),l.value,n.value,s.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var l,n;return[typeof this.icon=="string"&&t(Qe,{name:this.icon},null),this.content||((n=(l=this.$slots).default)==null?void 0:n.call(l))]}})}}),ui=R({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:V(()=>X(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),nt=R({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),De(e.attached,"attached"),Qt(e.widths,""),"buttons"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Tb={install(e){e.component(M.name,M),e.component(ui.name,ui),e.component(nt.name,nt)}},ci=R({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:V(()=>X("ui",A(e.fluid,"fluid"),A(e.text,"text"),gl(e.textAlign),"container"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),xb={install(e){e.component(ci.name,ci)}},Je=R({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:V(()=>X("ui",A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),De(e.textAlign,"aligned"),"divider"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Eb={install(e){e.component(Je.name,Je)}},ft=R({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:V(()=>X(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?G("em",{class:this.computedClass,"data-emoji":this.$props.name}):G("em",{"data-emoji":this.$props.name})}}),Rb={install(e){e.component(ft.name,ft)}},Rt=R({name:"SuiFlag",props:{name:String},setup(e){return{computedClass:V(()=>X(e.name,"flag"))}},render(){return G("i",{class:this.computedClass})}}),zb={install(e){e.component(Rt.name,Rt)}},Pa=R({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,l;return G(this.elementType,{class:"sub header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Mt=R({name:"SuiHeader",components:{HeaderSubheader:Pa},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const l=e.as||"div",n=V(()=>X("ui",e.color,e.size,A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),De(e.floated,"floated"),ze(e.attached,"attached"),gl(e.textAlign),"header"));return{elementType:l,computedClass:n}},render(){var e,l;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(G(Pa,{},this.subheader)),n.length>0?G(this.elementType,{class:this.computedClass},n):G(this.elementType,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),wr=R({name:"SuiHeaderContent",render(){var e,l;return G("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Db={install(e){e.component(Mt.name,Mt),e.component(wr.name,wr),e.component(Pa.name,Pa)}},Nm=["top","middle","bottom"],Pb={verticalAlign:{type:String,validator:e=>Nm.includes(e)}};function Mb(e){return{verticalAlignClass:V(()=>e.verticalAlign&&Nm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Ib=["left","right"],Fb={floated:{type:String,validator:e=>Ib.includes(e)}};function Vb(e){return{floatedClass:V(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const Dt=R({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:l}){const n=V(()=>X("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),De(e.attached,"attached"),De(e.corner,"corner"),ze(e.pointing,"pointing"),ze(e.ribbon,"ribbon"),"label"));let s=e.as||"div";return e.icon?()=>G(s,{class:n.value},G(Qe,{name:e.icon})):()=>{var u;return G(s,{class:n.value},(u=l.default)==null?void 0:u.call(l))}}}),Sr=R({name:"SuiLabelDetail",render(){var e,l;return t("div",{class:"detail"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ar=R({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:l}){const n=V(()=>X("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var s;return G("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),Nb={install(e){e.component(Dt.name,Dt),e.component(Sr.name,Sr),e.component(Ar.name,Ar)}},St=R({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Pb,...Fb},setup(e,{slots:l}){const{verticalAlignClass:n}=Mb(e),{floatedClass:s}=Vb(e),u=V(()=>X("ui",e.size,n.value,s.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),ze(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=b(e.as)),()=>{var m;return G(d,{class:u.value,href:e.href,target:e.target&&e.target},G("img",{src:e.src},(m=l.default)==null?void 0:m.call(l)))}}return e.wrapped?()=>{var d;return G("div",{class:u.value},G("img",{src:e.src},(d=l.default)==null?void 0:d.call(l)))}:e.label?()=>G("div",{class:u.value},[G("img",{src:e.src}),G(Dt,{...e.label})]):()=>t("img",{class:u.value,src:e.src},null)}}),kr=R({name:"SuiImageGroup",props:{size:String},setup(e,{slots:l}){const n=V(()=>X("ui",e.size,"images"));return()=>{var s;return G("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),Lb={install(e){e.component(St.name,St),e.component(kr.name,kr)}},cs=R({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:l}){const n=V(()=>typeof e.icon=="string"||e.loading),s=V(()=>!!e.label||e.labeled),u=V(()=>X("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(n.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(s.value,"labeled"),"input")),d=m=>l("update:modelValue",m.target.value);return()=>t("div",{class:u.value},[e.label&&t(Dt,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>d(m)},null),n.value&&t(Qe,{name:e.icon||"spinner"},null),e.action&&t(M,null,{default:()=>[e.action]})])}}),Ob={install(e){e.component(cs.name,cs)}},Br=R({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:l}){const n=V(()=>X("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),De(e.verticalAlign,"aligned"),De(e.floated,"floated"),"list"));let s=e.as||"div";return()=>{var u;return G(s,{class:n.value},(u=l.default)==null?void 0:u.call(l))}}}),$r=R({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:l}){let n=e.as||"div";const s=V(()=>X(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var u;return G(n,{class:s.value},(u=l.default)==null?void 0:u.call(l))}}}),Tr=R({name:"SuiListIcon",components:{Icon:Qe},setup(e,{slots:l}){return()=>{var n;return G(b(Qe.name),{...e},(n=l.default)==null?void 0:n.call(l))}}}),xr=R({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:V(()=>X(De(e.verticalAlign,"aligned"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Er=R({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:l}){return()=>{var n;return G(e.as,{class:"header"},(n=l.default)==null?void 0:n.call(l))}}}),Rr=R({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:l}){return()=>{var n;return G(e.as,{class:"description"},(n=l.default)==null?void 0:n.call(l))}}}),zr=R({name:"SuiListList",render(){var e,l;return t("div",{class:"list"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Hb={install(e){e.component(Br.name,Br),e.component($r.name,$r),e.component(Tr.name,Tr),e.component(xr.name,xr),e.component(Er.name,Er),e.component(Rr.name,Rr),e.component(zr.name,zr)}},Dr=R({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:l}){return{computedClass:V(()=>{var n;return X("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((n=l.default)!=null&&n.call(l)),"text"),ze(e.inline,"inline"),"loader")})}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),jb={install(e){e.component(Dr.name,Dr)}},Pr=R({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:V(()=>X("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),ze(e.close,"close"),"rail"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),qb={install(e){e.component(Pr.name,Pr)}},Mr=R({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ir=R({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:V(()=>X("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ub={install(e){e.component(Mr.name,Mr),e.component(Ir.name,Ir)}},It=R({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),De(e.floated,"floated"),De(e.textAlign,"aligned"),ze(e.attached,"attached"),ze(e.fitted,"fitted"),ze(e.padded,"padded"),"segment"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Fr=R({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.size,A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Vr=R({name:"SuiSegmentInline",render(){var e,l;return t("div",{class:"inline"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Gb={install(e){e.component(It.name,It),e.component(Fr.name,Fr),e.component(Vr.name,Vr)}},Nr=R({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:V(()=>X(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,l,n,s;return this.href?t("a",{class:this.computedClass,href:this.href},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("div",{class:this.computedClass},[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Yb=["one","two","three","four","five","six","seven","eight"],Lr=R({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:l}=e;return{computedClass:V(()=>X("ui",l&&Yb[l-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),De(e.attached,"attached"),De(e.stackable,"stackable"),"steps"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Or=R({name:"SuiStepContent",render(){var e,l;return t("div",{class:"content"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Hr=R({name:"SuiStepTitle",render(){var e,l;return t("div",{class:"title"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),jr=R({name:"SuiStepDescription",render(){var e,l;return t("div",{class:"description"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Jb={install(e){e.component(Nr.name,Nr),e.component(Lr.name,Lr),e.component(Or.name,Or),e.component(Hr.name,Hr),e.component(jr.name,jr)}},Wb=Object.freeze(Object.defineProperty({__proto__:null,Button:Tb,Container:xb,Divider:Eb,Emoji:Rb,Flag:zb,Header:Db,Icon:vb,Image:Lb,Input:Ob,Label:Nb,List:Hb,Loader:jb,Rail:qb,Reveal:Ub,Segment:Gb,Step:Jb},Symbol.toStringTag,{value:"Module"})),ms=R({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:V(()=>X(e.icon,"icon","divider"))}},render(){var e,l;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),ps=R({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const l=V(()=>X(A(e.active,"active"),"section")),n=e.link||!!e.href;return{computedClass:l,isLink:n}},render(){let e="div";this.isLink?e="a":this.to&&(e=b("router-link"));const l={href:this.href,to:this.to};return t(e,Ni({class:this.computedClass},l),{default:()=>{var n,s;return[(s=(n=this.$slots).default)==null?void 0:s.call(n)]}})}}),qr=R({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:V(()=>X("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,l;const n=()=>{var s;return(s=this.sections)==null?void 0:s.map((u,d)=>{const m={active:u.active,href:u.href,link:u.link,to:u.to};return t(we,null,[t(ps,m,{default:()=>[u.content]}),this.sections.length!==d+1&&t(ms,{icon:this.icon},{default:()=>[a(" / ")]})])})};return t("div",{class:this.computedClass},[((l=(e=this.$slots).default)==null?void 0:l.call(e))||n()])}}),Kb={install(e){e.component(qr.name,qr),e.component(ms.name,ms),e.component(ps.name,ps)}},fs=R({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:V(()=>X("ui",e.size,A(e.error,"error"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,l;return t("form",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ur=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Xb(e){return{widthClass:V(()=>Number(e.width)>0?`${Ur[Number(e.width)-1]} wide`:typeof e.width=="string"||Ur.includes(e.width)?`${e.width} wide`:null)}}const Ma=R({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:l}){const{widthClass:n}=Xb(e),s=V(()=>X(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),n.value,"field")),u=e.type||"text";return{computedClass:s,inputType:u,onInput:d=>l("update:modelValue",d.target.value)}},render(){var e,l;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Gr=R({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:V(()=>X(De(e.widths,"width"),"fields"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Yr=R({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder},null)]),t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder},null)])}}),Qb={install(e){e.component(fs.name,fs),e.component(Ma.name,Ma),e.component(Gr.name,Gr),e.component(Yr.name,Yr)}},gs=R({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:V(()=>X("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),De(e.reversed,"reversed"),De(e.verticalAlign,"aligned"),ze(e.celled,"celled"),ze(e.divided,"divided"),ze(e.padded,"padded"),ze(e.relaxed,"relaxed"),gl(e.textAlign),Qt(e.columns,"column"),"grid"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Ia=R({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:V(()=>X(e.color,De(e.floated,"floated"),De(e.only,"only"),gl(e.textAlign),Qt(e.width,"wide"),yl(e.mobile,"mobile"),yl(e.tablet,"tablet"),yl(e.computer,"computer"),yl(e.largeScreen,"large screen"),yl(e.widescreen,"widescreen"),"column"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Jr=R({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:V(()=>X(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),De(e.only,"only"),Qt(e.columns,"column"),gl(e.textAlign),"row"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Zb={install(e){e.component(gs.name,gs),e.component(Ia.name,Ia),e.component(Jr.name,Jr)}},Wr=R({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),ze(e.attached,"attached"),ze(e.floated,"floated"),ze(e.icon,"icon"),ze(e.tabular,"tabular"),Qt(e.widths,"item"),"menu"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Kr=R({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:l}){let n=e.as||"div";return()=>t(n,{class:"header"},{default:()=>{var s;return[e.content||((s=l.default)==null?void 0:s.call(l))]}})}}),Xr=R({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:l}){let n=e.as||"a";e.header&&(n="div"),e.as==="router-link"&&(n=b(e.as));const s=V(()=>X(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.link,"link"),ze(e.fitted,"fitted"),"item"));return()=>t(n,{class:s.value},{default:()=>{var u;return[e.name||((u=l.default)==null?void 0:u.call(l))]}})}}),Qr=R({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:l}=e;return{computedClass:V(()=>X(l,"menu"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ev={install(e){e.component(Wr.name,Wr),e.component(Kr.name,Kr),e.component(Xr.name,Xr),e.component(Qr.name,Qr)}},Zr=R({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),ze(e.attached,"attached"),"message"))}},render(){var e,l;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(hs,null,{default:()=>[t(_s,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),hs=R({name:"SuiMessageContent",render(){var e,l;return G("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),_s=R({name:"SuiMessageHeader",render(){var e,l;return G("div",{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),eu=R({name:"SuiMessageItem",render(){var e,l;return G("li",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),tu=R({name:"SuiMessageList",render(){var e,l;return G("ul",{class:"list"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),tv={install(e){e.component(Zr.name,Zr),e.component(hs.name,hs),e.component(_s.name,_s),e.component(eu.name,eu),e.component(tu.name,tu)}},iu=R({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),ze(e.attached,"attached"),ze(e.basic,"basic"),ze(e.compact,"compact"),ze(e.padded,"padded"),Qt(e.columns,"column"),"table"))}},render(){var e,l;return t("table",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),lu=R({name:"SuiTableBody",render(){var e,l;return G("tbody",{},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),au=R({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:V(()=>X(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),De(e.verticalAlign,"aligned"),De(e.marked,"marked"),gl(e.textAlign)))}},render(){var e,l,n,s;return this.computedClass?t("td",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("td",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),nu=R({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:l}=e;return{computedClass:V(()=>X(A(l,"full-width")))}},render(){var e,l,n,s;return this.computedClass?G("tfoot",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):G("tfoot",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),su=R({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:V(()=>X(A(e.fullWidth,"full-width")))}},render(){var e,l,n,s;return this.computedClass?G("thead",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):G("thead",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),ou=R({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:V(()=>X(A(e.singleLine,"single line"),De(e.textAlign,"aligned"),Qt(e.width,"wide")))}},render(){var e,l,n,s;return this.computedClass?t("th",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("th",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),ru=R({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:V(()=>X(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),De(e.textAlign,"aligned"),De(e.verticalAlign,"aligned")))}},render(){var e,l,n,s;return this.computedClass?t("tr",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]):t("tr",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),iv={install(e){e.component(iu.name,iu),e.component(lu.name,lu),e.component(au.name,au),e.component(nu.name,nu),e.component(su.name,su),e.component(ou.name,ou),e.component(ru.name,ru)}},lv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:Kb,Form:Qb,Grid:Zb,Menu:ev,Message:tv,Table:iv},Symbol.toStringTag,{value:"Module"})),uu=R({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:V(()=>X("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,l,n,s;return this.$props.test?G("div",{class:this.computedClass,"data-text":this.$props.test},(l=(e=this.$slots).default)==null?void 0:l.call(e)):G("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),av={install(e){e.component(uu.name,uu)}},du=R({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,l,n,s;return this.$props.href||this.$props.link?G("a",{class:this.computedClass,href:this.$slots.href},(l=(e=this.$slots).default)==null?void 0:l.call(e)):G("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),cu=R({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:V(()=>X(A(e.extra,"extra"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),mu=R({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:V(()=>X(De(e.textAlign,"aligned"),"description"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),pu=R({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:V(()=>X("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Qt(e.itemsPerRow,""),"cards"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),fu=R({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:V(()=>X(De(e.textAlign,"aligned"),"header"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),gu=R({name:"SuiCardMeta",render(){var e,l;return G("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),nv={install(e){e.component(du.name,du),e.component(cu.name,cu),e.component(mu.name,mu),e.component(pu.name,pu),e.component(fu.name,fu),e.component(gu.name,gu)}},hu=R({name:"SuiComment",render(){var e,l;return G("div",{class:"comment"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),_u=R({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:l}=e;return{computedClass:V(()=>X(A(l,"active")))}},render(){var e,l,n,s;return this.computedClass?G("a",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e)):G("a",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),bu=R({name:"SuiCommentActions",render(){var e,l;return G("div",{class:"actions"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),vu=R({name:"SuiCommentAuthor",props:{as:String},render(){var e,l;let n=this.$props.as||"div";return G(n,{class:"author"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),yu=R({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return G(e,{class:"avatar"},G("img",{src:this.$props.src}))}}),Cu=R({name:"SuiCommentContent",render(){var e,l;return G("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),wu=R({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:V(()=>X("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),Su=R({name:"SuiCommentMetadata",render(){var e,l;return G("div",{class:"metadata"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Au=R({name:"SuiCommentText",render(){var e,l;return G("div",{class:"text"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),sv={install(e){e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu),e.component(Cu.name,Cu),e.component(wu.name,wu),e.component(Su.name,Su),e.component(Au.name,Au)}},ku=R({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:V(()=>X("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Bu=R({name:"SuiFeedContent",render(){var e,l;return G("div",{class:"content"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),$u=R({name:"SuiFeedDate",render(){var e,l;return G("div",{class:"date"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Tu=R({name:"SuiFeedEvent",render(){var e,l;return G("div",{class:"event"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),xu=R({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:l,text:n}=e;return{computedClass:V(()=>X(A(l,"images"),A(n,"text"),"extra"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Eu=R({name:"SuiFeedLabel",render(){var e,l;return G("div",{class:"label"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Ru=R({name:"SuiFeedLike",render(){var e,l;return G("a",{class:"like"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),zu=R({name:"SuiFeedMeta",render(){var e,l;return G("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Du=R({name:"SuiFeedSummary",render(){var e,l;return G("div",{class:"summary"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Pu=R({name:"SuiFeedUser",render(){var e,l;return G("a",{class:"user"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ov={install(e){e.component(ku.name,ku),e.component(Bu.name,Bu),e.component($u.name,$u),e.component(Tu.name,Tu),e.component(xu.name,xu),e.component(Eu.name,Eu),e.component(Ru.name,Ru),e.component(zu.name,zu),e.component(Du.name,Du),e.component(Pu.name,Pu)}},Mu=R({name:"SuiItem",render(){var e,l;return G("div",{class:"item"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Iu=R({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:l}=e;return{computedClass:V(()=>X(De(l,"aligned"),"content"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Fu=R({name:"SuiItemDescription",render(){var e,l;return G("div",{class:"description"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Vu=R({name:"SuiItemExtra",render(){var e,l;return G("div",{class:"extra"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Nu=R({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:V(()=>X("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),ze(e.relaxed,"relaxed"),"items"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Lu=R({name:"SuiItemHeader",props:{as:String},render(){var e,l;let n=this.$props.as||"div";return G(n,{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Ou=R({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:V(()=>X(e.size,"image"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Hu=R({name:"SuiItemMeta",render(){var e,l;return G("div",{class:"meta"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),rv={install(e){e.component(Mu.name,Mu),e.component(Iu.name,Iu),e.component(Fu.name,Fu),e.component(Vu.name,Vu),e.component(Nu.name,Nu),e.component(Lu.name,Lu),e.component(Ou.name,Ou),e.component(Hu.name,Hu)}},Fa=R({name:"SuiStatisticLabel",props:{content:String},render(){var e,l;return this.$props.content?G("div",{class:"label"},this.$props.content):G("div",{class:"label"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Va=R({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:V(()=>X(A(e.text,"text"),"value"))}},render(){var e,l;return this.$props.content?G("div",{class:this.computedClass},this.$props.content):G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),ju=R({name:"SuiStatistic",components:{StatisticLabel:Fa,StatisticValue:Va},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const l=Pe("ui",!0);return{computedClass:V(()=>X(l&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),ze(e.floated,"floated"),"statistic"))}},render(){var e,l,n,s,u,d;let m=[];return this.$props.value&&m.push(G(Va,{content:this.$props.value},(l=(e=this.$slots).default)==null?void 0:l.call(e))),this.$props.label&&m.push(G(Fa,{content:this.$props.label},(s=(n=this.$slots).default)==null?void 0:s.call(n))),G("div",{class:this.computedClass},m.length>0?m:(d=(u=this.$slots).default)==null?void 0:d.call(u))}}),qu=R({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return lt("ui",!1),{computedClass:V(()=>X("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),Qt(e.widths,""),"statistics"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),uv={install(e){e.component(ju.name,ju),e.component(qu.name,qu),e.component(Fa.name,Fa),e.component(Va.name,Va)}},dv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:av,Card:nv,Comment:sv,Feed:ov,Item:rv,Statistic:uv},Symbol.toStringTag,{value:"Module"})),Uu=R({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const l=e.multiple?H([]):H(-1),n=u=>e.multiple?l.value.includes(u):l.value===u,s=u=>{const d=n(u);e.multiple?d?l.value=l.value.filter(m=>m!==u):l.value.push(u):l.value=d?-1:u};return lt("isTabActive",n),lt("updateActiveIndex",s),{computedClass:V(()=>X("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,l;const n=s=>(s.forEach((u,d)=>{u.props.index=d}),s);return t("div",{class:this.computedClass},[n((l=(e=this.$slots).default)==null?void 0:l.call(e))])}}),Gu=R({name:"SuiAccordionAccordion",render(){var e,l;return G("div",{class:"accordion"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),bs=R({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:V(()=>X(A(e.active,"active"),"content"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Yu=R({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const l=Pe("isTabActive"),n=Pe("updateActiveIndex"),s=V(()=>X(A(l(e.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:n,titleClass:s}},render(){return t(we,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(Qe,{name:"dropdown"},null),this.title]),t(bs,{active:this.isTabActive(this.index)},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})])}}),Ju=R({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:V(()=>X(A(e.active,"active"),"title"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),cv={install(e){e.component(Uu.name,Uu),e.component(Gu.name,Gu),e.component(bs.name,bs),e.component(Yu.name,Yu),e.component(Ju.name,Ju)}},mv=(e,l,n)=>{e.clickOutside=s=>{e===s.target||e.contains(s.target)||l.value(s,e)},document.body.addEventListener("click",e.clickOutside)},pv=(e,l,n)=>{document.body.removeEventListener("click",e.clickOutside)},co={mounted:mv,unmounted:pv};function fv(e,l={}){const n=H(e.value?"open":"closed"),s=()=>n.value=e.value?"open":"closed";ot(e,p=>{n.value=p?"opening":"closing"});const u=p=>{p.addEventListener("animationend",s,!0)},d=p=>{p&&p.removeEventListener("animationend",s)},m=V((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:u,removeAnimation:d,computeAnimationClass:m}}const gv=R({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:l}){const n=H(!1),s=()=>{e.disabled||(n.value=!0)},u=()=>n.value=!1,d=()=>{e.disabled||l("select-day",e.date)},m=()=>{let o=new Date;return o.getFullYear()===e.date.year&&o.getMonth()===e.date.month&&o.getDate()===e.date.day},p=V(()=>X("link",A(n.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(m(),"today")));return{onMouseEnter:s,onMouseLeave:u,onClick:d,computedClass:p}},render(){var e,l;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:wt(this.onClick,["stop"])},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),hv=R({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:l,set:n,add:s,subtract:u,selectedDate:d,setSelectedDate:m,selectType:p,updateVisible:o,formatDate:r}=Pe(hi);return{calendarDays:e,isEqualDay:f=>{if(!d.value)return!1;const c=d.value;return c.getFullYear()===f.year&&c.getMonth()===f.month&&c.getDate()===f.day},onSelectDay:f=>{if(n(f.year,"years"),n(f.month,"months"),n(f.day,"days"),p.value==="date"){let c=new Date(f.year,f.month,f.day);m(c),o(!1);return}l("hour")},updateSelectMode:l,formatDate:r,add:s,subtract:u}},render(){const e=()=>this.calendarDays.map((l,n)=>t("tr",null,[l.map(s=>t(gv,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:wt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[a("S")]),t("th",null,[a("M")]),t("th",null,[a("T")]),t("th",null,[a("W")]),t("th",null,[a("T")]),t("th",null,[a("F")]),t("th",null,[a("S")])])]),t("tbody",null,[e()])])}}),_e=R({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const l=H(!1),n=()=>l.value=!0,s=()=>l.value=!1,u=V(()=>X("link",A(e.active,"active"),A(e.today,"today"),A(l.value,"focus")));return{onMouseEnter:n,onMouseLeave:s,computedClass:u}},render(){var e,l;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:wt(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),_v=R({name:"SuiCalendarMonthTable",setup(){const{state:e,set:l,add:n,subtract:s,selectedDate:u,updateSelectMode:d}=Pe(hi);return{state:e,add:n,subtract:s,updateSelectMode:d,isActive:m=>u.value?e.year===u.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let p=new Date;return m===p.getMonth()&&e.year===p.getFullYear()},onClickCell:m=>{l(m,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((n,s)=>t("tr",null,[t(_e,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[e[s*3]]}),t(_e,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[e[s*3+1]]}),t(_e,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[e[s*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:wt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[l()])])}}),bv=R({name:"SuiCalendarYearTable",setup(e){const{state:l,set:n,add:s,subtract:u,selectedDate:d,updateSelectMode:m}=Pe(hi),p=()=>s(10,"years"),o=()=>u(10,"years"),r=V(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:p,movePrevTwelveYears:o,headerStartYear:r,isActive:f=>d.value?f===d.value.getFullYear():!1,isThisYear:f=>f===new Date().getFullYear(),onClickCell:f=>{n(f,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:wt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,a(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(_e,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(_e,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(_e,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(_e,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(_e,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(_e,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(_e,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(_e,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(_e,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(_e,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(_e,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(_e,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),vv=R({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:l,set:n,add:s,subtract:u,formatDate:d,selectedDate:m}=Pe(hi);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>u(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:p=>{n(p,"hours"),e("minute")},isActive:p=>{if(!m.value)return!1;let o=m.value.getFullYear(),r=m.value.getMonth(),f=m.value.getDate(),c=m.value.getHours();return l.year===o&&l.month===r&&l.day===f&&p===c}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:wt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(_e,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[a("12:00 AM")]}),t(_e,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[a("1:00 AM")]}),t(_e,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[a("2:00 AM")]}),t(_e,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[a("3:00 AM")]})]),t("tr",null,[t(_e,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[a("4:00 AM")]}),t(_e,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[a("5:00 AM")]}),t(_e,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[a("6:00 AM")]}),t(_e,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[a("7:00 AM")]})]),t("tr",null,[t(_e,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[a("8:00 AM")]}),t(_e,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[a("9:00 AM")]}),t(_e,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[a("10:00 AM")]}),t(_e,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[a("11:00 AM")]})]),t("tr",null,[t(_e,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[a("12:00 PM")]}),t(_e,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[a("1:00 PM")]}),t(_e,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[a("2:00 PM")]}),t(_e,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[a("3:00 PM")]})]),t("tr",null,[t(_e,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[a("4:00 PM")]}),t(_e,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[a("5:00 PM")]}),t(_e,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[a("6:00 PM")]}),t(_e,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[a("7:00 PM")]})]),t("tr",null,[t(_e,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[a("8:00 PM")]}),t(_e,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[a("9:00 PM")]}),t(_e,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[a("10:00 PM")]}),t(_e,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[a("11:00 PM")]})])])])}});function Bt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const yv=R({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:l,add:n,subtract:s,formatDate:u,updateSelectMode:d,updateVisible:m,selectedDate:p}=Pe(hi);return{add:n,subtract:s,formatDate:u,updateSelectMode:d,getTimeLabel:o=>{let r=e.hour%12,f=e.hour>12?"PM":"AM",c=o.toString().padStart(2,"0");return e.hour===0?`12:${c} AM`:e.hour===12?`12:${c} PM`:`${r}:${c} ${f}`},onClickCell:o=>{l(o,"minutes"),p.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:o=>{if(!p.value)return!1;let r=p.value.getFullYear(),f=p.value.getMonth(),c=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return e.year===r&&e.month===f&&e.day===c&&e.hour===h&&o===v}}},render(){let e,l,n,s,u,d,m,p,o,r,f,c;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:wt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(_e,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Bt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(_e,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Bt(l=this.getTimeLabel(5))?l:{default:()=>[l]}),t(_e,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Bt(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),t("tr",null,[t(_e,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Bt(s=this.getTimeLabel(15))?s:{default:()=>[s]}),t(_e,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Bt(u=this.getTimeLabel(20))?u:{default:()=>[u]}),t(_e,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Bt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(_e,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Bt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(_e,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Bt(p=this.getTimeLabel(35))?p:{default:()=>[p]}),t(_e,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Bt(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),t("tr",null,[t(_e,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Bt(r=this.getTimeLabel(45))?r:{default:()=>[r]}),t(_e,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Bt(f=this.getTimeLabel(50))?f:{default:()=>[f]}),t(_e,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Bt(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),Cv=R({name:"SuiCalendarBody",setup(){const e=H(null),{visible:l,selectMode:n}=Pe(hi),{setupAnimation:s,removeAnimation:u,computeAnimationClass:d}=fv(l);gi(()=>s(e.value)),Vi(()=>u(e.value));const m=V(()=>X("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:m,selectMode:n}},render(){const e=()=>{switch(this.selectMode){case"day":return t(hv,null,null);case"month":return t(_v,null,null);case"year":return t(bv,null,null);case"hour":return t(vv,null,null);case"minute":return t(yv,null,null)}};return t("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),wv=R({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:l,updateVisible:n,updateSelectMode:s,set:u,state:d,formatCalendarDate:m}=Pe(hi);return{visible:l,formatCalendarDate:m,onClick:()=>{l.value||(s("day"),e.value&&(u(e.value.getFullYear(),"years"),u(e.value.getMonth(),"months"))),n(!l.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Sv=(e,l)=>{let n=new Date;n.setDate(1),n.setMonth(l),n.setFullYear(e);let s=n.getDay();return s>=7?s-7:s},Av=(e,l)=>{let n,s;return l===0?(n=11,s=e-1):(n=l-1,s=e),32-new Date(s,n,32).getDate()},xn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function kv(){const e=H(!1),l=(y=!1)=>e.value=y,n=new Date;function s(y){if(!y)return;let S=y.getFullYear(),B=xn(y.getMonth()),_=y.getDate(),w=y.getHours(),k=y.getMinutes(),T=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let E=k.toString().padStart(2,"0");return`${B} ${_}, ${S} ${w}:${E} ${T}`}const u=H("default"),d=H("day");function m(y){d.value=y}const p=H(null),o=y=>{p.value=y},r=Kt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),f=(y,S)=>{switch(S){case"years":r.year=y;break;case"months":r.month=y;break;case"days":r.day=y;break;case"hours":r.hour=y;break;case"minutes":r.minute=y}},c=(y,S)=>{let B=new Date(r.year,r.month,r.day,r.hour);switch(S){case"years":B.setFullYear(B.getFullYear()+y);break;case"months":B.setMonth(B.getMonth()+y);break;case"days":B.setDate(B.getDate()+y);break;case"hours":B.setHours(B.getHours()+y);break}r.year=B.getFullYear(),r.month=B.getMonth(),r.day=B.getDate(),r.hour=B.getHours()},h=(y,S)=>{let B=new Date(r.year,r.month,r.day,r.hour);switch(S){case"years":B.setFullYear(B.getFullYear()-y);break;case"months":B.setMonth(B.getMonth()-y);break;case"days":B.setDate(B.getDate()-y);break;case"hours":B.setHours(B.getHours()-y);break}r.year=B.getFullYear(),r.month=B.getMonth(),r.day=B.getDate(),r.hour=B.getHours()},v=(y="default")=>y==="date"?`${xn(r.month)} ${r.year}`:`${xn(r.month)} ${r.day}, ${r.year}`,g=V(()=>{let y=r.month,S=r.year;y>11&&(y=y%11-1,S+=1);let B=[],_=Sv(S,y),w=32-new Date(S,y,32).getDate(),k=Av(S,y),T=1;for(let E=0;E<6;E++){let I=[];if(E===0){for(let D=k-_+1;D<=k;D++){let L=y===0?11:y-1,J=y===0?S-1:S;I.push({day:D,month:L,year:J,currentMonth:!1})}let F=7-I.length;for(let D=0;D<F;D++)I.push({day:T,month:y,year:S,currentMonth:!0}),T++}else for(let F=0;F<7;F++){if(T>w){let D=y===11?0:y+1,L=y===11?S+1:S;I.push({day:T-w,month:D,year:L,currentMonth:!1})}else I.push({day:T,month:y,year:S,currentMonth:!0});T++}B.push(I)}return B});return{visible:e,updateVisible:l,calendarDays:g,formatCalendarDate:s,selectMode:d,updateSelectMode:m,selectType:u,selectedDate:p,setSelectedDate:o,state:r,set:f,add:c,subtract:h,formatDate:v}}const hi=Symbol("useCalendar"),Wu=R({name:"SuiCalendar",directives:{clickoutside:co},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:l}){const n=kv();lt(hi,n);const{updateVisible:s,selectedDate:u}=n;return ot(u,d=>{l("update:modelValue",d)}),{updateVisible:s}},render(){return Zl(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(Cv,null,null),t("i",{class:"calendar icon"},null),t(wv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[Qa("clickoutside"),()=>this.updateVisible(!1)]])}}),Bv={install:e=>{e.component(Wu.name,Wu)}},Ku=R({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:l}){const n=V(()=>X("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),s=V(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:n,checked:s,onClick:u=>{if(e.disabled||e.readOnly)return;let d;e.value?s.value?d=e.modelValue.filter(m=>e.value!==m):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,l("change",u),l("click",u),l("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),$v={install(e){e.component(Ku.name,Ku)}},Xu=R({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:V(()=>X("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),De(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,l;return G("div",{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Qu=R({name:"SuiDimmerDimmable",components:{Segment:It},props:{blurring:Boolean},setup(e){return{computedClass:V(()=>X(A(e.blurring,"blurring"),"dimmable"))}},render(){var e,l;return G(It,{class:this.computedClass},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Tv={install(e){e.component(Xu.name,Xu),e.component(Qu.name,Qu)}},xv=(e,l)=>e.map(n=>n[l]),Ev=R({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:V(()=>X(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,l;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:m}=this.item;n=t(we,null,[d&&t("i",{class:`${d} flag`},null),m])}else n=this.item;else n=this.text||this.placeholder;const s=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,u=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return t(we,null,[t("div",{class:this.computedClass},[s&&t(St,s,null),u&&t(Dt,u,null),n]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:wt(()=>this.$emit("remove"),["stop"])},null)])}}),Rv=e=>{const l=Kt({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return ot(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function zv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const Zu=R({name:"SuiDropdown",directives:{clickoutside:co},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:l}){const n=Rv(e);lt("useDropdown",n);const{state:s,show:u,hide:d}=n,m=V(()=>X("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),ze(e.pointing,"pointing"),"dropdown",A(s.visible,"active visible"),A(s.direction==="up","upward"))),p=()=>{var S;if(s.visible)return d();(S=h.value)==null||S.focus(),u()},o=()=>{e.search&&h.value&&h.value.focus(),u()},r=()=>d(),f=H(""),c=V(()=>{const S=f.value.toLowerCase();return e.options.filter(B=>{const _=typeof B=="object"?B.text:B,w=_.toLowerCase().includes(S);if(!e.multiple)return w;if(Array.isArray(e.modelValue)){const k=typeof B=="object"?xv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return w&&!k}return w})}),h=H(null),v=S=>f.value=S.target.value,g=S=>{var B;if(f.value="",e.search&&((B=h.value)==null||B.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,S]:[S];return l("update:modelValue",_)}return l("update:modelValue",S)},y=S=>{if(Array.isArray(e.modelValue)){const B=e.modelValue.findIndex(_=>_===S);if(B>-1){let _=Object.assign(e.modelValue);_.splice(B,1),l("update:modelValue",_)}}};return lt("selection",e.selection),{computedClass:m,onClick:p,openMenu:o,closeMenu:r,filteredText:f,filteredOptions:c,inputRef:h,onInput:v,onSelect:g,removeItem:y}},render(){var e,l;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:wt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:wt(()=>this.removeItem(m),["stop"])},null)]))},s=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(vs,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),u=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Ev,Ni(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let m;return t(ys,{search:this.$props.searchInMenu,onSearch:this.onInput},zv(m=s())?m:{default:()=>[m]})};return Zl(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),u(),((l=(e=this.$slots).default)==null?void 0:l.call(e))||d()]),[[Qa("clickoutside"),this.closeMenu]])}}),vs=R({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:l}){const{state:n,hide:s}=Pe("useDropdown");return{computedClass:V(()=>X(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{n.multiple||s(),l("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:wt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(St,this.image,null),this.label&&t(Dt,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),ys=R({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:l,slots:n}){const{state:s}=Pe("useDropdown"),u=H(null),d=V(()=>{let p=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return X("menu","transition",A(s.visible,"visible"),A(!s.visible&&!s.animating,"hidden"),A(s.animating,p()))});ot(()=>s.visible,p=>{if(!p||!u.value)return;let o=u.value.parentElement;const{top:r,height:f}=o==null?void 0:o.getBoundingClientRect(),c=r-m.value.length*37,h=document.documentElement.clientHeight-r-f-m.value.length*37;s.direction=c>h?"up":"down"});const m=V(()=>{var p;let o=[],r=(p=n.default)==null?void 0:p.call(n);return r&&r.forEach(f=>{f.type.name==="SuiSelectItem"&&o.push(f)}),o});return{container:u,computedClass:d,onSearchInput:p=>l("search",p)}},render(){var e,l,n,s;const u=()=>t(we,null,[t("div",{class:"ui left icon input",onClick:wt(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(l=(e=this.$slots).header)==null?void 0:l.call(e)]),this.$props.search&&u(),(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Dv={install(e){e.component(Zu.name,Zu),e.component(vs.name,vs),e.component(ys.name,ys)}},ed=R({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const l=H(e.active),n=()=>{l.value=!l.value},s=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,u=V(()=>X("ui",e.aspectRatio,A(l.value,"active"),"embed"));return{active:l,getSrc:s,clickHandler:n,computedClass:u}},render(){let e=[G("i",{class:"video play icon"}),G("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(G("div",{class:"embed"},G("iframe",{src:this.getSrc()}))),G("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Pv={install(e){e.component(ed.name,ed)}};function Mv(e){return Ps()?(Pd(e),!0):!1}function Lm(e){return typeof e=="function"?e():$(e)}const Om=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Iv=Object.prototype.toString,Fv=e=>Iv.call(e)==="[object Object]",ya=()=>{},Vv=Nv();function Nv(){var e,l;return Om&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((l=window==null?void 0:window.navigator)==null?void 0:l.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Al(e){var l;const n=Lm(e);return(l=n==null?void 0:n.$el)!=null?l:n}const Hm=Om?window:void 0;function En(...e){let l,n,s,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,u]=e,l=Hm):[l,n,s,u]=e,!l)return ya;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const d=[],m=()=>{d.forEach(f=>f()),d.length=0},p=(f,c,h,v)=>(f.addEventListener(c,h,v),()=>f.removeEventListener(c,h,v)),o=ot(()=>[Al(l),Lm(u)],([f,c])=>{if(m(),!f)return;const h=Fv(c)?{...c}:c;d.push(...n.flatMap(v=>s.map(g=>p(f,v,g,h))))},{immediate:!0,flush:"post"}),r=()=>{o(),m()};return Mv(r),r}let td=!1;function Lv(e,l,n={}){const{window:s=Hm,ignore:u=[],capture:d=!0,detectIframe:m=!1}=n;if(!s)return ya;Vv&&!td&&(td=!0,Array.from(s.document.body.children).forEach(f=>f.addEventListener("click",ya)),s.document.documentElement.addEventListener("click",ya));let p=!0;const o=f=>u.some(c=>{if(typeof c=="string")return Array.from(s.document.querySelectorAll(c)).some(h=>h===f.target||f.composedPath().includes(h));{const h=Al(c);return h&&(f.target===h||f.composedPath().includes(h))}}),r=[En(s,"click",f=>{const c=Al(e);if(!(!c||c===f.target||f.composedPath().includes(c))){if(f.detail===0&&(p=!o(f)),!p){p=!0;return}l(f)}},{passive:!0,capture:d}),En(s,"pointerdown",f=>{const c=Al(e);p=!o(f)&&!!(c&&!f.composedPath().includes(c))},{passive:!0}),m&&En(s,"blur",f=>{setTimeout(()=>{var c;const h=Al(e);((c=s.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&l(f)},0)})].filter(Boolean);return()=>r.forEach(f=>f())}function jm(e,l="scale"){const n=H(e.modelValue?"open":"closed");return ot(()=>e.modelValue,s=>{n.value=s?"opening":"closing"}),{animationClasses:V(()=>{switch(n.value){case"opening":return`animating ${l} in`;case"open":return"visible active";case"closing":return`visible active animating ${l} out`;case"closed":return"hidden"}}),isClosed:V(()=>n.value==="closed"),onAnimationEnd:()=>n.value=e.modelValue?"open":"closed"}}const Ov=R({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:l,isClosed:n,onAnimationEnd:s}=jm(e,"fade"),u=V(()=>X("ui","page modals dimmer transition",A(e.inverted,"inverted"),l.value)),d=V(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),m=V(()=>X("dimmable","dimmed",A(e.blurring,"blurring")));return ot(()=>e.modelValue,p=>{if(p){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:u,style:d,onAnimationEnd:s}},render(){var e,l;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),id=R({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:l}){const n=H(),{animationClasses:s,isClosed:u}=jm(e),d=V(()=>X("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",s.value)),m=V(()=>({display:u.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>l("update:modelValue",!1);return Lv(n,()=>e.closable&&l("update:modelValue",!1)),{computedClass:d,style:m,close:p,modalRef:n}},render(){return t(an,{to:"body"},{default:()=>[t(Ov,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,l;return[t("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(e=this.$slots).default)==null?void 0:l.call(e)])]}})]})}}),ld=R({name:"SuiModalActions",render(){var e,l;return t("div",{class:"actions"},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),ad=R({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:V(()=>X(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),nd=R({name:"SuiModalDescription",render(){var e,l;return G("div",{class:"description"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),sd=R({name:"SuiModalHeader",render(){var e,l;return G("div",{class:"header"},(l=(e=this.$slots).default)==null?void 0:l.call(e))}}),Hv={install(e){e.component(id.name,id),e.component(ld.name,ld),e.component(ad.name,ad),e.component(nd.name,nd),e.component(sd.name,sd)}},jv=e=>{const l=H(!1),n=jn(e,"position"),s=H(null),u=jn(e,"trigger"),d=()=>{l.value=!0,ml(()=>p())},m=()=>{l.value=!1},p=()=>{if(!s.value||!u.value)return;let o=0,r=0;const f=s.value,c=u.value.$el;f.style.transform=`translate(${o}px, ${r}px)`;const{top:h,left:v,width:g,height:y}=c.getBoundingClientRect(),S=f.getBoundingClientRect(),{pageXOffset:B,pageYOffset:_}=window;if(n.value.includes("top")?(o=B+v,r=_+h-f.offsetTop-f.offsetHeight):(o=v,r=h+y-S.top),n.value.includes("right")){const w=g-S.width;o=v+w}if(n.value.includes("center")){const w=g/2-S.width/2;o=v+w}n.value==="right center"&&(o=v+g,r=h+y/2-S.top-S.height/2),n.value==="left center"&&(o=v-S.width,r=h+y/2-S.top-S.height/2),f.style.display="flex",f.style.position="absolute",f.style.transform=`translate(${o}px, ${r}px)`};return{show:l,showPopup:d,hidePopup:m,placement:n,popupRef:s,triggerRef:u}},od=R({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:l}){const{show:n,showPopup:s,hidePopup:u,popupRef:d,triggerRef:m}=jv(e);Ws(()=>{var h,v,g;(h=m.value)!=null&&h.$el&&((v=m.value)==null||v.$el.addEventListener("mouseenter",s),(g=m.value)==null||g.$el.addEventListener("mouseleave",u))});const p=H(n.value?"open":"close");V(()=>p.value!=="closed"),ot(()=>n.value,h=>{p.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},r=()=>p.value=n.value?"open":"closed";gi(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",r,!0)}),Vi(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",r)});const f={position:"initial",animationDuration:"200ms"},c=V(()=>X("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),ze(e.wide,"wide"),"popup transition",o(p.value,"scale")));return()=>t(an,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:c.value,style:f},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=l.default)==null?void 0:h.call(l)])])])]}})}}),qv={install(e){e.component(od.name,od)}},Uv=["top","bottom","left"],mo=()=>({attached:{type:String,validator:e=>Uv.includes(e)}}),qm=e=>({attachedClasses:V(()=>X(e.attached,{attached:e.attached}))}),Gv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Um=()=>({color:{type:String,validator:e=>Gv.includes(e)}}),Gm=e=>({colorClasses:V(()=>X(e.inverted&&"inverted",e.color))}),Na=R({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...mo(),...Um()},setup(e){const{attachedClasses:l}=qm(e),{colorClasses:n}=Gm(e),s=V(()=>X("ui",n.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),l.value,"progress")),u=V(()=>X(ze(e.progress,"progress"))),d=V(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:u.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),Yv={install(e){e.component(Na.name,Na)}},Jv=R({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const l=Pe("rating",H(0)),n=Pe("updateRating"),s=Pe("selectedIndex",H(0)),u=Pe("updateSelectedIndex"),d=Pe("clearable",!1),m=Pe("disabled",!1),p=()=>{if(!m){if(d&&e.index===l.value){n(0),u(0);return}n(e.index)}},o=()=>{m||u(e.index)},r=V(()=>e.index<=l.value),f=V(()=>e.index<=s.value),c=V(()=>X(e.icon,A(r.value,"active"),A(f.value,"selected"),"icon"));return()=>t("i",{class:c.value,onClick:()=>p(),onMouseenter:()=>o()},null)}}),rd=R({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:l}){const n=H(e.modelValue||e.defaultRating),s=H(!1),u=H(0),d=f=>{n.value=f,l("update:modelValue",f),l("change",f)},m=f=>u.value=f,p=()=>{e.disabled||(s.value=!0)},o=()=>{e.disabled||(s.value=!1,m(0))},r=V(()=>X("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(s.value,"selected")));return lt("rating",n),lt("updateRating",d),lt("selectedIndex",u),lt("updateSelectedIndex",m),lt("clearable",e.clearable),lt("disabled",e.disabled),()=>t("div",{class:r.value,onMouseenter:()=>p(),onMouseleave:()=>o()},[[...Array(e.maxRating)].map((f,c)=>t(Jv,{icon:e.icon,index:c+1},null))])}}),Wv={install(e){e.component(rd.name,rd)}},ud=R({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Kv={install(e){e.component(ud.name,ud)}},dd=R({name:"SuiSidebar",directives:{clickoutside:co},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:l}){const n=Kt({animating:!1}),s=V(()=>{const u=e.direction==="right"||e.direction==="left";return X("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(n.animating,"animating"),A(u,"vertical"),ze(e.icon,"icon"),"menu")});return ot(()=>e.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),e.dimmed){const u=document.querySelector(".pusher");u&&u.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:u=>{const d=u.path||u.composedPath&&u.composedPath();d&&d.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&l("update:visible",!1)}}},render(){var e,l;return Zl(t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)]),[[Qa("clickoutside"),this.onClickPusher]])}}),Xv={install:e=>{e.component(dd.name,dd)}};class Rn{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,n){return l.classList.contains(n)}}const cd=R({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:l}){const n=V(()=>X("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),ze(e.labeled,"labeled"),"slider")),s=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),u=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=V(()=>{if(e.range)return e.reversed&&!e.vertical?{right:s()+"%",width:u()-s()+"%"}:e.vertical?e.reversed?{bottom:s()+"%",height:u()-s()+"%"}:{top:s()+"%",height:u()-s()+"%"}:{left:s()+"%",width:u()-s()+"%"};let O=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(O-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(O-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(O-e.min)/(e.max-e.min)*100}%`}}),m=V(()=>{let O=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),p=V(()=>{let O=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(O-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),o=V(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((O,Y)=>Y*e.step+e.min)),r=()=>{var O,Y;let re=1,ee=f(),$e=(e.vertical?(O=h.value)==null?void 0:O.clientHeight:(Y=h.value)==null?void 0:Y.clientWidth)||0,qe=1;if($e>0)for(;$e/ee*qe<100;)ee%qe||(re=qe),qe+=1;return re},f=()=>Math.round((e.max-e.min)/e.step),c=H(null),h=H(null),v=H(0),g=H(0),y=H(0),S=H(0),B=()=>{if(!c.value)return;let O=c.value.getBoundingClientRect();v.value=O.left+Rn.getWindowScrollLeft(),g.value=O.top+Rn.getWindowScrollTop(),y.value=c.value.offsetWidth,S.value=c.value.offsetHeight},_=H(0),w=O=>{let{pageX:Y,pageY:re}=O.touches?O.touches[0]:O,ee,$e;e.vertical?ee=(g.value+S.value-re)*100/S.value:ee=(Y-v.value)*100/y.value,$e=(e.max-e.min)*(ee/100)+e.min;const qe=e.range?e.modelValue[_.value]:e.modelValue||0;$e=qe+Math.round($e/e.step-qe/e.step)*e.step,e.reversed&&($e=e.max-$e+e.min),e.vertical&&($e=e.max-$e+e.min),k($e)},k=O=>{let Y=O,re;if(e.range)if(re=e.modelValue?[...e.modelValue]:[],_.value===0){let ee=e.modelValue?e.modelValue[1]:e.max;Y<e.min?Y=e.min:Y>ee&&(Y=ee),re[0]=Y,re[1]=re[1]||e.max}else{let ee=e.modelValue?e.modelValue[0]:e.min;Y>e.max?Y=e.max:Y<ee&&(Y=ee),re[0]=re[0]||e.min,re[1]=Y}else Y<e.min&&(Y=e.min),Y>e.max&&(Y=e.max),re=Y;l("update:modelValue",re),l("change",re)},T=H(!1),E=O=>T.value=O,I=(O,Y=0)=>{E(!0),B(),_.value=Y,O.preventDefault()},F=O=>{T.value&&(E(!1),document.removeEventListener("mousemove",D),l("slideend",{event:O,value:e.modelValue}))},D=O=>{T.value&&(w(O),O==null||O.preventDefault())},L=(O,Y=0)=>{e.disabled||(I(O,Y),document.addEventListener("mousemove",D),document.addEventListener("mouseup",F),O.preventDefault())},J=(O,Y=0)=>{switch(_.value=Y,O.code){case"ArrowUp":e.vertical&&(e.reversed?q():de()),O.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?de():q()),O.preventDefault();break;case"ArrowRight":e.reversed?de():q(),O.preventDefault();break;case"ArrowLeft":e.reversed?q():de(),O.preventDefault();break}},q=()=>{let O=0;e.range?O=e.modelValue[_.value]+e.step:O=e.modelValue+e.step,k(O)},de=()=>{let O=0;e.range?O=e.modelValue[_.value]-e.step:O=e.modelValue-e.step,k(O)},ke=O=>{if(!e.disabled&&!Rn.hasClass(O.target,"thumb")){if(e.range){let Y=(e.vertical?O.offsetY/O.target.clientHeight:O.offsetX/O.target.clientWidth)*100,re=(s()+u())/2;Y<re?_.value=e.reversed?1:0:_.value=e.reversed?0:1}B(),w(O)}};return()=>t("div",{ref:O=>c.value=O,class:n.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:ke},[t("div",{class:"track",ref:O=>h.value=O},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:m.value,onMousedown:O=>L(O),onTouchstart:O=>I(O),onTouchmove:O=>D(O),onTouchend:O=>F(O),onKeydown:O=>J(O),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:p.value,onMousedown:O=>L(O,1),onTouchstart:O=>I(O,1),onTouchmove:O=>D(O),onTouchend:O=>F(O),onKeydown:O=>J(O,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(f()+1)].map((O,Y)=>{let re=Y/f();return Y%r()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${re} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${re} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[f()-Y]:o.value[f()-Y]:e.labels?e.labels[Y]:o.value[Y]])})])])}}),Qv={install(e){e.component(cd.name,cd)}},Cs=R({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:V(()=>X("ui tab segment",A(e.active,"active"),ze(e.attached,"attached")))}},render(){var e,l;return t("div",{class:this.computedClass},[(l=(e=this.$slots).default)==null?void 0:l.call(e)])}}),md=R({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:l,slots:n}){const s=H(e.activeIndex);ot(()=>e.activeIndex,r=>{s.value=r});const u=(r,f)=>{s.value!==f&&(s.value=f,l("update:activeIndex",f),l("tab-change",{event:r,index:f})),l("tab-click",{event:r,index:f})},d=(r,f)=>{r.key==="Enter"&&u(r,f)},m=V(()=>{var r,f;let c=[];return(r=n.default)!=null&&r.call(n)&&((f=n.default)==null||f.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),p=V(()=>!e.secondary&&!e.pointing&&!e.text),o=V(()=>X("ui menu",A(p.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:u,onKeyDown:d,tabIndex:s,tabs:m,tabMenuClass:o,isDefaultMenu:p}},render(){const e=()=>this.tabs.map((n,s)=>t("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:u=>this.onClick(u,s),onKeydown:u=>this.onKeyDown(u,s),tabindex:0},[n.props.header])),l=()=>this.tabs.map((n,s)=>t(Cs,Ni(n.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var u,d;return[(d=(u=n.children).default)==null?void 0:d.call(u)]}}));return t(we,null,[t("div",{class:this.tabMenuClass},[e()]),l()])}}),Zv={install(e){e.component(md.name,md),e.component(Cs.name,Cs)}};function e1(e,l){e.indexOf(l)===-1&&e.push(l)}const Ym=(e,l,n)=>Math.min(Math.max(n,e),l),$t={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},La=e=>typeof e=="number",Xi=e=>Array.isArray(e)&&!La(e[0]),t1=(e,l,n)=>{const s=l-e;return((n-e)%s+s)%s+e};function i1(e,l){return Xi(e)?e[t1(0,e.length,l)]:e}const Jm=(e,l,n)=>-n*e+n*l+e,Wm=()=>{},mi=e=>e,po=(e,l,n)=>l-e===0?1:(n-e)/(l-e);function Km(e,l){const n=e[e.length-1];for(let s=1;s<=l;s++){const u=po(0,l,s);e.push(Jm(n,1,u))}}function l1(e){const l=[0];return Km(l,e-1),l}function a1(e,l=l1(e.length),n=mi){const s=e.length,u=s-l.length;return u>0&&Km(l,u),d=>{let m=0;for(;m<s-2&&!(d<l[m+1]);m++);let p=Ym(0,1,po(l[m],l[m+1],d));return p=i1(n,m)(p),Jm(e[m],e[m+1],p)}}const Xm=e=>Array.isArray(e)&&La(e[0]),ws=e=>typeof e=="object"&&!!e.createAnimation,ul=e=>typeof e=="function",n1=e=>typeof e=="string",Il={ms:e=>e*1e3,s:e=>e/1e3},Qm=(e,l,n)=>(((1-3*n+3*l)*e+(3*n-6*l))*e+3*l)*e,s1=1e-7,o1=12;function r1(e,l,n,s,u){let d,m,p=0;do m=l+(n-l)/2,d=Qm(m,s,u)-e,d>0?n=m:l=m;while(Math.abs(d)>s1&&++p<o1);return m}function kl(e,l,n,s){if(e===l&&n===s)return mi;const u=d=>r1(d,0,1,e,n);return d=>d===0||d===1?d:Qm(u(d),l,s)}const u1=(e,l="end")=>n=>{n=l==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*e,u=l==="end"?Math.floor(s):Math.ceil(s);return Ym(0,1,u/e)},pd={ease:kl(.25,.1,.25,1),"ease-in":kl(.42,0,1,1),"ease-in-out":kl(.42,0,.58,1),"ease-out":kl(0,0,.58,1)},d1=/\((.*?)\)/;function fd(e){if(ul(e))return e;if(Xm(e))return kl(...e);if(pd[e])return pd[e];if(e.startsWith("steps")){const l=d1.exec(e);if(l){const n=l[1].split(",");return u1(parseFloat(n[0]),n[1].trim())}}return mi}class Zm{constructor(l,n=[0,1],{easing:s,duration:u=$t.duration,delay:d=$t.delay,endDelay:m=$t.endDelay,repeat:p=$t.repeat,offset:o,direction:r="normal",autoplay:f=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=mi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),s=s||$t.easing,ws(s)){const h=s.createAnimation(n);s=h.easing,n=h.keyframes||n,u=h.duration||u}this.repeat=p,this.easing=Xi(s)?mi:fd(s),this.updateDuration(u);const c=a1(n,o,Xi(s)?s.map(fd):mi);this.tick=h=>{var v;d=d;let g=0;this.pauseTime!==void 0?g=this.pauseTime:g=(h-this.startTime)*this.rate,this.t=g,g/=1e3,g=Math.max(g-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(g=this.totalDuration);const y=g/this.duration;let S=Math.floor(y),B=y%1;!B&&y>=1&&(B=1),B===1&&S--;const _=S%2;(r==="reverse"||r==="alternate"&&_||r==="alternate-reverse"&&!_)&&(B=1-B);const w=g>=this.totalDuration?1:Math.min(B,1),k=c(this.easing(w));l(k),this.pauseTime===void 0&&(this.playState==="finished"||g>=this.totalDuration+m)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,k)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},f&&this.play()}play(){const l=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=l-this.pauseTime:this.startTime||(this.startTime=l),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var l;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(l=this.reject)===null||l===void 0||l.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(l){this.duration=l,this.totalDuration=l*(this.repeat+1)}get currentTime(){return this.t}set currentTime(l){this.pauseTime!==void 0||this.rate===0?this.pauseTime=l:this.startTime=performance.now()-l/this.rate}get playbackRate(){return this.rate}set playbackRate(l){this.rate=l}}class c1{setAnimation(l){this.animation=l,l==null||l.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const zn=new WeakMap;function ep(e){return zn.has(e)||zn.set(e,{transforms:[],values:new Map}),zn.get(e)}function m1(e,l){return e.has(l)||e.set(l,new c1),e.get(l)}const p1=["","X","Y","Z"],f1=["translate","scale","rotate","skew"],Oa={x:"translateX",y:"translateY",z:"translateZ"},gd={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},g1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:gd,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:mi},skew:gd},Yl=new Map,fo=e=>`--motion-${e}`,Ha=["x","y","z"];f1.forEach(e=>{p1.forEach(l=>{Ha.push(e+l),Yl.set(fo(e+l),g1[e])})});const h1=(e,l)=>Ha.indexOf(e)-Ha.indexOf(l),_1=new Set(Ha),tp=e=>_1.has(e),b1=(e,l)=>{Oa[l]&&(l=Oa[l]);const{transforms:n}=ep(e);e1(n,l),e.style.transform=v1(n)},v1=e=>e.sort(h1).reduce(y1,"").trim(),y1=(e,l)=>`${e} ${l}(var(${fo(l)}))`,Ss=e=>e.startsWith("--"),hd=new Set;function C1(e){if(!hd.has(e)){hd.add(e);try{const{syntax:l,initialValue:n}=Yl.has(e)?Yl.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:l,initialValue:n})}catch{}}}const Dn=(e,l)=>document.createElement("div").animate(e,l),_d={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Dn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Dn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Dn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Pn={},qi={};for(const e in _d)qi[e]=()=>(Pn[e]===void 0&&(Pn[e]=_d[e]()),Pn[e]);const w1=.015,S1=(e,l)=>{let n="";const s=Math.round(l/w1);for(let u=0;u<s;u++)n+=e(po(0,s-1,u))+", ";return n.substring(0,n.length-2)},bd=(e,l)=>ul(e)?qi.linearEasing()?`linear(${S1(e,l)})`:$t.easing:Xm(e)?A1(e):e,A1=([e,l,n,s])=>`cubic-bezier(${e}, ${l}, ${n}, ${s})`;function k1(e,l){for(let n=0;n<e.length;n++)e[n]===null&&(e[n]=n?e[n-1]:l());return e}const B1=e=>Array.isArray(e)?e:[e];function As(e){return Oa[e]&&(e=Oa[e]),tp(e)?fo(e):e}const ga={get:(e,l)=>{l=As(l);let n=Ss(l)?e.style.getPropertyValue(l):getComputedStyle(e)[l];if(!n&&n!==0){const s=Yl.get(l);s&&(n=s.initialValue)}return n},set:(e,l,n)=>{l=As(l),Ss(l)?e.style.setProperty(l,n):e.style[l]=n}};function ip(e,l=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(l&&e.commitStyles(),e.cancel())}catch{}}function $1(e,l){var n;let s=(l==null?void 0:l.toDefaultUnit)||mi;const u=e[e.length-1];if(n1(u)){const d=((n=u.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";d&&(s=m=>m+d)}return s}function T1(){return window.__MOTION_DEV_TOOLS_RECORD}function x1(e,l,n,s={},u){const d=T1(),m=s.record!==!1&&d;let p,{duration:o=$t.duration,delay:r=$t.delay,endDelay:f=$t.endDelay,repeat:c=$t.repeat,easing:h=$t.easing,persist:v=!1,direction:g,offset:y,allowWebkitAcceleration:S=!1,autoplay:B=!0}=s;const _=ep(e),w=tp(l);let k=qi.waapi();w&&b1(e,l);const T=As(l),E=m1(_.values,T),I=Yl.get(T);return ip(E.animation,!(ws(h)&&E.generator)&&s.record!==!1),()=>{const F=()=>{var J,q;return(q=(J=ga.get(e,T))!==null&&J!==void 0?J:I==null?void 0:I.initialValue)!==null&&q!==void 0?q:0};let D=k1(B1(n),F);const L=$1(D,I);if(ws(h)){const J=h.createAnimation(D,l!=="opacity",F,T,E);h=J.easing,D=J.keyframes||D,o=J.duration||o}if(Ss(T)&&(qi.cssRegisterProperty()?C1(T):k=!1),w&&!qi.linearEasing()&&(ul(h)||Xi(h)&&h.some(ul))&&(k=!1),k){I&&(D=D.map(de=>La(de)?I.toDefaultUnit(de):de)),D.length===1&&(!qi.partialKeyframes()||m)&&D.unshift(F());const J={delay:Il.ms(r),duration:Il.ms(o),endDelay:Il.ms(f),easing:Xi(h)?void 0:bd(h,o),direction:g,iterations:c+1,fill:"both"};p=e.animate({[T]:D,offset:y,easing:Xi(h)?h.map(de=>bd(de,o)):void 0},J),p.finished||(p.finished=new Promise((de,ke)=>{p.onfinish=de,p.oncancel=ke}));const q=D[D.length-1];p.finished.then(()=>{v||(ga.set(e,T,q),p.cancel())}).catch(Wm),S||(p.playbackRate=1.000001)}else if(u&&w)D=D.map(J=>typeof J=="string"?parseFloat(J):J),D.length===1&&D.unshift(parseFloat(F())),p=new u(J=>{ga.set(e,T,L?L(J):J)},D,Object.assign(Object.assign({},s),{duration:o,easing:h}));else{const J=D[D.length-1];ga.set(e,T,I&&La(J)?I.toDefaultUnit(J):J)}return m&&d(e,l,D,{duration:o,delay:r,easing:h,repeat:c,offset:y},"motion-one"),E.setAnimation(p),p&&!B&&p.pause(),p}}const E1=(e,l)=>e[l]?Object.assign(Object.assign({},e),e[l]):Object.assign({},e);function R1(e,l){var n;return typeof e=="string"?l?((n=l[e])!==null&&n!==void 0||(l[e]=document.querySelectorAll(e)),e=l[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const z1=e=>e(),lp=(e,l,n=$t.duration)=>new Proxy({animations:e.map(z1).filter(Boolean),duration:n,options:l},P1),D1=e=>e.animations[0],P1={get:(e,l)=>{const n=D1(e);switch(l){case"duration":return e.duration;case"currentTime":return Il.s((n==null?void 0:n[l])||0);case"playbackRate":case"playState":return n==null?void 0:n[l];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(M1)).catch(Wm)),e.finished;case"stop":return()=>{e.animations.forEach(s=>ip(s))};case"forEachNative":return s=>{e.animations.forEach(u=>s(u,e))};default:return typeof(n==null?void 0:n[l])>"u"?void 0:()=>e.animations.forEach(s=>s[l]())}},set:(e,l,n)=>{switch(l){case"currentTime":n=Il.ms(n);case"playbackRate":for(let s=0;s<e.animations.length;s++)e.animations[s][l]=n;return!0}return!1}},M1=e=>e.finished;function I1(e,l,n){return ul(e)?e(l,n):e}function F1(e){return function(l,n,s={}){l=R1(l);const u=l.length,d=[];for(let m=0;m<u;m++){const p=l[m];for(const o in n){const r=E1(s,o);r.delay=I1(r.delay,m,u);const f=x1(p,o,n[o],r,e);d.push(f)}}return lp(d,s,s.duration)}}const V1=F1(Zm);function N1(e,l={}){return lp([()=>{const n=new Zm(e,[0,1],l);return n.finished.catch(()=>{}),n}],l,l.duration)}function L1(e,l,n){return(ul(e)?N1:V1)(e,l,n)}const fe=(e,l)=>(n,{duration:s,keyframesOverride:u={}})=>L1(n,{...e,...u},{autoplay:!1,...l,duration:s}),vd=fe({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),O1=fe({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),H1=fe({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),j1=fe({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),q1=fe({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),U1=fe({opacity:[0,1]},{duration:.5,offset:[0,1]}),G1=fe({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Y1=fe({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),J1=fe({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),W1=fe({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),K1=fe({opacity:[1,0]},{duration:.5,offset:[0,1]}),X1=fe({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),Q1=fe({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),Z1=fe({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),ey=fe({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),ty=fe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),iy=fe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ly=fe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ay=fe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),ny=fe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),sy=fe({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),oy=fe({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),ry=fe({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),uy=fe({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),dy=fe({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),cy=fe({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),my=fe({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),py=fe({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),fy=fe({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),gy=fe({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),hy=fe({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),ap={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},np={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},sp={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},_y={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},by=fe({transformOrigin:"top center",...ap},{offset:[0,1]}),vy=fe({transformOrigin:"bottom center",...ap},{offset:[0,1]}),yy=fe({transformOrigin:"center right",...np},{offset:[0,1]}),Cy=fe({transformOrigin:"center left",...np},{offset:[0,1]}),wy=fe({transformOrigin:"top center",...sp},{offset:[0,1]}),Sy=fe({transformOrigin:"bottom center",...sp},{offset:[0,1]}),yd=fe({transformOrigin:"center left",..._y},{offset:[0,1]}),_i=.8,Qi={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},Zi={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},el={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},tl={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ay=fe({transformOrigin:"top center",transform:Qi.transform,opacity:Qi.opacity},{duration:_i,offset:Qi.offset}),ky=fe({transformOrigin:"bottom center",transform:Qi.transform,opacity:Qi.opacity},{duration:_i,offset:Qi.offset}),By=fe({transformOrigin:"center right",transform:Zi.transform,opacity:Zi.opacity},{duration:_i,offset:Zi.offset}),$y=fe({transformOrigin:"center left",transform:Zi.transform,opacity:Zi.opacity},{duration:_i,offset:Zi.offset}),Ty=fe({transformOrigin:"top center",transform:el.transform,opacity:el.opacity},{duration:_i,offset:el.offset}),xy=fe({transformOrigin:"bottom center",transform:el.transform,opacity:el.opacity},{duration:_i,offset:el.offset}),Ey=fe({transformOrigin:"center right",transform:tl.transform,opacity:tl.opacity},{duration:_i,offset:tl.offset}),Ry=fe({transformOrigin:"center left",transform:tl.transform,opacity:tl.opacity},{duration:_i,offset:tl.offset}),zy=fe({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Dy=fe({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Py=fe({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),My=fe({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Iy=fe({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),Fy=fe({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Vy=fe({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Ny=fe({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Ly=fe({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Oy={browse:[vd,O1],"browse right":[vd,H1],drop:[j1,q1],fade:[U1,K1],"fade up":[G1,X1],"fade down":[Y1,Q1],"fade left":[J1,Z1],"fade right":[W1,ey],fly:[ty,sy],"fly up":[iy,oy],"fly down":[ly,ry],"fly left":[ay,uy],"fly right":[ny,dy],"horizontal flip":[cy,my],"vertical flip":[py,fy],scale:[gy,hy],"slide up":[vy,Sy],"slide down":[by,wy],"slide left":[yy,yd],"slide right":[Cy,yd],"swing up":[ky,xy],"swing down":[Ay,Ty],"swing left":[By,Ey],"swing right":[$y,Ry],zoom:[zy,Dy]},Hy={bounce:[Py,void 0],flash:[My,void 0],glow:[Iy,void 0],jiggle:[Fy,void 0],pulse:[Vy,void 0],shake:[Ny,void 0],tada:[Ly,void 0]},op=e=>({...Oy,...Hy})[e],jy=e=>{const[l,n]=op(e.animation),s=V(()=>e.duration?e.duration/1e3:.5),u=V(()=>(m,p)=>{if(!l)return p();const o=l(m,{duration:s.value});o.play(),o.finished.then(p)}),d=V(()=>(m,p)=>{if(!n)return p();const o=n(m,{duration:s.value});o.play(),o.finished.then(p)});return{onEnter:u,onLeave:d}},ks=R({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:l,onLeave:n}=jy(e);return{onEnter:l,onLeave:n}},render(){return t(on,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})}}),Bs=R({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[l,n]=op(e.animation),s=V(()=>(d,m)=>{if(!l)return m();const p=l(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});p.play(),p.finished.then(m)}),u=V(()=>(d,m)=>{if(!n)return m();const p=n(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});p.play(),p.finished.then(m)});return{onEnter:s,onLeave:u}},render(){return t(rm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,l;return[(l=(e=this.$slots).default)==null?void 0:l.call(e)]}})}}),qy={install(e){e.component(ks.name,ks),e.component(Bs.name,Bs)}},Uy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:cv,Calendar:Bv,Checkbox:$v,Dimmer:Tv,Dropdown:Dv,Embed:Pv,Modal:Hv,Popup:qv,Progress:Yv,Rating:Wv,Search:Kv,Sidebar:Xv,Slider:Qv,Tab:Zv,Transition:qy},Symbol.toStringTag,{value:"Module"})),Mn=R({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...mo()},setup(e,{slots:l}){const n=V(()=>X("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var s;return e.attached?t(nt,{attached:e.attached,vertical:e.vertical},{default:()=>{var u;return[(u=l.default)==null?void 0:u.call(l)]}}):t("div",{class:n.value},[(s=l.default)==null?void 0:s.call(l)])}}}),Gy=R({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:l}){const n=V(()=>X("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var s,u;return e.verticalAttached?t("div",{class:n.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(s=l.default)==null?void 0:s.call(l)])]):t("div",{class:n.value,style:"display: block !important;"},[(u=l.default)==null?void 0:u.call(l)])}}});function In(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const Yy=R({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Um()},setup(e,{emit:l}){const{colorClasses:n}=Gm(e),s=V(()=>{var m,p,o,r,f;return X(e.centered&&"center aligned",e.type||"neutral",n.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((p=e.actionsProps)==null?void 0:p.attached)==="top"&&"bottom attached",((o=e.actionsProps)==null?void 0:o.attached)==="bottom"&&"top attached",((r=e.actionsProps)==null?void 0:r.attached)==="left"&&"left attached",((f=e.actionsProps)==null?void 0:f.vertical)&&"vertical","compact")}),u=H(e.showProgressUp?0:100),d=()=>{const m=e.displayTime/100;setTimeout(()=>{const p=setInterval(()=>{if(e.showProgressUp){u.value>=100&&clearInterval(p),u.value+=1;return}u.value<=0&&clearInterval(p),u.value-=1},m)},500)};return gi(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&l("close"),e.displayTime+750),{classes:s,progress:u}},render(){var e;let l,n,s;return t(Gy,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var u,d,m,p;return[this.showProgress==="top"&&t(Na,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((u=this.actionsProps)==null?void 0:u.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(Mn,this.actionsProps,In(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Mn,this.actionsProps,In(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((p=this.actionsProps)==null?void 0:p.attached)==="bottom"&&t(Mn,this.actionsProps,In(s=this.actions({close:()=>this.$emit("close")}))?s:{default:()=>[s]}),this.showProgress==="bottom"&&t(Na,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),Jy=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],Wy=({defaultValue:e}={})=>({position:{type:String,validator:l=>Jy.includes(l),default:e}}),Ky=e=>({positionClasses:V(()=>e.position||"")});function Xy(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}const Qy=R({name:"SuiToastContainer",props:{horizontal:Boolean,...mo(),...Wy({defaultValue:"top right"})},setup(e){const{items:l,remove:n}=rp(),{attachedClasses:s}=qm(e),{positionClasses:u}=Ky(e);return{classes:V(()=>X(s.value||u.value,"ui toast-container",e.horizontal&&"horizontal")),items:l,remove:n,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[0,`${d.offsetHeight}px`],p=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:m,marginBottom:p}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[`${d.offsetWidth}px`,0],p=[`${d.offsetHeight}px`,0],o=e.horizontal?{width:m}:{height:p},r=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...o,marginBottom:r}}}},render(){let e;return t(an,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Bs,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},Xy(e=this.items.filter(({position:l,attached:n})=>this.attached?n===this.attached:l===this.position).filter(({horizontal:l})=>this.horizontal===!!l).map(({id:l,...n})=>t(Yy,Ni({key:l},n,{onClick:()=>this.remove(l),onClose:()=>this.remove(l)}),null)))?e:{default:()=>[e]})])]})}}),Zy=H(1),Cl=H([]),rp=()=>({items:Cl,add:e=>{e.position=e.position||"top right",Cl.value=[...Cl.value,{id:Zy.value++,...e}]},remove:e=>{Cl.value=Cl.value.filter(l=>l.id!==e)}}),tt=()=>{var e;const l=(e=Ht())==null?void 0:e.appContext,{add:n}=rp();return{toast:s=>{const{position:u,attached:d,horizontal:m}=s;iC({position:u,attached:d,horizontal:m})||tC(l,{position:u,attached:d,horizontal:m}),n(s)}}},eC=(e,{appContext:l,element:n}={})=>{const s=n||document.createElement("div");return l&&(e.appContext=l),za(e,s),{vNode:e,el:s}},tC=(e,{position:l="top right",attached:n,horizontal:s=!1}={})=>{const u=G(Qy,{position:l,attached:n,horizontal:s}),{el:d}=eC(u,{appContext:e});return{vNode:u,el:d}},iC=({position:e="top right",attached:l,horizontal:n})=>{const s=l?`.ui.toast-container.${l}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(s)};function lC(e){Object.values({...Wb,...lv,...dv,...Uy}).map(l=>e.use(l))}const aC={install:lC},nC=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const l=zm(),n=V(()=>{const u=l.currentRoute.value.path;return u.lastIndexOf("/")===u.length-1?u.slice(0,-1):u}),s=u=>{u.preventDefault();const m=u.target.parentElement.getAttribute("href"),p=m.slice(m.indexOf("#")+1),o=document.getElementById(p);o&&o.scrollIntoView({behavior:"smooth"})};return(u,d)=>{const m=b("SuiHeader"),p=b("SuiGridColumn"),o=b("SuiGridRow");return P(),me(we,null,[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[a(Be(e.label)+" ",1),t($(Rm),{to:`${n.value}#${u.$attrs.id}`,target:"_self",onClick:s},{default:i(()=>[t($(Qe),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[t($(Qe),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),C("p",null,[al(u.$slots,"default",{},void 0,!0)])],64)}}}),sC=be(nC,[["__scopeId","data-v-a2b78897"]]),oC={mounted(e,l){var u;const n=l.modifiers,s=l.value;n.script||s==="script"?e.className="language-javascript":e.className="language-markup",Z_.highlightElement(e.children[0]),(u=e.children[0].parentElement)==null||u.setAttribute("tabindex","-1")}},rC={key:0},uC={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(l,n)=>{const s=b("SuiGridColumn"),u=b("SuiGridRow");return P(),j(u,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[al(l.$slots,"default")]),_:3}),t(s,{width:16},{default:i(()=>[t($(ks),{animation:"scale"},{default:i(()=>[e.hideCode?lo("",!0):Zl((P(),me("pre",rC,[C("code",null,Be(e.code)+`
`,1)])),[[$(oC)]])]),_:1})]),_:1})]),_:3})}}},ne={__name:"DocSection",props:["label","code"],setup(e){const l=H(!0),n=()=>l.value=!l.value;return(s,u)=>{const d=b("SuiGrid");return P(),me("section",null,[t(d,{columns:2},{default:i(()=>[t(sC,Ni({label:e.label,"on-click":n},s.$attrs),{default:i(()=>[al(s.$slots,"description")]),_:3},16,["label"]),t(uC,{code:e.code,"hide-code":l.value},{default:i(()=>[al(s.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},dC=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,cC={__name:"ButtonDoc",setup(e){const l=H("Follow"),n=()=>l.value=l.value==="Follow"?"Following":"Follow";return(s,u)=>(P(),j(ne,{label:"Button",code:dC},{description:i(()=>[a(" A standard button ")]),example:i(()=>[t($(M),{onClick:n},{default:i(()=>[a(Be(l.value),1)]),_:1})]),_:1}))}},mC=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,pC={__name:"EmphasisDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Emphasis",code:mC},{description:i(()=>[a(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t($(M),{primary:""},{default:i(()=>[a("Save")]),_:1}),t($(M),{secondary:""},{default:i(()=>[a("Okay")]),_:1}),t($(M),null,{default:i(()=>[a("Cancel")]),_:1})]),_:1}))}},fC=`<template>
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
</template>`,gC={__name:"AnimatedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Animated",code:fC},{description:i(()=>[a(" A button can animate to show hidden content ")]),example:i(()=>[t($(M),{animated:""},{default:i(()=>[t($(ui),{visible:""},{default:i(()=>[a("Next")]),_:1}),t($(ui),{hidden:""},{default:i(()=>[t($(Qe),{name:"arrow right"})]),_:1})]),_:1}),t($(M),{animated:"vertical"},{default:i(()=>[t($(ui),{visible:""},{default:i(()=>[t($(Qe),{name:"shop"})]),_:1}),t($(ui),{hidden:""},{default:i(()=>[a("Shop")]),_:1})]),_:1}),t($(M),{animated:"fade"},{default:i(()=>[t($(ui),{visible:""},{default:i(()=>[a(" Sign-up for a Pro account ")]),_:1}),t($(ui),{hidden:""},{default:i(()=>[a("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},hC=`<template>
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
</template>`,_C={__name:"LabeledDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Labeled",code:hC},{description:i(()=>[a(" A button can appear alongside a label ")]),example:i(()=>[t($(M),{labeled:"right",as:"div"},{default:i(()=>[t($(M),{icon:"heart",content:" Like"}),t($(Dt),{basic:""},{default:i(()=>[a("2,048")]),_:1})]),_:1}),t($(M),{labeled:"left",as:"div"},{default:i(()=>[t($(Dt),{basic:"",pointing:"right"},{default:i(()=>[a("2,048")]),_:1}),t($(M),{icon:"heart",content:" Like"})]),_:1}),t($(M),{labeled:"left",as:"div"},{default:i(()=>[t($(Dt),{basic:""},{default:i(()=>[a("1,048")]),_:1}),t($(M),{icon:"fork"})]),_:1})]),_:1}))}},bC=`<template>
  <SuiButton icon="cloud" />
</template>`,vC={__name:"IconDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Icon",code:bC},{description:i(()=>[a(" A button can have only an icon ")]),example:i(()=>[t($(M),{icon:"cloud"})]),_:1}))}},yC=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,CC={__name:"LabeledIconDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Labeled Icon",code:yC},{description:i(()=>[a(" A button can use an icon as a label ")]),example:i(()=>[t($(M),{labeled:"",icon:"pause",content:"Pause"}),t($(M),{labeled:"right",icon:"right arrow",content:"Next"}),t($(M),{labeled:"",icon:""},{default:i(()=>[t($(Qe),{loading:"",name:"spinner"}),a(" Loading ")]),_:1})]),_:1}))}},wC=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,SC={__name:"BasicDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Basic",code:wC},{description:i(()=>[a(" A basic button is less pronounced ")]),example:i(()=>[t($(M),{basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),t($(M),{basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),t($(M),{basic:"",positive:""},{default:i(()=>[a("Positive")]),_:1}),t($(M),{basic:"",negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1}))}},AC=`<template>
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
</template>`,kC={__name:"TertiaryDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Tertiary",code:AC},{description:i(()=>[a(" An none bordered less important button ")]),example:i(()=>[t($(M),{tertiary:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),t($(M),{tertiary:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),t($(M),{tertiary:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),t($(M),{tertiary:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t($(M),{tertiary:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t($(M),{tertiary:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t($(M),{tertiary:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),t($(M),{tertiary:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t($(M),{tertiary:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t($(M),{tertiary:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t($(M),{tertiary:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t($(M),{tertiary:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t($(M),{tertiary:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t($(M),{tertiary:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t($(M),{tertiary:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1}))}},BC=`<template>
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
</template>`,$C={__name:"InvertedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Inverted",code:BC},{description:i(()=>[a(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t($(It),{inverted:""},{default:i(()=>[t($(M),{inverted:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),t($(M),{inverted:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),t($(M),{inverted:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),t($(M),{inverted:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t($(M),{inverted:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t($(M),{inverted:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t($(M),{inverted:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),t($(M),{inverted:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t($(M),{inverted:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t($(M),{inverted:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t($(M),{inverted:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t($(M),{inverted:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t($(M),{inverted:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t($(M),{inverted:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t($(M),{inverted:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1}))}},TC=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,xC={__name:"ButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Buttons",code:TC},{description:i(()=>[a(" Buttons can exist together as a group ")]),example:i(()=>[t($(nt),null,{default:i(()=>[t($(M),{content:"One"}),t($(M),{content:"Two"}),t($(M),{content:"Three"})]),_:1})]),_:1}))}},EC=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,RC={__name:"IconButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Icon Buttons",code:EC},{description:i(()=>[a(" Button groups can show groups of icons ")]),example:i(()=>[t($(nt),{icon:""},{default:i(()=>[t($(M),{icon:"align left"}),t($(M),{icon:"align center"}),t($(M),{icon:"align right"}),t($(M),{icon:"align justify"})]),_:1})]),_:1}))}},zC=C("div",{class:"or"},null,-1),DC=C("div",{class:"or","data-text":"ou"},null,-1),PC=`<template>
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
</template>`,MC={__name:"ConditionalsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Conditionals",code:PC},{description:i(()=>[a(" Button groups can contain conditionals ")]),example:i(()=>[t($(nt),null,{default:i(()=>[t($(M),{content:"Cancel"}),zC,t($(M),{content:"Save",positive:""})]),_:1}),t($(nt),null,{default:i(()=>[t($(M),{content:"un"}),DC,t($(M),{content:"deux",positive:""})]),_:1})]),_:1}))}},IC=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,FC={__name:"ActiveDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Active",code:IC},{description:i(()=>[a(" A button can show it is currently the active user selection ")]),example:i(()=>[t($(M),{active:"",icon:"user",content:" Follow"})]),_:1}))}},VC=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,NC={__name:"DisabledDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Disabled",code:VC},{description:i(()=>[a(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t($(M),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},LC=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,OC={__name:"LoadingDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Loading",code:LC},{description:i(()=>[a(" A button can show a loading indicator ")]),example:i(()=>[t($(M),{loading:"",content:"Loading"}),t($(M),{loading:"double",primary:"",content:"Loading"}),t($(M),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},HC=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,jC={__name:"SocialDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Social",code:HC},{description:i(()=>[a(" A button can be formatted to link to a social website ")]),example:i(()=>[t($(M),{facebook:"",icon:"facebook",content:" Facebook"}),t($(M),{twitter:"",icon:"twitter",content:" Twitter"}),t($(M),{vk:"",icon:"vk",content:"VK"}),t($(M),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t($(M),{instagram:"",icon:"instagram",content:" Instagram"}),t($(M),{youtube:"",icon:"youtube",content:" YouTube"}),t($(M),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t($(M),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},qC=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,UC={__name:"SizeDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Size",code:qC},{description:i(()=>[a(" A button can have different sizes ")]),example:i(()=>[t($(M),{size:"mini",content:"Mini"}),t($(M),{size:"tiny",content:"Tiny"}),t($(M),{size:"small",content:"Small"}),t($(M),{size:"medium",content:"Medium"}),t($(M),{size:"large",content:"Large"}),t($(M),{size:"big",content:"Big"}),t($(M),{size:"huge",content:"Huge"}),t($(M),{size:"massive",content:"Massive"})]),_:1}))}},GC=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,YC={__name:"FloatedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Floated",code:GC},{description:i(()=>[a(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t($(M),{floated:"left",content:"Left Floated"}),t($(M),{floated:"right",content:"Right Floated"})]),_:1}))}},JC=`<template>
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
</template>`,WC={__name:"ColoredDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Colored",code:JC},{description:i(()=>[a(" A button can have different colors ")]),example:i(()=>[t($(M),{color:"red"},{default:i(()=>[a("Red")]),_:1}),t($(M),{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t($(M),{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t($(M),{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t($(M),{color:"green"},{default:i(()=>[a("Green")]),_:1}),t($(M),{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t($(M),{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t($(M),{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t($(M),{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t($(M),{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t($(M),{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t($(M),{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t($(M),{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1}))}},KC=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,XC={__name:"CompactDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Compact",code:KC},{description:i(()=>[a(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t($(M),{compact:"",content:"Hold"}),t($(M),{compact:"",icon:"pause"}),t($(M),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},QC=`<template>
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
<\/script>`,ZC={__name:"ToggleDoc",setup(e){const l=H(!1);return(n,s)=>(P(),j(ne,{label:"Toggle",code:QC},{description:i(()=>[a(" A button can be formatted to toggle on and off ")]),example:i(()=>[t($(M),{toggle:"",active:l.value,onClick:()=>l.value=!l.value,content:l.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ew=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,tw={__name:"PositiveDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Positive",code:ew},{description:i(()=>[a(" A button can hint towards a positive consequence ")]),example:i(()=>[t($(M),{positive:"",content:"Positive Button"})]),_:1}))}},iw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,lw={__name:"NegativeDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Negative",code:iw},{description:i(()=>[a(" A button can hint towards a negative consequence ")]),example:i(()=>[t($(M),{negative:"",content:"Negative Button"})]),_:1}))}},aw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,nw={__name:"FluidDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Fluid",code:aw},{description:i(()=>[a(" A button can take the width of its container ")]),example:i(()=>[t($(M),{fluid:"",content:"Fits container"})]),_:1}))}},sw=`<template>
  <SuiButton circular icon="settings" />
</template>`,ow={__name:"CircularDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Circular",code:sw},{description:i(()=>[a(" A button can be circular ")]),example:i(()=>[t($(M),{circular:"",icon:"settings"})]),_:1}))}},rw=C("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),uw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,dw={__name:"VerticallyAttachedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Vertically Attached",code:uw},{description:i(()=>[a(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t($(M),{attached:"top",content:"Top"}),t($(It),{attached:""},{default:i(()=>[rw]),_:1}),t($(M),{attached:"bottom",content:"Bottom"})]),_:1}))}},cw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,mw={__name:"HorizontallyAttachedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Horizontally Attached",code:cw},{description:i(()=>[a(" A button can be attached to the left or right of other content ")]),example:i(()=>[t($(M),{attached:"left",content:"Left"}),t($(M),{attached:"right",content:"Right"})]),_:1}))}},pw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,fw={__name:"VerticalButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Vertical Buttons",code:pw},{description:i(()=>[a(" Groups can be formatted to appear vertically ")]),example:i(()=>[t($(nt),{vertical:""},{default:i(()=>[t($(M),null,{default:i(()=>[a("Feed")]),_:1}),t($(M),null,{default:i(()=>[a("Messages")]),_:1}),t($(M),null,{default:i(()=>[a("Events")]),_:1}),t($(M),null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1}))}},gw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,hw={__name:"StackableButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Stackable Buttons",code:gw},{description:i(()=>[a(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t($(nt),{stackable:""},{default:i(()=>[t($(M),null,{default:i(()=>[a("Feed")]),_:1}),t($(M),null,{default:i(()=>[a("Messages")]),_:1}),t($(M),null,{default:i(()=>[a("Events")]),_:1}),t($(M),null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1}))}},_w=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,bw={__name:"LabeledIconButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Icon Buttons",code:_w},{description:i(()=>[a(" Groups can be formatted as labeled icons ")]),example:i(()=>[t($(nt),{vertical:"",labeled:"",icon:""},{default:i(()=>[t($(M),{icon:"pause",content:"Pause"}),t($(M),{icon:"play",content:"Play"}),t($(M),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},vw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"MixedGroupDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Mixed Group",code:vw},{description:i(()=>[a(" Button groups can show groups of icons ")]),example:i(()=>[t($(nt),null,{default:i(()=>[t($(M),{labeled:"",icon:"left chevron",content:"Back"}),t($(M),{icon:"stop",content:"Stop"}),t($(M),{icon:"",labeled:"right"},{default:i(()=>[t($(Qe),{name:"right chevron"}),a(" Forward ")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
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
</template>`,ww={__name:"EqualWidthDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Equal Width",code:Cw},{description:i(()=>[a(" Groups can have their widths divided evenly ")]),example:i(()=>[t($(nt),{widths:5},{default:i(()=>[t($(M),null,{default:i(()=>[a("Overview")]),_:1}),t($(M),null,{default:i(()=>[a("Specs")]),_:1}),t($(M),null,{default:i(()=>[a("Warranty")]),_:1}),t($(M),null,{default:i(()=>[a("Reviews")]),_:1}),t($(M),null,{default:i(()=>[a("Support")]),_:1})]),_:1}),t($(nt),{widths:3},{default:i(()=>[t($(M),null,{default:i(()=>[a("Overview")]),_:1}),t($(M),null,{default:i(()=>[a("Specs")]),_:1}),t($(M),null,{default:i(()=>[a("Support")]),_:1})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Aw={__name:"ColoredButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Colored Buttons",code:Sw},{description:i(()=>[a(" Groups can have a shared color ")]),example:i(()=>[t($(nt),{color:"blue"},{default:i(()=>[t($(M),null,{default:i(()=>[a("One")]),_:1}),t($(M),null,{default:i(()=>[a("Two")]),_:1}),t($(M),null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1}))}},kw=`<template>
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
</template>`,Bw={__name:"BasicButtonsDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Basic Buttons",code:kw},{description:i(()=>[a(" A button group can be less pronounced ")]),example:i(()=>[t($(nt),{basic:""},{default:i(()=>[t($(M),null,{default:i(()=>[a("One")]),_:1}),t($(M),null,{default:i(()=>[a("Two")]),_:1}),t($(M),null,{default:i(()=>[a("Three")]),_:1})]),_:1}),t($(nt),null,{default:i(()=>[t($(M),{basic:"",color:"red"},{default:i(()=>[a("One")]),_:1}),t($(M),{basic:"",color:"blue"},{default:i(()=>[a("Two")]),_:1}),t($(M),{basic:"",color:"green"},{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1}))}},$w=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Tw={__name:"GroupSizesDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Group Sizes",code:$w},{description:i(()=>[a(" Groups can have a shared color ")]),example:i(()=>[t($(nt),{size:"large"},{default:i(()=>[t($(M),null,{default:i(()=>[a("One")]),_:1}),t($(M),null,{default:i(()=>[a("Two")]),_:1}),t($(M),null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1}))}},xw={__name:"Button",setup(e){const l=[{id:"button",label:"Button",category:"Types",component:cC},{id:"emphasis",label:"Emphasis",category:"Types",component:pC},{id:"animated",label:"Animated",category:"Types",component:gC},{id:"labeled",label:"Labeled",category:"Types",component:_C},{id:"icon",label:"Icon",category:"Types",component:vC},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:CC},{id:"basic",label:"Basic",category:"Types",component:SC},{id:"tertiary",label:"Tertiary",category:"Types",component:kC},{id:"inverted",label:"Inverted",category:"Types",component:$C},{id:"buttons",label:"Buttons",category:"Groups",component:xC},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:RC},{id:"content",label:"Content",category:"Content",component:MC},{id:"active",label:"Active",category:"States",component:FC},{id:"disabled",label:"Disabled",category:"States",component:NC},{id:"loading",label:"Loading",category:"States",component:OC},{id:"social",label:"Social",category:"Variations",component:jC},{id:"size",label:"Size",category:"Variations",component:UC},{id:"floated",label:"Floated",category:"Variations",component:YC},{id:"colored",label:"Colored",category:"Variations",component:WC},{id:"compact",label:"Compact",category:"Variations",component:XC},{id:"toggle",label:"Toggle",category:"Variations",component:ZC},{id:"positive",label:"Positive",category:"Variations",component:tw},{id:"negative",label:"Negative",category:"Variations",component:lw},{id:"fluid",label:"Fluid",category:"Variations",component:nw},{id:"circular",label:"Circular",category:"Variations",component:ow},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:dw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:mw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:fw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:hw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:bw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:yw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:ww},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Aw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Bw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Tw}];return(n,s)=>(P(),j(fl,{title:"Button",description:"A button indicates a possible user action","component-docs":l}))}},Ew=C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Rw=`<template>
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
</template>`,zw={__name:"ContainerDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Container",code:Rw},{description:i(()=>[a(" A standard container ")]),example:i(()=>[t($(ci),null,{default:i(()=>[Ew]),_:1})]),_:1}))}},Dw=C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,Mw={__name:"TextContainerDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Text Container",code:Pw},{description:i(()=>[a(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t($(ci),{text:""},{default:i(()=>[t($(Mt),{as:"h2"},{default:i(()=>[a("Header")]),_:1}),Dw]),_:1})]),_:1}))}},Iw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Fw={__name:"TextAlignmentDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Text Alignment",code:Iw},{description:i(()=>[a(" A container can specify its text alignment ")]),example:i(()=>[t($(ci),{textAlign:"left"},{default:i(()=>[a("Left Aligned")]),_:1}),t($(ci),{textAlign:"center"},{default:i(()=>[a("Center Aligned")]),_:1}),t($(ci),{textAlign:"right"},{default:i(()=>[a("Right Aligned")]),_:1})]),_:1}))}},Vw=C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Nw=`<template>
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
</template>`,Lw={__name:"FluidDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Fluid",code:Nw},{description:i(()=>[a(" A fluid container has no maximum width ")]),example:i(()=>[t($(ci),{fluid:""},{default:i(()=>[t($(Mt),{as:"h2"},{default:i(()=>[a("Dogs Roles with Humans")]),_:1}),Vw]),_:1})]),_:1}))}},Ow={__name:"Container",setup(e){const l=[{id:"container",label:"Container",category:"Types",component:zw},{id:"text-container",label:"Text Container",category:"Types",component:Mw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Fw},{id:"fluid",label:"Fluid",category:"Variations",component:Lw}];return(n,s)=>(P(),j(fl,{title:"Container",description:"A container limits content to a maximum width","component-docs":l}))}},Hw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,jw={__name:"DividerDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Divider",code:Hw},{description:i(()=>[a(" A standard divider ")]),example:i(()=>[t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t($(Je)),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},qw=C("label",null,"Username",-1),Uw=C("input",{type:"text",placeholder:"Username"},null,-1),Gw=C("label",null,"Password",-1),Yw=C("input",{type:"password",placeholder:"Password"},null,-1),Jw=`<template>
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
</template>`,Ww={__name:"VerticalDividerDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Vertical Divider",code:Jw},{description:i(()=>[a(" A divider can segment content vertically. ")]),example:i(()=>[t($(It),{placeholder:""},{default:i(()=>[t($(gs),{columns:"equal"},{default:i(()=>[t($(Ia),null,{default:i(()=>[t($(fs),null,{default:i(()=>[t($(Ma),null,{default:i(()=>[qw,Uw]),_:1}),t($(Ma),null,{default:i(()=>[Gw,Yw]),_:1}),t($(M),{primary:""},{default:i(()=>[a("Login")]),_:1})]),_:1})]),_:1}),t($(Ia),{textAlign:"middle"},{default:i(()=>[t($(M),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t($(Je),{vertical:""},{default:i(()=>[a("Or")]),_:1})]),_:1})]),_:1}))}},Kw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,Xw={__name:"HorizontalDividerDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Horizontal Divider",code:Kw},{description:i(()=>[a(" A divider can segment content horizontally ")]),example:i(()=>[t($(It),{basic:"",textAlign:"center"},{default:i(()=>[t($(cs),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t($(Je),{horizontal:""},{default:i(()=>[a("Or")]),_:1}),t($(M),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},Qw=`<template>
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
</template>`,Zw={__name:"HorizontalAlignmentDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Horizontal Alignment",code:Qw},{description:i(()=>[a(" A horizontal divider can be aligned ")]),example:i(()=>[t($(Je),{horizontal:"",textAlign:"left"},{default:i(()=>[t($(Qe),{name:"left align"}),a(" Left Aligned ")]),_:1}),t($(Je),{horizontal:"",textAlign:"center"},{default:i(()=>[t($(Qe),{name:"center align"}),a(" Center Aligned ")]),_:1}),t($(Je),{horizontal:"",textAlign:"right"},{default:i(()=>[t($(Qe),{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1}))}},eS=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,tS={__name:"InvertedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Inverted",code:eS},{description:i(()=>[a(" A divider can have its colors inverted ")]),example:i(()=>[t($(It),{inverted:""},{default:i(()=>[t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t($(Je),{inverted:""}),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t($(Je),{horizontal:"",inverted:""},{default:i(()=>[a("Horizontal")]),_:1})]),_:1})]),_:1}))}},iS=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,lS={__name:"FittedDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Inverted",code:iS},{description:i(()=>[a(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t($(It),null,{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t($(Je),{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},aS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,nS={__name:"HiddenDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Hidden",code:aS},{description:i(()=>[a(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t($(Mt),null,{default:i(()=>[a("Section One")]),_:1}),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t($(Je),{hidden:""}),t($(Mt),null,{default:i(()=>[a("Section Two")]),_:1}),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},sS=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,oS={__name:"SectionDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Section",code:sS},{description:i(()=>[a(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t($(Mt),null,{default:i(()=>[a("Section One")]),_:1}),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t($(Je),{section:""}),t($(Mt),null,{default:i(()=>[a("Section Two")]),_:1}),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},rS=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,uS={__name:"ClearingDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Clearing",code:rS},{description:i(()=>[a(" A divider can clear the contents above it ")]),example:i(()=>[t($(It),null,{default:i(()=>[t($(Mt),{floated:"right"},{default:i(()=>[a("Section One")]),_:1}),t($(Je),{clearing:""}),t($(St),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},dS=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,cS={__name:"SizeDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Size",code:dS},{description:i(()=>[a(" A divider text can vary in size ")]),example:i(()=>[t($(Je),{horizontal:"",size:"mini"},{default:i(()=>[a("MINI")]),_:1}),t($(Je),{horizontal:"",size:"tiny"},{default:i(()=>[a("TINY")]),_:1}),t($(Je),{horizontal:"",size:"small"},{default:i(()=>[a("SMALL")]),_:1}),t($(Je),{horizontal:"",size:"large"},{default:i(()=>[a("LARGE")]),_:1}),t($(Je),{horizontal:"",size:"big"},{default:i(()=>[a("BIG")]),_:1}),t($(Je),{horizontal:"",size:"huge"},{default:i(()=>[a("HUGE")]),_:1}),t($(Je),{horizontal:"",size:"massive"},{default:i(()=>[a("MASSIVE")]),_:1})]),_:1}))}},mS={__name:"Divider",setup(e){const l=[{id:"divider",label:"Divider",category:"Types",component:jw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Ww},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:Xw},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:Zw},{id:"inverted",label:"Inverted",category:"Variations",component:tS},{id:"fitted",label:"Fitted",category:"Variations",component:lS},{id:"hidden",label:"Hidden",category:"Variations",component:nS},{id:"section",label:"Section",category:"Variations",component:oS},{id:"clearing",label:"Clearing",category:"Variations",component:uS},{id:"size",label:"Size",category:"Variations",component:cS}];return(n,s)=>(P(),j(fl,{title:"Divider",description:"A divider visually segments content into groups","component-docs":l}))}},pS=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,fS={__name:"DisabledDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Disabled",code:pS},{description:i(()=>[a(" An emoji can show that it is disabled ")]),example:i(()=>[t($(ft),{name:"anguished",disabled:""})]),_:1}))}},gS=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,hS={__name:"LoadingDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Loading",code:gS},{description:i(()=>[a(" An emoji can be used as a simple loader ")]),example:i(()=>[t($(ft),{name:"angel",loading:""}),t($(ft),{name:"blush",loading:""}),t($(ft),{name:"grin",loading:""})]),_:1}))}},_S=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,bS={__name:"SizeDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Size",code:_S},{description:i(()=>[a(" An emoji can vary in size ")]),example:i(()=>[t($(ft),{name:"relaxed",size:"small"}),t($(ft),{name:"relaxed",size:"medium"}),t($(ft),{name:"relaxed",size:"large"}),t($(ft),{name:"relaxed",size:"big"})]),_:1}))}},vS=`<template>
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
</template>`,yS={__name:"AutosizingDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Autosizing",code:vS},{description:i(()=>[a(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t($(Mt),{size:"small"},{default:i(()=>[a(" Within a Header "),t($(ft),{name:"relaxed"})]),_:1}),t($(M),{as:"div",size:"large"},{default:i(()=>[a(" Within a Button "),t($(ft),{name:"relaxed"})]),_:1}),t($(Dt),{size:"massive"},{default:i(()=>[a(" Within a Label "),t($(ft),{name:"relaxed"})]),_:1})]),_:1}))}},CS=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,wS={__name:"LinkDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Link",code:CS},{description:i(()=>[a(" An emoji can be formatted as a link ")]),example:i(()=>[t($(ft),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},SS={__name:"Emoji",setup(e){const l=[{id:"disabled",label:"Disabled",category:"States",component:fS},{id:"loading",label:"Loading",category:"States",component:hS},{id:"size",label:"Size",category:"Variations",component:bS},{id:"autosizing",label:"Autosizing",category:"Variations",component:yS},{id:"link",label:"Link",category:"Variations",component:wS}];return(n,s)=>(P(),j(fl,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":l}))}},AS=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,kS={__name:"SizeDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Size",code:AS},{description:i(()=>[a(" A flag can vary in size ")]),example:i(()=>[t($(Rt),{name:"de",size:"small"}),t($(Rt),{name:"fr",size:"medium"}),t($(Rt),{name:"li",size:"large"}),t($(Rt),{name:"jp",size:"big"}),t($(Rt),{name:"gb",size:"huge"}),t($(Rt),{name:"un",size:"massive"})]),_:1}))}},BS=`<template>
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
</template>`,$S={__name:"AutosizingDoc",setup(e){return(l,n)=>(P(),j(ne,{label:"Autosizing",code:BS},{description:i(()=>[a(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t($(Mt),{size:"small"},{default:i(()=>[a(" Within a Header "),t($(Rt),{name:"us"})]),_:1}),t($(M),{as:"div",size:"large"},{default:i(()=>[a(" Within a Button "),t($(Rt),{name:"eu"})]),_:1}),t($(Dt),{size:"massive"},{default:i(()=>[a(" Within a Label "),t($(Rt),{name:"pirate"})]),_:1})]),_:1}))}},TS={__name:"Flag",setup(e){const l=[{id:"size",label:"Size",category:"Types",component:kS},{id:"autosizing",label:"Autosizing",category:"Types",component:$S}];return(n,s)=>(P(),j(fl,{title:"Flag",description:"A flag is used to represent a political state","component-docs":l}))}},xS=R({name:"DocExample",components:{Prism:Fm},props:{title:String,description:String,code:String},setup(){const e=H(!1);return{active:e,toggle:()=>e.value=!e.value}}}),ES={class:"example"};function RS(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-grid-column"),r=b("sui-icon"),f=b("sui-grid-row"),c=b("prism"),h=b("sui-grid");return P(),me("div",ES,[t(h,{columns:2},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[a(Be(e.title)+" ",1),t(m,null,{default:i(()=>[a(Be(e.description),1)]),_:1})]),_:1})]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[t(r,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[al(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(P(),j(o,{key:0,width:16},{default:i(()=>[t(c,{language:"markup"},{default:i(()=>[a(Be(e.code),1)]),_:1})]),_:1})):lo("",!0)]),_:3})]),_:3})])}const xe=be(xS,[["render",RS],["__scopeId","data-v-fcfb6a67"]]),zS="/vue-fomantic-ui/images/icons/school.png",DS=R({name:"HeaderDoc",components:{DocExample:xe},setup(){return{pageHeaderCode:`<div>
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
</sui-segment>`}}}),PS={class:"intro"},MS=C("span",null,"$10.99",-1);function IS(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),y=b("sui-header-content"),S=b("sui-image");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",PS,[t(p,{as:"h1"},{default:i(()=>[a("Header "),t(m,null,{default:i(()=>[a(" A header provides a short summary of content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(g,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:e.pageHeaderCode},{default:i(()=>[C("div",null,[t(p,{as:"h1"},{default:i(()=>[a("First header")]),_:1}),t(p,{as:"h2"},{default:i(()=>[a("Second header")]),_:1}),t(p,{as:"h3"},{default:i(()=>[a("Third header")]),_:1}),t(p,{as:"h4"},{default:i(()=>[a("Fourth header")]),_:1}),t(p,{as:"h5"},{default:i(()=>[a("Fifth header")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:e.contentHeaderCode},{default:i(()=>[C("div",null,[t(p,{size:"huge"},{default:i(()=>[a("Huge Header")]),_:1}),t(p,{size:"large"},{default:i(()=>[a("Large Header")]),_:1}),t(p,{size:"medium"},{default:i(()=>[a("Medium Header")]),_:1}),t(p,{size:"small"},{default:i(()=>[a("Small Header")]),_:1}),t(p,{size:"tiny"},{default:i(()=>[a("Tiny Header")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:e.iconHeadersCode},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(r,{name:"settings"}),t(y,null,{default:i(()=>[a(" AccountSettings "),t(m,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:e.subHeadersCode},{default:i(()=>[C("div",null,[t(p,{as:"h2",sub:""},{default:i(()=>[a("Price")]),_:1}),MS])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(g,{title:"Image",description:"A header may contain an image",code:e.imageCode},{default:i(()=>[t(p,null,{default:i(()=>[t(S,{src:zS}),t(y,null,{default:i(()=>[a("Learn More")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon",description:"A header may contain an icon",code:e.iconCode},{default:i(()=>[t(p,null,{default:i(()=>[t(r,{name:"plug"}),t(y,null,{default:i(()=>[a("Uptime Guarantee")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Subheader",description:"Headers may contain subheaders",code:e.subheaderCode},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[a(" AccountSettings "),t(m,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(g,{title:"Disabled",description:"A header can show that it is inactive",code:e.disabledCode},{default:i(()=>[t(p,{disabled:""},{default:i(()=>[a("Disabled Header")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(g,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:e.dividingCode},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[a("Dividing Header")]),_:1})]),_:1},8,["code"]),t(g,{title:"Block",description:"A header can be formatted to appear inside a content block",code:e.blockCode},{default:i(()=>[t(p,{as:"h3",block:""},{default:i(()=>[a("Block Header")]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A header can be attached to other content, like a segment",code:e.attachedCode},{default:i(()=>[C("div",null,[t(p,{as:"h2",attached:"top"},{default:i(()=>[a("Attached Header")]),_:1}),t(v,{attached:""},{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Floating",description:"A header can sit to the left or right of other content",code:e.floatingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(p,{as:"h3",floated:"right"},{default:i(()=>[a("Go Forward")]),_:1}),t(p,{as:"h3",floated:"left"},{default:i(()=>[a("Go Back")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[t(v,null,{default:i(()=>[t(p,{as:"h3",textAlign:"right"},{default:i(()=>[a("Right")]),_:1}),t(p,{as:"h3",textAlign:"left"},{default:i(()=>[a("Left")]),_:1}),t(p,{as:"h3",textAlign:"justified"},{default:i(()=>[a(" This should take up the full width even if only one line ")]),_:1}),t(p,{as:"h3",textAlign:"center"},{default:i(()=>[a("Center")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A header can be formatted with different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(p,{as:"h4",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),t(p,{as:"h4",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),t(p,{as:"h4",color:"red"},{default:i(()=>[a("Red")]),_:1}),t(p,{as:"h4",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(p,{as:"h4",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(p,{as:"h4",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(p,{as:"h4",color:"green"},{default:i(()=>[a("Green")]),_:1}),t(p,{as:"h4",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t(p,{as:"h4",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t(p,{as:"h4",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t(p,{as:"h4",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t(p,{as:"h4",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t(p,{as:"h4",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t(p,{as:"h4",color:"grey"},{default:i(()=>[a("Grey")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(p,{as:"h4",color:"red",inverted:""},{default:i(()=>[a("Red")]),_:1}),t(p,{as:"h4",color:"orange",inverted:""},{default:i(()=>[a("Orange")]),_:1}),t(p,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[a("Yellow")]),_:1}),t(p,{as:"h4",color:"olive",inverted:""},{default:i(()=>[a("Olive")]),_:1}),t(p,{as:"h4",color:"green",inverted:""},{default:i(()=>[a("Green")]),_:1}),t(p,{as:"h4",color:"teal",inverted:""},{default:i(()=>[a("Teal")]),_:1}),t(p,{as:"h4",color:"blue",inverted:""},{default:i(()=>[a("Blue")]),_:1}),t(p,{as:"h4",color:"purple",inverted:""},{default:i(()=>[a("Purple")]),_:1}),t(p,{as:"h4",color:"violet",inverted:""},{default:i(()=>[a("Violet")]),_:1}),t(p,{as:"h4",color:"pink",inverted:""},{default:i(()=>[a("Pink")]),_:1}),t(p,{as:"h4",color:"brown",inverted:""},{default:i(()=>[a("Brown")]),_:1}),t(p,{as:"h4",color:"grey",inverted:""},{default:i(()=>[a("Grey")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const FS=be(DS,[["render",IS]]),VS=R({name:"IconDoc",components:{DocExample:xe},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
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
</sui-icon-group>`}}}),NS={class:"intro"},LS=C("br",null,null,-1),OS=C("br",null,null,-1),HS=C("br",null,null,-1),jS=C("br",null,null,-1),qS=C("br",null,null,-1),US=C("br",null,null,-1);function GS(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),y=b("sui-icon-group");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",NS,[t(p,{as:"h1"},{default:i(()=>[a("Icon "),t(m,null,{default:i(()=>[a(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(g,{title:"Disabled",description:"An icon can show that it is disabled",code:e.disabledCode},{default:i(()=>[t(r,{name:"users",disabled:""})]),_:1},8,["code"]),t(g,{title:"Loading",description:"An icon can be used as a simple loader",code:e.loadingCode},{default:i(()=>[C("div",null,[t(r,{name:"spinner",loading:""}),t(r,{name:"notched circle",loading:""}),t(r,{name:"asterisk",loading:""})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(g,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:e.fittedCode},{default:i(()=>[C("div",null,[a(" This icon "),t(r,{name:"help",fitted:""}),a(" is fitted. "),LS,a(" This icon "),t(r,{name:"help"}),a(" is not. ")])]),_:1},8,["code"]),t(g,{title:"Size",description:"An icon can vary in size",code:e.sizeCode},{default:i(()=>[C("div",null,[t(r,{name:"home",size:"mini"}),t(r,{name:"home",size:"tiny"}),t(r,{name:"home",size:"small"}),OS,t(r,{name:"home"}),HS,t(r,{name:"home",size:"large"}),jS,t(r,{name:"home",size:"big"}),qS,t(r,{name:"home",size:"huge"}),US,t(r,{name:"home",size:"massive"})])]),_:1},8,["code"]),t(g,{title:"Link",description:"An icon can be formatted as a link",code:e.linkCode},{default:i(()=>[C("div",null,[t(r,{name:"close",link:""}),t(r,{name:"help",link:""})])]),_:1},8,["code"]),t(g,{title:"Flipped",description:"An icon can be flipped",code:e.flippedCode},{default:i(()=>[C("div",null,[t(r,{name:"cloud",flipped:"horizontally"}),t(r,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),t(g,{title:"Rotated",description:"An icon can be rotated",code:e.rotatedCode},{default:i(()=>[C("div",null,[t(r,{name:"cloud",rotated:"clockwise"}),t(r,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),t(g,{title:"Circular",description:"An icon can be formatted to appear circular",code:e.circularCode},{default:i(()=>[C("div",null,[t(r,{name:"users",circular:""}),t(r,{name:"users",color:"teal",circular:""}),t(r,{name:"users",inverted:"",circular:""}),t(r,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),t(g,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:e.borderedCode},{default:i(()=>[C("div",null,[t(r,{name:"users",bordered:""}),t(r,{name:"users",bordered:"",color:"teal"}),t(r,{name:"users",inverted:"",bordered:"",color:"black"}),t(r,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),t(g,{title:"Colored",description:"An icon can be formatted with different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(r,{name:"users",color:"primary"}),t(r,{name:"users",color:"secondary"}),t(r,{name:"users",color:"red"}),t(r,{name:"users",color:"orange"}),t(r,{name:"users",color:"yellow"}),t(r,{name:"users",color:"olive"}),t(r,{name:"users",color:"green"}),t(r,{name:"users",color:"teal"}),t(r,{name:"users",color:"blue"}),t(r,{name:"users",color:"violet"}),t(r,{name:"users",color:"purple"}),t(r,{name:"users",color:"pink"}),t(r,{name:"users",color:"brown"}),t(r,{name:"users",color:"grey"}),t(r,{name:"users",color:"black"})])]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(r,{name:"users",inverted:""}),t(r,{name:"users",inverted:"",color:"primary"}),t(r,{name:"users",inverted:"",color:"secondary"}),t(r,{name:"users",inverted:"",color:"red"}),t(r,{name:"users",inverted:"",color:"orange"}),t(r,{name:"users",inverted:"",color:"yellow"}),t(r,{name:"users",inverted:"",color:"olive"}),t(r,{name:"users",inverted:"",color:"green"}),t(r,{name:"users",inverted:"",color:"teal"}),t(r,{name:"users",inverted:"",color:"blue"}),t(r,{name:"users",inverted:"",color:"violet"}),t(r,{name:"users",inverted:"",color:"purple"}),t(r,{name:"users",inverted:"",color:"pink"}),t(r,{name:"users",inverted:"",color:"brown"}),t(r,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),t(g,{title:"Icons",description:"Several icons can be used together as a group",code:e.iconsCode},{default:i(()=>[t(y,{size:"huge"},{default:i(()=>[t(r,{name:"circle outline",size:"big"}),t(r,{name:"user"})]),_:1})]),_:1},8,["code"]),t(g,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:e.cornerIconCode},{default:i(()=>[t(y,{size:"huge"},{default:i(()=>[t(r,{name:"puzzle"}),t(r,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const YS=be(VS,[["render",GS]]),Z="/vue-fomantic-ui/images/wireframe/image.png",ha="/vue-fomantic-ui/images/wireframe/image-text.png",Bl="/vue-fomantic-ui/images/wireframe/white-image.png",vt="/vue-fomantic-ui/images/wireframe/square-image.png",JS=R({name:"ImageDoc",components:{DocExample:xe},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),WS={class:"intro"},KS=C("span",null,"Username",-1),XS=C("span",null,"Top Aligned",-1),QS=C("span",null,"Middle Aligned",-1),ZS=C("span",null,"Bottom Aligned",-1),eA=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),tA=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),iA=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),lA=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),aA=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),nA=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function sA(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("doc-example"),S=b("sui-image-group");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",WS,[t(p,{as:"h1"},{default:i(()=>[a("Image "),t(m,null,{default:i(()=>[a(" An image is a graphic representation of something ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(y,{title:"Image",description:"An image",code:e.imageCode},{default:i(()=>[t(g,{src:Z,size:"small"})]),_:1},8,["code"]),t(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:e.imageLinkCode},{default:i(()=>[t(g,{as:"a",size:"medium",src:ha,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(y,{title:"Hidden",description:"An image can be hidden",code:e.hiddenCode},{default:i(()=>[t(g,{hidden:"",src:Z,size:"small"})]),_:1},8,["code"]),t(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",src:Z,size:"small"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:e.avatarCode},{default:i(()=>[C("div",null,[t(g,{avatar:"",src:Z}),KS])]),_:1},8,["code"]),t(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:e.borderedCode},{default:i(()=>[t(g,{bordered:"",size:"medium",src:Bl})]),_:1},8,["code"]),t(y,{title:"Fluid",description:"An image can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",src:Z})]),_:1},8,["code"]),t(y,{title:"Rounded",description:"An image may appear rounded",code:e.roundedCode},{default:i(()=>[t(g,{rounded:"",size:"medium",src:Z})]),_:1},8,["code"]),t(y,{title:"Circular",description:"An image may appear circular",code:e.circularCode},{default:i(()=>[t(g,{circular:"",size:"medium",src:vt})]),_:1},8,["code"]),t(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:e.verticallyAlignedCode},{default:i(()=>[C("div",null,[t(g,{verticalAlign:"top",size:"tiny",src:vt}),XS,t(o),t(g,{verticalAlign:"middle",size:"tiny",src:vt}),QS,t(o),t(g,{verticalAlign:"bottom",size:"tiny",src:vt}),ZS])]),_:1},8,["code"]),t(y,{title:"Centered",description:"An image can appear centered in a content block",code:e.centeredCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{centered:"",size:"medium",src:Z}),eA,tA,t(g,{centered:"",size:"small",src:ha}),iA]),_:1})]),_:1},8,["code"]),t(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:e.spacedCode},{default:i(()=>[t(v,null,{default:i(()=>[C("p",null,[a("Te eum doming eirmod, nominati pertinacia "),t(g,{spaced:"",size:"mini",src:Z}),a(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),t(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{floated:"left",size:"small",src:ha}),lA,t(g,{floated:"right",size:"small",src:ha}),aA,nA]),_:1})]),_:1},8,["code"]),t(y,{title:"Size",description:"An image may appear at different sizes",code:e.sizeCode},{default:i(()=>[C("div",null,[t(g,{size:"mini",src:Z}),t(o,{hidden:""}),t(g,{size:"tiny",src:Z}),t(o,{hidden:""}),t(g,{size:"medium",src:Z}),t(o,{hidden:""}),t(g,{size:"large",src:Z})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),t(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:e.sizeGroupCode},{default:i(()=>[t(S,{size:"tiny"},{default:i(()=>[t(g,{src:Z}),t(g,{src:Z}),t(g,{src:Z}),t(g,{src:Z})]),_:1})]),_:1},8,["code"])]),_:1})])}const oA=be(JS,[["render",sA]]),rA=R({name:"InputDoc",components:{DocExample:xe},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),uA={class:"intro"};function dA(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-input"),y=b("doc-example");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",uA,[t(p,{as:"h1"},{default:i(()=>[a("Input "),t(m,null,{default:i(()=>[a(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(y,{title:"Input",description:"A standard input",code:e.inputCode},{default:i(()=>[t(g,{placeholder:"Search..."})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:e.focusCode},{default:i(()=>[t(g,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:e.loadingCode},{default:i(()=>[C("div",null,[t(g,{loading:"",placeholder:"Search..."}),t(o,{hidden:""}),t(g,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),t(y,{title:"Disabled",description:"An input field can show that it is disabled",code:e.disabledCode},{default:i(()=>[t(g,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Error",description:"An input field can show the data contains errors",code:e.errorCode},{default:i(()=>[t(g,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(y,{title:"Icon",description:"An input can be formatted with an icon",code:e.iconCode},{default:i(()=>[t(g,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Labeled",description:"An input can be formatted with a label",code:e.labeledCode},{default:i(()=>[C("div",null,[t(g,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),t(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:e.actionCode},{default:i(()=>[t(g,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Transparent",description:"A transparent input has no background",code:e.transparentCode},{default:i(()=>[t(g,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(g,{inverted:"",placeholder:"Search..."}),t(o,{inverted:""}),t(g,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),t(o,{inverted:""}),t(g,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),t(y,{title:"Fluid",description:"An input can take the size of its container",code:e.fluidCode},{default:i(()=>[t(g,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),t(y,{title:"Size",description:"An input can vary in size",code:e.sizeCode},{default:i(()=>[C("div",null,[t(g,{size:"mini",icon:"search",placeholder:"Search mini"}),t(o,{hidden:""}),t(g,{size:"small",icon:"search",placeholder:"Search small"}),t(o,{hidden:""}),t(g,{size:"large",icon:"search",placeholder:"Search large"}),t(o,{hidden:""}),t(g,{size:"big",icon:"search",placeholder:"Search big"}),t(o,{hidden:""}),t(g,{size:"huge",icon:"search",placeholder:"Search huge"}),t(o,{hidden:""}),t(g,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const cA=be(rA,[["render",dA]]),$s="/vue-fomantic-ui/images/avatar/small/joe.jpg",Ot="/vue-fomantic-ui/images/avatar/small/elliot.jpg",Jl="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Ce="/vue-fomantic-ui/images/wireframe/paragraph.png",mA=R({name:"LabelDoc",components:{DocExample:xe},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),pA={class:"intro"},fA=C("img",{src:$s},null,-1),gA=C("img",{src:Ot},null,-1),hA=C("img",{src:Jl},null,-1),_A=C("input",{type:"text",placeholder:"First name"},null,-1),bA=C("input",{type:"text",placeholder:"Last name"},null,-1),vA=C("input",{type:"text",placeholder:"Username"},null,-1),yA=C("input",{type:"password",placeholder:"Password"},null,-1),CA=C("span",null,"Account Details",-1),wA=C("span",null,"User Reviews",-1),SA=C("img",{src:Jl},null,-1),AA=C("img",{src:Ot},null,-1);function kA(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-label"),y=b("doc-example"),S=b("sui-form-field"),B=b("sui-form"),_=b("sui-image"),w=b("sui-grid-column"),k=b("sui-grid"),T=b("sui-grid-row"),E=b("sui-list-item"),I=b("sui-list"),F=b("sui-label-detail"),D=b("sui-label-group");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",pA,[t(p,{as:"h1"},{default:i(()=>[a("Label "),t(m,null,{default:i(()=>[a(" A label displays content classification ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(y,{title:"Label",description:"A label",code:e.labelCode},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),t(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:e.imageCode},{default:i(()=>[C("div",null,[t(g,{as:"a",image:""},{default:i(()=>[fA,a(" Joe ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[gA,a(" Elliot ")]),_:1}),t(g,{as:"a",image:""},{default:i(()=>[hA,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Pointing",description:"A label can point to content next to it",code:e.pointingCode},{default:i(()=>[t(B,{fluid:""},{default:i(()=>[t(S,null,{default:i(()=>[_A,t(g,{pointing:""},{default:i(()=>[a("Please enter a value")]),_:1})]),_:1}),t(o),t(S,null,{default:i(()=>[t(g,{pointing:"below"},{default:i(()=>[a("Please enter a value")]),_:1}),bA]),_:1}),t(o),t(S,{inline:""},{default:i(()=>[vA,t(g,{pointing:"left"},{default:i(()=>[a("That name is taken!")]),_:1})]),_:1}),t(o),t(S,{inline:""},{default:i(()=>[t(g,{pointing:"right"},{default:i(()=>[a("Your password must be 6 characters or more")]),_:1}),yA]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:e.cornerCode},{default:i(()=>[t(k,{columns:2},{default:i(()=>[t(w,null,{default:i(()=>[t(_,{fluid:"",src:Z,label:{corner:"left",icon:"heart"}})]),_:1}),t(w,null,{default:i(()=>[t(_,{fluid:"",src:Z,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Tag",description:"A label can appear as a tag",code:e.tagCode},{default:i(()=>[C("div",null,[t(g,{tag:""},{default:i(()=>[a("New")]),_:1}),t(g,{tag:"",color:"red"},{default:i(()=>[a("Upcoming")]),_:1}),t(g,{tag:"",color:"teal"},{default:i(()=>[a("Featured")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:e.ribbonCode},{default:i(()=>[t(k,{columns:2},{default:i(()=>[t(w,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"",color:"red"},{default:i(()=>[a("Overview")]),_:1}),CA,t(_,{src:Ce}),t(g,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[a("Community")]),_:1}),wA,t(_,{src:Ce})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{raised:""},{default:i(()=>[t(g,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[a("Specs")]),_:1}),t(_,{src:Ce}),t(g,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[a("Reviews")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Attached",description:"A label can attach to a content segment",code:e.attachedCode},{default:i(()=>[t(k,{columns:3},{default:i(()=>[t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top"},{default:i(()=>[a("HTML")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom"},{default:i(()=>[a("CSS")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top right"},{default:i(()=>[a("Code")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"top left"},{default:i(()=>[a("View")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom left"},{default:i(()=>[a("User View")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1}),t(w,null,{default:i(()=>[t(v,{padded:""},{default:i(()=>[t(g,{attached:"bottom right"},{default:i(()=>[a("Admin View")]),_:1}),t(_,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:e.horizontalCode},{default:i(()=>[t(I,{divided:"",selection:""},{default:i(()=>[t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Kumquats ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"purple",horizontal:""},{default:i(()=>[a("Candy")]),_:1}),a(" Ice Cream ")]),_:1}),t(E,null,{default:i(()=>[t(g,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Orange ")]),_:1}),t(E,null,{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[a("Dog")]),_:1}),a(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Floating",description:"A label can float above or below another element",code:e.floatingCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{name:"mail"}),a(" Messages "),t(g,{floating:"",color:"red"},{default:i(()=>[a("22")]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(r,{name:"users"}),a(" Friends "),t(g,{floating:"",color:"teal"},{default:i(()=>[a("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(y,{title:"Detail",description:"A label can contain a detail",code:e.detailCode},{default:i(()=>[t(g,null,{default:i(()=>[a(" Dogs "),t(F,null,{default:i(()=>[a("214")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Icon",description:"A label can include an icon",code:e.iconCode},{default:i(()=>[C("div",null,[t(g,{as:"a"},{default:i(()=>[t(r,{name:"mail"}),a(" Mail ")]),_:1}),t(g,{as:"a"},{default:i(()=>[a(" Tag "),t(r,{name:"delete"})]),_:1})])]),_:1},8,["code"]),t(y,{title:"Image",description:"A label can include an image",code:e.imageIncludeCode},{default:i(()=>[C("div",null,[t(g,{as:"a"},{default:i(()=>[t(_,{avatar:"",spaced:"right",src:Ot}),a(" Elliot ")]),_:1}),t(g,{as:"a"},{default:i(()=>[SA,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Link",description:"A label can be a link or contain an item that links",code:e.linkCode},{default:i(()=>[t(g,{as:"a",link:""},{default:i(()=>[t(r,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(y,{title:"Circular",description:"A label can be circular",code:e.circularCode},{default:i(()=>[C("div",null,[t(g,{as:"a",circular:"",color:"red"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"orange"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"olive"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"green"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"teal"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"blue"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"violet"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"purple"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"pink"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"brown"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"grey"},{default:i(()=>[a("2")]),_:1}),t(g,{as:"a",circular:"",color:"black"},{default:i(()=>[a("2")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Basic",description:"A label can reduce its complexity",code:e.basicCode},{default:i(()=>[C("div",null,[t(g,{basic:"",as:"a"},{default:i(()=>[a("Basic")]),_:1}),t(g,{basic:"",as:"a",pointing:""},{default:i(()=>[a("Pointing")]),_:1}),t(g,{basic:"",as:"a",image:""},{default:i(()=>[AA,a(" Elliot ")]),_:1}),t(g,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[a("Red Pointing")]),_:1}),t(g,{basic:"",as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Colored",description:"A label can have different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(g,{as:"a",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),t(g,{as:"a",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),t(g,{as:"a",color:"red"},{default:i(()=>[a("Red")]),_:1}),t(g,{as:"a",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(g,{as:"a",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(g,{as:"a",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(g,{as:"a",color:"green"},{default:i(()=>[a("Green")]),_:1}),t(g,{as:"a",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t(g,{as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t(g,{as:"a",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t(g,{as:"a",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t(g,{as:"a",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t(g,{as:"a",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t(g,{as:"a",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t(g,{as:"a",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Basic Tag",description:"",code:e.basicTagCode},{default:i(()=>[C("div",null,[t(g,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t(g,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),t(y,{title:"Size",description:"A label can be small or large",code:e.sizeCode},{default:i(()=>[C("div",null,[t(g,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),t(g,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),t(g,{size:"small"},{default:i(()=>[a("Small")]),_:1}),t(g,null,{default:i(()=>[a("Medium")]),_:1}),t(g,{size:"large"},{default:i(()=>[a("Large")]),_:1}),t(g,{size:"big"},{default:i(()=>[a("Big")]),_:1}),t(g,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),t(g,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),t(y,{title:"Group Size",description:"Labels can share sizes together",code:e.groupSizeCode},{default:i(()=>[t(D,{size:"huge"},{default:i(()=>[t(g,null,{default:i(()=>[a("Fun")]),_:1}),t(g,null,{default:i(()=>[a("Happy")]),_:1}),t(g,null,{default:i(()=>[a("Smart")]),_:1}),t(g,null,{default:i(()=>[a("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Colored Group",description:"Labels can share colors together",code:e.coloredGroupCode},{default:i(()=>[t(D,{color:"blue"},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a(" Fun "),t(r,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[a(" Happy "),t(F,null,{default:i(()=>[a("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Basic Group",description:"Labels can share their style together",code:e.basicGroupCode},{default:i(()=>[t(D,{basic:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a(" Fun "),t(r,{name:"close"})]),_:1}),t(g,{as:"a"},{default:i(()=>[a(" Happy "),t(F,null,{default:i(()=>[a("22")]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Tag Group",description:"Labels can share tag formatting",code:e.tagGroupCode},{default:i(()=>[t(D,{tag:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a("$10.00")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("$19.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("$24.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("$30.99")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"CircularGroup",description:"Labels can share shapes",code:e.circularGroupCode},{default:i(()=>[t(D,{circular:""},{default:i(()=>[t(g,null,{default:i(()=>[a("11")]),_:1}),t(g,null,{default:i(()=>[a("22")]),_:1}),t(g,null,{default:i(()=>[a("33")]),_:1}),t(g,null,{default:i(()=>[a("44")]),_:1}),t(g,null,{default:i(()=>[a("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const BA=be(mA,[["render",kA]]),$A="/vue-fomantic-ui/images/avatar/small/rachel.png",TA="/vue-fomantic-ui/images/avatar/small/lindsay.png",xA="/vue-fomantic-ui/images/avatar/small/matthew.png",mn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",EA="/vue-fomantic-ui/images/avatar/small/veronika.jpg",RA="/vue-fomantic-ui/images/avatar/small/tom.jpg",_a="/vue-fomantic-ui/images/avatar/small/christian.jpg",pn="/vue-fomantic-ui/images/avatar/small/matt.jpg",$l="/vue-fomantic-ui/images/avatar/small/helen.jpg",Ci="/vue-fomantic-ui/images/avatar/small/daniel.jpg",zA=R({name:"ListDoc",components:{DocExample:xe},setup(){return{listCode:`<sui-list>
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
</div>`}}}),DA={class:"intro"},PA=C("div",null,"Benefits",-1),MA={class:"list"},IA=C("a",null,"Languages",-1),FA=C("a",null,[C("b",null,"Arrested Development")],-1),VA=C("a",null,[C("b",null,"Bob's Burgers")],-1),NA=C("a",null,[C("b",null,"The Godfather Part 2")],-1),LA=C("a",null,[C("b",null,"Twin Peaks")],-1),OA=C("a",null,[C("b",null,"Arrested Development")],-1),HA=C("a",null,[C("b",null,"Bob's Burgers")],-1),jA=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function qA(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-list-item"),y=b("sui-list"),S=b("doc-example"),B=b("sui-list-list"),_=b("sui-list-header"),w=b("sui-list-description"),k=b("sui-list-content"),T=b("sui-image");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",DA,[t(p,{as:"h1"},{default:i(()=>[a("List "),t(m,null,{default:i(()=>[a(" A list is used to group related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(S,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[a("Apples")]),_:1}),t(g,null,{default:i(()=>[a("Pears")]),_:1}),t(g,null,{default:i(()=>[a("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(y,{bulleted:""},{default:i(()=>[t(g,null,{default:i(()=>[a("Gaining Access")]),_:1}),t(g,null,{default:i(()=>[a("Inviting Friends")]),_:1}),t(g,null,{default:i(()=>[PA,C("div",MA,[t(g,{as:"a"},{default:i(()=>[a("Link to somewhere")]),_:1}),t(g,null,{default:i(()=>[a("Rebates")]),_:1}),t(g,null,{default:i(()=>[a("Discounts")]),_:1})])]),_:1}),t(g,null,{default:i(()=>[a("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(y,{ordered:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a("Getting Started")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Introduction")]),_:1}),t(g,null,{default:i(()=>[IA,t(B,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a("HTML")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Javascript")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("CSS")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(y,{link:""},{default:i(()=>[t(g,{active:""},{default:i(()=>[a("Home")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("About")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Jobs")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(S,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[a("1")]),_:1}),t(g,null,{default:i(()=>[a("2")]),_:1}),t(g,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[t(r,{name:"help"}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Floated Icon")]),_:1}),t(w,null,{default:i(()=>[a(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(g,{as:"a"},{default:i(()=>[t(r,{name:"right triangle"}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Icon Alignment")]),_:1}),t(w,null,{default:i(()=>[a(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"help"}),a(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:$A}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Rachel")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),FA,a(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:TA}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Lindsay")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),VA,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:xA}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Matthew")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),NA,a(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:mn}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Jenny Hess")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),LA,a(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:EA}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),t(w,null,{default:i(()=>[a(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a("What is a FAQ?")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Who is our user?")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[a("New York City")]),_:1}),a(" A lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Chicago")]),_:1}),a(" Also quite a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Los Angeles")]),_:1}),a(" Sometimes can be a lovely city ")]),_:1}),t(g,null,{default:i(()=>[t(_,null,{default:i(()=>[a("San Francisco")]),_:1}),a(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Krolewskie Jadlo")]),_:1}),t(w,null,{default:i(()=>[a(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Xian Famous Foods")]),_:1}),t(w,null,{default:i(()=>[a(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Sapporo Haru")]),_:1}),t(w,null,{default:i(()=>[a(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{name:"map marker"}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Enid's")]),_:1}),t(w,null,{default:i(()=>[a(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(S,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(y,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:RA}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Tom")]),_:1}),a(" Top Contributor ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:_a}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Christian Rocha")]),_:1}),a(" Admin ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:pn}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Matt")]),_:1}),a(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:$l}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:_a}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:$l}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:_a}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(y,{relaxed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),OA,a(" just now. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Jl}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),HA,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ot}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),t(w,null,{default:i(()=>[a(" Last seen watching "),jA,a(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Jl}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ot}),t(k,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(y,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:$l}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:$l}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:_a}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:Ci}),t(k,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content Variations")]),_:1}),t(S,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(y,{horizontal:""},{default:i(()=>[t(g,null,{default:i(()=>[t(T,{avatar:"",src:vt}),t(k,{verticalAlign:"top"},{default:i(()=>[a(" Top Aligned ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:vt}),t(k,{verticalAlign:"middle"},{default:i(()=>[a(" Middle ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(T,{avatar:"",src:vt}),t(k,{verticalAlign:"bottom"},{default:i(()=>[a(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[C("div",null,[t(y,{floated:"right",horizontal:""},{default:i(()=>[t(g,{disabled:""},{default:i(()=>[a("© GitHub, Inc.")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Terms")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Privacy")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Contact")]),_:1})]),_:1}),t(y,{horizontal:""},{default:i(()=>[t(g,{as:"a"},{default:i(()=>[a("About Us")]),_:1}),t(g,{as:"a"},{default:i(()=>[a("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const UA=be(zA,[["render",qA]]),He="/vue-fomantic-ui/images/wireframe/short-paragraph.png",GA=R({name:"LoaderDoc",components:{DocExample:xe},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),YA={class:"intro"};function JA(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-loader"),y=b("sui-dimmer"),S=b("sui-image"),B=b("doc-example");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",YA,[t(p,{as:"h1"},{default:i(()=>[a("Loader "),t(m,null,{default:i(()=>[a(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(B,{title:"Loader",description:"A loader",code:e.loaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g)]),_:1}),t(S,{src:He})]),_:1})]),_:1},8,["code"]),t(B,{title:"Text Loader",description:"A loader can contain text",code:e.textLoaderCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),t(S,{src:He})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(B,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:e.indeterminateCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,{indeterminate:""},{default:i(()=>[a("Preparing Files")]),_:1})]),_:1}),t(S,{src:He})]),_:1})]),_:1},8,["code"]),t(B,{title:"Active",description:"A loader can be active or visible",code:e.activeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{active:""}),t(S,{src:He})]),_:1})]),_:1},8,["code"]),t(B,{title:"Diasbled",description:"A loader can be disabled or hidden",code:e.disabledCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,{disabled:""}),t(S,{src:He})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(B,{title:"Inline",description:"Loaders can appear inline with content",code:e.inlineCode},{default:i(()=>[t(g,{inline:"",active:""})]),_:1},8,["code"]),t(B,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:e.inlineCenterCode},{default:i(()=>[t(g,{inline:"centered",active:""})]),_:1},8,["code"]),t(B,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:e.speedCode},{default:i(()=>[C("div",null,[t(g,{slow:"",active:"",inline:""}),t(g,{active:"",inline:""}),t(g,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),t(B,{title:"Colors",description:"Loaders can be different colors",code:e.colorsCode},{default:i(()=>[C("div",null,[t(g,{color:"primary",inline:"",active:""}),t(g,{color:"secondary",inline:"",active:""}),t(g,{color:"red",inline:"",active:""}),t(g,{color:"orange",inline:"",active:""}),t(g,{color:"yellow",inline:"",active:""}),t(g,{color:"olive",inline:"",active:""}),t(g,{color:"green",inline:"",active:""}),t(g,{color:"teal",inline:"",active:""}),t(g,{color:"blue",inline:"",active:""}),t(g,{color:"violet",inline:"",active:""}),t(g,{color:"purple",inline:"",active:""}),t(g,{color:"pink",inline:"",active:""}),t(g,{color:"brown",inline:"",active:""}),t(g,{color:"grey",inline:"",active:""}),t(g,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),t(B,{title:"Size",description:"Loaders can have different sizes",code:e.sizeCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:""},{default:i(()=>[t(g,{size:"mini"},{default:i(()=>[a("Loading")]),_:1})]),_:1}),t(S,{src:He})]),_:1})]),_:1},8,["code"]),t(B,{title:"Inverted",description:"Loaders can have their colors inverted",code:e.invertedCode},{default:i(()=>[t(v,null,{default:i(()=>[t(y,{active:"",inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),t(S,{src:He})]),_:1})]),_:1},8,["code"])]),_:1})])}const WA=be(GA,[["render",JA]]),KA=R({name:"RailDoc",components:{DocExample:xe},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),XA={class:"intro"};function QA(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("sui-rail"),S=b("sui-grid-column"),B=b("sui-grid"),_=b("doc-example");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",XA,[t(p,{as:"h1"},{default:i(()=>[a("Rail "),t(m,null,{default:i(()=>[a(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:He}),t(y,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),t(y,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(g,{src:He}),t(y,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[a("Left Rail Content")]),_:1})]),_:1}),t(y,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[a("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:He}),t(y,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),t(y,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:He}),t(y,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),t(y,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:He}),t(y,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),t(y,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{centered:"",columns:3},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[t(g,{src:He}),t(y,{size:"small",position:"left"},{default:i(()=>[a(" Left Small Rail ")]),_:1}),t(y,{size:"large",position:"right"},{default:i(()=>[a(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZA=be(KA,[["render",QA]]),e0="/vue-fomantic-ui/images/avatar/large/ade.jpg",Cd="/vue-fomantic-ui/images/avatar/large/chris.jpg",Ts="/vue-fomantic-ui/images/avatar/large/stevie.jpg",wd="/vue-fomantic-ui/images/avatar/large/nan.jpg",t0=R({name:"RevealDoc",components:{DocExample:xe},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),i0={class:"intro"};function l0(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-image"),y=b("sui-reveal-content"),S=b("sui-reveal"),B=b("doc-example");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",i0,[t(p,{as:"h1"},{default:i(()=>[a("Reveal "),t(m,null,{default:i(()=>[a(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(B,{title:"Fade",description:"An element can disappear to reveal content below",code:e.fadeCode},{default:i(()=>[t(S,{animated:"fade"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:vt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:e0})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Move",description:"An element can move in a direction to reveal content",code:e.moveCode},{default:i(()=>[t(S,{animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:vt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Cd})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Rotate",description:"An element can rotate to reveal content below",code:e.rotateCode},{default:i(()=>[t(S,{animated:"rotate"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{circular:"",size:"small",src:vt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{circular:"",size:"small",src:Ts})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(B,{title:"Active",description:"An active reveal displays its hidden content",code:e.activeCode},{default:i(()=>[t(S,{active:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:vt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:wd})]),_:1})]),_:1})]),_:1},8,["code"]),t(B,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:e.disabledCode},{default:i(()=>[t(S,{disabled:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:vt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:wd})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(B,{title:"Instant",description:"An element can show its content without delay",code:e.instantCode},{default:i(()=>[t(S,{instant:"",animated:"move"},{default:i(()=>[t(y,{visible:""},{default:i(()=>[t(g,{size:"small",src:vt})]),_:1}),t(y,{hidden:""},{default:i(()=>[t(g,{size:"small",src:Cd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const a0=be(t0,[["render",l0]]),n0=R({name:"SegmentDoc",components:{DocExample:xe},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),s0={class:"intro"},o0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),r0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),u0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),d0=C("p",null,"Top",-1),c0=C("p",null,"Middle",-1),m0=C("p",null,"Middle",-1),p0=C("p",null,"Middle",-1),f0=C("p",null,"Bottom",-1),g0=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),h0=C("p",null,"This segment is on top",-1),_0=C("p",null,"This segment is attached on both sides",-1),b0=C("p",null,"This segment is on bottom",-1),v0=C("p",null,"Fitted Segment",-1),y0=C("p",null,"Horizontally fitted segment",-1),C0=C("p",null,"Vertically fitted segment",-1),w0=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),S0=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),A0=C("p",null,"If you notice me you must be looking very hard.",-1),k0=C("p",null,"This segment will appear to the right",-1),B0=C("p",null,"This segment will appear to the left",-1),$0=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function T0(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("doc-example"),y=b("sui-button"),S=b("sui-segment-group");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",s0,[t(p,{as:"h1"},{default:i(()=>[a("Segment "),t(m,null,{default:i(()=>[a(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(g,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[a("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(g,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(p,{icon:""},{default:i(()=>[t(r,{name:"file outline"}),a(" No documents are listed for this customer. ")]),_:1}),t(y,{color:"primary"},{default:i(()=>[a("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[o0]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[r0]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[u0]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[C("div",null,[t(v,{vertical:""},{default:i(()=>[a(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[a(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[a(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),t(g,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[d0]),_:1}),t(v,null,{default:i(()=>[c0]),_:1}),t(v,null,{default:i(()=>[m0]),_:1}),t(v,null,{default:i(()=>[p0]),_:1}),t(v,null,{default:i(()=>[f0]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Top")]),_:1}),t(S,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Nested Top")]),_:1}),t(v,null,{default:i(()=>[a("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[a("Nested Bottom")]),_:1})]),_:1}),t(S,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[a("Top")]),_:1}),t(v,null,{default:i(()=>[a("Middle")]),_:1}),t(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(S,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[a("Left")]),_:1}),t(v,null,{default:i(()=>[a("Middle")]),_:1}),t(v,null,{default:i(()=>[a("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(S,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[a("Top")]),_:1}),t(v,null,{default:i(()=>[a("Middle")]),_:1}),t(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(S,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[a("Top")]),_:1}),t(v,null,{default:i(()=>[a("Middle")]),_:1}),t(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(S,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[a("Top")]),_:1}),t(v,null,{default:i(()=>[a("Middle")]),_:1}),t(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(g,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[a("Disabled content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[a("Now Loading...")]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(g,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[g0]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[C("div",null,[t(v,{attached:"top"},{default:i(()=>[h0]),_:1}),t(v,{attached:""},{default:i(()=>[_0]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[b0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[a("Padded content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[C("div",null,[t(v,{fitted:""},{default:i(()=>[v0]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[y0]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[C0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[a("Compact content")]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[C("div",null,[t(v,{color:"red"},{default:i(()=>[a("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[a("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[C("div",null,[t(v,null,{default:i(()=>[w0]),_:1}),t(v,{secondary:""},{default:i(()=>[S0]),_:1}),t(v,{tertiary:""},{default:i(()=>[A0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[C("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),t(m,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),t(m,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(y,{floated:"right"},{default:i(()=>[a("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[C("div",null,[t(v,{floated:"right"},{default:i(()=>[k0]),_:1}),t(v,{floated:"left"},{default:i(()=>[B0]),_:1})])]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[C("div",null,[t(v,{textAlign:"right"},{default:i(()=>[a(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[a(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[a(" Center ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[$0]),_:1})]),_:1},8,["code"])]),_:1})])}const x0=be(n0,[["render",T0]]),E0=R({name:"StepDoc",components:{DocExample:xe},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),R0={class:"intro"},z0=C("p",null,"The steps take up the entire column width",-1),D0=C("p",null,"Main content",-1);function P0(e,l,n,s,u,d){const m=b("sui-header-subheader"),p=b("sui-header"),o=b("sui-divider"),r=b("sui-icon"),f=b("sui-menu-item"),c=b("sui-menu"),h=b("sui-container"),v=b("sui-segment"),g=b("sui-step"),y=b("sui-step-group"),S=b("doc-example"),B=b("sui-step-title"),_=b("sui-step-description"),w=b("sui-step-content"),k=b("sui-grid-column"),T=b("sui-grid");return P(),me("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[C("div",R0,[t(p,{as:"h1"},{default:i(()=>[a("Step "),t(m,null,{default:i(()=>[a(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(o,{hidden:""}),t(c,{floated:"right"},{default:i(()=>[t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"edit"})]),_:1}),t(f,{as:"a",icon:""},{default:i(()=>[t(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(S,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[a("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),t(S,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(y,{ordered:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(y,{vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(r,{name:"credit card"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(S,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{link:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(S,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,{disabled:""},{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(S,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(y,{stackable:"tablet"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"plane"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info circle"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(y,{unstackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"plane"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info circle"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(T,{columns:2},{default:i(()=>[t(k,null,{default:i(()=>[t(y,{fluid:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"dollar"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[z0]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[C("div",null,[t(y,{attached:"top"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[D0]),_:1}),t(y,{attached:"bottom"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(S,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(y,{widths:2},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(y,{size:"mini"},{default:i(()=>[t(g,{active:""},{default:i(()=>[t(r,{name:"payment"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),t(g,{disabled:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(y,{inverted:"",vertical:""},{default:i(()=>[t(g,{completed:""},{default:i(()=>[t(r,{name:"truck"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Shipping")]),_:1}),t(_,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(g,{completed:""},{default:i(()=>[t(r,{name:"credit card"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Billing")]),_:1}),t(_,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(g,{active:""},{default:i(()=>[t(r,{name:"info"}),t(w,null,{default:i(()=>[t(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const M0=be(E0,[["render",P0]]),I0=R({name:"BreadcrumbDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function F0(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-breadcrumb-section"),r=b("sui-breadcrumb-divider"),f=b("sui-breadcrumb"),c=b("doc-example"),h=b("sui-segment"),v=b("sui-container");return P(),me("div",null,[t(m,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),t(v,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:e.breadcrumbCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[a("Home")]),_:1}),t(r,null,{default:i(()=>[a(" / ")]),_:1}),t(o,{link:""},{default:i(()=>[a("Store")]),_:1}),t(r,null,{default:i(()=>[a(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[a("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{description:"You can do the same using shorthands",code:e.breadcrumbCode2},{default:i(()=>[t(f,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:e.dividerCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[a("Home")]),_:1}),t(r,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),t(r,{icon:"right arrow"}),t(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:e.sectionCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Home")]),_:1}),t(r,null,{default:i(()=>[a(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Link",description:"A section may be linkable or contain a link",code:e.linkCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[a("Home")]),_:1}),t(r,null,{default:i(()=>[a(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(c,{title:"Active",description:"A section can be active",code:e.activeCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{link:""},{default:i(()=>[a("Product")]),_:1}),t(r,null,{default:i(()=>[a(" / ")]),_:1}),t(o,{active:""},{default:i(()=>[a("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:e.invertedCode},{default:i(()=>[t(h,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{link:""},{default:i(()=>[a("Home")]),_:1}),t(r,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),t(r,{icon:"right chevron"}),t(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A breadcrumb can vary in size",code:e.sizeCode},{default:i(()=>[t(f,{size:"mini"},{default:i(()=>[t(o,{link:""},{default:i(()=>[a("Home")]),_:1}),t(r,{icon:"right chevron"}),t(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),t(r,{icon:"right chevron"}),t(o,null,{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const V0=be(I0,[["render",F0]]),N0=R({name:"FormDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function L0(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-form-field"),r=b("sui-checkbox"),f=b("sui-button"),c=b("sui-form"),h=b("doc-example"),v=b("sui-form-group"),g=b("sui-container");return P(),me("div",null,[t(m,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),t(g,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(h,{title:"Form",description:"A form",code:e.formCode},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{label:"First Name",placeholder:"First Name"}),t(o,{label:"Last Name",placeholder:"Last Name"}),t(o,null,{default:i(()=>[t(r,{label:"I agree to the Terms and Conditions"})]),_:1}),t(f,null,{default:i(()=>[a("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(h,{title:"Field",description:"A field is a form element containing a label and an input",code:e.fieldCode},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),t(h,{title:"Fields",description:"A set of fields can appear grouped together",code:e.fieldsCode},{default:i(()=>[t(c,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{label:"First name",placeholder:"First Name"}),t(o,{label:"Middle name",placeholder:"Middle Name"}),t(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const O0=be(N0,[["render",L0]]),Ut="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Sd="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",H0=R({name:"GridDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),j0=C("br",null,null,-1);function q0(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),r=b("sui-grid-column"),f=b("sui-grid"),c=b("doc-example"),h=b("sui-grid-row"),v=b("sui-segment"),g=b("sui-divider"),y=b("sui-menu-item"),S=b("sui-menu"),B=b("sui-container");return P(),me("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(c,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(f,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.numbers,_=>(P(),j(r,{key:_},{default:i(()=>[t(o,{src:Z})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(c,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(f,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(f,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:13},{default:i(()=>[t(o,{src:Sd})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:10},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(f,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:13},{default:i(()=>[t(o,{src:Sd})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:10},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{width:3},{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(f,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{width:8},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{width:8},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{width:8},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{width:8},{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{floated:"left",width:5},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{floated:"right",width:5},{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{width:4},{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,{width:9},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{width:3},{default:i(()=>[t(o,{src:Ut})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(f,{columns:"equal"},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),t(r,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(f,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("1")]),_:1}),t(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("1")]),_:1}),t(v,null,{default:i(()=>[a("2")]),_:1}),t(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[C("div",null,[t(g),t(f,{padded:"",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})])]),_:1},8,["code"]),t(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(f,{relaxed:"",columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(f,{padded:"",columns:5},{default:i(()=>[t(r,{color:"red"},{default:i(()=>[a("Red")]),_:1}),t(r,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(r,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(r,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(r,{color:"green"},{default:i(()=>[a("Green")]),_:1}),t(r,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t(r,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t(r,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t(r,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t(r,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t(r,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t(r,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),t(r,{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(f,{centered:"",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(f,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(S,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[a("Cats")]),_:1})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(S,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[a("Dogs")]),_:1}),t(y,null,{default:i(()=>[a("Poodle")]),_:1}),t(y,null,{default:i(()=>[a("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(S,{vertical:"",fluid:""},{default:i(()=>[t(y,{header:""},{default:i(()=>[a("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(f,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z}),j0,t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Responsive Variations")]),_:1}),t(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(f,{doubling:"",columns:5},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(r,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(f,{stackable:"",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(f,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(f,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(r,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),t(r,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[a("Tablet and Mobile")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ce})]),_:1}),t(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const U0=be(H0,[["render",q0]]),G0="/vue-fomantic-ui/images/logo.png",Y0=R({name:"MenuDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),J0=C("p",null,"Check out our new promotions",-1),W0=C("p",null,"Check out our collection of coupons",-1),K0=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),X0=C("img",{src:G0},null,-1);function Q0(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-menu-item"),r=b("sui-menu"),f=b("doc-example"),c=b("sui-input"),h=b("sui-menu-menu"),v=b("sui-label"),g=b("sui-button"),y=b("sui-dropdown-item"),S=b("sui-dropdown-menu"),B=b("sui-dropdown"),_=b("sui-icon"),w=b("sui-segment"),k=b("sui-container");return P(),me("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(k,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(f,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Editorials")]),_:1}),t(o,null,{default:i(()=>[a("Reviews")]),_:1}),t(o,null,{default:i(()=>[a("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(r,{secondary:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("Home")]),_:1}),t(o,null,{default:i(()=>[a("Messages")]),_:1}),t(o,null,{default:i(()=>[a("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(c,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,null,{default:i(()=>[a("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(r,{pointing:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("Home")]),_:1}),t(o,null,{default:i(()=>[a("Messages")]),_:1}),t(o,null,{default:i(()=>[a("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[t(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(r,{tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("Bio")]),_:1}),t(o,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(r,{text:""},{default:i(()=>[t(o,{header:""},{default:i(()=>[a("Sort By")]),_:1}),t(o,{active:""},{default:i(()=>[a("Closest")]),_:1}),t(o,null,{default:i(()=>[a("Most Comments")]),_:1}),t(o,null,{default:i(()=>[a("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,{active:"",color:"teal"},{default:i(()=>[a(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[a("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[a(" Spam "),t(v,null,{default:i(()=>[a("51")]),_:1})]),_:1}),t(o,null,{default:i(()=>[a(" Updates "),t(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(r,{pagination:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("1")]),_:1}),t(o,{disabled:""},{default:i(()=>[a("...")]),_:1}),t(o,null,{default:i(()=>[a("10")]),_:1}),t(o,null,{default:i(()=>[a("11")]),_:1}),t(o,null,{default:i(()=>[a("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(f,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{header:""},{default:i(()=>[a("Our Company")]),_:1}),t(o,null,{default:i(()=>[a("About us")]),_:1}),t(o,null,{default:i(()=>[a("Jobs")]),_:1}),t(o,null,{default:i(()=>[a("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Promotions")]),_:1}),J0]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Coupons")]),_:1}),W0]),_:1}),t(o,null,{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Rebates")]),_:1}),K0]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(c,{icon:"search",placeholder:"Search..."})]),_:1}),t(o,{position:"right",as:"div"},{default:i(()=>[t(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,null,{default:i(()=>[a("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,{href:"https://google.com"},{default:i(()=>[a("Visit Google")]),_:1}),t(o,{link:"",as:"div"},{default:i(()=>[a("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(B,{item:"",text:"Categories"},{default:i(()=>[t(S,null,{default:i(()=>[t(y,{text:"Electoronics"}),t(y,{text:"Automotive"}),t(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Browse")]),_:1}),t(o,null,{default:i(()=>[a("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(o,null,{default:i(()=>[a("Sign up")]),_:1}),t(o,null,{default:i(()=>[a("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(r,{vertical:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[t(c,{placeholder:"Search..."})]),_:1}),t(o,{as:"div"},{default:i(()=>[a(" Home "),t(h,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Search")]),_:1}),t(o,null,{default:i(()=>[a("Add")]),_:1}),t(o,null,{default:i(()=>[a("Remove")]),_:1})]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"grid layout"}),a(" Browse ")]),_:1}),t(o,null,{default:i(()=>[a("Messages")]),_:1}),t(B,{item:"",text:"More"},{default:i(()=>[t(S,null,{default:i(()=>[t(y,{icon:"edit",text:"Edit Profile"}),t(y,{icon:"globe",text:"Choose Language"}),t(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(f,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[a("A link")]),_:1}),t(o,{as:"div",link:""},{default:i(()=>[a("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(f,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(r,{stackable:""},{default:i(()=>[t(o,{as:"div"},{default:i(()=>[X0]),_:1}),t(o,null,{default:i(()=>[a("Features")]),_:1}),t(o,null,{default:i(()=>[a("Testimonials")]),_:1}),t(o,null,{default:i(()=>[a("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(r,{inverted:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("Home")]),_:1}),t(o,null,{default:i(()=>[a("Messages")]),_:1}),t(o,null,{default:i(()=>[a("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{active:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),t(o,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(o,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(o,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(o,{color:"green"},{default:i(()=>[a("Green")]),_:1}),t(o,{color:"teal"},{default:i(()=>[a("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(r,{icon:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(r,{icon:"labeled"},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),a(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),a(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(r,{fluid:"",vertical:""},{default:i(()=>[t(o,null,{default:i(()=>[a("Run")]),_:1}),t(o,null,{default:i(()=>[a("Walk")]),_:1}),t(o,null,{default:i(()=>[a("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[t(o,null,{default:i(()=>[t(_,{name:"gamepad"}),a(" Games ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video camera"}),a(" Channels ")]),_:1}),t(o,null,{default:i(()=>[t(_,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(r,{fluid:"",widths:3},{default:i(()=>[t(o,null,{default:i(()=>[a("Buy")]),_:1}),t(o,null,{default:i(()=>[a("Sell")]),_:1}),t(o,null,{default:i(()=>[a("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[C("div",null,[t(r,{attached:"top",tabular:""},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("tab1")]),_:1}),t(o,null,{default:i(()=>[a("tab2")]),_:1})]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[a(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(r,{size:"mini"},{default:i(()=>[t(o,{active:""},{default:i(()=>[a("Home")]),_:1}),t(o,null,{default:i(()=>[a("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(B,{item:"",text:"Language"},{default:i(()=>[t(S,null,{default:i(()=>[t(y,null,{default:i(()=>[a("English")]),_:1}),t(y,null,{default:i(()=>[a("Russian")]),_:1}),t(y,null,{default:i(()=>[a("Spanish")]),_:1})]),_:1})]),_:1}),t(o,{as:"div"},{default:i(()=>[t(g,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{fitted:""},{default:i(()=>[a("No padding whatsoever")]),_:1}),t(o,{fitted:"horizontally"},{default:i(()=>[a("No horizontal padding")]),_:1}),t(o,{fitted:"vertically"},{default:i(()=>[a("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(r,{borderless:""},{default:i(()=>[t(o,null,{default:i(()=>[a("1")]),_:1}),t(o,null,{default:i(()=>[a("2")]),_:1}),t(o,null,{default:i(()=>[a("3")]),_:1}),t(o,null,{default:i(()=>[a("4")]),_:1}),t(o,null,{default:i(()=>[a("5")]),_:1}),t(o,null,{default:i(()=>[a("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Z0=be(Y0,[["render",Q0]]),ek=R({name:"MessageDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),tk=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),ik=C("p",null,"Get the best news in your e-mail every day.",-1),lk=C("p",null,"You can't see me",-1),ak=C("p",null,"You can always see me",-1),nk=C("p",null,"Way to go!",-1),sk=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),ok=C("a",{href:"#"},"Login here",-1),rk=C("p",null,[a("Go to your "),C("b",null,"special offers"),a(" page to see now.")],-1),uk=C("p",null,"That offer has expired",-1);function dk(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-message-header"),r=b("sui-message"),f=b("doc-example"),c=b("sui-message-item"),h=b("sui-message-list"),v=b("sui-icon"),g=b("sui-message-content"),y=b("sui-form-field"),S=b("sui-form-group"),B=b("sui-button"),_=b("sui-form"),w=b("sui-container");return P(),me("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(w,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(f,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Changes in Service")]),_:1}),tk]),_:1})]),_:1},8,["code"]),t(f,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[a("You can now have cover images on blog pages")]),_:1}),t(c,null,{default:i(()=>[a("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(r,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[a(" Have you heard about our mailing list? ")]),_:1}),ik]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(f,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(r,{hidden:""},{default:i(()=>[lk]),_:1})]),_:1},8,["code"]),t(f,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(r,{visible:""},{default:i(()=>[ak]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(f,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(r,{floating:""},{default:i(()=>[nk]),_:1})]),_:1},8,["code"]),t(f,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(r,{compact:""},{default:i(()=>[sk]),_:1})]),_:1},8,["code"]),t(f,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[C("div",null,[t(r,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t(S,{widths:"equal"},{default:i(()=>[t(y,{label:"First Name",placeholder:"First Name"}),t(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(y,{label:"Username",placeholder:"Username"}),t(y,{label:"Password",placeholder:"Password"}),t(B,{color:"primary"},{default:i(()=>[a("Submit")]),_:1})]),_:1}),t(r,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),a(" Already signed up? "),ok,a(" instead. ")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(r,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[a(" You must register before you can do that! ")]),_:1}),a(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(f,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(r,{info:""},{default:i(()=>[t(o,null,{default:i(()=>[a("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[a("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[a("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(r,{positive:""},{default:i(()=>[t(o,null,{default:i(()=>[a("You are eligible for a reward")]),_:1}),rk]),_:1})]),_:1},8,["code"]),t(f,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(r,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(o,null,{default:i(()=>[a("We're sorry we can't apply that discount")]),_:1}),uk]),_:1})]),_:1},8,["code"]),t(f,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[C("div",null,[t(r,{color:"red"},{default:i(()=>[a("Red")]),_:1}),t(r,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),t(r,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),t(r,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),t(r,{color:"green"},{default:i(()=>[a("Green")]),_:1}),t(r,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),t(r,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),t(r,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),t(r,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),t(r,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),t(r,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),t(r,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),t(f,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[C("div",null,[t(r,{size:"mini"},{default:i(()=>[a("This is a mini message.")]),_:1}),t(r,{size:"large"},{default:i(()=>[a("This is a large message.")]),_:1}),t(r,{size:"massive"},{default:i(()=>[a("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const ck=be(ek,[["render",dk]]),mk=R({name:"TableDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),pk=C("a",{href:"#"},"Edit",-1),fk=C("a",{href:"#"},"Edit",-1),gk=C("a",{href:"#"},"Edit",-1),hk=C("br",null,null,-1),_k=C("br",null,null,-1),bk=C("br",null,null,-1),vk=C("br",null,null,-1),yk=C("br",null,null,-1),Ck=C("br",null,null,-1),wk=C("br",null,null,-1);function Sk(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-table-header-cell"),r=b("sui-table-row"),f=b("sui-table-header"),c=b("sui-table-cell"),h=b("sui-table-body"),v=b("sui-table"),g=b("doc-example"),y=b("sui-icon"),S=b("sui-table-footer"),B=b("sui-container");return P(),me("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(g,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Age")]),_:1}),t(o,null,{default:i(()=>[a("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("James")]),_:1}),t(c,null,{default:i(()=>[a("24")]),_:1}),t(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("26")]),_:1}),t(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Elyse")]),_:1}),t(c,null,{default:i(()=>[a("24")]),_:1}),t(c,null,{default:i(()=>[a("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o),t(o,null,{default:i(()=>[a("Arguments")]),_:1}),t(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("reset rating")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1}),t(c,null,{default:i(()=>[a("Resets rating to default value")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("set rating")]),_:1}),t(c,null,{default:i(()=>[a("rating (integer)")]),_:1}),t(c,null,{default:i(()=>[a("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{rowspan:"2"},{default:i(()=>[a("Name")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[a("Type")]),_:1}),t(o,{rowspan:"2"},{default:i(()=>[a("Files")]),_:1}),t(o,{colspan:"3"},{default:i(()=>[a("Languages")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Ruby")]),_:1}),t(o,null,{default:i(()=>[a("Javascript")]),_:1}),t(o,null,{default:i(()=>[a("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Alpha Team")]),_:1}),t(c,null,{default:i(()=>[a("Project 1")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("2")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1}),t(r,null,{default:i(()=>[t(c,{rowspan:"3"},{default:i(()=>[a("Beta Team")]),_:1}),t(c,null,{default:i(()=>[a("Project 1")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("52")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Project 2")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("12")]),_:1}),t(c),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c)]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Project 3")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("21")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[t(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(c),t(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(g,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{negative:""},{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,{positive:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"checkmark"}),a(" Approved ")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{positive:""},{default:i(()=>[t(y,{name:"close"}),a(" Requires call ")]),_:1})]),_:1}),t(r,{negative:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,{error:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Cannot pull data")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{error:""},{default:i(()=>[t(y,{name:"attention"}),a(" Requires call ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"attention"}),a(" Requires Action ")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{warning:""},{default:i(()=>[t(y,{name:"attention"}),a(" Hostile ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,{active:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Selected")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{active:""},{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{disabled:""},{default:i(()=>[t(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Selected")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,{color:"orange"},{default:i(()=>[a("No Name Specified")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,{color:"blue"},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"microphone"}),a(" Recording session ")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{color:"pink"},{default:i(()=>[t(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{color:"green"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,{marked:"right",color:"blue"},{default:i(()=>[a("No Name Specified")]),_:1}),t(c,{marked:"left",color:"red"},{default:i(()=>[a("Unknown")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{marked:"left",color:"green"},{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[t(y,{name:"microphone"}),a(" Recording session ")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{marked:"left",color:"orange"},{default:i(()=>[t(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Unknown")]),_:1}),t(c,{marked:"right",color:"purple"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(g,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Registration Date")]),_:1}),t(o,null,{default:i(()=>[a("E-mail address")]),_:1}),t(o,null,{default:i(()=>[a("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John Lilki")]),_:1}),t(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),t(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),t(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),t(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),t(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),t(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),t(c,{selectable:""},{default:i(()=>[pk]),_:1})]),_:1}),t(r,{warning:""},{default:i(()=>[t(c,null,{default:i(()=>[a("Jimmy")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{selectable:""},{default:i(()=>[fk]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),t(c,{selectable:""},{default:i(()=>[gk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{verticalAlign:"top"},{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{verticalAlign:"top"},{default:i(()=>[a(" Notes "),hk,a(" 1"),_k,a(" 2"),bk]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,{verticalAlign:"bottom"},{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a(" Notes "),vk,a(" 1"),yk,a(" 2"),Ck]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,{textAlign:"right"},{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,{textAlign:"center"},{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Date Joined")]),_:1}),t(o,null,{default:i(()=>[a("E-mail")]),_:1}),t(o,null,{default:i(()=>[a("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John Lilki")]),_:1}),t(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),t(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),t(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),t(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),t(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),t(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),t(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("3 People")]),_:1}),t(c,null,{default:i(()=>[a("2 Approved")]),_:1}),t(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[C("div",null,[t(v,{basic:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1}),wk,t(v,{basic:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Age")]),_:1}),t(o,null,{default:i(()=>[a("Gender")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("27")]),_:1}),t(c,null,{default:i(()=>[a("Male")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("32")]),_:1}),t(c,null,{default:i(()=>[a("Other")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("22")]),_:1}),t(c,null,{default:i(()=>[a("Other")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("3 People")]),_:1}),t(o,null,{default:i(()=>[a("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),a(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[a("Initial commit")]),_:1}),t(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),a(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[a("Initial commit")]),_:1}),t(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,{collapsing:""},{default:i(()=>[t(y,{name:"folder"}),a(" node_modules ")]),_:1}),t(c,null,{default:i(()=>[a("Initial commit")]),_:1}),t(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Age")]),_:1}),t(o,null,{default:i(()=>[a("Gender")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("27")]),_:1}),t(c,null,{default:i(()=>[a("Male")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("32")]),_:1}),t(c,null,{default:i(()=>[a("Other")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("22")]),_:1}),t(c,null,{default:i(()=>[a("Other")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("3 People")]),_:1}),t(o,null,{default:i(()=>[a("2 Approved")]),_:1}),t(o),t(o),t(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,{width:10},{default:i(()=>[a("Name")]),_:1}),t(o,{width:6},{default:i(()=>[a("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Food")]),_:1}),t(o,null,{default:i(()=>[a("Calories")]),_:1}),t(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Apples")]),_:1}),t(c,null,{default:i(()=>[a("200")]),_:1}),t(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Orange")]),_:1}),t(c,null,{default:i(()=>[a("310")]),_:1}),t(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Food")]),_:1}),t(o,null,{default:i(()=>[a("Calories")]),_:1}),t(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Apples")]),_:1}),t(c,null,{default:i(()=>[a("200")]),_:1}),t(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Orange")]),_:1}),t(c,null,{default:i(()=>[a("310")]),_:1}),t(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[C("div",null,[t(v,{padded:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[C("div",null,[t(v,{compact:""},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(f,null,{default:i(()=>[t(r,null,{default:i(()=>[t(o,null,{default:i(()=>[a("Name")]),_:1}),t(o,null,{default:i(()=>[a("Status")]),_:1}),t(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("John")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jamie")]),_:1}),t(c,null,{default:i(()=>[a("Approved")]),_:1}),t(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Jill")]),_:1}),t(c,null,{default:i(()=>[a("Denied")]),_:1}),t(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Ak=be(mk,[["render",Sk]]),kk=R({name:"AdvertisementDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),Bk=C("img",{src:Z},null,-1),$k=C("br",null,null,-1);function Tk(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-advertisement"),r=b("doc-example"),f=b("sui-container");return P(),me("div",null,[t(m,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(o,{unit:"medium rectangle"},{default:i(()=>[Bk]),_:1})]),_:1},8,["code"]),t(r,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[C("div",null,[t(o,{unit:"medium rectangle",test:"Medium Rectangle"}),t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large rectangle",test:"Large Rectangle"}),t(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(r,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[C("div",null,[t(o,{unit:"mobile banner",test:"Mobile Banner"}),t(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(r,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(r,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[C("div",null,[t(o,{unit:"button",test:"Button"}),t(o,{unit:"square button",test:"Square Button"}),t(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(r,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[C("div",null,[t(o,{unit:"skyscraper",test:"Skyscraper"}),$k,t(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(r,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[C("div",null,[t(o,{unit:"banner",test:"Banner"}),t(o,{unit:"vertical banner",test:"Vertical Banner"}),t(o,{unit:"top banner",test:"Top Banner"}),t(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(r,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[C("div",null,[t(o,{unit:"leaderboard",test:"Leaderboard"}),t(o,{unit:"large leaderboard",test:"Large Leaderboard"}),t(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(r,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(r,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(r,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(r,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const xk=be(kk,[["render",Tk]]),Ad="/vue-fomantic-ui/images/avatar/large/kristy.png",Ek="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Fn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Vn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Nn="/vue-fomantic-ui/images/avatar/large/elyse.png",Rk="/vue-fomantic-ui/images/avatar/large/matthew.png",zk="/vue-fomantic-ui/images/avatar/large/molly.png",kd="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Bd="/vue-fomantic-ui/images/avatar/large/veronika.jpg",$d="/vue-fomantic-ui/images/avatar/large/steve.jpg",Dk=R({name:"CardDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),Pk=C("span",{class:"date"},"Joined in 2013",-1),Mk=C("a",null,"Elliot Fu",-1),Ik=C("a",null,"Jenny Hess",-1),Fk=C("a",null,"Stevie Feliciano",-1),Vk=C("a",null,"Administrator",-1),Nk=C("a",null,"Helen Troy",-1),Lk=C("span",{class:"date"},"Joined in 2013",-1),Ok=C("span",null,"2 days ago",-1),Hk=C("a",null,"Animals",-1),jk=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),qk=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),Uk=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),Gk=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),Yk=C("span",{class:"category"},"Animals",-1),Jk=C("span",{class:"category"},"Animals",-1),Wk=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:pn}),a(" Matt ")],-1),Kk=C("span",{class:"category"},"Animals",-1),Xk=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:pn}),a(" Matt ")],-1),Qk=C("p",null,"Jenny is a student studying Media Management at the New School",-1),Zk=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:mn}),a(" Jenny ")],-1),eB=C("a",null,"Friends",-1),tB=C("span",{class:"right floated"}," Joined in 2013 ",-1),iB=C("a",null,[C("i",{class:"user icon"}),a(" 75 Friends ")],-1),lB=C("a",null,"Coworker",-1),aB=C("span",{class:"right floated"}," Joined in 2011 ",-1),nB=C("a",null,[C("i",{class:"user icon"}),a(" 35 Friends ")],-1),sB=C("a",null,"Coworker",-1),oB=C("span",{class:"right floated"}," Joined in 2014 ",-1),rB=C("a",null,[C("i",{class:"user icon"}),a(" 151 Friends ")],-1);function uB(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),r=b("sui-card-header"),f=b("sui-card-meta"),c=b("sui-card-description"),h=b("sui-card-content"),v=b("sui-icon"),g=b("sui-card"),y=b("doc-example"),S=b("sui-button"),B=b("sui-button-group"),_=b("sui-card-group"),w=b("sui-feed-summary"),k=b("sui-feed-content"),T=b("sui-feed-event"),E=b("sui-feed"),I=b("sui-grid-column"),F=b("sui-grid"),D=b("sui-segment"),L=b("sui-container");return P(),me("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(L,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(y,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ad,wrapped:""}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Kristy")]),_:1}),t(f,null,{default:i(()=>[Pk]),_:1}),t(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[C("a",null,[t(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:Ot,floated:"right",size:"mini"}),t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[a("Friends of Veronika")]),_:1}),t(c,null,{default:i(()=>[a("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(S,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),t(S,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(o,{src:mn,floated:"right",size:"mini"}),t(r,null,{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[a("New Member")]),_:1}),t(c,null,{default:i(()=>[a("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(B,{widths:2},{default:i(()=>[t(S,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),t(S,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(y,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(p,{sub:""},{default:i(()=>[a("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(w,null,{default:i(()=>[Mk,a(" added "),Ik,a(" to the project ")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(w,null,{default:i(()=>[Fk,a(" was added as an "),Vk]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(w,null,{default:i(()=>[Nk,a(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(S,{as:"button"},{default:i(()=>[a("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Ad,wrapped:""}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Kristy")]),_:1}),t(f,null,{default:i(()=>[Lk]),_:1}),t(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[C("a",null,[t(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[a("Friend")]),_:1}),t(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),t(f,null,{default:i(()=>[a("Friend")]),_:1}),t(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[a("Friend")]),_:1}),t(c,null,{default:i(()=>[a(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[Ok,Hk]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),t(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(S,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),t(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(S,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[a("2 days ago")]),_:1}),t(c,null,{default:i(()=>[jk,qk]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[a("2 days ago")]),_:1}),t(c,null,{default:i(()=>[Uk,Gk]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(F,{columns:3},{default:i(()=>[t(I,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Ek}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Fn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[t(g,{fluid:""},{default:i(()=>[t(o,{src:Vn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(g,{centered:""},{default:i(()=>[t(o,{src:Nn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(g,{horizontal:""},{default:i(()=>[t(o,{src:Nn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[Yk]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(g,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[Jk]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[Wk]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(g,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(f,null,{default:i(()=>[Kk]),_:1}),t(c,null,{default:i(()=>[t(o,{src:Ce})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[Xk]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,{textAlign:"center"},{default:i(()=>[a("Jenny Hess")]),_:1}),t(c,{textAlign:"center"},{default:i(()=>[Qk]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[Zk]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(D,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Rk}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Matt Giampietro")]),_:1}),t(f,null,{default:i(()=>[eB]),_:1}),t(c,null,{default:i(()=>[a(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[tB,iB]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:zk}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Molly")]),_:1}),t(f,null,{default:i(()=>[lB]),_:1}),t(c,null,{default:i(()=>[a(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[aB,nB]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Nn}),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elyse")]),_:1}),t(f,null,{default:i(()=>[sB]),_:1}),t(c,null,{default:i(()=>[a(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[oB,rB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,{color:"primary",href:"#"},{default:i(()=>[t(o,{src:Bl})]),_:1}),t(g,{color:"secondary",href:"#"},{default:i(()=>[t(o,{src:Bl})]),_:1}),t(g,{color:"red",href:"#"},{default:i(()=>[t(o,{src:Bl})]),_:1}),t(g,{color:"orange",href:"#"},{default:i(()=>[t(o,{src:Bl})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Z})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Vn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Fn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:kd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ts})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:$d})]),_:1})]),_:1})]),_:1},8,["code"]),t(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:Vn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Fn})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:kd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Bd})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:Ts})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:$d})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const dB=be(Dk,[["render",uB]]),cB=R({name:"CommentDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),mB=C("span",null,"Today at 5:42PM",-1),pB=C("a",null,"Reply",-1),fB=C("span",null,"Yesterday at 12:30AM",-1),gB=C("a",null,"Reply",-1),hB={class:"comments"},_B=C("span",null,"Just now",-1),bB=C("a",null,"Reply",-1),vB=C("span",null,"5 days ago",-1),yB=C("a",null,"Reply",-1),CB=C("div",{class:"date"},"2 days ago",-1),wB=C("div",{class:"rating"},[C("i",{class:"star icon"}),a(" 5 Faves ")],-1),SB=C("a",null,"Reply",-1),AB=C("a",null,"Save",-1),kB=C("a",null,"Hide",-1),BB=C("a",null,[C("i",{class:"expand icon"}),a(" Full-screen ")],-1),$B=C("a",null,"Reply",-1),TB=C("a",null,"Reply",-1),xB=C("a",null,"Replay",-1),EB=C("span",null,"Today at 5:42PM",-1),RB=C("a",{href:"#"},"Replay",-1),zB=C("span",null,"Yesterday at 12:30AM",-1),DB=C("a",{href:"#"},"Replay",-1),PB=C("span",null,"Just now",-1),MB=C("a",{href:"#"},"Replay",-1),IB=C("span",null,"5 days ago",-1),FB=C("a",{href:"#"},"Replay",-1),VB=C("span",null,"Today at 5:42PM",-1),NB=C("a",{href:"#"},"Replay",-1),LB=C("span",null,"Yesterday at 12:30AM",-1),OB=C("a",{href:"#"},"Replay",-1),HB=C("span",null,"Just now",-1),jB=C("a",{href:"#"},"Replay",-1),qB=C("span",null,"5 days ago",-1),UB=C("a",{href:"#"},"Replay",-1),GB=C("span",null,"Today at 5:42PM",-1),YB=C("a",{href:"#"},"Replay",-1),JB=C("span",null,"Yesterday at 12:30AM",-1),WB=C("a",{href:"#"},"Replay",-1),KB=C("span",null,"Just now",-1),XB=C("a",{href:"#"},"Replay",-1),QB=C("span",null,"5 days ago",-1),ZB=C("a",{href:"#"},"Replay",-1),e$=C("span",null,"Today at 5:42PM",-1),t$=C("a",{href:"#"},"Replay",-1),i$=C("span",null,"Yesterday at 12:30AM",-1),l$=C("a",{href:"#"},"Replay",-1),a$=C("span",null,"Just now",-1),n$=C("a",{href:"#"},"Replay",-1),s$=C("span",null,"5 days ago",-1),o$=C("a",{href:"#"},"Replay",-1);function r$(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-comment-avatar"),r=b("sui-comment-author"),f=b("sui-comment-metadata"),c=b("sui-comment-text"),h=b("sui-comment-actions"),v=b("sui-comment-content"),g=b("sui-comment"),y=b("sui-comment-group"),S=b("doc-example"),B=b("sui-form-textarea"),_=b("sui-icon"),w=b("sui-button"),k=b("sui-form"),T=b("sui-segment"),E=b("sui-container");return P(),me("div",null,[t(m,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(S,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),t(f,null,{default:i(()=>[mB]),_:1}),t(c,null,{default:i(()=>[a("How artistic!")]),_:1}),t(h,null,{default:i(()=>[pB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[fB]),_:1}),t(c,null,{default:i(()=>[a("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[gB]),_:1})]),_:1}),C("div",hB,[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[_B]),_:1}),t(c,null,{default:i(()=>[a("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[bB]),_:1})]),_:1})]),_:1})])]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[vB]),_:1}),t(c,null,{default:i(()=>[a("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[yB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(S,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),t(f,null,{default:i(()=>[CB,wB]),_:1}),t(c,null,{default:i(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Tom Lukic")]),_:1}),t(c,null,{default:i(()=>[a(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[SB,AB,kB,BB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Steve Jobs")]),_:1}),t(f,null,{default:i(()=>[a("2 days ago")]),_:1}),t(c,null,{default:i(()=>[a("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[$B]),_:1}),t(k,{reply:""},{default:i(()=>[t(B),t(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),a(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(S,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Christian Rocha")]),_:1}),t(f,null,{default:i(()=>[a("2 days ago")]),_:1}),t(c,null,{default:i(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[TB]),_:1})]),_:1}),t(y,{collapsed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[a("1 days ago")]),_:1}),t(c,null,{default:i(()=>[a("No, it wont")]),_:1}),t(h,null,{default:i(()=>[xB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(S,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(y,{threaded:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),t(f,null,{default:i(()=>[EB]),_:1}),t(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[RB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[zB]),_:1}),t(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[DB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[PB]),_:1}),t(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[MB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[IB]),_:1}),t(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[FB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(y,{minimal:""},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),t(f,null,{default:i(()=>[VB]),_:1}),t(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[NB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[LB]),_:1}),t(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[OB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[HB]),_:1}),t(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[jB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[qB]),_:1}),t(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[UB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(y,{size:"small"},{default:i(()=>[t(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),t(f,null,{default:i(()=>[GB]),_:1}),t(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[YB]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[JB]),_:1}),t(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[WB]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[KB]),_:1}),t(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[XB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[QB]),_:1}),t(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[ZB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[a("Comments")]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),t(f,null,{default:i(()=>[e$]),_:1}),t(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[t$]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),t(f,null,{default:i(()=>[i$]),_:1}),t(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[l$]),_:1})]),_:1}),t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),t(f,null,{default:i(()=>[a$]),_:1}),t(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[n$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),t(f,null,{default:i(()=>[s$]),_:1}),t(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[o$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const u$=be(cB,[["render",r$]]),d$=R({name:"FeedDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),c$=C("img",{src:Ot},null,-1),m$=C("img",{src:Ot},null,-1),p$=C("a",null,"Coworkers",-1),f$=C("img",{src:mn},null,-1),g$=C("a",null,"Jenny Hess",-1),h$=C("a",null,"coworker",-1),_$=C("img",{src:$l},null,-1),b$=C("a",null,"Helen Troy",-1),v$=C("a",null,[C("img",{src:Z})],-1),y$=C("a",null,[C("img",{src:Z})],-1),C$=C("a",null,"Elliot Fu",-1),w$=C("a",null,"Jenny Hess",-1),S$=C("a",null,"Stevie Feliciano",-1),A$=C("a",null,"Elliot Fu",-1),k$=C("a",null,"Helen Troy",-1),B$=C("a",null,"Christian Rocha",-1),$$=C("img",{src:Ot},null,-1),T$=C("div",{class:"date"},"Just now",-1),x$=C("a",{class:"user"},"Elliot Fu",-1);function E$(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-feed-label"),r=b("sui-feed-user"),f=b("sui-feed-date"),c=b("sui-feed-summary"),h=b("sui-icon"),v=b("sui-feed-like"),g=b("sui-feed-meta"),y=b("sui-feed-content"),S=b("sui-feed-event"),B=b("sui-feed"),_=b("doc-example"),w=b("sui-feed-extra"),k=b("sui-segment"),T=b("sui-container");return P(),me("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(T,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(B,null,{default:i(()=>[t(S,null,{default:i(()=>[t(o,null,{default:i(()=>[c$]),_:1}),t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),a(" added you as a friend "),t(f,null,{default:i(()=>[a("1 Hour Ago")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),a(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(B,null,{default:i(()=>[t(S,null,{default:i(()=>[t(o,null,{default:i(()=>[m$]),_:1}),t(y,null,{default:i(()=>[a(" You added Elliot Fu to the group "),p$]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(B,null,{default:i(()=>[t(S,null,{default:i(()=>[t(o,null,{default:i(()=>[f$]),_:1}),t(y,null,{default:i(()=>[t(f,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),t(c,null,{default:i(()=>[a(" You added "),g$,a(" to your "),h$,a(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(B,null,{default:i(()=>[t(S,null,{default:i(()=>[t(o,null,{default:i(()=>[_$]),_:1}),t(y,null,{default:i(()=>[t(f,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),t(c,null,{default:i(()=>[b$,a(" added 2 photos ")]),_:1}),t(w,{images:""},{default:i(()=>[v$,y$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(B,{size:"small"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Followers Activity")]),_:1}),t(S,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[C$,a(" added "),w$,a(" as a friend ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[S$,a(" added "),A$,a(" as a friend ")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[t(y,null,{default:i(()=>[t(c,null,{default:i(()=>[k$,a(" added "),B$,a(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(k,{inverted:""},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(S,null,{default:i(()=>[t(o,null,{default:i(()=>[$$]),_:1}),t(y,null,{default:i(()=>[T$,t(c,null,{default:i(()=>[x$,a(" posted on his page ")]),_:1}),t(w,{text:""},{default:i(()=>[a(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const R$=be(d$,[["render",E$]]),z$=R({name:"ItemDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),D$=C("img",{src:Z},null,-1),P$=C("span",null,"Description",-1),M$=C("img",{src:He},null,-1),I$=C("img",{src:Z},null,-1),F$=C("span",null,"Description",-1),V$=C("img",{src:He},null,-1),N$=C("img",{src:Z},null,-1),L$=C("img",{src:Z},null,-1),O$=C("img",{src:Z},null,-1),H$=C("img",{src:Z},null,-1),j$=C("img",{src:Z},null,-1),q$=C("img",{src:Z},null,-1),U$=C("img",{src:Z},null,-1),G$=C("span",{class:"price"},"$1200",-1),Y$=C("span",{class:"stay"},"1 Month",-1),J$=C("img",{src:He},null,-1),W$=C("span",{class:"price"},"$1000",-1),K$=C("span",{class:"stay"},"2 Weeks",-1),X$=C("img",{src:He},null,-1),Q$=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),Z$=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),eT=C("img",{src:He},null,-1),tT=C("img",{src:Z},null,-1),iT=C("span",{class:"cinema"},"Union Square 14",-1),lT=C("img",{src:He},null,-1),aT=C("img",{src:Z},null,-1),nT=C("span",{class:"cinema"},"IFC Cinema",-1),sT=C("img",{src:He},null,-1),oT=C("img",{src:Z},null,-1),rT=C("span",{class:"cinema"},"IFC",-1),uT=C("img",{src:He},null,-1),dT=C("img",{src:He},null,-1),cT=C("img",{src:He},null,-1),mT=C("img",{src:He},null,-1),pT=C("span",{class:"price"},"$1200",-1),fT=C("span",{class:"stay"},"1 Month",-1),gT=C("img",{src:He},null,-1),hT=C("span",{class:"price"},"$1000",-1),_T=C("span",{class:"stay"},"2 Weeks",-1),bT=C("img",{src:He},null,-1);function vT(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-item-image"),r=b("sui-item-header"),f=b("sui-item-meta"),c=b("sui-item-description"),h=b("sui-item-extra"),v=b("sui-item-content"),g=b("sui-item"),y=b("sui-item-group"),S=b("doc-example"),B=b("sui-image"),_=b("sui-icon"),w=b("sui-label"),k=b("sui-button"),T=b("sui-segment"),E=b("sui-container");return P(),me("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(S,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[D$]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Header")]),_:1}),t(f,null,{default:i(()=>[P$]),_:1}),t(c,null,{default:i(()=>[M$]),_:1}),t(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[I$]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Header")]),_:1}),t(f,null,{default:i(()=>[F$]),_:1}),t(c,null,{default:i(()=>[V$]),_:1}),t(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(S,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[N$]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[L$]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[O$]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[H$]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content A ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[j$]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content B ")]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[q$]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[U$]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[G$,Y$]),_:1}),t(c,null,{default:i(()=>[J$]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[W$,K$]),_:1}),t(c,null,{default:i(()=>[X$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(c,null,{default:i(()=>[Q$,Z$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),t(c,null,{default:i(()=>[eT]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(S,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(y,{divided:""},{default:i(()=>[t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[tT]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("12 Years a Slave")]),_:1}),t(f,null,{default:i(()=>[iT]),_:1}),t(c,null,{default:i(()=>[lT]),_:1}),t(h,null,{default:i(()=>[t(w,null,{default:i(()=>[a("IMAX")]),_:1}),t(w,null,{default:i(()=>[t(_,{name:"globe"}),a(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[aT]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),t(f,null,{default:i(()=>[nT]),_:1}),t(c,null,{default:i(()=>[sT]),_:1}),t(h,null,{default:i(()=>[t(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(w,null,{default:i(()=>[a("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(o,null,{default:i(()=>[oT]),_:1}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Watchmen")]),_:1}),t(f,null,{default:i(()=>[rT]),_:1}),t(c,null,{default:i(()=>[uT]),_:1}),t(h,null,{default:i(()=>[t(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"tiny",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"tiny",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"tiny",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,{as:"a"},{default:i(()=>[a("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Top Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[a("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(r,null,{default:i(()=>[a("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(y,null,{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[a("Content A")]),_:1}),t(c,null,{default:i(()=>[dT]),_:1}),t(h,null,{default:i(()=>[t(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[a("Content B")]),_:1}),t(c,null,{default:i(()=>[cT]),_:1}),t(h,null,{default:i(()=>[t(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(r,null,{default:i(()=>[a("Content C")]),_:1}),t(c,null,{default:i(()=>[mT]),_:1}),t(h,null,{default:i(()=>[t(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(S,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),t(f,null,{default:i(()=>[pT,fT]),_:1}),t(c,null,{default:i(()=>[gT]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(B,{size:"small",src:Z}),t(v,null,{default:i(()=>[t(r,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),t(f,null,{default:i(()=>[hT,_T]),_:1}),t(c,null,{default:i(()=>[bT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const yT=be(z$,[["render",vT]]),CT=R({name:"StatisticDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),wT=C("br",null,null,-1),ST=C("br",null,null,-1),AT=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),kT=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),BT=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),$T=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function TT(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-statistic"),r=b("doc-example"),f=b("sui-statistic-group"),c=b("sui-statistic-value"),h=b("sui-statistic-label"),v=b("sui-icon"),g=b("sui-image"),y=b("sui-segment"),S=b("sui-container");return P(),me("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(S,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(r,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,{value:"31,200",label:"Views"}),t(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(r,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(c,{text:""},{default:i(()=>[a(" Three"),wT,a(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(v,{name:"plane"}),a(" 5 ")]),_:1}),t(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(g,{circular:"",inline:"",src:$s}),a(" 42 ")]),_:1}),t(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(r,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(r,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(r,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(y,{inverted:""},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(f,{stackable:""},{default:i(()=>[t(o,{color:"red",value:"27",label:"Red"}),t(o,{color:"orange",value:"8",label:"Orange"}),t(o,{color:"yellow",value:"28",label:"Yellow"}),t(o,{color:"olive",value:"7",label:"Olive"}),t(o,{color:"green",value:"14",label:"Green"}),t(o,{color:"teal",value:"82",label:"Teal"}),t(o,{color:"blue",value:"1",label:"Blue"}),t(o,{color:"violet",value:"22",label:"Violet"}),t(o,{color:"purple",value:"23",label:"Purple"}),t(o,{color:"pink",value:"15",label:"Pink"}),t(o,{color:"brown",value:"36",label:"Brown"}),t(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(r,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(f,{widths:4},{default:i(()=>[t(o,{value:"22",label:"Faves"}),t(o,null,{default:i(()=>[t(c,{text:""},{default:i(()=>[a(" Three"),ST,a(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(v,{name:"plane"}),a(" 5 ")]),_:1}),t(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),t(o,null,{default:i(()=>[t(c,null,{default:i(()=>[t(g,{circular:"",inline:"",src:$s}),a(" 42 ")]),_:1}),t(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(y,null,{default:i(()=>[t(o,{floated:"right",value:"2,204",label:"Views"}),AT,kT,t(o,{floated:"left",value:"2,204",label:"Views"}),BT,$T]),_:1})]),_:1},8,["code"]),t(r,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",value:"2,204",label:"Views"}),t(o,{size:"tiny",value:"2,204",label:"Views"}),t(o,{size:"small",value:"2,204",label:"Views"}),t(o,{value:"2,204",label:"Views"}),t(o,{size:"large",value:"2,204",label:"Views"}),t(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const xT=be(CT,[["render",TT]]),ET=R({name:"AccordionDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),RT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),zT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),DT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),PT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),MT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),IT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),FT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),VT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),NT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),LT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),OT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),HT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),jT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),qT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),UT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),GT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),YT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),JT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),WT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),KT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function XT(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-accordion-tab"),r=b("sui-accordion"),f=b("doc-example"),c=b("sui-segment"),h=b("sui-container");return P(),me("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(f,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[RT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[zT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[DT,PT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(r,{styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[MT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[IT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[FT,VT]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(f,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(r,{fluid:"",styled:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[NT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[LT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[OT,HT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(r,{inverted:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[jT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[qT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[UT,GT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Usage")]),_:1}),t(f,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(r,{multiple:""},{default:i(()=>[t(o,{title:"What is a dog?"},{default:i(()=>[YT]),_:1}),t(o,{title:"What kinds of dogs are there?"},{default:i(()=>[JT]),_:1}),t(o,{title:"How do you acquire a dog?"},{default:i(()=>[WT,KT]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const QT=be(ET,[["render",XT]]),ZT=R({name:"CalendarDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{calendar1:H(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function ex(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-calendar"),r=b("doc-example"),f=b("sui-container");return P(),me("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(o,{modelValue:e.calendar1,"onUpdate:modelValue":l[0]||(l[0]=c=>e.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const tx=be(ZT,[["render",ex]]),ix=R({name:"PropertyListTable",props:{properties:Array}});function lx(e,l,n,s,u,d){const m=b("sui-table-header-cell"),p=b("sui-table-row"),o=b("sui-table-header"),r=b("sui-table-cell"),f=b("sui-table-body"),c=b("sui-table");return P(),j(c,{celled:""},{default:i(()=>[t(o,null,{default:i(()=>[t(p,null,{default:i(()=>[t(m,null,{default:i(()=>[a("Name")]),_:1}),t(m,null,{default:i(()=>[a("Type")]),_:1}),t(m,null,{default:i(()=>[a("Default")]),_:1}),t(m,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(f,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.properties,h=>(P(),j(p,{key:h.name},{default:i(()=>[t(r,null,{default:i(()=>[a(Be(h.name),1)]),_:2},1024),t(r,null,{default:i(()=>[a(Be(h.type),1)]),_:2},1024),t(r,null,{default:i(()=>[a(Be(h.default),1)]),_:2},1024),t(r,null,{default:i(()=>[a(Be(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const fn=be(ix,[["render",lx]]),ax=R({name:"CheckboxDoc",components:{DocPageHeader:je,DocExample:xe,PropertyListTable:fn},setup(){const e=H(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=H([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,u=H(!1),d='<sui-checkbox toggle v-model="toggle" />',m=H(!1);return{checked:e,checkboxCode:l,selected:n,multipleCode:s,toggle:u,toggleCode:d,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),nx={class:"ui form"},sx={class:"grouped fields"},ox={class:"field"},rx={class:"field"},ux={class:"field"};function dx(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-checkbox"),r=b("doc-example"),f=b("property-list-table"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),S=b("sui-table"),B=b("sui-container");return P(),me("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(o,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[C("div",nx,[C("div",sx,[C("div",ox,[t(o,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":l[1]||(l[1]=_=>e.selected=_)},null,8,["modelValue"])]),C("div",rx,[t(o,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":l[2]||(l[2]=_=>e.selected=_)},null,8,["modelValue"])]),C("div",ux,[t(o,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":l[3]||(l[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),a(" selected : "+Be(e.selected),1)]),_:1},8,["code"]),t(r,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(o,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":l[4]||(l[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(o,{slider:"",modelValue:e.slider,"onUpdate:modelValue":l[5]||(l[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),t(S,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Name")]),_:1}),t(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.events,_=>(P(),j(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[a(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[a(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const cx=be(ax,[["render",dx]]),mx=R({name:"DimmerDoc",components:{DocPageHeader:je,DocExample:xe},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=H(!1);return{dimmerCode:e,contentDimmerCode:l,active:n,pageDimmerCode:`<div>
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
</div>`}}});function px(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-image"),r=b("sui-image-group"),f=b("sui-dimmer"),c=b("sui-dimmer-dimmable"),h=b("doc-example"),v=b("sui-icon"),g=b("sui-button"),y=b("sui-header-subheader"),S=b("sui-container");return P(),me("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(S,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),t(r,{size:"small"},{default:i(()=>[t(o,{src:Z}),t(o,{src:Z}),t(o,{src:Z})]),_:1}),t(o,{size:"medium",src:Ut}),t(f,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),t(r,{size:"small"},{default:i(()=>[t(o,{src:Z}),t(o,{src:Z}),t(o,{src:Z})]),_:1}),t(o,{size:"medium",src:Ut}),t(f,{active:""},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),a(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[C("div",null,[t(g,{labeled:"",icon:"",onClick:l[0]||(l[0]=B=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),a(" Show ")]),_:1}),t(f,{active:e.active,page:"",onClick:l[1]||(l[1]=B=>e.active=!1)},{default:i(()=>[t(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),a(" Dimmed Message! "),t(y,null,{default:i(()=>[a("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const fx=be(mx,[["render",px]]),gx=R({name:"DropdownDoc",components:{DocPageHeader:je,DocExample:xe},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=H(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,s=H(null),u=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],d=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,m=H(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],o=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,r=H(null),f=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,c=H(null),h=`<sui-dropdown
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
/>`,v=H(null),g=`<sui-dropdown
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
/>`,y=H(null),S=`<sui-dropdown
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
/>`,B=H({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:l,selectionCode:n,selected2:s,searchSelectionOptions:u,searchSelectionCode:d,selected3:m,clearableSelectionOptions:p,clearableSelectionCode:o,selected4:r,multipleCode:f,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:g,selected7:y,searchInMenuCode:S,selected8:B,inlineCode:`<span>
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
</sui-button-group>`}}});function hx(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-dropdown-item"),r=b("sui-divider"),f=b("sui-dropdown-menu"),c=b("sui-dropdown"),h=b("doc-example"),v=b("sui-button"),g=b("sui-button-group"),y=b("sui-container");return P(),me("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(y,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(c,{text:"File"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Open...",description:"ctrl + o"}),t(o,{text:"Save as...",description:"ctrl + s"}),t(o,{text:"Rename",description:"ctrl + r"}),t(o,{text:"Make a copy"}),t(o,{icon:"folder",text:"Move to folder"}),t(o,{icon:"trash",text:"Move to trash"}),t(r),t(o,{text:"Download As..."}),t(o,{text:"Publish To Web"}),t(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(c,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":l[0]||(l[0]=S=>e.selected1=S),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(c,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":l[1]||(l[1]=S=>e.selected2=S),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(c,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":l[2]||(l[2]=S=>e.selected3=S),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(c,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":l[3]||(l[3]=S=>e.selected4=S),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":l[4]||(l[4]=S=>e.selected5=S),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":l[5]||(l[5]=S=>e.selected6=S),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":l[6]||(l[6]=S=>e.selected7=S),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[C("span",null,[a(" Show me posts by "),t(c,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":l[7]||(l[7]=S=>e.selected8=S),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"New"}),t(o,{text:"Save As"}),t(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(g,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[a("Save")]),_:1}),t(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{text:"Edit Post",icon:"edit"}),t(o,{text:"Remove Post",icon:"delete"}),t(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _x=be(gx,[["render",hx]]),bx=R({name:"EmbedDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function vx(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-embed"),r=b("doc-example"),f=b("sui-container");return P(),me("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(f,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(r,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const yx=be(bx,[["render",vx]]),Cx="/vue-fomantic-ui/images/avatar/large/rachel.png",wx=R({name:"ModalDoc",components:{DocPageHeader:je,DocExample:xe},setup(){const e=`<div>
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
</div>`,l=H(!1),n=H(!1);return{modalCode:e,modal1:l,basicModal:n,basicCode:`<div>
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
</div>`}}}),Sx=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),Ax=C("p",null,"Is it okay to use this photo?",-1),kx=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function Bx(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-button"),r=b("sui-modal-header"),f=b("sui-image"),c=b("sui-modal-description"),h=b("sui-modal-content"),v=b("sui-modal-actions"),g=b("sui-modal"),y=b("doc-example"),S=b("sui-icon"),B=b("sui-container");return P(),me("div",null,[t(m,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(y,{title:"Modal",description:"A standard modal",code:e.modalCode},{default:i(()=>[C("div",null,[t(o,{onClick:l[0]||(l[0]=_=>e.modal1=!0)},{default:i(()=>[a("Show Modal")]),_:1}),t(g,{modelValue:e.modal1,"onUpdate:modelValue":l[2]||(l[2]=_=>e.modal1=_)},{default:i(()=>[t(r,null,{default:i(()=>[a("Select a Photo")]),_:1}),t(h,{image:""},{default:i(()=>[t(f,{wrapped:"",size:"medium",src:Cx}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[a("Default Profile Image")]),_:1}),Sx,Ax]),_:1})]),_:1}),t(v,null,{default:i(()=>[t(o,{positive:"",onClick:l[1]||(l[1]=_=>e.modal1=!1)},{default:i(()=>[a("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t(y,{title:"Basic",description:"A modal can reduce its complexity",code:e.basicCode},{default:i(()=>[C("div",null,[t(o,{onClick:l[3]||(l[3]=_=>e.basicModal=!0)},{default:i(()=>[a("Basic Modal")]),_:1}),t(g,{basic:"",modelValue:e.basicModal,"onUpdate:modelValue":l[5]||(l[5]=_=>e.basicModal=_)},{default:i(()=>[t(r,{icon:""},{default:i(()=>[t(S,{name:"archive"}),a(" Archive Old Messages ")]),_:1}),t(h,null,{default:i(()=>[kx]),_:1}),t(v,null,{default:i(()=>[t(o,{basic:"",color:"red",inverted:"",onClick:l[4]||(l[4]=_=>e.basicModal=!1)},{default:i(()=>[t(S,{name:"remove"}),a(" No ")]),_:1}),t(o,{basic:"",color:"green"},{default:i(()=>[t(S,{name:"checkmark"}),a(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const $x=be(wx,[["render",Bx]]),Tx="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",xx=R({name:"PopupDoc",components:{DocPageHeader:je,DocExample:xe},setup(){const e=H(null),l=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=H(null),s=H(null),u=H(null),d=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,m=H(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,o=H(null),r=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,f=H(null),c=H(null),h=H(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,g=H(null),y=H(null),S=H(null),B=H(null),_=H(null),w=H(null),k=H(null),T=H(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,I=H(null),F=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,D=H(null),L=H(null),J=H(null),q=H(null),de=H(null),ke=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,O=H(null),Y=H(null);return{popupTrigger:e,popupCode:l,titledTrigger1:n,titledTrigger2:s,titledTrigger3:u,titledCode:d,triggerTriger:m,triggerCode:p,basicTrigger:o,basicCode:r,wideTrigger1:f,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:g,positionTrigger2:y,positionTrigger3:S,positionTrigger4:B,positionTrigger5:_,positionTrigger6:w,positionTrigger7:k,positionTrigger8:T,positionCode:E,flowingTrigger:I,flowingCode:F,sizeTrigger1:D,sizeTrigger2:L,sizeTrigger3:J,sizeTrigger4:q,sizeTrigger5:de,sizeCode:ke,invertedTrigger1:O,invertedTrigger2:Y,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),Ex=C("p",null,[C("b",null,"2"),a(" projects, $10 a month ")],-1),Rx=C("p",null,[C("b",null,"5"),a(" projects, $20 a month ")],-1),zx=C("p",null,[C("b",null,"8"),a(" projects, $25 a month ")],-1);function Dx(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),r=b("sui-button"),f=b("sui-popup"),c=b("doc-example"),h=b("sui-image"),v=b("sui-card-header"),g=b("sui-card-description"),y=b("sui-card-content"),S=b("sui-card"),B=b("sui-rating"),_=b("sui-divider"),w=b("sui-grid-column"),k=b("sui-grid"),T=b("sui-container");return P(),me("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(T,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(c,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(r,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.popupTrigger},{default:i(()=>[a(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:Ot,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Jl,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:pn,ref:"titledTrigger3"},null,512),t(f,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(f,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(S,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:Tx}),t(y,null,{default:i(()=>[t(v,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[a(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(f,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(B,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(c,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(r,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(r,{ref:"positionTrigger1"},{default:i(()=>[a("Top Left")]),_:1},512),t(r,{ref:"positionTrigger2"},{default:i(()=>[a("Top Center")]),_:1},512),t(r,{ref:"positionTrigger3"},{default:i(()=>[a("Top Right")]),_:1},512),t(_),t(r,{ref:"positionTrigger4"},{default:i(()=>[a("Bottom Left")]),_:1},512),t(r,{ref:"positionTrigger5"},{default:i(()=>[a("Bottom Center")]),_:1},512),t(r,{ref:"positionTrigger6"},{default:i(()=>[a("Bottom Right")]),_:1},512),t(_),t(r,{ref:"positionTrigger7"},{default:i(()=>[a("Right Center")]),_:1},512),t(r,{ref:"positionTrigger8"},{default:i(()=>[a("Left Center")]),_:1},512),t(f,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(f,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(r,{ref:"flowingTrigger"},{default:i(()=>[a("Show Flowing Popup")]),_:1},512),t(f,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(k,{centered:"",divided:"",columns:3},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Basic Plan")]),_:1}),Ex,t(r,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Business Plan")]),_:1}),Rx,t(r,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(p,{as:"h4"},{default:i(()=>[a("Premium Plan")]),_:1}),zx,t(r,null,{default:i(()=>[a("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(f,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(f,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(f,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(f,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(f,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(f,{trigger:e.wideTrigger1},{default:i(()=>[a(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[a(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(f,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[a(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(r,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(o,{name:"add"})]),_:1},512),t(f,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(f,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const Px=be(xx,[["render",Dx]]),Mx=R({name:"ProgressDoc",components:{DocPageHeader:je,DocExample:xe},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function Ix(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-progress"),r=b("doc-example"),f=b("sui-segment"),c=b("sui-container");return P(),me("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(c,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(r,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),t(r,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(o,{percent:33})]),_:1},8,["code"]),t(r,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(o,{percent:14,progress:""})]),_:1},8,["code"]),t(r,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(r,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(r,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(r,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(r,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(r,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(r,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(o,{percent:25,disabled:""})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(r,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(r,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(f,null,{default:i(()=>[t(o,{percent:47,attached:"top"}),a(" La la la la "),t(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(r,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{percent:88,size:"tiny",label:"tiny"}),t(o,{percent:100,size:"small",label:"small",success:""}),t(o,{percent:83,label:"standard"}),t(o,{percent:73,size:"large",label:"large"}),t(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(r,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(o,{percent:32,color:"red"}),t(o,{percent:53,color:"orange"}),t(o,{percent:13,color:"yellow"}),t(o,{percent:37,color:"olive"}),t(o,{percent:83,color:"green"}),t(o,{percent:24,color:"teal"}),t(o,{percent:88,color:"blue"}),t(o,{percent:41,color:"violet"}),t(o,{percent:47,color:"purple"}),t(o,{percent:30,color:"pink"}),t(o,{percent:68,color:"brown"}),t(o,{percent:35,color:"grey"}),t(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const Fx=be(Mx,[["render",Ix]]),Vx=R({name:"RatingDoc",components:{DocPageHeader:je,DocExample:xe,PropertyListTable:fn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),Nx=C("br",null,null,-1),Lx=C("br",null,null,-1),Ox=C("br",null,null,-1),Hx=C("br",null,null,-1),jx=C("br",null,null,-1),qx=C("br",null,null,-1),Ux=C("br",null,null,-1),Gx=C("br",null,null,-1),Yx=C("br",null,null,-1),Jx=C("br",null,null,-1),Wx=C("br",null,null,-1),Kx=C("br",null,null,-1),Xx=C("br",null,null,-1),Qx=C("br",null,null,-1),Zx=C("br",null,null,-1),e2=C("br",null,null,-1),t2=C("br",null,null,-1),i2=C("br",null,null,-1),l2=C("br",null,null,-1),a2=C("br",null,null,-1),n2=C("br",null,null,-1),s2=C("br",null,null,-1),o2=C("br",null,null,-1),r2=C("br",null,null,-1),u2=C("br",null,null,-1),d2=C("br",null,null,-1),c2=C("br",null,null,-1),m2=C("br",null,null,-1),p2=C("br",null,null,-1),f2=C("br",null,null,-1),g2=C("br",null,null,-1),h2=C("br",null,null,-1),_2=C("br",null,null,-1),b2=C("br",null,null,-1),v2=C("br",null,null,-1),y2=C("br",null,null,-1),C2=C("br",null,null,-1),w2=C("br",null,null,-1),S2=C("br",null,null,-1),A2=C("br",null,null,-1),k2=C("br",null,null,-1),B2=C("br",null,null,-1),$2=C("br",null,null,-1),T2=C("br",null,null,-1),x2=C("br",null,null,-1),E2=C("br",null,null,-1),R2=C("br",null,null,-1),z2=C("br",null,null,-1);function D2(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-rating"),r=b("doc-example"),f=b("property-list-table"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),S=b("sui-table"),B=b("sui-container");return P(),me("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(o)]),_:1},8,["code"]),t(r,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(o,{defaultRating:2,maxRating:4,color:"yellow"}),Nx,Lx,t(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),Ox,Hx,t(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),jx,qx,t(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),Ux,Gx,t(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),Yx,Jx,t(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),Wx,Kx,t(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(r,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(o,{defaultRating:1,maxRating:7,color:"red"}),Xx,Qx,t(o,{defaultRating:2,maxRating:7,color:"orange"}),Zx,e2,t(o,{defaultRating:3,maxRating:7,color:"yellow"}),t2,i2,t(o,{defaultRating:4,maxRating:7,color:"olive"}),l2,a2,t(o,{defaultRating:5,maxRating:7,color:"green"}),n2,s2,t(o,{defaultRating:6,maxRating:7,color:"teal"}),o2,r2,t(o,{defaultRating:6,maxRating:7,color:"blue"}),u2,d2,t(o,{defaultRating:5,maxRating:7,color:"violet"}),c2,m2,t(o,{defaultRating:4,maxRating:7,color:"purple"}),p2,f2,t(o,{defaultRating:3,maxRating:7,color:"pink"}),g2,h2,t(o,{defaultRating:2,maxRating:7,color:"brown"}),_2,b2,t(o,{defaultRating:1,maxRating:7,color:"grey"}),v2,y2,t(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),t(r,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(r,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),C2,w2,t(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),S2,A2,t(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),k2,B2,t(o,{defaultRating:3,maxRating:4,color:"yellow"}),$2,T2,t(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),x2,E2,t(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),R2,z2,t(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),t(f,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),t(S,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Name")]),_:1}),t(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.events,_=>(P(),j(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[a(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[a(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const P2=be(Vx,[["render",D2]]),M2=R({name:"SidebarDoc",components:{DocPageHeader:je,DocExample:xe,PropertyListTable:fn},setup(){return{visible1:H(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),I2={class:"pusher"};function F2(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-icon"),r=b("sui-button"),f=b("sui-grid-column"),c=b("sui-menu-item"),h=b("sui-sidebar"),v=b("sui-image"),g=b("sui-segment"),y=b("sui-grid"),S=b("doc-example"),B=b("property-list-table"),_=b("sui-table-header-cell"),w=b("sui-table-row"),k=b("sui-table-header"),T=b("sui-table-cell"),E=b("sui-table-body"),I=b("sui-table"),F=b("sui-container");return P(),me("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(F,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(S,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(y,{columns:1},{default:i(()=>[t(f,null,{default:i(()=>[t(r,{onClick:l[0]||(l[0]=D=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(o,{name:"arrow right"})]),_:1})]),_:1}),t(f,null,{default:i(()=>[t(g,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":l[1]||(l[1]=D=>e.visible1=D),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(c,null,{default:i(()=>[t(o,{name:"home"}),a(" Home ")]),_:1}),t(c,null,{default:i(()=>[t(o,{name:"gamepad"}),a(" Games ")]),_:1}),t(c,null,{default:i(()=>[t(o,{name:"camera"}),a(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",I2,[t(g,null,{default:i(()=>[t(p,{as:"h2"},{default:i(()=>[a("Main Header")]),_:1}),t(v,{src:Ce})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),t(B,{properties:e.properties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),t(I,{celled:""},{default:i(()=>[t(k,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[a("Name")]),_:1}),t(_,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.events,D=>(P(),j(w,{key:D.name},{default:i(()=>[t(T,null,{default:i(()=>[a(Be(D.name),1)]),_:2},1024),t(T,null,{default:i(()=>[a(Be(D.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const V2=be(M2,[["render",F2]]),N2=R({name:"SliderDoc",components:{DocPageHeader:je,DocExample:xe},setup(){const e=H(5),l='<sui-slider v-model="slider1" />',n=H(4),s='<sui-slider labeled v-model="slider2" />',u=H(6),d='<sui-slider labeled="ticked" v-model="slider3" />',m=H(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=H(40),r='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',f=H([]);f.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=H(7),v='<sui-slider disabled v-model="slider7" />',g=H(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,S=H(3),B='<sui-slider reversed v-model="slider9" />',_=H(18),w='<sui-slider vertical v-model="slider10" :max="20" />',k=H(5),T=H(5),E=H(5),I=H(5),F=H(5),D=H(5),L=H(5),J=H(5),q=H(5),de=H(5),ke=H(5),O=H(5),Y=H(5),re=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,ee=`<sui-segment inverted>
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
</sui-segment>`,$e=H(5),qe=H(5),Ze=H(5);return{slider1:e,sliderCode:l,slider2:n,labeledSliderCode:s,slider3:u,labeledTickedCode:d,slider4:m,customLabelsCode:p,slider5:o,stepCode:r,slider6:f,rangeCode:c,slider7:h,disabledCode:v,slider8:g,invertedCode:y,slider9:S,reversedCode:B,slider10:_,verticalCode:w,redSlider:k,orangeSlider:T,yellowSlider:E,oliveSlider:I,greenSlider:F,tealSlider:D,blueSlider:L,violetSlider:J,purpleSlider:q,pinkSlider:de,brownSlider:ke,greySlider:O,blackSlider:Y,coloredCode:re,invertedColoredCode:ee,smallSlider:$e,largeSlider:qe,bigSlider:Ze,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function L2(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-slider"),r=b("doc-example"),f=b("sui-segment"),c=b("sui-table-header-cell"),h=b("sui-table-row"),v=b("sui-table-header"),g=b("sui-table-cell"),y=b("sui-table-body"),S=b("sui-table"),B=b("sui-container");return P(),me("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(B,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),t(r,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(o,{modelValue:e.slider1,"onUpdate:modelValue":l[0]||(l[0]=_=>e.slider1=_)},null,8,["modelValue"]),a(" "+Be(e.slider1),1)]),_:1},8,["code"]),t(r,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(o,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":l[1]||(l[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(o,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":l[2]||(l[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(o,{modelValue:e.slider4,"onUpdate:modelValue":l[3]||(l[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(o,{modelValue:e.slider5,"onUpdate:modelValue":l[4]||(l[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),a(" "+Be(e.slider5),1)]),_:1},8,["code"]),t(r,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(o,{modelValue:e.slider6,"onUpdate:modelValue":l[5]||(l[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),a(" "+Be(e.slider6),1)]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),t(r,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(o,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":l[6]||(l[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":l[7]||(l[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(r,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(o,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":l[8]||(l[8]=_=>e.slider9=_)},null,8,["modelValue"]),a(" "+Be(e.slider9),1)]),_:1},8,["code"]),t(r,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(o,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":l[9]||(l[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),a(" "+Be(e.slider10),1)]),_:1},8,["code"]),t(r,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(o,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":l[10]||(l[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":l[21]||(l[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(r,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(f,{inverted:""},{default:i(()=>[t(o,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":l[23]||(l[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":l[34]||(l[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(o,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(r,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(o,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(o,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(o,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),t(S,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Name")]),_:1}),t(c,null,{default:i(()=>[a("Type")]),_:1}),t(c,null,{default:i(()=>[a("Default")]),_:1}),t(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.properties,_=>(P(),j(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[a(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[a(Be(_.type),1)]),_:2},1024),t(g,null,{default:i(()=>[a(Be(_.default),1)]),_:2},1024),t(g,null,{default:i(()=>[a(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),t(S,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[a("Name")]),_:1}),t(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(y,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.events,_=>(P(),j(h,{key:_.name},{default:i(()=>[t(g,null,{default:i(()=>[a(Be(_.name),1)]),_:2},1024),t(g,null,{default:i(()=>[a(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const O2=be(N2,[["render",L2]]),H2=R({name:"TabDoc",components:{DocPageHeader:je,DocExample:xe,PropertyListTable:fn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function j2(e,l,n,s,u,d){const m=b("doc-page-header"),p=b("sui-header"),o=b("sui-tab-panel"),r=b("sui-tab"),f=b("doc-example"),c=b("property-list-table"),h=b("sui-table-header-cell"),v=b("sui-table-row"),g=b("sui-table-header"),y=b("sui-table-cell"),S=b("sui-table-body"),B=b("sui-table"),_=b("sui-container");return P(),me("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(p,{as:"h2",dividing:""},{default:i(()=>[a("Examples")]),_:1}),t(f,{title:"Basic",code:e.basicCode},{default:i(()=>[t(r,null,{default:i(()=>[t(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(r,{pointing:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(r,{secondary:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{title:"Text",code:e.textCode},{default:i(()=>[t(r,{text:""},{default:i(()=>[t(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),t(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),t(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),t(p,{as:"h3"},{default:i(()=>[a("Tab")]),_:1}),t(c,{properties:e.tabProperties},null,8,["properties"]),t(p,{as:"h3"},{default:i(()=>[a("TabPanel")]),_:1}),t(c,{properties:e.tabPanelProperties},null,8,["properties"]),t(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),t(B,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[a("Name")]),_:1}),t(h,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),t(S,null,{default:i(()=>[(P(!0),me(we,null,Xe(e.events,w=>(P(),j(v,{key:w.name},{default:i(()=>[t(y,null,{default:i(()=>[a(Be(w.name),1)]),_:2},1024),t(y,null,{default:i(()=>[a(Be(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const q2=be(H2,[["render",j2]]),U2=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,G2={__name:"MinimalDoc",setup(e){const{toast:l}=tt(),n=()=>{l({message:"I am a toast, nice to meet you !"})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Minimal",code:U2},{description:i(()=>[a(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},Y2=`<template>
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
<\/script>`,J2={__name:"TitledDoc",setup(e){const{toast:l}=tt(),n=()=>{l({title:"Better ?",message:"Hey look, I have a title !"})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Titled",code:Y2},{description:i(()=>[a(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},W2=`<template>
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
<\/script>`,K2={__name:"ProgressBarDoc",setup(e){const{toast:l}=tt(),n=s=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:s})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Progress Bar",code:W2},{description:i(()=>[a(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1}),t(d,{color:"red",onClick:u[0]||(u[0]=m=>n("red"))},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},X2=`<template>
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
<\/script>`,Q2={__name:"ToastTypeDoc",setup(e){const{toast:l}=tt(),n=s=>{l({message:"You're using the good framework !",type:s})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Toast Type",code:X2},{description:i(()=>[a(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n("success")),positive:""},{default:i(()=>[a("Success")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n("error")),negative:""},{default:i(()=>[a("Error")]),_:1}),t(d,{onClick:u[2]||(u[2]=m=>n("warning")),color:"yellow"},{default:i(()=>[a("Warning")]),_:1})]),_:1})}}},Z2=`<template>
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
<\/script>`,eE={__name:"PositionDoc",setup(e){const{toast:l}=tt(),n=s=>{l({position:s,message:"Look, I'm here !"})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Position",code:Z2},{description:i(()=>[a(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n("top left"))},{default:i(()=>[a("Top Left")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n("bottom right"))},{default:i(()=>[a("Bottom Right")]),_:1})]),_:1})}}},tE=C("br",null,null,-1),iE=`<template>
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
<\/script>`,lE={__name:"AttachedPosition",setup(e){const{toast:l}=tt(),n=s=>{l({attached:s,title:"Watch out!",message:`I am a ${s} attached toast`})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Attached Position",code:iE},{description:i(()=>[a(" A toast can have an attached position which will show the toast over the whole width of the screen."),tE,a(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n("top"))},{default:i(()=>[a("Top")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n("bottom"))},{default:i(()=>[a("Bottom")]),_:1})]),_:1})}}},aE=`<template>
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
<\/script>`,nE={__name:"DirectionDoc",setup(e){const{toast:l}=tt(),n=()=>{l({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Direction",code:aE},{description:i(()=>[a(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},sE=`<template>
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
<\/script>`,oE={__name:"CenterAligned",setup(e){const{toast:l}=tt(),n=()=>{l({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Center Aligned",code:sE},{description:i(()=>[a(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},rE=`<template>
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
<\/script>`,uE={__name:"DurationDoc",setup(e){const{toast:l}=tt(),n=s=>{l({displayTime:s,message:s===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Duration",code:rE},{description:i(()=>[a(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:u[0]||(u[0]=m=>n(5e3))},{default:i(()=>[a("5 seconds")]),_:1}),t(d,{onClick:u[1]||(u[1]=m=>n(0))},{default:i(()=>[a("Stay")]),_:1})]),_:1})}}},dE=`<template>
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
<\/script>`,cE={__name:"MessageStyleDoc",setup(e){const{toast:l}=tt(),n=()=>{l({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Use Message Style",code:dE},{description:i(()=>[a(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},mE=`<template>
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
<\/script>`,pE={__name:"IncreasingProgressBarDoc",setup(e){const{toast:l}=tt(),n=()=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(s,u)=>{const d=b("SuiButton");return P(),j(ne,{label:"Increasing Progress Bar",code:mE},{description:i(()=>[a(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},fE=`<template>
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
<\/script>`,gE={__name:"ColorVariantsDoc",setup(e){const{toast:l}=tt(),n=H(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],u=()=>{l({color:s[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,m)=>{const p=b("SuiButton");return P(),j(ne,{label:"Color Variants",code:fE},{description:i(()=>[a(" You can use all of the usual color names. ")]),example:i(()=>[t(p,{onClick:u},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},hE={__name:"InvertedColorsDoc",setup(e){const{toast:l}=tt(),n=H(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],u=()=>{l({color:s[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,m)=>{const p=b("SuiButton");return P(),j(ne,{label:"Inverted Colors",code:d.code},{description:i(()=>[a(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(p,{onClick:u},{default:i(()=>[a("Show")]),_:1})]),_:1},8,["code"])}}},_E=`<template>
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
<\/script>`,bE={__name:"ActionGeneralDoc",setup(e){const{toast:l}=tt(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>[G(Qe,{name:"check"}),"Yes"]),G(M,{color:"red",icon:!0},()=>[G(Qe,{name:"ban"})]),G(M,{color:"blue",onclick:()=>l({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(s,u)=>(P(),j(ne,{label:"General",code:_E},{description:i(()=>[a(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t($(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},vE=`<template>
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
<\/script>`,yE={__name:"ActionBasicDoc",setup(e){const{toast:l}=tt(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"yellow",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(s,u)=>(P(),j(ne,{label:"Basic",code:vE},{description:i(()=>[a(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t($(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},CE=`<template>
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
<\/script>`,wE={__name:"ActionAttachedDoc",setup(e){const{toast:l}=tt(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),G(M,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(s,u)=>(P(),j(ne,{label:"Attached",code:CE},{description:i(()=>[a(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t($(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},SE=`<template>
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
<\/script>`,AE={__name:"ActionVerticalDoc",setup(e){const{toast:l}=tt(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),G(M,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(s,u)=>(P(),j(ne,{label:"Vertical",code:SE},{description:i(()=>[a(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t($(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},kE=C("br",null,null,-1),BE=`<template>
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
<\/script>`,$E={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:l}=tt(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[G(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),G(M,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(s,u)=>(P(),j(ne,{label:"Vertical Attached",code:BE},{description:i(()=>[a(" Vertical actions can also be displayed as button groups using vertical attached."),kE,a(" Vertical attached actions also support left. ")]),example:i(()=>[t($(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},TE={__name:"Toast",setup(e){const l=[{id:"minimal",label:"Minimal",category:"Types",component:G2},{id:"titled",label:"Titled",category:"Types",component:J2},{id:"progress-bar",label:"Progress Bar",category:"Types",component:K2},{id:"toast-type",label:"Toast Type",category:"Variations",component:Q2},{id:"position",label:"Position",category:"Variations",component:eE},{id:"attached-position",label:"Attached Position",category:"Variations",component:lE},{id:"direction",label:"Direction",category:"Variations",component:nE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:oE},{id:"duration",label:"Duration",category:"Variations",component:uE},{id:"message-style",label:"Use Message Style",category:"Variations",component:cE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:pE},{id:"color-variants",label:"Color Variants",category:"Variations",component:gE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:hE},{id:"general",label:"General",category:"Actions",component:bE},{id:"action-basic",label:"Basic",category:"Actions",component:yE},{id:"action-attached",label:"Attached",category:"Actions",component:wE},{id:"action-vertical",label:"Vertical",category:"Actions",component:AE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:$E}];return(n,s)=>(P(),j(fl,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":l}))}},xE=[{path:"/",component:K_,children:[{path:"/",component:mb},{path:"elements/button",component:xw},{path:"elements/container",component:Ow},{path:"elements/divider",component:mS},{path:"elements/emoji",component:SS},{path:"elements/flag",component:TS},{path:"elements/header",component:FS},{path:"elements/icon",component:YS},{path:"elements/image",component:oA},{path:"elements/input",component:cA},{path:"elements/label",component:BA},{path:"elements/list",component:UA},{path:"elements/loader",component:WA},{path:"elements/rail",component:ZA},{path:"elements/reveal",component:a0},{path:"elements/segment",component:x0},{path:"elements/step",component:M0},{path:"collections/breadcrumb",component:V0},{path:"collections/form",component:O0},{path:"collections/grid",component:U0},{path:"collections/menu",component:Z0},{path:"collections/message",component:ck},{path:"collections/table",component:Ak},{path:"views/advertisement",component:xk},{path:"views/card",component:dB},{path:"views/comment",component:u$},{path:"views/feed",component:R$},{path:"views/item",component:yT},{path:"views/statistic",component:xT},{path:"modules/accordion",component:QT},{path:"modules/calendar",component:tx},{path:"modules/checkbox",component:cx},{path:"modules/dimmer",component:fx},{path:"modules/dropdown",component:_x},{path:"modules/embed",component:yx},{path:"modules/modal",component:$x},{path:"modules/popup",component:Px},{path:"modules/progress",component:Fx},{path:"modules/rating",component:P2},{path:"modules/sidebar",component:V2},{path:"modules/slider",component:O2},{path:"modules/tab",component:q2},{path:"modules/toast",component:TE}]}],EE=x_({history:qh("/vue-fomantic-ui/"),routes:xE});(function(e){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var u=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=s.variable[1].inside,m=0;m<u.length;m++)d[u[m]]=e.languages.bash[u[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const go=_m(Bh);go.use(EE);go.use(aC);go.mount("#app");

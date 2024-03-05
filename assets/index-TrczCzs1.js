(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(r){if(r.ep)return;r.ep=!0;const d=l(r);fetch(r.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fn(e,a){const l=new Set(e.split(","));return a?o=>l.has(o.toLowerCase()):o=>l.has(o)}const je={},ca=[],Ct=()=>{},up=()=>!1,ml=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qo=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Zo=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},cp=Object.prototype.hasOwnProperty,Fe=(e,a)=>cp.call(e,a),he=Array.isArray,da=e=>Ta(e)==="[object Map]",Qi=e=>Ta(e)==="[object Set]",Os=e=>Ta(e)==="[object Date]",dp=e=>Ta(e)==="[object RegExp]",Ce=e=>typeof e=="function",Qe=e=>typeof e=="string",xi=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",es=e=>(Ge(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),xc=Object.prototype.toString,Ta=e=>xc.call(e),mp=e=>Ta(e).slice(8,-1),$c=e=>Ta(e)==="[object Object]",ts=e=>Qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ga=fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gn=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},pp=/-(\w)/g,vt=gn(e=>e.replace(pp,(a,l)=>l?l.toUpperCase():"")),fp=/\B([A-Z])/g,It=gn(e=>e.replace(fp,"-$1").toLowerCase()),pl=gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ua=gn(e=>e?`on${pl(e)}`:""),Ut=(e,a)=>!Object.is(e,a),ma=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Ml=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},el=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Vl=e=>{const a=Qe(e)?Number(e):NaN;return isNaN(a)?e:a};let js;const Bc=()=>js||(js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",hp=fn(gp);function Da(e){if(he(e)){const a={};for(let l=0;l<e.length;l++){const o=e[l],r=Qe(o)?Sp(o):Da(o);if(r)for(const d in r)a[d]=r[d]}return a}else if(Qe(e)||Ge(e))return e}const _p=/;(?![^(]*\))/g,bp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function Sp(e){const a={};return e.replace(vp,"").split(_p).forEach(l=>{if(l){const o=l.split(bp);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function fl(e){let a="";if(Qe(e))a=e;else if(he(e))for(let l=0;l<e.length;l++){const o=fl(e[l]);o&&(a+=o+" ")}else if(Ge(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function yp(e){if(!e)return null;let{class:a,style:l}=e;return a&&!Qe(a)&&(e.class=fl(a)),l&&(e.style=Da(l)),e}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cp=fn(wp);function Tc(e){return!!e||e===""}function Ap(e,a){if(e.length!==a.length)return!1;let l=!0;for(let o=0;l&&o<e.length;o++)l=ni(e[o],a[o]);return l}function ni(e,a){if(e===a)return!0;let l=Os(e),o=Os(a);if(l||o)return l&&o?e.getTime()===a.getTime():!1;if(l=xi(e),o=xi(a),l||o)return e===a;if(l=he(e),o=he(a),l||o)return l&&o?Ap(e,a):!1;if(l=Ge(e),o=Ge(a),l||o){if(!l||!o)return!1;const r=Object.keys(e).length,d=Object.keys(a).length;if(r!==d)return!1;for(const p in e){const f=e.hasOwnProperty(p),s=a.hasOwnProperty(p);if(f&&!s||!f&&s||!ni(e[p],a[p]))return!1}}return String(e)===String(a)}function hn(e,a){return e.findIndex(l=>ni(l,a))}const Te=e=>Qe(e)?e:e==null?"":he(e)||Ge(e)&&(e.toString===xc||!Ce(e.toString))?JSON.stringify(e,Dc,2):String(e),Dc=(e,a)=>a&&a.__v_isRef?Dc(e,a.value):da(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[o,r],d)=>(l[Mn(o,d)+" =>"]=r,l),{})}:Qi(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>Mn(l))}:xi(a)?Mn(a):Ge(a)&&!he(a)&&!$c(a)?String(a):a,Mn=(e,a="")=>{var l;return xi(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class is{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!a&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=Dt;try{return Dt=this,a()}finally{Dt=l}}}on(){Dt=this}off(){Dt=this.parent}stop(a){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(e){return new is(e)}function Lc(e,a=Dt){a&&a.active&&a.effects.push(e)}function as(){return Dt}function Ic(e){Dt&&Dt.cleanups.push(e)}let Vi;class ya{constructor(a,l,o,r){this.fn=a,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Lc(this,r)}get dirty(){if(this._dirtyLevel===1){Zi();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(xp(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),ea()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=wi,l=Vi;try{return wi=!0,Vi=this,this._runnings++,qs(this),this.fn()}finally{Gs(this),this._runnings--,Vi=l,wi=a}}stop(){var a;this.active&&(qs(this),Gs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function xp(e){return e.value}function qs(e){e._trackId++,e._depsLength=0}function Gs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Rc(e.deps[a],e);e.deps.length=e._depsLength}}function Rc(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function $p(e,a){e.effect instanceof ya&&(e=e.effect.fn);const l=new ya(e,Ct,()=>{l.dirty&&l.run()});a&&(Xe(l,a),a.scope&&Lc(l,a.scope)),(!a||!a.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function Bp(e){e.effect.stop()}let wi=!0,co=0;const Ec=[];function Zi(){Ec.push(wi),wi=!1}function ea(){const e=Ec.pop();wi=e===void 0?!0:e}function ls(){co++}function ns(){for(co--;!co&&mo.length;)mo.shift()()}function zc(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&Rc(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const mo=[];function Fc(e,a,l){ls();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}Pc(e),ns()}function Pc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,mo.push(a.scheduler))}const Mc=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},Hl=new WeakMap,Hi=Symbol(""),po=Symbol("");function $t(e,a,l){if(wi&&Vi){let o=Hl.get(e);o||Hl.set(e,o=new Map);let r=o.get(l);r||o.set(l,r=Mc(()=>o.delete(l))),zc(Vi,r)}}function ai(e,a,l,o,r,d){const p=Hl.get(e);if(!p)return;let f=[];if(a==="clear")f=[...p.values()];else if(l==="length"&&he(e)){const s=Number(o);p.forEach((c,g)=>{(g==="length"||!xi(g)&&g>=s)&&f.push(c)})}else switch(l!==void 0&&f.push(p.get(l)),a){case"add":he(e)?ts(l)&&f.push(p.get("length")):(f.push(p.get(Hi)),da(e)&&f.push(p.get(po)));break;case"delete":he(e)||(f.push(p.get(Hi)),da(e)&&f.push(p.get(po)));break;case"set":da(e)&&f.push(p.get(Hi));break}ls();for(const s of f)s&&Fc(s,2);ns()}function Tp(e,a){var l;return(l=Hl.get(e))==null?void 0:l.get(a)}const Dp=fn("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xi)),Us=Lp();function Lp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const o=Re(this);for(let d=0,p=this.length;d<p;d++)$t(o,"get",d+"");const r=o[a](...l);return r===-1||r===!1?o[a](...l.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Zi(),ls();const o=Re(this)[a].apply(this,l);return ns(),ea(),o}}),e}function Ip(e){const a=Re(this);return $t(a,"has",e),a.hasOwnProperty(e)}class Hc{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,o){const r=this._isReadonly,d=this._shallow;if(l==="__v_isReactive")return!r;if(l==="__v_isReadonly")return r;if(l==="__v_isShallow")return d;if(l==="__v_raw")return o===(r?d?Uc:Gc:d?qc:jc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const p=he(a);if(!r){if(p&&Fe(Us,l))return Reflect.get(Us,l,o);if(l==="hasOwnProperty")return Ip}const f=Reflect.get(a,l,o);return(xi(l)?Vc.has(l):Dp(l))||(r||$t(a,"get",l),d)?f:pt(f)?p&&ts(l)?f:f.value:Ge(f)?r?ss(f):si(f):f}}class Nc extends Hc{constructor(a=!1){super(!1,a)}set(a,l,o,r){let d=a[l];if(!this._shallow){const s=qi(d);if(!tl(o)&&!qi(o)&&(d=Re(d),o=Re(o)),!he(a)&&pt(d)&&!pt(o))return s?!1:(d.value=o,!0)}const p=he(a)&&ts(l)?Number(l)<a.length:Fe(a,l),f=Reflect.set(a,l,o,r);return a===Re(r)&&(p?Ut(o,d)&&ai(a,"set",l,o):ai(a,"add",l,o)),f}deleteProperty(a,l){const o=Fe(a,l);a[l];const r=Reflect.deleteProperty(a,l);return r&&o&&ai(a,"delete",l,void 0),r}has(a,l){const o=Reflect.has(a,l);return(!xi(l)||!Vc.has(l))&&$t(a,"has",l),o}ownKeys(a){return $t(a,"iterate",he(a)?"length":Hi),Reflect.ownKeys(a)}}class Oc extends Hc{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const Rp=new Nc,Ep=new Oc,zp=new Nc(!0),Fp=new Oc(!0),os=e=>e,_n=e=>Reflect.getPrototypeOf(e);function bl(e,a,l=!1,o=!1){e=e.__v_raw;const r=Re(e),d=Re(a);l||(Ut(a,d)&&$t(r,"get",a),$t(r,"get",d));const{has:p}=_n(r),f=o?os:l?cs:il;if(p.call(r,a))return f(e.get(a));if(p.call(r,d))return f(e.get(d));e!==r&&e.get(a)}function vl(e,a=!1){const l=this.__v_raw,o=Re(l),r=Re(e);return a||(Ut(e,r)&&$t(o,"has",e),$t(o,"has",r)),e===r?l.has(e):l.has(e)||l.has(r)}function Sl(e,a=!1){return e=e.__v_raw,!a&&$t(Re(e),"iterate",Hi),Reflect.get(e,"size",e)}function Ys(e){e=Re(e);const a=Re(this);return _n(a).has.call(a,e)||(a.add(e),ai(a,"add",e,e)),this}function Js(e,a){a=Re(a);const l=Re(this),{has:o,get:r}=_n(l);let d=o.call(l,e);d||(e=Re(e),d=o.call(l,e));const p=r.call(l,e);return l.set(e,a),d?Ut(a,p)&&ai(l,"set",e,a):ai(l,"add",e,a),this}function Ws(e){const a=Re(this),{has:l,get:o}=_n(a);let r=l.call(a,e);r||(e=Re(e),r=l.call(a,e)),o&&o.call(a,e);const d=a.delete(e);return r&&ai(a,"delete",e,void 0),d}function Ks(){const e=Re(this),a=e.size!==0,l=e.clear();return a&&ai(e,"clear",void 0,void 0),l}function yl(e,a){return function(o,r){const d=this,p=d.__v_raw,f=Re(p),s=a?os:e?cs:il;return!e&&$t(f,"iterate",Hi),p.forEach((c,g)=>o.call(r,s(c),s(g),d))}}function wl(e,a,l){return function(...o){const r=this.__v_raw,d=Re(r),p=da(d),f=e==="entries"||e===Symbol.iterator&&p,s=e==="keys"&&p,c=r[e](...o),g=l?os:a?cs:il;return!a&&$t(d,"iterate",s?po:Hi),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:f?[g(m[0]),g(m[1])]:g(m),done:h}},[Symbol.iterator](){return this}}}}function ci(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Pp(){const e={get(d){return bl(this,d)},get size(){return Sl(this)},has:vl,add:Ys,set:Js,delete:Ws,clear:Ks,forEach:yl(!1,!1)},a={get(d){return bl(this,d,!1,!0)},get size(){return Sl(this)},has:vl,add:Ys,set:Js,delete:Ws,clear:Ks,forEach:yl(!1,!0)},l={get(d){return bl(this,d,!0)},get size(){return Sl(this,!0)},has(d){return vl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:yl(!0,!1)},o={get(d){return bl(this,d,!0,!0)},get size(){return Sl(this,!0)},has(d){return vl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:yl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=wl(d,!1,!1),l[d]=wl(d,!0,!1),a[d]=wl(d,!1,!0),o[d]=wl(d,!0,!0)}),[e,l,a,o]}const[Mp,Vp,Hp,Np]=Pp();function bn(e,a){const l=a?e?Np:Hp:e?Vp:Mp;return(o,r,d)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Fe(l,r)&&r in o?l:o,r,d)}const Op={get:bn(!1,!1)},jp={get:bn(!1,!0)},qp={get:bn(!0,!1)},Gp={get:bn(!0,!0)},jc=new WeakMap,qc=new WeakMap,Gc=new WeakMap,Uc=new WeakMap;function Up(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Up(mp(e))}function si(e){return qi(e)?e:vn(e,!1,Rp,Op,jc)}function Yc(e){return vn(e,!1,zp,jp,qc)}function ss(e){return vn(e,!0,Ep,qp,Gc)}function Jp(e){return vn(e,!0,Fp,Gp,Uc)}function vn(e,a,l,o,r){if(!Ge(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=r.get(e);if(d)return d;const p=Yp(e);if(p===0)return e;const f=new Proxy(e,p===2?o:l);return r.set(e,f),f}function Ni(e){return qi(e)?Ni(e.__v_raw):!!(e&&e.__v_isReactive)}function qi(e){return!!(e&&e.__v_isReadonly)}function tl(e){return!!(e&&e.__v_isShallow)}function rs(e){return Ni(e)||qi(e)}function Re(e){const a=e&&e.__v_raw;return a?Re(a):e}function us(e){return Ml(e,"__v_skip",!0),e}const il=e=>Ge(e)?si(e):e,cs=e=>Ge(e)?ss(e):e;class Jc{constructor(a,l,o,r){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ya(()=>a(this._value),()=>pa(this,1),()=>this.dep&&Pc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Re(this);return(!a._cacheable||a.effect.dirty)&&Ut(a._value,a._value=a.effect.run())&&pa(a,2),ds(a),a.effect._dirtyLevel>=1&&pa(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Wp(e,a,l=!1){let o,r;const d=Ce(e);return d?(o=e,r=Ct):(o=e.get,r=e.set),new Jc(o,r,d||!r,l)}function ds(e){wi&&Vi&&(e=Re(e),zc(Vi,e.dep||(e.dep=Mc(()=>e.dep=void 0,e instanceof Jc?e:void 0))))}function pa(e,a=2,l){e=Re(e);const o=e.dep;o&&Fc(o,a)}function pt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Kc(e,!1)}function Wc(e){return Kc(e,!0)}function Kc(e,a){return pt(e)?e:new Kp(e,a)}class Kp{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Re(a),this._value=l?a:il(a)}get value(){return ds(this),this._value}set value(a){const l=this.__v_isShallow||tl(a)||qi(a);a=l?a:Re(a),Ut(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:il(a),pa(this,2))}}function Xp(e){pa(e,2)}function u(e){return pt(e)?e.value:e}function Qp(e){return Ce(e)?e():u(e)}const Zp={get:(e,a,l)=>u(Reflect.get(e,a,l)),set:(e,a,l,o)=>{const r=e[a];return pt(r)&&!pt(l)?(r.value=l,!0):Reflect.set(e,a,l,o)}};function ms(e){return Ni(e)?e:new Proxy(e,Zp)}class ef{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=a(()=>ds(this),()=>pa(this));this._get=l,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function Xc(e){return new ef(e)}function tf(e){const a=he(e)?new Array(e.length):{};for(const l in e)a[l]=Qc(e,l);return a}class af{constructor(a,l,o){this._object=a,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Tp(Re(this._object),this._key)}}class lf{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function fo(e,a,l){return pt(e)?e:Ce(e)?new lf(e):Ge(e)&&arguments.length>1?Qc(e,a,l):G(e)}function Qc(e,a,l){const o=e[a];return pt(o)?o:new af(e,a,l)}const nf={GET:"get",HAS:"has",ITERATE:"iterate"},of={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sf(e,a){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function li(e,a,l,o){let r;try{r=o?e(...o):e()}catch(d){ta(d,a,l)}return r}function Rt(e,a,l,o){if(Ce(e)){const d=li(e,a,l,o);return d&&es(d)&&d.catch(p=>{ta(p,a,l)}),d}const r=[];for(let d=0;d<e.length;d++)r.push(Rt(e[d],a,l,o));return r}function ta(e,a,l,o=!0){const r=a?a.vnode:null;if(a){let d=a.parent;const p=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${l}`;for(;d;){const c=d.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,p,f)===!1)return}d=d.parent}const s=a.appContext.config.errorHandler;if(s){li(s,null,10,[e,p,f]);return}}cf(e,l,r,o)}function cf(e,a,l,o=!0){console.error(e)}let al=!1,go=!1;const gt=[];let Wt=0;const fa=[];let gi=null,Pi=0;const Zc=Promise.resolve();let ps=null;function La(e){const a=ps||Zc;return e?a.then(this?e.bind(this):e):a}function df(e){let a=Wt+1,l=gt.length;for(;a<l;){const o=a+l>>>1,r=gt[o],d=ll(r);d<e||d===e&&r.pre?a=o+1:l=o}return a}function Sn(e){(!gt.length||!gt.includes(e,al&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?gt.push(e):gt.splice(df(e.id),0,e),ed())}function ed(){!al&&!go&&(go=!0,ps=Zc.then(td))}function mf(e){const a=gt.indexOf(e);a>Wt&&gt.splice(a,1)}function Nl(e){he(e)?fa.push(...e):(!gi||!gi.includes(e,e.allowRecurse?Pi+1:Pi))&&fa.push(e),ed()}function Xs(e,a,l=al?Wt+1:0){for(;l<gt.length;l++){const o=gt[l];if(o&&o.pre){if(e&&o.id!==e.uid)continue;gt.splice(l,1),l--,o()}}}function Ol(e){if(fa.length){const a=[...new Set(fa)].sort((l,o)=>ll(l)-ll(o));if(fa.length=0,gi){gi.push(...a);return}for(gi=a,Pi=0;Pi<gi.length;Pi++)gi[Pi]();gi=null,Pi=0}}const ll=e=>e.id==null?1/0:e.id,pf=(e,a)=>{const l=ll(e)-ll(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function td(e){go=!1,al=!0,gt.sort(pf);try{for(Wt=0;Wt<gt.length;Wt++){const a=gt[Wt];a&&a.active!==!1&&li(a,null,14)}}finally{Wt=0,gt.length=0,Ol(),al=!1,ps=null,(gt.length||fa.length)&&td()}}let oa,Cl=[];function id(e,a){var l,o;oa=e,oa?(oa.enabled=!0,Cl.forEach(({event:r,args:d})=>oa.emit(r,...d)),Cl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{id(d,a)}),setTimeout(()=>{oa||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Cl=[])},3e3)):Cl=[]}function ff(e,a,...l){if(e.isUnmounted)return;const o=e.vnode.props||je;let r=l;const d=a.startsWith("update:"),p=d&&a.slice(7);if(p&&p in o){const g=`${p==="modelValue"?"model":p}Modifiers`,{number:m,trim:h}=o[g]||je;h&&(r=l.map(w=>Qe(w)?w.trim():w)),m&&(r=l.map(el))}let f,s=o[f=Ua(a)]||o[f=Ua(vt(a))];!s&&d&&(s=o[f=Ua(It(a))]),s&&Rt(s,e,6,r);const c=o[f+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Rt(c,e,6,r)}}function ad(e,a,l=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const d=e.emits;let p={},f=!1;if(!Ce(e)){const s=c=>{const g=ad(c,a,!0);g&&(f=!0,Xe(p,g))};!l&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!d&&!f?(Ge(e)&&o.set(e,null),null):(he(d)?d.forEach(s=>p[s]=null):Xe(p,d),Ge(e)&&o.set(e,p),p)}function yn(e,a){return!e||!ml(a)?!1:(a=a.slice(2).replace(/Once$/,""),Fe(e,a[0].toLowerCase()+a.slice(1))||Fe(e,It(a))||Fe(e,a))}let lt=null,wn=null;function nl(e){const a=lt;return lt=e,wn=e&&e.type.__scopeId||null,a}function ld(e){wn=e}function nd(){wn=null}const gf=e=>i;function i(e,a=lt,l){if(!a||e._n)return e;const o=(...r)=>{o._d&&Co(-1);const d=nl(a);let p;try{p=e(...r)}finally{nl(d),o._d&&Co(1)}return p};return o._n=!0,o._c=!0,o._d=!0,o}function El(e){const{type:a,vnode:l,proxy:o,withProxy:r,props:d,propsOptions:[p],slots:f,attrs:s,emit:c,render:g,renderCache:m,data:h,setupState:w,ctx:b,inheritAttrs:C}=e;let $,D;const _=nl(e);try{if(l.shapeFlag&4){const x=r||o,T=x;$=Lt(g.call(T,x,m,d,w,h,b)),D=s}else{const x=a;$=Lt(x.length>1?x(d,{attrs:s,slots:f,emit:c}):x(d,null)),D=a.props?s:_f(s)}}catch(x){Wa.length=0,ta(x,e,1),$=t(_t)}let S=$;if(D&&C!==!1){const x=Object.keys(D),{shapeFlag:T}=S;x.length&&T&7&&(p&&x.some(Qo)&&(D=bf(D,p)),S=Kt(S,D))}return l.dirs&&(S=Kt(S),S.dirs=S.dirs?S.dirs.concat(l.dirs):l.dirs),l.transition&&(S.transition=l.transition),$=S,nl(_),$}function hf(e,a=!0){let l;for(let o=0;o<e.length;o++){const r=e[o];if(Nt(r)){if(r.type!==_t||r.children==="v-if"){if(l)return;l=r}}else return}return l}const _f=e=>{let a;for(const l in e)(l==="class"||l==="style"||ml(l))&&((a||(a={}))[l]=e[l]);return a},bf=(e,a)=>{const l={};for(const o in e)(!Qo(o)||!(o.slice(9)in a))&&(l[o]=e[o]);return l};function vf(e,a,l){const{props:o,children:r,component:d}=e,{props:p,children:f,patchFlag:s}=a,c=d.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&s>=0){if(s&1024)return!0;if(s&16)return o?Qs(o,p,c):!!p;if(s&8){const g=a.dynamicProps;for(let m=0;m<g.length;m++){const h=g[m];if(p[h]!==o[h]&&!yn(c,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:o===p?!1:o?p?Qs(o,p,c):!0:!!p;return!1}function Qs(e,a,l){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const d=o[r];if(a[d]!==e[d]&&!yn(l,d))return!0}return!1}function fs({vnode:e,parent:a},l){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=l,a=a.parent;else break}}const gs="components",Sf="directives";function y(e,a){return hs(gs,e,!0,a)||e}const od=Symbol.for("v-ndc");function sd(e){return Qe(e)?hs(gs,e,!1)||e:e||od}function Cn(e){return hs(Sf,e)}function hs(e,a,l=!0,o=!1){const r=lt||ot;if(r){const d=r.type;if(e===gs){const f=Bo(d,!1);if(f&&(f===a||f===vt(a)||f===pl(vt(a))))return d}const p=Zs(r[e]||d[e],a)||Zs(r.appContext[e],a);return!p&&o?d:p}}function Zs(e,a){return e&&(e[a]||e[vt(a)]||e[pl(vt(a))])}const rd=e=>e.__isSuspense;let ho=0;const yf={name:"Suspense",__isSuspense:!0,process(e,a,l,o,r,d,p,f,s,c){if(e==null)Cf(a,l,o,r,d,p,f,s,c);else{if(d&&d.deps>0){a.suspense=e.suspense;return}Af(e,a,l,o,r,p,f,s,c)}},hydrate:kf,create:_s,normalize:xf},wf=yf;function ol(e,a){const l=e.props&&e.props[a];Ce(l)&&l()}function Cf(e,a,l,o,r,d,p,f,s){const{p:c,o:{createElement:g}}=s,m=g("div"),h=e.suspense=_s(e,r,o,a,m,l,d,p,f,s);c(null,h.pendingBranch=e.ssContent,m,null,o,h,d,p),h.deps>0?(ol(e,"onPending"),ol(e,"onFallback"),c(null,e.ssFallback,a,l,o,null,d,p),ga(h,e.ssFallback)):h.resolve(!1,!0)}function Af(e,a,l,o,r,d,p,f,{p:s,um:c,o:{createElement:g}}){const m=a.suspense=e.suspense;m.vnode=a,a.el=e.el;const h=a.ssContent,w=a.ssFallback,{activeBranch:b,pendingBranch:C,isInFallback:$,isHydrating:D}=m;if(C)m.pendingBranch=h,Gt(h,C)?(s(C,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0?m.resolve():$&&(D||(s(b,w,l,o,r,null,d,p,f),ga(m,w)))):(m.pendingId=ho++,D?(m.isHydrating=!1,m.activeBranch=C):c(C,r,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),$?(s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0?m.resolve():(s(b,w,l,o,r,null,d,p,f),ga(m,w))):b&&Gt(h,b)?(s(b,h,l,o,r,m,d,p,f),m.resolve(!0)):(s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0&&m.resolve()));else if(b&&Gt(h,b))s(b,h,l,o,r,m,d,p,f),ga(m,h);else if(ol(a,"onPending"),m.pendingBranch=h,h.shapeFlag&512?m.pendingId=h.component.suspenseId:m.pendingId=ho++,s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0)m.resolve();else{const{timeout:_,pendingId:S}=m;_>0?setTimeout(()=>{m.pendingId===S&&m.fallback(w)},_):_===0&&m.fallback(w)}}function _s(e,a,l,o,r,d,p,f,s,c,g=!1){const{p:m,m:h,um:w,n:b,o:{parentNode:C,remove:$}}=c;let D;const _=$f(e);_&&a!=null&&a.pendingBranch&&(D=a.pendingId,a.deps++);const S=e.props?Vl(e.props.timeout):void 0,x=d,T={vnode:e,parent:a,parentComponent:l,namespace:p,container:o,hiddenContainer:r,deps:0,pendingId:ho++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(I=!1,M=!1){const{vnode:V,activeBranch:P,pendingBranch:q,pendingId:Q,effects:Y,parentComponent:ge,container:Be}=T;let U=!1;T.isHydrating?T.isHydrating=!1:I||(U=P&&q.transition&&q.transition.mode==="out-in",U&&(P.transition.afterLeave=()=>{Q===T.pendingId&&(h(q,Be,d===x?b(P):d,0),Nl(Y))}),P&&(C(P.el)!==T.hiddenContainer&&(d=b(P)),w(P,ge,T,!0)),U||h(q,Be,d,0)),ga(T,q),T.pendingBranch=null,T.isInFallback=!1;let X=T.parent,me=!1;for(;X;){if(X.pendingBranch){X.effects.push(...Y),me=!0;break}X=X.parent}!me&&!U&&Nl(Y),T.effects=[],_&&a&&a.pendingBranch&&D===a.pendingId&&(a.deps--,a.deps===0&&!M&&a.resolve()),ol(V,"onResolve")},fallback(I){if(!T.pendingBranch)return;const{vnode:M,activeBranch:V,parentComponent:P,container:q,namespace:Q}=T;ol(M,"onFallback");const Y=b(V),ge=()=>{T.isInFallback&&(m(null,I,q,Y,P,null,Q,f,s),ga(T,I))},Be=I.transition&&I.transition.mode==="out-in";Be&&(V.transition.afterLeave=ge),T.isInFallback=!0,w(V,P,null,!0),Be||ge()},move(I,M,V){T.activeBranch&&h(T.activeBranch,I,M,V),T.container=I},next(){return T.activeBranch&&b(T.activeBranch)},registerDep(I,M){const V=!!T.pendingBranch;V&&T.deps++;const P=I.vnode.el;I.asyncDep.catch(q=>{ta(q,I,0)}).then(q=>{if(I.isUnmounted||T.isUnmounted||T.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:Q}=I;xo(I,q,!1),P&&(Q.el=P);const Y=!P&&I.subTree.el;M(I,Q,C(P||I.subTree.el),P?null:b(I.subTree),T,p,s),Y&&$(Y),fs(I,Q.el),V&&--T.deps===0&&T.resolve()})},unmount(I,M){T.isUnmounted=!0,T.activeBranch&&w(T.activeBranch,l,I,M),T.pendingBranch&&w(T.pendingBranch,l,I,M)}};return T}function kf(e,a,l,o,r,d,p,f,s){const c=a.suspense=_s(a,o,l,e.parentNode,document.createElement("div"),null,r,d,p,f,!0),g=s(e,c.pendingBranch=a.ssContent,l,c,d,p);return c.deps===0&&c.resolve(!1,!0),g}function xf(e){const{shapeFlag:a,children:l}=e,o=a&32;e.ssContent=er(o?l.default:l),e.ssFallback=o?er(l.fallback):t(_t)}function er(e){let a;if(Ce(e)){const l=Ji&&e._c;l&&(e._d=!1,k()),e=e(),l&&(e._d=!0,a=At,Hd())}return he(e)&&(e=hf(e)),e=Lt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function ud(e,a){a&&a.pendingBranch?he(e)?a.effects.push(...e):a.effects.push(e):Nl(e)}function ga(e,a){e.activeBranch=a;const{vnode:l,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;l.el=r,o&&o.subTree===l&&(o.vnode.el=r,fs(o,r))}function $f(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const cd=Symbol.for("v-scx"),dd=()=>He(cd);function bs(e,a){return gl(e,null,a)}function md(e,a){return gl(e,null,{flush:"post"})}function pd(e,a){return gl(e,null,{flush:"sync"})}const Al={};function ht(e,a,l){return gl(e,a,l)}function gl(e,a,{immediate:l,deep:o,flush:r,once:d,onTrack:p,onTrigger:f}=je){if(a&&d){const I=a;a=(...M)=>{I(...M),T()}}const s=ot,c=I=>o===!0?I:Mi(I,o===!1?1:void 0);let g,m=!1,h=!1;if(pt(e)?(g=()=>e.value,m=tl(e)):Ni(e)?(g=()=>c(e),m=!0):he(e)?(h=!0,m=e.some(I=>Ni(I)||tl(I)),g=()=>e.map(I=>{if(pt(I))return I.value;if(Ni(I))return c(I);if(Ce(I))return li(I,s,2)})):Ce(e)?a?g=()=>li(e,s,2):g=()=>(w&&w(),Rt(e,s,3,[b])):g=Ct,a&&o){const I=g;g=()=>Mi(I())}let w,b=I=>{w=S.onStop=()=>{li(I,s,4),w=S.onStop=void 0}},C;if(_l)if(b=Ct,a?l&&Rt(a,s,3,[g(),h?[]:void 0,b]):g(),r==="sync"){const I=dd();C=I.__watcherHandles||(I.__watcherHandles=[])}else return Ct;let $=h?new Array(e.length).fill(Al):Al;const D=()=>{if(!(!S.active||!S.dirty))if(a){const I=S.run();(o||m||(h?I.some((M,V)=>Ut(M,$[V])):Ut(I,$)))&&(w&&w(),Rt(a,s,3,[I,$===Al?void 0:h&&$[0]===Al?[]:$,b]),$=I)}else S.run()};D.allowRecurse=!!a;let _;r==="sync"?_=D:r==="post"?_=()=>dt(D,s&&s.suspense):(D.pre=!0,s&&(D.id=s.uid),_=()=>Sn(D));const S=new ya(g,Ct,_),x=as(),T=()=>{S.stop(),x&&Zo(x.effects,S)};return a?l?D():$=S.run():r==="post"?dt(S.run.bind(S),s&&s.suspense):S.run(),C&&C.push(T),T}function Bf(e,a,l){const o=this.proxy,r=Qe(e)?e.includes(".")?fd(o,e):()=>o[e]:e.bind(o,o);let d;Ce(a)?d=a:(d=a.handler,l=a);const p=Wi(this),f=gl(r,d.bind(o),l);return p(),f}function fd(e,a){const l=a.split(".");return()=>{let o=e;for(let r=0;r<l.length&&o;r++)o=o[l[r]];return o}}function Mi(e,a,l=0,o){if(!Ge(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),pt(e))Mi(e.value,a,l,o);else if(he(e))for(let r=0;r<e.length;r++)Mi(e[r],a,l,o);else if(Qi(e)||da(e))e.forEach(r=>{Mi(r,a,l,o)});else if($c(e))for(const r in e)Mi(e[r],a,l,o);return e}function Ci(e,a){if(lt===null)return e;const l=Dn(lt)||lt.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[d,p,f,s=je]=a[r];d&&(Ce(d)&&(d={mounted:d,updated:d}),d.deep&&Mi(p),o.push({dir:d,instance:l,value:p,oldValue:void 0,arg:f,modifiers:s}))}return e}function Jt(e,a,l,o){const r=e.dirs,d=a&&a.dirs;for(let p=0;p<r.length;p++){const f=r[p];d&&(f.oldValue=d[p].value);let s=f.dir[o];s&&(Zi(),Rt(s,l,8,[e.el,f,e,a]),ea())}}const hi=Symbol("_leaveCb"),kl=Symbol("_enterCb");function vs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{e.isMounted=!0}),$n(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],Ss={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},Tf={name:"BaseTransition",props:Ss,setup(e,{slots:a}){const l=Qt(),o=vs();let r;return()=>{const d=a.default&&An(a.default(),!0);if(!d||!d.length)return;let p=d[0];if(d.length>1){for(const C of d)if(C.type!==_t){p=C;break}}const f=Re(e),{mode:s}=f;if(o.isLeaving)return Vn(p);const c=tr(p);if(!c)return Vn(p);const g=wa(c,f,o,l);Gi(c,g);const m=l.subTree,h=m&&tr(m);let w=!1;const{getTransitionKey:b}=c.type;if(b){const C=b();r===void 0?r=C:C!==r&&(r=C,w=!0)}if(h&&h.type!==_t&&(!Gt(c,h)||w)){const C=wa(h,f,o,l);if(Gi(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Vn(p);s==="in-out"&&c.type!==_t&&(C.delayLeave=($,D,_)=>{const S=hd(o,h);S[String(h.key)]=h,$[hi]=()=>{D(),$[hi]=void 0,delete g.delayedLeave},g.delayedLeave=_})}return p}}},gd=Tf;function hd(e,a){const{leavingVNodes:l}=e;let o=l.get(a.type);return o||(o=Object.create(null),l.set(a.type,o)),o}function wa(e,a,l,o){const{appear:r,mode:d,persisted:p=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:c,onEnterCancelled:g,onBeforeLeave:m,onLeave:h,onAfterLeave:w,onLeaveCancelled:b,onBeforeAppear:C,onAppear:$,onAfterAppear:D,onAppearCancelled:_}=a,S=String(e.key),x=hd(l,e),T=(V,P)=>{V&&Rt(V,o,9,P)},I=(V,P)=>{const q=P[1];T(V,P),he(V)?V.every(Q=>Q.length<=1)&&q():V.length<=1&&q()},M={mode:d,persisted:p,beforeEnter(V){let P=f;if(!l.isMounted)if(r)P=C||f;else return;V[hi]&&V[hi](!0);const q=x[S];q&&Gt(e,q)&&q.el[hi]&&q.el[hi](),T(P,[V])},enter(V){let P=s,q=c,Q=g;if(!l.isMounted)if(r)P=$||s,q=D||c,Q=_||g;else return;let Y=!1;const ge=V[kl]=Be=>{Y||(Y=!0,Be?T(Q,[V]):T(q,[V]),M.delayedLeave&&M.delayedLeave(),V[kl]=void 0)};P?I(P,[V,ge]):ge()},leave(V,P){const q=String(e.key);if(V[kl]&&V[kl](!0),l.isUnmounting)return P();T(m,[V]);let Q=!1;const Y=V[hi]=ge=>{Q||(Q=!0,P(),ge?T(b,[V]):T(w,[V]),V[hi]=void 0,x[q]===e&&delete x[q])};x[q]=e,h?I(h,[V,Y]):Y()},clone(V){return wa(V,a,l,o)}};return M}function Vn(e){if(hl(e))return e=Kt(e),e.children=null,e}function tr(e){return hl(e)?e.children?e.children[0]:void 0:e}function Gi(e,a){e.shapeFlag&6&&e.component?Gi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function An(e,a=!1,l){let o=[],r=0;for(let d=0;d<e.length;d++){let p=e[d];const f=l==null?p.key:String(l)+String(p.key!=null?p.key:d);p.type===Ae?(p.patchFlag&128&&r++,o=o.concat(An(p.children,a,f))):(a||p.type!==_t)&&o.push(f!=null?Kt(p,{key:f}):p)}if(r>1)for(let d=0;d<o.length;d++)o[d].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function z(e,a){return Ce(e)?Xe({name:e.name},a,{setup:e}):e}const Oi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Df(e){Ce(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:o,delay:r=200,timeout:d,suspensible:p=!0,onError:f}=e;let s=null,c,g=0;const m=()=>(g++,s=null,h()),h=()=>{let w;return s||(w=s=a().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),f)return new Promise((C,$)=>{f(b,()=>C(m()),()=>$(b),g+1)});throw b}).then(b=>w!==s&&s?s:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const w=ot;if(c)return()=>Hn(c,w);const b=_=>{s=null,ta(_,w,13,!o)};if(p&&w.suspense||_l)return h().then(_=>()=>Hn(_,w)).catch(_=>(b(_),()=>o?t(o,{error:_}):null));const C=G(!1),$=G(),D=G(!!r);return r&&setTimeout(()=>{D.value=!1},r),d!=null&&setTimeout(()=>{if(!C.value&&!$.value){const _=new Error(`Async component timed out after ${d}ms.`);b(_),$.value=_}},d),h().then(()=>{C.value=!0,w.parent&&hl(w.parent.vnode)&&(w.parent.effect.dirty=!0,Sn(w.parent.update))}).catch(_=>{b(_),$.value=_}),()=>{if(C.value&&c)return Hn(c,w);if($.value&&o)return t(o,{error:$.value});if(l&&!D.value)return t(l)}}})}function Hn(e,a){const{ref:l,props:o,children:r,ce:d}=a.vnode,p=t(e,o,r);return p.ref=l,p.ce=d,delete a.vnode.ce,p}const hl=e=>e.type.__isKeepAlive,Lf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=Qt(),o=l.ctx;if(!o.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,d=new Set;let p=null;const f=l.suspense,{renderer:{p:s,m:c,um:g,o:{createElement:m}}}=o,h=m("div");o.activate=(_,S,x,T,I)=>{const M=_.component;c(_,S,x,0,f),s(M.vnode,_,S,x,M,f,T,_.slotScopeIds,I),dt(()=>{M.isDeactivated=!1,M.a&&ma(M.a);const V=_.props&&_.props.onVnodeMounted;V&&yt(V,M.parent,_)},f)},o.deactivate=_=>{const S=_.component;c(_,h,null,1,f),dt(()=>{S.da&&ma(S.da);const x=_.props&&_.props.onVnodeUnmounted;x&&yt(x,S.parent,_),S.isDeactivated=!0},f)};function w(_){Nn(_),g(_,l,f,!0)}function b(_){r.forEach((S,x)=>{const T=Bo(S.type);T&&(!_||!_(T))&&C(x)})}function C(_){const S=r.get(_);!p||!Gt(S,p)?w(S):p&&Nn(p),r.delete(_),d.delete(_)}ht(()=>[e.include,e.exclude],([_,S])=>{_&&b(x=>Ha(_,x)),S&&b(x=>!Ha(S,x))},{flush:"post",deep:!0});let $=null;const D=()=>{$!=null&&r.set($,On(l.subTree))};return Di(D),xn(D),$n(()=>{r.forEach(_=>{const{subTree:S,suspense:x}=l,T=On(S);if(_.type===T.type&&_.key===T.key){Nn(T);const I=T.component.da;I&&dt(I,x);return}w(_)})}),()=>{if($=null,!a.default)return null;const _=a.default(),S=_[0];if(_.length>1)return p=null,_;if(!Nt(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return p=null,S;let x=On(S);const T=x.type,I=Bo(Oi(x)?x.type.__asyncResolved||{}:T),{include:M,exclude:V,max:P}=e;if(M&&(!I||!Ha(M,I))||V&&I&&Ha(V,I))return p=x,S;const q=x.key==null?T:x.key,Q=r.get(q);return x.el&&(x=Kt(x),S.shapeFlag&128&&(S.ssContent=x)),$=q,Q?(x.el=Q.el,x.component=Q.component,x.transition&&Gi(x,x.transition),x.shapeFlag|=512,d.delete(q),d.add(q)):(d.add(q),P&&d.size>parseInt(P,10)&&C(d.values().next().value)),x.shapeFlag|=256,p=x,rd(S.type)?S:x}}},If=Lf;function Ha(e,a){return he(e)?e.some(l=>Ha(l,a)):Qe(e)?e.split(",").includes(a):dp(e)?e.test(a):!1}function ys(e,a){_d(e,"a",a)}function ws(e,a){_d(e,"da",a)}function _d(e,a,l=ot){const o=e.__wdc||(e.__wdc=()=>{let r=l;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(kn(a,o,l),l){let r=l.parent;for(;r&&r.parent;)hl(r.parent.vnode)&&Rf(o,a,l,r),r=r.parent}}function Rf(e,a,l,o){const r=kn(a,e,o,!0);ia(()=>{Zo(o[a],r)},l)}function Nn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function On(e){return e.shapeFlag&128?e.ssContent:e}function kn(e,a,l=ot,o=!1){if(l){const r=l[e]||(l[e]=[]),d=a.__weh||(a.__weh=(...p)=>{if(l.isUnmounted)return;Zi();const f=Wi(l),s=Rt(a,l,e,p);return f(),ea(),s});return o?r.unshift(d):r.push(d),d}}const ri=e=>(a,l=ot)=>(!_l||e==="sp")&&kn(e,(...o)=>a(...o),l),bd=ri("bm"),Di=ri("m"),vd=ri("bu"),xn=ri("u"),$n=ri("bum"),ia=ri("um"),Sd=ri("sp"),yd=ri("rtg"),wd=ri("rtc");function Cd(e,a=ot){kn("ec",e,a)}function et(e,a,l,o){let r;const d=l&&l[o];if(he(e)||Qe(e)){r=new Array(e.length);for(let p=0,f=e.length;p<f;p++)r[p]=a(e[p],p,void 0,d&&d[p])}else if(typeof e=="number"){r=new Array(e);for(let p=0;p<e;p++)r[p]=a(p+1,p,void 0,d&&d[p])}else if(Ge(e))if(e[Symbol.iterator])r=Array.from(e,(p,f)=>a(p,f,void 0,d&&d[f]));else{const p=Object.keys(e);r=new Array(p.length);for(let f=0,s=p.length;f<s;f++){const c=p[f];r[f]=a(e[c],c,f,d&&d[f])}}else r=[];return l&&(l[o]=r),r}function Ef(e,a){for(let l=0;l<a.length;l++){const o=a[l];if(he(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const d=o.fn(...r);return d&&(d.key=o.key),d}:o.fn)}return e}function Ui(e,a,l={},o,r){if(lt.isCE||lt.parent&&Oi(lt.parent)&&lt.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,o&&o());let d=e[a];d&&d._c&&(d._d=!1),k();const p=d&&Ad(d(l)),f=B(Ae,{key:l.key||p&&p.key||`_${a}`},p||(o?o():[]),p&&e._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),d&&d._c&&(d._d=!0),f}function Ad(e){return e.some(a=>Nt(a)?!(a.type===_t||a.type===Ae&&!Ad(a.children)):!0)?e:null}function zf(e,a){const l={};for(const o in e)l[a&&/[A-Z]/.test(o)?`on:${o}`:Ua(o)]=e[o];return l}const _o=e=>e?Gd(e)?Dn(e)||e.proxy:_o(e.parent):null,Ya=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_o(e.parent),$root:e=>_o(e.root),$emit:e=>e.emit,$options:e=>Cs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Sn(e.update)}),$nextTick:e=>e.n||(e.n=La.bind(e.proxy)),$watch:e=>Bf.bind(e)}),jn=(e,a)=>e!==je&&!e.__isScriptSetup&&Fe(e,a),bo={get({_:e},a){const{ctx:l,setupState:o,data:r,props:d,accessCache:p,type:f,appContext:s}=e;let c;if(a[0]!=="$"){const w=p[a];if(w!==void 0)switch(w){case 1:return o[a];case 2:return r[a];case 4:return l[a];case 3:return d[a]}else{if(jn(o,a))return p[a]=1,o[a];if(r!==je&&Fe(r,a))return p[a]=2,r[a];if((c=e.propsOptions[0])&&Fe(c,a))return p[a]=3,d[a];if(l!==je&&Fe(l,a))return p[a]=4,l[a];vo&&(p[a]=0)}}const g=Ya[a];let m,h;if(g)return a==="$attrs"&&$t(e,"get",a),g(e);if((m=f.__cssModules)&&(m=m[a]))return m;if(l!==je&&Fe(l,a))return p[a]=4,l[a];if(h=s.config.globalProperties,Fe(h,a))return h[a]},set({_:e},a,l){const{data:o,setupState:r,ctx:d}=e;return jn(r,a)?(r[a]=l,!0):o!==je&&Fe(o,a)?(o[a]=l,!0):Fe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:o,appContext:r,propsOptions:d}},p){let f;return!!l[p]||e!==je&&Fe(e,p)||jn(a,p)||(f=d[0])&&Fe(f,p)||Fe(o,p)||Fe(Ya,p)||Fe(r.config.globalProperties,p)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:Fe(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},Ff=Xe({},bo,{get(e,a){if(a!==Symbol.unscopables)return bo.get(e,a,e)},has(e,a){return a[0]!=="_"&&!hp(a)}});function Pf(){return null}function Mf(){return null}function Vf(e){}function Hf(e){}function Nf(){return null}function Of(){}function jf(e,a){return null}function qf(){return xd().slots}function kd(){return xd().attrs}function xd(){const e=Qt();return e.setupContext||(e.setupContext=Jd(e))}function sl(e){return he(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function Gf(e,a){const l=sl(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=l[o];r?he(r)||Ce(r)?r=l[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=l[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return l}function Uf(e,a){return!e||!a?e||a:he(e)&&he(a)?e.concat(a):Xe({},sl(e),sl(a))}function Yf(e,a){const l={};for(const o in e)a.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>e[o]});return l}function Jf(e){const a=Qt();let l=e();return ko(),es(l)&&(l=l.catch(o=>{throw Wi(a),o})),[l,()=>Wi(a)]}let vo=!0;function Wf(e){const a=Cs(e),l=e.proxy,o=e.ctx;vo=!1,a.beforeCreate&&ir(a.beforeCreate,e,"bc");const{data:r,computed:d,methods:p,watch:f,provide:s,inject:c,created:g,beforeMount:m,mounted:h,beforeUpdate:w,updated:b,activated:C,deactivated:$,beforeDestroy:D,beforeUnmount:_,destroyed:S,unmounted:x,render:T,renderTracked:I,renderTriggered:M,errorCaptured:V,serverPrefetch:P,expose:q,inheritAttrs:Q,components:Y,directives:ge,filters:Be}=a;if(c&&Kf(c,o,null),p)for(const me in p){const ae=p[me];Ce(ae)&&(o[me]=ae.bind(l))}if(r){const me=r.call(l,l);Ge(me)&&(e.data=si(me))}if(vo=!0,d)for(const me in d){const ae=d[me],Le=Ce(ae)?ae.bind(l,l):Ce(ae.get)?ae.get.bind(l,l):Ct,We=!Ce(ae)&&Ce(ae.set)?ae.set.bind(l):Ct,st=N({get:Le,set:We});Object.defineProperty(o,me,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(f)for(const me in f)$d(f[me],o,l,me);if(s){const me=Ce(s)?s.call(l):s;Reflect.ownKeys(me).forEach(ae=>{mt(ae,me[ae])})}g&&ir(g,e,"c");function X(me,ae){he(ae)?ae.forEach(Le=>me(Le.bind(l))):ae&&me(ae.bind(l))}if(X(bd,m),X(Di,h),X(vd,w),X(xn,b),X(ys,C),X(ws,$),X(Cd,V),X(wd,I),X(yd,M),X($n,_),X(ia,x),X(Sd,P),he(q))if(q.length){const me=e.exposed||(e.exposed={});q.forEach(ae=>{Object.defineProperty(me,ae,{get:()=>l[ae],set:Le=>l[ae]=Le})})}else e.exposed||(e.exposed={});T&&e.render===Ct&&(e.render=T),Q!=null&&(e.inheritAttrs=Q),Y&&(e.components=Y),ge&&(e.directives=ge)}function Kf(e,a,l=Ct){he(e)&&(e=So(e));for(const o in e){const r=e[o];let d;Ge(r)?"default"in r?d=He(r.from||o,r.default,!0):d=He(r.from||o):d=He(r),pt(d)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>d.value,set:p=>d.value=p}):a[o]=d}}function ir(e,a,l){Rt(he(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,l)}function $d(e,a,l,o){const r=o.includes(".")?fd(l,o):()=>l[o];if(Qe(e)){const d=a[e];Ce(d)&&ht(r,d)}else if(Ce(e))ht(r,e.bind(l));else if(Ge(e))if(he(e))e.forEach(d=>$d(d,a,l,o));else{const d=Ce(e.handler)?e.handler.bind(l):a[e.handler];Ce(d)&&ht(r,d,e)}}function Cs(e){const a=e.type,{mixins:l,extends:o}=a,{mixins:r,optionsCache:d,config:{optionMergeStrategies:p}}=e.appContext,f=d.get(a);let s;return f?s=f:!r.length&&!l&&!o?s=a:(s={},r.length&&r.forEach(c=>jl(s,c,p,!0)),jl(s,a,p)),Ge(a)&&d.set(a,s),s}function jl(e,a,l,o=!1){const{mixins:r,extends:d}=a;d&&jl(e,d,l,!0),r&&r.forEach(p=>jl(e,p,l,!0));for(const p in a)if(!(o&&p==="expose")){const f=Xf[p]||l&&l[p];e[p]=f?f(e[p],a[p]):a[p]}return e}const Xf={data:ar,props:lr,emits:lr,methods:Na,computed:Na,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Na,directives:Na,watch:Zf,provide:ar,inject:Qf};function ar(e,a){return a?e?function(){return Xe(Ce(e)?e.call(this,this):e,Ce(a)?a.call(this,this):a)}:a:e}function Qf(e,a){return Na(So(e),So(a))}function So(e){if(he(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function bt(e,a){return e?[...new Set([].concat(e,a))]:a}function Na(e,a){return e?Xe(Object.create(null),e,a):a}function lr(e,a){return e?he(e)&&he(a)?[...new Set([...e,...a])]:Xe(Object.create(null),sl(e),sl(a??{})):a}function Zf(e,a){if(!e)return a;if(!a)return e;const l=Xe(Object.create(null),e);for(const o in a)l[o]=bt(e[o],a[o]);return l}function Bd(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(e,a){return function(o,r=null){Ce(o)||(o=Xe({},o)),r!=null&&!Ge(r)&&(r=null);const d=Bd(),p=new WeakSet;let f=!1;const s=d.app={_uid:eg++,_component:o,_props:r,_container:null,_context:d,_instance:null,version:Kd,get config(){return d.config},set config(c){},use(c,...g){return p.has(c)||(c&&Ce(c.install)?(p.add(c),c.install(s,...g)):Ce(c)&&(p.add(c),c(s,...g))),s},mixin(c){return d.mixins.includes(c)||d.mixins.push(c),s},component(c,g){return g?(d.components[c]=g,s):d.components[c]},directive(c,g){return g?(d.directives[c]=g,s):d.directives[c]},mount(c,g,m){if(!f){const h=t(o,r);return h.appContext=d,m===!0?m="svg":m===!1&&(m=void 0),g&&a?a(h,c):e(h,c,m),f=!0,s._container=c,c.__vue_app__=s,Dn(h.component)||h.component.proxy}},unmount(){f&&(e(null,s._container),delete s._container.__vue_app__)},provide(c,g){return d.provides[c]=g,s},runWithContext(c){rl=s;try{return c()}finally{rl=null}}};return s}}let rl=null;function mt(e,a){if(ot){let l=ot.provides;const o=ot.parent&&ot.parent.provides;o===l&&(l=ot.provides=Object.create(o)),l[e]=a}}function He(e,a,l=!1){const o=ot||lt;if(o||rl){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:rl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return l&&Ce(a)?a.call(o&&o.proxy):a}}function ig(){return!!(ot||lt||rl)}function ag(e,a,l,o=!1){const r={},d={};Ml(d,Tn,1),e.propsDefaults=Object.create(null),Td(e,a,r,d);for(const p in e.propsOptions[0])p in r||(r[p]=void 0);l?e.props=o?r:Yc(r):e.type.props?e.props=r:e.props=d,e.attrs=d}function lg(e,a,l,o){const{props:r,attrs:d,vnode:{patchFlag:p}}=e,f=Re(r),[s]=e.propsOptions;let c=!1;if((o||p>0)&&!(p&16)){if(p&8){const g=e.vnode.dynamicProps;for(let m=0;m<g.length;m++){let h=g[m];if(yn(e.emitsOptions,h))continue;const w=a[h];if(s)if(Fe(d,h))w!==d[h]&&(d[h]=w,c=!0);else{const b=vt(h);r[b]=yo(s,f,b,w,e,!1)}else w!==d[h]&&(d[h]=w,c=!0)}}}else{Td(e,a,r,d)&&(c=!0);let g;for(const m in f)(!a||!Fe(a,m)&&((g=It(m))===m||!Fe(a,g)))&&(s?l&&(l[m]!==void 0||l[g]!==void 0)&&(r[m]=yo(s,f,m,void 0,e,!0)):delete r[m]);if(d!==f)for(const m in d)(!a||!Fe(a,m))&&(delete d[m],c=!0)}c&&ai(e,"set","$attrs")}function Td(e,a,l,o){const[r,d]=e.propsOptions;let p=!1,f;if(a)for(let s in a){if(Ga(s))continue;const c=a[s];let g;r&&Fe(r,g=vt(s))?!d||!d.includes(g)?l[g]=c:(f||(f={}))[g]=c:yn(e.emitsOptions,s)||(!(s in o)||c!==o[s])&&(o[s]=c,p=!0)}if(d){const s=Re(l),c=f||je;for(let g=0;g<d.length;g++){const m=d[g];l[m]=yo(r,s,m,c[m],e,!Fe(c,m))}}return p}function yo(e,a,l,o,r,d){const p=e[l];if(p!=null){const f=Fe(p,"default");if(f&&o===void 0){const s=p.default;if(p.type!==Function&&!p.skipFactory&&Ce(s)){const{propsDefaults:c}=r;if(l in c)o=c[l];else{const g=Wi(r);o=c[l]=s.call(null,a),g()}}else o=s}p[0]&&(d&&!f?o=!1:p[1]&&(o===""||o===It(l))&&(o=!0))}return o}function Dd(e,a,l=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const d=e.props,p={},f=[];let s=!1;if(!Ce(e)){const g=m=>{s=!0;const[h,w]=Dd(m,a,!0);Xe(p,h),w&&f.push(...w)};!l&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!d&&!s)return Ge(e)&&o.set(e,ca),ca;if(he(d))for(let g=0;g<d.length;g++){const m=vt(d[g]);nr(m)&&(p[m]=je)}else if(d)for(const g in d){const m=vt(g);if(nr(m)){const h=d[g],w=p[m]=he(h)||Ce(h)?{type:h}:Xe({},h);if(w){const b=rr(Boolean,w.type),C=rr(String,w.type);w[0]=b>-1,w[1]=C<0||b<C,(b>-1||Fe(w,"default"))&&f.push(m)}}}const c=[p,f];return Ge(e)&&o.set(e,c),c}function nr(e){return e[0]!=="$"}function or(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function sr(e,a){return or(e)===or(a)}function rr(e,a){return he(a)?a.findIndex(l=>sr(l,e)):Ce(a)&&sr(a,e)?0:-1}const Ld=e=>e[0]==="_"||e==="$stable",As=e=>he(e)?e.map(Lt):[Lt(e)],ng=(e,a,l)=>{if(a._n)return a;const o=i((...r)=>As(a(...r)),l);return o._c=!1,o},Id=(e,a,l)=>{const o=e._ctx;for(const r in e){if(Ld(r))continue;const d=e[r];if(Ce(d))a[r]=ng(r,d,o);else if(d!=null){const p=As(d);a[r]=()=>p}}},Rd=(e,a)=>{const l=As(a);e.slots.default=()=>l},og=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Re(a),Ml(a,"_",l)):Id(a,e.slots={})}else e.slots={},a&&Rd(e,a);Ml(e.slots,Tn,1)},sg=(e,a,l)=>{const{vnode:o,slots:r}=e;let d=!0,p=je;if(o.shapeFlag&32){const f=a._;f?l&&f===1?d=!1:(Xe(r,a),!l&&f===1&&delete r._):(d=!a.$stable,Id(a,r)),p=a}else a&&(Rd(e,a),p={default:1});if(d)for(const f in r)!Ld(f)&&p[f]==null&&delete r[f]};function ql(e,a,l,o,r=!1){if(he(e)){e.forEach((h,w)=>ql(h,a&&(he(a)?a[w]:a),l,o,r));return}if(Oi(o)&&!r)return;const d=o.shapeFlag&4?Dn(o.component)||o.component.proxy:o.el,p=r?null:d,{i:f,r:s}=e,c=a&&a.r,g=f.refs===je?f.refs={}:f.refs,m=f.setupState;if(c!=null&&c!==s&&(Qe(c)?(g[c]=null,Fe(m,c)&&(m[c]=null)):pt(c)&&(c.value=null)),Ce(s))li(s,f,12,[p,g]);else{const h=Qe(s),w=pt(s),b=e.f;if(h||w){const C=()=>{if(b){const $=h?Fe(m,s)?m[s]:g[s]:s.value;r?he($)&&Zo($,d):he($)?$.includes(d)||$.push(d):h?(g[s]=[d],Fe(m,s)&&(m[s]=g[s])):(s.value=[d],e.k&&(g[e.k]=s.value))}else h?(g[s]=p,Fe(m,s)&&(m[s]=p)):w&&(s.value=p,e.k&&(g[e.k]=p))};r||b?C():(C.id=-1,dt(C,l))}}}let di=!1;const rg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",ug=e=>e.namespaceURI.includes("MathML"),xl=e=>{if(rg(e))return"svg";if(ug(e))return"mathml"},$l=e=>e.nodeType===8;function cg(e){const{mt:a,p:l,o:{patchProp:o,createText:r,nextSibling:d,parentNode:p,remove:f,insert:s,createComment:c}}=e,g=(S,x)=>{if(!x.hasChildNodes()){l(null,S,x),Ol(),x._vnode=S;return}di=!1,m(x.firstChild,S,null,null,null),Ol(),x._vnode=S,di&&console.error("Hydration completed but contains mismatches.")},m=(S,x,T,I,M,V=!1)=>{const P=$l(S)&&S.data==="[",q=()=>C(S,x,T,I,M,P),{type:Q,ref:Y,shapeFlag:ge,patchFlag:Be}=x;let U=S.nodeType;x.el=S,Be===-2&&(V=!1,x.dynamicChildren=null);let X=null;switch(Q){case Yi:U!==3?x.children===""?(s(x.el=r(""),p(S),S),X=S):X=q():(S.data!==x.children&&(di=!0,S.data=x.children),X=d(S));break;case _t:_(S)?(X=d(S),D(x.el=S.content.firstChild,S,T)):U!==8||P?X=q():X=d(S);break;case ji:if(P&&(S=d(S),U=S.nodeType),U===1||U===3){X=S;const me=!x.children.length;for(let ae=0;ae<x.staticCount;ae++)me&&(x.children+=X.nodeType===1?X.outerHTML:X.data),ae===x.staticCount-1&&(x.anchor=X),X=d(X);return P?d(X):X}else q();break;case Ae:P?X=b(S,x,T,I,M,V):X=q();break;default:if(ge&1)(U!==1||x.type.toLowerCase()!==S.tagName.toLowerCase())&&!_(S)?X=q():X=h(S,x,T,I,M,V);else if(ge&6){x.slotScopeIds=M;const me=p(S);if(P?X=$(S):$l(S)&&S.data==="teleport start"?X=$(S,S.data,"teleport end"):X=d(S),a(x,me,null,T,I,xl(me),V),Oi(x)){let ae;P?(ae=t(Ae),ae.anchor=X?X.previousSibling:me.lastChild):ae=S.nodeType===3?n(""):t("div"),ae.el=S,x.component.subTree=ae}}else ge&64?U!==8?X=q():X=x.type.hydrate(S,x,T,I,M,V,e,w):ge&128&&(X=x.type.hydrate(S,x,T,I,xl(p(S)),M,V,e,m))}return Y!=null&&ql(Y,null,I,x),X},h=(S,x,T,I,M,V)=>{V=V||!!x.dynamicChildren;const{type:P,props:q,patchFlag:Q,shapeFlag:Y,dirs:ge,transition:Be}=x,U=P==="input"||P==="option";if(U||Q!==-1){ge&&Jt(x,null,T,"created");let X=!1;if(_(S)){X=Pd(I,Be)&&T&&T.vnode.props&&T.vnode.props.appear;const ae=S.content.firstChild;X&&Be.beforeEnter(ae),D(ae,S,T),x.el=S=ae}if(Y&16&&!(q&&(q.innerHTML||q.textContent))){let ae=w(S.firstChild,x,S,T,I,M,V);for(;ae;){di=!0;const Le=ae;ae=ae.nextSibling,f(Le)}}else Y&8&&S.textContent!==x.children&&(di=!0,S.textContent=x.children);if(q)if(U||!V||Q&48)for(const ae in q)(U&&(ae.endsWith("value")||ae==="indeterminate")||ml(ae)&&!Ga(ae)||ae[0]===".")&&o(S,ae,null,q[ae],void 0,void 0,T);else q.onClick&&o(S,"onClick",null,q.onClick,void 0,void 0,T);let me;(me=q&&q.onVnodeBeforeMount)&&yt(me,T,x),ge&&Jt(x,null,T,"beforeMount"),((me=q&&q.onVnodeMounted)||ge||X)&&ud(()=>{me&&yt(me,T,x),X&&Be.enter(S),ge&&Jt(x,null,T,"mounted")},I)}return S.nextSibling},w=(S,x,T,I,M,V,P)=>{P=P||!!x.dynamicChildren;const q=x.children,Q=q.length;for(let Y=0;Y<Q;Y++){const ge=P?q[Y]:q[Y]=Lt(q[Y]);if(S)S=m(S,ge,I,M,V,P);else{if(ge.type===Yi&&!ge.children)continue;di=!0,l(null,ge,T,null,I,M,xl(T),V)}}return S},b=(S,x,T,I,M,V)=>{const{slotScopeIds:P}=x;P&&(M=M?M.concat(P):P);const q=p(S),Q=w(d(S),x,q,T,I,M,V);return Q&&$l(Q)&&Q.data==="]"?d(x.anchor=Q):(di=!0,s(x.anchor=c("]"),q,Q),Q)},C=(S,x,T,I,M,V)=>{if(di=!0,x.el=null,V){const Q=$(S);for(;;){const Y=d(S);if(Y&&Y!==Q)f(Y);else break}}const P=d(S),q=p(S);return f(S),l(null,x,q,P,T,I,xl(q),M),P},$=(S,x="[",T="]")=>{let I=0;for(;S;)if(S=d(S),S&&$l(S)&&(S.data===x&&I++,S.data===T)){if(I===0)return d(S);I--}return S},D=(S,x,T)=>{const I=x.parentNode;I&&I.replaceChild(S,x);let M=T;for(;M;)M.vnode.el===x&&(M.vnode.el=M.subTree.el=S),M=M.parent},_=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[g,m]}const dt=ud;function Ed(e){return Fd(e)}function zd(e){return Fd(e,cg)}function Fd(e,a){const l=Bc();l.__VUE__=!0;const{insert:o,remove:r,patchProp:d,createElement:p,createText:f,createComment:s,setText:c,setElementText:g,parentNode:m,nextSibling:h,setScopeId:w=Ct,insertStaticContent:b}=e,C=(L,E,j,Z=null,ee=null,oe=null,ce=void 0,le=null,se=!!E.dynamicChildren)=>{if(L===E)return;L&&!Gt(L,E)&&(Z=re(L),Ue(L,ee,oe,!0),L=null),E.patchFlag===-2&&(se=!1,E.dynamicChildren=null);const{type:ie,ref:fe,shapeFlag:ye}=E;switch(ie){case Yi:$(L,E,j,Z);break;case _t:D(L,E,j,Z);break;case ji:L==null&&_(E,j,Z,ce);break;case Ae:Y(L,E,j,Z,ee,oe,ce,le,se);break;default:ye&1?T(L,E,j,Z,ee,oe,ce,le,se):ye&6?ge(L,E,j,Z,ee,oe,ce,le,se):(ye&64||ye&128)&&ie.process(L,E,j,Z,ee,oe,ce,le,se,Oe)}fe!=null&&ee&&ql(fe,L&&L.ref,oe,E||L,!E)},$=(L,E,j,Z)=>{if(L==null)o(E.el=f(E.children),j,Z);else{const ee=E.el=L.el;E.children!==L.children&&c(ee,E.children)}},D=(L,E,j,Z)=>{L==null?o(E.el=s(E.children||""),j,Z):E.el=L.el},_=(L,E,j,Z)=>{[L.el,L.anchor]=b(L.children,E,j,Z,L.el,L.anchor)},S=({el:L,anchor:E},j,Z)=>{let ee;for(;L&&L!==E;)ee=h(L),o(L,j,Z),L=ee;o(E,j,Z)},x=({el:L,anchor:E})=>{let j;for(;L&&L!==E;)j=h(L),r(L),L=j;r(E)},T=(L,E,j,Z,ee,oe,ce,le,se)=>{E.type==="svg"?ce="svg":E.type==="math"&&(ce="mathml"),L==null?I(E,j,Z,ee,oe,ce,le,se):P(L,E,ee,oe,ce,le,se)},I=(L,E,j,Z,ee,oe,ce,le)=>{let se,ie;const{props:fe,shapeFlag:ye,transition:Se,dirs:ke}=L;if(se=L.el=p(L.type,oe,fe&&fe.is,fe),ye&8?g(se,L.children):ye&16&&V(L.children,se,null,Z,ee,qn(L,oe),ce,le),ke&&Jt(L,null,Z,"created"),M(se,L,L.scopeId,ce,Z),fe){for(const qe in fe)qe!=="value"&&!Ga(qe)&&d(se,qe,null,fe[qe],oe,L.children,Z,ee,ue);"value"in fe&&d(se,"value",null,fe.value,oe),(ie=fe.onVnodeBeforeMount)&&yt(ie,Z,L)}ke&&Jt(L,null,Z,"beforeMount");const Ie=Pd(ee,Se);Ie&&Se.beforeEnter(se),o(se,E,j),((ie=fe&&fe.onVnodeMounted)||Ie||ke)&&dt(()=>{ie&&yt(ie,Z,L),Ie&&Se.enter(se),ke&&Jt(L,null,Z,"mounted")},ee)},M=(L,E,j,Z,ee)=>{if(j&&w(L,j),Z)for(let oe=0;oe<Z.length;oe++)w(L,Z[oe]);if(ee){let oe=ee.subTree;if(E===oe){const ce=ee.vnode;M(L,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},V=(L,E,j,Z,ee,oe,ce,le,se=0)=>{for(let ie=se;ie<L.length;ie++){const fe=L[ie]=le?_i(L[ie]):Lt(L[ie]);C(null,fe,E,j,Z,ee,oe,ce,le)}},P=(L,E,j,Z,ee,oe,ce)=>{const le=E.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:fe}=E;se|=L.patchFlag&16;const ye=L.props||je,Se=E.props||je;let ke;if(j&&Ri(j,!1),(ke=Se.onVnodeBeforeUpdate)&&yt(ke,j,E,L),fe&&Jt(E,L,j,"beforeUpdate"),j&&Ri(j,!0),ie?q(L.dynamicChildren,ie,le,j,Z,qn(E,ee),oe):ce||ae(L,E,le,null,j,Z,qn(E,ee),oe,!1),se>0){if(se&16)Q(le,E,ye,Se,j,Z,ee);else if(se&2&&ye.class!==Se.class&&d(le,"class",null,Se.class,ee),se&4&&d(le,"style",ye.style,Se.style,ee),se&8){const Ie=E.dynamicProps;for(let qe=0;qe<Ie.length;qe++){const Ke=Ie[qe],rt=ye[Ke],Ot=Se[Ke];(Ot!==rt||Ke==="value")&&d(le,Ke,rt,Ot,ee,L.children,j,Z,ue)}}se&1&&L.children!==E.children&&g(le,E.children)}else!ce&&ie==null&&Q(le,E,ye,Se,j,Z,ee);((ke=Se.onVnodeUpdated)||fe)&&dt(()=>{ke&&yt(ke,j,E,L),fe&&Jt(E,L,j,"updated")},Z)},q=(L,E,j,Z,ee,oe,ce)=>{for(let le=0;le<E.length;le++){const se=L[le],ie=E[le],fe=se.el&&(se.type===Ae||!Gt(se,ie)||se.shapeFlag&70)?m(se.el):j;C(se,ie,fe,null,Z,ee,oe,ce,!0)}},Q=(L,E,j,Z,ee,oe,ce)=>{if(j!==Z){if(j!==je)for(const le in j)!Ga(le)&&!(le in Z)&&d(L,le,j[le],null,ce,E.children,ee,oe,ue);for(const le in Z){if(Ga(le))continue;const se=Z[le],ie=j[le];se!==ie&&le!=="value"&&d(L,le,ie,se,ce,E.children,ee,oe,ue)}"value"in Z&&d(L,"value",j.value,Z.value,ce)}},Y=(L,E,j,Z,ee,oe,ce,le,se)=>{const ie=E.el=L?L.el:f(""),fe=E.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:Se,slotScopeIds:ke}=E;ke&&(le=le?le.concat(ke):ke),L==null?(o(ie,j,Z),o(fe,j,Z),V(E.children||[],j,fe,ee,oe,ce,le,se)):ye>0&&ye&64&&Se&&L.dynamicChildren?(q(L.dynamicChildren,Se,j,ee,oe,ce,le),(E.key!=null||ee&&E===ee.subTree)&&ks(L,E,!0)):ae(L,E,j,fe,ee,oe,ce,le,se)},ge=(L,E,j,Z,ee,oe,ce,le,se)=>{E.slotScopeIds=le,L==null?E.shapeFlag&512?ee.ctx.activate(E,j,Z,ce,se):Be(E,j,Z,ee,oe,ce,se):U(L,E,se)},Be=(L,E,j,Z,ee,oe,ce)=>{const le=L.component=qd(L,Z,ee);if(hl(L)&&(le.ctx.renderer=Oe),Ud(le),le.asyncDep){if(ee&&ee.registerDep(le,X),!L.el){const se=le.subTree=t(_t);D(null,se,E,j)}}else X(le,L,E,j,ee,oe,ce)},U=(L,E,j)=>{const Z=E.component=L.component;if(vf(L,E,j))if(Z.asyncDep&&!Z.asyncResolved){me(Z,E,j);return}else Z.next=E,mf(Z.update),Z.effect.dirty=!0,Z.update();else E.el=L.el,Z.vnode=E},X=(L,E,j,Z,ee,oe,ce)=>{const le=()=>{if(L.isMounted){let{next:fe,bu:ye,u:Se,parent:ke,vnode:Ie}=L;{const la=Md(L);if(la){fe&&(fe.el=Ie.el,me(L,fe,ce)),la.asyncDep.then(()=>{L.isUnmounted||le()});return}}let qe=fe,Ke;Ri(L,!1),fe?(fe.el=Ie.el,me(L,fe,ce)):fe=Ie,ye&&ma(ye),(Ke=fe.props&&fe.props.onVnodeBeforeUpdate)&&yt(Ke,ke,fe,Ie),Ri(L,!0);const rt=El(L),Ot=L.subTree;L.subTree=rt,C(Ot,rt,m(Ot.el),re(Ot),L,ee,oe),fe.el=rt.el,qe===null&&fs(L,rt.el),Se&&dt(Se,ee),(Ke=fe.props&&fe.props.onVnodeUpdated)&&dt(()=>yt(Ke,ke,fe,Ie),ee)}else{let fe;const{el:ye,props:Se}=E,{bm:ke,m:Ie,parent:qe}=L,Ke=Oi(E);if(Ri(L,!1),ke&&ma(ke),!Ke&&(fe=Se&&Se.onVnodeBeforeMount)&&yt(fe,qe,E),Ri(L,!0),ye&&$e){const rt=()=>{L.subTree=El(L),$e(ye,L.subTree,L,ee,null)};Ke?E.type.__asyncLoader().then(()=>!L.isUnmounted&&rt()):rt()}else{const rt=L.subTree=El(L);C(null,rt,j,Z,L,ee,oe),E.el=rt.el}if(Ie&&dt(Ie,ee),!Ke&&(fe=Se&&Se.onVnodeMounted)){const rt=E;dt(()=>yt(fe,qe,rt),ee)}(E.shapeFlag&256||qe&&Oi(qe.vnode)&&qe.vnode.shapeFlag&256)&&L.a&&dt(L.a,ee),L.isMounted=!0,E=j=Z=null}},se=L.effect=new ya(le,Ct,()=>Sn(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Ri(L,!0),ie()},me=(L,E,j)=>{E.component=L;const Z=L.vnode.props;L.vnode=E,L.next=null,lg(L,E.props,Z,j),sg(L,E.children,j),Zi(),Xs(L),ea()},ae=(L,E,j,Z,ee,oe,ce,le,se=!1)=>{const ie=L&&L.children,fe=L?L.shapeFlag:0,ye=E.children,{patchFlag:Se,shapeFlag:ke}=E;if(Se>0){if(Se&128){We(ie,ye,j,Z,ee,oe,ce,le,se);return}else if(Se&256){Le(ie,ye,j,Z,ee,oe,ce,le,se);return}}ke&8?(fe&16&&ue(ie,ee,oe),ye!==ie&&g(j,ye)):fe&16?ke&16?We(ie,ye,j,Z,ee,oe,ce,le,se):ue(ie,ee,oe,!0):(fe&8&&g(j,""),ke&16&&V(ye,j,Z,ee,oe,ce,le,se))},Le=(L,E,j,Z,ee,oe,ce,le,se)=>{L=L||ca,E=E||ca;const ie=L.length,fe=E.length,ye=Math.min(ie,fe);let Se;for(Se=0;Se<ye;Se++){const ke=E[Se]=se?_i(E[Se]):Lt(E[Se]);C(L[Se],ke,j,null,ee,oe,ce,le,se)}ie>fe?ue(L,ee,oe,!0,!1,ye):V(E,j,Z,ee,oe,ce,le,se,ye)},We=(L,E,j,Z,ee,oe,ce,le,se)=>{let ie=0;const fe=E.length;let ye=L.length-1,Se=fe-1;for(;ie<=ye&&ie<=Se;){const ke=L[ie],Ie=E[ie]=se?_i(E[ie]):Lt(E[ie]);if(Gt(ke,Ie))C(ke,Ie,j,null,ee,oe,ce,le,se);else break;ie++}for(;ie<=ye&&ie<=Se;){const ke=L[ye],Ie=E[Se]=se?_i(E[Se]):Lt(E[Se]);if(Gt(ke,Ie))C(ke,Ie,j,null,ee,oe,ce,le,se);else break;ye--,Se--}if(ie>ye){if(ie<=Se){const ke=Se+1,Ie=ke<fe?E[ke].el:Z;for(;ie<=Se;)C(null,E[ie]=se?_i(E[ie]):Lt(E[ie]),j,Ie,ee,oe,ce,le,se),ie++}}else if(ie>Se)for(;ie<=ye;)Ue(L[ie],ee,oe,!0),ie++;else{const ke=ie,Ie=ie,qe=new Map;for(ie=Ie;ie<=Se;ie++){const Tt=E[ie]=se?_i(E[ie]):Lt(E[ie]);Tt.key!=null&&qe.set(Tt.key,ie)}let Ke,rt=0;const Ot=Se-Ie+1;let la=!1,Vs=0;const Ea=new Array(Ot);for(ie=0;ie<Ot;ie++)Ea[ie]=0;for(ie=ke;ie<=ye;ie++){const Tt=L[ie];if(rt>=Ot){Ue(Tt,ee,oe,!0);continue}let Yt;if(Tt.key!=null)Yt=qe.get(Tt.key);else for(Ke=Ie;Ke<=Se;Ke++)if(Ea[Ke-Ie]===0&&Gt(Tt,E[Ke])){Yt=Ke;break}Yt===void 0?Ue(Tt,ee,oe,!0):(Ea[Yt-Ie]=ie+1,Yt>=Vs?Vs=Yt:la=!0,C(Tt,E[Yt],j,null,ee,oe,ce,le,se),rt++)}const Hs=la?dg(Ea):ca;for(Ke=Hs.length-1,ie=Ot-1;ie>=0;ie--){const Tt=Ie+ie,Yt=E[Tt],Ns=Tt+1<fe?E[Tt+1].el:Z;Ea[ie]===0?C(null,Yt,j,Ns,ee,oe,ce,le,se):la&&(Ke<0||ie!==Hs[Ke]?st(Yt,j,Ns,2):Ke--)}}},st=(L,E,j,Z,ee=null)=>{const{el:oe,type:ce,transition:le,children:se,shapeFlag:ie}=L;if(ie&6){st(L.component.subTree,E,j,Z);return}if(ie&128){L.suspense.move(E,j,Z);return}if(ie&64){ce.move(L,E,j,Oe);return}if(ce===Ae){o(oe,E,j);for(let ye=0;ye<se.length;ye++)st(se[ye],E,j,Z);o(L.anchor,E,j);return}if(ce===ji){S(L,E,j);return}if(Z!==2&&ie&1&&le)if(Z===0)le.beforeEnter(oe),o(oe,E,j),dt(()=>le.enter(oe),ee);else{const{leave:ye,delayLeave:Se,afterLeave:ke}=le,Ie=()=>o(oe,E,j),qe=()=>{ye(oe,()=>{Ie(),ke&&ke()})};Se?Se(oe,Ie,qe):qe()}else o(oe,E,j)},Ue=(L,E,j,Z=!1,ee=!1)=>{const{type:oe,props:ce,ref:le,children:se,dynamicChildren:ie,shapeFlag:fe,patchFlag:ye,dirs:Se}=L;if(le!=null&&ql(le,null,j,L,!0),fe&256){E.ctx.deactivate(L);return}const ke=fe&1&&Se,Ie=!Oi(L);let qe;if(Ie&&(qe=ce&&ce.onVnodeBeforeUnmount)&&yt(qe,E,L),fe&6)J(L.component,j,Z);else{if(fe&128){L.suspense.unmount(j,Z);return}ke&&Jt(L,null,E,"beforeUnmount"),fe&64?L.type.remove(L,E,j,ee,Oe,Z):ie&&(oe!==Ae||ye>0&&ye&64)?ue(ie,E,j,!1,!0):(oe===Ae&&ye&384||!ee&&fe&16)&&ue(se,E,j),Z&&Zt(L)}(Ie&&(qe=ce&&ce.onVnodeUnmounted)||ke)&&dt(()=>{qe&&yt(qe,E,L),ke&&Jt(L,null,E,"unmounted")},j)},Zt=L=>{const{type:E,el:j,anchor:Z,transition:ee}=L;if(E===Ae){Ft(j,Z);return}if(E===ji){x(L);return}const oe=()=>{r(j),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:le}=ee,se=()=>ce(j,oe);le?le(L.el,oe,se):se()}else oe()},Ft=(L,E)=>{let j;for(;L!==E;)j=h(L),r(L),L=j;r(E)},J=(L,E,j)=>{const{bum:Z,scope:ee,update:oe,subTree:ce,um:le}=L;Z&&ma(Z),ee.stop(),oe&&(oe.active=!1,Ue(ce,L,E,j)),le&&dt(le,E),dt(()=>{L.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ue=(L,E,j,Z=!1,ee=!1,oe=0)=>{for(let ce=oe;ce<L.length;ce++)Ue(L[ce],E,j,Z,ee)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let be=!1;const Ne=(L,E,j)=>{L==null?E._vnode&&Ue(E._vnode,null,null,!0):C(E._vnode||null,L,E,null,null,null,j),be||(be=!0,Xs(),Ol(),be=!1),E._vnode=L},Oe={p:C,um:Ue,m:st,r:Zt,mt:Be,mc:V,pc:ae,pbc:q,n:re,o:e};let xe,$e;return a&&([xe,$e]=a(Oe)),{render:Ne,hydrate:xe,createApp:tg(Ne,xe)}}function qn({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Ri({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function Pd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function ks(e,a,l=!1){const o=e.children,r=a.children;if(he(o)&&he(r))for(let d=0;d<o.length;d++){const p=o[d];let f=r[d];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[d]=_i(r[d]),f.el=p.el),l||ks(p,f)),f.type===Yi&&(f.el=p.el)}}function dg(e){const a=e.slice(),l=[0];let o,r,d,p,f;const s=e.length;for(o=0;o<s;o++){const c=e[o];if(c!==0){if(r=l[l.length-1],e[r]<c){a[o]=r,l.push(o);continue}for(d=0,p=l.length-1;d<p;)f=d+p>>1,e[l[f]]<c?d=f+1:p=f;c<e[l[d]]&&(d>0&&(a[o]=l[d-1]),l[d]=o)}}for(d=l.length,p=l[d-1];d-- >0;)l[d]=p,p=a[p];return l}function Md(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Md(a)}const mg=e=>e.__isTeleport,Ja=e=>e&&(e.disabled||e.disabled===""),ur=e=>typeof SVGElement<"u"&&e instanceof SVGElement,cr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,wo=(e,a)=>{const l=e&&e.to;return Qe(l)?a?a(l):null:l},pg={name:"Teleport",__isTeleport:!0,process(e,a,l,o,r,d,p,f,s,c){const{mc:g,pc:m,pbc:h,o:{insert:w,querySelector:b,createText:C,createComment:$}}=c,D=Ja(a.props);let{shapeFlag:_,children:S,dynamicChildren:x}=a;if(e==null){const T=a.el=C(""),I=a.anchor=C("");w(T,l,o),w(I,l,o);const M=a.target=wo(a.props,b),V=a.targetAnchor=C("");M&&(w(V,M),p==="svg"||ur(M)?p="svg":(p==="mathml"||cr(M))&&(p="mathml"));const P=(q,Q)=>{_&16&&g(S,q,Q,r,d,p,f,s)};D?P(l,I):M&&P(M,V)}else{a.el=e.el;const T=a.anchor=e.anchor,I=a.target=e.target,M=a.targetAnchor=e.targetAnchor,V=Ja(e.props),P=V?l:I,q=V?T:M;if(p==="svg"||ur(I)?p="svg":(p==="mathml"||cr(I))&&(p="mathml"),x?(h(e.dynamicChildren,x,P,r,d,p,f),ks(e,a,!0)):s||m(e,a,P,q,r,d,p,f,!1),D)V?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):Bl(a,l,T,c,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const Q=a.target=wo(a.props,b);Q&&Bl(a,Q,null,c,0)}else V&&Bl(a,I,M,c,1)}Vd(a)},remove(e,a,l,o,{um:r,o:{remove:d}},p){const{shapeFlag:f,children:s,anchor:c,targetAnchor:g,target:m,props:h}=e;if(m&&d(g),p&&d(c),f&16){const w=p||!Ja(h);for(let b=0;b<s.length;b++){const C=s[b];r(C,a,l,w,!!C.dynamicChildren)}}},move:Bl,hydrate:fg};function Bl(e,a,l,{o:{insert:o},m:r},d=2){d===0&&o(e.targetAnchor,a,l);const{el:p,anchor:f,shapeFlag:s,children:c,props:g}=e,m=d===2;if(m&&o(p,a,l),(!m||Ja(g))&&s&16)for(let h=0;h<c.length;h++)r(c[h],a,l,2);m&&o(f,a,l)}function fg(e,a,l,o,r,d,{o:{nextSibling:p,parentNode:f,querySelector:s}},c){const g=a.target=wo(a.props,s);if(g){const m=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Ja(a.props))a.anchor=c(p(e),a,f(e),l,o,r,d),a.targetAnchor=m;else{a.anchor=p(e);let h=m;for(;h;)if(h=p(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&p(a.targetAnchor);break}c(m,a,g,l,o,r,d)}Vd(a)}return a.anchor&&p(a.anchor)}const Bn=pg;function Vd(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ae=Symbol.for("v-fgt"),Yi=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),ji=Symbol.for("v-stc"),Wa=[];let At=null;function k(e=!1){Wa.push(At=e?null:[])}function Hd(){Wa.pop(),At=Wa[Wa.length-1]||null}let Ji=1;function Co(e){Ji+=e}function Nd(e){return e.dynamicChildren=Ji>0?At||ca:null,Hd(),Ji>0&&At&&At.push(e),e}function _e(e,a,l,o,r,d){return Nd(v(e,a,l,o,r,d,!0))}function B(e,a,l,o,r){return Nd(t(e,a,l,o,r,!0))}function Nt(e){return e?e.__v_isVNode===!0:!1}function Gt(e,a){return e.type===a.type&&e.key===a.key}function gg(e){}const Tn="__vInternal",Od=({key:e})=>e??null,zl=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Qe(e)||pt(e)||Ce(e)?{i:lt,r:e,k:a,f:!!l}:e:null);function v(e,a=null,l=null,o=0,r=null,d=e===Ae?0:1,p=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Od(a),ref:a&&zl(a),scopeId:wn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return f?($s(s,l),d&128&&e.normalize(s)):l&&(s.shapeFlag|=Qe(l)?8:16),Ji>0&&!p&&At&&(s.patchFlag>0||d&6)&&s.patchFlag!==32&&At.push(s),s}const t=hg;function hg(e,a=null,l=null,o=0,r=null,d=!1){if((!e||e===od)&&(e=_t),Nt(e)){const f=Kt(e,a,!0);return l&&$s(f,l),Ji>0&&!d&&At&&(f.shapeFlag&6?At[At.indexOf(e)]=f:At.push(f)),f.patchFlag|=-2,f}if(Ag(e)&&(e=e.__vccOpts),a){a=jd(a);let{class:f,style:s}=a;f&&!Qe(f)&&(a.class=fl(f)),Ge(s)&&(rs(s)&&!he(s)&&(s=Xe({},s)),a.style=Da(s))}const p=Qe(e)?1:rd(e)?128:mg(e)?64:Ge(e)?4:Ce(e)?2:0;return v(e,a,l,o,r,p,d,!0)}function jd(e){return e?rs(e)||Tn in e?Xe({},e):e:null}function Kt(e,a,l=!1){const{props:o,ref:r,patchFlag:d,children:p}=e,f=a?aa(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Od(f),ref:a&&a.ref?l&&r?he(r)?r.concat(zl(a)):[r,zl(a)]:zl(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:p,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ae?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(Yi,null,e,a)}function _g(e,a){const l=t(ji,null,e);return l.staticCount=a,l}function xs(e="",a=!1){return a?(k(),B(_t,null,e)):t(_t,null,e)}function Lt(e){return e==null||typeof e=="boolean"?t(_t):he(e)?t(Ae,null,e.slice()):typeof e=="object"?_i(e):t(Yi,null,String(e))}function _i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function $s(e,a){let l=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(he(a))l=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),$s(e,r()),r._c&&(r._d=!0));return}else{l=32;const r=a._;!r&&!(Tn in a)?a._ctx=lt:r===3&&lt&&(lt.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else Ce(a)?(a={default:a,_ctx:lt},l=32):(a=String(a),o&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function aa(...e){const a={};for(let l=0;l<e.length;l++){const o=e[l];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=fl([a.class,o.class]));else if(r==="style")a.style=Da([a.style,o.style]);else if(ml(r)){const d=a[r],p=o[r];p&&d!==p&&!(he(d)&&d.includes(p))&&(a[r]=d?[].concat(d,p):p)}else r!==""&&(a[r]=o[r])}return a}function yt(e,a,l,o=null){Rt(e,a,7,[l,o])}const bg=Bd();let vg=0;function qd(e,a,l){const o=e.type,r=(a?a.appContext:e.appContext)||bg,d={uid:vg++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new is(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(o,r),emitsOptions:ad(o,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=ff.bind(null,d),e.ce&&e.ce(d),d}let ot=null;const Qt=()=>ot||lt;let Gl,Ao;{const e=Bc(),a=(l,o)=>{let r;return(r=e[l])||(r=e[l]=[]),r.push(o),d=>{r.length>1?r.forEach(p=>p(d)):r[0](d)}};Gl=a("__VUE_INSTANCE_SETTERS__",l=>ot=l),Ao=a("__VUE_SSR_SETTERS__",l=>_l=l)}const Wi=e=>{const a=ot;return Gl(e),e.scope.on(),()=>{e.scope.off(),Gl(a)}},ko=()=>{ot&&ot.scope.off(),Gl(null)};function Gd(e){return e.vnode.shapeFlag&4}let _l=!1;function Ud(e,a=!1){a&&Ao(a);const{props:l,children:o}=e.vnode,r=Gd(e);ag(e,l,r,a),og(e,o);const d=r?Sg(e,a):void 0;return a&&Ao(!1),d}function Sg(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=us(new Proxy(e.ctx,bo));const{setup:o}=l;if(o){const r=e.setupContext=o.length>1?Jd(e):null,d=Wi(e);Zi();const p=li(o,e,0,[e.props,r]);if(ea(),d(),es(p)){if(p.then(ko,ko),a)return p.then(f=>{xo(e,f,a)}).catch(f=>{ta(f,e,0)});e.asyncDep=p}else xo(e,p,a)}else Yd(e,a)}function xo(e,a,l){Ce(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Ge(a)&&(e.setupState=ms(a)),Yd(e,l)}let Ul,$o;function yg(e){Ul=e,$o=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Ff))}}const wg=()=>!Ul;function Yd(e,a,l){const o=e.type;if(!e.render){if(!a&&Ul&&!o.render){const r=o.template||Cs(e).template;if(r){const{isCustomElement:d,compilerOptions:p}=e.appContext.config,{delimiters:f,compilerOptions:s}=o,c=Xe(Xe({isCustomElement:d,delimiters:f},p),s);o.render=Ul(r,c)}}e.render=o.render||Ct,$o&&$o(e)}{const r=Wi(e);Zi();try{Wf(e)}finally{ea(),r()}}}function Cg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return $t(e,"get","$attrs"),a[l]}}))}function Jd(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return Cg(e)},slots:e.slots,emit:e.emit,expose:a}}function Dn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ms(us(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Ya)return Ya[l](e)},has(a,l){return l in a||l in Ya}}))}function Bo(e,a=!0){return Ce(e)?e.displayName||e.name:e.name||a&&e.__name}function Ag(e){return Ce(e)&&"__vccOpts"in e}const N=(e,a)=>Wp(e,a,_l);function kg(e,a,l=je){const o=Qt(),r=vt(a),d=It(a),p=Xc((s,c)=>{let g;return pd(()=>{const m=e[a];Ut(g,m)&&(g=m,c())}),{get(){return s(),l.get?l.get(g):g},set(m){const h=o.vnode.props;!(h&&(a in h||r in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${d}`in h))&&Ut(m,g)&&(g=m,c()),o.emit(`update:${a}`,l.set?l.set(m):m)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return p[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[f]||{}:p,done:!1}:{done:!0}}}},p}function K(e,a,l){const o=arguments.length;return o===2?Ge(a)&&!he(a)?Nt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&Nt(l)&&(l=[l]),t(e,a,l))}function xg(){}function $g(e,a,l,o){const r=l[o];if(r&&Wd(r,e))return r;const d=a();return d.memo=e.slice(),l[o]=d}function Wd(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let o=0;o<l.length;o++)if(Ut(l[o],a[o]))return!1;return Ji>0&&At&&At.push(e),!0}const Kd="3.4.15",Bg=Ct,Tg=uf,Dg=oa,Lg=id,Ig={createComponentInstance:qd,setupComponent:Ud,renderComponentRoot:El,setCurrentRenderingInstance:nl,isVNode:Nt,normalizeVNode:Lt},Rg=Ig,Eg=null,zg=null,Fg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pg="http://www.w3.org/2000/svg",Mg="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,dr=bi&&bi.createElement("template"),Vg={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,o)=>{const r=a==="svg"?bi.createElementNS(Pg,e):a==="mathml"?bi.createElementNS(Mg,e):bi.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>bi.createTextNode(e),createComment:e=>bi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,o,r,d){const p=l?l.previousSibling:a.lastChild;if(r&&(r===d||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),l),!(r===d||!(r=r.nextSibling)););else{dr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=dr.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}a.insertBefore(f,l)}return[p?p.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},mi="transition",za="animation",Ca=Symbol("_vtc"),Ln=(e,{slots:a})=>K(gd,Qd(e),a);Ln.displayName="Transition";const Xd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hg=Ln.props=Xe({},Ss,Xd),Ei=(e,a=[])=>{he(e)?e.forEach(l=>l(...a)):e&&e(...a)},mr=e=>e?he(e)?e.some(a=>a.length>1):e.length>1:!1;function Qd(e){const a={};for(const Y in e)Y in Xd||(a[Y]=e[Y]);if(e.css===!1)return a;const{name:l="v",type:o,duration:r,enterFromClass:d=`${l}-enter-from`,enterActiveClass:p=`${l}-enter-active`,enterToClass:f=`${l}-enter-to`,appearFromClass:s=d,appearActiveClass:c=p,appearToClass:g=f,leaveFromClass:m=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:w=`${l}-leave-to`}=e,b=Ng(r),C=b&&b[0],$=b&&b[1],{onBeforeEnter:D,onEnter:_,onEnterCancelled:S,onLeave:x,onLeaveCancelled:T,onBeforeAppear:I=D,onAppear:M=_,onAppearCancelled:V=S}=a,P=(Y,ge,Be)=>{fi(Y,ge?g:f),fi(Y,ge?c:p),Be&&Be()},q=(Y,ge)=>{Y._isLeaving=!1,fi(Y,m),fi(Y,w),fi(Y,h),ge&&ge()},Q=Y=>(ge,Be)=>{const U=Y?M:_,X=()=>P(ge,Y,Be);Ei(U,[ge,X]),pr(()=>{fi(ge,Y?s:d),ei(ge,Y?g:f),mr(U)||fr(ge,o,C,X)})};return Xe(a,{onBeforeEnter(Y){Ei(D,[Y]),ei(Y,d),ei(Y,p)},onBeforeAppear(Y){Ei(I,[Y]),ei(Y,s),ei(Y,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(Y,ge){Y._isLeaving=!0;const Be=()=>q(Y,ge);ei(Y,m),em(),ei(Y,h),pr(()=>{Y._isLeaving&&(fi(Y,m),ei(Y,w),mr(x)||fr(Y,o,$,Be))}),Ei(x,[Y,Be])},onEnterCancelled(Y){P(Y,!1),Ei(S,[Y])},onAppearCancelled(Y){P(Y,!0),Ei(V,[Y])},onLeaveCancelled(Y){q(Y),Ei(T,[Y])}})}function Ng(e){if(e==null)return null;if(Ge(e))return[Gn(e.enter),Gn(e.leave)];{const a=Gn(e);return[a,a]}}function Gn(e){return Vl(e)}function ei(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[Ca]||(e[Ca]=new Set)).add(a)}function fi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[Ca];l&&(l.delete(a),l.size||(e[Ca]=void 0))}function pr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Og=0;function fr(e,a,l,o){const r=e._endId=++Og,d=()=>{r===e._endId&&o()};if(l)return setTimeout(d,l);const{type:p,timeout:f,propCount:s}=Zd(e,a);if(!p)return o();const c=p+"end";let g=0;const m=()=>{e.removeEventListener(c,h),d()},h=w=>{w.target===e&&++g>=s&&m()};setTimeout(()=>{g<s&&m()},f+1),e.addEventListener(c,h)}function Zd(e,a){const l=window.getComputedStyle(e),o=b=>(l[b]||"").split(", "),r=o(`${mi}Delay`),d=o(`${mi}Duration`),p=gr(r,d),f=o(`${za}Delay`),s=o(`${za}Duration`),c=gr(f,s);let g=null,m=0,h=0;a===mi?p>0&&(g=mi,m=p,h=d.length):a===za?c>0&&(g=za,m=c,h=s.length):(m=Math.max(p,c),g=m>0?p>c?mi:za:null,h=g?g===mi?d.length:s.length:0);const w=g===mi&&/\b(transform|all)(,|$)/.test(o(`${mi}Property`).toString());return{type:g,timeout:m,propCount:h,hasTransform:w}}function gr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,o)=>hr(l)+hr(e[o])))}function hr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function em(){return document.body.offsetHeight}function jg(e,a,l){const o=e[Ca];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const Bs=Symbol("_vod"),tm={beforeMount(e,{value:a},{transition:l}){e[Bs]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):Fa(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:o}){!a!=!l&&(o?a?(o.beforeEnter(e),Fa(e,!0),o.enter(e)):o.leave(e,()=>{Fa(e,!1)}):Fa(e,a))},beforeUnmount(e,{value:a}){Fa(e,a)}};function Fa(e,a){e.style.display=a?e[Bs]:"none"}function qg(){tm.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const im=Symbol("");function Gg(e){const a=Qt();if(!a)return;const l=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>Do(d,r))},o=()=>{const r=e(a.proxy);To(a.subTree,r),l(r)};md(o),Di(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),ia(()=>r.disconnect())})}function To(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{To(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Do(e.el,a);else if(e.type===Ae)e.children.forEach(l=>To(l,a));else if(e.type===ji){let{el:l,anchor:o}=e;for(;l&&(Do(l,a),l!==o);)l=l.nextSibling}}function Do(e,a){if(e.nodeType===1){const l=e.style;let o="";for(const r in a)l.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;l[im]=o}}function Ug(e,a,l){const o=e.style,r=o.display,d=Qe(l);if(l&&!d){if(a&&!Qe(a))for(const p in a)l[p]==null&&Lo(o,p,"");for(const p in l)Lo(o,p,l[p])}else if(d){if(a!==l){const p=o[im];p&&(l+=";"+p),o.cssText=l}}else a&&e.removeAttribute("style");Bs in e&&(o.display=r)}const _r=/\s*!important$/;function Lo(e,a,l){if(he(l))l.forEach(o=>Lo(e,a,o));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const o=Yg(e,a);_r.test(l)?e.setProperty(It(o),l.replace(_r,""),"important"):e[o]=l}}const br=["Webkit","Moz","ms"],Un={};function Yg(e,a){const l=Un[a];if(l)return l;let o=vt(a);if(o!=="filter"&&o in e)return Un[a]=o;o=pl(o);for(let r=0;r<br.length;r++){const d=br[r]+o;if(d in e)return Un[a]=d}return a}const vr="http://www.w3.org/1999/xlink";function Jg(e,a,l,o,r){if(o&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(vr,a.slice(6,a.length)):e.setAttributeNS(vr,a,l);else{const d=Cp(a);l==null||d&&!Tc(l)?e.removeAttribute(a):e.setAttribute(a,d?"":l)}}function Wg(e,a,l,o,r,d,p){if(a==="innerHTML"||a==="textContent"){o&&p(o,r,d),e[a]=l??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=l;const c=f==="OPTION"?e.getAttribute("value"):e.value,g=l??"";c!==g&&(e.value=g),l==null&&e.removeAttribute(a);return}let s=!1;if(l===""||l==null){const c=typeof e[a];c==="boolean"?l=Tc(l):l==null&&c==="string"?(l="",s=!0):c==="number"&&(l=0,s=!0)}try{e[a]=l}catch{}s&&e.removeAttribute(a)}function ii(e,a,l,o){e.addEventListener(a,l,o)}function Kg(e,a,l,o){e.removeEventListener(a,l,o)}const Sr=Symbol("_vei");function Xg(e,a,l,o,r=null){const d=e[Sr]||(e[Sr]={}),p=d[a];if(o&&p)p.value=o;else{const[f,s]=Qg(a);if(o){const c=d[a]=th(o,r);ii(e,f,c,s)}else p&&(Kg(e,f,p,s),d[a]=void 0)}}const yr=/(?:Once|Passive|Capture)$/;function Qg(e){let a;if(yr.test(e)){a={};let o;for(;o=e.match(yr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),a]}let Yn=0;const Zg=Promise.resolve(),eh=()=>Yn||(Zg.then(()=>Yn=0),Yn=Date.now());function th(e,a){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;Rt(ih(o,l.value),a,5,[o])};return l.value=e,l.attached=eh(),l}function ih(e,a){if(he(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ah=(e,a,l,o,r,d,p,f,s)=>{const c=r==="svg";a==="class"?jg(e,o,c):a==="style"?Ug(e,l,o):ml(a)?Qo(a)||Xg(e,a,l,o,p):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):lh(e,a,o,c))?Wg(e,a,o,d,p,f,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Jg(e,a,o,c))};function lh(e,a,l,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&wr(a)&&Ce(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wr(a)&&Qe(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function am(e,a){const l=z(e);class o extends In{constructor(d){super(l,d,a)}}return o.def=l,o}/*! #__NO_SIDE_EFFECTS__ */const nh=e=>am(e,gm),oh=typeof HTMLElement<"u"?HTMLElement:class{};class In extends oh{constructor(a,l={},o){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),La(()=>{this._connected||(Wl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:d,styles:p}=o;let f;if(d&&!he(d))for(const s in d){const c=d[s];(c===Number||c&&c.type===Number)&&(s in this._props&&(this._props[s]=Vl(this._props[s])),(f||(f=Object.create(null)))[vt(s)]=!0)}this._numberProps=f,r&&this._resolveProps(o),this._applyStyles(p),this._update()},l=this._def.__asyncLoader;l?l().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,o=he(l)?l:Object.keys(l||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(vt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(d){this._setProp(r,d)}})}_setAttr(a){let l=this.getAttribute(a);const o=vt(a);this._numberProps&&this._numberProps[o]&&(l=Vl(l)),this._setProp(o,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,o=!0,r=!0){l!==this._props[a]&&(this._props[a]=l,r&&this._instance&&this._update(),o&&(l===!0?this.setAttribute(It(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(It(a),l+""):l||this.removeAttribute(It(a))))}_update(){Wl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Xe({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const o=(d,p)=>{this.dispatchEvent(new CustomEvent(d,{detail:p}))};l.emit=(d,...p)=>{o(d,p),It(d)!==d&&o(It(d),p)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof In){l.parent=r._instance,l.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function sh(e="$style"){{const a=Qt();if(!a)return je;const l=a.type.__cssModules;if(!l)return je;const o=l[e];return o||je}}const lm=new WeakMap,nm=new WeakMap,Yl=Symbol("_moveCb"),Cr=Symbol("_enterCb"),om={name:"TransitionGroup",props:Xe({},Hg,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=Qt(),o=vs();let r,d;return xn(()=>{if(!r.length)return;const p=e.moveClass||`${e.name||"v"}-move`;if(!mh(r[0].el,l.vnode.el,p))return;r.forEach(uh),r.forEach(ch);const f=r.filter(dh);em(),f.forEach(s=>{const c=s.el,g=c.style;ei(c,p),g.transform=g.webkitTransform=g.transitionDuration="";const m=c[Yl]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",m),c[Yl]=null,fi(c,p))};c.addEventListener("transitionend",m)})}),()=>{const p=Re(e),f=Qd(p);let s=p.tag||Ae;r=d,d=a.default?An(a.default()):[];for(let c=0;c<d.length;c++){const g=d[c];g.key!=null&&Gi(g,wa(g,f,o,l))}if(r)for(let c=0;c<r.length;c++){const g=r[c];Gi(g,wa(g,f,o,l)),lm.set(g,g.el.getBoundingClientRect())}return t(s,null,d)}}},rh=e=>delete e.mode;om.props;const sm=om;function uh(e){const a=e.el;a[Yl]&&a[Yl](),a[Cr]&&a[Cr]()}function ch(e){nm.set(e,e.el.getBoundingClientRect())}function dh(e){const a=lm.get(e),l=nm.get(e),o=a.left-l.left,r=a.top-l.top;if(o||r){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${o}px,${r}px)`,d.transitionDuration="0s",e}}function mh(e,a,l){const o=e.cloneNode(),r=e[Ca];r&&r.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(o);const{hasTransform:p}=Zd(o);return d.removeChild(o),p}const $i=e=>{const a=e.props["onUpdate:modelValue"]||!1;return he(a)?l=>ma(a,l):a};function ph(e){e.target.composing=!0}function Ar(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign"),Jl={created(e,{modifiers:{lazy:a,trim:l,number:o}},r){e[Ht]=$i(r);const d=o||r.props&&r.props.type==="number";ii(e,a?"change":"input",p=>{if(p.target.composing)return;let f=e.value;l&&(f=f.trim()),d&&(f=el(f)),e[Ht](f)}),l&&ii(e,"change",()=>{e.value=e.value.trim()}),a||(ii(e,"compositionstart",ph),ii(e,"compositionend",Ar),ii(e,"change",Ar))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:o,number:r}},d){if(e[Ht]=$i(d),e.composing)return;const p=r||e.type==="number"?el(e.value):e.value,f=a??"";p!==f&&(document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===f)||(e.value=f))}},Ts={deep:!0,created(e,a,l){e[Ht]=$i(l),ii(e,"change",()=>{const o=e._modelValue,r=Aa(e),d=e.checked,p=e[Ht];if(he(o)){const f=hn(o,r),s=f!==-1;if(d&&!s)p(o.concat(r));else if(!d&&s){const c=[...o];c.splice(f,1),p(c)}}else if(Qi(o)){const f=new Set(o);d?f.add(r):f.delete(r),p(f)}else p(um(e,d))})},mounted:kr,beforeUpdate(e,a,l){e[Ht]=$i(l),kr(e,a,l)}};function kr(e,{value:a,oldValue:l},o){e._modelValue=a,he(a)?e.checked=hn(a,o.props.value)>-1:Qi(a)?e.checked=a.has(o.props.value):a!==l&&(e.checked=ni(a,um(e,!0)))}const Ds={created(e,{value:a},l){e.checked=ni(a,l.props.value),e[Ht]=$i(l),ii(e,"change",()=>{e[Ht](Aa(e))})},beforeUpdate(e,{value:a,oldValue:l},o){e[Ht]=$i(o),a!==l&&(e.checked=ni(a,o.props.value))}},rm={deep:!0,created(e,{value:a,modifiers:{number:l}},o){const r=Qi(a);ii(e,"change",()=>{const d=Array.prototype.filter.call(e.options,p=>p.selected).map(p=>l?el(Aa(p)):Aa(p));e[Ht](e.multiple?r?new Set(d):d:d[0]),e._assigning=!0,La(()=>{e._assigning=!1})}),e[Ht]=$i(o)},mounted(e,{value:a,oldValue:l,modifiers:{number:o}}){xr(e,a,l,o)},beforeUpdate(e,a,l){e[Ht]=$i(l)},updated(e,{value:a,oldValue:l,modifiers:{number:o}}){e._assigning||xr(e,a,l,o)}};function xr(e,a,l,o){const r=e.multiple,d=he(a);if(!(r&&!d&&!Qi(a))&&!(d&&ni(a,l))){for(let p=0,f=e.options.length;p<f;p++){const s=e.options[p],c=Aa(s);if(r)if(d){const g=typeof c;g==="string"||g==="number"?s.selected=a.includes(o?el(c):c):s.selected=hn(a,c)>-1}else s.selected=a.has(c);else if(ni(Aa(s),a)){e.selectedIndex!==p&&(e.selectedIndex=p);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Aa(e){return"_value"in e?e._value:e.value}function um(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const cm={created(e,a,l){Tl(e,a,l,null,"created")},mounted(e,a,l){Tl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,o){Tl(e,a,l,o,"beforeUpdate")},updated(e,a,l,o){Tl(e,a,l,o,"updated")}};function dm(e,a){switch(e){case"SELECT":return rm;case"TEXTAREA":return Jl;default:switch(a){case"checkbox":return Ts;case"radio":return Ds;default:return Jl}}}function Tl(e,a,l,o,r){const p=dm(e.tagName,l.props&&l.props.type)[r];p&&p(e,a,l,o)}function fh(){Jl.getSSRProps=({value:e})=>({value:e}),Ds.getSSRProps=({value:e},a)=>{if(a.props&&ni(a.props.value,e))return{checked:!0}},Ts.getSSRProps=({value:e},a)=>{if(he(e)){if(a.props&&hn(e,a.props.value)>-1)return{checked:!0}}else if(Qi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},cm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=dm(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const gh=["ctrl","shift","alt","meta"],hh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>gh.some(l=>e[`${l}Key`]&&!a.includes(l))},Et=(e,a)=>{const l=e._withMods||(e._withMods={}),o=a.join(".");return l[o]||(l[o]=(r,...d)=>{for(let p=0;p<a.length;p++){const f=hh[a[p]];if(f&&f(r,a))return}return e(r,...d)})},_h={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bh=(e,a)=>{const l=e._withKeys||(e._withKeys={}),o=a.join(".");return l[o]||(l[o]=r=>{if(!("key"in r))return;const d=It(r.key);if(a.some(p=>p===d||_h[p]===d))return e(r)})},mm=Xe({patchProp:ah},Vg);let Ka,$r=!1;function pm(){return Ka||(Ka=Ed(mm))}function fm(){return Ka=$r?Ka:zd(mm),$r=!0,Ka}const Wl=(...e)=>{pm().render(...e)},gm=(...e)=>{fm().hydrate(...e)},hm=(...e)=>{const a=pm().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=bm(o);if(!r)return;const d=a._component;!Ce(d)&&!d.render&&!d.template&&(d.template=r.innerHTML),r.innerHTML="";const p=l(r,!1,_m(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),p},a},vh=(...e)=>{const a=fm().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=bm(o);if(r)return l(r,!0,_m(r))},a};function _m(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function bm(e){return Qe(e)?document.querySelector(e):e}let Br=!1;const Sh=()=>{Br||(Br=!0,fh(),qg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yh=()=>{},wh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:gd,BaseTransitionPropsValidators:Ss,Comment:_t,DeprecationTypes:Fg,EffectScope:is,ErrorCodes:rf,ErrorTypeStrings:Tg,Fragment:Ae,KeepAlive:If,ReactiveEffect:ya,Static:ji,Suspense:wf,Teleport:Bn,Text:Yi,TrackOpTypes:nf,Transition:Ln,TransitionGroup:sm,TriggerOpTypes:of,VueElement:In,assertNumber:sf,callWithAsyncErrorHandling:Rt,callWithErrorHandling:li,camelize:vt,capitalize:pl,cloneVNode:Kt,compatUtils:zg,compile:yh,computed:N,createApp:hm,createBlock:B,createCommentVNode:xs,createElementBlock:_e,createElementVNode:v,createHydrationRenderer:zd,createPropsRestProxy:Yf,createRenderer:Ed,createSSRApp:vh,createSlots:Ef,createStaticVNode:_g,createTextVNode:n,createVNode:t,customRef:Xc,defineAsyncComponent:Df,defineComponent:z,defineCustomElement:am,defineEmits:Mf,defineExpose:Vf,defineModel:Of,defineOptions:Hf,defineProps:Pf,defineSSRCustomElement:nh,defineSlots:Nf,devtools:Dg,effect:$p,effectScope:kp,getCurrentInstance:Qt,getCurrentScope:as,getTransitionRawChildren:An,guardReactiveProps:jd,h:K,handleError:ta,hasInjectionContext:ig,hydrate:gm,initCustomFormatter:xg,initDirectivesForSSR:Sh,inject:He,isMemoSame:Wd,isProxy:rs,isReactive:Ni,isReadonly:qi,isRef:pt,isRuntimeOnly:wg,isShallow:tl,isVNode:Nt,markRaw:us,mergeDefaults:Gf,mergeModels:Uf,mergeProps:aa,nextTick:La,normalizeClass:fl,normalizeProps:yp,normalizeStyle:Da,onActivated:ys,onBeforeMount:bd,onBeforeUnmount:$n,onBeforeUpdate:vd,onDeactivated:ws,onErrorCaptured:Cd,onMounted:Di,onRenderTracked:wd,onRenderTriggered:yd,onScopeDispose:Ic,onServerPrefetch:Sd,onUnmounted:ia,onUpdated:xn,openBlock:k,popScopeId:nd,provide:mt,proxyRefs:ms,pushScopeId:ld,queuePostFlushCb:Nl,reactive:si,readonly:ss,ref:G,registerRuntimeCompiler:yg,render:Wl,renderList:et,renderSlot:Ui,resolveComponent:y,resolveDirective:Cn,resolveDynamicComponent:sd,resolveFilter:Eg,resolveTransitionHooks:wa,setBlockTracking:Co,setDevtoolsHook:Lg,setTransitionHooks:Gi,shallowReactive:Yc,shallowReadonly:Jp,shallowRef:Wc,ssrContextKey:cd,ssrUtils:Rg,stop:Bp,toDisplayString:Te,toHandlerKey:Ua,toHandlers:zf,toRaw:Re,toRef:fo,toRefs:tf,toValue:Qp,transformVNodeArgs:gg,triggerRef:Xp,unref:u,useAttrs:kd,useCssModule:sh,useCssVars:Gg,useModel:kg,useSSRContext:dd,useSlots:qf,useTransitionState:vs,vModelCheckbox:Ts,vModelDynamic:cm,vModelRadio:Ds,vModelSelect:rm,vModelText:Jl,vShow:tm,version:Kd,warn:Bg,watch:ht,watchEffect:bs,watchPostEffect:md,watchSyncEffect:pd,withAsyncContext:Jf,withCtx:i,withDefaults:jf,withDirectives:Ci,withKeys:bh,withMemo:$g,withModifiers:Et,withScopeId:gf},Symbol.toStringTag,{value:"Module"})),Ch=z({name:"App"}),De=(e,a)=>{const l=e.__vccOpts||e;for(const[o,r]of a)l[o]=r;return l};function Ah(e,a,l,o,r,d){const p=y("router-view");return k(),B(p)}const kh=De(Ch,[["render",Ah]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const vm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ia=e=>vm?Symbol(e):"_vr_"+e,Sm=Ia("rvlm"),Tr=Ia("rvd"),Rn=Ia("r"),Ls=Ia("rl"),Io=Ia("rvl"),sa=typeof window<"u";function xh(e){return e.__esModule||vm&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Jn(e,a){const l={};for(const o in a){const r=a[o];l[o]=Array.isArray(r)?r.map(e):e(r)}return l}const Xa=()=>{},$h=/\/$/,Bh=e=>e.replace($h,"");function Wn(e,a,l="/"){let o,r={},d="",p="";const f=a.indexOf("?"),s=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),d=a.slice(f+1,s>-1?s:a.length),r=e(d)),s>-1&&(o=o||a.slice(0,s),p=a.slice(s,a.length)),o=Ih(o??a,l),{fullPath:o+(d&&"?")+d+p,path:o,query:r,hash:p}}function Th(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function Dr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Dh(e,a,l){const o=a.matched.length-1,r=l.matched.length-1;return o>-1&&o===r&&ka(a.matched[o],l.matched[r])&&ym(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function ka(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function ym(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!Lh(e[l],a[l]))return!1;return!0}function Lh(e,a){return Array.isArray(e)?Lr(e,a):Array.isArray(a)?Lr(a,e):e===a}function Lr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,o)=>l===a[o]):e.length===1&&e[0]===a}function Ih(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),o=e.split("/");let r=l.length-1,d,p;for(d=0;d<o.length;d++)if(p=o[d],!(r===1||p==="."))if(p==="..")r--;else break;return l.slice(0,r).join("/")+"/"+o.slice(d-(d===o.length?1:0)).join("/")}var ul;(function(e){e.pop="pop",e.push="push"})(ul||(ul={}));var Qa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qa||(Qa={}));function Rh(e){if(!e)if(sa){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bh(e)}const Eh=/^[^#]+#/;function zh(e,a){return e.replace(Eh,"#")+a}function Fh(e,a){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-l.left-(a.left||0),top:o.top-l.top-(a.top||0)}}const En=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ph(e){let a;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),r=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!r)return;a=Fh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Ir(e,a){return(history.state?history.state.position-a:-1)+e}const Ro=new Map;function Mh(e,a){Ro.set(e,a)}function Vh(e){const a=Ro.get(e);return Ro.delete(e),a}let Hh=()=>location.protocol+"//"+location.host;function wm(e,a){const{pathname:l,search:o,hash:r}=a,d=e.indexOf("#");if(d>-1){let f=r.includes(e.slice(d))?e.slice(d).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),Dr(s,"")}return Dr(l,e)+o+r}function Nh(e,a,l,o){let r=[],d=[],p=null;const f=({state:h})=>{const w=wm(e,location),b=l.value,C=a.value;let $=0;if(h){if(l.value=w,a.value=h,p&&p===b){p=null;return}$=C?h.position-C.position:0}else o(w);r.forEach(D=>{D(l.value,b,{delta:$,type:ul.pop,direction:$?$>0?Qa.forward:Qa.back:Qa.unknown})})};function s(){p=l.value}function c(h){r.push(h);const w=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return d.push(w),w}function g(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:En()}),"")}function m(){for(const h of d)h();d=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:c,destroy:m}}function Rr(e,a,l,o=!1,r=!1){return{back:e,current:a,forward:l,replaced:o,position:window.history.length,scroll:r?En():null}}function Oh(e){const{history:a,location:l}=window,o={value:wm(e,l)},r={value:a.state};r.value||d(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(s,c,g){const m=e.indexOf("#"),h=m>-1?(l.host&&document.querySelector("base")?e:e.slice(m))+s:Hh()+e+s;try{a[g?"replaceState":"pushState"](c,"",h),r.value=c}catch(w){console.error(w),l[g?"replace":"assign"](h)}}function p(s,c){const g=Ye({},a.state,Rr(r.value.back,s,r.value.forward,!0),c,{position:r.value.position});d(s,g,!0),o.value=s}function f(s,c){const g=Ye({},r.value,a.state,{forward:s,scroll:En()});d(g.current,g,!0);const m=Ye({},Rr(o.value,s,null),{position:g.position+1},c);d(s,m,!1),o.value=s}return{location:o,state:r,push:f,replace:p}}function jh(e){e=Rh(e);const a=Oh(e),l=Nh(e,a.state,a.location,a.replace);function o(d,p=!0){p||l.pauseListeners(),history.go(d)}const r=Ye({location:"",base:e,go:o,createHref:zh.bind(null,e)},a,l);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function qh(e){return typeof e=="string"||e&&typeof e=="object"}function Cm(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Am=Ia("nf");var Er;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Er||(Er={}));function xa(e,a){return Ye(new Error,{type:e,[Am]:!0},a)}function zi(e,a){return e instanceof Error&&Am in e&&(a==null||!!(e.type&a))}const zr="[^/]+?",Gh={sensitive:!1,strict:!1,start:!0,end:!0},Uh=/[.+*?^${}()[\]/\\]/g;function Yh(e,a){const l=Ye({},Gh,a),o=[];let r=l.start?"^":"";const d=[];for(const c of e){const g=c.length?[]:[90];l.strict&&!c.length&&(r+="/");for(let m=0;m<c.length;m++){const h=c[m];let w=40+(l.sensitive?.25:0);if(h.type===0)m||(r+="/"),r+=h.value.replace(Uh,"\\$&"),w+=40;else if(h.type===1){const{value:b,repeatable:C,optional:$,regexp:D}=h;d.push({name:b,repeatable:C,optional:$});const _=D||zr;if(_!==zr){w+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+x.message)}}let S=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;m||(S=$&&c.length<2?`(?:/${S})`:"/"+S),$&&(S+="?"),r+=S,w+=20,$&&(w+=-8),C&&(w+=-20),_===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(l.strict&&l.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}l.strict||(r+="/?"),l.end?r+="$":l.strict&&(r+="(?:/|$)");const p=new RegExp(r,l.sensitive?"":"i");function f(c){const g=c.match(p),m={};if(!g)return null;for(let h=1;h<g.length;h++){const w=g[h]||"",b=d[h-1];m[b.name]=w&&b.repeatable?w.split("/"):w}return m}function s(c){let g="",m=!1;for(const h of e){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const w of h)if(w.type===0)g+=w.value;else if(w.type===1){const{value:b,repeatable:C,optional:$}=w,D=b in c?c[b]:"";if(Array.isArray(D)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(D)?D.join("/"):D;if(!_)if($)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);g+=_}}return g}return{re:p,score:o,keys:d,parse:f,stringify:s}}function Jh(e,a){let l=0;for(;l<e.length&&l<a.length;){const o=a[l]-e[l];if(o)return o;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Wh(e,a){let l=0;const o=e.score,r=a.score;for(;l<o.length&&l<r.length;){const d=Jh(o[l],r[l]);if(d)return d;l++}return r.length-o.length}const Kh={type:0,value:""},Xh=/[a-zA-Z0-9_]/;function Qh(e){if(!e)return[[]];if(e==="/")return[[Kh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(w){throw new Error(`ERR (${l})/"${c}": ${w}`)}let l=0,o=l;const r=[];let d;function p(){d&&r.push(d),d=[]}let f=0,s,c="",g="";function m(){c&&(l===0?d.push({type:0,value:c}):l===1||l===2||l===3?(d.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:c,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),c="")}function h(){c+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:s==="/"?(c&&m(),p()):s===":"?(m(),l=1):h();break;case 4:h(),l=o;break;case 1:s==="("?l=2:Xh.test(s)?h():(m(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:l=3:g+=s;break;case 3:m(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${c}"`),m(),p(),r}function Zh(e,a,l){const o=Yh(Qh(e.path),l),r=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function e_(e,a){const l=[],o=new Map;a=Pr({strict:!1,end:!0,sensitive:!1},a);function r(g){return o.get(g)}function d(g,m,h){const w=!h,b=i_(g);b.aliasOf=h&&h.record;const C=Pr(a,g),$=[b];if("alias"in g){const S=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of S)$.push(Ye({},b,{components:h?h.record.components:b.components,path:x,aliasOf:h?h.record:b}))}let D,_;for(const S of $){const{path:x}=S;if(m&&x[0]!=="/"){const T=m.record.path,I=T[T.length-1]==="/"?"":"/";S.path=m.record.path+(x&&I+x)}if(D=Zh(S,m,C),h?h.alias.push(D):(_=_||D,_!==D&&_.alias.push(D),w&&g.name&&!Fr(D)&&p(g.name)),"children"in b){const T=b.children;for(let I=0;I<T.length;I++)d(T[I],D,h&&h.children[I])}h=h||D,s(D)}return _?()=>{p(_)}:Xa}function p(g){if(Cm(g)){const m=o.get(g);m&&(o.delete(g),l.splice(l.indexOf(m),1),m.children.forEach(p),m.alias.forEach(p))}else{const m=l.indexOf(g);m>-1&&(l.splice(m,1),g.record.name&&o.delete(g.record.name),g.children.forEach(p),g.alias.forEach(p))}}function f(){return l}function s(g){let m=0;for(;m<l.length&&Wh(g,l[m])>=0;)m++;l.splice(m,0,g),g.record.name&&!Fr(g)&&o.set(g.record.name,g)}function c(g,m){let h,w={},b,C;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw xa(1,{location:g});C=h.record.name,w=Ye(t_(m.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),g.params),b=h.stringify(w)}else if("path"in g)b=g.path,h=l.find(_=>_.re.test(b)),h&&(w=h.parse(b),C=h.record.name);else{if(h=m.name?o.get(m.name):l.find(_=>_.re.test(m.path)),!h)throw xa(1,{location:g,currentLocation:m});C=h.record.name,w=Ye({},m.params,g.params),b=h.stringify(w)}const $=[];let D=h;for(;D;)$.unshift(D.record),D=D.parent;return{name:C,path:b,params:w,matched:$,meta:l_($)}}return e.forEach(g=>d(g)),{addRoute:d,resolve:c,removeRoute:p,getRoutes:f,getRecordMatcher:r}}function t_(e,a){const l={};for(const o of a)o in e&&(l[o]=e[o]);return l}function i_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:a_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function a_(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const o in e.components)a[o]=typeof l=="boolean"?l:l[o];return a}function Fr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function l_(e){return e.reduce((a,l)=>Ye(a,l.meta),{})}function Pr(e,a){const l={};for(const o in e)l[o]=o in a?a[o]:e[o];return l}const km=/#/g,n_=/&/g,o_=/\//g,s_=/=/g,r_=/\?/g,xm=/\+/g,u_=/%5B/g,c_=/%5D/g,$m=/%5E/g,d_=/%60/g,Bm=/%7B/g,m_=/%7C/g,Tm=/%7D/g,p_=/%20/g;function Is(e){return encodeURI(""+e).replace(m_,"|").replace(u_,"[").replace(c_,"]")}function f_(e){return Is(e).replace(Bm,"{").replace(Tm,"}").replace($m,"^")}function Eo(e){return Is(e).replace(xm,"%2B").replace(p_,"+").replace(km,"%23").replace(n_,"%26").replace(d_,"`").replace(Bm,"{").replace(Tm,"}").replace($m,"^")}function g_(e){return Eo(e).replace(s_,"%3D")}function h_(e){return Is(e).replace(km,"%23").replace(r_,"%3F")}function __(e){return e==null?"":h_(e).replace(o_,"%2F")}function Kl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function b_(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const d=o[r].replace(xm," "),p=d.indexOf("="),f=Kl(p<0?d:d.slice(0,p)),s=p<0?null:Kl(d.slice(p+1));if(f in a){let c=a[f];Array.isArray(c)||(c=a[f]=[c]),c.push(s)}else a[f]=s}return a}function Mr(e){let a="";for(let l in e){const o=e[l];if(l=g_(l),o==null){o!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(o)?o.map(d=>d&&Eo(d)):[o&&Eo(o)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+l,d!=null&&(a+="="+d))})}return a}function v_(e){const a={};for(const l in e){const o=e[l];o!==void 0&&(a[l]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function Pa(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function S_(e,a,l){const o=()=>{e[a].delete(l)};ia(o),ws(o),ys(()=>{e[a].add(l)}),e[a].add(l)}function y_(e){const a=He(Sm,{}).value;a&&S_(a,"updateGuards",e)}function vi(e,a,l,o,r){const d=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((p,f)=>{const s=m=>{m===!1?f(xa(4,{from:l,to:a})):m instanceof Error?f(m):qh(m)?f(xa(2,{from:a,to:m})):(d&&o.enterCallbacks[r]===d&&typeof m=="function"&&d.push(m),p())},c=e.call(o&&o.instances[r],a,l,s);let g=Promise.resolve(c);e.length<3&&(g=g.then(s)),g.catch(m=>f(m))})}function Kn(e,a,l,o){const r=[];for(const d of e)for(const p in d.components){let f=d.components[p];if(!(a!=="beforeRouteEnter"&&!d.instances[p]))if(w_(f)){const c=(f.__vccOpts||f)[a];c&&r.push(vi(c,l,o,d,p))}else{let s=f();r.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${d.path}"`));const g=xh(c)?c.default:c;d.components[p]=g;const h=(g.__vccOpts||g)[a];return h&&vi(h,l,o,d,p)()}))}}return r}function w_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vr(e){const a=He(Rn),l=He(Ls),o=N(()=>a.resolve(u(e.to))),r=N(()=>{const{matched:s}=o.value,{length:c}=s,g=s[c-1],m=l.matched;if(!g||!m.length)return-1;const h=m.findIndex(ka.bind(null,g));if(h>-1)return h;const w=Hr(s[c-2]);return c>1&&Hr(g)===w&&m[m.length-1].path!==w?m.findIndex(ka.bind(null,s[c-2])):h}),d=N(()=>r.value>-1&&k_(l.params,o.value.params)),p=N(()=>r.value>-1&&r.value===l.matched.length-1&&ym(l.params,o.value.params));function f(s={}){return A_(s)?a[u(e.replace)?"replace":"push"](u(e.to)).catch(Xa):Promise.resolve()}return{route:o,href:N(()=>o.value.href),isActive:d,isExactActive:p,navigate:f}}const C_=z({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vr,setup(e,{slots:a}){const l=si(Vr(e)),{options:o}=He(Rn),r=N(()=>({[Nr(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[Nr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const d=a.default&&a.default(l);return e.custom?d:K("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:r.value},d)}}}),Rs=C_;function A_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function k_(e,a){for(const l in a){const o=a[l],r=e[l];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((d,p)=>d!==r[p]))return!1}return!0}function Hr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nr=(e,a,l)=>e??a??l,x_=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const o=He(Io),r=N(()=>e.route||o.value),d=He(Tr,0),p=N(()=>r.value.matched[d]);mt(Tr,d+1),mt(Sm,p),mt(Io,r);const f=G();return ht(()=>[f.value,p.value,e.name],([s,c,g],[m,h,w])=>{c&&(c.instances[g]=s,h&&h!==c&&s&&s===m&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),s&&c&&(!h||!ka(c,h)||!m)&&(c.enterCallbacks[g]||[]).forEach(b=>b(s))},{flush:"post"}),()=>{const s=r.value,c=p.value,g=c&&c.components[e.name],m=e.name;if(!g)return Or(l.default,{Component:g,route:s});const h=c.props[e.name],w=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=K(g,Ye({},w,a,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(c.instances[m]=null)},ref:f}));return Or(l.default,{Component:C,route:s})||C}}});function Or(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const $_=x_;function B_(e){const a=e_(e.routes,e),l=e.parseQuery||b_,o=e.stringifyQuery||Mr,r=e.history,d=Pa(),p=Pa(),f=Pa(),s=Wc(pi);let c=pi;sa&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Jn.bind(null,J=>""+J),m=Jn.bind(null,__),h=Jn.bind(null,Kl);function w(J,ue){let re,be;return Cm(J)?(re=a.getRecordMatcher(J),be=ue):be=J,a.addRoute(be,re)}function b(J){const ue=a.getRecordMatcher(J);ue&&a.removeRoute(ue)}function C(){return a.getRoutes().map(J=>J.record)}function $(J){return!!a.getRecordMatcher(J)}function D(J,ue){if(ue=Ye({},ue||s.value),typeof J=="string"){const $e=Wn(l,J,ue.path),L=a.resolve({path:$e.path},ue),E=r.createHref($e.fullPath);return Ye($e,L,{params:h(L.params),hash:Kl($e.hash),redirectedFrom:void 0,href:E})}let re;if("path"in J)re=Ye({},J,{path:Wn(l,J.path,ue.path).path});else{const $e=Ye({},J.params);for(const L in $e)$e[L]==null&&delete $e[L];re=Ye({},J,{params:m(J.params)}),ue.params=m(ue.params)}const be=a.resolve(re,ue),Ne=J.hash||"";be.params=g(h(be.params));const Oe=Th(o,Ye({},J,{hash:f_(Ne),path:be.path})),xe=r.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===Mr?v_(J.query):J.query||{}},be,{redirectedFrom:void 0,href:xe})}function _(J){return typeof J=="string"?Wn(l,J,s.value.path):Ye({},J)}function S(J,ue){if(c!==J)return xa(8,{from:ue,to:J})}function x(J){return M(J)}function T(J){return x(Ye(_(J),{replace:!0}))}function I(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let be=typeof re=="function"?re(J):re;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=_(be):{path:be},be.params={}),Ye({query:J.query,hash:J.hash,params:J.params},be)}}function M(J,ue){const re=c=D(J),be=s.value,Ne=J.state,Oe=J.force,xe=J.replace===!0,$e=I(re);if($e)return M(Ye(_($e),{state:Ne,force:Oe,replace:xe}),ue||re);const L=re;L.redirectedFrom=ue;let E;return!Oe&&Dh(o,be,re)&&(E=xa(16,{to:L,from:be}),We(be,be,!0,!1)),(E?Promise.resolve(E):P(L,be)).catch(j=>zi(j)?j:me(j,L,be)).then(j=>{if(j){if(zi(j,2))return M(Ye(_(j.to),{state:Ne,force:Oe,replace:xe}),ue||L)}else j=Q(L,be,!0,xe,Ne);return q(L,be,j),j})}function V(J,ue){const re=S(J,ue);return re?Promise.reject(re):Promise.resolve()}function P(J,ue){let re;const[be,Ne,Oe]=T_(J,ue);re=Kn(be.reverse(),"beforeRouteLeave",J,ue);for(const $e of be)$e.leaveGuards.forEach(L=>{re.push(vi(L,J,ue))});const xe=V.bind(null,J,ue);return re.push(xe),na(re).then(()=>{re=[];for(const $e of d.list())re.push(vi($e,J,ue));return re.push(xe),na(re)}).then(()=>{re=Kn(Ne,"beforeRouteUpdate",J,ue);for(const $e of Ne)$e.updateGuards.forEach(L=>{re.push(vi(L,J,ue))});return re.push(xe),na(re)}).then(()=>{re=[];for(const $e of J.matched)if($e.beforeEnter&&!ue.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const L of $e.beforeEnter)re.push(vi(L,J,ue));else re.push(vi($e.beforeEnter,J,ue));return re.push(xe),na(re)}).then(()=>(J.matched.forEach($e=>$e.enterCallbacks={}),re=Kn(Oe,"beforeRouteEnter",J,ue),re.push(xe),na(re))).then(()=>{re=[];for(const $e of p.list())re.push(vi($e,J,ue));return re.push(xe),na(re)}).catch($e=>zi($e,8)?$e:Promise.reject($e))}function q(J,ue,re){for(const be of f.list())be(J,ue,re)}function Q(J,ue,re,be,Ne){const Oe=S(J,ue);if(Oe)return Oe;const xe=ue===pi,$e=sa?history.state:{};re&&(be||xe?r.replace(J.fullPath,Ye({scroll:xe&&$e&&$e.scroll},Ne)):r.push(J.fullPath,Ne)),s.value=J,We(J,ue,re,xe),Le()}let Y;function ge(){Y=r.listen((J,ue,re)=>{const be=D(J),Ne=I(be);if(Ne){M(Ye(Ne,{replace:!0}),be).catch(Xa);return}c=be;const Oe=s.value;sa&&Mh(Ir(Oe.fullPath,re.delta),En()),P(be,Oe).catch(xe=>zi(xe,12)?xe:zi(xe,2)?(M(xe.to,be).then($e=>{zi($e,20)&&!re.delta&&re.type===ul.pop&&r.go(-1,!1)}).catch(Xa),Promise.reject()):(re.delta&&r.go(-re.delta,!1),me(xe,be,Oe))).then(xe=>{xe=xe||Q(be,Oe,!1),xe&&(re.delta?r.go(-re.delta,!1):re.type===ul.pop&&zi(xe,20)&&r.go(-1,!1)),q(be,Oe,xe)}).catch(Xa)})}let Be=Pa(),U=Pa(),X;function me(J,ue,re){Le(J);const be=U.list();return be.length?be.forEach(Ne=>Ne(J,ue,re)):console.error(J),Promise.reject(J)}function ae(){return X&&s.value!==pi?Promise.resolve():new Promise((J,ue)=>{Be.add([J,ue])})}function Le(J){X||(X=!0,ge(),Be.list().forEach(([ue,re])=>J?re(J):ue()),Be.reset())}function We(J,ue,re,be){const{scrollBehavior:Ne}=e;if(!sa||!Ne)return Promise.resolve();const Oe=!re&&Vh(Ir(J.fullPath,0))||(be||!re)&&history.state&&history.state.scroll||null;return La().then(()=>Ne(J,ue,Oe)).then(xe=>xe&&Ph(xe)).catch(xe=>me(xe,J,ue))}const st=J=>r.go(J);let Ue;const Zt=new Set;return{currentRoute:s,addRoute:w,removeRoute:b,hasRoute:$,getRoutes:C,resolve:D,options:e,push:x,replace:T,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:d.add,beforeResolve:p.add,afterEach:f.add,onError:U.add,isReady:ae,install(J){const ue=this;J.component("RouterLink",Rs),J.component("RouterView",$_),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>u(s)}),sa&&!Ue&&s.value===pi&&(Ue=!0,x(r.location).catch(Ne=>{}));const re={};for(const Ne in pi)re[Ne]=N(()=>s.value[Ne]);J.provide(Rn,ue),J.provide(Ls,si(re)),J.provide(Io,s);const be=J.unmount;Zt.add(J),J.unmount=function(){Zt.delete(J),Zt.size<1&&(c=pi,Y&&Y(),s.value=pi,Ue=!1,X=!1),be()}}}}function na(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function T_(e,a){const l=[],o=[],r=[],d=Math.max(a.matched.length,e.matched.length);for(let p=0;p<d;p++){const f=a.matched[p];f&&(e.matched.find(c=>ka(c,f))?o.push(f):l.push(f));const s=e.matched[p];s&&(a.matched.find(c=>ka(c,s))||r.push(s))}return[l,o,r]}function Dm(){return He(Rn)}function Lm(){return He(Ls)}const D_={__name:"Navbar",props:["onClick"],setup(e){const a=G(),l=Dm();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return bs(()=>{const p=l.currentRoute.value.path.match(/\/([^/]+)$/);p&&(a.value=o(p[1]))}),(r,d)=>{const p=y("SuiIcon"),f=y("SuiMenuItem"),s=y("SuiMenu");return k(),B(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(p,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1})}}},L_=De(D_,[["__scopeId","data-v-338afb35"]]),I_=z({name:"Sidebar",setup(){const e=Lm();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),R_=v("strong",null," Fomantic UI Vue ",-1),E_=v("b",null,"Getting Started",-1);function z_(e,a,l,o,r,d){const p=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),c=y("sui-menu");return k(),B(c,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[R_]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[E_]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.elements,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.collections,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.views,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.modules,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const F_=De(I_,[["render",z_]]),P_={class:"sidemenu"},M_={style:{flex:"1","overflow-y":"scroll"}},V_={__name:"Sidebar",setup(e){return(a,l)=>(k(),_e("div",P_,[v("div",M_,[t(F_)])]))}},H_=De(V_,[["__scopeId","data-v-379ef704"]]),N_=z({name:"Sidebar",setup(){const e=Lm();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),O_=v("strong",null," Fomantic UI Vue ",-1),j_=v("b",null,"Getting Started",-1);function q_(e,a,l,o,r,d){const p=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),c=y("sui-sidebar");return k(),B(c,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[O_]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[j_]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.elements,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.collections,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.views,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.modules,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const G_=De(N_,[["render",q_]]),U_={class:"pusher",style:{height:"100vh"}},Y_={class:"article"},J_={__name:"Home",setup(e){const a=G(!1),l=()=>a.value=!a.value;return y_(()=>{a.value=!1}),(o,r)=>{const d=y("router-view"),p=y("SuiSegment");return k(),B(p,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(G_,{visible:a.value},null,8,["visible"]),v("div",U_,[t(H_),t(L_,{"on-click":l}),v("div",Y_,[t(d)])])]),_:1})}}},W_=De(J_,[["__scopeId","data-v-0bfd4ee9"]]),K_={__name:"DocSections",props:["docs"],setup(e){const a=e,l=N(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const d=y("SuiHeader");return k(!0),_e(Ae,null,et(l.value,(p,f)=>(k(),_e(Ae,{key:p},[t(d,{as:"h2",dividing:"",style:Da({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Te(p),1)]),_:2},1032,["style"]),(k(!0),_e(Ae,null,et(e.docs.filter(s=>s.category===p),(s,c)=>(k(),B(sd(s.component),{key:s.label+"_"+c,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},X_=e=>(ld("data-v-e2ae2e49"),e=e(),nd(),e),Q_={class:"item"},Z_=X_(()=>v("i",{class:"dropdown icon"},null,-1)),eb={class:"content menu active"},tb={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=kd(),l=p=>{p.preventDefault();const f=document.getElementById(a);f.open?r(f):(f.open=!0,o(f))},o=p=>{p.querySelector(".title").classList.add("active");const s=p.querySelector(".content"),c=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${c}px`});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),g.abort()},{signal:g.signal})},r=p=>{const f=p.querySelector(".title"),s=p.querySelector(".content"),c=s.offsetHeight;s.style.maxHeight=`${c}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),p.open=!1,g.abort()},{signal:g.signal})},d=(p,f)=>{p.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(p,f)=>(k(),_e("details",Q_,[v("summary",{class:"title",onClick:l},[Z_,v("b",null,Te(e.header),1)]),v("div",eb,[(k(!0),_e(Ae,null,et(e.items,s=>(k(),B(u(Rs),{to:`#${s.id}`,class:"item",onClick:c=>d(c,s.id)},{default:i(()=>[n(Te(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},ib=De(tb,[["__scopeId","data-v-e2ae2e49"]]),ab={class:"sticky"},lb={class:"ui vertical following fluid accordion text large menu"},nb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const d=y("SuiHeader"),p=y("SuiRail");return k(),B(p,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[v("div",ab,[t(d,{as:"h3"},{default:i(()=>[n(Te(e.title),1)]),_:1}),v("div",lb,[(k(),_e(Ae,null,et(l,f=>t(ib,{id:`${f}_link`,header:f,items:e.links.filter(s=>s.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},ob=De(nb,[["__scopeId","data-v-bd90305d"]]),sb={class:"intro"},rb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(l,o)=>{const r=y("SuiHeaderSubheader"),d=y("SuiHeader"),p=y("SuiDivider"),f=y("SuiIcon"),s=y("SuiMenuItem"),c=y("SuiPopup"),g=y("SuiMenu"),m=y("SuiContainer"),h=y("SuiSegment");return k(),_e("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(m,{class:"main"},{default:i(()=>[v("div",sb,[t(d,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(r,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1}),t(p,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(s,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(c,{trigger:a.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(m,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?(k(),_e(Ae,{key:0},[t(K_,{docs:e.componentDocs},null,8,["docs"]),t(ob,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):xs("",!0),Ui(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ut=De(rb,[["__scopeId","data-v-d22eb33f"]]);var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ub(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(l,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),l}var Rm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,p={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function _(S){return S instanceof s?new s(S.type,_(S.content),S.alias):Array.isArray(S)?S.map(_):S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(S,x){x=x||{};var T,I;switch(f.util.type(S)){case"Object":if(I=f.util.objId(S),x[I])return x[I];T={},x[I]=T;for(var M in S)S.hasOwnProperty(M)&&(T[M]=_(S[M],x));return T;case"Array":return I=f.util.objId(S),x[I]?x[I]:(T=[],x[I]=T,S.forEach(function(V,P){T[P]=_(V,x)}),T);default:return S}},getLanguage:function(_){for(;_;){var S=r.exec(_.className);if(S)return S[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,S){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+S)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(_){var S=document.getElementsByTagName("script");for(var x in S)if(S[x].src==_)return S[x]}return null}},isActive:function(_,S,x){for(var T="no-"+S;_;){var I=_.classList;if(I.contains(S))return!0;if(I.contains(T))return!1;_=_.parentElement}return!!x}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(_,S){var x=f.util.clone(f.languages[_]);for(var T in S)x[T]=S[T];return x},insertBefore:function(_,S,x,T){T=T||f.languages;var I=T[_],M={};for(var V in I)if(I.hasOwnProperty(V)){if(V==S)for(var P in x)x.hasOwnProperty(P)&&(M[P]=x[P]);x.hasOwnProperty(V)||(M[V]=I[V])}var q=T[_];return T[_]=M,f.languages.DFS(f.languages,function(Q,Y){Y===q&&Q!=_&&(this[Q]=M)}),M},DFS:function _(S,x,T,I){I=I||{};var M=f.util.objId;for(var V in S)if(S.hasOwnProperty(V)){x.call(S,V,S[V],T||V);var P=S[V],q=f.util.type(P);q==="Object"&&!I[M(P)]?(I[M(P)]=!0,_(P,x,null,I)):q==="Array"&&!I[M(P)]&&(I[M(P)]=!0,_(P,x,V,I))}}},plugins:{},highlightAll:function(_,S){f.highlightAllUnder(document,_,S)},highlightAllUnder:function(_,S,x){var T={callback:x,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),f.hooks.run("before-all-elements-highlight",T);for(var I=0,M;M=T.elements[I++];)f.highlightElement(M,S===!0,T.callback)},highlightElement:function(_,S,x){var T=f.util.getLanguage(_),I=f.languages[T];f.util.setLanguage(_,T);var M=_.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(M,T);var V=_.textContent,P={element:_,language:T,grammar:I,code:V};function q(Y){P.highlightedCode=Y,f.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,f.hooks.run("after-highlight",P),f.hooks.run("complete",P),x&&x.call(P.element)}if(f.hooks.run("before-sanity-check",P),M=P.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!P.code){f.hooks.run("complete",P),x&&x.call(P.element);return}if(f.hooks.run("before-highlight",P),!P.grammar){q(f.util.encode(P.code));return}if(S&&o.Worker){var Q=new Worker(f.filename);Q.onmessage=function(Y){q(Y.data)},Q.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else q(f.highlight(P.code,P.grammar,P.language))},highlight:function(_,S,x){var T={code:_,grammar:S,language:x};if(f.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=f.tokenize(T.code,T.grammar),f.hooks.run("after-tokenize",T),s.stringify(f.util.encode(T.tokens),T.language)},tokenize:function(_,S){var x=S.rest;if(x){for(var T in x)S[T]=x[T];delete S.rest}var I=new m;return h(I,I.head,_),g(_,I,S,I.head,0),b(I)},hooks:{all:{},add:function(_,S){var x=f.hooks.all;x[_]=x[_]||[],x[_].push(S)},run:function(_,S){var x=f.hooks.all[_];if(!(!x||!x.length))for(var T=0,I;I=x[T++];)I(S)}},Token:s};o.Prism=f;function s(_,S,x,T){this.type=_,this.content=S,this.alias=x,this.length=(T||"").length|0}s.stringify=function _(S,x){if(typeof S=="string")return S;if(Array.isArray(S)){var T="";return S.forEach(function(q){T+=_(q,x)}),T}var I={type:S.type,content:_(S.content,x),tag:"span",classes:["token",S.type],attributes:{},language:x},M=S.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(I.classes,M):I.classes.push(M)),f.hooks.run("wrap",I);var V="";for(var P in I.attributes)V+=" "+P+'="'+(I.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+V+">"+I.content+"</"+I.tag+">"};function c(_,S,x,T){_.lastIndex=S;var I=_.exec(x);if(I&&T&&I[1]){var M=I[1].length;I.index+=M,I[0]=I[0].slice(M)}return I}function g(_,S,x,T,I,M){for(var V in x)if(!(!x.hasOwnProperty(V)||!x[V])){var P=x[V];P=Array.isArray(P)?P:[P];for(var q=0;q<P.length;++q){if(M&&M.cause==V+","+q)return;var Q=P[q],Y=Q.inside,ge=!!Q.lookbehind,Be=!!Q.greedy,U=Q.alias;if(Be&&!Q.pattern.global){var X=Q.pattern.toString().match(/[imsuy]*$/)[0];Q.pattern=RegExp(Q.pattern.source,X+"g")}for(var me=Q.pattern||Q,ae=T.next,Le=I;ae!==S.tail&&!(M&&Le>=M.reach);Le+=ae.value.length,ae=ae.next){var We=ae.value;if(S.length>_.length)return;if(!(We instanceof s)){var st=1,Ue;if(Be){if(Ue=c(me,Le,_,ge),!Ue||Ue.index>=_.length)break;var ue=Ue.index,Zt=Ue.index+Ue[0].length,Ft=Le;for(Ft+=ae.value.length;ue>=Ft;)ae=ae.next,Ft+=ae.value.length;if(Ft-=ae.value.length,Le=Ft,ae.value instanceof s)continue;for(var J=ae;J!==S.tail&&(Ft<Zt||typeof J.value=="string");J=J.next)st++,Ft+=J.value.length;st--,We=_.slice(Le,Ft),Ue.index-=Le}else if(Ue=c(me,0,We,ge),!Ue)continue;var ue=Ue.index,re=Ue[0],be=We.slice(0,ue),Ne=We.slice(ue+re.length),Oe=Le+We.length;M&&Oe>M.reach&&(M.reach=Oe);var xe=ae.prev;be&&(xe=h(S,xe,be),Le+=be.length),w(S,xe,st);var $e=new s(V,Y?f.tokenize(re,Y):re,U,re);if(ae=h(S,xe,$e),Ne&&h(S,ae,Ne),st>1){var L={cause:V+","+q,reach:Oe};g(_,S,x,ae.prev,Le,L),M&&L.reach>M.reach&&(M.reach=L.reach)}}}}}}function m(){var _={value:null,prev:null,next:null},S={value:null,prev:_,next:null};_.next=S,this.head=_,this.tail=S,this.length=0}function h(_,S,x){var T=S.next,I={value:x,prev:S,next:T};return S.next=I,T.prev=I,_.length++,I}function w(_,S,x){for(var T=S.next,I=0;I<x&&T!==_.tail;I++)T=T.next;S.next=T,T.prev=S,_.length-=I}function b(_){for(var S=[],x=_.head.next;x!==_.tail;)S.push(x.value),x=x.next;return S}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(_){var S=JSON.parse(_.data),x=S.language,T=S.code,I=S.immediateClose;o.postMessage(f.highlight(T,f.languages[x],x)),I&&o.close()},!1)),f;var C=f.util.currentScript();C&&(f.filename=C.src,C.hasAttribute("data-manual")&&(f.manual=!0));function $(){f.manual||f.highlightAll()}if(!f.manual){var D=document.readyState;D==="loading"||D==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return f}(a);e.exports&&(e.exports=l),typeof jr<"u"&&(jr.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(r,d){var p={};p["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[d]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};f["language-"+d]={pattern:/[\s\S]+/,inside:l.languages[d]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:f},l.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,r){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:l.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var d=o.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,$){return"✖ Error "+C+" while fetching file: "+$},d="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",c="loaded",g="failed",m="pre[data-src]:not(["+f+'="'+c+'"]):not(['+f+'="'+s+'"])';function h(C,$,D){var _=new XMLHttpRequest;_.open("GET",C,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?$(_.responseText):_.status>=400?D(r(_.status,_.statusText)):D(d))},_.send(null)}function w(C){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if($){var D=Number($[1]),_=$[2],S=$[3];return _?S?[D,Number(S)]:[D,void 0]:[D,D]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+m}),l.hooks.add("before-sanity-check",function(C){var $=C.element;if($.matches(m)){C.code="",$.setAttribute(f,s);var D=$.appendChild(document.createElement("CODE"));D.textContent=o;var _=$.getAttribute("data-src"),S=C.language;if(S==="none"){var x=(/\.(\w+)$/.exec(_)||[,"none"])[1];S=p[x]||x}l.util.setLanguage(D,S),l.util.setLanguage($,S);var T=l.plugins.autoloader;T&&T.loadLanguages(S),h(_,function(I){$.setAttribute(f,c);var M=w($.getAttribute("data-range"));if(M){var V=I.split(/\r\n?|\n/g),P=M[0],q=M[1]==null?V.length:M[1];P<0&&(P+=V.length),P=Math.max(0,Math.min(P-1,V.length)),q<0&&(q+=V.length),q=Math.max(0,Math.min(q,V.length)),I=V.slice(P,q).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(P+1))}D.textContent=I,l.highlightElement(D)},function(I){$.setAttribute(f,g),D.textContent=I})}}),l.plugins.fileHighlight={highlight:function($){for(var D=($||document).querySelectorAll(m),_=0,S;S=D[_++];)l.highlightElement(S)}};var b=!1;l.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Rm);var Em=Rm.exports;const cb=Im(Em),Fl={mounted(e,a){var r;const l=a.modifiers,o=a.value;l.script||o==="script"?e.className="language-javascript":e.className="language-markup",cb.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},db={style:{paddingTop:"3rem"}},mb=v("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),pb=v("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),fb=[pb],gb={style:{paddingTop:"3rem",marginBottom:"3rem"}},hb=v("p",null," You can import all components as Vue plugin. ",-1),_b=v("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),bb=[_b],vb=v("br",null,null,-1),Sb=v("p",null," Or pick a component indivisually, add it to your components option. ",-1),yb=v("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),wb=[yb],Cb={__name:"GettingStarted",setup(e){return(a,l)=>{const o=y("SuiHeader");return k(),B(ut,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[v("section",db,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),mb,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),Ci((k(),_e("pre",null,fb)),[[u(Fl)]])]),v("section",gb,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),hb,Ci((k(),_e("pre",null,bb)),[[u(Fl),void 0,void 0,{script:!0}]]),vb,Sb,Ci((k(),_e("pre",null,wb)),[[u(Fl),void 0,void 0,{script:!0}]])])]),_:1})}}};function zm(e){var a,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=zm(e[a]))&&(o&&(o+=" "),o+=l);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function te(){for(var e,a,l=0,o="";l<arguments.length;)(e=arguments[l++])&&(a=zm(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Ve=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Me=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Ra=e=>e==="justified"?"justified":Ve(e,"aligned"),ui=(e,a)=>typeof e=="number"&&a?`${zo(e)} ${a}`:typeof e=="number"&&!a?zo(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Ma=(e,a)=>e?`${zo(e)} wide ${a}`:"",zo=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],W=z({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:N(()=>te(e.color,e.name,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.colored,"colored"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Ve(e.flipped,"flipped"),Ve(e.rotated,"rotated"),Me(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return K(e,{"aria-hidden":!0,class:this.classes})}}),yi=z({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:N(()=>te(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return K(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ab={install(e){e.component(W.name,W),e.component(yi.name,yi)}},kb=()=>({icon:[Boolean,String]}),xb=e=>({iconClasses:N(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),$b=["right","left"],Bb=()=>({labeled:[Boolean,String]}),Tb=e=>({labeledClasses:N(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":$b.includes(e.labeled)?`${e.labeled} labeled`:"")}),Db=["double","elastic"],Lb=()=>({loading:{type:[Boolean,String],validator:e=>Db.includes(e)||typeof e=="boolean"}}),Ib=e=>({loadingClasses:N(()=>te(e.loading,{loading:e.loading}))}),F=z({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...kb(),...Bb(),...Lb()},setup(e){const{iconClasses:a}=xb(e),{labeledClasses:l}=Tb(e),{loadingClasses:o}=Ib(e);return{classes:N(()=>te("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Ve(e.attached,"attached"),Ve(e.floated,"floated"),Me(e.animated,"animated"),a.value,l.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,l;return[typeof this.icon=="string"&&t(W,{name:this.icon},null),this.content||((l=(a=this.$slots).default)==null?void 0:l.call(a))]}})}}),Si=z({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:N(()=>te(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ft=z({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:N(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Ve(e.attached,"attached"),ui(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Rb={install(e){e.component(F.name,F),e.component(Si.name,Si),e.component(ft.name,ft)}},Ai=z({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:N(()=>te("ui",A(e.fluid,"fluid"),A(e.text,"text"),Ra(e.textAlign),"container"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb={install(e){e.component(Ai.name,Ai)}},zb=["mini","tiny","small","medium","large","big","huge","massive"],Fm=()=>({size:{type:String,validator:e=>zb.includes(e)}}),Pm=e=>({sizeClass:N(()=>e.size)}),Pe=z({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Fm()},setup(e){const{sizeClass:a}=Pm(e);return{classes:N(()=>te("ui",a.value,A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Ve(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return K("div",{class:this.classes},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb={install(e){e.component(Pe.name,Pe)}},kt=z({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:N(()=>te(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?K("em",{class:this.computedClass,"data-emoji":this.$props.name}):K("em",{"data-emoji":this.$props.name})}}),Pb={install(e){e.component(kt.name,kt)}},jt=z({name:"SuiFlag",props:{name:String,...Fm()},setup(e){const{sizeClass:a}=Pm(e);return{classes:N(()=>te(a.value,e.name,"flag"))}},render(){return K("i",{class:this.classes})}}),Mb={install(e){e.component(jt.name,jt)}},Bi=z({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return K(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pe=z({name:"SuiHeader",components:{HeaderSubheader:Bi},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=N(()=>te("ui",e.color,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Ve(e.floated,"floated"),Me(e.attached,"attached"),Ra(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(K(Bi,{},this.subheader)),l.length>0?K(this.elementType,{class:this.computedClass},l):K(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Xl=z({name:"SuiHeaderContent",render(){var e,a;return K("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vb={install(e){e.component(pe.name,pe),e.component(Xl.name,Xl),e.component(Bi.name,Bi)}},Mm=["top","middle","bottom"],Hb={verticalAlign:{type:String,validator:e=>Mm.includes(e)}};function Nb(e){return{verticalAlignClass:N(()=>e.verticalAlign&&Mm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Ob=["left","right"],jb={floated:{type:String,validator:e=>Ob.includes(e)}};function qb(e){return{floatedClass:N(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=z({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=N(()=>te("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(!!e.icon&&a.default===void 0,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Ve(e.attached,"attached"),Ve(e.corner,"corner"),Me(e.pointing,"pointing"),Me(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var r;return K(o,{class:l.value},[K(W,{name:e.icon}),(r=a.default)==null?void 0:r.call(a)])}:()=>{var r;return K(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Ki=z({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xi=z({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=N(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return K("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),Gb={install(e){e.component(O.name,O),e.component(Ki.name,Ki),e.component(Xi.name,Xi)}},ne=z({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Hb,...jb},setup(e,{slots:a}){const{verticalAlignClass:l}=Nb(e),{floatedClass:o}=qb(e),r=N(()=>te("ui",e.size,l.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),Me(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=y(e.as)),()=>{var p;return K(d,{class:r.value,href:e.href,target:e.target&&e.target},K("img",{src:e.src},(p=a.default)==null?void 0:p.call(a)))}}return e.wrapped?()=>{var d;return K("div",{class:r.value},K("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>K("div",{class:r.value},[K("img",{src:e.src}),K(O,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),Ql=z({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const l=N(()=>te("ui",e.size,"images"));return()=>{var o;return K("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),Ub={install(e){e.component(ne.name,ne),e.component(Ql.name,Ql)}},Ze=z({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=N(()=>typeof e.icon=="string"||e.loading),o=N(()=>!!e.label||e.labeled),r=N(()=>te("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(l.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),d=p=>a("update:modelValue",p.target.value);return()=>t("div",{class:r.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:p=>d(p)},null),l.value&&t(W,{name:e.icon||"spinner"},null),e.action&&t(F,null,{default:()=>[e.action]})])}}),Yb={install(e){e.component(Ze.name,Ze)}},Fo=z({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const l=N(()=>te("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Ve(e.verticalAlign,"aligned"),Ve(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return K(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),ra=z({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let l=e.as||"div";const o=N(()=>te(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return K(l,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),qr=z({name:"SuiListIcon",components:{Icon:W},setup(e,{slots:a}){return()=>{var l;return K(y(W.name),{...e},(l=a.default)==null?void 0:l.call(a))}}}),Gr=z({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:N(()=>te(Ve(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ur=z({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return K(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),Yr=z({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return K(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),Jr=z({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jb={install(e){e.component(Fo.name,Fo),e.component(ra.name,ra),e.component(qr.name,qr),e.component(Gr.name,Gr),e.component(Ur.name,Ur),e.component(Yr.name,Yr),e.component(Jr.name,Jr)}},Ee=z({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:N(()=>{var l;return te("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),Me(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wb={install(e){e.component(Ee.name,Ee)}},Wr=z({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:N(()=>te("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),Me(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(Wr.name,Wr)}},Ti=z({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Bt=z({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:N(()=>te("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component(Ti.name,Ti),e.component(Bt.name,Bt)}},H=z({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Ve(e.floated,"floated"),Ve(e.textAlign,"aligned"),Me(e.attached,"attached"),Me(e.fitted,"fitted"),Me(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),St=z({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.size,A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=z({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb={install(e){e.component(H.name,H),e.component(St.name,St),e.component(Kr.name,Kr)}},Xr=z({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:N(()=>te(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,l,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Zb=["one","two","three","four","five","six","seven","eight"],Qr=z({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:N(()=>te("ui",a&&Zb[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Ve(e.attached,"attached"),Ve(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zr=z({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),eu=z({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tu=z({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ev={install(e){e.component(Xr.name,Xr),e.component(Qr.name,Qr),e.component(Zr.name,Zr),e.component(eu.name,eu),e.component(tu.name,tu)}},tv=Object.freeze(Object.defineProperty({__proto__:null,Button:Rb,Container:Eb,Divider:Fb,Emoji:Pb,Flag:Mb,Header:Vb,Icon:Ab,Image:Ub,Input:Yb,Label:Gb,List:Jb,Loader:Wb,Rail:Kb,Reveal:Xb,Segment:Qb,Step:ev},Symbol.toStringTag,{value:"Module"})),xt=z({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:N(()=>te(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),it=z({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=N(()=>te(A(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,aa({class:this.computedClass},a),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),Xt=z({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:N(()=>te("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,d)=>{const p={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ae,null,[t(it,p,{default:()=>[r.content]}),this.sections.length!==d+1&&t(xt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),iv={install(e){e.component(Xt.name,Xt),e.component(xt.name,xt),e.component(it.name,it)}},zt=z({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:N(()=>te("ui",e.size,A(e.error,"error"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iu=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function av(e){return{widthClass:N(()=>Number(e.width)>0?`${iu[Number(e.width)-1]} wide`:typeof e.width=="string"||iu.includes(e.width)?`${e.width} wide`:null)}}const at=z({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=av(e),o=N(()=>te(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),l.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zl=z({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:N(()=>te(Ve(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),en=z({name:"SuiFormTextarea",props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),lv={install(e){e.component(zt.name,zt),e.component(at.name,at),e.component(Zl.name,Zl),e.component(en.name,en)}},$a=z({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:N(()=>te("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Ve(e.reversed,"reversed"),Ve(e.verticalAlign,"aligned"),Me(e.celled,"celled"),Me(e.divided,"divided"),Me(e.padded,"padded"),Me(e.relaxed,"relaxed"),Ra(e.textAlign),ui(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),wt=z({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:N(()=>te(e.color,Ve(e.floated,"floated"),Ve(e.only,"only"),Ra(e.textAlign),ui(e.width,"wide"),Ma(e.mobile,"mobile"),Ma(e.tablet,"tablet"),Ma(e.computer,"computer"),Ma(e.largeScreen,"large screen"),Ma(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tn=z({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:N(()=>te(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Ve(e.only,"only"),ui(e.columns,"column"),Ra(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nv={install(e){e.component($a.name,$a),e.component(wt.name,wt),e.component(tn.name,tn)}},Po=z({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:N(()=>te("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.floated,"floated"),Me(e.icon,"icon"),Me(e.tabular,"tabular"),ui(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),au=z({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),an=z({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=y(e.as));const o=N(()=>te(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.icon,"icon"),A(e.link,"link"),Me(e.fitted,"fitted"),"item"));return()=>t(l,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),lu=z({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:N(()=>te(a,"menu"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov={install(e){e.component(Po.name,Po),e.component(au.name,au),e.component(an.name,an),e.component(lu.name,lu)}},cl=z({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),Me(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(Mo,null,{default:()=>[t(Vo,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Mo=z({name:"SuiMessageContent",render(){var e,a;return K("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vo=z({name:"SuiMessageHeader",render(){var e,a;return K("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nu=z({name:"SuiMessageItem",render(){var e,a;return K("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ou=z({name:"SuiMessageList",render(){var e,a;return K("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sv={install(e){e.component(cl.name,cl),e.component(Mo.name,Mo),e.component(Vo.name,Vo),e.component(nu.name,nu),e.component(ou.name,ou)}},su=z({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),Me(e.attached,"attached"),Me(e.basic,"basic"),Me(e.compact,"compact"),Me(e.padded,"padded"),ui(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ru=z({name:"SuiTableBody",render(){var e,a;return K("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uu=z({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:N(()=>te(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Ve(e.verticalAlign,"aligned"),Ve(e.marked,"marked"),Ra(e.textAlign)))}},render(){var e,a,l,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),cu=z({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:N(()=>te(A(a,"full-width")))}},render(){var e,a,l,o;return this.computedClass?K("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):K("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),du=z({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:N(()=>te(A(e.fullWidth,"full-width")))}},render(){var e,a,l,o;return this.computedClass?K("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):K("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),mu=z({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:N(()=>te(A(e.singleLine,"single line"),Ve(e.textAlign,"aligned"),ui(e.width,"wide")))}},render(){var e,a,l,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),pu=z({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:N(()=>te(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Ve(e.textAlign,"aligned"),Ve(e.verticalAlign,"aligned")))}},render(){var e,a,l,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),rv={install(e){e.component(su.name,su),e.component(ru.name,ru),e.component(uu.name,uu),e.component(cu.name,cu),e.component(du.name,du),e.component(mu.name,mu),e.component(pu.name,pu)}},uv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:iv,Form:lv,Grid:nv,Menu:ov,Message:sv,Table:rv},Symbol.toStringTag,{value:"Module"})),fu=z({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:N(()=>te("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,l,o;return this.$props.test?K("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):K("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),cv={install(e){e.component(fu.name,fu)}},gu=z({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,l,o;return this.$props.href||this.$props.link?K("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):K("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),hu=z({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:N(()=>te(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_u=z({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:N(()=>te(Ve(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bu=z({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:N(()=>te("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ui(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),vu=z({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:N(()=>te(Ve(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Su=z({name:"SuiCardMeta",render(){var e,a;return K("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),dv={install(e){e.component(gu.name,gu),e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(Su.name,Su)}},yu=z({name:"SuiComment",render(){var e,a;return K("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=z({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:N(()=>te(A(a,"active")))}},render(){var e,a,l,o;return this.computedClass?K("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):K("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Cu=z({name:"SuiCommentActions",render(){var e,a;return K("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Au=z({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return K(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ku=z({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return K(e,{class:"avatar"},K("img",{src:this.$props.src}))}}),xu=z({name:"SuiCommentContent",render(){var e,a;return K("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$u=z({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:N(()=>te("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Bu=z({name:"SuiCommentMetadata",render(){var e,a;return K("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=z({name:"SuiCommentText",render(){var e,a;return K("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),mv={install(e){e.component(yu.name,yu),e.component(wu.name,wu),e.component(Cu.name,Cu),e.component(Au.name,Au),e.component(ku.name,ku),e.component(xu.name,xu),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(Tu.name,Tu)}},Du=z({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:N(()=>te("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lu=z({name:"SuiFeedContent",render(){var e,a;return K("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=z({name:"SuiFeedDate",render(){var e,a;return K("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=z({name:"SuiFeedEvent",render(){var e,a;return K("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=z({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:N(()=>te(A(a,"images"),A(l,"text"),"extra"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=z({name:"SuiFeedLabel",render(){var e,a;return K("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=z({name:"SuiFeedLike",render(){var e,a;return K("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=z({name:"SuiFeedMeta",render(){var e,a;return K("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=z({name:"SuiFeedSummary",render(){var e,a;return K("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=z({name:"SuiFeedUser",render(){var e,a;return K("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(Du.name,Du),e.component(Lu.name,Lu),e.component(Iu.name,Iu),e.component(Ru.name,Ru),e.component(Eu.name,Eu),e.component(zu.name,zu),e.component(Fu.name,Fu),e.component(Pu.name,Pu),e.component(Mu.name,Mu),e.component(Vu.name,Vu)}},Hu=z({name:"SuiItem",render(){var e,a;return K("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=z({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:N(()=>te(Ve(a,"aligned"),"content"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=z({name:"SuiItemDescription",render(){var e,a;return K("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=z({name:"SuiItemExtra",render(){var e,a;return K("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qu=z({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:N(()=>te("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),Me(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=z({name:"SuiItemHeader",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return K(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Uu=z({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:N(()=>te(e.size,"image"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yu=z({name:"SuiItemMeta",render(){var e,a;return K("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(Hu.name,Hu),e.component(Nu.name,Nu),e.component(Ou.name,Ou),e.component(ju.name,ju),e.component(qu.name,qu),e.component(Gu.name,Gu),e.component(Uu.name,Uu),e.component(Yu.name,Yu)}},ln=z({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?K("div",{class:"label"},this.$props.content):K("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nn=z({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:N(()=>te(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?K("div",{class:this.computedClass},this.$props.content):K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ju=z({name:"SuiStatistic",components:{StatisticLabel:ln,StatisticValue:nn},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=He("ui",!0);return{computedClass:N(()=>te(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),Me(e.floated,"floated"),"statistic"))}},render(){var e,a,l,o,r,d;let p=[];return this.$props.value&&p.push(K(nn,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&p.push(K(ln,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),K("div",{class:this.computedClass},p.length>0?p:(d=(r=this.$slots).default)==null?void 0:d.call(r))}}),Wu=z({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return mt("ui",!1),{computedClass:N(()=>te("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ui(e.widths,""),"statistics"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component(Ju.name,Ju),e.component(Wu.name,Wu),e.component(ln.name,ln),e.component(nn.name,nn)}},hv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:cv,Card:dv,Comment:mv,Feed:pv,Item:fv,Statistic:gv},Symbol.toStringTag,{value:"Module"})),Ku=z({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),l=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const d=l(r);e.multiple?d?a.value=a.value.filter(p=>p!==r):a.value.push(r):a.value=d?-1:r};return mt("isTabActive",l),mt("updateActiveIndex",o),{computedClass:N(()=>te("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=o=>(o.forEach((r,d)=>{r.props.index=d}),o);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Xu=z({name:"SuiAccordionAccordion",render(){var e,a;return K("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ho=z({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:N(()=>te(A(e.active,"active"),"content"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qu=z({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=He("isTabActive"),l=He("updateActiveIndex"),o=N(()=>te(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:o}},render(){return t(Ae,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(W,{name:"dropdown"},null),this.title]),t(Ho,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Zu=z({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:N(()=>te(A(e.active,"active"),"title"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_v={install(e){e.component(Ku.name,Ku),e.component(Xu.name,Xu),e.component(Ho.name,Ho),e.component(Qu.name,Qu),e.component(Zu.name,Zu)}},bv=(e,a,l)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},vv=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},Es={mounted:bv,unmounted:vv};function Sv(e,a={}){const l=G(e.value?"open":"closed"),o=()=>l.value=e.value?"open":"closed";ht(e,f=>{l.value=f?"opening":"closing"});const r=f=>{f.addEventListener("animationend",o,!0)},d=f=>{f&&f.removeEventListener("animationend",o)},p=N((f="scale")=>{switch(l.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:d,computeAnimationClass:p}}const yv=z({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=G(!1),o=()=>{e.disabled||(l.value=!0)},r=()=>l.value=!1,d=()=>{e.disabled||a("select-day",e.date)},p=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},f=N(()=>te("link",A(l.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(p(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:d,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Et(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),wv=z({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:o,subtract:r,selectedDate:d,setSelectedDate:p,selectType:f,updateVisible:s,formatDate:c}=He(Li);return{calendarDays:e,isEqualDay:g=>{if(!d.value)return!1;const m=d.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),f.value==="date"){let m=new Date(g.year,g.month,g.day);p(m),s(!1);return}a("hour")},updateSelectMode:a,formatDate:c,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(o=>t(yv,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),we=z({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),l=()=>a.value=!0,o=()=>a.value=!1,r=N(()=>te("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Et(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Cv=z({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:o,selectedDate:r,updateSelectMode:d}=He(Li);return{state:e,add:l,subtract:o,updateSelectMode:d,isActive:p=>r.value?e.year===r.value.getFullYear()&&e.month===p:!1,isThisMonth:p=>{let f=new Date;return p===f.getMonth()&&e.year===f.getFullYear()},onClickCell:p=>{a(p,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,o)=>t("tr",null,[t(we,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(we,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(we,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),Av=z({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:o,subtract:r,selectedDate:d,updateSelectMode:p}=He(Li),f=()=>o(10,"years"),s=()=>r(10,"years"),c=N(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:p,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:c,isActive:g=>d.value?g===d.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{l(g,"years"),p("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(we,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(we,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(we,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(we,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(we,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(we,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(we,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(we,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(we,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(we,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(we,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),kv=z({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:o,subtract:r,formatDate:d,selectedDate:p}=He(Li);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{l(f,"hours"),e("minute")},isActive:f=>{if(!p.value)return!1;let s=p.value.getFullYear(),c=p.value.getMonth(),g=p.value.getDate(),m=p.value.getHours();return a.year===s&&a.month===c&&a.day===g&&f===m}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(we,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(we,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(we,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(we,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(we,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(we,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(we,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(we,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(we,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(we,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(we,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(we,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(we,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(we,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(we,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Mt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Nt(e)}const xv=z({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:o,formatDate:r,updateSelectMode:d,updateVisible:p,selectedDate:f}=He(Li);return{add:l,subtract:o,formatDate:r,updateSelectMode:d,getTimeLabel:s=>{let c=e.hour%12,g=e.hour>12?"PM":"AM",m=s.toString().padStart(2,"0");return e.hour===0?`12:${m} AM`:e.hour===12?`12:${m} PM`:`${c}:${m} ${g}`},onClickCell:s=>{a(s,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),p(!1)},isActive:s=>{if(!f.value)return!1;let c=f.value.getFullYear(),g=f.value.getMonth(),m=f.value.getDate(),h=f.value.getHours(),w=f.value.getMinutes();return e.year===c&&e.month===g&&e.day===m&&e.hour===h&&s===w}}},render(){let e,a,l,o,r,d,p,f,s,c,g,m;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Mt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Mt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Mt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Mt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Mt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(we,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Mt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(we,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Mt(p=this.getTimeLabel(30))?p:{default:()=>[p]}),t(we,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Mt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(we,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Mt(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(we,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Mt(c=this.getTimeLabel(45))?c:{default:()=>[c]}),t(we,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Mt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(we,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Mt(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),$v=z({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:l}=He(Li),{setupAnimation:o,removeAnimation:r,computeAnimationClass:d}=Sv(a);Di(()=>o(e.value)),ia(()=>r(e.value));const p=N(()=>te("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:p,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t(wv,null,null);case"month":return t(Cv,null,null);case"year":return t(Av,null,null);case"hour":return t(kv,null,null);case"minute":return t(xv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),Bv=z({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:o,set:r,state:d,formatCalendarDate:p}=He(Li);return{visible:a,formatCalendarDate:p,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Tv=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let o=l.getDay();return o>=7?o-7:o},Dv=(e,a)=>{let l,o;return a===0?(l=11,o=e-1):(l=a-1,o=e),32-new Date(o,l,32).getDate()},Xn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function Lv(){const e=G(!1),a=(C=!1)=>e.value=C,l=new Date;function o(C){if(!C)return;let $=C.getFullYear(),D=Xn(C.getMonth()),_=C.getDate(),S=C.getHours(),x=C.getMinutes(),T=S>11?"PM":"AM";S=S%12,S===0&&(S=12);let I=x.toString().padStart(2,"0");return`${D} ${_}, ${$} ${S}:${I} ${T}`}const r=G("default"),d=G("day");function p(C){d.value=C}const f=G(null),s=C=>{f.value=C},c=si({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),g=(C,$)=>{switch($){case"years":c.year=C;break;case"months":c.month=C;break;case"days":c.day=C;break;case"hours":c.hour=C;break;case"minutes":c.minute=C}},m=(C,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()+C);break;case"months":D.setMonth(D.getMonth()+C);break;case"days":D.setDate(D.getDate()+C);break;case"hours":D.setHours(D.getHours()+C);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},h=(C,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()-C);break;case"months":D.setMonth(D.getMonth()-C);break;case"days":D.setDate(D.getDate()-C);break;case"hours":D.setHours(D.getHours()-C);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},w=(C="default")=>C==="date"?`${Xn(c.month)} ${c.year}`:`${Xn(c.month)} ${c.day}, ${c.year}`,b=N(()=>{let C=c.month,$=c.year;C>11&&(C=C%11-1,$+=1);let D=[],_=Tv($,C),S=32-new Date($,C,32).getDate(),x=Dv($,C),T=1;for(let I=0;I<6;I++){let M=[];if(I===0){for(let P=x-_+1;P<=x;P++){let q=C===0?11:C-1,Q=C===0?$-1:$;M.push({day:P,month:q,year:Q,currentMonth:!1})}let V=7-M.length;for(let P=0;P<V;P++)M.push({day:T,month:C,year:$,currentMonth:!0}),T++}else for(let V=0;V<7;V++){if(T>S){let P=C===11?0:C+1,q=C===11?$+1:$;M.push({day:T-S,month:P,year:q,currentMonth:!1})}else M.push({day:T,month:C,year:$,currentMonth:!0});T++}D.push(M)}return D});return{visible:e,updateVisible:a,calendarDays:b,formatCalendarDate:o,selectMode:d,updateSelectMode:p,selectType:r,selectedDate:f,setSelectedDate:s,state:c,set:g,add:m,subtract:h,formatDate:w}}const Li=Symbol("useCalendar"),ec=z({name:"SuiCalendar",directives:{clickoutside:Es},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=Lv();mt(Li,l);const{updateVisible:o,selectedDate:r}=l;return ht(r,d=>{a("update:modelValue",d)}),{updateVisible:o}},render(){return Ci(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t($v,null,null),t("i",{class:"calendar icon"},null),t(Bv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[Cn("clickoutside"),()=>this.updateVisible(!1)]])}}),Iv={install:e=>{e.component(ec.name,ec)}},No=z({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=N(()=>te("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=N(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let d;e.value?o.value?d=e.modelValue.filter(p=>e.value!==p):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),Rv={install(e){e.component(No.name,No)}},qt=z({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:N(()=>te("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Ve(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return K("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tc=z({name:"SuiDimmerDimmable",components:{Segment:H},props:{blurring:Boolean},setup(e){return{computedClass:N(()=>te(A(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return K(H,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ev={install(e){e.component(qt.name,qt),e.component(tc.name,tc)}},zv=(e,a)=>e.map(l=>l[a]),Fv=z({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:N(()=>te(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:p}=this.item;l=t(Ae,null,[d&&t("i",{class:`${d} flag`},null),p])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ae,null,[t("div",{class:this.computedClass},[o&&t(ne,o,null),r&&t(O,r,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Et(()=>this.$emit("remove"),["stop"])},null)])}}),Pv=e=>{const a=si({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return ht(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Mv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Nt(e)}const ic=z({name:"SuiDropdown",directives:{clickoutside:Es},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=Pv(e);mt("useDropdown",l);const{state:o,show:r,hide:d}=l,p=N(()=>te("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),Me(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),f=()=>{var $;if(o.visible)return d();($=h.value)==null||$.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},c=()=>d(),g=G(""),m=N(()=>{const $=g.value.toLowerCase();return e.options.filter(D=>{const _=typeof D=="object"?D.text:D,S=_.toLowerCase().includes($);if(!e.multiple)return S;if(Array.isArray(e.modelValue)){const x=typeof D=="object"?zv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return S&&!x}return S})}),h=G(null),w=$=>g.value=$.target.value,b=$=>{var D;if(g.value="",e.search&&((D=h.value)==null||D.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,$]:[$];return a("update:modelValue",_)}return a("update:modelValue",$)},C=$=>{if(Array.isArray(e.modelValue)){const D=e.modelValue.findIndex(_=>_===$);if(D>-1){let _=Object.assign(e.modelValue);_.splice(D,1),a("update:modelValue",_)}}};return mt("selection",e.selection),{computedClass:p,onClick:f,openMenu:s,closeMenu:c,filteredText:g,filteredOptions:m,inputRef:h,onInput:w,onSelect:b,removeItem:C}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(p=>typeof p=="object"?t("a",{class:"ui label"},[p.flag&&t("i",{class:`${p.flag} flag`},null),p.text,t("i",{class:"delete icon",onClick:Et(()=>this.removeItem(p),["stop"])},null)]):t("a",{class:"ui label"},[p,t("i",{class:"delete icon",onClick:Et(()=>this.removeItem(p),["stop"])},null)]))},o=()=>this.filteredOptions.filter(p=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(p):!0).map(p=>t(Oo,{item:p,active:this.$props.modelValue&&typeof p=="object"?p.text===this.$props.modelValue.text:p===this.$props.modelValue,text:typeof p=="object"?p.text:p,flag:typeof p=="object"&&Object.keys(p).includes("flag")?p.flag:"",image:p.image,label:p.label,disabled:p.disabled,onSelect:this.onSelect},null)),r=()=>{let p={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Fv,aa(p,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let p;return t(jo,{search:this.$props.searchInMenu,onSearch:this.onInput},Mv(p=o())?p:{default:()=>[p]})};return Ci(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:p=>this.inputRef=p,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:p=>this.onInput(p)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[Cn("clickoutside"),this.closeMenu]])}}),Oo=z({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:o}=He("useDropdown");return{computedClass:N(()=>te(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Et(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(ne,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),jo=z({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:o}=He("useDropdown"),r=G(null),d=N(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,f()))});ht(()=>o.visible,f=>{if(!f||!r.value)return;let s=r.value.parentElement;const{top:c,height:g}=s==null?void 0:s.getBoundingClientRect(),m=c-p.value.length*37,h=document.documentElement.clientHeight-c-g-p.value.length*37;o.direction=m>h?"up":"down"});const p=N(()=>{var f;let s=[],c=(f=l.default)==null?void 0:f.call(l);return c&&c.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:d,onSearchInput:f=>a("search",f)}},render(){var e,a,l,o;const r=()=>t(Ae,null,[t("div",{class:"ui left icon input",onClick:Et(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Vv={install(e){e.component(ic.name,ic),e.component(Oo.name,Oo),e.component(jo.name,jo)}},ac=z({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),l=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=N(()=>te("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:l,computedClass:r}},render(){let e=[K("i",{class:"video play icon"}),K("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(K("div",{class:"embed"},K("iframe",{src:this.getSrc()}))),K("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Hv={install(e){e.component(ac.name,ac)}};function Nv(e){return as()?(Ic(e),!0):!1}function Vm(e){return typeof e=="function"?e():u(e)}const Hm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ov=Object.prototype.toString,jv=e=>Ov.call(e)==="[object Object]",Pl=()=>{},qv=Gv();function Gv(){var e,a;return Hm&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Oa(e){var a;const l=Vm(e);return(a=l==null?void 0:l.$el)!=null?a:l}const Nm=Hm?window:void 0;function Qn(...e){let a,l,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,r]=e,a=Nm):[a,l,o,r]=e,!a)return Pl;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const d=[],p=()=>{d.forEach(g=>g()),d.length=0},f=(g,m,h,w)=>(g.addEventListener(m,h,w),()=>g.removeEventListener(m,h,w)),s=ht(()=>[Oa(a),Vm(r)],([g,m])=>{if(p(),!g)return;const h=jv(m)?{...m}:m;d.push(...l.flatMap(w=>o.map(b=>f(g,w,b,h))))},{immediate:!0,flush:"post"}),c=()=>{s(),p()};return Nv(c),c}let lc=!1;function Uv(e,a,l={}){const{window:o=Nm,ignore:r=[],capture:d=!0,detectIframe:p=!1}=l;if(!o)return Pl;qv&&!lc&&(lc=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Pl)),o.document.documentElement.addEventListener("click",Pl));let f=!0;const s=g=>r.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Oa(m);return h&&(g.target===h||g.composedPath().includes(h))}}),c=[Qn(o,"click",g=>{const m=Oa(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(f=!s(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:d}),Qn(o,"pointerdown",g=>{const m=Oa(e);f=!s(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),p&&Qn(o,"blur",g=>{setTimeout(()=>{var m;const h=Oa(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>c.forEach(g=>g())}function Om(e,a="scale"){const l=G(e.modelValue?"open":"closed");return ht(()=>e.modelValue,o=>{l.value=o?"opening":"closing"}),{animationClasses:N(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:N(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const Yv=z({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:o}=Om(e,"fade"),r=N(()=>te("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),d=N(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),p=N(()=>te("dimmable","dimmed",A(e.blurring,"blurring")));return ht(()=>e.modelValue,f=>{if(f){document.body.classList.add(...p.value.split(" "));return}document.body.classList.remove(...p.value.split(" "))}),{className:r,style:d,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),on=z({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=G(),{animationClasses:o,isClosed:r}=Om(e),d=N(()=>te("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),p=N(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return Uv(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:p,close:f,modalRef:l}},render(){return t(Bn,{to:"body"},{default:()=>[t(Yv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),sn=z({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),rn=z({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:N(()=>te(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qo=z({name:"SuiModalDescription",render(){var e,a;return K("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),un=z({name:"SuiModalHeader",render(){var e,a;return K("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Jv={install(e){e.component(on.name,on),e.component(sn.name,sn),e.component(rn.name,rn),e.component(qo.name,qo),e.component(un.name,un)}},Wv=e=>{const a=G(!1),l=fo(e,"position"),o=G(null),r=fo(e,"trigger"),d=()=>{a.value=!0,La(()=>f())},p=()=>{a.value=!1},f=()=>{if(!o.value||!r.value)return;let s=0,c=0;const g=o.value,m=r.value.$el;g.style.transform=`translate(${s}px, ${c}px)`;const{top:h,left:w,width:b,height:C}=m.getBoundingClientRect(),$=g.getBoundingClientRect(),{pageXOffset:D,pageYOffset:_}=window;if(l.value.includes("top")?(s=D+w,c=_+h-g.offsetTop-g.offsetHeight):(s=w,c=h+C-$.top),l.value.includes("right")){const S=b-$.width;s=w+S}if(l.value.includes("center")){const S=b/2-$.width/2;s=w+S}l.value==="right center"&&(s=w+b,c=h+C/2-$.top-$.height/2),l.value==="left center"&&(s=w-$.width,c=h+C/2-$.top-$.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${c}px)`};return{show:a,showPopup:d,hidePopup:p,placement:l,popupRef:o,triggerRef:r}},nc=z({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:o,hidePopup:r,popupRef:d,triggerRef:p}=Wv(e);bs(()=>{var h,w,b;(h=p.value)!=null&&h.$el&&((w=p.value)==null||w.$el.addEventListener("mouseenter",o),(b=p.value)==null||b.$el.addEventListener("mouseleave",r))});const f=G(l.value?"open":"close");N(()=>f.value!=="closed"),ht(()=>l.value,h=>{f.value=h?"opening":"closing"});const s=(h,w="scale")=>{switch(h){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},c=()=>f.value=l.value?"open":"closed";Di(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",c,!0)}),ia(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",c)});const g={position:"initial",animationDuration:"200ms"},m=N(()=>te("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),Me(e.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>t(Bn,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:m.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Kv={install(e){e.component(nc.name,nc)}},Xv=["top","bottom","left"],zs=()=>({attached:{type:String,validator:e=>Xv.includes(e)}}),jm=e=>({attachedClasses:N(()=>te(e.attached,{attached:e.attached}))}),Qv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],qm=()=>({color:{type:String,validator:e=>Qv.includes(e)}}),Gm=e=>({colorClasses:N(()=>te(e.inverted&&"inverted",e.color))}),cn=z({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...zs(),...qm()},setup(e){const{attachedClasses:a}=jm(e),{colorClasses:l}=Gm(e),o=N(()=>te("ui",l.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=N(()=>te(Me(e.progress,"progress"))),d=N(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),Zv={install(e){e.component(cn.name,cn)}},e1=z({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=He("rating",G(0)),l=He("updateRating"),o=He("selectedIndex",G(0)),r=He("updateSelectedIndex"),d=He("clearable",!1),p=He("disabled",!1),f=()=>{if(!p){if(d&&e.index===a.value){l(0),r(0);return}l(e.index)}},s=()=>{p||r(e.index)},c=N(()=>e.index<=a.value),g=N(()=>e.index<=o.value),m=N(()=>te(e.icon,A(c.value,"active"),A(g.value,"selected"),"icon"));return()=>t("i",{class:m.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),oc=z({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=G(e.modelValue||e.defaultRating),o=G(!1),r=G(0),d=g=>{l.value=g,a("update:modelValue",g),a("change",g)},p=g=>r.value=g,f=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,p(0))},c=N(()=>te("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return mt("rating",l),mt("updateRating",d),mt("selectedIndex",r),mt("updateSelectedIndex",p),mt("clearable",e.clearable),mt("disabled",e.disabled),()=>t("div",{class:c.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((g,m)=>t(e1,{icon:e.icon,index:m+1},null))])}}),t1={install(e){e.component(oc.name,oc)}},sc=z({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),i1={install(e){e.component(sc.name,sc)}},rc=z({name:"SuiSidebar",directives:{clickoutside:Es},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=si({animating:!1}),o=N(()=>{const r=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(l.animating,"animating"),A(r,"vertical"),Me(e.icon,"icon"),"menu")});return ht(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const d=r.path||r.composedPath&&r.composedPath();d&&d.find(p=>p.classList&&p.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return Ci(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[Cn("clickoutside"),this.onClickPusher]])}}),a1={install:e=>{e.component(rc.name,rc)}};class Zn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const uc=z({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=N(()=>te("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),Me(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=N(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),p=N(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=N(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=N(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,X)=>X*e.step+e.min)),c=()=>{var U,X;let me=1,ae=g(),Le=(e.vertical?(U=h.value)==null?void 0:U.clientHeight:(X=h.value)==null?void 0:X.clientWidth)||0,We=1;if(Le>0)for(;Le/ae*We<100;)ae%We||(me=We),We+=1;return me},g=()=>Math.round((e.max-e.min)/e.step),m=G(null),h=G(null),w=G(0),b=G(0),C=G(0),$=G(0),D=()=>{if(!m.value)return;let U=m.value.getBoundingClientRect();w.value=U.left+Zn.getWindowScrollLeft(),b.value=U.top+Zn.getWindowScrollTop(),C.value=m.value.offsetWidth,$.value=m.value.offsetHeight},_=G(0),S=U=>{let{pageX:X,pageY:me}=U.touches?U.touches[0]:U,ae,Le;e.vertical?ae=(b.value+$.value-me)*100/$.value:ae=(X-w.value)*100/C.value,Le=(e.max-e.min)*(ae/100)+e.min;const We=e.range?e.modelValue[_.value]:e.modelValue||0;Le=We+Math.round(Le/e.step-We/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),x(Le)},x=U=>{let X=U,me;if(e.range)if(me=e.modelValue?[...e.modelValue]:[],_.value===0){let ae=e.modelValue?e.modelValue[1]:e.max;X<e.min?X=e.min:X>ae&&(X=ae),me[0]=X,me[1]=me[1]||e.max}else{let ae=e.modelValue?e.modelValue[0]:e.min;X>e.max?X=e.max:X<ae&&(X=ae),me[0]=me[0]||e.min,me[1]=X}else X<e.min&&(X=e.min),X>e.max&&(X=e.max),me=X;a("update:modelValue",me),a("change",me)},T=G(!1),I=U=>T.value=U,M=(U,X=0)=>{I(!0),D(),_.value=X,U.preventDefault()},V=U=>{T.value&&(I(!1),document.removeEventListener("mousemove",P),a("slideend",{event:U,value:e.modelValue}))},P=U=>{T.value&&(S(U),U==null||U.preventDefault())},q=(U,X=0)=>{e.disabled||(M(U,X),document.addEventListener("mousemove",P),document.addEventListener("mouseup",V),U.preventDefault())},Q=(U,X=0)=>{switch(_.value=X,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():ge()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?ge():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?ge():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():ge(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[_.value]+e.step:U=e.modelValue+e.step,x(U)},ge=()=>{let U=0;e.range?U=e.modelValue[_.value]-e.step:U=e.modelValue-e.step,x(U)},Be=U=>{if(!e.disabled&&!Zn.hasClass(U.target,"thumb")){if(e.range){let X=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,me=(o()+r())/2;X<me?_.value=e.reversed?1:0:_.value=e.reversed?0:1}D(),S(U)}};return()=>t("div",{ref:U=>m.value=U,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>h.value=U},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:p.value,onMousedown:U=>q(U),onTouchstart:U=>M(U),onTouchmove:U=>P(U),onTouchend:U=>V(U),onKeydown:U=>Q(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>q(U,1),onTouchstart:U=>M(U,1),onTouchmove:U=>P(U),onTouchend:U=>V(U),onKeydown:U=>Q(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,X)=>{let me=X/g();return X%c()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-X]:s.value[g()-X]:e.labels?e.labels[X]:s.value[X]])})])])}}),l1={install(e){e.component(uc.name,uc)}},Go=z({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:N(()=>te("ui tab segment",A(e.active,"active"),Me(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),cc=z({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const o=G(e.activeIndex);ht(()=>e.activeIndex,c=>{o.value=c});const r=(c,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:c,index:g})),a("tab-click",{event:c,index:g})},d=(c,g)=>{c.key==="Enter"&&r(c,g)},p=N(()=>{var c,g;let m=[];return(c=l.default)!=null&&c.call(l)&&((g=l.default)==null||g.call(l).forEach(h=>{h.type.name==="SuiTabPanel"&&m.push(h)})),m}),f=N(()=>!e.secondary&&!e.pointing&&!e.text),s=N(()=>te("ui menu",A(f.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:d,tabIndex:o,tabs:p,tabMenuClass:s,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((l,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,o)=>t(Go,aa(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,d;return[(d=(r=l.children).default)==null?void 0:d.call(r)]}}));return t(Ae,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),n1={install(e){e.component(cc.name,cc),e.component(Go.name,Go)}};function o1(e,a){e.indexOf(a)===-1&&e.push(a)}const Um=(e,a,l)=>Math.min(Math.max(l,e),a),Vt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},dn=e=>typeof e=="number",ha=e=>Array.isArray(e)&&!dn(e[0]),s1=(e,a,l)=>{const o=a-e;return((l-e)%o+o)%o+e};function r1(e,a){return ha(e)?e[s1(0,e.length,a)]:e}const Ym=(e,a,l)=>-l*e+l*a+e,Jm=()=>{},ki=e=>e,Fs=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Wm(e,a){const l=e[e.length-1];for(let o=1;o<=a;o++){const r=Fs(0,a,o);e.push(Ym(l,1,r))}}function u1(e){const a=[0];return Wm(a,e-1),a}function c1(e,a=u1(e.length),l=ki){const o=e.length,r=o-a.length;return r>0&&Wm(a,r),d=>{let p=0;for(;p<o-2&&!(d<a[p+1]);p++);let f=Um(0,1,Fs(a[p],a[p+1],d));return f=r1(l,p)(f),Ym(e[p],e[p+1],f)}}const Km=e=>Array.isArray(e)&&dn(e[0]),Uo=e=>typeof e=="object"&&!!e.createAnimation,Ba=e=>typeof e=="function",d1=e=>typeof e=="string",Za={ms:e=>e*1e3,s:e=>e/1e3},Xm=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,m1=1e-7,p1=12;function f1(e,a,l,o,r){let d,p,f=0;do p=a+(l-a)/2,d=Xm(p,o,r)-e,d>0?l=p:a=p;while(Math.abs(d)>m1&&++f<p1);return p}function ja(e,a,l,o){if(e===a&&l===o)return ki;const r=d=>f1(d,0,1,e,l);return d=>d===0||d===1?d:Xm(r(d),a,o)}const g1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const o=l*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Um(0,1,r/e)},dc={ease:ja(.25,.1,.25,1),"ease-in":ja(.42,0,1,1),"ease-in-out":ja(.42,0,.58,1),"ease-out":ja(0,0,.58,1)},h1=/\((.*?)\)/;function mc(e){if(Ba(e))return e;if(Km(e))return ja(...e);if(dc[e])return dc[e];if(e.startsWith("steps")){const a=h1.exec(e);if(a){const l=a[1].split(",");return g1(parseFloat(l[0]),l[1].trim())}}return ki}class Qm{constructor(a,l=[0,1],{easing:o,duration:r=Vt.duration,delay:d=Vt.delay,endDelay:p=Vt.endDelay,repeat:f=Vt.repeat,offset:s,direction:c="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=ki,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,w)=>{this.resolve=h,this.reject=w}),o=o||Vt.easing,Uo(o)){const h=o.createAnimation(l);o=h.easing,l=h.keyframes||l,r=h.duration||r}this.repeat=f,this.easing=ha(o)?ki:mc(o),this.updateDuration(r);const m=c1(l,s,ha(o)?o.map(mc):ki);this.tick=h=>{var w;d=d;let b=0;this.pauseTime!==void 0?b=this.pauseTime:b=(h-this.startTime)*this.rate,this.t=b,b/=1e3,b=Math.max(b-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(b=this.totalDuration);const C=b/this.duration;let $=Math.floor(C),D=C%1;!D&&C>=1&&(D=1),D===1&&$--;const _=$%2;(c==="reverse"||c==="alternate"&&_||c==="alternate-reverse"&&!_)&&(D=1-D);const S=b>=this.totalDuration?1:Math.min(D,1),x=m(this.easing(S));a(x),this.pauseTime===void 0&&(this.playState==="finished"||b>=this.totalDuration+p)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class _1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const eo=new WeakMap;function Zm(e){return eo.has(e)||eo.set(e,{transforms:[],values:new Map}),eo.get(e)}function b1(e,a){return e.has(a)||e.set(a,new _1),e.get(a)}const v1=["","X","Y","Z"],S1=["translate","scale","rotate","skew"],mn={x:"translateX",y:"translateY",z:"translateZ"},pc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},y1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:pc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:ki},skew:pc},dl=new Map,Ps=e=>`--motion-${e}`,pn=["x","y","z"];S1.forEach(e=>{v1.forEach(a=>{pn.push(e+a),dl.set(Ps(e+a),y1[e])})});const w1=(e,a)=>pn.indexOf(e)-pn.indexOf(a),C1=new Set(pn),ep=e=>C1.has(e),A1=(e,a)=>{mn[a]&&(a=mn[a]);const{transforms:l}=Zm(e);o1(l,a),e.style.transform=k1(l)},k1=e=>e.sort(w1).reduce(x1,"").trim(),x1=(e,a)=>`${e} ${a}(var(${Ps(a)}))`,Yo=e=>e.startsWith("--"),fc=new Set;function $1(e){if(!fc.has(e)){fc.add(e);try{const{syntax:a,initialValue:l}=dl.has(e)?dl.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const to=(e,a)=>document.createElement("div").animate(e,a),gc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{to({opacity:[1]})}catch{return!1}return!0},finished:()=>!!to({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{to({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},io={},ua={};for(const e in gc)ua[e]=()=>(io[e]===void 0&&(io[e]=gc[e]()),io[e]);const B1=.015,T1=(e,a)=>{let l="";const o=Math.round(a/B1);for(let r=0;r<o;r++)l+=e(Fs(0,o-1,r))+", ";return l.substring(0,l.length-2)},hc=(e,a)=>Ba(e)?ua.linearEasing()?`linear(${T1(e,a)})`:Vt.easing:Km(e)?D1(e):e,D1=([e,a,l,o])=>`cubic-bezier(${e}, ${a}, ${l}, ${o})`;function L1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const I1=e=>Array.isArray(e)?e:[e];function Jo(e){return mn[e]&&(e=mn[e]),ep(e)?Ps(e):e}const Dl={get:(e,a)=>{a=Jo(a);let l=Yo(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const o=dl.get(a);o&&(l=o.initialValue)}return l},set:(e,a,l)=>{a=Jo(a),Yo(a)?e.style.setProperty(a,l):e.style[a]=l}};function tp(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function R1(e,a){var l;let o=(a==null?void 0:a.toDefaultUnit)||ki;const r=e[e.length-1];if(d1(r)){const d=((l=r.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";d&&(o=p=>p+d)}return o}function E1(){return window.__MOTION_DEV_TOOLS_RECORD}function z1(e,a,l,o={},r){const d=E1(),p=o.record!==!1&&d;let f,{duration:s=Vt.duration,delay:c=Vt.delay,endDelay:g=Vt.endDelay,repeat:m=Vt.repeat,easing:h=Vt.easing,persist:w=!1,direction:b,offset:C,allowWebkitAcceleration:$=!1,autoplay:D=!0}=o;const _=Zm(e),S=ep(a);let x=ua.waapi();S&&A1(e,a);const T=Jo(a),I=b1(_.values,T),M=dl.get(T);return tp(I.animation,!(Uo(h)&&I.generator)&&o.record!==!1),()=>{const V=()=>{var Q,Y;return(Y=(Q=Dl.get(e,T))!==null&&Q!==void 0?Q:M==null?void 0:M.initialValue)!==null&&Y!==void 0?Y:0};let P=L1(I1(l),V);const q=R1(P,M);if(Uo(h)){const Q=h.createAnimation(P,a!=="opacity",V,T,I);h=Q.easing,P=Q.keyframes||P,s=Q.duration||s}if(Yo(T)&&(ua.cssRegisterProperty()?$1(T):x=!1),S&&!ua.linearEasing()&&(Ba(h)||ha(h)&&h.some(Ba))&&(x=!1),x){M&&(P=P.map(ge=>dn(ge)?M.toDefaultUnit(ge):ge)),P.length===1&&(!ua.partialKeyframes()||p)&&P.unshift(V());const Q={delay:Za.ms(c),duration:Za.ms(s),endDelay:Za.ms(g),easing:ha(h)?void 0:hc(h,s),direction:b,iterations:m+1,fill:"both"};f=e.animate({[T]:P,offset:C,easing:ha(h)?h.map(ge=>hc(ge,s)):void 0},Q),f.finished||(f.finished=new Promise((ge,Be)=>{f.onfinish=ge,f.oncancel=Be}));const Y=P[P.length-1];f.finished.then(()=>{w||(Dl.set(e,T,Y),f.cancel())}).catch(Jm),$||(f.playbackRate=1.000001)}else if(r&&S)P=P.map(Q=>typeof Q=="string"?parseFloat(Q):Q),P.length===1&&P.unshift(parseFloat(V())),f=new r(Q=>{Dl.set(e,T,q?q(Q):Q)},P,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const Q=P[P.length-1];Dl.set(e,T,M&&dn(Q)?M.toDefaultUnit(Q):Q)}return p&&d(e,a,P,{duration:s,delay:c,easing:h,repeat:m,offset:C},"motion-one"),I.setAnimation(f),f&&!D&&f.pause(),f}}const F1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function P1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const M1=e=>e(),ip=(e,a,l=Vt.duration)=>new Proxy({animations:e.map(M1).filter(Boolean),duration:l,options:a},H1),V1=e=>e.animations[0],H1={get:(e,a)=>{const l=V1(e);switch(a){case"duration":return e.duration;case"currentTime":return Za.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(N1)).catch(Jm)),e.finished;case"stop":return()=>{e.animations.forEach(o=>tp(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Za.ms(l);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=l;return!0}return!1}},N1=e=>e.finished;function O1(e,a,l){return Ba(e)?e(a,l):e}function j1(e){return function(a,l,o={}){a=P1(a);const r=a.length,d=[];for(let p=0;p<r;p++){const f=a[p];for(const s in l){const c=F1(o,s);c.delay=O1(c.delay,p,r);const g=z1(f,s,l[s],c,e);d.push(g)}}return ip(d,o,o.duration)}}const q1=j1(Qm);function G1(e,a={}){return ip([()=>{const l=new Qm(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function U1(e,a,l){return(Ba(e)?G1:q1)(e,a,l)}const ve=(e,a)=>(l,{duration:o,keyframesOverride:r={}})=>U1(l,{...e,...r},{autoplay:!1,...a,duration:o}),_c=ve({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),Y1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),J1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),W1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),K1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),X1=ve({opacity:[0,1]},{duration:.5,offset:[0,1]}),Q1=ve({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Z1=ve({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),eS=ve({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),tS=ve({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),iS=ve({opacity:[1,0]},{duration:.5,offset:[0,1]}),aS=ve({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),lS=ve({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),nS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),oS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),sS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),rS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),uS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),cS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),mS=ve({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),pS=ve({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),fS=ve({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),gS=ve({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),hS=ve({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),_S=ve({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),bS=ve({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),vS=ve({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),SS=ve({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),yS=ve({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),wS=ve({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),ap={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},lp={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},np={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},CS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},AS=ve({transformOrigin:"top center",...ap},{offset:[0,1]}),kS=ve({transformOrigin:"bottom center",...ap},{offset:[0,1]}),xS=ve({transformOrigin:"center right",...lp},{offset:[0,1]}),$S=ve({transformOrigin:"center left",...lp},{offset:[0,1]}),BS=ve({transformOrigin:"top center",...np},{offset:[0,1]}),TS=ve({transformOrigin:"bottom center",...np},{offset:[0,1]}),bc=ve({transformOrigin:"center left",...CS},{offset:[0,1]}),Ii=.8,_a={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ba={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},va={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Sa={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},DS=ve({transformOrigin:"top center",transform:_a.transform,opacity:_a.opacity},{duration:Ii,offset:_a.offset}),LS=ve({transformOrigin:"bottom center",transform:_a.transform,opacity:_a.opacity},{duration:Ii,offset:_a.offset}),IS=ve({transformOrigin:"center right",transform:ba.transform,opacity:ba.opacity},{duration:Ii,offset:ba.offset}),RS=ve({transformOrigin:"center left",transform:ba.transform,opacity:ba.opacity},{duration:Ii,offset:ba.offset}),ES=ve({transformOrigin:"top center",transform:va.transform,opacity:va.opacity},{duration:Ii,offset:va.offset}),zS=ve({transformOrigin:"bottom center",transform:va.transform,opacity:va.opacity},{duration:Ii,offset:va.offset}),FS=ve({transformOrigin:"center right",transform:Sa.transform,opacity:Sa.opacity},{duration:Ii,offset:Sa.offset}),PS=ve({transformOrigin:"center left",transform:Sa.transform,opacity:Sa.opacity},{duration:Ii,offset:Sa.offset}),MS=ve({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),VS=ve({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),HS=ve({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),NS=ve({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),OS=ve({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),jS=ve({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),qS=ve({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),GS=ve({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),US=ve({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),YS={browse:[_c,Y1],"browse right":[_c,J1],drop:[W1,K1],fade:[X1,iS],"fade up":[Q1,aS],"fade down":[Z1,lS],"fade left":[eS,nS],"fade right":[tS,oS],fly:[sS,mS],"fly up":[rS,pS],"fly down":[uS,fS],"fly left":[cS,gS],"fly right":[dS,hS],"horizontal flip":[_S,bS],"vertical flip":[vS,SS],scale:[yS,wS],"slide up":[kS,TS],"slide down":[AS,BS],"slide left":[xS,bc],"slide right":[$S,bc],"swing up":[LS,zS],"swing down":[DS,ES],"swing left":[IS,FS],"swing right":[RS,PS],zoom:[MS,VS]},JS={bounce:[HS,void 0],flash:[NS,void 0],glow:[OS,void 0],jiggle:[jS,void 0],pulse:[qS,void 0],shake:[GS,void 0],tada:[US,void 0]},op=e=>({...YS,...JS})[e],WS=e=>{const[a,l]=op(e.animation),o=N(()=>e.duration?e.duration/1e3:.5),r=N(()=>(p,f)=>{if(!a)return f();const s=a(p,{duration:o.value});s.play(),s.finished.then(f)}),d=N(()=>(p,f)=>{if(!l)return f();const s=l(p,{duration:o.value});s.play(),s.finished.then(f)});return{onEnter:r,onLeave:d}},vc=z({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=WS(e);return{onEnter:a,onLeave:l}},render(){return t(Ln,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Wo=z({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=op(e.animation),o=N(()=>(d,p)=>{if(!a)return p();const f=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});f.play(),f.finished.then(p)}),r=N(()=>(d,p)=>{if(!l)return p();const f=l(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});f.play(),f.finished.then(p)});return{onEnter:o,onLeave:r}},render(){return t(sm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),KS={install(e){e.component(vc.name,vc),e.component(Wo.name,Wo)}},XS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:_v,Calendar:Iv,Checkbox:Rv,Dimmer:Ev,Dropdown:Vv,Embed:Hv,Modal:Jv,Popup:Kv,Progress:Zv,Rating:t1,Search:i1,Sidebar:a1,Slider:l1,Tab:n1,Transition:KS},Symbol.toStringTag,{value:"Module"})),ao=z({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...zs()},setup(e,{slots:a}){const l=N(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(ft,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}}}),QS=z({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=N(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function lo(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Nt(e)}const ZS=z({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...qm()},setup(e,{emit:a}){const{colorClasses:l}=Gm(e),o=N(()=>{var p,f,s,c,g;return te(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((p=e.actionsProps)!=null&&p.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((c=e.actionsProps)==null?void 0:c.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=G(e.showProgressUp?0:100),d=()=>{const p=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(f),r.value+=1;return}r.value<=0&&clearInterval(f),r.value-=1},p)},500)};return Di(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,l,o;return t(QS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,d,p,f;return[this.showProgress==="top"&&t(cn,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(ao,this.actionsProps,lo(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((p=this.actionsProps)!=null&&p.attached)&&t(ao,this.actionsProps,lo(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(ao,this.actionsProps,lo(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(cn,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),ey=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],ty=({defaultValue:e}={})=>({position:{type:String,validator:a=>ey.includes(a),default:e}}),iy=e=>({positionClasses:N(()=>e.position||"")});function ay(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Nt(e)}const ly=z({name:"SuiToastContainer",props:{horizontal:Boolean,...zs(),...ty({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=sp(),{attachedClasses:o}=jm(e),{positionClasses:r}=iy(e);return{classes:N(()=>te(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[0,`${d.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:p,marginBottom:f}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[`${d.offsetWidth}px`,0],f=[`${d.offsetHeight}px`,0],s=e.horizontal?{width:p}:{height:f},c=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...s,marginBottom:c}}}},render(){let e;return t(Bn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Wo,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},ay(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(ZS,aa({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),ny=G(1),Va=G([]),sp=()=>({items:Va,add:e=>{e.position=e.position||"top right",Va.value=[...Va.value,{id:ny.value++,...e}]},remove:e=>{Va.value=Va.value.filter(a=>a.id!==e)}}),ct=()=>{var e;const a=(e=Qt())==null?void 0:e.appContext,{add:l}=sp();return{toast:o=>{const{position:r,attached:d,horizontal:p}=o;ry({position:r,attached:d,horizontal:p})||sy(a,{position:r,attached:d,horizontal:p}),l(o)}}},oy=(e,{appContext:a,element:l}={})=>{const o=l||document.createElement("div");return a&&(e.appContext=a),Wl(e,o),{vNode:e,el:o}},sy=(e,{position:a="top right",attached:l,horizontal:o=!1}={})=>{const r=K(ly,{position:a,attached:l,horizontal:o}),{el:d}=oy(r,{appContext:e});return{vNode:r,el:d}},ry=({position:e="top right",attached:a,horizontal:l})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function uy(e){Object.values({...tv,...uv,...hv,...XS}).map(a=>e.use(a))}const cy={install:uy},dy=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Dm(),l=N(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const p=r.target.parentElement.getAttribute("href"),f=p.slice(p.indexOf("#")+1),s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth"})};return(r,d)=>{const p=y("SuiHeader"),f=y("SuiGridColumn"),s=y("SuiGridRow");return k(),_e(Ae,null,[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Te(e.label)+" ",1),t(u(Rs),{to:`${l.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(u(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(u(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),v("p",null,[Ui(r.$slots,"default",{},void 0,!0)])],64)}}}),my=De(dy,[["__scopeId","data-v-a2b78897"]]),py={class:"inner"},fy={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return k(),B(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[Ui(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[v("div",py,[Ci((k(),_e("pre",null,[v("code",null,Te(e.code)+`
`,1)])),[[u(Fl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},gy=De(fy,[["__scopeId","data-v-965e7ddc"]]),R={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),l=()=>a.value=!a.value;return(o,r)=>{const d=y("SuiGrid");return k(),_e("section",null,[t(d,{columns:2},{default:i(()=>[t(my,aa({label:e.label,"on-click":l},o.$attrs),{default:i(()=>[Ui(o.$slots,"description")]),_:3},16,["label"]),t(gy,{code:e.code,"hide-code":a.value},{default:i(()=>[Ui(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},hy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,_y={__name:"ButtonDoc",setup(e){const a=G("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>(k(),B(R,{label:"Button",code:hy},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1}))}},by=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,vy={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Emphasis",code:by},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(u(F),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(u(F),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(u(F),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},Sy=`<template>
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
</template>`,yy={__name:"AnimatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Animated",code:Sy},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(u(F),{animated:""},{default:i(()=>[t(u(Si),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(u(Si),{hidden:""},{default:i(()=>[t(u(W),{name:"arrow right"})]),_:1})]),_:1}),t(u(F),{animated:"vertical"},{default:i(()=>[t(u(Si),{visible:""},{default:i(()=>[t(u(W),{name:"shop"})]),_:1}),t(u(Si),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(u(F),{animated:"fade"},{default:i(()=>[t(u(Si),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(u(Si),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},wy=`<template>
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
</template>`,Cy={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Labeled",code:wy},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(u(F),{labeled:"right",as:"div"},{default:i(()=>[t(u(F),{icon:"heart",content:" Like"}),t(u(O),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(u(F),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(u(F),{icon:"heart",content:" Like"})]),_:1}),t(u(F),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(u(F),{icon:"fork"})]),_:1})]),_:1}))}},Ay=`<template>
  <SuiButton icon="cloud" />
</template>`,ky={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:Ay},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(u(F),{icon:"cloud"})]),_:1}))}},xy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,$y={__name:"LabeledIconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Labeled Icon",code:xy},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(u(F),{labeled:"",icon:"pause",content:"Pause"}),t(u(F),{labeled:"right",icon:"right arrow",content:"Next"}),t(u(F),{labeled:"",icon:""},{default:i(()=>[t(u(W),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},By=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,Ty={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic",code:By},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(u(F),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(F),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(F),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(u(F),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},Dy=`<template>
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
</template>`,Ly={__name:"TertiaryDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Tertiary",code:Dy},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(u(F),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(F),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(F),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(F),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(F),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(F),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(F),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(F),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(F),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(F),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(F),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(F),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(F),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(F),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(F),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Iy=`<template>
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
</template>`,Ry={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:Iy},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[t(u(F),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(F),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(F),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(F),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(F),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(F),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(F),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(F),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(F),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(F),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(F),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(F),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(F),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(F),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(F),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ey=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,zy={__name:"ButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Buttons",code:Ey},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(u(ft),null,{default:i(()=>[t(u(F),{content:"One"}),t(u(F),{content:"Two"}),t(u(F),{content:"Three"})]),_:1})]),_:1}))}},Fy=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Py={__name:"IconButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon Buttons",code:Fy},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(ft),{icon:""},{default:i(()=>[t(u(F),{icon:"align left"}),t(u(F),{icon:"align center"}),t(u(F),{icon:"align right"}),t(u(F),{icon:"align justify"})]),_:1})]),_:1}))}},My=v("div",{class:"or"},null,-1),Vy=v("div",{class:"or","data-text":"ou"},null,-1),Hy=`<template>
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
</template>`,Ny={__name:"ConditionalsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Conditionals",code:Hy},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(u(ft),null,{default:i(()=>[t(u(F),{content:"Cancel"}),My,t(u(F),{content:"Save",positive:""})]),_:1}),t(u(ft),null,{default:i(()=>[t(u(F),{content:"un"}),Vy,t(u(F),{content:"deux",positive:""})]),_:1})]),_:1}))}},Oy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,jy={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:Oy},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(u(F),{active:"",icon:"user",content:" Follow"})]),_:1}))}},qy=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Gy={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:qy},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(F),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Uy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Yy={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:Uy},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(u(F),{loading:"",content:"Loading"}),t(u(F),{loading:"double",primary:"",content:"Loading"}),t(u(F),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Jy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Wy={__name:"SocialDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Social",code:Jy},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(u(F),{facebook:"",icon:"facebook",content:" Facebook"}),t(u(F),{twitter:"",icon:"twitter",content:" Twitter"}),t(u(F),{vk:"",icon:"vk",content:"VK"}),t(u(F),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(u(F),{instagram:"",icon:"instagram",content:" Instagram"}),t(u(F),{youtube:"",icon:"youtube",content:" YouTube"}),t(u(F),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(u(F),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Ky=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Xy={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:Ky},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(u(F),{size:"mini",content:"Mini"}),t(u(F),{size:"tiny",content:"Tiny"}),t(u(F),{size:"small",content:"Small"}),t(u(F),{size:"medium",content:"Medium"}),t(u(F),{size:"large",content:"Large"}),t(u(F),{size:"big",content:"Big"}),t(u(F),{size:"huge",content:"Huge"}),t(u(F),{size:"massive",content:"Massive"})]),_:1}))}},Qy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Zy={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floated",code:Qy},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(u(F),{floated:"left",content:"Left Floated"}),t(u(F),{floated:"right",content:"Right Floated"})]),_:1}))}},ew=`<template>
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
</template>`,tw={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:ew},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(u(F),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(F),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(F),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(F),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(F),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(F),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(F),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(F),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(F),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(F),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(F),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(F),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(F),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},iw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,aw={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Compact",code:iw},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(u(F),{compact:"",content:"Hold"}),t(u(F),{compact:"",icon:"pause"}),t(u(F),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},lw=`<template>
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
<\/script>`,nw={__name:"ToggleDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(R,{label:"Toggle",code:lw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(u(F),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ow=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,sw={__name:"PositiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Positive",code:ow},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(u(F),{positive:"",content:"Positive Button"})]),_:1}))}},rw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,uw={__name:"NegativeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Negative",code:rw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(u(F),{negative:"",content:"Negative Button"})]),_:1}))}},cw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,dw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:cw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(u(F),{fluid:"",content:"Fits container"})]),_:1}))}},mw=`<template>
  <SuiButton circular icon="settings" />
</template>`,pw={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:mw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(u(F),{circular:"",icon:"settings"})]),_:1}))}},fw=v("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),gw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,hw={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertically Attached",code:gw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(u(F),{attached:"top",content:"Top"}),t(u(H),{attached:""},{default:i(()=>[fw]),_:1}),t(u(F),{attached:"bottom",content:"Bottom"})]),_:1}))}},_w=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,bw={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontally Attached",code:_w},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(u(F),{attached:"left",content:"Left"}),t(u(F),{attached:"right",content:"Right"})]),_:1}))}},vw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertical Buttons",code:vw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(u(ft),{vertical:""},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Feed")]),_:1}),t(u(F),null,{default:i(()=>[n("Messages")]),_:1}),t(u(F),null,{default:i(()=>[n("Events")]),_:1}),t(u(F),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,ww={__name:"StackableButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Stackable Buttons",code:yw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(u(ft),{stackable:""},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Feed")]),_:1}),t(u(F),null,{default:i(()=>[n("Messages")]),_:1}),t(u(F),null,{default:i(()=>[n("Events")]),_:1}),t(u(F),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,Aw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon Buttons",code:Cw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(u(ft),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(u(F),{icon:"pause",content:"Pause"}),t(u(F),{icon:"play",content:"Play"}),t(u(F),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},kw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"MixedGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Mixed Group",code:kw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(ft),null,{default:i(()=>[t(u(F),{labeled:"",icon:"left chevron",content:"Back"}),t(u(F),{icon:"stop",content:"Stop"}),t(u(F),{icon:"",labeled:"right"},{default:i(()=>[t(u(W),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},$w=`<template>
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
</template>`,Bw={__name:"EqualWidthDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Equal Width",code:$w},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(u(ft),{widths:5},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Overview")]),_:1}),t(u(F),null,{default:i(()=>[n("Specs")]),_:1}),t(u(F),null,{default:i(()=>[n("Warranty")]),_:1}),t(u(F),null,{default:i(()=>[n("Reviews")]),_:1}),t(u(F),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(u(ft),{widths:3},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Overview")]),_:1}),t(u(F),null,{default:i(()=>[n("Specs")]),_:1}),t(u(F),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Tw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Dw={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored Buttons",code:Tw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(ft),{color:"blue"},{default:i(()=>[t(u(F),null,{default:i(()=>[n("One")]),_:1}),t(u(F),null,{default:i(()=>[n("Two")]),_:1}),t(u(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Lw=`<template>
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
</template>`,Iw={__name:"BasicButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic Buttons",code:Lw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(u(ft),{basic:""},{default:i(()=>[t(u(F),null,{default:i(()=>[n("One")]),_:1}),t(u(F),null,{default:i(()=>[n("Two")]),_:1}),t(u(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(u(ft),null,{default:i(()=>[t(u(F),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(u(F),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(u(F),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Rw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Ew={__name:"GroupSizesDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Group Sizes",code:Rw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(ft),{size:"large"},{default:i(()=>[t(u(F),null,{default:i(()=>[n("One")]),_:1}),t(u(F),null,{default:i(()=>[n("Two")]),_:1}),t(u(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},zw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:_y},{id:"emphasis",label:"Emphasis",category:"Types",component:vy},{id:"animated",label:"Animated",category:"Types",component:yy},{id:"labeled",label:"Labeled",category:"Types",component:Cy},{id:"icon",label:"Icon",category:"Types",component:ky},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:$y},{id:"basic",label:"Basic",category:"Types",component:Ty},{id:"tertiary",label:"Tertiary",category:"Types",component:Ly},{id:"inverted",label:"Inverted",category:"Types",component:Ry},{id:"buttons",label:"Buttons",category:"Groups",component:zy},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Py},{id:"content",label:"Content",category:"Content",component:Ny},{id:"active",label:"Active",category:"States",component:jy},{id:"disabled",label:"Disabled",category:"States",component:Gy},{id:"loading",label:"Loading",category:"States",component:Yy},{id:"social",label:"Social",category:"Variations",component:Wy},{id:"size",label:"Size",category:"Variations",component:Xy},{id:"floated",label:"Floated",category:"Variations",component:Zy},{id:"colored",label:"Colored",category:"Variations",component:tw},{id:"compact",label:"Compact",category:"Variations",component:aw},{id:"toggle",label:"Toggle",category:"Variations",component:nw},{id:"positive",label:"Positive",category:"Variations",component:sw},{id:"negative",label:"Negative",category:"Variations",component:uw},{id:"fluid",label:"Fluid",category:"Variations",component:dw},{id:"circular",label:"Circular",category:"Variations",component:pw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:hw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:bw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:Sw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:ww},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:Aw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:xw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Bw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Dw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Iw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Ew}];return(l,o)=>(k(),B(ut,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Fw=v("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,Mw={__name:"ContainerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Container",code:Pw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(u(Ai),null,{default:i(()=>[Fw]),_:1})]),_:1}))}},Vw=v("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Hw=`<template>
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
</template>`,Nw={__name:"TextContainerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Container",code:Hw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(u(Ai),{text:""},{default:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Vw]),_:1})]),_:1}))}},Ow=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,jw={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Alignment",code:Ow},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(u(Ai),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(u(Ai),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(u(Ai),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},qw=v("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Gw=`<template>
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
</template>`,Uw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:Gw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(u(Ai),{fluid:""},{default:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),qw]),_:1})]),_:1}))}},Yw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Mw},{id:"text-container",label:"Text Container",category:"Types",component:Nw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:jw},{id:"fluid",label:"Fluid",category:"Variations",component:Uw}];return(l,o)=>(k(),B(ut,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Jw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Ww={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Divider",code:Jw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Pe)),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Kw=v("label",null,"Username",-1),Xw=v("input",{type:"text",placeholder:"Username"},null,-1),Qw=v("label",null,"Password",-1),Zw=v("input",{type:"password",placeholder:"Password"},null,-1),eC=`<template>
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
</template>`,tC={__name:"VerticalDividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertical Divider",code:eC},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(u(H),{placeholder:""},{default:i(()=>[t(u($a),{columns:"equal"},{default:i(()=>[t(u(wt),null,{default:i(()=>[t(u(zt),null,{default:i(()=>[t(u(at),null,{default:i(()=>[Kw,Xw]),_:1}),t(u(at),null,{default:i(()=>[Qw,Zw]),_:1}),t(u(F),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(u(wt),{textAlign:"middle"},{default:i(()=>[t(u(F),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(u(Pe),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},iC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,aC={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal Divider",code:iC},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(u(H),{basic:"",textAlign:"center"},{default:i(()=>[t(u(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(u(Pe),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(u(F),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},lC=`<template>
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
</template>`,nC={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal Alignment",code:lC},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(u(Pe),{horizontal:"",textAlign:"left"},{default:i(()=>[t(u(W),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(u(Pe),{horizontal:"",textAlign:"center"},{default:i(()=>[t(u(W),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(u(Pe),{horizontal:"",textAlign:"right"},{default:i(()=>[t(u(W),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},oC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,sC={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:oC},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Pe),{inverted:""}),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Pe),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},rC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,uC={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:rC},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(u(H),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(u(Pe),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},cC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,dC={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Hidden",code:cC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(u(pe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Pe),{hidden:""}),t(u(pe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},mC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,pC={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Section",code:mC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(u(pe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Pe),{section:""}),t(u(pe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},fC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,gC={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Clearing",code:fC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(pe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(u(Pe),{clearing:""}),t(u(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},hC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,_C={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:hC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(u(Pe),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(u(Pe),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(u(Pe),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(u(Pe),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(u(Pe),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(u(Pe),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(u(Pe),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},bC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Ww},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:tC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:aC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:nC},{id:"inverted",label:"Inverted",category:"Variations",component:sC},{id:"fitted",label:"Fitted",category:"Variations",component:uC},{id:"hidden",label:"Hidden",category:"Variations",component:dC},{id:"section",label:"Section",category:"Variations",component:pC},{id:"clearing",label:"Clearing",category:"Variations",component:gC},{id:"size",label:"Size",category:"Variations",component:_C}];return(l,o)=>(k(),B(ut,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},vC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,SC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:vC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(u(kt),{name:"anguished",disabled:""})]),_:1}))}},yC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,wC={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:yC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(u(kt),{name:"angel",loading:""}),t(u(kt),{name:"blush",loading:""}),t(u(kt),{name:"grin",loading:""})]),_:1}))}},CC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,AC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:CC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(u(kt),{name:"relaxed",size:"small"}),t(u(kt),{name:"relaxed",size:"medium"}),t(u(kt),{name:"relaxed",size:"large"}),t(u(kt),{name:"relaxed",size:"big"})]),_:1}))}},kC=`<template>
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
</template>`,xC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Autosizing",code:kC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(pe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(kt),{name:"relaxed"})]),_:1}),t(u(F),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(kt),{name:"relaxed"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(kt),{name:"relaxed"})]),_:1})]),_:1}))}},$C=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,BC={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:$C},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(u(kt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},TC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:SC},{id:"loading",label:"Loading",category:"States",component:wC},{id:"size",label:"Size",category:"Variations",component:AC},{id:"autosizing",label:"Autosizing",category:"Variations",component:xC},{id:"link",label:"Link",category:"Variations",component:BC}];return(l,o)=>(k(),B(ut,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},DC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,LC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:DC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(u(jt),{name:"de",size:"small"}),t(u(jt),{name:"fr",size:"medium"}),t(u(jt),{name:"li",size:"large"}),t(u(jt),{name:"jp",size:"big"}),t(u(jt),{name:"gb",size:"huge"}),t(u(jt),{name:"un",size:"massive"})]),_:1}))}},IC=`<template>
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
</template>`,RC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Autosizing",code:IC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(pe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(jt),{name:"us"})]),_:1}),t(u(F),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(jt),{name:"eu"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(jt),{name:"pirate"})]),_:1})]),_:1}))}},EC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:LC},{id:"autosizing",label:"Autosizing",category:"Types",component:RC}];return(l,o)=>(k(),B(ut,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},zC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,FC={__name:"PageHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Page Headers",code:zC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(u(pe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(u(pe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(u(pe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(u(pe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(u(pe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},PC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,MC={__name:"ContentHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Content Headers",code:PC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(u(pe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(u(pe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(u(pe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(u(pe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(u(pe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},VC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,HC={__name:"IconHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon Headers",code:VC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(u(pe),{icon:""},{default:i(()=>[t(u(W),{name:"settings"}),t(u(Xl),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(u(Bi),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},NC=v("span",null,"$10.99",-1),OC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,jC={__name:"SubHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Sub Headers",code:OC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(u(pe),{sub:""},{default:i(()=>[n("Price")]),_:1}),NC]),_:1}))}},qC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,GC={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image",code:qC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[t(u(ne),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,YC={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:UC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[t(u(W),{name:"plug"}),t(u(Xl),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},JC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,WC={__name:"SubheaderDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Subheader",code:JC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(u(Bi),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},KC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,XC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:KC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(u(pe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},QC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,ZC={__name:"DividingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Dividing",code:QC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(u(pe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},eA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,tA={__name:"BlockDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Block",code:eA},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(u(pe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},iA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,aA={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Attached",code:iA},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(u(pe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(u(H),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},lA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,nA={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floating",code:lA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(u(H),{clearing:""},{default:i(()=>[t(u(pe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(u(pe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},oA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,sA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Alignment",code:oA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(pe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(u(pe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(u(pe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(u(pe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},rA=`<template>
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
</template>`,uA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:rA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(u(pe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(pe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(pe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(pe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(pe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(pe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(pe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(pe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(pe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(pe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(pe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(pe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(pe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(pe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},cA=`<template>
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
</template>`,dA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:cA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[t(u(pe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(pe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},mA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:FC},{id:"content-headers",label:"Content Headers",category:"Types",component:MC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:HC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:jC},{id:"image",label:"Image",category:"Content",component:GC},{id:"icon",label:"Icon",category:"Content",component:YC},{id:"subheader",label:"Subheader",category:"Content",component:WC},{id:"disabled",label:"Disabled",category:"States",component:XC},{id:"dividing",label:"Dividing",category:"Variations",component:ZC},{id:"block",label:"Block",category:"Variations",component:tA},{id:"attached",label:"Attached",category:"Variations",component:aA},{id:"floating",label:"Floating",category:"Variations",component:nA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:sA},{id:"colored",label:"Colored",category:"Variations",component:uA},{id:"inverted",label:"Inverted",category:"Variations",component:dA}];return(l,o)=>(k(),B(ut,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},pA=`<template>
  <SuiIcon name="users" disabled />
</template>`,fA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:pA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(u(W),{name:"users",disabled:""})]),_:1}))}},gA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,hA={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:gA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(u(W),{name:"spinner",loading:""}),t(u(W),{name:"notched circle",loading:""}),t(u(W),{name:"asterisk",loading:""})]),_:1}))}},_A=v("br",null,null,-1),bA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,vA={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fitted",code:bA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[v("div",null,[n(" This icon "),t(u(W),{name:"help",fitted:""}),n(" is fitted. "),_A,n(" This icon "),t(u(W),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},SA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,yA={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:SA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(u(W),{name:"home",size:"mini"}),t(u(W),{name:"home",size:"tiny"}),t(u(W),{name:"home",size:"small"}),t(u(W),{name:"home"}),t(u(W),{name:"home",size:"large"}),t(u(W),{name:"home",size:"big"}),t(u(W),{name:"home",size:"huge"}),t(u(W),{name:"home",size:"massive"})]),_:1}))}},wA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,CA={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:wA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(u(W),{name:"close",link:""}),t(u(W),{name:"help",link:""})]),_:1}))}},AA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,kA={__name:"FlippedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Flipped",code:AA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(u(W),{name:"cloud",flipped:"horizontally"}),t(u(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},xA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,$A={__name:"RotatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Rotated",code:xA},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(u(W),{name:"cloud",rotated:"clockwise"}),t(u(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},BA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,TA={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:BA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(u(W),{name:"users",circular:""}),t(u(W),{name:"users",circular:"",color:"teal"}),t(u(W),{name:"users",circular:"",inverted:""}),t(u(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},DA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,LA={__name:"CircularColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular Colored",code:DA},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(W),{name:"users",circular:"",colored:"",color:"red"}),t(u(W),{name:"users",circular:"",colored:"",color:"green"}),t(u(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},IA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,RA={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Bordered",code:IA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(u(W),{name:"users",bordered:""}),t(u(W),{name:"users",bordered:"",color:"teal"}),t(u(W),{name:"users",bordered:"",inverted:"",color:"black"}),t(u(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},EA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,zA={__name:"BorderedColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Bordered Colored",code:EA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(W),{name:"users",bordered:"",colored:"",color:"red"}),t(u(W),{name:"users",bordered:"",colored:"",color:"green"}),t(u(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},FA=`<template>
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
</template>`,PA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:FA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(u(W),{name:"users",primary:""}),t(u(W),{name:"users",secondary:""}),t(u(W),{name:"users",color:"red"}),t(u(W),{name:"users",color:"orange"}),t(u(W),{name:"users",color:"yellow"}),t(u(W),{name:"users",color:"olive"}),t(u(W),{name:"users",color:"green"}),t(u(W),{name:"users",color:"teal"}),t(u(W),{name:"users",color:"blue"}),t(u(W),{name:"users",color:"violet"}),t(u(W),{name:"users",color:"purple"}),t(u(W),{name:"users",color:"pink"}),t(u(W),{name:"users",color:"brown"}),t(u(W),{name:"users",color:"grey"}),t(u(W),{name:"users",color:"black"})]),_:1}))}},MA=`<template>
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
</template>`,VA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:MA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(u(W),{name:"users",inverted:""}),t(u(W),{name:"users",inverted:"",primary:""}),t(u(W),{name:"users",inverted:"",secondary:""}),t(u(W),{name:"users",inverted:"",color:"red"}),t(u(W),{name:"users",inverted:"",color:"orange"}),t(u(W),{name:"users",inverted:"",color:"yellow"}),t(u(W),{name:"users",inverted:"",color:"olive"}),t(u(W),{name:"users",inverted:"",color:"green"}),t(u(W),{name:"users",inverted:"",color:"teal"}),t(u(W),{name:"users",inverted:"",color:"blue"}),t(u(W),{name:"users",inverted:"",color:"violet"}),t(u(W),{name:"users",inverted:"",color:"purple"}),t(u(W),{name:"users",inverted:"",color:"pink"}),t(u(W),{name:"users",inverted:"",color:"brown"}),t(u(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},HA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,NA={__name:"IconsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icons",code:HA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(u(yi),{size:"huge"},{default:i(()=>[t(u(W),{name:"circle outline",size:"big"}),t(u(W),{name:"user"})]),_:1}),t(u(yi),{size:"huge"},{default:i(()=>[t(u(W),{name:"dont",size:"big",color:"red"}),t(u(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},OA=`<template>
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
</template>`,jA={__name:"CornerIconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Corner Icon",code:OA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(u(yi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"top left"})]),_:1}),t(u(yi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"top right"})]),_:1}),t(u(yi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"bottom left"})]),_:1}),t(u(yi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},qA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:fA},{id:"loading",label:"Loading",category:"States",component:hA},{id:"fitted",label:"Fitted",category:"Variations",component:vA},{id:"size",label:"Size",category:"Variations",component:yA},{id:"link",label:"Link",category:"Variations",component:CA},{id:"flipped",label:"Flipped",category:"Variations",component:kA},{id:"rotated",label:"Rotated",category:"Variations",component:$A},{id:"circular",label:"Circular",category:"Variations",component:TA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:LA},{id:"bordered",label:"Bordered",category:"Variations",component:RA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:zA},{id:"colored",label:"Colored",category:"Variations",component:PA},{id:"inverted",label:"Inverted",category:"Variations",component:VA},{id:"icons",label:"Icons",category:"Groups",component:NA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:jA}];return(l,o)=>(k(),B(ut,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},GA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,UA={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image",code:GA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},YA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,JA={__name:"ImageLinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image Link",code:YA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(u(ne),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},WA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,KA={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Hidden",code:WA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},XA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,QA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:XA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},ZA=v("span",null,"Username",-1),e0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,t0={__name:"AvatarDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Avatar",code:e0},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),ZA]),_:1}))}},i0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,a0={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Bordered",code:i0},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(u(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},l0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,n0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:l0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},o0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,s0={__name:"RoundedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Rounded",code:o0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(u(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},r0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,u0={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:r0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(u(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},c0=v("span",null,"Top Aligned",-1),d0=v("span",null,"Middle Aligned",-1),m0=v("span",null,"Bottom Aligned",-1),p0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,f0={__name:"VerticallyAlignedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertically Aligned",code:p0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(u(ne),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),c0,t(u(Pe)),t(u(ne),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),d0,t(u(Pe)),t(u(ne),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),m0]),_:1}))}},g0=v("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),h0=v("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),_0=v("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),b0=`<template>
  <SuiSegment>
    <SuiImage centered size="medium" src="/images/wireframe/image.png" />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <SuiImage centered size="small" src="/images/wireframe/image-text.png" />
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
  </SuiSegment>
</template>`,v0={__name:"CenteredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Centered",code:b0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(ne),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),g0,h0,t(u(ne),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),_0]),_:1})]),_:1}))}},S0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,y0={__name:"SpacedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Spaced",code:S0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(H),null,{default:i(()=>[v("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(u(ne),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},w0=v("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),C0=v("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),A0=v("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),k0=`<template>
  <SuiSegment>
    <SuiImage floated="left" size="small" src="/images/wireframe/image-text.png" />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
    <SuiImage floated="right" size="small" src="/images/wireframe/image-text.png" />
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
  </SuiSegment>
</template>`,x0={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floated",code:k0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(ne),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),w0,t(u(ne),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),C0,A0]),_:1})]),_:1}))}},$0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,B0={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:$0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(u(ne),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Pe),{hidden:""}),t(u(ne),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Pe),{hidden:""}),t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Pe),{hidden:""}),t(u(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},T0=`<template>
  <SuiImageGroup size="tiny">
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
  </SuiImageGroup>
  <SuiDivider hidden />
  <SuiImageGroup size="small">
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
  </SuiImageGroup>
</template>`,D0={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:T0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(u(Ql),{size:"tiny"},{default:i(()=>[t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Pe),{hidden:""}),t(u(Ql),{size:"small"},{default:i(()=>[t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},L0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:UA},{id:"image-link",label:"Image Link",category:"Types",component:JA},{id:"hidden",label:"Hidden",category:"States",component:KA},{id:"disabled",label:"Disabled",category:"States",component:QA},{id:"avatar",label:"Avatar",category:"Variations",component:t0},{id:"bordered",label:"Bordered",category:"Variations",component:a0},{id:"fluid",label:"Fluid",category:"Variations",component:n0},{id:"rounded",label:"Rounded",category:"Variations",component:s0},{id:"circular",label:"Circular",category:"Variations",component:u0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:f0},{id:"centered",label:"Centered",category:"Variations",component:v0},{id:"spaced",label:"Spaced",category:"Variations",component:y0},{id:"floated",label:"Floated",category:"Variations",component:x0},{id:"size",label:"Size",category:"Variations",component:B0},{id:"group-size",label:"Size",category:"Groups",component:D0}];return(l,o)=>(k(),B(ut,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},I0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,R0={__name:"InputDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Input",code:I0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(u(Ze),{placeholder:"Search..."})]),_:1}))}},E0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,z0={__name:"FocusDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Focus",code:E0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(u(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},F0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,P0={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:F0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(u(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(u(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},M0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,V0={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:M0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(u(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},H0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,N0={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Error",code:H0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(u(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},O0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,j0={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:O0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(u(Ze),{icon:"search",placeholder:"Search..."}),t(u(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},q0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,G0={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Labeled",code:q0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(u(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},U0=`<template>
  <SuiInput action="Search" />
</template>`,Y0={__name:"ActionDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Action",code:U0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(u(Ze),{action:"Search"})]),_:1}))}},J0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,W0={__name:"TransparentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Transparent",code:J0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(u(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},K0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,X0={__name:"InvertedDoc",setup(e){return(a,l)=>{const o=y("SuiSegment");return k(),B(R,{label:"Inverted",code:K0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(u(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},Q0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,Z0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:Q0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(u(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},ek=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,tk={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:ek},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(u(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(u(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(u(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(u(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(u(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(u(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},ik={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:R0},{id:"focus",label:"Focus",category:"States",component:z0},{id:"loading",label:"Loading",category:"States",component:P0},{id:"disabled",label:"Disabled",category:"States",component:V0},{id:"error",label:"Error",category:"States",component:N0},{id:"icon",label:"Icon",category:"Variations",component:j0},{id:"labeled",label:"Labeled",category:"Variations",component:G0},{id:"action",label:"Action",category:"Variations",component:Y0},{id:"transparent",label:"Transparent",category:"Variations",component:W0},{id:"inverted",label:"Inverted",category:"Variations",component:X0},{id:"fluid",label:"Fluid",category:"Variations",component:Z0},{id:"size",label:"Size",category:"Variations",component:tk}];return(l,o)=>(k(),B(ut,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},ak=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,lk={__name:"LabelDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Label",code:ak},{description:i(()=>[n(" A label ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},Ko="/vue-fomantic-ui/images/avatar/small/joe.jpg",rp="/vue-fomantic-ui/images/avatar/small/veronika.jpg",oi="/vue-fomantic-ui/images/avatar/small/elliot.jpg",nk=v("img",{src:Ko},null,-1),ok=v("img",{src:rp},null,-1),sk=v("img",{src:oi},null,-1),rk=`<template>
  <SuiLabel as="a" image>
    <img src="/images/avatar/small/joe.jpg" />
    Joe
  </SuiLabel>
  <SuiLabel as="a" image color="blue">
    <img src="/images/avatar/small/veronika.jpg" />
    Veronika
    <SuiLabelDetail>Friend</SuiLabelDetail>
  </SuiLabel>
  <SuiLabel as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
    <SuiIcon name="delete" />
  </SuiLabel>
</template>`,uk={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image",code:rk},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(u(O),{as:"a",image:""},{default:i(()=>[nk,n(" Joe ")]),_:1}),t(u(O),{as:"a",image:"",color:"blue"},{default:i(()=>[ok,n(" Veronika "),t(u(Ki),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(u(O),{as:"a",image:""},{default:i(()=>[sk,n(" Elliot "),t(u(W),{name:"delete"})]),_:1})]),_:1}))}},ck=v("input",{type:"text",placeholder:"First Name"},null,-1),dk=v("input",{type:"text"},null,-1),mk=v("input",{type:"text",placeholder:"Username"},null,-1),pk=v("input",{type:"password"},null,-1),fk=`<template>
  <SuiForm fluid>
    <SuiFormField>
      <input type="text" placeholder="First Name" />
      <SuiLabel pointing>Please enter a value</SuiLabel>
    </SuiFormField>
    <SuiDivider />
    <SuiFormField>
      <SuiLabel pointing="below">Please enter a value</SuiLabel>
      <input type="text" />
    </SuiFormField>
    <SuiDivider />
    <SuiFormField inline>
      <input type="text" placeholder="Username" />
      <SuiLabel pointing="left" color="red" basic>That name is taken!</SuiLabel>
    </SuiFormField>
    <SuiDivider />
    <SuiFormField inline>
      <SuiLabel pointing="right" color="red" basic>Your password must be 6 characters or more</SuiLabel>
      <input type="password" />
    </SuiFormField>
  </SuiForm>
</template>`,gk={__name:"PointingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Pointing",code:fk},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(u(zt),{fluid:""},{default:i(()=>[t(u(at),null,{default:i(()=>[ck,t(u(O),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(u(Pe)),t(u(at),null,{default:i(()=>[t(u(O),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),dk]),_:1}),t(u(Pe)),t(u(at),{inline:""},{default:i(()=>[mk,t(u(O),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(u(Pe)),t(u(at),{inline:""},{default:i(()=>[t(u(O),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),pk]),_:1})]),_:1})]),_:1}))}},hk=`<template>
  <SuiGrid :columns="2">
    <SuiGridColumn>
      <SuiImage
        :label="{ as: 'a', corner: 'left', icon: 'heart' }"
        src="/images/wireframe/image.png"
      >
      </SuiImage>
    </SuiGridColumn>
    <SuiGridColumn>
      <SuiImage
        :label="{ as: 'a', color: 'red', corner: 'right', icon: 'save' }"
        src="/images/wireframe/image.png"
      >
      </SuiImage>
    </SuiGridColumn>
  </SuiGrid>
</template>`,_k={__name:"CornerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Corner",code:hk},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(u($a),{columns:2},{default:i(()=>[t(u(wt),null,{default:i(()=>[t(u(ne),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(wt),null,{default:i(()=>[t(u(ne),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},bk=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,vk={__name:"TagDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Tag",code:bk},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(u(O),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(u(O),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(u(O),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},Sk=v("span",null,"Account Details",-1),yk=v("span",null,"User Reviews",-1),wk=v("span",null,"Technical Specifications",-1),Ck=v("span",null,"User Reviews",-1),Ak=`<template>
  <SuiGrid :columns="2">
    <SuiGridColumn>
      <SuiSegment raised>
        <SuiLabel as="a" ribbon color="red">Overview</SuiLabel>
        <span>Account Details</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

        <SuiLabel as="a" ribbon color="blue">Community</SuiLabel>
        <span>User Reviews</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </SuiGridColumn>
    <SuiGridColumn>
      <SuiSegment raised>
        <SuiLabel as="a" ribbon="right" color="orange">Specs</SuiLabel>
        <span>Technical Specifications</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

        <SuiLabel as="a" ribbon="right" color="teal">Reviews</SuiLabel>
        <span>User Reviews</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </SuiGridColumn>
  </SuiGrid>
</template>`,kk={__name:"RibbonDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Ribbon",code:Ak},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(u($a),{columns:2},{default:i(()=>[t(u(wt),null,{default:i(()=>[t(u(H),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),Sk,t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),yk,t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(wt),null,{default:i(()=>[t(u(H),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),wk,t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),Ck,t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},xk=`<template>
  <SuiGrid :columns="3">
    <SuiGridRow>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top">HTML</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom">CSS</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top right">Code</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
    </SuiGridRow>

    <SuiGridRow>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top left">View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom left">User View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom right">Admin View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
    </SuiGridRow>
  </SuiGrid>
</template>`,$k={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Attached",code:xk},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(u($a),{columns:3},{default:i(()=>[t(u(tn),null,{default:i(()=>[t(u(wt),null,{default:i(()=>[t(u(H),{padded:""},{default:i(()=>[t(u(O),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(wt),null,{default:i(()=>[t(u(H),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(wt),null,{default:i(()=>[t(u(H),{padded:""},{default:i(()=>[t(u(O),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(u(tn),null,{default:i(()=>[t(u(wt),null,{default:i(()=>[t(u(H),{padded:""},{default:i(()=>[t(u(O),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(wt),null,{default:i(()=>[t(u(H),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(wt),null,{default:i(()=>[t(u(H),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Bk=`<template>
  <SuiList divided selection>
    <SuiListItem>
      <SuiLabel color="red" horizontal>Fruit</SuiLabel>
      Kumquats
    </SuiListItem>
    <SuiListItem>
      <SuiLabel color="purple" horizontal>Candy</SuiLabel>
      Ice Cream
    </SuiListItem>
    <SuiListItem>
      <SuiLabel color="red" horizontal>Fruit</SuiLabel>
      Orange
    </SuiListItem>
    <SuiListItem>
      <SuiLabel horizontal>Dog</SuiLabel>
      Poodle
    </SuiListItem>
  </SuiList>
</template>`,Tk={__name:"HorizontalDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal",code:Bk},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(u(Fo),{divided:"",selection:""},{default:i(()=>[t(u(ra),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(u(ra),null,{default:i(()=>[t(u(O),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(u(ra),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(u(ra),null,{default:i(()=>[t(u(O),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},Dk=`<template>
  <SuiMenu compact>
    <SuiMenuItem>
      <SuiIcon name="mail" /> Messages
      <SuiLabel floating color="red">22</SuiLabel>
    </SuiMenuItem>
    <SuiMenuItem>
      <SuiIcon name="users" /> Friends
      <SuiLabel floating color="teal">22</SuiLabel>
    </SuiMenuItem>
  </SuiMenu>
</template>`,Lk={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floating",code:Dk},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(u(Po),{compact:""},{default:i(()=>[t(u(an),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" Messages "),t(u(O),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(u(an),null,{default:i(()=>[t(u(W),{name:"users"}),n(" Friends "),t(u(O),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ik=`<template>
  <SuiSegment inverted>
    <SuiLabel as="a" inverted primary>Primary</SuiLabel>
    <SuiLabel as="a" inverted secondary>Secondary</SuiLabel>
    <SuiLabel as="a" inverted color="red">Red</SuiLabel>
    <SuiLabel as="a" inverted color="orange">Orange</SuiLabel>
    <SuiLabel as="a" inverted color="yellow">Yellow</SuiLabel>
    <SuiLabel as="a" basic inverted color="olive">Olive</SuiLabel>
    <SuiLabel as="a" basic inverted color="green">Green</SuiLabel>
    <SuiLabel as="a" basic inverted color="teal">Teal</SuiLabel>
    <SuiLabel as="a" basic inverted color="blue">Blue</SuiLabel>
    <SuiLabel as="a" basic inverted color="violet">Violet</SuiLabel>
    <SuiLabel as="a" tag inverted color="purple">Purple</SuiLabel>
    <SuiLabel as="a" tag inverted color="pink">Pink</SuiLabel>
    <SuiLabel as="a" tag inverted color="brown">Brown</SuiLabel>
    <SuiLabel as="a" tag inverted color="grey">Grey</SuiLabel>
    <SuiLabel as="a" tag inverted color="black">Black</SuiLabel>
  </SuiSegment>
</template>`,Rk={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:Ik},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[t(u(O),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ek=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,zk={__name:"DetailDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Detail",code:Ek},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(u(O),null,{default:i(()=>[n(" Dogs "),t(u(Ki),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Fk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    Mail
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="checkmark" />
    Test Passed
  </SuiLabel>
  <SuiLabel icon="dog" />
  <SuiLabel icon="cat" />
</template>`,Pk={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:Fk},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" Mail ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(W),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(u(O),{icon:"dog"}),t(u(O),{icon:"cat"})]),_:1}))}},Mk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Vk={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:Mk},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(u(O),{as:"a"},{default:i(()=>[t(u(W),{name:"mail"}),n(" 23 ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" 23 "),t(u(Ki),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Hk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Nk={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:Hk},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(O),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Ok=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,jk={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:Ok},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(u(O),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},qk=`<template>
  <SuiLabel circular color="red">2</SuiLabel>
  <SuiLabel circular color="orange">2</SuiLabel>
  <SuiLabel circular color="yellow">2</SuiLabel>
  <SuiLabel circular color="olive">2</SuiLabel>
  <SuiLabel circular color="green">2</SuiLabel>
  <SuiLabel circular color="teal">2</SuiLabel>
  <SuiLabel circular color="blue">2</SuiLabel>
  <SuiLabel circular color="violet">2</SuiLabel>
  <SuiLabel circular color="purple">2</SuiLabel>
  <SuiLabel circular color="pink">2</SuiLabel>
  <SuiLabel circular color="brown">2</SuiLabel>
  <SuiLabel circular color="grey">2</SuiLabel>
  <SuiLabel circular color="black">2</SuiLabel>
</template>`,Gk={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:qk},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(u(O),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},Uk=v("img",{src:oi},null,-1),Yk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Jk={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic",code:Yk},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(u(O),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(u(O),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(u(O),{as:"a",basic:"",image:""},{default:i(()=>[Uk,n(" Elliot ")]),_:1}),t(u(O),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(u(O),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Wk=`<template>
  <SuiLabel as="a" primary>Primary</SuiLabel>
  <SuiLabel as="a" secondary>Secondary</SuiLabel>
  <SuiLabel as="a" color="red">Red</SuiLabel>
  <SuiLabel as="a" color="orange">Orange</SuiLabel>
  <SuiLabel as="a" color="yellow">Yellow</SuiLabel>
  <SuiLabel as="a" color="olive">Olive</SuiLabel>
  <SuiLabel as="a" color="green">Green</SuiLabel>
  <SuiLabel as="a" color="teal">Teal</SuiLabel>
  <SuiLabel as="a" color="blue">Blue</SuiLabel>
  <SuiLabel as="a" color="violet">Violet</SuiLabel>
  <SuiLabel as="a" color="purple">Purple</SuiLabel>
  <SuiLabel as="a" color="pink">Pink</SuiLabel>
  <SuiLabel as="a" color="brown">Brown</SuiLabel>
  <SuiLabel as="a" color="grey">Grey</SuiLabel>
  <SuiLabel as="a" color="black">Black</SuiLabel>
</template>`,Kk={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:Wk},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(u(O),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Xk=`<template>
  <SuiLabel as="a" basic tag primary>Primary</SuiLabel>
  <SuiLabel as="a" basic tag secondary>Secondary</SuiLabel>
  <SuiLabel as="a" basic tag color="red">Red</SuiLabel>
  <SuiLabel as="a" basic tag color="orange">Orange</SuiLabel>
  <SuiLabel as="a" basic tag color="yellow">Yellow</SuiLabel>
  <SuiLabel as="a" basic tag color="olive">Olive</SuiLabel>
  <SuiLabel as="a" basic tag color="green">Green</SuiLabel>
  <SuiLabel as="a" basic tag color="teal">Teal</SuiLabel>
  <SuiLabel as="a" basic tag color="blue">Blue</SuiLabel>
  <SuiLabel as="a" basic tag color="violet">Violet</SuiLabel>
  <SuiLabel as="a" basic tag color="purple">Purple</SuiLabel>
  <SuiLabel as="a" basic tag color="pink">Pink</SuiLabel>
  <SuiLabel as="a" basic tag color="brown">Brown</SuiLabel>
  <SuiLabel as="a" basic tag color="grey">Grey</SuiLabel>
  <SuiLabel as="a" basic tag color="black">Black</SuiLabel>
</template>`,Qk={__name:"BasicTagDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic Tag",code:Xk},{description:i(()=>[]),example:i(()=>[t(u(O),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Zk=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,ex={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:Zk},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(u(O),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(O),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(O),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(O),null,{default:i(()=>[n("Medium")]),_:1}),t(u(O),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(O),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(O),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},tx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ix={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Group Size",code:tx},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(u(Xi),{size:"huge"},{default:i(()=>[t(u(O),null,{default:i(()=>[n("Fun")]),_:1}),t(u(O),null,{default:i(()=>[n("Happy")]),_:1}),t(u(O),null,{default:i(()=>[n("Smart")]),_:1}),t(u(O),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},ax=`<template>
  <SuiLabelGroup color="blue">
    <SuiLabel>
      Fun
      <SuiIcon name="close" />
    </SuiLabel>
    <SuiLabel>
      Happy
      <SuiLabelDetail>Smart</SuiLabelDetail>
    </SuiLabel>
    <SuiLabel>Insane</SuiLabel>
    <SuiLabel>Exciting</SuiLabel>
  </SuiLabelGroup>
</template>`,lx={__name:"ColoredGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Clored Group",code:ax},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(u(Xi),{color:"blue"},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(W),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Ki),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},nx=`<template>
  <SuiLabelGroup basic>
    <SuiLabel>
      Fun
      <SuiIcon name="close" />
    </SuiLabel>
    <SuiLabel>
      Happy
      <SuiLabelDetail>Smart</SuiLabelDetail>
    </SuiLabel>
    <SuiLabel>Insane</SuiLabel>
    <SuiLabel>Exciting</SuiLabel>
  </SuiLabelGroup>
</template>`,ox={__name:"BasicGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic Group",code:nx},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(u(Xi),{basic:""},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(W),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Ki),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},sx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,rx={__name:"TagGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Tag Group",code:sx},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(u(Xi),{tag:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},ux=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,cx={__name:"CircularGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular Group",code:ux},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(u(Xi),{circular:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},dx={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:lk},{id:"image",label:"Image",category:"Types",component:uk},{id:"pointing",label:"Pointing",category:"Types",component:gk},{id:"corner",label:"Corner",category:"Types",component:_k},{id:"tag",label:"Tag",category:"Types",component:vk},{id:"ribbon",label:"Ribbon",category:"Types",component:kk},{id:"attached",label:"Attached",category:"Types",component:$k},{id:"horizontal",label:"Horizontal",category:"Types",component:Tk},{id:"floating",label:"Floating",category:"Types",component:Lk},{id:"inverted",label:"Inverted",category:"Types",component:Rk},{id:"detail",label:"Detail",category:"Content",component:zk},{id:"icon",label:"Icon",category:"Content",component:Pk},{id:"link",label:"Link",category:"Content",component:Vk},{id:"disabled",label:"Disabled",category:"States",component:Nk},{id:"fluid",label:"Fluid",category:"Variations",component:jk},{id:"circular",label:"Circular",category:"Variations",component:Gk},{id:"basic",label:"Basic",category:"Variations",component:Jk},{id:"colored",label:"Colored",category:"Variations",component:Kk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Qk},{id:"size",label:"Size",category:"Variations",component:ex},{id:"group-size",label:"Group Size",category:"Groups",component:ix},{id:"colored-group",label:"Colored Group",category:"Groups",component:lx},{id:"basic-group",label:"Basic Group",category:"Groups",component:ox},{id:"tag-group",label:"Tag Group",category:"Groups",component:rx},{id:"circular-group",label:"Circular Group",category:"Groups",component:cx}];return(l,o)=>(k(),B(ut,{title:"Label",description:"A label displays content classification","component-docs":a}))}},mx=ub(wh);function px(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ll=mx,no=px(Em),fx=Ll.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var o=l.slots,r=l.attrs,d=o&&o.default&&o.default()||[],p=a.code||d&&d.length?d[0].children:"",f=a.inline,s=a.language,c=no.languages[s],g="language-".concat(s);return function(){return f?Ll.h("code",{class:[g],innerHTML:no.highlight(p,c)}):Ll.h("pre",Object.assign({},r,{class:[r.class,g]}),[Ll.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:no.highlight(p,c)}))])}}}),gx=fx;const hx=Im(gx),_x=z({name:"DocExample",components:{Prism:hx},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),bx={class:"example"};function vx(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-grid-column"),c=y("sui-icon"),g=y("sui-grid-row"),m=y("prism"),h=y("sui-grid");return k(),_e("div",bx,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Te(e.title)+" ",1),t(p,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(c,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[Ui(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(k(),B(s,{key:0,width:16},{default:i(()=>[t(m,{language:"markup"},{default:i(()=>[n(Te(e.code),1)]),_:1})]),_:1})):xs("",!0)]),_:3})]),_:3})])}const Je=De(_x,[["render",vx],["__scopeId","data-v-fcfb6a67"]]),Sx="/vue-fomantic-ui/images/avatar/small/rachel.png",yx="/vue-fomantic-ui/images/avatar/small/lindsay.png",wx="/vue-fomantic-ui/images/avatar/small/matthew.png",zn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Cx="/vue-fomantic-ui/images/avatar/small/tom.jpg",Il="/vue-fomantic-ui/images/avatar/small/christian.jpg",Fn="/vue-fomantic-ui/images/avatar/small/matt.jpg",qa="/vue-fomantic-ui/images/avatar/small/helen.jpg",Fi="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Xo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",oo="/vue-fomantic-ui/images/wireframe/square-image.png",Ax=z({name:"ListDoc",components:{DocExample:Je},setup(){return{listCode:`<sui-list>
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
</div>`}}}),kx={class:"intro"},xx=v("div",null,"Benefits",-1),$x={class:"list"},Bx=v("a",null,"Languages",-1),Tx=v("a",null,[v("b",null,"Arrested Development")],-1),Dx=v("a",null,[v("b",null,"Bob's Burgers")],-1),Lx=v("a",null,[v("b",null,"The Godfather Part 2")],-1),Ix=v("a",null,[v("b",null,"Twin Peaks")],-1),Rx=v("a",null,[v("b",null,"Arrested Development")],-1),Ex=v("a",null,[v("b",null,"Bob's Burgers")],-1),zx=v("a",null,[v("b",null,"The Godfather Part 2")],-1);function Fx(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-list-item"),C=y("sui-list"),$=y("doc-example"),D=y("sui-list-list"),_=y("sui-list-header"),S=y("sui-list-description"),x=y("sui-list-content"),T=y("sui-image");return k(),_e("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",kx,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(p,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Apples")]),_:1}),t(b,null,{default:i(()=>[n("Pears")]),_:1}),t(b,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(b,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(b,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(b,null,{default:i(()=>[xx,v("div",$x,[t(b,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(b,null,{default:i(()=>[n("Rebates")]),_:1}),t(b,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(b,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(b,null,{default:i(()=>[Bx,t(D,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(b,{active:""},{default:i(()=>[n("Home")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("1")]),_:1}),t(b,null,{default:i(()=>[n("2")]),_:1}),t(b,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[t(c,{name:"help"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(S,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[t(c,{name:"right triangle"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(S,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Sx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Rachel")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Tx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:yx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Lindsay")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Dx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:wx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matthew")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Lx,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:zn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Ix,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:rp}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(S,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(S,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(S,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(S,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(S,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Cx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Il}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Il}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Il}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Rx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Xo}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Ex,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),zx,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Xo}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Il}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fi}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t($,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:oo}),t(x,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oo}),t(x,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oo}),t(x,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[v("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Px=De(Ax,[["render",Fx]]),Mx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vx={__name:"LoaderDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loader",code:Mx},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee))]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Hx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Nx={__name:"TextLoaderDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Loader",code:Hx},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ox=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,jx={__name:"IndeterminateDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Indeterminate",code:Ox},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},qx=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Gx={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:qx},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(Ee),{active:""}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ux=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Yx={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:Ux},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(Ee),{disabled:""}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Jx=`<template>
  <SuiLoader active inline />
</template>`,Wx={__name:"InlineDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inline",code:Jx},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(u(Ee),{active:"",inline:""})]),_:1}))}},Kx=`<template>
  <SuiLoader active inline />
</template>`,Xx={__name:"InlineCenterDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inline Center",code:Kx},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(u(Ee),{active:"",inline:"centered"})]),_:1}))}},Qx=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Zx={__name:"SpeedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Speed",code:Qx},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(u(Ee),{slow:"",active:"",inline:""}),t(u(Ee),{active:"",inline:""}),t(u(Ee),{fast:"",active:"",inline:""})]),_:1}))}},e$=`<template>
  <SuiLoader active inline primary />
  <SuiLoader active inline secondary />
  <SuiLoader active inline color="red" />
  <SuiLoader active inline color="orange" />
  <SuiLoader active inline color="yellow" />
  <SuiLoader active inline color="olive" />
  <SuiLoader active inline color="green" />
  <SuiLoader active inline color="teal" />
  <SuiLoader active inline color="blue" />
  <SuiLoader active inline color="violet" />
  <SuiLoader active inline color="purple" />
  <SuiLoader active inline color="pink" />
  <SuiLoader active inline color="brown" />
  <SuiLoader active inline color="grey" />
  <SuiLoader active inline color="black" />
</template>`,t$={__name:"ColorsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colors",code:e$},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(u(Ee),{active:"",inline:"",primary:""}),t(u(Ee),{active:"",inline:"",secondary:""}),t(u(Ee),{active:"",inline:"",color:"red"}),t(u(Ee),{active:"",inline:"",color:"orange"}),t(u(Ee),{active:"",inline:"",color:"yellow"}),t(u(Ee),{active:"",inline:"",color:"olive"}),t(u(Ee),{active:"",inline:"",color:"green"}),t(u(Ee),{active:"",inline:"",color:"teal"}),t(u(Ee),{active:"",inline:"",color:"blue"}),t(u(Ee),{active:"",inline:"",color:"violet"}),t(u(Ee),{active:"",inline:"",color:"purple"}),t(u(Ee),{active:"",inline:"",color:"pink"}),t(u(Ee),{active:"",inline:"",color:"brown"}),t(u(Ee),{active:"",inline:"",color:"grey"}),t(u(Ee),{active:"",inline:"",color:"black"})]),_:1}))}},i$=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="mini">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="tiny">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="small">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="large">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="big">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="huge">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,a$={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:i$},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(H),null,{default:i(()=>[t(u(qt),{active:""},{default:i(()=>[t(u(Ee),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},l$=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,n$={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:l$},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[t(u(Ee),{active:"",inverted:""}),t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},o$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Vx},{id:"text-loader",label:"Text Loader",category:"Types",component:Nx},{id:"indeterminate",label:"Indeterminate",category:"States",component:jx},{id:"active",label:"Active",category:"States",component:Gx},{id:"disabled",label:"Disabled",category:"States",component:Yx},{id:"inline",label:"Inline",category:"Variations",component:Wx},{id:"inline-center",label:"Inline Center",category:"Variations",component:Xx},{id:"speed",label:"Speed",category:"Variations",component:Zx},{id:"colors",label:"Colors",category:"Variations",component:t$},{id:"size",label:"Size",category:"Variations",component:a$},{id:"inverted",label:"Inverted",category:"Variations",component:n$}];return(l,o)=>(k(),B(ut,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},nt="/vue-fomantic-ui/images/wireframe/short-paragraph.png",s$=z({name:"RailDoc",components:{DocExample:Je},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),r$={class:"intro"};function u$(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-image"),C=y("sui-rail"),$=y("sui-grid-column"),D=y("sui-grid"),_=y("doc-example");return k(),_e("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",r$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(p,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(b,{src:nt}),t(C,{internal:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{attached:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{close:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const c$=De(s$,[["render",u$]]),d$=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,m$={__name:"FadeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fade",code:d$},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(u(Ti),{animated:"fade"},{default:i(()=>[t(u(Bt),{visible:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Bt),{hidden:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},p$=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,f$={__name:"MoveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Move",code:p$},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(u(Ti),{animated:"move"},{default:i(()=>[t(u(Bt),{visible:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Bt),{hidden:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},g$=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,h$={__name:"RotateDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Rotate",code:g$},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(u(Ti),{animated:"rotate"},{default:i(()=>[t(u(Bt),{visible:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Bt),{hidden:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},_$=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,b$={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:_$},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(u(Ti),{active:"",animated:"move"},{default:i(()=>[t(u(Bt),{visible:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Bt),{hidden:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},v$=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,S$={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:v$},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(u(Ti),{disabled:"",animated:"move"},{default:i(()=>[t(u(Bt),{visible:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Bt),{hidden:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},y$=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,w$={__name:"InstantDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Instant",code:y$},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(u(Ti),{instant:"",animated:"move"},{default:i(()=>[t(u(Bt),{visible:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Bt),{hidden:""},{default:i(()=>[t(u(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},C$={__name:"Reveal",setup(e){const a=[{id:"fade",label:"Fade",category:"Types",component:m$},{id:"move",label:"Move",category:"Types",component:f$},{id:"rotate",label:"Rotate",category:"Types",component:h$},{id:"active",label:"Active",category:"States",component:b$},{id:"disabled",label:"Disabled",category:"States",component:S$},{id:"instant",label:"Instant",category:"Variations",component:w$}];return(l,o)=>(k(),B(ut,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":a}))}},A$=v("p",null,"Pellentesque habitant morbi tristique senectus.",-1),k$=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,x$={__name:"SegmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Segment",code:k$},{description:i(()=>[n(" A segment of content ")]),example:i(()=>[t(u(H),null,{default:i(()=>[A$]),_:1})]),_:1}))}},$$=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,B$={__name:"PlaceholderSegmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Placeholder Segment",code:$$},{description:i(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:i(()=>[t(u(H),{placeholder:""},{default:i(()=>[t(u(pe),{icon:""},{default:i(()=>[t(u(W),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(u(F),{primary:""},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},T$=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),D$=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,L$={__name:"RaisedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Raised",code:D$},{description:i(()=>[n(" A segment may be formatted to raise above the page. ")]),example:i(()=>[t(u(H),{raised:""},{default:i(()=>[T$]),_:1})]),_:1}))}},I$=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),R$=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),E$=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,z$={__name:"StackedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Stacked",code:E$},{description:i(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:i(()=>[t(u(H),{stacked:""},{default:i(()=>[I$]),_:1}),t(u(H),{stacked:"tall"},{default:i(()=>[R$]),_:1})]),_:1}))}},F$=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),P$=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),M$=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),V$=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,H$={__name:"PiledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Piled",code:V$},{description:i(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:i(()=>[t(u(pe),{as:"h4"},{default:i(()=>[n("Header")]),_:1}),t(u(H),{piled:""},{default:i(()=>[F$,P$,M$]),_:1})]),_:1}))}},N$=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),O$=v("p",null,"Pellentesque habitant morbi tristique senectus.",-1),j$=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),q$=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,G$={__name:"VerticalSegmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertical Segment",code:q$},{description:i(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:i(()=>[t(u(H),{vertical:""},{default:i(()=>[N$]),_:1}),t(u(H),{vertical:""},{default:i(()=>[O$]),_:1}),t(u(H),{vertical:""},{default:i(()=>[j$]),_:1})]),_:1}))}},U$=v("p",null,"Top",-1),Y$=v("p",null,"Middle",-1),J$=v("p",null,"Bottom",-1),W$=v("p",null,"Top",-1),K$=v("p",null,"Middle",-1),X$=v("p",null,"Bottom",-1),Q$=v("p",null,"Top",-1),Z$=v("p",null,"Middle",-1),eB=v("p",null,"Bottom",-1),tB=`<template>
  <SuiSegmentGroup>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>

  <SuiSegmentGroup basic>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>

  <SuiSegmentGroup>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment color="red">
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment secondary>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,iB={__name:"SegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Segments",code:tB},{description:i(()=>[n(" A group of segments can be formatted to appear together ")]),example:i(()=>[t(u(St),null,{default:i(()=>[t(u(H),null,{default:i(()=>[U$]),_:1}),t(u(H),null,{default:i(()=>[Y$]),_:1}),t(u(H),null,{default:i(()=>[J$]),_:1})]),_:1}),t(u(St),{basic:""},{default:i(()=>[t(u(H),null,{default:i(()=>[W$]),_:1}),t(u(H),null,{default:i(()=>[K$]),_:1}),t(u(H),null,{default:i(()=>[X$]),_:1})]),_:1}),t(u(St),null,{default:i(()=>[t(u(H),null,{default:i(()=>[Q$]),_:1}),t(u(H),{color:"red"},{default:i(()=>[Z$]),_:1}),t(u(H),{secondary:""},{default:i(()=>[eB]),_:1})]),_:1})]),_:1}))}},aB=v("p",null,"Top",-1),lB=v("p",null,"Nested Top",-1),nB=v("p",null,"Nested Middle",-1),oB=v("p",null,"Nested Bottom",-1),sB=v("p",null,"Middle",-1),rB=v("p",null,"Top",-1),uB=v("p",null,"Middle",-1),cB=v("p",null,"Bottom",-1),dB=v("p",null,"Bottom",-1),mB=`<template>
  <SuiSegmentGroup>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegmentGroup>
      <SuiSegment>
        <p>Nested Top</p>
      </SuiSegment>
      <SuiSegment>
        <p>Nested Middle</p>
      </SuiSegment>
      <SuiSegment>
        <p>Nested Bottom</p>
      </SuiSegment>
    </SuiSegmentGroup>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegmentGroup horizontal>
      <SuiSegment>
        <p>Top</p>
      </SuiSegment>
      <SuiSegment>
        <p>Middle</p>
      </SuiSegment>
      <SuiSegment>
        <p>Bottom</p>
      </SuiSegment>
    </SuiSegmentGroup>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,pB={__name:"NestedSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Nested Segments",code:mB},{description:i(()=>[n(" A group of segments can be nested in another group of segments ")]),example:i(()=>[t(u(St),null,{default:i(()=>[t(u(H),null,{default:i(()=>[aB]),_:1}),t(u(St),null,{default:i(()=>[t(u(H),null,{default:i(()=>[lB]),_:1}),t(u(H),null,{default:i(()=>[nB]),_:1}),t(u(H),null,{default:i(()=>[oB]),_:1})]),_:1}),t(u(H),null,{default:i(()=>[sB]),_:1}),t(u(St),{horizontal:""},{default:i(()=>[t(u(H),null,{default:i(()=>[rB]),_:1}),t(u(H),null,{default:i(()=>[uB]),_:1}),t(u(H),null,{default:i(()=>[cB]),_:1})]),_:1}),t(u(H),null,{default:i(()=>[dB]),_:1})]),_:1})]),_:1}))}},fB=v("p",null,"Left",-1),gB=v("p",null,"Middle",-1),hB=v("p",null,"Right",-1),_B=`<template>
  <SuiSegmentGroup horizontal>
    <SuiSegment>
      <p>Left</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Right</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,bB={__name:"HorizontalSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal Segments",code:_B},{description:i(()=>[n(" A segment group can appear horizontally ")]),example:i(()=>[t(u(St),{horizontal:""},{default:i(()=>[t(u(H),null,{default:i(()=>[fB]),_:1}),t(u(H),null,{default:i(()=>[gB]),_:1}),t(u(H),null,{default:i(()=>[hB]),_:1})]),_:1})]),_:1}))}},vB=`<template>
  <SuiSegmentGroup horizontal="equal width">
    <SuiSegment>
      Segment One
    </SuiSegment>
    <SuiSegment>
      Segment Two with a lot of additional content
    </SuiSegment>
    <SuiSegment>
      Segment Three
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,SB={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal equal width Segments",code:vB},{description:i(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:i(()=>[t(u(St),{horizontal:"equal width"},{default:i(()=>[t(u(H),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},yB=`<template>
  <SuiSegmentGroup horizontal="wrapping">
    <SuiSegment>
      Segment One
    </SuiSegment>
    <SuiSegment>
      Segment Two
    </SuiSegment>
    <SuiSegment>
      Segment Three
    </SuiSegment>
    <SuiSegment>
      Segment Four
    </SuiSegment>
    <SuiSegment>
      Segment Five
    </SuiSegment>
    <SuiSegment>
      Segment Six
    </SuiSegment>
    <SuiSegment>
      Segment Seven
    </SuiSegment>
    <SuiSegment>
      Segment Eight
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,wB={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal wrapping Segments",code:yB},{description:i(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:i(()=>[t(u(St),{horizontal:"wrapping"},{default:i(()=>[t(u(H),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Two ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Three ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Four ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Five ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Six ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Seven ")]),_:1}),t(u(H),null,{default:i(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},CB=v("p",null,"Top",-1),AB=v("p",null,"Middle",-1),kB=v("p",null,"Bottom",-1),xB=`<template>
  <SuiSegmentGroup raised>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,$B={__name:"RaisedSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Raised Segments",code:xB},{description:i(()=>[n(" A group of segments can be raised ")]),example:i(()=>[t(u(St),{raised:""},{default:i(()=>[t(u(H),null,{default:i(()=>[CB]),_:1}),t(u(H),null,{default:i(()=>[AB]),_:1}),t(u(H),null,{default:i(()=>[kB]),_:1})]),_:1})]),_:1}))}},BB=v("p",null,"Top",-1),TB=v("p",null,"Middle",-1),DB=v("p",null,"Bottom",-1),LB=`<template>
  <SuiSegmentGroup stacked>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,IB={__name:"StackedSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Stacked Segments",code:LB},{description:i(()=>[n(" A group of segments can be stacked ")]),example:i(()=>[t(u(St),{stacked:""},{default:i(()=>[t(u(H),null,{default:i(()=>[BB]),_:1}),t(u(H),null,{default:i(()=>[TB]),_:1}),t(u(H),null,{default:i(()=>[DB]),_:1})]),_:1})]),_:1}))}},RB=v("p",null,"Top",-1),EB=v("p",null,"Middle",-1),zB=v("p",null,"Bottom",-1),FB=`<template>
  <SuiSegmentGroup piled>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,PB={__name:"PiledSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Piled Segments",code:FB},{description:i(()=>[n(" A group of segments can be piled ")]),example:i(()=>[t(u(St),{piled:""},{default:i(()=>[t(u(H),null,{default:i(()=>[RB]),_:1}),t(u(H),null,{default:i(()=>[EB]),_:1}),t(u(H),null,{default:i(()=>[zB]),_:1})]),_:1})]),_:1}))}},MB=v("p",null,"Pellentesque habitant morbi tristique senectus.",-1),VB=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,HB={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:VB},{description:i(()=>[n(" A segment may show its content is disabled ")]),example:i(()=>[t(u(H),{disabled:""},{default:i(()=>[MB]),_:1})]),_:1}))}},NB=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,OB={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:NB},{description:i(()=>[n(" A segment may show its content is being loaded ")]),example:i(()=>[t(u(H),{loading:""},{default:i(()=>[t(u(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},jB=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),qB=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,GB={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:qB},{description:i(()=>[n(" A segment can have its colors inverted for contrast ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[jB]),_:1})]),_:1}))}},UB=v("p",null,"This segment is on top",-1),YB=v("p",null,"This segment is attached on both sides",-1),JB=v("p",null,"This segment is on bottom",-1),WB=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,KB={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Attached",code:WB},{description:i(()=>[n(" A segment can be attached to other content on a page ")]),example:i(()=>[t(u(H),{attached:"top"},{default:i(()=>[UB]),_:1}),t(u(H),{attached:""},{default:i(()=>[YB]),_:1}),t(u(H),{attached:"bottom"},{default:i(()=>[JB]),_:1})]),_:1}))}},XB=v("p",null,"Padded content.",-1),QB=v("p",null,"Padded content.",-1),ZB=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,eT={__name:"PaddedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Padded",code:ZB},{description:i(()=>[n(" A segment can increase its padding ")]),example:i(()=>[t(u(H),{padded:""},{default:i(()=>[XB]),_:1}),t(u(H),{padded:"very"},{default:i(()=>[QB]),_:1})]),_:1}))}},tT=v("p",null,"Fitted Segment",-1),iT=v("p",null,"Horizontally fitted segment",-1),aT=v("p",null,"Vertically fitted segment",-1),lT=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,nT={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fitted",code:lT},{description:i(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:i(()=>[t(u(H),{fitted:""},{default:i(()=>[tT]),_:1}),t(u(H),{fitted:"horizontally"},{default:i(()=>[iT]),_:1}),t(u(H),{fitted:"vertically"},{default:i(()=>[aT]),_:1})]),_:1}))}},oT=v("p",null,"Pellentesque habitant morbi",-1),sT=v("p",null,"Pellentesque habitant morbi",-1),rT=v("p",null,"Pellentesque habitant morbi",-1),uT=`<template>
  <SuiSegment compact>
    <p>Pellentesque habitant morbi</p>
  </SuiSegment>
  <SuiSegmentGroup compact>
    <SuiSegment>
      <p>Pellentesque habitant morbi</p>
    </SuiSegment>
    <SuiSegment>
      <p>Pellentesque habitant morbi</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`,cT={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Compact",code:uT},{description:i(()=>[n(" A segment may take up only as much space as is necessary ")]),example:i(()=>[t(u(H),{compact:""},{default:i(()=>[oT]),_:1}),t(u(St),{compact:""},{default:i(()=>[t(u(H),null,{default:i(()=>[sT]),_:1}),t(u(H),null,{default:i(()=>[rT]),_:1})]),_:1})]),_:1}))}},dT=`<template>
  <SuiSegment color="red">Red</SuiSegment>
  <SuiSegment color="orange">Orange</SuiSegment>
  <SuiSegment color="yellow">Yellow</SuiSegment>
  <SuiSegment color="olive">Olive</SuiSegment>
  <SuiSegment color="green">Green</SuiSegment>
  <SuiSegment color="teal">Teal</SuiSegment>
  <SuiSegment color="blue">Blue</SuiSegment>
  <SuiSegment color="violet">Violet</SuiSegment>
  <SuiSegment color="purple">Purple</SuiSegment>
  <SuiSegment color="pink">Pink</SuiSegment>
  <SuiSegment color="brown">Brown</SuiSegment>
  <SuiSegment color="grey">Grey</SuiSegment>
  <SuiSegment color="black">Black</SuiSegment>
</template>`,mT={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:dT},{description:i(()=>[n(" A segment can be colored ")]),example:i(()=>[t(u(H),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(H),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(H),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(H),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(H),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(H),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(H),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(H),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(H),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(H),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(H),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(H),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(H),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},pT=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),fT=v("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),gT=v("p",null,"If you notice me you must be looking very hard.",-1),hT=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),_T=v("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),bT=v("p",null,"If you notice me you must be looking very hard.",-1),vT=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),ST=v("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),yT=v("p",null,"If you notice me you must be looking very hard.",-1),wT=`<template>
  <SuiSegment>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
  <SuiSegment secondary>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </SuiSegment>
  <SuiSegment tertiary>
    <p>If you notice me you must be looking very hard.</p>
  </SuiSegment>
  <SuiDivider />
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
  <SuiSegment secondary inverted>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </SuiSegment>
  <SuiSegment tertiary inverted>
    <p>If you notice me you must be looking very hard.</p>
  </SuiSegment>
  <SuiDivider />
  <SuiSegment inverted color="red">
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
  <SuiSegment secondary inverted color="red">
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </SuiSegment>
  <SuiSegment tertiary inverted color="red">
    <p>If you notice me you must be looking very hard.</p>
  </SuiSegment>
</template>`,CT={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Emphasis",code:wT},{description:i(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:i(()=>[t(u(H),null,{default:i(()=>[pT]),_:1}),t(u(H),{secondary:""},{default:i(()=>[fT]),_:1}),t(u(H),{tertiary:""},{default:i(()=>[gT]),_:1}),t(u(Pe)),t(u(H),{inverted:""},{default:i(()=>[hT]),_:1}),t(u(H),{secondary:"",inverted:""},{default:i(()=>[_T]),_:1}),t(u(H),{tertiary:"",inverted:""},{default:i(()=>[bT]),_:1}),t(u(Pe)),t(u(H),{inverted:"",color:"red"},{default:i(()=>[vT]),_:1}),t(u(H),{secondary:"",inverted:"",color:"red"},{default:i(()=>[ST]),_:1}),t(u(H),{tertiary:"",inverted:"",color:"red"},{default:i(()=>[yT]),_:1})]),_:1}))}},AT=`<template>
  <SuiSegment circular style="width: 175px; height: 175px;">
    <SuiHeader as="h2">
      Buy Now
      <SuiHeaderSubheader>$10.99</SuiHeaderSubheader>
    </SuiHeader>
  </SuiSegment>
  <SuiSegment circular inverted style="width: 175px; height: 175px;">
    <SuiHeader as="h2">
      Buy Now
      <SuiHeaderSubheader>$10.99</SuiHeaderSubheader>
    </SuiHeader>
  </SuiSegment>
</template>`,kT={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:AT},{description:i(()=>[n(" A segment can be circular ")]),example:i(()=>[t(u(H),{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(u(Bi),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(u(H),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(u(pe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(u(Bi),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},xT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,$T={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Clearing",code:xT},{description:i(()=>[n(" A segment can clear floated content ")]),example:i(()=>[t(u(H),{clearing:""},{default:i(()=>[t(u(F),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},BT=v("p",null,"This segment will appear to the right",-1),TT=v("p",null,"This segment will appear to the left",-1),DT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,LT={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floated",code:DT},{description:i(()=>[n(" A segment can appear to the left or right of other content ")]),example:i(()=>[t(u(H),{floated:"right"},{default:i(()=>[BT]),_:1}),t(u(H),{floated:"left"},{default:i(()=>[TT]),_:1})]),_:1}))}},IT=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,RT={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Alignment",code:IT},{description:i(()=>[n(" A segment can have its text aligned to a side ")]),example:i(()=>[t(u(H),{textAlign:"right"},{default:i(()=>[n("Right")]),_:1}),t(u(H),{textAlign:"left"},{default:i(()=>[n("Left")]),_:1}),t(u(H),{textAlign:"center"},{default:i(()=>[n("Center")]),_:1})]),_:1}))}},ET=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),zT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,FT={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic",code:zT},{description:i(()=>[n(" A basic segment has no special formatting ")]),example:i(()=>[t(u(H),{basic:""},{default:i(()=>[ET]),_:1})]),_:1}))}},PT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,MT={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:PT},{description:i(()=>[n(" A segment can vary in size ")]),example:i(()=>[t(u(H),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(H),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(H),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(H),null,{default:i(()=>[n("Default")]),_:1}),t(u(H),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(H),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(H),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(H),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},VT={__name:"Segment",setup(e){const a=[{id:"segment",label:"Segment",category:"Types",component:x$},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:B$},{id:"raised",label:"Raised",category:"Types",component:L$},{id:"stacked",label:"Stacked",category:"Types",component:z$},{id:"piled",label:"Piled",category:"Types",component:H$},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:G$},{id:"segments",label:"Segments",category:"Groups",component:iB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:pB},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:bB},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:SB},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:wB},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:$B},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:IB},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:PB},{id:"disabled",label:"Disabled",category:"States",component:HB},{id:"loading",label:"Loading",category:"States",component:OB},{id:"inverted",label:"Inverted",category:"Variations",component:GB},{id:"attached",label:"Attached",category:"Variations",component:KB},{id:"padded",label:"Padded",category:"Variations",component:eT},{id:"fitted",label:"Fitted",category:"Variations",component:nT},{id:"compact",label:"Compact",category:"Variations",component:cT},{id:"colored",label:"Colored",category:"Variations",component:mT},{id:"emphasis",label:"Emphasis",category:"Variations",component:CT},{id:"circular",label:"Circular",category:"Variations",component:kT},{id:"clearing",label:"Clearing",category:"Variations",component:$T},{id:"floated",label:"Floated",category:"Variations",component:LT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:RT},{id:"basic",label:"Basic",category:"Variations",component:FT},{id:"size",label:"Size",category:"Variations",component:MT}];return(l,o)=>(k(),B(ut,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":a}))}},HT=z({name:"StepDoc",components:{DocExample:Je},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),NT={class:"intro"},OT=v("p",null,"The steps take up the entire column width",-1),jT=v("p",null,"Main content",-1);function qT(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-step"),C=y("sui-step-group"),$=y("doc-example"),D=y("sui-step-title"),_=y("sui-step-description"),S=y("sui-step-content"),x=y("sui-grid-column"),T=y("sui-grid");return k(),_e("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",NT,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(p,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t($,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{link:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(T,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[OT]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[v("div",null,[t(C,{attached:"top"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:i(()=>[jT]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t($,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GT=De(HT,[["render",qT]]),UT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,YT={__name:"BreadcrumbDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Breadcrumb",code:UT},{description:i(()=>[n(" A standard breadcrumb ")]),example:i(()=>[t(u(Xt),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},JT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,WT={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Divider",code:JT},{description:i(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(u(Xt),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},KT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,XT={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Section",code:KT},{description:i(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(u(Xt),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},QT=v("a",{href:"#"},"paper towels",-1),ZT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,e2={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:ZT},{description:i(()=>[n(" A section may be linkable or contain a link ")]),example:i(()=>[t(u(Xt),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Search for: "),QT]),_:1})]),_:1})]),_:1}))}},t2=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,i2={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:t2},{description:i(()=>[n(" A section can be active ")]),example:i(()=>[t(u(Xt),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Products")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},a2=v("br",null,null,-1),l2=`<template>
  <SuiSegment inverted>
    <SuiBreadcrumb inverted>
      <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
    <br>
    <SuiBreadcrumb inverted>
      <SuiBreadcrumbSection>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
  </SuiSegment>
</template>`,n2={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:l2},{description:i(()=>[n(" A breadcrumb can be inverted ")]),example:i(()=>[t(u(H),{inverted:""},{default:i(()=>[t(u(Xt),{inverted:""},{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1}),a2,t(u(Xt),{inverted:""},{default:i(()=>[t(u(it),null,{default:i(()=>[n("Home")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),null,{default:i(()=>[n("Registration")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},o2=`<template>
  <template v-for="size in ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']" :key="size">
    <SuiBreadcrumb :size="size">
      <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
    <SuiDivider hidden />
  </template>
</template>`,s2={__name:"SizeDoc",setup(e){const a=["mini","tiny","small","large","big","huge","massive"];return(l,o)=>(k(),B(R,{label:"Size",code:o2},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[(k(),_e(Ae,null,et(a,r=>(k(),_e(Ae,{key:r},[t(u(Xt),{size:r},{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(xt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(u(Pe),{hidden:""})],64))),64))]),_:1}))}},r2={__name:"Breadcrumb",setup(e){const a=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:YT},{id:"divider",label:"Divider",category:"Content",component:WT},{id:"section",label:"Section",category:"Content",component:XT},{id:"link",label:"Link",category:"Content",component:e2},{id:"active",label:"Active",category:"States",component:i2},{id:"inverted",label:"Inverted",category:"Variations",component:n2},{id:"size",label:"Size",category:"Variations",component:s2}];return(l,o)=>(k(),B(ut,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":a}))}},u2=`<template>
  <SuiForm>
    <SuiFormField
      label="First Name"
      placeholder="First Name"
    />
    <SuiFormField
      label="Last Name"
      placeholder="Last Name"
    />
    <SuiFormField>
      <SuiCheckbox label="I agree to the Terms and Conditions" />
    </SuiFormField>
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,c2={__name:"FormDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Form",code:u2},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(u(zt),null,{default:i(()=>[t(u(at),{label:"First Name",placeholder:"First Name"}),t(u(at),{label:"Last Name",placeholder:"Last Name"}),t(u(at),null,{default:i(()=>[t(u(No),{label:"I agree to the Terms and Conditions"})]),_:1}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},d2=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,m2={__name:"FieldDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Field",code:d2},{description:i(()=>[n(" A field is a form element containing a label and an input ")]),example:i(()=>[t(u(zt),null,{default:i(()=>[t(u(at),{label:"User Input"})]),_:1})]),_:1}))}},p2=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,f2={__name:"FieldsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fields",code:p2},{description:i(()=>[n(" A set of fields can appear grouped together ")]),example:i(()=>[t(u(zt),null,{default:i(()=>[t(u(Zl),null,{default:i(()=>[t(u(at),{label:"First Name"}),t(u(at),{label:"Middle Name"}),t(u(at),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},g2=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,h2={__name:"TextAreaDoc",setup(e){return(a,l)=>(k(),B(R,{label:"TextArea",code:g2},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(u(zt),null,{default:i(()=>[t(u(en),{label:"Text"}),t(u(en),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},_2=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,b2={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:_2},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(u(zt),{loading:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},v2=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,S2={__name:"SuccessDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Success",code:v2},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(u(zt),{success:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(cl),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},y2=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,w2={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Error",code:y2},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(u(zt),{error:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(cl),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},C2=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,A2={__name:"WarningDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Warning",code:C2},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(u(zt),{warning:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(cl),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},k2=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,x2={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:k2},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(u(zt),null,{default:i(()=>[t(u(Zl),null,{default:i(()=>[t(u(at),{disabled:"",label:"First name",placeholder:"Read only"}),t(u(at),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},$2={__name:"Form",setup(e){const a=[{id:"form",label:"Form",category:"Types",component:c2},{id:"field",label:"Field",category:"Content",component:m2},{id:"fields",label:"Fields",category:"Content",component:f2},{id:"textarea",label:"TextArea",category:"Content",component:h2},{id:"loading",label:"Loading",category:"Form States",component:b2},{id:"success",label:"Success",category:"Form States",component:S2},{id:"error",label:"Error",category:"Form States",component:w2},{id:"warning",label:"Warning",category:"Form States",component:A2},{id:"disabled",label:"Disabled",category:"Field States",component:x2}];return(l,o)=>(k(),B(ut,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":a}))}},B2=z({name:"DocPageHeader",props:{title:String,sub:String}}),T2={class:"intro",style:{padding:"2rem"}};function D2(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment");return k(),B(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",T2,[t(f,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(p,null,{default:i(()=>[n(Te(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const tt=De(B2,[["render",D2]]),de="/vue-fomantic-ui/images/wireframe/image.png",ti="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",Sc="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",L2=z({name:"GridDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),I2=v("br",null,null,-1);function R2(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-grid-column"),g=y("sui-grid"),m=y("doc-example"),h=y("sui-grid-row"),w=y("sui-segment"),b=y("sui-divider"),C=y("sui-menu-item"),$=y("sui-menu"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(m,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.numbers,_=>(k(),B(c,{key:_},{default:i(()=>[t(s,{src:de})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(m,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ti})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ti})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ti})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ti})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ti})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ti})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(s,{src:Sc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(s,{src:Sc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{floated:"left",width:5},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{floated:"right",width:5},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:4},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:9},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:ti})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,{width:8},{default:i(()=>[t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1}),t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[v("div",null,[t(b),t(g,{padded:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(C,null,{default:i(()=>[n("Poodle")]),_:1}),t(C,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de}),I2,t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,{only:"computer"},{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,{only:"mobile"},{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const E2=De(L2,[["render",R2]]),z2="/vue-fomantic-ui/images/logo.png",F2=z({name:"MenuDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),P2=v("p",null,"Check out our new promotions",-1),M2=v("p",null,"Check out our collection of coupons",-1),V2=v("p",null,"Visit our rebate forum for information on claiming rebates",-1),H2=v("img",{src:z2},null,-1);function N2(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-menu-item"),c=y("sui-menu"),g=y("doc-example"),m=y("sui-input"),h=y("sui-menu-menu"),w=y("sui-label"),b=y("sui-button"),C=y("sui-dropdown-item"),$=y("sui-dropdown-menu"),D=y("sui-dropdown"),_=y("sui-icon"),S=y("sui-segment"),x=y("sui-container");return k(),_e("div",null,[t(p,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Editorials")]),_:1}),t(s,null,{default:i(()=>[n("Reviews")]),_:1}),t(s,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(c,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(s,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(s,null,{default:i(()=>[n("Most Comments")]),_:1}),t(s,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(w,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Spam "),t(w,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Updates "),t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(c,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(s,null,{default:i(()=>[n("10")]),_:1}),t(s,null,{default:i(()=>[n("11")]),_:1}),t(s,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(s,null,{default:i(()=>[n("About us")]),_:1}),t(s,null,{default:i(()=>[n("Jobs")]),_:1}),t(s,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),P2]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),M2]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),V2]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(m,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(D,{item:"",text:"Categories"},{default:i(()=>[t($,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Browse")]),_:1}),t(s,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[n("Sign up")]),_:1}),t(s,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Search")]),_:1}),t(s,null,{default:i(()=>[n("Add")]),_:1}),t(s,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"grid layout"}),n(" Browse ")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(D,{item:"",text:"More"},{default:i(()=>[t($,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[n("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(c,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[H2]),_:1}),t(s,null,{default:i(()=>[n("Features")]),_:1}),t(s,null,{default:i(()=>[n("Testimonials")]),_:1}),t(s,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(c,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Run")]),_:1}),t(s,null,{default:i(()=>[n("Walk")]),_:1}),t(s,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(c,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[n("Buy")]),_:1}),t(s,null,{default:i(()=>[n("Sell")]),_:1}),t(s,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[v("div",null,[t(c,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(s,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(S,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(c,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(D,{item:"",text:"Language"},{default:i(()=>[t($,null,{default:i(()=>[t(C,null,{default:i(()=>[n("English")]),_:1}),t(C,null,{default:i(()=>[n("Russian")]),_:1}),t(C,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(c,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[n("1")]),_:1}),t(s,null,{default:i(()=>[n("2")]),_:1}),t(s,null,{default:i(()=>[n("3")]),_:1}),t(s,null,{default:i(()=>[n("4")]),_:1}),t(s,null,{default:i(()=>[n("5")]),_:1}),t(s,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const O2=De(F2,[["render",N2]]),j2=z({name:"MessageDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),q2=v("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),G2=v("p",null,"Get the best news in your e-mail every day.",-1),U2=v("p",null,"You can't see me",-1),Y2=v("p",null,"You can always see me",-1),J2=v("p",null,"Way to go!",-1),W2=v("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),K2=v("a",{href:"#"},"Login here",-1),X2=v("p",null,[n("Go to your "),v("b",null,"special offers"),n(" page to see now.")],-1),Q2=v("p",null,"That offer has expired",-1);function Z2(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-message-header"),c=y("sui-message"),g=y("doc-example"),m=y("sui-message-item"),h=y("sui-message-list"),w=y("sui-icon"),b=y("sui-message-content"),C=y("sui-form-field"),$=y("sui-form-group"),D=y("sui-button"),_=y("sui-form"),S=y("sui-container");return k(),_e("div",null,[t(p,{title:"Message",sub:"A message displays information that explains nearby content"}),t(S,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Changes in Service")]),_:1}),q2]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(m,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(w,{name:"inbox"}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),G2]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(c,{hidden:""},{default:i(()=>[U2]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(c,{visible:""},{default:i(()=>[Y2]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(c,{floating:""},{default:i(()=>[J2]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[W2]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[v("div",null,[t(c,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t($,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(D,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(c,{attached:"bottom",warning:""},{default:i(()=>[t(w,{name:"help"}),n(" Already signed up? "),K2,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(c,{warning:""},{default:i(()=>[t(w,{name:"close"}),t(s,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(c,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(c,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),X2]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(c,{negative:""},{default:i(()=>[t(w,{name:"close"}),t(s,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),Q2]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[v("div",null,[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[v("div",null,[t(c,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(c,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(c,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const eD=De(j2,[["render",Z2]]),tD=z({name:"TableDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),iD=v("a",{href:"#"},"Edit",-1),aD=v("a",{href:"#"},"Edit",-1),lD=v("a",{href:"#"},"Edit",-1),nD=v("br",null,null,-1),oD=v("br",null,null,-1),sD=v("br",null,null,-1),rD=v("br",null,null,-1),uD=v("br",null,null,-1),cD=v("br",null,null,-1),dD=v("br",null,null,-1);function mD(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-table-header-cell"),c=y("sui-table-row"),g=y("sui-table-header"),m=y("sui-table-cell"),h=y("sui-table-body"),w=y("sui-table"),b=y("doc-example"),C=y("sui-icon"),$=y("sui-table-footer"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("James")]),_:1}),t(m,null,{default:i(()=>[n("24")]),_:1}),t(m,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("26")]),_:1}),t(m,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Elyse")]),_:1}),t(m,null,{default:i(()=>[n("24")]),_:1}),t(m,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(w,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[n("Arguments")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("reset rating")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1}),t(m,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("set rating")]),_:1}),t(m,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(m,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(w,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Ruby")]),_:1}),t(s,null,{default:i(()=>[n("Javascript")]),_:1}),t(s,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(m,null,{default:i(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(c,null,{default:i(()=>[t(m,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(m,null,{default:i(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Project 2")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(m),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m)]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Project 3")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(b,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{positive:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"checkmark"}),n(" Approved ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{positive:""},{default:i(()=>[t(C,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(c,{negative:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{error:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{error:""},{default:i(()=>[t(C,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"attention"}),n(" Requires Action ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{warning:""},{default:i(()=>[t(C,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{active:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Selected")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Selected")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{color:"blue"},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(m,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(w,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Registration Date")]),_:1}),t(s,null,{default:i(()=>[n("E-mail address")]),_:1}),t(s,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John Lilki")]),_:1}),t(m,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(w,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(w,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(w,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[iD]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[aD]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(m,{selectable:""},{default:i(()=>[lD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{verticalAlign:"top"},{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),nD,n(" 1"),oD,n(" 2"),sD]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n(" Notes "),rD,n(" 1"),uD,n(" 2"),cD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Date Joined")]),_:1}),t(s,null,{default:i(()=>[n("E-mail")]),_:1}),t(s,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John Lilki")]),_:1}),t(m,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("3 People")]),_:1}),t(m,null,{default:i(()=>[n("2 Approved")]),_:1}),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[v("div",null,[t(w,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),dD,t(w,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(w,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("27")]),_:1}),t(m,null,{default:i(()=>[n("Male")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("32")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("22")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(w,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("27")]),_:1}),t(m,null,{default:i(()=>[n("Male")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("32")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("22")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(w,null,{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[n("Name")]),_:1}),t(s,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(w,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Apples")]),_:1}),t(m,null,{default:i(()=>[n("200")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Orange")]),_:1}),t(m,null,{default:i(()=>[n("310")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Apples")]),_:1}),t(m,null,{default:i(()=>[n("200")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Orange")]),_:1}),t(m,null,{default:i(()=>[n("310")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[v("div",null,[t(w,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[v("div",null,[t(w,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const pD=De(tD,[["render",mD]]),fD=z({name:"AdvertisementDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),gD=v("img",{src:de},null,-1),hD=v("br",null,null,-1);function _D(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-advertisement"),c=y("doc-example"),g=y("sui-container");return k(),_e("div",null,[t(p,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[gD]),_:1})]),_:1},8,["code"]),t(c,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[v("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(c,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[v("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(c,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(c,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[v("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(c,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[v("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),hD,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(c,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[v("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(c,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[v("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(c,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(c,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(c,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const bD=De(fD,[["render",_D]]),yc="/vue-fomantic-ui/images/avatar/large/kristy.png",vD="/vue-fomantic-ui/images/avatar/large/daniel.jpg",so="/vue-fomantic-ui/images/avatar/large/helen.jpg",ro="/vue-fomantic-ui/images/avatar/large/elliot.jpg",uo="/vue-fomantic-ui/images/avatar/large/elyse.png",SD="/vue-fomantic-ui/images/avatar/large/matthew.png",yD="/vue-fomantic-ui/images/avatar/large/molly.png",Rl="/vue-fomantic-ui/images/wireframe/white-image.png",wc="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Cc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Ac="/vue-fomantic-ui/images/avatar/large/stevie.jpg",kc="/vue-fomantic-ui/images/avatar/large/steve.jpg",wD=z({name:"CardDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),CD=v("span",{class:"date"},"Joined in 2013",-1),AD=v("a",null,"Elliot Fu",-1),kD=v("a",null,"Jenny Hess",-1),xD=v("a",null,"Stevie Feliciano",-1),$D=v("a",null,"Administrator",-1),BD=v("a",null,"Helen Troy",-1),TD=v("span",{class:"date"},"Joined in 2013",-1),DD=v("span",null,"2 days ago",-1),LD=v("a",null,"Animals",-1),ID=v("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),RD=v("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ED=v("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),zD=v("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),FD=v("span",{class:"category"},"Animals",-1),PD=v("span",{class:"category"},"Animals",-1),MD=v("div",{class:"right floated author"},[v("img",{class:"ui avatar image",src:Fn}),n(" Matt ")],-1),VD=v("span",{class:"category"},"Animals",-1),HD=v("div",{class:"right floated author"},[v("img",{class:"ui avatar image",src:Fn}),n(" Matt ")],-1),ND=v("p",null,"Jenny is a student studying Media Management at the New School",-1),OD=v("div",{class:"center aligned author"},[v("img",{class:"ui avatar image",src:zn}),n(" Jenny ")],-1),jD=v("a",null,"Friends",-1),qD=v("span",{class:"right floated"}," Joined in 2013 ",-1),GD=v("a",null,[v("i",{class:"user icon"}),n(" 75 Friends ")],-1),UD=v("a",null,"Coworker",-1),YD=v("span",{class:"right floated"}," Joined in 2011 ",-1),JD=v("a",null,[v("i",{class:"user icon"}),n(" 35 Friends ")],-1),WD=v("a",null,"Coworker",-1),KD=v("span",{class:"right floated"}," Joined in 2014 ",-1),XD=v("a",null,[v("i",{class:"user icon"}),n(" 151 Friends ")],-1);function QD(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-card-header"),g=y("sui-card-meta"),m=y("sui-card-description"),h=y("sui-card-content"),w=y("sui-icon"),b=y("sui-card"),C=y("doc-example"),$=y("sui-button"),D=y("sui-button-group"),_=y("sui-card-group"),S=y("sui-feed-summary"),x=y("sui-feed-content"),T=y("sui-feed-event"),I=y("sui-feed"),M=y("sui-grid-column"),V=y("sui-grid"),P=y("sui-segment"),q=y("sui-container");return k(),_e("div",null,[t(p,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(q,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:yc,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[CD]),_:1}),t(m,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[v("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:oi,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(m,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:zn,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("New Member")]),_:1}),t(m,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(I,{size:"small"},{default:i(()=>[t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[AD,n(" added "),kD,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[xD,n(" was added as an "),$D]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[BD,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t($,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:yc,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[TD]),_:1}),t(m,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[v("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[DD,LD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(m,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(m,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[ID,RD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[ED,zD]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(w,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(V,{columns:3},{default:i(()=>[t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:vD}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:so}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:ro}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(b,{centered:""},{default:i(()=>[t(s,{src:uo}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(b,{horizontal:""},{default:i(()=>[t(s,{src:uo}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[FD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(b,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[PD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[MD]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(b,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[VD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[HD]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[ND]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[OD]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(P,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:SD}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[jD]),_:1}),t(m,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[qD,GD]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:yD}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Molly")]),_:1}),t(g,null,{default:i(()=>[UD]),_:1}),t(m,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[YD,JD]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:uo}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1}),t(g,null,{default:i(()=>[WD]),_:1}),t(m,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[KD,XD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:Rl})]),_:1}),t(b,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:Rl})]),_:1}),t(b,{color:"red",href:"#"},{default:i(()=>[t(s,{src:Rl})]),_:1}),t(b,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:Rl})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:ro})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:so})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:wc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Cc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Ac})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:ro})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:so})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:wc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Cc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Ac})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZD=De(wD,[["render",QD]]),eL=z({name:"CommentDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),tL=v("span",null,"Today at 5:42PM",-1),iL=v("a",null,"Reply",-1),aL=v("span",null,"Yesterday at 12:30AM",-1),lL=v("a",null,"Reply",-1),nL={class:"comments"},oL=v("span",null,"Just now",-1),sL=v("a",null,"Reply",-1),rL=v("span",null,"5 days ago",-1),uL=v("a",null,"Reply",-1),cL=v("div",{class:"date"},"2 days ago",-1),dL=v("div",{class:"rating"},[v("i",{class:"star icon"}),n(" 5 Faves ")],-1),mL=v("a",null,"Reply",-1),pL=v("a",null,"Save",-1),fL=v("a",null,"Hide",-1),gL=v("a",null,[v("i",{class:"expand icon"}),n(" Full-screen ")],-1),hL=v("a",null,"Reply",-1),_L=v("a",null,"Reply",-1),bL=v("a",null,"Replay",-1),vL=v("span",null,"Today at 5:42PM",-1),SL=v("a",{href:"#"},"Replay",-1),yL=v("span",null,"Yesterday at 12:30AM",-1),wL=v("a",{href:"#"},"Replay",-1),CL=v("span",null,"Just now",-1),AL=v("a",{href:"#"},"Replay",-1),kL=v("span",null,"5 days ago",-1),xL=v("a",{href:"#"},"Replay",-1),$L=v("span",null,"Today at 5:42PM",-1),BL=v("a",{href:"#"},"Replay",-1),TL=v("span",null,"Yesterday at 12:30AM",-1),DL=v("a",{href:"#"},"Replay",-1),LL=v("span",null,"Just now",-1),IL=v("a",{href:"#"},"Replay",-1),RL=v("span",null,"5 days ago",-1),EL=v("a",{href:"#"},"Replay",-1),zL=v("span",null,"Today at 5:42PM",-1),FL=v("a",{href:"#"},"Replay",-1),PL=v("span",null,"Yesterday at 12:30AM",-1),ML=v("a",{href:"#"},"Replay",-1),VL=v("span",null,"Just now",-1),HL=v("a",{href:"#"},"Replay",-1),NL=v("span",null,"5 days ago",-1),OL=v("a",{href:"#"},"Replay",-1),jL=v("span",null,"Today at 5:42PM",-1),qL=v("a",{href:"#"},"Replay",-1),GL=v("span",null,"Yesterday at 12:30AM",-1),UL=v("a",{href:"#"},"Replay",-1),YL=v("span",null,"Just now",-1),JL=v("a",{href:"#"},"Replay",-1),WL=v("span",null,"5 days ago",-1),KL=v("a",{href:"#"},"Replay",-1);function XL(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-comment-avatar"),c=y("sui-comment-author"),g=y("sui-comment-metadata"),m=y("sui-comment-text"),h=y("sui-comment-actions"),w=y("sui-comment-content"),b=y("sui-comment"),C=y("sui-comment-group"),$=y("doc-example"),D=y("sui-form-textarea"),_=y("sui-icon"),S=y("sui-button"),x=y("sui-form"),T=y("sui-segment"),I=y("sui-container");return k(),_e("div",null,[t(p,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[tL]),_:1}),t(m,null,{default:i(()=>[n("How artistic!")]),_:1}),t(h,null,{default:i(()=>[iL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[aL]),_:1}),t(m,null,{default:i(()=>[n("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[lL]),_:1})]),_:1}),v("div",nL,[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[oL]),_:1}),t(m,null,{default:i(()=>[n("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[sL]),_:1})]),_:1})]),_:1})])]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[rL]),_:1}),t(m,null,{default:i(()=>[n("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[uL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(g,null,{default:i(()=>[cL,dL]),_:1}),t(m,null,{default:i(()=>[n(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Tom Lukic")]),_:1}),t(m,null,{default:i(()=>[n(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[mL,pL,fL,gL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Steve Jobs")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[n("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[hL]),_:1}),t(x,{reply:""},{default:i(()=>[t(D),t(S,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),n(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Christian Rocha")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[n(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[_L]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("1 days ago")]),_:1}),t(m,null,{default:i(()=>[n("No, it wont")]),_:1}),t(h,null,{default:i(()=>[bL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[vL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[SL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[yL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[wL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[CL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[AL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[kL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[xL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[$L]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[BL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[TL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[DL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[LL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[IL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[RL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[EL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[zL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[FL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[PL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[ML]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[VL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[HL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[NL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[OL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{as:"h3",inverted:"",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[jL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[qL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[GL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[UL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[YL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[JL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[WL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[KL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const QL=De(eL,[["render",XL]]),ZL=z({name:"FeedDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),eI=v("img",{src:oi},null,-1),tI=v("img",{src:oi},null,-1),iI=v("a",null,"Coworkers",-1),aI=v("img",{src:zn},null,-1),lI=v("a",null,"Jenny Hess",-1),nI=v("a",null,"coworker",-1),oI=v("img",{src:qa},null,-1),sI=v("a",null,"Helen Troy",-1),rI=v("a",null,[v("img",{src:de})],-1),uI=v("a",null,[v("img",{src:de})],-1),cI=v("a",null,"Elliot Fu",-1),dI=v("a",null,"Jenny Hess",-1),mI=v("a",null,"Stevie Feliciano",-1),pI=v("a",null,"Elliot Fu",-1),fI=v("a",null,"Helen Troy",-1),gI=v("a",null,"Christian Rocha",-1),hI=v("img",{src:oi},null,-1),_I=v("div",{class:"date"},"Just now",-1),bI=v("a",{class:"user"},"Elliot Fu",-1);function vI(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-feed-label"),c=y("sui-feed-user"),g=y("sui-feed-date"),m=y("sui-feed-summary"),h=y("sui-icon"),w=y("sui-feed-like"),b=y("sui-feed-meta"),C=y("sui-feed-content"),$=y("sui-feed-event"),D=y("sui-feed"),_=y("doc-example"),S=y("sui-feed-extra"),x=y("sui-segment"),T=y("sui-container");return k(),_e("div",null,[t(p,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[eI]),_:1}),t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[tI]),_:1}),t(C,null,{default:i(()=>[n(" You added Elliot Fu to the group "),iI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[aI]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[n(" You added "),lI,n(" to your "),nI,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[oI]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[sI,n(" added 2 photos ")]),_:1}),t(S,{images:""},{default:i(()=>[rI,uI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[cI,n(" added "),dI,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[mI,n(" added "),pI,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[fI,n(" added "),gI,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(D,{inverted:""},{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[hI]),_:1}),t(C,null,{default:i(()=>[_I,t(m,null,{default:i(()=>[bI,n(" posted on his page ")]),_:1}),t(S,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const SI=De(ZL,[["render",vI]]),yI=z({name:"ItemDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),wI=v("img",{src:de},null,-1),CI=v("span",null,"Description",-1),AI=v("img",{src:nt},null,-1),kI=v("img",{src:de},null,-1),xI=v("span",null,"Description",-1),$I=v("img",{src:nt},null,-1),BI=v("img",{src:de},null,-1),TI=v("img",{src:de},null,-1),DI=v("img",{src:de},null,-1),LI=v("img",{src:de},null,-1),II=v("img",{src:de},null,-1),RI=v("img",{src:de},null,-1),EI=v("img",{src:de},null,-1),zI=v("span",{class:"price"},"$1200",-1),FI=v("span",{class:"stay"},"1 Month",-1),PI=v("img",{src:nt},null,-1),MI=v("span",{class:"price"},"$1000",-1),VI=v("span",{class:"stay"},"2 Weeks",-1),HI=v("img",{src:nt},null,-1),NI=v("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),OI=v("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),jI=v("img",{src:nt},null,-1),qI=v("img",{src:de},null,-1),GI=v("span",{class:"cinema"},"Union Square 14",-1),UI=v("img",{src:nt},null,-1),YI=v("img",{src:de},null,-1),JI=v("span",{class:"cinema"},"IFC Cinema",-1),WI=v("img",{src:nt},null,-1),KI=v("img",{src:de},null,-1),XI=v("span",{class:"cinema"},"IFC",-1),QI=v("img",{src:nt},null,-1),ZI=v("img",{src:nt},null,-1),eR=v("img",{src:nt},null,-1),tR=v("img",{src:nt},null,-1),iR=v("span",{class:"price"},"$1200",-1),aR=v("span",{class:"stay"},"1 Month",-1),lR=v("img",{src:nt},null,-1),nR=v("span",{class:"price"},"$1000",-1),oR=v("span",{class:"stay"},"2 Weeks",-1),sR=v("img",{src:nt},null,-1);function rR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-item-image"),c=y("sui-item-header"),g=y("sui-item-meta"),m=y("sui-item-description"),h=y("sui-item-extra"),w=y("sui-item-content"),b=y("sui-item"),C=y("sui-item-group"),$=y("doc-example"),D=y("sui-image"),_=y("sui-icon"),S=y("sui-label"),x=y("sui-button"),T=y("sui-segment"),I=y("sui-container");return k(),_e("div",null,[t(p,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[wI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[CI]),_:1}),t(m,null,{default:i(()=>[AI]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[kI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[xI]),_:1}),t(m,null,{default:i(()=>[$I]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[BI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[TI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[DI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[LI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[II]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[RI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[EI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[zI,FI]),_:1}),t(m,null,{default:i(()=>[PI]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[MI,VI]),_:1}),t(m,null,{default:i(()=>[HI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[NI,OI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[jI]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[qI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[GI]),_:1}),t(m,null,{default:i(()=>[UI]),_:1}),t(h,null,{default:i(()=>[t(S,null,{default:i(()=>[n("IMAX")]),_:1}),t(S,null,{default:i(()=>[t(_,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[YI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[JI]),_:1}),t(m,null,{default:i(()=>[WI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(S,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[KI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[XI]),_:1}),t(m,null,{default:i(()=>[QI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"bottom"},{default:i(()=>[t(c,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content A")]),_:1}),t(m,null,{default:i(()=>[ZI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content B")]),_:1}),t(m,null,{default:i(()=>[eR]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content C")]),_:1}),t(m,null,{default:i(()=>[tR]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[iR,aR]),_:1}),t(m,null,{default:i(()=>[lR]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[nR,oR]),_:1}),t(m,null,{default:i(()=>[sR]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const uR=De(yI,[["render",rR]]),cR=z({name:"StatisticDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),dR=v("br",null,null,-1),mR=v("br",null,null,-1),pR=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),fR=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),gR=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),hR=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function _R(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-statistic"),c=y("doc-example"),g=y("sui-statistic-group"),m=y("sui-statistic-value"),h=y("sui-statistic-label"),w=y("sui-icon"),b=y("sui-image"),C=y("sui-segment"),$=y("sui-container");return k(),_e("div",null,[t(p,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(c,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(c,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[n(" Three"),dR,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(w,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Ko}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(c,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(g,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(g,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[n(" Three"),mR,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(w,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Ko}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),pR,fR,t(s,{floated:"left",value:"2,204",label:"Views"}),gR,hR]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const bR=De(cR,[["render",_R]]),vR=z({name:"AccordionDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),SR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),yR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),wR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),CR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),AR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),kR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),xR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),$R=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),BR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),TR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),DR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),LR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),IR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),RR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),ER=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),zR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),FR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),PR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),MR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),VR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function HR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-accordion-tab"),c=y("sui-accordion"),g=y("doc-example"),m=y("sui-segment"),h=y("sui-container");return k(),_e("div",null,[t(p,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[SR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[yR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[wR,CR]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(c,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[AR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[kR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[xR,$R]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[BR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[TR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[DR,LR]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(m,{inverted:""},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[IR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[RR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[ER,zR]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(c,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[FR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[PR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[MR,VR]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const NR=De(vR,[["render",HR]]),OR=z({name:"CalendarDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function jR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-calendar"),c=y("doc-example"),g=y("sui-container");return k(),_e("div",null,[t(p,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=m=>e.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const qR=De(OR,[["render",jR]]),GR=z({name:"PropertyListTable",props:{properties:Array}});function UR(e,a,l,o,r,d){const p=y("sui-table-header-cell"),f=y("sui-table-row"),s=y("sui-table-header"),c=y("sui-table-cell"),g=y("sui-table-body"),m=y("sui-table");return k(),B(m,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.properties,h=>(k(),B(f,{key:h.name},{default:i(()=>[t(c,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.type),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.default),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Pn=De(GR,[["render",UR]]),YR=z({name:"CheckboxDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Pn},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=G(!1),d='<sui-checkbox toggle v-model="toggle" />',p=G(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:o,toggle:r,toggleCode:d,slider:p,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),JR={class:"ui form"},WR={class:"grouped fields"},KR={class:"field"},XR={class:"field"},QR={class:"field"};function ZR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-checkbox"),c=y("doc-example"),g=y("property-list-table"),m=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[v("div",JR,[v("div",WR,[v("div",KR,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),v("div",XR,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),v("div",QR,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),n(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(c,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const eE=De(YR,[["render",ZR]]),tE=z({name:"DimmerDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,l=G(!1);return{dimmerCode:e,contentDimmerCode:a,active:l,pageDimmerCode:`<div>
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
</div>`}}});function iE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-image-group"),g=y("sui-dimmer"),m=y("sui-dimmer-dimmable"),h=y("doc-example"),w=y("sui-icon"),b=y("sui-button"),C=y("sui-header-subheader"),$=y("sui-container");return k(),_e("div",null,[t(p,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(s,{src:de}),t(s,{src:de}),t(s,{src:de})]),_:1}),t(s,{size:"medium",src:ti}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(s,{src:de}),t(s,{src:de}),t(s,{src:de})]),_:1}),t(s,{size:"medium",src:ti}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[v("div",null,[t(b,{labeled:"",icon:"",onClick:a[0]||(a[0]=D=>e.active=!0)},{default:i(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=D=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(C,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const aE=De(tE,[["render",iE]]),lE=z({name:"DropdownDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=`<sui-dropdown text="File">
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
</sui-dropdown>`,a=G(null),l=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,o=G(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],d=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,p=G(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],s=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,c=G(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,m=G(null),h=`<sui-dropdown
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
/>`,w=G(null),b=`<sui-dropdown
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
/>`,C=G(null),$=`<sui-dropdown
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
/>`,D=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:l,selected2:o,searchSelectionOptions:r,searchSelectionCode:d,selected3:p,clearableSelectionOptions:f,clearableSelectionCode:s,selected4:c,multipleCode:g,selected5:m,multipleCode2:h,selected6:w,searchDropdownCode:b,selected7:C,searchInMenuCode:$,selected8:D,inlineCode:`<span>
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
</sui-button-group>`}}});function nE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-dropdown-item"),c=y("sui-divider"),g=y("sui-dropdown-menu"),m=y("sui-dropdown"),h=y("doc-example"),w=y("sui-button"),b=y("sui-button-group"),C=y("sui-container");return k(),_e("div",null,[t(p,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(m,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(c),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(m,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=$=>e.selected1=$),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(m,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=$=>e.selected2=$),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(m,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=$=>e.selected3=$),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=$=>e.selected4=$),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=$=>e.selected5=$),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=$=>e.selected6=$),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=$=>e.selected7=$),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[v("span",null,[n(" Show me posts by "),t(m,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=$=>e.selected8=$),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(m,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(b,{color:"teal"},{default:i(()=>[t(w,null,{default:i(()=>[n("Save")]),_:1}),t(m,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const oE=De(lE,[["render",nE]]),sE=z({name:"EmbedDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function rE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-embed"),c=y("doc-example"),g=y("sui-container");return k(),_e("div",null,[t(p,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const uE=De(sE,[["render",rE]]),cE=v("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),dE=v("p",null,"Is it okay to use this photo?",-1),mE=`<template>
  <SuiButton @click="show = true">Show Modal</SuiButton>
  <SuiModal v-model="show">
    <SuiModalHeader>Select a Photo</SuiModalHeader>
    <SuiModalContent image>
      <SuiImage
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <SuiModalDescription>
        <SuiHeader>Default Profile Image</SuiHeader>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </SuiModalDescription>
    </SuiModalContent>
    <SuiModalActions>
      <SuiButton positive @click="show = false">OK</SuiButton>
    </SuiModalActions>
  </SuiModal>

<script setup>
import { ref } from 'vue'
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalDescription,
  SuiModalHeader,
  SuiButton,
  SuiHeader,
  SuiImage,
} from 'vue-fomantic-ui'

const show = ref(false)
<\/script>`,pE={__name:"ModalDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(R,{label:"Modal",code:mE},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(u(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(u(on),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(u(un),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(u(rn),{image:""},{default:i(()=>[t(u(ne),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(u(qo),null,{default:i(()=>[t(u(pe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),cE,dE]),_:1})]),_:1}),t(u(sn),null,{default:i(()=>[t(u(F),{positive:"",onClick:o[1]||(o[1]=r=>a.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},fE=v("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),gE=`<template>
  <SuiButton @click="show = true">Basic Modal</SuiButton>
  <SuiModal v-model="show">
    <SuiModalHeader icon>
      <SuiIcon name="archive" />
      Archive Old Messages</SuiModalHeader>
    <SuiModalContent>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </SuiModalContent>
    <SuiModalActions>
      <SuiButton
        basic color="red" inverted
        icon="remove"
        content="No"
        @click="show = false"
      />
      <SuiButton
        basic color="green"
        icon="checkmark"
        content="Yes"
        @click="show = false"
      />
    </SuiModalActions>
  </SuiModal>
</template>

<script setup>
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalHeader,
  SuiButton,
  SuiIcon,
} from 'vue-fomantic-ui'

import { ref } from 'vue'

const show = ref(false)
<\/script>`,hE={__name:"BasicDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(R,{label:"Basic",code:gE},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(u(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(u(on),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(u(un),{icon:""},{default:i(()=>[t(u(W),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(u(rn),null,{default:i(()=>[fE]),_:1}),t(u(sn),null,{default:i(()=>[t(u(F),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=r=>a.value=!1)}),t(u(F),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},_E={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:pE},{id:"basic",label:"Basic",category:"Types",component:hE}];return(l,o)=>(k(),B(ut,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},bE="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",vE=z({name:"PopupDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,l=G(null),o=G(null),r=G(null),d=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,p=G(null),f=`<sui-card ref="triggerTriger">
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
</sui-popup>`,s=G(null),c=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=G(null),m=G(null),h=G(null),w=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,b=G(null),C=G(null),$=G(null),D=G(null),_=G(null),S=G(null),x=G(null),T=G(null),I=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,M=G(null),V=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,P=G(null),q=G(null),Q=G(null),Y=G(null),ge=G(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),X=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:o,titledTrigger3:r,titledCode:d,triggerTriger:p,triggerCode:f,basicTrigger:s,basicCode:c,wideTrigger1:g,wideTrigger2:m,wideTrigger3:h,wideCode:w,positionTrigger1:b,positionTrigger2:C,positionTrigger3:$,positionTrigger4:D,positionTrigger5:_,positionTrigger6:S,positionTrigger7:x,positionTrigger8:T,positionCode:I,flowingTrigger:M,flowingCode:V,sizeTrigger1:P,sizeTrigger2:q,sizeTrigger3:Q,sizeTrigger4:Y,sizeTrigger5:ge,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:X,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),SE=v("p",null,[v("b",null,"2"),n(" projects, $10 a month ")],-1),yE=v("p",null,[v("b",null,"5"),n(" projects, $20 a month ")],-1),wE=v("p",null,[v("b",null,"8"),n(" projects, $25 a month ")],-1);function CE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),c=y("sui-button"),g=y("sui-popup"),m=y("doc-example"),h=y("sui-image"),w=y("sui-card-header"),b=y("sui-card-description"),C=y("sui-card-content"),$=y("sui-card"),D=y("sui-rating"),_=y("sui-divider"),S=y("sui-grid-column"),x=y("sui-grid"),T=y("sui-container");return k(),_e("div",null,[t(p,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(m,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(c,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:oi,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Xo,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:Fn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t($,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:bE}),t(C,null,{default:i(()=>[t(w,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(b,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(D,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(m,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(c,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(c,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(c,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(c,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(c,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(c,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(c,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(c,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(S,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),SE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),yE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),wE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(c,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const AE=De(vE,[["render",CE]]),kE=z({name:"ProgressDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function xE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-progress"),c=y("doc-example"),g=y("sui-segment"),m=y("sui-container");return k(),_e("div",null,[t(p,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(m,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(c,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(c,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(c,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(c,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(c,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(c,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(c,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(c,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(c,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(c,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),n(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(c,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const $E=De(kE,[["render",xE]]),BE=z({name:"RatingDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Pn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),TE=v("br",null,null,-1),DE=v("br",null,null,-1),LE=v("br",null,null,-1),IE=v("br",null,null,-1),RE=v("br",null,null,-1),EE=v("br",null,null,-1),zE=v("br",null,null,-1),FE=v("br",null,null,-1),PE=v("br",null,null,-1),ME=v("br",null,null,-1),VE=v("br",null,null,-1),HE=v("br",null,null,-1),NE=v("br",null,null,-1),OE=v("br",null,null,-1),jE=v("br",null,null,-1),qE=v("br",null,null,-1),GE=v("br",null,null,-1),UE=v("br",null,null,-1),YE=v("br",null,null,-1),JE=v("br",null,null,-1),WE=v("br",null,null,-1),KE=v("br",null,null,-1),XE=v("br",null,null,-1),QE=v("br",null,null,-1),ZE=v("br",null,null,-1),ez=v("br",null,null,-1),tz=v("br",null,null,-1),iz=v("br",null,null,-1),az=v("br",null,null,-1),lz=v("br",null,null,-1),nz=v("br",null,null,-1),oz=v("br",null,null,-1),sz=v("br",null,null,-1),rz=v("br",null,null,-1),uz=v("br",null,null,-1),cz=v("br",null,null,-1),dz=v("br",null,null,-1),mz=v("br",null,null,-1),pz=v("br",null,null,-1),fz=v("br",null,null,-1),gz=v("br",null,null,-1),hz=v("br",null,null,-1),_z=v("br",null,null,-1),bz=v("br",null,null,-1),vz=v("br",null,null,-1),Sz=v("br",null,null,-1),yz=v("br",null,null,-1),wz=v("br",null,null,-1);function Cz(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-rating"),c=y("doc-example"),g=y("property-list-table"),m=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Rating",sub:"A rating indicates user interest in content"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(c,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),TE,DE,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),LE,IE,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),RE,EE,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),zE,FE,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),PE,ME,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),VE,HE,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(c,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),NE,OE,t(s,{defaultRating:2,maxRating:7,color:"orange"}),jE,qE,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),GE,UE,t(s,{defaultRating:4,maxRating:7,color:"olive"}),YE,JE,t(s,{defaultRating:5,maxRating:7,color:"green"}),WE,KE,t(s,{defaultRating:6,maxRating:7,color:"teal"}),XE,QE,t(s,{defaultRating:6,maxRating:7,color:"blue"}),ZE,ez,t(s,{defaultRating:5,maxRating:7,color:"violet"}),tz,iz,t(s,{defaultRating:4,maxRating:7,color:"purple"}),az,lz,t(s,{defaultRating:3,maxRating:7,color:"pink"}),nz,oz,t(s,{defaultRating:2,maxRating:7,color:"brown"}),sz,rz,t(s,{defaultRating:1,maxRating:7,color:"grey"}),uz,cz,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),dz,mz,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),pz,fz,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),gz,hz,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),_z,bz,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),vz,Sz,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),yz,wz,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Az=De(BE,[["render",Cz]]),kz=z({name:"SidebarDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Pn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),xz={class:"pusher"};function $z(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),c=y("sui-button"),g=y("sui-grid-column"),m=y("sui-menu-item"),h=y("sui-sidebar"),w=y("sui-image"),b=y("sui-segment"),C=y("sui-grid"),$=y("doc-example"),D=y("property-list-table"),_=y("sui-table-header-cell"),S=y("sui-table-row"),x=y("sui-table-header"),T=y("sui-table-cell"),I=y("sui-table-body"),M=y("sui-table"),V=y("sui-container");return k(),_e("div",null,[t(p,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(V,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{onClick:a[0]||(a[0]=P=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(b,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(m,null,{default:i(()=>[t(s,{name:"home"}),n(" Home ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"gamepad"}),n(" Games ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),v("div",xz,[t(b,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(w,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(D,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(M,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.events,P=>(k(),B(S,{key:P.name},{default:i(()=>[t(T,null,{default:i(()=>[n(Te(P.name),1)]),_:2},1024),t(T,null,{default:i(()=>[n(Te(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Bz=De(kz,[["render",$z]]),Tz=z({name:"SliderDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',l=G(4),o='<sui-slider labeled v-model="slider2" />',r=G(6),d='<sui-slider labeled="ticked" v-model="slider3" />',p=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=G(40),c='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),w='<sui-slider disabled v-model="slider7" />',b=G(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,$=G(3),D='<sui-slider reversed v-model="slider9" />',_=G(18),S='<sui-slider vertical v-model="slider10" :max="20" />',x=G(5),T=G(5),I=G(5),M=G(5),V=G(5),P=G(5),q=G(5),Q=G(5),Y=G(5),ge=G(5),Be=G(5),U=G(5),X=G(5),me=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,ae=`<sui-segment inverted>
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
</sui-segment>`,Le=G(5),We=G(5),st=G(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:o,slider3:r,labeledTickedCode:d,slider4:p,customLabelsCode:f,slider5:s,stepCode:c,slider6:g,rangeCode:m,slider7:h,disabledCode:w,slider8:b,invertedCode:C,slider9:$,reversedCode:D,slider10:_,verticalCode:S,redSlider:x,orangeSlider:T,yellowSlider:I,oliveSlider:M,greenSlider:V,tealSlider:P,blueSlider:q,violetSlider:Q,purpleSlider:Y,pinkSlider:ge,brownSlider:Be,greySlider:U,blackSlider:X,coloredCode:me,invertedColoredCode:ae,smallSlider:Le,largeSlider:We,bigSlider:st,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function Dz(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-slider"),c=y("doc-example"),g=y("sui-segment"),m=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),n(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(c,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(c,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),n(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(c,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),n(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(c,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.properties,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.type),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.default),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Lz=De(Tz,[["render",Dz]]),Iz=z({name:"TabDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Pn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function Rz(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-tab-panel"),c=y("sui-tab"),g=y("doc-example"),m=y("property-list-table"),h=y("sui-table-header-cell"),w=y("sui-table-row"),b=y("sui-table-header"),C=y("sui-table-cell"),$=y("sui-table-body"),D=y("sui-table"),_=y("sui-container");return k(),_e("div",null,[t(p,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(m,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(m,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(D,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[(k(!0),_e(Ae,null,et(e.events,S=>(k(),B(w,{key:S.name},{default:i(()=>[t(C,null,{default:i(()=>[n(Te(S.name),1)]),_:2},1024),t(C,null,{default:i(()=>[n(Te(S.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Ez=De(Iz,[["render",Rz]]),zz=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,Fz={__name:"MinimalDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Minimal",code:zz},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Pz=`<template>
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
<\/script>`,Mz={__name:"TitledDoc",setup(e){const{toast:a}=ct(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Titled",code:Pz},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Vz=`<template>
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
<\/script>`,Hz={__name:"ProgressBarDoc",setup(e){const{toast:a}=ct(),l=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Progress Bar",code:Vz},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(d,{color:"red",onClick:r[0]||(r[0]=p=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Nz=`<template>
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
<\/script>`,Oz={__name:"ToastTypeDoc",setup(e){const{toast:a}=ct(),l=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Toast Type",code:Nz},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(d,{onClick:r[2]||(r[2]=p=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},jz=`<template>
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
<\/script>`,qz={__name:"PositionDoc",setup(e){const{toast:a}=ct(),l=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Position",code:jz},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},Gz=v("br",null,null,-1),Uz=`<template>
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
<\/script>`,Yz={__name:"AttachedPosition",setup(e){const{toast:a}=ct(),l=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Attached Position",code:Uz},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),Gz,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},Jz=`<template>
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
<\/script>`,Wz={__name:"DirectionDoc",setup(e){const{toast:a}=ct(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Direction",code:Jz},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Kz=`<template>
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
<\/script>`,Xz={__name:"CenterAligned",setup(e){const{toast:a}=ct(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Center Aligned",code:Kz},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Qz=`<template>
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
<\/script>`,Zz={__name:"DurationDoc",setup(e){const{toast:a}=ct(),l=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Duration",code:Qz},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},eF=`<template>
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
<\/script>`,tF={__name:"MessageStyleDoc",setup(e){const{toast:a}=ct(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Use Message Style",code:eF},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},iF=`<template>
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
<\/script>`,aF={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ct(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Increasing Progress Bar",code:iF},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},lF=`<template>
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
<\/script>`,nF={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ct(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,p)=>{const f=y("SuiButton");return k(),B(R,{label:"Color Variants",code:lF},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},oF={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ct(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,p)=>{const f=y("SuiButton");return k(),B(R,{label:"Inverted Colors",code:d.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},sF=`<template>
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
<\/script>`,rF={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[K(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[K(W,{name:"check"}),"Yes"]),K(F,{color:"red",icon:!0},()=>[K(W,{name:"ban"})]),K(F,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>(k(),B(R,{label:"General",code:sF},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},uF=`<template>
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
<\/script>`,cF={__name:"ActionBasicDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[K(F,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>(k(),B(R,{label:"Basic",code:uF},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},dF=`<template>
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
<\/script>`,mF={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[K(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),K(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>(k(),B(R,{label:"Attached",code:dF},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},pF=`<template>
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
<\/script>`,fF={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[K(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),K(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>(k(),B(R,{label:"Vertical",code:pF},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},gF=v("br",null,null,-1),hF=`<template>
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
<\/script>`,_F={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[K(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),K(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>(k(),B(R,{label:"Vertical Attached",code:hF},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),gF,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},bF={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:Fz},{id:"titled",label:"Titled",category:"Types",component:Mz},{id:"progress-bar",label:"Progress Bar",category:"Types",component:Hz},{id:"toast-type",label:"Toast Type",category:"Variations",component:Oz},{id:"position",label:"Position",category:"Variations",component:qz},{id:"attached-position",label:"Attached Position",category:"Variations",component:Yz},{id:"direction",label:"Direction",category:"Variations",component:Wz},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:Xz},{id:"duration",label:"Duration",category:"Variations",component:Zz},{id:"message-style",label:"Use Message Style",category:"Variations",component:tF},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:aF},{id:"color-variants",label:"Color Variants",category:"Variations",component:nF},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:oF},{id:"general",label:"General",category:"Actions",component:rF},{id:"action-basic",label:"Basic",category:"Actions",component:cF},{id:"action-attached",label:"Attached",category:"Actions",component:mF},{id:"action-vertical",label:"Vertical",category:"Actions",component:fF},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:_F}];return(l,o)=>(k(),B(ut,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},vF=[{path:"/",component:W_,children:[{path:"/",component:Cb},{path:"elements/button",component:zw},{path:"elements/container",component:Yw},{path:"elements/divider",component:bC},{path:"elements/emoji",component:TC},{path:"elements/flag",component:EC},{path:"elements/header",component:mA},{path:"elements/icon",component:qA},{path:"elements/image",component:L0},{path:"elements/input",component:ik},{path:"elements/label",component:dx},{path:"elements/list",component:Px},{path:"elements/loader",component:o$},{path:"elements/rail",component:c$},{path:"elements/reveal",component:C$},{path:"elements/segment",component:VT},{path:"elements/step",component:GT},{path:"collections/breadcrumb",component:r2},{path:"collections/form",component:$2},{path:"collections/grid",component:E2},{path:"collections/menu",component:O2},{path:"collections/message",component:eD},{path:"collections/table",component:pD},{path:"views/advertisement",component:bD},{path:"views/card",component:ZD},{path:"views/comment",component:QL},{path:"views/feed",component:SI},{path:"views/item",component:uR},{path:"views/statistic",component:bR},{path:"modules/accordion",component:NR},{path:"modules/calendar",component:qR},{path:"modules/checkbox",component:eE},{path:"modules/dimmer",component:aE},{path:"modules/dropdown",component:oE},{path:"modules/embed",component:uE},{path:"modules/modal",component:_E},{path:"modules/popup",component:AE},{path:"modules/progress",component:$E},{path:"modules/rating",component:Az},{path:"modules/sidebar",component:Bz},{path:"modules/slider",component:Lz},{path:"modules/tab",component:Ez},{path:"modules/toast",component:bF}]}],SF=B_({history:jh("/vue-fomantic-ui/"),routes:vF,scrollBehavior(e,a,l){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=o.variable[1].inside,p=0;p<r.length;p++)d[r[p]]=e.languages.bash[r[p]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Ms=hm(kh);Ms.use(SF);Ms.use(cy);Ms.mount("#app");

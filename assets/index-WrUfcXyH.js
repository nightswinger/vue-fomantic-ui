(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(r){if(r.ep)return;r.ep=!0;const d=l(r);fetch(r.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pn(e,a){const l=new Set(e.split(","));return a?o=>l.has(o.toLowerCase()):o=>l.has(o)}const je={},ra=[],wt=()=>{},up=()=>!1,dl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xo=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Qo=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},cp=Object.prototype.hasOwnProperty,Fe=(e,a)=>cp.call(e,a),ge=Array.isArray,ua=e=>Ba(e)==="[object Map]",Ki=e=>Ba(e)==="[object Set]",Ns=e=>Ba(e)==="[object Date]",dp=e=>Ba(e)==="[object RegExp]",we=e=>typeof e=="function",Qe=e=>typeof e=="string",ki=e=>typeof e=="symbol",qe=e=>e!==null&&typeof e=="object",Zo=e=>(qe(e)||we(e))&&we(e.then)&&we(e.catch),xc=Object.prototype.toString,Ba=e=>xc.call(e),mp=e=>Ba(e).slice(8,-1),$c=e=>Ba(e)==="[object Object]",es=e=>Qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ga=pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},pp=/-(\w)/g,vt=fn(e=>e.replace(pp,(a,l)=>l?l.toUpperCase():"")),fp=/\B([A-Z])/g,Dt=fn(e=>e.replace(fp,"-$1").toLowerCase()),ml=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),qa=fn(e=>e?`on${ml(e)}`:""),qt=(e,a)=>!Object.is(e,a),ca=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Pl=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},Za=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Ml=e=>{const a=Qe(e)?Number(e):NaN;return isNaN(a)?e:a};let Os;const Bc=()=>Os||(Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",hp=pn(gp);function Ta(e){if(ge(e)){const a={};for(let l=0;l<e.length;l++){const o=e[l],r=Qe(o)?yp(o):Ta(o);if(r)for(const d in r)a[d]=r[d]}return a}else if(Qe(e)||qe(e))return e}const _p=/;(?![^(]*\))/g,bp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function yp(e){const a={};return e.replace(vp,"").split(_p).forEach(l=>{if(l){const o=l.split(bp);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function pl(e){let a="";if(Qe(e))a=e;else if(ge(e))for(let l=0;l<e.length;l++){const o=pl(e[l]);o&&(a+=o+" ")}else if(qe(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function Sp(e){if(!e)return null;let{class:a,style:l}=e;return a&&!Qe(a)&&(e.class=pl(a)),l&&(e.style=Ta(l)),e}const wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cp=pn(wp);function Tc(e){return!!e||e===""}function Ap(e,a){if(e.length!==a.length)return!1;let l=!0;for(let o=0;l&&o<e.length;o++)l=li(e[o],a[o]);return l}function li(e,a){if(e===a)return!0;let l=Ns(e),o=Ns(a);if(l||o)return l&&o?e.getTime()===a.getTime():!1;if(l=ki(e),o=ki(a),l||o)return e===a;if(l=ge(e),o=ge(a),l||o)return l&&o?Ap(e,a):!1;if(l=qe(e),o=qe(a),l||o){if(!l||!o)return!1;const r=Object.keys(e).length,d=Object.keys(a).length;if(r!==d)return!1;for(const p in e){const f=e.hasOwnProperty(p),s=a.hasOwnProperty(p);if(f&&!s||!f&&s||!li(e[p],a[p]))return!1}}return String(e)===String(a)}function gn(e,a){return e.findIndex(l=>li(l,a))}const Be=e=>Qe(e)?e:e==null?"":ge(e)||qe(e)&&(e.toString===xc||!we(e.toString))?JSON.stringify(e,Lc,2):String(e),Lc=(e,a)=>a&&a.__v_isRef?Lc(e,a.value):ua(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[o,r],d)=>(l[Pn(o,d)+" =>"]=r,l),{})}:Ki(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>Pn(l))}:ki(a)?Pn(a):qe(a)&&!ge(a)&&!$c(a)?String(a):a,Pn=(e,a="")=>{var l;return ki(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class ts{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!a&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=Tt;try{return Tt=this,a()}finally{Tt=l}}}on(){Tt=this}off(){Tt=this.parent}stop(a){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(e){return new ts(e)}function Dc(e,a=Tt){a&&a.active&&a.effects.push(e)}function is(){return Tt}function Ic(e){Tt&&Tt.cleanups.push(e)}let Pi;class va{constructor(a,l,o,r){this.fn=a,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Dc(this,r)}get dirty(){if(this._dirtyLevel===1){Xi();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(xp(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Qi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=Si,l=Pi;try{return Si=!0,Pi=this,this._runnings++,js(this),this.fn()}finally{Gs(this),this._runnings--,Pi=l,Si=a}}stop(){var a;this.active&&(js(this),Gs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function xp(e){return e.value}function js(e){e._trackId++,e._depsLength=0}function Gs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)Rc(e.deps[a],e);e.deps.length=e._depsLength}}function Rc(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function $p(e,a){e.effect instanceof va&&(e=e.effect.fn);const l=new va(e,wt,()=>{l.dirty&&l.run()});a&&(Xe(l,a),a.scope&&Dc(l,a.scope)),(!a||!a.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function Bp(e){e.effect.stop()}let Si=!0,uo=0;const Ec=[];function Xi(){Ec.push(Si),Si=!1}function Qi(){const e=Ec.pop();Si=e===void 0?!0:e}function as(){uo++}function ls(){for(uo--;!uo&&co.length;)co.shift()()}function zc(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&Rc(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const co=[];function Fc(e,a,l){as();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}Pc(e),ls()}function Pc(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,co.push(a.scheduler))}const Mc=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},Vl=new WeakMap,Mi=Symbol(""),mo=Symbol("");function xt(e,a,l){if(Si&&Pi){let o=Vl.get(e);o||Vl.set(e,o=new Map);let r=o.get(l);r||o.set(l,r=Mc(()=>o.delete(l))),zc(Pi,r)}}function ii(e,a,l,o,r,d){const p=Vl.get(e);if(!p)return;let f=[];if(a==="clear")f=[...p.values()];else if(l==="length"&&ge(e)){const s=Number(o);p.forEach((u,g)=>{(g==="length"||!ki(g)&&g>=s)&&f.push(u)})}else switch(l!==void 0&&f.push(p.get(l)),a){case"add":ge(e)?es(l)&&f.push(p.get("length")):(f.push(p.get(Mi)),ua(e)&&f.push(p.get(mo)));break;case"delete":ge(e)||(f.push(p.get(Mi)),ua(e)&&f.push(p.get(mo)));break;case"set":ua(e)&&f.push(p.get(Mi));break}as();for(const s of f)s&&Fc(s,2);ls()}function Tp(e,a){var l;return(l=Vl.get(e))==null?void 0:l.get(a)}const Lp=pn("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ki)),qs=Dp();function Dp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const o=Re(this);for(let d=0,p=this.length;d<p;d++)xt(o,"get",d+"");const r=o[a](...l);return r===-1||r===!1?o[a](...l.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Xi(),as();const o=Re(this)[a].apply(this,l);return ls(),Qi(),o}}),e}function Ip(e){const a=Re(this);return xt(a,"has",e),a.hasOwnProperty(e)}class Hc{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,o){const r=this._isReadonly,d=this._shallow;if(l==="__v_isReactive")return!r;if(l==="__v_isReadonly")return r;if(l==="__v_isShallow")return d;if(l==="__v_raw")return o===(r?d?Uc:qc:d?Gc:jc).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const p=ge(a);if(!r){if(p&&Fe(qs,l))return Reflect.get(qs,l,o);if(l==="hasOwnProperty")return Ip}const f=Reflect.get(a,l,o);return(ki(l)?Vc.has(l):Lp(l))||(r||xt(a,"get",l),d)?f:mt(f)?p&&es(l)?f:f.value:qe(f)?r?os(f):oi(f):f}}class Nc extends Hc{constructor(a=!1){super(!1,a)}set(a,l,o,r){let d=a[l];if(!this._shallow){const s=Oi(d);if(!el(o)&&!Oi(o)&&(d=Re(d),o=Re(o)),!ge(a)&&mt(d)&&!mt(o))return s?!1:(d.value=o,!0)}const p=ge(a)&&es(l)?Number(l)<a.length:Fe(a,l),f=Reflect.set(a,l,o,r);return a===Re(r)&&(p?qt(o,d)&&ii(a,"set",l,o):ii(a,"add",l,o)),f}deleteProperty(a,l){const o=Fe(a,l);a[l];const r=Reflect.deleteProperty(a,l);return r&&o&&ii(a,"delete",l,void 0),r}has(a,l){const o=Reflect.has(a,l);return(!ki(l)||!Vc.has(l))&&xt(a,"has",l),o}ownKeys(a){return xt(a,"iterate",ge(a)?"length":Mi),Reflect.ownKeys(a)}}class Oc extends Hc{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const Rp=new Nc,Ep=new Oc,zp=new Nc(!0),Fp=new Oc(!0),ns=e=>e,hn=e=>Reflect.getPrototypeOf(e);function _l(e,a,l=!1,o=!1){e=e.__v_raw;const r=Re(e),d=Re(a);l||(qt(a,d)&&xt(r,"get",a),xt(r,"get",d));const{has:p}=hn(r),f=o?ns:l?us:tl;if(p.call(r,a))return f(e.get(a));if(p.call(r,d))return f(e.get(d));e!==r&&e.get(a)}function bl(e,a=!1){const l=this.__v_raw,o=Re(l),r=Re(e);return a||(qt(e,r)&&xt(o,"has",e),xt(o,"has",r)),e===r?l.has(e):l.has(e)||l.has(r)}function vl(e,a=!1){return e=e.__v_raw,!a&&xt(Re(e),"iterate",Mi),Reflect.get(e,"size",e)}function Us(e){e=Re(e);const a=Re(this);return hn(a).has.call(a,e)||(a.add(e),ii(a,"add",e,e)),this}function Ys(e,a){a=Re(a);const l=Re(this),{has:o,get:r}=hn(l);let d=o.call(l,e);d||(e=Re(e),d=o.call(l,e));const p=r.call(l,e);return l.set(e,a),d?qt(a,p)&&ii(l,"set",e,a):ii(l,"add",e,a),this}function Js(e){const a=Re(this),{has:l,get:o}=hn(a);let r=l.call(a,e);r||(e=Re(e),r=l.call(a,e)),o&&o.call(a,e);const d=a.delete(e);return r&&ii(a,"delete",e,void 0),d}function Ws(){const e=Re(this),a=e.size!==0,l=e.clear();return a&&ii(e,"clear",void 0,void 0),l}function yl(e,a){return function(o,r){const d=this,p=d.__v_raw,f=Re(p),s=a?ns:e?us:tl;return!e&&xt(f,"iterate",Mi),p.forEach((u,g)=>o.call(r,s(u),s(g),d))}}function Sl(e,a,l){return function(...o){const r=this.__v_raw,d=Re(r),p=ua(d),f=e==="entries"||e===Symbol.iterator&&p,s=e==="keys"&&p,u=r[e](...o),g=l?ns:a?us:tl;return!a&&xt(d,"iterate",s?mo:Mi),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:f?[g(m[0]),g(m[1])]:g(m),done:h}},[Symbol.iterator](){return this}}}}function ui(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Pp(){const e={get(d){return _l(this,d)},get size(){return vl(this)},has:bl,add:Us,set:Ys,delete:Js,clear:Ws,forEach:yl(!1,!1)},a={get(d){return _l(this,d,!1,!0)},get size(){return vl(this)},has:bl,add:Us,set:Ys,delete:Js,clear:Ws,forEach:yl(!1,!0)},l={get(d){return _l(this,d,!0)},get size(){return vl(this,!0)},has(d){return bl.call(this,d,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:yl(!0,!1)},o={get(d){return _l(this,d,!0,!0)},get size(){return vl(this,!0)},has(d){return bl.call(this,d,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:yl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=Sl(d,!1,!1),l[d]=Sl(d,!0,!1),a[d]=Sl(d,!1,!0),o[d]=Sl(d,!0,!0)}),[e,l,a,o]}const[Mp,Vp,Hp,Np]=Pp();function _n(e,a){const l=a?e?Np:Hp:e?Vp:Mp;return(o,r,d)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Fe(l,r)&&r in o?l:o,r,d)}const Op={get:_n(!1,!1)},jp={get:_n(!1,!0)},Gp={get:_n(!0,!1)},qp={get:_n(!0,!0)},jc=new WeakMap,Gc=new WeakMap,qc=new WeakMap,Uc=new WeakMap;function Up(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(e){return e.__v_skip||!Object.isExtensible(e)?0:Up(mp(e))}function oi(e){return Oi(e)?e:bn(e,!1,Rp,Op,jc)}function Yc(e){return bn(e,!1,zp,jp,Gc)}function os(e){return bn(e,!0,Ep,Gp,qc)}function Jp(e){return bn(e,!0,Fp,qp,Uc)}function bn(e,a,l,o,r){if(!qe(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=r.get(e);if(d)return d;const p=Yp(e);if(p===0)return e;const f=new Proxy(e,p===2?o:l);return r.set(e,f),f}function Vi(e){return Oi(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Oi(e){return!!(e&&e.__v_isReadonly)}function el(e){return!!(e&&e.__v_isShallow)}function ss(e){return Vi(e)||Oi(e)}function Re(e){const a=e&&e.__v_raw;return a?Re(a):e}function rs(e){return Pl(e,"__v_skip",!0),e}const tl=e=>qe(e)?oi(e):e,us=e=>qe(e)?os(e):e;class Jc{constructor(a,l,o,r){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new va(()=>a(this._value),()=>da(this,1),()=>this.dep&&Pc(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Re(this);return(!a._cacheable||a.effect.dirty)&&qt(a._value,a._value=a.effect.run())&&da(a,2),cs(a),a.effect._dirtyLevel>=1&&da(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Wp(e,a,l=!1){let o,r;const d=we(e);return d?(o=e,r=wt):(o=e.get,r=e.set),new Jc(o,r,d||!r,l)}function cs(e){Si&&Pi&&(e=Re(e),zc(Pi,e.dep||(e.dep=Mc(()=>e.dep=void 0,e instanceof Jc?e:void 0))))}function da(e,a=2,l){e=Re(e);const o=e.dep;o&&Fc(o,a)}function mt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Kc(e,!1)}function Wc(e){return Kc(e,!0)}function Kc(e,a){return mt(e)?e:new Kp(e,a)}class Kp{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Re(a),this._value=l?a:tl(a)}get value(){return cs(this),this._value}set value(a){const l=this.__v_isShallow||el(a)||Oi(a);a=l?a:Re(a),qt(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:tl(a),da(this,2))}}function Xp(e){da(e,2)}function c(e){return mt(e)?e.value:e}function Qp(e){return we(e)?e():c(e)}const Zp={get:(e,a,l)=>c(Reflect.get(e,a,l)),set:(e,a,l,o)=>{const r=e[a];return mt(r)&&!mt(l)?(r.value=l,!0):Reflect.set(e,a,l,o)}};function ds(e){return Vi(e)?e:new Proxy(e,Zp)}class ef{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=a(()=>cs(this),()=>da(this));this._get=l,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function Xc(e){return new ef(e)}function tf(e){const a=ge(e)?new Array(e.length):{};for(const l in e)a[l]=Qc(e,l);return a}class af{constructor(a,l,o){this._object=a,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return Tp(Re(this._object),this._key)}}class lf{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function po(e,a,l){return mt(e)?e:we(e)?new lf(e):qe(e)&&arguments.length>1?Qc(e,a,l):G(e)}function Qc(e,a,l){const o=e[a];return mt(o)?o:new af(e,a,l)}const nf={GET:"get",HAS:"has",ITERATE:"iterate"},of={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sf(e,a){}const rf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ai(e,a,l,o){let r;try{r=o?e(...o):e()}catch(d){Zi(d,a,l)}return r}function It(e,a,l,o){if(we(e)){const d=ai(e,a,l,o);return d&&Zo(d)&&d.catch(p=>{Zi(p,a,l)}),d}const r=[];for(let d=0;d<e.length;d++)r.push(It(e[d],a,l,o));return r}function Zi(e,a,l,o=!0){const r=a?a.vnode:null;if(a){let d=a.parent;const p=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${l}`;for(;d;){const u=d.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](e,p,f)===!1)return}d=d.parent}const s=a.appContext.config.errorHandler;if(s){ai(s,null,10,[e,p,f]);return}}cf(e,l,r,o)}function cf(e,a,l,o=!0){console.error(e)}let il=!1,fo=!1;const gt=[];let Jt=0;const ma=[];let fi=null,zi=0;const Zc=Promise.resolve();let ms=null;function La(e){const a=ms||Zc;return e?a.then(this?e.bind(this):e):a}function df(e){let a=Jt+1,l=gt.length;for(;a<l;){const o=a+l>>>1,r=gt[o],d=al(r);d<e||d===e&&r.pre?a=o+1:l=o}return a}function vn(e){(!gt.length||!gt.includes(e,il&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?gt.push(e):gt.splice(df(e.id),0,e),ed())}function ed(){!il&&!fo&&(fo=!0,ms=Zc.then(td))}function mf(e){const a=gt.indexOf(e);a>Jt&&gt.splice(a,1)}function Hl(e){ge(e)?ma.push(...e):(!fi||!fi.includes(e,e.allowRecurse?zi+1:zi))&&ma.push(e),ed()}function Ks(e,a,l=il?Jt+1:0){for(;l<gt.length;l++){const o=gt[l];if(o&&o.pre){if(e&&o.id!==e.uid)continue;gt.splice(l,1),l--,o()}}}function Nl(e){if(ma.length){const a=[...new Set(ma)].sort((l,o)=>al(l)-al(o));if(ma.length=0,fi){fi.push(...a);return}for(fi=a,zi=0;zi<fi.length;zi++)fi[zi]();fi=null,zi=0}}const al=e=>e.id==null?1/0:e.id,pf=(e,a)=>{const l=al(e)-al(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function td(e){fo=!1,il=!0,gt.sort(pf);try{for(Jt=0;Jt<gt.length;Jt++){const a=gt[Jt];a&&a.active!==!1&&ai(a,null,14)}}finally{Jt=0,gt.length=0,Nl(),il=!1,ms=null,(gt.length||ma.length)&&td()}}let la,wl=[];function id(e,a){var l,o;la=e,la?(la.enabled=!0,wl.forEach(({event:r,args:d})=>la.emit(r,...d)),wl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{id(d,a)}),setTimeout(()=>{la||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,wl=[])},3e3)):wl=[]}function ff(e,a,...l){if(e.isUnmounted)return;const o=e.vnode.props||je;let r=l;const d=a.startsWith("update:"),p=d&&a.slice(7);if(p&&p in o){const g=`${p==="modelValue"?"model":p}Modifiers`,{number:m,trim:h}=o[g]||je;h&&(r=l.map(v=>Qe(v)?v.trim():v)),m&&(r=l.map(Za))}let f,s=o[f=qa(a)]||o[f=qa(vt(a))];!s&&d&&(s=o[f=qa(Dt(a))]),s&&It(s,e,6,r);const u=o[f+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,It(u,e,6,r)}}function ad(e,a,l=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const d=e.emits;let p={},f=!1;if(!we(e)){const s=u=>{const g=ad(u,a,!0);g&&(f=!0,Xe(p,g))};!l&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!d&&!f?(qe(e)&&o.set(e,null),null):(ge(d)?d.forEach(s=>p[s]=null):Xe(p,d),qe(e)&&o.set(e,p),p)}function yn(e,a){return!e||!dl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Fe(e,a[0].toLowerCase()+a.slice(1))||Fe(e,Dt(a))||Fe(e,a))}let lt=null,Sn=null;function ll(e){const a=lt;return lt=e,Sn=e&&e.type.__scopeId||null,a}function ld(e){Sn=e}function nd(){Sn=null}const gf=e=>i;function i(e,a=lt,l){if(!a||e._n)return e;const o=(...r)=>{o._d&&wo(-1);const d=ll(a);let p;try{p=e(...r)}finally{ll(d),o._d&&wo(1)}return p};return o._n=!0,o._c=!0,o._d=!0,o}function Rl(e){const{type:a,vnode:l,proxy:o,withProxy:r,props:d,propsOptions:[p],slots:f,attrs:s,emit:u,render:g,renderCache:m,data:h,setupState:v,ctx:b,inheritAttrs:C}=e;let k,T;const _=ll(e);try{if(l.shapeFlag&4){const x=r||o,B=x;k=Lt(g.call(B,x,m,d,v,h,b)),T=s}else{const x=a;k=Lt(x.length>1?x(d,{attrs:s,slots:f,emit:u}):x(d,null)),T=a.props?s:_f(s)}}catch(x){Ja.length=0,Zi(x,e,1),k=t(_t)}let w=k;if(T&&C!==!1){const x=Object.keys(T),{shapeFlag:B}=w;x.length&&B&7&&(p&&x.some(Xo)&&(T=bf(T,p)),w=Wt(w,T))}return l.dirs&&(w=Wt(w),w.dirs=w.dirs?w.dirs.concat(l.dirs):l.dirs),l.transition&&(w.transition=l.transition),k=w,ll(_),k}function hf(e,a=!0){let l;for(let o=0;o<e.length;o++){const r=e[o];if(Ht(r)){if(r.type!==_t||r.children==="v-if"){if(l)return;l=r}}else return}return l}const _f=e=>{let a;for(const l in e)(l==="class"||l==="style"||dl(l))&&((a||(a={}))[l]=e[l]);return a},bf=(e,a)=>{const l={};for(const o in e)(!Xo(o)||!(o.slice(9)in a))&&(l[o]=e[o]);return l};function vf(e,a,l){const{props:o,children:r,component:d}=e,{props:p,children:f,patchFlag:s}=a,u=d.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&s>=0){if(s&1024)return!0;if(s&16)return o?Xs(o,p,u):!!p;if(s&8){const g=a.dynamicProps;for(let m=0;m<g.length;m++){const h=g[m];if(p[h]!==o[h]&&!yn(u,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:o===p?!1:o?p?Xs(o,p,u):!0:!!p;return!1}function Xs(e,a,l){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const d=o[r];if(a[d]!==e[d]&&!yn(l,d))return!0}return!1}function ps({vnode:e,parent:a},l){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=l,a=a.parent;else break}}const fs="components",yf="directives";function S(e,a){return gs(fs,e,!0,a)||e}const od=Symbol.for("v-ndc");function sd(e){return Qe(e)?gs(fs,e,!1)||e:e||od}function wn(e){return gs(yf,e)}function gs(e,a,l=!0,o=!1){const r=lt||ot;if(r){const d=r.type;if(e===fs){const f=$o(d,!1);if(f&&(f===a||f===vt(a)||f===ml(vt(a))))return d}const p=Qs(r[e]||d[e],a)||Qs(r.appContext[e],a);return!p&&o?d:p}}function Qs(e,a){return e&&(e[a]||e[vt(a)]||e[ml(vt(a))])}const rd=e=>e.__isSuspense;let go=0;const Sf={name:"Suspense",__isSuspense:!0,process(e,a,l,o,r,d,p,f,s,u){if(e==null)Cf(a,l,o,r,d,p,f,s,u);else{if(d&&d.deps>0){a.suspense=e.suspense;return}Af(e,a,l,o,r,p,f,s,u)}},hydrate:kf,create:hs,normalize:xf},wf=Sf;function nl(e,a){const l=e.props&&e.props[a];we(l)&&l()}function Cf(e,a,l,o,r,d,p,f,s){const{p:u,o:{createElement:g}}=s,m=g("div"),h=e.suspense=hs(e,r,o,a,m,l,d,p,f,s);u(null,h.pendingBranch=e.ssContent,m,null,o,h,d,p),h.deps>0?(nl(e,"onPending"),nl(e,"onFallback"),u(null,e.ssFallback,a,l,o,null,d,p),pa(h,e.ssFallback)):h.resolve(!1,!0)}function Af(e,a,l,o,r,d,p,f,{p:s,um:u,o:{createElement:g}}){const m=a.suspense=e.suspense;m.vnode=a,a.el=e.el;const h=a.ssContent,v=a.ssFallback,{activeBranch:b,pendingBranch:C,isInFallback:k,isHydrating:T}=m;if(C)m.pendingBranch=h,Gt(h,C)?(s(C,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0?m.resolve():k&&(T||(s(b,v,l,o,r,null,d,p,f),pa(m,v)))):(m.pendingId=go++,T?(m.isHydrating=!1,m.activeBranch=C):u(C,r,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),k?(s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0?m.resolve():(s(b,v,l,o,r,null,d,p,f),pa(m,v))):b&&Gt(h,b)?(s(b,h,l,o,r,m,d,p,f),m.resolve(!0)):(s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0&&m.resolve()));else if(b&&Gt(h,b))s(b,h,l,o,r,m,d,p,f),pa(m,h);else if(nl(a,"onPending"),m.pendingBranch=h,h.shapeFlag&512?m.pendingId=h.component.suspenseId:m.pendingId=go++,s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0)m.resolve();else{const{timeout:_,pendingId:w}=m;_>0?setTimeout(()=>{m.pendingId===w&&m.fallback(v)},_):_===0&&m.fallback(v)}}function hs(e,a,l,o,r,d,p,f,s,u,g=!1){const{p:m,m:h,um:v,n:b,o:{parentNode:C,remove:k}}=u;let T;const _=$f(e);_&&a!=null&&a.pendingBranch&&(T=a.pendingId,a.deps++);const w=e.props?Ml(e.props.timeout):void 0,x=d,B={vnode:e,parent:a,parentComponent:l,namespace:p,container:o,hiddenContainer:r,deps:0,pendingId:go++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(I=!1,M=!1){const{vnode:V,activeBranch:P,pendingBranch:j,pendingId:X,effects:U,parentComponent:pe,container:$e}=B;let q=!1;B.isHydrating?B.isHydrating=!1:I||(q=P&&j.transition&&j.transition.mode==="out-in",q&&(P.transition.afterLeave=()=>{X===B.pendingId&&(h(j,$e,d===x?b(P):d,0),Hl(U))}),P&&(C(P.el)!==B.hiddenContainer&&(d=b(P)),v(P,pe,B,!0)),q||h(j,$e,d,0)),pa(B,j),B.pendingBranch=null,B.isInFallback=!1;let K=B.parent,de=!1;for(;K;){if(K.pendingBranch){K.effects.push(...U),de=!0;break}K=K.parent}!de&&!q&&Hl(U),B.effects=[],_&&a&&a.pendingBranch&&T===a.pendingId&&(a.deps--,a.deps===0&&!M&&a.resolve()),nl(V,"onResolve")},fallback(I){if(!B.pendingBranch)return;const{vnode:M,activeBranch:V,parentComponent:P,container:j,namespace:X}=B;nl(M,"onFallback");const U=b(V),pe=()=>{B.isInFallback&&(m(null,I,j,U,P,null,X,f,s),pa(B,I))},$e=I.transition&&I.transition.mode==="out-in";$e&&(V.transition.afterLeave=pe),B.isInFallback=!0,v(V,P,null,!0),$e||pe()},move(I,M,V){B.activeBranch&&h(B.activeBranch,I,M,V),B.container=I},next(){return B.activeBranch&&b(B.activeBranch)},registerDep(I,M){const V=!!B.pendingBranch;V&&B.deps++;const P=I.vnode.el;I.asyncDep.catch(j=>{Zi(j,I,0)}).then(j=>{if(I.isUnmounted||B.isUnmounted||B.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:X}=I;ko(I,j,!1),P&&(X.el=P);const U=!P&&I.subTree.el;M(I,X,C(P||I.subTree.el),P?null:b(I.subTree),B,p,s),U&&k(U),ps(I,X.el),V&&--B.deps===0&&B.resolve()})},unmount(I,M){B.isUnmounted=!0,B.activeBranch&&v(B.activeBranch,l,I,M),B.pendingBranch&&v(B.pendingBranch,l,I,M)}};return B}function kf(e,a,l,o,r,d,p,f,s){const u=a.suspense=hs(a,o,l,e.parentNode,document.createElement("div"),null,r,d,p,f,!0),g=s(e,u.pendingBranch=a.ssContent,l,u,d,p);return u.deps===0&&u.resolve(!1,!0),g}function xf(e){const{shapeFlag:a,children:l}=e,o=a&32;e.ssContent=Zs(o?l.default:l),e.ssFallback=o?Zs(l.fallback):t(_t)}function Zs(e){let a;if(we(e)){const l=Ui&&e._c;l&&(e._d=!1,$()),e=e(),l&&(e._d=!0,a=Ct,Hd())}return ge(e)&&(e=hf(e)),e=Lt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function ud(e,a){a&&a.pendingBranch?ge(e)?a.effects.push(...e):a.effects.push(e):Hl(e)}function pa(e,a){e.activeBranch=a;const{vnode:l,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;l.el=r,o&&o.subTree===l&&(o.vnode.el=r,ps(o,r))}function $f(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const cd=Symbol.for("v-scx"),dd=()=>He(cd);function _s(e,a){return fl(e,null,a)}function md(e,a){return fl(e,null,{flush:"post"})}function pd(e,a){return fl(e,null,{flush:"sync"})}const Cl={};function ht(e,a,l){return fl(e,a,l)}function fl(e,a,{immediate:l,deep:o,flush:r,once:d,onTrack:p,onTrigger:f}=je){if(a&&d){const I=a;a=(...M)=>{I(...M),B()}}const s=ot,u=I=>o===!0?I:Fi(I,o===!1?1:void 0);let g,m=!1,h=!1;if(mt(e)?(g=()=>e.value,m=el(e)):Vi(e)?(g=()=>u(e),m=!0):ge(e)?(h=!0,m=e.some(I=>Vi(I)||el(I)),g=()=>e.map(I=>{if(mt(I))return I.value;if(Vi(I))return u(I);if(we(I))return ai(I,s,2)})):we(e)?a?g=()=>ai(e,s,2):g=()=>(v&&v(),It(e,s,3,[b])):g=wt,a&&o){const I=g;g=()=>Fi(I())}let v,b=I=>{v=w.onStop=()=>{ai(I,s,4),v=w.onStop=void 0}},C;if(hl)if(b=wt,a?l&&It(a,s,3,[g(),h?[]:void 0,b]):g(),r==="sync"){const I=dd();C=I.__watcherHandles||(I.__watcherHandles=[])}else return wt;let k=h?new Array(e.length).fill(Cl):Cl;const T=()=>{if(!(!w.active||!w.dirty))if(a){const I=w.run();(o||m||(h?I.some((M,V)=>qt(M,k[V])):qt(I,k)))&&(v&&v(),It(a,s,3,[I,k===Cl?void 0:h&&k[0]===Cl?[]:k,b]),k=I)}else w.run()};T.allowRecurse=!!a;let _;r==="sync"?_=T:r==="post"?_=()=>ct(T,s&&s.suspense):(T.pre=!0,s&&(T.id=s.uid),_=()=>vn(T));const w=new va(g,wt,_),x=is(),B=()=>{w.stop(),x&&Qo(x.effects,w)};return a?l?T():k=w.run():r==="post"?ct(w.run.bind(w),s&&s.suspense):w.run(),C&&C.push(B),B}function Bf(e,a,l){const o=this.proxy,r=Qe(e)?e.includes(".")?fd(o,e):()=>o[e]:e.bind(o,o);let d;we(a)?d=a:(d=a.handler,l=a);const p=Yi(this),f=fl(r,d.bind(o),l);return p(),f}function fd(e,a){const l=a.split(".");return()=>{let o=e;for(let r=0;r<l.length&&o;r++)o=o[l[r]];return o}}function Fi(e,a,l=0,o){if(!qe(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),mt(e))Fi(e.value,a,l,o);else if(ge(e))for(let r=0;r<e.length;r++)Fi(e[r],a,l,o);else if(Ki(e)||ua(e))e.forEach(r=>{Fi(r,a,l,o)});else if($c(e))for(const r in e)Fi(e[r],a,l,o);return e}function wi(e,a){if(lt===null)return e;const l=Tn(lt)||lt.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[d,p,f,s=je]=a[r];d&&(we(d)&&(d={mounted:d,updated:d}),d.deep&&Fi(p),o.push({dir:d,instance:l,value:p,oldValue:void 0,arg:f,modifiers:s}))}return e}function Yt(e,a,l,o){const r=e.dirs,d=a&&a.dirs;for(let p=0;p<r.length;p++){const f=r[p];d&&(f.oldValue=d[p].value);let s=f.dir[o];s&&(Xi(),It(s,l,8,[e.el,f,e,a]),Qi())}}const gi=Symbol("_leaveCb"),Al=Symbol("_enterCb");function bs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bi(()=>{e.isMounted=!0}),xn(()=>{e.isUnmounting=!0}),e}const Ft=[Function,Array],vs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},Tf={name:"BaseTransition",props:vs,setup(e,{slots:a}){const l=Xt(),o=bs();let r;return()=>{const d=a.default&&Cn(a.default(),!0);if(!d||!d.length)return;let p=d[0];if(d.length>1){for(const C of d)if(C.type!==_t){p=C;break}}const f=Re(e),{mode:s}=f;if(o.isLeaving)return Mn(p);const u=er(p);if(!u)return Mn(p);const g=ya(u,f,o,l);ji(u,g);const m=l.subTree,h=m&&er(m);let v=!1;const{getTransitionKey:b}=u.type;if(b){const C=b();r===void 0?r=C:C!==r&&(r=C,v=!0)}if(h&&h.type!==_t&&(!Gt(u,h)||v)){const C=ya(h,f,o,l);if(ji(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Mn(p);s==="in-out"&&u.type!==_t&&(C.delayLeave=(k,T,_)=>{const w=hd(o,h);w[String(h.key)]=h,k[gi]=()=>{T(),k[gi]=void 0,delete g.delayedLeave},g.delayedLeave=_})}return p}}},gd=Tf;function hd(e,a){const{leavingVNodes:l}=e;let o=l.get(a.type);return o||(o=Object.create(null),l.set(a.type,o)),o}function ya(e,a,l,o){const{appear:r,mode:d,persisted:p=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:m,onLeave:h,onAfterLeave:v,onLeaveCancelled:b,onBeforeAppear:C,onAppear:k,onAfterAppear:T,onAppearCancelled:_}=a,w=String(e.key),x=hd(l,e),B=(V,P)=>{V&&It(V,o,9,P)},I=(V,P)=>{const j=P[1];B(V,P),ge(V)?V.every(X=>X.length<=1)&&j():V.length<=1&&j()},M={mode:d,persisted:p,beforeEnter(V){let P=f;if(!l.isMounted)if(r)P=C||f;else return;V[gi]&&V[gi](!0);const j=x[w];j&&Gt(e,j)&&j.el[gi]&&j.el[gi](),B(P,[V])},enter(V){let P=s,j=u,X=g;if(!l.isMounted)if(r)P=k||s,j=T||u,X=_||g;else return;let U=!1;const pe=V[Al]=$e=>{U||(U=!0,$e?B(X,[V]):B(j,[V]),M.delayedLeave&&M.delayedLeave(),V[Al]=void 0)};P?I(P,[V,pe]):pe()},leave(V,P){const j=String(e.key);if(V[Al]&&V[Al](!0),l.isUnmounting)return P();B(m,[V]);let X=!1;const U=V[gi]=pe=>{X||(X=!0,P(),pe?B(b,[V]):B(v,[V]),V[gi]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?I(h,[V,U]):U()},clone(V){return ya(V,a,l,o)}};return M}function Mn(e){if(gl(e))return e=Wt(e),e.children=null,e}function er(e){return gl(e)?e.children?e.children[0]:void 0:e}function ji(e,a){e.shapeFlag&6&&e.component?ji(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function Cn(e,a=!1,l){let o=[],r=0;for(let d=0;d<e.length;d++){let p=e[d];const f=l==null?p.key:String(l)+String(p.key!=null?p.key:d);p.type===Ce?(p.patchFlag&128&&r++,o=o.concat(Cn(p.children,a,f))):(a||p.type!==_t)&&o.push(f!=null?Wt(p,{key:f}):p)}if(r>1)for(let d=0;d<o.length;d++)o[d].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function z(e,a){return we(e)?Xe({name:e.name},a,{setup:e}):e}const Hi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Lf(e){we(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:o,delay:r=200,timeout:d,suspensible:p=!0,onError:f}=e;let s=null,u,g=0;const m=()=>(g++,s=null,h()),h=()=>{let v;return s||(v=s=a().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),f)return new Promise((C,k)=>{f(b,()=>C(m()),()=>k(b),g+1)});throw b}).then(b=>v!==s&&s?s:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=ot;if(u)return()=>Vn(u,v);const b=_=>{s=null,Zi(_,v,13,!o)};if(p&&v.suspense||hl)return h().then(_=>()=>Vn(_,v)).catch(_=>(b(_),()=>o?t(o,{error:_}):null));const C=G(!1),k=G(),T=G(!!r);return r&&setTimeout(()=>{T.value=!1},r),d!=null&&setTimeout(()=>{if(!C.value&&!k.value){const _=new Error(`Async component timed out after ${d}ms.`);b(_),k.value=_}},d),h().then(()=>{C.value=!0,v.parent&&gl(v.parent.vnode)&&(v.parent.effect.dirty=!0,vn(v.parent.update))}).catch(_=>{b(_),k.value=_}),()=>{if(C.value&&u)return Vn(u,v);if(k.value&&o)return t(o,{error:k.value});if(l&&!T.value)return t(l)}}})}function Vn(e,a){const{ref:l,props:o,children:r,ce:d}=a.vnode,p=t(e,o,r);return p.ref=l,p.ce=d,delete a.vnode.ce,p}const gl=e=>e.type.__isKeepAlive,Df={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=Xt(),o=l.ctx;if(!o.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,d=new Set;let p=null;const f=l.suspense,{renderer:{p:s,m:u,um:g,o:{createElement:m}}}=o,h=m("div");o.activate=(_,w,x,B,I)=>{const M=_.component;u(_,w,x,0,f),s(M.vnode,_,w,x,M,f,B,_.slotScopeIds,I),ct(()=>{M.isDeactivated=!1,M.a&&ca(M.a);const V=_.props&&_.props.onVnodeMounted;V&&yt(V,M.parent,_)},f)},o.deactivate=_=>{const w=_.component;u(_,h,null,1,f),ct(()=>{w.da&&ca(w.da);const x=_.props&&_.props.onVnodeUnmounted;x&&yt(x,w.parent,_),w.isDeactivated=!0},f)};function v(_){Hn(_),g(_,l,f,!0)}function b(_){r.forEach((w,x)=>{const B=$o(w.type);B&&(!_||!_(B))&&C(x)})}function C(_){const w=r.get(_);!p||!Gt(w,p)?v(w):p&&Hn(p),r.delete(_),d.delete(_)}ht(()=>[e.include,e.exclude],([_,w])=>{_&&b(x=>Va(_,x)),w&&b(x=>!Va(w,x))},{flush:"post",deep:!0});let k=null;const T=()=>{k!=null&&r.set(k,Nn(l.subTree))};return Bi(T),kn(T),xn(()=>{r.forEach(_=>{const{subTree:w,suspense:x}=l,B=Nn(w);if(_.type===B.type&&_.key===B.key){Hn(B);const I=B.component.da;I&&ct(I,x);return}v(_)})}),()=>{if(k=null,!a.default)return null;const _=a.default(),w=_[0];if(_.length>1)return p=null,_;if(!Ht(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return p=null,w;let x=Nn(w);const B=x.type,I=$o(Hi(x)?x.type.__asyncResolved||{}:B),{include:M,exclude:V,max:P}=e;if(M&&(!I||!Va(M,I))||V&&I&&Va(V,I))return p=x,w;const j=x.key==null?B:x.key,X=r.get(j);return x.el&&(x=Wt(x),w.shapeFlag&128&&(w.ssContent=x)),k=j,X?(x.el=X.el,x.component=X.component,x.transition&&ji(x,x.transition),x.shapeFlag|=512,d.delete(j),d.add(j)):(d.add(j),P&&d.size>parseInt(P,10)&&C(d.values().next().value)),x.shapeFlag|=256,p=x,rd(w.type)?w:x}}},If=Df;function Va(e,a){return ge(e)?e.some(l=>Va(l,a)):Qe(e)?e.split(",").includes(a):dp(e)?e.test(a):!1}function ys(e,a){_d(e,"a",a)}function Ss(e,a){_d(e,"da",a)}function _d(e,a,l=ot){const o=e.__wdc||(e.__wdc=()=>{let r=l;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(An(a,o,l),l){let r=l.parent;for(;r&&r.parent;)gl(r.parent.vnode)&&Rf(o,a,l,r),r=r.parent}}function Rf(e,a,l,o){const r=An(a,e,o,!0);ea(()=>{Qo(o[a],r)},l)}function Hn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Nn(e){return e.shapeFlag&128?e.ssContent:e}function An(e,a,l=ot,o=!1){if(l){const r=l[e]||(l[e]=[]),d=a.__weh||(a.__weh=(...p)=>{if(l.isUnmounted)return;Xi();const f=Yi(l),s=It(a,l,e,p);return f(),Qi(),s});return o?r.unshift(d):r.push(d),d}}const si=e=>(a,l=ot)=>(!hl||e==="sp")&&An(e,(...o)=>a(...o),l),bd=si("bm"),Bi=si("m"),vd=si("bu"),kn=si("u"),xn=si("bum"),ea=si("um"),yd=si("sp"),Sd=si("rtg"),wd=si("rtc");function Cd(e,a=ot){An("ec",e,a)}function et(e,a,l,o){let r;const d=l&&l[o];if(ge(e)||Qe(e)){r=new Array(e.length);for(let p=0,f=e.length;p<f;p++)r[p]=a(e[p],p,void 0,d&&d[p])}else if(typeof e=="number"){r=new Array(e);for(let p=0;p<e;p++)r[p]=a(p+1,p,void 0,d&&d[p])}else if(qe(e))if(e[Symbol.iterator])r=Array.from(e,(p,f)=>a(p,f,void 0,d&&d[f]));else{const p=Object.keys(e);r=new Array(p.length);for(let f=0,s=p.length;f<s;f++){const u=p[f];r[f]=a(e[u],u,f,d&&d[f])}}else r=[];return l&&(l[o]=r),r}function Ef(e,a){for(let l=0;l<a.length;l++){const o=a[l];if(ge(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const d=o.fn(...r);return d&&(d.key=o.key),d}:o.fn)}return e}function Gi(e,a,l={},o,r){if(lt.isCE||lt.parent&&Hi(lt.parent)&&lt.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,o&&o());let d=e[a];d&&d._c&&(d._d=!1),$();const p=d&&Ad(d(l)),f=D(Ce,{key:l.key||p&&p.key||`_${a}`},p||(o?o():[]),p&&e._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),d&&d._c&&(d._d=!0),f}function Ad(e){return e.some(a=>Ht(a)?!(a.type===_t||a.type===Ce&&!Ad(a.children)):!0)?e:null}function zf(e,a){const l={};for(const o in e)l[a&&/[A-Z]/.test(o)?`on:${o}`:qa(o)]=e[o];return l}const ho=e=>e?qd(e)?Tn(e)||e.proxy:ho(e.parent):null,Ua=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ho(e.parent),$root:e=>ho(e.root),$emit:e=>e.emit,$options:e=>ws(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,vn(e.update)}),$nextTick:e=>e.n||(e.n=La.bind(e.proxy)),$watch:e=>Bf.bind(e)}),On=(e,a)=>e!==je&&!e.__isScriptSetup&&Fe(e,a),_o={get({_:e},a){const{ctx:l,setupState:o,data:r,props:d,accessCache:p,type:f,appContext:s}=e;let u;if(a[0]!=="$"){const v=p[a];if(v!==void 0)switch(v){case 1:return o[a];case 2:return r[a];case 4:return l[a];case 3:return d[a]}else{if(On(o,a))return p[a]=1,o[a];if(r!==je&&Fe(r,a))return p[a]=2,r[a];if((u=e.propsOptions[0])&&Fe(u,a))return p[a]=3,d[a];if(l!==je&&Fe(l,a))return p[a]=4,l[a];bo&&(p[a]=0)}}const g=Ua[a];let m,h;if(g)return a==="$attrs"&&xt(e,"get",a),g(e);if((m=f.__cssModules)&&(m=m[a]))return m;if(l!==je&&Fe(l,a))return p[a]=4,l[a];if(h=s.config.globalProperties,Fe(h,a))return h[a]},set({_:e},a,l){const{data:o,setupState:r,ctx:d}=e;return On(r,a)?(r[a]=l,!0):o!==je&&Fe(o,a)?(o[a]=l,!0):Fe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:o,appContext:r,propsOptions:d}},p){let f;return!!l[p]||e!==je&&Fe(e,p)||On(a,p)||(f=d[0])&&Fe(f,p)||Fe(o,p)||Fe(Ua,p)||Fe(r.config.globalProperties,p)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:Fe(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},Ff=Xe({},_o,{get(e,a){if(a!==Symbol.unscopables)return _o.get(e,a,e)},has(e,a){return a[0]!=="_"&&!hp(a)}});function Pf(){return null}function Mf(){return null}function Vf(e){}function Hf(e){}function Nf(){return null}function Of(){}function jf(e,a){return null}function Gf(){return xd().slots}function kd(){return xd().attrs}function xd(){const e=Xt();return e.setupContext||(e.setupContext=Jd(e))}function ol(e){return ge(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function qf(e,a){const l=ol(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=l[o];r?ge(r)||we(r)?r=l[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=l[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return l}function Uf(e,a){return!e||!a?e||a:ge(e)&&ge(a)?e.concat(a):Xe({},ol(e),ol(a))}function Yf(e,a){const l={};for(const o in e)a.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>e[o]});return l}function Jf(e){const a=Xt();let l=e();return Ao(),Zo(l)&&(l=l.catch(o=>{throw Yi(a),o})),[l,()=>Yi(a)]}let bo=!0;function Wf(e){const a=ws(e),l=e.proxy,o=e.ctx;bo=!1,a.beforeCreate&&tr(a.beforeCreate,e,"bc");const{data:r,computed:d,methods:p,watch:f,provide:s,inject:u,created:g,beforeMount:m,mounted:h,beforeUpdate:v,updated:b,activated:C,deactivated:k,beforeDestroy:T,beforeUnmount:_,destroyed:w,unmounted:x,render:B,renderTracked:I,renderTriggered:M,errorCaptured:V,serverPrefetch:P,expose:j,inheritAttrs:X,components:U,directives:pe,filters:$e}=a;if(u&&Kf(u,o,null),p)for(const de in p){const ie=p[de];we(ie)&&(o[de]=ie.bind(l))}if(r){const de=r.call(l,l);qe(de)&&(e.data=oi(de))}if(bo=!0,d)for(const de in d){const ie=d[de],De=we(ie)?ie.bind(l,l):we(ie.get)?ie.get.bind(l,l):wt,We=!we(ie)&&we(ie.set)?ie.set.bind(l):wt,st=H({get:De,set:We});Object.defineProperty(o,de,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(f)for(const de in f)$d(f[de],o,l,de);if(s){const de=we(s)?s.call(l):s;Reflect.ownKeys(de).forEach(ie=>{dt(ie,de[ie])})}g&&tr(g,e,"c");function K(de,ie){ge(ie)?ie.forEach(De=>de(De.bind(l))):ie&&de(ie.bind(l))}if(K(bd,m),K(Bi,h),K(vd,v),K(kn,b),K(ys,C),K(Ss,k),K(Cd,V),K(wd,I),K(Sd,M),K(xn,_),K(ea,x),K(yd,P),ge(j))if(j.length){const de=e.exposed||(e.exposed={});j.forEach(ie=>{Object.defineProperty(de,ie,{get:()=>l[ie],set:De=>l[ie]=De})})}else e.exposed||(e.exposed={});B&&e.render===wt&&(e.render=B),X!=null&&(e.inheritAttrs=X),U&&(e.components=U),pe&&(e.directives=pe)}function Kf(e,a,l=wt){ge(e)&&(e=vo(e));for(const o in e){const r=e[o];let d;qe(r)?"default"in r?d=He(r.from||o,r.default,!0):d=He(r.from||o):d=He(r),mt(d)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>d.value,set:p=>d.value=p}):a[o]=d}}function tr(e,a,l){It(ge(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,l)}function $d(e,a,l,o){const r=o.includes(".")?fd(l,o):()=>l[o];if(Qe(e)){const d=a[e];we(d)&&ht(r,d)}else if(we(e))ht(r,e.bind(l));else if(qe(e))if(ge(e))e.forEach(d=>$d(d,a,l,o));else{const d=we(e.handler)?e.handler.bind(l):a[e.handler];we(d)&&ht(r,d,e)}}function ws(e){const a=e.type,{mixins:l,extends:o}=a,{mixins:r,optionsCache:d,config:{optionMergeStrategies:p}}=e.appContext,f=d.get(a);let s;return f?s=f:!r.length&&!l&&!o?s=a:(s={},r.length&&r.forEach(u=>Ol(s,u,p,!0)),Ol(s,a,p)),qe(a)&&d.set(a,s),s}function Ol(e,a,l,o=!1){const{mixins:r,extends:d}=a;d&&Ol(e,d,l,!0),r&&r.forEach(p=>Ol(e,p,l,!0));for(const p in a)if(!(o&&p==="expose")){const f=Xf[p]||l&&l[p];e[p]=f?f(e[p],a[p]):a[p]}return e}const Xf={data:ir,props:ar,emits:ar,methods:Ha,computed:Ha,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ha,directives:Ha,watch:Zf,provide:ir,inject:Qf};function ir(e,a){return a?e?function(){return Xe(we(e)?e.call(this,this):e,we(a)?a.call(this,this):a)}:a:e}function Qf(e,a){return Ha(vo(e),vo(a))}function vo(e){if(ge(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function bt(e,a){return e?[...new Set([].concat(e,a))]:a}function Ha(e,a){return e?Xe(Object.create(null),e,a):a}function ar(e,a){return e?ge(e)&&ge(a)?[...new Set([...e,...a])]:Xe(Object.create(null),ol(e),ol(a??{})):a}function Zf(e,a){if(!e)return a;if(!a)return e;const l=Xe(Object.create(null),e);for(const o in a)l[o]=bt(e[o],a[o]);return l}function Bd(){return{app:null,config:{isNativeTag:up,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(e,a){return function(o,r=null){we(o)||(o=Xe({},o)),r!=null&&!qe(r)&&(r=null);const d=Bd(),p=new WeakSet;let f=!1;const s=d.app={_uid:eg++,_component:o,_props:r,_container:null,_context:d,_instance:null,version:Kd,get config(){return d.config},set config(u){},use(u,...g){return p.has(u)||(u&&we(u.install)?(p.add(u),u.install(s,...g)):we(u)&&(p.add(u),u(s,...g))),s},mixin(u){return d.mixins.includes(u)||d.mixins.push(u),s},component(u,g){return g?(d.components[u]=g,s):d.components[u]},directive(u,g){return g?(d.directives[u]=g,s):d.directives[u]},mount(u,g,m){if(!f){const h=t(o,r);return h.appContext=d,m===!0?m="svg":m===!1&&(m=void 0),g&&a?a(h,u):e(h,u,m),f=!0,s._container=u,u.__vue_app__=s,Tn(h.component)||h.component.proxy}},unmount(){f&&(e(null,s._container),delete s._container.__vue_app__)},provide(u,g){return d.provides[u]=g,s},runWithContext(u){sl=s;try{return u()}finally{sl=null}}};return s}}let sl=null;function dt(e,a){if(ot){let l=ot.provides;const o=ot.parent&&ot.parent.provides;o===l&&(l=ot.provides=Object.create(o)),l[e]=a}}function He(e,a,l=!1){const o=ot||lt;if(o||sl){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:sl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return l&&we(a)?a.call(o&&o.proxy):a}}function ig(){return!!(ot||lt||sl)}function ag(e,a,l,o=!1){const r={},d={};Pl(d,Bn,1),e.propsDefaults=Object.create(null),Td(e,a,r,d);for(const p in e.propsOptions[0])p in r||(r[p]=void 0);l?e.props=o?r:Yc(r):e.type.props?e.props=r:e.props=d,e.attrs=d}function lg(e,a,l,o){const{props:r,attrs:d,vnode:{patchFlag:p}}=e,f=Re(r),[s]=e.propsOptions;let u=!1;if((o||p>0)&&!(p&16)){if(p&8){const g=e.vnode.dynamicProps;for(let m=0;m<g.length;m++){let h=g[m];if(yn(e.emitsOptions,h))continue;const v=a[h];if(s)if(Fe(d,h))v!==d[h]&&(d[h]=v,u=!0);else{const b=vt(h);r[b]=yo(s,f,b,v,e,!1)}else v!==d[h]&&(d[h]=v,u=!0)}}}else{Td(e,a,r,d)&&(u=!0);let g;for(const m in f)(!a||!Fe(a,m)&&((g=Dt(m))===m||!Fe(a,g)))&&(s?l&&(l[m]!==void 0||l[g]!==void 0)&&(r[m]=yo(s,f,m,void 0,e,!0)):delete r[m]);if(d!==f)for(const m in d)(!a||!Fe(a,m))&&(delete d[m],u=!0)}u&&ii(e,"set","$attrs")}function Td(e,a,l,o){const[r,d]=e.propsOptions;let p=!1,f;if(a)for(let s in a){if(Ga(s))continue;const u=a[s];let g;r&&Fe(r,g=vt(s))?!d||!d.includes(g)?l[g]=u:(f||(f={}))[g]=u:yn(e.emitsOptions,s)||(!(s in o)||u!==o[s])&&(o[s]=u,p=!0)}if(d){const s=Re(l),u=f||je;for(let g=0;g<d.length;g++){const m=d[g];l[m]=yo(r,s,m,u[m],e,!Fe(u,m))}}return p}function yo(e,a,l,o,r,d){const p=e[l];if(p!=null){const f=Fe(p,"default");if(f&&o===void 0){const s=p.default;if(p.type!==Function&&!p.skipFactory&&we(s)){const{propsDefaults:u}=r;if(l in u)o=u[l];else{const g=Yi(r);o=u[l]=s.call(null,a),g()}}else o=s}p[0]&&(d&&!f?o=!1:p[1]&&(o===""||o===Dt(l))&&(o=!0))}return o}function Ld(e,a,l=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const d=e.props,p={},f=[];let s=!1;if(!we(e)){const g=m=>{s=!0;const[h,v]=Ld(m,a,!0);Xe(p,h),v&&f.push(...v)};!l&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!d&&!s)return qe(e)&&o.set(e,ra),ra;if(ge(d))for(let g=0;g<d.length;g++){const m=vt(d[g]);lr(m)&&(p[m]=je)}else if(d)for(const g in d){const m=vt(g);if(lr(m)){const h=d[g],v=p[m]=ge(h)||we(h)?{type:h}:Xe({},h);if(v){const b=sr(Boolean,v.type),C=sr(String,v.type);v[0]=b>-1,v[1]=C<0||b<C,(b>-1||Fe(v,"default"))&&f.push(m)}}}const u=[p,f];return qe(e)&&o.set(e,u),u}function lr(e){return e[0]!=="$"}function nr(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function or(e,a){return nr(e)===nr(a)}function sr(e,a){return ge(a)?a.findIndex(l=>or(l,e)):we(a)&&or(a,e)?0:-1}const Dd=e=>e[0]==="_"||e==="$stable",Cs=e=>ge(e)?e.map(Lt):[Lt(e)],ng=(e,a,l)=>{if(a._n)return a;const o=i((...r)=>Cs(a(...r)),l);return o._c=!1,o},Id=(e,a,l)=>{const o=e._ctx;for(const r in e){if(Dd(r))continue;const d=e[r];if(we(d))a[r]=ng(r,d,o);else if(d!=null){const p=Cs(d);a[r]=()=>p}}},Rd=(e,a)=>{const l=Cs(a);e.slots.default=()=>l},og=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Re(a),Pl(a,"_",l)):Id(a,e.slots={})}else e.slots={},a&&Rd(e,a);Pl(e.slots,Bn,1)},sg=(e,a,l)=>{const{vnode:o,slots:r}=e;let d=!0,p=je;if(o.shapeFlag&32){const f=a._;f?l&&f===1?d=!1:(Xe(r,a),!l&&f===1&&delete r._):(d=!a.$stable,Id(a,r)),p=a}else a&&(Rd(e,a),p={default:1});if(d)for(const f in r)!Dd(f)&&p[f]==null&&delete r[f]};function jl(e,a,l,o,r=!1){if(ge(e)){e.forEach((h,v)=>jl(h,a&&(ge(a)?a[v]:a),l,o,r));return}if(Hi(o)&&!r)return;const d=o.shapeFlag&4?Tn(o.component)||o.component.proxy:o.el,p=r?null:d,{i:f,r:s}=e,u=a&&a.r,g=f.refs===je?f.refs={}:f.refs,m=f.setupState;if(u!=null&&u!==s&&(Qe(u)?(g[u]=null,Fe(m,u)&&(m[u]=null)):mt(u)&&(u.value=null)),we(s))ai(s,f,12,[p,g]);else{const h=Qe(s),v=mt(s),b=e.f;if(h||v){const C=()=>{if(b){const k=h?Fe(m,s)?m[s]:g[s]:s.value;r?ge(k)&&Qo(k,d):ge(k)?k.includes(d)||k.push(d):h?(g[s]=[d],Fe(m,s)&&(m[s]=g[s])):(s.value=[d],e.k&&(g[e.k]=s.value))}else h?(g[s]=p,Fe(m,s)&&(m[s]=p)):v&&(s.value=p,e.k&&(g[e.k]=p))};r||b?C():(C.id=-1,ct(C,l))}}}let ci=!1;const rg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",ug=e=>e.namespaceURI.includes("MathML"),kl=e=>{if(rg(e))return"svg";if(ug(e))return"mathml"},xl=e=>e.nodeType===8;function cg(e){const{mt:a,p:l,o:{patchProp:o,createText:r,nextSibling:d,parentNode:p,remove:f,insert:s,createComment:u}}=e,g=(w,x)=>{if(!x.hasChildNodes()){l(null,w,x),Nl(),x._vnode=w;return}ci=!1,m(x.firstChild,w,null,null,null),Nl(),x._vnode=w,ci&&console.error("Hydration completed but contains mismatches.")},m=(w,x,B,I,M,V=!1)=>{const P=xl(w)&&w.data==="[",j=()=>C(w,x,B,I,M,P),{type:X,ref:U,shapeFlag:pe,patchFlag:$e}=x;let q=w.nodeType;x.el=w,$e===-2&&(V=!1,x.dynamicChildren=null);let K=null;switch(X){case qi:q!==3?x.children===""?(s(x.el=r(""),p(w),w),K=w):K=j():(w.data!==x.children&&(ci=!0,w.data=x.children),K=d(w));break;case _t:_(w)?(K=d(w),T(x.el=w.content.firstChild,w,B)):q!==8||P?K=j():K=d(w);break;case Ni:if(P&&(w=d(w),q=w.nodeType),q===1||q===3){K=w;const de=!x.children.length;for(let ie=0;ie<x.staticCount;ie++)de&&(x.children+=K.nodeType===1?K.outerHTML:K.data),ie===x.staticCount-1&&(x.anchor=K),K=d(K);return P?d(K):K}else j();break;case Ce:P?K=b(w,x,B,I,M,V):K=j();break;default:if(pe&1)(q!==1||x.type.toLowerCase()!==w.tagName.toLowerCase())&&!_(w)?K=j():K=h(w,x,B,I,M,V);else if(pe&6){x.slotScopeIds=M;const de=p(w);if(P?K=k(w):xl(w)&&w.data==="teleport start"?K=k(w,w.data,"teleport end"):K=d(w),a(x,de,null,B,I,kl(de),V),Hi(x)){let ie;P?(ie=t(Ce),ie.anchor=K?K.previousSibling:de.lastChild):ie=w.nodeType===3?n(""):t("div"),ie.el=w,x.component.subTree=ie}}else pe&64?q!==8?K=j():K=x.type.hydrate(w,x,B,I,M,V,e,v):pe&128&&(K=x.type.hydrate(w,x,B,I,kl(p(w)),M,V,e,m))}return U!=null&&jl(U,null,I,x),K},h=(w,x,B,I,M,V)=>{V=V||!!x.dynamicChildren;const{type:P,props:j,patchFlag:X,shapeFlag:U,dirs:pe,transition:$e}=x,q=P==="input"||P==="option";if(q||X!==-1){pe&&Yt(x,null,B,"created");let K=!1;if(_(w)){K=Pd(I,$e)&&B&&B.vnode.props&&B.vnode.props.appear;const ie=w.content.firstChild;K&&$e.beforeEnter(ie),T(ie,w,B),x.el=w=ie}if(U&16&&!(j&&(j.innerHTML||j.textContent))){let ie=v(w.firstChild,x,w,B,I,M,V);for(;ie;){ci=!0;const De=ie;ie=ie.nextSibling,f(De)}}else U&8&&w.textContent!==x.children&&(ci=!0,w.textContent=x.children);if(j)if(q||!V||X&48)for(const ie in j)(q&&(ie.endsWith("value")||ie==="indeterminate")||dl(ie)&&!Ga(ie)||ie[0]===".")&&o(w,ie,null,j[ie],void 0,void 0,B);else j.onClick&&o(w,"onClick",null,j.onClick,void 0,void 0,B);let de;(de=j&&j.onVnodeBeforeMount)&&yt(de,B,x),pe&&Yt(x,null,B,"beforeMount"),((de=j&&j.onVnodeMounted)||pe||K)&&ud(()=>{de&&yt(de,B,x),K&&$e.enter(w),pe&&Yt(x,null,B,"mounted")},I)}return w.nextSibling},v=(w,x,B,I,M,V,P)=>{P=P||!!x.dynamicChildren;const j=x.children,X=j.length;for(let U=0;U<X;U++){const pe=P?j[U]:j[U]=Lt(j[U]);if(w)w=m(w,pe,I,M,V,P);else{if(pe.type===qi&&!pe.children)continue;ci=!0,l(null,pe,B,null,I,M,kl(B),V)}}return w},b=(w,x,B,I,M,V)=>{const{slotScopeIds:P}=x;P&&(M=M?M.concat(P):P);const j=p(w),X=v(d(w),x,j,B,I,M,V);return X&&xl(X)&&X.data==="]"?d(x.anchor=X):(ci=!0,s(x.anchor=u("]"),j,X),X)},C=(w,x,B,I,M,V)=>{if(ci=!0,x.el=null,V){const X=k(w);for(;;){const U=d(w);if(U&&U!==X)f(U);else break}}const P=d(w),j=p(w);return f(w),l(null,x,j,P,B,I,kl(j),M),P},k=(w,x="[",B="]")=>{let I=0;for(;w;)if(w=d(w),w&&xl(w)&&(w.data===x&&I++,w.data===B)){if(I===0)return d(w);I--}return w},T=(w,x,B)=>{const I=x.parentNode;I&&I.replaceChild(w,x);let M=B;for(;M;)M.vnode.el===x&&(M.vnode.el=M.subTree.el=w),M=M.parent},_=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,m]}const ct=ud;function Ed(e){return Fd(e)}function zd(e){return Fd(e,cg)}function Fd(e,a){const l=Bc();l.__VUE__=!0;const{insert:o,remove:r,patchProp:d,createElement:p,createText:f,createComment:s,setText:u,setElementText:g,parentNode:m,nextSibling:h,setScopeId:v=wt,insertStaticContent:b}=e,C=(L,E,O,Q=null,Z=null,le=null,ue=void 0,ae=null,oe=!!E.dynamicChildren)=>{if(L===E)return;L&&!Gt(L,E)&&(Q=se(L),Ue(L,Z,le,!0),L=null),E.patchFlag===-2&&(oe=!1,E.dynamicChildren=null);const{type:te,ref:me,shapeFlag:ye}=E;switch(te){case qi:k(L,E,O,Q);break;case _t:T(L,E,O,Q);break;case Ni:L==null&&_(E,O,Q,ue);break;case Ce:U(L,E,O,Q,Z,le,ue,ae,oe);break;default:ye&1?B(L,E,O,Q,Z,le,ue,ae,oe):ye&6?pe(L,E,O,Q,Z,le,ue,ae,oe):(ye&64||ye&128)&&te.process(L,E,O,Q,Z,le,ue,ae,oe,Oe)}me!=null&&Z&&jl(me,L&&L.ref,le,E||L,!E)},k=(L,E,O,Q)=>{if(L==null)o(E.el=f(E.children),O,Q);else{const Z=E.el=L.el;E.children!==L.children&&u(Z,E.children)}},T=(L,E,O,Q)=>{L==null?o(E.el=s(E.children||""),O,Q):E.el=L.el},_=(L,E,O,Q)=>{[L.el,L.anchor]=b(L.children,E,O,Q,L.el,L.anchor)},w=({el:L,anchor:E},O,Q)=>{let Z;for(;L&&L!==E;)Z=h(L),o(L,O,Q),L=Z;o(E,O,Q)},x=({el:L,anchor:E})=>{let O;for(;L&&L!==E;)O=h(L),r(L),L=O;r(E)},B=(L,E,O,Q,Z,le,ue,ae,oe)=>{E.type==="svg"?ue="svg":E.type==="math"&&(ue="mathml"),L==null?I(E,O,Q,Z,le,ue,ae,oe):P(L,E,Z,le,ue,ae,oe)},I=(L,E,O,Q,Z,le,ue,ae)=>{let oe,te;const{props:me,shapeFlag:ye,transition:ve,dirs:Ae}=L;if(oe=L.el=p(L.type,le,me&&me.is,me),ye&8?g(oe,L.children):ye&16&&V(L.children,oe,null,Q,Z,jn(L,le),ue,ae),Ae&&Yt(L,null,Q,"created"),M(oe,L,L.scopeId,ue,Q),me){for(const Ge in me)Ge!=="value"&&!Ga(Ge)&&d(oe,Ge,null,me[Ge],le,L.children,Q,Z,re);"value"in me&&d(oe,"value",null,me.value,le),(te=me.onVnodeBeforeMount)&&yt(te,Q,L)}Ae&&Yt(L,null,Q,"beforeMount");const Ie=Pd(Z,ve);Ie&&ve.beforeEnter(oe),o(oe,E,O),((te=me&&me.onVnodeMounted)||Ie||Ae)&&ct(()=>{te&&yt(te,Q,L),Ie&&ve.enter(oe),Ae&&Yt(L,null,Q,"mounted")},Z)},M=(L,E,O,Q,Z)=>{if(O&&v(L,O),Q)for(let le=0;le<Q.length;le++)v(L,Q[le]);if(Z){let le=Z.subTree;if(E===le){const ue=Z.vnode;M(L,ue,ue.scopeId,ue.slotScopeIds,Z.parent)}}},V=(L,E,O,Q,Z,le,ue,ae,oe=0)=>{for(let te=oe;te<L.length;te++){const me=L[te]=ae?hi(L[te]):Lt(L[te]);C(null,me,E,O,Q,Z,le,ue,ae)}},P=(L,E,O,Q,Z,le,ue)=>{const ae=E.el=L.el;let{patchFlag:oe,dynamicChildren:te,dirs:me}=E;oe|=L.patchFlag&16;const ye=L.props||je,ve=E.props||je;let Ae;if(O&&Di(O,!1),(Ae=ve.onVnodeBeforeUpdate)&&yt(Ae,O,E,L),me&&Yt(E,L,O,"beforeUpdate"),O&&Di(O,!0),te?j(L.dynamicChildren,te,ae,O,Q,jn(E,Z),le):ue||ie(L,E,ae,null,O,Q,jn(E,Z),le,!1),oe>0){if(oe&16)X(ae,E,ye,ve,O,Q,Z);else if(oe&2&&ye.class!==ve.class&&d(ae,"class",null,ve.class,Z),oe&4&&d(ae,"style",ye.style,ve.style,Z),oe&8){const Ie=E.dynamicProps;for(let Ge=0;Ge<Ie.length;Ge++){const Ke=Ie[Ge],rt=ye[Ke],Nt=ve[Ke];(Nt!==rt||Ke==="value")&&d(ae,Ke,rt,Nt,Z,L.children,O,Q,re)}}oe&1&&L.children!==E.children&&g(ae,E.children)}else!ue&&te==null&&X(ae,E,ye,ve,O,Q,Z);((Ae=ve.onVnodeUpdated)||me)&&ct(()=>{Ae&&yt(Ae,O,E,L),me&&Yt(E,L,O,"updated")},Q)},j=(L,E,O,Q,Z,le,ue)=>{for(let ae=0;ae<E.length;ae++){const oe=L[ae],te=E[ae],me=oe.el&&(oe.type===Ce||!Gt(oe,te)||oe.shapeFlag&70)?m(oe.el):O;C(oe,te,me,null,Q,Z,le,ue,!0)}},X=(L,E,O,Q,Z,le,ue)=>{if(O!==Q){if(O!==je)for(const ae in O)!Ga(ae)&&!(ae in Q)&&d(L,ae,O[ae],null,ue,E.children,Z,le,re);for(const ae in Q){if(Ga(ae))continue;const oe=Q[ae],te=O[ae];oe!==te&&ae!=="value"&&d(L,ae,te,oe,ue,E.children,Z,le,re)}"value"in Q&&d(L,"value",O.value,Q.value,ue)}},U=(L,E,O,Q,Z,le,ue,ae,oe)=>{const te=E.el=L?L.el:f(""),me=E.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:ve,slotScopeIds:Ae}=E;Ae&&(ae=ae?ae.concat(Ae):Ae),L==null?(o(te,O,Q),o(me,O,Q),V(E.children||[],O,me,Z,le,ue,ae,oe)):ye>0&&ye&64&&ve&&L.dynamicChildren?(j(L.dynamicChildren,ve,O,Z,le,ue,ae),(E.key!=null||Z&&E===Z.subTree)&&As(L,E,!0)):ie(L,E,O,me,Z,le,ue,ae,oe)},pe=(L,E,O,Q,Z,le,ue,ae,oe)=>{E.slotScopeIds=ae,L==null?E.shapeFlag&512?Z.ctx.activate(E,O,Q,ue,oe):$e(E,O,Q,Z,le,ue,oe):q(L,E,oe)},$e=(L,E,O,Q,Z,le,ue)=>{const ae=L.component=Gd(L,Q,Z);if(gl(L)&&(ae.ctx.renderer=Oe),Ud(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,K),!L.el){const oe=ae.subTree=t(_t);T(null,oe,E,O)}}else K(ae,L,E,O,Z,le,ue)},q=(L,E,O)=>{const Q=E.component=L.component;if(vf(L,E,O))if(Q.asyncDep&&!Q.asyncResolved){de(Q,E,O);return}else Q.next=E,mf(Q.update),Q.effect.dirty=!0,Q.update();else E.el=L.el,Q.vnode=E},K=(L,E,O,Q,Z,le,ue)=>{const ae=()=>{if(L.isMounted){let{next:me,bu:ye,u:ve,parent:Ae,vnode:Ie}=L;{const ia=Md(L);if(ia){me&&(me.el=Ie.el,de(L,me,ue)),ia.asyncDep.then(()=>{L.isUnmounted||ae()});return}}let Ge=me,Ke;Di(L,!1),me?(me.el=Ie.el,de(L,me,ue)):me=Ie,ye&&ca(ye),(Ke=me.props&&me.props.onVnodeBeforeUpdate)&&yt(Ke,Ae,me,Ie),Di(L,!0);const rt=Rl(L),Nt=L.subTree;L.subTree=rt,C(Nt,rt,m(Nt.el),se(Nt),L,Z,le),me.el=rt.el,Ge===null&&ps(L,rt.el),ve&&ct(ve,Z),(Ke=me.props&&me.props.onVnodeUpdated)&&ct(()=>yt(Ke,Ae,me,Ie),Z)}else{let me;const{el:ye,props:ve}=E,{bm:Ae,m:Ie,parent:Ge}=L,Ke=Hi(E);if(Di(L,!1),Ae&&ca(Ae),!Ke&&(me=ve&&ve.onVnodeBeforeMount)&&yt(me,Ge,E),Di(L,!0),ye&&xe){const rt=()=>{L.subTree=Rl(L),xe(ye,L.subTree,L,Z,null)};Ke?E.type.__asyncLoader().then(()=>!L.isUnmounted&&rt()):rt()}else{const rt=L.subTree=Rl(L);C(null,rt,O,Q,L,Z,le),E.el=rt.el}if(Ie&&ct(Ie,Z),!Ke&&(me=ve&&ve.onVnodeMounted)){const rt=E;ct(()=>yt(me,Ge,rt),Z)}(E.shapeFlag&256||Ge&&Hi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&L.a&&ct(L.a,Z),L.isMounted=!0,E=O=Q=null}},oe=L.effect=new va(ae,wt,()=>vn(te),L.scope),te=L.update=()=>{oe.dirty&&oe.run()};te.id=L.uid,Di(L,!0),te()},de=(L,E,O)=>{E.component=L;const Q=L.vnode.props;L.vnode=E,L.next=null,lg(L,E.props,Q,O),sg(L,E.children,O),Xi(),Ks(L),Qi()},ie=(L,E,O,Q,Z,le,ue,ae,oe=!1)=>{const te=L&&L.children,me=L?L.shapeFlag:0,ye=E.children,{patchFlag:ve,shapeFlag:Ae}=E;if(ve>0){if(ve&128){We(te,ye,O,Q,Z,le,ue,ae,oe);return}else if(ve&256){De(te,ye,O,Q,Z,le,ue,ae,oe);return}}Ae&8?(me&16&&re(te,Z,le),ye!==te&&g(O,ye)):me&16?Ae&16?We(te,ye,O,Q,Z,le,ue,ae,oe):re(te,Z,le,!0):(me&8&&g(O,""),Ae&16&&V(ye,O,Q,Z,le,ue,ae,oe))},De=(L,E,O,Q,Z,le,ue,ae,oe)=>{L=L||ra,E=E||ra;const te=L.length,me=E.length,ye=Math.min(te,me);let ve;for(ve=0;ve<ye;ve++){const Ae=E[ve]=oe?hi(E[ve]):Lt(E[ve]);C(L[ve],Ae,O,null,Z,le,ue,ae,oe)}te>me?re(L,Z,le,!0,!1,ye):V(E,O,Q,Z,le,ue,ae,oe,ye)},We=(L,E,O,Q,Z,le,ue,ae,oe)=>{let te=0;const me=E.length;let ye=L.length-1,ve=me-1;for(;te<=ye&&te<=ve;){const Ae=L[te],Ie=E[te]=oe?hi(E[te]):Lt(E[te]);if(Gt(Ae,Ie))C(Ae,Ie,O,null,Z,le,ue,ae,oe);else break;te++}for(;te<=ye&&te<=ve;){const Ae=L[ye],Ie=E[ve]=oe?hi(E[ve]):Lt(E[ve]);if(Gt(Ae,Ie))C(Ae,Ie,O,null,Z,le,ue,ae,oe);else break;ye--,ve--}if(te>ye){if(te<=ve){const Ae=ve+1,Ie=Ae<me?E[Ae].el:Q;for(;te<=ve;)C(null,E[te]=oe?hi(E[te]):Lt(E[te]),O,Ie,Z,le,ue,ae,oe),te++}}else if(te>ve)for(;te<=ye;)Ue(L[te],Z,le,!0),te++;else{const Ae=te,Ie=te,Ge=new Map;for(te=Ie;te<=ve;te++){const Bt=E[te]=oe?hi(E[te]):Lt(E[te]);Bt.key!=null&&Ge.set(Bt.key,te)}let Ke,rt=0;const Nt=ve-Ie+1;let ia=!1,Ms=0;const Ra=new Array(Nt);for(te=0;te<Nt;te++)Ra[te]=0;for(te=Ae;te<=ye;te++){const Bt=L[te];if(rt>=Nt){Ue(Bt,Z,le,!0);continue}let Ut;if(Bt.key!=null)Ut=Ge.get(Bt.key);else for(Ke=Ie;Ke<=ve;Ke++)if(Ra[Ke-Ie]===0&&Gt(Bt,E[Ke])){Ut=Ke;break}Ut===void 0?Ue(Bt,Z,le,!0):(Ra[Ut-Ie]=te+1,Ut>=Ms?Ms=Ut:ia=!0,C(Bt,E[Ut],O,null,Z,le,ue,ae,oe),rt++)}const Vs=ia?dg(Ra):ra;for(Ke=Vs.length-1,te=Nt-1;te>=0;te--){const Bt=Ie+te,Ut=E[Bt],Hs=Bt+1<me?E[Bt+1].el:Q;Ra[te]===0?C(null,Ut,O,Hs,Z,le,ue,ae,oe):ia&&(Ke<0||te!==Vs[Ke]?st(Ut,O,Hs,2):Ke--)}}},st=(L,E,O,Q,Z=null)=>{const{el:le,type:ue,transition:ae,children:oe,shapeFlag:te}=L;if(te&6){st(L.component.subTree,E,O,Q);return}if(te&128){L.suspense.move(E,O,Q);return}if(te&64){ue.move(L,E,O,Oe);return}if(ue===Ce){o(le,E,O);for(let ye=0;ye<oe.length;ye++)st(oe[ye],E,O,Q);o(L.anchor,E,O);return}if(ue===Ni){w(L,E,O);return}if(Q!==2&&te&1&&ae)if(Q===0)ae.beforeEnter(le),o(le,E,O),ct(()=>ae.enter(le),Z);else{const{leave:ye,delayLeave:ve,afterLeave:Ae}=ae,Ie=()=>o(le,E,O),Ge=()=>{ye(le,()=>{Ie(),Ae&&Ae()})};ve?ve(le,Ie,Ge):Ge()}else o(le,E,O)},Ue=(L,E,O,Q=!1,Z=!1)=>{const{type:le,props:ue,ref:ae,children:oe,dynamicChildren:te,shapeFlag:me,patchFlag:ye,dirs:ve}=L;if(ae!=null&&jl(ae,null,O,L,!0),me&256){E.ctx.deactivate(L);return}const Ae=me&1&&ve,Ie=!Hi(L);let Ge;if(Ie&&(Ge=ue&&ue.onVnodeBeforeUnmount)&&yt(Ge,E,L),me&6)Y(L.component,O,Q);else{if(me&128){L.suspense.unmount(O,Q);return}Ae&&Yt(L,null,E,"beforeUnmount"),me&64?L.type.remove(L,E,O,Z,Oe,Q):te&&(le!==Ce||ye>0&&ye&64)?re(te,E,O,!1,!0):(le===Ce&&ye&384||!Z&&me&16)&&re(oe,E,O),Q&&Qt(L)}(Ie&&(Ge=ue&&ue.onVnodeUnmounted)||Ae)&&ct(()=>{Ge&&yt(Ge,E,L),Ae&&Yt(L,null,E,"unmounted")},O)},Qt=L=>{const{type:E,el:O,anchor:Q,transition:Z}=L;if(E===Ce){zt(O,Q);return}if(E===Ni){x(L);return}const le=()=>{r(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(L.shapeFlag&1&&Z&&!Z.persisted){const{leave:ue,delayLeave:ae}=Z,oe=()=>ue(O,le);ae?ae(L.el,le,oe):oe()}else le()},zt=(L,E)=>{let O;for(;L!==E;)O=h(L),r(L),L=O;r(E)},Y=(L,E,O)=>{const{bum:Q,scope:Z,update:le,subTree:ue,um:ae}=L;Q&&ca(Q),Z.stop(),le&&(le.active=!1,Ue(ue,L,E,O)),ae&&ct(ae,E),ct(()=>{L.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},re=(L,E,O,Q=!1,Z=!1,le=0)=>{for(let ue=le;ue<L.length;ue++)Ue(L[ue],E,O,Q,Z)},se=L=>L.shapeFlag&6?se(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let _e=!1;const Ne=(L,E,O)=>{L==null?E._vnode&&Ue(E._vnode,null,null,!0):C(E._vnode||null,L,E,null,null,null,O),_e||(_e=!0,Ks(),Nl(),_e=!1),E._vnode=L},Oe={p:C,um:Ue,m:st,r:Qt,mt:$e,mc:V,pc:ie,pbc:j,n:se,o:e};let ke,xe;return a&&([ke,xe]=a(Oe)),{render:Ne,hydrate:ke,createApp:tg(Ne,ke)}}function jn({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Di({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function Pd(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function As(e,a,l=!1){const o=e.children,r=a.children;if(ge(o)&&ge(r))for(let d=0;d<o.length;d++){const p=o[d];let f=r[d];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[d]=hi(r[d]),f.el=p.el),l||As(p,f)),f.type===qi&&(f.el=p.el)}}function dg(e){const a=e.slice(),l=[0];let o,r,d,p,f;const s=e.length;for(o=0;o<s;o++){const u=e[o];if(u!==0){if(r=l[l.length-1],e[r]<u){a[o]=r,l.push(o);continue}for(d=0,p=l.length-1;d<p;)f=d+p>>1,e[l[f]]<u?d=f+1:p=f;u<e[l[d]]&&(d>0&&(a[o]=l[d-1]),l[d]=o)}}for(d=l.length,p=l[d-1];d-- >0;)l[d]=p,p=a[p];return l}function Md(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Md(a)}const mg=e=>e.__isTeleport,Ya=e=>e&&(e.disabled||e.disabled===""),rr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ur=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,So=(e,a)=>{const l=e&&e.to;return Qe(l)?a?a(l):null:l},pg={name:"Teleport",__isTeleport:!0,process(e,a,l,o,r,d,p,f,s,u){const{mc:g,pc:m,pbc:h,o:{insert:v,querySelector:b,createText:C,createComment:k}}=u,T=Ya(a.props);let{shapeFlag:_,children:w,dynamicChildren:x}=a;if(e==null){const B=a.el=C(""),I=a.anchor=C("");v(B,l,o),v(I,l,o);const M=a.target=So(a.props,b),V=a.targetAnchor=C("");M&&(v(V,M),p==="svg"||rr(M)?p="svg":(p==="mathml"||ur(M))&&(p="mathml"));const P=(j,X)=>{_&16&&g(w,j,X,r,d,p,f,s)};T?P(l,I):M&&P(M,V)}else{a.el=e.el;const B=a.anchor=e.anchor,I=a.target=e.target,M=a.targetAnchor=e.targetAnchor,V=Ya(e.props),P=V?l:I,j=V?B:M;if(p==="svg"||rr(I)?p="svg":(p==="mathml"||ur(I))&&(p="mathml"),x?(h(e.dynamicChildren,x,P,r,d,p,f),As(e,a,!0)):s||m(e,a,P,j,r,d,p,f,!1),T)V?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):$l(a,l,B,u,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const X=a.target=So(a.props,b);X&&$l(a,X,null,u,0)}else V&&$l(a,I,M,u,1)}Vd(a)},remove(e,a,l,o,{um:r,o:{remove:d}},p){const{shapeFlag:f,children:s,anchor:u,targetAnchor:g,target:m,props:h}=e;if(m&&d(g),p&&d(u),f&16){const v=p||!Ya(h);for(let b=0;b<s.length;b++){const C=s[b];r(C,a,l,v,!!C.dynamicChildren)}}},move:$l,hydrate:fg};function $l(e,a,l,{o:{insert:o},m:r},d=2){d===0&&o(e.targetAnchor,a,l);const{el:p,anchor:f,shapeFlag:s,children:u,props:g}=e,m=d===2;if(m&&o(p,a,l),(!m||Ya(g))&&s&16)for(let h=0;h<u.length;h++)r(u[h],a,l,2);m&&o(f,a,l)}function fg(e,a,l,o,r,d,{o:{nextSibling:p,parentNode:f,querySelector:s}},u){const g=a.target=So(a.props,s);if(g){const m=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Ya(a.props))a.anchor=u(p(e),a,f(e),l,o,r,d),a.targetAnchor=m;else{a.anchor=p(e);let h=m;for(;h;)if(h=p(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&p(a.targetAnchor);break}u(m,a,g,l,o,r,d)}Vd(a)}return a.anchor&&p(a.anchor)}const $n=pg;function Vd(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ce=Symbol.for("v-fgt"),qi=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Ni=Symbol.for("v-stc"),Ja=[];let Ct=null;function $(e=!1){Ja.push(Ct=e?null:[])}function Hd(){Ja.pop(),Ct=Ja[Ja.length-1]||null}let Ui=1;function wo(e){Ui+=e}function Nd(e){return e.dynamicChildren=Ui>0?Ct||ra:null,Hd(),Ui>0&&Ct&&Ct.push(e),e}function he(e,a,l,o,r,d){return Nd(y(e,a,l,o,r,d,!0))}function D(e,a,l,o,r){return Nd(t(e,a,l,o,r,!0))}function Ht(e){return e?e.__v_isVNode===!0:!1}function Gt(e,a){return e.type===a.type&&e.key===a.key}function gg(e){}const Bn="__vInternal",Od=({key:e})=>e??null,El=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Qe(e)||mt(e)||we(e)?{i:lt,r:e,k:a,f:!!l}:e:null);function y(e,a=null,l=null,o=0,r=null,d=e===Ce?0:1,p=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&Od(a),ref:a&&El(a),scopeId:Sn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return f?(xs(s,l),d&128&&e.normalize(s)):l&&(s.shapeFlag|=Qe(l)?8:16),Ui>0&&!p&&Ct&&(s.patchFlag>0||d&6)&&s.patchFlag!==32&&Ct.push(s),s}const t=hg;function hg(e,a=null,l=null,o=0,r=null,d=!1){if((!e||e===od)&&(e=_t),Ht(e)){const f=Wt(e,a,!0);return l&&xs(f,l),Ui>0&&!d&&Ct&&(f.shapeFlag&6?Ct[Ct.indexOf(e)]=f:Ct.push(f)),f.patchFlag|=-2,f}if(Ag(e)&&(e=e.__vccOpts),a){a=jd(a);let{class:f,style:s}=a;f&&!Qe(f)&&(a.class=pl(f)),qe(s)&&(ss(s)&&!ge(s)&&(s=Xe({},s)),a.style=Ta(s))}const p=Qe(e)?1:rd(e)?128:mg(e)?64:qe(e)?4:we(e)?2:0;return y(e,a,l,o,r,p,d,!0)}function jd(e){return e?ss(e)||Bn in e?Xe({},e):e:null}function Wt(e,a,l=!1){const{props:o,ref:r,patchFlag:d,children:p}=e,f=a?ta(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Od(f),ref:a&&a.ref?l&&r?ge(r)?r.concat(El(a)):[r,El(a)]:El(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:p,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ce?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(qi,null,e,a)}function _g(e,a){const l=t(Ni,null,e);return l.staticCount=a,l}function ks(e="",a=!1){return a?($(),D(_t,null,e)):t(_t,null,e)}function Lt(e){return e==null||typeof e=="boolean"?t(_t):ge(e)?t(Ce,null,e.slice()):typeof e=="object"?hi(e):t(qi,null,String(e))}function hi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function xs(e,a){let l=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(ge(a))l=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),xs(e,r()),r._c&&(r._d=!0));return}else{l=32;const r=a._;!r&&!(Bn in a)?a._ctx=lt:r===3&&lt&&(lt.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else we(a)?(a={default:a,_ctx:lt},l=32):(a=String(a),o&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function ta(...e){const a={};for(let l=0;l<e.length;l++){const o=e[l];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=pl([a.class,o.class]));else if(r==="style")a.style=Ta([a.style,o.style]);else if(dl(r)){const d=a[r],p=o[r];p&&d!==p&&!(ge(d)&&d.includes(p))&&(a[r]=d?[].concat(d,p):p)}else r!==""&&(a[r]=o[r])}return a}function yt(e,a,l,o=null){It(e,a,7,[l,o])}const bg=Bd();let vg=0;function Gd(e,a,l){const o=e.type,r=(a?a.appContext:e.appContext)||bg,d={uid:vg++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ts(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ld(o,r),emitsOptions:ad(o,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=ff.bind(null,d),e.ce&&e.ce(d),d}let ot=null;const Xt=()=>ot||lt;let Gl,Co;{const e=Bc(),a=(l,o)=>{let r;return(r=e[l])||(r=e[l]=[]),r.push(o),d=>{r.length>1?r.forEach(p=>p(d)):r[0](d)}};Gl=a("__VUE_INSTANCE_SETTERS__",l=>ot=l),Co=a("__VUE_SSR_SETTERS__",l=>hl=l)}const Yi=e=>{const a=ot;return Gl(e),e.scope.on(),()=>{e.scope.off(),Gl(a)}},Ao=()=>{ot&&ot.scope.off(),Gl(null)};function qd(e){return e.vnode.shapeFlag&4}let hl=!1;function Ud(e,a=!1){a&&Co(a);const{props:l,children:o}=e.vnode,r=qd(e);ag(e,l,r,a),og(e,o);const d=r?yg(e,a):void 0;return a&&Co(!1),d}function yg(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=rs(new Proxy(e.ctx,_o));const{setup:o}=l;if(o){const r=e.setupContext=o.length>1?Jd(e):null,d=Yi(e);Xi();const p=ai(o,e,0,[e.props,r]);if(Qi(),d(),Zo(p)){if(p.then(Ao,Ao),a)return p.then(f=>{ko(e,f,a)}).catch(f=>{Zi(f,e,0)});e.asyncDep=p}else ko(e,p,a)}else Yd(e,a)}function ko(e,a,l){we(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:qe(a)&&(e.setupState=ds(a)),Yd(e,l)}let ql,xo;function Sg(e){ql=e,xo=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,Ff))}}const wg=()=>!ql;function Yd(e,a,l){const o=e.type;if(!e.render){if(!a&&ql&&!o.render){const r=o.template||ws(e).template;if(r){const{isCustomElement:d,compilerOptions:p}=e.appContext.config,{delimiters:f,compilerOptions:s}=o,u=Xe(Xe({isCustomElement:d,delimiters:f},p),s);o.render=ql(r,u)}}e.render=o.render||wt,xo&&xo(e)}{const r=Yi(e);Xi();try{Wf(e)}finally{Qi(),r()}}}function Cg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return xt(e,"get","$attrs"),a[l]}}))}function Jd(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return Cg(e)},slots:e.slots,emit:e.emit,expose:a}}function Tn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ds(rs(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Ua)return Ua[l](e)},has(a,l){return l in a||l in Ua}}))}function $o(e,a=!0){return we(e)?e.displayName||e.name:e.name||a&&e.__name}function Ag(e){return we(e)&&"__vccOpts"in e}const H=(e,a)=>Wp(e,a,hl);function kg(e,a,l=je){const o=Xt(),r=vt(a),d=Dt(a),p=Xc((s,u)=>{let g;return pd(()=>{const m=e[a];qt(g,m)&&(g=m,u())}),{get(){return s(),l.get?l.get(g):g},set(m){const h=o.vnode.props;!(h&&(a in h||r in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${d}`in h))&&qt(m,g)&&(g=m,u()),o.emit(`update:${a}`,l.set?l.set(m):m)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return p[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[f]||{}:p,done:!1}:{done:!0}}}},p}function J(e,a,l){const o=arguments.length;return o===2?qe(a)&&!ge(a)?Ht(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&Ht(l)&&(l=[l]),t(e,a,l))}function xg(){}function $g(e,a,l,o){const r=l[o];if(r&&Wd(r,e))return r;const d=a();return d.memo=e.slice(),l[o]=d}function Wd(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let o=0;o<l.length;o++)if(qt(l[o],a[o]))return!1;return Ui>0&&Ct&&Ct.push(e),!0}const Kd="3.4.15",Bg=wt,Tg=uf,Lg=la,Dg=id,Ig={createComponentInstance:Gd,setupComponent:Ud,renderComponentRoot:Rl,setCurrentRenderingInstance:ll,isVNode:Ht,normalizeVNode:Lt},Rg=Ig,Eg=null,zg=null,Fg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pg="http://www.w3.org/2000/svg",Mg="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,cr=_i&&_i.createElement("template"),Vg={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,o)=>{const r=a==="svg"?_i.createElementNS(Pg,e):a==="mathml"?_i.createElementNS(Mg,e):_i.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,o,r,d){const p=l?l.previousSibling:a.lastChild;if(r&&(r===d||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),l),!(r===d||!(r=r.nextSibling)););else{cr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=cr.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}a.insertBefore(f,l)}return[p?p.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},di="transition",Ea="animation",Sa=Symbol("_vtc"),Ln=(e,{slots:a})=>J(gd,Qd(e),a);Ln.displayName="Transition";const Xd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hg=Ln.props=Xe({},vs,Xd),Ii=(e,a=[])=>{ge(e)?e.forEach(l=>l(...a)):e&&e(...a)},dr=e=>e?ge(e)?e.some(a=>a.length>1):e.length>1:!1;function Qd(e){const a={};for(const U in e)U in Xd||(a[U]=e[U]);if(e.css===!1)return a;const{name:l="v",type:o,duration:r,enterFromClass:d=`${l}-enter-from`,enterActiveClass:p=`${l}-enter-active`,enterToClass:f=`${l}-enter-to`,appearFromClass:s=d,appearActiveClass:u=p,appearToClass:g=f,leaveFromClass:m=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:v=`${l}-leave-to`}=e,b=Ng(r),C=b&&b[0],k=b&&b[1],{onBeforeEnter:T,onEnter:_,onEnterCancelled:w,onLeave:x,onLeaveCancelled:B,onBeforeAppear:I=T,onAppear:M=_,onAppearCancelled:V=w}=a,P=(U,pe,$e)=>{pi(U,pe?g:f),pi(U,pe?u:p),$e&&$e()},j=(U,pe)=>{U._isLeaving=!1,pi(U,m),pi(U,v),pi(U,h),pe&&pe()},X=U=>(pe,$e)=>{const q=U?M:_,K=()=>P(pe,U,$e);Ii(q,[pe,K]),mr(()=>{pi(pe,U?s:d),Zt(pe,U?g:f),dr(q)||pr(pe,o,C,K)})};return Xe(a,{onBeforeEnter(U){Ii(T,[U]),Zt(U,d),Zt(U,p)},onBeforeAppear(U){Ii(I,[U]),Zt(U,s),Zt(U,u)},onEnter:X(!1),onAppear:X(!0),onLeave(U,pe){U._isLeaving=!0;const $e=()=>j(U,pe);Zt(U,m),em(),Zt(U,h),mr(()=>{U._isLeaving&&(pi(U,m),Zt(U,v),dr(x)||pr(U,o,k,$e))}),Ii(x,[U,$e])},onEnterCancelled(U){P(U,!1),Ii(w,[U])},onAppearCancelled(U){P(U,!0),Ii(V,[U])},onLeaveCancelled(U){j(U),Ii(B,[U])}})}function Ng(e){if(e==null)return null;if(qe(e))return[Gn(e.enter),Gn(e.leave)];{const a=Gn(e);return[a,a]}}function Gn(e){return Ml(e)}function Zt(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[Sa]||(e[Sa]=new Set)).add(a)}function pi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[Sa];l&&(l.delete(a),l.size||(e[Sa]=void 0))}function mr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Og=0;function pr(e,a,l,o){const r=e._endId=++Og,d=()=>{r===e._endId&&o()};if(l)return setTimeout(d,l);const{type:p,timeout:f,propCount:s}=Zd(e,a);if(!p)return o();const u=p+"end";let g=0;const m=()=>{e.removeEventListener(u,h),d()},h=v=>{v.target===e&&++g>=s&&m()};setTimeout(()=>{g<s&&m()},f+1),e.addEventListener(u,h)}function Zd(e,a){const l=window.getComputedStyle(e),o=b=>(l[b]||"").split(", "),r=o(`${di}Delay`),d=o(`${di}Duration`),p=fr(r,d),f=o(`${Ea}Delay`),s=o(`${Ea}Duration`),u=fr(f,s);let g=null,m=0,h=0;a===di?p>0&&(g=di,m=p,h=d.length):a===Ea?u>0&&(g=Ea,m=u,h=s.length):(m=Math.max(p,u),g=m>0?p>u?di:Ea:null,h=g?g===di?d.length:s.length:0);const v=g===di&&/\b(transform|all)(,|$)/.test(o(`${di}Property`).toString());return{type:g,timeout:m,propCount:h,hasTransform:v}}function fr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,o)=>gr(l)+gr(e[o])))}function gr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function em(){return document.body.offsetHeight}function jg(e,a,l){const o=e[Sa];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const $s=Symbol("_vod"),tm={beforeMount(e,{value:a},{transition:l}){e[$s]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):za(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:o}){!a!=!l&&(o?a?(o.beforeEnter(e),za(e,!0),o.enter(e)):o.leave(e,()=>{za(e,!1)}):za(e,a))},beforeUnmount(e,{value:a}){za(e,a)}};function za(e,a){e.style.display=a?e[$s]:"none"}function Gg(){tm.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const im=Symbol("");function qg(e){const a=Xt();if(!a)return;const l=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>To(d,r))},o=()=>{const r=e(a.proxy);Bo(a.subTree,r),l(r)};md(o),Bi(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),ea(()=>r.disconnect())})}function Bo(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{Bo(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)To(e.el,a);else if(e.type===Ce)e.children.forEach(l=>Bo(l,a));else if(e.type===Ni){let{el:l,anchor:o}=e;for(;l&&(To(l,a),l!==o);)l=l.nextSibling}}function To(e,a){if(e.nodeType===1){const l=e.style;let o="";for(const r in a)l.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;l[im]=o}}function Ug(e,a,l){const o=e.style,r=o.display,d=Qe(l);if(l&&!d){if(a&&!Qe(a))for(const p in a)l[p]==null&&Lo(o,p,"");for(const p in l)Lo(o,p,l[p])}else if(d){if(a!==l){const p=o[im];p&&(l+=";"+p),o.cssText=l}}else a&&e.removeAttribute("style");$s in e&&(o.display=r)}const hr=/\s*!important$/;function Lo(e,a,l){if(ge(l))l.forEach(o=>Lo(e,a,o));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const o=Yg(e,a);hr.test(l)?e.setProperty(Dt(o),l.replace(hr,""),"important"):e[o]=l}}const _r=["Webkit","Moz","ms"],qn={};function Yg(e,a){const l=qn[a];if(l)return l;let o=vt(a);if(o!=="filter"&&o in e)return qn[a]=o;o=ml(o);for(let r=0;r<_r.length;r++){const d=_r[r]+o;if(d in e)return qn[a]=d}return a}const br="http://www.w3.org/1999/xlink";function Jg(e,a,l,o,r){if(o&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(br,a.slice(6,a.length)):e.setAttributeNS(br,a,l);else{const d=Cp(a);l==null||d&&!Tc(l)?e.removeAttribute(a):e.setAttribute(a,d?"":l)}}function Wg(e,a,l,o,r,d,p){if(a==="innerHTML"||a==="textContent"){o&&p(o,r,d),e[a]=l??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=l;const u=f==="OPTION"?e.getAttribute("value"):e.value,g=l??"";u!==g&&(e.value=g),l==null&&e.removeAttribute(a);return}let s=!1;if(l===""||l==null){const u=typeof e[a];u==="boolean"?l=Tc(l):l==null&&u==="string"?(l="",s=!0):u==="number"&&(l=0,s=!0)}try{e[a]=l}catch{}s&&e.removeAttribute(a)}function ti(e,a,l,o){e.addEventListener(a,l,o)}function Kg(e,a,l,o){e.removeEventListener(a,l,o)}const vr=Symbol("_vei");function Xg(e,a,l,o,r=null){const d=e[vr]||(e[vr]={}),p=d[a];if(o&&p)p.value=o;else{const[f,s]=Qg(a);if(o){const u=d[a]=th(o,r);ti(e,f,u,s)}else p&&(Kg(e,f,p,s),d[a]=void 0)}}const yr=/(?:Once|Passive|Capture)$/;function Qg(e){let a;if(yr.test(e)){a={};let o;for(;o=e.match(yr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),a]}let Un=0;const Zg=Promise.resolve(),eh=()=>Un||(Zg.then(()=>Un=0),Un=Date.now());function th(e,a){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;It(ih(o,l.value),a,5,[o])};return l.value=e,l.attached=eh(),l}function ih(e,a){if(ge(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const Sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ah=(e,a,l,o,r,d,p,f,s)=>{const u=r==="svg";a==="class"?jg(e,o,u):a==="style"?Ug(e,l,o):dl(a)?Xo(a)||Xg(e,a,l,o,p):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):lh(e,a,o,u))?Wg(e,a,o,d,p,f,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Jg(e,a,o,u))};function lh(e,a,l,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&Sr(a)&&we(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Sr(a)&&Qe(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function am(e,a){const l=z(e);class o extends Dn{constructor(d){super(l,d,a)}}return o.def=l,o}/*! #__NO_SIDE_EFFECTS__ */const nh=e=>am(e,gm),oh=typeof HTMLElement<"u"?HTMLElement:class{};class Dn extends oh{constructor(a,l={},o){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),La(()=>{this._connected||(Jl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:d,styles:p}=o;let f;if(d&&!ge(d))for(const s in d){const u=d[s];(u===Number||u&&u.type===Number)&&(s in this._props&&(this._props[s]=Ml(this._props[s])),(f||(f=Object.create(null)))[vt(s)]=!0)}this._numberProps=f,r&&this._resolveProps(o),this._applyStyles(p),this._update()},l=this._def.__asyncLoader;l?l().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,o=ge(l)?l:Object.keys(l||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(vt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(d){this._setProp(r,d)}})}_setAttr(a){let l=this.getAttribute(a);const o=vt(a);this._numberProps&&this._numberProps[o]&&(l=Ml(l)),this._setProp(o,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,o=!0,r=!0){l!==this._props[a]&&(this._props[a]=l,r&&this._instance&&this._update(),o&&(l===!0?this.setAttribute(Dt(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Dt(a),l+""):l||this.removeAttribute(Dt(a))))}_update(){Jl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Xe({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const o=(d,p)=>{this.dispatchEvent(new CustomEvent(d,{detail:p}))};l.emit=(d,...p)=>{o(d,p),Dt(d)!==d&&o(Dt(d),p)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof Dn){l.parent=r._instance,l.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function sh(e="$style"){{const a=Xt();if(!a)return je;const l=a.type.__cssModules;if(!l)return je;const o=l[e];return o||je}}const lm=new WeakMap,nm=new WeakMap,Ul=Symbol("_moveCb"),wr=Symbol("_enterCb"),om={name:"TransitionGroup",props:Xe({},Hg,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=Xt(),o=bs();let r,d;return kn(()=>{if(!r.length)return;const p=e.moveClass||`${e.name||"v"}-move`;if(!mh(r[0].el,l.vnode.el,p))return;r.forEach(uh),r.forEach(ch);const f=r.filter(dh);em(),f.forEach(s=>{const u=s.el,g=u.style;Zt(u,p),g.transform=g.webkitTransform=g.transitionDuration="";const m=u[Ul]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",m),u[Ul]=null,pi(u,p))};u.addEventListener("transitionend",m)})}),()=>{const p=Re(e),f=Qd(p);let s=p.tag||Ce;r=d,d=a.default?Cn(a.default()):[];for(let u=0;u<d.length;u++){const g=d[u];g.key!=null&&ji(g,ya(g,f,o,l))}if(r)for(let u=0;u<r.length;u++){const g=r[u];ji(g,ya(g,f,o,l)),lm.set(g,g.el.getBoundingClientRect())}return t(s,null,d)}}},rh=e=>delete e.mode;om.props;const sm=om;function uh(e){const a=e.el;a[Ul]&&a[Ul](),a[wr]&&a[wr]()}function ch(e){nm.set(e,e.el.getBoundingClientRect())}function dh(e){const a=lm.get(e),l=nm.get(e),o=a.left-l.left,r=a.top-l.top;if(o||r){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${o}px,${r}px)`,d.transitionDuration="0s",e}}function mh(e,a,l){const o=e.cloneNode(),r=e[Sa];r&&r.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(o);const{hasTransform:p}=Zd(o);return d.removeChild(o),p}const xi=e=>{const a=e.props["onUpdate:modelValue"]||!1;return ge(a)?l=>ca(a,l):a};function ph(e){e.target.composing=!0}function Cr(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Vt=Symbol("_assign"),Yl={created(e,{modifiers:{lazy:a,trim:l,number:o}},r){e[Vt]=xi(r);const d=o||r.props&&r.props.type==="number";ti(e,a?"change":"input",p=>{if(p.target.composing)return;let f=e.value;l&&(f=f.trim()),d&&(f=Za(f)),e[Vt](f)}),l&&ti(e,"change",()=>{e.value=e.value.trim()}),a||(ti(e,"compositionstart",ph),ti(e,"compositionend",Cr),ti(e,"change",Cr))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:o,number:r}},d){if(e[Vt]=xi(d),e.composing)return;const p=r||e.type==="number"?Za(e.value):e.value,f=a??"";p!==f&&(document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===f)||(e.value=f))}},Bs={deep:!0,created(e,a,l){e[Vt]=xi(l),ti(e,"change",()=>{const o=e._modelValue,r=wa(e),d=e.checked,p=e[Vt];if(ge(o)){const f=gn(o,r),s=f!==-1;if(d&&!s)p(o.concat(r));else if(!d&&s){const u=[...o];u.splice(f,1),p(u)}}else if(Ki(o)){const f=new Set(o);d?f.add(r):f.delete(r),p(f)}else p(um(e,d))})},mounted:Ar,beforeUpdate(e,a,l){e[Vt]=xi(l),Ar(e,a,l)}};function Ar(e,{value:a,oldValue:l},o){e._modelValue=a,ge(a)?e.checked=gn(a,o.props.value)>-1:Ki(a)?e.checked=a.has(o.props.value):a!==l&&(e.checked=li(a,um(e,!0)))}const Ts={created(e,{value:a},l){e.checked=li(a,l.props.value),e[Vt]=xi(l),ti(e,"change",()=>{e[Vt](wa(e))})},beforeUpdate(e,{value:a,oldValue:l},o){e[Vt]=xi(o),a!==l&&(e.checked=li(a,o.props.value))}},rm={deep:!0,created(e,{value:a,modifiers:{number:l}},o){const r=Ki(a);ti(e,"change",()=>{const d=Array.prototype.filter.call(e.options,p=>p.selected).map(p=>l?Za(wa(p)):wa(p));e[Vt](e.multiple?r?new Set(d):d:d[0]),e._assigning=!0,La(()=>{e._assigning=!1})}),e[Vt]=xi(o)},mounted(e,{value:a,oldValue:l,modifiers:{number:o}}){kr(e,a,l,o)},beforeUpdate(e,a,l){e[Vt]=xi(l)},updated(e,{value:a,oldValue:l,modifiers:{number:o}}){e._assigning||kr(e,a,l,o)}};function kr(e,a,l,o){const r=e.multiple,d=ge(a);if(!(r&&!d&&!Ki(a))&&!(d&&li(a,l))){for(let p=0,f=e.options.length;p<f;p++){const s=e.options[p],u=wa(s);if(r)if(d){const g=typeof u;g==="string"||g==="number"?s.selected=a.includes(o?Za(u):u):s.selected=gn(a,u)>-1}else s.selected=a.has(u);else if(li(wa(s),a)){e.selectedIndex!==p&&(e.selectedIndex=p);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function wa(e){return"_value"in e?e._value:e.value}function um(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const cm={created(e,a,l){Bl(e,a,l,null,"created")},mounted(e,a,l){Bl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,o){Bl(e,a,l,o,"beforeUpdate")},updated(e,a,l,o){Bl(e,a,l,o,"updated")}};function dm(e,a){switch(e){case"SELECT":return rm;case"TEXTAREA":return Yl;default:switch(a){case"checkbox":return Bs;case"radio":return Ts;default:return Yl}}}function Bl(e,a,l,o,r){const p=dm(e.tagName,l.props&&l.props.type)[r];p&&p(e,a,l,o)}function fh(){Yl.getSSRProps=({value:e})=>({value:e}),Ts.getSSRProps=({value:e},a)=>{if(a.props&&li(a.props.value,e))return{checked:!0}},Bs.getSSRProps=({value:e},a)=>{if(ge(e)){if(a.props&&gn(e,a.props.value)>-1)return{checked:!0}}else if(Ki(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},cm.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=dm(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const gh=["ctrl","shift","alt","meta"],hh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>gh.some(l=>e[`${l}Key`]&&!a.includes(l))},Rt=(e,a)=>{const l=e._withMods||(e._withMods={}),o=a.join(".");return l[o]||(l[o]=(r,...d)=>{for(let p=0;p<a.length;p++){const f=hh[a[p]];if(f&&f(r,a))return}return e(r,...d)})},_h={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bh=(e,a)=>{const l=e._withKeys||(e._withKeys={}),o=a.join(".");return l[o]||(l[o]=r=>{if(!("key"in r))return;const d=Dt(r.key);if(a.some(p=>p===d||_h[p]===d))return e(r)})},mm=Xe({patchProp:ah},Vg);let Wa,xr=!1;function pm(){return Wa||(Wa=Ed(mm))}function fm(){return Wa=xr?Wa:zd(mm),xr=!0,Wa}const Jl=(...e)=>{pm().render(...e)},gm=(...e)=>{fm().hydrate(...e)},hm=(...e)=>{const a=pm().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=bm(o);if(!r)return;const d=a._component;!we(d)&&!d.render&&!d.template&&(d.template=r.innerHTML),r.innerHTML="";const p=l(r,!1,_m(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),p},a},vh=(...e)=>{const a=fm().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=bm(o);if(r)return l(r,!0,_m(r))},a};function _m(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function bm(e){return Qe(e)?document.querySelector(e):e}let $r=!1;const yh=()=>{$r||($r=!0,fh(),Gg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sh=()=>{},wh=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:gd,BaseTransitionPropsValidators:vs,Comment:_t,DeprecationTypes:Fg,EffectScope:ts,ErrorCodes:rf,ErrorTypeStrings:Tg,Fragment:Ce,KeepAlive:If,ReactiveEffect:va,Static:Ni,Suspense:wf,Teleport:$n,Text:qi,TrackOpTypes:nf,Transition:Ln,TransitionGroup:sm,TriggerOpTypes:of,VueElement:Dn,assertNumber:sf,callWithAsyncErrorHandling:It,callWithErrorHandling:ai,camelize:vt,capitalize:ml,cloneVNode:Wt,compatUtils:zg,compile:Sh,computed:H,createApp:hm,createBlock:D,createCommentVNode:ks,createElementBlock:he,createElementVNode:y,createHydrationRenderer:zd,createPropsRestProxy:Yf,createRenderer:Ed,createSSRApp:vh,createSlots:Ef,createStaticVNode:_g,createTextVNode:n,createVNode:t,customRef:Xc,defineAsyncComponent:Lf,defineComponent:z,defineCustomElement:am,defineEmits:Mf,defineExpose:Vf,defineModel:Of,defineOptions:Hf,defineProps:Pf,defineSSRCustomElement:nh,defineSlots:Nf,devtools:Lg,effect:$p,effectScope:kp,getCurrentInstance:Xt,getCurrentScope:is,getTransitionRawChildren:Cn,guardReactiveProps:jd,h:J,handleError:Zi,hasInjectionContext:ig,hydrate:gm,initCustomFormatter:xg,initDirectivesForSSR:yh,inject:He,isMemoSame:Wd,isProxy:ss,isReactive:Vi,isReadonly:Oi,isRef:mt,isRuntimeOnly:wg,isShallow:el,isVNode:Ht,markRaw:rs,mergeDefaults:qf,mergeModels:Uf,mergeProps:ta,nextTick:La,normalizeClass:pl,normalizeProps:Sp,normalizeStyle:Ta,onActivated:ys,onBeforeMount:bd,onBeforeUnmount:xn,onBeforeUpdate:vd,onDeactivated:Ss,onErrorCaptured:Cd,onMounted:Bi,onRenderTracked:wd,onRenderTriggered:Sd,onScopeDispose:Ic,onServerPrefetch:yd,onUnmounted:ea,onUpdated:kn,openBlock:$,popScopeId:nd,provide:dt,proxyRefs:ds,pushScopeId:ld,queuePostFlushCb:Hl,reactive:oi,readonly:os,ref:G,registerRuntimeCompiler:Sg,render:Jl,renderList:et,renderSlot:Gi,resolveComponent:S,resolveDirective:wn,resolveDynamicComponent:sd,resolveFilter:Eg,resolveTransitionHooks:ya,setBlockTracking:wo,setDevtoolsHook:Dg,setTransitionHooks:ji,shallowReactive:Yc,shallowReadonly:Jp,shallowRef:Wc,ssrContextKey:cd,ssrUtils:Rg,stop:Bp,toDisplayString:Be,toHandlerKey:qa,toHandlers:zf,toRaw:Re,toRef:po,toRefs:tf,toValue:Qp,transformVNodeArgs:gg,triggerRef:Xp,unref:c,useAttrs:kd,useCssModule:sh,useCssVars:qg,useModel:kg,useSSRContext:dd,useSlots:Gf,useTransitionState:bs,vModelCheckbox:Bs,vModelDynamic:cm,vModelRadio:Ts,vModelSelect:rm,vModelText:Yl,vShow:tm,version:Kd,warn:Bg,watch:ht,watchEffect:_s,watchPostEffect:md,watchSyncEffect:pd,withAsyncContext:Jf,withCtx:i,withDefaults:jf,withDirectives:wi,withKeys:bh,withMemo:$g,withModifiers:Rt,withScopeId:gf},Symbol.toStringTag,{value:"Module"})),Ch=z({name:"App"}),Le=(e,a)=>{const l=e.__vccOpts||e;for(const[o,r]of a)l[o]=r;return l};function Ah(e,a,l,o,r,d){const p=S("router-view");return $(),D(p)}const kh=Le(Ch,[["render",Ah]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const vm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Da=e=>vm?Symbol(e):"_vr_"+e,ym=Da("rvlm"),Br=Da("rvd"),In=Da("r"),Ls=Da("rl"),Do=Da("rvl"),na=typeof window<"u";function xh(e){return e.__esModule||vm&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Yn(e,a){const l={};for(const o in a){const r=a[o];l[o]=Array.isArray(r)?r.map(e):e(r)}return l}const Ka=()=>{},$h=/\/$/,Bh=e=>e.replace($h,"");function Jn(e,a,l="/"){let o,r={},d="",p="";const f=a.indexOf("?"),s=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),d=a.slice(f+1,s>-1?s:a.length),r=e(d)),s>-1&&(o=o||a.slice(0,s),p=a.slice(s,a.length)),o=Ih(o??a,l),{fullPath:o+(d&&"?")+d+p,path:o,query:r,hash:p}}function Th(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function Tr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function Lh(e,a,l){const o=a.matched.length-1,r=l.matched.length-1;return o>-1&&o===r&&Ca(a.matched[o],l.matched[r])&&Sm(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function Ca(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Sm(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!Dh(e[l],a[l]))return!1;return!0}function Dh(e,a){return Array.isArray(e)?Lr(e,a):Array.isArray(a)?Lr(a,e):e===a}function Lr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,o)=>l===a[o]):e.length===1&&e[0]===a}function Ih(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),o=e.split("/");let r=l.length-1,d,p;for(d=0;d<o.length;d++)if(p=o[d],!(r===1||p==="."))if(p==="..")r--;else break;return l.slice(0,r).join("/")+"/"+o.slice(d-(d===o.length?1:0)).join("/")}var rl;(function(e){e.pop="pop",e.push="push"})(rl||(rl={}));var Xa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xa||(Xa={}));function Rh(e){if(!e)if(na){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bh(e)}const Eh=/^[^#]+#/;function zh(e,a){return e.replace(Eh,"#")+a}function Fh(e,a){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-l.left-(a.left||0),top:o.top-l.top-(a.top||0)}}const Rn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ph(e){let a;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),r=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!r)return;a=Fh(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Dr(e,a){return(history.state?history.state.position-a:-1)+e}const Io=new Map;function Mh(e,a){Io.set(e,a)}function Vh(e){const a=Io.get(e);return Io.delete(e),a}let Hh=()=>location.protocol+"//"+location.host;function wm(e,a){const{pathname:l,search:o,hash:r}=a,d=e.indexOf("#");if(d>-1){let f=r.includes(e.slice(d))?e.slice(d).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),Tr(s,"")}return Tr(l,e)+o+r}function Nh(e,a,l,o){let r=[],d=[],p=null;const f=({state:h})=>{const v=wm(e,location),b=l.value,C=a.value;let k=0;if(h){if(l.value=v,a.value=h,p&&p===b){p=null;return}k=C?h.position-C.position:0}else o(v);r.forEach(T=>{T(l.value,b,{delta:k,type:rl.pop,direction:k?k>0?Xa.forward:Xa.back:Xa.unknown})})};function s(){p=l.value}function u(h){r.push(h);const v=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return d.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:Rn()}),"")}function m(){for(const h of d)h();d=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:u,destroy:m}}function Ir(e,a,l,o=!1,r=!1){return{back:e,current:a,forward:l,replaced:o,position:window.history.length,scroll:r?Rn():null}}function Oh(e){const{history:a,location:l}=window,o={value:wm(e,l)},r={value:a.state};r.value||d(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(s,u,g){const m=e.indexOf("#"),h=m>-1?(l.host&&document.querySelector("base")?e:e.slice(m))+s:Hh()+e+s;try{a[g?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),l[g?"replace":"assign"](h)}}function p(s,u){const g=Ye({},a.state,Ir(r.value.back,s,r.value.forward,!0),u,{position:r.value.position});d(s,g,!0),o.value=s}function f(s,u){const g=Ye({},r.value,a.state,{forward:s,scroll:Rn()});d(g.current,g,!0);const m=Ye({},Ir(o.value,s,null),{position:g.position+1},u);d(s,m,!1),o.value=s}return{location:o,state:r,push:f,replace:p}}function jh(e){e=Rh(e);const a=Oh(e),l=Nh(e,a.state,a.location,a.replace);function o(d,p=!0){p||l.pauseListeners(),history.go(d)}const r=Ye({location:"",base:e,go:o,createHref:zh.bind(null,e)},a,l);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Gh(e){return typeof e=="string"||e&&typeof e=="object"}function Cm(e){return typeof e=="string"||typeof e=="symbol"}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Am=Da("nf");var Rr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rr||(Rr={}));function Aa(e,a){return Ye(new Error,{type:e,[Am]:!0},a)}function Ri(e,a){return e instanceof Error&&Am in e&&(a==null||!!(e.type&a))}const Er="[^/]+?",qh={sensitive:!1,strict:!1,start:!0,end:!0},Uh=/[.+*?^${}()[\]/\\]/g;function Yh(e,a){const l=Ye({},qh,a),o=[];let r=l.start?"^":"";const d=[];for(const u of e){const g=u.length?[]:[90];l.strict&&!u.length&&(r+="/");for(let m=0;m<u.length;m++){const h=u[m];let v=40+(l.sensitive?.25:0);if(h.type===0)m||(r+="/"),r+=h.value.replace(Uh,"\\$&"),v+=40;else if(h.type===1){const{value:b,repeatable:C,optional:k,regexp:T}=h;d.push({name:b,repeatable:C,optional:k});const _=T||Er;if(_!==Er){v+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+x.message)}}let w=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;m||(w=k&&u.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,v+=20,k&&(v+=-8),C&&(v+=-20),_===".*"&&(v+=-50)}g.push(v)}o.push(g)}if(l.strict&&l.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}l.strict||(r+="/?"),l.end?r+="$":l.strict&&(r+="(?:/|$)");const p=new RegExp(r,l.sensitive?"":"i");function f(u){const g=u.match(p),m={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",b=d[h-1];m[b.name]=v&&b.repeatable?v.split("/"):v}return m}function s(u){let g="",m=!1;for(const h of e){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:b,repeatable:C,optional:k}=v,T=b in u?u[b]:"";if(Array.isArray(T)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(T)?T.join("/"):T;if(!_)if(k)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);g+=_}}return g}return{re:p,score:o,keys:d,parse:f,stringify:s}}function Jh(e,a){let l=0;for(;l<e.length&&l<a.length;){const o=a[l]-e[l];if(o)return o;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Wh(e,a){let l=0;const o=e.score,r=a.score;for(;l<o.length&&l<r.length;){const d=Jh(o[l],r[l]);if(d)return d;l++}return r.length-o.length}const Kh={type:0,value:""},Xh=/[a-zA-Z0-9_]/;function Qh(e){if(!e)return[[]];if(e==="/")return[[Kh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(v){throw new Error(`ERR (${l})/"${u}": ${v}`)}let l=0,o=l;const r=[];let d;function p(){d&&r.push(d),d=[]}let f=0,s,u="",g="";function m(){u&&(l===0?d.push({type:0,value:u}):l===1||l===2||l===3?(d.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:u,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),u="")}function h(){u+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:s==="/"?(u&&m(),p()):s===":"?(m(),l=1):h();break;case 4:h(),l=o;break;case 1:s==="("?l=2:Xh.test(s)?h():(m(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:l=3:g+=s;break;case 3:m(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${u}"`),m(),p(),r}function Zh(e,a,l){const o=Yh(Qh(e.path),l),r=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function e_(e,a){const l=[],o=new Map;a=Fr({strict:!1,end:!0,sensitive:!1},a);function r(g){return o.get(g)}function d(g,m,h){const v=!h,b=i_(g);b.aliasOf=h&&h.record;const C=Fr(a,g),k=[b];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of w)k.push(Ye({},b,{components:h?h.record.components:b.components,path:x,aliasOf:h?h.record:b}))}let T,_;for(const w of k){const{path:x}=w;if(m&&x[0]!=="/"){const B=m.record.path,I=B[B.length-1]==="/"?"":"/";w.path=m.record.path+(x&&I+x)}if(T=Zh(w,m,C),h?h.alias.push(T):(_=_||T,_!==T&&_.alias.push(T),v&&g.name&&!zr(T)&&p(g.name)),"children"in b){const B=b.children;for(let I=0;I<B.length;I++)d(B[I],T,h&&h.children[I])}h=h||T,s(T)}return _?()=>{p(_)}:Ka}function p(g){if(Cm(g)){const m=o.get(g);m&&(o.delete(g),l.splice(l.indexOf(m),1),m.children.forEach(p),m.alias.forEach(p))}else{const m=l.indexOf(g);m>-1&&(l.splice(m,1),g.record.name&&o.delete(g.record.name),g.children.forEach(p),g.alias.forEach(p))}}function f(){return l}function s(g){let m=0;for(;m<l.length&&Wh(g,l[m])>=0;)m++;l.splice(m,0,g),g.record.name&&!zr(g)&&o.set(g.record.name,g)}function u(g,m){let h,v={},b,C;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Aa(1,{location:g});C=h.record.name,v=Ye(t_(m.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),g.params),b=h.stringify(v)}else if("path"in g)b=g.path,h=l.find(_=>_.re.test(b)),h&&(v=h.parse(b),C=h.record.name);else{if(h=m.name?o.get(m.name):l.find(_=>_.re.test(m.path)),!h)throw Aa(1,{location:g,currentLocation:m});C=h.record.name,v=Ye({},m.params,g.params),b=h.stringify(v)}const k=[];let T=h;for(;T;)k.unshift(T.record),T=T.parent;return{name:C,path:b,params:v,matched:k,meta:l_(k)}}return e.forEach(g=>d(g)),{addRoute:d,resolve:u,removeRoute:p,getRoutes:f,getRecordMatcher:r}}function t_(e,a){const l={};for(const o of a)o in e&&(l[o]=e[o]);return l}function i_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:a_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function a_(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const o in e.components)a[o]=typeof l=="boolean"?l:l[o];return a}function zr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function l_(e){return e.reduce((a,l)=>Ye(a,l.meta),{})}function Fr(e,a){const l={};for(const o in e)l[o]=o in a?a[o]:e[o];return l}const km=/#/g,n_=/&/g,o_=/\//g,s_=/=/g,r_=/\?/g,xm=/\+/g,u_=/%5B/g,c_=/%5D/g,$m=/%5E/g,d_=/%60/g,Bm=/%7B/g,m_=/%7C/g,Tm=/%7D/g,p_=/%20/g;function Ds(e){return encodeURI(""+e).replace(m_,"|").replace(u_,"[").replace(c_,"]")}function f_(e){return Ds(e).replace(Bm,"{").replace(Tm,"}").replace($m,"^")}function Ro(e){return Ds(e).replace(xm,"%2B").replace(p_,"+").replace(km,"%23").replace(n_,"%26").replace(d_,"`").replace(Bm,"{").replace(Tm,"}").replace($m,"^")}function g_(e){return Ro(e).replace(s_,"%3D")}function h_(e){return Ds(e).replace(km,"%23").replace(r_,"%3F")}function __(e){return e==null?"":h_(e).replace(o_,"%2F")}function Wl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function b_(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const d=o[r].replace(xm," "),p=d.indexOf("="),f=Wl(p<0?d:d.slice(0,p)),s=p<0?null:Wl(d.slice(p+1));if(f in a){let u=a[f];Array.isArray(u)||(u=a[f]=[u]),u.push(s)}else a[f]=s}return a}function Pr(e){let a="";for(let l in e){const o=e[l];if(l=g_(l),o==null){o!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(o)?o.map(d=>d&&Ro(d)):[o&&Ro(o)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+l,d!=null&&(a+="="+d))})}return a}function v_(e){const a={};for(const l in e){const o=e[l];o!==void 0&&(a[l]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function Fa(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function y_(e,a,l){const o=()=>{e[a].delete(l)};ea(o),Ss(o),ys(()=>{e[a].add(l)}),e[a].add(l)}function S_(e){const a=He(ym,{}).value;a&&y_(a,"updateGuards",e)}function bi(e,a,l,o,r){const d=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((p,f)=>{const s=m=>{m===!1?f(Aa(4,{from:l,to:a})):m instanceof Error?f(m):Gh(m)?f(Aa(2,{from:a,to:m})):(d&&o.enterCallbacks[r]===d&&typeof m=="function"&&d.push(m),p())},u=e.call(o&&o.instances[r],a,l,s);let g=Promise.resolve(u);e.length<3&&(g=g.then(s)),g.catch(m=>f(m))})}function Wn(e,a,l,o){const r=[];for(const d of e)for(const p in d.components){let f=d.components[p];if(!(a!=="beforeRouteEnter"&&!d.instances[p]))if(w_(f)){const u=(f.__vccOpts||f)[a];u&&r.push(bi(u,l,o,d,p))}else{let s=f();r.push(()=>s.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${d.path}"`));const g=xh(u)?u.default:u;d.components[p]=g;const h=(g.__vccOpts||g)[a];return h&&bi(h,l,o,d,p)()}))}}return r}function w_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Mr(e){const a=He(In),l=He(Ls),o=H(()=>a.resolve(c(e.to))),r=H(()=>{const{matched:s}=o.value,{length:u}=s,g=s[u-1],m=l.matched;if(!g||!m.length)return-1;const h=m.findIndex(Ca.bind(null,g));if(h>-1)return h;const v=Vr(s[u-2]);return u>1&&Vr(g)===v&&m[m.length-1].path!==v?m.findIndex(Ca.bind(null,s[u-2])):h}),d=H(()=>r.value>-1&&k_(l.params,o.value.params)),p=H(()=>r.value>-1&&r.value===l.matched.length-1&&Sm(l.params,o.value.params));function f(s={}){return A_(s)?a[c(e.replace)?"replace":"push"](c(e.to)).catch(Ka):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:d,isExactActive:p,navigate:f}}const C_=z({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mr,setup(e,{slots:a}){const l=oi(Mr(e)),{options:o}=He(In),r=H(()=>({[Hr(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[Hr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const d=a.default&&a.default(l);return e.custom?d:J("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:r.value},d)}}}),Is=C_;function A_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function k_(e,a){for(const l in a){const o=a[l],r=e[l];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((d,p)=>d!==r[p]))return!1}return!0}function Vr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hr=(e,a,l)=>e??a??l,x_=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const o=He(Do),r=H(()=>e.route||o.value),d=He(Br,0),p=H(()=>r.value.matched[d]);dt(Br,d+1),dt(ym,p),dt(Do,r);const f=G();return ht(()=>[f.value,p.value,e.name],([s,u,g],[m,h,v])=>{u&&(u.instances[g]=s,h&&h!==u&&s&&s===m&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),s&&u&&(!h||!Ca(u,h)||!m)&&(u.enterCallbacks[g]||[]).forEach(b=>b(s))},{flush:"post"}),()=>{const s=r.value,u=p.value,g=u&&u.components[e.name],m=e.name;if(!g)return Nr(l.default,{Component:g,route:s});const h=u.props[e.name],v=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=J(g,Ye({},v,a,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[m]=null)},ref:f}));return Nr(l.default,{Component:C,route:s})||C}}});function Nr(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const $_=x_;function B_(e){const a=e_(e.routes,e),l=e.parseQuery||b_,o=e.stringifyQuery||Pr,r=e.history,d=Fa(),p=Fa(),f=Fa(),s=Wc(mi);let u=mi;na&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Yn.bind(null,Y=>""+Y),m=Yn.bind(null,__),h=Yn.bind(null,Wl);function v(Y,re){let se,_e;return Cm(Y)?(se=a.getRecordMatcher(Y),_e=re):_e=Y,a.addRoute(_e,se)}function b(Y){const re=a.getRecordMatcher(Y);re&&a.removeRoute(re)}function C(){return a.getRoutes().map(Y=>Y.record)}function k(Y){return!!a.getRecordMatcher(Y)}function T(Y,re){if(re=Ye({},re||s.value),typeof Y=="string"){const xe=Jn(l,Y,re.path),L=a.resolve({path:xe.path},re),E=r.createHref(xe.fullPath);return Ye(xe,L,{params:h(L.params),hash:Wl(xe.hash),redirectedFrom:void 0,href:E})}let se;if("path"in Y)se=Ye({},Y,{path:Jn(l,Y.path,re.path).path});else{const xe=Ye({},Y.params);for(const L in xe)xe[L]==null&&delete xe[L];se=Ye({},Y,{params:m(Y.params)}),re.params=m(re.params)}const _e=a.resolve(se,re),Ne=Y.hash||"";_e.params=g(h(_e.params));const Oe=Th(o,Ye({},Y,{hash:f_(Ne),path:_e.path})),ke=r.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===Pr?v_(Y.query):Y.query||{}},_e,{redirectedFrom:void 0,href:ke})}function _(Y){return typeof Y=="string"?Jn(l,Y,s.value.path):Ye({},Y)}function w(Y,re){if(u!==Y)return Aa(8,{from:re,to:Y})}function x(Y){return M(Y)}function B(Y){return x(Ye(_(Y),{replace:!0}))}function I(Y){const re=Y.matched[Y.matched.length-1];if(re&&re.redirect){const{redirect:se}=re;let _e=typeof se=="function"?se(Y):se;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=_(_e):{path:_e},_e.params={}),Ye({query:Y.query,hash:Y.hash,params:Y.params},_e)}}function M(Y,re){const se=u=T(Y),_e=s.value,Ne=Y.state,Oe=Y.force,ke=Y.replace===!0,xe=I(se);if(xe)return M(Ye(_(xe),{state:Ne,force:Oe,replace:ke}),re||se);const L=se;L.redirectedFrom=re;let E;return!Oe&&Lh(o,_e,se)&&(E=Aa(16,{to:L,from:_e}),We(_e,_e,!0,!1)),(E?Promise.resolve(E):P(L,_e)).catch(O=>Ri(O)?O:de(O,L,_e)).then(O=>{if(O){if(Ri(O,2))return M(Ye(_(O.to),{state:Ne,force:Oe,replace:ke}),re||L)}else O=X(L,_e,!0,ke,Ne);return j(L,_e,O),O})}function V(Y,re){const se=w(Y,re);return se?Promise.reject(se):Promise.resolve()}function P(Y,re){let se;const[_e,Ne,Oe]=T_(Y,re);se=Wn(_e.reverse(),"beforeRouteLeave",Y,re);for(const xe of _e)xe.leaveGuards.forEach(L=>{se.push(bi(L,Y,re))});const ke=V.bind(null,Y,re);return se.push(ke),aa(se).then(()=>{se=[];for(const xe of d.list())se.push(bi(xe,Y,re));return se.push(ke),aa(se)}).then(()=>{se=Wn(Ne,"beforeRouteUpdate",Y,re);for(const xe of Ne)xe.updateGuards.forEach(L=>{se.push(bi(L,Y,re))});return se.push(ke),aa(se)}).then(()=>{se=[];for(const xe of Y.matched)if(xe.beforeEnter&&!re.matched.includes(xe))if(Array.isArray(xe.beforeEnter))for(const L of xe.beforeEnter)se.push(bi(L,Y,re));else se.push(bi(xe.beforeEnter,Y,re));return se.push(ke),aa(se)}).then(()=>(Y.matched.forEach(xe=>xe.enterCallbacks={}),se=Wn(Oe,"beforeRouteEnter",Y,re),se.push(ke),aa(se))).then(()=>{se=[];for(const xe of p.list())se.push(bi(xe,Y,re));return se.push(ke),aa(se)}).catch(xe=>Ri(xe,8)?xe:Promise.reject(xe))}function j(Y,re,se){for(const _e of f.list())_e(Y,re,se)}function X(Y,re,se,_e,Ne){const Oe=w(Y,re);if(Oe)return Oe;const ke=re===mi,xe=na?history.state:{};se&&(_e||ke?r.replace(Y.fullPath,Ye({scroll:ke&&xe&&xe.scroll},Ne)):r.push(Y.fullPath,Ne)),s.value=Y,We(Y,re,se,ke),De()}let U;function pe(){U=r.listen((Y,re,se)=>{const _e=T(Y),Ne=I(_e);if(Ne){M(Ye(Ne,{replace:!0}),_e).catch(Ka);return}u=_e;const Oe=s.value;na&&Mh(Dr(Oe.fullPath,se.delta),Rn()),P(_e,Oe).catch(ke=>Ri(ke,12)?ke:Ri(ke,2)?(M(ke.to,_e).then(xe=>{Ri(xe,20)&&!se.delta&&se.type===rl.pop&&r.go(-1,!1)}).catch(Ka),Promise.reject()):(se.delta&&r.go(-se.delta,!1),de(ke,_e,Oe))).then(ke=>{ke=ke||X(_e,Oe,!1),ke&&(se.delta?r.go(-se.delta,!1):se.type===rl.pop&&Ri(ke,20)&&r.go(-1,!1)),j(_e,Oe,ke)}).catch(Ka)})}let $e=Fa(),q=Fa(),K;function de(Y,re,se){De(Y);const _e=q.list();return _e.length?_e.forEach(Ne=>Ne(Y,re,se)):console.error(Y),Promise.reject(Y)}function ie(){return K&&s.value!==mi?Promise.resolve():new Promise((Y,re)=>{$e.add([Y,re])})}function De(Y){K||(K=!0,pe(),$e.list().forEach(([re,se])=>Y?se(Y):re()),$e.reset())}function We(Y,re,se,_e){const{scrollBehavior:Ne}=e;if(!na||!Ne)return Promise.resolve();const Oe=!se&&Vh(Dr(Y.fullPath,0))||(_e||!se)&&history.state&&history.state.scroll||null;return La().then(()=>Ne(Y,re,Oe)).then(ke=>ke&&Ph(ke)).catch(ke=>de(ke,Y,re))}const st=Y=>r.go(Y);let Ue;const Qt=new Set;return{currentRoute:s,addRoute:v,removeRoute:b,hasRoute:k,getRoutes:C,resolve:T,options:e,push:x,replace:B,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:d.add,beforeResolve:p.add,afterEach:f.add,onError:q.add,isReady:ie,install(Y){const re=this;Y.component("RouterLink",Is),Y.component("RouterView",$_),Y.config.globalProperties.$router=re,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>c(s)}),na&&!Ue&&s.value===mi&&(Ue=!0,x(r.location).catch(Ne=>{}));const se={};for(const Ne in mi)se[Ne]=H(()=>s.value[Ne]);Y.provide(In,re),Y.provide(Ls,oi(se)),Y.provide(Do,s);const _e=Y.unmount;Qt.add(Y),Y.unmount=function(){Qt.delete(Y),Qt.size<1&&(u=mi,U&&U(),s.value=mi,Ue=!1,K=!1),_e()}}}}function aa(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function T_(e,a){const l=[],o=[],r=[],d=Math.max(a.matched.length,e.matched.length);for(let p=0;p<d;p++){const f=a.matched[p];f&&(e.matched.find(u=>Ca(u,f))?o.push(f):l.push(f));const s=e.matched[p];s&&(a.matched.find(u=>Ca(u,s))||r.push(s))}return[l,o,r]}function Lm(){return He(In)}function Dm(){return He(Ls)}const L_={__name:"Navbar",props:["onClick"],setup(e){const a=G(),l=Lm();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return _s(()=>{const p=l.currentRoute.value.path.match(/\/([^/]+)$/);p&&(a.value=o(p[1]))}),(r,d)=>{const p=S("SuiIcon"),f=S("SuiMenuItem"),s=S("SuiMenu");return $(),D(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(p,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Be(a.value),1)]),_:1})]),_:1})}}},D_=Le(L_,[["__scopeId","data-v-338afb35"]]),I_=z({name:"Sidebar",setup(){const e=Dm();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),R_=y("strong",null," Fomantic UI Vue ",-1),E_=y("b",null,"Getting Started",-1);function z_(e,a,l,o,r,d){const p=S("sui-menu-item"),f=S("sui-menu-header"),s=S("sui-menu-menu"),u=S("sui-menu");return $(),D(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[R_]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[E_]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.elements,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.collections,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.views,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.modules,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const F_=Le(I_,[["render",z_]]),P_={class:"sidemenu"},M_={style:{flex:"1","overflow-y":"scroll"}},V_={__name:"Sidebar",setup(e){return(a,l)=>($(),he("div",P_,[y("div",M_,[t(F_)])]))}},H_=Le(V_,[["__scopeId","data-v-379ef704"]]),N_=z({name:"Sidebar",setup(){const e=Dm();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),O_=y("strong",null," Fomantic UI Vue ",-1),j_=y("b",null,"Getting Started",-1);function G_(e,a,l,o,r,d){const p=S("sui-menu-item"),f=S("sui-menu-header"),s=S("sui-menu-menu"),u=S("sui-sidebar");return $(),D(u,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[O_]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[j_]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.elements,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.collections,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.views,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[($(!0),he(Ce,null,et(e.modules,g=>($(),D(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const q_=Le(N_,[["render",G_]]),U_={class:"pusher",style:{height:"100vh"}},Y_={class:"article"},J_={__name:"Home",setup(e){const a=G(!1),l=()=>a.value=!a.value;return S_(()=>{a.value=!1}),(o,r)=>{const d=S("router-view"),p=S("SuiSegment");return $(),D(p,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(q_,{visible:a.value},null,8,["visible"]),y("div",U_,[t(H_),t(D_,{"on-click":l}),y("div",Y_,[t(d)])])]),_:1})}}},W_=Le(J_,[["__scopeId","data-v-0bfd4ee9"]]),K_={__name:"DocSections",props:["docs"],setup(e){const a=e,l=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const d=S("SuiHeader");return $(!0),he(Ce,null,et(l.value,(p,f)=>($(),he(Ce,{key:p},[t(d,{as:"h2",dividing:"",style:Ta({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Be(p),1)]),_:2},1032,["style"]),($(!0),he(Ce,null,et(e.docs.filter(s=>s.category===p),(s,u)=>($(),D(sd(s.component),{key:s.label+"_"+u,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},X_=e=>(ld("data-v-e2ae2e49"),e=e(),nd(),e),Q_={class:"item"},Z_=X_(()=>y("i",{class:"dropdown icon"},null,-1)),eb={class:"content menu active"},tb={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=kd(),l=p=>{p.preventDefault();const f=document.getElementById(a);f.open?r(f):(f.open=!0,o(f))},o=p=>{p.querySelector(".title").classList.add("active");const s=p.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${u}px`});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),g.abort()},{signal:g.signal})},r=p=>{const f=p.querySelector(".title"),s=p.querySelector(".content"),u=s.offsetHeight;s.style.maxHeight=`${u}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),p.open=!1,g.abort()},{signal:g.signal})},d=(p,f)=>{p.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(p,f)=>($(),he("details",Q_,[y("summary",{class:"title",onClick:l},[Z_,y("b",null,Be(e.header),1)]),y("div",eb,[($(!0),he(Ce,null,et(e.items,s=>($(),D(c(Is),{to:`#${s.id}`,class:"item",onClick:u=>d(u,s.id)},{default:i(()=>[n(Be(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},ib=Le(tb,[["__scopeId","data-v-e2ae2e49"]]),ab={class:"sticky"},lb={class:"ui vertical following fluid accordion text large menu"},nb={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const d=S("SuiHeader"),p=S("SuiRail");return $(),D(p,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[y("div",ab,[t(d,{as:"h3"},{default:i(()=>[n(Be(e.title),1)]),_:1}),y("div",lb,[($(),he(Ce,null,et(l,f=>t(ib,{id:`${f}_link`,header:f,items:e.links.filter(s=>s.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},ob=Le(nb,[["__scopeId","data-v-bd90305d"]]),sb={class:"intro"},rb={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(l,o)=>{const r=S("SuiHeaderSubheader"),d=S("SuiHeader"),p=S("SuiDivider"),f=S("SuiIcon"),s=S("SuiMenuItem"),u=S("SuiPopup"),g=S("SuiMenu"),m=S("SuiContainer"),h=S("SuiSegment");return $(),he("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(m,{class:"main"},{default:i(()=>[y("div",sb,[t(d,{as:"h1"},{default:i(()=>[n(Be(e.title)+" ",1),t(r,null,{default:i(()=>[n(Be(e.description),1)]),_:1})]),_:1}),t(p,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(s,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(u,{trigger:a.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(m,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?($(),he(Ce,{key:0},[t(K_,{docs:e.componentDocs},null,8,["docs"]),t(ob,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ks("",!0),Gi(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ft=Le(rb,[["__scopeId","data-v-d22eb33f"]]);var Or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ub(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(l,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),l}var Rm={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,p={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function _(w){return w instanceof s?new s(w.type,_(w.content),w.alias):Array.isArray(w)?w.map(_):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(w,x){x=x||{};var B,I;switch(f.util.type(w)){case"Object":if(I=f.util.objId(w),x[I])return x[I];B={},x[I]=B;for(var M in w)w.hasOwnProperty(M)&&(B[M]=_(w[M],x));return B;case"Array":return I=f.util.objId(w),x[I]?x[I]:(B=[],x[I]=B,w.forEach(function(V,P){B[P]=_(V,x)}),B);default:return w}},getLanguage:function(_){for(;_;){var w=r.exec(_.className);if(w)return w[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,w){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(B){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(B.stack)||[])[1];if(_){var w=document.getElementsByTagName("script");for(var x in w)if(w[x].src==_)return w[x]}return null}},isActive:function(_,w,x){for(var B="no-"+w;_;){var I=_.classList;if(I.contains(w))return!0;if(I.contains(B))return!1;_=_.parentElement}return!!x}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(_,w){var x=f.util.clone(f.languages[_]);for(var B in w)x[B]=w[B];return x},insertBefore:function(_,w,x,B){B=B||f.languages;var I=B[_],M={};for(var V in I)if(I.hasOwnProperty(V)){if(V==w)for(var P in x)x.hasOwnProperty(P)&&(M[P]=x[P]);x.hasOwnProperty(V)||(M[V]=I[V])}var j=B[_];return B[_]=M,f.languages.DFS(f.languages,function(X,U){U===j&&X!=_&&(this[X]=M)}),M},DFS:function _(w,x,B,I){I=I||{};var M=f.util.objId;for(var V in w)if(w.hasOwnProperty(V)){x.call(w,V,w[V],B||V);var P=w[V],j=f.util.type(P);j==="Object"&&!I[M(P)]?(I[M(P)]=!0,_(P,x,null,I)):j==="Array"&&!I[M(P)]&&(I[M(P)]=!0,_(P,x,V,I))}}},plugins:{},highlightAll:function(_,w){f.highlightAllUnder(document,_,w)},highlightAllUnder:function(_,w,x){var B={callback:x,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",B),B.elements=Array.prototype.slice.apply(B.container.querySelectorAll(B.selector)),f.hooks.run("before-all-elements-highlight",B);for(var I=0,M;M=B.elements[I++];)f.highlightElement(M,w===!0,B.callback)},highlightElement:function(_,w,x){var B=f.util.getLanguage(_),I=f.languages[B];f.util.setLanguage(_,B);var M=_.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(M,B);var V=_.textContent,P={element:_,language:B,grammar:I,code:V};function j(U){P.highlightedCode=U,f.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,f.hooks.run("after-highlight",P),f.hooks.run("complete",P),x&&x.call(P.element)}if(f.hooks.run("before-sanity-check",P),M=P.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!P.code){f.hooks.run("complete",P),x&&x.call(P.element);return}if(f.hooks.run("before-highlight",P),!P.grammar){j(f.util.encode(P.code));return}if(w&&o.Worker){var X=new Worker(f.filename);X.onmessage=function(U){j(U.data)},X.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else j(f.highlight(P.code,P.grammar,P.language))},highlight:function(_,w,x){var B={code:_,grammar:w,language:x};if(f.hooks.run("before-tokenize",B),!B.grammar)throw new Error('The language "'+B.language+'" has no grammar.');return B.tokens=f.tokenize(B.code,B.grammar),f.hooks.run("after-tokenize",B),s.stringify(f.util.encode(B.tokens),B.language)},tokenize:function(_,w){var x=w.rest;if(x){for(var B in x)w[B]=x[B];delete w.rest}var I=new m;return h(I,I.head,_),g(_,I,w,I.head,0),b(I)},hooks:{all:{},add:function(_,w){var x=f.hooks.all;x[_]=x[_]||[],x[_].push(w)},run:function(_,w){var x=f.hooks.all[_];if(!(!x||!x.length))for(var B=0,I;I=x[B++];)I(w)}},Token:s};o.Prism=f;function s(_,w,x,B){this.type=_,this.content=w,this.alias=x,this.length=(B||"").length|0}s.stringify=function _(w,x){if(typeof w=="string")return w;if(Array.isArray(w)){var B="";return w.forEach(function(j){B+=_(j,x)}),B}var I={type:w.type,content:_(w.content,x),tag:"span",classes:["token",w.type],attributes:{},language:x},M=w.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(I.classes,M):I.classes.push(M)),f.hooks.run("wrap",I);var V="";for(var P in I.attributes)V+=" "+P+'="'+(I.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+V+">"+I.content+"</"+I.tag+">"};function u(_,w,x,B){_.lastIndex=w;var I=_.exec(x);if(I&&B&&I[1]){var M=I[1].length;I.index+=M,I[0]=I[0].slice(M)}return I}function g(_,w,x,B,I,M){for(var V in x)if(!(!x.hasOwnProperty(V)||!x[V])){var P=x[V];P=Array.isArray(P)?P:[P];for(var j=0;j<P.length;++j){if(M&&M.cause==V+","+j)return;var X=P[j],U=X.inside,pe=!!X.lookbehind,$e=!!X.greedy,q=X.alias;if($e&&!X.pattern.global){var K=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,K+"g")}for(var de=X.pattern||X,ie=B.next,De=I;ie!==w.tail&&!(M&&De>=M.reach);De+=ie.value.length,ie=ie.next){var We=ie.value;if(w.length>_.length)return;if(!(We instanceof s)){var st=1,Ue;if($e){if(Ue=u(de,De,_,pe),!Ue||Ue.index>=_.length)break;var re=Ue.index,Qt=Ue.index+Ue[0].length,zt=De;for(zt+=ie.value.length;re>=zt;)ie=ie.next,zt+=ie.value.length;if(zt-=ie.value.length,De=zt,ie.value instanceof s)continue;for(var Y=ie;Y!==w.tail&&(zt<Qt||typeof Y.value=="string");Y=Y.next)st++,zt+=Y.value.length;st--,We=_.slice(De,zt),Ue.index-=De}else if(Ue=u(de,0,We,pe),!Ue)continue;var re=Ue.index,se=Ue[0],_e=We.slice(0,re),Ne=We.slice(re+se.length),Oe=De+We.length;M&&Oe>M.reach&&(M.reach=Oe);var ke=ie.prev;_e&&(ke=h(w,ke,_e),De+=_e.length),v(w,ke,st);var xe=new s(V,U?f.tokenize(se,U):se,q,se);if(ie=h(w,ke,xe),Ne&&h(w,ie,Ne),st>1){var L={cause:V+","+j,reach:Oe};g(_,w,x,ie.prev,De,L),M&&L.reach>M.reach&&(M.reach=L.reach)}}}}}}function m(){var _={value:null,prev:null,next:null},w={value:null,prev:_,next:null};_.next=w,this.head=_,this.tail=w,this.length=0}function h(_,w,x){var B=w.next,I={value:x,prev:w,next:B};return w.next=I,B.prev=I,_.length++,I}function v(_,w,x){for(var B=w.next,I=0;I<x&&B!==_.tail;I++)B=B.next;w.next=B,B.prev=w,_.length-=I}function b(_){for(var w=[],x=_.head.next;x!==_.tail;)w.push(x.value),x=x.next;return w}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(_){var w=JSON.parse(_.data),x=w.language,B=w.code,I=w.immediateClose;o.postMessage(f.highlight(B,f.languages[x],x)),I&&o.close()},!1)),f;var C=f.util.currentScript();C&&(f.filename=C.src,C.hasAttribute("data-manual")&&(f.manual=!0));function k(){f.manual||f.highlightAll()}if(!f.manual){var T=document.readyState;T==="loading"||T==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return f}(a);e.exports&&(e.exports=l),typeof Or<"u"&&(Or.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(r,d){var p={};p["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[d]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};f["language-"+d]={pattern:/[\s\S]+/,inside:l.languages[d]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:f},l.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,r){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:l.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var d=o.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,k){return"✖ Error "+C+" while fetching file: "+k},d="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",u="loaded",g="failed",m="pre[data-src]:not(["+f+'="'+u+'"]):not(['+f+'="'+s+'"])';function h(C,k,T){var _=new XMLHttpRequest;_.open("GET",C,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?k(_.responseText):_.status>=400?T(r(_.status,_.statusText)):T(d))},_.send(null)}function v(C){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(k){var T=Number(k[1]),_=k[2],w=k[3];return _?w?[T,Number(w)]:[T,void 0]:[T,T]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+m}),l.hooks.add("before-sanity-check",function(C){var k=C.element;if(k.matches(m)){C.code="",k.setAttribute(f,s);var T=k.appendChild(document.createElement("CODE"));T.textContent=o;var _=k.getAttribute("data-src"),w=C.language;if(w==="none"){var x=(/\.(\w+)$/.exec(_)||[,"none"])[1];w=p[x]||x}l.util.setLanguage(T,w),l.util.setLanguage(k,w);var B=l.plugins.autoloader;B&&B.loadLanguages(w),h(_,function(I){k.setAttribute(f,u);var M=v(k.getAttribute("data-range"));if(M){var V=I.split(/\r\n?|\n/g),P=M[0],j=M[1]==null?V.length:M[1];P<0&&(P+=V.length),P=Math.max(0,Math.min(P-1,V.length)),j<0&&(j+=V.length),j=Math.max(0,Math.min(j,V.length)),I=V.slice(P,j).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(P+1))}T.textContent=I,l.highlightElement(T)},function(I){k.setAttribute(f,g),T.textContent=I})}}),l.plugins.fileHighlight={highlight:function(k){for(var T=(k||document).querySelectorAll(m),_=0,w;w=T[_++];)l.highlightElement(w)}};var b=!1;l.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Rm);var Em=Rm.exports;const cb=Im(Em),zl={mounted(e,a){var r;const l=a.modifiers,o=a.value;l.script||o==="script"?e.className="language-javascript":e.className="language-markup",cb.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},db={style:{paddingTop:"3rem"}},mb=y("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),pb=y("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),fb=[pb],gb={style:{paddingTop:"3rem",marginBottom:"3rem"}},hb=y("p",null," You can import all components as Vue plugin. ",-1),_b=y("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),bb=[_b],vb=y("br",null,null,-1),yb=y("p",null," Or pick a component indivisually, add it to your components option. ",-1),Sb=y("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),wb=[Sb],Cb={__name:"GettingStarted",setup(e){return(a,l)=>{const o=S("SuiHeader");return $(),D(ft,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[y("section",db,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),mb,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),wi(($(),he("pre",null,fb)),[[c(zl)]])]),y("section",gb,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),hb,wi(($(),he("pre",null,bb)),[[c(zl),void 0,void 0,{script:!0}]]),vb,yb,wi(($(),he("pre",null,wb)),[[c(zl),void 0,void 0,{script:!0}]])])]),_:1})}}};function zm(e){var a,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=zm(e[a]))&&(o&&(o+=" "),o+=l);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function ee(){for(var e,a,l=0,o="";l<arguments.length;)(e=arguments[l++])&&(a=zm(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Me=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Pe=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Ia=e=>e==="justified"?"justified":Me(e,"aligned"),ri=(e,a)=>typeof e=="number"&&a?`${Eo(e)} ${a}`:typeof e=="number"&&!a?Eo(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Pa=(e,a)=>e?`${Eo(e)} wide ${a}`:"",Eo=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],W=z({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:H(()=>ee(e.color,e.name,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.colored,"colored"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Me(e.flipped,"flipped"),Me(e.rotated,"rotated"),Pe(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return J(e,{"aria-hidden":!0,class:this.classes})}}),yi=z({name:"SuiIconGroup",props:{as:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return J(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ab={install(e){e.component(W.name,W),e.component(yi.name,yi)}},kb=()=>({icon:[Boolean,String]}),xb=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":ee({icon:e.icon&&!e.content}))}),$b=["right","left"],Bb=()=>({labeled:[Boolean,String]}),Tb=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":$b.includes(e.labeled)?`${e.labeled} labeled`:"")}),Lb=["double","elastic"],Db=()=>({loading:{type:[Boolean,String],validator:e=>Lb.includes(e)||typeof e=="boolean"}}),Ib=e=>({loadingClasses:H(()=>ee(e.loading,{loading:e.loading}))}),F=z({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...kb(),...Bb(),...Db()},setup(e){const{iconClasses:a}=xb(e),{labeledClasses:l}=Tb(e),{loadingClasses:o}=Ib(e);return{classes:H(()=>ee("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Me(e.attached,"attached"),Me(e.floated,"floated"),Pe(e.animated,"animated"),a.value,l.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,l;return[typeof this.icon=="string"&&t(W,{name:this.icon},null),this.content||((l=(a=this.$slots).default)==null?void 0:l.call(a))]}})}}),vi=z({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),pt=z({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Me(e.attached,"attached"),ri(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Rb={install(e){e.component(F.name,F),e.component(vi.name,vi),e.component(pt.name,pt)}},Ci=z({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.text,"text"),Ia(e.textAlign),"container"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb={install(e){e.component(Ci.name,Ci)}},zb=["mini","tiny","small","medium","large","big","huge","massive"],Fm=()=>({size:{type:String,validator:e=>zb.includes(e)}}),Pm=e=>({sizeClass:H(()=>e.size)}),Ve=z({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...Fm()},setup(e){const{sizeClass:a}=Pm(e);return{classes:H(()=>ee("ui",a.value,A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Me(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return J("div",{class:this.classes},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb={install(e){e.component(Ve.name,Ve)}},At=z({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>ee(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?J("em",{class:this.computedClass,"data-emoji":this.$props.name}):J("em",{"data-emoji":this.$props.name})}}),Pb={install(e){e.component(At.name,At)}},Ot=z({name:"SuiFlag",props:{name:String,...Fm()},setup(e){const{sizeClass:a}=Pm(e);return{classes:H(()=>ee(a.value,e.name,"flag"))}},render(){return J("i",{class:this.classes})}}),Mb={install(e){e.component(Ot.name,Ot)}},ka=z({name:"SuiHeaderSubheader",props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return J(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=z({name:"SuiHeader",components:{HeaderSubheader:ka},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=H(()=>ee("ui",e.color,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Me(e.floated,"floated"),Pe(e.attached,"attached"),Ia(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(J(ka,{},this.subheader)),l.length>0?J(this.elementType,{class:this.computedClass},l):J(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kl=z({name:"SuiHeaderContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vb={install(e){e.component(fe.name,fe),e.component(Kl.name,Kl),e.component(ka.name,ka)}},Mm=["top","middle","bottom"],Hb={verticalAlign:{type:String,validator:e=>Mm.includes(e)}};function Nb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&Mm.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const Ob=["left","right"],jb={floated:{type:String,validator:e=>Ob.includes(e)}};function Gb(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const N=z({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>ee("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(!!e.icon&&a.default===void 0,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Me(e.attached,"attached"),Me(e.corner,"corner"),Pe(e.pointing,"pointing"),Pe(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var r;return J(o,{class:l.value},[J(W,{name:e.icon}),(r=a.default)==null?void 0:r.call(a)])}:()=>{var r;return J(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Ji=z({name:"SuiLabelDetail",render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wi=z({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return J("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),qb={install(e){e.component(N.name,N),e.component(Ji.name,Ji),e.component(Wi.name,Wi)}},ne=z({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...Hb,...jb},setup(e,{slots:a}){const{verticalAlignClass:l}=Nb(e),{floatedClass:o}=Gb(e),r=H(()=>ee("ui",e.size,l.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),Pe(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=S(e.as)),()=>{var p;return J(d,{class:r.value,href:e.href,target:e.target&&e.target},J("img",{src:e.src},(p=a.default)==null?void 0:p.call(a)))}}return e.wrapped?()=>{var d;return J("div",{class:r.value},J("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>J("div",{class:r.value},[J("img",{src:e.src}),J(N,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),Xl=z({name:"SuiImageGroup",props:{size:String},setup(e,{slots:a}){const l=H(()=>ee("ui",e.size,"images"));return()=>{var o;return J("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),Ub={install(e){e.component(ne.name,ne),e.component(Xl.name,Xl)}},Ze=z({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),r=H(()=>ee("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(l.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),d=p=>a("update:modelValue",p.target.value);return()=>t("div",{class:r.value},[e.label&&t(N,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:p=>d(p)},null),l.value&&t(W,{name:e.icon||"spinner"},null),e.action&&t(F,null,{default:()=>[e.action]})])}}),Yb={install(e){e.component(Ze.name,Ze)}},zo=z({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const l=H(()=>ee("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Me(e.verticalAlign,"aligned"),Me(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return J(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),oa=z({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let l=e.as||"div";const o=H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return J(l,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),jr=z({name:"SuiListIcon",components:{Icon:W},setup(e,{slots:a}){return()=>{var l;return J(S(W.name),{...e},(l=a.default)==null?void 0:l.call(a))}}}),Gr=z({name:"SuiListContent",props:{verticalAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qr=z({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return J(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),Ur=z({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return J(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),Yr=z({name:"SuiListList",render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jb={install(e){e.component(zo.name,zo),e.component(oa.name,oa),e.component(jr.name,jr),e.component(Gr.name,Gr),e.component(qr.name,qr),e.component(Ur.name,Ur),e.component(Yr.name,Yr)}},Ee=z({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var l;return ee("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),Pe(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wb={install(e){e.component(Ee.name,Ee)}},Jr=z({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),Pe(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kb={install(e){e.component(Jr.name,Jr)}},$i=z({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$t=z({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Xb={install(e){e.component($i.name,$i),e.component($t.name,$t)}},Te=z({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Me(e.floated,"floated"),Me(e.textAlign,"aligned"),Pe(e.attached,"attached"),Pe(e.fitted,"fitted"),Pe(e.padded,"padded"),"segment"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wr=z({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kr=z({name:"SuiSegmentInline",render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb={install(e){e.component(Te.name,Te),e.component(Wr.name,Wr),e.component(Kr.name,Kr)}},Xr=z({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,l,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Zb=["one","two","three","four","five","six","seven","eight"],Qr=z({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>ee("ui",a&&Zb[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zr=z({name:"SuiStepContent",render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),eu=z({name:"SuiStepTitle",render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tu=z({name:"SuiStepDescription",render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ev={install(e){e.component(Xr.name,Xr),e.component(Qr.name,Qr),e.component(Zr.name,Zr),e.component(eu.name,eu),e.component(tu.name,tu)}},tv=Object.freeze(Object.defineProperty({__proto__:null,Button:Rb,Container:Eb,Divider:Fb,Emoji:Pb,Flag:Mb,Header:Vb,Icon:Ab,Image:Ub,Input:Yb,Label:qb,List:Jb,Loader:Wb,Rail:Kb,Reveal:Xb,Segment:Qb,Step:ev},Symbol.toStringTag,{value:"Module"})),kt=z({name:"SuiBreadcrumbDivider",props:{icon:String},setup(e){return{computedClass:H(()=>ee(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),it=z({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>ee(A(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=S("router-link"));const a={href:this.href,to:this.to};return t(e,ta({class:this.computedClass},a),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),Kt=z({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,d)=>{const p={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ce,null,[t(it,p,{default:()=>[r.content]}),this.sections.length!==d+1&&t(kt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),iv={install(e){e.component(Kt.name,Kt),e.component(kt.name,kt),e.component(it.name,it)}},Et=z({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.error,"error"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iu=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function av(e){return{widthClass:H(()=>Number(e.width)>0?`${iu[Number(e.width)-1]} wide`:typeof e.width=="string"||iu.includes(e.width)?`${e.width} wide`:null)}}const at=z({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=av(e),o=H(()=>ee(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),l.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ql=z({name:"SuiFormGroup",props:{widths:String},setup(e){return{computedClass:H(()=>ee(Me(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zl=z({name:"SuiFormTextarea",props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),lv={install(e){e.component(Et.name,Et),e.component(at.name,at),e.component(Ql.name,Ql),e.component(Zl.name,Zl)}},xa=z({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Me(e.reversed,"reversed"),Me(e.verticalAlign,"aligned"),Pe(e.celled,"celled"),Pe(e.divided,"divided"),Pe(e.padded,"padded"),Pe(e.relaxed,"relaxed"),Ia(e.textAlign),ri(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),St=z({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>ee(e.color,Me(e.floated,"floated"),Me(e.only,"only"),Ia(e.textAlign),ri(e.width,"wide"),Pa(e.mobile,"mobile"),Pa(e.tablet,"tablet"),Pa(e.computer,"computer"),Pa(e.largeScreen,"large screen"),Pa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),en=z({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>ee(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Me(e.only,"only"),ri(e.columns,"column"),Ia(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nv={install(e){e.component(xa.name,xa),e.component(St.name,St),e.component(en.name,en)}},Fo=z({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),Pe(e.attached,"attached"),Pe(e.floated,"floated"),Pe(e.icon,"icon"),Pe(e.tabular,"tabular"),ri(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),au=z({name:"SuiMenuHeader",props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),tn=z({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=S(e.as));const o=H(()=>ee(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.icon,"icon"),A(e.link,"link"),Pe(e.fitted,"fitted"),"item"));return()=>t(l,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),lu=z({name:"SuiMenuMenu",props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>ee(a,"menu"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov={install(e){e.component(Fo.name,Fo),e.component(au.name,au),e.component(tn.name,tn),e.component(lu.name,lu)}},ul=z({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),Pe(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(Po,null,{default:()=>[t(Mo,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Po=z({name:"SuiMessageContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mo=z({name:"SuiMessageHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nu=z({name:"SuiMessageItem",render(){var e,a;return J("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ou=z({name:"SuiMessageList",render(){var e,a;return J("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sv={install(e){e.component(ul.name,ul),e.component(Po.name,Po),e.component(Mo.name,Mo),e.component(nu.name,nu),e.component(ou.name,ou)}},su=z({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),Pe(e.attached,"attached"),Pe(e.basic,"basic"),Pe(e.compact,"compact"),Pe(e.padded,"padded"),ri(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ru=z({name:"SuiTableBody",render(){var e,a;return J("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uu=z({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Me(e.verticalAlign,"aligned"),Me(e.marked,"marked"),Ia(e.textAlign)))}},render(){var e,a,l,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),cu=z({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>ee(A(a,"full-width")))}},render(){var e,a,l,o;return this.computedClass?J("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),du=z({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.fullWidth,"full-width")))}},render(){var e,a,l,o;return this.computedClass?J("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),mu=z({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>ee(A(e.singleLine,"single line"),Me(e.textAlign,"aligned"),ri(e.width,"wide")))}},render(){var e,a,l,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),pu=z({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>ee(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Me(e.textAlign,"aligned"),Me(e.verticalAlign,"aligned")))}},render(){var e,a,l,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),rv={install(e){e.component(su.name,su),e.component(ru.name,ru),e.component(uu.name,uu),e.component(cu.name,cu),e.component(du.name,du),e.component(mu.name,mu),e.component(pu.name,pu)}},uv=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:iv,Form:lv,Grid:nv,Menu:ov,Message:sv,Table:rv},Symbol.toStringTag,{value:"Module"})),fu=z({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>ee("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,l,o;return this.$props.test?J("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),cv={install(e){e.component(fu.name,fu)}},gu=z({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,l,o;return this.$props.href||this.$props.link?J("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),hu=z({name:"SuiCardContent",props:{extra:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_u=z({name:"SuiCardDescription",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bu=z({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ri(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),vu=z({name:"SuiCardHeader",props:{textAlign:String},setup(e){return{computedClass:H(()=>ee(Me(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),yu=z({name:"SuiCardMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),dv={install(e){e.component(gu.name,gu),e.component(hu.name,hu),e.component(_u.name,_u),e.component(bu.name,bu),e.component(vu.name,vu),e.component(yu.name,yu)}},Su=z({name:"SuiComment",render(){var e,a;return J("div",{class:"comment"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),wu=z({name:"SuiCommentAction",props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>ee(A(a,"active")))}},render(){var e,a,l,o;return this.computedClass?J("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):J("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Cu=z({name:"SuiCommentActions",render(){var e,a;return J("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Au=z({name:"SuiCommentAuthor",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return J(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ku=z({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return J(e,{class:"avatar"},J("img",{src:this.$props.src}))}}),xu=z({name:"SuiCommentContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$u=z({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Bu=z({name:"SuiCommentMetadata",render(){var e,a;return J("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tu=z({name:"SuiCommentText",render(){var e,a;return J("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),mv={install(e){e.component(Su.name,Su),e.component(wu.name,wu),e.component(Cu.name,Cu),e.component(Au.name,Au),e.component(ku.name,ku),e.component(xu.name,xu),e.component($u.name,$u),e.component(Bu.name,Bu),e.component(Tu.name,Tu)}},Lu=z({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>ee("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Du=z({name:"SuiFeedContent",render(){var e,a;return J("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Iu=z({name:"SuiFeedDate",render(){var e,a;return J("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ru=z({name:"SuiFeedEvent",render(){var e,a;return J("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eu=z({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:H(()=>ee(A(a,"images"),A(l,"text"),"extra"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zu=z({name:"SuiFeedLabel",render(){var e,a;return J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fu=z({name:"SuiFeedLike",render(){var e,a;return J("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pu=z({name:"SuiFeedMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mu=z({name:"SuiFeedSummary",render(){var e,a;return J("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vu=z({name:"SuiFeedUser",render(){var e,a;return J("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),pv={install(e){e.component(Lu.name,Lu),e.component(Du.name,Du),e.component(Iu.name,Iu),e.component(Ru.name,Ru),e.component(Eu.name,Eu),e.component(zu.name,zu),e.component(Fu.name,Fu),e.component(Pu.name,Pu),e.component(Mu.name,Mu),e.component(Vu.name,Vu)}},Hu=z({name:"SuiItem",render(){var e,a;return J("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nu=z({name:"SuiItemContent",props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>ee(Me(a,"aligned"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ou=z({name:"SuiItemDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ju=z({name:"SuiItemExtra",render(){var e,a;return J("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gu=z({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>ee("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),Pe(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qu=z({name:"SuiItemHeader",props:{as:String},render(){var e,a;let l=this.$props.as||"div";return J(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Uu=z({name:"SuiItemImage",props:{size:String},setup(e){return{computedClass:H(()=>ee(e.size,"image"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yu=z({name:"SuiItemMeta",render(){var e,a;return J("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fv={install(e){e.component(Hu.name,Hu),e.component(Nu.name,Nu),e.component(Ou.name,Ou),e.component(ju.name,ju),e.component(Gu.name,Gu),e.component(qu.name,qu),e.component(Uu.name,Uu),e.component(Yu.name,Yu)}},an=z({name:"SuiStatisticLabel",props:{content:String},render(){var e,a;return this.$props.content?J("div",{class:"label"},this.$props.content):J("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ln=z({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?J("div",{class:this.computedClass},this.$props.content):J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ju=z({name:"SuiStatistic",components:{StatisticLabel:an,StatisticValue:ln},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=He("ui",!0);return{computedClass:H(()=>ee(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),Pe(e.floated,"floated"),"statistic"))}},render(){var e,a,l,o,r,d;let p=[];return this.$props.value&&p.push(J(ln,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&p.push(J(an,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),J("div",{class:this.computedClass},p.length>0?p:(d=(r=this.$slots).default)==null?void 0:d.call(r))}}),Wu=z({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return dt("ui",!1),{computedClass:H(()=>ee("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ri(e.widths,""),"statistics"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component(Ju.name,Ju),e.component(Wu.name,Wu),e.component(an.name,an),e.component(ln.name,ln)}},hv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:cv,Card:dv,Comment:mv,Feed:pv,Item:fv,Statistic:gv},Symbol.toStringTag,{value:"Module"})),Ku=z({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),l=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const d=l(r);e.multiple?d?a.value=a.value.filter(p=>p!==r):a.value.push(r):a.value=d?-1:r};return dt("isTabActive",l),dt("updateActiveIndex",o),{computedClass:H(()=>ee("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=o=>(o.forEach((r,d)=>{r.props.index=d}),o);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Xu=z({name:"SuiAccordionAccordion",render(){var e,a;return J("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vo=z({name:"SuiAccordionContent",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"content"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qu=z({name:"SuiAccordionTab",props:{index:Number,title:String},setup(e){const a=He("isTabActive"),l=He("updateActiveIndex"),o=H(()=>ee(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:o}},render(){return t(Ce,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(W,{name:"dropdown"},null),this.title]),t(Vo,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),Zu=z({name:"SuiAccordionTitle",props:{active:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.active,"active"),"title"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),_v={install(e){e.component(Ku.name,Ku),e.component(Xu.name,Xu),e.component(Vo.name,Vo),e.component(Qu.name,Qu),e.component(Zu.name,Zu)}},bv=(e,a,l)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},vv=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},Rs={mounted:bv,unmounted:vv};function yv(e,a={}){const l=G(e.value?"open":"closed"),o=()=>l.value=e.value?"open":"closed";ht(e,f=>{l.value=f?"opening":"closing"});const r=f=>{f.addEventListener("animationend",o,!0)},d=f=>{f&&f.removeEventListener("animationend",o)},p=H((f="scale")=>{switch(l.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:d,computeAnimationClass:p}}const Sv=z({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=G(!1),o=()=>{e.disabled||(l.value=!0)},r=()=>l.value=!1,d=()=>{e.disabled||a("select-day",e.date)},p=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},f=H(()=>ee("link",A(l.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(p(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:d,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Rt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),wv=z({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:o,subtract:r,selectedDate:d,setSelectedDate:p,selectType:f,updateVisible:s,formatDate:u}=He(Ti);return{calendarDays:e,isEqualDay:g=>{if(!d.value)return!1;const m=d.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),f.value==="date"){let m=new Date(g.year,g.month,g.day);p(m),s(!1);return}a("hour")},updateSelectMode:a,formatDate:u,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(o=>t(Sv,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),Se=z({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),l=()=>a.value=!0,o=()=>a.value=!1,r=H(()=>ee("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Rt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Cv=z({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:o,selectedDate:r,updateSelectMode:d}=He(Ti);return{state:e,add:l,subtract:o,updateSelectMode:d,isActive:p=>r.value?e.year===r.value.getFullYear()&&e.month===p:!1,isThisMonth:p=>{let f=new Date;return p===f.getMonth()&&e.year===f.getFullYear()},onClickCell:p=>{a(p,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,o)=>t("tr",null,[t(Se,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(Se,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(Se,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),Av=z({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:o,subtract:r,selectedDate:d,updateSelectMode:p}=He(Ti),f=()=>o(10,"years"),s=()=>r(10,"years"),u=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:p,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:u,isActive:g=>d.value?g===d.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{l(g,"years"),p("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(Se,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(Se,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(Se,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(Se,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(Se,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(Se,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(Se,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(Se,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(Se,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(Se,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(Se,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),kv=z({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:o,subtract:r,formatDate:d,selectedDate:p}=He(Ti);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{l(f,"hours"),e("minute")},isActive:f=>{if(!p.value)return!1;let s=p.value.getFullYear(),u=p.value.getMonth(),g=p.value.getDate(),m=p.value.getHours();return a.year===s&&a.month===u&&a.day===g&&f===m}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(Se,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(Se,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(Se,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(Se,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(Se,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(Se,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(Se,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(Se,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(Se,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(Se,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(Se,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(Se,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(Se,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(Se,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(Se,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(Se,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Pt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ht(e)}const xv=z({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:o,formatDate:r,updateSelectMode:d,updateVisible:p,selectedDate:f}=He(Ti);return{add:l,subtract:o,formatDate:r,updateSelectMode:d,getTimeLabel:s=>{let u=e.hour%12,g=e.hour>12?"PM":"AM",m=s.toString().padStart(2,"0");return e.hour===0?`12:${m} AM`:e.hour===12?`12:${m} PM`:`${u}:${m} ${g}`},onClickCell:s=>{a(s,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),p(!1)},isActive:s=>{if(!f.value)return!1;let u=f.value.getFullYear(),g=f.value.getMonth(),m=f.value.getDate(),h=f.value.getHours(),v=f.value.getMinutes();return e.year===u&&e.month===g&&e.day===m&&e.hour===h&&s===v}}},render(){let e,a,l,o,r,d,p,f,s,u,g,m;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(Se,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Pt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(Se,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Pt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(Se,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Pt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(Se,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Pt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(Se,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Pt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(Se,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Pt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(Se,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Pt(p=this.getTimeLabel(30))?p:{default:()=>[p]}),t(Se,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Pt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(Se,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Pt(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(Se,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Pt(u=this.getTimeLabel(45))?u:{default:()=>[u]}),t(Se,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Pt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(Se,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Pt(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),$v=z({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:l}=He(Ti),{setupAnimation:o,removeAnimation:r,computeAnimationClass:d}=yv(a);Bi(()=>o(e.value)),ea(()=>r(e.value));const p=H(()=>ee("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:p,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t(wv,null,null);case"month":return t(Cv,null,null);case"year":return t(Av,null,null);case"hour":return t(kv,null,null);case"minute":return t(xv,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),Bv=z({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:o,set:r,state:d,formatCalendarDate:p}=He(Ti);return{visible:a,formatCalendarDate:p,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Tv=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let o=l.getDay();return o>=7?o-7:o},Lv=(e,a)=>{let l,o;return a===0?(l=11,o=e-1):(l=a-1,o=e),32-new Date(o,l,32).getDate()},Kn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function Dv(){const e=G(!1),a=(C=!1)=>e.value=C,l=new Date;function o(C){if(!C)return;let k=C.getFullYear(),T=Kn(C.getMonth()),_=C.getDate(),w=C.getHours(),x=C.getMinutes(),B=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let I=x.toString().padStart(2,"0");return`${T} ${_}, ${k} ${w}:${I} ${B}`}const r=G("default"),d=G("day");function p(C){d.value=C}const f=G(null),s=C=>{f.value=C},u=oi({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),g=(C,k)=>{switch(k){case"years":u.year=C;break;case"months":u.month=C;break;case"days":u.day=C;break;case"hours":u.hour=C;break;case"minutes":u.minute=C}},m=(C,k)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":T.setFullYear(T.getFullYear()+C);break;case"months":T.setMonth(T.getMonth()+C);break;case"days":T.setDate(T.getDate()+C);break;case"hours":T.setHours(T.getHours()+C);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},h=(C,k)=>{let T=new Date(u.year,u.month,u.day,u.hour);switch(k){case"years":T.setFullYear(T.getFullYear()-C);break;case"months":T.setMonth(T.getMonth()-C);break;case"days":T.setDate(T.getDate()-C);break;case"hours":T.setHours(T.getHours()-C);break}u.year=T.getFullYear(),u.month=T.getMonth(),u.day=T.getDate(),u.hour=T.getHours()},v=(C="default")=>C==="date"?`${Kn(u.month)} ${u.year}`:`${Kn(u.month)} ${u.day}, ${u.year}`,b=H(()=>{let C=u.month,k=u.year;C>11&&(C=C%11-1,k+=1);let T=[],_=Tv(k,C),w=32-new Date(k,C,32).getDate(),x=Lv(k,C),B=1;for(let I=0;I<6;I++){let M=[];if(I===0){for(let P=x-_+1;P<=x;P++){let j=C===0?11:C-1,X=C===0?k-1:k;M.push({day:P,month:j,year:X,currentMonth:!1})}let V=7-M.length;for(let P=0;P<V;P++)M.push({day:B,month:C,year:k,currentMonth:!0}),B++}else for(let V=0;V<7;V++){if(B>w){let P=C===11?0:C+1,j=C===11?k+1:k;M.push({day:B-w,month:P,year:j,currentMonth:!1})}else M.push({day:B,month:C,year:k,currentMonth:!0});B++}T.push(M)}return T});return{visible:e,updateVisible:a,calendarDays:b,formatCalendarDate:o,selectMode:d,updateSelectMode:p,selectType:r,selectedDate:f,setSelectedDate:s,state:u,set:g,add:m,subtract:h,formatDate:v}}const Ti=Symbol("useCalendar"),ec=z({name:"SuiCalendar",directives:{clickoutside:Rs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=Dv();dt(Ti,l);const{updateVisible:o,selectedDate:r}=l;return ht(r,d=>{a("update:modelValue",d)}),{updateVisible:o}},render(){return wi(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t($v,null,null),t("i",{class:"calendar icon"},null),t(Bv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[wn("clickoutside"),()=>this.updateVisible(!1)]])}}),Iv={install:e=>{e.component(ec.name,ec)}},Ho=z({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=H(()=>ee("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let d;e.value?o.value?d=e.modelValue.filter(p=>e.value!==p):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),Rv={install(e){e.component(Ho.name,Ho)}},jt=z({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>ee("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Me(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return J("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tc=z({name:"SuiDimmerDimmable",components:{Segment:Te},props:{blurring:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.blurring,"blurring"),"dimmable"))}},render(){var e,a;return J(Te,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ev={install(e){e.component(jt.name,jt),e.component(tc.name,tc)}},zv=(e,a)=>e.map(l=>l[a]),Fv=z({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>ee(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:p}=this.item;l=t(Ce,null,[d&&t("i",{class:`${d} flag`},null),p])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ce,null,[t("div",{class:this.computedClass},[o&&t(ne,o,null),r&&t(N,r,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Rt(()=>this.$emit("remove"),["stop"])},null)])}}),Pv=e=>{const a=oi({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return ht(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function Mv(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ht(e)}const ic=z({name:"SuiDropdown",directives:{clickoutside:Rs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=Pv(e);dt("useDropdown",l);const{state:o,show:r,hide:d}=l,p=H(()=>ee("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),Pe(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),f=()=>{var k;if(o.visible)return d();(k=h.value)==null||k.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},u=()=>d(),g=G(""),m=H(()=>{const k=g.value.toLowerCase();return e.options.filter(T=>{const _=typeof T=="object"?T.text:T,w=_.toLowerCase().includes(k);if(!e.multiple)return w;if(Array.isArray(e.modelValue)){const x=typeof T=="object"?zv(e.modelValue,"text").includes(_):e.modelValue.includes(_);return w&&!x}return w})}),h=G(null),v=k=>g.value=k.target.value,b=k=>{var T;if(g.value="",e.search&&((T=h.value)==null||T.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,k]:[k];return a("update:modelValue",_)}return a("update:modelValue",k)},C=k=>{if(Array.isArray(e.modelValue)){const T=e.modelValue.findIndex(_=>_===k);if(T>-1){let _=Object.assign(e.modelValue);_.splice(T,1),a("update:modelValue",_)}}};return dt("selection",e.selection),{computedClass:p,onClick:f,openMenu:s,closeMenu:u,filteredText:g,filteredOptions:m,inputRef:h,onInput:v,onSelect:b,removeItem:C}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(p=>typeof p=="object"?t("a",{class:"ui label"},[p.flag&&t("i",{class:`${p.flag} flag`},null),p.text,t("i",{class:"delete icon",onClick:Rt(()=>this.removeItem(p),["stop"])},null)]):t("a",{class:"ui label"},[p,t("i",{class:"delete icon",onClick:Rt(()=>this.removeItem(p),["stop"])},null)]))},o=()=>this.filteredOptions.filter(p=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(p):!0).map(p=>t(No,{item:p,active:this.$props.modelValue&&typeof p=="object"?p.text===this.$props.modelValue.text:p===this.$props.modelValue,text:typeof p=="object"?p.text:p,flag:typeof p=="object"&&Object.keys(p).includes("flag")?p.flag:"",image:p.image,label:p.label,disabled:p.disabled,onSelect:this.onSelect},null)),r=()=>{let p={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Fv,ta(p,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let p;return t(Oo,{search:this.$props.searchInMenu,onSearch:this.onInput},Mv(p=o())?p:{default:()=>[p]})};return wi(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:p=>this.inputRef=p,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:p=>this.onInput(p)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[wn("clickoutside"),this.closeMenu]])}}),No=z({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:o}=He("useDropdown");return{computedClass:H(()=>ee(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Rt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(ne,this.image,null),this.label&&t(N,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),Oo=z({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:o}=He("useDropdown"),r=G(null),d=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return ee("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,f()))});ht(()=>o.visible,f=>{if(!f||!r.value)return;let s=r.value.parentElement;const{top:u,height:g}=s==null?void 0:s.getBoundingClientRect(),m=u-p.value.length*37,h=document.documentElement.clientHeight-u-g-p.value.length*37;o.direction=m>h?"up":"down"});const p=H(()=>{var f;let s=[],u=(f=l.default)==null?void 0:f.call(l);return u&&u.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:d,onSearchInput:f=>a("search",f)}},render(){var e,a,l,o;const r=()=>t(Ce,null,[t("div",{class:"ui left icon input",onClick:Rt(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Vv={install(e){e.component(ic.name,ic),e.component(No.name,No),e.component(Oo.name,Oo)}},ac=z({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),l=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>ee("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:l,computedClass:r}},render(){let e=[J("i",{class:"video play icon"}),J("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(J("div",{class:"embed"},J("iframe",{src:this.getSrc()}))),J("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),Hv={install(e){e.component(ac.name,ac)}};function Nv(e){return is()?(Ic(e),!0):!1}function Vm(e){return typeof e=="function"?e():c(e)}const Hm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ov=Object.prototype.toString,jv=e=>Ov.call(e)==="[object Object]",Fl=()=>{},Gv=qv();function qv(){var e,a;return Hm&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Na(e){var a;const l=Vm(e);return(a=l==null?void 0:l.$el)!=null?a:l}const Nm=Hm?window:void 0;function Xn(...e){let a,l,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,r]=e,a=Nm):[a,l,o,r]=e,!a)return Fl;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const d=[],p=()=>{d.forEach(g=>g()),d.length=0},f=(g,m,h,v)=>(g.addEventListener(m,h,v),()=>g.removeEventListener(m,h,v)),s=ht(()=>[Na(a),Vm(r)],([g,m])=>{if(p(),!g)return;const h=jv(m)?{...m}:m;d.push(...l.flatMap(v=>o.map(b=>f(g,v,b,h))))},{immediate:!0,flush:"post"}),u=()=>{s(),p()};return Nv(u),u}let lc=!1;function Uv(e,a,l={}){const{window:o=Nm,ignore:r=[],capture:d=!0,detectIframe:p=!1}=l;if(!o)return Fl;Gv&&!lc&&(lc=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Fl)),o.document.documentElement.addEventListener("click",Fl));let f=!0;const s=g=>r.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Na(m);return h&&(g.target===h||g.composedPath().includes(h))}}),u=[Xn(o,"click",g=>{const m=Na(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(f=!s(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:d}),Xn(o,"pointerdown",g=>{const m=Na(e);f=!s(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),p&&Xn(o,"blur",g=>{setTimeout(()=>{var m;const h=Na(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>u.forEach(g=>g())}function Om(e,a="scale"){const l=G(e.modelValue?"open":"closed");return ht(()=>e.modelValue,o=>{l.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const Yv=z({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:o}=Om(e,"fade"),r=H(()=>ee("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),d=H(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),p=H(()=>ee("dimmable","dimmed",A(e.blurring,"blurring")));return ht(()=>e.modelValue,f=>{if(f){document.body.classList.add(...p.value.split(" "));return}document.body.classList.remove(...p.value.split(" "))}),{className:r,style:d,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nn=z({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=G(),{animationClasses:o,isClosed:r}=Om(e),d=H(()=>ee("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),p=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return Uv(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:p,close:f,modalRef:l}},render(){return t($n,{to:"body"},{default:()=>[t(Yv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),on=z({name:"SuiModalActions",render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),sn=z({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>ee(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jo=z({name:"SuiModalDescription",render(){var e,a;return J("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rn=z({name:"SuiModalHeader",render(){var e,a;return J("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Jv={install(e){e.component(nn.name,nn),e.component(on.name,on),e.component(sn.name,sn),e.component(jo.name,jo),e.component(rn.name,rn)}},Wv=e=>{const a=G(!1),l=po(e,"position"),o=G(null),r=po(e,"trigger"),d=()=>{a.value=!0,La(()=>f())},p=()=>{a.value=!1},f=()=>{if(!o.value||!r.value)return;let s=0,u=0;const g=o.value,m=r.value.$el;g.style.transform=`translate(${s}px, ${u}px)`;const{top:h,left:v,width:b,height:C}=m.getBoundingClientRect(),k=g.getBoundingClientRect(),{pageXOffset:T,pageYOffset:_}=window;if(l.value.includes("top")?(s=T+v,u=_+h-g.offsetTop-g.offsetHeight):(s=v,u=h+C-k.top),l.value.includes("right")){const w=b-k.width;s=v+w}if(l.value.includes("center")){const w=b/2-k.width/2;s=v+w}l.value==="right center"&&(s=v+b,u=h+C/2-k.top-k.height/2),l.value==="left center"&&(s=v-k.width,u=h+C/2-k.top-k.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${u}px)`};return{show:a,showPopup:d,hidePopup:p,placement:l,popupRef:o,triggerRef:r}},nc=z({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:o,hidePopup:r,popupRef:d,triggerRef:p}=Wv(e);_s(()=>{var h,v,b;(h=p.value)!=null&&h.$el&&((v=p.value)==null||v.$el.addEventListener("mouseenter",o),(b=p.value)==null||b.$el.addEventListener("mouseleave",r))});const f=G(l.value?"open":"close");H(()=>f.value!=="closed"),ht(()=>l.value,h=>{f.value=h?"opening":"closing"});const s=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>f.value=l.value?"open":"closed";Bi(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",u,!0)}),ea(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},m=H(()=>ee("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),Pe(e.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>t($n,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:m.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),Kv={install(e){e.component(nc.name,nc)}},Xv=["top","bottom","left"],Es=()=>({attached:{type:String,validator:e=>Xv.includes(e)}}),jm=e=>({attachedClasses:H(()=>ee(e.attached,{attached:e.attached}))}),Qv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Gm=()=>({color:{type:String,validator:e=>Qv.includes(e)}}),qm=e=>({colorClasses:H(()=>ee(e.inverted&&"inverted",e.color))}),un=z({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...Es(),...Gm()},setup(e){const{attachedClasses:a}=jm(e),{colorClasses:l}=qm(e),o=H(()=>ee("ui",l.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=H(()=>ee(Pe(e.progress,"progress"))),d=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),Zv={install(e){e.component(un.name,un)}},e1=z({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(e){const a=He("rating",G(0)),l=He("updateRating"),o=He("selectedIndex",G(0)),r=He("updateSelectedIndex"),d=He("clearable",!1),p=He("disabled",!1),f=()=>{if(!p){if(d&&e.index===a.value){l(0),r(0);return}l(e.index)}},s=()=>{p||r(e.index)},u=H(()=>e.index<=a.value),g=H(()=>e.index<=o.value),m=H(()=>ee(e.icon,A(u.value,"active"),A(g.value,"selected"),"icon"));return()=>t("i",{class:m.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),oc=z({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=G(e.modelValue||e.defaultRating),o=G(!1),r=G(0),d=g=>{l.value=g,a("update:modelValue",g),a("change",g)},p=g=>r.value=g,f=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,p(0))},u=H(()=>ee("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return dt("rating",l),dt("updateRating",d),dt("selectedIndex",r),dt("updateSelectedIndex",p),dt("clearable",e.clearable),dt("disabled",e.disabled),()=>t("div",{class:u.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((g,m)=>t(e1,{icon:e.icon,index:m+1},null))])}}),t1={install(e){e.component(oc.name,oc)}},sc=z({name:"SuiSearch",props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),i1={install(e){e.component(sc.name,sc)}},rc=z({name:"SuiSidebar",directives:{clickoutside:Rs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=oi({animating:!1}),o=H(()=>{const r=e.direction==="right"||e.direction==="left";return ee("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(l.animating,"animating"),A(r,"vertical"),Pe(e.icon,"icon"),"menu")});return ht(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const d=r.path||r.composedPath&&r.composedPath();d&&d.find(p=>p.classList&&p.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return wi(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[wn("clickoutside"),this.onClickPusher]])}}),a1={install:e=>{e.component(rc.name,rc)}};class Qn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const uc=z({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=H(()=>ee("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),Pe(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let q=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(q-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(q-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(q-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(q-e.min)/(e.max-e.min)*100}%`}}),p=H(()=>{let q=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let q=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(q-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((q,K)=>K*e.step+e.min)),u=()=>{var q,K;let de=1,ie=g(),De=(e.vertical?(q=h.value)==null?void 0:q.clientHeight:(K=h.value)==null?void 0:K.clientWidth)||0,We=1;if(De>0)for(;De/ie*We<100;)ie%We||(de=We),We+=1;return de},g=()=>Math.round((e.max-e.min)/e.step),m=G(null),h=G(null),v=G(0),b=G(0),C=G(0),k=G(0),T=()=>{if(!m.value)return;let q=m.value.getBoundingClientRect();v.value=q.left+Qn.getWindowScrollLeft(),b.value=q.top+Qn.getWindowScrollTop(),C.value=m.value.offsetWidth,k.value=m.value.offsetHeight},_=G(0),w=q=>{let{pageX:K,pageY:de}=q.touches?q.touches[0]:q,ie,De;e.vertical?ie=(b.value+k.value-de)*100/k.value:ie=(K-v.value)*100/C.value,De=(e.max-e.min)*(ie/100)+e.min;const We=e.range?e.modelValue[_.value]:e.modelValue||0;De=We+Math.round(De/e.step-We/e.step)*e.step,e.reversed&&(De=e.max-De+e.min),e.vertical&&(De=e.max-De+e.min),x(De)},x=q=>{let K=q,de;if(e.range)if(de=e.modelValue?[...e.modelValue]:[],_.value===0){let ie=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ie&&(K=ie),de[0]=K,de[1]=de[1]||e.max}else{let ie=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ie&&(K=ie),de[0]=de[0]||e.min,de[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),de=K;a("update:modelValue",de),a("change",de)},B=G(!1),I=q=>B.value=q,M=(q,K=0)=>{I(!0),T(),_.value=K,q.preventDefault()},V=q=>{B.value&&(I(!1),document.removeEventListener("mousemove",P),a("slideend",{event:q,value:e.modelValue}))},P=q=>{B.value&&(w(q),q==null||q.preventDefault())},j=(q,K=0)=>{e.disabled||(M(q,K),document.addEventListener("mousemove",P),document.addEventListener("mouseup",V),q.preventDefault())},X=(q,K=0)=>{switch(_.value=K,q.code){case"ArrowUp":e.vertical&&(e.reversed?U():pe()),q.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?pe():U()),q.preventDefault();break;case"ArrowRight":e.reversed?pe():U(),q.preventDefault();break;case"ArrowLeft":e.reversed?U():pe(),q.preventDefault();break}},U=()=>{let q=0;e.range?q=e.modelValue[_.value]+e.step:q=e.modelValue+e.step,x(q)},pe=()=>{let q=0;e.range?q=e.modelValue[_.value]-e.step:q=e.modelValue-e.step,x(q)},$e=q=>{if(!e.disabled&&!Qn.hasClass(q.target,"thumb")){if(e.range){let K=(e.vertical?q.offsetY/q.target.clientHeight:q.offsetX/q.target.clientWidth)*100,de=(o()+r())/2;K<de?_.value=e.reversed?1:0:_.value=e.reversed?0:1}T(),w(q)}};return()=>t("div",{ref:q=>m.value=q,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:$e},[t("div",{class:"track",ref:q=>h.value=q},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:p.value,onMousedown:q=>j(q),onTouchstart:q=>M(q),onTouchmove:q=>P(q),onTouchend:q=>V(q),onKeydown:q=>X(q),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:q=>j(q,1),onTouchstart:q=>M(q,1),onTouchmove:q=>P(q),onTouchend:q=>V(q),onKeydown:q=>X(q,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((q,K)=>{let de=K/g();return K%u()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${de} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:s.value[g()-K]:e.labels?e.labels[K]:s.value[K]])})])])}}),l1={install(e){e.component(uc.name,uc)}},Go=z({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>ee("ui tab segment",A(e.active,"active"),Pe(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),cc=z({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const o=G(e.activeIndex);ht(()=>e.activeIndex,u=>{o.value=u});const r=(u,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:u,index:g})),a("tab-click",{event:u,index:g})},d=(u,g)=>{u.key==="Enter"&&r(u,g)},p=H(()=>{var u,g;let m=[];return(u=l.default)!=null&&u.call(l)&&((g=l.default)==null||g.call(l).forEach(h=>{h.type.name==="SuiTabPanel"&&m.push(h)})),m}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),s=H(()=>ee("ui menu",A(f.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:d,tabIndex:o,tabs:p,tabMenuClass:s,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((l,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,o)=>t(Go,ta(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,d;return[(d=(r=l.children).default)==null?void 0:d.call(r)]}}));return t(Ce,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),n1={install(e){e.component(cc.name,cc),e.component(Go.name,Go)}};function o1(e,a){e.indexOf(a)===-1&&e.push(a)}const Um=(e,a,l)=>Math.min(Math.max(l,e),a),Mt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},cn=e=>typeof e=="number",fa=e=>Array.isArray(e)&&!cn(e[0]),s1=(e,a,l)=>{const o=a-e;return((l-e)%o+o)%o+e};function r1(e,a){return fa(e)?e[s1(0,e.length,a)]:e}const Ym=(e,a,l)=>-l*e+l*a+e,Jm=()=>{},Ai=e=>e,zs=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Wm(e,a){const l=e[e.length-1];for(let o=1;o<=a;o++){const r=zs(0,a,o);e.push(Ym(l,1,r))}}function u1(e){const a=[0];return Wm(a,e-1),a}function c1(e,a=u1(e.length),l=Ai){const o=e.length,r=o-a.length;return r>0&&Wm(a,r),d=>{let p=0;for(;p<o-2&&!(d<a[p+1]);p++);let f=Um(0,1,zs(a[p],a[p+1],d));return f=r1(l,p)(f),Ym(e[p],e[p+1],f)}}const Km=e=>Array.isArray(e)&&cn(e[0]),qo=e=>typeof e=="object"&&!!e.createAnimation,$a=e=>typeof e=="function",d1=e=>typeof e=="string",Qa={ms:e=>e*1e3,s:e=>e/1e3},Xm=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,m1=1e-7,p1=12;function f1(e,a,l,o,r){let d,p,f=0;do p=a+(l-a)/2,d=Xm(p,o,r)-e,d>0?l=p:a=p;while(Math.abs(d)>m1&&++f<p1);return p}function Oa(e,a,l,o){if(e===a&&l===o)return Ai;const r=d=>f1(d,0,1,e,l);return d=>d===0||d===1?d:Xm(r(d),a,o)}const g1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const o=l*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Um(0,1,r/e)},dc={ease:Oa(.25,.1,.25,1),"ease-in":Oa(.42,0,1,1),"ease-in-out":Oa(.42,0,.58,1),"ease-out":Oa(0,0,.58,1)},h1=/\((.*?)\)/;function mc(e){if($a(e))return e;if(Km(e))return Oa(...e);if(dc[e])return dc[e];if(e.startsWith("steps")){const a=h1.exec(e);if(a){const l=a[1].split(",");return g1(parseFloat(l[0]),l[1].trim())}}return Ai}class Qm{constructor(a,l=[0,1],{easing:o,duration:r=Mt.duration,delay:d=Mt.delay,endDelay:p=Mt.endDelay,repeat:f=Mt.repeat,offset:s,direction:u="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=Ai,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),o=o||Mt.easing,qo(o)){const h=o.createAnimation(l);o=h.easing,l=h.keyframes||l,r=h.duration||r}this.repeat=f,this.easing=fa(o)?Ai:mc(o),this.updateDuration(r);const m=c1(l,s,fa(o)?o.map(mc):Ai);this.tick=h=>{var v;d=d;let b=0;this.pauseTime!==void 0?b=this.pauseTime:b=(h-this.startTime)*this.rate,this.t=b,b/=1e3,b=Math.max(b-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(b=this.totalDuration);const C=b/this.duration;let k=Math.floor(C),T=C%1;!T&&C>=1&&(T=1),T===1&&k--;const _=k%2;(u==="reverse"||u==="alternate"&&_||u==="alternate-reverse"&&!_)&&(T=1-T);const w=b>=this.totalDuration?1:Math.min(T,1),x=m(this.easing(w));a(x),this.pauseTime===void 0&&(this.playState==="finished"||b>=this.totalDuration+p)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class _1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const Zn=new WeakMap;function Zm(e){return Zn.has(e)||Zn.set(e,{transforms:[],values:new Map}),Zn.get(e)}function b1(e,a){return e.has(a)||e.set(a,new _1),e.get(a)}const v1=["","X","Y","Z"],y1=["translate","scale","rotate","skew"],dn={x:"translateX",y:"translateY",z:"translateZ"},pc={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},S1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:pc,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:Ai},skew:pc},cl=new Map,Fs=e=>`--motion-${e}`,mn=["x","y","z"];y1.forEach(e=>{v1.forEach(a=>{mn.push(e+a),cl.set(Fs(e+a),S1[e])})});const w1=(e,a)=>mn.indexOf(e)-mn.indexOf(a),C1=new Set(mn),ep=e=>C1.has(e),A1=(e,a)=>{dn[a]&&(a=dn[a]);const{transforms:l}=Zm(e);o1(l,a),e.style.transform=k1(l)},k1=e=>e.sort(w1).reduce(x1,"").trim(),x1=(e,a)=>`${e} ${a}(var(${Fs(a)}))`,Uo=e=>e.startsWith("--"),fc=new Set;function $1(e){if(!fc.has(e)){fc.add(e);try{const{syntax:a,initialValue:l}=cl.has(e)?cl.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const eo=(e,a)=>document.createElement("div").animate(e,a),gc={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{eo({opacity:[1]})}catch{return!1}return!0},finished:()=>!!eo({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{eo({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},to={},sa={};for(const e in gc)sa[e]=()=>(to[e]===void 0&&(to[e]=gc[e]()),to[e]);const B1=.015,T1=(e,a)=>{let l="";const o=Math.round(a/B1);for(let r=0;r<o;r++)l+=e(zs(0,o-1,r))+", ";return l.substring(0,l.length-2)},hc=(e,a)=>$a(e)?sa.linearEasing()?`linear(${T1(e,a)})`:Mt.easing:Km(e)?L1(e):e,L1=([e,a,l,o])=>`cubic-bezier(${e}, ${a}, ${l}, ${o})`;function D1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const I1=e=>Array.isArray(e)?e:[e];function Yo(e){return dn[e]&&(e=dn[e]),ep(e)?Fs(e):e}const Tl={get:(e,a)=>{a=Yo(a);let l=Uo(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const o=cl.get(a);o&&(l=o.initialValue)}return l},set:(e,a,l)=>{a=Yo(a),Uo(a)?e.style.setProperty(a,l):e.style[a]=l}};function tp(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function R1(e,a){var l;let o=(a==null?void 0:a.toDefaultUnit)||Ai;const r=e[e.length-1];if(d1(r)){const d=((l=r.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";d&&(o=p=>p+d)}return o}function E1(){return window.__MOTION_DEV_TOOLS_RECORD}function z1(e,a,l,o={},r){const d=E1(),p=o.record!==!1&&d;let f,{duration:s=Mt.duration,delay:u=Mt.delay,endDelay:g=Mt.endDelay,repeat:m=Mt.repeat,easing:h=Mt.easing,persist:v=!1,direction:b,offset:C,allowWebkitAcceleration:k=!1,autoplay:T=!0}=o;const _=Zm(e),w=ep(a);let x=sa.waapi();w&&A1(e,a);const B=Yo(a),I=b1(_.values,B),M=cl.get(B);return tp(I.animation,!(qo(h)&&I.generator)&&o.record!==!1),()=>{const V=()=>{var X,U;return(U=(X=Tl.get(e,B))!==null&&X!==void 0?X:M==null?void 0:M.initialValue)!==null&&U!==void 0?U:0};let P=D1(I1(l),V);const j=R1(P,M);if(qo(h)){const X=h.createAnimation(P,a!=="opacity",V,B,I);h=X.easing,P=X.keyframes||P,s=X.duration||s}if(Uo(B)&&(sa.cssRegisterProperty()?$1(B):x=!1),w&&!sa.linearEasing()&&($a(h)||fa(h)&&h.some($a))&&(x=!1),x){M&&(P=P.map(pe=>cn(pe)?M.toDefaultUnit(pe):pe)),P.length===1&&(!sa.partialKeyframes()||p)&&P.unshift(V());const X={delay:Qa.ms(u),duration:Qa.ms(s),endDelay:Qa.ms(g),easing:fa(h)?void 0:hc(h,s),direction:b,iterations:m+1,fill:"both"};f=e.animate({[B]:P,offset:C,easing:fa(h)?h.map(pe=>hc(pe,s)):void 0},X),f.finished||(f.finished=new Promise((pe,$e)=>{f.onfinish=pe,f.oncancel=$e}));const U=P[P.length-1];f.finished.then(()=>{v||(Tl.set(e,B,U),f.cancel())}).catch(Jm),k||(f.playbackRate=1.000001)}else if(r&&w)P=P.map(X=>typeof X=="string"?parseFloat(X):X),P.length===1&&P.unshift(parseFloat(V())),f=new r(X=>{Tl.set(e,B,j?j(X):X)},P,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const X=P[P.length-1];Tl.set(e,B,M&&cn(X)?M.toDefaultUnit(X):X)}return p&&d(e,a,P,{duration:s,delay:u,easing:h,repeat:m,offset:C},"motion-one"),I.setAnimation(f),f&&!T&&f.pause(),f}}const F1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function P1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const M1=e=>e(),ip=(e,a,l=Mt.duration)=>new Proxy({animations:e.map(M1).filter(Boolean),duration:l,options:a},H1),V1=e=>e.animations[0],H1={get:(e,a)=>{const l=V1(e);switch(a){case"duration":return e.duration;case"currentTime":return Qa.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(N1)).catch(Jm)),e.finished;case"stop":return()=>{e.animations.forEach(o=>tp(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Qa.ms(l);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=l;return!0}return!1}},N1=e=>e.finished;function O1(e,a,l){return $a(e)?e(a,l):e}function j1(e){return function(a,l,o={}){a=P1(a);const r=a.length,d=[];for(let p=0;p<r;p++){const f=a[p];for(const s in l){const u=F1(o,s);u.delay=O1(u.delay,p,r);const g=z1(f,s,l[s],u,e);d.push(g)}}return ip(d,o,o.duration)}}const G1=j1(Qm);function q1(e,a={}){return ip([()=>{const l=new Qm(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function U1(e,a,l){return($a(e)?q1:G1)(e,a,l)}const be=(e,a)=>(l,{duration:o,keyframesOverride:r={}})=>U1(l,{...e,...r},{autoplay:!1,...a,duration:o}),_c=be({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),Y1=be({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),J1=be({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),W1=be({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),K1=be({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),X1=be({opacity:[0,1]},{duration:.5,offset:[0,1]}),Q1=be({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Z1=be({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),ey=be({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),ty=be({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),iy=be({opacity:[1,0]},{duration:.5,offset:[0,1]}),ay=be({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),ly=be({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),ny=be({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),oy=be({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),sy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),ry=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),uy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),cy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dy=be({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),my=be({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),py=be({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),fy=be({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),gy=be({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),hy=be({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),_y=be({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),by=be({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),vy=be({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),yy=be({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),Sy=be({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),wy=be({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),ap={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},lp={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},np={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},Cy={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},Ay=be({transformOrigin:"top center",...ap},{offset:[0,1]}),ky=be({transformOrigin:"bottom center",...ap},{offset:[0,1]}),xy=be({transformOrigin:"center right",...lp},{offset:[0,1]}),$y=be({transformOrigin:"center left",...lp},{offset:[0,1]}),By=be({transformOrigin:"top center",...np},{offset:[0,1]}),Ty=be({transformOrigin:"bottom center",...np},{offset:[0,1]}),bc=be({transformOrigin:"center left",...Cy},{offset:[0,1]}),Li=.8,ga={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ha={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},_a={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},ba={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ly=be({transformOrigin:"top center",transform:ga.transform,opacity:ga.opacity},{duration:Li,offset:ga.offset}),Dy=be({transformOrigin:"bottom center",transform:ga.transform,opacity:ga.opacity},{duration:Li,offset:ga.offset}),Iy=be({transformOrigin:"center right",transform:ha.transform,opacity:ha.opacity},{duration:Li,offset:ha.offset}),Ry=be({transformOrigin:"center left",transform:ha.transform,opacity:ha.opacity},{duration:Li,offset:ha.offset}),Ey=be({transformOrigin:"top center",transform:_a.transform,opacity:_a.opacity},{duration:Li,offset:_a.offset}),zy=be({transformOrigin:"bottom center",transform:_a.transform,opacity:_a.opacity},{duration:Li,offset:_a.offset}),Fy=be({transformOrigin:"center right",transform:ba.transform,opacity:ba.opacity},{duration:Li,offset:ba.offset}),Py=be({transformOrigin:"center left",transform:ba.transform,opacity:ba.opacity},{duration:Li,offset:ba.offset}),My=be({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),Vy=be({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),Hy=be({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),Ny=be({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),Oy=be({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),jy=be({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Gy=be({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),qy=be({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),Uy=be({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Yy={browse:[_c,Y1],"browse right":[_c,J1],drop:[W1,K1],fade:[X1,iy],"fade up":[Q1,ay],"fade down":[Z1,ly],"fade left":[ey,ny],"fade right":[ty,oy],fly:[sy,my],"fly up":[ry,py],"fly down":[uy,fy],"fly left":[cy,gy],"fly right":[dy,hy],"horizontal flip":[_y,by],"vertical flip":[vy,yy],scale:[Sy,wy],"slide up":[ky,Ty],"slide down":[Ay,By],"slide left":[xy,bc],"slide right":[$y,bc],"swing up":[Dy,zy],"swing down":[Ly,Ey],"swing left":[Iy,Fy],"swing right":[Ry,Py],zoom:[My,Vy]},Jy={bounce:[Hy,void 0],flash:[Ny,void 0],glow:[Oy,void 0],jiggle:[jy,void 0],pulse:[Gy,void 0],shake:[qy,void 0],tada:[Uy,void 0]},op=e=>({...Yy,...Jy})[e],Wy=e=>{const[a,l]=op(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(p,f)=>{if(!a)return f();const s=a(p,{duration:o.value});s.play(),s.finished.then(f)}),d=H(()=>(p,f)=>{if(!l)return f();const s=l(p,{duration:o.value});s.play(),s.finished.then(f)});return{onEnter:r,onLeave:d}},vc=z({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=Wy(e);return{onEnter:a,onLeave:l}},render(){return t(Ln,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Jo=z({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=op(e.animation),o=H(()=>(d,p)=>{if(!a)return p();const f=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});f.play(),f.finished.then(p)}),r=H(()=>(d,p)=>{if(!l)return p();const f=l(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});f.play(),f.finished.then(p)});return{onEnter:o,onLeave:r}},render(){return t(sm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Ky={install(e){e.component(vc.name,vc),e.component(Jo.name,Jo)}},Xy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:_v,Calendar:Iv,Checkbox:Rv,Dimmer:Ev,Dropdown:Vv,Embed:Hv,Modal:Jv,Popup:Kv,Progress:Zv,Rating:t1,Search:i1,Sidebar:a1,Slider:l1,Tab:n1,Transition:Ky},Symbol.toStringTag,{value:"Module"})),io=z({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...Es()},setup(e,{slots:a}){const l=H(()=>ee("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(pt,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}}}),Qy=z({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=H(()=>ee("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function ao(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ht(e)}const Zy=z({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Gm()},setup(e,{emit:a}){const{colorClasses:l}=qm(e),o=H(()=>{var p,f,s,u,g;return ee(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((p=e.actionsProps)!=null&&p.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((u=e.actionsProps)==null?void 0:u.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=G(e.showProgressUp?0:100),d=()=>{const p=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(f),r.value+=1;return}r.value<=0&&clearInterval(f),r.value-=1},p)},500)};return Bi(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,l,o;return t(Qy,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,d,p,f;return[this.showProgress==="top"&&t(un,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(io,this.actionsProps,ao(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((p=this.actionsProps)!=null&&p.attached)&&t(io,this.actionsProps,ao(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(io,this.actionsProps,ao(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(un,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),eS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],tS=({defaultValue:e}={})=>({position:{type:String,validator:a=>eS.includes(a),default:e}}),iS=e=>({positionClasses:H(()=>e.position||"")});function aS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ht(e)}const lS=z({name:"SuiToastContainer",props:{horizontal:Boolean,...Es(),...tS({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=sp(),{attachedClasses:o}=jm(e),{positionClasses:r}=iS(e);return{classes:H(()=>ee(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[0,`${d.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:p,marginBottom:f}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[`${d.offsetWidth}px`,0],f=[`${d.offsetHeight}px`,0],s=e.horizontal?{width:p}:{height:f},u=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...s,marginBottom:u}}}},render(){let e;return t($n,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Jo,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},aS(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(Zy,ta({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),nS=G(1),Ma=G([]),sp=()=>({items:Ma,add:e=>{e.position=e.position||"top right",Ma.value=[...Ma.value,{id:nS.value++,...e}]},remove:e=>{Ma.value=Ma.value.filter(a=>a.id!==e)}}),ut=()=>{var e;const a=(e=Xt())==null?void 0:e.appContext,{add:l}=sp();return{toast:o=>{const{position:r,attached:d,horizontal:p}=o;rS({position:r,attached:d,horizontal:p})||sS(a,{position:r,attached:d,horizontal:p}),l(o)}}},oS=(e,{appContext:a,element:l}={})=>{const o=l||document.createElement("div");return a&&(e.appContext=a),Jl(e,o),{vNode:e,el:o}},sS=(e,{position:a="top right",attached:l,horizontal:o=!1}={})=>{const r=J(lS,{position:a,attached:l,horizontal:o}),{el:d}=oS(r,{appContext:e});return{vNode:r,el:d}},rS=({position:e="top right",attached:a,horizontal:l})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function uS(e){Object.values({...tv,...uv,...hv,...Xy}).map(a=>e.use(a))}const cS={install:uS},dS=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=Lm(),l=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const p=r.target.parentElement.getAttribute("href"),f=p.slice(p.indexOf("#")+1),s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth"})};return(r,d)=>{const p=S("SuiHeader"),f=S("SuiGridColumn"),s=S("SuiGridRow");return $(),he(Ce,null,[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Be(e.label)+" ",1),t(c(Is),{to:`${l.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(c(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(c(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),y("p",null,[Gi(r.$slots,"default",{},void 0,!0)])],64)}}}),mS=Le(dS,[["__scopeId","data-v-a2b78897"]]),pS={class:"inner"},fS={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const o=S("SuiGridColumn"),r=S("SuiGridRow");return $(),D(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[Gi(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[y("div",pS,[wi(($(),he("pre",null,[y("code",null,Be(e.code)+`
`,1)])),[[c(zl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},gS=Le(fS,[["__scopeId","data-v-965e7ddc"]]),R={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),l=()=>a.value=!a.value;return(o,r)=>{const d=S("SuiGrid");return $(),he("section",null,[t(d,{columns:2},{default:i(()=>[t(mS,ta({label:e.label,"on-click":l},o.$attrs),{default:i(()=>[Gi(o.$slots,"description")]),_:3},16,["label"]),t(gS,{code:e.code,"hide-code":a.value},{default:i(()=>[Gi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},hS=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,_S={__name:"ButtonDoc",setup(e){const a=G("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>($(),D(R,{label:"Button",code:hS},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(c(F),{onClick:l},{default:i(()=>[n(Be(a.value),1)]),_:1})]),_:1}))}},bS=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,vS={__name:"EmphasisDoc",setup(e){return(a,l)=>($(),D(R,{label:"Emphasis",code:bS},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(c(F),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(c(F),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(c(F),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},yS=`<template>
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
</template>`,SS={__name:"AnimatedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Animated",code:yS},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(c(F),{animated:""},{default:i(()=>[t(c(vi),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(c(vi),{hidden:""},{default:i(()=>[t(c(W),{name:"arrow right"})]),_:1})]),_:1}),t(c(F),{animated:"vertical"},{default:i(()=>[t(c(vi),{visible:""},{default:i(()=>[t(c(W),{name:"shop"})]),_:1}),t(c(vi),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(c(F),{animated:"fade"},{default:i(()=>[t(c(vi),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(c(vi),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},wS=`<template>
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
</template>`,CS={__name:"LabeledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Labeled",code:wS},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(c(F),{labeled:"right",as:"div"},{default:i(()=>[t(c(F),{icon:"heart",content:" Like"}),t(c(N),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(c(F),{labeled:"left",as:"div"},{default:i(()=>[t(c(N),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(c(F),{icon:"heart",content:" Like"})]),_:1}),t(c(F),{labeled:"left",as:"div"},{default:i(()=>[t(c(N),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(c(F),{icon:"fork"})]),_:1})]),_:1}))}},AS=`<template>
  <SuiButton icon="cloud" />
</template>`,kS={__name:"IconDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon",code:AS},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(c(F),{icon:"cloud"})]),_:1}))}},xS=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,$S={__name:"LabeledIconDoc",setup(e){return(a,l)=>($(),D(R,{label:"Labeled Icon",code:xS},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(c(F),{labeled:"",icon:"pause",content:"Pause"}),t(c(F),{labeled:"right",icon:"right arrow",content:"Next"}),t(c(F),{labeled:"",icon:""},{default:i(()=>[t(c(W),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},BS=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,TS={__name:"BasicDoc",setup(e){return(a,l)=>($(),D(R,{label:"Basic",code:BS},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(c(F),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(F),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(F),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(c(F),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},LS=`<template>
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
</template>`,DS={__name:"TertiaryDoc",setup(e){return(a,l)=>($(),D(R,{label:"Tertiary",code:LS},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(c(F),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(F),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(F),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(F),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(F),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(F),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(F),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(F),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(F),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(F),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(F),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(F),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(F),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(F),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c(F),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},IS=`<template>
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
</template>`,RS={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:IS},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(c(Te),{inverted:""},{default:i(()=>[t(c(F),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(F),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(F),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(F),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(F),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(F),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(F),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(F),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(F),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(F),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(F),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(F),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(F),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(F),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c(F),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},ES=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,zS={__name:"ButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Buttons",code:ES},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(c(pt),null,{default:i(()=>[t(c(F),{content:"One"}),t(c(F),{content:"Two"}),t(c(F),{content:"Three"})]),_:1})]),_:1}))}},FS=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,PS={__name:"IconButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon Buttons",code:FS},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(c(pt),{icon:""},{default:i(()=>[t(c(F),{icon:"align left"}),t(c(F),{icon:"align center"}),t(c(F),{icon:"align right"}),t(c(F),{icon:"align justify"})]),_:1})]),_:1}))}},MS=y("div",{class:"or"},null,-1),VS=y("div",{class:"or","data-text":"ou"},null,-1),HS=`<template>
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
</template>`,NS={__name:"ConditionalsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Conditionals",code:HS},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(c(pt),null,{default:i(()=>[t(c(F),{content:"Cancel"}),MS,t(c(F),{content:"Save",positive:""})]),_:1}),t(c(pt),null,{default:i(()=>[t(c(F),{content:"un"}),VS,t(c(F),{content:"deux",positive:""})]),_:1})]),_:1}))}},OS=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,jS={__name:"ActiveDoc",setup(e){return(a,l)=>($(),D(R,{label:"Active",code:OS},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(c(F),{active:"",icon:"user",content:" Follow"})]),_:1}))}},GS=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,qS={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:GS},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(c(F),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},US=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,YS={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Loading",code:US},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(c(F),{loading:"",content:"Loading"}),t(c(F),{loading:"double",primary:"",content:"Loading"}),t(c(F),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},JS=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,WS={__name:"SocialDoc",setup(e){return(a,l)=>($(),D(R,{label:"Social",code:JS},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(c(F),{facebook:"",icon:"facebook",content:" Facebook"}),t(c(F),{twitter:"",icon:"twitter",content:" Twitter"}),t(c(F),{vk:"",icon:"vk",content:"VK"}),t(c(F),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(c(F),{instagram:"",icon:"instagram",content:" Instagram"}),t(c(F),{youtube:"",icon:"youtube",content:" YouTube"}),t(c(F),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(c(F),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},KS=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,XS={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:KS},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(c(F),{size:"mini",content:"Mini"}),t(c(F),{size:"tiny",content:"Tiny"}),t(c(F),{size:"small",content:"Small"}),t(c(F),{size:"medium",content:"Medium"}),t(c(F),{size:"large",content:"Large"}),t(c(F),{size:"big",content:"Big"}),t(c(F),{size:"huge",content:"Huge"}),t(c(F),{size:"massive",content:"Massive"})]),_:1}))}},QS=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,ZS={__name:"FloatedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Floated",code:QS},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(c(F),{floated:"left",content:"Left Floated"}),t(c(F),{floated:"right",content:"Right Floated"})]),_:1}))}},ew=`<template>
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
</template>`,tw={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colored",code:ew},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(c(F),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(F),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(F),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(F),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(F),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(F),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(F),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(F),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(F),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(F),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(F),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(F),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c(F),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},iw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,aw={__name:"CompactDoc",setup(e){return(a,l)=>($(),D(R,{label:"Compact",code:iw},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(c(F),{compact:"",content:"Hold"}),t(c(F),{compact:"",icon:"pause"}),t(c(F),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},lw=`<template>
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
<\/script>`,nw={__name:"ToggleDoc",setup(e){const a=G(!1);return(l,o)=>($(),D(R,{label:"Toggle",code:lw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(c(F),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ow=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,sw={__name:"PositiveDoc",setup(e){return(a,l)=>($(),D(R,{label:"Positive",code:ow},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(c(F),{positive:"",content:"Positive Button"})]),_:1}))}},rw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,uw={__name:"NegativeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Negative",code:rw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(c(F),{negative:"",content:"Negative Button"})]),_:1}))}},cw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,dw={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fluid",code:cw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(c(F),{fluid:"",content:"Fits container"})]),_:1}))}},mw=`<template>
  <SuiButton circular icon="settings" />
</template>`,pw={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(R,{label:"Circular",code:mw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(c(F),{circular:"",icon:"settings"})]),_:1}))}},fw=y("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),gw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,hw={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Vertically Attached",code:gw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(c(F),{attached:"top",content:"Top"}),t(c(Te),{attached:""},{default:i(()=>[fw]),_:1}),t(c(F),{attached:"bottom",content:"Bottom"})]),_:1}))}},_w=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,bw={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Horizontally Attached",code:_w},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(c(F),{attached:"left",content:"Left"}),t(c(F),{attached:"right",content:"Right"})]),_:1}))}},vw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Vertical Buttons",code:vw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(c(pt),{vertical:""},{default:i(()=>[t(c(F),null,{default:i(()=>[n("Feed")]),_:1}),t(c(F),null,{default:i(()=>[n("Messages")]),_:1}),t(c(F),null,{default:i(()=>[n("Events")]),_:1}),t(c(F),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,ww={__name:"StackableButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Stackable Buttons",code:Sw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(c(pt),{stackable:""},{default:i(()=>[t(c(F),null,{default:i(()=>[n("Feed")]),_:1}),t(c(F),null,{default:i(()=>[n("Messages")]),_:1}),t(c(F),null,{default:i(()=>[n("Events")]),_:1}),t(c(F),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,Aw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon Buttons",code:Cw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(c(pt),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(c(F),{icon:"pause",content:"Pause"}),t(c(F),{icon:"play",content:"Play"}),t(c(F),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},kw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"MixedGroupDoc",setup(e){return(a,l)=>($(),D(R,{label:"Mixed Group",code:kw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(c(pt),null,{default:i(()=>[t(c(F),{labeled:"",icon:"left chevron",content:"Back"}),t(c(F),{icon:"stop",content:"Stop"}),t(c(F),{icon:"",labeled:"right"},{default:i(()=>[t(c(W),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},$w=`<template>
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
</template>`,Bw={__name:"EqualWidthDoc",setup(e){return(a,l)=>($(),D(R,{label:"Equal Width",code:$w},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(c(pt),{widths:5},{default:i(()=>[t(c(F),null,{default:i(()=>[n("Overview")]),_:1}),t(c(F),null,{default:i(()=>[n("Specs")]),_:1}),t(c(F),null,{default:i(()=>[n("Warranty")]),_:1}),t(c(F),null,{default:i(()=>[n("Reviews")]),_:1}),t(c(F),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(c(pt),{widths:3},{default:i(()=>[t(c(F),null,{default:i(()=>[n("Overview")]),_:1}),t(c(F),null,{default:i(()=>[n("Specs")]),_:1}),t(c(F),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Tw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Lw={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colored Buttons",code:Tw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(c(pt),{color:"blue"},{default:i(()=>[t(c(F),null,{default:i(()=>[n("One")]),_:1}),t(c(F),null,{default:i(()=>[n("Two")]),_:1}),t(c(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Dw=`<template>
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
</template>`,Iw={__name:"BasicButtonsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Basic Buttons",code:Dw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(c(pt),{basic:""},{default:i(()=>[t(c(F),null,{default:i(()=>[n("One")]),_:1}),t(c(F),null,{default:i(()=>[n("Two")]),_:1}),t(c(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(c(pt),null,{default:i(()=>[t(c(F),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(c(F),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(c(F),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Rw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Ew={__name:"GroupSizesDoc",setup(e){return(a,l)=>($(),D(R,{label:"Group Sizes",code:Rw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(c(pt),{size:"large"},{default:i(()=>[t(c(F),null,{default:i(()=>[n("One")]),_:1}),t(c(F),null,{default:i(()=>[n("Two")]),_:1}),t(c(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},zw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:_S},{id:"emphasis",label:"Emphasis",category:"Types",component:vS},{id:"animated",label:"Animated",category:"Types",component:SS},{id:"labeled",label:"Labeled",category:"Types",component:CS},{id:"icon",label:"Icon",category:"Types",component:kS},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:$S},{id:"basic",label:"Basic",category:"Types",component:TS},{id:"tertiary",label:"Tertiary",category:"Types",component:DS},{id:"inverted",label:"Inverted",category:"Types",component:RS},{id:"buttons",label:"Buttons",category:"Groups",component:zS},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:PS},{id:"content",label:"Content",category:"Content",component:NS},{id:"active",label:"Active",category:"States",component:jS},{id:"disabled",label:"Disabled",category:"States",component:qS},{id:"loading",label:"Loading",category:"States",component:YS},{id:"social",label:"Social",category:"Variations",component:WS},{id:"size",label:"Size",category:"Variations",component:XS},{id:"floated",label:"Floated",category:"Variations",component:ZS},{id:"colored",label:"Colored",category:"Variations",component:tw},{id:"compact",label:"Compact",category:"Variations",component:aw},{id:"toggle",label:"Toggle",category:"Variations",component:nw},{id:"positive",label:"Positive",category:"Variations",component:sw},{id:"negative",label:"Negative",category:"Variations",component:uw},{id:"fluid",label:"Fluid",category:"Variations",component:dw},{id:"circular",label:"Circular",category:"Variations",component:pw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:hw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:bw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:yw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:ww},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:Aw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:xw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Bw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Lw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Iw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Ew}];return(l,o)=>($(),D(ft,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Fw=y("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,Mw={__name:"ContainerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Container",code:Pw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(c(Ci),null,{default:i(()=>[Fw]),_:1})]),_:1}))}},Vw=y("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Hw=`<template>
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
</template>`,Nw={__name:"TextContainerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Text Container",code:Hw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(c(Ci),{text:""},{default:i(()=>[t(c(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Vw]),_:1})]),_:1}))}},Ow=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,jw={__name:"TextAlignmentDoc",setup(e){return(a,l)=>($(),D(R,{label:"Text Alignment",code:Ow},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(c(Ci),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(c(Ci),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(c(Ci),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Gw=y("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),qw=`<template>
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
</template>`,Uw={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fluid",code:qw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(c(Ci),{fluid:""},{default:i(()=>[t(c(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),Gw]),_:1})]),_:1}))}},Yw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Mw},{id:"text-container",label:"Text Container",category:"Types",component:Nw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:jw},{id:"fluid",label:"Fluid",category:"Variations",component:Uw}];return(l,o)=>($(),D(ft,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Jw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Ww={__name:"DividerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Divider",code:Jw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(Ve)),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Kw=y("label",null,"Username",-1),Xw=y("input",{type:"text",placeholder:"Username"},null,-1),Qw=y("label",null,"Password",-1),Zw=y("input",{type:"password",placeholder:"Password"},null,-1),eC=`<template>
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
</template>`,tC={__name:"VerticalDividerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Vertical Divider",code:eC},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(c(Te),{placeholder:""},{default:i(()=>[t(c(xa),{columns:"equal"},{default:i(()=>[t(c(St),null,{default:i(()=>[t(c(Et),null,{default:i(()=>[t(c(at),null,{default:i(()=>[Kw,Xw]),_:1}),t(c(at),null,{default:i(()=>[Qw,Zw]),_:1}),t(c(F),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(c(St),{textAlign:"middle"},{default:i(()=>[t(c(F),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(c(Ve),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},iC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,aC={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Horizontal Divider",code:iC},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(c(Te),{basic:"",textAlign:"center"},{default:i(()=>[t(c(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(c(Ve),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(c(F),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},lC=`<template>
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
</template>`,nC={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>($(),D(R,{label:"Horizontal Alignment",code:lC},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(c(Ve),{horizontal:"",textAlign:"left"},{default:i(()=>[t(c(W),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(c(Ve),{horizontal:"",textAlign:"center"},{default:i(()=>[t(c(W),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(c(Ve),{horizontal:"",textAlign:"right"},{default:i(()=>[t(c(W),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},oC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,sC={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:oC},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(c(Te),{inverted:""},{default:i(()=>[t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(Ve),{inverted:""}),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(Ve),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},rC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,uC={__name:"FittedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:rC},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(c(Ve),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},cC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,dC={__name:"HiddenDoc",setup(e){return(a,l)=>($(),D(R,{label:"Hidden",code:cC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(c(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(Ve),{hidden:""}),t(c(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},mC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,pC={__name:"SectionDoc",setup(e){return(a,l)=>($(),D(R,{label:"Section",code:mC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(c(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(Ve),{section:""}),t(c(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},fC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,gC={__name:"ClearingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Clearing",code:fC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(c(Ve),{clearing:""}),t(c(ne),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},hC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,_C={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:hC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(c(Ve),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(c(Ve),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(c(Ve),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(c(Ve),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(c(Ve),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(c(Ve),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(c(Ve),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},bC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Ww},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:tC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:aC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:nC},{id:"inverted",label:"Inverted",category:"Variations",component:sC},{id:"fitted",label:"Fitted",category:"Variations",component:uC},{id:"hidden",label:"Hidden",category:"Variations",component:dC},{id:"section",label:"Section",category:"Variations",component:pC},{id:"clearing",label:"Clearing",category:"Variations",component:gC},{id:"size",label:"Size",category:"Variations",component:_C}];return(l,o)=>($(),D(ft,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},vC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,yC={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:vC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(c(At),{name:"anguished",disabled:""})]),_:1}))}},SC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,wC={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Loading",code:SC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(c(At),{name:"angel",loading:""}),t(c(At),{name:"blush",loading:""}),t(c(At),{name:"grin",loading:""})]),_:1}))}},CC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,AC={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:CC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(c(At),{name:"relaxed",size:"small"}),t(c(At),{name:"relaxed",size:"medium"}),t(c(At),{name:"relaxed",size:"large"}),t(c(At),{name:"relaxed",size:"big"})]),_:1}))}},kC=`<template>
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
</template>`,xC={__name:"AutosizingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Autosizing",code:kC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(c(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(c(At),{name:"relaxed"})]),_:1}),t(c(F),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(c(At),{name:"relaxed"})]),_:1}),t(c(N),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(c(At),{name:"relaxed"})]),_:1})]),_:1}))}},$C=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,BC={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(R,{label:"Link",code:$C},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(c(At),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},TC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:yC},{id:"loading",label:"Loading",category:"States",component:wC},{id:"size",label:"Size",category:"Variations",component:AC},{id:"autosizing",label:"Autosizing",category:"Variations",component:xC},{id:"link",label:"Link",category:"Variations",component:BC}];return(l,o)=>($(),D(ft,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},LC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,DC={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:LC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(c(Ot),{name:"de",size:"small"}),t(c(Ot),{name:"fr",size:"medium"}),t(c(Ot),{name:"li",size:"large"}),t(c(Ot),{name:"jp",size:"big"}),t(c(Ot),{name:"gb",size:"huge"}),t(c(Ot),{name:"un",size:"massive"})]),_:1}))}},IC=`<template>
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
</template>`,RC={__name:"AutosizingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Autosizing",code:IC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(c(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(c(Ot),{name:"us"})]),_:1}),t(c(F),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(c(Ot),{name:"eu"})]),_:1}),t(c(N),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(c(Ot),{name:"pirate"})]),_:1})]),_:1}))}},EC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:DC},{id:"autosizing",label:"Autosizing",category:"Types",component:RC}];return(l,o)=>($(),D(ft,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},zC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,FC={__name:"PageHeadersDoc",setup(e){return(a,l)=>($(),D(R,{label:"Page Headers",code:zC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(c(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(c(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(c(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(c(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(c(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},PC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,MC={__name:"ContentHeadersDoc",setup(e){return(a,l)=>($(),D(R,{label:"Content Headers",code:PC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(c(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(c(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(c(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(c(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(c(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},VC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,HC={__name:"IconHeadersDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon Headers",code:VC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(c(fe),{icon:""},{default:i(()=>[t(c(W),{name:"settings"}),t(c(Kl),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(c(ka),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},NC=y("span",null,"$10.99",-1),OC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,jC={__name:"SubHeadersDoc",setup(e){return(a,l)=>($(),D(R,{label:"Sub Headers",code:OC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(c(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),NC]),_:1}))}},GC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,qC={__name:"ImageDoc",setup(e){return(a,l)=>($(),D(R,{label:"Image",code:GC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(c(fe),{as:"h2"},{default:i(()=>[t(c(ne),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,YC={__name:"IconDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon",code:UC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(c(fe),{as:"h2"},{default:i(()=>[t(c(W),{name:"plug"}),t(c(Kl),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},JC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,WC={__name:"SubheaderDoc",setup(e){return(a,l)=>($(),D(R,{label:"Subheader",code:JC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(c(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(c(ka),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},KC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,XC={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:KC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(c(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},QC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,ZC={__name:"DividingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Dividing",code:QC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(c(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},eA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,tA={__name:"BlockDoc",setup(e){return(a,l)=>($(),D(R,{label:"Block",code:eA},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(c(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},iA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,aA={__name:"AttachedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Attached",code:iA},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(c(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(c(Te),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},lA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,nA={__name:"FloatingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Floating",code:lA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(c(Te),{clearing:""},{default:i(()=>[t(c(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(c(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},oA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,sA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>($(),D(R,{label:"Text Alignment",code:oA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(c(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(c(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(c(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},rA=`<template>
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
</template>`,uA={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colored",code:rA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(c(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},cA=`<template>
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
</template>`,dA={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colored",code:cA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(c(Te),{inverted:""},{default:i(()=>[t(c(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},mA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:FC},{id:"content-headers",label:"Content Headers",category:"Types",component:MC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:HC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:jC},{id:"image",label:"Image",category:"Content",component:qC},{id:"icon",label:"Icon",category:"Content",component:YC},{id:"subheader",label:"Subheader",category:"Content",component:WC},{id:"disabled",label:"Disabled",category:"States",component:XC},{id:"dividing",label:"Dividing",category:"Variations",component:ZC},{id:"block",label:"Block",category:"Variations",component:tA},{id:"attached",label:"Attached",category:"Variations",component:aA},{id:"floating",label:"Floating",category:"Variations",component:nA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:sA},{id:"colored",label:"Colored",category:"Variations",component:uA},{id:"inverted",label:"Inverted",category:"Variations",component:dA}];return(l,o)=>($(),D(ft,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},pA=`<template>
  <SuiIcon name="users" disabled />
</template>`,fA={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:pA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(c(W),{name:"users",disabled:""})]),_:1}))}},gA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,hA={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Loading",code:gA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(c(W),{name:"spinner",loading:""}),t(c(W),{name:"notched circle",loading:""}),t(c(W),{name:"asterisk",loading:""})]),_:1}))}},_A=y("br",null,null,-1),bA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,vA={__name:"FittedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fitted",code:bA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[y("div",null,[n(" This icon "),t(c(W),{name:"help",fitted:""}),n(" is fitted. "),_A,n(" This icon "),t(c(W),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},yA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,SA={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:yA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(c(W),{name:"home",size:"mini"}),t(c(W),{name:"home",size:"tiny"}),t(c(W),{name:"home",size:"small"}),t(c(W),{name:"home"}),t(c(W),{name:"home",size:"large"}),t(c(W),{name:"home",size:"big"}),t(c(W),{name:"home",size:"huge"}),t(c(W),{name:"home",size:"massive"})]),_:1}))}},wA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,CA={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(R,{label:"Link",code:wA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(c(W),{name:"close",link:""}),t(c(W),{name:"help",link:""})]),_:1}))}},AA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,kA={__name:"FlippedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Flipped",code:AA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(c(W),{name:"cloud",flipped:"horizontally"}),t(c(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},xA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,$A={__name:"RotatedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Rotated",code:xA},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(c(W),{name:"cloud",rotated:"clockwise"}),t(c(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},BA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,TA={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(R,{label:"Circular",code:BA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(c(W),{name:"users",circular:""}),t(c(W),{name:"users",circular:"",color:"teal"}),t(c(W),{name:"users",circular:"",inverted:""}),t(c(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},LA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,DA={__name:"CircularColoredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Circular Colored",code:LA},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(c(W),{name:"users",circular:"",colored:"",color:"red"}),t(c(W),{name:"users",circular:"",colored:"",color:"green"}),t(c(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},IA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,RA={__name:"BorderedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Bordered",code:IA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(c(W),{name:"users",bordered:""}),t(c(W),{name:"users",bordered:"",color:"teal"}),t(c(W),{name:"users",bordered:"",inverted:"",color:"black"}),t(c(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},EA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,zA={__name:"BorderedColoredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Bordered Colored",code:EA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(c(W),{name:"users",bordered:"",colored:"",color:"red"}),t(c(W),{name:"users",bordered:"",colored:"",color:"green"}),t(c(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},FA=`<template>
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
</template>`,PA={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colored",code:FA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(c(W),{name:"users",primary:""}),t(c(W),{name:"users",secondary:""}),t(c(W),{name:"users",color:"red"}),t(c(W),{name:"users",color:"orange"}),t(c(W),{name:"users",color:"yellow"}),t(c(W),{name:"users",color:"olive"}),t(c(W),{name:"users",color:"green"}),t(c(W),{name:"users",color:"teal"}),t(c(W),{name:"users",color:"blue"}),t(c(W),{name:"users",color:"violet"}),t(c(W),{name:"users",color:"purple"}),t(c(W),{name:"users",color:"pink"}),t(c(W),{name:"users",color:"brown"}),t(c(W),{name:"users",color:"grey"}),t(c(W),{name:"users",color:"black"})]),_:1}))}},MA=`<template>
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
</template>`,VA={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:MA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(c(W),{name:"users",inverted:""}),t(c(W),{name:"users",inverted:"",primary:""}),t(c(W),{name:"users",inverted:"",secondary:""}),t(c(W),{name:"users",inverted:"",color:"red"}),t(c(W),{name:"users",inverted:"",color:"orange"}),t(c(W),{name:"users",inverted:"",color:"yellow"}),t(c(W),{name:"users",inverted:"",color:"olive"}),t(c(W),{name:"users",inverted:"",color:"green"}),t(c(W),{name:"users",inverted:"",color:"teal"}),t(c(W),{name:"users",inverted:"",color:"blue"}),t(c(W),{name:"users",inverted:"",color:"violet"}),t(c(W),{name:"users",inverted:"",color:"purple"}),t(c(W),{name:"users",inverted:"",color:"pink"}),t(c(W),{name:"users",inverted:"",color:"brown"}),t(c(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},HA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,NA={__name:"IconsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icons",code:HA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(c(yi),{size:"huge"},{default:i(()=>[t(c(W),{name:"circle outline",size:"big"}),t(c(W),{name:"user"})]),_:1}),t(c(yi),{size:"huge"},{default:i(()=>[t(c(W),{name:"dont",size:"big",color:"red"}),t(c(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},OA=`<template>
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
</template>`,jA={__name:"CornerIconDoc",setup(e){return(a,l)=>($(),D(R,{label:"Corner Icon",code:OA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(c(yi),{size:"huge"},{default:i(()=>[t(c(W),{name:"puzzle"}),t(c(W),{name:"add",corner:"top left"})]),_:1}),t(c(yi),{size:"huge"},{default:i(()=>[t(c(W),{name:"puzzle"}),t(c(W),{name:"add",corner:"top right"})]),_:1}),t(c(yi),{size:"huge"},{default:i(()=>[t(c(W),{name:"puzzle"}),t(c(W),{name:"add",corner:"bottom left"})]),_:1}),t(c(yi),{size:"huge"},{default:i(()=>[t(c(W),{name:"puzzle"}),t(c(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},GA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:fA},{id:"loading",label:"Loading",category:"States",component:hA},{id:"fitted",label:"Fitted",category:"Variations",component:vA},{id:"size",label:"Size",category:"Variations",component:SA},{id:"link",label:"Link",category:"Variations",component:CA},{id:"flipped",label:"Flipped",category:"Variations",component:kA},{id:"rotated",label:"Rotated",category:"Variations",component:$A},{id:"circular",label:"Circular",category:"Variations",component:TA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:DA},{id:"bordered",label:"Bordered",category:"Variations",component:RA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:zA},{id:"colored",label:"Colored",category:"Variations",component:PA},{id:"inverted",label:"Inverted",category:"Variations",component:VA},{id:"icons",label:"Icons",category:"Groups",component:NA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:jA}];return(l,o)=>($(),D(ft,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},qA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,UA={__name:"ImageDoc",setup(e){return(a,l)=>($(),D(R,{label:"Image",code:qA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},YA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,JA={__name:"ImageLinkDoc",setup(e){return(a,l)=>($(),D(R,{label:"Image Link",code:YA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(c(ne),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},WA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,KA={__name:"HiddenDoc",setup(e){return(a,l)=>($(),D(R,{label:"Hidden",code:WA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},XA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,QA={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:XA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},ZA=y("span",null,"Username",-1),e0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,t0={__name:"AvatarDoc",setup(e){return(a,l)=>($(),D(R,{label:"Avatar",code:e0},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),ZA]),_:1}))}},i0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,a0={__name:"BorderedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Bordered",code:i0},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(c(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},l0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,n0={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fluid",code:l0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},o0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,s0={__name:"RoundedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Rounded",code:o0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(c(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},r0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,u0={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(R,{label:"Circular",code:r0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(c(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},c0=y("span",null,"Top Aligned",-1),d0=y("span",null,"Middle Aligned",-1),m0=y("span",null,"Bottom Aligned",-1),p0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,f0={__name:"VerticallyAlignedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Vertically Aligned",code:p0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(c(ne),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),c0,t(c(Ve)),t(c(ne),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),d0,t(c(Ve)),t(c(ne),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),m0]),_:1}))}},g0=y("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),h0=y("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),_0=y("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),b0=`<template>
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
</template>`,v0={__name:"CenteredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Centered",code:b0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(ne),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),g0,h0,t(c(ne),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),_0]),_:1})]),_:1}))}},y0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,S0={__name:"SpacedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Spaced",code:y0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[y("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(c(ne),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},w0=y("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),C0=y("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),A0=y("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),k0=`<template>
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
</template>`,x0={__name:"FloatedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Floated",code:k0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(ne),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),w0,t(c(ne),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),C0,A0]),_:1})]),_:1}))}},$0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,B0={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:$0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(c(ne),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(Ve),{hidden:""}),t(c(ne),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(Ve),{hidden:""}),t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(Ve),{hidden:""}),t(c(ne),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},T0=`<template>
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
</template>`,L0={__name:"GroupSizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:T0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(c(Xl),{size:"tiny"},{default:i(()=>[t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(c(Ve),{hidden:""}),t(c(Xl),{size:"small"},{default:i(()=>[t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},D0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:UA},{id:"image-link",label:"Image Link",category:"Types",component:JA},{id:"hidden",label:"Hidden",category:"States",component:KA},{id:"disabled",label:"Disabled",category:"States",component:QA},{id:"avatar",label:"Avatar",category:"Variations",component:t0},{id:"bordered",label:"Bordered",category:"Variations",component:a0},{id:"fluid",label:"Fluid",category:"Variations",component:n0},{id:"rounded",label:"Rounded",category:"Variations",component:s0},{id:"circular",label:"Circular",category:"Variations",component:u0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:f0},{id:"centered",label:"Centered",category:"Variations",component:v0},{id:"spaced",label:"Spaced",category:"Variations",component:S0},{id:"floated",label:"Floated",category:"Variations",component:x0},{id:"size",label:"Size",category:"Variations",component:B0},{id:"group-size",label:"Size",category:"Groups",component:L0}];return(l,o)=>($(),D(ft,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},I0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,R0={__name:"InputDoc",setup(e){return(a,l)=>($(),D(R,{label:"Input",code:I0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(c(Ze),{placeholder:"Search..."})]),_:1}))}},E0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,z0={__name:"FocusDoc",setup(e){return(a,l)=>($(),D(R,{label:"Focus",code:E0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(c(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},F0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,P0={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Loading",code:F0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(c(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(c(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},M0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,V0={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:M0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(c(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},H0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,N0={__name:"ErrorDoc",setup(e){return(a,l)=>($(),D(R,{label:"Error",code:H0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(c(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},O0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,j0={__name:"IconDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon",code:O0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(c(Ze),{icon:"search",placeholder:"Search..."}),t(c(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},G0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,q0={__name:"LabeledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Labeled",code:G0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(c(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},U0=`<template>
  <SuiInput action="Search" />
</template>`,Y0={__name:"ActionDoc",setup(e){return(a,l)=>($(),D(R,{label:"Action",code:U0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(c(Ze),{action:"Search"})]),_:1}))}},J0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,W0={__name:"TransparentDoc",setup(e){return(a,l)=>($(),D(R,{label:"Transparent",code:J0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(c(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},K0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,X0={__name:"InvertedDoc",setup(e){return(a,l)=>{const o=S("SuiSegment");return $(),D(R,{label:"Inverted",code:K0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(c(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},Q0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,Z0={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fluid",code:Q0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(c(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},ek=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,tk={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:ek},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(c(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(c(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(c(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(c(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(c(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(c(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},ik={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:R0},{id:"focus",label:"Focus",category:"States",component:z0},{id:"loading",label:"Loading",category:"States",component:P0},{id:"disabled",label:"Disabled",category:"States",component:V0},{id:"error",label:"Error",category:"States",component:N0},{id:"icon",label:"Icon",category:"Variations",component:j0},{id:"labeled",label:"Labeled",category:"Variations",component:q0},{id:"action",label:"Action",category:"Variations",component:Y0},{id:"transparent",label:"Transparent",category:"Variations",component:W0},{id:"inverted",label:"Inverted",category:"Variations",component:X0},{id:"fluid",label:"Fluid",category:"Variations",component:Z0},{id:"size",label:"Size",category:"Variations",component:tk}];return(l,o)=>($(),D(ft,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},ak=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,lk={__name:"LabelDoc",setup(e){return(a,l)=>($(),D(R,{label:"Label",code:ak},{description:i(()=>[n(" A label ")]),example:i(()=>[t(c(N),null,{default:i(()=>[t(c(W),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},Wo="/vue-fomantic-ui/images/avatar/small/joe.jpg",rp="/vue-fomantic-ui/images/avatar/small/veronika.jpg",ni="/vue-fomantic-ui/images/avatar/small/elliot.jpg",nk=y("img",{src:Wo},null,-1),ok=y("img",{src:rp},null,-1),sk=y("img",{src:ni},null,-1),rk=`<template>
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
</template>`,uk={__name:"ImageDoc",setup(e){return(a,l)=>($(),D(R,{label:"Image",code:rk},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(c(N),{as:"a",image:""},{default:i(()=>[nk,n(" Joe ")]),_:1}),t(c(N),{as:"a",image:"",color:"blue"},{default:i(()=>[ok,n(" Veronika "),t(c(Ji),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(c(N),{as:"a",image:""},{default:i(()=>[sk,n(" Elliot "),t(c(W),{name:"delete"})]),_:1})]),_:1}))}},ck=y("input",{type:"text",placeholder:"First Name"},null,-1),dk=y("input",{type:"text"},null,-1),mk=y("input",{type:"text",placeholder:"Username"},null,-1),pk=y("input",{type:"password"},null,-1),fk=`<template>
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
</template>`,gk={__name:"PointingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Pointing",code:fk},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(c(Et),{fluid:""},{default:i(()=>[t(c(at),null,{default:i(()=>[ck,t(c(N),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(c(Ve)),t(c(at),null,{default:i(()=>[t(c(N),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),dk]),_:1}),t(c(Ve)),t(c(at),{inline:""},{default:i(()=>[mk,t(c(N),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(c(Ve)),t(c(at),{inline:""},{default:i(()=>[t(c(N),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),pk]),_:1})]),_:1})]),_:1}))}},hk=`<template>
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
</template>`,_k={__name:"CornerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Corner",code:hk},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(c(xa),{columns:2},{default:i(()=>[t(c(St),null,{default:i(()=>[t(c(ne),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(c(St),null,{default:i(()=>[t(c(ne),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},bk=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,vk={__name:"TagDoc",setup(e){return(a,l)=>($(),D(R,{label:"Tag",code:bk},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(c(N),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(c(N),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(c(N),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},yk=y("span",null,"Account Details",-1),Sk=y("span",null,"User Reviews",-1),wk=y("span",null,"Technical Specifications",-1),Ck=y("span",null,"User Reviews",-1),Ak=`<template>
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
</template>`,kk={__name:"RibbonDoc",setup(e){return(a,l)=>($(),D(R,{label:"Ribbon",code:Ak},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(c(xa),{columns:2},{default:i(()=>[t(c(St),null,{default:i(()=>[t(c(Te),{raised:""},{default:i(()=>[t(c(N),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),yk,t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(c(N),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),Sk,t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(c(St),null,{default:i(()=>[t(c(Te),{raised:""},{default:i(()=>[t(c(N),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),wk,t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(c(N),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),Ck,t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},xk=`<template>
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
</template>`,$k={__name:"AttachedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Attached",code:xk},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(c(xa),{columns:3},{default:i(()=>[t(c(en),null,{default:i(()=>[t(c(St),null,{default:i(()=>[t(c(Te),{padded:""},{default:i(()=>[t(c(N),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(c(St),null,{default:i(()=>[t(c(Te),{padded:""},{default:i(()=>[t(c(N),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(c(St),null,{default:i(()=>[t(c(Te),{padded:""},{default:i(()=>[t(c(N),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(c(en),null,{default:i(()=>[t(c(St),null,{default:i(()=>[t(c(Te),{padded:""},{default:i(()=>[t(c(N),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(c(St),null,{default:i(()=>[t(c(Te),{padded:""},{default:i(()=>[t(c(N),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(c(St),null,{default:i(()=>[t(c(Te),{padded:""},{default:i(()=>[t(c(N),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Bk=`<template>
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
</template>`,Tk={__name:"HorizontalDoc",setup(e){return(a,l)=>($(),D(R,{label:"Horizontal",code:Bk},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(c(zo),{divided:"",selection:""},{default:i(()=>[t(c(oa),null,{default:i(()=>[t(c(N),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(c(oa),null,{default:i(()=>[t(c(N),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(c(oa),null,{default:i(()=>[t(c(N),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(c(oa),null,{default:i(()=>[t(c(N),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},Lk=`<template>
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
</template>`,Dk={__name:"FloatingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Floating",code:Lk},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(c(Fo),{compact:""},{default:i(()=>[t(c(tn),null,{default:i(()=>[t(c(W),{name:"mail"}),n(" Messages "),t(c(N),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(c(tn),null,{default:i(()=>[t(c(W),{name:"users"}),n(" Friends "),t(c(N),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ik=`<template>
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
</template>`,Rk={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:Ik},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(c(Te),{inverted:""},{default:i(()=>[t(c(N),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(N),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(N),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(N),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(N),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(N),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(N),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(N),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(N),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(N),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(N),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(N),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(N),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(N),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c(N),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ek=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,zk={__name:"DetailDoc",setup(e){return(a,l)=>($(),D(R,{label:"Detail",code:Ek},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(c(N),null,{default:i(()=>[n(" Dogs "),t(c(Ji),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Fk=`<template>
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
</template>`,Pk={__name:"IconDoc",setup(e){return(a,l)=>($(),D(R,{label:"Icon",code:Fk},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(c(N),null,{default:i(()=>[t(c(W),{name:"mail"}),n(" Mail ")]),_:1}),t(c(N),null,{default:i(()=>[t(c(W),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(c(N),{icon:"dog"}),t(c(N),{icon:"cat"})]),_:1}))}},Mk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Vk={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(R,{label:"Link",code:Mk},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(c(N),{as:"a"},{default:i(()=>[t(c(W),{name:"mail"}),n(" 23 ")]),_:1}),t(c(N),null,{default:i(()=>[t(c(W),{name:"mail"}),n(" 23 "),t(c(Ji),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Hk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Nk={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:Hk},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(c(N),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Ok=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,jk={__name:"FluidDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fluid",code:Ok},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(c(N),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},Gk=`<template>
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
</template>`,qk={__name:"CircularDoc",setup(e){return(a,l)=>($(),D(R,{label:"Circular",code:Gk},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(c(N),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(c(N),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},Uk=y("img",{src:ni},null,-1),Yk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Jk={__name:"BasicDoc",setup(e){return(a,l)=>($(),D(R,{label:"Basic",code:Yk},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(c(N),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(c(N),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(c(N),{as:"a",basic:"",image:""},{default:i(()=>[Uk,n(" Elliot ")]),_:1}),t(c(N),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(c(N),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Wk=`<template>
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
</template>`,Kk={__name:"ColoredDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colored",code:Wk},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(c(N),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(N),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(N),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(N),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(N),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(N),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(N),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(N),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(N),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(N),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(N),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(N),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(N),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(N),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c(N),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Xk=`<template>
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
</template>`,Qk={__name:"BasicTagDoc",setup(e){return(a,l)=>($(),D(R,{label:"Basic Tag",code:Xk},{description:i(()=>[]),example:i(()=>[t(c(N),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c(N),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Zk=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,ex={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:Zk},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(c(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(c(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(c(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(c(N),null,{default:i(()=>[n("Medium")]),_:1}),t(c(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(c(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(c(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(c(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},tx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ix={__name:"GroupSizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Group Size",code:tx},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(c(Wi),{size:"huge"},{default:i(()=>[t(c(N),null,{default:i(()=>[n("Fun")]),_:1}),t(c(N),null,{default:i(()=>[n("Happy")]),_:1}),t(c(N),null,{default:i(()=>[n("Smart")]),_:1}),t(c(N),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},ax=`<template>
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
</template>`,lx={__name:"ColoredGroupDoc",setup(e){return(a,l)=>($(),D(R,{label:"Clored Group",code:ax},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(c(Wi),{color:"blue"},{default:i(()=>[t(c(N),null,{default:i(()=>[n(" Fun "),t(c(W),{name:"close"})]),_:1}),t(c(N),null,{default:i(()=>[n(" Happy "),t(c(Ji),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(c(N),null,{default:i(()=>[n("Insane")]),_:1}),t(c(N),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},nx=`<template>
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
</template>`,ox={__name:"BasicGroupDoc",setup(e){return(a,l)=>($(),D(R,{label:"Basic Group",code:nx},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(c(Wi),{basic:""},{default:i(()=>[t(c(N),null,{default:i(()=>[n(" Fun "),t(c(W),{name:"close"})]),_:1}),t(c(N),null,{default:i(()=>[n(" Happy "),t(c(Ji),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(c(N),null,{default:i(()=>[n("Insane")]),_:1}),t(c(N),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},sx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,rx={__name:"TagGroupDoc",setup(e){return(a,l)=>($(),D(R,{label:"Tag Group",code:sx},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(c(Wi),{tag:""},{default:i(()=>[t(c(N),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},ux=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,cx={__name:"CircularGroupDoc",setup(e){return(a,l)=>($(),D(R,{label:"Circular Group",code:ux},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(c(Wi),{circular:""},{default:i(()=>[t(c(N),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(c(N),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},dx={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:lk},{id:"image",label:"Image",category:"Types",component:uk},{id:"pointing",label:"Pointing",category:"Types",component:gk},{id:"corner",label:"Corner",category:"Types",component:_k},{id:"tag",label:"Tag",category:"Types",component:vk},{id:"ribbon",label:"Ribbon",category:"Types",component:kk},{id:"attached",label:"Attached",category:"Types",component:$k},{id:"horizontal",label:"Horizontal",category:"Types",component:Tk},{id:"floating",label:"Floating",category:"Types",component:Dk},{id:"inverted",label:"Inverted",category:"Types",component:Rk},{id:"detail",label:"Detail",category:"Content",component:zk},{id:"icon",label:"Icon",category:"Content",component:Pk},{id:"link",label:"Link",category:"Content",component:Vk},{id:"disabled",label:"Disabled",category:"States",component:Nk},{id:"fluid",label:"Fluid",category:"Variations",component:jk},{id:"circular",label:"Circular",category:"Variations",component:qk},{id:"basic",label:"Basic",category:"Variations",component:Jk},{id:"colored",label:"Colored",category:"Variations",component:Kk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Qk},{id:"size",label:"Size",category:"Variations",component:ex},{id:"group-size",label:"Group Size",category:"Groups",component:ix},{id:"colored-group",label:"Colored Group",category:"Groups",component:lx},{id:"basic-group",label:"Basic Group",category:"Groups",component:ox},{id:"tag-group",label:"Tag Group",category:"Groups",component:rx},{id:"circular-group",label:"Circular Group",category:"Groups",component:cx}];return(l,o)=>($(),D(ft,{title:"Label",description:"A label displays content classification","component-docs":a}))}},mx=ub(wh);function px(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ll=mx,lo=px(Em),fx=Ll.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var o=l.slots,r=l.attrs,d=o&&o.default&&o.default()||[],p=a.code||d&&d.length?d[0].children:"",f=a.inline,s=a.language,u=lo.languages[s],g="language-".concat(s);return function(){return f?Ll.h("code",{class:[g],innerHTML:lo.highlight(p,u)}):Ll.h("pre",Object.assign({},r,{class:[r.class,g]}),[Ll.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:lo.highlight(p,u)}))])}}}),gx=fx;const hx=Im(gx),_x=z({name:"DocExample",components:{Prism:hx},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),bx={class:"example"};function vx(e,a,l,o,r,d){const p=S("sui-header-subheader"),f=S("sui-header"),s=S("sui-grid-column"),u=S("sui-icon"),g=S("sui-grid-row"),m=S("prism"),h=S("sui-grid");return $(),he("div",bx,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Be(e.title)+" ",1),t(p,null,{default:i(()=>[n(Be(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(u,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[Gi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?($(),D(s,{key:0,width:16},{default:i(()=>[t(m,{language:"markup"},{default:i(()=>[n(Be(e.code),1)]),_:1})]),_:1})):ks("",!0)]),_:3})]),_:3})])}const Je=Le(_x,[["render",vx],["__scopeId","data-v-fcfb6a67"]]),yx="/vue-fomantic-ui/images/avatar/small/rachel.png",Sx="/vue-fomantic-ui/images/avatar/small/lindsay.png",wx="/vue-fomantic-ui/images/avatar/small/matthew.png",En="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Cx="/vue-fomantic-ui/images/avatar/small/tom.jpg",Dl="/vue-fomantic-ui/images/avatar/small/christian.jpg",zn="/vue-fomantic-ui/images/avatar/small/matt.jpg",ja="/vue-fomantic-ui/images/avatar/small/helen.jpg",Ei="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Ko="/vue-fomantic-ui/images/avatar/small/stevie.jpg",no="/vue-fomantic-ui/images/wireframe/square-image.png",Ax=z({name:"ListDoc",components:{DocExample:Je},setup(){return{listCode:`<sui-list>
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
</div>`}}}),kx={class:"intro"},xx=y("div",null,"Benefits",-1),$x={class:"list"},Bx=y("a",null,"Languages",-1),Tx=y("a",null,[y("b",null,"Arrested Development")],-1),Lx=y("a",null,[y("b",null,"Bob's Burgers")],-1),Dx=y("a",null,[y("b",null,"The Godfather Part 2")],-1),Ix=y("a",null,[y("b",null,"Twin Peaks")],-1),Rx=y("a",null,[y("b",null,"Arrested Development")],-1),Ex=y("a",null,[y("b",null,"Bob's Burgers")],-1),zx=y("a",null,[y("b",null,"The Godfather Part 2")],-1);function Fx(e,a,l,o,r,d){const p=S("sui-header-subheader"),f=S("sui-header"),s=S("sui-divider"),u=S("sui-icon"),g=S("sui-menu-item"),m=S("sui-menu"),h=S("sui-container"),v=S("sui-segment"),b=S("sui-list-item"),C=S("sui-list"),k=S("doc-example"),T=S("sui-list-list"),_=S("sui-list-header"),w=S("sui-list-description"),x=S("sui-list-content"),B=S("sui-image");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[y("div",kx,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(p,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Apples")]),_:1}),t(b,null,{default:i(()=>[n("Pears")]),_:1}),t(b,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(b,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(b,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(b,null,{default:i(()=>[xx,y("div",$x,[t(b,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(b,null,{default:i(()=>[n("Rebates")]),_:1}),t(b,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(b,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(b,null,{default:i(()=>[Bx,t(T,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(b,{active:""},{default:i(()=>[n("Home")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("1")]),_:1}),t(b,null,{default:i(()=>[n("2")]),_:1}),t(b,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[t(u,{name:"help"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(w,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[t(u,{name:"right triangle"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(w,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:yx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Rachel")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Tx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Sx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Lindsay")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Lx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:wx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matthew")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Dx,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:En}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Ix,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:rp}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(w,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(w,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(w,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(w,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(u,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(w,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Cx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Dl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:zn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Dl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Dl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Rx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ko}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),Ex,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:ni}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(w,null,{default:i(()=>[n(" Last seen watching "),zx,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ko}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:ni}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Dl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:Ei}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t(k,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(B,{avatar:"",src:no}),t(x,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:no}),t(x,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(B,{avatar:"",src:no}),t(x,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[y("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Px=Le(Ax,[["render",Fx]]),Mx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vx={__name:"LoaderDoc",setup(e){return(a,l)=>($(),D(R,{label:"Loader",code:Mx},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee))]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Hx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Nx={__name:"TextLoaderDoc",setup(e){return(a,l)=>($(),D(R,{label:"Text Loader",code:Hx},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ox=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,jx={__name:"IndeterminateDoc",setup(e){return(a,l)=>($(),D(R,{label:"Indeterminate",code:Ox},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Gx=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,qx={__name:"ActiveDoc",setup(e){return(a,l)=>($(),D(R,{label:"Active",code:Gx},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(Ee),{active:""}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Ux=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Yx={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:Ux},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(Ee),{disabled:""}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Jx=`<template>
  <SuiLoader active inline />
</template>`,Wx={__name:"InlineDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inline",code:Jx},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(c(Ee),{active:"",inline:""})]),_:1}))}},Kx=`<template>
  <SuiLoader active inline />
</template>`,Xx={__name:"InlineCenterDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inline Center",code:Kx},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(c(Ee),{active:"",inline:"centered"})]),_:1}))}},Qx=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Zx={__name:"SpeedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Speed",code:Qx},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(c(Ee),{slow:"",active:"",inline:""}),t(c(Ee),{active:"",inline:""}),t(c(Ee),{fast:"",active:"",inline:""})]),_:1}))}},e$=`<template>
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
</template>`,t$={__name:"ColorsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Colors",code:e$},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(c(Ee),{active:"",inline:"",primary:""}),t(c(Ee),{active:"",inline:"",secondary:""}),t(c(Ee),{active:"",inline:"",color:"red"}),t(c(Ee),{active:"",inline:"",color:"orange"}),t(c(Ee),{active:"",inline:"",color:"yellow"}),t(c(Ee),{active:"",inline:"",color:"olive"}),t(c(Ee),{active:"",inline:"",color:"green"}),t(c(Ee),{active:"",inline:"",color:"teal"}),t(c(Ee),{active:"",inline:"",color:"blue"}),t(c(Ee),{active:"",inline:"",color:"violet"}),t(c(Ee),{active:"",inline:"",color:"purple"}),t(c(Ee),{active:"",inline:"",color:"pink"}),t(c(Ee),{active:"",inline:"",color:"brown"}),t(c(Ee),{active:"",inline:"",color:"grey"}),t(c(Ee),{active:"",inline:"",color:"black"})]),_:1}))}},i$=`<template>
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
</template>`,a$={__name:"SizeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Size",code:i$},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(c(Te),null,{default:i(()=>[t(c(jt),{active:""},{default:i(()=>[t(c(Ee),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},l$=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,n$={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:l$},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(c(Te),{inverted:""},{default:i(()=>[t(c(Ee),{active:"",inverted:""}),t(c(ne),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},o$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Vx},{id:"text-loader",label:"Text Loader",category:"Types",component:Nx},{id:"indeterminate",label:"Indeterminate",category:"States",component:jx},{id:"active",label:"Active",category:"States",component:qx},{id:"disabled",label:"Disabled",category:"States",component:Yx},{id:"inline",label:"Inline",category:"Variations",component:Wx},{id:"inline-center",label:"Inline Center",category:"Variations",component:Xx},{id:"speed",label:"Speed",category:"Variations",component:Zx},{id:"colors",label:"Colors",category:"Variations",component:t$},{id:"size",label:"Size",category:"Variations",component:a$},{id:"inverted",label:"Inverted",category:"Variations",component:n$}];return(l,o)=>($(),D(ft,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},nt="/vue-fomantic-ui/images/wireframe/short-paragraph.png",s$=z({name:"RailDoc",components:{DocExample:Je},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),r$={class:"intro"};function u$(e,a,l,o,r,d){const p=S("sui-header-subheader"),f=S("sui-header"),s=S("sui-divider"),u=S("sui-icon"),g=S("sui-menu-item"),m=S("sui-menu"),h=S("sui-container"),v=S("sui-segment"),b=S("sui-image"),C=S("sui-rail"),k=S("sui-grid-column"),T=S("sui-grid"),_=S("doc-example");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[y("div",r$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(p,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(b,{src:nt}),t(C,{internal:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{attached:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{close:"",position:"left"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(v,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(T,{centered:"",columns:3},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[t(b,{src:nt}),t(C,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const c$=Le(s$,[["render",u$]]),d$=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,m$={__name:"FadeDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fade",code:d$},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(c($i),{animated:"fade"},{default:i(()=>[t(c($t),{visible:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(c($t),{hidden:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},p$=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,f$={__name:"MoveDoc",setup(e){return(a,l)=>($(),D(R,{label:"Move",code:p$},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(c($i),{animated:"move"},{default:i(()=>[t(c($t),{visible:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(c($t),{hidden:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},g$=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,h$={__name:"RotateDoc",setup(e){return(a,l)=>($(),D(R,{label:"Rotate",code:g$},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(c($i),{animated:"rotate"},{default:i(()=>[t(c($t),{visible:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(c($t),{hidden:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},_$=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,b$={__name:"ActiveDoc",setup(e){return(a,l)=>($(),D(R,{label:"Active",code:_$},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(c($i),{active:"",animated:"move"},{default:i(()=>[t(c($t),{visible:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(c($t),{hidden:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},v$=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,y$={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:v$},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(c($i),{disabled:"",animated:"move"},{default:i(()=>[t(c($t),{visible:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(c($t),{hidden:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},S$=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,w$={__name:"InstantDoc",setup(e){return(a,l)=>($(),D(R,{label:"Instant",code:S$},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(c($i),{instant:"",animated:"move"},{default:i(()=>[t(c($t),{visible:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(c($t),{hidden:""},{default:i(()=>[t(c(ne),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},C$={__name:"Reveal",setup(e){const a=[{id:"fade",label:"Fade",category:"Types",component:m$},{id:"move",label:"Move",category:"Types",component:f$},{id:"rotate",label:"Rotate",category:"Types",component:h$},{id:"active",label:"Active",category:"States",component:b$},{id:"disabled",label:"Disabled",category:"States",component:y$},{id:"instant",label:"Instant",category:"Variations",component:w$}];return(l,o)=>($(),D(ft,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":a}))}},A$=z({name:"SegmentDoc",components:{DocExample:Je},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),k$={class:"intro"},x$=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),$$=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),B$=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),T$=y("p",null,"Top",-1),L$=y("p",null,"Middle",-1),D$=y("p",null,"Middle",-1),I$=y("p",null,"Middle",-1),R$=y("p",null,"Bottom",-1),E$=y("p",null,"I'm here to tell you something, and you will probably read me first.",-1),z$=y("p",null,"This segment is on top",-1),F$=y("p",null,"This segment is attached on both sides",-1),P$=y("p",null,"This segment is on bottom",-1),M$=y("p",null,"Fitted Segment",-1),V$=y("p",null,"Horizontally fitted segment",-1),H$=y("p",null,"Vertically fitted segment",-1),N$=y("p",null,"I'm here to tell you something, and you will probably read me first.",-1),O$=y("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),j$=y("p",null,"If you notice me you must be looking very hard.",-1),G$=y("p",null,"This segment will appear to the right",-1),q$=y("p",null,"This segment will appear to the left",-1),U$=y("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Y$(e,a,l,o,r,d){const p=S("sui-header-subheader"),f=S("sui-header"),s=S("sui-divider"),u=S("sui-icon"),g=S("sui-menu-item"),m=S("sui-menu"),h=S("sui-container"),v=S("sui-segment"),b=S("doc-example"),C=S("sui-button"),k=S("sui-segment-group");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[y("div",k$,[t(f,{as:"h1"},{default:i(()=>[n("Segment "),t(p,null,{default:i(()=>[n(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Segment",description:"A segment of content",code:e.segmentCode},{default:i(()=>[t(v,null,{default:i(()=>[n("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),t(b,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:e.placeholderCode},{default:i(()=>[t(v,{placeholder:""},{default:i(()=>[t(f,{icon:""},{default:i(()=>[t(u,{name:"file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(C,{color:"primary"},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Raised",description:"A segment may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(v,{raised:""},{default:i(()=>[x$]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:e.stackedCode},{default:i(()=>[t(v,{stacked:""},{default:i(()=>[$$]),_:1})]),_:1},8,["code"]),t(b,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:e.piledCode},{default:i(()=>[t(v,{piled:""},{default:i(()=>[B$]),_:1})]),_:1},8,["code"]),t(b,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:e.verticalCode},{default:i(()=>[y("div",null,[t(v,{vertical:""},{default:i(()=>[n(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[n(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),t(v,{vertical:""},{default:i(()=>[n(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(b,{title:"Segments",description:"A group of segments can be formatted to appear together",code:e.segmentsCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[T$]),_:1}),t(v,null,{default:i(()=>[L$]),_:1}),t(v,null,{default:i(()=>[D$]),_:1}),t(v,null,{default:i(()=>[I$]),_:1}),t(v,null,{default:i(()=>[R$]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:e.nestedCode},{default:i(()=>[t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(k,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Nested Top")]),_:1}),t(v,null,{default:i(()=>[n("Nested Middle")]),_:1}),t(v,null,{default:i(()=>[n("Nested Bottom")]),_:1})]),_:1}),t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:e.horizontalCode},{default:i(()=>[t(k,{horizontal:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Left")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Right")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Raised Segments",description:"A group of segments can be raised",code:e.raisedSegmentsCode},{default:i(()=>[t(k,{raised:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacked Segments",description:"A group of segments can be stacked",code:e.stackedSegmentsCode},{default:i(()=>[t(k,{stacked:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Piled Segments",description:"A group of segments can be piled",code:e.piledSegmentsCode},{default:i(()=>[t(k,{piled:""},{default:i(()=>[t(v,null,{default:i(()=>[n("Top")]),_:1}),t(v,null,{default:i(()=>[n("Middle")]),_:1}),t(v,null,{default:i(()=>[n("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(b,{title:"Disabled",description:"A segment may show its content is disabled",code:e.disabledCode},{default:i(()=>[t(v,{disabled:""},{default:i(()=>[n("Disabled content")]),_:1})]),_:1},8,["code"]),t(b,{title:"Loading",description:"A segment may show its content is being loaded",code:e.loadingCode},{default:i(()=>[t(v,{loading:""},{default:i(()=>[n("Now Loading...")]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[E$]),_:1})]),_:1},8,["code"]),t(b,{title:"Attached",description:"A segment can be attached to other content on a page",code:e.attachedCode},{default:i(()=>[y("div",null,[t(v,{attached:"top"},{default:i(()=>[z$]),_:1}),t(v,{attached:""},{default:i(()=>[F$]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[P$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Padded",description:"A segment can increase its padding",code:e.paddedCode},{default:i(()=>[t(v,{padded:""},{default:i(()=>[n("Padded content")]),_:1})]),_:1},8,["code"]),t(b,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[y("div",null,[t(v,{fitted:""},{default:i(()=>[M$]),_:1}),t(v,{fitted:"horizontally"},{default:i(()=>[V$]),_:1}),t(v,{fitted:"vertically"},{default:i(()=>[H$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:e.compactCode},{default:i(()=>[t(v,{compact:""},{default:i(()=>[n("Compact content")]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A segment can be colored",code:e.coloredCode},{default:i(()=>[y("div",null,[t(v,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(v,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(v,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(v,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(v,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(v,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(v,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(v,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(v,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(v,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(v,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(v,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(v,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(b,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:e.emphasisCode},{default:i(()=>[y("div",null,[t(v,null,{default:i(()=>[N$]),_:1}),t(v,{secondary:""},{default:i(()=>[O$]),_:1}),t(v,{tertiary:""},{default:i(()=>[j$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Circular",description:"A segment can be circular",code:e.circularCode},{default:i(()=>[y("div",null,[t(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n(" Buy Now "),t(p,null,{default:i(()=>[n(" $10.99 ")]),_:1})]),_:1})]),_:1}),t(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n(" Buy Now "),t(p,null,{default:i(()=>[n(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Clearing",description:"A segment can clear floated content",code:e.clearingCode},{default:i(()=>[t(v,{clearing:""},{default:i(()=>[t(C,{floated:"right"},{default:i(()=>[n("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Floated",description:"A segment can appear to the left or right of other content",code:e.floatedCode},{default:i(()=>[y("div",null,[t(v,{floated:"right"},{default:i(()=>[G$]),_:1}),t(v,{floated:"left"},{default:i(()=>[q$]),_:1})])]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:e.textAlignCode},{default:i(()=>[y("div",null,[t(v,{textAlign:"right"},{default:i(()=>[n(" Right ")]),_:1}),t(v,{textAlign:"left"},{default:i(()=>[n(" Left ")]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[n(" Center ")]),_:1})])]),_:1},8,["code"]),t(b,{title:"Basic",description:"A basic segment has no special formatting",code:e.basicCode},{default:i(()=>[t(v,{basic:""},{default:i(()=>[U$]),_:1})]),_:1},8,["code"])]),_:1})])}const J$=Le(A$,[["render",Y$]]),W$=z({name:"StepDoc",components:{DocExample:Je},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),K$={class:"intro"},X$=y("p",null,"The steps take up the entire column width",-1),Q$=y("p",null,"Main content",-1);function Z$(e,a,l,o,r,d){const p=S("sui-header-subheader"),f=S("sui-header"),s=S("sui-divider"),u=S("sui-icon"),g=S("sui-menu-item"),m=S("sui-menu"),h=S("sui-container"),v=S("sui-segment"),b=S("sui-step"),C=S("sui-step-group"),k=S("doc-example"),T=S("sui-step-title"),_=S("sui-step-description"),w=S("sui-step-content"),x=S("sui-grid-column"),B=S("sui-grid");return $(),he("div",null,[t(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[y("div",K$,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(p,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t(k,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{link:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(k,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"plane"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info circle"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(B,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"dollar"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[X$]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[y("div",null,[t(C,{attached:"top"},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{attached:""},{default:i(()=>[Q$]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(b,null,{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(k,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(u,{name:"payment"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(u,{name:"truck"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(u,{name:"credit card"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(u,{name:"info"}),t(w,null,{default:i(()=>[t(T,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const eB=Le(W$,[["render",Z$]]),tB=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,iB={__name:"BreadcrumbDoc",setup(e){return(a,l)=>($(),D(R,{label:"Breadcrumb",code:tB},{description:i(()=>[n(" A standard breadcrumb ")]),example:i(()=>[t(c(Kt),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},aB=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,lB={__name:"DividerDoc",setup(e){return(a,l)=>($(),D(R,{label:"Divider",code:aB},{description:i(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(c(Kt),null,{default:i(()=>[t(c(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},nB=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,oB={__name:"SectionDoc",setup(e){return(a,l)=>($(),D(R,{label:"Section",code:nB},{description:i(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(c(Kt),null,{default:i(()=>[t(c(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},sB=y("a",{href:"#"},"paper towels",-1),rB=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,uB={__name:"LinkDoc",setup(e){return(a,l)=>($(),D(R,{label:"Link",code:rB},{description:i(()=>[n(" A section may be linkable or contain a link ")]),example:i(()=>[t(c(Kt),null,{default:i(()=>[t(c(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Search for: "),sB]),_:1})]),_:1})]),_:1}))}},cB=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,dB={__name:"ActiveDoc",setup(e){return(a,l)=>($(),D(R,{label:"Active",code:cB},{description:i(()=>[n(" A section can be active ")]),example:i(()=>[t(c(Kt),null,{default:i(()=>[t(c(it),{link:""},{default:i(()=>[n("Products")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},mB=y("br",null,null,-1),pB=`<template>
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
</template>`,fB={__name:"InvertedDoc",setup(e){return(a,l)=>($(),D(R,{label:"Inverted",code:pB},{description:i(()=>[n(" A breadcrumb can be inverted ")]),example:i(()=>[t(c(Te),{inverted:""},{default:i(()=>[t(c(Kt),{inverted:""},{default:i(()=>[t(c(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1}),mB,t(c(Kt),{inverted:""},{default:i(()=>[t(c(it),null,{default:i(()=>[n("Home")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),null,{default:i(()=>[n("Registration")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},gB=`<template>
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
</template>`,hB={__name:"SizeDoc",setup(e){const a=["mini","tiny","small","large","big","huge","massive"];return(l,o)=>($(),D(R,{label:"Size",code:gB},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[($(),he(Ce,null,et(a,r=>($(),he(Ce,{key:r},[t(c(Kt),{size:r},{default:i(()=>[t(c(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(c(kt),null,{default:i(()=>[n(" / ")]),_:1}),t(c(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(c(Ve),{hidden:""})],64))),64))]),_:1}))}},_B={__name:"Breadcrumb",setup(e){const a=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:iB},{id:"divider",label:"Divider",category:"Content",component:lB},{id:"section",label:"Section",category:"Content",component:oB},{id:"link",label:"Link",category:"Content",component:uB},{id:"active",label:"Active",category:"States",component:dB},{id:"inverted",label:"Inverted",category:"Variations",component:fB},{id:"size",label:"Size",category:"Variations",component:hB}];return(l,o)=>($(),D(ft,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":a}))}},bB=`<template>
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
</template>`,vB={__name:"FormDoc",setup(e){return(a,l)=>($(),D(R,{label:"Form",code:bB},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(c(Et),null,{default:i(()=>[t(c(at),{label:"First Name",placeholder:"First Name"}),t(c(at),{label:"Last Name",placeholder:"Last Name"}),t(c(at),null,{default:i(()=>[t(c(Ho),{label:"I agree to the Terms and Conditions"})]),_:1}),t(c(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},yB=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,SB={__name:"FieldDoc",setup(e){return(a,l)=>($(),D(R,{label:"Field",code:yB},{description:i(()=>[n(" A field is a form element containing a label and an input ")]),example:i(()=>[t(c(Et),null,{default:i(()=>[t(c(at),{label:"User Input"})]),_:1})]),_:1}))}},wB=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,CB={__name:"FieldsDoc",setup(e){return(a,l)=>($(),D(R,{label:"Fields",code:wB},{description:i(()=>[n(" A set of fields can appear grouped together ")]),example:i(()=>[t(c(Et),null,{default:i(()=>[t(c(Ql),null,{default:i(()=>[t(c(at),{label:"First Name"}),t(c(at),{label:"Middle Name"}),t(c(at),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},AB=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,kB={__name:"TextAreaDoc",setup(e){return(a,l)=>($(),D(R,{label:"TextArea",code:AB},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(c(Et),null,{default:i(()=>[t(c(Zl),{label:"Text"}),t(c(Zl),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},xB=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,$B={__name:"LoadingDoc",setup(e){return(a,l)=>($(),D(R,{label:"Loading",code:xB},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(c(Et),{loading:""},{default:i(()=>[t(c(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(c(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},BB=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,TB={__name:"SuccessDoc",setup(e){return(a,l)=>($(),D(R,{label:"Success",code:BB},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(c(Et),{success:""},{default:i(()=>[t(c(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(c(ul),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(c(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},LB=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,DB={__name:"ErrorDoc",setup(e){return(a,l)=>($(),D(R,{label:"Error",code:LB},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(c(Et),{error:""},{default:i(()=>[t(c(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(c(ul),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(c(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},IB=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,RB={__name:"WarningDoc",setup(e){return(a,l)=>($(),D(R,{label:"Warning",code:IB},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(c(Et),{warning:""},{default:i(()=>[t(c(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(c(ul),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(c(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},EB=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,zB={__name:"DisabledDoc",setup(e){return(a,l)=>($(),D(R,{label:"Disabled",code:EB},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(c(Et),null,{default:i(()=>[t(c(Ql),null,{default:i(()=>[t(c(at),{disabled:"",label:"First name",placeholder:"Read only"}),t(c(at),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},FB={__name:"Form",setup(e){const a=[{id:"form",label:"Form",category:"Types",component:vB},{id:"field",label:"Field",category:"Content",component:SB},{id:"fields",label:"Fields",category:"Content",component:CB},{id:"textarea",label:"TextArea",category:"Content",component:kB},{id:"loading",label:"Loading",category:"Form States",component:$B},{id:"success",label:"Success",category:"Form States",component:TB},{id:"error",label:"Error",category:"Form States",component:DB},{id:"warning",label:"Warning",category:"Form States",component:RB},{id:"disabled",label:"Disabled",category:"Field States",component:zB}];return(l,o)=>($(),D(ft,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":a}))}},PB=z({name:"DocPageHeader",props:{title:String,sub:String}}),MB={class:"intro",style:{padding:"2rem"}};function VB(e,a,l,o,r,d){const p=S("sui-header-subheader"),f=S("sui-header"),s=S("sui-divider"),u=S("sui-icon"),g=S("sui-menu-item"),m=S("sui-menu"),h=S("sui-container"),v=S("sui-segment");return $(),D(v,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[y("div",MB,[t(f,{as:"h1"},{default:i(()=>[n(Be(e.title)+" ",1),t(p,null,{default:i(()=>[n(Be(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const tt=Le(PB,[["render",VB]]),ce="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",yc="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",HB=z({name:"GridDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),NB=y("br",null,null,-1);function OB(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-image"),u=S("sui-grid-column"),g=S("sui-grid"),m=S("doc-example"),h=S("sui-grid-row"),v=S("sui-segment"),b=S("sui-divider"),C=S("sui-menu-item"),k=S("sui-menu"),T=S("sui-container");return $(),he("div",null,[t(p,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(m,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[($(!0),he(Ce,null,et(e.numbers,_=>($(),D(u,{key:_},{default:i(()=>[t(s,{src:ce})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(m,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:yc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,{width:13},{default:i(()=>[t(s,{src:yc})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{width:3},{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{floated:"left",width:5},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{floated:"right",width:5},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{width:4},{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,{width:9},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{width:3},{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,{width:8},{default:i(()=>[t(v,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("1")]),_:1}),t(v,null,{default:i(()=>[n("2")]),_:1}),t(v,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[y("div",null,[t(b),t(g,{padded:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(u,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(C,null,{default:i(()=>[n("Poodle")]),_:1}),t(C,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(k,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce}),NB,t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(u,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(u,{only:"computer"},{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,{only:"mobile"},{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(v,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const jB=Le(HB,[["render",OB]]),GB="/vue-fomantic-ui/images/logo.png",qB=z({name:"MenuDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),UB=y("p",null,"Check out our new promotions",-1),YB=y("p",null,"Check out our collection of coupons",-1),JB=y("p",null,"Visit our rebate forum for information on claiming rebates",-1),WB=y("img",{src:GB},null,-1);function KB(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-menu-item"),u=S("sui-menu"),g=S("doc-example"),m=S("sui-input"),h=S("sui-menu-menu"),v=S("sui-label"),b=S("sui-button"),C=S("sui-dropdown-item"),k=S("sui-dropdown-menu"),T=S("sui-dropdown"),_=S("sui-icon"),w=S("sui-segment"),x=S("sui-container");return $(),he("div",null,[t(p,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Editorials")]),_:1}),t(s,null,{default:i(()=>[n("Reviews")]),_:1}),t(s,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(u,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(s,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(s,null,{default:i(()=>[n("Most Comments")]),_:1}),t(s,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(v,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Spam "),t(v,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Updates "),t(v,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(u,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(s,null,{default:i(()=>[n("10")]),_:1}),t(s,null,{default:i(()=>[n("11")]),_:1}),t(s,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(s,null,{default:i(()=>[n("About us")]),_:1}),t(s,null,{default:i(()=>[n("Jobs")]),_:1}),t(s,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),UB]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),YB]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),JB]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(m,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(T,{item:"",text:"Categories"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Browse")]),_:1}),t(s,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[n("Sign up")]),_:1}),t(s,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(u,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Search")]),_:1}),t(s,null,{default:i(()=>[n("Add")]),_:1}),t(s,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"grid layout"}),n(" Browse ")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(T,{item:"",text:"More"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[n("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(u,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[WB]),_:1}),t(s,null,{default:i(()=>[n("Features")]),_:1}),t(s,null,{default:i(()=>[n("Testimonials")]),_:1}),t(s,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(u,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Run")]),_:1}),t(s,null,{default:i(()=>[n("Walk")]),_:1}),t(s,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(u,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[n("Buy")]),_:1}),t(s,null,{default:i(()=>[n("Sell")]),_:1}),t(s,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[y("div",null,[t(u,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(s,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(w,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(u,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(T,{item:"",text:"Language"},{default:i(()=>[t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[n("English")]),_:1}),t(C,null,{default:i(()=>[n("Russian")]),_:1}),t(C,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(u,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[n("1")]),_:1}),t(s,null,{default:i(()=>[n("2")]),_:1}),t(s,null,{default:i(()=>[n("3")]),_:1}),t(s,null,{default:i(()=>[n("4")]),_:1}),t(s,null,{default:i(()=>[n("5")]),_:1}),t(s,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const XB=Le(qB,[["render",KB]]),QB=z({name:"MessageDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),ZB=y("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),eT=y("p",null,"Get the best news in your e-mail every day.",-1),tT=y("p",null,"You can't see me",-1),iT=y("p",null,"You can always see me",-1),aT=y("p",null,"Way to go!",-1),lT=y("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),nT=y("a",{href:"#"},"Login here",-1),oT=y("p",null,[n("Go to your "),y("b",null,"special offers"),n(" page to see now.")],-1),sT=y("p",null,"That offer has expired",-1);function rT(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-message-header"),u=S("sui-message"),g=S("doc-example"),m=S("sui-message-item"),h=S("sui-message-list"),v=S("sui-icon"),b=S("sui-message-content"),C=S("sui-form-field"),k=S("sui-form-group"),T=S("sui-button"),_=S("sui-form"),w=S("sui-container");return $(),he("div",null,[t(p,{title:"Message",sub:"A message displays information that explains nearby content"}),t(w,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Changes in Service")]),_:1}),ZB]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(m,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(u,{icon:""},{default:i(()=>[t(v,{name:"inbox"}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),eT]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(u,{hidden:""},{default:i(()=>[tT]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(u,{visible:""},{default:i(()=>[iT]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(u,{floating:""},{default:i(()=>[aT]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(u,{compact:""},{default:i(()=>[lT]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[y("div",null,[t(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t(k,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(T,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(u,{attached:"bottom",warning:""},{default:i(()=>[t(v,{name:"help"}),n(" Already signed up? "),nT,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(u,{warning:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(u,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(u,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),oT]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(u,{negative:""},{default:i(()=>[t(v,{name:"close"}),t(s,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),sT]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[y("div",null,[t(u,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[y("div",null,[t(u,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(u,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(u,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const uT=Le(QB,[["render",rT]]),cT=z({name:"TableDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),dT=y("a",{href:"#"},"Edit",-1),mT=y("a",{href:"#"},"Edit",-1),pT=y("a",{href:"#"},"Edit",-1),fT=y("br",null,null,-1),gT=y("br",null,null,-1),hT=y("br",null,null,-1),_T=y("br",null,null,-1),bT=y("br",null,null,-1),vT=y("br",null,null,-1),yT=y("br",null,null,-1);function ST(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-table-header-cell"),u=S("sui-table-row"),g=S("sui-table-header"),m=S("sui-table-cell"),h=S("sui-table-body"),v=S("sui-table"),b=S("doc-example"),C=S("sui-icon"),k=S("sui-table-footer"),T=S("sui-container");return $(),he("div",null,[t(p,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("James")]),_:1}),t(m,null,{default:i(()=>[n("24")]),_:1}),t(m,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("26")]),_:1}),t(m,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Elyse")]),_:1}),t(m,null,{default:i(()=>[n("24")]),_:1}),t(m,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(v,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[n("Arguments")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("reset rating")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1}),t(m,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("set rating")]),_:1}),t(m,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(m,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(v,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Ruby")]),_:1}),t(s,null,{default:i(()=>[n("Javascript")]),_:1}),t(s,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(m,null,{default:i(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(u,null,{default:i(()=>[t(m,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(m,null,{default:i(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Project 2")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(m),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m)]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Project 3")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(b,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{positive:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"checkmark"}),n(" Approved ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{positive:""},{default:i(()=>[t(C,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(u,{negative:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{error:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{error:""},{default:i(()=>[t(C,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"attention"}),n(" Requires Action ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{warning:""},{default:i(()=>[t(C,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{active:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Selected")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{disabled:""},{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Selected")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{color:"blue"},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(m,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(v,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Registration Date")]),_:1}),t(s,null,{default:i(()=>[n("E-mail address")]),_:1}),t(s,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John Lilki")]),_:1}),t(m,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(v,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(v,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(v,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[dT]),_:1})]),_:1}),t(u,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[mT]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(m,{selectable:""},{default:i(()=>[pT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{verticalAlign:"top"},{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),fT,n(" 1"),gT,n(" 2"),hT]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n(" Notes "),_T,n(" 1"),bT,n(" 2"),vT]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(v,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Date Joined")]),_:1}),t(s,null,{default:i(()=>[n("E-mail")]),_:1}),t(s,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John Lilki")]),_:1}),t(m,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(v,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("3 People")]),_:1}),t(m,null,{default:i(()=>[n("2 Approved")]),_:1}),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[y("div",null,[t(v,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),yT,t(v,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(v,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("27")]),_:1}),t(m,null,{default:i(()=>[n("Male")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("32")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("22")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(v,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("27")]),_:1}),t(m,null,{default:i(()=>[n("Male")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("32")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("22")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(v,null,{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[n("Name")]),_:1}),t(s,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(v,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Apples")]),_:1}),t(m,null,{default:i(()=>[n("200")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Orange")]),_:1}),t(m,null,{default:i(()=>[n("310")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(v,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Apples")]),_:1}),t(m,null,{default:i(()=>[n("200")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Orange")]),_:1}),t(m,null,{default:i(()=>[n("310")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[y("div",null,[t(v,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[y("div",null,[t(v,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(v,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(u,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(u,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const wT=Le(cT,[["render",ST]]),CT=z({name:"AdvertisementDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),AT=y("img",{src:ce},null,-1),kT=y("br",null,null,-1);function xT(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-advertisement"),u=S("doc-example"),g=S("sui-container");return $(),he("div",null,[t(p,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[AT]),_:1})]),_:1},8,["code"]),t(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[y("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[y("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(u,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[y("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[y("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),kT,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(u,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[y("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[y("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const $T=Le(CT,[["render",xT]]),Sc="/vue-fomantic-ui/images/avatar/large/kristy.png",BT="/vue-fomantic-ui/images/avatar/large/daniel.jpg",oo="/vue-fomantic-ui/images/avatar/large/helen.jpg",so="/vue-fomantic-ui/images/avatar/large/elliot.jpg",ro="/vue-fomantic-ui/images/avatar/large/elyse.png",TT="/vue-fomantic-ui/images/avatar/large/matthew.png",LT="/vue-fomantic-ui/images/avatar/large/molly.png",Il="/vue-fomantic-ui/images/wireframe/white-image.png",wc="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Cc="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Ac="/vue-fomantic-ui/images/avatar/large/stevie.jpg",kc="/vue-fomantic-ui/images/avatar/large/steve.jpg",DT=z({name:"CardDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),IT=y("span",{class:"date"},"Joined in 2013",-1),RT=y("a",null,"Elliot Fu",-1),ET=y("a",null,"Jenny Hess",-1),zT=y("a",null,"Stevie Feliciano",-1),FT=y("a",null,"Administrator",-1),PT=y("a",null,"Helen Troy",-1),MT=y("span",{class:"date"},"Joined in 2013",-1),VT=y("span",null,"2 days ago",-1),HT=y("a",null,"Animals",-1),NT=y("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),OT=y("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),jT=y("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),GT=y("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),qT=y("span",{class:"category"},"Animals",-1),UT=y("span",{class:"category"},"Animals",-1),YT=y("div",{class:"right floated author"},[y("img",{class:"ui avatar image",src:zn}),n(" Matt ")],-1),JT=y("span",{class:"category"},"Animals",-1),WT=y("div",{class:"right floated author"},[y("img",{class:"ui avatar image",src:zn}),n(" Matt ")],-1),KT=y("p",null,"Jenny is a student studying Media Management at the New School",-1),XT=y("div",{class:"center aligned author"},[y("img",{class:"ui avatar image",src:En}),n(" Jenny ")],-1),QT=y("a",null,"Friends",-1),ZT=y("span",{class:"right floated"}," Joined in 2013 ",-1),e2=y("a",null,[y("i",{class:"user icon"}),n(" 75 Friends ")],-1),t2=y("a",null,"Coworker",-1),i2=y("span",{class:"right floated"}," Joined in 2011 ",-1),a2=y("a",null,[y("i",{class:"user icon"}),n(" 35 Friends ")],-1),l2=y("a",null,"Coworker",-1),n2=y("span",{class:"right floated"}," Joined in 2014 ",-1),o2=y("a",null,[y("i",{class:"user icon"}),n(" 151 Friends ")],-1);function s2(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-image"),u=S("sui-card-header"),g=S("sui-card-meta"),m=S("sui-card-description"),h=S("sui-card-content"),v=S("sui-icon"),b=S("sui-card"),C=S("doc-example"),k=S("sui-button"),T=S("sui-button-group"),_=S("sui-card-group"),w=S("sui-feed-summary"),x=S("sui-feed-content"),B=S("sui-feed-event"),I=S("sui-feed"),M=S("sui-grid-column"),V=S("sui-grid"),P=S("sui-segment"),j=S("sui-container");return $(),he("div",null,[t(p,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Sc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[IT]),_:1}),t(m,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[y("a",null,[t(v,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:ni,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(m,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(T,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:En,floated:"right",size:"mini"}),t(u,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("New Member")]),_:1}),t(m,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(T,{widths:2},{default:i(()=>[t(k,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t(k,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(I,{size:"small"},{default:i(()=>[t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[RT,n(" added "),ET,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[zT,n(" was added as an "),FT]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[PT,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(k,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Sc,wrapped:""}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[MT]),_:1}),t(m,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[y("a",null,[t(v,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[VT,HT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(m,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(m,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t(k,{attached:"bottom"},{default:i(()=>[t(v,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[NT,OT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[jT,GT]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(v,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(V,{columns:3},{default:i(()=>[t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:BT}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:oo}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(M,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:so}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(b,{centered:""},{default:i(()=>[t(s,{src:ro}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(b,{horizontal:""},{default:i(()=>[t(s,{src:ro}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[qT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(b,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[UT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[YT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(b,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[JT]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[WT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(u,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[KT]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[XT]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(P,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:TT}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[QT]),_:1}),t(m,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[ZT,e2]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:LT}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Molly")]),_:1}),t(g,null,{default:i(()=>[t2]),_:1}),t(m,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[i2,a2]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ro}),t(h,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elyse")]),_:1}),t(g,null,{default:i(()=>[l2]),_:1}),t(m,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[n2,o2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"red",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ce})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:ce})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:so})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:oo})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:wc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Cc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Ac})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:so})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:oo})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:wc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Cc})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Ac})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:kc})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const r2=Le(DT,[["render",s2]]),u2=z({name:"CommentDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),c2=y("span",null,"Today at 5:42PM",-1),d2=y("a",null,"Reply",-1),m2=y("span",null,"Yesterday at 12:30AM",-1),p2=y("a",null,"Reply",-1),f2={class:"comments"},g2=y("span",null,"Just now",-1),h2=y("a",null,"Reply",-1),_2=y("span",null,"5 days ago",-1),b2=y("a",null,"Reply",-1),v2=y("div",{class:"date"},"2 days ago",-1),y2=y("div",{class:"rating"},[y("i",{class:"star icon"}),n(" 5 Faves ")],-1),S2=y("a",null,"Reply",-1),w2=y("a",null,"Save",-1),C2=y("a",null,"Hide",-1),A2=y("a",null,[y("i",{class:"expand icon"}),n(" Full-screen ")],-1),k2=y("a",null,"Reply",-1),x2=y("a",null,"Reply",-1),$2=y("a",null,"Replay",-1),B2=y("span",null,"Today at 5:42PM",-1),T2=y("a",{href:"#"},"Replay",-1),L2=y("span",null,"Yesterday at 12:30AM",-1),D2=y("a",{href:"#"},"Replay",-1),I2=y("span",null,"Just now",-1),R2=y("a",{href:"#"},"Replay",-1),E2=y("span",null,"5 days ago",-1),z2=y("a",{href:"#"},"Replay",-1),F2=y("span",null,"Today at 5:42PM",-1),P2=y("a",{href:"#"},"Replay",-1),M2=y("span",null,"Yesterday at 12:30AM",-1),V2=y("a",{href:"#"},"Replay",-1),H2=y("span",null,"Just now",-1),N2=y("a",{href:"#"},"Replay",-1),O2=y("span",null,"5 days ago",-1),j2=y("a",{href:"#"},"Replay",-1),G2=y("span",null,"Today at 5:42PM",-1),q2=y("a",{href:"#"},"Replay",-1),U2=y("span",null,"Yesterday at 12:30AM",-1),Y2=y("a",{href:"#"},"Replay",-1),J2=y("span",null,"Just now",-1),W2=y("a",{href:"#"},"Replay",-1),K2=y("span",null,"5 days ago",-1),X2=y("a",{href:"#"},"Replay",-1),Q2=y("span",null,"Today at 5:42PM",-1),Z2=y("a",{href:"#"},"Replay",-1),eL=y("span",null,"Yesterday at 12:30AM",-1),tL=y("a",{href:"#"},"Replay",-1),iL=y("span",null,"Just now",-1),aL=y("a",{href:"#"},"Replay",-1),lL=y("span",null,"5 days ago",-1),nL=y("a",{href:"#"},"Replay",-1);function oL(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-comment-avatar"),u=S("sui-comment-author"),g=S("sui-comment-metadata"),m=S("sui-comment-text"),h=S("sui-comment-actions"),v=S("sui-comment-content"),b=S("sui-comment"),C=S("sui-comment-group"),k=S("doc-example"),T=S("sui-form-textarea"),_=S("sui-icon"),w=S("sui-button"),x=S("sui-form"),B=S("sui-segment"),I=S("sui-container");return $(),he("div",null,[t(p,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[c2]),_:1}),t(m,null,{default:i(()=>[n("How artistic!")]),_:1}),t(h,null,{default:i(()=>[d2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[m2]),_:1}),t(m,null,{default:i(()=>[n("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[p2]),_:1})]),_:1}),y("div",f2,[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[g2]),_:1}),t(m,null,{default:i(()=>[n("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[h2]),_:1})]),_:1})]),_:1})])]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[_2]),_:1}),t(m,null,{default:i(()=>[n("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[b2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(g,null,{default:i(()=>[v2,y2]),_:1}),t(m,null,{default:i(()=>[n(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Tom Lukic")]),_:1}),t(m,null,{default:i(()=>[n(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[S2,w2,C2,A2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Steve Jobs")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[n("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[k2]),_:1}),t(x,{reply:""},{default:i(()=>[t(T),t(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),n(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(k,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Christian Rocha")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[n(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[x2]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("1 days ago")]),_:1}),t(m,null,{default:i(()=>[n("No, it wont")]),_:1}),t(h,null,{default:i(()=>[$2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[B2]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[T2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[L2]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[D2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[I2]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[R2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[E2]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[z2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[F2]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[P2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[M2]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[V2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[H2]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[N2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[O2]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[j2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[G2]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[q2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[U2]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[Y2]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[J2]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[W2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[K2]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[X2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{as:"h3",inverted:"",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[Q2]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[Z2]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[eL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[tL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[iL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[aL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(v,null,{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[lL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[nL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const sL=Le(u2,[["render",oL]]),rL=z({name:"FeedDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),uL=y("img",{src:ni},null,-1),cL=y("img",{src:ni},null,-1),dL=y("a",null,"Coworkers",-1),mL=y("img",{src:En},null,-1),pL=y("a",null,"Jenny Hess",-1),fL=y("a",null,"coworker",-1),gL=y("img",{src:ja},null,-1),hL=y("a",null,"Helen Troy",-1),_L=y("a",null,[y("img",{src:ce})],-1),bL=y("a",null,[y("img",{src:ce})],-1),vL=y("a",null,"Elliot Fu",-1),yL=y("a",null,"Jenny Hess",-1),SL=y("a",null,"Stevie Feliciano",-1),wL=y("a",null,"Elliot Fu",-1),CL=y("a",null,"Helen Troy",-1),AL=y("a",null,"Christian Rocha",-1),kL=y("img",{src:ni},null,-1),xL=y("div",{class:"date"},"Just now",-1),$L=y("a",{class:"user"},"Elliot Fu",-1);function BL(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-feed-label"),u=S("sui-feed-user"),g=S("sui-feed-date"),m=S("sui-feed-summary"),h=S("sui-icon"),v=S("sui-feed-like"),b=S("sui-feed-meta"),C=S("sui-feed-content"),k=S("sui-feed-event"),T=S("sui-feed"),_=S("doc-example"),w=S("sui-feed-extra"),x=S("sui-segment"),B=S("sui-container");return $(),he("div",null,[t(p,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(B,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[uL]),_:1}),t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[cL]),_:1}),t(C,null,{default:i(()=>[n(" You added Elliot Fu to the group "),dL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[mL]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[n(" You added "),pL,n(" to your "),fL,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(T,null,{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[gL]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[hL,n(" added 2 photos ")]),_:1}),t(w,{images:""},{default:i(()=>[_L,bL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(T,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[vL,n(" added "),yL,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[SL,n(" added "),wL,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[CL,n(" added "),AL,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(k,null,{default:i(()=>[t(s,null,{default:i(()=>[kL]),_:1}),t(C,null,{default:i(()=>[xL,t(m,null,{default:i(()=>[$L,n(" posted on his page ")]),_:1}),t(w,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const TL=Le(rL,[["render",BL]]),LL=z({name:"ItemDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),DL=y("img",{src:ce},null,-1),IL=y("span",null,"Description",-1),RL=y("img",{src:nt},null,-1),EL=y("img",{src:ce},null,-1),zL=y("span",null,"Description",-1),FL=y("img",{src:nt},null,-1),PL=y("img",{src:ce},null,-1),ML=y("img",{src:ce},null,-1),VL=y("img",{src:ce},null,-1),HL=y("img",{src:ce},null,-1),NL=y("img",{src:ce},null,-1),OL=y("img",{src:ce},null,-1),jL=y("img",{src:ce},null,-1),GL=y("span",{class:"price"},"$1200",-1),qL=y("span",{class:"stay"},"1 Month",-1),UL=y("img",{src:nt},null,-1),YL=y("span",{class:"price"},"$1000",-1),JL=y("span",{class:"stay"},"2 Weeks",-1),WL=y("img",{src:nt},null,-1),KL=y("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),XL=y("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),QL=y("img",{src:nt},null,-1),ZL=y("img",{src:ce},null,-1),eD=y("span",{class:"cinema"},"Union Square 14",-1),tD=y("img",{src:nt},null,-1),iD=y("img",{src:ce},null,-1),aD=y("span",{class:"cinema"},"IFC Cinema",-1),lD=y("img",{src:nt},null,-1),nD=y("img",{src:ce},null,-1),oD=y("span",{class:"cinema"},"IFC",-1),sD=y("img",{src:nt},null,-1),rD=y("img",{src:nt},null,-1),uD=y("img",{src:nt},null,-1),cD=y("img",{src:nt},null,-1),dD=y("span",{class:"price"},"$1200",-1),mD=y("span",{class:"stay"},"1 Month",-1),pD=y("img",{src:nt},null,-1),fD=y("span",{class:"price"},"$1000",-1),gD=y("span",{class:"stay"},"2 Weeks",-1),hD=y("img",{src:nt},null,-1);function _D(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-item-image"),u=S("sui-item-header"),g=S("sui-item-meta"),m=S("sui-item-description"),h=S("sui-item-extra"),v=S("sui-item-content"),b=S("sui-item"),C=S("sui-item-group"),k=S("doc-example"),T=S("sui-image"),_=S("sui-icon"),w=S("sui-label"),x=S("sui-button"),B=S("sui-segment"),I=S("sui-container");return $(),he("div",null,[t(p,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[DL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[IL]),_:1}),t(m,null,{default:i(()=>[RL]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[EL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[zL]),_:1}),t(m,null,{default:i(()=>[FL]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(k,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[PL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[ML]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[VL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[HL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[NL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[OL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[jL]),_:1}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[GL,qL]),_:1}),t(m,null,{default:i(()=>[UL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[YL,JL]),_:1}),t(m,null,{default:i(()=>[WL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[KL,XL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[QL]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(k,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[ZL]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[eD]),_:1}),t(m,null,{default:i(()=>[tD]),_:1}),t(h,null,{default:i(()=>[t(w,null,{default:i(()=>[n("IMAX")]),_:1}),t(w,null,{default:i(()=>[t(_,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[iD]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[aD]),_:1}),t(m,null,{default:i(()=>[lD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(w,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[nD]),_:1}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[oD]),_:1}),t(m,null,{default:i(()=>[sD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"tiny",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"tiny",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"tiny",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,{verticalAlign:"bottom"},{default:i(()=>[t(u,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content A")]),_:1}),t(m,null,{default:i(()=>[rD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content B")]),_:1}),t(m,null,{default:i(()=>[uD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,{verticalAlign:"middle"},{default:i(()=>[t(u,null,{default:i(()=>[n("Content C")]),_:1}),t(m,null,{default:i(()=>[cD]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(k,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(B,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[dD,mD]),_:1}),t(m,null,{default:i(()=>[pD]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{size:"small",src:ce}),t(v,null,{default:i(()=>[t(u,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[fD,gD]),_:1}),t(m,null,{default:i(()=>[hD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const bD=Le(LL,[["render",_D]]),vD=z({name:"StatisticDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),yD=y("br",null,null,-1),SD=y("br",null,null,-1),wD=y("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),CD=y("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),AD=y("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),kD=y("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function xD(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-statistic"),u=S("doc-example"),g=S("sui-statistic-group"),m=S("sui-statistic-value"),h=S("sui-statistic-label"),v=S("sui-icon"),b=S("sui-image"),C=S("sui-segment"),k=S("sui-container");return $(),he("div",null,[t(p,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(u,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[n(" Three"),yD,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(v,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Wo}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(g,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(g,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[n(" Three"),SD,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(v,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Wo}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),wD,CD,t(s,{floated:"left",value:"2,204",label:"Views"}),AD,kD]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const $D=Le(vD,[["render",xD]]),BD=z({name:"AccordionDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),TD=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),LD=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),DD=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),ID=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),RD=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),ED=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),zD=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),FD=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),PD=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),MD=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),VD=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),HD=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),ND=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),OD=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),jD=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),GD=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),qD=y("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),UD=y("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),YD=y("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),JD=y("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function WD(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-accordion-tab"),u=S("sui-accordion"),g=S("doc-example"),m=S("sui-segment"),h=S("sui-container");return $(),he("div",null,[t(p,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[TD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[LD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[DD,ID]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(u,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[RD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[ED]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[zD,FD]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(u,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[PD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[MD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[VD,HD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(m,{inverted:""},{default:i(()=>[t(u,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[ND]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[OD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[jD,GD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(u,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[qD]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[UD]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[YD,JD]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const KD=Le(BD,[["render",WD]]),XD=z({name:"CalendarDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function QD(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-calendar"),u=S("doc-example"),g=S("sui-container");return $(),he("div",null,[t(p,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=m=>e.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const ZD=Le(XD,[["render",QD]]),eI=z({name:"PropertyListTable",props:{properties:Array}});function tI(e,a,l,o,r,d){const p=S("sui-table-header-cell"),f=S("sui-table-row"),s=S("sui-table-header"),u=S("sui-table-cell"),g=S("sui-table-body"),m=S("sui-table");return $(),D(m,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[($(!0),he(Ce,null,et(e.properties,h=>($(),D(f,{key:h.name},{default:i(()=>[t(u,null,{default:i(()=>[n(Be(h.name),1)]),_:2},1024),t(u,null,{default:i(()=>[n(Be(h.type),1)]),_:2},1024),t(u,null,{default:i(()=>[n(Be(h.default),1)]),_:2},1024),t(u,null,{default:i(()=>[n(Be(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Fn=Le(eI,[["render",tI]]),iI=z({name:"CheckboxDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Fn},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=G(!1),d='<sui-checkbox toggle v-model="toggle" />',p=G(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:o,toggle:r,toggleCode:d,slider:p,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),aI={class:"ui form"},lI={class:"grouped fields"},nI={class:"field"},oI={class:"field"},sI={class:"field"};function rI(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-checkbox"),u=S("doc-example"),g=S("property-list-table"),m=S("sui-table-header-cell"),h=S("sui-table-row"),v=S("sui-table-header"),b=S("sui-table-cell"),C=S("sui-table-body"),k=S("sui-table"),T=S("sui-container");return $(),he("div",null,[t(p,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[y("div",aI,[y("div",lI,[y("div",nI,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),y("div",oI,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),y("div",sI,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),n(" selected : "+Be(e.selected),1)]),_:1},8,["code"]),t(u,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Be(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const uI=Le(iI,[["render",rI]]),cI=z({name:"DimmerDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function dI(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-image"),u=S("sui-image-group"),g=S("sui-dimmer"),m=S("sui-dimmer-dimmable"),h=S("doc-example"),v=S("sui-icon"),b=S("sui-button"),C=S("sui-header-subheader"),k=S("sui-container");return $(),he("div",null,[t(p,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t(k,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ce}),t(s,{src:ce}),t(s,{src:ce})]),_:1}),t(s,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(u,{size:"small"},{default:i(()=>[t(s,{src:ce}),t(s,{src:ce}),t(s,{src:ce})]),_:1}),t(s,{size:"medium",src:ei}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[y("div",null,[t(b,{labeled:"",icon:"",onClick:a[0]||(a[0]=T=>e.active=!0)},{default:i(()=>[t(v,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=T=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(v,{name:"heart"}),n(" Dimmed Message! "),t(C,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const mI=Le(cI,[["render",dI]]),pI=z({name:"DropdownDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=`<sui-dropdown text="File">
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
/>`,u=G(null),g=`<sui-dropdown
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
/>`,v=G(null),b=`<sui-dropdown
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
/>`,C=G(null),k=`<sui-dropdown
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
/>`,T=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:l,selected2:o,searchSelectionOptions:r,searchSelectionCode:d,selected3:p,clearableSelectionOptions:f,clearableSelectionCode:s,selected4:u,multipleCode:g,selected5:m,multipleCode2:h,selected6:v,searchDropdownCode:b,selected7:C,searchInMenuCode:k,selected8:T,inlineCode:`<span>
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
</sui-button-group>`}}});function fI(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-dropdown-item"),u=S("sui-divider"),g=S("sui-dropdown-menu"),m=S("sui-dropdown"),h=S("doc-example"),v=S("sui-button"),b=S("sui-button-group"),C=S("sui-container");return $(),he("div",null,[t(p,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(m,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(u),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(m,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=k=>e.selected1=k),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(m,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=k=>e.selected2=k),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(m,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=k=>e.selected3=k),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=k=>e.selected4=k),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=k=>e.selected5=k),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=k=>e.selected6=k),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=k=>e.selected7=k),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[y("span",null,[n(" Show me posts by "),t(m,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=k=>e.selected8=k),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(m,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(b,{color:"teal"},{default:i(()=>[t(v,null,{default:i(()=>[n("Save")]),_:1}),t(m,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const gI=Le(pI,[["render",fI]]),hI=z({name:"EmbedDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function _I(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-embed"),u=S("doc-example"),g=S("sui-container");return $(),he("div",null,[t(p,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const bI=Le(hI,[["render",_I]]),vI=y("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),yI=y("p",null,"Is it okay to use this photo?",-1),SI=`<template>
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
<\/script>`,wI={__name:"ModalDoc",setup(e){const a=G(!1);return(l,o)=>($(),D(R,{label:"Modal",code:SI},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(c(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(c(nn),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(c(rn),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(c(sn),{image:""},{default:i(()=>[t(c(ne),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(c(jo),null,{default:i(()=>[t(c(fe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),vI,yI]),_:1})]),_:1}),t(c(on),null,{default:i(()=>[t(c(F),{positive:"",onClick:o[1]||(o[1]=r=>a.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},CI=y("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),AI=`<template>
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
<\/script>`,kI={__name:"BasicDoc",setup(e){const a=G(!1);return(l,o)=>($(),D(R,{label:"Basic",code:AI},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(c(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(c(nn),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(c(rn),{icon:""},{default:i(()=>[t(c(W),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(c(sn),null,{default:i(()=>[CI]),_:1}),t(c(on),null,{default:i(()=>[t(c(F),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=r=>a.value=!1)}),t(c(F),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},xI={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:wI},{id:"basic",label:"Basic",category:"Types",component:kI}];return(l,o)=>($(),D(ft,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},$I="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",BI=z({name:"PopupDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
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
</sui-popup>`,s=G(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=G(null),m=G(null),h=G(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,b=G(null),C=G(null),k=G(null),T=G(null),_=G(null),w=G(null),x=G(null),B=G(null),I=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
</sui-popup>`,P=G(null),j=G(null),X=G(null),U=G(null),pe=G(null),$e=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,q=G(null),K=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:o,titledTrigger3:r,titledCode:d,triggerTriger:p,triggerCode:f,basicTrigger:s,basicCode:u,wideTrigger1:g,wideTrigger2:m,wideTrigger3:h,wideCode:v,positionTrigger1:b,positionTrigger2:C,positionTrigger3:k,positionTrigger4:T,positionTrigger5:_,positionTrigger6:w,positionTrigger7:x,positionTrigger8:B,positionCode:I,flowingTrigger:M,flowingCode:V,sizeTrigger1:P,sizeTrigger2:j,sizeTrigger3:X,sizeTrigger4:U,sizeTrigger5:pe,sizeCode:$e,invertedTrigger1:q,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),TI=y("p",null,[y("b",null,"2"),n(" projects, $10 a month ")],-1),LI=y("p",null,[y("b",null,"5"),n(" projects, $20 a month ")],-1),DI=y("p",null,[y("b",null,"8"),n(" projects, $25 a month ")],-1);function II(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-icon"),u=S("sui-button"),g=S("sui-popup"),m=S("doc-example"),h=S("sui-image"),v=S("sui-card-header"),b=S("sui-card-description"),C=S("sui-card-content"),k=S("sui-card"),T=S("sui-rating"),_=S("sui-divider"),w=S("sui-grid-column"),x=S("sui-grid"),B=S("sui-container");return $(),he("div",null,[t(p,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(B,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(m,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:ni,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Ko,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:zn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t(k,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:$I}),t(C,null,{default:i(()=>[t(v,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(b,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(T,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(m,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(u,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(u,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(u,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(u,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(u,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(_),t(u,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(u,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(u,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),TI,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),LI,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(w,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),DI,t(u,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const RI=Le(BI,[["render",II]]),EI=z({name:"ProgressDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function zI(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-progress"),u=S("doc-example"),g=S("sui-segment"),m=S("sui-container");return $(),he("div",null,[t(p,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(m,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(u,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(u,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(u,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(u,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(u,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(u,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(u,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),n(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(u,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const FI=Le(EI,[["render",zI]]),PI=z({name:"RatingDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Fn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),MI=y("br",null,null,-1),VI=y("br",null,null,-1),HI=y("br",null,null,-1),NI=y("br",null,null,-1),OI=y("br",null,null,-1),jI=y("br",null,null,-1),GI=y("br",null,null,-1),qI=y("br",null,null,-1),UI=y("br",null,null,-1),YI=y("br",null,null,-1),JI=y("br",null,null,-1),WI=y("br",null,null,-1),KI=y("br",null,null,-1),XI=y("br",null,null,-1),QI=y("br",null,null,-1),ZI=y("br",null,null,-1),eR=y("br",null,null,-1),tR=y("br",null,null,-1),iR=y("br",null,null,-1),aR=y("br",null,null,-1),lR=y("br",null,null,-1),nR=y("br",null,null,-1),oR=y("br",null,null,-1),sR=y("br",null,null,-1),rR=y("br",null,null,-1),uR=y("br",null,null,-1),cR=y("br",null,null,-1),dR=y("br",null,null,-1),mR=y("br",null,null,-1),pR=y("br",null,null,-1),fR=y("br",null,null,-1),gR=y("br",null,null,-1),hR=y("br",null,null,-1),_R=y("br",null,null,-1),bR=y("br",null,null,-1),vR=y("br",null,null,-1),yR=y("br",null,null,-1),SR=y("br",null,null,-1),wR=y("br",null,null,-1),CR=y("br",null,null,-1),AR=y("br",null,null,-1),kR=y("br",null,null,-1),xR=y("br",null,null,-1),$R=y("br",null,null,-1),BR=y("br",null,null,-1),TR=y("br",null,null,-1),LR=y("br",null,null,-1),DR=y("br",null,null,-1);function IR(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-rating"),u=S("doc-example"),g=S("property-list-table"),m=S("sui-table-header-cell"),h=S("sui-table-row"),v=S("sui-table-header"),b=S("sui-table-cell"),C=S("sui-table-body"),k=S("sui-table"),T=S("sui-container");return $(),he("div",null,[t(p,{title:"Rating",sub:"A rating indicates user interest in content"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),MI,VI,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),HI,NI,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),OI,jI,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),GI,qI,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),UI,YI,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),JI,WI,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),KI,XI,t(s,{defaultRating:2,maxRating:7,color:"orange"}),QI,ZI,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),eR,tR,t(s,{defaultRating:4,maxRating:7,color:"olive"}),iR,aR,t(s,{defaultRating:5,maxRating:7,color:"green"}),lR,nR,t(s,{defaultRating:6,maxRating:7,color:"teal"}),oR,sR,t(s,{defaultRating:6,maxRating:7,color:"blue"}),rR,uR,t(s,{defaultRating:5,maxRating:7,color:"violet"}),cR,dR,t(s,{defaultRating:4,maxRating:7,color:"purple"}),mR,pR,t(s,{defaultRating:3,maxRating:7,color:"pink"}),fR,gR,t(s,{defaultRating:2,maxRating:7,color:"brown"}),hR,_R,t(s,{defaultRating:1,maxRating:7,color:"grey"}),bR,vR,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),yR,SR,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),wR,CR,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),AR,kR,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),xR,$R,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),BR,TR,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),LR,DR,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Be(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const RR=Le(PI,[["render",IR]]),ER=z({name:"SidebarDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Fn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),zR={class:"pusher"};function FR(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-icon"),u=S("sui-button"),g=S("sui-grid-column"),m=S("sui-menu-item"),h=S("sui-sidebar"),v=S("sui-image"),b=S("sui-segment"),C=S("sui-grid"),k=S("doc-example"),T=S("property-list-table"),_=S("sui-table-header-cell"),w=S("sui-table-row"),x=S("sui-table-header"),B=S("sui-table-cell"),I=S("sui-table-body"),M=S("sui-table"),V=S("sui-container");return $(),he("div",null,[t(p,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(V,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(k,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(u,{onClick:a[0]||(a[0]=P=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(b,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(m,null,{default:i(()=>[t(s,{name:"home"}),n(" Home ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"gamepad"}),n(" Games ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),y("div",zR,[t(b,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(v,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(T,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(M,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(w,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,P=>($(),D(w,{key:P.name},{default:i(()=>[t(B,null,{default:i(()=>[n(Be(P.name),1)]),_:2},1024),t(B,null,{default:i(()=>[n(Be(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const PR=Le(ER,[["render",FR]]),MR=z({name:"SliderDoc",components:{DocPageHeader:tt,DocExample:Je},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',l=G(4),o='<sui-slider labeled v-model="slider2" />',r=G(6),d='<sui-slider labeled="ticked" v-model="slider3" />',p=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=G(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),v='<sui-slider disabled v-model="slider7" />',b=G(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,k=G(3),T='<sui-slider reversed v-model="slider9" />',_=G(18),w='<sui-slider vertical v-model="slider10" :max="20" />',x=G(5),B=G(5),I=G(5),M=G(5),V=G(5),P=G(5),j=G(5),X=G(5),U=G(5),pe=G(5),$e=G(5),q=G(5),K=G(5),de=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,De=G(5),We=G(5),st=G(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:o,slider3:r,labeledTickedCode:d,slider4:p,customLabelsCode:f,slider5:s,stepCode:u,slider6:g,rangeCode:m,slider7:h,disabledCode:v,slider8:b,invertedCode:C,slider9:k,reversedCode:T,slider10:_,verticalCode:w,redSlider:x,orangeSlider:B,yellowSlider:I,oliveSlider:M,greenSlider:V,tealSlider:P,blueSlider:j,violetSlider:X,purpleSlider:U,pinkSlider:pe,brownSlider:$e,greySlider:q,blackSlider:K,coloredCode:de,invertedColoredCode:ie,smallSlider:De,largeSlider:We,bigSlider:st,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function VR(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-slider"),u=S("doc-example"),g=S("sui-segment"),m=S("sui-table-header-cell"),h=S("sui-table-row"),v=S("sui-table-header"),b=S("sui-table-cell"),C=S("sui-table-body"),k=S("sui-table"),T=S("sui-container");return $(),he("div",null,[t(p,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(u,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),n(" "+Be(e.slider1),1)]),_:1},8,["code"]),t(u,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Be(e.slider5),1)]),_:1},8,["code"]),t(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Be(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(u,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),n(" "+Be(e.slider9),1)]),_:1},8,["code"]),t(u,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),n(" "+Be(e.slider10),1)]),_:1},8,["code"]),t(u,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(u,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.properties,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Be(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Be(_.type),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Be(_.default),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(k,{celled:""},{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,_=>($(),D(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Be(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Be(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const HR=Le(MR,[["render",VR]]),NR=z({name:"TabDoc",components:{DocPageHeader:tt,DocExample:Je,PropertyListTable:Fn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function OR(e,a,l,o,r,d){const p=S("doc-page-header"),f=S("sui-header"),s=S("sui-tab-panel"),u=S("sui-tab"),g=S("doc-example"),m=S("property-list-table"),h=S("sui-table-header-cell"),v=S("sui-table-row"),b=S("sui-table-header"),C=S("sui-table-cell"),k=S("sui-table-body"),T=S("sui-table"),_=S("sui-container");return $(),he("div",null,[t(p,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(u,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(u,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(u,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(u,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(m,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(m,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(T,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(k,null,{default:i(()=>[($(!0),he(Ce,null,et(e.events,w=>($(),D(v,{key:w.name},{default:i(()=>[t(C,null,{default:i(()=>[n(Be(w.name),1)]),_:2},1024),t(C,null,{default:i(()=>[n(Be(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const jR=Le(NR,[["render",OR]]),GR=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,qR={__name:"MinimalDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Minimal",code:GR},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},UR=`<template>
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
<\/script>`,YR={__name:"TitledDoc",setup(e){const{toast:a}=ut(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Titled",code:UR},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},JR=`<template>
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
<\/script>`,WR={__name:"ProgressBarDoc",setup(e){const{toast:a}=ut(),l=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Progress Bar",code:JR},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(d,{color:"red",onClick:r[0]||(r[0]=p=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},KR=`<template>
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
<\/script>`,XR={__name:"ToastTypeDoc",setup(e){const{toast:a}=ut(),l=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Toast Type",code:KR},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(d,{onClick:r[2]||(r[2]=p=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},QR=`<template>
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
<\/script>`,ZR={__name:"PositionDoc",setup(e){const{toast:a}=ut(),l=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Position",code:QR},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},eE=y("br",null,null,-1),tE=`<template>
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
<\/script>`,iE={__name:"AttachedPosition",setup(e){const{toast:a}=ut(),l=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Attached Position",code:tE},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),eE,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},aE=`<template>
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
<\/script>`,lE={__name:"DirectionDoc",setup(e){const{toast:a}=ut(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Direction",code:aE},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},nE=`<template>
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
<\/script>`,oE={__name:"CenterAligned",setup(e){const{toast:a}=ut(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Center Aligned",code:nE},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},sE=`<template>
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
<\/script>`,rE={__name:"DurationDoc",setup(e){const{toast:a}=ut(),l=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Duration",code:sE},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},uE=`<template>
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
<\/script>`,cE={__name:"MessageStyleDoc",setup(e){const{toast:a}=ut(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Use Message Style",code:uE},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},dE=`<template>
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
<\/script>`,mE={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ut(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const d=S("SuiButton");return $(),D(R,{label:"Increasing Progress Bar",code:dE},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},pE=`<template>
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
<\/script>`,fE={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ut(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,p)=>{const f=S("SuiButton");return $(),D(R,{label:"Color Variants",code:pE},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},gE={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ut(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,p)=>{const f=S("SuiButton");return $(),D(R,{label:"Inverted Colors",code:d.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},hE=`<template>
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
<\/script>`,_E={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[J(W,{name:"check"}),"Yes"]),J(F,{color:"red",icon:!0},()=>[J(W,{name:"ban"})]),J(F,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>($(),D(R,{label:"General",code:hE},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(c(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},bE=`<template>
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
<\/script>`,vE={__name:"ActionBasicDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>($(),D(R,{label:"Basic",code:bE},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(c(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},yE=`<template>
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
<\/script>`,SE={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>($(),D(R,{label:"Attached",code:yE},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(c(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},wE=`<template>
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
<\/script>`,CE={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>($(),D(R,{label:"Vertical",code:wE},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(c(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},AE=y("br",null,null,-1),kE=`<template>
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
<\/script>`,xE={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[J(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),J(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>($(),D(R,{label:"Vertical Attached",code:kE},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),AE,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(c(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},$E={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:qR},{id:"titled",label:"Titled",category:"Types",component:YR},{id:"progress-bar",label:"Progress Bar",category:"Types",component:WR},{id:"toast-type",label:"Toast Type",category:"Variations",component:XR},{id:"position",label:"Position",category:"Variations",component:ZR},{id:"attached-position",label:"Attached Position",category:"Variations",component:iE},{id:"direction",label:"Direction",category:"Variations",component:lE},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:oE},{id:"duration",label:"Duration",category:"Variations",component:rE},{id:"message-style",label:"Use Message Style",category:"Variations",component:cE},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:mE},{id:"color-variants",label:"Color Variants",category:"Variations",component:fE},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:gE},{id:"general",label:"General",category:"Actions",component:_E},{id:"action-basic",label:"Basic",category:"Actions",component:vE},{id:"action-attached",label:"Attached",category:"Actions",component:SE},{id:"action-vertical",label:"Vertical",category:"Actions",component:CE},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:xE}];return(l,o)=>($(),D(ft,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},BE=[{path:"/",component:W_,children:[{path:"/",component:Cb},{path:"elements/button",component:zw},{path:"elements/container",component:Yw},{path:"elements/divider",component:bC},{path:"elements/emoji",component:TC},{path:"elements/flag",component:EC},{path:"elements/header",component:mA},{path:"elements/icon",component:GA},{path:"elements/image",component:D0},{path:"elements/input",component:ik},{path:"elements/label",component:dx},{path:"elements/list",component:Px},{path:"elements/loader",component:o$},{path:"elements/rail",component:c$},{path:"elements/reveal",component:C$},{path:"elements/segment",component:J$},{path:"elements/step",component:eB},{path:"collections/breadcrumb",component:_B},{path:"collections/form",component:FB},{path:"collections/grid",component:jB},{path:"collections/menu",component:XB},{path:"collections/message",component:uT},{path:"collections/table",component:wT},{path:"views/advertisement",component:$T},{path:"views/card",component:r2},{path:"views/comment",component:sL},{path:"views/feed",component:TL},{path:"views/item",component:bD},{path:"views/statistic",component:$D},{path:"modules/accordion",component:KD},{path:"modules/calendar",component:ZD},{path:"modules/checkbox",component:uI},{path:"modules/dimmer",component:mI},{path:"modules/dropdown",component:gI},{path:"modules/embed",component:bI},{path:"modules/modal",component:xI},{path:"modules/popup",component:RI},{path:"modules/progress",component:FI},{path:"modules/rating",component:RR},{path:"modules/sidebar",component:PR},{path:"modules/slider",component:HR},{path:"modules/tab",component:jR},{path:"modules/toast",component:$E}]}],TE=B_({history:jh("/vue-fomantic-ui/"),routes:BE,scrollBehavior(e,a,l){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=o.variable[1].inside,p=0;p<r.length;p++)d[r[p]]=e.languages.bash[r[p]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Ps=hm(kh);Ps.use(TE);Ps.use(cS);Ps.mount("#app");

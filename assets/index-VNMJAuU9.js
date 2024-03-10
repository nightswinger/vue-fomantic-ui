(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(r){if(r.ep)return;r.ep=!0;const d=l(r);fetch(r.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zl(e,a){const l=new Set(e.split(","));return a?o=>l.has(o.toLowerCase()):o=>l.has(o)}const je={},sa=[],yt=()=>{},qd=()=>!1,cl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Po=e=>e.startsWith("onUpdate:"),Xe=Object.assign,Vo=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},Gd=Object.prototype.hasOwnProperty,Fe=(e,a)=>Gd.call(e,a),he=Array.isArray,ra=e=>ka(e)==="[object Map]",Wi=e=>ka(e)==="[object Set]",zs=e=>ka(e)==="[object Date]",Ud=e=>ka(e)==="[object RegExp]",Ce=e=>typeof e=="function",Qe=e=>typeof e=="string",Ci=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",Mo=e=>(Ge(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),Zr=Object.prototype.toString,ka=e=>Zr.call(e),Yd=e=>ka(e).slice(8,-1),eu=e=>ka(e)==="[object Object]",Ho=e=>Qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qa=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),en=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},Jd=/-(\w)/g,vt=en(e=>e.replace(Jd,(a,l)=>l?l.toUpperCase():"")),Wd=/\B([A-Z])/g,Tt=en(e=>e.replace(Wd,"-$1").toLowerCase()),dl=en(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ga=en(e=>e?`on${dl(e)}`:""),qt=(e,a)=>!Object.is(e,a),ua=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Pl=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},Za=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Vl=e=>{const a=Qe(e)?Number(e):NaN;return isNaN(a)?e:a};let Fs;const tu=()=>Fs||(Fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Kd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Xd=Zl(Kd);function xa(e){if(he(e)){const a={};for(let l=0;l<e.length;l++){const o=e[l],r=Qe(o)?tm(o):xa(o);if(r)for(const d in r)a[d]=r[d]}return a}else if(Qe(e)||Ge(e))return e}const Qd=/;(?![^(]*\))/g,Zd=/:([^]+)/,em=/\/\*[^]*?\*\//g;function tm(e){const a={};return e.replace(em,"").split(Qd).forEach(l=>{if(l){const o=l.split(Zd);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function ml(e){let a="";if(Qe(e))a=e;else if(he(e))for(let l=0;l<e.length;l++){const o=ml(e[l]);o&&(a+=o+" ")}else if(Ge(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function im(e){if(!e)return null;let{class:a,style:l}=e;return a&&!Qe(a)&&(e.class=ml(a)),l&&(e.style=xa(l)),e}const am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lm=Zl(am);function iu(e){return!!e||e===""}function nm(e,a){if(e.length!==a.length)return!1;let l=!0;for(let o=0;l&&o<e.length;o++)l=li(e[o],a[o]);return l}function li(e,a){if(e===a)return!0;let l=zs(e),o=zs(a);if(l||o)return l&&o?e.getTime()===a.getTime():!1;if(l=Ci(e),o=Ci(a),l||o)return e===a;if(l=he(e),o=he(a),l||o)return l&&o?nm(e,a):!1;if(l=Ge(e),o=Ge(a),l||o){if(!l||!o)return!1;const r=Object.keys(e).length,d=Object.keys(a).length;if(r!==d)return!1;for(const p in e){const f=e.hasOwnProperty(p),s=a.hasOwnProperty(p);if(f&&!s||!f&&s||!li(e[p],a[p]))return!1}}return String(e)===String(a)}function tn(e,a){return e.findIndex(l=>li(l,a))}const Te=e=>Qe(e)?e:e==null?"":he(e)||Ge(e)&&(e.toString===Zr||!Ce(e.toString))?JSON.stringify(e,au,2):String(e),au=(e,a)=>a&&a.__v_isRef?au(e,a.value):ra(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[o,r],d)=>(l[$n(o,d)+" =>"]=r,l),{})}:Wi(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>$n(l))}:Ci(a)?$n(a):Ge(a)&&!he(a)&&!eu(a)?String(a):a,$n=(e,a="")=>{var l;return Ci(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class No{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!a&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=xt;try{return xt=this,a()}finally{xt=l}}}on(){xt=this}off(){xt=this.parent}stop(a){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function om(e){return new No(e)}function lu(e,a=xt){a&&a.active&&a.effects.push(e)}function Oo(){return xt}function nu(e){xt&&xt.cleanups.push(e)}let Fi;class ba{constructor(a,l,o,r){this.fn=a,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,lu(this,r)}get dirty(){if(this._dirtyLevel===1){Ki();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(sm(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=Si,l=Fi;try{return Si=!0,Fi=this,this._runnings++,Ps(this),this.fn()}finally{Vs(this),this._runnings--,Fi=l,Si=a}}stop(){var a;this.active&&(Ps(this),Vs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function sm(e){return e.value}function Ps(e){e._trackId++,e._depsLength=0}function Vs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)ou(e.deps[a],e);e.deps.length=e._depsLength}}function ou(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function rm(e,a){e.effect instanceof ba&&(e=e.effect.fn);const l=new ba(e,yt,()=>{l.dirty&&l.run()});a&&(Xe(l,a),a.scope&&lu(l,a.scope)),(!a||!a.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function um(e){e.effect.stop()}let Si=!0,Zn=0;const su=[];function Ki(){su.push(Si),Si=!1}function Xi(){const e=su.pop();Si=e===void 0?!0:e}function jo(){Zn++}function qo(){for(Zn--;!Zn&&eo.length;)eo.shift()()}function ru(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&ou(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const eo=[];function uu(e,a,l){jo();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}cu(e),qo()}function cu(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,eo.push(a.scheduler))}const du=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},Ml=new WeakMap,Pi=Symbol(""),to=Symbol("");function At(e,a,l){if(Si&&Fi){let o=Ml.get(e);o||Ml.set(e,o=new Map);let r=o.get(l);r||o.set(l,r=du(()=>o.delete(l))),ru(Fi,r)}}function ii(e,a,l,o,r,d){const p=Ml.get(e);if(!p)return;let f=[];if(a==="clear")f=[...p.values()];else if(l==="length"&&he(e)){const s=Number(o);p.forEach((c,g)=>{(g==="length"||!Ci(g)&&g>=s)&&f.push(c)})}else switch(l!==void 0&&f.push(p.get(l)),a){case"add":he(e)?Ho(l)&&f.push(p.get("length")):(f.push(p.get(Pi)),ra(e)&&f.push(p.get(to)));break;case"delete":he(e)||(f.push(p.get(Pi)),ra(e)&&f.push(p.get(to)));break;case"set":ra(e)&&f.push(p.get(Pi));break}jo();for(const s of f)s&&uu(s,2);qo()}function cm(e,a){var l;return(l=Ml.get(e))==null?void 0:l.get(a)}const dm=Zl("__proto__,__v_isRef,__isVue"),mu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ci)),Ms=mm();function mm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const o=Re(this);for(let d=0,p=this.length;d<p;d++)At(o,"get",d+"");const r=o[a](...l);return r===-1||r===!1?o[a](...l.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Ki(),jo();const o=Re(this)[a].apply(this,l);return qo(),Xi(),o}}),e}function pm(e){const a=Re(this);return At(a,"has",e),a.hasOwnProperty(e)}class pu{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,o){const r=this._isReadonly,d=this._shallow;if(l==="__v_isReactive")return!r;if(l==="__v_isReadonly")return r;if(l==="__v_isShallow")return d;if(l==="__v_raw")return o===(r?d?vu:bu:d?_u:hu).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const p=he(a);if(!r){if(p&&Fe(Ms,l))return Reflect.get(Ms,l,o);if(l==="hasOwnProperty")return pm}const f=Reflect.get(a,l,o);return(Ci(l)?mu.has(l):dm(l))||(r||At(a,"get",l),d)?f:pt(f)?p&&Ho(l)?f:f.value:Ge(f)?r?Uo(f):si(f):f}}class fu extends pu{constructor(a=!1){super(!1,a)}set(a,l,o,r){let d=a[l];if(!this._shallow){const s=Oi(d);if(!el(o)&&!Oi(o)&&(d=Re(d),o=Re(o)),!he(a)&&pt(d)&&!pt(o))return s?!1:(d.value=o,!0)}const p=he(a)&&Ho(l)?Number(l)<a.length:Fe(a,l),f=Reflect.set(a,l,o,r);return a===Re(r)&&(p?qt(o,d)&&ii(a,"set",l,o):ii(a,"add",l,o)),f}deleteProperty(a,l){const o=Fe(a,l);a[l];const r=Reflect.deleteProperty(a,l);return r&&o&&ii(a,"delete",l,void 0),r}has(a,l){const o=Reflect.has(a,l);return(!Ci(l)||!mu.has(l))&&At(a,"has",l),o}ownKeys(a){return At(a,"iterate",he(a)?"length":Pi),Reflect.ownKeys(a)}}class gu extends pu{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const fm=new fu,gm=new gu,hm=new fu(!0),_m=new gu(!0),Go=e=>e,an=e=>Reflect.getPrototypeOf(e);function _l(e,a,l=!1,o=!1){e=e.__v_raw;const r=Re(e),d=Re(a);l||(qt(a,d)&&At(r,"get",a),At(r,"get",d));const{has:p}=an(r),f=o?Go:l?Wo:tl;if(p.call(r,a))return f(e.get(a));if(p.call(r,d))return f(e.get(d));e!==r&&e.get(a)}function bl(e,a=!1){const l=this.__v_raw,o=Re(l),r=Re(e);return a||(qt(e,r)&&At(o,"has",e),At(o,"has",r)),e===r?l.has(e):l.has(e)||l.has(r)}function vl(e,a=!1){return e=e.__v_raw,!a&&At(Re(e),"iterate",Pi),Reflect.get(e,"size",e)}function Hs(e){e=Re(e);const a=Re(this);return an(a).has.call(a,e)||(a.add(e),ii(a,"add",e,e)),this}function Ns(e,a){a=Re(a);const l=Re(this),{has:o,get:r}=an(l);let d=o.call(l,e);d||(e=Re(e),d=o.call(l,e));const p=r.call(l,e);return l.set(e,a),d?qt(a,p)&&ii(l,"set",e,a):ii(l,"add",e,a),this}function Os(e){const a=Re(this),{has:l,get:o}=an(a);let r=l.call(a,e);r||(e=Re(e),r=l.call(a,e)),o&&o.call(a,e);const d=a.delete(e);return r&&ii(a,"delete",e,void 0),d}function js(){const e=Re(this),a=e.size!==0,l=e.clear();return a&&ii(e,"clear",void 0,void 0),l}function Sl(e,a){return function(o,r){const d=this,p=d.__v_raw,f=Re(p),s=a?Go:e?Wo:tl;return!e&&At(f,"iterate",Pi),p.forEach((c,g)=>o.call(r,s(c),s(g),d))}}function yl(e,a,l){return function(...o){const r=this.__v_raw,d=Re(r),p=ra(d),f=e==="entries"||e===Symbol.iterator&&p,s=e==="keys"&&p,c=r[e](...o),g=l?Go:a?Wo:tl;return!a&&At(d,"iterate",s?to:Pi),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:f?[g(m[0]),g(m[1])]:g(m),done:h}},[Symbol.iterator](){return this}}}}function ci(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function bm(){const e={get(d){return _l(this,d)},get size(){return vl(this)},has:bl,add:Hs,set:Ns,delete:Os,clear:js,forEach:Sl(!1,!1)},a={get(d){return _l(this,d,!1,!0)},get size(){return vl(this)},has:bl,add:Hs,set:Ns,delete:Os,clear:js,forEach:Sl(!1,!0)},l={get(d){return _l(this,d,!0)},get size(){return vl(this,!0)},has(d){return bl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:Sl(!0,!1)},o={get(d){return _l(this,d,!0,!0)},get size(){return vl(this,!0)},has(d){return bl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:Sl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=yl(d,!1,!1),l[d]=yl(d,!0,!1),a[d]=yl(d,!1,!0),o[d]=yl(d,!0,!0)}),[e,l,a,o]}const[vm,Sm,ym,wm]=bm();function ln(e,a){const l=a?e?wm:ym:e?Sm:vm;return(o,r,d)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Fe(l,r)&&r in o?l:o,r,d)}const Cm={get:ln(!1,!1)},Am={get:ln(!1,!0)},km={get:ln(!0,!1)},xm={get:ln(!0,!0)},hu=new WeakMap,_u=new WeakMap,bu=new WeakMap,vu=new WeakMap;function $m(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bm(e){return e.__v_skip||!Object.isExtensible(e)?0:$m(Yd(e))}function si(e){return Oi(e)?e:nn(e,!1,fm,Cm,hu)}function Su(e){return nn(e,!1,hm,Am,_u)}function Uo(e){return nn(e,!0,gm,km,bu)}function Tm(e){return nn(e,!0,_m,xm,vu)}function nn(e,a,l,o,r){if(!Ge(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=r.get(e);if(d)return d;const p=Bm(e);if(p===0)return e;const f=new Proxy(e,p===2?o:l);return r.set(e,f),f}function Vi(e){return Oi(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Oi(e){return!!(e&&e.__v_isReadonly)}function el(e){return!!(e&&e.__v_isShallow)}function Yo(e){return Vi(e)||Oi(e)}function Re(e){const a=e&&e.__v_raw;return a?Re(a):e}function Jo(e){return Pl(e,"__v_skip",!0),e}const tl=e=>Ge(e)?si(e):e,Wo=e=>Ge(e)?Uo(e):e;class yu{constructor(a,l,o,r){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ba(()=>a(this._value),()=>ca(this,1),()=>this.dep&&cu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Re(this);return(!a._cacheable||a.effect.dirty)&&qt(a._value,a._value=a.effect.run())&&ca(a,2),Ko(a),a.effect._dirtyLevel>=1&&ca(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Dm(e,a,l=!1){let o,r;const d=Ce(e);return d?(o=e,r=yt):(o=e.get,r=e.set),new yu(o,r,d||!r,l)}function Ko(e){Si&&Fi&&(e=Re(e),ru(Fi,e.dep||(e.dep=du(()=>e.dep=void 0,e instanceof yu?e:void 0))))}function ca(e,a=2,l){e=Re(e);const o=e.dep;o&&uu(o,a)}function pt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Cu(e,!1)}function wu(e){return Cu(e,!0)}function Cu(e,a){return pt(e)?e:new Lm(e,a)}class Lm{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Re(a),this._value=l?a:tl(a)}get value(){return Ko(this),this._value}set value(a){const l=this.__v_isShallow||el(a)||Oi(a);a=l?a:Re(a),qt(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:tl(a),ca(this,2))}}function Im(e){ca(e,2)}function u(e){return pt(e)?e.value:e}function Rm(e){return Ce(e)?e():u(e)}const Em={get:(e,a,l)=>u(Reflect.get(e,a,l)),set:(e,a,l,o)=>{const r=e[a];return pt(r)&&!pt(l)?(r.value=l,!0):Reflect.set(e,a,l,o)}};function Xo(e){return Vi(e)?e:new Proxy(e,Em)}class zm{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=a(()=>Ko(this),()=>ca(this));this._get=l,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function Au(e){return new zm(e)}function Fm(e){const a=he(e)?new Array(e.length):{};for(const l in e)a[l]=ku(e,l);return a}class Pm{constructor(a,l,o){this._object=a,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return cm(Re(this._object),this._key)}}class Vm{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function io(e,a,l){return pt(e)?e:Ce(e)?new Vm(e):Ge(e)&&arguments.length>1?ku(e,a,l):G(e)}function ku(e,a,l){const o=e[a];return pt(o)?o:new Pm(e,a,l)}const Mm={GET:"get",HAS:"has",ITERATE:"iterate"},Hm={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nm(e,a){}const Om={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},jm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ai(e,a,l,o){let r;try{r=o?e(...o):e()}catch(d){Qi(d,a,l)}return r}function It(e,a,l,o){if(Ce(e)){const d=ai(e,a,l,o);return d&&Mo(d)&&d.catch(p=>{Qi(p,a,l)}),d}const r=[];for(let d=0;d<e.length;d++)r.push(It(e[d],a,l,o));return r}function Qi(e,a,l,o=!0){const r=a?a.vnode:null;if(a){let d=a.parent;const p=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${l}`;for(;d;){const c=d.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,p,f)===!1)return}d=d.parent}const s=a.appContext.config.errorHandler;if(s){ai(s,null,10,[e,p,f]);return}}qm(e,l,r,o)}function qm(e,a,l,o=!0){console.error(e)}let il=!1,ao=!1;const ft=[];let Wt=0;const da=[];let gi=null,Ri=0;const xu=Promise.resolve();let Qo=null;function $a(e){const a=Qo||xu;return e?a.then(this?e.bind(this):e):a}function Gm(e){let a=Wt+1,l=ft.length;for(;a<l;){const o=a+l>>>1,r=ft[o],d=al(r);d<e||d===e&&r.pre?a=o+1:l=o}return a}function on(e){(!ft.length||!ft.includes(e,il&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?ft.push(e):ft.splice(Gm(e.id),0,e),$u())}function $u(){!il&&!ao&&(ao=!0,Qo=xu.then(Bu))}function Um(e){const a=ft.indexOf(e);a>Wt&&ft.splice(a,1)}function Hl(e){he(e)?da.push(...e):(!gi||!gi.includes(e,e.allowRecurse?Ri+1:Ri))&&da.push(e),$u()}function qs(e,a,l=il?Wt+1:0){for(;l<ft.length;l++){const o=ft[l];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ft.splice(l,1),l--,o()}}}function Nl(e){if(da.length){const a=[...new Set(da)].sort((l,o)=>al(l)-al(o));if(da.length=0,gi){gi.push(...a);return}for(gi=a,Ri=0;Ri<gi.length;Ri++)gi[Ri]();gi=null,Ri=0}}const al=e=>e.id==null?1/0:e.id,Ym=(e,a)=>{const l=al(e)-al(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function Bu(e){ao=!1,il=!0,ft.sort(Ym);try{for(Wt=0;Wt<ft.length;Wt++){const a=ft[Wt];a&&a.active!==!1&&ai(a,null,14)}}finally{Wt=0,ft.length=0,Nl(),il=!1,Qo=null,(ft.length||da.length)&&Bu()}}let la,wl=[];function Tu(e,a){var l,o;la=e,la?(la.enabled=!0,wl.forEach(({event:r,args:d})=>la.emit(r,...d)),wl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{Tu(d,a)}),setTimeout(()=>{la||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,wl=[])},3e3)):wl=[]}function Jm(e,a,...l){if(e.isUnmounted)return;const o=e.vnode.props||je;let r=l;const d=a.startsWith("update:"),p=d&&a.slice(7);if(p&&p in o){const g=`${p==="modelValue"?"model":p}Modifiers`,{number:m,trim:h}=o[g]||je;h&&(r=l.map(w=>Qe(w)?w.trim():w)),m&&(r=l.map(Za))}let f,s=o[f=Ga(a)]||o[f=Ga(vt(a))];!s&&d&&(s=o[f=Ga(Tt(a))]),s&&It(s,e,6,r);const c=o[f+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,It(c,e,6,r)}}function Du(e,a,l=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const d=e.emits;let p={},f=!1;if(!Ce(e)){const s=c=>{const g=Du(c,a,!0);g&&(f=!0,Xe(p,g))};!l&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!d&&!f?(Ge(e)&&o.set(e,null),null):(he(d)?d.forEach(s=>p[s]=null):Xe(p,d),Ge(e)&&o.set(e,p),p)}function sn(e,a){return!e||!cl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Fe(e,a[0].toLowerCase()+a.slice(1))||Fe(e,Tt(a))||Fe(e,a))}let at=null,rn=null;function ll(e){const a=at;return at=e,rn=e&&e.type.__scopeId||null,a}function Lu(e){rn=e}function Iu(){rn=null}const Wm=e=>i;function i(e,a=at,l){if(!a||e._n)return e;const o=(...r)=>{o._d&&mo(-1);const d=ll(a);let p;try{p=e(...r)}finally{ll(d),o._d&&mo(1)}return p};return o._n=!0,o._c=!0,o._d=!0,o}function Rl(e){const{type:a,vnode:l,proxy:o,withProxy:r,props:d,propsOptions:[p],slots:f,attrs:s,emit:c,render:g,renderCache:m,data:h,setupState:w,ctx:b,inheritAttrs:C}=e;let $,D;const _=ll(e);try{if(l.shapeFlag&4){const x=r||o,T=x;$=$t(g.call(T,x,m,d,w,h,b)),D=s}else{const x=a;$=$t(x.length>1?x(d,{attrs:s,slots:f,emit:c}):x(d,null)),D=a.props?s:Xm(s)}}catch(x){Ja.length=0,Qi(x,e,1),$=t(ht)}let S=$;if(D&&C!==!1){const x=Object.keys(D),{shapeFlag:T}=S;x.length&&T&7&&(p&&x.some(Po)&&(D=Qm(D,p)),S=Kt(S,D))}return l.dirs&&(S=Kt(S),S.dirs=S.dirs?S.dirs.concat(l.dirs):l.dirs),l.transition&&(S.transition=l.transition),$=S,ll(_),$}function Km(e,a=!0){let l;for(let o=0;o<e.length;o++){const r=e[o];if(Rt(r)){if(r.type!==ht||r.children==="v-if"){if(l)return;l=r}}else return}return l}const Xm=e=>{let a;for(const l in e)(l==="class"||l==="style"||cl(l))&&((a||(a={}))[l]=e[l]);return a},Qm=(e,a)=>{const l={};for(const o in e)(!Po(o)||!(o.slice(9)in a))&&(l[o]=e[o]);return l};function Zm(e,a,l){const{props:o,children:r,component:d}=e,{props:p,children:f,patchFlag:s}=a,c=d.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&s>=0){if(s&1024)return!0;if(s&16)return o?Gs(o,p,c):!!p;if(s&8){const g=a.dynamicProps;for(let m=0;m<g.length;m++){const h=g[m];if(p[h]!==o[h]&&!sn(c,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:o===p?!1:o?p?Gs(o,p,c):!0:!!p;return!1}function Gs(e,a,l){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const d=o[r];if(a[d]!==e[d]&&!sn(l,d))return!0}return!1}function Zo({vnode:e,parent:a},l){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=l,a=a.parent;else break}}const es="components",ep="directives";function y(e,a){return ts(es,e,!0,a)||e}const Ru=Symbol.for("v-ndc");function Eu(e){return Qe(e)?ts(es,e,!1)||e:e||Ru}function un(e){return ts(ep,e)}function ts(e,a,l=!0,o=!1){const r=at||ot;if(r){const d=r.type;if(e===es){const f=_o(d,!1);if(f&&(f===a||f===vt(a)||f===dl(vt(a))))return d}const p=Us(r[e]||d[e],a)||Us(r.appContext[e],a);return!p&&o?d:p}}function Us(e,a){return e&&(e[a]||e[vt(a)]||e[dl(vt(a))])}const zu=e=>e.__isSuspense;let lo=0;const tp={name:"Suspense",__isSuspense:!0,process(e,a,l,o,r,d,p,f,s,c){if(e==null)ap(a,l,o,r,d,p,f,s,c);else{if(d&&d.deps>0){a.suspense=e.suspense;return}lp(e,a,l,o,r,p,f,s,c)}},hydrate:np,create:is,normalize:op},ip=tp;function nl(e,a){const l=e.props&&e.props[a];Ce(l)&&l()}function ap(e,a,l,o,r,d,p,f,s){const{p:c,o:{createElement:g}}=s,m=g("div"),h=e.suspense=is(e,r,o,a,m,l,d,p,f,s);c(null,h.pendingBranch=e.ssContent,m,null,o,h,d,p),h.deps>0?(nl(e,"onPending"),nl(e,"onFallback"),c(null,e.ssFallback,a,l,o,null,d,p),ma(h,e.ssFallback)):h.resolve(!1,!0)}function lp(e,a,l,o,r,d,p,f,{p:s,um:c,o:{createElement:g}}){const m=a.suspense=e.suspense;m.vnode=a,a.el=e.el;const h=a.ssContent,w=a.ssFallback,{activeBranch:b,pendingBranch:C,isInFallback:$,isHydrating:D}=m;if(C)m.pendingBranch=h,jt(h,C)?(s(C,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0?m.resolve():$&&(D||(s(b,w,l,o,r,null,d,p,f),ma(m,w)))):(m.pendingId=lo++,D?(m.isHydrating=!1,m.activeBranch=C):c(C,r,m),m.deps=0,m.effects.length=0,m.hiddenContainer=g("div"),$?(s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0?m.resolve():(s(b,w,l,o,r,null,d,p,f),ma(m,w))):b&&jt(h,b)?(s(b,h,l,o,r,m,d,p,f),m.resolve(!0)):(s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0&&m.resolve()));else if(b&&jt(h,b))s(b,h,l,o,r,m,d,p,f),ma(m,h);else if(nl(a,"onPending"),m.pendingBranch=h,h.shapeFlag&512?m.pendingId=h.component.suspenseId:m.pendingId=lo++,s(null,h,m.hiddenContainer,null,r,m,d,p,f),m.deps<=0)m.resolve();else{const{timeout:_,pendingId:S}=m;_>0?setTimeout(()=>{m.pendingId===S&&m.fallback(w)},_):_===0&&m.fallback(w)}}function is(e,a,l,o,r,d,p,f,s,c,g=!1){const{p:m,m:h,um:w,n:b,o:{parentNode:C,remove:$}}=c;let D;const _=sp(e);_&&a!=null&&a.pendingBranch&&(D=a.pendingId,a.deps++);const S=e.props?Vl(e.props.timeout):void 0,x=d,T={vnode:e,parent:a,parentComponent:l,namespace:p,container:o,hiddenContainer:r,deps:0,pendingId:lo++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(I=!1,V=!1){const{vnode:M,activeBranch:P,pendingBranch:q,pendingId:Q,effects:Y,parentComponent:ge,container:Be}=T;let U=!1;T.isHydrating?T.isHydrating=!1:I||(U=P&&q.transition&&q.transition.mode==="out-in",U&&(P.transition.afterLeave=()=>{Q===T.pendingId&&(h(q,Be,d===x?b(P):d,0),Hl(Y))}),P&&(C(P.el)!==T.hiddenContainer&&(d=b(P)),w(P,ge,T,!0)),U||h(q,Be,d,0)),ma(T,q),T.pendingBranch=null,T.isInFallback=!1;let W=T.parent,me=!1;for(;W;){if(W.pendingBranch){W.effects.push(...Y),me=!0;break}W=W.parent}!me&&!U&&Hl(Y),T.effects=[],_&&a&&a.pendingBranch&&D===a.pendingId&&(a.deps--,a.deps===0&&!V&&a.resolve()),nl(M,"onResolve")},fallback(I){if(!T.pendingBranch)return;const{vnode:V,activeBranch:M,parentComponent:P,container:q,namespace:Q}=T;nl(V,"onFallback");const Y=b(M),ge=()=>{T.isInFallback&&(m(null,I,q,Y,P,null,Q,f,s),ma(T,I))},Be=I.transition&&I.transition.mode==="out-in";Be&&(M.transition.afterLeave=ge),T.isInFallback=!0,w(M,P,null,!0),Be||ge()},move(I,V,M){T.activeBranch&&h(T.activeBranch,I,V,M),T.container=I},next(){return T.activeBranch&&b(T.activeBranch)},registerDep(I,V){const M=!!T.pendingBranch;M&&T.deps++;const P=I.vnode.el;I.asyncDep.catch(q=>{Qi(q,I,0)}).then(q=>{if(I.isUnmounted||T.isUnmounted||T.pendingId!==I.suspenseId)return;I.asyncResolved=!0;const{vnode:Q}=I;go(I,q,!1),P&&(Q.el=P);const Y=!P&&I.subTree.el;V(I,Q,C(P||I.subTree.el),P?null:b(I.subTree),T,p,s),Y&&$(Y),Zo(I,Q.el),M&&--T.deps===0&&T.resolve()})},unmount(I,V){T.isUnmounted=!0,T.activeBranch&&w(T.activeBranch,l,I,V),T.pendingBranch&&w(T.pendingBranch,l,I,V)}};return T}function np(e,a,l,o,r,d,p,f,s){const c=a.suspense=is(a,o,l,e.parentNode,document.createElement("div"),null,r,d,p,f,!0),g=s(e,c.pendingBranch=a.ssContent,l,c,d,p);return c.deps===0&&c.resolve(!1,!0),g}function op(e){const{shapeFlag:a,children:l}=e,o=a&32;e.ssContent=Ys(o?l.default:l),e.ssFallback=o?Ys(l.fallback):t(ht)}function Ys(e){let a;if(Ce(e)){const l=Ui&&e._c;l&&(e._d=!1,k()),e=e(),l&&(e._d=!0,a=wt,pc())}return he(e)&&(e=Km(e)),e=$t(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function Fu(e,a){a&&a.pendingBranch?he(e)?a.effects.push(...e):a.effects.push(e):Hl(e)}function ma(e,a){e.activeBranch=a;const{vnode:l,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;l.el=r,o&&o.subTree===l&&(o.vnode.el=r,Zo(o,r))}function sp(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const Pu=Symbol.for("v-scx"),Vu=()=>He(Pu);function as(e,a){return pl(e,null,a)}function Mu(e,a){return pl(e,null,{flush:"post"})}function Hu(e,a){return pl(e,null,{flush:"sync"})}const Cl={};function gt(e,a,l){return pl(e,a,l)}function pl(e,a,{immediate:l,deep:o,flush:r,once:d,onTrack:p,onTrigger:f}=je){if(a&&d){const I=a;a=(...V)=>{I(...V),T()}}const s=ot,c=I=>o===!0?I:Ei(I,o===!1?1:void 0);let g,m=!1,h=!1;if(pt(e)?(g=()=>e.value,m=el(e)):Vi(e)?(g=()=>c(e),m=!0):he(e)?(h=!0,m=e.some(I=>Vi(I)||el(I)),g=()=>e.map(I=>{if(pt(I))return I.value;if(Vi(I))return c(I);if(Ce(I))return ai(I,s,2)})):Ce(e)?a?g=()=>ai(e,s,2):g=()=>(w&&w(),It(e,s,3,[b])):g=yt,a&&o){const I=g;g=()=>Ei(I())}let w,b=I=>{w=S.onStop=()=>{ai(I,s,4),w=S.onStop=void 0}},C;if(gl)if(b=yt,a?l&&It(a,s,3,[g(),h?[]:void 0,b]):g(),r==="sync"){const I=Vu();C=I.__watcherHandles||(I.__watcherHandles=[])}else return yt;let $=h?new Array(e.length).fill(Cl):Cl;const D=()=>{if(!(!S.active||!S.dirty))if(a){const I=S.run();(o||m||(h?I.some((V,M)=>qt(V,$[M])):qt(I,$)))&&(w&&w(),It(a,s,3,[I,$===Cl?void 0:h&&$[0]===Cl?[]:$,b]),$=I)}else S.run()};D.allowRecurse=!!a;let _;r==="sync"?_=D:r==="post"?_=()=>dt(D,s&&s.suspense):(D.pre=!0,s&&(D.id=s.uid),_=()=>on(D));const S=new ba(g,yt,_),x=Oo(),T=()=>{S.stop(),x&&Vo(x.effects,S)};return a?l?D():$=S.run():r==="post"?dt(S.run.bind(S),s&&s.suspense):S.run(),C&&C.push(T),T}function rp(e,a,l){const o=this.proxy,r=Qe(e)?e.includes(".")?Nu(o,e):()=>o[e]:e.bind(o,o);let d;Ce(a)?d=a:(d=a.handler,l=a);const p=Yi(this),f=pl(r,d.bind(o),l);return p(),f}function Nu(e,a){const l=a.split(".");return()=>{let o=e;for(let r=0;r<l.length&&o;r++)o=o[l[r]];return o}}function Ei(e,a,l=0,o){if(!Ge(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),pt(e))Ei(e.value,a,l,o);else if(he(e))for(let r=0;r<e.length;r++)Ei(e[r],a,l,o);else if(Wi(e)||ra(e))e.forEach(r=>{Ei(r,a,l,o)});else if(eu(e))for(const r in e)Ei(e[r],a,l,o);return e}function yi(e,a){if(at===null)return e;const l=hn(at)||at.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[d,p,f,s=je]=a[r];d&&(Ce(d)&&(d={mounted:d,updated:d}),d.deep&&Ei(p),o.push({dir:d,instance:l,value:p,oldValue:void 0,arg:f,modifiers:s}))}return e}function Ut(e,a,l,o){const r=e.dirs,d=a&&a.dirs;for(let p=0;p<r.length;p++){const f=r[p];d&&(f.oldValue=d[p].value);let s=f.dir[o];s&&(Ki(),It(s,l,8,[e.el,f,e,a]),Xi())}}const hi=Symbol("_leaveCb"),Al=Symbol("_enterCb");function ls(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ki(()=>{e.isMounted=!0}),pn(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],ns={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},up={name:"BaseTransition",props:ns,setup(e,{slots:a}){const l=Xt(),o=ls();let r;return()=>{const d=a.default&&cn(a.default(),!0);if(!d||!d.length)return;let p=d[0];if(d.length>1){for(const C of d)if(C.type!==ht){p=C;break}}const f=Re(e),{mode:s}=f;if(o.isLeaving)return Bn(p);const c=Js(p);if(!c)return Bn(p);const g=va(c,f,o,l);ji(c,g);const m=l.subTree,h=m&&Js(m);let w=!1;const{getTransitionKey:b}=c.type;if(b){const C=b();r===void 0?r=C:C!==r&&(r=C,w=!0)}if(h&&h.type!==ht&&(!jt(c,h)||w)){const C=va(h,f,o,l);if(ji(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Bn(p);s==="in-out"&&c.type!==ht&&(C.delayLeave=($,D,_)=>{const S=ju(o,h);S[String(h.key)]=h,$[hi]=()=>{D(),$[hi]=void 0,delete g.delayedLeave},g.delayedLeave=_})}return p}}},Ou=up;function ju(e,a){const{leavingVNodes:l}=e;let o=l.get(a.type);return o||(o=Object.create(null),l.set(a.type,o)),o}function va(e,a,l,o){const{appear:r,mode:d,persisted:p=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:c,onEnterCancelled:g,onBeforeLeave:m,onLeave:h,onAfterLeave:w,onLeaveCancelled:b,onBeforeAppear:C,onAppear:$,onAfterAppear:D,onAppearCancelled:_}=a,S=String(e.key),x=ju(l,e),T=(M,P)=>{M&&It(M,o,9,P)},I=(M,P)=>{const q=P[1];T(M,P),he(M)?M.every(Q=>Q.length<=1)&&q():M.length<=1&&q()},V={mode:d,persisted:p,beforeEnter(M){let P=f;if(!l.isMounted)if(r)P=C||f;else return;M[hi]&&M[hi](!0);const q=x[S];q&&jt(e,q)&&q.el[hi]&&q.el[hi](),T(P,[M])},enter(M){let P=s,q=c,Q=g;if(!l.isMounted)if(r)P=$||s,q=D||c,Q=_||g;else return;let Y=!1;const ge=M[Al]=Be=>{Y||(Y=!0,Be?T(Q,[M]):T(q,[M]),V.delayedLeave&&V.delayedLeave(),M[Al]=void 0)};P?I(P,[M,ge]):ge()},leave(M,P){const q=String(e.key);if(M[Al]&&M[Al](!0),l.isUnmounting)return P();T(m,[M]);let Q=!1;const Y=M[hi]=ge=>{Q||(Q=!0,P(),ge?T(b,[M]):T(w,[M]),M[hi]=void 0,x[q]===e&&delete x[q])};x[q]=e,h?I(h,[M,Y]):Y()},clone(M){return va(M,a,l,o)}};return V}function Bn(e){if(fl(e))return e=Kt(e),e.children=null,e}function Js(e){return fl(e)?e.children?e.children[0]:void 0:e}function ji(e,a){e.shapeFlag&6&&e.component?ji(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function cn(e,a=!1,l){let o=[],r=0;for(let d=0;d<e.length;d++){let p=e[d];const f=l==null?p.key:String(l)+String(p.key!=null?p.key:d);p.type===Ae?(p.patchFlag&128&&r++,o=o.concat(cn(p.children,a,f))):(a||p.type!==ht)&&o.push(f!=null?Kt(p,{key:f}):p)}if(r>1)for(let d=0;d<o.length;d++)o[d].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function z(e,a){return Ce(e)?Xe({name:e.name},a,{setup:e}):e}const Mi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function cp(e){Ce(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:o,delay:r=200,timeout:d,suspensible:p=!0,onError:f}=e;let s=null,c,g=0;const m=()=>(g++,s=null,h()),h=()=>{let w;return s||(w=s=a().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),f)return new Promise((C,$)=>{f(b,()=>C(m()),()=>$(b),g+1)});throw b}).then(b=>w!==s&&s?s:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const w=ot;if(c)return()=>Tn(c,w);const b=_=>{s=null,Qi(_,w,13,!o)};if(p&&w.suspense||gl)return h().then(_=>()=>Tn(_,w)).catch(_=>(b(_),()=>o?t(o,{error:_}):null));const C=G(!1),$=G(),D=G(!!r);return r&&setTimeout(()=>{D.value=!1},r),d!=null&&setTimeout(()=>{if(!C.value&&!$.value){const _=new Error(`Async component timed out after ${d}ms.`);b(_),$.value=_}},d),h().then(()=>{C.value=!0,w.parent&&fl(w.parent.vnode)&&(w.parent.effect.dirty=!0,on(w.parent.update))}).catch(_=>{b(_),$.value=_}),()=>{if(C.value&&c)return Tn(c,w);if($.value&&o)return t(o,{error:$.value});if(l&&!D.value)return t(l)}}})}function Tn(e,a){const{ref:l,props:o,children:r,ce:d}=a.vnode,p=t(e,o,r);return p.ref=l,p.ce=d,delete a.vnode.ce,p}const fl=e=>e.type.__isKeepAlive,dp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=Xt(),o=l.ctx;if(!o.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,d=new Set;let p=null;const f=l.suspense,{renderer:{p:s,m:c,um:g,o:{createElement:m}}}=o,h=m("div");o.activate=(_,S,x,T,I)=>{const V=_.component;c(_,S,x,0,f),s(V.vnode,_,S,x,V,f,T,_.slotScopeIds,I),dt(()=>{V.isDeactivated=!1,V.a&&ua(V.a);const M=_.props&&_.props.onVnodeMounted;M&&St(M,V.parent,_)},f)},o.deactivate=_=>{const S=_.component;c(_,h,null,1,f),dt(()=>{S.da&&ua(S.da);const x=_.props&&_.props.onVnodeUnmounted;x&&St(x,S.parent,_),S.isDeactivated=!0},f)};function w(_){Dn(_),g(_,l,f,!0)}function b(_){r.forEach((S,x)=>{const T=_o(S.type);T&&(!_||!_(T))&&C(x)})}function C(_){const S=r.get(_);!p||!jt(S,p)?w(S):p&&Dn(p),r.delete(_),d.delete(_)}gt(()=>[e.include,e.exclude],([_,S])=>{_&&b(x=>Va(_,x)),S&&b(x=>!Va(S,x))},{flush:"post",deep:!0});let $=null;const D=()=>{$!=null&&r.set($,Ln(l.subTree))};return ki(D),mn(D),pn(()=>{r.forEach(_=>{const{subTree:S,suspense:x}=l,T=Ln(S);if(_.type===T.type&&_.key===T.key){Dn(T);const I=T.component.da;I&&dt(I,x);return}w(_)})}),()=>{if($=null,!a.default)return null;const _=a.default(),S=_[0];if(_.length>1)return p=null,_;if(!Rt(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return p=null,S;let x=Ln(S);const T=x.type,I=_o(Mi(x)?x.type.__asyncResolved||{}:T),{include:V,exclude:M,max:P}=e;if(V&&(!I||!Va(V,I))||M&&I&&Va(M,I))return p=x,S;const q=x.key==null?T:x.key,Q=r.get(q);return x.el&&(x=Kt(x),S.shapeFlag&128&&(S.ssContent=x)),$=q,Q?(x.el=Q.el,x.component=Q.component,x.transition&&ji(x,x.transition),x.shapeFlag|=512,d.delete(q),d.add(q)):(d.add(q),P&&d.size>parseInt(P,10)&&C(d.values().next().value)),x.shapeFlag|=256,p=x,zu(S.type)?S:x}}},mp=dp;function Va(e,a){return he(e)?e.some(l=>Va(l,a)):Qe(e)?e.split(",").includes(a):Ud(e)?e.test(a):!1}function os(e,a){qu(e,"a",a)}function ss(e,a){qu(e,"da",a)}function qu(e,a,l=ot){const o=e.__wdc||(e.__wdc=()=>{let r=l;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(dn(a,o,l),l){let r=l.parent;for(;r&&r.parent;)fl(r.parent.vnode)&&pp(o,a,l,r),r=r.parent}}function pp(e,a,l,o){const r=dn(a,e,o,!0);Zi(()=>{Vo(o[a],r)},l)}function Dn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ln(e){return e.shapeFlag&128?e.ssContent:e}function dn(e,a,l=ot,o=!1){if(l){const r=l[e]||(l[e]=[]),d=a.__weh||(a.__weh=(...p)=>{if(l.isUnmounted)return;Ki();const f=Yi(l),s=It(a,l,e,p);return f(),Xi(),s});return o?r.unshift(d):r.push(d),d}}const ri=e=>(a,l=ot)=>(!gl||e==="sp")&&dn(e,(...o)=>a(...o),l),Gu=ri("bm"),ki=ri("m"),Uu=ri("bu"),mn=ri("u"),pn=ri("bum"),Zi=ri("um"),Yu=ri("sp"),Ju=ri("rtg"),Wu=ri("rtc");function Ku(e,a=ot){dn("ec",e,a)}function Ze(e,a,l,o){let r;const d=l&&l[o];if(he(e)||Qe(e)){r=new Array(e.length);for(let p=0,f=e.length;p<f;p++)r[p]=a(e[p],p,void 0,d&&d[p])}else if(typeof e=="number"){r=new Array(e);for(let p=0;p<e;p++)r[p]=a(p+1,p,void 0,d&&d[p])}else if(Ge(e))if(e[Symbol.iterator])r=Array.from(e,(p,f)=>a(p,f,void 0,d&&d[f]));else{const p=Object.keys(e);r=new Array(p.length);for(let f=0,s=p.length;f<s;f++){const c=p[f];r[f]=a(e[c],c,f,d&&d[f])}}else r=[];return l&&(l[o]=r),r}function fp(e,a){for(let l=0;l<a.length;l++){const o=a[l];if(he(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const d=o.fn(...r);return d&&(d.key=o.key),d}:o.fn)}return e}function qi(e,a,l={},o,r){if(at.isCE||at.parent&&Mi(at.parent)&&at.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,o&&o());let d=e[a];d&&d._c&&(d._d=!1),k();const p=d&&Xu(d(l)),f=B(Ae,{key:l.key||p&&p.key||`_${a}`},p||(o?o():[]),p&&e._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),d&&d._c&&(d._d=!0),f}function Xu(e){return e.some(a=>Rt(a)?!(a.type===ht||a.type===Ae&&!Xu(a.children)):!0)?e:null}function gp(e,a){const l={};for(const o in e)l[a&&/[A-Z]/.test(o)?`on:${o}`:Ga(o)]=e[o];return l}const no=e=>e?bc(e)?hn(e)||e.proxy:no(e.parent):null,Ua=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>no(e.parent),$root:e=>no(e.root),$emit:e=>e.emit,$options:e=>rs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,on(e.update)}),$nextTick:e=>e.n||(e.n=$a.bind(e.proxy)),$watch:e=>rp.bind(e)}),In=(e,a)=>e!==je&&!e.__isScriptSetup&&Fe(e,a),oo={get({_:e},a){const{ctx:l,setupState:o,data:r,props:d,accessCache:p,type:f,appContext:s}=e;let c;if(a[0]!=="$"){const w=p[a];if(w!==void 0)switch(w){case 1:return o[a];case 2:return r[a];case 4:return l[a];case 3:return d[a]}else{if(In(o,a))return p[a]=1,o[a];if(r!==je&&Fe(r,a))return p[a]=2,r[a];if((c=e.propsOptions[0])&&Fe(c,a))return p[a]=3,d[a];if(l!==je&&Fe(l,a))return p[a]=4,l[a];so&&(p[a]=0)}}const g=Ua[a];let m,h;if(g)return a==="$attrs"&&At(e,"get",a),g(e);if((m=f.__cssModules)&&(m=m[a]))return m;if(l!==je&&Fe(l,a))return p[a]=4,l[a];if(h=s.config.globalProperties,Fe(h,a))return h[a]},set({_:e},a,l){const{data:o,setupState:r,ctx:d}=e;return In(r,a)?(r[a]=l,!0):o!==je&&Fe(o,a)?(o[a]=l,!0):Fe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:o,appContext:r,propsOptions:d}},p){let f;return!!l[p]||e!==je&&Fe(e,p)||In(a,p)||(f=d[0])&&Fe(f,p)||Fe(o,p)||Fe(Ua,p)||Fe(r.config.globalProperties,p)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:Fe(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},hp=Xe({},oo,{get(e,a){if(a!==Symbol.unscopables)return oo.get(e,a,e)},has(e,a){return a[0]!=="_"&&!Xd(a)}});function _p(){return null}function bp(){return null}function vp(e){}function Sp(e){}function yp(){return null}function wp(){}function Cp(e,a){return null}function Ap(){return Zu().slots}function Qu(){return Zu().attrs}function Zu(){const e=Xt();return e.setupContext||(e.setupContext=yc(e))}function ol(e){return he(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function kp(e,a){const l=ol(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=l[o];r?he(r)||Ce(r)?r=l[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=l[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return l}function xp(e,a){return!e||!a?e||a:he(e)&&he(a)?e.concat(a):Xe({},ol(e),ol(a))}function $p(e,a){const l={};for(const o in e)a.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>e[o]});return l}function Bp(e){const a=Xt();let l=e();return fo(),Mo(l)&&(l=l.catch(o=>{throw Yi(a),o})),[l,()=>Yi(a)]}let so=!0;function Tp(e){const a=rs(e),l=e.proxy,o=e.ctx;so=!1,a.beforeCreate&&Ws(a.beforeCreate,e,"bc");const{data:r,computed:d,methods:p,watch:f,provide:s,inject:c,created:g,beforeMount:m,mounted:h,beforeUpdate:w,updated:b,activated:C,deactivated:$,beforeDestroy:D,beforeUnmount:_,destroyed:S,unmounted:x,render:T,renderTracked:I,renderTriggered:V,errorCaptured:M,serverPrefetch:P,expose:q,inheritAttrs:Q,components:Y,directives:ge,filters:Be}=a;if(c&&Dp(c,o,null),p)for(const me in p){const ae=p[me];Ce(ae)&&(o[me]=ae.bind(l))}if(r){const me=r.call(l,l);Ge(me)&&(e.data=si(me))}if(so=!0,d)for(const me in d){const ae=d[me],Le=Ce(ae)?ae.bind(l,l):Ce(ae.get)?ae.get.bind(l,l):yt,We=!Ce(ae)&&Ce(ae.set)?ae.set.bind(l):yt,st=H({get:Le,set:We});Object.defineProperty(o,me,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(f)for(const me in f)ec(f[me],o,l,me);if(s){const me=Ce(s)?s.call(l):s;Reflect.ownKeys(me).forEach(ae=>{mt(ae,me[ae])})}g&&Ws(g,e,"c");function W(me,ae){he(ae)?ae.forEach(Le=>me(Le.bind(l))):ae&&me(ae.bind(l))}if(W(Gu,m),W(ki,h),W(Uu,w),W(mn,b),W(os,C),W(ss,$),W(Ku,M),W(Wu,I),W(Ju,V),W(pn,_),W(Zi,x),W(Yu,P),he(q))if(q.length){const me=e.exposed||(e.exposed={});q.forEach(ae=>{Object.defineProperty(me,ae,{get:()=>l[ae],set:Le=>l[ae]=Le})})}else e.exposed||(e.exposed={});T&&e.render===yt&&(e.render=T),Q!=null&&(e.inheritAttrs=Q),Y&&(e.components=Y),ge&&(e.directives=ge)}function Dp(e,a,l=yt){he(e)&&(e=ro(e));for(const o in e){const r=e[o];let d;Ge(r)?"default"in r?d=He(r.from||o,r.default,!0):d=He(r.from||o):d=He(r),pt(d)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>d.value,set:p=>d.value=p}):a[o]=d}}function Ws(e,a,l){It(he(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,l)}function ec(e,a,l,o){const r=o.includes(".")?Nu(l,o):()=>l[o];if(Qe(e)){const d=a[e];Ce(d)&&gt(r,d)}else if(Ce(e))gt(r,e.bind(l));else if(Ge(e))if(he(e))e.forEach(d=>ec(d,a,l,o));else{const d=Ce(e.handler)?e.handler.bind(l):a[e.handler];Ce(d)&&gt(r,d,e)}}function rs(e){const a=e.type,{mixins:l,extends:o}=a,{mixins:r,optionsCache:d,config:{optionMergeStrategies:p}}=e.appContext,f=d.get(a);let s;return f?s=f:!r.length&&!l&&!o?s=a:(s={},r.length&&r.forEach(c=>Ol(s,c,p,!0)),Ol(s,a,p)),Ge(a)&&d.set(a,s),s}function Ol(e,a,l,o=!1){const{mixins:r,extends:d}=a;d&&Ol(e,d,l,!0),r&&r.forEach(p=>Ol(e,p,l,!0));for(const p in a)if(!(o&&p==="expose")){const f=Lp[p]||l&&l[p];e[p]=f?f(e[p],a[p]):a[p]}return e}const Lp={data:Ks,props:Xs,emits:Xs,methods:Ma,computed:Ma,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ma,directives:Ma,watch:Rp,provide:Ks,inject:Ip};function Ks(e,a){return a?e?function(){return Xe(Ce(e)?e.call(this,this):e,Ce(a)?a.call(this,this):a)}:a:e}function Ip(e,a){return Ma(ro(e),ro(a))}function ro(e){if(he(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function bt(e,a){return e?[...new Set([].concat(e,a))]:a}function Ma(e,a){return e?Xe(Object.create(null),e,a):a}function Xs(e,a){return e?he(e)&&he(a)?[...new Set([...e,...a])]:Xe(Object.create(null),ol(e),ol(a??{})):a}function Rp(e,a){if(!e)return a;if(!a)return e;const l=Xe(Object.create(null),e);for(const o in a)l[o]=bt(e[o],a[o]);return l}function tc(){return{app:null,config:{isNativeTag:qd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ep=0;function zp(e,a){return function(o,r=null){Ce(o)||(o=Xe({},o)),r!=null&&!Ge(r)&&(r=null);const d=tc(),p=new WeakSet;let f=!1;const s=d.app={_uid:Ep++,_component:o,_props:r,_container:null,_context:d,_instance:null,version:Cc,get config(){return d.config},set config(c){},use(c,...g){return p.has(c)||(c&&Ce(c.install)?(p.add(c),c.install(s,...g)):Ce(c)&&(p.add(c),c(s,...g))),s},mixin(c){return d.mixins.includes(c)||d.mixins.push(c),s},component(c,g){return g?(d.components[c]=g,s):d.components[c]},directive(c,g){return g?(d.directives[c]=g,s):d.directives[c]},mount(c,g,m){if(!f){const h=t(o,r);return h.appContext=d,m===!0?m="svg":m===!1&&(m=void 0),g&&a?a(h,c):e(h,c,m),f=!0,s._container=c,c.__vue_app__=s,hn(h.component)||h.component.proxy}},unmount(){f&&(e(null,s._container),delete s._container.__vue_app__)},provide(c,g){return d.provides[c]=g,s},runWithContext(c){sl=s;try{return c()}finally{sl=null}}};return s}}let sl=null;function mt(e,a){if(ot){let l=ot.provides;const o=ot.parent&&ot.parent.provides;o===l&&(l=ot.provides=Object.create(o)),l[e]=a}}function He(e,a,l=!1){const o=ot||at;if(o||sl){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:sl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return l&&Ce(a)?a.call(o&&o.proxy):a}}function Fp(){return!!(ot||at||sl)}function Pp(e,a,l,o=!1){const r={},d={};Pl(d,gn,1),e.propsDefaults=Object.create(null),ic(e,a,r,d);for(const p in e.propsOptions[0])p in r||(r[p]=void 0);l?e.props=o?r:Su(r):e.type.props?e.props=r:e.props=d,e.attrs=d}function Vp(e,a,l,o){const{props:r,attrs:d,vnode:{patchFlag:p}}=e,f=Re(r),[s]=e.propsOptions;let c=!1;if((o||p>0)&&!(p&16)){if(p&8){const g=e.vnode.dynamicProps;for(let m=0;m<g.length;m++){let h=g[m];if(sn(e.emitsOptions,h))continue;const w=a[h];if(s)if(Fe(d,h))w!==d[h]&&(d[h]=w,c=!0);else{const b=vt(h);r[b]=uo(s,f,b,w,e,!1)}else w!==d[h]&&(d[h]=w,c=!0)}}}else{ic(e,a,r,d)&&(c=!0);let g;for(const m in f)(!a||!Fe(a,m)&&((g=Tt(m))===m||!Fe(a,g)))&&(s?l&&(l[m]!==void 0||l[g]!==void 0)&&(r[m]=uo(s,f,m,void 0,e,!0)):delete r[m]);if(d!==f)for(const m in d)(!a||!Fe(a,m))&&(delete d[m],c=!0)}c&&ii(e,"set","$attrs")}function ic(e,a,l,o){const[r,d]=e.propsOptions;let p=!1,f;if(a)for(let s in a){if(qa(s))continue;const c=a[s];let g;r&&Fe(r,g=vt(s))?!d||!d.includes(g)?l[g]=c:(f||(f={}))[g]=c:sn(e.emitsOptions,s)||(!(s in o)||c!==o[s])&&(o[s]=c,p=!0)}if(d){const s=Re(l),c=f||je;for(let g=0;g<d.length;g++){const m=d[g];l[m]=uo(r,s,m,c[m],e,!Fe(c,m))}}return p}function uo(e,a,l,o,r,d){const p=e[l];if(p!=null){const f=Fe(p,"default");if(f&&o===void 0){const s=p.default;if(p.type!==Function&&!p.skipFactory&&Ce(s)){const{propsDefaults:c}=r;if(l in c)o=c[l];else{const g=Yi(r);o=c[l]=s.call(null,a),g()}}else o=s}p[0]&&(d&&!f?o=!1:p[1]&&(o===""||o===Tt(l))&&(o=!0))}return o}function ac(e,a,l=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const d=e.props,p={},f=[];let s=!1;if(!Ce(e)){const g=m=>{s=!0;const[h,w]=ac(m,a,!0);Xe(p,h),w&&f.push(...w)};!l&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!d&&!s)return Ge(e)&&o.set(e,sa),sa;if(he(d))for(let g=0;g<d.length;g++){const m=vt(d[g]);Qs(m)&&(p[m]=je)}else if(d)for(const g in d){const m=vt(g);if(Qs(m)){const h=d[g],w=p[m]=he(h)||Ce(h)?{type:h}:Xe({},h);if(w){const b=tr(Boolean,w.type),C=tr(String,w.type);w[0]=b>-1,w[1]=C<0||b<C,(b>-1||Fe(w,"default"))&&f.push(m)}}}const c=[p,f];return Ge(e)&&o.set(e,c),c}function Qs(e){return e[0]!=="$"}function Zs(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function er(e,a){return Zs(e)===Zs(a)}function tr(e,a){return he(a)?a.findIndex(l=>er(l,e)):Ce(a)&&er(a,e)?0:-1}const lc=e=>e[0]==="_"||e==="$stable",us=e=>he(e)?e.map($t):[$t(e)],Mp=(e,a,l)=>{if(a._n)return a;const o=i((...r)=>us(a(...r)),l);return o._c=!1,o},nc=(e,a,l)=>{const o=e._ctx;for(const r in e){if(lc(r))continue;const d=e[r];if(Ce(d))a[r]=Mp(r,d,o);else if(d!=null){const p=us(d);a[r]=()=>p}}},oc=(e,a)=>{const l=us(a);e.slots.default=()=>l},Hp=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Re(a),Pl(a,"_",l)):nc(a,e.slots={})}else e.slots={},a&&oc(e,a);Pl(e.slots,gn,1)},Np=(e,a,l)=>{const{vnode:o,slots:r}=e;let d=!0,p=je;if(o.shapeFlag&32){const f=a._;f?l&&f===1?d=!1:(Xe(r,a),!l&&f===1&&delete r._):(d=!a.$stable,nc(a,r)),p=a}else a&&(oc(e,a),p={default:1});if(d)for(const f in r)!lc(f)&&p[f]==null&&delete r[f]};function jl(e,a,l,o,r=!1){if(he(e)){e.forEach((h,w)=>jl(h,a&&(he(a)?a[w]:a),l,o,r));return}if(Mi(o)&&!r)return;const d=o.shapeFlag&4?hn(o.component)||o.component.proxy:o.el,p=r?null:d,{i:f,r:s}=e,c=a&&a.r,g=f.refs===je?f.refs={}:f.refs,m=f.setupState;if(c!=null&&c!==s&&(Qe(c)?(g[c]=null,Fe(m,c)&&(m[c]=null)):pt(c)&&(c.value=null)),Ce(s))ai(s,f,12,[p,g]);else{const h=Qe(s),w=pt(s),b=e.f;if(h||w){const C=()=>{if(b){const $=h?Fe(m,s)?m[s]:g[s]:s.value;r?he($)&&Vo($,d):he($)?$.includes(d)||$.push(d):h?(g[s]=[d],Fe(m,s)&&(m[s]=g[s])):(s.value=[d],e.k&&(g[e.k]=s.value))}else h?(g[s]=p,Fe(m,s)&&(m[s]=p)):w&&(s.value=p,e.k&&(g[e.k]=p))};r||b?C():(C.id=-1,dt(C,l))}}}let di=!1;const Op=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",jp=e=>e.namespaceURI.includes("MathML"),kl=e=>{if(Op(e))return"svg";if(jp(e))return"mathml"},xl=e=>e.nodeType===8;function qp(e){const{mt:a,p:l,o:{patchProp:o,createText:r,nextSibling:d,parentNode:p,remove:f,insert:s,createComment:c}}=e,g=(S,x)=>{if(!x.hasChildNodes()){l(null,S,x),Nl(),x._vnode=S;return}di=!1,m(x.firstChild,S,null,null,null),Nl(),x._vnode=S,di&&console.error("Hydration completed but contains mismatches.")},m=(S,x,T,I,V,M=!1)=>{const P=xl(S)&&S.data==="[",q=()=>C(S,x,T,I,V,P),{type:Q,ref:Y,shapeFlag:ge,patchFlag:Be}=x;let U=S.nodeType;x.el=S,Be===-2&&(M=!1,x.dynamicChildren=null);let W=null;switch(Q){case Gi:U!==3?x.children===""?(s(x.el=r(""),p(S),S),W=S):W=q():(S.data!==x.children&&(di=!0,S.data=x.children),W=d(S));break;case ht:_(S)?(W=d(S),D(x.el=S.content.firstChild,S,T)):U!==8||P?W=q():W=d(S);break;case Hi:if(P&&(S=d(S),U=S.nodeType),U===1||U===3){W=S;const me=!x.children.length;for(let ae=0;ae<x.staticCount;ae++)me&&(x.children+=W.nodeType===1?W.outerHTML:W.data),ae===x.staticCount-1&&(x.anchor=W),W=d(W);return P?d(W):W}else q();break;case Ae:P?W=b(S,x,T,I,V,M):W=q();break;default:if(ge&1)(U!==1||x.type.toLowerCase()!==S.tagName.toLowerCase())&&!_(S)?W=q():W=h(S,x,T,I,V,M);else if(ge&6){x.slotScopeIds=V;const me=p(S);if(P?W=$(S):xl(S)&&S.data==="teleport start"?W=$(S,S.data,"teleport end"):W=d(S),a(x,me,null,T,I,kl(me),M),Mi(x)){let ae;P?(ae=t(Ae),ae.anchor=W?W.previousSibling:me.lastChild):ae=S.nodeType===3?n(""):t("div"),ae.el=S,x.component.subTree=ae}}else ge&64?U!==8?W=q():W=x.type.hydrate(S,x,T,I,V,M,e,w):ge&128&&(W=x.type.hydrate(S,x,T,I,kl(p(S)),V,M,e,m))}return Y!=null&&jl(Y,null,I,x),W},h=(S,x,T,I,V,M)=>{M=M||!!x.dynamicChildren;const{type:P,props:q,patchFlag:Q,shapeFlag:Y,dirs:ge,transition:Be}=x,U=P==="input"||P==="option";if(U||Q!==-1){ge&&Ut(x,null,T,"created");let W=!1;if(_(S)){W=cc(I,Be)&&T&&T.vnode.props&&T.vnode.props.appear;const ae=S.content.firstChild;W&&Be.beforeEnter(ae),D(ae,S,T),x.el=S=ae}if(Y&16&&!(q&&(q.innerHTML||q.textContent))){let ae=w(S.firstChild,x,S,T,I,V,M);for(;ae;){di=!0;const Le=ae;ae=ae.nextSibling,f(Le)}}else Y&8&&S.textContent!==x.children&&(di=!0,S.textContent=x.children);if(q)if(U||!M||Q&48)for(const ae in q)(U&&(ae.endsWith("value")||ae==="indeterminate")||cl(ae)&&!qa(ae)||ae[0]===".")&&o(S,ae,null,q[ae],void 0,void 0,T);else q.onClick&&o(S,"onClick",null,q.onClick,void 0,void 0,T);let me;(me=q&&q.onVnodeBeforeMount)&&St(me,T,x),ge&&Ut(x,null,T,"beforeMount"),((me=q&&q.onVnodeMounted)||ge||W)&&Fu(()=>{me&&St(me,T,x),W&&Be.enter(S),ge&&Ut(x,null,T,"mounted")},I)}return S.nextSibling},w=(S,x,T,I,V,M,P)=>{P=P||!!x.dynamicChildren;const q=x.children,Q=q.length;for(let Y=0;Y<Q;Y++){const ge=P?q[Y]:q[Y]=$t(q[Y]);if(S)S=m(S,ge,I,V,M,P);else{if(ge.type===Gi&&!ge.children)continue;di=!0,l(null,ge,T,null,I,V,kl(T),M)}}return S},b=(S,x,T,I,V,M)=>{const{slotScopeIds:P}=x;P&&(V=V?V.concat(P):P);const q=p(S),Q=w(d(S),x,q,T,I,V,M);return Q&&xl(Q)&&Q.data==="]"?d(x.anchor=Q):(di=!0,s(x.anchor=c("]"),q,Q),Q)},C=(S,x,T,I,V,M)=>{if(di=!0,x.el=null,M){const Q=$(S);for(;;){const Y=d(S);if(Y&&Y!==Q)f(Y);else break}}const P=d(S),q=p(S);return f(S),l(null,x,q,P,T,I,kl(q),V),P},$=(S,x="[",T="]")=>{let I=0;for(;S;)if(S=d(S),S&&xl(S)&&(S.data===x&&I++,S.data===T)){if(I===0)return d(S);I--}return S},D=(S,x,T)=>{const I=x.parentNode;I&&I.replaceChild(S,x);let V=T;for(;V;)V.vnode.el===x&&(V.vnode.el=V.subTree.el=S),V=V.parent},_=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[g,m]}const dt=Fu;function sc(e){return uc(e)}function rc(e){return uc(e,qp)}function uc(e,a){const l=tu();l.__VUE__=!0;const{insert:o,remove:r,patchProp:d,createElement:p,createText:f,createComment:s,setText:c,setElementText:g,parentNode:m,nextSibling:h,setScopeId:w=yt,insertStaticContent:b}=e,C=(L,E,j,Z=null,ee=null,ne=null,ce=void 0,le=null,se=!!E.dynamicChildren)=>{if(L===E)return;L&&!jt(L,E)&&(Z=re(L),Ue(L,ee,ne,!0),L=null),E.patchFlag===-2&&(se=!1,E.dynamicChildren=null);const{type:ie,ref:pe,shapeFlag:ye}=E;switch(ie){case Gi:$(L,E,j,Z);break;case ht:D(L,E,j,Z);break;case Hi:L==null&&_(E,j,Z,ce);break;case Ae:Y(L,E,j,Z,ee,ne,ce,le,se);break;default:ye&1?T(L,E,j,Z,ee,ne,ce,le,se):ye&6?ge(L,E,j,Z,ee,ne,ce,le,se):(ye&64||ye&128)&&ie.process(L,E,j,Z,ee,ne,ce,le,se,Oe)}pe!=null&&ee&&jl(pe,L&&L.ref,ne,E||L,!E)},$=(L,E,j,Z)=>{if(L==null)o(E.el=f(E.children),j,Z);else{const ee=E.el=L.el;E.children!==L.children&&c(ee,E.children)}},D=(L,E,j,Z)=>{L==null?o(E.el=s(E.children||""),j,Z):E.el=L.el},_=(L,E,j,Z)=>{[L.el,L.anchor]=b(L.children,E,j,Z,L.el,L.anchor)},S=({el:L,anchor:E},j,Z)=>{let ee;for(;L&&L!==E;)ee=h(L),o(L,j,Z),L=ee;o(E,j,Z)},x=({el:L,anchor:E})=>{let j;for(;L&&L!==E;)j=h(L),r(L),L=j;r(E)},T=(L,E,j,Z,ee,ne,ce,le,se)=>{E.type==="svg"?ce="svg":E.type==="math"&&(ce="mathml"),L==null?I(E,j,Z,ee,ne,ce,le,se):P(L,E,ee,ne,ce,le,se)},I=(L,E,j,Z,ee,ne,ce,le)=>{let se,ie;const{props:pe,shapeFlag:ye,transition:Se,dirs:ke}=L;if(se=L.el=p(L.type,ne,pe&&pe.is,pe),ye&8?g(se,L.children):ye&16&&M(L.children,se,null,Z,ee,Rn(L,ne),ce,le),ke&&Ut(L,null,Z,"created"),V(se,L,L.scopeId,ce,Z),pe){for(const qe in pe)qe!=="value"&&!qa(qe)&&d(se,qe,null,pe[qe],ne,L.children,Z,ee,ue);"value"in pe&&d(se,"value",null,pe.value,ne),(ie=pe.onVnodeBeforeMount)&&St(ie,Z,L)}ke&&Ut(L,null,Z,"beforeMount");const Ie=cc(ee,Se);Ie&&Se.beforeEnter(se),o(se,E,j),((ie=pe&&pe.onVnodeMounted)||Ie||ke)&&dt(()=>{ie&&St(ie,Z,L),Ie&&Se.enter(se),ke&&Ut(L,null,Z,"mounted")},ee)},V=(L,E,j,Z,ee)=>{if(j&&w(L,j),Z)for(let ne=0;ne<Z.length;ne++)w(L,Z[ne]);if(ee){let ne=ee.subTree;if(E===ne){const ce=ee.vnode;V(L,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},M=(L,E,j,Z,ee,ne,ce,le,se=0)=>{for(let ie=se;ie<L.length;ie++){const pe=L[ie]=le?_i(L[ie]):$t(L[ie]);C(null,pe,E,j,Z,ee,ne,ce,le)}},P=(L,E,j,Z,ee,ne,ce)=>{const le=E.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:pe}=E;se|=L.patchFlag&16;const ye=L.props||je,Se=E.props||je;let ke;if(j&&Bi(j,!1),(ke=Se.onVnodeBeforeUpdate)&&St(ke,j,E,L),pe&&Ut(E,L,j,"beforeUpdate"),j&&Bi(j,!0),ie?q(L.dynamicChildren,ie,le,j,Z,Rn(E,ee),ne):ce||ae(L,E,le,null,j,Z,Rn(E,ee),ne,!1),se>0){if(se&16)Q(le,E,ye,Se,j,Z,ee);else if(se&2&&ye.class!==Se.class&&d(le,"class",null,Se.class,ee),se&4&&d(le,"style",ye.style,Se.style,ee),se&8){const Ie=E.dynamicProps;for(let qe=0;qe<Ie.length;qe++){const Ke=Ie[qe],rt=ye[Ke],Ot=Se[Ke];(Ot!==rt||Ke==="value")&&d(le,Ke,rt,Ot,ee,L.children,j,Z,ue)}}se&1&&L.children!==E.children&&g(le,E.children)}else!ce&&ie==null&&Q(le,E,ye,Se,j,Z,ee);((ke=Se.onVnodeUpdated)||pe)&&dt(()=>{ke&&St(ke,j,E,L),pe&&Ut(E,L,j,"updated")},Z)},q=(L,E,j,Z,ee,ne,ce)=>{for(let le=0;le<E.length;le++){const se=L[le],ie=E[le],pe=se.el&&(se.type===Ae||!jt(se,ie)||se.shapeFlag&70)?m(se.el):j;C(se,ie,pe,null,Z,ee,ne,ce,!0)}},Q=(L,E,j,Z,ee,ne,ce)=>{if(j!==Z){if(j!==je)for(const le in j)!qa(le)&&!(le in Z)&&d(L,le,j[le],null,ce,E.children,ee,ne,ue);for(const le in Z){if(qa(le))continue;const se=Z[le],ie=j[le];se!==ie&&le!=="value"&&d(L,le,ie,se,ce,E.children,ee,ne,ue)}"value"in Z&&d(L,"value",j.value,Z.value,ce)}},Y=(L,E,j,Z,ee,ne,ce,le,se)=>{const ie=E.el=L?L.el:f(""),pe=E.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:Se,slotScopeIds:ke}=E;ke&&(le=le?le.concat(ke):ke),L==null?(o(ie,j,Z),o(pe,j,Z),M(E.children||[],j,pe,ee,ne,ce,le,se)):ye>0&&ye&64&&Se&&L.dynamicChildren?(q(L.dynamicChildren,Se,j,ee,ne,ce,le),(E.key!=null||ee&&E===ee.subTree)&&cs(L,E,!0)):ae(L,E,j,pe,ee,ne,ce,le,se)},ge=(L,E,j,Z,ee,ne,ce,le,se)=>{E.slotScopeIds=le,L==null?E.shapeFlag&512?ee.ctx.activate(E,j,Z,ce,se):Be(E,j,Z,ee,ne,ce,se):U(L,E,se)},Be=(L,E,j,Z,ee,ne,ce)=>{const le=L.component=_c(L,Z,ee);if(fl(L)&&(le.ctx.renderer=Oe),vc(le),le.asyncDep){if(ee&&ee.registerDep(le,W),!L.el){const se=le.subTree=t(ht);D(null,se,E,j)}}else W(le,L,E,j,ee,ne,ce)},U=(L,E,j)=>{const Z=E.component=L.component;if(Zm(L,E,j))if(Z.asyncDep&&!Z.asyncResolved){me(Z,E,j);return}else Z.next=E,Um(Z.update),Z.effect.dirty=!0,Z.update();else E.el=L.el,Z.vnode=E},W=(L,E,j,Z,ee,ne,ce)=>{const le=()=>{if(L.isMounted){let{next:pe,bu:ye,u:Se,parent:ke,vnode:Ie}=L;{const ia=dc(L);if(ia){pe&&(pe.el=Ie.el,me(L,pe,ce)),ia.asyncDep.then(()=>{L.isUnmounted||le()});return}}let qe=pe,Ke;Bi(L,!1),pe?(pe.el=Ie.el,me(L,pe,ce)):pe=Ie,ye&&ua(ye),(Ke=pe.props&&pe.props.onVnodeBeforeUpdate)&&St(Ke,ke,pe,Ie),Bi(L,!0);const rt=Rl(L),Ot=L.subTree;L.subTree=rt,C(Ot,rt,m(Ot.el),re(Ot),L,ee,ne),pe.el=rt.el,qe===null&&Zo(L,rt.el),Se&&dt(Se,ee),(Ke=pe.props&&pe.props.onVnodeUpdated)&&dt(()=>St(Ke,ke,pe,Ie),ee)}else{let pe;const{el:ye,props:Se}=E,{bm:ke,m:Ie,parent:qe}=L,Ke=Mi(E);if(Bi(L,!1),ke&&ua(ke),!Ke&&(pe=Se&&Se.onVnodeBeforeMount)&&St(pe,qe,E),Bi(L,!0),ye&&$e){const rt=()=>{L.subTree=Rl(L),$e(ye,L.subTree,L,ee,null)};Ke?E.type.__asyncLoader().then(()=>!L.isUnmounted&&rt()):rt()}else{const rt=L.subTree=Rl(L);C(null,rt,j,Z,L,ee,ne),E.el=rt.el}if(Ie&&dt(Ie,ee),!Ke&&(pe=Se&&Se.onVnodeMounted)){const rt=E;dt(()=>St(pe,qe,rt),ee)}(E.shapeFlag&256||qe&&Mi(qe.vnode)&&qe.vnode.shapeFlag&256)&&L.a&&dt(L.a,ee),L.isMounted=!0,E=j=Z=null}},se=L.effect=new ba(le,yt,()=>on(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Bi(L,!0),ie()},me=(L,E,j)=>{E.component=L;const Z=L.vnode.props;L.vnode=E,L.next=null,Vp(L,E.props,Z,j),Np(L,E.children,j),Ki(),qs(L),Xi()},ae=(L,E,j,Z,ee,ne,ce,le,se=!1)=>{const ie=L&&L.children,pe=L?L.shapeFlag:0,ye=E.children,{patchFlag:Se,shapeFlag:ke}=E;if(Se>0){if(Se&128){We(ie,ye,j,Z,ee,ne,ce,le,se);return}else if(Se&256){Le(ie,ye,j,Z,ee,ne,ce,le,se);return}}ke&8?(pe&16&&ue(ie,ee,ne),ye!==ie&&g(j,ye)):pe&16?ke&16?We(ie,ye,j,Z,ee,ne,ce,le,se):ue(ie,ee,ne,!0):(pe&8&&g(j,""),ke&16&&M(ye,j,Z,ee,ne,ce,le,se))},Le=(L,E,j,Z,ee,ne,ce,le,se)=>{L=L||sa,E=E||sa;const ie=L.length,pe=E.length,ye=Math.min(ie,pe);let Se;for(Se=0;Se<ye;Se++){const ke=E[Se]=se?_i(E[Se]):$t(E[Se]);C(L[Se],ke,j,null,ee,ne,ce,le,se)}ie>pe?ue(L,ee,ne,!0,!1,ye):M(E,j,Z,ee,ne,ce,le,se,ye)},We=(L,E,j,Z,ee,ne,ce,le,se)=>{let ie=0;const pe=E.length;let ye=L.length-1,Se=pe-1;for(;ie<=ye&&ie<=Se;){const ke=L[ie],Ie=E[ie]=se?_i(E[ie]):$t(E[ie]);if(jt(ke,Ie))C(ke,Ie,j,null,ee,ne,ce,le,se);else break;ie++}for(;ie<=ye&&ie<=Se;){const ke=L[ye],Ie=E[Se]=se?_i(E[Se]):$t(E[Se]);if(jt(ke,Ie))C(ke,Ie,j,null,ee,ne,ce,le,se);else break;ye--,Se--}if(ie>ye){if(ie<=Se){const ke=Se+1,Ie=ke<pe?E[ke].el:Z;for(;ie<=Se;)C(null,E[ie]=se?_i(E[ie]):$t(E[ie]),j,Ie,ee,ne,ce,le,se),ie++}}else if(ie>Se)for(;ie<=ye;)Ue(L[ie],ee,ne,!0),ie++;else{const ke=ie,Ie=ie,qe=new Map;for(ie=Ie;ie<=Se;ie++){const kt=E[ie]=se?_i(E[ie]):$t(E[ie]);kt.key!=null&&qe.set(kt.key,ie)}let Ke,rt=0;const Ot=Se-Ie+1;let ia=!1,Is=0;const Ia=new Array(Ot);for(ie=0;ie<Ot;ie++)Ia[ie]=0;for(ie=ke;ie<=ye;ie++){const kt=L[ie];if(rt>=Ot){Ue(kt,ee,ne,!0);continue}let Gt;if(kt.key!=null)Gt=qe.get(kt.key);else for(Ke=Ie;Ke<=Se;Ke++)if(Ia[Ke-Ie]===0&&jt(kt,E[Ke])){Gt=Ke;break}Gt===void 0?Ue(kt,ee,ne,!0):(Ia[Gt-Ie]=ie+1,Gt>=Is?Is=Gt:ia=!0,C(kt,E[Gt],j,null,ee,ne,ce,le,se),rt++)}const Rs=ia?Gp(Ia):sa;for(Ke=Rs.length-1,ie=Ot-1;ie>=0;ie--){const kt=Ie+ie,Gt=E[kt],Es=kt+1<pe?E[kt+1].el:Z;Ia[ie]===0?C(null,Gt,j,Es,ee,ne,ce,le,se):ia&&(Ke<0||ie!==Rs[Ke]?st(Gt,j,Es,2):Ke--)}}},st=(L,E,j,Z,ee=null)=>{const{el:ne,type:ce,transition:le,children:se,shapeFlag:ie}=L;if(ie&6){st(L.component.subTree,E,j,Z);return}if(ie&128){L.suspense.move(E,j,Z);return}if(ie&64){ce.move(L,E,j,Oe);return}if(ce===Ae){o(ne,E,j);for(let ye=0;ye<se.length;ye++)st(se[ye],E,j,Z);o(L.anchor,E,j);return}if(ce===Hi){S(L,E,j);return}if(Z!==2&&ie&1&&le)if(Z===0)le.beforeEnter(ne),o(ne,E,j),dt(()=>le.enter(ne),ee);else{const{leave:ye,delayLeave:Se,afterLeave:ke}=le,Ie=()=>o(ne,E,j),qe=()=>{ye(ne,()=>{Ie(),ke&&ke()})};Se?Se(ne,Ie,qe):qe()}else o(ne,E,j)},Ue=(L,E,j,Z=!1,ee=!1)=>{const{type:ne,props:ce,ref:le,children:se,dynamicChildren:ie,shapeFlag:pe,patchFlag:ye,dirs:Se}=L;if(le!=null&&jl(le,null,j,L,!0),pe&256){E.ctx.deactivate(L);return}const ke=pe&1&&Se,Ie=!Mi(L);let qe;if(Ie&&(qe=ce&&ce.onVnodeBeforeUnmount)&&St(qe,E,L),pe&6)J(L.component,j,Z);else{if(pe&128){L.suspense.unmount(j,Z);return}ke&&Ut(L,null,E,"beforeUnmount"),pe&64?L.type.remove(L,E,j,ee,Oe,Z):ie&&(ne!==Ae||ye>0&&ye&64)?ue(ie,E,j,!1,!0):(ne===Ae&&ye&384||!ee&&pe&16)&&ue(se,E,j),Z&&Qt(L)}(Ie&&(qe=ce&&ce.onVnodeUnmounted)||ke)&&dt(()=>{qe&&St(qe,E,L),ke&&Ut(L,null,E,"unmounted")},j)},Qt=L=>{const{type:E,el:j,anchor:Z,transition:ee}=L;if(E===Ae){Ft(j,Z);return}if(E===Hi){x(L);return}const ne=()=>{r(j),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:le}=ee,se=()=>ce(j,ne);le?le(L.el,ne,se):se()}else ne()},Ft=(L,E)=>{let j;for(;L!==E;)j=h(L),r(L),L=j;r(E)},J=(L,E,j)=>{const{bum:Z,scope:ee,update:ne,subTree:ce,um:le}=L;Z&&ua(Z),ee.stop(),ne&&(ne.active=!1,Ue(ce,L,E,j)),le&&dt(le,E),dt(()=>{L.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ue=(L,E,j,Z=!1,ee=!1,ne=0)=>{for(let ce=ne;ce<L.length;ce++)Ue(L[ce],E,j,Z,ee)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let be=!1;const Ne=(L,E,j)=>{L==null?E._vnode&&Ue(E._vnode,null,null,!0):C(E._vnode||null,L,E,null,null,null,j),be||(be=!0,qs(),Nl(),be=!1),E._vnode=L},Oe={p:C,um:Ue,m:st,r:Qt,mt:Be,mc:M,pc:ae,pbc:q,n:re,o:e};let xe,$e;return a&&([xe,$e]=a(Oe)),{render:Ne,hydrate:xe,createApp:zp(Ne,xe)}}function Rn({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Bi({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function cc(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function cs(e,a,l=!1){const o=e.children,r=a.children;if(he(o)&&he(r))for(let d=0;d<o.length;d++){const p=o[d];let f=r[d];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[d]=_i(r[d]),f.el=p.el),l||cs(p,f)),f.type===Gi&&(f.el=p.el)}}function Gp(e){const a=e.slice(),l=[0];let o,r,d,p,f;const s=e.length;for(o=0;o<s;o++){const c=e[o];if(c!==0){if(r=l[l.length-1],e[r]<c){a[o]=r,l.push(o);continue}for(d=0,p=l.length-1;d<p;)f=d+p>>1,e[l[f]]<c?d=f+1:p=f;c<e[l[d]]&&(d>0&&(a[o]=l[d-1]),l[d]=o)}}for(d=l.length,p=l[d-1];d-- >0;)l[d]=p,p=a[p];return l}function dc(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:dc(a)}const Up=e=>e.__isTeleport,Ya=e=>e&&(e.disabled||e.disabled===""),ir=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ar=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,co=(e,a)=>{const l=e&&e.to;return Qe(l)?a?a(l):null:l},Yp={name:"Teleport",__isTeleport:!0,process(e,a,l,o,r,d,p,f,s,c){const{mc:g,pc:m,pbc:h,o:{insert:w,querySelector:b,createText:C,createComment:$}}=c,D=Ya(a.props);let{shapeFlag:_,children:S,dynamicChildren:x}=a;if(e==null){const T=a.el=C(""),I=a.anchor=C("");w(T,l,o),w(I,l,o);const V=a.target=co(a.props,b),M=a.targetAnchor=C("");V&&(w(M,V),p==="svg"||ir(V)?p="svg":(p==="mathml"||ar(V))&&(p="mathml"));const P=(q,Q)=>{_&16&&g(S,q,Q,r,d,p,f,s)};D?P(l,I):V&&P(V,M)}else{a.el=e.el;const T=a.anchor=e.anchor,I=a.target=e.target,V=a.targetAnchor=e.targetAnchor,M=Ya(e.props),P=M?l:I,q=M?T:V;if(p==="svg"||ir(I)?p="svg":(p==="mathml"||ar(I))&&(p="mathml"),x?(h(e.dynamicChildren,x,P,r,d,p,f),cs(e,a,!0)):s||m(e,a,P,q,r,d,p,f,!1),D)M?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):$l(a,l,T,c,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const Q=a.target=co(a.props,b);Q&&$l(a,Q,null,c,0)}else M&&$l(a,I,V,c,1)}mc(a)},remove(e,a,l,o,{um:r,o:{remove:d}},p){const{shapeFlag:f,children:s,anchor:c,targetAnchor:g,target:m,props:h}=e;if(m&&d(g),p&&d(c),f&16){const w=p||!Ya(h);for(let b=0;b<s.length;b++){const C=s[b];r(C,a,l,w,!!C.dynamicChildren)}}},move:$l,hydrate:Jp};function $l(e,a,l,{o:{insert:o},m:r},d=2){d===0&&o(e.targetAnchor,a,l);const{el:p,anchor:f,shapeFlag:s,children:c,props:g}=e,m=d===2;if(m&&o(p,a,l),(!m||Ya(g))&&s&16)for(let h=0;h<c.length;h++)r(c[h],a,l,2);m&&o(f,a,l)}function Jp(e,a,l,o,r,d,{o:{nextSibling:p,parentNode:f,querySelector:s}},c){const g=a.target=co(a.props,s);if(g){const m=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Ya(a.props))a.anchor=c(p(e),a,f(e),l,o,r,d),a.targetAnchor=m;else{a.anchor=p(e);let h=m;for(;h;)if(h=p(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&p(a.targetAnchor);break}c(m,a,g,l,o,r,d)}mc(a)}return a.anchor&&p(a.anchor)}const fn=Yp;function mc(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ae=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Ja=[];let wt=null;function k(e=!1){Ja.push(wt=e?null:[])}function pc(){Ja.pop(),wt=Ja[Ja.length-1]||null}let Ui=1;function mo(e){Ui+=e}function fc(e){return e.dynamicChildren=Ui>0?wt||sa:null,pc(),Ui>0&&wt&&wt.push(e),e}function _e(e,a,l,o,r,d){return fc(v(e,a,l,o,r,d,!0))}function B(e,a,l,o,r){return fc(t(e,a,l,o,r,!0))}function Rt(e){return e?e.__v_isVNode===!0:!1}function jt(e,a){return e.type===a.type&&e.key===a.key}function Wp(e){}const gn="__vInternal",gc=({key:e})=>e??null,El=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Qe(e)||pt(e)||Ce(e)?{i:at,r:e,k:a,f:!!l}:e:null);function v(e,a=null,l=null,o=0,r=null,d=e===Ae?0:1,p=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&gc(a),ref:a&&El(a),scopeId:rn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return f?(ms(s,l),d&128&&e.normalize(s)):l&&(s.shapeFlag|=Qe(l)?8:16),Ui>0&&!p&&wt&&(s.patchFlag>0||d&6)&&s.patchFlag!==32&&wt.push(s),s}const t=Kp;function Kp(e,a=null,l=null,o=0,r=null,d=!1){if((!e||e===Ru)&&(e=ht),Rt(e)){const f=Kt(e,a,!0);return l&&ms(f,l),Ui>0&&!d&&wt&&(f.shapeFlag&6?wt[wt.indexOf(e)]=f:wt.push(f)),f.patchFlag|=-2,f}if(nf(e)&&(e=e.__vccOpts),a){a=hc(a);let{class:f,style:s}=a;f&&!Qe(f)&&(a.class=ml(f)),Ge(s)&&(Yo(s)&&!he(s)&&(s=Xe({},s)),a.style=xa(s))}const p=Qe(e)?1:zu(e)?128:Up(e)?64:Ge(e)?4:Ce(e)?2:0;return v(e,a,l,o,r,p,d,!0)}function hc(e){return e?Yo(e)||gn in e?Xe({},e):e:null}function Kt(e,a,l=!1){const{props:o,ref:r,patchFlag:d,children:p}=e,f=a?ea(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&gc(f),ref:a&&a.ref?l&&r?he(r)?r.concat(El(a)):[r,El(a)]:El(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:p,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ae?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(Gi,null,e,a)}function Xp(e,a){const l=t(Hi,null,e);return l.staticCount=a,l}function ds(e="",a=!1){return a?(k(),B(ht,null,e)):t(ht,null,e)}function $t(e){return e==null||typeof e=="boolean"?t(ht):he(e)?t(Ae,null,e.slice()):typeof e=="object"?_i(e):t(Gi,null,String(e))}function _i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function ms(e,a){let l=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(he(a))l=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),ms(e,r()),r._c&&(r._d=!0));return}else{l=32;const r=a._;!r&&!(gn in a)?a._ctx=at:r===3&&at&&(at.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else Ce(a)?(a={default:a,_ctx:at},l=32):(a=String(a),o&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function ea(...e){const a={};for(let l=0;l<e.length;l++){const o=e[l];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=ml([a.class,o.class]));else if(r==="style")a.style=xa([a.style,o.style]);else if(cl(r)){const d=a[r],p=o[r];p&&d!==p&&!(he(d)&&d.includes(p))&&(a[r]=d?[].concat(d,p):p)}else r!==""&&(a[r]=o[r])}return a}function St(e,a,l,o=null){It(e,a,7,[l,o])}const Qp=tc();let Zp=0;function _c(e,a,l){const o=e.type,r=(a?a.appContext:e.appContext)||Qp,d={uid:Zp++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new No(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ac(o,r),emitsOptions:Du(o,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:o.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=Jm.bind(null,d),e.ce&&e.ce(d),d}let ot=null;const Xt=()=>ot||at;let ql,po;{const e=tu(),a=(l,o)=>{let r;return(r=e[l])||(r=e[l]=[]),r.push(o),d=>{r.length>1?r.forEach(p=>p(d)):r[0](d)}};ql=a("__VUE_INSTANCE_SETTERS__",l=>ot=l),po=a("__VUE_SSR_SETTERS__",l=>gl=l)}const Yi=e=>{const a=ot;return ql(e),e.scope.on(),()=>{e.scope.off(),ql(a)}},fo=()=>{ot&&ot.scope.off(),ql(null)};function bc(e){return e.vnode.shapeFlag&4}let gl=!1;function vc(e,a=!1){a&&po(a);const{props:l,children:o}=e.vnode,r=bc(e);Pp(e,l,r,a),Hp(e,o);const d=r?ef(e,a):void 0;return a&&po(!1),d}function ef(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=Jo(new Proxy(e.ctx,oo));const{setup:o}=l;if(o){const r=e.setupContext=o.length>1?yc(e):null,d=Yi(e);Ki();const p=ai(o,e,0,[e.props,r]);if(Xi(),d(),Mo(p)){if(p.then(fo,fo),a)return p.then(f=>{go(e,f,a)}).catch(f=>{Qi(f,e,0)});e.asyncDep=p}else go(e,p,a)}else Sc(e,a)}function go(e,a,l){Ce(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Ge(a)&&(e.setupState=Xo(a)),Sc(e,l)}let Gl,ho;function tf(e){Gl=e,ho=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,hp))}}const af=()=>!Gl;function Sc(e,a,l){const o=e.type;if(!e.render){if(!a&&Gl&&!o.render){const r=o.template||rs(e).template;if(r){const{isCustomElement:d,compilerOptions:p}=e.appContext.config,{delimiters:f,compilerOptions:s}=o,c=Xe(Xe({isCustomElement:d,delimiters:f},p),s);o.render=Gl(r,c)}}e.render=o.render||yt,ho&&ho(e)}{const r=Yi(e);Ki();try{Tp(e)}finally{Xi(),r()}}}function lf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return At(e,"get","$attrs"),a[l]}}))}function yc(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return lf(e)},slots:e.slots,emit:e.emit,expose:a}}function hn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xo(Jo(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Ua)return Ua[l](e)},has(a,l){return l in a||l in Ua}}))}function _o(e,a=!0){return Ce(e)?e.displayName||e.name:e.name||a&&e.__name}function nf(e){return Ce(e)&&"__vccOpts"in e}const H=(e,a)=>Dm(e,a,gl);function of(e,a,l=je){const o=Xt(),r=vt(a),d=Tt(a),p=Au((s,c)=>{let g;return Hu(()=>{const m=e[a];qt(g,m)&&(g=m,c())}),{get(){return s(),l.get?l.get(g):g},set(m){const h=o.vnode.props;!(h&&(a in h||r in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${d}`in h))&&qt(m,g)&&(g=m,c()),o.emit(`update:${a}`,l.set?l.set(m):m)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return p[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[f]||{}:p,done:!1}:{done:!0}}}},p}function X(e,a,l){const o=arguments.length;return o===2?Ge(a)&&!he(a)?Rt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&Rt(l)&&(l=[l]),t(e,a,l))}function sf(){}function rf(e,a,l,o){const r=l[o];if(r&&wc(r,e))return r;const d=a();return d.memo=e.slice(),l[o]=d}function wc(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let o=0;o<l.length;o++)if(qt(l[o],a[o]))return!1;return Ui>0&&wt&&wt.push(e),!0}const Cc="3.4.15",uf=yt,cf=jm,df=la,mf=Tu,pf={createComponentInstance:_c,setupComponent:vc,renderComponentRoot:Rl,setCurrentRenderingInstance:ll,isVNode:Rt,normalizeVNode:$t},ff=pf,gf=null,hf=null,_f=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const bf="http://www.w3.org/2000/svg",vf="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,lr=bi&&bi.createElement("template"),Sf={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,o)=>{const r=a==="svg"?bi.createElementNS(bf,e):a==="mathml"?bi.createElementNS(vf,e):bi.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>bi.createTextNode(e),createComment:e=>bi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,o,r,d){const p=l?l.previousSibling:a.lastChild;if(r&&(r===d||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),l),!(r===d||!(r=r.nextSibling)););else{lr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=lr.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}a.insertBefore(f,l)}return[p?p.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},mi="transition",Ra="animation",Sa=Symbol("_vtc"),_n=(e,{slots:a})=>X(Ou,kc(e),a);_n.displayName="Transition";const Ac={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yf=_n.props=Xe({},ns,Ac),Ti=(e,a=[])=>{he(e)?e.forEach(l=>l(...a)):e&&e(...a)},nr=e=>e?he(e)?e.some(a=>a.length>1):e.length>1:!1;function kc(e){const a={};for(const Y in e)Y in Ac||(a[Y]=e[Y]);if(e.css===!1)return a;const{name:l="v",type:o,duration:r,enterFromClass:d=`${l}-enter-from`,enterActiveClass:p=`${l}-enter-active`,enterToClass:f=`${l}-enter-to`,appearFromClass:s=d,appearActiveClass:c=p,appearToClass:g=f,leaveFromClass:m=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:w=`${l}-leave-to`}=e,b=wf(r),C=b&&b[0],$=b&&b[1],{onBeforeEnter:D,onEnter:_,onEnterCancelled:S,onLeave:x,onLeaveCancelled:T,onBeforeAppear:I=D,onAppear:V=_,onAppearCancelled:M=S}=a,P=(Y,ge,Be)=>{fi(Y,ge?g:f),fi(Y,ge?c:p),Be&&Be()},q=(Y,ge)=>{Y._isLeaving=!1,fi(Y,m),fi(Y,w),fi(Y,h),ge&&ge()},Q=Y=>(ge,Be)=>{const U=Y?V:_,W=()=>P(ge,Y,Be);Ti(U,[ge,W]),or(()=>{fi(ge,Y?s:d),Zt(ge,Y?g:f),nr(U)||sr(ge,o,C,W)})};return Xe(a,{onBeforeEnter(Y){Ti(D,[Y]),Zt(Y,d),Zt(Y,p)},onBeforeAppear(Y){Ti(I,[Y]),Zt(Y,s),Zt(Y,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(Y,ge){Y._isLeaving=!0;const Be=()=>q(Y,ge);Zt(Y,m),$c(),Zt(Y,h),or(()=>{Y._isLeaving&&(fi(Y,m),Zt(Y,w),nr(x)||sr(Y,o,$,Be))}),Ti(x,[Y,Be])},onEnterCancelled(Y){P(Y,!1),Ti(S,[Y])},onAppearCancelled(Y){P(Y,!0),Ti(M,[Y])},onLeaveCancelled(Y){q(Y),Ti(T,[Y])}})}function wf(e){if(e==null)return null;if(Ge(e))return[En(e.enter),En(e.leave)];{const a=En(e);return[a,a]}}function En(e){return Vl(e)}function Zt(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[Sa]||(e[Sa]=new Set)).add(a)}function fi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[Sa];l&&(l.delete(a),l.size||(e[Sa]=void 0))}function or(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cf=0;function sr(e,a,l,o){const r=e._endId=++Cf,d=()=>{r===e._endId&&o()};if(l)return setTimeout(d,l);const{type:p,timeout:f,propCount:s}=xc(e,a);if(!p)return o();const c=p+"end";let g=0;const m=()=>{e.removeEventListener(c,h),d()},h=w=>{w.target===e&&++g>=s&&m()};setTimeout(()=>{g<s&&m()},f+1),e.addEventListener(c,h)}function xc(e,a){const l=window.getComputedStyle(e),o=b=>(l[b]||"").split(", "),r=o(`${mi}Delay`),d=o(`${mi}Duration`),p=rr(r,d),f=o(`${Ra}Delay`),s=o(`${Ra}Duration`),c=rr(f,s);let g=null,m=0,h=0;a===mi?p>0&&(g=mi,m=p,h=d.length):a===Ra?c>0&&(g=Ra,m=c,h=s.length):(m=Math.max(p,c),g=m>0?p>c?mi:Ra:null,h=g?g===mi?d.length:s.length:0);const w=g===mi&&/\b(transform|all)(,|$)/.test(o(`${mi}Property`).toString());return{type:g,timeout:m,propCount:h,hasTransform:w}}function rr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,o)=>ur(l)+ur(e[o])))}function ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function $c(){return document.body.offsetHeight}function Af(e,a,l){const o=e[Sa];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const ps=Symbol("_vod"),Bc={beforeMount(e,{value:a},{transition:l}){e[ps]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):Ea(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:o}){!a!=!l&&(o?a?(o.beforeEnter(e),Ea(e,!0),o.enter(e)):o.leave(e,()=>{Ea(e,!1)}):Ea(e,a))},beforeUnmount(e,{value:a}){Ea(e,a)}};function Ea(e,a){e.style.display=a?e[ps]:"none"}function kf(){Bc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Tc=Symbol("");function xf(e){const a=Xt();if(!a)return;const l=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>vo(d,r))},o=()=>{const r=e(a.proxy);bo(a.subTree,r),l(r)};Mu(o),ki(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),Zi(()=>r.disconnect())})}function bo(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{bo(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)vo(e.el,a);else if(e.type===Ae)e.children.forEach(l=>bo(l,a));else if(e.type===Hi){let{el:l,anchor:o}=e;for(;l&&(vo(l,a),l!==o);)l=l.nextSibling}}function vo(e,a){if(e.nodeType===1){const l=e.style;let o="";for(const r in a)l.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;l[Tc]=o}}function $f(e,a,l){const o=e.style,r=o.display,d=Qe(l);if(l&&!d){if(a&&!Qe(a))for(const p in a)l[p]==null&&So(o,p,"");for(const p in l)So(o,p,l[p])}else if(d){if(a!==l){const p=o[Tc];p&&(l+=";"+p),o.cssText=l}}else a&&e.removeAttribute("style");ps in e&&(o.display=r)}const cr=/\s*!important$/;function So(e,a,l){if(he(l))l.forEach(o=>So(e,a,o));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const o=Bf(e,a);cr.test(l)?e.setProperty(Tt(o),l.replace(cr,""),"important"):e[o]=l}}const dr=["Webkit","Moz","ms"],zn={};function Bf(e,a){const l=zn[a];if(l)return l;let o=vt(a);if(o!=="filter"&&o in e)return zn[a]=o;o=dl(o);for(let r=0;r<dr.length;r++){const d=dr[r]+o;if(d in e)return zn[a]=d}return a}const mr="http://www.w3.org/1999/xlink";function Tf(e,a,l,o,r){if(o&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(mr,a.slice(6,a.length)):e.setAttributeNS(mr,a,l);else{const d=lm(a);l==null||d&&!iu(l)?e.removeAttribute(a):e.setAttribute(a,d?"":l)}}function Df(e,a,l,o,r,d,p){if(a==="innerHTML"||a==="textContent"){o&&p(o,r,d),e[a]=l??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=l;const c=f==="OPTION"?e.getAttribute("value"):e.value,g=l??"";c!==g&&(e.value=g),l==null&&e.removeAttribute(a);return}let s=!1;if(l===""||l==null){const c=typeof e[a];c==="boolean"?l=iu(l):l==null&&c==="string"?(l="",s=!0):c==="number"&&(l=0,s=!0)}try{e[a]=l}catch{}s&&e.removeAttribute(a)}function ti(e,a,l,o){e.addEventListener(a,l,o)}function Lf(e,a,l,o){e.removeEventListener(a,l,o)}const pr=Symbol("_vei");function If(e,a,l,o,r=null){const d=e[pr]||(e[pr]={}),p=d[a];if(o&&p)p.value=o;else{const[f,s]=Rf(a);if(o){const c=d[a]=Ff(o,r);ti(e,f,c,s)}else p&&(Lf(e,f,p,s),d[a]=void 0)}}const fr=/(?:Once|Passive|Capture)$/;function Rf(e){let a;if(fr.test(e)){a={};let o;for(;o=e.match(fr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),a]}let Fn=0;const Ef=Promise.resolve(),zf=()=>Fn||(Ef.then(()=>Fn=0),Fn=Date.now());function Ff(e,a){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;It(Pf(o,l.value),a,5,[o])};return l.value=e,l.attached=zf(),l}function Pf(e,a){if(he(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Vf=(e,a,l,o,r,d,p,f,s)=>{const c=r==="svg";a==="class"?Af(e,o,c):a==="style"?$f(e,l,o):cl(a)?Po(a)||If(e,a,l,o,p):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Mf(e,a,o,c))?Df(e,a,o,d,p,f,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Tf(e,a,o,c))};function Mf(e,a,l,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&gr(a)&&Ce(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gr(a)&&Qe(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function Dc(e,a){const l=z(e);class o extends bn{constructor(d){super(l,d,a)}}return o.def=l,o}/*! #__NO_SIDE_EFFECTS__ */const Hf=e=>Dc(e,Oc),Nf=typeof HTMLElement<"u"?HTMLElement:class{};class bn extends Nf{constructor(a,l={},o){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),$a(()=>{this._connected||(Jl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:d,styles:p}=o;let f;if(d&&!he(d))for(const s in d){const c=d[s];(c===Number||c&&c.type===Number)&&(s in this._props&&(this._props[s]=Vl(this._props[s])),(f||(f=Object.create(null)))[vt(s)]=!0)}this._numberProps=f,r&&this._resolveProps(o),this._applyStyles(p),this._update()},l=this._def.__asyncLoader;l?l().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,o=he(l)?l:Object.keys(l||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(vt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(d){this._setProp(r,d)}})}_setAttr(a){let l=this.getAttribute(a);const o=vt(a);this._numberProps&&this._numberProps[o]&&(l=Vl(l)),this._setProp(o,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,o=!0,r=!0){l!==this._props[a]&&(this._props[a]=l,r&&this._instance&&this._update(),o&&(l===!0?this.setAttribute(Tt(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Tt(a),l+""):l||this.removeAttribute(Tt(a))))}_update(){Jl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Xe({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const o=(d,p)=>{this.dispatchEvent(new CustomEvent(d,{detail:p}))};l.emit=(d,...p)=>{o(d,p),Tt(d)!==d&&o(Tt(d),p)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof bn){l.parent=r._instance,l.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function Of(e="$style"){{const a=Xt();if(!a)return je;const l=a.type.__cssModules;if(!l)return je;const o=l[e];return o||je}}const Lc=new WeakMap,Ic=new WeakMap,Ul=Symbol("_moveCb"),hr=Symbol("_enterCb"),Rc={name:"TransitionGroup",props:Xe({},yf,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=Xt(),o=ls();let r,d;return mn(()=>{if(!r.length)return;const p=e.moveClass||`${e.name||"v"}-move`;if(!Yf(r[0].el,l.vnode.el,p))return;r.forEach(qf),r.forEach(Gf);const f=r.filter(Uf);$c(),f.forEach(s=>{const c=s.el,g=c.style;Zt(c,p),g.transform=g.webkitTransform=g.transitionDuration="";const m=c[Ul]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",m),c[Ul]=null,fi(c,p))};c.addEventListener("transitionend",m)})}),()=>{const p=Re(e),f=kc(p);let s=p.tag||Ae;r=d,d=a.default?cn(a.default()):[];for(let c=0;c<d.length;c++){const g=d[c];g.key!=null&&ji(g,va(g,f,o,l))}if(r)for(let c=0;c<r.length;c++){const g=r[c];ji(g,va(g,f,o,l)),Lc.set(g,g.el.getBoundingClientRect())}return t(s,null,d)}}},jf=e=>delete e.mode;Rc.props;const Ec=Rc;function qf(e){const a=e.el;a[Ul]&&a[Ul](),a[hr]&&a[hr]()}function Gf(e){Ic.set(e,e.el.getBoundingClientRect())}function Uf(e){const a=Lc.get(e),l=Ic.get(e),o=a.left-l.left,r=a.top-l.top;if(o||r){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${o}px,${r}px)`,d.transitionDuration="0s",e}}function Yf(e,a,l){const o=e.cloneNode(),r=e[Sa];r&&r.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(o);const{hasTransform:p}=xc(o);return d.removeChild(o),p}const Ai=e=>{const a=e.props["onUpdate:modelValue"]||!1;return he(a)?l=>ua(a,l):a};function Jf(e){e.target.composing=!0}function _r(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign"),Yl={created(e,{modifiers:{lazy:a,trim:l,number:o}},r){e[Ht]=Ai(r);const d=o||r.props&&r.props.type==="number";ti(e,a?"change":"input",p=>{if(p.target.composing)return;let f=e.value;l&&(f=f.trim()),d&&(f=Za(f)),e[Ht](f)}),l&&ti(e,"change",()=>{e.value=e.value.trim()}),a||(ti(e,"compositionstart",Jf),ti(e,"compositionend",_r),ti(e,"change",_r))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:o,number:r}},d){if(e[Ht]=Ai(d),e.composing)return;const p=r||e.type==="number"?Za(e.value):e.value,f=a??"";p!==f&&(document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===f)||(e.value=f))}},fs={deep:!0,created(e,a,l){e[Ht]=Ai(l),ti(e,"change",()=>{const o=e._modelValue,r=ya(e),d=e.checked,p=e[Ht];if(he(o)){const f=tn(o,r),s=f!==-1;if(d&&!s)p(o.concat(r));else if(!d&&s){const c=[...o];c.splice(f,1),p(c)}}else if(Wi(o)){const f=new Set(o);d?f.add(r):f.delete(r),p(f)}else p(Fc(e,d))})},mounted:br,beforeUpdate(e,a,l){e[Ht]=Ai(l),br(e,a,l)}};function br(e,{value:a,oldValue:l},o){e._modelValue=a,he(a)?e.checked=tn(a,o.props.value)>-1:Wi(a)?e.checked=a.has(o.props.value):a!==l&&(e.checked=li(a,Fc(e,!0)))}const gs={created(e,{value:a},l){e.checked=li(a,l.props.value),e[Ht]=Ai(l),ti(e,"change",()=>{e[Ht](ya(e))})},beforeUpdate(e,{value:a,oldValue:l},o){e[Ht]=Ai(o),a!==l&&(e.checked=li(a,o.props.value))}},zc={deep:!0,created(e,{value:a,modifiers:{number:l}},o){const r=Wi(a);ti(e,"change",()=>{const d=Array.prototype.filter.call(e.options,p=>p.selected).map(p=>l?Za(ya(p)):ya(p));e[Ht](e.multiple?r?new Set(d):d:d[0]),e._assigning=!0,$a(()=>{e._assigning=!1})}),e[Ht]=Ai(o)},mounted(e,{value:a,oldValue:l,modifiers:{number:o}}){vr(e,a,l,o)},beforeUpdate(e,a,l){e[Ht]=Ai(l)},updated(e,{value:a,oldValue:l,modifiers:{number:o}}){e._assigning||vr(e,a,l,o)}};function vr(e,a,l,o){const r=e.multiple,d=he(a);if(!(r&&!d&&!Wi(a))&&!(d&&li(a,l))){for(let p=0,f=e.options.length;p<f;p++){const s=e.options[p],c=ya(s);if(r)if(d){const g=typeof c;g==="string"||g==="number"?s.selected=a.includes(o?Za(c):c):s.selected=tn(a,c)>-1}else s.selected=a.has(c);else if(li(ya(s),a)){e.selectedIndex!==p&&(e.selectedIndex=p);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ya(e){return"_value"in e?e._value:e.value}function Fc(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const Pc={created(e,a,l){Bl(e,a,l,null,"created")},mounted(e,a,l){Bl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,o){Bl(e,a,l,o,"beforeUpdate")},updated(e,a,l,o){Bl(e,a,l,o,"updated")}};function Vc(e,a){switch(e){case"SELECT":return zc;case"TEXTAREA":return Yl;default:switch(a){case"checkbox":return fs;case"radio":return gs;default:return Yl}}}function Bl(e,a,l,o,r){const p=Vc(e.tagName,l.props&&l.props.type)[r];p&&p(e,a,l,o)}function Wf(){Yl.getSSRProps=({value:e})=>({value:e}),gs.getSSRProps=({value:e},a)=>{if(a.props&&li(a.props.value,e))return{checked:!0}},fs.getSSRProps=({value:e},a)=>{if(he(e)){if(a.props&&tn(e,a.props.value)>-1)return{checked:!0}}else if(Wi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},Pc.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=Vc(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const Kf=["ctrl","shift","alt","meta"],Xf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>Kf.some(l=>e[`${l}Key`]&&!a.includes(l))},Et=(e,a)=>{const l=e._withMods||(e._withMods={}),o=a.join(".");return l[o]||(l[o]=(r,...d)=>{for(let p=0;p<a.length;p++){const f=Xf[a[p]];if(f&&f(r,a))return}return e(r,...d)})},Qf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zf=(e,a)=>{const l=e._withKeys||(e._withKeys={}),o=a.join(".");return l[o]||(l[o]=r=>{if(!("key"in r))return;const d=Tt(r.key);if(a.some(p=>p===d||Qf[p]===d))return e(r)})},Mc=Xe({patchProp:Vf},Sf);let Wa,Sr=!1;function Hc(){return Wa||(Wa=sc(Mc))}function Nc(){return Wa=Sr?Wa:rc(Mc),Sr=!0,Wa}const Jl=(...e)=>{Hc().render(...e)},Oc=(...e)=>{Nc().hydrate(...e)},jc=(...e)=>{const a=Hc().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=Gc(o);if(!r)return;const d=a._component;!Ce(d)&&!d.render&&!d.template&&(d.template=r.innerHTML),r.innerHTML="";const p=l(r,!1,qc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),p},a},eg=(...e)=>{const a=Nc().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=Gc(o);if(r)return l(r,!0,qc(r))},a};function qc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gc(e){return Qe(e)?document.querySelector(e):e}let yr=!1;const tg=()=>{yr||(yr=!0,Wf(),kf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ig=()=>{},ag=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Ou,BaseTransitionPropsValidators:ns,Comment:ht,DeprecationTypes:_f,EffectScope:No,ErrorCodes:Om,ErrorTypeStrings:cf,Fragment:Ae,KeepAlive:mp,ReactiveEffect:ba,Static:Hi,Suspense:ip,Teleport:fn,Text:Gi,TrackOpTypes:Mm,Transition:_n,TransitionGroup:Ec,TriggerOpTypes:Hm,VueElement:bn,assertNumber:Nm,callWithAsyncErrorHandling:It,callWithErrorHandling:ai,camelize:vt,capitalize:dl,cloneVNode:Kt,compatUtils:hf,compile:ig,computed:H,createApp:jc,createBlock:B,createCommentVNode:ds,createElementBlock:_e,createElementVNode:v,createHydrationRenderer:rc,createPropsRestProxy:$p,createRenderer:sc,createSSRApp:eg,createSlots:fp,createStaticVNode:Xp,createTextVNode:n,createVNode:t,customRef:Au,defineAsyncComponent:cp,defineComponent:z,defineCustomElement:Dc,defineEmits:bp,defineExpose:vp,defineModel:wp,defineOptions:Sp,defineProps:_p,defineSSRCustomElement:Hf,defineSlots:yp,devtools:df,effect:rm,effectScope:om,getCurrentInstance:Xt,getCurrentScope:Oo,getTransitionRawChildren:cn,guardReactiveProps:hc,h:X,handleError:Qi,hasInjectionContext:Fp,hydrate:Oc,initCustomFormatter:sf,initDirectivesForSSR:tg,inject:He,isMemoSame:wc,isProxy:Yo,isReactive:Vi,isReadonly:Oi,isRef:pt,isRuntimeOnly:af,isShallow:el,isVNode:Rt,markRaw:Jo,mergeDefaults:kp,mergeModels:xp,mergeProps:ea,nextTick:$a,normalizeClass:ml,normalizeProps:im,normalizeStyle:xa,onActivated:os,onBeforeMount:Gu,onBeforeUnmount:pn,onBeforeUpdate:Uu,onDeactivated:ss,onErrorCaptured:Ku,onMounted:ki,onRenderTracked:Wu,onRenderTriggered:Ju,onScopeDispose:nu,onServerPrefetch:Yu,onUnmounted:Zi,onUpdated:mn,openBlock:k,popScopeId:Iu,provide:mt,proxyRefs:Xo,pushScopeId:Lu,queuePostFlushCb:Hl,reactive:si,readonly:Uo,ref:G,registerRuntimeCompiler:tf,render:Jl,renderList:Ze,renderSlot:qi,resolveComponent:y,resolveDirective:un,resolveDynamicComponent:Eu,resolveFilter:gf,resolveTransitionHooks:va,setBlockTracking:mo,setDevtoolsHook:mf,setTransitionHooks:ji,shallowReactive:Su,shallowReadonly:Tm,shallowRef:wu,ssrContextKey:Pu,ssrUtils:ff,stop:um,toDisplayString:Te,toHandlerKey:Ga,toHandlers:gp,toRaw:Re,toRef:io,toRefs:Fm,toValue:Rm,transformVNodeArgs:Wp,triggerRef:Im,unref:u,useAttrs:Qu,useCssModule:Of,useCssVars:xf,useModel:of,useSSRContext:Vu,useSlots:Ap,useTransitionState:ls,vModelCheckbox:fs,vModelDynamic:Pc,vModelRadio:gs,vModelSelect:zc,vModelText:Yl,vShow:Bc,version:Cc,warn:uf,watch:gt,watchEffect:as,watchPostEffect:Mu,watchSyncEffect:Hu,withAsyncContext:Bp,withCtx:i,withDefaults:Cp,withDirectives:yi,withKeys:Zf,withMemo:rf,withModifiers:Et,withScopeId:Wm},Symbol.toStringTag,{value:"Module"})),lg=z({name:"App"}),De=(e,a)=>{const l=e.__vccOpts||e;for(const[o,r]of a)l[o]=r;return l};function ng(e,a,l,o,r,d){const p=y("router-view");return k(),B(p)}const og=De(lg,[["render",ng]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Uc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ba=e=>Uc?Symbol(e):"_vr_"+e,Yc=Ba("rvlm"),wr=Ba("rvd"),vn=Ba("r"),hs=Ba("rl"),yo=Ba("rvl"),na=typeof window<"u";function sg(e){return e.__esModule||Uc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Pn(e,a){const l={};for(const o in a){const r=a[o];l[o]=Array.isArray(r)?r.map(e):e(r)}return l}const Ka=()=>{},rg=/\/$/,ug=e=>e.replace(rg,"");function Vn(e,a,l="/"){let o,r={},d="",p="";const f=a.indexOf("?"),s=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),d=a.slice(f+1,s>-1?s:a.length),r=e(d)),s>-1&&(o=o||a.slice(0,s),p=a.slice(s,a.length)),o=pg(o??a,l),{fullPath:o+(d&&"?")+d+p,path:o,query:r,hash:p}}function cg(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function Cr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function dg(e,a,l){const o=a.matched.length-1,r=l.matched.length-1;return o>-1&&o===r&&wa(a.matched[o],l.matched[r])&&Jc(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function wa(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Jc(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!mg(e[l],a[l]))return!1;return!0}function mg(e,a){return Array.isArray(e)?Ar(e,a):Array.isArray(a)?Ar(a,e):e===a}function Ar(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,o)=>l===a[o]):e.length===1&&e[0]===a}function pg(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),o=e.split("/");let r=l.length-1,d,p;for(d=0;d<o.length;d++)if(p=o[d],!(r===1||p==="."))if(p==="..")r--;else break;return l.slice(0,r).join("/")+"/"+o.slice(d-(d===o.length?1:0)).join("/")}var rl;(function(e){e.pop="pop",e.push="push"})(rl||(rl={}));var Xa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xa||(Xa={}));function fg(e){if(!e)if(na){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ug(e)}const gg=/^[^#]+#/;function hg(e,a){return e.replace(gg,"#")+a}function _g(e,a){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-l.left-(a.left||0),top:o.top-l.top-(a.top||0)}}const Sn=()=>({left:window.pageXOffset,top:window.pageYOffset});function bg(e){let a;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),r=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!r)return;a=_g(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function kr(e,a){return(history.state?history.state.position-a:-1)+e}const wo=new Map;function vg(e,a){wo.set(e,a)}function Sg(e){const a=wo.get(e);return wo.delete(e),a}let yg=()=>location.protocol+"//"+location.host;function Wc(e,a){const{pathname:l,search:o,hash:r}=a,d=e.indexOf("#");if(d>-1){let f=r.includes(e.slice(d))?e.slice(d).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),Cr(s,"")}return Cr(l,e)+o+r}function wg(e,a,l,o){let r=[],d=[],p=null;const f=({state:h})=>{const w=Wc(e,location),b=l.value,C=a.value;let $=0;if(h){if(l.value=w,a.value=h,p&&p===b){p=null;return}$=C?h.position-C.position:0}else o(w);r.forEach(D=>{D(l.value,b,{delta:$,type:rl.pop,direction:$?$>0?Xa.forward:Xa.back:Xa.unknown})})};function s(){p=l.value}function c(h){r.push(h);const w=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return d.push(w),w}function g(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:Sn()}),"")}function m(){for(const h of d)h();d=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:c,destroy:m}}function xr(e,a,l,o=!1,r=!1){return{back:e,current:a,forward:l,replaced:o,position:window.history.length,scroll:r?Sn():null}}function Cg(e){const{history:a,location:l}=window,o={value:Wc(e,l)},r={value:a.state};r.value||d(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(s,c,g){const m=e.indexOf("#"),h=m>-1?(l.host&&document.querySelector("base")?e:e.slice(m))+s:yg()+e+s;try{a[g?"replaceState":"pushState"](c,"",h),r.value=c}catch(w){console.error(w),l[g?"replace":"assign"](h)}}function p(s,c){const g=Ye({},a.state,xr(r.value.back,s,r.value.forward,!0),c,{position:r.value.position});d(s,g,!0),o.value=s}function f(s,c){const g=Ye({},r.value,a.state,{forward:s,scroll:Sn()});d(g.current,g,!0);const m=Ye({},xr(o.value,s,null),{position:g.position+1},c);d(s,m,!1),o.value=s}return{location:o,state:r,push:f,replace:p}}function Ag(e){e=fg(e);const a=Cg(e),l=wg(e,a.state,a.location,a.replace);function o(d,p=!0){p||l.pauseListeners(),history.go(d)}const r=Ye({location:"",base:e,go:o,createHref:hg.bind(null,e)},a,l);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function kg(e){return typeof e=="string"||e&&typeof e=="object"}function Kc(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xc=Ba("nf");var $r;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($r||($r={}));function Ca(e,a){return Ye(new Error,{type:e,[Xc]:!0},a)}function Di(e,a){return e instanceof Error&&Xc in e&&(a==null||!!(e.type&a))}const Br="[^/]+?",xg={sensitive:!1,strict:!1,start:!0,end:!0},$g=/[.+*?^${}()[\]/\\]/g;function Bg(e,a){const l=Ye({},xg,a),o=[];let r=l.start?"^":"";const d=[];for(const c of e){const g=c.length?[]:[90];l.strict&&!c.length&&(r+="/");for(let m=0;m<c.length;m++){const h=c[m];let w=40+(l.sensitive?.25:0);if(h.type===0)m||(r+="/"),r+=h.value.replace($g,"\\$&"),w+=40;else if(h.type===1){const{value:b,repeatable:C,optional:$,regexp:D}=h;d.push({name:b,repeatable:C,optional:$});const _=D||Br;if(_!==Br){w+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+x.message)}}let S=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;m||(S=$&&c.length<2?`(?:/${S})`:"/"+S),$&&(S+="?"),r+=S,w+=20,$&&(w+=-8),C&&(w+=-20),_===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(l.strict&&l.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}l.strict||(r+="/?"),l.end?r+="$":l.strict&&(r+="(?:/|$)");const p=new RegExp(r,l.sensitive?"":"i");function f(c){const g=c.match(p),m={};if(!g)return null;for(let h=1;h<g.length;h++){const w=g[h]||"",b=d[h-1];m[b.name]=w&&b.repeatable?w.split("/"):w}return m}function s(c){let g="",m=!1;for(const h of e){(!m||!g.endsWith("/"))&&(g+="/"),m=!1;for(const w of h)if(w.type===0)g+=w.value;else if(w.type===1){const{value:b,repeatable:C,optional:$}=w,D=b in c?c[b]:"";if(Array.isArray(D)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(D)?D.join("/"):D;if(!_)if($)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):m=!0);else throw new Error(`Missing required param "${b}"`);g+=_}}return g}return{re:p,score:o,keys:d,parse:f,stringify:s}}function Tg(e,a){let l=0;for(;l<e.length&&l<a.length;){const o=a[l]-e[l];if(o)return o;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Dg(e,a){let l=0;const o=e.score,r=a.score;for(;l<o.length&&l<r.length;){const d=Tg(o[l],r[l]);if(d)return d;l++}return r.length-o.length}const Lg={type:0,value:""},Ig=/[a-zA-Z0-9_]/;function Rg(e){if(!e)return[[]];if(e==="/")return[[Lg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(w){throw new Error(`ERR (${l})/"${c}": ${w}`)}let l=0,o=l;const r=[];let d;function p(){d&&r.push(d),d=[]}let f=0,s,c="",g="";function m(){c&&(l===0?d.push({type:0,value:c}):l===1||l===2||l===3?(d.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:c,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),c="")}function h(){c+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:s==="/"?(c&&m(),p()):s===":"?(m(),l=1):h();break;case 4:h(),l=o;break;case 1:s==="("?l=2:Ig.test(s)?h():(m(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:l=3:g+=s;break;case 3:m(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${c}"`),m(),p(),r}function Eg(e,a,l){const o=Bg(Rg(e.path),l),r=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function zg(e,a){const l=[],o=new Map;a=Dr({strict:!1,end:!0,sensitive:!1},a);function r(g){return o.get(g)}function d(g,m,h){const w=!h,b=Pg(g);b.aliasOf=h&&h.record;const C=Dr(a,g),$=[b];if("alias"in g){const S=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of S)$.push(Ye({},b,{components:h?h.record.components:b.components,path:x,aliasOf:h?h.record:b}))}let D,_;for(const S of $){const{path:x}=S;if(m&&x[0]!=="/"){const T=m.record.path,I=T[T.length-1]==="/"?"":"/";S.path=m.record.path+(x&&I+x)}if(D=Eg(S,m,C),h?h.alias.push(D):(_=_||D,_!==D&&_.alias.push(D),w&&g.name&&!Tr(D)&&p(g.name)),"children"in b){const T=b.children;for(let I=0;I<T.length;I++)d(T[I],D,h&&h.children[I])}h=h||D,s(D)}return _?()=>{p(_)}:Ka}function p(g){if(Kc(g)){const m=o.get(g);m&&(o.delete(g),l.splice(l.indexOf(m),1),m.children.forEach(p),m.alias.forEach(p))}else{const m=l.indexOf(g);m>-1&&(l.splice(m,1),g.record.name&&o.delete(g.record.name),g.children.forEach(p),g.alias.forEach(p))}}function f(){return l}function s(g){let m=0;for(;m<l.length&&Dg(g,l[m])>=0;)m++;l.splice(m,0,g),g.record.name&&!Tr(g)&&o.set(g.record.name,g)}function c(g,m){let h,w={},b,C;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Ca(1,{location:g});C=h.record.name,w=Ye(Fg(m.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),g.params),b=h.stringify(w)}else if("path"in g)b=g.path,h=l.find(_=>_.re.test(b)),h&&(w=h.parse(b),C=h.record.name);else{if(h=m.name?o.get(m.name):l.find(_=>_.re.test(m.path)),!h)throw Ca(1,{location:g,currentLocation:m});C=h.record.name,w=Ye({},m.params,g.params),b=h.stringify(w)}const $=[];let D=h;for(;D;)$.unshift(D.record),D=D.parent;return{name:C,path:b,params:w,matched:$,meta:Mg($)}}return e.forEach(g=>d(g)),{addRoute:d,resolve:c,removeRoute:p,getRoutes:f,getRecordMatcher:r}}function Fg(e,a){const l={};for(const o of a)o in e&&(l[o]=e[o]);return l}function Pg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Vg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Vg(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const o in e.components)a[o]=typeof l=="boolean"?l:l[o];return a}function Tr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Mg(e){return e.reduce((a,l)=>Ye(a,l.meta),{})}function Dr(e,a){const l={};for(const o in e)l[o]=o in a?a[o]:e[o];return l}const Qc=/#/g,Hg=/&/g,Ng=/\//g,Og=/=/g,jg=/\?/g,Zc=/\+/g,qg=/%5B/g,Gg=/%5D/g,ed=/%5E/g,Ug=/%60/g,td=/%7B/g,Yg=/%7C/g,id=/%7D/g,Jg=/%20/g;function _s(e){return encodeURI(""+e).replace(Yg,"|").replace(qg,"[").replace(Gg,"]")}function Wg(e){return _s(e).replace(td,"{").replace(id,"}").replace(ed,"^")}function Co(e){return _s(e).replace(Zc,"%2B").replace(Jg,"+").replace(Qc,"%23").replace(Hg,"%26").replace(Ug,"`").replace(td,"{").replace(id,"}").replace(ed,"^")}function Kg(e){return Co(e).replace(Og,"%3D")}function Xg(e){return _s(e).replace(Qc,"%23").replace(jg,"%3F")}function Qg(e){return e==null?"":Xg(e).replace(Ng,"%2F")}function Wl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Zg(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const d=o[r].replace(Zc," "),p=d.indexOf("="),f=Wl(p<0?d:d.slice(0,p)),s=p<0?null:Wl(d.slice(p+1));if(f in a){let c=a[f];Array.isArray(c)||(c=a[f]=[c]),c.push(s)}else a[f]=s}return a}function Lr(e){let a="";for(let l in e){const o=e[l];if(l=Kg(l),o==null){o!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(o)?o.map(d=>d&&Co(d)):[o&&Co(o)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+l,d!=null&&(a+="="+d))})}return a}function eh(e){const a={};for(const l in e){const o=e[l];o!==void 0&&(a[l]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function za(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function th(e,a,l){const o=()=>{e[a].delete(l)};Zi(o),ss(o),os(()=>{e[a].add(l)}),e[a].add(l)}function ih(e){const a=He(Yc,{}).value;a&&th(a,"updateGuards",e)}function vi(e,a,l,o,r){const d=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((p,f)=>{const s=m=>{m===!1?f(Ca(4,{from:l,to:a})):m instanceof Error?f(m):kg(m)?f(Ca(2,{from:a,to:m})):(d&&o.enterCallbacks[r]===d&&typeof m=="function"&&d.push(m),p())},c=e.call(o&&o.instances[r],a,l,s);let g=Promise.resolve(c);e.length<3&&(g=g.then(s)),g.catch(m=>f(m))})}function Mn(e,a,l,o){const r=[];for(const d of e)for(const p in d.components){let f=d.components[p];if(!(a!=="beforeRouteEnter"&&!d.instances[p]))if(ah(f)){const c=(f.__vccOpts||f)[a];c&&r.push(vi(c,l,o,d,p))}else{let s=f();r.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${d.path}"`));const g=sg(c)?c.default:c;d.components[p]=g;const h=(g.__vccOpts||g)[a];return h&&vi(h,l,o,d,p)()}))}}return r}function ah(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ir(e){const a=He(vn),l=He(hs),o=H(()=>a.resolve(u(e.to))),r=H(()=>{const{matched:s}=o.value,{length:c}=s,g=s[c-1],m=l.matched;if(!g||!m.length)return-1;const h=m.findIndex(wa.bind(null,g));if(h>-1)return h;const w=Rr(s[c-2]);return c>1&&Rr(g)===w&&m[m.length-1].path!==w?m.findIndex(wa.bind(null,s[c-2])):h}),d=H(()=>r.value>-1&&oh(l.params,o.value.params)),p=H(()=>r.value>-1&&r.value===l.matched.length-1&&Jc(l.params,o.value.params));function f(s={}){return nh(s)?a[u(e.replace)?"replace":"push"](u(e.to)).catch(Ka):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:d,isExactActive:p,navigate:f}}const lh=z({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ir,setup(e,{slots:a}){const l=si(Ir(e)),{options:o}=He(vn),r=H(()=>({[Er(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[Er(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const d=a.default&&a.default(l);return e.custom?d:X("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:r.value},d)}}}),bs=lh;function nh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function oh(e,a){for(const l in a){const o=a[l],r=e[l];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((d,p)=>d!==r[p]))return!1}return!0}function Rr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Er=(e,a,l)=>e??a??l,sh=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const o=He(yo),r=H(()=>e.route||o.value),d=He(wr,0),p=H(()=>r.value.matched[d]);mt(wr,d+1),mt(Yc,p),mt(yo,r);const f=G();return gt(()=>[f.value,p.value,e.name],([s,c,g],[m,h,w])=>{c&&(c.instances[g]=s,h&&h!==c&&s&&s===m&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),s&&c&&(!h||!wa(c,h)||!m)&&(c.enterCallbacks[g]||[]).forEach(b=>b(s))},{flush:"post"}),()=>{const s=r.value,c=p.value,g=c&&c.components[e.name],m=e.name;if(!g)return zr(l.default,{Component:g,route:s});const h=c.props[e.name],w=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=X(g,Ye({},w,a,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(c.instances[m]=null)},ref:f}));return zr(l.default,{Component:C,route:s})||C}}});function zr(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const rh=sh;function uh(e){const a=zg(e.routes,e),l=e.parseQuery||Zg,o=e.stringifyQuery||Lr,r=e.history,d=za(),p=za(),f=za(),s=wu(pi);let c=pi;na&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Pn.bind(null,J=>""+J),m=Pn.bind(null,Qg),h=Pn.bind(null,Wl);function w(J,ue){let re,be;return Kc(J)?(re=a.getRecordMatcher(J),be=ue):be=J,a.addRoute(be,re)}function b(J){const ue=a.getRecordMatcher(J);ue&&a.removeRoute(ue)}function C(){return a.getRoutes().map(J=>J.record)}function $(J){return!!a.getRecordMatcher(J)}function D(J,ue){if(ue=Ye({},ue||s.value),typeof J=="string"){const $e=Vn(l,J,ue.path),L=a.resolve({path:$e.path},ue),E=r.createHref($e.fullPath);return Ye($e,L,{params:h(L.params),hash:Wl($e.hash),redirectedFrom:void 0,href:E})}let re;if("path"in J)re=Ye({},J,{path:Vn(l,J.path,ue.path).path});else{const $e=Ye({},J.params);for(const L in $e)$e[L]==null&&delete $e[L];re=Ye({},J,{params:m(J.params)}),ue.params=m(ue.params)}const be=a.resolve(re,ue),Ne=J.hash||"";be.params=g(h(be.params));const Oe=cg(o,Ye({},J,{hash:Wg(Ne),path:be.path})),xe=r.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===Lr?eh(J.query):J.query||{}},be,{redirectedFrom:void 0,href:xe})}function _(J){return typeof J=="string"?Vn(l,J,s.value.path):Ye({},J)}function S(J,ue){if(c!==J)return Ca(8,{from:ue,to:J})}function x(J){return V(J)}function T(J){return x(Ye(_(J),{replace:!0}))}function I(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let be=typeof re=="function"?re(J):re;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=_(be):{path:be},be.params={}),Ye({query:J.query,hash:J.hash,params:J.params},be)}}function V(J,ue){const re=c=D(J),be=s.value,Ne=J.state,Oe=J.force,xe=J.replace===!0,$e=I(re);if($e)return V(Ye(_($e),{state:Ne,force:Oe,replace:xe}),ue||re);const L=re;L.redirectedFrom=ue;let E;return!Oe&&dg(o,be,re)&&(E=Ca(16,{to:L,from:be}),We(be,be,!0,!1)),(E?Promise.resolve(E):P(L,be)).catch(j=>Di(j)?j:me(j,L,be)).then(j=>{if(j){if(Di(j,2))return V(Ye(_(j.to),{state:Ne,force:Oe,replace:xe}),ue||L)}else j=Q(L,be,!0,xe,Ne);return q(L,be,j),j})}function M(J,ue){const re=S(J,ue);return re?Promise.reject(re):Promise.resolve()}function P(J,ue){let re;const[be,Ne,Oe]=ch(J,ue);re=Mn(be.reverse(),"beforeRouteLeave",J,ue);for(const $e of be)$e.leaveGuards.forEach(L=>{re.push(vi(L,J,ue))});const xe=M.bind(null,J,ue);return re.push(xe),aa(re).then(()=>{re=[];for(const $e of d.list())re.push(vi($e,J,ue));return re.push(xe),aa(re)}).then(()=>{re=Mn(Ne,"beforeRouteUpdate",J,ue);for(const $e of Ne)$e.updateGuards.forEach(L=>{re.push(vi(L,J,ue))});return re.push(xe),aa(re)}).then(()=>{re=[];for(const $e of J.matched)if($e.beforeEnter&&!ue.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const L of $e.beforeEnter)re.push(vi(L,J,ue));else re.push(vi($e.beforeEnter,J,ue));return re.push(xe),aa(re)}).then(()=>(J.matched.forEach($e=>$e.enterCallbacks={}),re=Mn(Oe,"beforeRouteEnter",J,ue),re.push(xe),aa(re))).then(()=>{re=[];for(const $e of p.list())re.push(vi($e,J,ue));return re.push(xe),aa(re)}).catch($e=>Di($e,8)?$e:Promise.reject($e))}function q(J,ue,re){for(const be of f.list())be(J,ue,re)}function Q(J,ue,re,be,Ne){const Oe=S(J,ue);if(Oe)return Oe;const xe=ue===pi,$e=na?history.state:{};re&&(be||xe?r.replace(J.fullPath,Ye({scroll:xe&&$e&&$e.scroll},Ne)):r.push(J.fullPath,Ne)),s.value=J,We(J,ue,re,xe),Le()}let Y;function ge(){Y=r.listen((J,ue,re)=>{const be=D(J),Ne=I(be);if(Ne){V(Ye(Ne,{replace:!0}),be).catch(Ka);return}c=be;const Oe=s.value;na&&vg(kr(Oe.fullPath,re.delta),Sn()),P(be,Oe).catch(xe=>Di(xe,12)?xe:Di(xe,2)?(V(xe.to,be).then($e=>{Di($e,20)&&!re.delta&&re.type===rl.pop&&r.go(-1,!1)}).catch(Ka),Promise.reject()):(re.delta&&r.go(-re.delta,!1),me(xe,be,Oe))).then(xe=>{xe=xe||Q(be,Oe,!1),xe&&(re.delta?r.go(-re.delta,!1):re.type===rl.pop&&Di(xe,20)&&r.go(-1,!1)),q(be,Oe,xe)}).catch(Ka)})}let Be=za(),U=za(),W;function me(J,ue,re){Le(J);const be=U.list();return be.length?be.forEach(Ne=>Ne(J,ue,re)):console.error(J),Promise.reject(J)}function ae(){return W&&s.value!==pi?Promise.resolve():new Promise((J,ue)=>{Be.add([J,ue])})}function Le(J){W||(W=!0,ge(),Be.list().forEach(([ue,re])=>J?re(J):ue()),Be.reset())}function We(J,ue,re,be){const{scrollBehavior:Ne}=e;if(!na||!Ne)return Promise.resolve();const Oe=!re&&Sg(kr(J.fullPath,0))||(be||!re)&&history.state&&history.state.scroll||null;return $a().then(()=>Ne(J,ue,Oe)).then(xe=>xe&&bg(xe)).catch(xe=>me(xe,J,ue))}const st=J=>r.go(J);let Ue;const Qt=new Set;return{currentRoute:s,addRoute:w,removeRoute:b,hasRoute:$,getRoutes:C,resolve:D,options:e,push:x,replace:T,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:d.add,beforeResolve:p.add,afterEach:f.add,onError:U.add,isReady:ae,install(J){const ue=this;J.component("RouterLink",bs),J.component("RouterView",rh),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>u(s)}),na&&!Ue&&s.value===pi&&(Ue=!0,x(r.location).catch(Ne=>{}));const re={};for(const Ne in pi)re[Ne]=H(()=>s.value[Ne]);J.provide(vn,ue),J.provide(hs,si(re)),J.provide(yo,s);const be=J.unmount;Qt.add(J),J.unmount=function(){Qt.delete(J),Qt.size<1&&(c=pi,Y&&Y(),s.value=pi,Ue=!1,W=!1),be()}}}}function aa(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function ch(e,a){const l=[],o=[],r=[],d=Math.max(a.matched.length,e.matched.length);for(let p=0;p<d;p++){const f=a.matched[p];f&&(e.matched.find(c=>wa(c,f))?o.push(f):l.push(f));const s=e.matched[p];s&&(a.matched.find(c=>wa(c,s))||r.push(s))}return[l,o,r]}function ad(){return He(vn)}function ld(){return He(hs)}const dh={__name:"Navbar",props:["onClick"],setup(e){const a=G(),l=ad();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return as(()=>{const p=l.currentRoute.value.path.match(/\/([^/]+)$/);p&&(a.value=o(p[1]))}),(r,d)=>{const p=y("SuiIcon"),f=y("SuiMenuItem"),s=y("SuiMenu");return k(),B(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(p,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1})}}},mh=De(dh,[["__scopeId","data-v-338afb35"]]),ph=z({name:"Sidebar",setup(){const e=ld();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),fh=v("strong",null," Fomantic UI Vue ",-1),gh=v("b",null,"Getting Started",-1);function hh(e,a,l,o,r,d){const p=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),c=y("sui-menu");return k(),B(c,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[fh]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[gh]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.elements,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.collections,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.views,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.modules,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const _h=De(ph,[["render",hh]]),bh={class:"sidemenu"},vh={style:{flex:"1","overflow-y":"scroll"}},Sh={__name:"Sidebar",setup(e){return(a,l)=>(k(),_e("div",bh,[v("div",vh,[t(_h)])]))}},yh=De(Sh,[["__scopeId","data-v-379ef704"]]),wh=z({name:"Sidebar",setup(){const e=ld();return{isActive:p=>e.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),Ch=v("strong",null," Fomantic UI Vue ",-1),Ah=v("b",null,"Getting Started",-1);function kh(e,a,l,o,r,d){const p=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),c=y("sui-sidebar");return k(),B(c,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(p,{as:"div"},{default:i(()=>[Ch]),_:1}),t(p,{as:"router-link",to:"/"},{default:i(()=>[Ah]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.elements,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.collections,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.views,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(p,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.modules,g=>(k(),B(p,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const xh=De(wh,[["render",kh]]),$h={class:"pusher",style:{height:"100vh"}},Bh={class:"article"},Th={__name:"Home",setup(e){const a=G(!1),l=()=>a.value=!a.value;return ih(()=>{a.value=!1}),(o,r)=>{const d=y("router-view"),p=y("SuiSegment");return k(),B(p,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(xh,{visible:a.value},null,8,["visible"]),v("div",$h,[t(yh),t(mh,{"on-click":l}),v("div",Bh,[t(d)])])]),_:1})}}},Dh=De(Th,[["__scopeId","data-v-0bfd4ee9"]]),Lh={__name:"DocSections",props:["docs"],setup(e){const a=e,l=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const d=y("SuiHeader");return k(!0),_e(Ae,null,Ze(l.value,(p,f)=>(k(),_e(Ae,{key:p},[t(d,{as:"h2",dividing:"",style:xa({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Te(p),1)]),_:2},1032,["style"]),(k(!0),_e(Ae,null,Ze(e.docs.filter(s=>s.category===p),(s,c)=>(k(),B(Eu(s.component),{key:s.label+"_"+c,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},Ih=e=>(Lu("data-v-e2ae2e49"),e=e(),Iu(),e),Rh={class:"item"},Eh=Ih(()=>v("i",{class:"dropdown icon"},null,-1)),zh={class:"content menu active"},Fh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=Qu(),l=p=>{p.preventDefault();const f=document.getElementById(a);f.open?r(f):(f.open=!0,o(f))},o=p=>{p.querySelector(".title").classList.add("active");const s=p.querySelector(".content"),c=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${c}px`});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),g.abort()},{signal:g.signal})},r=p=>{const f=p.querySelector(".title"),s=p.querySelector(".content"),c=s.offsetHeight;s.style.maxHeight=`${c}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),p.open=!1,g.abort()},{signal:g.signal})},d=(p,f)=>{p.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(p,f)=>(k(),_e("details",Rh,[v("summary",{class:"title",onClick:l},[Eh,v("b",null,Te(e.header),1)]),v("div",zh,[(k(!0),_e(Ae,null,Ze(e.items,s=>(k(),B(u(bs),{to:`#${s.id}`,class:"item",onClick:c=>d(c,s.id)},{default:i(()=>[n(Te(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Ph=De(Fh,[["__scopeId","data-v-e2ae2e49"]]),Vh={class:"sticky"},Mh={class:"ui vertical following fluid accordion text large menu"},Hh={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const d=y("SuiHeader"),p=y("SuiRail");return k(),B(p,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[v("div",Vh,[t(d,{as:"h3"},{default:i(()=>[n(Te(e.title),1)]),_:1}),v("div",Mh,[(k(),_e(Ae,null,Ze(l,f=>t(Ph,{id:`${f}_link`,header:f,items:e.links.filter(s=>s.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},Nh=De(Hh,[["__scopeId","data-v-bd90305d"]]),Oh={class:"intro"},jh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(l,o)=>{const r=y("SuiHeaderSubheader"),d=y("SuiHeader"),p=y("SuiDivider"),f=y("SuiIcon"),s=y("SuiMenuItem"),c=y("SuiPopup"),g=y("SuiMenu"),m=y("SuiContainer"),h=y("SuiSegment");return k(),_e("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(m,{class:"main"},{default:i(()=>[v("div",Oh,[t(d,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(r,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1}),t(p,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(s,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(c,{trigger:a.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(m,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?(k(),_e(Ae,{key:0},[t(Lh,{docs:e.componentDocs},null,8,["docs"]),t(Nh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ds("",!0),qi(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ut=De(jh,[["__scopeId","data-v-d22eb33f"]]);var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function qh(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(l,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),l}var od={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,p={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function _(S){return S instanceof s?new s(S.type,_(S.content),S.alias):Array.isArray(S)?S.map(_):S.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(S,x){x=x||{};var T,I;switch(f.util.type(S)){case"Object":if(I=f.util.objId(S),x[I])return x[I];T={},x[I]=T;for(var V in S)S.hasOwnProperty(V)&&(T[V]=_(S[V],x));return T;case"Array":return I=f.util.objId(S),x[I]?x[I]:(T=[],x[I]=T,S.forEach(function(M,P){T[P]=_(M,x)}),T);default:return S}},getLanguage:function(_){for(;_;){var S=r.exec(_.className);if(S)return S[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,S){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+S)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(_){var S=document.getElementsByTagName("script");for(var x in S)if(S[x].src==_)return S[x]}return null}},isActive:function(_,S,x){for(var T="no-"+S;_;){var I=_.classList;if(I.contains(S))return!0;if(I.contains(T))return!1;_=_.parentElement}return!!x}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(_,S){var x=f.util.clone(f.languages[_]);for(var T in S)x[T]=S[T];return x},insertBefore:function(_,S,x,T){T=T||f.languages;var I=T[_],V={};for(var M in I)if(I.hasOwnProperty(M)){if(M==S)for(var P in x)x.hasOwnProperty(P)&&(V[P]=x[P]);x.hasOwnProperty(M)||(V[M]=I[M])}var q=T[_];return T[_]=V,f.languages.DFS(f.languages,function(Q,Y){Y===q&&Q!=_&&(this[Q]=V)}),V},DFS:function _(S,x,T,I){I=I||{};var V=f.util.objId;for(var M in S)if(S.hasOwnProperty(M)){x.call(S,M,S[M],T||M);var P=S[M],q=f.util.type(P);q==="Object"&&!I[V(P)]?(I[V(P)]=!0,_(P,x,null,I)):q==="Array"&&!I[V(P)]&&(I[V(P)]=!0,_(P,x,M,I))}}},plugins:{},highlightAll:function(_,S){f.highlightAllUnder(document,_,S)},highlightAllUnder:function(_,S,x){var T={callback:x,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),f.hooks.run("before-all-elements-highlight",T);for(var I=0,V;V=T.elements[I++];)f.highlightElement(V,S===!0,T.callback)},highlightElement:function(_,S,x){var T=f.util.getLanguage(_),I=f.languages[T];f.util.setLanguage(_,T);var V=_.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(V,T);var M=_.textContent,P={element:_,language:T,grammar:I,code:M};function q(Y){P.highlightedCode=Y,f.hooks.run("before-insert",P),P.element.innerHTML=P.highlightedCode,f.hooks.run("after-highlight",P),f.hooks.run("complete",P),x&&x.call(P.element)}if(f.hooks.run("before-sanity-check",P),V=P.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!P.code){f.hooks.run("complete",P),x&&x.call(P.element);return}if(f.hooks.run("before-highlight",P),!P.grammar){q(f.util.encode(P.code));return}if(S&&o.Worker){var Q=new Worker(f.filename);Q.onmessage=function(Y){q(Y.data)},Q.postMessage(JSON.stringify({language:P.language,code:P.code,immediateClose:!0}))}else q(f.highlight(P.code,P.grammar,P.language))},highlight:function(_,S,x){var T={code:_,grammar:S,language:x};if(f.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=f.tokenize(T.code,T.grammar),f.hooks.run("after-tokenize",T),s.stringify(f.util.encode(T.tokens),T.language)},tokenize:function(_,S){var x=S.rest;if(x){for(var T in x)S[T]=x[T];delete S.rest}var I=new m;return h(I,I.head,_),g(_,I,S,I.head,0),b(I)},hooks:{all:{},add:function(_,S){var x=f.hooks.all;x[_]=x[_]||[],x[_].push(S)},run:function(_,S){var x=f.hooks.all[_];if(!(!x||!x.length))for(var T=0,I;I=x[T++];)I(S)}},Token:s};o.Prism=f;function s(_,S,x,T){this.type=_,this.content=S,this.alias=x,this.length=(T||"").length|0}s.stringify=function _(S,x){if(typeof S=="string")return S;if(Array.isArray(S)){var T="";return S.forEach(function(q){T+=_(q,x)}),T}var I={type:S.type,content:_(S.content,x),tag:"span",classes:["token",S.type],attributes:{},language:x},V=S.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(I.classes,V):I.classes.push(V)),f.hooks.run("wrap",I);var M="";for(var P in I.attributes)M+=" "+P+'="'+(I.attributes[P]||"").replace(/"/g,"&quot;")+'"';return"<"+I.tag+' class="'+I.classes.join(" ")+'"'+M+">"+I.content+"</"+I.tag+">"};function c(_,S,x,T){_.lastIndex=S;var I=_.exec(x);if(I&&T&&I[1]){var V=I[1].length;I.index+=V,I[0]=I[0].slice(V)}return I}function g(_,S,x,T,I,V){for(var M in x)if(!(!x.hasOwnProperty(M)||!x[M])){var P=x[M];P=Array.isArray(P)?P:[P];for(var q=0;q<P.length;++q){if(V&&V.cause==M+","+q)return;var Q=P[q],Y=Q.inside,ge=!!Q.lookbehind,Be=!!Q.greedy,U=Q.alias;if(Be&&!Q.pattern.global){var W=Q.pattern.toString().match(/[imsuy]*$/)[0];Q.pattern=RegExp(Q.pattern.source,W+"g")}for(var me=Q.pattern||Q,ae=T.next,Le=I;ae!==S.tail&&!(V&&Le>=V.reach);Le+=ae.value.length,ae=ae.next){var We=ae.value;if(S.length>_.length)return;if(!(We instanceof s)){var st=1,Ue;if(Be){if(Ue=c(me,Le,_,ge),!Ue||Ue.index>=_.length)break;var ue=Ue.index,Qt=Ue.index+Ue[0].length,Ft=Le;for(Ft+=ae.value.length;ue>=Ft;)ae=ae.next,Ft+=ae.value.length;if(Ft-=ae.value.length,Le=Ft,ae.value instanceof s)continue;for(var J=ae;J!==S.tail&&(Ft<Qt||typeof J.value=="string");J=J.next)st++,Ft+=J.value.length;st--,We=_.slice(Le,Ft),Ue.index-=Le}else if(Ue=c(me,0,We,ge),!Ue)continue;var ue=Ue.index,re=Ue[0],be=We.slice(0,ue),Ne=We.slice(ue+re.length),Oe=Le+We.length;V&&Oe>V.reach&&(V.reach=Oe);var xe=ae.prev;be&&(xe=h(S,xe,be),Le+=be.length),w(S,xe,st);var $e=new s(M,Y?f.tokenize(re,Y):re,U,re);if(ae=h(S,xe,$e),Ne&&h(S,ae,Ne),st>1){var L={cause:M+","+q,reach:Oe};g(_,S,x,ae.prev,Le,L),V&&L.reach>V.reach&&(V.reach=L.reach)}}}}}}function m(){var _={value:null,prev:null,next:null},S={value:null,prev:_,next:null};_.next=S,this.head=_,this.tail=S,this.length=0}function h(_,S,x){var T=S.next,I={value:x,prev:S,next:T};return S.next=I,T.prev=I,_.length++,I}function w(_,S,x){for(var T=S.next,I=0;I<x&&T!==_.tail;I++)T=T.next;S.next=T,T.prev=S,_.length-=I}function b(_){for(var S=[],x=_.head.next;x!==_.tail;)S.push(x.value),x=x.next;return S}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(_){var S=JSON.parse(_.data),x=S.language,T=S.code,I=S.immediateClose;o.postMessage(f.highlight(T,f.languages[x],x)),I&&o.close()},!1)),f;var C=f.util.currentScript();C&&(f.filename=C.src,C.hasAttribute("data-manual")&&(f.manual=!0));function $(){f.manual||f.highlightAll()}if(!f.manual){var D=document.readyState;D==="loading"||D==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return f}(a);e.exports&&(e.exports=l),typeof Fr<"u"&&(Fr.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(r,d){var p={};p["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[d]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};f["language-"+d]={pattern:/[\s\S]+/,inside:l.languages[d]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:f},l.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,r){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:l.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var d=o.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,$){return"✖ Error "+C+" while fetching file: "+$},d="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",c="loaded",g="failed",m="pre[data-src]:not(["+f+'="'+c+'"]):not(['+f+'="'+s+'"])';function h(C,$,D){var _=new XMLHttpRequest;_.open("GET",C,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?$(_.responseText):_.status>=400?D(r(_.status,_.statusText)):D(d))},_.send(null)}function w(C){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if($){var D=Number($[1]),_=$[2],S=$[3];return _?S?[D,Number(S)]:[D,void 0]:[D,D]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+m}),l.hooks.add("before-sanity-check",function(C){var $=C.element;if($.matches(m)){C.code="",$.setAttribute(f,s);var D=$.appendChild(document.createElement("CODE"));D.textContent=o;var _=$.getAttribute("data-src"),S=C.language;if(S==="none"){var x=(/\.(\w+)$/.exec(_)||[,"none"])[1];S=p[x]||x}l.util.setLanguage(D,S),l.util.setLanguage($,S);var T=l.plugins.autoloader;T&&T.loadLanguages(S),h(_,function(I){$.setAttribute(f,c);var V=w($.getAttribute("data-range"));if(V){var M=I.split(/\r\n?|\n/g),P=V[0],q=V[1]==null?M.length:V[1];P<0&&(P+=M.length),P=Math.max(0,Math.min(P-1,M.length)),q<0&&(q+=M.length),q=Math.max(0,Math.min(q,M.length)),I=M.slice(P,q).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(P+1))}D.textContent=I,l.highlightElement(D)},function(I){$.setAttribute(f,g),D.textContent=I})}}),l.plugins.fileHighlight={highlight:function($){for(var D=($||document).querySelectorAll(m),_=0,S;S=D[_++];)l.highlightElement(S)}};var b=!1;l.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(od);var sd=od.exports;const Gh=nd(sd),zl={mounted(e,a){var r;const l=a.modifiers,o=a.value;l.script||o==="script"?e.className="language-javascript":e.className="language-markup",Gh.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},Uh={style:{paddingTop:"3rem"}},Yh=v("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Jh=v("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Wh=[Jh],Kh={style:{paddingTop:"3rem",marginBottom:"3rem"}},Xh=v("p",null," You can import all components as Vue plugin. ",-1),Qh=v("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),Zh=[Qh],e_=v("br",null,null,-1),t_=v("p",null," Or pick a component indivisually, add it to your components option. ",-1),i_=v("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),a_=[i_],l_={__name:"GettingStarted",setup(e){return(a,l)=>{const o=y("SuiHeader");return k(),B(ut,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[v("section",Uh,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),Yh,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),yi((k(),_e("pre",null,Wh)),[[u(zl)]])]),v("section",Kh,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),Xh,yi((k(),_e("pre",null,Zh)),[[u(zl),void 0,void 0,{script:!0}]]),e_,t_,yi((k(),_e("pre",null,a_)),[[u(zl),void 0,void 0,{script:!0}]])])]),_:1})}}};function rd(e){var a,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=rd(e[a]))&&(o&&(o+=" "),o+=l);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function te(){for(var e,a,l=0,o="";l<arguments.length;)(e=arguments[l++])&&(a=rd(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Me=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Ee=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Ta=e=>e==="justified"?"justified":Me(e,"aligned"),ui=(e,a)=>typeof e=="number"&&a?`${Ao(e)} ${a}`:typeof e=="number"&&!a?Ao(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Fa=(e,a)=>e?`${Ao(e)} wide ${a}`:"",Ao=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],n_=z({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),l=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const d=l(r);e.multiple?d?a.value=a.value.filter(p=>p!==r):a.value.push(r):a.value=d?-1:r};return mt("isTabActive",l),mt("updateActiveIndex",o),{computedClass:H(()=>te("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=o=>(o.forEach((r,d)=>{r.props.index=d}),o);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),o_=z({render(){var e,a;return X("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ud=z({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(A(e.active,"active"),"content"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),K=z({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:H(()=>te(e.color,e.name,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.colored,"colored"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Me(e.flipped,"flipped"),Me(e.rotated,"rotated"),Ee(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return X(e,{"aria-hidden":!0,class:this.classes})}}),s_=z({props:{index:Number,title:String},setup(e){const a=He("isTabActive"),l=He("updateActiveIndex"),o=H(()=>te(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:o}},render(){return t(Ae,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(K,{name:"dropdown"},null),this.title]),t(ud,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),r_=z({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(A(e.active,"active"),"title"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),u_={install(e){e.component("SuiAccordion",n_),e.component("SuiAccordionAccordion",o_),e.component("SuiAccordionContent",ud),e.component("SuiAccordionTab",s_),e.component("SuiAccordionTitle",r_)}},c_=z({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>te("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,l,o;return this.$props.test?X("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),d_={install(e){e.component("SuiAdvertisement",c_)}},Dt=z({props:{icon:String},setup(e){return{computedClass:H(()=>te(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),it=z({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>te(A(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,ea({class:this.computedClass},a),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),ni=z({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,d)=>{const p={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ae,null,[t(it,p,{default:()=>[r.content]}),this.sections.length!==d+1&&t(Dt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),m_={install(e){e.component("SuiBreadcrumb",ni),e.component("SuiBreadcrumbDivider",Dt),e.component("SuiBreadcrumbSection",it)}},zi=z({props:{as:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return X(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),p_={install(e){e.component("SuiIcon",K),e.component("SuiIconGroup",zi)}},f_=()=>({icon:[Boolean,String]}),g_=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),h_=["right","left"],__=()=>({labeled:[Boolean,String]}),b_=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":h_.includes(e.labeled)?`${e.labeled} labeled`:"")}),v_=["double","elastic"],S_=()=>({loading:{type:[Boolean,String],validator:e=>v_.includes(e)||typeof e=="boolean"}}),y_=e=>({loadingClasses:H(()=>te(e.loading,{loading:e.loading}))}),F=z({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...f_(),...__(),...S_()},setup(e){const{iconClasses:a}=g_(e),{labeledClasses:l}=b_(e),{loadingClasses:o}=y_(e);return{classes:H(()=>te("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Me(e.attached,"attached"),Me(e.floated,"floated"),Ee(e.animated,"animated"),a.value,l.value,o.value,"button"))}},render(){let e=this.as||"div";return t(e,{class:this.classes,role:"button"},{default:()=>{var a,l;return[typeof this.icon=="string"&&t(K,{name:this.icon},null),this.content||((l=(a=this.$slots).default)==null?void 0:l.call(a))]}})}}),Ii=z({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>te(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_t=z({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Me(e.attached,"attached"),ui(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),w_={install(e){e.component("SuiButton",F),e.component("SuiButtonContent",Ii),e.component("SuiButtonGroup",_t)}},C_=(e,a,l)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},A_=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},vs={mounted:C_,unmounted:A_};function k_(e,a={}){const l=G(e.value?"open":"closed"),o=()=>l.value=e.value?"open":"closed";gt(e,f=>{l.value=f?"opening":"closing"});const r=f=>{f.addEventListener("animationend",o,!0)},d=f=>{f&&f.removeEventListener("animationend",o)},p=H((f="scale")=>{switch(l.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:d,computeAnimationClass:p}}const x_=z({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=G(!1),o=()=>{e.disabled||(l.value=!0)},r=()=>l.value=!1,d=()=>{e.disabled||a("select-day",e.date)},p=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},f=H(()=>te("link",A(l.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(p(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:d,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Et(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$_=z({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:o,subtract:r,selectedDate:d,setSelectedDate:p,selectType:f,updateVisible:s,formatDate:c}=He(xi);return{calendarDays:e,isEqualDay:g=>{if(!d.value)return!1;const m=d.value;return m.getFullYear()===g.year&&m.getMonth()===g.month&&m.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),f.value==="date"){let m=new Date(g.year,g.month,g.day);p(m),s(!1);return}a("hour")},updateSelectMode:a,formatDate:c,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(o=>t(x_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),we=z({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),l=()=>a.value=!0,o=()=>a.value=!1,r=H(()=>te("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Et(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),B_=z({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:o,selectedDate:r,updateSelectMode:d}=He(xi);return{state:e,add:l,subtract:o,updateSelectMode:d,isActive:p=>r.value?e.year===r.value.getFullYear()&&e.month===p:!1,isThisMonth:p=>{let f=new Date;return p===f.getMonth()&&e.year===f.getFullYear()},onClickCell:p=>{a(p,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,o)=>t("tr",null,[t(we,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(we,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(we,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),T_=z({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:o,subtract:r,selectedDate:d,updateSelectMode:p}=He(xi),f=()=>o(10,"years"),s=()=>r(10,"years"),c=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:p,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:c,isActive:g=>d.value?g===d.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{l(g,"years"),p("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(we,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(we,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(we,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(we,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(we,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(we,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(we,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(we,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(we,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(we,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(we,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),D_=z({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:o,subtract:r,formatDate:d,selectedDate:p}=He(xi);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{l(f,"hours"),e("minute")},isActive:f=>{if(!p.value)return!1;let s=p.value.getFullYear(),c=p.value.getMonth(),g=p.value.getDate(),m=p.value.getHours();return a.year===s&&a.month===c&&a.day===g&&f===m}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(we,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(we,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(we,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(we,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(we,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(we,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(we,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(we,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(we,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(we,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(we,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(we,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(we,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(we,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(we,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const L_=z({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:o,formatDate:r,updateSelectMode:d,updateVisible:p,selectedDate:f}=He(xi);return{add:l,subtract:o,formatDate:r,updateSelectMode:d,getTimeLabel:s=>{let c=e.hour%12,g=e.hour>12?"PM":"AM",m=s.toString().padStart(2,"0");return e.hour===0?`12:${m} AM`:e.hour===12?`12:${m} PM`:`${c}:${m} ${g}`},onClickCell:s=>{a(s,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),p(!1)},isActive:s=>{if(!f.value)return!1;let c=f.value.getFullYear(),g=f.value.getMonth(),m=f.value.getDate(),h=f.value.getHours(),w=f.value.getMinutes();return e.year===c&&e.month===g&&e.day===m&&e.hour===h&&s===w}}},render(){let e,a,l,o,r,d,p,f,s,c,g,m;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Et(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Vt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Vt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Vt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Vt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Vt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(we,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Vt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(we,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Vt(p=this.getTimeLabel(30))?p:{default:()=>[p]}),t(we,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Vt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(we,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Vt(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(we,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Vt(c=this.getTimeLabel(45))?c:{default:()=>[c]}),t(we,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Vt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(we,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Vt(m=this.getTimeLabel(55))?m:{default:()=>[m]})])])])}}),I_=z({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:l}=He(xi),{setupAnimation:o,removeAnimation:r,computeAnimationClass:d}=k_(a);ki(()=>o(e.value)),Zi(()=>r(e.value));const p=H(()=>te("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:p,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t($_,null,null);case"month":return t(B_,null,null);case"year":return t(T_,null,null);case"hour":return t(D_,null,null);case"minute":return t(L_,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),R_=z({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:o,set:r,state:d,formatCalendarDate:p}=He(xi);return{visible:a,formatCalendarDate:p,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),E_=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let o=l.getDay();return o>=7?o-7:o},z_=(e,a)=>{let l,o;return a===0?(l=11,o=e-1):(l=a-1,o=e),32-new Date(o,l,32).getDate()},Hn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function F_(){const e=G(!1),a=(C=!1)=>e.value=C,l=new Date;function o(C){if(!C)return;let $=C.getFullYear(),D=Hn(C.getMonth()),_=C.getDate(),S=C.getHours(),x=C.getMinutes(),T=S>11?"PM":"AM";S=S%12,S===0&&(S=12);let I=x.toString().padStart(2,"0");return`${D} ${_}, ${$} ${S}:${I} ${T}`}const r=G("default"),d=G("day");function p(C){d.value=C}const f=G(null),s=C=>{f.value=C},c=si({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),g=(C,$)=>{switch($){case"years":c.year=C;break;case"months":c.month=C;break;case"days":c.day=C;break;case"hours":c.hour=C;break;case"minutes":c.minute=C}},m=(C,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()+C);break;case"months":D.setMonth(D.getMonth()+C);break;case"days":D.setDate(D.getDate()+C);break;case"hours":D.setHours(D.getHours()+C);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},h=(C,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()-C);break;case"months":D.setMonth(D.getMonth()-C);break;case"days":D.setDate(D.getDate()-C);break;case"hours":D.setHours(D.getHours()-C);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},w=(C="default")=>C==="date"?`${Hn(c.month)} ${c.year}`:`${Hn(c.month)} ${c.day}, ${c.year}`,b=H(()=>{let C=c.month,$=c.year;C>11&&(C=C%11-1,$+=1);let D=[],_=E_($,C),S=32-new Date($,C,32).getDate(),x=z_($,C),T=1;for(let I=0;I<6;I++){let V=[];if(I===0){for(let P=x-_+1;P<=x;P++){let q=C===0?11:C-1,Q=C===0?$-1:$;V.push({day:P,month:q,year:Q,currentMonth:!1})}let M=7-V.length;for(let P=0;P<M;P++)V.push({day:T,month:C,year:$,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>S){let P=C===11?0:C+1,q=C===11?$+1:$;V.push({day:T-S,month:P,year:q,currentMonth:!1})}else V.push({day:T,month:C,year:$,currentMonth:!0});T++}D.push(V)}return D});return{visible:e,updateVisible:a,calendarDays:b,formatCalendarDate:o,selectMode:d,updateSelectMode:p,selectType:r,selectedDate:f,setSelectedDate:s,state:c,set:g,add:m,subtract:h,formatDate:w}}const xi=Symbol("useCalendar"),P_=z({directives:{clickoutside:vs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=F_();mt(xi,l);const{updateVisible:o,selectedDate:r}=l;return gt(r,d=>{a("update:modelValue",d)}),{updateVisible:o}},render(){return yi(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(I_,null,null),t("i",{class:"calendar icon"},null),t(R_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[un("clickoutside"),()=>this.updateVisible(!1)]])}}),V_={install:e=>{e.component("SuiCalendar",P_)}},M_=z({props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,l,o;return this.$props.href||this.$props.link?X("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),H_=z({props:{extra:Boolean},setup(e){return{computedClass:H(()=>te(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),N_=z({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),O_=z({props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ui(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),j_=z({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),q_=z({render(){var e,a;return X("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),G_={install(e){e.component("SuiCard",M_),e.component("SuiCardContent",H_),e.component("SuiCardDescription",N_),e.component("SuiCardGroup",O_),e.component("SuiCardHeader",j_),e.component("SuiCardMeta",q_)}},cd=z({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=H(()=>te("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let d;e.value?o.value?d=e.modelValue.filter(p=>e.value!==p):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),U_={install(e){e.component("SuiCheckbox",cd)}},dd=z({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?X(e,{class:"avatar"},X("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function Y_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const J_=z({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(dd,{as:"a"},Y_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),W_=z({props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>te(A(a,"active")))}},render(){var e,a,l,o;return this.computedClass?X("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),K_=z({render(){var e,a;return X("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),X_=z({props:{as:String},render(){var e,a;let l=this.$props.as||"div";return X(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Q_=z({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Z_=z({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),eb=z({render(){var e,a;return X("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tb=z({render(){var e,a;return X("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ib={install(e){e.component("SuiComment",J_),e.component("SuiCommentAction",W_),e.component("SuiCommentActions",K_),e.component("SuiCommentAuthor",X_),e.component("SuiCommentAvatar",dd),e.component("SuiCommentContent",Q_),e.component("SuiCommentGroup",Z_),e.component("SuiCommentMetadata",eb),e.component("SuiCommentText",tb)}},Ni=z({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te("ui",A(e.fluid,"fluid"),A(e.text,"text"),Ta(e.textAlign),"container"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ab={install(e){e.component("SuiContainer",Ni)}},Yt=z({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Me(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),lb=z((e,{slots:a})=>{const l=H(()=>te("ui",A(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}},{props:{blurring:Boolean}}),nb={install(e){e.component("SuiDimmer",Yt),e.component("SuiDimmerDimmable",lb)}},ob=["mini","tiny","small","medium","large","big","huge","massive"],yn=()=>({size:{type:String,validator:e=>ob.includes(e)}}),wn=e=>({sizeClass:H(()=>e.size)}),Ve=z({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...yn()},setup(e){const{sizeClass:a}=wn(e);return{classes:H(()=>te("ui",a.value,A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Me(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return X("div",{class:this.classes},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sb={install(e){e.component("SuiDivider",Ve)}},rb=(e,a)=>e.map(l=>l[a]),md=["top","middle","bottom"],ub={verticalAlign:{type:String,validator:e=>md.includes(e)}};function cb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&md.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const db=["left","right"],mb={floated:{type:String,validator:e=>db.includes(e)}};function pb(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=z({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>te("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(!!e.icon&&a.default===void 0,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Me(e.attached,"attached"),Me(e.corner,"corner"),Ee(e.pointing,"pointing"),Ee(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var r;return X(o,{class:l.value},[X(K,{name:e.icon}),(r=a.default)==null?void 0:r.call(a)])}:()=>{var r;return X(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Da=z({render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),La=z({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return X("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),fb={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Da),e.component("SuiLabelGroup",La)}},oe=z({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...ub,...mb},setup(e,{slots:a}){const{verticalAlignClass:l}=cb(e),{floatedClass:o}=pb(e),r=H(()=>te("ui",e.size,l.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),Ee(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=y(e.as)),()=>{var p;return X(d,{class:r.value,href:e.href,target:e.target&&e.target},X("img",{src:e.src},(p=a.default)==null?void 0:p.call(a)))}}return e.wrapped?()=>{var d;return X("div",{class:r.value},X("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>X("div",{class:r.value},[X("img",{src:e.src}),X(O,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),ko=z({props:{size:String},setup(e,{slots:a}){const l=H(()=>te("ui",e.size,"images"));return()=>{var o;return X("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),gb={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",ko)}},hb=z({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>te(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:p}=this.item;l=t(Ae,null,[d&&t("i",{class:`${d} flag`},null),p])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ae,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),r&&t(O,r,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Et(()=>this.$emit("remove"),["stop"])},null)])}}),_b=e=>{const a=si({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return gt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function bb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const vb=z({directives:{clickoutside:vs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=_b(e);mt("useDropdown",l);const{state:o,show:r,hide:d}=l,p=H(()=>te("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),Ee(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),f=()=>{var $;if(o.visible)return d();($=h.value)==null||$.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},c=()=>d(),g=G(""),m=H(()=>{const $=g.value.toLowerCase();return e.options.filter(D=>{const _=typeof D=="object"?D.text:D,S=_.toLowerCase().includes($);if(!e.multiple)return S;if(Array.isArray(e.modelValue)){const x=typeof D=="object"?rb(e.modelValue,"text").includes(_):e.modelValue.includes(_);return S&&!x}return S})}),h=G(null),w=$=>g.value=$.target.value,b=$=>{var D;if(g.value="",e.search&&((D=h.value)==null||D.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,$]:[$];return a("update:modelValue",_)}return a("update:modelValue",$)},C=$=>{if(Array.isArray(e.modelValue)){const D=e.modelValue.findIndex(_=>_===$);if(D>-1){let _=Object.assign(e.modelValue);_.splice(D,1),a("update:modelValue",_)}}};return mt("selection",e.selection),{computedClass:p,onClick:f,openMenu:s,closeMenu:c,filteredText:g,filteredOptions:m,inputRef:h,onInput:w,onSelect:b,removeItem:C}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(p=>typeof p=="object"?t("a",{class:"ui label"},[p.flag&&t("i",{class:`${p.flag} flag`},null),p.text,t("i",{class:"delete icon",onClick:Et(()=>this.removeItem(p),["stop"])},null)]):t("a",{class:"ui label"},[p,t("i",{class:"delete icon",onClick:Et(()=>this.removeItem(p),["stop"])},null)]))},o=()=>this.filteredOptions.filter(p=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(p):!0).map(p=>t(pd,{item:p,active:this.$props.modelValue&&typeof p=="object"?p.text===this.$props.modelValue.text:p===this.$props.modelValue,text:typeof p=="object"?p.text:p,flag:typeof p=="object"&&Object.keys(p).includes("flag")?p.flag:"",image:p.image,label:p.label,disabled:p.disabled,onSelect:this.onSelect},null)),r=()=>{let p={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(hb,ea(p,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let p;return t(fd,{search:this.$props.searchInMenu,onSearch:this.onInput},bb(p=o())?p:{default:()=>[p]})};return yi(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:p=>this.inputRef=p,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:p=>this.onInput(p)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[un("clickoutside"),this.closeMenu]])}}),pd=z({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:o}=He("useDropdown");return{computedClass:H(()=>te(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Et(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),fd=z({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:o}=He("useDropdown"),r=G(null),d=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,f()))});gt(()=>o.visible,f=>{if(!f||!r.value)return;let s=r.value.parentElement;const{top:c,height:g}=s==null?void 0:s.getBoundingClientRect(),m=c-p.value.length*37,h=document.documentElement.clientHeight-c-g-p.value.length*37;o.direction=m>h?"up":"down"});const p=H(()=>{var f;let s=[],c=(f=l.default)==null?void 0:f.call(l);return c&&c.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:d,onSearchInput:f=>a("search",f)}},render(){var e,a,l,o;const r=()=>t(Ae,null,[t("div",{class:"ui left icon input",onClick:Et(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Sb={install(e){e.component("SuiDropdown",vb),e.component("SuiDropdownItem",pd),e.component("SuiDropdownMenu",fd)}},yb=z({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),l=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>te("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:l,computedClass:r}},render(){let e=[X("i",{class:"video play icon"}),X("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(X("div",{class:"embed"},X("iframe",{src:this.getSrc()}))),X("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),wb={install(e){e.component("SuiEmbed",yb)}},Lt=z({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?X("em",{class:this.computedClass,"data-emoji":this.$props.name}):X("em",{"data-emoji":this.$props.name})}}),Cb={install(e){e.component("SuiEmoji",Lt)}},Ab=z({props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),kb=z({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),xb=z({render(){var e,a;return X("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),$b=z({render(){var e,a;return X("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bb=z({props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:H(()=>te(A(a,"images"),A(l,"text"),"extra"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tb=z({render(){var e,a;return X("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Db=z({render(){var e,a;return X("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lb=z({render(){var e,a;return X("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ib=z({render(){var e,a;return X("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Rb=z({render(){var e,a;return X("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb={install(e){e.component("SuiFeed",Ab),e.component("SuiFeedContent",kb),e.component("SuiFeedDate",xb),e.component("SuiFeedEvent",$b),e.component("SuiFeedExtra",Bb),e.component("SuiFeedLabel",Tb),e.component("SuiFeedLike",Db),e.component("SuiFeedMeta",Lb),e.component("SuiFeedSummary",Ib),e.component("SuiFeedUser",Rb)}},Jt=z(e=>{const{sizeClass:a}=wn(e),l=H(()=>te(a.value,e.name,"flag"));return()=>t("i",{class:l.value},null)},{props:{name:String,...yn()}}),zb={install(e){e.component("SuiFlag",Jt)}},Nt=z({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:H(()=>te("ui",e.size,A(e.error,"error"),A(e.info,"info"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.classes},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Pr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Fb(e){return{widthClass:H(()=>Number(e.width)>0?`${Pr[Number(e.width)-1]} wide`:typeof e.width=="string"||Pr.includes(e.width)?`${e.width} wide`:null)}}const lt=z({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=Fb(e),o=H(()=>te(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),l.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ss=z({props:{widths:String},setup(e){return{computedClass:H(()=>te(Me(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),xo=z({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Pb={install(e){e.component("SuiForm",Nt),e.component("SuiFormField",lt),e.component("SuiFormGroup",Ss),e.component("SuiFormTextarea",xo)}},hl=z({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Me(e.reversed,"reversed"),Me(e.verticalAlign,"aligned"),Ee(e.celled,"celled"),Ee(e.divided,"divided"),Ee(e.padded,"padded"),Ee(e.relaxed,"relaxed"),Ta(e.textAlign),ui(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Bt=z({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>te(e.color,Me(e.floated,"floated"),Me(e.only,"only"),Ta(e.textAlign),ui(e.width,"wide"),Fa(e.mobile,"mobile"),Fa(e.tablet,"tablet"),Fa(e.computer,"computer"),Fa(e.largeScreen,"large screen"),Fa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$o=z({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Me(e.only,"only"),ui(e.columns,"column"),Ta(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Vb={install(e){e.component("SuiGrid",hl),e.component("SuiGridColumn",Bt),e.component("SuiGridRow",$o)}},Ji=z({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return X(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=z({components:{HeaderSubheader:Ji},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=H(()=>te("ui",e.color,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Me(e.floated,"floated"),Ee(e.attached,"attached"),Ta(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(X(Ji,{},this.subheader)),l.length>0?X(this.elementType,{class:this.computedClass},l):X(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ys=z({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mb={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",ys),e.component("SuiHeaderSubheader",Ji)}},tt=z({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),r=H(()=>te("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(l.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),d=p=>a("update:modelValue",p.target.value);return()=>t("div",{class:r.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:p=>d(p)},null),l.value&&t(K,{name:e.icon||"spinner"},null),e.action&&t(F,null,{default:()=>[e.action]})])}}),Hb={install(e){e.component("SuiInput",tt)}},Nb=z({render(){var e,a;return X("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ob=z({props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>te(Me(a,"aligned"),"content"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),jb=z({render(){var e,a;return X("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qb=z({render(){var e,a;return X("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gb=z({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),Ee(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ub=z({props:{as:String},render(){var e,a;let l=this.$props.as||"div";return X(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yb=z({props:{size:String},setup(e){return{computedClass:H(()=>te(e.size,"image"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Jb=z({render(){var e,a;return X("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wb={install(e){e.component("SuiItem",Nb),e.component("SuiItemContent",Ob),e.component("SuiItemDescription",jb),e.component("SuiItemExtra",qb),e.component("SuiItemGroup",Gb),e.component("SuiItemHeader",Ub),e.component("SuiItemImage",Yb),e.component("SuiItemMeta",Jb)}},gd=z({props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const l=H(()=>te("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Me(e.verticalAlign,"aligned"),Me(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return X(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Ha=z({props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let l=e.as||"div";const o=H(()=>te(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return X(l,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),Kb=z({setup(e,{slots:a}){return()=>{var l;return X(K,{...e},(l=a.default)==null?void 0:l.call(a))}}}),Xb=z({props:{verticalAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qb=z({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return X(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),Zb=z({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return X(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),ev=z({render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tv={install(e){e.component("SuiList",gd),e.component("SuiListItem",Ha),e.component("SuiListIcon",Kb),e.component("SuiListContent",Xb),e.component("SuiListHeader",Qb),e.component("SuiListDescription",Zb),e.component("SuiListList",ev)}},hd=z({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),Ee(e.attached,"attached"),Ee(e.floated,"floated"),Ee(e.icon,"icon"),Ee(e.tabular,"tabular"),ui(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iv=z({props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),Bo=z({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=y(e.as));const o=H(()=>te(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.icon,"icon"),A(e.link,"link"),Ee(e.fitted,"fitted"),"item"));return()=>t(l,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),av=z({props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>te(a,"menu"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),lv={install(e){e.component("SuiMenu",hd),e.component("SuiMenuHeader",iv),e.component("SuiMenuItem",Bo),e.component("SuiMenuMenu",av)}},Cn=z({props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),Ee(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(_d,null,{default:()=>[t(bd,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_d=z({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),bd=z({render(){var e,a;return X("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nv=z({render(){var e,a;return X("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ov=z({render(){var e,a;return X("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sv={install(e){e.component("SuiMessage",Cn),e.component("SuiMessageContent",_d),e.component("SuiMessageHeader",bd),e.component("SuiMessageItem",nv),e.component("SuiMessageList",ov)}};function rv(e){return Oo()?(nu(e),!0):!1}function vd(e){return typeof e=="function"?e():u(e)}const Sd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const uv=Object.prototype.toString,cv=e=>uv.call(e)==="[object Object]",Fl=()=>{},dv=mv();function mv(){var e,a;return Sd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Na(e){var a;const l=vd(e);return(a=l==null?void 0:l.$el)!=null?a:l}const yd=Sd?window:void 0;function Nn(...e){let a,l,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,r]=e,a=yd):[a,l,o,r]=e,!a)return Fl;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const d=[],p=()=>{d.forEach(g=>g()),d.length=0},f=(g,m,h,w)=>(g.addEventListener(m,h,w),()=>g.removeEventListener(m,h,w)),s=gt(()=>[Na(a),vd(r)],([g,m])=>{if(p(),!g)return;const h=cv(m)?{...m}:m;d.push(...l.flatMap(w=>o.map(b=>f(g,w,b,h))))},{immediate:!0,flush:"post"}),c=()=>{s(),p()};return rv(c),c}let Vr=!1;function pv(e,a,l={}){const{window:o=yd,ignore:r=[],capture:d=!0,detectIframe:p=!1}=l;if(!o)return Fl;dv&&!Vr&&(Vr=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Fl)),o.document.documentElement.addEventListener("click",Fl));let f=!0;const s=g=>r.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Na(m);return h&&(g.target===h||g.composedPath().includes(h))}}),c=[Nn(o,"click",g=>{const m=Na(e);if(!(!m||m===g.target||g.composedPath().includes(m))){if(g.detail===0&&(f=!s(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:d}),Nn(o,"pointerdown",g=>{const m=Na(e);f=!s(g)&&!!(m&&!g.composedPath().includes(m))},{passive:!0}),p&&Nn(o,"blur",g=>{setTimeout(()=>{var m;const h=Na(e);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>c.forEach(g=>g())}function wd(e,a="scale"){const l=G(e.modelValue?"open":"closed");return gt(()=>e.modelValue,o=>{l.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const fv=z({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:o}=wd(e,"fade"),r=H(()=>te("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),d=H(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),p=H(()=>te("dimmable","dimmed",A(e.blurring,"blurring")));return gt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...p.value.split(" "));return}document.body.classList.remove(...p.value.split(" "))}),{className:r,style:d,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ws=z({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=G(),{animationClasses:o,isClosed:r}=wd(e),d=H(()=>te("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),p=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return pv(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:p,close:f,modalRef:l}},render(){return t(fn,{to:"body"},{default:()=>[t(fv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),Cs=z({render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),As=z({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>te(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Cd=z({render(){var e,a;return X("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ks=z({render(){var e,a;return X("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),gv={install(e){e.component("SuiModal",ws),e.component("SuiModalActions",Cs),e.component("SuiModalContent",As),e.component("SuiModalDescription",Cd),e.component("SuiModalHeader",ks)}},hv=e=>{const a=G(!1),l=io(e,"position"),o=G(null),r=io(e,"trigger"),d=()=>{a.value=!0,$a(()=>f())},p=()=>{a.value=!1},f=()=>{if(!o.value||!r.value)return;let s=0,c=0;const g=o.value,m=r.value.$el;g.style.transform=`translate(${s}px, ${c}px)`;const{top:h,left:w,width:b,height:C}=m.getBoundingClientRect(),$=g.getBoundingClientRect(),{pageXOffset:D,pageYOffset:_}=window;if(l.value.includes("top")?(s=D+w,c=_+h-g.offsetTop-g.offsetHeight):(s=w,c=h+C-$.top),l.value.includes("right")){const S=b-$.width;s=w+S}if(l.value.includes("center")){const S=b/2-$.width/2;s=w+S}l.value==="right center"&&(s=w+b,c=h+C/2-$.top-$.height/2),l.value==="left center"&&(s=w-$.width,c=h+C/2-$.top-$.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${c}px)`};return{show:a,showPopup:d,hidePopup:p,placement:l,popupRef:o,triggerRef:r}},_v=z({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:o,hidePopup:r,popupRef:d,triggerRef:p}=hv(e);as(()=>{var h,w,b;(h=p.value)!=null&&h.$el&&((w=p.value)==null||w.$el.addEventListener("mouseenter",o),(b=p.value)==null||b.$el.addEventListener("mouseleave",r))});const f=G(l.value?"open":"close");H(()=>f.value!=="closed"),gt(()=>l.value,h=>{f.value=h?"opening":"closing"});const s=(h,w="scale")=>{switch(h){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},c=()=>f.value=l.value?"open":"closed";ki(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",c,!0)}),Zi(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",c)});const g={position:"initial",animationDuration:"200ms"},m=H(()=>te("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),Ee(e.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>t(fn,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:m.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),bv={install(e){e.component("SuiPopup",_v)}},vv=["top","bottom","left"],xs=()=>({attached:{type:String,validator:e=>vv.includes(e)}}),Ad=e=>({attachedClasses:H(()=>te(e.attached,{attached:e.attached}))}),Sv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],$s=()=>({color:{type:String,validator:e=>Sv.includes(e)}}),Bs=e=>({colorClasses:H(()=>te(e.inverted&&"inverted",e.color))}),To=z({props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...xs(),...$s()},setup(e){const{attachedClasses:a}=Ad(e),{colorClasses:l}=Bs(e),o=H(()=>te("ui",l.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=H(()=>te(Ee(e.progress,"progress"))),d=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),yv={install(e){e.component("SuiProgress",To)}},wv=z({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>te("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),Ee(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Cv={install(e){e.component("SuiRail",wv)}},Av=z({props:{icon:String,index:{type:Number,default:0}},setup(e){const a=He("rating",G(0)),l=He("updateRating"),o=He("selectedIndex",G(0)),r=He("updateSelectedIndex"),d=He("clearable",!1),p=He("disabled",!1),f=()=>{if(!p){if(d&&e.index===a.value){l(0),r(0);return}l(e.index)}},s=()=>{p||r(e.index)},c=H(()=>e.index<=a.value),g=H(()=>e.index<=o.value),m=H(()=>te(e.icon,A(c.value,"active"),A(g.value,"selected"),"icon"));return()=>t("i",{class:m.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),kv=z({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=G(e.modelValue||e.defaultRating),o=G(!1),r=G(0),d=g=>{l.value=g,a("update:modelValue",g),a("change",g)},p=g=>r.value=g,f=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,p(0))},c=H(()=>te("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return mt("rating",l),mt("updateRating",d),mt("selectedIndex",r),mt("updateSelectedIndex",p),mt("clearable",e.clearable),mt("disabled",e.disabled),()=>t("div",{class:c.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((g,m)=>t(Av,{icon:e.icon,index:m+1},null))])}}),xv={install(e){e.component("SuiRating",kv)}},ta=z({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),zt=z({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>te("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$v={install(e){e.component("SuiReveal",ta),e.component("SuiRevealContent",zt)}},Bv=z({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Tv={install(e){e.component("SuiSearch",Bv)}},N=z((e,{slots:a})=>{const{colorClasses:l}=Bs(e),{sizeClass:o}=wn(e),r=H(()=>te("ui",l.value,o.value,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Me(e.floated,"floated"),Me(e.textAlign,"aligned"),Ee(e.attached,"attached"),Ee(e.fitted,"fitted"),Ee(e.padded,"padded"),Ee(e.scrolling,"scrolling"),"segment"));return()=>{var d;return t("div",{class:r.value},[(d=a.default)==null?void 0:d.call(a)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...$s(),...yn()}}),Ct=z((e,{slots:a})=>{const{sizeClass:l}=wn(e),o=H(()=>te("ui",l.value,A(e.basic,"basic"),A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"));return()=>{var r;return t("div",{class:o.value},[(r=a.default)==null?void 0:r.call(a)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...yn()}}),Dv=z({render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Lv={install(e){e.component("SuiSegment",N),e.component("SuiSegmentGroup",Ct),e.component("SuiSegmentInline",Dv)}},Iv=z({directives:{clickoutside:vs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=si({animating:!1}),o=H(()=>{const r=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(l.animating,"animating"),A(r,"vertical"),Ee(e.icon,"icon"),"menu")});return gt(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const d=r.path||r.composedPath&&r.composedPath();d&&d.find(p=>p.classList&&p.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return yi(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[un("clickoutside"),this.onClickPusher]])}}),Rv={install:e=>{e.component("SuiSidebar",Iv)}};class On{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const Ev=z({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=H(()=>te("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),Ee(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),p=H(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,W)=>W*e.step+e.min)),c=()=>{var U,W;let me=1,ae=g(),Le=(e.vertical?(U=h.value)==null?void 0:U.clientHeight:(W=h.value)==null?void 0:W.clientWidth)||0,We=1;if(Le>0)for(;Le/ae*We<100;)ae%We||(me=We),We+=1;return me},g=()=>Math.round((e.max-e.min)/e.step),m=G(null),h=G(null),w=G(0),b=G(0),C=G(0),$=G(0),D=()=>{if(!m.value)return;let U=m.value.getBoundingClientRect();w.value=U.left+On.getWindowScrollLeft(),b.value=U.top+On.getWindowScrollTop(),C.value=m.value.offsetWidth,$.value=m.value.offsetHeight},_=G(0),S=U=>{let{pageX:W,pageY:me}=U.touches?U.touches[0]:U,ae,Le;e.vertical?ae=(b.value+$.value-me)*100/$.value:ae=(W-w.value)*100/C.value,Le=(e.max-e.min)*(ae/100)+e.min;const We=e.range?e.modelValue[_.value]:e.modelValue||0;Le=We+Math.round(Le/e.step-We/e.step)*e.step,e.reversed&&(Le=e.max-Le+e.min),e.vertical&&(Le=e.max-Le+e.min),x(Le)},x=U=>{let W=U,me;if(e.range)if(me=e.modelValue?[...e.modelValue]:[],_.value===0){let ae=e.modelValue?e.modelValue[1]:e.max;W<e.min?W=e.min:W>ae&&(W=ae),me[0]=W,me[1]=me[1]||e.max}else{let ae=e.modelValue?e.modelValue[0]:e.min;W>e.max?W=e.max:W<ae&&(W=ae),me[0]=me[0]||e.min,me[1]=W}else W<e.min&&(W=e.min),W>e.max&&(W=e.max),me=W;a("update:modelValue",me),a("change",me)},T=G(!1),I=U=>T.value=U,V=(U,W=0)=>{I(!0),D(),_.value=W,U.preventDefault()},M=U=>{T.value&&(I(!1),document.removeEventListener("mousemove",P),a("slideend",{event:U,value:e.modelValue}))},P=U=>{T.value&&(S(U),U==null||U.preventDefault())},q=(U,W=0)=>{e.disabled||(V(U,W),document.addEventListener("mousemove",P),document.addEventListener("mouseup",M),U.preventDefault())},Q=(U,W=0)=>{switch(_.value=W,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():ge()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?ge():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?ge():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():ge(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[_.value]+e.step:U=e.modelValue+e.step,x(U)},ge=()=>{let U=0;e.range?U=e.modelValue[_.value]-e.step:U=e.modelValue-e.step,x(U)},Be=U=>{if(!e.disabled&&!On.hasClass(U.target,"thumb")){if(e.range){let W=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,me=(o()+r())/2;W<me?_.value=e.reversed?1:0:_.value=e.reversed?0:1}D(),S(U)}};return()=>t("div",{ref:U=>m.value=U,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>h.value=U},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:p.value,onMousedown:U=>q(U),onTouchstart:U=>V(U),onTouchmove:U=>P(U),onTouchend:U=>M(U),onKeydown:U=>Q(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>q(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>P(U),onTouchend:U=>M(U),onKeydown:U=>Q(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,W)=>{let me=W/g();return W%c()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-W]:s.value[g()-W]:e.labels?e.labels[W]:s.value[W]])})])])}}),zv={install(e){e.component("SuiSlider",Ev)}},Do=z({props:{content:String},render(){var e,a;return this.$props.content?X("div",{class:"label"},this.$props.content):X("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lo=z({props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>te(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?X("div",{class:this.computedClass},this.$props.content):X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fv=z({components:{StatisticLabel:Do,StatisticValue:Lo},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=He("ui",!0);return{computedClass:H(()=>te(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),Ee(e.floated,"floated"),"statistic"))}},render(){var e,a,l,o,r,d;let p=[];return this.$props.value&&p.push(X(Lo,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&p.push(X(Do,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),X("div",{class:this.computedClass},p.length>0?p:(d=(r=this.$slots).default)==null?void 0:d.call(r))}}),Pv=z({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return mt("ui",!1),{computedClass:H(()=>te("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ui(e.widths,""),"statistics"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vv={install(e){e.component("SuiStatistic",Fv),e.component("SuiStatisticGroup",Pv),e.component("SuiStatisticLabel",Do),e.component("SuiStatisticValue",Lo)}},Mv=z({props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>te(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,l,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Hv=["one","two","three","four","five","six","seven","eight"],Nv=z({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>te("ui",a&&Hv[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ov=z({render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),jv=z({render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),qv=z({render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gv={install(e){e.component("SuiStep",Mv),e.component("SuiStepGroup",Nv),e.component("SuiStepContent",Ov),e.component("SuiStepTitle",jv),e.component("SuiStepDescription",qv)}},kd=z({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>te("ui tab segment",A(e.active,"active"),Ee(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Uv=z({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const o=G(e.activeIndex);gt(()=>e.activeIndex,c=>{o.value=c});const r=(c,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:c,index:g})),a("tab-click",{event:c,index:g})},d=(c,g)=>{c.key==="Enter"&&r(c,g)},p=H(()=>{var c,g;let m=[];return(c=l.default)!=null&&c.call(l)&&((g=l.default)==null||g.call(l).forEach(h=>{h.type.name==="SuiTabPanel"&&m.push(h)})),m}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),s=H(()=>te("ui menu",A(f.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:d,tabIndex:o,tabs:p,tabMenuClass:s,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((l,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,o)=>t(kd,ea(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,d;return[(d=(r=l.children).default)==null?void 0:d.call(r)]}}));return t(Ae,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),Yv={install(e){e.component("SuiTab",Uv),e.component("SuiTabPanel",kd)}},Jv=z({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),Ee(e.attached,"attached"),Ee(e.basic,"basic"),Ee(e.compact,"compact"),Ee(e.padded,"padded"),ui(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wv=z({render(){var e,a;return X("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kv=z({props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Me(e.verticalAlign,"aligned"),Me(e.marked,"marked"),Ta(e.textAlign)))}},render(){var e,a,l,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Xv=z({props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>te(A(a,"full-width")))}},render(){var e,a,l,o;return this.computedClass?X("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Qv=z({props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>te(A(e.fullWidth,"full-width")))}},render(){var e,a,l,o;return this.computedClass?X("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Zv=z({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>te(A(e.singleLine,"single line"),Me(e.textAlign,"aligned"),ui(e.width,"wide")))}},render(){var e,a,l,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),e1=z({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Me(e.textAlign,"aligned"),Me(e.verticalAlign,"aligned")))}},render(){var e,a,l,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),t1={install(e){e.component("SuiTable",Jv),e.component("SuiTableBody",Wv),e.component("SuiTableCell",Kv),e.component("SuiTableFooter",Xv),e.component("SuiTableHeader",Qv),e.component("SuiTableHeaderCell",Zv),e.component("SuiTableRow",e1)}};function i1(e,a){e.indexOf(a)===-1&&e.push(a)}const xd=(e,a,l)=>Math.min(Math.max(l,e),a),Mt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Kl=e=>typeof e=="number",pa=e=>Array.isArray(e)&&!Kl(e[0]),a1=(e,a,l)=>{const o=a-e;return((l-e)%o+o)%o+e};function l1(e,a){return pa(e)?e[a1(0,e.length,a)]:e}const $d=(e,a,l)=>-l*e+l*a+e,Bd=()=>{},wi=e=>e,Ts=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Td(e,a){const l=e[e.length-1];for(let o=1;o<=a;o++){const r=Ts(0,a,o);e.push($d(l,1,r))}}function n1(e){const a=[0];return Td(a,e-1),a}function o1(e,a=n1(e.length),l=wi){const o=e.length,r=o-a.length;return r>0&&Td(a,r),d=>{let p=0;for(;p<o-2&&!(d<a[p+1]);p++);let f=xd(0,1,Ts(a[p],a[p+1],d));return f=l1(l,p)(f),$d(e[p],e[p+1],f)}}const Dd=e=>Array.isArray(e)&&Kl(e[0]),Io=e=>typeof e=="object"&&!!e.createAnimation,Aa=e=>typeof e=="function",s1=e=>typeof e=="string",Qa={ms:e=>e*1e3,s:e=>e/1e3},Ld=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,r1=1e-7,u1=12;function c1(e,a,l,o,r){let d,p,f=0;do p=a+(l-a)/2,d=Ld(p,o,r)-e,d>0?l=p:a=p;while(Math.abs(d)>r1&&++f<u1);return p}function Oa(e,a,l,o){if(e===a&&l===o)return wi;const r=d=>c1(d,0,1,e,l);return d=>d===0||d===1?d:Ld(r(d),a,o)}const d1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const o=l*e,r=a==="end"?Math.floor(o):Math.ceil(o);return xd(0,1,r/e)},Mr={ease:Oa(.25,.1,.25,1),"ease-in":Oa(.42,0,1,1),"ease-in-out":Oa(.42,0,.58,1),"ease-out":Oa(0,0,.58,1)},m1=/\((.*?)\)/;function Hr(e){if(Aa(e))return e;if(Dd(e))return Oa(...e);if(Mr[e])return Mr[e];if(e.startsWith("steps")){const a=m1.exec(e);if(a){const l=a[1].split(",");return d1(parseFloat(l[0]),l[1].trim())}}return wi}class Id{constructor(a,l=[0,1],{easing:o,duration:r=Mt.duration,delay:d=Mt.delay,endDelay:p=Mt.endDelay,repeat:f=Mt.repeat,offset:s,direction:c="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=wi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,w)=>{this.resolve=h,this.reject=w}),o=o||Mt.easing,Io(o)){const h=o.createAnimation(l);o=h.easing,l=h.keyframes||l,r=h.duration||r}this.repeat=f,this.easing=pa(o)?wi:Hr(o),this.updateDuration(r);const m=o1(l,s,pa(o)?o.map(Hr):wi);this.tick=h=>{var w;d=d;let b=0;this.pauseTime!==void 0?b=this.pauseTime:b=(h-this.startTime)*this.rate,this.t=b,b/=1e3,b=Math.max(b-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(b=this.totalDuration);const C=b/this.duration;let $=Math.floor(C),D=C%1;!D&&C>=1&&(D=1),D===1&&$--;const _=$%2;(c==="reverse"||c==="alternate"&&_||c==="alternate-reverse"&&!_)&&(D=1-D);const S=b>=this.totalDuration?1:Math.min(D,1),x=m(this.easing(S));a(x),this.pauseTime===void 0&&(this.playState==="finished"||b>=this.totalDuration+p)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class p1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const jn=new WeakMap;function Rd(e){return jn.has(e)||jn.set(e,{transforms:[],values:new Map}),jn.get(e)}function f1(e,a){return e.has(a)||e.set(a,new p1),e.get(a)}const g1=["","X","Y","Z"],h1=["translate","scale","rotate","skew"],Xl={x:"translateX",y:"translateY",z:"translateZ"},Nr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},_1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Nr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:wi},skew:Nr},ul=new Map,Ds=e=>`--motion-${e}`,Ql=["x","y","z"];h1.forEach(e=>{g1.forEach(a=>{Ql.push(e+a),ul.set(Ds(e+a),_1[e])})});const b1=(e,a)=>Ql.indexOf(e)-Ql.indexOf(a),v1=new Set(Ql),Ed=e=>v1.has(e),S1=(e,a)=>{Xl[a]&&(a=Xl[a]);const{transforms:l}=Rd(e);i1(l,a),e.style.transform=y1(l)},y1=e=>e.sort(b1).reduce(w1,"").trim(),w1=(e,a)=>`${e} ${a}(var(${Ds(a)}))`,Ro=e=>e.startsWith("--"),Or=new Set;function C1(e){if(!Or.has(e)){Or.add(e);try{const{syntax:a,initialValue:l}=ul.has(e)?ul.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const qn=(e,a)=>document.createElement("div").animate(e,a),jr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{qn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!qn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{qn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Gn={},oa={};for(const e in jr)oa[e]=()=>(Gn[e]===void 0&&(Gn[e]=jr[e]()),Gn[e]);const A1=.015,k1=(e,a)=>{let l="";const o=Math.round(a/A1);for(let r=0;r<o;r++)l+=e(Ts(0,o-1,r))+", ";return l.substring(0,l.length-2)},qr=(e,a)=>Aa(e)?oa.linearEasing()?`linear(${k1(e,a)})`:Mt.easing:Dd(e)?x1(e):e,x1=([e,a,l,o])=>`cubic-bezier(${e}, ${a}, ${l}, ${o})`;function $1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const B1=e=>Array.isArray(e)?e:[e];function Eo(e){return Xl[e]&&(e=Xl[e]),Ed(e)?Ds(e):e}const Tl={get:(e,a)=>{a=Eo(a);let l=Ro(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const o=ul.get(a);o&&(l=o.initialValue)}return l},set:(e,a,l)=>{a=Eo(a),Ro(a)?e.style.setProperty(a,l):e.style[a]=l}};function zd(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function T1(e,a){var l;let o=(a==null?void 0:a.toDefaultUnit)||wi;const r=e[e.length-1];if(s1(r)){const d=((l=r.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";d&&(o=p=>p+d)}return o}function D1(){return window.__MOTION_DEV_TOOLS_RECORD}function L1(e,a,l,o={},r){const d=D1(),p=o.record!==!1&&d;let f,{duration:s=Mt.duration,delay:c=Mt.delay,endDelay:g=Mt.endDelay,repeat:m=Mt.repeat,easing:h=Mt.easing,persist:w=!1,direction:b,offset:C,allowWebkitAcceleration:$=!1,autoplay:D=!0}=o;const _=Rd(e),S=Ed(a);let x=oa.waapi();S&&S1(e,a);const T=Eo(a),I=f1(_.values,T),V=ul.get(T);return zd(I.animation,!(Io(h)&&I.generator)&&o.record!==!1),()=>{const M=()=>{var Q,Y;return(Y=(Q=Tl.get(e,T))!==null&&Q!==void 0?Q:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let P=$1(B1(l),M);const q=T1(P,V);if(Io(h)){const Q=h.createAnimation(P,a!=="opacity",M,T,I);h=Q.easing,P=Q.keyframes||P,s=Q.duration||s}if(Ro(T)&&(oa.cssRegisterProperty()?C1(T):x=!1),S&&!oa.linearEasing()&&(Aa(h)||pa(h)&&h.some(Aa))&&(x=!1),x){V&&(P=P.map(ge=>Kl(ge)?V.toDefaultUnit(ge):ge)),P.length===1&&(!oa.partialKeyframes()||p)&&P.unshift(M());const Q={delay:Qa.ms(c),duration:Qa.ms(s),endDelay:Qa.ms(g),easing:pa(h)?void 0:qr(h,s),direction:b,iterations:m+1,fill:"both"};f=e.animate({[T]:P,offset:C,easing:pa(h)?h.map(ge=>qr(ge,s)):void 0},Q),f.finished||(f.finished=new Promise((ge,Be)=>{f.onfinish=ge,f.oncancel=Be}));const Y=P[P.length-1];f.finished.then(()=>{w||(Tl.set(e,T,Y),f.cancel())}).catch(Bd),$||(f.playbackRate=1.000001)}else if(r&&S)P=P.map(Q=>typeof Q=="string"?parseFloat(Q):Q),P.length===1&&P.unshift(parseFloat(M())),f=new r(Q=>{Tl.set(e,T,q?q(Q):Q)},P,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const Q=P[P.length-1];Tl.set(e,T,V&&Kl(Q)?V.toDefaultUnit(Q):Q)}return p&&d(e,a,P,{duration:s,delay:c,easing:h,repeat:m,offset:C},"motion-one"),I.setAnimation(f),f&&!D&&f.pause(),f}}const I1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function R1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const E1=e=>e(),Fd=(e,a,l=Mt.duration)=>new Proxy({animations:e.map(E1).filter(Boolean),duration:l,options:a},F1),z1=e=>e.animations[0],F1={get:(e,a)=>{const l=z1(e);switch(a){case"duration":return e.duration;case"currentTime":return Qa.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(P1)).catch(Bd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>zd(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Qa.ms(l);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=l;return!0}return!1}},P1=e=>e.finished;function V1(e,a,l){return Aa(e)?e(a,l):e}function M1(e){return function(a,l,o={}){a=R1(a);const r=a.length,d=[];for(let p=0;p<r;p++){const f=a[p];for(const s in l){const c=I1(o,s);c.delay=V1(c.delay,p,r);const g=L1(f,s,l[s],c,e);d.push(g)}}return Fd(d,o,o.duration)}}const H1=M1(Id);function N1(e,a={}){return Fd([()=>{const l=new Id(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function O1(e,a,l){return(Aa(e)?N1:H1)(e,a,l)}const ve=(e,a)=>(l,{duration:o,keyframesOverride:r={}})=>O1(l,{...e,...r},{autoplay:!1,...a,duration:o}),Gr=ve({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),j1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),q1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),G1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),U1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),Y1=ve({opacity:[0,1]},{duration:.5,offset:[0,1]}),J1=ve({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),W1=ve({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),K1=ve({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),X1=ve({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),Q1=ve({opacity:[1,0]},{duration:.5,offset:[0,1]}),Z1=ve({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),eS=ve({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),tS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),iS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),aS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),lS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),nS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),oS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),sS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),rS=ve({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),uS=ve({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),cS=ve({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),dS=ve({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),mS=ve({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),pS=ve({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),fS=ve({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),gS=ve({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),hS=ve({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),_S=ve({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),bS=ve({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Pd={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Vd={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Md={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},vS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},SS=ve({transformOrigin:"top center",...Pd},{offset:[0,1]}),yS=ve({transformOrigin:"bottom center",...Pd},{offset:[0,1]}),wS=ve({transformOrigin:"center right",...Vd},{offset:[0,1]}),CS=ve({transformOrigin:"center left",...Vd},{offset:[0,1]}),AS=ve({transformOrigin:"top center",...Md},{offset:[0,1]}),kS=ve({transformOrigin:"bottom center",...Md},{offset:[0,1]}),Ur=ve({transformOrigin:"center left",...vS},{offset:[0,1]}),$i=.8,fa={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ga={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ha={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_a={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},xS=ve({transformOrigin:"top center",transform:fa.transform,opacity:fa.opacity},{duration:$i,offset:fa.offset}),$S=ve({transformOrigin:"bottom center",transform:fa.transform,opacity:fa.opacity},{duration:$i,offset:fa.offset}),BS=ve({transformOrigin:"center right",transform:ga.transform,opacity:ga.opacity},{duration:$i,offset:ga.offset}),TS=ve({transformOrigin:"center left",transform:ga.transform,opacity:ga.opacity},{duration:$i,offset:ga.offset}),DS=ve({transformOrigin:"top center",transform:ha.transform,opacity:ha.opacity},{duration:$i,offset:ha.offset}),LS=ve({transformOrigin:"bottom center",transform:ha.transform,opacity:ha.opacity},{duration:$i,offset:ha.offset}),IS=ve({transformOrigin:"center right",transform:_a.transform,opacity:_a.opacity},{duration:$i,offset:_a.offset}),RS=ve({transformOrigin:"center left",transform:_a.transform,opacity:_a.opacity},{duration:$i,offset:_a.offset}),ES=ve({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),zS=ve({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),FS=ve({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),PS=ve({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),VS=ve({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),MS=ve({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),HS=ve({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),NS=ve({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),OS=ve({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),jS={browse:[Gr,j1],"browse right":[Gr,q1],drop:[G1,U1],fade:[Y1,Q1],"fade up":[J1,Z1],"fade down":[W1,eS],"fade left":[K1,tS],"fade right":[X1,iS],fly:[aS,rS],"fly up":[lS,uS],"fly down":[nS,cS],"fly left":[oS,dS],"fly right":[sS,mS],"horizontal flip":[pS,fS],"vertical flip":[gS,hS],scale:[_S,bS],"slide up":[yS,kS],"slide down":[SS,AS],"slide left":[wS,Ur],"slide right":[CS,Ur],"swing up":[$S,LS],"swing down":[xS,DS],"swing left":[BS,IS],"swing right":[TS,RS],zoom:[ES,zS]},qS={bounce:[FS,void 0],flash:[PS,void 0],glow:[VS,void 0],jiggle:[MS,void 0],pulse:[HS,void 0],shake:[NS,void 0],tada:[OS,void 0]},Hd=e=>({...jS,...qS})[e],GS=e=>{const[a,l]=Hd(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(p,f)=>{if(!a)return f();const s=a(p,{duration:o.value});s.play(),s.finished.then(f)}),d=H(()=>(p,f)=>{if(!l)return f();const s=l(p,{duration:o.value});s.play(),s.finished.then(f)});return{onEnter:r,onLeave:d}},US=z({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=GS(e);return{onEnter:a,onLeave:l}},render(){return t(_n,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Nd=z({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=Hd(e.animation),o=H(()=>(d,p)=>{if(!a)return p();const f=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});f.play(),f.finished.then(p)}),r=H(()=>(d,p)=>{if(!l)return p();const f=l(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});f.play(),f.finished.then(p)});return{onEnter:o,onLeave:r}},render(){return t(Ec,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),YS={install(e){e.component("SuiTransition",US),e.component("SuiTransitionGroup",Nd)}},JS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:u_,Advertisement:d_,Breadcrumb:m_,Button:w_,Calendar:V_,Card:G_,Checkbox:U_,Comment:ib,Container:ab,Dimmer:nb,Divider:sb,Dropdown:Sb,Embed:wb,Emoji:Cb,Feed:Eb,Flag:zb,Form:Pb,Grid:Vb,Header:Mb,Icon:p_,Image:gb,Input:Hb,Item:Wb,Label:fb,List:tv,Menu:lv,Message:sv,Modal:gv,Popup:bv,Progress:yv,Rail:Cv,Rating:xv,Reveal:$v,Search:Tv,Segment:Lv,Sidebar:Rv,Slider:zv,Statistic:Vv,Step:Gv,Tab:Yv,Table:t1,Transition:YS},Symbol.toStringTag,{value:"Module"})),Pe=z({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var l;return te("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),Ee(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Un=z({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...xs()},setup(e,{slots:a}){const l=H(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(_t,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}}}),WS=z({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=H(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function Yn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const KS=z({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...$s()},setup(e,{emit:a}){const{colorClasses:l}=Bs(e),o=H(()=>{var p,f,s,c,g;return te(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((p=e.actionsProps)!=null&&p.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((c=e.actionsProps)==null?void 0:c.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=G(e.showProgressUp?0:100),d=()=>{const p=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(f),r.value+=1;return}r.value<=0&&clearInterval(f),r.value-=1},p)},500)};return ki(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,l,o;return t(WS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,d,p,f;return[this.showProgress==="top"&&t(To,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(Un,this.actionsProps,Yn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((p=this.actionsProps)!=null&&p.attached)&&t(Un,this.actionsProps,Yn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(Un,this.actionsProps,Yn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(To,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),XS=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],QS=({defaultValue:e}={})=>({position:{type:String,validator:a=>XS.includes(a),default:e}}),ZS=e=>({positionClasses:H(()=>e.position||"")});function ey(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Rt(e)}const ty=z({name:"SuiToastContainer",props:{horizontal:Boolean,...xs(),...QS({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=Od(),{attachedClasses:o}=Ad(e),{positionClasses:r}=ZS(e);return{classes:H(()=>te(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[0,`${d.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:p,marginBottom:f}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[`${d.offsetWidth}px`,0],f=[`${d.offsetHeight}px`,0],s=e.horizontal?{width:p}:{height:f},c=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...s,marginBottom:c}}}},render(){let e;return t(fn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Nd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},ey(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(KS,ea({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),iy=G(1),Pa=G([]),Od=()=>({items:Pa,add:e=>{e.position=e.position||"top right",Pa.value=[...Pa.value,{id:iy.value++,...e}]},remove:e=>{Pa.value=Pa.value.filter(a=>a.id!==e)}}),ct=()=>{var e;const a=(e=Xt())==null?void 0:e.appContext,{add:l}=Od();return{toast:o=>{const{position:r,attached:d,horizontal:p}=o;ny({position:r,attached:d,horizontal:p})||ly(a,{position:r,attached:d,horizontal:p}),l(o)}}},ay=(e,{appContext:a,element:l}={})=>{const o=l||document.createElement("div");return a&&(e.appContext=a),Jl(e,o),{vNode:e,el:o}},ly=(e,{position:a="top right",attached:l,horizontal:o=!1}={})=>{const r=X(ty,{position:a,attached:l,horizontal:o}),{el:d}=ay(r,{appContext:e});return{vNode:r,el:d}},ny=({position:e="top right",attached:a,horizontal:l})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function oy(e){Object.values({...JS}).map(a=>e.use(a))}const sy={install:oy},ry=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=ad(),l=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const p=r.target.parentElement.getAttribute("href"),f=p.slice(p.indexOf("#")+1),s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth"})};return(r,d)=>{const p=y("SuiHeader"),f=y("SuiGridColumn"),s=y("SuiGridRow");return k(),_e(Ae,null,[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Te(e.label)+" ",1),t(u(bs),{to:`${l.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(u(K),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(u(K),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),v("p",null,[qi(r.$slots,"default",{},void 0,!0)])],64)}}}),uy=De(ry,[["__scopeId","data-v-a2b78897"]]),cy={class:"inner"},dy={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return k(),B(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[qi(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[v("div",cy,[yi((k(),_e("pre",null,[v("code",null,Te(e.code)+`
`,1)])),[[u(zl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},my=De(dy,[["__scopeId","data-v-965e7ddc"]]),R={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),l=()=>a.value=!a.value;return(o,r)=>{const d=y("SuiGrid");return k(),_e("section",null,[t(d,{columns:2},{default:i(()=>[t(uy,ea({label:e.label,"on-click":l},o.$attrs),{default:i(()=>[qi(o.$slots,"description")]),_:3},16,["label"]),t(my,{code:e.code,"hide-code":a.value},{default:i(()=>[qi(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},py=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,fy={__name:"ButtonDoc",setup(e){const a=G("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>(k(),B(R,{label:"Button",code:py},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1}))}},gy=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,hy={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Emphasis",code:gy},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(u(F),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(u(F),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(u(F),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},_y=`<template>
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
</template>`,by={__name:"AnimatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Animated",code:_y},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(u(F),{animated:""},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[t(u(K),{name:"arrow right"})]),_:1})]),_:1}),t(u(F),{animated:"vertical"},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[t(u(K),{name:"shop"})]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(u(F),{animated:"fade"},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},vy=`<template>
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
</template>`,Sy={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Labeled",code:vy},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(u(F),{labeled:"right",as:"div"},{default:i(()=>[t(u(F),{icon:"heart",content:" Like"}),t(u(O),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(u(F),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(u(F),{icon:"heart",content:" Like"})]),_:1}),t(u(F),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(u(F),{icon:"fork"})]),_:1})]),_:1}))}},yy=`<template>
  <SuiButton icon="cloud" />
</template>`,wy={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:yy},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(u(F),{icon:"cloud"})]),_:1}))}},Cy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,Ay={__name:"LabeledIconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Labeled Icon",code:Cy},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(u(F),{labeled:"",icon:"pause",content:"Pause"}),t(u(F),{labeled:"right",icon:"right arrow",content:"Next"}),t(u(F),{labeled:"",icon:""},{default:i(()=>[t(u(K),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},ky=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,xy={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic",code:ky},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(u(F),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(F),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(F),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(u(F),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},$y=`<template>
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
</template>`,By={__name:"TertiaryDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Tertiary",code:$y},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(u(F),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(F),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(F),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(F),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(F),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(F),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(F),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(F),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(F),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(F),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(F),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(F),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(F),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(F),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(F),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Ty=`<template>
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
</template>`,Dy={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:Ty},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(F),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(F),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(F),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(F),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(F),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(F),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(F),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(F),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(F),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(F),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(F),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(F),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(F),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(F),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(F),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ly=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,Iy={__name:"ButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Buttons",code:Ly},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(F),{content:"One"}),t(u(F),{content:"Two"}),t(u(F),{content:"Three"})]),_:1})]),_:1}))}},Ry=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Ey={__name:"IconButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon Buttons",code:Ry},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(_t),{icon:""},{default:i(()=>[t(u(F),{icon:"align left"}),t(u(F),{icon:"align center"}),t(u(F),{icon:"align right"}),t(u(F),{icon:"align justify"})]),_:1})]),_:1}))}},zy=v("div",{class:"or"},null,-1),Fy=v("div",{class:"or","data-text":"ou"},null,-1),Py=`<template>
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
</template>`,Vy={__name:"ConditionalsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Conditionals",code:Py},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(F),{content:"Cancel"}),zy,t(u(F),{content:"Save",positive:""})]),_:1}),t(u(_t),null,{default:i(()=>[t(u(F),{content:"un"}),Fy,t(u(F),{content:"deux",positive:""})]),_:1})]),_:1}))}},My=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,Hy={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:My},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(u(F),{active:"",icon:"user",content:" Follow"})]),_:1}))}},Ny=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Oy={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:Ny},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(F),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},jy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,qy={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:jy},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(u(F),{loading:"",content:"Loading"}),t(u(F),{loading:"double",primary:"",content:"Loading"}),t(u(F),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Gy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Uy={__name:"SocialDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Social",code:Gy},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(u(F),{facebook:"",icon:"facebook",content:" Facebook"}),t(u(F),{twitter:"",icon:"twitter",content:" Twitter"}),t(u(F),{vk:"",icon:"vk",content:"VK"}),t(u(F),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(u(F),{instagram:"",icon:"instagram",content:" Instagram"}),t(u(F),{youtube:"",icon:"youtube",content:" YouTube"}),t(u(F),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(u(F),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Yy=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Jy={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:Yy},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(u(F),{size:"mini",content:"Mini"}),t(u(F),{size:"tiny",content:"Tiny"}),t(u(F),{size:"small",content:"Small"}),t(u(F),{size:"medium",content:"Medium"}),t(u(F),{size:"large",content:"Large"}),t(u(F),{size:"big",content:"Big"}),t(u(F),{size:"huge",content:"Huge"}),t(u(F),{size:"massive",content:"Massive"})]),_:1}))}},Wy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Ky={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floated",code:Wy},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(u(F),{floated:"left",content:"Left Floated"}),t(u(F),{floated:"right",content:"Right Floated"})]),_:1}))}},Xy=`<template>
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
</template>`,Qy={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:Xy},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(u(F),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(F),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(F),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(F),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(F),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(F),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(F),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(F),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(F),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(F),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(F),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(F),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(F),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Zy=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,ew={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Compact",code:Zy},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(u(F),{compact:"",content:"Hold"}),t(u(F),{compact:"",icon:"pause"}),t(u(F),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},tw=`<template>
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
<\/script>`,iw={__name:"ToggleDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(R,{label:"Toggle",code:tw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(u(F),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},aw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,lw={__name:"PositiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Positive",code:aw},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(u(F),{positive:"",content:"Positive Button"})]),_:1}))}},nw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,ow={__name:"NegativeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Negative",code:nw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(u(F),{negative:"",content:"Negative Button"})]),_:1}))}},sw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,rw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:sw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(u(F),{fluid:"",content:"Fits container"})]),_:1}))}},uw=`<template>
  <SuiButton circular icon="settings" />
</template>`,cw={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:uw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(u(F),{circular:"",icon:"settings"})]),_:1}))}},dw=v("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),mw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,pw={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertically Attached",code:mw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(u(F),{attached:"top",content:"Top"}),t(u(N),{attached:""},{default:i(()=>[dw]),_:1}),t(u(F),{attached:"bottom",content:"Bottom"})]),_:1}))}},fw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,gw={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontally Attached",code:fw},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(u(F),{attached:"left",content:"Left"}),t(u(F),{attached:"right",content:"Right"})]),_:1}))}},hw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,_w={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertical Buttons",code:hw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(u(_t),{vertical:""},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Feed")]),_:1}),t(u(F),null,{default:i(()=>[n("Messages")]),_:1}),t(u(F),null,{default:i(()=>[n("Events")]),_:1}),t(u(F),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},bw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,vw={__name:"StackableButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Stackable Buttons",code:bw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(u(_t),{stackable:""},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Feed")]),_:1}),t(u(F),null,{default:i(()=>[n("Messages")]),_:1}),t(u(F),null,{default:i(()=>[n("Events")]),_:1}),t(u(F),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,yw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon Buttons",code:Sw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(u(_t),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(u(F),{icon:"pause",content:"Pause"}),t(u(F),{icon:"play",content:"Play"}),t(u(F),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},ww=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,Cw={__name:"MixedGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Mixed Group",code:ww},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(F),{labeled:"",icon:"left chevron",content:"Back"}),t(u(F),{icon:"stop",content:"Stop"}),t(u(F),{icon:"",labeled:"right"},{default:i(()=>[t(u(K),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
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
</template>`,kw={__name:"EqualWidthDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Equal Width",code:Aw},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(u(_t),{widths:5},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Overview")]),_:1}),t(u(F),null,{default:i(()=>[n("Specs")]),_:1}),t(u(F),null,{default:i(()=>[n("Warranty")]),_:1}),t(u(F),null,{default:i(()=>[n("Reviews")]),_:1}),t(u(F),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(u(_t),{widths:3},{default:i(()=>[t(u(F),null,{default:i(()=>[n("Overview")]),_:1}),t(u(F),null,{default:i(()=>[n("Specs")]),_:1}),t(u(F),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},xw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,$w={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored Buttons",code:xw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(_t),{color:"blue"},{default:i(()=>[t(u(F),null,{default:i(()=>[n("One")]),_:1}),t(u(F),null,{default:i(()=>[n("Two")]),_:1}),t(u(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
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
</template>`,Tw={__name:"BasicButtonsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic Buttons",code:Bw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(u(_t),{basic:""},{default:i(()=>[t(u(F),null,{default:i(()=>[n("One")]),_:1}),t(u(F),null,{default:i(()=>[n("Two")]),_:1}),t(u(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(u(_t),null,{default:i(()=>[t(u(F),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(u(F),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(u(F),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Dw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Lw={__name:"GroupSizesDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Group Sizes",code:Dw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(_t),{size:"large"},{default:i(()=>[t(u(F),null,{default:i(()=>[n("One")]),_:1}),t(u(F),null,{default:i(()=>[n("Two")]),_:1}),t(u(F),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Iw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:fy},{id:"emphasis",label:"Emphasis",category:"Types",component:hy},{id:"animated",label:"Animated",category:"Types",component:by},{id:"labeled",label:"Labeled",category:"Types",component:Sy},{id:"icon",label:"Icon",category:"Types",component:wy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:Ay},{id:"basic",label:"Basic",category:"Types",component:xy},{id:"tertiary",label:"Tertiary",category:"Types",component:By},{id:"inverted",label:"Inverted",category:"Types",component:Dy},{id:"buttons",label:"Buttons",category:"Groups",component:Iy},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Ey},{id:"content",label:"Content",category:"Content",component:Vy},{id:"active",label:"Active",category:"States",component:Hy},{id:"disabled",label:"Disabled",category:"States",component:Oy},{id:"loading",label:"Loading",category:"States",component:qy},{id:"social",label:"Social",category:"Variations",component:Uy},{id:"size",label:"Size",category:"Variations",component:Jy},{id:"floated",label:"Floated",category:"Variations",component:Ky},{id:"colored",label:"Colored",category:"Variations",component:Qy},{id:"compact",label:"Compact",category:"Variations",component:ew},{id:"toggle",label:"Toggle",category:"Variations",component:iw},{id:"positive",label:"Positive",category:"Variations",component:lw},{id:"negative",label:"Negative",category:"Variations",component:ow},{id:"fluid",label:"Fluid",category:"Variations",component:rw},{id:"circular",label:"Circular",category:"Variations",component:cw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:pw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:gw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:_w},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:vw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:yw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:Cw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:kw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:$w},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Tw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Lw}];return(l,o)=>(k(),B(ut,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Rw=v("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Ew=`<template>
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
</template>`,zw={__name:"ContainerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Container",code:Ew},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(u(Ni),null,{default:i(()=>[Rw]),_:1})]),_:1}))}},Fw=v("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Pw=`<template>
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
</template>`,Vw={__name:"TextContainerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Container",code:Pw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(u(Ni),{text:""},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Fw]),_:1})]),_:1}))}},Mw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,Hw={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Alignment",code:Mw},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(u(Ni),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(u(Ni),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(u(Ni),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Nw=v("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Ow=`<template>
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
</template>`,jw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:Ow},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(u(Ni),{fluid:""},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),Nw]),_:1})]),_:1}))}},qw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:zw},{id:"text-container",label:"Text Container",category:"Types",component:Vw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:Hw},{id:"fluid",label:"Fluid",category:"Variations",component:jw}];return(l,o)=>(k(),B(ut,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Gw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Uw={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Divider",code:Gw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve)),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Yw=v("label",null,"Username",-1),Jw=v("input",{type:"text",placeholder:"Username"},null,-1),Ww=v("label",null,"Password",-1),Kw=v("input",{type:"password",placeholder:"Password"},null,-1),Xw=`<template>
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
</template>`,Qw={__name:"VerticalDividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertical Divider",code:Xw},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(u(N),{placeholder:""},{default:i(()=>[t(u(hl),{columns:"equal"},{default:i(()=>[t(u(Bt),null,{default:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(lt),null,{default:i(()=>[Yw,Jw]),_:1}),t(u(lt),null,{default:i(()=>[Ww,Kw]),_:1}),t(u(F),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(u(Bt),{textAlign:"middle"},{default:i(()=>[t(u(F),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(u(Ve),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},Zw=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,eC={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal Divider",code:Zw},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(u(N),{basic:"",textAlign:"center"},{default:i(()=>[t(u(tt),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(u(Ve),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(u(F),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},tC=`<template>
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
</template>`,iC={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal Alignment",code:tC},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(u(Ve),{horizontal:"",textAlign:"left"},{default:i(()=>[t(u(K),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(u(Ve),{horizontal:"",textAlign:"center"},{default:i(()=>[t(u(K),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(u(Ve),{horizontal:"",textAlign:"right"},{default:i(()=>[t(u(K),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},aC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,lC={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:aC},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{inverted:""}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},nC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,oC={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:nC},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(u(N),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(u(Ve),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},sC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,rC={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Hidden",code:sC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(u(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{hidden:""}),t(u(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},uC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,cC={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Section",code:uC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(u(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{section:""}),t(u(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},dC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,mC={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Clearing",code:dC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(u(Ve),{clearing:""}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},pC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,fC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:pC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(u(Ve),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(u(Ve),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(u(Ve),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(u(Ve),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(u(Ve),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(u(Ve),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(u(Ve),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},gC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Uw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:Qw},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:eC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:iC},{id:"inverted",label:"Inverted",category:"Variations",component:lC},{id:"fitted",label:"Fitted",category:"Variations",component:oC},{id:"hidden",label:"Hidden",category:"Variations",component:rC},{id:"section",label:"Section",category:"Variations",component:cC},{id:"clearing",label:"Clearing",category:"Variations",component:mC},{id:"size",label:"Size",category:"Variations",component:fC}];return(l,o)=>(k(),B(ut,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},hC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,_C={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:hC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(u(Lt),{name:"anguished",disabled:""})]),_:1}))}},bC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,vC={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:bC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(u(Lt),{name:"angel",loading:""}),t(u(Lt),{name:"blush",loading:""}),t(u(Lt),{name:"grin",loading:""})]),_:1}))}},SC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,yC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:SC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(u(Lt),{name:"relaxed",size:"small"}),t(u(Lt),{name:"relaxed",size:"medium"}),t(u(Lt),{name:"relaxed",size:"large"}),t(u(Lt),{name:"relaxed",size:"big"})]),_:1}))}},wC=`<template>
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
</template>`,CC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Autosizing",code:wC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(Lt),{name:"relaxed"})]),_:1}),t(u(F),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(Lt),{name:"relaxed"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(Lt),{name:"relaxed"})]),_:1})]),_:1}))}},AC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,kC={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:AC},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(u(Lt),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},xC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:_C},{id:"loading",label:"Loading",category:"States",component:vC},{id:"size",label:"Size",category:"Variations",component:yC},{id:"autosizing",label:"Autosizing",category:"Variations",component:CC},{id:"link",label:"Link",category:"Variations",component:kC}];return(l,o)=>(k(),B(ut,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},$C=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,BC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:$C},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(u(Jt),{name:"de",size:"small"}),t(u(Jt),{name:"fr",size:"medium"}),t(u(Jt),{name:"li",size:"large"}),t(u(Jt),{name:"jp",size:"big"}),t(u(Jt),{name:"gb",size:"huge"}),t(u(Jt),{name:"un",size:"massive"})]),_:1}))}},TC=`<template>
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
</template>`,DC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Autosizing",code:TC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(Jt),{name:"us"})]),_:1}),t(u(F),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(Jt),{name:"eu"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(Jt),{name:"pirate"})]),_:1})]),_:1}))}},LC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:BC},{id:"autosizing",label:"Autosizing",category:"Types",component:DC}];return(l,o)=>(k(),B(ut,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},IC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,RC={__name:"PageHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Page Headers",code:IC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(u(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(u(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(u(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(u(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(u(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},EC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,zC={__name:"ContentHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Content Headers",code:EC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(u(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(u(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(u(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(u(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(u(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},FC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,PC={__name:"IconHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon Headers",code:FC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(u(fe),{icon:""},{default:i(()=>[t(u(K),{name:"settings"}),t(u(ys),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(u(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},VC=v("span",null,"$10.99",-1),MC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,HC={__name:"SubHeadersDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Sub Headers",code:MC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(u(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),VC]),_:1}))}},NC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,OC={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image",code:NC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},jC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,qC={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:jC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[t(u(K),{name:"plug"}),t(u(ys),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},GC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,UC={__name:"SubheaderDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Subheader",code:GC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(u(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},YC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,JC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:YC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(u(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},WC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,KC={__name:"DividingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Dividing",code:WC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(u(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},XC=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,QC={__name:"BlockDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Block",code:XC},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(u(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},ZC=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,eA={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Attached",code:ZC},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(u(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(u(N),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},tA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,iA={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floating",code:tA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(u(N),{clearing:""},{default:i(()=>[t(u(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(u(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},aA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,lA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Alignment",code:aA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(u(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(u(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(u(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},nA=`<template>
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
</template>`,oA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:nA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(u(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},sA=`<template>
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
</template>`,rA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:sA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},uA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:RC},{id:"content-headers",label:"Content Headers",category:"Types",component:zC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:PC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:HC},{id:"image",label:"Image",category:"Content",component:OC},{id:"icon",label:"Icon",category:"Content",component:qC},{id:"subheader",label:"Subheader",category:"Content",component:UC},{id:"disabled",label:"Disabled",category:"States",component:JC},{id:"dividing",label:"Dividing",category:"Variations",component:KC},{id:"block",label:"Block",category:"Variations",component:QC},{id:"attached",label:"Attached",category:"Variations",component:eA},{id:"floating",label:"Floating",category:"Variations",component:iA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:lA},{id:"colored",label:"Colored",category:"Variations",component:oA},{id:"inverted",label:"Inverted",category:"Variations",component:rA}];return(l,o)=>(k(),B(ut,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},cA=`<template>
  <SuiIcon name="users" disabled />
</template>`,dA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:cA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(u(K),{name:"users",disabled:""})]),_:1}))}},mA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,pA={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:mA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(u(K),{name:"spinner",loading:""}),t(u(K),{name:"notched circle",loading:""}),t(u(K),{name:"asterisk",loading:""})]),_:1}))}},fA=v("br",null,null,-1),gA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,hA={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fitted",code:gA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[v("div",null,[n(" This icon "),t(u(K),{name:"help",fitted:""}),n(" is fitted. "),fA,n(" This icon "),t(u(K),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},_A=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,bA={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:_A},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(u(K),{name:"home",size:"mini"}),t(u(K),{name:"home",size:"tiny"}),t(u(K),{name:"home",size:"small"}),t(u(K),{name:"home"}),t(u(K),{name:"home",size:"large"}),t(u(K),{name:"home",size:"big"}),t(u(K),{name:"home",size:"huge"}),t(u(K),{name:"home",size:"massive"})]),_:1}))}},vA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,SA={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:vA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(u(K),{name:"close",link:""}),t(u(K),{name:"help",link:""})]),_:1}))}},yA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,wA={__name:"FlippedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Flipped",code:yA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(u(K),{name:"cloud",flipped:"horizontally"}),t(u(K),{name:"cloud",flipped:"vertically"})]),_:1}))}},CA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,AA={__name:"RotatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Rotated",code:CA},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(u(K),{name:"cloud",rotated:"clockwise"}),t(u(K),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},kA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,xA={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:kA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(u(K),{name:"users",circular:""}),t(u(K),{name:"users",circular:"",color:"teal"}),t(u(K),{name:"users",circular:"",inverted:""}),t(u(K),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},$A=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,BA={__name:"CircularColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular Colored",code:$A},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(K),{name:"users",circular:"",colored:"",color:"red"}),t(u(K),{name:"users",circular:"",colored:"",color:"green"}),t(u(K),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},TA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,DA={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Bordered",code:TA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(u(K),{name:"users",bordered:""}),t(u(K),{name:"users",bordered:"",color:"teal"}),t(u(K),{name:"users",bordered:"",inverted:"",color:"black"}),t(u(K),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},LA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,IA={__name:"BorderedColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Bordered Colored",code:LA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(K),{name:"users",bordered:"",colored:"",color:"red"}),t(u(K),{name:"users",bordered:"",colored:"",color:"green"}),t(u(K),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},RA=`<template>
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
</template>`,EA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:RA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(u(K),{name:"users",primary:""}),t(u(K),{name:"users",secondary:""}),t(u(K),{name:"users",color:"red"}),t(u(K),{name:"users",color:"orange"}),t(u(K),{name:"users",color:"yellow"}),t(u(K),{name:"users",color:"olive"}),t(u(K),{name:"users",color:"green"}),t(u(K),{name:"users",color:"teal"}),t(u(K),{name:"users",color:"blue"}),t(u(K),{name:"users",color:"violet"}),t(u(K),{name:"users",color:"purple"}),t(u(K),{name:"users",color:"pink"}),t(u(K),{name:"users",color:"brown"}),t(u(K),{name:"users",color:"grey"}),t(u(K),{name:"users",color:"black"})]),_:1}))}},zA=`<template>
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
</template>`,FA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:zA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(u(K),{name:"users",inverted:""}),t(u(K),{name:"users",inverted:"",primary:""}),t(u(K),{name:"users",inverted:"",secondary:""}),t(u(K),{name:"users",inverted:"",color:"red"}),t(u(K),{name:"users",inverted:"",color:"orange"}),t(u(K),{name:"users",inverted:"",color:"yellow"}),t(u(K),{name:"users",inverted:"",color:"olive"}),t(u(K),{name:"users",inverted:"",color:"green"}),t(u(K),{name:"users",inverted:"",color:"teal"}),t(u(K),{name:"users",inverted:"",color:"blue"}),t(u(K),{name:"users",inverted:"",color:"violet"}),t(u(K),{name:"users",inverted:"",color:"purple"}),t(u(K),{name:"users",inverted:"",color:"pink"}),t(u(K),{name:"users",inverted:"",color:"brown"}),t(u(K),{name:"users",inverted:"",color:"grey"})]),_:1}))}},PA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,VA={__name:"IconsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icons",code:PA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(u(zi),{size:"huge"},{default:i(()=>[t(u(K),{name:"circle outline",size:"big"}),t(u(K),{name:"user"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(K),{name:"dont",size:"big",color:"red"}),t(u(K),{name:"user",color:"black"})]),_:1})]),_:1}))}},MA=`<template>
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
</template>`,HA={__name:"CornerIconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Corner Icon",code:MA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(u(zi),{size:"huge"},{default:i(()=>[t(u(K),{name:"puzzle"}),t(u(K),{name:"add",corner:"top left"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(K),{name:"puzzle"}),t(u(K),{name:"add",corner:"top right"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(K),{name:"puzzle"}),t(u(K),{name:"add",corner:"bottom left"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(K),{name:"puzzle"}),t(u(K),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},NA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:dA},{id:"loading",label:"Loading",category:"States",component:pA},{id:"fitted",label:"Fitted",category:"Variations",component:hA},{id:"size",label:"Size",category:"Variations",component:bA},{id:"link",label:"Link",category:"Variations",component:SA},{id:"flipped",label:"Flipped",category:"Variations",component:wA},{id:"rotated",label:"Rotated",category:"Variations",component:AA},{id:"circular",label:"Circular",category:"Variations",component:xA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:BA},{id:"bordered",label:"Bordered",category:"Variations",component:DA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:IA},{id:"colored",label:"Colored",category:"Variations",component:EA},{id:"inverted",label:"Inverted",category:"Variations",component:FA},{id:"icons",label:"Icons",category:"Groups",component:VA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:HA}];return(l,o)=>(k(),B(ut,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},OA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,jA={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image",code:OA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},qA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,GA={__name:"ImageLinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image Link",code:qA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(u(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},UA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,YA={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Hidden",code:UA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},JA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,WA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:JA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},KA=v("span",null,"Username",-1),XA=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,QA={__name:"AvatarDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Avatar",code:XA},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),KA]),_:1}))}},ZA=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,e0={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Bordered",code:ZA},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},t0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,i0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:t0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},a0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,l0={__name:"RoundedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Rounded",code:a0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},n0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,o0={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:n0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},s0=v("span",null,"Top Aligned",-1),r0=v("span",null,"Middle Aligned",-1),u0=v("span",null,"Bottom Aligned",-1),c0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,d0={__name:"VerticallyAlignedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertically Aligned",code:c0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(u(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),s0,t(u(Ve)),t(u(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),r0,t(u(Ve)),t(u(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),u0]),_:1}))}},m0=v("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),p0=v("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),f0=v("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),g0=`<template>
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
</template>`,h0={__name:"CenteredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Centered",code:g0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),m0,p0,t(u(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),f0]),_:1})]),_:1}))}},_0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,b0={__name:"SpacedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Spaced",code:_0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(N),null,{default:i(()=>[v("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(u(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},v0=v("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),S0=v("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),y0=v("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),w0=`<template>
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
</template>`,C0={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floated",code:w0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),v0,t(u(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),S0,y0]),_:1})]),_:1}))}},A0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,k0={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:A0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(u(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},x0=`<template>
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
</template>`,$0={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:x0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(u(ko),{size:"tiny"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Ve),{hidden:""}),t(u(ko),{size:"small"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},B0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:jA},{id:"image-link",label:"Image Link",category:"Types",component:GA},{id:"hidden",label:"Hidden",category:"States",component:YA},{id:"disabled",label:"Disabled",category:"States",component:WA},{id:"avatar",label:"Avatar",category:"Variations",component:QA},{id:"bordered",label:"Bordered",category:"Variations",component:e0},{id:"fluid",label:"Fluid",category:"Variations",component:i0},{id:"rounded",label:"Rounded",category:"Variations",component:l0},{id:"circular",label:"Circular",category:"Variations",component:o0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:d0},{id:"centered",label:"Centered",category:"Variations",component:h0},{id:"spaced",label:"Spaced",category:"Variations",component:b0},{id:"floated",label:"Floated",category:"Variations",component:C0},{id:"size",label:"Size",category:"Variations",component:k0},{id:"group-size",label:"Size",category:"Groups",component:$0}];return(l,o)=>(k(),B(ut,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},T0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,D0={__name:"InputDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Input",code:T0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(u(tt),{placeholder:"Search..."})]),_:1}))}},L0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,I0={__name:"FocusDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Focus",code:L0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(u(tt),{focus:"",placeholder:"Search..."})]),_:1}))}},R0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,E0={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:R0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(u(tt),{loading:"",icon:"user",placeholder:"Search..."}),t(u(tt),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},z0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,F0={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:z0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(u(tt),{disabled:"",placeholder:"Search..."})]),_:1}))}},P0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,V0={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Error",code:P0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(u(tt),{error:"",placeholder:"Search..."})]),_:1}))}},M0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,H0={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:M0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(u(tt),{icon:"search",placeholder:"Search..."}),t(u(tt),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},N0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,O0={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Labeled",code:N0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(u(tt),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},j0=`<template>
  <SuiInput action="Search" />
</template>`,q0={__name:"ActionDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Action",code:j0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(u(tt),{action:"Search"})]),_:1}))}},G0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,U0={__name:"TransparentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Transparent",code:G0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(u(tt),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},Y0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,J0={__name:"InvertedDoc",setup(e){return(a,l)=>{const o=y("SuiSegment");return k(),B(R,{label:"Inverted",code:Y0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(u(tt),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},W0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,K0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:W0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(u(tt),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},X0=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,Q0={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:X0},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(u(tt),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(u(tt),{icon:"search",placeholder:"Search small...",size:"small"}),t(u(tt),{icon:"search",placeholder:"Search large...",size:"large"}),t(u(tt),{icon:"search",placeholder:"Search big...",size:"big"}),t(u(tt),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(u(tt),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},Z0={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:D0},{id:"focus",label:"Focus",category:"States",component:I0},{id:"loading",label:"Loading",category:"States",component:E0},{id:"disabled",label:"Disabled",category:"States",component:F0},{id:"error",label:"Error",category:"States",component:V0},{id:"icon",label:"Icon",category:"Variations",component:H0},{id:"labeled",label:"Labeled",category:"Variations",component:O0},{id:"action",label:"Action",category:"Variations",component:q0},{id:"transparent",label:"Transparent",category:"Variations",component:U0},{id:"inverted",label:"Inverted",category:"Variations",component:J0},{id:"fluid",label:"Fluid",category:"Variations",component:K0},{id:"size",label:"Size",category:"Variations",component:Q0}];return(l,o)=>(k(),B(ut,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},ek=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,tk={__name:"LabelDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Label",code:ek},{description:i(()=>[n(" A label ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(K),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},zo="/vue-fomantic-ui/images/avatar/small/joe.jpg",jd="/vue-fomantic-ui/images/avatar/small/veronika.jpg",oi="/vue-fomantic-ui/images/avatar/small/elliot.jpg",ik=v("img",{src:zo},null,-1),ak=v("img",{src:jd},null,-1),lk=v("img",{src:oi},null,-1),nk=`<template>
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
</template>`,ok={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Image",code:nk},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(u(O),{as:"a",image:""},{default:i(()=>[ik,n(" Joe ")]),_:1}),t(u(O),{as:"a",image:"",color:"blue"},{default:i(()=>[ak,n(" Veronika "),t(u(Da),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(u(O),{as:"a",image:""},{default:i(()=>[lk,n(" Elliot "),t(u(K),{name:"delete"})]),_:1})]),_:1}))}},sk=v("input",{type:"text",placeholder:"First Name"},null,-1),rk=v("input",{type:"text"},null,-1),uk=v("input",{type:"text",placeholder:"Username"},null,-1),ck=v("input",{type:"password"},null,-1),dk=`<template>
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
</template>`,mk={__name:"PointingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Pointing",code:dk},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(u(Nt),{fluid:""},{default:i(()=>[t(u(lt),null,{default:i(()=>[sk,t(u(O),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(u(Ve)),t(u(lt),null,{default:i(()=>[t(u(O),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),rk]),_:1}),t(u(Ve)),t(u(lt),{inline:""},{default:i(()=>[uk,t(u(O),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(u(Ve)),t(u(lt),{inline:""},{default:i(()=>[t(u(O),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),ck]),_:1})]),_:1})]),_:1}))}},pk=`<template>
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
</template>`,fk={__name:"CornerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Corner",code:pk},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(u(hl),{columns:2},{default:i(()=>[t(u(Bt),null,{default:i(()=>[t(u(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Bt),null,{default:i(()=>[t(u(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},gk=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,hk={__name:"TagDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Tag",code:gk},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(u(O),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(u(O),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(u(O),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},_k=v("span",null,"Account Details",-1),bk=v("span",null,"User Reviews",-1),vk=v("span",null,"Technical Specifications",-1),Sk=v("span",null,"User Reviews",-1),yk=`<template>
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
</template>`,wk={__name:"RibbonDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Ribbon",code:yk},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(u(hl),{columns:2},{default:i(()=>[t(u(Bt),null,{default:i(()=>[t(u(N),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),_k,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),bk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Bt),null,{default:i(()=>[t(u(N),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),vk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),Sk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ck=`<template>
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
</template>`,Ak={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Attached",code:Ck},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(u(hl),{columns:3},{default:i(()=>[t(u($o),null,{default:i(()=>[t(u(Bt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Bt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Bt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(u($o),null,{default:i(()=>[t(u(Bt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Bt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Bt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},kk=`<template>
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
</template>`,xk={__name:"HorizontalDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal",code:kk},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(u(gd),{divided:"",selection:""},{default:i(()=>[t(u(Ha),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},$k=`<template>
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
</template>`,Bk={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floating",code:$k},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(u(hd),{compact:""},{default:i(()=>[t(u(Bo),null,{default:i(()=>[t(u(K),{name:"mail"}),n(" Messages "),t(u(O),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(u(Bo),null,{default:i(()=>[t(u(K),{name:"users"}),n(" Friends "),t(u(O),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Tk=`<template>
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
</template>`,Dk={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:Tk},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(O),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Lk=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,Ik={__name:"DetailDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Detail",code:Lk},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(u(O),null,{default:i(()=>[n(" Dogs "),t(u(Da),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Rk=`<template>
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
</template>`,Ek={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Icon",code:Rk},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(K),{name:"mail"}),n(" Mail ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(K),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(u(O),{icon:"dog"}),t(u(O),{icon:"cat"})]),_:1}))}},zk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Fk={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:zk},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(u(O),{as:"a"},{default:i(()=>[t(u(K),{name:"mail"}),n(" 23 ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(K),{name:"mail"}),n(" 23 "),t(u(Da),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Pk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Vk={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:Pk},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(O),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},Mk=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,Hk={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fluid",code:Mk},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(u(O),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},Nk=`<template>
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
</template>`,Ok={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:Nk},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(u(O),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},jk=v("img",{src:oi},null,-1),qk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Gk={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic",code:qk},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(u(O),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(u(O),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(u(O),{as:"a",basic:"",image:""},{default:i(()=>[jk,n(" Elliot ")]),_:1}),t(u(O),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(u(O),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Uk=`<template>
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
</template>`,Yk={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:Uk},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(u(O),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Jk=`<template>
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
</template>`,Wk={__name:"BasicTagDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic Tag",code:Jk},{description:i(()=>[]),example:i(()=>[t(u(O),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Kk=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,Xk={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:Kk},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(u(O),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(O),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(O),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(O),null,{default:i(()=>[n("Medium")]),_:1}),t(u(O),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(O),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(O),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},Qk=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,Zk={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Group Size",code:Qk},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(u(La),{size:"huge"},{default:i(()=>[t(u(O),null,{default:i(()=>[n("Fun")]),_:1}),t(u(O),null,{default:i(()=>[n("Happy")]),_:1}),t(u(O),null,{default:i(()=>[n("Smart")]),_:1}),t(u(O),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},ex=`<template>
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
</template>`,tx={__name:"ColoredGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Clored Group",code:ex},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(u(La),{color:"blue"},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(K),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Da),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},ix=`<template>
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
</template>`,ax={__name:"BasicGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic Group",code:ix},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(u(La),{basic:""},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(K),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Da),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},lx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,nx={__name:"TagGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Tag Group",code:lx},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(u(La),{tag:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},ox=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,sx={__name:"CircularGroupDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular Group",code:ox},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(u(La),{circular:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},rx={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:tk},{id:"image",label:"Image",category:"Types",component:ok},{id:"pointing",label:"Pointing",category:"Types",component:mk},{id:"corner",label:"Corner",category:"Types",component:fk},{id:"tag",label:"Tag",category:"Types",component:hk},{id:"ribbon",label:"Ribbon",category:"Types",component:wk},{id:"attached",label:"Attached",category:"Types",component:Ak},{id:"horizontal",label:"Horizontal",category:"Types",component:xk},{id:"floating",label:"Floating",category:"Types",component:Bk},{id:"inverted",label:"Inverted",category:"Types",component:Dk},{id:"detail",label:"Detail",category:"Content",component:Ik},{id:"icon",label:"Icon",category:"Content",component:Ek},{id:"link",label:"Link",category:"Content",component:Fk},{id:"disabled",label:"Disabled",category:"States",component:Vk},{id:"fluid",label:"Fluid",category:"Variations",component:Hk},{id:"circular",label:"Circular",category:"Variations",component:Ok},{id:"basic",label:"Basic",category:"Variations",component:Gk},{id:"colored",label:"Colored",category:"Variations",component:Yk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Wk},{id:"size",label:"Size",category:"Variations",component:Xk},{id:"group-size",label:"Group Size",category:"Groups",component:Zk},{id:"colored-group",label:"Colored Group",category:"Groups",component:tx},{id:"basic-group",label:"Basic Group",category:"Groups",component:ax},{id:"tag-group",label:"Tag Group",category:"Groups",component:nx},{id:"circular-group",label:"Circular Group",category:"Groups",component:sx}];return(l,o)=>(k(),B(ut,{title:"Label",description:"A label displays content classification","component-docs":a}))}},ux=qh(ag);function cx(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Dl=ux,Jn=cx(sd),dx=Dl.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var o=l.slots,r=l.attrs,d=o&&o.default&&o.default()||[],p=a.code||d&&d.length?d[0].children:"",f=a.inline,s=a.language,c=Jn.languages[s],g="language-".concat(s);return function(){return f?Dl.h("code",{class:[g],innerHTML:Jn.highlight(p,c)}):Dl.h("pre",Object.assign({},r,{class:[r.class,g]}),[Dl.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:Jn.highlight(p,c)}))])}}}),mx=dx;const px=nd(mx),fx=z({name:"DocExample",components:{Prism:px},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),gx={class:"example"};function hx(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-grid-column"),c=y("sui-icon"),g=y("sui-grid-row"),m=y("prism"),h=y("sui-grid");return k(),_e("div",gx,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Te(e.title)+" ",1),t(p,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(c,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[qi(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(k(),B(s,{key:0,width:16},{default:i(()=>[t(m,{language:"markup"},{default:i(()=>[n(Te(e.code),1)]),_:1})]),_:1})):ds("",!0)]),_:3})]),_:3})])}const Je=De(fx,[["render",hx],["__scopeId","data-v-fcfb6a67"]]),_x="/vue-fomantic-ui/images/avatar/small/rachel.png",bx="/vue-fomantic-ui/images/avatar/small/lindsay.png",vx="/vue-fomantic-ui/images/avatar/small/matthew.png",An="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Sx="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ll="/vue-fomantic-ui/images/avatar/small/christian.jpg",kn="/vue-fomantic-ui/images/avatar/small/matt.jpg",ja="/vue-fomantic-ui/images/avatar/small/helen.jpg",Li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Fo="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Wn="/vue-fomantic-ui/images/wireframe/square-image.png",yx=z({name:"ListDoc",components:{DocExample:Je},setup(){return{listCode:`<sui-list>
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
</div>`}}}),wx={class:"intro"},Cx=v("div",null,"Benefits",-1),Ax={class:"list"},kx=v("a",null,"Languages",-1),xx=v("a",null,[v("b",null,"Arrested Development")],-1),$x=v("a",null,[v("b",null,"Bob's Burgers")],-1),Bx=v("a",null,[v("b",null,"The Godfather Part 2")],-1),Tx=v("a",null,[v("b",null,"Twin Peaks")],-1),Dx=v("a",null,[v("b",null,"Arrested Development")],-1),Lx=v("a",null,[v("b",null,"Bob's Burgers")],-1),Ix=v("a",null,[v("b",null,"The Godfather Part 2")],-1);function Rx(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-list-item"),C=y("sui-list"),$=y("doc-example"),D=y("sui-list-list"),_=y("sui-list-header"),S=y("sui-list-description"),x=y("sui-list-content"),T=y("sui-image");return k(),_e("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",wx,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(p,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Apples")]),_:1}),t(b,null,{default:i(()=>[n("Pears")]),_:1}),t(b,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(b,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(b,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(b,null,{default:i(()=>[Cx,v("div",Ax,[t(b,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(b,null,{default:i(()=>[n("Rebates")]),_:1}),t(b,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(b,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(b,null,{default:i(()=>[kx,t(D,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(b,{active:""},{default:i(()=>[n("Home")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("1")]),_:1}),t(b,null,{default:i(()=>[n("2")]),_:1}),t(b,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[t(c,{name:"help"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(S,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[t(c,{name:"right triangle"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(S,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:_x}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Rachel")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),xx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:bx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Lindsay")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),$x,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:vx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matthew")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Bx,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:An}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Tx,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:jd}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(S,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(S,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(S,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(S,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(S,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Sx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:kn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Dx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fo}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Lx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(S,null,{default:i(()=>[n(" Last seen watching "),Ix,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Fo}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:ja}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t($,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Wn}),t(x,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Wn}),t(x,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Wn}),t(x,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[v("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Ex=De(yx,[["render",Rx]]),zx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Fx={__name:"LoaderDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loader",code:zx},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe))]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Px=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Vx={__name:"TextLoaderDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Loader",code:Px},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Mx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Hx={__name:"IndeterminateDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Indeterminate",code:Mx},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Nx=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ox={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:Nx},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Pe),{active:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},jx=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,qx={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:jx},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Pe),{disabled:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Gx=`<template>
  <SuiLoader active inline />
</template>`,Ux={__name:"InlineDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inline",code:Gx},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(u(Pe),{active:"",inline:""})]),_:1}))}},Yx=`<template>
  <SuiLoader active inline />
</template>`,Jx={__name:"InlineCenterDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inline Center",code:Yx},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(u(Pe),{active:"",inline:"centered"})]),_:1}))}},Wx=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,Kx={__name:"SpeedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Speed",code:Wx},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(u(Pe),{slow:"",active:"",inline:""}),t(u(Pe),{active:"",inline:""}),t(u(Pe),{fast:"",active:"",inline:""})]),_:1}))}},Xx=`<template>
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
</template>`,Qx={__name:"ColorsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colors",code:Xx},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(u(Pe),{active:"",inline:"",primary:""}),t(u(Pe),{active:"",inline:"",secondary:""}),t(u(Pe),{active:"",inline:"",color:"red"}),t(u(Pe),{active:"",inline:"",color:"orange"}),t(u(Pe),{active:"",inline:"",color:"yellow"}),t(u(Pe),{active:"",inline:"",color:"olive"}),t(u(Pe),{active:"",inline:"",color:"green"}),t(u(Pe),{active:"",inline:"",color:"teal"}),t(u(Pe),{active:"",inline:"",color:"blue"}),t(u(Pe),{active:"",inline:"",color:"violet"}),t(u(Pe),{active:"",inline:"",color:"purple"}),t(u(Pe),{active:"",inline:"",color:"pink"}),t(u(Pe),{active:"",inline:"",color:"brown"}),t(u(Pe),{active:"",inline:"",color:"grey"}),t(u(Pe),{active:"",inline:"",color:"black"})]),_:1}))}},Zx=`<template>
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
</template>`,e$={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:Zx},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Pe),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},t$=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,i$={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:t$},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(Pe),{active:"",inverted:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},a$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Fx},{id:"text-loader",label:"Text Loader",category:"Types",component:Vx},{id:"indeterminate",label:"Indeterminate",category:"States",component:Hx},{id:"active",label:"Active",category:"States",component:Ox},{id:"disabled",label:"Disabled",category:"States",component:qx},{id:"inline",label:"Inline",category:"Variations",component:Ux},{id:"inline-center",label:"Inline Center",category:"Variations",component:Jx},{id:"speed",label:"Speed",category:"Variations",component:Kx},{id:"colors",label:"Colors",category:"Variations",component:Qx},{id:"size",label:"Size",category:"Variations",component:e$},{id:"inverted",label:"Inverted",category:"Variations",component:i$}];return(l,o)=>(k(),B(ut,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},nt="/vue-fomantic-ui/images/wireframe/short-paragraph.png",l$=z({name:"RailDoc",components:{DocExample:Je},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),n$={class:"intro"};function o$(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-image"),C=y("sui-rail"),$=y("sui-grid-column"),D=y("sui-grid"),_=y("doc-example");return k(),_e("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",n$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(p,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(b,{src:nt}),t(C,{internal:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{attached:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{close:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const s$=De(l$,[["render",o$]]),r$=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,u$={__name:"FadeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fade",code:r$},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(u(ta),{animated:"fade"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},c$=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,d$={__name:"MoveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Move",code:c$},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(u(ta),{animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},m$=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,p$={__name:"RotateDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Rotate",code:m$},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(u(ta),{animated:"rotate"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},f$=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,g$={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:f$},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(u(ta),{active:"",animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},h$=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,_$={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:h$},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(u(ta),{disabled:"",animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},b$=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,v$={__name:"InstantDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Instant",code:b$},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(u(ta),{instant:"",animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},S$={__name:"Reveal",setup(e){const a=[{id:"fade",label:"Fade",category:"Types",component:u$},{id:"move",label:"Move",category:"Types",component:d$},{id:"rotate",label:"Rotate",category:"Types",component:p$},{id:"active",label:"Active",category:"States",component:g$},{id:"disabled",label:"Disabled",category:"States",component:_$},{id:"instant",label:"Instant",category:"Variations",component:v$}];return(l,o)=>(k(),B(ut,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":a}))}},y$=v("p",null,"Pellentesque habitant morbi tristique senectus.",-1),w$=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,C$={__name:"SegmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Segment",code:w$},{description:i(()=>[n(" A segment of content ")]),example:i(()=>[t(u(N),null,{default:i(()=>[y$]),_:1})]),_:1}))}},A$=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,k$={__name:"PlaceholderSegmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Placeholder Segment",code:A$},{description:i(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:i(()=>[t(u(N),{placeholder:""},{default:i(()=>[t(u(fe),{icon:""},{default:i(()=>[t(u(K),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(u(F),{primary:""},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},x$=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),$$=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,B$={__name:"RaisedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Raised",code:$$},{description:i(()=>[n(" A segment may be formatted to raise above the page. ")]),example:i(()=>[t(u(N),{raised:""},{default:i(()=>[x$]),_:1})]),_:1}))}},T$=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),D$=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),L$=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,I$={__name:"StackedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Stacked",code:L$},{description:i(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:i(()=>[t(u(N),{stacked:""},{default:i(()=>[T$]),_:1}),t(u(N),{stacked:"tall"},{default:i(()=>[D$]),_:1})]),_:1}))}},R$=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),E$=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),z$=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),F$=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,P$={__name:"PiledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Piled",code:F$},{description:i(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:i(()=>[t(u(fe),{as:"h4"},{default:i(()=>[n("Header")]),_:1}),t(u(N),{piled:""},{default:i(()=>[R$,E$,z$]),_:1})]),_:1}))}},V$=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),M$=v("p",null,"Pellentesque habitant morbi tristique senectus.",-1),H$=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),N$=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,O$={__name:"VerticalSegmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Vertical Segment",code:N$},{description:i(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:i(()=>[t(u(N),{vertical:""},{default:i(()=>[V$]),_:1}),t(u(N),{vertical:""},{default:i(()=>[M$]),_:1}),t(u(N),{vertical:""},{default:i(()=>[H$]),_:1})]),_:1}))}},j$=v("p",null,"Top",-1),q$=v("p",null,"Middle",-1),G$=v("p",null,"Bottom",-1),U$=v("p",null,"Top",-1),Y$=v("p",null,"Middle",-1),J$=v("p",null,"Bottom",-1),W$=v("p",null,"Top",-1),K$=v("p",null,"Middle",-1),X$=v("p",null,"Bottom",-1),Q$=`<template>
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
</template>`,Z$={__name:"SegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Segments",code:Q$},{description:i(()=>[n(" A group of segments can be formatted to appear together ")]),example:i(()=>[t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[j$]),_:1}),t(u(N),null,{default:i(()=>[q$]),_:1}),t(u(N),null,{default:i(()=>[G$]),_:1})]),_:1}),t(u(Ct),{basic:""},{default:i(()=>[t(u(N),null,{default:i(()=>[U$]),_:1}),t(u(N),null,{default:i(()=>[Y$]),_:1}),t(u(N),null,{default:i(()=>[J$]),_:1})]),_:1}),t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[W$]),_:1}),t(u(N),{color:"red"},{default:i(()=>[K$]),_:1}),t(u(N),{secondary:""},{default:i(()=>[X$]),_:1})]),_:1})]),_:1}))}},eB=v("p",null,"Top",-1),tB=v("p",null,"Nested Top",-1),iB=v("p",null,"Nested Middle",-1),aB=v("p",null,"Nested Bottom",-1),lB=v("p",null,"Middle",-1),nB=v("p",null,"Top",-1),oB=v("p",null,"Middle",-1),sB=v("p",null,"Bottom",-1),rB=v("p",null,"Bottom",-1),uB=`<template>
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
</template>`,cB={__name:"NestedSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Nested Segments",code:uB},{description:i(()=>[n(" A group of segments can be nested in another group of segments ")]),example:i(()=>[t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[eB]),_:1}),t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[tB]),_:1}),t(u(N),null,{default:i(()=>[iB]),_:1}),t(u(N),null,{default:i(()=>[aB]),_:1})]),_:1}),t(u(N),null,{default:i(()=>[lB]),_:1}),t(u(Ct),{horizontal:""},{default:i(()=>[t(u(N),null,{default:i(()=>[nB]),_:1}),t(u(N),null,{default:i(()=>[oB]),_:1}),t(u(N),null,{default:i(()=>[sB]),_:1})]),_:1}),t(u(N),null,{default:i(()=>[rB]),_:1})]),_:1})]),_:1}))}},dB=v("p",null,"Left",-1),mB=v("p",null,"Middle",-1),pB=v("p",null,"Right",-1),fB=`<template>
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
</template>`,gB={__name:"HorizontalSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal Segments",code:fB},{description:i(()=>[n(" A segment group can appear horizontally ")]),example:i(()=>[t(u(Ct),{horizontal:""},{default:i(()=>[t(u(N),null,{default:i(()=>[dB]),_:1}),t(u(N),null,{default:i(()=>[mB]),_:1}),t(u(N),null,{default:i(()=>[pB]),_:1})]),_:1})]),_:1}))}},hB=`<template>
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
</template>`,_B={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal equal width Segments",code:hB},{description:i(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:i(()=>[t(u(Ct),{horizontal:"equal width"},{default:i(()=>[t(u(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},bB=`<template>
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
</template>`,vB={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Horizontal wrapping Segments",code:bB},{description:i(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:i(()=>[t(u(Ct),{horizontal:"wrapping"},{default:i(()=>[t(u(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Two ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Three ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Four ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Five ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Six ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Seven ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},SB=v("p",null,"Top",-1),yB=v("p",null,"Middle",-1),wB=v("p",null,"Bottom",-1),CB=`<template>
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
</template>`,AB={__name:"RaisedSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Raised Segments",code:CB},{description:i(()=>[n(" A group of segments can be raised ")]),example:i(()=>[t(u(Ct),{raised:""},{default:i(()=>[t(u(N),null,{default:i(()=>[SB]),_:1}),t(u(N),null,{default:i(()=>[yB]),_:1}),t(u(N),null,{default:i(()=>[wB]),_:1})]),_:1})]),_:1}))}},kB=v("p",null,"Top",-1),xB=v("p",null,"Middle",-1),$B=v("p",null,"Bottom",-1),BB=`<template>
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
</template>`,TB={__name:"StackedSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Stacked Segments",code:BB},{description:i(()=>[n(" A group of segments can be stacked ")]),example:i(()=>[t(u(Ct),{stacked:""},{default:i(()=>[t(u(N),null,{default:i(()=>[kB]),_:1}),t(u(N),null,{default:i(()=>[xB]),_:1}),t(u(N),null,{default:i(()=>[$B]),_:1})]),_:1})]),_:1}))}},DB=v("p",null,"Top",-1),LB=v("p",null,"Middle",-1),IB=v("p",null,"Bottom",-1),RB=`<template>
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
</template>`,EB={__name:"PiledSegmentsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Piled Segments",code:RB},{description:i(()=>[n(" A group of segments can be piled ")]),example:i(()=>[t(u(Ct),{piled:""},{default:i(()=>[t(u(N),null,{default:i(()=>[DB]),_:1}),t(u(N),null,{default:i(()=>[LB]),_:1}),t(u(N),null,{default:i(()=>[IB]),_:1})]),_:1})]),_:1}))}},zB=v("p",null,"Pellentesque habitant morbi tristique senectus.",-1),FB=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,PB={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:FB},{description:i(()=>[n(" A segment may show its content is disabled ")]),example:i(()=>[t(u(N),{disabled:""},{default:i(()=>[zB]),_:1})]),_:1}))}},VB=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,MB={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:VB},{description:i(()=>[n(" A segment may show its content is being loaded ")]),example:i(()=>[t(u(N),{loading:""},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},HB=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),NB=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,OB={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:NB},{description:i(()=>[n(" A segment can have its colors inverted for contrast ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[HB]),_:1})]),_:1}))}},jB=v("p",null,"This segment is on top",-1),qB=v("p",null,"This segment is attached on both sides",-1),GB=v("p",null,"This segment is on bottom",-1),UB=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,YB={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Attached",code:UB},{description:i(()=>[n(" A segment can be attached to other content on a page ")]),example:i(()=>[t(u(N),{attached:"top"},{default:i(()=>[jB]),_:1}),t(u(N),{attached:""},{default:i(()=>[qB]),_:1}),t(u(N),{attached:"bottom"},{default:i(()=>[GB]),_:1})]),_:1}))}},JB=v("p",null,"Padded content.",-1),WB=v("p",null,"Padded content.",-1),KB=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,XB={__name:"PaddedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Padded",code:KB},{description:i(()=>[n(" A segment can increase its padding ")]),example:i(()=>[t(u(N),{padded:""},{default:i(()=>[JB]),_:1}),t(u(N),{padded:"very"},{default:i(()=>[WB]),_:1})]),_:1}))}},QB=v("p",null,"Fitted Segment",-1),ZB=v("p",null,"Horizontally fitted segment",-1),eT=v("p",null,"Vertically fitted segment",-1),tT=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,iT={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fitted",code:tT},{description:i(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:i(()=>[t(u(N),{fitted:""},{default:i(()=>[QB]),_:1}),t(u(N),{fitted:"horizontally"},{default:i(()=>[ZB]),_:1}),t(u(N),{fitted:"vertically"},{default:i(()=>[eT]),_:1})]),_:1}))}},aT=v("p",null,"Pellentesque habitant morbi",-1),lT=v("p",null,"Pellentesque habitant morbi",-1),nT=v("p",null,"Pellentesque habitant morbi",-1),oT=`<template>
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
</template>`,sT={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Compact",code:oT},{description:i(()=>[n(" A segment may take up only as much space as is necessary ")]),example:i(()=>[t(u(N),{compact:""},{default:i(()=>[aT]),_:1}),t(u(Ct),{compact:""},{default:i(()=>[t(u(N),null,{default:i(()=>[lT]),_:1}),t(u(N),null,{default:i(()=>[nT]),_:1})]),_:1})]),_:1}))}},rT=`<template>
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
</template>`,uT={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Colored",code:rT},{description:i(()=>[n(" A segment can be colored ")]),example:i(()=>[t(u(N),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(N),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(N),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(N),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(N),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(N),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(N),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(N),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(N),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(N),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(N),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(N),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(N),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},cT=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),dT=v("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),mT=v("p",null,"If you notice me you must be looking very hard.",-1),pT=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),fT=v("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),gT=v("p",null,"If you notice me you must be looking very hard.",-1),hT=v("p",null,"I'm here to tell you something, and you will probably read me first.",-1),_T=v("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),bT=v("p",null,"If you notice me you must be looking very hard.",-1),vT=`<template>
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
</template>`,ST={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Emphasis",code:vT},{description:i(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:i(()=>[t(u(N),null,{default:i(()=>[cT]),_:1}),t(u(N),{secondary:""},{default:i(()=>[dT]),_:1}),t(u(N),{tertiary:""},{default:i(()=>[mT]),_:1}),t(u(Ve)),t(u(N),{inverted:""},{default:i(()=>[pT]),_:1}),t(u(N),{secondary:"",inverted:""},{default:i(()=>[fT]),_:1}),t(u(N),{tertiary:"",inverted:""},{default:i(()=>[gT]),_:1}),t(u(Ve)),t(u(N),{inverted:"",color:"red"},{default:i(()=>[hT]),_:1}),t(u(N),{secondary:"",inverted:"",color:"red"},{default:i(()=>[_T]),_:1}),t(u(N),{tertiary:"",inverted:"",color:"red"},{default:i(()=>[bT]),_:1})]),_:1}))}},yT=`<template>
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
</template>`,wT={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Circular",code:yT},{description:i(()=>[n(" A segment can be circular ")]),example:i(()=>[t(u(N),{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(u(Ji),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(u(N),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(u(Ji),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},CT=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,AT={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Clearing",code:CT},{description:i(()=>[n(" A segment can clear floated content ")]),example:i(()=>[t(u(N),{clearing:""},{default:i(()=>[t(u(F),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},kT=v("p",null,"This segment will appear to the right",-1),xT=v("p",null,"This segment will appear to the left",-1),$T=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,BT={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Floated",code:$T},{description:i(()=>[n(" A segment can appear to the left or right of other content ")]),example:i(()=>[t(u(N),{floated:"right"},{default:i(()=>[kT]),_:1}),t(u(N),{floated:"left"},{default:i(()=>[xT]),_:1})]),_:1}))}},TT=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,DT={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Text Alignment",code:TT},{description:i(()=>[n(" A segment can have its text aligned to a side ")]),example:i(()=>[t(u(N),{textAlign:"right"},{default:i(()=>[n("Right")]),_:1}),t(u(N),{textAlign:"left"},{default:i(()=>[n("Left")]),_:1}),t(u(N),{textAlign:"center"},{default:i(()=>[n("Center")]),_:1})]),_:1}))}},LT=v("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),IT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,RT={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Basic",code:IT},{description:i(()=>[n(" A basic segment has no special formatting ")]),example:i(()=>[t(u(N),{basic:""},{default:i(()=>[LT]),_:1})]),_:1}))}},ET=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,zT={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Size",code:ET},{description:i(()=>[n(" A segment can vary in size ")]),example:i(()=>[t(u(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(N),null,{default:i(()=>[n("Default")]),_:1}),t(u(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},FT={__name:"Segment",setup(e){const a=[{id:"segment",label:"Segment",category:"Types",component:C$},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:k$},{id:"raised",label:"Raised",category:"Types",component:B$},{id:"stacked",label:"Stacked",category:"Types",component:I$},{id:"piled",label:"Piled",category:"Types",component:P$},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:O$},{id:"segments",label:"Segments",category:"Groups",component:Z$},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:cB},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:gB},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:_B},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:vB},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:AB},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:TB},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:EB},{id:"disabled",label:"Disabled",category:"States",component:PB},{id:"loading",label:"Loading",category:"States",component:MB},{id:"inverted",label:"Inverted",category:"Variations",component:OB},{id:"attached",label:"Attached",category:"Variations",component:YB},{id:"padded",label:"Padded",category:"Variations",component:XB},{id:"fitted",label:"Fitted",category:"Variations",component:iT},{id:"compact",label:"Compact",category:"Variations",component:sT},{id:"colored",label:"Colored",category:"Variations",component:uT},{id:"emphasis",label:"Emphasis",category:"Variations",component:ST},{id:"circular",label:"Circular",category:"Variations",component:wT},{id:"clearing",label:"Clearing",category:"Variations",component:AT},{id:"floated",label:"Floated",category:"Variations",component:BT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:DT},{id:"basic",label:"Basic",category:"Variations",component:RT},{id:"size",label:"Size",category:"Variations",component:zT}];return(l,o)=>(k(),B(ut,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":a}))}},PT=z({name:"StepDoc",components:{DocExample:Je},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),VT={class:"intro"},MT=v("p",null,"The steps take up the entire column width",-1),HT=v("p",null,"Main content",-1);function NT(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-step"),C=y("sui-step-group"),$=y("doc-example"),D=y("sui-step-title"),_=y("sui-step-description"),S=y("sui-step-content"),x=y("sui-grid-column"),T=y("sui-grid");return k(),_e("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",VT,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(p,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t($,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{link:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(T,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[MT]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[v("div",null,[t(C,{attached:"top"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:i(()=>[HT]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t($,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(S,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const OT=De(PT,[["render",NT]]),jT=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,qT={__name:"BreadcrumbDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Breadcrumb",code:jT},{description:i(()=>[n(" A standard breadcrumb ")]),example:i(()=>[t(u(ni),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},GT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,UT={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Divider",code:GT},{description:i(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},YT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,JT={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Section",code:YT},{description:i(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},WT=v("a",{href:"#"},"paper towels",-1),KT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,XT={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Link",code:KT},{description:i(()=>[n(" A section may be linkable or contain a link ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Search for: "),WT]),_:1})]),_:1})]),_:1}))}},QT=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,ZT={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Active",code:QT},{description:i(()=>[n(" A section can be active ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Products")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},e2=v("br",null,null,-1),t2=`<template>
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
</template>`,i2={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Inverted",code:t2},{description:i(()=>[n(" A breadcrumb can be inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(ni),{inverted:""},{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1}),e2,t(u(ni),{inverted:""},{default:i(()=>[t(u(it),null,{default:i(()=>[n("Home")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),null,{default:i(()=>[n("Registration")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},a2=`<template>
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
</template>`,l2={__name:"SizeDoc",setup(e){const a=["mini","tiny","small","large","big","huge","massive"];return(l,o)=>(k(),B(R,{label:"Size",code:a2},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[(k(),_e(Ae,null,Ze(a,r=>(k(),_e(Ae,{key:r},[t(u(ni),{size:r},{default:i(()=>[t(u(it),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Dt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(it),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(u(Ve),{hidden:""})],64))),64))]),_:1}))}},n2={__name:"Breadcrumb",setup(e){const a=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:qT},{id:"divider",label:"Divider",category:"Content",component:UT},{id:"section",label:"Section",category:"Content",component:JT},{id:"link",label:"Link",category:"Content",component:XT},{id:"active",label:"Active",category:"States",component:ZT},{id:"inverted",label:"Inverted",category:"Variations",component:i2},{id:"size",label:"Size",category:"Variations",component:l2}];return(l,o)=>(k(),B(ut,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":a}))}},o2=`<template>
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
</template>`,s2={__name:"FormDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Form",code:o2},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(lt),{label:"First Name",placeholder:"First Name"}),t(u(lt),{label:"Last Name",placeholder:"Last Name"}),t(u(lt),null,{default:i(()=>[t(u(cd),{label:"I agree to the Terms and Conditions"})]),_:1}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},r2=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,u2={__name:"FieldDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Field",code:r2},{description:i(()=>[n(" A field is a form element containing a label and an input ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(lt),{label:"User Input"})]),_:1})]),_:1}))}},c2=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,d2={__name:"FieldsDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Fields",code:c2},{description:i(()=>[n(" A set of fields can appear grouped together ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(Ss),null,{default:i(()=>[t(u(lt),{label:"First Name"}),t(u(lt),{label:"Middle Name"}),t(u(lt),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},m2=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,p2={__name:"TextAreaDoc",setup(e){return(a,l)=>(k(),B(R,{label:"TextArea",code:m2},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(xo),{label:"Text"}),t(u(xo),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},f2=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,g2={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Loading",code:f2},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(u(Nt),{loading:""},{default:i(()=>[t(u(lt),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},h2=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,_2={__name:"SuccessDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Success",code:h2},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(u(Nt),{success:""},{default:i(()=>[t(u(lt),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(Cn),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},b2=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,v2={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Error",code:b2},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(u(Nt),{error:""},{default:i(()=>[t(u(lt),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(Cn),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},S2=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,y2={__name:"WarningDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Warning",code:S2},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(u(Nt),{warning:""},{default:i(()=>[t(u(lt),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(Cn),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(u(F),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},w2=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,C2={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(R,{label:"Disabled",code:w2},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(Ss),null,{default:i(()=>[t(u(lt),{disabled:"",label:"First name",placeholder:"Read only"}),t(u(lt),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},A2={__name:"Form",setup(e){const a=[{id:"form",label:"Form",category:"Types",component:s2},{id:"field",label:"Field",category:"Content",component:u2},{id:"fields",label:"Fields",category:"Content",component:d2},{id:"textarea",label:"TextArea",category:"Content",component:p2},{id:"loading",label:"Loading",category:"Form States",component:g2},{id:"success",label:"Success",category:"Form States",component:_2},{id:"error",label:"Error",category:"Form States",component:v2},{id:"warning",label:"Warning",category:"Form States",component:y2},{id:"disabled",label:"Disabled",category:"Field States",component:C2}];return(l,o)=>(k(),B(ut,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":a}))}},k2=z({name:"DocPageHeader",props:{title:String,sub:String}}),x2={class:"intro",style:{padding:"2rem"}};function $2(e,a,l,o,r,d){const p=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),m=y("sui-menu"),h=y("sui-container"),w=y("sui-segment");return k(),B(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[v("div",x2,[t(f,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(p,null,{default:i(()=>[n(Te(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(m,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const et=De(k2,[["render",$2]]),de="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",Yr="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",B2=z({name:"GridDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),T2=v("br",null,null,-1);function D2(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-grid-column"),g=y("sui-grid"),m=y("doc-example"),h=y("sui-grid-row"),w=y("sui-segment"),b=y("sui-divider"),C=y("sui-menu-item"),$=y("sui-menu"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(m,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.numbers,_=>(k(),B(c,{key:_},{default:i(()=>[t(s,{src:de})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(m,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(s,{src:Yr})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(s,{src:Yr})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(m,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(m,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{floated:"left",width:5},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{floated:"right",width:5},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:4},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:9},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,{width:8},{default:i(()=>[t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1}),t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[v("div",null,[t(b),t(g,{padded:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(m,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(C,null,{default:i(()=>[n("Poodle")]),_:1}),t(C,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de}),T2,t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(m,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,{only:"computer"},{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,{only:"mobile"},{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(m,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const L2=De(B2,[["render",D2]]),I2="/vue-fomantic-ui/images/logo.png",R2=z({name:"MenuDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),E2=v("p",null,"Check out our new promotions",-1),z2=v("p",null,"Check out our collection of coupons",-1),F2=v("p",null,"Visit our rebate forum for information on claiming rebates",-1),P2=v("img",{src:I2},null,-1);function V2(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-menu-item"),c=y("sui-menu"),g=y("doc-example"),m=y("sui-input"),h=y("sui-menu-menu"),w=y("sui-label"),b=y("sui-button"),C=y("sui-dropdown-item"),$=y("sui-dropdown-menu"),D=y("sui-dropdown"),_=y("sui-icon"),S=y("sui-segment"),x=y("sui-container");return k(),_e("div",null,[t(p,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Editorials")]),_:1}),t(s,null,{default:i(()=>[n("Reviews")]),_:1}),t(s,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(c,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(s,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(s,null,{default:i(()=>[n("Most Comments")]),_:1}),t(s,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(w,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Spam "),t(w,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Updates "),t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(c,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(s,null,{default:i(()=>[n("10")]),_:1}),t(s,null,{default:i(()=>[n("11")]),_:1}),t(s,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(s,null,{default:i(()=>[n("About us")]),_:1}),t(s,null,{default:i(()=>[n("Jobs")]),_:1}),t(s,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),E2]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),z2]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),F2]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(m,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(D,{item:"",text:"Categories"},{default:i(()=>[t($,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Browse")]),_:1}),t(s,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[n("Sign up")]),_:1}),t(s,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(m,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Search")]),_:1}),t(s,null,{default:i(()=>[n("Add")]),_:1}),t(s,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"grid layout"}),n(" Browse ")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(D,{item:"",text:"More"},{default:i(()=>[t($,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[n("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(c,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[P2]),_:1}),t(s,null,{default:i(()=>[n("Features")]),_:1}),t(s,null,{default:i(()=>[n("Testimonials")]),_:1}),t(s,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(c,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Run")]),_:1}),t(s,null,{default:i(()=>[n("Walk")]),_:1}),t(s,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(c,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[n("Buy")]),_:1}),t(s,null,{default:i(()=>[n("Sell")]),_:1}),t(s,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[v("div",null,[t(c,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(s,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(S,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(c,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(D,{item:"",text:"Language"},{default:i(()=>[t($,null,{default:i(()=>[t(C,null,{default:i(()=>[n("English")]),_:1}),t(C,null,{default:i(()=>[n("Russian")]),_:1}),t(C,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(c,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[n("1")]),_:1}),t(s,null,{default:i(()=>[n("2")]),_:1}),t(s,null,{default:i(()=>[n("3")]),_:1}),t(s,null,{default:i(()=>[n("4")]),_:1}),t(s,null,{default:i(()=>[n("5")]),_:1}),t(s,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const M2=De(R2,[["render",V2]]),H2=z({name:"MessageDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),N2=v("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),O2=v("p",null,"Get the best news in your e-mail every day.",-1),j2=v("p",null,"You can't see me",-1),q2=v("p",null,"You can always see me",-1),G2=v("p",null,"Way to go!",-1),U2=v("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),Y2=v("a",{href:"#"},"Login here",-1),J2=v("p",null,[n("Go to your "),v("b",null,"special offers"),n(" page to see now.")],-1),W2=v("p",null,"That offer has expired",-1);function K2(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-message-header"),c=y("sui-message"),g=y("doc-example"),m=y("sui-message-item"),h=y("sui-message-list"),w=y("sui-icon"),b=y("sui-message-content"),C=y("sui-form-field"),$=y("sui-form-group"),D=y("sui-button"),_=y("sui-form"),S=y("sui-container");return k(),_e("div",null,[t(p,{title:"Message",sub:"A message displays information that explains nearby content"}),t(S,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Changes in Service")]),_:1}),N2]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(m,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(w,{name:"inbox"}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),O2]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(c,{hidden:""},{default:i(()=>[j2]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(c,{visible:""},{default:i(()=>[q2]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(c,{floating:""},{default:i(()=>[G2]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[U2]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[v("div",null,[t(c,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t($,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(D,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(c,{attached:"bottom",warning:""},{default:i(()=>[t(w,{name:"help"}),n(" Already signed up? "),Y2,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(c,{warning:""},{default:i(()=>[t(w,{name:"close"}),t(s,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(c,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(c,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),J2]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(c,{negative:""},{default:i(()=>[t(w,{name:"close"}),t(s,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),W2]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[v("div",null,[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[v("div",null,[t(c,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(c,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(c,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const X2=De(H2,[["render",K2]]),Q2=z({name:"TableDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),Z2=v("a",{href:"#"},"Edit",-1),eD=v("a",{href:"#"},"Edit",-1),tD=v("a",{href:"#"},"Edit",-1),iD=v("br",null,null,-1),aD=v("br",null,null,-1),lD=v("br",null,null,-1),nD=v("br",null,null,-1),oD=v("br",null,null,-1),sD=v("br",null,null,-1),rD=v("br",null,null,-1);function uD(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-table-header-cell"),c=y("sui-table-row"),g=y("sui-table-header"),m=y("sui-table-cell"),h=y("sui-table-body"),w=y("sui-table"),b=y("doc-example"),C=y("sui-icon"),$=y("sui-table-footer"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("James")]),_:1}),t(m,null,{default:i(()=>[n("24")]),_:1}),t(m,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("26")]),_:1}),t(m,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Elyse")]),_:1}),t(m,null,{default:i(()=>[n("24")]),_:1}),t(m,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(w,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[n("Arguments")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("reset rating")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1}),t(m,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("set rating")]),_:1}),t(m,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(m,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(w,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Ruby")]),_:1}),t(s,null,{default:i(()=>[n("Javascript")]),_:1}),t(s,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(m,null,{default:i(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(c,null,{default:i(()=>[t(m,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(m,null,{default:i(()=>[n("Project 1")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Project 2")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(m),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m)]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Project 3")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(m),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(b,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{positive:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"checkmark"}),n(" Approved ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{positive:""},{default:i(()=>[t(C,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(c,{negative:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{error:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{error:""},{default:i(()=>[t(C,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"attention"}),n(" Requires Action ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{warning:""},{default:i(()=>[t(C,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{active:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Selected")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[t(m,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Selected")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{color:"blue"},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(m,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Unknown")]),_:1}),t(m,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(w,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Registration Date")]),_:1}),t(s,null,{default:i(()=>[n("E-mail address")]),_:1}),t(s,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John Lilki")]),_:1}),t(m,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(w,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(w,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(w,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[Z2]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(m,null,{default:i(()=>[n("Jimmy")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{selectable:""},{default:i(()=>[eD]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(m,{selectable:""},{default:i(()=>[tD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{verticalAlign:"top"},{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),iD,n(" 1"),aD,n(" 2"),lD]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n(" Notes "),nD,n(" 1"),oD,n(" 2"),sD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Date Joined")]),_:1}),t(s,null,{default:i(()=>[n("E-mail")]),_:1}),t(s,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John Lilki")]),_:1}),t(m,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(m,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(m,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(m,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(m,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(m,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("3 People")]),_:1}),t(m,null,{default:i(()=>[n("2 Approved")]),_:1}),t(m)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[v("div",null,[t(w,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),rD,t(w,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(w,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("27")]),_:1}),t(m,null,{default:i(()=>[n("Male")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("32")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("22")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(m,null,{default:i(()=>[n("Initial commit")]),_:1}),t(m,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(w,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("27")]),_:1}),t(m,null,{default:i(()=>[n("Male")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("32")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("22")]),_:1}),t(m,null,{default:i(()=>[n("Other")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(w,null,{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[n("Name")]),_:1}),t(s,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(w,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Apples")]),_:1}),t(m,null,{default:i(()=>[n("200")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Orange")]),_:1}),t(m,null,{default:i(()=>[n("310")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Apples")]),_:1}),t(m,null,{default:i(()=>[n("200")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Orange")]),_:1}),t(m,null,{default:i(()=>[n("310")]),_:1}),t(m,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[v("div",null,[t(w,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[v("div",null,[t(w,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("John")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jamie")]),_:1}),t(m,null,{default:i(()=>[n("Approved")]),_:1}),t(m,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Jill")]),_:1}),t(m,null,{default:i(()=>[n("Denied")]),_:1}),t(m,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const cD=De(Q2,[["render",uD]]),dD=z({name:"AdvertisementDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),mD=v("img",{src:de},null,-1),pD=v("br",null,null,-1);function fD(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-advertisement"),c=y("doc-example"),g=y("sui-container");return k(),_e("div",null,[t(p,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Ad",description:"A standard ad",code:e.adCode},{default:i(()=>[t(s,{unit:"medium rectangle"},{default:i(()=>[mD]),_:1})]),_:1},8,["code"]),t(c,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:e.commonUnitsCode},{default:i(()=>[v("div",null,[t(s,{unit:"medium rectangle",test:"Medium Rectangle"}),t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large rectangle",test:"Large Rectangle"}),t(s,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),t(c,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:e.mobileCode},{default:i(()=>[v("div",null,[t(s,{unit:"mobile banner",test:"Mobile Banner"}),t(s,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),t(c,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:e.rectangleCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),t(c,{title:"Button",description:"An ad can use button ad unit size",code:e.buttonCode},{default:i(()=>[v("div",null,[t(s,{unit:"button",test:"Button"}),t(s,{unit:"square button",test:"Square Button"}),t(s,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),t(c,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:e.skyscraperCode},{default:i(()=>[v("div",null,[t(s,{unit:"skyscraper",test:"Skyscraper"}),pD,t(s,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),t(c,{title:"Banner",description:"An ad can use banner ad unit size",code:e.bannerCode},{default:i(()=>[v("div",null,[t(s,{unit:"banner",test:"Banner"}),t(s,{unit:"vertical banner",test:"Vertical Banner"}),t(s,{unit:"top banner",test:"Top Banner"}),t(s,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),t(c,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:e.leaderboardCode},{default:i(()=>[v("div",null,[t(s,{unit:"leaderboard",test:"Leaderboard"}),t(s,{unit:"large leaderboard",test:"Large Leaderboard"}),t(s,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),t(c,{title:"Panorama",description:"An ad can use panorama ad unit size",code:e.panoramaCode},{default:i(()=>[t(s,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),t(c,{title:"Netboard",description:"An ad can use netboard ad unit size",code:e.netboardCode},{default:i(()=>[t(s,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Centered",description:"An advertisement can appear centered",code:e.centeredCode},{default:i(()=>[t(s,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),t(c,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:e.testCode},{default:i(()=>[t(s,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const gD=De(dD,[["render",fD]]),Jr="/vue-fomantic-ui/images/avatar/large/kristy.png",hD="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Kn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Xn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Qn="/vue-fomantic-ui/images/avatar/large/elyse.png",_D="/vue-fomantic-ui/images/avatar/large/matthew.png",bD="/vue-fomantic-ui/images/avatar/large/molly.png",Il="/vue-fomantic-ui/images/wireframe/white-image.png",Wr="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Kr="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Xr="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Qr="/vue-fomantic-ui/images/avatar/large/steve.jpg",vD=z({name:"CardDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),SD=v("span",{class:"date"},"Joined in 2013",-1),yD=v("a",null,"Elliot Fu",-1),wD=v("a",null,"Jenny Hess",-1),CD=v("a",null,"Stevie Feliciano",-1),AD=v("a",null,"Administrator",-1),kD=v("a",null,"Helen Troy",-1),xD=v("span",{class:"date"},"Joined in 2013",-1),$D=v("span",null,"2 days ago",-1),BD=v("a",null,"Animals",-1),TD=v("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),DD=v("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),LD=v("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),ID=v("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),RD=v("span",{class:"category"},"Animals",-1),ED=v("span",{class:"category"},"Animals",-1),zD=v("div",{class:"right floated author"},[v("img",{class:"ui avatar image",src:kn}),n(" Matt ")],-1),FD=v("span",{class:"category"},"Animals",-1),PD=v("div",{class:"right floated author"},[v("img",{class:"ui avatar image",src:kn}),n(" Matt ")],-1),VD=v("p",null,"Jenny is a student studying Media Management at the New School",-1),MD=v("div",{class:"center aligned author"},[v("img",{class:"ui avatar image",src:An}),n(" Jenny ")],-1),HD=v("a",null,"Friends",-1),ND=v("span",{class:"right floated"}," Joined in 2013 ",-1),OD=v("a",null,[v("i",{class:"user icon"}),n(" 75 Friends ")],-1),jD=v("a",null,"Coworker",-1),qD=v("span",{class:"right floated"}," Joined in 2011 ",-1),GD=v("a",null,[v("i",{class:"user icon"}),n(" 35 Friends ")],-1),UD=v("a",null,"Coworker",-1),YD=v("span",{class:"right floated"}," Joined in 2014 ",-1),JD=v("a",null,[v("i",{class:"user icon"}),n(" 151 Friends ")],-1);function WD(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-card-header"),g=y("sui-card-meta"),m=y("sui-card-description"),h=y("sui-card-content"),w=y("sui-icon"),b=y("sui-card"),C=y("doc-example"),$=y("sui-button"),D=y("sui-button-group"),_=y("sui-card-group"),S=y("sui-feed-summary"),x=y("sui-feed-content"),T=y("sui-feed-event"),I=y("sui-feed"),V=y("sui-grid-column"),M=y("sui-grid"),P=y("sui-segment"),q=y("sui-container");return k(),_e("div",null,[t(p,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(q,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Jr,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[SD]),_:1}),t(m,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[v("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:oi,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(m,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:An,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("New Member")]),_:1}),t(m,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(I,{size:"small"},{default:i(()=>[t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[yD,n(" added "),wD,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[CD,n(" was added as an "),AD]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[kD,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t($,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Jr,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[xD]),_:1}),t(m,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[v("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(m,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[$D,BD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(m,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(m,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[TD,DD]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[LD,ID]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(w,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(M,{columns:3},{default:i(()=>[t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:hD}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:Kn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:Xn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(b,{centered:""},{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(b,{horizontal:""},{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[RD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(b,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[ED]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[zD]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(b,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[FD]),_:1}),t(m,null,{default:i(()=>[t(s,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[PD]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(m,{textAlign:"center"},{default:i(()=>[VD]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[MD]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(P,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:_D}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[HD]),_:1}),t(m,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[ND,OD]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:bD}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Molly")]),_:1}),t(g,null,{default:i(()=>[jD]),_:1}),t(m,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[qD,GD]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1}),t(g,null,{default:i(()=>[UD]),_:1}),t(m,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[YD,JD]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"red",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Xn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Kn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Wr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Kr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Xr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Qr})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Xn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Kn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Wr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Kr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Xr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Qr})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const KD=De(vD,[["render",WD]]),XD=z({name:"CommentDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),QD=v("span",null,"Today at 5:42PM",-1),ZD=v("a",null,"Reply",-1),eL=v("span",null,"Yesterday at 12:30AM",-1),tL=v("a",null,"Reply",-1),iL={class:"comments"},aL=v("span",null,"Just now",-1),lL=v("a",null,"Reply",-1),nL=v("span",null,"5 days ago",-1),oL=v("a",null,"Reply",-1),sL=v("div",{class:"date"},"2 days ago",-1),rL=v("div",{class:"rating"},[v("i",{class:"star icon"}),n(" 5 Faves ")],-1),uL=v("a",null,"Reply",-1),cL=v("a",null,"Save",-1),dL=v("a",null,"Hide",-1),mL=v("a",null,[v("i",{class:"expand icon"}),n(" Full-screen ")],-1),pL=v("a",null,"Reply",-1),fL=v("a",null,"Reply",-1),gL=v("a",null,"Replay",-1),hL=v("span",null,"Today at 5:42PM",-1),_L=v("a",{href:"#"},"Replay",-1),bL=v("span",null,"Yesterday at 12:30AM",-1),vL=v("a",{href:"#"},"Replay",-1),SL=v("span",null,"Just now",-1),yL=v("a",{href:"#"},"Replay",-1),wL=v("span",null,"5 days ago",-1),CL=v("a",{href:"#"},"Replay",-1),AL=v("span",null,"Today at 5:42PM",-1),kL=v("a",{href:"#"},"Replay",-1),xL=v("span",null,"Yesterday at 12:30AM",-1),$L=v("a",{href:"#"},"Replay",-1),BL=v("span",null,"Just now",-1),TL=v("a",{href:"#"},"Replay",-1),DL=v("span",null,"5 days ago",-1),LL=v("a",{href:"#"},"Replay",-1),IL=v("span",null,"Today at 5:42PM",-1),RL=v("a",{href:"#"},"Replay",-1),EL=v("span",null,"Yesterday at 12:30AM",-1),zL=v("a",{href:"#"},"Replay",-1),FL=v("span",null,"Just now",-1),PL=v("a",{href:"#"},"Replay",-1),VL=v("span",null,"5 days ago",-1),ML=v("a",{href:"#"},"Replay",-1),HL=v("span",null,"Today at 5:42PM",-1),NL=v("a",{href:"#"},"Replay",-1),OL=v("span",null,"Yesterday at 12:30AM",-1),jL=v("a",{href:"#"},"Replay",-1),qL=v("span",null,"Just now",-1),GL=v("a",{href:"#"},"Replay",-1),UL=v("span",null,"5 days ago",-1),YL=v("a",{href:"#"},"Replay",-1);function JL(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-comment-avatar"),c=y("sui-comment-author"),g=y("sui-comment-metadata"),m=y("sui-comment-text"),h=y("sui-comment-actions"),w=y("sui-comment-content"),b=y("sui-comment"),C=y("sui-comment-group"),$=y("doc-example"),D=y("sui-form-textarea"),_=y("sui-icon"),S=y("sui-button"),x=y("sui-form"),T=y("sui-segment"),I=y("sui-container");return k(),_e("div",null,[t(p,{title:"Comment",sub:"A comment displays user feedback to site content"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Comments",description:"A basic list of comments",code:e.commentsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[QD]),_:1}),t(m,null,{default:i(()=>[n("How artistic!")]),_:1}),t(h,null,{default:i(()=>[ZD]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[eL]),_:1}),t(m,null,{default:i(()=>[n("This has been very useful for my research. Thanks as well!")]),_:1}),t(h,null,{default:i(()=>[tL]),_:1})]),_:1}),v("div",iL,[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[aL]),_:1}),t(m,null,{default:i(()=>[n("Elliot you are always so right :)")]),_:1}),t(h,null,{default:i(()=>[lL]),_:1})]),_:1})]),_:1})])]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[nL]),_:1}),t(m,null,{default:i(()=>[n("Dude, this is awesome. Thanks so much")]),_:1}),t(h,null,{default:i(()=>[oL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"avatar",description:"A comment can contain an image or avatar",code:e.avatarCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/stevie.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(g,null,{default:i(()=>[sL,rL]),_:1}),t(m,null,{default:i(()=>[n(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:e.actionsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Tom Lukic")]),_:1}),t(m,null,{default:i(()=>[n(" This will be great for business reports. I will definitely download this. ")]),_:1}),t(h,null,{default:i(()=>[uL,cL,dL,mL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:e.replyFormCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/steve.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Steve Jobs")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[n("Revolutionary!")]),_:1}),t(h,null,{default:i(()=>[pL]),_:1}),t(x,{reply:""},{default:i(()=>[t(D),t(S,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[t(_,{name:"edit"}),n(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:e.collapsedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/christian.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Christian Rocha")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(m,null,{default:i(()=>[n(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),t(h,null,{default:i(()=>[fL]),_:1})]),_:1}),t(C,{collapsed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("1 days ago")]),_:1}),t(m,null,{default:i(()=>[n("No, it wont")]),_:1}),t(h,null,{default:i(()=>[gL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:e.threadedCode},{default:i(()=>[t(C,{threaded:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[hL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[_L]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[bL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[vL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[SL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[yL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[wL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[CL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:e.minimalCode},{default:i(()=>[t(C,{minimal:""},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[AL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[kL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[xL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[$L]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[BL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[TL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[DL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[LL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Comments can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"small"},{default:i(()=>[t(f,{as:"h3",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[IL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[RL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[EL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[zL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[FL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[PL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[VL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[ML]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"Comments's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(f,{as:"h3",inverted:"",dividing:""},{default:i(()=>[n("Comments")]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/matt.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Matt")]),_:1}),t(g,null,{default:i(()=>[HL]),_:1}),t(m,null,{default:i(()=>[n(" How artistic! ")]),_:1}),t(h,null,{default:i(()=>[NL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/elliot.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[OL]),_:1}),t(m,null,{default:i(()=>[n(" This has been very useful for my research. Thanks as well! ")]),_:1}),t(h,null,{default:i(()=>[jL]),_:1})]),_:1}),t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/jenny.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[qL]),_:1}),t(m,null,{default:i(()=>[n(" Elliot you are always so right :) ")]),_:1}),t(h,null,{default:i(()=>[GL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:"/images/avatar/small/joe.jpg"}),t(w,null,{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Joe Henderson")]),_:1}),t(g,null,{default:i(()=>[UL]),_:1}),t(m,null,{default:i(()=>[n(" Dude, this is awesome. Thanks so much ")]),_:1}),t(h,null,{default:i(()=>[YL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const WL=De(XD,[["render",JL]]),KL=z({name:"FeedDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),XL=v("img",{src:oi},null,-1),QL=v("img",{src:oi},null,-1),ZL=v("a",null,"Coworkers",-1),eI=v("img",{src:An},null,-1),tI=v("a",null,"Jenny Hess",-1),iI=v("a",null,"coworker",-1),aI=v("img",{src:ja},null,-1),lI=v("a",null,"Helen Troy",-1),nI=v("a",null,[v("img",{src:de})],-1),oI=v("a",null,[v("img",{src:de})],-1),sI=v("a",null,"Elliot Fu",-1),rI=v("a",null,"Jenny Hess",-1),uI=v("a",null,"Stevie Feliciano",-1),cI=v("a",null,"Elliot Fu",-1),dI=v("a",null,"Helen Troy",-1),mI=v("a",null,"Christian Rocha",-1),pI=v("img",{src:oi},null,-1),fI=v("div",{class:"date"},"Just now",-1),gI=v("a",{class:"user"},"Elliot Fu",-1);function hI(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-feed-label"),c=y("sui-feed-user"),g=y("sui-feed-date"),m=y("sui-feed-summary"),h=y("sui-icon"),w=y("sui-feed-like"),b=y("sui-feed-meta"),C=y("sui-feed-content"),$=y("sui-feed-event"),D=y("sui-feed"),_=y("doc-example"),S=y("sui-feed-extra"),x=y("sui-segment"),T=y("sui-container");return k(),_e("div",null,[t(p,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[XL]),_:1}),t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[QL]),_:1}),t(C,null,{default:i(()=>[n(" You added Elliot Fu to the group "),ZL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[eI]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[n(" You added "),tI,n(" to your "),iI,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[aI]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(m,null,{default:i(()=>[lI,n(" added 2 photos ")]),_:1}),t(S,{images:""},{default:i(()=>[nI,oI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[sI,n(" added "),rI,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[uI,n(" added "),cI,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(m,null,{default:i(()=>[dI,n(" added "),mI,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(D,{inverted:""},{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[pI]),_:1}),t(C,null,{default:i(()=>[fI,t(m,null,{default:i(()=>[gI,n(" posted on his page ")]),_:1}),t(S,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _I=De(KL,[["render",hI]]),bI=z({name:"ItemDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),vI=v("img",{src:de},null,-1),SI=v("span",null,"Description",-1),yI=v("img",{src:nt},null,-1),wI=v("img",{src:de},null,-1),CI=v("span",null,"Description",-1),AI=v("img",{src:nt},null,-1),kI=v("img",{src:de},null,-1),xI=v("img",{src:de},null,-1),$I=v("img",{src:de},null,-1),BI=v("img",{src:de},null,-1),TI=v("img",{src:de},null,-1),DI=v("img",{src:de},null,-1),LI=v("img",{src:de},null,-1),II=v("span",{class:"price"},"$1200",-1),RI=v("span",{class:"stay"},"1 Month",-1),EI=v("img",{src:nt},null,-1),zI=v("span",{class:"price"},"$1000",-1),FI=v("span",{class:"stay"},"2 Weeks",-1),PI=v("img",{src:nt},null,-1),VI=v("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),MI=v("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),HI=v("img",{src:nt},null,-1),NI=v("img",{src:de},null,-1),OI=v("span",{class:"cinema"},"Union Square 14",-1),jI=v("img",{src:nt},null,-1),qI=v("img",{src:de},null,-1),GI=v("span",{class:"cinema"},"IFC Cinema",-1),UI=v("img",{src:nt},null,-1),YI=v("img",{src:de},null,-1),JI=v("span",{class:"cinema"},"IFC",-1),WI=v("img",{src:nt},null,-1),KI=v("img",{src:nt},null,-1),XI=v("img",{src:nt},null,-1),QI=v("img",{src:nt},null,-1),ZI=v("span",{class:"price"},"$1200",-1),eR=v("span",{class:"stay"},"1 Month",-1),tR=v("img",{src:nt},null,-1),iR=v("span",{class:"price"},"$1000",-1),aR=v("span",{class:"stay"},"2 Weeks",-1),lR=v("img",{src:nt},null,-1);function nR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-item-image"),c=y("sui-item-header"),g=y("sui-item-meta"),m=y("sui-item-description"),h=y("sui-item-extra"),w=y("sui-item-content"),b=y("sui-item"),C=y("sui-item-group"),$=y("doc-example"),D=y("sui-image"),_=y("sui-icon"),S=y("sui-label"),x=y("sui-button"),T=y("sui-segment"),I=y("sui-container");return k(),_e("div",null,[t(p,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(I,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[vI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[SI]),_:1}),t(m,null,{default:i(()=>[yI]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[wI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[CI]),_:1}),t(m,null,{default:i(()=>[AI]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[kI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[xI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[$I]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[BI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[TI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[DI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[LI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[II,RI]),_:1}),t(m,null,{default:i(()=>[EI]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[zI,FI]),_:1}),t(m,null,{default:i(()=>[PI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[VI,MI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(m,null,{default:i(()=>[HI]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[NI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[OI]),_:1}),t(m,null,{default:i(()=>[jI]),_:1}),t(h,null,{default:i(()=>[t(S,null,{default:i(()=>[n("IMAX")]),_:1}),t(S,null,{default:i(()=>[t(_,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[qI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[GI]),_:1}),t(m,null,{default:i(()=>[UI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(S,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[YI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[JI]),_:1}),t(m,null,{default:i(()=>[WI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"bottom"},{default:i(()=>[t(c,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content A")]),_:1}),t(m,null,{default:i(()=>[KI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content B")]),_:1}),t(m,null,{default:i(()=>[XI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content C")]),_:1}),t(m,null,{default:i(()=>[QI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[ZI,eR]),_:1}),t(m,null,{default:i(()=>[tR]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[iR,aR]),_:1}),t(m,null,{default:i(()=>[lR]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const oR=De(bI,[["render",nR]]),sR=z({name:"StatisticDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),rR=v("br",null,null,-1),uR=v("br",null,null,-1),cR=v("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),dR=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),mR=v("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),pR=v("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function fR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-statistic"),c=y("doc-example"),g=y("sui-statistic-group"),m=y("sui-statistic-value"),h=y("sui-statistic-label"),w=y("sui-icon"),b=y("sui-image"),C=y("sui-segment"),$=y("sui-container");return k(),_e("div",null,[t(p,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(c,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(c,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[n(" Three"),rR,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(w,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:zo}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(c,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(g,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(g,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(m,{text:""},{default:i(()=>[n(" Three"),uR,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(w,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(m,null,{default:i(()=>[t(b,{circular:"",inline:"",src:zo}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),cR,dR,t(s,{floated:"left",value:"2,204",label:"Views"}),mR,pR]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const gR=De(sR,[["render",fR]]),hR=z({name:"AccordionDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),_R=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),bR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),vR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),SR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),yR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),wR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),CR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),AR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),kR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),xR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),$R=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),BR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),TR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),DR=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),LR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),IR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),RR=v("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),ER=v("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),zR=v("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),FR=v("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function PR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-accordion-tab"),c=y("sui-accordion"),g=y("doc-example"),m=y("sui-segment"),h=y("sui-container");return k(),_e("div",null,[t(p,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[_R]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[bR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[vR,SR]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(c,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[yR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[wR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[CR,AR]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[kR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[xR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[$R,BR]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(m,{inverted:""},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[TR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[DR]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[LR,IR]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(c,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[RR]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[ER]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[zR,FR]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const VR=De(hR,[["render",PR]]),MR=z({name:"CalendarDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function HR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-calendar"),c=y("doc-example"),g=y("sui-container");return k(),_e("div",null,[t(p,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=m=>e.calendar1=m),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const NR=De(MR,[["render",HR]]),OR=z({name:"PropertyListTable",props:{properties:Array}});function jR(e,a,l,o,r,d){const p=y("sui-table-header-cell"),f=y("sui-table-row"),s=y("sui-table-header"),c=y("sui-table-cell"),g=y("sui-table-body"),m=y("sui-table");return k(),B(m,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.properties,h=>(k(),B(f,{key:h.name},{default:i(()=>[t(c,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.type),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.default),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const xn=De(OR,[["render",jR]]),qR=z({name:"CheckboxDoc",components:{DocPageHeader:et,DocExample:Je,PropertyListTable:xn},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=G(!1),d='<sui-checkbox toggle v-model="toggle" />',p=G(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:o,toggle:r,toggleCode:d,slider:p,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),GR={class:"ui form"},UR={class:"grouped fields"},YR={class:"field"},JR={class:"field"},WR={class:"field"};function KR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-checkbox"),c=y("doc-example"),g=y("property-list-table"),m=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[v("div",GR,[v("div",UR,[v("div",YR,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),v("div",JR,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),v("div",WR,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),n(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(c,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const XR=De(qR,[["render",KR]]),QR=z({name:"DimmerDoc",components:{DocPageHeader:et,DocExample:Je},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function ZR(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-image-group"),g=y("sui-dimmer"),m=y("sui-dimmer-dimmable"),h=y("doc-example"),w=y("sui-icon"),b=y("sui-button"),C=y("sui-header-subheader"),$=y("sui-container");return k(),_e("div",null,[t(p,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(s,{src:de}),t(s,{src:de}),t(s,{src:de})]),_:1}),t(s,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(m,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(s,{src:de}),t(s,{src:de}),t(s,{src:de})]),_:1}),t(s,{size:"medium",src:ei}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[v("div",null,[t(b,{labeled:"",icon:"",onClick:a[0]||(a[0]=D=>e.active=!0)},{default:i(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=D=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(C,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const eE=De(QR,[["render",ZR]]),tE=z({name:"DropdownDoc",components:{DocPageHeader:et,DocExample:Je},setup(){const e=`<sui-dropdown text="File">
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
</sui-button-group>`}}});function iE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-dropdown-item"),c=y("sui-divider"),g=y("sui-dropdown-menu"),m=y("sui-dropdown"),h=y("doc-example"),w=y("sui-button"),b=y("sui-button-group"),C=y("sui-container");return k(),_e("div",null,[t(p,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(m,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(c),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(m,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=$=>e.selected1=$),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(m,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=$=>e.selected2=$),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(m,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=$=>e.selected3=$),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=$=>e.selected4=$),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(m,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=$=>e.selected5=$),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(m,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=$=>e.selected6=$),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(m,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=$=>e.selected7=$),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[v("span",null,[n(" Show me posts by "),t(m,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=$=>e.selected8=$),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(m,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(b,{color:"teal"},{default:i(()=>[t(w,null,{default:i(()=>[n("Save")]),_:1}),t(m,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const aE=De(tE,[["render",iE]]),lE=z({name:"EmbedDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function nE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-embed"),c=y("doc-example"),g=y("sui-container");return k(),_e("div",null,[t(p,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const oE=De(lE,[["render",nE]]),sE=v("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),rE=v("p",null,"Is it okay to use this photo?",-1),uE=`<template>
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
<\/script>`,cE={__name:"ModalDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(R,{label:"Modal",code:uE},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(u(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(u(ws),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(u(ks),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(u(As),{image:""},{default:i(()=>[t(u(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(u(Cd),null,{default:i(()=>[t(u(fe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),sE,rE]),_:1})]),_:1}),t(u(Cs),null,{default:i(()=>[t(u(F),{positive:"",onClick:o[1]||(o[1]=r=>a.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},dE=v("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),mE=`<template>
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
<\/script>`,pE={__name:"BasicDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(R,{label:"Basic",code:mE},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(u(F),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(u(ws),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(u(ks),{icon:""},{default:i(()=>[t(u(K),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(u(As),null,{default:i(()=>[dE]),_:1}),t(u(Cs),null,{default:i(()=>[t(u(F),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=r=>a.value=!1)}),t(u(F),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},fE={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:cE},{id:"basic",label:"Basic",category:"Types",component:pE}];return(l,o)=>(k(),B(ut,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},gE="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",hE=z({name:"PopupDoc",components:{DocPageHeader:et,DocExample:Je},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,V=G(null),M=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),W=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:o,titledTrigger3:r,titledCode:d,triggerTriger:p,triggerCode:f,basicTrigger:s,basicCode:c,wideTrigger1:g,wideTrigger2:m,wideTrigger3:h,wideCode:w,positionTrigger1:b,positionTrigger2:C,positionTrigger3:$,positionTrigger4:D,positionTrigger5:_,positionTrigger6:S,positionTrigger7:x,positionTrigger8:T,positionCode:I,flowingTrigger:V,flowingCode:M,sizeTrigger1:P,sizeTrigger2:q,sizeTrigger3:Q,sizeTrigger4:Y,sizeTrigger5:ge,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:W,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),_E=v("p",null,[v("b",null,"2"),n(" projects, $10 a month ")],-1),bE=v("p",null,[v("b",null,"5"),n(" projects, $20 a month ")],-1),vE=v("p",null,[v("b",null,"8"),n(" projects, $25 a month ")],-1);function SE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),c=y("sui-button"),g=y("sui-popup"),m=y("doc-example"),h=y("sui-image"),w=y("sui-card-header"),b=y("sui-card-description"),C=y("sui-card-content"),$=y("sui-card"),D=y("sui-rating"),_=y("sui-divider"),S=y("sui-grid-column"),x=y("sui-grid"),T=y("sui-container");return k(),_e("div",null,[t(p,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(m,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(c,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:oi,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Fo,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:kn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t($,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:gE}),t(C,null,{default:i(()=>[t(w,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(b,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(D,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(m,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(c,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(c,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(c,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(c,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(c,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(c,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(c,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(c,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(S,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),_E,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),bE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(S,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),vE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(m,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(c,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const yE=De(hE,[["render",SE]]),wE=z({name:"ProgressDoc",components:{DocPageHeader:et,DocExample:Je},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function CE(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-progress"),c=y("doc-example"),g=y("sui-segment"),m=y("sui-container");return k(),_e("div",null,[t(p,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(m,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(c,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(c,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(c,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(c,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(c,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(c,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(c,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(c,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(c,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(c,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),n(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(c,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const AE=De(wE,[["render",CE]]),kE=z({name:"RatingDoc",components:{DocPageHeader:et,DocExample:Je,PropertyListTable:xn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),xE=v("br",null,null,-1),$E=v("br",null,null,-1),BE=v("br",null,null,-1),TE=v("br",null,null,-1),DE=v("br",null,null,-1),LE=v("br",null,null,-1),IE=v("br",null,null,-1),RE=v("br",null,null,-1),EE=v("br",null,null,-1),zE=v("br",null,null,-1),FE=v("br",null,null,-1),PE=v("br",null,null,-1),VE=v("br",null,null,-1),ME=v("br",null,null,-1),HE=v("br",null,null,-1),NE=v("br",null,null,-1),OE=v("br",null,null,-1),jE=v("br",null,null,-1),qE=v("br",null,null,-1),GE=v("br",null,null,-1),UE=v("br",null,null,-1),YE=v("br",null,null,-1),JE=v("br",null,null,-1),WE=v("br",null,null,-1),KE=v("br",null,null,-1),XE=v("br",null,null,-1),QE=v("br",null,null,-1),ZE=v("br",null,null,-1),ez=v("br",null,null,-1),tz=v("br",null,null,-1),iz=v("br",null,null,-1),az=v("br",null,null,-1),lz=v("br",null,null,-1),nz=v("br",null,null,-1),oz=v("br",null,null,-1),sz=v("br",null,null,-1),rz=v("br",null,null,-1),uz=v("br",null,null,-1),cz=v("br",null,null,-1),dz=v("br",null,null,-1),mz=v("br",null,null,-1),pz=v("br",null,null,-1),fz=v("br",null,null,-1),gz=v("br",null,null,-1),hz=v("br",null,null,-1),_z=v("br",null,null,-1),bz=v("br",null,null,-1),vz=v("br",null,null,-1);function Sz(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-rating"),c=y("doc-example"),g=y("property-list-table"),m=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Rating",sub:"A rating indicates user interest in content"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(c,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),xE,$E,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),BE,TE,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),DE,LE,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),IE,RE,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),EE,zE,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),FE,PE,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(c,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),VE,ME,t(s,{defaultRating:2,maxRating:7,color:"orange"}),HE,NE,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),OE,jE,t(s,{defaultRating:4,maxRating:7,color:"olive"}),qE,GE,t(s,{defaultRating:5,maxRating:7,color:"green"}),UE,YE,t(s,{defaultRating:6,maxRating:7,color:"teal"}),JE,WE,t(s,{defaultRating:6,maxRating:7,color:"blue"}),KE,XE,t(s,{defaultRating:5,maxRating:7,color:"violet"}),QE,ZE,t(s,{defaultRating:4,maxRating:7,color:"purple"}),ez,tz,t(s,{defaultRating:3,maxRating:7,color:"pink"}),iz,az,t(s,{defaultRating:2,maxRating:7,color:"brown"}),lz,nz,t(s,{defaultRating:1,maxRating:7,color:"grey"}),oz,sz,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),rz,uz,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),cz,dz,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),mz,pz,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),fz,gz,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),hz,_z,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),bz,vz,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const yz=De(kE,[["render",Sz]]),wz=z({name:"SidebarDoc",components:{DocPageHeader:et,DocExample:Je,PropertyListTable:xn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),Cz={class:"pusher"};function Az(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),c=y("sui-button"),g=y("sui-grid-column"),m=y("sui-menu-item"),h=y("sui-sidebar"),w=y("sui-image"),b=y("sui-segment"),C=y("sui-grid"),$=y("doc-example"),D=y("property-list-table"),_=y("sui-table-header-cell"),S=y("sui-table-row"),x=y("sui-table-header"),T=y("sui-table-cell"),I=y("sui-table-body"),V=y("sui-table"),M=y("sui-container");return k(),_e("div",null,[t(p,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(M,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{onClick:a[0]||(a[0]=P=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(b,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=P=>e.visible1=P),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(m,null,{default:i(()=>[t(s,{name:"home"}),n(" Home ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"gamepad"}),n(" Games ")]),_:1}),t(m,null,{default:i(()=>[t(s,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),v("div",Cz,[t(b,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(w,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(D,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(V,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(S,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(I,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.events,P=>(k(),B(S,{key:P.name},{default:i(()=>[t(T,null,{default:i(()=>[n(Te(P.name),1)]),_:2},1024),t(T,null,{default:i(()=>[n(Te(P.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const kz=De(wz,[["render",Az]]),xz=z({name:"SliderDoc",components:{DocPageHeader:et,DocExample:Je},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',l=G(4),o='<sui-slider labeled v-model="slider2" />',r=G(6),d='<sui-slider labeled="ticked" v-model="slider3" />',p=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=G(40),c='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const m='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),w='<sui-slider disabled v-model="slider7" />',b=G(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,$=G(3),D='<sui-slider reversed v-model="slider9" />',_=G(18),S='<sui-slider vertical v-model="slider10" :max="20" />',x=G(5),T=G(5),I=G(5),V=G(5),M=G(5),P=G(5),q=G(5),Q=G(5),Y=G(5),ge=G(5),Be=G(5),U=G(5),W=G(5),me=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,Le=G(5),We=G(5),st=G(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:o,slider3:r,labeledTickedCode:d,slider4:p,customLabelsCode:f,slider5:s,stepCode:c,slider6:g,rangeCode:m,slider7:h,disabledCode:w,slider8:b,invertedCode:C,slider9:$,reversedCode:D,slider10:_,verticalCode:S,redSlider:x,orangeSlider:T,yellowSlider:I,oliveSlider:V,greenSlider:M,tealSlider:P,blueSlider:q,violetSlider:Q,purpleSlider:Y,pinkSlider:ge,brownSlider:Be,greySlider:U,blackSlider:W,coloredCode:me,invertedColoredCode:ae,smallSlider:Le,largeSlider:We,bigSlider:st,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function $z(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-slider"),c=y("doc-example"),g=y("sui-segment"),m=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),_e("div",null,[t(p,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),n(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(c,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(c,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),n(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(c,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),n(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(c,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.properties,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.type),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.default),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Bz=De(xz,[["render",$z]]),Tz=z({name:"TabDoc",components:{DocPageHeader:et,DocExample:Je,PropertyListTable:xn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function Dz(e,a,l,o,r,d){const p=y("doc-page-header"),f=y("sui-header"),s=y("sui-tab-panel"),c=y("sui-tab"),g=y("doc-example"),m=y("property-list-table"),h=y("sui-table-header-cell"),w=y("sui-table-row"),b=y("sui-table-header"),C=y("sui-table-cell"),$=y("sui-table-body"),D=y("sui-table"),_=y("sui-container");return k(),_e("div",null,[t(p,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(m,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(m,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(D,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[(k(!0),_e(Ae,null,Ze(e.events,S=>(k(),B(w,{key:S.name},{default:i(()=>[t(C,null,{default:i(()=>[n(Te(S.name),1)]),_:2},1024),t(C,null,{default:i(()=>[n(Te(S.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Lz=De(Tz,[["render",Dz]]),Iz=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,Rz={__name:"MinimalDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Minimal",code:Iz},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Ez=`<template>
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
<\/script>`,zz={__name:"TitledDoc",setup(e){const{toast:a}=ct(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Titled",code:Ez},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Fz=`<template>
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
<\/script>`,Pz={__name:"ProgressBarDoc",setup(e){const{toast:a}=ct(),l=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Progress Bar",code:Fz},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(d,{color:"red",onClick:r[0]||(r[0]=p=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Vz=`<template>
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
<\/script>`,Mz={__name:"ToastTypeDoc",setup(e){const{toast:a}=ct(),l=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Toast Type",code:Vz},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(d,{onClick:r[2]||(r[2]=p=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},Hz=`<template>
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
<\/script>`,Nz={__name:"PositionDoc",setup(e){const{toast:a}=ct(),l=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Position",code:Hz},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},Oz=v("br",null,null,-1),jz=`<template>
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
<\/script>`,qz={__name:"AttachedPosition",setup(e){const{toast:a}=ct(),l=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Attached Position",code:jz},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),Oz,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},Gz=`<template>
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
<\/script>`,Uz={__name:"DirectionDoc",setup(e){const{toast:a}=ct(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Direction",code:Gz},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Yz=`<template>
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
<\/script>`,Jz={__name:"CenterAligned",setup(e){const{toast:a}=ct(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Center Aligned",code:Yz},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Wz=`<template>
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
<\/script>`,Kz={__name:"DurationDoc",setup(e){const{toast:a}=ct(),l=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Duration",code:Wz},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=p=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(d,{onClick:r[1]||(r[1]=p=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},Xz=`<template>
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
<\/script>`,Qz={__name:"MessageStyleDoc",setup(e){const{toast:a}=ct(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Use Message Style",code:Xz},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Zz=`<template>
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
<\/script>`,eF={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ct(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const d=y("SuiButton");return k(),B(R,{label:"Increasing Progress Bar",code:Zz},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},tF=`<template>
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
<\/script>`,iF={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ct(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,p)=>{const f=y("SuiButton");return k(),B(R,{label:"Color Variants",code:tF},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},aF={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ct(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,p)=>{const f=y("SuiButton");return k(),B(R,{label:"Inverted Colors",code:d.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},lF=`<template>
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
<\/script>`,nF={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[X(K,{name:"check"}),"Yes"]),X(F,{color:"red",icon:!0},()=>[X(K,{name:"ban"})]),X(F,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>(k(),B(R,{label:"General",code:lF},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},oF=`<template>
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
<\/script>`,sF={__name:"ActionBasicDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(F,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>(k(),B(R,{label:"Basic",code:oF},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},rF=`<template>
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
<\/script>`,uF={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>(k(),B(R,{label:"Attached",code:rF},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},cF=`<template>
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
<\/script>`,dF={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>(k(),B(R,{label:"Vertical",code:cF},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},mF=v("br",null,null,-1),pF=`<template>
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
<\/script>`,fF={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(F,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(F,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>(k(),B(R,{label:"Vertical Attached",code:pF},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),mF,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(u(F),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},gF={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:Rz},{id:"titled",label:"Titled",category:"Types",component:zz},{id:"progress-bar",label:"Progress Bar",category:"Types",component:Pz},{id:"toast-type",label:"Toast Type",category:"Variations",component:Mz},{id:"position",label:"Position",category:"Variations",component:Nz},{id:"attached-position",label:"Attached Position",category:"Variations",component:qz},{id:"direction",label:"Direction",category:"Variations",component:Uz},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:Jz},{id:"duration",label:"Duration",category:"Variations",component:Kz},{id:"message-style",label:"Use Message Style",category:"Variations",component:Qz},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:eF},{id:"color-variants",label:"Color Variants",category:"Variations",component:iF},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:aF},{id:"general",label:"General",category:"Actions",component:nF},{id:"action-basic",label:"Basic",category:"Actions",component:sF},{id:"action-attached",label:"Attached",category:"Actions",component:uF},{id:"action-vertical",label:"Vertical",category:"Actions",component:dF},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:fF}];return(l,o)=>(k(),B(ut,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},hF=[{path:"/",component:Dh,children:[{path:"/",component:l_},{path:"elements/button",component:Iw},{path:"elements/container",component:qw},{path:"elements/divider",component:gC},{path:"elements/emoji",component:xC},{path:"elements/flag",component:LC},{path:"elements/header",component:uA},{path:"elements/icon",component:NA},{path:"elements/image",component:B0},{path:"elements/input",component:Z0},{path:"elements/label",component:rx},{path:"elements/list",component:Ex},{path:"elements/loader",component:a$},{path:"elements/rail",component:s$},{path:"elements/reveal",component:S$},{path:"elements/segment",component:FT},{path:"elements/step",component:OT},{path:"collections/breadcrumb",component:n2},{path:"collections/form",component:A2},{path:"collections/grid",component:L2},{path:"collections/menu",component:M2},{path:"collections/message",component:X2},{path:"collections/table",component:cD},{path:"views/advertisement",component:gD},{path:"views/card",component:KD},{path:"views/comment",component:WL},{path:"views/feed",component:_I},{path:"views/item",component:oR},{path:"views/statistic",component:gR},{path:"modules/accordion",component:VR},{path:"modules/calendar",component:NR},{path:"modules/checkbox",component:XR},{path:"modules/dimmer",component:eE},{path:"modules/dropdown",component:aE},{path:"modules/embed",component:oE},{path:"modules/modal",component:fE},{path:"modules/popup",component:yE},{path:"modules/progress",component:AE},{path:"modules/rating",component:yz},{path:"modules/sidebar",component:kz},{path:"modules/slider",component:Bz},{path:"modules/tab",component:Lz},{path:"modules/toast",component:gF}]}],_F=uh({history:Ag("/vue-fomantic-ui/"),routes:hF,scrollBehavior(e,a,l){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=o.variable[1].inside,p=0;p<r.length;p++)d[r[p]]=e.languages.bash[r[p]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Ls=jc(og);Ls.use(_F);Ls.use(sy);Ls.mount("#app");

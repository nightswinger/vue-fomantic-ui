(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function l(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(r){if(r.ep)return;r.ep=!0;const d=l(r);fetch(r.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zl(e,a){const l=new Set(e.split(","));return a?o=>l.has(o.toLowerCase()):o=>l.has(o)}const qe={},sa=[],yt=()=>{},Ud=()=>!1,cl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fo=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Vo=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},Yd=Object.prototype.hasOwnProperty,Pe=(e,a)=>Yd.call(e,a),he=Array.isArray,ra=e=>ka(e)==="[object Map]",Wi=e=>ka(e)==="[object Set]",Rs=e=>ka(e)==="[object Date]",Jd=e=>ka(e)==="[object RegExp]",Ce=e=>typeof e=="function",Xe=e=>typeof e=="string",Ci=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",Mo=e=>(Ge(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),tu=Object.prototype.toString,ka=e=>tu.call(e),Wd=e=>ka(e).slice(8,-1),iu=e=>ka(e)==="[object Object]",Ho=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ja=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),en=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},Kd=/-(\w)/g,vt=en(e=>e.replace(Kd,(a,l)=>l?l.toUpperCase():"")),Xd=/\B([A-Z])/g,Dt=en(e=>e.replace(Xd,"-$1").toLowerCase()),dl=en(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ga=en(e=>e?`on${dl(e)}`:""),jt=(e,a)=>!Object.is(e,a),ua=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Fl=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},Za=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Vl=e=>{const a=Xe(e)?Number(e):NaN;return isNaN(a)?e:a};let Ps;const au=()=>Ps||(Ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Qd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Zd=Zl(Qd);function xa(e){if(he(e)){const a={};for(let l=0;l<e.length;l++){const o=e[l],r=Xe(o)?am(o):xa(o);if(r)for(const d in r)a[d]=r[d]}return a}else if(Xe(e)||Ge(e))return e}const em=/;(?![^(]*\))/g,tm=/:([^]+)/,im=/\/\*[^]*?\*\//g;function am(e){const a={};return e.replace(im,"").split(em).forEach(l=>{if(l){const o=l.split(tm);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function ml(e){let a="";if(Xe(e))a=e;else if(he(e))for(let l=0;l<e.length;l++){const o=ml(e[l]);o&&(a+=o+" ")}else if(Ge(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function lm(e){if(!e)return null;let{class:a,style:l}=e;return a&&!Xe(a)&&(e.class=ml(a)),l&&(e.style=xa(l)),e}const nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",om=Zl(nm);function lu(e){return!!e||e===""}function sm(e,a){if(e.length!==a.length)return!1;let l=!0;for(let o=0;l&&o<e.length;o++)l=li(e[o],a[o]);return l}function li(e,a){if(e===a)return!0;let l=Rs(e),o=Rs(a);if(l||o)return l&&o?e.getTime()===a.getTime():!1;if(l=Ci(e),o=Ci(a),l||o)return e===a;if(l=he(e),o=he(a),l||o)return l&&o?sm(e,a):!1;if(l=Ge(e),o=Ge(a),l||o){if(!l||!o)return!1;const r=Object.keys(e).length,d=Object.keys(a).length;if(r!==d)return!1;for(const m in e){const f=e.hasOwnProperty(m),s=a.hasOwnProperty(m);if(f&&!s||!f&&s||!li(e[m],a[m]))return!1}}return String(e)===String(a)}function tn(e,a){return e.findIndex(l=>li(l,a))}const Te=e=>Xe(e)?e:e==null?"":he(e)||Ge(e)&&(e.toString===tu||!Ce(e.toString))?JSON.stringify(e,nu,2):String(e),nu=(e,a)=>a&&a.__v_isRef?nu(e,a.value):ra(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[o,r],d)=>(l[$n(o,d)+" =>"]=r,l),{})}:Wi(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>$n(l))}:Ci(a)?$n(a):Ge(a)&&!he(a)&&!iu(a)?String(a):a,$n=(e,a="")=>{var l;return Ci(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class No{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!a&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=$t;try{return $t=this,a()}finally{$t=l}}}on(){$t=this}off(){$t=this.parent}stop(a){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function rm(e){return new No(e)}function ou(e,a=$t){a&&a.active&&a.effects.push(e)}function Oo(){return $t}function su(e){$t&&$t.cleanups.push(e)}let Pi;class ba{constructor(a,l,o,r){this.fn=a,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ou(this,r)}get dirty(){if(this._dirtyLevel===1){Ki();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(um(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=Si,l=Pi;try{return Si=!0,Pi=this,this._runnings++,Fs(this),this.fn()}finally{Vs(this),this._runnings--,Pi=l,Si=a}}stop(){var a;this.active&&(Fs(this),Vs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function um(e){return e.value}function Fs(e){e._trackId++,e._depsLength=0}function Vs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)ru(e.deps[a],e);e.deps.length=e._depsLength}}function ru(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function cm(e,a){e.effect instanceof ba&&(e=e.effect.fn);const l=new ba(e,yt,()=>{l.dirty&&l.run()});a&&(Ke(l,a),a.scope&&ou(l,a.scope)),(!a||!a.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function dm(e){e.effect.stop()}let Si=!0,Zn=0;const uu=[];function Ki(){uu.push(Si),Si=!1}function Xi(){const e=uu.pop();Si=e===void 0?!0:e}function qo(){Zn++}function jo(){for(Zn--;!Zn&&eo.length;)eo.shift()()}function cu(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&ru(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const eo=[];function du(e,a,l){qo();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const r=o._dirtyLevel;o._dirtyLevel=a,r===0&&(o._shouldSchedule=!0,o.trigger())}mu(e),jo()}function mu(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,eo.push(a.scheduler))}const pu=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},Ml=new WeakMap,Fi=Symbol(""),to=Symbol("");function At(e,a,l){if(Si&&Pi){let o=Ml.get(e);o||Ml.set(e,o=new Map);let r=o.get(l);r||o.set(l,r=pu(()=>o.delete(l))),cu(Pi,r)}}function ii(e,a,l,o,r,d){const m=Ml.get(e);if(!m)return;let f=[];if(a==="clear")f=[...m.values()];else if(l==="length"&&he(e)){const s=Number(o);m.forEach((c,g)=>{(g==="length"||!Ci(g)&&g>=s)&&f.push(c)})}else switch(l!==void 0&&f.push(m.get(l)),a){case"add":he(e)?Ho(l)&&f.push(m.get("length")):(f.push(m.get(Fi)),ra(e)&&f.push(m.get(to)));break;case"delete":he(e)||(f.push(m.get(Fi)),ra(e)&&f.push(m.get(to)));break;case"set":ra(e)&&f.push(m.get(Fi));break}qo();for(const s of f)s&&du(s,2);jo()}function mm(e,a){var l;return(l=Ml.get(e))==null?void 0:l.get(a)}const pm=Zl("__proto__,__v_isRef,__isVue"),fu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ci)),Ms=fm();function fm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const o=Ee(this);for(let d=0,m=this.length;d<m;d++)At(o,"get",d+"");const r=o[a](...l);return r===-1||r===!1?o[a](...l.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Ki(),qo();const o=Ee(this)[a].apply(this,l);return jo(),Xi(),o}}),e}function gm(e){const a=Ee(this);return At(a,"has",e),a.hasOwnProperty(e)}class gu{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,o){const r=this._isReadonly,d=this._shallow;if(l==="__v_isReactive")return!r;if(l==="__v_isReadonly")return r;if(l==="__v_isShallow")return d;if(l==="__v_raw")return o===(r?d?yu:Su:d?vu:bu).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const m=he(a);if(!r){if(m&&Pe(Ms,l))return Reflect.get(Ms,l,o);if(l==="hasOwnProperty")return gm}const f=Reflect.get(a,l,o);return(Ci(l)?fu.has(l):pm(l))||(r||At(a,"get",l),d)?f:pt(f)?m&&Ho(l)?f:f.value:Ge(f)?r?Uo(f):si(f):f}}class hu extends gu{constructor(a=!1){super(!1,a)}set(a,l,o,r){let d=a[l];if(!this._shallow){const s=Oi(d);if(!el(o)&&!Oi(o)&&(d=Ee(d),o=Ee(o)),!he(a)&&pt(d)&&!pt(o))return s?!1:(d.value=o,!0)}const m=he(a)&&Ho(l)?Number(l)<a.length:Pe(a,l),f=Reflect.set(a,l,o,r);return a===Ee(r)&&(m?jt(o,d)&&ii(a,"set",l,o):ii(a,"add",l,o)),f}deleteProperty(a,l){const o=Pe(a,l);a[l];const r=Reflect.deleteProperty(a,l);return r&&o&&ii(a,"delete",l,void 0),r}has(a,l){const o=Reflect.has(a,l);return(!Ci(l)||!fu.has(l))&&At(a,"has",l),o}ownKeys(a){return At(a,"iterate",he(a)?"length":Fi),Reflect.ownKeys(a)}}class _u extends gu{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const hm=new hu,_m=new _u,bm=new hu(!0),vm=new _u(!0),Go=e=>e,an=e=>Reflect.getPrototypeOf(e);function _l(e,a,l=!1,o=!1){e=e.__v_raw;const r=Ee(e),d=Ee(a);l||(jt(a,d)&&At(r,"get",a),At(r,"get",d));const{has:m}=an(r),f=o?Go:l?Wo:tl;if(m.call(r,a))return f(e.get(a));if(m.call(r,d))return f(e.get(d));e!==r&&e.get(a)}function bl(e,a=!1){const l=this.__v_raw,o=Ee(l),r=Ee(e);return a||(jt(e,r)&&At(o,"has",e),At(o,"has",r)),e===r?l.has(e):l.has(e)||l.has(r)}function vl(e,a=!1){return e=e.__v_raw,!a&&At(Ee(e),"iterate",Fi),Reflect.get(e,"size",e)}function Hs(e){e=Ee(e);const a=Ee(this);return an(a).has.call(a,e)||(a.add(e),ii(a,"add",e,e)),this}function Ns(e,a){a=Ee(a);const l=Ee(this),{has:o,get:r}=an(l);let d=o.call(l,e);d||(e=Ee(e),d=o.call(l,e));const m=r.call(l,e);return l.set(e,a),d?jt(a,m)&&ii(l,"set",e,a):ii(l,"add",e,a),this}function Os(e){const a=Ee(this),{has:l,get:o}=an(a);let r=l.call(a,e);r||(e=Ee(e),r=l.call(a,e)),o&&o.call(a,e);const d=a.delete(e);return r&&ii(a,"delete",e,void 0),d}function qs(){const e=Ee(this),a=e.size!==0,l=e.clear();return a&&ii(e,"clear",void 0,void 0),l}function Sl(e,a){return function(o,r){const d=this,m=d.__v_raw,f=Ee(m),s=a?Go:e?Wo:tl;return!e&&At(f,"iterate",Fi),m.forEach((c,g)=>o.call(r,s(c),s(g),d))}}function yl(e,a,l){return function(...o){const r=this.__v_raw,d=Ee(r),m=ra(d),f=e==="entries"||e===Symbol.iterator&&m,s=e==="keys"&&m,c=r[e](...o),g=l?Go:a?Wo:tl;return!a&&At(d,"iterate",s?to:Fi),{next(){const{value:p,done:h}=c.next();return h?{value:p,done:h}:{value:f?[g(p[0]),g(p[1])]:g(p),done:h}},[Symbol.iterator](){return this}}}}function ci(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function Sm(){const e={get(d){return _l(this,d)},get size(){return vl(this)},has:bl,add:Hs,set:Ns,delete:Os,clear:qs,forEach:Sl(!1,!1)},a={get(d){return _l(this,d,!1,!0)},get size(){return vl(this)},has:bl,add:Hs,set:Ns,delete:Os,clear:qs,forEach:Sl(!1,!0)},l={get(d){return _l(this,d,!0)},get size(){return vl(this,!0)},has(d){return bl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:Sl(!0,!1)},o={get(d){return _l(this,d,!0,!0)},get size(){return vl(this,!0)},has(d){return bl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:Sl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=yl(d,!1,!1),l[d]=yl(d,!0,!1),a[d]=yl(d,!1,!0),o[d]=yl(d,!0,!0)}),[e,l,a,o]}const[ym,wm,Cm,Am]=Sm();function ln(e,a){const l=a?e?Am:Cm:e?wm:ym;return(o,r,d)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(Pe(l,r)&&r in o?l:o,r,d)}const km={get:ln(!1,!1)},xm={get:ln(!1,!0)},$m={get:ln(!0,!1)},Bm={get:ln(!0,!0)},bu=new WeakMap,vu=new WeakMap,Su=new WeakMap,yu=new WeakMap;function Tm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dm(e){return e.__v_skip||!Object.isExtensible(e)?0:Tm(Wd(e))}function si(e){return Oi(e)?e:nn(e,!1,hm,km,bu)}function wu(e){return nn(e,!1,bm,xm,vu)}function Uo(e){return nn(e,!0,_m,$m,Su)}function Lm(e){return nn(e,!0,vm,Bm,yu)}function nn(e,a,l,o,r){if(!Ge(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=r.get(e);if(d)return d;const m=Dm(e);if(m===0)return e;const f=new Proxy(e,m===2?o:l);return r.set(e,f),f}function Vi(e){return Oi(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Oi(e){return!!(e&&e.__v_isReadonly)}function el(e){return!!(e&&e.__v_isShallow)}function Yo(e){return Vi(e)||Oi(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function Jo(e){return Fl(e,"__v_skip",!0),e}const tl=e=>Ge(e)?si(e):e,Wo=e=>Ge(e)?Uo(e):e;class Cu{constructor(a,l,o,r){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ba(()=>a(this._value),()=>ca(this,1),()=>this.dep&&mu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&jt(a._value,a._value=a.effect.run())&&ca(a,2),Ko(a),a.effect._dirtyLevel>=1&&ca(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Im(e,a,l=!1){let o,r;const d=Ce(e);return d?(o=e,r=yt):(o=e.get,r=e.set),new Cu(o,r,d||!r,l)}function Ko(e){Si&&Pi&&(e=Ee(e),cu(Pi,e.dep||(e.dep=pu(()=>e.dep=void 0,e instanceof Cu?e:void 0))))}function ca(e,a=2,l){e=Ee(e);const o=e.dep;o&&du(o,a)}function pt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return ku(e,!1)}function Au(e){return ku(e,!0)}function ku(e,a){return pt(e)?e:new Em(e,a)}class Em{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Ee(a),this._value=l?a:tl(a)}get value(){return Ko(this),this._value}set value(a){const l=this.__v_isShallow||el(a)||Oi(a);a=l?a:Ee(a),jt(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:tl(a),ca(this,2))}}function zm(e){ca(e,2)}function u(e){return pt(e)?e.value:e}function Rm(e){return Ce(e)?e():u(e)}const Pm={get:(e,a,l)=>u(Reflect.get(e,a,l)),set:(e,a,l,o)=>{const r=e[a];return pt(r)&&!pt(l)?(r.value=l,!0):Reflect.set(e,a,l,o)}};function Xo(e){return Vi(e)?e:new Proxy(e,Pm)}class Fm{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=a(()=>Ko(this),()=>ca(this));this._get=l,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function xu(e){return new Fm(e)}function Vm(e){const a=he(e)?new Array(e.length):{};for(const l in e)a[l]=$u(e,l);return a}class Mm{constructor(a,l,o){this._object=a,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return mm(Ee(this._object),this._key)}}class Hm{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function io(e,a,l){return pt(e)?e:Ce(e)?new Hm(e):Ge(e)&&arguments.length>1?$u(e,a,l):G(e)}function $u(e,a,l){const o=e[a];return pt(o)?o:new Mm(e,a,l)}const Nm={GET:"get",HAS:"has",ITERATE:"iterate"},Om={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qm(e,a){}const jm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Gm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ai(e,a,l,o){let r;try{r=o?e(...o):e()}catch(d){Qi(d,a,l)}return r}function Et(e,a,l,o){if(Ce(e)){const d=ai(e,a,l,o);return d&&Mo(d)&&d.catch(m=>{Qi(m,a,l)}),d}const r=[];for(let d=0;d<e.length;d++)r.push(Et(e[d],a,l,o));return r}function Qi(e,a,l,o=!0){const r=a?a.vnode:null;if(a){let d=a.parent;const m=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${l}`;for(;d;){const c=d.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,m,f)===!1)return}d=d.parent}const s=a.appContext.config.errorHandler;if(s){ai(s,null,10,[e,m,f]);return}}Um(e,l,r,o)}function Um(e,a,l,o=!0){console.error(e)}let il=!1,ao=!1;const ft=[];let Wt=0;const da=[];let gi=null,Ei=0;const Bu=Promise.resolve();let Qo=null;function $a(e){const a=Qo||Bu;return e?a.then(this?e.bind(this):e):a}function Ym(e){let a=Wt+1,l=ft.length;for(;a<l;){const o=a+l>>>1,r=ft[o],d=al(r);d<e||d===e&&r.pre?a=o+1:l=o}return a}function on(e){(!ft.length||!ft.includes(e,il&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?ft.push(e):ft.splice(Ym(e.id),0,e),Tu())}function Tu(){!il&&!ao&&(ao=!0,Qo=Bu.then(Du))}function Jm(e){const a=ft.indexOf(e);a>Wt&&ft.splice(a,1)}function Hl(e){he(e)?da.push(...e):(!gi||!gi.includes(e,e.allowRecurse?Ei+1:Ei))&&da.push(e),Tu()}function js(e,a,l=il?Wt+1:0){for(;l<ft.length;l++){const o=ft[l];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ft.splice(l,1),l--,o()}}}function Nl(e){if(da.length){const a=[...new Set(da)].sort((l,o)=>al(l)-al(o));if(da.length=0,gi){gi.push(...a);return}for(gi=a,Ei=0;Ei<gi.length;Ei++)gi[Ei]();gi=null,Ei=0}}const al=e=>e.id==null?1/0:e.id,Wm=(e,a)=>{const l=al(e)-al(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function Du(e){ao=!1,il=!0,ft.sort(Wm);try{for(Wt=0;Wt<ft.length;Wt++){const a=ft[Wt];a&&a.active!==!1&&ai(a,null,14)}}finally{Wt=0,ft.length=0,Nl(),il=!1,Qo=null,(ft.length||da.length)&&Du()}}let la,wl=[];function Lu(e,a){var l,o;la=e,la?(la.enabled=!0,wl.forEach(({event:r,args:d})=>la.emit(r,...d)),wl=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{Lu(d,a)}),setTimeout(()=>{la||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,wl=[])},3e3)):wl=[]}function Km(e,a,...l){if(e.isUnmounted)return;const o=e.vnode.props||qe;let r=l;const d=a.startsWith("update:"),m=d&&a.slice(7);if(m&&m in o){const g=`${m==="modelValue"?"model":m}Modifiers`,{number:p,trim:h}=o[g]||qe;h&&(r=l.map(w=>Xe(w)?w.trim():w)),p&&(r=l.map(Za))}let f,s=o[f=Ga(a)]||o[f=Ga(vt(a))];!s&&d&&(s=o[f=Ga(Dt(a))]),s&&Et(s,e,6,r);const c=o[f+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Et(c,e,6,r)}}function Iu(e,a,l=!1){const o=a.emitsCache,r=o.get(e);if(r!==void 0)return r;const d=e.emits;let m={},f=!1;if(!Ce(e)){const s=c=>{const g=Iu(c,a,!0);g&&(f=!0,Ke(m,g))};!l&&a.mixins.length&&a.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!d&&!f?(Ge(e)&&o.set(e,null),null):(he(d)?d.forEach(s=>m[s]=null):Ke(m,d),Ge(e)&&o.set(e,m),m)}function sn(e,a){return!e||!cl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Pe(e,a[0].toLowerCase()+a.slice(1))||Pe(e,Dt(a))||Pe(e,a))}let it=null,rn=null;function ll(e){const a=it;return it=e,rn=e&&e.type.__scopeId||null,a}function Eu(e){rn=e}function zu(){rn=null}const Xm=e=>i;function i(e,a=it,l){if(!a||e._n)return e;const o=(...r)=>{o._d&&mo(-1);const d=ll(a);let m;try{m=e(...r)}finally{ll(d),o._d&&mo(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function El(e){const{type:a,vnode:l,proxy:o,withProxy:r,props:d,propsOptions:[m],slots:f,attrs:s,emit:c,render:g,renderCache:p,data:h,setupState:w,ctx:b,inheritAttrs:C}=e;let $,D;const _=ll(e);try{if(l.shapeFlag&4){const x=r||o,T=x;$=Bt(g.call(T,x,p,d,w,h,b)),D=s}else{const x=a;$=Bt(x.length>1?x(d,{attrs:s,slots:f,emit:c}):x(d,null)),D=a.props?s:Zm(s)}}catch(x){Ja.length=0,Qi(x,e,1),$=t(ht)}let v=$;if(D&&C!==!1){const x=Object.keys(D),{shapeFlag:T}=v;x.length&&T&7&&(m&&x.some(Fo)&&(D=ep(D,m)),v=Kt(v,D))}return l.dirs&&(v=Kt(v),v.dirs=v.dirs?v.dirs.concat(l.dirs):l.dirs),l.transition&&(v.transition=l.transition),$=v,ll(_),$}function Qm(e,a=!0){let l;for(let o=0;o<e.length;o++){const r=e[o];if(kt(r)){if(r.type!==ht||r.children==="v-if"){if(l)return;l=r}}else return}return l}const Zm=e=>{let a;for(const l in e)(l==="class"||l==="style"||cl(l))&&((a||(a={}))[l]=e[l]);return a},ep=(e,a)=>{const l={};for(const o in e)(!Fo(o)||!(o.slice(9)in a))&&(l[o]=e[o]);return l};function tp(e,a,l){const{props:o,children:r,component:d}=e,{props:m,children:f,patchFlag:s}=a,c=d.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&s>=0){if(s&1024)return!0;if(s&16)return o?Gs(o,m,c):!!m;if(s&8){const g=a.dynamicProps;for(let p=0;p<g.length;p++){const h=g[p];if(m[h]!==o[h]&&!sn(c,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:o===m?!1:o?m?Gs(o,m,c):!0:!!m;return!1}function Gs(e,a,l){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const d=o[r];if(a[d]!==e[d]&&!sn(l,d))return!0}return!1}function Zo({vnode:e,parent:a},l){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=l,a=a.parent;else break}}const es="components",ip="directives";function y(e,a){return ts(es,e,!0,a)||e}const Ru=Symbol.for("v-ndc");function Pu(e){return Xe(e)?ts(es,e,!1)||e:e||Ru}function un(e){return ts(ip,e)}function ts(e,a,l=!0,o=!1){const r=it||ot;if(r){const d=r.type;if(e===es){const f=_o(d,!1);if(f&&(f===a||f===vt(a)||f===dl(vt(a))))return d}const m=Us(r[e]||d[e],a)||Us(r.appContext[e],a);return!m&&o?d:m}}function Us(e,a){return e&&(e[a]||e[vt(a)]||e[dl(vt(a))])}const Fu=e=>e.__isSuspense;let lo=0;const ap={name:"Suspense",__isSuspense:!0,process(e,a,l,o,r,d,m,f,s,c){if(e==null)np(a,l,o,r,d,m,f,s,c);else{if(d&&d.deps>0){a.suspense=e.suspense;return}op(e,a,l,o,r,m,f,s,c)}},hydrate:sp,create:is,normalize:rp},lp=ap;function nl(e,a){const l=e.props&&e.props[a];Ce(l)&&l()}function np(e,a,l,o,r,d,m,f,s){const{p:c,o:{createElement:g}}=s,p=g("div"),h=e.suspense=is(e,r,o,a,p,l,d,m,f,s);c(null,h.pendingBranch=e.ssContent,p,null,o,h,d,m),h.deps>0?(nl(e,"onPending"),nl(e,"onFallback"),c(null,e.ssFallback,a,l,o,null,d,m),ma(h,e.ssFallback)):h.resolve(!1,!0)}function op(e,a,l,o,r,d,m,f,{p:s,um:c,o:{createElement:g}}){const p=a.suspense=e.suspense;p.vnode=a,a.el=e.el;const h=a.ssContent,w=a.ssFallback,{activeBranch:b,pendingBranch:C,isInFallback:$,isHydrating:D}=p;if(C)p.pendingBranch=h,qt(h,C)?(s(C,h,p.hiddenContainer,null,r,p,d,m,f),p.deps<=0?p.resolve():$&&(D||(s(b,w,l,o,r,null,d,m,f),ma(p,w)))):(p.pendingId=lo++,D?(p.isHydrating=!1,p.activeBranch=C):c(C,r,p),p.deps=0,p.effects.length=0,p.hiddenContainer=g("div"),$?(s(null,h,p.hiddenContainer,null,r,p,d,m,f),p.deps<=0?p.resolve():(s(b,w,l,o,r,null,d,m,f),ma(p,w))):b&&qt(h,b)?(s(b,h,l,o,r,p,d,m,f),p.resolve(!0)):(s(null,h,p.hiddenContainer,null,r,p,d,m,f),p.deps<=0&&p.resolve()));else if(b&&qt(h,b))s(b,h,l,o,r,p,d,m,f),ma(p,h);else if(nl(a,"onPending"),p.pendingBranch=h,h.shapeFlag&512?p.pendingId=h.component.suspenseId:p.pendingId=lo++,s(null,h,p.hiddenContainer,null,r,p,d,m,f),p.deps<=0)p.resolve();else{const{timeout:_,pendingId:v}=p;_>0?setTimeout(()=>{p.pendingId===v&&p.fallback(w)},_):_===0&&p.fallback(w)}}function is(e,a,l,o,r,d,m,f,s,c,g=!1){const{p,m:h,um:w,n:b,o:{parentNode:C,remove:$}}=c;let D;const _=up(e);_&&a!=null&&a.pendingBranch&&(D=a.pendingId,a.deps++);const v=e.props?Vl(e.props.timeout):void 0,x=d,T={vnode:e,parent:a,parentComponent:l,namespace:m,container:o,hiddenContainer:r,deps:0,pendingId:lo++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,V=!1){const{vnode:M,activeBranch:F,pendingBranch:j,pendingId:Q,effects:Y,parentComponent:ge,container:Be}=T;let U=!1;T.isHydrating?T.isHydrating=!1:E||(U=F&&j.transition&&j.transition.mode==="out-in",U&&(F.transition.afterLeave=()=>{Q===T.pendingId&&(h(j,Be,d===x?b(F):d,0),Hl(Y))}),F&&(C(F.el)!==T.hiddenContainer&&(d=b(F)),w(F,ge,T,!0)),U||h(j,Be,d,0)),ma(T,j),T.pendingBranch=null,T.isInFallback=!1;let K=T.parent,me=!1;for(;K;){if(K.pendingBranch){K.effects.push(...Y),me=!0;break}K=K.parent}!me&&!U&&Hl(Y),T.effects=[],_&&a&&a.pendingBranch&&D===a.pendingId&&(a.deps--,a.deps===0&&!V&&a.resolve()),nl(M,"onResolve")},fallback(E){if(!T.pendingBranch)return;const{vnode:V,activeBranch:M,parentComponent:F,container:j,namespace:Q}=T;nl(V,"onFallback");const Y=b(M),ge=()=>{T.isInFallback&&(p(null,E,j,Y,F,null,Q,f,s),ma(T,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(M.transition.afterLeave=ge),T.isInFallback=!0,w(M,F,null,!0),Be||ge()},move(E,V,M){T.activeBranch&&h(T.activeBranch,E,V,M),T.container=E},next(){return T.activeBranch&&b(T.activeBranch)},registerDep(E,V){const M=!!T.pendingBranch;M&&T.deps++;const F=E.vnode.el;E.asyncDep.catch(j=>{Qi(j,E,0)}).then(j=>{if(E.isUnmounted||T.isUnmounted||T.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:Q}=E;go(E,j,!1),F&&(Q.el=F);const Y=!F&&E.subTree.el;V(E,Q,C(F||E.subTree.el),F?null:b(E.subTree),T,m,s),Y&&$(Y),Zo(E,Q.el),M&&--T.deps===0&&T.resolve()})},unmount(E,V){T.isUnmounted=!0,T.activeBranch&&w(T.activeBranch,l,E,V),T.pendingBranch&&w(T.pendingBranch,l,E,V)}};return T}function sp(e,a,l,o,r,d,m,f,s){const c=a.suspense=is(a,o,l,e.parentNode,document.createElement("div"),null,r,d,m,f,!0),g=s(e,c.pendingBranch=a.ssContent,l,c,d,m);return c.deps===0&&c.resolve(!1,!0),g}function rp(e){const{shapeFlag:a,children:l}=e,o=a&32;e.ssContent=Ys(o?l.default:l),e.ssFallback=o?Ys(l.fallback):t(ht)}function Ys(e){let a;if(Ce(e)){const l=Ui&&e._c;l&&(e._d=!1,k()),e=e(),l&&(e._d=!0,a=wt,gc())}return he(e)&&(e=Qm(e)),e=Bt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function Vu(e,a){a&&a.pendingBranch?he(e)?a.effects.push(...e):a.effects.push(e):Hl(e)}function ma(e,a){e.activeBranch=a;const{vnode:l,parentComponent:o}=e;let r=a.el;for(;!r&&a.component;)a=a.component.subTree,r=a.el;l.el=r,o&&o.subTree===l&&(o.vnode.el=r,Zo(o,r))}function up(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const Mu=Symbol.for("v-scx"),Hu=()=>He(Mu);function as(e,a){return pl(e,null,a)}function Nu(e,a){return pl(e,null,{flush:"post"})}function Ou(e,a){return pl(e,null,{flush:"sync"})}const Cl={};function gt(e,a,l){return pl(e,a,l)}function pl(e,a,{immediate:l,deep:o,flush:r,once:d,onTrack:m,onTrigger:f}=qe){if(a&&d){const E=a;a=(...V)=>{E(...V),T()}}const s=ot,c=E=>o===!0?E:zi(E,o===!1?1:void 0);let g,p=!1,h=!1;if(pt(e)?(g=()=>e.value,p=el(e)):Vi(e)?(g=()=>c(e),p=!0):he(e)?(h=!0,p=e.some(E=>Vi(E)||el(E)),g=()=>e.map(E=>{if(pt(E))return E.value;if(Vi(E))return c(E);if(Ce(E))return ai(E,s,2)})):Ce(e)?a?g=()=>ai(e,s,2):g=()=>(w&&w(),Et(e,s,3,[b])):g=yt,a&&o){const E=g;g=()=>zi(E())}let w,b=E=>{w=v.onStop=()=>{ai(E,s,4),w=v.onStop=void 0}},C;if(gl)if(b=yt,a?l&&Et(a,s,3,[g(),h?[]:void 0,b]):g(),r==="sync"){const E=Hu();C=E.__watcherHandles||(E.__watcherHandles=[])}else return yt;let $=h?new Array(e.length).fill(Cl):Cl;const D=()=>{if(!(!v.active||!v.dirty))if(a){const E=v.run();(o||p||(h?E.some((V,M)=>jt(V,$[M])):jt(E,$)))&&(w&&w(),Et(a,s,3,[E,$===Cl?void 0:h&&$[0]===Cl?[]:$,b]),$=E)}else v.run()};D.allowRecurse=!!a;let _;r==="sync"?_=D:r==="post"?_=()=>dt(D,s&&s.suspense):(D.pre=!0,s&&(D.id=s.uid),_=()=>on(D));const v=new ba(g,yt,_),x=Oo(),T=()=>{v.stop(),x&&Vo(x.effects,v)};return a?l?D():$=v.run():r==="post"?dt(v.run.bind(v),s&&s.suspense):v.run(),C&&C.push(T),T}function cp(e,a,l){const o=this.proxy,r=Xe(e)?e.includes(".")?qu(o,e):()=>o[e]:e.bind(o,o);let d;Ce(a)?d=a:(d=a.handler,l=a);const m=Yi(this),f=pl(r,d.bind(o),l);return m(),f}function qu(e,a){const l=a.split(".");return()=>{let o=e;for(let r=0;r<l.length&&o;r++)o=o[l[r]];return o}}function zi(e,a,l=0,o){if(!Ge(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),pt(e))zi(e.value,a,l,o);else if(he(e))for(let r=0;r<e.length;r++)zi(e[r],a,l,o);else if(Wi(e)||ra(e))e.forEach(r=>{zi(r,a,l,o)});else if(iu(e))for(const r in e)zi(e[r],a,l,o);return e}function yi(e,a){if(it===null)return e;const l=hn(it)||it.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<a.length;r++){let[d,m,f,s=qe]=a[r];d&&(Ce(d)&&(d={mounted:d,updated:d}),d.deep&&zi(m),o.push({dir:d,instance:l,value:m,oldValue:void 0,arg:f,modifiers:s}))}return e}function Ut(e,a,l,o){const r=e.dirs,d=a&&a.dirs;for(let m=0;m<r.length;m++){const f=r[m];d&&(f.oldValue=d[m].value);let s=f.dir[o];s&&(Ki(),Et(s,l,8,[e.el,f,e,a]),Xi())}}const hi=Symbol("_leaveCb"),Al=Symbol("_enterCb");function ls(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ki(()=>{e.isMounted=!0}),pn(()=>{e.isUnmounting=!0}),e}const Ft=[Function,Array],ns={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},dp={name:"BaseTransition",props:ns,setup(e,{slots:a}){const l=Xt(),o=ls();let r;return()=>{const d=a.default&&cn(a.default(),!0);if(!d||!d.length)return;let m=d[0];if(d.length>1){for(const C of d)if(C.type!==ht){m=C;break}}const f=Ee(e),{mode:s}=f;if(o.isLeaving)return Bn(m);const c=Js(m);if(!c)return Bn(m);const g=va(c,f,o,l);qi(c,g);const p=l.subTree,h=p&&Js(p);let w=!1;const{getTransitionKey:b}=c.type;if(b){const C=b();r===void 0?r=C:C!==r&&(r=C,w=!0)}if(h&&h.type!==ht&&(!qt(c,h)||w)){const C=va(h,f,o,l);if(qi(h,C),s==="out-in")return o.isLeaving=!0,C.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Bn(m);s==="in-out"&&c.type!==ht&&(C.delayLeave=($,D,_)=>{const v=Gu(o,h);v[String(h.key)]=h,$[hi]=()=>{D(),$[hi]=void 0,delete g.delayedLeave},g.delayedLeave=_})}return m}}},ju=dp;function Gu(e,a){const{leavingVNodes:l}=e;let o=l.get(a.type);return o||(o=Object.create(null),l.set(a.type,o)),o}function va(e,a,l,o){const{appear:r,mode:d,persisted:m=!1,onBeforeEnter:f,onEnter:s,onAfterEnter:c,onEnterCancelled:g,onBeforeLeave:p,onLeave:h,onAfterLeave:w,onLeaveCancelled:b,onBeforeAppear:C,onAppear:$,onAfterAppear:D,onAppearCancelled:_}=a,v=String(e.key),x=Gu(l,e),T=(M,F)=>{M&&Et(M,o,9,F)},E=(M,F)=>{const j=F[1];T(M,F),he(M)?M.every(Q=>Q.length<=1)&&j():M.length<=1&&j()},V={mode:d,persisted:m,beforeEnter(M){let F=f;if(!l.isMounted)if(r)F=C||f;else return;M[hi]&&M[hi](!0);const j=x[v];j&&qt(e,j)&&j.el[hi]&&j.el[hi](),T(F,[M])},enter(M){let F=s,j=c,Q=g;if(!l.isMounted)if(r)F=$||s,j=D||c,Q=_||g;else return;let Y=!1;const ge=M[Al]=Be=>{Y||(Y=!0,Be?T(Q,[M]):T(j,[M]),V.delayedLeave&&V.delayedLeave(),M[Al]=void 0)};F?E(F,[M,ge]):ge()},leave(M,F){const j=String(e.key);if(M[Al]&&M[Al](!0),l.isUnmounting)return F();T(p,[M]);let Q=!1;const Y=M[hi]=ge=>{Q||(Q=!0,F(),ge?T(b,[M]):T(w,[M]),M[hi]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?E(h,[M,Y]):Y()},clone(M){return va(M,a,l,o)}};return V}function Bn(e){if(fl(e))return e=Kt(e),e.children=null,e}function Js(e){return fl(e)?e.children?e.children[0]:void 0:e}function qi(e,a){e.shapeFlag&6&&e.component?qi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function cn(e,a=!1,l){let o=[],r=0;for(let d=0;d<e.length;d++){let m=e[d];const f=l==null?m.key:String(l)+String(m.key!=null?m.key:d);m.type===Ae?(m.patchFlag&128&&r++,o=o.concat(cn(m.children,a,f))):(a||m.type!==ht)&&o.push(f!=null?Kt(m,{key:f}):m)}if(r>1)for(let d=0;d<o.length;d++)o[d].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function R(e,a){return Ce(e)?Ke({name:e.name},a,{setup:e}):e}const Mi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function mp(e){Ce(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:o,delay:r=200,timeout:d,suspensible:m=!0,onError:f}=e;let s=null,c,g=0;const p=()=>(g++,s=null,h()),h=()=>{let w;return s||(w=s=a().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),f)return new Promise((C,$)=>{f(b,()=>C(p()),()=>$(b),g+1)});throw b}).then(b=>w!==s&&s?s:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return R({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const w=ot;if(c)return()=>Tn(c,w);const b=_=>{s=null,Qi(_,w,13,!o)};if(m&&w.suspense||gl)return h().then(_=>()=>Tn(_,w)).catch(_=>(b(_),()=>o?t(o,{error:_}):null));const C=G(!1),$=G(),D=G(!!r);return r&&setTimeout(()=>{D.value=!1},r),d!=null&&setTimeout(()=>{if(!C.value&&!$.value){const _=new Error(`Async component timed out after ${d}ms.`);b(_),$.value=_}},d),h().then(()=>{C.value=!0,w.parent&&fl(w.parent.vnode)&&(w.parent.effect.dirty=!0,on(w.parent.update))}).catch(_=>{b(_),$.value=_}),()=>{if(C.value&&c)return Tn(c,w);if($.value&&o)return t(o,{error:$.value});if(l&&!D.value)return t(l)}}})}function Tn(e,a){const{ref:l,props:o,children:r,ce:d}=a.vnode,m=t(e,o,r);return m.ref=l,m.ce=d,delete a.vnode.ce,m}const fl=e=>e.type.__isKeepAlive,pp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=Xt(),o=l.ctx;if(!o.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const r=new Map,d=new Set;let m=null;const f=l.suspense,{renderer:{p:s,m:c,um:g,o:{createElement:p}}}=o,h=p("div");o.activate=(_,v,x,T,E)=>{const V=_.component;c(_,v,x,0,f),s(V.vnode,_,v,x,V,f,T,_.slotScopeIds,E),dt(()=>{V.isDeactivated=!1,V.a&&ua(V.a);const M=_.props&&_.props.onVnodeMounted;M&&St(M,V.parent,_)},f)},o.deactivate=_=>{const v=_.component;c(_,h,null,1,f),dt(()=>{v.da&&ua(v.da);const x=_.props&&_.props.onVnodeUnmounted;x&&St(x,v.parent,_),v.isDeactivated=!0},f)};function w(_){Dn(_),g(_,l,f,!0)}function b(_){r.forEach((v,x)=>{const T=_o(v.type);T&&(!_||!_(T))&&C(x)})}function C(_){const v=r.get(_);!m||!qt(v,m)?w(v):m&&Dn(m),r.delete(_),d.delete(_)}gt(()=>[e.include,e.exclude],([_,v])=>{_&&b(x=>Va(_,x)),v&&b(x=>!Va(v,x))},{flush:"post",deep:!0});let $=null;const D=()=>{$!=null&&r.set($,Ln(l.subTree))};return ki(D),mn(D),pn(()=>{r.forEach(_=>{const{subTree:v,suspense:x}=l,T=Ln(v);if(_.type===T.type&&_.key===T.key){Dn(T);const E=T.component.da;E&&dt(E,x);return}w(_)})}),()=>{if($=null,!a.default)return null;const _=a.default(),v=_[0];if(_.length>1)return m=null,_;if(!kt(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return m=null,v;let x=Ln(v);const T=x.type,E=_o(Mi(x)?x.type.__asyncResolved||{}:T),{include:V,exclude:M,max:F}=e;if(V&&(!E||!Va(V,E))||M&&E&&Va(M,E))return m=x,v;const j=x.key==null?T:x.key,Q=r.get(j);return x.el&&(x=Kt(x),v.shapeFlag&128&&(v.ssContent=x)),$=j,Q?(x.el=Q.el,x.component=Q.component,x.transition&&qi(x,x.transition),x.shapeFlag|=512,d.delete(j),d.add(j)):(d.add(j),F&&d.size>parseInt(F,10)&&C(d.values().next().value)),x.shapeFlag|=256,m=x,Fu(v.type)?v:x}}},fp=pp;function Va(e,a){return he(e)?e.some(l=>Va(l,a)):Xe(e)?e.split(",").includes(a):Jd(e)?e.test(a):!1}function os(e,a){Uu(e,"a",a)}function ss(e,a){Uu(e,"da",a)}function Uu(e,a,l=ot){const o=e.__wdc||(e.__wdc=()=>{let r=l;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(dn(a,o,l),l){let r=l.parent;for(;r&&r.parent;)fl(r.parent.vnode)&&gp(o,a,l,r),r=r.parent}}function gp(e,a,l,o){const r=dn(a,e,o,!0);Zi(()=>{Vo(o[a],r)},l)}function Dn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ln(e){return e.shapeFlag&128?e.ssContent:e}function dn(e,a,l=ot,o=!1){if(l){const r=l[e]||(l[e]=[]),d=a.__weh||(a.__weh=(...m)=>{if(l.isUnmounted)return;Ki();const f=Yi(l),s=Et(a,l,e,m);return f(),Xi(),s});return o?r.unshift(d):r.push(d),d}}const ri=e=>(a,l=ot)=>(!gl||e==="sp")&&dn(e,(...o)=>a(...o),l),Yu=ri("bm"),ki=ri("m"),Ju=ri("bu"),mn=ri("u"),pn=ri("bum"),Zi=ri("um"),Wu=ri("sp"),Ku=ri("rtg"),Xu=ri("rtc");function Qu(e,a=ot){dn("ec",e,a)}function Ze(e,a,l,o){let r;const d=l&&l[o];if(he(e)||Xe(e)){r=new Array(e.length);for(let m=0,f=e.length;m<f;m++)r[m]=a(e[m],m,void 0,d&&d[m])}else if(typeof e=="number"){r=new Array(e);for(let m=0;m<e;m++)r[m]=a(m+1,m,void 0,d&&d[m])}else if(Ge(e))if(e[Symbol.iterator])r=Array.from(e,(m,f)=>a(m,f,void 0,d&&d[f]));else{const m=Object.keys(e);r=new Array(m.length);for(let f=0,s=m.length;f<s;f++){const c=m[f];r[f]=a(e[c],c,f,d&&d[f])}}else r=[];return l&&(l[o]=r),r}function hp(e,a){for(let l=0;l<a.length;l++){const o=a[l];if(he(o))for(let r=0;r<o.length;r++)e[o[r].name]=o[r].fn;else o&&(e[o.name]=o.key?(...r)=>{const d=o.fn(...r);return d&&(d.key=o.key),d}:o.fn)}return e}function ji(e,a,l={},o,r){if(it.isCE||it.parent&&Mi(it.parent)&&it.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,o&&o());let d=e[a];d&&d._c&&(d._d=!1),k();const m=d&&Zu(d(l)),f=B(Ae,{key:l.key||m&&m.key||`_${a}`},m||(o?o():[]),m&&e._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),d&&d._c&&(d._d=!0),f}function Zu(e){return e.some(a=>kt(a)?!(a.type===ht||a.type===Ae&&!Zu(a.children)):!0)?e:null}function _p(e,a){const l={};for(const o in e)l[a&&/[A-Z]/.test(o)?`on:${o}`:Ga(o)]=e[o];return l}const no=e=>e?Sc(e)?hn(e)||e.proxy:no(e.parent):null,Ua=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>no(e.parent),$root:e=>no(e.root),$emit:e=>e.emit,$options:e=>rs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,on(e.update)}),$nextTick:e=>e.n||(e.n=$a.bind(e.proxy)),$watch:e=>cp.bind(e)}),In=(e,a)=>e!==qe&&!e.__isScriptSetup&&Pe(e,a),oo={get({_:e},a){const{ctx:l,setupState:o,data:r,props:d,accessCache:m,type:f,appContext:s}=e;let c;if(a[0]!=="$"){const w=m[a];if(w!==void 0)switch(w){case 1:return o[a];case 2:return r[a];case 4:return l[a];case 3:return d[a]}else{if(In(o,a))return m[a]=1,o[a];if(r!==qe&&Pe(r,a))return m[a]=2,r[a];if((c=e.propsOptions[0])&&Pe(c,a))return m[a]=3,d[a];if(l!==qe&&Pe(l,a))return m[a]=4,l[a];so&&(m[a]=0)}}const g=Ua[a];let p,h;if(g)return a==="$attrs"&&At(e,"get",a),g(e);if((p=f.__cssModules)&&(p=p[a]))return p;if(l!==qe&&Pe(l,a))return m[a]=4,l[a];if(h=s.config.globalProperties,Pe(h,a))return h[a]},set({_:e},a,l){const{data:o,setupState:r,ctx:d}=e;return In(r,a)?(r[a]=l,!0):o!==qe&&Pe(o,a)?(o[a]=l,!0):Pe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:o,appContext:r,propsOptions:d}},m){let f;return!!l[m]||e!==qe&&Pe(e,m)||In(a,m)||(f=d[0])&&Pe(f,m)||Pe(o,m)||Pe(Ua,m)||Pe(r.config.globalProperties,m)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:Pe(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},bp=Ke({},oo,{get(e,a){if(a!==Symbol.unscopables)return oo.get(e,a,e)},has(e,a){return a[0]!=="_"&&!Zd(a)}});function vp(){return null}function Sp(){return null}function yp(e){}function wp(e){}function Cp(){return null}function Ap(){}function kp(e,a){return null}function xp(){return tc().slots}function ec(){return tc().attrs}function tc(){const e=Xt();return e.setupContext||(e.setupContext=Cc(e))}function ol(e){return he(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function $p(e,a){const l=ol(e);for(const o in a){if(o.startsWith("__skip"))continue;let r=l[o];r?he(r)||Ce(r)?r=l[o]={type:r,default:a[o]}:r.default=a[o]:r===null&&(r=l[o]={default:a[o]}),r&&a[`__skip_${o}`]&&(r.skipFactory=!0)}return l}function Bp(e,a){return!e||!a?e||a:he(e)&&he(a)?e.concat(a):Ke({},ol(e),ol(a))}function Tp(e,a){const l={};for(const o in e)a.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>e[o]});return l}function Dp(e){const a=Xt();let l=e();return fo(),Mo(l)&&(l=l.catch(o=>{throw Yi(a),o})),[l,()=>Yi(a)]}let so=!0;function Lp(e){const a=rs(e),l=e.proxy,o=e.ctx;so=!1,a.beforeCreate&&Ws(a.beforeCreate,e,"bc");const{data:r,computed:d,methods:m,watch:f,provide:s,inject:c,created:g,beforeMount:p,mounted:h,beforeUpdate:w,updated:b,activated:C,deactivated:$,beforeDestroy:D,beforeUnmount:_,destroyed:v,unmounted:x,render:T,renderTracked:E,renderTriggered:V,errorCaptured:M,serverPrefetch:F,expose:j,inheritAttrs:Q,components:Y,directives:ge,filters:Be}=a;if(c&&Ip(c,o,null),m)for(const me in m){const ae=m[me];Ce(ae)&&(o[me]=ae.bind(l))}if(r){const me=r.call(l,l);Ge(me)&&(e.data=si(me))}if(so=!0,d)for(const me in d){const ae=d[me],De=Ce(ae)?ae.bind(l,l):Ce(ae.get)?ae.get.bind(l,l):yt,Je=!Ce(ae)&&Ce(ae.set)?ae.set.bind(l):yt,st=H({get:De,set:Je});Object.defineProperty(o,me,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(f)for(const me in f)ic(f[me],o,l,me);if(s){const me=Ce(s)?s.call(l):s;Reflect.ownKeys(me).forEach(ae=>{mt(ae,me[ae])})}g&&Ws(g,e,"c");function K(me,ae){he(ae)?ae.forEach(De=>me(De.bind(l))):ae&&me(ae.bind(l))}if(K(Yu,p),K(ki,h),K(Ju,w),K(mn,b),K(os,C),K(ss,$),K(Qu,M),K(Xu,E),K(Ku,V),K(pn,_),K(Zi,x),K(Wu,F),he(j))if(j.length){const me=e.exposed||(e.exposed={});j.forEach(ae=>{Object.defineProperty(me,ae,{get:()=>l[ae],set:De=>l[ae]=De})})}else e.exposed||(e.exposed={});T&&e.render===yt&&(e.render=T),Q!=null&&(e.inheritAttrs=Q),Y&&(e.components=Y),ge&&(e.directives=ge)}function Ip(e,a,l=yt){he(e)&&(e=ro(e));for(const o in e){const r=e[o];let d;Ge(r)?"default"in r?d=He(r.from||o,r.default,!0):d=He(r.from||o):d=He(r),pt(d)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>d.value,set:m=>d.value=m}):a[o]=d}}function Ws(e,a,l){Et(he(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,l)}function ic(e,a,l,o){const r=o.includes(".")?qu(l,o):()=>l[o];if(Xe(e)){const d=a[e];Ce(d)&&gt(r,d)}else if(Ce(e))gt(r,e.bind(l));else if(Ge(e))if(he(e))e.forEach(d=>ic(d,a,l,o));else{const d=Ce(e.handler)?e.handler.bind(l):a[e.handler];Ce(d)&&gt(r,d,e)}}function rs(e){const a=e.type,{mixins:l,extends:o}=a,{mixins:r,optionsCache:d,config:{optionMergeStrategies:m}}=e.appContext,f=d.get(a);let s;return f?s=f:!r.length&&!l&&!o?s=a:(s={},r.length&&r.forEach(c=>Ol(s,c,m,!0)),Ol(s,a,m)),Ge(a)&&d.set(a,s),s}function Ol(e,a,l,o=!1){const{mixins:r,extends:d}=a;d&&Ol(e,d,l,!0),r&&r.forEach(m=>Ol(e,m,l,!0));for(const m in a)if(!(o&&m==="expose")){const f=Ep[m]||l&&l[m];e[m]=f?f(e[m],a[m]):a[m]}return e}const Ep={data:Ks,props:Xs,emits:Xs,methods:Ma,computed:Ma,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ma,directives:Ma,watch:Rp,provide:Ks,inject:zp};function Ks(e,a){return a?e?function(){return Ke(Ce(e)?e.call(this,this):e,Ce(a)?a.call(this,this):a)}:a:e}function zp(e,a){return Ma(ro(e),ro(a))}function ro(e){if(he(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function bt(e,a){return e?[...new Set([].concat(e,a))]:a}function Ma(e,a){return e?Ke(Object.create(null),e,a):a}function Xs(e,a){return e?he(e)&&he(a)?[...new Set([...e,...a])]:Ke(Object.create(null),ol(e),ol(a??{})):a}function Rp(e,a){if(!e)return a;if(!a)return e;const l=Ke(Object.create(null),e);for(const o in a)l[o]=bt(e[o],a[o]);return l}function ac(){return{app:null,config:{isNativeTag:Ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pp=0;function Fp(e,a){return function(o,r=null){Ce(o)||(o=Ke({},o)),r!=null&&!Ge(r)&&(r=null);const d=ac(),m=new WeakSet;let f=!1;const s=d.app={_uid:Pp++,_component:o,_props:r,_container:null,_context:d,_instance:null,version:kc,get config(){return d.config},set config(c){},use(c,...g){return m.has(c)||(c&&Ce(c.install)?(m.add(c),c.install(s,...g)):Ce(c)&&(m.add(c),c(s,...g))),s},mixin(c){return d.mixins.includes(c)||d.mixins.push(c),s},component(c,g){return g?(d.components[c]=g,s):d.components[c]},directive(c,g){return g?(d.directives[c]=g,s):d.directives[c]},mount(c,g,p){if(!f){const h=t(o,r);return h.appContext=d,p===!0?p="svg":p===!1&&(p=void 0),g&&a?a(h,c):e(h,c,p),f=!0,s._container=c,c.__vue_app__=s,hn(h.component)||h.component.proxy}},unmount(){f&&(e(null,s._container),delete s._container.__vue_app__)},provide(c,g){return d.provides[c]=g,s},runWithContext(c){sl=s;try{return c()}finally{sl=null}}};return s}}let sl=null;function mt(e,a){if(ot){let l=ot.provides;const o=ot.parent&&ot.parent.provides;o===l&&(l=ot.provides=Object.create(o)),l[e]=a}}function He(e,a,l=!1){const o=ot||it;if(o||sl){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:sl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return l&&Ce(a)?a.call(o&&o.proxy):a}}function Vp(){return!!(ot||it||sl)}function Mp(e,a,l,o=!1){const r={},d={};Fl(d,gn,1),e.propsDefaults=Object.create(null),lc(e,a,r,d);for(const m in e.propsOptions[0])m in r||(r[m]=void 0);l?e.props=o?r:wu(r):e.type.props?e.props=r:e.props=d,e.attrs=d}function Hp(e,a,l,o){const{props:r,attrs:d,vnode:{patchFlag:m}}=e,f=Ee(r),[s]=e.propsOptions;let c=!1;if((o||m>0)&&!(m&16)){if(m&8){const g=e.vnode.dynamicProps;for(let p=0;p<g.length;p++){let h=g[p];if(sn(e.emitsOptions,h))continue;const w=a[h];if(s)if(Pe(d,h))w!==d[h]&&(d[h]=w,c=!0);else{const b=vt(h);r[b]=uo(s,f,b,w,e,!1)}else w!==d[h]&&(d[h]=w,c=!0)}}}else{lc(e,a,r,d)&&(c=!0);let g;for(const p in f)(!a||!Pe(a,p)&&((g=Dt(p))===p||!Pe(a,g)))&&(s?l&&(l[p]!==void 0||l[g]!==void 0)&&(r[p]=uo(s,f,p,void 0,e,!0)):delete r[p]);if(d!==f)for(const p in d)(!a||!Pe(a,p))&&(delete d[p],c=!0)}c&&ii(e,"set","$attrs")}function lc(e,a,l,o){const[r,d]=e.propsOptions;let m=!1,f;if(a)for(let s in a){if(ja(s))continue;const c=a[s];let g;r&&Pe(r,g=vt(s))?!d||!d.includes(g)?l[g]=c:(f||(f={}))[g]=c:sn(e.emitsOptions,s)||(!(s in o)||c!==o[s])&&(o[s]=c,m=!0)}if(d){const s=Ee(l),c=f||qe;for(let g=0;g<d.length;g++){const p=d[g];l[p]=uo(r,s,p,c[p],e,!Pe(c,p))}}return m}function uo(e,a,l,o,r,d){const m=e[l];if(m!=null){const f=Pe(m,"default");if(f&&o===void 0){const s=m.default;if(m.type!==Function&&!m.skipFactory&&Ce(s)){const{propsDefaults:c}=r;if(l in c)o=c[l];else{const g=Yi(r);o=c[l]=s.call(null,a),g()}}else o=s}m[0]&&(d&&!f?o=!1:m[1]&&(o===""||o===Dt(l))&&(o=!0))}return o}function nc(e,a,l=!1){const o=a.propsCache,r=o.get(e);if(r)return r;const d=e.props,m={},f=[];let s=!1;if(!Ce(e)){const g=p=>{s=!0;const[h,w]=nc(p,a,!0);Ke(m,h),w&&f.push(...w)};!l&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!d&&!s)return Ge(e)&&o.set(e,sa),sa;if(he(d))for(let g=0;g<d.length;g++){const p=vt(d[g]);Qs(p)&&(m[p]=qe)}else if(d)for(const g in d){const p=vt(g);if(Qs(p)){const h=d[g],w=m[p]=he(h)||Ce(h)?{type:h}:Ke({},h);if(w){const b=tr(Boolean,w.type),C=tr(String,w.type);w[0]=b>-1,w[1]=C<0||b<C,(b>-1||Pe(w,"default"))&&f.push(p)}}}const c=[m,f];return Ge(e)&&o.set(e,c),c}function Qs(e){return e[0]!=="$"}function Zs(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function er(e,a){return Zs(e)===Zs(a)}function tr(e,a){return he(a)?a.findIndex(l=>er(l,e)):Ce(a)&&er(a,e)?0:-1}const oc=e=>e[0]==="_"||e==="$stable",us=e=>he(e)?e.map(Bt):[Bt(e)],Np=(e,a,l)=>{if(a._n)return a;const o=i((...r)=>us(a(...r)),l);return o._c=!1,o},sc=(e,a,l)=>{const o=e._ctx;for(const r in e){if(oc(r))continue;const d=e[r];if(Ce(d))a[r]=Np(r,d,o);else if(d!=null){const m=us(d);a[r]=()=>m}}},rc=(e,a)=>{const l=us(a);e.slots.default=()=>l},Op=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Ee(a),Fl(a,"_",l)):sc(a,e.slots={})}else e.slots={},a&&rc(e,a);Fl(e.slots,gn,1)},qp=(e,a,l)=>{const{vnode:o,slots:r}=e;let d=!0,m=qe;if(o.shapeFlag&32){const f=a._;f?l&&f===1?d=!1:(Ke(r,a),!l&&f===1&&delete r._):(d=!a.$stable,sc(a,r)),m=a}else a&&(rc(e,a),m={default:1});if(d)for(const f in r)!oc(f)&&m[f]==null&&delete r[f]};function ql(e,a,l,o,r=!1){if(he(e)){e.forEach((h,w)=>ql(h,a&&(he(a)?a[w]:a),l,o,r));return}if(Mi(o)&&!r)return;const d=o.shapeFlag&4?hn(o.component)||o.component.proxy:o.el,m=r?null:d,{i:f,r:s}=e,c=a&&a.r,g=f.refs===qe?f.refs={}:f.refs,p=f.setupState;if(c!=null&&c!==s&&(Xe(c)?(g[c]=null,Pe(p,c)&&(p[c]=null)):pt(c)&&(c.value=null)),Ce(s))ai(s,f,12,[m,g]);else{const h=Xe(s),w=pt(s),b=e.f;if(h||w){const C=()=>{if(b){const $=h?Pe(p,s)?p[s]:g[s]:s.value;r?he($)&&Vo($,d):he($)?$.includes(d)||$.push(d):h?(g[s]=[d],Pe(p,s)&&(p[s]=g[s])):(s.value=[d],e.k&&(g[e.k]=s.value))}else h?(g[s]=m,Pe(p,s)&&(p[s]=m)):w&&(s.value=m,e.k&&(g[e.k]=m))};r||b?C():(C.id=-1,dt(C,l))}}}let di=!1;const jp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Gp=e=>e.namespaceURI.includes("MathML"),kl=e=>{if(jp(e))return"svg";if(Gp(e))return"mathml"},xl=e=>e.nodeType===8;function Up(e){const{mt:a,p:l,o:{patchProp:o,createText:r,nextSibling:d,parentNode:m,remove:f,insert:s,createComment:c}}=e,g=(v,x)=>{if(!x.hasChildNodes()){l(null,v,x),Nl(),x._vnode=v;return}di=!1,p(x.firstChild,v,null,null,null),Nl(),x._vnode=v,di&&console.error("Hydration completed but contains mismatches.")},p=(v,x,T,E,V,M=!1)=>{const F=xl(v)&&v.data==="[",j=()=>C(v,x,T,E,V,F),{type:Q,ref:Y,shapeFlag:ge,patchFlag:Be}=x;let U=v.nodeType;x.el=v,Be===-2&&(M=!1,x.dynamicChildren=null);let K=null;switch(Q){case Gi:U!==3?x.children===""?(s(x.el=r(""),m(v),v),K=v):K=j():(v.data!==x.children&&(di=!0,v.data=x.children),K=d(v));break;case ht:_(v)?(K=d(v),D(x.el=v.content.firstChild,v,T)):U!==8||F?K=j():K=d(v);break;case Hi:if(F&&(v=d(v),U=v.nodeType),U===1||U===3){K=v;const me=!x.children.length;for(let ae=0;ae<x.staticCount;ae++)me&&(x.children+=K.nodeType===1?K.outerHTML:K.data),ae===x.staticCount-1&&(x.anchor=K),K=d(K);return F?d(K):K}else j();break;case Ae:F?K=b(v,x,T,E,V,M):K=j();break;default:if(ge&1)(U!==1||x.type.toLowerCase()!==v.tagName.toLowerCase())&&!_(v)?K=j():K=h(v,x,T,E,V,M);else if(ge&6){x.slotScopeIds=V;const me=m(v);if(F?K=$(v):xl(v)&&v.data==="teleport start"?K=$(v,v.data,"teleport end"):K=d(v),a(x,me,null,T,E,kl(me),M),Mi(x)){let ae;F?(ae=t(Ae),ae.anchor=K?K.previousSibling:me.lastChild):ae=v.nodeType===3?n(""):t("div"),ae.el=v,x.component.subTree=ae}}else ge&64?U!==8?K=j():K=x.type.hydrate(v,x,T,E,V,M,e,w):ge&128&&(K=x.type.hydrate(v,x,T,E,kl(m(v)),V,M,e,p))}return Y!=null&&ql(Y,null,E,x),K},h=(v,x,T,E,V,M)=>{M=M||!!x.dynamicChildren;const{type:F,props:j,patchFlag:Q,shapeFlag:Y,dirs:ge,transition:Be}=x,U=F==="input"||F==="option";if(U||Q!==-1){ge&&Ut(x,null,T,"created");let K=!1;if(_(v)){K=mc(E,Be)&&T&&T.vnode.props&&T.vnode.props.appear;const ae=v.content.firstChild;K&&Be.beforeEnter(ae),D(ae,v,T),x.el=v=ae}if(Y&16&&!(j&&(j.innerHTML||j.textContent))){let ae=w(v.firstChild,x,v,T,E,V,M);for(;ae;){di=!0;const De=ae;ae=ae.nextSibling,f(De)}}else Y&8&&v.textContent!==x.children&&(di=!0,v.textContent=x.children);if(j)if(U||!M||Q&48)for(const ae in j)(U&&(ae.endsWith("value")||ae==="indeterminate")||cl(ae)&&!ja(ae)||ae[0]===".")&&o(v,ae,null,j[ae],void 0,void 0,T);else j.onClick&&o(v,"onClick",null,j.onClick,void 0,void 0,T);let me;(me=j&&j.onVnodeBeforeMount)&&St(me,T,x),ge&&Ut(x,null,T,"beforeMount"),((me=j&&j.onVnodeMounted)||ge||K)&&Vu(()=>{me&&St(me,T,x),K&&Be.enter(v),ge&&Ut(x,null,T,"mounted")},E)}return v.nextSibling},w=(v,x,T,E,V,M,F)=>{F=F||!!x.dynamicChildren;const j=x.children,Q=j.length;for(let Y=0;Y<Q;Y++){const ge=F?j[Y]:j[Y]=Bt(j[Y]);if(v)v=p(v,ge,E,V,M,F);else{if(ge.type===Gi&&!ge.children)continue;di=!0,l(null,ge,T,null,E,V,kl(T),M)}}return v},b=(v,x,T,E,V,M)=>{const{slotScopeIds:F}=x;F&&(V=V?V.concat(F):F);const j=m(v),Q=w(d(v),x,j,T,E,V,M);return Q&&xl(Q)&&Q.data==="]"?d(x.anchor=Q):(di=!0,s(x.anchor=c("]"),j,Q),Q)},C=(v,x,T,E,V,M)=>{if(di=!0,x.el=null,M){const Q=$(v);for(;;){const Y=d(v);if(Y&&Y!==Q)f(Y);else break}}const F=d(v),j=m(v);return f(v),l(null,x,j,F,T,E,kl(j),V),F},$=(v,x="[",T="]")=>{let E=0;for(;v;)if(v=d(v),v&&xl(v)&&(v.data===x&&E++,v.data===T)){if(E===0)return d(v);E--}return v},D=(v,x,T)=>{const E=x.parentNode;E&&E.replaceChild(v,x);let V=T;for(;V;)V.vnode.el===x&&(V.vnode.el=V.subTree.el=v),V=V.parent},_=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[g,p]}const dt=Vu;function uc(e){return dc(e)}function cc(e){return dc(e,Up)}function dc(e,a){const l=au();l.__VUE__=!0;const{insert:o,remove:r,patchProp:d,createElement:m,createText:f,createComment:s,setText:c,setElementText:g,parentNode:p,nextSibling:h,setScopeId:w=yt,insertStaticContent:b}=e,C=(L,z,q,Z=null,ee=null,ne=null,ce=void 0,le=null,se=!!z.dynamicChildren)=>{if(L===z)return;L&&!qt(L,z)&&(Z=re(L),Ue(L,ee,ne,!0),L=null),z.patchFlag===-2&&(se=!1,z.dynamicChildren=null);const{type:ie,ref:pe,shapeFlag:ye}=z;switch(ie){case Gi:$(L,z,q,Z);break;case ht:D(L,z,q,Z);break;case Hi:L==null&&_(z,q,Z,ce);break;case Ae:Y(L,z,q,Z,ee,ne,ce,le,se);break;default:ye&1?T(L,z,q,Z,ee,ne,ce,le,se):ye&6?ge(L,z,q,Z,ee,ne,ce,le,se):(ye&64||ye&128)&&ie.process(L,z,q,Z,ee,ne,ce,le,se,Oe)}pe!=null&&ee&&ql(pe,L&&L.ref,ne,z||L,!z)},$=(L,z,q,Z)=>{if(L==null)o(z.el=f(z.children),q,Z);else{const ee=z.el=L.el;z.children!==L.children&&c(ee,z.children)}},D=(L,z,q,Z)=>{L==null?o(z.el=s(z.children||""),q,Z):z.el=L.el},_=(L,z,q,Z)=>{[L.el,L.anchor]=b(L.children,z,q,Z,L.el,L.anchor)},v=({el:L,anchor:z},q,Z)=>{let ee;for(;L&&L!==z;)ee=h(L),o(L,q,Z),L=ee;o(z,q,Z)},x=({el:L,anchor:z})=>{let q;for(;L&&L!==z;)q=h(L),r(L),L=q;r(z)},T=(L,z,q,Z,ee,ne,ce,le,se)=>{z.type==="svg"?ce="svg":z.type==="math"&&(ce="mathml"),L==null?E(z,q,Z,ee,ne,ce,le,se):F(L,z,ee,ne,ce,le,se)},E=(L,z,q,Z,ee,ne,ce,le)=>{let se,ie;const{props:pe,shapeFlag:ye,transition:Se,dirs:ke}=L;if(se=L.el=m(L.type,ne,pe&&pe.is,pe),ye&8?g(se,L.children):ye&16&&M(L.children,se,null,Z,ee,En(L,ne),ce,le),ke&&Ut(L,null,Z,"created"),V(se,L,L.scopeId,ce,Z),pe){for(const je in pe)je!=="value"&&!ja(je)&&d(se,je,null,pe[je],ne,L.children,Z,ee,ue);"value"in pe&&d(se,"value",null,pe.value,ne),(ie=pe.onVnodeBeforeMount)&&St(ie,Z,L)}ke&&Ut(L,null,Z,"beforeMount");const Ie=mc(ee,Se);Ie&&Se.beforeEnter(se),o(se,z,q),((ie=pe&&pe.onVnodeMounted)||Ie||ke)&&dt(()=>{ie&&St(ie,Z,L),Ie&&Se.enter(se),ke&&Ut(L,null,Z,"mounted")},ee)},V=(L,z,q,Z,ee)=>{if(q&&w(L,q),Z)for(let ne=0;ne<Z.length;ne++)w(L,Z[ne]);if(ee){let ne=ee.subTree;if(z===ne){const ce=ee.vnode;V(L,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},M=(L,z,q,Z,ee,ne,ce,le,se=0)=>{for(let ie=se;ie<L.length;ie++){const pe=L[ie]=le?_i(L[ie]):Bt(L[ie]);C(null,pe,z,q,Z,ee,ne,ce,le)}},F=(L,z,q,Z,ee,ne,ce)=>{const le=z.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:pe}=z;se|=L.patchFlag&16;const ye=L.props||qe,Se=z.props||qe;let ke;if(q&&Bi(q,!1),(ke=Se.onVnodeBeforeUpdate)&&St(ke,q,z,L),pe&&Ut(z,L,q,"beforeUpdate"),q&&Bi(q,!0),ie?j(L.dynamicChildren,ie,le,q,Z,En(z,ee),ne):ce||ae(L,z,le,null,q,Z,En(z,ee),ne,!1),se>0){if(se&16)Q(le,z,ye,Se,q,Z,ee);else if(se&2&&ye.class!==Se.class&&d(le,"class",null,Se.class,ee),se&4&&d(le,"style",ye.style,Se.style,ee),se&8){const Ie=z.dynamicProps;for(let je=0;je<Ie.length;je++){const We=Ie[je],rt=ye[We],Ot=Se[We];(Ot!==rt||We==="value")&&d(le,We,rt,Ot,ee,L.children,q,Z,ue)}}se&1&&L.children!==z.children&&g(le,z.children)}else!ce&&ie==null&&Q(le,z,ye,Se,q,Z,ee);((ke=Se.onVnodeUpdated)||pe)&&dt(()=>{ke&&St(ke,q,z,L),pe&&Ut(z,L,q,"updated")},Z)},j=(L,z,q,Z,ee,ne,ce)=>{for(let le=0;le<z.length;le++){const se=L[le],ie=z[le],pe=se.el&&(se.type===Ae||!qt(se,ie)||se.shapeFlag&70)?p(se.el):q;C(se,ie,pe,null,Z,ee,ne,ce,!0)}},Q=(L,z,q,Z,ee,ne,ce)=>{if(q!==Z){if(q!==qe)for(const le in q)!ja(le)&&!(le in Z)&&d(L,le,q[le],null,ce,z.children,ee,ne,ue);for(const le in Z){if(ja(le))continue;const se=Z[le],ie=q[le];se!==ie&&le!=="value"&&d(L,le,ie,se,ce,z.children,ee,ne,ue)}"value"in Z&&d(L,"value",q.value,Z.value,ce)}},Y=(L,z,q,Z,ee,ne,ce,le,se)=>{const ie=z.el=L?L.el:f(""),pe=z.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:Se,slotScopeIds:ke}=z;ke&&(le=le?le.concat(ke):ke),L==null?(o(ie,q,Z),o(pe,q,Z),M(z.children||[],q,pe,ee,ne,ce,le,se)):ye>0&&ye&64&&Se&&L.dynamicChildren?(j(L.dynamicChildren,Se,q,ee,ne,ce,le),(z.key!=null||ee&&z===ee.subTree)&&cs(L,z,!0)):ae(L,z,q,pe,ee,ne,ce,le,se)},ge=(L,z,q,Z,ee,ne,ce,le,se)=>{z.slotScopeIds=le,L==null?z.shapeFlag&512?ee.ctx.activate(z,q,Z,ce,se):Be(z,q,Z,ee,ne,ce,se):U(L,z,se)},Be=(L,z,q,Z,ee,ne,ce)=>{const le=L.component=vc(L,Z,ee);if(fl(L)&&(le.ctx.renderer=Oe),yc(le),le.asyncDep){if(ee&&ee.registerDep(le,K),!L.el){const se=le.subTree=t(ht);D(null,se,z,q)}}else K(le,L,z,q,ee,ne,ce)},U=(L,z,q)=>{const Z=z.component=L.component;if(tp(L,z,q))if(Z.asyncDep&&!Z.asyncResolved){me(Z,z,q);return}else Z.next=z,Jm(Z.update),Z.effect.dirty=!0,Z.update();else z.el=L.el,Z.vnode=z},K=(L,z,q,Z,ee,ne,ce)=>{const le=()=>{if(L.isMounted){let{next:pe,bu:ye,u:Se,parent:ke,vnode:Ie}=L;{const ia=pc(L);if(ia){pe&&(pe.el=Ie.el,me(L,pe,ce)),ia.asyncDep.then(()=>{L.isUnmounted||le()});return}}let je=pe,We;Bi(L,!1),pe?(pe.el=Ie.el,me(L,pe,ce)):pe=Ie,ye&&ua(ye),(We=pe.props&&pe.props.onVnodeBeforeUpdate)&&St(We,ke,pe,Ie),Bi(L,!0);const rt=El(L),Ot=L.subTree;L.subTree=rt,C(Ot,rt,p(Ot.el),re(Ot),L,ee,ne),pe.el=rt.el,je===null&&Zo(L,rt.el),Se&&dt(Se,ee),(We=pe.props&&pe.props.onVnodeUpdated)&&dt(()=>St(We,ke,pe,Ie),ee)}else{let pe;const{el:ye,props:Se}=z,{bm:ke,m:Ie,parent:je}=L,We=Mi(z);if(Bi(L,!1),ke&&ua(ke),!We&&(pe=Se&&Se.onVnodeBeforeMount)&&St(pe,je,z),Bi(L,!0),ye&&$e){const rt=()=>{L.subTree=El(L),$e(ye,L.subTree,L,ee,null)};We?z.type.__asyncLoader().then(()=>!L.isUnmounted&&rt()):rt()}else{const rt=L.subTree=El(L);C(null,rt,q,Z,L,ee,ne),z.el=rt.el}if(Ie&&dt(Ie,ee),!We&&(pe=Se&&Se.onVnodeMounted)){const rt=z;dt(()=>St(pe,je,rt),ee)}(z.shapeFlag&256||je&&Mi(je.vnode)&&je.vnode.shapeFlag&256)&&L.a&&dt(L.a,ee),L.isMounted=!0,z=q=Z=null}},se=L.effect=new ba(le,yt,()=>on(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Bi(L,!0),ie()},me=(L,z,q)=>{z.component=L;const Z=L.vnode.props;L.vnode=z,L.next=null,Hp(L,z.props,Z,q),qp(L,z.children,q),Ki(),js(L),Xi()},ae=(L,z,q,Z,ee,ne,ce,le,se=!1)=>{const ie=L&&L.children,pe=L?L.shapeFlag:0,ye=z.children,{patchFlag:Se,shapeFlag:ke}=z;if(Se>0){if(Se&128){Je(ie,ye,q,Z,ee,ne,ce,le,se);return}else if(Se&256){De(ie,ye,q,Z,ee,ne,ce,le,se);return}}ke&8?(pe&16&&ue(ie,ee,ne),ye!==ie&&g(q,ye)):pe&16?ke&16?Je(ie,ye,q,Z,ee,ne,ce,le,se):ue(ie,ee,ne,!0):(pe&8&&g(q,""),ke&16&&M(ye,q,Z,ee,ne,ce,le,se))},De=(L,z,q,Z,ee,ne,ce,le,se)=>{L=L||sa,z=z||sa;const ie=L.length,pe=z.length,ye=Math.min(ie,pe);let Se;for(Se=0;Se<ye;Se++){const ke=z[Se]=se?_i(z[Se]):Bt(z[Se]);C(L[Se],ke,q,null,ee,ne,ce,le,se)}ie>pe?ue(L,ee,ne,!0,!1,ye):M(z,q,Z,ee,ne,ce,le,se,ye)},Je=(L,z,q,Z,ee,ne,ce,le,se)=>{let ie=0;const pe=z.length;let ye=L.length-1,Se=pe-1;for(;ie<=ye&&ie<=Se;){const ke=L[ie],Ie=z[ie]=se?_i(z[ie]):Bt(z[ie]);if(qt(ke,Ie))C(ke,Ie,q,null,ee,ne,ce,le,se);else break;ie++}for(;ie<=ye&&ie<=Se;){const ke=L[ye],Ie=z[Se]=se?_i(z[Se]):Bt(z[Se]);if(qt(ke,Ie))C(ke,Ie,q,null,ee,ne,ce,le,se);else break;ye--,Se--}if(ie>ye){if(ie<=Se){const ke=Se+1,Ie=ke<pe?z[ke].el:Z;for(;ie<=Se;)C(null,z[ie]=se?_i(z[ie]):Bt(z[ie]),q,Ie,ee,ne,ce,le,se),ie++}}else if(ie>Se)for(;ie<=ye;)Ue(L[ie],ee,ne,!0),ie++;else{const ke=ie,Ie=ie,je=new Map;for(ie=Ie;ie<=Se;ie++){const xt=z[ie]=se?_i(z[ie]):Bt(z[ie]);xt.key!=null&&je.set(xt.key,ie)}let We,rt=0;const Ot=Se-Ie+1;let ia=!1,Is=0;const Ia=new Array(Ot);for(ie=0;ie<Ot;ie++)Ia[ie]=0;for(ie=ke;ie<=ye;ie++){const xt=L[ie];if(rt>=Ot){Ue(xt,ee,ne,!0);continue}let Gt;if(xt.key!=null)Gt=je.get(xt.key);else for(We=Ie;We<=Se;We++)if(Ia[We-Ie]===0&&qt(xt,z[We])){Gt=We;break}Gt===void 0?Ue(xt,ee,ne,!0):(Ia[Gt-Ie]=ie+1,Gt>=Is?Is=Gt:ia=!0,C(xt,z[Gt],q,null,ee,ne,ce,le,se),rt++)}const Es=ia?Yp(Ia):sa;for(We=Es.length-1,ie=Ot-1;ie>=0;ie--){const xt=Ie+ie,Gt=z[xt],zs=xt+1<pe?z[xt+1].el:Z;Ia[ie]===0?C(null,Gt,q,zs,ee,ne,ce,le,se):ia&&(We<0||ie!==Es[We]?st(Gt,q,zs,2):We--)}}},st=(L,z,q,Z,ee=null)=>{const{el:ne,type:ce,transition:le,children:se,shapeFlag:ie}=L;if(ie&6){st(L.component.subTree,z,q,Z);return}if(ie&128){L.suspense.move(z,q,Z);return}if(ie&64){ce.move(L,z,q,Oe);return}if(ce===Ae){o(ne,z,q);for(let ye=0;ye<se.length;ye++)st(se[ye],z,q,Z);o(L.anchor,z,q);return}if(ce===Hi){v(L,z,q);return}if(Z!==2&&ie&1&&le)if(Z===0)le.beforeEnter(ne),o(ne,z,q),dt(()=>le.enter(ne),ee);else{const{leave:ye,delayLeave:Se,afterLeave:ke}=le,Ie=()=>o(ne,z,q),je=()=>{ye(ne,()=>{Ie(),ke&&ke()})};Se?Se(ne,Ie,je):je()}else o(ne,z,q)},Ue=(L,z,q,Z=!1,ee=!1)=>{const{type:ne,props:ce,ref:le,children:se,dynamicChildren:ie,shapeFlag:pe,patchFlag:ye,dirs:Se}=L;if(le!=null&&ql(le,null,q,L,!0),pe&256){z.ctx.deactivate(L);return}const ke=pe&1&&Se,Ie=!Mi(L);let je;if(Ie&&(je=ce&&ce.onVnodeBeforeUnmount)&&St(je,z,L),pe&6)J(L.component,q,Z);else{if(pe&128){L.suspense.unmount(q,Z);return}ke&&Ut(L,null,z,"beforeUnmount"),pe&64?L.type.remove(L,z,q,ee,Oe,Z):ie&&(ne!==Ae||ye>0&&ye&64)?ue(ie,z,q,!1,!0):(ne===Ae&&ye&384||!ee&&pe&16)&&ue(se,z,q),Z&&Qt(L)}(Ie&&(je=ce&&ce.onVnodeUnmounted)||ke)&&dt(()=>{je&&St(je,z,L),ke&&Ut(L,null,z,"unmounted")},q)},Qt=L=>{const{type:z,el:q,anchor:Z,transition:ee}=L;if(z===Ae){Pt(q,Z);return}if(z===Hi){x(L);return}const ne=()=>{r(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:le}=ee,se=()=>ce(q,ne);le?le(L.el,ne,se):se()}else ne()},Pt=(L,z)=>{let q;for(;L!==z;)q=h(L),r(L),L=q;r(z)},J=(L,z,q)=>{const{bum:Z,scope:ee,update:ne,subTree:ce,um:le}=L;Z&&ua(Z),ee.stop(),ne&&(ne.active=!1,Ue(ce,L,z,q)),le&&dt(le,z),dt(()=>{L.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},ue=(L,z,q,Z=!1,ee=!1,ne=0)=>{for(let ce=ne;ce<L.length;ce++)Ue(L[ce],z,q,Z,ee)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let _e=!1;const Ne=(L,z,q)=>{L==null?z._vnode&&Ue(z._vnode,null,null,!0):C(z._vnode||null,L,z,null,null,null,q),_e||(_e=!0,js(),Nl(),_e=!1),z._vnode=L},Oe={p:C,um:Ue,m:st,r:Qt,mt:Be,mc:M,pc:ae,pbc:j,n:re,o:e};let xe,$e;return a&&([xe,$e]=a(Oe)),{render:Ne,hydrate:xe,createApp:Fp(Ne,xe)}}function En({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Bi({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function mc(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function cs(e,a,l=!1){const o=e.children,r=a.children;if(he(o)&&he(r))for(let d=0;d<o.length;d++){const m=o[d];let f=r[d];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[d]=_i(r[d]),f.el=m.el),l||cs(m,f)),f.type===Gi&&(f.el=m.el)}}function Yp(e){const a=e.slice(),l=[0];let o,r,d,m,f;const s=e.length;for(o=0;o<s;o++){const c=e[o];if(c!==0){if(r=l[l.length-1],e[r]<c){a[o]=r,l.push(o);continue}for(d=0,m=l.length-1;d<m;)f=d+m>>1,e[l[f]]<c?d=f+1:m=f;c<e[l[d]]&&(d>0&&(a[o]=l[d-1]),l[d]=o)}}for(d=l.length,m=l[d-1];d-- >0;)l[d]=m,m=a[m];return l}function pc(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:pc(a)}const Jp=e=>e.__isTeleport,Ya=e=>e&&(e.disabled||e.disabled===""),ir=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ar=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,co=(e,a)=>{const l=e&&e.to;return Xe(l)?a?a(l):null:l},Wp={name:"Teleport",__isTeleport:!0,process(e,a,l,o,r,d,m,f,s,c){const{mc:g,pc:p,pbc:h,o:{insert:w,querySelector:b,createText:C,createComment:$}}=c,D=Ya(a.props);let{shapeFlag:_,children:v,dynamicChildren:x}=a;if(e==null){const T=a.el=C(""),E=a.anchor=C("");w(T,l,o),w(E,l,o);const V=a.target=co(a.props,b),M=a.targetAnchor=C("");V&&(w(M,V),m==="svg"||ir(V)?m="svg":(m==="mathml"||ar(V))&&(m="mathml"));const F=(j,Q)=>{_&16&&g(v,j,Q,r,d,m,f,s)};D?F(l,E):V&&F(V,M)}else{a.el=e.el;const T=a.anchor=e.anchor,E=a.target=e.target,V=a.targetAnchor=e.targetAnchor,M=Ya(e.props),F=M?l:E,j=M?T:V;if(m==="svg"||ir(E)?m="svg":(m==="mathml"||ar(E))&&(m="mathml"),x?(h(e.dynamicChildren,x,F,r,d,m,f),cs(e,a,!0)):s||p(e,a,F,j,r,d,m,f,!1),D)M?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):$l(a,l,T,c,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const Q=a.target=co(a.props,b);Q&&$l(a,Q,null,c,0)}else M&&$l(a,E,V,c,1)}fc(a)},remove(e,a,l,o,{um:r,o:{remove:d}},m){const{shapeFlag:f,children:s,anchor:c,targetAnchor:g,target:p,props:h}=e;if(p&&d(g),m&&d(c),f&16){const w=m||!Ya(h);for(let b=0;b<s.length;b++){const C=s[b];r(C,a,l,w,!!C.dynamicChildren)}}},move:$l,hydrate:Kp};function $l(e,a,l,{o:{insert:o},m:r},d=2){d===0&&o(e.targetAnchor,a,l);const{el:m,anchor:f,shapeFlag:s,children:c,props:g}=e,p=d===2;if(p&&o(m,a,l),(!p||Ya(g))&&s&16)for(let h=0;h<c.length;h++)r(c[h],a,l,2);p&&o(f,a,l)}function Kp(e,a,l,o,r,d,{o:{nextSibling:m,parentNode:f,querySelector:s}},c){const g=a.target=co(a.props,s);if(g){const p=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Ya(a.props))a.anchor=c(m(e),a,f(e),l,o,r,d),a.targetAnchor=p;else{a.anchor=m(e);let h=p;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&m(a.targetAnchor);break}c(p,a,g,l,o,r,d)}fc(a)}return a.anchor&&m(a.anchor)}const fn=Wp;function fc(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ae=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Ja=[];let wt=null;function k(e=!1){Ja.push(wt=e?null:[])}function gc(){Ja.pop(),wt=Ja[Ja.length-1]||null}let Ui=1;function mo(e){Ui+=e}function hc(e){return e.dynamicChildren=Ui>0?wt||sa:null,gc(),Ui>0&&wt&&wt.push(e),e}function be(e,a,l,o,r,d){return hc(S(e,a,l,o,r,d,!0))}function B(e,a,l,o,r){return hc(t(e,a,l,o,r,!0))}function kt(e){return e?e.__v_isVNode===!0:!1}function qt(e,a){return e.type===a.type&&e.key===a.key}function Xp(e){}const gn="__vInternal",_c=({key:e})=>e??null,zl=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||pt(e)||Ce(e)?{i:it,r:e,k:a,f:!!l}:e:null);function S(e,a=null,l=null,o=0,r=null,d=e===Ae?0:1,m=!1,f=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&_c(a),ref:a&&zl(a),scopeId:rn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:it};return f?(ms(s,l),d&128&&e.normalize(s)):l&&(s.shapeFlag|=Xe(l)?8:16),Ui>0&&!m&&wt&&(s.patchFlag>0||d&6)&&s.patchFlag!==32&&wt.push(s),s}const t=Qp;function Qp(e,a=null,l=null,o=0,r=null,d=!1){if((!e||e===Ru)&&(e=ht),kt(e)){const f=Kt(e,a,!0);return l&&ms(f,l),Ui>0&&!d&&wt&&(f.shapeFlag&6?wt[wt.indexOf(e)]=f:wt.push(f)),f.patchFlag|=-2,f}if(sf(e)&&(e=e.__vccOpts),a){a=bc(a);let{class:f,style:s}=a;f&&!Xe(f)&&(a.class=ml(f)),Ge(s)&&(Yo(s)&&!he(s)&&(s=Ke({},s)),a.style=xa(s))}const m=Xe(e)?1:Fu(e)?128:Jp(e)?64:Ge(e)?4:Ce(e)?2:0;return S(e,a,l,o,r,m,d,!0)}function bc(e){return e?Yo(e)||gn in e?Ke({},e):e:null}function Kt(e,a,l=!1){const{props:o,ref:r,patchFlag:d,children:m}=e,f=a?ea(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&_c(f),ref:a&&a.ref?l&&r?he(r)?r.concat(zl(a)):[r,zl(a)]:zl(a):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ae?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(Gi,null,e,a)}function Zp(e,a){const l=t(Hi,null,e);return l.staticCount=a,l}function ds(e="",a=!1){return a?(k(),B(ht,null,e)):t(ht,null,e)}function Bt(e){return e==null||typeof e=="boolean"?t(ht):he(e)?t(Ae,null,e.slice()):typeof e=="object"?_i(e):t(Gi,null,String(e))}function _i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function ms(e,a){let l=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(he(a))l=16;else if(typeof a=="object")if(o&65){const r=a.default;r&&(r._c&&(r._d=!1),ms(e,r()),r._c&&(r._d=!0));return}else{l=32;const r=a._;!r&&!(gn in a)?a._ctx=it:r===3&&it&&(it.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else Ce(a)?(a={default:a,_ctx:it},l=32):(a=String(a),o&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function ea(...e){const a={};for(let l=0;l<e.length;l++){const o=e[l];for(const r in o)if(r==="class")a.class!==o.class&&(a.class=ml([a.class,o.class]));else if(r==="style")a.style=xa([a.style,o.style]);else if(cl(r)){const d=a[r],m=o[r];m&&d!==m&&!(he(d)&&d.includes(m))&&(a[r]=d?[].concat(d,m):m)}else r!==""&&(a[r]=o[r])}return a}function St(e,a,l,o=null){Et(e,a,7,[l,o])}const ef=ac();let tf=0;function vc(e,a,l){const o=e.type,r=(a?a.appContext:e.appContext)||ef,d={uid:tf++,vnode:e,type:o,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new No(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nc(o,r),emitsOptions:Iu(o,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=Km.bind(null,d),e.ce&&e.ce(d),d}let ot=null;const Xt=()=>ot||it;let jl,po;{const e=au(),a=(l,o)=>{let r;return(r=e[l])||(r=e[l]=[]),r.push(o),d=>{r.length>1?r.forEach(m=>m(d)):r[0](d)}};jl=a("__VUE_INSTANCE_SETTERS__",l=>ot=l),po=a("__VUE_SSR_SETTERS__",l=>gl=l)}const Yi=e=>{const a=ot;return jl(e),e.scope.on(),()=>{e.scope.off(),jl(a)}},fo=()=>{ot&&ot.scope.off(),jl(null)};function Sc(e){return e.vnode.shapeFlag&4}let gl=!1;function yc(e,a=!1){a&&po(a);const{props:l,children:o}=e.vnode,r=Sc(e);Mp(e,l,r,a),Op(e,o);const d=r?af(e,a):void 0;return a&&po(!1),d}function af(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=Jo(new Proxy(e.ctx,oo));const{setup:o}=l;if(o){const r=e.setupContext=o.length>1?Cc(e):null,d=Yi(e);Ki();const m=ai(o,e,0,[e.props,r]);if(Xi(),d(),Mo(m)){if(m.then(fo,fo),a)return m.then(f=>{go(e,f,a)}).catch(f=>{Qi(f,e,0)});e.asyncDep=m}else go(e,m,a)}else wc(e,a)}function go(e,a,l){Ce(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Ge(a)&&(e.setupState=Xo(a)),wc(e,l)}let Gl,ho;function lf(e){Gl=e,ho=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,bp))}}const nf=()=>!Gl;function wc(e,a,l){const o=e.type;if(!e.render){if(!a&&Gl&&!o.render){const r=o.template||rs(e).template;if(r){const{isCustomElement:d,compilerOptions:m}=e.appContext.config,{delimiters:f,compilerOptions:s}=o,c=Ke(Ke({isCustomElement:d,delimiters:f},m),s);o.render=Gl(r,c)}}e.render=o.render||yt,ho&&ho(e)}{const r=Yi(e);Ki();try{Lp(e)}finally{Xi(),r()}}}function of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return At(e,"get","$attrs"),a[l]}}))}function Cc(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return of(e)},slots:e.slots,emit:e.emit,expose:a}}function hn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xo(Jo(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Ua)return Ua[l](e)},has(a,l){return l in a||l in Ua}}))}function _o(e,a=!0){return Ce(e)?e.displayName||e.name:e.name||a&&e.__name}function sf(e){return Ce(e)&&"__vccOpts"in e}const H=(e,a)=>Im(e,a,gl);function rf(e,a,l=qe){const o=Xt(),r=vt(a),d=Dt(a),m=xu((s,c)=>{let g;return Ou(()=>{const p=e[a];jt(g,p)&&(g=p,c())}),{get(){return s(),l.get?l.get(g):g},set(p){const h=o.vnode.props;!(h&&(a in h||r in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${r}`in h||`onUpdate:${d}`in h))&&jt(p,g)&&(g=p,c()),o.emit(`update:${a}`,l.set?l.set(p):p)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let s=0;return{next(){return s<2?{value:s++?e[f]||{}:m,done:!1}:{done:!0}}}},m}function W(e,a,l){const o=arguments.length;return o===2?Ge(a)&&!he(a)?kt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&kt(l)&&(l=[l]),t(e,a,l))}function uf(){}function cf(e,a,l,o){const r=l[o];if(r&&Ac(r,e))return r;const d=a();return d.memo=e.slice(),l[o]=d}function Ac(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let o=0;o<l.length;o++)if(jt(l[o],a[o]))return!1;return Ui>0&&wt&&wt.push(e),!0}const kc="3.4.15",df=yt,mf=Gm,pf=la,ff=Lu,gf={createComponentInstance:vc,setupComponent:yc,renderComponentRoot:El,setCurrentRenderingInstance:ll,isVNode:kt,normalizeVNode:Bt},hf=gf,_f=null,bf=null,vf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sf="http://www.w3.org/2000/svg",yf="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,lr=bi&&bi.createElement("template"),wf={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,o)=>{const r=a==="svg"?bi.createElementNS(Sf,e):a==="mathml"?bi.createElementNS(yf,e):bi.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>bi.createTextNode(e),createComment:e=>bi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,o,r,d){const m=l?l.previousSibling:a.lastChild;if(r&&(r===d||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),l),!(r===d||!(r=r.nextSibling)););else{lr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=lr.content;if(o==="svg"||o==="mathml"){const s=f.firstChild;for(;s.firstChild;)f.appendChild(s.firstChild);f.removeChild(s)}a.insertBefore(f,l)}return[m?m.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},mi="transition",Ea="animation",Sa=Symbol("_vtc"),_n=(e,{slots:a})=>W(ju,$c(e),a);_n.displayName="Transition";const xc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cf=_n.props=Ke({},ns,xc),Ti=(e,a=[])=>{he(e)?e.forEach(l=>l(...a)):e&&e(...a)},nr=e=>e?he(e)?e.some(a=>a.length>1):e.length>1:!1;function $c(e){const a={};for(const Y in e)Y in xc||(a[Y]=e[Y]);if(e.css===!1)return a;const{name:l="v",type:o,duration:r,enterFromClass:d=`${l}-enter-from`,enterActiveClass:m=`${l}-enter-active`,enterToClass:f=`${l}-enter-to`,appearFromClass:s=d,appearActiveClass:c=m,appearToClass:g=f,leaveFromClass:p=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:w=`${l}-leave-to`}=e,b=Af(r),C=b&&b[0],$=b&&b[1],{onBeforeEnter:D,onEnter:_,onEnterCancelled:v,onLeave:x,onLeaveCancelled:T,onBeforeAppear:E=D,onAppear:V=_,onAppearCancelled:M=v}=a,F=(Y,ge,Be)=>{fi(Y,ge?g:f),fi(Y,ge?c:m),Be&&Be()},j=(Y,ge)=>{Y._isLeaving=!1,fi(Y,p),fi(Y,w),fi(Y,h),ge&&ge()},Q=Y=>(ge,Be)=>{const U=Y?V:_,K=()=>F(ge,Y,Be);Ti(U,[ge,K]),or(()=>{fi(ge,Y?s:d),Zt(ge,Y?g:f),nr(U)||sr(ge,o,C,K)})};return Ke(a,{onBeforeEnter(Y){Ti(D,[Y]),Zt(Y,d),Zt(Y,m)},onBeforeAppear(Y){Ti(E,[Y]),Zt(Y,s),Zt(Y,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(Y,ge){Y._isLeaving=!0;const Be=()=>j(Y,ge);Zt(Y,p),Tc(),Zt(Y,h),or(()=>{Y._isLeaving&&(fi(Y,p),Zt(Y,w),nr(x)||sr(Y,o,$,Be))}),Ti(x,[Y,Be])},onEnterCancelled(Y){F(Y,!1),Ti(v,[Y])},onAppearCancelled(Y){F(Y,!0),Ti(M,[Y])},onLeaveCancelled(Y){j(Y),Ti(T,[Y])}})}function Af(e){if(e==null)return null;if(Ge(e))return[zn(e.enter),zn(e.leave)];{const a=zn(e);return[a,a]}}function zn(e){return Vl(e)}function Zt(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[Sa]||(e[Sa]=new Set)).add(a)}function fi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[Sa];l&&(l.delete(a),l.size||(e[Sa]=void 0))}function or(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let kf=0;function sr(e,a,l,o){const r=e._endId=++kf,d=()=>{r===e._endId&&o()};if(l)return setTimeout(d,l);const{type:m,timeout:f,propCount:s}=Bc(e,a);if(!m)return o();const c=m+"end";let g=0;const p=()=>{e.removeEventListener(c,h),d()},h=w=>{w.target===e&&++g>=s&&p()};setTimeout(()=>{g<s&&p()},f+1),e.addEventListener(c,h)}function Bc(e,a){const l=window.getComputedStyle(e),o=b=>(l[b]||"").split(", "),r=o(`${mi}Delay`),d=o(`${mi}Duration`),m=rr(r,d),f=o(`${Ea}Delay`),s=o(`${Ea}Duration`),c=rr(f,s);let g=null,p=0,h=0;a===mi?m>0&&(g=mi,p=m,h=d.length):a===Ea?c>0&&(g=Ea,p=c,h=s.length):(p=Math.max(m,c),g=p>0?m>c?mi:Ea:null,h=g?g===mi?d.length:s.length:0);const w=g===mi&&/\b(transform|all)(,|$)/.test(o(`${mi}Property`).toString());return{type:g,timeout:p,propCount:h,hasTransform:w}}function rr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,o)=>ur(l)+ur(e[o])))}function ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Tc(){return document.body.offsetHeight}function xf(e,a,l){const o=e[Sa];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const ps=Symbol("_vod"),Dc={beforeMount(e,{value:a},{transition:l}){e[ps]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):za(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:o}){!a!=!l&&(o?a?(o.beforeEnter(e),za(e,!0),o.enter(e)):o.leave(e,()=>{za(e,!1)}):za(e,a))},beforeUnmount(e,{value:a}){za(e,a)}};function za(e,a){e.style.display=a?e[ps]:"none"}function $f(){Dc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Lc=Symbol("");function Bf(e){const a=Xt();if(!a)return;const l=a.ut=(r=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>vo(d,r))},o=()=>{const r=e(a.proxy);bo(a.subTree,r),l(r)};Nu(o),ki(()=>{const r=new MutationObserver(o);r.observe(a.subTree.el.parentNode,{childList:!0}),Zi(()=>r.disconnect())})}function bo(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{bo(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)vo(e.el,a);else if(e.type===Ae)e.children.forEach(l=>bo(l,a));else if(e.type===Hi){let{el:l,anchor:o}=e;for(;l&&(vo(l,a),l!==o);)l=l.nextSibling}}function vo(e,a){if(e.nodeType===1){const l=e.style;let o="";for(const r in a)l.setProperty(`--${r}`,a[r]),o+=`--${r}: ${a[r]};`;l[Lc]=o}}function Tf(e,a,l){const o=e.style,r=o.display,d=Xe(l);if(l&&!d){if(a&&!Xe(a))for(const m in a)l[m]==null&&So(o,m,"");for(const m in l)So(o,m,l[m])}else if(d){if(a!==l){const m=o[Lc];m&&(l+=";"+m),o.cssText=l}}else a&&e.removeAttribute("style");ps in e&&(o.display=r)}const cr=/\s*!important$/;function So(e,a,l){if(he(l))l.forEach(o=>So(e,a,o));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const o=Df(e,a);cr.test(l)?e.setProperty(Dt(o),l.replace(cr,""),"important"):e[o]=l}}const dr=["Webkit","Moz","ms"],Rn={};function Df(e,a){const l=Rn[a];if(l)return l;let o=vt(a);if(o!=="filter"&&o in e)return Rn[a]=o;o=dl(o);for(let r=0;r<dr.length;r++){const d=dr[r]+o;if(d in e)return Rn[a]=d}return a}const mr="http://www.w3.org/1999/xlink";function Lf(e,a,l,o,r){if(o&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(mr,a.slice(6,a.length)):e.setAttributeNS(mr,a,l);else{const d=om(a);l==null||d&&!lu(l)?e.removeAttribute(a):e.setAttribute(a,d?"":l)}}function If(e,a,l,o,r,d,m){if(a==="innerHTML"||a==="textContent"){o&&m(o,r,d),e[a]=l??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=l;const c=f==="OPTION"?e.getAttribute("value"):e.value,g=l??"";c!==g&&(e.value=g),l==null&&e.removeAttribute(a);return}let s=!1;if(l===""||l==null){const c=typeof e[a];c==="boolean"?l=lu(l):l==null&&c==="string"?(l="",s=!0):c==="number"&&(l=0,s=!0)}try{e[a]=l}catch{}s&&e.removeAttribute(a)}function ti(e,a,l,o){e.addEventListener(a,l,o)}function Ef(e,a,l,o){e.removeEventListener(a,l,o)}const pr=Symbol("_vei");function zf(e,a,l,o,r=null){const d=e[pr]||(e[pr]={}),m=d[a];if(o&&m)m.value=o;else{const[f,s]=Rf(a);if(o){const c=d[a]=Vf(o,r);ti(e,f,c,s)}else m&&(Ef(e,f,m,s),d[a]=void 0)}}const fr=/(?:Once|Passive|Capture)$/;function Rf(e){let a;if(fr.test(e)){a={};let o;for(;o=e.match(fr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),a]}let Pn=0;const Pf=Promise.resolve(),Ff=()=>Pn||(Pf.then(()=>Pn=0),Pn=Date.now());function Vf(e,a){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;Et(Mf(o,l.value),a,5,[o])};return l.value=e,l.attached=Ff(),l}function Mf(e,a){if(he(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(o=>r=>!r._stopped&&o&&o(r))}else return a}const gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hf=(e,a,l,o,r,d,m,f,s)=>{const c=r==="svg";a==="class"?xf(e,o,c):a==="style"?Tf(e,l,o):cl(a)?Fo(a)||zf(e,a,l,o,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Nf(e,a,o,c))?If(e,a,o,d,m,f,s):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Lf(e,a,o,c))};function Nf(e,a,l,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&gr(a)&&Ce(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gr(a)&&Xe(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function Ic(e,a){const l=R(e);class o extends bn{constructor(d){super(l,d,a)}}return o.def=l,o}/*! #__NO_SIDE_EFFECTS__ */const Of=e=>Ic(e,jc),qf=typeof HTMLElement<"u"?HTMLElement:class{};class bn extends qf{constructor(a,l={},o){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),$a(()=>{this._connected||(Jl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const r of o)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,r=!1)=>{const{props:d,styles:m}=o;let f;if(d&&!he(d))for(const s in d){const c=d[s];(c===Number||c&&c.type===Number)&&(s in this._props&&(this._props[s]=Vl(this._props[s])),(f||(f=Object.create(null)))[vt(s)]=!0)}this._numberProps=f,r&&this._resolveProps(o),this._applyStyles(m),this._update()},l=this._def.__asyncLoader;l?l().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,o=he(l)?l:Object.keys(l||{});for(const r of Object.keys(this))r[0]!=="_"&&o.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of o.map(vt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(d){this._setProp(r,d)}})}_setAttr(a){let l=this.getAttribute(a);const o=vt(a);this._numberProps&&this._numberProps[o]&&(l=Vl(l)),this._setProp(o,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,o=!0,r=!0){l!==this._props[a]&&(this._props[a]=l,r&&this._instance&&this._update(),o&&(l===!0?this.setAttribute(Dt(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Dt(a),l+""):l||this.removeAttribute(Dt(a))))}_update(){Jl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Ke({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const o=(d,m)=>{this.dispatchEvent(new CustomEvent(d,{detail:m}))};l.emit=(d,...m)=>{o(d,m),Dt(d)!==d&&o(Dt(d),m)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof bn){l.parent=r._instance,l.provides=r._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function jf(e="$style"){{const a=Xt();if(!a)return qe;const l=a.type.__cssModules;if(!l)return qe;const o=l[e];return o||qe}}const Ec=new WeakMap,zc=new WeakMap,Ul=Symbol("_moveCb"),hr=Symbol("_enterCb"),Rc={name:"TransitionGroup",props:Ke({},Cf,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=Xt(),o=ls();let r,d;return mn(()=>{if(!r.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!Wf(r[0].el,l.vnode.el,m))return;r.forEach(Uf),r.forEach(Yf);const f=r.filter(Jf);Tc(),f.forEach(s=>{const c=s.el,g=c.style;Zt(c,m),g.transform=g.webkitTransform=g.transitionDuration="";const p=c[Ul]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",p),c[Ul]=null,fi(c,m))};c.addEventListener("transitionend",p)})}),()=>{const m=Ee(e),f=$c(m);let s=m.tag||Ae;r=d,d=a.default?cn(a.default()):[];for(let c=0;c<d.length;c++){const g=d[c];g.key!=null&&qi(g,va(g,f,o,l))}if(r)for(let c=0;c<r.length;c++){const g=r[c];qi(g,va(g,f,o,l)),Ec.set(g,g.el.getBoundingClientRect())}return t(s,null,d)}}},Gf=e=>delete e.mode;Rc.props;const Pc=Rc;function Uf(e){const a=e.el;a[Ul]&&a[Ul](),a[hr]&&a[hr]()}function Yf(e){zc.set(e,e.el.getBoundingClientRect())}function Jf(e){const a=Ec.get(e),l=zc.get(e),o=a.left-l.left,r=a.top-l.top;if(o||r){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${o}px,${r}px)`,d.transitionDuration="0s",e}}function Wf(e,a,l){const o=e.cloneNode(),r=e[Sa];r&&r.forEach(f=>{f.split(/\s+/).forEach(s=>s&&o.classList.remove(s))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(o);const{hasTransform:m}=Bc(o);return d.removeChild(o),m}const Ai=e=>{const a=e.props["onUpdate:modelValue"]||!1;return he(a)?l=>ua(a,l):a};function Kf(e){e.target.composing=!0}function _r(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign"),Yl={created(e,{modifiers:{lazy:a,trim:l,number:o}},r){e[Ht]=Ai(r);const d=o||r.props&&r.props.type==="number";ti(e,a?"change":"input",m=>{if(m.target.composing)return;let f=e.value;l&&(f=f.trim()),d&&(f=Za(f)),e[Ht](f)}),l&&ti(e,"change",()=>{e.value=e.value.trim()}),a||(ti(e,"compositionstart",Kf),ti(e,"compositionend",_r),ti(e,"change",_r))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:o,number:r}},d){if(e[Ht]=Ai(d),e.composing)return;const m=r||e.type==="number"?Za(e.value):e.value,f=a??"";m!==f&&(document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===f)||(e.value=f))}},fs={deep:!0,created(e,a,l){e[Ht]=Ai(l),ti(e,"change",()=>{const o=e._modelValue,r=ya(e),d=e.checked,m=e[Ht];if(he(o)){const f=tn(o,r),s=f!==-1;if(d&&!s)m(o.concat(r));else if(!d&&s){const c=[...o];c.splice(f,1),m(c)}}else if(Wi(o)){const f=new Set(o);d?f.add(r):f.delete(r),m(f)}else m(Vc(e,d))})},mounted:br,beforeUpdate(e,a,l){e[Ht]=Ai(l),br(e,a,l)}};function br(e,{value:a,oldValue:l},o){e._modelValue=a,he(a)?e.checked=tn(a,o.props.value)>-1:Wi(a)?e.checked=a.has(o.props.value):a!==l&&(e.checked=li(a,Vc(e,!0)))}const gs={created(e,{value:a},l){e.checked=li(a,l.props.value),e[Ht]=Ai(l),ti(e,"change",()=>{e[Ht](ya(e))})},beforeUpdate(e,{value:a,oldValue:l},o){e[Ht]=Ai(o),a!==l&&(e.checked=li(a,o.props.value))}},Fc={deep:!0,created(e,{value:a,modifiers:{number:l}},o){const r=Wi(a);ti(e,"change",()=>{const d=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>l?Za(ya(m)):ya(m));e[Ht](e.multiple?r?new Set(d):d:d[0]),e._assigning=!0,$a(()=>{e._assigning=!1})}),e[Ht]=Ai(o)},mounted(e,{value:a,oldValue:l,modifiers:{number:o}}){vr(e,a,l,o)},beforeUpdate(e,a,l){e[Ht]=Ai(l)},updated(e,{value:a,oldValue:l,modifiers:{number:o}}){e._assigning||vr(e,a,l,o)}};function vr(e,a,l,o){const r=e.multiple,d=he(a);if(!(r&&!d&&!Wi(a))&&!(d&&li(a,l))){for(let m=0,f=e.options.length;m<f;m++){const s=e.options[m],c=ya(s);if(r)if(d){const g=typeof c;g==="string"||g==="number"?s.selected=a.includes(o?Za(c):c):s.selected=tn(a,c)>-1}else s.selected=a.has(c);else if(li(ya(s),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ya(e){return"_value"in e?e._value:e.value}function Vc(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const Mc={created(e,a,l){Bl(e,a,l,null,"created")},mounted(e,a,l){Bl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,o){Bl(e,a,l,o,"beforeUpdate")},updated(e,a,l,o){Bl(e,a,l,o,"updated")}};function Hc(e,a){switch(e){case"SELECT":return Fc;case"TEXTAREA":return Yl;default:switch(a){case"checkbox":return fs;case"radio":return gs;default:return Yl}}}function Bl(e,a,l,o,r){const m=Hc(e.tagName,l.props&&l.props.type)[r];m&&m(e,a,l,o)}function Xf(){Yl.getSSRProps=({value:e})=>({value:e}),gs.getSSRProps=({value:e},a)=>{if(a.props&&li(a.props.value,e))return{checked:!0}},fs.getSSRProps=({value:e},a)=>{if(he(e)){if(a.props&&tn(e,a.props.value)>-1)return{checked:!0}}else if(Wi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},Mc.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=Hc(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const Qf=["ctrl","shift","alt","meta"],Zf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>Qf.some(l=>e[`${l}Key`]&&!a.includes(l))},zt=(e,a)=>{const l=e._withMods||(e._withMods={}),o=a.join(".");return l[o]||(l[o]=(r,...d)=>{for(let m=0;m<a.length;m++){const f=Zf[a[m]];if(f&&f(r,a))return}return e(r,...d)})},eg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tg=(e,a)=>{const l=e._withKeys||(e._withKeys={}),o=a.join(".");return l[o]||(l[o]=r=>{if(!("key"in r))return;const d=Dt(r.key);if(a.some(m=>m===d||eg[m]===d))return e(r)})},Nc=Ke({patchProp:Hf},wf);let Wa,Sr=!1;function Oc(){return Wa||(Wa=uc(Nc))}function qc(){return Wa=Sr?Wa:cc(Nc),Sr=!0,Wa}const Jl=(...e)=>{Oc().render(...e)},jc=(...e)=>{qc().hydrate(...e)},Gc=(...e)=>{const a=Oc().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=Yc(o);if(!r)return;const d=a._component;!Ce(d)&&!d.render&&!d.template&&(d.template=r.innerHTML),r.innerHTML="";const m=l(r,!1,Uc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),m},a},ig=(...e)=>{const a=qc().createApp(...e),{mount:l}=a;return a.mount=o=>{const r=Yc(o);if(r)return l(r,!0,Uc(r))},a};function Uc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yc(e){return Xe(e)?document.querySelector(e):e}let yr=!1;const ag=()=>{yr||(yr=!0,Xf(),$f())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const lg=()=>{},ng=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ju,BaseTransitionPropsValidators:ns,Comment:ht,DeprecationTypes:vf,EffectScope:No,ErrorCodes:jm,ErrorTypeStrings:mf,Fragment:Ae,KeepAlive:fp,ReactiveEffect:ba,Static:Hi,Suspense:lp,Teleport:fn,Text:Gi,TrackOpTypes:Nm,Transition:_n,TransitionGroup:Pc,TriggerOpTypes:Om,VueElement:bn,assertNumber:qm,callWithAsyncErrorHandling:Et,callWithErrorHandling:ai,camelize:vt,capitalize:dl,cloneVNode:Kt,compatUtils:bf,compile:lg,computed:H,createApp:Gc,createBlock:B,createCommentVNode:ds,createElementBlock:be,createElementVNode:S,createHydrationRenderer:cc,createPropsRestProxy:Tp,createRenderer:uc,createSSRApp:ig,createSlots:hp,createStaticVNode:Zp,createTextVNode:n,createVNode:t,customRef:xu,defineAsyncComponent:mp,defineComponent:R,defineCustomElement:Ic,defineEmits:Sp,defineExpose:yp,defineModel:Ap,defineOptions:wp,defineProps:vp,defineSSRCustomElement:Of,defineSlots:Cp,devtools:pf,effect:cm,effectScope:rm,getCurrentInstance:Xt,getCurrentScope:Oo,getTransitionRawChildren:cn,guardReactiveProps:bc,h:W,handleError:Qi,hasInjectionContext:Vp,hydrate:jc,initCustomFormatter:uf,initDirectivesForSSR:ag,inject:He,isMemoSame:Ac,isProxy:Yo,isReactive:Vi,isReadonly:Oi,isRef:pt,isRuntimeOnly:nf,isShallow:el,isVNode:kt,markRaw:Jo,mergeDefaults:$p,mergeModels:Bp,mergeProps:ea,nextTick:$a,normalizeClass:ml,normalizeProps:lm,normalizeStyle:xa,onActivated:os,onBeforeMount:Yu,onBeforeUnmount:pn,onBeforeUpdate:Ju,onDeactivated:ss,onErrorCaptured:Qu,onMounted:ki,onRenderTracked:Xu,onRenderTriggered:Ku,onScopeDispose:su,onServerPrefetch:Wu,onUnmounted:Zi,onUpdated:mn,openBlock:k,popScopeId:zu,provide:mt,proxyRefs:Xo,pushScopeId:Eu,queuePostFlushCb:Hl,reactive:si,readonly:Uo,ref:G,registerRuntimeCompiler:lf,render:Jl,renderList:Ze,renderSlot:ji,resolveComponent:y,resolveDirective:un,resolveDynamicComponent:Pu,resolveFilter:_f,resolveTransitionHooks:va,setBlockTracking:mo,setDevtoolsHook:ff,setTransitionHooks:qi,shallowReactive:wu,shallowReadonly:Lm,shallowRef:Au,ssrContextKey:Mu,ssrUtils:hf,stop:dm,toDisplayString:Te,toHandlerKey:Ga,toHandlers:_p,toRaw:Ee,toRef:io,toRefs:Vm,toValue:Rm,transformVNodeArgs:Xp,triggerRef:zm,unref:u,useAttrs:ec,useCssModule:jf,useCssVars:Bf,useModel:rf,useSSRContext:Hu,useSlots:xp,useTransitionState:ls,vModelCheckbox:fs,vModelDynamic:Mc,vModelRadio:gs,vModelSelect:Fc,vModelText:Yl,vShow:Dc,version:kc,warn:df,watch:gt,watchEffect:as,watchPostEffect:Nu,watchSyncEffect:Ou,withAsyncContext:Dp,withCtx:i,withDefaults:kp,withDirectives:yi,withKeys:tg,withMemo:cf,withModifiers:zt,withScopeId:Xm},Symbol.toStringTag,{value:"Module"})),og=R({name:"App"}),Le=(e,a)=>{const l=e.__vccOpts||e;for(const[o,r]of a)l[o]=r;return l};function sg(e,a,l,o,r,d){const m=y("router-view");return k(),B(m)}const rg=Le(og,[["render",sg]]),ug="modulepreload",cg=function(e){return"/vue-fomantic-ui/"+e},wr={},Cr=function(a,l,o){let r=Promise.resolve();if(l&&l.length>0){const d=document.getElementsByTagName("link");r=Promise.all(l.map(m=>{if(m=cg(m),m in wr)return;wr[m]=!0;const f=m.endsWith(".css"),s=f?'[rel="stylesheet"]':"";if(!!o)for(let p=d.length-1;p>=0;p--){const h=d[p];if(h.href===m&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${s}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":ug,f||(g.as="script",g.crossOrigin=""),g.href=m,document.head.appendChild(g),f)return new Promise((p,h)=>{g.addEventListener("load",p),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${m}`)))})}))}return r.then(()=>a()).catch(d=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Jc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ba=e=>Jc?Symbol(e):"_vr_"+e,Wc=Ba("rvlm"),Ar=Ba("rvd"),vn=Ba("r"),hs=Ba("rl"),yo=Ba("rvl"),na=typeof window<"u";function dg(e){return e.__esModule||Jc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Fn(e,a){const l={};for(const o in a){const r=a[o];l[o]=Array.isArray(r)?r.map(e):e(r)}return l}const Ka=()=>{},mg=/\/$/,pg=e=>e.replace(mg,"");function Vn(e,a,l="/"){let o,r={},d="",m="";const f=a.indexOf("?"),s=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),d=a.slice(f+1,s>-1?s:a.length),r=e(d)),s>-1&&(o=o||a.slice(0,s),m=a.slice(s,a.length)),o=_g(o??a,l),{fullPath:o+(d&&"?")+d+m,path:o,query:r,hash:m}}function fg(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function kr(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function gg(e,a,l){const o=a.matched.length-1,r=l.matched.length-1;return o>-1&&o===r&&wa(a.matched[o],l.matched[r])&&Kc(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function wa(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Kc(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!hg(e[l],a[l]))return!1;return!0}function hg(e,a){return Array.isArray(e)?xr(e,a):Array.isArray(a)?xr(a,e):e===a}function xr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,o)=>l===a[o]):e.length===1&&e[0]===a}function _g(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),o=e.split("/");let r=l.length-1,d,m;for(d=0;d<o.length;d++)if(m=o[d],!(r===1||m==="."))if(m==="..")r--;else break;return l.slice(0,r).join("/")+"/"+o.slice(d-(d===o.length?1:0)).join("/")}var rl;(function(e){e.pop="pop",e.push="push"})(rl||(rl={}));var Xa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xa||(Xa={}));function bg(e){if(!e)if(na){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pg(e)}const vg=/^[^#]+#/;function Sg(e,a){return e.replace(vg,"#")+a}function yg(e,a){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-l.left-(a.left||0),top:o.top-l.top-(a.top||0)}}const Sn=()=>({left:window.pageXOffset,top:window.pageYOffset});function wg(e){let a;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),r=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!r)return;a=yg(r,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function $r(e,a){return(history.state?history.state.position-a:-1)+e}const wo=new Map;function Cg(e,a){wo.set(e,a)}function Ag(e){const a=wo.get(e);return wo.delete(e),a}let kg=()=>location.protocol+"//"+location.host;function Xc(e,a){const{pathname:l,search:o,hash:r}=a,d=e.indexOf("#");if(d>-1){let f=r.includes(e.slice(d))?e.slice(d).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),kr(s,"")}return kr(l,e)+o+r}function xg(e,a,l,o){let r=[],d=[],m=null;const f=({state:h})=>{const w=Xc(e,location),b=l.value,C=a.value;let $=0;if(h){if(l.value=w,a.value=h,m&&m===b){m=null;return}$=C?h.position-C.position:0}else o(w);r.forEach(D=>{D(l.value,b,{delta:$,type:rl.pop,direction:$?$>0?Xa.forward:Xa.back:Xa.unknown})})};function s(){m=l.value}function c(h){r.push(h);const w=()=>{const b=r.indexOf(h);b>-1&&r.splice(b,1)};return d.push(w),w}function g(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:Sn()}),"")}function p(){for(const h of d)h();d=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:s,listen:c,destroy:p}}function Br(e,a,l,o=!1,r=!1){return{back:e,current:a,forward:l,replaced:o,position:window.history.length,scroll:r?Sn():null}}function $g(e){const{history:a,location:l}=window,o={value:Xc(e,l)},r={value:a.state};r.value||d(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(s,c,g){const p=e.indexOf("#"),h=p>-1?(l.host&&document.querySelector("base")?e:e.slice(p))+s:kg()+e+s;try{a[g?"replaceState":"pushState"](c,"",h),r.value=c}catch(w){console.error(w),l[g?"replace":"assign"](h)}}function m(s,c){const g=Ye({},a.state,Br(r.value.back,s,r.value.forward,!0),c,{position:r.value.position});d(s,g,!0),o.value=s}function f(s,c){const g=Ye({},r.value,a.state,{forward:s,scroll:Sn()});d(g.current,g,!0);const p=Ye({},Br(o.value,s,null),{position:g.position+1},c);d(s,p,!1),o.value=s}return{location:o,state:r,push:f,replace:m}}function Bg(e){e=bg(e);const a=$g(e),l=xg(e,a.state,a.location,a.replace);function o(d,m=!0){m||l.pauseListeners(),history.go(d)}const r=Ye({location:"",base:e,go:o,createHref:Sg.bind(null,e)},a,l);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Tg(e){return typeof e=="string"||e&&typeof e=="object"}function Qc(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zc=Ba("nf");var Tr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Tr||(Tr={}));function Ca(e,a){return Ye(new Error,{type:e,[Zc]:!0},a)}function Di(e,a){return e instanceof Error&&Zc in e&&(a==null||!!(e.type&a))}const Dr="[^/]+?",Dg={sensitive:!1,strict:!1,start:!0,end:!0},Lg=/[.+*?^${}()[\]/\\]/g;function Ig(e,a){const l=Ye({},Dg,a),o=[];let r=l.start?"^":"";const d=[];for(const c of e){const g=c.length?[]:[90];l.strict&&!c.length&&(r+="/");for(let p=0;p<c.length;p++){const h=c[p];let w=40+(l.sensitive?.25:0);if(h.type===0)p||(r+="/"),r+=h.value.replace(Lg,"\\$&"),w+=40;else if(h.type===1){const{value:b,repeatable:C,optional:$,regexp:D}=h;d.push({name:b,repeatable:C,optional:$});const _=D||Dr;if(_!==Dr){w+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+x.message)}}let v=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;p||(v=$&&c.length<2?`(?:/${v})`:"/"+v),$&&(v+="?"),r+=v,w+=20,$&&(w+=-8),C&&(w+=-20),_===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(l.strict&&l.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}l.strict||(r+="/?"),l.end?r+="$":l.strict&&(r+="(?:/|$)");const m=new RegExp(r,l.sensitive?"":"i");function f(c){const g=c.match(m),p={};if(!g)return null;for(let h=1;h<g.length;h++){const w=g[h]||"",b=d[h-1];p[b.name]=w&&b.repeatable?w.split("/"):w}return p}function s(c){let g="",p=!1;for(const h of e){(!p||!g.endsWith("/"))&&(g+="/"),p=!1;for(const w of h)if(w.type===0)g+=w.value;else if(w.type===1){const{value:b,repeatable:C,optional:$}=w,D=b in c?c[b]:"";if(Array.isArray(D)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(D)?D.join("/"):D;if(!_)if($)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);g+=_}}return g}return{re:m,score:o,keys:d,parse:f,stringify:s}}function Eg(e,a){let l=0;for(;l<e.length&&l<a.length;){const o=a[l]-e[l];if(o)return o;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function zg(e,a){let l=0;const o=e.score,r=a.score;for(;l<o.length&&l<r.length;){const d=Eg(o[l],r[l]);if(d)return d;l++}return r.length-o.length}const Rg={type:0,value:""},Pg=/[a-zA-Z0-9_]/;function Fg(e){if(!e)return[[]];if(e==="/")return[[Rg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(w){throw new Error(`ERR (${l})/"${c}": ${w}`)}let l=0,o=l;const r=[];let d;function m(){d&&r.push(d),d=[]}let f=0,s,c="",g="";function p(){c&&(l===0?d.push({type:0,value:c}):l===1||l===2||l===3?(d.length>1&&(s==="*"||s==="+")&&a(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:c,regexp:g,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):a("Invalid state to consume buffer"),c="")}function h(){c+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:s==="/"?(c&&p(),m()):s===":"?(p(),l=1):h();break;case 4:h(),l=o;break;case 1:s==="("?l=2:Pg.test(s)?h():(p(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+s:l=3:g+=s;break;case 3:p(),l=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,g="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${c}"`),p(),m(),r}function Vg(e,a,l){const o=Ig(Fg(e.path),l),r=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function Mg(e,a){const l=[],o=new Map;a=Ir({strict:!1,end:!0,sensitive:!1},a);function r(g){return o.get(g)}function d(g,p,h){const w=!h,b=Ng(g);b.aliasOf=h&&h.record;const C=Ir(a,g),$=[b];if("alias"in g){const v=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of v)$.push(Ye({},b,{components:h?h.record.components:b.components,path:x,aliasOf:h?h.record:b}))}let D,_;for(const v of $){const{path:x}=v;if(p&&x[0]!=="/"){const T=p.record.path,E=T[T.length-1]==="/"?"":"/";v.path=p.record.path+(x&&E+x)}if(D=Vg(v,p,C),h?h.alias.push(D):(_=_||D,_!==D&&_.alias.push(D),w&&g.name&&!Lr(D)&&m(g.name)),"children"in b){const T=b.children;for(let E=0;E<T.length;E++)d(T[E],D,h&&h.children[E])}h=h||D,s(D)}return _?()=>{m(_)}:Ka}function m(g){if(Qc(g)){const p=o.get(g);p&&(o.delete(g),l.splice(l.indexOf(p),1),p.children.forEach(m),p.alias.forEach(m))}else{const p=l.indexOf(g);p>-1&&(l.splice(p,1),g.record.name&&o.delete(g.record.name),g.children.forEach(m),g.alias.forEach(m))}}function f(){return l}function s(g){let p=0;for(;p<l.length&&zg(g,l[p])>=0;)p++;l.splice(p,0,g),g.record.name&&!Lr(g)&&o.set(g.record.name,g)}function c(g,p){let h,w={},b,C;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Ca(1,{location:g});C=h.record.name,w=Ye(Hg(p.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),g.params),b=h.stringify(w)}else if("path"in g)b=g.path,h=l.find(_=>_.re.test(b)),h&&(w=h.parse(b),C=h.record.name);else{if(h=p.name?o.get(p.name):l.find(_=>_.re.test(p.path)),!h)throw Ca(1,{location:g,currentLocation:p});C=h.record.name,w=Ye({},p.params,g.params),b=h.stringify(w)}const $=[];let D=h;for(;D;)$.unshift(D.record),D=D.parent;return{name:C,path:b,params:w,matched:$,meta:qg($)}}return e.forEach(g=>d(g)),{addRoute:d,resolve:c,removeRoute:m,getRoutes:f,getRecordMatcher:r}}function Hg(e,a){const l={};for(const o of a)o in e&&(l[o]=e[o]);return l}function Ng(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Og(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Og(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const o in e.components)a[o]=typeof l=="boolean"?l:l[o];return a}function Lr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qg(e){return e.reduce((a,l)=>Ye(a,l.meta),{})}function Ir(e,a){const l={};for(const o in e)l[o]=o in a?a[o]:e[o];return l}const ed=/#/g,jg=/&/g,Gg=/\//g,Ug=/=/g,Yg=/\?/g,td=/\+/g,Jg=/%5B/g,Wg=/%5D/g,id=/%5E/g,Kg=/%60/g,ad=/%7B/g,Xg=/%7C/g,ld=/%7D/g,Qg=/%20/g;function _s(e){return encodeURI(""+e).replace(Xg,"|").replace(Jg,"[").replace(Wg,"]")}function Zg(e){return _s(e).replace(ad,"{").replace(ld,"}").replace(id,"^")}function Co(e){return _s(e).replace(td,"%2B").replace(Qg,"+").replace(ed,"%23").replace(jg,"%26").replace(Kg,"`").replace(ad,"{").replace(ld,"}").replace(id,"^")}function eh(e){return Co(e).replace(Ug,"%3D")}function th(e){return _s(e).replace(ed,"%23").replace(Yg,"%3F")}function ih(e){return e==null?"":th(e).replace(Gg,"%2F")}function Wl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ah(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const d=o[r].replace(td," "),m=d.indexOf("="),f=Wl(m<0?d:d.slice(0,m)),s=m<0?null:Wl(d.slice(m+1));if(f in a){let c=a[f];Array.isArray(c)||(c=a[f]=[c]),c.push(s)}else a[f]=s}return a}function Er(e){let a="";for(let l in e){const o=e[l];if(l=eh(l),o==null){o!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(o)?o.map(d=>d&&Co(d)):[o&&Co(o)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+l,d!=null&&(a+="="+d))})}return a}function lh(e){const a={};for(const l in e){const o=e[l];o!==void 0&&(a[l]=Array.isArray(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return a}function Ra(){let e=[];function a(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function nh(e,a,l){const o=()=>{e[a].delete(l)};Zi(o),ss(o),os(()=>{e[a].add(l)}),e[a].add(l)}function oh(e){const a=He(Wc,{}).value;a&&nh(a,"updateGuards",e)}function vi(e,a,l,o,r){const d=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((m,f)=>{const s=p=>{p===!1?f(Ca(4,{from:l,to:a})):p instanceof Error?f(p):Tg(p)?f(Ca(2,{from:a,to:p})):(d&&o.enterCallbacks[r]===d&&typeof p=="function"&&d.push(p),m())},c=e.call(o&&o.instances[r],a,l,s);let g=Promise.resolve(c);e.length<3&&(g=g.then(s)),g.catch(p=>f(p))})}function Mn(e,a,l,o){const r=[];for(const d of e)for(const m in d.components){let f=d.components[m];if(!(a!=="beforeRouteEnter"&&!d.instances[m]))if(sh(f)){const c=(f.__vccOpts||f)[a];c&&r.push(vi(c,l,o,d,m))}else{let s=f();r.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${d.path}"`));const g=dg(c)?c.default:c;d.components[m]=g;const h=(g.__vccOpts||g)[a];return h&&vi(h,l,o,d,m)()}))}}return r}function sh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zr(e){const a=He(vn),l=He(hs),o=H(()=>a.resolve(u(e.to))),r=H(()=>{const{matched:s}=o.value,{length:c}=s,g=s[c-1],p=l.matched;if(!g||!p.length)return-1;const h=p.findIndex(wa.bind(null,g));if(h>-1)return h;const w=Rr(s[c-2]);return c>1&&Rr(g)===w&&p[p.length-1].path!==w?p.findIndex(wa.bind(null,s[c-2])):h}),d=H(()=>r.value>-1&&ch(l.params,o.value.params)),m=H(()=>r.value>-1&&r.value===l.matched.length-1&&Kc(l.params,o.value.params));function f(s={}){return uh(s)?a[u(e.replace)?"replace":"push"](u(e.to)).catch(Ka):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:d,isExactActive:m,navigate:f}}const rh=R({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zr,setup(e,{slots:a}){const l=si(zr(e)),{options:o}=He(vn),r=H(()=>({[Pr(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[Pr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const d=a.default&&a.default(l);return e.custom?d:W("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:r.value},d)}}}),bs=rh;function uh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function ch(e,a){for(const l in a){const o=a[l],r=e[l];if(typeof o=="string"){if(o!==r)return!1}else if(!Array.isArray(r)||r.length!==o.length||o.some((d,m)=>d!==r[m]))return!1}return!0}function Rr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pr=(e,a,l)=>e??a??l,dh=R({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const o=He(yo),r=H(()=>e.route||o.value),d=He(Ar,0),m=H(()=>r.value.matched[d]);mt(Ar,d+1),mt(Wc,m),mt(yo,r);const f=G();return gt(()=>[f.value,m.value,e.name],([s,c,g],[p,h,w])=>{c&&(c.instances[g]=s,h&&h!==c&&s&&s===p&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),s&&c&&(!h||!wa(c,h)||!p)&&(c.enterCallbacks[g]||[]).forEach(b=>b(s))},{flush:"post"}),()=>{const s=r.value,c=m.value,g=c&&c.components[e.name],p=e.name;if(!g)return Fr(l.default,{Component:g,route:s});const h=c.props[e.name],w=h?h===!0?s.params:typeof h=="function"?h(s):h:null,C=W(g,Ye({},w,a,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(c.instances[p]=null)},ref:f}));return Fr(l.default,{Component:C,route:s})||C}}});function Fr(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const mh=dh;function ph(e){const a=Mg(e.routes,e),l=e.parseQuery||ah,o=e.stringifyQuery||Er,r=e.history,d=Ra(),m=Ra(),f=Ra(),s=Au(pi);let c=pi;na&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Fn.bind(null,J=>""+J),p=Fn.bind(null,ih),h=Fn.bind(null,Wl);function w(J,ue){let re,_e;return Qc(J)?(re=a.getRecordMatcher(J),_e=ue):_e=J,a.addRoute(_e,re)}function b(J){const ue=a.getRecordMatcher(J);ue&&a.removeRoute(ue)}function C(){return a.getRoutes().map(J=>J.record)}function $(J){return!!a.getRecordMatcher(J)}function D(J,ue){if(ue=Ye({},ue||s.value),typeof J=="string"){const $e=Vn(l,J,ue.path),L=a.resolve({path:$e.path},ue),z=r.createHref($e.fullPath);return Ye($e,L,{params:h(L.params),hash:Wl($e.hash),redirectedFrom:void 0,href:z})}let re;if("path"in J)re=Ye({},J,{path:Vn(l,J.path,ue.path).path});else{const $e=Ye({},J.params);for(const L in $e)$e[L]==null&&delete $e[L];re=Ye({},J,{params:p(J.params)}),ue.params=p(ue.params)}const _e=a.resolve(re,ue),Ne=J.hash||"";_e.params=g(h(_e.params));const Oe=fg(o,Ye({},J,{hash:Zg(Ne),path:_e.path})),xe=r.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===Er?lh(J.query):J.query||{}},_e,{redirectedFrom:void 0,href:xe})}function _(J){return typeof J=="string"?Vn(l,J,s.value.path):Ye({},J)}function v(J,ue){if(c!==J)return Ca(8,{from:ue,to:J})}function x(J){return V(J)}function T(J){return x(Ye(_(J),{replace:!0}))}function E(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let _e=typeof re=="function"?re(J):re;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=_(_e):{path:_e},_e.params={}),Ye({query:J.query,hash:J.hash,params:J.params},_e)}}function V(J,ue){const re=c=D(J),_e=s.value,Ne=J.state,Oe=J.force,xe=J.replace===!0,$e=E(re);if($e)return V(Ye(_($e),{state:Ne,force:Oe,replace:xe}),ue||re);const L=re;L.redirectedFrom=ue;let z;return!Oe&&gg(o,_e,re)&&(z=Ca(16,{to:L,from:_e}),Je(_e,_e,!0,!1)),(z?Promise.resolve(z):F(L,_e)).catch(q=>Di(q)?q:me(q,L,_e)).then(q=>{if(q){if(Di(q,2))return V(Ye(_(q.to),{state:Ne,force:Oe,replace:xe}),ue||L)}else q=Q(L,_e,!0,xe,Ne);return j(L,_e,q),q})}function M(J,ue){const re=v(J,ue);return re?Promise.reject(re):Promise.resolve()}function F(J,ue){let re;const[_e,Ne,Oe]=fh(J,ue);re=Mn(_e.reverse(),"beforeRouteLeave",J,ue);for(const $e of _e)$e.leaveGuards.forEach(L=>{re.push(vi(L,J,ue))});const xe=M.bind(null,J,ue);return re.push(xe),aa(re).then(()=>{re=[];for(const $e of d.list())re.push(vi($e,J,ue));return re.push(xe),aa(re)}).then(()=>{re=Mn(Ne,"beforeRouteUpdate",J,ue);for(const $e of Ne)$e.updateGuards.forEach(L=>{re.push(vi(L,J,ue))});return re.push(xe),aa(re)}).then(()=>{re=[];for(const $e of J.matched)if($e.beforeEnter&&!ue.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const L of $e.beforeEnter)re.push(vi(L,J,ue));else re.push(vi($e.beforeEnter,J,ue));return re.push(xe),aa(re)}).then(()=>(J.matched.forEach($e=>$e.enterCallbacks={}),re=Mn(Oe,"beforeRouteEnter",J,ue),re.push(xe),aa(re))).then(()=>{re=[];for(const $e of m.list())re.push(vi($e,J,ue));return re.push(xe),aa(re)}).catch($e=>Di($e,8)?$e:Promise.reject($e))}function j(J,ue,re){for(const _e of f.list())_e(J,ue,re)}function Q(J,ue,re,_e,Ne){const Oe=v(J,ue);if(Oe)return Oe;const xe=ue===pi,$e=na?history.state:{};re&&(_e||xe?r.replace(J.fullPath,Ye({scroll:xe&&$e&&$e.scroll},Ne)):r.push(J.fullPath,Ne)),s.value=J,Je(J,ue,re,xe),De()}let Y;function ge(){Y=r.listen((J,ue,re)=>{const _e=D(J),Ne=E(_e);if(Ne){V(Ye(Ne,{replace:!0}),_e).catch(Ka);return}c=_e;const Oe=s.value;na&&Cg($r(Oe.fullPath,re.delta),Sn()),F(_e,Oe).catch(xe=>Di(xe,12)?xe:Di(xe,2)?(V(xe.to,_e).then($e=>{Di($e,20)&&!re.delta&&re.type===rl.pop&&r.go(-1,!1)}).catch(Ka),Promise.reject()):(re.delta&&r.go(-re.delta,!1),me(xe,_e,Oe))).then(xe=>{xe=xe||Q(_e,Oe,!1),xe&&(re.delta?r.go(-re.delta,!1):re.type===rl.pop&&Di(xe,20)&&r.go(-1,!1)),j(_e,Oe,xe)}).catch(Ka)})}let Be=Ra(),U=Ra(),K;function me(J,ue,re){De(J);const _e=U.list();return _e.length?_e.forEach(Ne=>Ne(J,ue,re)):console.error(J),Promise.reject(J)}function ae(){return K&&s.value!==pi?Promise.resolve():new Promise((J,ue)=>{Be.add([J,ue])})}function De(J){K||(K=!0,ge(),Be.list().forEach(([ue,re])=>J?re(J):ue()),Be.reset())}function Je(J,ue,re,_e){const{scrollBehavior:Ne}=e;if(!na||!Ne)return Promise.resolve();const Oe=!re&&Ag($r(J.fullPath,0))||(_e||!re)&&history.state&&history.state.scroll||null;return $a().then(()=>Ne(J,ue,Oe)).then(xe=>xe&&wg(xe)).catch(xe=>me(xe,J,ue))}const st=J=>r.go(J);let Ue;const Qt=new Set;return{currentRoute:s,addRoute:w,removeRoute:b,hasRoute:$,getRoutes:C,resolve:D,options:e,push:x,replace:T,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:d.add,beforeResolve:m.add,afterEach:f.add,onError:U.add,isReady:ae,install(J){const ue=this;J.component("RouterLink",bs),J.component("RouterView",mh),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>u(s)}),na&&!Ue&&s.value===pi&&(Ue=!0,x(r.location).catch(Ne=>{}));const re={};for(const Ne in pi)re[Ne]=H(()=>s.value[Ne]);J.provide(vn,ue),J.provide(hs,si(re)),J.provide(yo,s);const _e=J.unmount;Qt.add(J),J.unmount=function(){Qt.delete(J),Qt.size<1&&(c=pi,Y&&Y(),s.value=pi,Ue=!1,K=!1),_e()}}}}function aa(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function fh(e,a){const l=[],o=[],r=[],d=Math.max(a.matched.length,e.matched.length);for(let m=0;m<d;m++){const f=a.matched[m];f&&(e.matched.find(c=>wa(c,f))?o.push(f):l.push(f));const s=e.matched[m];s&&(a.matched.find(c=>wa(c,s))||r.push(s))}return[l,o,r]}function nd(){return He(vn)}function od(){return He(hs)}const gh={__name:"Navbar",props:["onClick"],setup(e){const a=G(),l=nd();function o(r){return r.charAt(0).toUpperCase()+r.slice(1)}return as(()=>{const m=l.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=o(m[1]))}),(r,d)=>{const m=y("SuiIcon"),f=y("SuiMenuItem"),s=y("SuiMenu");return k(),B(s,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1})}}},hh=Le(gh,[["__scopeId","data-v-338afb35"]]),_h=R({name:"Sidebar",setup(){const e=od();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),bh=S("strong",null," Fomantic UI Vue ",-1),vh=S("b",null,"Getting Started",-1);function Sh(e,a,l,o,r,d){const m=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),c=y("sui-menu");return k(),B(c,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[bh]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[vh]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.elements,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.collections,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.views,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.modules,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const yh=Le(_h,[["render",Sh]]),wh={class:"sidemenu"},Ch={style:{flex:"1","overflow-y":"scroll"}},Ah={__name:"Sidebar",setup(e){return(a,l)=>(k(),be("div",wh,[S("div",Ch,[t(yh)])]))}},kh=Le(Ah,[["__scopeId","data-v-379ef704"]]),xh=R({name:"Sidebar",setup(){const e=od();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),$h=S("strong",null," Fomantic UI Vue ",-1),Bh=S("b",null,"Getting Started",-1);function Th(e,a,l,o,r,d){const m=y("sui-menu-item"),f=y("sui-menu-header"),s=y("sui-menu-menu"),c=y("sui-sidebar");return k(),B(c,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[$h]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[Bh]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.elements,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.collections,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.views,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(s,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.modules,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Dh=Le(xh,[["render",Th]]),Lh={class:"pusher",style:{height:"100vh"}},Ih={class:"article"},Eh={__name:"Home",setup(e){const a=G(!1),l=()=>a.value=!a.value;return oh(()=>{a.value=!1}),(o,r)=>{const d=y("router-view"),m=y("SuiSegment");return k(),B(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(Dh,{visible:a.value},null,8,["visible"]),S("div",Lh,[t(kh),t(hh,{"on-click":l}),S("div",Ih,[t(d)])])]),_:1})}}},zh=Le(Eh,[["__scopeId","data-v-0bfd4ee9"]]),Rh={__name:"DocSections",props:["docs"],setup(e){const a=e,l=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,r)=>{const d=y("SuiHeader");return k(!0),be(Ae,null,Ze(l.value,(m,f)=>(k(),be(Ae,{key:m},[t(d,{as:"h2",dividing:"",style:xa({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Te(m),1)]),_:2},1032,["style"]),(k(!0),be(Ae,null,Ze(e.docs.filter(s=>s.category===m),(s,c)=>(k(),B(Pu(s.component),{key:s.label+"_"+c,id:s.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},Ph=e=>(Eu("data-v-e2ae2e49"),e=e(),zu(),e),Fh={class:"item"},Vh=Ph(()=>S("i",{class:"dropdown icon"},null,-1)),Mh={class:"content menu active"},Hh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=ec(),l=m=>{m.preventDefault();const f=document.getElementById(a);f.open?r(f):(f.open=!0,o(f))},o=m=>{m.querySelector(".title").classList.add("active");const s=m.querySelector(".content"),c=s.offsetHeight;s.style.maxHeight=0,requestAnimationFrame(()=>{s.style.maxHeight=`${c}px`});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),g.abort()},{signal:g.signal})},r=m=>{const f=m.querySelector(".title"),s=m.querySelector(".content"),c=s.offsetHeight;s.style.maxHeight=`${c}px`,requestAnimationFrame(()=>{s.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;s.addEventListener("transitionend",()=>{s.removeAttribute("style"),m.open=!1,g.abort()},{signal:g.signal})},d=(m,f)=>{m.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,f)=>(k(),be("details",Fh,[S("summary",{class:"title",onClick:l},[Vh,S("b",null,Te(e.header),1)]),S("div",Mh,[(k(!0),be(Ae,null,Ze(e.items,s=>(k(),B(u(bs),{to:`#${s.id}`,class:"item",onClick:c=>d(c,s.id)},{default:i(()=>[n(Te(s.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Nh=Le(Hh,[["__scopeId","data-v-e2ae2e49"]]),Oh={class:"sticky"},qh={class:"ui vertical following fluid accordion text large menu"},jh={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(o=>o.category))];return(o,r)=>{const d=y("SuiHeader"),m=y("SuiRail");return k(),B(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",Oh,[t(d,{as:"h3"},{default:i(()=>[n(Te(e.title),1)]),_:1}),S("div",qh,[(k(),be(Ae,null,Ze(l,f=>t(Nh,{id:`${f}_link`,header:f,items:e.links.filter(s=>s.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},Gh=Le(jh,[["__scopeId","data-v-bd90305d"]]),Uh={class:"intro"},Yh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(l,o)=>{const r=y("SuiHeaderSubheader"),d=y("SuiHeader"),m=y("SuiDivider"),f=y("SuiIcon"),s=y("SuiMenuItem"),c=y("SuiPopup"),g=y("SuiMenu"),p=y("SuiContainer"),h=y("SuiSegment");return k(),be("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(p,{class:"main"},{default:i(()=>[S("div",Uh,[t(d,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(r,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1}),t(m,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(s,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(c,{trigger:a.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(p,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?(k(),be(Ae,{key:0},[t(Rh,{docs:e.componentDocs},null,8,["docs"]),t(Gh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ds("",!0),ji(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},ut=Le(Yh,[["__scopeId","data-v-d22eb33f"]]);var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Jh(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(l,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}),l}var rd={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,m={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function _(v){return v instanceof s?new s(v.type,_(v.content),v.alias):Array.isArray(v)?v.map(_):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(v,x){x=x||{};var T,E;switch(f.util.type(v)){case"Object":if(E=f.util.objId(v),x[E])return x[E];T={},x[E]=T;for(var V in v)v.hasOwnProperty(V)&&(T[V]=_(v[V],x));return T;case"Array":return E=f.util.objId(v),x[E]?x[E]:(T=[],x[E]=T,v.forEach(function(M,F){T[F]=_(M,x)}),T);default:return v}},getLanguage:function(_){for(;_;){var v=r.exec(_.className);if(v)return v[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,v){_.className=_.className.replace(RegExp(r,"gi"),""),_.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(_){var v=document.getElementsByTagName("script");for(var x in v)if(v[x].src==_)return v[x]}return null}},isActive:function(_,v,x){for(var T="no-"+v;_;){var E=_.classList;if(E.contains(v))return!0;if(E.contains(T))return!1;_=_.parentElement}return!!x}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(_,v){var x=f.util.clone(f.languages[_]);for(var T in v)x[T]=v[T];return x},insertBefore:function(_,v,x,T){T=T||f.languages;var E=T[_],V={};for(var M in E)if(E.hasOwnProperty(M)){if(M==v)for(var F in x)x.hasOwnProperty(F)&&(V[F]=x[F]);x.hasOwnProperty(M)||(V[M]=E[M])}var j=T[_];return T[_]=V,f.languages.DFS(f.languages,function(Q,Y){Y===j&&Q!=_&&(this[Q]=V)}),V},DFS:function _(v,x,T,E){E=E||{};var V=f.util.objId;for(var M in v)if(v.hasOwnProperty(M)){x.call(v,M,v[M],T||M);var F=v[M],j=f.util.type(F);j==="Object"&&!E[V(F)]?(E[V(F)]=!0,_(F,x,null,E)):j==="Array"&&!E[V(F)]&&(E[V(F)]=!0,_(F,x,M,E))}}},plugins:{},highlightAll:function(_,v){f.highlightAllUnder(document,_,v)},highlightAllUnder:function(_,v,x){var T={callback:x,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),f.hooks.run("before-all-elements-highlight",T);for(var E=0,V;V=T.elements[E++];)f.highlightElement(V,v===!0,T.callback)},highlightElement:function(_,v,x){var T=f.util.getLanguage(_),E=f.languages[T];f.util.setLanguage(_,T);var V=_.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(V,T);var M=_.textContent,F={element:_,language:T,grammar:E,code:M};function j(Y){F.highlightedCode=Y,f.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,f.hooks.run("after-highlight",F),f.hooks.run("complete",F),x&&x.call(F.element)}if(f.hooks.run("before-sanity-check",F),V=F.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!F.code){f.hooks.run("complete",F),x&&x.call(F.element);return}if(f.hooks.run("before-highlight",F),!F.grammar){j(f.util.encode(F.code));return}if(v&&o.Worker){var Q=new Worker(f.filename);Q.onmessage=function(Y){j(Y.data)},Q.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else j(f.highlight(F.code,F.grammar,F.language))},highlight:function(_,v,x){var T={code:_,grammar:v,language:x};if(f.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=f.tokenize(T.code,T.grammar),f.hooks.run("after-tokenize",T),s.stringify(f.util.encode(T.tokens),T.language)},tokenize:function(_,v){var x=v.rest;if(x){for(var T in x)v[T]=x[T];delete v.rest}var E=new p;return h(E,E.head,_),g(_,E,v,E.head,0),b(E)},hooks:{all:{},add:function(_,v){var x=f.hooks.all;x[_]=x[_]||[],x[_].push(v)},run:function(_,v){var x=f.hooks.all[_];if(!(!x||!x.length))for(var T=0,E;E=x[T++];)E(v)}},Token:s};o.Prism=f;function s(_,v,x,T){this.type=_,this.content=v,this.alias=x,this.length=(T||"").length|0}s.stringify=function _(v,x){if(typeof v=="string")return v;if(Array.isArray(v)){var T="";return v.forEach(function(j){T+=_(j,x)}),T}var E={type:v.type,content:_(v.content,x),tag:"span",classes:["token",v.type],attributes:{},language:x},V=v.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(E.classes,V):E.classes.push(V)),f.hooks.run("wrap",E);var M="";for(var F in E.attributes)M+=" "+F+'="'+(E.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+M+">"+E.content+"</"+E.tag+">"};function c(_,v,x,T){_.lastIndex=v;var E=_.exec(x);if(E&&T&&E[1]){var V=E[1].length;E.index+=V,E[0]=E[0].slice(V)}return E}function g(_,v,x,T,E,V){for(var M in x)if(!(!x.hasOwnProperty(M)||!x[M])){var F=x[M];F=Array.isArray(F)?F:[F];for(var j=0;j<F.length;++j){if(V&&V.cause==M+","+j)return;var Q=F[j],Y=Q.inside,ge=!!Q.lookbehind,Be=!!Q.greedy,U=Q.alias;if(Be&&!Q.pattern.global){var K=Q.pattern.toString().match(/[imsuy]*$/)[0];Q.pattern=RegExp(Q.pattern.source,K+"g")}for(var me=Q.pattern||Q,ae=T.next,De=E;ae!==v.tail&&!(V&&De>=V.reach);De+=ae.value.length,ae=ae.next){var Je=ae.value;if(v.length>_.length)return;if(!(Je instanceof s)){var st=1,Ue;if(Be){if(Ue=c(me,De,_,ge),!Ue||Ue.index>=_.length)break;var ue=Ue.index,Qt=Ue.index+Ue[0].length,Pt=De;for(Pt+=ae.value.length;ue>=Pt;)ae=ae.next,Pt+=ae.value.length;if(Pt-=ae.value.length,De=Pt,ae.value instanceof s)continue;for(var J=ae;J!==v.tail&&(Pt<Qt||typeof J.value=="string");J=J.next)st++,Pt+=J.value.length;st--,Je=_.slice(De,Pt),Ue.index-=De}else if(Ue=c(me,0,Je,ge),!Ue)continue;var ue=Ue.index,re=Ue[0],_e=Je.slice(0,ue),Ne=Je.slice(ue+re.length),Oe=De+Je.length;V&&Oe>V.reach&&(V.reach=Oe);var xe=ae.prev;_e&&(xe=h(v,xe,_e),De+=_e.length),w(v,xe,st);var $e=new s(M,Y?f.tokenize(re,Y):re,U,re);if(ae=h(v,xe,$e),Ne&&h(v,ae,Ne),st>1){var L={cause:M+","+j,reach:Oe};g(_,v,x,ae.prev,De,L),V&&L.reach>V.reach&&(V.reach=L.reach)}}}}}}function p(){var _={value:null,prev:null,next:null},v={value:null,prev:_,next:null};_.next=v,this.head=_,this.tail=v,this.length=0}function h(_,v,x){var T=v.next,E={value:x,prev:v,next:T};return v.next=E,T.prev=E,_.length++,E}function w(_,v,x){for(var T=v.next,E=0;E<x&&T!==_.tail;E++)T=T.next;v.next=T,T.prev=v,_.length-=E}function b(_){for(var v=[],x=_.head.next;x!==_.tail;)v.push(x.value),x=x.next;return v}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(_){var v=JSON.parse(_.data),x=v.language,T=v.code,E=v.immediateClose;o.postMessage(f.highlight(T,f.languages[x],x)),E&&o.close()},!1)),f;var C=f.util.currentScript();C&&(f.filename=C.src,C.hasAttribute("data-manual")&&(f.manual=!0));function $(){f.manual||f.highlightAll()}if(!f.manual){var D=document.readyState;D==="loading"||D==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return f}(a);e.exports&&(e.exports=l),typeof Vr<"u"&&(Vr.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(r,d){var m={};m["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[d]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};f["language-"+d]={pattern:/[\s\S]+/,inside:l.languages[d]};var s={};s[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:f},l.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,r){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:l.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var d=o.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",r=function(C,$){return"✖ Error "+C+" while fetching file: "+$},d="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",s="loading",c="loaded",g="failed",p="pre[data-src]:not(["+f+'="'+c+'"]):not(['+f+'="'+s+'"])';function h(C,$,D){var _=new XMLHttpRequest;_.open("GET",C,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?$(_.responseText):_.status>=400?D(r(_.status,_.statusText)):D(d))},_.send(null)}function w(C){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if($){var D=Number($[1]),_=$[2],v=$[3];return _?v?[D,Number(v)]:[D,void 0]:[D,D]}}l.hooks.add("before-highlightall",function(C){C.selector+=", "+p}),l.hooks.add("before-sanity-check",function(C){var $=C.element;if($.matches(p)){C.code="",$.setAttribute(f,s);var D=$.appendChild(document.createElement("CODE"));D.textContent=o;var _=$.getAttribute("data-src"),v=C.language;if(v==="none"){var x=(/\.(\w+)$/.exec(_)||[,"none"])[1];v=m[x]||x}l.util.setLanguage(D,v),l.util.setLanguage($,v);var T=l.plugins.autoloader;T&&T.loadLanguages(v),h(_,function(E){$.setAttribute(f,c);var V=w($.getAttribute("data-range"));if(V){var M=E.split(/\r\n?|\n/g),F=V[0],j=V[1]==null?M.length:V[1];F<0&&(F+=M.length),F=Math.max(0,Math.min(F-1,M.length)),j<0&&(j+=M.length),j=Math.max(0,Math.min(j,M.length)),E=M.slice(F,j).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(F+1))}D.textContent=E,l.highlightElement(D)},function(E){$.setAttribute(f,g),D.textContent=E})}}),l.plugins.fileHighlight={highlight:function($){for(var D=($||document).querySelectorAll(p),_=0,v;v=D[_++];)l.highlightElement(v)}};var b=!1;l.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(rd);var ud=rd.exports;const Wh=sd(ud),Rl={mounted(e,a){var r;const l=a.modifiers,o=a.value;l.script||o==="script"?e.className="language-javascript":e.className="language-markup",Wh.highlightElement(e.children[0]),(r=e.children[0].parentElement)==null||r.setAttribute("tabindex","-1")}},Kh={style:{paddingTop:"3rem"}},Xh=S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Qh=S("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Zh=[Qh],e_={style:{paddingTop:"3rem",marginBottom:"3rem"}},t_=S("p",null," You can import all components as Vue plugin. ",-1),i_=S("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),a_=[i_],l_=S("br",null,null,-1),n_=S("p",null," Or pick a component indivisually, add it to your components option. ",-1),o_=S("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),s_=[o_],r_={__name:"GettingStarted",setup(e){return(a,l)=>{const o=y("SuiHeader");return k(),B(ut,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[S("section",Kh,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),Xh,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),yi((k(),be("pre",null,Zh)),[[u(Rl)]])]),S("section",e_,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),t_,yi((k(),be("pre",null,a_)),[[u(Rl),void 0,void 0,{script:!0}]]),l_,n_,yi((k(),be("pre",null,s_)),[[u(Rl),void 0,void 0,{script:!0}]])])]),_:1})}}};function cd(e){var a,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=cd(e[a]))&&(o&&(o+=" "),o+=l);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function te(){for(var e,a,l=0,o="";l<arguments.length;)(e=arguments[l++])&&(a=cd(e))&&(o&&(o+=" "),o+=a);return o}const A=(e,a)=>e?a:"",Me=(e,a)=>typeof e=="string"?`${e} ${a}`:"",ze=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Ta=e=>e==="justified"?"justified":Me(e,"aligned"),ui=(e,a)=>typeof e=="number"&&a?`${Ao(e)} ${a}`:typeof e=="number"&&!a?Ao(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Pa=(e,a)=>e?`${Ao(e)} wide ${a}`:"",Ao=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],u_=R({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),l=r=>e.multiple?a.value.includes(r):a.value===r,o=r=>{const d=l(r);e.multiple?d?a.value=a.value.filter(m=>m!==r):a.value.push(r):a.value=d?-1:r};return mt("isTabActive",l),mt("updateActiveIndex",o),{computedClass:H(()=>te("ui",A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=o=>(o.forEach((r,d)=>{r.props.index=d}),o);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),c_=R({render(){var e,a;return W("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),dd=R({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(A(e.active,"active"),"content"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),X=R({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:H(()=>te(e.color,e.name,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.bordered,"bordered"),A(e.circular,"circular"),A(e.colored,"colored"),A(e.disabled,"disabled"),A(e.fitted,"fitted"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.loading,"loading"),Me(e.flipped,"flipped"),Me(e.rotated,"rotated"),ze(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return W(e,{"aria-hidden":!0,class:this.classes})}}),d_=R({props:{index:Number,title:String},setup(e){const a=He("isTabActive"),l=He("updateActiveIndex"),o=H(()=>te(A(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:o}},render(){return t(Ae,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(X,{name:"dropdown"},null),this.title]),t(dd,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),m_=R({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(A(e.active,"active"),"title"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),p_={install(e){e.component("SuiAccordion",u_),e.component("SuiAccordionAccordion",c_),e.component("SuiAccordionContent",dd),e.component("SuiAccordionTab",d_),e.component("SuiAccordionTitle",m_)}},f_=R({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>te("ui",e.unit,A(e.centered,"centered"),A(!!e.test,"test"),"ad"))}},render(){var e,a,l,o;return this.$props.test?W("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):W("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),g_={install(e){e.component("SuiAdvertisement",f_)}},Lt=R({props:{icon:String},setup(e){return{computedClass:H(()=>te(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tt=R({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>te(A(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,ea({class:this.computedClass},a),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),ni=R({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,A(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((r,d)=>{const m={active:r.active,href:r.href,link:r.link,to:r.to};return t(Ae,null,[t(tt,m,{default:()=>[r.content]}),this.sections.length!==d+1&&t(Lt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),h_={install(e){e.component("SuiBreadcrumb",ni),e.component("SuiBreadcrumbDivider",Lt),e.component("SuiBreadcrumbSection",tt)}},Ri=R({props:{as:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return W(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),__={install(e){e.component("SuiIcon",X),e.component("SuiIconGroup",Ri)}},b_=()=>({icon:[Boolean,String]}),v_=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),S_=["right","left"],y_=()=>({labeled:[Boolean,String]}),w_=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":S_.includes(e.labeled)?`${e.labeled} labeled`:"")}),C_=["double","elastic"],A_=()=>({loading:{type:[Boolean,String],validator:e=>C_.includes(e)||typeof e=="boolean"}}),k_=e=>({loadingClasses:H(()=>te(e.loading,{loading:e.loading}))}),P=R({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...b_(),...y_(),...A_()},setup(e){const{iconClasses:a}=v_(e),{labeledClasses:l}=w_(e),{loadingClasses:o}=k_(e);return{classes:H(()=>te("ui",e.color,e.size,A(e.active,"active"),A(e.basic,"basic"),A(e.circular,"circular"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.facebook,"facebook"),A(e.fluid,"fluid"),A(e.google,"google"),A(e.linkedin,"linkedin"),A(e.instagram,"instagram"),A(e.inverted,"inverted"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.telegram,"telegram"),A(e.tertiary,"tertiary"),A(e.toggle,"toggle"),A(e.twitter,"twitter"),A(e.vk,"vk"),A(e.whatsapp,"whatsapp"),A(e.youtube,"youtube"),Me(e.attached,"attached"),Me(e.floated,"floated"),ze(e.animated,"animated"),a.value,l.value,o.value,"button"))}},render(){var e,a;const l=this.attached?"div":this.as;return W(l,{class:this.classes,role:"button"},[typeof this.icon=="string"&&W(X,{name:this.icon}),this.content||((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Ii=R({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>te(A(e.hidden,"hidden"),A(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_t=R({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.icon,"icon"),A(e.labeled,"labeled"),A(e.vertical,"vertical"),Me(e.attached,"attached"),ui(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),x_={install(e){e.component("SuiButton",P),e.component("SuiButtonContent",Ii),e.component("SuiButtonGroup",_t)}},$_=(e,a,l)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},B_=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},vs={mounted:$_,unmounted:B_};function T_(e,a={}){const l=G(e.value?"open":"closed"),o=()=>l.value=e.value?"open":"closed";gt(e,f=>{l.value=f?"opening":"closing"});const r=f=>{f.addEventListener("animationend",o,!0)},d=f=>{f&&f.removeEventListener("animationend",o)},m=H((f="scale")=>{switch(l.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:d,computeAnimationClass:m}}const D_=R({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=G(!1),o=()=>{e.disabled||(l.value=!0)},r=()=>l.value=!1,d=()=>{e.disabled||a("select-day",e.date)},m=()=>{let s=new Date;return s.getFullYear()===e.date.year&&s.getMonth()===e.date.month&&s.getDate()===e.date.day},f=H(()=>te("link",A(l.value,"focus"),A(e.active&&!e.disabled,"active"),A(e.disabled,"adjacent disabled"),A(m(),"today")));return{onMouseEnter:o,onMouseLeave:r,onClick:d,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:zt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),L_=R({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:o,subtract:r,selectedDate:d,setSelectedDate:m,selectType:f,updateVisible:s,formatDate:c}=He(xi);return{calendarDays:e,isEqualDay:g=>{if(!d.value)return!1;const p=d.value;return p.getFullYear()===g.year&&p.getMonth()===g.month&&p.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),f.value==="date"){let p=new Date(g.year,g.month,g.day);m(p),s(!1);return}a("hour")},updateSelectMode:a,formatDate:c,add:o,subtract:r}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(o=>t(D_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:zt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),we=R({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),l=()=>a.value=!0,o=()=>a.value=!1,r=H(()=>te("link",A(e.active,"active"),A(e.today,"today"),A(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:r}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:zt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),I_=R({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:o,selectedDate:r,updateSelectMode:d}=He(xi);return{state:e,add:l,subtract:o,updateSelectMode:d,isActive:m=>r.value?e.year===r.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let f=new Date;return m===f.getMonth()&&e.year===f.getFullYear()},onClickCell:m=>{a(m,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,o)=>t("tr",null,[t(we,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(we,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(we,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:zt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),E_=R({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:o,subtract:r,selectedDate:d,updateSelectMode:m}=He(xi),f=()=>o(10,"years"),s=()=>r(10,"years"),c=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:f,movePrevTwelveYears:s,headerStartYear:c,isActive:g=>d.value?g===d.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{l(g,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:zt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(we,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(we,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(we,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(we,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(we,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(we,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(we,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(we,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(we,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(we,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(we,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),z_=R({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:o,subtract:r,formatDate:d,selectedDate:m}=He(xi);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>r(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{l(f,"hours"),e("minute")},isActive:f=>{if(!m.value)return!1;let s=m.value.getFullYear(),c=m.value.getMonth(),g=m.value.getDate(),p=m.value.getHours();return a.year===s&&a.month===c&&a.day===g&&f===p}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:zt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(we,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(we,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(we,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(we,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(we,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(we,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(we,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(we,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(we,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(we,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(we,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(we,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(we,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(we,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(we,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const R_=R({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:o,formatDate:r,updateSelectMode:d,updateVisible:m,selectedDate:f}=He(xi);return{add:l,subtract:o,formatDate:r,updateSelectMode:d,getTimeLabel:s=>{let c=e.hour%12,g=e.hour>12?"PM":"AM",p=s.toString().padStart(2,"0");return e.hour===0?`12:${p} AM`:e.hour===12?`12:${p} PM`:`${c}:${p} ${g}`},onClickCell:s=>{a(s,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:s=>{if(!f.value)return!1;let c=f.value.getFullYear(),g=f.value.getMonth(),p=f.value.getDate(),h=f.value.getHours(),w=f.value.getMinutes();return e.year===c&&e.month===g&&e.day===p&&e.hour===h&&s===w}}},render(){let e,a,l,o,r,d,m,f,s,c,g,p;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:zt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Vt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Vt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Vt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Vt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Vt(r=this.getTimeLabel(20))?r:{default:()=>[r]}),t(we,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Vt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(we,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Vt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(we,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Vt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(we,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Vt(s=this.getTimeLabel(40))?s:{default:()=>[s]})]),t("tr",null,[t(we,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Vt(c=this.getTimeLabel(45))?c:{default:()=>[c]}),t(we,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Vt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(we,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Vt(p=this.getTimeLabel(55))?p:{default:()=>[p]})])])])}}),P_=R({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:l}=He(xi),{setupAnimation:o,removeAnimation:r,computeAnimationClass:d}=T_(a);ki(()=>o(e.value)),Zi(()=>r(e.value));const m=H(()=>te("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:m,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t(L_,null,null);case"month":return t(I_,null,null);case"year":return t(E_,null,null);case"hour":return t(z_,null,null);case"minute":return t(R_,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),F_=R({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:o,set:r,state:d,formatCalendarDate:m}=He(xi);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(o("day"),e.value&&(r(e.value.getFullYear(),"years"),r(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),V_=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let o=l.getDay();return o>=7?o-7:o},M_=(e,a)=>{let l,o;return a===0?(l=11,o=e-1):(l=a-1,o=e),32-new Date(o,l,32).getDate()},Hn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function H_(){const e=G(!1),a=(C=!1)=>e.value=C,l=new Date;function o(C){if(!C)return;let $=C.getFullYear(),D=Hn(C.getMonth()),_=C.getDate(),v=C.getHours(),x=C.getMinutes(),T=v>11?"PM":"AM";v=v%12,v===0&&(v=12);let E=x.toString().padStart(2,"0");return`${D} ${_}, ${$} ${v}:${E} ${T}`}const r=G("default"),d=G("day");function m(C){d.value=C}const f=G(null),s=C=>{f.value=C},c=si({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),g=(C,$)=>{switch($){case"years":c.year=C;break;case"months":c.month=C;break;case"days":c.day=C;break;case"hours":c.hour=C;break;case"minutes":c.minute=C}},p=(C,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()+C);break;case"months":D.setMonth(D.getMonth()+C);break;case"days":D.setDate(D.getDate()+C);break;case"hours":D.setHours(D.getHours()+C);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},h=(C,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()-C);break;case"months":D.setMonth(D.getMonth()-C);break;case"days":D.setDate(D.getDate()-C);break;case"hours":D.setHours(D.getHours()-C);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},w=(C="default")=>C==="date"?`${Hn(c.month)} ${c.year}`:`${Hn(c.month)} ${c.day}, ${c.year}`,b=H(()=>{let C=c.month,$=c.year;C>11&&(C=C%11-1,$+=1);let D=[],_=V_($,C),v=32-new Date($,C,32).getDate(),x=M_($,C),T=1;for(let E=0;E<6;E++){let V=[];if(E===0){for(let F=x-_+1;F<=x;F++){let j=C===0?11:C-1,Q=C===0?$-1:$;V.push({day:F,month:j,year:Q,currentMonth:!1})}let M=7-V.length;for(let F=0;F<M;F++)V.push({day:T,month:C,year:$,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>v){let F=C===11?0:C+1,j=C===11?$+1:$;V.push({day:T-v,month:F,year:j,currentMonth:!1})}else V.push({day:T,month:C,year:$,currentMonth:!0});T++}D.push(V)}return D});return{visible:e,updateVisible:a,calendarDays:b,formatCalendarDate:o,selectMode:d,updateSelectMode:m,selectType:r,selectedDate:f,setSelectedDate:s,state:c,set:g,add:p,subtract:h,formatDate:w}}const xi=Symbol("useCalendar"),N_=R({directives:{clickoutside:vs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=H_();mt(xi,l);const{updateVisible:o,selectedDate:r}=l;return gt(r,d=>{a("update:modelValue",d)}),{updateVisible:o}},render(){return yi(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(P_,null,null),t("i",{class:"calendar icon"},null),t(F_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[un("clickoutside"),()=>this.updateVisible(!1)]])}}),O_={install:e=>{e.component("SuiCalendar",N_)}},q_=R({props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,A(e.centered,"centered"),A(e.fluid,"fluid"),A(e.horizontal,"horizontal"),A(e.link,"link"),A(e.raised,"raised"),"card"))}},render(){var e,a,l,o;return this.$props.href||this.$props.link?W("a",{class:this.computedClass,href:this.$slots.href},(a=(e=this.$slots).default)==null?void 0:a.call(e)):W("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),j_=R({props:{extra:Boolean},setup(e){return{computedClass:H(()=>te(A(e.extra,"extra"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),G_=R({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),U_=R({props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",A(e.centered,"centered"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),ui(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Y_=R({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),J_=R({render(){var e,a;return W("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),W_={install(e){e.component("SuiCard",q_),e.component("SuiCardContent",j_),e.component("SuiCardDescription",G_),e.component("SuiCardGroup",U_),e.component("SuiCardHeader",Y_),e.component("SuiCardMeta",J_)}},md=R({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=H(()=>te("ui",!e.label&&"fitted",A(e.disabled,"disabled"),A(e.indeterminate,"indeterminate"),A(e.radio,"radio"),A(e.readOnly,"read-only"),A(e.slider,"slider"),A(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:o,onClick:r=>{if(e.disabled||e.readOnly)return;let d;e.value?o.value?d=e.modelValue.filter(m=>e.value!==m):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",r),a("click",r),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),K_={install(e){e.component("SuiCheckbox",md)}},pd=R({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?W(e,{class:"avatar"},W("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function X_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const Q_=R({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(pd,{as:"a"},X_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),Z_=R({props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>te(A(a,"active")))}},render(){var e,a,l,o;return this.computedClass?W("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):W("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),eb=R({render(){var e,a;return W("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tb=R({props:{as:String},render(){var e,a;let l=this.$props.as||"div";return W(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ib=R({render(){var e,a;return W("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ab=R({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.size,A(e.collapsed,"collapsed"),A(e.inverted,"inverted"),A(e.minimal,"minimal"),A(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),lb=R({render(){var e,a;return W("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nb=R({render(){var e,a;return W("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ob={install(e){e.component("SuiComment",Q_),e.component("SuiCommentAction",Z_),e.component("SuiCommentActions",eb),e.component("SuiCommentAuthor",tb),e.component("SuiCommentAvatar",pd),e.component("SuiCommentContent",ib),e.component("SuiCommentGroup",ab),e.component("SuiCommentMetadata",lb),e.component("SuiCommentText",nb)}},Ni=R({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te("ui",A(e.fluid,"fluid"),A(e.text,"text"),Ta(e.textAlign),"container"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sb={install(e){e.component("SuiContainer",Ni)}},Yt=R({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",A(e.active,"active"),A(e.inverted,"inverted"),A(e.page,"page"),A(e.simple,"simple"),Me(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rb=R((e,{slots:a})=>{const l=H(()=>te("ui",A(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}},{props:{blurring:Boolean}}),ub={install(e){e.component("SuiDimmer",Yt),e.component("SuiDimmerDimmable",rb)}},cb=["mini","tiny","small","medium","large","big","huge","massive"],yn=()=>({size:{type:String,validator:e=>cb.includes(e)}}),wn=e=>({sizeClass:H(()=>e.size)}),Ve=R({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...yn()},setup(e){const{sizeClass:a}=wn(e);return{classes:H(()=>te("ui",a.value,A(e.clearing,"clearing"),A(e.fitted,"fitted"),A(e.hidden,"hidden"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.section,"section"),A(e.vertical,"vertical"),Me(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return W("div",{class:this.classes},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),db={install(e){e.component("SuiDivider",Ve)}},mb=(e,a)=>e.map(l=>l[a]),fd=["top","middle","bottom"],pb={verticalAlign:{type:String,validator:e=>fd.includes(e)}};function fb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&fd.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const gb=["left","right"],hb={floated:{type:String,validator:e=>gb.includes(e)}};function _b(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=R({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>te("ui",e.size,e.color,A(e.basic,"basic"),A(e.circular,"circular"),A(e.empty,"empty"),A(e.floating,"floating"),A(e.horizontal,"horizontal"),A(!!e.icon&&a.default===void 0,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.prompt,"prompt"),A(e.tag,"tag"),Me(e.attached,"attached"),Me(e.corner,"corner"),ze(e.pointing,"pointing"),ze(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var r;return W(o,{class:l.value},[W(X,{name:e.icon}),(r=a.default)==null?void 0:r.call(a)])}:()=>{var r;return W(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Da=R({render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),La=R({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>te("ui",e.color,e.size,A(e.basic,"basic"),A(e.circular,"circular"),A(e.tag,"tag"),"labels"));return()=>{var o;return W("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),bb={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Da),e.component("SuiLabelGroup",La)}},oe=R({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...pb,...hb},setup(e,{slots:a}){const{verticalAlignClass:l}=fb(e),{floatedClass:o}=_b(e),r=H(()=>te("ui",e.size,l.value,o.value,A(e.avatar,"avatar"),A(e.bordered,"bordered"),A(e.centered,"centered"),A(e.circular,"circular"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.hidden,"hidden"),A(e.inline,"inline"),A(e.rounded,"rounded"),ze(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=y(e.as)),()=>{var m;return W(d,{class:r.value,href:e.href,target:e.target&&e.target},W("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var d;return W("div",{class:r.value},W("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>W("div",{class:r.value},[W("img",{src:e.src}),W(O,{...e.label})]):()=>t("img",{class:r.value,src:e.src},null)}}),ko=R({props:{size:String},setup(e,{slots:a}){const l=H(()=>te("ui",e.size,"images"));return()=>{var o;return W("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),vb={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",ko)}},Sb=R({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>te(A(e.filtered,"filtered"),A(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:m}=this.item;l=t(Ae,null,[d&&t("i",{class:`${d} flag`},null),m])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,r=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ae,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),r&&t(O,r,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:zt(()=>this.$emit("remove"),["stop"])},null)])}}),yb=e=>{const a=si({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return gt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function wb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const Cb=R({directives:{clickoutside:vs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=yb(e);mt("useDropdown",l);const{state:o,show:r,hide:d}=l,m=H(()=>te("ui",A(e.button,"button"),A(e.clearable,"clearable"),A(e.compact,"compact"),A(e.floating,"floating"),A(e.fluid,"fluid"),A(!!e.icon,"icon"),A(e.inline,"inline"),A(e.item,"item"),A(e.labeled,"labeled"),A(e.multiple,"multiple"),A(e.search,"search"),A(e.scrolling,"scrolling"),A(e.selection,"selection"),A(e.simple,"simple"),ze(e.pointing,"pointing"),"dropdown",A(o.visible,"active visible"),A(o.direction==="up","upward"))),f=()=>{var $;if(o.visible)return d();($=h.value)==null||$.focus(),r()},s=()=>{e.search&&h.value&&h.value.focus(),r()},c=()=>d(),g=G(""),p=H(()=>{const $=g.value.toLowerCase();return e.options.filter(D=>{const _=typeof D=="object"?D.text:D,v=_.toLowerCase().includes($);if(!e.multiple)return v;if(Array.isArray(e.modelValue)){const x=typeof D=="object"?mb(e.modelValue,"text").includes(_):e.modelValue.includes(_);return v&&!x}return v})}),h=G(null),w=$=>g.value=$.target.value,b=$=>{var D;if(g.value="",e.search&&((D=h.value)==null||D.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,$]:[$];return a("update:modelValue",_)}return a("update:modelValue",$)},C=$=>{if(Array.isArray(e.modelValue)){const D=e.modelValue.findIndex(_=>_===$);if(D>-1){let _=Object.assign(e.modelValue);_.splice(D,1),a("update:modelValue",_)}}};return mt("selection",e.selection),{computedClass:m,onClick:f,openMenu:s,closeMenu:c,filteredText:g,filteredOptions:p,inputRef:h,onInput:w,onSelect:b,removeItem:C}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:zt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:zt(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(gd,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),r=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(Sb,ea(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let m;return t(hd,{search:this.$props.searchInMenu,onSearch:this.onInput},wb(m=o())?m:{default:()=>[m]})};return yi(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),r(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[un("clickoutside"),this.closeMenu]])}}),gd=R({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:o}=He("useDropdown");return{computedClass:H(()=>te(A(e.active,"active"),A(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:zt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),hd=R({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:o}=He("useDropdown"),r=G(null),d=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",A(o.visible,"visible"),A(!o.visible&&!o.animating,"hidden"),A(o.animating,f()))});gt(()=>o.visible,f=>{if(!f||!r.value)return;let s=r.value.parentElement;const{top:c,height:g}=s==null?void 0:s.getBoundingClientRect(),p=c-m.value.length*37,h=document.documentElement.clientHeight-c-g-m.value.length*37;o.direction=p>h?"up":"down"});const m=H(()=>{var f;let s=[],c=(f=l.default)==null?void 0:f.call(l);return c&&c.forEach(g=>{g.type.name==="SuiSelectItem"&&s.push(g)}),s});return{container:r,computedClass:d,onSearchInput:f=>a("search",f)}},render(){var e,a,l,o;const r=()=>t(Ae,null,[t("div",{class:"ui left icon input",onClick:zt(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&r(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Ab={install(e){e.component("SuiDropdown",Cb),e.component("SuiDropdownItem",gd),e.component("SuiDropdownMenu",hd)}},kb=R({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),l=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,r=H(()=>te("ui",e.aspectRatio,A(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:l,computedClass:r}},render(){let e=[W("i",{class:"video play icon"}),W("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(W("div",{class:"embed"},W("iframe",{src:this.getSrc()}))),W("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),xb={install(e){e.component("SuiEmbed",kb)}},It=R({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,A(e.disabled,"disabled"),A(e.link,"link"),A(e.loading,"loading")))}},render(){return this.computedClass?W("em",{class:this.computedClass,"data-emoji":this.$props.name}):W("em",{"data-emoji":this.$props.name})}}),$b={install(e){e.component("SuiEmoji",It)}},Bb=R({props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,A(e.inverted,"inverted"),"feed"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tb=R({render(){var e,a;return W("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Db=R({render(){var e,a;return W("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lb=R({render(){var e,a;return W("div",{class:"event"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ib=R({props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:H(()=>te(A(a,"images"),A(l,"text"),"extra"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb=R({render(){var e,a;return W("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zb=R({render(){var e,a;return W("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Rb=R({render(){var e,a;return W("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pb=R({render(){var e,a;return W("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb=R({render(){var e,a;return W("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Vb={install(e){e.component("SuiFeed",Bb),e.component("SuiFeedContent",Tb),e.component("SuiFeedDate",Db),e.component("SuiFeedEvent",Lb),e.component("SuiFeedExtra",Ib),e.component("SuiFeedLabel",Eb),e.component("SuiFeedLike",zb),e.component("SuiFeedMeta",Rb),e.component("SuiFeedSummary",Pb),e.component("SuiFeedUser",Fb)}},Jt=R(e=>{const{sizeClass:a}=wn(e),l=H(()=>te(a.value,e.name,"flag"));return()=>t("i",{class:l.value},null)},{props:{name:String,...yn()}}),Mb={install(e){e.component("SuiFlag",Jt)}},Nt=R({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:H(()=>te("ui",e.size,A(e.error,"error"),A(e.info,"info"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.reply,"reply"),A(e.success,"success"),A(e.unstackable,"unstackable"),A(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.classes},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Mr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Hb(e){return{widthClass:H(()=>Number(e.width)>0?`${Mr[Number(e.width)-1]} wide`:typeof e.width=="string"||Mr.includes(e.width)?`${e.width} wide`:null)}}const at=R({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=Hb(e),o=H(()=>te(A(e.disabled,"disabled"),A(e.error,"error"),A(e.inline,"inline"),A(e.required,"required"),l.value,"field")),r=e.type||"text";return{computedClass:o,inputType:r,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ss=R({props:{widths:String},setup(e){return{computedClass:H(()=>te(Me(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),xo=R({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Nb={install(e){e.component("SuiForm",Nt),e.component("SuiFormField",at),e.component("SuiFormGroup",Ss),e.component("SuiFormTextarea",xo)}},hl=R({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",e.container&&"container",A(e.centered,"centered"),A(e.compact,"compact"),A(e.doubling,"doubling"),A(e.inverted,"inverted"),A(e.stackable,"stackable"),Me(e.reversed,"reversed"),Me(e.verticalAlign,"aligned"),ze(e.celled,"celled"),ze(e.divided,"divided"),ze(e.padded,"padded"),ze(e.relaxed,"relaxed"),Ta(e.textAlign),ui(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Tt=R({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>te(e.color,Me(e.floated,"floated"),Me(e.only,"only"),Ta(e.textAlign),ui(e.width,"wide"),Pa(e.mobile,"mobile"),Pa(e.tablet,"tablet"),Pa(e.computer,"computer"),Pa(e.largeScreen,"large screen"),Pa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$o=R({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te(e.color,A(e.centered,"centered"),A(e.stretched,"stretched"),Me(e.only,"only"),ui(e.columns,"column"),Ta(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ob={install(e){e.component("SuiGrid",hl),e.component("SuiGridColumn",Tt),e.component("SuiGridRow",$o)}},Ji=R({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return W(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=R({components:{HeaderSubheader:Ji},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=H(()=>te("ui",e.color,e.size,A(e.primary,"primary"),A(e.secondary,"secondary"),A(e.block,"block"),A(e.disabled,"disabled"),A(e.dividing,"dividing"),A(e.icon,"icon"),A(e.image,"image"),A(e.inverted,"inverted"),A(e.sub,"sub"),Me(e.floated,"floated"),ze(e.attached,"attached"),Ta(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(W(Ji,{},this.subheader)),l.length>0?W(this.elementType,{class:this.computedClass},l):W(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ys=R({render(){var e,a;return W("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),qb={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",ys),e.component("SuiHeaderSubheader",Ji)}},et=R({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),r=H(()=>te("ui",e.size,e.action&&"action",A(e.disabled,"disabled"),A(e.error,"error"),A(e.fluid,"fluid"),A(e.focus,"focus"),e.iconPosition,A(l.value,"icon"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.transparent,"transparent"),A(o.value,"labeled"),"input")),d=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:r.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>d(m)},null),l.value&&t(X,{name:e.icon||"spinner"},null),e.action&&t(P,null,{default:()=>[e.action]})])}}),jb={install(e){e.component("SuiInput",et)}},Gb=R({render(){var e,a;return W("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ub=R({props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>te(Me(a,"aligned"),"content"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yb=R({render(){var e,a;return W("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Jb=R({render(){var e,a;return W("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wb=R({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",A(e.divided,"divided"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.unstackable,"unstackable"),ze(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kb=R({props:{as:String},render(){var e,a;let l=this.$props.as||"div";return W(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Xb=R({props:{size:String},setup(e){return{computedClass:H(()=>te(e.size,"image"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qb=R({render(){var e,a;return W("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Zb={install(e){e.component("SuiItem",Gb),e.component("SuiItemContent",Ub),e.component("SuiItemDescription",Yb),e.component("SuiItemExtra",Jb),e.component("SuiItemGroup",Wb),e.component("SuiItemHeader",Kb),e.component("SuiItemImage",Xb),e.component("SuiItemMeta",Qb)}},_d=R({props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(e,{slots:a}){const l=H(()=>te("ui",A(e.animated,"animated"),A(e.bulleted,"bulleted"),A(e.celled,"celled"),A(e.divided,"divided"),A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.link,"link"),A(e.ordered,"ordered"),A(e.relaxed,"relaxed"),A(e.selection,"selection"),Me(e.verticalAlign,"aligned"),Me(e.floated,"floated"),"list"));let o=e.as||"div";return()=>{var r;return W(o,{class:l.value},(r=a.default)==null?void 0:r.call(a))}}}),Ha=R({props:{active:Boolean,as:String,disabled:Boolean},setup(e,{slots:a}){let l=e.as||"div";const o=H(()=>te(A(e.active,"active"),A(e.disabled,"disabled"),"item"));return()=>{var r;return W(l,{class:o.value},(r=a.default)==null?void 0:r.call(a))}}}),ev=R({setup(e,{slots:a}){return()=>{var l;return W(X,{...e},(l=a.default)==null?void 0:l.call(a))}}}),tv=R({props:{verticalAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),iv=R({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return W(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),av=R({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return W(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),lv=R({render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nv={install(e){e.component("SuiList",_d),e.component("SuiListItem",Ha),e.component("SuiListIcon",ev),e.component("SuiListContent",tv),e.component("SuiListHeader",iv),e.component("SuiListDescription",av),e.component("SuiListList",lv)}},bd=R({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.borderless,"borderless"),A(e.compact,"compact"),A(e.fixed,"fixed"),A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.pagination,"pagination"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.stackable,"stackable"),A(e.text,"text"),A(e.vertical,"vertical"),ze(e.attached,"attached"),ze(e.floated,"floated"),ze(e.icon,"icon"),ze(e.tabular,"tabular"),ui(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ov=R({props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),Bo=R({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=y(e.as));const o=H(()=>te(e.color,e.position,A(e.action,"action"),A(e.active,"active"),A(e.browse,"browse"),A(e.disabled,"disabled"),A(e.header,"header"),A(e.icon,"icon"),A(e.link,"link"),ze(e.fitted,"fitted"),"item"));return()=>t(l,{class:o.value},{default:()=>{var r;return[e.name||((r=a.default)==null?void 0:r.call(a))]}})}}),sv=R({props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>te(a,"menu"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv={install(e){e.component("SuiMenu",bd),e.component("SuiMenuHeader",ov),e.component("SuiMenuItem",Bo),e.component("SuiMenuMenu",sv)}},Cn=R({props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.compact,"compact"),A(e.error,"error"),A(e.floating,"floating"),A(e.hidden,"hidden"),A(e.icon,"icon"),A(e.info,"info"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.success,"success"),A(e.visible,"visible"),A(e.warning,"warning"),ze(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(vd,null,{default:()=>[t(Sd,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),vd=R({render(){var e,a;return W("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Sd=R({render(){var e,a;return W("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv=R({render(){var e,a;return W("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cv=R({render(){var e,a;return W("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),dv={install(e){e.component("SuiMessage",Cn),e.component("SuiMessageContent",vd),e.component("SuiMessageHeader",Sd),e.component("SuiMessageItem",uv),e.component("SuiMessageList",cv)}};function mv(e){return Oo()?(su(e),!0):!1}function yd(e){return typeof e=="function"?e():u(e)}const wd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const pv=Object.prototype.toString,fv=e=>pv.call(e)==="[object Object]",Pl=()=>{},gv=hv();function hv(){var e,a;return wd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Na(e){var a;const l=yd(e);return(a=l==null?void 0:l.$el)!=null?a:l}const Cd=wd?window:void 0;function Nn(...e){let a,l,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,r]=e,a=Cd):[a,l,o,r]=e,!a)return Pl;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const d=[],m=()=>{d.forEach(g=>g()),d.length=0},f=(g,p,h,w)=>(g.addEventListener(p,h,w),()=>g.removeEventListener(p,h,w)),s=gt(()=>[Na(a),yd(r)],([g,p])=>{if(m(),!g)return;const h=fv(p)?{...p}:p;d.push(...l.flatMap(w=>o.map(b=>f(g,w,b,h))))},{immediate:!0,flush:"post"}),c=()=>{s(),m()};return mv(c),c}let Hr=!1;function _v(e,a,l={}){const{window:o=Cd,ignore:r=[],capture:d=!0,detectIframe:m=!1}=l;if(!o)return Pl;gv&&!Hr&&(Hr=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Pl)),o.document.documentElement.addEventListener("click",Pl));let f=!0;const s=g=>r.some(p=>{if(typeof p=="string")return Array.from(o.document.querySelectorAll(p)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Na(p);return h&&(g.target===h||g.composedPath().includes(h))}}),c=[Nn(o,"click",g=>{const p=Na(e);if(!(!p||p===g.target||g.composedPath().includes(p))){if(g.detail===0&&(f=!s(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:d}),Nn(o,"pointerdown",g=>{const p=Na(e);f=!s(g)&&!!(p&&!g.composedPath().includes(p))},{passive:!0}),m&&Nn(o,"blur",g=>{setTimeout(()=>{var p;const h=Na(e);((p=o.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>c.forEach(g=>g())}function Ad(e,a="scale"){const l=G(e.modelValue?"open":"closed");return gt(()=>e.modelValue,o=>{l.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const bv=R({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:o}=Ad(e,"fade"),r=H(()=>te("ui","page modals dimmer transition",A(e.inverted,"inverted"),a.value)),d=H(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),m=H(()=>te("dimmable","dimmed",A(e.blurring,"blurring")));return gt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:r,style:d,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ws=R({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=G(),{animationClasses:o,isClosed:r}=Ad(e),d=H(()=>te("ui",e.size,A(e.basic,"basic"),A(e.overlay,"overlay"),A(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=H(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return _v(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:m,close:f,modalRef:l}},render(){return t(fn,{to:"body"},{default:()=>[t(bv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),Cs=R({render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),As=R({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>te(A(e.image,"image"),A(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),kd=R({render(){var e,a;return W("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ks=R({render(){var e,a;return W("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vv={install(e){e.component("SuiModal",ws),e.component("SuiModalActions",Cs),e.component("SuiModalContent",As),e.component("SuiModalDescription",kd),e.component("SuiModalHeader",ks)}},Sv=e=>{const a=G(!1),l=io(e,"position"),o=G(null),r=io(e,"trigger"),d=()=>{a.value=!0,$a(()=>f())},m=()=>{a.value=!1},f=()=>{if(!o.value||!r.value)return;let s=0,c=0;const g=o.value,p=r.value.$el;g.style.transform=`translate(${s}px, ${c}px)`;const{top:h,left:w,width:b,height:C}=p.getBoundingClientRect(),$=g.getBoundingClientRect(),{pageXOffset:D,pageYOffset:_}=window;if(l.value.includes("top")?(s=D+w,c=_+h-g.offsetTop-g.offsetHeight):(s=w,c=h+C-$.top),l.value.includes("right")){const v=b-$.width;s=w+v}if(l.value.includes("center")){const v=b/2-$.width/2;s=w+v}l.value==="right center"&&(s=w+b,c=h+C/2-$.top-$.height/2),l.value==="left center"&&(s=w-$.width,c=h+C/2-$.top-$.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${s}px, ${c}px)`};return{show:a,showPopup:d,hidePopup:m,placement:l,popupRef:o,triggerRef:r}},yv=R({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:o,hidePopup:r,popupRef:d,triggerRef:m}=Sv(e);as(()=>{var h,w,b;(h=m.value)!=null&&h.$el&&((w=m.value)==null||w.$el.addEventListener("mouseenter",o),(b=m.value)==null||b.$el.addEventListener("mouseleave",r))});const f=G(l.value?"open":"close");H(()=>f.value!=="closed"),gt(()=>l.value,h=>{f.value=h?"opening":"closing"});const s=(h,w="scale")=>{switch(h){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},c=()=>f.value=l.value?"open":"closed";ki(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",c,!0)}),Zi(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",c)});const g={position:"initial",animationDuration:"200ms"},p=H(()=>te("ignored ui",e.position,e.size,A(e.basic,"basic"),A(e.flowing,"flowing"),A(e.inverted,"inverted"),ze(e.wide,"wide"),"popup transition",s(f.value,"scale")));return()=>t(fn,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:p.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),wv={install(e){e.component("SuiPopup",yv)}},Cv=["top","bottom","left"],xs=()=>({attached:{type:String,validator:e=>Cv.includes(e)}}),xd=e=>({attachedClasses:H(()=>te(e.attached,{attached:e.attached}))}),Av=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],$s=()=>({color:{type:String,validator:e=>Av.includes(e)}}),Bs=e=>({colorClasses:H(()=>te(e.inverted&&"inverted",e.color))}),To=R({props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...xs(),...$s()},setup(e){const{attachedClasses:a}=xd(e),{colorClasses:l}=Bs(e),o=H(()=>te("ui",l.value,e.size,A(e.active||e.indicating,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.indicating,"indicating"),A(e.success,"success"),A(e.warning,"warning"),a.value,"progress")),r=H(()=>te(ze(e.progress,"progress"))),d=H(()=>e.progress!=="centered"?{}:{right:0});return()=>t("div",{class:o.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:r.value,style:d.value},[`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}),kv={install(e){e.component("SuiProgress",To)}},xv=R({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>te("ui",e.position,e.size,A(e.attached,"attached"),A(e.dividing,"dividing"),A(e.internal,"internal"),ze(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$v={install(e){e.component("SuiRail",xv)}},Bv=R({props:{icon:String,index:{type:Number,default:0}},setup(e){const a=He("rating",G(0)),l=He("updateRating"),o=He("selectedIndex",G(0)),r=He("updateSelectedIndex"),d=He("clearable",!1),m=He("disabled",!1),f=()=>{if(!m){if(d&&e.index===a.value){l(0),r(0);return}l(e.index)}},s=()=>{m||r(e.index)},c=H(()=>e.index<=a.value),g=H(()=>e.index<=o.value),p=H(()=>te(e.icon,A(c.value,"active"),A(g.value,"selected"),"icon"));return()=>t("i",{class:p.value,onClick:()=>f(),onMouseenter:()=>s()},null)}}),Tv=R({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=G(e.modelValue||e.defaultRating),o=G(!1),r=G(0),d=g=>{l.value=g,a("update:modelValue",g),a("change",g)},m=g=>r.value=g,f=()=>{e.disabled||(o.value=!0)},s=()=>{e.disabled||(o.value=!1,m(0))},c=H(()=>te("ui",e.color,e.icon,e.size,A(e.disabled,"disabled"),"rating",A(o.value,"selected")));return mt("rating",l),mt("updateRating",d),mt("selectedIndex",r),mt("updateSelectedIndex",m),mt("clearable",e.clearable),mt("disabled",e.disabled),()=>t("div",{class:c.value,onMouseenter:()=>f(),onMouseleave:()=>s()},[[...Array(e.maxRating)].map((g,p)=>t(Bv,{icon:e.icon,index:p+1},null))])}}),Dv={install(e){e.component("SuiRating",Tv)}},ta=R({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.animated,A(e.active,"active"),A(e.disabled,"disabled"),A(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Rt=R({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>te("ui",A(e.visible,"visible"),A(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Lv={install(e){e.component("SuiReveal",ta),e.component("SuiRevealContent",Rt)}},Iv=R({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Ev={install(e){e.component("SuiSearch",Iv)}},N=R((e,{slots:a})=>{const{colorClasses:l}=Bs(e),{sizeClass:o}=wn(e),r=H(()=>te("ui",l.value,o.value,A(e.basic,"basic"),A(e.circular,"circular"),A(e.clearing,"clearing"),A(e.compact,"compact"),A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.loading,"loading"),A(e.piled,"piled"),A(e.placeholder,"placeholder"),A(e.raised,"raised"),A(e.secondary,"secondary"),A(e.stacked,"stacked"),A(e.tertiary,"tertiary"),A(e.vertical,"vertical"),Me(e.floated,"floated"),Me(e.textAlign,"aligned"),ze(e.attached,"attached"),ze(e.fitted,"fitted"),ze(e.padded,"padded"),ze(e.scrolling,"scrolling"),"segment"));return()=>{var d;return t("div",{class:r.value},[(d=a.default)==null?void 0:d.call(a)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...$s(),...yn()}}),Ct=R((e,{slots:a})=>{const{sizeClass:l}=wn(e),o=H(()=>te("ui",l.value,A(e.basic,"basic"),A(e.compact,"compact"),A(e.horizontal,"horizontal"),A(e.piled,"piled"),A(e.raised,"raised"),A(e.stacked,"stacked"),"segments"));return()=>{var r;return t("div",{class:o.value},[(r=a.default)==null?void 0:r.call(a)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...yn()}}),zv=R({render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Rv={install(e){e.component("SuiSegment",N),e.component("SuiSegmentGroup",Ct),e.component("SuiSegmentInline",zv)}},Pv=R({directives:{clickoutside:vs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=si({animating:!1}),o=H(()=>{const r=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,A(e.inverted,"inverted"),A(e.visible,"visible"),A(l.animating,"animating"),A(r,"vertical"),ze(e.icon,"icon"),"menu")});return gt(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:r=>{const d=r.path||r.composedPath&&r.composedPath();d&&d.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return yi(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[un("clickoutside"),this.onClickPusher]])}}),Fv={install:e=>{e.component("SuiSidebar",Pv)}};class On{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const Vv=R({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=H(()=>te("ui",e.color,e.size,A(e.disabled,"disabled"),A(e.inverted,"inverted"),A(e.reversed,"reversed"),A(e.vertical,"vertical"),ze(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),r=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:r()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:r()-o()+"%"}:{top:o()+"%",height:r()-o()+"%"}:{left:o()+"%",width:r()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),m=H(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),s=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),c=()=>{var U,K;let me=1,ae=g(),De=(e.vertical?(U=h.value)==null?void 0:U.clientHeight:(K=h.value)==null?void 0:K.clientWidth)||0,Je=1;if(De>0)for(;De/ae*Je<100;)ae%Je||(me=Je),Je+=1;return me},g=()=>Math.round((e.max-e.min)/e.step),p=G(null),h=G(null),w=G(0),b=G(0),C=G(0),$=G(0),D=()=>{if(!p.value)return;let U=p.value.getBoundingClientRect();w.value=U.left+On.getWindowScrollLeft(),b.value=U.top+On.getWindowScrollTop(),C.value=p.value.offsetWidth,$.value=p.value.offsetHeight},_=G(0),v=U=>{let{pageX:K,pageY:me}=U.touches?U.touches[0]:U,ae,De;e.vertical?ae=(b.value+$.value-me)*100/$.value:ae=(K-w.value)*100/C.value,De=(e.max-e.min)*(ae/100)+e.min;const Je=e.range?e.modelValue[_.value]:e.modelValue||0;De=Je+Math.round(De/e.step-Je/e.step)*e.step,e.reversed&&(De=e.max-De+e.min),e.vertical&&(De=e.max-De+e.min),x(De)},x=U=>{let K=U,me;if(e.range)if(me=e.modelValue?[...e.modelValue]:[],_.value===0){let ae=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ae&&(K=ae),me[0]=K,me[1]=me[1]||e.max}else{let ae=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ae&&(K=ae),me[0]=me[0]||e.min,me[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),me=K;a("update:modelValue",me),a("change",me)},T=G(!1),E=U=>T.value=U,V=(U,K=0)=>{E(!0),D(),_.value=K,U.preventDefault()},M=U=>{T.value&&(E(!1),document.removeEventListener("mousemove",F),a("slideend",{event:U,value:e.modelValue}))},F=U=>{T.value&&(v(U),U==null||U.preventDefault())},j=(U,K=0)=>{e.disabled||(V(U,K),document.addEventListener("mousemove",F),document.addEventListener("mouseup",M),U.preventDefault())},Q=(U,K=0)=>{switch(_.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():ge()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?ge():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?ge():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():ge(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[_.value]+e.step:U=e.modelValue+e.step,x(U)},ge=()=>{let U=0;e.range?U=e.modelValue[_.value]-e.step:U=e.modelValue-e.step,x(U)},Be=U=>{if(!e.disabled&&!On.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,me=(o()+r())/2;K<me?_.value=e.reversed?1:0:_.value=e.reversed?0:1}D(),v(U)}};return()=>t("div",{ref:U=>p.value=U,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>h.value=U},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:m.value,onMousedown:U=>j(U),onTouchstart:U=>V(U),onTouchmove:U=>F(U),onTouchend:U=>M(U),onKeydown:U=>Q(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>j(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>F(U),onTouchend:U=>M(U),onKeydown:U=>Q(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,K)=>{let me=K/g();return K%c()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:s.value[g()-K]:e.labels?e.labels[K]:s.value[K]])})])])}}),Mv={install(e){e.component("SuiSlider",Vv)}},Do=R({props:{content:String},render(){var e,a;return this.$props.content?W("div",{class:"label"},this.$props.content):W("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Lo=R({props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>te(A(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?W("div",{class:this.computedClass},this.$props.content):W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Hv=R({components:{StatisticLabel:Do,StatisticValue:Lo},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=He("ui",!0);return{computedClass:H(()=>te(a&&"ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),A(e.text,"text"),ze(e.floated,"floated"),"statistic"))}},render(){var e,a,l,o,r,d;let m=[];return this.$props.value&&m.push(W(Lo,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(W(Do,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),W("div",{class:this.computedClass},m.length>0?m:(d=(r=this.$slots).default)==null?void 0:d.call(r))}}),Nv=R({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return mt("ui",!1),{computedClass:H(()=>te("ui",e.color,e.size,A(e.horizontal,"horizontal"),A(e.inverted,"inverted"),ui(e.widths,""),"statistics"))}},render(){var e,a;return W("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ov={install(e){e.component("SuiStatistic",Hv),e.component("SuiStatisticGroup",Nv),e.component("SuiStatisticLabel",Do),e.component("SuiStatisticValue",Lo)}},qv=R({props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(e){return{computedClass:H(()=>te(A(e.active,"active"),A(e.completed,"completed"),A(e.disabled,"disabled"),A(e.fluid,"fluid"),A(e.link,"link"),A(e.vertical,"vertical"),"step"))}},render(){var e,a,l,o;return this.href?t("a",{class:this.computedClass,href:this.href},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("div",{class:this.computedClass},[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),jv=["one","two","three","four","five","six","seven","eight"],Gv=R({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>te("ui",a&&jv[a-1],e.size,A(e.fluid,"fluid"),A(e.inverted,"inverted"),A(e.ordered,"ordered"),A(e.unstackable,"unstackable"),A(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Uv=R({render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yv=R({render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jv=R({render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wv={install(e){e.component("SuiStep",qv),e.component("SuiStepGroup",Gv),e.component("SuiStepContent",Uv),e.component("SuiStepTitle",Yv),e.component("SuiStepDescription",Jv)}},$d=R({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>te("ui tab segment",A(e.active,"active"),ze(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Kv=R({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const o=G(e.activeIndex);gt(()=>e.activeIndex,c=>{o.value=c});const r=(c,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:c,index:g})),a("tab-click",{event:c,index:g})},d=(c,g)=>{c.key==="Enter"&&r(c,g)},m=H(()=>{var c,g;let p=[];return(c=l.default)!=null&&c.call(l)&&((g=l.default)==null||g.call(l).forEach(h=>{kt(h)&&p.push(h)})),p}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),s=H(()=>te("ui menu",A(f.value,"tabular attached"),A(e.pointing,"pointing"),A(e.secondary,"secondary"),A(e.text,"text")));return{onClick:r,onKeyDown:d,tabIndex:o,tabs:m,tabMenuClass:s,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((l,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:r=>this.onClick(r,o),onKeydown:r=>this.onKeyDown(r,o),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,o)=>t($d,ea(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,d;return[(d=(r=l.children).default)==null?void 0:d.call(r)]}}));return t(Ae,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),Xv={install(e){e.component("SuiTab",Kv),e.component("SuiTabPanel",$d)}},Qv=R({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,A(e.celled,"celled"),A(e.collapsing,"collapsing"),A(e.definition,"definition"),A(e.fixed,"fixed"),A(e.inverted,"inverted"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.stackable,"stackable"),A(e.striped,"striped"),A(e.structured,"structured"),A(e.unstackable,"unstackable"),ze(e.attached,"attached"),ze(e.basic,"basic"),ze(e.compact,"compact"),ze(e.padded,"padded"),ui(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Zv=R({render(){var e,a;return W("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),e1=R({props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,A(e.active,"active"),A(e.collapsing,"collapsing"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.selectable,"selectable"),A(e.singleLine,"single line"),A(e.warning,"warning"),Me(e.verticalAlign,"aligned"),Me(e.marked,"marked"),Ta(e.textAlign)))}},render(){var e,a,l,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),t1=R({props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>te(A(a,"full-width")))}},render(){var e,a,l,o;return this.computedClass?W("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):W("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),i1=R({props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>te(A(e.fullWidth,"full-width")))}},render(){var e,a,l,o;return this.computedClass?W("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):W("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),a1=R({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>te(A(e.singleLine,"single line"),Me(e.textAlign,"aligned"),ui(e.width,"wide")))}},render(){var e,a,l,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),l1=R({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,A(e.active,"active"),A(e.disabled,"disabled"),A(e.error,"error"),A(e.negative,"negative"),A(e.positive,"positive"),A(e.warning,"warning"),Me(e.textAlign,"aligned"),Me(e.verticalAlign,"aligned")))}},render(){var e,a,l,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),n1={install(e){e.component("SuiTable",Qv),e.component("SuiTableBody",Zv),e.component("SuiTableCell",e1),e.component("SuiTableFooter",t1),e.component("SuiTableHeader",i1),e.component("SuiTableHeaderCell",a1),e.component("SuiTableRow",l1)}};function o1(e,a){e.indexOf(a)===-1&&e.push(a)}const Bd=(e,a,l)=>Math.min(Math.max(l,e),a),Mt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Kl=e=>typeof e=="number",pa=e=>Array.isArray(e)&&!Kl(e[0]),s1=(e,a,l)=>{const o=a-e;return((l-e)%o+o)%o+e};function r1(e,a){return pa(e)?e[s1(0,e.length,a)]:e}const Td=(e,a,l)=>-l*e+l*a+e,Dd=()=>{},wi=e=>e,Ts=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Ld(e,a){const l=e[e.length-1];for(let o=1;o<=a;o++){const r=Ts(0,a,o);e.push(Td(l,1,r))}}function u1(e){const a=[0];return Ld(a,e-1),a}function c1(e,a=u1(e.length),l=wi){const o=e.length,r=o-a.length;return r>0&&Ld(a,r),d=>{let m=0;for(;m<o-2&&!(d<a[m+1]);m++);let f=Bd(0,1,Ts(a[m],a[m+1],d));return f=r1(l,m)(f),Td(e[m],e[m+1],f)}}const Id=e=>Array.isArray(e)&&Kl(e[0]),Io=e=>typeof e=="object"&&!!e.createAnimation,Aa=e=>typeof e=="function",d1=e=>typeof e=="string",Qa={ms:e=>e*1e3,s:e=>e/1e3},Ed=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,m1=1e-7,p1=12;function f1(e,a,l,o,r){let d,m,f=0;do m=a+(l-a)/2,d=Ed(m,o,r)-e,d>0?l=m:a=m;while(Math.abs(d)>m1&&++f<p1);return m}function Oa(e,a,l,o){if(e===a&&l===o)return wi;const r=d=>f1(d,0,1,e,l);return d=>d===0||d===1?d:Ed(r(d),a,o)}const g1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const o=l*e,r=a==="end"?Math.floor(o):Math.ceil(o);return Bd(0,1,r/e)},Nr={ease:Oa(.25,.1,.25,1),"ease-in":Oa(.42,0,1,1),"ease-in-out":Oa(.42,0,.58,1),"ease-out":Oa(0,0,.58,1)},h1=/\((.*?)\)/;function Or(e){if(Aa(e))return e;if(Id(e))return Oa(...e);if(Nr[e])return Nr[e];if(e.startsWith("steps")){const a=h1.exec(e);if(a){const l=a[1].split(",");return g1(parseFloat(l[0]),l[1].trim())}}return wi}class zd{constructor(a,l=[0,1],{easing:o,duration:r=Mt.duration,delay:d=Mt.delay,endDelay:m=Mt.endDelay,repeat:f=Mt.repeat,offset:s,direction:c="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=wi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,w)=>{this.resolve=h,this.reject=w}),o=o||Mt.easing,Io(o)){const h=o.createAnimation(l);o=h.easing,l=h.keyframes||l,r=h.duration||r}this.repeat=f,this.easing=pa(o)?wi:Or(o),this.updateDuration(r);const p=c1(l,s,pa(o)?o.map(Or):wi);this.tick=h=>{var w;d=d;let b=0;this.pauseTime!==void 0?b=this.pauseTime:b=(h-this.startTime)*this.rate,this.t=b,b/=1e3,b=Math.max(b-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(b=this.totalDuration);const C=b/this.duration;let $=Math.floor(C),D=C%1;!D&&C>=1&&(D=1),D===1&&$--;const _=$%2;(c==="reverse"||c==="alternate"&&_||c==="alternate-reverse"&&!_)&&(D=1-D);const v=b>=this.totalDuration?1:Math.min(D,1),x=p(this.easing(v));a(x),this.pauseTime===void 0&&(this.playState==="finished"||b>=this.totalDuration+m)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class _1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const qn=new WeakMap;function Rd(e){return qn.has(e)||qn.set(e,{transforms:[],values:new Map}),qn.get(e)}function b1(e,a){return e.has(a)||e.set(a,new _1),e.get(a)}const v1=["","X","Y","Z"],S1=["translate","scale","rotate","skew"],Xl={x:"translateX",y:"translateY",z:"translateZ"},qr={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},y1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:qr,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:wi},skew:qr},ul=new Map,Ds=e=>`--motion-${e}`,Ql=["x","y","z"];S1.forEach(e=>{v1.forEach(a=>{Ql.push(e+a),ul.set(Ds(e+a),y1[e])})});const w1=(e,a)=>Ql.indexOf(e)-Ql.indexOf(a),C1=new Set(Ql),Pd=e=>C1.has(e),A1=(e,a)=>{Xl[a]&&(a=Xl[a]);const{transforms:l}=Rd(e);o1(l,a),e.style.transform=k1(l)},k1=e=>e.sort(w1).reduce(x1,"").trim(),x1=(e,a)=>`${e} ${a}(var(${Ds(a)}))`,Eo=e=>e.startsWith("--"),jr=new Set;function $1(e){if(!jr.has(e)){jr.add(e);try{const{syntax:a,initialValue:l}=ul.has(e)?ul.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const jn=(e,a)=>document.createElement("div").animate(e,a),Gr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{jn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!jn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{jn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Gn={},oa={};for(const e in Gr)oa[e]=()=>(Gn[e]===void 0&&(Gn[e]=Gr[e]()),Gn[e]);const B1=.015,T1=(e,a)=>{let l="";const o=Math.round(a/B1);for(let r=0;r<o;r++)l+=e(Ts(0,o-1,r))+", ";return l.substring(0,l.length-2)},Ur=(e,a)=>Aa(e)?oa.linearEasing()?`linear(${T1(e,a)})`:Mt.easing:Id(e)?D1(e):e,D1=([e,a,l,o])=>`cubic-bezier(${e}, ${a}, ${l}, ${o})`;function L1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const I1=e=>Array.isArray(e)?e:[e];function zo(e){return Xl[e]&&(e=Xl[e]),Pd(e)?Ds(e):e}const Tl={get:(e,a)=>{a=zo(a);let l=Eo(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const o=ul.get(a);o&&(l=o.initialValue)}return l},set:(e,a,l)=>{a=zo(a),Eo(a)?e.style.setProperty(a,l):e.style[a]=l}};function Fd(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function E1(e,a){var l;let o=(a==null?void 0:a.toDefaultUnit)||wi;const r=e[e.length-1];if(d1(r)){const d=((l=r.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";d&&(o=m=>m+d)}return o}function z1(){return window.__MOTION_DEV_TOOLS_RECORD}function R1(e,a,l,o={},r){const d=z1(),m=o.record!==!1&&d;let f,{duration:s=Mt.duration,delay:c=Mt.delay,endDelay:g=Mt.endDelay,repeat:p=Mt.repeat,easing:h=Mt.easing,persist:w=!1,direction:b,offset:C,allowWebkitAcceleration:$=!1,autoplay:D=!0}=o;const _=Rd(e),v=Pd(a);let x=oa.waapi();v&&A1(e,a);const T=zo(a),E=b1(_.values,T),V=ul.get(T);return Fd(E.animation,!(Io(h)&&E.generator)&&o.record!==!1),()=>{const M=()=>{var Q,Y;return(Y=(Q=Tl.get(e,T))!==null&&Q!==void 0?Q:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let F=L1(I1(l),M);const j=E1(F,V);if(Io(h)){const Q=h.createAnimation(F,a!=="opacity",M,T,E);h=Q.easing,F=Q.keyframes||F,s=Q.duration||s}if(Eo(T)&&(oa.cssRegisterProperty()?$1(T):x=!1),v&&!oa.linearEasing()&&(Aa(h)||pa(h)&&h.some(Aa))&&(x=!1),x){V&&(F=F.map(ge=>Kl(ge)?V.toDefaultUnit(ge):ge)),F.length===1&&(!oa.partialKeyframes()||m)&&F.unshift(M());const Q={delay:Qa.ms(c),duration:Qa.ms(s),endDelay:Qa.ms(g),easing:pa(h)?void 0:Ur(h,s),direction:b,iterations:p+1,fill:"both"};f=e.animate({[T]:F,offset:C,easing:pa(h)?h.map(ge=>Ur(ge,s)):void 0},Q),f.finished||(f.finished=new Promise((ge,Be)=>{f.onfinish=ge,f.oncancel=Be}));const Y=F[F.length-1];f.finished.then(()=>{w||(Tl.set(e,T,Y),f.cancel())}).catch(Dd),$||(f.playbackRate=1.000001)}else if(r&&v)F=F.map(Q=>typeof Q=="string"?parseFloat(Q):Q),F.length===1&&F.unshift(parseFloat(M())),f=new r(Q=>{Tl.set(e,T,j?j(Q):Q)},F,Object.assign(Object.assign({},o),{duration:s,easing:h}));else{const Q=F[F.length-1];Tl.set(e,T,V&&Kl(Q)?V.toDefaultUnit(Q):Q)}return m&&d(e,a,F,{duration:s,delay:c,easing:h,repeat:p,offset:C},"motion-one"),E.setAnimation(f),f&&!D&&f.pause(),f}}const P1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function F1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const V1=e=>e(),Vd=(e,a,l=Mt.duration)=>new Proxy({animations:e.map(V1).filter(Boolean),duration:l,options:a},H1),M1=e=>e.animations[0],H1={get:(e,a)=>{const l=M1(e);switch(a){case"duration":return e.duration;case"currentTime":return Qa.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(N1)).catch(Dd)),e.finished;case"stop":return()=>{e.animations.forEach(o=>Fd(o))};case"forEachNative":return o=>{e.animations.forEach(r=>o(r,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Qa.ms(l);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=l;return!0}return!1}},N1=e=>e.finished;function O1(e,a,l){return Aa(e)?e(a,l):e}function q1(e){return function(a,l,o={}){a=F1(a);const r=a.length,d=[];for(let m=0;m<r;m++){const f=a[m];for(const s in l){const c=P1(o,s);c.delay=O1(c.delay,m,r);const g=R1(f,s,l[s],c,e);d.push(g)}}return Vd(d,o,o.duration)}}const j1=q1(zd);function G1(e,a={}){return Vd([()=>{const l=new zd(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function U1(e,a,l){return(Aa(e)?G1:j1)(e,a,l)}const ve=(e,a)=>(l,{duration:o,keyframesOverride:r={}})=>U1(l,{...e,...r},{autoplay:!1,...a,duration:o}),Yr=ve({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),Y1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),J1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),W1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),K1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),X1=ve({opacity:[0,1]},{duration:.5,offset:[0,1]}),Q1=ve({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Z1=ve({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),eS=ve({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),tS=ve({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),iS=ve({opacity:[1,0]},{duration:.5,offset:[0,1]}),aS=ve({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),lS=ve({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),nS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),oS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),sS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),rS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),uS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),cS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),mS=ve({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),pS=ve({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),fS=ve({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),gS=ve({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),hS=ve({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),_S=ve({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),bS=ve({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),vS=ve({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),SS=ve({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),yS=ve({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),wS=ve({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Md={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Hd={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Nd={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},CS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},AS=ve({transformOrigin:"top center",...Md},{offset:[0,1]}),kS=ve({transformOrigin:"bottom center",...Md},{offset:[0,1]}),xS=ve({transformOrigin:"center right",...Hd},{offset:[0,1]}),$S=ve({transformOrigin:"center left",...Hd},{offset:[0,1]}),BS=ve({transformOrigin:"top center",...Nd},{offset:[0,1]}),TS=ve({transformOrigin:"bottom center",...Nd},{offset:[0,1]}),Jr=ve({transformOrigin:"center left",...CS},{offset:[0,1]}),$i=.8,fa={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ga={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ha={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_a={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},DS=ve({transformOrigin:"top center",transform:fa.transform,opacity:fa.opacity},{duration:$i,offset:fa.offset}),LS=ve({transformOrigin:"bottom center",transform:fa.transform,opacity:fa.opacity},{duration:$i,offset:fa.offset}),IS=ve({transformOrigin:"center right",transform:ga.transform,opacity:ga.opacity},{duration:$i,offset:ga.offset}),ES=ve({transformOrigin:"center left",transform:ga.transform,opacity:ga.opacity},{duration:$i,offset:ga.offset}),zS=ve({transformOrigin:"top center",transform:ha.transform,opacity:ha.opacity},{duration:$i,offset:ha.offset}),RS=ve({transformOrigin:"bottom center",transform:ha.transform,opacity:ha.opacity},{duration:$i,offset:ha.offset}),PS=ve({transformOrigin:"center right",transform:_a.transform,opacity:_a.opacity},{duration:$i,offset:_a.offset}),FS=ve({transformOrigin:"center left",transform:_a.transform,opacity:_a.opacity},{duration:$i,offset:_a.offset}),VS=ve({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),MS=ve({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),HS=ve({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),NS=ve({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),OS=ve({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),qS=ve({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),jS=ve({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),GS=ve({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),US=ve({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),YS={browse:[Yr,Y1],"browse right":[Yr,J1],drop:[W1,K1],fade:[X1,iS],"fade up":[Q1,aS],"fade down":[Z1,lS],"fade left":[eS,nS],"fade right":[tS,oS],fly:[sS,mS],"fly up":[rS,pS],"fly down":[uS,fS],"fly left":[cS,gS],"fly right":[dS,hS],"horizontal flip":[_S,bS],"vertical flip":[vS,SS],scale:[yS,wS],"slide up":[kS,TS],"slide down":[AS,BS],"slide left":[xS,Jr],"slide right":[$S,Jr],"swing up":[LS,RS],"swing down":[DS,zS],"swing left":[IS,PS],"swing right":[ES,FS],zoom:[VS,MS]},JS={bounce:[HS,void 0],flash:[NS,void 0],glow:[OS,void 0],jiggle:[qS,void 0],pulse:[jS,void 0],shake:[GS,void 0],tada:[US,void 0]},Od=e=>({...YS,...JS})[e],WS=e=>{const[a,l]=Od(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),r=H(()=>(m,f)=>{if(!a)return f();const s=a(m,{duration:o.value});s.play(),s.finished.then(f)}),d=H(()=>(m,f)=>{if(!l)return f();const s=l(m,{duration:o.value});s.play(),s.finished.then(f)});return{onEnter:r,onLeave:d}},KS=R({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=WS(e);return{onEnter:a,onLeave:l}},render(){return t(_n,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),qd=R({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=Od(e.animation),o=H(()=>(d,m)=>{if(!a)return m();const f=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});f.play(),f.finished.then(m)}),r=H(()=>(d,m)=>{if(!l)return m();const f=l(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});f.play(),f.finished.then(m)});return{onEnter:o,onLeave:r}},render(){return t(Pc,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),XS={install(e){e.component("SuiTransition",KS),e.component("SuiTransitionGroup",qd)}},QS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:p_,Advertisement:g_,Breadcrumb:h_,Button:x_,Calendar:O_,Card:W_,Checkbox:K_,Comment:ob,Container:sb,Dimmer:ub,Divider:db,Dropdown:Ab,Embed:xb,Emoji:$b,Feed:Vb,Flag:Mb,Form:Nb,Grid:Ob,Header:qb,Icon:__,Image:vb,Input:jb,Item:Zb,Label:bb,List:nv,Menu:rv,Message:dv,Modal:vv,Popup:wv,Progress:kv,Rail:$v,Rating:Dv,Reveal:Lv,Search:Ev,Segment:Rv,Sidebar:Fv,Slider:Mv,Statistic:Ov,Step:Wv,Tab:Xv,Table:n1,Transition:XS},Symbol.toStringTag,{value:"Module"})),Fe=R({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var l;return te("ui",e.color,e.size,A(e.active,"active"),A(e.disabled,"disabled"),A(e.fast,"fast"),A(e.indeterminate,"indeterminate"),A(e.inverted,"inverted"),A(e.slow,"slow"),A(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),ze(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Un=R({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...xs()},setup(e,{slots:a}){const l=H(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(_t,{attached:e.attached,vertical:e.vertical},{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}}):t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}}}),ZS=R({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=H(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,r;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(r=a.default)==null?void 0:r.call(a)])}}});function Yn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const ey=R({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...$s()},setup(e,{emit:a}){const{colorClasses:l}=Bs(e),o=H(()=>{var m,f,s,c,g;return te(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((s=e.actionsProps)==null?void 0:s.attached)==="bottom"&&"top attached",((c=e.actionsProps)==null?void 0:c.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),r=G(e.showProgressUp?0:100),d=()=>{const m=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){r.value>=100&&clearInterval(f),r.value+=1;return}r.value<=0&&clearInterval(f),r.value-=1},m)},500)};return ki(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:r}},render(){var e;let a,l,o;return t(ZS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var r,d,m,f;return[this.showProgress==="top"&&t(To,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((r=this.actionsProps)==null?void 0:r.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(Un,this.actionsProps,Yn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Un,this.actionsProps,Yn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(Un,this.actionsProps,Yn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(To,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),ty=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],iy=({defaultValue:e}={})=>({position:{type:String,validator:a=>ty.includes(a),default:e}}),ay=e=>({positionClasses:H(()=>e.position||"")});function ly(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const ny=R({name:"SuiToastContainer",props:{horizontal:Boolean,...xs(),...iy({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=jd(),{attachedClasses:o}=xd(e),{positionClasses:r}=ay(e);return{classes:H(()=>te(o.value||r.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[0,`${d.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:m,marginBottom:f}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[`${d.offsetWidth}px`,0],f=[`${d.offsetHeight}px`,0],s=e.horizontal?{width:m}:{height:f},c=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...s,marginBottom:c}}}},render(){let e;return t(fn,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(qd,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},ly(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(ey,ea({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),oy=G(1),Fa=G([]),jd=()=>({items:Fa,add:e=>{e.position=e.position||"top right",Fa.value=[...Fa.value,{id:oy.value++,...e}]},remove:e=>{Fa.value=Fa.value.filter(a=>a.id!==e)}}),ct=()=>{var e;const a=(e=Xt())==null?void 0:e.appContext,{add:l}=jd();return{toast:o=>{const{position:r,attached:d,horizontal:m}=o;uy({position:r,attached:d,horizontal:m})||ry(a,{position:r,attached:d,horizontal:m}),l(o)}}},sy=(e,{appContext:a,element:l}={})=>{const o=l||document.createElement("div");return a&&(e.appContext=a),Jl(e,o),{vNode:e,el:o}},ry=(e,{position:a="top right",attached:l,horizontal:o=!1}={})=>{const r=W(ny,{position:a,attached:l,horizontal:o}),{el:d}=sy(r,{appContext:e});return{vNode:r,el:d}},uy=({position:e="top right",attached:a,horizontal:l})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function cy(e){Object.values({...QS}).map(a=>e.use(a))}const dy={install:cy},my=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=nd(),l=H(()=>{const r=a.currentRoute.value.path;return r.lastIndexOf("/")===r.length-1?r.slice(0,-1):r}),o=r=>{r.preventDefault();const m=r.target.parentElement.getAttribute("href"),f=m.slice(m.indexOf("#")+1),s=document.getElementById(f);s&&s.scrollIntoView({behavior:"smooth"})};return(r,d)=>{const m=y("SuiHeader"),f=y("SuiGridColumn"),s=y("SuiGridRow");return k(),be(Ae,null,[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Te(e.label)+" ",1),t(u(bs),{to:`${l.value}#${r.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(u(X),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(u(X),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[ji(r.$slots,"default",{},void 0,!0)])],64)}}}),py=Le(my,[["__scopeId","data-v-a2b78897"]]),fy={class:"inner"},gy={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const o=y("SuiGridColumn"),r=y("SuiGridRow");return k(),B(r,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[ji(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",fy,[yi((k(),be("pre",null,[S("code",null,Te(e.code)+`
`,1)])),[[u(Rl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},hy=Le(gy,[["__scopeId","data-v-965e7ddc"]]),I={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),l=()=>a.value=!a.value;return(o,r)=>{const d=y("SuiGrid");return k(),be("section",null,[t(d,{columns:2},{default:i(()=>[t(py,ea({label:e.label,"on-click":l},o.$attrs),{default:i(()=>[ji(o.$slots,"description")]),_:3},16,["label"]),t(hy,{code:e.code,"hide-code":a.value},{default:i(()=>[ji(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},_y=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,by={__name:"ButtonDoc",setup(e){const a=G("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,r)=>(k(),B(I,{label:"Button",code:_y},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(u(P),{onClick:l},{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1}))}},vy=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,Sy={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Emphasis",code:vy},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(u(P),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(u(P),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(u(P),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},yy=`<template>
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
</template>`,wy={__name:"AnimatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Animated",code:yy},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(u(P),{animated:""},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[t(u(X),{name:"arrow right"})]),_:1})]),_:1}),t(u(P),{animated:"vertical"},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[t(u(X),{name:"shop"})]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(u(P),{animated:"fade"},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},Cy=`<template>
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
</template>`,Ay={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Labeled",code:Cy},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(u(P),{labeled:"right",as:"div"},{default:i(()=>[t(u(P),{icon:"heart",content:" Like"}),t(u(O),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(u(P),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(u(P),{icon:"heart",content:" Like"})]),_:1}),t(u(P),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(u(P),{icon:"fork"})]),_:1})]),_:1}))}},ky=`<template>
  <SuiButton icon="cloud" />
</template>`,xy={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:ky},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(u(P),{icon:"cloud"})]),_:1}))}},$y=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,By={__name:"LabeledIconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Labeled Icon",code:$y},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(u(P),{labeled:"",icon:"pause",content:"Pause"}),t(u(P),{labeled:"right",icon:"right arrow",content:"Next"}),t(u(P),{labeled:"",icon:""},{default:i(()=>[t(u(X),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},Ty=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,Dy={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic",code:Ty},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(u(P),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(P),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(P),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(u(P),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},Ly=`<template>
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
</template>`,Iy={__name:"TertiaryDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Tertiary",code:Ly},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(u(P),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(P),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(P),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(P),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(P),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(P),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(P),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(P),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(P),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(P),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(P),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(P),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(P),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(P),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(P),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Ey=`<template>
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
</template>`,zy={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:Ey},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(P),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(P),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(P),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(P),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(P),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(P),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(P),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(P),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(P),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(P),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(P),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(P),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(P),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(P),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(P),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ry=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,Py={__name:"ButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Buttons",code:Ry},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(P),{content:"One"}),t(u(P),{content:"Two"}),t(u(P),{content:"Three"})]),_:1})]),_:1}))}},Fy=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Vy={__name:"IconButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon Buttons",code:Fy},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(_t),{icon:""},{default:i(()=>[t(u(P),{icon:"align left"}),t(u(P),{icon:"align center"}),t(u(P),{icon:"align right"}),t(u(P),{icon:"align justify"})]),_:1})]),_:1}))}},My=S("div",{class:"or"},null,-1),Hy=S("div",{class:"or","data-text":"ou"},null,-1),Ny=`<template>
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
</template>`,Oy={__name:"ConditionalsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Conditionals",code:Ny},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(P),{content:"Cancel"}),My,t(u(P),{content:"Save",positive:""})]),_:1}),t(u(_t),null,{default:i(()=>[t(u(P),{content:"un"}),Hy,t(u(P),{content:"deux",positive:""})]),_:1})]),_:1}))}},qy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,jy={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Active",code:qy},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(u(P),{active:"",icon:"user",content:" Follow"})]),_:1}))}},Gy=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Uy={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:Gy},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(P),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Yy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Jy={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:Yy},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(u(P),{loading:"",content:"Loading"}),t(u(P),{loading:"double",primary:"",content:"Loading"}),t(u(P),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Wy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Ky={__name:"SocialDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Social",code:Wy},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(u(P),{facebook:"",icon:"facebook",content:" Facebook"}),t(u(P),{twitter:"",icon:"twitter",content:" Twitter"}),t(u(P),{vk:"",icon:"vk",content:"VK"}),t(u(P),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(u(P),{instagram:"",icon:"instagram",content:" Instagram"}),t(u(P),{youtube:"",icon:"youtube",content:" YouTube"}),t(u(P),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(u(P),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Xy=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Qy={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:Xy},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(u(P),{size:"mini",content:"Mini"}),t(u(P),{size:"tiny",content:"Tiny"}),t(u(P),{size:"small",content:"Small"}),t(u(P),{size:"medium",content:"Medium"}),t(u(P),{size:"large",content:"Large"}),t(u(P),{size:"big",content:"Big"}),t(u(P),{size:"huge",content:"Huge"}),t(u(P),{size:"massive",content:"Massive"})]),_:1}))}},Zy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,ew={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floated",code:Zy},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(u(P),{floated:"left",content:"Left Floated"}),t(u(P),{floated:"right",content:"Right Floated"})]),_:1}))}},tw=`<template>
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
</template>`,iw={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:tw},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(u(P),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(P),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(P),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(P),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(P),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(P),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(P),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(P),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(P),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(P),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(P),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(P),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(P),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},aw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,lw={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Compact",code:aw},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(u(P),{compact:"",content:"Hold"}),t(u(P),{compact:"",icon:"pause"}),t(u(P),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},nw=`<template>
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
<\/script>`,ow={__name:"ToggleDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(I,{label:"Toggle",code:nw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(u(P),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},sw=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,rw={__name:"PositiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Positive",code:sw},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(u(P),{positive:"",content:"Positive Button"})]),_:1}))}},uw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,cw={__name:"NegativeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Negative",code:uw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(u(P),{negative:"",content:"Negative Button"})]),_:1}))}},dw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,mw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:dw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(u(P),{fluid:"",content:"Fits container"})]),_:1}))}},pw=`<template>
  <SuiButton circular icon="settings" />
</template>`,fw={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:pw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(u(P),{circular:"",icon:"settings"})]),_:1}))}},gw=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),hw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,_w={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertically Attached",code:hw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(u(P),{attached:"top",content:"Top"}),t(u(N),{attached:""},{default:i(()=>[gw]),_:1}),t(u(P),{attached:"bottom",content:"Bottom"})]),_:1}))}},bw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,vw={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontally Attached",code:bw},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(u(P),{attached:"left",content:"Left"}),t(u(P),{attached:"right",content:"Right"})]),_:1}))}},Sw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,yw={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertical Buttons",code:Sw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(u(_t),{vertical:""},{default:i(()=>[t(u(P),null,{default:i(()=>[n("Feed")]),_:1}),t(u(P),null,{default:i(()=>[n("Messages")]),_:1}),t(u(P),null,{default:i(()=>[n("Events")]),_:1}),t(u(P),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},ww=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Cw={__name:"StackableButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Stackable Buttons",code:ww},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(u(_t),{stackable:""},{default:i(()=>[t(u(P),null,{default:i(()=>[n("Feed")]),_:1}),t(u(P),null,{default:i(()=>[n("Messages")]),_:1}),t(u(P),null,{default:i(()=>[n("Events")]),_:1}),t(u(P),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Aw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,kw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon Buttons",code:Aw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(u(_t),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(u(P),{icon:"pause",content:"Pause"}),t(u(P),{icon:"play",content:"Play"}),t(u(P),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},xw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,$w={__name:"MixedGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Mixed Group",code:xw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(P),{labeled:"",icon:"left chevron",content:"Back"}),t(u(P),{icon:"stop",content:"Stop"}),t(u(P),{icon:"",labeled:"right"},{default:i(()=>[t(u(X),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},Bw=`<template>
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
</template>`,Tw={__name:"EqualWidthDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Equal Width",code:Bw},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(u(_t),{widths:5},{default:i(()=>[t(u(P),null,{default:i(()=>[n("Overview")]),_:1}),t(u(P),null,{default:i(()=>[n("Specs")]),_:1}),t(u(P),null,{default:i(()=>[n("Warranty")]),_:1}),t(u(P),null,{default:i(()=>[n("Reviews")]),_:1}),t(u(P),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(u(_t),{widths:3},{default:i(()=>[t(u(P),null,{default:i(()=>[n("Overview")]),_:1}),t(u(P),null,{default:i(()=>[n("Specs")]),_:1}),t(u(P),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Dw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Lw={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored Buttons",code:Dw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(_t),{color:"blue"},{default:i(()=>[t(u(P),null,{default:i(()=>[n("One")]),_:1}),t(u(P),null,{default:i(()=>[n("Two")]),_:1}),t(u(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Iw=`<template>
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
</template>`,Ew={__name:"BasicButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic Buttons",code:Iw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(u(_t),{basic:""},{default:i(()=>[t(u(P),null,{default:i(()=>[n("One")]),_:1}),t(u(P),null,{default:i(()=>[n("Two")]),_:1}),t(u(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(u(_t),null,{default:i(()=>[t(u(P),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(u(P),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(u(P),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},zw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Rw={__name:"GroupSizesDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Group Sizes",code:zw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(_t),{size:"large"},{default:i(()=>[t(u(P),null,{default:i(()=>[n("One")]),_:1}),t(u(P),null,{default:i(()=>[n("Two")]),_:1}),t(u(P),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Pw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:by},{id:"emphasis",label:"Emphasis",category:"Types",component:Sy},{id:"animated",label:"Animated",category:"Types",component:wy},{id:"labeled",label:"Labeled",category:"Types",component:Ay},{id:"icon",label:"Icon",category:"Types",component:xy},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:By},{id:"basic",label:"Basic",category:"Types",component:Dy},{id:"tertiary",label:"Tertiary",category:"Types",component:Iy},{id:"inverted",label:"Inverted",category:"Types",component:zy},{id:"buttons",label:"Buttons",category:"Groups",component:Py},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Vy},{id:"content",label:"Content",category:"Content",component:Oy},{id:"active",label:"Active",category:"States",component:jy},{id:"disabled",label:"Disabled",category:"States",component:Uy},{id:"loading",label:"Loading",category:"States",component:Jy},{id:"social",label:"Social",category:"Variations",component:Ky},{id:"size",label:"Size",category:"Variations",component:Qy},{id:"floated",label:"Floated",category:"Variations",component:ew},{id:"colored",label:"Colored",category:"Variations",component:iw},{id:"compact",label:"Compact",category:"Variations",component:lw},{id:"toggle",label:"Toggle",category:"Variations",component:ow},{id:"positive",label:"Positive",category:"Variations",component:rw},{id:"negative",label:"Negative",category:"Variations",component:cw},{id:"fluid",label:"Fluid",category:"Variations",component:mw},{id:"circular",label:"Circular",category:"Variations",component:fw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:_w},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:vw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:yw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:Cw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:kw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:$w},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Tw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Lw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Ew},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Rw}];return(l,o)=>(k(),B(ut,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Fw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Vw=`<template>
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
</template>`,Mw={__name:"ContainerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Container",code:Vw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(u(Ni),null,{default:i(()=>[Fw]),_:1})]),_:1}))}},Hw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Nw=`<template>
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
</template>`,Ow={__name:"TextContainerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Container",code:Nw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(u(Ni),{text:""},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Hw]),_:1})]),_:1}))}},qw=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,jw={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Alignment",code:qw},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(u(Ni),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(u(Ni),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(u(Ni),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},Gw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Uw=`<template>
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
</template>`,Yw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:Uw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(u(Ni),{fluid:""},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),Gw]),_:1})]),_:1}))}},Jw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Mw},{id:"text-container",label:"Text Container",category:"Types",component:Ow},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:jw},{id:"fluid",label:"Fluid",category:"Variations",component:Yw}];return(l,o)=>(k(),B(ut,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Ww=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Kw={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Divider",code:Ww},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve)),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Xw=S("label",null,"Username",-1),Qw=S("input",{type:"text",placeholder:"Username"},null,-1),Zw=S("label",null,"Password",-1),eC=S("input",{type:"password",placeholder:"Password"},null,-1),tC=`<template>
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
</template>`,iC={__name:"VerticalDividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertical Divider",code:tC},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(u(N),{placeholder:""},{default:i(()=>[t(u(hl),{columns:"equal"},{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(at),null,{default:i(()=>[Xw,Qw]),_:1}),t(u(at),null,{default:i(()=>[Zw,eC]),_:1}),t(u(P),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(u(Tt),{textAlign:"middle"},{default:i(()=>[t(u(P),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(u(Ve),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},aC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,lC={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal Divider",code:aC},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(u(N),{basic:"",textAlign:"center"},{default:i(()=>[t(u(et),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(u(Ve),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(u(P),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},nC=`<template>
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
</template>`,oC={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal Alignment",code:nC},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(u(Ve),{horizontal:"",textAlign:"left"},{default:i(()=>[t(u(X),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(u(Ve),{horizontal:"",textAlign:"center"},{default:i(()=>[t(u(X),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(u(Ve),{horizontal:"",textAlign:"right"},{default:i(()=>[t(u(X),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},sC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,rC={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:sC},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{inverted:""}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},uC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,cC={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:uC},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(u(N),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(u(Ve),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},dC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,mC={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Hidden",code:dC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(u(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{hidden:""}),t(u(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},pC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,fC={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Section",code:pC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(u(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{section:""}),t(u(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},gC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,hC={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Clearing",code:gC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(u(Ve),{clearing:""}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},_C=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,bC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:_C},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(u(Ve),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(u(Ve),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(u(Ve),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(u(Ve),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(u(Ve),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(u(Ve),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(u(Ve),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},vC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Kw},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:iC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:lC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:oC},{id:"inverted",label:"Inverted",category:"Variations",component:rC},{id:"fitted",label:"Fitted",category:"Variations",component:cC},{id:"hidden",label:"Hidden",category:"Variations",component:mC},{id:"section",label:"Section",category:"Variations",component:fC},{id:"clearing",label:"Clearing",category:"Variations",component:hC},{id:"size",label:"Size",category:"Variations",component:bC}];return(l,o)=>(k(),B(ut,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},SC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,yC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:SC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(u(It),{name:"anguished",disabled:""})]),_:1}))}},wC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,CC={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:wC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(u(It),{name:"angel",loading:""}),t(u(It),{name:"blush",loading:""}),t(u(It),{name:"grin",loading:""})]),_:1}))}},AC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,kC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:AC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(u(It),{name:"relaxed",size:"small"}),t(u(It),{name:"relaxed",size:"medium"}),t(u(It),{name:"relaxed",size:"large"}),t(u(It),{name:"relaxed",size:"big"})]),_:1}))}},xC=`<template>
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
</template>`,$C={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Autosizing",code:xC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(It),{name:"relaxed"})]),_:1}),t(u(P),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(It),{name:"relaxed"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(It),{name:"relaxed"})]),_:1})]),_:1}))}},BC=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,TC={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:BC},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(u(It),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},DC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:yC},{id:"loading",label:"Loading",category:"States",component:CC},{id:"size",label:"Size",category:"Variations",component:kC},{id:"autosizing",label:"Autosizing",category:"Variations",component:$C},{id:"link",label:"Link",category:"Variations",component:TC}];return(l,o)=>(k(),B(ut,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},LC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,IC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:LC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(u(Jt),{name:"de",size:"small"}),t(u(Jt),{name:"fr",size:"medium"}),t(u(Jt),{name:"li",size:"large"}),t(u(Jt),{name:"jp",size:"big"}),t(u(Jt),{name:"gb",size:"huge"}),t(u(Jt),{name:"un",size:"massive"})]),_:1}))}},EC=`<template>
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
</template>`,zC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Autosizing",code:EC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(Jt),{name:"us"})]),_:1}),t(u(P),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(Jt),{name:"eu"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(Jt),{name:"pirate"})]),_:1})]),_:1}))}},RC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:IC},{id:"autosizing",label:"Autosizing",category:"Types",component:zC}];return(l,o)=>(k(),B(ut,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},PC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,FC={__name:"PageHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Page Headers",code:PC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(u(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(u(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(u(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(u(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(u(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},VC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,MC={__name:"ContentHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Content Headers",code:VC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(u(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(u(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(u(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(u(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(u(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},HC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,NC={__name:"IconHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon Headers",code:HC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(u(fe),{icon:""},{default:i(()=>[t(u(X),{name:"settings"}),t(u(ys),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(u(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},OC=S("span",null,"$10.99",-1),qC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,jC={__name:"SubHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Sub Headers",code:qC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(u(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),OC]),_:1}))}},GC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,UC={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image",code:GC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},YC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,JC={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:YC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[t(u(X),{name:"plug"}),t(u(ys),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},WC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,KC={__name:"SubheaderDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Subheader",code:WC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(u(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},XC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,QC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:XC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(u(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},ZC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,eA={__name:"DividingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Dividing",code:ZC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(u(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},tA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,iA={__name:"BlockDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Block",code:tA},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(u(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},aA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,lA={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Attached",code:aA},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(u(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(u(N),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},nA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,oA={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floating",code:nA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(u(N),{clearing:""},{default:i(()=>[t(u(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(u(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},sA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,rA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Alignment",code:sA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(u(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(u(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(u(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},uA=`<template>
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
</template>`,cA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:uA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(u(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},dA=`<template>
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
</template>`,mA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:dA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},pA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:FC},{id:"content-headers",label:"Content Headers",category:"Types",component:MC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:NC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:jC},{id:"image",label:"Image",category:"Content",component:UC},{id:"icon",label:"Icon",category:"Content",component:JC},{id:"subheader",label:"Subheader",category:"Content",component:KC},{id:"disabled",label:"Disabled",category:"States",component:QC},{id:"dividing",label:"Dividing",category:"Variations",component:eA},{id:"block",label:"Block",category:"Variations",component:iA},{id:"attached",label:"Attached",category:"Variations",component:lA},{id:"floating",label:"Floating",category:"Variations",component:oA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:rA},{id:"colored",label:"Colored",category:"Variations",component:cA},{id:"inverted",label:"Inverted",category:"Variations",component:mA}];return(l,o)=>(k(),B(ut,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},fA=`<template>
  <SuiIcon name="users" disabled />
</template>`,gA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:fA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(u(X),{name:"users",disabled:""})]),_:1}))}},hA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,_A={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:hA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(u(X),{name:"spinner",loading:""}),t(u(X),{name:"notched circle",loading:""}),t(u(X),{name:"asterisk",loading:""})]),_:1}))}},bA=S("br",null,null,-1),vA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,SA={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fitted",code:vA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[n(" This icon "),t(u(X),{name:"help",fitted:""}),n(" is fitted. "),bA,n(" This icon "),t(u(X),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},yA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,wA={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:yA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(u(X),{name:"home",size:"mini"}),t(u(X),{name:"home",size:"tiny"}),t(u(X),{name:"home",size:"small"}),t(u(X),{name:"home"}),t(u(X),{name:"home",size:"large"}),t(u(X),{name:"home",size:"big"}),t(u(X),{name:"home",size:"huge"}),t(u(X),{name:"home",size:"massive"})]),_:1}))}},CA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,AA={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:CA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(u(X),{name:"close",link:""}),t(u(X),{name:"help",link:""})]),_:1}))}},kA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,xA={__name:"FlippedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Flipped",code:kA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(u(X),{name:"cloud",flipped:"horizontally"}),t(u(X),{name:"cloud",flipped:"vertically"})]),_:1}))}},$A=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,BA={__name:"RotatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Rotated",code:$A},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(u(X),{name:"cloud",rotated:"clockwise"}),t(u(X),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},TA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,DA={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:TA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(u(X),{name:"users",circular:""}),t(u(X),{name:"users",circular:"",color:"teal"}),t(u(X),{name:"users",circular:"",inverted:""}),t(u(X),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},LA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,IA={__name:"CircularColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular Colored",code:LA},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(X),{name:"users",circular:"",colored:"",color:"red"}),t(u(X),{name:"users",circular:"",colored:"",color:"green"}),t(u(X),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},EA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,zA={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Bordered",code:EA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(u(X),{name:"users",bordered:""}),t(u(X),{name:"users",bordered:"",color:"teal"}),t(u(X),{name:"users",bordered:"",inverted:"",color:"black"}),t(u(X),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},RA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,PA={__name:"BorderedColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Bordered Colored",code:RA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(X),{name:"users",bordered:"",colored:"",color:"red"}),t(u(X),{name:"users",bordered:"",colored:"",color:"green"}),t(u(X),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},FA=`<template>
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
</template>`,VA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:FA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(u(X),{name:"users",primary:""}),t(u(X),{name:"users",secondary:""}),t(u(X),{name:"users",color:"red"}),t(u(X),{name:"users",color:"orange"}),t(u(X),{name:"users",color:"yellow"}),t(u(X),{name:"users",color:"olive"}),t(u(X),{name:"users",color:"green"}),t(u(X),{name:"users",color:"teal"}),t(u(X),{name:"users",color:"blue"}),t(u(X),{name:"users",color:"violet"}),t(u(X),{name:"users",color:"purple"}),t(u(X),{name:"users",color:"pink"}),t(u(X),{name:"users",color:"brown"}),t(u(X),{name:"users",color:"grey"}),t(u(X),{name:"users",color:"black"})]),_:1}))}},MA=`<template>
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
</template>`,HA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:MA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(u(X),{name:"users",inverted:""}),t(u(X),{name:"users",inverted:"",primary:""}),t(u(X),{name:"users",inverted:"",secondary:""}),t(u(X),{name:"users",inverted:"",color:"red"}),t(u(X),{name:"users",inverted:"",color:"orange"}),t(u(X),{name:"users",inverted:"",color:"yellow"}),t(u(X),{name:"users",inverted:"",color:"olive"}),t(u(X),{name:"users",inverted:"",color:"green"}),t(u(X),{name:"users",inverted:"",color:"teal"}),t(u(X),{name:"users",inverted:"",color:"blue"}),t(u(X),{name:"users",inverted:"",color:"violet"}),t(u(X),{name:"users",inverted:"",color:"purple"}),t(u(X),{name:"users",inverted:"",color:"pink"}),t(u(X),{name:"users",inverted:"",color:"brown"}),t(u(X),{name:"users",inverted:"",color:"grey"})]),_:1}))}},NA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,OA={__name:"IconsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icons",code:NA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(u(Ri),{size:"huge"},{default:i(()=>[t(u(X),{name:"circle outline",size:"big"}),t(u(X),{name:"user"})]),_:1}),t(u(Ri),{size:"huge"},{default:i(()=>[t(u(X),{name:"dont",size:"big",color:"red"}),t(u(X),{name:"user",color:"black"})]),_:1})]),_:1}))}},qA=`<template>
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
</template>`,jA={__name:"CornerIconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Corner Icon",code:qA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(u(Ri),{size:"huge"},{default:i(()=>[t(u(X),{name:"puzzle"}),t(u(X),{name:"add",corner:"top left"})]),_:1}),t(u(Ri),{size:"huge"},{default:i(()=>[t(u(X),{name:"puzzle"}),t(u(X),{name:"add",corner:"top right"})]),_:1}),t(u(Ri),{size:"huge"},{default:i(()=>[t(u(X),{name:"puzzle"}),t(u(X),{name:"add",corner:"bottom left"})]),_:1}),t(u(Ri),{size:"huge"},{default:i(()=>[t(u(X),{name:"puzzle"}),t(u(X),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},GA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:gA},{id:"loading",label:"Loading",category:"States",component:_A},{id:"fitted",label:"Fitted",category:"Variations",component:SA},{id:"size",label:"Size",category:"Variations",component:wA},{id:"link",label:"Link",category:"Variations",component:AA},{id:"flipped",label:"Flipped",category:"Variations",component:xA},{id:"rotated",label:"Rotated",category:"Variations",component:BA},{id:"circular",label:"Circular",category:"Variations",component:DA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:IA},{id:"bordered",label:"Bordered",category:"Variations",component:zA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:PA},{id:"colored",label:"Colored",category:"Variations",component:VA},{id:"inverted",label:"Inverted",category:"Variations",component:HA},{id:"icons",label:"Icons",category:"Groups",component:OA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:jA}];return(l,o)=>(k(),B(ut,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},UA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,YA={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image",code:UA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},JA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,WA={__name:"ImageLinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image Link",code:JA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(u(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},KA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,XA={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Hidden",code:KA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},QA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,ZA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:QA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},e0=S("span",null,"Username",-1),t0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,i0={__name:"AvatarDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Avatar",code:t0},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),e0]),_:1}))}},a0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,l0={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Bordered",code:a0},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},n0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,o0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:n0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},s0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,r0={__name:"RoundedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Rounded",code:s0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},u0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,c0={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:u0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},d0=S("span",null,"Top Aligned",-1),m0=S("span",null,"Middle Aligned",-1),p0=S("span",null,"Bottom Aligned",-1),f0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,g0={__name:"VerticallyAlignedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertically Aligned",code:f0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(u(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),d0,t(u(Ve)),t(u(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),m0,t(u(Ve)),t(u(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),p0]),_:1}))}},h0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),_0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),b0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),v0=`<template>
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
</template>`,S0={__name:"CenteredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Centered",code:v0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),h0,_0,t(u(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),b0]),_:1})]),_:1}))}},y0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,w0={__name:"SpacedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Spaced",code:y0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(N),null,{default:i(()=>[S("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(u(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},C0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),A0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),k0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),x0=`<template>
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
</template>`,$0={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floated",code:x0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),C0,t(u(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),A0,k0]),_:1})]),_:1}))}},B0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,T0={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:B0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(u(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},D0=`<template>
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
</template>`,L0={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:D0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(u(ko),{size:"tiny"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Ve),{hidden:""}),t(u(ko),{size:"small"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},I0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:YA},{id:"image-link",label:"Image Link",category:"Types",component:WA},{id:"hidden",label:"Hidden",category:"States",component:XA},{id:"disabled",label:"Disabled",category:"States",component:ZA},{id:"avatar",label:"Avatar",category:"Variations",component:i0},{id:"bordered",label:"Bordered",category:"Variations",component:l0},{id:"fluid",label:"Fluid",category:"Variations",component:o0},{id:"rounded",label:"Rounded",category:"Variations",component:r0},{id:"circular",label:"Circular",category:"Variations",component:c0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:g0},{id:"centered",label:"Centered",category:"Variations",component:S0},{id:"spaced",label:"Spaced",category:"Variations",component:w0},{id:"floated",label:"Floated",category:"Variations",component:$0},{id:"size",label:"Size",category:"Variations",component:T0},{id:"group-size",label:"Size",category:"Groups",component:L0}];return(l,o)=>(k(),B(ut,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},E0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,z0={__name:"InputDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Input",code:E0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(u(et),{placeholder:"Search..."})]),_:1}))}},R0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,P0={__name:"FocusDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Focus",code:R0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(u(et),{focus:"",placeholder:"Search..."})]),_:1}))}},F0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,V0={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:F0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(u(et),{loading:"",icon:"user",placeholder:"Search..."}),t(u(et),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},M0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,H0={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:M0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(u(et),{disabled:"",placeholder:"Search..."})]),_:1}))}},N0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,O0={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Error",code:N0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(u(et),{error:"",placeholder:"Search..."})]),_:1}))}},q0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,j0={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:q0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(u(et),{icon:"search",placeholder:"Search..."}),t(u(et),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},G0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,U0={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Labeled",code:G0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(u(et),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},Y0=`<template>
  <SuiInput action="Search" />
</template>`,J0={__name:"ActionDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Action",code:Y0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(u(et),{action:"Search"})]),_:1}))}},W0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,K0={__name:"TransparentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Transparent",code:W0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(u(et),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},X0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,Q0={__name:"InvertedDoc",setup(e){return(a,l)=>{const o=y("SuiSegment");return k(),B(I,{label:"Inverted",code:X0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(u(et),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},Z0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,ek={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:Z0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(u(et),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},tk=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,ik={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:tk},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(u(et),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(u(et),{icon:"search",placeholder:"Search small...",size:"small"}),t(u(et),{icon:"search",placeholder:"Search large...",size:"large"}),t(u(et),{icon:"search",placeholder:"Search big...",size:"big"}),t(u(et),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(u(et),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},ak={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:z0},{id:"focus",label:"Focus",category:"States",component:P0},{id:"loading",label:"Loading",category:"States",component:V0},{id:"disabled",label:"Disabled",category:"States",component:H0},{id:"error",label:"Error",category:"States",component:O0},{id:"icon",label:"Icon",category:"Variations",component:j0},{id:"labeled",label:"Labeled",category:"Variations",component:U0},{id:"action",label:"Action",category:"Variations",component:J0},{id:"transparent",label:"Transparent",category:"Variations",component:K0},{id:"inverted",label:"Inverted",category:"Variations",component:Q0},{id:"fluid",label:"Fluid",category:"Variations",component:ek},{id:"size",label:"Size",category:"Variations",component:ik}];return(l,o)=>(k(),B(ut,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},lk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,nk={__name:"LabelDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Label",code:lk},{description:i(()=>[n(" A label ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(X),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},Ro="/vue-fomantic-ui/images/avatar/small/joe.jpg",Gd="/vue-fomantic-ui/images/avatar/small/veronika.jpg",oi="/vue-fomantic-ui/images/avatar/small/elliot.jpg",ok=S("img",{src:Ro},null,-1),sk=S("img",{src:Gd},null,-1),rk=S("img",{src:oi},null,-1),uk=`<template>
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
</template>`,ck={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image",code:uk},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(u(O),{as:"a",image:""},{default:i(()=>[ok,n(" Joe ")]),_:1}),t(u(O),{as:"a",image:"",color:"blue"},{default:i(()=>[sk,n(" Veronika "),t(u(Da),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(u(O),{as:"a",image:""},{default:i(()=>[rk,n(" Elliot "),t(u(X),{name:"delete"})]),_:1})]),_:1}))}},dk=S("input",{type:"text",placeholder:"First Name"},null,-1),mk=S("input",{type:"text"},null,-1),pk=S("input",{type:"text",placeholder:"Username"},null,-1),fk=S("input",{type:"password"},null,-1),gk=`<template>
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
</template>`,hk={__name:"PointingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Pointing",code:gk},{description:i(()=>[n(" A label can point to content next to it ")]),example:i(()=>[t(u(Nt),{fluid:""},{default:i(()=>[t(u(at),null,{default:i(()=>[dk,t(u(O),{pointing:""},{default:i(()=>[n("Please enter a value")]),_:1})]),_:1}),t(u(Ve)),t(u(at),null,{default:i(()=>[t(u(O),{pointing:"below"},{default:i(()=>[n("Please enter a value")]),_:1}),mk]),_:1}),t(u(Ve)),t(u(at),{inline:""},{default:i(()=>[pk,t(u(O),{pointing:"left",color:"red",basic:""},{default:i(()=>[n("That name is taken!")]),_:1})]),_:1}),t(u(Ve)),t(u(at),{inline:""},{default:i(()=>[t(u(O),{pointing:"right",color:"red",basic:""},{default:i(()=>[n("Your password must be 6 characters or more")]),_:1}),fk]),_:1})]),_:1})]),_:1}))}},_k=`<template>
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
</template>`,bk={__name:"CornerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Corner",code:_k},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(u(hl),{columns:2},{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},vk=`<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`,Sk={__name:"TagDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Tag",code:vk},{description:i(()=>[n(" A label can appear as a tag ")]),example:i(()=>[t(u(O),{as:"a",tag:""},{default:i(()=>[n("New")]),_:1}),t(u(O),{as:"a",tag:"",color:"red"},{default:i(()=>[n("Upcoming")]),_:1}),t(u(O),{as:"a",tag:"",color:"teal"},{default:i(()=>[n("Featured")]),_:1})]),_:1}))}},yk=S("span",null,"Account Details",-1),wk=S("span",null,"User Reviews",-1),Ck=S("span",null,"Technical Specifications",-1),Ak=S("span",null,"User Reviews",-1),kk=`<template>
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
</template>`,xk={__name:"RibbonDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Ribbon",code:kk},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(u(hl),{columns:2},{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(N),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),yk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),wk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),Ck,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),Ak,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},$k=`<template>
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
</template>`,Bk={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Attached",code:$k},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(u(hl),{columns:3},{default:i(()=>[t(u($o),null,{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(u($o),null,{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Tk=`<template>
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
</template>`,Dk={__name:"HorizontalDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal",code:Tk},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(u(_d),{divided:"",selection:""},{default:i(()=>[t(u(Ha),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},Lk=`<template>
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
</template>`,Ik={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floating",code:Lk},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(u(bd),{compact:""},{default:i(()=>[t(u(Bo),null,{default:i(()=>[t(u(X),{name:"mail"}),n(" Messages "),t(u(O),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(u(Bo),null,{default:i(()=>[t(u(X),{name:"users"}),n(" Friends "),t(u(O),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ek=`<template>
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
</template>`,zk={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:Ek},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(O),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Rk=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,Pk={__name:"DetailDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Detail",code:Rk},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(u(O),null,{default:i(()=>[n(" Dogs "),t(u(Da),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Fk=`<template>
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
</template>`,Vk={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:Fk},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(X),{name:"mail"}),n(" Mail ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(X),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(u(O),{icon:"dog"}),t(u(O),{icon:"cat"})]),_:1}))}},Mk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Hk={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:Mk},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(u(O),{as:"a"},{default:i(()=>[t(u(X),{name:"mail"}),n(" 23 ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(X),{name:"mail"}),n(" 23 "),t(u(Da),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Nk=`<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`,Ok={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:Nk},{description:i(()=>[n(" A label can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(O),{disabled:""},{default:i(()=>[n("Disabled Label")]),_:1})]),_:1}))}},qk=`<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`,jk={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:qk},{description:i(()=>[n(" A label can take the width of its container ")]),example:i(()=>[t(u(O),{fluid:""},{default:i(()=>[n("Fits container")]),_:1})]),_:1}))}},Gk=`<template>
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
</template>`,Uk={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:Gk},{description:i(()=>[n(" A label can be circular ")]),example:i(()=>[t(u(O),{circular:"",color:"red"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"orange"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"yellow"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"olive"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"green"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"teal"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"blue"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"violet"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"purple"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"pink"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"brown"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"grey"},{default:i(()=>[n("2")]),_:1}),t(u(O),{circular:"",color:"black"},{default:i(()=>[n("2")]),_:1})]),_:1}))}},Yk=S("img",{src:oi},null,-1),Jk=`<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`,Wk={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic",code:Jk},{description:i(()=>[n(" A label can reduce its complexity ")]),example:i(()=>[t(u(O),{as:"a",basic:""},{default:i(()=>[n("Basic")]),_:1}),t(u(O),{as:"a",basic:"",pointing:""},{default:i(()=>[n("Pointing")]),_:1}),t(u(O),{as:"a",basic:"",image:""},{default:i(()=>[Yk,n(" Elliot ")]),_:1}),t(u(O),{as:"a",basic:"",pointing:"",color:"red"},{default:i(()=>[n("Red Pointing")]),_:1}),t(u(O),{as:"a",basic:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1})]),_:1}))}},Kk=`<template>
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
</template>`,Xk={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:Kk},{description:i(()=>[n(" A label can have different colors ")]),example:i(()=>[t(u(O),{as:"a",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Qk=`<template>
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
</template>`,Zk={__name:"BasicTagDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic Tag",code:Qk},{description:i(()=>[]),example:i(()=>[t(u(O),{as:"a",basic:"",tag:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},ex=`<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`,tx={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:ex},{description:i(()=>[n(" A label can be small or large ")]),example:i(()=>[t(u(O),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(O),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(O),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(O),null,{default:i(()=>[n("Medium")]),_:1}),t(u(O),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(O),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(O),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},ix=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ax={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Group Size",code:ix},{description:i(()=>[n(" Labels can share sizes together ")]),example:i(()=>[t(u(La),{size:"huge"},{default:i(()=>[t(u(O),null,{default:i(()=>[n("Fun")]),_:1}),t(u(O),null,{default:i(()=>[n("Happy")]),_:1}),t(u(O),null,{default:i(()=>[n("Smart")]),_:1}),t(u(O),null,{default:i(()=>[n("Witty")]),_:1})]),_:1})]),_:1}))}},lx=`<template>
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
</template>`,nx={__name:"ColoredGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Clored Group",code:lx},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(u(La),{color:"blue"},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(X),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Da),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},ox=`<template>
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
</template>`,sx={__name:"BasicGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic Group",code:ox},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(u(La),{basic:""},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(X),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Da),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},rx=`<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`,ux={__name:"TagGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Tag Group",code:rx},{description:i(()=>[n(" Labels can share tag formatting ")]),example:i(()=>[t(u(La),{tag:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("$10.00")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$19.99")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$24.99")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("$10.25")]),_:1})]),_:1})]),_:1}))}},cx=`<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`,dx={__name:"CircularGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular Group",code:cx},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(u(La),{circular:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},mx={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:nk},{id:"image",label:"Image",category:"Types",component:ck},{id:"pointing",label:"Pointing",category:"Types",component:hk},{id:"corner",label:"Corner",category:"Types",component:bk},{id:"tag",label:"Tag",category:"Types",component:Sk},{id:"ribbon",label:"Ribbon",category:"Types",component:xk},{id:"attached",label:"Attached",category:"Types",component:Bk},{id:"horizontal",label:"Horizontal",category:"Types",component:Dk},{id:"floating",label:"Floating",category:"Types",component:Ik},{id:"inverted",label:"Inverted",category:"Types",component:zk},{id:"detail",label:"Detail",category:"Content",component:Pk},{id:"icon",label:"Icon",category:"Content",component:Vk},{id:"link",label:"Link",category:"Content",component:Hk},{id:"disabled",label:"Disabled",category:"States",component:Ok},{id:"fluid",label:"Fluid",category:"Variations",component:jk},{id:"circular",label:"Circular",category:"Variations",component:Uk},{id:"basic",label:"Basic",category:"Variations",component:Wk},{id:"colored",label:"Colored",category:"Variations",component:Xk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Zk},{id:"size",label:"Size",category:"Variations",component:tx},{id:"group-size",label:"Group Size",category:"Groups",component:ax},{id:"colored-group",label:"Colored Group",category:"Groups",component:nx},{id:"basic-group",label:"Basic Group",category:"Groups",component:sx},{id:"tag-group",label:"Tag Group",category:"Groups",component:ux},{id:"circular-group",label:"Circular Group",category:"Groups",component:dx}];return(l,o)=>(k(),B(ut,{title:"Label",description:"A label displays content classification","component-docs":a}))}},px=Jh(ng);function fx(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Dl=px,Jn=fx(ud),gx=Dl.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var o=l.slots,r=l.attrs,d=o&&o.default&&o.default()||[],m=a.code||d&&d.length?d[0].children:"",f=a.inline,s=a.language,c=Jn.languages[s],g="language-".concat(s);return function(){return f?Dl.h("code",{class:[g],innerHTML:Jn.highlight(m,c)}):Dl.h("pre",Object.assign({},r,{class:[r.class,g]}),[Dl.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:Jn.highlight(m,c)}))])}}}),hx=gx;const _x=sd(hx),bx=R({name:"DocExample",components:{Prism:_x},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),vx={class:"example"};function Sx(e,a,l,o,r,d){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-grid-column"),c=y("sui-icon"),g=y("sui-grid-row"),p=y("prism"),h=y("sui-grid");return k(),be("div",vx,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[t(c,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(s,{width:16},{default:i(()=>[ji(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(k(),B(s,{key:0,width:16},{default:i(()=>[t(p,{language:"markup"},{default:i(()=>[n(Te(e.code),1)]),_:1})]),_:1})):ds("",!0)]),_:3})]),_:3})])}const Qe=Le(bx,[["render",Sx],["__scopeId","data-v-fcfb6a67"]]),yx="/vue-fomantic-ui/images/avatar/small/rachel.png",wx="/vue-fomantic-ui/images/avatar/small/lindsay.png",Cx="/vue-fomantic-ui/images/avatar/small/matthew.png",An="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Ax="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ll="/vue-fomantic-ui/images/avatar/small/christian.jpg",kn="/vue-fomantic-ui/images/avatar/small/matt.jpg",qa="/vue-fomantic-ui/images/avatar/small/helen.jpg",Li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Po="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Wn="/vue-fomantic-ui/images/wireframe/square-image.png",kx=R({name:"ListDoc",components:{DocExample:Qe},setup(){return{listCode:`<sui-list>
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
</div>`}}}),xx={class:"intro"},$x=S("div",null,"Benefits",-1),Bx={class:"list"},Tx=S("a",null,"Languages",-1),Dx=S("a",null,[S("b",null,"Arrested Development")],-1),Lx=S("a",null,[S("b",null,"Bob's Burgers")],-1),Ix=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Ex=S("a",null,[S("b",null,"Twin Peaks")],-1),zx=S("a",null,[S("b",null,"Arrested Development")],-1),Rx=S("a",null,[S("b",null,"Bob's Burgers")],-1),Px=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function Fx(e,a,l,o,r,d){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-list-item"),C=y("sui-list"),$=y("doc-example"),D=y("sui-list-list"),_=y("sui-list-header"),v=y("sui-list-description"),x=y("sui-list-content"),T=y("sui-image");return k(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",xx,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(m,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(s,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Apples")]),_:1}),t(b,null,{default:i(()=>[n("Pears")]),_:1}),t(b,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(C,{bulleted:""},{default:i(()=>[t(b,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(b,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(b,null,{default:i(()=>[$x,S("div",Bx,[t(b,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(b,null,{default:i(()=>[n("Rebates")]),_:1}),t(b,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(b,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(b,null,{default:i(()=>[Tx,t(D,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(C,{link:""},{default:i(()=>[t(b,{active:""},{default:i(()=>[n("Home")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("1")]),_:1}),t(b,null,{default:i(()=>[n("2")]),_:1}),t(b,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[t(c,{name:"help"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(v,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[t(c,{name:"right triangle"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(v,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:yx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Rachel")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Dx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:wx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Lindsay")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Lx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Cx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matthew")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Ix,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:An}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Ex,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Gd}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(v,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(v,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(v,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(v,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(v,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ax}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:kn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(C,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(C,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(C,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(C,{relaxed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),zx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Po}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Rx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Px,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(C,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Po}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(C,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(C,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ll}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t($,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(C,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Wn}),t(x,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Wn}),t(x,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Wn}),t(x,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(C,{floated:"right",horizontal:""},{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(C,{horizontal:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Vx=Le(kx,[["render",Fx]]),Mx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader />
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Hx={__name:"LoaderDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loader",code:Mx},{description:i(()=>[n(" A loader ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe))]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Nx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ox={__name:"TextLoaderDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Loader",code:Nx},{description:i(()=>[n(" A loader can contain text ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:""},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},qx=`<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,jx={__name:"IndeterminateDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Indeterminate",code:qx},{description:i(()=>[n(" A loader can show it's unsure of how long a task will take ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{Indeterminate:"",text:""},{default:i(()=>[n("Preparing Files")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Gx=`<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Ux={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Active",code:Gx},{description:i(()=>[n(" A loader can be active or visible ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Fe),{active:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Yx=`<template>
  <SuiSegment>
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,Jx={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:Yx},{description:i(()=>[n(" A loader can be disabled or hidden ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Fe),{disabled:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},Wx=`<template>
  <SuiLoader active inline />
</template>`,Kx={__name:"InlineDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inline",code:Wx},{description:i(()=>[n(" Loaders can appear inline with content ")]),example:i(()=>[t(u(Fe),{active:"",inline:""})]),_:1}))}},Xx=`<template>
  <SuiLoader active inline />
</template>`,Qx={__name:"InlineCenterDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inline Center",code:Xx},{description:i(()=>[n(" Loaders can appear inline centered with content ")]),example:i(()=>[t(u(Fe),{active:"",inline:"centered"})]),_:1}))}},Zx=`<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`,e$={__name:"SpeedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Speed",code:Zx},{description:i(()=>[n(" Loaders can appear slow, normal or fast ")]),example:i(()=>[t(u(Fe),{slow:"",active:"",inline:""}),t(u(Fe),{active:"",inline:""}),t(u(Fe),{fast:"",active:"",inline:""})]),_:1}))}},t$=`<template>
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
</template>`,i$={__name:"ColorsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colors",code:t$},{description:i(()=>[n(" Loaders can be different colors ")]),example:i(()=>[t(u(Fe),{active:"",inline:"",primary:""}),t(u(Fe),{active:"",inline:"",secondary:""}),t(u(Fe),{active:"",inline:"",color:"red"}),t(u(Fe),{active:"",inline:"",color:"orange"}),t(u(Fe),{active:"",inline:"",color:"yellow"}),t(u(Fe),{active:"",inline:"",color:"olive"}),t(u(Fe),{active:"",inline:"",color:"green"}),t(u(Fe),{active:"",inline:"",color:"teal"}),t(u(Fe),{active:"",inline:"",color:"blue"}),t(u(Fe),{active:"",inline:"",color:"violet"}),t(u(Fe),{active:"",inline:"",color:"purple"}),t(u(Fe),{active:"",inline:"",color:"pink"}),t(u(Fe),{active:"",inline:"",color:"brown"}),t(u(Fe),{active:"",inline:"",color:"grey"}),t(u(Fe),{active:"",inline:"",color:"black"})]),_:1}))}},a$=`<template>
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
</template>`,l$={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:a$},{description:i(()=>[n(" Loaders can have different sizes ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:"",size:"mini"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:"",size:"tiny"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:"",size:"small"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:"",size:"large"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:"",size:"big"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}),t(u(N),null,{default:i(()=>[t(u(Yt),{active:""},{default:i(()=>[t(u(Fe),{text:"",size:"huge"},{default:i(()=>[n("Loading")]),_:1})]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},n$=`<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,o$={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:n$},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(Fe),{active:"",inverted:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},s$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Hx},{id:"text-loader",label:"Text Loader",category:"Types",component:Ox},{id:"indeterminate",label:"Indeterminate",category:"States",component:jx},{id:"active",label:"Active",category:"States",component:Ux},{id:"disabled",label:"Disabled",category:"States",component:Jx},{id:"inline",label:"Inline",category:"Variations",component:Kx},{id:"inline-center",label:"Inline Center",category:"Variations",component:Qx},{id:"speed",label:"Speed",category:"Variations",component:e$},{id:"colors",label:"Colors",category:"Variations",component:i$},{id:"size",label:"Size",category:"Variations",component:l$},{id:"inverted",label:"Inverted",category:"Variations",component:o$}];return(l,o)=>(k(),B(ut,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},nt="/vue-fomantic-ui/images/wireframe/short-paragraph.png",r$=R({name:"RailDoc",components:{DocExample:Qe},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),u$={class:"intro"};function c$(e,a,l,o,r,d){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-image"),C=y("sui-rail"),$=y("sui-grid-column"),D=y("sui-grid"),_=y("doc-example");return k(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",u$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(m,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(s,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(b,{src:nt}),t(C,{internal:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(C,{internal:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{dividing:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{dividing:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{attached:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{attached:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{close:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(C,{close:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:nt}),t(C,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(C,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const d$=Le(r$,[["render",c$]]),m$=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,p$={__name:"FadeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fade",code:m$},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(u(ta),{animated:"fade"},{default:i(()=>[t(u(Rt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Rt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},f$=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,g$={__name:"MoveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Move",code:f$},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(u(ta),{animated:"move"},{default:i(()=>[t(u(Rt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Rt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},h$=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,_$={__name:"RotateDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Rotate",code:h$},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(u(ta),{animated:"rotate"},{default:i(()=>[t(u(Rt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Rt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},b$=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,v$={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Active",code:b$},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(u(ta),{active:"",animated:"move"},{default:i(()=>[t(u(Rt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Rt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},S$=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,y$={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:S$},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(u(ta),{disabled:"",animated:"move"},{default:i(()=>[t(u(Rt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Rt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},w$=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,C$={__name:"InstantDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Instant",code:w$},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(u(ta),{instant:"",animated:"move"},{default:i(()=>[t(u(Rt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(Rt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},A$={__name:"Reveal",setup(e){const a=[{id:"fade",label:"Fade",category:"Types",component:p$},{id:"move",label:"Move",category:"Types",component:g$},{id:"rotate",label:"Rotate",category:"Types",component:_$},{id:"active",label:"Active",category:"States",component:v$},{id:"disabled",label:"Disabled",category:"States",component:y$},{id:"instant",label:"Instant",category:"Variations",component:C$}];return(l,o)=>(k(),B(ut,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":a}))}},k$=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),x$=`<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,$$={__name:"SegmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Segment",code:x$},{description:i(()=>[n(" A segment of content ")]),example:i(()=>[t(u(N),null,{default:i(()=>[k$]),_:1})]),_:1}))}},B$=`<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`,T$={__name:"PlaceholderSegmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Placeholder Segment",code:B$},{description:i(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:i(()=>[t(u(N),{placeholder:""},{default:i(()=>[t(u(fe),{icon:""},{default:i(()=>[t(u(X),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(u(P),{primary:""},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},D$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),L$=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,I$={__name:"RaisedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Raised",code:L$},{description:i(()=>[n(" A segment may be formatted to raise above the page. ")]),example:i(()=>[t(u(N),{raised:""},{default:i(()=>[D$]),_:1})]),_:1}))}},E$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),z$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),R$=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,P$={__name:"StackedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Stacked",code:R$},{description:i(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:i(()=>[t(u(N),{stacked:""},{default:i(()=>[E$]),_:1}),t(u(N),{stacked:"tall"},{default:i(()=>[z$]),_:1})]),_:1}))}},F$=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),V$=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),M$=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),H$=`<template>
  <SuiHeader as="h4">Header</SuiHeader>
  <SuiSegment pailed>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </SuiSegment>
</template>`,N$={__name:"PiledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Piled",code:H$},{description:i(()=>[n(" A segment can be formatted to look like a pile of pages ")]),example:i(()=>[t(u(fe),{as:"h4"},{default:i(()=>[n("Header")]),_:1}),t(u(N),{piled:""},{default:i(()=>[F$,V$,M$]),_:1})]),_:1}))}},O$=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his.",-1),q$=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),j$=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.",-1),G$=`<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`,U$={__name:"VerticalSegmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertical Segment",code:G$},{description:i(()=>[n(" A vertical segment formats content to be aligned as part of a vertical group ")]),example:i(()=>[t(u(N),{vertical:""},{default:i(()=>[O$]),_:1}),t(u(N),{vertical:""},{default:i(()=>[q$]),_:1}),t(u(N),{vertical:""},{default:i(()=>[j$]),_:1})]),_:1}))}},Y$=S("p",null,"Top",-1),J$=S("p",null,"Middle",-1),W$=S("p",null,"Bottom",-1),K$=S("p",null,"Top",-1),X$=S("p",null,"Middle",-1),Q$=S("p",null,"Bottom",-1),Z$=S("p",null,"Top",-1),eB=S("p",null,"Middle",-1),tB=S("p",null,"Bottom",-1),iB=`<template>
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
</template>`,aB={__name:"SegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Segments",code:iB},{description:i(()=>[n(" A group of segments can be formatted to appear together ")]),example:i(()=>[t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[Y$]),_:1}),t(u(N),null,{default:i(()=>[J$]),_:1}),t(u(N),null,{default:i(()=>[W$]),_:1})]),_:1}),t(u(Ct),{basic:""},{default:i(()=>[t(u(N),null,{default:i(()=>[K$]),_:1}),t(u(N),null,{default:i(()=>[X$]),_:1}),t(u(N),null,{default:i(()=>[Q$]),_:1})]),_:1}),t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[Z$]),_:1}),t(u(N),{color:"red"},{default:i(()=>[eB]),_:1}),t(u(N),{secondary:""},{default:i(()=>[tB]),_:1})]),_:1})]),_:1}))}},lB=S("p",null,"Top",-1),nB=S("p",null,"Nested Top",-1),oB=S("p",null,"Nested Middle",-1),sB=S("p",null,"Nested Bottom",-1),rB=S("p",null,"Middle",-1),uB=S("p",null,"Top",-1),cB=S("p",null,"Middle",-1),dB=S("p",null,"Bottom",-1),mB=S("p",null,"Bottom",-1),pB=`<template>
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
</template>`,fB={__name:"NestedSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Nested Segments",code:pB},{description:i(()=>[n(" A group of segments can be nested in another group of segments ")]),example:i(()=>[t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[lB]),_:1}),t(u(Ct),null,{default:i(()=>[t(u(N),null,{default:i(()=>[nB]),_:1}),t(u(N),null,{default:i(()=>[oB]),_:1}),t(u(N),null,{default:i(()=>[sB]),_:1})]),_:1}),t(u(N),null,{default:i(()=>[rB]),_:1}),t(u(Ct),{horizontal:""},{default:i(()=>[t(u(N),null,{default:i(()=>[uB]),_:1}),t(u(N),null,{default:i(()=>[cB]),_:1}),t(u(N),null,{default:i(()=>[dB]),_:1})]),_:1}),t(u(N),null,{default:i(()=>[mB]),_:1})]),_:1})]),_:1}))}},gB=S("p",null,"Left",-1),hB=S("p",null,"Middle",-1),_B=S("p",null,"Right",-1),bB=`<template>
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
</template>`,vB={__name:"HorizontalSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal Segments",code:bB},{description:i(()=>[n(" A segment group can appear horizontally ")]),example:i(()=>[t(u(Ct),{horizontal:""},{default:i(()=>[t(u(N),null,{default:i(()=>[gB]),_:1}),t(u(N),null,{default:i(()=>[hB]),_:1}),t(u(N),null,{default:i(()=>[_B]),_:1})]),_:1})]),_:1}))}},SB=`<template>
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
</template>`,yB={__name:"HorizontalEqualWidthSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal equal width Segments",code:SB},{description:i(()=>[n(" A horizontal segment group can automatically divide segments to be equal width ")]),example:i(()=>[t(u(Ct),{horizontal:"equal width"},{default:i(()=>[t(u(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Two with a lot of additional content ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Three ")]),_:1})]),_:1})]),_:1}))}},wB=`<template>
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
</template>`,CB={__name:"HorizontalWrappingSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal wrapping Segments",code:wB},{description:i(()=>[n(" A horizontal segment group can automatically wrap their segments on smaller screens ")]),example:i(()=>[t(u(Ct),{horizontal:"wrapping"},{default:i(()=>[t(u(N),null,{default:i(()=>[n(" Segment One ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Two ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Three ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Four ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Five ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Six ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Seven ")]),_:1}),t(u(N),null,{default:i(()=>[n(" Segment Eight ")]),_:1})]),_:1})]),_:1}))}},AB=S("p",null,"Top",-1),kB=S("p",null,"Middle",-1),xB=S("p",null,"Bottom",-1),$B=`<template>
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
</template>`,BB={__name:"RaisedSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Raised Segments",code:$B},{description:i(()=>[n(" A group of segments can be raised ")]),example:i(()=>[t(u(Ct),{raised:""},{default:i(()=>[t(u(N),null,{default:i(()=>[AB]),_:1}),t(u(N),null,{default:i(()=>[kB]),_:1}),t(u(N),null,{default:i(()=>[xB]),_:1})]),_:1})]),_:1}))}},TB=S("p",null,"Top",-1),DB=S("p",null,"Middle",-1),LB=S("p",null,"Bottom",-1),IB=`<template>
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
</template>`,EB={__name:"StackedSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Stacked Segments",code:IB},{description:i(()=>[n(" A group of segments can be stacked ")]),example:i(()=>[t(u(Ct),{stacked:""},{default:i(()=>[t(u(N),null,{default:i(()=>[TB]),_:1}),t(u(N),null,{default:i(()=>[DB]),_:1}),t(u(N),null,{default:i(()=>[LB]),_:1})]),_:1})]),_:1}))}},zB=S("p",null,"Top",-1),RB=S("p",null,"Middle",-1),PB=S("p",null,"Bottom",-1),FB=`<template>
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
</template>`,VB={__name:"PiledSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Piled Segments",code:FB},{description:i(()=>[n(" A group of segments can be piled ")]),example:i(()=>[t(u(Ct),{piled:""},{default:i(()=>[t(u(N),null,{default:i(()=>[zB]),_:1}),t(u(N),null,{default:i(()=>[RB]),_:1}),t(u(N),null,{default:i(()=>[PB]),_:1})]),_:1})]),_:1}))}},MB=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),HB=`<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`,NB={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:HB},{description:i(()=>[n(" A segment may show its content is disabled ")]),example:i(()=>[t(u(N),{disabled:""},{default:i(()=>[MB]),_:1})]),_:1}))}},OB=`<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`,qB={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:OB},{description:i(()=>[n(" A segment may show its content is being loaded ")]),example:i(()=>[t(u(N),{loading:""},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}))}},jB=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),GB=`<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`,UB={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:GB},{description:i(()=>[n(" A segment can have its colors inverted for contrast ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[jB]),_:1})]),_:1}))}},YB=S("p",null,"This segment is on top",-1),JB=S("p",null,"This segment is attached on both sides",-1),WB=S("p",null,"This segment is on bottom",-1),KB=`<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`,XB={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Attached",code:KB},{description:i(()=>[n(" A segment can be attached to other content on a page ")]),example:i(()=>[t(u(N),{attached:"top"},{default:i(()=>[YB]),_:1}),t(u(N),{attached:""},{default:i(()=>[JB]),_:1}),t(u(N),{attached:"bottom"},{default:i(()=>[WB]),_:1})]),_:1}))}},QB=S("p",null,"Padded content.",-1),ZB=S("p",null,"Padded content.",-1),eT=`<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`,tT={__name:"PaddedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Padded",code:eT},{description:i(()=>[n(" A segment can increase its padding ")]),example:i(()=>[t(u(N),{padded:""},{default:i(()=>[QB]),_:1}),t(u(N),{padded:"very"},{default:i(()=>[ZB]),_:1})]),_:1}))}},iT=S("p",null,"Fitted Segment",-1),aT=S("p",null,"Horizontally fitted segment",-1),lT=S("p",null,"Vertically fitted segment",-1),nT=`<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`,oT={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fitted",code:nT},{description:i(()=>[n(" A segment can remove its padding, vertically or horizontally ")]),example:i(()=>[t(u(N),{fitted:""},{default:i(()=>[iT]),_:1}),t(u(N),{fitted:"horizontally"},{default:i(()=>[aT]),_:1}),t(u(N),{fitted:"vertically"},{default:i(()=>[lT]),_:1})]),_:1}))}},sT=S("p",null,"Pellentesque habitant morbi",-1),rT=S("p",null,"Pellentesque habitant morbi",-1),uT=S("p",null,"Pellentesque habitant morbi",-1),cT=`<template>
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
</template>`,dT={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Compact",code:cT},{description:i(()=>[n(" A segment may take up only as much space as is necessary ")]),example:i(()=>[t(u(N),{compact:""},{default:i(()=>[sT]),_:1}),t(u(Ct),{compact:""},{default:i(()=>[t(u(N),null,{default:i(()=>[rT]),_:1}),t(u(N),null,{default:i(()=>[uT]),_:1})]),_:1})]),_:1}))}},mT=`<template>
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
</template>`,pT={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:mT},{description:i(()=>[n(" A segment can be colored ")]),example:i(()=>[t(u(N),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(N),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(N),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(N),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(N),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(N),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(N),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(N),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(N),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(N),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(N),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(N),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(N),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},fT=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),gT=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),hT=S("p",null,"If you notice me you must be looking very hard.",-1),_T=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),bT=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),vT=S("p",null,"If you notice me you must be looking very hard.",-1),ST=S("p",null,"I'm here to tell you something, and you will probably read me first.",-1),yT=S("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),wT=S("p",null,"If you notice me you must be looking very hard.",-1),CT=`<template>
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
</template>`,AT={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Emphasis",code:CT},{description:i(()=>[n(" A segment can be formatted to appear more or less noticeable ")]),example:i(()=>[t(u(N),null,{default:i(()=>[fT]),_:1}),t(u(N),{secondary:""},{default:i(()=>[gT]),_:1}),t(u(N),{tertiary:""},{default:i(()=>[hT]),_:1}),t(u(Ve)),t(u(N),{inverted:""},{default:i(()=>[_T]),_:1}),t(u(N),{secondary:"",inverted:""},{default:i(()=>[bT]),_:1}),t(u(N),{tertiary:"",inverted:""},{default:i(()=>[vT]),_:1}),t(u(Ve)),t(u(N),{inverted:"",color:"red"},{default:i(()=>[ST]),_:1}),t(u(N),{secondary:"",inverted:"",color:"red"},{default:i(()=>[yT]),_:1}),t(u(N),{tertiary:"",inverted:"",color:"red"},{default:i(()=>[wT]),_:1})]),_:1}))}},kT=`<template>
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
</template>`,xT={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:kT},{description:i(()=>[n(" A segment can be circular ")]),example:i(()=>[t(u(N),{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(u(Ji),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1}),t(u(N),{circular:"",inverted:"",style:{width:"175px",height:"175px"}},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Buy Now "),t(u(Ji),null,{default:i(()=>[n("$10.99")]),_:1})]),_:1})]),_:1})]),_:1}))}},$T=`<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`,BT={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Clearing",code:$T},{description:i(()=>[n(" A segment can clear floated content ")]),example:i(()=>[t(u(N),{clearing:""},{default:i(()=>[t(u(P),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},TT=S("p",null,"This segment will appear to the right",-1),DT=S("p",null,"This segment will appear to the left",-1),LT=`<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`,IT={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floated",code:LT},{description:i(()=>[n(" A segment can appear to the left or right of other content ")]),example:i(()=>[t(u(N),{floated:"right"},{default:i(()=>[TT]),_:1}),t(u(N),{floated:"left"},{default:i(()=>[DT]),_:1})]),_:1}))}},ET=`<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`,zT={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Alignment",code:ET},{description:i(()=>[n(" A segment can have its text aligned to a side ")]),example:i(()=>[t(u(N),{textAlign:"right"},{default:i(()=>[n("Right")]),_:1}),t(u(N),{textAlign:"left"},{default:i(()=>[n("Left")]),_:1}),t(u(N),{textAlign:"center"},{default:i(()=>[n("Center")]),_:1})]),_:1}))}},RT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),PT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,FT={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic",code:PT},{description:i(()=>[n(" A basic segment has no special formatting ")]),example:i(()=>[t(u(N),{basic:""},{default:i(()=>[RT]),_:1})]),_:1}))}},VT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),MT=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),HT=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),NT=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),OT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),qT=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),jT=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),GT=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),UT=`<template>
  <Segment>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
  </Segment>
</template>`,YT={__name:"ScrollingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Scrolling",code:UT},{description:i(()=>[n(" A scrolling segment has a predefined height to allow its content to be scrollable ")]),example:i(()=>[t(u(N),{scrolling:""},{default:i(()=>[VT,MT,HT,NT,OT,qT,jT,GT]),_:1})]),_:1}))}},JT=`<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`,WT={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:JT},{description:i(()=>[n(" A segment can vary in size ")]),example:i(()=>[t(u(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(N),null,{default:i(()=>[n("Default")]),_:1}),t(u(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},KT={__name:"Segment",setup(e){const a=[{id:"segment",label:"Segment",category:"Types",component:$$},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:T$},{id:"raised",label:"Raised",category:"Types",component:I$},{id:"stacked",label:"Stacked",category:"Types",component:P$},{id:"piled",label:"Piled",category:"Types",component:N$},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:U$},{id:"segments",label:"Segments",category:"Groups",component:aB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:fB},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:vB},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:yB},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:CB},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:BB},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:EB},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:VB},{id:"disabled",label:"Disabled",category:"States",component:NB},{id:"loading",label:"Loading",category:"States",component:qB},{id:"inverted",label:"Inverted",category:"Variations",component:UB},{id:"attached",label:"Attached",category:"Variations",component:XB},{id:"padded",label:"Padded",category:"Variations",component:tT},{id:"fitted",label:"Fitted",category:"Variations",component:oT},{id:"compact",label:"Compact",category:"Variations",component:dT},{id:"colored",label:"Colored",category:"Variations",component:pT},{id:"emphasis",label:"Emphasis",category:"Variations",component:AT},{id:"circular",label:"Circular",category:"Variations",component:xT},{id:"clearing",label:"Clearing",category:"Variations",component:BT},{id:"floated",label:"Floated",category:"Variations",component:IT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:zT},{id:"basic",label:"Basic",category:"Variations",component:FT},{id:"scrolling",label:"Scrolling",category:"Variations",component:YT},{id:"size",label:"Size",category:"Variations",component:WT}];return(l,o)=>(k(),B(ut,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":a}))}},XT=R({name:"StepDoc",components:{DocExample:Qe},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),QT={class:"intro"},ZT=S("p",null,"The steps take up the entire column width",-1),eD=S("p",null,"Main content",-1);function tD(e,a,l,o,r,d){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-step"),C=y("sui-step-group"),$=y("doc-example"),D=y("sui-step-title"),_=y("sui-step-description"),v=y("sui-step-content"),x=y("sui-grid-column"),T=y("sui-grid");return k(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",QT,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(m,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(s,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t($,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(C,{ordered:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(C,{vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{link:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(C,{stackable:"tablet"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(C,{unstackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(T,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(C,{fluid:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[ZT]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(C,{attached:"top"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:i(()=>[eD]),_:1}),t(C,{attached:"bottom"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t($,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(C,{widths:2},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(C,{size:"mini"},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(C,{inverted:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iD=Le(XT,[["render",tD]]),aD=`<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
</template>`,lD={__name:"BreadcrumbDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Breadcrumb",code:aD},{description:i(()=>[n(" A standard breadcrumb ")]),example:i(()=>[t(u(ni),{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1}))}},nD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,oD={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Divider",code:nD},{description:i(()=>[n(" A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text. ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1}))}},sD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,rD={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Section",code:sD},{description:i(()=>[n(" A breadcrumb can contain sections that can either be formatted as a link or text ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Search")]),_:1})]),_:1})]),_:1}))}},uD=S("a",{href:"#"},"paper towels",-1),cD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,dD={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:cD},{description:i(()=>[n(" A section may be linkable or contain a link ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Search for: "),uD]),_:1})]),_:1})]),_:1}))}},mD=`<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
</template>`,pD={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Active",code:mD},{description:i(()=>[n(" A section can be active ")]),example:i(()=>[t(u(ni),null,{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Products")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Paper Towels")]),_:1})]),_:1})]),_:1}))}},fD=S("br",null,null,-1),gD=`<template>
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
</template>`,hD={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:gD},{description:i(()=>[n(" A breadcrumb can be inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(ni),{inverted:""},{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1}),fD,t(u(ni),{inverted:""},{default:i(()=>[t(u(tt),null,{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),null,{default:i(()=>[n("Registration")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1}))}},_D=`<template>
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
</template>`,bD={__name:"SizeDoc",setup(e){const a=["mini","tiny","small","large","big","huge","massive"];return(l,o)=>(k(),B(I,{label:"Size",code:_D},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[(k(),be(Ae,null,Ze(a,r=>(k(),be(Ae,{key:r},[t(u(ni),{size:r},{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(u(Ve),{hidden:""})],64))),64))]),_:1}))}},vD={__name:"Breadcrumb",setup(e){const a=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:lD},{id:"divider",label:"Divider",category:"Content",component:oD},{id:"section",label:"Section",category:"Content",component:rD},{id:"link",label:"Link",category:"Content",component:dD},{id:"active",label:"Active",category:"States",component:pD},{id:"inverted",label:"Inverted",category:"Variations",component:hD},{id:"size",label:"Size",category:"Variations",component:bD}];return(l,o)=>(k(),B(ut,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":a}))}},SD=`<template>
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
</template>`,yD={__name:"FormDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Form",code:SD},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(at),{label:"First Name",placeholder:"First Name"}),t(u(at),{label:"Last Name",placeholder:"Last Name"}),t(u(at),null,{default:i(()=>[t(u(md),{label:"I agree to the Terms and Conditions"})]),_:1}),t(u(P),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},wD=`<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
</template>`,CD={__name:"FieldDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Field",code:wD},{description:i(()=>[n(" A field is a form element containing a label and an input ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(at),{label:"User Input"})]),_:1})]),_:1}))}},AD=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
</template>`,kD={__name:"FieldsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fields",code:AD},{description:i(()=>[n(" A set of fields can appear grouped together ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(Ss),null,{default:i(()=>[t(u(at),{label:"First Name"}),t(u(at),{label:"Middle Name"}),t(u(at),{label:"Last Name"})]),_:1})]),_:1})]),_:1}))}},xD=`<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
</template>`,$D={__name:"TextAreaDoc",setup(e){return(a,l)=>(k(),B(I,{label:"TextArea",code:xD},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(xo),{label:"Text"}),t(u(xo),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},BD=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,TD={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:BD},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(u(Nt),{loading:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(P),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},DD=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,LD={__name:"SuccessDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Success",code:DD},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(u(Nt),{success:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(Cn),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(u(P),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},ID=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,ED={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Error",code:ID},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(u(Nt),{error:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(Cn),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(u(P),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},zD=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,RD={__name:"WarningDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Warning",code:zD},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(u(Nt),{warning:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(Cn),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(u(P),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},PD=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,FD={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:PD},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(Ss),null,{default:i(()=>[t(u(at),{disabled:"",label:"First name",placeholder:"Read only"}),t(u(at),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},VD={__name:"Form",setup(e){const a=[{id:"form",label:"Form",category:"Types",component:yD},{id:"field",label:"Field",category:"Content",component:CD},{id:"fields",label:"Fields",category:"Content",component:kD},{id:"textarea",label:"TextArea",category:"Content",component:$D},{id:"loading",label:"Loading",category:"Form States",component:TD},{id:"success",label:"Success",category:"Form States",component:LD},{id:"error",label:"Error",category:"Form States",component:ED},{id:"warning",label:"Warning",category:"Form States",component:RD},{id:"disabled",label:"Disabled",category:"Field States",component:FD}];return(l,o)=>(k(),B(ut,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":a}))}},MD=R({name:"DocPageHeader",props:{title:String,sub:String}}),HD={class:"intro",style:{padding:"2rem"}};function ND(e,a,l,o,r,d){const m=y("sui-header-subheader"),f=y("sui-header"),s=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment");return k(),B(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",HD,[t(f,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.sub),1)]),_:1})]),_:1}),t(s,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const lt=Le(MD,[["render",ND]]),de="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Re="/vue-fomantic-ui/images/wireframe/paragraph.png",Wr="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",OD=R({name:"GridDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),qD=S("br",null,null,-1);function jD(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-grid-column"),g=y("sui-grid"),p=y("doc-example"),h=y("sui-grid-row"),w=y("sui-segment"),b=y("sui-divider"),C=y("sui-menu-item"),$=y("sui-menu"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.numbers,_=>(k(),B(c,{key:_},{default:i(()=>[t(s,{src:de})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(p,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(s,{src:Wr})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(s,{src:Wr})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(p,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:8},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{width:8},{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{floated:"left",width:5},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{floated:"right",width:5},{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:4},{default:i(()=>[t(s,{src:de})]),_:1}),t(c,{width:9},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{width:3},{default:i(()=>[t(s,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,{width:8},{default:i(()=>[t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1}),t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(b),t(g,{padded:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})])]),_:1},8,["code"]),t(p,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(C,null,{default:i(()=>[n("Poodle")]),_:1}),t(C,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(C,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de}),qD,t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(p,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,{only:"computer"},{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,{only:"mobile"},{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:Re})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GD=Le(OD,[["render",jD]]),UD="/vue-fomantic-ui/images/logo.png",YD=R({name:"MenuDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),JD=S("p",null,"Check out our new promotions",-1),WD=S("p",null,"Check out our collection of coupons",-1),KD=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),XD=S("img",{src:UD},null,-1);function QD(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-menu-item"),c=y("sui-menu"),g=y("doc-example"),p=y("sui-input"),h=y("sui-menu-menu"),w=y("sui-label"),b=y("sui-button"),C=y("sui-dropdown-item"),$=y("sui-dropdown-menu"),D=y("sui-dropdown"),_=y("sui-icon"),v=y("sui-segment"),x=y("sui-container");return k(),be("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Editorials")]),_:1}),t(s,null,{default:i(()=>[n("Reviews")]),_:1}),t(s,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(c,{tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(s,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(s,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(s,null,{default:i(()=>[n("Most Comments")]),_:1}),t(s,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(w,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Spam "),t(w,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(s,null,{default:i(()=>[n(" Updates "),t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(c,{pagination:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("1")]),_:1}),t(s,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(s,null,{default:i(()=>[n("10")]),_:1}),t(s,null,{default:i(()=>[n("11")]),_:1}),t(s,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(s,null,{default:i(()=>[n("About us")]),_:1}),t(s,null,{default:i(()=>[n("Jobs")]),_:1}),t(s,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),JD]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),WD]),_:1}),t(s,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),KD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(s,{position:"right",as:"div"},{default:i(()=>[t(p,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(s,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(D,{item:"",text:"Categories"},{default:i(()=>[t($,null,{default:i(()=>[t(C,{text:"Electoronics"}),t(C,{text:"Automotive"}),t(C,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Browse")]),_:1}),t(s,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(s,null,{default:i(()=>[n("Sign up")]),_:1}),t(s,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[t(p,{placeholder:"Search..."})]),_:1}),t(s,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Search")]),_:1}),t(s,null,{default:i(()=>[n("Add")]),_:1}),t(s,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"grid layout"}),n(" Browse ")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(D,{item:"",text:"More"},{default:i(()=>[t($,null,{default:i(()=>[t(C,{icon:"edit",text:"Edit Profile"}),t(C,{icon:"globe",text:"Choose Language"}),t(C,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[n("A link")]),_:1}),t(s,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(c,{stackable:""},{default:i(()=>[t(s,{as:"div"},{default:i(()=>[XD]),_:1}),t(s,null,{default:i(()=>[n("Features")]),_:1}),t(s,null,{default:i(()=>[n("Testimonials")]),_:1}),t(s,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(s,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(s,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(s,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(s,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(s,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(s,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(c,{icon:"labeled"},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",vertical:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Run")]),_:1}),t(s,null,{default:i(()=>[n("Walk")]),_:1}),t(s,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(s,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(s,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(c,{fluid:"",widths:3},{default:i(()=>[t(s,null,{default:i(()=>[n("Buy")]),_:1}),t(s,null,{default:i(()=>[n("Sell")]),_:1}),t(s,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(c,{attached:"top",tabular:""},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(s,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(c,{size:"mini"},{default:i(()=>[t(s,{active:""},{default:i(()=>[n("Home")]),_:1}),t(s,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(D,{item:"",text:"Language"},{default:i(()=>[t($,null,{default:i(()=>[t(C,null,{default:i(()=>[n("English")]),_:1}),t(C,null,{default:i(()=>[n("Russian")]),_:1}),t(C,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(s,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(s,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(s,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(c,{borderless:""},{default:i(()=>[t(s,null,{default:i(()=>[n("1")]),_:1}),t(s,null,{default:i(()=>[n("2")]),_:1}),t(s,null,{default:i(()=>[n("3")]),_:1}),t(s,null,{default:i(()=>[n("4")]),_:1}),t(s,null,{default:i(()=>[n("5")]),_:1}),t(s,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZD=Le(YD,[["render",QD]]),e2=R({name:"MessageDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),t2=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),i2=S("p",null,"Get the best news in your e-mail every day.",-1),a2=S("p",null,"You can't see me",-1),l2=S("p",null,"You can always see me",-1),n2=S("p",null,"Way to go!",-1),o2=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),s2=S("a",{href:"#"},"Login here",-1),r2=S("p",null,[n("Go to your "),S("b",null,"special offers"),n(" page to see now.")],-1),u2=S("p",null,"That offer has expired",-1);function c2(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-message-header"),c=y("sui-message"),g=y("doc-example"),p=y("sui-message-item"),h=y("sui-message-list"),w=y("sui-icon"),b=y("sui-message-content"),C=y("sui-form-field"),$=y("sui-form-group"),D=y("sui-button"),_=y("sui-form"),v=y("sui-container");return k(),be("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(v,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Changes in Service")]),_:1}),t2]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(p,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(w,{name:"inbox"}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),i2]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(c,{hidden:""},{default:i(()=>[a2]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(c,{visible:""},{default:i(()=>[l2]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(c,{floating:""},{default:i(()=>[n2]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[o2]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(c,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t($,{widths:"equal"},{default:i(()=>[t(C,{label:"First Name",placeholder:"First Name"}),t(C,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(C,{label:"Username",placeholder:"Username"}),t(C,{label:"Password",placeholder:"Password"}),t(D,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(c,{attached:"bottom",warning:""},{default:i(()=>[t(w,{name:"help"}),n(" Already signed up? "),s2,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(c,{warning:""},{default:i(()=>[t(w,{name:"close"}),t(s,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(c,{info:""},{default:i(()=>[t(s,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(c,{positive:""},{default:i(()=>[t(s,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),r2]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(c,{negative:""},{default:i(()=>[t(w,{name:"close"}),t(s,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),u2]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(c,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(c,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(c,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const d2=Le(e2,[["render",c2]]),m2=R({name:"TableDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),p2=S("a",{href:"#"},"Edit",-1),f2=S("a",{href:"#"},"Edit",-1),g2=S("a",{href:"#"},"Edit",-1),h2=S("br",null,null,-1),_2=S("br",null,null,-1),b2=S("br",null,null,-1),v2=S("br",null,null,-1),S2=S("br",null,null,-1),y2=S("br",null,null,-1),w2=S("br",null,null,-1);function C2(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-table-header-cell"),c=y("sui-table-row"),g=y("sui-table-header"),p=y("sui-table-cell"),h=y("sui-table-body"),w=y("sui-table"),b=y("doc-example"),C=y("sui-icon"),$=y("sui-table-footer"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("James")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("26")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Elyse")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(w,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s),t(s,null,{default:i(()=>[n("Arguments")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("reset rating")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1}),t(p,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("set rating")]),_:1}),t(p,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(p,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(w,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(s,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(s,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Ruby")]),_:1}),t(s,null,{default:i(()=>[n("Javascript")]),_:1}),t(s,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(c,null,{default:i(()=>[t(p,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 2")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(p),t(p,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p)]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 3")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(C,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(b,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{positive:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(C,{name:"checkmark"}),n(" Approved ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{positive:""},{default:i(()=>[t(C,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(c,{negative:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{error:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{error:""},{default:i(()=>[t(C,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(C,{name:"attention"}),n(" Requires Action ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{warning:""},{default:i(()=>[t(C,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{active:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{color:"blue"},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"pink"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(C,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"left",color:"orange"},{default:i(()=>[t(C,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(w,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Registration Date")]),_:1}),t(s,null,{default:i(()=>[n("E-mail address")]),_:1}),t(s,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(w,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(w,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(w,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[p2]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[f2]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,{selectable:""},{default:i(()=>[g2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{verticalAlign:"top"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),h2,n(" 1"),_2,n(" 2"),b2]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n(" Notes "),v2,n(" 1"),S2,n(" 2"),y2]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Date Joined")]),_:1}),t(s,null,{default:i(()=>[n("E-mail")]),_:1}),t(s,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("3 People")]),_:1}),t(p,null,{default:i(()=>[n("2 Approved")]),_:1}),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(w,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),w2,t(w,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(w,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(C,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(w,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Age")]),_:1}),t(s,null,{default:i(()=>[n("Gender")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("3 People")]),_:1}),t(s,null,{default:i(()=>[n("2 Approved")]),_:1}),t(s),t(s),t(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(w,null,{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,{width:10},{default:i(()=>[n("Name")]),_:1}),t(s,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(w,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Food")]),_:1}),t(s,null,{default:i(()=>[n("Calories")]),_:1}),t(s,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(w,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(w,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(s,null,{default:i(()=>[n("Name")]),_:1}),t(s,null,{default:i(()=>[n("Status")]),_:1}),t(s,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const A2=Le(m2,[["render",C2]]),Kr="/vue-fomantic-ui/images/avatar/large/kristy.png",k2="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Kn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Xn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Qn="/vue-fomantic-ui/images/avatar/large/elyse.png",x2="/vue-fomantic-ui/images/avatar/large/matthew.png",$2="/vue-fomantic-ui/images/avatar/large/molly.png",Il="/vue-fomantic-ui/images/wireframe/white-image.png",Xr="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Qr="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Zr="/vue-fomantic-ui/images/avatar/large/stevie.jpg",eu="/vue-fomantic-ui/images/avatar/large/steve.jpg",B2=R({name:"CardDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),T2=S("span",{class:"date"},"Joined in 2013",-1),D2=S("a",null,"Elliot Fu",-1),L2=S("a",null,"Jenny Hess",-1),I2=S("a",null,"Stevie Feliciano",-1),E2=S("a",null,"Administrator",-1),z2=S("a",null,"Helen Troy",-1),R2=S("span",{class:"date"},"Joined in 2013",-1),P2=S("span",null,"2 days ago",-1),F2=S("a",null,"Animals",-1),V2=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),M2=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),H2=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),N2=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),O2=S("span",{class:"category"},"Animals",-1),q2=S("span",{class:"category"},"Animals",-1),j2=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:kn}),n(" Matt ")],-1),G2=S("span",{class:"category"},"Animals",-1),U2=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:kn}),n(" Matt ")],-1),Y2=S("p",null,"Jenny is a student studying Media Management at the New School",-1),J2=S("div",{class:"center aligned author"},[S("img",{class:"ui avatar image",src:An}),n(" Jenny ")],-1),W2=S("a",null,"Friends",-1),K2=S("span",{class:"right floated"}," Joined in 2013 ",-1),X2=S("a",null,[S("i",{class:"user icon"}),n(" 75 Friends ")],-1),Q2=S("a",null,"Coworker",-1),Z2=S("span",{class:"right floated"}," Joined in 2011 ",-1),eL=S("a",null,[S("i",{class:"user icon"}),n(" 35 Friends ")],-1),tL=S("a",null,"Coworker",-1),iL=S("span",{class:"right floated"}," Joined in 2014 ",-1),aL=S("a",null,[S("i",{class:"user icon"}),n(" 151 Friends ")],-1);function lL(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-card-header"),g=y("sui-card-meta"),p=y("sui-card-description"),h=y("sui-card-content"),w=y("sui-icon"),b=y("sui-card"),C=y("doc-example"),$=y("sui-button"),D=y("sui-button-group"),_=y("sui-card-group"),v=y("sui-feed-summary"),x=y("sui-feed-content"),T=y("sui-feed-event"),E=y("sui-feed"),V=y("sui-grid-column"),M=y("sui-grid"),F=y("sui-segment"),j=y("sui-container");return k(),be("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(C,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Kr,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[T2]),_:1}),t(p,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:oi,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(p,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(s,{src:An,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("New Member")]),_:1}),t(p,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(C,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[D2,n(" added "),L2,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[I2,n(" was added as an "),E2]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[z2,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t($,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Kr,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[R2]),_:1}),t(p,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(p,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(p,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(p,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[P2,F2]),_:1}),t(p,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(p,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(p,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(p,null,{default:i(()=>[V2,M2]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(p,null,{default:i(()=>[H2,N2]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(w,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(C,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(M,{columns:3},{default:i(()=>[t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:k2}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:Kn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(s,{src:Xn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(b,{centered:""},{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(b,{horizontal:""},{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[O2]),_:1}),t(p,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(b,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[q2]),_:1}),t(p,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[j2]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(b,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[G2]),_:1}),t(p,null,{default:i(()=>[t(s,{src:Re})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[U2]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[Y2]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[J2]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(F,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:x2}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[W2]),_:1}),t(p,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[K2,X2]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:$2}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Molly")]),_:1}),t(g,null,{default:i(()=>[Q2]),_:1}),t(p,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[Z2,eL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1}),t(g,null,{default:i(()=>[tL]),_:1}),t(p,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[iL,aL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,{color:"primary",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"secondary",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"red",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1}),t(b,{color:"orange",href:"#"},{default:i(()=>[t(s,{src:Il})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Xn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Kn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Xr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Qr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Zr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:eu})]),_:1})]),_:1})]),_:1},8,["code"]),t(C,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,{src:Xn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Kn})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Xr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Qr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:Zr})]),_:1}),t(b,null,{default:i(()=>[t(s,{src:eu})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const nL=Le(B2,[["render",lL]]),oL=R({name:"FeedDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),sL=S("img",{src:oi},null,-1),rL=S("img",{src:oi},null,-1),uL=S("a",null,"Coworkers",-1),cL=S("img",{src:An},null,-1),dL=S("a",null,"Jenny Hess",-1),mL=S("a",null,"coworker",-1),pL=S("img",{src:qa},null,-1),fL=S("a",null,"Helen Troy",-1),gL=S("a",null,[S("img",{src:de})],-1),hL=S("a",null,[S("img",{src:de})],-1),_L=S("a",null,"Elliot Fu",-1),bL=S("a",null,"Jenny Hess",-1),vL=S("a",null,"Stevie Feliciano",-1),SL=S("a",null,"Elliot Fu",-1),yL=S("a",null,"Helen Troy",-1),wL=S("a",null,"Christian Rocha",-1),CL=S("img",{src:oi},null,-1),AL=S("div",{class:"date"},"Just now",-1),kL=S("a",{class:"user"},"Elliot Fu",-1);function xL(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-feed-label"),c=y("sui-feed-user"),g=y("sui-feed-date"),p=y("sui-feed-summary"),h=y("sui-icon"),w=y("sui-feed-like"),b=y("sui-feed-meta"),C=y("sui-feed-content"),$=y("sui-feed-event"),D=y("sui-feed"),_=y("doc-example"),v=y("sui-feed-extra"),x=y("sui-segment"),T=y("sui-container");return k(),be("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[sL]),_:1}),t(C,null,{default:i(()=>[t(p,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[rL]),_:1}),t(C,null,{default:i(()=>[n(" You added Elliot Fu to the group "),uL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[cL]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(p,null,{default:i(()=>[n(" You added "),dL,n(" to your "),mL,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[pL]),_:1}),t(C,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(p,null,{default:i(()=>[fL,n(" added 2 photos ")]),_:1}),t(v,{images:""},{default:i(()=>[gL,hL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(p,null,{default:i(()=>[_L,n(" added "),bL,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(p,null,{default:i(()=>[vL,n(" added "),SL,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(C,null,{default:i(()=>[t(p,null,{default:i(()=>[yL,n(" added "),wL,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(D,{inverted:""},{default:i(()=>[t($,null,{default:i(()=>[t(s,null,{default:i(()=>[CL]),_:1}),t(C,null,{default:i(()=>[AL,t(p,null,{default:i(()=>[kL,n(" posted on his page ")]),_:1}),t(v,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const $L=Le(oL,[["render",xL]]),BL=R({name:"ItemDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),TL=S("img",{src:de},null,-1),DL=S("span",null,"Description",-1),LL=S("img",{src:nt},null,-1),IL=S("img",{src:de},null,-1),EL=S("span",null,"Description",-1),zL=S("img",{src:nt},null,-1),RL=S("img",{src:de},null,-1),PL=S("img",{src:de},null,-1),FL=S("img",{src:de},null,-1),VL=S("img",{src:de},null,-1),ML=S("img",{src:de},null,-1),HL=S("img",{src:de},null,-1),NL=S("img",{src:de},null,-1),OL=S("span",{class:"price"},"$1200",-1),qL=S("span",{class:"stay"},"1 Month",-1),jL=S("img",{src:nt},null,-1),GL=S("span",{class:"price"},"$1000",-1),UL=S("span",{class:"stay"},"2 Weeks",-1),YL=S("img",{src:nt},null,-1),JL=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),WL=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),KL=S("img",{src:nt},null,-1),XL=S("img",{src:de},null,-1),QL=S("span",{class:"cinema"},"Union Square 14",-1),ZL=S("img",{src:nt},null,-1),eI=S("img",{src:de},null,-1),tI=S("span",{class:"cinema"},"IFC Cinema",-1),iI=S("img",{src:nt},null,-1),aI=S("img",{src:de},null,-1),lI=S("span",{class:"cinema"},"IFC",-1),nI=S("img",{src:nt},null,-1),oI=S("img",{src:nt},null,-1),sI=S("img",{src:nt},null,-1),rI=S("img",{src:nt},null,-1),uI=S("span",{class:"price"},"$1200",-1),cI=S("span",{class:"stay"},"1 Month",-1),dI=S("img",{src:nt},null,-1),mI=S("span",{class:"price"},"$1000",-1),pI=S("span",{class:"stay"},"2 Weeks",-1),fI=S("img",{src:nt},null,-1);function gI(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-item-image"),c=y("sui-item-header"),g=y("sui-item-meta"),p=y("sui-item-description"),h=y("sui-item-extra"),w=y("sui-item-content"),b=y("sui-item"),C=y("sui-item-group"),$=y("doc-example"),D=y("sui-image"),_=y("sui-icon"),v=y("sui-label"),x=y("sui-button"),T=y("sui-segment"),E=y("sui-container");return k(),be("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[TL]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[DL]),_:1}),t(p,null,{default:i(()=>[LL]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[IL]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[EL]),_:1}),t(p,null,{default:i(()=>[zL]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[RL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[PL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[FL]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[VL]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[ML]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[HL]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[NL]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[OL,qL]),_:1}),t(p,null,{default:i(()=>[jL]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[GL,UL]),_:1}),t(p,null,{default:i(()=>[YL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(p,null,{default:i(()=>[JL,WL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(p,null,{default:i(()=>[KL]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(C,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[XL]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[QL]),_:1}),t(p,null,{default:i(()=>[ZL]),_:1}),t(h,null,{default:i(()=>[t(v,null,{default:i(()=>[n("IMAX")]),_:1}),t(v,null,{default:i(()=>[t(_,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[eI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[tI]),_:1}),t(p,null,{default:i(()=>[iI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(v,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(s,null,{default:i(()=>[aI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[lI]),_:1}),t(p,null,{default:i(()=>[nI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"bottom"},{default:i(()=>[t(c,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(C,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content A")]),_:1}),t(p,null,{default:i(()=>[oI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content B")]),_:1}),t(p,null,{default:i(()=>[sI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content C")]),_:1}),t(p,null,{default:i(()=>[rI]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[uI,cI]),_:1}),t(p,null,{default:i(()=>[dI]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[mI,pI]),_:1}),t(p,null,{default:i(()=>[fI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const hI=Le(BL,[["render",gI]]),_I=R({name:"StatisticDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),bI=S("br",null,null,-1),vI=S("br",null,null,-1),SI=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),yI=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),wI=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),CI=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function AI(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-statistic"),c=y("doc-example"),g=y("sui-statistic-group"),p=y("sui-statistic-value"),h=y("sui-statistic-label"),w=y("sui-icon"),b=y("sui-image"),C=y("sui-segment"),$=y("sui-container");return k(),be("div",null,[t(m,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:e.statisticCode},{default:i(()=>[t(s,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),t(c,{title:"Statistic Group",description:"A group of statistics",code:e.groupCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,{value:"31,200",label:"Views"}),t(s,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(c,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:e.valueCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(p,{text:""},{default:i(()=>[n(" Three"),bI,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(w,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Ro}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:e.labelCode},{default:i(()=>[t(s,{value:"2,204",label:"Views"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:e.horizontalCode},{default:i(()=>[t(s,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),t(c,{title:"Colored",description:"A statistic can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:e.invertedCode},{default:i(()=>[t(C,{inverted:""},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(g,{stackable:""},{default:i(()=>[t(s,{color:"red",value:"27",label:"Red"}),t(s,{color:"orange",value:"8",label:"Orange"}),t(s,{color:"yellow",value:"28",label:"Yellow"}),t(s,{color:"olive",value:"7",label:"Olive"}),t(s,{color:"green",value:"14",label:"Green"}),t(s,{color:"teal",value:"82",label:"Teal"}),t(s,{color:"blue",value:"1",label:"Blue"}),t(s,{color:"violet",value:"22",label:"Violet"}),t(s,{color:"purple",value:"23",label:"Purple"}),t(s,{color:"pink",value:"15",label:"Pink"}),t(s,{color:"brown",value:"36",label:"Brown"}),t(s,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:e.evenlyDividedCode},{default:i(()=>[t(g,{widths:4},{default:i(()=>[t(s,{value:"22",label:"Faves"}),t(s,null,{default:i(()=>[t(p,{text:""},{default:i(()=>[n(" Three"),vI,n(" Thousand ")]),_:1}),t(h,null,{default:i(()=>[n("Signups")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(w,{name:"plane"}),n(" 5 ")]),_:1}),t(h,null,{default:i(()=>[n("Flights")]),_:1})]),_:1}),t(s,null,{default:i(()=>[t(p,null,{default:i(()=>[t(b,{circular:"",inline:"",src:Ro}),n(" 42 ")]),_:1}),t(h,null,{default:i(()=>[n("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(c,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:e.floatedCode},{default:i(()=>[t(C,null,{default:i(()=>[t(s,{floated:"right",value:"2,204",label:"Views"}),SI,yI,t(s,{floated:"left",value:"2,204",label:"Views"}),wI,CI]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A statistic can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",value:"2,204",label:"Views"}),t(s,{size:"tiny",value:"2,204",label:"Views"}),t(s,{size:"small",value:"2,204",label:"Views"}),t(s,{value:"2,204",label:"Views"}),t(s,{size:"large",value:"2,204",label:"Views"}),t(s,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const kI=Le(_I,[["render",AI]]),xI=R({name:"AccordionDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),$I=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),BI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),TI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),DI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),LI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),II=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),EI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),zI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),RI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),PI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),FI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),VI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),MI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),HI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),NI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),OI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),qI=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),jI=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),GI=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),UI=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function YI(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-accordion-tab"),c=y("sui-accordion"),g=y("doc-example"),p=y("sui-segment"),h=y("sui-container");return k(),be("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[$I]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[BI]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[TI,DI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(c,{styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[LI]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[II]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[EI,zI]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",styled:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[RI]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[PI]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[FI,VI]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(p,{inverted:""},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[MI]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[HI]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[NI,OI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(c,{multiple:""},{default:i(()=>[t(s,{title:"What is a dog?"},{default:i(()=>[qI]),_:1}),t(s,{title:"What kinds of dogs are there?"},{default:i(()=>[jI]),_:1}),t(s,{title:"How do you acquire a dog?"},{default:i(()=>[GI,UI]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const JI=Le(xI,[["render",YI]]),WI=R({name:"CalendarDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function KI(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-calendar"),c=y("doc-example"),g=y("sui-container");return k(),be("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(s,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=p=>e.calendar1=p),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const XI=Le(WI,[["render",KI]]),QI=R({name:"PropertyListTable",props:{properties:Array}});function ZI(e,a,l,o,r,d){const m=y("sui-table-header-cell"),f=y("sui-table-row"),s=y("sui-table-header"),c=y("sui-table-cell"),g=y("sui-table-body"),p=y("sui-table");return k(),B(p,{celled:""},{default:i(()=>[t(s,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.properties,h=>(k(),B(f,{key:h.name},{default:i(()=>[t(c,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.type),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.default),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const xn=Le(QI,[["render",ZI]]),eE=R({name:"CheckboxDoc",components:{DocPageHeader:lt,DocExample:Qe,PropertyListTable:xn},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=G(!1),d='<sui-checkbox toggle v-model="toggle" />',m=G(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:o,toggle:r,toggleCode:d,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),tE={class:"ui form"},iE={class:"grouped fields"},aE={class:"field"},lE={class:"field"},nE={class:"field"};function oE(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-checkbox"),c=y("doc-example"),g=y("property-list-table"),p=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(s,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",tE,[S("div",iE,[S("div",aE,[t(s,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),S("div",lE,[t(s,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),S("div",nE,[t(s,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),n(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(c,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(s,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(s,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const sE=Le(eE,[["render",oE]]),rE=R({name:"DimmerDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function uE(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-image"),c=y("sui-image-group"),g=y("sui-dimmer"),p=y("sui-dimmer-dimmable"),h=y("doc-example"),w=y("sui-icon"),b=y("sui-button"),C=y("sui-header-subheader"),$=y("sui-container");return k(),be("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(s,{src:de}),t(s,{src:de}),t(s,{src:de})]),_:1}),t(s,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(s,{src:de}),t(s,{src:de}),t(s,{src:de})]),_:1}),t(s,{size:"medium",src:ei}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(b,{labeled:"",icon:"",onClick:a[0]||(a[0]=D=>e.active=!0)},{default:i(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=D=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(C,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const cE=Le(rE,[["render",uE]]),dE=R({name:"DropdownDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){const e=`<sui-dropdown text="File">
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
/>`,m=G(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],s=`<sui-dropdown
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
/>`,p=G(null),h=`<sui-dropdown
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
/>`,D=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:l,selected2:o,searchSelectionOptions:r,searchSelectionCode:d,selected3:m,clearableSelectionOptions:f,clearableSelectionCode:s,selected4:c,multipleCode:g,selected5:p,multipleCode2:h,selected6:w,searchDropdownCode:b,selected7:C,searchInMenuCode:$,selected8:D,inlineCode:`<span>
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
</sui-button-group>`}}});function mE(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-dropdown-item"),c=y("sui-divider"),g=y("sui-dropdown-menu"),p=y("sui-dropdown"),h=y("doc-example"),w=y("sui-button"),b=y("sui-button-group"),C=y("sui-container");return k(),be("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(C,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(p,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Open...",description:"ctrl + o"}),t(s,{text:"Save as...",description:"ctrl + s"}),t(s,{text:"Rename",description:"ctrl + r"}),t(s,{text:"Make a copy"}),t(s,{icon:"folder",text:"Move to folder"}),t(s,{icon:"trash",text:"Move to trash"}),t(c),t(s,{text:"Download As..."}),t(s,{text:"Publish To Web"}),t(s,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(p,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=$=>e.selected1=$),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(p,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=$=>e.selected2=$),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(p,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=$=>e.selected3=$),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=$=>e.selected4=$),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=$=>e.selected5=$),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(p,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=$=>e.selected6=$),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(p,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=$=>e.selected7=$),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[n(" Show me posts by "),t(p,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=$=>e.selected8=$),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(p,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"New"}),t(s,{text:"Save As"}),t(s,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(b,{color:"teal"},{default:i(()=>[t(w,null,{default:i(()=>[n("Save")]),_:1}),t(p,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{text:"Edit Post",icon:"edit"}),t(s,{text:"Remove Post",icon:"delete"}),t(s,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const pE=Le(dE,[["render",mE]]),fE=R({name:"EmbedDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function gE(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-embed"),c=y("doc-example"),g=y("sui-container");return k(),be("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(s,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(s,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const hE=Le(fE,[["render",gE]]),_E=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),bE=S("p",null,"Is it okay to use this photo?",-1),vE=`<template>
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
<\/script>`,SE={__name:"ModalDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(I,{label:"Modal",code:vE},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(u(P),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(u(ws),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(u(ks),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(u(As),{image:""},{default:i(()=>[t(u(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(u(kd),null,{default:i(()=>[t(u(fe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),_E,bE]),_:1})]),_:1}),t(u(Cs),null,{default:i(()=>[t(u(P),{positive:"",onClick:o[1]||(o[1]=r=>a.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},yE=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),wE=`<template>
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
<\/script>`,CE={__name:"BasicDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(I,{label:"Basic",code:wE},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(u(P),{onClick:o[0]||(o[0]=r=>a.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(u(ws),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=r=>a.value=r)},{default:i(()=>[t(u(ks),{icon:""},{default:i(()=>[t(u(X),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(u(As),null,{default:i(()=>[yE]),_:1}),t(u(Cs),null,{default:i(()=>[t(u(P),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=r=>a.value=!1)}),t(u(P),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},AE={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:SE},{id:"basic",label:"Basic",category:"Types",component:CE}];return(l,o)=>(k(),B(ut,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},kE="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",xE=R({name:"PopupDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
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
/>`,m=G(null),f=`<sui-card ref="triggerTriger">
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
/>`,g=G(null),p=G(null),h=G(null),w=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,b=G(null),C=G(null),$=G(null),D=G(null),_=G(null),v=G(null),x=G(null),T=G(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
</sui-popup>`,F=G(null),j=G(null),Q=G(null),Y=G(null),ge=G(null),Be=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),K=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:o,titledTrigger3:r,titledCode:d,triggerTriger:m,triggerCode:f,basicTrigger:s,basicCode:c,wideTrigger1:g,wideTrigger2:p,wideTrigger3:h,wideCode:w,positionTrigger1:b,positionTrigger2:C,positionTrigger3:$,positionTrigger4:D,positionTrigger5:_,positionTrigger6:v,positionTrigger7:x,positionTrigger8:T,positionCode:E,flowingTrigger:V,flowingCode:M,sizeTrigger1:F,sizeTrigger2:j,sizeTrigger3:Q,sizeTrigger4:Y,sizeTrigger5:ge,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),$E=S("p",null,[S("b",null,"2"),n(" projects, $10 a month ")],-1),BE=S("p",null,[S("b",null,"5"),n(" projects, $20 a month ")],-1),TE=S("p",null,[S("b",null,"8"),n(" projects, $25 a month ")],-1);function DE(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),c=y("sui-button"),g=y("sui-popup"),p=y("doc-example"),h=y("sui-image"),w=y("sui-card-header"),b=y("sui-card-description"),C=y("sui-card-content"),$=y("sui-card"),D=y("sui-rating"),_=y("sui-divider"),v=y("sui-grid-column"),x=y("sui-grid"),T=y("sui-container");return k(),be("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(c,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:oi,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Po,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:kn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t($,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:kE}),t(C,null,{default:i(()=>[t(w,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(b,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(D,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(c,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(c,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(c,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(c,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(c,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(c,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(c,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(c,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),$E,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),BE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),TE,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(s,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(s,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(s,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(c,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(s,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const LE=Le(xE,[["render",DE]]),IE=R({name:"ProgressDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function EE(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-progress"),c=y("doc-example"),g=y("sui-segment"),p=y("sui-container");return k(),be("div",null,[t(m,{title:"Progress",sub:"A progress bar shows the progression of a task"}),t(p,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Standard",description:"A standard progress bar",code:e.standardCode},{default:i(()=>[t(s,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(c,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:e.indicatingCode},{default:i(()=>[t(s,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(c,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:e.barCode},{default:i(()=>[t(s,{percent:33})]),_:1},8,["code"]),t(c,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:e.progressCode},{default:i(()=>[t(s,{percent:14,progress:""})]),_:1},8,["code"]),t(c,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:e.centeredCode},{default:i(()=>[t(s,{percent:68,progress:"centered"})]),_:1},8,["code"]),t(c,{title:"Label",description:"A progress element can contain a label",code:e.labelCode},{default:i(()=>[t(s,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Active",description:"A progress bar can show activity",code:e.activeCode},{default:i(()=>[t(s,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),t(c,{title:"Success",description:"A progress bar can show a success state",code:e.successCode},{default:i(()=>[t(s,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),t(c,{title:"Warning",description:"A progress bar can show a warning state",code:e.warningCode},{default:i(()=>[t(s,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),t(c,{title:"Error",description:"A progress bar can show an error state",code:e.errorCode},{default:i(()=>[t(s,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),t(c,{title:"Disabled",description:"A progress bar can be disabled",code:e.disabledCode},{default:i(()=>[t(s,{percent:25,disabled:""})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Inverted",description:"A progress bar can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",percent:41,label:"Uploading Files",progress:""}),t(s,{inverted:"",percent:100,label:"Success",success:"",progress:""}),t(s,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),t(s,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),t(c,{title:"Attached",description:"A progress bar can show progress of an element",code:e.attachedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(s,{percent:47,attached:"top"}),n(" La la la la "),t(s,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A progress bar can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{percent:88,size:"tiny",label:"tiny"}),t(s,{percent:100,size:"small",label:"small",success:""}),t(s,{percent:83,label:"standard"}),t(s,{percent:73,size:"large",label:"large"}),t(s,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),t(c,{title:"Color",description:"A progress bar can have different colors",code:e.colorCode},{default:i(()=>[t(s,{percent:32,color:"red"}),t(s,{percent:53,color:"orange"}),t(s,{percent:13,color:"yellow"}),t(s,{percent:37,color:"olive"}),t(s,{percent:83,color:"green"}),t(s,{percent:24,color:"teal"}),t(s,{percent:88,color:"blue"}),t(s,{percent:41,color:"violet"}),t(s,{percent:47,color:"purple"}),t(s,{percent:30,color:"pink"}),t(s,{percent:68,color:"brown"}),t(s,{percent:35,color:"grey"}),t(s,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const zE=Le(IE,[["render",EE]]),RE=R({name:"RatingDoc",components:{DocPageHeader:lt,DocExample:Qe,PropertyListTable:xn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),PE=S("br",null,null,-1),FE=S("br",null,null,-1),VE=S("br",null,null,-1),ME=S("br",null,null,-1),HE=S("br",null,null,-1),NE=S("br",null,null,-1),OE=S("br",null,null,-1),qE=S("br",null,null,-1),jE=S("br",null,null,-1),GE=S("br",null,null,-1),UE=S("br",null,null,-1),YE=S("br",null,null,-1),JE=S("br",null,null,-1),WE=S("br",null,null,-1),KE=S("br",null,null,-1),XE=S("br",null,null,-1),QE=S("br",null,null,-1),ZE=S("br",null,null,-1),ez=S("br",null,null,-1),tz=S("br",null,null,-1),iz=S("br",null,null,-1),az=S("br",null,null,-1),lz=S("br",null,null,-1),nz=S("br",null,null,-1),oz=S("br",null,null,-1),sz=S("br",null,null,-1),rz=S("br",null,null,-1),uz=S("br",null,null,-1),cz=S("br",null,null,-1),dz=S("br",null,null,-1),mz=S("br",null,null,-1),pz=S("br",null,null,-1),fz=S("br",null,null,-1),gz=S("br",null,null,-1),hz=S("br",null,null,-1),_z=S("br",null,null,-1),bz=S("br",null,null,-1),vz=S("br",null,null,-1),Sz=S("br",null,null,-1),yz=S("br",null,null,-1),wz=S("br",null,null,-1),Cz=S("br",null,null,-1),Az=S("br",null,null,-1),kz=S("br",null,null,-1),xz=S("br",null,null,-1),$z=S("br",null,null,-1),Bz=S("br",null,null,-1),Tz=S("br",null,null,-1);function Dz(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-rating"),c=y("doc-example"),g=y("property-list-table"),p=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(s)]),_:1},8,["code"]),t(c,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(s,{defaultRating:2,maxRating:4,color:"yellow"}),PE,FE,t(s,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),VE,ME,t(s,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),HE,NE,t(s,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),OE,qE,t(s,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),jE,GE,t(s,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),UE,YE,t(s,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(c,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(s,{defaultRating:1,maxRating:7,color:"red"}),JE,WE,t(s,{defaultRating:2,maxRating:7,color:"orange"}),KE,XE,t(s,{defaultRating:3,maxRating:7,color:"yellow"}),QE,ZE,t(s,{defaultRating:4,maxRating:7,color:"olive"}),ez,tz,t(s,{defaultRating:5,maxRating:7,color:"green"}),iz,az,t(s,{defaultRating:6,maxRating:7,color:"teal"}),lz,nz,t(s,{defaultRating:6,maxRating:7,color:"blue"}),oz,sz,t(s,{defaultRating:5,maxRating:7,color:"violet"}),rz,uz,t(s,{defaultRating:4,maxRating:7,color:"purple"}),cz,dz,t(s,{defaultRating:3,maxRating:7,color:"pink"}),mz,pz,t(s,{defaultRating:2,maxRating:7,color:"brown"}),fz,gz,t(s,{defaultRating:1,maxRating:7,color:"grey"}),hz,_z,t(s,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(s,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),bz,vz,t(s,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),Sz,yz,t(s,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),wz,Cz,t(s,{defaultRating:3,maxRating:4,color:"yellow"}),Az,kz,t(s,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),xz,$z,t(s,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),Bz,Tz,t(s,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Lz=Le(RE,[["render",Dz]]),Iz=R({name:"SidebarDoc",components:{DocPageHeader:lt,DocExample:Qe,PropertyListTable:xn},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),Ez={class:"pusher"};function zz(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-icon"),c=y("sui-button"),g=y("sui-grid-column"),p=y("sui-menu-item"),h=y("sui-sidebar"),w=y("sui-image"),b=y("sui-segment"),C=y("sui-grid"),$=y("doc-example"),D=y("property-list-table"),_=y("sui-table-header-cell"),v=y("sui-table-row"),x=y("sui-table-header"),T=y("sui-table-cell"),E=y("sui-table-body"),V=y("sui-table"),M=y("sui-container");return k(),be("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(M,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(C,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{onClick:a[0]||(a[0]=F=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(s,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(b,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=F=>e.visible1=F),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(p,null,{default:i(()=>[t(s,{name:"home"}),n(" Home ")]),_:1}),t(p,null,{default:i(()=>[t(s,{name:"gamepad"}),n(" Games ")]),_:1}),t(p,null,{default:i(()=>[t(s,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",Ez,[t(b,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(w,{src:Re})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(D,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(V,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.events,F=>(k(),B(v,{key:F.name},{default:i(()=>[t(T,null,{default:i(()=>[n(Te(F.name),1)]),_:2},1024),t(T,null,{default:i(()=>[n(Te(F.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Rz=Le(Iz,[["render",zz]]),Pz=R({name:"SliderDoc",components:{DocPageHeader:lt,DocExample:Qe},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',l=G(4),o='<sui-slider labeled v-model="slider2" />',r=G(6),d='<sui-slider labeled="ticked" v-model="slider3" />',m=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,s=G(40),c='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const p='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),w='<sui-slider disabled v-model="slider7" />',b=G(8),C=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,$=G(3),D='<sui-slider reversed v-model="slider9" />',_=G(18),v='<sui-slider vertical v-model="slider10" :max="20" />',x=G(5),T=G(5),E=G(5),V=G(5),M=G(5),F=G(5),j=G(5),Q=G(5),Y=G(5),ge=G(5),Be=G(5),U=G(5),K=G(5),me=`<sui-slider color="red" v-model="redSlider" />
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
</sui-segment>`,De=G(5),Je=G(5),st=G(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:o,slider3:r,labeledTickedCode:d,slider4:m,customLabelsCode:f,slider5:s,stepCode:c,slider6:g,rangeCode:p,slider7:h,disabledCode:w,slider8:b,invertedCode:C,slider9:$,reversedCode:D,slider10:_,verticalCode:v,redSlider:x,orangeSlider:T,yellowSlider:E,oliveSlider:V,greenSlider:M,tealSlider:F,blueSlider:j,violetSlider:Q,purpleSlider:Y,pinkSlider:ge,brownSlider:Be,greySlider:U,blackSlider:K,coloredCode:me,invertedColoredCode:ae,smallSlider:De,largeSlider:Je,bigSlider:st,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function Fz(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-slider"),c=y("doc-example"),g=y("sui-segment"),p=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),C=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(s,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),n(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(c,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(s,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(s,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(s,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(s,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(c,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(s,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(s,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(s,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),n(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(c,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(s,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),n(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(c,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(s,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(s,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(s,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(s,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(s,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(s,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.properties,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.type),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.default),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(C,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Vz=Le(Pz,[["render",Fz]]),Mz=R({name:"TabDoc",components:{DocPageHeader:lt,DocExample:Qe,PropertyListTable:xn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function Hz(e,a,l,o,r,d){const m=y("doc-page-header"),f=y("sui-header"),s=y("sui-tab-panel"),c=y("sui-tab"),g=y("doc-example"),p=y("property-list-table"),h=y("sui-table-header-cell"),w=y("sui-table-row"),b=y("sui-table-header"),C=y("sui-table-cell"),$=y("sui-table-body"),D=y("sui-table"),_=y("sui-container");return k(),be("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(c,null,{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(s,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(s,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(s,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(p,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(p,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(D,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[(k(!0),be(Ae,null,Ze(e.events,v=>(k(),B(w,{key:v.name},{default:i(()=>[t(C,null,{default:i(()=>[n(Te(v.name),1)]),_:2},1024),t(C,null,{default:i(()=>[n(Te(v.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Nz=Le(Mz,[["render",Hz]]),Oz=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,qz={__name:"MinimalDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Minimal",code:Oz},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},jz=`<template>
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
<\/script>`,Gz={__name:"TitledDoc",setup(e){const{toast:a}=ct(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Titled",code:jz},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Uz=`<template>
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
<\/script>`,Yz={__name:"ProgressBarDoc",setup(e){const{toast:a}=ct(),l=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Progress Bar",code:Uz},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(d,{color:"red",onClick:r[0]||(r[0]=m=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},Jz=`<template>
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
<\/script>`,Wz={__name:"ToastTypeDoc",setup(e){const{toast:a}=ct(),l=o=>{a({message:"You're using the good framework !",type:o})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Toast Type",code:Jz},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(d,{onClick:r[2]||(r[2]=m=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},Kz=`<template>
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
<\/script>`,Xz={__name:"PositionDoc",setup(e){const{toast:a}=ct(),l=o=>{a({position:o,message:"Look, I'm here !"})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Position",code:Kz},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},Qz=S("br",null,null,-1),Zz=`<template>
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
<\/script>`,eR={__name:"AttachedPosition",setup(e){const{toast:a}=ct(),l=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Attached Position",code:Zz},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),Qz,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},tR=`<template>
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
<\/script>`,iR={__name:"DirectionDoc",setup(e){const{toast:a}=ct(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Direction",code:tR},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},aR=`<template>
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
<\/script>`,lR={__name:"CenterAligned",setup(e){const{toast:a}=ct(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Center Aligned",code:aR},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},nR=`<template>
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
<\/script>`,oR={__name:"DurationDoc",setup(e){const{toast:a}=ct(),l=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Duration",code:nR},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:r[0]||(r[0]=m=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(d,{onClick:r[1]||(r[1]=m=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},sR=`<template>
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
<\/script>`,rR={__name:"MessageStyleDoc",setup(e){const{toast:a}=ct(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Use Message Style",code:sR},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},uR=`<template>
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
<\/script>`,cR={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ct(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,r)=>{const d=y("SuiButton");return k(),B(I,{label:"Increasing Progress Bar",code:uR},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},dR=`<template>
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
<\/script>`,mR={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ct(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,m)=>{const f=y("SuiButton");return k(),B(I,{label:"Color Variants",code:dR},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},pR={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ct(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],r=()=>{a({color:o[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,m)=>{const f=y("SuiButton");return k(),B(I,{label:"Inverted Colors",code:d.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:r},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},fR=`<template>
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
<\/script>`,gR={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[W(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[W(X,{name:"check"}),"Yes"]),W(P,{color:"red",icon:!0},()=>[W(X,{name:"ban"})]),W(P,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,r)=>(k(),B(I,{label:"General",code:fR},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(u(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},hR=`<template>
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
<\/script>`,_R={__name:"ActionBasicDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[W(P,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,r)=>(k(),B(I,{label:"Basic",code:hR},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(u(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},bR=`<template>
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
<\/script>`,vR={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[W(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),W(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,r)=>(k(),B(I,{label:"Attached",code:bR},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(u(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},SR=`<template>
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
<\/script>`,yR={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[W(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),W(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,r)=>(k(),B(I,{label:"Vertical",code:SR},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(u(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},wR=S("br",null,null,-1),CR=`<template>
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
<\/script>`,AR={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ct(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[W(P,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),W(P,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,r)=>(k(),B(I,{label:"Vertical Attached",code:CR},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),wR,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(u(P),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},kR={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:qz},{id:"titled",label:"Titled",category:"Types",component:Gz},{id:"progress-bar",label:"Progress Bar",category:"Types",component:Yz},{id:"toast-type",label:"Toast Type",category:"Variations",component:Wz},{id:"position",label:"Position",category:"Variations",component:Xz},{id:"attached-position",label:"Attached Position",category:"Variations",component:eR},{id:"direction",label:"Direction",category:"Variations",component:iR},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:lR},{id:"duration",label:"Duration",category:"Variations",component:oR},{id:"message-style",label:"Use Message Style",category:"Variations",component:rR},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:cR},{id:"color-variants",label:"Color Variants",category:"Variations",component:mR},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:pR},{id:"general",label:"General",category:"Actions",component:gR},{id:"action-basic",label:"Basic",category:"Actions",component:_R},{id:"action-attached",label:"Attached",category:"Actions",component:vR},{id:"action-vertical",label:"Vertical",category:"Actions",component:yR},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:AR}];return(l,o)=>(k(),B(ut,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},xR=[{path:"/",component:zh,children:[{path:"/",component:r_},{path:"elements/button",component:Pw},{path:"elements/container",component:Jw},{path:"elements/divider",component:vC},{path:"elements/emoji",component:DC},{path:"elements/flag",component:RC},{path:"elements/header",component:pA},{path:"elements/icon",component:GA},{path:"elements/image",component:I0},{path:"elements/input",component:ak},{path:"elements/label",component:mx},{path:"elements/list",component:Vx},{path:"elements/loader",component:s$},{path:"elements/rail",component:d$},{path:"elements/reveal",component:A$},{path:"elements/segment",component:KT},{path:"elements/step",component:iD},{path:"collections/breadcrumb",component:vD},{path:"collections/form",component:VD},{path:"collections/grid",component:GD},{path:"collections/menu",component:ZD},{path:"collections/message",component:d2},{path:"collections/table",component:A2},{path:"views/advertisement",component:()=>Cr(()=>import("./Advertisement-NdTTjDwm.js"),__vite__mapDeps([]))},{path:"views/card",component:nL},{path:"views/comment",component:()=>Cr(()=>import("./Comment-uPf_KYbU.js"),__vite__mapDeps([]))},{path:"views/feed",component:$L},{path:"views/item",component:hI},{path:"views/statistic",component:kI},{path:"modules/accordion",component:JI},{path:"modules/calendar",component:XI},{path:"modules/checkbox",component:sE},{path:"modules/dimmer",component:cE},{path:"modules/dropdown",component:pE},{path:"modules/embed",component:hE},{path:"modules/modal",component:AE},{path:"modules/popup",component:LE},{path:"modules/progress",component:zE},{path:"modules/rating",component:Lz},{path:"modules/sidebar",component:Rz},{path:"modules/slider",component:Vz},{path:"modules/tab",component:Nz},{path:"modules/toast",component:kR}]}],$R=ph({history:Bg("/vue-fomantic-ui/"),routes:xR,scrollBehavior(e,a,l){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=o.variable[1].inside,m=0;m<r.length;m++)d[r[m]]=e.languages.bash[r[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Ls=Gc(rg);Ls.use($R);Ls.use(dy);Ls.mount("#app");export{ut as D,I as _,n as a,t as b,B as c,S as d,de as e,R as f,Q_ as g,kn as h,oi as i,An as j,Ro as k,Po as l,Ll as m,N as n,k as o,ab as r,u,f_ as v,i as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

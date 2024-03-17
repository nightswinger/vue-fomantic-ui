(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function l(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=l(s);fetch(s.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,a){const l=new Set(e.split(","));return a?o=>l.has(o.toLowerCase()):o=>l.has(o)}const qe={},sa=[],yt=()=>{},Gd=()=>!1,cl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fo=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Vo=(e,a)=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)},Ud=Object.prototype.hasOwnProperty,Pe=(e,a)=>Ud.call(e,a),he=Array.isArray,ra=e=>ka(e)==="[object Map]",Wi=e=>ka(e)==="[object Set]",zs=e=>ka(e)==="[object Date]",Yd=e=>ka(e)==="[object RegExp]",Ce=e=>typeof e=="function",Xe=e=>typeof e=="string",Ci=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",Mo=e=>(Ge(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),eu=Object.prototype.toString,ka=e=>eu.call(e),Jd=e=>ka(e).slice(8,-1),tu=e=>ka(e)==="[object Object]",Ho=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ja=an(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ln=e=>{const a=Object.create(null);return l=>a[l]||(a[l]=e(l))},Wd=/-(\w)/g,vt=ln(e=>e.replace(Wd,(a,l)=>l?l.toUpperCase():"")),Kd=/\B([A-Z])/g,Dt=ln(e=>e.replace(Kd,"-$1").toLowerCase()),dl=ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ga=ln(e=>e?`on${dl(e)}`:""),jt=(e,a)=>!Object.is(e,a),ua=(e,a)=>{for(let l=0;l<e.length;l++)e[l](a)},Hl=(e,a,l)=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value:l})},Za=e=>{const a=parseFloat(e);return isNaN(a)?e:a},Nl=e=>{const a=Xe(e)?Number(e):NaN;return isNaN(a)?e:a};let Ps;const iu=()=>Ps||(Ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Xd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Qd=an(Xd);function xa(e){if(he(e)){const a={};for(let l=0;l<e.length;l++){const o=e[l],s=Xe(o)?im(o):xa(o);if(s)for(const d in s)a[d]=s[d]}return a}else if(Xe(e)||Ge(e))return e}const Zd=/;(?![^(]*\))/g,em=/:([^]+)/,tm=/\/\*[^]*?\*\//g;function im(e){const a={};return e.replace(tm,"").split(Zd).forEach(l=>{if(l){const o=l.split(em);o.length>1&&(a[o[0].trim()]=o[1].trim())}}),a}function ml(e){let a="";if(Xe(e))a=e;else if(he(e))for(let l=0;l<e.length;l++){const o=ml(e[l]);o&&(a+=o+" ")}else if(Ge(e))for(const l in e)e[l]&&(a+=l+" ");return a.trim()}function am(e){if(!e)return null;let{class:a,style:l}=e;return a&&!Xe(a)&&(e.class=ml(a)),l&&(e.style=xa(l)),e}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nm=an(lm);function au(e){return!!e||e===""}function om(e,a){if(e.length!==a.length)return!1;let l=!0;for(let o=0;l&&o<e.length;o++)l=li(e[o],a[o]);return l}function li(e,a){if(e===a)return!0;let l=zs(e),o=zs(a);if(l||o)return l&&o?e.getTime()===a.getTime():!1;if(l=Ci(e),o=Ci(a),l||o)return e===a;if(l=he(e),o=he(a),l||o)return l&&o?om(e,a):!1;if(l=Ge(e),o=Ge(a),l||o){if(!l||!o)return!1;const s=Object.keys(e).length,d=Object.keys(a).length;if(s!==d)return!1;for(const m in e){const f=e.hasOwnProperty(m),r=a.hasOwnProperty(m);if(f&&!r||!f&&r||!li(e[m],a[m]))return!1}}return String(e)===String(a)}function nn(e,a){return e.findIndex(l=>li(l,a))}const Te=e=>Xe(e)?e:e==null?"":he(e)||Ge(e)&&(e.toString===eu||!Ce(e.toString))?JSON.stringify(e,lu,2):String(e),lu=(e,a)=>a&&a.__v_isRef?lu(e,a.value):ra(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[o,s],d)=>(l[Bn(o,d)+" =>"]=s,l),{})}:Wi(a)?{[`Set(${a.size})`]:[...a.values()].map(l=>Bn(l))}:Ci(a)?Bn(a):Ge(a)&&!he(a)&&!tu(a)?String(a):a,Bn=(e,a="")=>{var l;return Ci(e)?`Symbol(${(l=e.description)!=null?l:a})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class No{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!a&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const l=$t;try{return $t=this,a()}finally{$t=l}}}on(){$t=this}off(){$t=this.parent}stop(a){if(this._active){let l,o;for(l=0,o=this.effects.length;l<o;l++)this.effects[l].stop();for(l=0,o=this.cleanups.length;l<o;l++)this.cleanups[l]();if(this.scopes)for(l=0,o=this.scopes.length;l<o;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function sm(e){return new No(e)}function nu(e,a=$t){a&&a.active&&a.effects.push(e)}function Oo(){return $t}function ou(e){$t&&$t.cleanups.push(e)}let Pi;class ba{constructor(a,l,o,s){this.fn=a,this.trigger=l,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,nu(this,s)}get dirty(){if(this._dirtyLevel===1){Ki();for(let a=0;a<this._depsLength;a++){const l=this.deps[a];if(l.computed&&(rm(l.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xi()}return this._dirtyLevel>=2}set dirty(a){this._dirtyLevel=a?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=Si,l=Pi;try{return Si=!0,Pi=this,this._runnings++,Fs(this),this.fn()}finally{Vs(this),this._runnings--,Pi=l,Si=a}}stop(){var a;this.active&&(Fs(this),Vs(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function rm(e){return e.value}function Fs(e){e._trackId++,e._depsLength=0}function Vs(e){if(e.deps&&e.deps.length>e._depsLength){for(let a=e._depsLength;a<e.deps.length;a++)su(e.deps[a],e);e.deps.length=e._depsLength}}function su(e,a){const l=e.get(a);l!==void 0&&a._trackId!==l&&(e.delete(a),e.size===0&&e.cleanup())}function um(e,a){e.effect instanceof ba&&(e=e.effect.fn);const l=new ba(e,yt,()=>{l.dirty&&l.run()});a&&(Ke(l,a),a.scope&&nu(l,a.scope)),(!a||!a.lazy)&&l.run();const o=l.run.bind(l);return o.effect=l,o}function cm(e){e.effect.stop()}let Si=!0,eo=0;const ru=[];function Ki(){ru.push(Si),Si=!1}function Xi(){const e=ru.pop();Si=e===void 0?!0:e}function qo(){eo++}function jo(){for(eo--;!eo&&to.length;)to.shift()()}function uu(e,a,l){if(a.get(e)!==e._trackId){a.set(e,e._trackId);const o=e.deps[e._depsLength];o!==a?(o&&su(o,e),e.deps[e._depsLength++]=a):e._depsLength++}}const to=[];function cu(e,a,l){qo();for(const o of e.keys())if(o._dirtyLevel<a&&e.get(o)===o._trackId){const s=o._dirtyLevel;o._dirtyLevel=a,s===0&&(o._shouldSchedule=!0,o.trigger())}du(e),jo()}function du(e){for(const a of e.keys())a.scheduler&&a._shouldSchedule&&(!a._runnings||a.allowRecurse)&&e.get(a)===a._trackId&&(a._shouldSchedule=!1,to.push(a.scheduler))}const mu=(e,a)=>{const l=new Map;return l.cleanup=e,l.computed=a,l},Ol=new WeakMap,Fi=Symbol(""),io=Symbol("");function At(e,a,l){if(Si&&Pi){let o=Ol.get(e);o||Ol.set(e,o=new Map);let s=o.get(l);s||o.set(l,s=mu(()=>o.delete(l))),uu(Pi,s)}}function ii(e,a,l,o,s,d){const m=Ol.get(e);if(!m)return;let f=[];if(a==="clear")f=[...m.values()];else if(l==="length"&&he(e)){const r=Number(o);m.forEach((c,g)=>{(g==="length"||!Ci(g)&&g>=r)&&f.push(c)})}else switch(l!==void 0&&f.push(m.get(l)),a){case"add":he(e)?Ho(l)&&f.push(m.get("length")):(f.push(m.get(Fi)),ra(e)&&f.push(m.get(io)));break;case"delete":he(e)||(f.push(m.get(Fi)),ra(e)&&f.push(m.get(io)));break;case"set":ra(e)&&f.push(m.get(Fi));break}qo();for(const r of f)r&&cu(r,2);jo()}function dm(e,a){var l;return(l=Ol.get(e))==null?void 0:l.get(a)}const mm=an("__proto__,__v_isRef,__isVue"),pu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ci)),Ms=pm();function pm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(a=>{e[a]=function(...l){const o=Ee(this);for(let d=0,m=this.length;d<m;d++)At(o,"get",d+"");const s=o[a](...l);return s===-1||s===!1?o[a](...l.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{e[a]=function(...l){Ki(),qo();const o=Ee(this)[a].apply(this,l);return jo(),Xi(),o}}),e}function fm(e){const a=Ee(this);return At(a,"has",e),a.hasOwnProperty(e)}class fu{constructor(a=!1,l=!1){this._isReadonly=a,this._shallow=l}get(a,l,o){const s=this._isReadonly,d=this._shallow;if(l==="__v_isReactive")return!s;if(l==="__v_isReadonly")return s;if(l==="__v_isShallow")return d;if(l==="__v_raw")return o===(s?d?Su:vu:d?bu:_u).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(o)?a:void 0;const m=he(a);if(!s){if(m&&Pe(Ms,l))return Reflect.get(Ms,l,o);if(l==="hasOwnProperty")return fm}const f=Reflect.get(a,l,o);return(Ci(l)?pu.has(l):mm(l))||(s||At(a,"get",l),d)?f:pt(f)?m&&Ho(l)?f:f.value:Ge(f)?s?Uo(f):si(f):f}}class gu extends fu{constructor(a=!1){super(!1,a)}set(a,l,o,s){let d=a[l];if(!this._shallow){const r=Oi(d);if(!el(o)&&!Oi(o)&&(d=Ee(d),o=Ee(o)),!he(a)&&pt(d)&&!pt(o))return r?!1:(d.value=o,!0)}const m=he(a)&&Ho(l)?Number(l)<a.length:Pe(a,l),f=Reflect.set(a,l,o,s);return a===Ee(s)&&(m?jt(o,d)&&ii(a,"set",l,o):ii(a,"add",l,o)),f}deleteProperty(a,l){const o=Pe(a,l);a[l];const s=Reflect.deleteProperty(a,l);return s&&o&&ii(a,"delete",l,void 0),s}has(a,l){const o=Reflect.has(a,l);return(!Ci(l)||!pu.has(l))&&At(a,"has",l),o}ownKeys(a){return At(a,"iterate",he(a)?"length":Fi),Reflect.ownKeys(a)}}class hu extends fu{constructor(a=!1){super(!0,a)}set(a,l){return!0}deleteProperty(a,l){return!0}}const gm=new gu,hm=new hu,_m=new gu(!0),bm=new hu(!0),Go=e=>e,on=e=>Reflect.getPrototypeOf(e);function vl(e,a,l=!1,o=!1){e=e.__v_raw;const s=Ee(e),d=Ee(a);l||(jt(a,d)&&At(s,"get",a),At(s,"get",d));const{has:m}=on(s),f=o?Go:l?Wo:tl;if(m.call(s,a))return f(e.get(a));if(m.call(s,d))return f(e.get(d));e!==s&&e.get(a)}function Sl(e,a=!1){const l=this.__v_raw,o=Ee(l),s=Ee(e);return a||(jt(e,s)&&At(o,"has",e),At(o,"has",s)),e===s?l.has(e):l.has(e)||l.has(s)}function yl(e,a=!1){return e=e.__v_raw,!a&&At(Ee(e),"iterate",Fi),Reflect.get(e,"size",e)}function Hs(e){e=Ee(e);const a=Ee(this);return on(a).has.call(a,e)||(a.add(e),ii(a,"add",e,e)),this}function Ns(e,a){a=Ee(a);const l=Ee(this),{has:o,get:s}=on(l);let d=o.call(l,e);d||(e=Ee(e),d=o.call(l,e));const m=s.call(l,e);return l.set(e,a),d?jt(a,m)&&ii(l,"set",e,a):ii(l,"add",e,a),this}function Os(e){const a=Ee(this),{has:l,get:o}=on(a);let s=l.call(a,e);s||(e=Ee(e),s=l.call(a,e)),o&&o.call(a,e);const d=a.delete(e);return s&&ii(a,"delete",e,void 0),d}function qs(){const e=Ee(this),a=e.size!==0,l=e.clear();return a&&ii(e,"clear",void 0,void 0),l}function wl(e,a){return function(o,s){const d=this,m=d.__v_raw,f=Ee(m),r=a?Go:e?Wo:tl;return!e&&At(f,"iterate",Fi),m.forEach((c,g)=>o.call(s,r(c),r(g),d))}}function Cl(e,a,l){return function(...o){const s=this.__v_raw,d=Ee(s),m=ra(d),f=e==="entries"||e===Symbol.iterator&&m,r=e==="keys"&&m,c=s[e](...o),g=l?Go:a?Wo:tl;return!a&&At(d,"iterate",r?io:Fi),{next(){const{value:p,done:h}=c.next();return h?{value:p,done:h}:{value:f?[g(p[0]),g(p[1])]:g(p),done:h}},[Symbol.iterator](){return this}}}}function ci(e){return function(...a){return e==="delete"?!1:e==="clear"?void 0:this}}function vm(){const e={get(d){return vl(this,d)},get size(){return yl(this)},has:Sl,add:Hs,set:Ns,delete:Os,clear:qs,forEach:wl(!1,!1)},a={get(d){return vl(this,d,!1,!0)},get size(){return yl(this)},has:Sl,add:Hs,set:Ns,delete:Os,clear:qs,forEach:wl(!1,!0)},l={get(d){return vl(this,d,!0)},get size(){return yl(this,!0)},has(d){return Sl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:wl(!0,!1)},o={get(d){return vl(this,d,!0,!0)},get size(){return yl(this,!0)},has(d){return Sl.call(this,d,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:wl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{e[d]=Cl(d,!1,!1),l[d]=Cl(d,!0,!1),a[d]=Cl(d,!1,!0),o[d]=Cl(d,!0,!0)}),[e,l,a,o]}const[Sm,ym,wm,Cm]=vm();function sn(e,a){const l=a?e?Cm:wm:e?ym:Sm;return(o,s,d)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(Pe(l,s)&&s in o?l:o,s,d)}const Am={get:sn(!1,!1)},km={get:sn(!1,!0)},xm={get:sn(!0,!1)},$m={get:sn(!0,!0)},_u=new WeakMap,bu=new WeakMap,vu=new WeakMap,Su=new WeakMap;function Bm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tm(e){return e.__v_skip||!Object.isExtensible(e)?0:Bm(Jd(e))}function si(e){return Oi(e)?e:rn(e,!1,gm,Am,_u)}function yu(e){return rn(e,!1,_m,km,bu)}function Uo(e){return rn(e,!0,hm,xm,vu)}function Dm(e){return rn(e,!0,bm,$m,Su)}function rn(e,a,l,o,s){if(!Ge(e)||e.__v_raw&&!(a&&e.__v_isReactive))return e;const d=s.get(e);if(d)return d;const m=Tm(e);if(m===0)return e;const f=new Proxy(e,m===2?o:l);return s.set(e,f),f}function Vi(e){return Oi(e)?Vi(e.__v_raw):!!(e&&e.__v_isReactive)}function Oi(e){return!!(e&&e.__v_isReadonly)}function el(e){return!!(e&&e.__v_isShallow)}function Yo(e){return Vi(e)||Oi(e)}function Ee(e){const a=e&&e.__v_raw;return a?Ee(a):e}function Jo(e){return Hl(e,"__v_skip",!0),e}const tl=e=>Ge(e)?si(e):e,Wo=e=>Ge(e)?Uo(e):e;class wu{constructor(a,l,o,s){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ba(()=>a(this._value),()=>ca(this,1),()=>this.dep&&du(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const a=Ee(this);return(!a._cacheable||a.effect.dirty)&&jt(a._value,a._value=a.effect.run())&&ca(a,2),Ko(a),a.effect._dirtyLevel>=1&&ca(a,1),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Lm(e,a,l=!1){let o,s;const d=Ce(e);return d?(o=e,s=yt):(o=e.get,s=e.set),new wu(o,s,d||!s,l)}function Ko(e){Si&&Pi&&(e=Ee(e),uu(Pi,e.dep||(e.dep=mu(()=>e.dep=void 0,e instanceof wu?e:void 0))))}function ca(e,a=2,l){e=Ee(e);const o=e.dep;o&&cu(o,a)}function pt(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Au(e,!1)}function Cu(e){return Au(e,!0)}function Au(e,a){return pt(e)?e:new Im(e,a)}class Im{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Ee(a),this._value=l?a:tl(a)}get value(){return Ko(this),this._value}set value(a){const l=this.__v_isShallow||el(a)||Oi(a);a=l?a:Ee(a),jt(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:tl(a),ca(this,2))}}function Em(e){ca(e,2)}function u(e){return pt(e)?e.value:e}function Rm(e){return Ce(e)?e():u(e)}const zm={get:(e,a,l)=>u(Reflect.get(e,a,l)),set:(e,a,l,o)=>{const s=e[a];return pt(s)&&!pt(l)?(s.value=l,!0):Reflect.set(e,a,l,o)}};function Xo(e){return Vi(e)?e:new Proxy(e,zm)}class Pm{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:o}=a(()=>Ko(this),()=>ca(this));this._get=l,this._set=o}get value(){return this._get()}set value(a){this._set(a)}}function ku(e){return new Pm(e)}function Fm(e){const a=he(e)?new Array(e.length):{};for(const l in e)a[l]=xu(e,l);return a}class Vm{constructor(a,l,o){this._object=a,this._key=l,this._defaultValue=o,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return dm(Ee(this._object),this._key)}}class Mm{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ao(e,a,l){return pt(e)?e:Ce(e)?new Mm(e):Ge(e)&&arguments.length>1?xu(e,a,l):G(e)}function xu(e,a,l){const o=e[a];return pt(o)?o:new Vm(e,a,l)}const Hm={GET:"get",HAS:"has",ITERATE:"iterate"},Nm={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Om(e,a){}const qm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},jm={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function ai(e,a,l,o){let s;try{s=o?e(...o):e()}catch(d){Qi(d,a,l)}return s}function Et(e,a,l,o){if(Ce(e)){const d=ai(e,a,l,o);return d&&Mo(d)&&d.catch(m=>{Qi(m,a,l)}),d}const s=[];for(let d=0;d<e.length;d++)s.push(Et(e[d],a,l,o));return s}function Qi(e,a,l,o=!0){const s=a?a.vnode:null;if(a){let d=a.parent;const m=a.proxy,f=`https://vuejs.org/error-reference/#runtime-${l}`;for(;d;){const c=d.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,m,f)===!1)return}d=d.parent}const r=a.appContext.config.errorHandler;if(r){ai(r,null,10,[e,m,f]);return}}Gm(e,l,s,o)}function Gm(e,a,l,o=!0){console.error(e)}let il=!1,lo=!1;const ft=[];let Wt=0;const da=[];let gi=null,Ei=0;const $u=Promise.resolve();let Qo=null;function $a(e){const a=Qo||$u;return e?a.then(this?e.bind(this):e):a}function Um(e){let a=Wt+1,l=ft.length;for(;a<l;){const o=a+l>>>1,s=ft[o],d=al(s);d<e||d===e&&s.pre?a=o+1:l=o}return a}function un(e){(!ft.length||!ft.includes(e,il&&e.allowRecurse?Wt+1:Wt))&&(e.id==null?ft.push(e):ft.splice(Um(e.id),0,e),Bu())}function Bu(){!il&&!lo&&(lo=!0,Qo=$u.then(Tu))}function Ym(e){const a=ft.indexOf(e);a>Wt&&ft.splice(a,1)}function ql(e){he(e)?da.push(...e):(!gi||!gi.includes(e,e.allowRecurse?Ei+1:Ei))&&da.push(e),Bu()}function js(e,a,l=il?Wt+1:0){for(;l<ft.length;l++){const o=ft[l];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ft.splice(l,1),l--,o()}}}function jl(e){if(da.length){const a=[...new Set(da)].sort((l,o)=>al(l)-al(o));if(da.length=0,gi){gi.push(...a);return}for(gi=a,Ei=0;Ei<gi.length;Ei++)gi[Ei]();gi=null,Ei=0}}const al=e=>e.id==null?1/0:e.id,Jm=(e,a)=>{const l=al(e)-al(a);if(l===0){if(e.pre&&!a.pre)return-1;if(a.pre&&!e.pre)return 1}return l};function Tu(e){lo=!1,il=!0,ft.sort(Jm);try{for(Wt=0;Wt<ft.length;Wt++){const a=ft[Wt];a&&a.active!==!1&&ai(a,null,14)}}finally{Wt=0,ft.length=0,jl(),il=!1,Qo=null,(ft.length||da.length)&&Tu()}}let la,Al=[];function Du(e,a){var l,o;la=e,la?(la.enabled=!0,Al.forEach(({event:s,args:d})=>la.emit(s,...d)),Al=[]):typeof window<"u"&&window.HTMLElement&&!((o=(l=window.navigator)==null?void 0:l.userAgent)!=null&&o.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{Du(d,a)}),setTimeout(()=>{la||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Al=[])},3e3)):Al=[]}function Wm(e,a,...l){if(e.isUnmounted)return;const o=e.vnode.props||qe;let s=l;const d=a.startsWith("update:"),m=d&&a.slice(7);if(m&&m in o){const g=`${m==="modelValue"?"model":m}Modifiers`,{number:p,trim:h}=o[g]||qe;h&&(s=l.map(w=>Xe(w)?w.trim():w)),p&&(s=l.map(Za))}let f,r=o[f=Ga(a)]||o[f=Ga(vt(a))];!r&&d&&(r=o[f=Ga(Dt(a))]),r&&Et(r,e,6,s);const c=o[f+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Et(c,e,6,s)}}function Lu(e,a,l=!1){const o=a.emitsCache,s=o.get(e);if(s!==void 0)return s;const d=e.emits;let m={},f=!1;if(!Ce(e)){const r=c=>{const g=Lu(c,a,!0);g&&(f=!0,Ke(m,g))};!l&&a.mixins.length&&a.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!d&&!f?(Ge(e)&&o.set(e,null),null):(he(d)?d.forEach(r=>m[r]=null):Ke(m,d),Ge(e)&&o.set(e,m),m)}function cn(e,a){return!e||!cl(a)?!1:(a=a.slice(2).replace(/Once$/,""),Pe(e,a[0].toLowerCase()+a.slice(1))||Pe(e,Dt(a))||Pe(e,a))}let it=null,dn=null;function ll(e){const a=it;return it=e,dn=e&&e.type.__scopeId||null,a}function Iu(e){dn=e}function Eu(){dn=null}const Km=e=>i;function i(e,a=it,l){if(!a||e._n)return e;const o=(...s)=>{o._d&&po(-1);const d=ll(a);let m;try{m=e(...s)}finally{ll(d),o._d&&po(1)}return m};return o._n=!0,o._c=!0,o._d=!0,o}function Pl(e){const{type:a,vnode:l,proxy:o,withProxy:s,props:d,propsOptions:[m],slots:f,attrs:r,emit:c,render:g,renderCache:p,data:h,setupState:w,ctx:b,inheritAttrs:A}=e;let $,D;const _=ll(e);try{if(l.shapeFlag&4){const x=s||o,T=x;$=Bt(g.call(T,x,p,d,w,h,b)),D=r}else{const x=a;$=Bt(x.length>1?x(d,{attrs:r,slots:f,emit:c}):x(d,null)),D=a.props?r:Qm(r)}}catch(x){Ja.length=0,Qi(x,e,1),$=t(ht)}let v=$;if(D&&A!==!1){const x=Object.keys(D),{shapeFlag:T}=v;x.length&&T&7&&(m&&x.some(Fo)&&(D=Zm(D,m)),v=Kt(v,D))}return l.dirs&&(v=Kt(v),v.dirs=v.dirs?v.dirs.concat(l.dirs):l.dirs),l.transition&&(v.transition=l.transition),$=v,ll(_),$}function Xm(e,a=!0){let l;for(let o=0;o<e.length;o++){const s=e[o];if(kt(s)){if(s.type!==ht||s.children==="v-if"){if(l)return;l=s}}else return}return l}const Qm=e=>{let a;for(const l in e)(l==="class"||l==="style"||cl(l))&&((a||(a={}))[l]=e[l]);return a},Zm=(e,a)=>{const l={};for(const o in e)(!Fo(o)||!(o.slice(9)in a))&&(l[o]=e[o]);return l};function ep(e,a,l){const{props:o,children:s,component:d}=e,{props:m,children:f,patchFlag:r}=a,c=d.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&r>=0){if(r&1024)return!0;if(r&16)return o?Gs(o,m,c):!!m;if(r&8){const g=a.dynamicProps;for(let p=0;p<g.length;p++){const h=g[p];if(m[h]!==o[h]&&!cn(c,h))return!0}}}else return(s||f)&&(!f||!f.$stable)?!0:o===m?!1:o?m?Gs(o,m,c):!0:!!m;return!1}function Gs(e,a,l){const o=Object.keys(a);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const d=o[s];if(a[d]!==e[d]&&!cn(l,d))return!0}return!1}function Zo({vnode:e,parent:a},l){for(;a;){const o=a.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=a.vnode).el=l,a=a.parent;else break}}const es="components",tp="directives";function y(e,a){return ts(es,e,!0,a)||e}const Ru=Symbol.for("v-ndc");function zu(e){return Xe(e)?ts(es,e,!1)||e:e||Ru}function mn(e){return ts(tp,e)}function ts(e,a,l=!0,o=!1){const s=it||nt;if(s){const d=s.type;if(e===es){const f=bo(d,!1);if(f&&(f===a||f===vt(a)||f===dl(vt(a))))return d}const m=Us(s[e]||d[e],a)||Us(s.appContext[e],a);return!m&&o?d:m}}function Us(e,a){return e&&(e[a]||e[vt(a)]||e[dl(vt(a))])}const Pu=e=>e.__isSuspense;let no=0;const ip={name:"Suspense",__isSuspense:!0,process(e,a,l,o,s,d,m,f,r,c){if(e==null)lp(a,l,o,s,d,m,f,r,c);else{if(d&&d.deps>0){a.suspense=e.suspense;return}np(e,a,l,o,s,m,f,r,c)}},hydrate:op,create:is,normalize:sp},ap=ip;function nl(e,a){const l=e.props&&e.props[a];Ce(l)&&l()}function lp(e,a,l,o,s,d,m,f,r){const{p:c,o:{createElement:g}}=r,p=g("div"),h=e.suspense=is(e,s,o,a,p,l,d,m,f,r);c(null,h.pendingBranch=e.ssContent,p,null,o,h,d,m),h.deps>0?(nl(e,"onPending"),nl(e,"onFallback"),c(null,e.ssFallback,a,l,o,null,d,m),ma(h,e.ssFallback)):h.resolve(!1,!0)}function np(e,a,l,o,s,d,m,f,{p:r,um:c,o:{createElement:g}}){const p=a.suspense=e.suspense;p.vnode=a,a.el=e.el;const h=a.ssContent,w=a.ssFallback,{activeBranch:b,pendingBranch:A,isInFallback:$,isHydrating:D}=p;if(A)p.pendingBranch=h,qt(h,A)?(r(A,h,p.hiddenContainer,null,s,p,d,m,f),p.deps<=0?p.resolve():$&&(D||(r(b,w,l,o,s,null,d,m,f),ma(p,w)))):(p.pendingId=no++,D?(p.isHydrating=!1,p.activeBranch=A):c(A,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=g("div"),$?(r(null,h,p.hiddenContainer,null,s,p,d,m,f),p.deps<=0?p.resolve():(r(b,w,l,o,s,null,d,m,f),ma(p,w))):b&&qt(h,b)?(r(b,h,l,o,s,p,d,m,f),p.resolve(!0)):(r(null,h,p.hiddenContainer,null,s,p,d,m,f),p.deps<=0&&p.resolve()));else if(b&&qt(h,b))r(b,h,l,o,s,p,d,m,f),ma(p,h);else if(nl(a,"onPending"),p.pendingBranch=h,h.shapeFlag&512?p.pendingId=h.component.suspenseId:p.pendingId=no++,r(null,h,p.hiddenContainer,null,s,p,d,m,f),p.deps<=0)p.resolve();else{const{timeout:_,pendingId:v}=p;_>0?setTimeout(()=>{p.pendingId===v&&p.fallback(w)},_):_===0&&p.fallback(w)}}function is(e,a,l,o,s,d,m,f,r,c,g=!1){const{p,m:h,um:w,n:b,o:{parentNode:A,remove:$}}=c;let D;const _=rp(e);_&&a!=null&&a.pendingBranch&&(D=a.pendingId,a.deps++);const v=e.props?Nl(e.props.timeout):void 0,x=d,T={vnode:e,parent:a,parentComponent:l,namespace:m,container:o,hiddenContainer:s,deps:0,pendingId:no++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(E=!1,V=!1){const{vnode:M,activeBranch:F,pendingBranch:j,pendingId:Q,effects:Y,parentComponent:ge,container:Be}=T;let U=!1;T.isHydrating?T.isHydrating=!1:E||(U=F&&j.transition&&j.transition.mode==="out-in",U&&(F.transition.afterLeave=()=>{Q===T.pendingId&&(h(j,Be,d===x?b(F):d,0),ql(Y))}),F&&(A(F.el)!==T.hiddenContainer&&(d=b(F)),w(F,ge,T,!0)),U||h(j,Be,d,0)),ma(T,j),T.pendingBranch=null,T.isInFallback=!1;let K=T.parent,me=!1;for(;K;){if(K.pendingBranch){K.effects.push(...Y),me=!0;break}K=K.parent}!me&&!U&&ql(Y),T.effects=[],_&&a&&a.pendingBranch&&D===a.pendingId&&(a.deps--,a.deps===0&&!V&&a.resolve()),nl(M,"onResolve")},fallback(E){if(!T.pendingBranch)return;const{vnode:V,activeBranch:M,parentComponent:F,container:j,namespace:Q}=T;nl(V,"onFallback");const Y=b(M),ge=()=>{T.isInFallback&&(p(null,E,j,Y,F,null,Q,f,r),ma(T,E))},Be=E.transition&&E.transition.mode==="out-in";Be&&(M.transition.afterLeave=ge),T.isInFallback=!0,w(M,F,null,!0),Be||ge()},move(E,V,M){T.activeBranch&&h(T.activeBranch,E,V,M),T.container=E},next(){return T.activeBranch&&b(T.activeBranch)},registerDep(E,V){const M=!!T.pendingBranch;M&&T.deps++;const F=E.vnode.el;E.asyncDep.catch(j=>{Qi(j,E,0)}).then(j=>{if(E.isUnmounted||T.isUnmounted||T.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:Q}=E;ho(E,j,!1),F&&(Q.el=F);const Y=!F&&E.subTree.el;V(E,Q,A(F||E.subTree.el),F?null:b(E.subTree),T,m,r),Y&&$(Y),Zo(E,Q.el),M&&--T.deps===0&&T.resolve()})},unmount(E,V){T.isUnmounted=!0,T.activeBranch&&w(T.activeBranch,l,E,V),T.pendingBranch&&w(T.pendingBranch,l,E,V)}};return T}function op(e,a,l,o,s,d,m,f,r){const c=a.suspense=is(a,o,l,e.parentNode,document.createElement("div"),null,s,d,m,f,!0),g=r(e,c.pendingBranch=a.ssContent,l,c,d,m);return c.deps===0&&c.resolve(!1,!0),g}function sp(e){const{shapeFlag:a,children:l}=e,o=a&32;e.ssContent=Ys(o?l.default:l),e.ssFallback=o?Ys(l.fallback):t(ht)}function Ys(e){let a;if(Ce(e)){const l=Ui&&e._c;l&&(e._d=!1,k()),e=e(),l&&(e._d=!0,a=wt,fc())}return he(e)&&(e=Xm(e)),e=Bt(e),a&&!e.dynamicChildren&&(e.dynamicChildren=a.filter(l=>l!==e)),e}function Fu(e,a){a&&a.pendingBranch?he(e)?a.effects.push(...e):a.effects.push(e):ql(e)}function ma(e,a){e.activeBranch=a;const{vnode:l,parentComponent:o}=e;let s=a.el;for(;!s&&a.component;)a=a.component.subTree,s=a.el;l.el=s,o&&o.subTree===l&&(o.vnode.el=s,Zo(o,s))}function rp(e){var a;return((a=e.props)==null?void 0:a.suspensible)!=null&&e.props.suspensible!==!1}const Vu=Symbol.for("v-scx"),Mu=()=>He(Vu);function as(e,a){return pl(e,null,a)}function Hu(e,a){return pl(e,null,{flush:"post"})}function Nu(e,a){return pl(e,null,{flush:"sync"})}const kl={};function gt(e,a,l){return pl(e,a,l)}function pl(e,a,{immediate:l,deep:o,flush:s,once:d,onTrack:m,onTrigger:f}=qe){if(a&&d){const E=a;a=(...V)=>{E(...V),T()}}const r=nt,c=E=>o===!0?E:Ri(E,o===!1?1:void 0);let g,p=!1,h=!1;if(pt(e)?(g=()=>e.value,p=el(e)):Vi(e)?(g=()=>c(e),p=!0):he(e)?(h=!0,p=e.some(E=>Vi(E)||el(E)),g=()=>e.map(E=>{if(pt(E))return E.value;if(Vi(E))return c(E);if(Ce(E))return ai(E,r,2)})):Ce(e)?a?g=()=>ai(e,r,2):g=()=>(w&&w(),Et(e,r,3,[b])):g=yt,a&&o){const E=g;g=()=>Ri(E())}let w,b=E=>{w=v.onStop=()=>{ai(E,r,4),w=v.onStop=void 0}},A;if(gl)if(b=yt,a?l&&Et(a,r,3,[g(),h?[]:void 0,b]):g(),s==="sync"){const E=Mu();A=E.__watcherHandles||(E.__watcherHandles=[])}else return yt;let $=h?new Array(e.length).fill(kl):kl;const D=()=>{if(!(!v.active||!v.dirty))if(a){const E=v.run();(o||p||(h?E.some((V,M)=>jt(V,$[M])):jt(E,$)))&&(w&&w(),Et(a,r,3,[E,$===kl?void 0:h&&$[0]===kl?[]:$,b]),$=E)}else v.run()};D.allowRecurse=!!a;let _;s==="sync"?_=D:s==="post"?_=()=>dt(D,r&&r.suspense):(D.pre=!0,r&&(D.id=r.uid),_=()=>un(D));const v=new ba(g,yt,_),x=Oo(),T=()=>{v.stop(),x&&Vo(x.effects,v)};return a?l?D():$=v.run():s==="post"?dt(v.run.bind(v),r&&r.suspense):v.run(),A&&A.push(T),T}function up(e,a,l){const o=this.proxy,s=Xe(e)?e.includes(".")?Ou(o,e):()=>o[e]:e.bind(o,o);let d;Ce(a)?d=a:(d=a.handler,l=a);const m=Yi(this),f=pl(s,d.bind(o),l);return m(),f}function Ou(e,a){const l=a.split(".");return()=>{let o=e;for(let s=0;s<l.length&&o;s++)o=o[l[s]];return o}}function Ri(e,a,l=0,o){if(!Ge(e)||e.__v_skip)return e;if(a&&a>0){if(l>=a)return e;l++}if(o=o||new Set,o.has(e))return e;if(o.add(e),pt(e))Ri(e.value,a,l,o);else if(he(e))for(let s=0;s<e.length;s++)Ri(e[s],a,l,o);else if(Wi(e)||ra(e))e.forEach(s=>{Ri(s,a,l,o)});else if(tu(e))for(const s in e)Ri(e[s],a,l,o);return e}function yi(e,a){if(it===null)return e;const l=vn(it)||it.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<a.length;s++){let[d,m,f,r=qe]=a[s];d&&(Ce(d)&&(d={mounted:d,updated:d}),d.deep&&Ri(m),o.push({dir:d,instance:l,value:m,oldValue:void 0,arg:f,modifiers:r}))}return e}function Ut(e,a,l,o){const s=e.dirs,d=a&&a.dirs;for(let m=0;m<s.length;m++){const f=s[m];d&&(f.oldValue=d[m].value);let r=f.dir[o];r&&(Ki(),Et(r,l,8,[e.el,f,e,a]),Xi())}}const hi=Symbol("_leaveCb"),xl=Symbol("_enterCb");function ls(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ki(()=>{e.isMounted=!0}),hn(()=>{e.isUnmounting=!0}),e}const Ft=[Function,Array],ns={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},cp={name:"BaseTransition",props:ns,setup(e,{slots:a}){const l=Xt(),o=ls();let s;return()=>{const d=a.default&&pn(a.default(),!0);if(!d||!d.length)return;let m=d[0];if(d.length>1){for(const A of d)if(A.type!==ht){m=A;break}}const f=Ee(e),{mode:r}=f;if(o.isLeaving)return Tn(m);const c=Js(m);if(!c)return Tn(m);const g=va(c,f,o,l);qi(c,g);const p=l.subTree,h=p&&Js(p);let w=!1;const{getTransitionKey:b}=c.type;if(b){const A=b();s===void 0?s=A:A!==s&&(s=A,w=!0)}if(h&&h.type!==ht&&(!qt(c,h)||w)){const A=va(h,f,o,l);if(qi(h,A),r==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,l.update.active!==!1&&(l.effect.dirty=!0,l.update())},Tn(m);r==="in-out"&&c.type!==ht&&(A.delayLeave=($,D,_)=>{const v=ju(o,h);v[String(h.key)]=h,$[hi]=()=>{D(),$[hi]=void 0,delete g.delayedLeave},g.delayedLeave=_})}return m}}},qu=cp;function ju(e,a){const{leavingVNodes:l}=e;let o=l.get(a.type);return o||(o=Object.create(null),l.set(a.type,o)),o}function va(e,a,l,o){const{appear:s,mode:d,persisted:m=!1,onBeforeEnter:f,onEnter:r,onAfterEnter:c,onEnterCancelled:g,onBeforeLeave:p,onLeave:h,onAfterLeave:w,onLeaveCancelled:b,onBeforeAppear:A,onAppear:$,onAfterAppear:D,onAppearCancelled:_}=a,v=String(e.key),x=ju(l,e),T=(M,F)=>{M&&Et(M,o,9,F)},E=(M,F)=>{const j=F[1];T(M,F),he(M)?M.every(Q=>Q.length<=1)&&j():M.length<=1&&j()},V={mode:d,persisted:m,beforeEnter(M){let F=f;if(!l.isMounted)if(s)F=A||f;else return;M[hi]&&M[hi](!0);const j=x[v];j&&qt(e,j)&&j.el[hi]&&j.el[hi](),T(F,[M])},enter(M){let F=r,j=c,Q=g;if(!l.isMounted)if(s)F=$||r,j=D||c,Q=_||g;else return;let Y=!1;const ge=M[xl]=Be=>{Y||(Y=!0,Be?T(Q,[M]):T(j,[M]),V.delayedLeave&&V.delayedLeave(),M[xl]=void 0)};F?E(F,[M,ge]):ge()},leave(M,F){const j=String(e.key);if(M[xl]&&M[xl](!0),l.isUnmounting)return F();T(p,[M]);let Q=!1;const Y=M[hi]=ge=>{Q||(Q=!0,F(),ge?T(b,[M]):T(w,[M]),M[hi]=void 0,x[j]===e&&delete x[j])};x[j]=e,h?E(h,[M,Y]):Y()},clone(M){return va(M,a,l,o)}};return V}function Tn(e){if(fl(e))return e=Kt(e),e.children=null,e}function Js(e){return fl(e)?e.children?e.children[0]:void 0:e}function qi(e,a){e.shapeFlag&6&&e.component?qi(e.component.subTree,a):e.shapeFlag&128?(e.ssContent.transition=a.clone(e.ssContent),e.ssFallback.transition=a.clone(e.ssFallback)):e.transition=a}function pn(e,a=!1,l){let o=[],s=0;for(let d=0;d<e.length;d++){let m=e[d];const f=l==null?m.key:String(l)+String(m.key!=null?m.key:d);m.type===Ae?(m.patchFlag&128&&s++,o=o.concat(pn(m.children,a,f))):(a||m.type!==ht)&&o.push(f!=null?Kt(m,{key:f}):m)}if(s>1)for(let d=0;d<o.length;d++)o[d].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function P(e,a){return Ce(e)?Ke({name:e.name},a,{setup:e}):e}const Mi=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function dp(e){Ce(e)&&(e={loader:e});const{loader:a,loadingComponent:l,errorComponent:o,delay:s=200,timeout:d,suspensible:m=!0,onError:f}=e;let r=null,c,g=0;const p=()=>(g++,r=null,h()),h=()=>{let w;return r||(w=r=a().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),f)return new Promise((A,$)=>{f(b,()=>A(p()),()=>$(b),g+1)});throw b}).then(b=>w!==r&&r?r:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return P({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const w=nt;if(c)return()=>Dn(c,w);const b=_=>{r=null,Qi(_,w,13,!o)};if(m&&w.suspense||gl)return h().then(_=>()=>Dn(_,w)).catch(_=>(b(_),()=>o?t(o,{error:_}):null));const A=G(!1),$=G(),D=G(!!s);return s&&setTimeout(()=>{D.value=!1},s),d!=null&&setTimeout(()=>{if(!A.value&&!$.value){const _=new Error(`Async component timed out after ${d}ms.`);b(_),$.value=_}},d),h().then(()=>{A.value=!0,w.parent&&fl(w.parent.vnode)&&(w.parent.effect.dirty=!0,un(w.parent.update))}).catch(_=>{b(_),$.value=_}),()=>{if(A.value&&c)return Dn(c,w);if($.value&&o)return t(o,{error:$.value});if(l&&!D.value)return t(l)}}})}function Dn(e,a){const{ref:l,props:o,children:s,ce:d}=a.vnode,m=t(e,o,s);return m.ref=l,m.ce=d,delete a.vnode.ce,m}const fl=e=>e.type.__isKeepAlive,mp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:a}){const l=Xt(),o=l.ctx;if(!o.renderer)return()=>{const _=a.default&&a.default();return _&&_.length===1?_[0]:_};const s=new Map,d=new Set;let m=null;const f=l.suspense,{renderer:{p:r,m:c,um:g,o:{createElement:p}}}=o,h=p("div");o.activate=(_,v,x,T,E)=>{const V=_.component;c(_,v,x,0,f),r(V.vnode,_,v,x,V,f,T,_.slotScopeIds,E),dt(()=>{V.isDeactivated=!1,V.a&&ua(V.a);const M=_.props&&_.props.onVnodeMounted;M&&St(M,V.parent,_)},f)},o.deactivate=_=>{const v=_.component;c(_,h,null,1,f),dt(()=>{v.da&&ua(v.da);const x=_.props&&_.props.onVnodeUnmounted;x&&St(x,v.parent,_),v.isDeactivated=!0},f)};function w(_){Ln(_),g(_,l,f,!0)}function b(_){s.forEach((v,x)=>{const T=bo(v.type);T&&(!_||!_(T))&&A(x)})}function A(_){const v=s.get(_);!m||!qt(v,m)?w(v):m&&Ln(m),s.delete(_),d.delete(_)}gt(()=>[e.include,e.exclude],([_,v])=>{_&&b(x=>Va(_,x)),v&&b(x=>!Va(v,x))},{flush:"post",deep:!0});let $=null;const D=()=>{$!=null&&s.set($,In(l.subTree))};return ki(D),gn(D),hn(()=>{s.forEach(_=>{const{subTree:v,suspense:x}=l,T=In(v);if(_.type===T.type&&_.key===T.key){Ln(T);const E=T.component.da;E&&dt(E,x);return}w(_)})}),()=>{if($=null,!a.default)return null;const _=a.default(),v=_[0];if(_.length>1)return m=null,_;if(!kt(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return m=null,v;let x=In(v);const T=x.type,E=bo(Mi(x)?x.type.__asyncResolved||{}:T),{include:V,exclude:M,max:F}=e;if(V&&(!E||!Va(V,E))||M&&E&&Va(M,E))return m=x,v;const j=x.key==null?T:x.key,Q=s.get(j);return x.el&&(x=Kt(x),v.shapeFlag&128&&(v.ssContent=x)),$=j,Q?(x.el=Q.el,x.component=Q.component,x.transition&&qi(x,x.transition),x.shapeFlag|=512,d.delete(j),d.add(j)):(d.add(j),F&&d.size>parseInt(F,10)&&A(d.values().next().value)),x.shapeFlag|=256,m=x,Pu(v.type)?v:x}}},pp=mp;function Va(e,a){return he(e)?e.some(l=>Va(l,a)):Xe(e)?e.split(",").includes(a):Yd(e)?e.test(a):!1}function os(e,a){Gu(e,"a",a)}function ss(e,a){Gu(e,"da",a)}function Gu(e,a,l=nt){const o=e.__wdc||(e.__wdc=()=>{let s=l;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fn(a,o,l),l){let s=l.parent;for(;s&&s.parent;)fl(s.parent.vnode)&&fp(o,a,l,s),s=s.parent}}function fp(e,a,l,o){const s=fn(a,e,o,!0);Zi(()=>{Vo(o[a],s)},l)}function Ln(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function In(e){return e.shapeFlag&128?e.ssContent:e}function fn(e,a,l=nt,o=!1){if(l){const s=l[e]||(l[e]=[]),d=a.__weh||(a.__weh=(...m)=>{if(l.isUnmounted)return;Ki();const f=Yi(l),r=Et(a,l,e,m);return f(),Xi(),r});return o?s.unshift(d):s.push(d),d}}const ri=e=>(a,l=nt)=>(!gl||e==="sp")&&fn(e,(...o)=>a(...o),l),Uu=ri("bm"),ki=ri("m"),Yu=ri("bu"),gn=ri("u"),hn=ri("bum"),Zi=ri("um"),Ju=ri("sp"),Wu=ri("rtg"),Ku=ri("rtc");function Xu(e,a=nt){fn("ec",e,a)}function Qe(e,a,l,o){let s;const d=l&&l[o];if(he(e)||Xe(e)){s=new Array(e.length);for(let m=0,f=e.length;m<f;m++)s[m]=a(e[m],m,void 0,d&&d[m])}else if(typeof e=="number"){s=new Array(e);for(let m=0;m<e;m++)s[m]=a(m+1,m,void 0,d&&d[m])}else if(Ge(e))if(e[Symbol.iterator])s=Array.from(e,(m,f)=>a(m,f,void 0,d&&d[f]));else{const m=Object.keys(e);s=new Array(m.length);for(let f=0,r=m.length;f<r;f++){const c=m[f];s[f]=a(e[c],c,f,d&&d[f])}}else s=[];return l&&(l[o]=s),s}function gp(e,a){for(let l=0;l<a.length;l++){const o=a[l];if(he(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const d=o.fn(...s);return d&&(d.key=o.key),d}:o.fn)}return e}function ji(e,a,l={},o,s){if(it.isCE||it.parent&&Mi(it.parent)&&it.parent.isCE)return a!=="default"&&(l.name=a),t("slot",l,o&&o());let d=e[a];d&&d._c&&(d._d=!1),k();const m=d&&Qu(d(l)),f=B(Ae,{key:l.key||m&&m.key||`_${a}`},m||(o?o():[]),m&&e._===1?64:-2);return!s&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),d&&d._c&&(d._d=!0),f}function Qu(e){return e.some(a=>kt(a)?!(a.type===ht||a.type===Ae&&!Qu(a.children)):!0)?e:null}function hp(e,a){const l={};for(const o in e)l[a&&/[A-Z]/.test(o)?`on:${o}`:Ga(o)]=e[o];return l}const oo=e=>e?vc(e)?vn(e)||e.proxy:oo(e.parent):null,Ua=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oo(e.parent),$root:e=>oo(e.root),$emit:e=>e.emit,$options:e=>rs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,un(e.update)}),$nextTick:e=>e.n||(e.n=$a.bind(e.proxy)),$watch:e=>up.bind(e)}),En=(e,a)=>e!==qe&&!e.__isScriptSetup&&Pe(e,a),so={get({_:e},a){const{ctx:l,setupState:o,data:s,props:d,accessCache:m,type:f,appContext:r}=e;let c;if(a[0]!=="$"){const w=m[a];if(w!==void 0)switch(w){case 1:return o[a];case 2:return s[a];case 4:return l[a];case 3:return d[a]}else{if(En(o,a))return m[a]=1,o[a];if(s!==qe&&Pe(s,a))return m[a]=2,s[a];if((c=e.propsOptions[0])&&Pe(c,a))return m[a]=3,d[a];if(l!==qe&&Pe(l,a))return m[a]=4,l[a];ro&&(m[a]=0)}}const g=Ua[a];let p,h;if(g)return a==="$attrs"&&At(e,"get",a),g(e);if((p=f.__cssModules)&&(p=p[a]))return p;if(l!==qe&&Pe(l,a))return m[a]=4,l[a];if(h=r.config.globalProperties,Pe(h,a))return h[a]},set({_:e},a,l){const{data:o,setupState:s,ctx:d}=e;return En(s,a)?(s[a]=l,!0):o!==qe&&Pe(o,a)?(o[a]=l,!0):Pe(e.props,a)||a[0]==="$"&&a.slice(1)in e?!1:(d[a]=l,!0)},has({_:{data:e,setupState:a,accessCache:l,ctx:o,appContext:s,propsOptions:d}},m){let f;return!!l[m]||e!==qe&&Pe(e,m)||En(a,m)||(f=d[0])&&Pe(f,m)||Pe(o,m)||Pe(Ua,m)||Pe(s.config.globalProperties,m)},defineProperty(e,a,l){return l.get!=null?e._.accessCache[a]=0:Pe(l,"value")&&this.set(e,a,l.value,null),Reflect.defineProperty(e,a,l)}},_p=Ke({},so,{get(e,a){if(a!==Symbol.unscopables)return so.get(e,a,e)},has(e,a){return a[0]!=="_"&&!Qd(a)}});function bp(){return null}function vp(){return null}function Sp(e){}function yp(e){}function wp(){return null}function Cp(){}function Ap(e,a){return null}function kp(){return ec().slots}function Zu(){return ec().attrs}function ec(){const e=Xt();return e.setupContext||(e.setupContext=wc(e))}function ol(e){return he(e)?e.reduce((a,l)=>(a[l]=null,a),{}):e}function xp(e,a){const l=ol(e);for(const o in a){if(o.startsWith("__skip"))continue;let s=l[o];s?he(s)||Ce(s)?s=l[o]={type:s,default:a[o]}:s.default=a[o]:s===null&&(s=l[o]={default:a[o]}),s&&a[`__skip_${o}`]&&(s.skipFactory=!0)}return l}function $p(e,a){return!e||!a?e||a:he(e)&&he(a)?e.concat(a):Ke({},ol(e),ol(a))}function Bp(e,a){const l={};for(const o in e)a.includes(o)||Object.defineProperty(l,o,{enumerable:!0,get:()=>e[o]});return l}function Tp(e){const a=Xt();let l=e();return go(),Mo(l)&&(l=l.catch(o=>{throw Yi(a),o})),[l,()=>Yi(a)]}let ro=!0;function Dp(e){const a=rs(e),l=e.proxy,o=e.ctx;ro=!1,a.beforeCreate&&Ws(a.beforeCreate,e,"bc");const{data:s,computed:d,methods:m,watch:f,provide:r,inject:c,created:g,beforeMount:p,mounted:h,beforeUpdate:w,updated:b,activated:A,deactivated:$,beforeDestroy:D,beforeUnmount:_,destroyed:v,unmounted:x,render:T,renderTracked:E,renderTriggered:V,errorCaptured:M,serverPrefetch:F,expose:j,inheritAttrs:Q,components:Y,directives:ge,filters:Be}=a;if(c&&Lp(c,o,null),m)for(const me in m){const ae=m[me];Ce(ae)&&(o[me]=ae.bind(l))}if(s){const me=s.call(l,l);Ge(me)&&(e.data=si(me))}if(ro=!0,d)for(const me in d){const ae=d[me],De=Ce(ae)?ae.bind(l,l):Ce(ae.get)?ae.get.bind(l,l):yt,Je=!Ce(ae)&&Ce(ae.set)?ae.set.bind(l):yt,ot=H({get:De,set:Je});Object.defineProperty(o,me,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ue=>ot.value=Ue})}if(f)for(const me in f)tc(f[me],o,l,me);if(r){const me=Ce(r)?r.call(l):r;Reflect.ownKeys(me).forEach(ae=>{mt(ae,me[ae])})}g&&Ws(g,e,"c");function K(me,ae){he(ae)?ae.forEach(De=>me(De.bind(l))):ae&&me(ae.bind(l))}if(K(Uu,p),K(ki,h),K(Yu,w),K(gn,b),K(os,A),K(ss,$),K(Xu,M),K(Ku,E),K(Wu,V),K(hn,_),K(Zi,x),K(Ju,F),he(j))if(j.length){const me=e.exposed||(e.exposed={});j.forEach(ae=>{Object.defineProperty(me,ae,{get:()=>l[ae],set:De=>l[ae]=De})})}else e.exposed||(e.exposed={});T&&e.render===yt&&(e.render=T),Q!=null&&(e.inheritAttrs=Q),Y&&(e.components=Y),ge&&(e.directives=ge)}function Lp(e,a,l=yt){he(e)&&(e=uo(e));for(const o in e){const s=e[o];let d;Ge(s)?"default"in s?d=He(s.from||o,s.default,!0):d=He(s.from||o):d=He(s),pt(d)?Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>d.value,set:m=>d.value=m}):a[o]=d}}function Ws(e,a,l){Et(he(e)?e.map(o=>o.bind(a.proxy)):e.bind(a.proxy),a,l)}function tc(e,a,l,o){const s=o.includes(".")?Ou(l,o):()=>l[o];if(Xe(e)){const d=a[e];Ce(d)&&gt(s,d)}else if(Ce(e))gt(s,e.bind(l));else if(Ge(e))if(he(e))e.forEach(d=>tc(d,a,l,o));else{const d=Ce(e.handler)?e.handler.bind(l):a[e.handler];Ce(d)&&gt(s,d,e)}}function rs(e){const a=e.type,{mixins:l,extends:o}=a,{mixins:s,optionsCache:d,config:{optionMergeStrategies:m}}=e.appContext,f=d.get(a);let r;return f?r=f:!s.length&&!l&&!o?r=a:(r={},s.length&&s.forEach(c=>Gl(r,c,m,!0)),Gl(r,a,m)),Ge(a)&&d.set(a,r),r}function Gl(e,a,l,o=!1){const{mixins:s,extends:d}=a;d&&Gl(e,d,l,!0),s&&s.forEach(m=>Gl(e,m,l,!0));for(const m in a)if(!(o&&m==="expose")){const f=Ip[m]||l&&l[m];e[m]=f?f(e[m],a[m]):a[m]}return e}const Ip={data:Ks,props:Xs,emits:Xs,methods:Ma,computed:Ma,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ma,directives:Ma,watch:Rp,provide:Ks,inject:Ep};function Ks(e,a){return a?e?function(){return Ke(Ce(e)?e.call(this,this):e,Ce(a)?a.call(this,this):a)}:a:e}function Ep(e,a){return Ma(uo(e),uo(a))}function uo(e){if(he(e)){const a={};for(let l=0;l<e.length;l++)a[e[l]]=e[l];return a}return e}function bt(e,a){return e?[...new Set([].concat(e,a))]:a}function Ma(e,a){return e?Ke(Object.create(null),e,a):a}function Xs(e,a){return e?he(e)&&he(a)?[...new Set([...e,...a])]:Ke(Object.create(null),ol(e),ol(a??{})):a}function Rp(e,a){if(!e)return a;if(!a)return e;const l=Ke(Object.create(null),e);for(const o in a)l[o]=bt(e[o],a[o]);return l}function ic(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zp=0;function Pp(e,a){return function(o,s=null){Ce(o)||(o=Ke({},o)),s!=null&&!Ge(s)&&(s=null);const d=ic(),m=new WeakSet;let f=!1;const r=d.app={_uid:zp++,_component:o,_props:s,_container:null,_context:d,_instance:null,version:Ac,get config(){return d.config},set config(c){},use(c,...g){return m.has(c)||(c&&Ce(c.install)?(m.add(c),c.install(r,...g)):Ce(c)&&(m.add(c),c(r,...g))),r},mixin(c){return d.mixins.includes(c)||d.mixins.push(c),r},component(c,g){return g?(d.components[c]=g,r):d.components[c]},directive(c,g){return g?(d.directives[c]=g,r):d.directives[c]},mount(c,g,p){if(!f){const h=t(o,s);return h.appContext=d,p===!0?p="svg":p===!1&&(p=void 0),g&&a?a(h,c):e(h,c,p),f=!0,r._container=c,c.__vue_app__=r,vn(h.component)||h.component.proxy}},unmount(){f&&(e(null,r._container),delete r._container.__vue_app__)},provide(c,g){return d.provides[c]=g,r},runWithContext(c){sl=r;try{return c()}finally{sl=null}}};return r}}let sl=null;function mt(e,a){if(nt){let l=nt.provides;const o=nt.parent&&nt.parent.provides;o===l&&(l=nt.provides=Object.create(o)),l[e]=a}}function He(e,a,l=!1){const o=nt||it;if(o||sl){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:sl._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return l&&Ce(a)?a.call(o&&o.proxy):a}}function Fp(){return!!(nt||it||sl)}function Vp(e,a,l,o=!1){const s={},d={};Hl(d,bn,1),e.propsDefaults=Object.create(null),ac(e,a,s,d);for(const m in e.propsOptions[0])m in s||(s[m]=void 0);l?e.props=o?s:yu(s):e.type.props?e.props=s:e.props=d,e.attrs=d}function Mp(e,a,l,o){const{props:s,attrs:d,vnode:{patchFlag:m}}=e,f=Ee(s),[r]=e.propsOptions;let c=!1;if((o||m>0)&&!(m&16)){if(m&8){const g=e.vnode.dynamicProps;for(let p=0;p<g.length;p++){let h=g[p];if(cn(e.emitsOptions,h))continue;const w=a[h];if(r)if(Pe(d,h))w!==d[h]&&(d[h]=w,c=!0);else{const b=vt(h);s[b]=co(r,f,b,w,e,!1)}else w!==d[h]&&(d[h]=w,c=!0)}}}else{ac(e,a,s,d)&&(c=!0);let g;for(const p in f)(!a||!Pe(a,p)&&((g=Dt(p))===p||!Pe(a,g)))&&(r?l&&(l[p]!==void 0||l[g]!==void 0)&&(s[p]=co(r,f,p,void 0,e,!0)):delete s[p]);if(d!==f)for(const p in d)(!a||!Pe(a,p))&&(delete d[p],c=!0)}c&&ii(e,"set","$attrs")}function ac(e,a,l,o){const[s,d]=e.propsOptions;let m=!1,f;if(a)for(let r in a){if(ja(r))continue;const c=a[r];let g;s&&Pe(s,g=vt(r))?!d||!d.includes(g)?l[g]=c:(f||(f={}))[g]=c:cn(e.emitsOptions,r)||(!(r in o)||c!==o[r])&&(o[r]=c,m=!0)}if(d){const r=Ee(l),c=f||qe;for(let g=0;g<d.length;g++){const p=d[g];l[p]=co(s,r,p,c[p],e,!Pe(c,p))}}return m}function co(e,a,l,o,s,d){const m=e[l];if(m!=null){const f=Pe(m,"default");if(f&&o===void 0){const r=m.default;if(m.type!==Function&&!m.skipFactory&&Ce(r)){const{propsDefaults:c}=s;if(l in c)o=c[l];else{const g=Yi(s);o=c[l]=r.call(null,a),g()}}else o=r}m[0]&&(d&&!f?o=!1:m[1]&&(o===""||o===Dt(l))&&(o=!0))}return o}function lc(e,a,l=!1){const o=a.propsCache,s=o.get(e);if(s)return s;const d=e.props,m={},f=[];let r=!1;if(!Ce(e)){const g=p=>{r=!0;const[h,w]=lc(p,a,!0);Ke(m,h),w&&f.push(...w)};!l&&a.mixins.length&&a.mixins.forEach(g),e.extends&&g(e.extends),e.mixins&&e.mixins.forEach(g)}if(!d&&!r)return Ge(e)&&o.set(e,sa),sa;if(he(d))for(let g=0;g<d.length;g++){const p=vt(d[g]);Qs(p)&&(m[p]=qe)}else if(d)for(const g in d){const p=vt(g);if(Qs(p)){const h=d[g],w=m[p]=he(h)||Ce(h)?{type:h}:Ke({},h);if(w){const b=tr(Boolean,w.type),A=tr(String,w.type);w[0]=b>-1,w[1]=A<0||b<A,(b>-1||Pe(w,"default"))&&f.push(p)}}}const c=[m,f];return Ge(e)&&o.set(e,c),c}function Qs(e){return e[0]!=="$"}function Zs(e){const a=e&&e.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:e===null?"null":""}function er(e,a){return Zs(e)===Zs(a)}function tr(e,a){return he(a)?a.findIndex(l=>er(l,e)):Ce(a)&&er(a,e)?0:-1}const nc=e=>e[0]==="_"||e==="$stable",us=e=>he(e)?e.map(Bt):[Bt(e)],Hp=(e,a,l)=>{if(a._n)return a;const o=i((...s)=>us(a(...s)),l);return o._c=!1,o},oc=(e,a,l)=>{const o=e._ctx;for(const s in e){if(nc(s))continue;const d=e[s];if(Ce(d))a[s]=Hp(s,d,o);else if(d!=null){const m=us(d);a[s]=()=>m}}},sc=(e,a)=>{const l=us(a);e.slots.default=()=>l},Np=(e,a)=>{if(e.vnode.shapeFlag&32){const l=a._;l?(e.slots=Ee(a),Hl(a,"_",l)):oc(a,e.slots={})}else e.slots={},a&&sc(e,a);Hl(e.slots,bn,1)},Op=(e,a,l)=>{const{vnode:o,slots:s}=e;let d=!0,m=qe;if(o.shapeFlag&32){const f=a._;f?l&&f===1?d=!1:(Ke(s,a),!l&&f===1&&delete s._):(d=!a.$stable,oc(a,s)),m=a}else a&&(sc(e,a),m={default:1});if(d)for(const f in s)!nc(f)&&m[f]==null&&delete s[f]};function Ul(e,a,l,o,s=!1){if(he(e)){e.forEach((h,w)=>Ul(h,a&&(he(a)?a[w]:a),l,o,s));return}if(Mi(o)&&!s)return;const d=o.shapeFlag&4?vn(o.component)||o.component.proxy:o.el,m=s?null:d,{i:f,r}=e,c=a&&a.r,g=f.refs===qe?f.refs={}:f.refs,p=f.setupState;if(c!=null&&c!==r&&(Xe(c)?(g[c]=null,Pe(p,c)&&(p[c]=null)):pt(c)&&(c.value=null)),Ce(r))ai(r,f,12,[m,g]);else{const h=Xe(r),w=pt(r),b=e.f;if(h||w){const A=()=>{if(b){const $=h?Pe(p,r)?p[r]:g[r]:r.value;s?he($)&&Vo($,d):he($)?$.includes(d)||$.push(d):h?(g[r]=[d],Pe(p,r)&&(p[r]=g[r])):(r.value=[d],e.k&&(g[e.k]=r.value))}else h?(g[r]=m,Pe(p,r)&&(p[r]=m)):w&&(r.value=m,e.k&&(g[e.k]=m))};s||b?A():(A.id=-1,dt(A,l))}}}let di=!1;const qp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",jp=e=>e.namespaceURI.includes("MathML"),$l=e=>{if(qp(e))return"svg";if(jp(e))return"mathml"},Bl=e=>e.nodeType===8;function Gp(e){const{mt:a,p:l,o:{patchProp:o,createText:s,nextSibling:d,parentNode:m,remove:f,insert:r,createComment:c}}=e,g=(v,x)=>{if(!x.hasChildNodes()){l(null,v,x),jl(),x._vnode=v;return}di=!1,p(x.firstChild,v,null,null,null),jl(),x._vnode=v,di&&console.error("Hydration completed but contains mismatches.")},p=(v,x,T,E,V,M=!1)=>{const F=Bl(v)&&v.data==="[",j=()=>A(v,x,T,E,V,F),{type:Q,ref:Y,shapeFlag:ge,patchFlag:Be}=x;let U=v.nodeType;x.el=v,Be===-2&&(M=!1,x.dynamicChildren=null);let K=null;switch(Q){case Gi:U!==3?x.children===""?(r(x.el=s(""),m(v),v),K=v):K=j():(v.data!==x.children&&(di=!0,v.data=x.children),K=d(v));break;case ht:_(v)?(K=d(v),D(x.el=v.content.firstChild,v,T)):U!==8||F?K=j():K=d(v);break;case Hi:if(F&&(v=d(v),U=v.nodeType),U===1||U===3){K=v;const me=!x.children.length;for(let ae=0;ae<x.staticCount;ae++)me&&(x.children+=K.nodeType===1?K.outerHTML:K.data),ae===x.staticCount-1&&(x.anchor=K),K=d(K);return F?d(K):K}else j();break;case Ae:F?K=b(v,x,T,E,V,M):K=j();break;default:if(ge&1)(U!==1||x.type.toLowerCase()!==v.tagName.toLowerCase())&&!_(v)?K=j():K=h(v,x,T,E,V,M);else if(ge&6){x.slotScopeIds=V;const me=m(v);if(F?K=$(v):Bl(v)&&v.data==="teleport start"?K=$(v,v.data,"teleport end"):K=d(v),a(x,me,null,T,E,$l(me),M),Mi(x)){let ae;F?(ae=t(Ae),ae.anchor=K?K.previousSibling:me.lastChild):ae=v.nodeType===3?n(""):t("div"),ae.el=v,x.component.subTree=ae}}else ge&64?U!==8?K=j():K=x.type.hydrate(v,x,T,E,V,M,e,w):ge&128&&(K=x.type.hydrate(v,x,T,E,$l(m(v)),V,M,e,p))}return Y!=null&&Ul(Y,null,E,x),K},h=(v,x,T,E,V,M)=>{M=M||!!x.dynamicChildren;const{type:F,props:j,patchFlag:Q,shapeFlag:Y,dirs:ge,transition:Be}=x,U=F==="input"||F==="option";if(U||Q!==-1){ge&&Ut(x,null,T,"created");let K=!1;if(_(v)){K=dc(E,Be)&&T&&T.vnode.props&&T.vnode.props.appear;const ae=v.content.firstChild;K&&Be.beforeEnter(ae),D(ae,v,T),x.el=v=ae}if(Y&16&&!(j&&(j.innerHTML||j.textContent))){let ae=w(v.firstChild,x,v,T,E,V,M);for(;ae;){di=!0;const De=ae;ae=ae.nextSibling,f(De)}}else Y&8&&v.textContent!==x.children&&(di=!0,v.textContent=x.children);if(j)if(U||!M||Q&48)for(const ae in j)(U&&(ae.endsWith("value")||ae==="indeterminate")||cl(ae)&&!ja(ae)||ae[0]===".")&&o(v,ae,null,j[ae],void 0,void 0,T);else j.onClick&&o(v,"onClick",null,j.onClick,void 0,void 0,T);let me;(me=j&&j.onVnodeBeforeMount)&&St(me,T,x),ge&&Ut(x,null,T,"beforeMount"),((me=j&&j.onVnodeMounted)||ge||K)&&Fu(()=>{me&&St(me,T,x),K&&Be.enter(v),ge&&Ut(x,null,T,"mounted")},E)}return v.nextSibling},w=(v,x,T,E,V,M,F)=>{F=F||!!x.dynamicChildren;const j=x.children,Q=j.length;for(let Y=0;Y<Q;Y++){const ge=F?j[Y]:j[Y]=Bt(j[Y]);if(v)v=p(v,ge,E,V,M,F);else{if(ge.type===Gi&&!ge.children)continue;di=!0,l(null,ge,T,null,E,V,$l(T),M)}}return v},b=(v,x,T,E,V,M)=>{const{slotScopeIds:F}=x;F&&(V=V?V.concat(F):F);const j=m(v),Q=w(d(v),x,j,T,E,V,M);return Q&&Bl(Q)&&Q.data==="]"?d(x.anchor=Q):(di=!0,r(x.anchor=c("]"),j,Q),Q)},A=(v,x,T,E,V,M)=>{if(di=!0,x.el=null,M){const Q=$(v);for(;;){const Y=d(v);if(Y&&Y!==Q)f(Y);else break}}const F=d(v),j=m(v);return f(v),l(null,x,j,F,T,E,$l(j),V),F},$=(v,x="[",T="]")=>{let E=0;for(;v;)if(v=d(v),v&&Bl(v)&&(v.data===x&&E++,v.data===T)){if(E===0)return d(v);E--}return v},D=(v,x,T)=>{const E=x.parentNode;E&&E.replaceChild(v,x);let V=T;for(;V;)V.vnode.el===x&&(V.vnode.el=V.subTree.el=v),V=V.parent},_=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[g,p]}const dt=Fu;function rc(e){return cc(e)}function uc(e){return cc(e,Gp)}function cc(e,a){const l=iu();l.__VUE__=!0;const{insert:o,remove:s,patchProp:d,createElement:m,createText:f,createComment:r,setText:c,setElementText:g,parentNode:p,nextSibling:h,setScopeId:w=yt,insertStaticContent:b}=e,A=(L,R,q,Z=null,ee=null,ne=null,ce=void 0,le=null,se=!!R.dynamicChildren)=>{if(L===R)return;L&&!qt(L,R)&&(Z=re(L),Ue(L,ee,ne,!0),L=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:ie,ref:pe,shapeFlag:ye}=R;switch(ie){case Gi:$(L,R,q,Z);break;case ht:D(L,R,q,Z);break;case Hi:L==null&&_(R,q,Z,ce);break;case Ae:Y(L,R,q,Z,ee,ne,ce,le,se);break;default:ye&1?T(L,R,q,Z,ee,ne,ce,le,se):ye&6?ge(L,R,q,Z,ee,ne,ce,le,se):(ye&64||ye&128)&&ie.process(L,R,q,Z,ee,ne,ce,le,se,Oe)}pe!=null&&ee&&Ul(pe,L&&L.ref,ne,R||L,!R)},$=(L,R,q,Z)=>{if(L==null)o(R.el=f(R.children),q,Z);else{const ee=R.el=L.el;R.children!==L.children&&c(ee,R.children)}},D=(L,R,q,Z)=>{L==null?o(R.el=r(R.children||""),q,Z):R.el=L.el},_=(L,R,q,Z)=>{[L.el,L.anchor]=b(L.children,R,q,Z,L.el,L.anchor)},v=({el:L,anchor:R},q,Z)=>{let ee;for(;L&&L!==R;)ee=h(L),o(L,q,Z),L=ee;o(R,q,Z)},x=({el:L,anchor:R})=>{let q;for(;L&&L!==R;)q=h(L),s(L),L=q;s(R)},T=(L,R,q,Z,ee,ne,ce,le,se)=>{R.type==="svg"?ce="svg":R.type==="math"&&(ce="mathml"),L==null?E(R,q,Z,ee,ne,ce,le,se):F(L,R,ee,ne,ce,le,se)},E=(L,R,q,Z,ee,ne,ce,le)=>{let se,ie;const{props:pe,shapeFlag:ye,transition:Se,dirs:ke}=L;if(se=L.el=m(L.type,ne,pe&&pe.is,pe),ye&8?g(se,L.children):ye&16&&M(L.children,se,null,Z,ee,Rn(L,ne),ce,le),ke&&Ut(L,null,Z,"created"),V(se,L,L.scopeId,ce,Z),pe){for(const je in pe)je!=="value"&&!ja(je)&&d(se,je,null,pe[je],ne,L.children,Z,ee,ue);"value"in pe&&d(se,"value",null,pe.value,ne),(ie=pe.onVnodeBeforeMount)&&St(ie,Z,L)}ke&&Ut(L,null,Z,"beforeMount");const Le=dc(ee,Se);Le&&Se.beforeEnter(se),o(se,R,q),((ie=pe&&pe.onVnodeMounted)||Le||ke)&&dt(()=>{ie&&St(ie,Z,L),Le&&Se.enter(se),ke&&Ut(L,null,Z,"mounted")},ee)},V=(L,R,q,Z,ee)=>{if(q&&w(L,q),Z)for(let ne=0;ne<Z.length;ne++)w(L,Z[ne]);if(ee){let ne=ee.subTree;if(R===ne){const ce=ee.vnode;V(L,ce,ce.scopeId,ce.slotScopeIds,ee.parent)}}},M=(L,R,q,Z,ee,ne,ce,le,se=0)=>{for(let ie=se;ie<L.length;ie++){const pe=L[ie]=le?_i(L[ie]):Bt(L[ie]);A(null,pe,R,q,Z,ee,ne,ce,le)}},F=(L,R,q,Z,ee,ne,ce)=>{const le=R.el=L.el;let{patchFlag:se,dynamicChildren:ie,dirs:pe}=R;se|=L.patchFlag&16;const ye=L.props||qe,Se=R.props||qe;let ke;if(q&&Bi(q,!1),(ke=Se.onVnodeBeforeUpdate)&&St(ke,q,R,L),pe&&Ut(R,L,q,"beforeUpdate"),q&&Bi(q,!0),ie?j(L.dynamicChildren,ie,le,q,Z,Rn(R,ee),ne):ce||ae(L,R,le,null,q,Z,Rn(R,ee),ne,!1),se>0){if(se&16)Q(le,R,ye,Se,q,Z,ee);else if(se&2&&ye.class!==Se.class&&d(le,"class",null,Se.class,ee),se&4&&d(le,"style",ye.style,Se.style,ee),se&8){const Le=R.dynamicProps;for(let je=0;je<Le.length;je++){const We=Le[je],st=ye[We],Ot=Se[We];(Ot!==st||We==="value")&&d(le,We,st,Ot,ee,L.children,q,Z,ue)}}se&1&&L.children!==R.children&&g(le,R.children)}else!ce&&ie==null&&Q(le,R,ye,Se,q,Z,ee);((ke=Se.onVnodeUpdated)||pe)&&dt(()=>{ke&&St(ke,q,R,L),pe&&Ut(R,L,q,"updated")},Z)},j=(L,R,q,Z,ee,ne,ce)=>{for(let le=0;le<R.length;le++){const se=L[le],ie=R[le],pe=se.el&&(se.type===Ae||!qt(se,ie)||se.shapeFlag&70)?p(se.el):q;A(se,ie,pe,null,Z,ee,ne,ce,!0)}},Q=(L,R,q,Z,ee,ne,ce)=>{if(q!==Z){if(q!==qe)for(const le in q)!ja(le)&&!(le in Z)&&d(L,le,q[le],null,ce,R.children,ee,ne,ue);for(const le in Z){if(ja(le))continue;const se=Z[le],ie=q[le];se!==ie&&le!=="value"&&d(L,le,ie,se,ce,R.children,ee,ne,ue)}"value"in Z&&d(L,"value",q.value,Z.value,ce)}},Y=(L,R,q,Z,ee,ne,ce,le,se)=>{const ie=R.el=L?L.el:f(""),pe=R.anchor=L?L.anchor:f("");let{patchFlag:ye,dynamicChildren:Se,slotScopeIds:ke}=R;ke&&(le=le?le.concat(ke):ke),L==null?(o(ie,q,Z),o(pe,q,Z),M(R.children||[],q,pe,ee,ne,ce,le,se)):ye>0&&ye&64&&Se&&L.dynamicChildren?(j(L.dynamicChildren,Se,q,ee,ne,ce,le),(R.key!=null||ee&&R===ee.subTree)&&cs(L,R,!0)):ae(L,R,q,pe,ee,ne,ce,le,se)},ge=(L,R,q,Z,ee,ne,ce,le,se)=>{R.slotScopeIds=le,L==null?R.shapeFlag&512?ee.ctx.activate(R,q,Z,ce,se):Be(R,q,Z,ee,ne,ce,se):U(L,R,se)},Be=(L,R,q,Z,ee,ne,ce)=>{const le=L.component=bc(L,Z,ee);if(fl(L)&&(le.ctx.renderer=Oe),Sc(le),le.asyncDep){if(ee&&ee.registerDep(le,K),!L.el){const se=le.subTree=t(ht);D(null,se,R,q)}}else K(le,L,R,q,ee,ne,ce)},U=(L,R,q)=>{const Z=R.component=L.component;if(ep(L,R,q))if(Z.asyncDep&&!Z.asyncResolved){me(Z,R,q);return}else Z.next=R,Ym(Z.update),Z.effect.dirty=!0,Z.update();else R.el=L.el,Z.vnode=R},K=(L,R,q,Z,ee,ne,ce)=>{const le=()=>{if(L.isMounted){let{next:pe,bu:ye,u:Se,parent:ke,vnode:Le}=L;{const ia=mc(L);if(ia){pe&&(pe.el=Le.el,me(L,pe,ce)),ia.asyncDep.then(()=>{L.isUnmounted||le()});return}}let je=pe,We;Bi(L,!1),pe?(pe.el=Le.el,me(L,pe,ce)):pe=Le,ye&&ua(ye),(We=pe.props&&pe.props.onVnodeBeforeUpdate)&&St(We,ke,pe,Le),Bi(L,!0);const st=Pl(L),Ot=L.subTree;L.subTree=st,A(Ot,st,p(Ot.el),re(Ot),L,ee,ne),pe.el=st.el,je===null&&Zo(L,st.el),Se&&dt(Se,ee),(We=pe.props&&pe.props.onVnodeUpdated)&&dt(()=>St(We,ke,pe,Le),ee)}else{let pe;const{el:ye,props:Se}=R,{bm:ke,m:Le,parent:je}=L,We=Mi(R);if(Bi(L,!1),ke&&ua(ke),!We&&(pe=Se&&Se.onVnodeBeforeMount)&&St(pe,je,R),Bi(L,!0),ye&&$e){const st=()=>{L.subTree=Pl(L),$e(ye,L.subTree,L,ee,null)};We?R.type.__asyncLoader().then(()=>!L.isUnmounted&&st()):st()}else{const st=L.subTree=Pl(L);A(null,st,q,Z,L,ee,ne),R.el=st.el}if(Le&&dt(Le,ee),!We&&(pe=Se&&Se.onVnodeMounted)){const st=R;dt(()=>St(pe,je,st),ee)}(R.shapeFlag&256||je&&Mi(je.vnode)&&je.vnode.shapeFlag&256)&&L.a&&dt(L.a,ee),L.isMounted=!0,R=q=Z=null}},se=L.effect=new ba(le,yt,()=>un(ie),L.scope),ie=L.update=()=>{se.dirty&&se.run()};ie.id=L.uid,Bi(L,!0),ie()},me=(L,R,q)=>{R.component=L;const Z=L.vnode.props;L.vnode=R,L.next=null,Mp(L,R.props,Z,q),Op(L,R.children,q),Ki(),js(L),Xi()},ae=(L,R,q,Z,ee,ne,ce,le,se=!1)=>{const ie=L&&L.children,pe=L?L.shapeFlag:0,ye=R.children,{patchFlag:Se,shapeFlag:ke}=R;if(Se>0){if(Se&128){Je(ie,ye,q,Z,ee,ne,ce,le,se);return}else if(Se&256){De(ie,ye,q,Z,ee,ne,ce,le,se);return}}ke&8?(pe&16&&ue(ie,ee,ne),ye!==ie&&g(q,ye)):pe&16?ke&16?Je(ie,ye,q,Z,ee,ne,ce,le,se):ue(ie,ee,ne,!0):(pe&8&&g(q,""),ke&16&&M(ye,q,Z,ee,ne,ce,le,se))},De=(L,R,q,Z,ee,ne,ce,le,se)=>{L=L||sa,R=R||sa;const ie=L.length,pe=R.length,ye=Math.min(ie,pe);let Se;for(Se=0;Se<ye;Se++){const ke=R[Se]=se?_i(R[Se]):Bt(R[Se]);A(L[Se],ke,q,null,ee,ne,ce,le,se)}ie>pe?ue(L,ee,ne,!0,!1,ye):M(R,q,Z,ee,ne,ce,le,se,ye)},Je=(L,R,q,Z,ee,ne,ce,le,se)=>{let ie=0;const pe=R.length;let ye=L.length-1,Se=pe-1;for(;ie<=ye&&ie<=Se;){const ke=L[ie],Le=R[ie]=se?_i(R[ie]):Bt(R[ie]);if(qt(ke,Le))A(ke,Le,q,null,ee,ne,ce,le,se);else break;ie++}for(;ie<=ye&&ie<=Se;){const ke=L[ye],Le=R[Se]=se?_i(R[Se]):Bt(R[Se]);if(qt(ke,Le))A(ke,Le,q,null,ee,ne,ce,le,se);else break;ye--,Se--}if(ie>ye){if(ie<=Se){const ke=Se+1,Le=ke<pe?R[ke].el:Z;for(;ie<=Se;)A(null,R[ie]=se?_i(R[ie]):Bt(R[ie]),q,Le,ee,ne,ce,le,se),ie++}}else if(ie>Se)for(;ie<=ye;)Ue(L[ie],ee,ne,!0),ie++;else{const ke=ie,Le=ie,je=new Map;for(ie=Le;ie<=Se;ie++){const xt=R[ie]=se?_i(R[ie]):Bt(R[ie]);xt.key!=null&&je.set(xt.key,ie)}let We,st=0;const Ot=Se-Le+1;let ia=!1,Is=0;const Ia=new Array(Ot);for(ie=0;ie<Ot;ie++)Ia[ie]=0;for(ie=ke;ie<=ye;ie++){const xt=L[ie];if(st>=Ot){Ue(xt,ee,ne,!0);continue}let Gt;if(xt.key!=null)Gt=je.get(xt.key);else for(We=Le;We<=Se;We++)if(Ia[We-Le]===0&&qt(xt,R[We])){Gt=We;break}Gt===void 0?Ue(xt,ee,ne,!0):(Ia[Gt-Le]=ie+1,Gt>=Is?Is=Gt:ia=!0,A(xt,R[Gt],q,null,ee,ne,ce,le,se),st++)}const Es=ia?Up(Ia):sa;for(We=Es.length-1,ie=Ot-1;ie>=0;ie--){const xt=Le+ie,Gt=R[xt],Rs=xt+1<pe?R[xt+1].el:Z;Ia[ie]===0?A(null,Gt,q,Rs,ee,ne,ce,le,se):ia&&(We<0||ie!==Es[We]?ot(Gt,q,Rs,2):We--)}}},ot=(L,R,q,Z,ee=null)=>{const{el:ne,type:ce,transition:le,children:se,shapeFlag:ie}=L;if(ie&6){ot(L.component.subTree,R,q,Z);return}if(ie&128){L.suspense.move(R,q,Z);return}if(ie&64){ce.move(L,R,q,Oe);return}if(ce===Ae){o(ne,R,q);for(let ye=0;ye<se.length;ye++)ot(se[ye],R,q,Z);o(L.anchor,R,q);return}if(ce===Hi){v(L,R,q);return}if(Z!==2&&ie&1&&le)if(Z===0)le.beforeEnter(ne),o(ne,R,q),dt(()=>le.enter(ne),ee);else{const{leave:ye,delayLeave:Se,afterLeave:ke}=le,Le=()=>o(ne,R,q),je=()=>{ye(ne,()=>{Le(),ke&&ke()})};Se?Se(ne,Le,je):je()}else o(ne,R,q)},Ue=(L,R,q,Z=!1,ee=!1)=>{const{type:ne,props:ce,ref:le,children:se,dynamicChildren:ie,shapeFlag:pe,patchFlag:ye,dirs:Se}=L;if(le!=null&&Ul(le,null,q,L,!0),pe&256){R.ctx.deactivate(L);return}const ke=pe&1&&Se,Le=!Mi(L);let je;if(Le&&(je=ce&&ce.onVnodeBeforeUnmount)&&St(je,R,L),pe&6)J(L.component,q,Z);else{if(pe&128){L.suspense.unmount(q,Z);return}ke&&Ut(L,null,R,"beforeUnmount"),pe&64?L.type.remove(L,R,q,ee,Oe,Z):ie&&(ne!==Ae||ye>0&&ye&64)?ue(ie,R,q,!1,!0):(ne===Ae&&ye&384||!ee&&pe&16)&&ue(se,R,q),Z&&Qt(L)}(Le&&(je=ce&&ce.onVnodeUnmounted)||ke)&&dt(()=>{je&&St(je,R,L),ke&&Ut(L,null,R,"unmounted")},q)},Qt=L=>{const{type:R,el:q,anchor:Z,transition:ee}=L;if(R===Ae){Pt(q,Z);return}if(R===Hi){x(L);return}const ne=()=>{s(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(L.shapeFlag&1&&ee&&!ee.persisted){const{leave:ce,delayLeave:le}=ee,se=()=>ce(q,ne);le?le(L.el,ne,se):se()}else ne()},Pt=(L,R)=>{let q;for(;L!==R;)q=h(L),s(L),L=q;s(R)},J=(L,R,q)=>{const{bum:Z,scope:ee,update:ne,subTree:ce,um:le}=L;Z&&ua(Z),ee.stop(),ne&&(ne.active=!1,Ue(ce,L,R,q)),le&&dt(le,R),dt(()=>{L.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ue=(L,R,q,Z=!1,ee=!1,ne=0)=>{for(let ce=ne;ce<L.length;ce++)Ue(L[ce],R,q,Z,ee)},re=L=>L.shapeFlag&6?re(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let _e=!1;const Ne=(L,R,q)=>{L==null?R._vnode&&Ue(R._vnode,null,null,!0):A(R._vnode||null,L,R,null,null,null,q),_e||(_e=!0,js(),jl(),_e=!1),R._vnode=L},Oe={p:A,um:Ue,m:ot,r:Qt,mt:Be,mc:M,pc:ae,pbc:j,n:re,o:e};let xe,$e;return a&&([xe,$e]=a(Oe)),{render:Ne,hydrate:xe,createApp:Pp(Ne,xe)}}function Rn({type:e,props:a},l){return l==="svg"&&e==="foreignObject"||l==="mathml"&&e==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:l}function Bi({effect:e,update:a},l){e.allowRecurse=a.allowRecurse=l}function dc(e,a){return(!e||e&&!e.pendingBranch)&&a&&!a.persisted}function cs(e,a,l=!1){const o=e.children,s=a.children;if(he(o)&&he(s))for(let d=0;d<o.length;d++){const m=o[d];let f=s[d];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=s[d]=_i(s[d]),f.el=m.el),l||cs(m,f)),f.type===Gi&&(f.el=m.el)}}function Up(e){const a=e.slice(),l=[0];let o,s,d,m,f;const r=e.length;for(o=0;o<r;o++){const c=e[o];if(c!==0){if(s=l[l.length-1],e[s]<c){a[o]=s,l.push(o);continue}for(d=0,m=l.length-1;d<m;)f=d+m>>1,e[l[f]]<c?d=f+1:m=f;c<e[l[d]]&&(d>0&&(a[o]=l[d-1]),l[d]=o)}}for(d=l.length,m=l[d-1];d-- >0;)l[d]=m,m=a[m];return l}function mc(e){const a=e.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:mc(a)}const Yp=e=>e.__isTeleport,Ya=e=>e&&(e.disabled||e.disabled===""),ir=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ar=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,mo=(e,a)=>{const l=e&&e.to;return Xe(l)?a?a(l):null:l},Jp={name:"Teleport",__isTeleport:!0,process(e,a,l,o,s,d,m,f,r,c){const{mc:g,pc:p,pbc:h,o:{insert:w,querySelector:b,createText:A,createComment:$}}=c,D=Ya(a.props);let{shapeFlag:_,children:v,dynamicChildren:x}=a;if(e==null){const T=a.el=A(""),E=a.anchor=A("");w(T,l,o),w(E,l,o);const V=a.target=mo(a.props,b),M=a.targetAnchor=A("");V&&(w(M,V),m==="svg"||ir(V)?m="svg":(m==="mathml"||ar(V))&&(m="mathml"));const F=(j,Q)=>{_&16&&g(v,j,Q,s,d,m,f,r)};D?F(l,E):V&&F(V,M)}else{a.el=e.el;const T=a.anchor=e.anchor,E=a.target=e.target,V=a.targetAnchor=e.targetAnchor,M=Ya(e.props),F=M?l:E,j=M?T:V;if(m==="svg"||ir(E)?m="svg":(m==="mathml"||ar(E))&&(m="mathml"),x?(h(e.dynamicChildren,x,F,s,d,m,f),cs(e,a,!0)):r||p(e,a,F,j,s,d,m,f,!1),D)M?a.props&&e.props&&a.props.to!==e.props.to&&(a.props.to=e.props.to):Tl(a,l,T,c,1);else if((a.props&&a.props.to)!==(e.props&&e.props.to)){const Q=a.target=mo(a.props,b);Q&&Tl(a,Q,null,c,0)}else M&&Tl(a,E,V,c,1)}pc(a)},remove(e,a,l,o,{um:s,o:{remove:d}},m){const{shapeFlag:f,children:r,anchor:c,targetAnchor:g,target:p,props:h}=e;if(p&&d(g),m&&d(c),f&16){const w=m||!Ya(h);for(let b=0;b<r.length;b++){const A=r[b];s(A,a,l,w,!!A.dynamicChildren)}}},move:Tl,hydrate:Wp};function Tl(e,a,l,{o:{insert:o},m:s},d=2){d===0&&o(e.targetAnchor,a,l);const{el:m,anchor:f,shapeFlag:r,children:c,props:g}=e,p=d===2;if(p&&o(m,a,l),(!p||Ya(g))&&r&16)for(let h=0;h<c.length;h++)s(c[h],a,l,2);p&&o(f,a,l)}function Wp(e,a,l,o,s,d,{o:{nextSibling:m,parentNode:f,querySelector:r}},c){const g=a.target=mo(a.props,r);if(g){const p=g._lpa||g.firstChild;if(a.shapeFlag&16)if(Ya(a.props))a.anchor=c(m(e),a,f(e),l,o,s,d),a.targetAnchor=p;else{a.anchor=m(e);let h=p;for(;h;)if(h=m(h),h&&h.nodeType===8&&h.data==="teleport anchor"){a.targetAnchor=h,g._lpa=a.targetAnchor&&m(a.targetAnchor);break}c(p,a,g,l,o,s,d)}pc(a)}return a.anchor&&m(a.anchor)}const _n=Jp;function pc(e){const a=e.ctx;if(a&&a.ut){let l=e.children[0].el;for(;l&&l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const Ae=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Ja=[];let wt=null;function k(e=!1){Ja.push(wt=e?null:[])}function fc(){Ja.pop(),wt=Ja[Ja.length-1]||null}let Ui=1;function po(e){Ui+=e}function gc(e){return e.dynamicChildren=Ui>0?wt||sa:null,fc(),Ui>0&&wt&&wt.push(e),e}function be(e,a,l,o,s,d){return gc(S(e,a,l,o,s,d,!0))}function B(e,a,l,o,s){return gc(t(e,a,l,o,s,!0))}function kt(e){return e?e.__v_isVNode===!0:!1}function qt(e,a){return e.type===a.type&&e.key===a.key}function Kp(e){}const bn="__vInternal",hc=({key:e})=>e??null,Fl=({ref:e,ref_key:a,ref_for:l})=>(typeof e=="number"&&(e=""+e),e!=null?Xe(e)||pt(e)||Ce(e)?{i:it,r:e,k:a,f:!!l}:e:null);function S(e,a=null,l=null,o=0,s=null,d=e===Ae?0:1,m=!1,f=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:a,key:a&&hc(a),ref:a&&Fl(a),scopeId:dn,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:it};return f?(ms(r,l),d&128&&e.normalize(r)):l&&(r.shapeFlag|=Xe(l)?8:16),Ui>0&&!m&&wt&&(r.patchFlag>0||d&6)&&r.patchFlag!==32&&wt.push(r),r}const t=Xp;function Xp(e,a=null,l=null,o=0,s=null,d=!1){if((!e||e===Ru)&&(e=ht),kt(e)){const f=Kt(e,a,!0);return l&&ms(f,l),Ui>0&&!d&&wt&&(f.shapeFlag&6?wt[wt.indexOf(e)]=f:wt.push(f)),f.patchFlag|=-2,f}if(of(e)&&(e=e.__vccOpts),a){a=_c(a);let{class:f,style:r}=a;f&&!Xe(f)&&(a.class=ml(f)),Ge(r)&&(Yo(r)&&!he(r)&&(r=Ke({},r)),a.style=xa(r))}const m=Xe(e)?1:Pu(e)?128:Yp(e)?64:Ge(e)?4:Ce(e)?2:0;return S(e,a,l,o,s,m,d,!0)}function _c(e){return e?Yo(e)||bn in e?Ke({},e):e:null}function Kt(e,a,l=!1){const{props:o,ref:s,patchFlag:d,children:m}=e,f=a?ea(o||{},a):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&hc(f),ref:a&&a.ref?l&&s?he(s)?s.concat(Fl(a)):[s,Fl(a)]:Fl(a):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:m,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:a&&e.type!==Ae?d===-1?16:d|16:d,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function n(e=" ",a=0){return t(Gi,null,e,a)}function Qp(e,a){const l=t(Hi,null,e);return l.staticCount=a,l}function ds(e="",a=!1){return a?(k(),B(ht,null,e)):t(ht,null,e)}function Bt(e){return e==null||typeof e=="boolean"?t(ht):he(e)?t(Ae,null,e.slice()):typeof e=="object"?_i(e):t(Gi,null,String(e))}function _i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function ms(e,a){let l=0;const{shapeFlag:o}=e;if(a==null)a=null;else if(he(a))l=16;else if(typeof a=="object")if(o&65){const s=a.default;s&&(s._c&&(s._d=!1),ms(e,s()),s._c&&(s._d=!0));return}else{l=32;const s=a._;!s&&!(bn in a)?a._ctx=it:s===3&&it&&(it.slots._===1?a._=1:(a._=2,e.patchFlag|=1024))}else Ce(a)?(a={default:a,_ctx:it},l=32):(a=String(a),o&64?(l=16,a=[n(a)]):l=8);e.children=a,e.shapeFlag|=l}function ea(...e){const a={};for(let l=0;l<e.length;l++){const o=e[l];for(const s in o)if(s==="class")a.class!==o.class&&(a.class=ml([a.class,o.class]));else if(s==="style")a.style=xa([a.style,o.style]);else if(cl(s)){const d=a[s],m=o[s];m&&d!==m&&!(he(d)&&d.includes(m))&&(a[s]=d?[].concat(d,m):m)}else s!==""&&(a[s]=o[s])}return a}function St(e,a,l,o=null){Et(e,a,7,[l,o])}const Zp=ic();let ef=0;function bc(e,a,l){const o=e.type,s=(a?a.appContext:e.appContext)||Zp,d={uid:ef++,vnode:e,type:o,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new No(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lc(o,s),emitsOptions:Lu(o,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:o.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=Wm.bind(null,d),e.ce&&e.ce(d),d}let nt=null;const Xt=()=>nt||it;let Yl,fo;{const e=iu(),a=(l,o)=>{let s;return(s=e[l])||(s=e[l]=[]),s.push(o),d=>{s.length>1?s.forEach(m=>m(d)):s[0](d)}};Yl=a("__VUE_INSTANCE_SETTERS__",l=>nt=l),fo=a("__VUE_SSR_SETTERS__",l=>gl=l)}const Yi=e=>{const a=nt;return Yl(e),e.scope.on(),()=>{e.scope.off(),Yl(a)}},go=()=>{nt&&nt.scope.off(),Yl(null)};function vc(e){return e.vnode.shapeFlag&4}let gl=!1;function Sc(e,a=!1){a&&fo(a);const{props:l,children:o}=e.vnode,s=vc(e);Vp(e,l,s,a),Np(e,o);const d=s?tf(e,a):void 0;return a&&fo(!1),d}function tf(e,a){const l=e.type;e.accessCache=Object.create(null),e.proxy=Jo(new Proxy(e.ctx,so));const{setup:o}=l;if(o){const s=e.setupContext=o.length>1?wc(e):null,d=Yi(e);Ki();const m=ai(o,e,0,[e.props,s]);if(Xi(),d(),Mo(m)){if(m.then(go,go),a)return m.then(f=>{ho(e,f,a)}).catch(f=>{Qi(f,e,0)});e.asyncDep=m}else ho(e,m,a)}else yc(e,a)}function ho(e,a,l){Ce(a)?e.type.__ssrInlineRender?e.ssrRender=a:e.render=a:Ge(a)&&(e.setupState=Xo(a)),yc(e,l)}let Jl,_o;function af(e){Jl=e,_o=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,_p))}}const lf=()=>!Jl;function yc(e,a,l){const o=e.type;if(!e.render){if(!a&&Jl&&!o.render){const s=o.template||rs(e).template;if(s){const{isCustomElement:d,compilerOptions:m}=e.appContext.config,{delimiters:f,compilerOptions:r}=o,c=Ke(Ke({isCustomElement:d,delimiters:f},m),r);o.render=Jl(s,c)}}e.render=o.render||yt,_o&&_o(e)}{const s=Yi(e);Ki();try{Dp(e)}finally{Xi(),s()}}}function nf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(a,l){return At(e,"get","$attrs"),a[l]}}))}function wc(e){const a=l=>{e.exposed=l||{}};return{get attrs(){return nf(e)},slots:e.slots,emit:e.emit,expose:a}}function vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xo(Jo(e.exposed)),{get(a,l){if(l in a)return a[l];if(l in Ua)return Ua[l](e)},has(a,l){return l in a||l in Ua}}))}function bo(e,a=!0){return Ce(e)?e.displayName||e.name:e.name||a&&e.__name}function of(e){return Ce(e)&&"__vccOpts"in e}const H=(e,a)=>Lm(e,a,gl);function sf(e,a,l=qe){const o=Xt(),s=vt(a),d=Dt(a),m=ku((r,c)=>{let g;return Nu(()=>{const p=e[a];jt(g,p)&&(g=p,c())}),{get(){return r(),l.get?l.get(g):g},set(p){const h=o.vnode.props;!(h&&(a in h||s in h||d in h)&&(`onUpdate:${a}`in h||`onUpdate:${s}`in h||`onUpdate:${d}`in h))&&jt(p,g)&&(g=p,c()),o.emit(`update:${a}`,l.set?l.set(p):p)}}}),f=a==="modelValue"?"modelModifiers":`${a}Modifiers`;return m[Symbol.iterator]=()=>{let r=0;return{next(){return r<2?{value:r++?e[f]||{}:m,done:!1}:{done:!0}}}},m}function X(e,a,l){const o=arguments.length;return o===2?Ge(a)&&!he(a)?kt(a)?t(e,null,[a]):t(e,a):t(e,null,a):(o>3?l=Array.prototype.slice.call(arguments,2):o===3&&kt(l)&&(l=[l]),t(e,a,l))}function rf(){}function uf(e,a,l,o){const s=l[o];if(s&&Cc(s,e))return s;const d=a();return d.memo=e.slice(),l[o]=d}function Cc(e,a){const l=e.memo;if(l.length!=a.length)return!1;for(let o=0;o<l.length;o++)if(jt(l[o],a[o]))return!1;return Ui>0&&wt&&wt.push(e),!0}const Ac="3.4.15",cf=yt,df=jm,mf=la,pf=Du,ff={createComponentInstance:bc,setupComponent:Sc,renderComponentRoot:Pl,setCurrentRenderingInstance:ll,isVNode:kt,normalizeVNode:Bt},gf=ff,hf=null,_f=null,bf=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const vf="http://www.w3.org/2000/svg",Sf="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,lr=bi&&bi.createElement("template"),yf={insert:(e,a,l)=>{a.insertBefore(e,l||null)},remove:e=>{const a=e.parentNode;a&&a.removeChild(e)},createElement:(e,a,l,o)=>{const s=a==="svg"?bi.createElementNS(vf,e):a==="mathml"?bi.createElementNS(Sf,e):bi.createElement(e,l?{is:l}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>bi.createTextNode(e),createComment:e=>bi.createComment(e),setText:(e,a)=>{e.nodeValue=a},setElementText:(e,a)=>{e.textContent=a},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bi.querySelector(e),setScopeId(e,a){e.setAttribute(a,"")},insertStaticContent(e,a,l,o,s,d){const m=l?l.previousSibling:a.lastChild;if(s&&(s===d||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),l),!(s===d||!(s=s.nextSibling)););else{lr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const f=lr.content;if(o==="svg"||o==="mathml"){const r=f.firstChild;for(;r.firstChild;)f.appendChild(r.firstChild);f.removeChild(r)}a.insertBefore(f,l)}return[m?m.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}},mi="transition",Ea="animation",Sa=Symbol("_vtc"),Sn=(e,{slots:a})=>X(qu,xc(e),a);Sn.displayName="Transition";const kc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},wf=Sn.props=Ke({},ns,kc),Ti=(e,a=[])=>{he(e)?e.forEach(l=>l(...a)):e&&e(...a)},nr=e=>e?he(e)?e.some(a=>a.length>1):e.length>1:!1;function xc(e){const a={};for(const Y in e)Y in kc||(a[Y]=e[Y]);if(e.css===!1)return a;const{name:l="v",type:o,duration:s,enterFromClass:d=`${l}-enter-from`,enterActiveClass:m=`${l}-enter-active`,enterToClass:f=`${l}-enter-to`,appearFromClass:r=d,appearActiveClass:c=m,appearToClass:g=f,leaveFromClass:p=`${l}-leave-from`,leaveActiveClass:h=`${l}-leave-active`,leaveToClass:w=`${l}-leave-to`}=e,b=Cf(s),A=b&&b[0],$=b&&b[1],{onBeforeEnter:D,onEnter:_,onEnterCancelled:v,onLeave:x,onLeaveCancelled:T,onBeforeAppear:E=D,onAppear:V=_,onAppearCancelled:M=v}=a,F=(Y,ge,Be)=>{fi(Y,ge?g:f),fi(Y,ge?c:m),Be&&Be()},j=(Y,ge)=>{Y._isLeaving=!1,fi(Y,p),fi(Y,w),fi(Y,h),ge&&ge()},Q=Y=>(ge,Be)=>{const U=Y?V:_,K=()=>F(ge,Y,Be);Ti(U,[ge,K]),or(()=>{fi(ge,Y?r:d),Zt(ge,Y?g:f),nr(U)||sr(ge,o,A,K)})};return Ke(a,{onBeforeEnter(Y){Ti(D,[Y]),Zt(Y,d),Zt(Y,m)},onBeforeAppear(Y){Ti(E,[Y]),Zt(Y,r),Zt(Y,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(Y,ge){Y._isLeaving=!0;const Be=()=>j(Y,ge);Zt(Y,p),Bc(),Zt(Y,h),or(()=>{Y._isLeaving&&(fi(Y,p),Zt(Y,w),nr(x)||sr(Y,o,$,Be))}),Ti(x,[Y,Be])},onEnterCancelled(Y){F(Y,!1),Ti(v,[Y])},onAppearCancelled(Y){F(Y,!0),Ti(M,[Y])},onLeaveCancelled(Y){j(Y),Ti(T,[Y])}})}function Cf(e){if(e==null)return null;if(Ge(e))return[zn(e.enter),zn(e.leave)];{const a=zn(e);return[a,a]}}function zn(e){return Nl(e)}function Zt(e,a){a.split(/\s+/).forEach(l=>l&&e.classList.add(l)),(e[Sa]||(e[Sa]=new Set)).add(a)}function fi(e,a){a.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const l=e[Sa];l&&(l.delete(a),l.size||(e[Sa]=void 0))}function or(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Af=0;function sr(e,a,l,o){const s=e._endId=++Af,d=()=>{s===e._endId&&o()};if(l)return setTimeout(d,l);const{type:m,timeout:f,propCount:r}=$c(e,a);if(!m)return o();const c=m+"end";let g=0;const p=()=>{e.removeEventListener(c,h),d()},h=w=>{w.target===e&&++g>=r&&p()};setTimeout(()=>{g<r&&p()},f+1),e.addEventListener(c,h)}function $c(e,a){const l=window.getComputedStyle(e),o=b=>(l[b]||"").split(", "),s=o(`${mi}Delay`),d=o(`${mi}Duration`),m=rr(s,d),f=o(`${Ea}Delay`),r=o(`${Ea}Duration`),c=rr(f,r);let g=null,p=0,h=0;a===mi?m>0&&(g=mi,p=m,h=d.length):a===Ea?c>0&&(g=Ea,p=c,h=r.length):(p=Math.max(m,c),g=p>0?m>c?mi:Ea:null,h=g?g===mi?d.length:r.length:0);const w=g===mi&&/\b(transform|all)(,|$)/.test(o(`${mi}Property`).toString());return{type:g,timeout:p,propCount:h,hasTransform:w}}function rr(e,a){for(;e.length<a.length;)e=e.concat(e);return Math.max(...a.map((l,o)=>ur(l)+ur(e[o])))}function ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bc(){return document.body.offsetHeight}function kf(e,a,l){const o=e[Sa];o&&(a=(a?[a,...o]:[...o]).join(" ")),a==null?e.removeAttribute("class"):l?e.setAttribute("class",a):e.className=a}const ps=Symbol("_vod"),Tc={beforeMount(e,{value:a},{transition:l}){e[ps]=e.style.display==="none"?"":e.style.display,l&&a?l.beforeEnter(e):Ra(e,a)},mounted(e,{value:a},{transition:l}){l&&a&&l.enter(e)},updated(e,{value:a,oldValue:l},{transition:o}){!a!=!l&&(o?a?(o.beforeEnter(e),Ra(e,!0),o.enter(e)):o.leave(e,()=>{Ra(e,!1)}):Ra(e,a))},beforeUnmount(e,{value:a}){Ra(e,a)}};function Ra(e,a){e.style.display=a?e[ps]:"none"}function xf(){Tc.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Dc=Symbol("");function $f(e){const a=Xt();if(!a)return;const l=a.ut=(s=e(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(d=>So(d,s))},o=()=>{const s=e(a.proxy);vo(a.subTree,s),l(s)};Hu(o),ki(()=>{const s=new MutationObserver(o);s.observe(a.subTree.el.parentNode,{childList:!0}),Zi(()=>s.disconnect())})}function vo(e,a){if(e.shapeFlag&128){const l=e.suspense;e=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{vo(l.activeBranch,a)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)So(e.el,a);else if(e.type===Ae)e.children.forEach(l=>vo(l,a));else if(e.type===Hi){let{el:l,anchor:o}=e;for(;l&&(So(l,a),l!==o);)l=l.nextSibling}}function So(e,a){if(e.nodeType===1){const l=e.style;let o="";for(const s in a)l.setProperty(`--${s}`,a[s]),o+=`--${s}: ${a[s]};`;l[Dc]=o}}function Bf(e,a,l){const o=e.style,s=o.display,d=Xe(l);if(l&&!d){if(a&&!Xe(a))for(const m in a)l[m]==null&&yo(o,m,"");for(const m in l)yo(o,m,l[m])}else if(d){if(a!==l){const m=o[Dc];m&&(l+=";"+m),o.cssText=l}}else a&&e.removeAttribute("style");ps in e&&(o.display=s)}const cr=/\s*!important$/;function yo(e,a,l){if(he(l))l.forEach(o=>yo(e,a,o));else if(l==null&&(l=""),a.startsWith("--"))e.setProperty(a,l);else{const o=Tf(e,a);cr.test(l)?e.setProperty(Dt(o),l.replace(cr,""),"important"):e[o]=l}}const dr=["Webkit","Moz","ms"],Pn={};function Tf(e,a){const l=Pn[a];if(l)return l;let o=vt(a);if(o!=="filter"&&o in e)return Pn[a]=o;o=dl(o);for(let s=0;s<dr.length;s++){const d=dr[s]+o;if(d in e)return Pn[a]=d}return a}const mr="http://www.w3.org/1999/xlink";function Df(e,a,l,o,s){if(o&&a.startsWith("xlink:"))l==null?e.removeAttributeNS(mr,a.slice(6,a.length)):e.setAttributeNS(mr,a,l);else{const d=nm(a);l==null||d&&!au(l)?e.removeAttribute(a):e.setAttribute(a,d?"":l)}}function Lf(e,a,l,o,s,d,m){if(a==="innerHTML"||a==="textContent"){o&&m(o,s,d),e[a]=l??"";return}const f=e.tagName;if(a==="value"&&f!=="PROGRESS"&&!f.includes("-")){e._value=l;const c=f==="OPTION"?e.getAttribute("value"):e.value,g=l??"";c!==g&&(e.value=g),l==null&&e.removeAttribute(a);return}let r=!1;if(l===""||l==null){const c=typeof e[a];c==="boolean"?l=au(l):l==null&&c==="string"?(l="",r=!0):c==="number"&&(l=0,r=!0)}try{e[a]=l}catch{}r&&e.removeAttribute(a)}function ti(e,a,l,o){e.addEventListener(a,l,o)}function If(e,a,l,o){e.removeEventListener(a,l,o)}const pr=Symbol("_vei");function Ef(e,a,l,o,s=null){const d=e[pr]||(e[pr]={}),m=d[a];if(o&&m)m.value=o;else{const[f,r]=Rf(a);if(o){const c=d[a]=Ff(o,s);ti(e,f,c,r)}else m&&(If(e,f,m,r),d[a]=void 0)}}const fr=/(?:Once|Passive|Capture)$/;function Rf(e){let a;if(fr.test(e)){a={};let o;for(;o=e.match(fr);)e=e.slice(0,e.length-o[0].length),a[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),a]}let Fn=0;const zf=Promise.resolve(),Pf=()=>Fn||(zf.then(()=>Fn=0),Fn=Date.now());function Ff(e,a){const l=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=l.attached)return;Et(Vf(o,l.value),a,5,[o])};return l.value=e,l.attached=Pf(),l}function Vf(e,a){if(he(a)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},a.map(o=>s=>!s._stopped&&o&&o(s))}else return a}const gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mf=(e,a,l,o,s,d,m,f,r)=>{const c=s==="svg";a==="class"?kf(e,o,c):a==="style"?Bf(e,l,o):cl(a)?Fo(a)||Ef(e,a,l,o,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Hf(e,a,o,c))?Lf(e,a,o,d,m,f,r):(a==="true-value"?e._trueValue=o:a==="false-value"&&(e._falseValue=o),Df(e,a,o,c))};function Hf(e,a,l,o){if(o)return!!(a==="innerHTML"||a==="textContent"||a in e&&gr(a)&&Ce(l));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&e.tagName==="INPUT"||a==="type"&&e.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gr(a)&&Xe(l)?!1:a in e}/*! #__NO_SIDE_EFFECTS__ */function Lc(e,a){const l=P(e);class o extends yn{constructor(d){super(l,d,a)}}return o.def=l,o}/*! #__NO_SIDE_EFFECTS__ */const Nf=e=>Lc(e,qc),Of=typeof HTMLElement<"u"?HTMLElement:class{};class yn extends Of{constructor(a,l={},o){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&o?o(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),$a(()=>{this._connected||(Xl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const s of o)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(o,s=!1)=>{const{props:d,styles:m}=o;let f;if(d&&!he(d))for(const r in d){const c=d[r];(c===Number||c&&c.type===Number)&&(r in this._props&&(this._props[r]=Nl(this._props[r])),(f||(f=Object.create(null)))[vt(r)]=!0)}this._numberProps=f,s&&this._resolveProps(o),this._applyStyles(m),this._update()},l=this._def.__asyncLoader;l?l().then(o=>a(o,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,o=he(l)?l:Object.keys(l||{});for(const s of Object.keys(this))s[0]!=="_"&&o.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of o.map(vt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(d){this._setProp(s,d)}})}_setAttr(a){let l=this.getAttribute(a);const o=vt(a);this._numberProps&&this._numberProps[o]&&(l=Nl(l)),this._setProp(o,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,o=!0,s=!0){l!==this._props[a]&&(this._props[a]=l,s&&this._instance&&this._update(),o&&(l===!0?this.setAttribute(Dt(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(Dt(a),l+""):l||this.removeAttribute(Dt(a))))}_update(){Xl(this._createVNode(),this.shadowRoot)}_createVNode(){const a=t(this._def,Ke({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const o=(d,m)=>{this.dispatchEvent(new CustomEvent(d,{detail:m}))};l.emit=(d,...m)=>{o(d,m),Dt(d)!==d&&o(Dt(d),m)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof yn){l.parent=s._instance,l.provides=s._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const o=document.createElement("style");o.textContent=l,this.shadowRoot.appendChild(o)})}}function qf(e="$style"){{const a=Xt();if(!a)return qe;const l=a.type.__cssModules;if(!l)return qe;const o=l[e];return o||qe}}const Ic=new WeakMap,Ec=new WeakMap,Wl=Symbol("_moveCb"),hr=Symbol("_enterCb"),Rc={name:"TransitionGroup",props:Ke({},wf,{tag:String,moveClass:String}),setup(e,{slots:a}){const l=Xt(),o=ls();let s,d;return gn(()=>{if(!s.length)return;const m=e.moveClass||`${e.name||"v"}-move`;if(!Jf(s[0].el,l.vnode.el,m))return;s.forEach(Gf),s.forEach(Uf);const f=s.filter(Yf);Bc(),f.forEach(r=>{const c=r.el,g=c.style;Zt(c,m),g.transform=g.webkitTransform=g.transitionDuration="";const p=c[Wl]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",p),c[Wl]=null,fi(c,m))};c.addEventListener("transitionend",p)})}),()=>{const m=Ee(e),f=xc(m);let r=m.tag||Ae;s=d,d=a.default?pn(a.default()):[];for(let c=0;c<d.length;c++){const g=d[c];g.key!=null&&qi(g,va(g,f,o,l))}if(s)for(let c=0;c<s.length;c++){const g=s[c];qi(g,va(g,f,o,l)),Ic.set(g,g.el.getBoundingClientRect())}return t(r,null,d)}}},jf=e=>delete e.mode;Rc.props;const zc=Rc;function Gf(e){const a=e.el;a[Wl]&&a[Wl](),a[hr]&&a[hr]()}function Uf(e){Ec.set(e,e.el.getBoundingClientRect())}function Yf(e){const a=Ic.get(e),l=Ec.get(e),o=a.left-l.left,s=a.top-l.top;if(o||s){const d=e.el.style;return d.transform=d.webkitTransform=`translate(${o}px,${s}px)`,d.transitionDuration="0s",e}}function Jf(e,a,l){const o=e.cloneNode(),s=e[Sa];s&&s.forEach(f=>{f.split(/\s+/).forEach(r=>r&&o.classList.remove(r))}),l.split(/\s+/).forEach(f=>f&&o.classList.add(f)),o.style.display="none";const d=a.nodeType===1?a:a.parentNode;d.appendChild(o);const{hasTransform:m}=$c(o);return d.removeChild(o),m}const Ai=e=>{const a=e.props["onUpdate:modelValue"]||!1;return he(a)?l=>ua(a,l):a};function Wf(e){e.target.composing=!0}function _r(e){const a=e.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign"),Kl={created(e,{modifiers:{lazy:a,trim:l,number:o}},s){e[Ht]=Ai(s);const d=o||s.props&&s.props.type==="number";ti(e,a?"change":"input",m=>{if(m.target.composing)return;let f=e.value;l&&(f=f.trim()),d&&(f=Za(f)),e[Ht](f)}),l&&ti(e,"change",()=>{e.value=e.value.trim()}),a||(ti(e,"compositionstart",Wf),ti(e,"compositionend",_r),ti(e,"change",_r))},mounted(e,{value:a}){e.value=a??""},beforeUpdate(e,{value:a,modifiers:{lazy:l,trim:o,number:s}},d){if(e[Ht]=Ai(d),e.composing)return;const m=s||e.type==="number"?Za(e.value):e.value,f=a??"";m!==f&&(document.activeElement===e&&e.type!=="range"&&(l||o&&e.value.trim()===f)||(e.value=f))}},fs={deep:!0,created(e,a,l){e[Ht]=Ai(l),ti(e,"change",()=>{const o=e._modelValue,s=ya(e),d=e.checked,m=e[Ht];if(he(o)){const f=nn(o,s),r=f!==-1;if(d&&!r)m(o.concat(s));else if(!d&&r){const c=[...o];c.splice(f,1),m(c)}}else if(Wi(o)){const f=new Set(o);d?f.add(s):f.delete(s),m(f)}else m(Fc(e,d))})},mounted:br,beforeUpdate(e,a,l){e[Ht]=Ai(l),br(e,a,l)}};function br(e,{value:a,oldValue:l},o){e._modelValue=a,he(a)?e.checked=nn(a,o.props.value)>-1:Wi(a)?e.checked=a.has(o.props.value):a!==l&&(e.checked=li(a,Fc(e,!0)))}const gs={created(e,{value:a},l){e.checked=li(a,l.props.value),e[Ht]=Ai(l),ti(e,"change",()=>{e[Ht](ya(e))})},beforeUpdate(e,{value:a,oldValue:l},o){e[Ht]=Ai(o),a!==l&&(e.checked=li(a,o.props.value))}},Pc={deep:!0,created(e,{value:a,modifiers:{number:l}},o){const s=Wi(a);ti(e,"change",()=>{const d=Array.prototype.filter.call(e.options,m=>m.selected).map(m=>l?Za(ya(m)):ya(m));e[Ht](e.multiple?s?new Set(d):d:d[0]),e._assigning=!0,$a(()=>{e._assigning=!1})}),e[Ht]=Ai(o)},mounted(e,{value:a,oldValue:l,modifiers:{number:o}}){vr(e,a,l,o)},beforeUpdate(e,a,l){e[Ht]=Ai(l)},updated(e,{value:a,oldValue:l,modifiers:{number:o}}){e._assigning||vr(e,a,l,o)}};function vr(e,a,l,o){const s=e.multiple,d=he(a);if(!(s&&!d&&!Wi(a))&&!(d&&li(a,l))){for(let m=0,f=e.options.length;m<f;m++){const r=e.options[m],c=ya(r);if(s)if(d){const g=typeof c;g==="string"||g==="number"?r.selected=a.includes(o?Za(c):c):r.selected=nn(a,c)>-1}else r.selected=a.has(c);else if(li(ya(r),a)){e.selectedIndex!==m&&(e.selectedIndex=m);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ya(e){return"_value"in e?e._value:e.value}function Fc(e,a){const l=a?"_trueValue":"_falseValue";return l in e?e[l]:a}const Vc={created(e,a,l){Dl(e,a,l,null,"created")},mounted(e,a,l){Dl(e,a,l,null,"mounted")},beforeUpdate(e,a,l,o){Dl(e,a,l,o,"beforeUpdate")},updated(e,a,l,o){Dl(e,a,l,o,"updated")}};function Mc(e,a){switch(e){case"SELECT":return Pc;case"TEXTAREA":return Kl;default:switch(a){case"checkbox":return fs;case"radio":return gs;default:return Kl}}}function Dl(e,a,l,o,s){const m=Mc(e.tagName,l.props&&l.props.type)[s];m&&m(e,a,l,o)}function Kf(){Kl.getSSRProps=({value:e})=>({value:e}),gs.getSSRProps=({value:e},a)=>{if(a.props&&li(a.props.value,e))return{checked:!0}},fs.getSSRProps=({value:e},a)=>{if(he(e)){if(a.props&&nn(e,a.props.value)>-1)return{checked:!0}}else if(Wi(e)){if(a.props&&e.has(a.props.value))return{checked:!0}}else if(e)return{checked:!0}},Vc.getSSRProps=(e,a)=>{if(typeof a.type!="string")return;const l=Mc(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(e,a)}}const Xf=["ctrl","shift","alt","meta"],Qf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,a)=>Xf.some(l=>e[`${l}Key`]&&!a.includes(l))},Rt=(e,a)=>{const l=e._withMods||(e._withMods={}),o=a.join(".");return l[o]||(l[o]=(s,...d)=>{for(let m=0;m<a.length;m++){const f=Qf[a[m]];if(f&&f(s,a))return}return e(s,...d)})},Zf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},eg=(e,a)=>{const l=e._withKeys||(e._withKeys={}),o=a.join(".");return l[o]||(l[o]=s=>{if(!("key"in s))return;const d=Dt(s.key);if(a.some(m=>m===d||Zf[m]===d))return e(s)})},Hc=Ke({patchProp:Mf},yf);let Wa,Sr=!1;function Nc(){return Wa||(Wa=rc(Hc))}function Oc(){return Wa=Sr?Wa:uc(Hc),Sr=!0,Wa}const Xl=(...e)=>{Nc().render(...e)},qc=(...e)=>{Oc().hydrate(...e)},jc=(...e)=>{const a=Nc().createApp(...e),{mount:l}=a;return a.mount=o=>{const s=Uc(o);if(!s)return;const d=a._component;!Ce(d)&&!d.render&&!d.template&&(d.template=s.innerHTML),s.innerHTML="";const m=l(s,!1,Gc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),m},a},tg=(...e)=>{const a=Oc().createApp(...e),{mount:l}=a;return a.mount=o=>{const s=Uc(o);if(s)return l(s,!0,Gc(s))},a};function Gc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Uc(e){return Xe(e)?document.querySelector(e):e}let yr=!1;const ig=()=>{yr||(yr=!0,Kf(),xf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ag=()=>{},lg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:qu,BaseTransitionPropsValidators:ns,Comment:ht,DeprecationTypes:bf,EffectScope:No,ErrorCodes:qm,ErrorTypeStrings:df,Fragment:Ae,KeepAlive:pp,ReactiveEffect:ba,Static:Hi,Suspense:ap,Teleport:_n,Text:Gi,TrackOpTypes:Hm,Transition:Sn,TransitionGroup:zc,TriggerOpTypes:Nm,VueElement:yn,assertNumber:Om,callWithAsyncErrorHandling:Et,callWithErrorHandling:ai,camelize:vt,capitalize:dl,cloneVNode:Kt,compatUtils:_f,compile:ag,computed:H,createApp:jc,createBlock:B,createCommentVNode:ds,createElementBlock:be,createElementVNode:S,createHydrationRenderer:uc,createPropsRestProxy:Bp,createRenderer:rc,createSSRApp:tg,createSlots:gp,createStaticVNode:Qp,createTextVNode:n,createVNode:t,customRef:ku,defineAsyncComponent:dp,defineComponent:P,defineCustomElement:Lc,defineEmits:vp,defineExpose:Sp,defineModel:Cp,defineOptions:yp,defineProps:bp,defineSSRCustomElement:Nf,defineSlots:wp,devtools:mf,effect:um,effectScope:sm,getCurrentInstance:Xt,getCurrentScope:Oo,getTransitionRawChildren:pn,guardReactiveProps:_c,h:X,handleError:Qi,hasInjectionContext:Fp,hydrate:qc,initCustomFormatter:rf,initDirectivesForSSR:ig,inject:He,isMemoSame:Cc,isProxy:Yo,isReactive:Vi,isReadonly:Oi,isRef:pt,isRuntimeOnly:lf,isShallow:el,isVNode:kt,markRaw:Jo,mergeDefaults:xp,mergeModels:$p,mergeProps:ea,nextTick:$a,normalizeClass:ml,normalizeProps:am,normalizeStyle:xa,onActivated:os,onBeforeMount:Uu,onBeforeUnmount:hn,onBeforeUpdate:Yu,onDeactivated:ss,onErrorCaptured:Xu,onMounted:ki,onRenderTracked:Ku,onRenderTriggered:Wu,onScopeDispose:ou,onServerPrefetch:Ju,onUnmounted:Zi,onUpdated:gn,openBlock:k,popScopeId:Eu,provide:mt,proxyRefs:Xo,pushScopeId:Iu,queuePostFlushCb:ql,reactive:si,readonly:Uo,ref:G,registerRuntimeCompiler:af,render:Xl,renderList:Qe,renderSlot:ji,resolveComponent:y,resolveDirective:mn,resolveDynamicComponent:zu,resolveFilter:hf,resolveTransitionHooks:va,setBlockTracking:po,setDevtoolsHook:pf,setTransitionHooks:qi,shallowReactive:yu,shallowReadonly:Dm,shallowRef:Cu,ssrContextKey:Vu,ssrUtils:gf,stop:cm,toDisplayString:Te,toHandlerKey:Ga,toHandlers:hp,toRaw:Ee,toRef:ao,toRefs:Fm,toValue:Rm,transformVNodeArgs:Kp,triggerRef:Em,unref:u,useAttrs:Zu,useCssModule:qf,useCssVars:$f,useModel:sf,useSSRContext:Mu,useSlots:kp,useTransitionState:ls,vModelCheckbox:fs,vModelDynamic:Vc,vModelRadio:gs,vModelSelect:Pc,vModelText:Kl,vShow:Tc,version:Ac,warn:cf,watch:gt,watchEffect:as,watchPostEffect:Hu,watchSyncEffect:Nu,withAsyncContext:Tp,withCtx:i,withDefaults:Ap,withDirectives:yi,withKeys:eg,withMemo:uf,withModifiers:Rt,withScopeId:Km},Symbol.toStringTag,{value:"Module"})),ng=P({name:"App"}),Re=(e,a)=>{const l=e.__vccOpts||e;for(const[o,s]of a)l[o]=s;return l};function og(e,a,l,o,s,d){const m=y("router-view");return k(),B(m)}const sg=Re(ng,[["render",og]]),rg="modulepreload",ug=function(e){return"/vue-fomantic-ui/"+e},wr={},Ll=function(a,l,o){let s=Promise.resolve();if(l&&l.length>0){const d=document.getElementsByTagName("link");s=Promise.all(l.map(m=>{if(m=ug(m),m in wr)return;wr[m]=!0;const f=m.endsWith(".css"),r=f?'[rel="stylesheet"]':"";if(!!o)for(let p=d.length-1;p>=0;p--){const h=d[p];if(h.href===m&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${r}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":rg,f||(g.as="script",g.crossOrigin=""),g.href=m,document.head.appendChild(g),f)return new Promise((p,h)=>{g.addEventListener("load",p),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${m}`)))})}))}return s.then(()=>a()).catch(d=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d})};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Yc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ba=e=>Yc?Symbol(e):"_vr_"+e,Jc=Ba("rvlm"),Cr=Ba("rvd"),wn=Ba("r"),hs=Ba("rl"),wo=Ba("rvl"),na=typeof window<"u";function cg(e){return e.__esModule||Yc&&e[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Vn(e,a){const l={};for(const o in a){const s=a[o];l[o]=Array.isArray(s)?s.map(e):e(s)}return l}const Ka=()=>{},dg=/\/$/,mg=e=>e.replace(dg,"");function Mn(e,a,l="/"){let o,s={},d="",m="";const f=a.indexOf("?"),r=a.indexOf("#",f>-1?f:0);return f>-1&&(o=a.slice(0,f),d=a.slice(f+1,r>-1?r:a.length),s=e(d)),r>-1&&(o=o||a.slice(0,r),m=a.slice(r,a.length)),o=hg(o??a,l),{fullPath:o+(d&&"?")+d+m,path:o,query:s,hash:m}}function pg(e,a){const l=a.query?e(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function Ar(e,a){return!a||!e.toLowerCase().startsWith(a.toLowerCase())?e:e.slice(a.length)||"/"}function fg(e,a,l){const o=a.matched.length-1,s=l.matched.length-1;return o>-1&&o===s&&wa(a.matched[o],l.matched[s])&&Wc(a.params,l.params)&&e(a.query)===e(l.query)&&a.hash===l.hash}function wa(e,a){return(e.aliasOf||e)===(a.aliasOf||a)}function Wc(e,a){if(Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(!gg(e[l],a[l]))return!1;return!0}function gg(e,a){return Array.isArray(e)?kr(e,a):Array.isArray(a)?kr(a,e):e===a}function kr(e,a){return Array.isArray(a)?e.length===a.length&&e.every((l,o)=>l===a[o]):e.length===1&&e[0]===a}function hg(e,a){if(e.startsWith("/"))return e;if(!e)return a;const l=a.split("/"),o=e.split("/");let s=l.length-1,d,m;for(d=0;d<o.length;d++)if(m=o[d],!(s===1||m==="."))if(m==="..")s--;else break;return l.slice(0,s).join("/")+"/"+o.slice(d-(d===o.length?1:0)).join("/")}var rl;(function(e){e.pop="pop",e.push="push"})(rl||(rl={}));var Xa;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xa||(Xa={}));function _g(e){if(!e)if(na){const a=document.querySelector("base");e=a&&a.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mg(e)}const bg=/^[^#]+#/;function vg(e,a){return e.replace(bg,"#")+a}function Sg(e,a){const l=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:a.behavior,left:o.left-l.left-(a.left||0),top:o.top-l.top-(a.top||0)}}const Cn=()=>({left:window.pageXOffset,top:window.pageYOffset});function yg(e){let a;if("el"in e){const l=e.el,o=typeof l=="string"&&l.startsWith("#"),s=typeof l=="string"?o?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!s)return;a=Sg(s,e)}else a=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function xr(e,a){return(history.state?history.state.position-a:-1)+e}const Co=new Map;function wg(e,a){Co.set(e,a)}function Cg(e){const a=Co.get(e);return Co.delete(e),a}let Ag=()=>location.protocol+"//"+location.host;function Kc(e,a){const{pathname:l,search:o,hash:s}=a,d=e.indexOf("#");if(d>-1){let f=s.includes(e.slice(d))?e.slice(d).length:1,r=s.slice(f);return r[0]!=="/"&&(r="/"+r),Ar(r,"")}return Ar(l,e)+o+s}function kg(e,a,l,o){let s=[],d=[],m=null;const f=({state:h})=>{const w=Kc(e,location),b=l.value,A=a.value;let $=0;if(h){if(l.value=w,a.value=h,m&&m===b){m=null;return}$=A?h.position-A.position:0}else o(w);s.forEach(D=>{D(l.value,b,{delta:$,type:rl.pop,direction:$?$>0?Xa.forward:Xa.back:Xa.unknown})})};function r(){m=l.value}function c(h){s.push(h);const w=()=>{const b=s.indexOf(h);b>-1&&s.splice(b,1)};return d.push(w),w}function g(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:Cn()}),"")}function p(){for(const h of d)h();d=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",g),{pauseListeners:r,listen:c,destroy:p}}function $r(e,a,l,o=!1,s=!1){return{back:e,current:a,forward:l,replaced:o,position:window.history.length,scroll:s?Cn():null}}function xg(e){const{history:a,location:l}=window,o={value:Kc(e,l)},s={value:a.state};s.value||d(o.value,{back:null,current:o.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function d(r,c,g){const p=e.indexOf("#"),h=p>-1?(l.host&&document.querySelector("base")?e:e.slice(p))+r:Ag()+e+r;try{a[g?"replaceState":"pushState"](c,"",h),s.value=c}catch(w){console.error(w),l[g?"replace":"assign"](h)}}function m(r,c){const g=Ye({},a.state,$r(s.value.back,r,s.value.forward,!0),c,{position:s.value.position});d(r,g,!0),o.value=r}function f(r,c){const g=Ye({},s.value,a.state,{forward:r,scroll:Cn()});d(g.current,g,!0);const p=Ye({},$r(o.value,r,null),{position:g.position+1},c);d(r,p,!1),o.value=r}return{location:o,state:s,push:f,replace:m}}function $g(e){e=_g(e);const a=xg(e),l=kg(e,a.state,a.location,a.replace);function o(d,m=!0){m||l.pauseListeners(),history.go(d)}const s=Ye({location:"",base:e,go:o,createHref:vg.bind(null,e)},a,l);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Bg(e){return typeof e=="string"||e&&typeof e=="object"}function Xc(e){return typeof e=="string"||typeof e=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qc=Ba("nf");var Br;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Br||(Br={}));function Ca(e,a){return Ye(new Error,{type:e,[Qc]:!0},a)}function Di(e,a){return e instanceof Error&&Qc in e&&(a==null||!!(e.type&a))}const Tr="[^/]+?",Tg={sensitive:!1,strict:!1,start:!0,end:!0},Dg=/[.+*?^${}()[\]/\\]/g;function Lg(e,a){const l=Ye({},Tg,a),o=[];let s=l.start?"^":"";const d=[];for(const c of e){const g=c.length?[]:[90];l.strict&&!c.length&&(s+="/");for(let p=0;p<c.length;p++){const h=c[p];let w=40+(l.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(Dg,"\\$&"),w+=40;else if(h.type===1){const{value:b,repeatable:A,optional:$,regexp:D}=h;d.push({name:b,repeatable:A,optional:$});const _=D||Tr;if(_!==Tr){w+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+x.message)}}let v=A?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;p||(v=$&&c.length<2?`(?:/${v})`:"/"+v),$&&(v+="?"),s+=v,w+=20,$&&(w+=-8),A&&(w+=-20),_===".*"&&(w+=-50)}g.push(w)}o.push(g)}if(l.strict&&l.end){const c=o.length-1;o[c][o[c].length-1]+=.7000000000000001}l.strict||(s+="/?"),l.end?s+="$":l.strict&&(s+="(?:/|$)");const m=new RegExp(s,l.sensitive?"":"i");function f(c){const g=c.match(m),p={};if(!g)return null;for(let h=1;h<g.length;h++){const w=g[h]||"",b=d[h-1];p[b.name]=w&&b.repeatable?w.split("/"):w}return p}function r(c){let g="",p=!1;for(const h of e){(!p||!g.endsWith("/"))&&(g+="/"),p=!1;for(const w of h)if(w.type===0)g+=w.value;else if(w.type===1){const{value:b,repeatable:A,optional:$}=w,D=b in c?c[b]:"";if(Array.isArray(D)&&!A)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(D)?D.join("/"):D;if(!_)if($)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);g+=_}}return g}return{re:m,score:o,keys:d,parse:f,stringify:r}}function Ig(e,a){let l=0;for(;l<e.length&&l<a.length;){const o=a[l]-e[l];if(o)return o;l++}return e.length<a.length?e.length===1&&e[0]===80?-1:1:e.length>a.length?a.length===1&&a[0]===80?1:-1:0}function Eg(e,a){let l=0;const o=e.score,s=a.score;for(;l<o.length&&l<s.length;){const d=Ig(o[l],s[l]);if(d)return d;l++}return s.length-o.length}const Rg={type:0,value:""},zg=/[a-zA-Z0-9_]/;function Pg(e){if(!e)return[[]];if(e==="/")return[[Rg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function a(w){throw new Error(`ERR (${l})/"${c}": ${w}`)}let l=0,o=l;const s=[];let d;function m(){d&&s.push(d),d=[]}let f=0,r,c="",g="";function p(){c&&(l===0?d.push({type:0,value:c}):l===1||l===2||l===3?(d.length>1&&(r==="*"||r==="+")&&a(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:c,regexp:g,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):a("Invalid state to consume buffer"),c="")}function h(){c+=r}for(;f<e.length;){if(r=e[f++],r==="\\"&&l!==2){o=l,l=4;continue}switch(l){case 0:r==="/"?(c&&p(),m()):r===":"?(p(),l=1):h();break;case 4:h(),l=o;break;case 1:r==="("?l=2:zg.test(r)?h():(p(),l=0,r!=="*"&&r!=="?"&&r!=="+"&&f--);break;case 2:r===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+r:l=3:g+=r;break;case 3:p(),l=0,r!=="*"&&r!=="?"&&r!=="+"&&f--,g="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${c}"`),p(),m(),s}function Fg(e,a,l){const o=Lg(Pg(e.path),l),s=Ye(o,{record:e,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function Vg(e,a){const l=[],o=new Map;a=Lr({strict:!1,end:!0,sensitive:!1},a);function s(g){return o.get(g)}function d(g,p,h){const w=!h,b=Hg(g);b.aliasOf=h&&h.record;const A=Lr(a,g),$=[b];if("alias"in g){const v=typeof g.alias=="string"?[g.alias]:g.alias;for(const x of v)$.push(Ye({},b,{components:h?h.record.components:b.components,path:x,aliasOf:h?h.record:b}))}let D,_;for(const v of $){const{path:x}=v;if(p&&x[0]!=="/"){const T=p.record.path,E=T[T.length-1]==="/"?"":"/";v.path=p.record.path+(x&&E+x)}if(D=Fg(v,p,A),h?h.alias.push(D):(_=_||D,_!==D&&_.alias.push(D),w&&g.name&&!Dr(D)&&m(g.name)),"children"in b){const T=b.children;for(let E=0;E<T.length;E++)d(T[E],D,h&&h.children[E])}h=h||D,r(D)}return _?()=>{m(_)}:Ka}function m(g){if(Xc(g)){const p=o.get(g);p&&(o.delete(g),l.splice(l.indexOf(p),1),p.children.forEach(m),p.alias.forEach(m))}else{const p=l.indexOf(g);p>-1&&(l.splice(p,1),g.record.name&&o.delete(g.record.name),g.children.forEach(m),g.alias.forEach(m))}}function f(){return l}function r(g){let p=0;for(;p<l.length&&Eg(g,l[p])>=0;)p++;l.splice(p,0,g),g.record.name&&!Dr(g)&&o.set(g.record.name,g)}function c(g,p){let h,w={},b,A;if("name"in g&&g.name){if(h=o.get(g.name),!h)throw Ca(1,{location:g});A=h.record.name,w=Ye(Mg(p.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),g.params),b=h.stringify(w)}else if("path"in g)b=g.path,h=l.find(_=>_.re.test(b)),h&&(w=h.parse(b),A=h.record.name);else{if(h=p.name?o.get(p.name):l.find(_=>_.re.test(p.path)),!h)throw Ca(1,{location:g,currentLocation:p});A=h.record.name,w=Ye({},p.params,g.params),b=h.stringify(w)}const $=[];let D=h;for(;D;)$.unshift(D.record),D=D.parent;return{name:A,path:b,params:w,matched:$,meta:Og($)}}return e.forEach(g=>d(g)),{addRoute:d,resolve:c,removeRoute:m,getRoutes:f,getRecordMatcher:s}}function Mg(e,a){const l={};for(const o of a)o in e&&(l[o]=e[o]);return l}function Hg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ng(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Ng(e){const a={},l=e.props||!1;if("component"in e)a.default=l;else for(const o in e.components)a[o]=typeof l=="boolean"?l:l[o];return a}function Dr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Og(e){return e.reduce((a,l)=>Ye(a,l.meta),{})}function Lr(e,a){const l={};for(const o in e)l[o]=o in a?a[o]:e[o];return l}const Zc=/#/g,qg=/&/g,jg=/\//g,Gg=/=/g,Ug=/\?/g,ed=/\+/g,Yg=/%5B/g,Jg=/%5D/g,td=/%5E/g,Wg=/%60/g,id=/%7B/g,Kg=/%7C/g,ad=/%7D/g,Xg=/%20/g;function _s(e){return encodeURI(""+e).replace(Kg,"|").replace(Yg,"[").replace(Jg,"]")}function Qg(e){return _s(e).replace(id,"{").replace(ad,"}").replace(td,"^")}function Ao(e){return _s(e).replace(ed,"%2B").replace(Xg,"+").replace(Zc,"%23").replace(qg,"%26").replace(Wg,"`").replace(id,"{").replace(ad,"}").replace(td,"^")}function Zg(e){return Ao(e).replace(Gg,"%3D")}function eh(e){return _s(e).replace(Zc,"%23").replace(Ug,"%3F")}function th(e){return e==null?"":eh(e).replace(jg,"%2F")}function Ql(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ih(e){const a={};if(e===""||e==="?")return a;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const d=o[s].replace(ed," "),m=d.indexOf("="),f=Ql(m<0?d:d.slice(0,m)),r=m<0?null:Ql(d.slice(m+1));if(f in a){let c=a[f];Array.isArray(c)||(c=a[f]=[c]),c.push(r)}else a[f]=r}return a}function Ir(e){let a="";for(let l in e){const o=e[l];if(l=Zg(l),o==null){o!==void 0&&(a+=(a.length?"&":"")+l);continue}(Array.isArray(o)?o.map(d=>d&&Ao(d)):[o&&Ao(o)]).forEach(d=>{d!==void 0&&(a+=(a.length?"&":"")+l,d!=null&&(a+="="+d))})}return a}function ah(e){const a={};for(const l in e){const o=e[l];o!==void 0&&(a[l]=Array.isArray(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return a}function za(){let e=[];function a(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function l(){e=[]}return{add:a,list:()=>e,reset:l}}function lh(e,a,l){const o=()=>{e[a].delete(l)};Zi(o),ss(o),os(()=>{e[a].add(l)}),e[a].add(l)}function nh(e){const a=He(Jc,{}).value;a&&lh(a,"updateGuards",e)}function vi(e,a,l,o,s){const d=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((m,f)=>{const r=p=>{p===!1?f(Ca(4,{from:l,to:a})):p instanceof Error?f(p):Bg(p)?f(Ca(2,{from:a,to:p})):(d&&o.enterCallbacks[s]===d&&typeof p=="function"&&d.push(p),m())},c=e.call(o&&o.instances[s],a,l,r);let g=Promise.resolve(c);e.length<3&&(g=g.then(r)),g.catch(p=>f(p))})}function Hn(e,a,l,o){const s=[];for(const d of e)for(const m in d.components){let f=d.components[m];if(!(a!=="beforeRouteEnter"&&!d.instances[m]))if(oh(f)){const c=(f.__vccOpts||f)[a];c&&s.push(vi(c,l,o,d,m))}else{let r=f();s.push(()=>r.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${d.path}"`));const g=cg(c)?c.default:c;d.components[m]=g;const h=(g.__vccOpts||g)[a];return h&&vi(h,l,o,d,m)()}))}}return s}function oh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Er(e){const a=He(wn),l=He(hs),o=H(()=>a.resolve(u(e.to))),s=H(()=>{const{matched:r}=o.value,{length:c}=r,g=r[c-1],p=l.matched;if(!g||!p.length)return-1;const h=p.findIndex(wa.bind(null,g));if(h>-1)return h;const w=Rr(r[c-2]);return c>1&&Rr(g)===w&&p[p.length-1].path!==w?p.findIndex(wa.bind(null,r[c-2])):h}),d=H(()=>s.value>-1&&uh(l.params,o.value.params)),m=H(()=>s.value>-1&&s.value===l.matched.length-1&&Wc(l.params,o.value.params));function f(r={}){return rh(r)?a[u(e.replace)?"replace":"push"](u(e.to)).catch(Ka):Promise.resolve()}return{route:o,href:H(()=>o.value.href),isActive:d,isExactActive:m,navigate:f}}const sh=P({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Er,setup(e,{slots:a}){const l=si(Er(e)),{options:o}=He(wn),s=H(()=>({[zr(e.activeClass,o.linkActiveClass,"router-link-active")]:l.isActive,[zr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const d=a.default&&a.default(l);return e.custom?d:X("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:s.value},d)}}}),bs=sh;function rh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const a=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return e.preventDefault&&e.preventDefault(),!0}}function uh(e,a){for(const l in a){const o=a[l],s=e[l];if(typeof o=="string"){if(o!==s)return!1}else if(!Array.isArray(s)||s.length!==o.length||o.some((d,m)=>d!==s[m]))return!1}return!0}function Rr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zr=(e,a,l)=>e??a??l,ch=P({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:a,slots:l}){const o=He(wo),s=H(()=>e.route||o.value),d=He(Cr,0),m=H(()=>s.value.matched[d]);mt(Cr,d+1),mt(Jc,m),mt(wo,s);const f=G();return gt(()=>[f.value,m.value,e.name],([r,c,g],[p,h,w])=>{c&&(c.instances[g]=r,h&&h!==c&&r&&r===p&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),r&&c&&(!h||!wa(c,h)||!p)&&(c.enterCallbacks[g]||[]).forEach(b=>b(r))},{flush:"post"}),()=>{const r=s.value,c=m.value,g=c&&c.components[e.name],p=e.name;if(!g)return Pr(l.default,{Component:g,route:r});const h=c.props[e.name],w=h?h===!0?r.params:typeof h=="function"?h(r):h:null,A=X(g,Ye({},w,a,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(c.instances[p]=null)},ref:f}));return Pr(l.default,{Component:A,route:r})||A}}});function Pr(e,a){if(!e)return null;const l=e(a);return l.length===1?l[0]:l}const dh=ch;function mh(e){const a=Vg(e.routes,e),l=e.parseQuery||ih,o=e.stringifyQuery||Ir,s=e.history,d=za(),m=za(),f=za(),r=Cu(pi);let c=pi;na&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Vn.bind(null,J=>""+J),p=Vn.bind(null,th),h=Vn.bind(null,Ql);function w(J,ue){let re,_e;return Xc(J)?(re=a.getRecordMatcher(J),_e=ue):_e=J,a.addRoute(_e,re)}function b(J){const ue=a.getRecordMatcher(J);ue&&a.removeRoute(ue)}function A(){return a.getRoutes().map(J=>J.record)}function $(J){return!!a.getRecordMatcher(J)}function D(J,ue){if(ue=Ye({},ue||r.value),typeof J=="string"){const $e=Mn(l,J,ue.path),L=a.resolve({path:$e.path},ue),R=s.createHref($e.fullPath);return Ye($e,L,{params:h(L.params),hash:Ql($e.hash),redirectedFrom:void 0,href:R})}let re;if("path"in J)re=Ye({},J,{path:Mn(l,J.path,ue.path).path});else{const $e=Ye({},J.params);for(const L in $e)$e[L]==null&&delete $e[L];re=Ye({},J,{params:p(J.params)}),ue.params=p(ue.params)}const _e=a.resolve(re,ue),Ne=J.hash||"";_e.params=g(h(_e.params));const Oe=pg(o,Ye({},J,{hash:Qg(Ne),path:_e.path})),xe=s.createHref(Oe);return Ye({fullPath:Oe,hash:Ne,query:o===Ir?ah(J.query):J.query||{}},_e,{redirectedFrom:void 0,href:xe})}function _(J){return typeof J=="string"?Mn(l,J,r.value.path):Ye({},J)}function v(J,ue){if(c!==J)return Ca(8,{from:ue,to:J})}function x(J){return V(J)}function T(J){return x(Ye(_(J),{replace:!0}))}function E(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let _e=typeof re=="function"?re(J):re;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=_(_e):{path:_e},_e.params={}),Ye({query:J.query,hash:J.hash,params:J.params},_e)}}function V(J,ue){const re=c=D(J),_e=r.value,Ne=J.state,Oe=J.force,xe=J.replace===!0,$e=E(re);if($e)return V(Ye(_($e),{state:Ne,force:Oe,replace:xe}),ue||re);const L=re;L.redirectedFrom=ue;let R;return!Oe&&fg(o,_e,re)&&(R=Ca(16,{to:L,from:_e}),Je(_e,_e,!0,!1)),(R?Promise.resolve(R):F(L,_e)).catch(q=>Di(q)?q:me(q,L,_e)).then(q=>{if(q){if(Di(q,2))return V(Ye(_(q.to),{state:Ne,force:Oe,replace:xe}),ue||L)}else q=Q(L,_e,!0,xe,Ne);return j(L,_e,q),q})}function M(J,ue){const re=v(J,ue);return re?Promise.reject(re):Promise.resolve()}function F(J,ue){let re;const[_e,Ne,Oe]=ph(J,ue);re=Hn(_e.reverse(),"beforeRouteLeave",J,ue);for(const $e of _e)$e.leaveGuards.forEach(L=>{re.push(vi(L,J,ue))});const xe=M.bind(null,J,ue);return re.push(xe),aa(re).then(()=>{re=[];for(const $e of d.list())re.push(vi($e,J,ue));return re.push(xe),aa(re)}).then(()=>{re=Hn(Ne,"beforeRouteUpdate",J,ue);for(const $e of Ne)$e.updateGuards.forEach(L=>{re.push(vi(L,J,ue))});return re.push(xe),aa(re)}).then(()=>{re=[];for(const $e of J.matched)if($e.beforeEnter&&!ue.matched.includes($e))if(Array.isArray($e.beforeEnter))for(const L of $e.beforeEnter)re.push(vi(L,J,ue));else re.push(vi($e.beforeEnter,J,ue));return re.push(xe),aa(re)}).then(()=>(J.matched.forEach($e=>$e.enterCallbacks={}),re=Hn(Oe,"beforeRouteEnter",J,ue),re.push(xe),aa(re))).then(()=>{re=[];for(const $e of m.list())re.push(vi($e,J,ue));return re.push(xe),aa(re)}).catch($e=>Di($e,8)?$e:Promise.reject($e))}function j(J,ue,re){for(const _e of f.list())_e(J,ue,re)}function Q(J,ue,re,_e,Ne){const Oe=v(J,ue);if(Oe)return Oe;const xe=ue===pi,$e=na?history.state:{};re&&(_e||xe?s.replace(J.fullPath,Ye({scroll:xe&&$e&&$e.scroll},Ne)):s.push(J.fullPath,Ne)),r.value=J,Je(J,ue,re,xe),De()}let Y;function ge(){Y=s.listen((J,ue,re)=>{const _e=D(J),Ne=E(_e);if(Ne){V(Ye(Ne,{replace:!0}),_e).catch(Ka);return}c=_e;const Oe=r.value;na&&wg(xr(Oe.fullPath,re.delta),Cn()),F(_e,Oe).catch(xe=>Di(xe,12)?xe:Di(xe,2)?(V(xe.to,_e).then($e=>{Di($e,20)&&!re.delta&&re.type===rl.pop&&s.go(-1,!1)}).catch(Ka),Promise.reject()):(re.delta&&s.go(-re.delta,!1),me(xe,_e,Oe))).then(xe=>{xe=xe||Q(_e,Oe,!1),xe&&(re.delta?s.go(-re.delta,!1):re.type===rl.pop&&Di(xe,20)&&s.go(-1,!1)),j(_e,Oe,xe)}).catch(Ka)})}let Be=za(),U=za(),K;function me(J,ue,re){De(J);const _e=U.list();return _e.length?_e.forEach(Ne=>Ne(J,ue,re)):console.error(J),Promise.reject(J)}function ae(){return K&&r.value!==pi?Promise.resolve():new Promise((J,ue)=>{Be.add([J,ue])})}function De(J){K||(K=!0,ge(),Be.list().forEach(([ue,re])=>J?re(J):ue()),Be.reset())}function Je(J,ue,re,_e){const{scrollBehavior:Ne}=e;if(!na||!Ne)return Promise.resolve();const Oe=!re&&Cg(xr(J.fullPath,0))||(_e||!re)&&history.state&&history.state.scroll||null;return $a().then(()=>Ne(J,ue,Oe)).then(xe=>xe&&yg(xe)).catch(xe=>me(xe,J,ue))}const ot=J=>s.go(J);let Ue;const Qt=new Set;return{currentRoute:r,addRoute:w,removeRoute:b,hasRoute:$,getRoutes:A,resolve:D,options:e,push:x,replace:T,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:d.add,beforeResolve:m.add,afterEach:f.add,onError:U.add,isReady:ae,install(J){const ue=this;J.component("RouterLink",bs),J.component("RouterView",dh),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>u(r)}),na&&!Ue&&r.value===pi&&(Ue=!0,x(s.location).catch(Ne=>{}));const re={};for(const Ne in pi)re[Ne]=H(()=>r.value[Ne]);J.provide(wn,ue),J.provide(hs,si(re)),J.provide(wo,r);const _e=J.unmount;Qt.add(J),J.unmount=function(){Qt.delete(J),Qt.size<1&&(c=pi,Y&&Y(),r.value=pi,Ue=!1,K=!1),_e()}}}}function aa(e){return e.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function ph(e,a){const l=[],o=[],s=[],d=Math.max(a.matched.length,e.matched.length);for(let m=0;m<d;m++){const f=a.matched[m];f&&(e.matched.find(c=>wa(c,f))?o.push(f):l.push(f));const r=e.matched[m];r&&(a.matched.find(c=>wa(c,r))||s.push(r))}return[l,o,s]}function ld(){return He(wn)}function nd(){return He(hs)}const fh={__name:"Navbar",props:["onClick"],setup(e){const a=G(),l=ld();function o(s){return s.charAt(0).toUpperCase()+s.slice(1)}return as(()=>{const m=l.currentRoute.value.path.match(/\/([^/]+)$/);m&&(a.value=o(m[1]))}),(s,d)=>{const m=y("SuiIcon"),f=y("SuiMenuItem"),r=y("SuiMenu");return k(),B(r,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[t(f,{onClick:e.onClick},{default:i(()=>[t(m,{name:"hamburger"})]),_:1},8,["onClick"]),t(f,null,{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1})}}},gh=Re(fh,[["__scopeId","data-v-338afb35"]]),hh=P({name:"Sidebar",setup(){const e=nd();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),_h=S("strong",null," Fomantic UI Vue ",-1),bh=S("b",null,"Getting Started",-1);function vh(e,a,l,o,s,d){const m=y("sui-menu-item"),f=y("sui-menu-header"),r=y("sui-menu-menu"),c=y("sui-menu");return k(),B(c,{fluid:"",inverted:"",vertical:""},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[_h]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[bh]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.elements,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.collections,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.views,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.modules,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Sh=Re(hh,[["render",vh]]),yh={class:"sidemenu"},wh={style:{flex:"1","overflow-y":"scroll"}},Ch={__name:"Sidebar",setup(e){return(a,l)=>(k(),be("div",yh,[S("div",wh,[t(Sh)])]))}},Ah=Re(Ch,[["__scopeId","data-v-379ef704"]]),kh=P({name:"Sidebar",setup(){const e=nd();return{isActive:m=>e.path===m,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),xh=S("strong",null," Fomantic UI Vue ",-1),$h=S("b",null,"Getting Started",-1);function Bh(e,a,l,o,s,d){const m=y("sui-menu-item"),f=y("sui-menu-header"),r=y("sui-menu-menu"),c=y("sui-sidebar");return k(),B(c,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[t(m,{as:"div"},{default:i(()=>[xh]),_:1}),t(m,{as:"router-link",to:"/"},{default:i(()=>[$h]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Elements"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.elements,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Collections"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.collections,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Views"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.views,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),t(m,{as:"div"},{default:i(()=>[t(f,{content:"Modules"}),t(r,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.modules,g=>(k(),B(m,{key:g.name,name:g.name,to:g.path,active:e.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Th=Re(kh,[["render",Bh]]),Dh={class:"pusher",style:{height:"100vh"}},Lh={class:"article"},Ih={__name:"Home",setup(e){const a=G(!1),l=()=>a.value=!a.value;return nh(()=>{a.value=!1}),(o,s)=>{const d=y("router-view"),m=y("SuiSegment");return k(),B(m,{class:"pushable",style:{border:"none"}},{default:i(()=>[t(Th,{visible:a.value},null,8,["visible"]),S("div",Dh,[t(Ah),t(gh,{"on-click":l}),S("div",Lh,[t(d)])])]),_:1})}}},Eh=Re(Ih,[["__scopeId","data-v-0bfd4ee9"]]),Rh={__name:"DocSections",props:["docs"],setup(e){const a=e,l=H(()=>[...new Set(a.docs.map(o=>o.category))]);return(o,s)=>{const d=y("SuiHeader");return k(!0),be(Ae,null,Qe(l.value,(m,f)=>(k(),be(Ae,{key:m},[t(d,{as:"h2",dividing:"",style:xa({marginTop:f!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[n(Te(m),1)]),_:2},1032,["style"]),(k(!0),be(Ae,null,Qe(e.docs.filter(r=>r.category===m),(r,c)=>(k(),B(zu(r.component),{key:r.label+"_"+c,id:r.id,style:{paddingTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},zh=e=>(Iu("data-v-e2ae2e49"),e=e(),Eu(),e),Ph={class:"item"},Fh=zh(()=>S("i",{class:"dropdown icon"},null,-1)),Vh={class:"content menu active"},Mh={__name:"DocTableLink",props:["header","items"],setup(e){const{id:a}=Zu(),l=m=>{m.preventDefault();const f=document.getElementById(a);f.open?s(f):(f.open=!0,o(f))},o=m=>{m.querySelector(".title").classList.add("active");const r=m.querySelector(".content"),c=r.offsetHeight;r.style.maxHeight=0,requestAnimationFrame(()=>{r.style.maxHeight=`${c}px`});const g=new AbortController;r.addEventListener("transitionend",()=>{r.removeAttribute("style"),g.abort()},{signal:g.signal})},s=m=>{const f=m.querySelector(".title"),r=m.querySelector(".content"),c=r.offsetHeight;r.style.maxHeight=`${c}px`,requestAnimationFrame(()=>{r.style.maxHeight=0,f.classList.remove("active")});const g=new AbortController;r.addEventListener("transitionend",()=>{r.removeAttribute("style"),m.open=!1,g.abort()},{signal:g.signal})},d=(m,f)=>{m.preventDefault(),document.getElementById(f.replace("_link","")).scrollIntoView({behavior:"smooth",block:"start"})};return(m,f)=>(k(),be("details",Ph,[S("summary",{class:"title",onClick:l},[Fh,S("b",null,Te(e.header),1)]),S("div",Vh,[(k(!0),be(Ae,null,Qe(e.items,r=>(k(),B(u(bs),{to:`#${r.id}`,class:"item",onClick:c=>d(c,r.id)},{default:i(()=>[n(Te(r.label),1)]),_:2},1032,["to","onClick"]))),256))])]))}},Hh=Re(Mh,[["__scopeId","data-v-e2ae2e49"]]),Nh={class:"sticky"},Oh={class:"ui vertical following fluid accordion text large menu"},qh={__name:"DocTableContents",props:["title","links"],setup(e){const a=e,l=[...new Set(a.links.map(o=>o.category))];return(o,s)=>{const d=y("SuiHeader"),m=y("SuiRail");return k(),B(m,{id:"table-contents",position:"right",dividing:""},{default:i(()=>[S("div",Nh,[t(d,{as:"h3"},{default:i(()=>[n(Te(e.title),1)]),_:1}),S("div",Oh,[(k(),be(Ae,null,Qe(l,f=>t(Hh,{id:`${f}_link`,header:f,items:e.links.filter(r=>r.category===f)},null,8,["id","header","items"])),64))])])]),_:1})}}},jh=Re(qh,[["__scopeId","data-v-bd90305d"]]),Gh={class:"intro"},Uh={__name:"DocComponent",props:["title","description","componentDocs"],setup(e){const a=G();return(l,o)=>{const s=y("SuiHeaderSubheader"),d=y("SuiHeader"),m=y("SuiDivider"),f=y("SuiIcon"),r=y("SuiMenuItem"),c=y("SuiPopup"),g=y("SuiMenu"),p=y("SuiContainer"),h=y("SuiSegment");return k(),be("div",null,[t(h,{id:"masthead",vertical:"",style:{"border-bottom":"1px solid #DDDDDD"}},{default:i(()=>[t(p,{class:"main"},{default:i(()=>[S("div",Gh,[t(d,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(s,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1}),t(m,{hidden:""}),t(g,{icon:"",floated:"right"},{default:i(()=>[t(r,{as:"a",icon:"",ref_key:"el",ref:a,href:"https://github.com/nightswinger/vue-fomantic-ui"},{default:i(()=>[t(f,{name:"alternate github"})]),_:1},512),t(c,{trigger:a.value,position:"top right"},{default:i(()=>[n(" View Project on GitHub ")]),_:1},8,["trigger"])]),_:1})])]),_:1})]),_:1}),t(p,{class:"main"},{default:i(()=>[t(h,{basic:"",fitted:""},{default:i(()=>[e.componentDocs?(k(),be(Ae,{key:0},[t(Rh,{docs:e.componentDocs},null,8,["docs"]),t(jh,{title:e.title,links:e.componentDocs},null,8,["title","links"])],64)):ds("",!0),ji(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})])}}},rt=Re(Uh,[["__scopeId","data-v-d22eb33f"]]);var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function od(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Yh(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var l=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(l,o,s.get?s:{enumerable:!0,get:function(){return e[o]}})}),l}var sd={exports:{}};(function(e){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var l=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,m={},f={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function _(v){return v instanceof r?new r(v.type,_(v.content),v.alias):Array.isArray(v)?v.map(_):v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++d}),_.__id},clone:function _(v,x){x=x||{};var T,E;switch(f.util.type(v)){case"Object":if(E=f.util.objId(v),x[E])return x[E];T={},x[E]=T;for(var V in v)v.hasOwnProperty(V)&&(T[V]=_(v[V],x));return T;case"Array":return E=f.util.objId(v),x[E]?x[E]:(T=[],x[E]=T,v.forEach(function(M,F){T[F]=_(M,x)}),T);default:return v}},getLanguage:function(_){for(;_;){var v=s.exec(_.className);if(v)return v[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,v){_.className=_.className.replace(RegExp(s,"gi"),""),_.classList.add("language-"+v)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var _=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(_){var v=document.getElementsByTagName("script");for(var x in v)if(v[x].src==_)return v[x]}return null}},isActive:function(_,v,x){for(var T="no-"+v;_;){var E=_.classList;if(E.contains(v))return!0;if(E.contains(T))return!1;_=_.parentElement}return!!x}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(_,v){var x=f.util.clone(f.languages[_]);for(var T in v)x[T]=v[T];return x},insertBefore:function(_,v,x,T){T=T||f.languages;var E=T[_],V={};for(var M in E)if(E.hasOwnProperty(M)){if(M==v)for(var F in x)x.hasOwnProperty(F)&&(V[F]=x[F]);x.hasOwnProperty(M)||(V[M]=E[M])}var j=T[_];return T[_]=V,f.languages.DFS(f.languages,function(Q,Y){Y===j&&Q!=_&&(this[Q]=V)}),V},DFS:function _(v,x,T,E){E=E||{};var V=f.util.objId;for(var M in v)if(v.hasOwnProperty(M)){x.call(v,M,v[M],T||M);var F=v[M],j=f.util.type(F);j==="Object"&&!E[V(F)]?(E[V(F)]=!0,_(F,x,null,E)):j==="Array"&&!E[V(F)]&&(E[V(F)]=!0,_(F,x,M,E))}}},plugins:{},highlightAll:function(_,v){f.highlightAllUnder(document,_,v)},highlightAllUnder:function(_,v,x){var T={callback:x,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};f.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),f.hooks.run("before-all-elements-highlight",T);for(var E=0,V;V=T.elements[E++];)f.highlightElement(V,v===!0,T.callback)},highlightElement:function(_,v,x){var T=f.util.getLanguage(_),E=f.languages[T];f.util.setLanguage(_,T);var V=_.parentElement;V&&V.nodeName.toLowerCase()==="pre"&&f.util.setLanguage(V,T);var M=_.textContent,F={element:_,language:T,grammar:E,code:M};function j(Y){F.highlightedCode=Y,f.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,f.hooks.run("after-highlight",F),f.hooks.run("complete",F),x&&x.call(F.element)}if(f.hooks.run("before-sanity-check",F),V=F.element.parentElement,V&&V.nodeName.toLowerCase()==="pre"&&!V.hasAttribute("tabindex")&&V.setAttribute("tabindex","0"),!F.code){f.hooks.run("complete",F),x&&x.call(F.element);return}if(f.hooks.run("before-highlight",F),!F.grammar){j(f.util.encode(F.code));return}if(v&&o.Worker){var Q=new Worker(f.filename);Q.onmessage=function(Y){j(Y.data)},Q.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else j(f.highlight(F.code,F.grammar,F.language))},highlight:function(_,v,x){var T={code:_,grammar:v,language:x};if(f.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=f.tokenize(T.code,T.grammar),f.hooks.run("after-tokenize",T),r.stringify(f.util.encode(T.tokens),T.language)},tokenize:function(_,v){var x=v.rest;if(x){for(var T in x)v[T]=x[T];delete v.rest}var E=new p;return h(E,E.head,_),g(_,E,v,E.head,0),b(E)},hooks:{all:{},add:function(_,v){var x=f.hooks.all;x[_]=x[_]||[],x[_].push(v)},run:function(_,v){var x=f.hooks.all[_];if(!(!x||!x.length))for(var T=0,E;E=x[T++];)E(v)}},Token:r};o.Prism=f;function r(_,v,x,T){this.type=_,this.content=v,this.alias=x,this.length=(T||"").length|0}r.stringify=function _(v,x){if(typeof v=="string")return v;if(Array.isArray(v)){var T="";return v.forEach(function(j){T+=_(j,x)}),T}var E={type:v.type,content:_(v.content,x),tag:"span",classes:["token",v.type],attributes:{},language:x},V=v.alias;V&&(Array.isArray(V)?Array.prototype.push.apply(E.classes,V):E.classes.push(V)),f.hooks.run("wrap",E);var M="";for(var F in E.attributes)M+=" "+F+'="'+(E.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+M+">"+E.content+"</"+E.tag+">"};function c(_,v,x,T){_.lastIndex=v;var E=_.exec(x);if(E&&T&&E[1]){var V=E[1].length;E.index+=V,E[0]=E[0].slice(V)}return E}function g(_,v,x,T,E,V){for(var M in x)if(!(!x.hasOwnProperty(M)||!x[M])){var F=x[M];F=Array.isArray(F)?F:[F];for(var j=0;j<F.length;++j){if(V&&V.cause==M+","+j)return;var Q=F[j],Y=Q.inside,ge=!!Q.lookbehind,Be=!!Q.greedy,U=Q.alias;if(Be&&!Q.pattern.global){var K=Q.pattern.toString().match(/[imsuy]*$/)[0];Q.pattern=RegExp(Q.pattern.source,K+"g")}for(var me=Q.pattern||Q,ae=T.next,De=E;ae!==v.tail&&!(V&&De>=V.reach);De+=ae.value.length,ae=ae.next){var Je=ae.value;if(v.length>_.length)return;if(!(Je instanceof r)){var ot=1,Ue;if(Be){if(Ue=c(me,De,_,ge),!Ue||Ue.index>=_.length)break;var ue=Ue.index,Qt=Ue.index+Ue[0].length,Pt=De;for(Pt+=ae.value.length;ue>=Pt;)ae=ae.next,Pt+=ae.value.length;if(Pt-=ae.value.length,De=Pt,ae.value instanceof r)continue;for(var J=ae;J!==v.tail&&(Pt<Qt||typeof J.value=="string");J=J.next)ot++,Pt+=J.value.length;ot--,Je=_.slice(De,Pt),Ue.index-=De}else if(Ue=c(me,0,Je,ge),!Ue)continue;var ue=Ue.index,re=Ue[0],_e=Je.slice(0,ue),Ne=Je.slice(ue+re.length),Oe=De+Je.length;V&&Oe>V.reach&&(V.reach=Oe);var xe=ae.prev;_e&&(xe=h(v,xe,_e),De+=_e.length),w(v,xe,ot);var $e=new r(M,Y?f.tokenize(re,Y):re,U,re);if(ae=h(v,xe,$e),Ne&&h(v,ae,Ne),ot>1){var L={cause:M+","+j,reach:Oe};g(_,v,x,ae.prev,De,L),V&&L.reach>V.reach&&(V.reach=L.reach)}}}}}}function p(){var _={value:null,prev:null,next:null},v={value:null,prev:_,next:null};_.next=v,this.head=_,this.tail=v,this.length=0}function h(_,v,x){var T=v.next,E={value:x,prev:v,next:T};return v.next=E,T.prev=E,_.length++,E}function w(_,v,x){for(var T=v.next,E=0;E<x&&T!==_.tail;E++)T=T.next;v.next=T,T.prev=v,_.length-=E}function b(_){for(var v=[],x=_.head.next;x!==_.tail;)v.push(x.value),x=x.next;return v}if(!o.document)return o.addEventListener&&(f.disableWorkerMessageHandler||o.addEventListener("message",function(_){var v=JSON.parse(_.data),x=v.language,T=v.code,E=v.immediateClose;o.postMessage(f.highlight(T,f.languages[x],x)),E&&o.close()},!1)),f;var A=f.util.currentScript();A&&(f.filename=A.src,A.hasAttribute("data-manual")&&(f.manual=!0));function $(){f.manual||f.highlightAll()}if(!f.manual){var D=document.readyState;D==="loading"||D==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return f}(a);e.exports&&(e.exports=l),typeof Fr<"u"&&(Fr.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(s,d){var m={};m["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[d]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};f["language-"+d]={pattern:/[\s\S]+/,inside:l.languages[d]};var r={};r[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:f},l.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(o,s){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:l.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,function(o){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var d=o.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",s=function(A,$){return"✖ Error "+A+" while fetching file: "+$},d="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},f="data-src-status",r="loading",c="loaded",g="failed",p="pre[data-src]:not(["+f+'="'+c+'"]):not(['+f+'="'+r+'"])';function h(A,$,D){var _=new XMLHttpRequest;_.open("GET",A,!0),_.onreadystatechange=function(){_.readyState==4&&(_.status<400&&_.responseText?$(_.responseText):_.status>=400?D(s(_.status,_.statusText)):D(d))},_.send(null)}function w(A){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if($){var D=Number($[1]),_=$[2],v=$[3];return _?v?[D,Number(v)]:[D,void 0]:[D,D]}}l.hooks.add("before-highlightall",function(A){A.selector+=", "+p}),l.hooks.add("before-sanity-check",function(A){var $=A.element;if($.matches(p)){A.code="",$.setAttribute(f,r);var D=$.appendChild(document.createElement("CODE"));D.textContent=o;var _=$.getAttribute("data-src"),v=A.language;if(v==="none"){var x=(/\.(\w+)$/.exec(_)||[,"none"])[1];v=m[x]||x}l.util.setLanguage(D,v),l.util.setLanguage($,v);var T=l.plugins.autoloader;T&&T.loadLanguages(v),h(_,function(E){$.setAttribute(f,c);var V=w($.getAttribute("data-range"));if(V){var M=E.split(/\r\n?|\n/g),F=V[0],j=V[1]==null?M.length:V[1];F<0&&(F+=M.length),F=Math.max(0,Math.min(F-1,M.length)),j<0&&(j+=M.length),j=Math.max(0,Math.min(j,M.length)),E=M.slice(F,j).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(F+1))}D.textContent=E,l.highlightElement(D)},function(E){$.setAttribute(f,g),D.textContent=E})}}),l.plugins.fileHighlight={highlight:function($){for(var D=($||document).querySelectorAll(p),_=0,v;v=D[_++];)l.highlightElement(v)}};var b=!1;l.fileHighlight=function(){b||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),b=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(sd);var rd=sd.exports;const Jh=od(rd),Vl={mounted(e,a){var s;const l=a.modifiers,o=a.value;l.script||o==="script"?e.className="language-javascript":e.className="language-markup",Jh.highlightElement(e.children[0]),(s=e.children[0].parentElement)==null||s.setAttribute("tabindex","-1")}},Wh={style:{paddingTop:"3rem"}},Kh=S("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1),Xh=S("code",null,`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`,-1),Qh=[Xh],Zh={style:{paddingTop:"3rem",marginBottom:"3rem"}},e_=S("p",null," You can import all components as Vue plugin. ",-1),t_=S("code",null,`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)

app.use(FomanticUI)`,-1),i_=[t_],a_=S("br",null,null,-1),l_=S("p",null," Or pick a component indivisually, add it to your components option. ",-1),n_=S("code",null,`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`,-1),o_=[n_],s_={__name:"GettingStarted",setup(e){return(a,l)=>{const o=y("SuiHeader");return k(),B(rt,{title:"Getting Started",description:"Getting up and running with Fomantic-UI Vue"},{default:i(()=>[S("section",Wh,[t(o,{as:"h2"},{default:i(()=>[n("Install")]),_:1}),Kh,t(o,{as:"h3"},{default:i(()=>[n("via Package Manager")]),_:1}),yi((k(),be("pre",null,Qh)),[[u(Vl)]])]),S("section",Zh,[t(o,{as:"h2"},{default:i(()=>[n("Usage")]),_:1}),e_,yi((k(),be("pre",null,i_)),[[u(Vl),void 0,void 0,{script:!0}]]),a_,l_,yi((k(),be("pre",null,o_)),[[u(Vl),void 0,void 0,{script:!0}]])])]),_:1})}}};function ud(e){var a,l,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(l=ud(e[a]))&&(o&&(o+=" "),o+=l);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function te(){for(var e,a,l=0,o="";l<arguments.length;)(e=arguments[l++])&&(a=ud(e))&&(o&&(o+=" "),o+=a);return o}const C=(e,a)=>e?a:"",Me=(e,a)=>typeof e=="string"?`${e} ${a}`:"",Ie=(e,a)=>e===!0?a:e==="below"?`${a} ${e}`:typeof e=="string"?`${e} ${a}`:"",Ta=e=>e==="justified"?"justified":Me(e,"aligned"),ui=(e,a)=>typeof e=="number"&&a?`${ko(e)} ${a}`:typeof e=="number"&&!a?ko(e):typeof e=="string"&&e==="equal"?`${e} width`:"",Pa=(e,a)=>e?`${ko(e)} wide ${a}`:"",ko=e=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][e-1],r_=P({props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(e){const a=e.multiple?G([]):G(-1),l=s=>e.multiple?a.value.includes(s):a.value===s,o=s=>{const d=l(s);e.multiple?d?a.value=a.value.filter(m=>m!==s):a.value.push(s):a.value=d?-1:s};return mt("isTabActive",l),mt("updateActiveIndex",o),{computedClass:H(()=>te("ui",C(e.fluid,"fluid"),C(e.inverted,"inverted"),C(e.styled,"styled"),"accordion"))}},render(){var e,a;const l=o=>(o.forEach((s,d)=>{s.props.index=d}),o);return t("div",{class:this.computedClass},[l((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),u_=P({render(){var e,a;return X("div",{class:"accordion"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cd=P({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(C(e.active,"active"),"content"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),W=P({props:{as:String,bordered:Boolean,circular:Boolean,color:String,colored:Boolean,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,primary:Boolean,rotated:String,secondary:Boolean,size:String},setup(e){return{classes:H(()=>te(e.color,e.name,e.size,C(e.primary,"primary"),C(e.secondary,"secondary"),C(e.bordered,"bordered"),C(e.circular,"circular"),C(e.colored,"colored"),C(e.disabled,"disabled"),C(e.fitted,"fitted"),C(e.inverted,"inverted"),C(e.link,"link"),C(e.loading,"loading"),Me(e.flipped,"flipped"),Me(e.rotated,"rotated"),Ie(e.corner,"corner"),"icon"))}},render(){let e=this.$props.as||"i";return X(e,{"aria-hidden":!0,class:this.classes})}}),c_=P({props:{index:Number,title:String},setup(e){const a=He("isTabActive"),l=He("updateActiveIndex"),o=H(()=>te(C(a(e.index),"active"),"title"));return{isTabActive:a,updateActiveIndex:l,titleClass:o}},render(){return t(Ae,null,[t("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[t(W,{name:"dropdown"},null),this.title]),t(cd,{active:this.isTabActive(this.index)},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})])}}),d_=P({props:{active:Boolean},setup(e){return{computedClass:H(()=>te(C(e.active,"active"),"title"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),m_={install(e){e.component("SuiAccordion",r_),e.component("SuiAccordionAccordion",u_),e.component("SuiAccordionContent",cd),e.component("SuiAccordionTab",c_),e.component("SuiAccordionTitle",d_)}},p_=P({props:{centered:Boolean,test:String,unit:String},setup(e){return{computedClass:H(()=>te("ui",e.unit,C(e.centered,"centered"),C(!!e.test,"test"),"ad"))}},render(){var e,a,l,o;return this.$props.test?X("div",{class:this.computedClass,"data-text":this.$props.test},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("div",{class:this.computedClass},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),f_={install(e){e.component("SuiAdvertisement",p_)}},Lt=P({props:{icon:String},setup(e){return{computedClass:H(()=>te(e.icon,"icon","divider"))}},render(){var e,a;return this.icon?t("i",{"aria-hidden":"true",class:this.computedClass},null):t("div",{class:"divider"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tt=P({props:{active:Boolean,href:String,link:Boolean,to:String},setup(e){const a=H(()=>te(C(e.active,"active"),"section")),l=e.link||!!e.href;return{computedClass:a,isLink:l}},render(){let e="div";this.isLink?e="a":this.to&&(e=y("router-link"));const a={href:this.href,to:this.to};return t(e,ea({class:this.computedClass},a),{default:()=>{var l,o;return[(o=(l=this.$slots).default)==null?void 0:o.call(l)]}})}}),ni=P({props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,C(e.inverted,"inverted"),"breadcrumb"))}},render(){var e,a;const l=()=>{var o;return(o=this.sections)==null?void 0:o.map((s,d)=>{const m={active:s.active,href:s.href,link:s.link,to:s.to};return t(Ae,null,[t(tt,m,{default:()=>[s.content]}),this.sections.length!==d+1&&t(Lt,{icon:this.icon},{default:()=>[n(" / ")]})])})};return t("div",{class:this.computedClass},[((a=(e=this.$slots).default)==null?void 0:a.call(e))||l()])}}),g_={install(e){e.component("SuiBreadcrumb",ni),e.component("SuiBreadcrumbDivider",Lt),e.component("SuiBreadcrumbSection",tt)}},zi=P({props:{as:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,"icons"))}},render(){var e,a;let l=this.$props.as||"i";return X(l,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),h_={install(e){e.component("SuiIcon",W),e.component("SuiIconGroup",zi)}},__=()=>({icon:[Boolean,String]}),b_=e=>({iconClasses:H(()=>typeof e.icon=="boolean"&&e.icon||e.labeled&&e.icon?"icon":te({icon:e.icon&&!e.content}))}),v_=["right","left"],S_=()=>({labeled:[Boolean,String]}),y_=e=>({labeledClasses:H(()=>typeof e.labeled=="boolean"&&e.labeled?"labeled":v_.includes(e.labeled)?`${e.labeled} labeled`:"")}),w_=["double","elastic"],C_=()=>({loading:{type:[Boolean,String],validator:e=>w_.includes(e)||typeof e=="boolean"}}),A_=e=>({loadingClasses:H(()=>te(e.loading,{loading:e.loading}))}),z=P({props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,content:[String,Array],disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean,...__(),...S_(),...C_()},setup(e){const{iconClasses:a}=b_(e),{labeledClasses:l}=y_(e),{loadingClasses:o}=A_(e);return{classes:H(()=>te("ui",e.color,e.size,C(e.active,"active"),C(e.basic,"basic"),C(e.circular,"circular"),C(e.compact,"compact"),C(e.disabled,"disabled"),C(e.facebook,"facebook"),C(e.fluid,"fluid"),C(e.google,"google"),C(e.linkedin,"linkedin"),C(e.instagram,"instagram"),C(e.inverted,"inverted"),C(e.negative,"negative"),C(e.positive,"positive"),C(e.primary,"primary"),C(e.secondary,"secondary"),C(e.telegram,"telegram"),C(e.tertiary,"tertiary"),C(e.toggle,"toggle"),C(e.twitter,"twitter"),C(e.vk,"vk"),C(e.whatsapp,"whatsapp"),C(e.youtube,"youtube"),Me(e.attached,"attached"),Me(e.floated,"floated"),Ie(e.animated,"animated"),a.value,l.value,o.value,"button"))}},render(){var e,a;const l=this.attached?"div":this.as;return X(l,{class:this.classes,role:"button"},[typeof this.icon=="string"&&X(W,{name:this.icon}),this.content||((a=(e=this.$slots).default)==null?void 0:a.call(e))])}}),Ii=P({props:{hidden:Boolean,visible:Boolean},setup(e){return{computedClass:H(()=>te(C(e.hidden,"hidden"),C(e.visible,"visible"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),_t=P({props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,C(e.basic,"basic"),C(e.icon,"icon"),C(e.labeled,"labeled"),C(e.vertical,"vertical"),Me(e.attached,"attached"),ui(e.widths,""),"buttons"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),k_={install(e){e.component("SuiButton",z),e.component("SuiButtonContent",Ii),e.component("SuiButtonGroup",_t)}},x_=(e,a,l)=>{e.clickOutside=o=>{e===o.target||e.contains(o.target)||a.value(o,e)},document.body.addEventListener("click",e.clickOutside)},$_=(e,a,l)=>{document.body.removeEventListener("click",e.clickOutside)},vs={mounted:x_,unmounted:$_};function B_(e,a={}){const l=G(e.value?"open":"closed"),o=()=>l.value=e.value?"open":"closed";gt(e,f=>{l.value=f?"opening":"closing"});const s=f=>{f.addEventListener("animationend",o,!0)},d=f=>{f&&f.removeEventListener("animationend",o)},m=H((f="scale")=>{switch(l.value){case"opening":return`animating ${f} in`;case"open":return"visible active";case"closing":return`visible active animating ${f} out`;case"closed":return"hidden"}});return{setupAnimation:s,removeAnimation:d,computeAnimationClass:m}}const T_=P({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(e,{emit:a}){const l=G(!1),o=()=>{e.disabled||(l.value=!0)},s=()=>l.value=!1,d=()=>{e.disabled||a("select-day",e.date)},m=()=>{let r=new Date;return r.getFullYear()===e.date.year&&r.getMonth()===e.date.month&&r.getDate()===e.date.day},f=H(()=>te("link",C(l.value,"focus"),C(e.active&&!e.disabled,"active"),C(e.disabled,"adjacent disabled"),C(m(),"today")));return{onMouseEnter:o,onMouseLeave:s,onClick:d,computedClass:f}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Rt(this.onClick,["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),D_=P({name:"SuiCalendarDateTable",setup(){const{calendarDays:e,updateSelectMode:a,set:l,add:o,subtract:s,selectedDate:d,setSelectedDate:m,selectType:f,updateVisible:r,formatDate:c}=He(xi);return{calendarDays:e,isEqualDay:g=>{if(!d.value)return!1;const p=d.value;return p.getFullYear()===g.year&&p.getMonth()===g.month&&p.getDate()===g.day},onSelectDay:g=>{if(l(g.year,"years"),l(g.month,"months"),l(g.day,"days"),f.value==="date"){let p=new Date(g.year,g.month,g.day);m(p),r(!1);return}a("hour")},updateSelectMode:a,formatDate:c,add:o,subtract:s}},render(){const e=()=>this.calendarDays.map((a,l)=>t("tr",null,[a.map(o=>t(T_,{active:this.isEqualDay(o),date:o,disabled:!o.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[o.day]}))]));return t("table",{class:"ui celled center aligned unstackable table day seven column"},[t("thead",null,[t("tr",null,[t("th",{colspan:7},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"months")},[t("i",{class:"chevron right icon"},null)])])]),t("tr",null,[t("th",null,[n("S")]),t("th",null,[n("M")]),t("th",null,[n("T")]),t("th",null,[n("W")]),t("th",null,[n("T")]),t("th",null,[n("F")]),t("th",null,[n("S")])])]),t("tbody",null,[e()])])}}),we=P({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(e){const a=G(!1),l=()=>a.value=!0,o=()=>a.value=!1,s=H(()=>te("link",C(e.active,"active"),C(e.today,"today"),C(a.value,"focus")));return{onMouseEnter:l,onMouseLeave:o,computedClass:s}},render(){var e,a;return t("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:Rt(()=>this.$emit("click-cell",this.value),["stop"])},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),L_=P({name:"SuiCalendarMonthTable",setup(){const{state:e,set:a,add:l,subtract:o,selectedDate:s,updateSelectMode:d}=He(xi);return{state:e,add:l,subtract:o,updateSelectMode:d,isActive:m=>s.value?e.year===s.value.getFullYear()&&e.month===m:!1,isThisMonth:m=>{let f=new Date;return m===f.getMonth()&&e.year===f.getFullYear()},onClickCell:m=>{a(m,"months"),d("day")}}},render(){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=()=>Array(4).fill(0).map((l,o)=>t("tr",null,[t(we,{value:o*3,active:this.isActive(o*3),today:this.isThisMonth(o*3),onClickCell:this.onClickCell},{default:()=>[e[o*3]]}),t(we,{value:o*3+1,active:this.isActive(o*3+1),today:this.isThisMonth(o*3+1),onClickCell:this.onClickCell},{default:()=>[e[o*3+1]]}),t(we,{value:o*3+2,active:this.isActive(o*3+2),today:this.isThisMonth(o*3+2),onClickCell:this.onClickCell},{default:()=>[e[o*3+2]]})]));return t("table",{class:"ui celled center aligned unstackable table month three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"years")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[a()])])}}),I_=P({name:"SuiCalendarYearTable",setup(e){const{state:a,set:l,add:o,subtract:s,selectedDate:d,updateSelectMode:m}=He(xi),f=()=>o(10,"years"),r=()=>s(10,"years"),c=H(()=>Math.round(a.year/10)*10+1);return{updateSelectMode:m,moveNextTwelveYears:f,movePrevTwelveYears:r,headerStartYear:c,isActive:g=>d.value?g===d.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{l(g,"years"),m("day")}}},render(){return t("table",{class:"ui celled center aligned unstackable table year three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,n(" - "),this.headerStartYear+11]),t("span",{class:"prev link",onClick:this.movePrevTwelveYears},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.moveNextTwelveYears},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),t(we,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),t(we,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),t("tr",null,[t(we,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),t(we,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),t(we,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),t("tr",null,[t(we,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),t(we,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),t(we,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),t("tr",null,[t(we,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),t(we,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),t(we,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),E_=P({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:e,state:a,set:l,add:o,subtract:s,formatDate:d,selectedDate:m}=He(xi);return{updateSelectMode:e,formatDate:d,onPrevClick:()=>s(1,"days"),onNextClick:()=>o(1,"days"),onClickCell:f=>{l(f,"hours"),e("minute")},isActive:f=>{if(!m.value)return!1;let r=m.value.getFullYear(),c=m.value.getMonth(),g=m.value.getDate(),p=m.value.getHours();return a.year===r&&a.month===c&&a.day===g&&f===p}}},render(){return t("table",{class:"ui celled center aligned unstackable table hour four column"},[t("thead",null,[t("tr",null,[t("th",{colspan:4},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:this.onPrevClick},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:this.onNextClick},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[n("12:00 AM")]}),t(we,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[n("1:00 AM")]}),t(we,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[n("2:00 AM")]}),t(we,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[n("3:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[n("4:00 AM")]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[n("5:00 AM")]}),t(we,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[n("6:00 AM")]}),t(we,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[n("7:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[n("8:00 AM")]}),t(we,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[n("9:00 AM")]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[n("10:00 AM")]}),t(we,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[n("11:00 AM")]})]),t("tr",null,[t(we,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[n("12:00 PM")]}),t(we,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[n("1:00 PM")]}),t(we,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[n("2:00 PM")]}),t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[n("3:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[n("4:00 PM")]}),t(we,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[n("5:00 PM")]}),t(we,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[n("6:00 PM")]}),t(we,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[n("7:00 PM")]})]),t("tr",null,[t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[n("8:00 PM")]}),t(we,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[n("9:00 PM")]}),t(we,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[n("10:00 PM")]}),t(we,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[n("11:00 PM")]})])])])}});function Vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const R_=P({name:"SuiCalendarMinuteTable",setup(){const{state:e,set:a,add:l,subtract:o,formatDate:s,updateSelectMode:d,updateVisible:m,selectedDate:f}=He(xi);return{add:l,subtract:o,formatDate:s,updateSelectMode:d,getTimeLabel:r=>{let c=e.hour%12,g=e.hour>12?"PM":"AM",p=r.toString().padStart(2,"0");return e.hour===0?`12:${p} AM`:e.hour===12?`12:${p} PM`:`${c}:${p} ${g}`},onClickCell:r=>{a(r,"minutes"),f.value=new Date(e.year,e.month,e.day,e.hour,e.minute),m(!1)},isActive:r=>{if(!f.value)return!1;let c=f.value.getFullYear(),g=f.value.getMonth(),p=f.value.getDate(),h=f.value.getHours(),w=f.value.getMinutes();return e.year===c&&e.month===g&&e.day===p&&e.hour===h&&r===w}}},render(){let e,a,l,o,s,d,m,f,r,c,g,p;return t("table",{class:"ui celled center aligned unstackable table minute three column"},[t("thead",null,[t("tr",null,[t("th",{colspan:3},[t("span",{class:"link",onClick:Rt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),t("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[t("i",{class:"chevron left icon"},null)]),t("span",{class:"next link",onClick:()=>this.add(1,"days")},[t("i",{class:"chevron right icon"},null)])])])]),t("tbody",null,[t("tr",null,[t(we,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},Vt(e=this.getTimeLabel(0))?e:{default:()=>[e]}),t(we,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},Vt(a=this.getTimeLabel(5))?a:{default:()=>[a]}),t(we,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},Vt(l=this.getTimeLabel(10))?l:{default:()=>[l]})]),t("tr",null,[t(we,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},Vt(o=this.getTimeLabel(15))?o:{default:()=>[o]}),t(we,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},Vt(s=this.getTimeLabel(20))?s:{default:()=>[s]}),t(we,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},Vt(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),t("tr",null,[t(we,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},Vt(m=this.getTimeLabel(30))?m:{default:()=>[m]}),t(we,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},Vt(f=this.getTimeLabel(35))?f:{default:()=>[f]}),t(we,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},Vt(r=this.getTimeLabel(40))?r:{default:()=>[r]})]),t("tr",null,[t(we,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},Vt(c=this.getTimeLabel(45))?c:{default:()=>[c]}),t(we,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},Vt(g=this.getTimeLabel(50))?g:{default:()=>[g]}),t(we,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},Vt(p=this.getTimeLabel(55))?p:{default:()=>[p]})])])])}}),z_=P({name:"SuiCalendarBody",setup(){const e=G(null),{visible:a,selectMode:l}=He(xi),{setupAnimation:o,removeAnimation:s,computeAnimationClass:d}=B_(a);ki(()=>o(e.value)),Zi(()=>s(e.value));const m=H(()=>te("ui popup calendar","bottom left","transition",d.value));return{rootRef:e,computedClass:m,selectMode:l}},render(){const e=()=>{switch(this.selectMode){case"day":return t(D_,null,null);case"month":return t(L_,null,null);case"year":return t(I_,null,null);case"hour":return t(E_,null,null);case"minute":return t(R_,null,null)}};return t("div",{ref:a=>this.rootRef=a,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[e()])}}),P_=P({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(e){const{visible:a,updateVisible:l,updateSelectMode:o,set:s,state:d,formatCalendarDate:m}=He(xi);return{visible:a,formatCalendarDate:m,onClick:()=>{a.value||(o("day"),e.value&&(s(e.value.getFullYear(),"years"),s(e.value.getMonth(),"months"))),l(!a.value)}}},render(){return t("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),F_=(e,a)=>{let l=new Date;l.setDate(1),l.setMonth(a),l.setFullYear(e);let o=l.getDay();return o>=7?o-7:o},V_=(e,a)=>{let l,o;return a===0?(l=11,o=e-1):(l=a-1,o=e),32-new Date(o,l,32).getDate()},Nn=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e];function M_(){const e=G(!1),a=(A=!1)=>e.value=A,l=new Date;function o(A){if(!A)return;let $=A.getFullYear(),D=Nn(A.getMonth()),_=A.getDate(),v=A.getHours(),x=A.getMinutes(),T=v>11?"PM":"AM";v=v%12,v===0&&(v=12);let E=x.toString().padStart(2,"0");return`${D} ${_}, ${$} ${v}:${E} ${T}`}const s=G("default"),d=G("day");function m(A){d.value=A}const f=G(null),r=A=>{f.value=A},c=si({year:l.getFullYear(),month:l.getMonth(),day:l.getDate(),hour:l.getHours(),minute:l.getMinutes()}),g=(A,$)=>{switch($){case"years":c.year=A;break;case"months":c.month=A;break;case"days":c.day=A;break;case"hours":c.hour=A;break;case"minutes":c.minute=A}},p=(A,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()+A);break;case"months":D.setMonth(D.getMonth()+A);break;case"days":D.setDate(D.getDate()+A);break;case"hours":D.setHours(D.getHours()+A);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},h=(A,$)=>{let D=new Date(c.year,c.month,c.day,c.hour);switch($){case"years":D.setFullYear(D.getFullYear()-A);break;case"months":D.setMonth(D.getMonth()-A);break;case"days":D.setDate(D.getDate()-A);break;case"hours":D.setHours(D.getHours()-A);break}c.year=D.getFullYear(),c.month=D.getMonth(),c.day=D.getDate(),c.hour=D.getHours()},w=(A="default")=>A==="date"?`${Nn(c.month)} ${c.year}`:`${Nn(c.month)} ${c.day}, ${c.year}`,b=H(()=>{let A=c.month,$=c.year;A>11&&(A=A%11-1,$+=1);let D=[],_=F_($,A),v=32-new Date($,A,32).getDate(),x=V_($,A),T=1;for(let E=0;E<6;E++){let V=[];if(E===0){for(let F=x-_+1;F<=x;F++){let j=A===0?11:A-1,Q=A===0?$-1:$;V.push({day:F,month:j,year:Q,currentMonth:!1})}let M=7-V.length;for(let F=0;F<M;F++)V.push({day:T,month:A,year:$,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>v){let F=A===11?0:A+1,j=A===11?$+1:$;V.push({day:T-v,month:F,year:j,currentMonth:!1})}else V.push({day:T,month:A,year:$,currentMonth:!0});T++}D.push(V)}return D});return{visible:e,updateVisible:a,calendarDays:b,formatCalendarDate:o,selectMode:d,updateSelectMode:m,selectType:s,selectedDate:f,setSelectedDate:r,state:c,set:g,add:p,subtract:h,formatDate:w}}const xi=Symbol("useCalendar"),H_=P({directives:{clickoutside:vs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(e,{emit:a}){const l=M_();mt(xi,l);const{updateVisible:o,selectedDate:s}=l;return gt(s,d=>{a("update:modelValue",d)}),{updateVisible:o}},render(){return yi(t("div",{class:"ui calendar"},[t("div",{class:"ui input left icon"},[t(z_,null,null),t("i",{class:"calendar icon"},null),t(P_,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[mn("clickoutside"),()=>this.updateVisible(!1)]])}}),N_={install:e=>{e.component("SuiCalendar",H_)}},O_=P((e,{slots:a})=>{const l=H(()=>te("ui",e.color,C(e.centered,"centered"),C(e.fluid,"fluid"),C(e.horizontal,"horizontal"),C(e.link,"link"),C(e.raised,"raised"),"card"));return()=>{var o,s;return e.href||e.link?t("a",{class:l.value,href:e.href},[(o=a.href)==null?void 0:o.call(a)]):t("div",{class:l.value},[(s=a.default)==null?void 0:s.call(a)])}},{props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean}}),q_=P((e,{slots:a})=>{const l=H(()=>te(C(e.extra,"extra"),"content"));return()=>{var o,s,d,m;return t("div",{class:l.value},[e.header&&t("div",{class:"header"},[e.header]),a.header&&t("div",{class:"header"},[(o=a.header)==null?void 0:o.call(a)]),a.meta&&t("div",{class:"meta"},[(s=a.meta)==null?void 0:s.call(a)]),a.description&&t("div",{class:"description"},[(d=a.description)==null?void 0:d.call(a)]),(m=a.default)==null?void 0:m.call(a)])}},{props:{extra:Boolean,header:String}}),j_=P({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.textAlign,"aligned"),"description"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),G_=P({props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",C(e.centered,"centered"),C(e.doubling,"doubling"),C(e.inverted,"inverted"),C(e.stackable,"stackable"),ui(e.itemsPerRow,""),"cards"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),U_=P({props:{textAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.textAlign,"aligned"),"header"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Y_=P({render(){var e,a;return X("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),J_={install(e){e.component("SuiCard",O_),e.component("SuiCardContent",q_),e.component("SuiCardDescription",j_),e.component("SuiCardGroup",G_),e.component("SuiCardHeader",U_),e.component("SuiCardMeta",Y_)}},dd=P({emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(e,{emit:a}){const l=H(()=>te("ui",!e.label&&"fitted",C(e.disabled,"disabled"),C(e.indeterminate,"indeterminate"),C(e.radio,"radio"),C(e.readOnly,"read-only"),C(e.slider,"slider"),C(e.toggle,"toggle"),"checkbox")),o=H(()=>Array.isArray(e.modelValue)?e.modelValue.includes(e.value):e.modelValue);return{computedClass:l,checked:o,onClick:s=>{if(e.disabled||e.readOnly)return;let d;e.value?o.value?d=e.modelValue.filter(m=>e.value!==m):d=e.modelValue?[...e.modelValue,e.value]:[e.value]:d=!e.modelValue,a("change",s),a("click",s),a("update:modelValue",d)}}},render(){return t("div",{class:this.computedClass,onClick:this.onClick},[t("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),t("label",null,[this.label])])}}),W_={install(e){e.component("SuiCheckbox",dd)}},md=P({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let e=this.$props.as||"div";return this.src?X(e,{class:"avatar"},X("img",{src:this.$props.src})):t("div",{class:"avatar"},[this.$slots.default&&this.$slots.default()])}});function K_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const X_=P({name:"SuiComment",render(){let e;return t("div",{class:"comment"},[this.$slots.avatar&&t(md,{as:"a"},K_(e=this.$slots.avatar())?e:{default:()=>[e]}),t("div",{class:"content"},[this.$slots.author&&t("a",{class:"author"},[this.$slots.author()]),this.$slots.metadata&&t("div",{class:"metadata"},[this.$slots.metadata()]),this.$slots.text&&t("div",{class:"text"},[this.$slots.text()]),this.$slots.actions&&t("div",{class:"actions"},[this.$slots.actions()])]),this.$slots.default&&this.$slots.default()])}}),Q_=P({props:{active:Boolean},setup(e){const{active:a}=e;return{computedClass:H(()=>te(C(a,"active")))}},render(){var e,a,l,o;return this.computedClass?X("a",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("a",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),Z_=P({render(){var e,a;return X("div",{class:"actions"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),eb=P({props:{as:String},render(){var e,a;let l=this.$props.as||"div";return X(l,{class:"author"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),tb=P({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ib=P({props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.size,C(e.collapsed,"collapsed"),C(e.inverted,"inverted"),C(e.minimal,"minimal"),C(e.threaded,"threaded"),"comments"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ab=P({render(){var e,a;return X("div",{class:"metadata"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),lb=P({render(){var e,a;return X("div",{class:"text"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),nb={install(e){e.component("SuiComment",X_),e.component("SuiCommentAction",Q_),e.component("SuiCommentActions",Z_),e.component("SuiCommentAuthor",eb),e.component("SuiCommentAvatar",md),e.component("SuiCommentContent",tb),e.component("SuiCommentGroup",ib),e.component("SuiCommentMetadata",ab),e.component("SuiCommentText",lb)}},Ni=P({props:{fluid:Boolean,text:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te("ui",C(e.fluid,"fluid"),C(e.text,"text"),Ta(e.textAlign),"container"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ob={install(e){e.component("SuiContainer",Ni)}},Yt=P({props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",C(e.active,"active"),C(e.inverted,"inverted"),C(e.page,"page"),C(e.simple,"simple"),Me(e.verticalAlign,"aligned"),"dimmer"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sb=P((e,{slots:a})=>{const l=H(()=>te("ui",C(e.blurring,"blurring"),"dimmable","segment"));return()=>{var o;return t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}},{props:{blurring:Boolean}}),rb={install(e){e.component("SuiDimmer",Yt),e.component("SuiDimmerDimmable",sb)}},ub=["mini","tiny","small","medium","large","big","huge","massive"],hl=()=>({size:{type:String,validator:e=>ub.includes(e)}}),_l=e=>({sizeClass:H(()=>e.size)}),Ve=P({props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean,...hl()},setup(e){const{sizeClass:a}=_l(e);return{classes:H(()=>te("ui",a.value,C(e.clearing,"clearing"),C(e.fitted,"fitted"),C(e.hidden,"hidden"),C(e.horizontal,"horizontal"),C(e.inverted,"inverted"),C(e.section,"section"),C(e.vertical,"vertical"),Me(e.textAlign,"aligned"),"divider"))}},render(){var e,a;return X("div",{class:this.classes},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cb={install(e){e.component("SuiDivider",Ve)}},db=(e,a)=>e.map(l=>l[a]),pd=["top","middle","bottom"],mb={verticalAlign:{type:String,validator:e=>pd.includes(e)}};function pb(e){return{verticalAlignClass:H(()=>e.verticalAlign&&pd.includes(e.verticalAlign)?`${e.verticalAlign} aligned`:null)}}const fb=["left","right"],gb={floated:{type:String,validator:e=>fb.includes(e)}};function hb(e){return{floatedClass:H(()=>e.floated&&(e.floated==="left"||e.floated==="right")?`${e.floated} floated`:null)}}const O=P({props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>te("ui",e.size,e.color,C(e.basic,"basic"),C(e.circular,"circular"),C(e.empty,"empty"),C(e.floating,"floating"),C(e.horizontal,"horizontal"),C(!!e.icon&&a.default===void 0,"icon"),C(e.image,"image"),C(e.inverted,"inverted"),C(e.prompt,"prompt"),C(e.tag,"tag"),Me(e.attached,"attached"),Me(e.corner,"corner"),Ie(e.pointing,"pointing"),Ie(e.ribbon,"ribbon"),"label"));let o=e.as||"div";return e.icon?()=>{var s;return X(o,{class:l.value},[X(W,{name:e.icon}),(s=a.default)==null?void 0:s.call(a)])}:()=>{var s;return X(o,{class:l.value},(s=a.default)==null?void 0:s.call(a))}}}),Da=P({render(){var e,a;return t("div",{class:"detail"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),La=P({props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(e,{slots:a}){const l=H(()=>te("ui",e.color,e.size,C(e.basic,"basic"),C(e.circular,"circular"),C(e.tag,"tag"),"labels"));return()=>{var o;return X("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),_b={install(e){e.component("SuiLabel",O),e.component("SuiLabelDetail",Da),e.component("SuiLabelGroup",La)}},oe=P({props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...mb,...gb},setup(e,{slots:a}){const{verticalAlignClass:l}=pb(e),{floatedClass:o}=hb(e),s=H(()=>te("ui",e.size,l.value,o.value,C(e.avatar,"avatar"),C(e.bordered,"bordered"),C(e.centered,"centered"),C(e.circular,"circular"),C(e.disabled,"disabled"),C(e.fluid,"fluid"),C(e.hidden,"hidden"),C(e.inline,"inline"),C(e.rounded,"rounded"),Ie(e.spaced,"spaced"),"image"));if(e.as==="a"||e.as==="router-link"){let d=e.as;return e.as==="router-link"&&(d=y(e.as)),()=>{var m;return X(d,{class:s.value,href:e.href,target:e.target&&e.target},X("img",{src:e.src},(m=a.default)==null?void 0:m.call(a)))}}return e.wrapped?()=>{var d;return X("div",{class:s.value},X("img",{src:e.src},(d=a.default)==null?void 0:d.call(a)))}:e.label?()=>X("div",{class:s.value},[X("img",{src:e.src}),X(O,{...e.label})]):()=>t("img",{class:s.value,src:e.src},null)}}),xo=P({props:{size:String},setup(e,{slots:a}){const l=H(()=>te("ui",e.size,"images"));return()=>{var o;return X("div",{class:l.value},(o=a.default)==null?void 0:o.call(a))}}}),bb={install(e){e.component("SuiImage",oe),e.component("SuiImageGroup",xo)}},vb=P({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(e){return{computedClass:H(()=>te(C(e.filtered,"filtered"),C(!e.text&&!e.item||Array.isArray(e.item)&&e.item.length===0,"default"),"text"))}},render(){var e,a;let l;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:m}=this.item;l=t(Ae,null,[d&&t("i",{class:`${d} flag`},null),m])}else l=this.item;else l=this.text||this.placeholder;const o=typeof this.item=="object"?(e=this.item)==null?void 0:e.image:null,s=typeof this.item=="object"?(a=this.item)==null?void 0:a.label:null;return t(Ae,null,[t("div",{class:this.computedClass},[o&&t(oe,o,null),s&&t(O,s,null),l]),t("i",{class:`${this.icon} icon`},null),this.$props.clearable&&t("i",{class:"remove icon",onClick:Rt(()=>this.$emit("remove"),["stop"])},null)])}}),Sb=e=>{const a=si({visible:!1,animating:!1,direction:"down",multiple:e.multiple});return gt(()=>a.visible,()=>{a.animating=!0,setTimeout(()=>a.animating=!1,200)}),{state:a,show:()=>!a.animating&&(a.visible=!0),hide:()=>{a.animating||(a.visible=!1)}}};function yb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const wb=P({directives:{clickoutside:vs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(e,{emit:a}){const l=Sb(e);mt("useDropdown",l);const{state:o,show:s,hide:d}=l,m=H(()=>te("ui",C(e.button,"button"),C(e.clearable,"clearable"),C(e.compact,"compact"),C(e.floating,"floating"),C(e.fluid,"fluid"),C(!!e.icon,"icon"),C(e.inline,"inline"),C(e.item,"item"),C(e.labeled,"labeled"),C(e.multiple,"multiple"),C(e.search,"search"),C(e.scrolling,"scrolling"),C(e.selection,"selection"),C(e.simple,"simple"),Ie(e.pointing,"pointing"),"dropdown",C(o.visible,"active visible"),C(o.direction==="up","upward"))),f=()=>{var $;if(o.visible)return d();($=h.value)==null||$.focus(),s()},r=()=>{e.search&&h.value&&h.value.focus(),s()},c=()=>d(),g=G(""),p=H(()=>{const $=g.value.toLowerCase();return e.options.filter(D=>{const _=typeof D=="object"?D.text:D,v=_.toLowerCase().includes($);if(!e.multiple)return v;if(Array.isArray(e.modelValue)){const x=typeof D=="object"?db(e.modelValue,"text").includes(_):e.modelValue.includes(_);return v&&!x}return v})}),h=G(null),w=$=>g.value=$.target.value,b=$=>{var D;if(g.value="",e.search&&((D=h.value)==null||D.focus()),e.multiple){let _=Array.isArray(e.modelValue)?[...e.modelValue,$]:[$];return a("update:modelValue",_)}return a("update:modelValue",$)},A=$=>{if(Array.isArray(e.modelValue)){const D=e.modelValue.findIndex(_=>_===$);if(D>-1){let _=Object.assign(e.modelValue);_.splice(D,1),a("update:modelValue",_)}}};return mt("selection",e.selection),{computedClass:m,onClick:f,openMenu:r,closeMenu:c,filteredText:g,filteredOptions:p,inputRef:h,onInput:w,onSelect:b,removeItem:A}},render(){var e,a;const l=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(m=>typeof m=="object"?t("a",{class:"ui label"},[m.flag&&t("i",{class:`${m.flag} flag`},null),m.text,t("i",{class:"delete icon",onClick:Rt(()=>this.removeItem(m),["stop"])},null)]):t("a",{class:"ui label"},[m,t("i",{class:"delete icon",onClick:Rt(()=>this.removeItem(m),["stop"])},null)]))},o=()=>this.filteredOptions.filter(m=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(m):!0).map(m=>t(fd,{item:m,active:this.$props.modelValue&&typeof m=="object"?m.text===this.$props.modelValue.text:m===this.$props.modelValue,text:typeof m=="object"?m.text:m,flag:typeof m=="object"&&Object.keys(m).includes("flag")?m.flag:"",image:m.image,label:m.label,disabled:m.disabled,onSelect:this.onSelect},null)),s=()=>{let m={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return t(vb,ea(m,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let m;return t(gd,{search:this.$props.searchInMenu,onSearch:this.onInput},yb(m=o())?m:{default:()=>[m]})};return yi(t("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&l(),this.search&&t("input",{ref:m=>this.inputRef=m,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:m=>this.onInput(m)},null),this.search&&this.multiple&&t("span",{class:"sizer"},null),s(),((a=(e=this.$slots).default)==null?void 0:a.call(e))||d()]),[[mn("clickoutside"),this.closeMenu]])}}),fd=P({emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(e,{emit:a}){const{state:l,hide:o}=He("useDropdown");return{computedClass:H(()=>te(C(e.active,"active"),C(e.disabled,"disabled"),"item")),onClick:()=>{l.multiple||o(),a("select",e.item?e.item:e.text)}}},render(){return t("div",{class:this.computedClass,onClick:Rt(this.onClick,["stop"])},[this.flag&&t("i",{class:`${this.flag} flag`},null),this.icon&&t("i",{class:`${this.icon} icon`},null),this.image&&t(oe,this.image,null),this.label&&t(O,this.label,null),this.description&&t("span",{class:"description"},[this.description]),this.text])}}),gd=P({emits:["search"],props:{search:Boolean,onSearch:Function},setup(e,{emit:a,slots:l}){const{state:o}=He("useDropdown"),s=G(null),d=H(()=>{let f=()=>o.visible?`animating slide ${o.direction} in visible`:`animating slide ${o.direction} out visible`;return te("menu","transition",C(o.visible,"visible"),C(!o.visible&&!o.animating,"hidden"),C(o.animating,f()))});gt(()=>o.visible,f=>{if(!f||!s.value)return;let r=s.value.parentElement;const{top:c,height:g}=r==null?void 0:r.getBoundingClientRect(),p=c-m.value.length*37,h=document.documentElement.clientHeight-c-g-m.value.length*37;o.direction=p>h?"up":"down"});const m=H(()=>{var f;let r=[],c=(f=l.default)==null?void 0:f.call(l);return c&&c.forEach(g=>{g.type.name==="SuiSelectItem"&&r.push(g)}),r});return{container:s,computedClass:d,onSearchInput:f=>a("search",f)}},render(){var e,a,l,o;const s=()=>t(Ae,null,[t("div",{class:"ui left icon input",onClick:Rt(()=>{},["stop"])},[t("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),t("i",{class:"search icon"},null)]),t("div",{class:"ui divider"},null)]);return t("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&t("div",{class:"header"},[(a=(e=this.$slots).header)==null?void 0:a.call(e)]),this.$props.search&&s(),(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),Cb={install(e){e.component("SuiDropdown",wb),e.component("SuiDropdownItem",fd),e.component("SuiDropdownMenu",gd)}},Ab=P({props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(e){const a=G(e.active),l=()=>{a.value=!a.value},o=()=>e.source==="youtube"?[`//www.youtube.com/embed/${e.id}`,"?autohide=true",`&amp;autoplay=${e.autoplay}`,"&amp;jsapi=false"].join(""):e.url,s=H(()=>te("ui",e.aspectRatio,C(a.value,"active"),"embed"));return{active:a,getSrc:o,clickHandler:l,computedClass:s}},render(){let e=[X("i",{class:"video play icon"}),X("img",{class:"placeholder",src:this.placeholder})];return this.active&&e.push(X("div",{class:"embed"},X("iframe",{src:this.getSrc()}))),X("div",{class:this.computedClass,onClick:this.clickHandler},e)}}),kb={install(e){e.component("SuiEmbed",Ab)}},It=P({props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(e){return{computedClass:H(()=>te(e.size,C(e.disabled,"disabled"),C(e.link,"link"),C(e.loading,"loading")))}},render(){return this.computedClass?X("em",{class:this.computedClass,"data-emoji":this.$props.name}):X("em",{"data-emoji":this.$props.name})}}),xb={install(e){e.component("SuiEmoji",It)}},$b=P({props:{inverted:Boolean,size:String},setup(e){return{computedClass:H(()=>te("ui",e.size,C(e.inverted,"inverted"),"feed"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Bb=P({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Tb=P({render(){var e,a;return X("div",{class:"date"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Db=P({render(){var e,a;return t("div",{class:"event"},[this.$slots.label&&t("div",{class:"label"},[this.$slots.label()]),(this.$slots.summary||this.$slots.meta)&&t("div",{class:"content"},[this.$slots.summary&&t("div",{class:"summary"},[this.$slots.summary()]),this.$slots.extraText&&t("div",{class:"extra text"},[this.$slots.extraText()]),this.$slots.extraImages&&t("div",{class:"extra images"},[this.$slots.extraImages()]),this.$slots.meta&&t("div",{class:"meta"},[this.$slots.meta()])]),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Lb=P({props:{images:Boolean,text:Boolean},setup(e){const{images:a,text:l}=e;return{computedClass:H(()=>te(C(a,"images"),C(l,"text"),"extra"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ib=P({render(){var e,a;return X("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Eb=P({render(){var e,a;return X("a",{class:"like"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Rb=P({render(){var e,a;return X("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),zb=P({render(){var e,a;return X("div",{class:"summary"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Pb=P({render(){var e,a;return X("a",{class:"user"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Fb={install(e){e.component("SuiFeed",$b),e.component("SuiFeedContent",Bb),e.component("SuiFeedDate",Tb),e.component("SuiFeedEvent",Db),e.component("SuiFeedExtra",Lb),e.component("SuiFeedLabel",Ib),e.component("SuiFeedLike",Eb),e.component("SuiFeedMeta",Rb),e.component("SuiFeedSummary",zb),e.component("SuiFeedUser",Pb)}},Jt=P(e=>{const{sizeClass:a}=_l(e),l=H(()=>te(a.value,e.name,"flag"));return()=>t("i",{class:l.value},null)},{props:{name:String,...hl()}}),Vb={install(e){e.component("SuiFlag",Jt)}},Nt=P({props:{error:Boolean,info:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(e){return{classes:H(()=>te("ui",e.size,C(e.error,"error"),C(e.info,"info"),C(e.inverted,"inverted"),C(e.loading,"loading"),C(e.reply,"reply"),C(e.success,"success"),C(e.unstackable,"unstackable"),C(e.warning,"warning"),"form"))}},render(){var e,a;return t("form",{class:this.classes},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Vr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function Mb(e){return{widthClass:H(()=>Number(e.width)>0?`${Vr[Number(e.width)-1]} wide`:typeof e.width=="string"||Vr.includes(e.width)?`${e.width} wide`:null)}}const at=P({emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(e,{emit:a}){const{widthClass:l}=Mb(e),o=H(()=>te(C(e.disabled,"disabled"),C(e.error,"error"),C(e.inline,"inline"),C(e.required,"required"),l.value,"field")),s=e.type||"text";return{computedClass:o,inputType:s,onInput:d=>a("update:modelValue",d.target.value)}},render(){var e,a;return this.label?t("div",{class:this.computedClass},[t("label",null,[this.label]),t("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ss=P({props:{widths:String},setup(e){return{computedClass:H(()=>te(Me(e.widths,"width"),"fields"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),$o=P({props:{label:String,placeholder:String,rows:[Number,String]},render(){return this.label?t("div",{class:"field"},[t("label",null,[this.label]),t("textarea",{placeholder:this.placeholder,rows:this.rows},null)]):t("div",{class:"field"},[t("textarea",{placeholder:this.placeholder,rows:this.rows},null)])}}),Hb={install(e){e.component("SuiForm",Nt),e.component("SuiFormField",at),e.component("SuiFormGroup",Ss),e.component("SuiFormTextarea",$o)}},bl=P({props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(e){return{computedClass:H(()=>te("ui",e.container&&"container",C(e.centered,"centered"),C(e.compact,"compact"),C(e.doubling,"doubling"),C(e.inverted,"inverted"),C(e.stackable,"stackable"),Me(e.reversed,"reversed"),Me(e.verticalAlign,"aligned"),Ie(e.celled,"celled"),Ie(e.divided,"divided"),Ie(e.padded,"padded"),Ie(e.relaxed,"relaxed"),Ta(e.textAlign),ui(e.columns,"column"),"grid"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Tt=P({props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(e){return{computedClass:H(()=>te(e.color,Me(e.floated,"floated"),Me(e.only,"only"),Ta(e.textAlign),ui(e.width,"wide"),Pa(e.mobile,"mobile"),Pa(e.tablet,"tablet"),Pa(e.computer,"computer"),Pa(e.largeScreen,"large screen"),Pa(e.widescreen,"widescreen"),"column"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Bo=P({props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(e){return{computedClass:H(()=>te(e.color,C(e.centered,"centered"),C(e.stretched,"stretched"),Me(e.only,"only"),ui(e.columns,"column"),Ta(e.textAlign),"row"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Nb={install(e){e.component("SuiGrid",bl),e.component("SuiGridColumn",Tt),e.component("SuiGridRow",Bo)}},Ji=P({props:{as:String},setup(e){return{elementType:e.as||"div"}},render(){var e,a;return X(this.elementType,{class:"sub header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),fe=P({components:{HeaderSubheader:Ji},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,primary:Boolean,secondary:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(e){const a=e.as||"div",l=H(()=>te("ui",e.color,e.size,C(e.primary,"primary"),C(e.secondary,"secondary"),C(e.block,"block"),C(e.disabled,"disabled"),C(e.dividing,"dividing"),C(e.icon,"icon"),C(e.image,"image"),C(e.inverted,"inverted"),C(e.sub,"sub"),Me(e.floated,"floated"),Ie(e.attached,"attached"),Ta(e.textAlign),"header"));return{elementType:a,computedClass:l}},render(){var e,a;let l=[];return this.content&&l.push(this.content),this.subheader&&l.push(X(Ji,{},this.subheader)),l.length>0?X(this.elementType,{class:this.computedClass},l):X(this.elementType,{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ys=P({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ob={install(e){e.component("SuiHeader",fe),e.component("SuiHeaderContent",ys),e.component("SuiHeaderSubheader",Ji)}},Ze=P({emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(e,{emit:a}){const l=H(()=>typeof e.icon=="string"||e.loading),o=H(()=>!!e.label||e.labeled),s=H(()=>te("ui",e.size,e.action&&"action",C(e.disabled,"disabled"),C(e.error,"error"),C(e.fluid,"fluid"),C(e.focus,"focus"),e.iconPosition,C(l.value,"icon"),C(e.inverted,"inverted"),C(e.loading,"loading"),C(e.transparent,"transparent"),C(o.value,"labeled"),"input")),d=m=>a("update:modelValue",m.target.value);return()=>t("div",{class:s.value},[e.label&&t(O,null,{default:()=>[e.label]}),t("input",{type:e.type||"text",placeholder:e.placeholder,value:e.modelValue,onInput:m=>d(m)},null),l.value&&t(W,{name:e.icon||"spinner"},null),e.action&&t(z,null,{default:()=>[e.action]})])}}),qb={install(e){e.component("SuiInput",Ze)}},jb=P({render(){var e,a;return X("div",{class:"item"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Gb=P({props:{verticalAlign:String},setup(e){const{verticalAlign:a}=e;return{computedClass:H(()=>te(Me(a,"aligned"),"content"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Ub=P({render(){var e,a;return X("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Yb=P({render(){var e,a;return X("div",{class:"extra"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Jb=P({props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",C(e.divided,"divided"),C(e.inverted,"inverted"),C(e.link,"link"),C(e.unstackable,"unstackable"),Ie(e.relaxed,"relaxed"),"items"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Wb=P({props:{as:String},render(){var e,a;let l=this.$props.as||"div";return X(l,{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Kb=P({props:{size:String},setup(e){return{computedClass:H(()=>te(e.size,"image"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Xb=P({render(){var e,a;return X("div",{class:"meta"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Qb={install(e){e.component("SuiItem",jb),e.component("SuiItemContent",Gb),e.component("SuiItemDescription",Ub),e.component("SuiItemExtra",Yb),e.component("SuiItemGroup",Jb),e.component("SuiItemHeader",Wb),e.component("SuiItemImage",Kb),e.component("SuiItemMeta",Xb)}},hd=P((e,{slots:a})=>{const{sizeClass:l}=_l(e),o=H(()=>te("ui",C(e.animated,"animated"),C(e.bulleted,"bulleted"),C(e.celled,"celled"),C(e.divided,"divided"),C(e.horizontal,"horizontal"),C(e.inverted,"inverted"),C(e.link,"link"),C(e.ordered,"ordered"),C(e.relaxed,"relaxed"),C(e.selection,"selection"),Me(e.verticalAlign,"aligned"),Me(e.floated,"floated"),l.value,"list"));let s=e.as||"div";return()=>{var d;return X(s,{class:o.value},(d=a.default)==null?void 0:d.call(a))}},{props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String,...hl()}}),Ha=P((e,{slots:a})=>{const l=H(()=>te(C(e.active,"active"),C(e.disabled,"disabled"),"item"));let o=e.as||"div";return()=>{var s;return X(o,{class:l.value},(s=a.default)==null?void 0:s.call(a))}},{props:{active:Boolean,as:String,disabled:Boolean}}),Zb=P({setup(e,{slots:a}){return()=>{var l;return X(W,{...e},(l=a.default)==null?void 0:l.call(a))}}}),ev=P({props:{verticalAlign:String},setup(e){return{computedClass:H(()=>te(Me(e.verticalAlign,"aligned"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),tv=P({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return X(e.as,{class:"header"},(l=a.default)==null?void 0:l.call(a))}}}),iv=P({props:{as:{type:String,default:"div",validator:e=>["div","a"].includes(e)}},setup(e,{slots:a}){return()=>{var l;return X(e.as,{class:"description"},(l=a.default)==null?void 0:l.call(a))}}}),av=P({render(){var e,a;return t("div",{class:"list"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),lv={install(e){e.component("SuiList",hd),e.component("SuiListItem",Ha),e.component("SuiListIcon",Zb),e.component("SuiListContent",ev),e.component("SuiListHeader",tv),e.component("SuiListDescription",iv),e.component("SuiListList",av)}},_d=P({props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,C(e.borderless,"borderless"),C(e.compact,"compact"),C(e.fixed,"fixed"),C(e.fluid,"fluid"),C(e.inverted,"inverted"),C(e.pagination,"pagination"),C(e.pointing,"pointing"),C(e.secondary,"secondary"),C(e.stackable,"stackable"),C(e.text,"text"),C(e.vertical,"vertical"),Ie(e.attached,"attached"),Ie(e.floated,"floated"),Ie(e.icon,"icon"),Ie(e.tabular,"tabular"),ui(e.widths,"item"),"menu"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),nv=P({props:{as:String,content:String},setup(e,{slots:a}){let l=e.as||"div";return()=>t(l,{class:"header"},{default:()=>{var o;return[e.content||((o=a.default)==null?void 0:o.call(a))]}})}}),To=P({props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(e,{slots:a}){let l=e.as||"a";e.header&&(l="div"),e.as==="router-link"&&(l=y(e.as));const o=H(()=>te(e.color,e.position,C(e.action,"action"),C(e.active,"active"),C(e.browse,"browse"),C(e.disabled,"disabled"),C(e.header,"header"),C(e.icon,"icon"),C(e.link,"link"),Ie(e.fitted,"fitted"),"item"));return()=>t(l,{class:o.value},{default:()=>{var s;return[e.name||((s=a.default)==null?void 0:s.call(a))]}})}}),ov=P({props:{position:String},setup(e){const{position:a}=e;return{computedClass:H(()=>te(a,"menu"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),sv={install(e){e.component("SuiMenu",_d),e.component("SuiMenuHeader",nv),e.component("SuiMenuItem",To),e.component("SuiMenuMenu",ov)}},An=P({props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,C(e.compact,"compact"),C(e.error,"error"),C(e.floating,"floating"),C(e.hidden,"hidden"),C(e.icon,"icon"),C(e.info,"info"),C(e.negative,"negative"),C(e.positive,"positive"),C(e.success,"success"),C(e.visible,"visible"),C(e.warning,"warning"),Ie(e.attached,"attached"),"message"))}},render(){var e,a;return t("div",{class:this.computedClass},[(this.header||this.content)&&t(bd,null,{default:()=>[t(vd,null,{default:()=>[this.header]}),t("p",null,[this.content])]}),(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),bd=P({render(){var e,a;return X("div",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),vd=P({render(){var e,a;return X("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),rv=P({render(){var e,a;return X("li",{class:"content"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),uv=P({render(){var e,a;return X("ul",{class:"list"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),cv={install(e){e.component("SuiMessage",An),e.component("SuiMessageContent",bd),e.component("SuiMessageHeader",vd),e.component("SuiMessageItem",rv),e.component("SuiMessageList",uv)}};function dv(e){return Oo()?(ou(e),!0):!1}function Sd(e){return typeof e=="function"?e():u(e)}const yd=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mv=Object.prototype.toString,pv=e=>mv.call(e)==="[object Object]",Ml=()=>{},fv=gv();function gv(){var e,a;return yd&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((a=window==null?void 0:window.navigator)==null?void 0:a.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Na(e){var a;const l=Sd(e);return(a=l==null?void 0:l.$el)!=null?a:l}const wd=yd?window:void 0;function On(...e){let a,l,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,s]=e,a=wd):[a,l,o,s]=e,!a)return Ml;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const d=[],m=()=>{d.forEach(g=>g()),d.length=0},f=(g,p,h,w)=>(g.addEventListener(p,h,w),()=>g.removeEventListener(p,h,w)),r=gt(()=>[Na(a),Sd(s)],([g,p])=>{if(m(),!g)return;const h=pv(p)?{...p}:p;d.push(...l.flatMap(w=>o.map(b=>f(g,w,b,h))))},{immediate:!0,flush:"post"}),c=()=>{r(),m()};return dv(c),c}let Mr=!1;function hv(e,a,l={}){const{window:o=wd,ignore:s=[],capture:d=!0,detectIframe:m=!1}=l;if(!o)return Ml;fv&&!Mr&&(Mr=!0,Array.from(o.document.body.children).forEach(g=>g.addEventListener("click",Ml)),o.document.documentElement.addEventListener("click",Ml));let f=!0;const r=g=>s.some(p=>{if(typeof p=="string")return Array.from(o.document.querySelectorAll(p)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Na(p);return h&&(g.target===h||g.composedPath().includes(h))}}),c=[On(o,"click",g=>{const p=Na(e);if(!(!p||p===g.target||g.composedPath().includes(p))){if(g.detail===0&&(f=!r(g)),!f){f=!0;return}a(g)}},{passive:!0,capture:d}),On(o,"pointerdown",g=>{const p=Na(e);f=!r(g)&&!!(p&&!g.composedPath().includes(p))},{passive:!0}),m&&On(o,"blur",g=>{setTimeout(()=>{var p;const h=Na(e);((p=o.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(h!=null&&h.contains(o.document.activeElement))&&a(g)},0)})].filter(Boolean);return()=>c.forEach(g=>g())}function Cd(e,a="scale"){const l=G(e.modelValue?"open":"closed");return gt(()=>e.modelValue,o=>{l.value=o?"opening":"closing"}),{animationClasses:H(()=>{switch(l.value){case"opening":return`animating ${a} in`;case"open":return"visible active";case"closing":return`visible active animating ${a} out`;case"closed":return"hidden"}}),isClosed:H(()=>l.value==="closed"),onAnimationEnd:()=>l.value=e.modelValue?"open":"closed"}}const _v=P({props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(e){const{animationClasses:a,isClosed:l,onAnimationEnd:o}=Cd(e,"fade"),s=H(()=>te("ui","page modals dimmer transition",C(e.inverted,"inverted"),a.value)),d=H(()=>({display:l.value?"none !important":"flex !important",animationDuration:"500ms"})),m=H(()=>te("dimmable","dimmed",C(e.blurring,"blurring")));return gt(()=>e.modelValue,f=>{if(f){document.body.classList.add(...m.value.split(" "));return}document.body.classList.remove(...m.value.split(" "))}),{className:s,style:d,onAnimationEnd:o}},render(){var e,a;return t("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),ws=P({props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(e,{emit:a}){const l=G(),{animationClasses:o,isClosed:s}=Cd(e),d=H(()=>te("ui",e.size,C(e.basic,"basic"),C(e.overlay,"overlay"),C(e.fullscreen,"fullscreen"),"modal","transition",o.value)),m=H(()=>({display:s.value?"none !important":"block !important",animationDuration:"500ms"})),f=()=>a("update:modelValue",!1);return hv(l,()=>e.closable&&a("update:modelValue",!1)),{computedClass:d,style:m,close:f,modalRef:l}},render(){return t(_n,{to:"body"},{default:()=>[t(_v,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var e,a;return[t("div",{class:this.computedClass,style:this.style,onClick:l=>l.stopPropagation(),ref:l=>this.modalRef=l},[this.closeIcon&&t("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(a=(e=this.$slots).default)==null?void 0:a.call(e)])]}})]})}}),Cs=P({render(){var e,a;return t("div",{class:"actions"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),As=P({props:{image:Boolean,scrolling:Boolean},setup(e){return{computedClass:H(()=>te(C(e.image,"image"),C(e.scrolling,"scrolling"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Ad=P({render(){var e,a;return X("div",{class:"description"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),ks=P({render(){var e,a;return X("div",{class:"header"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),bv={install(e){e.component("SuiModal",ws),e.component("SuiModalActions",Cs),e.component("SuiModalContent",As),e.component("SuiModalDescription",Ad),e.component("SuiModalHeader",ks)}},vv=e=>{const a=G(!1),l=ao(e,"position"),o=G(null),s=ao(e,"trigger"),d=()=>{a.value=!0,$a(()=>f())},m=()=>{a.value=!1},f=()=>{if(!o.value||!s.value)return;let r=0,c=0;const g=o.value,p=s.value.$el;g.style.transform=`translate(${r}px, ${c}px)`;const{top:h,left:w,width:b,height:A}=p.getBoundingClientRect(),$=g.getBoundingClientRect(),{pageXOffset:D,pageYOffset:_}=window;if(l.value.includes("top")?(r=D+w,c=_+h-g.offsetTop-g.offsetHeight):(r=w,c=h+A-$.top),l.value.includes("right")){const v=b-$.width;r=w+v}if(l.value.includes("center")){const v=b/2-$.width/2;r=w+v}l.value==="right center"&&(r=w+b,c=h+A/2-$.top-$.height/2),l.value==="left center"&&(r=w-$.width,c=h+A/2-$.top-$.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${r}px, ${c}px)`};return{show:a,showPopup:d,hidePopup:m,placement:l,popupRef:o,triggerRef:s}},Sv=P({props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(e,{slots:a}){const{show:l,showPopup:o,hidePopup:s,popupRef:d,triggerRef:m}=vv(e);as(()=>{var h,w,b;(h=m.value)!=null&&h.$el&&((w=m.value)==null||w.$el.addEventListener("mouseenter",o),(b=m.value)==null||b.$el.addEventListener("mouseleave",s))});const f=G(l.value?"open":"close");H(()=>f.value!=="closed"),gt(()=>l.value,h=>{f.value=h?"opening":"closing"});const r=(h,w="scale")=>{switch(h){case"opening":return`animating ${w} in`;case"open":return"visible active";case"closing":return`visible active animating ${w} out`;case"closed":return"hidden"}},c=()=>f.value=l.value?"open":"closed";ki(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",c,!0)}),Zi(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",c)});const g={position:"initial",animationDuration:"200ms"},p=H(()=>te("ignored ui",e.position,e.size,C(e.basic,"basic"),C(e.flowing,"flowing"),C(e.inverted,"inverted"),Ie(e.wide,"wide"),"popup transition",r(f.value,"scale")));return()=>t(_n,{to:"body"},{default:()=>{var h;return[t("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[t("div",{class:p.value,style:g},[e.header&&t("div",{class:"header"},[e.header]),t("div",{class:"content"},[e.content?e.content:(h=a.default)==null?void 0:h.call(a)])])])]}})}}),yv={install(e){e.component("SuiPopup",Sv)}},wv=["top","bottom","left"],xs=()=>({attached:{type:String,validator:e=>wv.includes(e)}}),kd=e=>({attachedClasses:H(()=>te(e.attached,{attached:e.attached}))}),Cv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],$s=()=>({color:{type:String,validator:e=>Cv.includes(e)}}),Bs=e=>({colorClasses:H(()=>te(e.inverted&&"inverted",e.color))}),Do=P({props:{active:Boolean,disabled:Boolean,error:Boolean,indeterminate:[Boolean,String],indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...xs(),...$s()},setup(e,{slots:a}){const{attachedClasses:l}=kd(e),{colorClasses:o}=Bs(e),s=H(()=>te("ui",o.value,e.size,C(e.active||e.indicating,"active"),C(e.disabled,"disabled"),C(e.error,"error"),C(e.indicating,"indicating"),C(e.success,"success"),C(e.warning,"warning"),Ie(e.indeterminate,"indeterminate"),l.value,"progress")),d=H(()=>te(Ie(e.progress,"progress"))),m=H(()=>e.progress!=="centered"?{}:{right:0});return()=>{var f;return t("div",{class:s.value,"data-percent":e.percent},[t("div",{class:"bar",style:`width: ${e.percent}%; transition-duration: 300ms;`},[e.progress&&t("div",{class:d.value,style:m.value},[((f=a.default)==null?void 0:f.call(a))||`${e.percent}%`])]),e.label&&t("div",{class:"label"},[e.label])])}}}),Av={install(e){e.component("SuiProgress",Do)}},kv=P({props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(e){return{computedClass:H(()=>te("ui",e.position,e.size,C(e.attached,"attached"),C(e.dividing,"dividing"),C(e.internal,"internal"),Ie(e.close,"close"),"rail"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),xv={install(e){e.component("SuiRail",kv)}},$v=P({props:{icon:String,index:{type:Number,default:0}},setup(e){const a=He("rating",G(0)),l=He("updateRating"),o=He("selectedIndex",G(0)),s=He("updateSelectedIndex"),d=He("clearable",!1),m=He("disabled",!1),f=()=>{if(!m){if(d&&e.index===a.value){l(0),s(0);return}l(e.index)}},r=()=>{m||s(e.index)},c=H(()=>e.index<=a.value),g=H(()=>e.index<=o.value),p=H(()=>te(e.icon,C(c.value,"active"),C(g.value,"selected"),"icon"));return()=>t("i",{class:p.value,onClick:()=>f(),onMouseenter:()=>r()},null)}}),Bv=P({props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(e,{emit:a}){const l=G(e.modelValue||e.defaultRating),o=G(!1),s=G(0),d=g=>{l.value=g,a("update:modelValue",g),a("change",g)},m=g=>s.value=g,f=()=>{e.disabled||(o.value=!0)},r=()=>{e.disabled||(o.value=!1,m(0))},c=H(()=>te("ui",e.color,e.icon,e.size,C(e.disabled,"disabled"),"rating",C(o.value,"selected")));return mt("rating",l),mt("updateRating",d),mt("selectedIndex",s),mt("updateSelectedIndex",m),mt("clearable",e.clearable),mt("disabled",e.disabled),()=>t("div",{class:c.value,onMouseenter:()=>f(),onMouseleave:()=>r()},[[...Array(e.maxRating)].map((g,p)=>t($v,{icon:e.icon,index:p+1},null))])}}),Tv={install(e){e.component("SuiRating",Bv)}},ta=P({props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.animated,C(e.active,"active"),C(e.disabled,"disabled"),C(e.instant,"instant"),"reveal"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),zt=P({props:{visible:Boolean,hidden:Boolean},setup(e){return{computedClass:H(()=>te("ui",C(e.visible,"visible"),C(e.hidden,"hidden"),"content"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Dv={install(e){e.component("SuiReveal",ta),e.component("SuiRevealContent",zt)}},Lv=P({props:{icon:String,placeholder:String},setup(e){return()=>t("div",{class:"ui search"},[t("div",{class:"ui icon input"},[t("input",{type:"text",class:"prompt",placeholder:e.placeholder},null),t("i",{class:"search icon"},null)]),t("div",{class:"results"},null)])}}),Iv={install(e){e.component("SuiSearch",Lv)}},N=P((e,{slots:a})=>{const{colorClasses:l}=Bs(e),{sizeClass:o}=_l(e),s=H(()=>te("ui",l.value,o.value,C(e.basic,"basic"),C(e.circular,"circular"),C(e.clearing,"clearing"),C(e.compact,"compact"),C(e.disabled,"disabled"),C(e.inverted,"inverted"),C(e.loading,"loading"),C(e.piled,"piled"),C(e.placeholder,"placeholder"),C(e.raised,"raised"),C(e.secondary,"secondary"),C(e.stacked,"stacked"),C(e.tertiary,"tertiary"),C(e.vertical,"vertical"),Me(e.floated,"floated"),Me(e.textAlign,"aligned"),Ie(e.attached,"attached"),Ie(e.fitted,"fitted"),Ie(e.padded,"padded"),Ie(e.scrolling,"scrolling"),"segment"));return()=>{var d;return t("div",{class:s.value},[(d=a.default)==null?void 0:d.call(a)])}},{props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,scrolling:[Boolean,String],secondary:Boolean,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean,...$s(),...hl()}}),Ct=P((e,{slots:a})=>{const{sizeClass:l}=_l(e),o=H(()=>te("ui",l.value,C(e.basic,"basic"),C(e.compact,"compact"),C(e.horizontal,"horizontal"),C(e.piled,"piled"),C(e.raised,"raised"),C(e.stacked,"stacked"),"segments"));return()=>{var s;return t("div",{class:o.value},[(s=a.default)==null?void 0:s.call(a)])}},{props:{basic:Boolean,compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,stacked:Boolean,...hl()}}),Ev=P({render(){var e,a;return t("div",{class:"inline"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Rv={install(e){e.component("SuiSegment",N),e.component("SuiSegmentGroup",Ct),e.component("SuiSegmentInline",Ev)}},zv=P({directives:{clickoutside:vs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(e,{emit:a}){const l=si({animating:!1}),o=H(()=>{const s=e.direction==="right"||e.direction==="left";return te("ui","sidebar",e.direction,e.animation,C(e.inverted,"inverted"),C(e.visible,"visible"),C(l.animating,"animating"),C(s,"vertical"),Ie(e.icon,"icon"),"menu")});return gt(()=>e.visible,()=>{if(l.animating=!0,setTimeout(()=>l.animating=!1,500),e.dimmed){const s=document.querySelector(".pusher");s&&s.classList.toggle("dimmed")}}),{computedClass:o,onClickPusher:s=>{const d=s.path||s.composedPath&&s.composedPath();d&&d.find(m=>m.classList&&m.classList.contains("pusher"))&&e.visible&&a("update:visible",!1)}}},render(){var e,a;return yi(t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]),[[mn("clickoutside"),this.onClickPusher]])}}),Pv={install:e=>{e.component("SuiSidebar",zv)}};class qn{static getWindowScrollTop(){let{documentElement:a}=document;return(window.pageYOffset||a.scrollTop)-(a.clientTop||0)}static getWindowScrollLeft(){let{documentElement:a}=document;return(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}static hasClass(a,l){return a.classList.contains(l)}}const Fv=P({emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(e,{emit:a}){const l=H(()=>te("ui",e.color,e.size,C(e.disabled,"disabled"),C(e.inverted,"inverted"),C(e.reversed,"reversed"),C(e.vertical,"vertical"),Ie(e.labeled,"labeled"),"slider")),o=()=>100*(e.modelValue[0]-e.min)/(e.max-e.min),s=()=>100*(e.modelValue[1]-e.min)/(e.max-e.min),d=H(()=>{if(e.range)return e.reversed&&!e.vertical?{right:o()+"%",width:s()-o()+"%"}:e.vertical?e.reversed?{bottom:o()+"%",height:s()-o()+"%"}:{top:o()+"%",height:s()-o()+"%"}:{left:o()+"%",width:s()-o()+"%"};let U=e.modelValue>e.max?e.max:e.modelValue;return e.reversed?e.vertical?{bottom:"0%",top:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{right:"0%",left:`${100-(U-e.min)/(e.max-e.min)*100}%`}:e.vertical?{top:"0%",bottom:`${100-(U-e.min)/(e.max-e.min)*100}%`}:{left:"0%",right:`${100-(U-e.min)/(e.max-e.min)*100}%`}}),m=H(()=>{let U=e.range?e.modelValue[0]:e.modelValue>e.max?e.max:e.modelValue;return!e.reversed&&e.vertical?{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:e.reversed&&e.vertical?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),f=H(()=>{let U=e.modelValue[1]>e.max?e.max:e.modelValue[1];return e.reversed&&!e.vertical?{left:"auto",right:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:e.vertical?e.reversed?{top:"auto",bottom:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`}:{top:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(U-e.min)*100/(e.max-e.min)}% - 10.5px)`,right:"auto"}}),r=H(()=>e.labels?e.labels:[...Array(e.max-e.min+1)].map((U,K)=>K*e.step+e.min)),c=()=>{var U,K;let me=1,ae=g(),De=(e.vertical?(U=h.value)==null?void 0:U.clientHeight:(K=h.value)==null?void 0:K.clientWidth)||0,Je=1;if(De>0)for(;De/ae*Je<100;)ae%Je||(me=Je),Je+=1;return me},g=()=>Math.round((e.max-e.min)/e.step),p=G(null),h=G(null),w=G(0),b=G(0),A=G(0),$=G(0),D=()=>{if(!p.value)return;let U=p.value.getBoundingClientRect();w.value=U.left+qn.getWindowScrollLeft(),b.value=U.top+qn.getWindowScrollTop(),A.value=p.value.offsetWidth,$.value=p.value.offsetHeight},_=G(0),v=U=>{let{pageX:K,pageY:me}=U.touches?U.touches[0]:U,ae,De;e.vertical?ae=(b.value+$.value-me)*100/$.value:ae=(K-w.value)*100/A.value,De=(e.max-e.min)*(ae/100)+e.min;const Je=e.range?e.modelValue[_.value]:e.modelValue||0;De=Je+Math.round(De/e.step-Je/e.step)*e.step,e.reversed&&(De=e.max-De+e.min),e.vertical&&(De=e.max-De+e.min),x(De)},x=U=>{let K=U,me;if(e.range)if(me=e.modelValue?[...e.modelValue]:[],_.value===0){let ae=e.modelValue?e.modelValue[1]:e.max;K<e.min?K=e.min:K>ae&&(K=ae),me[0]=K,me[1]=me[1]||e.max}else{let ae=e.modelValue?e.modelValue[0]:e.min;K>e.max?K=e.max:K<ae&&(K=ae),me[0]=me[0]||e.min,me[1]=K}else K<e.min&&(K=e.min),K>e.max&&(K=e.max),me=K;a("update:modelValue",me),a("change",me)},T=G(!1),E=U=>T.value=U,V=(U,K=0)=>{E(!0),D(),_.value=K,U.preventDefault()},M=U=>{T.value&&(E(!1),document.removeEventListener("mousemove",F),a("slideend",{event:U,value:e.modelValue}))},F=U=>{T.value&&(v(U),U==null||U.preventDefault())},j=(U,K=0)=>{e.disabled||(V(U,K),document.addEventListener("mousemove",F),document.addEventListener("mouseup",M),U.preventDefault())},Q=(U,K=0)=>{switch(_.value=K,U.code){case"ArrowUp":e.vertical&&(e.reversed?Y():ge()),U.preventDefault();break;case"ArrowDown":e.vertical&&(e.reversed?ge():Y()),U.preventDefault();break;case"ArrowRight":e.reversed?ge():Y(),U.preventDefault();break;case"ArrowLeft":e.reversed?Y():ge(),U.preventDefault();break}},Y=()=>{let U=0;e.range?U=e.modelValue[_.value]+e.step:U=e.modelValue+e.step,x(U)},ge=()=>{let U=0;e.range?U=e.modelValue[_.value]-e.step:U=e.modelValue-e.step,x(U)},Be=U=>{if(!e.disabled&&!qn.hasClass(U.target,"thumb")){if(e.range){let K=(e.vertical?U.offsetY/U.target.clientHeight:U.offsetX/U.target.clientWidth)*100,me=(o()+s())/2;K<me?_.value=e.reversed?1:0:_.value=e.reversed?0:1}D(),v(U)}};return()=>t("div",{ref:U=>p.value=U,class:l.value,style:e.vertical?`height: ${e.verticalHeight}px;`:""},[t("div",{class:"inner",onClick:Be},[t("div",{class:"track",ref:U=>h.value=U},null),t("div",{class:"track-fill",style:d.value},null),t("div",{class:"thumb",style:m.value,onMousedown:U=>j(U),onTouchstart:U=>V(U),onTouchmove:U=>F(U),onTouchend:U=>M(U),onKeydown:U=>Q(U),tabindex:0},null),e.range&&t("div",{class:"thumb second",style:f.value,onMousedown:U=>j(U,1),onTouchstart:U=>V(U,1),onTouchmove:U=>F(U),onTouchend:U=>M(U),onKeydown:U=>Q(U,1),tabindex:0},null)]),e.labeled&&t("ul",{class:"auto labels"},[[...Array(g()+1)].map((U,K)=>{let me=K/g();return K%c()?t("li",{class:"halftick label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},null):t("li",{class:"label",style:`${e.vertical?e.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${me} + 7px);`},[e.reversed&&!e.vertical?e.labels?e.labels[g()-K]:r.value[g()-K]:e.labels?e.labels[K]:r.value[K]])})])])}}),Vv={install(e){e.component("SuiSlider",Fv)}},Lo=P({props:{content:String},render(){var e,a;return this.$props.content?X("div",{class:"label"},this.$props.content):X("div",{class:"label"},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Io=P({props:{content:String,text:Boolean},setup(e){return{computedClass:H(()=>te(C(e.text,"text"),"value"))}},render(){var e,a;return this.$props.content?X("div",{class:this.computedClass},this.$props.content):X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Mv=P({components:{StatisticLabel:Lo,StatisticValue:Io},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(e){const a=He("ui",!0);return{computedClass:H(()=>te(a&&"ui",e.color,e.size,C(e.horizontal,"horizontal"),C(e.inverted,"inverted"),C(e.text,"text"),Ie(e.floated,"floated"),"statistic"))}},render(){var e,a,l,o,s,d;let m=[];return this.$props.value&&m.push(X(Io,{content:this.$props.value},(a=(e=this.$slots).default)==null?void 0:a.call(e))),this.$props.label&&m.push(X(Lo,{content:this.$props.label},(o=(l=this.$slots).default)==null?void 0:o.call(l))),X("div",{class:this.computedClass},m.length>0?m:(d=(s=this.$slots).default)==null?void 0:d.call(s))}}),Hv=P({props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(e){return mt("ui",!1),{computedClass:H(()=>te("ui",e.color,e.size,C(e.horizontal,"horizontal"),C(e.inverted,"inverted"),ui(e.widths,""),"statistics"))}},render(){var e,a;return X("div",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Nv={install(e){e.component("SuiStatistic",Mv),e.component("SuiStatisticGroup",Hv),e.component("SuiStatisticLabel",Lo),e.component("SuiStatisticValue",Io)}},Ov=P((e,{slots:a})=>{const l=H(()=>te(C(e.active,"active"),C(e.completed,"completed"),C(e.disabled,"disabled"),C(e.fluid,"fluid"),C(e.link,"link"),C(e.vertical,"vertical"),"step"));return()=>{var o,s;return e.href?t("a",{class:l.value,href:e.href},[(o=a.default)==null?void 0:o.call(a)]):t("div",{class:l.value},[e.icon&&t(W,{name:e.icon},null),(e.title||e.description)&&t("div",{class:"content"},[e.title&&t("div",{class:"title"},[e.title]),e.description&&t("div",{class:"description"},[e.description])]),(s=a.default)==null?void 0:s.call(a)])}},{props:{active:Boolean,completed:Boolean,description:String,disabled:Boolean,fluid:Boolean,href:String,icon:String,link:Boolean,title:String,vertical:Boolean}}),qv=["one","two","three","four","five","six","seven","eight"],jv=P({props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(e){const{widths:a}=e;return{computedClass:H(()=>te("ui",a&&qv[a-1],e.size,C(e.fluid,"fluid"),C(e.inverted,"inverted"),C(e.ordered,"ordered"),C(e.unstackable,"unstackable"),C(e.vertical,"vertical"),Me(e.attached,"attached"),Me(e.stackable,"stackable"),"steps"))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Gv=P({render(){var e,a;return t("div",{class:"content"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Uv=P({render(){var e,a;return t("div",{class:"title"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yv=P({render(){var e,a;return t("div",{class:"description"},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Jv={install(e){e.component("SuiStep",Ov),e.component("SuiStepGroup",jv),e.component("SuiStepContent",Gv),e.component("SuiStepTitle",Uv),e.component("SuiStepDescription",Yv)}},xd=P({props:{active:Boolean,attached:[Boolean,String],header:String},setup(e){return{computedClass:H(()=>te("ui tab segment",C(e.active,"active"),Ie(e.attached,"attached")))}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Wv=P({emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(e,{emit:a,slots:l}){const o=G(e.activeIndex);gt(()=>e.activeIndex,c=>{o.value=c});const s=(c,g)=>{o.value!==g&&(o.value=g,a("update:activeIndex",g),a("tab-change",{event:c,index:g})),a("tab-click",{event:c,index:g})},d=(c,g)=>{c.key==="Enter"&&s(c,g)},m=H(()=>{var c,g;let p=[];return(c=l.default)!=null&&c.call(l)&&((g=l.default)==null||g.call(l).forEach(h=>{kt(h)&&p.push(h)})),p}),f=H(()=>!e.secondary&&!e.pointing&&!e.text),r=H(()=>te("ui menu",C(f.value,"tabular attached"),C(e.pointing,"pointing"),C(e.secondary,"secondary"),C(e.text,"text")));return{onClick:s,onKeyDown:d,tabIndex:o,tabs:m,tabMenuClass:r,isDefaultMenu:f}},render(){const e=()=>this.tabs.map((l,o)=>t("a",{class:`item ${this.tabIndex===o&&"active"}`,onClick:s=>this.onClick(s,o),onKeydown:s=>this.onKeyDown(s,o),tabindex:0},[l.props.header])),a=()=>this.tabs.map((l,o)=>t(xd,ea(l.props,{active:this.tabIndex===o,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var s,d;return[(d=(s=l.children).default)==null?void 0:d.call(s)]}}));return t(Ae,null,[t("div",{class:this.tabMenuClass},[e()]),a()])}}),Kv={install(e){e.component("SuiTab",Wv),e.component("SuiTabPanel",xd)}},Xv=P({props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(e){return{computedClass:H(()=>te("ui",e.color,e.size,C(e.celled,"celled"),C(e.collapsing,"collapsing"),C(e.definition,"definition"),C(e.fixed,"fixed"),C(e.inverted,"inverted"),C(e.selectable,"selectable"),C(e.singleLine,"single line"),C(e.stackable,"stackable"),C(e.striped,"striped"),C(e.structured,"structured"),C(e.unstackable,"unstackable"),Ie(e.attached,"attached"),Ie(e.basic,"basic"),Ie(e.compact,"compact"),Ie(e.padded,"padded"),ui(e.columns,"column"),"table"))}},render(){var e,a;return t("table",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Qv=P({render(){var e,a;return X("tbody",{},(a=(e=this.$slots).default)==null?void 0:a.call(e))}}),Zv=P({props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,C(e.active,"active"),C(e.collapsing,"collapsing"),C(e.disabled,"disabled"),C(e.error,"error"),C(e.negative,"negative"),C(e.positive,"positive"),C(e.selectable,"selectable"),C(e.singleLine,"single line"),C(e.warning,"warning"),Me(e.verticalAlign,"aligned"),Me(e.marked,"marked"),Ta(e.textAlign)))}},render(){var e,a,l,o;return this.computedClass?t("td",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("td",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),e1=P({props:{fullWidth:Boolean},setup(e){const{fullWidth:a}=e;return{computedClass:H(()=>te(C(a,"full-width")))}},render(){var e,a,l,o;return this.computedClass?X("tfoot",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("tfoot",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),t1=P({props:{fullWidth:Boolean},setup(e){return{computedClass:H(()=>te(C(e.fullWidth,"full-width")))}},render(){var e,a,l,o;return this.computedClass?X("thead",{class:this.computedClass},(a=(e=this.$slots).default)==null?void 0:a.call(e)):X("thead",{},(o=(l=this.$slots).default)==null?void 0:o.call(l))}}),i1=P({props:{singleLine:Boolean,textAlign:String,width:Number},setup(e){return{computedClass:H(()=>te(C(e.singleLine,"single line"),Me(e.textAlign,"aligned"),ui(e.width,"wide")))}},render(){var e,a,l,o;return this.computedClass?t("th",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("th",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),a1=P({props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(e){return{computedClass:H(()=>te(e.color,C(e.active,"active"),C(e.disabled,"disabled"),C(e.error,"error"),C(e.negative,"negative"),C(e.positive,"positive"),C(e.warning,"warning"),Me(e.textAlign,"aligned"),Me(e.verticalAlign,"aligned")))}},render(){var e,a,l,o;return this.computedClass?t("tr",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)]):t("tr",null,[(o=(l=this.$slots).default)==null?void 0:o.call(l)])}}),l1={install(e){e.component("SuiTable",Xv),e.component("SuiTableBody",Qv),e.component("SuiTableCell",Zv),e.component("SuiTableFooter",e1),e.component("SuiTableHeader",t1),e.component("SuiTableHeaderCell",i1),e.component("SuiTableRow",a1)}};function n1(e,a){e.indexOf(a)===-1&&e.push(a)}const $d=(e,a,l)=>Math.min(Math.max(l,e),a),Mt={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Zl=e=>typeof e=="number",pa=e=>Array.isArray(e)&&!Zl(e[0]),o1=(e,a,l)=>{const o=a-e;return((l-e)%o+o)%o+e};function s1(e,a){return pa(e)?e[o1(0,e.length,a)]:e}const Bd=(e,a,l)=>-l*e+l*a+e,Td=()=>{},wi=e=>e,Ts=(e,a,l)=>a-e===0?1:(l-e)/(a-e);function Dd(e,a){const l=e[e.length-1];for(let o=1;o<=a;o++){const s=Ts(0,a,o);e.push(Bd(l,1,s))}}function r1(e){const a=[0];return Dd(a,e-1),a}function u1(e,a=r1(e.length),l=wi){const o=e.length,s=o-a.length;return s>0&&Dd(a,s),d=>{let m=0;for(;m<o-2&&!(d<a[m+1]);m++);let f=$d(0,1,Ts(a[m],a[m+1],d));return f=s1(l,m)(f),Bd(e[m],e[m+1],f)}}const Ld=e=>Array.isArray(e)&&Zl(e[0]),Eo=e=>typeof e=="object"&&!!e.createAnimation,Aa=e=>typeof e=="function",c1=e=>typeof e=="string",Qa={ms:e=>e*1e3,s:e=>e/1e3},Id=(e,a,l)=>(((1-3*l+3*a)*e+(3*l-6*a))*e+3*a)*e,d1=1e-7,m1=12;function p1(e,a,l,o,s){let d,m,f=0;do m=a+(l-a)/2,d=Id(m,o,s)-e,d>0?l=m:a=m;while(Math.abs(d)>d1&&++f<m1);return m}function Oa(e,a,l,o){if(e===a&&l===o)return wi;const s=d=>p1(d,0,1,e,l);return d=>d===0||d===1?d:Id(s(d),a,o)}const f1=(e,a="end")=>l=>{l=a==="end"?Math.min(l,.999):Math.max(l,.001);const o=l*e,s=a==="end"?Math.floor(o):Math.ceil(o);return $d(0,1,s/e)},Hr={ease:Oa(.25,.1,.25,1),"ease-in":Oa(.42,0,1,1),"ease-in-out":Oa(.42,0,.58,1),"ease-out":Oa(0,0,.58,1)},g1=/\((.*?)\)/;function Nr(e){if(Aa(e))return e;if(Ld(e))return Oa(...e);if(Hr[e])return Hr[e];if(e.startsWith("steps")){const a=g1.exec(e);if(a){const l=a[1].split(",");return f1(parseFloat(l[0]),l[1].trim())}}return wi}class Ed{constructor(a,l=[0,1],{easing:o,duration:s=Mt.duration,delay:d=Mt.delay,endDelay:m=Mt.endDelay,repeat:f=Mt.repeat,offset:r,direction:c="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=wi,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,w)=>{this.resolve=h,this.reject=w}),o=o||Mt.easing,Eo(o)){const h=o.createAnimation(l);o=h.easing,l=h.keyframes||l,s=h.duration||s}this.repeat=f,this.easing=pa(o)?wi:Nr(o),this.updateDuration(s);const p=u1(l,r,pa(o)?o.map(Nr):wi);this.tick=h=>{var w;d=d;let b=0;this.pauseTime!==void 0?b=this.pauseTime:b=(h-this.startTime)*this.rate,this.t=b,b/=1e3,b=Math.max(b-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(b=this.totalDuration);const A=b/this.duration;let $=Math.floor(A),D=A%1;!D&&A>=1&&(D=1),D===1&&$--;const _=$%2;(c==="reverse"||c==="alternate"&&_||c==="alternate-reverse"&&!_)&&(D=1-D);const v=b>=this.totalDuration?1:Math.min(D,1),x=p(this.easing(v));a(x),this.pauseTime===void 0&&(this.playState==="finished"||b>=this.totalDuration+m)?(this.playState="finished",(w=this.resolve)===null||w===void 0||w.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const a=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=a-this.pauseTime:this.startTime||(this.startTime=a),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var a;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(a=this.reject)===null||a===void 0||a.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(a){this.duration=a,this.totalDuration=a*(this.repeat+1)}get currentTime(){return this.t}set currentTime(a){this.pauseTime!==void 0||this.rate===0?this.pauseTime=a:this.startTime=performance.now()-a/this.rate}get playbackRate(){return this.rate}set playbackRate(a){this.rate=a}}class h1{setAnimation(a){this.animation=a,a==null||a.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const jn=new WeakMap;function Rd(e){return jn.has(e)||jn.set(e,{transforms:[],values:new Map}),jn.get(e)}function _1(e,a){return e.has(a)||e.set(a,new h1),e.get(a)}const b1=["","X","Y","Z"],v1=["translate","scale","rotate","skew"],en={x:"translateX",y:"translateY",z:"translateZ"},Or={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},S1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Or,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:wi},skew:Or},ul=new Map,Ds=e=>`--motion-${e}`,tn=["x","y","z"];v1.forEach(e=>{b1.forEach(a=>{tn.push(e+a),ul.set(Ds(e+a),S1[e])})});const y1=(e,a)=>tn.indexOf(e)-tn.indexOf(a),w1=new Set(tn),zd=e=>w1.has(e),C1=(e,a)=>{en[a]&&(a=en[a]);const{transforms:l}=Rd(e);n1(l,a),e.style.transform=A1(l)},A1=e=>e.sort(y1).reduce(k1,"").trim(),k1=(e,a)=>`${e} ${a}(var(${Ds(a)}))`,Ro=e=>e.startsWith("--"),qr=new Set;function x1(e){if(!qr.has(e)){qr.add(e);try{const{syntax:a,initialValue:l}=ul.has(e)?ul.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:a,initialValue:l})}catch{}}}const Gn=(e,a)=>document.createElement("div").animate(e,a),jr={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{Gn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!Gn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{Gn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Un={},oa={};for(const e in jr)oa[e]=()=>(Un[e]===void 0&&(Un[e]=jr[e]()),Un[e]);const $1=.015,B1=(e,a)=>{let l="";const o=Math.round(a/$1);for(let s=0;s<o;s++)l+=e(Ts(0,o-1,s))+", ";return l.substring(0,l.length-2)},Gr=(e,a)=>Aa(e)?oa.linearEasing()?`linear(${B1(e,a)})`:Mt.easing:Ld(e)?T1(e):e,T1=([e,a,l,o])=>`cubic-bezier(${e}, ${a}, ${l}, ${o})`;function D1(e,a){for(let l=0;l<e.length;l++)e[l]===null&&(e[l]=l?e[l-1]:a());return e}const L1=e=>Array.isArray(e)?e:[e];function zo(e){return en[e]&&(e=en[e]),zd(e)?Ds(e):e}const Il={get:(e,a)=>{a=zo(a);let l=Ro(a)?e.style.getPropertyValue(a):getComputedStyle(e)[a];if(!l&&l!==0){const o=ul.get(a);o&&(l=o.initialValue)}return l},set:(e,a,l)=>{a=zo(a),Ro(a)?e.style.setProperty(a,l):e.style[a]=l}};function Pd(e,a=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(a&&e.commitStyles(),e.cancel())}catch{}}function I1(e,a){var l;let o=(a==null?void 0:a.toDefaultUnit)||wi;const s=e[e.length-1];if(c1(s)){const d=((l=s.match(/(-?[\d.]+)([a-z%]*)/))===null||l===void 0?void 0:l[2])||"";d&&(o=m=>m+d)}return o}function E1(){return window.__MOTION_DEV_TOOLS_RECORD}function R1(e,a,l,o={},s){const d=E1(),m=o.record!==!1&&d;let f,{duration:r=Mt.duration,delay:c=Mt.delay,endDelay:g=Mt.endDelay,repeat:p=Mt.repeat,easing:h=Mt.easing,persist:w=!1,direction:b,offset:A,allowWebkitAcceleration:$=!1,autoplay:D=!0}=o;const _=Rd(e),v=zd(a);let x=oa.waapi();v&&C1(e,a);const T=zo(a),E=_1(_.values,T),V=ul.get(T);return Pd(E.animation,!(Eo(h)&&E.generator)&&o.record!==!1),()=>{const M=()=>{var Q,Y;return(Y=(Q=Il.get(e,T))!==null&&Q!==void 0?Q:V==null?void 0:V.initialValue)!==null&&Y!==void 0?Y:0};let F=D1(L1(l),M);const j=I1(F,V);if(Eo(h)){const Q=h.createAnimation(F,a!=="opacity",M,T,E);h=Q.easing,F=Q.keyframes||F,r=Q.duration||r}if(Ro(T)&&(oa.cssRegisterProperty()?x1(T):x=!1),v&&!oa.linearEasing()&&(Aa(h)||pa(h)&&h.some(Aa))&&(x=!1),x){V&&(F=F.map(ge=>Zl(ge)?V.toDefaultUnit(ge):ge)),F.length===1&&(!oa.partialKeyframes()||m)&&F.unshift(M());const Q={delay:Qa.ms(c),duration:Qa.ms(r),endDelay:Qa.ms(g),easing:pa(h)?void 0:Gr(h,r),direction:b,iterations:p+1,fill:"both"};f=e.animate({[T]:F,offset:A,easing:pa(h)?h.map(ge=>Gr(ge,r)):void 0},Q),f.finished||(f.finished=new Promise((ge,Be)=>{f.onfinish=ge,f.oncancel=Be}));const Y=F[F.length-1];f.finished.then(()=>{w||(Il.set(e,T,Y),f.cancel())}).catch(Td),$||(f.playbackRate=1.000001)}else if(s&&v)F=F.map(Q=>typeof Q=="string"?parseFloat(Q):Q),F.length===1&&F.unshift(parseFloat(M())),f=new s(Q=>{Il.set(e,T,j?j(Q):Q)},F,Object.assign(Object.assign({},o),{duration:r,easing:h}));else{const Q=F[F.length-1];Il.set(e,T,V&&Zl(Q)?V.toDefaultUnit(Q):Q)}return m&&d(e,a,F,{duration:r,delay:c,easing:h,repeat:p,offset:A},"motion-one"),E.setAnimation(f),f&&!D&&f.pause(),f}}const z1=(e,a)=>e[a]?Object.assign(Object.assign({},e),e[a]):Object.assign({},e);function P1(e,a){var l;return typeof e=="string"?a?((l=a[e])!==null&&l!==void 0||(a[e]=document.querySelectorAll(e)),e=a[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const F1=e=>e(),Fd=(e,a,l=Mt.duration)=>new Proxy({animations:e.map(F1).filter(Boolean),duration:l,options:a},M1),V1=e=>e.animations[0],M1={get:(e,a)=>{const l=V1(e);switch(a){case"duration":return e.duration;case"currentTime":return Qa.s((l==null?void 0:l[a])||0);case"playbackRate":case"playState":return l==null?void 0:l[a];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(H1)).catch(Td)),e.finished;case"stop":return()=>{e.animations.forEach(o=>Pd(o))};case"forEachNative":return o=>{e.animations.forEach(s=>o(s,e))};default:return typeof(l==null?void 0:l[a])>"u"?void 0:()=>e.animations.forEach(o=>o[a]())}},set:(e,a,l)=>{switch(a){case"currentTime":l=Qa.ms(l);case"playbackRate":for(let o=0;o<e.animations.length;o++)e.animations[o][a]=l;return!0}return!1}},H1=e=>e.finished;function N1(e,a,l){return Aa(e)?e(a,l):e}function O1(e){return function(a,l,o={}){a=P1(a);const s=a.length,d=[];for(let m=0;m<s;m++){const f=a[m];for(const r in l){const c=z1(o,r);c.delay=N1(c.delay,m,s);const g=R1(f,r,l[r],c,e);d.push(g)}}return Fd(d,o,o.duration)}}const q1=O1(Ed);function j1(e,a={}){return Fd([()=>{const l=new Ed(e,[0,1],a);return l.finished.catch(()=>{}),l}],a,a.duration)}function G1(e,a,l){return(Aa(e)?j1:q1)(e,a,l)}const ve=(e,a)=>(l,{duration:o,keyframesOverride:s={}})=>G1(l,{...e,...s},{autoplay:!1,...a,duration:o}),Ur=ve({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),U1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),Y1=ve({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),J1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),W1=ve({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),K1=ve({opacity:[0,1]},{duration:.5,offset:[0,1]}),X1=ve({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),Q1=ve({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),Z1=ve({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),eS=ve({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),tS=ve({opacity:[1,0]},{duration:.5,offset:[0,1]}),iS=ve({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),aS=ve({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),lS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),nS=ve({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),oS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),sS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),rS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),uS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),cS=ve({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),dS=ve({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),mS=ve({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),pS=ve({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),fS=ve({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),gS=ve({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),hS=ve({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),_S=ve({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),bS=ve({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),vS=ve({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),SS=ve({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),yS=ve({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),Vd={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},Md={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},Hd={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},wS={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},CS=ve({transformOrigin:"top center",...Vd},{offset:[0,1]}),AS=ve({transformOrigin:"bottom center",...Vd},{offset:[0,1]}),kS=ve({transformOrigin:"center right",...Md},{offset:[0,1]}),xS=ve({transformOrigin:"center left",...Md},{offset:[0,1]}),$S=ve({transformOrigin:"top center",...Hd},{offset:[0,1]}),BS=ve({transformOrigin:"bottom center",...Hd},{offset:[0,1]}),Yr=ve({transformOrigin:"center left",...wS},{offset:[0,1]}),$i=.8,fa={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ga={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},ha={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_a={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},TS=ve({transformOrigin:"top center",transform:fa.transform,opacity:fa.opacity},{duration:$i,offset:fa.offset}),DS=ve({transformOrigin:"bottom center",transform:fa.transform,opacity:fa.opacity},{duration:$i,offset:fa.offset}),LS=ve({transformOrigin:"center right",transform:ga.transform,opacity:ga.opacity},{duration:$i,offset:ga.offset}),IS=ve({transformOrigin:"center left",transform:ga.transform,opacity:ga.opacity},{duration:$i,offset:ga.offset}),ES=ve({transformOrigin:"top center",transform:ha.transform,opacity:ha.opacity},{duration:$i,offset:ha.offset}),RS=ve({transformOrigin:"bottom center",transform:ha.transform,opacity:ha.opacity},{duration:$i,offset:ha.offset}),zS=ve({transformOrigin:"center right",transform:_a.transform,opacity:_a.opacity},{duration:$i,offset:_a.offset}),PS=ve({transformOrigin:"center left",transform:_a.transform,opacity:_a.opacity},{duration:$i,offset:_a.offset}),FS=ve({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),VS=ve({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),MS=ve({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),HS=ve({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),NS=ve({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),OS=ve({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),qS=ve({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),jS=ve({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),GS=ve({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),US={browse:[Ur,U1],"browse right":[Ur,Y1],drop:[J1,W1],fade:[K1,tS],"fade up":[X1,iS],"fade down":[Q1,aS],"fade left":[Z1,lS],"fade right":[eS,nS],fly:[oS,dS],"fly up":[sS,mS],"fly down":[rS,pS],"fly left":[uS,fS],"fly right":[cS,gS],"horizontal flip":[hS,_S],"vertical flip":[bS,vS],scale:[SS,yS],"slide up":[AS,BS],"slide down":[CS,$S],"slide left":[kS,Yr],"slide right":[xS,Yr],"swing up":[DS,RS],"swing down":[TS,ES],"swing left":[LS,zS],"swing right":[IS,PS],zoom:[FS,VS]},YS={bounce:[MS,void 0],flash:[HS,void 0],glow:[NS,void 0],jiggle:[OS,void 0],pulse:[qS,void 0],shake:[jS,void 0],tada:[GS,void 0]},Nd=e=>({...US,...YS})[e],JS=e=>{const[a,l]=Nd(e.animation),o=H(()=>e.duration?e.duration/1e3:.5),s=H(()=>(m,f)=>{if(!a)return f();const r=a(m,{duration:o.value});r.play(),r.finished.then(f)}),d=H(()=>(m,f)=>{if(!l)return f();const r=l(m,{duration:o.value});r.play(),r.finished.then(f)});return{onEnter:s,onLeave:d}},WS=P({props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(e){const{onEnter:a,onLeave:l}=JS(e);return{onEnter:a,onLeave:l}},render(){return t(Sn,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),Od=P({props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(e){const[a,l]=Nd(e.animation),o=H(()=>(d,m)=>{if(!a)return m();const f=a(d,{duration:.5,keyframesOverride:e.enterKeyframes(d)});f.play(),f.finished.then(m)}),s=H(()=>(d,m)=>{if(!l)return m();const f=l(d,{duration:.5,keyframesOverride:e.leaveKeyframes(d)});f.play(),f.finished.then(m)});return{onEnter:o,onLeave:s}},render(){return t(zc,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var e,a;return[(a=(e=this.$slots).default)==null?void 0:a.call(e)]}})}}),KS={install(e){e.component("SuiTransition",WS),e.component("SuiTransitionGroup",Od)}},XS=Object.freeze(Object.defineProperty({__proto__:null,Accordion:m_,Advertisement:f_,Breadcrumb:g_,Button:k_,Calendar:N_,Card:J_,Checkbox:W_,Comment:nb,Container:ob,Dimmer:rb,Divider:cb,Dropdown:Cb,Embed:kb,Emoji:xb,Feed:Fb,Flag:Vb,Form:Hb,Grid:Nb,Header:Ob,Icon:h_,Image:bb,Input:qb,Item:Qb,Label:_b,List:lv,Menu:sv,Message:cv,Modal:bv,Popup:yv,Progress:Av,Rail:xv,Rating:Tv,Reveal:Dv,Search:Iv,Segment:Rv,Sidebar:Pv,Slider:Vv,Statistic:Nv,Step:Jv,Tab:Kv,Table:l1,Transition:KS},Symbol.toStringTag,{value:"Module"})),Fe=P({props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(e,{slots:a}){return{computedClass:H(()=>{var l;return te("ui",e.color,e.size,C(e.active,"active"),C(e.disabled,"disabled"),C(e.fast,"fast"),C(e.indeterminate,"indeterminate"),C(e.inverted,"inverted"),C(e.slow,"slow"),C(e.text||!!((l=a.default)!=null&&l.call(a)),"text"),Ie(e.inline,"inline"),"loader")})}},render(){var e,a;return t("div",{class:this.computedClass},[(a=(e=this.$slots).default)==null?void 0:a.call(e)])}}),Yn=P({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...xs()},setup(e,{slots:a}){const l=H(()=>te("actions",e.basic&&"basic",e.aligned,e.vertical&&"vertical"));return()=>{var o;return e.attached?t(_t,{attached:e.attached,vertical:e.vertical},{default:()=>{var s;return[(s=a.default)==null?void 0:s.call(a)]}}):t("div",{class:l.value},[(o=a.default)==null?void 0:o.call(a)])}}}),QS=P({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(e,{slots:a}){const l=H(()=>te("floating toast-box compact",e.unclickable&&"unclickable"));return()=>{var o,s;return e.verticalAttached?t("div",{class:l.value,style:"display: block !important;"},[t("div",{class:"vertical attached compact right"},[(o=a.default)==null?void 0:o.call(a)])]):t("div",{class:l.value,style:"display: block !important;"},[(s=a.default)==null?void 0:s.call(a)])}}});function Jn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const ZS=P({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...$s()},setup(e,{emit:a}){const{colorClasses:l}=Bs(e),o=H(()=>{var m,f,r,c,g;return te(e.centered&&"center aligned",e.type||"neutral",l.value,"ui",e.messageStyle?"message":"toast",e.actions&&!((m=e.actionsProps)!=null&&m.vertical)&&"actions",((f=e.actionsProps)==null?void 0:f.attached)==="top"&&"bottom attached",((r=e.actionsProps)==null?void 0:r.attached)==="bottom"&&"top attached",((c=e.actionsProps)==null?void 0:c.attached)==="left"&&"left attached",((g=e.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),s=G(e.showProgressUp?0:100),d=()=>{const m=e.displayTime/100;setTimeout(()=>{const f=setInterval(()=>{if(e.showProgressUp){s.value>=100&&clearInterval(f),s.value+=1;return}s.value<=0&&clearInterval(f),s.value-=1},m)},500)};return ki(()=>e.showProgress&&d()),setTimeout(()=>e.displayTime>0&&a("close"),e.displayTime+750),{classes:o,progress:s}},render(){var e;let a,l,o;return t(QS,{unclickable:!!this.actions,verticalAttached:((e=this.actionsProps)==null?void 0:e.attached)==="left"},{default:()=>{var s,d,m,f;return[this.showProgress==="top"&&t(Do,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((s=this.actionsProps)==null?void 0:s.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&t(Yn,this.actionsProps,Jn(a=this.actions({close:()=>this.$emit("close")}))?a:{default:()=>[a]}),t("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[t("div",{class:"content"},[this.title&&t("div",{class:"ui header"},[this.title]),t("div",{class:"message"},[this.message])]),this.actions&&!((m=this.actionsProps)!=null&&m.attached)&&t(Yn,this.actionsProps,Jn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]})]),this.actions&&((f=this.actionsProps)==null?void 0:f.attached)==="bottom"&&t(Yn,this.actionsProps,Jn(o=this.actions({close:()=>this.$emit("close")}))?o:{default:()=>[o]}),this.showProgress==="bottom"&&t(Do,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),ey=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],ty=({defaultValue:e}={})=>({position:{type:String,validator:a=>ey.includes(a),default:e}}),iy=e=>({positionClasses:H(()=>e.position||"")});function ay(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}const ly=P({name:"SuiToastContainer",props:{horizontal:Boolean,...xs(),...ty({defaultValue:"top right"})},setup(e){const{items:a,remove:l}=qd(),{attachedClasses:o}=kd(e),{positionClasses:s}=iy(e);return{classes:H(()=>te(o.value||s.value,"ui toast-container",e.horizontal&&"horizontal")),items:a,remove:l,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[0,`${d.offsetHeight}px`],f=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:m,marginBottom:f}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const m=[`${d.offsetWidth}px`,0],f=[`${d.offsetHeight}px`,0],r=e.horizontal?{width:m}:{height:f},c=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...r,marginBottom:c}}}},render(){let e;return t(_n,{to:"body"},{default:()=>[t("div",{class:this.classes},[t(Od,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},ay(e=this.items.filter(({position:a,attached:l})=>this.attached?l===this.attached:a===this.position).filter(({horizontal:a})=>this.horizontal===!!a).map(({id:a,...l})=>t(ZS,ea({key:a},l,{onClick:()=>this.remove(a),onClose:()=>this.remove(a)}),null)))?e:{default:()=>[e]})])]})}}),ny=G(1),Fa=G([]),qd=()=>({items:Fa,add:e=>{e.position=e.position||"top right",Fa.value=[...Fa.value,{id:ny.value++,...e}]},remove:e=>{Fa.value=Fa.value.filter(a=>a.id!==e)}}),ut=()=>{var e;const a=(e=Xt())==null?void 0:e.appContext,{add:l}=qd();return{toast:o=>{const{position:s,attached:d,horizontal:m}=o;ry({position:s,attached:d,horizontal:m})||sy(a,{position:s,attached:d,horizontal:m}),l(o)}}},oy=(e,{appContext:a,element:l}={})=>{const o=l||document.createElement("div");return a&&(e.appContext=a),Xl(e,o),{vNode:e,el:o}},sy=(e,{position:a="top right",attached:l,horizontal:o=!1}={})=>{const s=X(ly,{position:a,attached:l,horizontal:o}),{el:d}=oy(s,{appContext:e});return{vNode:s,el:d}},ry=({position:e="top right",attached:a,horizontal:l})=>{const o=a?`.ui.toast-container.${a}.attached`:`.ui.toast-container.${e.split(" ").join(".")}${l?".horizontal":":not(.horizontal)"}`;return document.querySelector(o)};function uy(e){Object.values({...XS}).map(a=>e.use(a))}const cy={install:uy},dy=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(e){const a=ld(),l=H(()=>{const s=a.currentRoute.value.path;return s.lastIndexOf("/")===s.length-1?s.slice(0,-1):s}),o=s=>{s.preventDefault();const m=s.target.parentElement.getAttribute("href"),f=m.slice(m.indexOf("#")+1),r=document.getElementById(f);r&&r.scrollIntoView({behavior:"smooth"})};return(s,d)=>{const m=y("SuiHeader"),f=y("SuiGridColumn"),r=y("SuiGridRow");return k(),be(Ae,null,[t(r,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,{as:"h3",class:"doc-section-text"},{default:i(()=>[n(Te(e.label)+" ",1),t(u(bs),{to:`${l.value}#${s.$attrs.id}`,target:"_self",onClick:o},{default:i(()=>[t(u(W),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),t(f,{textAlign:"right"},{default:i(()=>[t(u(W),{name:"code",color:"grey",link:"",onClick:e.onClick},null,8,["onClick"])]),_:1})]),_:1}),S("p",null,[ji(s.$slots,"default",{},void 0,!0)])],64)}}}),my=Re(dy,[["__scopeId","data-v-a2b78897"]]),py={class:"inner"},fy={__name:"DocSectionCode",props:["code","hideCode"],setup(e){return(a,l)=>{const o=y("SuiGridColumn"),s=y("SuiGridRow");return k(),B(s,null,{default:i(()=>[t(o,{width:16},{default:i(()=>[ji(a.$slots,"default",{},void 0,!0)]),_:3}),t(o,{width:16,id:"accordion","aria-hidden":e.hideCode},{default:i(()=>[S("div",py,[yi((k(),be("pre",null,[S("code",null,Te(e.code)+`
`,1)])),[[u(Vl)]])])]),_:1},8,["aria-hidden"])]),_:3})}}},gy=Re(fy,[["__scopeId","data-v-965e7ddc"]]),I={__name:"DocSection",props:["label","code"],setup(e){const a=G(!0),l=()=>a.value=!a.value;return(o,s)=>{const d=y("SuiGrid");return k(),be("section",null,[t(d,{columns:2},{default:i(()=>[t(my,ea({label:e.label,"on-click":l},o.$attrs),{default:i(()=>[ji(o.$slots,"description")]),_:3},16,["label"]),t(gy,{code:e.code,"hide-code":a.value},{default:i(()=>[ji(o.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},hy=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,_y={__name:"ButtonDoc",setup(e){const a=G("Follow"),l=()=>a.value=a.value==="Follow"?"Following":"Follow";return(o,s)=>(k(),B(I,{label:"Button",code:hy},{description:i(()=>[n(" A standard button ")]),example:i(()=>[t(u(z),{onClick:l},{default:i(()=>[n(Te(a.value),1)]),_:1})]),_:1}))}},by=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,vy={__name:"EmphasisDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Emphasis",code:by},{description:i(()=>[n(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[t(u(z),{primary:""},{default:i(()=>[n("Save")]),_:1}),t(u(z),{secondary:""},{default:i(()=>[n("Okay")]),_:1}),t(u(z),null,{default:i(()=>[n("Cancel")]),_:1})]),_:1}))}},Sy=`<template>
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
</template>`,yy={__name:"AnimatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Animated",code:Sy},{description:i(()=>[n(" A button can animate to show hidden content ")]),example:i(()=>[t(u(z),{animated:""},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[n("Next")]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[t(u(W),{name:"arrow right"})]),_:1})]),_:1}),t(u(z),{animated:"vertical"},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[t(u(W),{name:"shop"})]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[n("Shop")]),_:1})]),_:1}),t(u(z),{animated:"fade"},{default:i(()=>[t(u(Ii),{visible:""},{default:i(()=>[n(" Sign-up for a Pro account ")]),_:1}),t(u(Ii),{hidden:""},{default:i(()=>[n("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},wy=`<template>
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
</template>`,Cy={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Labeled",code:wy},{description:i(()=>[n(" A button can appear alongside a label ")]),example:i(()=>[t(u(z),{labeled:"right",as:"div"},{default:i(()=>[t(u(z),{icon:"heart",content:" Like"}),t(u(O),{basic:""},{default:i(()=>[n("2,048")]),_:1})]),_:1}),t(u(z),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:"",pointing:"right"},{default:i(()=>[n("2,048")]),_:1}),t(u(z),{icon:"heart",content:" Like"})]),_:1}),t(u(z),{labeled:"left",as:"div"},{default:i(()=>[t(u(O),{basic:""},{default:i(()=>[n("1,048")]),_:1}),t(u(z),{icon:"fork"})]),_:1})]),_:1}))}},Ay=`<template>
  <SuiButton icon="cloud" />
</template>`,ky={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:Ay},{description:i(()=>[n(" A button can have only an icon ")]),example:i(()=>[t(u(z),{icon:"cloud"})]),_:1}))}},xy=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,$y={__name:"LabeledIconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Labeled Icon",code:xy},{description:i(()=>[n(" A button can use an icon as a label ")]),example:i(()=>[t(u(z),{labeled:"",icon:"pause",content:"Pause"}),t(u(z),{labeled:"right",icon:"right arrow",content:"Next"}),t(u(z),{labeled:"",icon:""},{default:i(()=>[t(u(W),{loading:"",name:"spinner"}),n(" Loading ")]),_:1})]),_:1}))}},By=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,Ty={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic",code:By},{description:i(()=>[n(" A basic button is less pronounced ")]),example:i(()=>[t(u(z),{basic:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(z),{basic:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(z),{basic:"",positive:""},{default:i(()=>[n("Positive")]),_:1}),t(u(z),{basic:"",negative:""},{default:i(()=>[n("Negative")]),_:1})]),_:1}))}},Dy=`<template>
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
</template>`,Ly={__name:"TertiaryDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Tertiary",code:Dy},{description:i(()=>[n(" An none bordered less important button ")]),example:i(()=>[t(u(z),{tertiary:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(z),{tertiary:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(z),{tertiary:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(z),{tertiary:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(z),{tertiary:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(z),{tertiary:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(z),{tertiary:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(z),{tertiary:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(z),{tertiary:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(z),{tertiary:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(z),{tertiary:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(z),{tertiary:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(z),{tertiary:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(z),{tertiary:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(z),{tertiary:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},Iy=`<template>
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
</template>`,Ey={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:Iy},{description:i(()=>[n(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(z),{inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(z),{inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(z),{inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(z),{inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(z),{inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(z),{inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(z),{inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(z),{inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(z),{inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(z),{inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(z),{inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(z),{inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(z),{inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(z),{inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(z),{inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},Ry=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,zy={__name:"ButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Buttons",code:Ry},{description:i(()=>[n(" Buttons can exist together as a group ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(z),{content:"One"}),t(u(z),{content:"Two"}),t(u(z),{content:"Three"})]),_:1})]),_:1}))}},Py=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,Fy={__name:"IconButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon Buttons",code:Py},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(_t),{icon:""},{default:i(()=>[t(u(z),{icon:"align left"}),t(u(z),{icon:"align center"}),t(u(z),{icon:"align right"}),t(u(z),{icon:"align justify"})]),_:1})]),_:1}))}},Vy=S("div",{class:"or"},null,-1),My=S("div",{class:"or","data-text":"ou"},null,-1),Hy=`<template>
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
</template>`,Ny={__name:"ConditionalsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Conditionals",code:Hy},{description:i(()=>[n(" Button groups can contain conditionals ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(z),{content:"Cancel"}),Vy,t(u(z),{content:"Save",positive:""})]),_:1}),t(u(_t),null,{default:i(()=>[t(u(z),{content:"un"}),My,t(u(z),{content:"deux",positive:""})]),_:1})]),_:1}))}},Oy=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,qy={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Active",code:Oy},{description:i(()=>[n(" A button can show it is currently the active user selection ")]),example:i(()=>[t(u(z),{active:"",icon:"user",content:" Follow"})]),_:1}))}},jy=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,Gy={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:jy},{description:i(()=>[n(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[t(u(z),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},Uy=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,Yy={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:Uy},{description:i(()=>[n(" A button can show a loading indicator ")]),example:i(()=>[t(u(z),{loading:"",content:"Loading"}),t(u(z),{loading:"double",primary:"",content:"Loading"}),t(u(z),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},Jy=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,Wy={__name:"SocialDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Social",code:Jy},{description:i(()=>[n(" A button can be formatted to link to a social website ")]),example:i(()=>[t(u(z),{facebook:"",icon:"facebook",content:" Facebook"}),t(u(z),{twitter:"",icon:"twitter",content:" Twitter"}),t(u(z),{vk:"",icon:"vk",content:"VK"}),t(u(z),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),t(u(z),{instagram:"",icon:"instagram",content:" Instagram"}),t(u(z),{youtube:"",icon:"youtube",content:" YouTube"}),t(u(z),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),t(u(z),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},Ky=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,Xy={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:Ky},{description:i(()=>[n(" A button can have different sizes ")]),example:i(()=>[t(u(z),{size:"mini",content:"Mini"}),t(u(z),{size:"tiny",content:"Tiny"}),t(u(z),{size:"small",content:"Small"}),t(u(z),{size:"medium",content:"Medium"}),t(u(z),{size:"large",content:"Large"}),t(u(z),{size:"big",content:"Big"}),t(u(z),{size:"huge",content:"Huge"}),t(u(z),{size:"massive",content:"Massive"})]),_:1}))}},Qy=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,Zy={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floated",code:Qy},{description:i(()=>[n(" A button can be aligned to the left or right of its container ")]),example:i(()=>[t(u(z),{floated:"left",content:"Left Floated"}),t(u(z),{floated:"right",content:"Right Floated"})]),_:1}))}},ew=`<template>
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
</template>`,tw={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:ew},{description:i(()=>[n(" A button can have different colors ")]),example:i(()=>[t(u(z),{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(z),{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(z),{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(z),{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(z),{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(z),{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(z),{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(z),{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(z),{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(z),{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(z),{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(z),{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(z),{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1}))}},iw=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,aw={__name:"CompactDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Compact",code:iw},{description:i(()=>[n(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[t(u(z),{compact:"",content:"Hold"}),t(u(z),{compact:"",icon:"pause"}),t(u(z),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},lw=`<template>
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
<\/script>`,nw={__name:"ToggleDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(I,{label:"Toggle",code:lw},{description:i(()=>[n(" A button can be formatted to toggle on and off ")]),example:i(()=>[t(u(z),{toggle:"",active:a.value,onClick:()=>a.value=!a.value,content:a.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},ow=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,sw={__name:"PositiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Positive",code:ow},{description:i(()=>[n(" A button can hint towards a positive consequence ")]),example:i(()=>[t(u(z),{positive:"",content:"Positive Button"})]),_:1}))}},rw=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,uw={__name:"NegativeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Negative",code:rw},{description:i(()=>[n(" A button can hint towards a negative consequence ")]),example:i(()=>[t(u(z),{negative:"",content:"Negative Button"})]),_:1}))}},cw=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,dw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:cw},{description:i(()=>[n(" A button can take the width of its container ")]),example:i(()=>[t(u(z),{fluid:"",content:"Fits container"})]),_:1}))}},mw=`<template>
  <SuiButton circular icon="settings" />
</template>`,pw={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:mw},{description:i(()=>[n(" A button can be circular ")]),example:i(()=>[t(u(z),{circular:"",icon:"settings"})]),_:1}))}},fw=S("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),gw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,hw={__name:"VerticallyAttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertically Attached",code:gw},{description:i(()=>[n(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[t(u(z),{attached:"top",content:"Top"}),t(u(N),{attached:""},{default:i(()=>[fw]),_:1}),t(u(z),{attached:"bottom",content:"Bottom"})]),_:1}))}},_w=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,bw={__name:"HorizontallyAttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontally Attached",code:_w},{description:i(()=>[n(" A button can be attached to the left or right of other content ")]),example:i(()=>[t(u(z),{attached:"left",content:"Left"}),t(u(z),{attached:"right",content:"Right"})]),_:1}))}},vw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,Sw={__name:"VerticalButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertical Buttons",code:vw},{description:i(()=>[n(" Groups can be formatted to appear vertically ")]),example:i(()=>[t(u(_t),{vertical:""},{default:i(()=>[t(u(z),null,{default:i(()=>[n("Feed")]),_:1}),t(u(z),null,{default:i(()=>[n("Messages")]),_:1}),t(u(z),null,{default:i(()=>[n("Events")]),_:1}),t(u(z),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,ww={__name:"StackableButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Stackable Buttons",code:yw},{description:i(()=>[n(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[t(u(_t),{stackable:""},{default:i(()=>[t(u(z),null,{default:i(()=>[n("Feed")]),_:1}),t(u(z),null,{default:i(()=>[n("Messages")]),_:1}),t(u(z),null,{default:i(()=>[n("Events")]),_:1}),t(u(z),null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1}))}},Cw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,Aw={__name:"LabeledIconButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon Buttons",code:Cw},{description:i(()=>[n(" Groups can be formatted as labeled icons ")]),example:i(()=>[t(u(_t),{vertical:"",labeled:"",icon:""},{default:i(()=>[t(u(z),{icon:"pause",content:"Pause"}),t(u(z),{icon:"play",content:"Play"}),t(u(z),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},kw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton icon labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,xw={__name:"MixedGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Mixed Group",code:kw},{description:i(()=>[n(" Button groups can show groups of icons ")]),example:i(()=>[t(u(_t),null,{default:i(()=>[t(u(z),{labeled:"",icon:"left chevron",content:"Back"}),t(u(z),{icon:"stop",content:"Stop"}),t(u(z),{icon:"",labeled:"right"},{default:i(()=>[t(u(W),{name:"right chevron"}),n(" Forward ")]),_:1})]),_:1})]),_:1}))}},$w=`<template>
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
</template>`,Bw={__name:"EqualWidthDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Equal Width",code:$w},{description:i(()=>[n(" Groups can have their widths divided evenly ")]),example:i(()=>[t(u(_t),{widths:5},{default:i(()=>[t(u(z),null,{default:i(()=>[n("Overview")]),_:1}),t(u(z),null,{default:i(()=>[n("Specs")]),_:1}),t(u(z),null,{default:i(()=>[n("Warranty")]),_:1}),t(u(z),null,{default:i(()=>[n("Reviews")]),_:1}),t(u(z),null,{default:i(()=>[n("Support")]),_:1})]),_:1}),t(u(_t),{widths:3},{default:i(()=>[t(u(z),null,{default:i(()=>[n("Overview")]),_:1}),t(u(z),null,{default:i(()=>[n("Specs")]),_:1}),t(u(z),null,{default:i(()=>[n("Support")]),_:1})]),_:1})]),_:1}))}},Tw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Dw={__name:"ColoredButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored Buttons",code:Tw},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(_t),{color:"blue"},{default:i(()=>[t(u(z),null,{default:i(()=>[n("One")]),_:1}),t(u(z),null,{default:i(()=>[n("Two")]),_:1}),t(u(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Lw=`<template>
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
</template>`,Iw={__name:"BasicButtonsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic Buttons",code:Lw},{description:i(()=>[n(" A button group can be less pronounced ")]),example:i(()=>[t(u(_t),{basic:""},{default:i(()=>[t(u(z),null,{default:i(()=>[n("One")]),_:1}),t(u(z),null,{default:i(()=>[n("Two")]),_:1}),t(u(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1}),t(u(_t),null,{default:i(()=>[t(u(z),{basic:"",color:"red"},{default:i(()=>[n("One")]),_:1}),t(u(z),{basic:"",color:"blue"},{default:i(()=>[n("Two")]),_:1}),t(u(z),{basic:"",color:"green"},{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},Ew=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Rw={__name:"GroupSizesDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Group Sizes",code:Ew},{description:i(()=>[n(" Groups can have a shared color ")]),example:i(()=>[t(u(_t),{size:"large"},{default:i(()=>[t(u(z),null,{default:i(()=>[n("One")]),_:1}),t(u(z),null,{default:i(()=>[n("Two")]),_:1}),t(u(z),null,{default:i(()=>[n("Three")]),_:1})]),_:1})]),_:1}))}},zw={__name:"Button",setup(e){const a=[{id:"button",label:"Button",category:"Types",component:_y},{id:"emphasis",label:"Emphasis",category:"Types",component:vy},{id:"animated",label:"Animated",category:"Types",component:yy},{id:"labeled",label:"Labeled",category:"Types",component:Cy},{id:"icon",label:"Icon",category:"Types",component:ky},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:$y},{id:"basic",label:"Basic",category:"Types",component:Ty},{id:"tertiary",label:"Tertiary",category:"Types",component:Ly},{id:"inverted",label:"Inverted",category:"Types",component:Ey},{id:"buttons",label:"Buttons",category:"Groups",component:zy},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:Fy},{id:"content",label:"Content",category:"Content",component:Ny},{id:"active",label:"Active",category:"States",component:qy},{id:"disabled",label:"Disabled",category:"States",component:Gy},{id:"loading",label:"Loading",category:"States",component:Yy},{id:"social",label:"Social",category:"Variations",component:Wy},{id:"size",label:"Size",category:"Variations",component:Xy},{id:"floated",label:"Floated",category:"Variations",component:Zy},{id:"colored",label:"Colored",category:"Variations",component:tw},{id:"compact",label:"Compact",category:"Variations",component:aw},{id:"toggle",label:"Toggle",category:"Variations",component:nw},{id:"positive",label:"Positive",category:"Variations",component:sw},{id:"negative",label:"Negative",category:"Variations",component:uw},{id:"fluid",label:"Fluid",category:"Variations",component:dw},{id:"circular",label:"Circular",category:"Variations",component:pw},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:hw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:bw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:Sw},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:ww},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:Aw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:xw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:Bw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:Dw},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:Iw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Rw}];return(l,o)=>(k(),B(rt,{title:"Button",description:"A button indicates a possible user action","component-docs":a}))}},Pw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Fw=`<template>
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
</template>`,Vw={__name:"ContainerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Container",code:Fw},{description:i(()=>[n(" A standard container ")]),example:i(()=>[t(u(Ni),null,{default:i(()=>[Pw]),_:1})]),_:1}))}},Mw=S("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1),Hw=`<template>
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
</template>`,Nw={__name:"TextContainerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Container",code:Hw},{description:i(()=>[n(" A container can reduce its maximum width to more naturally accommodate a single column of text ")]),example:i(()=>[t(u(Ni),{text:""},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n("Header")]),_:1}),Mw]),_:1})]),_:1}))}},Ow=`<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
</template>`,qw={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Alignment",code:Ow},{description:i(()=>[n(" A container can specify its text alignment ")]),example:i(()=>[t(u(Ni),{textAlign:"left"},{default:i(()=>[n("Left Aligned")]),_:1}),t(u(Ni),{textAlign:"center"},{default:i(()=>[n("Center Aligned")]),_:1}),t(u(Ni),{textAlign:"right"},{default:i(()=>[n("Right Aligned")]),_:1})]),_:1}))}},jw=S("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1),Gw=`<template>
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
</template>`,Uw={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:Gw},{description:i(()=>[n(" A fluid container has no maximum width ")]),example:i(()=>[t(u(Ni),{fluid:""},{default:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n("Dogs Roles with Humans")]),_:1}),jw]),_:1})]),_:1}))}},Yw={__name:"Container",setup(e){const a=[{id:"container",label:"Container",category:"Types",component:Vw},{id:"text-container",label:"Text Container",category:"Types",component:Nw},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:qw},{id:"fluid",label:"Fluid",category:"Variations",component:Uw}];return(l,o)=>(k(),B(rt,{title:"Container",description:"A container limits content to a maximum width","component-docs":a}))}},Jw=`<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,Ww={__name:"DividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Divider",code:Jw},{description:i(()=>[n(" A standard divider ")]),example:i(()=>[t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve)),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},Kw=S("label",null,"Username",-1),Xw=S("input",{type:"text",placeholder:"Username"},null,-1),Qw=S("label",null,"Password",-1),Zw=S("input",{type:"password",placeholder:"Password"},null,-1),eC=`<template>
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
</template>`,tC={__name:"VerticalDividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertical Divider",code:eC},{description:i(()=>[n(" A divider can segment content vertically. ")]),example:i(()=>[t(u(N),{placeholder:""},{default:i(()=>[t(u(bl),{columns:"equal"},{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(at),null,{default:i(()=>[Kw,Xw]),_:1}),t(u(at),null,{default:i(()=>[Qw,Zw]),_:1}),t(u(z),{primary:""},{default:i(()=>[n("Login")]),_:1})]),_:1})]),_:1}),t(u(Tt),{textAlign:"middle"},{default:i(()=>[t(u(z),{secondary:"",icon:"signup",content:"Sign Up"})]),_:1})]),_:1}),t(u(Ve),{vertical:""},{default:i(()=>[n("Or")]),_:1})]),_:1})]),_:1}))}},iC=`<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
</template>`,aC={__name:"HorizontalDividerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal Divider",code:iC},{description:i(()=>[n(" A divider can segment content horizontally ")]),example:i(()=>[t(u(N),{basic:"",textAlign:"center"},{default:i(()=>[t(u(Ze),{icon:"search",iconPosition:"left",action:"Search",placeholder:"Order #"}),t(u(Ve),{horizontal:""},{default:i(()=>[n("Or")]),_:1}),t(u(z),{labeled:"",icon:"add",color:"green",content:"Create New Order"})]),_:1})]),_:1}))}},lC=`<template>
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
</template>`,nC={__name:"HorizontalAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal Alignment",code:lC},{description:i(()=>[n(" A horizontal divider can be aligned ")]),example:i(()=>[t(u(Ve),{horizontal:"",textAlign:"left"},{default:i(()=>[t(u(W),{name:"left align"}),n(" Left Aligned ")]),_:1}),t(u(Ve),{horizontal:"",textAlign:"center"},{default:i(()=>[t(u(W),{name:"center align"}),n(" Center Aligned ")]),_:1}),t(u(Ve),{horizontal:"",textAlign:"right"},{default:i(()=>[t(u(W),{name:"right align"}),n(" Right Aligned ")]),_:1})]),_:1}))}},oC=`<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`,sC={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:oC},{description:i(()=>[n(" A divider can have its colors inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{inverted:""}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{horizontal:"",inverted:""},{default:i(()=>[n("Horizontal")]),_:1})]),_:1})]),_:1}))}},rC=`<template>
  <SuiSegment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <SuiDivider fitted />
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </SuiSegment>
</template>`,uC={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:rC},{description:i(()=>[n(" A divider can be fitted, without any space above or below it. ")]),example:i(()=>[t(u(N),null,{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),t(u(Ve),{fitted:""}),n(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1}))}},cC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider hidden />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,dC={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Hidden",code:cC},{description:i(()=>[n(" A hidden divider divides content without creating a dividing line ")]),example:i(()=>[t(u(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{hidden:""}),t(u(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},mC=`<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
</template>`,pC={__name:"SectionDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Section",code:mC},{description:i(()=>[n(" A divider can provide greater margins to divide sections of content ")]),example:i(()=>[t(u(fe),null,{default:i(()=>[n("Section One")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"}),t(u(Ve),{section:""}),t(u(fe),null,{default:i(()=>[n("Section Two")]),_:1}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1}))}},fC=`<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`,gC={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Clearing",code:fC},{description:i(()=>[n(" A divider can clear the contents above it ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(fe),{floated:"right"},{default:i(()=>[n("Section One")]),_:1}),t(u(Ve),{clearing:""}),t(u(oe),{wireframe:"",src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},hC=`<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
</template>`,_C={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:hC},{description:i(()=>[n(" A divider text can vary in size ")]),example:i(()=>[t(u(Ve),{horizontal:"",size:"mini"},{default:i(()=>[n("MINI")]),_:1}),t(u(Ve),{horizontal:"",size:"tiny"},{default:i(()=>[n("TINY")]),_:1}),t(u(Ve),{horizontal:"",size:"small"},{default:i(()=>[n("SMALL")]),_:1}),t(u(Ve),{horizontal:"",size:"large"},{default:i(()=>[n("LARGE")]),_:1}),t(u(Ve),{horizontal:"",size:"big"},{default:i(()=>[n("BIG")]),_:1}),t(u(Ve),{horizontal:"",size:"huge"},{default:i(()=>[n("HUGE")]),_:1}),t(u(Ve),{horizontal:"",size:"massive"},{default:i(()=>[n("MASSIVE")]),_:1})]),_:1}))}},bC={__name:"Divider",setup(e){const a=[{id:"divider",label:"Divider",category:"Types",component:Ww},{id:"vertical-divider",label:"Vertical Divider",category:"Types",component:tC},{id:"horizontal-divider",label:"Horizontal Divider",category:"Types",component:aC},{id:"horizontal-alignment",label:"Horizontal Alignment",category:"Types",component:nC},{id:"inverted",label:"Inverted",category:"Variations",component:sC},{id:"fitted",label:"Fitted",category:"Variations",component:uC},{id:"hidden",label:"Hidden",category:"Variations",component:dC},{id:"section",label:"Section",category:"Variations",component:pC},{id:"clearing",label:"Clearing",category:"Variations",component:gC},{id:"size",label:"Size",category:"Variations",component:_C}];return(l,o)=>(k(),B(rt,{title:"Divider",description:"A divider visually segments content into groups","component-docs":a}))}},vC=`<template>
  <SuiEmoji name="anguished" disabled />
</template>`,SC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:vC},{description:i(()=>[n(" An emoji can show that it is disabled ")]),example:i(()=>[t(u(It),{name:"anguished",disabled:""})]),_:1}))}},yC=`<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
</template>`,wC={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:yC},{description:i(()=>[n(" An emoji can be used as a simple loader ")]),example:i(()=>[t(u(It),{name:"angel",loading:""}),t(u(It),{name:"blush",loading:""}),t(u(It),{name:"grin",loading:""})]),_:1}))}},CC=`<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
</template>`,AC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:CC},{description:i(()=>[n(" An emoji can vary in size ")]),example:i(()=>[t(u(It),{name:"relaxed",size:"small"}),t(u(It),{name:"relaxed",size:"medium"}),t(u(It),{name:"relaxed",size:"large"}),t(u(It),{name:"relaxed",size:"big"})]),_:1}))}},kC=`<template>
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
</template>`,xC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Autosizing",code:kC},{description:i(()=>[n(" If no specific size class is given, all emojis are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(It),{name:"relaxed"})]),_:1}),t(u(z),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(It),{name:"relaxed"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(It),{name:"relaxed"})]),_:1})]),_:1}))}},$C=`<template>
  <SuiEmoji link name="slight_smile" size="medium" />
</template>`,BC={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:$C},{description:i(()=>[n(" An emoji can be formatted as a link ")]),example:i(()=>[t(u(It),{link:"",name:"slight_smile",size:"medium"})]),_:1}))}},TC={__name:"Emoji",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:SC},{id:"loading",label:"Loading",category:"States",component:wC},{id:"size",label:"Size",category:"Variations",component:AC},{id:"autosizing",label:"Autosizing",category:"Variations",component:xC},{id:"link",label:"Link",category:"Variations",component:BC}];return(l,o)=>(k(),B(rt,{title:"Emoji",description:"An emoji is a glyph used to represent an emotional state","component-docs":a}))}},DC=`<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
</template>`,LC={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:DC},{description:i(()=>[n(" A flag can vary in size ")]),example:i(()=>[t(u(Jt),{name:"de",size:"small"}),t(u(Jt),{name:"fr",size:"medium"}),t(u(Jt),{name:"li",size:"large"}),t(u(Jt),{name:"jp",size:"big"}),t(u(Jt),{name:"gb",size:"huge"}),t(u(Jt),{name:"un",size:"massive"})]),_:1}))}},IC=`<template>
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
</template>`,EC={__name:"AutosizingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Autosizing",code:IC},{description:i(()=>[n(" If no specific size class is given, all flags are automatically sized according to the current element font-size ")]),example:i(()=>[t(u(fe),{size:"small"},{default:i(()=>[n(" Within a Header "),t(u(Jt),{name:"us"})]),_:1}),t(u(z),{as:"div",size:"large"},{default:i(()=>[n(" Within a Button "),t(u(Jt),{name:"eu"})]),_:1}),t(u(O),{size:"massive"},{default:i(()=>[n(" Within a Label "),t(u(Jt),{name:"pirate"})]),_:1})]),_:1}))}},RC={__name:"Flag",setup(e){const a=[{id:"size",label:"Size",category:"Types",component:LC},{id:"autosizing",label:"Autosizing",category:"Types",component:EC}];return(l,o)=>(k(),B(rt,{title:"Flag",description:"A flag is used to represent a political state","component-docs":a}))}},zC=`<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
</template>`,PC={__name:"PageHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Page Headers",code:zC},{description:i(()=>[n(" Headers may be oriented to give the hierarchy of a section in the context of the page ")]),example:i(()=>[t(u(fe),{as:"h1"},{default:i(()=>[n("First Header")]),_:1}),t(u(fe),{as:"h2"},{default:i(()=>[n("Second Header")]),_:1}),t(u(fe),{as:"h3"},{default:i(()=>[n("Third Header")]),_:1}),t(u(fe),{as:"h4"},{default:i(()=>[n("Fourth Header")]),_:1}),t(u(fe),{as:"h5"},{default:i(()=>[n("Fifth Header")]),_:1})]),_:1}))}},FC=`<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
</template>`,VC={__name:"ContentHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Content Headers",code:FC},{description:i(()=>[n(" Headers may be oriented to give the importance of a section in the context of the content that surrounds it ")]),example:i(()=>[t(u(fe),{size:"huge"},{default:i(()=>[n("Huge Header")]),_:1}),t(u(fe),{size:"large"},{default:i(()=>[n("Large Header")]),_:1}),t(u(fe),{size:"medium"},{default:i(()=>[n("Medium Header")]),_:1}),t(u(fe),{size:"small"},{default:i(()=>[n("Small Header")]),_:1}),t(u(fe),{size:"tiny"},{default:i(()=>[n("Tiny Header")]),_:1})]),_:1}))}},MC=`<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,HC={__name:"IconHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon Headers",code:MC},{description:i(()=>[n(" A header can be formatted to emphasize an icon ")]),example:i(()=>[t(u(fe),{icon:""},{default:i(()=>[t(u(W),{name:"settings"}),t(u(ys),null,{default:i(()=>[n(" Account Settings ")]),_:1}),t(u(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},NC=S("span",null,"$10.99",-1),OC=`<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
</template>`,qC={__name:"SubHeadersDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Sub Headers",code:OC},{description:i(()=>[n(" Headers may be formatted to label smaller or de-emphasized content. ")]),example:i(()=>[t(u(fe),{sub:""},{default:i(()=>[n("Price")]),_:1}),NC]),_:1}))}},jC=`<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
</template>`,GC={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image",code:jC},{description:i(()=>[n(" A header may contain an image ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/avatar/large/steve.jpg",avatar:""}),n(" Steve ")]),_:1})]),_:1}))}},UC=`<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`,YC={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:UC},{description:i(()=>[n(" A header may contain an Icon ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[t(u(W),{name:"plug"}),t(u(ys),null,{default:i(()=>[n(" Uptime Guarantee ")]),_:1})]),_:1})]),_:1}))}},JC=`<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`,WC={__name:"SubheaderDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Subheader",code:JC},{description:i(()=>[n(" Headers may contain subheaders ")]),example:i(()=>[t(u(fe),{as:"h2"},{default:i(()=>[n(" Account Settings "),t(u(Ji),null,{default:i(()=>[n(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1}))}},KC=`<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`,XC={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:KC},{description:i(()=>[n(" A header can show that it is inactive ")]),example:i(()=>[t(u(fe),{disabled:""},{default:i(()=>[n(" Disabled Header ")]),_:1})]),_:1}))}},QC=`<template>
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`,ZC={__name:"DividingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Dividing",code:QC},{description:i(()=>[n(" A header can be formatted to divide itself from the content below it ")]),example:i(()=>[t(u(fe),{as:"h3",dividing:""},{default:i(()=>[n(" Dividing Header ")]),_:1})]),_:1}))}},eA=`<template>
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`,tA={__name:"BlockDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Block",code:eA},{description:i(()=>[n(" A header can be formatted to appear inside a content block ")]),example:i(()=>[t(u(fe),{as:"h3",block:""},{default:i(()=>[n(" Block Header ")]),_:1})]),_:1}))}},iA=`<template>
  <SuiHeader as="h2" attached="top">
    Attached Header
  </SuiHeader>
  <SuiSegment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SuiSegment>
</template>`,aA={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Attached",code:iA},{description:i(()=>[n(" A header can be attached to other content, like a segment ")]),example:i(()=>[t(u(fe),{as:"h2",attached:"top"},{default:i(()=>[n(" Attached Header ")]),_:1}),t(u(N),{attached:""},{default:i(()=>[n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})]),_:1}))}},lA=`<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`,nA={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floating",code:lA},{description:i(()=>[n(" A header can sit to the left or right of other content ")]),example:i(()=>[t(u(N),{clearing:""},{default:i(()=>[t(u(fe),{as:"h3",floated:"right"},{default:i(()=>[n(" Go Forward ")]),_:1}),t(u(fe),{as:"h3",floated:"left"},{default:i(()=>[n(" Go Back ")]),_:1})]),_:1})]),_:1}))}},oA=`<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`,sA={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Alignment",code:oA},{description:i(()=>[n(" A header can have its text aligned to a side ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(fe),{as:"h3",textAlign:"right"},{default:i(()=>[n("Float Right")]),_:1}),t(u(fe),{as:"h3",textAlign:"left"},{default:i(()=>[n("Float Left")]),_:1}),t(u(fe),{as:"h3",textAlign:"justified"},{default:i(()=>[n(" This text takes up the full width of the container ")]),_:1}),t(u(fe),{as:"h3",textAlign:"center"},{default:i(()=>[n("Centered")]),_:1})]),_:1})]),_:1}))}},rA=`<template>
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
</template>`,uA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:rA},{description:i(()=>[n(" A header can be formatted with different colors ")]),example:i(()=>[t(u(fe),{as:"h4",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(fe),{as:"h4",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(fe),{as:"h4",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(fe),{as:"h4",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(fe),{as:"h4",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(fe),{as:"h4",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(fe),{as:"h4",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(fe),{as:"h4",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(fe),{as:"h4",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(fe),{as:"h4",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(fe),{as:"h4",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(fe),{as:"h4",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(fe),{as:"h4",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(fe),{as:"h4",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1}))}},cA=`<template>
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
</template>`,dA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:cA},{description:i(()=>[n(" A header can have its colors inverted for contrast ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(fe),{as:"h4",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(fe),{as:"h4",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1})]),_:1})]),_:1}))}},mA={__name:"Header",setup(e){const a=[{id:"page-headers",label:"Page Headers",category:"Types",component:PC},{id:"content-headers",label:"Content Headers",category:"Types",component:VC},{id:"icon-headers",label:"Icon Headers",category:"Types",component:HC},{id:"sub-headers",label:"Sub Headers",category:"Types",component:qC},{id:"image",label:"Image",category:"Content",component:GC},{id:"icon",label:"Icon",category:"Content",component:YC},{id:"subheader",label:"Subheader",category:"Content",component:WC},{id:"disabled",label:"Disabled",category:"States",component:XC},{id:"dividing",label:"Dividing",category:"Variations",component:ZC},{id:"block",label:"Block",category:"Variations",component:tA},{id:"attached",label:"Attached",category:"Variations",component:aA},{id:"floating",label:"Floating",category:"Variations",component:nA},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:sA},{id:"colored",label:"Colored",category:"Variations",component:uA},{id:"inverted",label:"Inverted",category:"Variations",component:dA}];return(l,o)=>(k(),B(rt,{title:"Header",description:"A header provides a short summary of content","component-docs":a}))}},pA=`<template>
  <SuiIcon name="users" disabled />
</template>`,fA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:pA},{description:i(()=>[n(" An icon can show that it is disabled ")]),example:i(()=>[t(u(W),{name:"users",disabled:""})]),_:1}))}},gA=`<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`,hA={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:gA},{description:i(()=>[n(" An icon can be used as a simple loader ")]),example:i(()=>[t(u(W),{name:"spinner",loading:""}),t(u(W),{name:"notched circle",loading:""}),t(u(W),{name:"asterisk",loading:""})]),_:1}))}},_A=S("br",null,null,-1),bA=`<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`,vA={__name:"FittedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fitted",code:bA},{description:i(()=>[n(" An icon can be fitted, without any space to the left or right of it. ")]),example:i(()=>[S("div",null,[n(" This icon "),t(u(W),{name:"help",fitted:""}),n(" is fitted. "),_A,n(" This icon "),t(u(W),{name:"help"}),n(" is not fitted. ")])]),_:1}))}},SA=`<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`,yA={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:SA},{description:i(()=>[n(" An icon can vary in size ")]),example:i(()=>[t(u(W),{name:"home",size:"mini"}),t(u(W),{name:"home",size:"tiny"}),t(u(W),{name:"home",size:"small"}),t(u(W),{name:"home"}),t(u(W),{name:"home",size:"large"}),t(u(W),{name:"home",size:"big"}),t(u(W),{name:"home",size:"huge"}),t(u(W),{name:"home",size:"massive"})]),_:1}))}},wA=`<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`,CA={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:wA},{description:i(()=>[n(" An icon can be formatted as a link ")]),example:i(()=>[t(u(W),{name:"close",link:""}),t(u(W),{name:"help",link:""})]),_:1}))}},AA=`<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`,kA={__name:"FlippedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Flipped",code:AA},{description:i(()=>[n(" An icon can be flipped ")]),example:i(()=>[t(u(W),{name:"cloud",flipped:"horizontally"}),t(u(W),{name:"cloud",flipped:"vertically"})]),_:1}))}},xA=`<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`,$A={__name:"RotatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Rotated",code:xA},{description:i(()=>[n(" An icon can be rotated ")]),example:i(()=>[t(u(W),{name:"cloud",rotated:"clockwise"}),t(u(W),{name:"cloud",rotated:"counterclockwise"})]),_:1}))}},BA=`<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`,TA={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:BA},{description:i(()=>[n(" An icon can be formatted to appear circular ")]),example:i(()=>[t(u(W),{name:"users",circular:""}),t(u(W),{name:"users",circular:"",color:"teal"}),t(u(W),{name:"users",circular:"",inverted:""}),t(u(W),{name:"users",circular:"",inverted:"",color:"teal"})]),_:1}))}},DA=`<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`,LA={__name:"CircularColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular Colored",code:DA},{description:i(()=>[n(" The circular color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(W),{name:"users",circular:"",colored:"",color:"red"}),t(u(W),{name:"users",circular:"",colored:"",color:"green"}),t(u(W),{name:"users",circular:"",colored:"",color:"blue"})]),_:1}))}},IA=`<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`,EA={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Bordered",code:IA},{description:i(()=>[n(" An icon can be formatted to appear bordered ")]),example:i(()=>[t(u(W),{name:"users",bordered:""}),t(u(W),{name:"users",bordered:"",color:"teal"}),t(u(W),{name:"users",bordered:"",inverted:"",color:"black"}),t(u(W),{name:"users",bordered:"",inverted:"",color:"teal"})]),_:1}))}},RA=`<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`,zA={__name:"BorderedColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Bordered Colored",code:RA},{description:i(()=>[n(" The bordered color can appear in the same color as the icon itself ")]),example:i(()=>[t(u(W),{name:"users",bordered:"",colored:"",color:"red"}),t(u(W),{name:"users",bordered:"",colored:"",color:"green"}),t(u(W),{name:"users",bordered:"",colored:"",color:"blue"})]),_:1}))}},PA=`<template>
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
</template>`,FA={__name:"ColoredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Colored",code:PA},{description:i(()=>[n(" An icon can be formatted with different colors ")]),example:i(()=>[t(u(W),{name:"users",primary:""}),t(u(W),{name:"users",secondary:""}),t(u(W),{name:"users",color:"red"}),t(u(W),{name:"users",color:"orange"}),t(u(W),{name:"users",color:"yellow"}),t(u(W),{name:"users",color:"olive"}),t(u(W),{name:"users",color:"green"}),t(u(W),{name:"users",color:"teal"}),t(u(W),{name:"users",color:"blue"}),t(u(W),{name:"users",color:"violet"}),t(u(W),{name:"users",color:"purple"}),t(u(W),{name:"users",color:"pink"}),t(u(W),{name:"users",color:"brown"}),t(u(W),{name:"users",color:"grey"}),t(u(W),{name:"users",color:"black"})]),_:1}))}},VA=`<template>
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
</template>`,MA={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:VA},{description:i(()=>[n(" An icon can have its colors inverted for contrast ")]),example:i(()=>[t(u(W),{name:"users",inverted:""}),t(u(W),{name:"users",inverted:"",primary:""}),t(u(W),{name:"users",inverted:"",secondary:""}),t(u(W),{name:"users",inverted:"",color:"red"}),t(u(W),{name:"users",inverted:"",color:"orange"}),t(u(W),{name:"users",inverted:"",color:"yellow"}),t(u(W),{name:"users",inverted:"",color:"olive"}),t(u(W),{name:"users",inverted:"",color:"green"}),t(u(W),{name:"users",inverted:"",color:"teal"}),t(u(W),{name:"users",inverted:"",color:"blue"}),t(u(W),{name:"users",inverted:"",color:"violet"}),t(u(W),{name:"users",inverted:"",color:"purple"}),t(u(W),{name:"users",inverted:"",color:"pink"}),t(u(W),{name:"users",inverted:"",color:"brown"}),t(u(W),{name:"users",inverted:"",color:"grey"})]),_:1}))}},HA=`<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`,NA={__name:"IconsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icons",code:HA},{description:i(()=>[n(" Several icons can be used together as a group ")]),example:i(()=>[t(u(zi),{size:"huge"},{default:i(()=>[t(u(W),{name:"circle outline",size:"big"}),t(u(W),{name:"user"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(W),{name:"dont",size:"big",color:"red"}),t(u(W),{name:"user",color:"black"})]),_:1})]),_:1}))}},OA=`<template>
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
</template>`,qA={__name:"CornerIconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Corner Icon",code:OA},{description:i(()=>[n(" A group of icons can display a smaller corner icon ")]),example:i(()=>[t(u(zi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"top left"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"top right"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"bottom left"})]),_:1}),t(u(zi),{size:"huge"},{default:i(()=>[t(u(W),{name:"puzzle"}),t(u(W),{name:"add",corner:"bottom right"})]),_:1})]),_:1}))}},jA={__name:"Icon",setup(e){const a=[{id:"disabled",label:"Disabled",category:"States",component:fA},{id:"loading",label:"Loading",category:"States",component:hA},{id:"fitted",label:"Fitted",category:"Variations",component:vA},{id:"size",label:"Size",category:"Variations",component:yA},{id:"link",label:"Link",category:"Variations",component:CA},{id:"flipped",label:"Flipped",category:"Variations",component:kA},{id:"rotated",label:"Rotated",category:"Variations",component:$A},{id:"circular",label:"Circular",category:"Variations",component:TA},{id:"circular-colored",label:"Circular Colored",category:"Variations",component:LA},{id:"bordered",label:"Bordered",category:"Variations",component:EA},{id:"bordered-colored",label:"Bordered Colored",category:"Variations",component:zA},{id:"colored",label:"Colored",category:"Variations",component:FA},{id:"inverted",label:"Inverted",category:"Variations",component:MA},{id:"icons",label:"Icons",category:"Groups",component:NA},{id:"corner-icon",label:"Corner Icon",category:"Groups",component:qA}];return(l,o)=>(k(),B(rt,{title:"Icon",description:"An icon is a glyph used to represent something else","component-docs":a}))}},GA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
</template>`,UA={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image",code:GA},{description:i(()=>[n(" An image ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},YA=`<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
</template>`,JA={__name:"ImageLinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image Link",code:YA},{description:i(()=>[n(" An image can be formatted to link to other content ")]),example:i(()=>[t(u(oe),{as:"a",size:"medium",href:"https://google.com",src:"/vue-fomantic-ui/images/wireframe/image-text.png",target:"_blank"})]),_:1}))}},WA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" hidden />
</template>`,KA={__name:"HiddenDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Hidden",code:WA},{description:i(()=>[n(" An image can be hidden ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",hidden:""})]),_:1}))}},XA=`<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
</template>`,QA={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:XA},{description:i(()=>[n(" An image can show that it is disabled and cannot be selected ")]),example:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png",disabled:""})]),_:1}))}},ZA=S("span",null,"Username",-1),e0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
</template>`,t0={__name:"AvatarDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Avatar",code:e0},{description:i(()=>[n(" An image may be formatted to appear inline with text as an avatar ")]),example:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/square-image.png",avatar:""}),ZA]),_:1}))}},i0=`<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
</template>`,a0={__name:"BorderedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Bordered",code:i0},{description:i(()=>[n(" An image may include a border to emphasize the edges of white or transparent content ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/white-image.png",bordered:""})]),_:1}))}},l0=`<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
</template>`,n0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:l0},{description:i(()=>[n(" An image can take up the width of its container ")]),example:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png",fluid:""})]),_:1}))}},o0=`<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
</template>`,s0={__name:"RoundedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Rounded",code:o0},{description:i(()=>[n(" An image may appear rounded ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png",rounded:""})]),_:1}))}},r0=`<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
</template>`,u0={__name:"CircularDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular",code:r0},{description:i(()=>[n(" An image may appear circular ")]),example:i(()=>[t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/square-image.png",circular:""})]),_:1}))}},c0=S("span",null,"Top Aligned",-1),d0=S("span",null,"Middle Aligned",-1),m0=S("span",null,"Bottom Aligned",-1),p0=`<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
</template>`,f0={__name:"VerticallyAlignedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Vertically Aligned",code:p0},{description:i(()=>[n(" An image can specify its vertical alignment ")]),example:i(()=>[t(u(oe),{verticalAlign:"top",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),c0,t(u(Ve)),t(u(oe),{verticalAlign:"middle",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),d0,t(u(Ve)),t(u(oe),{verticalAlign:"bottom",size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),m0]),_:1}))}},g0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),h0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),_0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),b0=`<template>
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
</template>`,v0={__name:"CenteredDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Centered",code:b0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(oe),{centered:"",size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"}),g0,h0,t(u(oe),{centered:"",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),_0]),_:1})]),_:1}))}},S0=`<template>
  <SuiSegment>
    <p>
      Te eum doming eirmod, nominati pertinacia <SuiImage spaced size="mini" src="/images/wireframe/image.png" /> argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.
    </p>
  </SuiSegment>
</template>`,y0={__name:"SpacedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Spaced",code:S0},{description:i(()=>[n(" An image can appear centered in a content block ")]),example:i(()=>[t(u(N),null,{default:i(()=>[S("p",null,[n(" Te eum doming eirmod, nominati pertinacia "),t(u(oe),{spaced:"",size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),n(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ")])]),_:1})]),_:1}))}},w0=S("p",null," Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque. ",-1),C0=S("p",null," Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. ",-1),A0=S("p",null," Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id. ",-1),k0=`<template>
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
</template>`,x0={__name:"FloatedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floated",code:k0},{description:i(()=>[n(" An image can sit to the left or right of other content ")]),example:i(()=>[t(u(N),null,{default:i(()=>[t(u(oe),{floated:"left",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),w0,t(u(oe),{floated:"right",size:"small",src:"/vue-fomantic-ui/images/wireframe/image-text.png"}),C0,A0]),_:1})]),_:1}))}},$0=`<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
</template>`,B0={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:$0},{description:i(()=>[n(" An image may appear at different sizes ")]),example:i(()=>[t(u(oe),{size:"mini",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"tiny",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(Ve),{hidden:""}),t(u(oe),{size:"medium",src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}))}},T0=`<template>
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
</template>`,D0={__name:"GroupSizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:T0},{description:i(()=>[n(" A group of images can be formatted to have the same size. ")]),example:i(()=>[t(u(xo),{size:"tiny"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Ve),{hidden:""}),t(u(xo),{size:"small"},{default:i(()=>[t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1}))}},L0={__name:"Image",setup(e){const a=[{id:"image",label:"Image",category:"Types",component:UA},{id:"image-link",label:"Image Link",category:"Types",component:JA},{id:"hidden",label:"Hidden",category:"States",component:KA},{id:"disabled",label:"Disabled",category:"States",component:QA},{id:"avatar",label:"Avatar",category:"Variations",component:t0},{id:"bordered",label:"Bordered",category:"Variations",component:a0},{id:"fluid",label:"Fluid",category:"Variations",component:n0},{id:"rounded",label:"Rounded",category:"Variations",component:s0},{id:"circular",label:"Circular",category:"Variations",component:u0},{id:"vertically-aligned",label:"Vertically Aligned",category:"Variations",component:f0},{id:"centered",label:"Centered",category:"Variations",component:v0},{id:"spaced",label:"Spaced",category:"Variations",component:y0},{id:"floated",label:"Floated",category:"Variations",component:x0},{id:"size",label:"Size",category:"Variations",component:B0},{id:"group-size",label:"Size",category:"Groups",component:D0}];return(l,o)=>(k(),B(rt,{title:"Image",description:"An image is a graphic representation of something","component-docs":a}))}},I0=`<template>
  <SuiInput placeholder="Search..." />
</template>`,E0={__name:"InputDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Input",code:I0},{description:i(()=>[n(" A standard input ")]),example:i(()=>[t(u(Ze),{placeholder:"Search..."})]),_:1}))}},R0=`<template>
  <SuiInput focus placeholder="Search..." />
</template>`,z0={__name:"FocusDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Focus",code:R0},{description:i(()=>[n(" An input field can show a user is currently interacting with it ")]),example:i(()=>[t(u(Ze),{focus:"",placeholder:"Search..."})]),_:1}))}},P0=`<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`,F0={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:P0},{description:i(()=>[n(" An icon input field can show that it is currently loading data ")]),example:i(()=>[t(u(Ze),{loading:"",icon:"user",placeholder:"Search..."}),t(u(Ze),{loading:"",icon:"user",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},V0=`<template>
  <SuiInput disabled placeholder="Search..." />
</template>`,M0={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:V0},{description:i(()=>[n(" An input field can show that it is disabled ")]),example:i(()=>[t(u(Ze),{disabled:"",placeholder:"Search..."})]),_:1}))}},H0=`<template>
  <SuiInput error placeholder="Search..." />
</template>`,N0={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Error",code:H0},{description:i(()=>[n(" An input field can show the data contains errors ")]),example:i(()=>[t(u(Ze),{error:"",placeholder:"Search..."})]),_:1}))}},O0=`<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`,q0={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:O0},{description:i(()=>[n(" An input can be formatted with an icon ")]),example:i(()=>[t(u(Ze),{icon:"search",placeholder:"Search..."}),t(u(Ze),{icon:"users",iconPosition:"left",placeholder:"Search..."})]),_:1}))}},j0=`<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`,G0={__name:"LabeledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Labeled",code:j0},{description:i(()=>[n(" An input can be formatted with a label ")]),example:i(()=>[t(u(Ze),{label:"http://",placeholder:"mysite.com"})]),_:1}))}},U0=`<template>
  <SuiInput action="Search" />
</template>`,Y0={__name:"ActionDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Action",code:U0},{description:i(()=>[n(" An input can be formatted to alert the user to an action they may perform ")]),example:i(()=>[t(u(Ze),{action:"Search"})]),_:1}))}},J0=`<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`,W0={__name:"TransparentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Transparent",code:J0},{description:i(()=>[n(" A transparent input has no background ")]),example:i(()=>[t(u(Ze),{transparent:"",icon:"search",placeholder:"Search..."})]),_:1}))}},K0=`<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`,X0={__name:"InvertedDoc",setup(e){return(a,l)=>{const o=y("SuiSegment");return k(),B(I,{label:"Inverted",code:K0},{description:i(()=>[n(" An input can be formatted to appear on dark backgrounds ")]),example:i(()=>[t(o,{inverted:""},{default:i(()=>[t(u(Ze),{inverted:"",placeholder:"Search..."})]),_:1})]),_:1})}}},Q0=`<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`,Z0={__name:"FluidDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fluid",code:Q0},{description:i(()=>[n(" An input can take the size of its container ")]),example:i(()=>[t(u(Ze),{fluid:"",icon:"search",placeholder:"Search..."})]),_:1}))}},ek=`<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`,tk={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:ek},{description:i(()=>[n(" An input can vary in size ")]),example:i(()=>[t(u(Ze),{icon:"search",placeholder:"Search mini...",size:"mini"}),t(u(Ze),{icon:"search",placeholder:"Search small...",size:"small"}),t(u(Ze),{icon:"search",placeholder:"Search large...",size:"large"}),t(u(Ze),{icon:"search",placeholder:"Search big...",size:"big"}),t(u(Ze),{icon:"search",placeholder:"Search huge...",size:"huge"}),t(u(Ze),{icon:"search",placeholder:"Search massive...",size:"massive"})]),_:1}))}},ik={__name:"Input",setup(e){const a=[{id:"input",label:"Input",category:"Types",component:E0},{id:"focus",label:"Focus",category:"States",component:z0},{id:"loading",label:"Loading",category:"States",component:F0},{id:"disabled",label:"Disabled",category:"States",component:M0},{id:"error",label:"Error",category:"States",component:N0},{id:"icon",label:"Icon",category:"Variations",component:q0},{id:"labeled",label:"Labeled",category:"Variations",component:G0},{id:"action",label:"Action",category:"Variations",component:Y0},{id:"transparent",label:"Transparent",category:"Variations",component:W0},{id:"inverted",label:"Inverted",category:"Variations",component:X0},{id:"fluid",label:"Fluid",category:"Variations",component:Z0},{id:"size",label:"Size",category:"Variations",component:tk}];return(l,o)=>(k(),B(rt,{title:"Input",description:"An input is a field used to elicit a response from a user","component-docs":a}))}},ak=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`,lk={__name:"LabelDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Label",code:ak},{description:i(()=>[n(" A label ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" 23 ")]),_:1})]),_:1}))}},nk="/vue-fomantic-ui/images/avatar/small/joe.jpg",jd="/vue-fomantic-ui/images/avatar/small/veronika.jpg",oi="/vue-fomantic-ui/images/avatar/small/elliot.jpg",ok=S("img",{src:nk},null,-1),sk=S("img",{src:jd},null,-1),rk=S("img",{src:oi},null,-1),uk=`<template>
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
</template>`,ck={__name:"ImageDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Image",code:uk},{description:i(()=>[n(" A label can be formatted to emphasize an image ")]),example:i(()=>[t(u(O),{as:"a",image:""},{default:i(()=>[ok,n(" Joe ")]),_:1}),t(u(O),{as:"a",image:"",color:"blue"},{default:i(()=>[sk,n(" Veronika "),t(u(Da),null,{default:i(()=>[n("Friend")]),_:1})]),_:1}),t(u(O),{as:"a",image:""},{default:i(()=>[rk,n(" Elliot "),t(u(W),{name:"delete"})]),_:1})]),_:1}))}},dk=S("input",{type:"text",placeholder:"First Name"},null,-1),mk=S("input",{type:"text"},null,-1),pk=S("input",{type:"text",placeholder:"Username"},null,-1),fk=S("input",{type:"password"},null,-1),gk=`<template>
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
</template>`,bk={__name:"CornerDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Corner",code:_k},{description:i(()=>[n(" A label can position itself in the corner of an element ")]),example:i(()=>[t(u(bl),{columns:2},{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(oe),{label:{as:"a",corner:"left",icon:"heart"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(oe),{label:{as:"a",color:"red",corner:"right",icon:"save"},src:"/vue-fomantic-ui/images/wireframe/image.png"})]),_:1})]),_:1})]),_:1}))}},vk=`<template>
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
</template>`,xk={__name:"RibbonDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Ribbon",code:kk},{description:i(()=>[n(" A label can appear as a ribbon attaching itself to an element. ")]),example:i(()=>[t(u(bl),{columns:2},{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(N),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"",color:"red"},{default:i(()=>[n("Overview")]),_:1}),yk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"",color:"blue"},{default:i(()=>[n("Community")]),_:1}),wk,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{raised:""},{default:i(()=>[t(u(O),{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[n("Specs")]),_:1}),Ck,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"}),t(u(O),{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[n("Reviews")]),_:1}),Ak,t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1}))}},$k=`<template>
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
</template>`,Bk={__name:"AttachedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Attached",code:$k},{description:i(()=>[n(" A label can attach to a content segment ")]),example:i(()=>[t(u(bl),{columns:3},{default:i(()=>[t(u(Bo),null,{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top"},{default:i(()=>[n("HTML")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom"},{default:i(()=>[n("CSS")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top right"},{default:i(()=>[n("Code")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1}),t(u(Bo),null,{default:i(()=>[t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"top left"},{default:i(()=>[n("View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom left"},{default:i(()=>[n("User View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1}),t(u(Tt),null,{default:i(()=>[t(u(N),{padded:""},{default:i(()=>[t(u(O),{attached:"bottom right"},{default:i(()=>[n("Admin View")]),_:1}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/paragraph.png"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Tk=`<template>
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
</template>`,Dk={__name:"HorizontalDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Horizontal",code:Tk},{description:i(()=>[n(" A horizontal label is formatted to label content along-side it horizontally ")]),example:i(()=>[t(u(hd),{divided:"",selection:""},{default:i(()=>[t(u(Ha),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Kumquats ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{color:"purple",horizontal:""},{default:i(()=>[n("Candy")]),_:1}),n(" Ice Cream ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{color:"red",horizontal:""},{default:i(()=>[n("Fruit")]),_:1}),n(" Orange ")]),_:1}),t(u(Ha),null,{default:i(()=>[t(u(O),{horizontal:""},{default:i(()=>[n("Dog")]),_:1}),n(" Poodle ")]),_:1})]),_:1})]),_:1}))}},Lk=`<template>
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
</template>`,Ik={__name:"FloatingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Floating",code:Lk},{description:i(()=>[n(" A label can float above or below another element ")]),example:i(()=>[t(u(_d),{compact:""},{default:i(()=>[t(u(To),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" Messages "),t(u(O),{floating:"",color:"red"},{default:i(()=>[n("22")]),_:1})]),_:1}),t(u(To),null,{default:i(()=>[t(u(W),{name:"users"}),n(" Friends "),t(u(O),{floating:"",color:"teal"},{default:i(()=>[n("22")]),_:1})]),_:1})]),_:1})]),_:1}))}},Ek=`<template>
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
</template>`,Rk={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:Ek},{description:i(()=>[n(" All Variants of Label can be inverted ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(O),{as:"a",inverted:"",primary:""},{default:i(()=>[n("Primary")]),_:1}),t(u(O),{as:"a",inverted:"",secondary:""},{default:i(()=>[n("Secondary")]),_:1}),t(u(O),{as:"a",inverted:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(u(O),{as:"a",inverted:"",color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(u(O),{as:"a",inverted:"",color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"green"},{default:i(()=>[n("Green")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(u(O),{as:"a",basic:"",inverted:"",color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(u(O),{as:"a",tag:"",inverted:"",color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1}))}},zk=`<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`,Pk={__name:"DetailDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Detail",code:zk},{description:i(()=>[n(" A label can contain a detail ")]),example:i(()=>[t(u(O),null,{default:i(()=>[n(" Dogs "),t(u(Da),null,{default:i(()=>[n("214")]),_:1})]),_:1})]),_:1}))}},Fk=`<template>
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
</template>`,Vk={__name:"IconDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Icon",code:Fk},{description:i(()=>[n(" A label can include an icon ")]),example:i(()=>[t(u(O),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" Mail ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(W),{name:"checkmark"}),n(" Test Passed ")]),_:1}),t(u(O),{icon:"dog"}),t(u(O),{icon:"cat"})]),_:1}))}},Mk=`<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`,Hk={__name:"LinkDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Link",code:Mk},{description:i(()=>[n(" A label can be a link or contain an item that links ")]),example:i(()=>[t(u(O),{as:"a"},{default:i(()=>[t(u(W),{name:"mail"}),n(" 23 ")]),_:1}),t(u(O),null,{default:i(()=>[t(u(W),{name:"mail"}),n(" 23 "),t(u(Da),null,{default:i(()=>[n("View Mail")]),_:1})]),_:1})]),_:1}))}},Nk=`<template>
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
</template>`,nx={__name:"ColoredGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Clored Group",code:lx},{description:i(()=>[n(" Labels can share colors together ")]),example:i(()=>[t(u(La),{color:"blue"},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(W),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Da),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},ox=`<template>
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
</template>`,sx={__name:"BasicGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic Group",code:ox},{description:i(()=>[n(" Labels can share their style together ")]),example:i(()=>[t(u(La),{basic:""},{default:i(()=>[t(u(O),null,{default:i(()=>[n(" Fun "),t(u(W),{name:"close"})]),_:1}),t(u(O),null,{default:i(()=>[n(" Happy "),t(u(Da),null,{default:i(()=>[n("Smart")]),_:1})]),_:1}),t(u(O),null,{default:i(()=>[n("Insane")]),_:1}),t(u(O),null,{default:i(()=>[n("Exciting")]),_:1})]),_:1})]),_:1}))}},rx=`<template>
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
</template>`,dx={__name:"CircularGroupDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Circular Group",code:cx},{description:i(()=>[n(" Labels can share shapes ")]),example:i(()=>[t(u(La),{circular:""},{default:i(()=>[t(u(O),{as:"a"},{default:i(()=>[n("1")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("3")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("4")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("14")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("16")]),_:1}),t(u(O),{as:"a"},{default:i(()=>[n("34")]),_:1})]),_:1})]),_:1}))}},mx={__name:"Label",setup(e){const a=[{id:"label",label:"Label",category:"Types",component:lk},{id:"image",label:"Image",category:"Types",component:ck},{id:"pointing",label:"Pointing",category:"Types",component:hk},{id:"corner",label:"Corner",category:"Types",component:bk},{id:"tag",label:"Tag",category:"Types",component:Sk},{id:"ribbon",label:"Ribbon",category:"Types",component:xk},{id:"attached",label:"Attached",category:"Types",component:Bk},{id:"horizontal",label:"Horizontal",category:"Types",component:Dk},{id:"floating",label:"Floating",category:"Types",component:Ik},{id:"inverted",label:"Inverted",category:"Types",component:Rk},{id:"detail",label:"Detail",category:"Content",component:Pk},{id:"icon",label:"Icon",category:"Content",component:Vk},{id:"link",label:"Link",category:"Content",component:Hk},{id:"disabled",label:"Disabled",category:"States",component:Ok},{id:"fluid",label:"Fluid",category:"Variations",component:jk},{id:"circular",label:"Circular",category:"Variations",component:Uk},{id:"basic",label:"Basic",category:"Variations",component:Wk},{id:"colored",label:"Colored",category:"Variations",component:Xk},{id:"basic-tag",label:"Basic Tag",category:"Variations",component:Zk},{id:"size",label:"Size",category:"Variations",component:tx},{id:"group-size",label:"Group Size",category:"Groups",component:ax},{id:"colored-group",label:"Colored Group",category:"Groups",component:nx},{id:"basic-group",label:"Basic Group",category:"Groups",component:sx},{id:"tag-group",label:"Tag Group",category:"Groups",component:ux},{id:"circular-group",label:"Circular Group",category:"Groups",component:dx}];return(l,o)=>(k(),B(rt,{title:"Label",description:"A label displays content classification","component-docs":a}))}},px=Yh(lg);function fx(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var El=px,Wn=fx(rd),gx=El.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(a,l){var o=l.slots,s=l.attrs,d=o&&o.default&&o.default()||[],m=a.code||d&&d.length?d[0].children:"",f=a.inline,r=a.language,c=Wn.languages[r],g="language-".concat(r);return function(){return f?El.h("code",{class:[g],innerHTML:Wn.highlight(m,c)}):El.h("pre",Object.assign({},s,{class:[s.class,g]}),[El.h("code",Object.assign({},s,{class:[s.class,g],innerHTML:Wn.highlight(m,c)}))])}}}),hx=gx;const _x=od(hx),bx=P({name:"DocExample",components:{Prism:_x},props:{title:String,description:String,code:String},setup(){const e=G(!1);return{active:e,toggle:()=>e.value=!e.value}}}),vx={class:"example"};function Sx(e,a,l,o,s,d){const m=y("sui-header-subheader"),f=y("sui-header"),r=y("sui-grid-column"),c=y("sui-icon"),g=y("sui-grid-row"),p=y("prism"),h=y("sui-grid");return k(),be("div",vx,[t(h,{columns:2},{default:i(()=>[t(g,null,{default:i(()=>[t(r,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.description),1)]),_:1})]),_:1})]),_:1}),t(r,{textAlign:"right"},{default:i(()=>[t(c,{name:"code",color:"grey",onClick:e.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(r,{width:16},{default:i(()=>[ji(e.$slots,"default",{},void 0,!0)]),_:3}),e.active?(k(),B(r,{key:0,width:16},{default:i(()=>[t(p,{language:"markup"},{default:i(()=>[n(Te(e.code),1)]),_:1})]),_:1})):ds("",!0)]),_:3})]),_:3})])}const et=Re(bx,[["render",Sx],["__scopeId","data-v-fcfb6a67"]]),yx="/vue-fomantic-ui/images/avatar/small/rachel.png",wx="/vue-fomantic-ui/images/avatar/small/lindsay.png",Cx="/vue-fomantic-ui/images/avatar/small/matthew.png",kn="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Ax="/vue-fomantic-ui/images/avatar/small/tom.jpg",Rl="/vue-fomantic-ui/images/avatar/small/christian.jpg",xn="/vue-fomantic-ui/images/avatar/small/matt.jpg",qa="/vue-fomantic-ui/images/avatar/small/helen.jpg",Li="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Po="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Kn="/vue-fomantic-ui/images/wireframe/square-image.png",kx=P({name:"ListDoc",components:{DocExample:et},setup(){return{listCode:`<sui-list>
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
</div>`}}}),xx={class:"intro"},$x=S("div",null,"Benefits",-1),Bx={class:"list"},Tx=S("a",null,"Languages",-1),Dx=S("a",null,[S("b",null,"Arrested Development")],-1),Lx=S("a",null,[S("b",null,"Bob's Burgers")],-1),Ix=S("a",null,[S("b",null,"The Godfather Part 2")],-1),Ex=S("a",null,[S("b",null,"Twin Peaks")],-1),Rx=S("a",null,[S("b",null,"Arrested Development")],-1),zx=S("a",null,[S("b",null,"Bob's Burgers")],-1),Px=S("a",null,[S("b",null,"The Godfather Part 2")],-1);function Fx(e,a,l,o,s,d){const m=y("sui-header-subheader"),f=y("sui-header"),r=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-list-item"),A=y("sui-list"),$=y("doc-example"),D=y("sui-list-list"),_=y("sui-list-header"),v=y("sui-list-description"),x=y("sui-list-content"),T=y("sui-image");return k(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",xx,[t(f,{as:"h1"},{default:i(()=>[n("List "),t(m,null,{default:i(()=>[n(" A list is used to group related content ")]),_:1})]),_:1}),t(r,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"List",description:"A list groups related content",code:e.listCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Apples")]),_:1}),t(b,null,{default:i(()=>[n("Pears")]),_:1}),t(b,null,{default:i(()=>[n("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Bulleted",description:"A list can mark items with a bullet",code:e.bulletedCode},{default:i(()=>[t(A,{bulleted:""},{default:i(()=>[t(b,null,{default:i(()=>[n("Gaining Access")]),_:1}),t(b,null,{default:i(()=>[n("Inviting Friends")]),_:1}),t(b,null,{default:i(()=>[$x,S("div",Bx,[t(b,{as:"a"},{default:i(()=>[n("Link to somewhere")]),_:1}),t(b,null,{default:i(()=>[n("Rebates")]),_:1}),t(b,null,{default:i(()=>[n("Discounts")]),_:1})])]),_:1}),t(b,null,{default:i(()=>[n("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A list can be ordered numerically",code:e.orderedCode},{default:i(()=>[t(A,{ordered:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("Getting Started")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Introduction")]),_:1}),t(b,null,{default:i(()=>[Tx,t(D,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("HTML")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Javascript")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("CSS")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Review")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can be specially formatted for navigation links",code:e.linkCode},{default:i(()=>[t(A,{link:""},{default:i(()=>[t(b,{active:""},{default:i(()=>[n("Home")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("About")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Team")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Item",description:"A list item can contain a set of items",code:e.itemCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[n("1")]),_:1}),t(b,null,{default:i(()=>[n("2")]),_:1}),t(b,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A list item can contain an icon",code:e.iconCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[t(c,{name:"help"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Floated Icon")]),_:1}),t(v,null,{default:i(()=>[n(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),t(b,{as:"a"},{default:i(()=>[t(c,{name:"right triangle"}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Icon Alignment")]),_:1}),t(v,null,{default:i(()=>[n(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"help"}),n(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Image",description:"A list can contain an image",code:e.imageContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:yx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Rachel")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Dx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:wx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Lindsay")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Lx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Cx}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matthew")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Ix,n(" yesterday. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:kn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Ex,n(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:jd}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(v,null,{default:i(()=>[n(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A list can contain links",code:e.linkContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("What is a FAQ?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Who is our user?")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"header",description:"A list item can contain a header",code:e.headerContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("New York City")]),_:1}),n(" A lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Chicago")]),_:1}),n(" Also quite a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Los Angeles")]),_:1}),n(" Sometimes can be a lovely city ")]),_:1}),t(b,null,{default:i(()=>[t(_,null,{default:i(()=>[n("San Francisco")]),_:1}),n(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"A list item can contain a description",code:e.descriptionContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Krolewskie Jadlo")]),_:1}),t(v,null,{default:i(()=>[n(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Xian Famous Foods")]),_:1}),t(v,null,{default:i(()=>[n(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Sapporo Haru")]),_:1}),t(v,null,{default:i(()=>[n(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(c,{name:"map marker"}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Enid's")]),_:1}),t(v,null,{default:i(()=>[n(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:e.horizontalVarCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Ax}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Tom")]),_:1}),n(" Top Contributor ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Rl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian Rocha")]),_:1}),n(" Admin ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:xn}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Matt")]),_:1}),n(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:e.invertedVarCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(A,{inverted:"",relaxed:"",divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Selection",description:"A selection list formats list items as possible choices",code:e.selectionVarCode},{default:i(()=>[t(A,{selection:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Rl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:e.animatedVarCode},{default:i(()=>[t(A,{animated:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Rl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:e.relaxedVarCode},{default:i(()=>[t(A,{relaxed:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Rx,n(" just now. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Po}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),zx,n(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1}),t(v,null,{default:i(()=>[n(" Last seen watching "),Px,n(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Divided",description:"A list can show divisions between content",code:e.dividedVarCode},{default:i(()=>[t(A,{divided:"",verticalAlign:"middle"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Po}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:oi}),t(x,null,{default:i(()=>[t(_,{as:"a"},{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Celled",description:"A list can divide its items into cells",code:e.celledVarCode},{default:i(()=>[t(A,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Snickerdoodle")]),_:1}),n(" An excellent companion ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Poodle")]),_:1}),n(" A poodle, its pretty basic ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Paulo")]),_:1}),n(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"A list can vary in size",code:e.sizeCode},{default:i(()=>[t(A,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:qa}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Helen")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Rl}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Christian")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Li}),t(x,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content Variations")]),_:1}),t($,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:e.verticalAlignedCode},{default:i(()=>[t(A,{horizontal:""},{default:i(()=>[t(b,null,{default:i(()=>[t(T,{avatar:"",src:Kn}),t(x,{verticalAlign:"top"},{default:i(()=>[n(" Top Aligned ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Kn}),t(x,{verticalAlign:"middle"},{default:i(()=>[n(" Middle ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(T,{avatar:"",src:Kn}),t(x,{verticalAlign:"bottom"},{default:i(()=>[n(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:e.floatedCode},{default:i(()=>[S("div",null,[t(A,{floated:"right",horizontal:""},{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("© GitHub, Inc.")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Terms")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Privacy")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Contact")]),_:1})]),_:1}),t(A,{horizontal:""},{default:i(()=>[t(b,{as:"a"},{default:i(()=>[n("About Us")]),_:1}),t(b,{as:"a"},{default:i(()=>[n("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const Vx=Re(kx,[["render",Fx]]),Mx=`<template>
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
</template>`,o$={__name:"InvertedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Inverted",code:n$},{description:i(()=>[n(" Loaders can have their colors inverted. ")]),example:i(()=>[t(u(N),{inverted:""},{default:i(()=>[t(u(Fe),{active:"",inverted:""}),t(u(oe),{src:"/vue-fomantic-ui/images/wireframe/short-paragraph.png"})]),_:1})]),_:1}))}},s$={__name:"Loader",setup(e){const a=[{id:"loader",label:"Loader",category:"Types",component:Hx},{id:"text-loader",label:"Text Loader",category:"Types",component:Ox},{id:"indeterminate",label:"Indeterminate",category:"States",component:jx},{id:"active",label:"Active",category:"States",component:Ux},{id:"disabled",label:"Disabled",category:"States",component:Jx},{id:"inline",label:"Inline",category:"Variations",component:Kx},{id:"inline-center",label:"Inline Center",category:"Variations",component:Qx},{id:"speed",label:"Speed",category:"Variations",component:e$},{id:"colors",label:"Colors",category:"Variations",component:i$},{id:"size",label:"Size",category:"Variations",component:l$},{id:"inverted",label:"Inverted",category:"Variations",component:o$}];return(l,o)=>(k(),B(rt,{title:"Loader",description:"A loader alerts a user to wait for an activity to complete","component-docs":a}))}},lt="/vue-fomantic-ui/images/wireframe/short-paragraph.png",r$=P({name:"RailDoc",components:{DocExample:et},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),u$={class:"intro"};function c$(e,a,l,o,s,d){const m=y("sui-header-subheader"),f=y("sui-header"),r=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-image"),A=y("sui-rail"),$=y("sui-grid-column"),D=y("sui-grid"),_=y("doc-example");return k(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",u$,[t(f,{as:"h1"},{default:i(()=>[n("Rail "),t(m,null,{default:i(()=>[n(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),t(r,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:e.railCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:lt}),t(A,{position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:e.internalCode},{default:i(()=>[t(w,{textAlign:"center"},{default:i(()=>[t(b,{src:lt}),t(A,{internal:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n("Left Rail Content")]),_:1})]),_:1}),t(A,{internal:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Dividing",description:"A rail can create a division between itself and a container",code:e.dividingCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:lt}),t(A,{dividing:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{dividing:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Attached",description:"A rail can appear attached to the main viewport",code:e.attachedCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:lt}),t(A,{attached:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{attached:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Close",description:"A rail can appear closer to the main viewport",code:e.closeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:lt}),t(A,{close:"",position:"left"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Left Rail Content ")]),_:1})]),_:1}),t(A,{close:"",position:"right"},{default:i(()=>[t(w,null,{default:i(()=>[n(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Size",description:"A rail can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{centered:"",columns:3},{default:i(()=>[t($,null,{default:i(()=>[t(w,null,{default:i(()=>[t(b,{src:lt}),t(A,{size:"small",position:"left"},{default:i(()=>[n(" Left Small Rail ")]),_:1}),t(A,{size:"large",position:"right"},{default:i(()=>[n(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const d$=Re(r$,[["render",c$]]),m$=`<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,p$={__name:"FadeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Fade",code:m$},{description:i(()=>[n(" An element can disappear to reveal content below ")]),example:i(()=>[t(u(ta),{animated:"fade"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/ade.jpg"})]),_:1})]),_:1})]),_:1}))}},f$=`<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,g$={__name:"MoveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Move",code:f$},{description:i(()=>[n(" An element can move in a direction to reveal content ")]),example:i(()=>[t(u(ta),{animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},h$=`<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,_$={__name:"RotateDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Rotate",code:h$},{description:i(()=>[n(" An element can rotate to reveal content below ")]),example:i(()=>[t(u(ta),{animated:"rotate"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/stevie.jpg"})]),_:1})]),_:1})]),_:1}))}},b$=`<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,v$={__name:"ActiveDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Active",code:b$},{description:i(()=>[n(" An active reveal displays its hidden content ")]),example:i(()=>[t(u(ta),{active:"",animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},S$=`<template>
  <SuiReveal disabled animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,y$={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:S$},{description:i(()=>[n(" A disabled reveal will not animate when hovered ")]),example:i(()=>[t(u(ta),{disabled:"",animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/nan.jpg"})]),_:1})]),_:1})]),_:1}))}},w$=`<template>
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
</template>`,C$={__name:"InstantDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Instant",code:w$},{description:i(()=>[n(" An element can show its content without delay ")]),example:i(()=>[t(u(ta),{instant:"",animated:"move"},{default:i(()=>[t(u(zt),{visible:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/wireframe/square-image.png"})]),_:1}),t(u(zt),{hidden:""},{default:i(()=>[t(u(oe),{size:"small",src:"/vue-fomantic-ui/images/avatar/large/chris.jpg"})]),_:1})]),_:1})]),_:1}))}},A$={__name:"Reveal",setup(e){const a=[{id:"fade",label:"Fade",category:"Types",component:p$},{id:"move",label:"Move",category:"Types",component:g$},{id:"rotate",label:"Rotate",category:"Types",component:_$},{id:"active",label:"Active",category:"States",component:v$},{id:"disabled",label:"Disabled",category:"States",component:y$},{id:"instant",label:"Instant",category:"Variations",component:C$}];return(l,o)=>(k(),B(rt,{title:"Reveal",description:"A reveal displays additional content in place of previous content when activated","component-docs":a}))}},k$=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),x$=`<template>
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
</template>`,T$={__name:"PlaceholderSegmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Placeholder Segment",code:B$},{description:i(()=>[n(" A segment can be used to reserve space for conditionally displayed content. ")]),example:i(()=>[t(u(N),{placeholder:""},{default:i(()=>[t(u(fe),{icon:""},{default:i(()=>[t(u(W),{name:"pdf file outline"}),n(" No documents are listed for this customer. ")]),_:1}),t(u(z),{primary:""},{default:i(()=>[n("Add Document")]),_:1})]),_:1})]),_:1}))}},D$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),L$=`<template>
  <SuiSegment raised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,I$={__name:"RaisedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Raised",code:L$},{description:i(()=>[n(" A segment may be formatted to raise above the page. ")]),example:i(()=>[t(u(N),{raised:""},{default:i(()=>[D$]),_:1})]),_:1}))}},E$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),R$=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),z$=`<template>
  <SuiSegment stacked>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
  <SuiSegment stacked="tall">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,P$={__name:"StackedDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Stacked",code:z$},{description:i(()=>[n(" A segment can be formatted to show it contains multiple pages ")]),example:i(()=>[t(u(N),{stacked:""},{default:i(()=>[E$]),_:1}),t(u(N),{stacked:"tall"},{default:i(()=>[R$]),_:1})]),_:1}))}},F$=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),V$=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),M$=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),H$=`<template>
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
</template>`,EB={__name:"StackedSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Stacked Segments",code:IB},{description:i(()=>[n(" A group of segments can be stacked ")]),example:i(()=>[t(u(Ct),{stacked:""},{default:i(()=>[t(u(N),null,{default:i(()=>[TB]),_:1}),t(u(N),null,{default:i(()=>[DB]),_:1}),t(u(N),null,{default:i(()=>[LB]),_:1})]),_:1})]),_:1}))}},RB=S("p",null,"Top",-1),zB=S("p",null,"Middle",-1),PB=S("p",null,"Bottom",-1),FB=`<template>
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
</template>`,VB={__name:"PiledSegmentsDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Piled Segments",code:FB},{description:i(()=>[n(" A group of segments can be piled ")]),example:i(()=>[t(u(Ct),{piled:""},{default:i(()=>[t(u(N),null,{default:i(()=>[RB]),_:1}),t(u(N),null,{default:i(()=>[zB]),_:1}),t(u(N),null,{default:i(()=>[PB]),_:1})]),_:1})]),_:1}))}},MB=S("p",null,"Pellentesque habitant morbi tristique senectus.",-1),HB=`<template>
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
</template>`,BT={__name:"ClearingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Clearing",code:$T},{description:i(()=>[n(" A segment can clear floated content ")]),example:i(()=>[t(u(N),{clearing:""},{default:i(()=>[t(u(z),{floated:"right",content:"Floated"})]),_:1})]),_:1}))}},TT=S("p",null,"This segment will appear to the right",-1),DT=S("p",null,"This segment will appear to the left",-1),LT=`<template>
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
</template>`,RT={__name:"TextAlignmentDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Text Alignment",code:ET},{description:i(()=>[n(" A segment can have its text aligned to a side ")]),example:i(()=>[t(u(N),{textAlign:"right"},{default:i(()=>[n("Right")]),_:1}),t(u(N),{textAlign:"left"},{default:i(()=>[n("Left")]),_:1}),t(u(N),{textAlign:"center"},{default:i(()=>[n("Center")]),_:1})]),_:1}))}},zT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),PT=`<template>
  <SuiSegment basic>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </SuiSegment>
</template>`,FT={__name:"BasicDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Basic",code:PT},{description:i(()=>[n(" A basic segment has no special formatting ")]),example:i(()=>[t(u(N),{basic:""},{default:i(()=>[zT]),_:1})]),_:1}))}},VT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),MT=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),HT=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),NT=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),OT=S("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),qT=S("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),jT=S("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),GT=S("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),UT=`<template>
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
</template>`,WT={__name:"SizeDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Size",code:JT},{description:i(()=>[n(" A segment can vary in size ")]),example:i(()=>[t(u(N),{size:"mini"},{default:i(()=>[n("Mini")]),_:1}),t(u(N),{size:"tiny"},{default:i(()=>[n("Tiny")]),_:1}),t(u(N),{size:"small"},{default:i(()=>[n("Small")]),_:1}),t(u(N),null,{default:i(()=>[n("Default")]),_:1}),t(u(N),{size:"large"},{default:i(()=>[n("Large")]),_:1}),t(u(N),{size:"big"},{default:i(()=>[n("Big")]),_:1}),t(u(N),{size:"huge"},{default:i(()=>[n("Huge")]),_:1}),t(u(N),{size:"massive"},{default:i(()=>[n("Massive")]),_:1})]),_:1}))}},KT={__name:"Segment",setup(e){const a=[{id:"segment",label:"Segment",category:"Types",component:$$},{id:"placeholder-segment",label:"Placeholder Segment",category:"Types",component:T$},{id:"raised",label:"Raised",category:"Types",component:I$},{id:"stacked",label:"Stacked",category:"Types",component:P$},{id:"piled",label:"Piled",category:"Types",component:N$},{id:"vertical-segment",label:"Vertical Segment",category:"Types",component:U$},{id:"segments",label:"Segments",category:"Groups",component:aB},{id:"nested-segments",label:"Nested Segments",category:"Groups",component:fB},{id:"horizontal-segments",label:"Horizontal Segments",category:"Groups",component:vB},{id:"horizontal-equal-width-segments",label:"Horizontal equal width Segments",category:"Groups",component:yB},{id:"horizontal-wrapping-segments",label:"Horizontal wrapping Segments",category:"Groups",component:CB},{id:"raised-segments",label:"Raised Segments",category:"Groups",component:BB},{id:"stacked-segments",label:"Stacked Segments",category:"Groups",component:EB},{id:"piled-segments",label:"Piled Segments",category:"Groups",component:VB},{id:"disabled",label:"Disabled",category:"States",component:NB},{id:"loading",label:"Loading",category:"States",component:qB},{id:"inverted",label:"Inverted",category:"Variations",component:UB},{id:"attached",label:"Attached",category:"Variations",component:XB},{id:"padded",label:"Padded",category:"Variations",component:tT},{id:"fitted",label:"Fitted",category:"Variations",component:oT},{id:"compact",label:"Compact",category:"Variations",component:dT},{id:"colored",label:"Colored",category:"Variations",component:pT},{id:"emphasis",label:"Emphasis",category:"Variations",component:AT},{id:"circular",label:"Circular",category:"Variations",component:xT},{id:"clearing",label:"Clearing",category:"Variations",component:BT},{id:"floated",label:"Floated",category:"Variations",component:IT},{id:"text-alignment",label:"Text Alignment",category:"Variations",component:RT},{id:"basic",label:"Basic",category:"Variations",component:FT},{id:"scrolling",label:"Scrolling",category:"Variations",component:YT},{id:"size",label:"Size",category:"Variations",component:WT}];return(l,o)=>(k(),B(rt,{title:"Segment",description:"A segment is used to create a grouping of related content","component-docs":a}))}},XT=P({name:"StepDoc",components:{DocExample:et},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),QT={class:"intro"},ZT=S("p",null,"The steps take up the entire column width",-1),eD=S("p",null,"Main content",-1);function tD(e,a,l,o,s,d){const m=y("sui-header-subheader"),f=y("sui-header"),r=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment"),b=y("sui-step"),A=y("sui-step-group"),$=y("doc-example"),D=y("sui-step-title"),_=y("sui-step-description"),v=y("sui-step-content"),x=y("sui-grid-column"),T=y("sui-grid");return k(),be("div",null,[t(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",QT,[t(f,{as:"h1"},{default:i(()=>[n("Step "),t(m,null,{default:i(()=>[n(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),t(r,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Step",description:"A single step",code:e.stepCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[n("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Groups")]),_:1}),t($,{title:"Steps",description:"A set of steps",code:e.stepsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:e.orderedCode},{default:i(()=>[t(A,{ordered:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical",description:"A step can be displayed stacked vertically",code:e.verticalCode},{default:i(()=>[t(A,{vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Description",description:"A step can contain a description",code:e.descriptionCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Icon",description:"A step can contain an icon",code:e.iconCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Link",description:"A step can link",code:e.linkCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,{link:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t($,{title:"Active",description:"A step can be highlighted as active",code:e.activeCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Completed",description:"A step can show that a user has completed it",code:e.completedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Disabled",description:"A step can show that it cannot be selected",code:e.disabledCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,{disabled:""},{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:e.stackableCode},{default:i(()=>[t(A,{stackable:"tablet"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:e.unstackableCode},{default:i(()=>[t(A,{unstackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"plane"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info circle"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Fluid",description:"A fluid step takes up the width of its container",code:e.fluidCode},{default:i(()=>[t(T,{columns:2},{default:i(()=>[t(x,null,{default:i(()=>[t(A,{fluid:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"dollar"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,null,{default:i(()=>[ZT]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Attached",description:"Steps can be attached to other elements",code:e.attachedCode},{default:i(()=>[S("div",null,[t(A,{attached:"top"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{attached:""},{default:i(()=>[eD]),_:1}),t(A,{attached:"bottom"},{default:i(()=>[t(b,null,{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t($,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:e.evenlyDividedCode},{default:i(()=>[t(A,{widths:2},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Size",description:"Steps can have different sizes",code:e.sizeCode},{default:i(()=>[t(A,{size:"mini"},{default:i(()=>[t(b,{active:""},{default:i(()=>[t(c,{name:"payment"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1})]),_:1})]),_:1}),t(b,{disabled:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"A step's color can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(A,{inverted:"",vertical:""},{default:i(()=>[t(b,{completed:""},{default:i(()=>[t(c,{name:"truck"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Shipping")]),_:1}),t(_,null,{default:i(()=>[n(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),t(b,{completed:""},{default:i(()=>[t(c,{name:"credit card"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Billing")]),_:1}),t(_,null,{default:i(()=>[n(" Enter billing information ")]),_:1})]),_:1})]),_:1}),t(b,{active:""},{default:i(()=>[t(c,{name:"info"}),t(v,null,{default:i(()=>[t(D,null,{default:i(()=>[n("Confirm Order")]),_:1}),t(_,null,{default:i(()=>[n(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const iD=Re(XT,[["render",tD]]),aD=`<template>
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
</template>`,bD={__name:"SizeDoc",setup(e){const a=["mini","tiny","small","large","big","huge","massive"];return(l,o)=>(k(),B(I,{label:"Size",code:_D},{description:i(()=>[n(" A breadcrumb can vary in size ")]),example:i(()=>[(k(),be(Ae,null,Qe(a,s=>(k(),be(Ae,{key:s},[t(u(ni),{size:s},{default:i(()=>[t(u(tt),{link:""},{default:i(()=>[n("Home")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{link:""},{default:i(()=>[n("Registration")]),_:1}),t(u(Lt),null,{default:i(()=>[n(" / ")]),_:1}),t(u(tt),{active:""},{default:i(()=>[n("Personal Information")]),_:1})]),_:2},1032,["size"]),t(u(Ve),{hidden:""})],64))),64))]),_:1}))}},vD={__name:"Breadcrumb",setup(e){const a=[{id:"breadcrumb",label:"Breadcrumb",category:"Types",component:lD},{id:"divider",label:"Divider",category:"Content",component:oD},{id:"section",label:"Section",category:"Content",component:rD},{id:"link",label:"Link",category:"Content",component:dD},{id:"active",label:"Active",category:"States",component:pD},{id:"inverted",label:"Inverted",category:"Variations",component:hD},{id:"size",label:"Size",category:"Variations",component:bD}];return(l,o)=>(k(),B(rt,{title:"Breadcrumb",description:"A standard breadcrumb","component-docs":a}))}},SD=`<template>
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
</template>`,yD={__name:"FormDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Form",code:SD},{description:i(()=>[n(" A Form ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(at),{label:"First Name",placeholder:"First Name"}),t(u(at),{label:"Last Name",placeholder:"Last Name"}),t(u(at),null,{default:i(()=>[t(u(dd),{label:"I agree to the Terms and Conditions"})]),_:1}),t(u(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},wD=`<template>
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
</template>`,$D={__name:"TextAreaDoc",setup(e){return(a,l)=>(k(),B(I,{label:"TextArea",code:xD},{description:i(()=>[n(" A textarea can be used to allow for extended user input. ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u($o),{label:"Text"}),t(u($o),{label:"Short Text",rows:2})]),_:1})]),_:1}))}},BD=`<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,TD={__name:"LoadingDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Loading",code:BD},{description:i(()=>[n(" If a form is in loading state, it will automatically show a loading indicator. ")]),example:i(()=>[t(u(Nt),{loading:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},DD=`<template>
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,LD={__name:"SuccessDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Success",code:DD},{description:i(()=>[n(" If a form is in an success state, it will automatically show any success message blocks. ")]),example:i(()=>[t(u(Nt),{success:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(An),{success:"",header:"Form Completed",content:"You're all signed up for the newsletter"}),t(u(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},ID=`<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,ED={__name:"ErrorDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Error",code:ID},{description:i(()=>[n(" If a form is in an error state, it will automatically show any error message blocks. ")]),example:i(()=>[t(u(Nt),{error:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(An),{error:"",header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."}),t(u(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},RD=`<template>
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
</template>`,zD={__name:"WarningDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Warning",code:RD},{description:i(()=>[n(" If a form is in warning state, it will automatically show any warning message block. ")]),example:i(()=>[t(u(Nt),{warning:""},{default:i(()=>[t(u(at),{label:"E-mail",type:"email",placeholder:"joe@schome.com"}),t(u(An),{warning:"",header:"Could you check something!",content:"That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."}),t(u(z),{type:"submit"},{default:i(()=>[n("Submit")]),_:1})]),_:1})]),_:1}))}},PD=`<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
</template>`,FD={__name:"DisabledDoc",setup(e){return(a,l)=>(k(),B(I,{label:"Disabled",code:PD},{description:i(()=>[n(" Individual fields may be disabled ")]),example:i(()=>[t(u(Nt),null,{default:i(()=>[t(u(Ss),null,{default:i(()=>[t(u(at),{disabled:"",label:"First name",placeholder:"Read only"}),t(u(at),{disabled:"",label:"Last name",placeholder:"Disabled"})]),_:1})]),_:1})]),_:1}))}},VD={__name:"Form",setup(e){const a=[{id:"form",label:"Form",category:"Types",component:yD},{id:"field",label:"Field",category:"Content",component:CD},{id:"fields",label:"Fields",category:"Content",component:kD},{id:"textarea",label:"TextArea",category:"Content",component:$D},{id:"loading",label:"Loading",category:"Form States",component:TD},{id:"success",label:"Success",category:"Form States",component:LD},{id:"error",label:"Error",category:"Form States",component:ED},{id:"warning",label:"Warning",category:"Form States",component:zD},{id:"disabled",label:"Disabled",category:"Field States",component:FD}];return(l,o)=>(k(),B(rt,{title:"Form",description:"A form displays a set of related user input fields in a structured way","component-docs":a}))}},MD=P({name:"DocPageHeader",props:{title:String,sub:String}}),HD={class:"intro",style:{padding:"2rem"}};function ND(e,a,l,o,s,d){const m=y("sui-header-subheader"),f=y("sui-header"),r=y("sui-divider"),c=y("sui-icon"),g=y("sui-menu-item"),p=y("sui-menu"),h=y("sui-container"),w=y("sui-segment");return k(),B(w,{vertical:""},{default:i(()=>[t(h,{class:"main"},{default:i(()=>[S("div",HD,[t(f,{as:"h1"},{default:i(()=>[n(Te(e.title)+" ",1),t(m,null,{default:i(()=>[n(Te(e.sub),1)]),_:1})]),_:1}),t(r,{hidden:""}),t(p,{floated:"right"},{default:i(()=>[t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"edit"})]),_:1}),t(g,{as:"a",icon:""},{default:i(()=>[t(c,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const ct=Re(MD,[["render",ND]]),de="/vue-fomantic-ui/images/wireframe/image.png",ei="/vue-fomantic-ui/images/wireframe/media-paragraph.png",ze="/vue-fomantic-ui/images/wireframe/paragraph.png",Jr="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",OD=P({name:"GridDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),qD=S("br",null,null,-1);function jD(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-image"),c=y("sui-grid-column"),g=y("sui-grid"),p=y("doc-example"),h=y("sui-grid-row"),w=y("sui-segment"),b=y("sui-divider"),A=y("sui-menu-item"),$=y("sui-menu"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Grid",description:"A basic grid",code:e.gridCode},{default:i(()=>[t(g,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.numbers,_=>(k(),B(c,{key:_},{default:i(()=>[t(r,{src:de})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),t(p,{title:"Divided",description:"A grid can have dividers between its columns",code:e.dividedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ei})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ei})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ei})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:e.verticalDividedCode},{default:i(()=>[t(g,{divided:"vertically"},{default:i(()=>[t(h,{columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Celled",description:"A grid can have rows divided into cells",code:e.celledCode},{default:i(()=>[t(g,{celled:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(r,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(r,{src:Jr})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(r,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:e.internallyCelledCode},{default:i(()=>[t(g,{celled:"internally"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(r,{src:de})]),_:1}),t(c,{width:13},{default:i(()=>[t(r,{src:Jr})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{width:3},{default:i(()=>[t(r,{src:de})]),_:1}),t(c,{width:10},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(p,{title:"Rows",description:"A row is a horizontal grouping of columns",code:e.rowsCode},{default:i(()=>[t(g,{columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:e.columnsCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:8},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{width:8},{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:e.floatedCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{floated:"left",width:5},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{floated:"right",width:5},{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:e.columnWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{width:4},{default:i(()=>[t(r,{src:de})]),_:1}),t(c,{width:9},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{width:3},{default:i(()=>[t(r,{src:ei})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Column Count",description:"A grid can have a different number of columns per row",code:e.columnCountCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1}),t(h,{columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Equal Width",description:"Equal Width",code:e.equalWidthCode},{default:i(()=>[t(g,{columns:"equal"},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,{width:8},{default:i(()=>[t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:e.stretchedCode},{default:i(()=>[t(g,{columns:3,divided:""},{default:i(()=>[t(h,{stretched:""},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("1")]),_:1}),t(w,null,{default:i(()=>[n("2")]),_:1}),t(w,null,{default:i(()=>[n("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:e.paddedCode},{default:i(()=>[S("div",null,[t(b),t(g,{padded:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})])]),_:1},8,["code"]),t(p,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:e.relaxedCode},{default:i(()=>[t(g,{relaxed:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Colored",description:"A row or column can be colored",code:e.coloredCode},{default:i(()=>[t(g,{padded:"",columns:5},{default:i(()=>[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"grey"},{default:i(()=>[n("Grey")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Centered",description:"A grid can have its columns centered",code:e.centeredCode},{default:i(()=>[t(g,{centered:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(h,{centered:"",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:e.textAlignCode},{default:i(()=>[t(g,{textAlign:"center",columns:3},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(A,{header:""},{default:i(()=>[n("Cats")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(A,{header:""},{default:i(()=>[n("Dogs")]),_:1}),t(A,null,{default:i(()=>[n("Poodle")]),_:1}),t(A,null,{default:i(()=>[n("Cockerspaniel")]),_:1})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t($,{vertical:"",fluid:""},{default:i(()=>[t(A,{header:""},{default:i(()=>[n("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:e.verticalAlignCode},{default:i(()=>[t(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de}),qD,t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Responsive Variations")]),_:1}),t(p,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:e.doublingCode},{default:i(()=>[t(g,{doubling:"",columns:5},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(c,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:e.stackableCode},{default:i(()=>[t(g,{stackable:"",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:e.reversedCode},{default:i(()=>[t(g,{reversed:"computer vertically"},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 3")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 2")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:e.deviceVisibilityCode},{default:i(()=>[t(g,null,{default:i(()=>[t(h,{only:"large screen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Large Screen")]),_:1})]),_:1})]),_:1}),t(h,{only:"widescreen",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Widescreen")]),_:1})]),_:1})]),_:1}),t(h,{only:"mobile",columns:2},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Mobile")]),_:1})]),_:1})]),_:1}),t(h,{columns:3},{default:i(()=>[t(c,{only:"computer"},{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,{only:"mobile"},{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet and Mobile")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("All Sizes")]),_:1})]),_:1})]),_:1}),t(h,{only:"computer",columns:4},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Computer")]),_:1})]),_:1})]),_:1}),t(h,{only:"tablet",columns:3},{default:i(()=>[t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(w,null,{default:i(()=>[n("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(p,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:e.responsiveWidthCode},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(r,{src:ze})]),_:1}),t(c,{mobile:16,tablet:8,computer:4},{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const GD=Re(OD,[["render",jD]]),UD="/vue-fomantic-ui/images/logo.png",YD=P({name:"MenuDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),JD=S("p",null,"Check out our new promotions",-1),WD=S("p",null,"Check out our collection of coupons",-1),KD=S("p",null,"Visit our rebate forum for information on claiming rebates",-1),XD=S("img",{src:UD},null,-1);function QD(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-menu-item"),c=y("sui-menu"),g=y("doc-example"),p=y("sui-input"),h=y("sui-menu-menu"),w=y("sui-label"),b=y("sui-button"),A=y("sui-dropdown-item"),$=y("sui-dropdown-menu"),D=y("sui-dropdown"),_=y("sui-icon"),v=y("sui-segment"),x=y("sui-container");return k(),be("div",null,[t(m,{title:"Menu",sub:"A menu displays grouped navigation actions"}),t(x,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Menu",description:"A menu",code:e.menuCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Editorials")]),_:1}),t(r,null,{default:i(()=>[n("Reviews")]),_:1}),t(r,null,{default:i(()=>[n("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:e.secondaryMenuCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("Home")]),_:1}),t(r,null,{default:i(()=>[n("Messages")]),_:1}),t(r,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(r,null,{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(r,null,{default:i(()=>[n("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("Home")]),_:1}),t(r,null,{default:i(()=>[n("Messages")]),_:1}),t(r,null,{default:i(()=>[n("Friends")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(r,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:e.tabularCode},{default:i(()=>[t(c,{tabular:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("Bio")]),_:1}),t(r,null,{default:i(()=>[n("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",description:"A menu can be formatted for text content",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(r,{header:""},{default:i(()=>[n("Sort By")]),_:1}),t(r,{active:""},{default:i(()=>[n("Closest")]),_:1}),t(r,null,{default:i(()=>[n("Most Comments")]),_:1}),t(r,null,{default:i(()=>[n("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:e.verticalMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(r,{active:"",color:"teal"},{default:i(()=>[n(" Inbox "),t(w,{color:"teal",pointing:"left"},{default:i(()=>[n("1")]),_:1})]),_:1}),t(r,null,{default:i(()=>[n(" Spam "),t(w,null,{default:i(()=>[n("51")]),_:1})]),_:1}),t(r,null,{default:i(()=>[n(" Updates "),t(w,null,{default:i(()=>[n("1")]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(p,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:e.paginationCode},{default:i(()=>[t(c,{pagination:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("1")]),_:1}),t(r,{disabled:""},{default:i(()=>[n("...")]),_:1}),t(r,null,{default:i(()=>[n("10")]),_:1}),t(r,null,{default:i(()=>[n("11")]),_:1}),t(r,null,{default:i(()=>[n("12")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:e.headerCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{header:""},{default:i(()=>[n("Our Company")]),_:1}),t(r,null,{default:i(()=>[n("About us")]),_:1}),t(r,null,{default:i(()=>[n("Jobs")]),_:1}),t(r,null,{default:i(()=>[n("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:e.textContentCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(r,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Promotions")]),_:1}),JD]),_:1}),t(r,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Coupons")]),_:1}),WD]),_:1}),t(r,null,{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Rebates")]),_:1}),KD]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Input",description:"A menu item can contain an input inside of it",code:e.inputCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{as:"div"},{default:i(()=>[t(p,{icon:"search",placeholder:"Search..."})]),_:1}),t(r,{position:"right",as:"div"},{default:i(()=>[t(p,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Button",description:"A menu item can contain a button inside of it",code:e.buttonCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1}),t(r,{as:"div"},{default:i(()=>[t(b,null,{default:i(()=>[n("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:e.linkItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(r,{href:"https://google.com"},{default:i(()=>[n("Visit Google")]),_:1}),t(r,{link:"",as:"div"},{default:i(()=>[n("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:e.dropdownItemCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(D,{item:"",text:"Categories"},{default:i(()=>[t($,null,{default:i(()=>[t(A,{text:"Electoronics"}),t(A,{text:"Automotive"}),t(A,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:e.menuContentCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Browse")]),_:1}),t(r,null,{default:i(()=>[n("Submit")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(r,null,{default:i(()=>[n("Sign up")]),_:1}),t(r,null,{default:i(()=>[n("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:e.subMenuCode},{default:i(()=>[t(c,{vertical:""},{default:i(()=>[t(r,{as:"div"},{default:i(()=>[t(p,{placeholder:"Search..."})]),_:1}),t(r,{as:"div"},{default:i(()=>[n(" Home "),t(h,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Search")]),_:1}),t(r,null,{default:i(()=>[n("Add")]),_:1}),t(r,null,{default:i(()=>[n("Remove")]),_:1})]),_:1})]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"grid layout"}),n(" Browse ")]),_:1}),t(r,null,{default:i(()=>[n("Messages")]),_:1}),t(D,{item:"",text:"More"},{default:i(()=>[t($,null,{default:i(()=>[t(A,{icon:"edit",text:"Edit Profile"}),t(A,{icon:"globe",text:"Choose Language"}),t(A,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hover",description:"A menu item can be hovered",code:e.hoverCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(r,null,{default:i(()=>[n("A link")]),_:1}),t(r,{as:"div",link:""},{default:i(()=>[n("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Active",description:"A menu item can be active",code:e.activeCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("Link")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:e.stackableCode},{default:i(()=>[t(c,{stackable:""},{default:i(()=>[t(r,{as:"div"},{default:i(()=>[XD]),_:1}),t(r,null,{default:i(()=>[n("Features")]),_:1}),t(r,null,{default:i(()=>[n("Testimonials")]),_:1}),t(r,null,{default:i(()=>[n("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:e.invertedCode},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("Home")]),_:1}),t(r,null,{default:i(()=>[n("Messages")]),_:1}),t(r,null,{default:i(()=>[n("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"Additional colors can be specified",code:e.coloredCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{active:"",color:"red"},{default:i(()=>[n("Red")]),_:1}),t(r,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(r,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(r,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(r,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(r,{color:"teal"},{default:i(()=>[n("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icons",description:"A menu may have just icons",code:e.iconsCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(r,null,{default:i(()=>[t(_,{name:"gamepad"})]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"video camera"})]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:e.labeledIconCode},{default:i(()=>[t(c,{icon:"labeled"},{default:i(()=>[t(r,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",vertical:""},{default:i(()=>[t(r,null,{default:i(()=>[n("Run")]),_:1}),t(r,null,{default:i(()=>[n("Walk")]),_:1}),t(r,null,{default:i(()=>[n("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[t(r,null,{default:i(()=>[t(_,{name:"gamepad"}),n(" Games ")]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"video camera"}),n(" Channels ")]),_:1}),t(r,null,{default:i(()=>[t(_,{name:"video play"}),n(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:e.evenlyDividedCode},{default:i(()=>[t(c,{fluid:"",widths:3},{default:i(()=>[t(r,null,{default:i(()=>[n("Buy")]),_:1}),t(r,null,{default:i(()=>[n("Sell")]),_:1}),t(r,null,{default:i(()=>[n("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A menu may be attached to other content segments",code:e.attachedCode},{default:i(()=>[S("div",null,[t(c,{attached:"top",tabular:""},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("tab1")]),_:1}),t(r,null,{default:i(()=>[n("tab2")]),_:1})]),_:1}),t(v,{attached:"bottom"},{default:i(()=>[n(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A menu can vary in size",code:e.sizeCode},{default:i(()=>[t(c,{size:"mini"},{default:i(()=>[t(r,{active:""},{default:i(()=>[n("Home")]),_:1}),t(r,null,{default:i(()=>[n("Messages")]),_:1}),t(h,{position:"right"},{default:i(()=>[t(D,{item:"",text:"Language"},{default:i(()=>[t($,null,{default:i(()=>[t(A,null,{default:i(()=>[n("English")]),_:1}),t(A,null,{default:i(()=>[n("Russian")]),_:1}),t(A,null,{default:i(()=>[n("Spanish")]),_:1})]),_:1})]),_:1}),t(r,{as:"div"},{default:i(()=>[t(b,{color:"primary"},{default:i(()=>[n("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:e.fittedCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{fitted:""},{default:i(()=>[n("No padding whatsoever")]),_:1}),t(r,{fitted:"horizontally"},{default:i(()=>[n("No horizontal padding")]),_:1}),t(r,{fitted:"vertically"},{default:i(()=>[n("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:e.borderlessCode},{default:i(()=>[t(c,{borderless:""},{default:i(()=>[t(r,null,{default:i(()=>[n("1")]),_:1}),t(r,null,{default:i(()=>[n("2")]),_:1}),t(r,null,{default:i(()=>[n("3")]),_:1}),t(r,null,{default:i(()=>[n("4")]),_:1}),t(r,null,{default:i(()=>[n("5")]),_:1}),t(r,null,{default:i(()=>[n("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZD=Re(YD,[["render",QD]]),eL=P({name:"MessageDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),tL=S("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),iL=S("p",null,"Get the best news in your e-mail every day.",-1),aL=S("p",null,"You can't see me",-1),lL=S("p",null,"You can always see me",-1),nL=S("p",null,"Way to go!",-1),oL=S("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),sL=S("a",{href:"#"},"Login here",-1),rL=S("p",null,[n("Go to your "),S("b",null,"special offers"),n(" page to see now.")],-1),uL=S("p",null,"That offer has expired",-1);function cL(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-message-header"),c=y("sui-message"),g=y("doc-example"),p=y("sui-message-item"),h=y("sui-message-list"),w=y("sui-icon"),b=y("sui-message-content"),A=y("sui-form-field"),$=y("sui-form-group"),D=y("sui-button"),_=y("sui-form"),v=y("sui-container");return k(),be("div",null,[t(m,{title:"Message",sub:"A message displays information that explains nearby content"}),t(v,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Message",description:"A basic message",code:e.messageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Changes in Service")]),_:1}),tL]),_:1})]),_:1},8,["code"]),t(g,{title:"List Message",description:"A message with a list",code:e.listMessageCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("New Site Features")]),_:1}),t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("You can now have cover images on blog pages")]),_:1}),t(p,null,{default:i(()=>[n("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Icon Message",description:"A message can contain an icon",code:e.iconMessageCode},{default:i(()=>[t(c,{icon:""},{default:i(()=>[t(w,{name:"inbox"}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[n(" Have you heard about our mailing list? ")]),_:1}),iL]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(g,{title:"Hidden",description:"A message can be hidden",code:e.hiddenCode},{default:i(()=>[t(c,{hidden:""},{default:i(()=>[aL]),_:1})]),_:1},8,["code"]),t(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:e.visibleCode},{default:i(()=>[t(c,{visible:""},{default:i(()=>[lL]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Floating",description:"A message can float above content that it is related to",code:e.floatingCode},{default:i(()=>[t(c,{floating:""},{default:i(()=>[nL]),_:1})]),_:1},8,["code"]),t(g,{title:"Compact",description:"A message can only take up the width of its content",code:e.compactCode},{default:i(()=>[t(c,{compact:""},{default:i(()=>[oL]),_:1})]),_:1},8,["code"]),t(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:e.attachedCode},{default:i(()=>[S("div",null,[t(c,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),t(_,{class:"attached fluid segment"},{default:i(()=>[t($,{widths:"equal"},{default:i(()=>[t(A,{label:"First Name",placeholder:"First Name"}),t(A,{label:"Last Name",placeholder:"Last Name"})]),_:1}),t(A,{label:"Username",placeholder:"Username"}),t(A,{label:"Password",placeholder:"Password"}),t(D,{color:"primary"},{default:i(()=>[n("Submit")]),_:1})]),_:1}),t(c,{attached:"bottom",warning:""},{default:i(()=>[t(w,{name:"help"}),n(" Already signed up? "),sL,n(" instead. ")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:e.warningCode},{default:i(()=>[t(c,{warning:""},{default:i(()=>[t(w,{name:"close"}),t(r,null,{default:i(()=>[n(" You must register before you can do that! ")]),_:1}),n(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),t(g,{title:"Info",description:"A message may be formatted to display information",code:e.infoCode},{default:i(()=>[t(c,{info:""},{default:i(()=>[t(r,null,{default:i(()=>[n("Was this what you wanted?")]),_:1}),t(h,null,{default:i(()=>[n("It's good to see you again.")]),_:1}),t(h,null,{default:i(()=>[n("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:e.positiveSuccessCode},{default:i(()=>[t(c,{positive:""},{default:i(()=>[t(r,null,{default:i(()=>[n("You are eligible for a reward")]),_:1}),rL]),_:1})]),_:1},8,["code"]),t(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:e.negativeErrorCode},{default:i(()=>[t(c,{negative:""},{default:i(()=>[t(w,{name:"close"}),t(r,null,{default:i(()=>[n("We're sorry we can't apply that discount")]),_:1}),uL]),_:1})]),_:1},8,["code"]),t(g,{title:"Colored",description:"A message can be formatted to be different colors",code:e.coloredCode},{default:i(()=>[S("div",null,[t(c,{color:"red"},{default:i(()=>[n("Red")]),_:1}),t(c,{color:"orange"},{default:i(()=>[n("Orange")]),_:1}),t(c,{color:"yellow"},{default:i(()=>[n("Yellow")]),_:1}),t(c,{color:"olive"},{default:i(()=>[n("Olive")]),_:1}),t(c,{color:"green"},{default:i(()=>[n("Green")]),_:1}),t(c,{color:"teal"},{default:i(()=>[n("Teal")]),_:1}),t(c,{color:"blue"},{default:i(()=>[n("Blue")]),_:1}),t(c,{color:"violet"},{default:i(()=>[n("Violet")]),_:1}),t(c,{color:"purple"},{default:i(()=>[n("Purple")]),_:1}),t(c,{color:"pink"},{default:i(()=>[n("Pink")]),_:1}),t(c,{color:"brown"},{default:i(()=>[n("Brown")]),_:1}),t(c,{color:"black"},{default:i(()=>[n("Black")]),_:1})])]),_:1},8,["code"]),t(g,{title:"Size",description:"A message can have different sizes",code:e.sizeCode},{default:i(()=>[S("div",null,[t(c,{size:"mini"},{default:i(()=>[n("This is a mini message.")]),_:1}),t(c,{size:"large"},{default:i(()=>[n("This is a large message.")]),_:1}),t(c,{size:"massive"},{default:i(()=>[n("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const dL=Re(eL,[["render",cL]]),mL=P({name:"TableDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),pL=S("a",{href:"#"},"Edit",-1),fL=S("a",{href:"#"},"Edit",-1),gL=S("a",{href:"#"},"Edit",-1),hL=S("br",null,null,-1),_L=S("br",null,null,-1),bL=S("br",null,null,-1),vL=S("br",null,null,-1),SL=S("br",null,null,-1),yL=S("br",null,null,-1),wL=S("br",null,null,-1);function CL(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-table-header-cell"),c=y("sui-table-row"),g=y("sui-table-header"),p=y("sui-table-cell"),h=y("sui-table-body"),w=y("sui-table"),b=y("doc-example"),A=y("sui-icon"),$=y("sui-table-footer"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(b,{title:"Table",description:"A standard table",code:e.tableCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Age")]),_:1}),t(r,null,{default:i(()=>[n("Job")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("James")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("26")]),_:1}),t(p,null,{default:i(()=>[n("Engineer")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Elyse")]),_:1}),t(p,null,{default:i(()=>[n("24")]),_:1}),t(p,null,{default:i(()=>[n("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:e.definitionCode},{default:i(()=>[t(w,{definition:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r),t(r,null,{default:i(()=>[n("Arguments")]),_:1}),t(r,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("reset rating")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1}),t(p,null,{default:i(()=>[n("Resets rating to default value")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("set rating")]),_:1}),t(p,null,{default:i(()=>[n("rating (integer)")]),_:1}),t(p,null,{default:i(()=>[n("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Structured",description:"A table can be formatted to display complex structured data",code:e.structuredCode},{default:i(()=>[t(w,{structured:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{rowspan:"2"},{default:i(()=>[n("Name")]),_:1}),t(r,{rowspan:"2"},{default:i(()=>[n("Type")]),_:1}),t(r,{rowspan:"2"},{default:i(()=>[n("Files")]),_:1}),t(r,{colspan:"3"},{default:i(()=>[n("Languages")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Ruby")]),_:1}),t(r,null,{default:i(()=>[n("Javascript")]),_:1}),t(r,null,{default:i(()=>[n("Python")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Alpha Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("2")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(c,null,{default:i(()=>[t(p,{rowspan:"3"},{default:i(()=>[n("Beta Team")]),_:1}),t(p,null,{default:i(()=>[n("Project 1")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("52")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 2")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("12")]),_:1}),t(p),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p)]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Project 3")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("21")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[t(A,{name:"checkmark",color:"green",size:"large"})]),_:1}),t(p),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(b,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:e.positiveNegativeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{negative:""},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{positive:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"checkmark"}),n(" Approved ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{positive:""},{default:i(()=>[t(A,{name:"close"}),n(" Requires call ")]),_:1})]),_:1}),t(c,{negative:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:e.errorCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{error:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Cannot pull data")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{error:""},{default:i(()=>[t(A,{name:"attention"}),n(" Requires call ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Warning",description:"A cell or row may warn a user",code:e.warningCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"attention"}),n(" Requires Action ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{warning:""},{default:i(()=>[t(A,{name:"attention"}),n(" Hostile ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Active",description:"A cell or row can be active or selected by a user",code:e.activeCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{active:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{active:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Disabled",description:"A cell can be disabled",code:e.disabledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{disabled:""},{default:i(()=>[t(p,null,{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Selected")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{disabled:""},{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:e.coloredCellsCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,{color:"orange"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{color:"blue"},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"pink"},{default:i(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{color:"green"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:e.markedCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,{marked:"right",color:"blue"},{default:i(()=>[n("No Name Specified")]),_:1}),t(p,{marked:"left",color:"red"},{default:i(()=>[n("Unknown")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{marked:"left",color:"green"},{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[t(A,{name:"microphone"}),n(" Recording session ")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"left",color:"orange"},{default:i(()=>[t(A,{name:"child"}),n(" Baby Party ")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Unknown")]),_:1}),t(p,{marked:"right",color:"purple"},{default:i(()=>[n("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(b,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:e.singleLineCode},{default:i(()=>[t(w,{"single-line":""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Registration Date")]),_:1}),t(r,null,{default:i(()=>[n("E-mail address")]),_:1}),t(r,null,{default:i(()=>[n("Premium Plan")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:e.fixedCode},{default:i(()=>[t(w,{fixed:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:e.stackingCode},{default:i(()=>[t(w,{stackable:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:e.selectableRowCode},{default:i(()=>[t(w,{selectable:"",celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Selectable Cell",description:"A table cell can be selectable",code:e.selectableCellCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,{positive:""},{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[pL]),_:1})]),_:1}),t(c,{warning:""},{default:i(()=>[t(p,null,{default:i(()=>[n("Jimmy")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{selectable:""},{default:i(()=>[fL]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{negative:""},{default:i(()=>[n("Denied")]),_:1}),t(p,{selectable:""},{default:i(()=>[gL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:e.verticalAlignmentCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{verticalAlign:"top"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{verticalAlign:"top"},{default:i(()=>[n(" Notes "),hL,n(" 1"),_L,n(" 2"),bL]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,{verticalAlign:"bottom"},{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n(" Notes "),vL,n(" 1"),SL,n(" 2"),yL]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:e.textAlignCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,{textAlign:"right"},{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,{textAlign:"right"},{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:e.stripedCode},{default:i(()=>[t(w,{striped:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Date Joined")]),_:1}),t(r,null,{default:i(()=>[n("E-mail")]),_:1}),t(r,null,{default:i(()=>[n("Called")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John Lilki")]),_:1}),t(p,null,{default:i(()=>[n("September 14, 2013")]),_:1}),t(p,null,{default:i(()=>[n("jhlilk22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("No")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie Harington")]),_:1}),t(p,null,{default:i(()=>[n("January 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jamieharingonton@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill Lewis")]),_:1}),t(p,null,{default:i(()=>[n("May 11, 2014")]),_:1}),t(p,null,{default:i(()=>[n("jilsewris22@yahoo.com")]),_:1}),t(p,null,{default:i(()=>[n("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Celled",description:"A table may be divided each row into separate cells",code:e.celledCode},{default:i(()=>[t(w,{celled:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("3 People")]),_:1}),t(p,null,{default:i(()=>[n("2 Approved")]),_:1}),t(p)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:e.basicCode},{default:i(()=>[S("div",null,[t(w,{basic:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1}),wL,t(w,{basic:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:e.collapsingCode},{default:i(()=>[t(w,{collapsing:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Age")]),_:1}),t(r,null,{default:i(()=>[n("Gender")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("3 People")]),_:1}),t(r,null,{default:i(()=>[n("2 Approved")]),_:1}),t(r),t(r),t(r)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:e.collapsingCellCode},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,{collapsing:""},{default:i(()=>[t(A,{name:"folder"}),n(" node_modules ")]),_:1}),t(p,null,{default:i(()=>[n("Initial commit")]),_:1}),t(p,null,{default:i(()=>[n("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:e.columnCountCode},{default:i(()=>[t(w,{columns:5},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Age")]),_:1}),t(r,null,{default:i(()=>[n("Gender")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("27")]),_:1}),t(p,null,{default:i(()=>[n("Male")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("32")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("22")]),_:1}),t(p,null,{default:i(()=>[n("Other")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("3 People")]),_:1}),t(r,null,{default:i(()=>[n("2 Approved")]),_:1}),t(r),t(r),t(r)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Column Width",description:"Column Width",code:e.columnWidthCode},{default:i(()=>[t(w,null,{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,{width:10},{default:i(()=>[n("Name")]),_:1}),t(r,{width:6},{default:i(()=>[n("Status")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:e.coloredCode},{default:i(()=>[t(w,{color:"red"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Food")]),_:1}),t(r,null,{default:i(()=>[n("Calories")]),_:1}),t(r,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Inverted",description:"A table's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(w,{inverted:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Food")]),_:1}),t(r,null,{default:i(()=>[n("Calories")]),_:1}),t(r,null,{default:i(()=>[n("Protein")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Apples")]),_:1}),t(p,null,{default:i(()=>[n("200")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Orange")]),_:1}),t(p,null,{default:i(()=>[n("310")]),_:1}),t(p,null,{default:i(()=>[n("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(b,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:e.paddedCode},{default:i(()=>[S("div",null,[t(w,{padded:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{padded:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:e.compactCode},{default:i(()=>[S("div",null,[t(w,{compact:""},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),t(w,{compact:"very"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),t(b,{title:"Size",description:"A table can also be small or large",code:e.sizeCode},{default:i(()=>[t(w,{size:"small"},{default:i(()=>[t(g,null,{default:i(()=>[t(c,null,{default:i(()=>[t(r,null,{default:i(()=>[n("Name")]),_:1}),t(r,null,{default:i(()=>[n("Status")]),_:1}),t(r,null,{default:i(()=>[n("Notes")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("John")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jamie")]),_:1}),t(p,null,{default:i(()=>[n("Approved")]),_:1}),t(p,null,{default:i(()=>[n("Requires call")]),_:1})]),_:1}),t(c,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Jill")]),_:1}),t(p,null,{default:i(()=>[n("Denied")]),_:1}),t(p,null,{default:i(()=>[n("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const AL=Re(mL,[["render",CL]]),Wr="/vue-fomantic-ui/images/avatar/large/kristy.png",kL="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Xn="/vue-fomantic-ui/images/avatar/large/helen.jpg",Qn="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Zn="/vue-fomantic-ui/images/avatar/large/elyse.png",xL="/vue-fomantic-ui/images/avatar/large/matthew.png",$L="/vue-fomantic-ui/images/avatar/large/molly.png",zl="/vue-fomantic-ui/images/wireframe/white-image.png",Kr="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Xr="/vue-fomantic-ui/images/avatar/large/veronika.jpg",Qr="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Zr="/vue-fomantic-ui/images/avatar/large/steve.jpg",BL=P({name:"CardDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),TL=S("span",{class:"date"},"Joined in 2013",-1),DL=S("a",null,"Elliot Fu",-1),LL=S("a",null,"Jenny Hess",-1),IL=S("a",null,"Stevie Feliciano",-1),EL=S("a",null,"Administrator",-1),RL=S("a",null,"Helen Troy",-1),zL=S("span",{class:"date"},"Joined in 2013",-1),PL=S("span",null,"2 days ago",-1),FL=S("a",null,"Animals",-1),VL=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),ML=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),HL=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),NL=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),OL=S("span",{class:"category"},"Animals",-1),qL=S("span",{class:"category"},"Animals",-1),jL=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:xn}),n(" Matt ")],-1),GL=S("span",{class:"category"},"Animals",-1),UL=S("div",{class:"right floated author"},[S("img",{class:"ui avatar image",src:xn}),n(" Matt ")],-1),YL=S("p",null,"Jenny is a student studying Media Management at the New School",-1),JL=S("div",{class:"center aligned author"},[S("img",{class:"ui avatar image",src:kn}),n(" Jenny ")],-1),WL=S("a",null,"Friends",-1),KL=S("span",{class:"right floated"}," Joined in 2013 ",-1),XL=S("a",null,[S("i",{class:"user icon"}),n(" 75 Friends ")],-1),QL=S("a",null,"Coworker",-1),ZL=S("span",{class:"right floated"}," Joined in 2011 ",-1),eI=S("a",null,[S("i",{class:"user icon"}),n(" 35 Friends ")],-1),tI=S("a",null,"Coworker",-1),iI=S("span",{class:"right floated"}," Joined in 2014 ",-1),aI=S("a",null,[S("i",{class:"user icon"}),n(" 151 Friends ")],-1);function lI(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-image"),c=y("sui-card-header"),g=y("sui-card-meta"),p=y("sui-card-description"),h=y("sui-card-content"),w=y("sui-icon"),b=y("sui-card"),A=y("doc-example"),$=y("sui-button"),D=y("sui-button-group"),_=y("sui-card-group"),v=y("sui-feed-summary"),x=y("sui-feed-content"),T=y("sui-feed-event"),E=y("sui-feed"),V=y("sui-grid-column"),M=y("sui-grid"),F=y("sui-segment"),j=y("sui-container");return k(),be("div",null,[t(m,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),t(j,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(A,{title:"Card",description:"A single card",code:e.cardCode},{default:i(()=>[t(b,null,{default:i(()=>[t(r,{src:Wr,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[TL]),_:1}),t(p,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Cards",description:"A group of cards",code:e.cardsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,{src:oi,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friends of Veronika")]),_:1}),t(p,null,{default:i(()=>[n("Elliot requested permission to view your contact details")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(r,{src:kn,floated:"right",size:"mini"}),t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("New Member")]),_:1}),t(p,null,{default:i(()=>[n("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(D,{widths:2},{default:i(()=>[t($,{basic:"",color:"green"},{default:i(()=>[n("Approve")]),_:1}),t($,{basic:"",color:"red"},{default:i(()=>[n("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(A,{title:"Content Block",description:"A card can contain blocks of content",code:e.contentBlockCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Project Timeline")]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(f,{sub:""},{default:i(()=>[n("Activity")]),_:1}),t(E,{size:"small"},{default:i(()=>[t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[DL,n(" added "),LL,n(" to the project ")]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[IL,n(" was added as an "),EL]),_:1})]),_:1})]),_:1}),t(T,null,{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[RL,n(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t($,{as:"button"},{default:i(()=>[n("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Image",description:"A card can contain an image",code:e.imageCode},{default:i(()=>[t(b,null,{default:i(()=>[t(r,{src:Wr,wrapped:""}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Kristy")]),_:1}),t(g,null,{default:i(()=>[zL]),_:1}),t(p,null,{default:i(()=>[n(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[S("a",null,[t(w,{name:"user"}),n(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Header",description:"A card can contain a header",code:e.headerCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(p,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(p,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Jenny Hess")]),_:1}),t(g,null,{default:i(()=>[n("Friend")]),_:1}),t(p,null,{default:i(()=>[n(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Metadata",description:"A card can contain content metadata",code:e.metadataCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[PL,FL]),_:1}),t(p,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Buttons",description:"A card can contain buttons",code:e.buttonsCode},{default:i(()=>[t(_,null,{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),t(p,null,{default:i(()=>[n(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Veronika Ossi")]),_:1}),t(p,null,{default:i(()=>[n(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),t($,{attached:"bottom"},{default:i(()=>[t(w,{name:"add"}),n(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:e.descriptionCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(p,null,{default:i(()=>[VL,ML]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[n("2 days ago")]),_:1}),t(p,null,{default:i(()=>[HL,NL]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[t(w,{name:"check"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(A,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:e.fluidCardCode},{default:i(()=>[t(M,{columns:3},{default:i(()=>[t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(r,{src:kL}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(r,{src:Xn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),t(V,null,{default:i(()=>[t(b,{fluid:""},{default:i(()=>[t(r,{src:Qn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Centered Card",description:"A card can center itself inside its container",code:e.centeredCardCode},{default:i(()=>[t(b,{centered:""},{default:i(()=>[t(r,{src:Zn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Horizontal Cards",description:"A card can display horizontally",code:e.horizontalCardsCode},{default:i(()=>[t(b,{horizontal:""},{default:i(()=>[t(r,{src:Zn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[OL]),_:1}),t(p,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:e.raisedCode},{default:i(()=>[t(b,{raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[qL]),_:1}),t(p,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[jL]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:e.linkCardCode},{default:i(()=>[t(b,{href:"#",raised:""},{default:i(()=>[t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(g,null,{default:i(()=>[GL]),_:1}),t(p,null,{default:i(()=>[t(r,{src:ze})]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[UL]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:e.textAlignCode},{default:i(()=>[t(b,null,{default:i(()=>[t(h,null,{default:i(()=>[t(c,{textAlign:"center"},{default:i(()=>[n("Jenny Hess")]),_:1}),t(p,{textAlign:"center"},{default:i(()=>[YL]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[JL]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Inverted",description:"Card's colors can be inverted",code:e.invertedCode},{default:i(()=>[t(F,{inverted:""},{default:i(()=>[t(_,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(r,{src:xL}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Matt Giampietro")]),_:1}),t(g,null,{default:i(()=>[WL]),_:1}),t(p,null,{default:i(()=>[n(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[KL,XL]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:$L}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Molly")]),_:1}),t(g,null,{default:i(()=>[QL]),_:1}),t(p,null,{default:i(()=>[n(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[ZL,eI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Zn}),t(h,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elyse")]),_:1}),t(g,null,{default:i(()=>[tI]),_:1}),t(p,null,{default:i(()=>[n(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),t(h,{extra:""},{default:i(()=>[iI,aI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Colored",description:"A card can specify a color",code:e.coloredCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,{color:"primary",href:"#"},{default:i(()=>[t(r,{src:zl})]),_:1}),t(b,{color:"secondary",href:"#"},{default:i(()=>[t(r,{src:zl})]),_:1}),t(b,{color:"red",href:"#"},{default:i(()=>[t(r,{src:zl})]),_:1}),t(b,{color:"orange",href:"#"},{default:i(()=>[t(r,{src:zl})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:e.columnCountCode},{default:i(()=>[t(_,{itemsPerRow:4},{default:i(()=>[t(b,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:de})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:de})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:e.stackableCode},{default:i(()=>[t(_,{itemsPerRow:3,stackable:""},{default:i(()=>[t(b,null,{default:i(()=>[t(r,{src:Qn})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Xn})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Kr})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Xr})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Qr})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Zr})]),_:1})]),_:1})]),_:1},8,["code"]),t(A,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:e.doublingCode},{default:i(()=>[t(_,{itemsPerRow:6,doubling:""},{default:i(()=>[t(b,null,{default:i(()=>[t(r,{src:Qn})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Xn})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Kr})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Xr})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Qr})]),_:1}),t(b,null,{default:i(()=>[t(r,{src:Zr})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const nI=Re(BL,[["render",lI]]),oI=P({name:"FeedDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),sI=S("img",{src:oi},null,-1),rI=S("img",{src:oi},null,-1),uI=S("a",null,"Coworkers",-1),cI=S("img",{src:kn},null,-1),dI=S("a",null,"Jenny Hess",-1),mI=S("a",null,"coworker",-1),pI=S("img",{src:qa},null,-1),fI=S("a",null,"Helen Troy",-1),gI=S("a",null,[S("img",{src:de})],-1),hI=S("a",null,[S("img",{src:de})],-1),_I=S("a",null,"Elliot Fu",-1),bI=S("a",null,"Jenny Hess",-1),vI=S("a",null,"Stevie Feliciano",-1),SI=S("a",null,"Elliot Fu",-1),yI=S("a",null,"Helen Troy",-1),wI=S("a",null,"Christian Rocha",-1),CI=S("img",{src:oi},null,-1),AI=S("div",{class:"date"},"Just now",-1),kI=S("a",{class:"user"},"Elliot Fu",-1);function xI(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-feed-label"),c=y("sui-feed-user"),g=y("sui-feed-date"),p=y("sui-feed-summary"),h=y("sui-icon"),w=y("sui-feed-like"),b=y("sui-feed-meta"),A=y("sui-feed-content"),$=y("sui-feed-event"),D=y("sui-feed"),_=y("doc-example"),v=y("sui-feed-extra"),x=y("sui-segment"),T=y("sui-container");return k(),be("div",null,[t(m,{title:"Feed",sub:"A feed presents user activity chronologically"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(_,{title:"Feed",description:"A feed",code:e.feedCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(r,null,{default:i(()=>[sI]),_:1}),t(A,null,{default:i(()=>[t(p,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Elliot Fu")]),_:1}),n(" added you as a friend "),t(g,null,{default:i(()=>[n("1 Hour Ago")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,{name:"like"}),n(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t(_,{title:"Label",description:"An event can contain an image or icon label",code:e.labelCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(r,null,{default:i(()=>[rI]),_:1}),t(A,null,{default:i(()=>[n(" You added Elliot Fu to the group "),uI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Date",description:"An event or an event summary can contain a date",code:e.dateCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(r,null,{default:i(()=>[cI]),_:1}),t(A,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(p,null,{default:i(()=>[n(" You added "),dI,n(" to your "),mI,n(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:e.additionalInfoCode},{default:i(()=>[t(D,null,{default:i(()=>[t($,null,{default:i(()=>[t(r,null,{default:i(()=>[pI]),_:1}),t(A,null,{default:i(()=>[t(g,null,{default:i(()=>[n(" 3 days ago ")]),_:1}),t(p,null,{default:i(()=>[fI,n(" added 2 photos ")]),_:1}),t(v,{images:""},{default:i(()=>[gI,hI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(_,{title:"Size",description:"A feed can have different sizes",code:e.sizeCode},{default:i(()=>[t(D,{size:"small"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Followers Activity")]),_:1}),t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(p,null,{default:i(()=>[_I,n(" added "),bI,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(p,null,{default:i(()=>[vI,n(" added "),SI,n(" as a friend ")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[t(A,null,{default:i(()=>[t(p,null,{default:i(()=>[yI,n(" added "),wI,n(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(_,{title:"Inverted",description:"A feed's color can be inverted",code:e.invertedCode},{default:i(()=>[t(x,{inverted:""},{default:i(()=>[t(D,{inverted:""},{default:i(()=>[t($,null,{default:i(()=>[t(r,null,{default:i(()=>[CI]),_:1}),t(A,null,{default:i(()=>[AI,t(p,null,{default:i(()=>[kI,n(" posted on his page ")]),_:1}),t(v,{text:""},{default:i(()=>[n(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const $I=Re(oI,[["render",xI]]),BI=P({name:"ItemDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),TI=S("img",{src:de},null,-1),DI=S("span",null,"Description",-1),LI=S("img",{src:lt},null,-1),II=S("img",{src:de},null,-1),EI=S("span",null,"Description",-1),RI=S("img",{src:lt},null,-1),zI=S("img",{src:de},null,-1),PI=S("img",{src:de},null,-1),FI=S("img",{src:de},null,-1),VI=S("img",{src:de},null,-1),MI=S("img",{src:de},null,-1),HI=S("img",{src:de},null,-1),NI=S("img",{src:de},null,-1),OI=S("span",{class:"price"},"$1200",-1),qI=S("span",{class:"stay"},"1 Month",-1),jI=S("img",{src:lt},null,-1),GI=S("span",{class:"price"},"$1000",-1),UI=S("span",{class:"stay"},"2 Weeks",-1),YI=S("img",{src:lt},null,-1),JI=S("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),WI=S("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),KI=S("img",{src:lt},null,-1),XI=S("img",{src:de},null,-1),QI=S("span",{class:"cinema"},"Union Square 14",-1),ZI=S("img",{src:lt},null,-1),eE=S("img",{src:de},null,-1),tE=S("span",{class:"cinema"},"IFC Cinema",-1),iE=S("img",{src:lt},null,-1),aE=S("img",{src:de},null,-1),lE=S("span",{class:"cinema"},"IFC",-1),nE=S("img",{src:lt},null,-1),oE=S("img",{src:lt},null,-1),sE=S("img",{src:lt},null,-1),rE=S("img",{src:lt},null,-1),uE=S("span",{class:"price"},"$1200",-1),cE=S("span",{class:"stay"},"1 Month",-1),dE=S("img",{src:lt},null,-1),mE=S("span",{class:"price"},"$1000",-1),pE=S("span",{class:"stay"},"2 Weeks",-1),fE=S("img",{src:lt},null,-1);function gE(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-item-image"),c=y("sui-item-header"),g=y("sui-item-meta"),p=y("sui-item-description"),h=y("sui-item-extra"),w=y("sui-item-content"),b=y("sui-item"),A=y("sui-item-group"),$=y("doc-example"),D=y("sui-image"),_=y("sui-icon"),v=y("sui-label"),x=y("sui-button"),T=y("sui-segment"),E=y("sui-container");return k(),be("div",null,[t(m,{title:"Item",sub:"An item view presents large collections of site content for display"}),t(E,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Items",description:"A group of items",code:e.itemsCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[TI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[DI]),_:1}),t(p,null,{default:i(()=>[LI]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[II]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Header")]),_:1}),t(g,null,{default:i(()=>[EI]),_:1}),t(p,null,{default:i(()=>[RI]),_:1}),t(h,null,{default:i(()=>[n(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Content")]),_:1}),t($,{title:"Image",description:"An item can contain an image",code:e.imageCode},{default:i(()=>[t(A,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[zI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[PI]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[FI]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Content",description:"An item can contain content",code:e.contentCode},{default:i(()=>[t(A,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[VI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content A ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[MI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content B ")]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[HI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[n(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Header",description:"An item can contain a header",code:e.headerCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[NI]),_:1}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Metadata",description:"An item can contain content metadata",code:e.metadataCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[OI,qI]),_:1}),t(p,null,{default:i(()=>[jI]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[GI,UI]),_:1}),t(p,null,{default:i(()=>[YI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:e.descriptionCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(p,null,{default:i(()=>[JI,WI]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:e.extraContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Cute Dog")]),_:1}),t(p,null,{default:i(()=>[KI]),_:1}),t(h,null,{default:i(()=>[t(_,{name:"check",color:"green"}),n(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t($,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:e.dividedCode},{default:i(()=>[t(A,{divided:""},{default:i(()=>[t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[XI]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("12 Years a Slave")]),_:1}),t(g,null,{default:i(()=>[QI]),_:1}),t(p,null,{default:i(()=>[ZI]),_:1}),t(h,null,{default:i(()=>[t(v,null,{default:i(()=>[n("IMAX")]),_:1}),t(v,null,{default:i(()=>[t(_,{name:"globe"}),n(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[eE]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(g,null,{default:i(()=>[tE]),_:1}),t(p,null,{default:i(()=>[iE]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1}),t(v,null,{default:i(()=>[n("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(r,null,{default:i(()=>[aE]),_:1}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Watchmen")]),_:1}),t(g,null,{default:i(()=>[lE]),_:1}),t(p,null,{default:i(()=>[nE]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right",color:"primary"},{default:i(()=>[n(" Buy tickets "),t(_,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:e.relaxedCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("12 Years a Slave")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"tiny",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,{as:"a"},{default:i(()=>[n("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:e.verticalAlignCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Top Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Middle Aligned")]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"bottom"},{default:i(()=>[t(c,null,{default:i(()=>[n("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Floated Content",description:"Any content element can be floated left or right",code:e.floatedContentCode},{default:i(()=>[t(A,null,{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content A")]),_:1}),t(p,null,{default:i(()=>[oE]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content B")]),_:1}),t(p,null,{default:i(()=>[sE]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,{verticalAlign:"middle"},{default:i(()=>[t(c,null,{default:i(()=>[n("Content C")]),_:1}),t(p,null,{default:i(()=>[rE]),_:1}),t(h,null,{default:i(()=>[t(x,{floated:"right"},{default:i(()=>[n("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t($,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:e.invertedCode},{default:i(()=>[t(T,{inverted:""},{default:i(()=>[t(A,{inverted:""},{default:i(()=>[t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Arrowhead Valley Camp")]),_:1}),t(g,null,{default:i(()=>[uE,cE]),_:1}),t(p,null,{default:i(()=>[dE]),_:1})]),_:1})]),_:1}),t(b,null,{default:i(()=>[t(D,{size:"small",src:de}),t(w,null,{default:i(()=>[t(c,null,{default:i(()=>[n("Buck's Homebrew Stayaway")]),_:1}),t(g,null,{default:i(()=>[mE,pE]),_:1}),t(p,null,{default:i(()=>[fE]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const hE=Re(BI,[["render",gE]]),_E=P({name:"AccordionDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),bE=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),vE=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),SE=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),yE=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),wE=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),CE=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),AE=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),kE=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),xE=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),$E=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),BE=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),TE=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),DE=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),LE=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),IE=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),EE=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),RE=S("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),zE=S("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),PE=S("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),FE=S("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function VE(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-accordion-tab"),c=y("sui-accordion"),g=y("doc-example"),p=y("sui-segment"),h=y("sui-container");return k(),be("div",null,[t(m,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),t(h,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(g,{title:"Accordion",description:"A standard accordion",code:e.accordionCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{title:"What is a dog?"},{default:i(()=>[bE]),_:1}),t(r,{title:"What kinds of dogs are there?"},{default:i(()=>[vE]),_:1}),t(r,{title:"How do you acquire a dog?"},{default:i(()=>[SE,yE]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:e.styledCode},{default:i(()=>[t(c,{styled:""},{default:i(()=>[t(r,{title:"What is a dog?"},{default:i(()=>[wE]),_:1}),t(r,{title:"What kinds of dogs are there?"},{default:i(()=>[CE]),_:1}),t(r,{title:"How do you acquire a dog?"},{default:i(()=>[AE,kE]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:e.fluidCode},{default:i(()=>[t(c,{fluid:"",styled:""},{default:i(()=>[t(r,{title:"What is a dog?"},{default:i(()=>[xE]),_:1}),t(r,{title:"What kinds of dogs are there?"},{default:i(()=>[$E]),_:1}),t(r,{title:"How do you acquire a dog?"},{default:i(()=>[BE,TE]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:e.invertedCode},{default:i(()=>[t(p,{inverted:""},{default:i(()=>[t(c,{inverted:""},{default:i(()=>[t(r,{title:"What is a dog?"},{default:i(()=>[DE]),_:1}),t(r,{title:"What kinds of dogs are there?"},{default:i(()=>[LE]),_:1}),t(r,{title:"How do you acquire a dog?"},{default:i(()=>[IE,EE]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Usage")]),_:1}),t(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:e.multipleCode},{default:i(()=>[t(c,{multiple:""},{default:i(()=>[t(r,{title:"What is a dog?"},{default:i(()=>[RE]),_:1}),t(r,{title:"What kinds of dogs are there?"},{default:i(()=>[zE]),_:1}),t(r,{title:"How do you acquire a dog?"},{default:i(()=>[PE,FE]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ME=Re(_E,[["render",VE]]),HE=P({name:"CalendarDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{calendar1:G(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function NE(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-calendar"),c=y("doc-example"),g=y("sui-container");return k(),be("div",null,[t(m,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Calendar",description:"A standard calendar",code:e.calendarCode},{default:i(()=>[t(r,{modelValue:e.calendar1,"onUpdate:modelValue":a[0]||(a[0]=p=>e.calendar1=p),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const OE=Re(HE,[["render",NE]]),qE=P({name:"PropertyListTable",props:{properties:Array}});function jE(e,a,l,o,s,d){const m=y("sui-table-header-cell"),f=y("sui-table-row"),r=y("sui-table-header"),c=y("sui-table-cell"),g=y("sui-table-body"),p=y("sui-table");return k(),B(p,{celled:""},{default:i(()=>[t(r,null,{default:i(()=>[t(f,null,{default:i(()=>[t(m,null,{default:i(()=>[n("Name")]),_:1}),t(m,null,{default:i(()=>[n("Type")]),_:1}),t(m,null,{default:i(()=>[n("Default")]),_:1}),t(m,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.properties,h=>(k(),B(f,{key:h.name},{default:i(()=>[t(c,null,{default:i(()=>[n(Te(h.name),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.type),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.default),1)]),_:2},1024),t(c,null,{default:i(()=>[n(Te(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const $n=Re(qE,[["render",jE]]),GE=P({name:"CheckboxDoc",components:{DocPageHeader:ct,DocExample:et,PropertyListTable:$n},setup(){const e=G(!1),a='<sui-checkbox label="Make my profile visible" v-model="checked" />',l=G([]),o=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,s=G(!1),d='<sui-checkbox toggle v-model="toggle" />',m=G(!1);return{checked:e,checkboxCode:a,selected:l,multipleCode:o,toggle:s,toggleCode:d,slider:m,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),UE={class:"ui form"},YE={class:"grouped fields"},JE={class:"field"},WE={class:"field"},KE={class:"field"};function XE(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-checkbox"),c=y("doc-example"),g=y("property-list-table"),p=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),A=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Checkbox",description:"A standard checkbox",code:e.checkboxCode},{default:i(()=>[t(r,{label:"Make my profile visible",modelValue:e.checked,"onUpdate:modelValue":a[0]||(a[0]=_=>e.checked=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:e.multipleCode},{default:i(()=>[S("div",UE,[S("div",YE,[S("div",JE,[t(r,{label:"Apple",value:"Apple",modelValue:e.selected,"onUpdate:modelValue":a[1]||(a[1]=_=>e.selected=_)},null,8,["modelValue"])]),S("div",WE,[t(r,{label:"Banana",value:"Banana",modelValue:e.selected,"onUpdate:modelValue":a[2]||(a[2]=_=>e.selected=_)},null,8,["modelValue"])]),S("div",KE,[t(r,{label:"Chocolate",value:"Chocolate",modelValue:e.selected,"onUpdate:modelValue":a[3]||(a[3]=_=>e.selected=_)},null,8,["modelValue"])])])]),n(" selected : "+Te(e.selected),1)]),_:1},8,["code"]),t(c,{title:"Toggle",description:"A checkbox can toggle",code:e.toggleCode},{default:i(()=>[t(r,{toggle:"",modelValue:e.toggle,"onUpdate:modelValue":a[4]||(a[4]=_=>e.toggle=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Slider",description:"A checkbox can look like a slider",code:e.sliderCode},{default:i(()=>[t(r,{slider:"",modelValue:e.slider,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const QE=Re(GE,[["render",XE]]),ZE=P({name:"DimmerDoc",components:{DocPageHeader:ct,DocExample:et},setup(){const e=`<sui-dimmer-dimmable>
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
</div>`}}});function e2(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-image"),c=y("sui-image-group"),g=y("sui-dimmer"),p=y("sui-dimmer-dimmable"),h=y("doc-example"),w=y("sui-icon"),b=y("sui-button"),A=y("sui-header-subheader"),$=y("sui-container");return k(),be("div",null,[t(m,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),t($,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:e.dimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(r,{src:de}),t(r,{src:de}),t(r,{src:de})]),_:1}),t(r,{size:"medium",src:ei}),t(g,{active:""})]),_:1})]),_:1},8,["code"]),t(h,{title:"Content Dimmer",description:"A dimmer can display content",code:e.contentDimmerCode},{default:i(()=>[t(p,null,{default:i(()=>[t(f,{as:"h3"},{default:i(()=>[n("Overlayable Section")]),_:1}),t(c,{size:"small"},{default:i(()=>[t(r,{src:de}),t(r,{src:de}),t(r,{src:de})]),_:1}),t(r,{size:"medium",src:ei}),t(g,{active:""},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:e.pageDimmerCode},{default:i(()=>[S("div",null,[t(b,{labeled:"",icon:"",onClick:a[0]||(a[0]=D=>e.active=!0)},{default:i(()=>[t(w,{name:"plus"}),n(" Show ")]),_:1}),t(g,{active:e.active,page:"",onClick:a[1]||(a[1]=D=>e.active=!1)},{default:i(()=>[t(f,{as:"h2",icon:"",inverted:""},{default:i(()=>[t(w,{name:"heart"}),n(" Dimmed Message! "),t(A,null,{default:i(()=>[n("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const t2=Re(ZE,[["render",e2]]),i2=P({name:"DropdownDoc",components:{DocPageHeader:ct,DocExample:et},setup(){const e=`<sui-dropdown text="File">
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
/>`,o=G(null),s=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],d=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,m=G(null),f=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],r=`<sui-dropdown
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
/>`,A=G(null),$=`<sui-dropdown
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
/>`,D=G({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:e,selected1:a,selectionCode:l,selected2:o,searchSelectionOptions:s,searchSelectionCode:d,selected3:m,clearableSelectionOptions:f,clearableSelectionCode:r,selected4:c,multipleCode:g,selected5:p,multipleCode2:h,selected6:w,searchDropdownCode:b,selected7:A,searchInMenuCode:$,selected8:D,inlineCode:`<span>
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
</sui-button-group>`}}});function a2(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-dropdown-item"),c=y("sui-divider"),g=y("sui-dropdown-menu"),p=y("sui-dropdown"),h=y("doc-example"),w=y("sui-button"),b=y("sui-button-group"),A=y("sui-container");return k(),be("div",null,[t(m,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),t(A,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(h,{title:"Dropdown",description:"A dropdown",code:e.dropdownCode},{default:i(()=>[t(p,{text:"File"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{text:"New"}),t(r,{text:"Open...",description:"ctrl + o"}),t(r,{text:"Save as...",description:"ctrl + s"}),t(r,{text:"Rename",description:"ctrl + r"}),t(r,{text:"Make a copy"}),t(r,{icon:"folder",text:"Move to folder"}),t(r,{icon:"trash",text:"Move to trash"}),t(c),t(r,{text:"Download As..."}),t(r,{text:"Publish To Web"}),t(r,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:e.selectionCode},{default:i(()=>[t(p,{selection:"",placeholder:"Pet",modelValue:e.selected1,"onUpdate:modelValue":a[0]||(a[0]=$=>e.selected1=$),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:e.searchSelectionCode},{default:i(()=>[t(p,{search:"",selection:"",fluid:"",modelValue:e.selected2,"onUpdate:modelValue":a[1]||(a[1]=$=>e.selected2=$),options:e.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:e.clearableSelectionCode},{default:i(()=>[t(p,{clearable:"",selection:"",modelValue:e.selected3,"onUpdate:modelValue":a[2]||(a[2]=$=>e.selected3=$),options:e.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),t(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:e.multipleCode},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",modelValue:e.selected4,"onUpdate:modelValue":a[3]||(a[3]=$=>e.selected4=$),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{code:e.multipleCode2},{default:i(()=>[t(p,{selection:"",multiple:"",fluid:"",search:"",modelValue:e.selected5,"onUpdate:modelValue":a[4]||(a[4]=$=>e.selected5=$),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:e.searchDropdownCode},{default:i(()=>[t(p,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:e.selected6,"onUpdate:modelValue":a[5]||(a[5]=$=>e.selected6=$),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:e.searchInMenuCode},{default:i(()=>[t(p,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:e.selected7,"onUpdate:modelValue":a[6]||(a[6]=$=>e.selected7=$),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),t(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:e.inlineCode},{default:i(()=>[S("span",null,[n(" Show me posts by "),t(p,{inline:"",modelValue:e.selected8,"onUpdate:modelValue":a[7]||(a[7]=$=>e.selected8=$),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),t(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:e.pointingCode},{default:i(()=>[t(p,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{text:"New"}),t(r,{text:"Save As"}),t(r,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),t(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:e.floatingCode},{default:i(()=>[t(b,{color:"teal"},{default:i(()=>[t(w,null,{default:i(()=>[n("Save")]),_:1}),t(p,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[t(g,null,{default:i(()=>[t(r,{text:"Edit Post",icon:"edit"}),t(r,{text:"Remove Post",icon:"delete"}),t(r,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const l2=Re(i2,[["render",a2]]),n2=P({name:"EmbedDoc",components:{DocPageHeader:ct,DocExample:et},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function o2(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-embed"),c=y("doc-example"),g=y("sui-container");return k(),be("div",null,[t(m,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),t(g,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:e.youtubeCode},{default:i(()=>[t(r,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:e.aspectRatioCode},{default:i(()=>[t(r,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const s2=Re(n2,[["render",o2]]),r2=S("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),u2=S("p",null,"Is it okay to use this photo?",-1),c2=`<template>
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
<\/script>`,d2={__name:"ModalDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(I,{label:"Modal",code:c2},{description:i(()=>[n(" A standard modal ")]),example:i(()=>[t(u(z),{onClick:o[0]||(o[0]=s=>a.value=!0)},{default:i(()=>[n("Show Modal")]),_:1}),t(u(ws),{modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=s=>a.value=s)},{default:i(()=>[t(u(ks),null,{default:i(()=>[n("Select a Photo")]),_:1}),t(u(As),{image:""},{default:i(()=>[t(u(oe),{wrapped:"",size:"medium",src:"/vue-fomantic-ui/images/avatar/large/rachel.png"}),t(u(Ad),null,{default:i(()=>[t(u(fe),null,{default:i(()=>[n("Default Profile Image")]),_:1}),r2,u2]),_:1})]),_:1}),t(u(Cs),null,{default:i(()=>[t(u(z),{positive:"",onClick:o[1]||(o[1]=s=>a.value=!1)},{default:i(()=>[n("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},m2=S("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1),p2=`<template>
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
<\/script>`,f2={__name:"BasicDoc",setup(e){const a=G(!1);return(l,o)=>(k(),B(I,{label:"Basic",code:p2},{description:i(()=>[n(" A modal can reduce its complexity ")]),example:i(()=>[t(u(z),{onClick:o[0]||(o[0]=s=>a.value=!0)},{default:i(()=>[n("Basic Modal")]),_:1}),t(u(ws),{basic:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=s=>a.value=s)},{default:i(()=>[t(u(ks),{icon:""},{default:i(()=>[t(u(W),{name:"archive"}),n(" Archive Old Messages")]),_:1}),t(u(As),null,{default:i(()=>[m2]),_:1}),t(u(Cs),null,{default:i(()=>[t(u(z),{basic:"",color:"red",inverted:"",icon:"remove",content:"No",onClick:o[1]||(o[1]=s=>a.value=!1)}),t(u(z),{basic:"",color:"green",icon:"checkmark",content:"Yes"})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},g2={__name:"Modal",setup(e){const a=[{id:"modal",label:"Modal",category:"Types",component:d2},{id:"basic",label:"Basic",category:"Types",component:f2}];return(l,o)=>(k(),B(rt,{title:"Modal",description:"A modal displays content that temporarily blocks interactions with the main view of a site","component-docs":a}))}},h2="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",_2=P({name:"PopupDoc",components:{DocPageHeader:ct,DocExample:et},setup(){const e=G(null),a=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,l=G(null),o=G(null),s=G(null),d=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
</sui-popup>`,r=G(null),c=`<sui-button icon ref="basicTrigger">
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
</sui-popup>`,b=G(null),A=G(null),$=G(null),D=G(null),_=G(null),v=G(null),x=G(null),T=G(null),E=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,U=G(null),K=G(null);return{popupTrigger:e,popupCode:a,titledTrigger1:l,titledTrigger2:o,titledTrigger3:s,titledCode:d,triggerTriger:m,triggerCode:f,basicTrigger:r,basicCode:c,wideTrigger1:g,wideTrigger2:p,wideTrigger3:h,wideCode:w,positionTrigger1:b,positionTrigger2:A,positionTrigger3:$,positionTrigger4:D,positionTrigger5:_,positionTrigger6:v,positionTrigger7:x,positionTrigger8:T,positionCode:E,flowingTrigger:V,flowingCode:M,sizeTrigger1:F,sizeTrigger2:j,sizeTrigger3:Q,sizeTrigger4:Y,sizeTrigger5:ge,sizeCode:Be,invertedTrigger1:U,invertedTrigger2:K,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),b2=S("p",null,[S("b",null,"2"),n(" projects, $10 a month ")],-1),v2=S("p",null,[S("b",null,"5"),n(" projects, $20 a month ")],-1),S2=S("p",null,[S("b",null,"8"),n(" projects, $25 a month ")],-1);function y2(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-icon"),c=y("sui-button"),g=y("sui-popup"),p=y("doc-example"),h=y("sui-image"),w=y("sui-card-header"),b=y("sui-card-description"),A=y("sui-card-content"),$=y("sui-card"),D=y("sui-rating"),_=y("sui-divider"),v=y("sui-grid-column"),x=y("sui-grid"),T=y("sui-container");return k(),be("div",null,[t(m,{title:"Popup",sub:"A popup displays additional information on top of a page"}),t(T,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(p,{title:"Popup",description:"An element can specify popup content to appear",code:e.popupCode},{default:i(()=>[t(c,{icon:"",ref:"popupTrigger"},{default:i(()=>[t(r,{name:"add"})]),_:1},512),t(g,{trigger:e.popupTrigger},{default:i(()=>[n(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Titled",description:"An element can specify popup content with a title",code:e.titledCode},{default:i(()=>[t(h,{avatar:"",src:oi,ref:"titledTrigger1"},null,512),t(h,{avatar:"",src:Po,ref:"titledTrigger2"},null,512),t(h,{avatar:"",src:xn,ref:"titledTrigger3"},null,512),t(g,{trigger:e.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),t(g,{trigger:e.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Trigger",description:"A trigger can be complex element",code:e.triggerCode},{default:i(()=>[t($,{ref:"triggerTriger"},{default:i(()=>[t(h,{src:h2}),t(A,null,{default:i(()=>[t(w,null,{default:i(()=>[n("My Neighbor Totoro")]),_:1}),t(b,null,{default:i(()=>[n(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),t(g,{trigger:e.triggerTriger,header:"User Rating"},{default:i(()=>[t(D,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(p,{title:"Basic",description:"A popup can provide more basic formatting",code:e.basicCode},{default:i(()=>[t(c,{icon:"",ref:"basicTrigger"},{default:i(()=>[t(r,{name:"add"})]),_:1},512),t(g,{trigger:e.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Position",description:"A popup can be position around its trigger",code:e.positionCode},{default:i(()=>[t(c,{ref:"positionTrigger1"},{default:i(()=>[n("Top Left")]),_:1},512),t(c,{ref:"positionTrigger2"},{default:i(()=>[n("Top Center")]),_:1},512),t(c,{ref:"positionTrigger3"},{default:i(()=>[n("Top Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger4"},{default:i(()=>[n("Bottom Left")]),_:1},512),t(c,{ref:"positionTrigger5"},{default:i(()=>[n("Bottom Center")]),_:1},512),t(c,{ref:"positionTrigger6"},{default:i(()=>[n("Bottom Right")]),_:1},512),t(_),t(c,{ref:"positionTrigger7"},{default:i(()=>[n("Right Center")]),_:1},512),t(c,{ref:"positionTrigger8"},{default:i(()=>[n("Left Center")]),_:1},512),t(g,{trigger:e.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),t(g,{trigger:e.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:e.flowingCode},{default:i(()=>[t(c,{ref:"flowingTrigger"},{default:i(()=>[n("Show Flowing Popup")]),_:1},512),t(g,{trigger:e.flowingTrigger,flowing:""},{default:i(()=>[t(x,{centered:"",divided:"",columns:3},{default:i(()=>[t(v,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Basic Plan")]),_:1}),b2,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Business Plan")]),_:1}),v2,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1}),t(v,{textAlign:"center"},{default:i(()=>[t(f,{as:"h4"},{default:i(()=>[n("Premium Plan")]),_:1}),S2,t(c,null,{default:i(()=>[n("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Size",description:"A popup can vary in size",code:e.sizeCode},{default:i(()=>[t(r,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),t(r,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),t(r,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),t(r,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),t(r,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),t(g,{size:"mini",content:"Hello. This is a mini popup",trigger:e.sizeTrigger1},null,8,["trigger"]),t(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:e.sizeTrigger2},null,8,["trigger"]),t(g,{size:"small",content:"Hello. This is a small popup",trigger:e.sizeTrigger3},null,8,["trigger"]),t(g,{size:"large",content:"Hello. This is a large popup",trigger:e.sizeTrigger4},null,8,["trigger"]),t(g,{size:"huge",content:"Hello. This is a huge popup",trigger:e.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:e.wideCode},{default:i(()=>[t(r,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),t(r,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),t(r,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),t(g,{trigger:e.wideTrigger1},{default:i(()=>[n(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger2,wide:""},{default:i(()=>[n(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),t(g,{trigger:e.wideTrigger3,wide:"very"},{default:i(()=>[n(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),t(p,{title:"Inverted",description:"A popup can have its colors inverted",code:e.invertedCode},{default:i(()=>[t(r,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),t(c,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[t(r,{name:"add"})]),_:1},512),t(g,{trigger:e.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),t(g,{trigger:e.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const w2=Re(_2,[["render",y2]]),C2=P({name:"RatingDoc",components:{DocPageHeader:ct,DocExample:et,PropertyListTable:$n},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),A2=S("br",null,null,-1),k2=S("br",null,null,-1),x2=S("br",null,null,-1),$2=S("br",null,null,-1),B2=S("br",null,null,-1),T2=S("br",null,null,-1),D2=S("br",null,null,-1),L2=S("br",null,null,-1),I2=S("br",null,null,-1),E2=S("br",null,null,-1),R2=S("br",null,null,-1),z2=S("br",null,null,-1),P2=S("br",null,null,-1),F2=S("br",null,null,-1),V2=S("br",null,null,-1),M2=S("br",null,null,-1),H2=S("br",null,null,-1),N2=S("br",null,null,-1),O2=S("br",null,null,-1),q2=S("br",null,null,-1),j2=S("br",null,null,-1),G2=S("br",null,null,-1),U2=S("br",null,null,-1),Y2=S("br",null,null,-1),J2=S("br",null,null,-1),W2=S("br",null,null,-1),K2=S("br",null,null,-1),X2=S("br",null,null,-1),Q2=S("br",null,null,-1),Z2=S("br",null,null,-1),eR=S("br",null,null,-1),tR=S("br",null,null,-1),iR=S("br",null,null,-1),aR=S("br",null,null,-1),lR=S("br",null,null,-1),nR=S("br",null,null,-1),oR=S("br",null,null,-1),sR=S("br",null,null,-1),rR=S("br",null,null,-1),uR=S("br",null,null,-1),cR=S("br",null,null,-1),dR=S("br",null,null,-1),mR=S("br",null,null,-1),pR=S("br",null,null,-1),fR=S("br",null,null,-1),gR=S("br",null,null,-1),hR=S("br",null,null,-1),_R=S("br",null,null,-1);function bR(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-rating"),c=y("doc-example"),g=y("property-list-table"),p=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),A=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Rating",sub:"A rating indicates user interest in content"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Rating",description:"A Basic rating",code:e.ratingCode},{default:i(()=>[t(r)]),_:1},8,["code"]),t(c,{title:"Icon",description:"You can use any available icon as rating indicator",code:e.iconCode},{default:i(()=>[t(r,{defaultRating:2,maxRating:4,color:"yellow"}),A2,k2,t(r,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),x2,$2,t(r,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),B2,T2,t(r,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),D2,L2,t(r,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),I2,E2,t(r,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),R2,z2,t(r,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),t(c,{title:"Color",description:"You can specify any color of the FUI color palette",code:e.colorCode},{default:i(()=>[t(r,{defaultRating:1,maxRating:7,color:"red"}),P2,F2,t(r,{defaultRating:2,maxRating:7,color:"orange"}),V2,M2,t(r,{defaultRating:3,maxRating:7,color:"yellow"}),H2,N2,t(r,{defaultRating:4,maxRating:7,color:"olive"}),O2,q2,t(r,{defaultRating:5,maxRating:7,color:"green"}),j2,G2,t(r,{defaultRating:6,maxRating:7,color:"teal"}),U2,Y2,t(r,{defaultRating:6,maxRating:7,color:"blue"}),J2,W2,t(r,{defaultRating:5,maxRating:7,color:"violet"}),K2,X2,t(r,{defaultRating:4,maxRating:7,color:"purple"}),Q2,Z2,t(r,{defaultRating:3,maxRating:7,color:"pink"}),eR,tR,t(r,{defaultRating:2,maxRating:7,color:"brown"}),iR,aR,t(r,{defaultRating:1,maxRating:7,color:"grey"}),lR,nR,t(r,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("States")]),_:1}),t(c,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:e.disabledCode},{default:i(()=>[t(r,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Size",description:"A rating can vary in size",code:e.sizeCode},{default:i(()=>[t(r,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),oR,sR,t(r,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),rR,uR,t(r,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),cR,dR,t(r,{defaultRating:3,maxRating:4,color:"yellow"}),mR,pR,t(r,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),fR,gR,t(r,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),hR,_R,t(r,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(g,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const vR=Re(C2,[["render",bR]]),SR=P({name:"SidebarDoc",components:{DocPageHeader:ct,DocExample:et,PropertyListTable:$n},setup(){return{visible1:G(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),yR={class:"pusher"};function wR(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-icon"),c=y("sui-button"),g=y("sui-grid-column"),p=y("sui-menu-item"),h=y("sui-sidebar"),w=y("sui-image"),b=y("sui-segment"),A=y("sui-grid"),$=y("doc-example"),D=y("property-list-table"),_=y("sui-table-header-cell"),v=y("sui-table-row"),x=y("sui-table-header"),T=y("sui-table-cell"),E=y("sui-table-body"),V=y("sui-table"),M=y("sui-container");return k(),be("div",null,[t(m,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),t(M,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t($,{title:"Sidebar",description:"A sidebar",code:e.sidebarCode},{default:i(()=>[t(A,{columns:1},{default:i(()=>[t(g,null,{default:i(()=>[t(c,{onClick:a[0]||(a[0]=F=>e.visible1=!e.visible1),icon:""},{default:i(()=>[t(r,{name:"arrow right"})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(b,{class:"pushable"},{default:i(()=>[t(h,{visible:e.visible1,"onUpdate:visible":a[1]||(a[1]=F=>e.visible1=F),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[t(p,null,{default:i(()=>[t(r,{name:"home"}),n(" Home ")]),_:1}),t(p,null,{default:i(()=>[t(r,{name:"gamepad"}),n(" Games ")]),_:1}),t(p,null,{default:i(()=>[t(r,{name:"camera"}),n(" Channels ")]),_:1})]),_:1},8,["visible"]),S("div",yR,[t(b,null,{default:i(()=>[t(f,{as:"h2"},{default:i(()=>[n("Main Header")]),_:1}),t(w,{src:ze})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(D,{properties:e.properties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(V,{celled:""},{default:i(()=>[t(x,null,{default:i(()=>[t(v,null,{default:i(()=>[t(_,null,{default:i(()=>[n("Name")]),_:1}),t(_,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(E,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.events,F=>(k(),B(v,{key:F.name},{default:i(()=>[t(T,null,{default:i(()=>[n(Te(F.name),1)]),_:2},1024),t(T,null,{default:i(()=>[n(Te(F.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const CR=Re(SR,[["render",wR]]),AR=P({name:"SliderDoc",components:{DocPageHeader:ct,DocExample:et},setup(){const e=G(5),a='<sui-slider v-model="slider1" />',l=G(4),o='<sui-slider labeled v-model="slider2" />',s=G(6),d='<sui-slider labeled="ticked" v-model="slider3" />',m=G(0),f=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,r=G(40),c='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=G([]);g.value.push(20,60);const p='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=G(7),w='<sui-slider disabled v-model="slider7" />',b=G(8),A=`<sui-segment inverted>
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
</sui-segment>`,De=G(5),Je=G(5),ot=G(5);return{slider1:e,sliderCode:a,slider2:l,labeledSliderCode:o,slider3:s,labeledTickedCode:d,slider4:m,customLabelsCode:f,slider5:r,stepCode:c,slider6:g,rangeCode:p,slider7:h,disabledCode:w,slider8:b,invertedCode:A,slider9:$,reversedCode:D,slider10:_,verticalCode:v,redSlider:x,orangeSlider:T,yellowSlider:E,oliveSlider:V,greenSlider:M,tealSlider:F,blueSlider:j,violetSlider:Q,purpleSlider:Y,pinkSlider:ge,brownSlider:Be,greySlider:U,blackSlider:K,coloredCode:me,invertedColoredCode:ae,smallSlider:De,largeSlider:Je,bigSlider:ot,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function kR(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-slider"),c=y("doc-example"),g=y("sui-segment"),p=y("sui-table-header-cell"),h=y("sui-table-row"),w=y("sui-table-header"),b=y("sui-table-cell"),A=y("sui-table-body"),$=y("sui-table"),D=y("sui-container");return k(),be("div",null,[t(m,{title:"Slider",sub:"A slider allows users to select values within a range"}),t(D,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Types")]),_:1}),t(c,{title:"Slider",description:"A standard slider",code:e.sliderCode},{default:i(()=>[t(r,{modelValue:e.slider1,"onUpdate:modelValue":a[0]||(a[0]=_=>e.slider1=_)},null,8,["modelValue"]),n(" "+Te(e.slider1),1)]),_:1},8,["code"]),t(c,{title:"Labeled Slider",description:"A slider that show its labels",code:e.labeledSliderCode},{default:i(()=>[t(r,{labeled:"",modelValue:e.slider2,"onUpdate:modelValue":a[1]||(a[1]=_=>e.slider2=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:e.labeledTickedCode},{default:i(()=>[t(r,{labeled:"ticked",modelValue:e.slider3,"onUpdate:modelValue":a[2]||(a[2]=_=>e.slider3=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:e.customLabelsCode},{default:i(()=>[t(r,{modelValue:e.slider4,"onUpdate:modelValue":a[3]||(a[3]=_=>e.slider4=_),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Step",description:"A slider can change the default step increment",code:e.stepCode},{default:i(()=>[t(r,{modelValue:e.slider5,"onUpdate:modelValue":a[4]||(a[4]=_=>e.slider5=_),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),n(" "+Te(e.slider5),1)]),_:1},8,["code"]),t(c,{title:"Range",description:"A range slider which allow you to select a range between two values",code:e.rangeCode},{default:i(()=>[t(r,{modelValue:e.slider6,"onUpdate:modelValue":a[5]||(a[5]=_=>e.slider6=_),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),n(" "+Te(e.slider6),1)]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Variations")]),_:1}),t(c,{title:"Disabled",description:"A slider can appear disabled",code:e.disabledCode},{default:i(()=>[t(r,{disabled:"",modelValue:e.slider7,"onUpdate:modelValue":a[6]||(a[6]=_=>e.slider7=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted",description:"A slider can be inverted",code:e.invertedCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(r,{inverted:"",modelValue:e.slider8,"onUpdate:modelValue":a[7]||(a[7]=_=>e.slider8=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Reversed",description:"A slider can be reversed",code:e.reversedCode},{default:i(()=>[t(r,{reversed:"",modelValue:e.slider9,"onUpdate:modelValue":a[8]||(a[8]=_=>e.slider9=_)},null,8,["modelValue"]),n(" "+Te(e.slider9),1)]),_:1},8,["code"]),t(c,{title:"Vertical",description:"A slider can be vertical",code:e.verticalCode},{default:i(()=>[t(r,{vertical:"",modelValue:e.slider10,"onUpdate:modelValue":a[9]||(a[9]=_=>e.slider10=_),max:20},null,8,["modelValue"]),n(" "+Te(e.slider10),1)]),_:1},8,["code"]),t(c,{title:"Colored",description:"A slider can be different colors",code:e.coloredCode},{default:i(()=>[t(r,{color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[10]||(a[10]=_=>e.redSlider=_)},null,8,["modelValue"]),t(r,{color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[11]||(a[11]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(r,{color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[12]||(a[12]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(r,{color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[13]||(a[13]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(r,{color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[14]||(a[14]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(r,{color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[15]||(a[15]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(r,{color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[16]||(a[16]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(r,{color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[17]||(a[17]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(r,{color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[18]||(a[18]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(r,{color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[19]||(a[19]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(r,{color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[20]||(a[20]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(r,{color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[21]||(a[21]=_=>e.greySlider=_)},null,8,["modelValue"]),t(r,{color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[22]||(a[22]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(c,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:e.invertedColoredCode},{default:i(()=>[t(g,{inverted:""},{default:i(()=>[t(r,{inverted:"",color:"red",modelValue:e.redSlider,"onUpdate:modelValue":a[23]||(a[23]=_=>e.redSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"orange",modelValue:e.orangeSlider,"onUpdate:modelValue":a[24]||(a[24]=_=>e.orangeSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"yellow",modelValue:e.yellowSlider,"onUpdate:modelValue":a[25]||(a[25]=_=>e.yellowSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"olive",modelValue:e.oliveSlider,"onUpdate:modelValue":a[26]||(a[26]=_=>e.oliveSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"green",modelValue:e.greenSlider,"onUpdate:modelValue":a[27]||(a[27]=_=>e.greenSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"teal",modelValue:e.tealSlider,"onUpdate:modelValue":a[28]||(a[28]=_=>e.tealSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"blue",modelValue:e.blueSlider,"onUpdate:modelValue":a[29]||(a[29]=_=>e.blueSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"violet",modelValue:e.violetSlider,"onUpdate:modelValue":a[30]||(a[30]=_=>e.violetSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"purple",modelValue:e.purpleSlider,"onUpdate:modelValue":a[31]||(a[31]=_=>e.purpleSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"pink",modelValue:e.pinkSlider,"onUpdate:modelValue":a[32]||(a[32]=_=>e.pinkSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"brown",modelValue:e.brownSlider,"onUpdate:modelValue":a[33]||(a[33]=_=>e.brownSlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"grey",modelValue:e.greySlider,"onUpdate:modelValue":a[34]||(a[34]=_=>e.greySlider=_)},null,8,["modelValue"]),t(r,{inverted:"",color:"black",modelValue:e.blackSlider,"onUpdate:modelValue":a[35]||(a[35]=_=>e.blackSlider=_)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),t(c,{title:"Size",description:"A slider can have different sizes",code:e.sizeCode},{default:i(()=>[t(r,{size:"small",color:"red",modelValue:e.smallSlider,"onUpdate:modelValue":a[36]||(a[36]=_=>e.smallSlider=_)},null,8,["modelValue"]),t(r,{size:"large",color:"yellow",modelValue:e.largeSlider,"onUpdate:modelValue":a[37]||(a[37]=_=>e.largeSlider=_)},null,8,["modelValue"]),t(r,{size:"big",color:"olive",modelValue:e.bigSlider,"onUpdate:modelValue":a[38]||(a[38]=_=>e.bigSlider=_)},null,8,["modelValue"])]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Type")]),_:1}),t(p,null,{default:i(()=>[n("Default")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.properties,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.type),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.default),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t($,{celled:""},{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[t(p,null,{default:i(()=>[n("Name")]),_:1}),t(p,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t(A,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.events,_=>(k(),B(h,{key:_.name},{default:i(()=>[t(b,null,{default:i(()=>[n(Te(_.name),1)]),_:2},1024),t(b,null,{default:i(()=>[n(Te(_.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const xR=Re(AR,[["render",kR]]),$R=P({name:"TabDoc",components:{DocPageHeader:ct,DocExample:et,PropertyListTable:$n},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function BR(e,a,l,o,s,d){const m=y("doc-page-header"),f=y("sui-header"),r=y("sui-tab-panel"),c=y("sui-tab"),g=y("doc-example"),p=y("property-list-table"),h=y("sui-table-header-cell"),w=y("sui-table-row"),b=y("sui-table-header"),A=y("sui-table-cell"),$=y("sui-table-body"),D=y("sui-table"),_=y("sui-container");return k(),be("div",null,[t(m,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),t(_,{class:"main"},{default:i(()=>[t(f,{as:"h2",dividing:""},{default:i(()=>[n("Examples")]),_:1}),t(g,{title:"Basic",code:e.basicCode},{default:i(()=>[t(c,null,{default:i(()=>[t(r,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(r,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(r,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Pointing",code:e.pointingCode},{default:i(()=>[t(c,{pointing:""},{default:i(()=>[t(r,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(r,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(r,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Secondary",code:e.secondaryCode},{default:i(()=>[t(c,{secondary:""},{default:i(()=>[t(r,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(r,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(r,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(g,{title:"Text",code:e.textCode},{default:i(()=>[t(c,{text:""},{default:i(()=>[t(r,{header:"First"},{default:i(()=>[n("Content A")]),_:1}),t(r,{header:"Second"},{default:i(()=>[n("Content B")]),_:1}),t(r,{header:"Third"},{default:i(()=>[n("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Properties")]),_:1}),t(f,{as:"h3"},{default:i(()=>[n("Tab")]),_:1}),t(p,{properties:e.tabProperties},null,8,["properties"]),t(f,{as:"h3"},{default:i(()=>[n("TabPanel")]),_:1}),t(p,{properties:e.tabPanelProperties},null,8,["properties"]),t(f,{as:"h2",dividing:""},{default:i(()=>[n("Events")]),_:1}),t(D,{celled:""},{default:i(()=>[t(b,null,{default:i(()=>[t(w,null,{default:i(()=>[t(h,null,{default:i(()=>[n("Name")]),_:1}),t(h,null,{default:i(()=>[n("Description")]),_:1})]),_:1})]),_:1}),t($,null,{default:i(()=>[(k(!0),be(Ae,null,Qe(e.events,v=>(k(),B(w,{key:v.name},{default:i(()=>[t(A,null,{default:i(()=>[n(Te(v.name),1)]),_:2},1024),t(A,null,{default:i(()=>[n(Te(v.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const TR=Re($R,[["render",BR]]),DR=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,LR={__name:"MinimalDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"I am a toast, nice to meet you !"})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Minimal",code:DR},{description:i(()=>[n(" A minimal toast will just display a message. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},IR=`<template>
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
<\/script>`,ER={__name:"TitledDoc",setup(e){const{toast:a}=ut(),l=()=>{a({title:"Better ?",message:"Hey look, I have a title !"})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Titled",code:IR},{description:i(()=>[n(" You can add a title to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},RR=`<template>
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
<\/script>`,zR={__name:"ProgressBarDoc",setup(e){const{toast:a}=ut(),l=o=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:o})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Progress Bar",code:RR},{description:i(()=>[n(" You can attach a progress bar to your toast. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1}),t(d,{color:"red",onClick:s[0]||(s[0]=m=>l("red"))},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},PR=`<template>
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
<\/script>`,FR={__name:"ToastTypeDoc",setup(e){const{toast:a}=ut(),l=o=>{a({message:"You're using the good framework !",type:o})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Toast Type",code:PR},{description:i(()=>[n(" A toast can be used to display different types of informations. ")]),example:i(()=>[t(d,{onClick:s[0]||(s[0]=m=>l("success")),positive:""},{default:i(()=>[n("Success")]),_:1}),t(d,{onClick:s[1]||(s[1]=m=>l("error")),negative:""},{default:i(()=>[n("Error")]),_:1}),t(d,{onClick:s[2]||(s[2]=m=>l("warning")),color:"yellow"},{default:i(()=>[n("Warning")]),_:1})]),_:1})}}},VR=`<template>
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
<\/script>`,MR={__name:"PositionDoc",setup(e){const{toast:a}=ut(),l=o=>{a({position:o,message:"Look, I'm here !"})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Position",code:VR},{description:i(()=>[n(" A toast can appear at different positions on the screen. ")]),example:i(()=>[t(d,{onClick:s[0]||(s[0]=m=>l("top left"))},{default:i(()=>[n("Top Left")]),_:1}),t(d,{onClick:s[1]||(s[1]=m=>l("bottom right"))},{default:i(()=>[n("Bottom Right")]),_:1})]),_:1})}}},HR=S("br",null,null,-1),NR=`<template>
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
<\/script>`,OR={__name:"AttachedPosition",setup(e){const{toast:a}=ut(),l=o=>{a({attached:o,title:"Watch out!",message:`I am a ${o} attached toast`})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Attached Position",code:NR},{description:i(()=>[n(" A toast can have an attached position which will show the toast over the whole width of the screen."),HR,n(" Just like notifications on mobile devices. ")]),example:i(()=>[t(d,{onClick:s[0]||(s[0]=m=>l("top"))},{default:i(()=>[n("Top")]),_:1}),t(d,{onClick:s[1]||(s[1]=m=>l("bottom"))},{default:i(()=>[n("Bottom")]),_:1})]),_:1})}}},qR=`<template>
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
<\/script>`,jR={__name:"DirectionDoc",setup(e){const{toast:a}=ut(),l=()=>{a({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Direction",code:qR},{description:i(()=>[n(" Toasts can stack horizontal ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},GR=`<template>
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
<\/script>`,UR={__name:"CenterAligned",setup(e){const{toast:a}=ut(),l=()=>{a({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Center Aligned",code:GR},{description:i(()=>[n(" The toasts content can be shown center aligned. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},YR=`<template>
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
<\/script>`,JR={__name:"DurationDoc",setup(e){const{toast:a}=ut(),l=o=>{a({displayTime:o,message:o===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Duration",code:YR},{description:i(()=>[n(" You can choose how long a toast should be displayed. ")]),example:i(()=>[t(d,{onClick:s[0]||(s[0]=m=>l(5e3))},{default:i(()=>[n("5 seconds")]),_:1}),t(d,{onClick:s[1]||(s[1]=m=>l(0))},{default:i(()=>[n("Stay")]),_:1})]),_:1})}}},WR=`<template>
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
<\/script>`,KR={__name:"MessageStyleDoc",setup(e){const{toast:a}=ut(),l=()=>{a({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Use Message Style",code:WR},{description:i(()=>[n(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},XR=`<template>
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
<\/script>`,QR={__name:"IncreasingProgressBarDoc",setup(e){const{toast:a}=ut(),l=()=>{a({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(o,s)=>{const d=y("SuiButton");return k(),B(I,{label:"Increasing Progress Bar",code:XR},{description:i(()=>[n(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[t(d,{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},ZR=`<template>
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
<\/script>`,ez={__name:"ColorVariantsDoc",setup(e){const{toast:a}=ut(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{a({color:o[l.value],message:"I am a colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,m)=>{const f=y("SuiButton");return k(),B(I,{label:"Color Variants",code:ZR},{description:i(()=>[n(" You can use all of the usual color names. ")]),example:i(()=>[t(f,{onClick:s},{default:i(()=>[n("Show")]),_:1})]),_:1})}}},tz={__name:"InvertedColorsDoc",setup(e){const{toast:a}=ut(),l=G(0),o=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],s=()=>{a({color:o[l.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),l.value=(l.value+1)%o.length};return(d,m)=>{const f=y("SuiButton");return k(),B(I,{label:"Inverted Colors",code:d.code},{description:i(()=>[n(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[t(f,{onClick:s},{default:i(()=>[n("Show")]),_:1})]),_:1},8,["code"])}}},iz=`<template>
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
<\/script>`,az={__name:"ActionGeneralDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>[X(W,{name:"check"}),"Yes"]),X(z,{color:"red",icon:!0},()=>[X(W,{name:"ban"})]),X(z,{color:"blue",onclick:()=>a({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(o,s)=>(k(),B(I,{label:"General",code:iz},{description:i(()=>[n(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[t(u(z),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},lz=`<template>
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
<\/script>`,nz={__name:"ActionBasicDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"yellow",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(o,s)=>(k(),B(I,{label:"Basic",code:lz},{description:i(()=>[n(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[t(u(z),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},oz=`<template>
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
<\/script>`,sz={__name:"ActionAttachedDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(o,s)=>(k(),B(I,{label:"Attached",code:oz},{description:i(()=>[n(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[t(u(z),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},rz=`<template>
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
<\/script>`,uz={__name:"ActionVerticalDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(o,s)=>(k(),B(I,{label:"Vertical",code:rz},{description:i(()=>[n(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[t(u(z),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},cz=S("br",null,null,-1),dz=`<template>
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
<\/script>`,mz={__name:"ActionVerticalAttachedDoc",setup(e){const{toast:a}=ut(),l=()=>{a({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:o})=>[X(z,{color:"green",onclick:()=>{a({message:'You clicked "yes", toast closes by default'}),o()}},()=>"Yes, really"),X(z,{color:"red",onclick:()=>{a({message:'You clicked "maybe", toast closes by default'}),o()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(o,s)=>(k(),B(I,{label:"Vertical Attached",code:dz},{description:i(()=>[n(" Vertical actions can also be displayed as button groups using vertical attached."),cz,n(" Vertical attached actions also support left. ")]),example:i(()=>[t(u(z),{onClick:l},{default:i(()=>[n("Show")]),_:1})]),_:1}))}},pz={__name:"Toast",setup(e){const a=[{id:"minimal",label:"Minimal",category:"Types",component:LR},{id:"titled",label:"Titled",category:"Types",component:ER},{id:"progress-bar",label:"Progress Bar",category:"Types",component:zR},{id:"toast-type",label:"Toast Type",category:"Variations",component:FR},{id:"position",label:"Position",category:"Variations",component:MR},{id:"attached-position",label:"Attached Position",category:"Variations",component:OR},{id:"direction",label:"Direction",category:"Variations",component:jR},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:UR},{id:"duration",label:"Duration",category:"Variations",component:JR},{id:"message-style",label:"Use Message Style",category:"Variations",component:KR},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:QR},{id:"color-variants",label:"Color Variants",category:"Variations",component:ez},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:tz},{id:"general",label:"General",category:"Actions",component:az},{id:"action-basic",label:"Basic",category:"Actions",component:nz},{id:"action-attached",label:"Attached",category:"Actions",component:sz},{id:"action-vertical",label:"Vertical",category:"Actions",component:uz},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:mz}];return(l,o)=>(k(),B(rt,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":a}))}},fz=[{path:"/",component:Eh,children:[{path:"/",component:s_},{path:"elements/button",component:zw},{path:"elements/container",component:Yw},{path:"elements/divider",component:bC},{path:"elements/emoji",component:TC},{path:"elements/flag",component:RC},{path:"elements/header",component:mA},{path:"elements/icon",component:jA},{path:"elements/image",component:L0},{path:"elements/input",component:ik},{path:"elements/label",component:mx},{path:"elements/list",component:Vx},{path:"elements/loader",component:s$},{path:"elements/rail",component:d$},{path:"elements/reveal",component:A$},{path:"elements/segment",component:KT},{path:"elements/step",component:iD},{path:"collections/breadcrumb",component:vD},{path:"collections/form",component:VD},{path:"collections/grid",component:GD},{path:"collections/menu",component:ZD},{path:"collections/message",component:dL},{path:"collections/table",component:AL},{path:"views/advertisement",component:()=>Ll(()=>import("./Advertisement-P-HklMna.js"),__vite__mapDeps([]))},{path:"views/card",component:nI},{path:"views/comment",component:()=>Ll(()=>import("./Comment-HNGG_JCu.js"),__vite__mapDeps([]))},{path:"views/feed",component:$I},{path:"views/item",component:hE},{path:"views/statistic",component:()=>Ll(()=>import("./Statistic-oemF05ie.js"),__vite__mapDeps([]))},{path:"modules/accordion",component:ME},{path:"modules/calendar",component:OE},{path:"modules/checkbox",component:QE},{path:"modules/dimmer",component:t2},{path:"modules/dropdown",component:l2},{path:"modules/embed",component:s2},{path:"modules/modal",component:g2},{path:"modules/popup",component:w2},{path:"modules/progress",component:()=>Ll(()=>import("./Progress-LF3uYsC4.js"),__vite__mapDeps([]))},{path:"modules/rating",component:vR},{path:"modules/sidebar",component:CR},{path:"modules/slider",component:xR},{path:"modules/tab",component:TR},{path:"modules/toast",component:pz}]}],gz=mh({history:$g("/vue-fomantic-ui/"),routes:fz,scrollBehavior(e,a,l){var o;e.hash||(o=document.querySelector(".article"))==null||o.scrollTo(0,0)}});(function(e){var a="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",l={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:l,environment:{pattern:RegExp("\\$"+a),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+a),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+a),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:l}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+a),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},l.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=o.variable[1].inside,m=0;m<s.length;m++)d[s[m]]=e.languages.bash[s[m]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);const Ls=jc(sg);Ls.use(gz);Ls.use(cy);Ls.mount("#app");export{Hv as $,rt as D,Lo as H,Io as X,I as _,n as a,t as b,B as c,S as d,de as e,P as f,X_ as g,xn as h,oi as i,kn as j,nk as k,Po as l,Rl as m,N as n,k as o,Mv as p,W as q,ib as r,G as s,oe as t,u,p_ as v,i as w,Do as x,z as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
